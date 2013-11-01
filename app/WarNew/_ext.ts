/// <reference path="_include.ts"/>

interface KnockoutObservableFunctions {
	subscribeChanged<T>(callback: (oldVal: T, newVal: T) => void, ignoreNoChange?: boolean): KnockoutObservable<T>;
}

ko.observable.fn.subscribeChanged = function<T>(callback: (oldVal: T, newVal: T) => void, ignoreNoChange?: boolean): KnockoutObservable<T> {
	var _oldVal: T;
	(<KnockoutObservable>this).subscribe(function (oldVal: T) {
		_oldVal = oldVal;
	}, this, "beforeChange");
	(<KnockoutObservable>this).subscribe(function (newVal: T) {
		if (ignoreNoChange && _oldVal === newVal)
			return;
		callback(_oldVal, newVal);
	});
	return (<KnockoutObservable>this);
};