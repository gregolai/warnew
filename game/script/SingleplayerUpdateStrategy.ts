/// <reference path="_include.ts" />

module Engine.Game {


	export class SingleplayerUpdateStrategy implements UpdateStrategy {

		_liveGame: LiveGame;
		_world: World;
		_player: Player;
		_fixedInterval: number;

		_prevTimestamp: number;
		_frameAccum: number;
		_rafId: number;

		constructor(liveGame: LiveGame, fixedInterval: number) {
			this._liveGame = liveGame;
			this._world = liveGame.getWorld();
			this._player = liveGame.getPlayer();
			this._fixedInterval = fixedInterval;
		}

		begin(callback: () => void): void {

			this._frameAccum = 0;

			var self = this;
			this._rafId = requestAnimationFrame(function (timestamp: number) {
				self._prevTimestamp = timestamp;
				self._loop(timestamp);
				callback();
			});
		}

		end(): void {

			cancelAnimationFrame(this._rafId);

		}

		private _loop(timestamp: number): void {

			var dt = timestamp - this._prevTimestamp;

			// PROCESS COMMANDS
			var bufferedCommands = this._player.extractCommands();
			CommandBuffer.executeBuffered(this._world, bufferedCommands);
			//var commands = this._commandBuffer.incrementTurn();
			//this._commandBuffer.executeBufferedCommands(commands);

			this._frameAccum -= dt;

			// FIXED UPDATE
			if(this._frameAccum <= 0){
				do {
					
					this._liveGame.fixedUpdate();
			
					this._frameAccum += this._fixedInterval;
	
				} while(this._frameAccum <= 0);
			}

			// UPDATE AND DRAW
			this._liveGame.update(dt);
			this._liveGame.draw();

			this._prevTimestamp = timestamp;

			this._rafId = requestAnimationFrame(this._loop.bind(this));
		}
	
	}

}