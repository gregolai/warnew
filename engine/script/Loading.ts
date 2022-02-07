/// <reference path="_include.ts" />

module Engine {

	module Loading {

		var _dom: HTMLDivElement;

		export function start(container: HTMLElement): void {
			_dom = document.createElement("div");
			_dom.id = "loading";
			_dom.style.position = "absolute";
			_dom.style.width = "100%";
			_dom.style.height = "100%";
			_dom.style.backgroundColor = "#000";
			_dom.style.zIndex = "1";
			container.appendChild(_dom);

			// "Loading..." TEXT
			var text = document.createElement("p");
			text.innerText = "Loading...";
			text.style.position = "absolute";
			text.style.left = "0";
			text.style.right = "0";
			text.style.top = "50%";
			text.style.textAlign = "center";
			text.style.color = "#fff";
			_dom.appendChild(text);
		}

		export function end(fadeDuration: number, callback?: () => void): void {
			$(_dom).fadeOut(fadeDuration, callback);
		}
	}

}