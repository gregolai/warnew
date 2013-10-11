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

		toArray(): number[] {
			return [this.x, this.y];
		}
		fromArray(v: number[]): void {
			this.x = v[0] || 0;
			this.y = v[1] || 0;
		}

		fromVec2(v: Vec2): void {
			this.x = v.x;
			this.y = v.y;
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
				this.x *= rhs.x;
				this.y *= rhs.y;
			}
			else {
				this.x *= rhs;
				this.y *= rhs;
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
			if (this.lengthSqr === 0) {
				this.x = 0;
				this.y = 1;
			} else {
				var invLen = 1.0 / this.length;
				this.x *= invLen;
				this.y *= invLen;
			}
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

		static lerp(left: Vec2, right: Vec2, t: number): Vec2 {
			return new Vec2(left.x + t * (right.x - left.x), left.y + t * (right.y - left.y));
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