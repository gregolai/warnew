/// <reference path="_include.ts" />

module Engine {

	export interface InputListener {

		onKeyDown?(key: Key): void;
		onKeyUp?(key: Key): void;

		onMouseDown?(x: number, y: number, button: Key): void;
		onMouseUp?(x: number, y: number, button: Key): void;
		onMouseMove?(x: number, y: number): void;
		onMouseWheel?(deltaY: number): void;

		onWindowResize?(width: number, height: number): void;

		onGamepadConnect?(): void;
		onGamepadDisconnect?(): void;
		onGamepadTick?(length: number): void;
		onGamepadButtonDown?(control: string): void;
		onGamepadButtonUp?(control: string): void;
		onGamepadAxisChanged?(axis: string, value: number): void;
	}

	export class Input {

		private static _container: HTMLElement;
		private static _mousePosition: Vec2;
		private static _keysDown: boolean[];
		private static _gamepad: Gamepad;
		private static _gamepadControls: { [name: string]: number; };
		private static _listeners: InputListener[];
		private static _rawListenerTypes: { [type: string]: boolean; };

		static isKeyDown(key: Key): boolean {
			return Input._keysDown[key] || false;
		}

		static getMousePosition(): Vec2 {
			return Input._mousePosition;
		}

		static init(container: HTMLElement): void {
			Input._container = container;
			Input._mousePosition = new Vec2();
			Input._keysDown = [];
			Input._gamepad = null;
			Input._gamepadControls = {};
			Input._listeners = [];
			Input._rawListenerTypes = {};
		}

		static register(listener: InputListener): void {

			if (Input._listeners.indexOf(listener) !== -1) {
				return;
			}
			Input._listeners.push(listener);

			if (listener.onKeyDown) {
				Input._addRawListener(window, "keydown", Input._keyDown, false);
			}

			if (listener.onKeyUp) {
				Input._addRawListener(window, "keyup", Input._keyUp, false);
			}

			if (listener.onMouseDown) {
				Input._addRawListener(Input._container, "mousedown", Input._mouseDown, false);
			}

			if (listener.onMouseUp) {
				Input._addRawListener(window, "mouseup", Input._mouseUp, false);
			}

			if (listener.onMouseMove) {
				Input._addRawListener(window, "mousemove", Input._mouseMove, false);
			}

			if (listener.onMouseWheel) {
				Input._addRawListener(Input._container, "mousewheel", Input._mouseWheel, false);
				Input._addRawListener(Input._container, "DOMMouseScroll", Input._mouseWheel, false);	// FIREFOX
			}

			if (listener.onWindowResize) {
				Input._addRawListener(window, "resize", Input._windowResize, false);
			}


			if (listener.onGamepadConnect) {
				Input._addRawGamepadListener(Gamepad.Event.CONNECTED, Input._gamepadConnect);
			}

			if (listener.onGamepadDisconnect) {
				Input._addRawGamepadListener(Gamepad.Event.DISCONNECTED, Input._gamepadDisconnect);
			}

			if (listener.onGamepadTick) {
				Input._addRawGamepadListener(Gamepad.Event.TICK, Input._gamepadTick);
			}

			if (listener.onGamepadButtonDown) {
				Input._addRawGamepadListener(Gamepad.Event.BUTTON_DOWN, Input._gamepadButtonDown);
			}

			if (listener.onGamepadButtonUp) {
				Input._addRawGamepadListener(Gamepad.Event.BUTTON_UP, Input._gamepadButtonUp);
			}

			if (listener.onGamepadAxisChanged) {
				Input._addRawGamepadListener(Gamepad.Event.AXIS_CHANGED, Input._gamepadAxisChanged);
			}

		}

		static unregister(listener: InputListener): void {

			var index = Input._listeners.indexOf(listener);
			if (index === -1) {
				return;
			}
			Input._listeners.splice(index, 1);
		}

		private static _addRawListener(target: EventTarget, type: string, callback: EventListener, capture: boolean): void {

			var longType = type + ", capture:" + capture;
			if (Input._rawListenerTypes[longType]) {
				return;
			}
			Input._rawListenerTypes[longType] = true;
			target.addEventListener(type, callback, capture);
		}

		private static _addRawGamepadListener(type: string, callback: (event: GamepadEvent) => void): void {

			var longType = "gamepad_" + type;
			if (Input._rawListenerTypes[longType]) {
				return;
			}
			Input._rawListenerTypes[longType] = true;

			if (!Input._gamepad) {
				Input._gamepad = new Gamepad();
				Input._gamepad.init();
			}
			Input._gamepad.bind(type, callback);
		}

		private static __broadcast(onEventName: string, args?: any[]): void {

			var listeners = Input._listeners;
			for (var i = 0, ii = listeners.length; i < ii; ++i) {
				var listener = listeners[i];
				var method = <Function>listener[onEventName];
				if (method) {
					method.apply(listener, args);
				}
			}
		}

		private static _keyDown(evt: KeyboardEvent): void {

			Input._keysDown[evt.keyCode] = true;

			Input.__broadcast("onKeyDown", [evt.keyCode]);
		}
		private static _keyUp(evt: KeyboardEvent): void {

			Input._keysDown[evt.keyCode] = false;

			Input.__broadcast("onKeyUp", [evt.keyCode]);
		}
		private static _mouseDown(evt: MouseEvent): void {

			Input._keysDown[evt.button] = true;
			
			Input.__broadcast("onMouseDown", [evt.offsetX, evt.offsetY, evt.button]);
		}
		private static _mouseUp(evt: MouseEvent): void {

			Input._keysDown[evt.button] =  false;

			Input.__broadcast("onMouseUp", [evt.offsetX, evt.offsetY, evt.button]);
		}
		private static _mouseMove(evt: MouseEvent): void {

			Input._mousePosition.x = evt.offsetX;
			Input._mousePosition.y = evt.offsetY;

			Input.__broadcast("onMouseMove", [evt.offsetX, evt.offsetY]);
		}
		private static _mouseWheel(evt: WheelEvent): void {

			var delta = (<any>evt).wheelDelta || evt.detail;

			Input.__broadcast("onMouseWheel", [delta]);
		}

		private static _windowResize(): void {

			var width = Input._container.offsetWidth;
			var height = Input._container.offsetHeight;

			Input.__broadcast("onWindowResize", [width, height]);
		}





		// GAMEPAD INPUT EVENTS
		private static _gamepadConnect(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD CONNECT");
			console.log(evt);

			Input.__broadcast("onGamepadConnect");
		}
		private static _gamepadDisconnect(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD DISCONNECT");
			console.log(evt);

			Input.__broadcast("onGamepadDisconnect");
		}
		private static _gamepadTick(evt: GamepadTickEvent): void {

			Input.__broadcast("onGamepadTick", [evt.length]);
		}
		private static _gamepadButtonDown(evt: GamepadButtonEventData): void {

			Input._gamepadControls[evt.control] = 1;

			Input.__broadcast("onGamepadButtonDown", [evt.control]);
		}
		private static _gamepadButtonUp(evt: GamepadButtonEventData): void {

			Input._gamepadControls[evt.control] = 0;

			Input.__broadcast("onGamepadButtonUp", [evt.control]);
		}
		private static _gamepadAxisChanged(evt: GamepadAxisEventData): void {

			var value = evt.value;
			if (Math.abs(value) < 0.08) {
				value = 0;
			}

			Input._gamepadControls[evt.axis] = value;

			Input.__broadcast("onGamepadAxisChanged", [evt.axis, value]);
		}
	}

}