var Engine;
(function (Engine) {
    var AsyncLock = (function () {
        function AsyncLock(callback, asyncRequired) {
            this._locks = 1;
            this._active = true;
            this._callback = callback;
            this._asyncRequired = (asyncRequired !== false);
        }
        AsyncLock.prototype.lock = function (howMany) {
            if (typeof howMany === "undefined") { howMany = 1; }
            if (this._active) {
                this._locks += howMany;
            }
        };

        AsyncLock.prototype.unlock = function (howMany) {
            if (typeof howMany === "undefined") { howMany = 1; }
            if (this._active) {
                if (this._asyncRequired) {
                    var self = this;
                    setTimeout(function () {
                        self._unlock(howMany);
                    }, 0);
                } else {
                    this._unlock(howMany);
                }
            }
        };

        AsyncLock.prototype._unlock = function (howMany) {
            this._locks -= howMany;
            if (this._locks <= 0) {
                var callback = this._callback;

                this._active = false;
                this._callback = null;

                callback();
            }
        };
        return AsyncLock;
    })();
    Engine.AsyncLock = AsyncLock;
})(Engine || (Engine = {}));
