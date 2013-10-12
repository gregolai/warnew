/// <reference path="_include.ts"/>

module Engine.WarNew {

	export interface IQuadtreeItem {
		getID(): number;
		getQTRect(): Rect;
	}

	export class QTBucket {
		private _tree: WorldQuadtree;
		private _parent: QTBucket;
		private _bounds: Rect;
		private _midX: number;
		private _midY: number;
		private _depth: number;

		private _items: IQuadtreeItem[];
		private _count: number;

		private _topLeft: QTBucket;
		private _topRight: QTBucket;
		private _bottomLeft: QTBucket;
		private _bottomRight: QTBucket;

		constructor(tree: WorldQuadtree, parent: QTBucket, bounds: Rect, depth: number) {
			this._tree = tree;
			this._parent = parent;
			this._bounds = bounds;
			this._midX = bounds.x + bounds.width * 0.5;
			this._midY = bounds.y + bounds.height * 0.5;
			this._depth = depth;

			this._items = [];
			this._count = 0;

			this._topLeft = null;
			this._topRight = null;
			this._bottomLeft = null;
			this._bottomRight = null;
		}

		dispose(): void {
			this._tree = null;
			this._parent = null;
			this._bounds = null;
			this._items = null;
			if (!this.isLeaf()) {
				this._topLeft.dispose();
				this._topRight.dispose();
				this._bottomLeft.dispose();
				this._bottomRight.dispose();
				this._topLeft = this._topRight = this._bottomLeft = this._bottomRight = null;
			}
		}

		draw(ctx: CanvasRenderingContext2D): void {

			if (this.isLeaf()) {
				// ONLY DRAW DEEPEST NODES
				var bounds = this._bounds;
				ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
			} else {
				this._topLeft.draw(ctx);
				this._topRight.draw(ctx);
				this._bottomLeft.draw(ctx);
				this._bottomRight.draw(ctx);
			}
		}

		insert(item: IQuadtreeItem): void {

			this._items.push(item);
			this._increment(1);

			if (this.isLeaf() && this._items.length > QUADTREE_NODE_MAX_ITEMS && this._depth < QUADTREE_NODE_MAX_DEPTH) {
				this._split();
			}
		}

		remove(item: IQuadtreeItem): void {

			var index = this._items.indexOf(item);
			if (index === -1) {
				return;
			}

			this._items.splice(index, 1);
			this._decrement(1);
		}

		isLeaf(): boolean {
			return this._topLeft === null;
		}

		getItemsAtPoint(point: Vec2, ret: IQuadtreeItem[]): void {

			if (this._count === 0) {
				return;
			}

			var px = point.x;
			var py = point.y;
			var items = this._items;
			for (var i = 0, ii = items.length; i < ii; ++i) {
				var item = items[i];
				if (item.getQTRect().containsPoint(px, py)) {
					ret.push(item);
				}
			}

			if (this.isLeaf() === false) {
				// NOT A LEAF
				var q = this.getPointQuadrant(point);
				q.getItemsAtPoint(point, ret);
			}
		}

		getItemsInRect(rect: Rect, ret: IQuadtreeItem[]): void {

			if (this._count === 0) {
				return;
			}

			var items = this._items;
			for (var i = 0, ii = items.length; i < ii; ++i) {
				var item = items[i];
				if (item.getQTRect().intersectsRect(rect)) {
					ret.push(item);
				}
			}

			if (this.isLeaf() === false) {
				// NOT A LEAF
				var q = this.getRectQuadrants(rect);
				for (var i = 0, ii = q.length; i < ii; ++i)
					q[i].getItemsInRect(rect, ret);
			}
		}

		getPointQuadrant(point: Vec2): QTBucket {
			if (point.y < this._midY) {
				// TOP
				return (point.x < this._midX ? this._topLeft : this._topRight);
			} else {
				// BOTTOM
				return (point.x < this._midX ? this._bottomLeft : this._bottomRight);
			}
		}

		getRectQuadrants(rect: Rect): QTBucket[] {
			var midX = this._midX;
			var midY = this._midY;
			var rx = rect.x;
			var ry = rect.y;
			if (ry >= midY) {
				if (rx >= midX)
					return [this._bottomRight];
				else if (rx + rect.width < midX)
					return [this._bottomLeft];
				else
					return [this._bottomRight, this._bottomLeft];
			} else if (ry + rect.height < midY) {
				if (rx >= midX)
					return [this._topRight];
				else if (rx + rect.width < midX)
					return [this._topLeft];
				else
					return [this._topRight, this._topLeft];
			} else {
				if (rx >= midX)
					return [this._topRight, this._bottomRight];
				else if (rx + rect.width < midX)
					return [this._topLeft, this._bottomLeft];
				else
					return [this._topRight, this._bottomRight, this._topLeft, this._bottomLeft];
			}
		}

		private _increment(amount: number): void {
			var c = this;
			do {
				c._count += amount;
				c = c._parent;
			} while (c !== null);
		}

		private _decrement(amount: number): void {
			var c = this;
			var mergeNode: QTBucket = null;
			do {
				c._count -= amount;
				if (c._count === 0) {
					mergeNode = c;
				}
				c = c._parent;
			} while (c !== null);

			if (mergeNode !== null && !mergeNode.isLeaf()) {
				console.log("QT merge");
				// DO MERGE
				mergeNode._topLeft.dispose();
				mergeNode._topLeft = null;
				mergeNode._topRight.dispose();
				mergeNode._topRight = null;
				mergeNode._bottomLeft.dispose();
				mergeNode._bottomLeft = null;
				mergeNode._bottomRight.dispose();
				mergeNode._bottomRight = null;
			}
		}

		private _split(): void {
			console.log("QT split");
			var b = this._bounds;
			var tree = this._tree;
			var nextDepth = this._depth + 1;

			var mx = this._midX;
			var my = this._midY;
			var hw = b.width * 0.5;
			var hh = b.height * 0.5;

			this._topLeft = new QTBucket(tree, this, new Rect(b.x, b.y, hw, hh), nextDepth);
			this._topRight = new QTBucket(tree, this, new Rect(mx, b.y, hw, hh), nextDepth);
			this._bottomLeft = new QTBucket(tree, this, new Rect(b.x, my, hw, hh), nextDepth);
			this._bottomRight = new QTBucket(tree, this, new Rect(mx, my, hw, hh), nextDepth);

			var items = this._items;
			for (var i = items.length - 1; i !== -1; --i) {
				tree.update(items[i]);
			}
		}
	}

	export class WorldQuadtree {

		private _root: QTBucket;
		private _map: any[][];

		constructor(bounds: Rect) {
			this._root = new QTBucket(this, null, bounds, 0);
			this._map = [];
		}

		dispose(): void {
			this._root.dispose();
			this._map = null;
		}

		draw(ctx: CanvasRenderingContext2D): void {

			ctx.lineWidth = 2;
			ctx.strokeStyle = "#4f4";
			ctx.beginPath();
			this._root.draw(ctx);
			ctx.stroke();
		}

		insert(item: IQuadtreeItem): void {

			var id = item.getID();
			if (typeof this._map[id] !== "undefined") {
				return;
			}

			var bucket = this._deepestBucket(item);

			bucket.insert(item);
			this._map[id] = [item, bucket];
		}

		update(item: IQuadtreeItem): void {

			var id = item.getID();
			var arr = this._map[id];
			if (typeof arr === "undefined") {
				return;
			}

			var oldBucket = <QTBucket>arr[1];
			var newBucket = this._deepestBucket(item);
			if (oldBucket !== newBucket) {

				oldBucket.remove(item);

				newBucket.insert(item);
				arr[1] = newBucket;
			}

		}

		remove(item: IQuadtreeItem): void {

			var id = item.getID();
			var arr = this._map[id];
			if (typeof arr === "undefined") {
				return;
			}

			var bucket = <QTBucket>arr[1];

			bucket.remove(item);
			delete this._map[id];
		}

		getItemsAtPoint(p: Vec2): IQuadtreeItem[] {
			var items: IQuadtreeItem[] = [];
			this._root.getItemsAtPoint(p, items);
			return items;
		}

		getItemsInRect(rect: Rect): IQuadtreeItem[] {
			var items: IQuadtreeItem[] = [];
			this._root.getItemsInRect(rect, items);
			return items;
		}

		private _deepestBucket(item: IQuadtreeItem): QTBucket {
			var rect = item.getQTRect();
			var b = this._root;
			while (b.isLeaf() === false) {
				var q = b.getRectQuadrants(rect);
				if (q.length !== 1)
					break;
				b = q[0];
			}
			return b;
		}
	}

}