/// <reference path="_include.ts"/>

module Engine.Game {
	/*
	interface KnockoutObservableFunctions<T> {
		subscribeChanged<T>(callback: (oldVal: T, newVal: T) => void, ignoreNoChange?: boolean): KnockoutObservable<T>;
	}

	ko.observable.fn["subscribeChanged"] = function <T>(callback: (oldVal: T, newVal: T) => void, ignoreNoChange?: boolean): KnockoutObservable<T> {
		var _oldVal: T;
		(<KnockoutObservable<T>>this).subscribe(function (oldVal: T) {
			_oldVal = oldVal;
		}, this, "beforeChange");
		(<KnockoutObservable<T>>this).subscribe(function (newVal: T) {
			if (ignoreNoChange && _oldVal === newVal)
				return;
			callback(_oldVal, newVal);
		});
		return (<KnockoutObservable<T>>this);
	};
	*/

	export function koSubscribeChanged<T>(observable: KnockoutObservable<T>, callback: (oldVal: T, newVal: T) => void, ignoreNoChange?: boolean): void {

		var _oldVal: T;
		observable.subscribe(function (oldVal: T) {
			_oldVal = oldVal;
		}, observable, "beforeChange");
		observable.subscribe(function (newVal: T) {
			if (!ignoreNoChange || _oldVal !== newVal)
				callback(_oldVal, newVal);
		});

	}

}