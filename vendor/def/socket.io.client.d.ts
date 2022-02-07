// Type definitions for socket.io
// Project: http://socket.io/
// Definitions by: William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped



/*
declare module "socket.io" {
	import http = require('http');

	export function listen(server: http.Server, options: any, fn: Function): SocketManager;
	export function listen(server: http.Server, fn?: Function): SocketManager;
	export function listen(port: Number): SocketManager;
}
interface Socket {
	id: string;
	json:any;
	log: any;
	volatile: any;
	broadcast: any;
	in(room: string): Socket;
	to(room: string): Socket;
	join(name: string, fn: Function): Socket;
	unjoin(name: string, fn: Function): Socket;
	set(key: string, value: any, fn: Function): Socket;
	get(key: string, fn: Function): Socket;
	has(key: string, fn: Function): Socket;
	del(key: string, fn: Function): Socket;
	disconnect(): Socket;
	send(data: any, fn: Function): Socket;
	emit(ev: any, ...data:any[]): Socket;
	on(ns: string, fn: Function): Socket;
}

interface SocketNamespace {
	clients(room: string): Socket[];
	log: any;
	store: any;
	json: any;
	volatile: any;
	in(room: string): SocketNamespace;
	on(evt: string, fn: (socket: Socket) => void): SocketNamespace;
	to(room: string): SocketNamespace;
	except(id: any): SocketNamespace;
	send(data: any): any;
	emit(ev: any, ...data:any[]): Socket;
	socket(sid: any, readable: boolean): Socket;
	authorization(fn: Function);
}


interface SocketManager {
	get(key: any): any;
	set(key: any, value: any): SocketManager;
	enable(key: any): SocketManager;
	disable(key: any): SocketManager;
	enabled(key: any): boolean;
	disabled(key: any): boolean;
	configure(env: string, fn: Function): SocketManager;
	configure(fn: Function): SocketManager;
	of(nsp: string): SocketNamespace;
	on(ns: string, fn: Function): SocketManager;
	sockets: SocketNamespace;
}
*/

interface SocketManager {
	version: string;
	protocol: number;
	transports: string[];
	connect(host: string, details?: SocketOptions): SocketNamespace;
}

interface SocketNamespaceFlag {
	namespace: SocketNamespace;
	name: string;

	// Send a message
	send(): void;

	// Emit an event
	emit(): void;
}

interface SocketNamespace /*extends EventEmitter*/ {
	socket: Socket;
	name: string;
	flags: { [name: string]: boolean; };
	json: SocketNamespaceFlag;
	ackPackets: number;
	acks: any;

	on(event: string, callback: (...data: any[]) => void): void;
	emit(event: string, ...data: any[]): void;
	removeAllListeners(): void;

	// Creates a new namespace, by proxying the request to the socket. This
	// allows us to use the synax as we do on the server.
	of(name: string): SocketNamespace;

	// Sends a message
	send(data: any, fn?: Function): SocketNamespace;

	// CAREFUL: private, according to API
	disconnect(): void;
}

interface SocketOptions {
	host?: string;
	query?: string;
	port?: number;
	secure?: boolean;
	document?: any;
	resource?: string;
	transports?: string[];
	"connect timeout"?: number;
	"try multiple transports"?: boolean;
	reconnect?: boolean;
	"reconnection delay"?: number;
	"reconnection limit"?: number;
	"reopen delay"?: number;
	"max reconnection attempts"?: number;
	"sync disconnect on unload"?: boolean;
	"auto connect"?: boolean;
	"flash policy port"?: number;
	manualFlush?: boolean;
}

interface Socket /*extends EventEmitter*/ {
	options: SocketOptions;
	connected: boolean;
	open: boolean;
	connecting: boolean;
	reconnecting: boolean;
	namespaces: SocketNamespace;
	buffer: any[];
	doBuffer: boolean;

	// Returns a namespace listener/emitter for this socket
	of(name: string): SocketNamespace;

	// Connects to the server.
	connect(fn?: Function): Socket;

	// Sends a message.
	packet(data: any): Socket;

	// Flushes the buffer data over the wire.
	// To be invoked manually when 'manualFlush' is set to true.
	flushBuffer(): void;

	// Disconnect the established connect.
	disconnect(): Socket;

	reconnect(): void;
}

// ADDED FOR CLIENT
declare var io: SocketManager;