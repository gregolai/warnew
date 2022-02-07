var Engine;
(function (Engine) {
    var Random = (function () {
        function Random(seed) {
            this.rollCount = 0;
            this._rand = new Engine.MersenneTwister(seed);
        }
        Random.prototype.ratio = function () {
            ++this.rollCount;
            return Random._ratio(this._rand);
        };
        Random.ratio = function () {
            return Random._ratio(Math);
        };
        Random._ratio = function (gen) {
            return gen.random();
        };

        Random.prototype.real = function (min, max) {
            ++this.rollCount;
            return Random._real(this._rand, min, max);
        };
        Random.real = function (min, max) {
            return Random._real(Math, min, max);
        };
        Random._real = function (gen, min, max) {
            return min + gen.random() * (max - min);
        };

        Random.prototype.integer = function (min, max) {
            ++this.rollCount;
            return Random._integer(this._rand, min, max);
        };
        Random.integer = function (min, max) {
            return Random._integer(Math, min, max);
        };
        Random._integer = function (gen, min, max) {
            return Math.floor(min + gen.random() * (max - min));
        };

        Random.prototype.boolean = function (trueWeight) {
            ++this.rollCount;
            return Random._boolean(this._rand, trueWeight);
        };
        Random.boolean = function (trueWeight) {
            return Random._boolean(Math, trueWeight);
        };
        Random._boolean = function (gen, trueWeight) {
            if (typeof trueWeight === "undefined") { trueWeight = 0.5; }
            return gen.random() < trueWeight;
        };

        Random.prototype.string = function (length, chars) {
            ++this.rollCount;
            return Random._string(this._rand, length, chars);
        };
        Random.string = function (length, chars) {
            return Random._string(Math, length, chars);
        };
        Random._string = function (gen, length, chars) {
            if (typeof chars === "undefined") { chars = Random._stringChars; }
            var len = chars.length;
            var floor = Math.floor;
            var result = "";
            for (var i = 0; i < length; ++i)
                result += chars.charAt(floor(gen.random() * len));
            return result;
        };
        Random._stringChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return Random;
    })();
    Engine.Random = Random;
})(Engine || (Engine = {}));
