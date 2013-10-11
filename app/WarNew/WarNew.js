var Engine;
(function (Engine) {
    (function (WarNew) {
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

        (function (EntityType) {
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
var Engine;
(function (Engine) {
    (function (WarNew) {
        ;
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

        WarNew.QUADTREE_NODE_MAX_ITEMS = 4;
        WarNew.QUADTREE_NODE_MAX_DEPTH = 4;

        WarNew.ENTITY_MAX_SELECTION = 9;

        WarNew.PLAYERS_MAX = 8;

        WarNew.CAMERA_MOUSE_SCROLL_EDGE = 20;
        WarNew.CAMERA_SCROLL_SPEED = 1;
        WarNew.CAMERA_MAX_ZOOM = 3;
        WarNew.CAMERA_MIN_ZOOM = 1;
        WarNew.CAMERA_ZOOM_INCREMENT = 0.1;

        WarNew.TEST_WORLD_DATA = (JSON.parse("{\"world\":{\"terrain\":{\"type\":\"forest\",\"width\":32,\"height\":32,\"tiles\":[502,502,246,246,246,246,246,502,246,502,246,246,502,502,246,502,502,502,502,246,246,246,246,502,246,246,502,246,246,246,246,246,502,502,502,246,246,502,502,502,502,246,246,502,502,246,502,502,246,502,246,502,246,246,502,246,502,246,246,246,502,502,246,246,502,246,502,502,502,502,246,246,246,246,502,502,502,246,246,502,502,246,246,246,502,502,502,502,246,246,502,502,246,502,502,502,502,502,246,502,502,246,246,246,502,502,246,246,246,502,246,502,246,246,246,246,246,246,246,502,246,502,502,246,502,246,502,246,246,502,246,246,246,246,502,502,246,502,502,246,502,246,246,502,502,502,502,246,502,502,502,502,246,246,246,246,502,246,246,502,246,246,246,502,246,246,502,502,246,502,502,246,374,54,310,566,182,246,502,246,502,502,246,246,502,246,246,246,246,502,502,246,502,502,246,246,246,502,246,392,456,456,328,502,598,137,457,329,678,502,502,502,502,502,502,246,502,502,246,246,246,502,502,246,502,502,246,392,200,456,456,232,760,504,88,246,86,169,1017,345,166,502,246,502,502,246,246,246,246,246,502,246,502,246,246,246,502,502,502,424,248,248,248,504,120,312,280,246,86,297,313,25,166,118,310,310,310,182,246,502,502,246,502,246,246,502,502,246,502,246,246,168,248,120,312,56,280,246,246,502,214,710,198,198,358,22,393,201,329,678,246,502,246,502,246,502,246,246,246,502,502,246,246,40,312,280,502,246,502,502,246,246,502,246,246,502,342,393,233,249,345,166,502,246,502,502,502,502,246,246,502,502,502,246,246,246,246,246,246,502,246,246,246,246,502,502,502,246,86,425,505,249,345,166,502,502,502,502,502,246,246,246,246,502,502,246,392,456,200,456,328,502,246,246,246,246,246,502,246,246,342,169,761,761,89,166,246,246,246,246,502,502,246,502,246,502,502,246,168,760,760,504,88,246,246,246,246,502,502,246,502,246,86,41,57,57,25,422,502,502,502,246,246,246,246,246,502,502,246,246,424,248,504,760,88,502,246,246,502,502,502,502,246,502,470,454,454,710,710,230,246,246,246,246,246,502,502,502,246,502,246,502,40,56,312,312,280,246,502,502,246,374,566,566,54,54,182,246,246,502,246,246,246,502,502,246,502,502,502,246,246,502,246,502,502,118,54,566,310,182,246,502,502,342,393,457,457,329,678,502,502,502,502,246,246,502,246,502,502,246,246,246,246,246,502,246,246,598,372,308,436,38,310,54,54,22,297,313,313,25,678,246,246,502,246,502,502,246,502,502,246,246,502,502,246,246,246,502,246,86,340,242,292,52,564,564,308,436,116,52,436,500,678,502,502,502,502,246,502,502,502,246,246,246,246,246,246,246,246,502,246,342,340,242,498,498,754,754,498,420,340,242,36,180,678,502,246,246,246,502,502,246,246,246,502,502,246,246,502,502,502,502,246,598,212,708,196,708,196,452,708,484,340,498,754,676,422,502,502,502,246,502,246,502,502,502,246,246,502,246,502,502,502,246,502,214,710,710,454,710,198,454,454,70,468,708,708,228,678,502,502,502,502,246,502,502,246,246,502,502,502,246,502,502,246,246,502,246,246,246,246,502,246,246,246,214,710,454,454,454,230,502,502,246,246,502,246,246,246,246,246,502,246,246,502,502,246,246,246,502,502,502,502,246,246,246,502,502,502,246,502,246,502,246,502,246,502,246,246,246,502,502,246,502,502,246,246,502,502,246,246,246,246,246,502,502,246,246,502,246,502,502,246,502,246,502,502,502,246,502,502,502,502,246,246,502,502,246,502,502,502,246,246,502,246,502,502,502,246,502,502,246,246,246,246,246,246,246,246,502,246,246,246,502,502,502,246,502,246,502,502,246,246,502,246,246,246,502,502,502,246,502,246,502,246,502,502,246,246,246,502,246,502,502,246,502,246,502,246,502,246,502,502,502,246,502,502,502,246,246,246,502,502,502,502,246,246,502,502,246,246,246,502,502,502,246,502,502,246,246,246,246,502,502,246,502,246,246,502,502,246,502,502,502,502,246,502,502,502,246,502,246,246,246,502,502,502,502,246,502,246,246,502,246,246,246,246,246,502,246,246,502,502,502,246,246,246,246,502,246,502,246,502,502,502,502,502,502,502,246,246,502,246,246,502,502,246,502,246,246,246,246,246,246,502,502,502,502,502,502,502,502,502,246,502,246,502,502,502,502,502,246,246,246,502,246,246,246,246,246,502,502,246,246,246,246,246,502,502,246,502,246,502,502,246,246,502,246,502,246,246,246,246,502,502,246,246,246,502,246,502,246,502,246]},\"teams\":[{\"name\":\"Neutral Team\",\"shareVision\":true},{\"name\":\"Team 1\",\"shareVision\":true},{\"name\":\"Team 2\",\"shareVision\":true},{\"name\":\"Team 3\",\"shareVision\":true},{\"name\":\"Team 4\",\"shareVision\":true},{\"name\":\"Team 5\",\"shareVision\":true},{\"name\":\"Team 6\",\"shareVision\":true},{\"name\":\"Team 7\",\"shareVision\":true},{\"name\":\"Team 8\",\"shareVision\":true}],\"players\":[{\"gold\":1000,\"lumber\":500,\"name\":\"Neutral Player\",\"oil\":250,\"race\":1,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":0},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 1\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":1},{\"gold\":2400,\"lumber\":1400,\"name\":\"Player 2\",\"oil\":550,\"race\":1,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":2},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 3\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":3},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 4\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":4},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 5\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":5},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 6\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":6},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 7\",\"oil\":250,\"race\":2,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":7},{\"gold\":1000,\"lumber\":500,\"name\":\"Player 8\",\"oil\":250,\"race\":3,\"raceIsFixed\":true,\"playerType\":1,\"playerTypeIsFixed\":false,\"teamID\":8}],\"entities\":[[4194306,359,262204,12058864],[4198402,488,262204,16253200],[4203682,360,263344,13631808],[4207780,364,263344,13631936],[4210692,330,262204,11010384],[4214788,489,262204,16253232],[4218916,334,262174,11010512],[4223012,529,262174,17302064],[4227106,299,262174,9961840],[4231202,297,262174,9961776],[4235298,298,262174,9961808],[4239362,555,262204,18350448],[4243554,326,262234,11010256],[4247652,235,262234,7864688],[4251746,552,262234,18350352],[4255844,494,262234,16253392],[4259940,516,262234,17301648],[4265122,84,263344,4195008],[4268034,82,262204,2622032],[4273600,312,262144,11010864]]},\"user\":{\"cameraX\":480.34108872841,\"cameraY\":351.76123789011,\"cameraZoom\":1.0943023107607,\"playerID\":2,\"placementEntityType\":-1,\"placementRadius\":1,\"placementTileType\":0,\"selectedEntities\":[1026],\"userState\":0}}").world);
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
            Object.defineProperty(Camera2D.prototype, "center", {
                get: function () {
                    return this._center;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera2D.prototype, "rect", {
                get: function () {
                    return this._rect;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Camera2D.prototype, "zoom", {
                get: function () {
                    return this._zoom;
                },
                enumerable: true,
                configurable: true
            });

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
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Command = (function () {
            function Command() {
            }
            return Command;
        })();
        WarNew.Command = Command;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var Entity = (function () {
            function Entity(id, world, data, p) {
                this._id = id;
                this._world = world;
                this._type = p.type;
                this._owner = ko.observable(p.owner);
                this._data = WarNew.Data.AllEntityData[p.type];

                this._position = new Engine.Vec2(p.posX, p.posY);

                var boxWidth = data.isUnit ? data.boxWidth : data.tilesWide * WarNew.TILE_SIZE;
                var boxHeight = data.isUnit ? data.boxHeight : data.tilesHigh * WarNew.TILE_SIZE;

                this._selectionRect = new Engine.Rect(0, 0, boxWidth, boxHeight);
                this._drawRect = new Engine.Rect(0, 0, boxWidth, boxHeight);

                this._direction = WarNew.Direction.Down;
                this._currentSequence = null;
                this._sequences = {};
                this._initSequences();

                this._health = ko.observable(this.healthMax);

                this._setSequence("idle");
                this._updateRects();
            }
            Entity.prototype.getID = function () {
                return this._id;
            };
            Entity.prototype.getQTRect = function () {
                return this._drawRect;
            };

            Object.defineProperty(Entity.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "owner", {
                get: function () {
                    return this._owner();
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Entity.prototype, "position", {
                get: function () {
                    return this._position;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "selectionRect", {
                get: function () {
                    return this._selectionRect;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "drawRect", {
                get: function () {
                    return this._drawRect;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Entity.prototype, "iconID", {
                get: function () {
                    return this._data.iconId;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "isSelectable", {
                get: function () {
                    return this._data.selectable;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "isStructure", {
                get: function () {
                    return this._data.isStructure;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "isUnit", {
                get: function () {
                    return this._data.isUnit;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "priority", {
                get: function () {
                    return this._data.priority;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "sight", {
                get: function () {
                    return this._data.sight;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Entity.prototype, "armor", {
                get: function () {
                    return this._data.armorBase;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "damageMin", {
                get: function () {
                    return this._data.weaponDamageBase;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "damageMax", {
                get: function () {
                    return this._data.weaponDamageBase + this._data.weaponDamageRandom;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "health", {
                get: function () {
                    return this._health();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Entity.prototype, "healthMax", {
                get: function () {
                    return this._data.healthMax;
                },
                enumerable: true,
                configurable: true
            });

            Entity.prototype.draw = function (ctx) {
                var pos = this._position;
                this._currentSequence.drawAtCenter(ctx, pos.x, pos.y);
            };

            Entity.prototype._initSequences = function () {
                var obj = this._data.sequences;
                var names = ["attack", "construction", "construction_site", "idle", "move"];
                for (var i = 0, ii = names.length; i < ii; ++i) {
                    var name = names[i];
                    var seqData = obj[name];
                    if (seqData) {
                        var image = WarNew.ImageCache.getImage(seqData.imageID || obj.imageID, this._owner().id);

                        this._sequences[name] = new WarNew.Sequence({
                            type: seqData.type || obj.type,
                            image: image,
                            frameWidth: seqData.frameWidth || obj.frameWidth,
                            frameHeight: seqData.frameHeight || obj.frameHeight,
                            frames: seqData.frames,
                            frameTick: seqData.frameTick
                        });
                    }
                }
            };

            Entity.prototype._setSequence = function (sequenceName, direction) {
                var sequence = this._sequences[sequenceName];
                if (sequence) {
                    if (sequence !== this._currentSequence) {
                        sequence.reset();
                        this._currentSequence = sequence;

                        var fw = sequence.frameWidth;
                        var fh = sequence.frameHeight;
                        var dr = this._drawRect;
                        dr.x = this._position.x - (fw >> 1);
                        dr.y = this._position.y - (fh >> 1);
                        dr.width = fw;
                        dr.height = fh;
                    }

                    if (direction) {
                        this._direction = direction;
                    }
                    sequence.setDirection(this._direction);
                }
            };

            Entity.prototype._updateRects = function () {
                var sr = this._selectionRect;
                sr.x = this._position.x - (sr.width >> 1);
                sr.y = this._position.y - (sr.height >> 1);

                var dr = this._drawRect;

                dr.x = this._position.x - (dr.width >> 1);
                dr.y = this._position.y - (dr.height >> 1);
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
        ko.bindingHandlers["healthbar"] = {
            init: function (element, valueAccessor, allBindingsAccessor, entity, bindingContext) {
            },
            update: function (element, valueAccessor, allBindingsAccessor, entity, bindingContext) {
                var percent = Math.floor((entity.health / entity.healthMax) * 100);

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
                if (typeof playerId === "undefined" || playerId === 0) {
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
            Object.defineProperty(Player.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Player.prototype, "gold", {
                get: function () {
                    return this._gold;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Player.prototype, "lumber", {
                get: function () {
                    return this._lumber;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Player.prototype, "oil", {
                get: function () {
                    return this._oil;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Player.prototype, "foodUsed", {
                get: function () {
                    return this._foodUsed;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Player.prototype, "foodCreated", {
                get: function () {
                    return this._foodCreated;
                },
                enumerable: true,
                configurable: true
            });

            Player.prototype.dispose = function () {
                this._world = null;
            };

            Player.prototype.decode = function (raw) {
                this._type = raw ? raw.playerType : WarNew.PlayerType.None;
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
        ko.bindingHandlers["portrait"] = {
            init: function (element, valueAccessor, allBindingsAccessor, entity, bindingContext) {
                element.width = 46;
                element.height = 38;
            },
            update: function (element, valueAccessor, allBindingsAccessor, entity, bindingContext) {
                var ctx = element.getContext("2d");
                if (!entity) {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    return;
                }

                var sprite = WarNew.AllSpriteData.getSprite(entity.iconID, entity.owner.id);
                if (!sprite) {
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    return;
                }

                ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height, 0, 0, ctx.canvas.width, ctx.canvas.height);
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
                this._type = params.type;
                this._image = params.image;
                this._frames = params.frames;
                this._frameTick = params.frameTick;
                this._frameWidth = params.frameWidth;
                this._frameHeight = params.frameHeight;

                this.reset();
                this.setDirection(params.direction);
            }
            Object.defineProperty(Sequence.prototype, "frameWidth", {
                get: function () {
                    return this._frameWidth;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sequence.prototype, "frameHeight", {
                get: function () {
                    return this._frameHeight;
                },
                enumerable: true,
                configurable: true
            });

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

                    this._xPosition = Sequence._dirToFrameX[direction] * this._frameWidth;
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
                    this._yPosition = this._frames[this._frameIndex] * this._frameHeight;
                } else if (this._type === WarNew.SequenceType.Vertical) {
                    this._yPosition = this._frames[this._frameIndex] * this._frameHeight;
                } else {
                    this._yPosition = Math.floor(this._frameIndex * 0.2);
                    this._xPosition = this._frameIndex % 5;
                }
            };

            Sequence.prototype._draw = function (ctx, x, y, atCenter) {
                if (!this._image)
                    return;

                if (this._flipX) {
                    ctx.save();
                    ctx.translate(x, 0);
                    ctx.scale(-1, 1);
                    ctx.translate(-x, 0);
                }

                var frameWidth = this._frameWidth;
                var frameHeight = this._frameHeight;
                if (atCenter) {
                    x -= (frameWidth >> 1);
                    y -= (frameHeight >> 1);
                }

                ctx.drawImage(this._image, this._xPosition, this._yPosition, frameWidth, frameHeight, x, y, frameWidth, frameHeight);

                if (this._flipX) {
                    ctx.restore();
                }
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
        var Terrain = (function () {
            function Terrain() {
            }
            Object.defineProperty(Terrain.prototype, "mesh", {
                get: function () {
                    return this._mesh.mesh;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Terrain.prototype, "terrainType", {
                get: function () {
                    return this._terrainType;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Terrain.prototype, "tileCount", {
                get: function () {
                    return this._tilesWide * this._tilesDeep;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Terrain.prototype, "tilesWide", {
                get: function () {
                    return this._tilesWide;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Terrain.prototype, "tilesDeep", {
                get: function () {
                    return this._tilesDeep;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Terrain.prototype, "unitsWide", {
                get: function () {
                    return this._unitsWide;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Terrain.prototype, "unitsDeep", {
                get: function () {
                    return this._unitsDeep;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Terrain.prototype, "something", {
                get: function () {
                    return this._tilesWide;
                },
                set: function (value) {
                },
                enumerable: true,
                configurable: true
            });

            Terrain.prototype.dispose = function () {
                var tiles = this._tiles;
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                    tiles[i].dispose();
                }
                this._tiles = null;

                this._mesh.dispose();
            };

            Terrain.prototype.decode = function (raw) {
                var terrainType = this._terrainType = raw ? raw.type : "forest";
                var tilesWide = this._tilesWide = raw ? raw.width : 32;
                var tilesDeep = this._tilesDeep = raw ? raw.height : 32;

                this._unitsWide = tilesWide * WarNew.TILE_SIZE;
                this._unitsDeep = tilesDeep * WarNew.TILE_SIZE;

                this._mesh = new WarNew.TerrainMesh(tilesWide, tilesDeep);

                var id = -1;
                var tiles = this._tiles = [];
                for (var z = 0; z < tilesDeep; ++z) {
                    for (var x = 0; x < tilesWide; ++x) {
                        var tile = new WarNew.Tile(this, ++id, x, z);
                        tiles.push(tile);
                    }
                }

                var rawTiles = raw ? raw.tiles : [];
                for (var i = 0, ii = tiles.length; i < ii; ++i) {
                    tiles[i].decode(rawTiles[i]);
                }
            };

            Terrain.prototype.onTileTypeSet = function (tile) {
                this._mesh.updateTile(tile);
            };

            Terrain.prototype.getTileById = function (id) {
                return this._tiles[id] || null;
            };

            Terrain.prototype.getTilesWithinIndex = function (tileX, tileY, tilesWide, tilesHigh) {
                var sx = Engine.MathUtil.clamp(tileX, 0, this._tilesWide - 1);
                var sy = Engine.MathUtil.clamp(tileY, 0, this._tilesDeep - 1);
                var ex = Engine.MathUtil.clamp(tileX + tilesWide, 0, this._tilesWide);
                var ey = Engine.MathUtil.clamp(tileY + tilesHigh, 0, this._tilesDeep);

                var ret = [];
                var tiles = this._tiles;
                for (var y = sy; y < ey; ++y) {
                    for (var x = sx; x < ex; ++x)
                        ret.push(tiles[x + this._tilesWide * y]);
                }
                return ret;
            };

            Terrain.prototype.draw = function (ctx, bounds, drawGrid, drawTileNumbers, drawPath) {
                if (typeof drawGrid === "undefined") { drawGrid = false; }
                if (typeof drawTileNumbers === "undefined") { drawTileNumbers = false; }
                if (typeof drawPath === "undefined") { drawPath = false; }
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
                        var tilePos = tile.position;
                        ctx.drawImage(tilesheet, tile.atlasX, tile.atlasY, WarNew.TILE_SIZE, WarNew.TILE_SIZE, tilePos.x, tilePos.y, WarNew.TILE_SIZE, WarNew.TILE_SIZE);
                    }
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
            Object.defineProperty(TerrainMesh.prototype, "mesh", {
                get: function () {
                    return this._mesh;
                },
                enumerable: true,
                configurable: true
            });

            TerrainMesh.prototype.dispose = function () {
                this._geometry.dispose();
                this._mesh = null;
            };

            TerrainMesh.prototype.updateTile = function (tile) {
                var geom = this._geometry;

                 {
                    var atw = WarNew.TILE_ATLAS_TILES_WIDE;
                    var ath = WarNew.TILE_ATLAS_TILES_HIGH;

                    var aIndex = tile.atlasIndex;
                    var ax = (aIndex % atw);
                    var ay = Math.floor(aIndex / atw);

                    var uvX = 1 / atw;
                    var uvY = 1 / ath;

                    var u0 = ax * uvX;
                    var u1 = u0 + uvX;

                    var v0 = 1 - uvY * ay;
                    var v1 = v0 - uvY;

                    var uvs = geom.attributes["uv"].array;
                    var u = 12 * tile.id - 1;

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
                    var h1 = tile.data.layer * WarNew.TERRAIN_HEIGHT_SCALE;
                    var h0 = h1 - WarNew.TERRAIN_HEIGHT_SCALE;

                    var positions = geom.attributes["position"].array;
                    var p = 18 * tile.id + 1;

                    var cf = tile.cornerFlags;

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
            function Tile(terrain, id, x, z) {
                this._terrain = terrain;
                this._id = id;
                this._x = x;
                this._z = z;
                this._position = new Engine.Vec2(x * WarNew.TILE_SIZE, z * WarNew.TILE_SIZE);

                this._occupiers = [];
            }
            Object.defineProperty(Tile.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tile.prototype, "position", {
                get: function () {
                    return this._position;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(Tile.prototype, "type", {
                get: function () {
                    return this._type;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tile.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tile.prototype, "cornerFlags", {
                get: function () {
                    return this._cornerFlags;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tile.prototype, "atlasIndex", {
                get: function () {
                    return this._atlasIndex;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tile.prototype, "atlasX", {
                get: function () {
                    return this._atlasX;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Tile.prototype, "atlasY", {
                get: function () {
                    return this._atlasY;
                },
                enumerable: true,
                configurable: true
            });

            Tile.prototype.dispose = function () {
                this._terrain = null;
                this._occupiers = null;
                this._data = null;
            };

            Tile.prototype.decode = function (raw) {
                if (raw) {
                    var tileType = 0xf & (raw >> 0);
                    var cornerFlags = 0xf & (raw >> 4);
                    var variant = 0xf & (raw >> 8);
                    this.setTileType(tileType, cornerFlags, variant);
                } else {
                    this.setTileType(WarNew.TileType.LightGrass, 15);
                }
            };

            Tile.prototype.setTileType = function (tileType, cornerFlags, variant) {
                var terrainType = this._terrain.terrainType;

                var allData = WarNew.Data.AllTileData[terrainType];
                if (!allData)
                    return;

                var data = allData[tileType];
                if (!data)
                    return;

                var variants = data.indices[cornerFlags];
                if (!variants || variants.length === 0)
                    return;

                if (typeof variant !== "undefined")
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
            return Tile;
        })();
        WarNew.Tile = Tile;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
var Engine;
(function (Engine) {
    (function (WarNew) {
        var World = (function () {
            function World() {
            }
            Object.defineProperty(World.prototype, "terrain", {
                get: function () {
                    return this._terrain;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(World.prototype, "quadtree", {
                get: function () {
                    return this._quadtree;
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(World.prototype, "entities", {
                get: function () {
                    return this._entities;
                },
                enumerable: true,
                configurable: true
            });

            World.prototype.dispose = function () {
                this._terrain.dispose();
                this._quadtree.dispose();
            };

            World.prototype.decode = function (raw) {
                var terrain = this._terrain = new WarNew.Terrain();
                terrain.decode(raw ? raw.terrain : undefined);

                this._quadtree = new WarNew.WorldQuadtree(new Engine.Rect(0, 0, terrain.unitsWide, terrain.unitsDeep));

                var players = this._players = [];
                var rawPlayers = raw ? raw.players : [];
                for (var p = 0; p < WarNew.PLAYERS_MAX; ++p) {
                    var player = new WarNew.Player(p, this);
                    player.decode(rawPlayers[p]);
                    players.push(player);
                }

                this._nextEntityId = terrain.tileCount;

                var entities = this._entities = [];
                var entitiesById = this._entitiesById = [];
                this._entitiesByType = [];

                var rawEntities = raw ? raw.entities : [];
                for (var i = 0, ii = rawEntities.length; i < ii; ++i) {
                    var rawEnt = rawEntities[i];

                    this._decodeEntity(rawEnt);
                }
            };

            World.prototype.spawnEntity = function (p, id) {
                var data = WarNew.Data.AllEntityData[p.type];
                if (!data) {
                    return null;
                }

                if (typeof id === "undefined") {
                    id = this._nextEntityId;
                } else {
                    this._nextEntityId = Math.max(this._nextEntityId, id);
                }
                ++this._nextEntityId;

                var ent = new WarNew.Entity(id, this, data, p);

                this._addEntity(ent);

                return ent;
            };

            World.prototype.destroyEntity = function (ent) {
                this._removeEntity(ent);
            };

            World.prototype.getPlayerById = function (pid) {
                return this._players[pid] || null;
            };

            World.prototype.getEntityById = function (id) {
                return this._entitiesById[id] || null;
            };

            World.prototype.getEntitiesInRect = function (rect) {
                return this._quadtree.getItemsInRect(rect);
            };

            World.prototype._decodeEntity = function (raw) {
                var raw_0 = raw[0];
                var playerId = 0xf & (raw_0 >> 0);
                var entityType = 0xff & (raw_0 >> 4);
                var entityId = 0x7ffff & (raw_0 >> 12);

                var raw_1 = raw[1];
                var tileID = 0x7ffff & (raw_1 >> 0);

                var raw_2 = raw[2];
                var health = 0xfff & (raw_2 >> 0);
                var mana = 0x1f & (raw_2 >> 12);
                var spawnState = 0x7 & (raw_2 >> 17);
                var goldContained = 0x7ff & (raw_2 >> 20);

                var raw_3 = raw[3];
                var posX = 0x7fff & (raw_3 >> 0);
                var posY = 0x7fff & (raw_3 >> 15);

                return this.spawnEntity({
                    owner: this.getPlayerById(playerId),
                    type: entityType,
                    posX: posX,
                    posY: posY
                }, entityId);
            };

            World.prototype._encodeEntity = function (ent) {
                var raw_0 = 0;
                raw_0 |= (ent.owner.id << 0);
                raw_0 |= (ent.type << 4);
                raw_0 |= (ent.id << 12);

                return [raw_0];
            };

            World.prototype._addEntity = function (ent) {
                this._entities.push(ent);
                this._entitiesById[ent.id] = ent;

                var typeList = this._entitiesByType[ent.type];
                if (!typeList) {
                    typeList = this._entitiesByType[ent.type] = [];
                }
                typeList.push(ent);

                this._quadtree.insert(ent);
            };

            World.prototype._removeEntity = function (ent) {
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
            }
            QTBucket.prototype.dispose = function () {
                this._tree = null;
                this._parent = null;
                this._bounds = null;
                this._items = null;
                if (!this.isLeaf()) {
                    this._topLeft.dispose();
                    this._topRight.dispose();
                    this._bottomLeft.dispose();
                    this._bottomRight.dispose();
                    this._topLeft = this._topRight = this._bottomLeft = this._bottomRight = null;
                }
            };

            QTBucket.prototype.draw = function (ctx) {
                if (this.isLeaf()) {
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
                this._increment(1);

                if (this.isLeaf() && this._items.length > WarNew.QUADTREE_NODE_MAX_ITEMS && this._depth < WarNew.QUADTREE_NODE_MAX_DEPTH) {
                    this._split();
                }
            };

            QTBucket.prototype.remove = function (item) {
                var index = this._items.indexOf(item);
                if (index === -1) {
                    return;
                }

                this._items.splice(index, 1);
                this._decrement(1);
            };

            QTBucket.prototype.isLeaf = function () {
                return this._topLeft === null;
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

                if (this.isLeaf() === false) {
                    var q = this.getPointQuadrant(point);
                    q.getItemsAtPoint(point, ret);
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

                if (this.isLeaf() === false) {
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

            QTBucket.prototype._increment = function (amount) {
                var c = this;
                do {
                    c._count += amount;
                    c = c._parent;
                } while(c !== null);
            };

            QTBucket.prototype._decrement = function (amount) {
                var c = this;
                var mergeNode = null;
                do {
                    c._count -= amount;
                    if (c._count === 0) {
                        mergeNode = c;
                    }
                    c = c._parent;
                } while(c !== null);

                if (mergeNode !== null && !mergeNode.isLeaf()) {
                    console.log("QT merge");

                    mergeNode._topLeft.dispose();
                    mergeNode._topLeft = null;
                    mergeNode._topRight.dispose();
                    mergeNode._topRight = null;
                    mergeNode._bottomLeft.dispose();
                    mergeNode._bottomLeft = null;
                    mergeNode._bottomRight.dispose();
                    mergeNode._bottomRight = null;
                }
            };

            QTBucket.prototype._split = function () {
                console.log("QT split");
                var b = this._bounds;
                var tree = this._tree;
                var nextDepth = this._depth + 1;

                var mx = this._midX;
                var my = this._midY;
                var hw = b.width * 0.5;
                var hh = b.height * 0.5;

                this._topLeft = new QTBucket(tree, this, new Engine.Rect(b.x, b.y, hw, hh), nextDepth);
                this._topRight = new QTBucket(tree, this, new Engine.Rect(mx, b.y, hw, hh), nextDepth);
                this._bottomLeft = new QTBucket(tree, this, new Engine.Rect(b.x, my, hw, hh), nextDepth);
                this._bottomRight = new QTBucket(tree, this, new Engine.Rect(mx, my, hw, hh), nextDepth);

                var items = this._items;
                for (var i = items.length - 1; i !== -1; --i) {
                    tree.update(items[i]);
                }
            };
            return QTBucket;
        })();
        WarNew.QTBucket = QTBucket;

        var WorldQuadtree = (function () {
            function WorldQuadtree(bounds) {
                this._root = new QTBucket(this, null, bounds, 0);
                this._map = [];
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
                if (typeof this._map[id] !== "undefined") {
                    return;
                }

                var bucket = this._deepestBucket(item);

                bucket.insert(item);
                this._map[id] = [item, bucket];
            };

            WorldQuadtree.prototype.update = function (item) {
                var id = item.getID();
                var arr = this._map[id];
                if (typeof arr === "undefined") {
                    return;
                }

                var oldBucket = arr[1];
                var newBucket = this._deepestBucket(item);
                if (oldBucket !== newBucket) {
                    oldBucket.remove(item);

                    newBucket.insert(item);
                    arr[1] = newBucket;
                }
            };

            WorldQuadtree.prototype.remove = function (item) {
                var id = item.getID();
                var arr = this._map[id];
                if (typeof arr === "undefined") {
                    return;
                }

                var bucket = arr[1];

                bucket.remove(item);
                delete this._map[id];
            };

            WorldQuadtree.prototype.getItemsInRect = function (rect) {
                var items = [];
                this._root.getItemsInRect(rect, items);
                return items;
            };

            WorldQuadtree.prototype._deepestBucket = function (item) {
                var rect = item.getQTRect();
                var b = this._root;
                while (b.isLeaf() === false) {
                    var q = b.getRectQuadrants(rect);
                    if (q.length !== 1)
                        break;
                    b = q[0];
                }
                return b;
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
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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

                dom.on("click", ".loadGame", function () {
                });

                dom.on("click", ".editor", function () {
                    Engine.App.instance.setState("Editor");
                });
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
        var LiveGame = (function (_super) {
            __extends(LiveGame, _super);
            function LiveGame() {
                _super.call(this, {
                    hasUI: true
                });

                this._player = ko.observable();

                this._mainSurface = this.create2dSurface();

                this._selectedEntities = ko.observableArray();

                this._entityGroupIndex = ko.observable(0);

                var self = this;
                this._entityGroups = ko.computed(function () {
                    var groups = [];
                    return groups;
                });
            }
            Object.defineProperty(LiveGame.prototype, "player", {
                get: function () {
                    return this._player();
                },
                enumerable: true,
                configurable: true
            });

            Object.defineProperty(LiveGame.prototype, "selectedEntities", {
                get: function () {
                    return this._selectedEntities();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LiveGame.prototype, "noEntitiesSelected", {
                get: function () {
                    return this._selectedEntities().length === 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LiveGame.prototype, "oneEntitySelected", {
                get: function () {
                    return this._selectedEntities().length === 1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(LiveGame.prototype, "multipleEntitiesSelected", {
                get: function () {
                    return this._selectedEntities().length > 1;
                },
                enumerable: true,
                configurable: true
            });

            LiveGame.prototype.onUICreated = function (dom) {
                this._dom = dom.find("#LiveGame");

                var self = this;
                dom.on("click", ".entityButton", function () {
                    var ent = ko.dataFor(this);
                    var selected = self._selectedEntities();
                    if (selected.length === 1) {
                        self._camera.setCenter(ent.position);
                    } else {
                        self._selectedEntities([ent]);
                    }
                });
            };

            LiveGame.prototype.initialize = function (callback) {
                Engine.AssetManager.load({}, callback);
            };

            LiveGame.prototype.begin = function (callback) {
                var self = this;
                this._loadAssets(function () {
                    self._beginWorld(callback);
                });
            };

            LiveGame.prototype.selectEntities = function (ents, add) {
                this._filterEntities(ents);

                if (add) {
                } else {
                    this._selectedEntities(ents);
                }
            };

            LiveGame.prototype._loadAssets = function (callback) {
                var raceName = "human";
                var terrainType = "forest";

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
                }, callback);
            };

            LiveGame.prototype._beginWorld = function (callback) {
                var world = this._world = new WarNew.World();
                world.decode(WarNew.TEST_WORLD_DATA);

                this._camera = new WarNew.Camera2D(new Engine.Vec2(), world.terrain.unitsWide, world.terrain.unitsDeep);

                this._player(world.getPlayerById(2));

                this._userState = WarNew.UserState.Default;
                this._selectionStart = new Engine.Vec2();
                this._selectionEnd = new Engine.Vec2();
                this._selectionRect = new Engine.Rect();
                this._selectedEntities([]);

                this._dom.attr("race", "human");

                callback();
            };

            LiveGame.prototype._startSelection = function (pageX, pageY) {
                var rect = this._mainSurface.rect;
                this._userState = WarNew.UserState.Selecting;
                this._camera.getPointAt(pageX - rect.x, pageY - rect.y, this._selectionStart);
                this._selectionEnd.fromVec2(this._selectionStart);

                this._selectionRect.fromPoints(this._selectionStart, this._selectionEnd);
            };
            LiveGame.prototype._updateSelection = function (pageX, pageY) {
                var rect = this._mainSurface.rect;
                this._camera.getPointAt(pageX - rect.x, pageY - rect.y, this._selectionEnd);

                this._selectionRect.fromPoints(this._selectionStart, this._selectionEnd);
            };
            LiveGame.prototype._endSelection = function () {
                this._userState = WarNew.UserState.Default;

                var sr = this._selectionRect;
                var ents = this._world.getEntitiesInRect(sr);
                for (var i = ents.length - 1; i !== -1; --i) {
                    var ent = ents[i];
                    if (!ent.selectionRect.intersectsRect(sr))
                        ents.splice(i, 1);
                }

                if (ents.length !== 0) {
                    this.selectEntities(ents, false);
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
                    if (!ent.isSelectable) {
                        ents.splice(i, 1);
                    } else if (!ent.isUnit || ent.owner !== player) {
                        savedEnt = ents.splice(i, 1)[0];
                    }
                }

                if (ents.length === 0 && savedEnt) {
                    ents.push(savedEnt);
                } else {
                    ents.sort(function (a, b) {
                        return (b.priority - a.priority) + (b.type - a.type) * 0.00001;
                    });

                    if (ents.length > WarNew.ENTITY_MAX_SELECTION) {
                        ents.splice(WarNew.ENTITY_MAX_SELECTION, ents.length - WarNew.ENTITY_MAX_SELECTION);
                    }
                }
            };

            LiveGame.prototype.update = function (dt) {
                Engine.AssetManager.getCursor("hand").apply();

                var camera = this._camera;
                var rect = this._mainSurface.rect;
                var mousePos = Engine.Input.getMousePosition();

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

                var userState = this._userState;
                if (userState === WarNew.UserState.Selecting) {
                    this._updateSelection(mousePos.x, mousePos.y);
                }
            };

            LiveGame.prototype.draw = function () {
                var ctx = this._mainSurface.context;
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, this._mainSurface.width, this._mainSurface.height);

                ctx.save();
                 {
                    this._camera.apply(ctx);

                    this._world.terrain.draw(ctx, this._camera.rect);

                    this._world.quadtree.draw(ctx);

                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "#0f0";
                    var selected = this._selectedEntities();
                    for (var i = 0, ii = selected.length; i < ii; ++i) {
                        var ent = selected[i];
                        var sr = ent.selectionRect;
                        ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                    }

                    var ents = this._world.getEntitiesInRect(this._camera.rect);
                    for (var i = 0, ii = ents.length; i < ii; ++i) {
                        ents[i].draw(ctx);
                    }

                    var userState = this._userState;
                    if (userState === WarNew.UserState.Selecting) {
                        var sr = this._selectionRect;
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "#0f0";
                        ctx.strokeRect(sr.x + 0.5, sr.y + 0.5, sr.width, sr.height);
                    }
                }
                ctx.restore();
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
                        this._selectedEntities([]);
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
            };

            LiveGame.prototype.onMouseWheel = function (delta) {
                if (delta > 0) {
                    this._camera.setZoom(this._camera.zoom * (1 + WarNew.CAMERA_ZOOM_INCREMENT));
                } else if (delta < 0) {
                    this._camera.setZoom(this._camera.zoom * (1 - WarNew.CAMERA_ZOOM_INCREMENT));
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
            return LiveGame;
        })(Engine.AppState);
        WarNew.LiveGame = LiveGame;
    })(Engine.WarNew || (Engine.WarNew = {}));
    var WarNew = Engine.WarNew;
})(Engine || (Engine = {}));
