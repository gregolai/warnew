/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class Path {

		pathID: number;
		bestTile: Tile;
		isComplete: boolean;
		target: WorldPathTarget;
		private _pathArray: Tile[];
		constructor(pathID: number, bestTile: Tile, bestHeuristic: number, target: WorldPathTarget) {
			this.pathID = pathID;
			this.bestTile = bestTile;
			this.isComplete = (bestHeuristic === 0);
			this.target = target;
			this._pathArray = this._makePathArray(bestTile);
		}
		dispose(): void {
			//this.pathID
			this.bestTile = null;
			//this.isComplete
			this.target = null;
			this._pathArray = null;
		}

		peek(): Tile {
			var pa = this._pathArray;
			return pa.length !== 0 ? pa[pa.length - 1] : null;
		}

		pop(): Tile {
			var pa = this._pathArray;
			return pa.length !== 0 ? pa.pop() : null;
		}

		length(): number {
			return this._pathArray.length;
		}

		private _makePathArray(tile: Tile): Tile[] {
			var ret: Tile[] = [];
			while (tile.__pathParent) {
				ret.push(tile);
				tile = tile.__pathParent;
			}
			return ret;
		}
	}

}