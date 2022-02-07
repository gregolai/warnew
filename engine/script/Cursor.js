var Engine;
(function (Engine) {
    var Cursor = (function () {
        function Cursor(id, url, offX, offY) {
            this._id = id;
            this.url = url;
            this.hotspotX = offX;
            this.hotspotY = offY;

            var style = this._style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = ".custom_cursor_" + id + " { cursor: url(\"" + url + "\") " + offX + " " + offY + ", none; }";
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        Cursor.clear = function () {
            document.body.classList.remove("custom_cursor_" + Cursor._currentID);
            Cursor._currentID = "";
        };

        Cursor.prototype.dispose = function () {
            document.getElementsByTagName("head")[0].removeChild(this._style);
            this._style = null;
            if (Cursor._currentID === this._id) {
                Cursor.clear();
            }
        };

        Cursor.prototype.apply = function () {
            if (Cursor._currentID !== this._id) {
                document.body.classList.remove("custom_cursor_" + Cursor._currentID);
                document.body.classList.add("custom_cursor_" + this._id);
                Cursor._currentID = this._id;
            }
        };
        Cursor._currentID = "";
        return Cursor;
    })();
    Engine.Cursor = Cursor;
})(Engine || (Engine = {}));
