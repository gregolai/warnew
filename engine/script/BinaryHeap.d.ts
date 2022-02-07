/// <reference path="_include.d.ts" />
declare module Engine {
    class BinaryHeap<T> {
        private _content;
        private _scoreFunction;
        constructor(scoreFunction: (element: T) => number);
        public reset(scoreFunction?: (element: T) => number): BinaryHeap<T>;
        public push(node: T): void;
        public pop(): T;
        public remove(node: T): boolean;
        public size(): number;
        public rescoreElement(node: T): void;
        private _sinkDown(n);
        private _bubbleUp(n);
    }
}
