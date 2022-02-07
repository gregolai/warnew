var Engine;
(function (Engine) {
    (function (Vendor) {
        Vendor.Box2D = {
            debug: "Box2dWeb-2.1.a.3.js",
            release: "Box2dWeb-2.1.a.3.min.js"
        };
        Vendor.Gamepad = {
            debug: "gamepad.js"
        };
        Vendor.History = {
            debug: "native.history.js",
            release: "native.history.min.js"
        };

        Vendor.Knockout = {
            debug: "knockout-3.0.0.debug.js",
            release: "knockout-3.0.0.js"
        };
        Vendor.LZMA = {
            debug: "lzma.js"
        };
        Vendor.SocketIO = {
            debug: "socket.io.js",
            release: "socket.io.min.js"
        };
        Vendor.Stats = {
            release: "stats.min.js"
        };
        Vendor.Three = {
            release: "three.min.js"
        };
        Vendor.Underscore = {
            debug: "underscore.js",
            release: "underscore-min.js"
        };

        var _vendorListeners = [];
        var _vendorsLoaded = false;

        function onVendorsLoaded(callback) {
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
        Vendor.onVendorsLoaded = onVendorsLoaded;
    })(Engine.Vendor || (Engine.Vendor = {}));
    var Vendor = Engine.Vendor;
})(Engine || (Engine = {}));
