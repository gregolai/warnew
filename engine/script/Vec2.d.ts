/// <reference path="_include.d.ts" />
declare module Engine {
    class Vec2 {
        public x: number;
        public y: number;
        public length : number;
        public lengthSqr : number;
        constructor(x?: number, y?: number);
        public clone(): Vec2;
        public set(v: Vec2): Vec2;
        public set(x: number, y: number): Vec2;
        public toArray(): number[];
        public fromArray(v: number[]): Vec2;
        public add(v: Vec2): Vec2;
        public add(x: number, y: number): Vec2;
        public subtract(v: Vec2): Vec2;
        public subtract(x: number, y: number): Vec2;
        public multiply(v: Vec2): Vec2;
        public multiply(c: number): Vec2;
        public multiply(x: number, y: number): Vec2;
        public invert(): Vec2;
        public setLength(length: number): Vec2;
        public normalize(): Vec2;
        public lerp(v: Vec2, t: number): Vec2;
        public dot(v: Vec2): number;
        public distance(v: Vec2): number;
        public distance(x: number, y: number): number;
        public distanceSqr(v: Vec2): number;
        public distanceSqr(x: number, y: number): number;
    }
}
