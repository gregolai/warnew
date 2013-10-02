/// <reference path="_include.ts" />
var AppLauncher;
(function (AppLauncher) {
    var Vec2 = (function () {
        // Constructor
        function Vec2(x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            this.x = x;
            this.y = y;
        }
        Vec2.prototype.clone = function () {
            return new Vec2(this.x, this.y);
        };

        Vec2.prototype.toString = function () {
            return this.x + ", " + this.y;
        };

        Vec2.prototype.add = function (rhs) {
            this.x += rhs.x;
            this.y += rhs.y;
        };

        Vec2.prototype.subtract = function (rhs) {
            this.x -= rhs.x;
            this.y -= rhs.y;
        };

        Vec2.prototype.multiply = function (rhs) {
            if (rhs instanceof Vec2) {
                rhs = rhs;
                this.x *= rhs.x;
                this.y *= rhs.y;
            } else {
                this.x *= rhs;
                this.y *= rhs;
            }
        };

        Vec2.prototype.divide = function (rhs) {
            if (rhs instanceof Vec2) {
                rhs = rhs;
                this.x /= rhs.x;
                this.y /= rhs.y;
            } else {
                var inv = 1.0 / rhs;
                this.x *= inv;
                this.y *= inv;
            }
        };

        Vec2.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
        };

        Vec2.prototype.perp = function () {
            var tmpX = this.x;
            this.x = -this.y;
            this.y = tmpX;
        };

        Vec2.prototype.length = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };

        Vec2.prototype.lengthSqr = function () {
            return this.x * this.x + this.y * this.y;
        };

        Vec2.prototype.normalize = function () {
            var len = this.length();
            if (len === 0) {
                this.y = 1;
            } else {
                var invLen = 1.0 / len;
                this.x *= invLen;
                this.y *= invLen;
            }
        };

        Vec2.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
        };

        Vec2.prototype.clamp = function (min, max) {
            if (this.x < min.x)
                this.x = min.x;
else if (this.x > max.x)
                this.x = max.x;
            if (this.y < min.y)
                this.y = min.y;
else if (this.y > max.y)
                this.y = max.y;
        };

        Vec2.inverse = function (vec) {
            return new Vec2(-vec.x, -vec.y);
        };

        Vec2.perp = function (vec) {
            return new Vec2(-vec.y, vec.x);
        };

        Vec2.add = function (left, right) {
            return new Vec2(left.x + right.x, left.y + right.y);
        };

        Vec2.subtract = function (left, right) {
            return new Vec2(left.x - right.x, left.y - right.y);
        };

        Vec2.multiply = function (left, right) {
            if (right instanceof Vec2)
                return new Vec2(left.x * right.x, left.y * right.y);
else
                return new Vec2(left.x * right, left.y * right);
        };

        Vec2.divide = function (left, right) {
            if (right instanceof Vec2)
                return new Vec2(left.x / right.x, left.y / right.y);
else {
                var invRight = 1.0 / right;
                return new Vec2(left.x * invRight, left.y * invRight);
            }
        };

        Vec2.lerp = function (left, right, t) {
            return Vec2.add(left, Vec2.multiply(Vec2.subtract(right, left), t));
        };

        Vec2.dot = function (left, right) {
            return left.x * right.x + left.y * right.y;
        };

        Vec2.distance = function (left, right) {
            var dx = right.x - left.x;
            var dy = right.y - left.y;
            return Math.sqrt(dx * dx + dy * dy);
        };

        Vec2.distanceSqr = function (left, right) {
            var dx = right.x - left.x;
            var dy = right.y - left.y;
            return dx * dx + dy * dy;
        };

        Vec2.equals = function (a, b) {
            return (a.x === b.x && a.y === b.y);
        };
        return Vec2;
    })();
    AppLauncher.Vec2 = Vec2;
})(AppLauncher || (AppLauncher = {}));
