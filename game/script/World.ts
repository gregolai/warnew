/// <reference path="_include.ts"/>

module Engine.Game {

	export class World {

		tick: number;

		private _terrain: Terrain;
		private _quadtree: WorldQuadtree;
		private _teams: Team[];
		private _players: Player[];
		private _prevEntityID: number;
		private _entities: Entity[];
		private _entitiesById: Entity[];
		private _entitiesByType: Entity[][];

		getTerrain() { return this._terrain; }
		getQuadtree() { return this._quadtree; }

		getEntities() { return this._entities; }

		constructor() {
		}

		dispose(): void {
			this._terrain.dispose();
			this._quadtree.dispose();

			var players = this._players;
			for (var i = 0, ii = players.length; i < ii; ++i) {
				players[i].dispose();
			}

			// TODO: Dispose players, entities, teams
		}

		load(loader?: Encoder): void {

			this.tick = 0;

			var terrain = this._terrain = new Terrain();
			terrain.init(loader);

			this._quadtree = new WorldQuadtree(new Rect(0, 0, terrain.getUnitsWide(), terrain.getUnitsDeep()), 4, 4);


			var teams = this._teams = [];
			var nTeams = loader ? loader.popInt() : 0;
			for (var i = 0; i < nTeams; ++i) {

				// TOOD: create teams
				if (loader) {
					loader.popString();
					loader.popBool();
				}
			}
			
			var players = this._players = [];
			var nPlayers = loader ? loader.popInt() : 0;
			for (var p = 0; p < nPlayers; ++p) {
				var player = new Player(p, this);
				player.init(loader);
				players.push(player);
			}

			// SET NEXT ENTITY ID TO BE AFTER LAST TILE ID
			this._prevEntityID = terrain.getTileCount();

			this._entities = [];
			var entitiesById = this._entitiesById = [];
			this._entitiesByType = [];

			var ents: Entity[] = [];
			var rawEnts: any[][] = [];

			// PHASE 1: CREATE ENTITIES WITH IDs
			var nEnts = loader ? loader.popInt() : 0;
			for (var i = 0; i < nEnts; ++i) {

				var playerID = loader.popInt();
				var entType = loader.popInt();
				var entID = loader.popInt();
				
				var entOwner = this.getPlayerById(playerID);

				this._prevEntityID = Math.max(this._prevEntityID, entID);

				ents.push(new Entity(entID, this, entType, entOwner));
			}

			// PHASE 2: INIT ENTITIES WITH WORLD
			for (var i = 0; i < nEnts; ++i) {
				var ent = ents[i];
				var loaded = ent.tryLoad(loader);
				if (loaded) {

					this._addEntity(ent);

				} else {
					console.log("WARNING: Could not load entity (phase 2 load):", ent);
				}
			}

		}

		spawnEntity(tileX: number, tileY: number, type: EntityType, builder: Entity): Entity {

			var ent = new Entity(this._prevEntityID + 1, this, type, builder.getOwner());

			var result = ent.placementTest(tileX, tileY, 0, null, builder);
			if (result.valid) {

				var loaded = ent.tryLoad(builder, this._terrain.getTileAtIndex(tileX, tileY, false));

				if (loaded) {

					this._addEntity(ent);

					++this._prevEntityID;

				} else {
					ent = null;

					console.log("WARNING: Could not load entity (phase 2 load):", ent);
				}
			}
			return ent;
		}

		getPlayerById(pid: number): Player {
			return this._players[pid] || null;
		}
		
		getEntityById(id: number): Entity {
			return this._entitiesById[id] || null;
		}

		getTargetById(id: number): WorldTarget {
			return this._entitiesById[id] || this._terrain.getTileById(id);
		}

		getEntitiesAtPoint(p: Vec2): Entity[] {
			return <Entity[]>this._quadtree.getItemsAtPoint(p);
		}

		getEntitiesInRect(rect: Rect): Entity[] {
			return <Entity[]>this._quadtree.getItemsInRect(rect);
		}

		step(): void {

			// UPDATE ENTITIES
			var ents = this._entities;
			for (var i = 0, ii = ents.length; i < ii; ++i)
				ents[i].update();

			++this.tick;
		}


		private _addEntity(ent: Entity): void {
			this._entities.push(ent);
			this._entitiesById[ent.id] = ent;

			var typeList = this._entitiesByType[ent.type];
			if (!typeList) {
				typeList = this._entitiesByType[ent.type] = [];
			}
			typeList.push(ent);

			this._quadtree.insert(ent);
		}

		private _removeEntity(ent: Entity): void;
		private _removeEntity(index: number): void;
		private _removeEntity(a: any): void {

			var ent: Entity, index: number;
			if (a instanceof Entity) {
				ent = <Entity>a;
				index = this._entities.indexOf(ent);
			} else {
				index = <number>a;
				ent = this._entities[index];
			}

			if (index === -1) {
				return;
			}

			this._entities.splice(index, 1);
			delete this._entitiesById[ent.id];
			
			var typeList = this._entitiesByType[ent.type];
			if (typeList) {
				var index = typeList.indexOf(ent);
				if (index !== -1) {
					typeList.splice(index, 1);
				}
				if (typeList.length === 0) {
					delete this._entitiesByType[ent.type];
				}
			}

			this._quadtree.remove(ent);
		}
	}

}