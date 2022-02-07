/// <reference path="_include.ts"/>

module Engine.Game {


	export class Team {

		_players: Player[];

		_id: number;
		_name: string;
		_shareVision: boolean;

		id() { return this._id; }
		isNeutral() { return this._id === 0; }
		name() { return this._name; }

		constructor() {

			this._players = [];
		}

	}

}