/// <reference path="_include.ts" />

module Engine {

	export class Surface2D {

		canvas: HTMLCanvasElement;
		context: CanvasRenderingContext2D;
		
		rect: Rect;
		get x() { return this.rect.x; }
		get y() { return this.rect.y; }
		get width() { return this.rect.width; }
		get height() { return this.rect.height; }

		constructor(container: Node);
		constructor(canvas: HTMLCanvasElement);
		constructor(c: any) {
			if (c instanceof HTMLCanvasElement) {
				this.canvas = c;
			} else {
				this.canvas = document.createElement("canvas");
				this.canvas.style.position = "absolute";
				c.appendChild(this.canvas);
			}
			this.context = <CanvasRenderingContext2D> this.canvas.getContext("2d");
			this.rect = new Rect();

			this.canvas.style.zIndex = "0";
		}

		dispose(): void {
			var container = this.canvas.parentNode;
			if(container)
				container.removeChild(this.canvas);

			this.canvas = null;
			this.context = null;
		}

		setPosition(p: Vec2): void;
		setPosition(x: number, y: number): void;
		setPosition(a: any, y?: number): void {

			if (a instanceof Vec2) {
				this.canvas.style.left = (this.rect.x = a.x) + "px"
				this.canvas.style.top = (this.rect.y = a.y) + "px";
			} else {
				this.canvas.style.left = (this.rect.x = a) + "px";
				this.canvas.style.top = (this.rect.y = y) + "px";
			}
		}

		setSize(p: Vec2): void;
		setSize(x: number, y: number): void;
		setSize(a: any, y?: number): void {

			if (a instanceof Vec2) {
				this.canvas.width = this.rect.width = a.x;
				this.canvas.height = this.rect.height = a.y;
			} else {
				this.canvas.width = this.rect.width = a;
				this.canvas.height = this.rect.height = y;
			}
		}

		setRect(r: Rect): void;
		setRect(x: number, y: number, width: number, height: number): void;
		setRect(a: any, y?: number, width?: number, height?: number): void {

			if (a instanceof Rect) {
				this.setPosition(a.x, a.y);
				this.setSize(a.width, a.height);
			} else {
				this.setPosition(a, y);
				this.setSize(width, height);
			}
		}
	}

}