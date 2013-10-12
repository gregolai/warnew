/// <reference path="_include.ts"/>

module Engine {

	export interface AppParams {
		initialState: string;
		states: string[];



		allowGamepad: boolean;
		allowTouch: boolean;
		cacheAssets: boolean;
		disableContextMenu: boolean;
		enable2dPhysics: boolean;
		enable3d: boolean;
		showStats: boolean;

		customVendors?: string[];
		statesDirectory?: string;
	}

	export class App implements InputListener {

		private static _loadingContainer: HTMLDivElement = null;

		static container: HTMLDivElement;
		static namespace: Object;
		static instance: App;

		static get width() { return App.container.offsetWidth; }
		static get height() { return App.container.offsetHeight; }

		static load(name: string): void {

			// CREATE CONTAINER
			App.container = document.createElement("div");
			App.container.id = "container";
			document.body.appendChild(App.container);

			// Verify that all characters are alpha-numeric, dash, or underscore
			if (!App._verifyAppName(name)) {
				throw "INVALID CHARACTERS IN APP NAME: " + name;
			}

			App._load(name, function () {

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

				// LOAD VENDORS
				app._loadVendors(function () {

					app._initDom();

					// CREATE STATES AND DOM FROM NAMES
					app._createStates(function () {

						// LOAD STATE ASSETS AND UI DOM
						app._initStates(function () {

							setTimeout(function () {

								// remove the loading screen
								App._endLoading();

								app._run();

							}, 0);

						}); // _initStates

					}); // _createStates

				}); // loadVendors

			}); // App._load

		}

		private static _verifyAppName(name: string): boolean {
			var charArray = name.match(/[A-Za-z-_0-9]/g);
			if (charArray) {
				return name === charArray.join("");
			}
			return false;
		}

		private static _load(appName: string, callback: ()=>void): void {

			document.body.style.backgroundColor = "#000";

			// LOAD MAIN STYLESHEET
			FileUtil.loadStylesheet(ROOT_DIRECTORY_FROM_APP + "style.css", function () {

				// LOADING UI
				var loadingContainer = App._loadingContainer = document.createElement("div");
				loadingContainer.id = "appLoading";
				App.container.appendChild(loadingContainer);
			
				var loadingText = document.createElement("p");
				loadingText.innerText = "Loading...";
				loadingContainer.appendChild(loadingText);


				// LOAD DEFAULT VENDORS AND GAME
				var async = new AsyncLock(function () {

					// LOAD APP
					FileUtil.loadScript(appName + ".js", callback);

				});
				var unlock = function () { async.unlock(); }

				// LOAD JQUERY
				async.lock();
				FileUtil.loadScript(ROOT_VENDOR_DIRECTORY + "jquery.min.js", unlock);

				// LOAD KNOCKOUT
				async.lock();
				FileUtil.loadScript(ROOT_VENDOR_DIRECTORY + "knockout.min.js", unlock);

				unlock();
			});
			
		}

		private static _endLoading(): void {

			// TODO: SPECIFY MINIMUM LOADING TIME
			setTimeout(function () {
				$(App._loadingContainer).fadeOut(700);
			}, 500);
		}


		private _params: AppParams;

		// STAGE STUFF
		private _container: HTMLDivElement;
		private _appContainer: JQuery;
		private _gamepad: Gamepad;
		private _stats: Stats;

		private _states: AppState[];
		private _stateMap: { [id: string]: AppState; };
		private _changingStates: boolean;
		private _activeState: KnockoutObservable<AppState>;
		private _prevTime: number;
		private _elapsed: number;

		get cacheAssets() { return this._params.cacheAssets; }
		get disableContextMenu() { return this._params.disableContextMenu; }

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
		}

		getState(id: string): AppState {
			return this._stateMap[id] || null;
		}

		setState(id: string): void;
		setState(state: AppState): void;
		setState(s: any) {

			//try {

				if (this._changingStates) {
					return;
				}
				this._changingStates = true;

				var newState = <AppState>(s instanceof AppState ? s : this._stateMap[s]);
				if (!newState) {
					throw "State not found: " + s;
				}

				var oldState = this._activeState();
				if (oldState) {
					oldState.end();
					Input.unregister(oldState);
					this._activeState(null);
				}

				var self = this;
				newState.begin(function () {

					self._activeState(newState);

					self.onAppStateChange(oldState, newState);
					var states = self._states;
					for (var s = 0, ss = states.length; s < ss; ++s) {
						states[s].onAppStateChange(oldState, newState);
					}

					Input.register(newState);
					Input.triggerResize();

					self._changingStates = false;
				});

			//} catch(ex) {
			//	console.log("UNABLE TO SET STATE: " + ex);
			//	this._changingStates = false;
			//}

		}

		// VIRTUAL EVENT HANDLER METHODS
		update(deltaTime: number): void {
		}
		onAppStateChange(from: AppState, to: AppState): void {
		}


		/*
		onWindowResize(width: number, height: number): void {
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
				vendors.push(ROOT_VENDOR_DIRECTORY + "stats.min.js");
			}

			if (p.enable3d) {
				vendors.push(ROOT_VENDOR_DIRECTORY + "three.min.js");
			}

			if (p.allowGamepad) {
				vendors.push(ROOT_VENDOR_DIRECTORY + "gamepad.js");
			}

			if (p.enable2dPhysics) {
				vendors.push(ROOT_VENDOR_DIRECTORY + "Box2dWeb-2.1.a.3.min.js");
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

		private _initDom(): void {

			Input.register(this);

			var p = this._params;

			if (p.showStats) {
				this._stats = new Stats();
				this._stats.setMode(0);
				this._stats.domElement.classList.add("stats");
				App.container.appendChild(this._stats.domElement);
			}

			this._appContainer = $(document.createElement("div"))
				.addClass("app")
				.appendTo(App.container);
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

				var prefix = (this._params.statesDirectory || "") + state.id + "/" + state.id;
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

		private _run(): void {

			// trigger initial resize
			Input.triggerResize();

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

	}

}