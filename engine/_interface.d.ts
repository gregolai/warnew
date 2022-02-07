/// <reference path="_include.d.ts" />
interface Window {
    DEBUG: boolean;
}
declare module Engine {
    interface AppParams {
        initialState: string;
        globalStates: string[];
        states: string[];
        vendors: VendorInfo[];
    }
    interface AppParams2 {
        initialState: Engine.AppState;
        globalState: Engine.GlobalState;
        states: Engine.AppState[];
        vendors: VendorInfo[];
    }
    interface AssetData {
        id: string;
    }
    interface AssetDataCursor extends AssetData {
        filename: string;
        x: number;
        y: number;
    }
    interface AssetDataFont extends AssetData {
        styles: BitFlags<Engine.FontStyle>;
    }
    interface AssetDataImage extends AssetData {
        filename: string;
    }
    interface AssetDataSound extends AssetData {
        filename: string;
    }
    interface AssetDataShader extends AssetData {
        filename: string;
    }
    interface AssetsToLoad {
        cursors?: AssetDataCursor[];
        fonts?: AssetDataFont[];
        images?: AssetDataImage[];
        sounds?: AssetDataSound[];
        shaders?: AssetDataShader[];
    }
    interface BitFlags<T> extends Number {
    }
    interface EntryPoint {
        (): AppParams;
    }
    interface FontStyles {
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
    interface HistoryState {
        stateId: string;
        params: QueryParams;
        queryString: string;
        data?: any;
    }
    interface InputListener {
        onKeyDown? (key: Engine.Key): void;
        onBufferedKeyDown? (key: Engine.Key): void;
        onKeyUp? (key: Engine.Key): void;
        onMouseDown? (x: number, y: number, button: Engine.Key): void;
        onMouseUp? (x: number, y: number, button: Engine.Key): void;
        onMouseMove? (x: number, y: number): void;
        onMouseWheel? (deltaY: number): void;
        onResize? (width: number, height: number): void;
        onGamepadConnect? (): void;
        onGamepadDisconnect? (): void;
        onGamepadTick? (length: number): void;
        onGamepadButtonDown? (control: string): void;
        onGamepadButtonUp? (control: string): void;
        onGamepadAxisChanged? (axis: string, value: number): void;
    }
    interface QueryParams {
        [key: string]: string;
    }
    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }
    interface TouchList {
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }
    interface TouchEvent extends UIEvent {
        touches: TouchList;
        targetTouches: TouchList;
        changedTouches: TouchList;
    }
    interface GestureEvent extends Event {
        scale: number;
        rotation: number;
    }
    interface ShaderAsset {
        url: string;
        vertexShader: string;
        fragmentShader: string;
    }
    interface VendorInfo {
        __seen?: boolean;
        __depLevel?: number;
        __loaded?: boolean;
        debug?: string;
        release?: string;
    }
}
