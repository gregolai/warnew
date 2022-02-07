var Engine;
(function (Engine) {
    var Rect = (function () {
        function Rect(x, y, width, height) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof width === "undefined") { width = 0; }
            if (typeof height === "undefined") { height = 0; }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        Object.defineProperty(Rect.prototype, "right", {
            get: function () {
                return this.x + this.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "bottom", {
            get: function () {
                return this.y + this.height;
            },
            enumerable: true,
            configurable: true
        });

        Rect.prototype.clone = function () {
            return new Rect(this.x, this.y, this.width, this.height);
        };

        Rect.prototype.set = function (a, y, width, height) {
            if (a instanceof Rect) {
                this.x = a.x;
                this.y = a.y;
                this.width = a.width;
                this.height = a.height;
            } else {
                this.x = a;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            return this;
        };

        Rect.prototype.toArray = function () {
            return [this.x, this.y, this.width, this.height];
        };
        Rect.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            this.width = v[2] || 0;
            this.height = v[3] || 0;
            return this;
        };

        Rect.prototype.setPosition = function (a, y) {
            if (a instanceof Engine.Vec2) {
                this.x = a.x;
                this.y = a.y;
            } else {
                this.x = a;
                this.y = y;
            }
            return this;
        };

        Rect.prototype.setSize = function (a, height) {
            if (a instanceof Engine.Vec2) {
                this.width = a.x;
                this.height = a.y;
            } else {
                this.width = a;
                this.height = height;
            }
            return this;
        };

        Rect.prototype.fromPoints = function (p0, p1) {
            if (p0.x < p1.x) {
                this.x = p0.x;
                this.width = p1.x - p0.x;
            } else {
                this.x = p1.x;
                this.width = p0.x - p1.x;
            }
            if (p0.y < p1.y) {
                this.y = p0.y;
                this.height = p1.y - p0.y;
            } else {
                this.y = p1.y;
                this.height = p0.y - p1.y;
            }
            return this;
        };

        Rect.prototype.union = function (a, y, width, height) {
            var ux, uy;
            if (a instanceof Rect) {
                ux = Math.min(this.x, a.x);
                uy = Math.min(this.y, a.y);
                this.width = Math.max(this.x + this.width, a.x + a.width) - ux;
                this.height = Math.max(this.y + this.height, a.y + a.height) - uy;
            } else {
                ux = Math.min(this.x, a);
                uy = Math.min(this.y, y);
                this.width = Math.max(this.x + this.width, a + width) - ux;
                this.height = Math.max(this.y + this.height, y + height) - uy;
            }
            this.x = ux;
            this.y = uy;

            return this;
        };

        Rect.prototype.containsPoint = function (a, y) {
            if (a instanceof Engine.Vec2) {
                return a.x >= this.x && a.x <= this.x + this.width && a.y >= this.y && a.y <= this.y + this.height;
            } else {
                return a >= this.x && a <= this.x + this.width && y >= this.y && y <= this.y + this.height;
            }
        };

        Rect.prototype.containsRect = function (a, y, width, height) {
            if (a instanceof Rect) {
                return a.x >= this.x && a.x + a.width <= this.x + this.width && a.y >= this.y && a.y + a.height <= this.y + this.height;
            } else {
                return a >= this.x && a + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height;
            }
        };

        Rect.prototype.intersectsRect = function (a, y, width, height) {
            if (a instanceof Rect) {
                return a.x <= this.x + this.width && a.x + a.width >= this.x && a.y <= this.y + this.height && a.y + a.height >= this.y;
            } else {
                return a <= this.x + this.width && a + width >= this.x && y <= this.y + this.height && y + height >= this.y;
            }
        };

        Rect.prototype.getCenter = function () {
            return new Engine.Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
        };
        return Rect;
    })();
    Engine.Rect = Rect;
})(Engine || (Engine = {}));
