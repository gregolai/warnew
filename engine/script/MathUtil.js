var Engine;
(function (Engine) {
    (function (MathUtil) {
        function clamp(v, min, max) {
            return v < min ? min : (v > max ? max : v);
        }
        MathUtil.clamp = clamp;
    })(Engine.MathUtil || (Engine.MathUtil = {}));
    var MathUtil = Engine.MathUtil;
})(Engine || (Engine = {}));
