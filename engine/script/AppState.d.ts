/// <reference path="_include.d.ts" />
declare module Engine {
    interface IAppState {
        id: string;
        initialize(callback: () => void): void;
        bindEvents(dom: JQuery): void;
    }
    class AppState implements Engine.InputListener {
        public __dom: JQuery;
        public id: string;
        public isEnding(): boolean;
        constructor();
        public initialize(callback: () => void): void;
        public bindEvents(dom: JQuery): void;
        public begin(hs: Engine.HistoryState, callback: (updateStrategy?: Engine.UpdateStrategy) => void): void;
        public end(): void;
        public fixedUpdate(): void;
        public update(deltaTime: number): void;
        public draw(): void;
        public onResize(width: number, height: number): void;
    }
    class GlobalState extends AppState {
        public onAppStateChange(from: AppState, to: AppState): void;
    }
}
