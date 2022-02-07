/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    //export module App {
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

    var _loadingContainer;
    var _namespace;

    Engine.container;
    Engine.debug;

    var _loaded;
    var _poppingStates;
    var _name;

    var _params;

    var _lzmaCompressor;
    var _stats;

    // STATE STUFF
    var _states;
    var _stateMap;
    var _activeState;
    var _endingState;
    var _updateStrategy;
    var _changingStates;

    var _prevTime;

    Engine.cacheAssets;
    Engine.disableContextMenu;

    //export var elapsed;
    function getActiveState() {
        return _activeState();
    }
    Engine.getActiveState = getActiveState;
    function getEndingState() {
        return _endingState();
    }
    Engine.getEndingState = getEndingState;

    function init(name, callback) {
        if (name.match(/[A-Za-z-_0-9]/g).join("") !== name)
            throw "INVALID CHARACTERS IN APP NAME: " + name;

        _loaded = false;
        _name = name;

        // ATTACH CONTAINER
        Engine.container = document.body;

        // START LOADING SCREEN
        Loading.start(Engine.container);

        // LOAD PREREQUISITE STYLES AND VENDORS
        _loadBatch([Engine.Vendor.Stats], [], null, true, function () {
            window.addEventListener("popstate", function (evt) {
                _popHistory(evt.state);
            });

            // LOAD APP AND GET APP PARAMS
            Engine.FileUtil.loadScript(Engine.GAME_DIRECTORY + "Game.js", function () {
                // e.x. Engine.MyGame
                _namespace = Engine[_name];
                if (!_namespace || !$.isPlainObject(_namespace))
                    throw "APP NAMESPACE NOT FOUND: " + _name;

                // e.x. Engine.MyGame.entryPoint
                var entryPoint = _namespace["entryPoint"];
                if (!entryPoint || !$.isFunction(entryPoint))
                    throw "ENTRY POINT NOT FOUND FOR APP: " + _name;

                // e.x. Engine.MyGame.entryPoint() => AppParams
                _params = entryPoint();
                if (!_params)
                    throw "APP PARAMS NOT FOUND FOR APP: " + _name;

                Engine.cacheAssets = _params.cacheAssets;
                Engine.disableContextMenu = _params.disableContextMenu;

                // LOAD VENDORS FROM PARAMS
                _loadBatch(_params.vendors, null, null, false, function () {
                    if (LZMA)
                        _lzmaCompressor = new LZMA(Engine.VENDOR_DIRECTORY + "lzma_worker.js");

                    if (Stats) {
                        _stats = new Stats();
                        _stats.setMode(0);
                        _stats.domElement.classList.add("stats");
                        Engine.container.appendChild(_stats.domElement);
                    }

                    _createStates(function () {
                        // PARSE QUERY PARAMS
                        var qp = _parseQuery(document.location.href);
                        var stateId = qp["state"];
                        delete qp["state"];

                        if (!getState(stateId)) {
                            stateId = _params.initialState;
                            qp = {};
                        }

                        setState(stateId, qp, undefined, function () {
                            _loaded = true;

                            // remove the loading screen
                            Loading.end(700);

                            callback();
                        });
                    });
                });
            });
        });
    }
    Engine.init = init;

    function setState(stateId, params, data, callback) {
        if (_changingStates || !stateId)
            return;

        var newState = getState(stateId);
        if (!newState)
            return;

        _changingStates = true;

        // END OLD STATE
        var oldState = _activeState();
        if (oldState) {
            oldState.end();
            _endingState(oldState);

            Engine.Input.unregister(oldState);

            if (_updateStrategy) {
                _updateStrategy.end();
                _updateStrategy = null;
            }
            //_activeState(null); // prevent flickering when switching states for now
        }

        var hs = _makeHistory(newState, null, params, data);

        // CLEAR CURSOR
        Engine.Cursor.clear();

        // BEGIN NEW STATE
        newState.begin(hs, function (updateStrategy) {
            // PUSH HISTORY STATE
            pushHistory(hs);

            // REGISTER STATE INPUT AND RESIZE
            Engine.Input.register(newState);
            Engine.Input.triggerResize();

            // SET NEW STATE
            _activeState(newState);
            _endingState(null);

            // ON APP STATE CHANGE
            var states = _states;
            for (var i = states.length - 1; i !== -1; --i)
                states[i].onAppStateChange(oldState, newState);

            // SET UPDATE STRATEGY OR DEFAULT
            _updateStrategy = updateStrategy || null;
            if (_updateStrategy) {
                // BEGIN UPDATE STRATEGY
                _updateStrategy.begin(function () {
                    _changingStates = false;
                    if (callback)
                        callback();
                });
            } else {
                _changingStates = false;
                if (callback)
                    callback();
            }
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

    function compressLZMA(string, mode, onFinish, onProgress) {
        if (_lzmaCompressor)
            _lzmaCompressor.compress(string, mode, onFinish, onProgress);
    }
    Engine.compressLZMA = compressLZMA;

    function decompressLZMA(byteArray, onFinish, onProgress) {
        if (_lzmaCompressor)
            _lzmaCompressor.decompress(byteArray, onFinish, onProgress);
    }
    Engine.decompressLZMA = decompressLZMA;

    function getState(stateId) {
        if (!stateId)
            return null;
        return _stateMap[stateId.toLowerCase()] || null;
    }
    Engine.getState = getState;

    // SEND RESOURCE LOADS ASYNCHRONOUSLY
    function _loadBatch(vendors, stylesheets, htmls, release, callback) {
        var async = new Engine.AsyncLock(callback);
        function unlock() {
            async.unlock();
        }
        ;

        if (vendors) {
            for (var i = vendors.length - 1; i !== -1; --i) {
                var vendor = vendors[i];

                var url;
                if (typeof vendor === "string") {
                    url = Engine.VENDOR_DIRECTORY + vendor;
                } else {
                    if (!vendor.__seen) {
                        if (release) {
                            if (vendor.release)
                                url = Engine.VENDOR_DIRECTORY + vendor.release;
else if (vendor.debug)
                                url = Engine.VENDOR_DIRECTORY + vendor.debug;
                        } else {
                            if (vendor.debug)
                                url = Engine.VENDOR_DIRECTORY + vendor.debug;
else if (vendor.release)
                                url = Engine.VENDOR_DIRECTORY + vendor.release;
                        }
                    }
                }

                if (url) {
                    async.lock();
                    Engine.FileUtil.loadScript(url, unlock);
                    vendor.__seen = true;
                }
            }
        }

        if (stylesheets) {
            for (var i = stylesheets.length - 1; i !== -1; --i) {
                async.lock();
                Engine.FileUtil.loadStylesheet(stylesheets[i], unlock);
            }
        }

        if (htmls) {
            for (var i = htmls.length - 1; i !== -1; --i) {
                var html = htmls[i];
                async.lock();
                Engine.FileUtil.loadHtml(html.url, html.dom, unlock);
            }
        }

        unlock();
    }

    function _createStates(callback) {
        // CREATE APP CONTAINER
        var $app = $(document.createElement("div")).attr("id", "app").appendTo(Engine.container);

        _states = [];
        _stateMap = {};
        _activeState = ko.observable();
        _endingState = ko.observable();
        _changingStates = false;

        var stylesheets = [];
        var htmls = [];

        var ids = $.merge(_params.states, _params.globalStates);
        for (var i = ids.length - 1; i !== -1; --i) {
            var stateId = ids[i];

            var prefix = (Engine.GAME_DIRECTORY + _params.statesDirectory || "") + stateId + "/" + stateId;

            stylesheets.push(prefix + ".css");

            htmls.push({
                dom: $(document.createElement("div")),
                url: prefix + ".html",
                state: _createState(stateId)
            });
        }

        // LOAD ALL OUR STATE BATCHES TOGETHER (ASYNC)
        _loadBatch(null, stylesheets, htmls, true, function () {
            var async = new Engine.AsyncLock(callback);
            function unlock() {
                async.unlock();
            }
            ;

            for (var i = htmls.length - 1; i !== -1; --i) {
                var batch = htmls[i];

                var state = batch.state;

                // ADD DOM
                var $dom = batch.dom.attr("app-state", state.id).attr("data-bind", "visible: isActive()").appendTo($app);

                // BIND KNOCKOUT
                ko.applyBindings(state, $dom.get()[0]);

                // UI CREATED - INIT BINDINGS
                state.onUICreated($dom);

                // INIT STATE AND TRIGGER CALLBACK
                async.lock();
                state.initialize(unlock);
            }

            unlock();
        });
    }

    function _createState(stateId) {
        var StateClass = _namespace[stateId];
        if (!StateClass)
            throw "APP STATE CLASS NOT FOUND: " + stateId;

        var state = new StateClass();
        if (!(state instanceof Engine.AppState))
            throw "INSTANCE OF " + stateId + " IS NOT AN INSTANCE OF APP STATE CLASS";

        // SET STATE ID
        state.id = stateId;

        // PUSH STATE TO LIST
        _states.push(state);

        // MAP STATES BY ID
        _stateMap[stateId.toLowerCase()] = state;

        return state;
    }
})(Engine || (Engine = {}));
