/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Paddle {

		private static _vertices: number[][] = [
			[0, -1], [0.3827, -0.9239], [0.7071, -0.7071], [0.9239, -0.3827], [1, 0], [0.9239, 0.3827], [0.7071, 0.7071],
			[0.3827, 0.9239], [0, 1], [0, 1], [-0.3827, 0.9239], [-0.7071, 0.7071], [-0.9239, 0.3827], [-1, 0],
			[-0.9239, -0.3827], [-0.7071, -0.7071], [-0.3827, -0.9239], [0, -1]
		];

		private _body: Box2D.Dynamics.b2Body;
		private _stage: Stage;
		private _attachedBall: Ball;
		private _attachJoints: Box2D.Dynamics.Joints.b2Joint[];
		private _innerWidth: number;
		private _height: number;

		get position() {
			var pos = this._body.GetPosition();
			var pu = PHYSICS_UNIT;
			return new Vec2(pos.x * pu, pos.y * pu);
		}

		constructor(stage: Stage, cx: number) {
			
			var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
			var b2Body = Box2D.Dynamics.b2Body;
			var b2BodyDef = Box2D.Dynamics.b2BodyDef;
			var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

			var pdw = PADDLE_DEFAULT_WIDTH;
			var ph = PADDLE_HEIGHT;

			var fixDef = new b2FixureDef();
			fixDef.friction = 0;
			var shape = fixDef.shape = new b2PolygonShape();
			shape.SetAsBox(pdw/2 * PHYSICS_INV_UNIT, ph/2 * PHYSICS_INV_UNIT);

			var bodyDef = new b2BodyDef();
			bodyDef.allowSleep = false;
			bodyDef.position.Set(cx * PHYSICS_INV_UNIT, (NATIVE_HEIGHT - PADDLE_BOTTOM_DISTANCE) * PHYSICS_INV_UNIT);
			bodyDef.type = b2Body.b2_staticBody;
			bodyDef.userData = this;

			this._body = stage.world.CreateBody(bodyDef);
			this._body.CreateFixture(fixDef);

			this._stage = stage;
			this._attachedBall = null;
			this._attachJoints = null;
			this._innerWidth = pdw;
			this._height = ph;
		}

		dispose(): void {
			this._stage.world.DestroyBody(this._body);
			this._body = null;
			this._stage = null;
		}

		moveRight(): void {

			var body = this._body;
			var pos = body.GetPosition();
			pos.x += 5 * PHYSICS_INV_UNIT;
			body.SetPosition(pos);
		}

		moveLeft(): void {

			var body = this._body;
			var pos = body.GetPosition();
			pos.x -= 5 * PHYSICS_INV_UNIT;
			body.SetPosition(pos);
		}

		// TODO: ATTACH BALL TO PADDLE
		attachBall(ball: Ball): void {
			
			var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
			var b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef;
			var b2Body = Box2D.Dynamics.b2Body;
			var b2Vec2 = Box2D.Common.Math.b2Vec2;
			
			if (!this._attachedBall) {

				var jy = BALL_ATTACH_HEIGHT * PHYSICS_INV_UNIT;
				var jx = PADDLE_JOINT_HORIZ_DIST * PHYSICS_INV_UNIT;
				var jointLength = Math.sqrt(jx * jx + jy * jy);

				var jointDef = new b2DistanceJointDef();

				jointDef.bodyA = this._body;
				jointDef.bodyB = ball.body;
				jointDef.localAnchorA = new b2Vec2(-jx, 0);
				jointDef.localAnchorB = new b2Vec2();
				jointDef.length = jointLength;
				var j0 = this._stage.world.CreateJoint(jointDef);

				jointDef.bodyA = this._body;
				jointDef.bodyB = ball.body;
				jointDef.localAnchorA = new b2Vec2(jx, 0);
				jointDef.localAnchorB = new b2Vec2();
				jointDef.length = jointLength;
				var j1 = this._stage.world.CreateJoint(jointDef);

				this._attachedBall = ball;
				this._attachJoints = [j0, j1];

				ball.onPaddleAttach(this);
			}
			

		}

		releaseBall(): void {

			var b2Vec2 = Box2D.Common.Math.b2Vec2;

			var ball = this._attachedBall;
			if (ball) {

				var joints = this._attachJoints;
				var world = this._stage.world;
				world.DestroyJoint(joints[0]);
				world.DestroyJoint(joints[1]);

				ball.setVelocity(-1, -1);
				ball.setSpeed(50);

				this._attachedBall = null;
				this._attachJoints = null;

				ball.onPaddleDetach(this);
			}
		}

		calculateBounceAngle(x: number, y: number): number {

			var paddlePos = this._body.GetPosition();

			var w = this._innerWidth / 2 * PHYSICS_INV_UNIT;
			var paddleLeft = paddlePos.x - w;
			var paddleRight = paddlePos.x + w;

			var mba = PADDLE_MAX_BOUNCE_ANGLE;

			var ratio = (x - paddleLeft) / (paddleRight - paddleLeft);
			ratio = MathUtil.clamp(ratio, 0, 1);

			return ratio * (mba * 2) - mba;
		}

		draw(ctx: CanvasRenderingContext2D): void {
			
			var pos = this._body.GetPosition().Copy();
			pos.Multiply(PHYSICS_UNIT);

			var x = pos.x;
			var y = pos.y;

			var radius = this._height * 0.5;
			var top = y - radius;
			var innerLeft = x - this._innerWidth * 0.5;
			var innerRight = x + this._innerWidth * 0.5;

			ctx.fillStyle = "#7f7";
			ctx.fillRect(innerLeft, top, this._innerWidth, this._height);
		}
	}

}