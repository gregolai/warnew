/// <reference path="vendor/box2dweb.d.ts" />
/// <reference path="vendor/gamepad.d.ts" />
/// <reference path="vendor/jquery.d.ts" />
/// <reference path="vendor/knockout.d.ts" />
/// <reference path="vendor/stats.d.ts" />
/// <reference path="vendor/three.d.ts" />
declare module Engine {
    enum Key {
        None = 0xff,
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
}
declare module Engine {
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
}
declare module Engine {
    interface AppParams {
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
    class App implements Engine.InputListener {
        private static _loadingContainer;
        static namespace: Object;
        static instance: App;
        static load(name: string): void;
        private static _verifyAppName(name);
        private static _startLoading(container);
        private static _endLoading();
        private _params;
        private _container;
        private _appContainer;
        private _gamepad;
        private _stats;
        private _states;
        private _stateMap;
        private _changingStates;
        private _activeState;
        private _prevTime;
        private _elapsed;
        public id : string;
        public title : string;
        public width : number;
        public height : number;
        public activeState : Engine.AppState;
        public elapsed : number;
        constructor(params: AppParams);
        public getState(id: string): Engine.AppState;
        public setState(id: string): void;
        public setState(state: Engine.AppState): void;
        public update(deltaTime: number): void;
        public onAppStateChange(from: Engine.AppState, to: Engine.AppState): void;
        private _loadVendors(callback);
        private _initDom(container);
        private _createStates(callback);
        private _createStateDom(state, callback);
        private _initStates(callback);
        private _run();
        private _loop();
    }
}
declare module Engine {
    interface AppStateParams {
        hasUI: boolean;
    }
    class AppState implements Engine.InputListener {
        private _params;
        private _sceneDom;
        private _uiDom;
        private _active;
        public id : string;
        public hasUI : boolean;
        public sceneDom : JQuery;
        public uiDom : JQuery;
        public active : boolean;
        constructor(params: AppStateParams);
        public create3dSurface(): THREE.WebGLRenderer;
        public create2dSurface(): Engine.Surface2D;
        public onUICreated(dom: JQuery): void;
        public initialize(callback: () => void): void;
        public begin(callback: () => void): void;
        public end(): void;
        public update(deltaTime: number): void;
        public onAppStateChange(from: AppState, to: AppState): void;
        public draw(): void;
    }
}
declare module Engine {
    class AsyncLock {
        private _locks;
        private _active;
        private _callback;
        constructor(callback: () => void);
        public lock(howMany?: number): void;
        public unlock(howMany?: number): void;
        private _unlock(howMany);
    }
}
declare module Engine.FileUtil {
    function loadScript(url: string, callback: () => void): void;
    function loadStylesheet(url: string, callback: () => void): void;
    function loadHtml(url: string, container: JQuery, callback: () => void): void;
    function loadCssAndHtml(prefix: string, container: JQuery, callback: () => void): void;
}
declare module Engine {
    interface InputListener {
        onKeyDown? (key: Engine.Key): void;
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
    class Input {
        private static _container;
        private static _mousePosition;
        private static _keysDown;
        private static _gamepad;
        private static _gamepadControls;
        private static _listeners;
        static isKeyDown(key: Engine.Key): boolean;
        static getMousePosition(): Engine.Vec2;
        static init(container: HTMLElement): void;
        static register(listener: InputListener): void;
        static unregister(listener: InputListener): void;
        static triggerResize(): void;
        private static __broadcast(onEventName, args?);
        private static _keyDown(evt);
        private static _keyUp(evt);
        private static _mouseDown(evt);
        private static _mouseUp(evt);
        private static _mouseMove(evt);
        private static _mouseWheel(evt);
        private static _resize();
        private static _gamepadConnect(evt);
        private static _gamepadDisconnect(evt);
        private static _gamepadTick(evt);
        private static _gamepadButtonDown(evt);
        private static _gamepadButtonUp(evt);
        private static _gamepadAxisChanged(evt);
    }
}
declare module Engine.MathUtil {
    function clamp(v: number, min: number, max: number): number;
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
        public init_genrand(s: number): void;
        public init_by_array(init_key: number[], key_length: number): void;
        public genrand_int32(): number;
        public genrand_int31(): number;
        public genrand_real1(): number;
        public random(): number;
        public genrand_real3(): number;
        public genrand_res53(): number;
    }
}
declare module Engine {
    interface IRandomGen {
        random(): number;
    }
    class Random {
        private static _stringChars;
        private _rollCount;
        private _rand;
        public rollCount : any;
        constructor(seed?: number);
        public ratio(): number;
        static ratio(): number;
        private static _ratio(gen);
        public real(min: number, max: number): number;
        static real(min: number, max: number): number;
        private static _real(gen, min, max);
        public integer(min: number, max: number): number;
        static integer(min: number, max: number): number;
        private static _integer(gen, min, max);
        public boolean(trueWeight?: number): boolean;
        static boolean(trueWeight?: number): boolean;
        static _boolean(gen: IRandomGen, trueWeight?: number): boolean;
        public string(length: number, chars?: string): string;
        static string(length: number, chars?: string): string;
        private static _string(gen, length, chars?);
    }
}
declare module Engine {
    class Rect {
        public x: number;
        public y: number;
        public width: number;
        public height: number;
        public right : number;
        public bottom : number;
        constructor(x?: number, y?: number, width?: number, height?: number);
        public clone(): Rect;
        public setSize(width: number, height: number): void;
        public containsPoint(point: Engine.Vec2): boolean;
        public containsPoint(x: number, y: number): boolean;
        public containsRect(other: Rect): boolean;
        public intersectsRect(other: Rect): boolean;
        public getCenter(): Engine.Vec2;
        public union(r: Rect): void;
    }
}
declare module Engine {
    class Surface2D {
        private _canvas;
        private _context;
        private _zIndex;
        private _x;
        private _y;
        private _width;
        private _height;
        public context : CanvasRenderingContext2D;
        public zIndex : number;
        public x : number;
        public y : number;
        public width : number;
        public height : number;
        constructor(container: Node);
        public dispose(): void;
    }
}
declare module Engine {
    class Vec2 {
        public x: number;
        public y: number;
        public length : number;
        public lengthSqr : number;
        constructor(x?: number, y?: number);
        public clone(): Vec2;
        public toString(): string;
        public add(rhs: Vec2): void;
        public subtract(rhs: Vec2): void;
        public multiply(rhs: number): void;
        public multiply(rhs: Vec2): void;
        public divide(rhs: number): void;
        public divide(rhs: Vec2): void;
        public invert(): void;
        public setLength(length: number): void;
        public normalize(): void;
        public clamp(min: Vec2, max: Vec2): void;
        static inverse(vec: Vec2): Vec2;
        static add(left: Vec2, right: Vec2): Vec2;
        static subtract(left: Vec2, right: Vec2): Vec2;
        static multiply(left: Vec2, right: number): Vec2;
        static multiply(left: Vec2, right: Vec2): Vec2;
        static divide(left: Vec2, right: number): Vec2;
        static divide(left: Vec2, right: Vec2): Vec2;
        static lerp(left: Vec2, right: Vec2, t: number): Vec2;
        static dot(left: Vec2, right: Vec2): number;
        static distance(left: Vec2, right: Vec2): number;
        static distanceSqr(left: Vec2, right: Vec2): number;
        static equals(a: Vec2, b: Vec2): boolean;
    }
}
