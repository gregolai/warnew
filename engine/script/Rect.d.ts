/// <reference path="_include.d.ts" />
declare module Engine {
    class Rect {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public right : number;
        public bottom : number;
        constructor(x?: number, y?: number, width?: number, height?: number);
        public clone(): Rect;
        public set(r: Rect): Rect;
        public set(x: number, y: number, width: number, height: number): Rect;
        public toArray(): number[];
        public fromArray(v: number[]): Rect;
        public setPosition(p: Engine.Vec2): Rect;
        public setPosition(x: number, y: number): Rect;
        public setSize(p: Engine.Vec2): Rect;
        public setSize(width: number, height: number): Rect;
        public fromPoints(p0: Engine.Vec2, p1: Engine.Vec2): Rect;
        public union(r: Rect): Rect;
        public union(x: number, y: number, width: number, height: number): Rect;
        public containsPoint(p: Engine.Vec2): boolean;
        public containsPoint(x: number, y: number): boolean;
        public containsRect(r: Rect): boolean;
        public containsRect(x: number, y: number, width: number, height: number): boolean;
        public intersectsRect(r: Rect): boolean;
        public intersectsRect(x: number, y: number, width: number, height: number): boolean;
        public getCenter(): Engine.Vec2;
    }
}
