var Engine;
(function (Engine) {
    var Vec3 = (function () {
        function Vec3(x, y, z) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof z === "undefined") { z = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Object.defineProperty(Vec3.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec3.prototype, "lengthSqr", {
            get: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            },
            enumerable: true,
            configurable: true
        });

        Vec3.prototype.clone = function () {
            return new Vec3(this.x, this.y, this.z);
        };

        Vec3.prototype.set = function (a, y, z) {
            if (y === undefined) {
                this.x = a.x;
                this.y = a.y;
                this.z = a.z;
            } else {
                this.x = a;
                this.y = y;
                this.z = z;
            }
            return this;
        };

        Vec3.prototype.toArray = function () {
            return [this.x, this.y, this.z];
        };
        Vec3.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            this.z = v[2] || 0;
            return this;
        };

        Vec3.prototype.add = function (a, y, z) {
            if (y === undefined) {
                this.x += a.x;
                this.y += a.y;
                this.z += a.z;
            } else {
                this.x += a;
                this.y += y;
                this.z += z;
            }
            return this;
        };

        Vec3.prototype.subtract = function (a, y, z) {
            if (y === undefined) {
                this.x -= a.x;
                this.y -= a.y;
                this.z -= a.z;
            } else {
                this.x -= a;
                this.y -= y;
                this.z -= z;
            }
            return this;
        };

        Vec3.prototype.multiply = function (a, y, z) {
            if (y === undefined) {
                if (a instanceof Vec3) {
                    this.x *= a.x;
                    this.y *= a.y;
                    this.z *= a.z;
                } else {
                    this.x *= a;
                    this.y *= a;
                    this.z *= a;
                }
            } else {
                this.x *= a;
                this.y *= y;
                this.z *= z;
            }
            return this;
        };

        Vec3.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this;
        };

        Vec3.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
            return this;
        };

        Vec3.prototype.normalize = function () {
            if (this.lengthSqr === 0) {
                this.x = 0;
                this.y = 1;
                this.z = 0;
            } else {
                var invLen = 1.0 / this.length;
                this.x *= invLen;
                this.y *= invLen;
                this.z *= invLen;
            }
            return this;
        };

        Vec3.prototype.lerp = function (v, t) {
            this.x += t * (v.x - this.x);
            this.y += t * (v.y - this.y);
            this.z += t * (v.z - this.z);
            return this;
        };

        Vec3.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y + this.z + v.z;
        };

        Vec3.prototype.distance = function (a, y, z) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
                var dz = this.z - a.z;
            } else {
                var dx = this.x - a;
                var dy = this.y - y;
                var dz = this.z - z;
            }
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        };

        Vec3.prototype.distanceSqr = function (a, y, z) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
                var dz = this.z - a.z;
            } else {
                var dx = this.x - a;
                var dy = this.y - y;
                var dz = this.z - z;
            }
            return dx * dx + dy * dy + dz * dz;
        };
        return Vec3;
    })();
    Engine.Vec3 = Vec3;
})(Engine || (Engine = {}));
