/// <reference path="_include.ts"/>

module Engine {

	export class BinaryHeap<T> {
		private _content: T[];
		private _scoreFunction: (element: T) => number;
		constructor(scoreFunction: (element: T) => number) {
			this._content = [];
			this._scoreFunction = scoreFunction;
		}

		reset(scoreFunction?: (element: T) => number): BinaryHeap<T> {
			this._content.length = 0;
			if (scoreFunction)
				this._scoreFunction = scoreFunction;
			return this;
		}

		push(node: T): void {
			// Add the new element to the end of the array.
			this._content.push(node);
			// Allow it to sink down.
			this._sinkDown(this._content.length - 1);
		}

		pop(): T {
			// Store the first element so we can return it later.
			var result = this._content[0];
			// Get the element at the end of the array.
			var end = this._content.pop();
			// If there are any elements left, put the end element at the
			// start, and let it bubble up.
			if (this._content.length > 0) {
				this._content[0] = end;
				this._bubbleUp(0);
			}
			return result;
		}

		remove(node: T): boolean {
			var len = this._content.length;
			// To remove a value, we must search through the array to find
			// it.
			for (var i = 0; i < len; i++) {
				if (this._content[i] == node) {
					// When it is found, the process seen in 'pop' is repeated
					// to fill up the hole.
					var end = this._content.pop();
					if (i != len - 1) {
						this._content[i] = end;
						if (this._scoreFunction(end) < this._scoreFunction(node))
							this._sinkDown(i);
						else
							this._bubbleUp(i);
					}
					return true;
				}
			}
			return false;
		}

		size(): number {
			return this._content.length;
		}

		rescoreElement(node: T): void {
			this._sinkDown(this._content.indexOf(node));
		}

		private _sinkDown(n: number): void {
			// Fetch the element that has to be sunk.
			var element = this._content[n];
			// When at 0, an element can not sink any further.
			while (n > 0) {
				// Compute the parent element's index, and fetch it.
				var parentN = Math.floor((n + 1) >> 1) - 1,
					parent = this._content[parentN];
				// Swap the elements if the parent is greater.
				if (this._scoreFunction(element) < this._scoreFunction(parent)) {
					this._content[parentN] = element;
					this._content[n] = parent;
					// Update 'n' to continue at the new position.
					n = parentN;
				}
				// Found a parent that is less, no need to sink any further.
				else {
					break;
				}
			}
		}

		private _bubbleUp(n: number): void {
			// Look up the target element and its score.
			var length = this._content.length,
				element = this._content[n],
				elemScore = this._scoreFunction(element);

			while (true) {
				// Compute the indices of the child elements.
				var child2N = (n + 1) * 2, child1N = child2N - 1;
				// This is used to store the new position of the element,
				// if any.
				var swap = null;
				// If the first child exists (is inside the array)...
				if (child1N < length) {
					// Look it up and compute its score.
					var child1 = this._content[child1N],
						child1Score = this._scoreFunction(child1);
					// If the score is less than our element's, we need to swap.
					if (child1Score < elemScore)
						swap = child1N;
				}
				// Do the same checks for the other child.
				if (child2N < length) {
					var child2 = this._content[child2N],
						child2Score = this._scoreFunction(child2);
					if (child2Score < (swap == null ? elemScore : child1Score))
						swap = child2N;
				}

				// If the element needs to be moved, swap it, and continue.
				if (swap != null) {
					this._content[n] = this._content[swap];
					this._content[swap] = element;
					n = swap;
				}
				// Otherwise, we are done.
				else {
					break;
				}
			}
		}
	}
}