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

		set(v: Vec2): Vec2;
		set(x: number, y: number): Vec2;
		set(a: any, y?: number): Vec2 {
			if (y === undefined) {
				this.x = a.x;
				this.y = a.y;
			} else {
				this.x = a;
				this.y = y;
			}
			return this;
		}

		toArray(): number[] {
			return [this.x, this.y];
		}
		fromArray(v: number[]): Vec2 {
			this.x = v[0] || 0;
			this.y = v[1] || 0;
			return this;
		}

		add(v: Vec2): Vec2;
		add(x: number, y: number): Vec2;
		add(a: any, y?: number): Vec2 {
			if (y === undefined) {
				this.x += a.x;
				this.y += a.y;
			} else {
				this.x += a;
				this.y += y;
			}
			return this;
		}

		subtract(v: Vec2): Vec2;
		subtract(x: number, y: number): Vec2;
		subtract(a: any, y?: number): Vec2 {
			if (y === undefined) {
				this.x -= a.x;
				this.y -= a.y;
			} else {
				this.x -= a;
				this.y -= y;
			}
			return this;
		}

		
		multiply(v: Vec2): Vec2;
		multiply(c: number): Vec2;
		multiply(x: number, y: number): Vec2;
		multiply(a: any, y?: number): Vec2 {
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
		}

		invert(): Vec2 {
			this.x = -this.x;
			this.y = -this.y;
			return this;
		}
		
		setLength(length: number): Vec2 {
			this.normalize();
			this.multiply(length);
			return this;
		}

		normalize(): Vec2 {
			if (this.lengthSqr === 0) {
				this.x = 0;
				this.y = 1;
			} else {
				var invLen = 1.0 / this.length;
				this.x *= invLen;
				this.y *= invLen;
			}
			return this;
		}

		lerp(v: Vec2, t: number): Vec2 {
			this.x += t * (v.x - this.x);
			this.y += t * (v.y - this.y);
			return this;
		}

		dot(v: Vec2): number {
			return this.x * v.x + this.y * v.y;
		}

		distance(v: Vec2): number;
		distance(x: number, y: number): number;
		distance(a: any, y?: number): number {
			if (y === undefined) {
				var dx = this.x - a.x;
				var dy = this.y - a.y;
			} else {
				var dx = this.x - a;
				var dy = this.y - y;
			}
			return Math.sqrt(dx * dx + dy * dy);
		}

		distanceSqr(v: Vec2): number;
		distanceSqr(x: number, y: number): number;
		distanceSqr(a: any, y?: number): number {
			if (y === undefined) {
				var dx = this.x - a.x;
				var dy = this.y - a.y;
			} else {
				var dx = this.x - a;
				var dy = this.y - y;
			}
			return dx * dx + dy * dy;
		}

	}

}