/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class World {

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

		init(raw?: RawWorldData): void {

			var terrain = this._terrain = new Terrain();
			terrain.init(raw ? raw.terrain : undefined);

			this._quadtree = new WorldQuadtree(new Rect(0, 0, terrain.getUnitsWide(), terrain.getUnitsDeep()), 4, 4);

			
			var players = this._players = [];
			var rawPlayers = raw ? raw.players : [];
			for (var p = 0; p < PLAYERS_MAX; ++p) {
				var player = new Player(p, this);
				player.init(rawPlayers[p]);
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
			var rawEntities = raw ? raw.entities : [];
			for (var i = 0, ii = rawEntities.length; i < ii; ++i) {
				var rawEnt = rawEntities[i];

				var raw_0 = rawEnt[0] || 0;
				var playerID	= 0xf & (raw_0 >> 0);			// 4 bits
				var entType		= 0xff & (raw_0 >> 4);			// 8 bits
				var entID		= 0x7ffff & (raw_0 >> 12);		// 19 bits
				
				var entData = Data.AllEntityData[entType];
				var entOwner = this.getPlayerById(playerID);
				if (!entData || !entOwner || entitiesById[entID]) {
					continue;
				}

				
				this._prevEntityID = Math.max(this._prevEntityID, entID);

				ents[entID] = new Entity(entID, this, entType, entData, entOwner)
				rawEnts[entID] = rawEnt;
			}

			// PHASE 2: INIT ENTITIES WITH WORLD
			for(var id in ents){
				var ent = ents[id];
				
				ent.init(rawEnts[id]);

				this._addEntity(ent);
			}
		}



		getPlayerById(pid: number): Player {
			return this._players[pid] || null;
		}
		
		getEntityById(id: number): Entity {
			return this._entitiesById[id] || null;
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

		}

		private _encodeEntity(ent: Entity): any[] {

			var raw_0 = 0;
			raw_0 |= (ent.getOwner().getID() << 0);					// 4 bits
			raw_0 |= (ent.getType() << 4);						// 8 bits
			raw_0 |= (ent.getID() << 12);						// 19 bits

			// TODO: ENCODE OTHER THINGS

			return [raw_0];
		}

		private _addEntity(ent: Entity): void {
			this._entities.push(ent);
			this._entitiesById[ent.getID()] = ent;

			var type = ent.getType();
			var typeList = this._entitiesByType[type];
			if (!typeList) {
				typeList = this._entitiesByType[type] = [];
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
			delete this._entitiesById[ent.getID()];

			var type = ent.getType();
			var typeList = this._entitiesByType[type];
			if (typeList) {
				var index = typeList.indexOf(ent);
				if (index !== -1) {
					typeList.splice(index, 1);
				}
				if (typeList.length === 0) {
					delete this._entitiesByType[type];
				}
			}

			this._quadtree.remove(ent);
		}
	}

}