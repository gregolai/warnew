/// <reference path="_include.ts"/>

module Engine.Game {

	export class Order_ClearRegion implements Order {

		tries: number;
		entity: Entity;
		region: TileRegion;

		constructor(ent: Entity, region: TileRegion) {
			this.tries = 0;
			this.entity = ent;
			this.region = region;
		}

		think(): ThinkResult {

			var ent = this.entity;

			// TEST IF OUTSIDE OF REGION
			if (ent.distanceToRegion(this.region) > 0)
				return ThinkResult.Done;

			// MOVE OUTSIDE REGION
			if (!ent.tryMove(this.region, PathType.ClearArea)) {
				ent.wait(40);
			}
			return ThinkResult.NotDone;
		}
	}

}