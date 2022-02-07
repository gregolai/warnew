/// <reference path="../_include.ts" />

module Engine.Game.ActionState {

	export interface IActionState {
		tick(ticks: number): boolean;
	}

	export class BeingConstructed implements IActionState {
		_entity: Entity;
		_world: World;

		_seqInterval: number;
		_seqIndex: number;

		_endProgress: number;

		constructor(entity: Entity) {
			this._entity = entity;
			this._world = entity.world;
		}

		reset(builder: Entity, buildTime: number): boolean {

			

			this._seqInterval = buildTime >> 2;

			this._seqIndex = 1;
			this._endProgress = buildTime; 
			
			return true;
		}
		
		tick(ticks: number): boolean {

			if (ticks >= this._seqIndex * this._seqInterval) {

				if (index === 0 || index === 2)
					// SET SECOND FRAME OF CONSTRUCTION-SITE OR CONSTRUCTION SEQUENCE
					this._entity._sequence.incrementFrame();
				else if (index === 1)
					// SET SEQUENCE TO CONSTRUCTION (FIRST FRAME);
					this._entity._setSequence("construction");

				this._seqIndex += 1;
			}



		}
	}

}