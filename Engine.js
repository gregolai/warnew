var Engine;
(function (Engine) {
    (function (FontStyle) {
        FontStyle[FontStyle["Regular"] = 0x001] = "Regular";
        FontStyle[FontStyle["Italic"] = 0x002] = "Italic";

        FontStyle[FontStyle["SemiBold"] = 0x004] = "SemiBold";
        FontStyle[FontStyle["SemiBoldItalic"] = 0x008] = "SemiBoldItalic";

        FontStyle[FontStyle["Bold"] = 0x010] = "Bold";
        FontStyle[FontStyle["BoldItalic"] = 0x020] = "BoldItalic";

        FontStyle[FontStyle["ExtraBold"] = 0x040] = "ExtraBold";
        FontStyle[FontStyle["ExtraBoldItalic"] = 0x080] = "ExtraBoldItalic";

        FontStyle[FontStyle["Light"] = 0x100] = "Light";
        FontStyle[FontStyle["LightItalic"] = 0x200] = "LightItalic";

        FontStyle[FontStyle["ExtraLight"] = 0x400] = "ExtraLight";
        FontStyle[FontStyle["ExtraLightItalic"] = 0x800] = "ExtraLightItalic";
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
        Key[Key["None"] = 0xff] = "None";

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

    Engine.ROOT_DIRECTORY_FROM_APP = "../../";
    Engine.ROOT_VENDOR_DIRECTORY = Engine.ROOT_DIRECTORY_FROM_APP + "vendor/";
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var App = (function () {
        function App(params) {
            this._params = params;

            this._states = [];
            this._stateMap = {};
            this._changingStates = false;
            this._activeState = ko.observable();
            this._prevTime = 0;
            this._elapsed = 0;
        }
        Object.defineProperty(App, "width", {
            get: function () {
                return App.container.offsetWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App, "height", {
            get: function () {
                return App.container.offsetHeight;
            },
            enumerable: true,
            configurable: true
        });

        App.load = function (name) {
            App.container = document.createElement("div");
            App.container.id = "container";
            document.body.appendChild(App.container);

            if (!App._verifyAppName(name)) {
                throw "INVALID CHARACTERS IN APP NAME: " + name;
            }

            App._load(name, function () {
                var AppNamespace = Engine[name];
                if (!AppNamespace) {
                    throw "APP NAMESPACE NOT FOUND: " + name;
                }

                var AppClass = AppNamespace["Game"];
                if (!AppClass) {
                    throw "APP CLASS NOT FOUND: " + name;
                }

                var app = new AppClass();
                if (!(app instanceof App)) {
                    throw "INSTANCE IS NOT AN INSTANCE OF APP CLASS";
                }

                App.namespace = AppNamespace;

                App.instance = app;

                app._loadVendors(function () {
                    app._initDom();

                    app._createStates(function () {
                        app._initStates(function () {
                            setTimeout(function () {
                                App._endLoading();

                                app._run();
                            }, 0);
                        });
                    });
                });
            });
        };

        App._verifyAppName = function (name) {
            var charArray = name.match(/[A-Za-z-_0-9]/g);
            if (charArray) {
                return name === charArray.join("");
            }
            return false;
        };

        App._load = function (appName, callback) {
            document.body.style.backgroundColor = "#000";

            Engine.FileUtil.loadStylesheet(Engine.ROOT_DIRECTORY_FROM_APP + "style.css", function () {
                var loadingContainer = App._loadingContainer = document.createElement("div");
                loadingContainer.id = "appLoading";
                App.container.appendChild(loadingContainer);

                var loadingText = document.createElement("p");
                loadingText.innerText = "Loading...";
                loadingContainer.appendChild(loadingText);

                var async = new Engine.AsyncLock(function () {
                    Engine.FileUtil.loadScript(appName + ".js", callback);
                });
                var unlock = function () {
                    async.unlock();
                };

                async.lock();
                Engine.FileUtil.loadScript(Engine.ROOT_VENDOR_DIRECTORY + "jquery.min.js", unlock);

                async.lock();
                Engine.FileUtil.loadScript(Engine.ROOT_VENDOR_DIRECTORY + "knockout.min.js", unlock);

                unlock();
            });
        };

        App._endLoading = function () {
            $(App._loadingContainer).fadeOut(700);
        };

        Object.defineProperty(App.prototype, "cacheAssets", {
            get: function () {
                return this._params.cacheAssets;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "disableContextMenu", {
            get: function () {
                return this._params.disableContextMenu;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(App.prototype, "activeState", {
            get: function () {
                return this._activeState();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "elapsed", {
            get: function () {
                return this._elapsed;
            },
            enumerable: true,
            configurable: true
        });

        App.prototype.getState = function (id) {
            return this._stateMap[id] || null;
        };

        App.prototype.setState = function (s) {
            if (this._changingStates) {
                return;
            }
            this._changingStates = true;

            var newState = (s instanceof Engine.AppState ? s : this._stateMap[s]);
            if (!newState) {
                throw "State not found: " + s;
            }

            var oldState = this._activeState();
            if (oldState) {
                oldState.end();
                Engine.Input.unregister(oldState);
                this._activeState(null);
            }

            var self = this;
            newState.begin(function () {
                self._activeState(newState);

                self.onAppStateChange(oldState, newState);
                var states = self._states;
                for (var s = 0, ss = states.length; s < ss; ++s) {
                    states[s].onAppStateChange(oldState, newState);
                }

                Engine.Input.register(newState);
                Engine.Input.triggerResize();

                self._changingStates = false;
            });
        };

        App.prototype.update = function (deltaTime) {
        };
        App.prototype.onAppStateChange = function (from, to) {
        };

        App.prototype._loadVendors = function (callback) {
            var vendors = [];

            var p = this._params;
            if (p.showStats) {
                vendors.push(Engine.ROOT_VENDOR_DIRECTORY + "stats.min.js");
            }

            if (p.enable3d) {
                vendors.push(Engine.ROOT_VENDOR_DIRECTORY + "three.min.js");
            }

            if (p.allowGamepad) {
                vendors.push(Engine.ROOT_VENDOR_DIRECTORY + "gamepad.js");
            }

            if (p.enable2dPhysics) {
                vendors.push(Engine.ROOT_VENDOR_DIRECTORY + "Box2dWeb-2.1.a.3.min.js");
            }

            if (p.customVendors) {
                vendors = vendors.concat(p.customVendors);
            }

            var async = new Engine.AsyncLock(callback);
            var unlock = function () {
                async.unlock();
            };

            for (var v = 0, vv = vendors.length; v < vv; ++v) {
                async.lock();
                Engine.FileUtil.loadScript(vendors[v], unlock);
            }

            unlock();
        };

        App.prototype._initDom = function () {
            Engine.Input.register(this);

            var p = this._params;

            if (p.showStats) {
                this._stats = new Stats();
                this._stats.setMode(0);
                this._stats.domElement.classList.add("stats");
                App.container.appendChild(this._stats.domElement);
            }

            this._appContainer = $(document.createElement("div")).addClass("app").appendTo(App.container);
        };

        App.prototype._createStates = function (callback) {
            var async = new Engine.AsyncLock(callback);
            var unlock = function () {
                async.unlock();
            };

            var states = this._states;
            var stateMap = this._stateMap;

            var stateNames = this._params.states;
            for (var s = 0, ss = stateNames.length; s < ss; ++s) {
                var stateName = stateNames[s];

                var StateClass = App.namespace[stateName];
                if (!StateClass) {
                    console.warn("APP STATE CLASS NOT FOUND: " + stateName);
                    continue;
                }

                var state = new StateClass();
                if (!(state instanceof Engine.AppState)) {
                    console.warn("INSTANCE OF " + stateName + " IS NOT AN INSTANCE OF APP STATE CLASS");
                    continue;
                }

                stateMap[state.id] = state;

                states.push(state);

                async.lock();
                this._createStateDom(state, unlock);
            }

            unlock();
        };

        App.prototype._createStateDom = function (state, callback) {
            var container = $(document.createElement("div")).addClass("state").addClass(state.id).attr("data-bind", "visible: active").appendTo(this._appContainer);

            container.append(state.sceneDom);
            container.append(state.uiDom);

            if (state.hasUI) {
                var prefix = (this._params.statesDirectory || "") + state.id + "/" + state.id;
                Engine.FileUtil.loadStylesheet(prefix + ".css", function () {
                    Engine.FileUtil.loadHtml(prefix + ".html", state.uiDom, function () {
                        ko.applyBindings(state, container.get()[0]);

                        state.onUICreated(state.uiDom);
                        callback();
                    });
                });
            } else {
                ko.applyBindings(state, container.get()[0]);
                callback();
            }
        };

        App.prototype._initStates = function (callback) {
            var async = new Engine.AsyncLock(callback);
            var unlock = function () {
                async.unlock();
            };

            var states = this._states;
            for (var s = 0, ss = states.length; s < ss; ++s) {
                var state = states[s];

                async.lock();
                state.initialize(unlock);
            }

            unlock();
        };

        App.prototype._run = function () {
            Engine.Input.triggerResize();

            this.setState(this._params.initialState);

            this._prevTime = Date.now();
            this._loop();
        };

        App.prototype._loop = function () {
            var self = this;
            requestAnimationFrame(function () {
                self._loop();
            });

            var curTime = Date.now();
            var deltaTime = curTime - this._prevTime;

            this._elapsed += deltaTime;

            this.update(deltaTime);

            var state = this._activeState();
            if (state) {
                state.update(deltaTime);
                state.draw();
            }

            if (this._stats) {
                this._stats.update();
            }
            this._prevTime = curTime;
        };
        App._loadingContainer = null;
        return App;
    })();
    Engine.App = App;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var AppState = (function () {
        function AppState(params) {
            this._params = params;

            this._sceneDom = $(document.createElement("div")).addClass("scene");
            this._uiDom = $(document.createElement("div")).addClass("ui");

            this._active = ko.computed(function () {
                return Engine.App.instance.activeState === this;
            }, this);
        }
        Object.defineProperty(AppState.prototype, "id", {
            get: function () {
                return ((this).constructor).name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppState.prototype, "hasUI", {
            get: function () {
                return this._params.hasUI;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppState.prototype, "sceneDom", {
            get: function () {
                return this._sceneDom;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppState.prototype, "uiDom", {
            get: function () {
                return this._uiDom;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AppState.prototype, "active", {
            get: function () {
                return this._active();
            },
            enumerable: true,
            configurable: true
        });

        AppState.prototype.create3dSurface = function () {
            var renderer = new THREE.WebGLRenderer();
            $(renderer.domElement).css("position", "absolute").appendTo(this._sceneDom);
            return renderer;
        };

        AppState.prototype.create2dSurface = function () {
            var container = this._sceneDom.get()[0];
            var surface = new Engine.Surface2D(container);
            return surface;
        };

        AppState.prototype.onUICreated = function (dom) {
        };
        AppState.prototype.initialize = function (callback) {
            callback();
        };
        AppState.prototype.begin = function (callback) {
            callback();
        };
        AppState.prototype.end = function () {
        };

        AppState.prototype.update = function (deltaTime) {
        };
        AppState.prototype.onAppStateChange = function (from, to) {
        };

        AppState.prototype.draw = function () {
        };
        return AppState;
    })();
    Engine.AppState = AppState;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (AssetManager) {
        var _refreshAppend;

        var _cursors = {};
        var _fonts = {};
        var _images = {};
        var _shaders = {};
        var _sounds = {};

        function load(assets, callback) {
            var async = new Engine.AsyncLock(callback);
            var unlock = function () {
                async.unlock();
            };

            _refreshAppend = (Engine.App.instance.cacheAssets ? "" : (_refreshAppend || "?" + Date.now()));

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
            var url = _makeUrl("cursor", asset.filename);

            if (_cursors[id]) {
                _cursors[id].dispose();
            }
            _cursors[id] = new Engine.Cursor(id, url, asset.x, asset.y);

            callback();
        }

        function _loadFont(asset, callback) {
            var id = asset.id;

            var url = _makeUrl("font", id + "/stylesheet.css");

            Engine.FileUtil.loadStylesheet(url, function () {
                _fonts[id] = new Engine.Font(id, asset.styles);
                callback();
            });
        }

        function _loadImage(asset, callback) {
            var url = _makeUrl("image", asset.filename);

            var img = new Image();
            img.onload = function () {
                _images[asset.id] = img;
                callback();
            };
            img.onerror = function () {
                throw "Error loading image: " + url;
            };
            img.src = url;
        }

        function _loadShader(asset, callback) {
            var url = _makeUrl("shader", asset.filename);

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
                            } else if (line.indexOf("#end") === 0) {
                                type = "DEFAULT";
                            } else {
                                var arr = struct[type];
                                if (typeof arr !== "undefined")
                                    arr.push(line);
                            }
                        }
                    }

                    _shaders[asset.id] = {
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
            return "asset/" + type + "/" + filename + _refreshAppend;
        }
    })(Engine.AssetManager || (Engine.AssetManager = {}));
    var AssetManager = Engine.AssetManager;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var AsyncLock = (function () {
        function AsyncLock(callback) {
            this._locks = 1;
            this._active = true;
            this._callback = callback;
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
                var self = this;
                setTimeout(function () {
                    self._unlock(howMany);
                }, 0);
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
var Engine;
(function (Engine) {
    (function (CtxUtil) {
        function path(ctx, points, offset, joinLast) {
            if (typeof joinLast === "undefined") { joinLast = true; }
            var numPoints = points.length;
            if (numPoints === 0) {
                return;
            }

            var offX, offY;
            if (offset) {
                offX = offset.x;
                offY = offset.y;
            } else {
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
                } else {
                    line = testLine;
                }
            }
            x = getLeft(line);
            ctx.fillText(line, x, y);

            return y - marginY;
        }
        CtxUtil.fillTextWrapped = fillTextWrapped;
    })(Engine.CtxUtil || (Engine.CtxUtil = {}));
    var CtxUtil = Engine.CtxUtil;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var Cursor = (function () {
        function Cursor(id, url, offX, offY) {
            this._id = id;

            var style = this._style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = ".custom_cursor_" + id + " { cursor: url(\"" + url + "\") " + offX + " " + offY + ", none; }";
            document.getElementsByTagName("head")[0].appendChild(style);
        }
        Cursor.prototype.dispose = function () {
            document.getElementsByTagName("head")[0].removeChild(this._style);
            this._style = null;
            if (Cursor._currentCursorId === this._id) {
                Engine.App.container.classList.remove("custom_cursor_" + Cursor._currentCursorId);
                Cursor._currentCursorId = "";
            }
        };

        Cursor.prototype.apply = function () {
            if (Cursor._currentCursorId !== this._id) {
                var container = Engine.App.container;
                container.classList.remove("custom_cursor_" + Cursor._currentCursorId);
                container.classList.add("custom_cursor_" + this._id);
                Cursor._currentCursorId = this._id;
            }
        };
        Cursor._currentCursorId = "";
        return Cursor;
    })();
    Engine.Cursor = Cursor;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (FileUtil) {
        var _pathSuffix = "?" + Date.now();
        var _head = document.getElementsByTagName("head")[0];

        function loadScript(url, callback) {
            var s = document.createElement("script");
            s.type = "text/javascript";
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
            var href = url + _pathSuffix;
            container.load(href, function (response, status, xhr) {
                if (status === "error") {
                    throw "Error loading HTML: " + xhr.status + " " + xhr.statusText;
                }
                callback();
            });
        }
        FileUtil.loadHtml = loadHtml;
    })(Engine.FileUtil || (Engine.FileUtil = {}));
    var FileUtil = Engine.FileUtil;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var Font = (function () {
        function Font(id, styles) {
            this._id = id;
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
        Object.defineProperty(Font.prototype, "styles", {
            get: function () {
                return this._styles;
            },
            enumerable: true,
            configurable: true
        });

        Font.prototype.getString = function (style, size) {
            var family;
            if (this._styleFound(style)) {
                family = this._id + "_" + Font._map[style];
            } else if (this._styleFound(Engine.FontStyle.Regular)) {
                family = this._id + "_" + Font._map[Engine.FontStyle.Regular];
            } else {
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
var Engine;
(function (Engine) {
    (function (Input) {
        var _initialized;
        var _container;
        var _mousePosition;
        var _keysDown;
        var _gamepad;
        var _gamepadControls;
        var _listeners;

        function isKeyDown(key) {
            return _keysDown[key] || false;
        }
        Input.isKeyDown = isKeyDown;

        function getMousePosition() {
            return _mousePosition;
        }
        Input.getMousePosition = getMousePosition;

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

        function triggerResize() {
            _resize();
        }
        Input.triggerResize = triggerResize;

        function _init() {
            _mousePosition = new Engine.Vec2();
            _keysDown = [];
            _gamepad = null;
            _gamepadControls = {};
            _listeners = [];

            window.addEventListener("contextmenu", _contextMenu, true);
            window.addEventListener("blur", _blur, true);
            window.addEventListener("keydown", _keyDown, false);
            window.addEventListener("keyup", _keyUp, false);

            window.addEventListener("mouseout", _mouseMove, false);
            window.addEventListener("mouseover", _mouseMove, false);

            Engine.App.container.addEventListener("mousedown", _mouseDown, false);
            window.addEventListener("mouseup", _mouseUp, false);
            window.addEventListener("mousemove", _mouseMove, false);
            Engine.App.container.addEventListener("mousewheel", _mouseWheel, false);
            Engine.App.container.addEventListener("DOMMouseScroll", _mouseWheel, false);

            window.addEventListener("resize", _resize, false);

            if (typeof Gamepad !== "undefined") {
                var gamepad = _gamepad = new Gamepad();
                gamepad.bind(Gamepad.Event.CONNECTED, _gamepadConnect);
                gamepad.bind(Gamepad.Event.DISCONNECTED, _gamepadDisconnect);
                gamepad.bind(Gamepad.Event.TICK, _gamepadTick);
                gamepad.bind(Gamepad.Event.BUTTON_DOWN, _gamepadButtonDown);
                gamepad.bind(Gamepad.Event.BUTTON_UP, _gamepadButtonUp);
                gamepad.bind(Gamepad.Event.AXIS_CHANGED, _gamepadAxisChanged);
                gamepad.init();
            }
        }

        function _resetAllKeys() {
            console.log("RESETTING ALL KEYS");
            for (var i = 0, ii = _keysDown.length; i < ii; ++i) {
                if (_keysDown[i]) {
                    __keyUp(i);
                }
            }
        }

        function __broadcast(onEventName, args) {
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
            if (Engine.App.instance.disableContextMenu) {
                if (isKeyDown(Engine.Key.KEY_CTRL) && isKeyDown(Engine.Key.KEY_SHIFT)) {
                } else {
                    evt.preventDefault();
                }
            }

            _resetAllKeys();
        }

        function _blur(evt) {
            _resetAllKeys();
        }

        function _keyDown(evt) {
            _keysDown[evt.keyCode] = true;

            __broadcast("onKeyDown", [evt.keyCode]);
        }

        function __keyUp(key) {
            _keysDown[key] = false;

            __broadcast("onKeyUp", [key]);
        }
        function _keyUp(evt) {
            __keyUp(evt.keyCode);
        }
        function _mouseDown(evt) {
            _keysDown[evt.button] = true;

            __broadcast("onMouseDown", [evt.pageX, evt.pageY, evt.button]);
        }
        function _mouseUp(evt) {
            _keysDown[evt.button] = false;

            __broadcast("onMouseUp", [evt.pageX, evt.pageY, evt.button]);
        }
        function _mouseMove(evt) {
            _mousePosition.x = evt.pageX;
            _mousePosition.y = evt.pageY;

            __broadcast("onMouseMove", [evt.pageX, evt.pageY]);
        }
        function _mouseWheel(evt) {
            var delta = (evt).wheelDelta || evt.detail;

            __broadcast("onMouseWheel", [delta]);
        }

        function _resize() {
            var width = Math.max(Engine.App.container.offsetWidth, 1);
            var height = Math.max(Engine.App.container.offsetHeight, 1);

            __broadcast("onResize", [width, height]);
        }

        function _gamepadConnect(evt) {
            console.log("GAMEPAD CONNECT");
            console.log(evt);

            __broadcast("onGamepadConnect");
        }
        function _gamepadDisconnect(evt) {
            console.log("GAMEPAD DISCONNECT");
            console.log(evt);

            __broadcast("onGamepadDisconnect");
        }
        function _gamepadTick(evt) {
            __broadcast("onGamepadTick", [evt.length]);
        }
        function _gamepadButtonDown(evt) {
            _gamepadControls[evt.control] = 1;

            __broadcast("onGamepadButtonDown", [evt.control]);
        }
        function _gamepadButtonUp(evt) {
            _gamepadControls[evt.control] = 0;

            __broadcast("onGamepadButtonUp", [evt.control]);
        }
        function _gamepadAxisChanged(evt) {
            var value = evt.value;
            if (Math.abs(value) < 0.08) {
                value = 0;
            }

            _gamepadControls[evt.axis] = value;

            __broadcast("onGamepadAxisChanged", [evt.axis, value]);
        }
    })(Engine.Input || (Engine.Input = {}));
    var Input = Engine.Input;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (MathUtil) {
        function clamp(v, min, max) {
            return v < min ? min : (v > max ? max : v);
        }
        MathUtil.clamp = clamp;
    })(Engine.MathUtil || (Engine.MathUtil = {}));
    var MathUtil = Engine.MathUtil;
})(Engine || (Engine = {}));
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
                this.mt[this.mti] = (((((s & 0xffff0000) >>> 16) * 1812433253) << 16) + (s & 0x0000ffff) * 1812433253) + this.mti;

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
                this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + ((s & 0x0000ffff) * 1664525))) + init_key[j] + j;
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
                this.mt[i] = (this.mt[i] ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941)) - i;
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
var Engine;
(function (Engine) {
    var Random = (function () {
        function Random(seed) {
            this._rollCount = 0;
            this._rand = new Engine.MersenneTwister(seed);
        }
        Object.defineProperty(Random.prototype, "rollCount", {
            get: function () {
                return this._rollCount;
            },
            enumerable: true,
            configurable: true
        });

        Random.prototype.ratio = function () {
            ++this._rollCount;
            return Random._ratio(this._rand);
        };
        Random.ratio = function () {
            return Random._ratio(Math);
        };
        Random._ratio = function (gen) {
            return gen.random();
        };

        Random.prototype.real = function (min, max) {
            ++this._rollCount;
            return Random._real(this._rand, min, max);
        };
        Random.real = function (min, max) {
            return Random._real(Math, min, max);
        };
        Random._real = function (gen, min, max) {
            return min + gen.random() * (max - min);
        };

        Random.prototype.integer = function (min, max) {
            ++this._rollCount;
            return Random._integer(this._rand, min, max);
        };
        Random.integer = function (min, max) {
            return Random._integer(Math, min, max);
        };
        Random._integer = function (gen, min, max) {
            return Math.floor(min + gen.random() * (max - min));
        };

        Random.prototype.boolean = function (trueWeight) {
            ++this._rollCount;
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
            ++this._rollCount;
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
var Engine;
(function (Engine) {
    var Rect = (function () {
        function Rect(x, y, width, height) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof width === "undefined") { width = 0; }
            if (typeof height === "undefined") { height = 0; }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        Object.defineProperty(Rect.prototype, "right", {
            get: function () {
                return this.x + this.width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "bottom", {
            get: function () {
                return this.y + this.height;
            },
            enumerable: true,
            configurable: true
        });

        Rect.prototype.clone = function () {
            return new Rect(this.x, this.y, this.width, this.height);
        };

        Rect.prototype.set = function (x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        };

        Rect.prototype.setXY = function (x, y) {
            this.x = x;
            this.y = y;
        };

        Rect.prototype.setSize = function (width, height) {
            this.width = width;
            this.height = height;
        };

        Rect.prototype.fromPoints = function (p0, p1) {
            this.x = Math.min(p0.x, p1.x);
            this.y = Math.min(p0.y, p1.y);
            this.width = Math.abs(p0.x - p1.x);
            this.height = Math.abs(p0.y - p1.y);
        };

        Rect.prototype.containsPoint = function (p, y) {
            var x;
            if (p instanceof Engine.Vec2) {
                x = (p).x;
                y = (p).y;
            } else {
                x = p;
            }
            var thisX = this.x;
            var thisY = this.y;
            return x >= thisX && x <= thisX + this.width && y >= thisY && y <= thisY + this.height;
        };

        Rect.prototype.containsRect = function (other) {
            var thisX = this.x;
            var thisY = this.y;
            var otherX = other.x;
            var otherY = other.y;
            return otherX >= thisX && otherX + other.width <= thisX + this.width && otherY >= thisY && otherY + other.height <= thisY + this.height;
        };

        Rect.prototype.intersectsRect = function (other) {
            var thisX = this.x;
            var thisY = this.y;
            var otherX = other.x;
            var otherY = other.y;
            return otherX <= thisX + this.width && otherX + other.width >= thisX && other.y <= thisY + this.height && otherY + other.height >= thisY;
        };

        Rect.prototype.getCenter = function () {
            return new Engine.Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
        };

        Rect.prototype.union = function (r) {
            var tx = this.x;
            var ty = this.y;
            var rx = r.x;
            var ry = r.y;

            var x0 = Math.min(tx, rx);
            var x1 = Math.max(tx + this.width, rx + r.width);
            var y0 = Math.min(ty, ry);
            var y1 = Math.max(ty + this.height, ry + r.height);

            this.x = x0;
            this.y = y0;
            this.width = x1 - x0;
            this.height = y1 - y0;
        };
        return Rect;
    })();
    Engine.Rect = Rect;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (StringUtil) {
        function format(stringIn) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            var ret = stringIn;
            for (var i = 0, ii = args.length; i < ii; ++i) {
                ret = ret.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
            }
            return ret;
        }
        StringUtil.format = format;
    })(Engine.StringUtil || (Engine.StringUtil = {}));
    var StringUtil = Engine.StringUtil;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var Surface2D = (function () {
        function Surface2D(c) {
            if (c instanceof HTMLCanvasElement) {
                this._canvas = c;
            } else {
                this._canvas = document.createElement("canvas");
                this._canvas.style.position = "absolute";
                c.appendChild(this._canvas);
            }

            this._context = this._canvas.getContext("2d");

            this.zIndex = 0;
            this._rect = new Engine.Rect(0, 0, 1, 1);
        }
        Object.defineProperty(Surface2D.prototype, "context", {
            get: function () {
                return this._context;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "zIndex", {
            get: function () {
                return this._zIndex;
            },
            set: function (value) {
                this._canvas.style.zIndex = "" + value;
                this._zIndex = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "x", {
            get: function () {
                return this._rect.x;
            },
            set: function (value) {
                this._canvas.style.left = value + "px";
                this._rect.x = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "y", {
            get: function () {
                return this._rect.y;
            },
            set: function (value) {
                this._canvas.style.top = value + "px";
                this._rect.y = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "width", {
            get: function () {
                return this._rect.width;
            },
            set: function (value) {
                this._canvas.width = value;
                this._rect.width = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "height", {
            get: function () {
                return this._rect.height;
            },
            set: function (value) {
                this._canvas.height = value;
                this._rect.height = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "rect", {
            get: function () {
                return this._rect;
            },
            set: function (value) {
                this.x = value.x;
                this.y = value.y;
                this.width = value.width;
                this.height = value.height;
            },
            enumerable: true,
            configurable: true
        });

        Surface2D.prototype.dispose = function () {
            var container = this._canvas.parentNode;
            container.removeChild(this._canvas);

            this._canvas = null;
            this._context = null;
        };
        return Surface2D;
    })();
    Engine.Surface2D = Surface2D;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var Vec2 = (function () {
        function Vec2(x, y) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            this.x = x;
            this.y = y;
        }
        Object.defineProperty(Vec2.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec2.prototype, "lengthSqr", {
            get: function () {
                return this.x * this.x + this.y * this.y;
            },
            enumerable: true,
            configurable: true
        });

        Vec2.prototype.clone = function () {
            return new Vec2(this.x, this.y);
        };

        Vec2.prototype.toString = function () {
            return this.x + ", " + this.y;
        };

        Vec2.prototype.toArray = function () {
            return [this.x, this.y];
        };
        Vec2.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
        };

        Vec2.prototype.fromVec2 = function (v) {
            this.x = v.x;
            this.y = v.y;
        };

        Vec2.prototype.add = function (rhs) {
            this.x += rhs.x;
            this.y += rhs.y;
        };

        Vec2.prototype.subtract = function (rhs) {
            this.x -= rhs.x;
            this.y -= rhs.y;
        };

        Vec2.prototype.multiply = function (rhs) {
            if (rhs instanceof Vec2) {
                this.x *= rhs.x;
                this.y *= rhs.y;
            } else {
                this.x *= rhs;
                this.y *= rhs;
            }
        };

        Vec2.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
        };

        Vec2.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
        };

        Vec2.prototype.normalize = function () {
            if (this.lengthSqr === 0) {
                this.x = 0;
                this.y = 1;
            } else {
                var invLen = 1.0 / this.length;
                this.x *= invLen;
                this.y *= invLen;
            }
        };

        Vec2.inverse = function (vec) {
            return new Vec2(-vec.x, -vec.y);
        };

        Vec2.add = function (left, right) {
            return new Vec2(left.x + right.x, left.y + right.y);
        };

        Vec2.subtract = function (left, right) {
            return new Vec2(left.x - right.x, left.y - right.y);
        };

        Vec2.multiply = function (left, right) {
            if (right instanceof Vec2)
                return new Vec2(left.x * right.x, left.y * right.y);
else
                return new Vec2(left.x * right, left.y * right);
        };

        Vec2.lerp = function (left, right, t) {
            return new Vec2(left.x + t * (right.x - left.x), left.y + t * (right.y - left.y));
        };

        Vec2.dot = function (left, right) {
            return left.x * right.x + left.y * right.y;
        };

        Vec2.distance = function (left, right) {
            var dx = right.x - left.x;
            var dy = right.y - left.y;
            return Math.sqrt(dx * dx + dy * dy);
        };

        Vec2.distanceSqr = function (left, right) {
            var dx = right.x - left.x;
            var dy = right.y - left.y;
            return dx * dx + dy * dy;
        };

        Vec2.equals = function (a, b) {
            return (a.x === b.x && a.y === b.y);
        };
        return Vec2;
    })();
    Engine.Vec2 = Vec2;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    var Vec3 = (function () {
        function Vec3(x, y, z) {
            if (typeof x === "undefined") { x = 0; }
            if (typeof y === "undefined") { y = 0; }
            if (typeof z === "undefined") { z = 0; }
            this.x = x;
            this.y = y;
            this.z = z;
        }
        Object.defineProperty(Vec3.prototype, "length", {
            get: function () {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vec3.prototype, "lengthSqr", {
            get: function () {
                return this.x * this.x + this.y * this.y + this.z * this.z;
            },
            enumerable: true,
            configurable: true
        });

        Vec3.prototype.clone = function () {
            return new Vec3(this.x, this.y, this.z);
        };

        Vec3.prototype.toString = function () {
            return this.x + ", " + this.y + ", " + this.z;
        };

        Vec3.prototype.toArray = function () {
            return [this.x, this.y, this.z];
        };
        Vec3.prototype.fromArray = function (v) {
            this.x = v[0] || 0;
            this.y = v[1] || 0;
            this.z = v[2] || 0;
        };

        Vec3.prototype.fromVec3 = function (v) {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
        };

        Vec3.prototype.add = function (rhs) {
            this.x += rhs.x;
            this.y += rhs.y;
            this.z += rhs.z;
        };

        Vec3.prototype.subtract = function (rhs) {
            this.x -= rhs.x;
            this.y -= rhs.y;
            this.z -= rhs.z;
        };

        Vec3.prototype.multiply = function (rhs) {
            if (rhs instanceof Vec3) {
                this.x *= rhs.x;
                this.y *= rhs.y;
                this.z *= rhs.z;
            } else {
                this.x *= rhs;
                this.y *= rhs;
                this.z *= rhs;
            }
        };

        Vec3.prototype.invert = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        };

        Vec3.prototype.setLength = function (length) {
            this.normalize();
            this.multiply(length);
        };

        Vec3.prototype.normalize = function () {
            if (this.lengthSqr === 0) {
                this.x = 0;
                this.y = 1;
                this.z = 0;
            } else {
                var invLen = 1.0 / this.length;
                this.x *= invLen;
                this.y *= invLen;
                this.z *= invLen;
            }
        };

        Vec3.inverse = function (vec) {
            return new Vec3(-vec.x, -vec.y, -vec.z);
        };

        Vec3.add = function (left, right) {
            return new Vec3(left.x + right.x, left.y + right.y, left.z + right.z);
        };

        Vec3.subtract = function (left, right) {
            return new Vec3(left.x - right.x, left.y - right.y, left.z - right.z);
        };

        Vec3.multiply = function (left, right) {
            if (right instanceof Vec3)
                return new Vec3(left.x * right.x, left.y * right.y, left.z * right.z);
else
                return new Vec3(left.x * right, left.y * right, left.z * right);
        };

        Vec3.lerp = function (left, right, t) {
            return new Vec3(left.x + t * (right.x - left.x), left.y + t * (right.y - left.y), left.z + t * (right.z - left.z));
        };

        Vec3.dot = function (left, right) {
            return left.x * right.x + left.y * right.y + left.z + right.z;
        };

        Vec3.distance = function (left, right) {
            var dx = right.x - left.x;
            var dy = right.y - left.y;
            var dz = right.z - left.z;
            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        };

        Vec3.distanceSqr = function (left, right) {
            var dx = right.x - left.x;
            var dy = right.y - left.y;
            var dz = right.z - left.z;
            return dx * dx + dy * dy + dz * dz;
        };

        Vec3.equals = function (a, b) {
            return (a.x === b.x && a.y === b.y && a.z === b.z);
        };
        return Vec3;
    })();
    Engine.Vec3 = Vec3;
})(Engine || (Engine = {}));
