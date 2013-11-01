var Compressor = (function(){

	function clamp(v, min, max){
		return (v < min ? min : (v > max ? max : v));
	}

	var Compressor = function(queue){
		this.data = "";
		this.queue = !!queue;
	};
	Compressor.prototype._push = function(v){
		if(this.queue)
			this.data = v + this.data;	// act as queue (fi/fo)
		else
			this.data += v;				// act as stack (fi/lo)
	};
	
	Compressor.prototype.pushBool = function(v){
		this._push(!!v ? "1" : "0");
	};
	
	Compressor.prototype.pushInt = function(v){
		// ENSURE VALID INT
		v = parseInt(clamp(v, -9007199254740992, 9007199254740992));
		if(isNaN(v))
			v = 0;

		var s = v.toString(16);
		this._push(s + s.length.toString(16));
	};
	
	Compressor.prototype.pushString = function(v){
		// examples:
		// 256 characters, len = 0x100, lenlen = 3
		// 16 characters, len = 0x10, lenlen = 2
		// 15 characters, len = 0xf, lenlen = 1
	
		var s = "" + v;
		var len = s.length.toString(16);
		this._push(s + len + len.length.toString(16));	
	};
	
	Compressor.prototype.pushFloat = function(v){
		// ENSURE VALID FLOAT
		v = parseFloat(clamp(v, -99999999999999, 99999999999999));
		if(isNaN(v))
			v = 0;
		
		// GET DECIMAL INDEX AND REMOVE IT
		var s = v.toString();
		var d = s.indexOf(".");
		if(d === -1){
			// DECIMAL GOES AT END
			d = s.length;
		} else {
			// DECIMAL FOUND - REMOVE IT
			s = s.slice(0, d) + s.slice(d + 1);
			if(s[0] === "0"){
				s = s.slice(1);
				--d;
			}
		}

		// CONVERT TO HEX STRING FROM DECIMAL AND TRUNCATE
		s = parseInt(s, 10).toString(16);
		d = Math.min(15, d);
		this._push(s + d.toString(16) + s.length.toString(16));
	};
	
	Compressor.prototype.popBool = function(){
		var r = (this.data[this.data.length-1] === "1");
		this.data = this.data.slice(0, -1);
		return r;
	};
	
	Compressor.prototype.popInt = function(){
		
		var r = 0;
		var data = this.data;
		var len = parseInt(data[data.length-1], 16);
		if(len > 0){
			r = parseInt(data.substr(data.length-1-len, len), 16);
			this.data = data.slice(0, -len-1);
		}
		return r;
	};
	
	Compressor.prototype.popString = function(){
	
		var r = "";
		var data = this.data;
		var lenlen = parseInt(data[data.length-1], 16);
		if(lenlen > 0){

			var len = parseInt(data.substr(data.length-1-lenlen, lenlen), 16);
			if(len > 0){
				r = "" + data.substr(data.length-1-lenlen-len, len);
				this.data = data.slice(0, -lenlen-len-1);
			}
		}
		return r;
	};
	
	Compressor.prototype.popFloat = function(){
		
		var r = 0;
		var data = this.data;
		var len = parseInt(data[data.length-1], 16);
		if(len > 0){
			var d = parseInt(data[data.length-2], 16);

			// CONVERT TO DECIMAL FROM HEX STRING
			var s = parseInt(data.substr(data.length-2-len, len), 16).toString();

			r = parseFloat(s.slice(0, d) + "." + s.slice(d));
			this.data = data.slice(0, -len-2);
		}
		return r;
	};
	
	return Compressor;
})();