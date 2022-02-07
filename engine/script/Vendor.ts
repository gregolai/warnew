/// <reference path="_include.ts"/>

module Engine {

	export module Vendor {

		export var Box2D: VendorInfo = {
			debug: "Box2dWeb-2.1.a.3.js",
			release: "Box2dWeb-2.1.a.3.min.js"
		};
		export var Gamepad: VendorInfo = {
			debug: "gamepad.js"
		};
		export var History: VendorInfo = {
			debug: "native.history.js",
			release: "native.history.min.js"
		};
		// LOADED BY DEFAULT
		//export var JQuery: VendorInfo = {
		//	debug: "jquery-2.0.3.js",
		//	release: "jquery.min.js"
		//};
		export var Knockout: VendorInfo = {
			debug: "knockout-3.0.0.debug.js",
			release: "knockout-3.0.0.js"
		};
		export var LZMA: VendorInfo = {
			debug: "lzma.js"
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

		var _vendorListeners: { (): void; }[] = [];
		var _vendorsLoaded: boolean = false;

		export function onVendorsLoaded(callback?: () => void): void {
		
			if (_vendorsLoaded) {
				callback();
			} else {
				if (typeof callback === "undefined") {
					var listeners = _vendorListeners;
					for (var c = 0, cc = listeners.length; c < cc; ++c)
						listeners[c]();
					_vendorListeners.length = 0;
					_vendorsLoaded = true;
				} else {
					_vendorListeners.push(callback);
				}
			}

		}
	}

}