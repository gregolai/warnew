/// <reference path="_include.ts"/>

module Engine.WarNew {

	export module Pathfinder {

		var _prevPathID = -1;
		
		export function distance(ax: number, ay: number, aWidth: number, aHeight: number, bx: number, by: number, bWidth: number, bHeight: number): number {

			var Ax0 = ax, Ax1 = ax + aWidth;
			var Ay0 = ay, Ay1 = ay + aHeight;

			var Bx0 = bx, Bx1 = bx + bWidth;
			var By0 = by, By1 = by + bHeight;

			var dist = -1;
			if (Bx1 <= Ax0) {
				// B IS LEFT OF A
				dist = Ax0 - Bx1;
				if (By1 <= Ay0)
					// B IS TOP-LEFT OF A 
					dist = Math.max(dist, Ay0 - By1);
				else if (By0 >= Ay1)
					// B IS BOTTOM-LEFT OF A
					dist = Math.max(dist, By0 - Ay1);
			} else if (Bx0 >= Ax1) {
				// B IS RIGHT OF A
				dist = Bx0 - Ax1;
				if (By1 <= Ay0)
					// B IS TOP-RIGHT OF A
					dist = Math.max(dist, Ay0 - By1);
				else if (By0 >= Ay1)
					// B IS BOTTOM-RIGHT OF A
					dist = Math.max(dist, By0 - Ay1);
			} else {
				// B IS NEITHER LEFT NOR RIGHT OF A
				if (By1 <= Ay0)
					// B IS ABOVE A
					dist = Ay0 - By1;
				else if (By0 >= Ay1)
					// B IS BELOW A
					dist = By0 - Ay1;
			}

			return dist + 1;
		}

		export function getPath(entity: Entity, target: WorldPathTarget, type: PathType, maxIterations?: number) {

			if (!entity) {
				return null;
			}

			var startTile = entity.getTile();
			if (!startTile) {
				return null;
			}

			var WEIGHT = 10;
			var WEIGHT_DIAG = 14;

			// SET UP HEURISTIC FUNCTION
			var heuristicFunc = target.getPathHeuristic(type, WEIGHT);
			if (!heuristicFunc) {
				return null;
			}

			maxIterations = maxIterations || PATHFINDER_MAX_ITERATIONS;

			var pathID = ++_prevPathID;
			var openList = new BinaryHeap(function (tile: Tile) { return tile.__pathF; });
			var bestTile: Tile = null;
			var bestHeuristic = MAX_INT;

			// INITIALIZE START TILE
			startTile.__resetPath(pathID);
			startTile.__pathOpen = true;
			startTile.__pathH = heuristicFunc(startTile);

			// PUSH THE START TILE INTO THE OPEN LIST
			openList.push(startTile);

			for (var i = 0; i < maxIterations && openList.size() !== 0; ++i) {

				var tile = openList.pop();
				tile.__pathClosed = true;

				if (tile.__pathH < bestHeuristic) {
					bestTile = tile;
					bestHeuristic = tile.__pathH;

					// Reached the goal, stop searching.
					if (bestHeuristic === 0)
						break;
				}

				var tileX = tile.x;
				var tileY = tile.y;
				var tileG = tile.__pathG;
				var nbrs = tile.neighbors;
				for (var n = nbrs.length - 1; n !== -1; --n) {

					var nbrTile = nbrs[n];
					if (!nbrTile.canOccupy(entity))
						continue;

					// RESET NEIGHBOR VALUES
					if (nbrTile.__pathID !== pathID)
						nbrTile.__resetPath(pathID);

					if (nbrTile.__pathClosed)
						continue;

					var tempG = tileG + (tileX === nbrTile.x || tileY === nbrTile.y ? WEIGHT : WEIGHT_DIAG);

					if (!nbrTile.__pathOpen || tempG < nbrTile.__pathG) {

						var heur = heuristicFunc(nbrTile);

						nbrTile.__pathG = tempG;
						nbrTile.__pathH = heur;
						nbrTile.__pathF = tempG + heur;
						nbrTile.__pathParent = tile;

						if (nbrTile.__pathOpen) {
							openList.rescoreElement(nbrTile);
						} else {
							openList.push(nbrTile);
							nbrTile.__pathOpen = true;
						}

					}

				}

			} // for
			
			return new Path(pathID, bestTile, bestHeuristic, target);
		}

	}

}