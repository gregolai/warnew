/// <reference path="_include.ts" />

module Engine {

	export class Surface2D {

		private _canvas: HTMLCanvasElement;
		private _context: CanvasRenderingContext2D;
		private _zIndex: number;
		private _x: number;
		private _y: number;
		private _width: number;
		private _height: number;

		get context() { return this._context; }

		get zIndex() { return this._zIndex; }
		set zIndex(value: number) { this._canvas.style.zIndex = "" + value; this._zIndex = value; }

		get x() { return this._x; }
		set x(value: number) { this._canvas.style.left = value + "px"; this._x = value; }

		get y() { return this._y; }
		set y(value: number) { this._canvas.style.top = value + "px"; this._y = value; }

		get width() { return this._width; }
		set width(value: number) { this._canvas.width = value; this._width = value; }

		get height() { return this._height; }
		set height(value: number) { this._canvas.height = value; this._height = value; }

		constructor(container: Node) {
			this._canvas = document.createElement("canvas");
			this._canvas.style.position = "absolute";

			this._context = this._canvas.getContext("2d");

			this.zIndex = 0;
			this.x = 0;
			this.y = 0;
			this.width = 1;
			this.height = 1;

			container.appendChild(this._canvas);
		}

		dispose(): void {
			var container = this._canvas.parentNode;
			container.removeChild(this._canvas);

			this._canvas = null;
			this._context = null;
		}

	}

}