/// <reference path="_include.ts"/>

module Engine.Game {

	export class Tile implements WorldTarget {

		// TERRAIN PATH - USED BY PATHFINDER
		__pathID: number;
		__pathG: number;
		__pathH: number;
		__pathF: number;
		__pathOpen: boolean;
		__pathClosed: boolean;
		__pathParent: Tile;
		__resetPath(pathID: number): void {
			this.__pathID = pathID;
			this.__pathG = 0;
			this.__pathH = 0;
			this.__pathF = 0;
			this.__pathOpen = false;
			this.__pathClosed = false;
			this.__pathParent = null;
		}

		private _terrain: Terrain;
		id: number;
		x: number;
		y: number;
		topLeft: Vec2;
		center: Vec2;
		neighbors: Tile[];
		
		private _occupiers: Entity[];

		// Special flag counters
		private _specialFlags: number[];

		// Set using setTileType
		private _type: TileType;
		private _data: TileData;
		private _cornerFlags: number;
		private _variant: number;
		private _occupyAllowed: number;

		// USED WHEN UPDATING TILE, AND FOR DRAWING
		_atlasIndex: number;
		_atlasX: number;
		_atlasY: number;

		getType() { return this._type; }
		getData() { return this._data; }
		getCornerFlags() { return this._cornerFlags; }

		constructor(terrain: Terrain, id: number, x: number, y: number) {
			this._terrain = terrain;
			this.id = id;
			this.x = x;
			this.y = y;
			this.topLeft = new Vec2(x * TILE_SIZE, y * TILE_SIZE);
			this.center = this.topLeft.clone().add(TILE_SIZE >> 1, TILE_SIZE >> 1);

			this._occupiers = [];

			this._specialFlags = [];
		}
		dispose(): void {
			this._terrain = null;
			this._occupiers = null;
			this._data = null;
		}

		init(neighbors: Tile[], loader?: Encoder): void {

			this.neighbors = neighbors;

			if (loader) {
				//var tileType = 0xf & (raw >> 0);				// 4 bits
				//var cornerFlags = 0xf & (raw >> 4);				// 4 bits
				//var variant = 0xf & (raw >> 8);					// 4 bits
				this.setTileType(loader.popInt(), loader.popInt(), loader.popInt());
			} else {
				// Defaults
				this.setTileType(TileType.LightGrass, 15);
			}
		}
		/*
		canOccupy(entity: Entity): boolean {

			if (!entity)
				return false;

			var entFlags = entity.getOccupyFlags();

			// TEST IF ENTITY CAN OCCUPY TILE TYPE
			if ((entFlags & this._occupyAllowed) !== entFlags)
				return false;

			// TEST IF ALREADY OCCUPIED - ANY OVERLAP IN FLAGS IS INVALID
			var occupiers = this._occupiers;
			for (var c = 0, cc = occupiers.length; c < cc; ++c) {
				var occupier = occupiers[c];
				if (occupier !== entity && (entFlags & occupier.getOccupyFlags()) !== 0)
					return false;
			}

			return true;
		}
		*/

		// SECOND PARAMETER WORKS IN CONJUNCTION WITH Entity.placementTest
		canOccupy(ent: Entity, ret?: PlacementTestResult): boolean {

			if (!ent)
				return false;

			var eflags = ent.getOccupyFlags();

			// TEST IF ENTITY CAN OCCUPY TILE TYPE
			if ((eflags & this._occupyAllowed) !== eflags) {

				if (ret && ret.message)
					ret.message = "Cannot place there.";
				return false;
			}

			var valid = true;
			var occupiers = this._occupiers;
			for (var i = occupiers.length - 1; i != -1; --i) {
				var occ = occupiers[i];

				// SKIP SELF
				if (ent === occ)
					continue;

				// IGNORE THE BUILDER OF CONSTRUCTION SITE
				if (ret && ret.ignoreEnt && occ === ret.ignoreEnt)
					continue;
				
				// PLAYER'S UNITS WILL MOVE FROM CONSTRUCTION SITE
				if (ret && ret.ignorePlayerUnits && occ.getOwner() == ret.ignorePlayerUnits && occ.isUnit())
					continue;

				// IF FLAGS INTERSECT
				if ((eflags & occ.getOccupyFlags()) !== 0) {
					valid = false;
					if (ret) {
						if (ret.message)
							ret.message = "Invalid placement.";
						if(ret.blockingEntities && ret.blockingEntities.indexOf(occ) === -1)
							ret.blockingEntities.push(occ);
					}
				}

			}
			return valid;
		}

		getPathHeuristic(type: PathType, weight: number): (fromTile: Tile) => number {

			var x = this.x;
			var y = this.y;
			if (type === PathType.ToTarget) {
				// TOWARDS TILE
				return function (fromTile: Tile) {
					return weight * Math.max(Math.abs(x - fromTile.x), Math.abs(y - fromTile.y));
				};
			} else if (type === PathType.AvoidTarget) {
				// AVOID TILE
				var LARGE_NUMBER = (MAX_INT >> 1);
				return function (tile: Tile) {
					return LARGE_NUMBER - weight * Math.max(Math.abs(x - tile.x), Math.abs(y - tile.y));
				};
			}

			return null;
		}

		removeEntity(entity: Entity): void {
			var index = this._occupiers.indexOf(entity);
			if (index !== -1) {
				this._occupiers.splice(index, 1);
			}
		}

		// SPECIAL FLAGS
		addSpecialFlag(flag: TileSpecialFlag): void {
			var sf = this._specialFlags[flag];
			this._specialFlags[flag] = (sf ? sf + 1 : 1);
		}
		removeSpecialFlag(flag: TileSpecialFlag): void {
			var sf = this._specialFlags[flag];
			this._specialFlags[flag] = (sf ? sf - 1 : 0);
		}
		hasSpecialFlag(flag: TileSpecialFlag): boolean {
			return this._specialFlags[flag] ? true : false;
		}
		
		setTileType(tileType: TileType, cornerFlags: number, variant?: number): void {

			var terrainType = this._terrain.getTerrainType();

			var allData = AllTileData[terrainType];
			if (!allData)
				return;

			var data = allData[tileType];
			if (!data)
				return;

			var variants = data.indices[cornerFlags];
			if (!variants || variants.length === 0)
				return;
			
			if (variant !== undefined)
				variant = MathUtil.clamp(variant, 0, variants.length - 1);
			else
				variant = Random.integer(0, variants.length);

			this._data = data;
			this._atlasIndex = variants[variant];
			this._type = tileType;
			this._cornerFlags = cornerFlags;
			this._variant = variant;
			this._atlasX = (this._atlasIndex % TILE_ATLAS_TILES_WIDE) * TILE_ATLAS_TILE_SIZE;
			this._atlasY = Math.floor(this._atlasIndex / TILE_ATLAS_TILES_WIDE) * TILE_ATLAS_TILE_SIZE;

			// RECALCULATE OCCUPY FLAGS
			var occupyAllowed = 0;
			switch (tileType) {
				case TileType.LightWater:
				case TileType.DarkWater:
					occupyAllowed = Occupy.Sea | Occupy.Air;
					break;
				case TileType.LightDirt:
					occupyAllowed = Occupy.Air | (cornerFlags === 15 ? Occupy.LandUnit : 0);
					break;
				case TileType.DarkDirt:
					occupyAllowed = Occupy.LandUnit | Occupy.Air;
					break;
				case TileType.LightGrass:
					occupyAllowed = Occupy.LandUnit | Occupy.Air | (cornerFlags === 15 ? Occupy.LandStructure : 0);
					break;
				case TileType.DarkGrass:
					occupyAllowed = Occupy.LandUnit | Occupy.Air | Occupy.LandStructure;
					break;
				case TileType.Tree:
				case TileType.Rock:
				case TileType.HumanWall:
				case TileType.OrcWall:
				case TileType.HumanWallDamaged:
				case TileType.OrcWallDamaged:
					occupyAllowed = Occupy.Air;
					break;
				case TileType.WallDestroyed:
					occupyAllowed = Occupy.LandUnit | Occupy.Air;
					break;
			}
			this._occupyAllowed = occupyAllowed;

			/*
			// DESTROY INVALID OCCUPIERS
			var occupiers = this._occupiers;
			for (var e = occupiers.length - 1; e !== -1; --e) {
				var entity = occupiers[e];
				occupiers.splice(e, 1);
				if (this.canOccupy(entity)) {
					occupiers.push(entity);
				} else {
					occupiers.push(entity);
					entity.die(false);
				}
			}
			*/

			this._terrain.onTileTypeSet(this);
		}

		// ACCESSIBLE FROM Entity
		_tryOccupy(entity: Entity): boolean {

			if (entity && !this.canOccupy(entity)) {
				return false;
			}

			this.removeEntity(entity);
			this._occupiers.push(entity);
			return true;
		}

	}

}