/// <reference path="_include.ts" />

/// <reference path="Vendor.ts" />

module Engine {

	export module Compressor {

		declare class LZMA {
			constructor(workerPath: string);

			// NOTE: mode can be 1-9 (1 is fast but not as good; 9 will probably make your browser crash).
			compress(string: string, mode: number, onFinish: (byteArray: number[]) => void, onProgress: (percent: number) => void): void;

			decompress(byteArray: number[], onFinish: (string: string) => void, onProgress: (percent: number) => void): void;
		}

		var _lzma: LZMA;

		Vendor.onVendorsLoaded(function () {

			_lzma = new LZMA(VENDOR_DIRECTORY + "lzma_worker.js");

		});

		export function compress(str: string, mode: number, onFinish?: (byteArray: number[]) => void, onProgress?: (percent: number) => void): void {
			
			_lzma.compress(str, mode, onFinish, onProgress);
		}

		export function decompress(byteArray: number[], onFinish?: (str: string) => void, onProgress?: (percent: number) => void): void {
			
			_lzma.decompress(byteArray, onFinish, onProgress);
		}

	}

}