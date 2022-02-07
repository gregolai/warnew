/// <reference path="_include.ts"/>

module Engine.Game {
	
	export class Command {
		getFoodCost() { return 0; }
		getGoldCost() { return 0; }
		getLumberCost() { return 0; }
		getOilCost() { return 0; }
		getManaCost() { return 0; }

		getButtonX() { throw "Command.buttonX is abstract."; return 0; }
		getButtonY() { throw "Command.buttonY is abstract."; return 0; }
		getHotkey() { return Key.None; }
		getIconID() { return ""; }
		getName() { return ""; }
		getTooltip() { return ""; }
		getTooltipExtended() { return ""; }
	}

	export class UserCommand extends Command {
		tryExecute(user: LiveGame): CommandResult {
			return { success: true };
		}
	}
	export class AdvancedBuildCommand extends UserCommand {
		static instance = new AdvancedBuildCommand();

		tryExecute(user: LiveGame): CommandResult {
			user.setPage(CommandPage.AdvancedBuild);
			return { success: true };
		}
		getButtonX() { return 1; }
		getButtonY() { return 2; }
		getHotkey() { return Key.KEY_V; }
		getIconID() { return "icon-advanced-build"; }
		getName() { return "Advanced Build"; }
		getTooltip() { return "Build Ad|v|anced Structures"; }
	}
	export class BasicBuildCommand extends UserCommand {
		static instance = new BasicBuildCommand();

		tryExecute(user: LiveGame): CommandResult {
			user.setPage(CommandPage.BasicBuild);
			return { success: true };
		}
		getButtonX() { return 0; }
		getButtonY(): number { return 2; }
		getHotkey(): Key { return Key.KEY_B; }
		getIconID(): string { return "icon-basic-build"; }
		getName(): string { return "Basic Build"; }
		getTooltip(): string { return "Build |B|asic Structures"; }
	}
	export class CancelCommand extends UserCommand {
		static instance = new CancelCommand();

		tryExecute(user: LiveGame): CommandResult {
			user.setPage(CommandPage.Default);
			return { success: true };
		}
		getButtonX() { return 2; }
		getButtonY() { return 2; }
		getHotkey() { return Key.KEY_X; }
		getIconID() { return "icon-cancel"; }
		getName() { return "Cancel"; }
		getTooltip() { return "Cancel"; }
	}


	export class WorldCommand extends Command {
		static instance = new WorldCommand();

		placementEntity: Entity;

		getCommandType() { return WorldCommandType.Default; }

		requiresTarget() { return true; }

		plotEntityType() { return EntityType.None; }

		canExecute(player: Player, entities: Entity[], target: WorldTarget): CommandResult {

			var valid = entities.slice(0);

			// FILTER ENTS NOT OWNED BY PLAYER
			for (var i = valid.length - 1; i !== -1; --i) {
				if (valid[i].getOwner() !== player)
					valid.splice(i, 1);
			}
			if (valid.length === 0)
				return { success: false };

			// TODO: Check target

			// CHECK FOOD
			var foodCost = this.getFoodCost();
			if (foodCost > 0 && player.getFoodCreated() - player.getFoodUsed() < foodCost)
				return { success: false, message: "Not enough food." };

			// CHECK GOLD
			var goldCost = this.getGoldCost();
			if (goldCost > 0 && player.getGold() < goldCost)
				return { success: false, message: "Not enough gold." };

			// CHECK LUMBER
			var lumberCost = this.getLumberCost();
			if (lumberCost > 0 && player.getLumber() < lumberCost)
				return { success: false, message: "Not enough lumber." };

			// CHECK OIL
			var oilCost = this.getOilCost();
			if (oilCost > 0 && player.getOil() < oilCost)
				return { success: false, message: "Not enough oil." };

			// FILTER ENTS WITH NOT ENOUGH MANA
			var manaCost = this.getManaCost();
			if (manaCost > 0) {
				for (var i = valid.length - 1; i !== -1; --i) {
					if (valid[i].getMana() < manaCost)
						valid.splice(i, 1);
				}
				if (valid.length === 0)
					return { success: false, message: "Not enough mana." };
			}

			return { success: true, validEntities: valid };
		}

		isTargetAllowed(target: WorldTarget): boolean {
			return true;
		}

		tryExecute(player: Player, entities: Entity[], target: WorldTarget, queue: boolean): CommandResult {

			// CHECK IF CAN EXECUTE
			var result = this.canExecute(player, entities, target);
			if (result.success) {

				// EACH VALID ENTITY EXECUTES
				var valid = result.validEntities;
				for (var i = 0, ii = valid.length; i < ii; ++i) {
					var ent = valid[i];
					if (!queue)
						ent.orderQueue.length = 0;
					this.executeEach(ent, target);
				}
				
			}
			return result;
		}

		executeEach(entity: Entity, target: WorldTarget): void {

			// DEFAULT ORDER

			if (target instanceof Tile) {

				// MOVE TO TILE
				entity.orderQueue.push(new Order_MoveToTile(entity, <Tile>target));

			} else if (target instanceof Entity) {

				// FOLLOW ENTITY
				entity.orderQueue.push(new Order_FollowEntity(entity, <Entity>target));

			}
		}

	}

	export class AbilityCommand extends WorldCommand {

		getCommandType() { return WorldCommandType.Ability; }

		private _type: AbilityType;

		// TODO
		constructor(abType: AbilityType) {
			super();
			this._type = abType;
		}
	}

	export class AttackCommand extends WorldCommand {
		static instance = new AttackCommand();

		getCommandType() { return WorldCommandType.Attack; }

		getButtonX(): number { return 2; }
		getButtonY(): number { return 0; }
		getHotkey(): Key { return Key.KEY_A; }
		getIconID(): string { return "icon-melee0-{race}"; }
		getName(): string { return "Attack"; }
		getTooltip(): string { return "|A|ttack"; }
		getTooltipExtended(): string {
			return "Orders your units to move to the target area and attack any enemy units"
				+ " they see on the way. If you order them to attack a specific unit, your units will"
				+ " ignore other enemy units and attack the targeted unit until it is destroyed.";
		}

		executeEach(entity: Entity, target: WorldTarget): void {
			
			// TODO
		}
	}

	export class BuildCommand extends WorldCommand {

		getCommandType() { return WorldCommandType.Build; }

		private _type: EntityType;
		private _data: EntityData;

		constructor(entType: EntityType) {
			super();
			this._type = entType;
			this._data = AllEntityData[entType];
		}

		getFoodCost(): number { return this._data.foodCost; }
		getGoldCost(): number { return this._data.goldCost; }
		getLumberCost(): number { return this._data.lumberCost; }
		getOilCost(): number { return this._data.oilCost; }

		getButtonX(): number { return this._data.buttonX; }
		getButtonY(): number { return this._data.buttonY; }
		getHotkey(): Key { return this._data.hotkey; }
		getIconID(): string { return this._data.iconId; }
		getName(): string { return this._data.name; }
		getTooltip(): string { return this._data.tooltip; }
		getTooltipExtended(): string { return this._data.tooltipExtended; }
		plotEntityType() { return this._type; }

		canExecute(player: Player, entities: Entity[], target: WorldTarget): CommandResult {

			var cmdResult = super.canExecute(player, entities, target);

			// FAILED
			if (cmdResult.success) {

				// NO TARGET ASSSIGNED YET, SUCCESSFUL
				if (target) {

					// TARGET MUST BE A TILE
					if (!(target instanceof Tile))
						return { success: false, message: "Target must be a tile." };

					// PLACEMENT ENTITY MUST EXIST
					if(!this.placementEntity)
						return { success: false, message: "No placement entity." };

					// TEST ENTITY PLACEMENT
					var placeResult = this.placementEntity.placementTest((<Tile>target).x, (<Tile>target).y, PlacementTestFlag.Message, player, null);
					if (!placeResult.valid)
						return { success: false, message: placeResult.message };

				}
			}
			return cmdResult;
		}

		// OVERRIDE
		/*
		tryExecute(player: Player, entities: Entity[], target: WorldTarget, queue: boolean): CommandResult {

			// CHECK IF CAN EXECUTE
			var result = this.canExecute(player, entities, target);
			console.log(result);
			if (result.success) {

				// TODO: GET CLOSEST ENTITY THAT'S NOT BUILDING
				for (var i = entities.length - 1; i !== -1; --i) {

					this.executeEach(entities[i], target);
				}
			}
			return result;
		}
		*/
		executeEach(entity: Entity, target: WorldTarget): void {

			if (target instanceof Tile) {


				entity.orderQueue.push(new Order_BuildAtTile(entity, <Tile>target, this.placementEntity));
				
				// TODO
			}
		}
	}

	export class HoldPositionCommand extends WorldCommand {
		static instance = new HoldPositionCommand();

		getCommandType() { return WorldCommandType.HoldPosition; }

		requiresTarget() { return false; }

		getButtonX(): number { return 1; }
		getButtonY(): number { return 1; }
		getHotkey(): Key { return Key.KEY_H; }
		getIconID(): string { return "icon-hold-position-{race}"; }
		getName(): string { return "Hold Position"; }
		getTooltip(): string { return "|H|old Position"; }
		getTooltipExtended(): string {
			return "Orders your units to stand where they are and attack units that are"
				+ " within range. When on Hold Position your units will not chase down enemy units"
				+ " that run away, nor move to engage ranged attackers.";
		}

		executeEach(entity: Entity, target: WorldTarget): void {
			
			// TODO
		}
	}

	export class MoveCommand extends WorldCommand {
		static instance = new MoveCommand();

		getCommandType() { return WorldCommandType.Move; }

		getButtonX() { return 0; }
		getButtonY() { return 0; }
		getHotkey() { return Key.KEY_M; }
		getIconID() { return "icon-move-{race}"; }
		getName() { return "Move"; }
		getTooltip() { return "|M|ove"; }
		getTooltipExtended() {
			return "Orders your units to move to the target area while ignoring enemy"
				+ " units and attacks. Issuing a move order onto a target unit will cause your unit"
				+ " to follow thetarget using move orders.";
		}

		executeEach(entity: Entity, target: WorldTarget): void {

			if (target instanceof Tile) {
				entity.orderQueue.push(new Order_MoveToTile(entity, <Tile>target));
			} else if (target instanceof Entity) {
				entity.orderQueue.push(new Order_FollowEntity(entity, <Entity>target));
			}
		}
	}

	export class PatrolCommand extends WorldCommand {
		static instance = new PatrolCommand();

		getCommandType() { return WorldCommandType.Patrol; }

		getButtonX(): number { return 0; }
		getButtonY(): number { return 1; }
		getHotkey(): Key { return Key.KEY_P; }
		getIconID(): string { return "icon-patrol-{race}"; }
		getName(): string { return "Patrol"; }
		getTooltip(): string { return "|P|atrol"; }
		getTooltipExtended(): string {
			return "Orders your units to continually move from their current position to the"
				+ " targeted area until given another command. Units on patrol will move to engage"
				+ " enemy units that come within range. Issuing a patrol order onto a target unit will"
				+ " cause your unit to imitate the targeted unit's behavior.";
		}

		executeEach(entity: Entity, target: WorldTarget): void {

			if (target instanceof Tile) {
				entity.orderQueue.push(new Order_PatrolToTile(entity, <Tile>target));
			} else if (target instanceof Entity) {
				entity.orderQueue.push(new Order_PatrolToEntity(entity, <Entity>target));
			}

		}
	}

	export class SetRallyPointCommand extends WorldCommand {
		static instance = new SetRallyPointCommand();

		getCommandType() { return WorldCommandType.SetRallyPoint; }

		getButtonX(): number { return 2; }
		getButtonY(): number { return 2; }
		getHotkey(): Key { return Key.KEY_Y; }
		getIconID(): string { return "icon-rally-{race}"; }
		getName(): string { return "Set Rally Point"; }
		getTooltip(): string { return "Set Rall|y| Point"; }
		getTooltipExtended(): string {
			return "Orders units that pop out of the building to immediately attack-move to"
				+ " the targeted area. You can rally point gold mines or trees to auto-harvest. You"
				+ " can rally point a unit to have new units follow it when they finish building.";
		}

		executeEach(entity: Entity, target: WorldTarget): void {

			entity.rallyPoint = target;
		}
	}

	export class StopCommand extends WorldCommand {
		static instance = new StopCommand();

		getCommandType() { return WorldCommandType.Stop; }

		requiresTarget() { return false; }

		getButtonX(): number { return 1; }
		getButtonY(): number { return 0; }
		getHotkey(): Key { return Key.KEY_S; }
		getIconID(): string { return "icon-armor0-{race}"; }
		getName(): string { return "Stop"; }
		getTooltip(): string { return "|S|top"; }
		getTooltipExtended(): string {
			return "Orders your units to stop whatever order they were previously given."
				+ " Units that have been told to stop will attack enemy units and move to engage"
				+ " nearby enemies.";
		}

		executeEach(entity: Entity, target: WorldTarget): void {

			// STOP
			entity.orderQueue.length = 0;
		}
	}

	export class TrainCommand extends WorldCommand {
		
		getCommandType() { return WorldCommandType.Train; }

		private _type: EntityType;
		private _data: EntityData;

		constructor(entType: EntityType) {
			super();
			this._type = entType;
			this._data = AllEntityData[entType];
		}

		getFoodCost(): number { return this._data.foodCost; }
		getGoldCost(): number { return this._data.goldCost; }
		getLumberCost(): number { return this._data.lumberCost; }
		getOilCost(): number { return this._data.oilCost; }
		requiresTarget() { return false; }

		getButtonX(): number { return this._data.buttonX; }
		getButtonY(): number { return this._data.buttonY; }
		getHotkey() { return this._data.hotkey; }
		getIconID(): string { return this._data.iconId; }
		getName(): string { return this._data.name; }
		getTooltip(): string { return this._data.tooltip; }
		getTooltipExtended(): string { return this._data.tooltipExtended; }

		executeEach(entity: Entity, target: WorldTarget): void {
			
			// TODO
		}
	}
}