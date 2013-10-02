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

		setSize(width: number, height: number): void {
			this.width = width;
			this.height = height;
		}

		containsPoint(point: Vec2): boolean;
		containsPoint(x: number, y: number): boolean;
		containsPoint(p: any, y?: number): boolean {

			var x: number;
			if (p instanceof Vec2) {
				x = (<Vec2>p).x;
				y = (<Vec2>p).y;
			} else {
				x = p;
			}
			var thisX = this.x;
			var thisY = this.y;
			return x >= thisX && x <= thisX + this.width && y >= thisY && y <= thisY + this.height;
		}

		containsRect(other: Rect): boolean {
			var thisX = this.x;
			var thisY = this.y;
			var otherX = other.x;
			var otherY = other.y;
			return otherX >= thisX
				&& otherX + other.width <= thisX + this.width
				&& otherY >= thisY
				&& otherY + other.height <= thisY + this.height;
		}

		intersectsRect(other: Rect): boolean {
			var thisX = this.x;
			var thisY = this.y;
			var otherX = other.x;
			var otherY = other.y;
			return otherX <= thisX + this.width
				&& otherX + other.width >= thisX
				&& other.y <= thisY + this.height
				&& otherY + other.height >= thisY;
		}

		getCenter(): Vec2 {
			return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
		}

		union(r: Rect): void {
			var tx = this.x;
			var ty = this.y;
			var rx = r.x;
			var ry = r.y;

			var x0 = Math.min(tx, rx);
			var x1 = Math.max(tx + this.width, rx + r.width);
			var y0 = Math.min(ty, ry);
			var y1 = Math.max(ty + this.height, ry + r.height);

			this.x = x0;
			this.y = y0;
			this.width = x1 - x0;
			this.height = y1 - y0;
		}

	}

}