/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class MyContactListener implements Box2D.Dynamics.b2ContactListener {

		private _stage: Stage;

		constructor(stage: Stage) {
			this._stage = stage;
		}

		public BeginContact(contact: Box2D.Dynamics.Contacts.b2Contact): void {

			var stage = this._stage;
			var u0 = contact.GetFixtureA().GetBody().GetUserData();
			var u1 = contact.GetFixtureB().GetBody().GetUserData();

			// HANDLE BLOCK/BALL COLLISION
			var block = null;
			var ball = null;
			if (u0 instanceof Block && u1 instanceof Ball) {
				block = <Block>u0;
				ball = <Ball>u1;
			} else if (u1 instanceof Block && u0 instanceof Ball) {
				block = <Block>u1;
				ball = <Ball>u0;
			}

			if (block) {
				// BALL HIT BLOCK
				stage.addBlockToRemove(block);
			}
		}

		public EndContact(contact: Box2D.Dynamics.Contacts.b2Contact): void {
		}

		public PreSolve(contact: Box2D.Dynamics.Contacts.b2Contact, oldManifold: Box2D.Collision.b2Manifold): void {
		}

		public PostSolve(contact: Box2D.Dynamics.Contacts.b2Contact, impulse: Box2D.Dynamics.b2ContactImpulse): void {

			var u0 = contact.GetFixtureA().GetBody().GetUserData();
			var u1 = contact.GetFixtureB().GetBody().GetUserData();

			console.log("PostSolve");
			var ball = null;
			var paddle = null;
			if (u0 instanceof Ball && u1 instanceof Paddle) {
				ball = <Ball>u0;
				paddle = <Paddle>u1;
			} else if (u1 instanceof Ball && u0 instanceof Paddle) {
				ball = <Ball>u1;
				paddle = <Paddle>u0;
			}


			if (ball) {
				var wm = new Box2D.Collision.b2WorldManifold();
				contact.GetWorldManifold(wm);

				var hitPoint = wm.m_points[0];
				if (hitPoint) {

					var angle = paddle.calculateBounceAngle(hitPoint.x, hitPoint.y);

					ball.setAngle(angle);
				}

				ball.onPaddleHit(paddle);
			}
		}

	}

	export class Stage {

		private _appState: AppState;
		private _surface: Surface2D;
		private _debugSurface: Surface2D;
		private _debugDraw: Box2D.Dynamics.b2DebugDraw;
		private _world: Box2D.Dynamics.b2World;
		private _scale: number;
		private _xSlots: number;
		private _ySlots: number;
		private _slotWidth: number;
		private _slotHeight: number;
		private _slots: Slot[];
		private _paddle: Paddle;
		private _ball: Ball;
		private _leftWall: Wall;
		private _topWall: Wall;
		private _rightWall: Wall;
		private _lives: number;
		private _blocksToRemove: Block[];


		get world() { return this._world; }
		get slotWidth() { return this._slotWidth; }
		get slotHeight() { return this._slotHeight; }
		get slots() { return this._slots; }
		get paddle() { return this._paddle; }

		constructor(appState: AppState) {

			var b2World = Box2D.Dynamics.b2World;
			var b2Vec2 = Box2D.Common.Math.b2Vec2;
			var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

			this._appState = appState;
			this._surface = appState.create2dSurface();
			this._debugSurface = appState.create2dSurface();
			this._world = new b2World(new b2Vec2(), true);
			
			var debugDraw = this._debugDraw = new b2DebugDraw();
			debugDraw.SetSprite(this._debugSurface.context);
			debugDraw.SetFillAlpha(0.5);
			debugDraw.SetLineThickness(1.0);
			debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
			this._world.SetDebugDraw(debugDraw);

			this._world.SetContactListener(new MyContactListener(this));

			this._scale = 1;
			this._xSlots = 0;
			this._ySlots = 0;
			this._slotWidth = 10;
			this._slotHeight = 10;
			this._slots = [];
			this._paddle = null;
			this._ball = null;
			this._leftWall = null;
			this._topWall = null;
			this._rightWall = null;
			this._lives = 0;
			this._blocksToRemove = [];
		}

		private _cleanLevel(): void {

			// DISPOSE OLD BLOCKS
			var slots = this._slots;
			for (var s = 0, ss = slots.length; s < ss; ++s) {
				slots[s].dispose();
			}

			// DISPOSE OLD PADDLE
			if (this._paddle) {
				this._paddle.dispose();
			}

			// DISPOSE OLD BALL
			if (this._ball) {
				this._ball.dispose();
			}

			// DISPOSE OLD WALLS
			if (this._leftWall) {
				this._leftWall.dispose();
			}
			if (this._topWall) {
				this._topWall.dispose();
			}
			if (this._rightWall) {
				this._rightWall.dispose();
			}
		}

		load(data?: RawStageData): void {

			// DISPOSE OLD STUFF
			this._cleanLevel();

			data = data || {};

			var xSlots = this._xSlots = data.xSlots || 10;
			var ySlots = this._ySlots = data.ySlots || 18;

			var slotWidth = this._slotWidth = NATIVE_WIDTH / xSlots;
			var slotHeight = this._slotHeight = (NATIVE_HEIGHT - 200) / ySlots;

			// CREATE NEW SLOTS
			var slots = this._slots = [];

			var blockTypes: BlockType[] = data.blocks || [];
			var index = 0;
			for (var y = 0; y < ySlots; ++y) {
				for (var x = 0; x < xSlots; ++x) {

					var slot = new Slot(this, index, x * slotWidth, y * slotHeight);

					var blockType = blockTypes[index];
					if (blockType) {
						slot.addBlock(blockType);
					}

					slots.push(slot);

					++index;
				}
			}

			var paddle = this._paddle = new Paddle(this, 400);

			var ball = this._ball = new Ball(this, new Vec2(600, 450));
			
			paddle.attachBall(ball);

			var leftWall = this._leftWall = new Wall(this, "left");
			var topWall = this._topWall = new Wall(this, "top");
			var rightWall = this._rightWall = new Wall(this, "right");

			this._lives = 3;
		}

		save(): RawStageData {

			var data: RawStageData = {};

			data.xSlots = this._xSlots;
			data.ySlots = this._ySlots;
			data.blocks = [];

			var slots = this._slots;
			for (var s = 0, ss = slots.length; s < ss; ++s) {
				var slot = slots[s];
				var block = slot.block;
				data.blocks.push(block ? block.type : BlockType.None);
			}

			return data;
		}

		private _inBounds(ix: number, iy: number): boolean {
			return ix >= 0 && ix <= this._xSlots && iy >= 0 && iy < this._ySlots;
		}

		getSlotAtPixel(px: number, py: number): Slot {

			px = (px - this._surface.x) / this._scale;
			py = (py - this._surface.y) / this._scale;

			var ix = Math.floor(px / this._slotWidth);
			var iy = Math.floor(py / this._slotHeight);
			if (!this._inBounds(ix, iy)) {
				return null;
			}
			return this._slots[ix + iy * this._xSlots];
		}

		addBlockToRemove(block: Block): void {
			if (this._blocksToRemove.indexOf(block) === -1) {
				this._blocksToRemove.push(block);
			}
		}

		update(dt: number): void {

			var blocksToRemove = this._blocksToRemove;
			for (var b = blocksToRemove.length - 1; b !== -1; --b) {
				var block = blocksToRemove[b];
				block.slot.removeBlock();
				blocksToRemove.pop();
			}

			var ball = this._ball;

			ball.update();

			// BALL HITS BOTTOM
			if (ball.position.y > NATIVE_HEIGHT) {
				--this._lives;
				if (this._lives <= 0) {
					// YOU LOSE
					if (this._appState instanceof LiveGame) {
						var liveGame = <LiveGame>this._appState;
						liveGame.youLose();
					}
				} else {
					// RESET BALL

					this._ball = new Ball(this, new Vec2(600, 600)); //position doesnt matter
					this._paddle.attachBall(this._ball);

				}
			}

			var paddle = this._paddle;

			if (this._appState instanceof LiveGame) {

				var app = App.instance;
				if (app.isKeyDown(Key.KEY_MOUSE_LEFT)) {
					paddle.releaseBall();
				}
				if (app.isKeyDown(Key.KEY_LEFT)) {
					paddle.moveLeft();
				}
				if (app.isKeyDown(Key.KEY_RIGHT)) {
					paddle.moveRight();
				}

			}

			this._world.Step(1 / 60, 8, 3);
		}

		draw(showGrid?: boolean, hoverSlot?: Slot): void {

			var surface = this._surface;
			var ctx = this._surface.context;
			ctx.save();
			{
				ctx.fillStyle = "#000";
				ctx.fillRect(0, 0, surface.width, surface.height);
				ctx.scale(this._scale, this._scale);

				this._drawSlots(ctx, showGrid || false, hoverSlot);

				this._ball.draw(ctx);

				this._paddle.draw(ctx);

				this._leftWall.draw(ctx);
				this._topWall.draw(ctx);
				this._rightWall.draw(ctx);

				ctx.fillStyle = "#fff";
				ctx.font = "bold 12px sans-serif";
				ctx.fillText("Lives: " + this._lives, 20, 20);
			}
			ctx.restore();

			// DEBUG DRAW
			//this._world.DrawDebugData();
			
		}

		private _drawSlots(ctx: CanvasRenderingContext2D, showGrid: boolean, hoverSlot?: Slot): void {
			var xSlots = this._xSlots;
			var ySlots = this._ySlots;

			var slotWidth = this._slotWidth;
			var slotHeight = this._slotHeight;

			// DRAW SLOT GRID
			if (showGrid) {

				// HORIZONTAL LINES
				{
					ctx.strokeStyle = "#222";
					ctx.lineWidth = 2;

					var pixelsWide = xSlots * slotWidth;
					for (var y = 1; y < ySlots; ++y) {
						var py = y * slotHeight;
						ctx.beginPath();
						ctx.moveTo(0, py);
						ctx.lineTo(pixelsWide, py);
						ctx.closePath();
						ctx.stroke();
					}
				}

				// VERTICAL LINES
				{
					ctx.strokeStyle = "#444";
					ctx.lineWidth = 2;

					var pixelsHigh = ySlots * slotHeight;
					for (var x = 1; x < xSlots; ++x) {
						var px = x * slotWidth;
						ctx.beginPath();
						ctx.moveTo(px, 0);
						ctx.lineTo(px, pixelsHigh);
						ctx.closePath();
						ctx.stroke();
					}
				}

			}

			// DRAW BLOCKS
			var slots = this._slots;
			for (var s = 0, ss = slots.length; s < ss; ++s) {
				slots[s].draw(ctx);
			}

			// DRAW HOVER SLOT
			if (hoverSlot) {
				ctx.lineWidth = 2;
				ctx.strokeStyle = "#f00";
				ctx.strokeRect(hoverSlot.px, hoverSlot.py, slotWidth, slotHeight);
			}
		}

		resize(width: number, height: number): void {
			var editMode = (this._appState instanceof Editor);
			var offX = (editMode ? 200 : 0);
			var offY = (editMode ? 30 : 0);
			var natWidth = NATIVE_WIDTH;
			var natHeight = NATIVE_HEIGHT;
			var scale = this._scale = Math.min((width - offX) / natWidth, (height - offY) / natHeight);
			var newWidth = natWidth * scale;
			var newHeight = natHeight * scale;

			var surface = this._surface;
			var debugSurface = this._debugSurface;
			debugSurface.x = surface.x = Math.max(offX, (width - newWidth) / 2);
			debugSurface.y = surface.y = Math.max(offY, (height - newHeight) / 2);
			debugSurface.width = surface.width = newWidth;
			debugSurface.height = surface.height = newHeight;

			this._debugDraw.SetDrawScale(scale * PHYSICS_UNIT);
		}

	}

}