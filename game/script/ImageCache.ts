/// <reference path="_include.ts"/>

module Engine.Game {

	export module ImageCache {

		var _replaceColors = [
			// gray (neutral) - unused
			[
				[0x81, 0x82, 0x82],
				[0x62, 0x63, 0x63],
				[0x49, 0x4a, 0x4a],
				[0x37, 0x38, 0x38]
			],
			// red
			[
				//r		g		b
				[0xa4, 0x00, 0x00],
				[0x7c, 0x00, 0x00],
				[0x5c, 0x04, 0x00],
				[0x44, 0x04, 0x00]
			],
			// blue
			[
				[0x0c, 0x48, 0xcc],
				[0x04, 0x28, 0xa0],
				[0x00, 0x14, 0x74],
				[0x00, 0x04, 0x4c]
			],
			// teal
			[
				[0x2c, 0xb4, 0x94],
				[0x14, 0x84, 0x5c],
				[0x04, 0x54, 0x2c],
				[0x00, 0x28, 0x0c]
			],
			// purple
			[
				[0x98, 0x48, 0xb0],
				[0x74, 0x2c, 0x84],
				[0x50, 0x18, 0x58],
				[0x2c, 0x08, 0x2c]
			],
			// orange
			[
				[0xf8, 0x8c, 0x14],
				[0xc8, 0x60, 0x10],
				[0x98, 0x3c, 0x10],
				[0x6c, 0x20, 0x0c]
			],
			// black
			[
				[0x28, 0x28, 0x3c],
				[0x1c, 0x1c, 0x2c],
				[0x14, 0x14, 0x20],
				[0x0c, 0x0c, 0x14]
			],
			// white
			[
				[0xe0, 0xe0, 0xe0],
				[0x98, 0x98, 0xb4],
				[0x54, 0x54, 0x80],
				[0x24, 0x28, 0x4c]
			],
			// yellow
			[
				[0xfc, 0xfc, 0x48],
				[0xe4, 0xcc, 0x28],
				[0xcc, 0xa0, 0x10],
				[0xb4, 0x74, 0x00]
			]
		];

		var _imageCanvi: { [id: string]: ImageCanvas; } = {};

		export function getImage(imageId: string, playerId?: number): ImageCanvas {

			// NEUTRAL PLAYER IS DEFAULT COLOR -> PLAYER ID == 0
			if (playerId === undefined || playerId === 0) {
				return <ImageCanvas>AssetManager.getImage(imageId);
			}

			// CLAMP PLAYER ID, JUST IN CASE
			playerId = MathUtil.clamp(playerId, 0, _replaceColors.length - 1);

			var canvasId = imageId + "|" + playerId;

			// TRY GET CACHED COPY
			var canvas = _imageCanvi[canvasId] || null;
			if (!canvas) {
				
				// CREATE NEW CANVAS
				var image = AssetManager.getImage(imageId);
				if (image) {
					canvas = <ImageCanvas>_newCanvas(image, _replaceColors[playerId]);

					// INSERT NEW CANVAS INTO CACHE
					_imageCanvi[canvasId] = canvas;
				}
			}
			return canvas;
		}

		function _newCanvas(image: HTMLImageElement, replaceColors: number[][]): HTMLCanvasElement {

			var cvs = document.createElement("canvas");
			var width = cvs.width = image.width;
			var height = cvs.height = image.height;

			var ctx = <CanvasRenderingContext2D> cvs.getContext("2d");
			ctx.drawImage(image, 0, 0);

			var imgData = ctx.getImageData(0, 0, width, height);
			var data = imgData.data;
			var i = 0;
			for (var y = 0; y < height; y++) {
				for (var x = 0; x < width; x++) {

					var dest: number[] = null;

					// CHECK REPLACEMENT SOURCE COLOR
					var long = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
					switch (long) {
						// REPLACE GRAY WITH DESTINATION COLOR
						case 0x818282: dest = replaceColors[0]; break;
						case 0x626363: dest = replaceColors[1]; break;
						case 0x494a4a: dest = replaceColors[2]; break;
						case 0x373838: dest = replaceColors[3]; break;
					}

					// IF REPLACEMENT IS FOUND, REPLACE WITH DEST COLOR
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
	}

}
