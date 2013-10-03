/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Editor extends AppState {

		private _bgSurface: Surface2D;
		private _stage: Stage;

		private _hoverSlot: KnockoutObservable<Slot>;
		private _levelList: KnockoutObservableArray<RawLevelData>;

		get levelList() { return this._levelList(); }

		constructor() {
			super({
				hasUI: true
			});

			this._bgSurface = this.create2dSurface();
			this._stage = new Stage(this);

			this._hoverSlot = ko.observable(null);
			this._levelList = ko.observableArray();
		}

		onUICreated(dom: JQuery): void {

			var self = this;
			dom.on("click", ".backToMenu", function () {
				App.instance.setState("MainMenu");
			});
			dom.on("click", ".levelData", function () {
				dom.find(".loadSave").hide();
				$(this).siblings(".loadSave").show();
			});
			dom.on("click", ".btnNew", function () {
				self._newLevel();
			});
			dom.on("click", ".btnSave", function () {
				var data = <RawLevelData>ko.dataFor(this);
				self._saveLevel(data.id);
			});

			dom.on("click", ".btnLoad", function () {
				var data = <RawLevelData>ko.dataFor(this);
				self._loadLevel(data.id);
			});
		}

		begin(callback: () => void): void {
			this._refreshLevelList();
			this._newLevel();
			callback();
		}

		end(): void {
		}

		update(dt: number): void {

			var hoverSlot = this._hoverSlot();

			if (Input.isKeyDown(Key.KEY_MOUSE_LEFT)) {
				if (hoverSlot) {

					if (Input.isKeyDown(Key.KEY_SHIFT)) {
						// REMOVE BLOCKS AT CURSOR
						hoverSlot.removeBlock();
					} else {
						// PAINT BLOCKS AT CURSOR
						hoverSlot.addBlock(BlockType.Solid);
					}
				}
			}

		}

		draw(): void {

			var bgSurface = this._bgSurface;
			var bgCtx = bgSurface.context;

			bgCtx.fillStyle = "#556";
			bgCtx.fillRect(0, 0, bgSurface.width, bgSurface.height);

			this._stage.draw(true, this._hoverSlot());

		}

		onKeyDown(key: Key): void {
		}
		
		onMouseMove(x: number, y: number): void {

			var slot = this._stage.getSlotAtPixel(x, y);
			var oldSlot = this._hoverSlot();
			if (slot !== oldSlot) {
				this._hoverSlot(slot);
			}
		}

		onMouseDown(x: number, y: number, button: Key): void {
		}

		onResize(width: number, height: number): void {

			this._bgSurface.width = width;
			this._bgSurface.height = height;

			this._stage.resize(width, height);
		}

		private _refreshLevelList(): void {

			var self = this;
			$.post("app/breakout/server/getLevelList.php", {}, function (msg: string) {
				var wrappers: any[];
				try {
					wrappers = parseServerMessage(msg);
				} catch (ex) {
					console.log("Failed to get level list: " + ex);
					return;
				}
				var levelList: RawLevelData[] = [];
				for (var i = 0, ii = wrappers.length; i < ii; ++i) {

					var wrapper = wrappers[i];
					var data = <RawLevelData>JSON.parse(wrapper.data);

					data.id = wrapper.id;
					levelList.push(data);

				}
				self._levelList(levelList);
			});

		}

		private _newLevel(): void {
			this._stage.load();
		}

		private _loadLevel(id: number, callback?: () => void): void {

			var self = this;
			$.post("app/breakout/server/loadLevel.php", {
				id: id
			}, function (msg: string) {

				var data: RawLevelData;
				try {
					data = <RawLevelData>parseServerMessage(msg);
				} catch (ex) {
					console.log("Failed to load level: " + ex);
					return;
				}

				self._stage.load(data.stage);

				if (callback) {
					callback();
				}
			});

		}

		private _saveLevel(id: number): void {

			var data: RawLevelData = {};

			data.id = id;
			data.name = "Level " + (id+1);
			data.stage = this._stage.save();

			$.post("app/breakout/server/saveLevel.php", {
				id: id,
				data: JSON.stringify(data)
			}, function (msg: string) {

				try {
					var success = parseServerMessage(msg);

				} catch(ex) {
					console.log("Failed to save level: " + ex);
					return;
				}

			});

		}
	}

}
