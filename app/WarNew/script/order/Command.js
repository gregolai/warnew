var Engine;
(function (Engine) {
    /// <reference path="_include.ts"/>
    (function (WarNew) {
        var Order = (function () {
            function Order() {
            }
            return Order;
        })();
        WarNew.Order = Order;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
