/// <reference path="_include.ts"/>

module Engine.WarNew {

	ko.bindingHandlers["Portrait"] = {

		init: function (element: HTMLCanvasElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

			element.width = 46;
			element.height = 38;

		},
		update: function(element: HTMLCanvasElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

			var liveGame = <LiveGame>bindingContext.$root;

			var ctx = element.getContext("2d");
			if (!entity) {
				ctx.clearRect(0, 0, element.width, element.height);
				return;
			}

			var sprite = AllSpriteData.getSprite(entity.iconID, entity.owner.id);
			if (!sprite) {
				ctx.clearRect(0, 0, element.width, element.height);
				return;
			}

			// TRANSLATE PORTRAIT IF BUTTON IS DOWN
			var downButton = liveGame.downButton;
			if (downButton && entity === ko.dataFor(downButton)) {
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