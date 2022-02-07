/// <reference path="_include.ts" />

module Engine.Game {

	export module Server {

		export interface UserInfo {
			username: string;
			// points
			// badges
			// etc...
		}

		export interface GameInfo {
			clientCount: number;
			slots: SlotInfo[];
		}
		export interface SlotInfo {
			index: number;
			user: UserInfo;
			isHost: boolean;
		}

		export var socket: SocketNamespace;

		var _userInfo: KnockoutObservable<UserInfo>;

		Vendor.onVendorsLoaded(function () {

			_userInfo = ko.observable(localStorage.getItem("userInfo"));
		});

		export function getUserInfo() { return _userInfo(); }

		export function connect(nspName: string, popupOnFail: boolean, autoReconnect: boolean, callback: (socket: SocketNamespace) => void): void {

			var query = "";
			var auth = localStorage.getItem("auth");
			if (auth) {
				query += "auth=" + auth;
			}

			socket = io.connect("http://" + document.location.hostname + ":1337" + nspName, {
				"transports" : [ "websocket" ],
				"try multiple transports": false,
				
				"query": query,

				//"reconnect": false,
				//"force new connection": true
			});

			console.log(nspName + " CONNECTING:", socket, socket.socket.connected, socket.socket.connecting, socket.socket.reconnecting);

			function success() {
				socket.removeAllListeners();

				console.log(nspName + " CONNECTED:", socket, socket.socket.connected, socket.socket.connecting, socket.socket.reconnecting);

				if (autoReconnect) {
					//socket.on("connect", success);			// bind reconnect (error: gets called immediately when going to lobby or room)
				}

				if(popupOnFail){
					Global.instance.popup(null);

					socket.on("error", function () {
						Global.instance.popup({
							message: "Connection to server lost. Return to main menu?",
							onOk: function () { Engine.setState("MainMenu"); }
						});
					});
				}

				socket.on("_auth", function (d) { console.log("2"); _auth(d); });

				socket.on("_error", function (err: { message: string; }) {

					if (err) {
						Global.instance.popup({
							message:err.message,
							onOk: function () { }
						});
					}

				});

				callback(socket);
			}

			function fail() {
				socket.removeAllListeners();

				if(popupOnFail){
					Global.instance.popup({
						message: "Connection to server failed. Return to main menu?",
						onOk: function () { Engine.setState("MainMenu"); }
					});
				}

				callback(null);
			}

			socket.removeAllListeners();

			socket.on("error", fail);
			socket.on("connect_failed", fail);
			socket.on("connect", success);
			socket.on("_auth", function (d) { console.log("1"); _auth(d); });

			if (socket.socket.connected) {

				console.log("socket already connected");
				setTimeout(success, 4);
				//socket.socket.reconnect();

			} else {

				// note:	IF SOCKET HAS BEEN DISCONNECTED, RECONNECT NEEDS TO BE CALLED. IF IT HASN'T BEEN DISCONNECTED,
				//			CALL CONNECT INSTEAD
				if (!socket.socket.connecting) {

					//socket.socket.connect();
					socket.socket.reconnect();
				}
			}

		}

		export function disconnect(socket: SocketNamespace): void {

			if (socket) {
				socket.removeAllListeners();

				//console.log(socket.name + " DISCONNECTING:", socket, socket.socket.connected, socket.socket.connecting, socket.socket.reconnecting);
				//socket.disconnect();
				//console.log(socket.name + " DISCONNECTED:", socket, socket.socket.connected, socket.socket.connecting, socket.socket.reconnecting);
				
				// the problem with emitting state_end (instead of disconnecting) is that the namespace is still bound to the socket until disconnect.
				// this means there may be unnecessary broadcasts on the server
				//socket.emit("state_end");

			}
		}

		function _auth(data: { auth: string; user: UserInfo; }): void {
			console.log("auth:", data.auth);
			localStorage.setItem("auth", data.auth);
			localStorage.setItem("user", JSON.stringify(data.user));
			_userInfo(data.user);
		}

	} // module Multiplayer

}