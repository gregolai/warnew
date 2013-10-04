/// <reference path="_include.ts" />

module Engine {

	export interface InputListener {

		onKeyDown?(key: Key): void;
		onKeyUp?(key: Key): void;

		onMouseDown?(x: number, y: number, button: Key): void;
		onMouseUp?(x: number, y: number, button: Key): void;
		onMouseMove?(x: number, y: number): void;
		onMouseWheel?(deltaY: number): void;

		onResize?(width: number, height: number): void;

		onGamepadConnect?(): void;
		onGamepadDisconnect?(): void;
		onGamepadTick?(length: number): void;
		onGamepadButtonDown?(control: string): void;
		onGamepadButtonUp?(control: string): void;
		onGamepadAxisChanged?(axis: string, value: number): void;
	}

	export class Input {

		private static _initialized: boolean;
		private static _container: HTMLElement;
		private static _mousePosition: Vec2;
		private static _keysDown: boolean[];
		private static _gamepad: Gamepad;
		private static _gamepadControls: { [name: string]: number; };
		private static _listeners: InputListener[];

		static isKeyDown(key: Key): boolean {
			return Input._keysDown[key] || false;
		}

		static getMousePosition(): Vec2 {
			return Input._mousePosition;
		}

		static register(listener: InputListener): void {

			if (!Input._initialized) {
				Input._init();
				Input._initialized = true;
			}

			if (!listener || Input._listeners.indexOf(listener) !== -1) {
				return;
			}
			Input._listeners.push(listener);
		}

		static unregister(listener: InputListener): void {

			if (!listener) {
				return;
			}

			var index = Input._listeners.indexOf(listener);
			if (index === -1) {
				return;
			}
			Input._listeners.splice(index, 1);
		}

		static triggerResize(): void {
			Input._resize();
		}

		private static _init(): void {
			Input._mousePosition = new Vec2();
			Input._keysDown = [];
			Input._gamepad = null;
			Input._gamepadControls = {};
			Input._listeners = [];

			window.addEventListener("keydown", Input._keyDown, false);
			window.addEventListener("keyup", Input._keyUp, false);

			App.container.addEventListener("mousedown", Input._mouseDown, false);
			window.addEventListener("mouseup", Input._mouseUp, false);
			window.addEventListener("mousemove", Input._mouseMove, false);
			App.container.addEventListener("mousewheel", Input._mouseWheel, false);
			App.container.addEventListener("DOMMouseScroll", Input._mouseWheel, false);

			window.addEventListener("resize", Input._resize, false);

			if (typeof Gamepad !== "undefined") {
				var gamepad = Input._gamepad = new Gamepad();
				gamepad.bind(Gamepad.Event.CONNECTED, Input._gamepadConnect);
				gamepad.bind(Gamepad.Event.DISCONNECTED, Input._gamepadDisconnect);
				gamepad.bind(Gamepad.Event.TICK, Input._gamepadTick);
				gamepad.bind(Gamepad.Event.BUTTON_DOWN, Input._gamepadButtonDown);
				gamepad.bind(Gamepad.Event.BUTTON_UP, Input._gamepadButtonUp);
				gamepad.bind(Gamepad.Event.AXIS_CHANGED, Input._gamepadAxisChanged);
				gamepad.init();
			}
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

		private static _resize(): void {

			var width = App.container.offsetWidth;
			var height = App.container.offsetHeight;

			Input.__broadcast("onResize", [width, height]);
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