var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (AbilityType) {
        })(WarNew.AbilityType || (WarNew.AbilityType = {}));
        var AbilityType = WarNew.AbilityType;

        (function (ActionType) {
            ActionType[ActionType["Waiting"] = 0] = "Waiting";
            ActionType[ActionType["Moving"] = 1] = "Moving";
            ActionType[ActionType["Attacking"] = 2] = "Attacking";
            ActionType[ActionType["BeingConstructed"] = 3] = "BeingConstructed";
        })(WarNew.ActionType || (WarNew.ActionType = {}));
        var ActionType = WarNew.ActionType;

        (function (AnimationSequenceType) {
            AnimationSequenceType[AnimationSequenceType["Directional"] = 0] = "Directional";
            AnimationSequenceType[AnimationSequenceType["Vertical"] = 1] = "Vertical";
            AnimationSequenceType[AnimationSequenceType["Horizontal"] = 2] = "Horizontal";
        })(WarNew.AnimationSequenceType || (WarNew.AnimationSequenceType = {}));
        var AnimationSequenceType = WarNew.AnimationSequenceType;

        (function (CommandPage) {
            CommandPage[CommandPage["Default"] = 0] = "Default";

            CommandPage[CommandPage["AdvancedBuild"] = 1] = "AdvancedBuild";
            CommandPage[CommandPage["BasicBuild"] = 2] = "BasicBuild";
            CommandPage[CommandPage["Targeting"] = 3] = "Targeting";
        })(WarNew.CommandPage || (WarNew.CommandPage = {}));
        var CommandPage = WarNew.CommandPage;

        (function (Direction) {
            Direction[Direction["None"] = 0] = "None";
            Direction[Direction["Left"] = Engine.BIT_0] = "Left";
            Direction[Direction["Up"] = Engine.BIT_1] = "Up";
            Direction[Direction["Right"] = Engine.BIT_2] = "Right";
            Direction[Direction["Down"] = Engine.BIT_3] = "Down";

            Direction[Direction["DownLeft"] = Engine.BIT_3 | Engine.BIT_0] = "DownLeft";
            Direction[Direction["UpLeft"] = Engine.BIT_0 | Engine.BIT_1] = "UpLeft";
            Direction[Direction["UpRight"] = Engine.BIT_1 | Engine.BIT_2] = "UpRight";
            Direction[Direction["DownRight"] = Engine.BIT_2 | Engine.BIT_3] = "DownRight";
        })(WarNew.Direction || (WarNew.Direction = {}));
        var Direction = WarNew.Direction;

        (function (EntityContainType) {
            EntityContainType[EntityContainType["Cargo"] = 0] = "Cargo";
            EntityContainType[EntityContainType["Builder"] = 1] = "Builder";
            EntityContainType[EntityContainType["Miner"] = 2] = "Miner";
        })(WarNew.EntityContainType || (WarNew.EntityContainType = {}));
        var EntityContainType = WarNew.EntityContainType;

        (function (EntityType) {
            EntityType[EntityType["None"] = 0xff] = "None";

            EntityType[EntityType["Footman"] = 0x00] = "Footman";
            EntityType[EntityType["Knight"] = 0x06] = "Knight";
            EntityType[EntityType["Peasant"] = 0x02] = "Peasant";

            EntityType[EntityType["Farm"] = 0x3a] = "Farm";
            EntityType[EntityType["PigFarm"] = 0x3b] = "PigFarm";
            EntityType[EntityType["HumanBarracks"] = 0x3c] = "HumanBarracks";
            EntityType[EntityType["HumanBlacksmith"] = 0x52] = "HumanBlacksmith";
            EntityType[EntityType["OrcBarracks"] = 0x3d] = "OrcBarracks";

            EntityType[EntityType["Stables"] = 0x42] = "Stables";
            EntityType[EntityType["TownHall"] = 0x4a] = "TownHall";

            EntityType[EntityType["GoldMine"] = 0x5c] = "GoldMine";
        })(WarNew.EntityType || (WarNew.EntityType = {}));
        var EntityType = WarNew.EntityType;

        (function (Occupy) {
            Occupy[Occupy["None"] = 0] = "None";
            Occupy[Occupy["LandUnit"] = Engine.BIT_0] = "LandUnit";

            Occupy[Occupy["LandStructure"] = Engine.BIT_0 | Engine.BIT_1] = "LandStructure";
            Occupy[Occupy["Sea"] = Engine.BIT_2] = "Sea";
            Occupy[Occupy["Air"] = Engine.BIT_3] = "Air";
        })(WarNew.Occupy || (WarNew.Occupy = {}));
        var Occupy = WarNew.Occupy;

        (function (OrderType) {
            OrderType[OrderType["None"] = 0] = "None";

            OrderType[OrderType["AttackEntity"] = 1] = "AttackEntity";
            OrderType[OrderType["AttackToTile"] = 2] = "AttackToTile";
            OrderType[OrderType["BuildAtTile"] = 3] = "BuildAtTile";
            OrderType[OrderType["CastOnEntity"] = 4] = "CastOnEntity";
            OrderType[OrderType["CastOnTile"] = 5] = "CastOnTile";
            OrderType[OrderType["ClearArea"] = 6] = "ClearArea";
            OrderType[OrderType["FollowEntity"] = 7] = "FollowEntity";
            OrderType[OrderType["HarvestGold"] = 8] = "HarvestGold";
            OrderType[OrderType["HoldPosition"] = 9] = "HoldPosition";
            OrderType[OrderType["MoveToTile"] = 10] = "MoveToTile";
            OrderType[OrderType["PatrolToEntity"] = 11] = "PatrolToEntity";
            OrderType[OrderType["PatrolToTile"] = 12] = "PatrolToTile";
            OrderType[OrderType["UpgradeSelf"] = 13] = "UpgradeSelf";
        })(WarNew.OrderType || (WarNew.OrderType = {}));
        var OrderType = WarNew.OrderType;

        (function (PathType) {
            PathType[PathType["ToTarget"] = 0] = "ToTarget";
            PathType[PathType["ToArea"] = 1] = "ToArea";
            PathType[PathType["AvoidTarget"] = 2] = "AvoidTarget";
            PathType[PathType["AvoidArea"] = 3] = "AvoidArea";
            PathType[PathType["ClearArea"] = 4] = "ClearArea";
        })(WarNew.PathType || (WarNew.PathType = {}));
        var PathType = WarNew.PathType;

        (function (PlacementTestFlag) {
            PlacementTestFlag[PlacementTestFlag["Message"] = Engine.BIT_0] = "Message";
            PlacementTestFlag[PlacementTestFlag["BlockingEntities"] = Engine.BIT_1] = "BlockingEntities";
            PlacementTestFlag[PlacementTestFlag["ValidTiles"] = Engine.BIT_2] = "ValidTiles";
            PlacementTestFlag[PlacementTestFlag["InvalidTiles"] = Engine.BIT_3] = "InvalidTiles";
        })(WarNew.PlacementTestFlag || (WarNew.PlacementTestFlag = {}));
        var PlacementTestFlag = WarNew.PlacementTestFlag;

        (function (PlayerType) {
            PlayerType[PlayerType["None"] = 0] = "None";
            PlayerType[PlayerType["User"] = 1] = "User";
            PlayerType[PlayerType["Computer"] = 2] = "Computer";
            PlayerType[PlayerType["Rescue"] = 3] = "Rescue";
        })(WarNew.PlayerType || (WarNew.PlayerType = {}));
        var PlayerType = WarNew.PlayerType;

        (function (ResourceType) {
            ResourceType[ResourceType["None"] = 0] = "None";

            ResourceType[ResourceType["Gold"] = 1] = "Gold";
            ResourceType[ResourceType["Lumber"] = 2] = "Lumber";
            ResourceType[ResourceType["Oil"] = 4] = "Oil";
        })(WarNew.ResourceType || (WarNew.ResourceType = {}));
        var ResourceType = WarNew.ResourceType;

        (function (SequenceType) {
            SequenceType[SequenceType["Directional"] = 1] = "Directional";
            SequenceType[SequenceType["Vertical"] = 2] = "Vertical";
            SequenceType[SequenceType["Horizontal"] = 3] = "Horizontal";
        })(WarNew.SequenceType || (WarNew.SequenceType = {}));
        var SequenceType = WarNew.SequenceType;

        (function (SequenceUpdateResult) {
            SequenceUpdateResult[SequenceUpdateResult["Default"] = 0] = "Default";
            SequenceUpdateResult[SequenceUpdateResult["FrameIncremented"] = 1] = "FrameIncremented";
            SequenceUpdateResult[SequenceUpdateResult["SequenceElapsed"] = 2] = "SequenceElapsed";
        })(WarNew.SequenceUpdateResult || (WarNew.SequenceUpdateResult = {}));
        var SequenceUpdateResult = WarNew.SequenceUpdateResult;

        (function (ThinkResult) {
            ThinkResult[ThinkResult["NotDone"] = 0] = "NotDone";
            ThinkResult[ThinkResult["Done"] = 1] = "Done";
            ThinkResult[ThinkResult["DoneIfQueue"] = 2] = "DoneIfQueue";
        })(WarNew.ThinkResult || (WarNew.ThinkResult = {}));
        var ThinkResult = WarNew.ThinkResult;

        (function (TileSpecialFlag) {
        })(WarNew.TileSpecialFlag || (WarNew.TileSpecialFlag = {}));
        var TileSpecialFlag = WarNew.TileSpecialFlag;

        (function (TileType) {
            TileType[TileType["None"] = 0] = "None";

            TileType[TileType["LightWater"] = 2] = "LightWater";
            TileType[TileType["DarkWater"] = 3] = "DarkWater";
            TileType[TileType["LightDirt"] = 4] = "LightDirt";
            TileType[TileType["DarkDirt"] = 5] = "DarkDirt";
            TileType[TileType["LightGrass"] = 6] = "LightGrass";
            TileType[TileType["DarkGrass"] = 7] = "DarkGrass";
            TileType[TileType["Tree"] = 8] = "Tree";
            TileType[TileType["Rock"] = 9] = "Rock";
            TileType[TileType["HumanWall"] = 10] = "HumanWall";
            TileType[TileType["OrcWall"] = 11] = "OrcWall";
            TileType[TileType["HumanWallDamaged"] = 12] = "HumanWallDamaged";
            TileType[TileType["OrcWallDamaged"] = 13] = "OrcWallDamaged";
            TileType[TileType["WallDestroyed"] = 14] = "WallDestroyed";
        })(WarNew.TileType || (WarNew.TileType = {}));
        var TileType = WarNew.TileType;

        (function (UserState) {
            UserState[UserState["Default"] = 0] = "Default";
            UserState[UserState["Selecting"] = 1] = "Selecting";
            UserState[UserState["PlacingEntity"] = 2] = "PlacingEntity";
            UserState[UserState["PlacingTerrain"] = 3] = "PlacingTerrain";
            UserState[UserState["Targeting"] = 4] = "Targeting";
        })(WarNew.UserState || (WarNew.UserState = {}));
        var UserState = WarNew.UserState;

        (function (WeaponBehavior) {
            WeaponBehavior[WeaponBehavior["Instant"] = 0] = "Instant";
            WeaponBehavior[WeaponBehavior["Projectile"] = 1] = "Projectile";
            WeaponBehavior[WeaponBehavior["ProjectileHoming"] = 2] = "ProjectileHoming";
        })(WarNew.WeaponBehavior || (WarNew.WeaponBehavior = {}));
        var WeaponBehavior = WarNew.WeaponBehavior;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
ko.observable.fn.subscribeChanged = function (callback, ignoreNoChange) {
    var _oldVal;
    (this).subscribe(function (oldVal) {
        _oldVal = oldVal;
    }, this, "beforeChange");
    (this).subscribe(function (newVal) {
        if (ignoreNoChange && _oldVal === newVal)
            return;
        callback(_oldVal, newVal);
    });
    return (this);
};
var Engine;
(function (Engine) {
    (function (WarNew) {
        ;

        (function (SpawnState) {
            SpawnState[SpawnState["None"] = 0] = "None";
            SpawnState[SpawnState["Constructing"] = 1] = "Constructing";
            SpawnState[SpawnState["Alive"] = 2] = "Alive";
            SpawnState[SpawnState["Dead"] = 3] = "Dead";
        })(WarNew.SpawnState || (WarNew.SpawnState = {}));
        var SpawnState = WarNew.SpawnState;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        WarNew.TILE_SIZE = 32;
        WarNew.TILE_INV_SIZE = 1 / WarNew.TILE_SIZE;

        WarNew.TILE_ATLAS_TILE_SIZE = 32;
        WarNew.TILE_ATLAS_TILES_WIDE = 16;
        WarNew.TILE_ATLAS_TILES_HIGH = 32;

        WarNew.TERRAIN_HEIGHT_SCALE = 50;

        WarNew.ENTITY_BUTTON_X_MAX = 3;
        WarNew.ENTITY_BUTTON_Y_MAX = 3;
        WarNew.ENTITY_MAX_SELECTION = WarNew.ENTITY_BUTTON_X_MAX * WarNew.ENTITY_BUTTON_Y_MAX;
        WarNew.ENTITY_MOVE_SPEED_MULTIPLIER = 0.17;

        WarNew.COMMAND_BUTTON_X_MAX = 3;
        WarNew.COMMAND_BUTTON_Y_MAX = 3;
        WarNew.COMMANDS_MAX = WarNew.COMMAND_BUTTON_X_MAX * WarNew.COMMAND_BUTTON_Y_MAX;

        WarNew.PATHFINDER_MAX_ITERATIONS = 100;

        WarNew.PLAYERS_MAX = 8;

        WarNew.CAMERA_MOUSE_SCROLL_EDGE = 20;
        WarNew.CAMERA_SCROLL_SPEED = 1;
        WarNew.CAMERA_MAX_ZOOM = 3;
        WarNew.CAMERA_MIN_ZOOM = 1;
        WarNew.CAMERA_ZOOM_INCREMENT = 0.1;

        WarNew.TEST_WORLD_DATA = (JSON.parse("{\"world\":{\"terrain\":{\"type\":\"forest\",\"width\":32,\"height\":32,\"tiles\":[502,502,246,246,246,246,246,502,246,502,246,246,502,502,246,502,502,502,502,246,246,246,246,502,246,246,502,246,246,246,246,246,502,502,502,246,246,502,502,502,502,246,246,502,502,246,502,502,246,502,246,502,246,246,502,246,502,246,246,246,502,502,246,246,502,246,502,502,502,502,246,246,246,246,502,502,502,246,246,502,502,246,246,246,502,502,502,502,246,246,502,502,246,502,502,502,502,502,246,502,502,246,246,246,502,502,246,246,246,502,246,502,246,246,246,246,246,246,246,502,246,502,502,246,502,246,502,246,246,502,246,246,246,246,502,502,246,502,502,246,502,246,246,502,502,502,502,246,502,502,502,502,246,246,246,246,502,246,246,502,246,246,246,502,246,246,502,502,246,502,502,246,374,54,310,566,182,246,502,246,502,502,246,246,502,246,246,246,246,502,502,246,502,502,246,246,246,502,246,392,456,456,328,502,598,137,457,329,678,502,502,502,502,502,502,246,502,502,246,246,246,502,502,246,502,502,246,392,200,456,456,232,760,504,88,246,86,169,1017,345,166,502,246,502,502,246,246,246,246,246,502,246,502,246,246,246,502,502,502,424,248,248,248,504,120,312,280,246,86,297,313,25,166,118,310,310,310,182,246,502,502,246,502,246,246,502,502,246,502,246,246,168,248,120,312,56,280,246,246,502,214,710,198,198,358,22,393,201,329,678,246,502,246,502,246,502,246,246,246,502,502,246,246,40,312,280,502,246,502,502,246,246,502,246,246,502,342,393,233,249,345,166,502,246,502,502,502,502,246,246,502,502,502,246,246,246,246,246,246,502,246,246,246,246,502,502,502,246,86,425,505,249,345,166,502,502,502,502,502,246,246,246,246,502,502,246,392,456,200,456,328,502,246,246,246,246,246,502,246,246,342,169,761,761,89,166,246,246,246,246,502,502,246,502,246,502,502,246,168,760,760,504,88,246,246,246,246,502,502,246,502,246,86,41,57,57,25,422,502,502,502,246,246,246,246,246,502,502,246,246,424,248,504,760,88,502,246,246,502,502,502,502,246,502,470,454,454,710,710,230,246,246,246,246,246,502,502,502,246,502,246,502,40,56,312,312,280,246,502,502,246,374,566,566,54,54,182,246,246,502,246,246,246,502,502,246,502,502,502,246,246,502,246,502,502,118,54,566,310,182,246,502,502,342,393,457,457,329,678,502,502,502,502,246,246,502,246,502,502,246,246,246,246,246,502,246,246,598,372,308,436,38,310,54,54,22,297,313,313,25,678,246,246,502,246,502,502,246,502,502,246,246,502,502,246,246,246,502,246,86,340,242,292,52,564,564,308,436,116,52,436,500,678,502,502,502,502,246,502,502,502,246,246,246,246,246,246,246,246,502,246,342,340,242,498,498,754,754,498,420,340,242,36,180,678,502,246,246,246,502,502,246,246,246,502,502,246,246,502,502,502,502,246,598,212,708,196,708,196,452,708,484,340,498,754,676,422,502,502,502,246,502,246,502,502,502,246,246,502,246,502,502,502,246,502,214,710,710,454,710,198,454,454,70,468,708,708,228,678,502,502,502,502,246,502,502,246,246,502,502,502,246,502,502,246,246,502,246,246,246,246,502,246,246,246,214,710,454,454,454,230,502,502,246,246,502,246,246,246,246,246,502,246,246,502,502,246,246,246,502,502,502,502,246,246,246,502,502,502,246,502,246,502,246,502,246,502,246,246,246,502,502,246,502,502,246,246,502,502,246,246,246,246,246,502,502,246,246,502,246,502,502,246,502,246,502,502,502,246,502,502,502,502,246,246,502,502,246,502,502,502,246,246,502,246,502,502,502,246,502,502,246,246,246,246,246,246,246,246,502,246,246,246,502,502,502,246,502,246,502,502,246,246,502,246,246,246,502,502,502,246,502,246,502,246,502,502,246,246,246,502,246,502,502,246,502,246,502,246,502,246,502,502,502,246,502,502,502,246,246,246,502,502,502,502,246,246,502,502,246,246,246,502,502,502,246,502,502,246,246,246,246,502,502,246,502,246,246,502,502,246,502,502,502,502,246,502,502,502,246,502,246,246,246,502,502,502,502,246,502,246,246,502,246,246,246,246,246,502,246,246,502,502,502,246,246,246,246,502,246,502,246,502,502,502,502,502,502,502,246,246,502,246,246,502,502,246,502,246,246,246,246,246,246,502,502,502,502,502,502,502,502,502,246,502,246,502,502,502,502,502,246,246,246,502,246,246,246,246,246,502,502,246,246,246,246,246,502,502,246,502,246,502,502,246,246,502,246,502,246,246,246,246,502,502,246,246,246,502,246,502,246,502,246]},\"teams\":[{\"name\":\"Neutral Team\",\"shareVision\":true},{\"name\":\"Team 1\",\"shareVision\":true},{\"name\":\"Team 2\",\"shareVision\":true},{\"name\":\"Team 3\",\"shareVision\":true},{\"name\":\"Team 4\",\"shareVision\":true},{\"name\":\"Team 5\",\"shareVision\":true},{\"name\":\"Team 6\",\"shareVision\":true},{\"name\":\"Team 7\",\"shareVision\":true},{\"name\":\"Team 8\",\"shareVision\":true}],\"players\":[{\"gold\":1000,\"lumber\":500,\"name\":\"Neutral Player\",\"oil\":250,\"race\":1,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":0},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 1\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":1},{\"gold\":2400,\"lumber\":1400,\"name\":\"Player 2\",\"oil\":550,\"race\":1,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":2},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 3\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":3},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 4\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":4},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 5\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":5},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 6\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":6},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 7\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":7},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 8\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":8}],\"entities\":[[4194306,359,262204,12058864],[4198402,488,262204,16253200],[4203682,360,263344,13631808],[4207780,364,263344,13631936],[4210692,330,262204,11010384],[4214788,489,262204,16253232],[4218916,334,262174,11010512],[4223012,529,262174,17302064],[4227106,299,262174,9961840],[4231202,297,262174,9961776],[4235298,298,262174,9961808],[4239362,555,262204,18350448],[4243554,326,262234,11010256],[4247652,235,262234,7864688],[4251746,552,262234,18350352],[4255844,494,262234,16253392],[4259940,516,262234,17301648],[4265122,84,263344,4195008],[4268034,82,262204,2622032],[4273600,312,262144,11010864]]},\"user\":{\"cameraX\":480.34108872841,\"cameraY\":351.76123789011,\"cameraZoom\":1.0943023107607,\"playerID\":2,\"placementEntityType\":-1,\"placementRadius\":1,\"placementTileType\":0,\"selectedEntities\":[1026],\"userState\":0}}").world);

        WarNew.TEST_WORLD_DATA2 = "forest6120220261f11161f11161f10161f10161f10161f10161f10161f11161f10161f11161f10161f10161f11161f11161f10161f11161f11161f11161f11161f10161f10161f10161f10161f11161f10161f10161f11161f10161f10161f10161f10161f10161f11161f11161f11161f10161f10161f11161f11161f11161f11161f10161f10161f11161f11161f10161f11161f11161f10161f11161f10161f11161f10161f10161f11161f10161f11161f10161f10161f10161f11161f11161f10161f10161f11161f10161f11161f11161f11161f11161f10161f10161f10161f10161f11161f11161f11161f10161f10161f11161f11161f10161f10161f10161f11161f11161f11161f11161f10161f10161f11161f11161f10161f11161f11161f11161f11161f11161f10161f11161f11161f10161f10161f10161f11161f11161f10161f10161f10161f11161f10161f11161f10161f10161f10161f10161f10161f10161f10161f11161f10161f11161f11161f10161f11161f10161f11161f10161f10161f11161f10161f10161f10161f10161f11161f11161f10161f11161f11161f10161f11161f10161f10161f11161f11161f11161f11161f10161f11161f11161f11161f11161f10161f10161f10161f10161f11161f10161f10161f11161f10161f10161f10161f11161f10161f10161f11161f11161f10161f11161f11161f10161711161310161311161312161b10161f10161f11161f10161f11161f11161f10161f10161f11161f10161f10161f10161f10161f11161f11161f10161f11161f11161f10161f10161f10161f11161f10181811181c11181c11181411161f11161512191810191c11191411161a12161f11161f11161f11161f11161f11161f11161f10161f11161f11161f10161f10161f10161f11161f11161f10161f11161f11161f10181811181c10181c11181c11181e10181f12181f11181510161f10161510191a10191f13191511161a10161f11161f10161f11161f11161f10161f10161f10161f10161f10161f11161f10161f11161f10161f10161f10161f11161f11161f11181a11181f10181f10181f10181f11181710181311181111161f10161510191211191311191110161a10161710161311161311161311161b10161f10161f11161f11161f10161f11161f10161f10161f11161f11161f10161f11161f10161f10181a10181f10181710181311181310181111161f10161f10161f11161d10161c12161c10161c10161611161110191811191c10191411161a12161f10161f11161f10161f11161f10161f11161f10161f10161f10161f11161f11161f10161f10181210181311181111161f11161f10161f11161f11161f10161f10161f11161f10161f10161f11161511191811191e10191f10191511161a10161f11161f10161f11161f11161f11161f11161f10161f10161f11161f11161f11161f10161f10161f10161f10161f10161f10161f11161f10161f10161f10161f10161f11161f11161f11161f10161510191a11191f11191f10191511161a10161f11161f11161f11161f11161f11161f10161f10161f10161f10161f11161f11161f10181811181c11181c10181c11181411161f11161f10161f10161f10161f10161f10161f11161f10161f10161511191a10191f12191f12191510161a10161f10161f10161f10161f10161f11161f11161f10161f11161f10161f11161f11161f10181a10181f12181f12181f11181510161f10161f10161f10161f10161f11161f11161f10161f11161f10161510191210191310191310191110161a11161f11161f11161f11161f10161f10161f10161f10161f10161f11161f11161f10161f10181a11181f10181f11181f12181510161f11161f10161f10161f11161f11161f11161f11161f10161f11161d11161c11161c11161c12161c12161e10161f10161f10161f10161f10161f10161f11161f11161f11161f10161f11161f10161f11181210181310181311181311181111161f10161f11161f11161f10161711161312161312161310161310161b10161f10161f10161f11161f10161f10161f10161f11161f11161f10161f11161f11161f11161f10161f10161f11161f10161f11161f11161710161310161312161311161b10161f10161f11161f11161511191811191c11191c11191411161a12161f11161f11161f11161f11161f10161f10161f11161f10161f11161f11161f10161f10161f10161f10161f10161f11161f10161f10161512141711141311141b11161210161311161310161310161110191211191311191311191110161a12161f10161f10161f11161f10161f11161f11161f10161f11161f11161f10161f10161f11161f11161f10161f10161f10161f11161f10161510141511121f10141211141310141312141312141311141b11141710141310141b11141f11161a12161f11161f11161f11161f11161f10161f11161f11161f11161f10161f10161f10161f10161f10161f10161f10161f10161f11161f10161511141511121f10121f11121f11121f12121f12121f11141a11141511121f10141210141b10161a12161f11161f10161f10161f10161f11161f11161f10161f10161f10161f11161f11161f10161f10161f11161f11161f11161f11161f10161512141d10141c12141c10141c12141c10141c11141c12141e11141511121f11121f12141a12161a11161f11161f11161f11161f10161f11161f10161f11161f11161f11161f10161f10161f11161f10161f11161f11161f11161f10161f11161d10161c12161c12161c11161c12161c10161c11161c11161410141d11141c12141c12141e10161a12161f11161f11161f11161f11161f10161f11161f11161f10161f10161f11161f11161f11161f10161f11161f11161f10161f10161f11161f10161f10161f10161f10161f11161f10161f10161f10161d10161c12161c11161c11161c11161e10161f11161f11161f10161f10161f11161f10161f10161f10161f10161f10161f11161f10161f10161f11161f11161f10161f10161f10161f11161f11161f11161f11161f10161f10161f10161f11161f11161f11161f10161f11161f10161f11161f10161f11161f10161f11161f10161f10161f10161f11161f11161f10161f11161f11161f10161f10161f11161f11161f10161f10161f10161f10161f10161f11161f11161f10161f10161f11161f10161f11161f11161f10161f11161f10161f11161f11161f11161f10161f11161f11161f11161f11161f10161f10161f11161f11161f10161f11161f11161f11161f10161f10161f11161f10161f11161f11161f11161f10161f11161f11161f10161f10161f10161f10161f10161f10161f10161f10161f11161f10161f10161f10161f11161f11161f11161f10161f11161f10161f11161f11161f10161f10161f11161f10161f10161f10161f11161f11161f11161f10161f11161f10161f11161f10161f11161f11161f10161f10161f10161f11161f10161f11161f11161f10161f11161f10161f11161f10161f11161f10161f11161f11161f11161f10161f11161f11161f11161f10161f10161f10161f11161f11161f11161f11161f10161f10161f11161f11161f10161f10161f10161f11161f11161f11161f10161f11161f11161f10161f10161f10161f10161f11161f11161f10161f11161f10161f10161f11161f11161f10161f11161f11161f11161f11161f10161f11161f11161f11161f10161f11161f10161f10161f10161f11161f11161f11161f11161f10161f11161f10161f10161f11161f10161f10161f10161f10161f10161f11161f10161f10161f11161f11161f11161f10161f10161f10161f10161f11161f10161f11161f10161f11161f11161f11161f11161f11161f11161f11161f10161f10161f11161f10161f10161f11161f11161f10161f11161f10161f10161f10161f10161f10161f10161f11161f11161f11161f11161f11161f11161f11161f11161f11161f10161f11161f10161f11161f11161f11161f11161f11161f10161f10161f10161f11161f10161f10161f10161f10161f10161f11161f11161f10161f10161f10161f10161f10161f11161f11161f10161f11161f10161f11161f11161f10161f10161f11161f10161f11161f10161f10161f10161f10161f11161f11161f10161f10161f10161f11161f10161f11161f10161f11161f10191Neutral Teamc11Team 1611Team 2611Team 3611Team 4611Team 5611Team 6611Team 7611Team 861191Neutral Playere13e831f43fa211011101Player 1813e831f43fa211021111Player 28196035783226311011121Player 3813e831f43fa211021131Player 4813e831f43fa211031141Player 5813e831f43fa211021151Player 6813e831f43fa211031161Player 7813e831f43fa211021171Player 8813e831f43fa2110311811422101400316733c2012101f021703210140131e833c201210111031f03214a2402316834b0301210114031a03414a2403316c34b030121011c031a034101404314a33c201210115031503410140531e933c201210113031f034121406314e31e20121011d0315034121407321131e2012101230321032121408312b31e2012101170313032121409312931e201210113031303212140a312a31e201210115031303210140b322b33c201210117032303216140c314635a2012101d021503416140d3eb25a20121011703f02216140e322835a201210111032303416140f31ee35a20121011d031f034161410320435a20121019022103214a241135424b030121012c03802210141235223c20121012503502015c2413313830101210133031503";
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Camera2D = (function () {
            function Camera2D(center, boundsWidth, boundsHeight) {
                this._center = center.clone();
                this._dimensions = new Engine.Vec2(1, 1);
                this._rect = new Engine.Rect(0, 0, 1, 1);
                this._boundsWidth = boundsWidth;
                this._boundsHeight = boundsHeight;

                this._zoom = 1;
                this._invZoom = 1;

                this._clampCenter();
            }
            Camera2D.prototype.getCenter = function () {
                return this._center;
            };
            Camera2D.prototype.getRect = function () {
                return this._rect;
            };
            Camera2D.prototype.getZoom = function () {
                return this._zoom;
            };

            Camera2D.prototype.dispose = function () {
                this._center = null;
                this._dimensions = null;
                this._rect = null;
            };

            Camera2D.prototype.setCenter = function (center) {
                this._center = center.clone();
                this._clampCenter();
            };

            Camera2D.prototype.setZoom = function (zoom) {
                this._zoom = Engine.MathUtil.clamp(zoom, WarNew.CAMERA_MIN_ZOOM, WarNew.CAMERA_MAX_ZOOM);
                this._invZoom = 1 / this._zoom;

                this._rect.width = Math.ceil(this._dimensions.x * this._invZoom);
                this._rect.height = Math.ceil(this._dimensions.y * this._invZoom);

                this._clampCenter();
            };

            Camera2D.prototype.scrollLeft = function (dt) {
                this._center.x -= dt * WarNew.CAMERA_SCROLL_SPEED * this._invZoom;

                this._clampCenter();
            };

            Camera2D.prototype.scrollUp = function (dt) {
                this._center.y -= dt * WarNew.CAMERA_SCROLL_SPEED * this._invZoom;

                this._clampCenter();
            };

            Camera2D.prototype.scrollRight = function (dt) {
                this._center.x += dt * WarNew.CAMERA_SCROLL_SPEED * this._invZoom;

                this._clampCenter();
            };

            Camera2D.prototype.scrollDown = function (dt) {
                this._center.y += dt * WarNew.CAMERA_SCROLL_SPEED * this._invZoom;

                this._clampCenter();
            };

            Camera2D.prototype.resize = function (width, height) {
                this._dimensions.x = width;
                this._dimensions.y = height;

                this._rect.width = Math.ceil(width * this._invZoom);
                this._rect.height = Math.ceil(height * this._invZoom);

                this._clampCenter();
            };

            Camera2D.prototype.getPointAt = function (viewX, viewY, vecRef) {
                var rect = this._rect;
                vecRef.x = Engine.MathUtil.clamp(rect.x + viewX * this._invZoom, rect.x, rect.right);
                vecRef.y = Engine.MathUtil.clamp(rect.y + viewY * this._invZoom, rect.y, rect.bottom);
            };

            Camera2D.prototype.apply = function (ctx) {
                ctx.translate(this._dimensions.x >> 1, this._dimensions.y >> 1);
                ctx.scale(this._zoom, this._zoom);
                ctx.translate(-this._center.x, -this._center.y);
            };

            Camera2D.prototype._clampCenter = function () {
                var center = this._center;
                var rect = this._rect;
                var halfWidth = (rect.width + 1) >> 1;
                var halfHeight = (rect.height + 1) >> 1;

                center.x = Math.max(Math.min(this._boundsWidth - halfWidth, center.x), halfWidth);
                center.y = Math.max(Math.min(this._boundsHeight - halfHeight, center.y), halfHeight);

                rect.x = center.x - halfWidth;
                rect.y = center.y - halfHeight;
            };
            return Camera2D;
        })();
        WarNew.Camera2D = Camera2D;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Command = (function () {
            function Command() {
            }
            Command.prototype.getFoodCost = function () {
                return 0;
            };
            Command.prototype.getGoldCost = function () {
                return 0;
            };
            Command.prototype.getLumberCost = function () {
                return 0;
            };
            Command.prototype.getOilCost = function () {
                return 0;
            };
            Command.prototype.getManaCost = function () {
                return 0;
            };

            Command.prototype.getButtonX = function () {
                throw "Command.buttonX is abstract.";
                return 0;
            };
            Command.prototype.getButtonY = function () {
                throw "Command.buttonY is abstract.";
                return 0;
            };
            Command.prototype.getHotkey = function () {
                return Engine.Key.None;
            };
            Command.prototype.getIconID = function () {
                return "";
            };
            Command.prototype.getName = function () {
                return "";
            };
            Command.prototype.getTooltip = function () {
                return "";
            };
            Command.prototype.getTooltipExtended = function () {
                return "";
            };
            return Command;
        })();
        WarNew.Command = Command;

        var UserCommand = (function (_super) {
            __extends(UserCommand, _super);
            function UserCommand() {
                _super.apply(this, arguments);
            }
            UserCommand.prototype.tryExecute = function (user) {
                return { success: true };
            };
            return UserCommand;
        })(Command);
        WarNew.UserCommand = UserCommand;
        var AdvancedBuildCommand = (function (_super) {
            __extends(AdvancedBuildCommand, _super);
            function AdvancedBuildCommand() {
                _super.apply(this, arguments);
            }
            AdvancedBuildCommand.prototype.tryExecute = function (user) {
                user.setPage(WarNew.CommandPage.AdvancedBuild);
                return { success: true };
            };
            AdvancedBuildCommand.prototype.getButtonX = function () {
                return 1;
            };
            AdvancedBuildCommand.prototype.getButtonY = function () {
                return 2;
            };
            AdvancedBuildCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_V;
            };
            AdvancedBuildCommand.prototype.getIconID = function () {
                return "icon-advanced-build";
            };
            AdvancedBuildCommand.prototype.getName = function () {
                return "Advanced Build";
            };
            AdvancedBuildCommand.prototype.getTooltip = function () {
                return "Build Ad|v|anced Structures";
            };
            AdvancedBuildCommand.instance = new AdvancedBuildCommand();
            return AdvancedBuildCommand;
        })(UserCommand);
        WarNew.AdvancedBuildCommand = AdvancedBuildCommand;
        var BasicBuildCommand = (function (_super) {
            __extends(BasicBuildCommand, _super);
            function BasicBuildCommand() {
                _super.apply(this, arguments);
            }
            BasicBuildCommand.prototype.tryExecute = function (user) {
                user.setPage(WarNew.CommandPage.BasicBuild);
                return { success: true };
            };
            BasicBuildCommand.prototype.getButtonX = function () {
                return 0;
            };
            BasicBuildCommand.prototype.getButtonY = function () {
                return 2;
            };
            BasicBuildCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_B;
            };
            BasicBuildCommand.prototype.getIconID = function () {
                return "icon-basic-build";
            };
            BasicBuildCommand.prototype.getName = function () {
                return "Basic Build";
            };
            BasicBuildCommand.prototype.getTooltip = function () {
                return "Build |B|asic Structures";
            };
            BasicBuildCommand.instance = new BasicBuildCommand();
            return BasicBuildCommand;
        })(UserCommand);
        WarNew.BasicBuildCommand = BasicBuildCommand;
        var CancelCommand = (function (_super) {
            __extends(CancelCommand, _super);
            function CancelCommand() {
                _super.apply(this, arguments);
            }
            CancelCommand.prototype.tryExecute = function (user) {
                user.setPage(WarNew.CommandPage.Default);
                return { success: true };
            };
            CancelCommand.prototype.getButtonX = function () {
                return 2;
            };
            CancelCommand.prototype.getButtonY = function () {
                return 2;
            };
            CancelCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_X;
            };
            CancelCommand.prototype.getIconID = function () {
                return "icon-cancel";
            };
            CancelCommand.prototype.getName = function () {
                return "Cancel";
            };
            CancelCommand.prototype.getTooltip = function () {
                return "Cancel";
            };
            CancelCommand.instance = new CancelCommand();
            return CancelCommand;
        })(UserCommand);
        WarNew.CancelCommand = CancelCommand;

        var WorldCommand = (function (_super) {
            __extends(WorldCommand, _super);
            function WorldCommand() {
                _super.apply(this, arguments);
            }
            WorldCommand.prototype.requiresTarget = function () {
                return true;
            };

            WorldCommand.prototype.plotEntityType = function () {
                return WarNew.EntityType.None;
            };

            WorldCommand.prototype.canExecute = function (player, entities, target) {
                var valid = entities.slice(0);

                for (var i = valid.length - 1; i !== -1; --i) {
                    if (valid[i].getOwner() !== player)
                        valid.splice(i, 1);
                }
                if (valid.length === 0)
                    return { success: false };

                var foodCost = this.getFoodCost();
                if (foodCost > 0 && player.getFoodCreated() - player.getFoodUsed() < foodCost)
                    return { success: false, message: "Not enough food." };

                var goldCost = this.getGoldCost();
                if (goldCost > 0 && player.getGold() < goldCost)
                    return { success: false, message: "Not enough gold." };

                var lumberCost = this.getLumberCost();
                if (lumberCost > 0 && player.getLumber() < lumberCost)
                    return { success: false, message: "Not enough lumber." };

                var oilCost = this.getOilCost();
                if (oilCost > 0 && player.getOil() < oilCost)
                    return { success: false, message: "Not enough oil." };

                var manaCost = this.getManaCost();
                if (manaCost > 0) {
                    for (var i = valid.length - 1; i !== -1; --i) {
                        if (valid[i].getMana() < manaCost)
                            valid.splice(i, 1);
                    }
                    if (valid.length === 0)
                        return { success: false, message: "Not enough mana." };
                }

                return { success: true, validEntities: valid };
            };

            WorldCommand.prototype.isTargetAllowed = function (target) {
                return true;
            };

            WorldCommand.prototype.tryExecute = function (player, entities, target, queue) {
                var result = this.canExecute(player, entities, target);
                if (result.success) {
                    var valid = result.validEntities;
                    for (var i = 0, ii = valid.length; i < ii; ++i) {
                        var ent = valid[i];
                        if (!queue)
                            WarNew.EntityOrder.stop(ent);
                        this.executeEach(ent, target);
                    }
                }
                return result;
            };

            WorldCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.defaultOrder(entity, target);
            };
            WorldCommand.instance = new WorldCommand();
            return WorldCommand;
        })(Command);
        WarNew.WorldCommand = WorldCommand;

        var AbilityCommand = (function (_super) {
            __extends(AbilityCommand, _super);
            function AbilityCommand(abType) {
                _super.call(this);
                this._type = abType;
            }
            return AbilityCommand;
        })(WorldCommand);
        WarNew.AbilityCommand = AbilityCommand;

        var AttackCommand = (function (_super) {
            __extends(AttackCommand, _super);
            function AttackCommand() {
                _super.apply(this, arguments);
            }
            AttackCommand.prototype.getButtonX = function () {
                return 2;
            };
            AttackCommand.prototype.getButtonY = function () {
                return 0;
            };
            AttackCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_A;
            };
            AttackCommand.prototype.getIconID = function () {
                return "icon-melee0-{race}";
            };
            AttackCommand.prototype.getName = function () {
                return "Attack";
            };
            AttackCommand.prototype.getTooltip = function () {
                return "|A|ttack";
            };
            AttackCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to move to the target area and attack any enemy units" + " they see on the way. If you order them to attack a specific unit, your units will" + " ignore other enemy units and attack the targeted unit until it is destroyed.";
            };

            AttackCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.attack(entity, target);
            };
            AttackCommand.instance = new AttackCommand();
            return AttackCommand;
        })(WorldCommand);
        WarNew.AttackCommand = AttackCommand;

        var BuildCommand = (function (_super) {
            __extends(BuildCommand, _super);
            function BuildCommand(entType) {
                _super.call(this);
                this._type = entType;
                this._data = WarNew.Data.AllEntityData[entType];
            }
            BuildCommand.prototype.getFoodCost = function () {
                return this._data.foodCost;
            };
            BuildCommand.prototype.getGoldCost = function () {
                return this._data.goldCost;
            };
            BuildCommand.prototype.getLumberCost = function () {
                return this._data.lumberCost;
            };
            BuildCommand.prototype.getOilCost = function () {
                return this._data.oilCost;
            };

            BuildCommand.prototype.getButtonX = function () {
                return this._data.buttonX;
            };
            BuildCommand.prototype.getButtonY = function () {
                return this._data.buttonY;
            };
            BuildCommand.prototype.getHotkey = function () {
                return this._data.hotkey;
            };
            BuildCommand.prototype.getIconID = function () {
                return this._data.iconId;
            };
            BuildCommand.prototype.getName = function () {
                return this._data.name;
            };
            BuildCommand.prototype.getTooltip = function () {
                return this._data.tooltip;
            };
            BuildCommand.prototype.getTooltipExtended = function () {
                return this._data.tooltipExtended;
            };
            BuildCommand.prototype.plotEntityType = function () {
                return this._type;
            };

            BuildCommand.prototype.canExecute = function (player, entities, target) {
                var cmdResult = _super.prototype.canExecute.call(this, player, entities, target);

                if (cmdResult.success) {
                    if (target) {
                        if (!(target instanceof WarNew.Tile))
                            return { success: false, message: "Target must be a tile." };

                        var placeResult = this.placementEntity.placementTest((target).x, (target).y, WarNew.PlacementTestFlag.Message, player, null);
                        if (!placeResult.valid)
                            return { success: false, message: placeResult.message };
                    }
                }
                return cmdResult;
            };

            BuildCommand.prototype.tryExecute = function (player, entities, target, queue) {
                var result = this.canExecute(player, entities, target);
                if (result.success) {
                }
                return result;
            };

            BuildCommand.prototype.executeEach = function (entity, target) {
                if (target instanceof WarNew.Tile)
                    WarNew.EntityOrder.build(entity, this.placementEntity, target);
            };
            return BuildCommand;
        })(WorldCommand);
        WarNew.BuildCommand = BuildCommand;

        var HoldPositionCommand = (function (_super) {
            __extends(HoldPositionCommand, _super);
            function HoldPositionCommand() {
                _super.apply(this, arguments);
            }
            HoldPositionCommand.prototype.requiresTarget = function () {
                return false;
            };

            HoldPositionCommand.prototype.getButtonX = function () {
                return 1;
            };
            HoldPositionCommand.prototype.getButtonY = function () {
                return 1;
            };
            HoldPositionCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_H;
            };
            HoldPositionCommand.prototype.getIconID = function () {
                return "icon-hold-position-{race}";
            };
            HoldPositionCommand.prototype.getName = function () {
                return "Hold Position";
            };
            HoldPositionCommand.prototype.getTooltip = function () {
                return "|H|old Position";
            };
            HoldPositionCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to stand where they are and attack units that are" + " within range. When on Hold Position your units will not chase down enemy units" + " that run away, nor move to engage ranged attackers.";
            };

            HoldPositionCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.holdPosition(entity);
            };
            HoldPositionCommand.instance = new HoldPositionCommand();
            return HoldPositionCommand;
        })(WorldCommand);
        WarNew.HoldPositionCommand = HoldPositionCommand;

        var MoveCommand = (function (_super) {
            __extends(MoveCommand, _super);
            function MoveCommand() {
                _super.apply(this, arguments);
            }
            MoveCommand.prototype.getButtonX = function () {
                return 0;
            };
            MoveCommand.prototype.getButtonY = function () {
                return 0;
            };
            MoveCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_M;
            };
            MoveCommand.prototype.getIconID = function () {
                return "icon-move-{race}";
            };
            MoveCommand.prototype.getName = function () {
                return "Move";
            };
            MoveCommand.prototype.getTooltip = function () {
                return "|M|ove";
            };
            MoveCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to move to the target area while ignoring enemy" + " units and attacks. Issuing a move order onto a target unit will cause your unit" + " to follow thetarget using move orders.";
            };

            MoveCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.move(entity, target);
            };
            MoveCommand.instance = new MoveCommand();
            return MoveCommand;
        })(WorldCommand);
        WarNew.MoveCommand = MoveCommand;

        var PatrolCommand = (function (_super) {
            __extends(PatrolCommand, _super);
            function PatrolCommand() {
                _super.apply(this, arguments);
            }
            PatrolCommand.prototype.getButtonX = function () {
                return 0;
            };
            PatrolCommand.prototype.getButtonY = function () {
                return 1;
            };
            PatrolCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_P;
            };
            PatrolCommand.prototype.getIconID = function () {
                return "icon-patrol-{race}";
            };
            PatrolCommand.prototype.getName = function () {
                return "Patrol";
            };
            PatrolCommand.prototype.getTooltip = function () {
                return "|P|atrol";
            };
            PatrolCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to continually move from their current position to the" + " targeted area until given another command. Units on patrol will move to engage" + " enemy units that come within range. Issuing a patrol order onto a target unit will" + " cause your unit to imitate the targeted unit's behavior.";
            };

            PatrolCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.patrol(entity, target);
            };
            PatrolCommand.instance = new PatrolCommand();
            return PatrolCommand;
        })(WorldCommand);
        WarNew.PatrolCommand = PatrolCommand;

        var SetRallyPointCommand = (function (_super) {
            __extends(SetRallyPointCommand, _super);
            function SetRallyPointCommand() {
                _super.apply(this, arguments);
            }
            SetRallyPointCommand.prototype.getButtonX = function () {
                return 2;
            };
            SetRallyPointCommand.prototype.getButtonY = function () {
                return 2;
            };
            SetRallyPointCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_Y;
            };
            SetRallyPointCommand.prototype.getIconID = function () {
                return "icon-rally-{race}";
            };
            SetRallyPointCommand.prototype.getName = function () {
                return "Set Rally Point";
            };
            SetRallyPointCommand.prototype.getTooltip = function () {
                return "Set Rall|y| Point";
            };
            SetRallyPointCommand.prototype.getTooltipExtended = function () {
                return "Orders units that pop out of the building to immediately attack-move to" + " the targeted area. You can rally point gold mines or trees to auto-harvest. You" + " can rally point a unit to have new units follow it when they finish building.";
            };

            SetRallyPointCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.setRallyPoint(entity, target);
            };
            SetRallyPointCommand.instance = new SetRallyPointCommand();
            return SetRallyPointCommand;
        })(WorldCommand);
        WarNew.SetRallyPointCommand = SetRallyPointCommand;

        var StopCommand = (function (_super) {
            __extends(StopCommand, _super);
            function StopCommand() {
                _super.apply(this, arguments);
            }
            StopCommand.prototype.requiresTarget = function () {
                return false;
            };

            StopCommand.prototype.getButtonX = function () {
                return 1;
            };
            StopCommand.prototype.getButtonY = function () {
                return 0;
            };
            StopCommand.prototype.getHotkey = function () {
                return Engine.Key.KEY_S;
            };
            StopCommand.prototype.getIconID = function () {
                return "icon-armor0-{race}";
            };
            StopCommand.prototype.getName = function () {
                return "Stop";
            };
            StopCommand.prototype.getTooltip = function () {
                return "|S|top";
            };
            StopCommand.prototype.getTooltipExtended = function () {
                return "Orders your units to stop whatever order they were previously given." + " Units that have been told to stop will attack enemy units and move to engage" + " nearby enemies.";
            };

            StopCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.stop(entity);
            };
            StopCommand.instance = new StopCommand();
            return StopCommand;
        })(WorldCommand);
        WarNew.StopCommand = StopCommand;

        var TrainCommand = (function (_super) {
            __extends(TrainCommand, _super);
            function TrainCommand(entType) {
                _super.call(this);
                this._type = entType;
                this._data = WarNew.Data.AllEntityData[entType];
            }
            TrainCommand.prototype.getFoodCost = function () {
                return this._data.foodCost;
            };
            TrainCommand.prototype.getGoldCost = function () {
                return this._data.goldCost;
            };
            TrainCommand.prototype.getLumberCost = function () {
                return this._data.lumberCost;
            };
            TrainCommand.prototype.getOilCost = function () {
                return this._data.oilCost;
            };
            TrainCommand.prototype.requiresTarget = function () {
                return false;
            };

            TrainCommand.prototype.getButtonX = function () {
                return this._data.buttonX;
            };
            TrainCommand.prototype.getButtonY = function () {
                return this._data.buttonY;
            };
            TrainCommand.prototype.getHotkey = function () {
                return this._data.hotkey;
            };
            TrainCommand.prototype.getIconID = function () {
                return this._data.iconId;
            };
            TrainCommand.prototype.getName = function () {
                return this._data.name;
            };
            TrainCommand.prototype.getTooltip = function () {
                return this._data.tooltip;
            };
            TrainCommand.prototype.getTooltipExtended = function () {
                return this._data.tooltipExtended;
            };

            TrainCommand.prototype.executeEach = function (entity, target) {
                WarNew.EntityOrder.trainUnit(entity, this._type);
            };
            return TrainCommand;
        })(WorldCommand);
        WarNew.TrainCommand = TrainCommand;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Entity = (function () {
            function Entity(id, world, type, data, owner) {
                var self = this;

                this._id = id;
                this._world = world;
                this._terrain = world.getTerrain();
                this._type = type;
                this._owner = ko.observable(owner);
                this._data = data;

                this._spawnState = ko.observable(WarNew.SpawnState.None);
                this._sortOrder = (((data.pointValue >> 4) & 0x7) << 20) | (type << 19) | (id << 0);

                this._orderQueue = [];
                this._rallyPoint = null;

                this._builders = ko.observableArray();
                this._cargo = ko.observableArray();
                this._miners = ko.observableArray();

                this._actionTicks = 0;
                this._actionParams = null;
                this._action = null;
                this._actionStates = [];
                this._initActionStates();

                this._direction = WarNew.Direction.Down;
                this._sequence = null;
                this._sequences = {};
                this._initSequences();

                this._container = ko.observable();
                this._drawRect = null;
                this._path = null;
                this._position = null;
                this._selectionRect = null;
                this._tile = ko.observable();

                this._health = ko.observable();
                this._mana = ko.observable();
                this._progress = ko.observable();
            }
            Entity.prototype.getID = function () {
                return this._id;
            };
            Entity.prototype.getType = function () {
                return this._type;
            };
            Entity.prototype.getOwner = function () {
                return this._owner();
            };
            Entity.prototype.getSortOrder = function () {
                return this._sortOrder;
            };

            Entity.prototype.getPosition = function () {
                return this._position;
            };
            Entity.prototype.getSelectionRect = function () {
                return this._selectionRect;
            };
            Entity.prototype.getDrawRect = function () {
                return this._drawRect;
            };
            Entity.prototype.getQTRect = function () {
                return this._drawRect;
            };

            Entity.prototype.canMove = function () {
                return this._data.isUnit && this.isAlive();
            };
            Entity.prototype.canBuild = function (type) {
                return this._data.builds.indexOf(type) !== -1 && this.isAlive();
            };
            Entity.prototype.hasWeapon = function () {
                return this._data.hasWeapon && this.isAlive();
            };
            Entity.prototype.getIconID = function () {
                return this._data.iconId;
            };
            Entity.prototype.isAlive = function () {
                return this._spawnState() === WarNew.SpawnState.Alive;
            };
            Entity.prototype.isBeingConstructed = function () {
                return this._spawnState() === WarNew.SpawnState.Constructing;
            };
            Entity.prototype.isDead = function () {
                return this._spawnState() === WarNew.SpawnState.Dead;
            };
            Entity.prototype.isSelectable = function () {
                return this._data.selectable && (this.isAlive() || this.isBeingConstructed());
            };
            Entity.prototype.isStructure = function () {
                return this._data.isStructure;
            };
            Entity.prototype.isUnit = function () {
                return this._data.isUnit;
            };
            Entity.prototype.getAbilities = function () {
                return this._data.abilities;
            };
            Entity.prototype.getBuilderCapacity = function () {
                return 1;
            };
            Entity.prototype.getCargoCapacity = function () {
                return this._data.cargoCapacity;
            };
            Entity.prototype.getContainer = function () {
                return this._container();
            };
            Entity.prototype.getMana = function () {
                return this._mana();
            };
            Entity.prototype.getMinerCapacity = function () {
                return 9999;
            };
            Entity.prototype.getMoveSpeed = function () {
                return this._data.moveSpeed;
            };
            Entity.prototype.getName = function () {
                return this._data.name;
            };
            Entity.prototype.getOccupyFlags = function () {
                return this._data.occupyFlags;
            };
            Entity.prototype.getPriority = function () {
                return this._data.priority;
            };
            Entity.prototype.getRootEntity = function () {
                var e = this, p = this;
                while (e = e._container()) {
                    p = e;
                }
                return p;
            };
            Entity.prototype.getSight = function () {
                return this._data.sight;
            };
            Entity.prototype.getStructuresBuilt = function () {
                return this._data.builds;
            };
            Entity.prototype.getTile = function () {
                return this._tile() || null;
            };
            Entity.prototype.getTilesWide = function () {
                return this._data.tilesWide || 1;
            };
            Entity.prototype.getTilesHigh = function () {
                return this._data.tilesHigh || 1;
            };
            Entity.prototype.getTooltip = function () {
                return this._data.tooltip;
            };
            Entity.prototype.getTooltipExtended = function () {
                return this._data.tooltipExtended;
            };
            Entity.prototype.getUnitsTrained = function () {
                return this._data.unitsTrained;
            };
            Entity.prototype.trainsUnits = function () {
                return this._data.unitsTrained.length > 0;
            };

            Entity.prototype.getArmor = function () {
                return this._data.armorBase;
            };
            Entity.prototype.getDamageMin = function () {
                return this._data.weaponDamageBase;
            };
            Entity.prototype.getDamageMax = function () {
                return this._data.weaponDamageBase + this._data.weaponDamageRandom;
            };
            Entity.prototype.getHealth = function () {
                return this._health();
            };
            Entity.prototype.getHealthMax = function () {
                return this._data.healthMax;
            };

            Entity.prototype.dispose = function () {
                this._world = null;

                this._owner = null;
                this._data = null;
                this._spawnState.dispose();
                this._spawnState = null;

                this._position = null;
                this._selectionRect = null;
                this._drawRect = null;

                this._orderQueue = null;

                this._actionParams = null;
                this._action = null;
                this._actionStates = null;

                this._sequence = null;
                this._sequences = null;

                this._tile(null);
                this._container(null);

                this._path = null;

                this._builders.dispose();
                this._builders = null;

                this._cargo.dispose();
                this._cargo = null;

                this._miners.dispose();
                this._miners = null;

                this._mana.dispose();
                this._mana = null;

                this._health.dispose();
                this._health = null;

                this._progress.dispose();
                this._progress = null;
            };

            Entity.prototype.init = function (raw) {
                 {
                    var self = this;
                    var data = this._data;
                    var boxWidth = data.isUnit ? data.boxWidth : data.tilesWide * WarNew.TILE_SIZE;
                    var boxHeight = data.isUnit ? data.boxHeight : data.tilesHigh * WarNew.TILE_SIZE;

                    this._spawnState.subscribeChanged(function (p, n) {
                        WarNew.WorldEvent.Entity.spawnState.trigger(self, p, n);
                    }, true);

                    this._direction = WarNew.Direction.Down;

                    this._container.subscribeChanged(function (p, n) {
                        WarNew.WorldEvent.Entity.container.trigger(self, p, n);
                    }, true);
                    this._drawRect = new Engine.Rect();
                    this._position = new Engine.Vec2();
                    this._selectionRect = new Engine.Rect(0, 0, boxWidth, boxHeight);
                    this._tile.subscribeChanged(function (p, n) {
                        WarNew.WorldEvent.Entity.tile.trigger(self, p, n);
                    }, true);

                    this._health.subscribeChanged(function (p, n) {
                        WarNew.WorldEvent.Entity.health.trigger(self, p, n);
                    }, true);
                    this._mana.subscribeChanged(function (p, n) {
                        WarNew.WorldEvent.Entity.mana.trigger(self, p, n);
                    }, true);
                }

                 {
                    var raw_1 = raw[1] || 0;
                    var tileID = 0x7ffff & (raw_1 >> 0);

                    var raw_2 = raw[2] || 0;
                    var health = 0xfff & (raw_2 >> 0);
                    var mana = 0x1f & (raw_2 >> 12);
                    var spawnState = 0x7 & (raw_2 >> 17);
                    var goldContained = 0x7ff & (raw_2 >> 20);

                    var raw_3 = raw[3] || 0;
                    var posX = 0x7fff & (raw_3 >> 0);
                    var posY = 0x7fff & (raw_3 >> 15);

                    this.trySetTile(this._terrain.getTileById(tileID), false);
                    this._health(health);
                    this._mana(mana);
                    this._spawnState(spawnState);

                    this._setPosition(posX, posY);
                    this._setSequence("idle");
                }
            };

            Entity.prototype.draw = function (ctx) {
                this._sequence.drawAtCenter(ctx, this._position.x, this._position.y);
            };

            Entity.prototype.drawPlacement = function (ctx, tileX, tileY) {
                ctx.globalAlpha = 0.7;
                 {
                    this._sequences["idle"].drawAtCorner(ctx, tileX * WarNew.TILE_SIZE, tileY * WarNew.TILE_SIZE);

                    ctx.globalAlpha = 0.3;

                    var result = this.placementTest(tileX, tileY, WarNew.PlacementTestFlag.ValidTiles | WarNew.PlacementTestFlag.InvalidTiles, this._owner(), null);

                    ctx.fillStyle = "#0f0";
                    var tiles = result.validTiles;
                    for (var t = tiles.length - 1; t !== -1; --t) {
                        var p = tiles[t].topLeft;
                        ctx.fillRect(p.x, p.y, WarNew.TILE_SIZE, WarNew.TILE_SIZE);
                    }

                    ctx.fillStyle = "#f00";
                    tiles = result.invalidTiles;
                    for (var t = tiles.length - 1; t !== -1; --t) {
                        var p = tiles[t].topLeft;
                        ctx.fillRect(p.x, p.y, WarNew.TILE_SIZE, WarNew.TILE_SIZE);
                    }
                }
                ctx.globalAlpha = 1;
            };

            Entity.prototype.getPathHeuristic = function (type, weight) {
                var ent = this.getRootEntity();
                var onTile = ent.getTile();
                if (!onTile)
                    return null;

                var x = onTile.x - 1;
                var y = onTile.y - 1;
                var width = ent.getTilesWide() + 1;
                var height = ent.getTilesHigh() + 1;

                if (type === WarNew.PathType.ToTarget) {
                    return function (fromTile) {
                        return weight * WarNew.Pathfinder.distance(fromTile.x, fromTile.y, 1, 1, x, y, width, height);
                    };
                } else if (type === WarNew.PathType.AvoidTarget) {
                    var LARGE_NUMBER = (Engine.MAX_INT >> 1);
                    return function (fromTile) {
                        return LARGE_NUMBER - weight * WarNew.Pathfinder.distance(fromTile.x, fromTile.y, 1, 1, x, y, width, height);
                    };
                }

                return null;
            };

            Entity.prototype.placementTest = function (tileX, tileY, retFlags, ignorePlayerUnits, ignoreEntity) {
                var valid = true;
                var ret = { valid: true };

                if ((WarNew.PlacementTestFlag.Message & retFlags) !== 0)
                    ret.message = "Success";

                if ((WarNew.PlacementTestFlag.ValidTiles & retFlags) !== 0)
                    ret.validTiles = [];

                if ((WarNew.PlacementTestFlag.InvalidTiles & retFlags) !== 0)
                    ret.invalidTiles = [];

                if ((WarNew.PlacementTestFlag.BlockingEntities & retFlags) !== 0)
                    ret.blockingEntities = [];

                ret.ignorePlayerUnits = ignorePlayerUnits;

                ret.ignoreEnt = ignoreEntity;

                var tw = this.getTilesWide();
                var th = this.getTilesHigh();
                if (tw > 1 || th > 1) {
                    var tiles = this._terrain.getTilesWithinIndex(tileX, tileY, tw, th);
                    if (tiles.length !== tw * th) {
                        ret.valid = false;
                        if (ret.message)
                            ret.message = "Cannot place outside of world bounds.";
                    }

                    for (var i = tiles.length - 1; i !== -1; --i)
                        this._placementTestSingle(tiles[i], ret);
                } else {
                    var tile = this._terrain.getTileAtIndex(tileX, tileY, false);
                    if (!tile) {
                        ret.valid = false;
                        if (ret.message)
                            ret.message = "Cannot place outside of world bounds.";
                    } else {
                        this._placementTestSingle(tile, ret);
                    }
                }

                return ret;
            };
            Entity.prototype._placementTestSingle = function (tile, ret) {
                if (tile.canOccupy(this, ret)) {
                    if (ret.validTiles)
                        ret.validTiles.push(tile);
                } else {
                    ret.valid = false;
                    if (ret.invalidTiles)
                        ret.invalidTiles.push(tile);
                }
            };

            Entity.prototype.removeEntity = function (entity) {
                var lists = [this._builders, this._cargo, this._miners];
                for (var i = lists.length - 1; i !== -1; --i) {
                    var list = lists[i]();
                    var index = list.indexOf(entity);
                    if (index !== -1) {
                        list.splice(index, 1);
                        lists[i](list);
                    }
                }
            };

            Entity.prototype.think = function () {
                var queue = this._orderQueue;
                if (queue.length !== 0) {
                    var result = WarNew.EntityThink.think(this, queue[0]);
                    if (result === WarNew.ThinkResult.Done || (result === WarNew.ThinkResult.DoneIfQueue && queue.length > 1)) {
                        queue.shift();
                        this.think();
                    }
                } else {
                    this.wait(60);
                }
            };

            Entity.prototype.tryMove = function (target, pathType, maxIterations) {
                if (!this.isUnit() || !this.isAlive())
                    return false;

                var curTile = this._tile();
                if (!curTile)
                    return false;

                var recalculated = false;
                var path = this._path;
                if (!path || path.target !== target) {
                    path = this._path = WarNew.Pathfinder.getPath(this, target, pathType, maxIterations);
                    recalculated = true;

                    if (!path)
                        return false;
                }

                var nextTile = path.peek();
                if (!nextTile || !this.trySetTile(nextTile, false)) {
                    if (recalculated)
                        return false;

                    path = this._path = WarNew.Pathfinder.getPath(this, target, pathType, maxIterations);
                    recalculated = true;

                    nextTile = path ? path.peek() : null;
                    if (!nextTile || !this.trySetTile(nextTile, false))
                        return false;
                }

                path.pop();

                var dx = nextTile.x - curTile.x;
                var dy = nextTile.y - curTile.y;

                var dir = (dx < 0 ? WarNew.Direction.Left : (dx > 0 ? WarNew.Direction.Right : 0)) | (dy < 0 ? WarNew.Direction.Up : (dy > 0 ? WarNew.Direction.Down : 0));
                var moveDelta = Math.max(this.getMoveSpeed() * WarNew.ENTITY_MOVE_SPEED_MULTIPLIER, 0.0001);

                this._setActionState({
                    type: WarNew.ActionType.Moving,
                    direction: dir,
                    moveStepX: dx * moveDelta,
                    moveStepY: dy * moveDelta,
                    moveEndX: nextTile.center.x,
                    moveEndY: nextTile.center.y,
                    endTick: Math.max(Math.floor(WarNew.TILE_SIZE / moveDelta), 1)
                });

                return true;
            };

            Entity.prototype._tryOccupy = function (entity, type) {
                if (!entity || entity === this)
                    return false;

                if (type === WarNew.EntityContainType.Builder) {
                    var ents = this._builders();
                    if (this.isBeingConstructed() && ents.length < this.getBuilderCapacity()) {
                        ents.push(entity);
                        this._builders(ents);
                        return true;
                    }
                } else if (type === WarNew.EntityContainType.Cargo) {
                    var ents = this._cargo();
                    if (this.isAlive() && ents.length < this.getCargoCapacity()) {
                        ents.push(entity);
                        this._cargo(ents);
                        return true;
                    }
                } else if (type === WarNew.EntityContainType.Miner) {
                    var ents = this._miners();
                    if (this.isAlive() && ents.length < this.getMinerCapacity()) {
                        ents.push(entity);
                        this._miners(ents);
                        return true;
                    }
                }
                return false;
            };

            Entity.prototype.trySetEntityContainer = function (entity, type) {
                var success = entity && entity._tryOccupy(this, type);
                if (success) {
                    var oldTile = this._tile();
                    if (oldTile) {
                        oldTile.removeEntity(this);
                        this._tile(null);
                    }

                    var oldEntity = this._container();
                    if (oldEntity) {
                        oldEntity.removeEntity(this);
                    }

                    this._container(entity);
                }
                return success;
            };

            Entity.prototype.trySetTile = function (tile, updatePosition) {
                if (!tile)
                    return false;

                var tw = this.getTilesWide();
                var th = this.getTilesHigh();
                if (tw > 1 || th > 1) {
                    var result = this.placementTest(tile.x, tile.y, WarNew.PlacementTestFlag.ValidTiles, null, null);
                    if (!result.valid)
                        return false;

                    var oldTile = this._tile();
                    if (oldTile) {
                        var oldTiles = this._terrain.getTilesWithinIndex(oldTile.x, oldTile.y, tw, th);
                        for (var i = oldTiles.length - 1; i !== -1; --i)
                            oldTiles[i].removeEntity(this);
                    }

                    var oldEntity = this._container();
                    if (oldEntity) {
                        oldEntity.removeEntity(this);
                        this._container(null);
                    }

                    var newTiles = result.validTiles;
                    for (var i = newTiles.length - 1; i !== -1; --i)
                        newTiles[i]._tryOccupy(this);

                    if (updatePosition)
                        this._setPosition(tile.topLeft.x + tw * WarNew.TILE_SIZE / 2, tile.topLeft.y + th * WarNew.TILE_SIZE / 2);
                } else {
                    var result = this.placementTest(tile.x, tile.y, 0, null, null);
                    if (!result.valid)
                        return false;

                    var oldTile = this._tile();
                    if (oldTile) {
                        oldTile.removeEntity(this);
                    }

                    var oldEntity = this._container();
                    if (oldEntity) {
                        oldEntity.removeEntity(this);
                        this._container(null);
                    }

                    tile._tryOccupy(this);

                    if (updatePosition)
                        this._setPosition(tile.center.x, tile.center.y);
                }

                this._tile(tile);

                return true;
            };

            Entity.prototype.update = function () {
                var curAction = this._action;
                if (curAction) {
                    if (curAction.tick(++this._actionTicks, this._actionParams)) {
                        if (this._actionParams.onActionComplete) {
                            this._actionParams.onActionComplete();
                        }
                        curAction = this._action = null;
                    }
                }

                if (!curAction) {
                    this.think();
                }

                this._sequence.update();
            };

            Entity.prototype.wait = function (ticks) {
                this._setActionState({
                    type: WarNew.ActionType.Waiting,
                    endTick: ticks
                });
            };

            Entity.prototype._initActionStates = function () {
                var self = this;
                this._actionStates[WarNew.ActionType.Waiting] = {
                    sequenceName: "idle",
                    tick: function (actionTicks, actionParams) {
                        return actionTicks >= actionParams.endTick || self._orderQueue[0] !== actionParams.order || self._orderQueue.length !== actionParams.orderQueueLength;
                    }
                };

                this._actionStates[WarNew.ActionType.Moving] = {
                    sequenceName: "move",
                    tick: function (actionTicks, actionParams) {
                        if (actionTicks >= actionParams.endTick) {
                            self._setPosition(actionParams.moveEndX, actionParams.moveEndY);
                            return true;
                        } else {
                            self._setPosition(self._position.x + actionParams.moveStepX, self._position.y + actionParams.moveStepY);
                            return false;
                        }
                    }
                };

                this._actionStates[WarNew.ActionType.Attacking] = {
                    sequenceName: "attack",
                    tick: function (actionTicks, actionParams) {
                        if (actionTicks === actionParams.endTick) {
                            console.log("END ATTACK");
                            return true;
                        } else if (actionTicks === actionParams.swingTick) {
                            console.log("SWING");
                        }

                        return false;
                    }
                };

                this._actionStates[WarNew.ActionType.BeingConstructed] = {
                    sequenceName: "construction_site",
                    tick: function (actionTicks, actionParams) {
                        var index = actionParams.sequenceIndex;
                        var nextSeqTick = actionParams.sequenceIncreaseTicks[index];
                        if (actionTicks === nextSeqTick) {
                            if (index === 0 || index === 2)
                                self._sequence.incrementFrame();
else if (index === 1)
                                self._setSequence("construction");

                            ++actionParams.sequenceIndex;
                        }

                        var oldHealth = self._health();
                        var newHealth = Math.min(oldHealth + actionParams.healthPerTick, self.getHealthMax());
                        if (oldHealth !== newHealth) {
                            self._health(newHealth);
                        }

                        self._progress(actionTicks / actionParams.endTick);

                        if (actionTicks === actionParams.endTick) {
                            return true;
                        }

                        return false;
                    }
                };
            };

            Entity.prototype._initSequences = function () {
                var obj = this._data.sequences;
                var names = ["attack", "construction", "construction_site", "idle", "move"];
                var playerID = this._owner().getID();
                for (var i = 0, ii = names.length; i < ii; ++i) {
                    var name = names[i];
                    var seqData = obj[name];
                    if (seqData) {
                        this._sequences[name] = new WarNew.Sequence({
                            type: seqData.type || obj.type,
                            image: WarNew.ImageCache.getImage(seqData.imageID || obj.imageID, playerID),
                            frameWidth: seqData.frameWidth || obj.frameWidth,
                            frameHeight: seqData.frameHeight || obj.frameHeight,
                            frames: seqData.frames,
                            frameTick: seqData.frameTick
                        });
                    }
                }
            };

            Entity.prototype._setActionState = function (params) {
                var actionState = this._actionStates[params.type];
                if (actionState) {
                    params.order = this._orderQueue[0];
                    params.orderQueueLength = this._orderQueue.length;

                    this._actionTicks = 0;
                    this._actionParams = params;
                    this._action = actionState;
                    this._setSequence(actionState.sequenceName, params.direction);
                }
            };

            Entity.prototype._setSequence = function (sequenceName, direction) {
                var sequence = this._sequences[sequenceName];
                if (sequence) {
                    if (sequence !== this._sequence) {
                        sequence.reset();
                        this._sequence = sequence;

                        var dr = this._drawRect;
                        if (dr) {
                            dr.x = this._position.x - (sequence.frameWidth >> 1);
                            dr.y = this._position.y - (sequence.frameHeight >> 1);
                            dr.width = sequence.frameWidth;
                            dr.height = sequence.frameHeight;
                        }
                    }

                    if (direction)
                        this._direction = direction;
                    sequence.setDirection(this._direction);
                }
            };

            Entity.prototype._setPosition = function (x, y) {
                this._position.x = x;
                this._position.y = y;

                var sr = this._selectionRect;
                sr.x = x - (sr.width >> 1);
                sr.y = y - (sr.height >> 1);

                var dr = this._drawRect;
                dr.x = x - (dr.width >> 1);
                dr.y = y - (dr.height >> 1);

                this._world.getQuadtree().update(this);
            };
            return Entity;
        })();
        WarNew.Entity = Entity;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (EntityOrder) {
            function defaultOrder(ent, target) {
                if (target instanceof WarNew.Tile) {
                    var targetTile = target;
                    move(ent, targetTile);
                } else if (target instanceof WarNew.Entity) {
                    var targetEntity = target;

                    var entTeam = ent.getOwner().getTeam();
                    var targetTeam = targetEntity.getOwner().getTeam();

                    if (targetTeam.isNeutral() === false && entTeam !== targetTeam)
                        attack(ent, target);
else
                        move(ent, target);
                }
            }
            EntityOrder.defaultOrder = defaultOrder;

            function attack(ent, target) {
                if (ent.hasWeapon()) {
                    if (target instanceof WarNew.Entity) {
                        _issueOrder(ent, {
                            type: WarNew.OrderType.AttackEntity,
                            targetEntity: target
                        });
                    } else if (target instanceof WarNew.Tile) {
                        _issueOrder(ent, {
                            type: WarNew.OrderType.AttackToTile,
                            targetTile: target
                        });
                    }
                } else {
                    move(ent, target);
                }
            }
            EntityOrder.attack = attack;

            function build(ent, structure, targetTile) {
            }
            EntityOrder.build = build;

            function holdPosition(ent) {
                if (!ent.canMove())
                    return;

                _issueOrder(ent, {
                    type: WarNew.OrderType.HoldPosition
                });
            }
            EntityOrder.holdPosition = holdPosition;

            function move(ent, target) {
                if (!ent.canMove())
                    return;

                if (target instanceof WarNew.Entity) {
                    _issueOrder(ent, {
                        type: WarNew.OrderType.FollowEntity,
                        targetEntity: target
                    });
                } else if (target instanceof WarNew.Tile) {
                    _issueOrder(ent, {
                        type: WarNew.OrderType.MoveToTile,
                        targetTile: target
                    });
                }
            }
            EntityOrder.move = move;

            function patrol(ent, target) {
                if (!ent.canMove())
                    return;

                if (target instanceof WarNew.Entity) {
                    _issueOrder(ent, {
                        type: WarNew.OrderType.PatrolToEntity,
                        targetEntity: target
                    });
                } else if (target instanceof WarNew.Tile) {
                    _issueOrder(ent, {
                        type: WarNew.OrderType.PatrolToTile,
                        targetTile: target
                    });
                }
            }
            EntityOrder.patrol = patrol;

            function setRallyPoint(ent, target) {
                if (!ent.trainsUnits())
                    return;

                ent._rallyPoint = target;
            }
            EntityOrder.setRallyPoint = setRallyPoint;

            function stop(ent) {
                ent._orderQueue = [];
            }
            EntityOrder.stop = stop;

            function trainUnit(ent, unitType) {
                if (ent.getUnitsTrained().indexOf(unitType) === -1)
                    return;

                var data = WarNew.Data.AllEntityData[unitType];
                if (!data)
                    return;
            }
            EntityOrder.trainUnit = trainUnit;

            function _issueOrder(ent, order, queueFront) {
                order.tryCount = 0;
                if (queueFront)
                    ent._orderQueue.unshift(order);
else
                    ent._orderQueue.push(order);
            }
        })(WarNew.EntityOrder || (WarNew.EntityOrder = {}));
        var EntityOrder = WarNew.EntityOrder;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (EntityThink) {
            var _thinkStates = [];

            _thinkStates[WarNew.OrderType.AttackEntity] = AttackEntity;

            _thinkStates[WarNew.OrderType.BuildAtTile] = BuildAtTile;

            _thinkStates[WarNew.OrderType.ClearArea] = ClearArea;
            _thinkStates[WarNew.OrderType.FollowEntity] = FollowEntity;
            _thinkStates[WarNew.OrderType.HarvestGold] = HarvestGold;
            _thinkStates[WarNew.OrderType.HoldPosition] = HoldPosition;
            _thinkStates[WarNew.OrderType.MoveToTile] = MoveToTile;
            _thinkStates[WarNew.OrderType.PatrolToEntity] = PatrolToEntity;
            _thinkStates[WarNew.OrderType.PatrolToTile] = PatrolToTile;

            function think(entity, order) {
                var state = _thinkStates[order.type];
                return (state ? state(entity, order) : WarNew.ThinkResult.Done);
            }
            EntityThink.think = think;

            function AttackEntity(attacker, order) {
                return WarNew.ThinkResult.Done;
            }

            function BuildAtTile(builder, order) {
                return WarNew.ThinkResult.Done;
            }

            function ClearArea(entity, order) {
                return WarNew.ThinkResult.Done;
            }

            function FollowEntity(follower, order) {
                return WarNew.ThinkResult.Done;
            }

            function HarvestGold(harvester, order) {
                return WarNew.ThinkResult.Done;
            }

            function HoldPosition(entity, order) {
                return WarNew.ThinkResult.Done;
            }

            function MoveToTile(mover, order) {
                var curTile = mover.getTile();
                if (!curTile) {
                    mover.wait(40);
                    return WarNew.ThinkResult.NotDone;
                }

                var destTile = order.targetTile;
                if (curTile === destTile) {
                    return WarNew.ThinkResult.Done;
                }

                if (!mover.tryMove(destTile, WarNew.PathType.ToTarget)) {
                    if (++order.tryCount > 1) {
                        console.log("\"I QUIT MOVING!\" says " + mover.getName());
                        return WarNew.ThinkResult.Done;
                    }

                    mover.wait(40);
                }

                return WarNew.ThinkResult.NotDone;
            }

            function PatrolToEntity(patroller, order) {
                return WarNew.ThinkResult.Done;
            }

            function PatrolToTile(patroller, order) {
                return WarNew.ThinkResult.Done;
            }
        })(WarNew.EntityThink || (WarNew.EntityThink = {}));
        var EntityThink = WarNew.EntityThink;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        ko.bindingHandlers["Healthbar"] = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var entity = valueAccessor();

                var percent = Math.floor((entity.getHealth() / entity.getHealthMax()) * 100);

                if (percent > 74) {
                    element.style.backgroundColor = "#347004";
                } else if (percent > 48) {
                    element.style.backgroundColor = "#fcfc00";
                } else {
                    element.style.backgroundColor = "#f00";
                }

                element.style.width = percent + "%";
            }
        };
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (ImageCache) {
            var _replaceColors = [
                [
                    [0x81, 0x82, 0x82],
                    [0x62, 0x63, 0x63],
                    [0x49, 0x4a, 0x4a],
                    [0x37, 0x38, 0x38]
                ],
                [
                    [0xa4, 0x00, 0x00],
                    [0x7c, 0x00, 0x00],
                    [0x5c, 0x04, 0x00],
                    [0x44, 0x04, 0x00]
                ],
                [
                    [0x0c, 0x48, 0xcc],
                    [0x04, 0x28, 0xa0],
                    [0x00, 0x14, 0x74],
                    [0x00, 0x04, 0x4c]
                ],
                [
                    [0x2c, 0xb4, 0x94],
                    [0x14, 0x84, 0x5c],
                    [0x04, 0x54, 0x2c],
                    [0x00, 0x28, 0x0c]
                ],
                [
                    [0x98, 0x48, 0xb0],
                    [0x74, 0x2c, 0x84],
                    [0x50, 0x18, 0x58],
                    [0x2c, 0x08, 0x2c]
                ],
                [
                    [0xf8, 0x8c, 0x14],
                    [0xc8, 0x60, 0x10],
                    [0x98, 0x3c, 0x10],
                    [0x6c, 0x20, 0x0c]
                ],
                [
                    [0x28, 0x28, 0x3c],
                    [0x1c, 0x1c, 0x2c],
                    [0x14, 0x14, 0x20],
                    [0x0c, 0x0c, 0x14]
                ],
                [
                    [0xe0, 0xe0, 0xe0],
                    [0x98, 0x98, 0xb4],
                    [0x54, 0x54, 0x80],
                    [0x24, 0x28, 0x4c]
                ],
                [
                    [0xfc, 0xfc, 0x48],
                    [0xe4, 0xcc, 0x28],
                    [0xcc, 0xa0, 0x10],
                    [0xb4, 0x74, 0x00]
                ]
            ];

            var _imageCanvi = {};

            function getImage(imageId, playerId) {
                if (playerId === undefined || playerId === 0) {
                    return Engine.AssetManager.getImage(imageId);
                }

                playerId = Engine.MathUtil.clamp(playerId, 0, _replaceColors.length - 1);

                var canvasId = imageId + "|" + playerId;

                var canvas = _imageCanvi[canvasId] || null;
                if (!canvas) {
                    var image = Engine.AssetManager.getImage(imageId);
                    if (image) {
                        canvas = _newCanvas(image, _replaceColors[playerId]);

                        _imageCanvi[canvasId] = canvas;
                    }
                }
                return canvas;
            }
            ImageCache.getImage = getImage;

            function _newCanvas(image, replaceColors) {
                var cvs = document.createElement("canvas");
                var width = cvs.width = image.width;
                var height = cvs.height = image.height;

                var ctx = cvs.getContext("2d");
                ctx.drawImage(image, 0, 0);

                var imgData = ctx.getImageData(0, 0, width, height);
                var data = imgData.data;
                var i = 0;
                for (var y = 0; y < height; y++) {
                    for (var x = 0; x < width; x++) {
                        var dest = null;

                        var long = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
                        switch (long) {
                            case 0x818282:
                                dest = replaceColors[0];
                                break;
                            case 0x626363:
                                dest = replaceColors[1];
                                break;
                            case 0x494a4a:
                                dest = replaceColors[2];
                                break;
                            case 0x373838:
                                dest = replaceColors[3];
                                break;
                        }

                        if (dest) {
                            data[i] = dest[0];
                            data[i + 1] = dest[1];
                            data[i + 2] = dest[2];
                        }
                        i += 4;
                    }
                }
                ctx.putImageData(imgData, 0, 0);
                return cvs;
            }
        })(WarNew.ImageCache || (WarNew.ImageCache = {}));
        var ImageCache = WarNew.ImageCache;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Path = (function () {
            function Path(pathID, bestTile, bestHeuristic, target) {
                this.pathID = pathID;
                this.bestTile = bestTile;
                this.isComplete = (bestHeuristic === 0);
                this.target = target;
                this._pathArray = this._makePathArray(bestTile);
            }
            Path.prototype.dispose = function () {
                this.bestTile = null;

                this.target = null;
                this._pathArray = null;
            };

            Path.prototype.peek = function () {
                var pa = this._pathArray;
                return pa.length !== 0 ? pa[pa.length - 1] : null;
            };

            Path.prototype.pop = function () {
                var pa = this._pathArray;
                return pa.length !== 0 ? pa.pop() : null;
            };

            Path.prototype.length = function () {
                return this._pathArray.length;
            };

            Path.prototype._makePathArray = function (tile) {
                var ret = [];
                while (tile.__pathParent) {
                    ret.push(tile);
                    tile = tile.__pathParent;
                }
                return ret;
            };
            return Path;
        })();
        WarNew.Path = Path;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (Pathfinder) {
            var _prevPathID = -1;

            function distance(ax, ay, aWidth, aHeight, bx, by, bWidth, bHeight) {
                var Ax0 = ax, Ax1 = ax + aWidth;
                var Ay0 = ay, Ay1 = ay + aHeight;

                var Bx0 = bx, Bx1 = bx + bWidth;
                var By0 = by, By1 = by + bHeight;

                var dist = -1;
                if (Bx1 <= Ax0) {
                    dist = Ax0 - Bx1;
                    if (By1 <= Ay0)
                        dist = Math.max(dist, Ay0 - By1);
else if (By0 >= Ay1)
                        dist = Math.max(dist, By0 - Ay1);
                } else if (Bx0 >= Ax1) {
                    dist = Bx0 - Ax1;
                    if (By1 <= Ay0)
                        dist = Math.max(dist, Ay0 - By1);
else if (By0 >= Ay1)
                        dist = Math.max(dist, By0 - Ay1);
                } else {
                    if (By1 <= Ay0)
                        dist = Ay0 - By1;
else if (By0 >= Ay1)
                        dist = By0 - Ay1;
                }

                return dist + 1;
            }
            Pathfinder.distance = distance;

            function getPath(entity, target, type, maxIterations) {
                if (!entity) {
                    return null;
                }

                var startTile = entity.getTile();
                if (!startTile) {
                    return null;
                }

                var WEIGHT = 10;
                var WEIGHT_DIAG = 14;

                var heuristicFunc = target.getPathHeuristic(type, WEIGHT);
                if (!heuristicFunc) {
                    return null;
                }

                maxIterations = maxIterations || WarNew.PATHFINDER_MAX_ITERATIONS;

                var pathID = ++_prevPathID;
                var openList = new Engine.BinaryHeap(function (tile) {
                    return tile.__pathF;
                });
                var bestTile = null;
                var bestHeuristic = Engine.MAX_INT;

                startTile.__resetPath(pathID);
                startTile.__pathOpen = true;
                startTile.__pathH = heuristicFunc(startTile);

                openList.push(startTile);

                for (var i = 0; i < maxIterations && openList.size() !== 0; ++i) {
                    var tile = openList.pop();
                    tile.__pathClosed = true;

                    if (tile.__pathH < bestHeuristic) {
                        bestTile = tile;
                        bestHeuristic = tile.__pathH;

                        if (bestHeuristic === 0)
                            break;
                    }

                    var tileX = tile.x;
                    var tileY = tile.y;
                    var tileG = tile.__pathG;
                    var nbrs = tile.neighbors;
                    for (var n = nbrs.length - 1; n !== -1; --n) {
                        var nbrTile = nbrs[n];
                        if (!nbrTile.canOccupy(entity))
                            continue;

                        if (nbrTile.__pathID !== pathID)
                            nbrTile.__resetPath(pathID);

                        if (nbrTile.__pathClosed)
                            continue;

                        var tempG = tileG + (tileX === nbrTile.x || tileY === nbrTile.y ? WEIGHT : WEIGHT_DIAG);

                        if (!nbrTile.__pathOpen || tempG < nbrTile.__pathG) {
                            var heur = heuristicFunc(nbrTile);

                            nbrTile.__pathG = tempG;
                            nbrTile.__pathH = heur;
                            nbrTile.__pathF = tempG + heur;
                            nbrTile.__pathParent = tile;

                            if (nbrTile.__pathOpen) {
                                openList.rescoreElement(nbrTile);
                            } else {
                                openList.push(nbrTile);
                                nbrTile.__pathOpen = true;
                            }
                        }
                    }
                }

                return new WarNew.Path(pathID, bestTile, bestHeuristic, target);
            }
            Pathfinder.getPath = getPath;
        })(WarNew.Pathfinder || (WarNew.Pathfinder = {}));
        var Pathfinder = WarNew.Pathfinder;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Player = (function () {
            function Player(id, world) {
                this._id = id;
                this._world = world;

                this._gold = 800;
                this._lumber = 400;
                this._oil = 200;
                this._foodUsed = 12;
                this._foodCreated = 20;
            }
            Player.prototype.getID = function () {
                return this._id;
            };
            Player.prototype.getRace = function () {
                return this._race;
            };
            Player.prototype.getTeam = function () {
                return this._team;
            };

            Player.prototype.getGold = function () {
                return this._gold;
            };
            Player.prototype.getLumber = function () {
                return this._lumber;
            };
            Player.prototype.getOil = function () {
                return this._oil;
            };
            Player.prototype.getFoodUsed = function () {
                return this._foodUsed;
            };
            Player.prototype.getFoodCreated = function () {
                return this._foodCreated;
            };

            Player.prototype.dispose = function () {
                this._world = null;
            };

            Player.prototype.init = function (raw) {
                this._type = raw ? raw.playerType : WarNew.PlayerType.None;

                this._race = "human";
            };
            return Player;
        })();
        WarNew.Player = Player;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        function formatIconID(str, liveGame) {
            var player = liveGame.getPlayer();
            if (player) {
                var race = player.getRace();
                str = str.replace(/\{race\}/g, race);
            }
            return str;
        }

        ko.bindingHandlers["Portrait"] = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                element.width = 46;
                element.height = 38;
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                var liveGame = bindingContext.$root;

                var params = valueAccessor();

                var ctx = element.getContext("2d");
                if (!params) {
                    ctx.clearRect(0, 0, element.width, element.height);
                    return;
                }

                var iconID = formatIconID(params.iconID, liveGame);

                var sprite = WarNew.AllSpriteData.getSprite(iconID, params.player ? params.player.getID() : undefined);
                if (!sprite) {
                    ctx.clearRect(0, 0, element.width, element.height);
                    return;
                }

                var downButton = liveGame.getDownButton();
                if (downButton && params.data === ko.dataFor(downButton)) {
                    element.style.margin = "1px 0 0 1px";
                } else {
                    element.style.margin = "0";
                }

                ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height, 0, 0, element.width, element.height);
            }
        };
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Sequence = (function () {
            function Sequence(params) {
                this.frameWidth = params.frameWidth;
                this.frameHeight = params.frameHeight;

                this._type = params.type;
                this._image = params.image;
                this._frames = params.frames;
                this._frameTick = params.frameTick;

                this.reset();
                this.setDirection(params.direction);
            }
            Sequence.prototype.getFrameWidth = function () {
                return this.frameWidth;
            };
            Sequence.prototype.getFrameHeight = function () {
                return this.frameHeight;
            };

            Sequence.prototype.reset = function () {
                this._ticks = 0;
                this._frameIndex = 0;
                this._xPosition = 0;
                this._yPosition = 0;
                this._flipX = false;
                this._elapsed = false;

                this._frameAdjust();
            };

            Sequence.prototype.setImage = function (image) {
                this._image = image;
            };

            Sequence.prototype.update = function () {
                if (this._frameTick !== 0) {
                    ++this._ticks;
                    if (this._ticks >= this._frameTick) {
                        return this.incrementFrame();
                    } else {
                        return WarNew.SequenceUpdateResult.Default;
                    }
                }
            };

            Sequence.prototype.incrementFrame = function () {
                this._ticks = 0;

                var ret = WarNew.SequenceUpdateResult.FrameIncremented;

                ++this._frameIndex;
                if (this._frameIndex >= this._frames.length) {
                    this._frameIndex = 0;
                    this._elapsed = true;
                    ret = WarNew.SequenceUpdateResult.SequenceElapsed;
                }

                this._frameAdjust();

                return ret;
            };

            Sequence.prototype.setDirection = function (direction) {
                if (this._type === WarNew.SequenceType.Directional) {
                    if (!direction)
                        direction = WarNew.Direction.Down;

                    this._xPosition = Sequence._dirToFrameX[direction] * this.frameWidth;
                    this._flipX = ((direction & WarNew.Direction.Left) !== 0);
                }
            };

            Sequence.prototype.drawAtCenter = function (ctx, x, y) {
                this._draw(ctx, x, y, true);
            };

            Sequence.prototype.drawAtCorner = function (ctx, x, y) {
                this._draw(ctx, x, y, false);
            };

            Sequence.prototype._frameAdjust = function () {
                if (this._type === WarNew.SequenceType.Directional) {
                    this._yPosition = this._frames[this._frameIndex] * this.frameHeight;
                } else if (this._type === WarNew.SequenceType.Vertical) {
                    this._yPosition = this._frames[this._frameIndex] * this.frameHeight;
                } else {
                    this._yPosition = Math.floor(this._frameIndex * 0.2);
                    this._xPosition = this._frameIndex % 5;
                }
            };

            Sequence.prototype._draw = function (ctx, x, y, atCenter) {
                if (!this._image)
                    return;

                x = (x + 0.5) << 0;
                y = (y + 0.5) << 0;

                if (this._flipX) {
                    ctx.scale(-1, 1);
                    x = -x;
                }

                var fw = this.frameWidth;
                var fh = this.frameHeight;
                if (atCenter) {
                    x -= (fw >> 1);
                    y -= (fh >> 1);
                }

                ctx.drawImage(this._image, this._xPosition, this._yPosition, fw, fh, x, y, fw, fh);

                if (this._flipX)
                    ctx.scale(-1, 1);
            };
            Sequence._dirToFrameX = [0, 2, 0, 1, 2, 0, 1, 0, 4, 3, 0, 0, 3, 0, 0, 0];
            return Sequence;
        })();
        WarNew.Sequence = Sequence;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Team = (function () {
            function Team() {
                this._players = [];
            }
            Team.prototype.id = function () {
                return this._id;
            };
            Team.prototype.isNeutral = function () {
                return this._id === 0;
            };
            Team.prototype.name = function () {
                return this._name;
            };
            return Team;
        })();
        WarNew.Team = Team;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Terrain = (function () {
            function Terrain() {
            }
            Terrain.prototype.getMesh = function () {
                return this._mesh.getMesh();
            };

            Terrain.prototype.getTerrainType = function () {
                return this._terrainType;
            };
            Terrain.prototype.getTileCount = function () {
                return this._tilesWide * this._tilesDeep;
            };
            Terrain.prototype.getTilesWide = function () {
                return this._tilesWide;
            };
            Terrain.prototype.getTilesDeep = function () {
                return this._tilesDeep;
            };
            Terrain.prototype.getUnitsWide = function () {
                return this._unitsWide;
            };
            Terrain.prototype.getUnitsDeep = function () {
                return this._unitsDeep;
            };

            Terrain.prototype.dispose = function () {
                var tiles = this._tiles;
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                    tiles[i].dispose();
                }
                this._tiles = null;

                this._mesh.dispose();
            };

            Terrain.prototype.init = function (raw) {
                var terrainType = this._terrainType = raw ? raw.type : "forest";
                var tilesWide = this._tilesWide = raw ? raw.width : 32;
                var tilesDeep = this._tilesDeep = raw ? raw.height : 32;

                this._unitsWide = tilesWide * WarNew.TILE_SIZE;
                this._unitsDeep = tilesDeep * WarNew.TILE_SIZE;

                this._mesh = new WarNew.TerrainMesh(tilesWide, tilesDeep);

                var id = -1;
                var tiles = this._tiles = [];
                for (var y = 0; y < tilesDeep; ++y) {
                    for (var x = 0; x < tilesWide; ++x) {
                        var tile = new WarNew.Tile(this, ++id, x, y);
                        tiles.push(tile);
                    }
                }

                var rawTiles = raw ? raw.tiles : [];
                var tileID = 0;
                for (var y = 0; y < tilesDeep; ++y) {
                    var northValid = (y !== 0);
                    var southValid = (y !== tilesDeep - 1);

                    for (var x = 0; x < tilesWide; ++x) {
                        var westValid = (x !== 0);
                        var eastValid = (x !== tilesWide - 1);

                        var nbrs = [];
                        if (westValid)
                            nbrs.push(tiles[(x - 1) + tilesWide * y]);
                        if (northValid && westValid)
                            nbrs.push(tiles[(x - 1) + tilesWide * (y - 1)]);
                        if (northValid)
                            nbrs.push(tiles[x + tilesWide * (y - 1)]);
                        if (northValid && eastValid)
                            nbrs.push(tiles[(x + 1) + tilesWide * (y - 1)]);
                        if (eastValid)
                            nbrs.push(tiles[(x + 1) + tilesWide * y]);
                        if (southValid && eastValid)
                            nbrs.push(tiles[(x + 1) + tilesWide * (y + 1)]);
                        if (southValid)
                            nbrs.push(tiles[x + tilesWide * (y + 1)]);
                        if (southValid && westValid)
                            nbrs.push(tiles[(x - 1) + tilesWide * (y + 1)]);

                        tiles[tileID].init(nbrs, rawTiles[tileID]);

                        ++tileID;
                    }
                }
            };

            Terrain.prototype.onTileTypeSet = function (tile) {
                this._mesh.updateTile(tile);
            };

            Terrain.prototype.getTileById = function (id) {
                return this._tiles[id] || null;
            };

            Terrain.prototype.getTileAtPoint = function (worldPoint, clamp) {
                return this.getTileAtIndex(Math.floor(worldPoint.x * WarNew.TILE_INV_SIZE), Math.floor(worldPoint.y * WarNew.TILE_INV_SIZE), clamp);
            };

            Terrain.prototype.getTileAtIndex = function (ix, iy, clamp) {
                var tw = this._tilesWide;
                var td = this._tilesDeep;
                if (clamp) {
                    ix = Engine.MathUtil.clamp(ix, 0, tw - 1);
                    iy = Engine.MathUtil.clamp(iy, 0, td - 1);
                } else if (ix < 0 || iy < 0 || ix >= tw || iy >= td) {
                    return null;
                }
                return this._tiles[ix + tw * iy];
            };

            Terrain.prototype.getTilesWithinIndex = function (tileX, tileY, tilesWide, tilesHigh) {
                var tw = this._tilesWide;
                var td = this._tilesDeep;

                var ret = [];
                var tiles = this._tiles;
                var sx = Engine.MathUtil.clamp(tileX, 0, tw - 1);
                var sy = Engine.MathUtil.clamp(tileY, 0, td - 1);
                var ex = Engine.MathUtil.clamp(tileX + tilesWide, 0, tw);
                var ey = Engine.MathUtil.clamp(tileY + tilesHigh, 0, td);
                for (var y = sy; y < ey; ++y) {
                    for (var x = sx; x < ex; ++x)
                        ret.push(tiles[x + tw * y]);
                }
                return ret;
            };

            Terrain.prototype.draw = function (ctx, bounds, drawGrid, drawTileNumbers, drawPath) {
                var left = Math.max(bounds.x, 0);
                var top = Math.max(bounds.y, 0);
                var right = Math.min(left + bounds.width, this._unitsWide);
                var bottom = Math.min(top + bounds.height, this._unitsDeep);

                var tilesWide = this._tilesWide;
                var tilesDeep = this._tilesDeep;

                var sx = Math.max(Math.floor(left * WarNew.TILE_INV_SIZE), 0);
                var sy = Math.max(Math.floor(top * WarNew.TILE_INV_SIZE), 0);
                var ex = Math.min(Math.floor(right * WarNew.TILE_INV_SIZE), tilesWide - 1);
                var ey = Math.min(Math.floor(bottom * WarNew.TILE_INV_SIZE), tilesDeep - 1);

                var tilesheet = Engine.AssetManager.getImage("terrain");

                var tiles = this._tiles;
                for (var y = sy; y <= ey; ++y) {
                    for (var x = sx; x <= ex; ++x) {
                        var tile = tiles[x + tilesWide * y];
                        var tilePos = tile.topLeft;
                        ctx.drawImage(tilesheet, tile._atlasX, tile._atlasY, WarNew.TILE_SIZE, WarNew.TILE_SIZE, tilePos.x, tilePos.y, WarNew.TILE_SIZE, WarNew.TILE_SIZE);
                    }
                }

                if (drawTileNumbers) {
                    ctx.save();
                     {
                        ctx.globalAlpha = 0.3;
                        ctx.fillStyle = "#fff";
                        ctx.font = "normal 10px arial";
                        for (var y = sy; y <= ey; ++y) {
                            for (var x = sx; x <= ex; ++x) {
                                var tile = tiles[x + tilesWide * y];
                                var tilePos = tile.topLeft;
                                ctx.fillText("" + x + "," + y, tilePos.x, tilePos.y + 10);
                            }
                        }
                    }
                    ctx.restore();
                }

                if (drawGrid) {
                    ctx.save();
                     {
                        ctx.globalAlpha = 0.3;
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#000";
                        ctx.beginPath();
                        var py = 0.5 + WarNew.TILE_SIZE + sy * WarNew.TILE_SIZE;
                        for (var y = sy; y < ey; ++y) {
                            ctx.moveTo(left, py);
                            ctx.lineTo(right, py);
                            py += WarNew.TILE_SIZE;
                        }

                        var px = 0.5 + WarNew.TILE_SIZE + sx * WarNew.TILE_SIZE;
                        for (var x = sx; x < ex; ++x) {
                            ctx.moveTo(px, top);
                            ctx.lineTo(px, bottom);
                            px += WarNew.TILE_SIZE;
                        }
                        ctx.stroke();
                    }
                    ctx.restore();
                }
            };
            return Terrain;
        })();
        WarNew.Terrain = Terrain;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var TerrainMesh = (function () {
            function TerrainMesh(tilesWide, tilesDeep) {
                var tilesWide = this._tilesWide = tilesWide;
                var tilesDeep = this._tilesDeep = tilesDeep;
                var vertexCount = tilesWide * tilesDeep * 6;

                var geom = this._geometry = new THREE.BufferGeometry();
                geom.attributes = {
                    index: {
                        itemSize: 1,
                        array: new Uint16Array(vertexCount)
                    },
                    uv: {
                        itemSize: 2,
                        array: new Float32Array(vertexCount * 2),
                        dynamic: true
                    },
                    position: {
                        itemSize: 3,
                        array: new Float32Array(vertexCount * 3),
                        dynamic: true
                    }
                };

                var chunkSize = Math.floor(65536 / 3) * 3;

                var a = -1, i = -1, p = -1;

                var ts = WarNew.TILE_SIZE;
                var indices = geom.attributes.index.array;
                var positions = geom.attributes.position.array;

                for (var z = 0; z < tilesDeep; ++z) {
                    for (var x = 0; x < tilesWide; ++x) {
                         {
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;

                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                            indices[++i] = i % chunkSize;
                        }

                         {
                            var x0 = ts * x;
                            var x1 = x0 + ts;
                            var z0 = ts * z;
                            var z1 = z0 + ts;

                            positions[++p] = x1;
                            positions[++p] = 0;
                            positions[++p] = z1;

                            positions[++p] = x1;
                            positions[++p] = 0;
                            positions[++p] = z0;

                            positions[++p] = x0;
                            positions[++p] = 0;
                            positions[++p] = z0;

                            positions[++p] = x0;
                            positions[++p] = 0;
                            positions[++p] = z0;

                            positions[++p] = x0;
                            positions[++p] = 0;
                            positions[++p] = z1;

                            positions[++p] = x1;
                            positions[++p] = 0;
                            positions[++p] = z1;
                        }
                    }
                }

                var offets = geom.offsets = [];

                var offsetCount = Math.ceil(indices.length / chunkSize);
                for (var a = 0; a < offsetCount; ++a) {
                    var off = a * chunkSize;
                    offets.push({
                        start: off,
                        index: off,
                        count: Math.min(indices.length - off, chunkSize)
                    });
                }

                geom.computeBoundingSphere();

                var shader = Engine.AssetManager.getShader("terrain");
                var texture = new THREE.Texture(Engine.AssetManager.getImage("forest"));
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.needsUpdate = true;

                var material = new THREE.ShaderMaterial({
                    uniforms: {
                        tAtlas: { type: "t", value: texture },
                        tileSize: { type: "f", value: WarNew.TILE_SIZE },
                        invTileSize: { type: "f", value: WarNew.TILE_INV_SIZE }
                    },
                    vertexShader: shader.vertexShader,
                    fragmentShader: shader.fragmentShader
                });

                this._mesh = new THREE.Mesh(geom, material);
            }
            TerrainMesh.prototype.getMesh = function () {
                return this._mesh;
            };

            TerrainMesh.prototype.dispose = function () {
                this._geometry.dispose();
                this._mesh = null;
            };

            TerrainMesh.prototype.updateTile = function (tile) {
                var tileID = tile.getID();

                var geom = this._geometry;

                 {
                    var atw = WarNew.TILE_ATLAS_TILES_WIDE;
                    var ath = WarNew.TILE_ATLAS_TILES_HIGH;

                    var aIndex = tile._atlasIndex;
                    var ax = (aIndex % atw);
                    var ay = Math.floor(aIndex / atw);

                    var uvX = 1 / atw;
                    var uvY = 1 / ath;

                    var u0 = ax * uvX;
                    var u1 = u0 + uvX;

                    var v0 = 1 - uvY * ay;
                    var v1 = v0 - uvY;

                    var uvs = geom.attributes["uv"].array;
                    var u = 12 * tileID - 1;

                    uvs[++u] = u1;
                    uvs[++u] = v1;

                    uvs[++u] = u1;
                    uvs[++u] = v0;

                    uvs[++u] = u0;
                    uvs[++u] = v0;

                    uvs[++u] = u0;
                    uvs[++u] = v0;

                    uvs[++u] = u0;
                    uvs[++u] = v1;

                    uvs[++u] = u1;
                    uvs[++u] = v1;
                }

                 {
                    var h1 = tile.getData().layer * WarNew.TERRAIN_HEIGHT_SCALE;
                    var h0 = h1 - WarNew.TERRAIN_HEIGHT_SCALE;

                    var positions = geom.attributes["position"].array;
                    var p = 18 * tileID + 1;

                    var cf = tile.getCornerFlags();

                    positions[p] = ((cf & 0x8) !== 0) ? h1 : h0;
                    p += 3;

                    positions[p] = ((cf & 0x2) !== 0) ? h1 : h0;
                    p += 3;

                    positions[p] = ((cf & 0x1) !== 0) ? h1 : h0;
                    p += 3;

                    positions[p] = ((cf & 0x1) !== 0) ? h1 : h0;
                    p += 3;

                    positions[p] = ((cf & 0x4) !== 0) ? h1 : h0;
                    p += 3;

                    positions[p] = ((cf & 0x8) !== 0) ? h1 : h0;
                }

                (geom.attributes["uv"]).needsUpdate = true;
                (geom.attributes["position"]).needsUpdate = true;
            };
            return TerrainMesh;
        })();
        WarNew.TerrainMesh = TerrainMesh;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Tile = (function () {
            function Tile(terrain, id, x, y) {
                this._terrain = terrain;
                this._id = id;
                this.x = x;
                this.y = y;
                this.topLeft = new Engine.Vec2(x * WarNew.TILE_SIZE, y * WarNew.TILE_SIZE);
                this.center = this.topLeft.clone().add(WarNew.TILE_SIZE >> 1, WarNew.TILE_SIZE >> 1);

                this._occupiers = [];

                this._specialFlags = [];
            }
            Tile.prototype.__resetPath = function (pathID) {
                this.__pathID = pathID;
                this.__pathG = 0;
                this.__pathH = 0;
                this.__pathF = 0;
                this.__pathOpen = false;
                this.__pathClosed = false;
                this.__pathParent = null;
            };

            Tile.prototype.getID = function () {
                return this._id;
            };

            Tile.prototype.getType = function () {
                return this._type;
            };
            Tile.prototype.getData = function () {
                return this._data;
            };
            Tile.prototype.getCornerFlags = function () {
                return this._cornerFlags;
            };

            Tile.prototype.dispose = function () {
                this._terrain = null;
                this._occupiers = null;
                this._data = null;
            };

            Tile.prototype.init = function (neighbors, raw) {
                this.neighbors = neighbors;

                if (raw) {
                    var tileType = 0xf & (raw >> 0);
                    var cornerFlags = 0xf & (raw >> 4);
                    var variant = 0xf & (raw >> 8);
                    this.setTileType(tileType, cornerFlags, variant);
                } else {
                    this.setTileType(WarNew.TileType.LightGrass, 15);
                }
            };

            Tile.prototype.canOccupy = function (ent, ret) {
                if (!ent)
                    return false;

                var eflags = ent.getOccupyFlags();

                if ((eflags & this._occupyAllowed) !== eflags) {
                    if (ret && ret.message)
                        ret.message = "Cannot place there.";
                    return false;
                }

                var valid = true;
                var occupiers = this._occupiers;
                for (var i = occupiers.length - 1; i != -1; --i) {
                    var occ = occupiers[i];

                    if (ent === occ)
                        continue;

                    if (ret && ret.ignoreEnt && occ === ret.ignoreEnt)
                        continue;

                    if (ret && ret.ignorePlayerUnits && occ.getOwner() == ret.ignorePlayerUnits && occ.isUnit())
                        continue;

                    if ((eflags & occ.getOccupyFlags()) !== 0) {
                        valid = false;
                        if (ret) {
                            if (ret.message)
                                ret.message = "Invalid placement.";
                            if (ret.blockingEntities && ret.blockingEntities.indexOf(occ) === -1)
                                ret.blockingEntities.push(occ);
                        }
                    }
                }
                return valid;
            };

            Tile.prototype.getPathHeuristic = function (type, weight) {
                var x = this.x;
                var y = this.y;
                if (type === WarNew.PathType.ToTarget) {
                    return function (fromTile) {
                        return weight * Math.max(Math.abs(x - fromTile.x), Math.abs(y - fromTile.y));
                    };
                } else if (type === WarNew.PathType.AvoidTarget) {
                    var LARGE_NUMBER = (Engine.MAX_INT >> 1);
                    return function (tile) {
                        return LARGE_NUMBER - weight * Math.max(Math.abs(x - tile.x), Math.abs(y - tile.y));
                    };
                }

                return null;
            };

            Tile.prototype.removeEntity = function (entity) {
                var index = this._occupiers.indexOf(entity);
                if (index !== -1) {
                    this._occupiers.splice(index, 1);
                }
            };

            Tile.prototype.addSpecialFlag = function (flag) {
                var sf = this._specialFlags[flag];
                this._specialFlags[flag] = (sf ? sf + 1 : 1);
            };
            Tile.prototype.removeSpecialFlag = function (flag) {
                var sf = this._specialFlags[flag];
                this._specialFlags[flag] = (sf ? sf - 1 : 0);
            };
            Tile.prototype.hasSpecialFlag = function (flag) {
                return this._specialFlags[flag] || false;
            };

            Tile.prototype.setTileType = function (tileType, cornerFlags, variant) {
                var terrainType = this._terrain.getTerrainType();

                var allData = WarNew.Data.AllTileData[terrainType];
                if (!allData)
                    return;

                var data = allData[tileType];
                if (!data)
                    return;

                var variants = data.indices[cornerFlags];
                if (!variants || variants.length === 0)
                    return;

                if (variant !== undefined)
                    variant = Engine.MathUtil.clamp(variant, 0, variants.length - 1);
else
                    variant = Engine.Random.integer(0, variants.length);

                this._data = data;
                this._atlasIndex = variants[variant];
                this._type = tileType;
                this._cornerFlags = cornerFlags;
                this._variant = variant;
                this._atlasX = (this._atlasIndex % WarNew.TILE_ATLAS_TILES_WIDE) * WarNew.TILE_ATLAS_TILE_SIZE;
                this._atlasY = Math.floor(this._atlasIndex / WarNew.TILE_ATLAS_TILES_WIDE) * WarNew.TILE_ATLAS_TILE_SIZE;

                var occupyAllowed = 0;
                switch (tileType) {
                    case WarNew.TileType.LightWater:
                    case WarNew.TileType.DarkWater:
                        occupyAllowed = WarNew.Occupy.Sea | WarNew.Occupy.Air;
                        break;
                    case WarNew.TileType.LightDirt:
                        occupyAllowed = WarNew.Occupy.Air | (cornerFlags === 15 ? WarNew.Occupy.LandUnit : 0);
                        break;
                    case WarNew.TileType.DarkDirt:
                        occupyAllowed = WarNew.Occupy.LandUnit | WarNew.Occupy.Air;
                        break;
                    case WarNew.TileType.LightGrass:
                        occupyAllowed = WarNew.Occupy.LandUnit | WarNew.Occupy.Air | (cornerFlags === 15 ? WarNew.Occupy.LandStructure : 0);
                        break;
                    case WarNew.TileType.DarkGrass:
                        occupyAllowed = WarNew.Occupy.LandUnit | WarNew.Occupy.Air | WarNew.Occupy.LandStructure;
                        break;
                    case WarNew.TileType.Tree:
                    case WarNew.TileType.Rock:
                    case WarNew.TileType.HumanWall:
                    case WarNew.TileType.OrcWall:
                    case WarNew.TileType.HumanWallDamaged:
                    case WarNew.TileType.OrcWallDamaged:
                        occupyAllowed = WarNew.Occupy.Air;
                        break;
                    case WarNew.TileType.WallDestroyed:
                        occupyAllowed = WarNew.Occupy.LandUnit | WarNew.Occupy.Air;
                        break;
                }
                this._occupyAllowed = occupyAllowed;

                this._terrain.onTileTypeSet(this);
            };

            Tile.prototype._tryOccupy = function (entity) {
                if (entity && !this.canOccupy(entity)) {
                    return false;
                }

                this.removeEntity(entity);
                this._occupiers.push(entity);
                return true;
            };
            return Tile;
        })();
        WarNew.Tile = Tile;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var TileRegion = (function () {
            function TileRegion(x, y, width, height) {
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            TileRegion.prototype.getPathHeuristic = function (type, weight) {
                var x = this.x;
                var y = this.y;
                var width = this.width;
                var height = this.height;

                if (type === WarNew.PathType.ToArea) {
                    return function (tile) {
                        return weight * WarNew.Pathfinder.distance(tile.x, tile.y, 1, 1, x, y, width, height);
                    };
                } else if (type === WarNew.PathType.AvoidArea) {
                    var LARGE_NUMBER = (Engine.MAX_INT >> 1);
                    return function (tile) {
                        return LARGE_NUMBER - weight * WarNew.Pathfinder.distance(tile.x, tile.y, 1, 1, x, y, width, height);
                    };
                } else if (type === WarNew.PathType.ClearArea) {
                    var x0 = x - 1;
                    var y0 = y - 1;
                    var x1 = x + width;
                    var y1 = y + height;
                    return function (tile) {
                        var x = tile.x, y = tile.y;
                        if (x <= x0 || x > x1 || y <= y0 || y > y1)
                            return 0;
else
                            return weight * Math.min(Math.min(x - x0, x1 - x), Math.min(y - y0, y1 - y));
                    };
                }

                return null;
            };
            return TileRegion;
        })();
        WarNew.TileRegion = TileRegion;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var World = (function () {
            function World() {
            }
            World.prototype.getTerrain = function () {
                return this._terrain;
            };
            World.prototype.getQuadtree = function () {
                return this._quadtree;
            };

            World.prototype.getEntities = function () {
                return this._entities;
            };

            World.prototype.dispose = function () {
                this._terrain.dispose();
                this._quadtree.dispose();

                var players = this._players;
                for (var i = 0, ii = players.length; i < ii; ++i) {
                    players[i].dispose();
                }
            };

            World.prototype.init = function (raw) {
                var terrain = this._terrain = new WarNew.Terrain();
                terrain.init(raw ? raw.terrain : undefined);

                this._quadtree = new WarNew.WorldQuadtree(new Engine.Rect(0, 0, terrain.getUnitsWide(), terrain.getUnitsDeep()), 4, 4);

                var players = this._players = [];
                var rawPlayers = raw ? raw.players : [];
                for (var p = 0; p < WarNew.PLAYERS_MAX; ++p) {
                    var player = new WarNew.Player(p, this);
                    player.init(rawPlayers[p]);
                    players.push(player);
                }

                this._prevEntityID = terrain.getTileCount();

                this._entities = [];
                var entitiesById = this._entitiesById = [];
                this._entitiesByType = [];

                var ents = [];
                var rawEnts = [];

                var rawEntities = raw ? raw.entities : [];
                for (var i = 0, ii = rawEntities.length; i < ii; ++i) {
                    var rawEnt = rawEntities[i];

                    var raw_0 = rawEnt[0] || 0;
                    var playerID = 0xf & (raw_0 >> 0);
                    var entType = 0xff & (raw_0 >> 4);
                    var entID = 0x7ffff & (raw_0 >> 12);

                    var entData = WarNew.Data.AllEntityData[entType];
                    var entOwner = this.getPlayerById(playerID);
                    if (!entData || !entOwner || entitiesById[entID]) {
                        continue;
                    }

                    this._prevEntityID = Math.max(this._prevEntityID, entID);

                    ents[entID] = new WarNew.Entity(entID, this, entType, entData, entOwner);
                    rawEnts[entID] = rawEnt;
                }

                for (var id in ents) {
                    var ent = ents[id];

                    ent.init(rawEnts[id]);

                    this._addEntity(ent);
                }
            };

            World.prototype.getPlayerById = function (pid) {
                return this._players[pid] || null;
            };

            World.prototype.getEntityById = function (id) {
                return this._entitiesById[id] || null;
            };

            World.prototype.getEntitiesAtPoint = function (p) {
                return this._quadtree.getItemsAtPoint(p);
            };

            World.prototype.getEntitiesInRect = function (rect) {
                return this._quadtree.getItemsInRect(rect);
            };

            World.prototype.step = function () {
                var ents = this._entities;
                for (var i = 0, ii = ents.length; i < ii; ++i)
                    ents[i].update();
            };

            World.prototype._encodeEntity = function (ent) {
                var raw_0 = 0;
                raw_0 |= (ent.getOwner().getID() << 0);
                raw_0 |= (ent.getType() << 4);
                raw_0 |= (ent.getID() << 12);

                return [raw_0];
            };

            World.prototype._addEntity = function (ent) {
                this._entities.push(ent);
                this._entitiesById[ent.getID()] = ent;

                var type = ent.getType();
                var typeList = this._entitiesByType[type];
                if (!typeList) {
                    typeList = this._entitiesByType[type] = [];
                }
                typeList.push(ent);

                this._quadtree.insert(ent);
            };

            World.prototype._removeEntity = function (a) {
                var ent, index;
                if (a instanceof WarNew.Entity) {
                    ent = a;
                    index = this._entities.indexOf(ent);
                } else {
                    index = a;
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
            };
            return World;
        })();
        WarNew.World = World;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (WorldEvent) {
            var _names = [];
            var Event = (function () {
                function Event(name) {
                    this.name = name;
                    _names.push(name);
                }
                return Event;
            })();
            WorldEvent.Event = Event;

            var _handlers = {};
            function _add(evt, delegate) {
                var h = _handlers[evt.name];
                if (!h)
                    h = _handlers[evt.name] = [];
                h.push(delegate);
            }
            function _remove(evt, delegate) {
                var h = _handlers[evt.name];
                if (!h)
                    return;
                var index = h.indexOf(delegate);
                if (index !== -1)
                    h.splice(index, 1);
            }
            function _trigger(evt) {
                var argArray = [];
                for (var _i = 0; _i < (arguments.length - 1); _i++) {
                    argArray[_i] = arguments[_i + 1];
                }
                var h = _handlers[evt.name];
                if (!h)
                    return;
                for (var i = 0, ii = h.length; i < ii; ++i)
                    h[i].apply(null, argArray);
            }

            var EntityEvent = (function (_super) {
                __extends(EntityEvent, _super);
                function EntityEvent(name) {
                    _super.call(this, "entity_" + name);
                }
                EntityEvent.prototype.subscribe = function (f) {
                    _add(this, f);
                };
                EntityEvent.prototype.unsubscribe = function (f) {
                    _remove(this, f);
                };
                EntityEvent.prototype.trigger = function (ent, oldVal, newVal) {
                    _trigger(this, ent, oldVal, newVal);
                };
                return EntityEvent;
            })(Event);
            WorldEvent.EntityEvent = EntityEvent;

            WorldEvent.Entity = {
                container: new EntityEvent("container"),
                health: new EntityEvent("health"),
                mana: new EntityEvent("mana"),
                spawnState: new EntityEvent("spawnState"),
                tile: new EntityEvent("tile")
            };
        })(WarNew.WorldEvent || (WarNew.WorldEvent = {}));
        var WorldEvent = WarNew.WorldEvent;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var QTBucket = (function () {
            function QTBucket(tree, parent, bounds, depth) {
                this._tree = tree;
                this._parent = parent;
                this._bounds = bounds;
                this._midX = bounds.x + bounds.width * 0.5;
                this._midY = bounds.y + bounds.height * 0.5;
                this._depth = depth;

                this._items = [];
                this._count = 0;

                this._topLeft = null;
                this._topRight = null;
                this._bottomLeft = null;
                this._bottomRight = null;
                this._isLeaf = true;
            }
            QTBucket.deepestBucket = function (root, item) {
                var rect = item.getQTRect();
                var b = root;
                while (b._isLeaf === false) {
                    var q = b.getRectQuadrants(rect);
                    if (q.length !== 1)
                        break;
                    b = q[0];
                }
                return b;
            };

            QTBucket.prototype.dispose = function () {
                this._tree = null;
                this._parent = null;
                this._bounds = null;
                this._items = null;
                if (!this._topLeft) {
                    this._topLeft.dispose();
                    this._topRight.dispose();
                    this._bottomLeft.dispose();
                    this._bottomRight.dispose();
                    this._topLeft = this._topRight = this._bottomLeft = this._bottomRight = null;
                }
            };

            QTBucket.prototype.draw = function (ctx) {
                if (this._isLeaf) {
                    var bounds = this._bounds;
                    ctx.strokeRect(bounds.x, bounds.y, bounds.width, bounds.height);
                } else {
                    this._topLeft.draw(ctx);
                    this._topRight.draw(ctx);
                    this._bottomLeft.draw(ctx);
                    this._bottomRight.draw(ctx);
                }
            };

            QTBucket.prototype.insert = function (item) {
                this._items.push(item);

                var c = this;
                do {
                    ++c._count;
                    c = c._parent;
                } while(c !== null);

                var tree = this._tree;
                if (this._isLeaf && this._items.length > tree.bucketCapacity && this._depth < tree.maxDepth) {
                    if (!this._topLeft) {
                        var b = this._bounds;
                        var nextDepth = this._depth + 1;

                        var mx = this._midX;
                        var my = this._midY;
                        var hw = b.width * 0.5;
                        var hh = b.height * 0.5;

                        this._topLeft = new QTBucket(tree, this, new Engine.Rect(b.x, b.y, hw, hh), nextDepth);
                        this._topRight = new QTBucket(tree, this, new Engine.Rect(mx, b.y, hw, hh), nextDepth);
                        this._bottomLeft = new QTBucket(tree, this, new Engine.Rect(b.x, my, hw, hh), nextDepth);
                        this._bottomRight = new QTBucket(tree, this, new Engine.Rect(mx, my, hw, hh), nextDepth);
                    }
                    this._isLeaf = false;

                    var items = this._items;
                    for (var i = items.length - 1; i !== -1; --i) {
                        tree.update(items[i]);
                    }
                }
            };

            QTBucket.prototype.remove = function (item) {
                var index = this._items.indexOf(item);
                if (index === -1)
                    return;

                this._items.splice(index, 1);

                var c = this;
                var mergeNode = null;
                do {
                    if (--c._count === 0)
                        mergeNode = c;
                    c = c._parent;
                } while(c !== null);

                if (mergeNode)
                    mergeNode._isLeaf = true;
            };

            QTBucket.prototype.getItemsAtPoint = function (point, ret) {
                if (this._count === 0) {
                    return;
                }

                var px = point.x;
                var py = point.y;
                var items = this._items;
                for (var i = 0, ii = items.length; i < ii; ++i) {
                    var item = items[i];
                    if (item.getQTRect().containsPoint(px, py)) {
                        ret.push(item);
                    }
                }

                if (!this._isLeaf) {
                    this.getPointQuadrant(point).getItemsAtPoint(point, ret);
                }
            };

            QTBucket.prototype.getItemsInRect = function (rect, ret) {
                if (this._count === 0) {
                    return;
                }

                var items = this._items;
                for (var i = 0, ii = items.length; i < ii; ++i) {
                    var item = items[i];
                    if (item.getQTRect().intersectsRect(rect)) {
                        ret.push(item);
                    }
                }

                if (!this._isLeaf) {
                    var q = this.getRectQuadrants(rect);
                    for (var i = 0, ii = q.length; i < ii; ++i)
                        q[i].getItemsInRect(rect, ret);
                }
            };

            QTBucket.prototype.getPointQuadrant = function (point) {
                if (point.y < this._midY) {
                    return (point.x < this._midX ? this._topLeft : this._topRight);
                } else {
                    return (point.x < this._midX ? this._bottomLeft : this._bottomRight);
                }
            };

            QTBucket.prototype.getRectQuadrants = function (rect) {
                var midX = this._midX;
                var midY = this._midY;
                var rx = rect.x;
                var ry = rect.y;
                if (ry >= midY) {
                    if (rx >= midX)
                        return [this._bottomRight];
else if (rx + rect.width < midX)
                        return [this._bottomLeft];
else
                        return [this._bottomRight, this._bottomLeft];
                } else if (ry + rect.height < midY) {
                    if (rx >= midX)
                        return [this._topRight];
else if (rx + rect.width < midX)
                        return [this._topLeft];
else
                        return [this._topRight, this._topLeft];
                } else {
                    if (rx >= midX)
                        return [this._topRight, this._bottomRight];
else if (rx + rect.width < midX)
                        return [this._topLeft, this._bottomLeft];
else
                        return [this._topRight, this._bottomRight, this._topLeft, this._bottomLeft];
                }
            };
            return QTBucket;
        })();
        WarNew.QTBucket = QTBucket;

        var WorldQuadtree = (function () {
            function WorldQuadtree(bounds, bucketCap, maxDepth) {
                this.bucketCapacity = bucketCap;
                this.maxDepth = maxDepth;

                this._map = [];
                this._root = new QTBucket(this, null, bounds, 0);
            }
            WorldQuadtree.prototype.dispose = function () {
                this._root.dispose();
                this._map = null;
            };

            WorldQuadtree.prototype.draw = function (ctx) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "#4f4";
                ctx.beginPath();
                this._root.draw(ctx);
                ctx.stroke();
            };

            WorldQuadtree.prototype.insert = function (item) {
                var id = item.getID();
                if (this._map[id] !== undefined) {
                    return;
                }

                var bucket = QTBucket.deepestBucket(this._root, item);

                this._map[id] = [item, bucket];
                bucket.insert(item);
            };

            WorldQuadtree.prototype.update = function (item) {
                var arr = this._map[item.getID()];
                if (arr === undefined) {
                    return;
                }

                var oldBucket = arr[1];
                var newBucket = QTBucket.deepestBucket(this._root, item);
                if (oldBucket !== newBucket) {
                    oldBucket.remove(item);

                    arr[1] = newBucket;
                    newBucket.insert(item);
                }
            };

            WorldQuadtree.prototype.remove = function (item) {
                var id = item.getID();
                var arr = this._map[id];
                if (arr === undefined) {
                    return;
                }

                var bucket = arr[1];

                bucket.remove(item);
                delete this._map[id];
            };

            WorldQuadtree.prototype.getItemsAtPoint = function (p) {
                var items = [];
                this._root.getItemsAtPoint(p, items);
                return items;
            };

            WorldQuadtree.prototype.getItemsInRect = function (rect) {
                var items = [];
                this._root.getItemsInRect(rect, items);
                return items;
            };
            return WorldQuadtree;
        })();
        WarNew.WorldQuadtree = WorldQuadtree;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (Data) {
            Data.AllEntityData = [];

            var defaultEntity = {
                abilities: [],
                armorBase: 0,
                buildTime: 60,
                buttonX: 0,
                buttonY: 0,
                foodCost: 0,
                foodCreated: 0,
                goldCost: 0,
                healthMax: 60,
                hotkey: Engine.Key.None,
                iconId: "icon-default",
                lumberCost: 0,
                name: "Default Entity",
                oilCost: 0,
                occupyFlags: WarNew.Occupy.None | 0,
                page: WarNew.CommandPage.Default,
                pointValue: 0,
                priority: 0,
                selectable: true,
                sequences: {
                    type: WarNew.SequenceType.Vertical,
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
                hasWeapon: false,
                weaponBehavior: WarNew.WeaponBehavior.Instant,
                weaponDamageBase: 0,
                weaponDamageRandom: 0,
                weaponRange: 1,
                weaponStrikeFrame: 0,
                isStructure: false,
                tilesHigh: 1,
                tilesWide: 1,
                unitsTrained: [],
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

            var defaultStructure = $.extend(true, {}, defaultEntity, {
                armorBase: 20,
                iconId: "icon-default-structure",
                name: "Default Structure",
                occupyFlags: WarNew.Occupy.LandStructure,
                page: WarNew.CommandPage.BasicBuild,
                sequences: {
                    type: WarNew.SequenceType.Vertical,
                    imageID: "gold_mine",
                    frameWidth: 96,
                    frameHeight: 96,
                    idle: {
                        frames: [0],
                        frameTick: 0
                    }
                },
                sight: 3,
                isStructure: true,
                tilesHigh: 3,
                tilesWide: 3
            });

            var defaultUnit = $.extend(true, {}, defaultEntity, {
                foodCost: 1,
                iconId: "icon-default-unit",
                name: "Default Unit",
                occupyFlags: WarNew.Occupy.LandUnit,
                sequences: {
                    type: WarNew.SequenceType.Directional,
                    imageID: "footman",
                    frameWidth: 72,
                    frameHeight: 72,
                    idle: {
                        frames: [0],
                        frameTick: 0
                    }
                },
                sight: 4,
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

            Data.AllEntityData[WarNew.EntityType.Footman] = $.extend(true, {}, defaultUnit, {
                armorBase: 2,
                buildTime: 60,
                buttonX: 0,
                buttonY: 0,
                goldCost: 600,
                healthMax: 60,
                hotkey: Engine.Key.KEY_F,
                iconId: "icon-footman",
                name: "Footman",
                pointValue: 50,
                sequences: {
                    type: WarNew.SequenceType.Directional,
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
                hasWeapon: true,
                weaponBehavior: WarNew.WeaponBehavior.Instant,
                weaponDamageBase: 10,
                weaponDamageRandom: 6,
                weaponRange: 1,
                weaponStrikeFrame: 6,
                acquisitionRange: 4
            });

            Data.AllEntityData[WarNew.EntityType.Peasant] = $.extend(true, {}, defaultUnit, {
                armorBase: 0,
                buildTime: 45,
                buttonX: 0,
                buttonY: 0,
                goldCost: 400,
                healthMax: 30,
                hotkey: Engine.Key.KEY_P,
                iconId: "icon-peasant",
                name: "Peasant",
                pointValue: 30,
                sequences: {
                    type: WarNew.SequenceType.Directional,
                    imageID: "peasant",
                    frameWidth: 72,
                    frameHeight: 72,
                    idle: {
                        frames: [0],
                        frameTick: 0
                    },
                    attack: {
                        frames: [15, 16, 17, 18, 19],
                        frameTick: 5
                    },
                    die: {
                        frames: [20, 21, 22],
                        frameTick: 5
                    },
                    idle_gold: {
                        frames: [5],
                        frameTick: 5
                    },
                    idle_lumber: {
                        frames: [10],
                        frameTick: 5
                    },
                    move: {
                        frames: [0, 1, 2, 3, 4],
                        frameTick: 5
                    },
                    move_gold: {
                        frames: [5, 6, 7, 8, 9],
                        frameTick: 5
                    },
                    move_lumber: {
                        frames: [10, 11, 12, 13, 14],
                        frameTick: 5
                    }
                },
                sight: 4,
                tooltip: "Train |P|easant",
                tooltipExtended: "I am a peasant. Nurrrrr!",
                acquisitionRange: 4,
                builds: [
                    WarNew.EntityType.TownHall,
                    WarNew.EntityType.HumanBarracks,
                    WarNew.EntityType.Farm
                ],
                coward: true,
                harvestResources: WarNew.ResourceType.Gold | WarNew.ResourceType.Lumber
            });

            Data.AllEntityData[WarNew.EntityType.Knight] = $.extend(true, {}, defaultUnit, {
                armorBase: 4,
                buildTime: 90,
                buttonX: 0,
                buttonY: 1,
                goldCost: 800,
                healthMax: 90,
                hotkey: Engine.Key.KEY_K,
                iconId: "icon-knight",
                lumberCost: 100,
                name: "Knight",
                pointValue: 100,
                sequences: {
                    type: WarNew.SequenceType.Directional,
                    imageID: "knight",
                    frameWidth: 72,
                    frameHeight: 72,
                    idle: {
                        frames: [0],
                        frameTick: 0
                    },
                    attack: {
                        frames: [5, 6, 7, 8],
                        frameTick: 5
                    },
                    die: {
                        frames: [9, 10, 11, 12, 13],
                        frameTick: 5
                    },
                    move: {
                        frames: [0, 1, 2, 1, 0, 3, 4, 3],
                        frameTick: 5
                    }
                },
                tooltip: "Train |K|night",
                tooltipExtended: "I am a knight. Wahaha!",
                acquisitionRange: 4
            });

            Data.AllEntityData[WarNew.EntityType.TownHall] = $.extend(true, {}, defaultStructure, {
                buildTime: 255,
                buttonX: 2,
                buttonY: 0,
                foodCreated: 1,
                goldCost: 1200,
                healthMax: 1200,
                hotkey: Engine.Key.KEY_H,
                iconId: "icon-town-hall",
                lumberCost: 800,
                name: "Town Hall",
                pointValue: 200,
                sequences: {
                    type: WarNew.SequenceType.Vertical,
                    imageID: "town_hall",
                    frameWidth: 128,
                    frameHeight: 128,
                    idle: {
                        frames: [0],
                        frameTick: 0
                    },
                    construction: {
                        frames: [1],
                        frameTick: 0
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
                tilesHigh: 4,
                tilesWide: 4
            });

            Data.AllEntityData[WarNew.EntityType.Farm] = $.extend(true, {}, defaultStructure, {
                buildTime: 100,
                buttonX: 0,
                buttonY: 0,
                foodCreated: 4,
                goldCost: 500,
                healthMax: 400,
                hotkey: Engine.Key.KEY_F,
                iconId: "icon-farm",
                lumberCost: 250,
                name: "Farm",
                pointValue: 100,
                sequences: {
                    type: WarNew.SequenceType.Vertical,
                    imageID: "farm",
                    frameWidth: 64,
                    frameHeight: 64,
                    idle: {
                        frames: [0],
                        frameTick: 0
                    },
                    construction: {
                        frames: [1],
                        frameTick: 0
                    },
                    construction_site: {
                        imageID: "land_construction",
                        frames: [0, 1],
                        frameTick: 0
                    }
                },
                tooltip: "Build |F|arm",
                tooltipExtended: "I am a humunz farm.",
                tilesHigh: 2,
                tilesWide: 2
            });
        })(WarNew.Data || (WarNew.Data = {}));
        var Data = WarNew.Data;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (AllSpriteData) {
            var _sprites = {};

            function getSprite(spriteId, playerId) {
                var sprite = _sprites[spriteId];
                if (sprite) {
                    var image = WarNew.ImageCache.getImage(sprite.imageId, playerId);
                    if (image) {
                        sprite.image = image;
                        return sprite;
                    }
                }
                return null;
            }
            AllSpriteData.getSprite = getSprite;

            function _insert(imageId, spriteId, x, y, width, height) {
                _sprites[spriteId] = {
                    imageId: imageId,
                    image: null,
                    x: x,
                    y: y,
                    width: width,
                    height: height
                };
            }

            _insert("tiles", "icon-forest-" + WarNew.TileType.LightWater, 8 * 32, 20 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.DarkWater, 11 * 32, 20 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.LightDirt, 14 * 32, 20 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.DarkDirt, 9 * 32, 21 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.LightGrass, 4 * 32, 22 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.DarkGrass, 12 * 32, 22 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.Tree, 0, 7 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.Rock, 1 * 32, 11 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.HumanWall, 0, 1 * 32, 32, 32);
            _insert("tiles", "icon-forest-" + WarNew.TileType.OrcWall, 2 * 32, 2 * 32, 32, 32);

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

            _insert("icons", "icon-spell-exorcism", 0, 836, 46, 38);
            _insert("icons", "icon-spell-eye-of-kilrogg", 46, 836, 46, 38);
            _insert("icons", "icon-spell-bloodlust", 92, 836, 46, 38);

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

            _insert("icons", "icon-patrol-human", 138, 1330, 46, 38);
            _insert("icons", "icon-patrol-orc", 184, 1330, 46, 38);

            _insert("icons", "icon-hold-position-human", 0, 1368, 46, 38);
            _insert("icons", "icon-hold-position-orc", 46, 1368, 46, 38);
            _insert("icons", "icon-ground-attack-human", 92, 1368, 46, 38);
            _insert("icons", "icon-ground-attack-orc", 138, 1368, 46, 38);
            _insert("icons", "icon-patrol-naval-human", 184, 1368, 46, 38);

            _insert("icons", "icon-patrol-naval-orc", 184, 1406, 46, 38);

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

            _insert("ui", "cursor-green-crosshairs", 210, 120, 33, 33);
            _insert("ui", "cursor-yellow-crosshairs", 243, 120, 33, 33);
            _insert("ui", "cursor-red-crosshairs", 276, 120, 33, 33);

            _insert("ui", "cursor-hand", 309, 120, 29, 32);
            _insert("ui", "cursor-hand-invalid", 338, 120, 31, 32);
            _insert("ui", "cursor-magnifying-glass", 369, 120, 36, 35);
            _insert("ui", "cursor-select", 338, 102, 18, 18);
        })(WarNew.AllSpriteData || (WarNew.AllSpriteData = {}));
        var AllSpriteData = WarNew.AllSpriteData;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        (function (Data) {
            Data.AllTileData = {};

            Data.AllTileData["forest"] = [];
            Data.AllTileData["forest"][WarNew.TileType.LightWater] = {
                name: "Light Water",
                size: 1,
                layer: 0,
                typeBelow: WarNew.TileType.None,
                typeAbove: WarNew.TileType.LightDirt,
                indices: [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [328, 329, 330]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.DarkWater] = {
                name: "Dark Water",
                size: 2,
                layer: 1,
                typeBelow: WarNew.TileType.LightWater,
                typeAbove: WarNew.TileType.LightDirt,
                indices: [
                    [],
                    [300, 301],
                    [302, 303],
                    [304, 305, 306],
                    [307, 308],
                    [309, 310, 311],
                    [312, 313],
                    [314],
                    [315, 316],
                    [317, 318],
                    [319, 320, 321],
                    [322],
                    [323, 324, 325],
                    [326],
                    [327],
                    [331, 332, 333]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.LightDirt] = {
                name: "Light Dirt",
                size: 1,
                layer: 1,
                typeBelow: WarNew.TileType.LightWater,
                typeAbove: WarNew.TileType.LightGrass,
                indices: [
                    [337, 338, 339, 340, 341, 342, 343, 344],
                    [234, 235],
                    [232, 233],
                    [229, 230, 231],
                    [227, 228],
                    [224, 225, 226],
                    [223, 237],
                    [221, 222],
                    [219, 220],
                    [218, 236],
                    [215, 216, 217],
                    [213, 214],
                    [210, 211, 212],
                    [208, 209],
                    [206, 207],
                    [334, 335, 336]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.DarkDirt] = {
                name: "Dark Dirt",
                size: 2,
                layer: 2,
                typeBelow: WarNew.TileType.LightDirt,
                typeAbove: WarNew.TileType.LightGrass,
                indices: [
                    [348, 349, 350, 351, 352, 353, 354, 355],
                    [180],
                    [181, 182],
                    [183, 184, 185],
                    [186],
                    [188, 189, 190],
                    [191, 192],
                    [193],
                    [194],
                    [195, 196],
                    [197, 198, 199],
                    [200],
                    [201, 202, 203],
                    [204],
                    [205],
                    [345, 346, 347]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.LightGrass] = {
                name: "Light Grass",
                size: 1,
                layer: 2,
                typeBelow: WarNew.TileType.LightDirt,
                typeAbove: WarNew.TileType.None,
                indices: [
                    [358, 359, 360, 361, 362, 363],
                    [298, 299],
                    [296, 297],
                    [293, 294, 295],
                    [292],
                    [289, 290, 291],
                    [287, 288],
                    [285, 286],
                    [284],
                    [282, 283],
                    [279, 280, 281],
                    [277, 278],
                    [274, 275, 276],
                    [272, 273],
                    [270, 271],
                    [356, 357]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.DarkGrass] = {
                name: "Dark Grass",
                size: 2,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
                indices: [
                    [366, 367, 368, 369, 370, 371],
                    [238, 239],
                    [240, 241],
                    [242, 243, 244],
                    [245, 246],
                    [247, 248, 249],
                    [250, 251],
                    [252, 253],
                    [254, 255],
                    [256, 257],
                    [258, 259, 260],
                    [261, 262],
                    [263, 264, 265],
                    [266, 267],
                    [268, 269],
                    [364, 365]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.Tree] = {
                name: "Tree",
                size: 2,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
                indices: [
                    [],
                    [129, 110],
                    [102, 130],
                    [124, 131],
                    [107, 132],
                    [133, 109],
                    [139, 138],
                    [111],
                    [104, 136],
                    [140, 141],
                    [103, 135],
                    [112],
                    [106, 134],
                    [137],
                    [105],
                    [125, 127, 128]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.Rock] = {
                name: "Rock",
                size: 2,
                layer: 2,
                typeBelow: WarNew.TileType.LightDirt,
                typeAbove: WarNew.TileType.LightGrass,
                indices: [
                    [],
                    [150, 173],
                    [142, 167],
                    [164, 176],
                    [147, 171],
                    [149, 172],
                    [154, 175],
                    [151],
                    [144, 169],
                    [153, 174],
                    [143, 168],
                    [152],
                    [146, 170],
                    [148],
                    [145],
                    [165, 177, 178, 179]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.HumanWall] = {
                name: "Human Wall",
                size: 1,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
                indices: [
                    [16],
                    [25],
                    [20],
                    [30],
                    [18],
                    [27, 28],
                    [23],
                    [32],
                    [17],
                    [26],
                    [21, 22],
                    [31],
                    [19],
                    [29],
                    [24],
                    [33]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.OrcWall] = {
                name: "Orc Wall",
                size: 1,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
                indices: [
                    [34],
                    [43],
                    [38],
                    [48],
                    [36],
                    [45, 46],
                    [41],
                    [50],
                    [35],
                    [44],
                    [39, 40],
                    [49],
                    [37],
                    [47],
                    [42],
                    [51]
                ]
            };

            Data.AllTileData["forest"][WarNew.TileType.HumanWallDamaged] = {
                name: "Human Wall Damaged",
                size: 1,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
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
            };

            Data.AllTileData["forest"][WarNew.TileType.OrcWallDamaged] = {
                name: "Orc Wall Damaged",
                size: 1,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
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
            };

            Data.AllTileData["forest"][WarNew.TileType.WallDestroyed] = {
                name: "Wall Destroyed",
                size: 1,
                layer: 3,
                typeBelow: WarNew.TileType.LightGrass,
                typeAbove: WarNew.TileType.None,
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
            };
        })(WarNew.Data || (WarNew.Data = {}));
        var Data = WarNew.Data;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var MainMenu = (function (_super) {
            __extends(MainMenu, _super);
            function MainMenu() {
                _super.call(this, {
                    hasUI: true
                });
            }
            MainMenu.prototype.onUICreated = function (dom) {
                var self = this;

                dom.find(".toLiveGame").click(function () {
                    Engine.App.instance.setState("LiveGame");
                });

                dom.on("click", ".loadGame", function () {
                });

                dom.on("click", ".editor", function () {
                    Engine.App.instance.setState("Editor");
                });
            };

            MainMenu.prototype.begin = function (callback) {
                Engine.Cursor.clear();

                callback();
            };
            return MainMenu;
        })(Engine.AppState);
        WarNew.MainMenu = MainMenu;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Game = (function (_super) {
            __extends(Game, _super);
            function Game() {
                _super.call(this, {
                    initialState: "LiveGame",
                    states: [
                        "Editor",
                        "LiveGame",
                        "MainMenu"
                    ],
                    allowGamepad: false,
                    allowTouch: false,
                    cacheAssets: false,
                    disableContextMenu: true,
                    enable2dPhysics: false,
                    enable3d: true,
                    showStats: true,
                    customVendors: [
                        "compressor.js",
                        "underscore-min.js"
                    ],
                    statesDirectory: "script/state/"
                });
            }
            return Game;
        })(Engine.App);
        WarNew.Game = Game;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Editor = (function (_super) {
            __extends(Editor, _super);
            function Editor() {
                _super.call(this, {
                    hasUI: true
                });
            }
            Editor.prototype.onUICreated = function (dom) {
            };
            return Editor;
        })(Engine.AppState);
        WarNew.Editor = Editor;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        function _entitySortFunction(a, b) {
            return b.getSortOrder() - a.getSortOrder();
        }

        var LiveGame = (function (_super) {
            __extends(LiveGame, _super);
            function LiveGame() {
                _super.call(this, {
                    hasUI: true
                });

                var self = this;

                this._player = ko.observable();

                this._hoverTarget = ko.observable();
                this._hoverTile = null;

                this._group = ko.observableArray([]);

                this._groupType = WarNew.EntityType.None;

                this._selectedEntities = ko.observableArray();
                this._selectedIds = ko.observableArray();
                this._selectedEntities.subscribe(function (selected) {
                    var ids = self._selectedIds();
                    ids.length = 0;
                    for (var i = selected.length - 1; i !== -1; --i)
                        ids[selected[i].getID()] = true;
                    self._selectedIds.valueHasMutated();

                    var oldType = self._groupType;

                    var ent = _.find(selected, function (ent) {
                        return ent.getType() === oldType;
                    });

                    self.setGroupType(ent ? ent.getType() : (selected.length > 0 ? selected[0].getType() : WarNew.EntityType.None));
                });

                this._groupIds = ko.observableArray();

                this._currentCommands = ko.observableArray([]);

                this._hoverCommand = ko.observable();
                this._downButton = ko.observable();
                this._tooltip = ko.observable();
                this._tooltipExtended = ko.observable();
                this._statusBarText = ko.computed(function () {
                    var cmd = self._hoverCommand();
                    if (cmd)
                        return cmd.getName();
                    var target = self._hoverTarget();
                    if (target instanceof WarNew.Entity)
                        return (target).getName();
                });
            }
            LiveGame.prototype.getPlayer = function () {
                return this._player();
            };

            LiveGame.prototype.getSelectedEntities = function () {
                return this._selectedEntities();
            };

            LiveGame.prototype.getGroup = function () {
                return this._group();
            };
            LiveGame.prototype.getCurrentCommands = function () {
                return this._currentCommands();
            };

            LiveGame.prototype.getHoverCommand = function () {
                return this._hoverCommand();
            };
            LiveGame.prototype.getDownButton = function () {
                return this._downButton();
            };
            LiveGame.prototype.getTooltip = function () {
                return this._tooltip();
            };
            LiveGame.prototype.getTooltipExtended = function () {
                return this._tooltipExtended();
            };
            LiveGame.prototype.getStatusBarText = function () {
                return this._statusBarText();
            };

            LiveGame.prototype.onUICreated = function (dom) {
                var self = this;
                dom.find(".toMainMenu").click(function () {
                    Engine.App.instance.setState("MainMenu");
                });

                dom.on("click", ".iconButton.entity", function () {
                    var ent = ko.dataFor(this);
                    var selected = self._selectedEntities();
                    if (selected.length === 1) {
                        self._camera.setCenter(ent.getPosition());
                    } else if (!self.isEntityInGroup(ent)) {
                        self.setGroupType(ent.getType());
                    } else {
                        selected.length = 0;
                        selected.push(ent);
                        self._selectedEntities.valueHasMutated();
                    }
                });

                dom.on("click", ".iconButton.command", function () {
                    var command = ko.dataFor(this);
                    self.issueCommand(command);
                });

                dom.on("mouseover", ".iconButton", function () {
                    var d = ko.dataFor(this);
                    if (d instanceof WarNew.Command)
                        self._hoverCommand(d);
else if (d instanceof WarNew.Entity)
                        self._hoverTarget(d);
                });
                dom.on("mouseout", ".iconButton", function () {
                    var d = ko.dataFor(this);
                    if (d instanceof WarNew.Command)
                        self._hoverCommand(null);
else if (d instanceof WarNew.Entity)
                        self._hoverTarget(null);
                });

                dom.on("mousedown", ".iconButton", function () {
                    self._downButton(this);
                });
                dom.on("mouseup", ".iconButton", function () {
                    self._downButton(null);
                });
            };

            LiveGame.prototype.initialize = function (callback) {
                Engine.AssetManager.load({}, callback);
            };

            LiveGame.prototype.begin = function (callback) {
                var raceName = "human";
                var terrainType = "forest";

                var self = this;
                Engine.AssetManager.load({
                    cursors: [
                        { id: "magnify", x: 0, y: 0, filename: "magnify.gif" },
                        { id: "select", x: 8, y: 8, filename: "select.gif" },
                        { id: "hand", x: 2, y: 0, filename: raceName + "_hand.gif" },
                        { id: "hand_invalid", x: 2, y: 0, filename: raceName + "_hand_invalid.gif" },
                        { id: "red_crosshairs", x: 14, y: 14, filename: raceName + "_red_crosshairs.gif" },
                        { id: "yellow_crosshairs", x: 14, y: 14, filename: raceName + "_yellow_crosshairs.gif" },
                        { id: "green_crosshairs", x: 14, y: 14, filename: raceName + "_green_crosshairs.gif" }
                    ],
                    images: [
                        { id: "terrain", filename: "terrain/" + terrainType + ".png" },
                        { id: "icons", filename: "icon/" + terrainType + ".png" },
                        { id: "footman", filename: "unit/footman.png" },
                        { id: "knight", filename: "unit/knight.png" },
                        { id: "peasant", filename: "unit/peasant.png" },
                        { id: "gold_mine", filename: "structure/" + terrainType + "/neutral/gold_mine.png" },
                        { id: "oil_patch", filename: "structure/" + terrainType + "/neutral/oil_patch.png" },
                        { id: "farm", filename: "structure/" + terrainType + "/farm.png" },
                        { id: "town_hall", filename: "structure/" + terrainType + "/town_hall.png" }
                    ],
                    shaders: [
                        { id: "terrain", filename: "terrain.shader" }
                    ]
                }, function () {
                    self._begin();
                    callback();
                });
            };
            LiveGame.prototype._begin = function () {
                var self = this;

                var world = this._world = new WarNew.World();
                world.init(WarNew.TEST_WORLD_DATA);

                var terrain = world.getTerrain();
                this._camera = new WarNew.Camera2D(new Engine.Vec2(), terrain.getUnitsWide(), terrain.getUnitsDeep());

                this._player(world.getPlayerById(2));

                this._mainSurface = this.create2dSurface();
                this._mainSurface.canvas.bind("mouseout", function () {
                    if (self._hoverTarget() !== null)
                        self._hoverTarget(null);
                    self._hoverTile = null;
                    self._mouseInView = false;
                });
                this._mainSurface.canvas.bind("mouseover", function () {
                    self._mouseInView = true;
                });

                this._userState = WarNew.UserState.Default;
                this._selectionStart = new Engine.Vec2();
                this._worldMouseCoords = new Engine.Vec2();
                this._mouseInView = false;

                this._selectionRect = new Engine.Rect();
                this._selectedEntities([]);

                this._hoverTile = null;
                this._hoverTarget(null);

                this._groupType = WarNew.EntityType.None;
                this._currentCommands([]);
                this._currentPage = WarNew.CommandPage.Default;
                this._pendingCommand = null;

                this._drawGrid = false;
                this._drawEntityIDs = false;
                this._drawPath = false;
                this._drawTileNumbers = false;
                this._drawQuadtree = false;

                this._downButton(null);
                this._tooltip(null);
                this._tooltipExtended(null);

                (this._mainSurface.context).mozImageSmoothingEnabled = false;
                (this._mainSurface.context).webkitImageSmoothingEnabled = false;
                (this._mainSurface.context).imageSmoothingEnabled = false;
            };
            LiveGame.prototype.end = function () {
                this._world.dispose();
                this._world = null;

                this._camera.dispose();
                this._camera = null;

                this._player(null);

                this._mainSurface.dispose();
                this._mainSurface = null;

                this._selectionStart = null;
                this._worldMouseCoords = null;

                this._selectionRect = null;
                this._selectedEntities([]);

                this._hoverTarget(null);
                this._hoverTile = null;

                this._groupType = WarNew.EntityType.None;
                this._currentCommands([]);
                this._currentPage = WarNew.CommandPage.Default;
                this._pendingCommand = null;

                this._downButton(null);
                this._tooltip(null);
                this._tooltipExtended(null);
            };

            LiveGame.prototype.update = function (dt) {
                this._world.step();
                this._world.step();

                var cursor = "hand";

                var camera = this._camera;
                var rect = this._mainSurface.rect;
                var mousePos = Engine.Input.getMousePosition();
                var userState = this._userState;

                this._mouseInView = rect.containsPoint(mousePos);

                if (Engine.Input.isKeyDown(Engine.Key.KEY_LEFT)) {
                    camera.scrollLeft(dt);
                }
                if (Engine.Input.isKeyDown(Engine.Key.KEY_RIGHT)) {
                    camera.scrollRight(dt);
                }
                if (Engine.Input.isKeyDown(Engine.Key.KEY_UP)) {
                    camera.scrollUp(dt);
                }
                if (Engine.Input.isKeyDown(Engine.Key.KEY_DOWN)) {
                    camera.scrollDown(dt);
                }

                if (mousePos.x < WarNew.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollLeft(dt);
                }
                if (mousePos.y < rect.y + WarNew.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollUp(dt);
                }
                if (mousePos.x > rect.right - WarNew.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollRight(dt);
                }
                if (mousePos.y > rect.bottom - WarNew.CAMERA_MOUSE_SCROLL_EDGE) {
                    camera.scrollDown(dt);
                }

                camera.getPointAt(mousePos.x - rect.x, mousePos.y - rect.y, this._worldMouseCoords);

                if (this._mouseInView) {
                    var world = this._world;
                    var wmc = this._worldMouseCoords;

                    this._hoverTile = world.getTerrain().getTileAtPoint(wmc, false);

                    var ents = world.getEntitiesAtPoint(wmc);
                    for (var i = ents.length - 1; i !== -1; --i) {
                        var ent = ents[i];
                        if (!ent.getSelectionRect().containsPoint(wmc) || !ent.isSelectable())
                            ents.splice(i, 1);
                    }

                    if (ents.length > 0) {
                        cursor = "magnify";
                        if (this._hoverTarget() !== ents[0])
                            this._hoverTarget(ents[0]);
                    } else {
                        if (this._hoverTarget() !== this._hoverTile)
                            this._hoverTarget(this._hoverTile);
                    }

                    if (userState === WarNew.UserState.Targeting) {
                        cursor = "yellow_crosshairs";
                    }
                }

                if (userState === WarNew.UserState.Selecting) {
                    this._selectionRect.fromPoints(this._selectionStart, this._worldMouseCoords);
                }

                Engine.AssetManager.getCursor(cursor).apply();
            };

            LiveGame.prototype.draw = function () {
                var ctx = this._mainSurface.context;
                ctx.fillStyle = "#6b6";
                ctx.fillRect(0, 0, this._mainSurface.width, this._mainSurface.height);

                ctx.save();
                 {
                    var world = this._world;
                    var camera = this._camera;
                    var camRect = camera.getRect();

                    camera.apply(ctx);

                    world.getTerrain().draw(ctx, camRect, this._drawGrid, this._drawTileNumbers, this._drawPath);

                    if (this._drawQuadtree) {
                        world.getQuadtree().draw(ctx);
                    }

                    var ents = world.getEntitiesInRect(camRect);

                    if (ents.length > 0) {
                        var hoverTarget = this._hoverTarget();

                        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
                        ctx.strokeStyle = "#0f0";
                        for (var i = ents.length - 1; i !== -1; --i) {
                            var ent = ents[i];
                            if (this.isEntitySelected(ent)) {
                                var sr = ent.getSelectionRect();
                                if (this.isEntityInGroup(ent)) {
                                    ctx.lineWidth = 2;
                                    ctx.fillRect(sr.x, sr.y, sr.width, sr.height);
                                    ctx.strokeRect(sr.x, sr.y, sr.width, sr.height);
                                } else {
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                                }

                                if (hoverTarget === ent) {
                                    ctx.save();
                                     {
                                        ctx.fillStyle = "#ff0";

                                        ctx.fillRect(sr.x - 2, sr.y - 2, 4, 4);
                                        ctx.fillRect(sr.right - 2, sr.y - 2, 4, 4);
                                        ctx.fillRect(sr.right - 2, sr.bottom - 2, 4, 4);
                                        ctx.fillRect(sr.x - 2, sr.bottom - 2, 4, 4);
                                    }
                                    ctx.restore();
                                }
                            }
                        }
                    }

                    for (var i = 0, ii = ents.length; i < ii; ++i) {
                        ents[i].draw(ctx);
                    }

                    if (this._drawEntityIDs) {
                        ctx.font = "normal 10px tahoma";
                        ctx.fillStyle = "#fff";
                        for (var e = 0, ee = ents.length; e < ee; ++e) {
                            var entity = ents[e];
                            var p = entity.getPosition();
                            ctx.fillText(entity.getID().toString(), p.x - 4, p.y - 16);
                        }
                    }

                    var userState = this._userState;
                    if (userState === WarNew.UserState.Selecting) {
                        var sr = this._selectionRect;
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#0f0";
                        ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                    } else if (userState === WarNew.UserState.PlacingEntity) {
                        if (this._hoverTile)
                            this._pendingCommand.placementEntity.drawPlacement(ctx, this._hoverTile.x, this._hoverTile.y);
                    }
                }
                ctx.restore();
            };

            LiveGame.prototype.onKeyDown = function (key) {
                var hotCmd = _.find(this._currentCommands(), function (cmd) {
                    return cmd && cmd.getHotkey() === key;
                });

                if (hotCmd) {
                    this.issueCommand(hotCmd);
                    return;
                }

                if (key === Engine.Key.KEY_TAB) {
                    this._cycleGroup(Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT));
                    Engine.Input.preventDefault();
                } else if (key === Engine.Key.KEY_NUMPAD_0) {
                    this._drawGrid = !this._drawGrid;
                } else if (key === Engine.Key.KEY_NUMPAD_1) {
                    this._drawTileNumbers = !this._drawTileNumbers;
                } else if (key === Engine.Key.KEY_NUMPAD_2) {
                    this._drawPath = !this._drawPath;
                } else if (key === Engine.Key.KEY_NUMPAD_3) {
                    this._drawEntityIDs = !this._drawEntityIDs;
                } else if (key === Engine.Key.KEY_NUMPAD_4) {
                    this._drawQuadtree = !this._drawQuadtree;
                }
            };

            LiveGame.prototype.onBufferedKeyDown = function (key) {
                if (key === Engine.Key.KEY_TAB) {
                    Engine.Input.preventDefault();
                }
            };

            LiveGame.prototype.onMouseDown = function (x, y, button) {
                var surfaceRect = this._mainSurface.rect;
                if (!surfaceRect.containsPoint(x, y)) {
                    return;
                }

                var userState = this._userState;
                if (userState === WarNew.UserState.Default) {
                    if (button === Engine.Key.KEY_MOUSE_LEFT) {
                        this._startSelection(x, y);
                    } else if (button === Engine.Key.KEY_MOUSE_RIGHT) {
                        var result = this.issueCommand();
                        if (result.success) {
                        }
                    }
                } else if (userState === WarNew.UserState.Targeting || userState === WarNew.UserState.PlacingEntity) {
                    if (button === Engine.Key.KEY_MOUSE_LEFT) {
                        this.issueCommand();
                    } else {
                        this.setPage(WarNew.CommandPage.Default);
                    }
                }
            };

            LiveGame.prototype.onMouseUp = function (x, y, button) {
                var userState = this._userState;
                if (userState === WarNew.UserState.Selecting) {
                    if (button === Engine.Key.KEY_MOUSE_LEFT) {
                        this._endSelection();
                    }
                }

                if (button === Engine.Key.KEY_MOUSE_LEFT && this._downButton() !== null) {
                    this._downButton(null);
                }
            };

            LiveGame.prototype.onMouseWheel = function (delta) {
                if (delta > 0) {
                    this._camera.setZoom(this._camera.getZoom() * (1 + WarNew.CAMERA_ZOOM_INCREMENT));
                } else if (delta < 0) {
                    this._camera.setZoom(this._camera.getZoom() * (1 - WarNew.CAMERA_ZOOM_INCREMENT));
                }
            };

            LiveGame.prototype.onResize = function (width, height) {
                var mainSurface = this._mainSurface;
                mainSurface.x = 176;
                mainSurface.y = 16;
                mainSurface.width = width - 176 - 16;
                mainSurface.height = height - 16 - 16;

                this._camera.resize(mainSurface.width, mainSurface.height);
            };

            LiveGame.prototype.isEntityInGroup = function (ent) {
                return this._groupIds()[ent.getID()] || false;
            };

            LiveGame.prototype.isEntitySelected = function (ent) {
                return this._selectedIds()[ent.getID()] || false;
            };

            LiveGame.prototype.issueCommand = function (command) {
                var player = this._player();
                var selected = this._selectedEntities();
                var doQueue = Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT);

                var result = null;

                if (command) {
                    if (command instanceof WarNew.UserCommand) {
                        result = (command).tryExecute(this);
                    } else {
                        var worldCommand = command;
                        result = worldCommand.canExecute(player, selected, null);

                        if (result.success) {
                            if (worldCommand.requiresTarget()) {
                                var plotEntType = worldCommand.plotEntityType();
                                if (plotEntType === WarNew.EntityType.None) {
                                    this._userState = WarNew.UserState.Targeting;
                                } else {
                                    this._userState = WarNew.UserState.PlacingEntity;

                                    worldCommand.placementEntity = new WarNew.Entity(Engine.MAX_INT, this._world, plotEntType, WarNew.Data.AllEntityData[plotEntType], this._player());
                                }

                                this._pendingCommand = worldCommand;
                                this.setPage(WarNew.CommandPage.Targeting);
                            } else {
                                result = worldCommand.tryExecute(player, selected, null, doQueue);
                            }
                        }
                    }
                } else {
                    var target = this._hoverTarget() || this._hoverTile;

                    if (this._userState === WarNew.UserState.Targeting) {
                        result = this._pendingCommand.tryExecute(player, selected, target, doQueue);
                    } else if (this._userState === WarNew.UserState.PlacingEntity) {
                        target = this._hoverTile;
                        result = this._pendingCommand.tryExecute(player, selected, target, doQueue);
                    } else {
                        result = WarNew.WorldCommand.instance.tryExecute(player, selected, target, doQueue);
                    }
                    console.log(result);
                    if (result.success) {
                        this.setPage(WarNew.CommandPage.Default);
                    }
                }

                if (result.message) {
                }

                return result;
            };

            LiveGame.prototype.setGroupType = function (entType) {
                var player = this._player();
                var group = _.filter(this._selectedEntities(), function (ent) {
                    return ent.getType() === entType && ent.getOwner() === player;
                });
                this._group(group);

                var ids = this._groupIds();
                ids.length = 0;
                for (var i = group.length - 1; i !== -1; --i)
                    ids[group[i].getID()] = true;
                this._groupIds.valueHasMutated();

                this._groupType = entType;

                this.setPage(WarNew.CommandPage.Default);
            };

            LiveGame.prototype.setPage = function (page) {
                var commands = [];
                for (var i = WarNew.COMMANDS_MAX - 1; i !== -1; --i)
                    commands[i] = null;

                function pushCommand(cmd) {
                    commands[cmd.getButtonY() * WarNew.COMMAND_BUTTON_X_MAX + cmd.getButtonX()] = cmd;
                }

                if (page === WarNew.CommandPage.AdvancedBuild) {
                    pushCommand(WarNew.CancelCommand.instance);
                } else if (page === WarNew.CommandPage.BasicBuild) {
                    var group = this._group();
                    if (group.length > 0) {
                        var ent = group[0];

                        _.each(ent.getStructuresBuilt(), function (entType) {
                            var data = WarNew.Data.AllEntityData[entType];
                            if (!data)
                                return;

                            pushCommand(new WarNew.BuildCommand(entType));
                        });
                    }

                    pushCommand(WarNew.CancelCommand.instance);
                } else if (page === WarNew.CommandPage.Targeting) {
                    pushCommand(WarNew.CancelCommand.instance);
                } else {
                    this._userState = WarNew.UserState.Default;
                    this._pendingCommand = null;

                    var stop = false;
                    var attack = false;
                    var move = false;
                    var patrol = false;
                    var holdPosition = false;
                    var setRallyPoint = false;

                    var player = this._player();
                    var selected = this._selectedEntities();
                    for (var i = 0, ii = selected.length; i < ii; ++i) {
                        var ent = selected[i];

                        if (ent.getOwner() !== player)
                            continue;

                        if (ent.canMove() || ent.hasWeapon())
                            stop = true;

                        if (ent.hasWeapon())
                            attack = true;

                        if (ent.canMove()) {
                            move = true;
                            patrol = true;
                            holdPosition = true;
                        }

                        if (ent.trainsUnits())
                            setRallyPoint = true;
                    }

                    if (stop)
                        pushCommand(WarNew.StopCommand.instance);
                    if (attack)
                        pushCommand(WarNew.AttackCommand.instance);
                    if (move)
                        pushCommand(WarNew.MoveCommand.instance);
                    if (patrol)
                        pushCommand(WarNew.PatrolCommand.instance);
                    if (holdPosition)
                        pushCommand(WarNew.HoldPositionCommand.instance);
                    if (setRallyPoint)
                        pushCommand(WarNew.SetRallyPointCommand.instance);

                    var group = this._group();
                    if (group.length > 0) {
                        var ent = group[0];

                        _.each(ent.getAbilities(), function (abType) {
                            pushCommand(new WarNew.AbilityCommand(abType));
                        });

                        _.each(ent.getUnitsTrained(), function (entType) {
                            pushCommand(new WarNew.TrainCommand(entType));
                        });

                        var showBasic = false;
                        var showAdvanced = false;
                        _.each(ent.getStructuresBuilt(), function (entType) {
                            var data = WarNew.Data.AllEntityData[entType];
                            if (!data)
                                return;

                            showBasic = showBasic || (data.page === WarNew.CommandPage.BasicBuild);
                            showAdvanced = showAdvanced || (data.page === WarNew.CommandPage.AdvancedBuild);
                        });

                        if (showBasic)
                            pushCommand(WarNew.BasicBuildCommand.instance);
                        if (showAdvanced)
                            pushCommand(WarNew.AdvancedBuildCommand.instance);
                    }
                }

                this._currentPage = page;
                this._currentCommands(commands);
            };

            LiveGame.prototype.selectEntities = function (ents, add) {
                if (add) {
                    var selected = this._selectedEntities();

                    if (ents.length === 1) {
                        var index = selected.indexOf(ents[0]);
                        if (index === -1) {
                            selected.push(ents[0]);
                        } else {
                            selected.splice(index, 1);
                        }
                    } else {
                        for (var i = ents.length - 1; i !== -1; --i) {
                            var ent = ents[i];
                            if (selected.indexOf(ent) === -1)
                                selected.push(ent);
                        }
                    }

                    this._filterEntities(selected);
                    this._selectedEntities.valueHasMutated();
                } else {
                    this._filterEntities(ents);
                    this._selectedEntities(ents);
                }
            };

            LiveGame.prototype._cycleGroup = function (backwards) {
                var oldType = this._groupType;
                var selected = this._selectedEntities();

                var i = backwards ? 0 : selected.length - 1;
                var ii = backwards ? selected.length : -1;
                var inc = i > ii ? -1 : 1;
                while (i !== ii) {
                    if (selected[i].getType() === oldType) {
                        var nextEnt = selected[i - inc] || selected[ii - inc];
                        var nextEntType = nextEnt.getType();
                        if (nextEntType !== oldType)
                            this.setGroupType(nextEntType);
                        return;
                    }
                    i += inc;
                }

                this.setGroupType(WarNew.EntityType.None);
            };

            LiveGame.prototype._endSelection = function () {
                this._userState = WarNew.UserState.Default;

                var sr = this._selectionRect;
                var ents = this._world.getEntitiesInRect(sr);
                for (var i = ents.length - 1; i !== -1; --i) {
                    var ent = ents[i];
                    if (!ent.getSelectionRect().intersectsRect(sr))
                        ents.splice(i, 1);
                }

                if (ents.length !== 0) {
                    this.selectEntities(ents, Engine.Input.isKeyDown(Engine.Key.KEY_SHIFT));
                }
            };

            LiveGame.prototype._filterEntities = function (ents) {
                if (ents.length === 0) {
                    return;
                }

                var player = this._player();

                var savedEnt = null;
                for (var i = ents.length - 1; i !== -1; --i) {
                    var ent = ents[i];
                    if (!ent.isSelectable()) {
                        ents.splice(i, 1);
                    } else if (!ent.isUnit() || ent.getOwner() !== player) {
                        savedEnt = ents.splice(i, 1)[0];
                    }
                }

                if (ents.length === 0 && savedEnt) {
                    ents.push(savedEnt);
                } else {
                    ents.sort(_entitySortFunction);

                    if (ents.length > WarNew.ENTITY_MAX_SELECTION)
                        ents.splice(WarNew.ENTITY_MAX_SELECTION, ents.length - WarNew.ENTITY_MAX_SELECTION);
                }
            };

            LiveGame.prototype._startSelection = function (pageX, pageY) {
                var rect = this._mainSurface.rect;
                this._userState = WarNew.UserState.Selecting;
                this._camera.getPointAt(pageX - rect.x, pageY - rect.y, this._selectionStart);
            };
            return LiveGame;
        })(Engine.AppState);
        WarNew.LiveGame = LiveGame;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
