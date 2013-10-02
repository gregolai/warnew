/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Pool = (function () {
        function Pool(Class, max) {
            this._Class = Class;
            this._queue = [];
            this._max = max;
        }
        Pool.prototype.allocate = function (p) {
            var q = this._queue;
            if (q.length < this._max) {
                q.push(new this._Class(p));
            }
        };
        return Pool;
    })();
    Engine.Pool = Pool;
})(Engine || (Engine = {}));
