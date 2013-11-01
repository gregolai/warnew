/// <reference path="_include.ts"/>

module Engine.WarNew {

	export enum AbilityType {
		// TODO
	}

	export enum ActionType {
		Waiting,
		Moving,
		Attacking,
		BeingConstructed
	}

	export enum AnimationSequenceType {
		Directional,		// 5-column, vertical
		Vertical,			// Single-column, vertical
		Horizontal			// 5-column, horizontal
	}

	export enum CommandPage {
		Default			= 0,

		AdvancedBuild	= 1,
		BasicBuild		= 2,
		Targeting		= 3
	}

	export enum Direction {
		None		= 0,
		Left		= BIT_0,
		Up			= BIT_1,
		Right		= BIT_2,
		Down		= BIT_3,

		DownLeft	= BIT_3 | BIT_0,
		UpLeft		= BIT_0 | BIT_1,
		UpRight		= BIT_1 | BIT_2,
		DownRight	= BIT_2 | BIT_3
	}

	export enum EntityContainType {
		Cargo,
		Builder,
		Miner
	}

	export enum EntityType {
		None = 0xff,

		// UNITS
		Footman = 0x00,
		Knight = 0x06,
		Peasant = 0x02,


		// STRUCTURES
		Farm = 0x3a,
		PigFarm = 0x3b,
		HumanBarracks = 0x3c,
		HumanBlacksmith = 0x52,
		OrcBarracks = 0x3d,

		Stables = 0x42,
		TownHall = 0x4a,

		GoldMine = 0x5c

	}

	export enum Occupy {
		None			= 0,
		LandUnit		= BIT_0,
		//Structure		= BIT_1,
		LandStructure	= BIT_0 | BIT_1,
		Sea				= BIT_2,
		Air				= BIT_3
	}

	export enum OrderType {
		None,

		AttackEntity,
		AttackToTile,
		BuildAtTile,
		CastOnEntity,
		CastOnTile,
		ClearArea,
		FollowEntity,
		HarvestGold,
		HoldPosition,
		MoveToTile,
		PatrolToEntity,
		PatrolToTile,
		UpgradeSelf       // Watch Tower -> Cannon Tower
	}

	export enum PathType {
		ToTarget,
		ToArea,
		AvoidTarget,
		AvoidArea,
		ClearArea
	}

	export enum PlacementTestFlag {
		Message				= BIT_0,
		BlockingEntities	= BIT_1,
		ValidTiles			= BIT_2,
		InvalidTiles		= BIT_3
	}

	export enum PlayerType {
		None			= 0,
		User			= 1,
		Computer		= 2,
		Rescue			= 3
	}

	export enum ResourceType {
		None	= 0,

		Gold	= 1,
		Lumber	= 2,
		Oil		= 4
	}

	export enum SequenceType {
		Directional		= 1,		// 5-column, vertical
		Vertical		= 2,		// Single-column, vertical
		Horizontal		= 3			// 5-column, horizontal
	}

	export enum SequenceUpdateResult {
		Default,
		FrameIncremented,
		SequenceElapsed
	}

	// THE RESULT OF WHEN AN ENTITY THINKS
	export enum ThinkResult {
		NotDone,
		Done,
		DoneIfQueue
	}

	export enum TileSpecialFlag {
	}

	export enum TileType {
		None = 0,

		LightWater = 2,
		DarkWater = 3,
		LightDirt = 4,
		DarkDirt = 5,
		LightGrass = 6,
		DarkGrass = 7,
		Tree = 8,
		Rock = 9,
		HumanWall = 10,
		OrcWall = 11,
		HumanWallDamaged = 12,
		OrcWallDamaged = 13,
		WallDestroyed = 14
	}

	export enum UserState {
		Default			= 0,    // Game/Editor
		Selecting		= 1,    // Game/Editor
		PlacingEntity	= 2,    // Game/Editor
		PlacingTerrain	= 3,    // Editor
		Targeting		= 4     // Game
	}

	export enum WeaponBehavior {
		Instant,
		Projectile,
		ProjectileHoming
	}

}