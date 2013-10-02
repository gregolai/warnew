/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Game extends App {

		constructor() {
			super({
				id: "Breakout",
				initialState: "MainMenu",
				states: [
					"Editor",
					"LiveGame",
					"MainMenu"
				],


				allowGamepad: true,
				allowTouch: true,
				disableContextMenu: false,
				enable2dPhysics: true,
				enable3d: true,
				showStats: true,
				title: "Breakout!",
				
			});
		}


	}

}
