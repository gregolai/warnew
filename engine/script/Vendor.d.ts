/// <reference path="_include.d.ts" />
declare module Engine.Vendor {
    var Box2D: Engine.VendorInfo;
    var Gamepad: Engine.VendorInfo;
    var History: Engine.VendorInfo;
    var Knockout: Engine.VendorInfo;
    var LZMA: Engine.VendorInfo;
    var SocketIO: Engine.VendorInfo;
    var Stats: Engine.VendorInfo;
    var Three: Engine.VendorInfo;
    var Underscore: Engine.VendorInfo;
    function onVendorsLoaded(callback?: () => void): void;
}
