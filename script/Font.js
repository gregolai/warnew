/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Font = (function () {
        function Font(id, styles) {
            this._id = id;
            this._styles = styles;

            this._styleCount = 0;
            for (var s in styles) {
                Font._fontLoadHack(styles[s]);
                ++this._styleCount;
            }
        }
        Object.defineProperty(Font.prototype, "styles", {
            get: function () {
                return this._styles;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Font.prototype, "styleCount", {
            get: function () {
                return this._styleCount;
            },
            enumerable: true,
            configurable: true
        });

        Font.prototype.getString = function (style, size) {
            var family = this._styles[Font._map[style]];
            if (!family) {
                family = this._styles.regular;
            }
            return "normal normal " + size + "px " + family;
        };

        Font._fontLoadHack = function (family) {
            var ctx = (Font._dummyCanvas || (Font._dummyCanvas = document.createElement("canvas"))).getContext("2d");
            ctx.font = "normal normal 10px " + family;
            ctx.fillText("x", 0, 0);
        };
        Font._map = ["regular", "italic", "semiBold", "semiBoldItalic", "bold", "boldItalic", "light", "lightItalic", "extraLight", "extraLightItalic"];
        return Font;
    })();
    Engine.Font = Font;
})(Engine || (Engine = {}));
