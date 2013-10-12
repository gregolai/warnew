/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class Terrain {

		private _mesh: TerrainMesh;
		
		// DECODED
		private _terrainType: string;
		private _tilesWide: number;
		private _tilesDeep: number;
		private _unitsWide: number;
		private _unitsDeep: number;
		private _tiles: Tile[];

		get mesh() { return this._mesh.mesh; }

		get terrainType() { return this._terrainType; }
		get tileCount() { return this._tilesWide * this._tilesDeep; }
		get tilesWide() { return this._tilesWide; }
		get tilesDeep() { return this._tilesDeep; }
		get unitsWide() { return this._unitsWide; }
		get unitsDeep() { return this._unitsDeep; }

		set something(value: number) { }
		get something() { return this._tilesWide; }

		constructor() {
		}

		dispose(): void {
			var tiles = this._tiles;
			for (var i = 0, ii = tiles.length; i < ii; ++i) {
				tiles[i].dispose();
			}
			this._tiles = null;

			this._mesh.dispose();
		}

		decode(raw?: RawTerrainData): void {

			var terrainType = this._terrainType = raw ? raw.type : "forest";
			var tilesWide = this._tilesWide = raw ? raw.width : 32;
			var tilesDeep = this._tilesDeep = raw ? raw.height : 32;

			this._unitsWide = tilesWide * TILE_SIZE;
			this._unitsDeep = tilesDeep * TILE_SIZE;

			this._mesh = new TerrainMesh(tilesWide, tilesDeep);

			// CREATE THE TILES
			var id = -1;
			var tiles = this._tiles = [];
			for (var z = 0; z < tilesDeep; ++z) {
				for (var x = 0; x < tilesWide; ++x) {
					var tile = new Tile(this, ++id, x, z);
					tiles.push(tile);
				}
			}

			// DECODE RAW TILE DATA
			var rawTiles = raw ? raw.tiles : [];
			for (var i = 0, ii = tiles.length; i < ii; ++i) {
				tiles[i].decode(rawTiles[i]);
			}
		}

		onTileTypeSet(tile: Tile): void {
			this._mesh.updateTile(tile);
		}

		getTileById(id: number): Tile {
			return this._tiles[id] || null;
		}

		getTileAtPoint(worldPoint: Vec2, clamp: boolean): Tile {
			return this.getTileAtIndex(Math.floor(worldPoint.x * TILE_INV_SIZE), Math.floor(worldPoint.y * TILE_INV_SIZE), clamp);
		}

		getTileAtIndex(ix: number, iy: number, clamp: boolean): Tile {
			if (clamp) {
				ix = MathUtil.clamp(ix, 0, this._tilesWide - 1);
				iy = MathUtil.clamp(iy, 0, this._tilesDeep - 1);
			} else if (ix < 0 || iy < 0 || ix >= this._tilesWide || iy >= this._tilesDeep) {
				return null;
			}
			return this._tiles[ix + this._tilesWide * iy];
		}

		getTilesWithinIndex(tileX: number, tileY: number, tilesWide: number, tilesHigh: number): Tile[] {
			var sx = MathUtil.clamp(tileX, 0, this._tilesWide - 1);
			var sy = MathUtil.clamp(tileY, 0, this._tilesDeep - 1);
			var ex = MathUtil.clamp(tileX + tilesWide, 0, this._tilesWide);
			var ey = MathUtil.clamp(tileY + tilesHigh, 0, this._tilesDeep);

			var ret: Tile[] = [];
			var tiles = this._tiles;
			for (var y = sy; y < ey; ++y) {
				for (var x = sx; x < ex; ++x)
					ret.push(tiles[x + this._tilesWide * y]);
			}
			return ret;
		}

		draw(ctx: CanvasRenderingContext2D, bounds: Rect, drawGrid = false, drawTileNumbers = false, drawPath = false): void {

			var left = Math.max(bounds.x, 0);
			var top = Math.max(bounds.y, 0);
			var right = Math.min(left + bounds.width, this._unitsWide);
			var bottom = Math.min(top + bounds.height, this._unitsDeep);

			var tilesWide = this._tilesWide;
			var tilesDeep = this._tilesDeep;

			var sx = Math.max(Math.floor(left * TILE_INV_SIZE), 0);
			var sy = Math.max(Math.floor(top * TILE_INV_SIZE), 0);
			var ex = Math.min(Math.floor(right * TILE_INV_SIZE), tilesWide - 1);
			var ey = Math.min(Math.floor(bottom * TILE_INV_SIZE), tilesDeep - 1);
			
			var tilesheet = AssetManager.getImage("terrain");

			var tiles = this._tiles;
			for (var y = sy; y <= ey; ++y) {
				for (var x = sx; x <= ex; ++x) {
					var tile = tiles[x + tilesWide * y];
					var tilePos = tile.position;
					ctx.drawImage(
						tilesheet,
						tile.atlasX, tile.atlasY,
						TILE_SIZE, TILE_SIZE,
						tilePos.x, tilePos.y,
						TILE_SIZE, TILE_SIZE);
				}
			}
		}
	}

}