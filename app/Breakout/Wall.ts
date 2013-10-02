/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Wall {

		private _body: Box2D.Dynamics.b2Body;
		private _stage: Stage;
		private _side: string;

		constructor(stage: Stage, side: string) {

			var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
			var b2Body = Box2D.Dynamics.b2Body;
			var b2BodyDef = Box2D.Dynamics.b2BodyDef;
			var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

			var fixDef = new b2FixureDef();
			fixDef.friction = 0;
			var shape = fixDef.shape = new b2PolygonShape();
			if (side === "left" || side === "right") {
				shape.SetAsBox(WALL_WIDTH / 2 * PHYSICS_INV_UNIT, (NATIVE_HEIGHT / 2 + WALL_WIDTH)  * PHYSICS_INV_UNIT);
			} else {
				shape.SetAsBox((NATIVE_WIDTH / 2 + WALL_WIDTH)  * PHYSICS_INV_UNIT, WALL_WIDTH / 2  * PHYSICS_INV_UNIT);
			}

			var bodyDef = new b2BodyDef();
			bodyDef.allowSleep = true;
			if (side === "left") {
				bodyDef.position.Set(-WALL_WIDTH / 2 * PHYSICS_INV_UNIT, NATIVE_HEIGHT / 2 * PHYSICS_INV_UNIT);
			} else if (side === "right") {
				bodyDef.position.Set((NATIVE_WIDTH + WALL_WIDTH / 2) * PHYSICS_INV_UNIT, NATIVE_HEIGHT / 2 * PHYSICS_INV_UNIT);
			} else {
				bodyDef.position.Set(NATIVE_WIDTH / 2 * PHYSICS_INV_UNIT, -WALL_WIDTH / 2 * PHYSICS_INV_UNIT);
			}
			bodyDef.type = b2Body.b2_staticBody;
			bodyDef.userData = this;

			this._body = stage.world.CreateBody(bodyDef);
			this._body.CreateFixture(fixDef);

			this._stage = stage;
			this._side = side;
		}

		dispose(): void {
			this._stage.world.DestroyBody(this._body);
			this._body = null;
			this._stage = null;
		}

		draw(ctx: CanvasRenderingContext2D): void {
		}
	}

}