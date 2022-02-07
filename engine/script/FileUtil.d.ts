/// <reference path="_include.d.ts" />
declare module Engine.FileUtil {
    interface Batch {
        css?: string[];
        html?: {
            url: string;
            dom: JQuery;
        }[];
        js?: string[];
    }
    function loadScript(url: string, callback: () => void): void;
    function loadStylesheet(url: string, callback: () => void): void;
    function loadHtml(url: string, container: JQuery, callback: () => void): void;
    function loadBatch(b: Batch, callback: () => void): void;
}
