/// <reference path="_include.ts"/>

module Engine.Game {

	export module WorldEvent {

		var _names: string[] = [];
		export class Event { name: string; constructor(name: string) { this.name = name; _names.push(name); } }

		var _handlers: { [evt: string]: Function[]; } = {};
		function _add(evt: Event, delegate: Function): void {
			var h = _handlers[evt.name];
			if (!h)
				h = _handlers[evt.name] = [];
			h.push(delegate);
		}
		function _remove(evt: Event, delegate: Function): void {
			var h = _handlers[evt.name];
			if (!h)
				return;
			var index = h.indexOf(delegate);
			if (index !== -1)
				h.splice(index, 1);
		}
		function _trigger(evt: Event, ...argArray: any[]): void {
			var h = _handlers[evt.name];
			if (!h)
				return;
			for (var i = 0, ii = h.length; i < ii; ++i)
				h[i].apply(null, argArray);
		}



		export class EntityEvent<T> extends Event {
			constructor(name: string) { super("entity_" + name); }
			subscribe(f: (ent: Entity, oldVal: T, newVal: T) => void): void { _add(this, f); }
			unsubscribe(f: (ent: Entity, oldVal: T, newVal: T) => void): void { _remove(this, f); }
			trigger(ent: Entity, oldVal: T, newVal: T) { _trigger(this, ent, oldVal, newVal); }
		}

		export var Entity = {
			container: new EntityEvent<Entity>("container"),
			health: new EntityEvent<number>("health"),
			mana: new EntityEvent<number>("mana"),
			spawnState: new EntityEvent<SpawnState>("spawnState"),
			tile: new EntityEvent<Tile>("tile")
		};

	}

}