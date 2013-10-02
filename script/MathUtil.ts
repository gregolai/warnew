/// <reference path="_include.ts" />

module Engine {

	export module MathUtil {

		export function clamp(v: number, min: number, max: number): number {
			return v < min ? min : (v > max ? max : v);
		}
	}

}