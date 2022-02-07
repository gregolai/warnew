/// <reference path="_include.ts"/>

module Engine.Game {



	export function entryPoint(): AppParams {

		var p: AppParams = {
			initialState: "Lobby",
			globalStates: [ "Global" ],
			states: [
				"Editor",
				"LiveGame",
				"Lobby",
				"MainMenu",
				"Room"
			],

			vendors: [
				Vendor.LZMA,
				Vendor.SocketIO,
				Vendor.Underscore,
				Vendor.Three
			]
		};
		return p;
	}

	export var states: { [stateId: string]: AppState; };

	export function init(callback: () => void): void {

		var global = new Global();
		var editor = new Editor();
		var liveGame = new LiveGame();
		var lobby = new Lobby();
		var mainMenu = new MainMenu();
		var room = new Room();

		Engine.initGame({
			initialState: mainMenu,
			globalState: global,
			states: [
				editor, liveGame, lobby, mainMenu, room
			],
			vendors: [
				Vendor.LZMA,
				Vendor.SocketIO,
				Vendor.Underscore,
				Vendor.Three
			]
		}, function () {

			callback();
		});

	}

}
