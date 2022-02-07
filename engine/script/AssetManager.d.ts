/// <reference path="_include.d.ts" />
declare module Engine.AssetManager {
    function load(assets: Engine.AssetsToLoad, callback: () => void): void;
    function getCursor(id: string): Engine.Cursor;
    function getFont(id: string): Engine.Font;
    function getImage(id: string): HTMLImageElement;
    function getShader(id: string): Engine.ShaderAsset;
    function getSound(id: string): HTMLAudioElement;
}
