/// <reference path="_include.ts"/>

module Engine.Game {


	export class Player {


		private _id: number;
		private _world: World;
		private _commandBuffer: CommandBuffer;

		private _name: string;
		private _gold: number;
		private _lumber: number;
		private _oil: number;
		private _type: PlayerType;
		private _fixedType: boolean;
		private _race: string;
		private _fixedRace: boolean;
		private _team: Team;

		private _foodUsed: number;
		private _foodCreated: number;

		getID() { return this._id; }
		getRace() { return this._race; }
		getTeam() { return this._team; }

		getGold() { return this._gold; }
		getLumber() { return this._lumber; }
		getOil() { return this._oil; }
		getFoodUsed() { return this._foodUsed; }
		getFoodCreated() { return this._foodCreated; }

		constructor(id: number, world: World) {
			this._id = id;
			this._world = world;
			this._commandBuffer = new CommandBuffer();

			this._gold = 800;
			this._lumber = 400;
			this._oil = 200;
			this._foodUsed = 12;
			this._foodCreated = 20;
		}

		dispose(): void {
			this._world = null;
		}

		init(loader?: Encoder): void {

			if (loader) {
				this._name = loader.popString();
				this._gold = loader.popInt();
				this._lumber = loader.popInt();
				this._oil = loader.popInt();
				this._type = loader.popInt();
				this._fixedType = loader.popBool();

				loader.popInt(); // stored race as int
				this._race = "human";
				this._fixedRace = loader.popBool();

				loader.popInt(); // teamID

			} else {
				this._name = "";
				this._gold = 0;
				this._lumber = 0;
				this._oil = 0;
				this._type = PlayerType.None;
				this._fixedType = false;
				this._race = "human";
				this._fixedRace = false;
				//this._team = null;
			}
		}

		bufferCommand(command: WorldCommand, entities: Entity[], target: WorldTarget, queue: boolean): CommandResult {

			return this._commandBuffer.bufferCommand(command, this, entities, target, queue);
		}

		extractCommands(): string {

			return this._commandBuffer.incrementTurn();
		}
	}

}