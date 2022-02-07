/// <reference path="_include.d.ts" />
declare module Engine {
    class Font {
        private static _map;
        private static _dummyCanvas;
        private _id;
        public url: string;
        private _styles;
        constructor(id: string, url: string, styles: Engine.BitFlags<Engine.FontStyle>);
        public getString(style: Engine.FontStyle, size: number): string;
        private _styleFound(style);
        private static _fontLoadHack(family);
        private static _initMap();
    }
}
