/// <reference path="_include.ts" />

module Engine {

	export module StringUtil {

		export function format(stringIn: string, ...args: string[]): string {
			var ret = stringIn;
			for (var i = 0, ii = args.length; i < ii; ++i) {
				ret = ret.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
			}
			return ret;
		}

	}

}