var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var AppState = (function () {
        function AppState() {
            this.id = ((this).constructor).name;
        }
        AppState.prototype.isEnding = function () {
            return Engine.getEndingState() === this;
        };

        AppState.prototype.initialize = function (callback) {
            callback();
        };
        AppState.prototype.bindEvents = function (dom) {
        };
        AppState.prototype.begin = function (hs, callback) {
            callback();
        };
        AppState.prototype.end = function () {
        };

        AppState.prototype.fixedUpdate = function () {
        };
        AppState.prototype.update = function (deltaTime) {
        };
        AppState.prototype.draw = function () {
        };

        AppState.prototype.onResize = function (width, height) {
        };
        return AppState;
    })();
    Engine.AppState = AppState;

    var GlobalState = (function (_super) {
        __extends(GlobalState, _super);
        function GlobalState() {
            _super.apply(this, arguments);
        }
        GlobalState.prototype.onAppStateChange = function (from, to) {
        };
        return GlobalState;
    })(AppState);
    Engine.GlobalState = GlobalState;
})(Engine || (Engine = {}));
