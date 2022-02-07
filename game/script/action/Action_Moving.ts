/// <reference path="../_include.ts" />

module Engine.Game.ActionState {

	export interface IActionState {
		tick(ticks: number): boolean;
	}

	export class Moving implements IActionState {
		_entity: Entity;
		_world: World;

		_startX: number;
		_startY: number;
		_stepX: number;
		_stepY: number;
		_endX: number;
		_endY: number;
		_endTick: number;

		constructor(entity: Entity) {
			this._entity = entity;
			this._world = entity.world;
		}

		reset(destTile: Tile, ticks: number): boolean {

			var curTile = this._entity.getTile();
			if (!curTile || !destTile) {
				return false;
			}

			var dx = destTile.x - curTile.x;
			var dy = destTile.y - curTile.y;
			if (dx > 1 || dx < 1 || dy > 1 || dy < 1) {
				return false;
			}

			var dir = (dx < 0 ? Direction.Left : (dx > 0 ? Direction.Right : 0))
					| (dy < 0 ? Direction.Up : (dy > 0 ? Direction.Down : 0));
			var step = Math.max(this._entity.getMoveSpeed(), 0.0001) * ENTITY_MOVE_SPEED_MULTIPLIER;

			this._stepX = dx * step;
			this._stepY = dy * step;
			this._endX = destTile.center.x;
			this._endY = destTile.center.y;
			this._endTick = Math.max(Math.floor(TILE_SIZE / step), 1);

			return true;
		}
		
		tick(ticks: number): boolean {

			// MOVE TICK
			if (ticks >= this._endTick) {
				
				// END MOVE
				this._entity._setPosition(this._endX, this._endY);
				return true;

			} else {

				// KEEP MOVING
				var p = this._entity.getPosition();
				this._entity._setPosition(p.x + this._stepX, p.y + this._stepY);
				return false;
			}
					
		}
	}

}