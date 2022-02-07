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
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        (function (AbilityType) {
        })(Game.AbilityType || (Game.AbilityType = {}));
        var AbilityType = Game.AbilityType;
        (function (ActionType) {
            ActionType[ActionType["Waiting"] = 0] = "Waiting";
            ActionType[ActionType["Moving"] = 1] = "Moving";
            ActionType[ActionType["Attacking"] = 2] = "Attacking";
            ActionType[ActionType["BeingConstructed"] = 3] = "BeingConstructed";
        })(Game.ActionType || (Game.ActionType = {}));
        var ActionType = Game.ActionType;
        (function (AnimationSequenceType) {
            AnimationSequenceType[AnimationSequenceType["Directional"] = 0] = "Directional";
            AnimationSequenceType[AnimationSequenceType["Vertical"] = 1] = "Vertical";
            AnimationSequenceType[AnimationSequenceType["Horizontal"] = 2] = "Horizontal";
        })(Game.AnimationSequenceType || (Game.AnimationSequenceType = {}));
        var AnimationSequenceType = Game.AnimationSequenceType;
        (function (CommandPage) {
            CommandPage[CommandPage["Default"] = 0] = "Default";
            CommandPage[CommandPage["AdvancedBuild"] = 1] = "AdvancedBuild";
            CommandPage[CommandPage["BasicBuild"] = 2] = "BasicBuild";
            CommandPage[CommandPage["Targeting"] = 3] = "Targeting";
        })(Game.CommandPage || (Game.CommandPage = {}));
        var CommandPage = Game.CommandPage;
        (function (Direction) {
            Direction[Direction["None"] = 0] = "None";
            Direction[Direction["Left"] = Engine.BIT_0] = "Left";
            Direction[Direction["Up"] = Engine.BIT_1] = "Up";
            Direction[Direction["Right"] = Engine.BIT_2] = "Right";
            Direction[Direction["Down"] = Engine.BIT_3] = "Down";
            Direction[Direction["DownLeft"] = Engine.BIT_3 | Engine.BIT_0] = "DownLeft";
            Direction[Direction["UpLeft"] = Engine.BIT_0 | Engine.BIT_1] = "UpLeft";
            Direction[Direction["UpRight"] = Engine.BIT_1 | Engine.BIT_2] = "UpRight";
            Direction[Direction["DownRight"] = Engine.BIT_2 | Engine.BIT_3] = "DownRight";
        })(Game.Direction || (Game.Direction = {}));
        var Direction = Game.Direction;
        (function (EntityContainType) {
            EntityContainType[EntityContainType["Cargo"] = 0] = "Cargo";
            EntityContainType[EntityContainType["Builder"] = 1] = "Builder";
            EntityContainType[EntityContainType["Miner"] = 2] = "Miner";
        })(Game.EntityContainType || (Game.EntityContainType = {}));
        var EntityContainType = Game.EntityContainType;
        (function (EntityType) {
            EntityType[EntityType["None"] = 255] = "None";
            EntityType[EntityType["Footman"] = 0] = "Footman";
            EntityType[EntityType["Knight"] = 6] = "Knight";
            EntityType[EntityType["Peasant"] = 2] = "Peasant";
            EntityType[EntityType["Farm"] = 58] = "Farm";
            EntityType[EntityType["PigFarm"] = 59] = "PigFarm";
            EntityType[EntityType["HumanBarracks"] = 60] = "HumanBarracks";
            EntityType[EntityType["HumanBlacksmith"] = 82] = "HumanBlacksmith";
            EntityType[EntityType["OrcBarracks"] = 61] = "OrcBarracks";
            EntityType[EntityType["Stables"] = 66] = "Stables";
            EntityType[EntityType["TownHall"] = 74] = "TownHall";
            EntityType[EntityType["GoldMine"] = 92] = "GoldMine";
        })(Game.EntityType || (Game.EntityType = {}));
        var EntityType = Game.EntityType;
        (function (Occupy) {
            Occupy[Occupy["None"] = 0] = "None";
            Occupy[Occupy["LandUnit"] = Engine.BIT_0] = "LandUnit";
            Occupy[Occupy["LandStructure"] = Engine.BIT_0 | Engine.BIT_1] = "LandStructure";
            Occupy[Occupy["Sea"] = Engine.BIT_2] = "Sea";
            Occupy[Occupy["Air"] = Engine.BIT_3] = "Air";
        })(Game.Occupy || (Game.Occupy = {}));
        var Occupy = Game.Occupy;
        (function (OrderType) {
            OrderType[OrderType["None"] = 0] = "None";
            OrderType[OrderType["AttackEntity"] = 1] = "AttackEntity";
            OrderType[OrderType["AttackToTile"] = 2] = "AttackToTile";
            OrderType[OrderType["BuildAtTile"] = 3] = "BuildAtTile";
            OrderType[OrderType["CastOnEntity"] = 4] = "CastOnEntity";
            OrderType[OrderType["CastOnTile"] = 5] = "CastOnTile";
            OrderType[OrderType["ClearArea"] = 6] = "ClearArea";
            OrderType[OrderType["FollowEntity"] = 7] = "FollowEntity";
            OrderType[OrderType["HarvestGold"] = 8] = "HarvestGold";
            OrderType[OrderType["HoldPosition"] = 9] = "HoldPosition";
            OrderType[OrderType["MoveToTile"] = 10] = "MoveToTile";
            OrderType[OrderType["PatrolToEntity"] = 11] = "PatrolToEntity";
            OrderType[OrderType["PatrolToTile"] = 12] = "PatrolToTile";
            OrderType[OrderType["UpgradeSelf"] = 13] = "UpgradeSelf";
        })(Game.OrderType || (Game.OrderType = {}));
        var OrderType = Game.OrderType;
        (function (PathType) {
            PathType[PathType["ToTarget"] = 0] = "ToTarget";
            PathType[PathType["ToArea"] = 1] = "ToArea";
            PathType[PathType["AvoidTarget"] = 2] = "AvoidTarget";
            PathType[PathType["AvoidArea"] = 3] = "AvoidArea";
            PathType[PathType["ClearArea"] = 4] = "ClearArea";
        })(Game.PathType || (Game.PathType = {}));
        var PathType = Game.PathType;
        (function (PlacementTestFlag) {
            PlacementTestFlag[PlacementTestFlag["Message"] = Engine.BIT_0] = "Message";
            PlacementTestFlag[PlacementTestFlag["BlockingEntities"] = Engine.BIT_1] = "BlockingEntities";
            PlacementTestFlag[PlacementTestFlag["ValidTiles"] = Engine.BIT_2] = "ValidTiles";
            PlacementTestFlag[PlacementTestFlag["InvalidTiles"] = Engine.BIT_3] = "InvalidTiles";
        })(Game.PlacementTestFlag || (Game.PlacementTestFlag = {}));
        var PlacementTestFlag = Game.PlacementTestFlag;
        (function (PlayerType) {
            PlayerType[PlayerType["None"] = 0] = "None";
            PlayerType[PlayerType["User"] = 1] = "User";
            PlayerType[PlayerType["Computer"] = 2] = "Computer";
            PlayerType[PlayerType["Rescue"] = 3] = "Rescue";
        })(Game.PlayerType || (Game.PlayerType = {}));
        var PlayerType = Game.PlayerType;
        (function (ResourceType) {
            ResourceType[ResourceType["None"] = 0] = "None";
            ResourceType[ResourceType["Gold"] = 1] = "Gold";
            ResourceType[ResourceType["Lumber"] = 2] = "Lumber";
            ResourceType[ResourceType["Oil"] = 4] = "Oil";
        })(Game.ResourceType || (Game.ResourceType = {}));
        var ResourceType = Game.ResourceType;
        (function (SequenceType) {
            SequenceType[SequenceType["Directional"] = 1] = "Directional";
            SequenceType[SequenceType["Vertical"] = 2] = "Vertical";
            SequenceType[SequenceType["Horizontal"] = 3] = "Horizontal";
        })(Game.SequenceType || (Game.SequenceType = {}));
        var SequenceType = Game.SequenceType;
        (function (SequenceUpdateResult) {
            SequenceUpdateResult[SequenceUpdateResult["Default"] = 0] = "Default";
            SequenceUpdateResult[SequenceUpdateResult["FrameIncremented"] = 1] = "FrameIncremented";
            SequenceUpdateResult[SequenceUpdateResult["SequenceElapsed"] = 2] = "SequenceElapsed";
        })(Game.SequenceUpdateResult || (Game.SequenceUpdateResult = {}));
        var SequenceUpdateResult = Game.SequenceUpdateResult;
        (function (ThinkResult) {
            ThinkResult[ThinkResult["NotDone"] = 0] = "NotDone";
            ThinkResult[ThinkResult["Done"] = 1] = "Done";
            ThinkResult[ThinkResult["DoneIfQueue"] = 2] = "DoneIfQueue";
        })(Game.ThinkResult || (Game.ThinkResult = {}));
        var ThinkResult = Game.ThinkResult;
        (function (TileSpecialFlag) {
        })(Game.TileSpecialFlag || (Game.TileSpecialFlag = {}));
        var TileSpecialFlag = Game.TileSpecialFlag;
        (function (TileType) {
            TileType[TileType["None"] = 0] = "None";
            TileType[TileType["LightWater"] = 2] = "LightWater";
            TileType[TileType["DarkWater"] = 3] = "DarkWater";
            TileType[TileType["LightDirt"] = 4] = "LightDirt";
            TileType[TileType["DarkDirt"] = 5] = "DarkDirt";
            TileType[TileType["LightGrass"] = 6] = "LightGrass";
            TileType[TileType["DarkGrass"] = 7] = "DarkGrass";
            TileType[TileType["Tree"] = 8] = "Tree";
            TileType[TileType["Rock"] = 9] = "Rock";
            TileType[TileType["HumanWall"] = 10] = "HumanWall";
            TileType[TileType["OrcWall"] = 11] = "OrcWall";
            TileType[TileType["HumanWallDamaged"] = 12] = "HumanWallDamaged";
            TileType[TileType["OrcWallDamaged"] = 13] = "OrcWallDamaged";
            TileType[TileType["WallDestroyed"] = 14] = "WallDestroyed";
        })(Game.TileType || (Game.TileType = {}));
        var TileType = Game.TileType;
        (function (UserState) {
            UserState[UserState["Default"] = 0] = "Default";
            UserState[UserState["Selecting"] = 1] = "Selecting";
            UserState[UserState["PlacingEntity"] = 2] = "PlacingEntity";
            UserState[UserState["PlacingTerrain"] = 3] = "PlacingTerrain";
            UserState[UserState["Targeting"] = 4] = "Targeting";
        })(Game.UserState || (Game.UserState = {}));
        var UserState = Game.UserState;
        (function (WeaponBehavior) {
            WeaponBehavior[WeaponBehavior["Instant"] = 0] = "Instant";
            WeaponBehavior[WeaponBehavior["Projectile"] = 1] = "Projectile";
            WeaponBehavior[WeaponBehavior["ProjectileHoming"] = 2] = "ProjectileHoming";
        })(Game.WeaponBehavior || (Game.WeaponBehavior = {}));
        var WeaponBehavior = Game.WeaponBehavior;
        (function (WorldCommandType) {
            WorldCommandType[WorldCommandType["Default"] = 0] = "Default";
            WorldCommandType[WorldCommandType["Ability"] = 1] = "Ability";
            WorldCommandType[WorldCommandType["Attack"] = 2] = "Attack";
            WorldCommandType[WorldCommandType["Build"] = 3] = "Build";
            WorldCommandType[WorldCommandType["HoldPosition"] = 4] = "HoldPosition";
            WorldCommandType[WorldCommandType["Move"] = 5] = "Move";
            WorldCommandType[WorldCommandType["Patrol"] = 6] = "Patrol";
            WorldCommandType[WorldCommandType["SetRallyPoint"] = 7] = "SetRallyPoint";
            WorldCommandType[WorldCommandType["Stop"] = 8] = "Stop";
            WorldCommandType[WorldCommandType["Train"] = 9] = "Train";
        })(Game.WorldCommandType || (Game.WorldCommandType = {}));
        var WorldCommandType = Game.WorldCommandType;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        function koSubscribeChanged(observable, callback, ignoreNoChange) {
            var _oldVal;
            observable.subscribe(function (oldVal) {
                _oldVal = oldVal;
            }, observable, "beforeChange");
            observable.subscribe(function (newVal) {
                if (!ignoreNoChange || _oldVal !== newVal)
                    callback(_oldVal, newVal);
            });
        }
        Game.koSubscribeChanged = koSubscribeChanged;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        ;
        (function (SpawnState) {
            SpawnState[SpawnState["None"] = 0] = "None";
            SpawnState[SpawnState["Constructing"] = 1] = "Constructing";
            SpawnState[SpawnState["Alive"] = 2] = "Alive";
            SpawnState[SpawnState["Dead"] = 3] = "Dead";
        })(Game.SpawnState || (Game.SpawnState = {}));
        var SpawnState = Game.SpawnState;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        Game.TILE_SIZE = 32;
        Game.TILE_INV_SIZE = 1 / Game.TILE_SIZE;
        Game.TILE_ATLAS_TILE_SIZE = 32;
        Game.TILE_ATLAS_TILES_WIDE = 16;
        Game.TILE_ATLAS_TILES_HIGH = 32;
        Game.TERRAIN_HEIGHT_SCALE = 50;
        Game.ENTITY_BUTTON_X_MAX = 3;
        Game.ENTITY_BUTTON_Y_MAX = 3;
        Game.ENTITY_MAX_SELECTION = Game.ENTITY_BUTTON_X_MAX * Game.ENTITY_BUTTON_Y_MAX;
        Game.ENTITY_MOVE_SPEED_MULTIPLIER = 0.17;
        Game.ENTITY_FLASH_TIME = 300;
        Game.ENTITY_FLASH_COUNT = 2;
        Game.COMMAND_BUTTON_X_MAX = 3;
        Game.COMMAND_BUTTON_Y_MAX = 3;
        Game.COMMANDS_MAX = Game.COMMAND_BUTTON_X_MAX * Game.COMMAND_BUTTON_Y_MAX;
        Game.PATHFINDER_MAX_ITERATIONS = 100;
        Game.PLAYERS_MAX = 8;
        Game.CAMERA_MOUSE_SCROLL_EDGE = 20;
        Game.CAMERA_SCROLL_SPEED = 1;
        Game.CAMERA_MAX_ZOOM = 3;
        Game.CAMERA_MIN_ZOOM = 1;
        Game.CAMERA_ZOOM_INCREMENT = 0.1;
        Game.TEST_WORLD_DATA = (JSON.parse("{\"world\":{\"terrain\":{\"type\":\"forest\",\"width\":32,\"height\":32,\"tiles\":[502,502,246,246,246,246,246,502,246,502,246,246,502,502,246,502,502,502,502,246,246,246,246,502,246,246,502,246,246,246,246,246,502,502,502,246,246,502,502,502,502,246,246,502,502,246,502,502,246,502,246,502,246,246,502,246,502,246,246,246,502,502,246,246,502,246,502,502,502,502,246,246,246,246,502,502,502,246,246,502,502,246,246,246,502,502,502,502,246,246,502,502,246,502,502,502,502,502,246,502,502,246,246,246,502,502,246,246,246,502,246,502,246,246,246,246,246,246,246,502,246,502,502,246,502,246,502,246,246,502,246,246,246,246,502,502,246,502,502,246,502,246,246,502,502,502,502,246,502,502,502,502,246,246,246,246,502,246,246,502,246,246,246,502,246,246,502,502,246,502,502,246,374,54,310,566,182,246,502,246,502,502,246,246,502,246,246,246,246,502,502,246,502,502,246,246,246,502,246,392,456,456,328,502,598,137,457,329,678,502,502,502,502,502,502,246,502,502,246,246,246,502,502,246,502,502,246,392,200,456,456,232,760,504,88,246,86,169,1017,345,166,502,246,502,502,246,246,246,246,246,502,246,502,246,246,246,502,502,502,424,248,248,248,504,120,312,280,246,86,297,313,25,166,118,310,310,310,182,246,502,502,246,502,246,246,502,502,246,502,246,246,168,248,120,312,56,280,246,246,502,214,710,198,198,358,22,393,201,329,678,246,502,246,502,246,502,246,246,246,502,502,246,246,40,312,280,502,246,502,502,246,246,502,246,246,502,342,393,233,249,345,166,502,246,502,502,502,502,246,246,502,502,502,246,246,246,246,246,246,502,246,246,246,246,502,502,502,246,86,425,505,249,345,166,502,502,502,502,502,246,246,246,246,502,502,246,392,456,200,456,328,502,246,246,246,246,246,502,246,246,342,169,761,761,89,166,246,246,246,246,502,502,246,502,246,502,502,246,168,760,760,504,88,246,246,246,246,502,502,246,502,246,86,41,57,57,25,422,502,502,502,246,246,246,246,246,502,502,246,246,424,248,504,760,88,502,246,246,502,502,502,502,246,502,470,454,454,710,710,230,246,246,246,246,246,502,502,502,246,502,246,502,40,56,312,312,280,246,502,502,246,374,566,566,54,54,182,246,246,502,246,246,246,502,502,246,502,502,502,246,246,502,246,502,502,118,54,566,310,182,246,502,502,342,393,457,457,329,678,502,502,502,502,246,246,502,246,502,502,246,246,246,246,246,502,246,246,598,372,308,436,38,310,54,54,22,297,313,313,25,678,246,246,502,246,502,502,246,502,502,246,246,502,502,246,246,246,502,246,86,340,242,292,52,564,564,308,436,116,52,436,500,678,502,502,502,502,246,502,502,502,246,246,246,246,246,246,246,246,502,246,342,340,242,498,498,754,754,498,420,340,242,36,180,678,502,246,246,246,502,502,246,246,246,502,502,246,246,502,502,502,502,246,598,212,708,196,708,196,452,708,484,340,498,754,676,422,502,502,502,246,502,246,502,502,502,246,246,502,246,502,502,502,246,502,214,710,710,454,710,198,454,454,70,468,708,708,228,678,502,502,502,502,246,502,502,246,246,502,502,502,246,502,502,246,246,502,246,246,246,246,502,246,246,246,214,710,454,454,454,230,502,502,246,246,502,246,246,246,246,246,502,246,246,502,502,246,246,246,502,502,502,502,246,246,246,502,502,502,246,502,246,502,246,502,246,502,246,246,246,502,502,246,502,502,246,246,502,502,246,246,246,246,246,502,502,246,246,502,246,502,502,246,502,246,502,502,502,246,502,502,502,502,246,246,502,502,246,502,502,502,246,246,502,246,502,502,502,246,502,502,246,246,246,246,246,246,246,246,502,246,246,246,502,502,502,246,502,246,502,502,246,246,502,246,246,246,502,502,502,246,502,246,502,246,502,502,246,246,246,502,246,502,502,246,502,246,502,246,502,246,502,502,502,246,502,502,502,246,246,246,502,502,502,502,246,246,502,502,246,246,246,502,502,502,246,502,502,246,246,246,246,502,502,246,502,246,246,502,502,246,502,502,502,502,246,502,502,502,246,502,246,246,246,502,502,502,502,246,502,246,246,502,246,246,246,246,246,502,246,246,502,502,502,246,246,246,246,502,246,502,246,502,502,502,502,502,502,502,246,246,502,246,246,502,502,246,502,246,246,246,246,246,246,502,502,502,502,502,502,502,502,502,246,502,246,502,502,502,502,502,246,246,246,502,246,246,246,246,246,502,502,246,246,246,246,246,502,502,246,502,246,502,502,246,246,502,246,502,246,246,246,246,502,502,246,246,246,502,246,502,246,502,246]},\"teams\":[{\"name\":\"Neutral Team\",\"shareVision\":true},{\"name\":\"Team 1\",\"shareVision\":true},{\"name\":\"Team 2\",\"shareVision\":true},{\"name\":\"Team 3\",\"shareVision\":true},{\"name\":\"Team 4\",\"shareVision\":true},{\"name\":\"Team 5\",\"shareVision\":true},{\"name\":\"Team 6\",\"shareVision\":true},{\"name\":\"Team 7\",\"shareVision\":true},{\"name\":\"Team 8\",\"shareVision\":true}],\"players\":[{\"gold\":1000,\"lumber\":500,\"name\":\"Neutral Player\",\"oil\":250,\"race\":1,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":0},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 1\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":1},{\"gold\":2400,\"lumber\":1400,\"name\":\"Player 2\",\"oil\":550,\"race\":1,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":2},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 3\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":3},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 4\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":4},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 5\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":5},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 6\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":6},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 7\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":7},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 8\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":8}],\"entities\":[[4194306,359,262204,12058864],[4198402,488,262204,16253200],[4203682,360,263344,13631808],[4207780,364,263344,13631936],[4210692,330,262204,11010384],[4214788,489,262204,16253232],[4218916,334,262174,11010512],[4223012,529,262174,17302064],[4227106,299,262174,9961840],[4231202,297,262174,9961776],[4235298,298,262174,9961808],[4239362,555,262204,18350448],[4243554,326,262234,11010256],[4247652,235,262234,7864688],[4251746,552,262234,18350352],[4255844,494,262234,16253392],[4259940,516,262234,17301648],[4265122,84,263344,4195008],[4268034,82,262204,2622032],[4273600,312,262144,11010864]]},\"user\":{\"cameraX\":480.34108872841,\"cameraY\":351.76123789011,\"cameraZoom\":1.0943023107607,\"playerID\":2,\"placementEntityType\":-1,\"placementRadius\":1,\"placementTileType\":0,\"selectedEntities\":[1026],\"userState\":0}}").world);
        Game.TEST_WORLD_DATA2 = "1503330301210101138350225030121013c25228022c030121014b0354221039020121015a220431f031d030121015a21ee3230311030121015a22283f0217030121015a2eb21503d020121015a21463230317030121013c222b3130315030121011e212a3130313030121011e21293130317030121011e212b3210323030121011e2211315031d030121011e214e31f0313030121013c21e93150315030121013c214a31a031c030121014b0316c31a0314030121014b0316831f0311030121013c21e831703f020121013c2167341335c2014123012141134a2214103614140f3614140e3612140d3614140c3612140b3012140a3212140932121408321214073214140632141405301414043014140334a24140234a221401301214003012114281131011fa21f433e83Player 88171121011fa21f433e83Player 78161131011fa21f433e83Player 68151121011fa21f433e83Player 58141131011fa21f433e83Player 48131121011fa21f433e83Player 38121111011226357839603Player 28111121011fa21f433e83Player 18101111011fa21f433e83Neutral Playere1911Team 8611Team 7611Team 6611Team 5611Team 4611Team 3611Team 2611Team 1611Neutral Teamc19101f16111f16101f16111f16101f16111f16101f16101f16101f16111f16111f16101f16101f16101f16101f16111f16101f16111f16101f16101f16111f16111f16101f16111f16101f16111f16111f16101f16101f16101f16101f16101f16111f16111f16101f16101f16101f16101f16101f16111f16101f16101f16101f16111f16111f16111f16111f16111f16101f16111f16101f16111f16111f16111f16111f16111f16111f16111f16111f16111f16101f16101f16101f16101f16101f16101f16111f16101f16111f16111f16101f16101f16111f16101f16101f16111f16111f16111f16111f16111f16111f16111f16101f16111f16101f16111f16101f16101f16101f16101f16111f16111f16111f16101f16101f16111f16101f16101f16101f16101f16101f16111f16101f16101f16111f16101f16111f16111f16111f16111f16101f16101f16101f16111f16101f16111f16111f16111f16101f16111f16111f16111f16111f16101f16111f16111f16101f16101f16111f16101f16111f16111f16101f16101f16101f16101f16111f16111f16101f16111f16111f16111f16101f16101f16101f16111f16111f16101f16101f16111f16111f16111f16111f16101f16101f16101f16111f16111f16111f16101f16111f16111f16111f16101f16111f16101f16111f16101f16111f16101f16111f16111f16101f16111f16101f16101f16101f16111f16111f16101f16111f16101f16111f16101f16111f16111f16111f16101f16101f16101f16111f16101f16101f16111f16111f16101f16111f16101f16111f16111f16111f16101f16101f16101f16111f16101f16101f16101f16101f16101f16101f16101f16101f16111f16111f16101f16111f16111f16111f16101f16111f16101f16101f16111f16111f16111f16101f16111f16111f16101f16101f16111f16111f16111f16111f16101f16111f16111f16111f16101f16111f16101f16111f16111f16101f16111f16101f16101f16111f16111f16101f16101f16101f16101f16101f16111f16111f16101f16101f16111f16111f16101f16111f16111f16101f16101f16101f16111f16101f16111f16101f16111f16101f16111f16101f16111f16111f16111f16101f16101f16101f16111f16111f16111f16111f16101f16101f16101f16111f16111f16101f16101f16111f16101f16101f16101f16101f16101f16111f16101f16101f16111f16111f16101e16111c16111c16111c16121c16101d16101f16101f16101f16111f16101f16101f16101f16101f16111f16101f16101f16111f16111f16101f16111f16111f16111f16101f16101f16111f16111f16101f16111f16111f16111f16111f16121a16101e14121c14121c14111d14101416111c16111c16101c16121c16111c16121c16121c16101d16111f16101f16111f16111f16111f16101f16111f16101f16101f16111f16111f16111f16101f16111f16101f16111f16111f16111f16111a16121a14121f12111f12111514111e14121c14111c14101c14121c14101c14121c14101d14121516101f16111f16111f16111f16111f16101f16101f16111f16111f16101f16101f16101f16111f16111f16101f16101f16101f16111f16121a16101b14101214101f12111514111a14111f12121f12121f12111f12111f12101f12111514111516101f16111f16101f16101f16101f16101f16101f16101f16101f16101f16111f16111f16111f16101f16111f16111f16111f16111f16121a16111f14111b14101314101714111b14111314121314121314101314111214101f12111514101516101f16111f16101f16101f16101f16111f16111f16101f16101f16111f16111f16101f16111f16111f16101f16111f16101f16101f16121a16101119111319111319111219101116101316101316111316101216111b14111314111714121516101f16101f16111f16101f16101f16101f16101f16101f16111f16111f16101f16111f16101f16101f16111f16111f16111f16111f16121a16111419111c19111c19111819111516111f16111f16101f16101b16111316121316101316101716111f16111f16101f16111f16101f16101f16111f16111f16111f16101f16111f16111f16101f16101f16101f16111f16101f16101f16101b16101316101316121316121316111716101f16111f16111f16101f16111118111318111318101318101218111f16101f16111f16101f16111f16111f16111f16101f16101f16101f16101f16101f16101e16121c16121c16111c16111c16111d16111f16101f16111f16111f16111f16111f16101f16101f16111f16101518121f18111f18101f18111a18101f16101f16111f16111f16101f16101f16101f16101f16101f16111f16111f16111f16111a16101119101319101319101219101516101f16111f16101f16111f16111f16101f16101f16101f16101f16101518111f18121f18121f18101a18101f16111f16111f16101f16111f16101f16111f16111f16101f16101f16101f16101f16101a16101519121f19121f19101a19111516101f16101f16111f16101f16101f16101f16101f16101f16111f16111418111c18101c18111c18111818101f16111f16111f16101f16101f16101f16101f16111f16111f16111f16111f16111f16101a16111519101f19111f19111a19101516101f16111f16111f16111f16101f16101f16101f16101f16111f16101f16101f16101f16101f16101f16101f16111f16111f16111f16101f16101f16111f16111f16111f16111f16101f16111f16101a16111519101f19101e19111819111516111f16101f16101f16111f16101f16101f16111f16111f16101f16111f16111118111318101218101f16101f16111f16111f16101f16101f16101f16111f16101f16111f16101f16111f16101f16121a16111419101c19111819101116111616101c16101c16121c16101d16111f16101f16101f16111118101318111318101718101f18101a18101f16101f16111f16101f16111f16111f16101f16101f16111f16101f16111f16111f16101f16101b16111316111316111316101716101a16101119111319111219101516101f16111118111318101718111f18101f18101f18101f18111a18111f16111f16111f16101f16101f16101f16111f16101f16111f16101f16101f16101f16101f16101f16111f16111f16101f16111f16101a16111519131f19101a19101516101f16101518111f18121f18101e18111c18111c18101c18111818101f16111f16111f16101f16111f16111f16101f16101f16101f16111f16111f16101f16111f16111f16111f16111f16111f16111f16121a16111419111c19101819121516111f16111418111c18111c18111818101f16111f16101f16101f16101f16111f16111f16101f16111f16111f16101f16101f16101f16101f16111f16101f16101f16111f16111f16101f16111f16101f16101b16121316111316101316111716101f16111f16111f16101f16111f16111f16101f16101f16111f16101f16101f16101f16111f16101f16101f16111f16101f16101f16101f16101f16111f16111f16111f16111f16101f16111f16111f16111f16111f16101f16101f16111f16101f16111f16111f16101f16111f16111f16101f16101f16101f16101f16111f16101f16101f16111f16101f16111f16101f16111f16111f16101f16111f16101f16101f16101f16101f16101f16101f16101f16111f16101f16111f16101f16101f16101f16111f16111f16101f16101f16101f16111f16111f16101f16111f16111f16111f16111f16111f16101f16111f16111f16101f16101f16111f16111f16111f16111f16101f16101f16101f16111f16111f16101f16101f16111f16111f16111f16101f16101f16101f16101f16111f16111f16111f16111f16101f16111f16101f16101f16111f16111f16101f16101f16101f16111f16101f16111f16101f16101f16111f16101f16111f16101f16111f16111f16101f16111f16111f16101f16101f16111f16111f16111f16111f16101f16101f16111f16111f16111f16101f16101f16101f16101f16101f16111f16101f16101f16111f16101f16101f16101f16101f16111f16111f16111f16111f16101f16111f16111f16101f16101f16111f16101f16111f16101f16101f16101f16101f16101f16111f16111f161202202forest61";
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Camera2D = (function () {
            function Camera2D(center, boundsWidth, boundsHeight) {
                this._center = center.clone();
                this._dimensions = new Engine.Vec2(1, 1);
                this._rect = new Engine.Rect(0, 0, 1, 1);
                this._boundsWidth = boundsWidth;
                this._boundsHeight = boundsHeight;
                this._zoom = 1;
                this._invZoom = 1;
                this._clampCenter();
            }
            Camera2D.prototype.getCenter = function () { return this._center; };
            Camera2D.prototype.getRect = function () { return this._rect; };
            Camera2D.prototype.getZoom = function () { return this._zoom; };
            Camera2D.prototype.dispose = function () {
                this._center = null;
                this._dimensions = null;
                this._rect = null;
            };
            Camera2D.prototype.setCenter = function (center) {
                this._center = center.clone();
                this._clampCenter();
            };
            Camera2D.prototype.setZoom = function (zoom) {
                this._zoom = Engine.MathUtil.clamp(zoom, Game.CAMERA_MIN_ZOOM, Game.CAMERA_MAX_ZOOM);
                this._invZoom = 1 / this._zoom;
                this._rect.width = Math.ceil(this._dimensions.x * this._invZoom);
                this._rect.height = Math.ceil(this._dimensions.y * this._invZoom);
                this._clampCenter();
            };
            Camera2D.prototype.scrollLeft = function (dt) {
                this._center.x -= dt * Game.CAMERA_SCROLL_SPEED * this._invZoom;
                this._clampCenter();
            };
            Camera2D.prototype.scrollUp = function (dt) {
                this._center.y -= dt * Game.CAMERA_SCROLL_SPEED * this._invZoom;
                this._clampCenter();
            };
            Camera2D.prototype.scrollRight = function (dt) {
                this._center.x += dt * Game.CAMERA_SCROLL_SPEED * this._invZoom;
                this._clampCenter();
            };
            Camera2D.prototype.scrollDown = function (dt) {
                this._center.y += dt * Game.CAMERA_SCROLL_SPEED * this._invZoom;
                this._clampCenter();
            };
            Camera2D.prototype.resize = function (width, height) {
                this._dimensions.x = width;
                this._dimensions.y = height;
                this._rect.width = Math.ceil(width * this._invZoom);
                this._rect.height = Math.ceil(height * this._invZoom);
                this._clampCenter();
            };
            Camera2D.prototype.getPointAt = function (viewX, viewY, vecRef) {
                var rect = this._rect;
                vecRef.x = Engine.MathUtil.clamp(rect.x + viewX * this._invZoom, rect.x, rect.right);
                vecRef.y = Engine.MathUtil.clamp(rect.y + viewY * this._invZoom, rect.y, rect.bottom);
            };
            Camera2D.prototype.apply = function (ctx) {
                ctx.translate(this._dimensions.x >> 1, this._dimensions.y >> 1);
                ctx.scale(this._zoom, this._zoom);
                ctx.translate(-this._center.x, -this._center.y);
            };
            Camera2D.prototype._clampCenter = function () {
                var center = this._center;
                var rect = this._rect;
                var halfWidth = (rect.width + 1) >> 1;
                var halfHeight = (rect.height + 1) >> 1;
                center.x = Math.max(Math.min(this._boundsWidth - halfWidth, center.x), halfWidth);
                center.y = Math.max(Math.min(this._boundsHeight - halfHeight, center.y), halfHeight);
                rect.x = center.x - halfWidth;
                rect.y = center.y - halfHeight;
            };
            return Camera2D;
        })();
        Game.Camera2D = Camera2D;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Command = (function () {
            function Command() {
            }
            Command.prototype.getFoodCost = function () { return 0; };
            Command.prototype.getGoldCost = function () { return 0; };
            Command.prototype.getLumberCost = function () { return 0; };
            Command.prototype.getOilCost = function () { return 0; };
            Command.prototype.getManaCost = function () { return 0; };
            Command.prototype.getButtonX = function () { throw "Command.buttonX is abstract."; return 0; };
            Command.prototype.getButtonY = function () { throw "Command.buttonY is abstract."; return 0; };
            Command.prototype.getHotkey = function () { return Engine.Key.None; };
            Command.prototype.getIconID = function () { return ""; };
            Command.prototype.getName = function () { return ""; };
            Command.prototype.getTooltip = function () { return ""; };
            Command.prototype.getTooltipExtended = function () { return ""; };
            return Command;
        })();
        Game.Command = Command;
        var UserCommand = (function (_super) {
            __extends(UserCommand, _super);
            function UserCommand() {
                _super.apply(this, arguments);
            }
            UserCommand.prototype.tryExecute = function (user) {
                return { success: true };
            };
            return UserCommand;
        })(Command);
        Game.UserCommand = UserCommand;
        var AdvancedBuildCommand = (function (_super) {
            __extends(AdvancedBuildCommand, _super);
            function AdvancedBuildCommand() {
                _super.apply(this, arguments);
            }
            AdvancedBuildCommand.prototype.tryExecute = function (user) {
                user.setPage(Game.CommandPage.AdvancedBuild);
                return { success: true };
            };
            AdvancedBuildCommand.prototype.getButtonX = function () { return 1; };
            AdvancedBuildCommand.prototype.getButtonY = function () { return 2; };
            AdvancedBuildCommand.prototype.getHotkey = function () { return Engine.Key.KEY_V; };
            AdvancedBuildCommand.prototype.getIconID = function () { return "icon-advanced-build"; };
            AdvancedBuildCommand.prototype.getName = function () { return "Advanced Build"; };
            AdvancedBuildCommand.prototype.getTooltip = function () { return "Build Ad|v|anced Structures"; };
            AdvancedBuildCommand.instance = new AdvancedBuildCommand();
            return AdvancedBuildCommand;
        })(UserCommand);
        Game.AdvancedBuildCommand = AdvancedBuildCommand;
        var BasicBuildCommand = (function (_super) {
            __extends(BasicBuildCommand, _super);
            function BasicBuildCommand() {
                _super.apply(this, arguments);
            }
            BasicBuildCommand.prototype.tryExecute = function (user) {
                user.setPage(Game.CommandPage.BasicBuild);
                return { success: true };
            };
            BasicBuildCommand.prototype.getButtonX = function () { return 0; };
            BasicBuildCommand.prototype.getButtonY = function () { return 2; };
            BasicBuildCommand.prototype.getHotkey = function () { return Engine.Key.KEY_B; };
            BasicBuildCommand.prototype.getIconID = function () { return "icon-basic-build"; };
            BasicBuildCommand.prototype.getName = function () { return "Basic Build"; };
            BasicBuildCommand.prototype.getTooltip = function () { return "Build |B|asic Structures"; };
            BasicBuildCommand.instance = new BasicBuildCommand();
            return BasicBuildCommand;
        })(UserCommand);
        Game.BasicBuildCommand = BasicBuildCommand;
        var CancelCommand = (function (_super) {
            __extends(CancelCommand, _super);
            function CancelCommand() {
                _super.apply(this, arguments);
            }
            CancelCommand.prototype.tryExecute = function (user) {
                user.setPage(Game.CommandPage.Default);
                return { success: true };
            };
            CancelCommand.prototype.getButtonX = function () { return 2; };
            CancelCommand.prototype.getButtonY = function () { return 2; };
            CancelCommand.prototype.getHotkey = function () { return Engine.Key.KEY_X; };
            CancelCommand.prototype.getIconID = function () { return "icon-cancel"; };
            CancelCommand.prototype.getName = function () { return "Cancel"; };
            CancelCommand.prototype.getTooltip = function () { return "Cancel"; };
            CancelCommand.instance = new CancelCommand();
            return CancelCommand;
        })(UserCommand);
        Game.CancelCommand = CancelCommand;
        var WorldCommand = (function (_super) {
            __extends(WorldCommand, _super);
            function WorldCommand() {
                _super.apply(this, arguments);
            }
            WorldCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Default; };
            WorldCommand.prototype.requiresTarget = function () { return true; };
            WorldCommand.prototype.plotEntityType = function () { return Game.EntityType.None; };
            WorldCommand.prototype.canExecute = function (player, entities, target) {
                var valid = entities.slice(0);
                for (var i = valid.length - 1; i !== -1; --i) {
                    if (valid[i].getOwner() !== player)
                        valid.splice(i, 1);
                }
                if (valid.length === 0)
                    return { success: false };
                var foodCost = this.getFoodCost();
                if (foodCost > 0 && player.getFoodCreated() - player.getFoodUsed() < foodCost)
                    return { success: false, message: "Not enough food." };
                var goldCost = this.getGoldCost();
                if (goldCost > 0 && player.getGold() < goldCost)
                    return { success: false, message: "Not enough gold." };
                var lumberCost = this.getLumberCost();
                if (lumberCost > 0 && player.getLumber() < lumberCost)
                    return { success: false, message: "Not enough lumber." };
                var oilCost = this.getOilCost();
                if (oilCost > 0 && player.getOil() < oilCost)
                    return { success: false, message: "Not enough oil." };
                var manaCost = this.getManaCost();
                if (manaCost > 0) {
                    for (var i = valid.length - 1; i !== -1; --i) {
                        if (valid[i].getMana() < manaCost)
                            valid.splice(i, 1);
                    }
                    if (valid.length === 0)
                        return { success: false, message: "Not enough mana." };
                }
                return { success: true, validEntities: valid };
            };
            WorldCommand.prototype.isTargetAllowed = function (target) {
                return true;
            };
            WorldCommand.prototype.tryExecute = function (player, entities, target, queue) {
                var result = this.canExecute(player, entities, target);
                if (result.success) {
                    var valid = result.validEntities;
                    for (var i = 0, ii = valid.length; i < ii; ++i) {
                        var ent = valid[i];
                        if (!queue)
                            ent.orderQueue.length = 0;
                        this.executeEach(ent, target);
                    }
                }
                return result;
            };
            WorldCommand.prototype.executeEach = function (entity, target) {
                // DEFAULT ORDER
                if (target instanceof Game.Tile) {
                    entity.orderQueue.push(new Game.Order_MoveToTile(entity, target));
                }
                else if (target instanceof Game.Entity) {
                    entity.orderQueue.push(new Game.Order_FollowEntity(entity, target));
                }
            };
            WorldCommand.instance = new WorldCommand();
            return WorldCommand;
        })(Command);
        Game.WorldCommand = WorldCommand;
        var AbilityCommand = (function (_super) {
            __extends(AbilityCommand, _super);
            function AbilityCommand(abType) {
                _super.call(this);
                this._type = abType;
            }
            AbilityCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Ability; };
            return AbilityCommand;
        })(WorldCommand);
        Game.AbilityCommand = AbilityCommand;
        var AttackCommand = (function (_super) {
            __extends(AttackCommand, _super);
            function AttackCommand() {
                _super.apply(this, arguments);
            }
            AttackCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Attack; };
            AttackCommand.prototype.getButtonX = function () { return 2; };
            AttackCommand.prototype.getButtonY = function () { return 0; };
            AttackCommand.prototype.getHotkey = function () { return Engine.Key.KEY_A; };
            AttackCommand.prototype.getIconID = function () { return "icon-melee0-{race}"; };
            AttackCommand.prototype.getName = function () { return "Attack"; };
            AttackCommand.prototype.getTooltip = function () { return "|A|ttack"; };
            AttackCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to move to the target area and attack any enemy units"
                    + " they see on the way. If you order them to attack a specific unit, your units will"
                    + " ignore other enemy units and attack the targeted unit until it is destroyed.";
            };
            AttackCommand.prototype.executeEach = function (entity, target) {
            };
            AttackCommand.instance = new AttackCommand();
            return AttackCommand;
        })(WorldCommand);
        Game.AttackCommand = AttackCommand;
        var BuildCommand = (function (_super) {
            __extends(BuildCommand, _super);
            function BuildCommand(entType) {
                _super.call(this);
                this._type = entType;
                this._data = Game.AllEntityData[entType];
            }
            BuildCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Build; };
            BuildCommand.prototype.getFoodCost = function () { return this._data.foodCost; };
            BuildCommand.prototype.getGoldCost = function () { return this._data.goldCost; };
            BuildCommand.prototype.getLumberCost = function () { return this._data.lumberCost; };
            BuildCommand.prototype.getOilCost = function () { return this._data.oilCost; };
            BuildCommand.prototype.getButtonX = function () { return this._data.buttonX; };
            BuildCommand.prototype.getButtonY = function () { return this._data.buttonY; };
            BuildCommand.prototype.getHotkey = function () { return this._data.hotkey; };
            BuildCommand.prototype.getIconID = function () { return this._data.iconId; };
            BuildCommand.prototype.getName = function () { return this._data.name; };
            BuildCommand.prototype.getTooltip = function () { return this._data.tooltip; };
            BuildCommand.prototype.getTooltipExtended = function () { return this._data.tooltipExtended; };
            BuildCommand.prototype.plotEntityType = function () { return this._type; };
            BuildCommand.prototype.canExecute = function (player, entities, target) {
                var cmdResult = _super.prototype.canExecute.call(this, player, entities, target);
                if (cmdResult.success) {
                    if (target) {
                        if (!(target instanceof Game.Tile))
                            return { success: false, message: "Target must be a tile." };
                        if (!this.placementEntity)
                            return { success: false, message: "No placement entity." };
                        var placeResult = this.placementEntity.placementTest(target.x, target.y, Game.PlacementTestFlag.Message, player, null);
                        if (!placeResult.valid)
                            return { success: false, message: placeResult.message };
                    }
                }
                return cmdResult;
            };
            BuildCommand.prototype.executeEach = function (entity, target) {
                if (target instanceof Game.Tile) {
                    entity.orderQueue.push(new Game.Order_BuildAtTile(entity, target, this.placementEntity));
                }
            };
            return BuildCommand;
        })(WorldCommand);
        Game.BuildCommand = BuildCommand;
        var HoldPositionCommand = (function (_super) {
            __extends(HoldPositionCommand, _super);
            function HoldPositionCommand() {
                _super.apply(this, arguments);
            }
            HoldPositionCommand.prototype.getCommandType = function () { return Game.WorldCommandType.HoldPosition; };
            HoldPositionCommand.prototype.requiresTarget = function () { return false; };
            HoldPositionCommand.prototype.getButtonX = function () { return 1; };
            HoldPositionCommand.prototype.getButtonY = function () { return 1; };
            HoldPositionCommand.prototype.getHotkey = function () { return Engine.Key.KEY_H; };
            HoldPositionCommand.prototype.getIconID = function () { return "icon-hold-position-{race}"; };
            HoldPositionCommand.prototype.getName = function () { return "Hold Position"; };
            HoldPositionCommand.prototype.getTooltip = function () { return "|H|old Position"; };
            HoldPositionCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to stand where they are and attack units that are"
                    + " within range. When on Hold Position your units will not chase down enemy units"
                    + " that run away, nor move to engage ranged attackers.";
            };
            HoldPositionCommand.prototype.executeEach = function (entity, target) {
            };
            HoldPositionCommand.instance = new HoldPositionCommand();
            return HoldPositionCommand;
        })(WorldCommand);
        Game.HoldPositionCommand = HoldPositionCommand;
        var MoveCommand = (function (_super) {
            __extends(MoveCommand, _super);
            function MoveCommand() {
                _super.apply(this, arguments);
            }
            MoveCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Move; };
            MoveCommand.prototype.getButtonX = function () { return 0; };
            MoveCommand.prototype.getButtonY = function () { return 0; };
            MoveCommand.prototype.getHotkey = function () { return Engine.Key.KEY_M; };
            MoveCommand.prototype.getIconID = function () { return "icon-move-{race}"; };
            MoveCommand.prototype.getName = function () { return "Move"; };
            MoveCommand.prototype.getTooltip = function () { return "|M|ove"; };
            MoveCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to move to the target area while ignoring enemy"
                    + " units and attacks. Issuing a move order onto a target unit will cause your unit"
                    + " to follow thetarget using move orders.";
            };
            MoveCommand.prototype.executeEach = function (entity, target) {
                if (target instanceof Game.Tile) {
                    entity.orderQueue.push(new Game.Order_MoveToTile(entity, target));
                }
                else if (target instanceof Game.Entity) {
                    entity.orderQueue.push(new Game.Order_FollowEntity(entity, target));
                }
            };
            MoveCommand.instance = new MoveCommand();
            return MoveCommand;
        })(WorldCommand);
        Game.MoveCommand = MoveCommand;
        var PatrolCommand = (function (_super) {
            __extends(PatrolCommand, _super);
            function PatrolCommand() {
                _super.apply(this, arguments);
            }
            PatrolCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Patrol; };
            PatrolCommand.prototype.getButtonX = function () { return 0; };
            PatrolCommand.prototype.getButtonY = function () { return 1; };
            PatrolCommand.prototype.getHotkey = function () { return Engine.Key.KEY_P; };
            PatrolCommand.prototype.getIconID = function () { return "icon-patrol-{race}"; };
            PatrolCommand.prototype.getName = function () { return "Patrol"; };
            PatrolCommand.prototype.getTooltip = function () { return "|P|atrol"; };
            PatrolCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to continually move from their current position to the"
                    + " targeted area until given another command. Units on patrol will move to engage"
                    + " enemy units that come within range. Issuing a patrol order onto a target unit will"
                    + " cause your unit to imitate the targeted unit's behavior.";
            };
            PatrolCommand.prototype.executeEach = function (entity, target) {
                if (target instanceof Game.Tile) {
                    entity.orderQueue.push(new Game.Order_PatrolToTile(entity, target));
                }
                else if (target instanceof Game.Entity) {
                    entity.orderQueue.push(new Game.Order_PatrolToEntity(entity, target));
                }
            };
            PatrolCommand.instance = new PatrolCommand();
            return PatrolCommand;
        })(WorldCommand);
        Game.PatrolCommand = PatrolCommand;
        var SetRallyPointCommand = (function (_super) {
            __extends(SetRallyPointCommand, _super);
            function SetRallyPointCommand() {
                _super.apply(this, arguments);
            }
            SetRallyPointCommand.prototype.getCommandType = function () { return Game.WorldCommandType.SetRallyPoint; };
            SetRallyPointCommand.prototype.getButtonX = function () { return 2; };
            SetRallyPointCommand.prototype.getButtonY = function () { return 2; };
            SetRallyPointCommand.prototype.getHotkey = function () { return Engine.Key.KEY_Y; };
            SetRallyPointCommand.prototype.getIconID = function () { return "icon-rally-{race}"; };
            SetRallyPointCommand.prototype.getName = function () { return "Set Rally Point"; };
            SetRallyPointCommand.prototype.getTooltip = function () { return "Set Rall|y| Point"; };
            SetRallyPointCommand.prototype.getTooltipExtended = function () {
                return "Orders units that pop out of the building to immediately attack-move to"
                    + " the targeted area. You can rally point gold mines or trees to auto-harvest. You"
                    + " can rally point a unit to have new units follow it when they finish building.";
            };
            SetRallyPointCommand.prototype.executeEach = function (entity, target) {
                entity.rallyPoint = target;
            };
            SetRallyPointCommand.instance = new SetRallyPointCommand();
            return SetRallyPointCommand;
        })(WorldCommand);
        Game.SetRallyPointCommand = SetRallyPointCommand;
        var StopCommand = (function (_super) {
            __extends(StopCommand, _super);
            function StopCommand() {
                _super.apply(this, arguments);
            }
            StopCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Stop; };
            StopCommand.prototype.requiresTarget = function () { return false; };
            StopCommand.prototype.getButtonX = function () { return 1; };
            StopCommand.prototype.getButtonY = function () { return 0; };
            StopCommand.prototype.getHotkey = function () { return Engine.Key.KEY_S; };
            StopCommand.prototype.getIconID = function () { return "icon-armor0-{race}"; };
            StopCommand.prototype.getName = function () { return "Stop"; };
            StopCommand.prototype.getTooltip = function () { return "|S|top"; };
            StopCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to stop whatever order they were previously given."
                    + " Units that have been told to stop will attack enemy units and move to engage"
                    + " nearby enemies.";
            };
            StopCommand.prototype.executeEach = function (entity, target) {
                entity.orderQueue.length = 0;
            };
            StopCommand.instance = new StopCommand();
            return StopCommand;
        })(WorldCommand);
        Game.StopCommand = StopCommand;
        var TrainCommand = (function (_super) {
            __extends(TrainCommand, _super);
            function TrainCommand(entType) {
                _super.call(this);
                this._type = entType;
                this._data = Game.AllEntityData[entType];
            }
            TrainCommand.prototype.getCommandType = function () { return Game.WorldCommandType.Train; };
            TrainCommand.prototype.getFoodCost = function () { return this._data.foodCost; };
            TrainCommand.prototype.getGoldCost = function () { return this._data.goldCost; };
            TrainCommand.prototype.getLumberCost = function () { return this._data.lumberCost; };
            TrainCommand.prototype.getOilCost = function () { return this._data.oilCost; };
            TrainCommand.prototype.requiresTarget = function () { return false; };
            TrainCommand.prototype.getButtonX = function () { return this._data.buttonX; };
            TrainCommand.prototype.getButtonY = function () { return this._data.buttonY; };
            TrainCommand.prototype.getHotkey = function () { return this._data.hotkey; };
            TrainCommand.prototype.getIconID = function () { return this._data.iconId; };
            TrainCommand.prototype.getName = function () { return this._data.name; };
            TrainCommand.prototype.getTooltip = function () { return this._data.tooltip; };
            TrainCommand.prototype.getTooltipExtended = function () { return this._data.tooltipExtended; };
            TrainCommand.prototype.executeEach = function (entity, target) {
            };
            return TrainCommand;
        })(WorldCommand);
        Game.TrainCommand = TrainCommand;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var CommandBuffer = (function () {
            function CommandBuffer() {
                this._encoder = new Game.Encoder(true);
                this._commandsThisTurn = 0;
            }
            CommandBuffer._decoder = function () {
                return CommandBuffer.__decoder || (CommandBuffer.__decoder = new Game.Encoder(true));
            };
            CommandBuffer.executeBuffered = function (world, buffered) {
                if (!buffered)
                    return;
                var d = CommandBuffer._decoder();
                d.data = buffered;
                var commandCount = d.popInt();
                for (var c = 0; c < commandCount; ++c) {
                    var commandType = d.popInt();
                    var playerId = d.popInt();
                    var player = world.getPlayerById(playerId);
                    var ents = [];
                    var entityCount = d.popInt();
                    for (var i = 0; i < entityCount; ++i) {
                        var entId = d.popInt();
                        var ent = world.getEntityById(entId);
                        if (ent)
                            ents.push(ent);
                    }
                    var target = null;
                    var hasTarget = d.popBool();
                    if (hasTarget) {
                        var targetId = d.popInt();
                        target = world.getTargetById(targetId);
                    }
                    var plotEntType = Game.EntityType.None;
                    var plotEnt = null;
                    var hasPlacementEnt = d.popBool();
                    if (hasPlacementEnt) {
                        plotEntType = d.popInt();
                        plotEnt = new Game.Entity(Engine.MAX_INT, world, plotEntType, player);
                    }
                    var queue = d.popBool();
                    var command = null;
                    switch (commandType) {
                        case Game.WorldCommandType.Default:
                            command = Game.WorldCommand.instance;
                            break;
                        case Game.WorldCommandType.Move:
                            command = Game.MoveCommand.instance;
                            break;
                        case Game.WorldCommandType.Patrol:
                            command = Game.PatrolCommand.instance;
                            break;
                        case Game.WorldCommandType.Stop:
                            command = Game.StopCommand.instance;
                            break;
                        case Game.WorldCommandType.Build:
                            command = new Game.BuildCommand(plotEntType);
                            command.placementEntity = plotEnt;
                            break;
                        case Game.WorldCommandType.SetRallyPoint:
                            command = Game.SetRallyPointCommand.instance;
                            break;
                    }
                    if (command) {
                        command.tryExecute(player, ents, target, queue);
                    }
                }
                if (d.data !== "") {
                    console.log("WARNING: Command buffer executed, but still " + d.data.length + " chars left. Data:", d.data);
                }
                d.data = "";
            };
            CommandBuffer.prototype.bufferCommand = function (command, player, entities, target, queue) {
                var result = command.canExecute(player, entities, target);
                if (result.success) {
                    var commandType = command.getCommandType();
                    var e = this._encoder;
                    e.pushInt(commandType);
                    e.pushInt(player.getID());
                    var entities = entities;
                    e.pushInt(entities.length);
                    for (var i = 0, ii = entities.length; i < ii; ++i)
                        e.pushInt(entities[i].id);
                    var target = target;
                    e.pushBool(!!target);
                    if (target)
                        e.pushInt(target.id);
                    var placementEnt = command.placementEntity;
                    e.pushBool(!!placementEnt);
                    if (placementEnt)
                        e.pushInt(placementEnt.type);
                    e.pushBool(queue);
                    this._commandsThisTurn += 1;
                }
                return result;
            };
            CommandBuffer.prototype.incrementTurn = function () {
                var e = this._encoder;
                e.queue = false;
                e.pushInt(this._commandsThisTurn);
                e.queue = true;
                var ret = e.data;
                e.data = "";
                this._commandsThisTurn = 0;
                return ret;
            };
            return CommandBuffer;
        })();
        Game.CommandBuffer = CommandBuffer;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        function clamp(v, min, max) {
            return (v < min ? min : (v > max ? max : v));
        }
        var Encoder = (function () {
            function Encoder(isQueue) {
                this.data = "";
                this.queue = isQueue;
            }
            Encoder.prototype.pushBool = function (v) {
                this._push(!!v ? "1" : "0");
            };
            Encoder.prototype.popBool = function () {
                var r = (this.data[this.data.length - 1] === "1");
                this.data = this.data.slice(0, -1);
                return r;
            };
            Encoder.prototype.pushInt = function (v) {
                v = parseInt(clamp(v, -9007199254740992, 9007199254740992));
                if (isNaN(v))
                    v = 0;
                var s = v.toString(16);
                this._push(s + (v ? s.length.toString(16) : ""));
            };
            Encoder.prototype.popInt = function () {
                var r = 0;
                var data = this.data;
                var len = parseInt(data[data.length - 1], 16);
                if (len > 0)
                    r = parseInt(data.substr(data.length - 1 - len, len), 16);
                this.data = data.slice(0, -len - 1);
                return r;
            };
            Encoder.prototype.pushString = function (v) {
                // examples:
                // 256 characters, len = 0x100, lenlen = 3
                // 16 characters, len = 0x10, lenlen = 2
                // 15 characters, len = 0xf, lenlen = 1
                var s = "" + v;
                var len = s.length.toString(16);
                this._push(s + len + len.length.toString(16));
            };
            Encoder.prototype.popString = function () {
                var r = "";
                var data = this.data;
                var lenlen = parseInt(data[data.length - 1], 16);
                if (lenlen > 0) {
                    var len = parseInt(data.substr(data.length - 1 - lenlen, lenlen), 16);
                    if (len > 0) {
                        r = "" + data.substr(data.length - 1 - lenlen - len, len);
                        this.data = data.slice(0, -lenlen - len - 1);
                    }
                }
                return r;
            };
            Encoder.prototype.pushFloat = function (v) {
                v = parseFloat(clamp(v, -99999999999999, 99999999999999));
                if (isNaN(v))
                    v = 0;
                var s = v.toString();
                var d = s.indexOf(".");
                if (d === -1) {
                    d = s.length;
                }
                else {
                    s = s.slice(0, d) + s.slice(d + 1);
                    if (s[0] === "0") {
                        s = s.slice(1);
                        --d;
                    }
                }
                s = parseInt(s, 10).toString(16);
                d = Math.min(15, d);
                this._push(s + d.toString(16) + s.length.toString(16));
            };
            Encoder.prototype.popFloat = function () {
                var r = 0;
                var data = this.data;
                var len = parseInt(data[data.length - 1], 16);
                if (len > 0) {
                    var d = parseInt(data[data.length - 2], 16);
                    var s = parseInt(data.substr(data.length - 2 - len, len), 16).toString();
                    r = parseFloat(s.slice(0, d) + "." + s.slice(d));
                    this.data = data.slice(0, -len - 2);
                }
                return r;
            };
            Encoder.prototype.compress = function (onFinish, onProgress) {
                Engine.Compressor.compress(this.data, 1, onFinish, onProgress);
            };
            Encoder.prototype.decompress = function (byteArray, onFinish, onProgress) {
                var self = this;
                Engine.Compressor.decompress(byteArray, function (data) {
                    self.data = data;
                    onFinish();
                }, onProgress);
            };
            Encoder.prototype._push = function (v) {
                if (this.queue)
                    this.data = v + this.data;
                else
                    this.data += v;
            };
            return Encoder;
        })();
        Game.Encoder = Encoder;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Entity = (function () {
            function Entity(id, world, type, owner) {
                var self = this;
                this.id = id;
                this.world = world;
                this._terrain = world.getTerrain();
                this.type = type;
                this._owner = ko.observable(owner);
                this._data = Game.AllEntityData[type] || Game.AllEntityData[Game.EntityType.None];
                this._spawnState = ko.observable(Game.SpawnState.None);
                this._sortOrder = 0;
                this.orderQueue = [];
                this.rallyPoint = null;
                this._builders = ko.observableArray();
                this._cargo = ko.observableArray();
                this._miners = ko.observableArray();
                this._actionTicks = 0;
                this._actionParams = null;
                this._action = null;
                this._actionStates = [];
                this._initActionStates();
                this._direction = Game.Direction.Down;
                this._sequence = null;
                this._sequences = {};
                this._initSequences();
                this._container = ko.observable();
                this._drawRect = null;
                this._path = null;
                this._position = null;
                this._selectionRect = null;
                this._tile = ko.observable();
                this._health = ko.observable();
                this._mana = ko.observable();
                this._progress = ko.observable();
            }
            Entity.prototype.getOwner = function () { return this._owner(); };
            Entity.prototype.getSortOrder = function () { return this._sortOrder; };
            Entity.prototype.getPosition = function () { return this._position; };
            Entity.prototype.getSelectionRect = function () { return this._selectionRect; };
            Entity.prototype.getDrawRect = function () { return this._drawRect; };
            Entity.prototype.getQTRect = function () { return this._drawRect; };
            Entity.prototype.canMove = function () { return this._data.isUnit && this.isAlive(); };
            Entity.prototype.canBuild = function (type) { return this._data.builds.indexOf(type) !== -1 && this.isAlive(); };
            Entity.prototype.hasWeapon = function () { return this._data.hasWeapon && this.isAlive(); };
            Entity.prototype.getIconID = function () { return this._data.iconId; };
            Entity.prototype.isAlive = function () { return this._spawnState() === Game.SpawnState.Alive; };
            Entity.prototype.isBeingBuilt = function () { return this._spawnState() === Game.SpawnState.Constructing; };
            Entity.prototype.isDead = function () { return this._spawnState() === Game.SpawnState.Dead; };
            Entity.prototype.isSelectable = function () { return this._data.selectable && (this.isAlive() || this.isBeingBuilt()) && !this._container(); };
            Entity.prototype.isStructure = function () { return this._data.isStructure; };
            Entity.prototype.isUnit = function () { return this._data.isUnit; };
            Entity.prototype.getAbilities = function () { return this._data.abilities; };
            Entity.prototype.getBuilderCapacity = function () { return 1; };
            Entity.prototype.getCargoCapacity = function () { return this._data.cargoCapacity; };
            Entity.prototype.getContainer = function () { return this._container(); };
            Entity.prototype.getMana = function () { return this._mana(); };
            Entity.prototype.getMinerCapacity = function () { return 9999; };
            Entity.prototype.getMoveSpeed = function () { return this._data.moveSpeed; };
            Entity.prototype.getName = function () { return this._data.name; };
            Entity.prototype.getOccupyFlags = function () { return this._data.occupyFlags; };
            Entity.prototype.getPriority = function () { return this._data.priority; };
            Entity.prototype.getRootEntity = function () { var e = this, p = this; while (e = e._container()) {
                p = e;
            } return p; };
            Entity.prototype.getSight = function () { return this._data.sight; };
            Entity.prototype.getStructuresBuilt = function () { return this._data.builds; };
            Entity.prototype.getTile = function () { return this._tile() || null; };
            Entity.prototype.getTilesWide = function () { return this._data.tilesWide || 1; };
            Entity.prototype.getTilesHigh = function () { return this._data.tilesHigh || 1; };
            Entity.prototype.getTooltip = function () { return this._data.tooltip; };
            Entity.prototype.getTooltipExtended = function () { return this._data.tooltipExtended; };
            Entity.prototype.getUnitsTrained = function () { return this._data.unitsTrained; };
            Entity.prototype.trainsUnits = function () { return this._data.unitsTrained.length > 0; };
            Entity.prototype.getArmor = function () { return this._data.armorBase; };
            Entity.prototype.getDamageMin = function () { return this._data.weaponDamageBase; };
            Entity.prototype.getDamageMax = function () { return this._data.weaponDamageBase + this._data.weaponDamageRandom; };
            Entity.prototype.getHealth = function () { return this._health(); };
            Entity.prototype.getHealthMax = function () { return this._data.healthMax; };
            Entity.prototype.dispose = function () {
                this.world = null;
                this._owner = null;
                this._data = null;
                this._spawnState = null;
                this._position = null;
                this._selectionRect = null;
                this._drawRect = null;
                this.orderQueue = null;
                this._actionParams = null;
                this._action = null;
                this._actionStates = null;
                this._sequence = null;
                this._sequences = null;
                this._tile(null);
                this._container(null);
                this._path = null;
                this._builders = null;
                this._cargo = null;
                this._miners = null;
                this._mana = null;
                this._health = null;
                this._progress = null;
            };
            Entity.prototype.tryLoad = function (a, tile) {
                var data = this._data;
                if (!data) {
                    return false;
                }
                this._sortOrder = (((data.pointValue >> 4) & 0x7) << 20)
                    | (this.type << 19)
                    | (this.id << 0);
                {
                    var self = this;
                    var boxWidth = data.isUnit ? data.boxWidth : data.tilesWide * Game.TILE_SIZE;
                    var boxHeight = data.isUnit ? data.boxHeight : data.tilesHigh * Game.TILE_SIZE;
                    Game.koSubscribeChanged(this._spawnState, function (p, n) { Game.WorldEvent.Entity.spawnState.trigger(self, p, n); }, true);
                    this._direction = Game.Direction.Down;
                    Game.koSubscribeChanged(this._container, function (p, n) { Game.WorldEvent.Entity.container.trigger(self, p, n); }, true);
                    this._drawRect = new Engine.Rect();
                    this._position = new Engine.Vec2();
                    this._selectionRect = new Engine.Rect(0, 0, boxWidth, boxHeight);
                    Game.koSubscribeChanged(this._tile, function (p, n) { Game.WorldEvent.Entity.tile.trigger(self, p, n); }, true);
                    Game.koSubscribeChanged(this._health, function (p, n) { Game.WorldEvent.Entity.health.trigger(self, p, n); }, true);
                    Game.koSubscribeChanged(this._mana, function (p, n) { Game.WorldEvent.Entity.mana.trigger(self, p, n); }, true);
                }
                if (a instanceof Game.Encoder) {
                    return this._initFromLoader(a);
                }
                else if (a instanceof Entity) {
                    return this._initFromBuilder(a, tile);
                }
                else {
                    return false;
                }
            };
            Entity.prototype._initFromLoader = function (loader) {
                var tileID = loader.popInt();
                var health = loader.popInt();
                var mana = loader.popInt();
                var spawnState = loader.popInt();
                var goldContained = loader.popInt();
                var posX = loader.popInt();
                var posY = loader.popInt();
                this._spawnState(spawnState);
                this.trySetTile(this._terrain.getTileById(tileID), false);
                this._health(health);
                this._mana(mana);
                this._setPosition(posX, posY);
                this._setSequence("idle");
                return true;
            };
            Entity.prototype._initFromBuilder = function (builder, tile) {
                this._spawnState(Game.SpawnState.Constructing);
                var res = builder.trySetEntityContainer(this, Game.EntityContainType.Builder);
                if (!res)
                    return false;
                var res = this.trySetTile(tile, true);
                if (!res)
                    return false;
                this._health(1);
                this._mana(0);
                var endTick = this._data.buildTime;
                var healthPerTick = Math.ceil(this._data.healthMax / endTick);
                var seqInterval = endTick >> 2;
                this._setActionState({
                    type: Game.ActionType.BeingConstructed,
                    endTick: endTick,
                    buildTile: tile,
                    builder: builder,
                    healthPerTick: healthPerTick,
                    sequenceIndex: 0,
                    sequenceIncreaseTicks: [seqInterval, seqInterval * 2, seqInterval * 3]
                });
                return true;
            };
            Entity.prototype.draw = function (ctx) {
                this._sequence.drawAtCenter(ctx, this._position.x, this._position.y);
            };
            Entity.prototype.drawPlacement = function (ctx, tileX, tileY) {
                ctx.globalAlpha = 0.7;
                {
                    var idleSeq = this._sequences["idle"];
                    if (idleSeq)
                        idleSeq.drawAtCorner(ctx, tileX * Game.TILE_SIZE, tileY * Game.TILE_SIZE);
                    ctx.globalAlpha = 0.3;
                    var result = this.placementTest(tileX, tileY, Game.PlacementTestFlag.ValidTiles | Game.PlacementTestFlag.InvalidTiles, this._owner(), null);
                    ctx.fillStyle = "#0f0";
                    var tiles = result.validTiles;
                    for (var t = tiles.length - 1; t !== -1; --t) {
                        var p = tiles[t].topLeft;
                        ctx.fillRect(p.x, p.y, Game.TILE_SIZE, Game.TILE_SIZE);
                    }
                    ctx.fillStyle = "#f00";
                    tiles = result.invalidTiles;
                    for (var t = tiles.length - 1; t !== -1; --t) {
                        var p = tiles[t].topLeft;
                        ctx.fillRect(p.x, p.y, Game.TILE_SIZE, Game.TILE_SIZE);
                    }
                }
                ctx.globalAlpha = 1;
            };
            Entity.prototype.distanceToEntity = function (ent) {
                if (ent) {
                    var e0 = this.getRootEntity();
                    var t0 = e0.getTile();
                    if (t0) {
                        var e1 = ent.getRootEntity();
                        var t1 = e1.getTile();
                        if (t1) {
                            return Game.Pathfinder.diagDistance(t0.x, t0.y, e0.getTilesWide(), e0.getTilesHigh(), t1.x, t1.y, e1.getTilesWide(), e1.getTilesHigh());
                        }
                    }
                }
                return Engine.MAX_INT;
            };
            Entity.prototype.distanceToRegion = function (rgn) {
                if (rgn) {
                    var e0 = this.getRootEntity();
                    var t0 = e0.getTile();
                    if (t0) {
                        return Game.Pathfinder.diagDistance(t0.x, t0.y, e0.getTilesWide(), e0.getTilesHigh(), rgn.x, rgn.y, rgn.width, rgn.height);
                    }
                }
                return Engine.MAX_INT;
            };
            Entity.prototype.getPathHeuristic = function (type, weight) {
                var ent = this.getRootEntity();
                var onTile = ent.getTile();
                if (!onTile)
                    return null;
                var x = onTile.x - 1;
                var y = onTile.y - 1;
                var width = ent.getTilesWide() + 1;
                var height = ent.getTilesHigh() + 1;
                if (type === Game.PathType.ToTarget) {
                    return function (fromTile) {
                        return weight * Game.Pathfinder.diagDistance(fromTile.x, fromTile.y, 1, 1, x, y, width, height);
                    };
                }
                else if (type === Game.PathType.AvoidTarget) {
                    var LARGE_NUMBER = (Engine.MAX_INT >> 1);
                    return function (fromTile) {
                        return LARGE_NUMBER - weight * Game.Pathfinder.diagDistance(fromTile.x, fromTile.y, 1, 1, x, y, width, height);
                    };
                }
                return null;
            };
            Entity.prototype.placementTest = function (tileX, tileY, retFlags, ignorePlayerUnits, ignoreEntity) {
                var valid = true;
                var ret = { valid: true };
                if ((Game.PlacementTestFlag.Message & retFlags) !== 0)
                    ret.message = "Success";
                if ((Game.PlacementTestFlag.ValidTiles & retFlags) !== 0)
                    ret.validTiles = [];
                if ((Game.PlacementTestFlag.InvalidTiles & retFlags) !== 0)
                    ret.invalidTiles = [];
                if ((Game.PlacementTestFlag.BlockingEntities & retFlags) !== 0)
                    ret.blockingEntities = [];
                ret.ignorePlayerUnits = ignorePlayerUnits;
                ret.ignoreEnt = ignoreEntity;
                var tw = this.getTilesWide();
                var th = this.getTilesHigh();
                if (tw > 1 || th > 1) {
                    var tiles = this._terrain.getTilesWithinIndex(tileX, tileY, tw, th);
                    if (tiles.length !== tw * th) {
                        ret.valid = false;
                        if (ret.message)
                            ret.message = "Cannot place outside of world bounds.";
                    }
                    for (var i = tiles.length - 1; i !== -1; --i)
                        this._placementTestSingle(tiles[i], ret);
                }
                else {
                    var tile = this._terrain.getTileAtIndex(tileX, tileY, false);
                    if (!tile) {
                        ret.valid = false;
                        if (ret.message)
                            ret.message = "Cannot place outside of world bounds.";
                    }
                    else {
                        this._placementTestSingle(tile, ret);
                    }
                }
                return ret;
            };
            Entity.prototype._placementTestSingle = function (tile, ret) {
                if (tile.canOccupy(this, ret)) {
                    if (ret.validTiles)
                        ret.validTiles.push(tile);
                }
                else {
                    ret.valid = false;
                    if (ret.invalidTiles)
                        ret.invalidTiles.push(tile);
                }
            };
            Entity.prototype.removeEntity = function (entity) {
                var lists = [this._builders, this._cargo, this._miners];
                for (var i = lists.length - 1; i !== -1; --i) {
                    var list = lists[i]();
                    var index = list.indexOf(entity);
                    if (index !== -1) {
                        list.splice(index, 1);
                        lists[i](list);
                    }
                }
            };
            Entity.prototype.think = function () {
                var queue = this.orderQueue;
                if (queue.length !== 0) {
                    var result = queue[0].think();
                    if (result === Game.ThinkResult.Done || (result === Game.ThinkResult.DoneIfQueue && queue.length > 1)) {
                        queue.shift();
                        this.think();
                    }
                }
                else {
                    this.wait(60);
                }
            };
            Entity.prototype.tryMove = function (target, pathType, maxIterations) {
                if (!this.isUnit() || !this.isAlive())
                    return false;
                var curTile = this._tile();
                if (!curTile)
                    return false;
                var recalculated = false;
                var path = this._path;
                if (!path || path.target !== target) {
                    path = this._path = Game.Pathfinder.getPath(this, target, pathType, maxIterations);
                    recalculated = true;
                    if (!path)
                        return false;
                }
                var nextTile = path.peek();
                if (!nextTile || !this.trySetTile(nextTile, false)) {
                    if (recalculated)
                        return false;
                    path = this._path = Game.Pathfinder.getPath(this, target, pathType, maxIterations);
                    recalculated = true;
                    nextTile = path ? path.peek() : null;
                    if (!nextTile || !this.trySetTile(nextTile, false))
                        return false;
                }
                path.pop();
                var dx = nextTile.x - curTile.x;
                var dy = nextTile.y - curTile.y;
                var dir = (dx < 0 ? Game.Direction.Left : (dx > 0 ? Game.Direction.Right : 0))
                    | (dy < 0 ? Game.Direction.Up : (dy > 0 ? Game.Direction.Down : 0));
                var moveDelta = Math.max(this.getMoveSpeed() * Game.ENTITY_MOVE_SPEED_MULTIPLIER, 0.0001);
                this._setActionState({
                    type: Game.ActionType.Moving,
                    direction: dir,
                    moveStepX: dx * moveDelta,
                    moveStepY: dy * moveDelta,
                    moveEndX: nextTile.center.x,
                    moveEndY: nextTile.center.y,
                    endTick: Math.max(Math.floor(Game.TILE_SIZE / moveDelta), 1)
                });
                return true;
            };
            Entity.prototype._tryOccupy = function (entity, type) {
                if (!entity || entity === this)
                    return false;
                if (type === Game.EntityContainType.Builder) {
                    var ents = this._builders();
                    if (this.isBeingBuilt() && ents.length < this.getBuilderCapacity()) {
                        ents.push(entity);
                        this._builders.valueHasMutated();
                        return true;
                    }
                }
                else if (type === Game.EntityContainType.Cargo) {
                    var ents = this._cargo();
                    if (this.isAlive() && ents.length < this.getCargoCapacity()) {
                        ents.push(entity);
                        this._cargo.valueHasMutated();
                        return true;
                    }
                }
                else if (type === Game.EntityContainType.Miner) {
                    var ents = this._miners();
                    if (this.isAlive() && ents.length < this.getMinerCapacity()) {
                        ents.push(entity);
                        this._miners.valueHasMutated();
                        return true;
                    }
                }
                return false;
            };
            Entity.prototype.trySetEntityContainer = function (entity, type) {
                var success = entity && entity._tryOccupy(this, type);
                if (success) {
                    var oldTile = this._tile();
                    if (oldTile) {
                        oldTile.removeEntity(this);
                        this._tile(null);
                    }
                    var oldEntity = this._container();
                    if (oldEntity) {
                        oldEntity.removeEntity(this);
                    }
                    this._container(entity);
                }
                return success;
            };
            Entity.prototype.trySetTile = function (tile, updatePosition) {
                if (!tile)
                    return false;
                var tw = this.getTilesWide();
                var th = this.getTilesHigh();
                if (tw > 1 || th > 1) {
                    var result = this.placementTest(tile.x, tile.y, Game.PlacementTestFlag.ValidTiles, null, null);
                    if (!result.valid)
                        return false;
                    var oldTile = this._tile();
                    if (oldTile) {
                        var oldTiles = this._terrain.getTilesWithinIndex(oldTile.x, oldTile.y, tw, th);
                        for (var i = oldTiles.length - 1; i !== -1; --i)
                            oldTiles[i].removeEntity(this);
                    }
                    var oldEntity = this._container();
                    if (oldEntity) {
                        oldEntity.removeEntity(this);
                        this._container(null);
                    }
                    var newTiles = result.validTiles;
                    for (var i = newTiles.length - 1; i !== -1; --i)
                        newTiles[i]._tryOccupy(this);
                    if (updatePosition)
                        this._setPosition(tile.topLeft.x + tw * Game.TILE_SIZE / 2, tile.topLeft.y + th * Game.TILE_SIZE / 2);
                }
                else {
                    var result = this.placementTest(tile.x, tile.y, 0, null, null);
                    if (!result.valid)
                        return false;
                    var oldTile = this._tile();
                    if (oldTile) {
                        oldTile.removeEntity(this);
                    }
                    var oldEntity = this._container();
                    if (oldEntity) {
                        oldEntity.removeEntity(this);
                        this._container(null);
                    }
                    tile._tryOccupy(this);
                    if (updatePosition)
                        this._setPosition(tile.center.x, tile.center.y);
                }
                this._tile(tile);
                return true;
            };
            Entity.prototype.update = function () {
                var curAction = this._action;
                if (curAction) {
                    if (curAction.tick(++this._actionTicks, this._actionParams)) {
                        if (this._actionParams.onActionComplete) {
                            this._actionParams.onActionComplete();
                        }
                        curAction = this._action = null;
                    }
                }
                if (!curAction) {
                    this.think();
                }
                this._sequence.update();
            };
            Entity.prototype.wait = function (ticks) {
                this._setActionState({
                    type: Game.ActionType.Waiting,
                    endTick: ticks
                });
            };
            Entity.prototype._initActionStates = function () {
                var self = this;
                this._actionStates[Game.ActionType.Waiting] = {
                    sequenceName: "idle",
                    tick: function (actionTicks, actionParams) {
                        return actionTicks >= actionParams.endTick
                            || self.orderQueue[0] !== actionParams.order
                            || self.orderQueue.length !== actionParams.orderQueueLength;
                    }
                };
                this._actionStates[Game.ActionType.Moving] = {
                    sequenceName: "move",
                    tick: function (actionTicks, actionParams) {
                        if (actionTicks >= actionParams.endTick) {
                            self._setPosition(actionParams.moveEndX, actionParams.moveEndY);
                            return true;
                        }
                        else {
                            self._setPosition(self._position.x + actionParams.moveStepX, self._position.y + actionParams.moveStepY);
                            return false;
                        }
                    }
                };
                this._actionStates[Game.ActionType.Attacking] = {
                    sequenceName: "attack",
                    tick: function (actionTicks, actionParams) {
                        if (actionTicks === actionParams.endTick) {
                            console.log("END ATTACK");
                            return true;
                        }
                        else if (actionTicks === actionParams.swingTick) {
                            console.log("SWING");
                        }
                        return false;
                    }
                };
                this._actionStates[Game.ActionType.BeingConstructed] = {
                    sequenceName: "construction_site",
                    tick: function (actionTicks, actionParams) {
                        var index = actionParams.sequenceIndex;
                        var nextSeqTick = actionParams.sequenceIncreaseTicks[index];
                        if (actionTicks === nextSeqTick) {
                            if (index === 0 || index === 2)
                                self._sequence.incrementFrame();
                            else if (index === 1)
                                self._setSequence("construction");
                            ++actionParams.sequenceIndex;
                        }
                        var oldHealth = self._health();
                        var newHealth = Math.min(oldHealth + actionParams.healthPerTick, self.getHealthMax());
                        if (oldHealth !== newHealth) {
                            self._health(newHealth);
                        }
                        self._progress(actionTicks / actionParams.endTick);
                        if (actionTicks === actionParams.endTick) {
                            console.log("CONSTRUCTION COMPLETE!");
                            return true;
                        }
                        return false;
                    }
                };
            };
            Entity.prototype._initSequences = function () {
                var obj = this._data.sequences;
                var names = ["attack", "construction", "construction_site", "idle", "move"];
                var playerID = this._owner().getID();
                for (var i = 0, ii = names.length; i < ii; ++i) {
                    var name = names[i];
                    var seqData = obj[name];
                    if (seqData) {
                        this._sequences[name] = new Game.Sequence({
                            type: seqData.type || obj.type,
                            image: Game.ImageCache.getImage(seqData.imageID || obj.imageID, playerID),
                            frameWidth: seqData.frameWidth || obj.frameWidth,
                            frameHeight: seqData.frameHeight || obj.frameHeight,
                            frames: seqData.frames,
                            frameTick: seqData.frameTick
                        });
                    }
                }
            };
            Entity.prototype._setActionState = function (params) {
                console.log("set action state");
                var actionState = this._actionStates[params.type];
                if (actionState) {
                    params.order = this.orderQueue[0];
                    params.orderQueueLength = this.orderQueue.length;
                    this._actionTicks = 0;
                    this._actionParams = params;
                    this._action = actionState;
                    this._setSequence(actionState.sequenceName, params.direction);
                }
            };
            Entity.prototype._setSequence = function (sequenceName, direction) {
                var sequence = this._sequences[sequenceName];
                if (!sequence)
                    sequence = this._sequences["idle"];
                if (sequence !== this._sequence) {
                    sequence.reset();
                    this._sequence = sequence;
                    var dr = this._drawRect;
                    if (dr) {
                        dr.x = this._position.x - (sequence.frameWidth >> 1);
                        dr.y = this._position.y - (sequence.frameHeight >> 1);
                        dr.width = sequence.frameWidth;
                        dr.height = sequence.frameHeight;
                    }
                }
                if (direction)
                    this._direction = direction;
                sequence.setDirection(this._direction);
            };
            Entity.prototype._setPosition = function (x, y) {
                this._position.x = x;
                this._position.y = y;
                var sr = this._selectionRect;
                sr.x = x - (sr.width >> 1);
                sr.y = y - (sr.height >> 1);
                var dr = this._drawRect;
                dr.x = x - (dr.width >> 1);
                dr.y = y - (dr.height >> 1);
                this.world.getQuadtree().update(this);
            };
            return Entity;
        })();
        Game.Entity = Entity;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        Engine.Vendor.onVendorsLoaded(function () {
            ko.bindingHandlers["Healthbar"] = {
                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                },
                update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var entity = valueAccessor();
                    var mh = entity.getHealthMax();
                    if (mh === 0)
                        return;
                    var percent = Math.floor((entity.getHealth() / mh) * 100);
                    if (percent > 74) {
                        element.style.backgroundColor = "#347004";
                    }
                    else if (percent > 48) {
                        element.style.backgroundColor = "#fcfc00";
                    }
                    else {
                        element.style.backgroundColor = "#f00";
                    }
                    element.style.width = percent + "%";
                }
            };
        });
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var ImageCache;
        (function (ImageCache) {
            var _replaceColors = [
                [
                    [0x81, 0x82, 0x82],
                    [0x62, 0x63, 0x63],
                    [0x49, 0x4a, 0x4a],
                    [0x37, 0x38, 0x38]
                ],
                [
                    [0xa4, 0x00, 0x00],
                    [0x7c, 0x00, 0x00],
                    [0x5c, 0x04, 0x00],
                    [0x44, 0x04, 0x00]
                ],
                [
                    [0x0c, 0x48, 0xcc],
                    [0x04, 0x28, 0xa0],
                    [0x00, 0x14, 0x74],
                    [0x00, 0x04, 0x4c]
                ],
                [
                    [0x2c, 0xb4, 0x94],
                    [0x14, 0x84, 0x5c],
                    [0x04, 0x54, 0x2c],
                    [0x00, 0x28, 0x0c]
                ],
                [
                    [0x98, 0x48, 0xb0],
                    [0x74, 0x2c, 0x84],
                    [0x50, 0x18, 0x58],
                    [0x2c, 0x08, 0x2c]
                ],
                [
                    [0xf8, 0x8c, 0x14],
                    [0xc8, 0x60, 0x10],
                    [0x98, 0x3c, 0x10],
                    [0x6c, 0x20, 0x0c]
                ],
                [
                    [0x28, 0x28, 0x3c],
                    [0x1c, 0x1c, 0x2c],
                    [0x14, 0x14, 0x20],
                    [0x0c, 0x0c, 0x14]
                ],
                [
                    [0xe0, 0xe0, 0xe0],
                    [0x98, 0x98, 0xb4],
                    [0x54, 0x54, 0x80],
                    [0x24, 0x28, 0x4c]
                ],
                [
                    [0xfc, 0xfc, 0x48],
                    [0xe4, 0xcc, 0x28],
                    [0xcc, 0xa0, 0x10],
                    [0xb4, 0x74, 0x00]
                ]
            ];
            var _imageCanvi = {};
            function getImage(imageId, playerId) {
                if (playerId === undefined || playerId === 0) {
                    return Engine.AssetManager.getImage(imageId);
                }
                playerId = Engine.MathUtil.clamp(playerId, 0, _replaceColors.length - 1);
                var canvasId = imageId + "|" + playerId;
                var canvas = _imageCanvi[canvasId] || null;
                if (!canvas) {
                    var image = Engine.AssetManager.getImage(imageId);
                    if (image) {
                        canvas = _newCanvas(image, _replaceColors[playerId]);
                        _imageCanvi[canvasId] = canvas;
                    }
                }
                return canvas;
            }
            ImageCache.getImage = getImage;
            function _newCanvas(image, replaceColors) {
                var cvs = document.createElement("canvas");
                var width = cvs.width = image.width;
                var height = cvs.height = image.height;
                var ctx = cvs.getContext("2d");
                ctx.drawImage(image, 0, 0);
                var imgData = ctx.getImageData(0, 0, width, height);
                var data = imgData.data;
                var i = 0;
                for (var y = 0; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        var dest = null;
                        var long = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
                        switch (long) {
                            case 0x818282:
                                dest = replaceColors[0];
                                break;
                            case 0x626363:
                                dest = replaceColors[1];
                                break;
                            case 0x494a4a:
                                dest = replaceColors[2];
                                break;
                            case 0x373838:
                                dest = replaceColors[3];
                                break;
                        }
                        if (dest) {
                            data[i] = dest[0];
                            data[i + 1] = dest[1];
                            data[i + 2] = dest[2];
                        }
                        i += 4;
                    }
                }
                ctx.putImageData(imgData, 0, 0);
                return cvs;
            }
        })(ImageCache = Game.ImageCache || (Game.ImageCache = {}));
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var BUFFER_LENGTH = 10;
        var FRAME_WEIGHT = 0.1;
        var MultiplayerUpdateStrategy = (function () {
            function MultiplayerUpdateStrategy(liveGame, gameId, socket, turnDelay, initFrameInterval, initFrameCount, initPing) {
                this._liveGame = liveGame;
                this._world = liveGame.getWorld();
                this._player = liveGame.getPlayer();
                this._gameId = gameId;
                this._socket = socket;
                this._turnDelay = turnDelay;
                this._initFrameInterval = initFrameInterval;
                this._initFrameCount = initFrameCount;
                this._simulationTurn = 0 - turnDelay;
                this._commandMapBuffer = [];
                this._pingBuffer = [initPing];
                this._pingStart = 0;
                this._frameTimeBuffer = [];
                this._prevDrawTime = 16;
                this._lastPing = ko.observable();
            }
            MultiplayerUpdateStrategy.prototype.getLastPing = function () { return this._lastPing(); };
            MultiplayerUpdateStrategy.prototype.begin = function (callback) {
                var self = this;
                var socket = this._socket;
                socket.on("bc_turn_ready", function (turn, commandMap, frameInterval, frameCount) {
                    self._onTurnReady(turn, commandMap, frameInterval, frameCount);
                });
                var pingStart;
                socket.on("re_ping_server", function () {
                    var pingTime = performance.now() - pingStart;
                    self._lastPing(pingTime.toFixed(2));
                    self._bufferPush(self._pingBuffer, pingTime);
                    setTimeout(function () {
                        pingStart = performance.now();
                        socket.emit("ping_server");
                    }, 100);
                });
                pingStart = performance.now();
                socket.emit("ping_server");
                var worker = this._worker = new Worker("lockstep_worker.js");
                var workerFnMap = {
                    "log": function () { console.log.apply(console, arguments); },
                    "process_commands": this._processCommands,
                    "do_frame": this._doFrame,
                    "turn_done": this._turnDone
                };
                worker.addEventListener("message", function (e) {
                    var data = e.data;
                    if (!data)
                        return;
                    var fn = workerFnMap[data.cmd];
                    if (fn)
                        fn.apply(self, data.args);
                });
                var turnDelay = this._turnDelay;
                var frameInterval = this._initFrameInterval;
                var frameCount = this._initFrameCount;
                for (var i = 0; i < turnDelay; ++i)
                    this._startTurn(frameInterval, frameCount);
                this._rafId = requestAnimationFrame(function (timestamp) {
                    self._prevTimestamp = timestamp;
                    self._updateDrawLoop(timestamp);
                });
                callback();
            };
            MultiplayerUpdateStrategy.prototype.end = function () {
                this._worker.terminate();
                this._worker = null;
                cancelAnimationFrame(this._rafId);
            };
            MultiplayerUpdateStrategy.prototype._onTurnReady = function (turn, commandMap, frameInterval, frameCount) {
                this._commandMapBuffer[turn] = commandMap;
                this._startTurn(frameInterval, frameCount);
            };
            MultiplayerUpdateStrategy.prototype._startTurn = function (frameInterval, frameCount) {
                this._worker.postMessage({ cmd: "start_turn", args: [frameInterval, frameCount] });
            };
            MultiplayerUpdateStrategy.prototype._updateDrawLoop = function (timestamp) {
                var t0 = performance.now();
                {
                    this._liveGame.update(timestamp - this._prevTimestamp);
                    this._liveGame.draw();
                }
                var t1 = performance.now();
                this._prevDrawTime = t1 - t0;
                this._prevTimestamp = timestamp;
                this._rafId = requestAnimationFrame(this._updateDrawLoop.bind(this));
            };
            MultiplayerUpdateStrategy.prototype._processCommands = function () {
                var now = performance.now();
                var commandMap = this._commandMapBuffer[this._simulationTurn];
                if (commandMap) {
                    var world = this._world;
                    for (var i = 0; i < 8; ++i) {
                        Game.CommandBuffer.executeBuffered(world, commandMap[i]);
                    }
                    delete this._commandMapBuffer[this._simulationTurn];
                }
                this._doFrame(now);
            };
            MultiplayerUpdateStrategy.prototype._doFrame = function (now) {
                if (!now)
                    now = performance.now();
                this._liveGame.fixedUpdate();
                var fixedFrameTime = performance.now() - now;
                var totalFrameTime = fixedFrameTime + this._prevDrawTime;
                this._frameTimeBuffer.push(totalFrameTime);
                this._worker.postMessage({ cmd: "frame_done" });
            };
            MultiplayerUpdateStrategy.prototype._turnDone = function (turn) {
                var avgFrameTime = this._bufferAverage(this._frameTimeBuffer);
                this._frameTimeBuffer.length = 0;
                var bufferedCommands = this._player.extractCommands();
                var avgPing = this._bufferAverage(this._pingBuffer);
                this._simulationTurn += 1;
                this._socket.emit("turn_done", turn, bufferedCommands, avgFrameTime, avgPing);
            };
            MultiplayerUpdateStrategy.prototype._bufferPush = function (buffer, value) {
                if (buffer.length === BUFFER_LENGTH)
                    buffer.shift();
                buffer.push(value);
            };
            MultiplayerUpdateStrategy.prototype._bufferAverage = function (buffer) {
                var avg = 0;
                var len = buffer.length;
                for (var i = 0; i < len; ++i)
                    avg += buffer[i];
                return (len ? avg / len : avg);
            };
            return MultiplayerUpdateStrategy;
        })();
        Game.MultiplayerUpdateStrategy = MultiplayerUpdateStrategy;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Path = (function () {
            function Path(pathID, bestTile, bestHeuristic, target) {
                this.pathID = pathID;
                this.bestTile = bestTile;
                this.isComplete = (bestHeuristic === 0);
                this.target = target;
                this._pathArray = this._makePathArray(bestTile);
            }
            Path.prototype.dispose = function () {
                this.bestTile = null;
                this.target = null;
                this._pathArray = null;
            };
            Path.prototype.peek = function () {
                var pa = this._pathArray;
                return pa.length !== 0 ? pa[pa.length - 1] : null;
            };
            Path.prototype.pop = function () {
                var pa = this._pathArray;
                return pa.length !== 0 ? pa.pop() : null;
            };
            Path.prototype.length = function () {
                return this._pathArray.length;
            };
            Path.prototype._makePathArray = function (tile) {
                var ret = [];
                while (tile.__pathParent) {
                    ret.push(tile);
                    tile = tile.__pathParent;
                }
                return ret;
            };
            return Path;
        })();
        Game.Path = Path;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Pathfinder;
        (function (Pathfinder) {
            var _prevPathID = -1;
            var _openList = new Engine.BinaryHeap(function (tile) { return tile.__pathF; });
            function diagDistance(ax, ay, aWidth, aHeight, bx, by, bWidth, bHeight) {
                var Ax0 = ax, Ax1 = ax + aWidth;
                var Ay0 = ay, Ay1 = ay + aHeight;
                var Bx0 = bx, Bx1 = bx + bWidth;
                var By0 = by, By1 = by + bHeight;
                var dist = -1;
                if (Bx1 <= Ax0) {
                    dist = Ax0 - Bx1;
                    if (By1 <= Ay0)
                        dist = Math.max(dist, Ay0 - By1);
                    else if (By0 >= Ay1)
                        dist = Math.max(dist, By0 - Ay1);
                }
                else if (Bx0 >= Ax1) {
                    dist = Bx0 - Ax1;
                    if (By1 <= Ay0)
                        dist = Math.max(dist, Ay0 - By1);
                    else if (By0 >= Ay1)
                        dist = Math.max(dist, By0 - Ay1);
                }
                else {
                    if (By1 <= Ay0)
                        dist = Ay0 - By1;
                    else if (By0 >= Ay1)
                        dist = By0 - Ay1;
                }
                return dist + 1;
            }
            Pathfinder.diagDistance = diagDistance;
            function getPath(entity, target, type, maxIterations) {
                if (!entity) {
                    return null;
                }
                var startTile = entity.getTile();
                if (!startTile) {
                    return null;
                }
                var WEIGHT = 10;
                var WEIGHT_DIAG = 14;
                var heuristicFunc = target.getPathHeuristic(type, WEIGHT);
                if (!heuristicFunc) {
                    return null;
                }
                maxIterations = maxIterations || Game.PATHFINDER_MAX_ITERATIONS;
                var pathID = ++_prevPathID;
                var openList = _openList.reset();
                var bestTile = null;
                var bestHeuristic = Engine.MAX_INT;
                startTile.__resetPath(pathID);
                startTile.__pathOpen = true;
                startTile.__pathH = heuristicFunc(startTile);
                openList.push(startTile);
                for (var i = 0; i < maxIterations && openList.size() !== 0; ++i) {
                    var tile = openList.pop();
                    tile.__pathClosed = true;
                    if (tile.__pathH < bestHeuristic) {
                        bestTile = tile;
                        bestHeuristic = tile.__pathH;
                        if (bestHeuristic === 0)
                            break;
                    }
                    var tileX = tile.x;
                    var tileY = tile.y;
                    var tileG = tile.__pathG;
                    var nbrs = tile.neighbors;
                    for (var n = nbrs.length - 1; n !== -1; --n) {
                        var nbrTile = nbrs[n];
                        if (!nbrTile.canOccupy(entity))
                            continue;
                        if (nbrTile.__pathID !== pathID)
                            nbrTile.__resetPath(pathID);
                        if (nbrTile.__pathClosed)
                            continue;
                        var tempG = tileG + (tileX === nbrTile.x || tileY === nbrTile.y ? WEIGHT : WEIGHT_DIAG);
                        if (!nbrTile.__pathOpen || tempG < nbrTile.__pathG) {
                            var heur = heuristicFunc(nbrTile);
                            nbrTile.__pathG = tempG;
                            nbrTile.__pathH = heur;
                            nbrTile.__pathF = tempG + heur;
                            nbrTile.__pathParent = tile;
                            if (nbrTile.__pathOpen) {
                                openList.rescoreElement(nbrTile);
                            }
                            else {
                                openList.push(nbrTile);
                                nbrTile.__pathOpen = true;
                            }
                        }
                    }
                }
                return new Game.Path(pathID, bestTile, bestHeuristic, target);
            }
            Pathfinder.getPath = getPath;
        })(Pathfinder = Game.Pathfinder || (Game.Pathfinder = {}));
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Player = (function () {
            function Player(id, world) {
                this._id = id;
                this._world = world;
                this._commandBuffer = new Game.CommandBuffer();
                this._gold = 800;
                this._lumber = 400;
                this._oil = 200;
                this._foodUsed = 12;
                this._foodCreated = 20;
            }
            Player.prototype.getID = function () { return this._id; };
            Player.prototype.getRace = function () { return this._race; };
            Player.prototype.getTeam = function () { return this._team; };
            Player.prototype.getGold = function () { return this._gold; };
            Player.prototype.getLumber = function () { return this._lumber; };
            Player.prototype.getOil = function () { return this._oil; };
            Player.prototype.getFoodUsed = function () { return this._foodUsed; };
            Player.prototype.getFoodCreated = function () { return this._foodCreated; };
            Player.prototype.dispose = function () {
                this._world = null;
            };
            Player.prototype.init = function (loader) {
                if (loader) {
                    this._name = loader.popString();
                    this._gold = loader.popInt();
                    this._lumber = loader.popInt();
                    this._oil = loader.popInt();
                    this._type = loader.popInt();
                    this._fixedType = loader.popBool();
                    loader.popInt();
                    this._race = "human";
                    this._fixedRace = loader.popBool();
                    loader.popInt();
                }
                else {
                    this._name = "";
                    this._gold = 0;
                    this._lumber = 0;
                    this._oil = 0;
                    this._type = Game.PlayerType.None;
                    this._fixedType = false;
                    this._race = "human";
                    this._fixedRace = false;
                }
            };
            Player.prototype.bufferCommand = function (command, entities, target, queue) {
                return this._commandBuffer.bufferCommand(command, this, entities, target, queue);
            };
            Player.prototype.extractCommands = function () {
                return this._commandBuffer.incrementTurn();
            };
            return Player;
        })();
        Game.Player = Player;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        Engine.Vendor.onVendorsLoaded(function () {
            function formatIconID(str, liveGame) {
                var player = liveGame.getPlayer();
                if (player) {
                    var race = player.getRace();
                    str = str.replace(/\{race\}/g, race);
                }
                return str;
            }
            ko.bindingHandlers["Portrait"] = {
                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    element.width = 46;
                    element.height = 38;
                },
                update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var liveGame = bindingContext.$root;
                    var params = valueAccessor();
                    var ctx = element.getContext("2d");
                    if (!params) {
                        ctx.clearRect(0, 0, element.width, element.height);
                        return;
                    }
                    var iconID = formatIconID(params.iconID, liveGame);
                    var sprite = Game.AllSpriteData.getSprite(iconID, params.player ? params.player.getID() : undefined);
                    if (!sprite) {
                        ctx.clearRect(0, 0, element.width, element.height);
                        return;
                    }
                    var downButton = liveGame.getDownButton();
                    if (downButton && params.data === ko.dataFor(downButton)) {
                        element.style.margin = "1px 0 0 1px";
                    }
                    else {
                        element.style.margin = "0";
                    }
                    ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height, 0, 0, element.width, element.height);
                }
            };
        });
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Sequence = (function () {
            function Sequence(params) {
                this.frameWidth = params.frameWidth;
                this.frameHeight = params.frameHeight;
                this._type = params.type;
                this._image = params.image;
                this._frames = params.frames;
                this._frameTick = params.frameTick;
                this.reset();
                this.setDirection(params.direction);
            }
            Sequence.prototype.reset = function () {
                this._ticks = 0;
                this._frameIndex = 0;
                this._xPosition = 0;
                this._yPosition = 0;
                this._flipX = false;
                this._elapsed = false;
                this._frameAdjust();
            };
            Sequence.prototype.setImage = function (image) {
                this._image = image;
            };
            Sequence.prototype.update = function () {
                if (this._frameTick !== 0) {
                    ++this._ticks;
                    if (this._ticks >= this._frameTick) {
                        return this.incrementFrame();
                    }
                    else {
                        return Game.SequenceUpdateResult.Default;
                    }
                }
            };
            Sequence.prototype.incrementFrame = function () {
                this._ticks = 0;
                var ret = Game.SequenceUpdateResult.FrameIncremented;
                ++this._frameIndex;
                if (this._frameIndex >= this._frames.length) {
                    this._frameIndex = 0;
                    this._elapsed = true;
                    ret = Game.SequenceUpdateResult.SequenceElapsed;
                }
                this._frameAdjust();
                return ret;
            };
            Sequence.prototype.setDirection = function (direction) {
                if (this._type === Game.SequenceType.Directional) {
                    if (!direction)
                        direction = Game.Direction.Down;
                    this._xPosition = Sequence._dirToFrameX[direction] * this.frameWidth;
                    this._flipX = ((direction & Game.Direction.Left) !== 0);
                }
            };
            Sequence.prototype.drawAtCenter = function (ctx, x, y) {
                this._draw(ctx, x, y, true);
            };
            Sequence.prototype.drawAtCorner = function (ctx, x, y) {
                this._draw(ctx, x, y, false);
            };
            Sequence.prototype._frameAdjust = function () {
                if (this._type === Game.SequenceType.Directional) {
                    this._yPosition = this._frames[this._frameIndex] * this.frameHeight;
                }
                else if (this._type === Game.SequenceType.Vertical) {
                    this._yPosition = this._frames[this._frameIndex] * this.frameHeight;
                }
                else {
                    this._yPosition = Math.floor(this._frameIndex * 0.2);
                    this._xPosition = this._frameIndex % 5;
                }
            };
            Sequence.prototype._draw = function (ctx, x, y, atCenter) {
                if (!this._image)
                    return;
                x = (x + 0.5) << 0;
                y = (y + 0.5) << 0;
                if (this._flipX) {
                    ctx.scale(-1, 1);
                    x = -x;
                }
                var fw = this.frameWidth;
                var fh = this.frameHeight;
                if (atCenter) {
                    x -= (fw >> 1);
                    y -= (fh >> 1);
                }
                ctx.drawImage(this._image, this._xPosition, this._yPosition, fw, fh, x, y, fw, fh);
                if (this._flipX)
                    ctx.scale(-1, 1);
            };
            Sequence._dirToFrameX = [0, 2, 0, 1, 2, 0, 1, 0, 4, 3, 0, 0, 3, 0, 0, 0];
            return Sequence;
        })();
        Game.Sequence = Sequence;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Server;
        (function (Server) {
            Server.socket;
            var _userInfo;
            Engine.Vendor.onVendorsLoaded(function () {
                _userInfo = ko.observable(localStorage.getItem("userInfo"));
            });
            function getUserInfo() { return _userInfo(); }
            Server.getUserInfo = getUserInfo;
            function connect(nspName, popupOnFail, autoReconnect, callback) {
                var query = "";
                var auth = localStorage.getItem("auth");
                if (auth) {
                    query += "auth=" + auth;
                }
                Server.socket = io.connect("https://" + document.location.hostname + ":1337" + nspName, {
                    "transports": ["websocket"],
                    "try multiple transports": false,
                    "query": query,
                });
                console.log(nspName + " CONNECTING:", Server.socket, Server.socket.socket.connected, Server.socket.socket.connecting, Server.socket.socket.reconnecting);
                function success() {
                    Server.socket.removeAllListeners();
                    console.log(nspName + " CONNECTED:", Server.socket, Server.socket.socket.connected, Server.socket.socket.connecting, Server.socket.socket.reconnecting);
                    if (autoReconnect) {
                    }
                    if (popupOnFail) {
                        Game.Global.instance.popup(null);
                        Server.socket.on("error", function () {
                            Game.Global.instance.popup({
                                message: "Connection to server lost. Return to main menu?",
                                onOk: function () { Engine.setState("MainMenu"); }
                            });
                        });
                    }
                    Server.socket.on("_auth", function (d) { console.log("2"); _auth(d); });
                    Server.socket.on("_error", function (err) {
                        if (err) {
                            Game.Global.instance.popup({
                                message: err.message,
                                onOk: function () { }
                            });
                        }
                    });
                    callback(Server.socket);
                }
                function fail() {
                    Server.socket.removeAllListeners();
                    if (popupOnFail) {
                        Game.Global.instance.popup({
                            message: "Connection to server failed. Return to main menu?",
                            onOk: function () { Engine.setState("MainMenu"); }
                        });
                    }
                    callback(null);
                }
                Server.socket.removeAllListeners();
                Server.socket.on("error", fail);
                Server.socket.on("connect_failed", fail);
                Server.socket.on("connect", success);
                Server.socket.on("_auth", function (d) { console.log("1"); _auth(d); });
                if (Server.socket.socket.connected) {
                    console.log("socket already connected");
                    setTimeout(success, 4);
                }
                else {
                    if (!Server.socket.socket.connecting) {
                        Server.socket.socket.reconnect();
                    }
                }
            }
            Server.connect = connect;
            function disconnect(socket) {
                if (socket) {
                    socket.removeAllListeners();
                }
            }
            Server.disconnect = disconnect;
            function _auth(data) {
                console.log("auth:", data.auth);
                localStorage.setItem("auth", data.auth);
                localStorage.setItem("user", JSON.stringify(data.user));
                _userInfo(data.user);
            }
        })(Server = Game.Server || (Game.Server = {}));
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts" />
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var SingleplayerUpdateStrategy = (function () {
            function SingleplayerUpdateStrategy(liveGame, fixedInterval) {
                this._liveGame = liveGame;
                this._world = liveGame.getWorld();
                this._player = liveGame.getPlayer();
                this._fixedInterval = fixedInterval;
            }
            SingleplayerUpdateStrategy.prototype.begin = function (callback) {
                this._frameAccum = 0;
                var self = this;
                this._rafId = requestAnimationFrame(function (timestamp) {
                    self._prevTimestamp = timestamp;
                    self._loop(timestamp);
                    callback();
                });
            };
            SingleplayerUpdateStrategy.prototype.end = function () {
                cancelAnimationFrame(this._rafId);
            };
            SingleplayerUpdateStrategy.prototype._loop = function (timestamp) {
                var dt = timestamp - this._prevTimestamp;
                var bufferedCommands = this._player.extractCommands();
                Game.CommandBuffer.executeBuffered(this._world, bufferedCommands);
                this._frameAccum -= dt;
                if (this._frameAccum <= 0) {
                    do {
                        this._liveGame.fixedUpdate();
                        this._frameAccum += this._fixedInterval;
                    } while (this._frameAccum <= 0);
                }
                this._liveGame.update(dt);
                this._liveGame.draw();
                this._prevTimestamp = timestamp;
                this._rafId = requestAnimationFrame(this._loop.bind(this));
            };
            return SingleplayerUpdateStrategy;
        })();
        Game.SingleplayerUpdateStrategy = SingleplayerUpdateStrategy;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Team = (function () {
            function Team() {
                this._players = [];
            }
            Team.prototype.id = function () { return this._id; };
            Team.prototype.isNeutral = function () { return this._id === 0; };
            Team.prototype.name = function () { return this._name; };
            return Team;
        })();
        Game.Team = Team;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Terrain = (function () {
            function Terrain() {
            }
            Terrain.prototype.getMesh = function () { return this._mesh.getMesh(); };
            Terrain.prototype.getTerrainType = function () { return this._terrainType; };
            Terrain.prototype.getTileCount = function () { return this._tilesWide * this._tilesDeep; };
            Terrain.prototype.getTilesWide = function () { return this._tilesWide; };
            Terrain.prototype.getTilesDeep = function () { return this._tilesDeep; };
            Terrain.prototype.getUnitsWide = function () { return this._unitsWide; };
            Terrain.prototype.getUnitsDeep = function () { return this._unitsDeep; };
            Terrain.prototype.dispose = function () {
                var tiles = this._tiles;
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                    tiles[i].dispose();
                }
                this._tiles = null;
                this._mesh.dispose();
            };
            Terrain.prototype.init = function (loader) {
                var terrainType = this._terrainType = loader ? loader.popString() : "forest";
                var tilesWide = this._tilesWide = loader ? loader.popInt() : 32;
                var tilesDeep = this._tilesDeep = loader ? loader.popInt() : 32;
                this._unitsWide = tilesWide * Game.TILE_SIZE;
                this._unitsDeep = tilesDeep * Game.TILE_SIZE;
                this._mesh = new Game.TerrainMesh(tilesWide, tilesDeep);
                var id = -1;
                var tiles = this._tiles = [];
                for (var y = 0; y < tilesDeep; ++y) {
                    for (var x = 0; x < tilesWide; ++x) {
                        var tile = new Game.Tile(this, ++id, x, y);
                        tiles.push(tile);
                    }
                }
                var tileID = 0;
                for (var y = 0; y < tilesDeep; ++y) {
                    var northValid = (y !== 0);
                    var southValid = (y !== tilesDeep - 1);
                    for (var x = 0; x < tilesWide; ++x) {
                        var westValid = (x !== 0);
                        var eastValid = (x !== tilesWide - 1);
                        var nbrs = [];
                        if (westValid)
                            nbrs.push(tiles[(x - 1) + tilesWide * y]);
                        if (northValid && westValid)
                            nbrs.push(tiles[(x - 1) + tilesWide * (y - 1)]);
                        if (northValid)
                            nbrs.push(tiles[x + tilesWide * (y - 1)]);
                        if (northValid && eastValid)
                            nbrs.push(tiles[(x + 1) + tilesWide * (y - 1)]);
                        if (eastValid)
                            nbrs.push(tiles[(x + 1) + tilesWide * y]);
                        if (southValid && eastValid)
                            nbrs.push(tiles[(x + 1) + tilesWide * (y + 1)]);
                        if (southValid)
                            nbrs.push(tiles[x + tilesWide * (y + 1)]);
                        if (southValid && westValid)
                            nbrs.push(tiles[(x - 1) + tilesWide * (y + 1)]);
                        tiles[tileID].init(nbrs, loader);
                        ++tileID;
                    }
                }
            };
            Terrain.prototype.onTileTypeSet = function (tile) {
                this._mesh.updateTile(tile);
            };
            Terrain.prototype.getTileById = function (id) {
                return this._tiles[id] || null;
            };
            Terrain.prototype.getTileAtPoint = function (worldPoint, clamp) {
                return this.getTileAtIndex(Math.floor(worldPoint.x * Game.TILE_INV_SIZE), Math.floor(worldPoint.y * Game.TILE_INV_SIZE), clamp);
            };
            Terrain.prototype.getTileAtIndex = function (ix, iy, clamp) {
                var tw = this._tilesWide;
                var td = this._tilesDeep;
                if (clamp) {
                    ix = Engine.MathUtil.clamp(ix, 0, tw - 1);
                    iy = Engine.MathUtil.clamp(iy, 0, td - 1);
                }
                else if (ix < 0 || iy < 0 || ix >= tw || iy >= td) {
                    return null;
                }
                return this._tiles[ix + tw * iy];
            };
            Terrain.prototype.getTilesWithinIndex = function (tileX, tileY, tilesWide, tilesHigh) {
                var tw = this._tilesWide;
                var td = this._tilesDeep;
                var ret = [];
                var tiles = this._tiles;
                var sx = Engine.MathUtil.clamp(tileX, 0, tw - 1);
                var sy = Engine.MathUtil.clamp(tileY, 0, td - 1);
                var ex = Engine.MathUtil.clamp(tileX + tilesWide, 0, tw);
                var ey = Engine.MathUtil.clamp(tileY + tilesHigh, 0, td);
                for (var y = sy; y < ey; ++y) {
                    for (var x = sx; x < ex; ++x)
                        ret.push(tiles[x + tw * y]);
                }
                return ret;
            };
            Terrain.prototype.forEachTileOutside = function (region, maxDistance, callback) {
                var sx = region.x - 1;
                var sy = region.y - 1;
                var ex = region.x + region.width;
                var ey = region.y + region.height;
                var tiles = this._tiles;
                var width = this._tilesWide;
                var height = this._tilesDeep;
                for (var d = 0; d < maxDistance; ++d, --sx, --sy, ++ex, ++ey) {
                    if (sx >= 0) {
                        for (var y = sy + 1; y <= ey; ++y) {
                            if (y < 0)
                                continue;
                            if (y >= height)
                                break;
                            if (callback(tiles[sx + width * y]))
                                return true;
                        }
                    }
                    if (ey < height) {
                        for (var x = sx + 1; x <= ex; ++x) {
                            if (x < 0)
                                continue;
                            if (x >= width)
                                break;
                            if (callback(tiles[x + width * ey]))
                                return true;
                        }
                    }
                    if (ex < width) {
                        for (var y = ey - 1; y >= sy; --y) {
                            if (y < 0)
                                break;
                            if (y >= height)
                                continue;
                            if (callback(tiles[ex + width * y]))
                                return true;
                        }
                    }
                    if (sy >= 0) {
                        for (var x = ex - 1; x >= sx; --x) {
                            if (x < 0)
                                break;
                            if (x >= width)
                                continue;
                            if (callback(tiles[x + width * sy]))
                                return true;
                        }
                    }
                }
                return false;
            };
            Terrain.prototype.draw = function (ctx, bounds, drawGrid, drawTileNumbers, drawPath) {
                var left = Math.max(bounds.x, 0);
                var top = Math.max(bounds.y, 0);
                var right = Math.min(left + bounds.width, this._unitsWide);
                var bottom = Math.min(top + bounds.height, this._unitsDeep);
                var tilesWide = this._tilesWide;
                var tilesDeep = this._tilesDeep;
                var sx = Math.max(Math.floor(left * Game.TILE_INV_SIZE), 0);
                var sy = Math.max(Math.floor(top * Game.TILE_INV_SIZE), 0);
                var ex = Math.min(Math.floor(right * Game.TILE_INV_SIZE), tilesWide - 1);
                var ey = Math.min(Math.floor(bottom * Game.TILE_INV_SIZE), tilesDeep - 1);
                var tilesheet = Engine.AssetManager.getImage("terrain");
                var tiles = this._tiles;
                for (var y = sy; y <= ey; ++y) {
                    for (var x = sx; x <= ex; ++x) {
                        var tile = tiles[x + tilesWide * y];
                        var tilePos = tile.topLeft;
                        ctx.drawImage(tilesheet, tile._atlasX, tile._atlasY, Game.TILE_SIZE, Game.TILE_SIZE, tilePos.x, tilePos.y, Game.TILE_SIZE, Game.TILE_SIZE);
                    }
                }
                if (drawTileNumbers) {
                    ctx.save();
                    {
                        ctx.globalAlpha = 0.3;
                        ctx.fillStyle = "#fff";
                        ctx.font = "normal 10px arial";
                        for (var y = sy; y <= ey; ++y) {
                            for (var x = sx; x <= ex; ++x) {
                                var tile = tiles[x + tilesWide * y];
                                var tilePos = tile.topLeft;
                                ctx.fillText("" + x + "," + y, tilePos.x, tilePos.y + 10);
                            }
                        }
                    }
                    ctx.restore();
                }
                if (drawGrid) {
                    ctx.save();
                    {
                        ctx.globalAlpha = 0.3;
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#000";
                        ctx.beginPath();
                        var py = 0.5 + Game.TILE_SIZE + sy * Game.TILE_SIZE;
                        for (var y = sy; y < ey; ++y) {
                            ctx.moveTo(left, py);
                            ctx.lineTo(right, py);
                            py += Game.TILE_SIZE;
                        }
                        var px = 0.5 + Game.TILE_SIZE + sx * Game.TILE_SIZE;
                        for (var x = sx; x < ex; ++x) {
                            ctx.moveTo(px, top);
                            ctx.lineTo(px, bottom);
                            px += Game.TILE_SIZE;
                        }
                        ctx.stroke();
                    }
                    ctx.restore();
                }
            };
            return Terrain;
        })();
        Game.Terrain = Terrain;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var TerrainMesh = (function () {
            function TerrainMesh(tilesWide, tilesDeep) {
                var tilesWide = this._tilesWide = tilesWide;
                var tilesDeep = this._tilesDeep = tilesDeep;
                var vertexCount = tilesWide * tilesDeep * 6;
                var geom = this._geometry = new THREE.BufferGeometry();
                geom.attributes = {
                    index: {
                        itemSize: 1,
                        array: new Uint16Array(vertexCount),
                        numItems: vertexCount
                    },
                    uv: {
                        itemSize: 2,
                        array: new Float32Array(vertexCount * 2),
                        numItems: vertexCount * 2,
                        dynamic: true
                    },
                    position: {
                        itemSize: 3,
                        array: new Float32Array(vertexCount * 3),
                        numItems: vertexCount * 3,
                        dynamic: true
                    }
                };
                var chunkSize = Math.floor(65536 / 3) * 3;
                var a = -1, i = -1, p = -1;
                var ts = Game.TILE_SIZE;
                var indices = geom.attributes.index.array;
                var positions = geom.attributes.position.array;
                for (var z = 0; z < tilesDeep; ++z) {
                    for (var x = 0; x < tilesWide; ++x) {
                        {
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                        }
                        {
                            var x0 = ts * x;
                            var x1 = x0 + ts;
                            var z0 = ts * z;
                            var z1 = z0 + ts;
                            positions[++p] = x1;
                            positions[++p] = 0;
                            positions[++p] = z1;
                            positions[++p] = x1;
                            positions[++p] = 0;
                            positions[++p] = z0;
                            positions[++p] = x0;
                            positions[++p] = 0;
                            positions[++p] = z0;
                            positions[++p] = x0;
                            positions[++p] = 0;
                            positions[++p] = z0;
                            positions[++p] = x0;
                            positions[++p] = 0;
                            positions[++p] = z1;
                            positions[++p] = x1;
                            positions[++p] = 0;
                            positions[++p] = z1;
                        }
                    }
                }
                var offets = geom.offsets = [];
                var offsetCount = Math.ceil(indices.length / chunkSize);
                for (var a = 0; a < offsetCount; ++a) {
                    var off = a * chunkSize;
                    offets.push({
                        start: off,
                        index: off,
                        count: Math.min(indices.length - off, chunkSize)
                    });
                }
                geom.computeBoundingSphere();
                var shader = Engine.AssetManager.getShader("terrain");
                var texture = new THREE.Texture(Engine.AssetManager.getImage("forest"));
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.needsUpdate = true;
                var material = new THREE.ShaderMaterial({
                    uniforms: {
                        tAtlas: { type: "t", value: texture },
                        tileSize: { type: "f", value: Game.TILE_SIZE },
                        invTileSize: { type: "f", value: Game.TILE_INV_SIZE }
                    },
                    vertexShader: shader.vertexShader,
                    fragmentShader: shader.fragmentShader
                });
                this._mesh = new THREE.Mesh(geom, material);
            }
            TerrainMesh.prototype.getMesh = function () { return this._mesh; };
            TerrainMesh.prototype.dispose = function () {
                this._geometry.dispose();
                this._mesh = null;
            };
            TerrainMesh.prototype.updateTile = function (tile) {
                var geom = this._geometry;
                {
                    var atw = Game.TILE_ATLAS_TILES_WIDE;
                    var ath = Game.TILE_ATLAS_TILES_HIGH;
                    var aIndex = tile._atlasIndex;
                    var ax = (aIndex % atw);
                    var ay = Math.floor(aIndex / atw);
                    var uvX = 1 / atw;
                    var uvY = 1 / ath;
                    var u0 = ax * uvX;
                    var u1 = u0 + uvX;
                    var v0 = 1 - uvY * ay;
                    var v1 = v0 - uvY;
                    var uvs = geom.attributes["uv"].array;
                    var u = 12 * tile.id - 1;
                    uvs[++u] = u1;
                    uvs[++u] = v1;
                    uvs[++u] = u1;
                    uvs[++u] = v0;
                    uvs[++u] = u0;
                    uvs[++u] = v0;
                    uvs[++u] = u0;
                    uvs[++u] = v0;
                    uvs[++u] = u0;
                    uvs[++u] = v1;
                    uvs[++u] = u1;
                    uvs[++u] = v1;
                }
                {
                    var h1 = tile.getData().layer * Game.TERRAIN_HEIGHT_SCALE;
                    var h0 = h1 - Game.TERRAIN_HEIGHT_SCALE;
                    var positions = geom.attributes["position"].array;
                    var p = 18 * tile.id + 1;
                    var cf = tile.getCornerFlags();
                    positions[p] = ((cf & 0x8) !== 0) ? h1 : h0;
                    p += 3;
                    positions[p] = ((cf & 0x2) !== 0) ? h1 : h0;
                    p += 3;
                    positions[p] = ((cf & 0x1) !== 0) ? h1 : h0;
                    p += 3;
                    positions[p] = ((cf & 0x1) !== 0) ? h1 : h0;
                    p += 3;
                    positions[p] = ((cf & 0x4) !== 0) ? h1 : h0;
                    p += 3;
                    positions[p] = ((cf & 0x8) !== 0) ? h1 : h0;
                }
                geom.attributes["uv"].needsUpdate = true;
                geom.attributes["position"].needsUpdate = true;
            };
            return TerrainMesh;
        })();
        Game.TerrainMesh = TerrainMesh;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Tile = (function () {
            function Tile(terrain, id, x, y) {
                this._terrain = terrain;
                this.id = id;
                this.x = x;
                this.y = y;
                this.topLeft = new Engine.Vec2(x * Game.TILE_SIZE, y * Game.TILE_SIZE);
                this.center = this.topLeft.clone().add(Game.TILE_SIZE >> 1, Game.TILE_SIZE >> 1);
                this._occupiers = [];
                this._specialFlags = [];
            }
            Tile.prototype.__resetPath = function (pathID) {
                this.__pathID = pathID;
                this.__pathG = 0;
                this.__pathH = 0;
                this.__pathF = 0;
                this.__pathOpen = false;
                this.__pathClosed = false;
                this.__pathParent = null;
            };
            Tile.prototype.getType = function () { return this._type; };
            Tile.prototype.getData = function () { return this._data; };
            Tile.prototype.getCornerFlags = function () { return this._cornerFlags; };
            Tile.prototype.dispose = function () {
                this._terrain = null;
                this._occupiers = null;
                this._data = null;
            };
            Tile.prototype.init = function (neighbors, loader) {
                this.neighbors = neighbors;
                if (loader) {
                    this.setTileType(loader.popInt(), loader.popInt(), loader.popInt());
                }
                else {
                    this.setTileType(Game.TileType.LightGrass, 15);
                }
            };
            Tile.prototype.canOccupy = function (ent, ret) {
                if (!ent)
                    return false;
                var eflags = ent.getOccupyFlags();
                if ((eflags & this._occupyAllowed) !== eflags) {
                    if (ret && ret.message)
                        ret.message = "Cannot place there.";
                    return false;
                }
                var valid = true;
                var occupiers = this._occupiers;
                for (var i = occupiers.length - 1; i != -1; --i) {
                    var occ = occupiers[i];
                    if (ent === occ)
                        continue;
                    if (ret && ret.ignoreEnt && occ === ret.ignoreEnt)
                        continue;
                    if (ret && ret.ignorePlayerUnits && occ.getOwner() == ret.ignorePlayerUnits && occ.isUnit())
                        continue;
                    if ((eflags & occ.getOccupyFlags()) !== 0) {
                        valid = false;
                        if (ret) {
                            if (ret.message)
                                ret.message = "Invalid placement.";
                            if (ret.blockingEntities && ret.blockingEntities.indexOf(occ) === -1)
                                ret.blockingEntities.push(occ);
                        }
                    }
                }
                return valid;
            };
            Tile.prototype.getPathHeuristic = function (type, weight) {
                var x = this.x;
                var y = this.y;
                if (type === Game.PathType.ToTarget) {
                    return function (fromTile) {
                        return weight * Math.max(Math.abs(x - fromTile.x), Math.abs(y - fromTile.y));
                    };
                }
                else if (type === Game.PathType.AvoidTarget) {
                    var LARGE_NUMBER = (Engine.MAX_INT >> 1);
                    return function (tile) {
                        return LARGE_NUMBER - weight * Math.max(Math.abs(x - tile.x), Math.abs(y - tile.y));
                    };
                }
                return null;
            };
            Tile.prototype.removeEntity = function (entity) {
                var index = this._occupiers.indexOf(entity);
                if (index !== -1) {
                    this._occupiers.splice(index, 1);
                }
            };
            Tile.prototype.addSpecialFlag = function (flag) {
                var sf = this._specialFlags[flag];
                this._specialFlags[flag] = (sf ? sf + 1 : 1);
            };
            Tile.prototype.removeSpecialFlag = function (flag) {
                var sf = this._specialFlags[flag];
                this._specialFlags[flag] = (sf ? sf - 1 : 0);
            };
            Tile.prototype.hasSpecialFlag = function (flag) {
                return this._specialFlags[flag] ? true : false;
            };
            Tile.prototype.setTileType = function (tileType, cornerFlags, variant) {
                var terrainType = this._terrain.getTerrainType();
                var allData = Game.AllTileData[terrainType];
                if (!allData)
                    return;
                var data = allData[tileType];
                if (!data)
                    return;
                var variants = data.indices[cornerFlags];
                if (!variants || variants.length === 0)
                    return;
                if (variant !== undefined)
                    variant = Engine.MathUtil.clamp(variant, 0, variants.length - 1);
                else
                    variant = Engine.Random.integer(0, variants.length);
                this._data = data;
                this._atlasIndex = variants[variant];
                this._type = tileType;
                this._cornerFlags = cornerFlags;
                this._variant = variant;
                this._atlasX = (this._atlasIndex % Game.TILE_ATLAS_TILES_WIDE) * Game.TILE_ATLAS_TILE_SIZE;
                this._atlasY = Math.floor(this._atlasIndex / Game.TILE_ATLAS_TILES_WIDE) * Game.TILE_ATLAS_TILE_SIZE;
                var occupyAllowed = 0;
                switch (tileType) {
                    case Game.TileType.LightWater:
                    case Game.TileType.DarkWater:
                        occupyAllowed = Game.Occupy.Sea | Game.Occupy.Air;
                        break;
                    case Game.TileType.LightDirt:
                        occupyAllowed = Game.Occupy.Air | (cornerFlags === 15 ? Game.Occupy.LandUnit : 0);
                        break;
                    case Game.TileType.DarkDirt:
                        occupyAllowed = Game.Occupy.LandUnit | Game.Occupy.Air;
                        break;
                    case Game.TileType.LightGrass:
                        occupyAllowed = Game.Occupy.LandUnit | Game.Occupy.Air | (cornerFlags === 15 ? Game.Occupy.LandStructure : 0);
                        break;
                    case Game.TileType.DarkGrass:
                        occupyAllowed = Game.Occupy.LandUnit | Game.Occupy.Air | Game.Occupy.LandStructure;
                        break;
                    case Game.TileType.Tree:
                    case Game.TileType.Rock:
                    case Game.TileType.HumanWall:
                    case Game.TileType.OrcWall:
                    case Game.TileType.HumanWallDamaged:
                    case Game.TileType.OrcWallDamaged:
                        occupyAllowed = Game.Occupy.Air;
                        break;
                    case Game.TileType.WallDestroyed:
                        occupyAllowed = Game.Occupy.LandUnit | Game.Occupy.Air;
                        break;
                }
                this._occupyAllowed = occupyAllowed;
                this._terrain.onTileTypeSet(this);
            };
            Tile.prototype._tryOccupy = function (entity) {
                if (entity && !this.canOccupy(entity)) {
                    return false;
                }
                this.removeEntity(entity);
                this._occupiers.push(entity);
                return true;
            };
            return Tile;
        })();
        Game.Tile = Tile;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var TileRegion = (function () {
            function TileRegion(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            TileRegion.prototype.getPathHeuristic = function (type, weight) {
                var x = this.x;
                var y = this.y;
                var width = this.width;
                var height = this.height;
                if (type === Game.PathType.ToArea) {
                    return function (tile) {
                        return weight * Game.Pathfinder.diagDistance(tile.x, tile.y, 1, 1, x, y, width, height);
                    };
                }
                else if (type === Game.PathType.AvoidArea) {
                    var LARGE_NUMBER = (Engine.MAX_INT >> 1);
                    return function (tile) {
                        return LARGE_NUMBER - weight * Game.Pathfinder.diagDistance(tile.x, tile.y, 1, 1, x, y, width, height);
                    };
                }
                else if (type === Game.PathType.ClearArea) {
                    var x0 = x - 1;
                    var y0 = y - 1;
                    var x1 = x + width;
                    var y1 = y + height;
                    return function (tile) {
                        var x = tile.x, y = tile.y;
                        if (x <= x0 || x > x1 || y <= y0 || y > y1)
                            return 0;
                        else
                            return weight * Math.min(Math.min(x - x0, x1 - x), Math.min(y - y0, y1 - y));
                    };
                }
                return null;
            };
            return TileRegion;
        })();
        Game.TileRegion = TileRegion;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var World = (function () {
            function World() {
            }
            World.prototype.getTerrain = function () { return this._terrain; };
            World.prototype.getQuadtree = function () { return this._quadtree; };
            World.prototype.getEntities = function () { return this._entities; };
            World.prototype.dispose = function () {
                this._terrain.dispose();
                this._quadtree.dispose();
                var players = this._players;
                for (var i = 0, ii = players.length; i < ii; ++i) {
                    players[i].dispose();
                }
            };
            World.prototype.load = function (loader) {
                this.tick = 0;
                var terrain = this._terrain = new Game.Terrain();
                terrain.init(loader);
                this._quadtree = new Game.WorldQuadtree(new Engine.Rect(0, 0, terrain.getUnitsWide(), terrain.getUnitsDeep()), 4, 4);
                var teams = this._teams = [];
                var nTeams = loader ? loader.popInt() : 0;
                for (var i = 0; i < nTeams; ++i) {
                    if (loader) {
                        loader.popString();
                        loader.popBool();
                    }
                }
                var players = this._players = [];
                var nPlayers = loader ? loader.popInt() : 0;
                for (var p = 0; p < nPlayers; ++p) {
                    var player = new Game.Player(p, this);
                    player.init(loader);
                    players.push(player);
                }
                this._prevEntityID = terrain.getTileCount();
                this._entities = [];
                var entitiesById = this._entitiesById = [];
                this._entitiesByType = [];
                var ents = [];
                var rawEnts = [];
                var nEnts = loader ? loader.popInt() : 0;
                for (var i = 0; i < nEnts; ++i) {
                    var playerID = loader.popInt();
                    var entType = loader.popInt();
                    var entID = loader.popInt();
                    var entOwner = this.getPlayerById(playerID);
                    this._prevEntityID = Math.max(this._prevEntityID, entID);
                    ents.push(new Game.Entity(entID, this, entType, entOwner));
                }
                for (var i = 0; i < nEnts; ++i) {
                    var ent = ents[i];
                    var loaded = ent.tryLoad(loader);
                    if (loaded) {
                        this._addEntity(ent);
                    }
                    else {
                        console.log("WARNING: Could not load entity (phase 2 load):", ent);
                    }
                }
            };
            World.prototype.spawnEntity = function (tileX, tileY, type, builder) {
                var ent = new Game.Entity(this._prevEntityID + 1, this, type, builder.getOwner());
                var result = ent.placementTest(tileX, tileY, 0, null, builder);
                if (result.valid) {
                    var loaded = ent.tryLoad(builder, this._terrain.getTileAtIndex(tileX, tileY, false));
                    if (loaded) {
                        this._addEntity(ent);
                        ++this._prevEntityID;
                    }
                    else {
                        ent = null;
                        console.log("WARNING: Could not load entity (phase 2 load):", ent);
                    }
                }
                return ent;
            };
            World.prototype.getPlayerById = function (pid) {
                return this._players[pid] || null;
            };
            World.prototype.getEntityById = function (id) {
                return this._entitiesById[id] || null;
            };
            World.prototype.getTargetById = function (id) {
                return this._entitiesById[id] || this._terrain.getTileById(id);
            };
            World.prototype.getEntitiesAtPoint = function (p) {
                return this._quadtree.getItemsAtPoint(p);
            };
            World.prototype.getEntitiesInRect = function (rect) {
                return this._quadtree.getItemsInRect(rect);
            };
            World.prototype.step = function () {
                var ents = this._entities;
                for (var i = 0, ii = ents.length; i < ii; ++i)
                    ents[i].update();
                ++this.tick;
            };
            World.prototype._addEntity = function (ent) {
                this._entities.push(ent);
                this._entitiesById[ent.id] = ent;
                var typeList = this._entitiesByType[ent.type];
                if (!typeList) {
                    typeList = this._entitiesByType[ent.type] = [];
                }
                typeList.push(ent);
                this._quadtree.insert(ent);
            };
            World.prototype._removeEntity = function (a) {
                var ent, index;
                if (a instanceof Game.Entity) {
                    ent = a;
                    index = this._entities.indexOf(ent);
                }
                else {
                    index = a;
                    ent = this._entities[index];
                }
                if (index === -1) {
                    return;
                }
                this._entities.splice(index, 1);
                delete this._entitiesById[ent.id];
                var typeList = this._entitiesByType[ent.type];
                if (typeList) {
                    var index = typeList.indexOf(ent);
                    if (index !== -1) {
                        typeList.splice(index, 1);
                    }
                    if (typeList.length === 0) {
                        delete this._entitiesByType[ent.type];
                    }
                }
                this._quadtree.remove(ent);
            };
            return World;
        })();
        Game.World = World;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var WorldEvent;
        (function (WorldEvent) {
            var _names = [];
            var Event = (function () {
                function Event(name) {
                    this.name = name;
                    _names.push(name);
                }
                return Event;
            })();
            WorldEvent.Event = Event;
            var _handlers = {};
            function _add(evt, delegate) {
                var h = _handlers[evt.name];
                if (!h)
                    h = _handlers[evt.name] = [];
                h.push(delegate);
            }
            function _remove(evt, delegate) {
                var h = _handlers[evt.name];
                if (!h)
                    return;
                var index = h.indexOf(delegate);
                if (index !== -1)
                    h.splice(index, 1);
            }
            function _trigger(evt) {
                var argArray = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    argArray[_i - 1] = arguments[_i];
                }
                var h = _handlers[evt.name];
                if (!h)
                    return;
                for (var i = 0, ii = h.length; i < ii; ++i)
                    h[i].apply(null, argArray);
            }
            var EntityEvent = (function (_super) {
                __extends(EntityEvent, _super);
                function EntityEvent(name) {
                    _super.call(this, "entity_" + name);
                }
                EntityEvent.prototype.subscribe = function (f) { _add(this, f); };
                EntityEvent.prototype.unsubscribe = function (f) { _remove(this, f); };
                EntityEvent.prototype.trigger = function (ent, oldVal, newVal) { _trigger(this, ent, oldVal, newVal); };
                return EntityEvent;
            })(Event);
            WorldEvent.EntityEvent = EntityEvent;
            WorldEvent.Entity = {
                container: new EntityEvent("container"),
                health: new EntityEvent("health"),
                mana: new EntityEvent("mana"),
                spawnState: new EntityEvent("spawnState"),
                tile: new EntityEvent("tile")
            };
        })(WorldEvent = Game.WorldEvent || (Game.WorldEvent = {}));
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var QTBucket = (function () {
            function QTBucket(tree, parent, bounds, depth) {
                this._tree = tree;
                this._parent = parent;
                this._bounds = bounds;
                this._midX = bounds.x + bounds.width * 0.5;
                this._midY = bounds.y + bounds.height * 0.5;
                this._depth = depth;
                this._items = [];
                this._count = 0;
                this._topLeft = null;
                this._topRight = null;
                this._bottomLeft = null;
                this._bottomRight = null;
                this._isLeaf = true;
            }
            QTBucket.deepestBucket = function (root, item) {
                var rect = item.getQTRect();
                var b = root;
                while (b._isLeaf === false) {
                    var q = b.getRectQuadrants(rect);
                    if (q.length !== 1)
                        break;
                    b = q[0];
                }
                return b;
            };
            QTBucket.prototype.dispose = function () {
                this._tree = null;
                this._parent = null;
                this._bounds = null;
                this._items = null;
                if (!this._topLeft) {
                    this._topLeft.dispose();
                    this._topRight.dispose();
                    this._bottomLeft.dispose();
                    this._bottomRight.dispose();
                    this._topLeft = this._topRight = this._bottomLeft = this._bottomRight = null;
                }
            };
            QTBucket.prototype.draw = function (ctx) {
                if (this._isLeaf) {
                    var bounds = this._bounds;
                    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
                }
                else {
                    this._topLeft.draw(ctx);
                    this._topRight.draw(ctx);
                    this._bottomLeft.draw(ctx);
                    this._bottomRight.draw(ctx);
                }
            };
            QTBucket.prototype.insert = function (item) {
                this._items.push(item);
                var c = this;
                do {
                    ++c._count;
                    c = c._parent;
                } while (c !== null);
                var tree = this._tree;
                if (this._isLeaf && this._items.length > tree.bucketCapacity && this._depth < tree.maxDepth) {
                    if (!this._topLeft) {
                        var b = this._bounds;
                        var nextDepth = this._depth + 1;
                        var mx = this._midX;
                        var my = this._midY;
                        var hw = b.width * 0.5;
                        var hh = b.height * 0.5;
                        this._topLeft = new QTBucket(tree, this, new Engine.Rect(b.x, b.y, hw, hh), nextDepth);
                        this._topRight = new QTBucket(tree, this, new Engine.Rect(mx, b.y, hw, hh), nextDepth);
                        this._bottomLeft = new QTBucket(tree, this, new Engine.Rect(b.x, my, hw, hh), nextDepth);
                        this._bottomRight = new QTBucket(tree, this, new Engine.Rect(mx, my, hw, hh), nextDepth);
                    }
                    this._isLeaf = false;
                    var items = this._items;
                    for (var i = items.length - 1; i !== -1; --i) {
                        tree.update(items[i]);
                    }
                }
            };
            QTBucket.prototype.remove = function (item) {
                var index = this._items.indexOf(item);
                if (index === -1)
                    return;
                this._items.splice(index, 1);
                var c = this;
                var mergeNode = null;
                do {
                    if (--c._count === 0)
                        mergeNode = c;
                    c = c._parent;
                } while (c !== null);
                if (mergeNode)
                    mergeNode._isLeaf = true;
            };
            QTBucket.prototype.getItemsAtPoint = function (point, ret) {
                if (this._count === 0) {
                    return;
                }
                var px = point.x;
                var py = point.y;
                var items = this._items;
                for (var i = 0, ii = items.length; i < ii; ++i) {
                    var item = items[i];
                    if (item.getQTRect().containsPoint(px, py)) {
                        ret.push(item);
                    }
                }
                if (!this._isLeaf) {
                    this.getPointQuadrant(point).getItemsAtPoint(point, ret);
                }
            };
            QTBucket.prototype.getItemsInRect = function (rect, ret) {
                if (this._count === 0) {
                    return;
                }
                var items = this._items;
                for (var i = 0, ii = items.length; i < ii; ++i) {
                    var item = items[i];
                    if (item.getQTRect().intersectsRect(rect)) {
                        ret.push(item);
                    }
                }
                if (!this._isLeaf) {
                    var q = this.getRectQuadrants(rect);
                    for (var i = 0, ii = q.length; i < ii; ++i)
                        q[i].getItemsInRect(rect, ret);
                }
            };
            QTBucket.prototype.getPointQuadrant = function (point) {
                if (point.y < this._midY) {
                    return (point.x < this._midX ? this._topLeft : this._topRight);
                }
                else {
                    return (point.x < this._midX ? this._bottomLeft : this._bottomRight);
                }
            };
            QTBucket.prototype.getRectQuadrants = function (rect) {
                var midX = this._midX;
                var midY = this._midY;
                var rx = rect.x;
                var ry = rect.y;
                if (ry >= midY) {
                    if (rx >= midX)
                        return [this._bottomRight];
                    else if (rx + rect.width < midX)
                        return [this._bottomLeft];
                    else
                        return [this._bottomRight, this._bottomLeft];
                }
                else if (ry + rect.height < midY) {
                    if (rx >= midX)
                        return [this._topRight];
                    else if (rx + rect.width < midX)
                        return [this._topLeft];
                    else
                        return [this._topRight, this._topLeft];
                }
                else {
                    if (rx >= midX)
                        return [this._topRight, this._bottomRight];
                    else if (rx + rect.width < midX)
                        return [this._topLeft, this._bottomLeft];
                    else
                        return [this._topRight, this._bottomRight, this._topLeft, this._bottomLeft];
                }
            };
            return QTBucket;
        })();
        Game.QTBucket = QTBucket;
        var WorldQuadtree = (function () {
            function WorldQuadtree(bounds, bucketCap, maxDepth) {
                this.bucketCapacity = bucketCap;
                this.maxDepth = maxDepth;
                this._map = [];
                this._root = new QTBucket(this, null, bounds, 0);
            }
            WorldQuadtree.prototype.dispose = function () {
                this._root.dispose();
                this._map = null;
            };
            WorldQuadtree.prototype.draw = function (ctx) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#4f4";
                ctx.beginPath();
                this._root.draw(ctx);
                ctx.stroke();
            };
            WorldQuadtree.prototype.insert = function (item) {
                if (this._map[item.id] !== undefined) {
                    return;
                }
                var bucket = QTBucket.deepestBucket(this._root, item);
                this._map[item.id] = [item, bucket];
                bucket.insert(item);
            };
            WorldQuadtree.prototype.update = function (item) {
                var arr = this._map[item.id];
                if (arr === undefined) {
                    return;
                }
                var oldBucket = arr[1];
                var newBucket = QTBucket.deepestBucket(this._root, item);
                if (oldBucket !== newBucket) {
                    oldBucket.remove(item);
                    arr[1] = newBucket;
                    newBucket.insert(item);
                }
            };
            WorldQuadtree.prototype.remove = function (item) {
                var arr = this._map[item.id];
                if (arr === undefined) {
                    return;
                }
                var bucket = arr[1];
                bucket.remove(item);
                delete this._map[item.id];
            };
            WorldQuadtree.prototype.getItemsAtPoint = function (p) {
                var items = [];
                this._root.getItemsAtPoint(p, items);
                return items;
            };
            WorldQuadtree.prototype.getItemsInRect = function (rect) {
                var items = [];
                this._root.getItemsInRect(rect, items);
                return items;
            };
            return WorldQuadtree;
        })();
        Game.WorldQuadtree = WorldQuadtree;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Order_BuildAtTile = (function () {
            function Order_BuildAtTile(ent, target, structure) {
                this.tries = 0;
                this.clearing = false;
                this.region = null;
                this.entity = ent;
                this.target = target;
                this.structure = structure;
            }
            Order_BuildAtTile.prototype.think = function () {
                var ent = this.entity;
                var target = this.target;
                var structure = this.structure;
                var region = this.region;
                if (!region)
                    this.region = region = new Game.TileRegion(target.x, target.y, structure.getTilesWide(), structure.getTilesHigh());
                if (!this.clearing) {
                    var result = structure.placementTest(target.x, target.y, Game.PlacementTestFlag.BlockingEntities, null, ent);
                    _.each(result.blockingEntities, function (ent) {
                        if (ent.isUnit())
                            ent.orderQueue.push(new Game.Order_ClearRegion(ent, region));
                    });
                    this.clearing = true;
                }
                if (ent.distanceToRegion(region) === 0) {
                    var result = structure.placementTest(target.x, target.y, 0, null, ent);
                    if (result.valid) {
                        console.log("START UR BUILD!");
                        structure.world.spawnEntity(target.x, target.y, structure.type, ent);
                        return Game.ThinkResult.Done;
                    }
                    else {
                        if (++this.tries > 10) {
                            console.log("SOMETHING'S IN THE WAY");
                            return Game.ThinkResult.Done;
                        }
                        ent.wait(10);
                    }
                }
                else {
                    if (!ent.tryMove(region, Game.PathType.ToArea)) {
                        if (++this.tries > 2) {
                            console.log("I CAN'T MOVE THERE!");
                            return Game.ThinkResult.Done;
                        }
                        ent.wait(40);
                    }
                }
                return Game.ThinkResult.NotDone;
            };
            return Order_BuildAtTile;
        })();
        Game.Order_BuildAtTile = Order_BuildAtTile;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Order_ClearRegion = (function () {
            function Order_ClearRegion(ent, region) {
                this.tries = 0;
                this.entity = ent;
                this.region = region;
            }
            Order_ClearRegion.prototype.think = function () {
                var ent = this.entity;
                if (ent.distanceToRegion(this.region) > 0)
                    return Game.ThinkResult.Done;
                if (!ent.tryMove(this.region, Game.PathType.ClearArea)) {
                    ent.wait(40);
                }
                return Game.ThinkResult.NotDone;
            };
            return Order_ClearRegion;
        })();
        Game.Order_ClearRegion = Order_ClearRegion;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Order_FollowEntity = (function () {
            function Order_FollowEntity(ent, target) {
                this.tries = 0;
                this.entity = ent;
                this.target = target;
            }
            Order_FollowEntity.prototype.think = function () {
                var ent = this.entity;
                var target = this.target;
                if (target.isDead())
                    return Game.ThinkResult.Done;
                var curTile = ent.getTile();
                if (!curTile)
                    return Game.ThinkResult.NotDone;
                var dist = ent.distanceToEntity(target);
                if (dist <= 1) {
                    if (target.isUnit()) {
                        ent.wait(30);
                        return Game.ThinkResult.DoneIfQueue;
                    }
                    return Game.ThinkResult.Done;
                }
                if (!ent.tryMove(target, Game.PathType.ToTarget)) {
                    if (++this.tries > 10) {
                        console.log("\"I QUIT FOLLOWING " + target.getName() + "!\" says " + ent.getName());
                        return Game.ThinkResult.Done;
                    }
                    ent.wait(30);
                }
                return Game.ThinkResult.NotDone;
            };
            return Order_FollowEntity;
        })();
        Game.Order_FollowEntity = Order_FollowEntity;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Order_MoveToTile = (function () {
            function Order_MoveToTile(ent, target) {
                this.tries = 0;
                this.entity = ent;
                this.target = target;
            }
            Order_MoveToTile.prototype.think = function () {
                var ent = this.entity;
                var target = this.target;
                var curTile = ent.getTile();
                if (!curTile)
                    return Game.ThinkResult.NotDone;
                if (curTile === target)
                    return Game.ThinkResult.Done;
                if (!ent.tryMove(target, Game.PathType.ToTarget)) {
                    if (++this.tries > 1) {
                        console.log("\"I QUIT MOVING!\" says " + ent.getName());
                        return Game.ThinkResult.Done;
                    }
                    ent.wait(40);
                }
                return Game.ThinkResult.NotDone;
            };
            return Order_MoveToTile;
        })();
        Game.Order_MoveToTile = Order_MoveToTile;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Order_PatrolToEntity = (function () {
            function Order_PatrolToEntity(ent, target) {
                this.tries = 0;
                this.back = false;
                this.entity = ent;
                this.target = target;
                this.srcTile = null;
            }
            Order_PatrolToEntity.prototype.think = function () {
                var ent = this.entity;
                var target = this.target;
                if (target.isDead())
                    return Game.ThinkResult.Done;
                var curTile = ent.getTile();
                if (!curTile)
                    return Game.ThinkResult.NotDone;
                if (!this.srcTile)
                    this.srcTile = curTile;
                var moved = true;
                if (this.back) {
                    if (curTile === this.srcTile)
                        this.back = false;
                    else
                        moved = ent.tryMove(this.srcTile, Game.PathType.ToTarget);
                }
                else {
                    if (ent.distanceToEntity(target) <= 1)
                        this.back = true;
                    else
                        moved = ent.tryMove(target, Game.PathType.ToTarget);
                }
                if (!moved) {
                    if (++this.tries > 1) {
                        console.log("\"I QUIT PATROLLING!\" says " + ent.getName());
                        return Game.ThinkResult.Done;
                    }
                    ent.wait(40);
                }
                return Game.ThinkResult.NotDone;
            };
            return Order_PatrolToEntity;
        })();
        Game.Order_PatrolToEntity = Order_PatrolToEntity;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Order_PatrolToTile = (function () {
            function Order_PatrolToTile(ent, target) {
                this.tries = 0;
                this.back = false;
                this.entity = ent;
                this.target = target;
                this.srcTile = null;
            }
            Order_PatrolToTile.prototype.think = function () {
                var ent = this.entity;
                var target = this.target;
                var curTile = ent.getTile();
                if (!curTile)
                    return Game.ThinkResult.NotDone;
                if (!this.srcTile)
                    this.srcTile = curTile;
                var next = this.back ? this.srcTile : target;
                if (curTile === next) {
                    this.back = !this.back;
                }
                else {
                    if (!ent.tryMove(next, Game.PathType.ToTarget)) {
                        if (++this.tries > 1) {
                            console.log("\"I QUIT PATROLLING!\" says " + ent.getName());
                            return Game.ThinkResult.Done;
                        }
                        ent.wait(40);
                    }
                }
                return Game.ThinkResult.NotDone;
            };
            return Order_PatrolToTile;
        })();
        Game.Order_PatrolToTile = Order_PatrolToTile;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        Game.AllEntityData = [];
        var defaultEntity = Game.AllEntityData[Game.EntityType.None] = {
            abilities: [],
            armorBase: 0,
            buildTime: 60,
            buttonX: 0,
            buttonY: 0,
            foodCost: 0,
            foodCreated: 0,
            goldCost: 0,
            healthMax: 60,
            hotkey: Engine.Key.None,
            iconId: "icon-default",
            lumberCost: 0,
            name: "Default Entity",
            oilCost: 0,
            occupyFlags: Game.Occupy.None | 0,
            page: Game.CommandPage.Default,
            pointValue: 0,
            priority: 0,
            selectable: true,
            sequences: {
                type: Game.SequenceType.Vertical,
                imageID: "default",
                frameWidth: 72,
                frameHeight: 72,
                idle: {
                    frames: [0],
                    frameTick: 0
                }
            },
            sight: 0,
            tooltip: "Default tooltip",
            tooltipExtended: "Default tooltip extended",
            hasWeapon: false,
            weaponBehavior: Game.WeaponBehavior.Instant,
            weaponDamageBase: 0,
            weaponDamageRandom: 0,
            weaponRange: 1,
            weaponStrikeFrame: 0,
            isStructure: false,
            tilesHigh: 1,
            tilesWide: 1,
            unitsTrained: [],
            acquisitionRange: 0,
            boxWidth: 0,
            boxHeight: 0,
            builds: [],
            cargoCapacity: 0,
            coward: false,
            harvestResources: 0,
            isUnit: false,
            moveSpeed: 0
        };
        var defaultStructure = $.extend(true, {}, defaultEntity, {
            armorBase: 20,
            iconId: "icon-default-structure",
            name: "Default Structure",
            occupyFlags: Game.Occupy.LandStructure,
            page: Game.CommandPage.BasicBuild,
            sequences: {
                type: Game.SequenceType.Vertical,
                imageID: "gold_mine",
                frameWidth: 96,
                frameHeight: 96,
                idle: {
                    frames: [0],
                    frameTick: 0,
                }
            },
            sight: 3,
            isStructure: true,
            tilesHigh: 3,
            tilesWide: 3
        });
        var defaultUnit = $.extend(true, {}, defaultEntity, {
            foodCost: 1,
            iconId: "icon-default-unit",
            name: "Default Unit",
            occupyFlags: Game.Occupy.LandUnit,
            sequences: {
                type: Game.SequenceType.Directional,
                imageID: "footman",
                frameWidth: 72,
                frameHeight: 72,
                idle: {
                    frames: [0],
                    frameTick: 0,
                }
            },
            sight: 4,
            acquisitionRange: 0,
            boxWidth: 31,
            boxHeight: 31,
            builds: [],
            cargoCapacity: 0,
            coward: false,
            harvestResources: 0,
            isUnit: true,
            moveSpeed: 10
        });
        Game.AllEntityData[Game.EntityType.Footman] = $.extend(true, {}, defaultUnit, {
            armorBase: 2,
            buildTime: 60,
            buttonX: 0,
            buttonY: 0,
            goldCost: 600,
            healthMax: 60,
            hotkey: Engine.Key.KEY_F,
            iconId: "icon-footman",
            name: "Footman",
            pointValue: 50,
            sequences: {
                type: Game.SequenceType.Directional,
                imageID: "footman",
                frameWidth: 72,
                frameHeight: 72,
                idle: {
                    frames: [0],
                    frameTick: 0
                },
                attack: {
                    frames: [5, 5, 6, 6, 7, 7, 8, 8, 8, 0, 0, 0],
                    frameTick: 3
                },
                die: {
                    frames: [9, 10, 11],
                    frameTick: 5
                },
                move: {
                    frames: [0, 1, 2, 3, 4],
                    frameTick: 7
                }
            },
            tooltip: "Train |F|ootman",
            tooltipExtended: "I am a footman. Arrr!",
            hasWeapon: true,
            weaponBehavior: Game.WeaponBehavior.Instant,
            weaponDamageBase: 10,
            weaponDamageRandom: 6,
            weaponRange: 1,
            weaponStrikeFrame: 6,
            acquisitionRange: 4
        });
        Game.AllEntityData[Game.EntityType.Peasant] = $.extend(true, {}, defaultUnit, {
            armorBase: 0,
            buildTime: 45,
            buttonX: 0,
            buttonY: 0,
            goldCost: 400,
            healthMax: 30,
            hotkey: Engine.Key.KEY_P,
            iconId: "icon-peasant",
            name: "Peasant",
            pointValue: 30,
            sequences: {
                type: Game.SequenceType.Directional,
                imageID: "peasant",
                frameWidth: 72,
                frameHeight: 72,
                idle: {
                    frames: [0],
                    frameTick: 0,
                },
                attack: {
                    frames: [15, 16, 17, 18, 19],
                    frameTick: 5,
                },
                die: {
                    frames: [20, 21, 22],
                    frameTick: 5,
                },
                idle_gold: {
                    frames: [5],
                    frameTick: 5,
                },
                idle_lumber: {
                    frames: [10],
                    frameTick: 5,
                },
                move: {
                    frames: [0, 1, 2, 3, 4],
                    frameTick: 5,
                },
                move_gold: {
                    frames: [5, 6, 7, 8, 9],
                    frameTick: 5,
                },
                move_lumber: {
                    frames: [10, 11, 12, 13, 14],
                    frameTick: 5,
                }
            },
            sight: 4,
            tooltip: "Train |P|easant",
            tooltipExtended: "I am a peasant. Nurrrrr!",
            acquisitionRange: 4,
            builds: [
                Game.EntityType.TownHall,
                Game.EntityType.HumanBarracks,
                Game.EntityType.Farm
            ],
            coward: true,
            harvestResources: Game.ResourceType.Gold | Game.ResourceType.Lumber
        });
        Game.AllEntityData[Game.EntityType.Knight] = $.extend(true, {}, defaultUnit, {
            armorBase: 4,
            buildTime: 90,
            buttonX: 0,
            buttonY: 1,
            goldCost: 800,
            healthMax: 90,
            hotkey: Engine.Key.KEY_K,
            iconId: "icon-knight",
            lumberCost: 100,
            name: "Knight",
            pointValue: 100,
            sequences: {
                type: Game.SequenceType.Directional,
                imageID: "knight",
                frameWidth: 72,
                frameHeight: 72,
                idle: {
                    frames: [0],
                    frameTick: 0,
                },
                attack: {
                    frames: [5, 6, 7, 8],
                    frameTick: 5,
                },
                die: {
                    frames: [9, 10, 11, 12, 13],
                    frameTick: 5,
                },
                move: {
                    frames: [0, 1, 2, 1, 0, 3, 4, 3],
                    frameTick: 5,
                }
            },
            tooltip: "Train |K|night",
            tooltipExtended: "I am a knight. Wahaha!",
            acquisitionRange: 4,
            moveSpeed: 13
        });
        Game.AllEntityData[Game.EntityType.GoldMine] = $.extend(true, {}, defaultStructure, {
            healthMax: 0,
            iconId: "icon-goldmine",
            name: "Gold Mine",
            sequences: {
                type: Game.SequenceType.Vertical,
                imageID: "gold_mine",
                frameWidth: 96,
                frameHeight: 96,
                idle: {
                    frames: [0],
                    frameTick: 0
                },
                occupied: {
                    frames: [1],
                    frameTick: 0
                }
            },
            tooltipExtended: "I am a gold mine.",
            tilesHigh: 3,
            tilesWide: 3
        });
        Game.AllEntityData[Game.EntityType.TownHall] = $.extend(true, {}, defaultStructure, {
            buildTime: 255,
            buttonX: 2,
            buttonY: 0,
            foodCreated: 1,
            goldCost: 1200,
            healthMax: 1200,
            hotkey: Engine.Key.KEY_H,
            iconId: "icon-town-hall",
            lumberCost: 800,
            name: "Town Hall",
            pointValue: 200,
            sequences: {
                type: Game.SequenceType.Vertical,
                imageID: "town_hall",
                frameWidth: 128,
                frameHeight: 128,
                idle: {
                    frames: [0],
                    frameTick: 0,
                },
                construction: {
                    frames: [1],
                    frameTick: 0,
                },
                construction_site: {
                    imageID: "land_construction",
                    frames: [0, 1],
                    frameTick: 0,
                    frameWidth: 64,
                    frameHeight: 64
                }
            },
            tooltip: "Build Town |H|all",
            tooltipExtended: "I am a town hall.",
            tilesHigh: 4,
            tilesWide: 4
        });
        Game.AllEntityData[Game.EntityType.Farm] = $.extend(true, {}, defaultStructure, {
            buildTime: 100,
            buttonX: 0,
            buttonY: 0,
            foodCreated: 4,
            goldCost: 500,
            healthMax: 400,
            hotkey: Engine.Key.KEY_F,
            iconId: "icon-farm",
            lumberCost: 250,
            name: "Farm",
            pointValue: 100,
            sequences: {
                type: Game.SequenceType.Vertical,
                imageID: "farm",
                frameWidth: 64,
                frameHeight: 64,
                idle: {
                    frames: [0],
                    frameTick: 0,
                },
                construction: {
                    frames: [1],
                    frameTick: 0,
                },
                construction_site: {
                    imageID: "land_construction",
                    frames: [0, 1],
                    frameTick: 0,
                }
            },
            tooltip: "Build |F|arm",
            tooltipExtended: "I am a humunz farm.",
            tilesHigh: 2,
            tilesWide: 2
        });
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var AllSpriteData;
        (function (AllSpriteData) {
            var _sprites = {};
            function getSprite(spriteId, playerId) {
                var sprite = _sprites[spriteId];
                if (sprite) {
                    var image = Game.ImageCache.getImage(sprite.imageId, playerId);
                    if (image) {
                        sprite.image = image;
                        return sprite;
                    }
                }
                return null;
            }
            AllSpriteData.getSprite = getSprite;
            function _insert(imageId, spriteId, x, y, width, height) {
                _sprites[spriteId] = {
                    imageId: imageId,
                    image: null,
                    x: x,
                    y: y,
                    width: width,
                    height: height
                };
            }
            _insert("tiles", "icon-forest-" + Game.TileType.LightWater, 8 * 32, 20 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.DarkWater, 11 * 32, 20 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.LightDirt, 14 * 32, 20 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.DarkDirt, 9 * 32, 21 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.LightGrass, 4 * 32, 22 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.DarkGrass, 12 * 32, 22 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.Tree, 0, 7 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.Rock, 1 * 32, 11 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.HumanWall, 0, 1 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + Game.TileType.OrcWall, 2 * 32, 2 * 32, 32, 32);
            _insert("icons", "icon-peasant", 0, 0, 46, 38);
            _insert("icons", "icon-peasant", 0, 0, 46, 38);
            _insert("icons", "icon-peon", 46, 0, 46, 38);
            _insert("icons", "icon-footman", 92, 0, 46, 38);
            _insert("icons", "icon-grunt", 138, 0, 46, 38);
            _insert("icons", "icon-archer", 184, 0, 46, 38);
            _insert("icons", "icon-axethrower", 0, 38, 46, 38);
            _insert("icons", "icon-ranger", 46, 38, 46, 38);
            _insert("icons", "icon-berserker", 92, 38, 46, 38);
            _insert("icons", "icon-knight", 138, 38, 46, 38);
            _insert("icons", "icon-ogre", 184, 38, 46, 38);
            _insert("icons", "icon-paladin", 0, 76, 46, 38);
            _insert("icons", "icon-ogre-mage", 46, 76, 46, 38);
            _insert("icons", "icon-dwarves", 92, 76, 46, 38);
            _insert("icons", "icon-sappers", 138, 76, 46, 38);
            _insert("icons", "icon-mage", 184, 76, 46, 38);
            _insert("icons", "icon-death-knight", 0, 114, 46, 38);
            _insert("icons", "icon-ballista", 46, 114, 46, 38);
            _insert("icons", "icon-catapult", 92, 114, 46, 38);
            _insert("icons", "icon-human-tanker", 138, 114, 46, 38);
            _insert("icons", "icon-orc-tanker", 184, 114, 46, 38);
            _insert("icons", "icon-human-transport", 0, 152, 46, 38);
            _insert("icons", "icon-orc-transport", 46, 152, 46, 38);
            _insert("icons", "icon-elven-destroyer", 92, 152, 46, 38);
            _insert("icons", "icon-troll-destroyer", 138, 152, 46, 38);
            _insert("icons", "icon-battleship", 184, 152, 46, 38);
            _insert("icons", "icon-juggernaught", 0, 190, 46, 38);
            _insert("icons", "icon-gnomish-submarine", 46, 190, 46, 38);
            _insert("icons", "icon-giant-turtle", 92, 190, 46, 38);
            _insert("icons", "icon-flying-machine", 138, 190, 46, 38);
            _insert("icons", "icon-zeppelin", 184, 190, 46, 38);
            _insert("icons", "icon-gryphon", 0, 228, 46, 38);
            _insert("icons", "icon-dragon", 46, 228, 46, 38);
            _insert("icons", "icon-daemon", 92, 266, 46, 38);
            _insert("icons", "icon-farm", 138, 266, 46, 38);
            _insert("icons", "icon-pig-farm", 184, 266, 46, 38);
            _insert("icons", "icon-town-hall", 0, 304, 46, 38);
            _insert("icons", "icon-great-hall", 46, 304, 46, 38);
            _insert("icons", "icon-human-barracks", 92, 304, 46, 38);
            _insert("icons", "icon-orc-barracks", 138, 304, 46, 38);
            _insert("icons", "icon-elven-lumber-mill", 184, 304, 46, 38);
            _insert("icons", "icon-troll-lumber-mill", 0, 342, 46, 38);
            _insert("icons", "icon-human-blacksmith", 46, 342, 46, 38);
            _insert("icons", "icon-orc-blacksmith", 92, 342, 46, 38);
            _insert("icons", "icon-human-shipyard", 138, 342, 46, 38);
            _insert("icons", "icon-orc-shipyard", 184, 342, 46, 38);
            _insert("icons", "icon-human-refinery", 0, 380, 46, 38);
            _insert("icons", "icon-orc-refinery", 46, 380, 46, 38);
            _insert("icons", "icon-human-foundry", 92, 380, 46, 38);
            _insert("icons", "icon-orc-foundry", 138, 380, 46, 38);
            _insert("icons", "icon-human-oil-platform", 184, 380, 46, 38);
            _insert("icons", "icon-orc-oil-platform", 0, 418, 46, 38);
            _insert("icons", "icon-stables", 46, 418, 46, 38);
            _insert("icons", "icon-ogre-mound", 92, 418, 46, 38);
            _insert("icons", "icon-gnomish-inventor", 138, 418, 46, 38);
            _insert("icons", "icon-goblin-alchemist", 184, 418, 46, 38);
            _insert("icons", "icon-human-scout-tower", 0, 456, 46, 38);
            _insert("icons", "icon-orc-scout-tower", 46, 456, 46, 38);
            _insert("icons", "icon-church", 92, 456, 46, 38);
            _insert("icons", "icon-altar-of-storms", 138, 456, 46, 38);
            _insert("icons", "icon-mage-tower", 184, 456, 46, 38);
            _insert("icons", "icon-temple-of-the-damned", 0, 494, 46, 38);
            _insert("icons", "icon-keep", 46, 494, 46, 38);
            _insert("icons", "icon-stronghold", 92, 494, 46, 38);
            _insert("icons", "icon-castle", 138, 494, 46, 38);
            _insert("icons", "icon-fortress", 184, 494, 46, 38);
            _insert("icons", "icon-gryphon-aviary", 92, 532, 46, 38);
            _insert("icons", "icon-dragon-roost", 138, 532, 46, 38);
            _insert("icons", "icon-goldmine", 184, 532, 46, 38);
            _insert("icons", "icon-human-guard-tower", 0, 570, 46, 38);
            _insert("icons", "icon-human-cannon-tower", 46, 570, 46, 38);
            _insert("icons", "icon-orc-guard-tower", 92, 570, 46, 38);
            _insert("icons", "icon-orc-cannon-tower", 138, 570, 46, 38);
            _insert("icons", "icon-oil-patch", 184, 570, 46, 38);
            _insert("icons", "icon-dark-portal", 0, 608, 46, 38);
            _insert("icons", "icon-circle-of-power", 46, 608, 46, 38);
            _insert("icons", "icon-runestone", 92, 608, 46, 38);
            _insert("icons", "icon-move-human", 138, 608, 46, 38);
            _insert("icons", "icon-move-orc", 184, 608, 46, 38);
            _insert("icons", "icon-repair", 0, 646, 46, 38);
            _insert("icons", "icon-harvest", 46, 646, 46, 38);
            _insert("icons", "icon-basic-build", 92, 646, 46, 38);
            _insert("icons", "icon-advanced-build", 138, 646, 46, 38);
            _insert("icons", "icon-peasant-return", 184, 646, 46, 38);
            _insert("icons", "icon-peon-return", 0, 684, 46, 38);
            _insert("icons", "icon-cancel", 46, 684, 46, 38);
            _insert("icons", "icon-human-wall", 92, 684, 46, 38);
            _insert("icons", "icon-orc-wall", 138, 684, 46, 38);
            _insert("icons", "icon-spell-slow", 184, 684, 46, 38);
            _insert("icons", "icon-spell-invisibility", 0, 722, 46, 38);
            _insert("icons", "icon-spell-haste", 46, 722, 46, 38);
            _insert("icons", "icon-spell-runes", 92, 722, 46, 38);
            _insert("icons", "icon-spell-unholy-armor", 722, 684, 46, 38);
            _insert("icons", "icon-mage-attack", 184, 722, 46, 38);
            _insert("icons", "icon-spell-flame-shield", 0, 760, 46, 38);
            _insert("icons", "icon-spell-fireball", 46, 760, 46, 38);
            _insert("icons", "icon-death-knight-attack", 92, 760, 46, 38);
            _insert("icons", "icon-spell-death-and-decay", 138, 760, 46, 38);
            _insert("icons", "icon-spell-whirlwind", 184, 760, 46, 38);
            _insert("icons", "icon-spell-blizzard", 0, 798, 46, 38);
            _insert("icons", "icon-spell-holy-vision", 46, 798, 46, 38);
            _insert("icons", "icon-spell-healing", 92, 798, 46, 38);
            _insert("icons", "icon-spell-exorcism", 0, 836, 46, 38);
            _insert("icons", "icon-spell-eye-of-kilrogg", 46, 836, 46, 38);
            _insert("icons", "icon-spell-bloodlust", 92, 836, 46, 38);
            _insert("icons", "icon-skeleton", 184, 836, 46, 38);
            _insert("icons", "icon-spell-polymorph", 0, 874, 46, 38);
            _insert("icons", "icon-melee0-human", 46, 874, 46, 38);
            _insert("icons", "icon-melee1-human", 92, 874, 46, 38);
            _insert("icons", "icon-melee2-human", 138, 874, 46, 38);
            _insert("icons", "icon-melee0-orc", 184, 874, 46, 38);
            _insert("icons", "icon-melee1-orc", 0, 912, 46, 38);
            _insert("icons", "icon-melee2-orc", 46, 912, 46, 38);
            _insert("icons", "icon-rally-human", 92, 912, 46, 38);
            _insert("icons", "icon-rally-orc", 138, 912, 46, 38);
            _insert("icons", "icon-arrow1", 184, 912, 46, 38);
            _insert("icons", "icon-arrow2", 0, 950, 46, 38);
            _insert("icons", "icon-arrow3", 46, 950, 46, 38);
            _insert("icons", "icon-troll-axe1", 92, 950, 46, 38);
            _insert("icons", "icon-troll-axe2", 138, 950, 46, 38);
            _insert("icons", "icon-troll-axe3", 184, 950, 46, 38);
            _insert("icons", "icon-upgrade-longbow", 92, 988, 46, 38);
            _insert("icons", "icon-upgrade-ranger-scouting", 138, 988, 46, 38);
            _insert("icons", "icon-upgrade-marksmanship", 184, 988, 46, 38);
            _insert("icons", "icon-upgrade-lighter-axes", 0, 1026, 46, 38);
            _insert("icons", "icon-upgrade-berserker-scouting", 46, 1026, 46, 38);
            _insert("icons", "icon-upgrade-regeneration", 92, 1026, 46, 38);
            _insert("icons", "icon-catapult-ball1", 138, 1026, 46, 38);
            _insert("icons", "icon-catapult-ball2", 184, 1026, 46, 38);
            _insert("icons", "icon-ballista-bolt1", 0, 1064, 46, 38);
            _insert("icons", "icon-ballista-bolt2", 46, 1064, 46, 38);
            _insert("icons", "icon-dwarve-demolish", 92, 1064, 46, 38);
            _insert("icons", "icon-sapper-demolish", 138, 1064, 46, 38);
            _insert("icons", "icon-human-naval-weapons1", 184, 1064, 46, 38);
            _insert("icons", "icon-human-naval-weapons2", 0, 1102, 46, 38);
            _insert("icons", "icon-human-naval-weapons3", 46, 1102, 46, 38);
            _insert("icons", "icon-orc-naval-weapons1", 92, 1102, 46, 38);
            _insert("icons", "icon-orc-naval-weapons2", 138, 1102, 46, 38);
            _insert("icons", "icon-orc-naval-weapons3", 184, 1102, 46, 38);
            _insert("icons", "icon-orc-naval-stop", 0, 1140, 46, 38);
            _insert("icons", "icon-orc-naval-armor1", 46, 1140, 46, 38);
            _insert("icons", "icon-orc-naval-armor2", 92, 1140, 46, 38);
            _insert("icons", "icon-human-naval-stop", 138, 1140, 46, 38);
            _insert("icons", "icon-human-naval-armor1", 184, 1140, 46, 38);
            _insert("icons", "icon-human-naval-armor2", 0, 1178, 46, 38);
            _insert("icons", "icon-orc-naval-move", 46, 1178, 46, 38);
            _insert("icons", "icon-human-naval-move", 92, 1178, 46, 38);
            _insert("icons", "icon-orc-tanker-return", 138, 1178, 46, 38);
            _insert("icons", "icon-human-tanker-return", 184, 1178, 46, 38);
            _insert("icons", "icon-orc-harvest-oil", 0, 1216, 46, 38);
            _insert("icons", "icon-human-harvest-oil", 46, 1216, 46, 38);
            _insert("icons", "icon-human-exit-transport", 92, 1216, 46, 38);
            _insert("icons", "icon-orc-exit-transport", 138, 1216, 46, 38);
            _insert("icons", "icon-armor0-human", 184, 1216, 46, 38);
            _insert("icons", "icon-armor1-human", 0, 1254, 46, 38);
            _insert("icons", "icon-armor2-human", 46, 1254, 46, 38);
            _insert("icons", "icon-armor0-orc", 92, 1254, 46, 38);
            _insert("icons", "icon-armor1-orc", 138, 1254, 46, 38);
            _insert("icons", "icon-armor2-orc", 184, 1254, 46, 38);
            _insert("icons", "icon-patrol-human", 138, 1330, 46, 38);
            _insert("icons", "icon-patrol-orc", 184, 1330, 46, 38);
            _insert("icons", "icon-hold-position-human", 0, 1368, 46, 38);
            _insert("icons", "icon-hold-position-orc", 46, 1368, 46, 38);
            _insert("icons", "icon-ground-attack-human", 92, 1368, 46, 38);
            _insert("icons", "icon-ground-attack-orc", 138, 1368, 46, 38);
            _insert("icons", "icon-patrol-naval-human", 184, 1368, 46, 38);
            _insert("icons", "icon-patrol-naval-orc", 184, 1406, 46, 38);
            _insert("ui", "button-large-normal", 0, 0, 224, 28);
            _insert("ui", "button-large-pressed", 0, 28, 224, 28);
            _insert("ui", "button-large-grayed", 0, 56, 224, 28);
            _insert("ui", "button-medium-normal", 224, 0, 164, 28);
            _insert("ui", "button-medium-pressed", 224, 28, 164, 28);
            _insert("ui", "button-medium-grayed", 224, 56, 164, 28);
            _insert("ui", "button-small-normal", 388, 0, 106, 28);
            _insert("ui", "button-small-pressed", 388, 28, 106, 28);
            _insert("ui", "button-small-grayed", 388, 56, 106, 28);
            _insert("ui", "icon-frame", 494, 0, 54, 46);
            _insert("ui", "icon-frame-with-health", 494, 0, 54, 53);
            _insert("ui", "tiny-bloodlust", 548, 0, 16, 16);
            _insert("ui", "tiny-haste", 548, 16, 16, 16);
            _insert("ui", "tiny-slow", 548, 32, 16, 16);
            _insert("ui", "tiny-invisible", 548, 48, 16, 16);
            _insert("ui", "tiny-shield", 548, 64, 16, 16);
            _insert("ui", "tiny-gold", 564, 0, 14, 14);
            _insert("ui", "tiny-lumber", 564, 14, 14, 14);
            _insert("ui", "tiny-oil", 564, 28, 14, 14);
            _insert("ui", "tiny-food", 564, 42, 14, 14);
            _insert("ui", "tiny-mana", 564, 56, 14, 14);
            _insert("ui", "vslider-normal", 0, 84, 19, 124);
            _insert("ui", "vslider-grayed", 19, 84, 19, 124);
            _insert("ui", "pulldown-normal", 38, 84, 300, 18);
            _insert("ui", "pulldown-grayed", 38, 102, 300, 18);
            _insert("ui", "hslider-normal", 38, 120, 172, 19);
            _insert("ui", "hslider-grayed", 38, 139, 172, 19);
            _insert("ui", "button-thin-medium-normal", 38, 158, 128, 20);
            _insert("ui", "button-thin-medium-pressed", 38, 178, 128, 20);
            _insert("ui", "button-thin-medium-grayed", 38, 198, 128, 20);
            _insert("ui", "button-thin-small-normal", 166, 158, 80, 20);
            _insert("ui", "button-thin-small-pressed", 166, 178, 80, 20);
            _insert("ui", "button-thin-small-pressed", 166, 198, 80, 20);
            _insert("ui", "button-verythin-normal", 246, 158, 80, 15);
            _insert("ui", "button-verythin-pressed", 246, 173, 80, 15);
            _insert("ui", "button-verythin-grayed", 246, 188, 80, 15);
            _insert("ui", "cursor-green-crosshairs", 210, 120, 33, 33);
            _insert("ui", "cursor-yellow-crosshairs", 243, 120, 33, 33);
            _insert("ui", "cursor-red-crosshairs", 276, 120, 33, 33);
            _insert("ui", "cursor-hand", 309, 120, 29, 32);
            _insert("ui", "cursor-hand-invalid", 338, 120, 31, 32);
            _insert("ui", "cursor-magnifying-glass", 369, 120, 36, 35);
            _insert("ui", "cursor-select", 338, 102, 18, 18);
        })(AllSpriteData = Game.AllSpriteData || (Game.AllSpriteData = {}));
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        Game.AllTileData = {};
        Game.AllTileData["forest"] = [];
        Game.AllTileData["forest"][Game.TileType.LightWater] = {
            name: "Light Water",
            size: 1,
            layer: 0,
            typeBelow: Game.TileType.None,
            typeAbove: Game.TileType.LightDirt,
            indices: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [328, 329, 330]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.DarkWater] = {
            name: "Dark Water",
            size: 2,
            layer: 1,
            typeBelow: Game.TileType.LightWater,
            typeAbove: Game.TileType.LightDirt,
            indices: [
                [],
                [300, 301],
                [302, 303],
                [304, 305, 306],
                [307, 308],
                [309, 310, 311],
                [312, 313],
                [314],
                [315, 316],
                [317, 318],
                [319, 320, 321],
                [322],
                [323, 324, 325],
                [326],
                [327],
                [331, 332, 333]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.LightDirt] = {
            name: "Light Dirt",
            size: 1,
            layer: 1,
            typeBelow: Game.TileType.LightWater,
            typeAbove: Game.TileType.LightGrass,
            indices: [
                [337, 338, 339, 340, 341, 342, 343, 344],
                [234, 235],
                [232, 233],
                [229, 230, 231],
                [227, 228],
                [224, 225, 226],
                [223, 237],
                [221, 222],
                [219, 220],
                [218, 236],
                [215, 216, 217],
                [213, 214],
                [210, 211, 212],
                [208, 209],
                [206, 207],
                [334, 335, 336]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.DarkDirt] = {
            name: "Dark Dirt",
            size: 2,
            layer: 2,
            typeBelow: Game.TileType.LightDirt,
            typeAbove: Game.TileType.LightGrass,
            indices: [
                [348, 349, 350, 351, 352, 353, 354, 355],
                [180],
                [181, 182],
                [183, 184, 185],
                [186],
                [188, 189, 190],
                [191, 192],
                [193],
                [194],
                [195, 196],
                [197, 198, 199],
                [200],
                [201, 202, 203],
                [204],
                [205],
                [345, 346, 347]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.LightGrass] = {
            name: "Light Grass",
            size: 1,
            layer: 2,
            typeBelow: Game.TileType.LightDirt,
            typeAbove: Game.TileType.None,
            indices: [
                [358, 359, 360, 361, 362, 363],
                [298, 299],
                [296, 297],
                [293, 294, 295],
                [292],
                [289, 290, 291],
                [287, 288],
                [285, 286],
                [284],
                [282, 283],
                [279, 280, 281],
                [277, 278],
                [274, 275, 276],
                [272, 273],
                [270, 271],
                [356, 357]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.DarkGrass] = {
            name: "Dark Grass",
            size: 2,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [366, 367, 368, 369, 370, 371],
                [238, 239],
                [240, 241],
                [242, 243, 244],
                [245, 246],
                [247, 248, 249],
                [250, 251],
                [252, 253],
                [254, 255],
                [256, 257],
                [258, 259, 260],
                [261, 262],
                [263, 264, 265],
                [266, 267],
                [268, 269],
                [364, 365]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.Tree] = {
            name: "Tree",
            size: 2,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [],
                [129, 110],
                [102, 130],
                [124, 131],
                [107, 132],
                [133, 109],
                [139, 138],
                [111],
                [104, 136],
                [140, 141],
                [103, 135],
                [112],
                [106, 134],
                [137],
                [105],
                [125, 127, 128]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.Rock] = {
            name: "Rock",
            size: 2,
            layer: 2,
            typeBelow: Game.TileType.LightDirt,
            typeAbove: Game.TileType.LightGrass,
            indices: [
                [],
                [150, 173],
                [142, 167],
                [164, 176],
                [147, 171],
                [149, 172],
                [154, 175],
                [151],
                [144, 169],
                [153, 174],
                [143, 168],
                [152],
                [146, 170],
                [148],
                [145],
                [165, 177, 178, 179]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.HumanWall] = {
            name: "Human Wall",
            size: 1,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [16],
                [25],
                [20],
                [30],
                [18],
                [27, 28],
                [23],
                [32],
                [17],
                [26],
                [21, 22],
                [31],
                [19],
                [29],
                [24],
                [33]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.OrcWall] = {
            name: "Orc Wall",
            size: 1,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [34],
                [43],
                [38],
                [48],
                [36],
                [45, 46],
                [41],
                [50],
                [35],
                [44],
                [39, 40],
                [49],
                [37],
                [47],
                [42],
                [51]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.HumanWallDamaged] = {
            name: "Human Wall Damaged",
            size: 1,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [52],
                [61],
                [56],
                [66],
                [54],
                [63, 64],
                [59],
                [68],
                [53],
                [62],
                [57, 58],
                [67],
                [55],
                [65],
                [60],
                [69]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.OrcWallDamaged] = {
            name: "Orc Wall Damaged",
            size: 1,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [70],
                [79],
                [74],
                [84],
                [72],
                [81, 82],
                [77],
                [86],
                [71],
                [80],
                [75, 76],
                [85],
                [73],
                [83],
                [78],
                [87]
            ]
        };
        Game.AllTileData["forest"][Game.TileType.WallDestroyed] = {
            name: "Wall Destroyed",
            size: 1,
            layer: 3,
            typeBelow: Game.TileType.LightGrass,
            typeAbove: Game.TileType.None,
            indices: [
                [88],
                [96],
                [92],
                [100],
                [90],
                [98, 99],
                [94],
                [99],
                [89],
                [97],
                [93, 95],
                [95],
                [91],
                [98],
                [93],
                [101]
            ]
        };
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Global = (function (_super) {
            __extends(Global, _super);
            function Global() {
                _super.call(this);
                Global.instance = this;
            }
            Global.prototype.getPopupSettings = function () { return this._popupSettings(); };
            Global.prototype.isActive = function () { return true; };
            Global.prototype.initialize = function (callback) {
                this._popupSettings = ko.observable();
                callback();
            };
            Global.prototype.bindEvents = function (dom) {
                var self = this;
                function onClick(cb) {
                    if (cb) {
                        self._popupSettings(null);
                        cb();
                    }
                }
                dom.on("click", ".btn.ok", function () {
                    var s = self._popupSettings();
                    onClick(s.onOk);
                });
                dom.on("click", ".btn.cancel", function () {
                    var s = self._popupSettings();
                    onClick(s.onCancel);
                });
                dom.on("click", ".btn.custom", function () {
                    var s = self._popupSettings();
                    if (s.btnCustom)
                        onClick(s.btnCustom.callback);
                });
            };
            Global.prototype.onAppStateChange = function (from, to) {
            };
            Global.prototype.popup = function (p) {
                this._popupSettings(p);
            };
            return Global;
        })(Engine.AppState);
        Game.Global = Global;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Editor = (function (_super) {
            __extends(Editor, _super);
            function Editor() {
                _super.apply(this, arguments);
            }
            return Editor;
        })(Engine.AppState);
        Game.Editor = Editor;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        function _entitySortFunction(a, b) {
            return b.getSortOrder() - a.getSortOrder();
        }
        var LiveGame = (function (_super) {
            __extends(LiveGame, _super);
            function LiveGame() {
                _super.apply(this, arguments);
            }
            LiveGame.prototype.getWorld = function () { return this._world; };
            LiveGame.prototype.getPlayer = function () { return this._player(); };
            LiveGame.prototype.getSelectedEntities = function () { return this._selectedEntities(); };
            LiveGame.prototype.getGroup = function () { return this._group(); };
            LiveGame.prototype.getCurrentCommands = function () { return this._currentCommands(); };
            LiveGame.prototype.getNotifyMessage = function () { return this._notifyMessage(); };
            LiveGame.prototype.getHoverCommand = function () { return this._hoverCommand(); };
            LiveGame.prototype.getDownButton = function () { return this._downButton(); };
            LiveGame.prototype.getTooltip = function () { return this._tooltip(); };
            LiveGame.prototype.getTooltipExtended = function () { return this._tooltipExtended(); };
            LiveGame.prototype.getStatusBarText = function () { return this._statusBarText(); };
            LiveGame.prototype.getLastPing = function () { return 0; };
            LiveGame.prototype.getMultiplayer = function () { return this._multiplayer(); };
            LiveGame.prototype.initialize = function (callback) {
                var self = this;
                this._player = ko.observable();
                this._hoverTarget = ko.observable();
                this._hoverTile = null;
                this._group = ko.observableArray([]);
                this._groupType = Game.EntityType.None;
                this._rawSelected = ko.observableArray();
                this._selectedIds = ko.observableArray();
                this._selectedEntities = ko.computed(function () {
                    return self._filterEntities(self._rawSelected());
                });
                this._selectedEntities.subscribe(function (selected) {
                    var ids = self._selectedIds();
                    ids.length = 0;
                    for (var i = selected.length - 1; i !== -1; --i)
                        ids[selected[i].id] = true;
                    self._selectedIds.valueHasMutated();
                    var oldType = self._groupType;
                    var ent = _.find(selected, function (ent) {
                        return ent.type === oldType;
                    });
                    self.setGroupType(ent ? ent.type : (selected.length > 0 ? selected[0].type : Game.EntityType.None));
                });
                this._groupIds = ko.observableArray();
                this._currentCommands = ko.observableArray([]);
                this._notifyMessage = ko.observable();
                this._notifyTimeout = 0;
                this._hoverCommand = ko.observable();
                this._downButton = ko.observable();
                this._tooltip = ko.observable();
                this._tooltipExtended = ko.observable();
                this._statusBarText = ko.computed(function () {
                    var cmd = self._hoverCommand();
                    if (cmd)
                        return cmd.getName();
                    var target = self._hoverTarget();
                    if (target instanceof Game.Entity)
                        return target.getName();
                });
                this._multiplayer = ko.observable();
                callback();
            };
            LiveGame.prototype.bindEvents = function (dom) {
                var self = this;
                dom.find(".toMainMenu").click(function () {
                    Engine.setState("MainMenu");
                });
                dom.find(".toLobby").click(function () {
                    Engine.setState("Lobby");
                });
                dom.on("click", ".iconButton.entity", function () {
                    var ent = ko.dataFor(this);
                    var selected = self._selectedEntities();
                    if (selected.length === 1) {
                        self._camera.setCenter(ent.getPosition());
                    }
                    else if (!self.isEntityInGroup(ent)) {
                        self.setGroupType(ent.type);
                    }
                    else {
                        self._rawSelected([ent]);
                    }
                });
                dom.on("click", ".iconButton.command", function () {
                    var command = ko.dataFor(this);
                    self.issueCommand(command);
                });
                dom.on("mouseover", ".iconButton", function () {
                    var d = ko.dataFor(this);
                    if (d instanceof Game.Command)
                        self._hoverCommand(d);
                    else if (d instanceof Game.Entity)
                        self._hoverTarget(d);
                });
                dom.on("mouseout", ".iconButton", function () {
                    var d = ko.dataFor(this);
                    if (d instanceof Game.Command)
                        self._hoverCommand(null);
                    else if (d instanceof Game.Entity)
                        self._hoverTarget(null);
                });
                dom.on("mousedown", ".iconButton", function () {
                    self._downButton(this);
                });
                dom.on("mouseup", ".iconButton", function () {
                    self._downButton(null);
                });
                var cvs = dom.find(".mainView");
                cvs.bind("mouseout", function () {
                    if (self._hoverTarget() !== null)
                        self._hoverTarget(null);
                    self._hoverTile = null;
                    self._mouseInView = false;
                });
                cvs.bind("mouseover", function () {
                    self._mouseInView = true;
                });
                this._mainSurface = new Engine.Surface2D(cvs.get()[0]);
            };
            LiveGame.prototype.begin = function (hs, callback) {
                var raceName = "human";
                var terrainType = "forest";
                var self = this;
                Engine.AssetManager.load({
                    cursors: [
                        { id: "magnify", x: 0, y: 0, filename: "magnify.gif" },
                        { id: "select", x: 8, y: 8, filename: "select.gif" },
                        { id: "hand", x: 2, y: 0, filename: raceName + "_hand.gif" },
                        { id: "hand_invalid", x: 2, y: 0, filename: raceName + "_hand_invalid.gif" },
                        { id: "red_crosshairs", x: 14, y: 14, filename: raceName + "_red_crosshairs.gif" },
                        { id: "yellow_crosshairs", x: 14, y: 14, filename: raceName + "_yellow_crosshairs.gif" },
                        { id: "green_crosshairs", x: 14, y: 14, filename: raceName + "_green_crosshairs.gif" }
                    ],
                    images: [
                        { id: "terrain", filename: "terrain/" + terrainType + ".png" },
                        { id: "icons", filename: "icon/" + terrainType + ".png" },
                        { id: "footman", filename: "unit/footman.png" },
                        { id: "knight", filename: "unit/knight.png" },
                        { id: "peasant", filename: "unit/peasant.png" },
                        { id: "gold_mine", filename: "structure/" + terrainType + "/neutral/gold_mine.png" },
                        { id: "oil_patch", filename: "structure/" + terrainType + "/neutral/oil_patch.png" },
                        { id: "farm", filename: "structure/" + terrainType + "/farm.png" },
                        { id: "town_hall", filename: "structure/" + terrainType + "/town_hall.png" },
                        { id: "land_construction", filename: "site/" + terrainType + "/land_construction_site.png" },
                        { id: "green_cross", filename: "misc/green_cross.png" },
                        { id: "red_cross", filename: "misc/red_cross.png" }
                    ],
                    shaders: [
                        { id: "terrain", filename: "terrain.shader" }
                    ]
                }, function () {
                    self._begin();
                    var gameId = hs.params["gid"];
                    if (typeof gameId !== "undefined") {
                        self._beginMultiplayer(parseInt(gameId), callback);
                    }
                    else {
                        callback(new Game.SingleplayerUpdateStrategy(self, 1000 / 60));
                    }
                });
            };
            LiveGame.prototype._begin = function () {
                var self = this;
                var world = this._world = new Game.World();
                var loader = new Game.Encoder(true);
                loader.data = Game.TEST_WORLD_DATA2;
                world.load(loader);
                var terrain = world.getTerrain();
                this._camera = new Game.Camera2D(new Engine.Vec2(), terrain.getUnitsWide(), terrain.getUnitsDeep());
                this._player(world.getPlayerById(2));
                this._userState = Game.UserState.Default;
                this._selectionStart = new Engine.Vec2();
                this._worldMouseCoords = new Engine.Vec2();
                this._mouseInView = false;
                this._selectionRect = new Engine.Rect();
                this._hoverTile = null;
                this._hoverTarget(null);
                this._groupType = Game.EntityType.None;
                this._currentCommands([]);
                this._currentPage = Game.CommandPage.Default;
                this._pendingCommand = null;
                this._drawGrid = false;
                this._drawEntityIDs = false;
                this._drawPath = false;
                this._drawTileNumbers = false;
                this._drawQuadtree = false;
                this._cross = new Game.Sequence({
                    type: Game.SequenceType.Vertical,
                    image: Engine.AssetManager.getImage("green_cross"),
                    frames: [3, 2, 1, 0],
                    frameTick: 4,
                    frameWidth: 32,
                    frameHeight: 32
                });
                this._crossPosition = new Engine.Vec2();
                this._showCross = false;
                this._flashEntity = null;
                this._flashStart = 0;
                this._downButton(null);
                this._tooltip(null);
                this._tooltipExtended(null);
                this._mainSurface.context.mozImageSmoothingEnabled = false;
                this._mainSurface.context.webkitImageSmoothingEnabled = false;
                this._mainSurface.context.imageSmoothingEnabled = false;
            };
            LiveGame.prototype._beginMultiplayer = function (gameId, callback) {
                var self = this;
                Game.Server.connect("/game", true, false, function (socket) {
                    if (!socket) {
                        callback();
                        return;
                    }
                    self._socket = socket;
                    socket.on("re_join_game", function (playerId) {
                        // TODO: SET PLAYER HERE
                        //self._playerId = playerId;
                        console.log("Was able to join game. My player id is: " + playerId);
                    });
                    var initPing = performance.now();
                    socket.on("bc_start_game", function (turnDelay, frameInterval, frameCount) {
                        initPing = performance.now() - initPing;
                        var lockstepper = new Game.MultiplayerUpdateStrategy(self, gameId, socket, turnDelay, frameInterval, frameCount, initPing);
                        self._multiplayer(lockstepper);
                        console.log("START GAME");
                        callback(lockstepper);
                    });
                    socket.emit("join_game", gameId);
                });
            };
            LiveGame.prototype.end = function () {
                Game.Server.disconnect(this._socket);
                this._socket = null;
                this._multiplayer(null);
                this._world.dispose();
                this._world = null;
                this._camera.dispose();
                this._camera = null;
                this._player(null);
                this._selectionStart = null;
                this._worldMouseCoords = null;
                this._selectionRect = null;
                this._hoverTarget(null);
                this._hoverTile = null;
                this._groupType = Game.EntityType.None;
                this._currentCommands([]);
                this._currentPage = Game.CommandPage.Default;
                this._pendingCommand = null;
                this._downButton(null);
                this._tooltip(null);
                this._tooltipExtended(null);
            };
            LiveGame.prototype.fixedUpdate = function () {
                this._world.step();
            };
            LiveGame.prototype.update = function (dt) {
                var cursor = "hand";
                var camera = this._camera;
                var rect = this._mainSurface.rect;
                var mousePos = Engine.Input.getMousePosition();
                var userState = this._userState;
                if (Engine.Input.isKeyDown(Engine.Key.KEY_LEFT)) {
                    camera.scrollLeft(dt);
                }
                if (Engine.Input.isKeyDown(Engine.Key.KEY_RIGHT)) {
                    camera.scrollRight(dt);
                }
                if (Engine.Input.isKeyDown(Engine.Key.KEY_UP)) {
                    camera.scrollUp(dt);
                }
                if (Engine.Input.isKeyDown(Engine.Key.KEY_DOWN)) {
                    camera.scrollDown(dt);
                }
                if (mousePos.x < Game.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollLeft(dt);
                }
                if (mousePos.y < rect.y + Game.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollUp(dt);
                }
                if (mousePos.x > rect.right - Game.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollRight(dt);
                }
                if (mousePos.y > rect.bottom - Game.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollDown(dt);
                }
                camera.getPointAt(mousePos.x - rect.x, mousePos.y - rect.y, this._worldMouseCoords);
                if (this._mouseInView) {
                    var world = this._world;
                    var wmc = this._worldMouseCoords;
                    this._hoverTile = world.getTerrain().getTileAtPoint(wmc, false);
                    var ents = world.getEntitiesAtPoint(wmc);
                    for (var i = ents.length - 1; i !== -1; --i) {
                        var ent = ents[i];
                        if (!ent.getSelectionRect().containsPoint(wmc) || !ent.isSelectable())
                            ents.splice(i, 1);
                    }
                    if (ents.length > 0) {
                        cursor = "magnify";
                        if (this._hoverTarget() !== ents[0])
                            this._hoverTarget(ents[0]);
                    }
                    else {
                        if (this._hoverTarget() !== this._hoverTile)
                            this._hoverTarget(this._hoverTile);
                    }
                    if (userState === Game.UserState.Targeting) {
                        cursor = "yellow_crosshairs";
                    }
                }
                if (this._showCross) {
                    var crossResult = this._cross.update();
                    if (crossResult === Game.SequenceUpdateResult.FrameIncremented) {
                        this._crossPosition.y += 1;
                    }
                    else if (crossResult === Game.SequenceUpdateResult.SequenceElapsed) {
                        this._showCross = false;
                    }
                }
                if (this._flashEntity) {
                    var delta = Date.now() - this._flashStart;
                    var cycle = Math.floor(delta / Game.ENTITY_FLASH_TIME);
                    if (cycle < Game.ENTITY_FLASH_COUNT * 2)
                        this._flashOn = ((cycle & 1) === 0);
                    else
                        this._flashEntity = null;
                }
                if (this._notifyTimeout !== 0 && this._notifyTimeout <= Date.now()) {
                    this._notifyMessage(null);
                    this._notifyTimeout = 0;
                }
                if (userState === Game.UserState.Selecting) {
                    this._selectionRect.fromPoints(this._selectionStart, this._worldMouseCoords);
                }
                Engine.AssetManager.getCursor(cursor).apply();
            };
            LiveGame.prototype.draw = function () {
                var ctx = this._mainSurface.context;
                ctx.fillStyle = "#449";
                ctx.fillRect(0, 0, this._mainSurface.width, this._mainSurface.height);
                ctx.save();
                {
                    var world = this._world;
                    var camera = this._camera;
                    var camRect = camera.getRect();
                    camera.apply(ctx);
                    world.getTerrain().draw(ctx, camRect, this._drawGrid, this._drawTileNumbers, this._drawPath);
                    if (this._drawQuadtree) {
                        world.getQuadtree().draw(ctx);
                    }
                    var ents = world.getEntitiesInRect(camRect);
                    if (ents.length > 0) {
                        var hoverTarget = this._hoverTarget();
                        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
                        ctx.strokeStyle = "#0f0";
                        for (var i = ents.length - 1; i !== -1; --i) {
                            var ent = ents[i];
                            if (this.isEntitySelected(ent)) {
                                var sr = ent.getSelectionRect();
                                if (this.isEntityInGroup(ent)) {
                                    ctx.lineWidth = 2;
                                    ctx.fillRect(sr.x, sr.y, sr.width, sr.height);
                                    ctx.strokeRect(sr.x, sr.y, sr.width, sr.height);
                                }
                                else {
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                                }
                                if (hoverTarget === ent) {
                                    ctx.save();
                                    {
                                        ctx.fillStyle = "#ff0";
                                        ctx.fillRect(sr.x - 2, sr.y - 2, 4, 4);
                                        ctx.fillRect(sr.right - 2, sr.y - 2, 4, 4);
                                        ctx.fillRect(sr.right - 2, sr.bottom - 2, 4, 4);
                                        ctx.fillRect(sr.x - 2, sr.bottom - 2, 4, 4);
                                    }
                                    ctx.restore();
                                }
                            }
                        }
                    }
                    if (this._flashEntity && this._flashOn) {
                        var sr = this._flashEntity.getSelectionRect();
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#0f0";
                        ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                    }
                    for (var i = 0, ii = ents.length; i < ii; ++i) {
                        ents[i].draw(ctx);
                    }
                    if (this._drawEntityIDs) {
                        ctx.font = "normal 10px tahoma";
                        ctx.fillStyle = "#fff";
                        for (var e = 0, ee = ents.length; e < ee; ++e) {
                            var entity = ents[e];
                            var p = entity.getPosition();
                            ctx.fillText("" + entity.id, p.x - 4, p.y - 16);
                        }
                    }
                    if (this._showCross)
                        this._cross.drawAtCenter(ctx, this._crossPosition.x, this._crossPosition.y);
                    var userState = this._userState;
                    if (userState === Game.UserState.Selecting) {
                        var sr = this._selectionRect;
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#0f0";
                        ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                    }
                    else if (userState === Game.UserState.PlacingEntity) {
                        if (this._hoverTile)
                            this._pendingCommand.placementEntity.drawPlacement(ctx, this._hoverTile.x, this._hoverTile.y);
                    }
                }
                ctx.restore();
            };
            LiveGame.prototype.onKeyDown = function (key) {
                var hotCmd = _.find(this._currentCommands(), function (cmd) {
                    return cmd && cmd.getHotkey() === key;
                });
                if (hotCmd) {
                    this.issueCommand(hotCmd);
                    return;
                }
                if (key === Engine.Key.KEY_TAB) {
                    this._cycleGroup(Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT));
                    Engine.Input.preventDefault();
                }
                else if (key === Engine.Key.KEY_NUMPAD_0) {
                    this._drawGrid = !this._drawGrid;
                }
                else if (key === Engine.Key.KEY_NUMPAD_1) {
                    this._drawTileNumbers = !this._drawTileNumbers;
                }
                else if (key === Engine.Key.KEY_NUMPAD_2) {
                    this._drawPath = !this._drawPath;
                }
                else if (key === Engine.Key.KEY_NUMPAD_3) {
                    this._drawEntityIDs = !this._drawEntityIDs;
                }
                else if (key === Engine.Key.KEY_NUMPAD_4) {
                    this._drawQuadtree = !this._drawQuadtree;
                }
            };
            LiveGame.prototype.onBufferedKeyDown = function (key) {
                if (key === Engine.Key.KEY_TAB) {
                    Engine.Input.preventDefault();
                }
            };
            LiveGame.prototype.onMouseDown = function (x, y, button) {
                if (!this._mouseInView)
                    return;
                var userState = this._userState;
                if (userState === Game.UserState.Default) {
                    if (button === Engine.Key.KEY_MOUSE_LEFT) {
                        this._startSelection(x, y);
                    }
                    else if (button === Engine.Key.KEY_MOUSE_RIGHT) {
                        this.issueCommand();
                    }
                }
                else if (userState === Game.UserState.Targeting || userState === Game.UserState.PlacingEntity) {
                    if (button === Engine.Key.KEY_MOUSE_LEFT) {
                        this.issueCommand();
                    }
                    else {
                        this.setPage(Game.CommandPage.Default);
                    }
                }
            };
            LiveGame.prototype.onMouseUp = function (x, y, button) {
                var userState = this._userState;
                if (userState === Game.UserState.Selecting) {
                    if (button === Engine.Key.KEY_MOUSE_LEFT) {
                        this._endSelection();
                    }
                }
                if (button === Engine.Key.KEY_MOUSE_LEFT && this._downButton() !== null) {
                    this._downButton(null);
                }
            };
            LiveGame.prototype.onMouseWheel = function (delta) {
                if (delta > 0) {
                    this._camera.setZoom(this._camera.getZoom() * (1 + Game.CAMERA_ZOOM_INCREMENT));
                }
                else if (delta < 0) {
                    this._camera.setZoom(this._camera.getZoom() * (1 - Game.CAMERA_ZOOM_INCREMENT));
                }
            };
            LiveGame.prototype.onResize = function (width, height) {
                var surf = this._mainSurface;
                surf.setRect(176, 16, width - 176 - 16, height - 16 - 16);
                this._camera.resize(surf.width, surf.height);
            };
            LiveGame.prototype.isEntityInGroup = function (ent) {
                return this._groupIds()[ent.id] || false;
            };
            LiveGame.prototype.isEntitySelected = function (ent) {
                return this._selectedIds()[ent.id] || false;
            };
            LiveGame.prototype.issueCommand = function (command) {
                var player = this._player();
                var selected = this._selectedEntities();
                var doQueue = Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT);
                var result = null;
                if (command) {
                    if (command instanceof Game.UserCommand) {
                        result = command.tryExecute(this);
                    }
                    else {
                        var worldCommand = command;
                        result = worldCommand.canExecute(player, selected, null);
                        if (result.success) {
                            if (worldCommand.requiresTarget()) {
                                var plotEntType = worldCommand.plotEntityType();
                                if (plotEntType === Game.EntityType.None) {
                                    this._userState = Game.UserState.Targeting;
                                }
                                else {
                                    this._userState = Game.UserState.PlacingEntity;
                                    worldCommand.placementEntity = new Game.Entity(Engine.MAX_INT, this._world, plotEntType, this._player());
                                }
                                this._pendingCommand = worldCommand;
                                this.setPage(Game.CommandPage.Targeting);
                            }
                            else {
                                result = player.bufferCommand(worldCommand, selected, null, doQueue);
                            }
                        }
                    }
                }
                else {
                    var target = this._hoverTarget() || this._hoverTile;
                    if (this._userState === Game.UserState.Targeting) {
                        result = player.bufferCommand(this._pendingCommand, selected, target, doQueue);
                    }
                    else if (this._userState === Game.UserState.PlacingEntity) {
                        target = this._hoverTile;
                        result = player.bufferCommand(this._pendingCommand, selected, target, doQueue);
                    }
                    else {
                        result = player.bufferCommand(Game.WorldCommand.instance, selected, target, doQueue);
                    }
                    if (result.success) {
                        if (this._userState !== Game.UserState.PlacingEntity) {
                            if (target instanceof Game.Entity) {
                                this._flashEntity = target;
                                this._flashStart = Date.now();
                            }
                            else if (target instanceof Game.Tile) {
                                this._cross.reset();
                                this._crossPosition.set(this._worldMouseCoords);
                                this._showCross = true;
                            }
                        }
                        this.setPage(Game.CommandPage.Default);
                    }
                }
                if (result.message) {
                    console.log(result.message);
                    this._notifyMessage(result.message);
                    this._notifyTimeout = Date.now() + 3000;
                }
                return result;
            };
            LiveGame.prototype.setGroupType = function (entType) {
                var player = this._player();
                var group = _.filter(this._selectedEntities(), function (ent) {
                    return ent.type === entType && ent.getOwner() === player;
                });
                this._group(group);
                var ids = this._groupIds();
                ids.length = 0;
                for (var i = group.length - 1; i !== -1; --i)
                    ids[group[i].id] = true;
                this._groupIds.valueHasMutated();
                this._groupType = entType;
                this.setPage(Game.CommandPage.Default);
            };
            LiveGame.prototype.setPage = function (page) {
                var commands = [];
                for (var i = Game.COMMANDS_MAX - 1; i !== -1; --i)
                    commands[i] = null;
                function pushCommand(cmd) {
                    commands[cmd.getButtonY() * Game.COMMAND_BUTTON_X_MAX + cmd.getButtonX()] = cmd;
                }
                if (page === Game.CommandPage.AdvancedBuild) {
                    pushCommand(Game.CancelCommand.instance);
                }
                else if (page === Game.CommandPage.BasicBuild) {
                    var group = this._group();
                    if (group.length > 0) {
                        var ent = group[0];
                        _.each(ent.getStructuresBuilt(), function (entType) {
                            var data = Game.AllEntityData[entType];
                            if (!data)
                                return;
                            pushCommand(new Game.BuildCommand(entType));
                        });
                    }
                    pushCommand(Game.CancelCommand.instance);
                }
                else if (page === Game.CommandPage.Targeting) {
                    pushCommand(Game.CancelCommand.instance);
                }
                else {
                    this._userState = Game.UserState.Default;
                    this._pendingCommand = null;
                    var stop = false;
                    var attack = false;
                    var move = false;
                    var patrol = false;
                    var holdPosition = false;
                    var setRallyPoint = false;
                    var player = this._player();
                    var selected = this._selectedEntities();
                    for (var i = 0, ii = selected.length; i < ii; ++i) {
                        var ent = selected[i];
                        if (ent.getOwner() !== player)
                            continue;
                        if (ent.canMove() || ent.hasWeapon())
                            stop = true;
                        if (ent.hasWeapon())
                            attack = true;
                        if (ent.canMove()) {
                            move = true;
                            patrol = true;
                            holdPosition = true;
                        }
                        if (ent.trainsUnits())
                            setRallyPoint = true;
                    }
                    if (stop)
                        pushCommand(Game.StopCommand.instance);
                    if (attack)
                        pushCommand(Game.AttackCommand.instance);
                    if (move)
                        pushCommand(Game.MoveCommand.instance);
                    if (patrol)
                        pushCommand(Game.PatrolCommand.instance);
                    if (holdPosition)
                        pushCommand(Game.HoldPositionCommand.instance);
                    if (setRallyPoint)
                        pushCommand(Game.SetRallyPointCommand.instance);
                    var group = this._group();
                    if (group.length > 0) {
                        var ent = group[0];
                        _.each(ent.getAbilities(), function (abType) {
                            pushCommand(new Game.AbilityCommand(abType));
                        });
                        _.each(ent.getUnitsTrained(), function (entType) {
                            pushCommand(new Game.TrainCommand(entType));
                        });
                        var showBasic = false;
                        var showAdvanced = false;
                        _.each(ent.getStructuresBuilt(), function (entType) {
                            var data = Game.AllEntityData[entType];
                            if (!data)
                                return;
                            showBasic = showBasic || (data.page === Game.CommandPage.BasicBuild);
                            showAdvanced = showAdvanced || (data.page === Game.CommandPage.AdvancedBuild);
                        });
                        if (showBasic)
                            pushCommand(Game.BasicBuildCommand.instance);
                        if (showAdvanced)
                            pushCommand(Game.AdvancedBuildCommand.instance);
                    }
                }
                this._currentPage = page;
                this._currentCommands(commands);
            };
            LiveGame.prototype.selectEntities = function (ents, add) {
                if (add) {
                    var raw = this._rawSelected();
                    if (ents.length === 1) {
                        var index = raw.indexOf(ents[0]);
                        if (index === -1) {
                            raw.push(ents[0]);
                        }
                        else {
                            raw.splice(index, 1);
                        }
                    }
                    else {
                        for (var i = ents.length - 1; i !== -1; --i) {
                            var ent = ents[i];
                            if (raw.indexOf(ent) === -1)
                                raw.push(ent);
                        }
                    }
                    this._rawSelected.valueHasMutated();
                }
                else {
                    this._rawSelected(ents);
                }
            };
            LiveGame.prototype._cycleGroup = function (backwards) {
                var oldType = this._groupType;
                var selected = this._selectedEntities();
                var i = backwards ? 0 : selected.length - 1;
                var ii = backwards ? selected.length : -1;
                var inc = i > ii ? -1 : 1;
                while (i !== ii) {
                    if (selected[i].type === oldType) {
                        var nextEnt = selected[i - inc] || selected[ii - inc];
                        var nextEntType = nextEnt.type;
                        if (nextEntType !== oldType)
                            this.setGroupType(nextEntType);
                        return;
                    }
                    i += inc;
                }
                this.setGroupType(Game.EntityType.None);
            };
            LiveGame.prototype._endSelection = function () {
                this._userState = Game.UserState.Default;
                var sr = this._selectionRect;
                var ents = this._world.getEntitiesInRect(sr);
                for (var i = ents.length - 1; i !== -1; --i) {
                    var ent = ents[i];
                    if (!ent.getSelectionRect().intersectsRect(sr))
                        ents.splice(i, 1);
                }
                if (ents.length !== 0) {
                    this.selectEntities(ents, Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT));
                }
            };
            LiveGame.prototype._filterEntities = function (ents) {
                var ret = [];
                var player = this._player();
                var savedEnt = null;
                for (var i = ents.length - 1; i !== -1; --i) {
                    var ent = ents[i];
                    if (!ent.isSelectable()) {
                        continue;
                    }
                    else if (!ent.isUnit() || ent.getOwner() !== player) {
                        savedEnt = ent;
                        continue;
                    }
                    ret.push(ent);
                }
                if (ret.length === 0 && savedEnt) {
                    ret.push(savedEnt);
                }
                else {
                    ret.sort(_entitySortFunction);
                    if (ret.length > Game.ENTITY_MAX_SELECTION)
                        ret.splice(Game.ENTITY_MAX_SELECTION, ret.length - Game.ENTITY_MAX_SELECTION);
                }
                return ret;
            };
            LiveGame.prototype._startSelection = function (pageX, pageY) {
                var rect = this._mainSurface.rect;
                this._userState = Game.UserState.Selecting;
                this._camera.getPointAt(pageX - rect.x, pageY - rect.y, this._selectionStart);
            };
            return LiveGame;
        })(Engine.AppState);
        Game.LiveGame = LiveGame;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Lobby = (function (_super) {
            __extends(Lobby, _super);
            function Lobby() {
                _super.apply(this, arguments);
            }
            Lobby.prototype.getRooms = function () { return this._rooms(); };
            Lobby.prototype.createRoomPopup = function () { return this._createPopup(); };
            Lobby.prototype.initialize = function (callback) {
                this._rooms = ko.observableArray();
                this._createPopup = ko.observable();
                callback();
            };
            Lobby.prototype.bindEvents = function (dom) {
                var self = this;
                var createRoom = dom.find(".createRoom");
                var createRoomForm = createRoom.find(".createRoomForm");
                var inputRoomName = createRoomForm.find(".name");
                var inputRoomPassword = createRoomForm.find(".password");
                dom.find(".btnMainMenu").click(function () {
                    Engine.setState("MainMenu");
                });
                dom.find(".btnCreateRoomPopup").click(function () {
                    self._createPopup(true);
                    inputRoomName.focus();
                });
                createRoom.find(".background").click(function () {
                    self._createPopup(false);
                });
                createRoomForm.submit(function (evt) {
                    var roomName = inputRoomName.val();
                    var roomPw = inputRoomPassword.val();
                    if (self._socket) {
                        self._socket.emit("create_room", roomName, roomPw);
                    }
                    evt.preventDefault();
                });
                dom.find(".btnRefreshList").click(function () {
                    if (self._socket)
                        self._socket.emit("get_room_list");
                });
                dom.on("click", ".btnJoinRoom", function () {
                    var roomId = parseInt($(this).closest(".room").attr("room-id"));
                    if (roomId && self._socket)
                        self._socket.emit("join_room", roomId);
                });
            };
            Lobby.prototype.begin = function (hs, callback) {
                this._rooms([]);
                this._createPopup(false);
                var self = this;
                Game.Server.connect("/lobby", true, true, function (socket) {
                    if (!socket) {
                        callback();
                        return;
                    }
                    self._socket = socket;
                    socket.on("re_get_room_list", function (list) {
                        self._rooms(list);
                    });
                    socket.on("re_create_room", function (roomId, roomPw) {
                        console.log("Room created: " + roomId);
                        var qp = {};
                        qp["rid"] = "" + roomId;
                        if (roomPw)
                            qp["pw"] = roomPw;
                        Engine.setState("Room", qp);
                    });
                    socket.on("re_join_room", function (roomId) {
                        Engine.setState("Room", { rid: "" + roomId });
                    });
                    socket.emit("get_room_list");
                    callback();
                });
            };
            Lobby.prototype.end = function () {
                Game.Server.disconnect(this._socket);
                this._socket = null;
            };
            return Lobby;
        })(Engine.AppState);
        Game.Lobby = Lobby;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var ServerChecker = (function () {
            function ServerChecker(mainMenu) {
                this._mainMenu = mainMenu;
            }
            ServerChecker.prototype.begin = function (callback) {
                this._ending = false;
                this._connectLoop();
                callback();
            };
            ServerChecker.prototype.end = function () {
                this._ending = true;
                Game.Server.disconnect(this._socket);
                this._socket = null;
            };
            ServerChecker.prototype._connectLoop = function () {
                if (this._ending)
                    return;
                var self = this;
                Game.Server.connect("", false, true, function (socket) {
                    if (self._ending)
                        return;
                    if (socket) {
                        socket.on("error", function () {
                            Game.Server.disconnect(self._socket);
                            self._mainMenu.onServerDisconnect();
                            setTimeout(self._connectLoop.bind(self), 2000);
                        });
                        self._socket = socket;
                        self._mainMenu.onServerConnect();
                    }
                    else {
                        setTimeout(self._connectLoop.bind(self), 2000);
                    }
                });
            };
            return ServerChecker;
        })();
        var MainMenu = (function (_super) {
            __extends(MainMenu, _super);
            function MainMenu() {
                _super.apply(this, arguments);
            }
            MainMenu.prototype.isConnected = function () { return this._connected(); };
            MainMenu.prototype.initialize = function (callback) {
                this._connected = ko.observable(false);
                callback();
            };
            MainMenu.prototype.bindEvents = function (dom) {
                var btnSingle = dom.find(".btn.singleplayer");
                var btnEditor = dom.find(".btn.editor");
                var btnMulti = dom.find(".btn.multiplayer");
                var self = this;
                btnSingle.click(function () { Engine.setState("LiveGame"); });
                btnEditor.click(function () { Engine.setState("Editor"); });
                btnMulti.click(function () { Engine.setState("Lobby"); });
            };
            MainMenu.prototype.begin = function (hs, callback) {
                var serverChecker = new ServerChecker(this);
                this._connected(false);
                callback(serverChecker);
            };
            MainMenu.prototype.end = function () {
            };
            MainMenu.prototype.onServerConnect = function () {
                this._connected(true);
            };
            MainMenu.prototype.onServerDisconnect = function () {
                this._connected(false);
            };
            return MainMenu;
        })(Engine.AppState);
        Game.MainMenu = MainMenu;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../_include.ts"/> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        var Room = (function (_super) {
            __extends(Room, _super);
            function Room() {
                _super.apply(this, arguments);
            }
            Room.prototype.getRoomInfo = function () { return this._roomInfo(); };
            Room.prototype.countdownStarted = function () { return this._countdownStarted(); };
            Room.prototype.canStopCountdown = function () { return this._countdownStarted() && this._countdownTime() >= 3; };
            Room.prototype.getCountdown = function () { return this._countdownTime(); };
            Room.prototype.isHost = function () {
                var ri = this._roomInfo();
                var ui = Game.Server.getUserInfo();
                return ri && ui && ri.host === ui.username;
            };
            Room.prototype.initialize = function (callback) {
                this._roomInfo = ko.observable();
                this._countdownStarted = ko.observable();
                this._countdownTime = ko.observable();
                callback();
            };
            Room.prototype.bindEvents = function (dom) {
                var self = this;
                dom.find(".btnLeaveRoom").click(function () {
                    Engine.setState("Lobby");
                });
                dom.on("click", ".btnStartCountdown", function () {
                    if (self._socket)
                        self._socket.emit("start_countdown");
                });
                dom.on("click", ".btnStopCountdown", function () {
                    if (self._socket)
                        self._socket.emit("stop_countdown");
                });
            };
            Room.prototype.begin = function (hs, callback) {
                this._roomInfo(null);
                this._stopCountdown();
                var self = this;
                Game.Server.connect("/room", true, true, function (socket) {
                    if (!socket) {
                        callback();
                        return;
                    }
                    self._socket = socket;
                    socket.on("re_get_room_info", function (roomInfo) {
                        self._roomInfo(roomInfo);
                    });
                    socket.on("re_join_room", function (roomInfo) {
                        self._roomInfo(roomInfo);
                    });
                    socket.on("bc_left_room", function (roomInfo, user) {
                        self._roomInfo(roomInfo);
                        console.log(user.username + " HAS LEFT THE ROOM");
                    });
                    socket.on("bc_joined_room", function (roomInfo, slotInfo) {
                        self._roomInfo(roomInfo);
                        console.log(slotInfo.user.username + " HAS JOINED THE ROOM");
                    });
                    socket.on("bc_start_countdown", function (seconds) {
                        self._startCountdown(seconds);
                    });
                    socket.on("bc_stop_countdown", function () {
                        self._stopCountdown();
                    });
                    socket.on("bc_game_ready", function (gameId) {
                        Engine.setState("LiveGame", { gid: gameId });
                    });
                    socket.emit("join_room", hs.params["rid"], hs.params["pw"]);
                    callback();
                });
            };
            Room.prototype.end = function () {
                Game.Server.disconnect(this._socket);
                this._socket = null;
                clearInterval(this._countdownInterval);
            };
            Room.prototype._startCountdown = function (seconds) {
                clearInterval(this._countdownInterval);
                var self = this;
                this._countdownInterval = setInterval(function () { self._countdownTick(); }, 1000);
                this._countdownTime(seconds);
                this._countdownStarted(true);
            };
            Room.prototype._stopCountdown = function () {
                clearInterval(this._countdownInterval);
                this._countdownStarted(false);
                this._countdownTime(0);
            };
            Room.prototype._countdownTick = function () {
                var time = this._countdownTime();
                if (--time <= 0) {
                    clearInterval(this._countdownInterval);
                    if (this._socket)
                        this._socket.emit("countdown_complete");
                }
                this._countdownTime(time);
            };
            return Room;
        })(Engine.AppState);
        Game.Room = Room;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
/// <reference path="../engine/Engine.ts"/>
/// <reference path="_enum.ts" />
/// <reference path="_ext.ts" />
/// <reference path="_interface.ts" />
/// <reference path="_var.ts" />
/// <reference path="Game.ts" />
/// <reference path="script/Camera2D.ts" />
/// <reference path="script/Command.ts" />
/// <reference path="script/CommandBuffer.ts" />
/// <reference path="script/Encoder.ts" />
/// <reference path="script/Entity.ts" />
/// <reference path="script/Healthbar.ts" />
/// <reference path="script/ImageCache.ts" />
/// <reference path="script/MultiplayerUpdateStrategy.ts" />
/// <reference path="script/Path.ts" />
/// <reference path="script/Pathfinder.ts" />
/// <reference path="script/Player.ts" />
/// <reference path="script/Portrait.ts" />
/// <reference path="script/Sequence.ts" />
/// <reference path="script/Server.ts" />
/// <reference path="script/SingleplayerUpdateStrategy.ts" />
/// <reference path="script/Team.ts" />
/// <reference path="script/Terrain.ts" />
/// <reference path="script/TerrainMesh.ts" />
/// <reference path="script/Tile.ts" />
/// <reference path="script/TileRegion.ts" />
/// <reference path="script/World.ts" />
/// <reference path="script/WorldEvent.ts" />
/// <reference path="script/WorldQuadtree.ts" />
/// <reference path="script/order/Order_BuildAtTile.ts" />
/// <reference path="script/order/Order_ClearRegion.ts" />
/// <reference path="script/order/Order_FollowEntity.ts" />
/// <reference path="script/order/Order_MoveToTile.ts" />
/// <reference path="script/order/Order_PatrolToEntity.ts" />
/// <reference path="script/order/Order_PatrolToTile.ts" />
/// <reference path="script/data/EntityData.ts" />
/// <reference path="script/data/SpriteData.ts" />
/// <reference path="script/data/TileData.ts" />
/// <reference path="script/state/Global/Global.ts" />
/// <reference path="script/state/Editor/Editor.ts" />
/// <reference path="script/state/LiveGame/LiveGame.ts" />
/// <reference path="script/state/Lobby/Lobby.ts" />
/// <reference path="script/state/MainMenu/MainMenu.ts" />
/// <reference path="script/state/Room/Room.ts" /> 
/// <reference path="_include.ts"/>
var Engine;
(function (Engine) {
    var Game;
    (function (Game) {
        function entryPoint() {
            var p = {
                initialState: "Lobby",
                globalStates: ["Global"],
                states: [
                    "Editor",
                    "LiveGame",
                    "Lobby",
                    "MainMenu",
                    "Room"
                ],
                vendors: [
                    Engine.Vendor.LZMA,
                    Engine.Vendor.SocketIO,
                    Engine.Vendor.Underscore,
                    Engine.Vendor.Three
                ]
            };
            return p;
        }
        Game.entryPoint = entryPoint;
        Game.states;
        function init(callback) {
            var global = new Game.Global();
            var editor = new Game.Editor();
            var liveGame = new Game.LiveGame();
            var lobby = new Game.Lobby();
            var mainMenu = new Game.MainMenu();
            var room = new Game.Room();
            Engine.initGame({
                initialState: mainMenu,
                globalState: global,
                states: [
                    editor, liveGame, lobby, mainMenu, room
                ],
                vendors: [
                    Engine.Vendor.LZMA,
                    Engine.Vendor.SocketIO,
                    Engine.Vendor.Underscore,
                    Engine.Vendor.Three
                ]
            }, function () {
                callback();
            });
        }
        Game.init = init;
    })(Game = Engine.Game || (Engine.Game = {}));
})(Engine || (Engine = {}));
