/// <reference path="_include.ts"/>

module Engine.Game {

	export class Order_BuildAtTile implements Order {

		tries: number;
		clearing: boolean;
		region: TileRegion;
		entity: Entity;
		target: Tile;
		structure: Entity;
		
		constructor(ent: Entity, target: Tile, structure: Entity) {
			this.tries = 0;
			this.clearing = false;
			this.region = null;
			this.entity = ent;
			this.target = target;
			this.structure = structure;
		}

		think(): ThinkResult {

			var ent = this.entity;
			var target = this.target;
			var structure = this.structure;
			var region = this.region;

			// GET BUILD SITE
			if (!region)
				this.region = region = new TileRegion(target.x, target.y, structure.getTilesWide(), structure.getTilesHigh());

			// MOVE ENTITIES IN THE WAY
			if (!this.clearing) {

				var result = structure.placementTest(target.x, target.y, PlacementTestFlag.BlockingEntities, null, ent);
				_.each(result.blockingEntities, function (ent: Entity) {

					if(ent.isUnit())
						ent.orderQueue.push(new Order_ClearRegion(ent, region));
				});
				this.clearing = true;
			}

			// IF WITHIN DISTANCE
			if (ent.distanceToRegion(region) === 0) {

				// DO A PLACEMENT TEST
				var result = structure.placementTest(target.x, target.y, 0, null, ent);
				if (result.valid) {
					
					// PLACEMENT TEST SUCCEEDED
					console.log("START UR BUILD!");
					structure.world.spawnEntity(target.x, target.y, structure.type, ent);

					return ThinkResult.Done;
				} else {

					// SOMETHING'S IN THE WAY
					if (++this.tries > 10) {
						console.log("SOMETHING'S IN THE WAY");
						return ThinkResult.Done;
					}

					// TRY AGAIN IN _ ticks
					ent.wait(10);
				}

			} else {

				// MOVE TO BUILD SITE
				if (!ent.tryMove(region, PathType.ToArea)) {
					if (++this.tries > 2) {
						console.log("I CAN'T MOVE THERE!");
						return ThinkResult.Done;
					}
					ent.wait(40);
				}
			}

			return ThinkResult.NotDone;

		}
	}

}