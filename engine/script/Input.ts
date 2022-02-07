/// <reference path="_include.ts" />

/// <reference path="Vec2.ts" />

module Engine {

	export module Input {

		var _initialized: boolean = false;
		var _mousePosition: Vec2 = new Vec2();
		var _keysDown: boolean[] = [];
		var _gamepad: Gamepad = null;
		var _gamepadControls: { [name: string]: number; } = {};
		var _listeners: InputListener[] = [];
		var _curEvent: Event = null;

		export function isKeyDown(key: Key): boolean {
			return _keysDown[key] || false;
		}

		export function getMousePosition(): Vec2 {
			return _mousePosition;
		}

		export function preventDefault(): void {
			if (_curEvent) {
				_curEvent.preventDefault();
				_curEvent.stopPropagation();
			}
		}

		export function register(listener: InputListener): void {

			if (!_initialized) {
				_init();
				_initialized = true;
			}

			if (!listener || _listeners.indexOf(listener) !== -1) {
				return;
			}
			_listeners.push(listener);
		}

		export function unregister(listener: InputListener): void {

			if (!listener) {
				return;
			}

			var index = _listeners.indexOf(listener);
			if (index === -1) {
				return;
			}
			_listeners.splice(index, 1);
		}

		function _init(): void {

			window.addEventListener("contextmenu", _contextMenu, true);
			window.addEventListener("blur", _blur, true);
			window.addEventListener("keydown", _keyDown, false);
			window.addEventListener("keyup", _keyUp, false);

			window.addEventListener("mouseout", _mouseMove, false);
			window.addEventListener("mouseover", _mouseMove, false);

			document.body.addEventListener("mousedown", _mouseDown, false);
			window.addEventListener("mouseup", _mouseUp, false);
			window.addEventListener("mousemove", _mouseMove, false);

			document.body.addEventListener("mousewheel", _mouseWheel, false);
			document.body.addEventListener("DOMMouseScroll", _mouseWheel, false);
		}

		function _resetAllKeys(): void {
			for (var i = 0, ii = _keysDown.length; i < ii; ++i) {
				if (_keysDown[i]) {
					_keysDown[i] = false;
					__broadcast("onKeyUp", null, [i]);
				}
			}
		}

		function __broadcast(onEventName: string, evt: Event, args?: any[]): void {

			_curEvent = evt;

			var listeners = _listeners;
			for (var i = 0, ii = listeners.length; i < ii; ++i) {
				var listener = listeners[i];
				var method = <Function>listener[onEventName];
				if (method) {
					method.apply(listener, args);
				}
			}
		}

		function _contextMenu(evt: Event): void {

			if (Engine.disableContextMenu) {

				if (isKeyDown(Key.KEY_CTRL) && isKeyDown(Key.KEY_SHIFT)) {
					// SHOW CONTEXT MENU
					_resetAllKeys();
				} else {
					// HIDE CONTEXT MENU
					evt.preventDefault();
					evt.stopPropagation();
				}

			} else {
				// SHOW CONTEXT MENU
				_resetAllKeys();
			}

		}

		function _blur(evt: Event): void {

			_resetAllKeys();
		}

		function _keyDown(evt: KeyboardEvent): void {

			if (!_keysDown[evt.keyCode]) {

				_keysDown[evt.keyCode] = true;

				__broadcast("onKeyDown", evt, [evt.keyCode]);
			}

			__broadcast("onBufferedKeyDown", evt, [evt.keyCode]);
		}
		function _keyUp(evt: KeyboardEvent): void {

			if (_keysDown[evt.keyCode]) {

				_keysDown[evt.keyCode] = false;

				__broadcast("onKeyUp", evt, [evt.keyCode]);
			}

		}
		function _mouseDown(evt: MouseEvent): void {

			_keysDown[evt.button] = true;
			
			__broadcast("onMouseDown", evt, [evt.pageX, evt.pageY, evt.button]);
		}
		function _mouseUp(evt: MouseEvent): void {

			_keysDown[evt.button] =  false;

			__broadcast("onMouseUp", evt, [evt.pageX, evt.pageY, evt.button]);
		}
		function _mouseMove(evt: MouseEvent): void {
			
			var x = _mousePosition.x = evt.pageX;
			var y = _mousePosition.y = evt.pageY;
			
			__broadcast("onMouseMove", evt, [x, y]);
		}
		function _mouseWheel(evt: WheelEvent): void {

			var delta = (<any>evt).wheelDelta || -evt.detail;

			__broadcast("onMouseWheel", evt, [delta]);
		}
	}

}