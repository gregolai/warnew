/// <reference path="_include.ts"/>

module Engine.Game {

	export interface GlobalPopupParams {
		message: string;
		onOk?: () => void;
		onCancel?: () => void;
		btnCustom?: {
			text: string;
			callback: () => void;
		}
	}

	export class Global extends AppState {

		static instance: Global;

		_popupSettings: KnockoutObservable<GlobalPopupParams>;

		getPopupSettings() { return this._popupSettings(); }

		isActive() { return true; }

		constructor() {
			super();
			Global.instance = this;
		}

		initialize(callback: () => void): void {

			this._popupSettings = ko.observable<GlobalPopupParams>();

			callback();
		}

		bindEvents(dom: JQuery): void {

			var self = this;
			function onClick(cb: ()=> void) {
				if (cb) {
					self._popupSettings(null);	// exit popup
					cb();
				}
			}

			dom.on("click", ".btn.ok", function () {
				var s = self._popupSettings();
				onClick(s.onOk);
			});

			dom.on("click", ".btn.cancel", function () {
				var s = self._popupSettings();
				onClick(s.onCancel);
			});

			dom.on("click", ".btn.custom", function () {
				var s = self._popupSettings();
				if (s.btnCustom)
					onClick(s.btnCustom.callback);
			});

		}

		onAppStateChange(from: AppState, to: AppState): void {
		}

		popup(p: GlobalPopupParams): void {

			// pop up full screen notification
			this._popupSettings(p);
		}
	}

}
