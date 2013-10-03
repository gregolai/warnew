var Engine;
(function (Engine) {
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

            this._gamepadControls = {};
            this._keysDown = [];
            this._mousePosition = new Engine.Vec2();
        }
        App.load = function (container, name) {
            App._startLoading(container);

            if (!App._verifyAppName(name)) {
                throw "INVALID CHARACTERS IN APP NAME: " + name;
            }

            Engine.FileUtil.loadScript("app/" + name + "/" + name + ".js", function () {
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

                document.title = app.title;

                app._loadVendors(function () {
                    app._initDom(container);

                    app._createStates(function () {
                        app._initStates(function () {
                            app._initInputHandlers();

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
        App._startLoading = function (container) {
            var loadingContainer = App._loadingContainer = $(document.createElement("div"));
            loadingContainer.addClass("appLoading");
            container.append(loadingContainer);

            var _loadingText = $(document.createElement("p"));
            _loadingText.text("Loading...");
            loadingContainer.append(_loadingText);
        };
        App._endLoading = function () {
            App._loadingContainer.fadeOut(700);
        };

        Object.defineProperty(App.prototype, "id", {
            get: function () {
                return this._params.id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "title", {
            get: function () {
                return this._params.title;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(App.prototype, "width", {
            get: function () {
                return this._container.width();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(App.prototype, "height", {
            get: function () {
                return this._container.height();
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

        App.prototype.isKeyDown = function (key) {
            return this._keysDown[key] || false;
        };

        App.prototype.getMousePosition = function () {
            return this._mousePosition;
        };

        App.prototype.getState = function (id) {
            return this._stateMap[id] || null;
        };

        App.prototype.setState = function (s) {
            try  {
                if (this._changingStates) {
                    return;
                }
                this._changingStates = true;

                var newState = (s instanceof Engine.AppState ? s : this._stateMap[s]);
                if (!newState) {
                    throw "State not found: " + s;
                }

                var oldState = this._activeState();
                if (newState === oldState) {
                    oldState.end();
                }

                var self = this;
                newState.begin(function () {
                    if (oldState && newState !== oldState) {
                        oldState.end();
                    }

                    self._activeState(newState);

                    self.onAppStateChange(oldState, newState);
                    var states = self._states;
                    for (var s = 0, ss = states.length; s < ss; ++s) {
                        states[s].onAppStateChange(oldState, newState);
                    }

                    self._resize();

                    self._changingStates = false;
                });
            } catch (ex) {
                console.log("UNABLE TO SET STATE: " + ex);

                this._changingStates = false;
            }
        };

        App.prototype.update = function (deltaTime) {
        };
        App.prototype.onAppStateChange = function (from, to) {
        };

        App.prototype._loadVendors = function (callback) {
            var vendors = [];

            var p = this._params;
            if (p.showStats) {
                vendors.push("vendor/stats.min.js");
            }

            if (p.enable3d) {
                vendors.push("vendor/three.min.js");
            }

            if (p.allowGamepad) {
                vendors.push("vendor/gamepad.js");
            }

            if (p.enable2dPhysics) {
                vendors.push("vendor/Box2dWeb-2.1.a.3.min.js");
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

        App.prototype._initDom = function (container) {
            this._container = container;

            var p = this._params;

            if (p.showStats) {
                this._stats = new Stats();
                this._stats.setMode(0);
                this._stats.domElement.classList.add("stats");
                container.append(this._stats.domElement);
            }

            this._appContainer = $(document.createElement("div")).addClass("app").appendTo(container);
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
                var prefix = "app/" + this.id + "/" + state.id + "/" + state.id;
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

        App.prototype._initInputHandlers = function () {
            var self = this;
            var handler = function (methodName) {
                var method = self[methodName];
                return function (evt) {
                    method.call(self, evt);
                };
            };

            var stopEvent = function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
            };

            var p = this._params;

            window.addEventListener("resize", handler("_resize"));
            window.addEventListener("keydown", handler("_keyDown"));
            window.addEventListener("keyup", handler("_keyUp"));

            var container = this._container;
            container.on("mousedown", handler("_mouseDown"));
            container.on("mouseup", handler("_mouseUp"));
            container.on("mousemove", handler("_mouseMove"));
            container.on("mouseover", handler("_mouseEnter"));
            container.on("mouseout", handler("_mouseLeave"));
            container.on("mousewheel", handler("_mouseWheel"));
            container.on("DOMMouseScroll", handler("_mouseWheel"));

            if (p.disableContextMenu) {
                container.on("contextmenu", stopEvent);
            }

            if (p.allowGamepad) {
                var gamepad = this._gamepad = new Gamepad();
                gamepad.bind(Gamepad.Event.CONNECTED, handler("_gamepadConnect"));
                gamepad.bind(Gamepad.Event.DISCONNECTED, handler("_gamepadDisconnect"));
                gamepad.bind(Gamepad.Event.UNSUPPORTED, handler("_gamepadUnsupported"));
                gamepad.bind(Gamepad.Event.TICK, handler("_gamepadTick"));
                gamepad.bind(Gamepad.Event.BUTTON_DOWN, handler("_gamepadButtonDown"));
                gamepad.bind(Gamepad.Event.BUTTON_UP, handler("_gamepadButtonUp"));
                gamepad.bind(Gamepad.Event.AXIS_CHANGED, handler("_gamepadAxisChanged"));
                gamepad.init();
            }
        };

        App.prototype._run = function () {
            this._resize();

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

        App.prototype.__callAppEvent = function (onEventName, args) {
            var method = this[onEventName];
            if (method) {
                method.apply(this, args);
            }

            var state = this._activeState();
            if (state) {
                var method = state[onEventName];
                if (method) {
                    method.apply(state, args);
                }
            }
        };

        App.prototype._resize = function () {
            var container = this._container;
            var width = container.width();
            var height = container.height();

            this.__callAppEvent("onResize", [width, height]);
        };

        App.prototype._keyDown = function (evt) {
            var key = evt.keyCode;

            this._keysDown[key] = true;

            this.__callAppEvent("onKeyDown", [key]);
        };
        App.prototype._keyUp = function (evt) {
            var key = evt.keyCode;

            this._keysDown[key] = false;

            this.__callAppEvent("onKeyUp", [key]);
        };
        App.prototype._mouseDown = function (evt) {
            var x = evt.offsetX;
            var y = evt.offsetY;
            var button = evt.button;

            this._keysDown[button] = true;

            this.__callAppEvent("onMouseDown", [x, y, button]);
        };
        App.prototype._mouseUp = function (evt) {
            var x = evt.offsetX;
            var y = evt.offsetY;
            var button = evt.button;

            this._keysDown[button] = false;

            this.__callAppEvent("onMouseUp", [x, y, button]);
        };
        App.prototype._mouseMove = function (evt) {
            var x = evt.offsetX;
            var y = evt.offsetY;

            var mp = this._mousePosition;
            mp.x = x;
            mp.y = y;

            this.__callAppEvent("onMouseMove", [x, y]);
        };
        App.prototype._mouseEnter = function (evt) {
            var x = evt.offsetX;
            var y = evt.offsetY;

            var mp = this._mousePosition;
            mp.x = x;
            mp.y = y;

            this.__callAppEvent("onMouseEnter", [x, y]);
        };
        App.prototype._mouseLeave = function (evt) {
            var x = evt.offsetX;
            var y = evt.offsetY;

            var mp = this._mousePosition;
            mp.x = x;
            mp.y = y;

            this.__callAppEvent("onMouseLeave", [x, y]);
        };
        App.prototype._mouseWheel = function (evt) {
            var deltaY = (evt).wheelDeltaY;

            this.__callAppEvent("onMouseWheel", [deltaY]);
        };

        App.prototype._gamepadConnect = function (evt) {
            console.log("GAMEPAD CONNECT");
            console.log(evt);

            this.__callAppEvent("onGamepadConnect");
        };
        App.prototype._gamepadDisconnect = function (evt) {
            console.log("GAMEPAD DISCONNECT");
            console.log(evt);

            this.__callAppEvent("onGamepadDisconnect");
        };
        App.prototype._gamepadUnsupported = function (evt) {
            console.log("GAMEPAD UNSUPPORTED");
            console.log(evt);
        };
        App.prototype._gamepadTick = function (evt) {
            var length = evt.length;

            this.__callAppEvent("onGamepadTick", [length]);
        };
        App.prototype._gamepadButtonDown = function (evt) {
            var control = evt.control;

            this._gamepadControls[control] = 1;

            this.__callAppEvent("onGamepadButtonDown", [control]);
        };
        App.prototype._gamepadButtonUp = function (evt) {
            var control = evt.control;

            this._gamepadControls[control] = 0;

            this.__callAppEvent("onGamepadButtonUp", [control]);
        };
        App.prototype._gamepadAxisChanged = function (evt) {
            var axis = evt.axis;
            var value = evt.value;

            if (Math.abs(value) < 0.08) {
                value = 0;
            }

            this._gamepadControls[axis] = value;

            this.__callAppEvent("onGamepadAxisChanged", [axis, value]);
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

        function loadCssAndHtml(prefix, container, callback) {
            loadStylesheet(prefix + ".css", function () {
                loadHtml(prefix + ".html", container, callback);
            });
        }
        FileUtil.loadCssAndHtml = loadCssAndHtml;
    })(Engine.FileUtil || (Engine.FileUtil = {}));
    var FileUtil = Engine.FileUtil;
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

        Rect.prototype.setSize = function (width, height) {
            this.width = width;
            this.height = height;
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
    var Surface2D = (function () {
        function Surface2D(container) {
            this._canvas = document.createElement("canvas");
            this._canvas.style.position = "absolute";

            this._context = this._canvas.getContext("2d");

            this.zIndex = 0;
            this.x = 0;
            this.y = 0;
            this.width = 1;
            this.height = 1;

            container.appendChild(this._canvas);
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
                return this._x;
            },
            set: function (value) {
                this._canvas.style.left = value + "px";
                this._x = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._canvas.style.top = value + "px";
                this._y = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._canvas.width = value;
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(Surface2D.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._canvas.height = value;
                this._height = value;
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
                rhs = rhs;
                this.x *= rhs.x;
                this.y *= rhs.y;
            } else {
                this.x *= rhs;
                this.y *= rhs;
            }
        };

        Vec2.prototype.divide = function (rhs) {
            if (rhs instanceof Vec2) {
                rhs = rhs;
                this.x /= rhs.x;
                this.y /= rhs.y;
            } else {
                var inv = 1.0 / rhs;
                this.x *= inv;
                this.y *= inv;
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
            var len = this.length;
            if (len === 0) {
                this.x = 0;
                this.y = 1;
            } else {
                var invLen = 1.0 / len;
                this.x *= invLen;
                this.y *= invLen;
            }
        };

        Vec2.prototype.clamp = function (min, max) {
            if (this.x < min.x)
                this.x = min.x;
else if (this.x > max.x)
                this.x = max.x;
            if (this.y < min.y)
                this.y = min.y;
else if (this.y > max.y)
                this.y = max.y;
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

        Vec2.divide = function (left, right) {
            if (right instanceof Vec2)
                return new Vec2(left.x / right.x, left.y / right.y);
else {
                var invRight = 1.0 / right;
                return new Vec2(left.x * invRight, left.y * invRight);
            }
        };

        Vec2.lerp = function (left, right, t) {
            return Vec2.add(left, Vec2.multiply(Vec2.subtract(right, left), t));
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
