/// <reference path="_include.ts"/>

module Engine.WarNew {

	export interface AnimationSequences {
		type: SequenceType;
		imageID: string;
		frameWidth: number;
		frameHeight: number;
		
		idle: AnimationSequenceData;

		attack?: AnimationSequenceData;
		construction?: AnimationSequenceData;
		construction_site?: AnimationSequenceData;
		decay?: AnimationSequenceData;
		die?: AnimationSequenceData;
		idle_gold?: AnimationSequenceData;
		idle_lumber?: AnimationSequenceData;
		move?: AnimationSequenceData;
		move_gold?: AnimationSequenceData;
		move_lumber?: AnimationSequenceData;
		occupied?: AnimationSequenceData;
	}

	export interface AnimationSequenceData {
		
		frames: number[];
		frameTick: number;

		// optional overrides
		type?: SequenceType;
		imageID?: string;
		frameWidth?: number;
		frameHeight?: number;
	}

	export interface EntityData {

		armorBase: number;
		buildTime: number;
		buttonX: number;
		buttonY: number;
		foodCost: number;
		foodCreated: number;
		goldCost: number;
		healthMax: number;
		hotkey: Key;
		iconId: string;
		lumberCost: number;
		name: string;
		oilCost: number;
		occupyFlags: BitFlags<Occupy>;
		pointValue: number;
		priority: number;
		selectable: boolean;
		sequences: AnimationSequences;
		sight: number;
		tooltip: string;
		tooltipExtended: string;

		// HAS WEAPON
		hasWeapon: boolean;
		weaponBehavior: WeaponBehavior;
		weaponDamageBase: number;
		weaponDamageRandom: number;
		weaponRange: number;
		weaponStrikeFrame: number;

		// IS STRUCTURE
		isStructure: boolean;
		tilesHigh: number;
		tilesWide: number;

		// IS UNIT
		acquisitionRange: number;
		boxWidth: number;
		boxHeight: number;
		builds: EntityType[];
		cargoCapacity: number;
		coward: boolean;
		harvestResources: BitFlags<ResourceType>;
		isUnit: boolean;
		moveSpeed: number;
	}

	export interface IconButton extends HTMLDivElement {
	}

	export interface ImageCanvas extends HTMLCanvasElement, HTMLImageElement { };

	export interface RawTeamData {
		name: string;
		shareVision: boolean;
	}
	export interface RawPlayerData {
		gold: number;
		lumber: number;
		name: string;
		oil: number;
		race: number;
		raceIsFixed: boolean;
		playerType: PlayerType;
		playerTypeIsFixed: boolean;
		teamID: number;
	}
	export interface RawTerrainData {
		type: string;
		width: number;
		height: number;
		tiles: number[];
	}
	export interface RawWorldData {
		terrain: RawTerrainData;
		teams: RawTeamData[];
		players: RawPlayerData[];
		entities: number[][];
	}

	export interface WorldTarget {
		getID(): number;
	}
}