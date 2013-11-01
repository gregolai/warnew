/// <reference path="_include.ts"/>

module Engine.WarNew {

	export module EntityThink {

		var _thinkStates: { (ent: Entity, order: Order): ThinkResult; }[] = [];

		_thinkStates[OrderType.AttackEntity] = AttackEntity;
		//_thinkStates[OrderType.AttackToTile]
		_thinkStates[OrderType.BuildAtTile] = BuildAtTile;
		//thinkStates[OrderType.CastOnEntity]
		//thinkStates[OrderType.CastOnTile]
		_thinkStates[OrderType.ClearArea] = ClearArea;
		_thinkStates[OrderType.FollowEntity] = FollowEntity;
		_thinkStates[OrderType.HarvestGold] = HarvestGold;
		_thinkStates[OrderType.HoldPosition] = HoldPosition;
		_thinkStates[OrderType.MoveToTile] = MoveToTile;
		_thinkStates[OrderType.PatrolToEntity] = PatrolToEntity;
		_thinkStates[OrderType.PatrolToTile] = PatrolToTile;
		//_thinkStates[OrderType.UpgradeSelf]


		export function think(entity: Entity, order: Order): ThinkResult {
			var state = _thinkStates[order.type];
			return (state ? state(entity, order) : ThinkResult.Done);
		}

		function AttackEntity(attacker: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

		function BuildAtTile(builder: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

		function ClearArea(entity: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

		function FollowEntity(follower: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

		function HarvestGold(harvester: Entity, order: Order): ThinkResult {
			
			return ThinkResult.Done;
		}

		function HoldPosition(entity: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

		function MoveToTile(mover: Entity, order: Order): ThinkResult {

			// IS INSIDE ENTITY
			var curTile = mover.getTile();
			if (!curTile) {
				mover.wait(40);
				return ThinkResult.NotDone;
			}

			// EXIT CONDITION - AT TARGET TILE
			var destTile = order.targetTile;
			if (curTile === destTile) {
				return ThinkResult.Done;
			}


			if (!mover.tryMove(destTile, PathType.ToTarget)) {
				
				if (++order.tryCount > 1) {
					console.log("\"I QUIT MOVING!\" says " + mover.getName());
					return ThinkResult.Done;
				}

				mover.wait(40);
			}

			return ThinkResult.NotDone;
		}

		function PatrolToEntity(patroller: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

		function PatrolToTile(patroller: Entity, order: Order): ThinkResult {

			return ThinkResult.Done;
		}

	}

}