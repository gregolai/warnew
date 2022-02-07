/// <reference path="_include.ts" />

module Engine {

	export interface UpdateStrategy {
		begin(callback: () => void): void;
		end(): void;
	}

	export class NoUpdateStrategy implements UpdateStrategy {
		begin(callback: () => void): void {
			callback();
		}
		end(): void {
		}
	}

	export class DefaultUpdateStrategy implements UpdateStrategy {

		_state: AppState;
		_fixedInterval: number;

		_prevTime: number;
		_frameAccum: number;
		_active: boolean;

		constructor(state: AppState, fixedInterval: number) {
			this._state = state;
			this._fixedInterval = fixedInterval;
		}

		begin(callback: () => void): void {

			//this._prevTime = performance.now();
			this._frameAccum = 0;
			this._active = true;
			
			var self = this;
			requestAnimationFrame(function (now: number) {
				self._prevTime = now;
				self._loop(now);
				callback();
			});
		}

		end(): void {
			this._active = false;
		}

		_loop(now: number): void {

			if (!this._active)
				return;

			var dt = now - this._prevTime;
			var fixedInterval = this._fixedInterval;

			this._frameAccum += dt;
	
			// FIXED UPDATE
			if(this._frameAccum >= fixedInterval){
	
				do {
					this._state.fixedUpdate();
			
					this._frameAccum -= fixedInterval;
	
				} while(this._frameAccum >= fixedInterval);
			}

			// UPDATE AND DRAW
			this._state.update(dt);
			this._state.draw();

			this._prevTime = now;

			var self = this;
			requestAnimationFrame(function (now: number) { self._loop(now); });
		}
	}
}