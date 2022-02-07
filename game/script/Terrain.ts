/// <reference path="_include.ts"/>

module Engine.Game {

	export class Terrain {

		private _mesh: TerrainMesh;
		
		// DECODED
		private _terrainType: string;
		private _tilesWide: number;
		private _tilesDeep: number;
		private _unitsWide: number;
		private _unitsDeep: number;
		private _tiles: Tile[];

		getMesh() { return this._mesh.getMesh(); }

		getTerrainType() { return this._terrainType; }
		getTileCount() { return this._tilesWide * this._tilesDeep; }
		getTilesWide() { return this._tilesWide; }
		getTilesDeep() { return this._tilesDeep; }
		getUnitsWide() { return this._unitsWide; }
		getUnitsDeep() { return this._unitsDeep; }

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

		init(loader?: Encoder): void {

			var terrainType = this._terrainType = loader ? loader.popString() : "forest";
			var tilesWide = this._tilesWide = loader ? loader.popInt() : 32;
			var tilesDeep = this._tilesDeep = loader ? loader.popInt() : 32;

			this._unitsWide = tilesWide * TILE_SIZE;
			this._unitsDeep = tilesDeep * TILE_SIZE;

			this._mesh = new TerrainMesh(tilesWide, tilesDeep);

			// CREATE THE TILES
			var id = -1;
			var tiles = this._tiles = [];
			for (var y = 0; y < tilesDeep; ++y) {
				for (var x = 0; x < tilesWide; ++x) {
					var tile = new Tile(this, ++id, x, y);
					tiles.push(tile);
				}
			}

			// DECODE RAW TILE DATA
			var tileID = 0;
			for (var y = 0; y < tilesDeep; ++y) {
				var northValid = (y !== 0);
				var southValid = (y !== tilesDeep - 1);

				for (var x = 0; x < tilesWide; ++x) {
					var westValid = (x !== 0);
					var eastValid = (x !== tilesWide - 1);

					var nbrs: Tile[] = [];
					if (westValid)					nbrs.push(tiles[(x - 1) + tilesWide * y]);
					if (northValid && westValid)	nbrs.push(tiles[(x - 1) + tilesWide * (y - 1)]);
					if (northValid)					nbrs.push(tiles[x + tilesWide * (y - 1)]);
					if (northValid && eastValid)	nbrs.push(tiles[(x + 1) + tilesWide * (y - 1)]);
					if (eastValid)					nbrs.push(tiles[(x + 1) + tilesWide * y]);
					if (southValid && eastValid)	nbrs.push(tiles[(x + 1) + tilesWide * (y + 1)]);
					if (southValid)					nbrs.push(tiles[x + tilesWide * (y + 1)]);
					if (southValid && westValid)	nbrs.push(tiles[(x - 1) + tilesWide * (y + 1)]);

					// IS EITHER RAW OR UNDEFINED
					tiles[tileID].init(nbrs, loader);

					++tileID;
				}
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
			var tw = this._tilesWide;
			var td = this._tilesDeep;
			if (clamp) {
				ix = MathUtil.clamp(ix, 0, tw - 1);
				iy = MathUtil.clamp(iy, 0, td - 1);
			} else if (ix < 0 || iy < 0 || ix >= tw || iy >= td) {
				return null;
			}
			return this._tiles[ix + tw * iy];
		}

		getTilesWithinIndex(tileX: number, tileY: number, tilesWide: number, tilesHigh: number): Tile[] {

			var tw = this._tilesWide;
			var td = this._tilesDeep;

			var ret: Tile[] = [];
			var tiles = this._tiles;
			var sx = MathUtil.clamp(tileX, 0, tw - 1);
			var sy = MathUtil.clamp(tileY, 0, td - 1);
			var ex = MathUtil.clamp(tileX + tilesWide, 0, tw);
			var ey = MathUtil.clamp(tileY + tilesHigh, 0, td);
			for (var y = sy; y < ey; ++y) {
				for (var x = sx; x < ex; ++x)
					ret.push(tiles[x + tw * y]);
			}
			return ret;
		}

		forEachTileOutside(region: TileRegion, maxDistance: number, callback: (tile: Tile) => boolean): boolean {

			var sx = region.x - 1;
			var sy = region.y - 1;
			var ex = region.x + region.width;
			var ey = region.y + region.height;

			var tiles = this._tiles;
			var width = this._tilesWide;
			var height = this._tilesDeep;

			for (var d = 0; d < maxDistance; ++d, --sx, --sy, ++ex, ++ey) {
				if (sx >= 0) {
					for (var y = sy + 1; y <= ey; ++y) {
						if (y < 0) continue;
						if (y >= height) break;
						if (callback(tiles[sx + width * y])) return true;
					}
				}
				if (ey < height) {
					for (var x = sx + 1; x <= ex; ++x) {
						if (x < 0) continue;
						if (x >= width) break;
						if (callback(tiles[x + width * ey])) return true;
					}
				}
				if (ex < width) {
					for (var y = ey - 1; y >= sy; --y) {
						if (y < 0) break;
						if (y >= height) continue;
						if (callback(tiles[ex + width * y])) return true;
					}
				}
				if (sy >= 0) {
					for (var x = ex - 1; x >= sx; --x) {
						if (x < 0) break;
						if (x >= width) continue;
						if (callback(tiles[x + width * sy])) return true;
					}
				}
			}
			return false;
		}

		draw(ctx: CanvasRenderingContext2D, bounds: Rect, drawGrid, drawTileNumbers, drawPath): void {

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
					var tilePos = tile.topLeft;
					ctx.drawImage(
						tilesheet,
						tile._atlasX, tile._atlasY,
						TILE_SIZE, TILE_SIZE,
						tilePos.x, tilePos.y,
						TILE_SIZE, TILE_SIZE);
				}
			}

			if (drawTileNumbers) {
				ctx.save();
				{
					ctx.globalAlpha = 0.3;
					ctx.fillStyle = "#fff";
					ctx.font = "normal 10px arial";
					for (var y = sy; y <= ey; ++y) {
						for (var x = sx; x <= ex; ++x) {
							var tile = tiles[x + tilesWide * y];
							var tilePos = tile.topLeft;
							ctx.fillText("" + x + "," + y, tilePos.x, tilePos.y + 10);
						}
					}
				}
				ctx.restore();
			}

			if (drawGrid) {
				ctx.save();
				{
					ctx.globalAlpha = 0.3;
					ctx.lineWidth = 1;
					ctx.strokeStyle = "#000";
					ctx.beginPath();
					var py = 0.5 + TILE_SIZE + sy * TILE_SIZE;
					for (var y = sy; y < ey; ++y) {
						ctx.moveTo(left, py);
						ctx.lineTo(right, py);
						py += TILE_SIZE;
					}

					var px = 0.5 + TILE_SIZE + sx * TILE_SIZE;
					for (var x = sx; x < ex; ++x) {
						ctx.moveTo(px, top);
						ctx.lineTo(px, bottom);
						px += TILE_SIZE;
					}
					ctx.stroke();
				}
				ctx.restore();
			}

		}
	}

}