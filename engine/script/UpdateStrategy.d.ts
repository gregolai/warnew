/// <reference path="_include.d.ts" />
declare module Engine {
    interface UpdateStrategy {
        begin(callback: () => void): void;
        end(): void;
    }
    class NoUpdateStrategy implements UpdateStrategy {
        public begin(callback: () => void): void;
        public end(): void;
    }
    class DefaultUpdateStrategy implements UpdateStrategy {
        public _state: Engine.AppState;
        public _fixedInterval: number;
        public _prevTime: number;
        public _frameAccum: number;
        public _active: boolean;
        constructor(state: Engine.AppState, fixedInterval: number);
        public begin(callback: () => void): void;
        public end(): void;
        public _loop(now: number): void;
    }
}
