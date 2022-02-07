/// <reference path="../vendor/Vendor.d.ts" />
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
        initialState: AppState;
        globalState: GlobalState;
        states: AppState[];
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
        styles: BitFlags<FontStyle>;
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
declare module Engine {
    var MAX_INT: number;
    var BIT_0: number;
    var BIT_1: number;
    var BIT_2: number;
    var BIT_3: number;
    var BIT_4: number;
    var BIT_5: number;
    var BIT_6: number;
    var BIT_7: number;
    var BIT_8: number;
    var BIT_9: number;
    var BIT_10: number;
    var BIT_11: number;
    var BIT_12: number;
    var BIT_13: number;
    var BIT_14: number;
    var BIT_15: number;
    var BIT_16: number;
    var BIT_17: number;
    var BIT_18: number;
    var BIT_19: number;
    var BIT_20: number;
    var BIT_21: number;
    var BIT_22: number;
    var BIT_23: number;
    var BIT_24: number;
    var BIT_25: number;
    var BIT_26: number;
    var BIT_27: number;
    var BIT_28: number;
    var BIT_29: number;
    var BIT_30: number;
    var ROOT_DIRECTORY: string;
    var VENDOR_DIRECTORY: string;
    var ASSET_DIRECTORY: string;
    var GAME_DIRECTORY: string;
    var GAME_SCRIPT_DIRECTORY: string;
    var GAME_STATE_DIRECTORY: string;
}
declare module Engine {
    var disableContextMenu: boolean;
    function getWidth(): number;
    function getHeight(): number;
    function getEndingState(): AppState;
    function setState(state: AppState, params?: QueryParams, data?: any, callback?: () => void): void;
    function setState(stateId: string, params?: QueryParams, data?: any, callback?: () => void): void;
    function pushHistory(hs: HistoryState): HistoryState;
    function pushHistory(state: AppState, title: string, params?: QueryParams, data?: any): HistoryState;
    function getState(stateId: string): AppState;
    function initGame(p: AppParams2, callback: () => void): void;
}
declare module Engine {
    interface IAppState {
        id: string;
        initialize(callback: () => void): void;
        bindEvents(dom: JQuery): void;
    }
    class AppState implements InputListener {
        __dom: JQuery;
        id: string;
        isEnding(): boolean;
        constructor();
        initialize(callback: () => void): void;
        bindEvents(dom: JQuery): void;
        begin(hs: HistoryState, callback: (updateStrategy?: UpdateStrategy) => void): void;
        end(): void;
        fixedUpdate(): void;
        update(deltaTime: number): void;
        draw(): void;
        onResize(width: number, height: number): void;
    }
    class GlobalState extends AppState {
        onAppStateChange(from: AppState, to: AppState): void;
    }
}
declare module Engine {
    module AssetManager {
        function load(assets: AssetsToLoad, callback: () => void): void;
        function getCursor(id: string): Cursor;
        function getFont(id: string): Font;
        function getImage(id: string): HTMLImageElement;
        function getShader(id: string): ShaderAsset;
        function getSound(id: string): HTMLAudioElement;
    }
}
declare module Engine {
    class AsyncLock {
        private _locks;
        private _active;
        private _callback;
        private _asyncRequired;
        constructor(callback: () => void, asyncRequired?: boolean);
        lock(howMany?: number): void;
        unlock(howMany?: number): void;
        private _unlock(howMany);
    }
}
declare module Engine {
    class BinaryHeap<T> {
        private _content;
        private _scoreFunction;
        constructor(scoreFunction: (element: T) => number);
        reset(scoreFunction?: (element: T) => number): BinaryHeap<T>;
        push(node: T): void;
        pop(): T;
        remove(node: T): boolean;
        size(): number;
        rescoreElement(node: T): void;
        private _sinkDown(n);
        private _bubbleUp(n);
    }
}
declare module Engine {
    module Vendor {
        var Box2D: VendorInfo;
        var Gamepad: VendorInfo;
        var History: VendorInfo;
        var Knockout: VendorInfo;
        var LZMA: VendorInfo;
        var SocketIO: VendorInfo;
        var Stats: VendorInfo;
        var Three: VendorInfo;
        var Underscore: VendorInfo;
        function onVendorsLoaded(callback?: () => void): void;
    }
}
declare module Engine {
    module Compressor {
        function compress(str: string, mode: number, onFinish?: (byteArray: number[]) => void, onProgress?: (percent: number) => void): void;
        function decompress(byteArray: number[], onFinish?: (str: string) => void, onProgress?: (percent: number) => void): void;
    }
}
declare module Engine {
    module CtxUtil {
        function path(ctx: CanvasRenderingContext2D, points: Vec2[], offset?: Vec2, joinLast?: boolean): void;
        enum TextAlign {
            Left = 0,
            Center = 1,
            Right = 2,
        }
        function fillTextWrapped(ctx: CanvasRenderingContext2D, text: string, lineHeight: number, align: CtxUtil.TextAlign, marginX: number, marginY: number, width: number): number;
    }
}
declare module Engine {
    class Cursor {
        private static _currentID;
        private _id;
        url: string;
        hotspotX: number;
        hotspotY: number;
        private _style;
        static clear(): void;
        constructor(id: string, url: string, offX: number, offY: number);
        dispose(): void;
        apply(): void;
    }
}
declare module Engine {
    module FileUtil {
        interface Batch {
            css?: string[];
            html?: {
                url: string;
                dom: JQuery;
            }[];
            js?: string[];
        }
        function loadScript(url: string, callback: () => void): void;
        function loadStylesheet(url: string, callback: () => void): void;
        function loadHtml(url: string, container: JQuery, callback: () => void): void;
        function loadBatch(b: Batch, callback: () => void): void;
    }
}
declare module Engine {
    class Font {
        private static _map;
        private static _dummyCanvas;
        private _id;
        url: string;
        private _styles;
        constructor(id: string, url: string, styles: BitFlags<FontStyle>);
        getString(style: FontStyle, size: number): string;
        private _styleFound(style);
        private static _fontLoadHack(family);
        private static _initMap();
    }
}
declare module Engine {
    class Vec2 {
        x: number;
        y: number;
        length: number;
        lengthSqr: number;
        constructor(x?: number, y?: number);
        clone(): Vec2;
        set(v: Vec2): Vec2;
        set(x: number, y: number): Vec2;
        toArray(): number[];
        fromArray(v: number[]): Vec2;
        add(v: Vec2): Vec2;
        add(x: number, y: number): Vec2;
        subtract(v: Vec2): Vec2;
        subtract(x: number, y: number): Vec2;
        multiply(v: Vec2): Vec2;
        multiply(c: number): Vec2;
        multiply(x: number, y: number): Vec2;
        invert(): Vec2;
        setLength(length: number): Vec2;
        normalize(): Vec2;
        lerp(v: Vec2, t: number): Vec2;
        dot(v: Vec2): number;
        distance(v: Vec2): number;
        distance(x: number, y: number): number;
        distanceSqr(v: Vec2): number;
        distanceSqr(x: number, y: number): number;
    }
}
declare module Engine {
    module Input {
        function isKeyDown(key: Key): boolean;
        function getMousePosition(): Vec2;
        function preventDefault(): void;
        function register(listener: InputListener): void;
        function unregister(listener: InputListener): void;
    }
}
declare module Engine {
    module MathUtil {
        function clamp(v: number, min: number, max: number): number;
    }
}
declare module Engine {
    class MersenneTwister {
        private N;
        private M;
        private MATRIX_A;
        private UPPER_MASK;
        private LOWER_MASK;
        private mt;
        private mti;
        constructor(seed?: number);
        init_genrand(s: number): void;
        init_by_array(init_key: number[], key_length: number): void;
        genrand_int32(): number;
        genrand_int31(): number;
        genrand_real1(): number;
        random(): number;
        genrand_real3(): number;
        genrand_res53(): number;
    }
}
declare module Engine {
    interface IRandomGen {
        random(): number;
    }
    class Random {
        private static _stringChars;
        rollCount: number;
        private _rand;
        constructor(seed?: number);
        ratio(): number;
        static ratio(): number;
        private static _ratio(gen);
        real(min: number, max: number): number;
        static real(min: number, max: number): number;
        private static _real(gen, min, max);
        integer(min: number, max: number): number;
        static integer(min: number, max: number): number;
        private static _integer(gen, min, max);
        boolean(trueWeight?: number): boolean;
        static boolean(trueWeight?: number): boolean;
        static _boolean(gen: IRandomGen, trueWeight?: number): boolean;
        string(length: number, chars?: string): string;
        static string(length: number, chars?: string): string;
        private static _string(gen, length, chars?);
    }
}
declare module Engine {
    class Rect {
        x: number;
        y: number;
        width: number;
        height: number;
        right: number;
        bottom: number;
        constructor(x?: number, y?: number, width?: number, height?: number);
        clone(): Rect;
        set(r: Rect): Rect;
        set(x: number, y: number, width: number, height: number): Rect;
        toArray(): number[];
        fromArray(v: number[]): Rect;
        setPosition(p: Vec2): Rect;
        setPosition(x: number, y: number): Rect;
        setSize(p: Vec2): Rect;
        setSize(width: number, height: number): Rect;
        fromPoints(p0: Vec2, p1: Vec2): Rect;
        union(r: Rect): Rect;
        union(x: number, y: number, width: number, height: number): Rect;
        containsPoint(p: Vec2): boolean;
        containsPoint(x: number, y: number): boolean;
        containsRect(r: Rect): boolean;
        containsRect(x: number, y: number, width: number, height: number): boolean;
        intersectsRect(r: Rect): boolean;
        intersectsRect(x: number, y: number, width: number, height: number): boolean;
        getCenter(): Vec2;
    }
}
declare module Engine {
    module StringUtil {
        function format(stringIn: string, ...args: string[]): string;
    }
}
declare module Engine {
    class Surface2D {
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        rect: Rect;
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(container: Node);
        constructor(canvas: HTMLCanvasElement);
        dispose(): void;
        setPosition(p: Vec2): void;
        setPosition(x: number, y: number): void;
        setSize(p: Vec2): void;
        setSize(x: number, y: number): void;
        setRect(r: Rect): void;
        setRect(x: number, y: number, width: number, height: number): void;
    }
}
declare module Engine {
    interface UpdateStrategy {
        begin(callback: () => void): void;
        end(): void;
    }
    class NoUpdateStrategy implements UpdateStrategy {
        begin(callback: () => void): void;
        end(): void;
    }
    class DefaultUpdateStrategy implements UpdateStrategy {
        _state: AppState;
        _fixedInterval: number;
        _prevTime: number;
        _frameAccum: number;
        _active: boolean;
        constructor(state: AppState, fixedInterval: number);
        begin(callback: () => void): void;
        end(): void;
        _loop(now: number): void;
    }
}
declare module Engine {
    class Vec3 {
        x: number;
        y: number;
        z: number;
        length: number;
        lengthSqr: number;
        constructor(x?: number, y?: number, z?: number);
        clone(): Vec3;
        set(v: Vec3): Vec3;
        set(x: number, y: number, z: number): Vec3;
        toArray(): number[];
        fromArray(v: number[]): Vec3;
        add(v: Vec3): Vec3;
        add(x: number, y: number, z: number): Vec3;
        subtract(v: Vec3): Vec3;
        subtract(x: number, y: number, z: number): Vec3;
        multiply(v: Vec3): Vec3;
        multiply(c: number): Vec3;
        multiply(x: number, y: number, z: number): Vec3;
        invert(): Vec3;
        setLength(length: number): Vec3;
        normalize(): Vec3;
        lerp(v: Vec3, t: number): Vec3;
        dot(v: Vec3): number;
        distance(v: Vec3): number;
        distance(x: number, y: number, z: number): number;
        distanceSqr(v: Vec3): number;
        distanceSqr(x: number, y: number, z: number): number;
    }
}
declare module Engine {
    enum FontStyle {
        Regular = 1,
        Italic = 2,
        SemiBold = 4,
        SemiBoldItalic = 8,
        Bold = 16,
        BoldItalic = 32,
        ExtraBold = 64,
        ExtraBoldItalic = 128,
        Light = 256,
        LightItalic = 512,
        ExtraLight = 1024,
        ExtraLightItalic = 2048,
    }
    class GamepadControl {
        static A: string;
        static B: string;
        static X: string;
        static Y: string;
        static RightShoulderFront: string;
        static LeftShoulderFront: string;
        static DPadLeft: string;
        static DPadUp: string;
        static DPadRight: string;
        static DPadDown: string;
        static LeftStickHit: string;
        static RightStickHit: string;
        static Back: string;
        static Start: string;
        static RightShoulderBack: string;
        static LeftShoulderBack: string;
        static LeftStickX: string;
        static LeftStickY: string;
        static RightStickX: string;
        static RightStickY: string;
    }
    enum Key {
        None = 255,
        KEY_MOUSE_LEFT = 0,
        KEY_MOUSE_MIDDLE = 1,
        KEY_MOUSE_RIGHT = 2,
        KEY_BACKSPACE = 8,
        KEY_TAB = 9,
        KEY_ENTER = 13,
        KEY_SHIFT = 16,
        KEY_CTRL = 17,
        KEY_ALT = 18,
        KEY_PAUSEBREAK = 19,
        KEY_CAPSLOCK = 20,
        KEY_ESCAPE = 27,
        KEY_SPACE = 32,
        KEY_PAGEUP = 33,
        KEY_PAGEDOWN = 34,
        KEY_END = 35,
        KEY_HOME = 36,
        KEY_LEFT = 37,
        KEY_UP = 38,
        KEY_RIGHT = 39,
        KEY_DOWN = 40,
        KEY_INSERT = 45,
        KEY_DELETE = 46,
        KEY_0 = 48,
        KEY_1 = 49,
        KEY_2 = 50,
        KEY_3 = 51,
        KEY_4 = 52,
        KEY_5 = 53,
        KEY_6 = 54,
        KEY_7 = 55,
        KEY_8 = 56,
        KEY_9 = 57,
        KEY_A = 65,
        KEY_B = 66,
        KEY_C = 67,
        KEY_D = 68,
        KEY_E = 69,
        KEY_F = 70,
        KEY_G = 71,
        KEY_H = 72,
        KEY_I = 73,
        KEY_J = 74,
        KEY_K = 75,
        KEY_L = 76,
        KEY_M = 77,
        KEY_N = 78,
        KEY_O = 79,
        KEY_P = 80,
        KEY_Q = 81,
        KEY_R = 82,
        KEY_S = 83,
        KEY_T = 84,
        KEY_U = 85,
        KEY_V = 86,
        KEY_W = 87,
        KEY_X = 88,
        KEY_Y = 89,
        KEY_Z = 90,
        KEY_LEFT_WINDOW = 91,
        KEY_RIGHT_WINDOW = 92,
        KEY_SELECT = 93,
        KEY_NUMPAD_0 = 96,
        KEY_NUMPAD_1 = 97,
        KEY_NUMPAD_2 = 98,
        KEY_NUMPAD_3 = 99,
        KEY_NUMPAD_4 = 100,
        KEY_NUMPAD_5 = 101,
        KEY_NUMPAD_6 = 102,
        KEY_NUMPAD_7 = 103,
        KEY_NUMPAD_8 = 104,
        KEY_NUMPAD_9 = 105,
        KEY_MULTIPLY = 106,
        KEY_ADD = 107,
        KEY_SUBTRACT = 109,
        KEY_DECIMAL_POINT = 110,
        KEY_DIVIDE = 111,
        KEY_F1 = 112,
        KEY_F2 = 113,
        KEY_F3 = 114,
        KEY_F4 = 115,
        KEY_F5 = 116,
        KEY_F6 = 117,
        KEY_F7 = 118,
        KEY_F8 = 119,
        KEY_F9 = 120,
        KEY_F10 = 121,
        KEY_F11 = 122,
        KEY_F12 = 123,
        KEY_NUM_LOCK = 144,
        KEY_SCROLL_LOCK = 145,
        KEY_SEMI_COLON = 186,
        KEY_EQUAL_SIGN = 187,
        KEY_COMMA = 188,
        KEY_DASH = 189,
        KEY_PERIOD = 190,
        KEY_FORWARD_SLASH = 191,
        KEY_GRAVE_ACCENT = 192,
        KEY_OPEN_BRACKET = 219,
        KEY_BACK_SLASH = 220,
        KEY_CLOSE_BRACKET = 221,
        KEY_SINGLE_QUOTE = 222,
    }
}
