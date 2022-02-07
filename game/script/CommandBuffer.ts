/// <reference path="_include.ts"/>

module Engine.Game {

	export interface CommandBufferParams {
		type: WorldCommandType;
		player: Player;
		entities: Entity[];
		target: WorldTarget;
		queue: boolean;
	}

	export class CommandBuffer {

		private static __decoder: Encoder;
		private static _decoder(): Encoder {
			return CommandBuffer.__decoder || (CommandBuffer.__decoder = new Encoder(true));
		}

		static executeBuffered(world: World, buffered: string): void {

			if (!buffered)
				return;

			var d = CommandBuffer._decoder();
			d.data = buffered;

			var commandCount = d.popInt();
			for(var c = 0; c < commandCount; ++c){

				var commandType = d.popInt();

				var playerId = d.popInt();
				var player = world.getPlayerById(playerId);

				var ents: Entity[] = [];

				var entityCount = d.popInt();
				for (var i = 0; i < entityCount; ++i) {
					var entId = d.popInt();
					var ent = world.getEntityById(entId);
					if (ent)
						ents.push(ent);
				}

				var target: WorldTarget = null;
				var hasTarget = d.popBool();
				if (hasTarget) {
					var targetId = d.popInt();
					target = world.getTargetById(targetId);
				}

				var plotEntType = EntityType.None;
				var plotEnt: Entity = null;

				var hasPlacementEnt = d.popBool();
				if (hasPlacementEnt) {
					plotEntType = d.popInt();
					plotEnt = new Entity(MAX_INT, world, plotEntType, player);
				}

				var queue = d.popBool();

				var command: WorldCommand = null;
				switch (commandType) {
					case WorldCommandType.Default:
						command = WorldCommand.instance;
						break;
					case WorldCommandType.Move:
						command = MoveCommand.instance;
						break;
					case WorldCommandType.Patrol:
						command = PatrolCommand.instance;
						break;
					case WorldCommandType.Stop:
						command = StopCommand.instance;
						break;
					case WorldCommandType.Build:
						command = new BuildCommand(plotEntType);
						command.placementEntity = plotEnt;
						break;
					case WorldCommandType.SetRallyPoint:
						command = SetRallyPointCommand.instance;
						break;
				}

				if (command) {
					command.tryExecute(player, ents, target, queue);
				}
			}

			// Sanity-checking the queue length
			if (d.data !== "") {
				console.log("WARNING: Command buffer executed, but still " + d.data.length + " chars left. Data:", d.data);
			}

			d.data = ""; // should be "" anyways
		}

		private _encoder: Encoder;
		private _commandsThisTurn: number;

		constructor() {
			this._encoder = new Encoder(true);
			this._commandsThisTurn = 0;
		}

		bufferCommand(command: WorldCommand, player: Player, entities: Entity[], target: WorldTarget, queue: boolean): CommandResult {

			var result = command.canExecute(player, entities, target);
			if (result.success) {

				var commandType = command.getCommandType();

				var e = this._encoder;
				e.pushInt(commandType);				// command type
				e.pushInt(player.getID());			// player id

				var entities = entities;
				e.pushInt(entities.length);
				for (var i = 0, ii = entities.length; i < ii; ++i)
					e.pushInt(entities[i].id);		// entity id

				var target = target;
				e.pushBool(!!target);				// has target?
				if (target)
					e.pushInt(target.id);			// target id

				var placementEnt = command.placementEntity;
				e.pushBool(!!placementEnt);
				if (placementEnt)
					e.pushInt(placementEnt.type);

				e.pushBool(queue);					// queue

				this._commandsThisTurn += 1;
			}
			return result;
		}

		incrementTurn(): string {
			var e = this._encoder;
			e.queue = false;
			e.pushInt(this._commandsThisTurn);		// push on top
			e.queue = true;

			var ret = e.data;

			// RESET
			e.data = "";
			this._commandsThisTurn = 0;

			return ret;
		}

	}

}