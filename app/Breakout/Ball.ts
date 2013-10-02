/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Ball {

		private _body: Box2D.Dynamics.b2Body;
		private _stage: Stage;
		private _moving: boolean;
		private _speed: number;
		private _radius: number;

		get position() {
			var pos = this._body.GetPosition();
			var pu = PHYSICS_UNIT;
			return new Vec2(pos.x * pu, pos.y * pu);
		}
		get body() { return this._body; }

		get velocity() {
			var vel = this._body.GetLinearVelocity();
			return new Vec2(vel.x, vel.y);
		}

		constructor(stage: Stage, pos?: Vec2) {

			var radius = 10;

			var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
			var b2Body = Box2D.Dynamics.b2Body;
			var b2BodyDef = Box2D.Dynamics.b2BodyDef;
			var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
			var b2Vec2 = Box2D.Common.Math.b2Vec2;

			var fixDef = new b2FixureDef();
			fixDef.density = 1;
			fixDef.friction = 0;
			fixDef.restitution = 1;
			fixDef.shape = new b2CircleShape(radius * PHYSICS_INV_UNIT);

			var bodyDef = new b2BodyDef();
			bodyDef.allowSleep = false;
			bodyDef.bullet = true;
			bodyDef.angularDamping = 0;
			bodyDef.fixedRotation = true;
			bodyDef.linearDamping = 0;
			bodyDef.type = b2Body.b2_dynamicBody;
			bodyDef.userData = this;

			this._body = stage.world.CreateBody(bodyDef);
			this._body.CreateFixture(fixDef);

			this._stage = stage;
			this._moving = false;
			this._speed = 1;
			this._radius = radius;

			// TODO: SET BALL POSITION OR ATTACH TO PADDLE
			if (pos) {
				//this._body.SetPosition(new b2Vec2(pos.x * PHYSICS_INV_UNIT, pos.y * PHYSICS_INV_UNIT));
				//this.setVelocity(-1, -1);
			}

		}

		dispose(): void {
			this._stage.world.DestroyBody(this._body);
			this._body = null;
			this._stage = null;
		}

		setAngle(angle: number): void {

			//console.log(angle * 180 / Math.PI);
			var x = Math.sin(angle);
			var y = -Math.cos(angle);

			var vel = new Box2D.Common.Math.b2Vec2(x, y);
			vel.Multiply(this._body.GetLinearVelocity().Length());
			this._body.SetLinearVelocity(vel);
		}

		setVelocity(x: number, y: number): void {
			var vec = new Vec2(x, y);
			vec.setLength(Math.max(BALL_SLOWEST_SPEED, vec.length));
			this._body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(vec.x, vec.y));
		}

		setSpeed(newSpeed: number): void {
			this._speed = Math.max(BALL_SLOWEST_SPEED, newSpeed);
		}

		onPaddleAttach(paddle: Paddle): void {
			this._moving = false;

			var paddlePos = paddle.position;
			var pu = PHYSICS_INV_UNIT;
			var x = paddlePos.x * pu;
			var y = (paddlePos.y - BALL_ATTACH_HEIGHT) * pu;
			this._body.SetPosition(new Box2D.Common.Math.b2Vec2(x, y));
		}

		onPaddleDetach(paddle: Paddle): void {
			this._moving = true;
		}

		onPaddleHit(paddle: Paddle): void {
		}

		update(): void {

			if (this._moving) {
				var speed = this._speed;
				var vel = this._body.GetLinearVelocity();
				var diff = Math.abs(speed * speed - vel.LengthSquared());
				if (diff > BALL_SPEED_EPSILON) {

					vel = vel.Copy();
					vel.Normalize();
					vel.Multiply(speed);
					this._body.SetLinearVelocity(vel);

				}
			} else {
				this._body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2());
			}

		}

		draw(ctx: CanvasRenderingContext2D): void {

			var pos = this._body.GetPosition().Copy();
			pos.Multiply(PHYSICS_UNIT);
			var x = pos.x;
			var y = pos.y;

			ctx.fillStyle = "#fff";
			
			ctx.beginPath();
			ctx.arc(x, y, this._radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
		}
	}

}