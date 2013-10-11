/// <reference path="_include.ts" />

module Engine {

	export class Vec3 {
		x: number;
		y: number;
		z: number;

		get length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }
		get lengthSqr() { return this.x * this.x + this.y * this.y + this.z * this.z; }

		// Constructor
		constructor(x: number = 0, y: number = 0, z: number = 0) {
			this.x = x;
			this.y = y;
			this.z = z;
		}

		clone(): Vec3 {
			return new Vec3(this.x, this.y, this.z);
		}

		toString(): string {
			return this.x + ", " + this.y + ", " + this.z;
		}

		toArray(): number[] {
			return [this.x, this.y, this.z];
		}
		fromArray(v: number[]): void {
			this.x = v[0] || 0;
			this.y = v[1] || 0;
			this.z = v[2] || 0;
		}

		fromVec3(v: Vec3): void {
			this.x = v.x;
			this.y = v.y;
			this.z = v.z;
		}

		add(rhs: Vec3): void {
			this.x += rhs.x;
			this.y += rhs.y;
			this.z += rhs.z;
		}

		subtract(rhs: Vec3): void {
			this.x -= rhs.x;
			this.y -= rhs.y;
			this.z -= rhs.z;
		}

		multiply(rhs: number): void;
		multiply(rhs: Vec3): void;
		multiply(rhs: any): void {
			if (rhs instanceof Vec3) {
				this.x *= rhs.x;
				this.y *= rhs.y;
				this.z *= rhs.z;
			}
			else {
				this.x *= rhs;
				this.y *= rhs;
				this.z *= rhs;
			}
		}

		invert(): void {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
		}

		setLength(length: number) {
			this.normalize();
			this.multiply(length);
		}

		normalize(): void {
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
		}

		static inverse(vec: Vec3): Vec3 {
			return new Vec3(-vec.x, -vec.y, -vec.z);
		}

		static add(left: Vec3, right: Vec3): Vec3 {
			return new Vec3(left.x + right.x, left.y + right.y, left.z + right.z);
		}

		static subtract(left: Vec3, right: Vec3): Vec3 {
			return new Vec3(left.x - right.x, left.y - right.y, left.z - right.z);
		}

		static multiply(left: Vec3, right: number): Vec3;
		static multiply(left: Vec3, right: Vec3): Vec3;
		static multiply(left: Vec3, right: any): Vec3 {
			if (right instanceof Vec3)
				return new Vec3(left.x * right.x, left.y * right.y, left.z * right.z);
			else
				return new Vec3(left.x * right, left.y * right, left.z * right);
		}

		static lerp(left: Vec3, right: Vec3, t: number): Vec3 {
			return new Vec3(left.x + t * (right.x - left.x), left.y + t * (right.y - left.y), left.z + t * (right.z - left.z));
		}

		static dot(left: Vec3, right: Vec3): number {
			return left.x * right.x + left.y * right.y + left.z + right.z;
		}

		static distance(left: Vec3, right: Vec3): number {
			var dx = right.x - left.x;
			var dy = right.y - left.y;
			var dz = right.z - left.z;
			return Math.sqrt(dx * dx + dy * dy + dz * dz);
		}

		static distanceSqr(left: Vec3, right: Vec3): number {
			var dx = right.x - left.x;
			var dy = right.y - left.y;
			var dz = right.z - left.z;
			return dx * dx + dy * dy + dz * dz;
		}

		static equals(a: Vec3, b: Vec3): boolean {
			return (a.x === b.x && a.y === b.y && a.z === b.z);
		}
	}

}