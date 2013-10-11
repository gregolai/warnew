/// <reference path="_include.ts" />

module Engine {

	export module CtxUtil {

		export function path(ctx: CanvasRenderingContext2D, points: Vec2[], offset?: Vec2, joinLast: boolean = true): void {
			var numPoints = points.length;
			if (numPoints === 0) { return; }

			var offX: number, offY: number;
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

		export enum TextAlign {
			Left,
			Center,
			Right
		}
		export function fillTextWrapped(ctx: CanvasRenderingContext2D, text: string, lineHeight: number,
			align: CtxUtil.TextAlign, marginX: number, marginY: number, width: number) {

			width = width - 2 * marginX;

			var getLeft = function (line) {
				var metrics = ctx.measureText(line);
				if (align == TextAlign.Left) { return marginX; }
				if (align == TextAlign.Center) { return marginX + (width - metrics.width) * 0.5; }
				return marginX + width - metrics.width;
			}
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

	}

}