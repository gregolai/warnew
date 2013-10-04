/// <reference path="_include.ts"/>

module Engine {

	// USEFUL FOR BIT-FLAGGED DATA
	export interface BitFlags<T> { number; }

	// TOUCH EVENTS
	export interface Touch {
		identifier: number;
		target: EventTarget;
		screenX: number;
		screenY: number;
		clientX: number;
		clientY: number;
		pageX: number;
		pageY: number;
	}

	export interface TouchList {
		length: number;
		item(index: number): Touch;
		identifiedTouch(identifier: number): Touch;
	}

	export interface TouchEvent extends UIEvent {
		touches: TouchList;
		targetTouches: TouchList;
		changedTouches: TouchList;
	}

	export interface GestureEvent extends Event {
		scale: number;
		rotation: number;
	}

}