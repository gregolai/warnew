/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class LiveGame extends AppState {

		private _levelId: number;
		private _stage: Stage;
		private _showResetScreen: KnockoutObservable<boolean>;

		set levelID(value: number) { this._levelId = value; }
		get levelID() { return this._levelId; }

		get showResetScreen() { return this._showResetScreen(); }

		constructor() {
			super({
				hasUI: true
			});

			this._levelId = 0;
			this._stage = new Stage(this);
			this._showResetScreen = ko.observable(false);
		}

		onUICreated(dom: JQuery): void {

			var self = this;
			dom.on("click", ".playAgain", function () {
				self._reset(function () { });
			});

			dom.on("click", ".mainMenu", function () {
				App.instance.setState("MainMenu");
			});
		}

		begin(callback: () => void): void {
			var self = this;
			AssetManager.load({

			}, function () {
				self._reset(callback);
			});
		}

		private _reset(callback: () => void): void {

			var self = this;
			this._loadLevel(this._levelId, function () {
				self._showResetScreen(false);
				callback();
			});
		}

		update(dt: number): void {
			if (!this._showResetScreen()) {
				this._stage.update(dt);
			}
		}

		draw(): void {
			this._stage.draw(true);
		}

		onResize(width: number, height: number): void {
			this._stage.resize(width, height);
		}

		youLose(): void {
			this._showResetScreen(true);
		}

		private _loadLevel(id: number, callback: () => void): void {

			var self = this;
			$.post("server/loadLevel.php", {
				id: id
			}, function (msg: string) {

				var data: RawLevelData;
				try {
					data = <RawLevelData>parseServerMessage(msg);
				} catch (ex) {
					console.log("Failed to load level: " + ex);
					return;
				}

				self._stage.load(data.stage);

				callback();
			});
		}
	}

}
