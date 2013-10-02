/// <reference path="_include.ts"/>

module Engine.Breakout {

	export interface RawStageData {
		xSlots?: number;
		ySlots?: number;
		blocks?: BlockType[];
	}

	export interface RawLevelData {
		id?: number;
		name?: string;
		stage?: RawStageData;
	}

}