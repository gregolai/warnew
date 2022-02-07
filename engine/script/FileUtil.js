var Engine;
(function (Engine) {
    (function (FileUtil) {
        var _pathSuffix = window.DEBUG ? "?" + Date.now() : "";
        var _head = document.getElementsByTagName("head")[0];

        function loadScript(url, callback) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.onload = function () {
                callback();
            };
            s.onerror = function () {
                throw "Error loading script: " + url;
            };
            s.src = url + _pathSuffix;
            _head.appendChild(s);
        }
        FileUtil.loadScript = loadScript;

        function loadStylesheet(url, callback) {
            var s = document.createElement("link");
            s.type = "text/css";
            s.rel = "stylesheet";
            s.onload = function () {
                callback();
            };
            s.onerror = function () {
                throw "Error loading stylesheet: " + url;
            };
            s.href = url + _pathSuffix;
            _head.appendChild(s);
        }
        FileUtil.loadStylesheet = loadStylesheet;

        function loadHtml(url, container, callback) {
            container.load(url + _pathSuffix, function (response, status, xhr) {
                if (status === "error") {
                    throw "Error loading HTML: " + xhr.status + " " + xhr.statusText;
                }
                callback();
            });
        }
        FileUtil.loadHtml = loadHtml;

        function loadBatch(b, callback) {
            var async = new Engine.AsyncLock(callback, true);
            function unlock() {
                async.unlock();
            }

            var html = b.html;
            if (html) {
                for (var i = html.length - 1; i !== -1; --i) {
                    var def = html[i];
                    async.lock();
                    loadHtml(def.url, def.dom, unlock);
                }
            }

            var css = b.css;
            if (css) {
                for (var i = css.length - 1; i !== -1; --i) {
                    async.lock();
                    loadStylesheet(css[i], unlock);
                }
            }

            var js = b.js;
            if (js) {
                for (var i = js.length - 1; i !== -1; --i) {
                    async.lock();
                    loadScript(js[i], unlock);
                }
            }

            unlock();
        }
        FileUtil.loadBatch = loadBatch;
    })(Engine.FileUtil || (Engine.FileUtil = {}));
    var FileUtil = Engine.FileUtil;
})(Engine || (Engine = {}));
