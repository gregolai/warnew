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
import Game = require("./Game");
import Lobby = require("./Lobby");
import Server = require("./Server");
import Util = require("./Util");
import MongoDB = require("mongodb");

// CREATE
export interface CreateResult {
	success: boolean;

	// IF FAIL
	message?: string;

	// IF SUCCESS
	roomId?: number;
}

// JOIN
export interface JoinResult {
	success: boolean;

	// IF FAIL
	message?: string;

	// IF IN ROOM AND SUCCESS
	roomInfo?: RoomInfo;
}

// INFO
export interface RoomInfo {
	id: number;
	name: string;
	host: string;		// host username

	// IF LOBBY
	playerCount?: number;
	playerCapacity?: number;
	hasPassword?: boolean;

	// IF NOT LOBBY
	clientCount?: number;
	slots?: SlotInfo[];
}
export interface SlotInfo {
	index: number;
	
	// CAN ONLY BE SET THROUGH THE _join and _leave functions
	status: string;
	user: Server.UserInfo;

	// CAN ONLY BE SET THROUGH _setHost
	isHost: boolean;
}

export function create(client: Server.ClientData, roomName: string, roomPassword: string, callback: (res: CreateResult) => void): void {

	if (!client) {
		callback({ success: false, message: "Client not found." });
		return;
	}

	if (!roomName || (roomName = roomName.trim()) === "") {
		callback({ success: false, message: "Room name cannot be empty." });
		return;
	}

	roomPassword = roomPassword ? roomPassword.trim() : "";

	var slots: PlayerSlot[] = []
	for (var i = 0; i < 8; ++i)
		slots.push({ index: i, closed: false, isHost: false });

	Server.db.collection("global").findAndModify(null, null, { $inc: { prevRoomId: 1 } }, function (err: any, res: MongoDB.Cursor) {

		var roomId: number = res["prevRoomId"] + 1;

		var room: Room = {
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

export function joinTest(client: Server.ClientData, roomId: number, password?: string): JoinResult {

	if (!client)
		return { success: false, message: "Client not found." };
	
	var room = _rooms[roomId];
	if (!room)
		return { success: false, message: "Room not found." };		// game started

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



export function getLobbyRoomList(): RoomInfo[] {

	var ret: RoomInfo[] = [];

	for (var roomId in _rooms) {

		var ri = getRoomInfo(roomId, true);
		if (ri)
			ret.push(ri);
	}

	return ret;
}

export function getRoomInfo(roomId: number, lobby: boolean): RoomInfo {

	var room = _rooms[roomId];
	if (!room)
		return null;

	var ret: RoomInfo = { id: room.id, name: room.name, host: room.hostUsername || "" };
	
	if (lobby) {

		ret.playerCount = room.clientList.length;	// TODO: (clients + ai_players) => (filled_slots - open_slots)
		ret.playerCapacity = room.playersMax;		// TODO: (open_slots + filled_slots);
		ret.hasPassword = (room.password !== "");

	} else {

		ret.clientCount = room.clientList.length;
		ret.slots = [];

		var slots = room.slots;
		for (var s = 0, ss = slots.length; s < ss; ++s)
			ret.slots.push(_getSlotInfo(room, s));
	}

	return ret;
}

// ROOM SOCKETS
export var namespace = Server.io.of("/room").on("connection", function (socket: SocketIO.Socket) {
	//export var namespace = Server.connect2("/room", function(socket: Socket, client: Server.ClientData){

	var client = Server.getClient(socket);
	client.socket = socket;
	socket.emit("_auth", { auth: client.auth, user: client.user });
	console.log("room socket id:", socket.id);

	socket.on("join_room", function (roomId: number, pw?: string) {

		roomId = Util.Sanitize.toInt(roomId);
		pw = Util.Sanitize.toString(pw);

		var result = _join(client, roomId, pw);
		if (result.success) {
			// JOIN SUCCESS
			socket.emit("re_join_room", result.roomInfo);

		} else
			// JOIN FAIL
			socket.emit("_error", { message: result.message });
	});

	socket.on("get_room_info", function () {

		// GET INFO FOR ROOM
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


// SERVER ROOM OBJECTS
interface Room {
	id: number;
	name: string;
	password: string;
	slots: PlayerSlot[];

	playersMax: number;

	clientList: string[];
	clientSlotMap: { [clientId: string]: PlayerSlot; };

	countdown?: Countdown;

	// SET WITH _setHost and _clearHost function
	hostId?: string;
	hostUsername?: string;
}
interface PlayerSlot {
	index: number;
	closed: boolean;
	isHost: boolean;
	clientId?: string;
	user?: Server.UserInfo;
}
interface Countdown {
	doneCount: number;
	doneMap: { [clientId: string]: boolean; };
}

var _rooms: Room[] = [];
var _prevRoomId = 0;

// CLEAR EMPTY ROOMS
var _emptyRooms: boolean[] = [];
setInterval(function () {
	for (var roomId in _emptyRooms)
		_deleteRoom(roomId);
	_emptyRooms.length = 0;
}, 10000);

function _clearHost(room: Room, slot: PlayerSlot): void {
	if (room && slot && slot.isHost) {

		slot.isHost = false;
		room.hostId = undefined;
		room.hostUsername = undefined;

		var next = _nextFilledSlot(room, slot)
		if (next)
			_setHost(room, next);
	}
}

function _countdownComplete(client: Server.ClientData): void {
	
	var room = _rooms[client.roomId];
	if (room) {

		var countdown = room.countdown;

		if (countdown && !countdown.doneMap[client.id]) {

			countdown.doneCount += 1;
			countdown.doneMap[client.id] = true;

			// CHECK IF ALL COUNTDOWNS ARE DONE
			if (countdown.doneCount === room.clientList.length) {

				room.countdown = undefined;

				var gameId = Game.create(getRoomInfo(room.id, false));

				namespace.to("room_" + room.id).emit("bc_game_ready", gameId);

				_deleteRoom(room.id);
			}
		}

	}
}

function _countdownStart(client: Server.ClientData): void {

	var room = _rooms[client.roomId];
	if (room) {

		if (!room.countdown && room.hostId === client.id) {

			room.countdown = {
				doneCount: 0,
				doneMap: {}
			};

			namespace.to("room_" + room.id).emit("bc_start_countdown", 5);
		}

	}
}

function _countdownStop(client: Server.ClientData, requiresHost: boolean): void {

	var room = _rooms[client.roomId];
	if (room) {

		if (room.countdown && (!requiresHost || room.hostId === client.id)) {

			room.countdown = undefined;

			namespace.to("room_" + room.id).emit("bc_stop_countdown");
		}

	}

}

// WHEN COUNTDOWN IS COMPLETE OR ALL PLAYERS LEAVE
function _deleteRoom(roomId: number): void {

	var room = _rooms[roomId];
	if (room) {
		// CLEAN UP SOCKETS
		var socketRoom = _getSocketRoom(roomId);
		var sockets = namespace.clients(socketRoom);
		for (var s in sockets)
			sockets[s].leave(socketRoom, function () { });

		delete _rooms[room.id];
	}
}

function _getSlotInfo(room: Room, slotIndex: number): SlotInfo {

	var slot = room ? room.slots[slotIndex] : null;
	return slot ? {
		index: slot.index,
		status: slot.user ? "filled" : (slot.closed ? "closed" : "open"),
		user: slot.user,
		isHost: slot.isHost
	} : null;
}

function _getSocketRoom(roomId: number): string {
	return "room_" + roomId;
}

function _join(client: Server.ClientData, roomId: number, pw?: string): JoinResult {

	var result = joinTest(client, roomId, pw);

	//console.log("room id:", typeof roomId, ", clientRoomId:", typeof client.roomId);
	if (result.success && roomId !== client.roomId) {

		// LEAVE CURRENT ROOM BEFORE JOINING
		_leave(client);
		
		var room = _rooms[roomId];							// guaranteed not empty from joinTest

		// ADD CLIENT TO SLOT (A) - CLOSE SLOT
		var slot = _nextOpenSlot(room);						// guaranteed not empty from joinTest
		slot.clientId = client.id;
		slot.user = client.user;
		slot.closed = true;
		if (room.clientList.length === 0)
			_setHost(room, slot);							// set host if empty room
		
		// ADD CLIENT TO ROOM (B)
		room.clientList.push(client.id);
		room.clientSlotMap[client.id] = slot;
		client.roomId = room.id;
		client.playerId = slot.index;

		// REMOVE FROM EMPTY ROOMS
		delete _emptyRooms[roomId];

		// GET ROOM INFO (AFTER JOIN)
		result.roomInfo = getRoomInfo(roomId, false);		// guaranteed not empty

		// ADD SOCKET JOIN (AFTER JOIN)
		var socketRoom = _getSocketRoom(room.id);
		namespace.to(socketRoom).emit("bc_joined_room", result.roomInfo, _getSlotInfo(room, slot.index));
		client.socket.join(socketRoom, function () { });
		
		Util.Log.user(client.user, "ROOM JOIN: " + room.id);

		// NOTIFY LOBBY
		Lobby.namespace.emit("re_get_room_list", getLobbyRoomList());
	}
	return result;
}

function _leave(client: Server.ClientData): void {

	var room = _rooms[client.roomId];
	if(room){

		var slot = room.clientSlotMap[client.id];

		// REMOVE CLIENT FROM ROOM (B)
		client.roomId = undefined;
		client.playerId = undefined;
		delete room.clientSlotMap[client.id];
		room.clientList.splice(room.clientList.indexOf(client.id), 1);	// gauranteed not empty?

		// REMOVE CLIENT FROM SLOT (A) - OPEN SLOT
		slot.clientId = undefined;
		slot.user = undefined;
		slot.closed = false;
		_clearHost(room, slot)

		// REMOVE SOCKET (AFTER LEAVE)
		var socketRoom = _getSocketRoom(room.id);
		client.socket.leave(socketRoom, function () { });
		namespace.to(socketRoom).emit("bc_left_room", getRoomInfo(room.id, false), client.user);

		Util.Log.user(client.user, "ROOM LEAVE: " + room.id);

		// MARK ROOM FOR DELETION IF EMPTY
		//if (room.clientList.length === 0)
		//	_emptyRooms[room.id] = true;
		_deleteRoom(room.id);	// just delete it. idk what the purpose of marking was for

		// NOTIFY LOBBY
		Lobby.namespace.emit("re_get_room_list", getLobbyRoomList());
	}

}

function _nextFilledSlot(room: Room, start: PlayerSlot): PlayerSlot {

	if(room && start){
		var si = start.index;
		var slots = room.slots;
		var nSlots = slots.length;
		for(var i = (si+1) % nSlots; i !== si; i=(i+1) % nSlots){
			var slot = slots[i];
			if(slot && slot.user)
				return slot;
		}
	}
	return null;
}

function _nextOpenSlot(room: Room): PlayerSlot {

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


function _setHost(room: Room, hostSlot: PlayerSlot): void {
	if (room && hostSlot && hostSlot.user) {
		var slots = room.slots;
		for (var i = slots.length - 1; i !== -1; --i) {
			var slot = slots[i];
			if (slot && slot.user){
				slot.isHost = (slot === hostSlot);
				if (slot.isHost) {
					room.hostId = slot.clientId;
					room.hostUsername = slot.user.username;
				}
			}
		}
	}
}

/*
function _openSlot(room: Room, slotIndex: number): void {

	var slot = room.slots[slotIndex];
	if(slot){
		slot.clientId = undefined;
		slot.user = undefined;
		slot.closed = false;
		_clearHost(room, slot)
	}
}

function _closeSlot(room: Room, slotIndex: number): void {
	
	var slot = room.slots[slotIndex];
	if(slot){
		slot.clientId = undefined;
		slot.user = undefined;
		slot.closed = true;
		_clearHost(room, slot);
	}
}

function _fillSlot(room: Room, slotIndex: number, client: Server.ClientData): void {
	
	var slot = room.slots[slotIndex];
	if(slot){
		slot.clientId = client.id;
		slot.user = client.user;
		slot.closed = true;
		if (room.clientList.length === 0)
			_setHost(room, slot);							// set host if empty room
	}
}
*/