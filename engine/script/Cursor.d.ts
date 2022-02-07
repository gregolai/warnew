/// <reference path="_include.d.ts" />
declare module Engine {
    class Cursor {
        private static _currentID;
        private _id;
        public url: string;
        public hotspotX: number;
        public hotspotY: number;
        private _style;
        static clear(): void;
        constructor(id: string, url: string, offX: number, offY: number);
        public dispose(): void;
        public apply(): void;
    }
}
