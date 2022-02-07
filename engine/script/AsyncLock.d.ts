/// <reference path="_include.d.ts" />
declare module Engine {
    class AsyncLock {
        private _locks;
        private _active;
        private _callback;
        private _asyncRequired;
        constructor(callback: () => void, asyncRequired?: boolean);
        public lock(howMany?: number): void;
        public unlock(howMany?: number): void;
        private _unlock(howMany);
    }
}
