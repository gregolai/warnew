var Engine;
(function (Engine) {
    (function (FontStyle) {
        FontStyle[FontStyle["Regular"] = 0x001] = "Regular";
        FontStyle[FontStyle["Italic"] = 0x002] = "Italic";

        FontStyle[FontStyle["SemiBold"] = 0x004] = "SemiBold";
        FontStyle[FontStyle["SemiBoldItalic"] = 0x008] = "SemiBoldItalic";

        FontStyle[FontStyle["Bold"] = 0x010] = "Bold";
        FontStyle[FontStyle["BoldItalic"] = 0x020] = "BoldItalic";

        FontStyle[FontStyle["ExtraBold"] = 0x040] = "ExtraBold";
        FontStyle[FontStyle["ExtraBoldItalic"] = 0x080] = "ExtraBoldItalic";

        FontStyle[FontStyle["Light"] = 0x100] = "Light";
        FontStyle[FontStyle["LightItalic"] = 0x200] = "LightItalic";

        FontStyle[FontStyle["ExtraLight"] = 0x400] = "ExtraLight";
        FontStyle[FontStyle["ExtraLightItalic"] = 0x800] = "ExtraLightItalic";
    })(Engine.FontStyle || (Engine.FontStyle = {}));
    var FontStyle = Engine.FontStyle;

    var GamepadControl = (function () {
        function GamepadControl() {
        }
        GamepadControl.A = "FACE_1";
        GamepadControl.B = "FACE_2";
        GamepadControl.X = "FACE_3";
        GamepadControl.Y = "FACE_4";
        GamepadControl.RightShoulderFront = "RIGHT_TOP_SHOULDER";
        GamepadControl.LeftShoulderFront = "LEFT_TOP_SHOULDER";
        GamepadControl.DPadLeft = "DPAD_LEFT";
        GamepadControl.DPadUp = "DPAD_UP";
        GamepadControl.DPadRight = "DPAD_RIGHT";
        GamepadControl.DPadDown = "DPAD_DOWN";
        GamepadControl.LeftStickHit = "LEFT_STICK";
        GamepadControl.RightStickHit = "RIGHT_STICK";
        GamepadControl.Back = "Raw Button 8";
        GamepadControl.Start = "Raw Button 9";

        GamepadControl.RightShoulderBack = "RIGHT_BOTTOM_SHOULDER";
        GamepadControl.LeftShoulderBack = "LEFT_BOTTOM_SHOULDER";
        GamepadControl.LeftStickX = "LEFT_STICK_X";
        GamepadControl.LeftStickY = "LEFT_STICK_Y";
        GamepadControl.RightStickX = "RIGHT_STICK_X";
        GamepadControl.RightStickY = "RIGHT_STICK_Y";
        return GamepadControl;
    })();
    Engine.GamepadControl = GamepadControl;

    (function (Key) {
        Key[Key["None"] = 0xff] = "None";

        Key[Key["KEY_MOUSE_LEFT"] = 0] = "KEY_MOUSE_LEFT";
        Key[Key["KEY_MOUSE_MIDDLE"] = 1] = "KEY_MOUSE_MIDDLE";
        Key[Key["KEY_MOUSE_RIGHT"] = 2] = "KEY_MOUSE_RIGHT";

        Key[Key["KEY_BACKSPACE"] = 8] = "KEY_BACKSPACE";
        Key[Key["KEY_TAB"] = 9] = "KEY_TAB";
        Key[Key["KEY_ENTER"] = 13] = "KEY_ENTER";
        Key[Key["KEY_SHIFT"] = 16] = "KEY_SHIFT";
        Key[Key["KEY_CTRL"] = 17] = "KEY_CTRL";
        Key[Key["KEY_ALT"] = 18] = "KEY_ALT";
        Key[Key["KEY_PAUSEBREAK"] = 19] = "KEY_PAUSEBREAK";
        Key[Key["KEY_CAPSLOCK"] = 20] = "KEY_CAPSLOCK";
        Key[Key["KEY_ESCAPE"] = 27] = "KEY_ESCAPE";
        Key[Key["KEY_SPACE"] = 32] = "KEY_SPACE";
        Key[Key["KEY_PAGEUP"] = 33] = "KEY_PAGEUP";
        Key[Key["KEY_PAGEDOWN"] = 34] = "KEY_PAGEDOWN";
        Key[Key["KEY_END"] = 35] = "KEY_END";
        Key[Key["KEY_HOME"] = 36] = "KEY_HOME";
        Key[Key["KEY_LEFT"] = 37] = "KEY_LEFT";
        Key[Key["KEY_UP"] = 38] = "KEY_UP";
        Key[Key["KEY_RIGHT"] = 39] = "KEY_RIGHT";
        Key[Key["KEY_DOWN"] = 40] = "KEY_DOWN";
        Key[Key["KEY_INSERT"] = 45] = "KEY_INSERT";
        Key[Key["KEY_DELETE"] = 46] = "KEY_DELETE";
        Key[Key["KEY_0"] = 48] = "KEY_0";
        Key[Key["KEY_1"] = 49] = "KEY_1";
        Key[Key["KEY_2"] = 50] = "KEY_2";
        Key[Key["KEY_3"] = 51] = "KEY_3";
        Key[Key["KEY_4"] = 52] = "KEY_4";
        Key[Key["KEY_5"] = 53] = "KEY_5";
        Key[Key["KEY_6"] = 54] = "KEY_6";
        Key[Key["KEY_7"] = 55] = "KEY_7";
        Key[Key["KEY_8"] = 56] = "KEY_8";
        Key[Key["KEY_9"] = 57] = "KEY_9";
        Key[Key["KEY_A"] = 65] = "KEY_A";
        Key[Key["KEY_B"] = 66] = "KEY_B";
        Key[Key["KEY_C"] = 67] = "KEY_C";
        Key[Key["KEY_D"] = 68] = "KEY_D";
        Key[Key["KEY_E"] = 69] = "KEY_E";
        Key[Key["KEY_F"] = 70] = "KEY_F";
        Key[Key["KEY_G"] = 71] = "KEY_G";
        Key[Key["KEY_H"] = 72] = "KEY_H";
        Key[Key["KEY_I"] = 73] = "KEY_I";
        Key[Key["KEY_J"] = 74] = "KEY_J";
        Key[Key["KEY_K"] = 75] = "KEY_K";
        Key[Key["KEY_L"] = 76] = "KEY_L";
        Key[Key["KEY_M"] = 77] = "KEY_M";
        Key[Key["KEY_N"] = 78] = "KEY_N";
        Key[Key["KEY_O"] = 79] = "KEY_O";
        Key[Key["KEY_P"] = 80] = "KEY_P";
        Key[Key["KEY_Q"] = 81] = "KEY_Q";
        Key[Key["KEY_R"] = 82] = "KEY_R";
        Key[Key["KEY_S"] = 83] = "KEY_S";
        Key[Key["KEY_T"] = 84] = "KEY_T";
        Key[Key["KEY_U"] = 85] = "KEY_U";
        Key[Key["KEY_V"] = 86] = "KEY_V";
        Key[Key["KEY_W"] = 87] = "KEY_W";
        Key[Key["KEY_X"] = 88] = "KEY_X";
        Key[Key["KEY_Y"] = 89] = "KEY_Y";
        Key[Key["KEY_Z"] = 90] = "KEY_Z";
        Key[Key["KEY_LEFT_WINDOW"] = 91] = "KEY_LEFT_WINDOW";
        Key[Key["KEY_RIGHT_WINDOW"] = 92] = "KEY_RIGHT_WINDOW";
        Key[Key["KEY_SELECT"] = 93] = "KEY_SELECT";
        Key[Key["KEY_NUMPAD_0"] = 96] = "KEY_NUMPAD_0";
        Key[Key["KEY_NUMPAD_1"] = 97] = "KEY_NUMPAD_1";
        Key[Key["KEY_NUMPAD_2"] = 98] = "KEY_NUMPAD_2";
        Key[Key["KEY_NUMPAD_3"] = 99] = "KEY_NUMPAD_3";
        Key[Key["KEY_NUMPAD_4"] = 100] = "KEY_NUMPAD_4";
        Key[Key["KEY_NUMPAD_5"] = 101] = "KEY_NUMPAD_5";
        Key[Key["KEY_NUMPAD_6"] = 102] = "KEY_NUMPAD_6";
        Key[Key["KEY_NUMPAD_7"] = 103] = "KEY_NUMPAD_7";
        Key[Key["KEY_NUMPAD_8"] = 104] = "KEY_NUMPAD_8";
        Key[Key["KEY_NUMPAD_9"] = 105] = "KEY_NUMPAD_9";
        Key[Key["KEY_MULTIPLY"] = 106] = "KEY_MULTIPLY";
        Key[Key["KEY_ADD"] = 107] = "KEY_ADD";
        Key[Key["KEY_SUBTRACT"] = 109] = "KEY_SUBTRACT";
        Key[Key["KEY_DECIMAL_POINT"] = 110] = "KEY_DECIMAL_POINT";
        Key[Key["KEY_DIVIDE"] = 111] = "KEY_DIVIDE";
        Key[Key["KEY_F1"] = 112] = "KEY_F1";
        Key[Key["KEY_F2"] = 113] = "KEY_F2";
        Key[Key["KEY_F3"] = 114] = "KEY_F3";
        Key[Key["KEY_F4"] = 115] = "KEY_F4";
        Key[Key["KEY_F5"] = 116] = "KEY_F5";
        Key[Key["KEY_F6"] = 117] = "KEY_F6";
        Key[Key["KEY_F7"] = 118] = "KEY_F7";
        Key[Key["KEY_F8"] = 119] = "KEY_F8";
        Key[Key["KEY_F9"] = 120] = "KEY_F9";
        Key[Key["KEY_F10"] = 121] = "KEY_F10";
        Key[Key["KEY_F11"] = 122] = "KEY_F11";
        Key[Key["KEY_F12"] = 123] = "KEY_F12";
        Key[Key["KEY_NUM_LOCK"] = 144] = "KEY_NUM_LOCK";
        Key[Key["KEY_SCROLL_LOCK"] = 145] = "KEY_SCROLL_LOCK";
        Key[Key["KEY_SEMI_COLON"] = 186] = "KEY_SEMI_COLON";
        Key[Key["KEY_EQUAL_SIGN"] = 187] = "KEY_EQUAL_SIGN";
        Key[Key["KEY_COMMA"] = 188] = "KEY_COMMA";
        Key[Key["KEY_DASH"] = 189] = "KEY_DASH";
        Key[Key["KEY_PERIOD"] = 190] = "KEY_PERIOD";
        Key[Key["KEY_FORWARD_SLASH"] = 191] = "KEY_FORWARD_SLASH";
        Key[Key["KEY_GRAVE_ACCENT"] = 192] = "KEY_GRAVE_ACCENT";
        Key[Key["KEY_OPEN_BRACKET"] = 219] = "KEY_OPEN_BRACKET";
        Key[Key["KEY_BACK_SLASH"] = 220] = "KEY_BACK_SLASH";
        Key[Key["KEY_CLOSE_BRACKET"] = 221] = "KEY_CLOSE_BRACKET";
        Key[Key["KEY_SINGLE_QUOTE"] = 222] = "KEY_SINGLE_QUOTE";
    })(Engine.Key || (Engine.Key = {}));
    var Key = Engine.Key;
    ;
})(Engine || (Engine = {}));
