/// <reference path="_include.ts"/>

module Engine.WarNew.Data {


	export interface TileData {
		name: string;
		size: number;
		layer: number;
		typeBelow: TileType;
		typeAbove: TileType;
		indices: number[][];
	}

	export var AllTileData: { [type: string]: TileData[]; } = {};

	AllTileData["forest"] = [];
	AllTileData["forest"][TileType.LightWater] = {
		name: "Light Water",
		size: 1,
		layer: 0,
		typeBelow: TileType.None,
		typeAbove: TileType.LightDirt,

		indices: [
			[],                     // 0
			[],                     // 1
			[],                     // 2
			[],                     // 3
			[],                     // 4
			[],                     // 5
			[],                     // 6
			[],                     // 7
			[],                     // 8
			[],                     // 9
			[],                     // 10
			[],                     // 11
			[],                     // 12
			[],                     // 13
			[],                     // 14
			[328, 329, 330]         // 15
		]
	}

	AllTileData["forest"][TileType.DarkWater] = {
		name: "Dark Water",
		size: 2,
		layer: 1,
		typeBelow: TileType.LightWater,
		typeAbove: TileType.LightDirt,

		indices: [
			[],
			[300, 301],									// 0100
			[302, 303],									// 0110
			[304, 305, 306],							// 0120
			[307, 308],									// 0130
			[309, 310, 311],							// 0140
			[312, 313],									// 0150
			[314],										// 0160
			[315, 316],									// 0170
			[317, 318],									// 0180
			[319, 320, 321],							// 0190
			[322],										// 01a0
			[323, 324, 325],							// 01b0
			[326],										// 01c0
			[327],										// 01d0
			[331, 332, 333]							    // 0020
		]
	}

    AllTileData["forest"][TileType.LightDirt] = {
		name: "Light Dirt",
		size: 1,
		layer: 1,
		typeBelow: TileType.LightWater,
		typeAbove: TileType.LightGrass,

		indices: [
			[337, 338, 339, 340, 341, 342, 343, 344],	// 0034
			[234, 235],									// 02d0
			[232, 233],									// 02c0
			[229, 230, 231],							// 02b0
			[227, 228],									// 02a0
			[224, 225, 226],							// 0290
			[223, 237],									// 0280
			[221, 222],									// 0270
			[219, 220],									// 0260
			[218, 236],									// 0250
			[215, 216, 217],							// 0240
			[213, 214],								    // 0230
			[210, 211, 212],							// 0220
			[208, 209],								    // 0210
			[206, 207],								    // 0200
			[334, 335, 336]							    // 0030
		]
	}

	AllTileData["forest"][TileType.DarkDirt] = {
		name: "Dark Dirt",
		size: 2,
		layer: 2,
		typeBelow: TileType.LightDirt,
		typeAbove: TileType.LightGrass,

		indices: [
			[348, 349, 350, 351, 352, 353, 354, 355],	// 0044
			[180],										// 0300
			[181, 182],									// 0310
			[183, 184, 185],							// 0320
			[186],										// 0330
			[188, 189, 190],							// 0340
			[191, 192],									// 0350
			[193],										// 0360
			[194],										// 0370
			[195, 196],									// 0380
			[197, 198, 199],							// 0390
			[200],										// 03a0
			[201, 202, 203],							// 03b0
			[204],										// 03c0
			[205],										// 03d0
			[345, 346, 347]							    // 0040
		]
	}

	AllTileData["forest"][TileType.LightGrass] = {
		name: "Light Grass",
		size: 1,
		layer: 2,
		typeBelow: TileType.LightDirt,
		typeAbove: TileType.None,

		indices: [
			[358, 359, 360, 361, 362, 363],				// 005a
			[298, 299],									// 05d0
			[296, 297],									// 05c0
			[293, 294, 295],							// 05b0
			[292],										// 05a0
			[289, 290, 291],							// 0590
			[287, 288],									// 0580
			[285, 286],									// 0570
			[284],										// 0560
			[282, 283],									// 0550
			[279, 280, 281],							// 0540
			[277, 278],								    // 0530
			[274, 275, 276],							// 0520
			[272, 273],								    // 0510
			[270, 271],								    // 0500
			[356, 357]									// 0050
		]
	}

	AllTileData["forest"][TileType.DarkGrass] = {
		name: "Dark Grass",
		size: 2,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[366, 367, 368, 369, 370, 371],				// 006a
			[238, 239],									// 0600
			[240, 241],									// 0610
			[242, 243, 244],							// 0620
			[245, 246],									// 0630
			[247, 248, 249],							// 0640
			[250, 251],									// 0650
			[252, 253],									// 0660
			[254, 255],									// 0670
			[256, 257],									// 0680
			[258, 259, 260],							// 0690
			[261, 262],								    // 06a0
			[263, 264, 265],							// 06b0
			[266, 267],								    // 06c0
			[268, 269],								    // 06d0
			[364, 365]									// 0060
		]
	}

	AllTileData["forest"][TileType.Tree] = {
		name: "Tree",
		size: 2,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[],
			[129, 110],									// 0700
			[102, 130],									// 0710
			[124, 131],									// 0720
			[107, 132],									// 0730
			[133, 109],									// 0740
			[139, 138],									// 0750
			[111],										// 0760
			[104, 136],									// 0770
			[140, 141],									// 0780
			[103, 135],								    // 0790
			[112],										// 07a0
			[106, 134],								    // 07b0
			[137],										// 07c0
			[105],										// 07d0
			[125, 127, 128]							    // 0070
		]
	}

	AllTileData["forest"][TileType.Rock] = {
		name: "Rock",
		size: 2,
		layer: 2,
		typeBelow: TileType.LightDirt,
		typeAbove: TileType.LightGrass,

		indices: [
			[],
			[150, 173],									// 0400
			[142, 167],									// 0410
			[164, 176],									// 0420
			[147, 171],									// 0430
			[149, 172],									// 0440
			[154, 175],									// 0450
			[151],										// 0460
			[144, 169],									// 0470
			[153, 174],									// 0480
			[143, 168],								    // 0490
			[152],										// 04a0
			[146, 170],								    // 04b0
			[148],										// 04c0
			[145],										// 04d0
			[165, 177, 178, 179]						// 0080
		]
	}

	AllTileData["forest"][TileType.HumanWall] = {
		name: "Human Wall",
		size: 1,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[16],										// 0090
			[25],										// 0870
			[20],										// 0830
			[30],										// 08b0
			[18],										// 0810
			[27, 28],									// 0890
			[23],										// 0850
			[32],										// 08d0
			[17],										// 0800
			[26],										// 0880
			[21, 22],									// 0840
			[31],										// 08c0
			[19],										// 0820
			[29],										// 08a0
			[24],										// 0860
			[33]										// 00b0
		]
	}

	AllTileData["forest"][TileType.OrcWall] = {
		name: "Orc Wall",
		size: 1,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[34],										// 00a0
			[43],										// 0970
			[38],										// 0930
			[48],										// 09b0
			[36],										// 0910
			[45, 46],									// 0990
			[41],										// 0950
			[50],										// 09d0
			[35],										// 0900
			[44],										// 0980
			[39, 40],									// 0940
			[49],										// 09c0
			[37],										// 0920
			[47],										// 09a0
			[42],										// 0960
			[51]										// 00c0
		]
	}

	AllTileData["forest"][TileType.HumanWallDamaged] = {
		name: "Human Wall Damaged",
		size: 1,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[52],
			[61],
			[56],
			[66],
			[54],
			[63, 64],
			[59],
			[68],
			[53],
			[62],
			[57, 58],
			[67],
			[55],
			[65],
			[60],
			[69]
		]
	}

	AllTileData["forest"][TileType.OrcWallDamaged] = {
		name: "Orc Wall Damaged",
		size: 1,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[70],
			[79],
			[74],
			[84],
			[72],
			[81, 82],
			[77],
			[86],
			[71],
			[80],
			[75, 76],
			[85],
			[73],
			[83],
			[78],
			[87]
		]
	}

	AllTileData["forest"][TileType.WallDestroyed] = {
		name: "Wall Destroyed",
		size: 1,
		layer: 3,
		typeBelow: TileType.LightGrass,
		typeAbove: TileType.None,

		indices: [
			[88],
			[96],
			[92],
			[100],
			[90],
			[98, 99],
			[94],
			[99],
			[89],
			[97],
			[93, 95],
			[95],
			[91],
			[98],
			[93],
			[101]
		]
	}


}
