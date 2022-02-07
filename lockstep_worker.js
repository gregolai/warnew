var _turn = -1;					// simulation
var _turnReady = true;
var _frameIntervalBuffer = [];
var _frameCountBuffer = [];

var _workerFrame;
var _clientFrame;
var _frameCount;

var _interval;

function startTurn(frameInterval, frameCount){

	if (_turnReady) {
		_turnReady = false;
		
		_turn += 1;

		_workerFrame = 0;
		_clientFrame = 0;
		_frameCount = frameCount;

		_interval = setInterval(tick, frameInterval);

	} else {
		_frameIntervalBuffer.push(frameInterval);
		_frameCountBuffer.push(frameCount);
	}
}

function tick(){

	if (_workerFrame === 0) {

		self.postMessage({ cmd: "process_commands" });

	} else {

		self.postMessage({ cmd: "do_frame" });

	}

	if (++_workerFrame === _frameCount)
		clearInterval(_interval);
}

function clientFrameDone(){

	if(++_clientFrame === _frameCount){
		
		self.postMessage({ cmd: "turn_done", args: [_turn] });

		_turnReady = true;
		if (_frameIntervalBuffer.length > 0)
			startTurn(_frameIntervalBuffer.shift(), _frameCountBuffer.shift());
	}
	
}

var fnMap = {
	frame_done: clientFrameDone,		// args: []
	start_turn: startTurn				// args: [frameInterval, frameCount]
};
self.addEventListener("message", function(e){

	var data = e.data;
	if(!data)
		return;
		
	var fn = fnMap[data.cmd];
	if(fn)
		fn.apply(null, data.args);
});
