/// <reference path="_include.ts"/>

module Engine.Game {

	export class Order_PatrolToEntity implements Order {

		tries: number;
		back: boolean;
		entity: Entity;
		target: Entity;
		srcTile: Tile;

		constructor(ent: Entity, target: Entity) {
			this.tries = 0;
			this.back = false;
			this.entity = ent;
			this.target = target;
			this.srcTile = null;
		}

		think(): ThinkResult {

			var ent = this.entity;
			var target = this.target;

			// EXIT CONDITION - TARGET IS DEAD
			if (target.isDead())
				return ThinkResult.Done;

			// EXIT CONDITION - INSIDE ENTITY
			var curTile = ent.getTile();
			if (!curTile)
				return ThinkResult.NotDone;

			// SET SOURCE TILE ON FIRST THINK
			if (!this.srcTile)
				this.srcTile = curTile;

			var moved = true;
			if (this.back) {
				// PATROL BACK TO SOURCE TILE
				if (curTile === this.srcTile)
					this.back = false;
				else
					moved = ent.tryMove(this.srcTile, PathType.ToTarget);

			} else {
				// PATROL TO ENTITY
				if (ent.distanceToEntity(target) <= 1)
					this.back = true;
				else
					moved = ent.tryMove(target, PathType.ToTarget);
			}

			if (!moved) {

				if (++this.tries > 1) {
					console.log("\"I QUIT PATROLLING!\" says " + ent.getName());
					return ThinkResult.Done;
				}

				ent.wait(40);
			}

			return ThinkResult.NotDone;

		}
	}

}