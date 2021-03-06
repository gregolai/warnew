/// <reference path="_include.ts"/>

module Engine.Game {

	export interface EntityParams {
		type: EntityType;
		owner: Player;
		posX: number;
		posY: number;
	}

	export interface EntityContainer {
		type: EntityContainType;
		entity: Entity;
	}

	export class Entity implements IQuadtreeItem, WorldTarget {

		// --- ON CREATE ---
		id: number;
		world: World;
		private _terrain: Terrain;
		type: EntityType;
		private _owner: KnockoutObservable<Player>;
		private _data: EntityData;

		// --- ON INIT ---

		// GENERAL STUFF
		private _spawnState: KnockoutObservable<SpawnState>;
		private _sortOrder: number;

		orderQueue: Order[];
		rallyPoint: WorldTarget;

		// CONTAINER STUFF
		private _builders: KnockoutObservableArray<Entity>;
		private _cargo: KnockoutObservableArray<Entity>;
		private _miners: KnockoutObservableArray<Entity>;

		// ACTION STUFF
		private _action: ActionState;
		private _actionParams: ActionParams;
		private _actionStates: ActionState[];
		private _actionTicks: number;
		
		// SEQUENCE STUFF
		private _direction: Direction;
		private _sequence: Sequence;
		private _sequences: { [name: string]: Sequence; };

		// SPATIAL STUFF
		private _container: KnockoutObservable<Entity>;
		private _drawRect: Rect;
		private _path: Path;
		private _position: Vec2;
		private _selectionRect: Rect;			// update when position changes
		private _tile: KnockoutObservable<Tile>;

		// STAT STUFF
		private _health: KnockoutObservable<number>;
		private _mana: KnockoutObservable<number>;
		private _progress: KnockoutObservable<number>;

		getOwner() { return this._owner(); }
		getSortOrder() { return this._sortOrder; }

		// GET DYNAMIC DATA STATS
		getPosition() { return this._position; }
		getSelectionRect() { return this._selectionRect; }
		getDrawRect() { return this._drawRect; }
		getQTRect() { return this._drawRect; }

		// GET STATIC DATA STATS
		canMove() { return this._data.isUnit && this.isAlive(); }
		canBuild(type: EntityType) { return this._data.builds.indexOf(type) !== -1 && this.isAlive(); }
		hasWeapon() { return this._data.hasWeapon && this.isAlive(); }
		getIconID() { return this._data.iconId; }
		isAlive() { return this._spawnState() === SpawnState.Alive; }
		isBeingBuilt() { return this._spawnState() === SpawnState.Constructing; }
		isDead() { return this._spawnState() === SpawnState.Dead; }
		isSelectable() { return this._data.selectable && (this.isAlive() || this.isBeingBuilt()) && !this._container(); }
		isStructure() { return this._data.isStructure; }
		isUnit() { return this._data.isUnit; }
		getAbilities() { return this._data.abilities; }
		getBuilderCapacity() { return 1; }
		getCargoCapacity() { return this._data.cargoCapacity; }
		getContainer() { return this._container(); }
		getMana() { return this._mana(); }
		getMinerCapacity() { return 9999; }
		getMoveSpeed() { return this._data.moveSpeed; }
		getName() { return this._data.name; }
		getOccupyFlags() { return this._data.occupyFlags; }
		getPriority() { return this._data.priority; }
		getRootEntity() { var e = this, p = this; while (e = e._container()) { p = e; } return p; }
		getSight() { return this._data.sight; }
		getStructuresBuilt() { return this._data.builds; }
		getTile() { return this._tile() || null; }
		getTilesWide() { return this._data.tilesWide || 1; }
		getTilesHigh() { return this._data.tilesHigh || 1; }
		getTooltip() { return this._data.tooltip; }
		getTooltipExtended() { return this._data.tooltipExtended; }
		getUnitsTrained() { return this._data.unitsTrained; }
		trainsUnits() { return this._data.unitsTrained.length > 0; }

		// GET COMPUTED DATA STATS
		getArmor() { return this._data.armorBase; }
		getDamageMin() { return this._data.weaponDamageBase; }
		getDamageMax() { return this._data.weaponDamageBase + this._data.weaponDamageRandom; }
		getHealth() { return this._health(); }
		getHealthMax() { return this._data.healthMax; }

		constructor(id: number, world: World, type: EntityType, owner: Player) {

			var self = this;

			this.id = id;
			this.world = world;
			this._terrain = world.getTerrain();
			this.type = type;
			this._owner = ko.observable(owner);
			this._data = AllEntityData[type] || AllEntityData[EntityType.None];

			// GENERAL STUFF
			this._spawnState = ko.observable(SpawnState.None);
			this._sortOrder = 0;

			this.orderQueue = [];
			this.rallyPoint = null;

			// CONTAINER STUFF
			this._builders = ko.observableArray<Entity>();
			this._cargo = ko.observableArray<Entity>();
			this._miners = ko.observableArray<Entity>();

			// ACTION STUFF
			this._actionTicks = 0;
			this._actionParams = null;
			this._action = null;
			this._actionStates = [];
			this._initActionStates();

			// SEQUENCE STUFF
			this._direction = Direction.Down;
			this._sequence = null;
			this._sequences = {};
			this._initSequences();

			// SPATIAL STUFF
			this._container = ko.observable<Entity>()
			this._drawRect = null;
			this._path = null;
			this._position = null;
			this._selectionRect = null;
			this._tile = ko.observable<Tile>();
			
			// STAT STUFF
			this._health = ko.observable<number>();
			this._mana = ko.observable<number>();
			this._progress = ko.observable<number>();
		}
		dispose(): void {

			//this._id
			this.world = null;
			//this._type
			this._owner = null;
			this._data = null;
			this._spawnState = null;
			//this._sortOrder

			this._position = null;
			this._selectionRect = null;
			this._drawRect = null;

			this.orderQueue = null;

			//this._actionTicks
			this._actionParams = null;
			this._action = null;
			this._actionStates = null;

			//this._direction
			this._sequence = null;
			this._sequences = null;

			this._tile(null);
			this._container(null);

			this._path = null;

			this._builders = null;
			this._cargo = null;
			this._miners = null;

			this._mana = null;
			this._health = null;
			this._progress = null;
		}

		tryLoad(loader: Encoder): boolean;
		tryLoad(builder: Entity, tile: Tile): boolean;
		tryLoad(a: any, tile?: Tile): boolean {

			// VERIFY DATA EXISTS
			var data = this._data;
			if (!data) {
				return false;
			}

			// SORT SIMILAR TYPES TOGETHER
			this._sortOrder = (((data.pointValue >> 4) & 0x7) << 20)			// 4 bits (pointValue divided by 16)
								| (this.type << 19)								// 8 bits
								| (this.id << 0);								// 19 bits

			// INIT START
			{
				var self = this;
				var boxWidth = data.isUnit ? data.boxWidth : data.tilesWide * TILE_SIZE;
				var boxHeight = data.isUnit ? data.boxHeight : data.tilesHigh * TILE_SIZE;

				// GENERAL STUFF
				koSubscribeChanged(this._spawnState, function (p: SpawnState, n: SpawnState) { WorldEvent.Entity.spawnState.trigger(self, p, n); }, true);

				// CONTAINER STUFF

				// ACTION STUFF

				// SEQUENCE STUFF
				this._direction = Direction.Down;


				// SPATIAL STUFF
				koSubscribeChanged(this._container, function (p: Entity, n: Entity) { WorldEvent.Entity.container.trigger(self, p, n); }, true);
				this._drawRect = new Rect();
				this._position = new Vec2();
				this._selectionRect = new Rect(0, 0, boxWidth, boxHeight);
				koSubscribeChanged(this._tile, function (p: Tile, n: Tile) { WorldEvent.Entity.tile.trigger(self, p, n); }, true);
				
				// STAT STUFF
				koSubscribeChanged(this._health, function (p: number, n: number) { WorldEvent.Entity.health.trigger(self, p, n); }, true);
				koSubscribeChanged(this._mana, function (p: number, n: number) { WorldEvent.Entity.mana.trigger(self, p, n); }, true);
			}

			if (a instanceof Encoder) {

				return this._initFromLoader(<Encoder>a);

			} else if (a instanceof Entity) {

				return this._initFromBuilder(<Entity>a, tile);

			} else {

				return false;
			}

		}

		private _initFromLoader(loader: Encoder): boolean {

			var tileID = loader.popInt();

			var health = loader.popInt();
			var mana = loader.popInt();
			var spawnState = loader.popInt();
			var goldContained = loader.popInt();

			var posX = loader.popInt();
			var posY = loader.popInt();

			this._spawnState(spawnState);
			this.trySetTile(this._terrain.getTileById(tileID), false);
			this._health(health);
			this._mana(mana);
			//goldContained
				
			this._setPosition(posX, posY);
			this._setSequence("idle");

			return true;
		}

		private _initFromBuilder(builder: Entity, tile: Tile): boolean {

			this._spawnState(SpawnState.Constructing);

			var res = builder.trySetEntityContainer(this, EntityContainType.Builder);
			if (!res)
				return false;

			var res = this.trySetTile(tile, true);
			if (!res)
				return false;

			this._health(1);
			this._mana(0);

			// SET ACTION STATE
			var endTick = this._data.buildTime;
			var healthPerTick = Math.ceil(this._data.healthMax / endTick);
			var seqInterval = endTick >> 2;
			this._setActionState({
				type: ActionType.BeingConstructed,
				endTick: endTick,

				buildTile: tile,
				builder: builder,
				healthPerTick: healthPerTick,
				sequenceIndex: 0,
				sequenceIncreaseTicks: [seqInterval, seqInterval * 2, seqInterval * 3]
			});

			return true;
		}

		draw(ctx: CanvasRenderingContext2D): void {

			this._sequence.drawAtCenter(ctx, this._position.x, this._position.y);
		}

		drawPlacement(ctx: CanvasRenderingContext2D, tileX: number, tileY: number): void {

			ctx.globalAlpha = 0.7;
			{
				// DRAW IDLE IMAGE
				var idleSeq = this._sequences["idle"];
				if (idleSeq)
					idleSeq.drawAtCorner(ctx, tileX * TILE_SIZE, tileY * TILE_SIZE);

				ctx.globalAlpha = 0.3;

				// GET PLACEMENT RESULT
				var result = this.placementTest(tileX, tileY, PlacementTestFlag.ValidTiles | PlacementTestFlag.InvalidTiles, this._owner(), null);

				// DRAW VALID TILES
				ctx.fillStyle = "#0f0";
				var tiles = result.validTiles;
				for (var t = tiles.length - 1; t !== -1; --t) {
					var p = tiles[t].topLeft;
					ctx.fillRect(p.x, p.y, TILE_SIZE, TILE_SIZE);
				}

				// DRAW INVALID TILES
				ctx.fillStyle = "#f00";
				tiles = result.invalidTiles;
				for (var t = tiles.length - 1; t !== -1; --t) {
					var p = tiles[t].topLeft;
					ctx.fillRect(p.x, p.y, TILE_SIZE, TILE_SIZE);
				}
			}
			ctx.globalAlpha = 1;
		}

		
		distanceToEntity(ent: Entity): number {
			if (ent) {
				var e0 = this.getRootEntity();
				var t0 = e0.getTile();
				if (t0) {
					var e1 = ent.getRootEntity();
					var t1 = e1.getTile();
					if (t1) {
						return Pathfinder.diagDistance(
							t0.x, t0.y, e0.getTilesWide(), e0.getTilesHigh(),
							t1.x, t1.y, e1.getTilesWide(), e1.getTilesHigh()
						);
					}
				}
			}
			return MAX_INT;
		}

		distanceToRegion(rgn: TileRegion): number {
			if (rgn) {
				var e0 = this.getRootEntity();
				var t0 = e0.getTile();
				if (t0) {
					return Pathfinder.diagDistance(
						t0.x, t0.y, e0.getTilesWide(), e0.getTilesHigh(),
						rgn.x, rgn.y, rgn.width, rgn.height
					);
				}
			}
			return MAX_INT;
		}
		/*
		distanceToTile(tile: Tile): number {
			if (tile) {
				var ent = this.getRootEntity();
				var onTile = ent.getTile();
				if (onTile)
					return Pathfinder.distance(onTile.x, onTile.y, ent.getTilesWide(), ent.getTilesHigh(), tile.x, tile.y, 1, 1);
			}
			return MAX_INT;
		}

		*/

		getPathHeuristic(type: PathType, weight: number): (fromTile: Tile) => number {

			// GET ROOT ENTITY OF CONTAINER CHAIN
			var ent = this.getRootEntity();
			var onTile = ent.getTile();
			if (!onTile)
				return null;

			// GET ADJACENT AREA
			var x = onTile.x - 1;
			var y = onTile.y - 1;
			var width = ent.getTilesWide() + 1;
			var height = ent.getTilesHigh() + 1;

			if (type === PathType.ToTarget) {
				// MOVE TOWARDS TARGET
				return function (fromTile: Tile): number {
					return weight * Pathfinder.diagDistance(fromTile.x, fromTile.y, 1, 1, x, y, width, height);
				}

			} else if (type === PathType.AvoidTarget) {
				// AVOID TARGET
				var LARGE_NUMBER = (MAX_INT >> 1);
				return function (fromTile: Tile): number {
					return LARGE_NUMBER - weight * Pathfinder.diagDistance(fromTile.x, fromTile.y, 1, 1, x, y, width, height);
				}
			}

			return null;
		}

		placementTest(tileX: number, tileY: number, retFlags: number, ignorePlayerUnits?: Player, ignoreEntity?: Entity): PlacementTestResult {

			var valid = true;
			var ret: PlacementTestResult = { valid: true };

			// RETURN A MESSAGE
			if ((PlacementTestFlag.Message & retFlags) !== 0)
				ret.message = "Success";

			// RETURN VALID TILES
			if ((PlacementTestFlag.ValidTiles & retFlags) !== 0)
				ret.validTiles = [];

			// RETURN INVALID TILES
			if ((PlacementTestFlag.InvalidTiles & retFlags) !== 0)
				ret.invalidTiles = [];

			// RETURN BLOCKING ENTITIES
			if ((PlacementTestFlag.BlockingEntities & retFlags) !== 0)
				ret.blockingEntities = [];

			// IGNORE OTHER OWNER UNITS
			ret.ignorePlayerUnits = ignorePlayerUnits;

			// IGNORE A SPECIFIC ENTITY (BUILDER)
			ret.ignoreEnt = ignoreEntity;

			var tw = this.getTilesWide();
			var th = this.getTilesHigh();
			if (tw > 1 || th > 1) {

				// MULTI-TILE ENTITY
				var tiles = this._terrain.getTilesWithinIndex(tileX, tileY, tw, th);
				if (tiles.length !== tw * th) {
					ret.valid = false;
					if (ret.message)
						ret.message = "Cannot place outside of world bounds.";
				}

				for (var i = tiles.length - 1; i !== -1; --i)
					this._placementTestSingle(tiles[i], ret);

			} else {

				// SINGLE TILE ENTITY
				var tile = this._terrain.getTileAtIndex(tileX, tileY, false);
				if (!tile) {
					ret.valid = false;
					if (ret.message)
						ret.message = "Cannot place outside of world bounds.";
				} else {
					this._placementTestSingle(tile, ret);
				}
			}

			return ret;
		}
		private _placementTestSingle(tile: Tile, ret: PlacementTestResult): void {
			if (tile.canOccupy(this, ret)) {
				if (ret.validTiles)
					ret.validTiles.push(tile);
			} else {
				ret.valid = false;
				if (ret.invalidTiles)
					ret.invalidTiles.push(tile);
			}
		}

		removeEntity(entity: Entity): void {
			var lists: KnockoutObservableArray<Entity>[] = [this._builders, this._cargo, this._miners];
			for (var i = lists.length - 1; i !== -1; --i) {
				var list = lists[i]();
				var index = list.indexOf(entity);
				if (index !== -1) {
					list.splice(index, 1);
					lists[i](list);
				}
			}
		}

		think(): void {

			var queue = this.orderQueue;
			if (queue.length !== 0) {

				var result = queue[0].think();
				if (result === ThinkResult.Done || (result === ThinkResult.DoneIfQueue && queue.length > 1)) {

					// REMOVE COMPLETED ORDER AND THINK AGAIN
					queue.shift();
					this.think();
				}

			} else {
				this.wait(60);
			}

		}

		// START THE MOVE SEQUENCE.
		// SUCCESS IF MOVED
		tryMove(target: WorldPathTarget, pathType: PathType, maxIterations?: number): boolean {

			if (!this.isUnit() || !this.isAlive())
				return false;

			var curTile = this._tile();
			if (!curTile)
				return false;

			var recalculated = false;
			var path = this._path;
			if (!path || path.target !== target) {

				path = this._path = Pathfinder.getPath(this, target, pathType, maxIterations);
				recalculated = true;

				if (!path)
					return false;
			}

			var nextTile = path.peek();
			if (!nextTile || !this.trySetTile(nextTile, false)) {

				if (recalculated)
					return false;

				path = this._path = Pathfinder.getPath(this, target, pathType, maxIterations);
				recalculated = true;

				nextTile = path ? path.peek() : null;
				if (!nextTile || !this.trySetTile(nextTile, false))
					return false;
			}
			
			// POP FROM PATH
			path.pop();

			// GET DELTA X AND DELTA Y
			var dx = nextTile.x - curTile.x;
			var dy = nextTile.y - curTile.y;

			// SET MOVE ACTION
			var dir = (dx < 0 ? Direction.Left : (dx > 0 ? Direction.Right : 0))
					| (dy < 0 ? Direction.Up : (dy > 0 ? Direction.Down : 0));
			var moveDelta = Math.max(this.getMoveSpeed() * ENTITY_MOVE_SPEED_MULTIPLIER, 0.0001);
			
			this._setActionState({
				type: ActionType.Moving,
				direction: dir,

				moveStepX: dx * moveDelta,
				moveStepY: dy * moveDelta,
				moveEndX: nextTile.center.x,
				moveEndY: nextTile.center.y,

				endTick: Math.max(Math.floor(TILE_SIZE / moveDelta), 1)
			});

			return true;
		}

		// ACCESSIBLE FROM Entity
		_tryOccupy(entity: Entity, type: EntityContainType): boolean {

			if (!entity || entity === this)
				return false;

			if (type === EntityContainType.Builder) {

				var ents = this._builders();
				if (this.isBeingBuilt() && ents.length < this.getBuilderCapacity()) {
					ents.push(entity);
					this._builders.valueHasMutated();
					return true;
				}

			} else if (type === EntityContainType.Cargo) {

				var ents = this._cargo();
				if (this.isAlive() && ents.length < this.getCargoCapacity()) {
					ents.push(entity);
					this._cargo.valueHasMutated();
					return true;
				}

			} else if (type === EntityContainType.Miner) {

				var ents = this._miners();
				if (this.isAlive() && ents.length < this.getMinerCapacity()) {
					ents.push(entity);
					this._miners.valueHasMutated();
					return true;
				}

			}
			return false;
		}

		trySetEntityContainer(entity: Entity, type: EntityContainType): boolean {

			var success = entity && entity._tryOccupy(this, type);
			if (success) {

				// REMOVE FROM PREVIOUS TILE
				var oldTile = this._tile();
				if (oldTile) {
					oldTile.removeEntity(this);
					this._tile(null);
				}

				//REMOVE FROM PREVIOUS CONTAINER
				var oldEntity = this._container();
				if (oldEntity) {
					oldEntity.removeEntity(this);
				}

				// SET NEW CONTAINER
				this._container(entity);
			}
			return success;

		}

		trySetTile(tile: Tile, updatePosition: boolean): boolean {

			if (!tile)
				return false;

			var tw = this.getTilesWide();
			var th = this.getTilesHigh();
			if (tw > 1 || th > 1) {

				// TEST NEW TILES (OLD WAY - REPLACE WITH placementTest)
				var result = this.placementTest(tile.x, tile.y, PlacementTestFlag.ValidTiles, null, null);
				if (!result.valid)
					return false;

				// REMOVE OLD TILES
				var oldTile = this._tile();
				if (oldTile) {
					var oldTiles = this._terrain.getTilesWithinIndex(oldTile.x, oldTile.y, tw, th);
					for (var i = oldTiles.length - 1; i !== -1; --i)
						oldTiles[i].removeEntity(this);
				}

				//REMOVE FROM PREVIOUS CONTAINER
				var oldEntity = this._container();
				if (oldEntity) {
					oldEntity.removeEntity(this);
					this._container(null);
				}

				// OCCUPY NEW TILES
				var newTiles = result.validTiles;
				for (var i = newTiles.length - 1; i !== -1; --i)
					newTiles[i]._tryOccupy(this);

				// UPDATE ENTITY POS TO BE CENTER OF TILE AREA
				if (updatePosition)
					this._setPosition(tile.topLeft.x + tw * TILE_SIZE / 2, tile.topLeft.y + th * TILE_SIZE / 2);

			} else {

				// TEST NEW TILE
				var result = this.placementTest(tile.x, tile.y, 0, null, null);
				if (!result.valid)
					return false;

				// REMOVE FROM PREVIOUS TILE
				var oldTile = this._tile();
				if (oldTile) {
					oldTile.removeEntity(this);
				}

				//REMOVE FROM PREVIOUS CONTAINER
				var oldEntity = this._container();
				if (oldEntity) {
					oldEntity.removeEntity(this);
					this._container(null);
				}

				// OCCUPY NEW TILE
				tile._tryOccupy(this);

				// UPDATE ENTITY POS TO BE CENTER OF TILE
				if (updatePosition)
					this._setPosition(tile.center.x, tile.center.y);
			}

			// SET NEW TILE
			this._tile(tile);

			return true;
		}

		update(): void {

			var curAction = this._action;
			if (curAction) {
				
				if (curAction.tick(++this._actionTicks, this._actionParams)) {
					
					if (this._actionParams.onActionComplete) {
						this._actionParams.onActionComplete();
					}
					curAction = this._action = null;
				}
			}

			if (!curAction) {
				this.think();
			}

			this._sequence.update();
		}

		wait(ticks: number): void {

			this._setActionState({
				type: ActionType.Waiting,
				endTick: ticks
			});

		}

		private _initActionStates(): void {

			var self = this;
			this._actionStates[ActionType.Waiting] = {
				sequenceName: "idle",
				tick: function (actionTicks: number, actionParams: ActionParams) {

					return actionTicks >= actionParams.endTick
						|| self.orderQueue[0] !== actionParams.order
						|| self.orderQueue.length !== actionParams.orderQueueLength;
				}
			};

			this._actionStates[ActionType.Moving] = {
				sequenceName: "move",
				tick: function (actionTicks: number, actionParams: ActionParams) {
					
					// MOVE TICK
					if (actionTicks >= actionParams.endTick) {

						// END MOVE
						self._setPosition(actionParams.moveEndX, actionParams.moveEndY);
						return true;

					} else {

						// KEEP MOVING
						self._setPosition(self._position.x + actionParams.moveStepX, self._position.y + actionParams.moveStepY);
						return false;
					}
					
				}
			};

			this._actionStates[ActionType.Attacking] = {
				sequenceName: "attack",
				tick: function (actionTicks: number, actionParams: ActionParams) {

					if (actionTicks === actionParams.endTick) {
						console.log("END ATTACK");
						return true;

					} else if (actionTicks === actionParams.swingTick) {
						console.log("SWING");
						//this.fireWeapon(targetEntity);
						//this._acquiredEnemy.applyDamage();
					}

					return false;
				}
			};

			this._actionStates[ActionType.BeingConstructed] = {
				sequenceName: "construction_site",
				tick: function(actionTicks: number, actionParams: ActionParams) {

					// CHECK IF SEQUENCE NEEDS TO BE INCREMENTED
					var index = actionParams.sequenceIndex;
					var nextSeqTick = actionParams.sequenceIncreaseTicks[index];
					if (actionTicks === nextSeqTick) {

						if (index === 0 || index === 2)
							// SET SECOND FRAME OF CONSTRUCTION-SITE OR CONSTRUCTION SEQUENCE
							self._sequence.incrementFrame();
						else if (index === 1)
							// SET SEQUENCE TO CONSTRUCTION (FIRST FRAME);
							self._setSequence("construction");

						++actionParams.sequenceIndex;
					}

					// UPDATE HEALTH
					var oldHealth = self._health();
					var newHealth = Math.min(oldHealth + actionParams.healthPerTick, self.getHealthMax());
					if (oldHealth !== newHealth) {
						self._health(newHealth);
					}

					// UPDATE PROGRESS
					self._progress(actionTicks / actionParams.endTick);

					// IF ACTION IS COMPLETE
					if (actionTicks === actionParams.endTick) {

						console.log("CONSTRUCTION COMPLETE!");

						/*
						// REMOVE BUILDER FROM STRUCTURE
						var builder = actionParams.builder;
						self._builder = null;

						var buildTile = actionParams.buildTile;
						var tx = buildTile.x;
						var ty = buildTile.y;
						var tw = self.getTilesWide();
						var th = self.getTilesHigh();

						// FIND TILE TO PLACE BUILDER
						self._terrain.forEachTileWithinDistance(tx, ty, tw, th, 100, function (tile: Tile) {
							return builder.place(tile);
						});

						self._spawnState === SpawnState.Spawned;
						*/
						return true;
					}

					return false
				}
			};

		}

		private _initSequences(): void {

			var obj = this._data.sequences;
			var names = ["attack", "construction", "construction_site", "idle", "move"];
			var playerID = this._owner().getID();
			for (var i = 0, ii = names.length; i < ii; ++i) {

				var name = names[i];
				var seqData = <AnimationSequenceData>obj[name];
				if (seqData) {

					this._sequences[name] = new Sequence({
						type: seqData.type || obj.type,
						image: ImageCache.getImage(seqData.imageID || obj.imageID, playerID),
						frameWidth: seqData.frameWidth || obj.frameWidth,
						frameHeight: seqData.frameHeight || obj.frameHeight,
						frames: seqData.frames,
						frameTick: seqData.frameTick
					});
				}

			}
		}

		private _setActionState(params: ActionParams): void {
			console.log("set action state");
			var actionState = this._actionStates[params.type];
			if (actionState) {
				params.order = this.orderQueue[0];
				params.orderQueueLength = this.orderQueue.length;

				this._actionTicks = 0;
				this._actionParams = params;
				this._action = actionState;
				this._setSequence(actionState.sequenceName, params.direction);
			}

		}

		private _setSequence(sequenceName: string, direction?: Direction): void {

			var sequence = this._sequences[sequenceName];
			if (!sequence)
				sequence = this._sequences["idle"];


			if (sequence !== this._sequence) {
				sequence.reset();
				this._sequence = sequence;

				// UPDATE DRAW RECT TO FIT FRAME
				var dr = this._drawRect;
				if (dr) {
					dr.x = this._position.x - (sequence.frameWidth >> 1);
					dr.y = this._position.y - (sequence.frameHeight >> 1);
					dr.width = sequence.frameWidth;
					dr.height = sequence.frameHeight;
				}
					
			}

			if (direction)
				this._direction = direction;
			sequence.setDirection(this._direction);

		}

		// CALLED AFTER SETTING POSITION
		private _setPosition(x: number, y: number): void {

			// POSITION CHANGES
			this._position.x = x;
			this._position.y = y;

			// SELECTION RECT CHANGES
			var sr = this._selectionRect;
			sr.x = x - (sr.width >> 1);
			sr.y = y - (sr.height >> 1);

			// DRAW RECT CHANGES
			var dr = this._drawRect;
			dr.x = x - (dr.width >> 1);
			dr.y = y - (dr.height >> 1);

			// UPDATE WORLD QUADTREE
			this.world.getQuadtree().update(this);
		}
	}

}