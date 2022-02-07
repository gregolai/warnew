/// <reference path="_include.ts" />

module Engine.Game {

	var BUFFER_LENGTH = 10;
	var FRAME_WEIGHT = 0.1;

	export class MultiplayerUpdateStrategy implements UpdateStrategy {

		_liveGame: LiveGame;
		_world: World;
		_player: Player;
		_gameId: number;
		_socket: SocketNamespace;
		_turnDelay: number;
		_initFrameInterval: number;
		_initFrameCount: number;

		_simulationTurn: number;
		_commandMapBuffer: string[][];

		_pingBuffer: number[];
		_pingStart: number;
		_frameTimeBuffer: number[];
		_prevDrawTime: number;

		_worker: Worker;

		_prevTimestamp: number;
		_rafId: number;

		_lastPing: KnockoutObservable<string>;

		getLastPing() { return this._lastPing(); }

		constructor(liveGame: LiveGame, gameId: number, socket: SocketNamespace, turnDelay: number, initFrameInterval: number, initFrameCount: number, initPing: number) {
			this._liveGame = liveGame;
			this._world = liveGame.getWorld();
			this._player = liveGame.getPlayer();
			this._gameId = gameId;
			this._socket = socket;
			this._turnDelay = turnDelay;
			this._initFrameInterval = initFrameInterval;
			this._initFrameCount = initFrameCount;
			
			this._simulationTurn = 0 - turnDelay;
			this._commandMapBuffer = [];

			this._pingBuffer = [initPing];
			this._pingStart = 0;
			this._frameTimeBuffer = [];
			this._prevDrawTime = 16;

			this._lastPing = ko.observable<string>();
		}

		begin(callback: () => void): void {

			var self = this;

			// SOCKET STUFF
			var socket = this._socket;

			// ON TURN READY
			socket.on("bc_turn_ready", function (turn: number, commandMap: string[], frameInterval: number, frameCount: number) {
				self._onTurnReady(turn, commandMap, frameInterval, frameCount);
			});


			// ON PING RETURNED
			var pingStart;
			socket.on("re_ping_server", function () {

				var pingTime = performance.now() - pingStart;

				self._lastPing(pingTime.toFixed(2));
				
				self._bufferPush(self._pingBuffer, pingTime);

				setTimeout(function () {
					pingStart = performance.now();
					socket.emit("ping_server");
				}, 100);
			});
			pingStart = performance.now();
			socket.emit("ping_server");

			// WORKER STUFF
			var worker = this._worker = new Worker("lockstep_worker.js");
			var workerFnMap = {
				"log": function () { console.log.apply(console, arguments); },
				"process_commands": this._processCommands,
				"do_frame": this._doFrame,
				"turn_done": this._turnDone
			};
			worker.addEventListener("message", function (e: any) {
				var data = e.data;
				if (!data)
					return;

				var fn = workerFnMap[data.cmd];
				if (fn)
					fn.apply(self, data.args);
			});

			// START INITIAL LOCK-STEP TURNS
			var turnDelay = this._turnDelay;
			var frameInterval = this._initFrameInterval;
			var frameCount = this._initFrameCount;
			for(var i = 0; i < turnDelay; ++i)
				this._startTurn(frameInterval, frameCount);


			// START UPDATE-DRAW LOOP
			this._rafId = requestAnimationFrame(function (timestamp: number) {
				self._prevTimestamp = timestamp;
				self._updateDrawLoop(timestamp);
			});

			callback();
		}

		end(): void {

			this._worker.terminate();
			this._worker = null;

			cancelAnimationFrame(this._rafId);
		}

		private _onTurnReady(turn: number, commandMap: string[], frameInterval: number, frameCount: number): void {

			this._commandMapBuffer[turn] = commandMap;

			this._startTurn(frameInterval, frameCount);
		}

		private _startTurn(frameInterval: number, frameCount: number): void {

			this._worker.postMessage({ cmd: "start_turn", args: [frameInterval, frameCount] });
		}

		private _updateDrawLoop(timestamp: number): void {

			var t0 = performance.now();
			{
				this._liveGame.update(timestamp - this._prevTimestamp);
				this._liveGame.draw();
			}
			var t1 = performance.now();

			this._prevDrawTime = t1 - t0;

			this._prevTimestamp = timestamp;

			this._rafId = requestAnimationFrame(this._updateDrawLoop.bind(this));
		}

		private _processCommands(): void {

			var now = performance.now();

			var commandMap = this._commandMapBuffer[this._simulationTurn];
			if (commandMap) {

				var world = this._world;

				// DEBUG - HARD CODED 8 FOR NOW
				for (var i = 0; i < 8; ++i) {
					// process all messages (ie: commands);
					CommandBuffer.executeBuffered(world, commandMap[i]);
				}

				delete this._commandMapBuffer[this._simulationTurn];
			}

			this._doFrame(now);
		}

		private _doFrame(now?: number): void {

			if (!now)
				now = performance.now();

			this._liveGame.fixedUpdate();

			// PUSH FRAME TIME INTO BUFFER
			var fixedFrameTime = performance.now() - now;
			var totalFrameTime = fixedFrameTime + this._prevDrawTime;
			this._frameTimeBuffer.push(totalFrameTime);

			this._worker.postMessage({ cmd: "frame_done" });
		}

		private _turnDone(turn: number): void {
			
			// AVERAGE FRAME TIME FOR THIS TURN
			var avgFrameTime = this._bufferAverage(this._frameTimeBuffer);
			this._frameTimeBuffer.length = 0;

			var bufferedCommands = this._player.extractCommands();
			//var commands = this._commandBuffer.incrementTurn();

			// GET PING TIME AVERAGE
			var avgPing = this._bufferAverage(this._pingBuffer);
			
			this._simulationTurn += 1;

			// TX 'Done' message w/ longest average ping time & fps
			this._socket.emit("turn_done", turn, bufferedCommands, avgFrameTime, avgPing);
		}

		private _bufferPush(buffer: number[], value: number): void {
			if (buffer.length === BUFFER_LENGTH)
				buffer.shift();
			buffer.push(value);
		}

		private _bufferAverage(buffer: number[]): number {
			var avg = 0;
			var len = buffer.length;
			for (var i = 0; i < len; ++i)
				avg += buffer[i];
			return (len ? avg / len : avg);
		}
	}

}