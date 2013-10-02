interface GamepadData {
	id: string;
	index: number;
	timestamp: number;
	axes: number[];
	buttons: number[];

	state: { [controlName: string]: number; };
	lastState: { [controlName: string]: number; };
	updater(): void;
}

interface GamepadEvent {
}

interface GamepadAxisEventData extends GamepadEvent {
	gamepad: GamepadData;
	axis: string;
	value: number;
}

interface GamepadButtonEventData extends GamepadEvent {
	gamepad: GamepadData;
	control: string;
}

interface GamepadConnectEvent extends GamepadEvent, GamepadData {
}

interface GamepadTickEvent extends GamepadEvent {
	[index: number]: GamepadData;
	length: number;
}


/*
interface GamepadEvent {
	(data: GamepadData): void;
	(data: GamepadButtonEventData): void;
	[index: number]: GamepadData;
}
*/
interface GamepadListener {
	(evt: GamepadEvent): void;
}

interface GamepadUpdateStrategy {
	update(): void;
	start(updateFunction: () => void ): void;
}

interface GamepadPlatform {
	getType(): string;
	isSupported(): boolean;
	update(): void;
}

interface GamepadControllerTypes {
	PLAYSTATION: string;
	LOGITECH: string;
	XBOX: string;
	UNKNOWN: string;
}

interface GamepadEventType {
	CONNECTED: string;
	UNSUPPORTED: string;
	DISCONNECTED: string;
	TICK: string;
	BUTTON_DOWN: string;
	BUTTON_UP: string;
	AXIS_CHANGED: string;
}


interface GamepadMapping {
	env?: GamepadMappingEnv;
	buttons: GamepadMappingButtons;
	axes: GamepadMappingAxes;
}

interface GamepadMappingEnv {
	platform: string;
	type: string;
}

interface GamepadMappingButtons {
	byButton: number[];
}

interface GamepadMappingAxes {
	byAxis: number[];
}

declare class Gamepad {
	static UpdateStrategies: { [name: string]: GamepadUpdateStrategy; };
	static PlatformFactories: GamepadPlatform[];
	static Type: GamepadControllerTypes;
	static Event: GamepadEventType;
	static StandardButtons: string[];
	static StandardAxes: string[];
	static StandardMapping: GamepadMapping;

	static getNullPlatform(): GamepadPlatform;
	static resolvePlatform(listener: GamepadListener): GamepadPlatform;
	static envMatchesFilter(filter: GamepadMappingEnv, env: GamepadMappingEnv);

	constructor(updateStrategy?: GamepadUpdateStrategy);

	updateStrategy: GamepadUpdateStrategy;
	gamepads: GamepadData[];
	listeners: { [event: string]: GamepadListener; };
	platform: GamepadPlatform;

	deadzone: number;
	maximizeThreshold: number;

	init(): boolean;
	bind(event: string, listener: GamepadListener): Gamepad;
	//bind(type: string, listener: GamepadButtonListener): boolean;

	unbind(type: string, listener: GamepadListener): boolean;
	//unbind(type: string, listener: GamepadButtonListener): boolean;

	count(): number;
}
