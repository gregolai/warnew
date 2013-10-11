/// <reference path="_include.ts"/>

module Engine.WarNew {

	export interface Sprite {
		imageId: string;
		image: ImageCanvas;
		x: number;
		y: number;
		width: number;
		height: number;
	}

	export module AllSpriteData {

		var _sprites: { [spriteId: string]: Sprite; } = {};

		export function getSprite(spriteId: string, playerId?: number): Sprite {

			var sprite = _sprites[spriteId];
			if (sprite) {
				var image = ImageCache.getImage(sprite.imageId, playerId);
				if (image) {
					sprite.image = image;
					return sprite;
				}
			}
			return null;
		}

		// INTERNAL
		function _insert(imageId: string, spriteId: string, x: number, y: number, width: number, height: number): void {
			_sprites[spriteId] = {
				imageId: imageId,
				image: null,
				x: x,
				y: y,
				width: width,
				height: height
			};
		}

		// TILE TYPES:
		// FOREST
		_insert("tiles", "icon-forest-" + TileType.LightWater, 8 * 32, 20 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.DarkWater, 11 * 32, 20 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.LightDirt, 14 * 32, 20 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.DarkDirt, 9 * 32, 21 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.LightGrass, 4 * 32, 22 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.DarkGrass, 12 * 32, 22 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.Tree, 0, 7 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.Rock, 1 * 32, 11 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.HumanWall, 0, 1 * 32, 32, 32);
		_insert("tiles", "icon-forest-" + TileType.OrcWall, 2 * 32, 2 * 32, 32, 32);

		// ICONS
		_insert("icons", "icon-peasant", 0, 0, 46, 38);
		_insert("icons", "icon-peasant", 0, 0, 46, 38);
		_insert("icons", "icon-peon", 46, 0, 46, 38);
		_insert("icons", "icon-footman", 92, 0, 46, 38);
		_insert("icons", "icon-grunt", 138, 0, 46, 38);
		_insert("icons", "icon-archer", 184, 0, 46, 38);

		_insert("icons", "icon-axethrower", 0, 38, 46, 38);
		_insert("icons", "icon-ranger", 46, 38, 46, 38);
		_insert("icons", "icon-berserker", 92, 38, 46, 38);
		_insert("icons", "icon-knight", 138, 38, 46, 38);
		_insert("icons", "icon-ogre", 184, 38, 46, 38);

		_insert("icons", "icon-paladin", 0, 76, 46, 38);
		_insert("icons", "icon-ogre-mage", 46, 76, 46, 38);
		_insert("icons", "icon-dwarves", 92, 76, 46, 38);
		_insert("icons", "icon-sappers", 138, 76, 46, 38);
		_insert("icons", "icon-mage", 184, 76, 46, 38);

		_insert("icons", "icon-death-knight", 0, 114, 46, 38);
		_insert("icons", "icon-ballista", 46, 114, 46, 38);
		_insert("icons", "icon-catapult", 92, 114, 46, 38);
		_insert("icons", "icon-human-tanker", 138, 114, 46, 38);
		_insert("icons", "icon-orc-tanker", 184, 114, 46, 38);

		_insert("icons", "icon-human-transport", 0, 152, 46, 38);
		_insert("icons", "icon-orc-transport", 46, 152, 46, 38);
		_insert("icons", "icon-elven-destroyer", 92, 152, 46, 38);
		_insert("icons", "icon-troll-destroyer", 138, 152, 46, 38);
		_insert("icons", "icon-battleship", 184, 152, 46, 38);

		_insert("icons", "icon-juggernaught", 0, 190, 46, 38);
		_insert("icons", "icon-gnomish-submarine", 46, 190, 46, 38);
		_insert("icons", "icon-giant-turtle", 92, 190, 46, 38);
		_insert("icons", "icon-flying-machine", 138, 190, 46, 38);
		_insert("icons", "icon-zeppelin", 184, 190, 46, 38);

		_insert("icons", "icon-gryphon", 0, 228, 46, 38);
		_insert("icons", "icon-dragon", 46, 228, 46, 38);
		// hero
		// hero
		// hero

		// hero
		// hero
		_insert("icons", "icon-daemon", 92, 266, 46, 38);
		_insert("icons", "icon-farm", 138, 266, 46, 38);
		_insert("icons", "icon-pig-farm", 184, 266, 46, 38);

		_insert("icons", "icon-town-hall", 0, 304, 46, 38);
		_insert("icons", "icon-great-hall", 46, 304, 46, 38);
		_insert("icons", "icon-human-barracks", 92, 304, 46, 38);
		_insert("icons", "icon-orc-barracks", 138, 304, 46, 38);
		_insert("icons", "icon-elven-lumber-mill", 184, 304, 46, 38);

		_insert("icons", "icon-troll-lumber-mill", 0, 342, 46, 38);
		_insert("icons", "icon-human-blacksmith", 46, 342, 46, 38);
		_insert("icons", "icon-orc-blacksmith", 92, 342, 46, 38);
		_insert("icons", "icon-human-shipyard", 138, 342, 46, 38);
		_insert("icons", "icon-orc-shipyard", 184, 342, 46, 38);

		_insert("icons", "icon-human-refinery", 0, 380, 46, 38);
		_insert("icons", "icon-orc-refinery", 46, 380, 46, 38);
		_insert("icons", "icon-human-foundry", 92, 380, 46, 38);
		_insert("icons", "icon-orc-foundry", 138, 380, 46, 38);
		_insert("icons", "icon-human-oil-platform", 184, 380, 46, 38);

		_insert("icons", "icon-orc-oil-platform", 0, 418, 46, 38);
		_insert("icons", "icon-stables", 46, 418, 46, 38);
		_insert("icons", "icon-ogre-mound", 92, 418, 46, 38);
		_insert("icons", "icon-gnomish-inventor", 138, 418, 46, 38);
		_insert("icons", "icon-goblin-alchemist", 184, 418, 46, 38);

		_insert("icons", "icon-human-scout-tower", 0, 456, 46, 38);
		_insert("icons", "icon-orc-scout-tower", 46, 456, 46, 38);
		_insert("icons", "icon-church", 92, 456, 46, 38);
		_insert("icons", "icon-altar-of-storms", 138, 456, 46, 38);
		_insert("icons", "icon-mage-tower", 184, 456, 46, 38);

		_insert("icons", "icon-temple-of-the-damned", 0, 494, 46, 38);
		_insert("icons", "icon-keep", 46, 494, 46, 38);
		_insert("icons", "icon-stronghold", 92, 494, 46, 38);
		_insert("icons", "icon-castle", 138, 494, 46, 38);
		_insert("icons", "icon-fortress", 184, 494, 46, 38);

		// ?? Another castle?
		// ?? Another fortress?
		_insert("icons", "icon-gryphon-aviary", 92, 532, 46, 38);
		_insert("icons", "icon-dragon-roost", 138, 532, 46, 38);
		_insert("icons", "icon-goldmine", 184, 532, 46, 38);

		_insert("icons", "icon-human-guard-tower", 0, 570, 46, 38);
		_insert("icons", "icon-human-cannon-tower", 46, 570, 46, 38);
		_insert("icons", "icon-orc-guard-tower", 92, 570, 46, 38);
		_insert("icons", "icon-orc-cannon-tower", 138, 570, 46, 38);
		_insert("icons", "icon-oil-patch", 184, 570, 46, 38);

		_insert("icons", "icon-dark-portal", 0, 608, 46, 38);
		_insert("icons", "icon-circle-of-power", 46, 608, 46, 38);
		_insert("icons", "icon-runestone", 92, 608, 46, 38);
		_insert("icons", "icon-move-human", 138, 608, 46, 38);
		_insert("icons", "icon-move-orc", 184, 608, 46, 38);

		_insert("icons", "icon-repair", 0, 646, 46, 38);
		_insert("icons", "icon-harvest", 46, 646, 46, 38);
		_insert("icons", "icon-basic-build", 92, 646, 46, 38);
		_insert("icons", "icon-advanced-build", 138, 646, 46, 38);
		_insert("icons", "icon-peasant-return", 184, 646, 46, 38);

		_insert("icons", "icon-peon-return", 0, 684, 46, 38);
		_insert("icons", "icon-cancel", 46, 684, 46, 38);
		_insert("icons", "icon-human-wall", 92, 684, 46, 38);
		_insert("icons", "icon-orc-wall", 138, 684, 46, 38);
		_insert("icons", "icon-spell-slow", 184, 684, 46, 38);

		_insert("icons", "icon-spell-invisibility", 0, 722, 46, 38);
		_insert("icons", "icon-spell-haste", 46, 722, 46, 38);
		_insert("icons", "icon-spell-runes", 92, 722, 46, 38);
		_insert("icons", "icon-spell-unholy-armor", 722, 684, 46, 38);
		_insert("icons", "icon-mage-attack", 184, 722, 46, 38);

		_insert("icons", "icon-spell-flame-shield", 0, 760, 46, 38);
		_insert("icons", "icon-spell-fireball", 46, 760, 46, 38);
		_insert("icons", "icon-death-knight-attack", 92, 760, 46, 38);
		_insert("icons", "icon-spell-death-and-decay", 138, 760, 46, 38);
		_insert("icons", "icon-spell-whirlwind", 184, 760, 46, 38);

		_insert("icons", "icon-spell-blizzard", 0, 798, 46, 38);
		_insert("icons", "icon-spell-holy-vision", 46, 798, 46, 38);
		_insert("icons", "icon-spell-healing", 92, 798, 46, 38);
		// ?? I don't remember
		// ?? Fire heal?

		_insert("icons", "icon-spell-exorcism", 0, 836, 46, 38);
		_insert("icons", "icon-spell-eye-of-kilrogg", 46, 836, 46, 38);
		_insert("icons", "icon-spell-bloodlust", 92, 836, 46, 38);
		// ?? Two orcs head-to-head
		_insert("icons", "icon-skeleton", 184, 836, 46, 38);

		_insert("icons", "icon-spell-polymorph", 0, 874, 46, 38);
		_insert("icons", "icon-melee0-human", 46, 874, 46, 38);
		_insert("icons", "icon-melee1-human", 92, 874, 46, 38);
		_insert("icons", "icon-melee2-human", 138, 874, 46, 38);
		_insert("icons", "icon-melee0-orc", 184, 874, 46, 38);

		_insert("icons", "icon-melee1-orc", 0, 912, 46, 38);
		_insert("icons", "icon-melee2-orc", 46, 912, 46, 38);
		_insert("icons", "icon-rally-human", 92, 912, 46, 38);
		_insert("icons", "icon-rally-orc", 138, 912, 46, 38);
		_insert("icons", "icon-arrow1", 184, 912, 46, 38);

		_insert("icons", "icon-arrow2", 0, 950, 46, 38);
		_insert("icons", "icon-arrow3", 46, 950, 46, 38);
		_insert("icons", "icon-troll-axe1", 92, 950, 46, 38);
		_insert("icons", "icon-troll-axe2", 138, 950, 46, 38);
		_insert("icons", "icon-troll-axe3", 184, 950, 46, 38);

		// Horse?
		// Horse?
		_insert("icons", "icon-upgrade-longbow", 92, 988, 46, 38);
		_insert("icons", "icon-upgrade-ranger-scouting", 138, 988, 46, 38);
		_insert("icons", "icon-upgrade-marksmanship", 184, 988, 46, 38);

		_insert("icons", "icon-upgrade-lighter-axes", 0, 1026, 46, 38);
		_insert("icons", "icon-upgrade-berserker-scouting", 46, 1026, 46, 38);
		_insert("icons", "icon-upgrade-regeneration", 92, 1026, 46, 38);
		_insert("icons", "icon-catapult-ball1", 138, 1026, 46, 38);
		_insert("icons", "icon-catapult-ball2", 184, 1026, 46, 38);

		_insert("icons", "icon-ballista-bolt1", 0, 1064, 46, 38);
		_insert("icons", "icon-ballista-bolt2", 46, 1064, 46, 38);
		_insert("icons", "icon-dwarve-demolish", 92, 1064, 46, 38);
		_insert("icons", "icon-sapper-demolish", 138, 1064, 46, 38);
		_insert("icons", "icon-human-naval-weapons1", 184, 1064, 46, 38);

		_insert("icons", "icon-human-naval-weapons2", 0, 1102, 46, 38);
		_insert("icons", "icon-human-naval-weapons3", 46, 1102, 46, 38);
		_insert("icons", "icon-orc-naval-weapons1", 92, 1102, 46, 38);
		_insert("icons", "icon-orc-naval-weapons2", 138, 1102, 46, 38);
		_insert("icons", "icon-orc-naval-weapons3", 184, 1102, 46, 38);

		_insert("icons", "icon-orc-naval-stop", 0, 1140, 46, 38);
		_insert("icons", "icon-orc-naval-armor1", 46, 1140, 46, 38);
		_insert("icons", "icon-orc-naval-armor2", 92, 1140, 46, 38);
		_insert("icons", "icon-human-naval-stop", 138, 1140, 46, 38);
		_insert("icons", "icon-human-naval-armor1", 184, 1140, 46, 38);

		_insert("icons", "icon-human-naval-armor2", 0, 1178, 46, 38);
		_insert("icons", "icon-orc-naval-move", 46, 1178, 46, 38);
		_insert("icons", "icon-human-naval-move", 92, 1178, 46, 38);
		_insert("icons", "icon-orc-tanker-return", 138, 1178, 46, 38);
		_insert("icons", "icon-human-tanker-return", 184, 1178, 46, 38);

		_insert("icons", "icon-orc-harvest-oil", 0, 1216, 46, 38);
		_insert("icons", "icon-human-harvest-oil", 46, 1216, 46, 38);
		_insert("icons", "icon-human-exit-transport", 92, 1216, 46, 38);
		_insert("icons", "icon-orc-exit-transport", 138, 1216, 46, 38);
		_insert("icons", "icon-armor0-human", 184, 1216, 46, 38);

		_insert("icons", "icon-armor1-human", 0, 1254, 46, 38);
		_insert("icons", "icon-armor2-human", 46, 1254, 46, 38);
		_insert("icons", "icon-armor0-orc", 92, 1254, 46, 38);
		_insert("icons", "icon-armor1-orc", 138, 1254, 46, 38);
		_insert("icons", "icon-armor2-orc", 184, 1254, 46, 38);

		// mini icons?
		// mini icons?
		// mini icons?
		// mini icons?
		// mini icons?

		// mini icons?
		// mini icons?
		// mini icons?
		_insert("icons", "icon-patrol-human", 138, 1330, 46, 38);
		_insert("icons", "icon-patrol-orc", 184, 1330, 46, 38);

		_insert("icons", "icon-hold-position-human", 0, 1368, 46, 38);
		_insert("icons", "icon-hold-position-orc", 46, 1368, 46, 38);
		_insert("icons", "icon-ground-attack-human", 92, 1368, 46, 38);
		_insert("icons", "icon-ground-attack-orc", 138, 1368, 46, 38);
		_insert("icons", "icon-patrol-naval-human", 184, 1368, 46, 38);

		_insert("icons", "icon-patrol-naval-orc", 184, 1406, 46, 38);

		// UI
		_insert("ui", "button-large-normal", 0, 0, 224, 28);
		_insert("ui", "button-large-pressed", 0, 28, 224, 28);
		_insert("ui", "button-large-grayed", 0, 56, 224, 28);

		_insert("ui", "button-medium-normal", 224, 0, 164, 28);
		_insert("ui", "button-medium-pressed", 224, 28, 164, 28);
		_insert("ui", "button-medium-grayed", 224, 56, 164, 28);

		_insert("ui", "button-small-normal", 388, 0, 106, 28);
		_insert("ui", "button-small-pressed", 388, 28, 106, 28);
		_insert("ui", "button-small-grayed", 388, 56, 106, 28);

		_insert("ui", "icon-frame", 494, 0, 54, 46);
		_insert("ui", "icon-frame-with-health", 494, 0, 54, 53);

		_insert("ui", "tiny-bloodlust", 548, 0, 16, 16);
		_insert("ui", "tiny-haste", 548, 16, 16, 16);
		_insert("ui", "tiny-slow", 548, 32, 16, 16);
		_insert("ui", "tiny-invisible", 548, 48, 16, 16);
		_insert("ui", "tiny-shield", 548, 64, 16, 16);

		_insert("ui", "tiny-gold", 564, 0, 14, 14);
		_insert("ui", "tiny-lumber", 564, 14, 14, 14);
		_insert("ui", "tiny-oil", 564, 28, 14, 14);
		_insert("ui", "tiny-food", 564, 42, 14, 14);
		_insert("ui", "tiny-mana", 564, 56, 14, 14);

		_insert("ui", "vslider-normal", 0, 84, 19, 124);
		_insert("ui", "vslider-grayed", 19, 84, 19, 124);

		_insert("ui", "pulldown-normal", 38, 84, 300, 18);
		_insert("ui", "pulldown-grayed", 38, 102, 300, 18);

		_insert("ui", "hslider-normal", 38, 120, 172, 19);
		_insert("ui", "hslider-grayed", 38, 139, 172, 19);

		_insert("ui", "button-thin-medium-normal", 38, 158, 128, 20);
		_insert("ui", "button-thin-medium-pressed", 38, 178, 128, 20);
		_insert("ui", "button-thin-medium-grayed", 38, 198, 128, 20);

		_insert("ui", "button-thin-small-normal", 166, 158, 80, 20);
		_insert("ui", "button-thin-small-pressed", 166, 178, 80, 20);
		_insert("ui", "button-thin-small-pressed", 166, 198, 80, 20);

		_insert("ui", "button-verythin-normal", 246, 158, 80, 15);
		_insert("ui", "button-verythin-pressed", 246, 173, 80, 15);
		_insert("ui", "button-verythin-grayed", 246, 188, 80, 15);

		// TODO: down arrow
		// TODO: up arrow
		// TODO: right arrow
		// TODO: left arrow
		// TODO: checkbox
		// TODO: slider-knob
		// TODO: radio

		_insert("ui", "cursor-green-crosshairs", 210, 120, 33, 33);
		_insert("ui", "cursor-yellow-crosshairs", 243, 120, 33, 33);
		_insert("ui", "cursor-red-crosshairs", 276, 120, 33, 33);

		_insert("ui", "cursor-hand", 309, 120, 29, 32);
		_insert("ui", "cursor-hand-invalid", 338, 120, 31, 32);
		_insert("ui", "cursor-magnifying-glass", 369, 120, 36, 35);
		_insert("ui", "cursor-select", 338, 102, 18, 18);
	}

}