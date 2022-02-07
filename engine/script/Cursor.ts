/// <reference path="_include.ts" />

module Engine {

	export class Cursor {

		private static _currentID: string = "";

		private _id: string;
		url: string;
		hotspotX: number;
		hotspotY: number;

		private _style: HTMLStyleElement;

		static clear(): void {
			document.body.classList.remove("custom_cursor_" + Cursor._currentID);
			Cursor._currentID = "";
		}

		constructor(id: string, url: string, offX: number, offY: number) {

			this._id = id;
			this.url = url;
			this.hotspotX = offX;
			this.hotspotY = offY;

			var style = this._style = document.createElement("style");
			style.type = "text/css";
			style.innerHTML = ".custom_cursor_" + id + " { cursor: url(\"" + url + "\") " + offX + " " + offY + ", none; }";
			document.getElementsByTagName("head")[0].appendChild(style);
		}

		dispose(): void {
			document.getElementsByTagName("head")[0].removeChild(this._style);
			this._style = null;
			if (Cursor._currentID === this._id) {
				Cursor.clear();
			}
		}

		apply(): void {
			if (Cursor._currentID !== this._id) {
				document.body.classList.remove("custom_cursor_" + Cursor._currentID);
				document.body.classList.add("custom_cursor_" + this._id);
				Cursor._currentID = this._id;
			}
		}
	}

}