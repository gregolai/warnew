/// <reference path="_include.ts" />
var AppLauncher;
(function (AppLauncher) {
    var Surface2D = (function () {
        function Surface2D(zIndex) {
            this._canvas = document.createElement("canvas");
            this._canvas.style.position = "absolute";

            this._context = this._canvas.getContext("2d");

            this.zIndex = 0;
            this.x = 0;
            this.y = 0;
            this.width = 1;
            this.height = 1;
        }
        Object.defineProperty(Surface2D.prototype, "context", {
            get: function () {
                return this._context;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "zIndex", {
            get: function () {
                return this._zIndex;
            },
            set: function (value) {
                this._canvas.style.zIndex = "" + value;
                this._zIndex = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._canvas.style.left = value + "px";
                this._x = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._canvas.style.top = value + "px";
                this._y = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._canvas.width = value;
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._canvas.height = value;
                this._height = value;
            },
            enumerable: true,
            configurable: true
        });
        return Surface2D;
    })();
    AppLauncher.Surface2D = Surface2D;
})(AppLauncher || (AppLauncher = {}));
