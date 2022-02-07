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
var Log;
(function (Log) {
    function handshake(socketId) {
    }
    Log.handshake = handshake;
    function room(roomId, message) {
    }
    Log.room = room;
    function user(user, message) {
        console.log((user.username).grey + " - " + message);
    }
    Log.user = user;
})(Log = exports.Log || (exports.Log = {}));
var Sanitize;
(function (Sanitize) {
    function toString(a) {
        if (!a)
            a = "";
        return "" + a;
    }
    Sanitize.toString = toString;
    function toInt(a) {
        return Math.floor(parseInt(a));
    }
    Sanitize.toInt = toInt;
})(Sanitize = exports.Sanitize || (exports.Sanitize = {}));
var String;
(function (String) {
    function rpad(str, length, char, clamp) {
        if (char === void 0) { char = " "; }
        str = str || "";
        if (clamp && str.length > length)
            str = str.substr(0, length);
        var diff = length - str.length;
        while (--diff >= 0)
            str += char;
        return str;
    }
    String.rpad = rpad;
    function lpad(str, length, char, clamp) {
        if (char === void 0) { char = " "; }
        str = str || "";
        if (clamp && str.length > length)
            str = str.substr(0, length);
        var diff = length - str.length;
        while (--diff >= 0)
            str = char + str;
        return str;
    }
    String.lpad = lpad;
    function startsWith(str, searchString, position) {
        str = str || "";
        searchString = searchString || "";
        position = position || 0;
        return str.indexOf(searchString, position) === position;
    }
    String.startsWith = startsWith;
    function endsWith(str, searchString, position) {
        str = str || "";
        searchString = searchString || "";
        position = position || str.length;
        position = position - searchString.length;
        var lastIndex = str.lastIndexOf(searchString);
        return lastIndex !== -1 && lastIndex === position;
    }
    String.endsWith = endsWith;
})(String = exports.String || (exports.String = {}));
var Validate;
(function (Validate) {
    function isString(a) {
        return typeof a === "string";
    }
    Validate.isString = isString;
    function isGuid(a, length) {
        if (!isString(a))
            return false;
        var str = a;
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
    Validate.isGuid = isGuid;
})(Validate = exports.Validate || (exports.Validate = {}));
function logClient(clientId, message) {
    console.log(("" + clientId).grey + " - " + message);
}
exports.logClient = logClient;
function makeGuid(length) {
    var chars = _guidChars;
    var charsLen = chars.length;
    var result = "";
    for (var i = 0; i < length; ++i)
        result += chars.charAt(Math.floor(Math.random() * charsLen));
    return result;
}
exports.makeGuid = makeGuid;
var _guidChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
