/// <reference path="_include.ts"/>

module Engine.WarNew {

	export interface SequenceParams {
		type: SequenceType;			// type of sequence
		image: HTMLImageElement;
		frames: number[];			// frame indices
		frameTick: number;			// how fast to flip frames
		frameWidth: number;
		frameHeight: number;
		direction?: Direction;
	}

	export class Sequence {
		private static _dirToFrameX = [0, 2, 0, 1, 2, 0, 1, 0, 4, 3, 0, 0, 3, 0, 0, 0];

		private _type: SequenceType;
		private _image: HTMLImageElement;
		private _frames: number[];
		private _frameTick: number;			// how fast to flip frames
		private _frameWidth: number;
		private _frameHeight: number;

		private _ticks: number;
		private _frameIndex: number;
		private _xPosition: number;
		private _yPosition: number;
		private _flipX: boolean;
		private _elapsed: boolean;

		get frameWidth() { return this._frameWidth; }
		get frameHeight() { return this._frameHeight; }

		constructor(params: SequenceParams) {
			this._type = params.type;
			this._image = params.image;
			this._frames = params.frames;
			this._frameTick = params.frameTick;
			this._frameWidth = params.frameWidth;
			this._frameHeight = params.frameHeight;

			this.reset();
			this.setDirection(params.direction);
		}

		reset(): void {
			this._ticks = 0;
			this._frameIndex = 0;
			this._xPosition = 0;
			this._yPosition = 0;
			this._flipX = false;
			this._elapsed = false;

			this._frameAdjust();
		}

		setImage(image: HTMLImageElement): void {
			this._image = image;
		}

		update(): SequenceUpdateResult {

			if (this._frameTick !== 0) {

				++this._ticks;
				if (this._ticks >= this._frameTick) {
					return this.incrementFrame();
				} else {
					return SequenceUpdateResult.Default;
				}
			}
		}

		incrementFrame(): SequenceUpdateResult {
			this._ticks = 0;

			var ret = SequenceUpdateResult.FrameIncremented;

			// INCREMENT FRAME
			++this._frameIndex;
			if (this._frameIndex >= this._frames.length) {
				this._frameIndex = 0;
				this._elapsed = true;
				ret = SequenceUpdateResult.SequenceElapsed;
			}

			this._frameAdjust();

			return ret;
		}

		setDirection(direction?: Direction): void {

			if (this._type === SequenceType.Directional) {

				if (!direction)
					direction = Direction.Down;

				this._xPosition = Sequence._dirToFrameX[direction] * this._frameWidth;
				this._flipX = ((direction & Direction.Left) !== 0);
			}
		}

		drawAtCenter(ctx: CanvasRenderingContext2D, x: number, y: number): void {
			this._draw(ctx, x, y, true);
		}

		drawAtCorner(ctx: CanvasRenderingContext2D, x: number, y: number): void {
			this._draw(ctx, x, y, false);
		}

		// SETS THE X AND Y POSITIONS USING THE FRAME INDEX
		private _frameAdjust(): void {
			if (this._type === SequenceType.Directional) {

				this._yPosition = this._frames[this._frameIndex] * this._frameHeight;

			} else if (this._type === SequenceType.Vertical) {

				this._yPosition = this._frames[this._frameIndex] * this._frameHeight;

			} else {

				// NOTE: 0.2 is 1/(5 frames wide)
				this._yPosition = Math.floor(this._frameIndex * 0.2);
				this._xPosition = this._frameIndex % 5;
			}
		}

		private _draw(ctx: CanvasRenderingContext2D, x: number, y: number, atCenter: boolean): void {

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

			ctx.drawImage(
				this._image,
				this._xPosition, this._yPosition,
				frameWidth, frameHeight,
				x, y,
				frameWidth, frameHeight);

			if (this._flipX) {
				ctx.restore();
			}

		}
	}

}