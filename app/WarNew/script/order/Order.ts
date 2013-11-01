/// <reference path="_include.ts"/>

module Engine.WarNew {

	/*
	export interface Order2 {
		tries: number;
		think(ent: Entity): ThinkResult;
		test(ent: Entity): boolean;
	}

	export class MovementOrder implements Order2 {

		tries = 0;
		target: WorldTarget;

		constructor(target: WorldTarget) {
			this.target = target;
		}

		think(ent: Entity): ThinkResult {





		}

		test(ent: Entity): boolean {
		}

		private _toEntity(ent: Entity, target: Entity): void {

			// EXIT CONDITION - CONTAINED IN ENTITY
			var curTile = ent.getTile();
			if (!curTile)
				return ThinkResult.NotDone;

			// EXIT CONDITION - TARGET IS DEAD
			if (target.isDead())
				return ThinkResult.Done;

			// CHECK IF DISTANCE IS CLOSE ENOUGH
			var dist = ent.distanceToEntity(target);
			if (dist <= 1) {
				if (target.isUnit()) {
					ent.wait(30);
					return ThinkResult.DoneIfQueue;
				}
				return ThinkResult.Done;
			}

			if (!ent.tryMove(target, PathType.ToTarget)) {

				if (++this.tries > 10) {
					console.log("\"I QUIT FOLLOWING " + target.getName() + "!\" says " + ent.getName());
					return ThinkResult.Done;
				}
				
				ent.wait(30);
			}
			return ThinkResult.NotDone;
		}

		private _toTile(ent: Entity, target: Tile): ThinkResult {

			// EXIT CONDITION - CONTAINED IN ENTITY
			var curTile = ent.getTile();
			if (!curTile)
				return ThinkResult.NotDone;

			// EXIT CONDITION - AT TARGET TILE
			if (curTile === target)
				return ThinkResult.Done;

			// CHECK IF ENTITY CAN MOVE
			if (!ent.tryMove(target, PathType.ToTarget)) {

				if (++this.tries > 1) {
					console.log("\"I QUIT MOVING!\" says " + ent.getName());
					return ThinkResult.Done;
				}

				ent.wait(40);
			}
			return ThinkResult.NotDone;
		}
	}
	*/
}