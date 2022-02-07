var Engine;
(function (Engine) {
    (function (StringUtil) {
        function format(stringIn) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var ret = stringIn;
            for (var i = 0, ii = args.length; i < ii; ++i) {
                ret = ret.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
            }
            return ret;
        }
        StringUtil.format = format;
    })(Engine.StringUtil || (Engine.StringUtil = {}));
    var StringUtil = Engine.StringUtil;
})(Engine || (Engine = {}));
