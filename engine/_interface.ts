/// <reference path="_include.ts"/>

interface Window {
	DEBUG: boolean;
}

module Engine {

	export interface AppParams {
		initialState: string;
		globalStates: string[];
		states: string[];

		vendors: VendorInfo[];
	}

	export interface AppParams2 {
		initialState: AppState;
		globalState: GlobalState;
		states: AppState[];

		vendors: VendorInfo[];
	}


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

	export interface BitFlags<T> extends Number {
	}

	export interface EntryPoint {
		(): AppParams;
	};

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

	export interface HistoryState {
		stateId: string;
		params: QueryParams;
		queryString: string;
		data?: any;
	}

	export interface InputListener {

		onKeyDown?(key: Key): void;
		onBufferedKeyDown?(key: Key): void;
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

	export interface QueryParams {
		[key: string]: string;
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

	export interface VendorInfo {
		__seen?: boolean;
		__depLevel?: number;
		__loaded?: boolean;

		debug?: string;
		release?: string;
	}

}