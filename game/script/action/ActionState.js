var Engine;
(function (Engine) {
    (function (Game) {
        /// <reference path="../_include.ts"/>
        (function (ActionState) {
            function load(loader) {
                var type = loader.popInt();
            }
            ActionState.load = load;
        })(Game.ActionState || (Game.ActionState = {}));
        var ActionState = Game.ActionState;
    })(Engine.Game || (Engine.Game = {}));
    var Game = Engine.Game;
})(Engine || (Engine = {}));
