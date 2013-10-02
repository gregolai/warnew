/// <reference path="_include.ts"/>

module Engine.Breakout {

	export class Slot {
		
		private _stage: Stage;
		private _index: number;
		private _px: number;
		private _py: number;
		private _block: Block;

		get px() { return this._px; }
		get py() { return this._py; }
		get block() { return this._block; }

		constructor(stage: Stage, index: number, px: number, py: number) {
			this._stage = stage;
			this._index = index;
			this._px = px;
			this._py = py;
			this._block = null;
		}

		dispose(): void {
			this._stage = null;
			this.removeBlock();
		}

		addBlock(blockType: BlockType): void {

			this.removeBlock();

			if (blockType !== BlockType.None) {
				this._block = new Block(this._stage, this, blockType);
			}
		}

		removeBlock(): void {

			if (this._block) {
				this._block.dispose();
				this._block = null;
			}
		}

		draw(ctx: CanvasRenderingContext2D): void {

			if (this._block) {
				this._block.draw(ctx);
			}

		}
	}

}