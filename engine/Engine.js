/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    ;
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    Engine.MAX_INT = 0x7fffffff;
    Engine.BIT_0 = 0x1;
    Engine.BIT_1 = 0x2;
    Engine.BIT_2 = 0x4;
    Engine.BIT_3 = 0x8;
    Engine.BIT_4 = 0x10;
    Engine.BIT_5 = 0x20;
    Engine.BIT_6 = 0x40;
    Engine.BIT_7 = 0x80;
    Engine.BIT_8 = 0x100;
    Engine.BIT_9 = 0x200;
    Engine.BIT_10 = 0x400;
    Engine.BIT_11 = 0x800;
    Engine.BIT_12 = 0x1000;
    Engine.BIT_13 = 0x2000;
    Engine.BIT_14 = 0x4000;
    Engine.BIT_15 = 0x8000;
    Engine.BIT_16 = 0x10000;
    Engine.BIT_17 = 0x20000;
    Engine.BIT_18 = 0x40000;
    Engine.BIT_19 = 0x80000;
    Engine.BIT_20 = 0x100000;
    Engine.BIT_21 = 0x200000;
    Engine.BIT_22 = 0x400000;
    Engine.BIT_23 = 0x800000;
    Engine.BIT_24 = 0x1000000;
    Engine.BIT_25 = 0x2000000;
    Engine.BIT_26 = 0x4000000;
    Engine.BIT_27 = 0x8000000;
    Engine.BIT_28 = 0x10000000;
    Engine.BIT_29 = 0x20000000;
    Engine.BIT_30 = 0x40000000;
    Engine.ROOT_DIRECTORY = "./";
    Engine.VENDOR_DIRECTORY = Engine.ROOT_DIRECTORY + "vendor/script/";
    Engine.ASSET_DIRECTORY = Engine.ROOT_DIRECTORY + "asset/";
    Engine.GAME_DIRECTORY = Engine.ROOT_DIRECTORY + "game/";
    Engine.GAME_SCRIPT_DIRECTORY = Engine.GAME_DIRECTORY + "script/";
    Engine.GAME_STATE_DIRECTORY = Engine.GAME_SCRIPT_DIRECTORY + "state/";
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var _loadingContainer;
    var _namespace;
    Engine.disableContextMenu = true;
    var _loaded;
    var _width;
    var _height;
    var _poppingStates;
    var _vendors = [];
    var _stateList = [];
    var _globalState = null;
    var _stateMap = {};
    var _updateStrategy;
    var _changingStates;
    var _gameDom;
    var _activeState;
    var _endingState;
    function getWidth() { return _width; }
    Engine.getWidth = getWidth;
    function getHeight() { return _height; }
    Engine.getHeight = getHeight;
    function getEndingState() { return _endingState(); }
    Engine.getEndingState = getEndingState;
    function setState(a, params, data, callback) {
        var newState = (a instanceof Engine.AppState ? a : getState(a));
        if (_changingStates || !newState || newState instanceof Engine.GlobalState)
            return;
        _changingStates = true;
        var oldState = _activeState;
        var oldDom;
        if (oldState) {
            oldState.end();
            _endingState(oldState);
            oldDom = oldState.__dom;
            ko.cleanNode(oldDom.get()[0]);
            Engine.Input.unregister(oldState);
            if (_updateStrategy) {
                _updateStrategy.end();
                _updateStrategy = null;
            }
        }
        var hs = _makeHistory(newState, null, params, data);
        Engine.Cursor.clear();
        var newDom = newState.__dom;
        ko.applyBindings(newState, newDom.get()[0]);
        newState.bindEvents(newDom);
        newState.begin(hs, function (updateStrategy) {
            console.log(newState.id + " BEGIN");
            newDom.waitForImages(function () {
                pushHistory(hs);
                Engine.Input.register(newState);
                newDom.appendTo(_gameDom).show();
                if (oldDom) {
                    oldDom.remove();
                }
                _activeState = newState;
                _endingState(null);
                _resize();
                if (_globalState)
                    _globalState.onAppStateChange(oldState, newState);
                _updateStrategy = updateStrategy || null;
                if (_updateStrategy) {
                    _updateStrategy.begin(function () {
                        _changingStates = false;
                        if (callback)
                            callback();
                    });
                }
                else {
                    _changingStates = false;
                    if (callback)
                        callback();
                }
            }, function (a, b, c) {
                console.log(a, b, c);
            }, true);
        });
    }
    Engine.setState = setState;
    function _parseQuery(url) {
        var qp = {};
        var a = url.split("?", 2);
        if (a.length === 2) {
            a = a[1].split("&");
            for (var i = a.length - 1; i !== -1; --i) {
                var p = a[i].split("=", 2);
                var key = p[0].trim();
                if (key) {
                    var value = p[1];
                    value = (value && (value = value.trim()) ? decodeURIComponent(value.replace(/\+/g, " ")) : undefined);
                    qp[key] = value;
                }
            }
        }
        return qp;
    }
    function _makeHistory(state, title, params, data) {
        if (!state)
            return null;
        var qs = "?state=" + state.id.toLowerCase();
        params = params || {};
        for (var key in params) {
            qs += "&" + encodeURIComponent(key);
            var value = params[key];
            if (value !== undefined && value !== null)
                qs += "=" + encodeURIComponent(value);
        }
        var hs = { stateId: state.id, params: params, queryString: qs, data: data };
        return hs;
    }
    function _popHistory(hs) {
        if (!hs || !hs.stateId)
            return;
        _poppingStates = true;
        setState(hs.stateId, hs.params, hs.data, function () {
            _poppingStates = false;
        });
    }
    function pushHistory(a, title, params, data) {
        var hs = (a instanceof Engine.AppState ? _makeHistory(a, title, params, data) : a);
        if (hs) {
            if (!_poppingStates) {
                if (_loaded)
                    history.pushState(hs, title, hs.queryString);
                else
                    history.replaceState(hs, title, hs.queryString);
            }
        }
        return hs;
    }
    Engine.pushHistory = pushHistory;
    function getState(stateId) {
        if (!stateId)
            return null;
        return _stateMap[stateId.toLowerCase()] || null;
    }
    Engine.getState = getState;
    function initGame(p, callback) {
        window.addEventListener("popstate", function (evt) { _popHistory(evt.state); });
        window.addEventListener("resize", _resize);
        _gameDom = $("#game");
        _loaded = false;
        _loadVendorsAndStates(p.vendors, p.states, p.globalState, function () {
            Engine.Vendor.onVendorsLoaded();
            _endingState = ko.observable();
            _initStates(function () {
                var qp = _parseQuery(document.location.href);
                var state = getState(qp["state"]);
                delete qp["state"];
                if (!state) {
                    state = p.initialState;
                    qp = {};
                }
                setState(state, qp, undefined, function () {
                    _loaded = true;
                    callback();
                });
            });
        });
    }
    Engine.initGame = initGame;
    function _loadVendorsAndStates(vendors, states, globalState, callback) {
        var async = new Engine.AsyncLock(callback);
        function unlock() { async.unlock(); }
        _vendors = vendors = $.merge(vendors, [Engine.Vendor.Knockout, Engine.Vendor.LZMA]);
        var debug = window.DEBUG;
        for (var i = vendors.length - 1; i !== -1; --i) {
            var vendor = vendors[i];
            if (vendor.__seen) {
                vendors.splice(i, 1);
            }
            else {
                var url = "";
                if (debug) {
                    if (vendor.debug)
                        url = Engine.VENDOR_DIRECTORY + vendor.debug;
                    else if (vendor.release)
                        url = Engine.VENDOR_DIRECTORY + vendor.release;
                }
                else {
                    if (vendor.release)
                        url = Engine.VENDOR_DIRECTORY + vendor.release;
                    else if (vendor.debug)
                        url = Engine.VENDOR_DIRECTORY + vendor.debug;
                }
                if (url !== "") {
                    async.lock();
                    Engine.FileUtil.loadScript(url, unlock);
                }
                vendor.__seen = true;
            }
        }
        _globalState = globalState;
        _stateList = states = $.merge(states, [globalState]);
        if (!debug) {
            async.lock();
            Engine.FileUtil.loadStylesheet(Engine.ROOT_DIRECTORY + "states.css", unlock);
        }
        for (var i = states.length - 1; i !== -1; --i) {
            var state = states[i];
            var stateId = state.id;
            var stateDom = $(document.createElement("div")).attr("app-state", stateId);
            var prefix = Engine.GAME_STATE_DIRECTORY + stateId + "/" + stateId;
            async.lock();
            Engine.FileUtil.loadHtml(prefix + ".html", stateDom, unlock);
            if (debug) {
                async.lock();
                Engine.FileUtil.loadStylesheet(prefix + ".css", unlock);
            }
            state.__dom = stateDom;
            _stateMap[stateId.toLowerCase()] = state;
        }
        unlock();
    }
    function _initStates(callback) {
        var async = new Engine.AsyncLock(callback);
        function unlock() { async.unlock(); }
        var stateMap = _stateMap;
        for (var stateId in stateMap) {
            var state = stateMap[stateId];
            async.lock();
            state.initialize(unlock);
        }
        if (_globalState) {
            var dom = _globalState.__dom;
            _globalState.bindEvents(dom);
            Engine.Input.register(_globalState);
            dom.appendTo(_gameDom);
        }
        unlock();
    }
    function _resize() {
        _width = Math.max(window.innerWidth, 1);
        _height = Math.max(window.innerHeight, 1);
        var state = _activeState;
        if (state)
            state.onResize(_width, _height);
    }
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    var AppState = (function () {
        function AppState() {
            this.id = (this.constructor).name;
        }
        AppState.prototype.isEnding = function () { return Engine.getEndingState() === this; };
        AppState.prototype.initialize = function (callback) {
            callback();
        };
        AppState.prototype.bindEvents = function (dom) {
        };
        AppState.prototype.begin = function (hs, callback) {
            callback();
        };
        AppState.prototype.end = function () {
        };
        AppState.prototype.fixedUpdate = function () {
        };
        AppState.prototype.update = function (deltaTime) {
        };
        AppState.prototype.draw = function () {
        };
        AppState.prototype.onResize = function (width, height) {
        };
        return AppState;
    })();
    Engine.AppState = AppState;
    var GlobalState = (function (_super) {
        __extends(GlobalState, _super);
        function GlobalState() {
            _super.apply(this, arguments);
        }
        GlobalState.prototype.onAppStateChange = function (from, to) {
        };
        return GlobalState;
    })(AppState);
    Engine.GlobalState = GlobalState;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var AssetManager;
    (function (AssetManager) {
        var _pathSuffix = window.DEBUG ? "?" + Date.now() : "";
        var _cursors = {};
        var _fonts = {};
        var _images = {};
        var _shaders = {};
        var _sounds = {};
        function load(assets, callback) {
            var async = new Engine.AsyncLock(callback);
            var unlock = function () { async.unlock(); };
            var cursors = assets.cursors || [];
            for (var i = 0, ii = cursors.length; i < ii; ++i) {
                async.lock();
                _loadCursor(cursors[i], unlock);
            }
            var fonts = assets.fonts || [];
            for (var i = 0, ii = fonts.length; i < ii; ++i) {
                async.lock();
                _loadFont(fonts[i], unlock);
            }
            var images = assets.images || [];
            for (var i = 0, ii = images.length; i < ii; ++i) {
                async.lock();
                _loadImage(images[i], unlock);
            }
            var shaders = assets.shaders || [];
            for (var i = 0, ii = shaders.length; i < ii; ++i) {
                async.lock();
                _loadShader(shaders[i], unlock);
            }
            var sounds = assets.sounds || [];
            for (var i = 0, ii = sounds.length; i < ii; ++i) {
                async.lock();
                _loadSound(sounds[i], unlock);
            }
            unlock();
        }
        AssetManager.load = load;
        function getCursor(id) {
            return _cursors[id] || null;
        }
        AssetManager.getCursor = getCursor;
        function getFont(id) {
            return _fonts[id] || null;
        }
        AssetManager.getFont = getFont;
        function getImage(id) {
            return _images[id] || null;
        }
        AssetManager.getImage = getImage;
        function getShader(id) {
            return _shaders[id] || null;
        }
        AssetManager.getShader = getShader;
        function getSound(id) {
            return _sounds[id] || null;
        }
        AssetManager.getSound = getSound;
        function _loadCursor(asset, callback) {
            var id = asset.id;
            var hotX = asset.x;
            var hotY = asset.y;
            var url = _makeUrl("cursor", asset.filename);
            var oldCursor = _cursors[id];
            if (oldCursor) {
                if (oldCursor.url === url && oldCursor.hotspotX === hotX && oldCursor.hotspotY === hotY) {
                    callback();
                    return;
                }
                oldCursor.dispose();
            }
            console.log("LOADING NEW CURSOR");
            _cursors[id] = new Engine.Cursor(id, url, hotX, hotY);
            callback();
        }
        function _loadFont(asset, callback) {
            var id = asset.id;
            var url = _makeUrl("font", id + "/stylesheet.css");
            var oldFont = _fonts[id];
            if (oldFont && oldFont.url === url) {
                callback();
                return;
            }
            console.log("LOADING NEW FONT");
            Engine.FileUtil.loadStylesheet(url, function () {
                _fonts[id] = new Engine.Font(id, url, asset.styles);
                callback();
            });
        }
        function _loadImage(asset, callback) {
            var id = asset.id;
            var url = _makeUrl("image", asset.filename);
            var oldImage = _images[id];
            if (oldImage && oldImage["cacheUrl"].indexOf(url) !== -1) {
                callback();
                return;
            }
            console.log("LOADING NEW IMAGE");
            var img = new Image();
            img.onload = function () {
                _images[id] = img;
                callback();
            };
            img.onerror = function () {
                throw "Error loading image: " + url;
            };
            img.src = img["cacheUrl"] = url;
        }
        function _loadShader(asset, callback) {
            var id = asset.id;
            var url = _makeUrl("shader", asset.filename);
            var oldShader = _shaders[id];
            if (oldShader && oldShader.url === url) {
                callback();
                return;
            }
            console.log("LOADING NEW SHADER");
            $.ajax({
                url: url,
                dataType: "text",
                success: function (text) {
                    var type = "DEFAULT";
                    var struct = { DEFAULT: [], VERTEX: [], FRAGMENT: [] };
                    var lines = text.split("\n");
                    for (var i = 0, ii = lines.length; i < ii; ++i) {
                        var line = lines[i].trim();
                        if (line !== "") {
                            if (line.indexOf("#start ") === 0) {
                                type = line.substring(7);
                            }
                            else if (line.indexOf("#end") === 0) {
                                type = "DEFAULT";
                            }
                            else {
                                var arr = struct[type];
                                if (typeof arr !== "undefined")
                                    arr.push(line);
                            }
                        }
                    }
                    _shaders[id] = {
                        url: url,
                        vertexShader: struct.DEFAULT.concat(struct.VERTEX).join("\n"),
                        fragmentShader: struct.DEFAULT.concat(struct.FRAGMENT).join("\n")
                    };
                    callback();
                },
                error: function (jqXHR, textStatus, errorThrow) {
                    throw "Error loading shader (" + errorThrow + "): " + url;
                }
            });
        }
        function _loadSound(asset, callback) {
            var mp3Url = _makeUrl("sound", asset.filename + ".mp3");
            var oggUrl = _makeUrl("sound", asset.filename + ".ogg");
            var m4aUrl = _makeUrl("sound", asset.filename + ".m4a");
            var wavUrl = _makeUrl("sound", asset.filename + ".wav");
            var url = wavUrl;
            var sound = new Audio();
            sound.addEventListener("loadeddata", function () {
                _sounds[asset.id] = sound;
                callback();
            });
            sound.addEventListener("error", function () {
                throw "Error loading sound: " + url;
            });
            sound.src = url;
        }
        function _makeUrl(type, filename) {
            return Engine.ASSET_DIRECTORY + type + "/" + filename + _pathSuffix;
        }
    })(AssetManager = Engine.AssetManager || (Engine.AssetManager = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
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
            if (howMany === void 0) { howMany = 1; }
            if (this._active) {
                this._locks += howMany;
            }
        };
        AsyncLock.prototype.unlock = function (howMany) {
            if (howMany === void 0) { howMany = 1; }
            if (this._active) {
                if (this._asyncRequired) {
                    var self = this;
                    setTimeout(function () { self._unlock(howMany); }, 0);
                }
                else {
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
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var BinaryHeap = (function () {
        function BinaryHeap(scoreFunction) {
            this._content = [];
            this._scoreFunction = scoreFunction;
        }
        BinaryHeap.prototype.reset = function (scoreFunction) {
            this._content.length = 0;
            if (scoreFunction)
                this._scoreFunction = scoreFunction;
            return this;
        };
        BinaryHeap.prototype.push = function (node) {
            this._content.push(node);
            this._sinkDown(this._content.length - 1);
        };
        BinaryHeap.prototype.pop = function () {
            var result = this._content[0];
            var end = this._content.pop();
            if (this._content.length > 0) {
                this._content[0] = end;
                this._bubbleUp(0);
            }
            return result;
        };
        BinaryHeap.prototype.remove = function (node) {
            var len = this._content.length;
            for (var i = 0; i < len; i++) {
                if (this._content[i] == node) {
                    var end = this._content.pop();
                    if (i != len - 1) {
                        this._content[i] = end;
                        if (this._scoreFunction(end) < this._scoreFunction(node))
                            this._sinkDown(i);
                        else
                            this._bubbleUp(i);
                    }
                    return true;
                }
            }
            return false;
        };
        BinaryHeap.prototype.size = function () {
            return this._content.length;
        };
        BinaryHeap.prototype.rescoreElement = function (node) {
            this._sinkDown(this._content.indexOf(node));
        };
        BinaryHeap.prototype._sinkDown = function (n) {
            var element = this._content[n];
            while (n > 0) {
                var parentN = Math.floor((n + 1) >> 1) - 1, parent = this._content[parentN];
                if (this._scoreFunction(element) < this._scoreFunction(parent)) {
                    this._content[parentN] = element;
                    this._content[n] = parent;
                    n = parentN;
                }
                else {
                    break;
                }
            }
        };
        BinaryHeap.prototype._bubbleUp = function (n) {
            var length = this._content.length, element = this._content[n], elemScore = this._scoreFunction(element);
            while (true) {
                var child2N = (n + 1) * 2, child1N = child2N - 1;
                var swap = null;
                if (child1N < length) {
                    var child1 = this._content[child1N], child1Score = this._scoreFunction(child1);
                    if (child1Score < elemScore)
                        swap = child1N;
                }
                if (child2N < length) {
                    var child2 = this._content[child2N], child2Score = this._scoreFunction(child2);
                    if (child2Score < (swap == null ? elemScore : child1Score))
                        swap = child2N;
                }
                if (swap != null) {
                    this._content[n] = this._content[swap];
                    this._content[swap] = element;
                    n = swap;
                }
                else {
                    break;
                }
            }
        };
        return BinaryHeap;
    })();
    Engine.BinaryHeap = BinaryHeap;
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Vendor;
    (function (Vendor) {
        Vendor.Box2D = {
            debug: "Box2dWeb-2.1.a.3.js",
            release: "Box2dWeb-2.1.a.3.min.js"
        };
        Vendor.Gamepad = {
            debug: "gamepad.js"
        };
        Vendor.History = {
            debug: "native.history.js",
            release: "native.history.min.js"
        };
        Vendor.Knockout = {
            debug: "knockout-3.0.0.debug.js",
            release: "knockout-3.0.0.js"
        };
        Vendor.LZMA = {
            debug: "lzma.js"
        };
        Vendor.SocketIO = {
            debug: "socket.io.js",
            release: "socket.io.min.js"
        };
        Vendor.Stats = {
            release: "stats.min.js"
        };
        Vendor.Three = {
            release: "three.min.js"
        };
        Vendor.Underscore = {
            debug: "underscore.js",
            release: "underscore-min.js"
        };
        var _vendorListeners = [];
        var _vendorsLoaded = false;
        function onVendorsLoaded(callback) {
            if (_vendorsLoaded) {
                callback();
            }
            else {
                if (typeof callback === "undefined") {
                    var listeners = _vendorListeners;
                    for (var c = 0, cc = listeners.length; c < cc; ++c)
                        listeners[c]();
                    _vendorListeners.length = 0;
                    _vendorsLoaded = true;
                }
                else {
                    _vendorListeners.push(callback);
                }
            }
        }
        Vendor.onVendorsLoaded = onVendorsLoaded;
    })(Vendor = Engine.Vendor || (Engine.Vendor = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
/// <reference path="Vendor.ts" />
var Engine;
(function (Engine) {
    var Compressor;
    (function (Compressor) {
        var _lzma;
        Engine.Vendor.onVendorsLoaded(function () {
            _lzma = new LZMA(Engine.VENDOR_DIRECTORY + "lzma_worker.js");
        });
        function compress(str, mode, onFinish, onProgress) {
            _lzma.compress(str, mode, onFinish, onProgress);
        }
        Compressor.compress = compress;
        function decompress(byteArray, onFinish, onProgress) {
            _lzma.decompress(byteArray, onFinish, onProgress);
        }
        Compressor.decompress = decompress;
    })(Compressor = Engine.Compressor || (Engine.Compressor = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var CtxUtil;
    (function (CtxUtil) {
        function path(ctx, points, offset, joinLast) {
            if (joinLast === void 0) { joinLast = true; }
            var numPoints = points.length;
            if (numPoints === 0) {
                return;
            }
            var offX, offY;
            if (offset) {
                offX = offset.x;
                offY = offset.y;
            }
            else {
                offX = offY = 0;
            }
            var p = points[0];
            ctx.moveTo(p.x - offX, p.y - offY);
            for (var i = 1; i !== numPoints; ++i) {
                p = points[i];
                ctx.lineTo(p.x - offX, p.y - offY);
            }
            if (joinLast === true && numPoints !== 1) {
                p = points[0];
                ctx.lineTo(p.x - offX, p.y - offY);
            }
        }
        CtxUtil.path = path;
        (function (TextAlign) {
            TextAlign[TextAlign["Left"] = 0] = "Left";
            TextAlign[TextAlign["Center"] = 1] = "Center";
            TextAlign[TextAlign["Right"] = 2] = "Right";
        })(CtxUtil.TextAlign || (CtxUtil.TextAlign = {}));
        var TextAlign = CtxUtil.TextAlign;
        function fillTextWrapped(ctx, text, lineHeight, align, marginX, marginY, width) {
            width = width - 2 * marginX;
            var getLeft = function (line) {
                var metrics = ctx.measureText(line);
                if (align == TextAlign.Left) {
                    return marginX;
                }
                if (align == TextAlign.Center) {
                    return marginX + (width - metrics.width) * 0.5;
                }
                return marginX + width - metrics.width;
            };
            var line = "";
            var x = marginX;
            var y = marginY + lineHeight;
            var words = text.split(" ");
            for (var w = 0, ww = words.length; w < ww; ++w) {
                var word = words[w];
                var testLine = line + word + " ";
                var metrics = ctx.measureText(testLine);
                if (metrics.width > width) {
                    x = getLeft(line);
                    ctx.fillText(line, x, y);
                    y += lineHeight;
                    line = word + " ";
                }
                else {
                    line = testLine;
                }
            }
            x = getLeft(line);
            ctx.fillText(line, x, y);
            return y - marginY;
        }
        CtxUtil.fillTextWrapped = fillTextWrapped;
    })(CtxUtil = Engine.CtxUtil || (Engine.CtxUtil = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Cursor = (function () {
        function Cursor(id, url, offX, offY) {
            this._id = id;
            this.url = url;
            this.hotspotX = offX;
            this.hotspotY = offY;
            var style = this._style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = ".custom_cursor_" + id + " { cursor: url(\"" + url + "\") " + offX + " " + offY + ", none; }";
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        Cursor.clear = function () {
            document.body.classList.remove("custom_cursor_" + Cursor._currentID);
            Cursor._currentID = "";
        };
        Cursor.prototype.dispose = function () {
            document.getElementsByTagName("head")[0].removeChild(this._style);
            this._style = null;
            if (Cursor._currentID === this._id) {
                Cursor.clear();
            }
        };
        Cursor.prototype.apply = function () {
            if (Cursor._currentID !== this._id) {
                document.body.classList.remove("custom_cursor_" + Cursor._currentID);
                document.body.classList.add("custom_cursor_" + this._id);
                Cursor._currentID = this._id;
            }
        };
        Cursor._currentID = "";
        return Cursor;
    })();
    Engine.Cursor = Cursor;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var FileUtil;
    (function (FileUtil) {
        var _pathSuffix = window.DEBUG ? "?" + Date.now() : "";
        var _head = document.getElementsByTagName("head")[0];
        function loadScript(url, callback) {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.onload = function () { callback(); };
            s.onerror = function () { throw "Error loading script: " + url; };
            s.src = url + _pathSuffix;
            _head.appendChild(s);
        }
        FileUtil.loadScript = loadScript;
        function loadStylesheet(url, callback) {
            var s = document.createElement("link");
            s.type = "text/css";
            s.rel = "stylesheet";
            s.onload = function () { callback(); };
            s.onerror = function () { throw "Error loading stylesheet: " + url; };
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
            function unlock() { async.unlock(); }
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
    })(FileUtil = Engine.FileUtil || (Engine.FileUtil = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Font = (function () {
        function Font(id, url, styles) {
            this._id = id;
            this.url = url;
            this._styles = styles;
            if (!Font._map) {
                Font._initMap();
            }
            for (var i = 0, ii = Font._map.length; i < ii; ++i) {
                var style = (1 << i);
                if (this._styleFound(style)) {
                    var family = id + "_" + Font._map[style];
                    Font._fontLoadHack(family);
                }
            }
        }
        Font.prototype.getString = function (style, size) {
            var family;
            if (this._styleFound(style)) {
                family = this._id + "_" + Font._map[style];
            }
            else if (this._styleFound(Engine.FontStyle.Regular)) {
                family = this._id + "_" + Font._map[Engine.FontStyle.Regular];
            }
            else {
                family = "Arial";
            }
            return "normal normal " + size + "px " + family;
        };
        Font.prototype._styleFound = function (style) {
            return (this._styles & style) !== 0;
        };
        Font._fontLoadHack = function (family) {
            var ctx = (Font._dummyCanvas || (Font._dummyCanvas = document.createElement("canvas"))).getContext("2d");
            ctx.font = "normal normal 10px " + family;
            ctx.fillText("x", 0, 0);
        };
        Font._initMap = function () {
            var map = Font._map = [];
            map[Engine.FontStyle.Regular] = "regular";
            map[Engine.FontStyle.Italic] = "italic";
            map[Engine.FontStyle.SemiBold] = "semibold";
            map[Engine.FontStyle.SemiBoldItalic] = "semibold_italic";
            map[Engine.FontStyle.Bold] = "bold";
            map[Engine.FontStyle.BoldItalic] = "bold_italic";
            map[Engine.FontStyle.ExtraBold] = "extrabold";
            map[Engine.FontStyle.ExtraBoldItalic] = "extrabold_italic";
            map[Engine.FontStyle.Light] = "light";
            map[Engine.FontStyle.LightItalic] = "light_italic";
            map[Engine.FontStyle.ExtraLight] = "extralight";
            map[Engine.FontStyle.ExtraLightItalic] = "extralight_italic";
        };
        return Font;
    })();
    Engine.Font = Font;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Vec2 = (function () {
        function Vec2(x, y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Vec2.prototype, "length", {
            get: function () { return Math.sqrt(this.x * this.x + this.y * this.y); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec2.prototype, "lengthSqr", {
            get: function () { return this.x * this.x + this.y * this.y; },
            enumerable: true,
            configurable: true
        });
        Vec2.prototype.clone = function () {
            return new Vec2(this.x, this.y);
        };
        Vec2.prototype.set = function (a, y) {
            if (y === undefined) {
                this.x = a.x;
                this.y = a.y;
            }
            else {
                this.x = a;
                this.y = y;
            }
            return this;
        };
        Vec2.prototype.toArray = function () {
            return [this.x, this.y];
        };
        Vec2.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            return this;
        };
        Vec2.prototype.add = function (a, y) {
            if (y === undefined) {
                this.x += a.x;
                this.y += a.y;
            }
            else {
                this.x += a;
                this.y += y;
            }
            return this;
        };
        Vec2.prototype.subtract = function (a, y) {
            if (y === undefined) {
                this.x -= a.x;
                this.y -= a.y;
            }
            else {
                this.x -= a;
                this.y -= y;
            }
            return this;
        };
        Vec2.prototype.multiply = function (a, y) {
            if (y === undefined) {
                if (a instanceof Vec2) {
                    this.x *= a.x;
                    this.y *= a.y;
                }
                else {
                    this.x *= a;
                    this.y *= a;
                }
            }
            else {
                this.x *= a;
                this.y *= y;
            }
            return this;
        };
        Vec2.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
            return this;
        };
        Vec2.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
            return this;
        };
        Vec2.prototype.normalize = function () {
            if (this.lengthSqr === 0) {
                this.x = 0;
                this.y = 1;
            }
            else {
                var invLen = 1.0 / this.length;
                this.x *= invLen;
                this.y *= invLen;
            }
            return this;
        };
        Vec2.prototype.lerp = function (v, t) {
            this.x += t * (v.x - this.x);
            this.y += t * (v.y - this.y);
            return this;
        };
        Vec2.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y;
        };
        Vec2.prototype.distance = function (a, y) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
            }
            else {
                var dx = this.x - a;
                var dy = this.y - y;
            }
            return Math.sqrt(dx * dx + dy * dy);
        };
        Vec2.prototype.distanceSqr = function (a, y) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
            }
            else {
                var dx = this.x - a;
                var dy = this.y - y;
            }
            return dx * dx + dy * dy;
        };
        return Vec2;
    })();
    Engine.Vec2 = Vec2;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
/// <reference path="Vec2.ts" />
var Engine;
(function (Engine) {
    var Input;
    (function (Input) {
        var _initialized = false;
        var _mousePosition = new Engine.Vec2();
        var _keysDown = [];
        var _gamepad = null;
        var _gamepadControls = {};
        var _listeners = [];
        var _curEvent = null;
        function isKeyDown(key) {
            return _keysDown[key] || false;
        }
        Input.isKeyDown = isKeyDown;
        function getMousePosition() {
            return _mousePosition;
        }
        Input.getMousePosition = getMousePosition;
        function preventDefault() {
            if (_curEvent) {
                _curEvent.preventDefault();
                _curEvent.stopPropagation();
            }
        }
        Input.preventDefault = preventDefault;
        function register(listener) {
            if (!_initialized) {
                _init();
                _initialized = true;
            }
            if (!listener || _listeners.indexOf(listener) !== -1) {
                return;
            }
            _listeners.push(listener);
        }
        Input.register = register;
        function unregister(listener) {
            if (!listener) {
                return;
            }
            var index = _listeners.indexOf(listener);
            if (index === -1) {
                return;
            }
            _listeners.splice(index, 1);
        }
        Input.unregister = unregister;
        function _init() {
            window.addEventListener("contextmenu", _contextMenu, true);
            window.addEventListener("blur", _blur, true);
            window.addEventListener("keydown", _keyDown, false);
            window.addEventListener("keyup", _keyUp, false);
            window.addEventListener("mouseout", _mouseMove, false);
            window.addEventListener("mouseover", _mouseMove, false);
            document.body.addEventListener("mousedown", _mouseDown, false);
            window.addEventListener("mouseup", _mouseUp, false);
            window.addEventListener("mousemove", _mouseMove, false);
            document.body.addEventListener("mousewheel", _mouseWheel, false);
            document.body.addEventListener("DOMMouseScroll", _mouseWheel, false);
        }
        function _resetAllKeys() {
            for (var i = 0, ii = _keysDown.length; i < ii; ++i) {
                if (_keysDown[i]) {
                    _keysDown[i] = false;
                    __broadcast("onKeyUp", null, [i]);
                }
            }
        }
        function __broadcast(onEventName, evt, args) {
            _curEvent = evt;
            var listeners = _listeners;
            for (var i = 0, ii = listeners.length; i < ii; ++i) {
                var listener = listeners[i];
                var method = listener[onEventName];
                if (method) {
                    method.apply(listener, args);
                }
            }
        }
        function _contextMenu(evt) {
            if (Engine.disableContextMenu) {
                if (isKeyDown(Engine.Key.KEY_CTRL) && isKeyDown(Engine.Key.KEY_SHIFT)) {
                    _resetAllKeys();
                }
                else {
                    evt.preventDefault();
                    evt.stopPropagation();
                }
            }
            else {
                _resetAllKeys();
            }
        }
        function _blur(evt) {
            _resetAllKeys();
        }
        function _keyDown(evt) {
            if (!_keysDown[evt.keyCode]) {
                _keysDown[evt.keyCode] = true;
                __broadcast("onKeyDown", evt, [evt.keyCode]);
            }
            __broadcast("onBufferedKeyDown", evt, [evt.keyCode]);
        }
        function _keyUp(evt) {
            if (_keysDown[evt.keyCode]) {
                _keysDown[evt.keyCode] = false;
                __broadcast("onKeyUp", evt, [evt.keyCode]);
            }
        }
        function _mouseDown(evt) {
            _keysDown[evt.button] = true;
            __broadcast("onMouseDown", evt, [evt.pageX, evt.pageY, evt.button]);
        }
        function _mouseUp(evt) {
            _keysDown[evt.button] = false;
            __broadcast("onMouseUp", evt, [evt.pageX, evt.pageY, evt.button]);
        }
        function _mouseMove(evt) {
            var x = _mousePosition.x = evt.pageX;
            var y = _mousePosition.y = evt.pageY;
            __broadcast("onMouseMove", evt, [x, y]);
        }
        function _mouseWheel(evt) {
            var delta = evt.wheelDelta || -evt.detail;
            __broadcast("onMouseWheel", evt, [delta]);
        }
    })(Input = Engine.Input || (Engine.Input = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var MathUtil;
    (function (MathUtil) {
        function clamp(v, min, max) {
            return v < min ? min : (v > max ? max : v);
        }
        MathUtil.clamp = clamp;
    })(MathUtil = Engine.MathUtil || (Engine.MathUtil = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var MersenneTwister = (function () {
        function MersenneTwister(seed) {
            if (seed == undefined) {
                seed = new Date().getTime();
            }
            this.N = 624;
            this.M = 397;
            this.MATRIX_A = 0x9908b0df;
            this.UPPER_MASK = 0x80000000;
            this.LOWER_MASK = 0x7fffffff;
            this.mt = new Array(this.N);
            this.mti = this.N + 1;
            this.init_genrand(seed);
        }
        MersenneTwister.prototype.init_genrand = function (s) {
            this.mt[0] = s >>> 0;
            for (this.mti = 1; this.mti < this.N; this.mti++) {
                var s = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
                this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253)
                    + this.mti;
                this.mt[this.mti] >>>= 0;
            }
        };
        MersenneTwister.prototype.init_by_array = function (init_key, key_length) {
            var i, j, k;
            this.init_genrand(19650218);
            i = 1;
            j = 0;
            k = (this.N > key_length ? this.N : key_length);
            for (; k; k--) {
                var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
                this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525)))
                    + init_key[j] + j;
                this.mt[i] >>>= 0;
                i++;
                j++;
                if (i >= this.N) {
                    this.mt[0] = this.mt[this.N - 1];
                    i = 1;
                }
                if (j >= key_length)
                    j = 0;
            }
            for (k = this.N - 1; k; k--) {
                var s = this.mt[i - 1] ^ (this.mt[i - 1] >>> 30);
                this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941))
                    - i;
                this.mt[i] >>>= 0;
                i++;
                if (i >= this.N) {
                    this.mt[0] = this.mt[this.N - 1];
                    i = 1;
                }
            }
            this.mt[0] = 0x80000000;
        };
        MersenneTwister.prototype.genrand_int32 = function () {
            var y;
            var mag01 = new Array(0x0, this.MATRIX_A);
            if (this.mti >= this.N) {
                var kk;
                if (this.mti == this.N + 1)
                    this.init_genrand(5489);
                for (kk = 0; kk < this.N - this.M; kk++) {
                    y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);
                    this.mt[kk] = this.mt[kk + this.M] ^ (y >>> 1) ^ mag01[y & 0x1];
                }
                for (; kk < this.N - 1; kk++) {
                    y = (this.mt[kk] & this.UPPER_MASK) | (this.mt[kk + 1] & this.LOWER_MASK);
                    this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ (y >>> 1) ^ mag01[y & 0x1];
                }
                y = (this.mt[this.N - 1] & this.UPPER_MASK) | (this.mt[0] & this.LOWER_MASK);
                this.mt[this.N - 1] = this.mt[this.M - 1] ^ (y >>> 1) ^ mag01[y & 0x1];
                this.mti = 0;
            }
            y = this.mt[this.mti++];
            y ^= (y >>> 11);
            y ^= (y << 7) & 0x9d2c5680;
            y ^= (y << 15) & 0xefc60000;
            y ^= (y >>> 18);
            return y >>> 0;
        };
        MersenneTwister.prototype.genrand_int31 = function () {
            return (this.genrand_int32() >>> 1);
        };
        MersenneTwister.prototype.genrand_real1 = function () {
            return this.genrand_int32() * (1.0 / 4294967295.0);
        };
        MersenneTwister.prototype.random = function () {
            return this.genrand_int32() * (1.0 / 4294967296.0);
        };
        MersenneTwister.prototype.genrand_real3 = function () {
            return (this.genrand_int32() + 0.5) * (1.0 / 4294967296.0);
        };
        MersenneTwister.prototype.genrand_res53 = function () {
            var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
            return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
        };
        return MersenneTwister;
    })();
    Engine.MersenneTwister = MersenneTwister;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
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
            if (trueWeight === void 0) { trueWeight = 0.5; }
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
            if (chars === void 0) { chars = Random._stringChars; }
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
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Rect = (function () {
        function Rect(x, y, width, height) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        Object.defineProperty(Rect.prototype, "right", {
            get: function () { return this.x + this.width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "bottom", {
            get: function () { return this.y + this.height; },
            enumerable: true,
            configurable: true
        });
        Rect.prototype.clone = function () {
            return new Rect(this.x, this.y, this.width, this.height);
        };
        Rect.prototype.set = function (a, y, width, height) {
            if (a instanceof Rect) {
                this.x = a.x;
                this.y = a.y;
                this.width = a.width;
                this.height = a.height;
            }
            else {
                this.x = a;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            return this;
        };
        Rect.prototype.toArray = function () {
            return [this.x, this.y, this.width, this.height];
        };
        Rect.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            this.width = v[2] || 0;
            this.height = v[3] || 0;
            return this;
        };
        Rect.prototype.setPosition = function (a, y) {
            if (a instanceof Engine.Vec2) {
                this.x = a.x;
                this.y = a.y;
            }
            else {
                this.x = a;
                this.y = y;
            }
            return this;
        };
        Rect.prototype.setSize = function (a, height) {
            if (a instanceof Engine.Vec2) {
                this.width = a.x;
                this.height = a.y;
            }
            else {
                this.width = a;
                this.height = height;
            }
            return this;
        };
        Rect.prototype.fromPoints = function (p0, p1) {
            if (p0.x < p1.x) {
                this.x = p0.x;
                this.width = p1.x - p0.x;
            }
            else {
                this.x = p1.x;
                this.width = p0.x - p1.x;
            }
            if (p0.y < p1.y) {
                this.y = p0.y;
                this.height = p1.y - p0.y;
            }
            else {
                this.y = p1.y;
                this.height = p0.y - p1.y;
            }
            return this;
        };
        Rect.prototype.union = function (a, y, width, height) {
            var ux, uy;
            if (a instanceof Rect) {
                ux = Math.min(this.x, a.x);
                uy = Math.min(this.y, a.y);
                this.width = Math.max(this.x + this.width, a.x + a.width) - ux;
                this.height = Math.max(this.y + this.height, a.y + a.height) - uy;
            }
            else {
                ux = Math.min(this.x, a);
                uy = Math.min(this.y, y);
                this.width = Math.max(this.x + this.width, a + width) - ux;
                this.height = Math.max(this.y + this.height, y + height) - uy;
            }
            this.x = ux;
            this.y = uy;
            return this;
        };
        Rect.prototype.containsPoint = function (a, y) {
            if (a instanceof Engine.Vec2) {
                return a.x >= this.x
                    && a.x <= this.x + this.width
                    && a.y >= this.y
                    && a.y <= this.y + this.height;
            }
            else {
                return a >= this.x
                    && a <= this.x + this.width
                    && y >= this.y
                    && y <= this.y + this.height;
            }
        };
        Rect.prototype.containsRect = function (a, y, width, height) {
            if (a instanceof Rect) {
                return a.x >= this.x
                    && a.x + a.width <= this.x + this.width
                    && a.y >= this.y
                    && a.y + a.height <= this.y + this.height;
            }
            else {
                return a >= this.x
                    && a + width <= this.x + this.width
                    && y >= this.y
                    && y + height <= this.y + this.height;
            }
        };
        Rect.prototype.intersectsRect = function (a, y, width, height) {
            if (a instanceof Rect) {
                return a.x <= this.x + this.width
                    && a.x + a.width >= this.x
                    && a.y <= this.y + this.height
                    && a.y + a.height >= this.y;
            }
            else {
                return a <= this.x + this.width
                    && a + width >= this.x
                    && y <= this.y + this.height
                    && y + height >= this.y;
            }
        };
        Rect.prototype.getCenter = function () {
            return new Engine.Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
        };
        return Rect;
    })();
    Engine.Rect = Rect;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var StringUtil;
    (function (StringUtil) {
        function format(stringIn) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var ret = stringIn;
            for (var i = 0, ii = args.length; i < ii; ++i) {
                ret = ret.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
            }
            return ret;
        }
        StringUtil.format = format;
    })(StringUtil = Engine.StringUtil || (Engine.StringUtil = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Surface2D = (function () {
        function Surface2D(c) {
            if (c instanceof HTMLCanvasElement) {
                this.canvas = c;
            }
            else {
                this.canvas = document.createElement("canvas");
                this.canvas.style.position = "absolute";
                c.appendChild(this.canvas);
            }
            this.context = this.canvas.getContext("2d");
            this.rect = new Engine.Rect();
            this.canvas.style.zIndex = "0";
        }
        Object.defineProperty(Surface2D.prototype, "x", {
            get: function () { return this.rect.x; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Surface2D.prototype, "y", {
            get: function () { return this.rect.y; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Surface2D.prototype, "width", {
            get: function () { return this.rect.width; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Surface2D.prototype, "height", {
            get: function () { return this.rect.height; },
            enumerable: true,
            configurable: true
        });
        Surface2D.prototype.dispose = function () {
            var container = this.canvas.parentNode;
            if (container)
                container.removeChild(this.canvas);
            this.canvas = null;
            this.context = null;
        };
        Surface2D.prototype.setPosition = function (a, y) {
            if (a instanceof Engine.Vec2) {
                this.canvas.style.left = (this.rect.x = a.x) + "px";
                this.canvas.style.top = (this.rect.y = a.y) + "px";
            }
            else {
                this.canvas.style.left = (this.rect.x = a) + "px";
                this.canvas.style.top = (this.rect.y = y) + "px";
            }
        };
        Surface2D.prototype.setSize = function (a, y) {
            if (a instanceof Engine.Vec2) {
                this.canvas.width = this.rect.width = a.x;
                this.canvas.height = this.rect.height = a.y;
            }
            else {
                this.canvas.width = this.rect.width = a;
                this.canvas.height = this.rect.height = y;
            }
        };
        Surface2D.prototype.setRect = function (a, y, width, height) {
            if (a instanceof Engine.Rect) {
                this.setPosition(a.x, a.y);
                this.setSize(a.width, a.height);
            }
            else {
                this.setPosition(a, y);
                this.setSize(width, height);
            }
        };
        return Surface2D;
    })();
    Engine.Surface2D = Surface2D;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
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
                } while (this._frameAccum >= fixedInterval);
            }
            this._state.update(dt);
            this._state.draw();
            this._prevTime = now;
            var self = this;
            requestAnimationFrame(function (now) { self._loop(now); });
        };
        return DefaultUpdateStrategy;
    })();
    Engine.DefaultUpdateStrategy = DefaultUpdateStrategy;
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Vec3 = (function () {
        function Vec3(x, y, z) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (z === void 0) { z = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Object.defineProperty(Vec3.prototype, "length", {
            get: function () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec3.prototype, "lengthSqr", {
            get: function () { return this.x * this.x + this.y * this.y + this.z * this.z; },
            enumerable: true,
            configurable: true
        });
        Vec3.prototype.clone = function () {
            return new Vec3(this.x, this.y, this.z);
        };
        Vec3.prototype.set = function (a, y, z) {
            if (y === undefined) {
                this.x = a.x;
                this.y = a.y;
                this.z = a.z;
            }
            else {
                this.x = a;
                this.y = y;
                this.z = z;
            }
            return this;
        };
        Vec3.prototype.toArray = function () {
            return [this.x, this.y, this.z];
        };
        Vec3.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            this.z = v[2] || 0;
            return this;
        };
        Vec3.prototype.add = function (a, y, z) {
            if (y === undefined) {
                this.x += a.x;
                this.y += a.y;
                this.z += a.z;
            }
            else {
                this.x += a;
                this.y += y;
                this.z += z;
            }
            return this;
        };
        Vec3.prototype.subtract = function (a, y, z) {
            if (y === undefined) {
                this.x -= a.x;
                this.y -= a.y;
                this.z -= a.z;
            }
            else {
                this.x -= a;
                this.y -= y;
                this.z -= z;
            }
            return this;
        };
        Vec3.prototype.multiply = function (a, y, z) {
            if (y === undefined) {
                if (a instanceof Vec3) {
                    this.x *= a.x;
                    this.y *= a.y;
                    this.z *= a.z;
                }
                else {
                    this.x *= a;
                    this.y *= a;
                    this.z *= a;
                }
            }
            else {
                this.x *= a;
                this.y *= y;
                this.z *= z;
            }
            return this;
        };
        Vec3.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
            return this;
        };
        Vec3.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
            return this;
        };
        Vec3.prototype.normalize = function () {
            if (this.lengthSqr === 0) {
                this.x = 0;
                this.y = 1;
                this.z = 0;
            }
            else {
                var invLen = 1.0 / this.length;
                this.x *= invLen;
                this.y *= invLen;
                this.z *= invLen;
            }
            return this;
        };
        Vec3.prototype.lerp = function (v, t) {
            this.x += t * (v.x - this.x);
            this.y += t * (v.y - this.y);
            this.z += t * (v.z - this.z);
            return this;
        };
        Vec3.prototype.dot = function (v) {
            return this.x * v.x + this.y * v.y + this.z + v.z;
        };
        Vec3.prototype.distance = function (a, y, z) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
                var dz = this.z - a.z;
            }
            else {
                var dx = this.x - a;
                var dy = this.y - y;
                var dz = this.z - z;
            }
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        };
        Vec3.prototype.distanceSqr = function (a, y, z) {
            if (y === undefined) {
                var dx = this.x - a.x;
                var dy = this.y - a.y;
                var dz = this.z - a.z;
            }
            else {
                var dx = this.x - a;
                var dy = this.y - y;
                var dz = this.z - z;
            }
            return dx * dx + dy * dy + dz * dz;
        };
        return Vec3;
    })();
    Engine.Vec3 = Vec3;
})(Engine || (Engine = {}));
// VENDOR DEFS
/// <reference path="../vendor/Vendor.d.ts"/>
/// <reference path="_enum.ts" />
/// <reference path="_interface.ts" />
/// <reference path="_var.ts" />
/// <reference path="Engine.ts" />
/// <reference path="script/AppState.ts" />
/// <reference path="script/AssetManager.ts" />
/// <reference path="script/AsyncLock.ts"/>
/// <reference path="script/BinaryHeap.ts"/>
/// <reference path="script/Compressor.ts" />
/// <reference path="script/CtxUtil.ts" />
/// <reference path="script/Cursor.ts"/>
/// <reference path="script/FileUtil.ts"/>
/// <reference path="script/Font.ts"/>
/// <reference path="script/Input.ts"/>
/// <reference path="script/MathUtil.ts"/>
/// <reference path="script/MersenneTwister.ts"/>
/// <reference path="script/Random.ts"/>
/// <reference path="script/Rect.ts"/>
/// <reference path="script/StringUtil.ts"/>
/// <reference path="script/Surface2D.ts"/>
/// <reference path="script/UpdateStrategy.ts"/>
/// <reference path="script/Vec2.ts"/>
/// <reference path="script/Vec3.ts"/>
/// <reference path="script/Vendor.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    (function (FontStyle) {
        FontStyle[FontStyle["Regular"] = 1] = "Regular";
        FontStyle[FontStyle["Italic"] = 2] = "Italic";
        FontStyle[FontStyle["SemiBold"] = 4] = "SemiBold";
        FontStyle[FontStyle["SemiBoldItalic"] = 8] = "SemiBoldItalic";
        FontStyle[FontStyle["Bold"] = 16] = "Bold";
        FontStyle[FontStyle["BoldItalic"] = 32] = "BoldItalic";
        FontStyle[FontStyle["ExtraBold"] = 64] = "ExtraBold";
        FontStyle[FontStyle["ExtraBoldItalic"] = 128] = "ExtraBoldItalic";
        FontStyle[FontStyle["Light"] = 256] = "Light";
        FontStyle[FontStyle["LightItalic"] = 512] = "LightItalic";
        FontStyle[FontStyle["ExtraLight"] = 1024] = "ExtraLight";
        FontStyle[FontStyle["ExtraLightItalic"] = 2048] = "ExtraLightItalic";
    })(Engine.FontStyle || (Engine.FontStyle = {}));
    var FontStyle = Engine.FontStyle;
    var GamepadControl = (function () {
        function GamepadControl() {
        }
        GamepadControl.A = "FACE_1";
        GamepadControl.B = "FACE_2";
        GamepadControl.X = "FACE_3";
        GamepadControl.Y = "FACE_4";
        GamepadControl.RightShoulderFront = "RIGHT_TOP_SHOULDER";
        GamepadControl.LeftShoulderFront = "LEFT_TOP_SHOULDER";
        GamepadControl.DPadLeft = "DPAD_LEFT";
        GamepadControl.DPadUp = "DPAD_UP";
        GamepadControl.DPadRight = "DPAD_RIGHT";
        GamepadControl.DPadDown = "DPAD_DOWN";
        GamepadControl.LeftStickHit = "LEFT_STICK";
        GamepadControl.RightStickHit = "RIGHT_STICK";
        GamepadControl.Back = "Raw Button 8";
        GamepadControl.Start = "Raw Button 9";
        GamepadControl.RightShoulderBack = "RIGHT_BOTTOM_SHOULDER";
        GamepadControl.LeftShoulderBack = "LEFT_BOTTOM_SHOULDER";
        GamepadControl.LeftStickX = "LEFT_STICK_X";
        GamepadControl.LeftStickY = "LEFT_STICK_Y";
        GamepadControl.RightStickX = "RIGHT_STICK_X";
        GamepadControl.RightStickY = "RIGHT_STICK_Y";
        return GamepadControl;
    })();
    Engine.GamepadControl = GamepadControl;
    (function (Key) {
        Key[Key["None"] = 255] = "None";
        Key[Key["KEY_MOUSE_LEFT"] = 0] = "KEY_MOUSE_LEFT";
        Key[Key["KEY_MOUSE_MIDDLE"] = 1] = "KEY_MOUSE_MIDDLE";
        Key[Key["KEY_MOUSE_RIGHT"] = 2] = "KEY_MOUSE_RIGHT";
        Key[Key["KEY_BACKSPACE"] = 8] = "KEY_BACKSPACE";
        Key[Key["KEY_TAB"] = 9] = "KEY_TAB";
        Key[Key["KEY_ENTER"] = 13] = "KEY_ENTER";
        Key[Key["KEY_SHIFT"] = 16] = "KEY_SHIFT";
        Key[Key["KEY_CTRL"] = 17] = "KEY_CTRL";
        Key[Key["KEY_ALT"] = 18] = "KEY_ALT";
        Key[Key["KEY_PAUSEBREAK"] = 19] = "KEY_PAUSEBREAK";
        Key[Key["KEY_CAPSLOCK"] = 20] = "KEY_CAPSLOCK";
        Key[Key["KEY_ESCAPE"] = 27] = "KEY_ESCAPE";
        Key[Key["KEY_SPACE"] = 32] = "KEY_SPACE";
        Key[Key["KEY_PAGEUP"] = 33] = "KEY_PAGEUP";
        Key[Key["KEY_PAGEDOWN"] = 34] = "KEY_PAGEDOWN";
        Key[Key["KEY_END"] = 35] = "KEY_END";
        Key[Key["KEY_HOME"] = 36] = "KEY_HOME";
        Key[Key["KEY_LEFT"] = 37] = "KEY_LEFT";
        Key[Key["KEY_UP"] = 38] = "KEY_UP";
        Key[Key["KEY_RIGHT"] = 39] = "KEY_RIGHT";
        Key[Key["KEY_DOWN"] = 40] = "KEY_DOWN";
        Key[Key["KEY_INSERT"] = 45] = "KEY_INSERT";
        Key[Key["KEY_DELETE"] = 46] = "KEY_DELETE";
        Key[Key["KEY_0"] = 48] = "KEY_0";
        Key[Key["KEY_1"] = 49] = "KEY_1";
        Key[Key["KEY_2"] = 50] = "KEY_2";
        Key[Key["KEY_3"] = 51] = "KEY_3";
        Key[Key["KEY_4"] = 52] = "KEY_4";
        Key[Key["KEY_5"] = 53] = "KEY_5";
        Key[Key["KEY_6"] = 54] = "KEY_6";
        Key[Key["KEY_7"] = 55] = "KEY_7";
        Key[Key["KEY_8"] = 56] = "KEY_8";
        Key[Key["KEY_9"] = 57] = "KEY_9";
        Key[Key["KEY_A"] = 65] = "KEY_A";
        Key[Key["KEY_B"] = 66] = "KEY_B";
        Key[Key["KEY_C"] = 67] = "KEY_C";
        Key[Key["KEY_D"] = 68] = "KEY_D";
        Key[Key["KEY_E"] = 69] = "KEY_E";
        Key[Key["KEY_F"] = 70] = "KEY_F";
        Key[Key["KEY_G"] = 71] = "KEY_G";
        Key[Key["KEY_H"] = 72] = "KEY_H";
        Key[Key["KEY_I"] = 73] = "KEY_I";
        Key[Key["KEY_J"] = 74] = "KEY_J";
        Key[Key["KEY_K"] = 75] = "KEY_K";
        Key[Key["KEY_L"] = 76] = "KEY_L";
        Key[Key["KEY_M"] = 77] = "KEY_M";
        Key[Key["KEY_N"] = 78] = "KEY_N";
        Key[Key["KEY_O"] = 79] = "KEY_O";
        Key[Key["KEY_P"] = 80] = "KEY_P";
        Key[Key["KEY_Q"] = 81] = "KEY_Q";
        Key[Key["KEY_R"] = 82] = "KEY_R";
        Key[Key["KEY_S"] = 83] = "KEY_S";
        Key[Key["KEY_T"] = 84] = "KEY_T";
        Key[Key["KEY_U"] = 85] = "KEY_U";
        Key[Key["KEY_V"] = 86] = "KEY_V";
        Key[Key["KEY_W"] = 87] = "KEY_W";
        Key[Key["KEY_X"] = 88] = "KEY_X";
        Key[Key["KEY_Y"] = 89] = "KEY_Y";
        Key[Key["KEY_Z"] = 90] = "KEY_Z";
        Key[Key["KEY_LEFT_WINDOW"] = 91] = "KEY_LEFT_WINDOW";
        Key[Key["KEY_RIGHT_WINDOW"] = 92] = "KEY_RIGHT_WINDOW";
        Key[Key["KEY_SELECT"] = 93] = "KEY_SELECT";
        Key[Key["KEY_NUMPAD_0"] = 96] = "KEY_NUMPAD_0";
        Key[Key["KEY_NUMPAD_1"] = 97] = "KEY_NUMPAD_1";
        Key[Key["KEY_NUMPAD_2"] = 98] = "KEY_NUMPAD_2";
        Key[Key["KEY_NUMPAD_3"] = 99] = "KEY_NUMPAD_3";
        Key[Key["KEY_NUMPAD_4"] = 100] = "KEY_NUMPAD_4";
        Key[Key["KEY_NUMPAD_5"] = 101] = "KEY_NUMPAD_5";
        Key[Key["KEY_NUMPAD_6"] = 102] = "KEY_NUMPAD_6";
        Key[Key["KEY_NUMPAD_7"] = 103] = "KEY_NUMPAD_7";
        Key[Key["KEY_NUMPAD_8"] = 104] = "KEY_NUMPAD_8";
        Key[Key["KEY_NUMPAD_9"] = 105] = "KEY_NUMPAD_9";
        Key[Key["KEY_MULTIPLY"] = 106] = "KEY_MULTIPLY";
        Key[Key["KEY_ADD"] = 107] = "KEY_ADD";
        Key[Key["KEY_SUBTRACT"] = 109] = "KEY_SUBTRACT";
        Key[Key["KEY_DECIMAL_POINT"] = 110] = "KEY_DECIMAL_POINT";
        Key[Key["KEY_DIVIDE"] = 111] = "KEY_DIVIDE";
        Key[Key["KEY_F1"] = 112] = "KEY_F1";
        Key[Key["KEY_F2"] = 113] = "KEY_F2";
        Key[Key["KEY_F3"] = 114] = "KEY_F3";
        Key[Key["KEY_F4"] = 115] = "KEY_F4";
        Key[Key["KEY_F5"] = 116] = "KEY_F5";
        Key[Key["KEY_F6"] = 117] = "KEY_F6";
        Key[Key["KEY_F7"] = 118] = "KEY_F7";
        Key[Key["KEY_F8"] = 119] = "KEY_F8";
        Key[Key["KEY_F9"] = 120] = "KEY_F9";
        Key[Key["KEY_F10"] = 121] = "KEY_F10";
        Key[Key["KEY_F11"] = 122] = "KEY_F11";
        Key[Key["KEY_F12"] = 123] = "KEY_F12";
        Key[Key["KEY_NUM_LOCK"] = 144] = "KEY_NUM_LOCK";
        Key[Key["KEY_SCROLL_LOCK"] = 145] = "KEY_SCROLL_LOCK";
        Key[Key["KEY_SEMI_COLON"] = 186] = "KEY_SEMI_COLON";
        Key[Key["KEY_EQUAL_SIGN"] = 187] = "KEY_EQUAL_SIGN";
        Key[Key["KEY_COMMA"] = 188] = "KEY_COMMA";
        Key[Key["KEY_DASH"] = 189] = "KEY_DASH";
        Key[Key["KEY_PERIOD"] = 190] = "KEY_PERIOD";
        Key[Key["KEY_FORWARD_SLASH"] = 191] = "KEY_FORWARD_SLASH";
        Key[Key["KEY_GRAVE_ACCENT"] = 192] = "KEY_GRAVE_ACCENT";
        Key[Key["KEY_OPEN_BRACKET"] = 219] = "KEY_OPEN_BRACKET";
        Key[Key["KEY_BACK_SLASH"] = 220] = "KEY_BACK_SLASH";
        Key[Key["KEY_CLOSE_BRACKET"] = 221] = "KEY_CLOSE_BRACKET";
        Key[Key["KEY_SINGLE_QUOTE"] = 222] = "KEY_SINGLE_QUOTE";
    })(Engine.Key || (Engine.Key = {}));
    var Key = Engine.Key;
    ;
})(Engine || (Engine = {}));
