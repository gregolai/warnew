var Engine;
(function (Engine) {
    var Font = (function () {
        function Font(id, url, styles) {
            this._id = id;
            this.url = url;
            this._styles = styles;

            if (!Font._map) {
                Font._initMap();
            }

            for (var i = 0, ii = Font._map.length; i < ii; ++i) {
                var style = (1 << i);
                if (this._styleFound(style)) {
                    var family = id + "_" + Font._map[style];
                    Font._fontLoadHack(family);
                }
            }
        }
        Font.prototype.getString = function (style, size) {
            var family;
            if (this._styleFound(style)) {
                family = this._id + "_" + Font._map[style];
            } else if (this._styleFound(Engine.FontStyle.Regular)) {
                family = this._id + "_" + Font._map[Engine.FontStyle.Regular];
            } else {
                family = "Arial";
            }
            return "normal normal " + size + "px " + family;
        };

        Font.prototype._styleFound = function (style) {
            return (this._styles & style) !== 0;
        };

        Font._fontLoadHack = function (family) {
            var ctx = (Font._dummyCanvas || (Font._dummyCanvas = document.createElement("canvas"))).getContext("2d");
            ctx.font = "normal normal 10px " + family;
            ctx.fillText("x", 0, 0);
        };
        Font._initMap = function () {
            var map = Font._map = [];
            map[Engine.FontStyle.Regular] = "regular";
            map[Engine.FontStyle.Italic] = "italic";
            map[Engine.FontStyle.SemiBold] = "semibold";
            map[Engine.FontStyle.SemiBoldItalic] = "semibold_italic";
            map[Engine.FontStyle.Bold] = "bold";
            map[Engine.FontStyle.BoldItalic] = "bold_italic";
            map[Engine.FontStyle.ExtraBold] = "extrabold";
            map[Engine.FontStyle.ExtraBoldItalic] = "extrabold_italic";
            map[Engine.FontStyle.Light] = "light";
            map[Engine.FontStyle.LightItalic] = "light_italic";
            map[Engine.FontStyle.ExtraLight] = "extralight";
            map[Engine.FontStyle.ExtraLightItalic] = "extralight_italic";
        };
        return Font;
    })();
    Engine.Font = Font;
})(Engine || (Engine = {}));
