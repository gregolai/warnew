/// <reference path="_include.ts"/>

module Engine.Game {

	export class Order_PatrolToTile implements Order {

		tries: number;
		back: boolean;
		entity: Entity;
		target: Tile;
		srcTile: Tile;

		constructor(ent: Entity, target: Tile) {
			this.tries = 0;
			this.back = false;
			this.entity = ent;
			this.target = target;
			this.srcTile = null;
		}

		think(): ThinkResult {

			var ent = this.entity;
			var target = this.target;

			// EXIT CONDITION - INSIDE ENTITY
			var curTile = ent.getTile();
			if (!curTile)
				return ThinkResult.NotDone;

			// SET SOURCE TILE ON FIRST THINK
			if (!this.srcTile)
				this.srcTile = curTile;

			// GET PATROL TARGET
			var next = this.back ? this.srcTile : target;

			// IF ENTITY IS AT PATROL TARGET, CHANGE TARGETS
			if (curTile === next) {
				this.back = !this.back;
			} else {

				// MOVE TO TARGET TILE
				if (!ent.tryMove(next, PathType.ToTarget)) {

					if (++this.tries > 1) {
						console.log("\"I QUIT PATROLLING!\" says " + ent.getName());
						return ThinkResult.Done;
					}

					ent.wait(40);
				}

			}

			return ThinkResult.NotDone;

		}
	}

}