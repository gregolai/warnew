/// <reference path="_include.ts"/>

module Engine.WarNew.Data {

	export var AllEntityData: EntityData[] = [];

	var defaultEntity: EntityData = {
		armorBase: 0,
		buildTime: 60,
		buttonX: 0,
		buttonY: 0,
		foodCost: 0,
		foodCreated: 0,
		goldCost: 0,
		healthMax: 60,
		hotkey: Key.None,
		iconId: "icon-default",
		lumberCost: 0,
		name: "Default Entity",
		oilCost: 0,
		occupyFlags: Occupy.None | 0,
		priority: 0,
		selectable: true,
		sequences: {
			type: SequenceType.Vertical,
			imageID: "default",
			frameWidth: 72,
			frameHeight: 72,
			idle: {
				frames: [0],
				frameTick: 0
			}
		},
		sight: 0,
		tooltip: "Default tooltip",
		tooltipExtended: "Default tooltip extended",

		// WEAPON
		hasWeapon: false,
		weaponBehavior: WeaponBehavior.Instant,
		weaponDamageBase: 0,
		weaponDamageRandom: 0,
		weaponRange: 1,
		weaponStrikeFrame: 0,

		// STRUCTURE
		isStructure: false,
		tilesHigh: 1,
		tilesWide: 1,

		// UNIT
		acquisitionRange: 0,
		boxWidth: 0,
		boxHeight: 0,
		builds: [],
		cargoCapacity: 0,
		coward: false,
		harvestResources: 0,
		isUnit: false,
		moveSpeed: 0
	};

	var defaultStructure: EntityData = $.extend(true, {}, defaultEntity, {
		armorBase: 20,
		iconId: "icon-default-structure",
		name: "Default Structure",
		occupyFlags: Occupy.LandStructure,
		sequences: {
			type: SequenceType.Vertical,
			imageID: "gold_mine",
			frameWidth: 96,
			frameHeight: 96,
			idle: {
				frames: [0],
				frameTick: 0,
			}
		},
		sight: 3,

		// STRUCTURE
		isStructure: true,
		tilesHigh: 3,
		tilesWide: 3
	});

	var defaultUnit: EntityData = $.extend(true, {}, defaultEntity, {
		foodCost: 1,
		iconId: "icon-default-unit",
		name: "Default Unit",
		occupyFlags: Occupy.LandUnit,
		sequences: {
			type: SequenceType.Directional,
			imageID: "footman",
			frameWidth: 72,
			frameHeight: 72,
			idle: {
				frames: [0],
				frameTick: 0,
			}
		},
		sight: 4,

		// UNIT
		acquisitionRange: 0,
		boxWidth: 31,
		boxHeight: 31,
		builds: [],
		cargoCapacity: 0,
		coward: false,
		harvestResources: 0,
		isUnit: true,
		moveSpeed: 4
	});

	AllEntityData[EntityType.Footman] = $.extend(true, {}, defaultUnit, {

		armorBase: 2,
		buildTime: 60,
		buttonX: 0,
		buttonY: 0,
		goldCost: 600,
		healthMax: 60,
		hotkey: Key.KEY_F,
		iconId: "icon-footman",
		name: "Footman",
		sequences: {
			type: SequenceType.Directional,
			imageID: "footman",
			frameWidth: 72,
			frameHeight: 72,
			idle: {
				frames: [0],
				frameTick: 0
			},
			attack: {
				frames: [5, 5, 6, 6, 7, 7, 8, 8, 8, 0, 0, 0],
				frameTick: 3
			},
			die: {
				frames: [9, 10, 11],
				frameTick: 5
			},
			move: {
				frames: [0, 1, 2, 3, 4],
				frameTick: 7
			}
		},
		tooltip: "Train |F|ootman",
		tooltipExtended: "I am a footman. Arrr!",

		// WEAPON
		hasWeapon: true,
		weaponBehavior: WeaponBehavior.Instant,
		weaponDamageBase: 10,
		weaponDamageRandom: 6,
		weaponRange: 1,
		weaponStrikeFrame: 6,

		// UNIT
		acquisitionRange: 4
	});

	AllEntityData[EntityType.Peasant] = $.extend(true, {}, defaultUnit, {

		armorBase: 0,
		buildTime: 45,
		buttonX: 0,
		buttonY: 0,
		goldCost: 400,
		healthMax: 30,
		hotkey: Key.KEY_P,
		iconId: "icon-peasant",
		name: "Peasant",
		sequences: {
			type: SequenceType.Directional,
			imageID: "peasant",
			frameWidth: 72,
			frameHeight: 72,
			idle: {
				frames: [0],
				frameTick: 0,
			},
			attack: {
				frames: [15, 16, 17, 18, 19],
				frameTick: 5,
			},
			die: {
				frames: [20, 21, 22],
				frameTick: 5,
			},
			idle_gold: {
				frames: [5],
				frameTick: 5,
			},
			idle_lumber: {
				frames: [10],
				frameTick: 5,
			},
			move: {
				frames: [0, 1, 2, 3, 4],
				frameTick: 5,
			},
			move_gold: {
				frames: [5, 6, 7, 8, 9],
				frameTick: 5,
			},
			move_lumber: {
				frames: [10, 11, 12, 13, 14],
				frameTick: 5,
			}
		},
		sight: 4,
		tooltip: "Train |P|easant",
		tooltipExtended: "I am a peasant. Nurrrrr!",

		// UNIT
		acquisitionRange: 4,
		builds: [
			EntityType.TownHall,
			EntityType.HumanBarracks,
			EntityType.Farm
		],
		coward: true,
		harvestResources: ResourceType.Gold | ResourceType.Lumber
	});

	AllEntityData[EntityType.Knight] = $.extend(true, {}, defaultUnit, {

		armorBase: 4,
		buildTime: 90,
		buttonX: 0,
		buttonY: 1,
		goldCost: 800,
		healthMax: 90,
		hotkey: Key.KEY_K,
		iconId: "icon-knight",
		lumberCost: 100,
		name: "Knight",
		sequences: {
			type: SequenceType.Directional,
			imageID: "knight",
			frameWidth: 72,
			frameHeight: 72,
			idle: {
				frames: [0],
				frameTick: 0,
			},
			attack: {
				frames: [5, 6, 7, 8],
				frameTick: 5,
			},
			die: {
				frames: [9, 10, 11, 12, 13],
				frameTick: 5,
			},
			move: {
				frames: [0, 1, 2, 1, 0, 3, 4, 3],
				frameTick: 5,
			}
		},
		tooltip: "Train |K|night",
		tooltipExtended: "I am a knight. Wahaha!",

		// UNIT
		acquisitionRange: 4
		
	});

	AllEntityData[EntityType.TownHall] = $.extend(true, {}, defaultStructure, {

		buildTime: 255,
		buttonX: 2,
		buttonY: 0,
		foodCreated: 1,
		goldCost: 1200,
		healthMax: 1200,
		hotkey: Key.KEY_H,
		iconId: "icon-town-hall",
		lumberCost: 800,
		name: "Town Hall",
		sequences: {
			type: SequenceType.Vertical,
			imageID: "town_hall",
			frameWidth: 128,
			frameHeight: 128,
			idle: {
				frames: [0],
				frameTick: 0,
			},
			construction: {
				frames: [1],
				frameTick: 0,
			},
			construction_site: {
				imageID: "land_construction",
				frames: [0, 1],
				frameTick: 0,
				frameWidth: 64,
				frameHeight: 64
			}
		},
		tooltip: "Build Town |H|all",
		tooltipExtended: "I am a town hall.",

		// STRUCTURE
		tilesHigh: 4,
		tilesWide: 4
	});

	AllEntityData[EntityType.Farm] = $.extend(true, {}, defaultStructure, {

		buildTime: 100,
		buttonX: 0,
		buttonY: 0,
		foodCreated: 4,
		goldCost: 500,
		healthMax: 400,
		hotkey: Key.KEY_F,
		iconId: "icon-farm",
		lumberCost: 250,
		name: "Farm",
		sequences: {
			type: SequenceType.Vertical,
			imageID: "farm",
			frameWidth: 64,
			frameHeight: 64,
			idle: {
				frames: [0],
				frameTick: 0,
			},
			construction: {
				frames: [1],
				frameTick: 0,
			},
			construction_site: {
				imageID: "land_construction",
				frames: [0, 1],
				frameTick: 0,
			}
		},
		tooltip: "Build |F|arm",
		tooltipExtended: "I am a humunz farm.",

		// STRUCTURE
		tilesHigh: 2,
		tilesWide: 2
	});
}
