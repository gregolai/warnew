/// <reference path="_include.ts"/>

module Engine.WarNew {

	ko.bindingHandlers["Healthbar"] = {

		init: function (element: HTMLDivElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

		},
		update: function(element: HTMLDivElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

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

}