/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class TerrainMesh {

		private _tilesWide: number;
		private _tilesDeep: number;
		private _geometry: THREE.BufferGeometry;
		private _mesh: THREE.Mesh;

		getMesh() { return this._mesh; }

		constructor(tilesWide: number, tilesDeep: number) {

			var tilesWide = this._tilesWide = tilesWide;
			var tilesDeep = this._tilesDeep = tilesDeep;
			var vertexCount = tilesWide * tilesDeep * 6;

			var geom = this._geometry = new THREE.BufferGeometry();
			geom.attributes = {
				index: {
					itemSize: 1,
					array: new Uint16Array(vertexCount)
				},
				uv: {
					itemSize: 2,
					array: new Float32Array(vertexCount * 2),
					dynamic: true
				},
				position: {
					itemSize: 3,
					array: new Float32Array(vertexCount * 3),
					dynamic: true
				}
			};

			// chunkSize must be multiple of 3
			var chunkSize = Math.floor(65536 / 3) * 3;

			var a = -1,		// ATLAS TILE INDEX
				i = -1,		// INDICES INDEX
				p = -1;		// POSITION INDEX

			var ts = TILE_SIZE;
			var indices = geom.attributes.index.array;
			var positions = geom.attributes.position.array;

			for (var z = 0; z < tilesDeep; ++z) {
				for (var x = 0; x < tilesWide; ++x) {

					// INDICES
					{
						indices[++i] = i % chunkSize;
						indices[++i] = i % chunkSize;
						indices[++i] = i % chunkSize;

						indices[++i] = i % chunkSize;
						indices[++i] = i % chunkSize;
						indices[++i] = i % chunkSize;
					}

					// POSITIONS
					{
						var x0 = ts * x;
						var x1 = x0 + ts;
						var z0 = ts * z;
						var z1 = z0 + ts;

						positions[++p] = x1;
						positions[++p] = 0;
						positions[++p] = z1;

						positions[++p] = x1;
						positions[++p] = 0;
						positions[++p] = z0;

						positions[++p] = x0;
						positions[++p] = 0;
						positions[++p] = z0;

						positions[++p] = x0;
						positions[++p] = 0;
						positions[++p] = z0;

						positions[++p] = x0;
						positions[++p] = 0;
						positions[++p] = z1;

						positions[++p] = x1;
						positions[++p] = 0;
						positions[++p] = z1;
					}

				}
			}

			var offets = geom.offsets = [];

			var offsetCount = Math.ceil(indices.length / chunkSize);
			for (var a = 0; a < offsetCount; ++a) {
				var off = a * chunkSize;
				offets.push({
					start: off,
					index: off,
					count: Math.min(indices.length - off, chunkSize)
				});
			}
			
			geom.computeBoundingSphere();

			var shader = AssetManager.getShader("terrain");
			var texture = new THREE.Texture(AssetManager.getImage("forest"));
			texture.minFilter = THREE.NearestFilter;
			texture.magFilter = THREE.NearestFilter;
			texture.needsUpdate = true;
			
			var material = new THREE.ShaderMaterial({
				uniforms: {
					tAtlas: { type: "t", value: texture },
					tileSize: { type: "f", value: TILE_SIZE },
					invTileSize: { type: "f", value: TILE_INV_SIZE }
				},
				vertexShader: shader.vertexShader,
				fragmentShader: shader.fragmentShader
			});

			this._mesh = new THREE.Mesh(geom, material);
		}

		dispose(): void {
			this._geometry.dispose();
			this._mesh = null;
		}

		updateTile(tile: Tile): void {

			var tileID = tile.getID();

			var geom = this._geometry;

			// UPDATE UVs
			{
				var atw = TILE_ATLAS_TILES_WIDE;
				var ath = TILE_ATLAS_TILES_HIGH;

				var aIndex = tile._atlasIndex;
				var ax = (aIndex % atw);
				var ay = Math.floor(aIndex / atw);

				var uvX = 1 / atw;
				var uvY = 1 / ath;

				var u0 = ax * uvX;
				var u1 = u0 + uvX;

				var v0 = 1 - uvY * ay;
				var v1 = v0 - uvY;

				var uvs = geom.attributes["uv"].array;
				var u = 12 * tileID - 1;

				uvs[++u] = u1;
				uvs[++u] = v1;

				uvs[++u] = u1;
				uvs[++u] = v0;

				uvs[++u] = u0;
				uvs[++u] = v0;

				uvs[++u] = u0;
				uvs[++u] = v0;

				uvs[++u] = u0;
				uvs[++u] = v1;

				uvs[++u] = u1;
				uvs[++u] = v1;
			}

			// UPDATE HEIGHTS
			{
				var h1 = tile.getData().layer * TERRAIN_HEIGHT_SCALE;
				var h0 = h1 - TERRAIN_HEIGHT_SCALE;

				var positions = geom.attributes["position"].array;
				var p = 18 * tileID + 1;

				var cf = tile.getCornerFlags();

				positions[p] = ((cf & 0x8) !== 0) ? h1 : h0;
				p += 3;

				positions[p] = ((cf & 0x2) !== 0) ? h1 : h0;
				p += 3;

				positions[p] = ((cf & 0x1) !== 0) ? h1 : h0;
				p += 3;

				positions[p] = ((cf & 0x1) !== 0) ? h1 : h0;
				p += 3;

				positions[p] = ((cf & 0x4) !== 0) ? h1 : h0;
				p += 3;

				positions[p] = ((cf & 0x8) !== 0) ? h1 : h0;
			}

			(<any>geom.attributes["uv"]).needsUpdate = true;
			(<any>geom.attributes["position"]).needsUpdate = true;

		}

	}


}