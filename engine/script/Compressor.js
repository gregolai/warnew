var Engine;
(function (Engine) {
    (function (Compressor) {
        var _lzma;

        Engine.Vendor.onVendorsLoaded(function () {
            _lzma = new LZMA(Engine.VENDOR_DIRECTORY + "lzma_worker.js");
        });

        function compress(str, mode, onFinish, onProgress) {
            _lzma.compress(str, mode, onFinish, onProgress);
        }
        Compressor.compress = compress;

        function decompress(byteArray, onFinish, onProgress) {
            _lzma.decompress(byteArray, onFinish, onProgress);
        }
        Compressor.decompress = decompress;
    })(Engine.Compressor || (Engine.Compressor = {}));
    var Compressor = Engine.Compressor;
})(Engine || (Engine = {}));
