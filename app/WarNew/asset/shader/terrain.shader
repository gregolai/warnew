uniform sampler2D tAtlas;
uniform float tileSize;
uniform float invTileSize;

varying vec3 vPos;
varying vec2 vUv;

#start VERTEX
	void main() {

		vPos = position;
		vUv = uv;
		
		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
	}
#end

#start FRAGMENT
	void main() {
		
		/*
		float xPos = vPos.x;
		float zPos = vPos.z;
		
		float xIndex = floor(xPos * invTileSize);
		float zIndex = floor(zPos * invTileSize);
	
		vec4 color;
		if(xIndex < float(nIndices)){
		
			color = vec4(1.0, 1.0, 1.0, 1.0);
		
		} else {
			if(mod(xIndex, 2.0) == 0.0){
				if(mod(zIndex, 2.0) == 0.0){
					color = vec4(1.0, 0.0, 0.0, 1.0);
				} else {
					color = vec4(0.0, 1.0, 0.0, 1.0);
				}
			} else {
				if(mod(zIndex, 2.0) == 0.0){
					color = vec4(1.0, 1.0, 0.0, 1.0);
				} else {
					color = vec4(0.0, 0.0, 1.0, 1.0);
				}
			}
		}
		gl_FragColor = color;
		*/
		
		gl_FragColor = texture2D(tAtlas, vUv);
	}
#end