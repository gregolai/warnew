/// <reference path="_include.ts"/>

module Engine.Game {

	Vendor.onVendorsLoaded(function () {

		ko.bindingHandlers["Healthbar"] = {

			init: function (element: HTMLDivElement, valueAccessor: () => Entity, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void {

			},
			update: function (element: HTMLDivElement, valueAccessor: () => Entity, allBindingsAccessor: () => any, viewModel: any, bindingContext: KnockoutBindingContext): void {

				var entity = valueAccessor();

				var mh = entity.getHealthMax();
				if (mh === 0)
					return;

				var percent = Math.floor((entity.getHealth() / mh) * 100);

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

	}); // onVendorsLoaded(...)

}