/// <reference path="_include.ts"/>

module Engine.WarNew {


	export class LiveGame extends AppState {

		private _dom: JQuery;
		private _world: World;
		private _camera: Camera2D;
		private _player: KnockoutObservable<Player>;

		private _mainSurface: Surface2D;

		private _userState: UserState;
		private _selectionStart: Vec2;
		private _selectionEnd: Vec2;
		private _selectionRect: Rect;
		private _selectedEntities: KnockoutObservableArray<Entity>;

		private _entityGroupIndex: KnockoutObservable<number>;
		private _entityGroups: KnockoutComputed<Entity[][]>;

		get player() { return this._player(); }

		get selectedEntities() { return this._selectedEntities(); }
		get noEntitiesSelected() { return this._selectedEntities().length === 0; }
		get oneEntitySelected() { return this._selectedEntities().length === 1; }
		get multipleEntitiesSelected() { return this._selectedEntities().length > 1; }

		//get hoverButton() { return this._hoverButton(); }

		constructor() {
			super({
				hasUI: true
			});

			this._player = ko.observable();

			this._mainSurface = this.create2dSurface();

			this._selectedEntities = ko.observableArray();

			this._entityGroupIndex = ko.observable(0);

			var self = this;
			this._entityGroups = ko.computed(function () {
				
				var groups: Entity[][] = [];
				return groups;
			});
		}

		onUICreated(dom: JQuery): void {

			this._dom = dom.find("#LiveGame");

			var self = this;
			dom.on("click", ".entityButton", function () {
				var ent = <Entity>ko.dataFor(this);
				var selected = self._selectedEntities();
				if (selected.length === 1) {
					self._camera.setCenter(ent.position);
				} else {
					self._selectedEntities([ent]);
				}
			});
		}

		initialize(callback: () => void): void {

			AssetManager.load({
				/*
				fonts: [
					{
						id: "SourceSansPro",
						styles: FontStyle.Regular |
							FontStyle.Italic |
							FontStyle.Bold |
							FontStyle.BoldItalic |
							FontStyle.Light |
							FontStyle.LightItalic |
							FontStyle.ExtraLight |
							FontStyle.ExtraLightItalic |
							FontStyle.SemiBold |
							FontStyle.SemiBoldItalic
					}
				]
				*/
			}, callback);
		}

		begin(callback: ()=>void): void {

			var self = this;
			this._loadAssets(function () {
				self._beginWorld(callback);
			});
		}

		selectEntities(ents: Entity[], add: boolean): void {

			this._filterEntities(ents);

			if (add) {

				/*
				var selected = this._selectedEntities();
				for (var i = selected.length - 1; i !== -1; --i) {
					var sel = selected[i];
					if (ents.indexOf(sel) === -1)
						ents.push(ent);
				}
				this._selectedEntities(selected);
				*/

			} else {
				this._selectedEntities(ents);
			}
		}

		private _loadAssets(callback: () => void): void {

			var raceName = "human";
			var terrainType = "forest";

			AssetManager.load({

				cursors: [
					{ id: "magnify",			x: 0,	y: 0,	filename: "magnify.gif" },
					{ id: "select",				x: 8,	y: 8,	filename: "select.gif" },
					{ id: "hand",				x: 2,	y: 0,	filename: raceName + "_hand.gif" },
					{ id: "hand_invalid",		x: 2,	y: 0,	filename: raceName + "_hand_invalid.gif" },
					{ id: "red_crosshairs",		x: 14,	y: 14,	filename: raceName + "_red_crosshairs.gif" },
					{ id: "yellow_crosshairs",	x: 14,	y: 14,	filename: raceName + "_yellow_crosshairs.gif" },
					{ id: "green_crosshairs",	x: 14,	y: 14,	filename: raceName + "_green_crosshairs.gif" }
				],

				images: [
					// TERRAIN
					{ id: "terrain",			filename: "terrain/" + terrainType + ".png" },

					// ICONS
					{ id: "icons",				filename: "icon/" + terrainType + ".png" },

					// UNITS
					{ id: "footman",			filename: "unit/footman.png" },
					{ id: "knight",				filename: "unit/knight.png" },
					{ id: "peasant",			filename: "unit/peasant.png" },

					// STRUCTURES (NEUTRAL)
					{ id: "gold_mine",			filename: "structure/" + terrainType + "/neutral/gold_mine.png" },
					{ id: "oil_patch",			filename: "structure/" + terrainType + "/neutral/oil_patch.png" },

					// STRUCTURES (PLAYER-CONTROLLED)
					{ id: "farm",				filename: "structure/" + terrainType + "/farm.png" },
					{ id: "town_hall",			filename: "structure/" + terrainType + "/town_hall.png" }
				],

				shaders: [
					{ id: "terrain", filename: "terrain.shader" }
				]

			}, callback);

		}

		private _beginWorld(callback: () => void): void {

			var world = this._world = new World();
			world.decode(TEST_WORLD_DATA);

			this._camera = new Camera2D(new Vec2(), world.terrain.unitsWide, world.terrain.unitsDeep);

			// TODO: LOAD RAW USER DATA
			this._player(world.getPlayerById(2));

			this._userState = UserState.Default;
			this._selectionStart = new Vec2();
			this._selectionEnd = new Vec2();
			this._selectionRect = new Rect();
			this._selectedEntities([]);

			this._dom.attr("race", "human");

			callback();
		}

		private _startSelection(pageX: number, pageY: number): void {
			var rect = this._mainSurface.rect;
			this._userState = UserState.Selecting;
			this._camera.getPointAt(
				pageX - rect.x,
				pageY - rect.y,
				this._selectionStart
			);
			this._selectionEnd.fromVec2(this._selectionStart);

			this._selectionRect.fromPoints(this._selectionStart, this._selectionEnd);
		}
		private _updateSelection(pageX: number, pageY: number): void {
			var rect = this._mainSurface.rect;
			this._camera.getPointAt(
				pageX - rect.x,
				pageY - rect.y,
				this._selectionEnd
			);

			this._selectionRect.fromPoints(this._selectionStart, this._selectionEnd);
		}
		private _endSelection(): void {
			
			this._userState = UserState.Default;

			var sr = this._selectionRect;
			var ents = this._world.getEntitiesInRect(sr);
			for (var i = ents.length - 1; i !== -1; --i) {
				var ent = ents[i];
				if (!ent.selectionRect.intersectsRect(sr))
					ents.splice(i, 1);
			}

			if (ents.length !== 0) {

				this.selectEntities(ents, false);

			}
		}

		private _filterEntities(ents: Entity[]): void {

			if (ents.length === 0) {
				return;
			}

			var player = this._player();

			var savedEnt: Entity = null;
			for (var i = ents.length - 1; i !== -1; --i) {
				var ent = ents[i];
				if (!ent.isSelectable) {

					// REMOVE UNSELECTABLE ENTITIES
					ents.splice(i, 1);

				} else if (!ent.isUnit || ent.owner !== player) {

					// REMOVE STRUCTURES AND ENTITIES NOT OWNED BY THE PLAYER
					savedEnt = ents.splice(i, 1)[0];

				}
			}
			

			if (ents.length === 0 && savedEnt) {
				
				ents.push(savedEnt);

			} else {

				ents.sort(function (a: Entity, b: Entity) {

					// SORT BY PRIORITIES FIRST, TYPES SECOND
					return (b.priority - a.priority) + (b.type - a.type) * 0.00001;
				});

				if (ents.length > ENTITY_MAX_SELECTION) {
					 ents.splice(ENTITY_MAX_SELECTION, ents.length - ENTITY_MAX_SELECTION);
				}
			}
		}

		update(dt: number): void {

			AssetManager.getCursor("hand").apply();

			var camera = this._camera;
			var rect = this._mainSurface.rect;
			var mousePos = Input.getMousePosition();

			// UPDATE CAMERA BY KEYBOARD
			if (Input.isKeyDown(Key.KEY_LEFT)) {
				camera.scrollLeft(dt);
			}
			if (Input.isKeyDown(Key.KEY_RIGHT)) {
				camera.scrollRight(dt);
			}
			if (Input.isKeyDown(Key.KEY_UP)) {
				camera.scrollUp(dt);
			}
			if (Input.isKeyDown(Key.KEY_DOWN)) {
				camera.scrollDown(dt);
			}
			
			// UPDATE CAMERA BY MOUSE
			if (mousePos.x < /*rect.x +*/ CAMERA_MOUSE_SCROLL_EDGE) {
				camera.scrollLeft(dt);
			}
			if (mousePos.y < rect.y + CAMERA_MOUSE_SCROLL_EDGE) {
				camera.scrollUp(dt);
			}
			if (mousePos.x > rect.right - CAMERA_MOUSE_SCROLL_EDGE) {
				camera.scrollRight(dt);
			}
			if (mousePos.y > rect.bottom - CAMERA_MOUSE_SCROLL_EDGE) {
				camera.scrollDown(dt);
			}


			
			var userState = this._userState;
			if (userState === UserState.Selecting) {

				// UPDATE SELECTION
				this._updateSelection(mousePos.x, mousePos.y);
			}
		}

		draw(): void {

			var ctx = this._mainSurface.context;
			ctx.fillStyle = "#fff";
			ctx.fillRect(0, 0, this._mainSurface.width, this._mainSurface.height);

			ctx.save();
			{
				this._camera.apply(ctx);

				// DRAW THE TERRAIN
				this._world.terrain.draw(ctx, this._camera.rect);

				// DRAW THE QUADTREE (DEBUG)
				this._world.quadtree.draw(ctx);

				// DRAW RECTS OF SELECTED ENTITIES
				ctx.lineWidth = 1;
				ctx.strokeStyle = "#0f0";
				var selected = this._selectedEntities();
				for (var i = 0, ii = selected.length; i < ii; ++i) {
					var ent = selected[i];
					var sr = ent.selectionRect;
					ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
				}

				// DRAW ENTITIES WITHIN VIEW
				var ents = this._world.getEntitiesInRect(this._camera.rect);
				for (var i = 0, ii = ents.length; i < ii; ++i) {
					ents[i].draw(ctx);
				}

				var userState = this._userState;
				if (userState === UserState.Selecting) {

					// DRAW SELECTION RECT
					var sr = this._selectionRect;
					ctx.lineWidth = 1;
					ctx.strokeStyle = "#0f0";
					ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
				}

				/*
				var font = AssetManager.getFont("SourceSansPro");
				ctx.fillStyle = "#fff";

				ctx.font = font.getString(FontStyle.Regular, 32);
				ctx.fillText("Regular", 300, 50);

				ctx.font = font.getString(FontStyle.Italic, 32);
				ctx.fillText("Italic", 300, 100);

				ctx.font = font.getString(FontStyle.Bold, 32);
				ctx.fillText("Bold", 300, 150);

				ctx.font = font.getString(FontStyle.BoldItalic, 32);
				ctx.fillText("Bold Italic", 300, 200);

				ctx.font = font.getString(FontStyle.Light, 32);
				ctx.fillText("Light", 300, 250);

				ctx.font = font.getString(FontStyle.LightItalic, 32);
				ctx.fillText("Light Italic", 300, 300);

				ctx.font = font.getString(FontStyle.ExtraLight, 32);
				ctx.fillText("Extra Light", 300, 350);

				ctx.font = font.getString(FontStyle.ExtraLightItalic, 32);
				ctx.fillText("Extra Light Italic", 300, 400);

				ctx.font = font.getString(FontStyle.SemiBold, 32);
				ctx.fillText("Semi-Bold", 300, 450);

				ctx.font = font.getString(FontStyle.SemiBoldItalic, 32);
				ctx.fillText("Semi-Bold Italic", 300, 500);
				*/
			}
			ctx.restore();
		}

		onMouseDown(x: number, y: number, button: Key): void {

			var surfaceRect = this._mainSurface.rect;
			if (!surfaceRect.containsPoint(x, y)) {
				return;
			}

			var userState = this._userState;
			if (userState === UserState.Default) {

				if (button === Key.KEY_MOUSE_LEFT) {

					// START SELECTING
					this._startSelection(x, y);

				} else if (button === Key.KEY_MOUSE_RIGHT) {

					// SELECT NONE
					this._selectedEntities([]);
				}

			}

		}

		onMouseUp(x: number, y: number, button: Key): void {

			var userState = this._userState;
			if (userState === UserState.Selecting) {

				if (button === Key.KEY_MOUSE_LEFT) {

					// END SELECTION - SELECT ENTITIES
					this._endSelection();
				}

			}
		}

		onMouseWheel(delta: number): void {

			// ZOOM
			if (delta > 0) {

				this._camera.setZoom(this._camera.zoom * (1 + CAMERA_ZOOM_INCREMENT));

			} else if (delta < 0) {

				this._camera.setZoom(this._camera.zoom * (1 - CAMERA_ZOOM_INCREMENT));

			}

		}

		onResize(width: number, height: number): void {

			var mainSurface = this._mainSurface;
			mainSurface.x = 176;
			mainSurface.y = 16;
			mainSurface.width = width - 176 - 16;
			mainSurface.height = height - 16 - 16;

			this._camera.resize(mainSurface.width, mainSurface.height);
		}

	}

}
