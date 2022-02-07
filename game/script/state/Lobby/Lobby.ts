/// <reference path="_include.ts"/>

module Engine.Game {

	export interface Lobby_RoomData {
		id: number;
		host: string;
		name: string;
		playerCount: number;
		playerCapacity: number;
		hasPassword: boolean;
	}

	export class Lobby extends AppState {

		_socket: SocketNamespace;
		_rooms: KnockoutObservableArray<Lobby_RoomData>;
		_createPopup: KnockoutObservable<boolean>;

		getRooms() { return this._rooms(); }
		createRoomPopup() { return this._createPopup(); }

		initialize(callback: () => void): void {

			this._rooms = ko.observableArray<Lobby_RoomData>();
			this._createPopup = ko.observable<boolean>();

			callback();
		}

		bindEvents(dom: JQuery): void {

			var self = this;

			var createRoom = dom.find(".createRoom");
			var createRoomForm = createRoom.find(".createRoomForm");
			var inputRoomName = createRoomForm.find(".name");
			var inputRoomPassword = createRoomForm.find(".password");

			dom.find(".btnMainMenu").click(function () {
				Engine.setState("MainMenu");
			});

			dom.find(".btnCreateRoomPopup").click(function () {
				self._createPopup(true);
				inputRoomName.focus();
			});

			createRoom.find(".background").click(function () {
				self._createPopup(false);
			});

			createRoomForm.submit(function (evt: JQueryEventObject) {

				var roomName = inputRoomName.val();
				var roomPw = inputRoomPassword.val();
				if (self._socket) {
					self._socket.emit("create_room", roomName, roomPw);
				}
				evt.preventDefault();
			});

			dom.find(".btnRefreshList").click(function () {

				if(self._socket)
					self._socket.emit("get_room_list");
			});

			dom.on("click", ".btnJoinRoom", function () {
				var roomId = parseInt($(this).closest(".room").attr("room-id"));
				if(roomId && self._socket)
					self._socket.emit("join_room", roomId);
			});
		}

		begin(hs: HistoryState, callback: (updater?: UpdateStrategy) => void): void {

			this._rooms([]);
			this._createPopup(false);

			var self = this;

			Server.connect("/lobby", true, true, function(socket: SocketNamespace){
				
				if (!socket) {
					callback();
					return;
				}

				self._socket = socket;

				socket.on("re_get_room_list", function (list: Lobby_RoomData[]) {

					self._rooms(list);
				});

				socket.on("re_create_room", function (roomId: number, roomPw: string) {
					console.log("Room created: " + roomId);

					var qp: QueryParams = {};
					qp["rid"] = "" + roomId;

					if (roomPw)
						qp["pw"] = roomPw;

					Engine.setState("Room", qp);
				});

				socket.on("re_join_room", function (roomId: number) {

					Engine.setState("Room", { rid: "" + roomId });

				});

				socket.emit("get_room_list");

				callback();
			});

		}

		end(): void {

			Server.disconnect(this._socket);
			this._socket = null;

		}
	}

}
