//   _______   __    __  _______   __        ______   ______  
//  /       \ /  |  /  |/       \ /  |      /      | /      \ 
//  $$$$$$$  |$$ |  $$ |$$$$$$$  |$$ |      $$$$$$/ /$$$$$$  |
//  $$ |__$$ |$$ |  $$ |$$ |__$$ |$$ |        $$ |  $$ |  $$/ 
//  $$    $$/ $$ |  $$ |$$    $$< $$ |        $$ |  $$ |      
//  $$$$$$$/  $$ |  $$ |$$$$$$$  |$$ |        $$ |  $$ |   __ 
//  $$ |      $$ \__$$ |$$ |__$$ |$$ |_____  _$$ |_ $$ \__/  |
//  $$ |      $$    $$/ $$    $$/ $$       |/ $$   |$$    $$/ 
//  $$/        $$$$$$/  $$$$$$$/  $$$$$$$$/ $$$$$$/  $$$$$$/  
//                                                            
//                                                            
//                                                            
import SocketIO = require("socket.io");
import Server = require("./Server");
import Room = require("./Room");
import Util = require("./Util");

export var namespace = Server.io.of("/lobby").on("connection", function (socket: SocketIO.Socket) {
	//export var namespace = Server.connect2("/lobby", function(socket: Socket, client: Server.ClientData){
	
	var client = Server.getClient(socket);
	client.socket = socket;
	socket.emit("_auth", { auth: client.auth, user: client.user });
	console.log("lobby socket id:", socket.id);

	socket.on("get_room_list", function () {
		socket.emit("re_get_room_list", Room.getLobbyRoomList());
	});

	socket.on("create_room", function (name: string, pw?: string) {
		
		// sanitize input
		name = Util.Sanitize.toString(name);
		pw = Util.Sanitize.toString(pw);

		_createRoom(client, name, pw);
	});

	socket.on("join_room", function (roomId: number, pw?: string) {

		// sanitize input
		roomId = Util.Sanitize.toInt(roomId);
		pw = Util.Sanitize.toString(pw);

		_joinRoom(client, roomId, pw);
	});
});


//   _______   _______   ______  __     __   ______  ________  ________ 
//  |       \ |       \ |      \|  \   |  \ /      \|        \|        \
//  | $$$$$$$\| $$$$$$$\ \$$$$$$| $$   | $$|  $$$$$$\\$$$$$$$$| $$$$$$$$
//  | $$__/ $$| $$__| $$  | $$  | $$   | $$| $$__| $$  | $$   | $$__    
//  | $$    $$| $$    $$  | $$   \$$\ /  $$| $$    $$  | $$   | $$  \   
//  | $$$$$$$ | $$$$$$$\  | $$    \$$\  $$ | $$$$$$$$  | $$   | $$$$$   
//  | $$      | $$  | $$ _| $$_    \$$ $$  | $$  | $$  | $$   | $$_____ 
//  | $$      | $$  | $$|   $$ \    \$$$   | $$  | $$  | $$   | $$     \
//   \$$       \$$   \$$ \$$$$$$     \$     \$$   \$$   \$$    \$$$$$$$$
//                                                                      
//                                                                      
//                                                                      

function _createRoom(client: Server.ClientData, name: string, pw: string): void {

	

	Room.create(client, name, pw, function (result: Room.CreateResult) {

		var socket = client.socket;

		if (result.success) {

			// CREATE SUCCESS
			console.log("re_create_room - socket id:", socket.id);
			socket.emit("re_create_room", result.roomId, pw);

			// NOTIFY
			setTimeout(function () {
				namespace.except(socket.id).emit("notify_room_created", Room.getRoomInfo(result.roomId, true));
			}, 5000);

		} else
			// CREATE FAIL
			socket.emit("_error", { message: result.message });

	});

}

function _joinRoom(client: Server.ClientData, roomId: number, pw: string): void {

	var socket = client.socket;

	var result = Room.joinTest(client, roomId, pw);
	if (result.success) {
			
		// JOIN TEST SUCCESS
		socket.emit("re_join_room", roomId);

	} else
		// JOIN TEST FAIL
		socket.emit("_error", { message: result.message });

}