var Engine;
(function (Engine) {
    (function (Input) {
        var _initialized = false;
        var _mousePosition = new Engine.Vec2();
        var _keysDown = [];
        var _gamepad = null;
        var _gamepadControls = {};
        var _listeners = [];
        var _curEvent = null;

        function isKeyDown(key) {
            return _keysDown[key] || false;
        }
        Input.isKeyDown = isKeyDown;

        function getMousePosition() {
            return _mousePosition;
        }
        Input.getMousePosition = getMousePosition;

        function preventDefault() {
            if (_curEvent) {
                _curEvent.preventDefault();
                _curEvent.stopPropagation();
            }
        }
        Input.preventDefault = preventDefault;

        function register(listener) {
            if (!_initialized) {
                _init();
                _initialized = true;
            }

            if (!listener || _listeners.indexOf(listener) !== -1) {
                return;
            }
            _listeners.push(listener);
        }
        Input.register = register;

        function unregister(listener) {
            if (!listener) {
                return;
            }

            var index = _listeners.indexOf(listener);
            if (index === -1) {
                return;
            }
            _listeners.splice(index, 1);
        }
        Input.unregister = unregister;

        function _init() {
            window.addEventListener("contextmenu", _contextMenu, true);
            window.addEventListener("blur", _blur, true);
            window.addEventListener("keydown", _keyDown, false);
            window.addEventListener("keyup", _keyUp, false);

            window.addEventListener("mouseout", _mouseMove, false);
            window.addEventListener("mouseover", _mouseMove, false);

            document.body.addEventListener("mousedown", _mouseDown, false);
            window.addEventListener("mouseup", _mouseUp, false);
            window.addEventListener("mousemove", _mouseMove, false);

            document.body.addEventListener("mousewheel", _mouseWheel, false);
            document.body.addEventListener("DOMMouseScroll", _mouseWheel, false);

            if (typeof Gamepad !== "undefined") {
                var gamepad = _gamepad = new Gamepad();
                gamepad.bind(Gamepad.Event.CONNECTED, _gamepadConnect);
                gamepad.bind(Gamepad.Event.DISCONNECTED, _gamepadDisconnect);
                gamepad.bind(Gamepad.Event.TICK, _gamepadTick);
                gamepad.bind(Gamepad.Event.BUTTON_DOWN, _gamepadButtonDown);
                gamepad.bind(Gamepad.Event.BUTTON_UP, _gamepadButtonUp);
                gamepad.bind(Gamepad.Event.AXIS_CHANGED, _gamepadAxisChanged);
                gamepad.init();
            }
        }

        function _resetAllKeys() {
            for (var i = 0, ii = _keysDown.length; i < ii; ++i) {
                if (_keysDown[i]) {
                    _keysDown[i] = false;
                    __broadcast("onKeyUp", null, [i]);
                }
            }
        }

        function __broadcast(onEventName, evt, args) {
            _curEvent = evt;

            var listeners = _listeners;
            for (var i = 0, ii = listeners.length; i < ii; ++i) {
                var listener = listeners[i];
                var method = listener[onEventName];
                if (method) {
                    method.apply(listener, args);
                }
            }
        }

        function _contextMenu(evt) {
            if (Engine.disableContextMenu) {
                if (isKeyDown(Engine.Key.KEY_CTRL) && isKeyDown(Engine.Key.KEY_SHIFT)) {
                    _resetAllKeys();
                } else {
                    evt.preventDefault();
                    evt.stopPropagation();
                }
            } else {
                _resetAllKeys();
            }
        }

        function _blur(evt) {
            _resetAllKeys();
        }

        function _keyDown(evt) {
            if (!_keysDown[evt.keyCode]) {
                _keysDown[evt.keyCode] = true;

                __broadcast("onKeyDown", evt, [evt.keyCode]);
            }

            __broadcast("onBufferedKeyDown", evt, [evt.keyCode]);
        }
        function _keyUp(evt) {
            if (_keysDown[evt.keyCode]) {
                _keysDown[evt.keyCode] = false;

                __broadcast("onKeyUp", evt, [evt.keyCode]);
            }
        }
        function _mouseDown(evt) {
            _keysDown[evt.button] = true;

            __broadcast("onMouseDown", evt, [evt.pageX, evt.pageY, evt.button]);
        }
        function _mouseUp(evt) {
            _keysDown[evt.button] = false;

            __broadcast("onMouseUp", evt, [evt.pageX, evt.pageY, evt.button]);
        }
        function _mouseMove(evt) {
            var x = _mousePosition.x = evt.pageX;
            var y = _mousePosition.y = evt.pageY;

            __broadcast("onMouseMove", evt, [x, y]);
        }
        function _mouseWheel(evt) {
            var delta = (evt).wheelDelta || -evt.detail;

            __broadcast("onMouseWheel", evt, [delta]);
        }

        function _gamepadConnect(evt) {
            console.log("GAMEPAD CONNECT");
            console.log(evt);

            __broadcast("onGamepadConnect", null);
        }
        function _gamepadDisconnect(evt) {
            console.log("GAMEPAD DISCONNECT");
            console.log(evt);

            __broadcast("onGamepadDisconnect", null);
        }
        function _gamepadTick(evt) {
            __broadcast("onGamepadTick", null, [evt.length]);
        }
        function _gamepadButtonDown(evt) {
            _gamepadControls[evt.control] = 1;

            __broadcast("onGamepadButtonDown", null, [evt.control]);
        }
        function _gamepadButtonUp(evt) {
            _gamepadControls[evt.control] = 0;

            __broadcast("onGamepadButtonUp", null, [evt.control]);
        }
        function _gamepadAxisChanged(evt) {
            var value = evt.value;
            if (Math.abs(value) < 0.08) {
                value = 0;
            }

            _gamepadControls[evt.axis] = value;

            __broadcast("onGamepadAxisChanged", null, [evt.axis, value]);
        }
    })(Engine.Input || (Engine.Input = {}));
    var Input = Engine.Input;
})(Engine || (Engine = {}));
