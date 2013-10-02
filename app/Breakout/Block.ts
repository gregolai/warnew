/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Block {

		private _body: Box2D.Dynamics.b2Body;
		private _stage: Stage;
		private _slot: Slot;
		private _type: BlockType;

		get slot() { return this._slot; }
		get type() { return this._type; }

		constructor(stage: Stage, slot: Slot, type: BlockType) {

			var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
			var b2Body = Box2D.Dynamics.b2Body;
			var b2BodyDef = Box2D.Dynamics.b2BodyDef;
			var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
			
			var fixDef = new b2FixureDef();
			fixDef.friction = 0;
			var shape = fixDef.shape = new b2PolygonShape();
			shape.SetAsBox(stage.slotWidth / 2 * PHYSICS_INV_UNIT, stage.slotHeight / 2 * PHYSICS_INV_UNIT);
			
			var bodyDef = new b2BodyDef();
			bodyDef.allowSleep = true;
			bodyDef.position.Set((slot.px + stage.slotWidth / 2) * PHYSICS_INV_UNIT, (slot.py + stage.slotHeight / 2) * PHYSICS_INV_UNIT);
			bodyDef.type = b2Body.b2_staticBody;
			bodyDef.userData = this;

			this._body = stage.world.CreateBody(bodyDef);
			this._body.CreateFixture(fixDef);

			this._stage = stage;
			this._slot = slot;
			this._type = type;
		}

		dispose(): void {
			this._stage.world.DestroyBody(this._body);
			this._body = null;
			this._stage = null;
			this._slot = null;
		}

		draw(ctx: CanvasRenderingContext2D): void {
			
			var stage = this._stage;
			var width = stage.slotWidth;
			var height = stage.slotHeight;

			var pos = this._body.GetPosition().Copy();
			pos.Multiply(PHYSICS_UNIT);
			var x = pos.x - width * 0.5;
			var y = pos.y - height * 0.5;

			// FILL RECT
			ctx.fillStyle = "#ff0";
			ctx.fillRect(x, y, width, height);

			// DRAW BORDER
			//ctx.lineWidth = 1;
			//ctx.strokeStyle = "#777";
			//ctx.strokeRect(x + 0.5, y + 0.5, width - 1, height - 1);
		}
	}

}