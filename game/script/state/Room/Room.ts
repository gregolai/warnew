/// <reference path="_include.ts"/>

module Engine.Game {

	export interface Room_RoomData_Slot {
		index: number;
		status: string;
		user: Server.UserInfo;
		isHost: boolean;
	}

	export interface Room_RoomData {
		id: number;
		name: string;
		host: string;
		slots: Room_RoomData_Slot[];
	}

	export class Room extends AppState {

		roomID: string;

		_socket: SocketNamespace;

		_roomInfo: KnockoutObservable<Room_RoomData>;

		_countdownInterval: number;
		_countdownStarted: KnockoutObservable<boolean>;
		_countdownTime: KnockoutObservable<number>;

		getRoomInfo() { return this._roomInfo(); }

		countdownStarted() { return this._countdownStarted(); }
		canStopCountdown() { return this._countdownStarted() && this._countdownTime() >= 3; }
		getCountdown() { return this._countdownTime(); }

		isHost(): boolean {
			var ri = this._roomInfo();
			var ui = Server.getUserInfo();
			return ri && ui && ri.host === ui.username;
		}

		initialize(callback: () => void): void {

			this._roomInfo = ko.observable<Room_RoomData>();

			this._countdownStarted = ko.observable<boolean>();
			this._countdownTime = ko.observable<number>();

			callback();
		}

		bindEvents(dom: JQuery): void {

			var self = this;

			dom.find(".btnLeaveRoom").click(function () {
				Engine.setState("Lobby");
			});

			dom.on("click", ".btnStartCountdown", function () {

				if (self._socket)
					self._socket.emit("start_countdown");
			});

			dom.on("click", ".btnStopCountdown", function () {

				if (self._socket)
					self._socket.emit("stop_countdown");
			});
		}

		begin(hs: HistoryState, callback: (updater?: UpdateStrategy) => void): void {

			this._roomInfo(null);

			this._stopCountdown();
			
			var self = this;

			Server.connect("/room", true, true, function(socket: SocketNamespace){

				if (!socket) {
					callback();
					return;
				}

				self._socket = socket;

				socket.on("re_get_room_info", function (roomInfo: Room_RoomData) {

					self._roomInfo(roomInfo);

				});

				socket.on("re_join_room", function (roomInfo: Room_RoomData) {

					self._roomInfo(roomInfo);

				});
				
				socket.on("bc_left_room", function (roomInfo: Room_RoomData, user: Server.UserInfo) {

					// UPDATE SLOT INFO
					self._roomInfo(roomInfo);

					//var ri = self._roomInfo();
					//ri.slots[slotInfo.index] = slotInfo;
					//self._roomInfo.valueHasMutated();

					console.log(user.username + " HAS LEFT THE ROOM");
				});

				socket.on("bc_joined_room", function (roomInfo: Room_RoomData, slotInfo: Room_RoomData_Slot) {

					// UPDATE SLOT INFO
					self._roomInfo(roomInfo);
					//var ri = self._roomInfo();
					//ri.slots[slotInfo.index] = slotInfo;
					//self._roomInfo.valueHasMutated();

					console.log(slotInfo.user.username + " HAS JOINED THE ROOM");
				});

				socket.on("bc_start_countdown", function (seconds: number) {

					self._startCountdown(seconds);
				});

				socket.on("bc_stop_countdown", function () {

					self._stopCountdown();
				});

				socket.on("bc_game_ready", function (gameId: string) {

					Engine.setState("LiveGame", { gid: gameId });
				});

				socket.emit("join_room", hs.params["rid"], hs.params["pw"]);

				callback();
			});
			
		}

		end(): void {

			Server.disconnect(this._socket);
			this._socket = null;

			clearInterval(this._countdownInterval);
		}

		private _startCountdown(seconds: number): void {

			clearInterval(this._countdownInterval);

			var self = this;
			this._countdownInterval = setInterval(function () { self._countdownTick(); }, 1000);
			this._countdownTime(seconds);
			this._countdownStarted(true);
		}

		private _stopCountdown(): void {
			clearInterval(this._countdownInterval);
			this._countdownStarted(false);
			this._countdownTime(0);
		}

		private _countdownTick(): void {

			var time = this._countdownTime();

			if (--time <= 0) {
				clearInterval(this._countdownInterval);
				if (this._socket)
					this._socket.emit("countdown_complete");
			}

			this._countdownTime(time);
		}
	}

}
