/// <reference path="_include.ts" />

module Engine {

	export class Surface2D {

		private _canvas: HTMLCanvasElement;
		private _context: CanvasRenderingContext2D;
		private _zIndex: number;
		private _rect: Rect;

		get context() { return this._context; }

		get zIndex() { return this._zIndex; }
		set zIndex(value: number) { this._canvas.style.zIndex = "" + value; this._zIndex = value; }

		get x() { return this._rect.x; }
		set x(value: number) { this._canvas.style.left = value + "px"; this._rect.x = value; }

		get y() { return this._rect.y; }
		set y(value: number) { this._canvas.style.top = value + "px"; this._rect.y = value; }
		
		get width() { return this._rect.width; }
		set width(value: number) { this._canvas.width = value; this._rect.width = value; }

		get height() { return this._rect.height; }
		set height(value: number) { this._canvas.height = value; this._rect.height = value; }

		get rect() { return this._rect; }
		set rect(value: Rect) {
			this.x = value.x;
			this.y = value.y;
			this.width = value.width;
			this.height = value.height;
		}

		constructor(container: Node);
		constructor(canvas: HTMLCanvasElement);
		constructor(c: any) {
			if (c instanceof HTMLCanvasElement) {
				this._canvas = c;
			} else {
				this._canvas = document.createElement("canvas");
				this._canvas.style.position = "absolute";
				c.appendChild(this._canvas);
			}

			this._context = this._canvas.getContext("2d");

			this.zIndex = 0;
			this._rect = new Rect(0, 0, 1, 1);
		}

		dispose(): void {
			var container = this._canvas.parentNode;
			container.removeChild(this._canvas);

			this._canvas = null;
			this._context = null;
		}

	}

}