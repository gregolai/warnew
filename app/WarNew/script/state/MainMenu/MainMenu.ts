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

			dom.on("click", ".loadGame", function () {
				
			});

			dom.on("click", ".editor", function () {
				App.instance.setState("Editor");
			});

		}

	}

}
