/// <reference path="_include.ts"/>

module Engine.WarNew {


	export class MainMenu extends AppState {

		constructor() {
			super({
				hasUI: true
			});

		}

		onUICreated(dom: JQuery): void {

			var self = this;

			dom.find(".toLiveGame").click(function () {

				App.instance.setState("LiveGame");

			});

			dom.on("click", ".loadGame", function () {
				
			});

			dom.on("click", ".editor", function () {
				App.instance.setState("Editor");
			});

		}

		begin(callback: () => void): void {

			Cursor.clear();

			callback();
		}

	}

}
