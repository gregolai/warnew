/// <reference path="_include.ts"/>

module Engine.WarNew {

	ko.bindingHandlers["healthbar"] = {

		init: function (element: HTMLDivElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {

		},
		update: function(element: HTMLDivElement, valueAccessor: () => any, allBindingsAccessor: () => any, entity: Entity, bindingContext: KnockoutBindingContext): void {
			// This will be called once when the binding is first applied to an element,
			// and again whenever the associated observable changes value.
			// Update the DOM element based on the supplied values here.

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