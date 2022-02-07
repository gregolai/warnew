/// <reference path="_include.d.ts" />
declare module Engine {
    class Vec3 {
        public x: number;
        public y: number;
        public z: number;
        public length : number;
        public lengthSqr : number;
        constructor(x?: number, y?: number, z?: number);
        public clone(): Vec3;
        public set(v: Vec3): Vec3;
        public set(x: number, y: number, z: number): Vec3;
        public toArray(): number[];
        public fromArray(v: number[]): Vec3;
        public add(v: Vec3): Vec3;
        public add(x: number, y: number, z: number): Vec3;
        public subtract(v: Vec3): Vec3;
        public subtract(x: number, y: number, z: number): Vec3;
        public multiply(v: Vec3): Vec3;
        public multiply(c: number): Vec3;
        public multiply(x: number, y: number, z: number): Vec3;
        public invert(): Vec3;
        public setLength(length: number): Vec3;
        public normalize(): Vec3;
        public lerp(v: Vec3, t: number): Vec3;
        public dot(v: Vec3): number;
        public distance(v: Vec3): number;
        public distance(x: number, y: number, z: number): number;
        public distanceSqr(v: Vec3): number;
        public distanceSqr(x: number, y: number, z: number): number;
    }
}
