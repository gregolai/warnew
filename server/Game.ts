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
import Room = require("./Room");
import Server = require("./Server");
import Util = require("./Util");

export interface GameInfo {

	clientCount: number;

	slots: SlotInfo[];
}

export interface SlotInfo {
	index: number;
	user: Server.UserInfo;
	isHost: boolean;
}

// CALLED FROM Room.ts
export function create(room: Room.RoomInfo): number {

	var gameSlots: PlayerSlot[] = [];

	var roomSlots = room.slots;
	for (var i = 0, ii = roomSlots.length; i < ii; ++i) {
		var roomSlot = roomSlots[i];

		gameSlots.push(roomSlot ? {
			index: i,
			isHost: roomSlot.isHost,
			user: roomSlot.user
		} : null);
	}

	var game: Game = {
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

	// RETURN A GAME ID
	return game.id;

}

export function getGameInfo(gameId: number): GameInfo {

	var game = _games[gameId];
	if (!game)
		return null;

	var retSlots: SlotInfo[] = [];

	var slots = game.slots;
	for (var s = 0, ss = slots.length; s < ss; ++s)
		retSlots.push(_getSlotInfo(game, s));

	var info: GameInfo = {

		clientCount: game.clientList.length,

		slots: retSlots
	};
	return info;
}

// GAME SOCKETS
export var namespace = Server.io.of("/game").on("connection", function (socket: SocketIO.Socket) {
	//export var namespace = Server.connect2("/game", function (socket: Socket, client: Server.ClientData) {

	var client = Server.getClient(socket);
	client.socket = socket;
	socket.emit("_auth", { auth: client.auth, user: client.user });
	console.log("game socket id:", socket.id);

	socket.on("join_game", function (gameId: number) {

		gameId = Util.Sanitize.toInt(gameId);

		var result = _join(socket, client, gameId);
		if (result.success) {
			// SUCCESS

			// ADD SOCKET JOIN
			var socketGame = _getSocketGame(gameId);
			socket.join(socketGame, function () { });

			socket.emit("re_join_game", client.playerId);

			if (result.gameReady) {

				// GAME IS READY. BROADCAST TO ALL PLAYERS
				//var info = getGameInfo(gameId);

				namespace.to(socketGame).emit("bc_start_game", TURN_DELAY, INIT_FRAME_INTERVAL, INIT_FRAME_COUNT);
			}

		} else
			// ERROR
			socket.emit("_error", { message: result.message });


	});

	socket.on("turn_done", function (turn: number, commands: string, frameTime: number, pingTime: number) {

		turn = Util.Sanitize.toInt(turn);
		commands = Util.Sanitize.toString(commands);
		//frameTime = Util.Sanitize.toInt(frameTime); // to float?
		//pingTime = Util.Sanitize.toInt(pingTime);

		_clientTurnDone(client, turn, commands, frameTime, pingTime);
	});
	
	/*
	socket.on("ping_all_players", function () {

		var game = _games[client.gameId];
		if (game) {
			namespace.except(socket.id).to("game_" + game.id).emit("bc_ping", client.playerId);
			//socket.broadcast.to("game_" + game.id).emit("bc_ping", client.playerId);
		}
	});

	socket.on("re_ping", function (srcPlayerId: number) {

		var game = _games[client.gameId];
		if (game) {
			var srcSocket = game.playerIdToSocket[srcPlayerId];
			if (srcSocket)
				srcSocket.emit("re_ping", client.playerId);
		}
	});
	*/

	socket.on("disconnect", function () {

		// TODO: _leave

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
interface Game {

	id: number;

	started: boolean;
	clientsExpected: number;

	clientList: string[];

	slots: PlayerSlot[];

	// for pinging
	playerIdToSocket: SocketIO.Socket[];
	clientPlayerFlags: number;

	turn: number;
	turnStructs: Turn[];

	weightedFrameTime: number;
	weightedPingTime: number;
}
interface PlayerSlot {
	index: number;
	isHost: boolean;
	user: Server.UserInfo;
	clientId?: string;
}
interface Turn {
	commandMap: string[];
	frameTimeMap: number[];
	pingTimeMap: number[];
	doneFlags: number;

	longestFrameTime: number;
	longestPingTime: number;
}

interface JoinResult {

	success: boolean;

	// IF SUCCESS
	gameReady?: boolean;

	// IF FAIL
	message?: string;
}

var _games: Game[] = [];

// used for ping and frame times
var TURN_DELAY = 2;
var INIT_FRAME_INTERVAL = 16;
var INIT_FRAME_COUNT = 2;
var WEIGHTED_BUFFER_LENGTH = 8;

function _getBufferAverage(buffer: number[]): number {
	var avg = 0;
	var count = 0;
	for (var i in buffer) {
		avg += buffer[i];
		++count;
	}
	return (count ? avg / count : avg);
}

function _getBufferMaximum(buffer: number[]): number {
	var max = Number.MIN_VALUE;
	for (var i in buffer) {
		var v = buffer[i];
		if (v > max)
			max = v;
	}
	return max;
}

function _getSlotInfo(game: Game, slotIndex: number): SlotInfo {

	var slot = game ? game.slots[slotIndex] : null;
	return slot ? {
		index: slot.index,
		user: slot.user,
		isHost: slot.isHost
	} : null;
}

function _getSocketGame(gameId: number): string {
	return "game_" + gameId;
}

function _join(socket: SocketIO.Socket, client: Server.ClientData, gameId: number): JoinResult {

	if (!client)
		return { success: false, message: "Client not found." };

	var game = _games[gameId];
	if(!game)
		return { success: false, message: "Game not found." };

	//if (game.started)
	//	return { success: false, message: "Game already started." };

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

function _pushInWeightedBuffer(buffer: number[], value: number): void {
	if (buffer.length === WEIGHTED_BUFFER_LENGTH)
		buffer.shift();
	buffer.push(value);
}

function _clientTurnDone(client: Server.ClientData, turn: number, commands: string, frameTime: number, pingTime: number): void {

	var game = _games[client.gameId];
	if (game) {

		var playerId = client.playerId;

		var ts = game.turnStructs[turn];
		if (ts) {
			if (typeof ts.commandMap[playerId] !== "undefined" || turn < game.turn || turn > game.turn + TURN_DELAY)
				return;
		} else {
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

		// ENSURES ORDERING OF TURNS IS CORRECT
		var ts = game.turnStructs[game.turn];
		while (ts && (ts.doneFlags ^ game.clientPlayerFlags) === 0) {

			// HIGH FRAME TIME = LESS FRAMES
			// HIGH PING = LONGER COMM. TURN

			game.weightedFrameTime += (ts.longestFrameTime - game.weightedFrameTime) * 0.01;

			game.weightedPingTime += (ts.longestPingTime - game.weightedPingTime) * 0.01;

			var newFrameInterval = Math.max(16, game.weightedFrameTime);

			var newTurnInterval = Math.max(100, game.weightedPingTime);

			var newFrameCount = Math.max(2, Math.floor(newTurnInterval / newFrameInterval));

			// BROADCAST ALL CLIENT TURNS ARE READY
			var socketGame = _getSocketGame(game.id);
			namespace.to(socketGame).emit("bc_turn_ready", game.turn, ts.commandMap, newFrameInterval, newFrameCount);

			// INCREMENT TURN
			delete game.turnStructs[game.turn];
			game.turn += 1;
			ts = game.turnStructs[game.turn];
		}

	}
}
