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
