/*
 * winston.js: Top-level include defining Winston.
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENCE
 *
 */

/*
///<reference path='node.d.ts' />

declare module "winston" {

	import events = require("events");

	interface Winston_Config {
		addColors(colors: Winston_Config_LevelColors): void;
		colorize(level: string): string;
		cli: Winston_Config_LevelColors;
		npm: Winston_Config_LevelColors;
		syslog: Winston_Config_LevelColors;
	}

	interface Winston_Config_LevelColors {
		levels: { [level: string]: number; };
		colors: { [level: string]: number; };
	}

	interface Winston_Container {
		constructor(options?: Winston_Options);
		loggers: { [id: string]: Winston_Logger; };
		options: Winston_Options;
		default: Winston_Options;

		get(id: string, options?: Winston_Options): Winston_Logger;
		add(id: string, options?: Winston_Options): Winston_Logger;
		has(id: string): boolean;
		close(id: string): void;
	}

	interface Winston_Container_Options {
		//transports
	}

	interface Winston_Exception {
		getAllInfo(err: any): Winston_Exception_AllInfo
		getProcessInfo(): Winston_Exception_ProcessInfo;
		getOsInfo(): Winston_Exception_OsInfo;
		getTrace(err?: any): Winston_Exception_StackTrace[];
	}

	interface Winston_Exception_AllInfo {
		date: number;
		process: Winston_Exception_ProcessInfo;
		os: Winston_Exception_OsInfo;
		trace: Winston_Exception_StackTrace;
		stack: boolean;
	}

	interface Winston_Exception_OsInfo {
		loadavg: number[];
		uptime: number;
	}

	interface Winston_Exception_ProcessInfo {
		pid: number;
		uid: number;
		gid: number;
		cwd: string;
		execPath: string;
		version: string;
		argv: string[];
		memoryUsage: Winston_Exception_ProcessInfo_MemoryUsage;
	}

	interface Winston_Exception_ProcessInfo_MemoryUsage {
		rss: number;
		heapTotal: number;
		heapUsed: number;
	}

	interface Winston_Exception_StackTrace {
		// TODO
		//column
		//file
		//function
		//line
		//method
		//native
	}


	interface Winston_Logger extends events.EventEmitter {
		
		padLevels: boolean;
		level: string;
		emitErrs: boolean;
		stripColors: boolean;
		exitOnError: boolean;

		transports: { [id: string]: Winston_Transport[]; }
		//rewriters
		//exceptionHandlers
		//profilers

		log(level: string): Winston_Logger;

		//query(callback: (
	

		//stream(options:
	}


	interface Winston_Options {
		transports?: Winston_Transport[];
	}

	interface Winston_Transport extends events.EventEmitter {
		constructor(options?: Winston_Transport_Options);
		formatQuery(query: string): string;
		formatQuery(query: Object): Object;
		normalizeQuery(options?: Object): Object;
		
		//formatResults

		//logException(msg:
	}

	interface Winston_Transport_Options {
		level?: string;
		silent?: boolean;
		raw?: boolean;
		name?: string;
		handleExceptions?: boolean;
	}

	interface Winston {

		version: string;

		//transports

		hash(str: string): string;
		clone(obj: any): any;
		longestElement<T>(xs: T[]): T;
		exception: Winston_Exception
		config: Winston_Config;
		addColors(colors: Winston_Config_LevelColors): void;

		Container: Winston_Container;
		Logger: Winston_Logger;
		Transport: Winston_Transport;

		//loggers
		//levels
		//silly
		//debug
		//verbose
		//info
		//warn
		//error
		//log
		//query
		//stream
		//add
		//remove
		//clear
		//profile
		//startTimer
		//extend
		//cli
		//handleExceptions
		//unhandleExceptions
		//setLevels
	}
}

*/