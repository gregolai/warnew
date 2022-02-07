/// <reference path="_include.d.ts" />
declare module Engine {
    interface IRandomGen {
        random(): number;
    }
    class Random {
        private static _stringChars;
        public rollCount: number;
        private _rand;
        constructor(seed?: number);
        public ratio(): number;
        static ratio(): number;
        private static _ratio(gen);
        public real(min: number, max: number): number;
        static real(min: number, max: number): number;
        private static _real(gen, min, max);
        public integer(min: number, max: number): number;
        static integer(min: number, max: number): number;
        private static _integer(gen, min, max);
        public boolean(trueWeight?: number): boolean;
        static boolean(trueWeight?: number): boolean;
        static _boolean(gen: IRandomGen, trueWeight?: number): boolean;
        public string(length: number, chars?: string): string;
        static string(length: number, chars?: string): string;
        private static _string(gen, length, chars?);
    }
}
