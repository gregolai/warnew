/// <reference path="_include.d.ts" />
/// <reference path="Vec2.d.ts" />
declare module Engine.Input {
    function isKeyDown(key: Engine.Key): boolean;
    function getMousePosition(): Engine.Vec2;
    function preventDefault(): void;
    function register(listener: Engine.InputListener): void;
    function unregister(listener: Engine.InputListener): void;
}
