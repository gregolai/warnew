/*
interface WaitForImagesFinished {
	(): void;
}

interface WaitForImagesEach {
	(imgsLoaded?: number, imgsLength?: number, loadType?: boolean): void;
}

interface WaitForImages_Options {
	finished?: WaitForImagesFinished;
	each?: WaitForImagesEach;
	waitForAll?: boolean;
}
*/

interface JQuery {

	waitForImages(options: {
		finished?: Function;
		each?: Function;
		waitForAll?: boolean;
	}): JQuery;

	waitForImages(
		finishedCallback?: Function,
		eachCallback?: Function,
		waitForAll?: boolean
	): JQuery;

}

interface JQueryStatic {
	waitForImages: {
		hasImageProperties: string[];
	};
}