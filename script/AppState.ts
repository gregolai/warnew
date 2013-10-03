/// <reference path="_include.ts" />

module Engine {

	export interface AppStateParams {
		hasUI: boolean;
	}

	export class AppState implements InputListener {

		private _params: AppStateParams;

		private _sceneDom: JQuery;
		private _uiDom: JQuery;

		private _active: KnockoutComputed<boolean>;

		get id() { return <string>((<any>this).constructor).name; }
		get hasUI() { return this._params.hasUI; }
		get sceneDom() { return this._sceneDom; }
		get uiDom() { return this._uiDom; }
		get active() { return this._active(); }

		constructor(params: AppStateParams) {

			this._params = params;

			this._sceneDom = $(document.createElement("div")).addClass("scene");
			this._uiDom = $(document.createElement("div")).addClass("ui");

			this._active = ko.computed(function () {
				return App.instance.activeState === this;
			}, this);
		}

		create3dSurface(): THREE.WebGLRenderer {
			var renderer = new THREE.WebGLRenderer();
			$(renderer.domElement)
				.css("position", "absolute")
				.appendTo(this._sceneDom);
			return renderer;
		}

		create2dSurface(): Surface2D {
			var container = <Node>this._sceneDom.get()[0];
			var surface = new Surface2D(container);
			return surface;
		}

		// This is the order in which these events are called:
		// onUICreated is only called if AppState has ui
		onUICreated(dom: JQuery): void {
		}
		initialize(callback: () => void): void {
			callback();
		}
		begin(callback: () => void): void {
			callback();
		}
		end(): void {
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
		draw(): void {
		}
	}

}