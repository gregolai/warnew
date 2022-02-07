// Type definitions for socket.io
// Project: http://socket.io/
// Definitions by: William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


///<reference path='node.d.ts' />


declare module "socket.io" {
	import http = require('http');

	export function listen(server: http.Server, options: any, fn: Function): SocketManager;
	export function listen(server: http.Server, fn?: Function): SocketManager;
	export function listen(port: Number): SocketManager;
}
/*
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
*/

interface Socket extends EventEmitter {
	id: string;
	namespace: SocketNamespace;
	manager: SocketManager;
	disconnected: boolean;
	ackPackets: number;
	acks: any;
	readable: boolean;
	//store:

	json: Socket;
	volatile: Socket;
	broadcast: Socket;
	to(room: string): Socket;
	in(room: string): Socket;
	join(room: string): Socket;
	leave(room: string): Socket;
	set(key: string, value: any, fn?: Function): Socket;
	get(key: string, fn?: Function): Socket;
	has(key: string, fn?: Function): Socket;
	del(key: string, fn?: Function): Socket;
	disconnect(): Socket;
	send(data: any, fn?: Function): Socket;
	//emit(ev: string, ...argsArray: any[]): Socket;
}

/*
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
*/

interface SocketNamespace extends EventEmitter {
	manager: SocketManager;
	name: string;
	sockets: { [sid: string]: Socket; };
	auth: boolean;
	clients(room: string): Socket[];
	//log:
	//store:
	json: SocketNamespace;
	volatile: SocketNamespace;
	to(room: string): SocketNamespace;
	in(room: string): SocketNamespace;
	except(sessionid: string): SocketNamespace;
	send(data: any): SocketNamespace;
	socket(sid: string, readable: boolean): Socket;
	authorization(fn: Function): SocketNamespace;
}

/*
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

interface SocketManager_Settings {
	origins?: string;
	log?: boolean;
	//store?:
	//logger?:
	//static?:
	heartbeats?: boolean;
	resource?: string;
	transports?: string[];
	authorization?: boolean;
	blacklist?: string[];
	"log level"?: number;
	//"log colors"?:
	"close timeout"?: number;
	"heartbeat interval"?: number;
	"heartbeat timeout"?: number;
	"polling duration"?: number;
	"flash policy server"?: boolean;
	"flash policy port"?: number;
	"destroy upgrade"?: boolean;
	"destroy buffer size"?: number;
	"browser client"?: boolean;
	"browser client cache"?: boolean;
	"browser client minification"?: boolean;
	"browser client etag"?: boolean;
	"browser client expires"?: number;
	"browser client gzip"?: boolean;
	"browser client handler"?: boolean;
	"client store expiration"?: number;
	"match origin protocol"?: boolean;
}

interface SocketManager extends EventEmitter {
	//server: http.Server;
	namespaces: { [name: string]: SocketNamespace; };
	sockets: SocketNamespace;

	//store:
	//log:
	//static:

	get(key: string): any;
	set(key: string, value: any): SocketManager;
	enable(key: string): SocketManager;
	disable(key: string): SocketManager;
	enabled(key: string): boolean;
	disabled(key: string): boolean;
	configure(env: string, fn: Function): SocketManager;
	configure(fn: Function): SocketManager;
	of(namespace: string): SocketNamespace;
}
