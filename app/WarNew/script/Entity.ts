/// <reference path="_include.ts"/>

module Engine.WarNew {

	export interface EntityParams {
		type: EntityType;
		owner: Player;
		posX: number;
		posY: number;
	}

	export class Entity implements IQuadtreeItem {

		getID(): number {
			return this._id;
		}
		getQTRect(): Rect {
			return this._drawRect;
		}

		private _id: number;
		private _world: World;
		private _type: EntityType;
		private _owner: KnockoutObservable<Player>;
		private _data: EntityData;

		private _position: Vec2;
		private _selectionRect: Rect;			// update when position changes
		private _drawRect: Rect;

		private _direction: Direction;
		private _currentSequence: Sequence;
		private _sequences: { [name: string]: Sequence; };

		private _health: KnockoutObservable<number>;

		get id() { return this._id; }
		get type() { return this._type; }
		get owner() { return this._owner(); }

		get position() { return this._position; }
		get selectionRect() { return this._selectionRect; }
		get drawRect() { return this._drawRect; }

		// GET STATIC DATA STATS
		get iconID() { return this._data.iconId; }
		get isSelectable() { return this._data.selectable; }
		get isStructure() { return this._data.isStructure; }
		get isUnit() { return this._data.isUnit; }
		get priority() { return this._data.priority; }
		get sight() { return this._data.sight; }

		// GET COMPUTED DATA STATS
		get armor() { return this._data.armorBase; }
		get damageMin() { return this._data.weaponDamageBase; }
		get damageMax() { return this._data.weaponDamageBase + this._data.weaponDamageRandom; }
		get health() { return this._health(); }
		get healthMax() { return this._data.healthMax; }

		constructor(id: number, world: World, data: EntityData, p: EntityParams) {

			this._id = id;
			this._world = world;
			this._type = p.type;
			this._owner = ko.observable(p.owner);
			this._data = Data.AllEntityData[p.type];

			this._position = new Vec2(p.posX, p.posY);

			var boxWidth = data.isUnit ? data.boxWidth : data.tilesWide * TILE_SIZE;
			var boxHeight = data.isUnit ? data.boxHeight : data.tilesHigh * TILE_SIZE;

			this._selectionRect = new Rect(0, 0, boxWidth, boxHeight);
			this._drawRect = new Rect(0, 0, boxWidth, boxHeight);
			
			// SEQUENCE STUFF
			this._direction = Direction.Down;
			this._currentSequence = null;
			this._sequences = {};
			this._initSequences();

			this._health = ko.observable(this.healthMax);

			this._setSequence("idle");
			this._updateRects();

			/*
			// HEALTHBAR UPDATE DEBUG
			var self = this;
			setTimeout(function () {
				self._health(self.healthMax * 0.8);
				setTimeout(function () {
					self._health(self.healthMax * 0.5);
					setTimeout(function () {
						self._health(self.healthMax * 0.2);
					}, 5000);
				}, 5000);

			}, 5000);
			*/
		}


		draw(ctx: CanvasRenderingContext2D): void {

			//var dr = this._drawRect;
			//ctx.fillStyle = "#fff";
			//ctx.fillRect(dr.x, dr.y, dr.width, dr.height);

			var pos = this._position;
			this._currentSequence.drawAtCenter(ctx, pos.x, pos.y);
		}

		private _initSequences(): void {

			var obj = this._data.sequences;
			var names = ["attack", "construction", "construction_site", "idle", "move"];
			for (var i = 0, ii = names.length; i < ii; ++i) {

				var name = names[i];
				var seqData = <AnimationSequenceData>obj[name];
				if (seqData) {
					var image = ImageCache.getImage(seqData.imageID || obj.imageID, this._owner().id);

					this._sequences[name] = new Sequence({
						type: seqData.type || obj.type,
						image: image,
						frameWidth: seqData.frameWidth || obj.frameWidth,
						frameHeight: seqData.frameHeight || obj.frameHeight,
						frames: seqData.frames,
						frameTick: seqData.frameTick
					});
				}

			}
		}

		private _setSequence(sequenceName: string, direction?: Direction): void {

			var sequence = this._sequences[sequenceName];
			if (sequence) {
				if (sequence !== this._currentSequence) {
					sequence.reset();
					this._currentSequence = sequence;

					// UPDATE DRAW RECT TO FIT FRAME
					var fw = sequence.frameWidth;
					var fh = sequence.frameHeight;
					var dr = this._drawRect;
					dr.x		= this._position.x - (fw >> 1);
					dr.y		= this._position.y - (fh >> 1);
					dr.width	= fw;
					dr.height	= fh;
				}

				if (direction) {
					this._direction = direction;
				}
				sequence.setDirection(this._direction);
			}
		}

		private _updateRects(): void {

			var sr = this._selectionRect;
			sr.x = this._position.x - (sr.width >> 1);
			sr.y = this._position.y - (sr.height >> 1);

			var dr = this._drawRect;

			dr.x = this._position.x - (dr.width >> 1);
			dr.y = this._position.y - (dr.height >> 1);
		}
	}

}