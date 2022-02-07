/// <reference path="_include.ts"/>

module Engine.Game {

	export interface ActionState {
		sequenceName: string;
		tick: (actionTicks: number, actionParams: ActionParams) => boolean;
	}

	export interface ActionParams {
		type: ActionType;
		onActionComplete?: () => void;
		direction?: Direction;

		// Moving
		moveStepX?: number;
		moveStepY?: number;
		moveEndX?: number;
		moveEndY?: number;
		
		// Attacking, Casting
		targetEntity?: Entity;      // ENTITY BEING TARGETED
		targetTile?: Tile;          // TILE BEING TARGETED
		swingTick?: number;         // TICK WHEN ATTACK/CAST SWING OCCURS

		// Attacking, Casting, BeingConstructed, Moving, Waiting
		endTick?: number;           // TICK WHEN ACTION ENDS

		// BeingConstructed
		buildTile?: Tile;
		builder?: Entity;
		healthPerTick?: number;
		sequenceIndex?: number;
		sequenceIncreaseTicks?: number[];

		// FILLED OUT IN _setActionState method:
		// Waiting
		order?: Order;
		orderQueueLength?: number;
	}

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

	export interface CommandResult {
		success: boolean;
		message?: string;
		validEntities?: Entity[];

		// if WorldCommand.buffer is set
		data?: string;
	}

	export interface EntityData {

		abilities: AbilityType[];
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
		occupyFlags: number;
		page: CommandPage;
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
		unitsTrained: EntityType[];

		// IS UNIT
		acquisitionRange: number;
		boxWidth: number;
		boxHeight: number;
		builds: EntityType[];
		cargoCapacity: number;
		coward: boolean;
		harvestResources: number; //BitFlags<ResourceType>;
		isUnit: boolean;
		moveSpeed: number;
	}


	export interface IconButton extends HTMLDivElement {
	}

	export interface ImageCanvas extends HTMLCanvasElement, HTMLImageElement { };

	export interface Order {
		think(): ThinkResult;
	}

	export interface PlacementTestResult {
		valid: boolean;
		message?: string;
		validTiles?: Tile[];
		invalidTiles?: Tile[];
		blockingEntities?: Entity[];
		ignoreEnt?: Entity;
		ignorePlayerUnits?: Player;
	}

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

	export enum SpawnState {
		None			= 0,
		Constructing	= 1,
		Alive			= 2,
		Dead			= 3
	}

	export interface TileData {
		name: string;
		size: number;
		layer: number;
		typeBelow: TileType;
		typeAbove: TileType;
		indices: number[][];
	}

	export interface WorldPathTarget {
		getPathHeuristic(type: PathType, weight: number): (fromTile: Tile) => number;
	}

	export interface WorldTarget extends WorldPathTarget {
		id: number;
	}

}