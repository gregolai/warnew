/// <reference path="_include.ts"/>

module Engine {

	export var MAX_INT = 0x7fffffff;

	export var BIT_0 = 0x1;
	export var BIT_1 = 0x2;
	export var BIT_2 = 0x4;
	export var BIT_3 = 0x8;
	export var BIT_4 = 0x10;
	export var BIT_5 = 0x20;
	export var BIT_6 = 0x40;
	export var BIT_7 = 0x80;
	export var BIT_8 = 0x100;
	export var BIT_9 = 0x200;
	export var BIT_10 = 0x400;
	export var BIT_11 = 0x800;
	export var BIT_12 = 0x1000;
	export var BIT_13 = 0x2000;
	export var BIT_14 = 0x4000;
	export var BIT_15 = 0x8000;
	export var BIT_16 = 0x10000;
	export var BIT_17 = 0x20000;
	export var BIT_18 = 0x40000;
	export var BIT_19 = 0x80000;
	export var BIT_20 = 0x100000;
	export var BIT_21 = 0x200000;
	export var BIT_22 = 0x400000;
	export var BIT_23 = 0x800000;
	export var BIT_24 = 0x1000000;
	export var BIT_25 = 0x2000000;
	export var BIT_26 = 0x4000000;
	export var BIT_27 = 0x8000000;
	export var BIT_28 = 0x10000000;
	export var BIT_29 = 0x20000000;
	export var BIT_30 = 0x40000000;
	// NO BIT 31, BECAUSE OF ISSUES WITH SIGNED/UNSIGNED NUMBERS

	export var ROOT_DIRECTORY = "./";

	export var VENDOR_DIRECTORY = ROOT_DIRECTORY + "vendor/script/";

	export var ASSET_DIRECTORY = ROOT_DIRECTORY + "asset/";


	export var GAME_DIRECTORY = ROOT_DIRECTORY + "game/";
	export var GAME_SCRIPT_DIRECTORY = GAME_DIRECTORY + "script/";
	export var GAME_STATE_DIRECTORY = GAME_SCRIPT_DIRECTORY + "state/";

	/*
	// Centralize vendors. Add new vendors as needed
	export module Vendor {
		export var Box2D: VendorInfo = {
			debug: "Box2dWeb-2.1.a.3.js",
			release: "Box2dWeb-2.1.a.3.min.js"
		};
		export var Compressor: VendorInfo = {
			debug: "compressor.js"
		};
		export var Gamepad: VendorInfo = {
			debug: "gamepad.js"
		};
		export var JQuery: VendorInfo = {
			debug: "jquery-2.0.3.js",
			release: "jquery.min.js"
		};
		export var JQueryBBQ: VendorInfo = {
			requires: ["JQuery"],
			debug: "jquery.ba-bbq.js",
			release: "jquery.ba-bbq.min.js"
		};
		export var Knockout: VendorInfo = {
			debug: "knockout-3.0.0.debug.js",
			release: "knockout-3.0.0.js"
		};
		export var SocketIO: VendorInfo = {
			debug: "socket.io.js",
			release: "socket.io.min.js"
		};
		export var Stats: VendorInfo = {
			release: "stats.min.js"
		};
		export var Three: VendorInfo = {
			release: "three.min.js"
		};
		export var Underscore: VendorInfo = {
			debug: "underscore.js",
			release: "underscore-min.js"
		};
	}
	*/

}