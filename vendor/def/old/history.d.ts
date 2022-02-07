interface HistoryJS_Adapter {
	bind(element: EventTarget, eventName: string, callback: Function): void;
	trigger(element: EventTarget, eventName: string, event?: any): void;
	onDomLoad(callback: () => void): void;
}

interface HistoryJS_State {
	data: any;
	title: string;
	url: string;
}

interface HistoryJS_Options {
	hashChangeInterval: number;
	safariPollInterval: number;
	doubleCheckInterval: number;
	disableSuid: boolean;
	storeInterval: number;
	busyDelay: number;
	debug: boolean;
	initialTitle: string;
	html4Mode: boolean;
	delayInit: boolean;
}

interface HistoryJS {

	pushState(data: any, title: string, url: string, queue?: boolean): boolean;
	replaceState(data: any, title: string, url: string, queue?: boolean): boolean;
	getState(): HistoryJS_State;
	getStateByIndex(index: number): HistoryJS_State;
	getCurrentIndex(): number;
	getHash(): string;

	// OPTIONS
	options: HistoryJS_Options;

	// ADAPTER
	Adapter: HistoryJS_Adapter;

	// NAVIGATION
	back(): boolean;
	forward(): boolean;
	go(index: number): HistoryJS;
	
	// DEBUG
	log(message?: any, ...optionalParams: any[]): void;
	debug(message?: any, ...optionalParams: any[]): void;
}
