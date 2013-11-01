/// <reference path="_include.ts"/>

module Engine.WarNew {


	export class Player {


		private _id: number;
		private _world: World;
		private _race: string;
		private _team: Team;

		private _type: PlayerType;
		private _gold: number;
		private _lumber: number;
		private _oil: number;
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

			this._gold = 800;
			this._lumber = 400;
			this._oil = 200;
			this._foodUsed = 12;
			this._foodCreated = 20;
		}

		dispose(): void {
			this._world = null;
		}

		init(raw?: RawPlayerData): void {

			this._type = raw ? raw.playerType : PlayerType.None;

			this._race = "human";

		}
	}

}