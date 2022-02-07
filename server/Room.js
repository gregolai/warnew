var Game = require("./Game");
var Lobby = require("./Lobby");
var Server = require("./Server");
var Util = require("./Util");
function create(client, roomName, roomPassword, callback) {
    if (!client) {
        callback({ success: false, message: "Client not found." });
        return;
    }
    if (!roomName || (roomName = roomName.trim()) === "") {
        callback({ success: false, message: "Room name cannot be empty." });
        return;
    }
    roomPassword = roomPassword ? roomPassword.trim() : "";
    var slots = [];
    for (var i = 0; i < 8; ++i)
        slots.push({ index: i, closed: false, isHost: false });
    Server.db.collection("global").findAndModify(null, null, { $inc: { prevRoomId: 1 } }, function (err, res) {
        var roomId = res["prevRoomId"] + 1;
        var room = {
            id: roomId,
            name: roomName,
            password: roomPassword,
            slots: slots,
            playersMax: 8,
            clientList: [],
            clientSlotMap: {},
            clientStatusMap: {}
        };
        _rooms[roomId] = room;
        Util.Log.user(client.user, "ROOM CREATED: " + roomId);
        callback({ success: true, roomId: roomId });
    });
}
exports.create = create;
function joinTest(client, roomId, password) {
    if (!client)
        return { success: false, message: "Client not found." };
    var room = _rooms[roomId];
    if (!room)
        return { success: false, message: "Room not found." };
    if (client.roomId === roomId)
        return { success: false, message: "You are already in that room." };
    if (room.countdown)
        return { success: false, message: "Countdown has started." };
    if (room.password !== "" && (password !== room.password))
        return { success: false, message: "Invalid password." };
    if (!_nextOpenSlot(room))
        return { success: false, message: "Room is full." };
    return { success: true };
}
exports.joinTest = joinTest;
function getLobbyRoomList() {
    var ret = [];
    for (var roomId in _rooms) {
        var ri = getRoomInfo(roomId, true);
        if (ri)
            ret.push(ri);
    }
    return ret;
}
exports.getLobbyRoomList = getLobbyRoomList;
function getRoomInfo(roomId, lobby) {
    var room = _rooms[roomId];
    if (!room)
        return null;
    var ret = { id: room.id, name: room.name, host: room.hostUsername || "" };
    if (lobby) {
        ret.playerCount = room.clientList.length;
        ret.playerCapacity = room.playersMax;
        ret.hasPassword = (room.password !== "");
    }
    else {
        ret.clientCount = room.clientList.length;
        ret.slots = [];
        var slots = room.slots;
        for (var s = 0, ss = slots.length; s < ss; ++s)
            ret.slots.push(_getSlotInfo(room, s));
    }
    return ret;
}
exports.getRoomInfo = getRoomInfo;
exports.namespace = Server.io.of("/room").on("connection", function (socket) {
    //export var namespace = Server.connect2("/room", function(socket: Socket, client: Server.ClientData){
    var client = Server.getClient(socket);
    client.socket = socket;
    socket.emit("_auth", { auth: client.auth, user: client.user });
    console.log("room socket id:", socket.id);
    socket.on("join_room", function (roomId, pw) {
        roomId = Util.Sanitize.toInt(roomId);
        pw = Util.Sanitize.toString(pw);
        var result = _join(client, roomId, pw);
        if (result.success) {
            socket.emit("re_join_room", result.roomInfo);
        }
        else
            socket.emit("_error", { message: result.message });
    });
    socket.on("get_room_info", function () {
        var info = getRoomInfo(client.roomId, false);
        if (info)
            socket.emit("re_get_room_info", info);
        else
            socket.emit("_error", { message: "Unable to get room info." });
    });
    socket.on("start_countdown", function () {
        _countdownStart(client);
    });
    socket.on("stop_countdown", function () {
        _countdownStop(client, true);
    });
    socket.on("countdown_complete", function () {
        _countdownComplete(client);
    });
    socket.on("disconnect", function () {
        _leave(client);
    });
});
var _rooms = [];
var _prevRoomId = 0;
var _emptyRooms = [];
setInterval(function () {
    for (var roomId in _emptyRooms)
        _deleteRoom(roomId);
    _emptyRooms.length = 0;
}, 10000);
function _clearHost(room, slot) {
    if (room && slot && slot.isHost) {
        slot.isHost = false;
        room.hostId = undefined;
        room.hostUsername = undefined;
        var next = _nextFilledSlot(room, slot);
        if (next)
            _setHost(room, next);
    }
}
function _countdownComplete(client) {
    var room = _rooms[client.roomId];
    if (room) {
        var countdown = room.countdown;
        if (countdown && !countdown.doneMap[client.id]) {
            countdown.doneCount += 1;
            countdown.doneMap[client.id] = true;
            if (countdown.doneCount === room.clientList.length) {
                room.countdown = undefined;
                var gameId = Game.create(getRoomInfo(room.id, false));
                exports.namespace.to("room_" + room.id).emit("bc_game_ready", gameId);
                _deleteRoom(room.id);
            }
        }
    }
}
function _countdownStart(client) {
    var room = _rooms[client.roomId];
    if (room) {
        if (!room.countdown && room.hostId === client.id) {
            room.countdown = {
                doneCount: 0,
                doneMap: {}
            };
            exports.namespace.to("room_" + room.id).emit("bc_start_countdown", 5);
        }
    }
}
function _countdownStop(client, requiresHost) {
    var room = _rooms[client.roomId];
    if (room) {
        if (room.countdown && (!requiresHost || room.hostId === client.id)) {
            room.countdown = undefined;
            exports.namespace.to("room_" + room.id).emit("bc_stop_countdown");
        }
    }
}
function _deleteRoom(roomId) {
    var room = _rooms[roomId];
    if (room) {
        var socketRoom = _getSocketRoom(roomId);
        var sockets = exports.namespace.clients(socketRoom);
        for (var s in sockets)
            sockets[s].leave(socketRoom, function () { });
        delete _rooms[room.id];
    }
}
function _getSlotInfo(room, slotIndex) {
    var slot = room ? room.slots[slotIndex] : null;
    return slot ? {
        index: slot.index,
        status: slot.user ? "filled" : (slot.closed ? "closed" : "open"),
        user: slot.user,
        isHost: slot.isHost
    } : null;
}
function _getSocketRoom(roomId) {
    return "room_" + roomId;
}
function _join(client, roomId, pw) {
    var result = joinTest(client, roomId, pw);
    if (result.success && roomId !== client.roomId) {
        _leave(client);
        var room = _rooms[roomId];
        var slot = _nextOpenSlot(room);
        slot.clientId = client.id;
        slot.user = client.user;
        slot.closed = true;
        if (room.clientList.length === 0)
            _setHost(room, slot);
        room.clientList.push(client.id);
        room.clientSlotMap[client.id] = slot;
        client.roomId = room.id;
        client.playerId = slot.index;
        delete _emptyRooms[roomId];
        result.roomInfo = getRoomInfo(roomId, false);
        var socketRoom = _getSocketRoom(room.id);
        exports.namespace.to(socketRoom).emit("bc_joined_room", result.roomInfo, _getSlotInfo(room, slot.index));
        client.socket.join(socketRoom, function () { });
        Util.Log.user(client.user, "ROOM JOIN: " + room.id);
        Lobby.namespace.emit("re_get_room_list", getLobbyRoomList());
    }
    return result;
}
function _leave(client) {
    var room = _rooms[client.roomId];
    if (room) {
        var slot = room.clientSlotMap[client.id];
        client.roomId = undefined;
        client.playerId = undefined;
        delete room.clientSlotMap[client.id];
        room.clientList.splice(room.clientList.indexOf(client.id), 1);
        slot.clientId = undefined;
        slot.user = undefined;
        slot.closed = false;
        _clearHost(room, slot);
        var socketRoom = _getSocketRoom(room.id);
        client.socket.leave(socketRoom, function () { });
        exports.namespace.to(socketRoom).emit("bc_left_room", getRoomInfo(room.id, false), client.user);
        Util.Log.user(client.user, "ROOM LEAVE: " + room.id);
        _deleteRoom(room.id);
        Lobby.namespace.emit("re_get_room_list", getLobbyRoomList());
    }
}
function _nextFilledSlot(room, start) {
    if (room && start) {
        var si = start.index;
        var slots = room.slots;
        var nSlots = slots.length;
        for (var i = (si + 1) % nSlots; i !== si; i = (i + 1) % nSlots) {
            var slot = slots[i];
            if (slot && slot.user)
                return slot;
        }
    }
    return null;
}
function _nextOpenSlot(room) {
    if (room) {
        var slots = room.slots;
        for (var i = 0, ii = slots.length; i < ii; ++i) {
            var slot = slots[i];
            if (slot && !slot.user && !slot.closed)
                return slot;
        }
    }
    return null;
}
function _setHost(room, hostSlot) {
    if (room && hostSlot && hostSlot.user) {
        var slots = room.slots;
        for (var i = slots.length - 1; i !== -1; --i) {
            var slot = slots[i];
            if (slot && slot.user) {
                slot.isHost = (slot === hostSlot);
                if (slot.isHost) {
                    room.hostId = slot.clientId;
                    room.hostUsername = slot.user.username;
                }
            }
        }
    }
}
