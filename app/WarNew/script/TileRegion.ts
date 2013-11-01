/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class TileRegion implements WorldPathTarget {

		x: number;
		y: number;
		width: number;
		height: number;

		constructor(x: number, y: number, width: number, height: number) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}

		getPathHeuristic(type: PathType, weight: number): (fromTile: Tile) => number {

			var x = this.x;
			var y = this.y;
			var width = this.width;
			var height = this.height;

			if (type === PathType.ToArea) {
				// TOWARDS REGION

				return function (tile: Tile) {
					return weight * Pathfinder.distance(tile.x, tile.y, 1, 1, x, y, width, height);
				};
			} else if (type === PathType.AvoidArea) {
				// AWAY FROM REGION

				var LARGE_NUMBER = (MAX_INT >> 1);
				return function (tile: Tile) {
					return LARGE_NUMBER - weight * Pathfinder.distance(tile.x, tile.y, 1, 1, x, y, width, height);
				};
			} else if (type === PathType.ClearArea) {
				// OUT OF AREA (return 0 when outside area)

				var x0 = x - 1;
				var y0 = y - 1;
				var x1 = x + width;
				var y1 = y + height;
				return function (tile: Tile) {
					var x = tile.x, y = tile.y;
					if (x <= x0 || x > x1 || y <= y0 || y > y1)
						return 0;
					else
						return weight * Math.min(Math.min(x - x0, x1 - x), Math.min(y - y0, y1 - y));
				};
			}

			return null;
		}
	}

}