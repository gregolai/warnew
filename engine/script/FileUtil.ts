/// <reference path="_include.ts" />

module Engine {

	export module FileUtil {

		export interface Batch {
			css?: string[];
			html?: { url: string; dom: JQuery; }[];
			js?: string[];
		}

		var _pathSuffix = window.DEBUG ? "?" + Date.now() : "";
		var _head = document.getElementsByTagName("head")[0];

		export function loadScript(url: string, callback: () => void): void {

			var s = <HTMLScriptElement>document.createElement("script");
			s.type = "text/javascript";
			s.async = true;
			s.onload = function () { callback(); };
			s.onerror = function () { throw "Error loading script: " + url; };
			s.src = url + _pathSuffix;
			_head.appendChild(s);

		}

		export function loadStylesheet(url: string, callback: () => void): void {

			var s = <HTMLLinkElement>document.createElement("link");
			s.type = "text/css";
			s.rel = "stylesheet";
			s.onload = function () { callback(); };
			s.onerror = function () { throw "Error loading stylesheet: " + url; };
			s.href = url + _pathSuffix;
			_head.appendChild(s);

		}

		export function loadHtml(url: string, container: JQuery, callback: () => void): void {
			
			container.load(url + _pathSuffix, function (response: string, status: string, xhr: JQueryXHR) {
				if (status === "error") {
					throw "Error loading HTML: " + xhr.status + " " + xhr.statusText;
				}
				callback();
			});
		}

		export function loadBatch(b: Batch, callback: () => void): void {

			var async = new AsyncLock(callback, true);
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
	}

}