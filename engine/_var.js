var Engine;
(function (Engine) {
    Engine.MAX_INT = 0x7fffffff;

    Engine.BIT_0 = 0x1;
    Engine.BIT_1 = 0x2;
    Engine.BIT_2 = 0x4;
    Engine.BIT_3 = 0x8;
    Engine.BIT_4 = 0x10;
    Engine.BIT_5 = 0x20;
    Engine.BIT_6 = 0x40;
    Engine.BIT_7 = 0x80;
    Engine.BIT_8 = 0x100;
    Engine.BIT_9 = 0x200;
    Engine.BIT_10 = 0x400;
    Engine.BIT_11 = 0x800;
    Engine.BIT_12 = 0x1000;
    Engine.BIT_13 = 0x2000;
    Engine.BIT_14 = 0x4000;
    Engine.BIT_15 = 0x8000;
    Engine.BIT_16 = 0x10000;
    Engine.BIT_17 = 0x20000;
    Engine.BIT_18 = 0x40000;
    Engine.BIT_19 = 0x80000;
    Engine.BIT_20 = 0x100000;
    Engine.BIT_21 = 0x200000;
    Engine.BIT_22 = 0x400000;
    Engine.BIT_23 = 0x800000;
    Engine.BIT_24 = 0x1000000;
    Engine.BIT_25 = 0x2000000;
    Engine.BIT_26 = 0x4000000;
    Engine.BIT_27 = 0x8000000;
    Engine.BIT_28 = 0x10000000;
    Engine.BIT_29 = 0x20000000;
    Engine.BIT_30 = 0x40000000;

    Engine.ROOT_DIRECTORY = "./";

    Engine.VENDOR_DIRECTORY = Engine.ROOT_DIRECTORY + "vendor/script/";

    Engine.ASSET_DIRECTORY = Engine.ROOT_DIRECTORY + "asset/";

    Engine.GAME_DIRECTORY = Engine.ROOT_DIRECTORY + "game/";
    Engine.GAME_SCRIPT_DIRECTORY = Engine.GAME_DIRECTORY + "script/";
    Engine.GAME_STATE_DIRECTORY = Engine.GAME_SCRIPT_DIRECTORY + "state/";
})(Engine || (Engine = {}));
