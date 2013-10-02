/// <reference path="_include.ts" />
var AppLauncher;
(function (AppLauncher) {
    (function (MathUtil) {
        function clamp(v, min, max) {
            return v < min ? min : (v > max ? max : v);
        }
        MathUtil.clamp = clamp;
    })(AppLauncher.MathUtil || (AppLauncher.MathUtil = {}));
    var MathUtil = AppLauncher.MathUtil;
})(AppLauncher || (AppLauncher = {}));
