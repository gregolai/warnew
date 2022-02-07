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
import MongoDB = require("mongodb");
import Util = require("./Util");

export var db: MongoDB.Db;
export var io = SocketIO.listen(1337);

// sets the log level of socket.io, with
// log level 2 we wont see all the heartbits
// of each socket but only the handshakes and
// disconnections

export interface ClientData {
	id: string;						// ip + "_" + auth
	addr: string;
	auth: string;
	socket: SocketIO.Socket;
	user: UserInfo;

	playerId?: number;		// slot index of player in room/game
	roomId?: number;
	gameId?: number;
}

export interface UserInfo {
	username: string;
	// points
	// badges
	// etc...
}

MongoDB.MongoClient.connect("mongodb://127.0.0.1:27017/WarNew", function (err, dbObj: MongoDB.Db) {
	if (err)
		throw err;
	db = dbObj;
	console.log("DATABASE CONNECTED".yellow);
});

io.configure(function () {

	io.set("log level", 2);

	io.set("authorization", function (handshake, callback) {

		_waitForDb(function () {

			var q: Object = handshake.query;
			if (q) {

				var clientAddr: string = handshake.address.address;

				
				var clientAuth = Util.Sanitize.toString(q["auth"]);
				var clientId = clientAddr + "_" + clientAuth;
				var client = _clients[clientId];
				console.log("Auth:", clientAuth);
				if (client) {

					if (client.socket) {
						client.socket.disconnect();
					}

				} else {

					clientAuth = Util.makeGuid(16);
					clientId = clientAddr + "_" + clientAuth;
					client = _clients[clientId] = { id: clientId, addr: clientAddr, auth: clientAuth, socket: null, user: { username: "User_" + (++_prevUserNumber) } };

					console.log("NEW CLIENT CREATED:", client.id);
				}

				handshake.clientId = clientId;

				callback(null, true);

			} else {

				callback(null, false);

			}

		});

	}); // io.set("authorization", ...)

}); // io.configure(...)

// THIS WILL CAUSE PROBLEMS WHEN SOCKETS EMIT
/*
io.on("connection", function (socket: Socket) {

	var client = _getClientFromSocket(socket);
	client.socket = socket;

	console.log("default connection, socket id:", socket.id, "client auth:", client.auth);

	socket.emit("client", { auth: client.auth, user: client.user });
});

io.sockets.on("connection", function (socket: Socket) {



	console.log("SOCKET CONNECTION:", socket.id);
});

*/


// ONLY BINDS EVENTS ONCE
/*
export function connect2(nspName: string, callback: (socket: Socket, client: ClientData) => void): SocketNamespace {

	var _seen: { [socketId: string]: boolean; } = {};
	var nsp = <SocketNamespace>io.of(nspName).on("connection", function (socket: Socket) {

		//if (!_seen[socket.id]) {
			//_seen[socket.id] = true;

			console.log(nspName + " CONNECTION:", socket.id);

			var client = getClient(socket);

			client.socket = socket;

			socket.on("ping_server", function () {
				socket.emit("re_ping_server");
			});

			socket.on("disconnect", function () {
				delete _seen[socket.id]; // free some memory
				console.log(nspName + " DISCONNECTION:", socket.id);
			});

			socket.emit("_auth", { auth: client.auth, user: client.user });

			callback(socket, client);
		//}

	});
	return nsp;
}
*/

export function getClient(socket: SocketIO.Socket): ClientData {

	return _clients[(<any>socket).handshake.clientId] || null;
}

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

import Room = require("./Room");

var _clients: { [clientId: string]: ClientData; } = {};
var _clientsByUsername: { [username: string]: ClientData; } = {};
var _disconnectTimers: { [index: string]: number; } = {};
var _prevUserNumber = 0;
/*
function _clearDisconnect(socket: SocketIO.Socket, client: ClientData): void {

	var index = client.id + socket.namespace.name;
	var timer = _disconnectTimers[index];
	if(timer){
		clearTimeout(timer);
		delete _disconnectTimers[index];

		Util.Log.user(client.user, "DISCONNECT CLEARED: " + index);
		//Util.logClient(client.id, "DISCONNECT CLEARED: " + index);
		//console.log((client.id+"").magenta + " - DISCONNECT CLEARED: " + index);
	}
}
*/
function _waitForDb(callback: () => void): void {
	if (db) {
		callback();
		return;
	}
	console.log("DB NOT READY YET");
	setTimeout(function () { _waitForDb(callback); }, 40);
}
