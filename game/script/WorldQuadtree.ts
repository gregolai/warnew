/// <reference path="_include.ts"/>

module Engine.Game {

	export interface IQuadtreeItem {
		id: number;
		getQTRect(): Rect;
	}

	export class QTBucket {

		static deepestBucket(root: QTBucket, item: IQuadtreeItem): QTBucket {
			var rect = item.getQTRect();
			var b = root;
			while (b._isLeaf === false) {
				var q = b.getRectQuadrants(rect);
				if (q.length !== 1)
					break;
				b = q[0];
			}
			return b;
		}

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
		private _isLeaf: boolean;

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
			this._isLeaf = true;
		}

		dispose(): void {
			this._tree = null;
			this._parent = null;
			this._bounds = null;
			this._items = null;
			if (!this._topLeft) {
				this._topLeft.dispose();
				this._topRight.dispose();
				this._bottomLeft.dispose();
				this._bottomRight.dispose();
				this._topLeft = this._topRight = this._bottomLeft = this._bottomRight = null;
			}
		}

		draw(ctx: CanvasRenderingContext2D): void {

			if (this._isLeaf) {
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

			// INSERT
			this._items.push(item);

			// INCREMENT (TRICKLE UP)
			var c = this;
			do {
				++c._count;
				c = c._parent;
			} while (c !== null);

			// SPLIT
			var tree = this._tree;
			if (this._isLeaf && this._items.length > tree.bucketCapacity && this._depth < tree.maxDepth) {

				if (!this._topLeft) {
					// ONLY CREATE CHILD BUCKETS ONCE AND CHANGE _isLeaf
					var b = this._bounds;
					var nextDepth = this._depth + 1;

					var mx = this._midX;
					var my = this._midY;
					var hw = b.width * 0.5;
					var hh = b.height * 0.5;

					this._topLeft = new QTBucket(tree, this, new Rect(b.x, b.y, hw, hh), nextDepth);
					this._topRight = new QTBucket(tree, this, new Rect(mx, b.y, hw, hh), nextDepth);
					this._bottomLeft = new QTBucket(tree, this, new Rect(b.x, my, hw, hh), nextDepth);
					this._bottomRight = new QTBucket(tree, this, new Rect(mx, my, hw, hh), nextDepth);
				}
				this._isLeaf = false;

				var items = this._items;
				for (var i = items.length - 1; i !== -1; --i) {
					tree.update(items[i]);
				}
			}

		}

		remove(item: IQuadtreeItem): void {

			var index = this._items.indexOf(item);
			if (index === -1)
				return;

			// REMOVE
			this._items.splice(index, 1);
			
			// DECREMENT (TRICKLE UP)
			var c = this;
			var mergeNode: QTBucket = null;
			do {
				if (--c._count === 0)
					mergeNode = c;
				c = c._parent;
			} while (c !== null);

			// MERGE
			if (mergeNode)
				mergeNode._isLeaf = true;
		}

		getItemsAtPoint(point: Vec2, ret: IQuadtreeItem[]): void {

			if (this._count === 0) {
				// EARLY EXIT IF NO ITEMS IN SELF OR CHILDREN
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

			if (!this._isLeaf) {
				// NOT A LEAF
				this.getPointQuadrant(point).getItemsAtPoint(point, ret);
			}
		}

		getItemsInRect(rect: Rect, ret: IQuadtreeItem[]): void {

			if (this._count === 0) {
				// EARLY EXIT IF NO ITEMS IN SELF OR CHILDREN
				return;
			}

			var items = this._items;
			for (var i = 0, ii = items.length; i < ii; ++i) {
				var item = items[i];
				if (item.getQTRect().intersectsRect(rect)) {
					ret.push(item);
				}
			}

			if (!this._isLeaf) {
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

	}

	export class WorldQuadtree {

		bucketCapacity: number;
		maxDepth: number;

		private _map: any[];
		private _root: QTBucket;

		constructor(bounds: Rect, bucketCap: number, maxDepth: number) {
			this.bucketCapacity = bucketCap;
			this.maxDepth = maxDepth;

			this._map = [];
			this._root = new QTBucket(this, null, bounds, 0);
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

			if (this._map[item.id] !== undefined) {
				// SKIP IF ALREADY INSERTED
				return;
			}

			var bucket = QTBucket.deepestBucket(this._root, item);

			// map item BEFORE inserting into bucket
			this._map[item.id] = [item, bucket];
			bucket.insert(item);
			
		}

		update(item: IQuadtreeItem): void {
			
			var arr = this._map[item.id];
			if (arr === undefined) {
				// SKIP IF NOT FOUND
				return;
			}

			var oldBucket = arr[1];
			var newBucket = QTBucket.deepestBucket(this._root, item);
			if (oldBucket !== newBucket) {

				oldBucket.remove(item);

				// re-map item BEFORE inserting into bucket
				arr[1] = newBucket;
				newBucket.insert(item);
			}

		}

		remove(item: IQuadtreeItem): void {

			var arr = this._map[item.id];
			if (arr === undefined) {
				// SKIP IF NOT FOUND
				return;
			}

			var bucket = <QTBucket>arr[1];

			bucket.remove(item);
			delete this._map[item.id];
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
	}

}