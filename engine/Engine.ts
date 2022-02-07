/// <reference path="_include.ts"/>

module Engine {

	interface StateWrapper {
		state: AppState;
		dom: JQuery;
	}

	var _loadingContainer: HTMLDivElement;
	var _namespace: Object;

	export var disableContextMenu = true;

	var _loaded: boolean;
	var _width: number;
	var _height: number;

	var _poppingStates: boolean;

	var _vendors: VendorInfo[] = [];
	var _stateList: AppState[] = [];
	var _globalState: GlobalState = null;
	var _stateMap: { [stateId: string]: AppState; } = {};

	var _updateStrategy: UpdateStrategy;
	var _changingStates: boolean;


	var _gameDom: JQuery;
	var _activeState: AppState;
	
	var _endingState: KnockoutObservable<AppState>;

	export function getWidth() { return _width; }
	export function getHeight() { return _height; }
	export function getEndingState() { return _endingState(); }

	export function setState(state: AppState, params?: QueryParams, data?: any, callback?: () => void): void;
	export function setState(stateId: string, params?: QueryParams, data?: any, callback?: () => void): void;
	export function setState(a: any, params?: QueryParams, data?: any, callback?: () => void): void {

		var newState: AppState = (a instanceof AppState ? a : getState(a));
		if (_changingStates || !newState || newState instanceof GlobalState)
			return;

		_changingStates = true;

		// END OLD STATE
		var oldState = _activeState;
		var oldDom: JQuery;
		if (oldState) {

			oldState.end();
			_endingState(oldState);

			oldDom = oldState.__dom;
			ko.cleanNode(oldDom.get()[0]);

			Input.unregister(oldState);

			// END UPDATE STRATEGY
			if (_updateStrategy) {
				_updateStrategy.end();
				_updateStrategy = null;
			}

			//_activeState(null); // prevent flickering when switching states for now
		}

		var hs = _makeHistory(newState, null, params, data);

		// CLEAR CURSOR
		Cursor.clear();

		var newDom = newState.__dom;

		// BIND KNOCKOUT
		ko.applyBindings(newState, newDom.get()[0]);

		// UI CREATED - INIT BINDINGS
		newState.bindEvents(newDom);

		// BEGIN NEW STATE
		newState.begin(hs, function (updateStrategy?: UpdateStrategy) {

			console.log(newState.id + " BEGIN");

			newDom.waitForImages(function () {
				
				// PUSH HISTORY STATE
				pushHistory(hs);

				// REGISTER STATE INPUT AND RESIZE
				Input.register(newState);

				newDom.appendTo(_gameDom).show();

				if (oldDom) {
					oldDom.remove();
				}

				// SET NEW STATE
				_activeState = newState;
				_endingState(null);

				// TRIGGER RESIZE
				_resize();

				// ON APP STATE CHANGE
				if(_globalState)
					_globalState.onAppStateChange(oldState, newState);

				// SET UPDATE STRATEGY OR DEFAULT
				_updateStrategy = updateStrategy || null;
				if (_updateStrategy) {

					// BEGIN UPDATE STRATEGY
					_updateStrategy.begin(function () {

						_changingStates = false;
						if (callback)
							callback();
					});

				} else {

					_changingStates = false;
					if (callback)
						callback();
				}

			}, function (a, b, c) {
				console.log(a, b, c);
			}, true);

		});

	}

	function _parseQuery(url: string): QueryParams {

		var qp: QueryParams = {};

		var a = url.split("?", 2);
		if (a.length === 2) {
			a = a[1].split("&");
			for (var i = a.length - 1; i !== -1; --i) {
				var p = a[i].split("=", 2);
				var key = p[0].trim();
				if (key) {
					var value = p[1];
					value = (value && (value = value.trim()) ? decodeURIComponent(value.replace(/\+/g, " ")) : undefined);
					qp[key] = value;
				}
			}
		}

		return qp;
	}

	function _makeHistory(state: AppState, title: string, params?: QueryParams, data?: any): HistoryState {

		if (!state)
			return null;

		var qs = "?state=" + state.id.toLowerCase();

		params = params || {};
		for (var key in params) {
			qs += "&" + encodeURIComponent(key);
			var value = params[key];
			if (value !== undefined && value !== null)
				qs += "=" + encodeURIComponent(value);
		}

		var hs: HistoryState = { stateId: state.id, params: params, queryString: qs, data: data };
		return hs;
	}

	function _popHistory(hs: HistoryState): void {

		if (!hs || !hs.stateId)
			return;

		_poppingStates = true;

		setState(hs.stateId, hs.params, hs.data, function () {

			_poppingStates = false;
		});
	}

	export function pushHistory(hs: HistoryState): HistoryState;
	export function pushHistory(state: AppState, title: string, params?: QueryParams, data?: any): HistoryState;
	export function pushHistory(a: any, title?: string, params?: QueryParams, data?: any): HistoryState {

		var hs: HistoryState = (a instanceof AppState ? _makeHistory(a, title, params, data) : a);
		if (hs) {

			if (!_poppingStates) {
				if (_loaded)
					history.pushState(hs, title, hs.queryString);
				else
					history.replaceState(hs, title, hs.queryString);
			}
		}
		return hs;
	}

	export function getState(stateId: string): AppState {
		if (!stateId)
			return null;
		return _stateMap[stateId.toLowerCase()] || null;
	}

	export function initGame(p: AppParams2, callback: () => void): void {

		window.addEventListener("popstate", function (evt: PopStateEvent) { _popHistory(evt.state); });
		window.addEventListener("resize", _resize);

		_gameDom = $("#game");

		_loaded = false;

		_loadVendorsAndStates(p.vendors, p.states, p.globalState, function () {

			Vendor.onVendorsLoaded();

			_endingState = ko.observable<AppState>();

			_initStates(function () {
				
				// PARSE INITIAL QUERY PARAMS
				var qp = _parseQuery(document.location.href);
				var state = getState(qp["state"]);
				delete qp["state"];

				if (!state) {
					state = p.initialState;
					qp = {};
				}

				setState(state, qp, undefined, function () {

					_loaded = true;

					callback();
				});

			});
		});

	}

	// LOADS VENDORS AND STATES IN PARALLEL
	function _loadVendorsAndStates(vendors: VendorInfo[], states: AppState[], globalState: GlobalState, callback: () => void): void {

		var async = new AsyncLock(callback);
		function unlock() { async.unlock(); }

		_vendors = vendors = $.merge(vendors, [Vendor.Knockout, Vendor.LZMA]);
		
		var debug = window.DEBUG;
		for (var i = vendors.length - 1; i !== -1; --i) {

			var vendor = vendors[i];
			if (vendor.__seen) {

				vendors.splice(i, 1);

			} else {
				
				var url = "";
				if (debug) {
					if (vendor.debug)
						url = VENDOR_DIRECTORY + vendor.debug;
					else if (vendor.release)
						url = VENDOR_DIRECTORY + vendor.release;
				} else {
					if (vendor.release)
						url = VENDOR_DIRECTORY + vendor.release;
					else if (vendor.debug)
						url = VENDOR_DIRECTORY + vendor.debug;
				}

				if (url !== "") {
					async.lock();
					FileUtil.loadScript(url, unlock);
				}
				
				vendor.__seen = true;
			}

		}

		_globalState = globalState;
		_stateList = states = $.merge(states, [globalState]);

		if (!debug) {
			// LOAD ALL STATE CSS
			async.lock();
			FileUtil.loadStylesheet(ROOT_DIRECTORY + "states.css", unlock);
		}

		for (var i = states.length - 1; i !== -1; --i) {

			var state = states[i];
			var stateId = state.id;
			
			var stateDom = $(document.createElement("div")).attr("app-state", stateId);

			var prefix = GAME_STATE_DIRECTORY + stateId + "/" + stateId;

			// LOAD STATE HTML
			async.lock();
			FileUtil.loadHtml(prefix + ".html", stateDom, unlock);

			if (debug) {
				// LOAD STATE CSS
				async.lock();
				FileUtil.loadStylesheet(prefix + ".css", unlock);
			}

			state.__dom = stateDom;

			_stateMap[stateId.toLowerCase()] = state;
		}

		unlock();
	}

	function _initStates(callback: () => void): void {

		// INITIALIZE ALL STATES
		var async = new AsyncLock(callback);
		function unlock() { async.unlock(); }

		var stateMap = _stateMap;
		for (var stateId in stateMap) {

			var state = stateMap[stateId];

			async.lock();
			state.initialize(unlock);
		}

		// BIND GLOBAL EVENTS
		if (_globalState) {

			var dom = _globalState.__dom;
			_globalState.bindEvents(dom);
			Input.register(_globalState);
			dom.appendTo(_gameDom);
		}

		unlock();
	}

	function _resize(): void {
		_width = Math.max(window.innerWidth, 1);
		_height = Math.max(window.innerHeight, 1);

		var state = _activeState;
		if (state)
			state.onResize(_width, _height);
	}

}