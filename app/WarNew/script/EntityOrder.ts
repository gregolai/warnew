/// <reference path="_include.ts"/>

module Engine.WarNew {

	export module EntityOrder {


		export function defaultOrder(ent: Entity, target: WorldTarget): void {

			if (target instanceof Tile) {

				var targetTile = <Tile>target;
				move(ent, targetTile);

			} else if (target instanceof Entity) {

				var targetEntity = <Entity>target;

				var entTeam = ent.getOwner().getTeam();
				var targetTeam = targetEntity.getOwner().getTeam();

				if (targetTeam.isNeutral() === false && entTeam !== targetTeam)
					attack(ent, target);
				else
					move(ent, target);
			}

		}

		export function attack(ent: Entity, target: WorldTarget): void {

			if (ent.hasWeapon()) {

				// ATTACK ENTITY
				if (target instanceof Entity) {
					_issueOrder(ent, {
						type: OrderType.AttackEntity,
						targetEntity: <Entity>target
					});

					// ATTACK TO TILE
				} else if (target instanceof Tile) {
					_issueOrder(ent, {
						type: OrderType.AttackToTile,
						targetTile: <Tile>target
					});
				}

			} else {
				move(ent, target);
			}

		}

		export function build(ent: Entity, structure: Entity, targetTile: Tile): void {

			/*
			if (!ent.canBuild(structure.getType()))
				return;

			_issueOrder(ent, {
				type: OrderType.BuildAtTile,

				entity: structure,
				targetTile: targetTile
			});
			*/
		}

		// HOLD POSITION
		export function holdPosition(ent: Entity): void {

			if (!ent.canMove())
				return;

			_issueOrder(ent, {
				type: OrderType.HoldPosition
			});

		}


		export function move(ent: Entity, target: WorldTarget): void {

			if (!ent.canMove())
				return;

			// FOLLOW ENTITY
			if (target instanceof Entity) {
				_issueOrder(ent, {
					type: OrderType.FollowEntity,
					targetEntity: <Entity>target
				});

				// MOVE TO TILE
			} else if (target instanceof Tile) {
				_issueOrder(ent, {
					type: OrderType.MoveToTile,
					targetTile: <Tile>target
				});
			}

		}

		export function patrol(ent: Entity, target: WorldTarget): void {

			if (!ent.canMove())
				return;

			// PATROL TO ENTITY
			if (target instanceof Entity) {
				_issueOrder(ent, {
					type: OrderType.PatrolToEntity,
					targetEntity: <Entity>target
				});

				// PATROL TO TILE
			} else if (target instanceof Tile) {
				_issueOrder(ent, {
					type: OrderType.PatrolToTile,
					targetTile: <Tile>target
				});
			}

		}

		export function setRallyPoint(ent: Entity, target: WorldTarget): void {
			
			if (!ent.trainsUnits())
				return;

			ent._rallyPoint = target;
		}

		export function stop(ent: Entity): void {
			// CLEAR ORDER QUEUE
			ent._orderQueue = [];
		}

		export function trainUnit(ent: Entity, unitType: EntityType): void {

			if (ent.getUnitsTrained().indexOf(unitType) === -1)
				return;

			var data = Data.AllEntityData[unitType];
			if (!data)
				return;

			// TODO:
			/*
			// PUSH WRAPPER ONTO LIST
			ent._progressQueue.push({
				type: ProgressType.Unit,

				iconID: data.iconID,
				elapsedTime: 0,
				finishTime: data.buildTime,

				unitType: unitType
			});
			*/
		}

		function _issueOrder(ent: Entity, order: Order, queueFront?: boolean): void {
			order.tryCount = 0;
			if (queueFront)
				ent._orderQueue.unshift(order);
			else
				ent._orderQueue.push(order);
		}
	}

}