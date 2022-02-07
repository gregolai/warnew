/// <reference path="_include.ts"/>

module Engine.Game {


	class ServerChecker implements UpdateStrategy {
		_mainMenu: MainMenu;

		_socket: SocketNamespace;
		_ending: boolean;
		constructor(mainMenu: MainMenu) {
			this._mainMenu = mainMenu;
		}

		begin(callback: () => void): void {
			this._ending = false;
			this._connectLoop();
			callback();
		}
		end(): void {
			this._ending = true;

			Server.disconnect(this._socket);
			this._socket = null;
		}

		private _connectLoop(): void {
			
			if (this._ending)
				return;

			var self = this;
			Server.connect("", false, true, function (socket: SocketNamespace) {
				
				if (self._ending)
					return;

				if (socket) {

					// ON LOST CONNECTION, NOT CONNECTED AND TRY TO RECONNECT
					socket.on("error", function () {

						// IS DISCONNECTED
						Server.disconnect(self._socket);
						self._mainMenu.onServerDisconnect();

						// TRY CONNECT AGAIN
						setTimeout(self._connectLoop.bind(self), 2000);
					});
					
					// IS CONNECTED
					self._socket = socket;
					self._mainMenu.onServerConnect();

				} else {

					// TRY CONNECT AGAIN
					setTimeout(self._connectLoop.bind(self), 2000);
				}

			});

		}
	}

	export class MainMenu extends AppState {

		_connected: KnockoutObservable<boolean>;

		isConnected() { return this._connected(); }

		initialize(callback: () => void): void {

			this._connected = ko.observable(false);

			callback();
		}

		bindEvents(dom: JQuery): void {

			var btnSingle = dom.find(".btn.singleplayer");
			var btnEditor = dom.find(".btn.editor");
			var btnMulti = dom.find(".btn.multiplayer");

			var self = this;

			btnSingle.click(function () { Engine.setState("LiveGame"); });

			btnEditor.click(function () { Engine.setState("Editor"); });

			btnMulti.click(function () { Engine.setState("Lobby"); });
		}


		begin(hs: HistoryState, callback: (updater?: UpdateStrategy) => void): void {

			var serverChecker = new ServerChecker(this);

			this._connected(false);

			callback(serverChecker);
		}

		end(): void {
		}

		onServerConnect(): void {
			this._connected(true);
		}

		onServerDisconnect(): void {
			this._connected(false);
		}
	}

}
