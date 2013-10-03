/// <reference path="_include.ts"/>

module Engine {

	export interface AppParams {
		id: string;
		initialState: string;
		states: string[];

		allowGamepad: boolean;
		allowTouch: boolean;
		disableContextMenu: boolean;
		enable2dPhysics: boolean;
		enable3d: boolean;
		showStats: boolean;
		title: string;

		customVendors?: string[];
	}

	export class App {

		private static _loadingContainer: JQuery = null;

		static namespace: Object;
		static instance: App;

		static load(container: JQuery, name: string): void {

			App._startLoading(container);

			// Verify that all characters are alpha-numeric, dash, or underscore
			if (!App._verifyAppName(name)) {
				throw "INVALID CHARACTERS IN APP NAME: " + name;
			}

			// load custom app module
			FileUtil.loadScript("app/" + name + "/" + name + ".js", function () {

				// e.x. Engine.MyGame
				var AppNamespace = <Object>Engine[name];
				if (!AppNamespace) {
					throw "APP NAMESPACE NOT FOUND: " + name;
				}

				// e.x. Engine.MyGame.Game
				var AppClass = AppNamespace["Game"];
				if (!AppClass) {
					throw "APP CLASS NOT FOUND: " + name;
				}

				// e.x. Engine.MyGame.Game extends App
				var app = <App>new AppClass();
				if (!(app instanceof App)) {
					throw "INSTANCE IS NOT AN INSTANCE OF APP CLASS";
				}

				App.namespace = AppNamespace;

				App.instance = app;

				// Set title
				document.title = app.title;

				// LOAD VENDORS
				app._loadVendors(function () {

					app._initDom(container);

					// CREATE STATES AND DOM FROM NAMES
					app._createStates(function () {

						// LOAD STATE ASSETS AND UI DOM
						app._initStates(function () {

							app._initInputHandlers();

							setTimeout(function () {

								// remove the loading screen
								App._endLoading();

								app._run();

							}, 0);

						}); // _initStates

					}); // _createStates

				}); // loadVendors

			}); // FileUtil.loadScript (current App script)

		}

		private static _verifyAppName(name: string): boolean {
			var charArray = name.match(/[A-Za-z-_0-9]/g);
			if (charArray) {
				return name === charArray.join("");
			}
			return false;
		}
		private static _startLoading(container: JQuery): void {

			var loadingContainer = App._loadingContainer = $(document.createElement("div"));
			loadingContainer.addClass("appLoading");
			container.append(loadingContainer);

			var _loadingText = $(document.createElement("p"));
			_loadingText.text("Loading...");
			loadingContainer.append(_loadingText);
		}
		private static _endLoading(): void {
			App._loadingContainer.fadeOut(700);
		}


		private _params: AppParams;

		// STAGE STUFF
		private _container: JQuery;
		private _appContainer: JQuery;
		private _gamepad: Gamepad;
		private _stats: Stats;

		private _states: AppState[];
		private _stateMap: { [id: string]: AppState; };
		private _changingStates: boolean;
		private _activeState: KnockoutObservable<AppState>;
		private _prevTime: number;
		private _elapsed: number;

		// INPUTS
		private _gamepadControls: { [name: string]: number; };
		private _keysDown: boolean[];
		private _mousePosition: Vec2;

		get id() { return this._params.id; }
		get title() { return this._params.title; }

		get width() { return this._container.width(); }
		get height() { return this._container.height(); }

		get activeState() { return this._activeState(); }
		get elapsed() { return this._elapsed; }

		constructor(params: AppParams) {
			this._params = params;

			this._states = [];
			this._stateMap = {};
			this._changingStates = false;
			this._activeState = ko.observable();
			this._prevTime = 0;
			this._elapsed = 0;

			this._gamepadControls = {};
			this._keysDown = [];
			this._mousePosition = new Vec2();
		}

		isKeyDown(key: Key): boolean {
			return this._keysDown[key] || false;
		}

		getMousePosition(): Vec2 {
			return this._mousePosition;
		}

		getState(id: string): AppState {
			return this._stateMap[id] || null;
		}

		setState(id: string): void;
		setState(state: AppState): void;
		setState(s: any) {

			try {

				if (this._changingStates) {
					return;
				}
				this._changingStates = true;

				var newState = <AppState>(s instanceof AppState ? s : this._stateMap[s]);
				if (!newState) {
					throw "State not found: " + s;
				}

				var oldState = this._activeState();
				if (newState === oldState) {
					oldState.end();
				}

				var self = this;
				newState.begin(function () {

					if (oldState && newState !== oldState) {
						oldState.end();
					}

					self._activeState(newState);

					self.onAppStateChange(oldState, newState);
					var states = self._states;
					for (var s = 0, ss = states.length; s < ss; ++s) {
						states[s].onAppStateChange(oldState, newState);
					}

					self._resize();

					self._changingStates = false;
				});

			} catch(ex) {
				console.log("UNABLE TO SET STATE: " + ex);

				this._changingStates = false;
			}

		}

		// VIRTUAL EVENT HANDLER METHODS
		update(deltaTime: number): void {
		}
		onAppStateChange(from: AppState, to: AppState): void {
		}

		/*
		onResize(width: number, height: number): void {
		}
		onKeyDown(key: Key): void {
		}
		onKeyUp(key: Key): void {
		}
		onMouseDown(x: number, y: number, button: Key): void {
		}
		onMouseUp(x: number, y: number, button: Key): void {
		}
		onMouseMove(x: number, y: number): void {
		}
		onMouseEnter(x: number, y: number): void {
		}
		onMouseLeave(x: number, y: number): void {
		}
		onMouseWheel(deltaY: number): void {
		}
		onGamepadConnect(): void {
		}
		onGamepadDisconnect(): void {
		}
		onGamepadTick(length: number): void {
		}
		onGamepadButtonDown(control: string): void {
		}
		onGamepadButtonUp(control: string): void {
		}
		onGamepadAxisChanged(axis: string, value: number): void {
		}
		*/


		private _loadVendors(callback: () => void): void {

			var vendors: string[] = [];

			var p = this._params;
			if (p.showStats) {
				vendors.push("vendor/stats.min.js");
			}

			if (p.enable3d) {
				vendors.push("vendor/three.min.js");
			}

			if (p.allowGamepad) {
				vendors.push("vendor/gamepad.js");
			}

			if (p.enable2dPhysics) {
				vendors.push("vendor/Box2dWeb-2.1.a.3.min.js");
			}

			if (p.customVendors) {
				vendors = vendors.concat(p.customVendors);
			}

			// LOAD VENDORS
			var async = new AsyncLock(callback);
			var unlock = function () { async.unlock(); }

			for (var v = 0, vv = vendors.length; v < vv; ++v) {
				async.lock();
				FileUtil.loadScript(vendors[v], unlock);
			}

			unlock();
		}

		private _initDom(container: JQuery): void {

			this._container = container;

			var p = this._params;

			if (p.showStats) {
				this._stats = new Stats();
				this._stats.setMode(0);
				this._stats.domElement.classList.add("stats");
				container.append(this._stats.domElement);
			}

			this._appContainer = $(document.createElement("div"))
				.addClass("app")
				.appendTo(container);
		}

		private _createStates(callback: () => void): void {

			var async = new AsyncLock(callback);
			var unlock = function () { async.unlock(); };

			var states = this._states;
			var stateMap = this._stateMap;

			var stateNames = this._params.states;
			for (var s = 0, ss = stateNames.length; s < ss; ++s) {
				var stateName = stateNames[s];

				var StateClass = App.namespace[stateName];
				if (!StateClass) {
					console.warn("APP STATE CLASS NOT FOUND: " + stateName);
					continue;
				}

				// e.x. Engine.MyGame.Game extends App
				var state = <AppState>new StateClass();
				if (!(state instanceof AppState)) {
					console.warn("INSTANCE OF " + stateName + " IS NOT AN INSTANCE OF APP STATE CLASS");
					continue;
				}

				// MAP STATES BY ID
				stateMap[state.id] = state;

				// PUSH STATE TO LIST
				states.push(state);

				async.lock();
				this._createStateDom(state, unlock);
			}

			unlock();
		}

		private _createStateDom(state: AppState, callback: () => void): void {

			var container = $(document.createElement("div"))
				.addClass("state")
				.addClass(state.id)
				.attr("data-bind", "visible: active")
				.appendTo(this._appContainer);

			container.append(state.sceneDom);
			container.append(state.uiDom);

			if (state.hasUI) {

				var prefix = "app/" + this.id + "/" + state.id + "/" + state.id;
				FileUtil.loadStylesheet(prefix + ".css", function () {

					FileUtil.loadHtml(prefix + ".html", state.uiDom, function () {

						ko.applyBindings(state, container.get()[0]);

						state.onUICreated(state.uiDom);
						callback();
					});

				});

			} else {
				ko.applyBindings(state, container.get()[0]);
				callback();
			}

		}

		private _initStates(callback: () => void): void {

			var async = new AsyncLock(callback);
			var unlock = function () { async.unlock(); };

			var states = this._states;
			for (var s = 0, ss = states.length; s < ss; ++s) {

				var state = states[s];

				// INITIALIZE STATE
				async.lock();
				state.initialize(unlock);
			}

			unlock();
		}

		private _initInputHandlers(): void {

			var self = this;
			var handler = function (methodName: string) {
				var method = <Function>self[methodName];
				return function (evt: Event) { method.call(self, evt); };
			};

			var stopEvent = function (evt: Event) {
				evt.preventDefault();
				evt.stopPropagation();
			};

			var p = this._params;

			window.addEventListener("resize", handler("_resize"));
			window.addEventListener("keydown", handler("_keyDown"));
			window.addEventListener("keyup", handler("_keyUp"));

			var container = this._container;
			container.on("mousedown", handler("_mouseDown"));
			container.on("mouseup", handler("_mouseUp"));
			container.on("mousemove", handler("_mouseMove"));
			container.on("mouseover", handler("_mouseEnter"));
			container.on("mouseout", handler("_mouseLeave"));
			container.on("mousewheel", handler("_mouseWheel"));
			container.on("DOMMouseScroll", handler("_mouseWheel"));	// FIREFOX

			if (p.disableContextMenu) {
				container.on("contextmenu", stopEvent);
			}

			if (p.allowGamepad) {
				var gamepad = this._gamepad = new Gamepad();
				gamepad.bind(Gamepad.Event.CONNECTED, handler("_gamepadConnect"));
				gamepad.bind(Gamepad.Event.DISCONNECTED, handler("_gamepadDisconnect"));
				gamepad.bind(Gamepad.Event.UNSUPPORTED, handler("_gamepadUnsupported"));
				gamepad.bind(Gamepad.Event.TICK, handler("_gamepadTick"));
				gamepad.bind(Gamepad.Event.BUTTON_DOWN, handler("_gamepadButtonDown"));
				gamepad.bind(Gamepad.Event.BUTTON_UP, handler("_gamepadButtonUp"));
				gamepad.bind(Gamepad.Event.AXIS_CHANGED, handler("_gamepadAxisChanged"));
				gamepad.init();
			}

		}

		private _run(): void {

			// trigger initial resize
			this._resize();

			// set initial state
			this.setState(this._params.initialState);

			this._prevTime = Date.now();
			this._loop();
		}

		private _loop(): void {

			var self = this;
			requestAnimationFrame(function () { self._loop(); });

			var curTime = Date.now();
			var deltaTime = curTime - this._prevTime;

			this._elapsed += deltaTime;

			this.update(deltaTime);

			var state = this._activeState();
			if (state) {
				state.update(deltaTime);
				state.draw();
			}

			if (this._stats) {
				this._stats.update();
			}
			this._prevTime = curTime;
		}


		private __callAppEvent(onEventName: string, args?: any[]): void {

			var method = <Function>this[onEventName];
			if (method) {
				method.apply(this, args);
			}

			var state = this._activeState();
			if (state) {
				var method = <Function>state[onEventName];
				if (method) {
					method.apply(state, args);
				}
			}
		}

		private _resize(): void {
			var container = this._container;
			var width = container.width();
			var height = container.height();

			this.__callAppEvent("onResize", [width, height]);
		}

		// STANDARD INPUT EVENTS
		private _keyDown(evt: KeyboardEvent): void {
			var key = <Key>evt.keyCode;

			this._keysDown[key] = true;

			this.__callAppEvent("onKeyDown", [key]);
		}
		private _keyUp(evt: KeyboardEvent): void {
			var key = <Key>evt.keyCode;

			this._keysDown[key] = false;

			this.__callAppEvent("onKeyUp", [key]);
		}
		private _mouseDown(evt: MouseEvent): void {
			var x = evt.offsetX;
			var y = evt.offsetY;
			var button = <Key>evt.button;
			
			this._keysDown[button] = true;
			
			this.__callAppEvent("onMouseDown", [x, y, button]);
		}
		private _mouseUp(evt: MouseEvent): void {
			var x = evt.offsetX;
			var y = evt.offsetY;
			var button = <Key>evt.button;

			this._keysDown[button] = false;

			this.__callAppEvent("onMouseUp", [x, y, button]);
		}
		private _mouseMove(evt: MouseEvent): void {
			var x = evt.offsetX;
			var y = evt.offsetY;

			var mp = this._mousePosition;
			mp.x = x;
			mp.y = y;

			this.__callAppEvent("onMouseMove", [x, y]);
		}
		private _mouseEnter(evt: MouseEvent): void {
			var x = evt.offsetX;
			var y = evt.offsetY;

			var mp = this._mousePosition;
			mp.x = x;
			mp.y = y;

			this.__callAppEvent("onMouseEnter", [x, y]);
		}
		private _mouseLeave(evt: MouseEvent): void {
			var x = evt.offsetX;
			var y = evt.offsetY;

			var mp = this._mousePosition;
			mp.x = x;
			mp.y = y;

			this.__callAppEvent("onMouseLeave", [x, y]);
		}
		private _mouseWheel(evt: WheelEvent): void {
			var deltaY = (<any>evt).wheelDeltaY

			this.__callAppEvent("onMouseWheel", [deltaY]);
		}

		// GAMEPAD INPUT EVENTS
		private _gamepadConnect(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD CONNECT");
			console.log(evt);
		
			this.__callAppEvent("onGamepadConnect");
		}
		private _gamepadDisconnect(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD DISCONNECT");
			console.log(evt);

			this.__callAppEvent("onGamepadDisconnect");
		}
		private _gamepadUnsupported(evt: GamepadConnectEvent): void {
			console.log("GAMEPAD UNSUPPORTED");
			console.log(evt);

			//__callAppEvent("onGamepadUnsupported");
		}
		private _gamepadTick(evt: GamepadTickEvent): void {
			var length = evt.length;

			this.__callAppEvent("onGamepadTick", [length]);
		}
		private _gamepadButtonDown(evt: GamepadButtonEventData): void {
			var control = evt.control;
			
			this._gamepadControls[control] = 1;

			this.__callAppEvent("onGamepadButtonDown", [control]);
		}
		private _gamepadButtonUp(evt: GamepadButtonEventData): void {
			var control = evt.control;

			this._gamepadControls[control] = 0;

			this.__callAppEvent("onGamepadButtonUp", [control]);
		}
		private _gamepadAxisChanged(evt: GamepadAxisEventData): void {
			var axis = evt.axis;
			var value = evt.value;

			if (Math.abs(value) < 0.08) {
				value = 0;
			}

			this._gamepadControls[axis] = value;

			this.__callAppEvent("onGamepadAxisChanged", [axis, value]);
		}

	}

}