var Server = require("./Server");
var Util = require("./Util");
function create(room) {
    var gameSlots = [];
    var roomSlots = room.slots;
    for (var i = 0, ii = roomSlots.length; i < ii; ++i) {
        var roomSlot = roomSlots[i];
        gameSlots.push(roomSlot ? {
            index: i,
            isHost: roomSlot.isHost,
            user: roomSlot.user
        } : null);
    }
    var game = {
        id: room.id,
        started: false,
        clientsExpected: room.clientCount,
        clientList: [],
        slots: gameSlots,
        playerIdToSocket: [],
        clientPlayerFlags: 0,
        turn: 0,
        turnStructs: [],
        weightedFrameTime: INIT_FRAME_INTERVAL,
        weightedPingTime: INIT_FRAME_COUNT * INIT_FRAME_INTERVAL
    };
    _games[game.id] = game;
    console.log(game.slots);
    console.log("GAME CREATED: " + game.id);
    return game.id;
}
exports.create = create;
function getGameInfo(gameId) {
    var game = _games[gameId];
    if (!game)
        return null;
    var retSlots = [];
    var slots = game.slots;
    for (var s = 0, ss = slots.length; s < ss; ++s)
        retSlots.push(_getSlotInfo(game, s));
    var info = {
        clientCount: game.clientList.length,
        slots: retSlots
    };
    return info;
}
exports.getGameInfo = getGameInfo;
exports.namespace = Server.io.of("/game").on("connection", function (socket) {
    //export var namespace = Server.connect2("/game", function (socket: Socket, client: Server.ClientData) {
    var client = Server.getClient(socket);
    client.socket = socket;
    socket.emit("_auth", { auth: client.auth, user: client.user });
    console.log("game socket id:", socket.id);
    socket.on("join_game", function (gameId) {
        gameId = Util.Sanitize.toInt(gameId);
        var result = _join(socket, client, gameId);
        if (result.success) {
            var socketGame = _getSocketGame(gameId);
            socket.join(socketGame, function () { });
            socket.emit("re_join_game", client.playerId);
            if (result.gameReady) {
                exports.namespace.to(socketGame).emit("bc_start_game", TURN_DELAY, INIT_FRAME_INTERVAL, INIT_FRAME_COUNT);
            }
        }
        else
            socket.emit("_error", { message: result.message });
    });
    socket.on("turn_done", function (turn, commands, frameTime, pingTime) {
        turn = Util.Sanitize.toInt(turn);
        commands = Util.Sanitize.toString(commands);
        _clientTurnDone(client, turn, commands, frameTime, pingTime);
    });
    socket.on("disconnect", function () {
        // TODO: _leave
    });
});
var _games = [];
var TURN_DELAY = 2;
var INIT_FRAME_INTERVAL = 16;
var INIT_FRAME_COUNT = 2;
var WEIGHTED_BUFFER_LENGTH = 8;
function _getBufferAverage(buffer) {
    var avg = 0;
    var count = 0;
    for (var i in buffer) {
        avg += buffer[i];
        ++count;
    }
    return (count ? avg / count : avg);
}
function _getBufferMaximum(buffer) {
    var max = Number.MIN_VALUE;
    for (var i in buffer) {
        var v = buffer[i];
        if (v > max)
            max = v;
    }
    return max;
}
function _getSlotInfo(game, slotIndex) {
    var slot = game ? game.slots[slotIndex] : null;
    return slot ? {
        index: slot.index,
        user: slot.user,
        isHost: slot.isHost
    } : null;
}
function _getSocketGame(gameId) {
    return "game_" + gameId;
}
function _join(socket, client, gameId) {
    if (!client)
        return { success: false, message: "Client not found." };
    var game = _games[gameId];
    if (!game)
        return { success: false, message: "Game not found." };
    var slot = game.slots[client.playerId];
    if (!slot || !slot.user)
        return { success: false, message: "Could not find slot." };
    if (slot.user.username !== client.user.username)
        return { success: false, message: "Wrong slot." };
    slot.clientId = client.id;
    client.gameId = gameId;
    game.clientList.push(client.id);
    game.playerIdToSocket[client.playerId] = socket;
    game.clientPlayerFlags |= (1 << client.playerId);
    game.started = (game.clientsExpected === game.clientList.length);
    return { success: true, gameReady: game.started };
}
function _pushInWeightedBuffer(buffer, value) {
    if (buffer.length === WEIGHTED_BUFFER_LENGTH)
        buffer.shift();
    buffer.push(value);
}
function _clientTurnDone(client, turn, commands, frameTime, pingTime) {
    var game = _games[client.gameId];
    if (game) {
        var playerId = client.playerId;
        var ts = game.turnStructs[turn];
        if (ts) {
            if (typeof ts.commandMap[playerId] !== "undefined" || turn < game.turn || turn > game.turn + TURN_DELAY)
                return;
        }
        else {
            ts = game.turnStructs[turn] = {
                commandMap: [],
                frameTimeMap: [],
                pingTimeMap: [],
                doneFlags: 0,
                longestFrameTime: -9999,
                longestPingTime: -9999
            };
        }
        ts.commandMap[playerId] = commands;
        ts.frameTimeMap[playerId] = frameTime;
        ts.pingTimeMap[playerId] = pingTime;
        ts.doneFlags |= (1 << playerId);
        if (frameTime > ts.longestFrameTime)
            ts.longestFrameTime = frameTime;
        if (pingTime > ts.longestPingTime)
            ts.longestPingTime = pingTime;
        var ts = game.turnStructs[game.turn];
        while (ts && (ts.doneFlags ^ game.clientPlayerFlags) === 0) {
            game.weightedFrameTime += (ts.longestFrameTime - game.weightedFrameTime) * 0.01;
            game.weightedPingTime += (ts.longestPingTime - game.weightedPingTime) * 0.01;
            var newFrameInterval = Math.max(16, game.weightedFrameTime);
            var newTurnInterval = Math.max(100, game.weightedPingTime);
            var newFrameCount = Math.max(2, Math.floor(newTurnInterval / newFrameInterval));
            var socketGame = _getSocketGame(game.id);
            exports.namespace.to(socketGame).emit("bc_turn_ready", game.turn, ts.commandMap, newFrameInterval, newFrameCount);
            delete game.turnStructs[game.turn];
            game.turn += 1;
            ts = game.turnStructs[game.turn];
        }
    }
}
