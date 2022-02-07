/// <reference path="_include.ts" />

module Engine {

	export interface IAppState {
		id: string;
		initialize(callback: () => void): void;
		bindEvents(dom: JQuery): void;
	}

	/*
	export class StateBase {

		__dom: JQuery;

		id: string;

		constructor() {
			this.id = <string>((<any>this).constructor).name;
		}

		initialize(callback: () => void): void {
			callback();
		}
	}

	export class TransitionState extends StateBase {

		begin(from: StateBase, to: StateBase, callback: () => void): void {
			callback();
		}
		end(): void {
		}
	}
	*/

	export class AppState implements InputListener {

		__dom: JQuery;

		id: string;
		//get id() { return <string>((<any>this).constructor).name; }

		isEnding() { return Engine.getEndingState() === this; }

		constructor() {
			this.id = <string>((<any>this).constructor).name;
		}

		// This is the order in which these events are called:
		// onUICreated is only called if AppState has ui
		initialize(callback: () => void): void {
			callback();
		}
		bindEvents(dom: JQuery): void {
		}
		begin(hs: HistoryState, callback: (updateStrategy?: UpdateStrategy) => void): void {
			callback();
		}
		end(): void {
		}

		// VIRTUAL EVENT HANDLER METHODS
		fixedUpdate(): void {
		}
		update(deltaTime: number): void {
		}
		draw(): void {
		}

		onResize(width: number, height: number): void {
		}
		/*
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
	}

	export class GlobalState extends AppState {

		onAppStateChange(from: AppState, to: AppState): void {
		}

	}

}