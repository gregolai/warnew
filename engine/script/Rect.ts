/// <reference path="_include.ts" />

module Engine {

	export class Rect {

		x: number;
		y: number;
		width: number;
		height: number;

		get right() { return this.x + this.width; }
		get bottom() { return this.y + this.height; }

		constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}

		clone(): Rect {
			return new Rect(this.x, this.y, this.width, this.height);
		}

		set(r: Rect): Rect;
		set(x: number, y: number, width: number, height: number): Rect;
		set(a?: any, y?: number, width?: number, height?: number): Rect {

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
		}

		toArray(): number[] {
			return [this.x, this.y, this.width, this.height];
		}
		fromArray(v: number[]): Rect {
			this.x = v[0] || 0;
			this.y = v[1] || 0;
			this.width = v[2] || 0;
			this.height = v[3] || 0;
			return this;
		}

		setPosition(p: Vec2): Rect;
		setPosition(x: number, y: number): Rect;
		setPosition(a: any, y?: number): Rect {
			if (a instanceof Vec2) {
				this.x = a.x;
				this.y = a.y;
			} else {
				this.x = a;
				this.y = y;
			}
			return this;
		}

		setSize(p: Vec2): Rect;
		setSize(width: number, height: number): Rect;
		setSize(a: any, height?: number): Rect {
			if (a instanceof Vec2) {
				this.width = a.x;
				this.height = a.y;
			} else {
				this.width = a;
				this.height = height;
			}
			return this;
		}

		fromPoints(p0: Vec2, p1: Vec2): Rect {
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
		}

		union(r: Rect): Rect;
		union(x: number, y: number, width: number, height: number): Rect;
		union(a: any, y?: number, width?: number, height?: number): Rect {

			var ux: number, uy: number;
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
		}

		containsPoint(p: Vec2): boolean;
		containsPoint(x: number, y: number): boolean;
		containsPoint(a: any, y?: number): boolean {

			if (a instanceof Vec2) {
				return a.x >= this.x
					&& a.x <= this.x + this.width
					&& a.y >= this.y
					&& a.y <= this.y + this.height;
			} else {
				return a >= this.x
					&& a <= this.x + this.width
					&& y >= this.y
					&& y <= this.y + this.height;
			}
		}

		containsRect(r: Rect): boolean;
		containsRect(x: number, y: number, width: number, height: number): boolean;
		containsRect(a: any, y?: number, width?: number, height?: number): boolean {

			if (a instanceof Rect) {
				return a.x >= this.x
					&& a.x + a.width <= this.x + this.width
					&& a.y >= this.y
					&& a.y + a.height <= this.y + this.height;
			} else {
				return a >= this.x
					&& a + width <= this.x + this.width
					&& y >= this.y
					&& y + height <= this.y + this.height;
			}
		}


		intersectsRect(r: Rect): boolean;
		intersectsRect(x: number, y: number, width: number, height: number): boolean;
		intersectsRect(a: any, y?: number, width?: number, height?: number): boolean {

			if (a instanceof Rect) {
				return a.x <= this.x + this.width
					&& a.x + a.width >= this.x
					&& a.y <= this.y + this.height
					&& a.y + a.height >= this.y;
			} else {
				return a <= this.x + this.width
					&& a + width >= this.x
					&& y <= this.y + this.height
					&& y + height >= this.y;
			}
		}

		getCenter(): Vec2 {
			return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
		}

	}

}