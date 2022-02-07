/// <reference path="_include.ts" />

module Engine {


	export interface IRandomGen {
		random(): number;
	}

	export class Random {
		private static _stringChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

		rollCount: number;

		private _rand: MersenneTwister;

		constructor(seed?: number) {
			this.rollCount = 0;
			this._rand = new MersenneTwister(seed);
		}

		// RATIO - generates a random number on [0,1)-real-interval
		ratio(): number {
			++this.rollCount;
			return Random._ratio(this._rand);
		}
		static ratio(): number {
			return Random._ratio(Math);
		}
		private static _ratio(gen: IRandomGen): number {
			return gen.random();
		}

		// REAL - generates a random number on [min,max)-real-interval
		real(min: number, max: number): number {
			++this.rollCount;
			return Random._real(this._rand, min, max);
		}
		static real(min: number, max: number): number {
			return Random._real(Math, min, max);
		}
		private static _real(gen: IRandomGen, min: number, max: number): number {
			return min + gen.random() * (max - min);
		}

		// INTEGER - generates a random number on [min,max)-integer-interval
		integer(min: number, max: number): number {
			++this.rollCount;
			return Random._integer(this._rand, min, max);
		}
		static integer(min: number, max: number): number {
			return Random._integer(Math, min, max);
		}
		private static _integer(gen: IRandomGen, min: number, max: number): number {
			return Math.floor(min + gen.random() * (max - min));
		}

		// BOOLEAN - generates true or false
		boolean(trueWeight?: number): boolean {
			++this.rollCount;
			return Random._boolean(this._rand, trueWeight);
		}
		static boolean(trueWeight?: number): boolean {
			return Random._boolean(Math, trueWeight);
		}
		static _boolean(gen: IRandomGen, trueWeight: number = 0.5): boolean {
			return gen.random() < trueWeight;
		}

		// STRING - generates a random string of specified length and chars
		string(length: number, chars?: string): string {
			++this.rollCount;
			return Random._string(this._rand, length, chars);
		}
		static string(length: number, chars?: string): string {
			return Random._string(Math, length, chars);
		}
		private static _string(gen: IRandomGen, length: number, chars: string = Random._stringChars): string {
			var len = chars.length;
			var floor = Math.floor;
			var result = "";
			for (var i = 0; i < length; ++i)
				result += chars.charAt(floor(gen.random() * len));
			return result;
		}

	}

}