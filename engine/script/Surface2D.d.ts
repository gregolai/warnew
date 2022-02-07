/// <reference path="_include.d.ts" />
declare module Engine {
    class Surface2D {
        public canvas: HTMLCanvasElement;
        public context: CanvasRenderingContext2D;
        public rect: Engine.Rect;
        public x : number;
        public y : number;
        public width : number;
        public height : number;
        constructor(container: Node);
        constructor(canvas: HTMLCanvasElement);
        public dispose(): void;
        public setPosition(p: Engine.Vec2): void;
        public setPosition(x: number, y: number): void;
        public setSize(p: Engine.Vec2): void;
        public setSize(x: number, y: number): void;
        public setRect(r: Engine.Rect): void;
        public setRect(x: number, y: number, width: number, height: number): void;
    }
}
