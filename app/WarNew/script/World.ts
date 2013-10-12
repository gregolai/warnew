/// <reference path="_include.ts"/>

module Engine.WarNew {

	export class World {

		private _terrain: Terrain;
		private _quadtree: WorldQuadtree;
		private _players: Player[];
		private _nextEntityId: number;
		private _entities: Entity[];
		private _entitiesById: Entity[];
		private _entitiesByType: Entity[][];

		get terrain() { return this._terrain; }
		get quadtree() { return this._quadtree; }

		get entities() { return this._entities; }

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

		decode(raw?: RawWorldData): void {

			var terrain = this._terrain = new Terrain();
			terrain.decode(raw ? raw.terrain : undefined);

			this._quadtree = new WorldQuadtree(new Rect(0, 0, terrain.unitsWide, terrain.unitsDeep));

			
			var players = this._players = [];
			var rawPlayers = raw ? raw.players : [];
			for (var p = 0; p < PLAYERS_MAX; ++p) {
				var player = new Player(p, this);
				player.decode(rawPlayers[p]);
				players.push(player);
			}

			// SET NEXT ENTITY ID TO BE AFTER LAST TILE ID
			this._nextEntityId = terrain.tileCount;

			var entities = this._entities = [];
			var entitiesById = this._entitiesById = [];
			this._entitiesByType = [];

			// PHASE 1: CREATE ENTITIES WITH IDs
			var rawEntities = raw ? raw.entities : [];
			for (var i = 0, ii = rawEntities.length; i < ii; ++i) {
				var rawEnt = rawEntities[i];

				this._decodeEntity(rawEnt);
			}

		}

		spawnEntity(p: EntityParams, id?: number): Entity {

			// PREVENT SPAWNING INVALID ENTITIES
			var data = Data.AllEntityData[p.type];
			if (!data) {
				return null;
			}

			if (typeof id === "undefined") {
				id = this._nextEntityId;
			} else {
				this._nextEntityId = Math.max(this._nextEntityId, id);
			}
			++this._nextEntityId;

			var ent = new Entity(id, this, data, p);

			this._addEntity(ent);

			return ent;
		}

		destroyEntity(ent: Entity): void {

			this._removeEntity(ent);

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

		private _decodeEntity(raw: any[]): Entity {

			var raw_0 = <number>raw[0];
			var playerId		= 0xf & (raw_0 >> 0);			// 4 bits
			var entityType		= 0xff & (raw_0 >> 4);			// 8 bits
			var entityId		= 0x7ffff & (raw_0 >> 12);		// 19 bits

			var raw_1 = <number>raw[1];
			var tileID				= 0x7ffff & (raw_1 >> 0);		// 19 bits (MAX: 524287)

			var raw_2 = <number>raw[2];
			var health				= 0xfff & (raw_2 >> 0);			// 12 bits
			var mana				= 0x1f & (raw_2 >> 12);			// 5 bits
			var spawnState			= 0x7 & (raw_2 >> 17);			// 3 bits
			var goldContained		= 0x7ff & (raw_2 >> 20);		// 11 bits

			var raw_3 = <number>raw[3];
			var posX				= 0x7fff & (raw_3 >> 0);		// 15 bits
			var posY				= 0x7fff & (raw_3 >> 15);		// 15 bits

			return this.spawnEntity({
				owner: this.getPlayerById(playerId),
				type: entityType,
				posX: posX,
				posY: posY
			}, entityId);
		}

		private _encodeEntity(ent: Entity): any[] {

			var raw_0 = 0;
			raw_0 |= (ent.owner.id << 0);						// 4 bits
			raw_0 |= (ent.type << 4);							// 8 bits
			raw_0 |= (ent.id << 12);							// 19 bits

			// TODO: ENCODE OTHER THINGS

			return [raw_0];
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

		private _removeEntity(ent: Entity): void {

			var index = this._entities.indexOf(ent);
			if (!ent || index === -1) {
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