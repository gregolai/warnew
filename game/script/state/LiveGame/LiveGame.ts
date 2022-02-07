/// <reference path="_include.ts"/>

module Engine.Game {


	function _entitySortFunction(a: Entity, b: Entity): number {
		return b.getSortOrder() - a.getSortOrder();
	}

	export class LiveGame extends AppState {

		private _world: World;
		private _camera: Camera2D;
		private _player: KnockoutObservable<Player>;

		private _mainSurface: Surface2D;
		private _commandBuffer: CommandBuffer;
		private _socket: SocketNamespace;

		private _userState: UserState;
		private _selectionStart: Vec2;
		private _worldMouseCoords: Vec2;
		private _mouseInView: boolean;

		// SELECTION
		private _selectionRect: Rect;
		private _rawSelected: KnockoutObservableArray<Entity>;
		private _selectedEntities: KnockoutComputed<Entity[]>;
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

		// NOTIFY MESSAGE
		private _notifyMessage: KnockoutObservable<string>;
		private _notifyTimeout: number;

		// DEBUG DRAWING
		private _drawGrid: boolean;
		private _drawEntityIDs: boolean;
		private _drawPath: boolean;
		private _drawTileNumbers: boolean;
		private _drawQuadtree: boolean;

		// CROSS SEQUENCE / FLASHING ENTITY
		private _cross: Sequence;
		private _crossPosition: Vec2;
		private _showCross: boolean;
		private _flashEntity: Entity;
		private _flashStart: number;
		private _flashOn: boolean;

		// LEFT PANEL
		private _hoverCommand: KnockoutObservable<Command>;
		private _downButton: KnockoutObservable<IconButton>;
		private _tooltip: KnockoutObservable<string>;
		private _tooltipExtended: KnockoutObservable<string>;
		private _statusBarText: KnockoutComputed<string>;

		private _multiplayer: KnockoutObservable<MultiplayerUpdateStrategy>;

		getWorld() { return this._world; }
		getPlayer() { return this._player(); }

		getSelectedEntities() { return this._selectedEntities(); }

		getGroup() { return this._group(); }
		getCurrentCommands() { return this._currentCommands(); }

		getNotifyMessage() { return this._notifyMessage(); }

		// LEFT PANEL
		getHoverCommand() { return this._hoverCommand(); }
		getDownButton() { return this._downButton(); }
		getTooltip() { return this._tooltip(); }
		getTooltipExtended() { return this._tooltipExtended(); }
		getStatusBarText() { return this._statusBarText(); }

		getLastPing() { return 0;/*this._lastPing();*/ }
		getMultiplayer() { return this._multiplayer(); }

		initialize(callback: () => void): void {

			var self = this;

			this._player = ko.observable<Player>();

			this._hoverTarget = ko.observable<WorldTarget>();
			this._hoverTile = null;

			this._group = ko.observableArray<Entity>([]);

			this._groupType = EntityType.None;

			this._rawSelected = ko.observableArray<Entity>();
			this._selectedIds = ko.observableArray<boolean>();

			this._selectedEntities = ko.computed(function () {

				return self._filterEntities(self._rawSelected());
			});

			this._selectedEntities.subscribe(function (selected: Entity[]) {

				// MAP SELECTED ENTITIES BY ID
				var ids = self._selectedIds();
				ids.length = 0;
				for (var i = selected.length - 1; i !== -1; --i)
					ids[selected[i].id] = true;
				self._selectedIds.valueHasMutated();

				// UPDATE GROUP TYPE TO FIRST ENTITY IF OLD TYPE IS NOT FOUND
				var oldType = self._groupType;

				// DOES THERE EXIST AN ENTITY OF THE OLD TYPE
				var ent = _.find(selected, function (ent: Entity) {
					return ent.type === oldType;
				});
				
				self.setGroupType(ent ? ent.type : (selected.length > 0 ? selected[0].type : EntityType.None));
			});

			this._groupIds = ko.observableArray<boolean>();

			this._currentCommands = ko.observableArray<Command>([]);

			this._notifyMessage = ko.observable<string>();
			this._notifyTimeout = 0;

			// LEFT PANEL STUFF
			this._hoverCommand = ko.observable<Command>();
			this._downButton = ko.observable<IconButton>();
			this._tooltip = ko.observable<string>();
			this._tooltipExtended = ko.observable<string>();
			this._statusBarText = ko.computed(function () {
				var cmd = self._hoverCommand();
				if (cmd)
					return cmd.getName();
				var target = self._hoverTarget();
				if(target instanceof Entity)
					return (<Entity>target).getName(); 
			});

			this._multiplayer = ko.observable<MultiplayerUpdateStrategy>();

			callback();
		}

		bindEvents(dom: JQuery): void {

			var self = this;
			dom.find(".toMainMenu").click(function () {
				Engine.setState("MainMenu");
			});
			dom.find(".toLobby").click(function () {
				Engine.setState("Lobby");
			});

			dom.on("click", ".iconButton.entity", function () {
				var ent = <Entity>ko.dataFor(this);
				var selected = self._selectedEntities();
				if (selected.length === 1) {

					// CENTER CAMERA ON ENTITY
					self._camera.setCenter(ent.getPosition());

				} else if (!self.isEntityInGroup(ent)) {

					// SELECT GROUP
					self.setGroupType(ent.type);

				} else {

					// SELECT ONE ENTITY
					self._rawSelected([ent]);
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


			// CLEAR HOVER TARGET AND TILE WHEN MOUSE LEAVES
			var cvs = dom.find(".mainView");
			cvs.bind("mouseout", function () {
				if(self._hoverTarget() !== null)
					self._hoverTarget(null);
				self._hoverTile = null;
				self._mouseInView = false;
			});
			cvs.bind("mouseover", function () {
				self._mouseInView = true;
			});
			
			this._mainSurface = new Surface2D(cvs.get()[0]);
		}

		begin(hs: HistoryState, callback: (updater?: UpdateStrategy)=>void): void {

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
					{ id: "town_hall",					filename: "structure/" + terrainType + "/town_hall.png" },

					// SITES
					{ id: "land_construction",			filename: "site/" + terrainType + "/land_construction_site.png" },

					// MISC
					{ id: "green_cross",				filename: "misc/green_cross.png" },
					{ id: "red_cross",					filename: "misc/red_cross.png" }
				],

				shaders: [
					{ id: "terrain",	filename: "terrain.shader" }
				]

			}, function(){

				self._begin();

				// IS THIS A MULTIPLAYER GAME?
				var gameId = hs.params["gid"];
				if (typeof gameId !== "undefined") {

					// START MULTIPLAYER GAME
					self._beginMultiplayer(parseInt(gameId), callback)

				} else {
					
					
					// START SINGLEPLAYER GAME
					callback(new SingleplayerUpdateStrategy(self, 1000 / 60));
				}
			});

		}
		private _begin(): void {

			var self = this;

			var world = this._world = new World();
			var loader = new Encoder(true);
			loader.data = TEST_WORLD_DATA2;
			world.load(loader);
			
			var terrain = world.getTerrain();
			this._camera = new Camera2D(new Vec2(), terrain.getUnitsWide(), terrain.getUnitsDeep());

			// TODO: LOAD RAW USER DATA
			this._player(world.getPlayerById(2));

			this._userState = UserState.Default;
			this._selectionStart = new Vec2();
			this._worldMouseCoords = new Vec2();
			this._mouseInView = false;

			this._selectionRect = new Rect();
			//this._selectedEntities([]);

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

			this._cross = new Sequence({
				type: SequenceType.Vertical,
				image: AssetManager.getImage("green_cross"),
				frames: [3, 2, 1, 0],
				frameTick: 4,
				frameWidth: 32,
				frameHeight: 32
			});
			this._crossPosition = new Vec2();
			this._showCross = false;
			this._flashEntity = null;
			this._flashStart = 0;

			this._downButton(null);
			this._tooltip(null);
			this._tooltipExtended(null);
			//this._statusBarText		// computed

			(<any>this._mainSurface.context).mozImageSmoothingEnabled = false;
			(<any>this._mainSurface.context).webkitImageSmoothingEnabled = false;
			(<any>this._mainSurface.context).imageSmoothingEnabled = false;			//future
		}
		private _beginMultiplayer(gameId: number, callback: (lockstepper?: UpdateStrategy)=> void): void {

			var self = this;

			Server.connect("/game", true, false, function(socket: SocketNamespace){

				if (!socket) {
					callback();
					return;
				}

				self._socket = socket;

				socket.on("re_join_game", function (playerId: number) {

					// TODO: SET PLAYER HERE
					//self._playerId = playerId;

					console.log("Was able to join game. My player id is: " + playerId);
				});

				var initPing = performance.now();

				socket.on("bc_start_game", function (turnDelay: number, frameInterval: number, frameCount: number) {

					initPing = performance.now() - initPing;

					var lockstepper = new MultiplayerUpdateStrategy(self, gameId, socket, turnDelay, frameInterval, frameCount, initPing);

					self._multiplayer(lockstepper);

					console.log("START GAME");

					// CALLBACK ONCE EVERYONE HAS STARTED THE GAME
					callback(lockstepper);
				});

				socket.emit("join_game", gameId);
			});
	
		}

		end(): void {

			Server.disconnect(this._socket);
			this._socket = null;

			this._multiplayer(null);

			this._world.dispose();
			this._world = null;

			this._camera.dispose();
			this._camera = null;

			//this._player.dispose();	// handled by world
			this._player(null);

			//this._mainSurface.dispose();
			//this._mainSurface = null;

			//this._userState
			this._selectionStart = null;
			this._worldMouseCoords = null;
			//this._mouseInView

			this._selectionRect = null;
			//this._selectedEntities([]);

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

		fixedUpdate(): void {

			this._world.step();

		}
		update(dt: number): void {

			var cursor = "hand";

			var camera = this._camera;
			var rect = this._mainSurface.rect;
			var mousePos = Input.getMousePosition();
			var userState = this._userState;

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

			// UPDATE CROSS
			if (this._showCross) {

				var crossResult = this._cross.update();
				if (crossResult === SequenceUpdateResult.FrameIncremented) {

					// GIVE CROSS A FALLING EFFECT
					this._crossPosition.y += 1;

				} else if (crossResult === SequenceUpdateResult.SequenceElapsed) {

					// SEQUENCE ELAPSED - HIDE CROSS
					this._showCross = false;
				}

			}

			// UPDATE FLASHING ENTITY
			if (this._flashEntity) {

				var delta = Date.now() - this._flashStart;
				var cycle = Math.floor(delta / ENTITY_FLASH_TIME);
				if (cycle < ENTITY_FLASH_COUNT * 2)
					this._flashOn = ((cycle & 1) === 0);
				else
					this._flashEntity = null;
			}

			// UPDATE NOTIFY MESSAGE
			if (this._notifyTimeout !== 0 && this._notifyTimeout <= Date.now()) {
				this._notifyMessage(null);
				this._notifyTimeout = 0;
			}
			
			if (userState === UserState.Selecting) {

				// UPDATE SELECTION
				this._selectionRect.fromPoints(this._selectionStart, this._worldMouseCoords);
			}

			AssetManager.getCursor(cursor).apply();
		}

		draw(): void {

			var ctx = this._mainSurface.context;
			ctx.fillStyle = "#449";
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

				// STROKE FLASHING ENTITY
				if (this._flashEntity && this._flashOn) {
					var sr = this._flashEntity.getSelectionRect();
					ctx.lineWidth = 1;
					ctx.strokeStyle = "#0f0";
					ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
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
						ctx.fillText("" + entity.id, p.x - 4, p.y - 16);
					}
				}

				// DRAW CROSS
				if (this._showCross)
					this._cross.drawAtCenter(ctx, this._crossPosition.x, this._crossPosition.y);

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

			if (!this._mouseInView)
				return;

			var userState = this._userState;
			if (userState === UserState.Default) {

				if (button === Key.KEY_MOUSE_LEFT) {

					// START SELECTING
					this._startSelection(x, y);

				} else if (button === Key.KEY_MOUSE_RIGHT) {

					// ISSUE DEFAULT COMMAND
					this.issueCommand();

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

			var surf = this._mainSurface;
			surf.setRect(176, 16, width - 176 - 16, height - 16 - 16);

			this._camera.resize(surf.width, surf.height);
		}

		isEntityInGroup(ent: Entity): boolean {
			return this._groupIds()[ent.id] || false;
		}

		isEntitySelected(ent: Entity): boolean {
			return this._selectedIds()[ent.id] || false;
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

								worldCommand.placementEntity = new Entity(MAX_INT, this._world, plotEntType, this._player());
							}

							this._pendingCommand = worldCommand;
							this.setPage(CommandPage.Targeting);

						} else {

							// INSTANT EXECUTE
							result = player.bufferCommand(worldCommand, selected, null, doQueue);

						}

					}

				}

			} else {
				// !command

				var target = this._hoverTarget() || this._hoverTile;

				if (this._userState === UserState.Targeting) {

					// EXECUTE ON TARGET
					result = player.bufferCommand(this._pendingCommand, selected, target, doQueue);

				} else if (this._userState === UserState.PlacingEntity) {

					// EXECUTE PLACEMENT ON TILE
					target = this._hoverTile;
					result = player.bufferCommand(this._pendingCommand, selected, target, doQueue);

				} else {

					// IE: Right-click (DEFAULT COMMAND FOR EACH ENTITY SELECTED)
					result = player.bufferCommand(WorldCommand.instance, selected, target, doQueue);
				}
				
				if (result.success) {

					// CROSS DURING BUILD SITE PLACEMENT LOOKS WEIRD. PREVENT IT
					if (this._userState !== UserState.PlacingEntity) {

						if (target instanceof Entity) {

							// FLASH ENTITY
							this._flashEntity = <Entity>target;
							this._flashStart = Date.now();

						} else if (target instanceof Tile) {

							// PLAY CROSS SEQUENCE
							this._cross.reset();
							this._crossPosition.set(this._worldMouseCoords);
							this._showCross = true;
						}

					}

					// SET DEFAULT PAGE
					this.setPage(CommandPage.Default);
				}

			}


			if (result.message) {
				console.log(result.message);
				this._notifyMessage(result.message);
				this._notifyTimeout = Date.now() + 3000;
			}

			return result;
		}

		setGroupType(entType: EntityType): void {

			// GET ALL SELECTED ENTITIES OF THE CURRENT TYPE
			var player = this._player();
			var group = _.filter(this._selectedEntities(), function (ent: Entity) {
				return ent.type === entType && ent.getOwner() === player;
			});
			this._group(group);

			// MAP ENTITIES IN GROUP BY ID
			var ids = this._groupIds();
			ids.length = 0;
			for (var i = group.length - 1; i !== -1; --i)
				ids[group[i].id] = true;
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
						var data = AllEntityData[entType];
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
						var data = AllEntityData[entType];
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

				var raw = this._rawSelected();
				
				if (ents.length === 1) {

					var index = raw.indexOf(ents[0]);
					if (index === -1) {
						// ADD SINGLE ENTITY
						raw.push(ents[0]);
					} else {
						// REMOVE SINGLE ENTITY FROM SELECTED
						raw.splice(index, 1);
					}

				} else {

					// PUSH ENTITIES THAT AREN'T ALREADY SELECTED
					for (var i = ents.length - 1; i !== -1; --i) {
						var ent = ents[i];
						if (raw.indexOf(ent) === -1)
							raw.push(ent);
					}

				}

				this._rawSelected.valueHasMutated();
			} else {

				this._rawSelected(ents);

			}

		}

		private _cycleGroup(backwards: boolean): void {

			var oldType = this._groupType;
			var selected = this._selectedEntities();

			var i = backwards ? 0 : selected.length - 1;
			var ii = backwards ? selected.length : -1;
			var inc = i > ii ? -1 : 1;
			while (i !== ii) {
				if (selected[i].type === oldType) {
					
					var nextEnt = selected[i - inc] || selected[ii - inc];
					var nextEntType = nextEnt.type;
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

		private _filterEntities(ents: Entity[]): Entity[] {

			var ret: Entity[] = [];

			var player = this._player();

			var savedEnt: Entity = null;
			for (var i = ents.length - 1; i !== -1; --i) {
				var ent = ents[i];
				if (!ent.isSelectable()) {

					// SKIP UNSELECTABLE ENTITIES
					continue;

				} else if (!ent.isUnit() || ent.getOwner() !== player) {

					// REMOVE STRUCTURES AND ENTITIES NOT OWNED BY THE PLAYER
					savedEnt = ent;
					continue;
				}
				ret.push(ent);
			}

			if (ret.length === 0 && savedEnt) {
				ret.push(savedEnt);
			} else {
				ret.sort(_entitySortFunction);
				if (ret.length > ENTITY_MAX_SELECTION)
					ret.splice(ENTITY_MAX_SELECTION, ret.length - ENTITY_MAX_SELECTION);
			}

			return ret;
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
