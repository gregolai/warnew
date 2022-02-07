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
                BeingConstructed.prototype.reset = function (builder, buildTime) {
                    this._seqInterval = buildTime >> 2;

                    this._seqIndex = 1;
                    this._endProgress = buildTime;

                    return true;
                };

                BeingConstructed.prototype.tick = function (ticks) {
                    if (ticks >= this._seqIndex * this._seqInterval) {
                        if (index === 0 || index === 2)
                            // SET SECOND FRAME OF CONSTRUCTION-SITE OR CONSTRUCTION SEQUENCE
                            this._entity._sequence.incrementFrame();
else if (index === 1)
                            // SET SEQUENCE TO CONSTRUCTION (FIRST FRAME);
                            this._entity._setSequence("construction");

                        this._seqIndex += 1;
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
