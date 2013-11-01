declare class Compressor {
	pushBool(v: boolean): void;
	pushInt(v: number): void;
	pushFloat(v: number): void;
	pushString(v: string): void;
	popBool(): boolean;
	popInt(): number;
	popFloat(): number;
	popString(): string;
}