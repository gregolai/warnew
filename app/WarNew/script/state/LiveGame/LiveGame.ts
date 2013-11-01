/// <reference path="_include.ts"/>

module Engine.WarNew {


	function _entitySortFunction(a: Entity, b: Entity): number {
		return b.getSortOrder() - a.getSortOrder();
	}

	export class LiveGame extends AppState {

		private _world: World;
		private _camera: Camera2D;
		private _player: KnockoutObservable<Player>;

		private _mainSurface: Surface2D;

		private _userState: UserState;
		private _selectionStart: Vec2;
		private _worldMouseCoords: Vec2;
		private _mouseInView: boolean;

		// SELECTION
		private _selectionRect: Rect;
		private _selectedEntities: KnockoutObservableArray<Entity>;
		private _selectedIds: KnockoutObservableArray<boolean>;

		// CURSOR HOVER
		private _hoverTarget: KnockoutObservable<WorldTarget>;
		private _hoverTile: Tile;

		// GROUPS, PAGE, COMMANDS
		private _group: KnockoutObservableArray<Entity>;
		private _groupIds: KnockoutObservableArray<boolean>;
		private _groupType: EntityType;
		
		private _currentCommands: KnockoutObservableArray<Command>;
		private _currentPage: CommandPage;

		private _pendingCommand: WorldCommand;

		// DEBUG DRAWING
		private _drawGrid: boolean;
		private _drawEntityIDs: boolean;
		private _drawPath: boolean;
		private _drawTileNumbers: boolean;
		private _drawQuadtree: boolean;

		// LEFT PANEL
		private _hoverCommand: KnockoutObservable<Command>;
		private _downButton: KnockoutObservable<IconButton>;
		private _tooltip: KnockoutObservable<string>;
		private _tooltipExtended: KnockoutObservable<string>;
		private _statusBarText: KnockoutComputed<string>;

		getPlayer() { return this._player(); }

		getSelectedEntities() { return this._selectedEntities(); }

		getGroup() { return this._group(); }
		getCurrentCommands() { return this._currentCommands(); }

		// LEFT PANEL
		getHoverCommand() { return this._hoverCommand(); }
		getDownButton() { return this._downButton(); }
		getTooltip() { return this._tooltip(); }
		getTooltipExtended() { return this._tooltipExtended(); }
		getStatusBarText() { return this._statusBarText(); }

		constructor() {
			super({
				hasUI: true
			});

			var self = this;

			this._player = ko.observable();

			

			this._hoverTarget = ko.observable();
			this._hoverTile = null;

			
			this._group = ko.observableArray([]);

			this._groupType = EntityType.None;

			this._selectedEntities = ko.observableArray();
			this._selectedIds = ko.observableArray();
			this._selectedEntities.subscribe(function (selected: Entity[]) {

				// MAP SELECTED ENTITIES BY ID
				var ids = self._selectedIds();
				ids.length = 0;
				for (var i = selected.length - 1; i !== -1; --i)
					ids[selected[i].getID()] = true;
				self._selectedIds.valueHasMutated();

				// UPDATE GROUP TYPE TO FIRST ENTITY IF OLD TYPE IS NOT FOUND
				var oldType = self._groupType;

				// DOES THERE EXIST AN ENTITY OF THE OLD TYPE
				var ent = _.find(selected, function (ent: Entity) {
					return ent.getType() === oldType;
				});

				self.setGroupType(ent ? ent.getType() : (selected.length > 0 ? selected[0].getType() : EntityType.None));
			});

			this._groupIds = ko.observableArray();

			this._currentCommands = ko.observableArray([]);

			// LEFT PANEL STUFF
			this._hoverCommand = ko.observable();
			this._downButton = ko.observable();
			this._tooltip = ko.observable();
			this._tooltipExtended = ko.observable();
			this._statusBarText = ko.computed(function () {
				var cmd = self._hoverCommand();
				if (cmd)
					return cmd.getName();
				var target = self._hoverTarget();
				if(target instanceof Entity)
					return (<Entity>target).getName(); 
			});

		}

		onUICreated(dom: JQuery): void {

			var self = this;
			dom.find(".toMainMenu").click(function () {

				App.instance.setState("MainMenu");

			});

			dom.on("click", ".iconButton.entity", function () {
				var ent = <Entity>ko.dataFor(this);
				var selected = self._selectedEntities();
				if (selected.length === 1) {

					// CENTER CAMERA ON ENTITY
					self._camera.setCenter(ent.getPosition());

				} else if (!self.isEntityInGroup(ent)) {

					// SELECT GROUP
					self.setGroupType(ent.getType());

				} else {

					// SELECT ONE ENTITY
					selected.length = 0;
					selected.push(ent);
					self._selectedEntities.valueHasMutated();
				}
			});

			dom.on("click", ".iconButton.command", function () {
				var command = <Command>ko.dataFor(this);
				self.issueCommand(command);
			});

			dom.on("mouseover", ".iconButton", function () {

				var d = ko.dataFor(this);
				if (d instanceof Command)
					self._hoverCommand(<Command>d);
				else if (d instanceof Entity)
					self._hoverTarget(<Entity>d);
			});
			dom.on("mouseout", ".iconButton", function () {

				var d = ko.dataFor(this);
				if (d instanceof Command)
					self._hoverCommand(null);
				else if (d instanceof Entity)
					self._hoverTarget(null);
			});

			dom.on("mousedown", ".iconButton", function () {
				self._downButton(<IconButton>this);
			});
			dom.on("mouseup", ".iconButton", function () {
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

			var self = this;

			var world = this._world = new World();
			world.init(TEST_WORLD_DATA);

			var terrain = world.getTerrain();
			this._camera = new Camera2D(new Vec2(), terrain.getUnitsWide(), terrain.getUnitsDeep());

			// TODO: LOAD RAW USER DATA
			this._player(world.getPlayerById(2));

			// CLEAR HOVER TARGET AND TILE WHEN MOUSE LEAVES
			this._mainSurface = this.create2dSurface();
			this._mainSurface.canvas.bind("mouseout", function () {
				if(self._hoverTarget() !== null)
					self._hoverTarget(null);
				self._hoverTile = null;
				self._mouseInView = false;
			});
			this._mainSurface.canvas.bind("mouseover", function () {
				self._mouseInView = true;
			});

			this._userState = UserState.Default;
			this._selectionStart = new Vec2();
			this._worldMouseCoords = new Vec2();
			this._mouseInView = false;

			this._selectionRect = new Rect();
			this._selectedEntities([]);

			this._hoverTile = null;
			this._hoverTarget(null);

			this._groupType = EntityType.None;
			this._currentCommands([]);
			this._currentPage = CommandPage.Default;
			this._pendingCommand = null;

			this._drawGrid = false;
			this._drawEntityIDs = false;
			this._drawPath = false;
			this._drawTileNumbers = false;
			this._drawQuadtree = false;

			this._downButton(null);
			this._tooltip(null);
			this._tooltipExtended(null);
			//this._statusBarText		// computed

			(<any>this._mainSurface.context).mozImageSmoothingEnabled = false;
			(<any>this._mainSurface.context).webkitImageSmoothingEnabled = false;
			(<any>this._mainSurface.context).imageSmoothingEnabled = false;			//future
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
			this._hoverTile = null;

			this._groupType = EntityType.None;
			this._currentCommands([]);
			this._currentPage = CommandPage.Default;
			this._pendingCommand = null;

			//this._drawGrid;
			//this._drawEntityIDs;
			//this._drawPath;
			//this._drawTileNumbers;

			this._downButton(null);
			this._tooltip(null);
			this._tooltipExtended(null);
			//this._statusBarText		// computed
		}

		update(dt: number): void {

			this._world.step();
			this._world.step();

			var cursor = "hand";

			var camera = this._camera;
			var rect = this._mainSurface.rect;
			var mousePos = Input.getMousePosition();
			var userState = this._userState;

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

				var world = this._world;
				var wmc = this._worldMouseCoords;

				// GET HOVER TILE AT POINT
				this._hoverTile = world.getTerrain().getTileAtPoint(wmc, false);

				// GET ENTITIES AT POINT, AND FILTER SELECTION RECTS
				var ents = world.getEntitiesAtPoint(wmc);
				for (var i = ents.length - 1; i !== -1; --i) {
					var ent = ents[i];
					if (!ent.getSelectionRect().containsPoint(wmc) || !ent.isSelectable())
						ents.splice(i, 1);
				}

				if (ents.length > 0) {

					// SET HOVER TARGET AND MAGNIFY CURSOR
					cursor = "magnify";
					if (this._hoverTarget() !== ents[0])
						this._hoverTarget(ents[0]);

				} else {

					// SET HOVER TARGET TO TILE
					if (this._hoverTarget() !== this._hoverTile)
						this._hoverTarget(this._hoverTile);
				}

				if (userState === UserState.Targeting) {
					cursor = "yellow_crosshairs";
				}

			}

			
			if (userState === UserState.Selecting) {

				// UPDATE SELECTION
				this._selectionRect.fromPoints(this._selectionStart, this._worldMouseCoords);
			}

			AssetManager.getCursor(cursor).apply();
		}

		draw(): void {

			var ctx = this._mainSurface.context;
			ctx.fillStyle = "#6b6";
			ctx.fillRect(0, 0, this._mainSurface.width, this._mainSurface.height);

			ctx.save();
			{
				var world = this._world;
				var camera = this._camera;
				var camRect = camera.getRect();

				camera.apply(ctx);

				// DRAW THE TERRAIN
				world.getTerrain().draw(ctx, camRect, this._drawGrid, this._drawTileNumbers, this._drawPath);

				if (this._drawQuadtree) {
					// DRAW THE QUADTREE (DEBUG)
					world.getQuadtree().draw(ctx);
				}

				// GET ENTITIES WITHIN VIEW
				var ents = world.getEntitiesInRect(camRect);


				// DRAW RECTS OF SELECTED ENTITIES
				if (ents.length > 0) {

					// GET HOVER TARGET
					var hoverTarget = this._hoverTarget();

					ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
					ctx.strokeStyle = "#0f0";
					for (var i = ents.length - 1; i !== -1; --i){
						var ent = ents[i];
						if (this.isEntitySelected(ent)) {

							// ENTITY IS SELECTED
							var sr = ent.getSelectionRect();
							if (this.isEntityInGroup(ent)) {
								// SELECTED, IN GROUP
								ctx.lineWidth = 2;
								ctx.fillRect(sr.x, sr.y, sr.width, sr.height);
								ctx.strokeRect(sr.x, sr.y, sr.width, sr.height);
							} else {
								// SELECTED, BUT NOT IN GROUP
								ctx.lineWidth = 1;
								ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
							}

							if (hoverTarget === ent) {
								// IS HOVER TARGET
								ctx.save();
								{
									ctx.fillStyle = "#ff0";

									ctx.fillRect(sr.x - 2, sr.y - 2, 4, 4);
									ctx.fillRect(sr.right - 2, sr.y - 2, 4, 4);
									ctx.fillRect(sr.right - 2, sr.bottom - 2, 4, 4);
									ctx.fillRect(sr.x - 2, sr.bottom - 2, 4, 4);
								}
								ctx.restore();
							}
						}

					}
				}

				// DRAW ENTITIES WITHIN VIEW
				for (var i = 0, ii = ents.length; i < ii; ++i) {
					ents[i].draw(ctx);
				}

				// SHOW ENTITY IDs
				if (this._drawEntityIDs) {
					ctx.font = "normal 10px tahoma";
					ctx.fillStyle = "#fff";
					for (var e = 0, ee = ents.length; e < ee; ++e) {
						var entity = ents[e];
						var p = entity.getPosition();
						ctx.fillText(entity.getID().toString(), p.x - 4, p.y - 16);
					}
				}

				var userState = this._userState;
				if (userState === UserState.Selecting) {

					// DRAW SELECTION RECT
					var sr = this._selectionRect;
					ctx.lineWidth = 1;
					ctx.strokeStyle = "#0f0";
					ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
				
				} else if (userState === UserState.PlacingEntity) {

					if (this._hoverTile)
						this._pendingCommand.placementEntity.drawPlacement(ctx, this._hoverTile.x, this._hoverTile.y);

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

		onKeyDown(key: Key): void {

			// TRY HOTKEY COMMAND
			var hotCmd = _.find(this._currentCommands(), function (cmd: Command) {
				return cmd && cmd.getHotkey() === key;
			});

			if (hotCmd) {
				this.issueCommand(hotCmd);
				return;
			}

			if (key === Key.KEY_TAB) {

				// CYCLE TO NEXT GROUP (PREV GROUP IF SHIFT IS DOWN)
				this._cycleGroup(Input.isKeyDown(Key.KEY_SHIFT));
				Input.preventDefault();

			} else if (key === Key.KEY_NUMPAD_0) {
				this._drawGrid = !this._drawGrid;
			} else if (key === Key.KEY_NUMPAD_1) {
				this._drawTileNumbers = !this._drawTileNumbers;
			} else if (key === Key.KEY_NUMPAD_2) {
				this._drawPath = !this._drawPath;
			} else if (key === Key.KEY_NUMPAD_3) {
				this._drawEntityIDs = !this._drawEntityIDs;
			} else if (key === Key.KEY_NUMPAD_4) {
				this._drawQuadtree = !this._drawQuadtree;
			}

		}

		onBufferedKeyDown(key: Key): void {

			if (key === Key.KEY_TAB) {
				Input.preventDefault();
			}
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

					// ISSUE DEFAULT COMMAND
					var result = this.issueCommand();
					if (result.success) {
						// TODO: START X SEQUENCE
					}

				}

			} else if (userState === UserState.Targeting || userState === UserState.PlacingEntity) {

				if (button === Key.KEY_MOUSE_LEFT) {

					// EXECUTE PENDING COMMAND
					this.issueCommand();

				} else {

					// CANCEL PENDING COMMAND
					this.setPage(CommandPage.Default);
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
			if (button === Key.KEY_MOUSE_LEFT && this._downButton() !== null) {
				this._downButton(null);
			}
		}

		onMouseWheel(delta: number): void {

			// ZOOM
			if (delta > 0) {

				this._camera.setZoom(this._camera.getZoom() * (1 + CAMERA_ZOOM_INCREMENT));

			} else if (delta < 0) {

				this._camera.setZoom(this._camera.getZoom() * (1 - CAMERA_ZOOM_INCREMENT));	

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

		isEntityInGroup(ent: Entity): boolean {
			return this._groupIds()[ent.getID()] || false;
		}

		isEntitySelected(ent: Entity): boolean {
			return this._selectedIds()[ent.getID()] || false;
		}

		issueCommand(command?: Command): CommandResult {

			var player = this._player();
			var selected = this._selectedEntities();
			var doQueue = Input.isKeyDown(Key.KEY_SHIFT);

			var result: CommandResult = null;

			// IF COMMAND IS BEING ISSUED (ie: Command-button click)
			if (command) {

				if (command instanceof UserCommand) {
					result = (<UserCommand>command).tryExecute(this);
				} else {

					var worldCommand = <WorldCommand>command;
					result = worldCommand.canExecute(player, selected, null);

					if (result.success) {

						if (worldCommand.requiresTarget()) {

							// GET PLOT ENTITY TYPE (BUILDING)
							var plotEntType = worldCommand.plotEntityType();
							if (plotEntType === EntityType.None) {
								this._userState = UserState.Targeting;
							} else {
								this._userState = UserState.PlacingEntity;

								worldCommand.placementEntity = new Entity(MAX_INT, this._world, plotEntType, Data.AllEntityData[plotEntType], this._player());
							}

							this._pendingCommand = worldCommand;
							this.setPage(CommandPage.Targeting);

						} else {

							// INSTANT EXECUTE
							result = worldCommand.tryExecute(player, selected, null, doQueue);

						}

					}

				}

			} else /* !command */ {

				var target = this._hoverTarget() || this._hoverTile;

				if (this._userState === UserState.Targeting) {

					// EXECUTE ON TARGET
					result = this._pendingCommand.tryExecute(player, selected, target, doQueue);

				} else if (this._userState === UserState.PlacingEntity) {

					// EXECUTE PLACEMENT ON TILE
					target = this._hoverTile;
					result = this._pendingCommand.tryExecute(player, selected, target, doQueue);

				} else {

					// IE: Right-click (DEFAULT COMMAND FOR EACH ENTITY SELECTED)
					result = WorldCommand.instance.tryExecute(player, selected, target, doQueue);
				}
				console.log(result);
				if (result.success) {
					this.setPage(CommandPage.Default);
				}

			}


			if (result.message) {
				// TODO: SET NOTIFY MESSAGE
			}

			return result;
		}

		setGroupType(entType: EntityType): void {

			// GET ALL SELECTED ENTITIES OF THE CURRENT TYPE
			var player = this._player();
			var group = _.filter(this._selectedEntities(), function (ent: Entity) {
				return ent.getType() === entType && ent.getOwner() === player;
			});
			this._group(group);

			// MAP ENTITIES IN GROUP BY ID
			var ids = this._groupIds();
			ids.length = 0;
			for (var i = group.length - 1; i !== -1; --i)
				ids[group[i].getID()] = true;
			this._groupIds.valueHasMutated();

			this._groupType = entType;

			// ON NEW TYPE, SET PAGE TO DEFAULT
			this.setPage(CommandPage.Default);
		}

		setPage(page: CommandPage): void {

			var commands: Command[] = [];
			for (var i = COMMANDS_MAX - 1; i !== -1; --i)
				commands[i] = null;

			function pushCommand(cmd: Command): void {
				commands[cmd.getButtonY() * COMMAND_BUTTON_X_MAX + cmd.getButtonX()] = cmd;
			}

			if (page === CommandPage.AdvancedBuild) {

				pushCommand(CancelCommand.instance);

			} else if (page === CommandPage.BasicBuild) {

				// CURRENT GROUP COMMANDS
				var group = this._group();
				if (group.length > 0) {

					var ent = group[0];

					_.each(ent.getStructuresBuilt(), function (entType: EntityType) {
						var data = Data.AllEntityData[entType];
						if (!data)
							return;
						
						pushCommand(new BuildCommand(entType));
					});
				}

				pushCommand(CancelCommand.instance);

			} else if (page === CommandPage.Targeting) {

				pushCommand(CancelCommand.instance);

			} else {
				// DEFAULT PAGE
				this._userState = UserState.Default;
				this._pendingCommand = null;

				// GENERAL COMMANDS
				var stop = false;
				var attack = false;
				var move = false;
				var patrol = false;
				var holdPosition = false;
				var setRallyPoint = false;

				var player = this._player();
				var selected = this._selectedEntities();
				for (var i = 0, ii = selected.length; i < ii; ++i) {
					var ent = selected[i];

					if (ent.getOwner() !== player)
						continue;

					if (ent.canMove() || ent.hasWeapon())
						stop = true;

					if (ent.hasWeapon())
						attack = true;

					if (ent.canMove()) {
						move = true;
						patrol = true;
						holdPosition = true;
					}

					if (ent.trainsUnits())
						setRallyPoint = true;
				}

				if (stop)
					pushCommand(StopCommand.instance);
				if (attack)
					pushCommand(AttackCommand.instance);
				if (move)
					pushCommand(MoveCommand.instance);
				if (patrol)
					pushCommand(PatrolCommand.instance);
				if (holdPosition)
					pushCommand(HoldPositionCommand.instance);
				if (setRallyPoint)
					pushCommand(SetRallyPointCommand.instance);

				// CURRENT GROUP COMMANDS
				var group = this._group();
				if (group.length > 0) {

					var ent = group[0];

					// PUSH ABILITIES
					_.each(ent.getAbilities(), function (abType: AbilityType) {
						pushCommand(new AbilityCommand(abType));
					});

					// PUSH UNITS TRAINED
					_.each(ent.getUnitsTrained(), function (entType: EntityType) {
						pushCommand(new TrainCommand(entType));
					});

					// PUSH STRUCTURES BUILT
					var showBasic = false;
					var showAdvanced = false;
					_.each(ent.getStructuresBuilt(), function (entType: EntityType) {
						var data = Data.AllEntityData[entType];
						if (!data)
							return;

						showBasic = showBasic || (data.page === CommandPage.BasicBuild);
						showAdvanced = showAdvanced || (data.page === CommandPage.AdvancedBuild);
					});

					if (showBasic)
						pushCommand(BasicBuildCommand.instance);
					if (showAdvanced)
						pushCommand(AdvancedBuildCommand.instance);

				}
			}

			this._currentPage = page;
			this._currentCommands(commands);
		}

		selectEntities(ents: Entity[], add: boolean): void {

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

				this._filterEntities(selected);
				this._selectedEntities.valueHasMutated();
			} else {

				this._filterEntities(ents);
				this._selectedEntities(ents);

			}

		}

		private _cycleGroup(backwards: boolean): void {

			var oldType = this._groupType;
			var selected = this._selectedEntities();

			var i = backwards ? 0 : selected.length - 1;
			var ii = backwards ? selected.length : -1;
			var inc = i > ii ? -1 : 1;
			while (i !== ii) {
				if (selected[i].getType() === oldType) {
					
					var nextEnt = selected[i - inc] || selected[ii - inc];
					var nextEntType = nextEnt.getType();
					if (nextEntType !== oldType)
						this.setGroupType(nextEntType);
					return;									// return early

				}
				i += inc;
			}

			this.setGroupType(EntityType.None);
		}

		private _endSelection(): void {
			
			this._userState = UserState.Default;

			var sr = this._selectionRect;
			var ents = this._world.getEntitiesInRect(sr);
			for (var i = ents.length - 1; i !== -1; --i) {
				var ent = ents[i];
				if (!ent.getSelectionRect().intersectsRect(sr))
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
				if (!ent.isSelectable()) {

					// REMOVE UNSELECTABLE ENTITIES
					ents.splice(i, 1);

				} else if (!ent.isUnit() || ent.getOwner() !== player) {

					// REMOVE STRUCTURES AND ENTITIES NOT OWNED BY THE PLAYER
					savedEnt = ents.splice(i, 1)[0];

				}
			}
			

			if (ents.length === 0 && savedEnt) {
				
				ents.push(savedEnt);

			} else {

				ents.sort(_entitySortFunction);

				if (ents.length > ENTITY_MAX_SELECTION)
					ents.splice(ENTITY_MAX_SELECTION, ents.length - ENTITY_MAX_SELECTION);
			}
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

	}

}
