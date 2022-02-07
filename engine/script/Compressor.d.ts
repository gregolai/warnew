/// <reference path="_include.d.ts" />
/// <reference path="Vendor.d.ts" />
declare module Engine.Compressor {
    function compress(str: string, mode: number, onFinish?: (byteArray: number[]) => void, onProgress?: (percent: number) => void): void;
    function decompress(byteArray: number[], onFinish?: (str: string) => void, onProgress?: (percent: number) => void): void;
}
