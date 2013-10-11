var Engine;
(function (Engine) {
    (function (Breakout) {
        (function (BlockType) {
            BlockType[BlockType["None"] = 0] = "None";
            BlockType[BlockType["Solid"] = 1] = "Solid";
        })(Breakout.BlockType || (Breakout.BlockType = {}));
        var BlockType = Breakout.BlockType;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        Breakout.NATIVE_WIDTH = 800;
        Breakout.NATIVE_HEIGHT = 600;

        Breakout.PHYSICS_UNIT = 10;
        Breakout.PHYSICS_INV_UNIT = 1 / Breakout.PHYSICS_UNIT;

        Breakout.WALL_WIDTH = 100;

        Breakout.BALL_SLOWEST_SPEED = Breakout.PHYSICS_INV_UNIT * 100;
        Breakout.BALL_SPEED_EPSILON = 0.0001;
        Breakout.BALL_ATTACH_HEIGHT = 30;

        Breakout.PADDLE_DEFAULT_WIDTH = 100;
        Breakout.PADDLE_HEIGHT = 20;
        Breakout.PADDLE_BOTTOM_DISTANCE = 100;
        Breakout.PADDLE_JOINT_HORIZ_DIST = 100;
        Breakout.PADDLE_MAX_BOUNCE_ANGLE = Math.PI / 2.3;

        Breakout.SERVER_DIRECTORY = "server/";
        Breakout.SERVER_GET_LEVEL_LIST = Breakout.SERVER_DIRECTORY + "getLevelList.php";
        Breakout.SERVER_LOAD_LEVEL = Breakout.SERVER_DIRECTORY + "loadLevel.php";
        Breakout.SERVER_SAVE_LEVEL = Breakout.SERVER_DIRECTORY + "saveLevel.php";

        Breakout.parseServerMessage = function (msg) {
            var obj = JSON.parse(msg);
            if (!obj.success) {
                throw obj.payload || "Failed to parse server message.";
            }
            return obj.payload ? JSON.parse(obj.payload) : {};
        };
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Ball = (function () {
            function Ball(stage, pos) {
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
                fixDef.shape = new b2CircleShape(radius * Breakout.PHYSICS_INV_UNIT);

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

                if (pos) {
                }
            }
            Object.defineProperty(Ball.prototype, "position", {
                get: function () {
                    var pos = this._body.GetPosition();
                    var pu = Breakout.PHYSICS_UNIT;
                    return new Engine.Vec2(pos.x * pu, pos.y * pu);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Ball.prototype, "body", {
                get: function () {
                    return this._body;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Ball.prototype, "velocity", {
                get: function () {
                    var vel = this._body.GetLinearVelocity();
                    return new Engine.Vec2(vel.x, vel.y);
                },
                enumerable: true,
                configurable: true
            });

            Ball.prototype.dispose = function () {
                this._stage.world.DestroyBody(this._body);
                this._body = null;
                this._stage = null;
            };

            Ball.prototype.setAngle = function (angle) {
                var x = Math.sin(angle);
                var y = -Math.cos(angle);

                var vel = new Box2D.Common.Math.b2Vec2(x, y);
                vel.Multiply(this._body.GetLinearVelocity().Length());
                this._body.SetLinearVelocity(vel);
            };

            Ball.prototype.setVelocity = function (x, y) {
                var vec = new Engine.Vec2(x, y);
                vec.setLength(Math.max(Breakout.BALL_SLOWEST_SPEED, vec.length));
                this._body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(vec.x, vec.y));
            };

            Ball.prototype.setSpeed = function (newSpeed) {
                this._speed = Math.max(Breakout.BALL_SLOWEST_SPEED, newSpeed);
            };

            Ball.prototype.onPaddleAttach = function (paddle) {
                this._moving = false;

                var paddlePos = paddle.position;
                var pu = Breakout.PHYSICS_INV_UNIT;
                var x = paddlePos.x * pu;
                var y = (paddlePos.y - Breakout.BALL_ATTACH_HEIGHT) * pu;
                this._body.SetPosition(new Box2D.Common.Math.b2Vec2(x, y));
            };

            Ball.prototype.onPaddleDetach = function (paddle) {
                this._moving = true;
            };

            Ball.prototype.onPaddleHit = function (paddle) {
            };

            Ball.prototype.update = function () {
                if (this._moving) {
                    var speed = this._speed;
                    var vel = this._body.GetLinearVelocity();
                    var diff = Math.abs(speed * speed - vel.LengthSquared());
                    if (diff > Breakout.BALL_SPEED_EPSILON) {
                        vel = vel.Copy();
                        vel.Normalize();
                        vel.Multiply(speed);
                        this._body.SetLinearVelocity(vel);
                    }
                } else {
                    this._body.SetLinearVelocity(new Box2D.Common.Math.b2Vec2());
                }
            };

            Ball.prototype.draw = function (ctx) {
                var pos = this._body.GetPosition().Copy();
                pos.Multiply(Breakout.PHYSICS_UNIT);
                var x = pos.x;
                var y = pos.y;

                ctx.fillStyle = "#fff";

                ctx.beginPath();
                ctx.arc(x, y, this._radius, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            };
            return Ball;
        })();
        Breakout.Ball = Ball;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Block = (function () {
            function Block(stage, slot, type) {
                var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
                var b2Body = Box2D.Dynamics.b2Body;
                var b2BodyDef = Box2D.Dynamics.b2BodyDef;
                var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

                var fixDef = new b2FixureDef();
                fixDef.friction = 0;
                var shape = fixDef.shape = new b2PolygonShape();
                shape.SetAsBox(stage.slotWidth / 2 * Breakout.PHYSICS_INV_UNIT, stage.slotHeight / 2 * Breakout.PHYSICS_INV_UNIT);

                var bodyDef = new b2BodyDef();
                bodyDef.allowSleep = true;
                bodyDef.position.Set((slot.px + stage.slotWidth / 2) * Breakout.PHYSICS_INV_UNIT, (slot.py + stage.slotHeight / 2) * Breakout.PHYSICS_INV_UNIT);
                bodyDef.type = b2Body.b2_staticBody;
                bodyDef.userData = this;

                this._body = stage.world.CreateBody(bodyDef);
                this._body.CreateFixture(fixDef);

                this._stage = stage;
                this._slot = slot;
                this._type = type;
            }
            Object.defineProperty(Block.prototype, "slot", {
                get: function () {
                    return this._slot;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Block.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });

            Block.prototype.dispose = function () {
                this._stage.world.DestroyBody(this._body);
                this._body = null;
                this._stage = null;
                this._slot = null;
            };

            Block.prototype.draw = function (ctx) {
                var stage = this._stage;
                var width = stage.slotWidth;
                var height = stage.slotHeight;

                var pos = this._body.GetPosition().Copy();
                pos.Multiply(Breakout.PHYSICS_UNIT);
                var x = pos.x - width * 0.5;
                var y = pos.y - height * 0.5;

                ctx.fillStyle = "#ff0";
                ctx.fillRect(x, y, width, height);
            };
            return Block;
        })();
        Breakout.Block = Block;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Paddle = (function () {
            function Paddle(stage, cx) {
                var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
                var b2Body = Box2D.Dynamics.b2Body;
                var b2BodyDef = Box2D.Dynamics.b2BodyDef;
                var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

                var pdw = Breakout.PADDLE_DEFAULT_WIDTH;
                var ph = Breakout.PADDLE_HEIGHT;

                var fixDef = new b2FixureDef();
                fixDef.friction = 0;
                var shape = fixDef.shape = new b2PolygonShape();
                shape.SetAsBox(pdw / 2 * Breakout.PHYSICS_INV_UNIT, ph / 2 * Breakout.PHYSICS_INV_UNIT);

                var bodyDef = new b2BodyDef();
                bodyDef.allowSleep = false;
                bodyDef.position.Set(cx * Breakout.PHYSICS_INV_UNIT, (Breakout.NATIVE_HEIGHT - Breakout.PADDLE_BOTTOM_DISTANCE) * Breakout.PHYSICS_INV_UNIT);
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
            Object.defineProperty(Paddle.prototype, "position", {
                get: function () {
                    var pos = this._body.GetPosition();
                    var pu = Breakout.PHYSICS_UNIT;
                    return new Engine.Vec2(pos.x * pu, pos.y * pu);
                },
                enumerable: true,
                configurable: true
            });

            Paddle.prototype.dispose = function () {
                this._stage.world.DestroyBody(this._body);
                this._body = null;
                this._stage = null;
            };

            Paddle.prototype.moveRight = function () {
                var body = this._body;
                var pos = body.GetPosition();
                pos.x += 5 * Breakout.PHYSICS_INV_UNIT;
                body.SetPosition(pos);
            };

            Paddle.prototype.moveLeft = function () {
                var body = this._body;
                var pos = body.GetPosition();
                pos.x -= 5 * Breakout.PHYSICS_INV_UNIT;
                body.SetPosition(pos);
            };

            Paddle.prototype.attachBall = function (ball) {
                var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
                var b2PrismaticJointDef = Box2D.Dynamics.Joints.b2PrismaticJointDef;
                var b2Body = Box2D.Dynamics.b2Body;
                var b2Vec2 = Box2D.Common.Math.b2Vec2;

                if (!this._attachedBall) {
                    var jy = Breakout.BALL_ATTACH_HEIGHT * Breakout.PHYSICS_INV_UNIT;
                    var jx = Breakout.PADDLE_JOINT_HORIZ_DIST * Breakout.PHYSICS_INV_UNIT;
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
            };

            Paddle.prototype.releaseBall = function () {
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
            };

            Paddle.prototype.calculateBounceAngle = function (x, y) {
                var paddlePos = this._body.GetPosition();

                var w = this._innerWidth / 2 * Breakout.PHYSICS_INV_UNIT;
                var paddleLeft = paddlePos.x - w;
                var paddleRight = paddlePos.x + w;

                var mba = Breakout.PADDLE_MAX_BOUNCE_ANGLE;

                var ratio = (x - paddleLeft) / (paddleRight - paddleLeft);
                ratio = Engine.MathUtil.clamp(ratio, 0, 1);

                return ratio * (mba * 2) - mba;
            };

            Paddle.prototype.draw = function (ctx) {
                var pos = this._body.GetPosition().Copy();
                pos.Multiply(Breakout.PHYSICS_UNIT);

                var x = pos.x;
                var y = pos.y;

                var radius = this._height * 0.5;
                var top = y - radius;
                var innerLeft = x - this._innerWidth * 0.5;
                var innerRight = x + this._innerWidth * 0.5;

                ctx.fillStyle = "#7f7";
                ctx.fillRect(innerLeft, top, this._innerWidth, this._height);
            };
            Paddle._vertices = [
                [0, -1],
                [0.3827, -0.9239],
                [0.7071, -0.7071],
                [0.9239, -0.3827],
                [1, 0],
                [0.9239, 0.3827],
                [0.7071, 0.7071],
                [0.3827, 0.9239],
                [0, 1],
                [0, 1],
                [-0.3827, 0.9239],
                [-0.7071, 0.7071],
                [-0.9239, 0.3827],
                [-1, 0],
                [-0.9239, -0.3827],
                [-0.7071, -0.7071],
                [-0.3827, -0.9239],
                [0, -1]
            ];
            return Paddle;
        })();
        Breakout.Paddle = Paddle;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Slot = (function () {
            function Slot(stage, index, px, py) {
                this._stage = stage;
                this._index = index;
                this._px = px;
                this._py = py;
                this._block = null;
            }
            Object.defineProperty(Slot.prototype, "px", {
                get: function () {
                    return this._px;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Slot.prototype, "py", {
                get: function () {
                    return this._py;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Slot.prototype, "block", {
                get: function () {
                    return this._block;
                },
                enumerable: true,
                configurable: true
            });

            Slot.prototype.dispose = function () {
                this._stage = null;
                this.removeBlock();
            };

            Slot.prototype.addBlock = function (blockType) {
                this.removeBlock();

                if (blockType !== Breakout.BlockType.None) {
                    this._block = new Breakout.Block(this._stage, this, blockType);
                }
            };

            Slot.prototype.removeBlock = function () {
                if (this._block) {
                    this._block.dispose();
                    this._block = null;
                }
            };

            Slot.prototype.draw = function (ctx) {
                if (this._block) {
                    this._block.draw(ctx);
                }
            };
            return Slot;
        })();
        Breakout.Slot = Slot;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var MyContactListener = (function () {
            function MyContactListener(stage) {
                this._stage = stage;
            }
            MyContactListener.prototype.BeginContact = function (contact) {
                var stage = this._stage;
                var u0 = contact.GetFixtureA().GetBody().GetUserData();
                var u1 = contact.GetFixtureB().GetBody().GetUserData();

                var block = null;
                var ball = null;
                if (u0 instanceof Breakout.Block && u1 instanceof Breakout.Ball) {
                    block = u0;
                    ball = u1;
                } else if (u1 instanceof Breakout.Block && u0 instanceof Breakout.Ball) {
                    block = u1;
                    ball = u0;
                }

                if (block) {
                    stage.addBlockToRemove(block);
                }
            };

            MyContactListener.prototype.EndContact = function (contact) {
            };

            MyContactListener.prototype.PreSolve = function (contact, oldManifold) {
            };

            MyContactListener.prototype.PostSolve = function (contact, impulse) {
                var u0 = contact.GetFixtureA().GetBody().GetUserData();
                var u1 = contact.GetFixtureB().GetBody().GetUserData();

                var ball = null;
                var paddle = null;
                if (u0 instanceof Breakout.Ball && u1 instanceof Breakout.Paddle) {
                    ball = u0;
                    paddle = u1;
                } else if (u1 instanceof Breakout.Ball && u0 instanceof Breakout.Paddle) {
                    ball = u1;
                    paddle = u0;
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
            };
            return MyContactListener;
        })();
        Breakout.MyContactListener = MyContactListener;

        var Stage = (function () {
            function Stage(appState) {
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
            Object.defineProperty(Stage.prototype, "world", {
                get: function () {
                    return this._world;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stage.prototype, "slotWidth", {
                get: function () {
                    return this._slotWidth;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stage.prototype, "slotHeight", {
                get: function () {
                    return this._slotHeight;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stage.prototype, "slots", {
                get: function () {
                    return this._slots;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stage.prototype, "paddle", {
                get: function () {
                    return this._paddle;
                },
                enumerable: true,
                configurable: true
            });

            Stage.prototype._cleanLevel = function () {
                var slots = this._slots;
                for (var s = 0, ss = slots.length; s < ss; ++s) {
                    slots[s].dispose();
                }

                if (this._paddle) {
                    this._paddle.dispose();
                }

                if (this._ball) {
                    this._ball.dispose();
                }

                if (this._leftWall) {
                    this._leftWall.dispose();
                }
                if (this._topWall) {
                    this._topWall.dispose();
                }
                if (this._rightWall) {
                    this._rightWall.dispose();
                }
            };

            Stage.prototype.load = function (data) {
                this._cleanLevel();

                data = data || {};

                var xSlots = this._xSlots = data.xSlots || 10;
                var ySlots = this._ySlots = data.ySlots || 18;

                var slotWidth = this._slotWidth = Breakout.NATIVE_WIDTH / xSlots;
                var slotHeight = this._slotHeight = (Breakout.NATIVE_HEIGHT - 200) / ySlots;

                var slots = this._slots = [];

                var blockTypes = data.blocks || [];
                var index = 0;
                for (var y = 0; y < ySlots; ++y) {
                    for (var x = 0; x < xSlots; ++x) {
                        var slot = new Breakout.Slot(this, index, x * slotWidth, y * slotHeight);

                        var blockType = blockTypes[index];
                        if (blockType) {
                            slot.addBlock(blockType);
                        }

                        slots.push(slot);

                        ++index;
                    }
                }

                var paddle = this._paddle = new Breakout.Paddle(this, 400);

                var ball = this._ball = new Breakout.Ball(this, new Engine.Vec2(600, 450));

                paddle.attachBall(ball);

                var leftWall = this._leftWall = new Breakout.Wall(this, "left");
                var topWall = this._topWall = new Breakout.Wall(this, "top");
                var rightWall = this._rightWall = new Breakout.Wall(this, "right");

                this._lives = 3;
            };

            Stage.prototype.save = function () {
                var data = {};

                data.xSlots = this._xSlots;
                data.ySlots = this._ySlots;
                data.blocks = [];

                var slots = this._slots;
                for (var s = 0, ss = slots.length; s < ss; ++s) {
                    var slot = slots[s];
                    var block = slot.block;
                    data.blocks.push(block ? block.type : Breakout.BlockType.None);
                }

                return data;
            };

            Stage.prototype._inBounds = function (ix, iy) {
                return ix >= 0 && ix <= this._xSlots && iy >= 0 && iy < this._ySlots;
            };

            Stage.prototype.getSlotAtPixel = function (px, py) {
                px = (px - this._surface.x) / this._scale;
                py = (py - this._surface.y) / this._scale;

                var ix = Math.floor(px / this._slotWidth);
                var iy = Math.floor(py / this._slotHeight);
                if (!this._inBounds(ix, iy)) {
                    return null;
                }
                return this._slots[ix + iy * this._xSlots];
            };

            Stage.prototype.addBlockToRemove = function (block) {
                if (this._blocksToRemove.indexOf(block) === -1) {
                    this._blocksToRemove.push(block);
                }
            };

            Stage.prototype.update = function (dt) {
                var blocksToRemove = this._blocksToRemove;
                for (var b = blocksToRemove.length - 1; b !== -1; --b) {
                    var block = blocksToRemove[b];
                    block.slot.removeBlock();
                    blocksToRemove.pop();
                }

                var ball = this._ball;

                ball.update();

                if (ball.position.y > Breakout.NATIVE_HEIGHT) {
                    --this._lives;
                    if (this._lives <= 0) {
                        if (this._appState instanceof Breakout.LiveGame) {
                            var liveGame = this._appState;
                            liveGame.youLose();
                        }
                    } else {
                        this._ball = new Breakout.Ball(this, new Engine.Vec2(600, 600));
                        this._paddle.attachBall(this._ball);
                    }
                }

                var paddle = this._paddle;

                if (this._appState instanceof Breakout.LiveGame) {
                    if (Engine.Input.isKeyDown(Engine.Key.KEY_MOUSE_LEFT)) {
                        paddle.releaseBall();
                    }
                    if (Engine.Input.isKeyDown(Engine.Key.KEY_LEFT)) {
                        paddle.moveLeft();
                    }
                    if (Engine.Input.isKeyDown(Engine.Key.KEY_RIGHT)) {
                        paddle.moveRight();
                    }
                }

                this._world.Step(1 / 60, 8, 3);
            };

            Stage.prototype.draw = function (showGrid, hoverSlot) {
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
            };

            Stage.prototype._drawSlots = function (ctx, showGrid, hoverSlot) {
                var xSlots = this._xSlots;
                var ySlots = this._ySlots;

                var slotWidth = this._slotWidth;
                var slotHeight = this._slotHeight;

                if (showGrid) {
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

                var slots = this._slots;
                for (var s = 0, ss = slots.length; s < ss; ++s) {
                    slots[s].draw(ctx);
                }

                if (hoverSlot) {
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "#f00";
                    ctx.strokeRect(hoverSlot.px, hoverSlot.py, slotWidth, slotHeight);
                }
            };

            Stage.prototype.resize = function (width, height) {
                var editMode = (this._appState instanceof Breakout.Editor);
                var offX = (editMode ? 200 : 0);
                var offY = (editMode ? 30 : 0);
                var natWidth = Breakout.NATIVE_WIDTH;
                var natHeight = Breakout.NATIVE_HEIGHT;
                var scale = this._scale = Math.min((width - offX) / natWidth, (height - offY) / natHeight);
                var newWidth = natWidth * scale;
                var newHeight = natHeight * scale;

                var surface = this._surface;
                var debugSurface = this._debugSurface;
                debugSurface.x = surface.x = Math.max(offX, (width - newWidth) / 2);
                debugSurface.y = surface.y = Math.max(offY, (height - newHeight) / 2);
                debugSurface.width = surface.width = newWidth;
                debugSurface.height = surface.height = newHeight;

                this._debugDraw.SetDrawScale(scale * Breakout.PHYSICS_UNIT);
            };
            return Stage;
        })();
        Breakout.Stage = Stage;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Wall = (function () {
            function Wall(stage, side) {
                var b2FixureDef = Box2D.Dynamics.b2FixtureDef;
                var b2Body = Box2D.Dynamics.b2Body;
                var b2BodyDef = Box2D.Dynamics.b2BodyDef;
                var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

                var fixDef = new b2FixureDef();
                fixDef.friction = 0;
                var shape = fixDef.shape = new b2PolygonShape();
                if (side === "left" || side === "right") {
                    shape.SetAsBox(Breakout.WALL_WIDTH / 2 * Breakout.PHYSICS_INV_UNIT, (Breakout.NATIVE_HEIGHT / 2 + Breakout.WALL_WIDTH) * Breakout.PHYSICS_INV_UNIT);
                } else {
                    shape.SetAsBox((Breakout.NATIVE_WIDTH / 2 + Breakout.WALL_WIDTH) * Breakout.PHYSICS_INV_UNIT, Breakout.WALL_WIDTH / 2 * Breakout.PHYSICS_INV_UNIT);
                }

                var bodyDef = new b2BodyDef();
                bodyDef.allowSleep = true;
                if (side === "left") {
                    bodyDef.position.Set(-Breakout.WALL_WIDTH / 2 * Breakout.PHYSICS_INV_UNIT, Breakout.NATIVE_HEIGHT / 2 * Breakout.PHYSICS_INV_UNIT);
                } else if (side === "right") {
                    bodyDef.position.Set((Breakout.NATIVE_WIDTH + Breakout.WALL_WIDTH / 2) * Breakout.PHYSICS_INV_UNIT, Breakout.NATIVE_HEIGHT / 2 * Breakout.PHYSICS_INV_UNIT);
                } else {
                    bodyDef.position.Set(Breakout.NATIVE_WIDTH / 2 * Breakout.PHYSICS_INV_UNIT, -Breakout.WALL_WIDTH / 2 * Breakout.PHYSICS_INV_UNIT);
                }
                bodyDef.type = b2Body.b2_staticBody;
                bodyDef.userData = this;

                this._body = stage.world.CreateBody(bodyDef);
                this._body.CreateFixture(fixDef);

                this._stage = stage;
                this._side = side;
            }
            Wall.prototype.dispose = function () {
                this._stage.world.DestroyBody(this._body);
                this._body = null;
                this._stage = null;
            };

            Wall.prototype.draw = function (ctx) {
            };
            return Wall;
        })();
        Breakout.Wall = Wall;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Editor = (function (_super) {
            __extends(Editor, _super);
            function Editor() {
                _super.call(this, {
                    hasUI: true
                });

                this._bgSurface = this.create2dSurface();
                this._stage = new Breakout.Stage(this);

                this._hoverSlot = ko.observable(null);
                this._levelList = ko.observableArray();
            }
            Object.defineProperty(Editor.prototype, "levelList", {
                get: function () {
                    return this._levelList();
                },
                enumerable: true,
                configurable: true
            });

            Editor.prototype.onUICreated = function (dom) {
                var self = this;
                dom.on("click", ".backToMenu", function () {
                    Engine.App.instance.setState("MainMenu");
                });
                dom.on("click", ".levelData", function () {
                    dom.find(".loadSave").hide();
                    $(this).siblings(".loadSave").show();
                });
                dom.on("click", ".btnNew", function () {
                    self._newLevel();
                });
                dom.on("click", ".btnSave", function () {
                    var data = ko.dataFor(this);
                    self._saveLevel(data.id);
                });

                dom.on("click", ".btnLoad", function () {
                    var data = ko.dataFor(this);
                    self._loadLevel(data.id);
                });
            };

            Editor.prototype.begin = function (callback) {
                this._refreshLevelList();
                this._newLevel();
                callback();
            };

            Editor.prototype.end = function () {
            };

            Editor.prototype.update = function (dt) {
                var hoverSlot = this._hoverSlot();

                if (Engine.Input.isKeyDown(Engine.Key.KEY_MOUSE_LEFT)) {
                    if (hoverSlot) {
                        if (Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT)) {
                            hoverSlot.removeBlock();
                        } else {
                            hoverSlot.addBlock(Breakout.BlockType.Solid);
                        }
                    }
                }
            };

            Editor.prototype.draw = function () {
                var bgSurface = this._bgSurface;
                var bgCtx = bgSurface.context;

                bgCtx.fillStyle = "#556";
                bgCtx.fillRect(0, 0, bgSurface.width, bgSurface.height);

                this._stage.draw(true, this._hoverSlot());
            };

            Editor.prototype.onKeyDown = function (key) {
            };

            Editor.prototype.onMouseMove = function (x, y) {
                var slot = this._stage.getSlotAtPixel(x, y);
                var oldSlot = this._hoverSlot();
                if (slot !== oldSlot) {
                    this._hoverSlot(slot);
                }
            };

            Editor.prototype.onMouseDown = function (x, y, button) {
            };

            Editor.prototype.onResize = function (width, height) {
                this._bgSurface.width = width;
                this._bgSurface.height = height;

                this._stage.resize(width, height);
            };

            Editor.prototype._refreshLevelList = function () {
                var self = this;
                $.post(Breakout.SERVER_GET_LEVEL_LIST, {}, function (msg) {
                    var wrappers;
                    try  {
                        wrappers = Breakout.parseServerMessage(msg);
                    } catch (ex) {
                        console.log("Failed to get level list: " + ex);
                        return;
                    }
                    var levelList = [];
                    for (var i = 0, ii = wrappers.length; i < ii; ++i) {
                        var wrapper = wrappers[i];
                        var data = JSON.parse(wrapper.data);

                        data.id = wrapper.id;
                        levelList.push(data);
                    }
                    self._levelList(levelList);
                });
            };

            Editor.prototype._newLevel = function () {
                this._stage.load();
            };

            Editor.prototype._loadLevel = function (id, callback) {
                var self = this;
                $.post(Breakout.SERVER_LOAD_LEVEL, {
                    id: id
                }, function (msg) {
                    var data;
                    try  {
                        data = Breakout.parseServerMessage(msg);
                    } catch (ex) {
                        console.log("Failed to load level: " + ex);
                        return;
                    }

                    self._stage.load(data.stage);

                    if (callback) {
                        callback();
                    }
                });
            };

            Editor.prototype._saveLevel = function (id) {
                var data = {};

                data.id = id;
                data.name = "Level " + (id + 1);
                data.stage = this._stage.save();

                $.post(Breakout.SERVER_SAVE_LEVEL, {
                    id: id,
                    data: JSON.stringify(data)
                }, function (msg) {
                    try  {
                        var success = Breakout.parseServerMessage(msg);
                        console.log("save success");
                    } catch (ex) {
                        console.log("Failed to save level: " + ex);
                        return;
                    }
                });
            };
            return Editor;
        })(Engine.AppState);
        Breakout.Editor = Editor;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        (function (MainMenuPage) {
            MainMenuPage[MainMenuPage["Main"] = 0] = "Main";
            MainMenuPage[MainMenuPage["Load"] = 1] = "Load";
        })(Breakout.MainMenuPage || (Breakout.MainMenuPage = {}));
        var MainMenuPage = Breakout.MainMenuPage;

        var MainMenu = (function (_super) {
            __extends(MainMenu, _super);
            function MainMenu() {
                _super.call(this, {
                    hasUI: true
                });

                this._page = ko.observable(MainMenuPage.Main);
            }
            Object.defineProperty(MainMenu.prototype, "mainPage", {
                get: function () {
                    return this._page() === MainMenuPage.Main;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(MainMenu.prototype, "loadPage", {
                get: function () {
                    return this._page() === MainMenuPage.Load;
                },
                enumerable: true,
                configurable: true
            });

            MainMenu.prototype.onUICreated = function (dom) {
                var self = this;
                dom.on("click", ".backButton", function () {
                    self._page(MainMenuPage.Main);
                });

                dom.on("click", ".playGame", function () {
                    Engine.App.instance.setState("LiveGame");
                });

                dom.on("click", ".loadGame", function () {
                    self._page(MainMenuPage.Load);
                });

                dom.on("click", ".editor", function () {
                    Engine.App.instance.setState("Editor");
                });
            };
            return MainMenu;
        })(Engine.AppState);
        Breakout.MainMenu = MainMenu;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var LiveGame = (function (_super) {
            __extends(LiveGame, _super);
            function LiveGame() {
                _super.call(this, {
                    hasUI: true
                });

                this._levelId = 0;
                this._stage = new Breakout.Stage(this);
                this._showResetScreen = ko.observable(false);
            }
            Object.defineProperty(LiveGame.prototype, "levelID", {
                get: function () {
                    return this._levelId;
                },
                set: function (value) {
                    this._levelId = value;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(LiveGame.prototype, "showResetScreen", {
                get: function () {
                    return this._showResetScreen();
                },
                enumerable: true,
                configurable: true
            });

            LiveGame.prototype.onUICreated = function (dom) {
                var self = this;
                dom.on("click", ".playAgain", function () {
                    self._reset(function () {
                    });
                });

                dom.on("click", ".mainMenu", function () {
                    Engine.App.instance.setState("MainMenu");
                });
            };

            LiveGame.prototype.begin = function (callback) {
                var self = this;
                Engine.AssetManager.load({}, function () {
                    self._reset(callback);
                });
            };

            LiveGame.prototype._reset = function (callback) {
                var self = this;
                this._loadLevel(this._levelId, function () {
                    self._showResetScreen(false);
                    callback();
                });
            };

            LiveGame.prototype.update = function (dt) {
                if (!this._showResetScreen()) {
                    this._stage.update(dt);
                }
            };

            LiveGame.prototype.draw = function () {
                this._stage.draw(true);
            };

            LiveGame.prototype.onResize = function (width, height) {
                this._stage.resize(width, height);
            };

            LiveGame.prototype.youLose = function () {
                this._showResetScreen(true);
            };

            LiveGame.prototype._loadLevel = function (id, callback) {
                var self = this;
                $.post("server/loadLevel.php", {
                    id: id
                }, function (msg) {
                    var data;
                    try  {
                        data = Breakout.parseServerMessage(msg);
                    } catch (ex) {
                        console.log("Failed to load level: " + ex);
                        return;
                    }

                    self._stage.load(data.stage);

                    callback();
                });
            };
            return LiveGame;
        })(Engine.AppState);
        Breakout.LiveGame = LiveGame;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (Breakout) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game() {
                _super.call(this, {
                    initialState: "MainMenu",
                    states: [
                        "Editor",
                        "LiveGame",
                        "MainMenu"
                    ],
                    allowGamepad: true,
                    allowTouch: true,
                    cacheAssets: false,
                    disableContextMenu: false,
                    enable2dPhysics: true,
                    enable3d: true,
                    showStats: true
                });
            }
            return Game;
        })(Engine.App);
        Breakout.Game = Game;
    })(Engine.Breakout || (Engine.Breakout = {}));
    var Breakout = Engine.Breakout;
})(Engine || (Engine = {}));
