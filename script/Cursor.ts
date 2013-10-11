/// <reference path="_include.ts" />

module Engine {

	export class Cursor {

		private static _currentCursorId: string = "";

		private _id: string;
		private _style: HTMLStyleElement;

		constructor(id: string, url: string, offX: number, offY: number) {

			this._id = id;

			var style = this._style = document.createElement("style");
			style.type = "text/css";
			style.innerHTML = ".custom_cursor_" + id + " { cursor: url(\"" + url + "\") " + offX + " " + offY + ", none; }";
			document.getElementsByTagName("head")[0].appendChild(style);
		}

		dispose(): void {
			document.getElementsByTagName("head")[0].removeChild(this._style);
			this._style = null;
			if (Cursor._currentCursorId === this._id) {
				App.container.classList.remove("custom_cursor_" + Cursor._currentCursorId);
				Cursor._currentCursorId = "";
			}
		}

		apply(): void {
			if (Cursor._currentCursorId !== this._id) {
				var container = App.container;
				container.classList.remove("custom_cursor_" + Cursor._currentCursorId);
				container.classList.add("custom_cursor_" + this._id);
				Cursor._currentCursorId = this._id;
			}
		}
	}

}