var Engine;
(function (Engine) {
    var BinaryHeap = (function () {
        function BinaryHeap(scoreFunction) {
            this._content = [];
            this._scoreFunction = scoreFunction;
        }
        BinaryHeap.prototype.reset = function (scoreFunction) {
            this._content.length = 0;
            if (scoreFunction)
                this._scoreFunction = scoreFunction;
            return this;
        };

        BinaryHeap.prototype.push = function (node) {
            this._content.push(node);

            this._sinkDown(this._content.length - 1);
        };

        BinaryHeap.prototype.pop = function () {
            var result = this._content[0];

            var end = this._content.pop();

            if (this._content.length > 0) {
                this._content[0] = end;
                this._bubbleUp(0);
            }
            return result;
        };

        BinaryHeap.prototype.remove = function (node) {
            var len = this._content.length;

            for (var i = 0; i < len; i++) {
                if (this._content[i] == node) {
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
        };

        BinaryHeap.prototype.size = function () {
            return this._content.length;
        };

        BinaryHeap.prototype.rescoreElement = function (node) {
            this._sinkDown(this._content.indexOf(node));
        };

        BinaryHeap.prototype._sinkDown = function (n) {
            var element = this._content[n];

            while (n > 0) {
                var parentN = Math.floor((n + 1) >> 1) - 1, parent = this._content[parentN];

                if (this._scoreFunction(element) < this._scoreFunction(parent)) {
                    this._content[parentN] = element;
                    this._content[n] = parent;

                    n = parentN;
                } else {
                    break;
                }
            }
        };

        BinaryHeap.prototype._bubbleUp = function (n) {
            var length = this._content.length, element = this._content[n], elemScore = this._scoreFunction(element);

            while (true) {
                var child2N = (n + 1) * 2, child1N = child2N - 1;

                var swap = null;

                if (child1N < length) {
                    var child1 = this._content[child1N], child1Score = this._scoreFunction(child1);

                    if (child1Score < elemScore)
                        swap = child1N;
                }

                if (child2N < length) {
                    var child2 = this._content[child2N], child2Score = this._scoreFunction(child2);
                    if (child2Score < (swap == null ? elemScore : child1Score))
                        swap = child2N;
                }

                if (swap != null) {
                    this._content[n] = this._content[swap];
                    this._content[swap] = element;
                    n = swap;
                } else {
                    break;
                }
            }
        };
        return BinaryHeap;
    })();
    Engine.BinaryHeap = BinaryHeap;
})(Engine || (Engine = {}));
