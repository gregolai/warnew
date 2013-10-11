/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class Game extends App {

		constructor() {
			super({
				initialState: "LiveGame",
				states: [
					"Editor",
					"LiveGame",
					"MainMenu"
				],

				allowGamepad: false,
				allowTouch: false,
				cacheAssets: false,
				disableContextMenu: true,
				enable2dPhysics: false,
				enable3d: true,
				showStats: true,

				statesDirectory: "script/state/",
			});
		}


	}

}
