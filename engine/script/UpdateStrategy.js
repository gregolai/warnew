var Engine;
(function (Engine) {
    var NoUpdateStrategy = (function () {
        function NoUpdateStrategy() {
        }
        NoUpdateStrategy.prototype.begin = function (callback) {
            callback();
        };
        NoUpdateStrategy.prototype.end = function () {
        };
        return NoUpdateStrategy;
    })();
    Engine.NoUpdateStrategy = NoUpdateStrategy;

    var DefaultUpdateStrategy = (function () {
        function DefaultUpdateStrategy(state, fixedInterval) {
            this._state = state;
            this._fixedInterval = fixedInterval;
        }
        DefaultUpdateStrategy.prototype.begin = function (callback) {
            this._frameAccum = 0;
            this._active = true;

            var self = this;
            requestAnimationFrame(function (now) {
                self._prevTime = now;
                self._loop(now);
                callback();
            });
        };

        DefaultUpdateStrategy.prototype.end = function () {
            this._active = false;
        };

        DefaultUpdateStrategy.prototype._loop = function (now) {
            if (!this._active)
                return;

            var dt = now - this._prevTime;
            var fixedInterval = this._fixedInterval;

            this._frameAccum += dt;

            if (this._frameAccum >= fixedInterval) {
                do {
                    this._state.fixedUpdate();

                    this._frameAccum -= fixedInterval;
                } while(this._frameAccum >= fixedInterval);
            }

            this._state.update(dt);
            this._state.draw();

            this._prevTime = now;

            var self = this;
            requestAnimationFrame(function (now) {
                self._loop(now);
            });
        };
        return DefaultUpdateStrategy;
    })();
    Engine.DefaultUpdateStrategy = DefaultUpdateStrategy;
})(Engine || (Engine = {}));
