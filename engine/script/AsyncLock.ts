/// <reference path="_include.ts" />

module Engine {

	export class AsyncLock {
		private _locks: number;
		private _active: boolean;
		private _callback: () => void;
		private _asyncRequired: boolean;
		constructor(callback: () => void, asyncRequired?: boolean) {
			this._locks = 1;
			this._active = true;
			this._callback = callback;
			this._asyncRequired = (asyncRequired !== false); // required by default
		}

		lock(howMany: number = 1): void {
			if (this._active) {
				this._locks += howMany;
			}
		}

		unlock(howMany: number = 1): void {
			if (this._active) {

				if (this._asyncRequired) {
					// FORCE ASYNC
					var self = this;
					setTimeout(function () { self._unlock(howMany); }, 0);
				} else {
					// NOT ASYNC
					this._unlock(howMany);
				}
			}
		}

		private _unlock(howMany: number): void {
			this._locks -= howMany;
			if (this._locks <= 0) {
				var callback = this._callback;

				this._active = false;
				this._callback = null;

				callback();
			}
		}
	}

}