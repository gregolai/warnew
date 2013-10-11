/// <reference path="_include.ts" />

module Engine {

	export class Font {
		private static _map: string[];
		private static _dummyCanvas: HTMLCanvasElement;

		private _id: string;
		private _styles: BitFlags<FontStyle>;

		get styles() { return this._styles; }

		constructor(id: string, styles: BitFlags<FontStyle>) {

			this._id = id;
			this._styles = styles;

			if (!Font._map) {
				Font._initMap();
			}

			for (var i = 0, ii = Font._map.length; i < ii; ++i) {
				var style = <FontStyle>(1 << i);
				if (this._styleFound(style)) {
					var family = id + "_" + Font._map[style];
					Font._fontLoadHack(family);
				}
			}
		}

		getString(style: FontStyle, size: number): string {

			var family: string;
			if (this._styleFound(style)) {
				family = this._id + "_" + Font._map[style];
			} else if (this._styleFound(FontStyle.Regular)) {
				family = this._id + "_" + Font._map[FontStyle.Regular];
			} else {
				family = "Arial";
			}
			return "normal normal " + size + "px " + family;
		}

		private _styleFound(style: FontStyle): boolean {
			return (<number>this._styles & style) !== 0;
		}

		private static _fontLoadHack(family: string): void {
			var ctx = (Font._dummyCanvas || (Font._dummyCanvas = document.createElement("canvas"))).getContext("2d");
			ctx.font = "normal normal 10px " + family;
			ctx.fillText("x", 0, 0);
		}
		private static _initMap(): void {
			var map = Font._map = [];
			map[FontStyle.Regular]				= "regular";
			map[FontStyle.Italic]				= "italic";
			map[FontStyle.SemiBold]				= "semibold";
			map[FontStyle.SemiBoldItalic]		= "semibold_italic";
			map[FontStyle.Bold]					= "bold";
			map[FontStyle.BoldItalic]			= "bold_italic";
			map[FontStyle.ExtraBold]			= "extrabold";
			map[FontStyle.ExtraBoldItalic]		= "extrabold_italic";
			map[FontStyle.Light]				= "light";
			map[FontStyle.LightItalic]			= "light_italic";
			map[FontStyle.ExtraLight]			= "extralight";
			map[FontStyle.ExtraLightItalic]		= "extralight_italic";
		}
	}

}