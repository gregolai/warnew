/// <reference path="_include.ts"/>

module Engine.WarNew {

	ko.bindingHandlers["portrait"] = {

		init: function (element: HTMLCanvasElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

			element.width = 46;
			element.height = 38;

		},
		update: function(element: HTMLCanvasElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

			var ctx = element.getContext("2d");
			if (!entity) {
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				return;
			}

			var sprite = AllSpriteData.getSprite(entity.iconID, entity.owner.id);
			if (!sprite) {
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				return;
			}

			ctx.drawImage(
				sprite.image,
				sprite.x, sprite.y,
				sprite.width, sprite.height,
				0, 0,
				ctx.canvas.width, ctx.canvas.height
			);
		}

	};

}