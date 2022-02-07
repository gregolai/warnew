var Server = require("./Server");
var Room = require("./Room");
var Util = require("./Util");
exports.namespace = Server.io.of("/lobby").on("connection", function (socket) {
    //export var namespace = Server.connect2("/lobby", function(socket: Socket, client: Server.ClientData){
    var client = Server.getClient(socket);
    client.socket = socket;
    socket.emit("_auth", { auth: client.auth, user: client.user });
    console.log("lobby socket id:", socket.id);
    socket.on("get_room_list", function () {
        socket.emit("re_get_room_list", Room.getLobbyRoomList());
    });
    socket.on("create_room", function (name, pw) {
        name = Util.Sanitize.toString(name);
        pw = Util.Sanitize.toString(pw);
        _createRoom(client, name, pw);
    });
    socket.on("join_room", function (roomId, pw) {
        roomId = Util.Sanitize.toInt(roomId);
        pw = Util.Sanitize.toString(pw);
        _joinRoom(client, roomId, pw);
    });
});
function _createRoom(client, name, pw) {
    Room.create(client, name, pw, function (result) {
        var socket = client.socket;
        if (result.success) {
            console.log("re_create_room - socket id:", socket.id);
            socket.emit("re_create_room", result.roomId, pw);
            setTimeout(function () {
                exports.namespace.except(socket.id).emit("notify_room_created", Room.getRoomInfo(result.roomId, true));
            }, 5000);
        }
        else
            socket.emit("_error", { message: result.message });
    });
}
function _joinRoom(client, roomId, pw) {
    var socket = client.socket;
    var result = Room.joinTest(client, roomId, pw);
    if (result.success) {
        socket.emit("re_join_room", roomId);
    }
    else
        socket.emit("_error", { message: result.message });
}
