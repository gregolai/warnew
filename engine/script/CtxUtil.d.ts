/// <reference path="_include.d.ts" />
declare module Engine.CtxUtil {
    function path(ctx: CanvasRenderingContext2D, points: Engine.Vec2[], offset?: Engine.Vec2, joinLast?: boolean): void;
    enum TextAlign {
        Left,
        Center,
        Right,
    }
    function fillTextWrapped(ctx: CanvasRenderingContext2D, text: string, lineHeight: number, align: TextAlign, marginX: number, marginY: number, width: number): number;
}
