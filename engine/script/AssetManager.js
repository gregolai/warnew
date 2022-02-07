var Engine;
(function (Engine) {
    (function (AssetManager) {
        var _pathSuffix = window.DEBUG ? "?" + Date.now() : "";

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
                            } else if (line.indexOf("#end") === 0) {
                                type = "DEFAULT";
                            } else {
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
    })(Engine.AssetManager || (Engine.AssetManager = {}));
    var AssetManager = Engine.AssetManager;
})(Engine || (Engine = {}));
