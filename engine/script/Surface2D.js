var Engine;
(function (Engine) {
    var Surface2D = (function () {
        function Surface2D(c) {
            if (c instanceof HTMLCanvasElement) {
                this.canvas = c;
            } else {
                this.canvas = document.createElement("canvas");
                this.canvas.style.position = "absolute";
                c.appendChild(this.canvas);
            }
            this.context = this.canvas.getContext("2d");
            this.rect = new Engine.Rect();

            this.canvas.style.zIndex = "0";
        }
        Object.defineProperty(Surface2D.prototype, "x", {
            get: function () {
                return this.rect.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Surface2D.prototype, "y", {
            get: function () {
                return this.rect.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Surface2D.prototype, "width", {
            get: function () {
                return this.rect.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Surface2D.prototype, "height", {
            get: function () {
                return this.rect.height;
            },
            enumerable: true,
            configurable: true
        });

        Surface2D.prototype.dispose = function () {
            var container = this.canvas.parentNode;
            if (container)
                container.removeChild(this.canvas);

            this.canvas = null;
            this.context = null;
        };

        Surface2D.prototype.setPosition = function (a, y) {
            if (a instanceof Engine.Vec2) {
                this.canvas.style.left = (this.rect.x = a.x) + "px";
                this.canvas.style.top = (this.rect.y = a.y) + "px";
            } else {
                this.canvas.style.left = (this.rect.x = a) + "px";
                this.canvas.style.top = (this.rect.y = y) + "px";
            }
        };

        Surface2D.prototype.setSize = function (a, y) {
            if (a instanceof Engine.Vec2) {
                this.canvas.width = this.rect.width = a.x;
                this.canvas.height = this.rect.height = a.y;
            } else {
                this.canvas.width = this.rect.width = a;
                this.canvas.height = this.rect.height = y;
            }
        };

        Surface2D.prototype.setRect = function (a, y, width, height) {
            if (a instanceof Engine.Rect) {
                this.setPosition(a.x, a.y);
                this.setSize(a.width, a.height);
            } else {
                this.setPosition(a, y);
                this.setSize(width, height);
            }
        };
        return Surface2D;
    })();
    Engine.Surface2D = Surface2D;
})(Engine || (Engine = {}));
