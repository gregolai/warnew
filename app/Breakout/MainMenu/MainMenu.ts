
/// <reference path="_include.ts"/>

module Engine.Breakout {

	export enum MainMenuPage {
		Main,
		Load
	}

	export class MainMenu extends AppState {

		private _page: KnockoutObservable<MainMenuPage>;

		get mainPage() { return this._page() === MainMenuPage.Main; }
		get loadPage() { return this._page() === MainMenuPage.Load; }

		constructor() {
			super({
				hasUI: true
			});

			this._page = ko.observable(MainMenuPage.Main);
		}

		onUICreated(dom: JQuery): void {

			var self = this;
			dom.on("click", ".backButton", function () {
				self._page(MainMenuPage.Main);
			});

			dom.on("click", ".playGame", function () {
				App.instance.setState("LiveGame");
			});

			dom.on("click", ".loadGame", function () {
				self._page(MainMenuPage.Load);
			});

			dom.on("click", ".editor", function () {
				App.instance.setState("Editor");
			});

		}

	}

}
