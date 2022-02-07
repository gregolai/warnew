/// <reference path="_include.ts"/>

module Engine.Game {


	export class Camera2D {

		private _center: Vec2;
		private _dimensions: Vec2;
		private _rect: Rect;
		private _boundsWidth: number;
		private _boundsHeight: number;
		private _zoom: number;
		private _invZoom: number;

		getCenter() { return this._center; }
		getRect() { return this._rect; }
		getZoom() { return this._zoom; }

		constructor(center: Vec2, boundsWidth: number, boundsHeight: number) {
			this._center = center.clone();
			this._dimensions = new Vec2(1, 1);
			this._rect = new Rect(0, 0, 1, 1);
			this._boundsWidth = boundsWidth;
			this._boundsHeight = boundsHeight;

			this._zoom = 1;
			this._invZoom = 1;

			this._clampCenter();
		}
		dispose(): void {
			this._center = null;
			this._dimensions = null;
			this._rect = null;
		}

		setCenter(center: Vec2): void {
			this._center = center.clone();
			this._clampCenter();
		}

		setZoom(zoom: number): void {
			this._zoom = MathUtil.clamp(zoom, CAMERA_MIN_ZOOM, CAMERA_MAX_ZOOM);
			this._invZoom = 1 / this._zoom;

			this._rect.width = Math.ceil(this._dimensions.x * this._invZoom);
			this._rect.height = Math.ceil(this._dimensions.y * this._invZoom);
			
			this._clampCenter();
		}

		//
		scrollLeft(dt: number): void {
			this._center.x -= dt * CAMERA_SCROLL_SPEED * this._invZoom;

			this._clampCenter();
		}

		scrollUp(dt: number): void {
			this._center.y -= dt * CAMERA_SCROLL_SPEED * this._invZoom;

			this._clampCenter();
		}

		scrollRight(dt: number): void {
			this._center.x += dt * CAMERA_SCROLL_SPEED * this._invZoom;

			this._clampCenter();
		}

		scrollDown(dt: number): void {
			this._center.y += dt * CAMERA_SCROLL_SPEED * this._invZoom;

			this._clampCenter();
		}

		resize(width: number, height: number): void {

			this._dimensions.x = width;
			this._dimensions.y = height;

			this._rect.width = Math.ceil(width * this._invZoom);
			this._rect.height = Math.ceil(height * this._invZoom);

			this._clampCenter();
		}

		getPointAt(viewX: number, viewY: number, vecRef: Vec2): void {
			var rect = this._rect;
			vecRef.x = MathUtil.clamp(rect.x + viewX * this._invZoom, rect.x, rect.right);
			vecRef.y = MathUtil.clamp(rect.y + viewY * this._invZoom, rect.y, rect.bottom);
		}

		apply(ctx: CanvasRenderingContext2D): void {
			ctx.translate(this._dimensions.x >> 1, this._dimensions.y >> 1);
			ctx.scale(this._zoom, this._zoom);
			ctx.translate(-this._center.x, -this._center.y);
		}
		
		private _clampCenter(): void {

			var center = this._center;
			var rect = this._rect;
			var halfWidth = (rect.width + 1) >> 1;
			var halfHeight = (rect.height + 1) >> 1;

			center.x = Math.max(Math.min(this._boundsWidth - halfWidth, center.x), halfWidth);
			center.y = Math.max(Math.min(this._boundsHeight - halfHeight, center.y), halfHeight);

			rect.x = center.x - halfWidth;
			rect.y = center.y - halfHeight;
		}
	}
}