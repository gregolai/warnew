/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class Tile {

		private _terrain: Terrain;
		private _id: number;
		private _x: number;
		private _z: number;
		private _position: Vec2;
		
		private _occupiers: Entity[];

		// Set using setTileType
		private _type: TileType;
		private _data: Data.TileData;
		private _cornerFlags: number;
		private _variant: number;
		private _occupyAllowed: number;
		private _atlasIndex: number;
		private _atlasX: number;
		private _atlasY: number;

		get id() { return this._id; }
		get position() { return this._position; }

		get type() { return this._type; }
		get data() { return this._data; }
		get cornerFlags() { return this._cornerFlags; }
		get atlasIndex() { return this._atlasIndex; }
		get atlasX() { return this._atlasX; }
		get atlasY() { return this._atlasY; }

		constructor(terrain: Terrain, id: number, x: number, z: number) {
			this._terrain = terrain;
			this._id = id;
			this._x = x;
			this._z = z;
			this._position = new Vec2(x * TILE_SIZE, z * TILE_SIZE);

			this._occupiers = [];
		}

		dispose(): void {
			this._terrain = null;
			this._occupiers = null;
			this._data = null;
		}

		decode(raw?: number): void {

			if (raw) {
				var tileType = 0xf & (raw >> 0);				// 4 bits
				var cornerFlags = 0xf & (raw >> 4);				// 4 bits
				var variant = 0xf & (raw >> 8);					// 4 bits
				this.setTileType(tileType, cornerFlags, variant);
			} else {
				// Defaults
				this.setTileType(TileType.LightGrass, 15);
			}
		}

		setTileType(tileType: TileType, cornerFlags: number, variant?: number): void {

			var terrainType = this._terrain.terrainType;

			var allData = Data.AllTileData[terrainType];
			if (!allData)
				return;

			var data = allData[tileType];
			if (!data)
				return;

			var variants = data.indices[cornerFlags];
			if (!variants || variants.length === 0)
				return;
			
			if (typeof variant !== "undefined")
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

	}

}