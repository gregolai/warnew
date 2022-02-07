var Engine;
(function (Engine) {
    (function (Game) {
        /// <reference path="../_include.ts" />
        (function (ActionState) {
            var Moving = (function () {
                function Moving(entity) {
                    this._entity = entity;
                    this._world = entity.world;
                }
                Moving.prototype.reset = function (destTile, ticks) {
                    var curTile = this._entity.getTile();
                    if (!curTile || !destTile) {
                        return false;
                    }

                    var dx = destTile.x - curTile.x;
                    var dy = destTile.y - curTile.y;
                    if (dx > 1 || dx < 1 || dy > 1 || dy < 1) {
                        return false;
                    }

                    var dir = (dx < 0 ? Game.Direction.Left : (dx > 0 ? Game.Direction.Right : 0)) | (dy < 0 ? Game.Direction.Up : (dy > 0 ? Game.Direction.Down : 0));
                    var step = Math.max(this._entity.getMoveSpeed(), 0.0001) * Game.ENTITY_MOVE_SPEED_MULTIPLIER;

                    this._stepX = dx * step;
                    this._stepY = dy * step;
                    this._endX = destTile.center.x;
                    this._endY = destTile.center.y;
                    this._endTick = Math.max(Math.floor(Game.TILE_SIZE / step), 1);

                    return true;
                };

                Moving.prototype.tick = function (ticks) {
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
                return Moving;
            })();
            ActionState.Moving = Moving;
        })(Game.ActionState || (Game.ActionState = {}));
        var ActionState = Game.ActionState;
    })(Engine.Game || (Engine.Game = {}));
    var Game = Engine.Game;
})(Engine || (Engine = {}));
