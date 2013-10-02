/// <reference path="_include.ts" />

module Engine {

	export class Vec2 {
		x: number;
		y: number;

		get length() { return Math.sqrt(this.x * this.x + this.y * this.y); }
		get lengthSqr() { return this.x * this.x + this.y * this.y; }

		// Constructor
		constructor(x: number = 0, y: number = 0) {
			this.x = x;
			this.y = y;
		}

		clone(): Vec2 {
			return new Vec2(this.x, this.y);
		}

		toString(): string {
			return this.x + ", " + this.y;
		}

		add(rhs: Vec2): void {
			this.x += rhs.x;
			this.y += rhs.y;
		}

		subtract(rhs: Vec2): void {
			this.x -= rhs.x;
			this.y -= rhs.y;
		}

		multiply(rhs: number): void;
		multiply(rhs: Vec2): void;
		multiply(rhs: any): void {
			if (rhs instanceof Vec2) {
				rhs = <Vec2>rhs;
				this.x *= rhs.x;
				this.y *= rhs.y;
			}
			else {
				this.x *= <number>rhs;
				this.y *= <number>rhs;
			}
		}

		divide(rhs: number): void;
		divide(rhs: Vec2): void;
		divide(rhs: any): void {
			if (rhs instanceof Vec2) {
				rhs = <Vec2>rhs;
				this.x /= rhs.x;
				this.y /= rhs.y;
			}
			else {
				var inv: number = 1.0 / <number>rhs;
				this.x *= inv;
				this.y *= inv;
			}
		}

		invert(): void {
			this.x = -this.x;
			this.y = -this.y;
		}

		setLength(length: number) {
			this.normalize();
			this.multiply(length);
		}

		normalize(): void {
			var len: number = this.length;
			if (len === 0) {
				this.x = 0;
				this.y = 1;
			} else {
				var invLen: number = 1.0 / len;
				this.x *= invLen;
				this.y *= invLen;
			}
		}

		clamp(min: Vec2, max: Vec2): void {
			if (this.x < min.x)
				this.x = min.x;
			else if (this.x > max.x)
				this.x = max.x;
			if (this.y < min.y)
				this.y = min.y;
			else if (this.y > max.y)
				this.y = max.y;
		}

		static inverse(vec: Vec2): Vec2 {
			return new Vec2(-vec.x, -vec.y);
		}

		static add(left: Vec2, right: Vec2): Vec2 {
			return new Vec2(left.x + right.x, left.y + right.y);
		}

		static subtract(left: Vec2, right: Vec2): Vec2 {
			return new Vec2(left.x - right.x, left.y - right.y);
		}

		static multiply(left: Vec2, right: number): Vec2;
		static multiply(left: Vec2, right: Vec2): Vec2;
		static multiply(left: Vec2, right: any): Vec2 {
			if (right instanceof Vec2)
				return new Vec2(left.x * right.x, left.y * right.y);
			else
				return new Vec2(left.x * <number>right, left.y * <number>right);
		}

		static divide(left: Vec2, right: number): Vec2;
		static divide(left: Vec2, right: Vec2): Vec2;
		static divide(left: Vec2, right: any): Vec2 {
			if (right instanceof Vec2)
				return new Vec2(left.x / right.x, left.y / right.y);
			else {
				var invRight = 1.0 / <number>right;
				return new Vec2(left.x * invRight, left.y * invRight);
			}
		}

		static lerp(left: Vec2, right: Vec2, t: number): Vec2 {
			return Vec2.add(left, Vec2.multiply(Vec2.subtract(right, left), t));
		}

		static dot(left: Vec2, right: Vec2): number {
			return left.x * right.x + left.y * right.y;
		}

		static distance(left: Vec2, right: Vec2): number {
			var dx = right.x - left.x;
			var dy = right.y - left.y;
			return Math.sqrt(dx * dx + dy * dy);
		}

		static distanceSqr(left: Vec2, right: Vec2): number {
			var dx = right.x - left.x;
			var dy = right.y - left.y;
			return dx * dx + dy * dy;
		}

		static equals(a: Vec2, b: Vec2): boolean {
			return (a.x === b.x && a.y === b.y);
		}
	}

}