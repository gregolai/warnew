/// <reference path="_include.ts" />

module Engine {

	export module Input {

		var _initialized: boolean;
		var _container: HTMLElement;
		var _mousePosition: Vec2;
		var _keysDown: boolean[];
		var _gamepad: Gamepad;
		var _gamepadControls: { [name: string]: number; };
		var _listeners: InputListener[];
		var _curEvent: Event;

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

		export function triggerResize(): void {
			_resize(null);
		}

		function _init(): void {
			_mousePosition = new Vec2();
			_keysDown = [];
			_gamepad = null;
			_gamepadControls = {};
			_listeners = [];

			window.addEventListener("contextmenu", _contextMenu, true);
			window.addEventListener("blur", _blur, true);
			window.addEventListener("keydown", _keyDown, false);
			window.addEventListener("keyup", _keyUp, false);

			window.addEventListener("mouseout", _mouseMove, false);
			window.addEventListener("mouseover", _mouseMove, false);

			App.container.addEventListener("mousedown", _mouseDown, false);
			window.addEventListener("mouseup", _mouseUp, false);
			window.addEventListener("mousemove", _mouseMove, false);
			App.container.addEventListener("mousewheel", _mouseWheel, false);
			App.container.addEventListener("DOMMouseScroll", _mouseWheel, false);

			window.addEventListener("resize", _resize, false);

			if (typeof Gamepad !== "undefined") {
				var gamepad = _gamepad = new Gamepad();
				gamepad.bind(Gamepad.Event.CONNECTED, _gamepadConnect);
				gamepad.bind(Gamepad.Event.DISCONNECTED, _gamepadDisconnect);
				gamepad.bind(Gamepad.Event.TICK, _gamepadTick);
				gamepad.bind(Gamepad.Event.BUTTON_DOWN, _gamepadButtonDown);
				gamepad.bind(Gamepad.Event.BUTTON_UP, _gamepadButtonUp);
				gamepad.bind(Gamepad.Event.AXIS_CHANGED, _gamepadAxisChanged);
				gamepad.init();
			}
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

			if (App.instance.disableContextMenu) {

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

		function _resize(evt: Event): void {

			var width = Math.max(App.container.offsetWidth, 1);
			var height = Math.max(App.container.offsetHeight, 1);

			__broadcast("onResize", evt, [width, height]);
		}





		// GAMEPAD INPUT EVENTS
		function _gamepadConnect(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD CONNECT");
			console.log(evt);

			__broadcast("onGamepadConnect", null);
		}
		function _gamepadDisconnect(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD DISCONNECT");
			console.log(evt);

			__broadcast("onGamepadDisconnect", null);
		}
		function _gamepadTick(evt: GamepadTickEvent): void {

			__broadcast("onGamepadTick", null, [evt.length]);
		}
		function _gamepadButtonDown(evt: GamepadButtonEventData): void {

			_gamepadControls[evt.control] = 1;

			__broadcast("onGamepadButtonDown", null, [evt.control]);
		}
		function _gamepadButtonUp(evt: GamepadButtonEventData): void {

			_gamepadControls[evt.control] = 0;

			__broadcast("onGamepadButtonUp", null, [evt.control]);
		}
		function _gamepadAxisChanged(evt: GamepadAxisEventData): void {

			var value = evt.value;
			if (Math.abs(value) < 0.08) {
				value = 0;
			}

			_gamepadControls[evt.axis] = value;

			__broadcast("onGamepadAxisChanged", null, [evt.axis, value]);
		}
	}

}