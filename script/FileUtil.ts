/// <reference path="_include.ts" />

module Engine {

	export module FileUtil {

		var _pathSuffix = "?" + Date.now();
		var _head = <HTMLHeadElement>document.getElementsByTagName("head")[0];

		export function loadScript(url: string, callback: () => void): void {
			var s = <HTMLScriptElement>document.createElement("script");
			s.type = "text/javascript";
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
			var href = url + _pathSuffix;
			container.load(href, function (response: string, status: string, xhr: JQueryXHR) {
				if (status === "error") {
					throw "Error loading HTML: " + xhr.status + " " + xhr.statusText;
				}
				callback();
			});
		}

		export function loadCssAndHtml(prefix: string, container: JQuery, callback: () => void): void {
			loadStylesheet(prefix + ".css", function () {
				loadHtml(prefix + ".html", container, callback);
			});
		}
	}

}