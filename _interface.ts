/// <reference path="_include.ts"/>

module Engine {

	export interface AssetData {
		id: string;
	}

	export interface AssetDataCursor extends AssetData {
		filename: string;
		x: number;
		y: number;
	}

	export interface AssetDataFont extends AssetData {
		styles: BitFlags<FontStyle>;
	}

	export interface AssetDataImage extends AssetData {
		filename: string;
	}

	export interface AssetDataSound extends AssetData {
		filename: string;
	}

	export interface AssetDataShader extends AssetData {
		filename: string;
	}

	export interface AssetsToLoad {
		cursors?: AssetDataCursor[];
		fonts?: AssetDataFont[];
		images?: AssetDataImage[];
		sounds?: AssetDataSound[];
		shaders?: AssetDataShader[];
	}

	// USEFUL FOR BIT-FLAGGED DATA
	export interface BitFlags<T> extends Number { }

	export interface FontStyles {
		regular: string;
		italic?: string;
		semiBold?: string;
		semiBoldItalic?: string;
		bold?: string;
		boldItalic?: string;
		light?: string;
		lightItalic?: string;
		extraLight?: string;
		extraLightItalic?: string;
	}

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

	export interface ShaderAsset {
		url: string;
		vertexShader: string;
		fragmentShader: string;
	}

}