var Engine;
(function (Engine) {
    var Vec2 = (function () {
        function Vec2(x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Vec2.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec2.prototype, "lengthSqr", {
            get: function () {
                return this.x * this.x + this.y * this.y;
            },
            enumerable: true,
            configurable: true
        });

        Vec2.prototype.clone = function () {
            return new Vec2(this.x, this.y);
        };

        Vec2.prototype.set = function (a, y) {
            if (y === undefined) {
                this.x = a.x;
                this.y = a.y;
            } else {
                this.x = a;
                this.y = y;
            }
            return this;
        };

        Vec2.prototype.toArray = function () {
            return [this.x, this.y];
        };
        Vec2.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            return this;
        };

        Vec2.prototype.add = function (a, y) {
            if (y === undefined) {
                this.x += a.x;
                this.y += a.y;
            } else {
                this.x += a;
                this.y += y;
            }
            return this;
        };

        Vec2.prototype.subtract = function (a, y) {
            if (y === undefined) {
                this.x -= a.x;
                this.y -= a.y;
            } else {
                this.x -= a;
                this.y -= y;
            }
            return this;
        };

        Vec2.prototype.multiply = function (a, y) {
            if (y === undefined) {
                if (a instanceof Vec2) {
                    this.x *= a.x;
                    this.y *= a.y;
                } else {
                    this.x *= a;
                    this.y *= a;
                }
            } else {
                this.x *= a;
                this.y *= y;
            }
            return this;
        };

        Vec2.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
            return this;
        };

        Vec2.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
            return this;
        };

        Vec2.prototype.normalize = function () {
            if (this.lengthSqr === 0) {
                this.x = 0;
                this.y = 1;
            } else {
                var invLen = 1.0 / this.length;
                this.x *= invLen;
                this.y *= invLen;
            }
            return this;
        };

        Vec2.prototype.lerp = function (v, t) {
            this.x += t * (v.x - this.x);
            this.y += t * (v.y - this.y);
            return this;
        };

        Vec2.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y;
        };

        Vec2.prototype.distance = function (a, y) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
            } else {
                var dx = this.x - a;
                var dy = this.y - y;
            }
            return Math.sqrt(dx * dx + dy * dy);
        };

        Vec2.prototype.distanceSqr = function (a, y) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
            } else {
                var dx = this.x - a;
                var dy = this.y - y;
            }
            return dx * dx + dy * dy;
        };
        return Vec2;
    })();
    Engine.Vec2 = Vec2;
})(Engine || (Engine = {}));
