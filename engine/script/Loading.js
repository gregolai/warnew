/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Loading;
    (function (Loading) {
        var _dom;

        function start(container) {
            _dom = document.createElement("div");
            _dom.id = "loading";
            _dom.style.position = "absolute";
            _dom.style.width = "100%";
            _dom.style.height = "100%";
            _dom.style.backgroundColor = "#000";
            _dom.style.zIndex = "1";
            container.appendChild(_dom);

            // "Loading..." TEXT
            var text = document.createElement("p");
            text.innerText = "Loading...";
            text.style.position = "absolute";
            text.style.left = "0";
            text.style.right = "0";
            text.style.top = "50%";
            text.style.textAlign = "center";
            text.style.color = "#fff";
            _dom.appendChild(text);
        }
        Loading.start = start;

        function end(fadeDuration, callback) {
            $(_dom).fadeOut(fadeDuration, callback);
        }
        Loading.end = end;
    })(Loading || (Loading = {}));
})(Engine || (Engine = {}));
