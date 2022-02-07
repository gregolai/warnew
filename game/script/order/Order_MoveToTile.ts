/// <reference path="_include.ts"/>

module Engine.Game {

	export class Order_MoveToTile implements Order {

		tries: number;
		entity: Entity;
		target: Tile;

		constructor(ent: Entity, target: Tile) {
			this.tries = 0;
			this.entity = ent;
			this.target = target;
		}

		think(): ThinkResult {

			var ent = this.entity;
			var target = this.target;

			// EXIT CONDITION - INSIDE ENTITY
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

}