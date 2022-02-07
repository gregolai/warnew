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

		set(v: Vec3): Vec3;
		set(x: number, y: number, z: number): Vec3;
		set(a: any, y?: number, z?: number): Vec3 {
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
		}

		toArray(): number[] {
			return [this.x, this.y, this.z];
		}
		fromArray(v: number[]): Vec3 {
			this.x = v[0] || 0;
			this.y = v[1] || 0;
			this.z = v[2] || 0;
			return this;
		}

		add(v: Vec3): Vec3;
		add(x: number, y: number, z: number): Vec3;
		add(a: any, y?: number, z?: number): Vec3 {
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
		}


		subtract(v: Vec3): Vec3;
		subtract(x: number, y: number, z: number): Vec3;
		subtract(a: any, y?: number, z?: number): Vec3 {
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
		}

		multiply(v: Vec3): Vec3;
		multiply(c: number): Vec3;
		multiply(x: number, y: number, z: number): Vec3;
		multiply(a: any, y?: number, z?: number): Vec3 {
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
		}

		invert(): Vec3 {
			this.x = -this.x;
			this.y = -this.y;
			this.z = -this.z;
			return this;
		}

		setLength(length: number): Vec3 {
			this.normalize();
			this.multiply(length);
			return this;
		}

		normalize(): Vec3 {
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
		}

		lerp(v: Vec3, t: number): Vec3 {
			this.x += t * (v.x - this.x);
			this.y += t * (v.y - this.y);
			this.z += t * (v.z - this.z);
			return this;
		}

		dot(v: Vec3): number {
			return this.x * v.x + this.y * v.y + this.z + v.z;
		}

		distance(v: Vec3): number;
		distance(x: number, y: number, z: number): number;
		distance(a: any, y?: number, z?: number): number {
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
		}

		distanceSqr(v: Vec3): number;
		distanceSqr(x: number, y: number, z: number): number;
		distanceSqr(a: any, y?: number, z?: number): number {
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
		}

	}

}