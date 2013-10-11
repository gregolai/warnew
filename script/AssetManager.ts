/// <reference path="_include.ts" />

module Engine {

	export module AssetManager {

		var _refreshAppend: string;

		var _cursors: { [id: string]: Cursor; } = {};
		var _fonts: { [id: string]: Font; } = {};
		var _images: { [id: string]: HTMLImageElement; } = {};
		var _shaders: { [id: string]: ShaderAsset; } = {};
		var _sounds: { [id: string]: HTMLAudioElement; } = {};

		export function load(assets: AssetsToLoad, callback: () => void): void {

			var async = new AsyncLock(callback);
			var unlock = function () { async.unlock(); }

			_refreshAppend = (App.instance.cacheAssets ? "" : (_refreshAppend || "?" + Date.now()));

			var cursors: AssetDataCursor[] = assets.cursors || [];
			for (var i = 0, ii = cursors.length; i < ii; ++i) {
				async.lock();
				_loadCursor(cursors[i], unlock);
			}

			var fonts: AssetDataFont[] = assets.fonts || [];
			for (var i = 0, ii = fonts.length; i < ii; ++i) {
				async.lock();
				_loadFont(fonts[i], unlock);
			}

			var images: AssetDataImage[] = assets.images || [];
			for (var i = 0, ii = images.length; i < ii; ++i) {
				async.lock();
				_loadImage(images[i], unlock);
			}

			var shaders: AssetDataShader[] = assets.shaders || [];
			for (var i = 0, ii = shaders.length; i < ii; ++i) {
				async.lock();
				_loadShader(shaders[i], unlock);
			}

			var sounds: AssetDataSound[] = assets.sounds || [];
			for (var i = 0, ii = sounds.length; i < ii; ++i) {
				async.lock();
				_loadSound(sounds[i], unlock);
			}

			unlock();
		}

		export function getCursor(id: string): Cursor {
			return _cursors[id] || null;
		}

		export function getFont(id: string): Font {
			return _fonts[id] || null;
		}

		export function getImage(id: string): HTMLImageElement {
			return _images[id] || null;
		}

		export function getShader(id: string): ShaderAsset {
			return _shaders[id] || null;
		}

		export function getSound(id: string): HTMLAudioElement {
			return _sounds[id] || null;
		}

		function _loadCursor(asset: AssetDataCursor, callback: () => void): void {

			var id = asset.id;
			var url = _makeUrl("cursor", asset.filename);

			if (_cursors[id]) {
				_cursors[id].dispose();
			}
			_cursors[id] = new Cursor(id, url, asset.x, asset.y);

			callback();
		}

		function _loadFont(asset: AssetDataFont, callback: () => void): void {

			var id = asset.id;

			var url = _makeUrl("font", id + "/stylesheet.css");

			FileUtil.loadStylesheet(url, function () {
				_fonts[id] = new Font(id, asset.styles);
				callback();
			});

		}

		function _loadImage(asset: AssetDataImage, callback: () => void): void {

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

		function _loadShader(asset: AssetDataShader, callback: () => void): void {

			var url = _makeUrl("shader", asset.filename);

			$.ajax({
				url: url,
				dataType: "text",
				success: function (text: string) {

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
								var arr = <string[]>struct[type];
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
				error: function (jqXHR: JQueryXHR, textStatus: string, errorThrow: string) {
					throw "Error loading shader (" + errorThrow + "): " + url;
				}
			});

		}

		function _loadSound(asset: AssetDataSound, callback: () => void): void {

			var mp3Url = _makeUrl("sound", asset.filename + ".mp3");
			var oggUrl = _makeUrl("sound", asset.filename + ".ogg");
			var m4aUrl = _makeUrl("sound", asset.filename + ".m4a");
			var wavUrl = _makeUrl("sound", asset.filename + ".wav");

			// TODO: WHICH EXTENSION TO USE?
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

		function _makeUrl(type: string, filename: string): string {
			return "asset/" + type + "/" + filename + _refreshAppend;
		}

	}

}