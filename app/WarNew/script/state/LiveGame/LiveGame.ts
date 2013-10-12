/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class LiveGame extends AppState {

		private _world: World;
		private _camera: Camera2D;
		private _player: KnockoutObservable<Player>;

		private _mainSurface: Surface2D;

		private _userState: UserState;
		private _selectionStart: Vec2;
		private _worldMouseCoords: Vec2;
		private _mouseInView: boolean;

		private _selectionRect: Rect;
		private _selectedEntities: KnockoutObservableArray<Entity>;

		private _hoverTarget: KnockoutObservable<WorldTarget>;
		private _hoverTile: KnockoutObservable<Tile>;

		private _groupIndicesIndex: KnockoutObservable<number>;
		private _groupIndices: KnockoutComputed<number[]>;

		// LEFT PANEL
		private _hoverButton: KnockoutObservable<IconButton>;
		private _downButton: KnockoutObservable<IconButton>;
		private _tooltip: KnockoutObservable<string>;
		private _tooltipExtended: KnockoutObservable<string>;
		private _statusBarText: KnockoutComputed<string>;

		get player() { return this._player(); }

		get selectedEntities() { return this._selectedEntities(); }
		get noEntitiesSelected() { return this._selectedEntities().length === 0; }
		get oneEntitySelected() { return this._selectedEntities().length === 1; }
		get multipleEntitiesSelected() { return this._selectedEntities().length > 1; }

		// LEFT PANEL
		get hoverButton() { return this._hoverButton(); }
		get downButton() { return this._downButton(); }
		get tooltip() { return this._tooltip(); }
		get tooltipExtended() { return this._tooltipExtended(); }
		get statusBarText() { return this._statusBarText(); }

		constructor() {
			super({
				hasUI: true
			});

			this._player = ko.observable();

			this._selectedEntities = ko.observableArray();

			this._hoverTarget = ko.observable();
			this._hoverTile = ko.observable();

			// TODO: GROUP SELECTION INDEX
			this._groupIndicesIndex = ko.observable(0);

			var self = this;
			this._groupIndices = ko.computed(function () {
				
				var indices: number[] = [];
				var prevType = -1;
				var selected = self._selectedEntities();
				for (var i = 0, ii = selected.length; i < ii; ++i) {

					var type = selected[i].type;
					if (type !== prevType) {
						indices.push(i);
						prevType = type;
					}

				}

				// SET GROUP INDICES INDEX TO 0 IF OUT OF BOUNDS
				if (self._groupIndicesIndex() >= indices.length) {
					self._groupIndicesIndex(0);
				}

				return indices;
			});

			// LEFT PANEL STUFF
			this._hoverButton = ko.observable();
			this._downButton = ko.observable();
			this._tooltip = ko.observable();
			this._tooltipExtended = ko.observable();
			this._statusBarText = ko.computed(function () {

				var btn = self._hoverButton();
				if (btn) {
					var ent = <Entity>ko.dataFor(btn);
					if (ent) {
						return ent.name;
					}
				}

				var target = self._hoverTarget();
				if (target instanceof Entity) {
					return (<Entity>target).name;
				}
			});
		}

		onUICreated(dom: JQuery): void {

			var self = this;
			dom.find(".toMainMenu").click(function () {

				App.instance.setState("MainMenu");

			});

			dom.on("click", ".entityButton", function () {
				var ent = <Entity>ko.dataFor(this);
				var selected = self._selectedEntities();
				if(selected.length === 1) {

					// CENTER CAMERA ON ENTITY
					self._camera.setCenter(ent.position);

				} else {

					// SELECT ONE ENTITY
					self._selectedEntities([ent]);

				}
			});

			dom.on("mouseover", ".entityButton", function () {
				self._hoverButton(<IconButton>this);
			});
			dom.on("mouseout", ".entityButton", function () {
				self._hoverButton(null);
			});

			dom.on("mousedown", ".entityButton", function () {
				self._downButton(<IconButton>this);
			});
			dom.on("mouseup", ".entityButton", function () {
				self._downButton(null);
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

			
			var raceName = "human";
			var terrainType = "forest";

			var self = this;
			AssetManager.load({

				cursors: [
					{ id: "magnify",			x: 0,	y: 0,		filename: "magnify.gif" },
					{ id: "select",				x: 8,	y: 8,		filename: "select.gif" },
					{ id: "hand",				x: 2,	y: 0,		filename: raceName + "_hand.gif" },
					{ id: "hand_invalid",		x: 2,	y: 0,		filename: raceName + "_hand_invalid.gif" },
					{ id: "red_crosshairs",		x: 14,	y: 14,		filename: raceName + "_red_crosshairs.gif" },
					{ id: "yellow_crosshairs",	x: 14,	y: 14,		filename: raceName + "_yellow_crosshairs.gif" },
					{ id: "green_crosshairs",	x: 14,	y: 14,		filename: raceName + "_green_crosshairs.gif" }
				],

				images: [
					// TERRAIN
					{ id: "terrain",					filename: "terrain/" + terrainType + ".png" },

					// ICONS
					{ id: "icons",						filename: "icon/" + terrainType + ".png" },

					// UNITS
					{ id: "footman",					filename: "unit/footman.png" },
					{ id: "knight",						filename: "unit/knight.png" },
					{ id: "peasant",					filename: "unit/peasant.png" },

					// STRUCTURES (NEUTRAL)
					{ id: "gold_mine",					filename: "structure/" + terrainType + "/neutral/gold_mine.png" },
					{ id: "oil_patch",					filename: "structure/" + terrainType + "/neutral/oil_patch.png" },

					// STRUCTURES (PLAYER-CONTROLLED)
					{ id: "farm",						filename: "structure/" + terrainType + "/farm.png" },
					{ id: "town_hall",					filename: "structure/" + terrainType + "/town_hall.png" }
				],

				shaders: [
					{ id: "terrain",	filename: "terrain.shader" }
				]

			}, function(){

				self._begin();
				callback();

			});

		}
		private _begin(): void {

			var world = this._world = new World();
			world.decode(TEST_WORLD_DATA);

			this._camera = new Camera2D(new Vec2(), world.terrain.unitsWide, world.terrain.unitsDeep);

			// TODO: LOAD RAW USER DATA
			this._player(world.getPlayerById(2));

			this._mainSurface = this.create2dSurface();

			this._userState = UserState.Default;
			this._selectionStart = new Vec2();
			this._worldMouseCoords = new Vec2();
			this._mouseInView = false;

			this._selectionRect = new Rect();
			this._selectedEntities([]);
			this._hoverTile(null);
			this._hoverTarget(null);

			this._groupIndicesIndex(0);
			//this._groupIndices		// computed

			this._hoverButton(null);
			this._downButton(null);
			this._tooltip(null);
			this._tooltipExtended(null);
			//this._statusBarText		// computed

		}
		end(): void {

			this._world.dispose();
			this._world = null;

			this._camera.dispose();
			this._camera = null;

			//this._player.dispose();	// handled by world
			this._player(null);

			this._mainSurface.dispose();
			this._mainSurface = null;

			//this._userState
			this._selectionStart = null;
			this._worldMouseCoords = null;
			//this._mouseInView

			this._selectionRect = null;
			this._selectedEntities([]);
			this._hoverTarget(null);
			this._hoverTile(null);

			this._groupIndicesIndex(0);
			//this._groupIndices		// computed

			this._hoverButton(null);
			this._downButton(null);
			this._tooltip(null);
			this._tooltipExtended(null);
			//this._statusBarText		// computed
		}

		selectEntities(ents: Entity[], add: boolean): void {

			var list = ents;

			if (add) {

				var selected = this._selectedEntities();

				if (ents.length === 1) {

					var index = selected.indexOf(ents[0]);
					if (index === -1) {
						// ADD SINGLE ENTITY
						selected.push(ents[0]);
					} else {
						// REMOVE SINGLE ENTITY FROM SELECTED
						selected.splice(index, 1);
					}

				} else {

					// PUSH ENTITIES THAT AREN'T ALREADY SELECTED
					for (var i = ents.length - 1; i !== -1; --i) {
						var ent = ents[i];
						if (selected.indexOf(ent) === -1)
							selected.push(ent);
					}

				}

				list = selected;
			}

			this._filterEntities(list);

			this._selectedEntities(list);
		}

		private _startSelection(pageX: number, pageY: number): void {
			var rect = this._mainSurface.rect;
			this._userState = UserState.Selecting;
			this._camera.getPointAt(
				pageX - rect.x,
				pageY - rect.y,
				this._selectionStart
			);
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

				this.selectEntities(ents, Input.isKeyDown(Key.KEY_SHIFT));

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
					return b.sortOrder - a.sortOrder;
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

			// IS MOUSE IN VIEW
			this._mouseInView = rect.containsPoint(mousePos);

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

			// UPDATE WORLD MOUSE COORDINATES
			camera.getPointAt(
				mousePos.x - rect.x,
				mousePos.y - rect.y,
				this._worldMouseCoords
			);

			// IF MOUSE IS IN VIEW, GET HOVER TILE AND HOVER TARGET
			if (this._mouseInView) {

				// GET HOVER TILE AT POINT
				this._hoverTile(this._world.terrain.getTileAtPoint(this._worldMouseCoords, false));


				// GET ENTITIES AT POINT, AND FILTER SELECTION RECTS
				var ents = this._world.getEntitiesAtPoint(this._worldMouseCoords);
				for (var i = ents.length - 1; i !== -1; --i) {
					var ent = ents[i];
					if (!ent.selectionRect.containsPoint(this._worldMouseCoords)) {
						ents.splice(i, 1);
					}
				}
				this._hoverTarget(ents[0] || this._hoverTile);

			} else {
				this._hoverTile(null);
				this._hoverTarget(null);
			}

			var userState = this._userState;
			if (userState === UserState.Selecting) {

				// UPDATE SELECTION
				this._selectionRect.fromPoints(this._selectionStart, this._worldMouseCoords);
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


			// CLEAR DOWN BUTTON
			if (button === Key.KEY_MOUSE_LEFT) {
				this._downButton(null);
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
