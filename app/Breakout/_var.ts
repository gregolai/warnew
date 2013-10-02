/// <reference path="_include.ts"/>

module Engine.Breakout {

	export var NATIVE_WIDTH = 800;
	export var NATIVE_HEIGHT = 600;

	export var PHYSICS_UNIT = 10; // n pixels = 1 physics unit
	export var PHYSICS_INV_UNIT = 1 / PHYSICS_UNIT; 

	export var WALL_WIDTH = 100;

	export var BALL_SLOWEST_SPEED = PHYSICS_INV_UNIT * 100;
	export var BALL_SPEED_EPSILON = 0.0001;
	export var BALL_ATTACH_HEIGHT = 30;

	export var PADDLE_DEFAULT_WIDTH = 100;
	export var PADDLE_HEIGHT = 20;
	export var PADDLE_BOTTOM_DISTANCE = 100;
	export var PADDLE_JOINT_HORIZ_DIST = 100;
	export var PADDLE_MAX_BOUNCE_ANGLE = Math.PI / 2.3;

	export var parseServerMessage = function (msg: string): any {
		var obj = JSON.parse(msg);
		if (!obj.success) {
			throw obj.payload || "Failed to parse server message.";
		}
		return obj.payload ? JSON.parse(obj.payload) : {};
	};
}