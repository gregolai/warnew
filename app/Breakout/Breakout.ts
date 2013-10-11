/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Game extends App {

		constructor() {
			super({
				initialState: "MainMenu",
				states: [
					"Editor",
					"LiveGame",
					"MainMenu"
				],


				allowGamepad: true,
				allowTouch: true,
				cacheAssets: false,
				disableContextMenu: false,
				enable2dPhysics: true,
				enable3d: true,
				showStats: true
				
			});
		}


	}

}
