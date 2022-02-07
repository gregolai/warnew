//   _______   __    __  _______   __        ______   ______  
//  /       \ /  |  /  |/       \ /  |      /      | /      \ 
//  $$$$$$$  |$$ |  $$ |$$$$$$$  |$$ |      $$$$$$/ /$$$$$$  |
//  $$ |__$$ |$$ |  $$ |$$ |__$$ |$$ |        $$ |  $$ |  $$/ 
//  $$    $$/ $$ |  $$ |$$    $$< $$ |        $$ |  $$ |      
//  $$$$$$$/  $$ |  $$ |$$$$$$$  |$$ |        $$ |  $$ |   __ 
//  $$ |      $$ \__$$ |$$ |__$$ |$$ |_____  _$$ |_ $$ \__/  |
//  $$ |      $$    $$/ $$    $$/ $$       |/ $$   |$$    $$/ 
//  $$/        $$$$$$/  $$$$$$$/  $$$$$$$$/ $$$$$$/  $$$$$$/  
//                                                            
//                                                            
//                                                            



export module Log {

	export function handshake(socketId: string): void {

	}

	export function room(roomId: number, message: any): void {

	}

	export function user(user: Server.UserInfo, message: any): void {
		console.log((user.username).grey + " - " + message);
	}
}

export module Sanitize {

	export function toString(a: any): string {
		if (!a)
			a = "";
		return "" + a;
	}

	export function toInt(a: any): number {
		return Math.floor(parseInt(a));
	}
}

export module String {

	export function rpad(str: string, length: number, char: string = " ", clamp?: boolean): string {
		str = str || "";
		if (clamp && str.length > length)
			str = str.substr(0, length);
		var diff = length - str.length;
		while (--diff >= 0)
			str += char;
		return str;
	}

	export function lpad(str: string, length: number, char: string = " ", clamp?: boolean): string {
		str = str || "";
		if (clamp && str.length > length)
			str = str.substr(0, length);
		var diff = length - str.length;
		while (--diff >= 0)
			str = char + str;
		return str;
	}

	export function startsWith(str: string, searchString: string, position: number): boolean {
		str = str || "";
		searchString = searchString || "";
		position = position || 0;
		return str.indexOf(searchString, position) === position;
	}

	export function endsWith(str: string, searchString: string, position: number): boolean {
		str = str || "";
		searchString = searchString || "";
		position = position || str.length;
		position = position - searchString.length;
		var lastIndex = str.lastIndexOf(searchString);
		return lastIndex !== -1 && lastIndex === position;
	}

}

export module Validate {

	export function isString(a: any): boolean {
		return typeof a === "string";
	}

	export function isGuid(a: any, length: number): boolean {

		if (!isString(a))
			return false;

		var str: string = a;
		if (str.length !== length)
			return false;

		var chars = _guidChars;
		var charsLen = chars.length;
		for (var i = 0; i < length; ++i) {
			if (chars.indexOf(str[i]) === -1)
				return false;
		}
		return true;
	}

}

export function logClient(clientId: string, message: any): void {
	console.log(("" + clientId).grey + " - " + message);
}


export function makeGuid(length: number): string {

	var chars = _guidChars;
	var charsLen = chars.length;
	var result = "";
	for (var i = 0; i < length; ++i)
		result += chars.charAt(Math.floor(Math.random() * charsLen));
	return result;
}

//   _______   _______   ______  __     __   ______  ________  ________ 
//  |       \ |       \ |      \|  \   |  \ /      \|        \|        \
//  | $$$$$$$\| $$$$$$$\ \$$$$$$| $$   | $$|  $$$$$$\\$$$$$$$$| $$$$$$$$
//  | $$__/ $$| $$__| $$  | $$  | $$   | $$| $$__| $$  | $$   | $$__    
//  | $$    $$| $$    $$  | $$   \$$\ /  $$| $$    $$  | $$   | $$  \   
//  | $$$$$$$ | $$$$$$$\  | $$    \$$\  $$ | $$$$$$$$  | $$   | $$$$$   
//  | $$      | $$  | $$ _| $$_    \$$ $$  | $$  | $$  | $$   | $$_____ 
//  | $$      | $$  | $$|   $$ \    \$$$   | $$  | $$  | $$   | $$     \
//   \$$       \$$   \$$ \$$$$$$     \$     \$$   \$$   \$$    \$$$$$$$$
//                                                                      
//                                                                      
//                                                                      
import Server = require("./Server");

var _guidChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";