/// <reference path="_include.ts"/>

module Engine.Game {

	export class Order_FollowEntity implements Order {

		tries: number;
		entity: Entity;
		target: Entity;

		constructor(ent: Entity, target: Entity) {
			this.tries = 0;
			this.entity = ent;
			this.target = target;
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

			// CHECK IF DISTANCE IS CLOSE ENOUGH
			var dist = ent.distanceToEntity(target);
			if (dist <= 1) {

				// IF TARGET IS A UNIT, WAIT _ TICKS AND FOLLOW AGAIN
				if (target.isUnit()) {
					ent.wait(30);
					return ThinkResult.DoneIfQueue;
				}

				// DONE BECAUSE STRUCTURES DON'T MOVE
				return ThinkResult.Done;
			}

			// MOVE TOWARDS TARGET
			if (!ent.tryMove(target, PathType.ToTarget)) {

				if (++this.tries > 10) {
					console.log("\"I QUIT FOLLOWING " + target.getName() + "!\" says " + ent.getName());
					return ThinkResult.Done;
				}
				
				ent.wait(30);
			}

			return ThinkResult.NotDone;
		}
	}

}