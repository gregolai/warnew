/// <reference path="_include.ts"/>

module Engine.WarNew {

	export interface PortraitParams {
		data: any;
		iconID: string;
		player?: Player;
	}

	function formatIconID(str: string, liveGame: LiveGame): string {
		var player = liveGame.getPlayer();
		if (player) {
			var race = player.getRace();
			str = str.replace(/\{race\}/g, race);
		}
		return str;
	}

	ko.bindingHandlers["Portrait"] = {

		init: function (element: HTMLCanvasElement, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void {

			element.width = 46;
			element.height = 38;

		},
		update: function(element: HTMLCanvasElement, valueAccessor: () => any, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void {
			
			var liveGame = <LiveGame>bindingContext.$root;

			var params = <PortraitParams>valueAccessor();

			var ctx = element.getContext("2d");
			if (!params) {
				ctx.clearRect(0, 0, element.width, element.height);
				return;
			}

			var iconID = formatIconID(params.iconID, liveGame);

			var sprite = AllSpriteData.getSprite(iconID, params.player ? params.player.getID() : undefined);
			if (!sprite) {
				ctx.clearRect(0, 0, element.width, element.height);
				return;
			}

			// TRANSLATE PORTRAIT IF BUTTON IS DOWN
			var downButton = liveGame.getDownButton();
			if (downButton && params.data === ko.dataFor(downButton)) {
				element.style.margin = "1px 0 0 1px";
			} else {
				element.style.margin = "0";
			}
			

			ctx.drawImage(
				sprite.image,
				sprite.x, sprite.y,
				sprite.width, sprite.height,
				0, 0,
				element.width, element.height
			);
		}

	};

}