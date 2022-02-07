var Engine;
(function (Engine) {
    (function (Game) {
        /// <reference path="../_include.ts" />
        (function (ActionState) {
            var BeingConstructed = (function () {
                function BeingConstructed(entity) {
                    this._entity = entity;
                    this._world = entity.world;
                }
                BeingConstructed.prototype.reset = function () {
                    return true;
                };

                BeingConstructed.prototype.tick = function (ticks) {
                    if (ticks >= this._endTick) {
                        // END MOVE
                        this._entity._setPosition(this._endX, this._endY);
                        return true;
                    } else {
                        // KEEP MOVING
                        var p = this._entity.getPosition();
                        this._entity._setPosition(p.x + this._stepX, p.y + this._stepY);
                        return false;
                    }
                };
                return BeingConstructed;
            })();
            ActionState.BeingConstructed = BeingConstructed;
        })(Game.ActionState || (Game.ActionState = {}));
        var ActionState = Game.ActionState;
    })(Engine.Game || (Engine.Game = {}));
    var Game = Engine.Game;
})(Engine || (Engine = {}));
