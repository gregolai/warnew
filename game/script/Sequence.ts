/// <reference path="_include.ts"/>

module Engine.Game {

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

		frameWidth: number;
		frameHeight: number;

		private _type: SequenceType;
		private _image: HTMLImageElement;
		private _frames: number[];
		private _frameTick: number;			// how fast to flip frames

		private _ticks: number;
		private _frameIndex: number;
		private _xPosition: number;
		private _yPosition: number;
		private _flipX: boolean;
		private _elapsed: boolean;

		constructor(params: SequenceParams) {
			this.frameWidth = params.frameWidth;
			this.frameHeight = params.frameHeight;

			this._type = params.type;
			this._image = params.image;
			this._frames = params.frames;
			this._frameTick = params.frameTick;

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

				this._xPosition = Sequence._dirToFrameX[direction] * this.frameWidth;
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

				this._yPosition = this._frames[this._frameIndex] * this.frameHeight;

			} else if (this._type === SequenceType.Vertical) {

				this._yPosition = this._frames[this._frameIndex] * this.frameHeight;

			} else {

				// NOTE: 0.2 is 1/(5 frames wide)
				this._yPosition = Math.floor(this._frameIndex * 0.2);
				this._xPosition = this._frameIndex % 5;
			}
		}

		private _draw(ctx: CanvasRenderingContext2D, x: number, y: number, atCenter: boolean): void {

			if (!this._image)
				return;

			// AVOID SUB-PIXEL ANTI-ALIASING
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

			ctx.drawImage(
				this._image,
				this._xPosition, this._yPosition,
				fw, fh,
				x, y,
				fw, fh);

			if (this._flipX)
				ctx.scale(-1, 1);

		}
	}

}