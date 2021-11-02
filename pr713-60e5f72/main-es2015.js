(self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 61729:
/*!**************************************************!*\
  !*** ./dist/cdk/fesm2015/ptsecurity-cdk-a11y.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveDescendantKeyManager": function() { return /* binding */ ActiveDescendantKeyManager; },
/* harmony export */   "FocusKeyManager": function() { return /* binding */ FocusKeyManager; },
/* harmony export */   "ListKeyManager": function() { return /* binding */ ListKeyManager; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33927);





/* tslint:disable:member-ordering */
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */
class ListKeyManager {
    constructor(_items) {
        this._items = _items;
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        /** Stream that emits whenever the active item of the list manager changes. */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.previousActiveItemIndex = -1;
        this._activeItemIndex = -1;
        this.wrap = false;
        this.letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
        this.vertical = true;
        this.scrollSize = 0;
        // Buffer for the letters that the user has pressed when the typeahead option is turned on.
        this.pressedLetters = [];
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this.skipPredicateFn = (item) => item.disabled;
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.QueryList) {
            _items.changes.subscribe((newItems) => {
                if (this._activeItem) {
                    const itemArray = newItems.toArray();
                    const newIndex = itemArray.indexOf(this._activeItem);
                    if (newIndex > -1 && newIndex !== this._activeItemIndex) {
                        this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    // Index of the currently active item.
    get activeItemIndex() {
        return this._activeItemIndex;
    }
    // The active item.
    get activeItem() {
        return this._activeItem;
    }
    withScrollSize(scrollSize) {
        this.scrollSize = scrollSize;
        return this;
    }
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     */
    withWrap() {
        this.wrap = true;
        return this;
    }
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    withVerticalOrientation(enabled = true) {
        this.vertical = enabled;
        return this;
    }
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    withHorizontalOrientation(direction) {
        this.horizontal = direction;
        return this;
    }
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param searchLetterIndex letter index for incremental search, if is -1 search is disabled
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    withTypeAhead(debounceInterval = 200, searchLetterIndex = 0) {
        if (this._items.length && this._items.some((item) => typeof item.getLabel !== 'function')) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this.typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters and convert those
        // letters back into a string. Afterwards find the first item that starts with that string and select it.
        this.typeaheadSubscription = this.letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((keyCode) => this.pressedLetters.push(keyCode)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(debounceInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(() => this.pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => this.pressedLetters.join(''))).subscribe((inputString) => {
            if (searchLetterIndex === -1) {
                this.pressedLetters = [];
                return;
            }
            const items = this._items.toArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (let i = 1; i < items.length + 1; i++) {
                const index = (this._activeItemIndex + i) % items.length;
                const item = items[index];
                if (!item.disabled &&
                    item.getLabel().toUpperCase().trim().indexOf(inputString) === searchLetterIndex) {
                    this.setActiveItem(index);
                    break;
                }
            }
            this.pressedLetters = [];
        });
        return this;
    }
    /**
     * Sets the active item to the item at the index specified.
     * @param item The index of the item to be set as active.
     */
    setActiveItem(item) {
        this.previousActiveItemIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== this.previousActiveItemIndex) {
            this.change.next(this._activeItemIndex);
        }
    }
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    onKeydown(event) {
        // tslint:disable-next-line: deprecation
        const keyCode = event.keyCode;
        switch (keyCode) {
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.TAB:
                this.tabOut.next();
                return;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
                if (this.vertical) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
                if (this.vertical) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
                if (this.horizontal === 'ltr') {
                    this.setNextItemActive();
                    break;
                }
                else if (this.horizontal === 'rtl') {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
                if (this.horizontal === 'ltr') {
                    this.setPreviousItemActive();
                    break;
                }
                else if (this.horizontal === 'rtl') {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                    this.letterKeyStream.next(event.key.toLocaleUpperCase());
                }
                else if ((keyCode >= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.A && keyCode <= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.Z) || (keyCode >= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ZERO && keyCode <= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.NINE)) {
                    this.letterKeyStream.next(String.fromCharCode(keyCode));
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this.pressedLetters = [];
        event.preventDefault();
    }
    // Sets the active item to the first enabled item in the list.
    setFirstItemActive() {
        this.setActiveItemByIndex(0, 1);
    }
    // Sets the active item to the last enabled item in the list.
    setLastItemActive() {
        this.setActiveItemByIndex(this._items.length - 1, -1);
    }
    // Sets the active item to the next enabled item in the list.
    setNextItemActive() {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this.setActiveItemByDelta(1);
    }
    // Sets the active item to a previous enabled item in the list.
    setPreviousItemActive() {
        this._activeItemIndex < 0 && this.wrap ? this.setLastItemActive()
            : this.setActiveItemByDelta(-1);
    }
    setNextPageItemActive(delta = this.scrollSize) {
        const nextItemIndex = this._activeItemIndex + delta;
        if (nextItemIndex >= this._items.length) {
            this.setLastItemActive();
        }
        else {
            this.setActiveItemByDelta(delta);
        }
    }
    setPreviousPageItemActive(delta = this.scrollSize) {
        const nextItemIndex = this._activeItemIndex - delta;
        if (nextItemIndex <= 0) {
            this.setFirstItemActive();
        }
        else {
            this.setActiveItemByDelta(-delta);
        }
    }
    updateActiveItem(item) {
        const itemArray = this._items.toArray();
        const index = typeof item === 'number' ? item : itemArray.indexOf(item);
        this._activeItemIndex = index;
        this._activeItem = itemArray[index];
    }
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     */
    setActiveItemByDelta(delta) {
        this.wrap ? this.setActiveInWrapMode(delta) : this.setActiveInDefaultMode(delta);
    }
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    setActiveInWrapMode(delta) {
        const items = this.getItemsArray();
        for (let i = 1; i <= items.length; i++) {
            const index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            const item = items[index];
            if (!this.skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    }
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    setActiveInDefaultMode(delta) {
        this.setActiveItemByIndex(this._activeItemIndex + delta, delta);
    }
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    setActiveItemByIndex(index, fallbackDelta) {
        const items = this.getItemsArray();
        if (!items[index]) {
            return;
        }
        let curIndex = index;
        while (this.skipPredicateFn(items[curIndex])) {
            curIndex += fallbackDelta;
            if (!items[curIndex]) {
                return;
            }
        }
        this.setActiveItem(curIndex);
    }
    /** Returns the items as an array. */
    getItemsArray() {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__.QueryList ? this._items.toArray() : this._items;
    }
}
/* tslint:enable:member-ordering */

class ActiveDescendantKeyManager extends ListKeyManager {
    /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     */
    setActiveItem(index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }
}

class FocusKeyManager extends ListKeyManager {
    constructor() {
        super(...arguments);
        this.origin = 'program';
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    setFocusOrigin(origin) {
        this.origin = origin;
        return this;
    }
    setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
            this.activeItem.focus(this.origin);
        }
    }
}

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 45051:
/*!******************************************************!*\
  !*** ./dist/cdk/fesm2015/ptsecurity-cdk-datetime.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateAdapter": function() { return /* binding */ DateAdapter; },
/* harmony export */   "MC_DATE_FORMATS": function() { return /* binding */ MC_DATE_FORMATS; },
/* harmony export */   "MC_DATE_LOCALE": function() { return /* binding */ MC_DATE_LOCALE; },
/* harmony export */   "MC_DATE_LOCALE_FACTORY": function() { return /* binding */ MC_DATE_LOCALE_FACTORY; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);



const MC_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-date-formats');

/** InjectionToken for datepicker that can be used to override default locale code. */
const MC_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MC_DATE_LOCALE', {
    providedIn: 'root',
    factory: MC_DATE_LOCALE_FACTORY
});
/** @docs-private */
// tslint:disable-next-line:naming-convention
function MC_DATE_LOCALE_FACTORY() {
    return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */
// tslint:disable-next-line:naming-convention
class DateAdapter {
    constructor() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    /** A stream that emits when the locale changes. */
    get localeChanges() {
        return this._localeChanges;
    }
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    deserialize(value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    }
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    setLocale(locale) {
        this.locale = locale;
        this._localeChanges.next();
    }
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDate(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    }
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    compareDateTime(first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second) ||
            this.getHours(first) - this.getHours(second) ||
            this.getMinutes(first) - this.getMinutes(second) ||
            this.getSeconds(first) - this.getSeconds(second) ||
            this.getMilliseconds(first) - this.getMilliseconds(second);
    }
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    sameDate(first, second) {
        if (first && second) {
            const firstValid = this.isValid(first);
            const secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid === secondValid;
        }
        return first === second;
    }
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    clampDate(date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    }
}

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 32121:
/*!******************************************************!*\
  !*** ./dist/cdk/fesm2015/ptsecurity-cdk-keycodes.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": function() { return /* binding */ A; },
/* harmony export */   "ALT": function() { return /* binding */ ALT; },
/* harmony export */   "APOSTROPHE": function() { return /* binding */ APOSTROPHE; },
/* harmony export */   "AT_SIGN": function() { return /* binding */ AT_SIGN; },
/* harmony export */   "B": function() { return /* binding */ B; },
/* harmony export */   "BACKSLASH": function() { return /* binding */ BACKSLASH; },
/* harmony export */   "BACKSPACE": function() { return /* binding */ BACKSPACE; },
/* harmony export */   "C": function() { return /* binding */ C; },
/* harmony export */   "CAPS_LOCK": function() { return /* binding */ CAPS_LOCK; },
/* harmony export */   "CLOSE_SQUARE_BRACKET": function() { return /* binding */ CLOSE_SQUARE_BRACKET; },
/* harmony export */   "COMMA": function() { return /* binding */ COMMA; },
/* harmony export */   "CONTEXT_MENU": function() { return /* binding */ CONTEXT_MENU; },
/* harmony export */   "CONTROL": function() { return /* binding */ CONTROL; },
/* harmony export */   "D": function() { return /* binding */ D; },
/* harmony export */   "DASH": function() { return /* binding */ DASH; },
/* harmony export */   "DELETE": function() { return /* binding */ DELETE; },
/* harmony export */   "DOWN_ARROW": function() { return /* binding */ DOWN_ARROW; },
/* harmony export */   "E": function() { return /* binding */ E; },
/* harmony export */   "EIGHT": function() { return /* binding */ EIGHT; },
/* harmony export */   "END": function() { return /* binding */ END; },
/* harmony export */   "ENTER": function() { return /* binding */ ENTER; },
/* harmony export */   "EQUALS": function() { return /* binding */ EQUALS; },
/* harmony export */   "ESCAPE": function() { return /* binding */ ESCAPE; },
/* harmony export */   "F": function() { return /* binding */ F; },
/* harmony export */   "F1": function() { return /* binding */ F1; },
/* harmony export */   "F10": function() { return /* binding */ F10; },
/* harmony export */   "F11": function() { return /* binding */ F11; },
/* harmony export */   "F12": function() { return /* binding */ F12; },
/* harmony export */   "F2": function() { return /* binding */ F2; },
/* harmony export */   "F3": function() { return /* binding */ F3; },
/* harmony export */   "F4": function() { return /* binding */ F4; },
/* harmony export */   "F5": function() { return /* binding */ F5; },
/* harmony export */   "F6": function() { return /* binding */ F6; },
/* harmony export */   "F7": function() { return /* binding */ F7; },
/* harmony export */   "F8": function() { return /* binding */ F8; },
/* harmony export */   "F9": function() { return /* binding */ F9; },
/* harmony export */   "FF_EQUALS": function() { return /* binding */ FF_EQUALS; },
/* harmony export */   "FF_MINUS": function() { return /* binding */ FF_MINUS; },
/* harmony export */   "FF_MUTE": function() { return /* binding */ FF_MUTE; },
/* harmony export */   "FF_SEMICOLON": function() { return /* binding */ FF_SEMICOLON; },
/* harmony export */   "FF_VOLUME_DOWN": function() { return /* binding */ FF_VOLUME_DOWN; },
/* harmony export */   "FF_VOLUME_UP": function() { return /* binding */ FF_VOLUME_UP; },
/* harmony export */   "FIRST_MEDIA": function() { return /* binding */ FIRST_MEDIA; },
/* harmony export */   "FIVE": function() { return /* binding */ FIVE; },
/* harmony export */   "FOUR": function() { return /* binding */ FOUR; },
/* harmony export */   "G": function() { return /* binding */ G; },
/* harmony export */   "H": function() { return /* binding */ H; },
/* harmony export */   "HOME": function() { return /* binding */ HOME; },
/* harmony export */   "I": function() { return /* binding */ I; },
/* harmony export */   "INSERT": function() { return /* binding */ INSERT; },
/* harmony export */   "J": function() { return /* binding */ J; },
/* harmony export */   "K": function() { return /* binding */ K; },
/* harmony export */   "L": function() { return /* binding */ L; },
/* harmony export */   "LAST_MEDIA": function() { return /* binding */ LAST_MEDIA; },
/* harmony export */   "LEFT_ARROW": function() { return /* binding */ LEFT_ARROW; },
/* harmony export */   "M": function() { return /* binding */ M; },
/* harmony export */   "MAC_ENTER": function() { return /* binding */ MAC_ENTER; },
/* harmony export */   "MAC_META": function() { return /* binding */ MAC_META; },
/* harmony export */   "MAC_WK_CMD_LEFT": function() { return /* binding */ MAC_WK_CMD_LEFT; },
/* harmony export */   "MAC_WK_CMD_RIGHT": function() { return /* binding */ MAC_WK_CMD_RIGHT; },
/* harmony export */   "META": function() { return /* binding */ META; },
/* harmony export */   "MUTE": function() { return /* binding */ MUTE; },
/* harmony export */   "N": function() { return /* binding */ N; },
/* harmony export */   "NINE": function() { return /* binding */ NINE; },
/* harmony export */   "NUMPAD_DIVIDE": function() { return /* binding */ NUMPAD_DIVIDE; },
/* harmony export */   "NUMPAD_EIGHT": function() { return /* binding */ NUMPAD_EIGHT; },
/* harmony export */   "NUMPAD_FIVE": function() { return /* binding */ NUMPAD_FIVE; },
/* harmony export */   "NUMPAD_FOUR": function() { return /* binding */ NUMPAD_FOUR; },
/* harmony export */   "NUMPAD_MINUS": function() { return /* binding */ NUMPAD_MINUS; },
/* harmony export */   "NUMPAD_MULTIPLY": function() { return /* binding */ NUMPAD_MULTIPLY; },
/* harmony export */   "NUMPAD_NINE": function() { return /* binding */ NUMPAD_NINE; },
/* harmony export */   "NUMPAD_ONE": function() { return /* binding */ NUMPAD_ONE; },
/* harmony export */   "NUMPAD_PERIOD": function() { return /* binding */ NUMPAD_PERIOD; },
/* harmony export */   "NUMPAD_PLUS": function() { return /* binding */ NUMPAD_PLUS; },
/* harmony export */   "NUMPAD_SEVEN": function() { return /* binding */ NUMPAD_SEVEN; },
/* harmony export */   "NUMPAD_SIX": function() { return /* binding */ NUMPAD_SIX; },
/* harmony export */   "NUMPAD_THREE": function() { return /* binding */ NUMPAD_THREE; },
/* harmony export */   "NUMPAD_TWO": function() { return /* binding */ NUMPAD_TWO; },
/* harmony export */   "NUMPAD_ZERO": function() { return /* binding */ NUMPAD_ZERO; },
/* harmony export */   "NUM_CENTER": function() { return /* binding */ NUM_CENTER; },
/* harmony export */   "NUM_LOCK": function() { return /* binding */ NUM_LOCK; },
/* harmony export */   "O": function() { return /* binding */ O; },
/* harmony export */   "ONE": function() { return /* binding */ ONE; },
/* harmony export */   "OPEN_SQUARE_BRACKET": function() { return /* binding */ OPEN_SQUARE_BRACKET; },
/* harmony export */   "P": function() { return /* binding */ P; },
/* harmony export */   "PAGE_DOWN": function() { return /* binding */ PAGE_DOWN; },
/* harmony export */   "PAGE_UP": function() { return /* binding */ PAGE_UP; },
/* harmony export */   "PAUSE": function() { return /* binding */ PAUSE; },
/* harmony export */   "PERIOD": function() { return /* binding */ PERIOD; },
/* harmony export */   "PLUS_SIGN": function() { return /* binding */ PLUS_SIGN; },
/* harmony export */   "PRINT_SCREEN": function() { return /* binding */ PRINT_SCREEN; },
/* harmony export */   "Q": function() { return /* binding */ Q; },
/* harmony export */   "QUESTION_MARK": function() { return /* binding */ QUESTION_MARK; },
/* harmony export */   "R": function() { return /* binding */ R; },
/* harmony export */   "RIGHT_ARROW": function() { return /* binding */ RIGHT_ARROW; },
/* harmony export */   "S": function() { return /* binding */ S; },
/* harmony export */   "SCROLL_LOCK": function() { return /* binding */ SCROLL_LOCK; },
/* harmony export */   "SEMICOLON": function() { return /* binding */ SEMICOLON; },
/* harmony export */   "SEVEN": function() { return /* binding */ SEVEN; },
/* harmony export */   "SHIFT": function() { return /* binding */ SHIFT; },
/* harmony export */   "SINGLE_QUOTE": function() { return /* binding */ SINGLE_QUOTE; },
/* harmony export */   "SIX": function() { return /* binding */ SIX; },
/* harmony export */   "SLASH": function() { return /* binding */ SLASH; },
/* harmony export */   "SPACE": function() { return /* binding */ SPACE; },
/* harmony export */   "T": function() { return /* binding */ T; },
/* harmony export */   "TAB": function() { return /* binding */ TAB; },
/* harmony export */   "THREE": function() { return /* binding */ THREE; },
/* harmony export */   "TILDE": function() { return /* binding */ TILDE; },
/* harmony export */   "TWO": function() { return /* binding */ TWO; },
/* harmony export */   "U": function() { return /* binding */ U; },
/* harmony export */   "UP_ARROW": function() { return /* binding */ UP_ARROW; },
/* harmony export */   "V": function() { return /* binding */ V; },
/* harmony export */   "VOLUME_DOWN": function() { return /* binding */ VOLUME_DOWN; },
/* harmony export */   "VOLUME_UP": function() { return /* binding */ VOLUME_UP; },
/* harmony export */   "W": function() { return /* binding */ W; },
/* harmony export */   "X": function() { return /* binding */ X; },
/* harmony export */   "Y": function() { return /* binding */ Y; },
/* harmony export */   "Z": function() { return /* binding */ Z; },
/* harmony export */   "ZERO": function() { return /* binding */ ZERO; },
/* harmony export */   "hasModifierKey": function() { return /* binding */ hasModifierKey; },
/* harmony export */   "isControl": function() { return /* binding */ isControl; },
/* harmony export */   "isCopy": function() { return /* binding */ isCopy; },
/* harmony export */   "isDigit": function() { return /* binding */ isDigit; },
/* harmony export */   "isFunctionKey": function() { return /* binding */ isFunctionKey; },
/* harmony export */   "isHorizontalMovement": function() { return /* binding */ isHorizontalMovement; },
/* harmony export */   "isInput": function() { return /* binding */ isInput; },
/* harmony export */   "isLeftBracket": function() { return /* binding */ isLeftBracket; },
/* harmony export */   "isLetterKey": function() { return /* binding */ isLetterKey; },
/* harmony export */   "isNumberKey": function() { return /* binding */ isNumberKey; },
/* harmony export */   "isRightBracket": function() { return /* binding */ isRightBracket; },
/* harmony export */   "isSelectAll": function() { return /* binding */ isSelectAll; },
/* harmony export */   "isVerticalMovement": function() { return /* binding */ isVerticalMovement; }
/* harmony export */ });
/* tslint:disable:no-magic-numbers no-bitwise */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some((modifier) => event[modifier]);
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
function isControl(event) {
    const keyCode = event.which;
    switch (keyCode) {
        case SHIFT:
        case CONTROL:
        case ALT:
            return true;
        default:
            return !!event.metaKey;
    }
}
function isNumberKey(event) {
    const keyCode = event.which ? event.which : event;
    return keyCode >= 49 && keyCode <= 57;
}
function isLetterKey(event) {
    const keyCode = event.which ? event.which : event;
    return keyCode >= 65 && keyCode <= 90;
}
function isFunctionKey(event) {
    const keyCode = event.which ? event.which : event;
    return keyCode >= 112 && keyCode <= 123;
}
function isVerticalMovement(event) {
    return [UP_ARROW, DOWN_ARROW, PAGE_DOWN, PAGE_UP, HOME, END].indexOf(event) !== -1;
}
function isHorizontalMovement(event) {
    return [LEFT_ARROW, RIGHT_ARROW, BACKSPACE, DELETE].indexOf(event) !== -1;
}
function isSelectAll(event) {
    return event.ctrlKey && event.keyCode === 65;
}
function isCopy(event) {
    return event.ctrlKey && event.keyCode === 67;
}
function isInput(event) {
    return event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA';
}
function isLeftBracket(event) {
    return event.code === 'BracketLeft';
}
function isRightBracket(event) {
    return event.code === 'BracketRight';
}
function isDigit(event) {
    return [48, 49, 50, 51, 52, 53, 54, 55, 56, 57].indexOf(event.which) !== -1;
}

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 32790:
/*!**************************************************!*\
  !*** ./dist/cdk/fesm2015/ptsecurity-cdk-tree.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTreeControl": function() { return /* binding */ BaseTreeControl; },
/* harmony export */   "CdkNestedTreeNode": function() { return /* binding */ CdkNestedTreeNode; },
/* harmony export */   "CdkTree": function() { return /* binding */ CdkTree; },
/* harmony export */   "CdkTreeModule": function() { return /* binding */ CdkTreeModule; },
/* harmony export */   "CdkTreeNode": function() { return /* binding */ CdkTreeNode; },
/* harmony export */   "CdkTreeNodeDef": function() { return /* binding */ CdkTreeNodeDef; },
/* harmony export */   "CdkTreeNodeOutlet": function() { return /* binding */ CdkTreeNodeOutlet; },
/* harmony export */   "CdkTreeNodeOutletContext": function() { return /* binding */ CdkTreeNodeOutletContext; },
/* harmony export */   "CdkTreeNodePadding": function() { return /* binding */ CdkTreeNodePadding; },
/* harmony export */   "CdkTreeNodeToggle": function() { return /* binding */ CdkTreeNodeToggle; },
/* harmony export */   "FlatTreeControl": function() { return /* binding */ FlatTreeControl; },
/* harmony export */   "NestedTreeControl": function() { return /* binding */ NestedTreeControl; },
/* harmony export */   "defaultCompareValues": function() { return /* binding */ defaultCompareValues; },
/* harmony export */   "defaultCompareViewValues": function() { return /* binding */ defaultCompareViewValues; },
/* harmony export */   "getTreeControlFunctionsMissingError": function() { return /* binding */ getTreeControlFunctionsMissingError; },
/* harmony export */   "getTreeControlMissingError": function() { return /* binding */ getTreeControlMissingError; },
/* harmony export */   "getTreeMissingMatchingNodeDefError": function() { return /* binding */ getTreeMissingMatchingNodeDefError; },
/* harmony export */   "getTreeMultipleDefaultNodeDefsError": function() { return /* binding */ getTreeMultipleDefaultNodeDefsError; },
/* harmony export */   "getTreeNoValidDataSourceError": function() { return /* binding */ getTreeNoValidDataSourceError; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ 62604);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 25160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);









/** Base tree control. It has basic toggle/expand/collapse operations on a single data node. */

/* tslint:disable-next-line:naming-convention */

class BaseTreeControl {
  constructor() {
    /** A selection model with multi-selection to track expansion status. */
    this.expansionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.SelectionModel(true);
    this.filterModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__.SelectionModel(true);
    this.filterValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
  }
  /** Toggles one single data node's expanded/collapsed state. */


  toggle(dataNode) {
    if (this.filterValue.value) {
      return;
    }

    this.expansionModel.toggle(dataNode);
  }
  /** Expands one single data node. */


  expand(dataNode) {
    if (this.filterValue.value) {
      return;
    }

    this.expansionModel.select(dataNode);
  }
  /** Collapses one single data node. */


  collapse(dataNode) {
    if (this.filterValue.value) {
      return;
    }

    this.expansionModel.deselect(dataNode);
  }
  /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */


  isExpanded(dataNode) {
    return this.expansionModel.isSelected(dataNode);
  }
  /** Toggles a subtree rooted at `node` recursively. */


  toggleDescendants(dataNode) {
    this.expansionModel.isSelected(dataNode) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
  }
  /** Collapse all dataNodes in the tree. */


  collapseAll() {
    this.expansionModel.clear();
  }
  /** Expands a subtree rooted at given data node recursively. */


  expandDescendants(dataNode) {
    const toBeProcessed = [dataNode];
    toBeProcessed.push(...this.getDescendants(dataNode));
    this.expansionModel.select(...toBeProcessed);
  }
  /** Collapses a subtree rooted at given data node recursively. */


  collapseDescendants(dataNode) {
    const toBeProcessed = [dataNode];
    toBeProcessed.push(...this.getDescendants(dataNode));
    this.expansionModel.deselect(...toBeProcessed);
  }

}

function defaultCompareValues(firstValue, secondValue) {
  return firstValue === secondValue;
}

function defaultCompareViewValues(firstViewValue, secondViewValue) {
  return RegExp(secondViewValue, 'gi').test(firstViewValue);
}
/** Flat tree control. Able to expand/collapse a subtree recursively for flattened tree. */


class FlatTreeControl extends BaseTreeControl {
  /** Construct with flat tree data node functions getLevel, isExpandable, getValue and getViewValue. */
  constructor(getLevel, isExpandable,
  /** getValue will be used to determine if the tree contains value or not. Used in method hasValue */
  getValue,
  /** getViewValue will be used for filter nodes. Returned value will be first argument in filterNodesFunction */
  getViewValue,
  /** compareValues will be used to comparing values. */
  compareValues = defaultCompareValues,
  /** compareValues will be used to comparing values. */
  compareViewValues = defaultCompareViewValues) {
    super();
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getValue = getValue;
    this.getViewValue = getViewValue;
    this.compareValues = compareValues;
    this.compareViewValues = compareViewValues;
  }
  /**
   * Gets a list of the data node's subtree of descendent data nodes.
   *
   * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
   * with correct levels.
   */


  getDescendants(dataNode) {
    const startIndex = this.dataNodes.indexOf(dataNode);
    const results = []; // Goes through flattened tree nodes in the `dataNodes` array, and get all descendants.
    // The level of descendants of a tree node must be greater than the level of the given
    // tree node.
    // If we reach a node whose level is equal to the level of the tree node, we hit a sibling.
    // If we reach a node whose level is greater than the level of the tree node, we hit a
    // sibling of an ancestor.

    for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
      results.push(this.dataNodes[i]);
    }

    return results;
  }
  /**
   * Expands all data nodes in the tree.
   *
   * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
   * data nodes of the tree.
   */


  expandAll() {
    this.expansionModel.select(...this.dataNodes);
  }

  getParents(node, result) {
    if (node.parent) {
      result.unshift(node.parent);
      return this.getParents(node.parent, result);
    } else {
      return result;
    }
  }

  hasValue(value) {
    return this.dataNodes.find(node => this.compareValues(this.getValue(node), value));
  }

  filterNodes(value) {
    this.filterModel.clear();
    const filteredNodes = this.dataNodes.filter(node => this.compareViewValues(this.getViewValue(node), value));
    const filteredNodesWithTheirParents = new Set();
    filteredNodes.forEach(filteredNode => {
      this.getParents(filteredNode, []).forEach(node => filteredNodesWithTheirParents.add(node));
      filteredNodesWithTheirParents.add(filteredNode);
    });
    this.filterModel.select(...Array.from(filteredNodesWithTheirParents));
    this.filterValue.next(value);
  }

}
/** Nested tree control. Able to expand/collapse a subtree recursively for NestedNode type. */


class NestedTreeControl extends BaseTreeControl {
  /** Construct with nested tree function getChildren. */
  constructor(getChildren) {
    super();
    this.getChildren = getChildren;
  }
  /**
   * Expands all dataNodes in the tree.
   *
   * To make this working, the `dataNodes` variable of the TreeControl must be set to all root level
   * data nodes of the tree.
   */


  expandAll() {
    this.expansionModel.clear();
    const allNodes = this.dataNodes.reduce((accumulator, dataNode) => [...accumulator, ...this.getDescendants(dataNode), dataNode], []);
    this.expansionModel.select(...allNodes);
  }
  /** Gets a list of descendant dataNodes of a subtree rooted at given data node recursively. */


  getDescendants(dataNode) {
    const descendants = [];

    this._getDescendants(descendants, dataNode);

    return descendants.splice(1);
  }
  /** A helper function to get descendants recursively. */
  // todo нужно придумать другое название и понять в чем отличие между getDescendants и _getDescendants

  /* tslint:disable-next-line:naming-convention */


  _getDescendants(descendants, dataNode) {
    descendants.push(dataNode);
    this.getChildren(dataNode).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(children => {
      if (children && children.length > 0) {
        children.forEach(child => this._getDescendants(descendants, child));
      }
    });
  }

}
/**
 * Outlet for nested CdkNode. Put `[cdkTreeNodeOutlet]` on a tag to place children dataNodes
 * inside the outlet.
 */


class CdkTreeNodeOutlet {
  constructor(viewContainer, changeDetectorRef) {
    this.viewContainer = viewContainer;
    this.changeDetectorRef = changeDetectorRef;
  }

}
/** @nocollapse */


CdkTreeNodeOutlet.ɵfac = function CdkTreeNodeOutlet_Factory(t) {
  return new (t || CdkTreeNodeOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
/** @nocollapse */


CdkTreeNodeOutlet.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTreeNodeOutlet,
  selectors: [["", "cdkTreeNodeOutlet", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeOutlet, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[cdkTreeNodeOutlet]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
    }];
  }, null);
})();
/** Context provided to the tree node component. */


class CdkTreeNodeOutletContext {
  constructor(data) {
    this.$implicit = data;
  }

}
/**
 * Data node definition for the CdkTree.
 * Captures the node's template and a when predicate that describes when this node should be used.
 */


class CdkTreeNodeDef {
  /** @docs-private */
  constructor(template) {
    this.template = template;
  }

}
/** @nocollapse */


CdkTreeNodeDef.ɵfac = function CdkTreeNodeDef_Factory(t) {
  return new (t || CdkTreeNodeDef)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef));
};
/** @nocollapse */


CdkTreeNodeDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTreeNodeDef,
  selectors: [["", "cdkTreeNodeDef", ""]],
  inputs: {
    when: ["cdkTreeNodeDefWhen", "when"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[cdkTreeNodeDef]',
      inputs: ['when: cdkTreeNodeDefWhen']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef
    }];
  }, null);
})();
/**
 * Returns an error to be thrown when there is no usable data.
 * @docs-private
 */


function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
/**
 * Returns an error to be thrown when there are multiple nodes that are missing a when function.
 * @docs-private
 */


function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
/**
 * Returns an error to be thrown when there are no matching node defs for a particular set of data.
 * @docs-private
 */


function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
/**
 * Returns an error to be thrown when there are tree control.
 * @docs-private
 */


function getTreeControlMissingError() {
  return Error(`Could not find a tree control for the tree.`);
}
/**
 * Returns an error to be thrown when tree control did not implement functions for flat/nested node.
 * @docs-private
 */


function getTreeControlFunctionsMissingError() {
  return Error(`Could not find functions for nested/flat tree in tree control.`);
}
/**
 * CDK tree component that connects with a data source to retrieve data of type `T` and renders
 * dataNodes with hierarchy. Updates the dataNodes when new data is provided by the data source.
 */


class CdkTree {
  constructor(differs, changeDetectorRef) {
    this.differs = differs;
    this.changeDetectorRef = changeDetectorRef; // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
    //     Remove the MAX_VALUE in viewChange

    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     * Can be used by the data source to as a heuristic of what data should be provided.
     */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
      start: 0,
      end: Number.MAX_VALUE
    });
    /** Subject that emits when the component has been destroyed. */

    this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    /** Level of nodes */

    this.levels = new Map();
  }
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a dara array to render.
   */


  get dataSource() {
    return this._dataSource;
  }

  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this.switchDataSource(dataSource);
    }
  }

  ngOnInit() {
    this.dataDiffer = this.differs.find([]).create(this.trackBy);

    if (!this.treeControl) {
      throw getTreeControlMissingError();
    }
  }

  ngOnDestroy() {
    this.nodeOutlet.viewContainer.clear();
    this.onDestroy.next();
    this.onDestroy.complete(); // tslint:disable-next-line:no-unbound-method

    if (this._dataSource && typeof this.dataSource.disconnect === 'function') {
      this.dataSource.disconnect(this);
    }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      this.dataSubscription = null;
    }
  }

  ngAfterContentChecked() {
    const defaultNodeDefs = this.nodeDefs.filter(def => !def.when);

    if (defaultNodeDefs.length > 1) {
      throw getTreeMultipleDefaultNodeDefsError();
    }

    this.defaultNodeDef = defaultNodeDefs[0];

    if (this.dataSource && this.nodeDefs && !this.dataSubscription) {
      this.observeRenderChanges();
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */


  renderNodeChanges(data, dataDiffer = this.dataDiffer, viewContainer = this.nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);

    if (!changes) {
      return;
    }

    changes.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
        this.levels.delete(item.item);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    this.changeDetectorRef.detectChanges();
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */


  getNodeDef(data, i) {
    if (this.nodeDefs.length === 1) {
      return this.nodeDefs.first;
    }

    const nodeDef = this.nodeDefs.find(def => def.when && def.when(i, data)) || this.defaultNodeDef;

    if (!nodeDef) {
      throw getTreeMissingMatchingNodeDefError();
    }

    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */


  insertNode(nodeData, index, viewContainer, parentData) {
    const node = this.getNodeDef(nodeData, index); // Node context that will be provided to created embedded view

    const context = new CdkTreeNodeOutletContext(nodeData); // If the tree is flat tree, then use the `getLevel` function in flat tree control
    // Otherwise, use the level of parent node.

    if (this.treeControl.getLevel) {
      context.level = this.treeControl.getLevel(nodeData);
      /* tslint:disable-next-line:no-typeof-undefined */
    } else if (typeof parentData !== 'undefined' && this.levels.has(parentData)) {
      context.level = this.levels.get(parentData) + 1;
    } else {
      context.level = 0;
    }

    this.levels.set(nodeData, context.level); // Use default tree nodeOutlet, or nested node's nodeOutlet

    const container = viewContainer ? viewContainer : this.nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index); // Set the data to just created `CdkTreeNode`.
    // The `CdkTreeNode` created from `createEmbeddedView` will be saved in static variable
    //     `mostRecentTreeNode`. We get it from static variable and pass the node data to it.

    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
  /** Set up a subscription for the data provided by the data source. */


  observeRenderChanges() {
    let dataStream; // Cannot use `instanceof DataSource` since the data source could be a literal with
    // `connect` function and may not extends DataSource.
    // tslint:disable-next-line:no-unbound-method

    if (typeof this._dataSource.connect === 'function') {
      dataStream = this._dataSource.connect(this);
    } else if (this._dataSource instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this._dataSource);
    }

    if (dataStream) {
      this.dataSubscription = dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.onDestroy)).subscribe(data => this.renderNodeChanges(data));
    } else {
      throw getTreeNoValidDataSourceError();
    }
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */


  switchDataSource(dataSource) {
    // tslint:disable-next-line:no-unbound-method
    if (this._dataSource && typeof this._dataSource.disconnect === 'function') {
      this.dataSource.disconnect(this);
    }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
      this.dataSubscription = null;
    } // Remove the all dataNodes if there is now no data source


    if (!dataSource) {
      this.nodeOutlet.viewContainer.clear();
    }

    this._dataSource = dataSource;

    if (this.nodeDefs) {
      this.observeRenderChanges();
    }
  }

}
/** @nocollapse */


CdkTree.ɵfac = function CdkTree_Factory(t) {
  return new (t || CdkTree)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
};
/** @nocollapse */


CdkTree.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CdkTree,
  selectors: [["cdk-tree"]],
  contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeDef, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeDefs = _t);
    }
  },
  viewQuery: function CdkTree_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](CdkTreeNodeOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t.first);
    }
  },
  hostAttrs: ["role", "tree", 1, "cdk-tree"],
  inputs: {
    treeControl: "treeControl",
    trackBy: "trackBy",
    dataSource: "dataSource"
  },
  exportAs: ["cdkTree"],
  decls: 1,
  vars: 0,
  consts: [["cdkTreeNodeOutlet", ""]],
  template: function CdkTree_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [CdkTreeNodeOutlet],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTree, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component,
    args: [{
      selector: 'cdk-tree',
      exportAs: 'cdkTree',
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        class: 'cdk-tree',
        role: 'tree'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
    }];
  }, {
    treeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    trackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    nodeDefs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [CdkTreeNodeDef]
    }],
    dataSource: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/**
 * Tree node for CdkTree. It contains the data in the tree node.
 */


class CdkTreeNode {
  constructor(elementRef, tree) {
    this.elementRef = elementRef;
    this.tree = tree;
    this.role = 'treeitem';
    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    CdkTreeNode.mostRecentTreeNode = this;
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

  get isExpanded() {
    return this.tree.treeControl.isExpanded(this._data);
  }

  get level() {
    return this.tree.treeControl.getLevel ? this.tree.treeControl.getLevel(this._data) : 0;
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  focus() {
    this.elementRef.nativeElement.focus();
  }

}
/**
 * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
 * in `CdkTree` and set the data to it.
 */


CdkTreeNode.mostRecentTreeNode = null;
/** @nocollapse */

CdkTreeNode.ɵfac = function CdkTreeNode_Factory(t) {
  return new (t || CdkTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => CdkTree)));
};
/** @nocollapse */


CdkTreeNode.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTreeNode,
  selectors: [["cdk-tree-node"]],
  hostAttrs: [1, "cdk-tree-node"],
  hostVars: 3,
  hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("aria-level", ctx.role === "treeitem" ? ctx.level : null)("role", ctx.role);
    }
  },
  inputs: {
    role: "role"
  },
  exportAs: ["cdkTreeNode"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'cdk-tree-node',
      exportAs: 'cdkTreeNode',
      host: {
        class: 'cdk-tree-node',
        '[attr.aria-expanded]': 'isExpanded',
        '[attr.aria-level]': 'role === "treeitem" ? level : null',
        '[attr.role]': 'role'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: CdkTree,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => CdkTree)]
      }]
    }];
  }, {
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
/**
 * Nested node is a child of `<cdk-tree>`. It works with nested tree.
 * By using `cdk-nested-tree-node` component in tree node template, children of the parent node will
 * be added in the `cdkTreeNodeOutlet` in tree node template.
 * For example:
 *   ```html
 *   <cdk-mested-tree-node>
 *     {{node.name}}
 *     <ng-template cdkTreeNodeOutlet></ng-template>
 *   </cdk-tree-node>
 *   ```
 * The children of node will be automatically added to `cdkTreeNodeOutlet`, the result dom will be
 * like this:
 *   ```html
 *   <cdk-nested-tree-node>
 *     {{node.name}}
 *      <cdk-nested-tree-node>{{child1.name}}</cdk-tree-node>
 *      <cdk-nested-tree-node>{{child2.name}}</cdk-tree-node>
 *   </cdk-tree-node>
 *   ```
 */


class CdkNestedTreeNode extends CdkTreeNode {
  constructor(elementRef, tree, differs) {
    super(elementRef, tree);
    this.elementRef = elementRef;
    this.differs = differs;
  }

  ngAfterContentInit() {
    this.dataDiffer = this.differs.find([]).create(this.tree.trackBy);

    if (!this.tree.treeControl.getChildren) {
      throw getTreeControlFunctionsMissingError();
    }

    this.tree.treeControl.getChildren(this.data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed)).subscribe(result => {
      this.children = result;
      this.updateChildrenNodes();
    });
    this.nodeOutlet.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed)).subscribe(() => this.updateChildrenNodes());
  }

  ngOnDestroy() {
    this.clear();
    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */


  updateChildrenNodes() {
    if (this.nodeOutlet.length && this.children) {
      this.tree.renderNodeChanges(this.children, this.dataDiffer, this.nodeOutlet.first.viewContainer, this.data);
    } else {
      // Reset the data differ if there's no children nodes displayed
      this.dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */


  clear() {
    if (this.nodeOutlet && this.nodeOutlet.first) {
      this.nodeOutlet.first.viewContainer.clear();
      this.dataDiffer.diff([]);
    }
  }

}
/** @nocollapse */


CdkNestedTreeNode.ɵfac = function CdkNestedTreeNode_Factory(t) {
  return new (t || CdkNestedTreeNode)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers));
};
/** @nocollapse */


CdkNestedTreeNode.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkNestedTreeNode,
  selectors: [["cdk-nested-tree-node"]],
  contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, CdkTreeNodeOutlet, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t);
    }
  },
  hostAttrs: [1, "cdk-tree-node", "cdk-nested-tree-node"],
  hostVars: 2,
  hostBindings: function CdkNestedTreeNode_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-expanded", ctx.isExpanded)("role", ctx.role);
    }
  },
  exportAs: ["cdkNestedTreeNode"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: CdkTreeNode,
    useExisting: CdkNestedTreeNode
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkNestedTreeNode, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: 'cdk-nested-tree-node',
      exportAs: 'cdkNestedTreeNode',
      host: {
        '[attr.aria-expanded]': 'isExpanded',
        '[attr.role]': 'role',
        class: 'cdk-tree-node cdk-nested-tree-node'
      },
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.IterableDiffers
    }];
  }, {
    nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [CdkTreeNodeOutlet]
    }]
  });
})();
/** Regex used to split a string on its CSS units. */


const cssUnitPattern = /([A-Za-z%]+)$/;
/**
 * Indent for the children tree dataNodes.
 * This directive will add left-padding to the node to show hierarchy.
 */

class CdkTreeNodePadding {
  constructor(treeNode, tree, renderer, element, dir) {
    this.treeNode = treeNode;
    this.tree = tree;
    this.renderer = renderer;
    this.element = element;
    this.dir = dir;
    /* tslint:disable-next-line:naming-convention orthodox-getter-and-setter */

    this._indent = 20;
    /** CSS units used for the indentation value. */

    this.indentUnits = 'px';
    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();

    if (this.dir && this.dir.change) {
      this.dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed)).subscribe(() => this.setPadding());
    }
  }
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */


  get level() {
    return this._level;
  }

  set level(value) {
    this.setLevelInput(value);
  }

  get indent() {
    return this._indent;
  }

  set indent(indent) {
    this.setIndentInput(indent);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  // tslint:disable-next-line:naming-convention


  setLevelInput(value) {
    // Set to null as the fallback value so that _setPadding can fall back to the node level if the
    // consumer set the directive as `cdkTreeNodePadding=""`. We still want to take this value if
    // they set 0 explicitly.
    this._level = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceNumberProperty)(value, null);
    this.setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */


  setIndentInput(indent) {
    let value = indent;
    let units = 'px';

    if (typeof indent === 'string') {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }

    this.indentUnits = units;
    this._indent = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__.coerceNumberProperty)(value);
    this.setPadding();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */


  paddingIndent() {
    const basicPadding = 12;
    const nodeLevel = this.treeNode.data && this.tree.treeControl.getLevel ? this.tree.treeControl.getLevel(this.treeNode.data) : null;
    const level = this._level || nodeLevel;
    return `${level ? level * this._indent + basicPadding : basicPadding}px`;
  }

  setPadding() {
    const padding = this.paddingIndent();
    const paddingProp = this.dir && this.dir.value === 'rtl' ? 'paddingRight' : 'paddingLeft';
    this.renderer.setStyle(this.element.nativeElement, paddingProp, padding);
  }

}
/** @nocollapse */


CdkTreeNodePadding.ɵfac = function CdkTreeNodePadding_Factory(t) {
  return new (t || CdkTreeNodePadding)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8));
};
/** @nocollapse */


CdkTreeNodePadding.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTreeNodePadding,
  selectors: [["", "cdkTreeNodePadding", ""]],
  inputs: {
    level: ["cdkTreeNodePadding", "level"],
    indent: ["cdkTreeNodePaddingIndent", "indent"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodePadding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[cdkTreeNodePadding]'
    }]
  }], function () {
    return [{
      type: CdkTreeNode
    }, {
      type: CdkTree
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
      }]
    }];
  }, {
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['cdkTreeNodePadding']
    }],
    indent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['cdkTreeNodePaddingIndent']
    }]
  });
})();

class CdkTreeNodeToggle {
  constructor(tree, treeNode) {
    this.tree = tree;
    this.treeNode = treeNode;
    this._recursive = false;
  }

  get recursive() {
    return this._recursive;
  }

  set recursive(value) {
    this._recursive = value;
  }

  toggle(event) {
    this.recursive ? this.tree.treeControl.toggleDescendants(this.treeNode.data) : this.tree.treeControl.toggle(this.treeNode.data);
    event.stopPropagation();
  }

}
/** @nocollapse */


CdkTreeNodeToggle.ɵfac = function CdkTreeNodeToggle_Factory(t) {
  return new (t || CdkTreeNodeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CdkTreeNode));
};
/** @nocollapse */


CdkTreeNodeToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTreeNodeToggle,
  selectors: [["", "cdkTreeNodeToggle", ""]],
  hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
        return ctx.toggle($event);
      });
    }
  },
  inputs: {
    recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeNodeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[cdkTreeNodeToggle]',
      host: {
        '(click)': 'toggle($event)'
      }
    }]
  }], function () {
    return [{
      type: CdkTree
    }, {
      type: CdkTreeNode
    }];
  }, {
    recursive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['cdkTreeNodeToggleRecursive']
    }]
  });
})();

const EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];

class CdkTreeModule {}
/** @nocollapse */


CdkTreeModule.ɵfac = function CdkTreeModule_Factory(t) {
  return new (t || CdkTreeModule)();
};
/** @nocollapse */


CdkTreeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CdkTreeModule
});
/** @nocollapse */

CdkTreeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule],
      exports: EXPORTED_DECLARATIONS,
      declarations: EXPORTED_DECLARATIONS,
      providers: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusMonitor]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 80623:
/*!**********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-button.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McAnchor": function() { return /* binding */ McAnchor; },
/* harmony export */   "McButton": function() { return /* binding */ McButton; },
/* harmony export */   "McButtonBase": function() { return /* binding */ McButtonBase; },
/* harmony export */   "McButtonCssStyler": function() { return /* binding */ McButtonCssStyler; },
/* harmony export */   "McButtonMixinBase": function() { return /* binding */ McButtonMixinBase; },
/* harmony export */   "McButtonModule": function() { return /* binding */ McButtonModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);








const _c0 = ["mc-button", ""];
const _c1 = ["*"];
const _c2 = ".mc-icon-button,.mc-light-button,.mc-button{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;position:relative;box-sizing:border-box;display:inline-block;white-space:nowrap;text-decoration:none;text-align:center;vertical-align:baseline;border:1px solid transparent;border:var(--mc-button-size-border-width, 1px) solid transparent;border-radius:3px;border-radius:var(--mc-button-size-border-radius, 3px)}.mc-icon-button::-moz-focus-inner,.mc-light-button::-moz-focus-inner,.mc-button::-moz-focus-inner{border:0}.mc-icon-button:focus,.mc-light-button:focus,.mc-button:focus{outline:none}[disabled].mc-icon-button,[disabled].mc-light-button,[disabled].mc-button{pointer-events:none;cursor:default}.cdk-focused.mc-icon-button,.cdk-focused.mc-light-button,.cdk-focused.mc-button{z-index:1}.mc-button{padding:calc(6px - 1px) calc(16px - 1px);padding:calc(var(--mc-button-size-vertical-padding, 6px) - var(--mc-button-size-border-width, 1px)) calc(var(--mc-button-size-horizontal-padding, 16px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button{padding:calc(6px - 1px) calc(8px - 1px);padding:calc(var(--mc-icon-button-size-vertical-padding, 6px) - var(--mc-button-size-border-width, 1px)) calc(var(--mc-icon-button-size-horizontal-padding, 8px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button.mc-icon-button_left{padding-right:calc(16px - 1px);padding-right:calc(var(--mc-icon-button-size-icon-horizontal-padding, 16px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button.mc-icon-button_right{padding-left:calc(16px - 1px);padding-left:calc(var(--mc-icon-button-size-icon-horizontal-padding, 16px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button .mc-button-wrapper{display:flex}.mc-icon-button .mc-button-wrapper .mc-icon{margin:auto;line-height:20px}.mc-icon-button .mc-button-wrapper .mc-icon_left{margin-right:8px;margin-right:var(--mc-icon-button-size-icon-padding, 8px)}.mc-icon-button .mc-button-wrapper .mc-icon_right{margin-left:8px;margin-left:var(--mc-icon-button-size-icon-padding, 8px)}.mc-button-overlay{position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;pointer-events:none;border-radius:inherit}\n";

class McButtonCssStyler {
  constructor(elementRef, renderer) {
    this.renderer = renderer;
    this.nativeElement = elementRef.nativeElement;
  }

  get isIconButton() {
    return this.icons.length > 0;
  }

  ngAfterContentInit() {
    this.updateClassModifierForIcons();
  }

  updateClassModifierForIcons() {
    const twoIcons = 2;
    const [firstIconElement, secondIconElement] = this.icons.map(item => item.getHostElement());

    if (this.icons.length === 1) {
      this.renderer.removeClass(firstIconElement, 'mc-icon_left');
      this.renderer.removeClass(this.nativeElement, 'mc-icon-button_left');
      this.renderer.removeClass(firstIconElement, 'mc-icon_right');
      this.renderer.removeClass(this.nativeElement, 'mc-icon-button_right');
      const COMMENT_NODE = 8;

      if (firstIconElement.nextSibling && firstIconElement.nextSibling.nodeType !== COMMENT_NODE) {
        this.renderer.addClass(firstIconElement, 'mc-icon_left');
        this.renderer.addClass(this.nativeElement, 'mc-icon-button_left');
      }

      if (firstIconElement.previousSibling && firstIconElement.previousSibling.nodeType !== COMMENT_NODE) {
        this.renderer.addClass(firstIconElement, 'mc-icon_right');
        this.renderer.addClass(this.nativeElement, 'mc-icon-button_right');
      }
    } else if (this.icons.length === twoIcons) {
      this.renderer.addClass(firstIconElement, 'mc-icon_left');
      this.renderer.addClass(secondIconElement, 'mc-icon_right');
    }
  }

}
/** @nocollapse */


McButtonCssStyler.ɵfac = function McButtonCssStyler_Factory(t) {
  return new (t || McButtonCssStyler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
/** @nocollapse */


McButtonCssStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McButtonCssStyler,
  selectors: [["button", "mc-button", ""], ["a", "mc-button", ""]],
  contentQueries: function McButtonCssStyler_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__.McIcon, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icons = _t);
    }
  },
  hostVars: 4,
  hostBindings: function McButtonCssStyler_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-button", !ctx.isIconButton)("mc-icon-button", ctx.isIconButton);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McButtonCssStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'button[mc-button], a[mc-button]',
      host: {
        '[class.mc-button]': '!isIconButton',
        '[class.mc-icon-button]': 'isIconButton'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    icons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__.McIcon, {
        descendants: true
      }]
    }]
  });
})();

class McButtonBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McButtonMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(McButtonBase)));

class McButton extends McButtonMixinBase {
  constructor(elementRef, _focusMonitor) {
    super(elementRef);
    this._focusMonitor = _focusMonitor;

    this._focusMonitor.monitor(this._elementRef.nativeElement, true);
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
  }

  focus() {
    this.getHostElement().focus();
  }

  focusViaKeyboard() {
    this._focusMonitor.focusVia(this.getHostElement(), 'keyboard');
  }

  getHostElement() {
    return this._elementRef.nativeElement;
  }

}
/** @nocollapse */


McButton.ɵfac = function McButton_Factory(t) {
  return new (t || McButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor));
};
/** @nocollapse */


McButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McButton,
  selectors: [["button", "mc-button", ""]],
  hostVars: 1,
  hostBindings: function McButton_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);
    }
  },
  inputs: {
    disabled: "disabled",
    color: "color"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [[1, "mc-button-wrapper"], [1, "mc-button-overlay"]],
  template: function McButton_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
    }
  },
  styles: [".mc-icon-button,.mc-light-button,.mc-button{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;position:relative;box-sizing:border-box;display:inline-block;white-space:nowrap;text-decoration:none;text-align:center;vertical-align:baseline;border:1px solid transparent;border:var(--mc-button-size-border-width, 1px) solid transparent;border-radius:3px;border-radius:var(--mc-button-size-border-radius, 3px)}.mc-icon-button::-moz-focus-inner,.mc-light-button::-moz-focus-inner,.mc-button::-moz-focus-inner{border:0}.mc-icon-button:focus,.mc-light-button:focus,.mc-button:focus{outline:none}[disabled].mc-icon-button,[disabled].mc-light-button,[disabled].mc-button{pointer-events:none;cursor:default}.cdk-focused.mc-icon-button,.cdk-focused.mc-light-button,.cdk-focused.mc-button{z-index:1}.mc-button{padding:calc(6px - 1px) calc(16px - 1px);padding:calc(var(--mc-button-size-vertical-padding, 6px) - var(--mc-button-size-border-width, 1px)) calc(var(--mc-button-size-horizontal-padding, 16px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button{padding:calc(6px - 1px) calc(8px - 1px);padding:calc(var(--mc-icon-button-size-vertical-padding, 6px) - var(--mc-button-size-border-width, 1px)) calc(var(--mc-icon-button-size-horizontal-padding, 8px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button.mc-icon-button_left{padding-right:calc(16px - 1px);padding-right:calc(var(--mc-icon-button-size-icon-horizontal-padding, 16px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button.mc-icon-button_right{padding-left:calc(16px - 1px);padding-left:calc(var(--mc-icon-button-size-icon-horizontal-padding, 16px) - var(--mc-button-size-border-width, 1px))}.mc-icon-button .mc-button-wrapper{display:flex}.mc-icon-button .mc-button-wrapper .mc-icon{margin:auto;line-height:20px}.mc-icon-button .mc-button-wrapper .mc-icon_left{margin-right:8px;margin-right:var(--mc-icon-button-size-icon-padding, 8px)}.mc-icon-button .mc-button-wrapper .mc-icon_right{margin-left:8px;margin-left:var(--mc-icon-button-size-icon-padding, 8px)}.mc-button-overlay{position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;pointer-events:none;border-radius:inherit}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'button[mc-button]',
      templateUrl: './button.component.html',
      styleUrls: ['./button.scss'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      inputs: ['disabled', 'color'],
      host: {
        '[attr.disabled]': 'disabled || null'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
    }];
  }, null);
})();

class McAnchor extends McButton {
  constructor(focusMonitor, elementRef) {
    super(elementRef, focusMonitor);
  }

  haltDisabledEvents(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

}
/** @nocollapse */


McAnchor.ɵfac = function McAnchor_Factory(t) {
  return new (t || McAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
/** @nocollapse */


McAnchor.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McAnchor,
  selectors: [["a", "mc-button", ""]],
  hostVars: 2,
  hostBindings: function McAnchor_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McAnchor_click_HostBindingHandler($event) {
        return ctx.haltDisabledEvents($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
    }
  },
  inputs: {
    disabled: "disabled",
    color: "color",
    tabIndex: "tabIndex"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [[1, "mc-button-wrapper"], [1, "mc-button-overlay"]],
  template: function McAnchor_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
    }
  },
  styles: [_c2],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAnchor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'a[mc-button]',
      templateUrl: './button.component.html',
      styleUrls: ['button.scss'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      inputs: ['disabled', 'color', 'tabIndex'],
      host: {
        '[attr.tabindex]': 'tabIndex',
        '[attr.disabled]': 'disabled || null',
        '(click)': 'haltDisabledEvents($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();

class McButtonModule {}
/** @nocollapse */


McButtonModule.ɵfac = function McButtonModule_Factory(t) {
  return new (t || McButtonModule)();
};
/** @nocollapse */


McButtonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McButtonModule
});
/** @nocollapse */

McButtonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.PlatformModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McButtonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.PlatformModule],
      exports: [McButton, McAnchor, McButtonCssStyler],
      declarations: [McButton, McAnchor, McButtonCssStyler]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 46872:
/*!********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-core.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationCurves": function() { return /* binding */ AnimationCurves; },
/* harmony export */   "BOTTOM_LEFT_POSITION_PRIORITY": function() { return /* binding */ BOTTOM_LEFT_POSITION_PRIORITY; },
/* harmony export */   "BOTTOM_POSITION_PRIORITY": function() { return /* binding */ BOTTOM_POSITION_PRIORITY; },
/* harmony export */   "BOTTOM_RIGHT_POSITION_PRIORITY": function() { return /* binding */ BOTTOM_RIGHT_POSITION_PRIORITY; },
/* harmony export */   "DEFAULT_MC_LOCALE_ID": function() { return /* binding */ DEFAULT_MC_LOCALE_ID; },
/* harmony export */   "DateFormatter": function() { return /* binding */ DateFormatter; },
/* harmony export */   "EXTENDED_OVERLAY_POSITIONS": function() { return /* binding */ EXTENDED_OVERLAY_POSITIONS; },
/* harmony export */   "ErrorStateMatcher": function() { return /* binding */ ErrorStateMatcher; },
/* harmony export */   "LEFT_BOTTOM_POSITION_PRIORITY": function() { return /* binding */ LEFT_BOTTOM_POSITION_PRIORITY; },
/* harmony export */   "LEFT_POSITION_PRIORITY": function() { return /* binding */ LEFT_POSITION_PRIORITY; },
/* harmony export */   "LEFT_TOP_POSITION_PRIORITY": function() { return /* binding */ LEFT_TOP_POSITION_PRIORITY; },
/* harmony export */   "MC_LABEL_GLOBAL_OPTIONS": function() { return /* binding */ MC_LABEL_GLOBAL_OPTIONS; },
/* harmony export */   "MC_LOCALE_ID": function() { return /* binding */ MC_LOCALE_ID; },
/* harmony export */   "MC_OPTION_PARENT_COMPONENT": function() { return /* binding */ MC_OPTION_PARENT_COMPONENT; },
/* harmony export */   "MC_SANITY_CHECKS": function() { return /* binding */ MC_SANITY_CHECKS; },
/* harmony export */   "MC_SELECT_SCROLL_STRATEGY": function() { return /* binding */ MC_SELECT_SCROLL_STRATEGY; },
/* harmony export */   "MC_SELECT_SCROLL_STRATEGY_PROVIDER": function() { return /* binding */ MC_SELECT_SCROLL_STRATEGY_PROVIDER; },
/* harmony export */   "MC_VALIDATION": function() { return /* binding */ MC_VALIDATION; },
/* harmony export */   "McCommonModule": function() { return /* binding */ McCommonModule; },
/* harmony export */   "McDecimalPipe": function() { return /* binding */ McDecimalPipe; },
/* harmony export */   "McForm": function() { return /* binding */ McForm; },
/* harmony export */   "McFormElement": function() { return /* binding */ McFormElement; },
/* harmony export */   "McFormattersModule": function() { return /* binding */ McFormattersModule; },
/* harmony export */   "McFormsModule": function() { return /* binding */ McFormsModule; },
/* harmony export */   "McHighlightModule": function() { return /* binding */ McHighlightModule; },
/* harmony export */   "McHighlightPipe": function() { return /* binding */ McHighlightPipe; },
/* harmony export */   "McLine": function() { return /* binding */ McLine; },
/* harmony export */   "McLineModule": function() { return /* binding */ McLineModule; },
/* harmony export */   "McLineSetter": function() { return /* binding */ McLineSetter; },
/* harmony export */   "McMeasureScrollbarService": function() { return /* binding */ McMeasureScrollbarService; },
/* harmony export */   "McOptgroup": function() { return /* binding */ McOptgroup; },
/* harmony export */   "McOptgroupBase": function() { return /* binding */ McOptgroupBase; },
/* harmony export */   "McOptgroupMixinBase": function() { return /* binding */ McOptgroupMixinBase; },
/* harmony export */   "McOption": function() { return /* binding */ McOption; },
/* harmony export */   "McOptionModule": function() { return /* binding */ McOptionModule; },
/* harmony export */   "McOptionSelectionChange": function() { return /* binding */ McOptionSelectionChange; },
/* harmony export */   "McPopUp": function() { return /* binding */ McPopUp; },
/* harmony export */   "McPopUpTrigger": function() { return /* binding */ McPopUpTrigger; },
/* harmony export */   "McPseudoCheckbox": function() { return /* binding */ McPseudoCheckbox; },
/* harmony export */   "McPseudoCheckboxModule": function() { return /* binding */ McPseudoCheckboxModule; },
/* harmony export */   "MultipleMode": function() { return /* binding */ MultipleMode; },
/* harmony export */   "NUMBER_FORMAT_REGEXP": function() { return /* binding */ NUMBER_FORMAT_REGEXP; },
/* harmony export */   "POSITION_MAP": function() { return /* binding */ POSITION_MAP; },
/* harmony export */   "POSITION_PRIORITY_STRATEGY": function() { return /* binding */ POSITION_PRIORITY_STRATEGY; },
/* harmony export */   "POSITION_TO_CSS_MAP": function() { return /* binding */ POSITION_TO_CSS_MAP; },
/* harmony export */   "PopUpPlacements": function() { return /* binding */ PopUpPlacements; },
/* harmony export */   "PopUpSizes": function() { return /* binding */ PopUpSizes; },
/* harmony export */   "PopUpTriggers": function() { return /* binding */ PopUpTriggers; },
/* harmony export */   "PopUpVisibility": function() { return /* binding */ PopUpVisibility; },
/* harmony export */   "RIGHT_BOTTOM_POSITION_PRIORITY": function() { return /* binding */ RIGHT_BOTTOM_POSITION_PRIORITY; },
/* harmony export */   "RIGHT_POSITION_PRIORITY": function() { return /* binding */ RIGHT_POSITION_PRIORITY; },
/* harmony export */   "RIGHT_TOP_POSITION_PRIORITY": function() { return /* binding */ RIGHT_TOP_POSITION_PRIORITY; },
/* harmony export */   "SELECT_PANEL_INDENT_PADDING_X": function() { return /* binding */ SELECT_PANEL_INDENT_PADDING_X; },
/* harmony export */   "SELECT_PANEL_MAX_HEIGHT": function() { return /* binding */ SELECT_PANEL_MAX_HEIGHT; },
/* harmony export */   "SELECT_PANEL_PADDING_X": function() { return /* binding */ SELECT_PANEL_PADDING_X; },
/* harmony export */   "SELECT_PANEL_VIEWPORT_PADDING": function() { return /* binding */ SELECT_PANEL_VIEWPORT_PADDING; },
/* harmony export */   "ShowOnDirtyErrorStateMatcher": function() { return /* binding */ ShowOnDirtyErrorStateMatcher; },
/* harmony export */   "TOP_LEFT_POSITION_PRIORITY": function() { return /* binding */ TOP_LEFT_POSITION_PRIORITY; },
/* harmony export */   "TOP_POSITION_PRIORITY": function() { return /* binding */ TOP_POSITION_PRIORITY; },
/* harmony export */   "TOP_RIGHT_POSITION_PRIORITY": function() { return /* binding */ TOP_RIGHT_POSITION_PRIORITY; },
/* harmony export */   "ThemePalette": function() { return /* binding */ ThemePalette; },
/* harmony export */   "countGroupLabelsBeforeOption": function() { return /* binding */ countGroupLabelsBeforeOption; },
/* harmony export */   "fadeAnimation": function() { return /* binding */ fadeAnimation; },
/* harmony export */   "getMcSelectDynamicMultipleError": function() { return /* binding */ getMcSelectDynamicMultipleError; },
/* harmony export */   "getMcSelectNonArrayValueError": function() { return /* binding */ getMcSelectNonArrayValueError; },
/* harmony export */   "getMcSelectNonFunctionValueError": function() { return /* binding */ getMcSelectNonFunctionValueError; },
/* harmony export */   "getOptionScrollPosition": function() { return /* binding */ getOptionScrollPosition; },
/* harmony export */   "isBoolean": function() { return /* binding */ isBoolean; },
/* harmony export */   "mcSelectAnimations": function() { return /* binding */ mcSelectAnimations; },
/* harmony export */   "mcSelectScrollStrategyProviderFactory": function() { return /* binding */ mcSelectScrollStrategyProviderFactory; },
/* harmony export */   "mixinColor": function() { return /* binding */ mixinColor; },
/* harmony export */   "mixinDisabled": function() { return /* binding */ mixinDisabled; },
/* harmony export */   "mixinErrorState": function() { return /* binding */ mixinErrorState; },
/* harmony export */   "mixinTabIndex": function() { return /* binding */ mixinTabIndex; },
/* harmony export */   "selectEvents": function() { return /* binding */ selectEvents; },
/* harmony export */   "setMosaicValidation": function() { return /* binding */ setMosaicValidation; },
/* harmony export */   "setMosaicValidationForFormControl": function() { return /* binding */ setMosaicValidationForFormControl; },
/* harmony export */   "setMosaicValidationForModelControl": function() { return /* binding */ setMosaicValidationForModelControl; },
/* harmony export */   "toBoolean": function() { return /* binding */ toBoolean; },
/* harmony export */   "validationTooltipHideDelay": function() { return /* binding */ validationTooltipHideDelay; },
/* harmony export */   "validationTooltipShowDelay": function() { return /* binding */ validationTooltipShowDelay; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/cdk/datetime */ 45051);
/* harmony import */ var messageformat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! messageformat */ 39611);
/* harmony import */ var messageformat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(messageformat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 42791);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 75428);


















const _c0 = [[["mc-option"], ["mc-list-option"], ["ng-container"]]];
const _c1 = ["mc-option, mc-list-option, ng-container"];

function McOption_mc_pseudo_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mc-pseudo-checkbox", 3);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "")("disabled", ctx_r0.disabled);
  }
}

const _c2 = ["*"];

function isBoolean(val) {
  return typeof val === 'boolean';
}

function toBoolean(value) {
  return value != null && `${value}` !== 'false';
} // Injection token that configures whether the Mosaic sanity checks are enabled.


const MC_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mc-sanity-checks', {
  providedIn: 'root',
  factory: mcSanityChecksFactory
});

function mcSanityChecksFactory() {
  return true;
}
/**
 * Module that captures anything that should be loaded and/or run for *all* Mosaic
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., McTabsModule).
 */


class McCommonModule {
  constructor(_sanityChecksEnabled) {
    this._sanityChecksEnabled = _sanityChecksEnabled; // Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).

    this.hasDoneGlobalChecks = false; // Reference to the global `document` object.
    // tslint:disable-next-line: orthodox-getter-and-setter

    this._document = typeof document === 'object' && document ? document : null; // Reference to the global 'window' object.
    // tslint:disable-next-line: orthodox-getter-and-setter

    this._window = typeof window === 'object' && window ? window : null;

    if (this.areChecksEnabled() && !this.hasDoneGlobalChecks) {
      this.checkDoctypeIsDefined();
      this.checkThemeIsPresent();
      this.hasDoneGlobalChecks = true;
    }
  } // Whether any sanity checks are enabled


  areChecksEnabled() {
    return this._sanityChecksEnabled && (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)() && !this.isTestEnv();
  } // Whether the code is running in tests.


  isTestEnv() {
    // tslint:disable-next-line
    return this._window && (this._window['__karma__'] || this._window['jasmine']);
  }

  checkDoctypeIsDefined() {
    if (this._document && !this._document.doctype) {
      console.warn('Current document does not have a doctype. This may cause ' + 'some Mosaic components not to behave as expected.');
    }
  }

  checkThemeIsPresent() {
    if (this._document && typeof getComputedStyle === 'function') {
      const testElement = this._document.createElement('div');

      testElement.classList.add('mc-theme-loaded-marker');

      this._document.body.appendChild(testElement);

      const computedStyle = getComputedStyle(testElement); // In some situations, the computed style of the test element can be null. For example in
      // Firefox, the computed style is null if an application is running inside of a hidden iframe.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

      if (computedStyle && computedStyle.display !== 'none') {
        console.warn('Could not find Mosaic core theme. Most Mosaic ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: link there');
      }

      this._document.body.removeChild(testElement);
    }
  }

}
/** @nocollapse */


McCommonModule.ɵfac = function McCommonModule_Factory(t) {
  return new (t || McCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MC_SANITY_CHECKS, 8));
};
/** @nocollapse */


McCommonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McCommonModule
});
/** @nocollapse */

McCommonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.BidiModule]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MC_SANITY_CHECKS]
      }]
    }];
  }, null);
})();

function mixinDisabled(base) {
  return class extends base {
    constructor(...args) {
      // tslint:disable-next-line
      super(...args);
      this._disabled = false;
    }

    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }

  };
}

var ThemePalette;

(function (ThemePalette) {
  ThemePalette["Primary"] = "primary";
  ThemePalette["Second"] = "second";
  ThemePalette["Error"] = "error";
  ThemePalette["Default"] = "second";
  ThemePalette["Empty"] = "";
})(ThemePalette || (ThemePalette = {}));

function mixinColor(base, defaultColor = ThemePalette.Default) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.color = defaultColor;
    }

    get color() {
      return this._color;
    }

    set color(value) {
      const colorPalette = value || defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mc-${this._color}`);
        }

        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mc-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

  };
}

function mixinTabIndex(base, defaultTabIndex = 0) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.defaultTabIndex = defaultTabIndex;
      this._tabIndex = defaultTabIndex;
    }

    get tabIndex() {
      return this.disabled ? -1 : this._tabIndex;
    }

    set tabIndex(value) {
      // If the specified tabIndex value is null or undefined, fall back to the default value.
      this._tabIndex = value != null ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value) : this.defaultTabIndex;
    }

  };
}
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 */


function mixinErrorState(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      /** Whether the component is in an error state. */

      this.errorState = false;
      /**
       * Stream that emits whenever the state of the input changes such that the wrapping
       * `MatFormField` needs to run change detection.
       */

      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }

    updateErrorState() {
      const oldState = this.errorState;
      const parent = this.parentFormGroup || this.parentForm;
      const matcher = this.errorStateMatcher || this.defaultErrorStateMatcher;
      const control = this.ngControl ? this.ngControl.control : null;
      const newState = matcher.isErrorState(control, parent);

      if (newState !== oldState) {
        this.errorState = newState;
        this.stateChanges.next();
      }
    }

  };
}
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(McLine) query, then
 * counted by checking the query list's length.
 */


class McLine {}
/** @nocollapse */


McLine.ɵfac = function McLine_Factory(t) {
  return new (t || McLine)();
};
/** @nocollapse */


McLine.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: McLine,
  selectors: [["", "mc-line", ""], ["", "mcLine", ""]],
  hostAttrs: [1, "mc-line"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McLine, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mc-line], [mcLine]',
      host: {
        class: 'mc-line'
      }
    }]
  }], null, null);
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */


class McLineSetter {
  constructor(_lines, _element) {
    this._lines = _lines;
    this._element = _element;
    this.setLineClass(this._lines.length);

    this._lines.changes.subscribe(() => {
      this.setLineClass(this._lines.length);
    });
  }

  setLineClass(count) {
    const minLineClassNumber = 2;
    const maxLineClassNumber = 3;
    this.resetClasses();

    if (count === minLineClassNumber || count === maxLineClassNumber) {
      this.setClass(`mc-${count}-line`, true);
    } else if (count > maxLineClassNumber) {
      this.setClass(`mc-multi-line`, true);
    }
  }

  resetClasses() {
    this.setClass('mc-2-line', false);
    this.setClass('mc-3-line', false);
    this.setClass('mc-multi-line', false);
  }

  setClass(className, isAdd) {
    if (isAdd) {
      this._element.nativeElement.classList.add(className);
    } else {
      this._element.nativeElement.classList.remove(className);
    }
  }

}

class McLineModule {}
/** @nocollapse */


McLineModule.ɵfac = function McLineModule_Factory(t) {
  return new (t || McLineModule)();
};
/** @nocollapse */


McLineModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McLineModule
});
/** @nocollapse */

McLineModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McLineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [],
      exports: [McLine],
      declarations: [McLine]
    }]
  }], null, null);
})();
/** Error state matcher that matches when a control is invalid and dirty. */


class ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }

}
/** @nocollapse */


ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || ShowOnDirtyErrorStateMatcher)();
};
/** @nocollapse */


ShowOnDirtyErrorStateMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ShowOnDirtyErrorStateMatcher,
  factory: ShowOnDirtyErrorStateMatcher.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
/** Provider that defines how form controls behave with regards to displaying error messages. */


class ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }

}
/** @nocollapse */


ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
  return new (t || ErrorStateMatcher)();
};
/** @nocollapse */


ErrorStateMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ErrorStateMatcher,
  factory: ErrorStateMatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();

const enUS = {
  relativeTemplates: {
    short: {
      SECONDS_AGO: 'Just now',
      MINUTES_AGO: '{MINUTES_PASSED}{NBSP}min ago',
      TODAY: '{TIME}',
      YESTERDAY: 'Yesterday, {TIME}',
      BEFORE_YESTERDAY: '{CURRENT_YEAR, select, yes{{SHORT_DATE}, {TIME}} other{{SHORT_DATE}, {YEAR}}}'
    },
    long: {
      SECONDS_AGO: 'Just now',
      MINUTES_AGO: '{MINUTES_PASSED, plural, =1{#{NBSP}minute} other{#{NBSP}minutes}} ago',
      TODAY: '{TIME}',
      YESTERDAY: 'Yesterday, {TIME}',
      BEFORE_YESTERDAY: '{CURRENT_YEAR, select, yes{{DATE}, {TIME}} other{{DATE}, {YEAR}}}'
    }
  },
  absoluteTemplates: {
    short: {
      DATE: '{CURRENT_YEAR, select, yes{{SHORT_DATE}} other{{SHORT_DATE}, {YEAR}}}',
      DATETIME: `{
                CURRENT_YEAR,
                select,
                    yes{{SHORT_DATE}, {TIME}}
                    other{{SHORT_DATE}, {YEAR}, {TIME}}
            }{
                SHOW_MILLISECONDS,
                select,
                    yes{:{SECONDS}{MILLISECONDS}}
                    other{}
            }`
    },
    long: {
      DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE}, {YEAR}}}',
      DATETIME: `{
                CURRENT_YEAR,
                select,
                    yes{{DATE}, {TIME}}
                    other{{DATE}, {YEAR}, {TIME}}
            }{
                SHOW_MILLISECONDS,
                select,
                    yes{:{SECONDS}{MILLISECONDS}}
                    other{}
            }`
    }
  },
  rangeTemplates: {
    closedRange: {
      short: {
        START_DATE: '{CURRENT_YEAR, select, yes{{SHORT_DATE}} other{{SHORT_DATE}, {YEAR}}}',
        END_DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{DAY}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{SHORT_DATE}}
                                other{{SHORT_DATE}, {YEAR}}
                        }}
                }`,
        DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{START_DATE}{DASH}{END_DATE}}
                        other{{START_DATE}{LONG_DASH}{END_DATE}}
                }`,
        START_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{TIME}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{SHORT_DATE}, {TIME}}
                                other{{SHORT_DATE}, {YEAR}, {TIME}}
                        }}
                }`,
        END_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{
                            CURRENT_YEAR,
                            select,
                                yes{{TIME}, {SHORT_DATE}}
                                other{{TIME}, {SHORT_DATE}, {YEAR}}
                        }}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{SHORT_DATE}, {TIME}}
                                other{{SHORT_DATE}, {YEAR}, {TIME}}
                        }}
                }`,
        DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{START_DATETIME}{DASH}{END_DATETIME}}
                        other{{START_DATETIME}{LONG_DASH}{END_DATETIME}}
                }`
      },
      middle: {
        START_DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{DAY}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}}
                                other{{DATE}, {YEAR}}
                        }}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE}, {YEAR}}}',
        DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{START_DATE}{DASH}{END_DATE}}
                        other{{START_DATE}{LONG_DASH}{END_DATE}}
                }`,
        START_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{TIME}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE}, {YEAR}, {TIME}}
                        }}
                }`,
        END_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{
                            CURRENT_YEAR,
                            select,
                                yes{{TIME}, {DATE}}
                                other{{TIME}, {DATE}, {YEAR}}
                        }}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE}, {YEAR}, {TIME}}
                        }}
                }`,
        DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{START_DATETIME}{DASH}{END_DATETIME}}
                        other{{START_DATETIME}{LONG_DASH}{END_DATETIME}}
                }`
      },
      long: {
        START_DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE}, {YEAR}}}',
        END_DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{DAY}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}}
                                other{{DATE}, {YEAR}}
                        }}
                }`,
        DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{START_DATE}{DASH}{END_DATE}}
                        other{{START_DATE}{LONG_DASH}{END_DATE}}
                }`,
        START_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, from{NBSP}{TIME}}
                                other{{DATE}, {YEAR}, from{NBSP}{TIME}}
                        }}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE}, {YEAR}, {TIME}}
                        }}
                }`,
        END_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{to{NBSP}{TIME}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE}, {YEAR}, {TIME}}
                        }}
                }`,
        DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{START_DATETIME} {END_DATETIME}}
                        other{From {START_DATETIME} to{NBSP}{END_DATETIME}}
                }`
      }
    },
    openedRange: {
      short: {
        START_DATE: `{
                    CURRENT_YEAR,
                    select,
                        yes{{SHORT_DATE}}
                        other{{SHORT_DATE} {YEAR}}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{SHORT_DATE}} other{{SHORT_DATE} {YEAR}}}',
        DATE: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{From{NBSP}{START_DATE}}
                        other{Until{NBSP}{END_DATE}}
                }`,
        START_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{SHORT_DATE}, {TIME}}
                        other{{SHORT_DATE} {YEAR}, {TIME}}
                }`,
        END_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{SHORT_DATE}, {TIME}}
                        other{{SHORT_DATE} {YEAR}, {TIME}}
                }`,
        DATETIME: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{From{NBSP}{START_DATETIME}}
                        other{Until{NBSP}{END_DATETIME}}
                }`
      },
      long: {
        START_DATE: `{
                    CURRENT_YEAR,
                    select,
                        yes{{DATE}}
                        other{{DATE} {YEAR}}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE} {YEAR}}}',
        DATE: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{From{NBSP}{START_DATE}}
                        other{Until{NBSP}{END_DATE}}
                }`,
        START_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{DATE}, {TIME}}
                        other{{DATE} {YEAR}, {TIME}}
                }`,
        END_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{DATE}, {TIME}}
                        other{{DATE} {YEAR}, {TIME}}
                }`,
        DATETIME: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{From{NBSP}{START_DATETIME}}
                        other{Until{NBSP}{END_DATETIME}}
                }`
      }
    }
  }
};
const ruRU = {
  relativeTemplates: {
    short: {
      SECONDS_AGO: 'Только что',
      MINUTES_AGO: '{MINUTES_PASSED}{NBSP}мин назад',
      TODAY: '{TIME}',
      YESTERDAY: 'Вчера, {TIME}',
      BEFORE_YESTERDAY: '{CURRENT_YEAR, select, yes{{SHORT_DATE}, {TIME}} other{{SHORT_DATE} {YEAR}}}'
    },
    long: {
      SECONDS_AGO: 'Только что',
      MINUTES_AGO: '{MINUTES_PASSED, plural, =1{#{NBSP}минуту} =2{#{NBSP}минуты} other{#{NBSP}минут}} назад',
      TODAY: '{TIME}',
      YESTERDAY: 'Вчера, {TIME}',
      BEFORE_YESTERDAY: '{CURRENT_YEAR, select, yes{{DATE}, {TIME}} other{{DATE} {YEAR}}}'
    }
  },
  absoluteTemplates: {
    short: {
      DATE: '{CURRENT_YEAR, select, yes{{SHORT_DATE}} other{{SHORT_DATE} {YEAR}}}',
      DATETIME: `{
                CURRENT_YEAR,
                select,
                    yes{{SHORT_DATE}, {TIME}}
                    other{{SHORT_DATE} {YEAR}, {TIME}}
            }{
                SHOW_MILLISECONDS,
                select,
                    yes{:{SECONDS}{MILLISECONDS}}
                    other{}
            }`
    },
    long: {
      DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE} {YEAR}}}',
      DATETIME: `{
                CURRENT_YEAR,
                select,
                    yes{{DATE}, {TIME}}
                    other{{DATE} {YEAR}, {TIME}}
            }{
                SHOW_MILLISECONDS,
                select,
                    yes{:{SECONDS}{MILLISECONDS}}
                    other{}
            }`
    }
  },
  rangeTemplates: {
    closedRange: {
      short: {
        START_DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{DAY}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{SHORT_DATE}}
                                other{{SHORT_DATE} {YEAR}}
                        }}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{SHORT_DATE}} other{{SHORT_DATE} {YEAR}}}',
        DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{START_DATE}{DASH}{END_DATE}}
                        other{{START_DATE}{LONG_DASH}{END_DATE}}
                }`,
        START_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{TIME}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{SHORT_DATE}, {TIME}}
                                other{{SHORT_DATE} {YEAR}, {TIME}}
                        }}
                }`,
        END_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{
                            CURRENT_YEAR,
                            select,
                                yes{{TIME}, {SHORT_DATE}}
                                other{{TIME}, {SHORT_DATE} {YEAR}}
                        }}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{SHORT_DATE}, {TIME}}
                                other{{SHORT_DATE} {YEAR}, {TIME}}
                        }}
                }`,
        DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{START_DATETIME}{DASH}{END_DATETIME}}
                        other{{START_DATETIME}{LONG_DASH}{END_DATETIME}}
                }`
      },
      middle: {
        START_DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{DAY}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}}
                                other{{DATE} {YEAR}}
                        }}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE} {YEAR}}}',
        DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{START_DATE}{DASH}{END_DATE}}
                        other{{START_DATE}{LONG_DASH}{END_DATE}}
                }`,
        START_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{TIME}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE} {YEAR}, {TIME}}
                        }}
                }`,
        END_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{
                            CURRENT_YEAR,
                            select,
                                yes{{TIME}, {DATE}}
                                other{{TIME}, {DATE} {YEAR}}
                        }}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE} {YEAR}, {TIME}}
                        }}
                }`,
        DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{START_DATETIME}{DASH}{END_DATETIME}}
                        other{{START_DATETIME}{LONG_DASH}{END_DATETIME}}
                }`
      },
      long: {
        START_DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{DAY}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}}
                                other{{DATE} {YEAR}}
                        }}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE} {YEAR}}}',
        DATE: `{
                    SAME_MONTH,
                    select,
                        yes{{START_DATE}{DASH}{END_DATE}}
                        other{{START_DATE}{LONG_DASH}{END_DATE}}
                }`,
        START_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, с{NBSP}{TIME}}
                                other{{DATE} {YEAR}, с{NBSP}{TIME}}
                        }}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE} {YEAR}, {TIME}}
                        }}
                }`,
        END_DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{по{NBSP}{TIME}}
                        other{{
                            CURRENT_YEAR,
                            select,
                                yes{{DATE}, {TIME}}
                                other{{DATE} {YEAR}, {TIME}}
                        }}
                }`,
        DATETIME: `{
                    SAME_DAY,
                    select,
                        yes{{START_DATETIME} {END_DATETIME}}
                        other{С{NBSP}{START_DATETIME} по{NBSP}{END_DATETIME}}
                }`
      }
    },
    openedRange: {
      short: {
        START_DATE: `{
                    CURRENT_YEAR,
                    select,
                        yes{{SHORT_DATE}}
                        other{{SHORT_DATE} {YEAR}}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{SHORT_DATE}} other{{SHORT_DATE} {YEAR}}}',
        DATE: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{С{NBSP}{START_DATE}}
                        other{По{NBSP}{END_DATE}}
                }`,
        START_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{SHORT_DATE}, {TIME}}
                        other{{SHORT_DATE} {YEAR}, {TIME}}
                }`,
        END_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{SHORT_DATE}, {TIME}}
                        other{{SHORT_DATE} {YEAR}, {TIME}}
                }`,
        DATETIME: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{С{NBSP}{START_DATETIME}}
                        other{По{NBSP}{END_DATETIME}}
                }`
      },
      long: {
        START_DATE: `{
                    CURRENT_YEAR,
                    select,
                        yes{{DATE}}
                        other{{DATE} {YEAR}}
                }`,
        END_DATE: '{CURRENT_YEAR, select, yes{{DATE}} other{{DATE} {YEAR}}}',
        DATE: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{С{NBSP}{START_DATE}}
                        other{По{NBSP}{END_DATE}}
                }`,
        START_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{DATE}, {TIME}}
                        other{{DATE} {YEAR}, {TIME}}
                }`,
        END_DATETIME: `{
                    CURRENT_YEAR,
                    select,
                        yes{{DATE}, {TIME}}
                        other{{DATE} {YEAR}, {TIME}}
                }`,
        DATETIME: `{
                    RANGE_TYPE,
                    select,
                        onlyStart{С{NBSP}{START_DATETIME}}
                        other{По{NBSP}{END_DATETIME}}
                }`
      }
    }
  }
}; // tslint:disable:no-magic-numbers

class DateFormatter {
  constructor(adapter, locale) {
    this.adapter = adapter;
    this.invalidDateErrorText = 'Invalid date';
    this.config = locale === 'en' ? enUS : ruRU;
    this.messageFormat = new messageformat__WEBPACK_IMPORTED_MODULE_0__(locale);
  }

  setLocale(locale) {
    this.config = locale === 'en' ? enUS : ruRU;
    this.adapter.setLocale(locale);
  }
  /**
   * @param date - date
   * @param template - template
   * @returns relative date by template
   */


  relativeDate(date, template) {
    if (!this.adapter.isDateInstance(date)) {
      throw new Error(this.invalidDateErrorText);
    }

    const totalSeconds = Math.abs(this.adapter.diffNow(date, 'seconds'));
    const totalMinutes = Math.floor(Math.abs(this.adapter.diffNow(date, 'minutes')));
    const isToday = this.adapter.hasSame(this.adapter.today(), date, 'days');
    const isYesterday = this.adapter.diffNow(date, 'days') <= -1 && this.adapter.diffNow(date, 'days') > -2;
    const templateVariables = Object.assign(Object.assign({}, this.adapter.config.variables), template.variables);
    const variables = this.compileVariables(date, templateVariables);
    let newTemplate;

    if (totalSeconds <= 59) {
      // seconds ago
      variables.SECONDS_PASSED = totalSeconds;
      newTemplate = template.SECONDS_AGO;
    } else if (totalMinutes <= 59) {
      // minutes ago
      variables.MINUTES_PASSED = totalMinutes;
      newTemplate = template.MINUTES_AGO;
    } else if (isToday) {
      newTemplate = template.TODAY;
    } else if (isYesterday) {
      newTemplate = template.YESTERDAY;
    } else {
      // before yesterday
      newTemplate = template.BEFORE_YESTERDAY;
    }

    return this.messageFormat.compile(newTemplate)(variables);
  }
  /**
   * @param date - date
   * @returns relative date in short format
   */


  relativeShortDate(date) {
    return this.relativeDate(date, this.config.relativeTemplates.short);
  }
  /**
   * @param date - date
   * @returns relative date in long format
   */


  relativeLongDate(date) {
    return this.relativeDate(date, this.config.relativeTemplates.long);
  }
  /**
   * @param date - date
   * @param params - parameters
   * @param datetime - should time be shown as well
   * @param milliseconds - should time with milliseconds be shown as well
   * @returns absolute date in common format
   */


  absoluteDate(date, params, datetime = false, milliseconds = false) {
    if (!this.adapter.isDateInstance(date)) {
      throw new Error(this.invalidDateErrorText);
    }

    const variables = this.compileVariables(date, Object.assign(Object.assign({}, this.adapter.config.variables), params.variables));
    variables.SHOW_MILLISECONDS = milliseconds ? 'yes' : 'no';
    const template = datetime ? params.DATETIME : params.DATE;
    return this.messageFormat.compile(template)(variables);
  }
  /**
   * @param date - date
   * @returns absolute date in short format
   */


  absoluteShortDate(date) {
    return this.absoluteDate(date, this.config.absoluteTemplates.short);
  }
  /**
   * @param date - date
   * @param options - AbsoluteDateTimeOptions
   * @returns absolute date in short format with time
   */


  absoluteShortDateTime(date, options) {
    return this.absoluteDate(date, this.config.absoluteTemplates.short, true, options === null || options === void 0 ? void 0 : options.milliseconds);
  }
  /**
   * @param date - date
   * @returns absolute date in long format
   */


  absoluteLongDate(date) {
    return this.absoluteDate(date, this.config.absoluteTemplates.long);
  }
  /**
   * @param date - date
   * @param options - AbsoluteDateTimeOptions
   * @returns absolute date in long format with time
   */


  absoluteLongDateTime(date, options) {
    return this.absoluteDate(date, this.config.absoluteTemplates.long, true, options === null || options === void 0 ? void 0 : options.milliseconds);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @param template - template
   * @returns opened date
   */


  openedRangeDate(startDate, endDate, template) {
    if (!this.adapter.isDateInstance(startDate) && !this.adapter.isDateInstance(endDate)) {
      throw new Error(this.invalidDateErrorText);
    }

    const variables = Object.assign(Object.assign({}, this.adapter.config.variables), template.variables);
    let params = {};

    if (startDate) {
      const startDateVariables = this.compileVariables(startDate, variables);
      params = Object.assign(Object.assign({}, variables), {
        START_DATE: this.messageFormat.compile(template.START_DATE)(startDateVariables),
        RANGE_TYPE: 'onlyStart'
      });
    } else if (endDate) {
      const endDateVariables = this.compileVariables(endDate, variables);
      params = Object.assign(Object.assign({}, variables), {
        END_DATE: this.messageFormat.compile(template.END_DATE)(endDateVariables),
        RANGE_TYPE: 'onlyEnd'
      });
    }

    return this.messageFormat.compile(template.DATE)(params);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @param template - template
   * @returns opened date
   */


  openedRangeDateTime(startDate, endDate, template) {
    if (!this.adapter.isDateInstance(startDate) && !this.adapter.isDateInstance(endDate)) {
      throw new Error(this.invalidDateErrorText);
    }

    const variables = Object.assign(Object.assign({}, this.adapter.config.variables), template.variables);
    let params = {};

    if (startDate) {
      const startDateVariables = this.compileVariables(startDate, variables);
      params = Object.assign(Object.assign({}, variables), {
        START_DATETIME: this.messageFormat.compile(template.START_DATETIME)(startDateVariables),
        RANGE_TYPE: 'onlyStart'
      });
    } else if (endDate) {
      const endDateVariables = this.compileVariables(endDate, variables);
      params = Object.assign(Object.assign({}, variables), {
        END_DATETIME: this.messageFormat.compile(template.END_DATETIME)(endDateVariables),
        RANGE_TYPE: 'onlyEnd'
      });
    }

    return this.messageFormat.compile(template.DATETIME)(params);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @param template - template
   * @returns range date in template format
   */


  rangeDate(startDate, endDate, template) {
    if (!this.adapter.isDateInstance(startDate) || !this.adapter.isDateInstance(endDate)) {
      throw new Error(this.invalidDateErrorText);
    }

    const variables = Object.assign(Object.assign({}, this.adapter.config.variables), template.variables);
    const sameMonth = this.hasSame(startDate, endDate, 'month');
    const startDateVariables = this.compileVariables(startDate, variables);
    startDateVariables.SAME_MONTH = sameMonth;
    const endDateVariables = this.compileVariables(endDate, variables);
    endDateVariables.SAME_MONTH = sameMonth;
    const bothCurrentYear = startDateVariables.CURRENT_YEAR === 'yes' && endDateVariables.CURRENT_YEAR === 'yes';
    startDateVariables.CURRENT_YEAR = bothCurrentYear ? 'yes' : 'no';
    endDateVariables.CURRENT_YEAR = bothCurrentYear ? 'yes' : 'no';
    const params = Object.assign(Object.assign({}, variables), {
      START_DATE: this.messageFormat.compile(template.START_DATE)(startDateVariables),
      END_DATE: this.messageFormat.compile(template.END_DATE)(endDateVariables),
      SAME_MONTH: sameMonth
    });
    return this.messageFormat.compile(template.DATE)(params);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @param template - template
   * @returns range date in template format with time
   */


  rangeDateTime(startDate, endDate, template) {
    if (!this.adapter.isDateInstance(startDate) || !this.adapter.isDateInstance(endDate)) {
      throw new Error(this.invalidDateErrorText);
    }

    const variables = Object.assign(Object.assign({}, this.adapter.config.variables), template.variables);
    const sameMonth = this.hasSame(startDate, endDate, 'month');
    const sameDay = this.hasSame(startDate, endDate, 'day');
    const startDateVariables = this.compileVariables(startDate, variables);
    startDateVariables.SAME_MONTH = sameMonth;
    startDateVariables.SAME_DAY = sameDay;
    const endDateVariables = this.compileVariables(endDate, variables);
    endDateVariables.SAME_MONTH = sameMonth;
    endDateVariables.SAME_DAY = sameDay;
    const bothCurrentYear = startDateVariables.CURRENT_YEAR === 'yes' && endDateVariables.CURRENT_YEAR === 'yes';
    startDateVariables.CURRENT_YEAR = bothCurrentYear ? 'yes' : 'no';
    endDateVariables.CURRENT_YEAR = bothCurrentYear ? 'yes' : 'no';
    const params = Object.assign(Object.assign({}, variables), {
      START_DATETIME: this.messageFormat.compile(template.START_DATETIME)(startDateVariables),
      END_DATETIME: this.messageFormat.compile(template.END_DATETIME)(endDateVariables),
      SAME_MONTH: sameMonth,
      SAME_DAY: sameDay
    });
    return this.messageFormat.compile(template.DATETIME)(params);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @returns range date in short format
   */


  rangeShortDate(startDate, endDate) {
    const rangeTemplates = this.config.rangeTemplates;

    if (startDate && endDate) {
      return this.rangeDate(startDate, endDate, rangeTemplates.closedRange.short);
    }

    return this.openedRangeDate(startDate, endDate || null, rangeTemplates.openedRange.short);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @returns range date in short format with time
   */


  rangeShortDateTime(startDate, endDate) {
    const rangeTemplates = this.config.rangeTemplates;

    if (startDate && endDate) {
      return this.rangeDateTime(startDate, endDate, rangeTemplates.closedRange.short);
    }

    return this.openedRangeDateTime(startDate, endDate || null, rangeTemplates.openedRange.short);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @returns range date in long format
   */


  rangeLongDate(startDate, endDate) {
    const rangeTemplates = this.config.rangeTemplates;

    if (startDate && endDate) {
      return this.rangeDate(startDate, endDate, rangeTemplates.closedRange.long);
    }

    return this.openedRangeDate(startDate, endDate || null, rangeTemplates.openedRange.long);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @returns range date in long format with time
   */


  rangeLongDateTime(startDate, endDate) {
    const rangeTemplates = this.config.rangeTemplates;

    if (startDate && endDate) {
      return this.rangeDateTime(startDate, endDate, rangeTemplates.closedRange.long);
    }

    return this.openedRangeDateTime(startDate, endDate || null, rangeTemplates.openedRange.long);
  }
  /**
   * @param startDate - start date
   * @param endDate - end date
   * @returns range middle date with time
   */


  rangeMiddleDateTime(startDate, endDate) {
    return this.rangeDateTime(startDate, endDate, this.config.rangeTemplates.closedRange.middle);
  }

  compileVariables(date, variables) {
    const compiledVariables = {}; // tslint:disable-next-line:no-for-in

    for (const key in variables) {
      if (!variables.hasOwnProperty(key)) {
        continue;
      }

      const value = variables[key];
      compiledVariables[key] = this.adapter.format(date, value);
    }

    compiledVariables.CURRENT_YEAR = this.hasSame(date, this.adapter.today(), 'year');
    return compiledVariables;
  }

  hasSame(startDate, endDate, unit) {
    return this.adapter.hasSame(startDate, endDate, unit) ? 'yes' : 'no';
  }

}
/** @nocollapse */


DateFormatter.ɵfac = function DateFormatter_Factory(t) {
  return new (t || DateFormatter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_5__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_5__.MC_DATE_LOCALE));
};
/** @nocollapse */


DateFormatter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: DateFormatter,
  factory: DateFormatter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateFormatter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_5__.DateAdapter
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_5__.MC_DATE_LOCALE]
      }]
    }];
  }, null);
})();
/* tslint:disable:naming-convention */


const MC_LOCALE_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('McLocaleId');
const DEFAULT_MC_LOCALE_ID = 'ru';

function isEmpty(value) {
  return value == null || value === '' || value !== value;
}

function strToNumber(value) {
  if (typeof value === 'string' && !isNaN(Number(value) - parseFloat(value))) {
    return Number(value);
  }

  if (typeof value !== 'number') {
    throw new Error(`${value} is not a number`);
  }

  return value;
}

const NUMBER_FORMAT_REGEXP = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
const minIntGroupPosition = 1;
const minFractionGroupPosition = 3;
const maxFractionGroupPosition = 5;

class ParsedDigitsInfo {}

function parseDigitsInfo(digitsInfo) {
  const parts = digitsInfo.match(NUMBER_FORMAT_REGEXP);

  if (parts === null) {
    throw new Error(`${digitsInfo} is not a valid digit info`);
  }

  const minIntPart = parts[minIntGroupPosition];
  const minFractionPart = parts[minFractionGroupPosition];
  const maxFractionPart = parts[maxFractionGroupPosition];
  const result = new ParsedDigitsInfo();

  if (minIntPart != null) {
    result.minimumIntegerDigits = parseInt(minIntPart);
  }

  if (minFractionPart != null) {
    result.minimumFractionDigits = parseInt(minFractionPart);
  }

  if (maxFractionPart != null) {
    result.maximumFractionDigits = parseInt(maxFractionPart);
  } else if (minFractionPart != null && result.minimumFractionDigits > result.maximumFractionDigits) {
    result.maximumFractionDigits = result.minimumFractionDigits;
  }

  return result;
}

class McDecimalPipe {
  constructor(_locale) {
    this._locale = _locale;
  }
  /**
   * @param value The number to be formatted.
   * @param digitsInfo Decimal representation options, specified by a string
   * in the following format:<br>
   * <code>{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}</code>.
   *   - `minIntegerDigits`: The minimum number of integer digits before the decimal point.
   * Default is `1`.
   *   - `minFractionDigits`: The minimum number of digits after the decimal point.
   * Default is `0`.
   *   - `maxFractionDigits`: The maximum number of digits after the decimal point.
   * Default is `3`.
   * @param locale A locale code for the locale format rules to use.
   * When not supplied, uses the value of `MC_LOCALE_ID`, which is `ru` by default.
   */


  transform(value, digitsInfo, locale) {
    if (isEmpty(value)) {
      return null;
    }

    const currentLocale = locale || this._locale || DEFAULT_MC_LOCALE_ID;
    let parsedDigitsInfo;

    if (digitsInfo) {
      parsedDigitsInfo = parseDigitsInfo(digitsInfo);
    }

    const options = Object.assign({
      useGrouping: true,
      minimumIntegerDigits: 1,
      minimumFractionDigits: 0,
      maximumFractionDigits: 3
    }, parsedDigitsInfo);

    try {
      const num = strToNumber(value);
      return Intl.NumberFormat.call(this, currentLocale, options).format(num);
    } catch (error) {
      throw Error(`InvalidPipeArgument: McDecimalPipe for pipe '${JSON.stringify(error.message)}'`);
    }
  }

}
/** @nocollapse */


McDecimalPipe.ɵfac = function McDecimalPipe_Factory(t) {
  return new (t || McDecimalPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MC_LOCALE_ID, 24));
};
/** @nocollapse */


McDecimalPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "mcNumber",
  type: McDecimalPipe,
  pure: true
});
/** @nocollapse */

McDecimalPipe.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: McDecimalPipe,
  factory: McDecimalPipe.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McDecimalPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'mcNumber'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MC_LOCALE_ID]
      }]
    }];
  }, null);
})();

class McFormattersModule {}
/** @nocollapse */


McFormattersModule.ɵfac = function McFormattersModule_Factory(t) {
  return new (t || McFormattersModule)();
};
/** @nocollapse */


McFormattersModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McFormattersModule
});
/** @nocollapse */

McFormattersModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [DateFormatter]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McFormattersModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [McDecimalPipe],
      declarations: [McDecimalPipe],
      providers: [DateFormatter]
    }]
  }], null, null);
})();

const validationTooltipShowDelay = 10;
const validationTooltipHideDelay = 3000;
const MC_VALIDATION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('McUseValidation', {
  factory: () => ({
    useValidation: true
  })
});

function setValidState(control, validator) {
  if (!control) {
    return;
  }

  control.clearValidators();
  control.updateValueAndValidity({
    emitEvent: false
  });
  control.setValidators(validator);
}
/** This function do next:
 * - run validation on submitting parent form
 * - prevent validation in required validator if form doesn't submitted
 * - if control has focus validation will be prevented
 */


function setMosaicValidation(component) {
  const ngControl = component.ngControl;

  if (!ngControl) {
    return;
  }

  const parentForm = component.parentForm || component.parentFormGroup;

  if (parentForm) {
    parentForm.ngSubmit.subscribe(() => {
      // tslint:disable-next-line: no-unnecessary-type-assertion
      ngControl.control.updateValueAndValidity({
        emitEvent: false
      });
    });
  }

  if (component.ngModel) {
    setMosaicValidationForModelControl(component, component.rawValidators, parentForm);
  } else if (component.formControlName || component.ngControl) {
    setMosaicValidationForFormControl(component, parentForm, ngControl);
  }
}

function setMosaicValidationForModelControl(component, validators, parentForm) {
  if (!validators) {
    return;
  }

  validators.forEach(validator => {
    // tslint:disable-next-line: no-unbound-method
    const originalValidate = validator.validate;

    if (validator instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator) {
      // changed required validation logic
      validator.validate = control => {
        if (parentForm && !parentForm.submitted) {
          return null;
        }

        return originalValidate.call(validator, control);
      };
    } else {
      // changed all other validation logic
      validator.validate = control => {
        if (component.focused) {
          return null;
        }

        return originalValidate.call(validator, control);
      };
    }
  });
}

function setMosaicValidationForFormControl(component, parentForm, ngControl) {
  const originalValidator = ngControl.control.validator; // changed required validation logic after initialization

  if (ngControl.invalid && ngControl.errors.required) {
    Promise.resolve().then(() => setValidState(ngControl.control, originalValidator));
  } // check dynamic updates


  ngControl.statusChanges.subscribe(() => {
    // changed required validation logic
    if (ngControl.invalid && parentForm && !parentForm.submitted && ngControl.errors.required) {
      setValidState(ngControl.control, originalValidator);
    } // changed all other validation logic


    if (ngControl.invalid && component.focused) {
      setValidState(ngControl.control, originalValidator);
    }
  });
}

class McHighlightPipe {
  transform(value, args) {
    if (!args) {
      return value;
    }

    return value.replace(new RegExp(`(${args})`, 'gi'), '<mark class="mc-highlight">$1</mark>');
  }

}
/** @nocollapse */


McHighlightPipe.ɵfac = function McHighlightPipe_Factory(t) {
  return new (t || McHighlightPipe)();
};
/** @nocollapse */


McHighlightPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "mcHighlight",
  type: McHighlightPipe,
  pure: true
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McHighlightPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'mcHighlight'
    }]
  }], null, null);
})();

class McHighlightModule {}
/** @nocollapse */


McHighlightModule.ɵfac = function McHighlightModule_Factory(t) {
  return new (t || McHighlightModule)();
};
/** @nocollapse */


McHighlightModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McHighlightModule
});
/** @nocollapse */

McHighlightModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McHighlightModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
      exports: [McHighlightPipe],
      declarations: [McHighlightPipe]
    }]
  }], null, null);
})();

const selectEvents = 'selectEvents';
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMcSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMcSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMcSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/** The max height of the select's overlay panel */


const SELECT_PANEL_MAX_HEIGHT = 224;
/** The panel's padding on the x-axis */

const SELECT_PANEL_PADDING_X = 1;
/** The panel's x axis padding if it is indented (e.g. there is an option group). */

/* tslint:disable-next-line:no-magic-numbers */

const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */

const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

const MC_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mc-select-scroll-strategy');
/** @docs-private */

function mcSelectScrollStrategyProviderFactory(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */


const MC_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MC_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay],
  useFactory: mcSelectScrollStrategyProviderFactory
};
const POSITION_MAP = {
  top: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom'
  },
  topCenter: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom'
  },
  topLeft: {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom'
  },
  topRight: {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom'
  },
  right: {
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center'
  },
  rightTop: {
    originX: 'end',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'top'
  },
  rightBottom: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom'
  },
  bottom: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top'
  },
  bottomCenter: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top'
  },
  bottomLeft: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top'
  },
  bottomRight: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top'
  },
  left: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center'
  },
  leftTop: {
    originX: 'start',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'top'
  },
  leftBottom: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'bottom'
  }
};
const EXTENDED_OVERLAY_POSITIONS = objectValues([POSITION_MAP.top, POSITION_MAP.topLeft, POSITION_MAP.topRight, POSITION_MAP.right, POSITION_MAP.rightTop, POSITION_MAP.rightBottom, POSITION_MAP.bottom, POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.left, POSITION_MAP.leftTop, POSITION_MAP.leftBottom]);
const TOP_POSITION_PRIORITY = objectValues([POSITION_MAP.top, POSITION_MAP.bottom, POSITION_MAP.rightBottom, POSITION_MAP.leftBottom, POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight]);
const BOTTOM_POSITION_PRIORITY = objectValues([POSITION_MAP.bottom, POSITION_MAP.top, POSITION_MAP.topLeft, POSITION_MAP.topRight, POSITION_MAP.rightBottom, POSITION_MAP.leftBottom]);
const RIGHT_POSITION_PRIORITY = objectValues([POSITION_MAP.right, POSITION_MAP.left, POSITION_MAP.leftTop, POSITION_MAP.leftBottom, POSITION_MAP.top, POSITION_MAP.bottom]);
const LEFT_POSITION_PRIORITY = objectValues([POSITION_MAP.left, POSITION_MAP.right, POSITION_MAP.rightTop, POSITION_MAP.rightBottom, POSITION_MAP.top, POSITION_MAP.bottom]);
const RIGHT_TOP_POSITION_PRIORITY = objectValues([POSITION_MAP.rightTop, POSITION_MAP.leftTop, POSITION_MAP.left, POSITION_MAP.leftBottom, POSITION_MAP.topLeft, POSITION_MAP.bottomLeft]);
const RIGHT_BOTTOM_POSITION_PRIORITY = objectValues([POSITION_MAP.rightBottom, POSITION_MAP.leftBottom, POSITION_MAP.left, POSITION_MAP.leftTop, POSITION_MAP.topLeft, POSITION_MAP.bottomLeft]);
const LEFT_TOP_POSITION_PRIORITY = objectValues([POSITION_MAP.leftTop, POSITION_MAP.rightTop, POSITION_MAP.right, POSITION_MAP.rightBottom, POSITION_MAP.topRight, POSITION_MAP.bottomRight]);
const LEFT_BOTTOM_POSITION_PRIORITY = objectValues([POSITION_MAP.leftBottom, POSITION_MAP.rightBottom, POSITION_MAP.right, POSITION_MAP.rightTop, POSITION_MAP.topRight, POSITION_MAP.bottomRight]);
const TOP_LEFT_POSITION_PRIORITY = objectValues([POSITION_MAP.topLeft, POSITION_MAP.topRight, POSITION_MAP.bottomLeft, POSITION_MAP.bottom, POSITION_MAP.bottomRight, POSITION_MAP.leftBottom, POSITION_MAP.rightBottom]);
const TOP_RIGHT_POSITION_PRIORITY = objectValues([POSITION_MAP.topRight, POSITION_MAP.topLeft, POSITION_MAP.bottomRight, POSITION_MAP.bottom, POSITION_MAP.bottomLeft, POSITION_MAP.leftBottom, POSITION_MAP.rightBottom]);
const BOTTOM_RIGHT_POSITION_PRIORITY = objectValues([POSITION_MAP.bottomRight, POSITION_MAP.bottomLeft, POSITION_MAP.topRight, POSITION_MAP.top, POSITION_MAP.topLeft, POSITION_MAP.leftTop, POSITION_MAP.rightTop]);
const BOTTOM_LEFT_POSITION_PRIORITY = objectValues([POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topLeft, POSITION_MAP.top, POSITION_MAP.topRight, POSITION_MAP.rightTop, POSITION_MAP.leftTop]);
const POSITION_PRIORITY_STRATEGY = {
  top: TOP_POSITION_PRIORITY,
  topLeft: TOP_LEFT_POSITION_PRIORITY,
  topRight: TOP_RIGHT_POSITION_PRIORITY,
  bottom: BOTTOM_POSITION_PRIORITY,
  bottomLeft: BOTTOM_LEFT_POSITION_PRIORITY,
  bottomRight: BOTTOM_RIGHT_POSITION_PRIORITY,
  left: LEFT_POSITION_PRIORITY,
  leftTop: LEFT_TOP_POSITION_PRIORITY,
  leftBottom: LEFT_BOTTOM_POSITION_PRIORITY,
  right: RIGHT_POSITION_PRIORITY,
  rightTop: RIGHT_TOP_POSITION_PRIORITY,
  rightBottom: RIGHT_BOTTOM_POSITION_PRIORITY
};
const POSITION_TO_CSS_MAP = {
  top: 'top',
  topLeft: 'top-left',
  topRight: 'top-right',
  right: 'right',
  rightTop: 'right-top',
  rightBottom: 'right-bottom',
  left: 'left',
  leftTop: 'left-top',
  leftBottom: 'left-bottom',
  bottom: 'bottom',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right'
};

function arrayMap(array, iteratee) {
  let index = -1;
  const length = array === null ? 0 : array.length;
  const result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }

  return result;
}

function baseValues(object, props) {
  return arrayMap(props, key => object[key]);
}

function objectValues(object) {
  return object === null ? [] : baseValues(object, Object.keys(object));
}

const fadeAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('fadeAnimation', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
  opacity: 1
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('150ms cubic-bezier(0.4, 0.0, 1, 1)'))]);
var AnimationCurves;

(function (AnimationCurves) {
  AnimationCurves["StandardCurve"] = "cubic-bezier(0.4,0.0,0.2,1)";
  AnimationCurves["DecelerationCurve"] = "cubic-bezier(0.0,0.0,0.2,1)";
  AnimationCurves["AccelerationCurve"] = "cubic-bezier(0.4,0.0,1,1)";
  AnimationCurves["SharpCurve"] = "cubic-bezier(0.4,0.0,0.6,1)";
})(AnimationCurves || (AnimationCurves = {}));
/**
 * The following are all the animations for the mc-select component, with each
 * const containing the metadata for one animation.
 *
 */


const mcSelectAnimations = {
  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('transformPanel', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    transform: 'scaleY(0)',
    minWidth: '100%',
    opacity: 0
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('void => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('150ms cubic-bezier(0.25, 0.8, 0.25, 1)')])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => void', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('250ms 100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    opacity: 0
  }))])]),

  /**
   * This animation fades in the background color and text content of the
   * select's options. It is time delayed to occur 100ms after the overlay
   * panel has transformed in.
   */
  fadeInContent: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('fadeInContent', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('void => showing', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
const transformPanel = mcSelectAnimations.transformPanel;
const fadeInContent = mcSelectAnimations.fadeInContent;
/** InjectionToken that can be used to specify the global label options. */

const MC_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('mc-label-global-options');
var MultipleMode;

(function (MultipleMode) {
  MultipleMode["CHECKBOX"] = "checkbox";
  MultipleMode["KEYBOARD"] = "keyboard";
})(MultipleMode || (MultipleMode = {}));
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mc-primary .mc-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mc-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */


class McPseudoCheckbox {
  constructor() {
    this.state = 'unchecked';
    this.disabled = false;
  }

}
/** @nocollapse */


McPseudoCheckbox.ɵfac = function McPseudoCheckbox_Factory(t) {
  return new (t || McPseudoCheckbox)();
};
/** @nocollapse */


McPseudoCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: McPseudoCheckbox,
  selectors: [["mc-pseudo-checkbox"]],
  hostAttrs: [1, "mc-pseudo-checkbox"],
  hostVars: 6,
  hostBindings: function McPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-indeterminate", ctx.state === "indeterminate")("mc-checked", ctx.state === "checked")("mc-disabled", ctx.disabled);
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled"
  },
  decls: 2,
  vars: 0,
  consts: [[1, "mc-checkbox-checkmark", "mc", "mc-check_16"], [1, "mc-checkbox-mixedmark", "mc", "mc-minus_16"]],
  template: function McPseudoCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
    }
  },
  styles: [".mc-pseudo-checkbox{position:relative;display:inline-block;box-sizing:border-box;width:16px;width:var(--mc-checkbox-size-width, 16px);height:16px;height:var(--mc-checkbox-size-width, 16px);border-radius:3px;border-width:1px;border-width:var(--mc-checkbox-size-border-width, 1px);border-style:solid;cursor:pointer;vertical-align:middle;flex-shrink:0}.mc-pseudo-checkbox .mc-checkbox-checkmark,.mc-pseudo-checkbox .mc-checkbox-mixedmark{display:none;position:absolute;top:calc(-1 * 1px);top:calc(-1 * var(--mc-checkbox-size-border-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mc-checkbox-size-border-width, 1px))}.mc-pseudo-checkbox.mc-pseudo-checkbox-checked,.mc-pseudo-checkbox.mc-pseudo-checkbox-indeterminate{border-color:transparent}.mc-pseudo-checkbox.mc-checked .mc-checkbox-checkmark{display:inline-block}.mc-pseudo-checkbox.mc-indeterminate .mc-checkbox-mixedmark{display:inline-block}.mc-pseudo-checkbox.mc-disabled{cursor:default}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McPseudoCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mc-pseudo-checkbox',
      templateUrl: 'pseudo-checkbox.partial.html',
      styleUrls: ['pseudo-checkbox.scss'],
      host: {
        class: 'mc-pseudo-checkbox',
        '[class.mc-indeterminate]': 'state === "indeterminate"',
        '[class.mc-checked]': 'state === "checked"',
        '[class.mc-disabled]': 'disabled'
      },
      preserveWhitespaces: false,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None
    }]
  }], null, {
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class McPseudoCheckboxModule {}
/** @nocollapse */


McPseudoCheckboxModule.ɵfac = function McPseudoCheckboxModule_Factory(t) {
  return new (t || McPseudoCheckboxModule)();
};
/** @nocollapse */


McPseudoCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McPseudoCheckboxModule
});
/** @nocollapse */

McPseudoCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McPseudoCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
      exports: [McPseudoCheckbox],
      declarations: [McPseudoCheckbox]
    }]
  }], null, null);
})();

class McMeasureScrollbarService {
  constructor(document) {
    this.document = document;
    this.scrollbarMeasure = {
      position: 'absolute',
      top: '-9999px',
      width: '50px',
      height: '50px',
      overflow: 'scroll'
    };
    this.initScrollBarWidth();
  }

  get scrollBarWidth() {
    if (this._scrollBarWidth) {
      return this._scrollBarWidth;
    }

    this.initScrollBarWidth();
    return this._scrollBarWidth;
  }

  initScrollBarWidth() {
    const scrollDiv = this.document.createElement('div'); // tslint:disable-next-line

    for (const scrollProp in this.scrollbarMeasure) {
      if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
        scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
      }
    }

    this.document.body.appendChild(scrollDiv);
    const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.document.body.removeChild(scrollDiv);
    this._scrollBarWidth = width;
  }

}
/** @nocollapse */


McMeasureScrollbarService.ɵfac = function McMeasureScrollbarService_Factory(t) {
  return new (t || McMeasureScrollbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT));
};
/** @nocollapse */


McMeasureScrollbarService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: McMeasureScrollbarService,
  factory: McMeasureScrollbarService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McMeasureScrollbarService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** @docs-private */


class McOptgroupBase {} // tslint:disable-next-line: naming-convention


const McOptgroupMixinBase = mixinDisabled(McOptgroupBase);
let uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mc-option`.
 */

class McOptgroup extends McOptgroupMixinBase {
  constructor() {
    super(...arguments);
    /** Unique id for the underlying label. */

    this.labelId = `mc-optgroup-label-${uniqueOptgroupIdCounter++}`;
  }

}
/** @nocollapse */


McOptgroup.ɵfac = /* @__PURE__ */function () {
  let ɵMcOptgroup_BaseFactory;
  return function McOptgroup_Factory(t) {
    return (ɵMcOptgroup_BaseFactory || (ɵMcOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](McOptgroup)))(t || McOptgroup);
  };
}();
/** @nocollapse */


McOptgroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: McOptgroup,
  selectors: [["mc-optgroup"]],
  hostAttrs: [1, "mc-optgroup"],
  hostVars: 2,
  hostBindings: function McOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    label: "label"
  },
  exportAs: ["mcOptgroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 2,
  consts: [[1, "mc-optgroup-label", 3, "id"]],
  template: function McOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
    }
  },
  styles: [".mc-optgroup-label{padding-left:17px;padding-left:var(--mc-optgroup-size-padding-left, 17px);-webkit-user-select:none;user-select:none;cursor:default}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McOptgroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mc-optgroup',
      exportAs: 'mcOptgroup',
      templateUrl: 'optgroup.html',
      styleUrls: ['./optgroup.scss'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      host: {
        class: 'mc-optgroup',
        '[class.mc-disabled]': 'disabled'
      }
    }]
  }], null, {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */


let uniqueIdCounter = 0;
/** Event object emitted by McOption when selected or deselected. */

class McOptionSelectionChange {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }

}
/**
 * Injection token used to provide the parent component to options.
 */


const MC_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('MC_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mc-select>` element.
 */

class McOption {
  constructor(element, changeDetectorRef, parent, group) {
    this.element = element;
    this.changeDetectorRef = changeDetectorRef;
    this.parent = parent;
    this.group = group;
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Emits when the state of the option changes and any parents have to be notified. */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this._id = `mc-option-${uniqueIdCounter++}`;
    this._selected = false;
    this._disabled = false;
    this._active = false;
    this.mostRecentViewValue = '';
  }

  get showCheckbox() {
    return this._showCheckbox === undefined ? this.multiple : this._showCheckbox;
  }

  set showCheckbox(value) {
    this._showCheckbox = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */


  get viewValue() {
    // TODO: Add input property alternative for node envs.
    return (this.getHostElement().textContent || '').trim();
  }
  /** Whether the wrapping component is in multiple selection mode. */


  get multiple() {
    return this.parent && this.parent.multiple;
  }

  get id() {
    return this._id;
  }

  get selected() {
    return this._selected;
  }

  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */


  get active() {
    return this._active;
  }

  ngAfterViewChecked() {
    // Since parent components could be using the option's label to display the selected values
    // (e.g. `mc-select`) and they don't have a way of knowing if the option's label has changed
    // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
    // relatively cheap, however we still limit them only to selected options in order to avoid
    // hitting the DOM too often.
    if (this._selected) {
      const viewValue = this.viewValue;

      if (viewValue !== this.mostRecentViewValue) {
        this.mostRecentViewValue = viewValue;
        this.stateChanges.next();
      }
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  getHeight() {
    // tslint:disable-next-line:naming-convention
    const DOMRect = this.element.nativeElement.getClientRects()[0];
    return DOMRect ? DOMRect.height : 0;
  }

  select() {
    if (!this._selected) {
      this._selected = true;
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent();
    }
  }

  deselect() {
    if (this._selected) {
      this._selected = false;
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent();
    }
  }

  focus() {
    const element = this.getHostElement();

    if (typeof element.focus === 'function') {
      element.focus();
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this.changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this.changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */


  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */


  handleKeydown(event) {
    // tslint:disable-next-line
    if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ENTER || event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.SPACE) {
      this.selectViaInteraction(); // Prevent the page from scrolling down and form submits.

      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */


  selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent(true);
    }
  }

  getTabIndex() {
    return this.disabled ? '-1' : '0';
  }

  getHostElement() {
    return this.element.nativeElement;
  }
  /** Emits the selection change event. */


  emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new McOptionSelectionChange(this, isUserInput));
  }

}
/** @nocollapse */


McOption.ɵfac = function McOption_Factory(t) {
  return new (t || McOption)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MC_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](McOptgroup, 8));
};
/** @nocollapse */


McOption.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: McOption,
  selectors: [["mc-option"]],
  hostAttrs: [1, "mc-option"],
  hostVars: 10,
  hostBindings: function McOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McOption_click_HostBindingHandler() {
        return ctx.selectViaInteraction();
      })("keydown", function McOption_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.getTabIndex());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-selected", ctx.selected)("mc-option-multiple", ctx.multiple)("mc-active", ctx.active)("mc-disabled", ctx.disabled);
    }
  },
  inputs: {
    value: "value",
    showCheckbox: "showCheckbox",
    disabled: "disabled"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  },
  exportAs: ["mcOption"],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 1,
  consts: [[3, "state", "disabled", 4, "ngIf"], [1, "mc-option-text"], [1, "mc-option-overlay"], [3, "state", "disabled"]],
  template: function McOption_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, McOption_mc_pseudo_checkbox_0_Template, 1, 2, "mc-pseudo-checkbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCheckbox);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, McPseudoCheckbox],
  styles: [".mc-option{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;max-width:100%;height:32px;height:var(--mc-option-size-height, 32px);border:2px solid transparent;border:var(--mc-option-size-border-width, 2px) solid transparent;cursor:pointer;outline:none;padding-left:16px;padding-left:var(--mc-option-size-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mc-option-size-horizontal-padding, 16px);-webkit-tap-highlight-color:transparent}.mc-option.mc-disabled{cursor:default}.mc-option .mc-pseudo-checkbox{margin-right:8px}.mc-option .mc-option-overlay{position:absolute;top:calc(-1 * 2px);top:calc(-1 * var(--mc-option-size-border-width, 2px));left:calc(-1 * 2px);left:calc(-1 * var(--mc-option-size-border-width, 2px));right:calc(-1 * 2px);right:calc(-1 * var(--mc-option-size-border-width, 2px));bottom:calc(-1 * 2px);bottom:calc(-1 * var(--mc-option-size-border-width, 2px));pointer-events:none;border-radius:inherit}.mc-option-text{display:inline-block;flex-grow:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mc-option',
      exportAs: 'mcOption',
      host: {
        '[attr.tabindex]': 'getTabIndex()',
        class: 'mc-option',
        '[class.mc-selected]': 'selected',
        '[class.mc-option-multiple]': 'multiple',
        '[class.mc-active]': 'active',
        '[class.mc-disabled]': 'disabled',
        '[id]': 'id',
        '(click)': 'selectViaInteraction()',
        '(keydown)': 'handleKeydown($event)'
      },
      styleUrls: ['option.scss'],
      templateUrl: 'option.html',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [MC_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: McOptgroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    showCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */


function countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    const optionsArray = options.toArray();
    const groups = optionGroups.toArray();
    let groupCounter = 0;

    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }

    return groupCounter;
  }

  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionIndex Index of the option to be scrolled into the view.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */


function getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
  const optionOffset = optionIndex * optionHeight;

  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}

class McOptionModule {}
/** @nocollapse */


McOptionModule.ɵfac = function McOptionModule_Factory(t) {
  return new (t || McOptionModule)();
};
/** @nocollapse */


McOptionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McOptionModule
});
/** @nocollapse */

McOptionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, McPseudoCheckboxModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McOptionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, McPseudoCheckboxModule],
      exports: [McOption, McOptgroup],
      declarations: [McOption, McOptgroup]
    }]
  }], null, null);
})();

class McFormElement {
  constructor(element) {
    this.element = element;
    this.margin = false;
    this.isRow = false;
    this.isFieldSet = false;
    this.hasLegend = false;
    this.isHorizontal = false;
  }

  ngAfterContentInit() {
    const classList = this.element.nativeElement.classList;
    this.isRow = classList.contains('mc-form__row');
    this.isHorizontal = classList.contains('mc-horizontal');
    this.isFieldSet = classList.contains('mc-form__fieldset');

    if (this.isFieldSet && this.element.nativeElement.firstElementChild) {
      this.hasLegend = this.element.nativeElement.firstElementChild.classList.contains('mc-form__legend');
    }
  }

}
/** @nocollapse */


McFormElement.ɵfac = function McFormElement_Factory(t) {
  return new (t || McFormElement)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef));
};
/** @nocollapse */


McFormElement.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: McFormElement,
  selectors: [["", 8, "mc-form__row"], ["", 8, "mc-form__fieldset"], ["", 8, "mc-form__legend"]],
  contentQueries: function McFormElement_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, McFormElement, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elements = _t);
    }
  },
  hostVars: 2,
  hostBindings: function McFormElement_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-form-row_margin", ctx.margin);
    }
  },
  exportAs: ["mcFormElement"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McFormElement, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '.mc-form__row, .mc-form__fieldset, .mc-form__legend',
      exportAs: 'mcFormElement',
      host: {
        '[class.mc-form-row_margin]': 'margin'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }];
  }, {
    elements: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [McFormElement]
    }]
  });
})();

class McForm {
  ngAfterContentInit() {
    this.handleElements(this.elements);
  }

  handleElements(elements) {
    elements.forEach((element, index) => {
      const nextElement = elements.get(index + 1);

      if (element.isFieldSet && !element.isHorizontal) {
        this.handleElements(element.elements);
      }

      element.margin = !!(nextElement && !nextElement.hasLegend);
    });
  }

}
/** @nocollapse */


McForm.ɵfac = function McForm_Factory(t) {
  return new (t || McForm)();
};
/** @nocollapse */


McForm.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: McForm,
  selectors: [["", 8, "mc-form-vertical"], ["", 8, "mc-form-horizontal"]],
  contentQueries: function McForm_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, McFormElement, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.elements = _t);
    }
  },
  hostAttrs: [1, "mc-form"],
  exportAs: ["mcForm"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McForm, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '.mc-form-vertical, .mc-form-horizontal',
      exportAs: 'mcForm',
      host: {
        class: 'mc-form'
      }
    }]
  }], null, {
    elements: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [McFormElement]
    }]
  });
})();

class McFormsModule {}
/** @nocollapse */


McFormsModule.ɵfac = function McFormsModule_Factory(t) {
  return new (t || McFormsModule)();
};
/** @nocollapse */


McFormsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McFormsModule
});
/** @nocollapse */

McFormsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      exports: [McForm, McFormElement],
      declarations: [McForm, McFormElement]
    }]
  }], null, null);
})();

var PopUpPlacements;

(function (PopUpPlacements) {
  PopUpPlacements["Top"] = "top";
  PopUpPlacements["TopLeft"] = "topLeft";
  PopUpPlacements["TopRight"] = "topRight";
  PopUpPlacements["Right"] = "right";
  PopUpPlacements["RightTop"] = "rightTop";
  PopUpPlacements["RightBottom"] = "rightBottom";
  PopUpPlacements["Left"] = "left";
  PopUpPlacements["LeftTop"] = "leftTop";
  PopUpPlacements["LeftBottom"] = "leftBottom";
  PopUpPlacements["Bottom"] = "bottom";
  PopUpPlacements["BottomLeft"] = "bottomLeft";
  PopUpPlacements["BottomRight"] = "bottomRight";
})(PopUpPlacements || (PopUpPlacements = {}));

var PopUpVisibility;

(function (PopUpVisibility) {
  PopUpVisibility["Initial"] = "initial";
  PopUpVisibility["Visible"] = "visible";
  PopUpVisibility["Hidden"] = "hidden";
})(PopUpVisibility || (PopUpVisibility = {}));

var PopUpTriggers;

(function (PopUpTriggers) {
  PopUpTriggers["Click"] = "click";
  PopUpTriggers["Focus"] = "focus";
  PopUpTriggers["Hover"] = "hover";
})(PopUpTriggers || (PopUpTriggers = {}));

var PopUpSizes;

(function (PopUpSizes) {
  PopUpSizes["Small"] = "small";
  PopUpSizes["Normal"] = "normal";
  PopUpSizes["Large"] = "large";
})(PopUpSizes || (PopUpSizes = {})); // tslint:disable-next-line:naming-convention


class McPopUp {
  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
    this.classMap = {};
    this.visibility = PopUpVisibility.Initial;
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /** Subject for notifying that the tooltip has been hidden from the view */

    this.onHideSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.closeOnInteraction = false;
  }

  ngOnDestroy() {
    clearTimeout(this.showTimeoutId);
    clearTimeout(this.hideTimeoutId);
    this.onHideSubject.complete();
  }

  isTemplateRef(value) {
    return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef;
  }

  show(delay) {
    if (this.hideTimeoutId) {
      clearTimeout(this.hideTimeoutId);
    }

    this.closeOnInteraction = true;
    this.showTimeoutId = setTimeout(() => {
      this.showTimeoutId = undefined;
      this.visibility = PopUpVisibility.Visible;
      this.visibleChange.emit(true); // Mark for check so if any parent component has set the
      // ChangeDetectionStrategy to OnPush it will be checked anyways

      this.markForCheck();
    }, delay);
  }

  hide(delay) {
    if (this.showTimeoutId) {
      clearTimeout(this.showTimeoutId);
    }

    this.hideTimeoutId = setTimeout(() => {
      this.hideTimeoutId = undefined;
      this.visibility = PopUpVisibility.Hidden;
      this.visibleChange.emit(false);
      this.onHideSubject.next(); // Mark for check so if any parent component has set the
      // ChangeDetectionStrategy to OnPush it will be checked anyways

      this.markForCheck();
    }, delay);
  }

  isVisible() {
    return this.visibility === PopUpVisibility.Visible;
  }

  updateClassMap(placement, customClass, classMap) {
    this.classMap = Object.assign({
      [`${this.prefix}_placement-${placement}`]: true,
      [customClass]: !!customClass
    }, classMap);
  }
  /** Returns an observable that notifies when the tooltip has been hidden from view. */


  afterHidden() {
    return this.onHideSubject.asObservable();
  }

  markForCheck() {
    this.changeDetectorRef.markForCheck();
  }

  animationStart() {
    this.closeOnInteraction = false;
  }

  animationDone({
    toState
  }) {
    if (toState === PopUpVisibility.Hidden && !this.isVisible()) {
      this.onHideSubject.next();
    }

    if (toState === PopUpVisibility.Visible || toState === PopUpVisibility.Hidden) {
      this.closeOnInteraction = true;
    }
  }

  handleBodyInteraction() {
    if (this.closeOnInteraction) {
      this.hide(0);
    }
  }

}
/** @nocollapse */


McPopUp.ɵfac = function McPopUp_Factory(t) {
  return new (t || McPopUp)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
/** @nocollapse */


McPopUp.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: McPopUp
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McPopUp, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, null);
})();

const VIEWPORT_MARGIN = 8; // tslint:disable-next-line:naming-convention

class McPopUpTrigger {
  constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
    this.overlay = overlay;
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.scrollDispatcher = scrollDispatcher;
    this.hostView = hostView;
    this.scrollStrategy = scrollStrategy;
    this.direction = direction;
    this.isOpen = false;
    this.enterDelay = 0;
    this.leaveDelay = 0;
    this.placementChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._placementPriority = null;
    this._placement = PopUpPlacements.Top;
    this._visible = false; // tslint:disable-next-line:naming-convention orthodox-getter-and-setter

    this._disabled = false;
    this.listeners = new Map();
    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();

    this.detach = () => {
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
      }

      this.instance = null;
    };

    this.onPositionChange = $event => {
      if (!this.instance) {
        return;
      }

      let newPlacement = this.placement;
      const {
        originX,
        originY,
        overlayX,
        overlayY
      } = $event.connectionPair;
      Object.keys(this.availablePositions).some(key => {
        if (originX === this.availablePositions[key].originX && originY === this.availablePositions[key].originY && overlayX === this.availablePositions[key].overlayX && overlayY === this.availablePositions[key].overlayY) {
          newPlacement = key;
          return true;
        }

        return false;
      });
      this.placementChange.emit(newPlacement);
      this.updateClassMap(newPlacement);

      if ($event.scrollableViewProperties.isOverlayClipped && this.instance.isVisible()) {
        // After position changes occur and the overlay is clipped by
        // a parent scrollable then close the tooltip.
        this.ngZone.run(() => this.hide());
      }
    };

    this.addEventListener = (listener, event) => {
      this.elementRef.nativeElement.addEventListener(event, listener);
    };

    this.removeEventListener = (listener, event) => {
      this.elementRef.nativeElement.removeEventListener(event, listener);
    };

    this.availablePositions = POSITION_MAP;
  }

  get placementPriority() {
    return this._placementPriority;
  }

  set placementPriority(value) {
    if (value && value.length > 0) {
      this._placementPriority = value;
    } else {
      this._placementPriority = null;
    }
  }

  get placement() {
    return this._placement;
  }

  set placement(value) {
    if (POSITION_TO_CSS_MAP[value]) {
      this._placement = value;
      this.updateClassMap();
    } else {
      this._placement = PopUpPlacements.Top;
      console.warn(`Unknown position: ${value}. Will used default position: ${this._placement}`);
    }

    if (this.visible) {
      this.updatePosition();
    }
  }

  get visible() {
    return this._visible;
  }

  set visible(externalValue) {
    const value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(externalValue);

    if (this._visible !== value) {
      this._visible = value;

      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  ngOnInit() {
    this.initListeners();
  }

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }

    this.listeners.forEach(this.removeEventListener);
    this.listeners.clear();
    this.destroyed.next();
    this.destroyed.complete();
  }

  handleKeydown(event) {
    if (this.isOpen && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ESCAPE) {
      // tslint:disable-line
      this.hide();
    }
  }

  handleTouchend() {
    this.hide();
  }

  show(delay = this.enterDelay) {
    if (this.disabled || this.instance) {
      return;
    }

    this.overlayRef = this.createOverlay();
    this.detach();
    this.portal = this.portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.ComponentPortal(this.getOverlayHandleComponentType(), this.hostView);
    this.instance = this.overlayRef.attach(this.portal).instance;
    this.instance.afterHidden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed)).subscribe(this.detach);
    this.updateClassMap();
    this.updateData();
    this.instance.visibleChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)()).subscribe(value => {
      this.visible = value;
      this.visibleChange.emit(value);
      this.isOpen = value;
    });
    this.updatePosition();
    this.instance.show(delay);
  }

  hide(delay = this.leaveDelay) {
    if (this.instance) {
      this.instance.hide(delay);
    }
  }
  /** Create the overlay config and position strategy */


  createOverlay() {
    if (this.overlayRef) {
      return this.overlayRef;
    } // Create connected position strategy that listens for scroll events to reposition.


    const strategy = this.overlay.position().flexibleConnectedTo(this.elementRef).withTransformOriginOn(this.originSelector).withFlexibleDimensions(false).withViewportMargin(VIEWPORT_MARGIN).withPositions([...EXTENDED_OVERLAY_POSITIONS]).withScrollableContainers(this.scrollDispatcher.getAncestorScrollContainers(this.elementRef));
    strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed)).subscribe(this.onPositionChange);
    this.overlayRef = this.overlay.create(Object.assign(Object.assign({}, this.overlayConfig), {
      direction: this.direction,
      positionStrategy: strategy,
      scrollStrategy: this.scrollStrategy()
    }));
    this.closingActions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.delay)(0)).subscribe(() => this.hide());
    this.overlayRef.outsidePointerEvents().subscribe(() => this.instance.handleBodyInteraction());
    this.overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroyed)).subscribe(this.detach);
    return this.overlayRef;
  }

  initListeners() {
    this.clearListeners();

    if (this.trigger.includes(PopUpTriggers.Click)) {
      this.listeners.set('click', () => this.show()).forEach(this.addEventListener);
    }

    if (this.trigger.includes(PopUpTriggers.Hover)) {
      this.listeners.set('mouseenter', () => this.show()).set('mouseleave', () => this.hide()).forEach(this.addEventListener);
    }

    if (this.trigger.includes(PopUpTriggers.Focus)) {
      this.listeners.set('focus', () => this.show()).set('blur', () => this.hide()).forEach(this.addEventListener);
    }
  }
  /** Updates the position of the current popover. */


  updatePosition(reapplyPosition = false) {
    this.overlayRef = this.createOverlay();
    const position = this.overlayRef.getConfig().positionStrategy.withPositions(this.getPrioritizedPositions()).withPush(true);

    if (reapplyPosition) {
      setTimeout(() => position.reapplyLastPosition());
    }
  }

  getPriorityPlacementStrategy(value) {
    const result = [];
    const possiblePositions = Object.keys(this.availablePositions);

    if (Array.isArray(value)) {
      value.forEach(position => {
        if (possiblePositions.includes(position)) {
          result.push(this.availablePositions[position]);
        }
      });
    } else if (possiblePositions.includes(value)) {
      result.push(this.availablePositions[value]);
    }

    return result;
  }

  getPrioritizedPositions() {
    if (this.placementPriority) {
      return this.getPriorityPlacementStrategy(this.placementPriority);
    }

    return POSITION_PRIORITY_STRATEGY[this.placement];
  }

  clearListeners() {
    this.listeners.forEach(this.removeEventListener);
    this.listeners.clear();
  }

}
/** @nocollapse */


McPopUpTrigger.ɵfac = function McPopUpTrigger_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
};
/** @nocollapse */


McPopUpTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: McPopUpTrigger,
  inputs: {
    enterDelay: ["mcEnterDelay", "enterDelay"],
    leaveDelay: ["mcLeaveDelay", "leaveDelay"],
    placementPriority: ["mcPlacementPriority", "placementPriority"],
    placement: ["mcPlacement", "placement"],
    visible: ["mcVisible", "visible"]
  },
  outputs: {
    placementChange: "mcPlacementChange",
    visibleChange: "mcVisibleChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McPopUpTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }, {
      type: undefined
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__.Directionality
    }];
  }, {
    enterDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mcEnterDelay']
    }],
    leaveDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mcLeaveDelay']
    }],
    placementChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['mcPlacementChange']
    }],
    visibleChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
      args: ['mcVisibleChange']
    }],
    placementPriority: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mcPlacementPriority']
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mcPlacement']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ['mcVisible']
    }]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 30005:
/*!************************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-dropdown.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_DROPDOWN_DEFAULT_OPTIONS": function() { return /* binding */ MC_DROPDOWN_DEFAULT_OPTIONS; },
/* harmony export */   "MC_DROPDOWN_DEFAULT_OPTIONS_FACTORY": function() { return /* binding */ MC_DROPDOWN_DEFAULT_OPTIONS_FACTORY; },
/* harmony export */   "MC_DROPDOWN_PANEL": function() { return /* binding */ MC_DROPDOWN_PANEL; },
/* harmony export */   "MC_DROPDOWN_SCROLL_STRATEGY": function() { return /* binding */ MC_DROPDOWN_SCROLL_STRATEGY; },
/* harmony export */   "MC_DROPDOWN_SCROLL_STRATEGY_FACTORY": function() { return /* binding */ MC_DROPDOWN_SCROLL_STRATEGY_FACTORY; },
/* harmony export */   "MC_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER": function() { return /* binding */ MC_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER; },
/* harmony export */   "McDropdown": function() { return /* binding */ McDropdown; },
/* harmony export */   "McDropdownContent": function() { return /* binding */ McDropdownContent; },
/* harmony export */   "McDropdownItem": function() { return /* binding */ McDropdownItem; },
/* harmony export */   "McDropdownModule": function() { return /* binding */ McDropdownModule; },
/* harmony export */   "McDropdownTrigger": function() { return /* binding */ McDropdownTrigger; },
/* harmony export */   "NESTED_PANEL_LEFT_PADDING": function() { return /* binding */ NESTED_PANEL_LEFT_PADDING; },
/* harmony export */   "NESTED_PANEL_TOP_PADDING": function() { return /* binding */ NESTED_PANEL_TOP_PADDING; },
/* harmony export */   "fadeInItems": function() { return /* binding */ fadeInItems; },
/* harmony export */   "mcDropdownAnimations": function() { return /* binding */ mcDropdownAnimations; },
/* harmony export */   "throwMcDropdownInvalidPositionX": function() { return /* binding */ throwMcDropdownInvalidPositionX; },
/* harmony export */   "throwMcDropdownInvalidPositionY": function() { return /* binding */ throwMcDropdownInvalidPositionY; },
/* harmony export */   "throwMcDropdownMissingError": function() { return /* binding */ throwMcDropdownMissingError; },
/* harmony export */   "transformDropdown": function() { return /* binding */ transformDropdown; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 36317);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/operators */ 75428);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/keycodes */ 90084);
/* harmony import */ var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/cdk/a11y */ 61729);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 97175);




















/**
 * Injection token used to provide the parent dropdown to dropdown-specific components.
 * @docs-private
 */

function McDropdownItem_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
  }
}

const _c0 = ["*"];

function McDropdown_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McDropdown_ng_template_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r1.handleKeydown($event);
    })("click", function McDropdown_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r3.closed.emit("click");
    })("@transformDropdown.start", function McDropdown_ng_template_0_Template_div_animation_transformDropdown_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.onAnimationStart($event);
    })("@transformDropdown.done", function McDropdown_ng_template_0_Template_div_animation_transformDropdown_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.onAnimationDone($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx_r0.triggerWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-dropdown__panel_nested", ctx_r0.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.classList)("@transformDropdown", ctx_r0.panelAnimationState);
  }
}

const MC_DROPDOWN_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MC_DROPDOWN_PANEL');
/** Injection token to be used to override the default options for `mc-dropdown`. */

const MC_DROPDOWN_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-dropdown-default-options', {
  providedIn: 'root',
  factory: MC_DROPDOWN_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
// tslint:disable-next-line:naming-convention

function MC_DROPDOWN_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTriggerX: true,
    overlapTriggerY: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop',
    hasBackdrop: false
  };
}
/**
 * Dropdown content that will be rendered lazily once the dropdown is opened.
 */


class McDropdownContent {
  constructor(template, componentFactoryResolver, appRef, injector, viewContainerRef, document) {
    this.template = template;
    this.componentFactoryResolver = componentFactoryResolver;
    this.appRef = appRef;
    this.injector = injector;
    this.viewContainerRef = viewContainerRef;
    this.document = document;
    /** Emits when the dropdown content has been attached. */

    this.attached = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }
  /**
   * Attaches the content with a particular context.
   * @docs-private
   */


  attach(context = {}) {
    if (!this.portal) {
      this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this.template, this.viewContainerRef);
    }

    this.detach();

    if (!this.outlet) {
      this.outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.DomPortalOutlet(this.document.createElement('div'), this.componentFactoryResolver, this.appRef, this.injector);
    }

    const element = this.template.elementRef.nativeElement; // Because we support opening the same dropdown from different triggers (which in turn have their
    // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
    // risk it staying attached to a pane that's no longer in the DOM.

    element.parentNode.insertBefore(this.outlet.outletElement, element);
    this.portal.attach(this.outlet, context);
    this.attached.next();
  }
  /**
   * Detaches the content.
   * @docs-private
   */


  detach() {
    var _a;

    if ((_a = this.portal) === null || _a === void 0 ? void 0 : _a.isAttached) {
      this.portal.detach();
    }
  }

  ngOnDestroy() {
    var _a;

    (_a = this.outlet) === null || _a === void 0 ? void 0 : _a.dispose();
  }

}
/** @nocollapse */


McDropdownContent.ɵfac = function McDropdownContent_Factory(t) {
  return new (t || McDropdownContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
};
/** @nocollapse */


McDropdownContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McDropdownContent,
  selectors: [["ng-template", "mcDropdownContent", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McDropdownContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ng-template[mcDropdownContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, null);
})(); // Boilerplate for applying mixins to McDropdownItem.

/** @docs-private */


class McDropdownItemBase {} // tslint:disable-next-line:naming-convention


const McDropdownItemMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.mixinDisabled)(McDropdownItemBase);
/**
 * This directive is intended to be used inside an mc-dropdown tag.
 * It exists mostly to set the role attribute.
 */

class McDropdownItem extends McDropdownItemMixinBase {
  constructor(elementRef, focusMonitor, parentDropdownPanel) {
    super();
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
    this.parentDropdownPanel = parentDropdownPanel;
    /** Stream that emits when the dropdown item is hovered. */

    this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Stream that emits when the menu item is focused. */

    this.focused = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether the dropdown item is highlighted. */

    this.highlighted = false;
    /** Whether the dropdown item acts as a trigger for a nested dropdown. */

    this.isNested = false;
  }

  ngAfterViewInit() {
    if (this.focusMonitor) {
      // Start monitoring the element so it gets the appropriate focused classes. We want
      // to show the focus style for menu items only when the focus was not caused by a
      // mouse or touch interaction.
      this.focusMonitor.monitor(this.elementRef, false);
    }
  }

  ngOnDestroy() {
    if (this.focusMonitor) {
      this.focusMonitor.stopMonitoring(this.elementRef);
    }

    this.hovered.complete();
    this.focused.complete();
  }

  resetStyles() {
    this.getHostElement().classList.remove('cdk-keyboard-focused');
  }
  /** Focuses the dropdown item. */


  focus(origin, options) {
    if (this.focusMonitor && origin) {
      this.focusMonitor.focusVia(this.getHostElement(), origin, options);
    } else {
      this.getHostElement().focus(options);
    }

    this.focused.next(this);
  }
  /** Returns the host DOM element. */


  getHostElement() {
    return this.elementRef.nativeElement;
  }
  /** Used to set the `tabindex`. */


  getTabIndex() {
    return this.disabled ? '-1' : '0';
  }
  /** Prevents the default element actions if it is disabled. */
  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete


  checkDisabled(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Emits to the hover stream. */
  // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
  // In Ivy the `host` bindings will be merged when this class is extended, whereas in
  // ViewEngine they're overwritten.
  // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
  // tslint:disable-next-line:no-host-decorator-in-concrete


  handleMouseEnter() {
    this.hovered.next(this);
  }
  /** Gets the label to be used when determining whether the option should be focused. */


  getLabel() {
    var _a, _b;

    const clone = this.getHostElement().cloneNode(true);
    const icons = clone.querySelectorAll('[mc-icon], .mc-icon'); // Strip away icons so they don't show up in the text.
    // tslint:disable-next-line:prefer-for-of

    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i];
      (_a = icon.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(icon);
    }

    return ((_b = clone.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
  }

}
/** @nocollapse */


McDropdownItem.ɵfac = function McDropdownItem_Factory(t) {
  return new (t || McDropdownItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_DROPDOWN_PANEL, 8));
};
/** @nocollapse */


McDropdownItem.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McDropdownItem,
  selectors: [["mc-dropdown-item"], ["", "mc-dropdown-item", ""]],
  contentQueries: function McDropdownItem_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIcon, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    }
  },
  hostAttrs: [1, "mc-dropdown-item"],
  hostVars: 6,
  hostBindings: function McDropdownItem_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McDropdownItem_click_HostBindingHandler($event) {
        return ctx.checkDisabled($event);
      })("mouseenter", function McDropdownItem_mouseenter_HostBindingHandler() {
        return ctx.handleMouseEnter();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null)("tabindex", ctx.getTabIndex());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-dropdown-item_with-icon", ctx.icon)("mc-dropdown-item_highlighted", ctx.highlighted);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["mcDropdownItem"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 3,
  vars: 1,
  consts: [[1, "mc-dropdown-item-wrapper"], ["mc-icon", "mc-angle-right-M_16", "class", "mc-dropdown-trigger__icon", 4, "ngIf"], ["mc-icon", "mc-angle-right-M_16", 1, "mc-dropdown-trigger__icon"]],
  template: function McDropdownItem_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McDropdownItem_i_2_Template, 1, 0, "i", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNested);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIcon, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIconCSSStyler],
  styles: [".mc-dropdown-item{-webkit-user-select:none;user-select:none;display:flex;align-items:center;position:relative;box-sizing:border-box;width:100%;border:1px solid transparent;outline:none;padding:0;text-align:left;white-space:nowrap}.mc-dropdown-item:not([disabled]){cursor:pointer}.mc-dropdown-item .mc-dropdown-item__caption{margin-top:4px}.mc-dropdown-item.mc-dropdown-item_with-icon .mc-dropdown-item__caption{margin-left:24px}.mc-dropdown-item .docs-navbar-version__num{margin-right:4px}.mc-dropdown-item-wrapper{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:5px 15px;padding:var(--mc-dropdown-item-size-padding, 5px 15px)}.mc-dropdown-item-wrapper [mc-icon]{padding:0 8px 2px 0;padding:var(--mc-dropdown-item-size-icon-padding, 0 8px 2px 0)}.mc-dropdown-trigger__icon{margin-left:auto;padding-right:8px;padding-right:var(--dropdown-trigger-size-icon-padding-right, 8px)}.mc-dropdown__group-header{-webkit-user-select:none;user-select:none;padding:6px 15px;padding:var(--mc-dropdown-item-size-padding, 6px 15px)}.mc-dropdown__group-header.mc-dropdown__group-header_small{padding:8px 15px;padding:var(--mc-dropdown-item-size-padding, 8px 15px)}.mc-dropdown__divider{height:1px;height:var(--mc-dropdown-divider-size-height, 1px);margin:4px 0;margin:var(--mc-dropdown-divider-size-margin, 4px 0)}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McDropdownItem, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-dropdown-item, [mc-dropdown-item]',
      exportAs: 'mcDropdownItem',
      templateUrl: 'dropdown-item.html',
      styleUrls: ['dropdown-item.scss'],
      inputs: ['disabled'],
      host: {
        class: 'mc-dropdown-item',
        '[class.mc-dropdown-item_with-icon]': 'icon',
        '[class.mc-dropdown-item_highlighted]': 'highlighted',
        '[attr.disabled]': 'disabled || null',
        '[attr.tabindex]': 'getTabIndex()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_DROPDOWN_PANEL]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIcon]
    }],
    checkDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    handleMouseEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }]
  });
})();
/**
 * Throws an exception for the case when dropdown trigger doesn't have a valid mc-dropdown instance
 * @docs-private
 */


function throwMcDropdownMissingError() {
  throw Error(`mcDropdownTriggerFor: must pass in an mc-dropdown instance.
    Example:
      <mc-dropdown #dropdown="mcDropdown"></mc-dropdown>
      <button [mcDropdownTriggerFor]="dropdown"></button>`);
}
/**
 * Throws an exception for the case when dropdown's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */


function throwMcDropdownInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mc-dropdown [xPosition]="'before'" #dropdown="mcDropdown"></mc-dropdown>`);
}
/**
 * Throws an exception for the case when dropdown's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */


function throwMcDropdownInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mc-dropdown [yPosition]="'above'" #dropdown="mcDropdown"></mc-dropdown>`);
}
/**
 * Animations used by the mc-dropdown component.
 * @docs-private
 */


const mcDropdownAnimations = {
  /**
   * This animation controls the dropdown panel's entry and exit from the page.
   *
   * When the dropdown panel is added to the DOM, it scales in and fades in its border.
   *
   * When the dropdown panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformDropdown: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('transformDropdown', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.query)('.mc-dropdown__content', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('50ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    opacity: 1
  }))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('50ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    transform: 'scale(1)'
  }))])), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('* => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('50ms 25ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    opacity: 0
  })))]),

  /**
   * This animation fades in the background color and content of the dropdown panel
   * after its containing element is scaled in.
   */
  fadeInItems: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('fadeInItems', [// now. Remove next time we do breaking changes.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)('showing', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)('void => *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('200ms 60ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
const fadeInItems = mcDropdownAnimations.fadeInItems;
const transformDropdown = mcDropdownAnimations.transformDropdown;

class McDropdown {
  constructor(elementRef, ngZone, defaultOptions) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.defaultOptions = defaultOptions;
    this.navigationWithWrap = false;
    this._xPosition = this.defaultOptions.xPosition;
    this._yPosition = this.defaultOptions.yPosition;
    this._overlapTriggerX = this.defaultOptions.overlapTriggerX;
    this._overlapTriggerY = this.defaultOptions.overlapTriggerY;
    this._hasBackdrop = this.defaultOptions.hasBackdrop;
    this.triggerWidth = '';
    /** Config object to be passed into the dropdown's ngClass */

    this.classList = {};
    /** Current state of the panel animation. */

    this.panelAnimationState = 'void';
    /** Emits whenever an animation on the dropdown completes. */

    this.animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Class to be added to the backdrop element. */

    this.backdropClass = this.defaultOptions.backdropClass;
    /** Event emitted when the dropdown is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Only the direct descendant menu items. */

    this.directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    /** Subscription to tab events on the dropdown panel */

    this.tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
  }
  /** Position of the dropdown in the X axis. */


  get xPosition() {
    return this._xPosition;
  }

  set xPosition(value) {
    if (value !== 'before' && value !== 'after') {
      throwMcDropdownInvalidPositionX();
    }

    this._xPosition = value;
    this.setPositionClasses();
  }
  /** Position of the dropdown in the Y axis. */


  get yPosition() {
    return this._yPosition;
  }

  set yPosition(value) {
    if (value !== 'above' && value !== 'below') {
      throwMcDropdownInvalidPositionY();
    }

    this._yPosition = value;
    this.setPositionClasses();
  }
  /** Whether the dropdown should overlap its trigger vertically. */


  get overlapTriggerY() {
    return this._overlapTriggerY;
  }

  set overlapTriggerY(value) {
    this._overlapTriggerY = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /** Whether the dropdown should overlap its trigger horizontally. */


  get overlapTriggerX() {
    return this._overlapTriggerX;
  }

  set overlapTriggerX(value) {
    this._overlapTriggerX = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /** Whether the dropdown has a backdrop. */


  get hasBackdrop() {
    return this._hasBackdrop;
  }

  set hasBackdrop(value) {
    this._hasBackdrop = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__.coerceBooleanProperty)(value);
  }
  /**
   * This method takes classes set on the host mc-dropdown element and applies them on the
   * dropdown template that displays in the overlay container.  Otherwise, it's difficult
   * to style the containing dropdown from outside the component.
   * @param classes list of class names
   */


  set panelClass(classes) {
    const previousPanelClass = this.previousPanelClass;

    if (previousPanelClass && previousPanelClass.length) {
      previousPanelClass.split(' ').forEach(className => this.classList[className] = false);
    }

    this.previousPanelClass = classes;

    if (classes === null || classes === void 0 ? void 0 : classes.length) {
      classes.split(' ').forEach(className => this.classList[className] = true);
      this.elementRef.nativeElement.className = '';
    }
  }

  ngOnInit() {
    this.setPositionClasses();
  }

  ngAfterContentInit() {
    this.updateDirectDescendants();
    this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__.FocusKeyManager(this.directDescendantItems).withTypeAhead();

    if (this.navigationWithWrap) {
      this.keyManager.withWrap();
    }

    this.tabSubscription = this.keyManager.tabOut.subscribe(() => this.closed.emit('tab')); // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
    // change back to the key manager. Note that we don't need to unsubscribe here because focused
    // is internal and we know that it gets completed on destroy.

    this.directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...items.map(item => item.focused)))).subscribe(focusedItem => this.keyManager.updateActiveItem(focusedItem));
  }

  ngOnDestroy() {
    this.directDescendantItems.destroy();
    this.tabSubscription.unsubscribe();
    this.closed.complete();
  }
  /** Stream that emits whenever the hovered dropdown item changes. */


  hovered() {
    const itemChanges = this.directDescendantItems.changes;
    return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...items.map(item => item.hovered))));
  }
  /** Handle a keyboard event from the dropdown, delegating to the appropriate action. */


  handleKeydown(event) {
    // tslint:disable-next-line:deprecation
    const keyCode = event.keyCode;

    switch (keyCode) {
      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.ESCAPE:
        this.closed.emit('keydown');
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.LEFT_ARROW:
        if (this.parent && this.direction === 'ltr') {
          this.closed.emit('keydown');
        }

        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.RIGHT_ARROW:
        if (this.parent && this.direction === 'rtl') {
          this.closed.emit('keydown');
        }

        break;

      default:
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.DOWN_ARROW) {
          this.keyManager.setFocusOrigin('keyboard');
        }

        this.keyManager.onKeydown(event);
        return;
    } // Don't allow the event to propagate if we've already handled it, or it may
    // end up reaching other overlays that were opened earlier.


    event.stopPropagation();
  }
  /**
   * Focus the first item in the dropdown.
   * @param origin Action from which the focus originated. Used to set the correct styling.
   */


  focusFirstItem(origin = 'program') {
    // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
    if (this.lazyContent) {
      this.ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => this.keyManager.setFocusOrigin(origin).setFirstItemActive());
    } else {
      this.keyManager.setFocusOrigin(origin).setFirstItemActive();
    }
  }
  /**
   * Resets the active item in the dropdown. This is used when the dropdown is opened, allowing
   * the user to start from the first option when pressing the down arrow.
   */


  resetActiveItem() {
    var _a;

    (_a = this.keyManager.activeItem) === null || _a === void 0 ? void 0 : _a.resetStyles();
    this.keyManager.setActiveItem(-1);
  }
  /**
   * Adds classes to the dropdown panel based on its position. Can be used by
   * consumers to add specific styling based on the position.
   * @param posX Position of the dropdown along the x axis.
   * @param posY Position of the dropdown along the y axis.
   * @docs-private
   */


  setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
    const classes = this.classList;
    classes['mc-dropdown-before'] = posX === 'before';
    classes['mc-dropdown-after'] = posX === 'after';
    classes['mc-dropdown-above'] = posY === 'above';
    classes['mc-dropdown-below'] = posY === 'below';
  }
  /** Starts the enter animation. */


  startAnimation() {
    this.panelAnimationState = 'enter';
  }
  /** Resets the panel animation to its initial state. */


  resetAnimation() {
    this.panelAnimationState = 'void';
  }
  /** Callback that is invoked when the panel animation completes. */


  onAnimationDone(event) {
    this.animationDone.next(event);
    this.isAnimating = false;
  }

  onAnimationStart(event) {
    this.isAnimating = true; // Scroll the content element to the top as soon as the animation starts. This is necessary,
    // because we move focus to the first item while it's still being animated, which can throw
    // the browser off when it determines the scroll position. Alternatively we can move focus
    // when the animation is done, however moving focus asynchronously will interrupt screen
    // readers which are in the process of reading out the dropdown already. We take the `element`
    // from the `event` since we can't use a `ViewChild` to access the pane.

    if (event.toState === 'enter' && this.keyManager.activeItemIndex === 0) {
      event.element.scrollTop = 0;
    }
  }
  /**
   * Sets up a stream that will keep track of any newly-added menu items and will update the list
   * of direct descendants. We collect the descendants this way, because `_allItems` can include
   * items that are part of child menus, and using a custom way of registering items is unreliable
   * when it comes to maintaining the item order.
   */


  updateDirectDescendants() {
    this.items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(this.items)).subscribe(items => {
      this.directDescendantItems.reset(items.filter(item => item.parentDropdownPanel === this));
      this.directDescendantItems.notifyOnChanges();
    });
  }

}
/** @nocollapse */


McDropdown.ɵfac = function McDropdown_Factory(t) {
  return new (t || McDropdown)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_DROPDOWN_DEFAULT_OPTIONS));
};
/** @nocollapse */


McDropdown.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McDropdown,
  selectors: [["mc-dropdown"]],
  contentQueries: function McDropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McDropdownContent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McDropdownItem, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    }
  },
  viewQuery: function McDropdown_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
    }
  },
  inputs: {
    navigationWithWrap: "navigationWithWrap",
    xPosition: "xPosition",
    yPosition: "yPosition",
    overlapTriggerY: "overlapTriggerY",
    overlapTriggerX: "overlapTriggerX",
    hasBackdrop: "hasBackdrop",
    panelClass: ["class", "panelClass"],
    backdropClass: "backdropClass"
  },
  outputs: {
    closed: "closed"
  },
  exportAs: ["mcDropdown"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MC_DROPDOWN_PANEL,
    useExisting: McDropdown
  }])],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  consts: [["tabindex", "-1", 1, "mc-dropdown__panel", 3, "ngClass", "keydown", "click"], [1, "mc-dropdown__content"]],
  template: function McDropdown_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, McDropdown_ng_template_0_Template, 3, 6, "ng-template");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  styles: [".mc-dropdown__panel{margin-top:-1px;max-width:640px;max-width:var(--mc-dropdown-panel-size-max-width, 640px);border-width:1px;border-width:var(--mc-dropdown-panel-size-border-width, 1px);border-style:solid;border-bottom-left-radius:3px;border-bottom-left-radius:var(--mc-dropdown-panel-size-border-radius, 3px);border-bottom-right-radius:3px;border-bottom-right-radius:var(--mc-dropdown-panel-size-border-radius, 3px);padding:4px 0;padding:var(--mc-dropdown-panel-size-padding, 4px 0)}.mc-dropdown__panel.mc-dropdown__panel_nested{border-top-left-radius:3px;border-top-left-radius:var(--mc-dropdown-panel-size-border-radius, 3px);border-top-right-radius:3px;border-top-right-radius:var(--mc-dropdown-panel-size-border-radius, 3px)}.mc-dropdown__panel.ng-animating{pointer-events:none}.mc-dropdown__content{display:flex;flex-direction:column}\n"],
  encapsulation: 2,
  data: {
    animation: [mcDropdownAnimations.transformDropdown, mcDropdownAnimations.fadeInItems]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McDropdown, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-dropdown',
      exportAs: 'mcDropdown',
      templateUrl: 'dropdown.html',
      styleUrls: ['dropdown.scss'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      animations: [mcDropdownAnimations.transformDropdown, mcDropdownAnimations.fadeInItems],
      providers: [{
        provide: MC_DROPDOWN_PANEL,
        useExisting: McDropdown
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_DROPDOWN_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    navigationWithWrap: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    xPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    yPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlapTriggerY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    overlapTriggerX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['class']
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    templateRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: false
      }]
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McDropdownItem, {
        descendants: true
      }]
    }],
    lazyContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McDropdownContent, {
        static: false
      }]
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** Injection token that determines the scroll handling while the dropdown is open. */


const MC_DROPDOWN_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-dropdown-scroll-strategy');
/** @docs-private */
// tslint:disable-next-line:naming-convention

function MC_DROPDOWN_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */


const MC_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MC_DROPDOWN_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.Overlay],
  useFactory: MC_DROPDOWN_SCROLL_STRATEGY_FACTORY
};
/** Default top padding of the nested dropdown panel. */

const NESTED_PANEL_TOP_PADDING = 4;
const NESTED_PANEL_LEFT_PADDING = 8;
/** Options for binding a passive event listener. */

const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * This directive is intended to be used in conjunction with an mc-dropdown tag.  It is
 * responsible for toggling the display of the provided dropdown instance.
 */

class McDropdownTrigger {
  constructor(overlay, elementRef, viewContainerRef, scrollStrategy, parent, dropdownItemInstance, _dir, focusMonitor) {
    this.overlay = overlay;
    this.elementRef = elementRef;
    this.viewContainerRef = viewContainerRef;
    this.scrollStrategy = scrollStrategy;
    this.parent = parent;
    this.dropdownItemInstance = dropdownItemInstance;
    this._dir = _dir;
    this.focusMonitor = focusMonitor;
    this.openByArrowDown = true;
    /**
     * Whether focus should be restored when the menu is closed.
     * Note that disabling this option can have accessibility implications
     * and it's up to you to manage focus, if you decide to turn it off.
     */

    this.restoreFocus = true;
    /** Event emitted when the associated dropdown is opened. */

    this.dropdownOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the associated dropdown is closed. */

    this.dropdownClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._opened = false;
    this.overlayRef = null;
    this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
    this.hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription.EMPTY;
    /**
     * Handles touch start events on the trigger.
     * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
     */

    this.handleTouchStart = () => this.openedBy = 'touch';

    elementRef.nativeElement.addEventListener('touchstart', this.handleTouchStart, passiveEventListenerOptions);

    if (dropdownItemInstance) {
      dropdownItemInstance.isNested = this.isNested();
    }
  }
  /** References the dropdown instance that the trigger is associated with. */


  get dropdown() {
    return this._dropdown;
  }

  set dropdown(dropdown) {
    if (dropdown === this._dropdown) {
      return;
    }

    this._dropdown = dropdown;
    this.closeSubscription.unsubscribe();

    if (dropdown) {
      this.closeSubscription = dropdown.closed.asObservable().subscribe(reason => {
        this.destroy(reason); // If a click closed the dropdown, we should close the entire chain of nested dropdowns.

        if (['click', 'tab'].includes(reason) && this.parent) {
          this.parent.closed.emit(reason);
        }
      });
    }
  }
  /** The text direction of the containing app. */


  get dir() {
    var _a;

    return ((_a = this._dir) === null || _a === void 0 ? void 0 : _a.value) === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Whether the dropdown is open. */


  get opened() {
    return this._opened;
  }

  ngAfterContentInit() {
    this.check();
    this.handleHover();
  }

  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

    this.elementRef.nativeElement.removeEventListener('touchstart', this.handleTouchStart, passiveEventListenerOptions);
    this.cleanUpSubscriptions();
  }
  /** Whether the dropdown triggers a nested dropdown or a top-level one. */


  isNested() {
    return !!(this.dropdownItemInstance && this.parent);
  }
  /** Toggles the dropdown between the open and closed states. */


  toggle() {
    // tslint:disable-next-line:no-void-expression
    return this._opened ? this.close() : this.open();
  }
  /** Opens the dropdown. */


  open() {
    if (this._opened) {
      return;
    }

    this.check();
    const overlayRef = this.createOverlay();
    const overlayConfig = overlayRef.getConfig();
    this.setPosition(overlayConfig.positionStrategy);
    overlayConfig.hasBackdrop = this.dropdown.hasBackdrop ? !this.isNested() : this.dropdown.hasBackdrop;
    overlayRef.attach(this.getPortal());

    if (this.dropdown.lazyContent) {
      this.dropdown.lazyContent.detach();
      this.dropdown.lazyContent.attach(this.data);
    }

    this.closeSubscription = this.closingActions().subscribe(() => this.close());
    this.init();

    if (this.dropdown instanceof McDropdown) {
      this.dropdown.startAnimation();
    }
  }
  /** Closes the dropdown. */


  close() {
    this.dropdown.closed.emit();
  }
  /**
   * Focuses the dropdown trigger.
   * @param origin Source of the dropdown trigger's focus.
   */


  focus(origin = 'program') {
    if (this.focusMonitor) {
      this.focusMonitor.focusVia(this.elementRef.nativeElement, origin);
    } else {
      this.elementRef.nativeElement.focus();
    }
  }
  /** Handles mouse presses on the trigger. */


  handleMousedown(event) {
    // Since right or middle button clicks won't trigger the `click` event,
    // we shouldn't consider the dropdown as opened by mouse in those cases.
    this.openedBy = event.button === 0 ? 'mouse' : undefined; // Since clicking on the trigger won't close the dropdown if it opens a nested dropdown,
    // we should prevent focus from moving onto it via click to avoid the
    // highlight from lingering on the dropdown item.

    if (this.isNested()) {
      event.preventDefault();
    }
  }
  /** Handles key presses on the trigger. */


  handleKeydown(event) {
    // tslint:disable-next-line:deprecation
    const keyCode = event.keyCode; // Pressing enter on the trigger will trigger the click handler later.

    if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.ENTER || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.SPACE) {
      this.openedBy = 'keyboard';
    }

    if (this.isNested() && (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.RIGHT_ARROW && this.dir === 'ltr' || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.LEFT_ARROW && this.dir === 'rtl') || !this.isNested() && keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.DOWN_ARROW && this.openByArrowDown) {
      event.preventDefault();
      this.openedBy = 'keyboard';
      this.open();
    }
  }
  /** Handles click events on the trigger. */


  handleClick(event) {
    if (this.isNested()) {
      // Stop event propagation to avoid closing the parent dropdown.
      event.stopPropagation();
      this.open();
    } else {
      this.toggle();
    }
  }
  /** Closes the dropdown and does the necessary cleanup. */


  destroy(reason) {
    var _a;

    if (!this.overlayRef || !this.opened) {
      return;
    }

    this.dropdown.resetActiveItem();
    this.closeSubscription.unsubscribe();
    this.overlayRef.detach();

    if (this.restoreFocus && reason === 'keydown' && this.isNested()) {
      this.focus(this.openedBy);
    }

    if (this.dropdown instanceof McDropdown) {
      this.dropdown.resetAnimation(); // Wait for the exit animation to finish before reseting dropdown toState.

      const dropdownAnimationDoneSubscription = this.dropdown.animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(event => event.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1));

      if (this.dropdown.lazyContent) {
        dropdownAnimationDoneSubscription.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.dropdown.lazyContent.attached));
      }

      dropdownAnimationDoneSubscription.subscribe(() => this.reset());
    } else {
      this.reset();
      (_a = this.dropdown.lazyContent) === null || _a === void 0 ? void 0 : _a.detach();
    }
  }
  /**
   * This method sets the dropdown state to open and focuses the first item if
   * the dropdown was opened via the keyboard.
   */


  init() {
    this.dropdown.parent = this.isNested() ? this.parent : undefined;
    this.dropdown.direction = this.dir;

    if (!this.dropdown.parent) {
      this.dropdown.triggerWidth = this.getWidth();
    }

    this.setIsOpened(true);
    this.dropdown.focusFirstItem(this.openedBy);
  }
  /**
   * This method resets the dropdown when it's closed, most importantly restoring
   * focus to the dropdown trigger if the dropdown was opened via the keyboard.
   */


  reset() {
    this.setIsOpened(false); // We should reset focus if the user is navigating using a keyboard or
    // if we have a top-level trigger which might cause focus to be lost
    // when clicking on the backdrop.

    if (!this.openedBy) {
      // Note that the focus style will show up both for `program` and
      // `keyboard` so we don't have to specify which one it is.
      this.focus();
    } else if (!this.isNested()) {
      this.focus(this.openedBy);
    }

    this.openedBy = undefined;
  } // set state rather than toggle to support triggers sharing a dropdown


  setIsOpened(isOpen) {
    this._opened = isOpen; // tslint:disable-next-line:no-void-expression

    this._opened ? this.dropdownOpened.emit() : this.dropdownClosed.emit();

    if (this.isNested()) {
      this.dropdownItemInstance.highlighted = isOpen;
    }
  }
  /**
   * This method checks that a valid instance of McDropdown has been passed into
   * mcDropdownTriggerFor. If not, an exception is thrown.
   */


  check() {
    if (!this.dropdown) {
      throwMcDropdownMissingError();
    }
  }
  /**
   * This method creates the overlay from the provided dropdown's template and saves its
   * OverlayRef so that it can be attached to the DOM when open is called.
   */


  createOverlay() {
    if (!this.overlayRef) {
      const config = this.getOverlayConfig();
      this.subscribeToPositions(config.positionStrategy);
      this.overlayRef = this.overlay.create(config); // Consume the `keydownEvents` in order to prevent them from going to another overlay.
      // Ideally we'd also have our keyboard event logic in here, however doing so will
      // break anybody that may have implemented the `McDropdownPanel` themselves.

      this.overlayRef.keydownEvents().subscribe();
    }

    return this.overlayRef;
  }
  /**
   * This method builds the configuration object needed to create the overlay, the OverlayState.
   * @returns OverlayConfig
   */


  getOverlayConfig() {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayConfig({
      positionStrategy: this.overlay.position().flexibleConnectedTo(this.elementRef).withLockedPosition().withTransformOriginOn('.mc-dropdown__panel'),
      backdropClass: this.dropdown.backdropClass || 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.scrollStrategy(),
      direction: this.dir
    });
  }
  /**
   * Listens to changes in the position of the overlay and sets the correct classes
   * on the dropdown based on the new position. This ensures the animation origin is always
   * correct, even if a fallback position is used for the overlay.
   */


  subscribeToPositions(position) {
    if (this.dropdown.setPositionClasses) {
      position.positionChanges.subscribe(change => {
        const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
        const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
        this.dropdown.setPositionClasses(posX, posY);
      });
    }
  }
  /**
   * Sets the appropriate positions on a position strategy
   * so the overlay connects with the trigger correctly.
   * @param positionStrategy Strategy whose position to update.
   */


  setPosition(positionStrategy) {
    let [originX, originFallbackX, overlayX, overlayFallbackX] = this.dropdown.xPosition === 'before' ? ['end', 'start', 'end', 'start'] : ['start', 'end', 'start', 'end']; // tslint:disable-next-line:prefer-const

    let [overlayY, overlayFallbackY, originY, originFallbackY] = this.dropdown.yPosition === 'above' ? ['bottom', 'top', 'bottom', 'top'] : ['top', 'bottom', 'top', 'bottom'];
    let offsetY = 0;
    let offsetX = 0;

    if (this.isNested()) {
      // When the dropdown is nested, it should always align itself
      // to the edges of the trigger, instead of overlapping it.
      overlayFallbackX = originX = this.dropdown.xPosition === 'before' ? 'start' : 'end';
      originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
      offsetY = overlayY === 'bottom' ? NESTED_PANEL_TOP_PADDING : -NESTED_PANEL_TOP_PADDING;
      offsetX = NESTED_PANEL_LEFT_PADDING;
    } else {
      if (!this.dropdown.overlapTriggerY) {
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
      }

      if (!this.dropdown.overlapTriggerX) {
        overlayFallbackX = originX = this.dropdown.xPosition === 'before' ? 'start' : 'end';
        originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
      }
    }

    positionStrategy.withPositions([{
      originX,
      originY,
      overlayX,
      overlayY,
      offsetY,
      offsetX: -offsetX
    }, {
      originX: originFallbackX,
      originY,
      overlayX: overlayFallbackX,
      overlayY,
      offsetY,
      offsetX
    }, {
      originX,
      originY: originFallbackY,
      overlayX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY,
      offsetX: -offsetX
    }, {
      originX: originFallbackX,
      originY: originFallbackY,
      overlayX: overlayFallbackX,
      overlayY: overlayFallbackY,
      offsetY: -offsetY,
      offsetX: -offsetX
    }]);
  }
  /** Cleans up the active subscriptions. */


  cleanUpSubscriptions() {
    this.closeSubscription.unsubscribe();
    this.hoverSubscription.unsubscribe();
  }
  /** Returns a stream that emits whenever an action that should close the dropdown occurs. */


  closingActions() {
    const backdrop = this.overlayRef.backdropClick();
    const outsidePointerEvents = this.overlayRef.outsidePointerEvents();
    const detachments = this.overlayRef.detachments();
    const parentClose = this.parent ? this.parent.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    const hover = this.parent ? this.parent.hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(active => active !== this.dropdownItemInstance), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(() => this._opened)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(backdrop, outsidePointerEvents, parentClose, hover, detachments);
  }
  /** Handles the cases where the user hovers over the trigger. */


  handleHover() {
    // Subscribe to changes in the hovered item in order to toggle the panel.
    if (!this.isNested()) {
      return;
    }

    this.hoverSubscription = this.parent.hovered() // Since we might have multiple competing triggers for the same dropdown (e.g. a nested dropdown
    // with different data and triggers), we have to delay it by a tick to ensure that
    // it won't be closed immediately after it is opened.
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.filter)(active => active === this.dropdownItemInstance && !active.disabled), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_23__.asapScheduler)).subscribe(() => {
      this.openedBy = 'mouse'; // If the same dropdown is used between multiple triggers, it might still be animating
      // while the new trigger tries to re-open it. Wait for the animation to finish
      // before doing so. Also interrupt if the user moves to another item.

      if (this.dropdown instanceof McDropdown && this.dropdown.isAnimating) {
        // We need the `delay(0)` here in order to avoid
        // 'changed after checked' errors in some cases. See #12194.
        this.dropdown.animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_22__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_23__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.parent.hovered())).subscribe(() => this.open());
      } else {
        this.open();
      }
    });
  }
  /** Gets the portal that should be attached to the overlay. */


  getPortal() {
    // Note that we can avoid this check by keeping the portal on the dropdown panel.
    // While it would be cleaner, we'd have to introduce another required method on
    // `McDropdownPanel`, making it harder to consume.
    if (!this.portal || this.portal.templateRef !== this.dropdown.templateRef) {
      this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.TemplatePortal(this.dropdown.templateRef, this.viewContainerRef);
    }

    return this.portal;
  }

  getWidth() {
    const nativeElement = this.elementRef.nativeElement;
    const {
      width,
      borderRightWidth,
      borderLeftWidth
    } = window.getComputedStyle(nativeElement);
    return `${parseInt(width) - parseInt(borderRightWidth) - parseInt(borderLeftWidth)}px`;
  }

}
/** @nocollapse */


McDropdownTrigger.ɵfac = function McDropdownTrigger_Factory(t) {
  return new (t || McDropdownTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_DROPDOWN_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McDropdown, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McDropdownItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor));
};
/** @nocollapse */


McDropdownTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McDropdownTrigger,
  selectors: [["", "mcDropdownTriggerFor", ""]],
  hostAttrs: [1, "mc-dropdown-trigger"],
  hostVars: 2,
  hostBindings: function McDropdownTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McDropdownTrigger_mousedown_HostBindingHandler($event) {
        return ctx.handleMousedown($event);
      })("keydown", function McDropdownTrigger_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("click", function McDropdownTrigger_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-pressed", ctx.opened);
    }
  },
  inputs: {
    data: ["mcDropdownTriggerData", "data"],
    openByArrowDown: "openByArrowDown",
    restoreFocus: ["mcDropdownTriggerRestoreFocus", "restoreFocus"],
    dropdown: ["mcDropdownTriggerFor", "dropdown"]
  },
  outputs: {
    dropdownOpened: "dropdownOpened",
    dropdownClosed: "dropdownClosed"
  },
  exportAs: ["mcDropdownTrigger"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McDropdownTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `[mcDropdownTriggerFor]`,
      exportAs: 'mcDropdownTrigger',
      host: {
        class: 'mc-dropdown-trigger',
        '[class.mc-pressed]': 'opened',
        '(mousedown)': 'handleMousedown($event)',
        '(keydown)': 'handleKeydown($event)',
        '(click)': 'handleClick($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_DROPDOWN_SCROLL_STRATEGY]
      }]
    }, {
      type: McDropdown,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: McDropdownItem,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.FocusMonitor
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcDropdownTriggerData']
    }],
    openByArrowDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    restoreFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcDropdownTriggerRestoreFocus']
    }],
    dropdown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcDropdownTriggerFor']
    }],
    dropdownOpened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dropdownClosed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class McDropdownModule {}
/** @nocollapse */


McDropdownModule.ɵfac = function McDropdownModule_Factory(t) {
  return new (t || McDropdownModule)();
};
/** @nocollapse */


McDropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McDropdownModule
});
/** @nocollapse */

McDropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MC_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIconModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McDropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIconModule],
      exports: [McDropdown, McDropdownItem, McDropdownTrigger, McDropdownContent],
      declarations: [McDropdown, McDropdownItem, McDropdownTrigger, McDropdownContent],
      providers: [MC_DROPDOWN_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 50599:
/*!**************************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-form-field.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McCleaner": function() { return /* binding */ McCleaner; },
/* harmony export */   "McFormField": function() { return /* binding */ McFormField; },
/* harmony export */   "McFormFieldBase": function() { return /* binding */ McFormFieldBase; },
/* harmony export */   "McFormFieldControl": function() { return /* binding */ McFormFieldControl; },
/* harmony export */   "McFormFieldMixinBase": function() { return /* binding */ McFormFieldMixinBase; },
/* harmony export */   "McFormFieldModule": function() { return /* binding */ McFormFieldModule; },
/* harmony export */   "McFormFieldWithoutBorders": function() { return /* binding */ McFormFieldWithoutBorders; },
/* harmony export */   "McHint": function() { return /* binding */ McHint; },
/* harmony export */   "McPrefix": function() { return /* binding */ McPrefix; },
/* harmony export */   "McStepper": function() { return /* binding */ McStepper; },
/* harmony export */   "McSuffix": function() { return /* binding */ McSuffix; },
/* harmony export */   "getMcFormFieldMissingControlError": function() { return /* binding */ getMcFormFieldMissingControlError; },
/* harmony export */   "getMcFormFieldYouCanNotUseCleanerInNumberInputError": function() { return /* binding */ getMcFormFieldYouCanNotUseCleanerInNumberInputError; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8117);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 22663);










const _c0 = ["connectionContainer"];

function McFormField_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McFormField_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McFormField_div_5_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.clearValue($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McFormField_ng_content_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 5, ["*ngIf", "canShowStepper"]);
  }
}

const _c1 = ["*", [["mc-hint"]], [["", "mcPrefix", ""]], [["", "mcSuffix", ""]], [["mc-cleaner"]], [["mc-stepper"]]];
const _c2 = ["*", "mc-hint", "[mcPrefix]", "[mcSuffix]", "mc-cleaner", "mc-stepper"];

class McCleaner {}
/** @nocollapse */


McCleaner.ɵfac = function McCleaner_Factory(t) {
  return new (t || McCleaner)();
};
/** @nocollapse */


McCleaner.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McCleaner,
  selectors: [["mc-cleaner"]],
  hostAttrs: [1, "mc-cleaner"],
  exportAs: ["mcCleaner"],
  decls: 1,
  vars: 1,
  consts: [["mc-icon", "mc-close-circle_16", 1, "mc-icon_light", 3, "color"]],
  template: function McCleaner_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    }
  },
  directives: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__.McIcon, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__.McIconCSSStyler],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McCleaner, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-cleaner',
      exportAs: 'mcCleaner',
      template: `<i class="mc-icon_light" mc-icon="mc-close-circle_16" [color]="'primary'"></i>`,
      host: {
        class: 'mc-cleaner'
      }
    }]
  }], null, null);
})();
/** An interface which allows a control to work inside of a `MсFormField`. */
// tslint:disable-next-line:naming-convention


class McFormFieldControl {}

function getMcFormFieldMissingControlError() {
  return Error('mc-form-field must contain a McFormFieldControl.');
}

function getMcFormFieldYouCanNotUseCleanerInNumberInputError() {
  return Error(`You can't use mc-cleaner with input that have type="number"`);
}

let nextUniqueId$1 = 0;

class McHint {
  constructor() {
    this.id = `mc-hint-${nextUniqueId$1++}`;
  }

}
/** @nocollapse */


McHint.ɵfac = function McHint_Factory(t) {
  return new (t || McHint)();
};
/** @nocollapse */


McHint.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McHint,
  selectors: [["mc-hint"]],
  hostAttrs: [1, "mc-hint"],
  hostVars: 1,
  hostBindings: function McHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McHint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-hint',
      host: {
        class: 'mc-hint',
        '[attr.id]': 'id'
      }
    }]
  }], null, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class McPrefix {}
/** @nocollapse */


McPrefix.ɵfac = function McPrefix_Factory(t) {
  return new (t || McPrefix)();
};
/** @nocollapse */


McPrefix.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McPrefix,
  selectors: [["", "mcPrefix", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcPrefix]'
    }]
  }], null, null);
})();

class McStepper {
  constructor() {
    this.stepUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stepDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  connectTo(numberInput) {
    if (!numberInput) {
      return;
    }

    this.stepUp.subscribe(() => {
      numberInput.stepUp(numberInput.step);
    });
    this.stepDown.subscribe(() => {
      numberInput.stepDown(numberInput.step);
    });
  }

  onStepUp($event) {
    this.stepUp.emit();
    $event.preventDefault();
  }

  onStepDown($event) {
    this.stepDown.emit();
    $event.preventDefault();
  }

}
/** @nocollapse */


McStepper.ɵfac = function McStepper_Factory(t) {
  return new (t || McStepper)();
};
/** @nocollapse */


McStepper.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McStepper,
  selectors: [["mc-stepper"]],
  outputs: {
    stepUp: "stepUp",
    stepDown: "stepDown"
  },
  decls: 2,
  vars: 0,
  consts: [[1, "mc", "mc-icon", "mc-icon_light", "mc-second", "mc-stepper-step-up", "mc-angle-down-L_16", 3, "mousedown"], [1, "mc", "mc-icon", "mc-icon_light", "mc-second", "mc-stepper-step-down", "mc-angle-down-L_16", 3, "mousedown"]],
  template: function McStepper_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McStepper_Template_i_mousedown_0_listener($event) {
        return ctx.onStepUp($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McStepper_Template_i_mousedown_1_listener($event) {
        return ctx.onStepDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McStepper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-stepper',
      template: `
        <i class="mc mc-icon mc-icon_light mc-second mc-stepper-step-up mc-angle-down-L_16"
           (mousedown)="onStepUp($event)">
        </i>
        <i class="mc mc-icon mc-icon_light mc-second mc-stepper-step-down mc-angle-down-L_16"
           (mousedown)="onStepDown($event)">
        </i>
    `
    }]
  }], null, {
    stepUp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    stepDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class McSuffix {}
/** @nocollapse */


McSuffix.ɵfac = function McSuffix_Factory(t) {
  return new (t || McSuffix)();
};
/** @nocollapse */


McSuffix.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McSuffix,
  selectors: [["", "mcSuffix", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSuffix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcSuffix]'
    }]
  }], null, null);
})();

let nextUniqueId = 0;

class McFormFieldBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McFormFieldMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)(McFormFieldBase);

class McFormField extends McFormFieldMixinBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef, _changeDetectorRef) {
    super(_elementRef);
    this._elementRef = _elementRef;
    this._changeDetectorRef = _changeDetectorRef; // Unique id for the internal form field label.

    this.labelId = `mc-form-field-label-${nextUniqueId++}`;
    this.hovered = false;
    this.canCleanerClearByEsc = true;
    this.$unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }

  get hasHint() {
    return this.hint && this.hint.length > 0;
  }

  get hasSuffix() {
    return this.suffix && this.suffix.length > 0;
  }

  get hasPrefix() {
    return this.prefix && this.prefix.length > 0;
  }

  get hasCleaner() {
    return !!this.cleaner;
  }

  get hasStepper() {
    return !!this.stepper;
  }

  get canShowCleaner() {
    return this.hasCleaner && this.control && this.control.ngControl ? this.control.ngControl.value && !this.control.disabled : false;
  }

  get disabled() {
    return this.control && this.control.disabled;
  }

  get canShowStepper() {
    var _a;

    return this.hasStepper && !this.disabled && (((_a = this.control) === null || _a === void 0 ? void 0 : _a.focused) || this.hovered);
  }

  ngAfterContentInit() {
    if (this.control.numberInput && this.hasCleaner) {
      this.cleaner = null;
      throw getMcFormFieldYouCanNotUseCleanerInNumberInputError();
    }

    this.validateControlChild();

    if (this.control.controlType) {
      this._elementRef.nativeElement.classList.add(`mc-form-field-type-${this.control.controlType}`);
    } // Subscribe to changes in the child control state in order to update the form field UI.


    this.control.stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.startWith)()).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });

    if (this.hasStepper) {
      this.stepper.connectTo(this.control.numberInput);
    } // Run change detection if the value changes.


    const valueChanges = this.control.ngControl && this.control.ngControl.valueChanges || rxjs__WEBPACK_IMPORTED_MODULE_5__.EMPTY;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(valueChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.$unsubscribe)).subscribe(() => this._changeDetectorRef.markForCheck());
  }

  ngAfterContentChecked() {
    this.validateControlChild();
  }

  ngAfterViewInit() {
    // Avoid animations on load.
    this._changeDetectorRef.detectChanges();
  }

  clearValue($event) {
    $event.stopPropagation();

    if (this.control && this.control.ngControl) {
      this.control.ngControl.reset();
      this.control.focus();
    }
  }

  onContainerClick($event) {
    if (this.control.onContainerClick) {
      this.control.onContainerClick($event);
    }
  }

  onKeyDown(event) {
    // tslint:disable-next-line:deprecation
    if (this.canCleanerClearByEsc && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ESCAPE && this.control.focused && this.hasCleaner) {
      if (this.control && this.control.ngControl) {
        this.control.ngControl.reset();
      }

      event.preventDefault();
    }
  }

  onHoverChanged(isHovered) {
    if (isHovered !== this.hovered) {
      this.hovered = isHovered;

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Gets an ElementRef for the element that a overlay attached to the form-field should be
   * positioned relative to.
   */


  getConnectedOverlayOrigin() {
    return this.connectionContainerRef || this._elementRef;
  }
  /** Determines whether a class from the NgControl should be forwarded to the host element. */


  shouldForward(prop) {
    const ngControl = this.control ? this.control.ngControl : null;
    return ngControl && ngControl[prop];
  }

  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
  /** Throws an error if the form field's control is missing. */


  validateControlChild() {
    if (!this.control) {
      throw getMcFormFieldMissingControlError();
    }
  }

}
/** @nocollapse */


McFormField.ɵfac = function McFormField_Factory(t) {
  return new (t || McFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
/** @nocollapse */


McFormField.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McFormField,
  selectors: [["mc-form-field"]],
  contentQueries: function McFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McFormFieldControl, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McStepper, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McCleaner, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McHint, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McSuffix, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McPrefix, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.control = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cleaner = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hint = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.suffix = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prefix = _t);
    }
  },
  viewQuery: function McFormField_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.connectionContainerRef = _t.first);
    }
  },
  hostAttrs: [1, "mc-form-field"],
  hostVars: 28,
  hostBindings: function McFormField_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McFormField_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("mouseenter", function McFormField_mouseenter_HostBindingHandler() {
        return ctx.onHoverChanged(true);
      })("mouseleave", function McFormField_mouseleave_HostBindingHandler() {
        return ctx.onHoverChanged(false);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-form-field_invalid", ctx.control.errorState)("mc-form-field_has-prefix", ctx.hasPrefix)("mc-form-field_has-suffix", ctx.hasSuffix)("mc-form-field_has-cleaner", ctx.canShowCleaner)("mc-form-field_has-stepper", ctx.canShowStepper)("mc-disabled", ctx.control.disabled)("mc-focused", ctx.control.focused)("ng-untouched", ctx.shouldForward("untouched"))("ng-touched", ctx.shouldForward("touched"))("ng-pristine", ctx.shouldForward("pristine"))("ng-dirty", ctx.shouldForward("dirty"))("ng-valid", ctx.shouldForward("valid"))("ng-invalid", ctx.shouldForward("invalid"))("ng-pending", ctx.shouldForward("pending"));
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["mcFormField"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 9,
  vars: 4,
  consts: [[1, "mc-form-field__container", 3, "click"], ["class", "mc-form-field__prefix", 4, "ngIf"], [1, "mc-form-field__infix"], ["class", "mc-form-field__suffix", 4, "ngIf"], ["class", "mc-form-field__cleaner", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "mc-form-field__hint"], [1, "mc-form-field__prefix"], [1, "mc-form-field__suffix"], [1, "mc-form-field__cleaner", 3, "click"]],
  template: function McFormField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McFormField_Template_div_click_0_listener($event) {
        return ctx.onContainerClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McFormField_div_1_Template, 2, 0, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, McFormField_div_4_Template, 2, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, McFormField_div_5_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, McFormField_ng_content_6_Template, 1, 0, "ng-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPrefix);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSuffix);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canShowCleaner && !ctx.hasSuffix);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canShowStepper);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
  styles: [".mc-form-field{position:relative;display:inline-block;width:100%;border-radius:3px;border-radius:var(--mc-form-field-size-border-radius, 3px)}.mc-form-field:hover{z-index:1}.mc-form-field.mc-focused{z-index:2}.mc-hint{display:block}.mc-form-field__hint>.mc-hint{margin-top:4px;margin-top:var(--mc-form-field-hint-size-margin-top, 4px)}.mc-form-field__container{position:relative;border-width:1px;border-width:var(--mc-form-field-size-border-width, 1px);border-style:solid;border-color:transparent;border-radius:3px;border-radius:var(--mc-form-field-size-border-radius, 3px)}.mc-form-field_without-borders .mc-form-field__container{border-color:transparent}.mc-form-field__prefix,.mc-form-field__suffix{position:absolute;top:0;bottom:0;width:32px;display:flex;flex-direction:row;justify-content:center;align-items:center}.mc-form-field__prefix{left:0}.mc-form-field__suffix{right:0}.mc-form-field_has-suffix .mc-input,.mc-form-field_has-cleaner .mc-input,.mc-form-field_has-stepper .mc-input{padding-right:32px;padding-right:var(--mc-form-field-size-button-width, 32px)}.mc-form-field_has-prefix .mc-input{padding-left:32px;padding-left:var(--mc-form-field-size-button-width, 32px)}.mc-cleaner{display:flex;width:32px;width:var(--mc-form-field-size-button-width, 32px);height:100%;cursor:pointer}.mc-cleaner .mc-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.mc-form-field__cleaner .mc-cleaner{position:absolute;top:0;bottom:0;right:0}mc-stepper{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;top:0;bottom:0;right:0;width:32px;width:var(--mc-form-field-size-button-width, 32px)}mc-stepper .mc-stepper-step-up,mc-stepper .mc-stepper-step-down{cursor:pointer;width:32px;width:var(--mc-form-field-size-button-width, 32px);text-align:center}mc-stepper .mc-stepper-step-up{transform:scaleY(-1)}\n", ".mc-input{background:transparent;margin:0;border:none;outline:none;box-sizing:border-box;padding:5px 16px;padding:var(--mc-input-size-padding, 5px 16px);width:100%;width:var(--mc-input-size-width, 100%);min-height:30px;min-height:var(--mc-input-size-min-height, 30px)}.mc-input::-ms-clear{display:none;width:0;height:0}.mc-input::-ms-reveal{display:none;width:0;height:0}.mc-input::-webkit-search-decoration,.mc-input::-webkit-search-cancel-button,.mc-input::-webkit-search-results-button,.mc-input::-webkit-search-results-decoration{display:none}.mc-input{display:inline-block}input.mc-input[type=number]{-moz-appearance:textfield}input.mc-input[type=number]::-webkit-inner-spin-button,input.mc-input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}input.mc-input:invalid{box-shadow:unset}\n", ".mc-timepicker{padding-right:calc(16px - 1px);padding-right:calc(var(--mc-timepicker-size-padding-right, 16px) - var(--mc-form-field-size-border-width, 1px))}.mc-form-field-type-timepicker{width:auto}\n", ".mc-form-field-type-datepicker{width:auto}.mc-datepicker{width:130px;width:var(--mc-datepicker-input-size-width, 130px)}\n", ".mc-textarea{background:transparent;margin:0;border:none;outline:none;resize:none;overflow:auto;width:100%;box-sizing:border-box;padding:5px 16px;padding:var(--mc-textarea-size-padding, 5px 16px)}.mc-textarea{display:inline-block;-webkit-appearance:none;vertical-align:bottom}.mc-textarea:not(.mc-textarea-resizable){box-sizing:border-box;overflow-y:hidden}.mc-textarea.mc-textarea-resizable{resize:vertical;min-height:50px;min-height:var(--mc-textarea-size-min-height, 50px)}.mc-textarea:invalid{box-shadow:unset}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-form-field',
      exportAs: 'mcFormField',
      templateUrl: 'form-field.html',
      // McInput is a directive and can't have styles, so we need to include its styles here.
      // The McInput styles are fairly minimal so it shouldn't be a big deal for people who
      // aren't using McInput.
      styleUrls: ['form-field.scss', '../input/input.scss', '../timepicker/timepicker.scss', '../datepicker/datepicker-input.scss', '../textarea/textarea.scss'],
      host: {
        class: 'mc-form-field',
        '[class.mc-form-field_invalid]': 'control.errorState',
        '[class.mc-form-field_has-prefix]': 'hasPrefix',
        '[class.mc-form-field_has-suffix]': 'hasSuffix',
        '[class.mc-form-field_has-cleaner]': 'canShowCleaner',
        '[class.mc-form-field_has-stepper]': 'canShowStepper',
        '[class.mc-disabled]': 'control.disabled',
        '[class.mc-focused]': 'control.focused',
        '[class.ng-untouched]': 'shouldForward("untouched")',
        '[class.ng-touched]': 'shouldForward("touched")',
        '[class.ng-pristine]': 'shouldForward("pristine")',
        '[class.ng-dirty]': 'shouldForward("dirty")',
        '[class.ng-valid]': 'shouldForward("valid")',
        '[class.ng-invalid]': 'shouldForward("invalid")',
        '[class.ng-pending]': 'shouldForward("pending")',
        '(keydown)': 'onKeyDown($event)',
        '(mouseenter)': 'onHoverChanged(true)',
        '(mouseleave)': 'onHoverChanged(false)'
      },
      inputs: ['color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    control: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McFormFieldControl, {
        static: false
      }]
    }],
    stepper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McStepper, {
        static: false
      }]
    }],
    cleaner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McCleaner, {
        static: false
      }]
    }],
    hint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McHint]
    }],
    suffix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McSuffix]
    }],
    prefix: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McPrefix]
    }],
    connectionContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['connectionContainer', {
        static: true
      }]
    }]
  });
})();

class McFormFieldWithoutBorders {}
/** @nocollapse */


McFormFieldWithoutBorders.ɵfac = function McFormFieldWithoutBorders_Factory(t) {
  return new (t || McFormFieldWithoutBorders)();
};
/** @nocollapse */


McFormFieldWithoutBorders.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McFormFieldWithoutBorders,
  selectors: [["mc-form-field", "mcFormFieldWithoutBorders", ""]],
  hostAttrs: [1, "mc-form-field_without-borders"],
  exportAs: ["mcFormFieldWithoutBorders"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McFormFieldWithoutBorders, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-form-field[mcFormFieldWithoutBorders]',
      exportAs: 'mcFormFieldWithoutBorders',
      host: {
        class: 'mc-form-field_without-borders'
      }
    }]
  }], null, null);
})();

class McFormFieldModule {}
/** @nocollapse */


McFormFieldModule.ɵfac = function McFormFieldModule_Factory(t) {
  return new (t || McFormFieldModule)();
};
/** @nocollapse */


McFormFieldModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McFormFieldModule
});
/** @nocollapse */

McFormFieldModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__.McIconModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [McFormField, McFormFieldWithoutBorders, McHint, McPrefix, McSuffix, McCleaner, McStepper],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_1__.McIconModule],
      exports: [McFormField, McFormFieldWithoutBorders, McHint, McPrefix, McSuffix, McCleaner, McStepper]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 86463:
/*!********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-icon.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McIcon": function() { return /* binding */ McIcon; },
/* harmony export */   "McIconBase": function() { return /* binding */ McIconBase; },
/* harmony export */   "McIconCSSStyler": function() { return /* binding */ McIconCSSStyler; },
/* harmony export */   "McIconMixinBase": function() { return /* binding */ McIconMixinBase; },
/* harmony export */   "McIconModule": function() { return /* binding */ McIconModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);





 // tslint:disable-next-line:naming-convention

const _c0 = ["mc-icon", ""];
const _c1 = ["*"];

class McIconCSSStyler {}
/** @nocollapse */


McIconCSSStyler.ɵfac = function McIconCSSStyler_Factory(t) {
  return new (t || McIconCSSStyler)();
};
/** @nocollapse */


McIconCSSStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McIconCSSStyler,
  selectors: [["", "mc-icon", ""]],
  hostAttrs: [1, "mc", "mc-icon"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McIconCSSStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mc-icon]',
      host: {
        class: 'mc mc-icon'
      }
    }]
  }], null, null);
})();

class McIconBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line: naming-convention


const McIconMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)(McIconBase, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ThemePalette.Empty);

class McIcon extends McIconMixinBase {
  constructor(elementRef, iconName) {
    super(elementRef);

    if (iconName) {
      elementRef.nativeElement.classList.add(iconName);
    }
  }

  getHostElement() {
    return this._elementRef.nativeElement;
  }

}
/** @nocollapse */


McIcon.ɵfac = function McIcon_Factory(t) {
  return new (t || McIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('mc-icon'));
};
/** @nocollapse */


McIcon.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McIcon,
  selectors: [["", "mc-icon", ""]],
  inputs: {
    color: "color"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function McIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mc-icon-rotate_90{transform:rotate(90deg)}.mc-icon-rotate_180{transform:rotate(180deg)}.mc-icon-rotate_270{transform:rotate(270deg)}.mc-icon-flip-h{transform:scaleY(-1)}.mc-icon-flip-v{transform:scaleX(-1)}.mc-icon-flip-vh{transform:scale(-1)}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: `[mc-icon]`,
      template: '<ng-content></ng-content>',
      styleUrls: ['icon.scss'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      inputs: ['color']
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['mc-icon']
      }]
    }];
  }, null);
})();

class McIconModule {}
/** @nocollapse */


McIconModule.ɵfac = function McIconModule_Factory(t) {
  return new (t || McIconModule)();
};
/** @nocollapse */


McIconModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McIconModule
});
/** @nocollapse */

McIconModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.PlatformModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McIconModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.PlatformModule],
      exports: [McIcon, McIconCSSStyler],
      declarations: [McIcon, McIconCSSStyler]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 89410:
/*!*********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-input.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BIG_STEP": function() { return /* binding */ BIG_STEP; },
/* harmony export */   "MAX_VALIDATOR": function() { return /* binding */ MAX_VALIDATOR; },
/* harmony export */   "MC_INPUT_VALUE_ACCESSOR": function() { return /* binding */ MC_INPUT_VALUE_ACCESSOR; },
/* harmony export */   "MIN_VALIDATOR": function() { return /* binding */ MIN_VALIDATOR; },
/* harmony export */   "MaxValidator": function() { return /* binding */ MaxValidator; },
/* harmony export */   "McInput": function() { return /* binding */ McInput; },
/* harmony export */   "McInputBase": function() { return /* binding */ McInputBase; },
/* harmony export */   "McInputMixinBase": function() { return /* binding */ McInputMixinBase; },
/* harmony export */   "McInputModule": function() { return /* binding */ McInputModule; },
/* harmony export */   "McInputMono": function() { return /* binding */ McInputMono; },
/* harmony export */   "McNumberInput": function() { return /* binding */ McNumberInput; },
/* harmony export */   "MinValidator": function() { return /* binding */ MinValidator; },
/* harmony export */   "SMALL_STEP": function() { return /* binding */ SMALL_STEP; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "getPrecision": function() { return /* binding */ getPrecision; },
/* harmony export */   "isDigit": function() { return /* binding */ isDigit; },
/* harmony export */   "isFloat": function() { return /* binding */ isFloat; },
/* harmony export */   "isInt": function() { return /* binding */ isInt; },
/* harmony export */   "normalizeSplitter": function() { return /* binding */ normalizeSplitter; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ 50599);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);














function getMcInputUnsupportedTypeError(inputType) {
  return Error(`Input type "${inputType}" isn't supported by mcInput.`);
}

const BIG_STEP = 10;
const SMALL_STEP = 1;

function normalizeSplitter(value) {
  return value ? value.replace(/,/g, '.') : value;
}

function isFloat(value) {
  return /^-?\d+\.\d+$/.test(value);
}

function isInt(value) {
  return /^-?\d+$/.test(value);
}

function isDigit(value) {
  return isFloat(value) || isInt(value);
}

function getPrecision(value) {
  const arr = value.toString().split('.');
  return arr.length === 1 ? 1 // tslint:disable-next-line:no-magic-numbers
  : Math.pow(10, arr[1].length);
}

function add(value1, value2) {
  const precision = Math.max(getPrecision(value1), getPrecision(value2));
  return (value1 * precision + value2 * precision) / precision;
}

class McNumberInput {
  constructor(elementRef, ngControl, step, bigStep, min, max) {
    this.elementRef = elementRef;
    this.ngControl = ngControl;
    this.focused = false;
    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.step = isDigit(step) ? parseFloat(step) : SMALL_STEP;
    this.bigStep = isDigit(bigStep) ? parseFloat(bigStep) : BIG_STEP;
    this.min = isDigit(min) ? parseFloat(min) : -Infinity;
    this.max = isDigit(max) ? parseFloat(max) : Infinity;

    if ('valueAsNumber' in this.nativeElement) {
      Object.defineProperty(Object.getPrototypeOf(this.nativeElement), 'valueAsNumber', {
        // tslint:disable-next-line:no-reserved-keywords
        get() {
          const res = parseFloat(normalizeSplitter(this.value));
          return isNaN(res) ? null : res;
        }

      });
    }
  }

  get nativeElement() {
    return this.elementRef.nativeElement;
  }

  focusChanged(isFocused) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }

  onKeyDown(event) {
    // tslint:disable-next-line:deprecation
    const keyCode = event.keyCode;

    const isCtrlA = e => e.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.A && (e.ctrlKey || e.metaKey);

    const isCtrlC = e => e.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.C && (e.ctrlKey || e.metaKey);

    const isCtrlV = e => e.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.V && (e.ctrlKey || e.metaKey);

    const isCtrlX = e => e.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.X && (e.ctrlKey || e.metaKey);

    const isCtrlZ = e => e.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.Z && (e.ctrlKey || e.metaKey);

    const isFKey = e => e.keyCode >= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.F1 && e.keyCode <= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.F12;

    const isNumber = e => e.keyCode >= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ZERO && e.keyCode <= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.NINE || e.keyCode >= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.NUMPAD_ZERO && e.keyCode <= _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.NUMPAD_NINE;

    const isPeriod = e => e.key === '.' || e.key === ',';

    const minuses = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.NUMPAD_MINUS, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.DASH, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.FF_MINUS];
    const serviceKeys = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.DELETE, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.TAB, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ESCAPE, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.ENTER];
    const arrows = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.LEFT_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.RIGHT_ARROW];
    const allowedKeys = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.HOME, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.END].concat(arrows).concat(serviceKeys).concat(minuses);

    if (allowedKeys.indexOf(keyCode) !== -1 || isCtrlA(event) || isCtrlC(event) || isCtrlV(event) || isCtrlX(event) || isCtrlZ(event) || isFKey(event) || isPeriod(event)) {
      // let it happen, don't do anything
      return;
    } // Ensure that it is not a number and stop the keypress


    if (event.shiftKey || !isNumber(event)) {
      event.preventDefault(); // process steps

      const step = event.shiftKey ? this.bigStep : this.step;

      if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.UP_ARROW) {
        this.stepUp(step);
      }

      if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__.DOWN_ARROW) {
        this.stepDown(step);
      }
    }
  }

  onPaste(event) {
    if (!isDigit(normalizeSplitter(event.clipboardData.getData('text')))) {
      event.preventDefault();
    }
  }

  stepUp(step) {
    this.elementRef.nativeElement.focus();
    const res = Math.max(Math.min(add(this.nativeElement.valueAsNumber || 0, step), this.max), this.min);
    this.nativeElement.value = res.toString();
    this.viewToModelUpdate(this.nativeElement.valueAsNumber);
  }

  stepDown(step) {
    this.elementRef.nativeElement.focus();
    const res = Math.min(Math.max(add(this.nativeElement.valueAsNumber || 0, -step), this.min), this.max);
    this.nativeElement.value = res.toString();
    this.viewToModelUpdate(this.nativeElement.valueAsNumber);
  }

  viewToModelUpdate(value) {
    if (this.ngControl) {
      this.ngControl.control.setValue(value);
    }
  }

}
/** @nocollapse */


McNumberInput.ɵfac = function McNumberInput_Factory(t) {
  return new (t || McNumberInput)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('step'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('big-step'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('min'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('max'));
};
/** @nocollapse */


McNumberInput.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: McNumberInput,
  selectors: [["input", "mcInput", "", "type", "number"]],
  hostBindings: function McNumberInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function McNumberInput_blur_HostBindingHandler() {
        return ctx.focusChanged(false);
      })("focus", function McNumberInput_focus_HostBindingHandler() {
        return ctx.focusChanged(true);
      })("paste", function McNumberInput_paste_HostBindingHandler($event) {
        return ctx.onPaste($event);
      })("keydown", function McNumberInput_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
  },
  inputs: {
    bigStep: "bigStep",
    step: "step",
    min: "min",
    max: "max"
  },
  exportAs: ["mcNumericalInput"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McNumberInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: `input[mcInput][type="number"]`,
      exportAs: 'mcNumericalInput',
      host: {
        '(blur)': 'focusChanged(false)',
        '(focus)': 'focusChanged(true)',
        '(paste)': 'onPaste($event)',
        '(keydown)': 'onKeyDown($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['step']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['big-step']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['min']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
        args: ['max']
      }]
    }];
  }, {
    bigStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

const MC_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('MC_INPUT_VALUE_ACCESSOR');
const MC_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
let nextUniqueId = 0;

class McInputBase {
  constructor(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
    this.defaultErrorStateMatcher = defaultErrorStateMatcher;
    this.parentForm = parentForm;
    this.parentFormGroup = parentFormGroup;
    this.ngControl = ngControl;
  }

} // tslint:disable-next-line:naming-convention


const McInputMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.mixinErrorState)(McInputBase);

class McInput extends McInputMixinBase {
  // tslint:disable-next-line: naming-convention
  constructor(elementRef, rawValidators, mcValidation, ngControl, numberInput, ngModel, formControlName, parentForm, parentFormGroup, defaultErrorStateMatcher, inputValueAccessor) {
    super(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
    this.elementRef = elementRef;
    this.rawValidators = rawValidators;
    this.mcValidation = mcValidation;
    this.numberInput = numberInput;
    this.ngModel = ngModel;
    this.formControlName = formControlName;
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */

    this.focused = false;
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */

    this.controlType = 'input';
    this.uid = `mc-input-${nextUniqueId++}`;
    this.neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(t => (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.getSupportedInputTypes)().has(t));
    this._disabled = false;
    this._required = false; // tslint:enable no-reserved-keywords

    this._type = 'text'; // If no input value accessor was explicitly specified, use the element as the input value
    // accessor.

    this._inputValueAccessor = inputValueAccessor || this.elementRef.nativeElement;
    this.previousNativeValue = this.value; // Force setter to be called in case id was not specified.

    this.id = this.id;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get disabled() {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }

    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value); // Browsers may not fire the blur event if the input is disabled too quickly.
    // Reset from here to ensure that the element doesn't become stuck.

    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || this.uid;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
  } // tslint:disable no-reserved-keywords

  /** Input type of the element. */


  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value || 'text';
    this.validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property. Textarea elements don't support the type property or attribute.

    if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.getSupportedInputTypes)().has(this._type)) {
      this.elementRef.nativeElement.type = this._type;
    }
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get value() {
    return this._inputValueAccessor.value;
  }

  set value(value) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }

  ngAfterContentInit() {
    if (!this.ngControl) {
      return;
    }

    if (this.mcValidation.useValidation) {
      (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.setMosaicValidation)(this);
    }
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    } // We need to dirty-check the native element's value, because there are some cases where
    // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
    // updating the value using `emitEvent: false`).


    this.dirtyCheckNativeValue();
  }
  /** Focuses the input. */


  focus() {
    this.elementRef.nativeElement.focus();
  }

  onBlur() {
    this.focusChanged(false);

    if (this.ngControl && this.ngControl.control) {
      const control = this.ngControl.control;
      control.updateValueAndValidity({
        emitEvent: false
      });
      control.statusChanges.emit(control.status);
    }
  }
  /** Callback for the cases where the focused state of the input changes. */


  focusChanged(isFocused) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }

  onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
    // Angular will run a new change detection each time the `input` event has been dispatched.
    // It's necessary that Angular recognizes the value change, because when floatingLabel
    // is set to false and Angular forms aren't used, the placeholder won't recognize the
    // value changes and will not disappear.
    // Listening to the input event wouldn't be necessary when the input is using the
    // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get empty() {
    return !this.isNeverEmpty() && !this.elementRef.nativeElement.value && !this.isBadInput();
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  onContainerClick() {
    this.focus();
  }
  /** Does some manual dirty checking on the native input `value` property. */


  dirtyCheckNativeValue() {
    const newValue = this.value;

    if (this.previousNativeValue !== newValue) {
      this.previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Make sure the input is a supported type. */


  validateType() {
    if (MC_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
      throw getMcInputUnsupportedTypeError(this._type);
    }
  }
  /** Checks whether the input type is one of the types that are never empty. */


  isNeverEmpty() {
    return this.neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  /** Checks whether the input is invalid based on the native validation. */


  isBadInput() {
    // The `validity` property won't be present on platform-server.
    const validity = this.elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }

}
/** @nocollapse */


McInput.ɵfac = function McInput_Factory(t) {
  return new (t || McInput)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.MC_VALIDATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](McNumberInput, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MC_INPUT_VALUE_ACCESSOR, 10));
};
/** @nocollapse */


McInput.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: McInput,
  selectors: [["input", "mcInput", ""]],
  hostAttrs: [1, "mc-input"],
  hostVars: 4,
  hostBindings: function McInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("blur", function McInput_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("focus", function McInput_focus_HostBindingHandler() {
        return ctx.focusChanged(true);
      })("input", function McInput_input_HostBindingHandler() {
        return ctx.onInput();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("disabled", ctx.disabled || null);
    }
  },
  inputs: {
    errorStateMatcher: "errorStateMatcher",
    placeholder: "placeholder",
    disabled: "disabled",
    id: "id",
    required: "required",
    type: "type",
    value: "value"
  },
  exportAs: ["mcInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_7__.McFormFieldControl,
    useExisting: McInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: `input[mcInput]`,
      exportAs: 'mcInput',
      host: {
        class: 'mc-input',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[attr.id]': 'id',
        '[attr.placeholder]': 'placeholder',
        '[attr.disabled]': 'disabled || null',
        '[required]': 'required',
        '(blur)': 'onBlur()',
        '(focus)': 'focusChanged(true)',
        '(input)': 'onInput()'
      },
      providers: [{
        provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_7__.McFormFieldControl,
        useExisting: McInput
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.MC_VALIDATION]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }]
    }, {
      type: McNumberInput,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [MC_INPUT_VALUE_ACCESSOR]
      }]
    }];
  }, {
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class McInputMono {}
/** @nocollapse */


McInputMono.ɵfac = function McInputMono_Factory(t) {
  return new (t || McInputMono)();
};
/** @nocollapse */


McInputMono.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: McInputMono,
  selectors: [["input", "mcInputMonospace", ""]],
  hostAttrs: [1, "mc-input_monospace"],
  exportAs: ["McInputMonospace"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McInputMono, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'input[mcInputMonospace]',
      exportAs: 'McInputMonospace',
      host: {
        class: 'mc-input_monospace'
      }
    }]
  }], null, null);
})();

const MIN_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MinValidator),
  multi: true
};
/**
 * A directive which installs the {@link MinValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `min` attribute.
 *
 * @experimental
 */

class MinValidator {
  ngOnChanges(changes) {
    if ('min' in changes) {
      this.createValidator();

      if (this.onChange) {
        this.onChange();
      }
    }
  }

  validate(c) {
    return this.validator(c);
  }

  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }

  createValidator() {
    this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(parseInt(this.min, 10));
  }

}
/** @nocollapse */


MinValidator.ɵfac = function MinValidator_Factory(t) {
  return new (t || MinValidator)();
};
/** @nocollapse */


MinValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MinValidator,
  selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MinValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("min", ctx.min ? ctx.min : null);
    }
  },
  inputs: {
    min: "min"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MinValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[min][formControlName],[min][formControl],[min][ngModel]',
      providers: [MIN_VALIDATOR],
      host: {
        '[attr.min]': 'min ? min : null'
      }
    }]
  }], null, {
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

const MAX_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => MaxValidator),
  multi: true
};
/**
 * A directive which installs the {@link MaxValidator} for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `min` attribute.
 *
 * @experimental
 */

class MaxValidator {
  ngOnChanges(changes) {
    if ('max' in changes) {
      this.createValidator();

      if (this.onChange) {
        this.onChange();
      }
    }
  }

  validate(c) {
    return this.validator(c);
  }

  registerOnValidatorChange(fn) {
    this.onChange = fn;
  }

  createValidator() {
    this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(parseInt(this.max, 10));
  }

}
/** @nocollapse */


MaxValidator.ɵfac = function MaxValidator_Factory(t) {
  return new (t || MaxValidator)();
};
/** @nocollapse */


MaxValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: MaxValidator,
  selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function MaxValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("max", ctx.max ? ctx.max : null);
    }
  },
  inputs: {
    max: "max"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MaxValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[max][formControlName],[max][formControl],[max][ngModel]',
      providers: [MAX_VALIDATOR],
      host: {
        '[attr.max]': 'max ? max : null'
      }
    }]
  }], null, {
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

class McInputModule {}
/** @nocollapse */


McInputModule.ɵfac = function McInputModule_Factory(t) {
  return new (t || McInputModule)();
};
/** @nocollapse */


McInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: McInputModule
});
/** @nocollapse */

McInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
      exports: [McInput, McNumberInput, McInputMono, MinValidator, MaxValidator],
      declarations: [McInput, McNumberInput, McInputMono, MinValidator, MaxValidator]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 37542:
/*!********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-link.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McLink": function() { return /* binding */ McLink; },
/* harmony export */   "McLinkBase": function() { return /* binding */ McLinkBase; },
/* harmony export */   "McLinkMixinBase": function() { return /* binding */ McLinkMixinBase; },
/* harmony export */   "McLinkModule": function() { return /* binding */ McLinkModule; },
/* harmony export */   "baseURLRegex": function() { return /* binding */ baseURLRegex; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);








class McLinkBase {} // tslint:disable-next-line: naming-convention


const McLinkMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(McLinkBase));
const baseURLRegex = /^http(s)?:\/\//;

class McLink extends McLinkMixinBase {
  constructor(elementRef, focusMonitor, changeDetector) {
    super();
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
    this.changeDetector = changeDetector;
    this._disabled = false;
    this._pseudo = false;
    this._noUnderline = false;
    this._useVisited = false;
    this.focusMonitor.monitor(elementRef.nativeElement, true);
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    const newValue = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this.changeDetector.markForCheck();
    }
  }

  get pseudo() {
    return this._pseudo;
  }

  set pseudo(value) {
    this._pseudo = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
  }

  get noUnderline() {
    return this._noUnderline;
  }

  set noUnderline(value) {
    this._noUnderline = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
  }

  get useVisited() {
    return this._useVisited;
  }

  set useVisited(value) {
    this._useVisited = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
  }

  get hasIcon() {
    return !!this.icon;
  }

  get print() {
    var _a;

    return this._print || ((_a = this.getHostElement().href) === null || _a === void 0 ? void 0 : _a.replace(baseURLRegex, ''));
  }

  set print(value) {
    this.printMode = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    this._print = value;
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
  }

  focus() {
    this.getHostElement().focus();
  }

  getHostElement() {
    return this.elementRef.nativeElement;
  }

}
/** @nocollapse */


McLink.ɵfac = function McLink_Factory(t) {
  return new (t || McLink)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
/** @nocollapse */


McLink.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: McLink,
  selectors: [["", "mc-link", ""]],
  contentQueries: function McLink_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIcon, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    }
  },
  hostAttrs: [1, "mc-link"],
  hostVars: 15,
  hostBindings: function McLink_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("tabindex", ctx.tabIndex)("print", ctx.print);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-link_no-underline", ctx.noUnderline)("mc-link_use-visited", ctx.useVisited)("mc-link_pseudo", ctx.pseudo)("mc-link_print", ctx.printMode)("mc-text-only", !ctx.hasIcon)("mc-text-with-icon", ctx.hasIcon);
    }
  },
  inputs: {
    tabIndex: "tabIndex",
    disabled: "disabled",
    pseudo: "pseudo",
    noUnderline: "noUnderline",
    useVisited: "useVisited",
    print: "print"
  },
  exportAs: ["mcLink"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[mc-link]',
      exportAs: 'mcLink',
      inputs: ['tabIndex'],
      host: {
        class: 'mc-link',
        '[class.mc-link_no-underline]': 'noUnderline',
        '[class.mc-link_use-visited]': 'useVisited',
        '[class.mc-link_pseudo]': 'pseudo',
        '[class.mc-link_print]': 'printMode',
        '[class.mc-text-only]': '!hasIcon',
        '[class.mc-text-with-icon]': 'hasIcon',
        '[attr.disabled]': 'disabled || null',
        '[attr.tabindex]': 'tabIndex',
        '[attr.print]': 'print'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    pseudo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    noUnderline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    useVisited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    print: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChild,
      args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIcon]
    }]
  });
})();

class McLinkModule {}
/** @nocollapse */


McLinkModule.ɵfac = function McLinkModule_Factory(t) {
  return new (t || McLinkModule)();
};
/** @nocollapse */


McLinkModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McLinkModule
});
/** @nocollapse */

McLinkModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McLinkModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule],
      declarations: [McLink],
      exports: [McLink]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 44381:
/*!**********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-select.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McSelect": function() { return /* binding */ McSelect; },
/* harmony export */   "McSelectBase": function() { return /* binding */ McSelectBase; },
/* harmony export */   "McSelectChange": function() { return /* binding */ McSelectChange; },
/* harmony export */   "McSelectModule": function() { return /* binding */ McSelectModule; },
/* harmony export */   "McSelectSearch": function() { return /* binding */ McSelectSearch; },
/* harmony export */   "McSelectSearchEmptyResult": function() { return /* binding */ McSelectSearchEmptyResult; },
/* harmony export */   "McSelectTrigger": function() { return /* binding */ McSelectTrigger; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ 50599);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ptsecurity/mosaic/tags */ 71849);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/collections */ 62604);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ptsecurity/cdk/a11y */ 61729);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ 89410);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 58640);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 79902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 83720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1143);
























/* tslint:disable:no-empty */

const _c0 = ["mcSelectCleaner"];
const _c1 = ["trigger"];
const _c2 = ["panel"];
const _c3 = ["optionsContainer"];

function McSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
  }
}

function McSelect_span_5_div_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.triggerValue);
  }
}

function McSelect_span_5_div_1_div_2_mc_tag_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McSelect_span_5_div_1_div_2_mc_tag_1_i_2_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const option_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      return ctx_r13.onRemoveMatcherItem(option_r11, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McSelect_span_5_div_1_div_2_mc_tag_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tag", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McSelect_span_5_div_1_div_2_mc_tag_1_i_2_Template, 1, 0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-error", ctx_r10.errorState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", option_r11.disabled || ctx_r10.disabled)("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r11.viewValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !option_r11.disabled && !ctx_r10.disabled);
  }
}

function McSelect_span_5_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McSelect_span_5_div_1_div_2_mc_tag_1_Template, 3, 6, "mc-tag", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.triggerValues);
  }
}

function McSelect_span_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McSelect_span_5_div_1_span_1_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McSelect_span_5_div_1_div_2_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r6.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r6.hiddenItems > 0 ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.hiddenItemsTextFormatter(ctx_r6.hiddenItemsText, ctx_r6.hiddenItems), " ");
  }
}

function McSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function McSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McSelect_span_5_div_1_Template, 5, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function McSelect_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McSelect_div_6_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.clearValue($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McSelect_ng_template_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McSelect_ng_template_9_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function McSelect_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McSelect_ng_template_9_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r22.handleKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McSelect_ng_template_9_div_2_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@fadeInContent.done", function McSelect_ng_template_9_Template_div_animation_fadeInContent_done_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r24.panelDoneAnimatingStream.next($event.toState);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, McSelect_ng_template_9_div_5_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mc-select__panel ", ctx_r5.getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("transform-origin", ctx_r5.transformOrigin)("font-size", ctx_r5.triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.panelClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.search);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInContent", "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isEmptySearchResult);
  }
}

const _c4 = [[["mc-select-trigger"]], [["mc-cleaner"]], "*", [["", "mcSelectSearch", ""]], [["", "mc-select-search-empty-result", ""]]];
const _c5 = ["mc-select-trigger", "mc-cleaner", "*", "[mcSelectSearch]", "[mc-select-search-empty-result]"];
let nextUniqueId = 0;
/** Change event object that is emitted when the select value has changed. */

class McSelectChange {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }

}

class McSelectSearch {
  constructor(formField) {
    this.searchChangesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.isSearchChanged = false;
    formField.canCleanerClearByEsc = false;
  }

  focus() {
    this.input.focus();
  }

  reset() {
    this.input.ngControl.reset();
  }

  ngAfterContentInit() {
    if (!this.input) {
      throw Error('McSelectSearch does not work without mcInput');
    }

    if (!this.input.ngControl) {
      throw Error('McSelectSearch does not work without ngControl');
    }

    Promise.resolve().then(() => {
      this.searchChangesSubscription = this.input.ngControl.valueChanges.subscribe(() => {
        this.isSearchChanged = true;
      });
    });
  }

  ngOnDestroy() {
    this.searchChangesSubscription.unsubscribe();
  }

  handleKeydown(event) {
    // tslint:disable-next-line:deprecation
    if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ESCAPE) {
      if (this.input.value) {
        this.reset();
        event.stopPropagation();
      }
    } // tslint:disable-next-line:deprecation


    if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.HOME, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.END].includes(event.keyCode)) {
      event.stopPropagation();
    }
  }

}
/** @nocollapse */


McSelectSearch.ɵfac = function McSelectSearch_Factory(t) {
  return new (t || McSelectSearch)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormField));
};
/** @nocollapse */


McSelectSearch.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McSelectSearch,
  selectors: [["", "mcSelectSearch", ""]],
  contentQueries: function McSelectSearch_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__.McInput, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  hostBindings: function McSelectSearch_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McSelectSearch_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      });
    }
  },
  exportAs: ["mcSelectSearch"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSelectSearch, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcSelectSearch]',
      exportAs: 'mcSelectSearch',
      host: {
        '(keydown)': 'handleKeydown($event)'
      }
    }]
  }], function () {
    return [{
      type: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormField
    }];
  }, {
    input: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [_ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__.McInput, {
        static: false
      }]
    }]
  });
})();

class McSelectSearchEmptyResult {}
/** @nocollapse */


McSelectSearchEmptyResult.ɵfac = function McSelectSearchEmptyResult_Factory(t) {
  return new (t || McSelectSearchEmptyResult)();
};
/** @nocollapse */


McSelectSearchEmptyResult.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McSelectSearchEmptyResult,
  selectors: [["", "mc-select-search-empty-result", ""]],
  exportAs: ["mcSelectSearchEmptyResult"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSelectSearchEmptyResult, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mc-select-search-empty-result]',
      exportAs: 'mcSelectSearchEmptyResult'
    }]
  }], null, null);
})();

class McSelectTrigger {}
/** @nocollapse */


McSelectTrigger.ɵfac = function McSelectTrigger_Factory(t) {
  return new (t || McSelectTrigger)();
};
/** @nocollapse */


McSelectTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McSelectTrigger,
  selectors: [["mc-select-trigger"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-select-trigger'
    }]
  }], null, null);
})();

class McSelectBase {
  constructor(elementRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
    this.elementRef = elementRef;
    this.defaultErrorStateMatcher = defaultErrorStateMatcher;
    this.parentForm = parentForm;
    this.parentFormGroup = parentFormGroup;
    this.ngControl = ngControl;
  }

} // tslint:disable-next-line:naming-convention


const McSelectMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mixinDisabled)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mixinErrorState)(McSelectBase)));

class McSelect extends McSelectMixinBase {
  constructor(_changeDetectorRef, _ngZone, _renderer, defaultErrorStateMatcher, elementRef, rawValidators, _dir, parentForm, parentFormGroup, _parentFormField, ngControl, ngModel, formControlName, _scrollStrategyFactory, mcValidation) {
    super(elementRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._renderer = _renderer;
    this.rawValidators = rawValidators;
    this._dir = _dir;
    this._parentFormField = _parentFormField;
    this.ngModel = ngModel;
    this.formControlName = formControlName;
    this._scrollStrategyFactory = _scrollStrategyFactory;
    this.mcValidation = mcValidation;
    /** A name for this control that can be used by `mc-form-field`. */

    this.controlType = 'select';
    this.hiddenItems = 0;
    /** The cached font-size of the trigger element. */

    this.triggerFontSize = 0;
    this.previousSelectionModelSelected = [];
    /** The value of the select panel's transform-origin property. */

    this.transformOrigin = 'top';
    /** Emits when the panel element is finished transforming in. */

    this.panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** Strategy that will be used to handle scrolling while the select panel is open. */

    this.scrollStrategy = this._scrollStrategyFactory();
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */

    this.offsetY = 0;
    /**
     * This position config ensures that the top "start" corner of the overlay
     * is aligned with with the top "start" of the origin by default (overlapping
     * the trigger completely). If the panel cannot fit below the trigger, it
     * will fall back to a position above the trigger.
     */

    this.positions = [{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
    this.hiddenItemsText = '...ещё';
    this.backdropClass = 'cdk-overlay-transparent-backdrop';
    /** Combined stream of all of the child options' change events. */

    this.optionSelectionChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.defer)(() => {
      if (this.options) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...this.options.map(option => option.onSelectionChange), ...this.selectionModel.selected.map(option => option.onSelectionChange));
      }

      return this._ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.optionSelectionChanges));
    });
    /** Event emitted when the select panel has been toggled. */

    this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the select has been opened. */

    this.openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {}));
    /** Event emitted when the select has been closed. */

    this.closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => {}));
    /** Event emitted when the selected value has been changed by the user. */

    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._hasBackdrop = false;
    this._required = false;
    this._multiple = false;
    this._focused = false;
    this.panelOpen = false;
    this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
    /** The scroll position of the overlay panel, calculated to center the selected option. */

    this.scrollTop = 0;
    /** Unique id for this input. */

    this.uid = `mc-select-${nextUniqueId++}`;
    /** Emits whenever the component is destroyed. */

    this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    /** `View -> model callback called when value changes` */

    this.onChange = () => {};
    /** `View -> model callback called when select has been touched` */


    this.onTouched = () => {};
    /** Comparison function to specify which option is displayed. Defaults to object equality. */


    this._compareWith = (o1, o2) => o1 === o2;

    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
    } // Force setter to be called in case id was not specified.


    this.id = this.id;
  }

  get hasBackdrop() {
    return this._hasBackdrop;
  }

  set hasBackdrop(value) {
    this._hasBackdrop = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
  }

  get placeholder() {
    return this._placeholder;
  }

  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }

  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
    this.stateChanges.next();
  }

  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    if (this.selectionModel) {
      throw (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.getMcSelectDynamicMultipleError)();
    }

    this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__.coerceBooleanProperty)(value);
  }
  /**
   * Function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */


  get compareWith() {
    return this._compareWith;
  }

  set compareWith(fn) {
    /* tslint:disable-next-line:strict-type-predicates */
    if (typeof fn !== 'function') {
      throw (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.getMcSelectNonFunctionValueError)();
    }

    this._compareWith = fn;

    if (this.selectionModel) {
      // A different comparator means the selection could change.
      this.initializeSelection();
    }
  }
  /** Value of the select control. */


  get value() {
    return this._value;
  }

  set value(newValue) {
    if (newValue !== this._value) {
      this.writeValue(newValue);
      this._value = newValue;
    }
  }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || this.uid;
    this.stateChanges.next();
  }
  /** Whether the select is focused. */


  get focused() {
    return this._focused || this.panelOpen;
  }

  set focused(value) {
    this._focused = value;
  }

  get isEmptySearchResult() {
    return this.search && this.options.length === 0 && !!this.search.input.value;
  }

  get canShowCleaner() {
    return this.cleaner && this.selectionModel.hasValue();
  }

  get selected() {
    return this.multiple ? this.selectionModel.selected : this.selectionModel.selected[0];
  }

  get triggerValue() {
    if (this.empty) {
      return '';
    }

    return this.selectionModel.selected[0].viewValue;
  }

  get triggerValues() {
    if (this.empty) {
      return [];
    }

    const selectedOptions = this.selectionModel.selected;

    if (this.isRtl()) {
      selectedOptions.reverse();
    }

    return selectedOptions;
  }

  get empty() {
    return !this.selectionModel || this.selectionModel.isEmpty();
  }

  ngOnInit() {
    this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_14__.SelectionModel(this.multiple);
    this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
    // fire the animation end event twice for the same animation. See:
    // https://github.com/angular/angular/issues/24084

    this.panelDoneAnimatingStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy)).subscribe(() => {
      if (this.panelOpen) {
        this.scrollTop = 0;

        if (this.search) {
          this.search.focus();
        }

        this.openedChange.emit(true);
      } else {
        this.openedChange.emit(false);

        this._changeDetectorRef.markForCheck();
      }
    });
  }

  ngAfterContentInit() {
    if (this.mcValidation.useValidation) {
      (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.setMosaicValidation)(this);
    }

    this.initKeyManager();
    this.selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy)).subscribe(event => {
      event.added.forEach(option => option.select());
      event.removed.forEach(option => option.deselect());
    });
    this.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy)).subscribe(() => {
      this.resetOptions();
      this.initializeSelection();
    });
  }

  ngAfterViewInit() {
    this.tags.changes.subscribe(() => {
      setTimeout(() => this.calculateHiddenItems(), 0);
    });
  }

  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  ngOnChanges(changes) {
    // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
    // the parent form field know to run change detection when the disabled state changes.
    if (changes.disabled) {
      this.stateChanges.next();
    }
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
    this.stateChanges.complete();
    this.closeSubscription.unsubscribe();
  }

  hiddenItemsTextFormatter(hiddenItemsText, hiddenItems) {
    return `${hiddenItemsText} ${hiddenItems}`;
  }

  clearValue($event) {
    $event.stopPropagation();
    this.selectionModel.clear();
    this.keyManager.setActiveItem(-1);
    this.propagateChanges();
  }

  resetSearch() {
    if (!this.search) {
      return;
    }

    this.search.reset();
    /*
    todo the incorrect behaviour of keyManager is possible here
    to avoid first item selection (to provide correct options flipping on closed select)
    we should process options update like it is the first options appearance
    */

    this.search.isSearchChanged = false;
  }
  /** Toggles the overlay panel open or closed. */


  toggle() {
    if (this.panelOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  /** Opens the overlay panel. */


  open() {
    var _a;

    if (this.disabled || !((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) || this.panelOpen) {
      return;
    }

    this.triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
    // `parseInt` ignores the trailing 'px' and converts this to a number.

    this.triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement)['font-size']);
    this.panelOpen = true;
    this.keyManager.withHorizontalOrientation(null);
    this.highlightCorrectOption();

    this._changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.


    this._ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this.scrollActiveOptionIntoView();

      if (this.triggerFontSize && this.overlayDir.overlayRef && this.overlayDir.overlayRef.overlayElement) {
        this.overlayDir.overlayRef.overlayElement.style.fontSize = `${this.triggerFontSize}px`;
      }
    });
  }
  /** Closes the overlay panel and focuses the host element. */


  close() {
    if (!this.panelOpen) {
      return;
    } // the order of calls is important


    this.resetSearch();
    this.panelOpen = false;
    this.keyManager.withHorizontalOrientation(this.isRtl() ? 'rtl' : 'ltr');

    this._changeDetectorRef.markForCheck();

    this.onTouched();
  }
  /**
   * Sets the select's value. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param value New value to be written to the model.
   */


  writeValue(value) {
    if (this.options) {
      this.setSelectionByValue(value);
    }
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */


  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Disables the select. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param isDisabled Sets whether the component is disabled.
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetectorRef.markForCheck();

    this.stateChanges.next();
  }

  isRtl() {
    return this._dir ? this._dir.value === 'rtl' : false;
  }

  handleKeydown(event) {
    if (this.disabled) {
      return;
    }

    if (this.panelOpen) {
      this.handleOpenKeydown(event);
    } else {
      this.handleClosedKeydown(event);
    }
  }

  onFocus() {
    if (!this.disabled) {
      this._focused = true;
      this.stateChanges.next();
    }
  }
  /**
   * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
   * "blur" to the panel when it opens, causing a false positive.
   */


  onBlur() {
    this._focused = false;

    if (!this.disabled && !this.panelOpen) {
      this.onTouched();

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
  }
  /**
   * Callback that is invoked when the overlay panel has been attached.
   */


  onAttached() {
    this.overlayDir.positionChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)).subscribe(() => {
      this._changeDetectorRef.detectChanges();

      this.setOverlayPosition();
      this.optionsContainer.nativeElement.scrollTop = this.scrollTop;
      this.updateScrollSize();
    });
    this.closeSubscription = this.closingActions().subscribe(() => this.close());
  }
  /** Returns the theme to be used on the panel. */


  getPanelTheme() {
    return this._parentFormField ? `mc-${this._parentFormField.color}` : '';
  }
  /** Focuses the select element. */


  focus() {
    this.elementRef.nativeElement.focus();
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  onContainerClick() {
    this.focus();
  }
  /** Invoked when an option is clicked. */


  onRemoveMatcherItem(option, $event) {
    $event.stopPropagation();
    option.deselect();
  }

  calculateHiddenItems() {
    if (this.customTrigger || this.empty || !this.multiple) {
      return;
    }

    let visibleItems = 0;
    const totalItemsWidth = this.getTotalItemsWidthInMatcher();
    let totalVisibleItemsWidth = 0;
    this.tags.forEach(tag => {
      if (tag.nativeElement.offsetTop < tag.nativeElement.offsetHeight) {
        totalVisibleItemsWidth += this.getItemWidth(tag.nativeElement);
        visibleItems++;
      }
    });
    this.hiddenItems = this.selected.length - visibleItems;

    if (this.hiddenItems) {
      const itemsCounter = this.trigger.nativeElement.querySelector('.mc-select__match-hidden-text');
      const matcherList = this.trigger.nativeElement.querySelector('.mc-select__match-list');
      const itemsCounterShowed = itemsCounter.offsetTop < itemsCounter.offsetHeight; // const itemsCounterWidth: number = itemsCounter.getBoundingClientRect().width;

      const itemsCounterWidth = 86;
      const matcherListWidth = matcherList.getBoundingClientRect().width;
      const matcherWidth = matcherListWidth + itemsCounterWidth;

      if (itemsCounterShowed && totalItemsWidth < matcherWidth) {
        this.hiddenItems = 0;
      }

      if (totalVisibleItemsWidth === matcherListWidth || totalVisibleItemsWidth + itemsCounterWidth < matcherListWidth) {
        this._changeDetectorRef.markForCheck();

        return;
      } else if (!itemsCounterShowed && totalItemsWidth + itemsCounterWidth > matcherWidth) {
        this.hiddenItems++;
      }
    }

    this._changeDetectorRef.markForCheck();
  }

  getItemHeight() {
    return this.options.first ? this.options.first.getHeight() : 0;
  }

  closingActions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.overlayDir.overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(event => !this.elementRef.nativeElement.contains(event.target))), this.overlayDir.overlayRef.detachments());
  }

  getHeightOfOptionsContainer() {
    return this.optionsContainer.nativeElement.getClientRects()[0].height;
  }

  updateScrollSize() {
    if (!this.options.first) {
      return;
    }

    this.keyManager.withScrollSize(Math.floor(this.getHeightOfOptionsContainer() / this.options.first.getHeight()));
  }

  getTotalItemsWidthInMatcher() {
    const triggerClone = this.trigger.nativeElement.cloneNode(true);
    triggerClone.querySelector('.mc-select__match-hidden-text').remove();

    this._renderer.setStyle(triggerClone, 'position', 'absolute');

    this._renderer.setStyle(triggerClone, 'visibility', 'hidden');

    this._renderer.setStyle(triggerClone, 'top', '-100%');

    this._renderer.setStyle(triggerClone, 'left', '0');

    this._renderer.appendChild(this.trigger.nativeElement, triggerClone);

    let totalItemsWidth = 0;
    triggerClone.querySelectorAll('mc-tag').forEach(item => {
      totalItemsWidth += this.getItemWidth(item);
    });
    triggerClone.remove();
    return totalItemsWidth;
  }

  getItemWidth(element) {
    const computedStyle = window.getComputedStyle(element);
    const width = parseInt(computedStyle.width);
    const marginLeft = parseInt(computedStyle.marginLeft);
    const marginRight = parseInt(computedStyle.marginRight);
    return width + marginLeft + marginRight;
  }
  /** Handles keyboard events while the select is closed. */


  handleClosedKeydown(event) {
    /* tslint:disable-next-line */
    const keyCode = event.keyCode;
    const isArrowKey = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.LEFT_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.RIGHT_ARROW].includes(keyCode);
    const isOpenKey = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE].includes(keyCode); // Open the select on ALT + arrow key to match the native <select>

    if (isOpenKey || (this.multiple || event.altKey) && isArrowKey) {
      event.preventDefault(); // prevents the page from scrolling down when pressing space

      this.open();
    } else if (!this.multiple) {
      this.keyManager.onKeydown(event);
    }
  }
  /** Handles keyboard events when the selected is open. */


  handleOpenKeydown(event) {
    /* tslint:disable-next-line */
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.DOWN_ARROW || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.UP_ARROW;

    if (isArrowKey && event.altKey) {
      // Close the select on ALT + arrow key to match the native <select>
      event.preventDefault();
      this.close();
    } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.HOME) {
      event.preventDefault();
      this.keyManager.setFirstItemActive();
    } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.END) {
      event.preventDefault();
      this.keyManager.setLastItemActive();
    } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_UP) {
      event.preventDefault();
      this.keyManager.setPreviousPageItemActive();
    } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.PAGE_DOWN) {
      event.preventDefault();
      this.keyManager.setNextPageItemActive();
    } else if ((keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.ENTER || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.SPACE) && this.keyManager.activeItem) {
      event.preventDefault();
      this.keyManager.activeItem.selectViaInteraction();
    } else if (this._multiple && keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__.A && event.ctrlKey) {
      event.preventDefault();
      const hasDeselectedOptions = this.options.some(option => !option.selected);
      this.options.forEach(option => {
        if (hasDeselectedOptions && !option.disabled) {
          option.select();
        } else {
          option.deselect();
        }
      });
    } else {
      const previouslyFocusedIndex = this.keyManager.activeItemIndex;
      this.keyManager.onKeydown(event);

      if (this._multiple && isArrowKey && event.shiftKey && this.keyManager.activeItem && this.keyManager.activeItemIndex !== previouslyFocusedIndex) {
        this.keyManager.activeItem.selectViaInteraction();
      }

      if (this.search) {
        this.search.focus();
      }
    }
  }

  initializeSelection() {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      this.setSelectionByValue(this.ngControl ? this.ngControl.value : this._value);
    });
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */


  setSelectionByValue(value) {
    this.previousSelectionModelSelected = this.selectionModel.selected;

    if (this.multiple && value) {
      if (!Array.isArray(value)) {
        throw (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.getMcSelectNonArrayValueError)();
      }

      this.selectionModel.clear();
      value.forEach(currentValue => this.selectValue(currentValue));
      this.sortValues();
    } else {
      this.selectionModel.clear();
      const correspondingOption = this.selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
      // mode, because we don't know what option the user interacted with last.

      if (correspondingOption) {
        this.keyManager.setActiveItem(correspondingOption);
      }
    }

    this._changeDetectorRef.markForCheck();
  }

  getCorrespondOption(value) {
    return [...this.options.toArray(), ...this.previousSelectionModelSelected].find(option => {
      try {
        // Treat null as a special reset value.
        return option.value != null && this.compareWith(option.value, value);
      } catch (error) {
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
          // Notify developers of errors in their comparator.
          console.warn(error);
        }

        return false;
      }
    });
  }
  /**
   * Finds and selects and option based on its value.
   * @returns Option that has the corresponding value.
   */


  selectValue(value) {
    const correspondingOption = this.getCorrespondOption(value);

    if (correspondingOption) {
      this.selectionModel.select(correspondingOption);
    }

    return correspondingOption;
  }
  /** Sets up a key manager to listen to keyboard events on the overlay panel. */


  initKeyManager() {
    const typeAheadDebounce = 200;
    this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_18__.ActiveDescendantKeyManager(this.options).withTypeAhead(typeAheadDebounce, this.search ? -1 : 0).withVerticalOrientation().withHorizontalOrientation(this.isRtl() ? 'rtl' : 'ltr');
    this.keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy)).subscribe(() => {
      // Restore focus to the trigger before closing. Ensures that the focus
      // position won't be lost if the user got focus into the overlay.
      this.focus();
      this.close();
    });
    this.keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy)).subscribe(() => {
      if (this.panelOpen && this.panel) {
        this.scrollActiveOptionIntoView();
      } else if (!this.panelOpen && !this.multiple && this.keyManager.activeItem) {
        this.keyManager.activeItem.selectViaInteraction();
      }
    });
  }
  /** Drops current option subscriptions and IDs and resets from scratch. */


  resetOptions() {
    const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.options.changes, this.destroy);
    this.optionSelectionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(event => {
      this.onSelect(event.source, event.isUserInput);

      if (this.search && this.search.isSearchChanged) {
        Promise.resolve().then(() => this.keyManager.updateActiveItem(0));
        this.search.isSearchChanged = false;
      }

      if (event.isUserInput && !this.multiple && this.panelOpen) {
        this.close();
        this.focus();
      }
    }); // Listen to changes in the internal state of the options and react accordingly.
    // Handles cases like the labels of the selected options changing.

    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...this.options.map(option => option.stateChanges)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(changedOrDestroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    });
  }
  /** Invoked when an option is clicked. */


  onSelect(option, isUserInput) {
    const wasSelected = this.selectionModel.isSelected(option);

    if (option.value == null && !this._multiple) {
      option.deselect();
      this.selectionModel.clear();
      this.propagateChanges(option.value);
    } else {
      if (option.selected) {
        this.selectionModel.select(option);
      } else {
        this.selectionModel.deselect(option);
      }

      if (isUserInput) {
        this.keyManager.setActiveItem(option);
      }

      if (this.multiple) {
        this.sortValues();

        if (isUserInput) {
          // In case the user selected the option with their mouse, we
          // want to restore focus back to the trigger, in order to
          // prevent the select keyboard controls from clashing with
          // the ones from `mc-option`.
          // If search is avaliable then we focus search again.
          if (this.search) {
            this.search.focus();
          } else {
            this.focus();
          }
        }
      }
    }

    if (wasSelected !== this.selectionModel.isSelected(option)) {
      this.propagateChanges();
    }

    this.stateChanges.next();
  }
  /** Sorts the selected values in the selected based on their order in the panel. */


  sortValues() {
    if (this.multiple) {
      const options = this.options.toArray();
      this.selectionModel.sort((a, b) => {
        return this.sortComparator ? this.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */


  propagateChanges(fallbackValue) {
    let valueToEmit = null;

    if (this.multiple) {
      valueToEmit = this.selected.map(option => option.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }

    this._value = valueToEmit;
    this.valueChange.emit(valueToEmit);
    this.onChange(valueToEmit);
    this.selectionChange.emit(new McSelectChange(this, valueToEmit));

    this._changeDetectorRef.markForCheck();
  }
  /**
   * Highlights the selected item. If no option is selected, it will highlight
   * the first item instead.
   */


  highlightCorrectOption() {
    if (this.keyManager) {
      if (this.empty) {
        this.keyManager.setFirstItemActive();
      } else {
        this.keyManager.setActiveItem(this.selectionModel.selected[0]);
      }
    }
  }
  /** Scrolls the active option into view. */


  scrollActiveOptionIntoView() {
    if (!this.keyManager.activeItem) {
      return;
    }

    this.keyManager.activeItem.focus();
  }
  /**
   * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
   * This must be adjusted to align the selected option text over the trigger text when
   * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
   * can't be calculated until the panel has been attached, because we need to know the
   * content width in order to constrain the panel within the viewport.
   */


  setOverlayPosition() {
    this.resetOverlay();
    const overlayRect = this.getOverlayRect(); // Window width without scrollbar

    const windowWidth = this.getOverlayWidth();
    const isRtl = this.isRtl();
    /* tslint:disable-next-line:no-magic-numbers */

    const paddingWidth = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_PADDING_X * 2;
    let offsetX;
    let overlayMaxWidth;
    const selected = this.selectionModel.selected[0] || this.options.first;
    offsetX = selected && selected.group ? _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_INDENT_PADDING_X : _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_PADDING_X; // Invert the offset in LTR.

    if (!isRtl) {
      offsetX *= -1;
    } // Determine if select overflows on either side.


    const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
    const rightOverflow = overlayRect.right + offsetX - windowWidth + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

    if (leftOverflow > 0 || rightOverflow > 0) {
      [offsetX, overlayMaxWidth] = this.calculateOverlayXPosition(overlayRect, windowWidth, offsetX);
      this.overlayDir.overlayRef.overlayElement.style.maxWidth = `${overlayMaxWidth}px`;
    } // Set the offset directly in order to avoid having to go through change detection and
    // potentially triggering "changed after it was checked" errors. Round the value to avoid
    // blurry content in some browsers.


    this.overlayDir.offsetX = Math.round(offsetX);
    this.overlayDir.overlayRef.updatePosition();
  }

  calculateOverlayXPosition(overlayRect, windowWidth, basicOffsetX) {
    let offsetX = basicOffsetX;
    const leftIndent = this.triggerRect.left;
    const rightIndent = windowWidth - this.triggerRect.right; // Setting direction of dropdown expansion

    const isRightDirection = leftIndent <= rightIndent;
    let maxDropdownWidth;
    let overlayMaxWidth;
    const triggerWidth = this.triggerRect.width + _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_INDENT_PADDING_X;

    if (isRightDirection) {
      maxDropdownWidth = rightIndent + triggerWidth - _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_VIEWPORT_PADDING;
      overlayMaxWidth = overlayRect.width < maxDropdownWidth ? overlayRect.width : maxDropdownWidth;
    } else {
      let leftOffset;
      maxDropdownWidth = leftIndent + triggerWidth - _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_VIEWPORT_PADDING;

      if (overlayRect.width < maxDropdownWidth) {
        overlayMaxWidth = overlayRect.width;
        leftOffset = this.triggerRect.right - overlayMaxWidth;
      } else {
        overlayMaxWidth = maxDropdownWidth;
        leftOffset = this.triggerRect.right - (overlayMaxWidth - _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.SELECT_PANEL_INDENT_PADDING_X);
      }

      offsetX -= this.triggerRect.left - leftOffset;
    }

    return [offsetX, overlayMaxWidth];
  }

  resetOverlay() {
    this.overlayDir.offsetX = 0;
    this.overlayDir.overlayRef.overlayElement.style.maxWidth = 'unset';
    this.overlayDir.overlayRef.updatePosition();
  }

  getOverlayRect() {
    return this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
  }

  getOverlayWidth() {
    return this.scrollStrategy._overlayRef.hostElement.clientWidth;
  }

}
/** @nocollapse */


McSelect.ɵfac = function McSelect_Factory(t) {
  return new (t || McSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.NG_VALIDATORS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormField, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_VALIDATION, 8));
};
/** @nocollapse */


McSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McSelect,
  selectors: [["mc-select"]],
  contentQueries: function McSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McSelectTrigger, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McSelectSearch, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOption, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOptgroup, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cleaner = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  viewQuery: function McSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_22__.McTag, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionsContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tags = _t);
    }
  },
  hostAttrs: [1, "mc-select"],
  hostVars: 7,
  hostBindings: function McSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McSelect_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("focus", function McSelect_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function McSelect_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("resize", function McSelect_resize_HostBindingHandler() {
        return ctx.calculateHiddenItems();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-disabled", ctx.disabled)("mc-invalid", ctx.errorState);
    }
  },
  inputs: {
    disabled: "disabled",
    tabIndex: "tabIndex",
    hiddenItemsText: "hiddenItemsText",
    panelClass: "panelClass",
    backdropClass: "backdropClass",
    errorStateMatcher: "errorStateMatcher",
    sortComparator: "sortComparator",
    hasBackdrop: "hasBackdrop",
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    compareWith: "compareWith",
    value: "value",
    id: "id",
    hiddenItemsTextFormatter: "hiddenItemsTextFormatter"
  },
  outputs: {
    openedChange: "openedChange",
    openedStream: "opened",
    closedStream: "closed",
    selectionChange: "selectionChange",
    valueChange: "valueChange"
  },
  exportAs: ["mcSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormFieldControl,
    useExisting: McSelect
  }, {
    provide: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_OPTION_PARENT_COMPONENT,
    useExisting: McSelect
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c5,
  decls: 10,
  vars: 14,
  consts: [["cdk-overlay-origin", "", 1, "mc-select__trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mc-select__matcher", 3, "ngSwitch"], ["class", "mc-select__placeholder", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchCase"], ["class", "mc-select__cleaner", 3, "click", 4, "ngIf"], [1, "mc-select__arrow-wrapper"], ["mc-icon", "mc-angle-down-L_16", 1, "mc-select__arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mc-select__placeholder"], [3, "ngSwitch"], ["class", "mc-select__match-container", 3, "ngSwitch", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mc-select__match-container", 3, "ngSwitch"], ["class", "mc-select__matcher-text", 4, "ngSwitchCase"], ["class", "mc-select__match-list", 4, "ngSwitchCase"], [1, "mc-select__match-hidden-text"], [1, "mc-select__matcher-text"], [1, "mc-select__match-list"], [3, "disabled", "selectable", "mc-error", 4, "ngFor", "ngForOf"], [3, "disabled", "selectable"], ["mc-icon", "mc-close-S_16", 3, "click", 4, "ngIf"], ["mc-icon", "mc-close-S_16", 3, "click"], [1, "mc-select__cleaner", 3, "click"], [3, "ngClass", "keydown"], ["panel", ""], ["class", "mc-select__search-container", 4, "ngIf"], [1, "mc-select__content"], ["optionsContainer", ""], ["class", "mc-select__no-options-message", 4, "ngIf"], [1, "mc-select__search-container"], [1, "mc-select__no-options-message"]],
  template: function McSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McSelect_Template_div_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, McSelect_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, McSelect_span_5_Template, 3, 2, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, McSelect_div_6_Template, 2, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, McSelect_ng_template_9_Template, 7, 11, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function McSelect_Template_ng_template_backdropClick_9_listener() {
        return ctx.close();
      })("attach", function McSelect_Template_ng_template_attach_9_listener() {
        return ctx.onAttached();
      })("detach", function McSelect_Template_ng_template_detach_9_listener() {
        return ctx.close();
      });
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-select__trigger_multiple", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.empty);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canShowCleaner);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayBackdropClass", ctx.backdropClass)("cdkConnectedOverlayScrollStrategy", ctx.scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.triggerRect == null ? null : ctx.triggerRect.width)("cdkConnectedOverlayOffsetY", ctx.offsetY);
    }
  },
  directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkOverlayOrigin, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_24__.McIcon, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_24__.McIconCSSStyler, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_22__.McTag, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass],
  styles: [".mc-option{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;max-width:100%;height:32px;height:var(--mc-option-size-height, 32px);border:2px solid transparent;border:var(--mc-option-size-border-width, 2px) solid transparent;cursor:pointer;outline:none;padding-left:16px;padding-left:var(--mc-option-size-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mc-option-size-horizontal-padding, 16px);-webkit-tap-highlight-color:transparent}.mc-option.mc-disabled{cursor:default}.mc-option .mc-pseudo-checkbox{margin-right:8px}.mc-option .mc-option-overlay{position:absolute;top:calc(-1 * 2px);top:calc(-1 * var(--mc-option-size-border-width, 2px));left:calc(-1 * 2px);left:calc(-1 * var(--mc-option-size-border-width, 2px));right:calc(-1 * 2px);right:calc(-1 * var(--mc-option-size-border-width, 2px));bottom:calc(-1 * 2px);bottom:calc(-1 * var(--mc-option-size-border-width, 2px));pointer-events:none;border-radius:inherit}.mc-option-text{display:inline-block;flex-grow:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mc-select{box-sizing:border-box;display:inline-block;width:100%;outline:none}.mc-select .mc-select__trigger{display:flex;box-sizing:border-box;position:relative;height:30px;height:var(--mc-select-size-height, 30px);cursor:pointer;padding-left:calc(16px - 1px);padding-left:calc(var(--mc-select-size-left-padding, 16px) - var(--mc-form-field-size-border-width, 1px));padding-right:calc(8px - 1px);padding-right:calc(var(--mc-select-size-right-padding, 8px) - var(--mc-form-field-size-border-width, 1px))}.mc-select .mc-select__trigger.mc-select__trigger_multiple{padding-left:calc(8px - 1px);padding-left:calc(var(--mc-select-size-left-padding-multiple, 8px) - var(--mc-form-field-size-border-width, 1px))}.mc-select .mc-select__trigger.mc-select__trigger_multiple .mc-tag.mc-disabled .mc-tag__text{margin-right:7px}.mc-select.mc-disabled .mc-select__trigger{-webkit-user-select:none;user-select:none;cursor:default}.mc-select__no-options-message{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;max-width:100%;height:32px;height:var(--mc-option-size-height, 32px);cursor:default;outline:none;padding-left:16px;padding-left:var(--mc-option-size-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mc-option-size-horizontal-padding, 16px)}.mc-select__matcher{display:flex;align-items:center;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mc-select__matcher>span{width:100%}.mc-select__match-list{display:flex;flex-wrap:wrap;overflow:hidden;max-height:calc(30px - 1px);max-height:calc(var(--mc-select-size-height, 30px) - var(--mc-select-panel-size-border-width, 1px))}.mc-select__match-list .mc-tag{margin-right:4px}.mc-select__match-container{display:flex;flex-direction:row;justify-content:space-between;width:100%}.mc-select__match-container .mc-select__match-hidden-text{flex:0 0 70px;align-self:center;padding:0 8px;text-align:right}.mc-select__arrow-wrapper{align-self:center}.mc-form-field-appearance-fill .mc-select__arrow-wrapper,.mc-form-field-appearance-standard .mc-select__arrow-wrapper{transform:translateY(-50%)}.mc-form-field-appearance-outline .mc-select__arrow-wrapper{transform:translateY(-25%)}.mc-select__panel{min-width:100%;max-width:640px;max-width:var(--mc-select-panel-size-max-width, 640px);overflow:hidden;border-width:1px;border-width:var(--mc-select-panel-size-border-width, 1px);border-style:solid;border-bottom-left-radius:3px;border-bottom-left-radius:var(--mc-select-panel-size-border-radius, 3px);border-bottom-right-radius:3px;border-bottom-right-radius:var(--mc-select-panel-size-border-radius, 3px)}.mc-select__panel .mc-optgroup-label,.mc-select__panel .mc-option{font-size:inherit;line-height:32px;line-height:var(--mc-option-size-height, 32px);height:32px;height:var(--mc-option-size-height, 32px)}.mc-select__content{max-height:232px;max-height:var(--mc-select-panel-size-max-height, 232px);padding:4px 0;padding:var(--mc-select-panel-size-vertical-padding, 4px) 0;overflow:auto}.mc-select__content .cdk-virtual-scroll-viewport{min-height:232px-8px;min-height:var(--mc-select-panel-size-max-height, 232px)-8px;max-height:232px-8px;max-height:var(--mc-select-panel-size-max-height, 232px)-8px}.mc-form-field-type-select:not(.mc-disabled) .mc-form-field-flex{cursor:pointer}.mc-select__search-container{border-bottom-width:1px;border-bottom-style:solid}\n"],
  encapsulation: 2,
  data: {
    animation: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mcSelectAnimations.transformPanel, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mcSelectAnimations.fadeInContent]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-select',
      exportAs: 'mcSelect',
      templateUrl: 'select.html',
      styleUrls: ['./select.scss'],
      inputs: ['disabled', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.disabled]': 'disabled || null',
        class: 'mc-select',
        '[class.mc-disabled]': 'disabled',
        '[class.mc-invalid]': 'errorState',
        '(keydown)': 'handleKeydown($event)',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()',
        '(window:resize)': 'calculateHiddenItems()'
      },
      animations: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mcSelectAnimations.transformPanel, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.mcSelectAnimations.fadeInContent],
      providers: [{
        provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormFieldControl,
        useExisting: McSelect
      }, {
        provide: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_OPTION_PARENT_COMPONENT,
        useExisting: McSelect
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.ErrorStateMatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__.NG_VALIDATORS]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormField,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.NgModel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormControlName,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_VALIDATION]
      }]
    }];
  }, {
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['trigger', {
        static: false
      }]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel', {
        static: false
      }]
    }],
    optionsContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['optionsContainer', {
        static: false
      }]
    }],
    overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.CdkConnectedOverlay, {
        static: false
      }]
    }],
    tags: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_22__.McTag]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McSelectTrigger, {
        static: false
      }]
    }],
    cleaner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['mcSelectCleaner', {
        static: true
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOptgroup]
    }],
    search: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McSelectSearch, {
        static: false
      }]
    }],
    hiddenItemsText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    backdropClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['opened']
    }],
    closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    hasBackdrop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hiddenItemsTextFormatter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class McSelectModule {}
/** @nocollapse */


McSelectModule.ɵfac = function McSelectModule_Factory(t) {
  return new (t || McSelectModule)();
};
/** @nocollapse */


McSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McSelectModule
});
/** @nocollapse */

McSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_SELECT_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOptionModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_24__.McIconModule, _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_22__.McTagsModule], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormFieldModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_21__.OverlayModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOptionModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_24__.McIconModule, _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_22__.McTagsModule],
      exports: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__.McFormFieldModule, McSelect, McSelectSearch, McSelectSearchEmptyResult, McSelectTrigger, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.McOptionModule, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule],
      declarations: [McSelect, McSelectSearch, McSelectSearchEmptyResult, McSelectTrigger],
      providers: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__.MC_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 38204:
/*!********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-tabs.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_TABS_CONFIG": function() { return /* binding */ MC_TABS_CONFIG; },
/* harmony export */   "McAlignTabsCenterCssStyler": function() { return /* binding */ McAlignTabsCenterCssStyler; },
/* harmony export */   "McAlignTabsEndCssStyler": function() { return /* binding */ McAlignTabsEndCssStyler; },
/* harmony export */   "McOldTabsCssStyler": function() { return /* binding */ McOldTabsCssStyler; },
/* harmony export */   "McStretchTabsCssStyler": function() { return /* binding */ McStretchTabsCssStyler; },
/* harmony export */   "McTab": function() { return /* binding */ McTab; },
/* harmony export */   "McTabBody": function() { return /* binding */ McTabBody; },
/* harmony export */   "McTabBodyPortal": function() { return /* binding */ McTabBodyPortal; },
/* harmony export */   "McTabChangeEvent": function() { return /* binding */ McTabChangeEvent; },
/* harmony export */   "McTabContent": function() { return /* binding */ McTabContent; },
/* harmony export */   "McTabGroup": function() { return /* binding */ McTabGroup; },
/* harmony export */   "McTabGroupBase": function() { return /* binding */ McTabGroupBase; },
/* harmony export */   "McTabGroupMixinBase": function() { return /* binding */ McTabGroupMixinBase; },
/* harmony export */   "McTabHeader": function() { return /* binding */ McTabHeader; },
/* harmony export */   "McTabLabel": function() { return /* binding */ McTabLabel; },
/* harmony export */   "McTabLabelWrapper": function() { return /* binding */ McTabLabelWrapper; },
/* harmony export */   "McTabLink": function() { return /* binding */ McTabLink; },
/* harmony export */   "McTabNav": function() { return /* binding */ McTabNav; },
/* harmony export */   "McTabsModule": function() { return /* binding */ McTabsModule; },
/* harmony export */   "McVerticalTabsCssStyler": function() { return /* binding */ McVerticalTabsCssStyler; },
/* harmony export */   "mcTabsAnimations": function() { return /* binding */ mcTabsAnimations; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ 54360);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 94283);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 81134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 12702);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 75428);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/keycodes */ 90084);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);

























function McTabBody_ng_template_2_Template(rf, ctx) {}

const _c0 = function (a0) {
  return {
    animationDuration: a0
  };
};

const _c1 = function (a0, a1) {
  return {
    value: a0,
    params: a1
  };
};

function McTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
  }
}

const _c2 = ["*"];
const _c3 = ["labelContent"];
const _c4 = ["tabListContainer"];
const _c5 = ["tabList"];
const _c6 = ["nextPaginator"];
const _c7 = ["previousPaginator"];
const _c8 = ["tabBodyWrapper"];
const _c9 = ["tabHeader"];

function McTabGroup_div_2_ng_template_3_ng_template_0_Template(rf, ctx) {}

function McTabGroup_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, McTabGroup_div_2_ng_template_3_ng_template_0_Template, 0, 0, "ng-template", 11);
  }

  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}

function McTabGroup_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}

function McTabGroup_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McTabGroup_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const tab_r4 = restoredCtx.$implicit;
      const i_r5 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      return ctx_r12.handleClick(tab_r4, _r0, i_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, McTabGroup_div_2_ng_template_4_Template, 1, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tab-label_old", ctx_r1.oldTab)("mc-tab-label_horizontal", !ctx_r1.vertical && !ctx_r1.oldTab)("mc-tab-label_vertical", ctx_r1.vertical && !ctx_r1.oldTab)("mc-tab-label_empty", tab_r4.empty)("mc-active", ctx_r1.selectedIndex == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tab", tab_r4)("id", ctx_r1.getTabLabelId(i_r5))("disabled", tab_r4.disabled)("mcTooltip", tab_r4.tooltipTitle)("mcTooltipDisabled", !tab_r4.empty && !tab_r4.isOverflown)("mcTrigger", "hover, focus")("mcPlacement", tab_r4.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r1.getTabIndex(tab_r4, i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tab-label__template", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
  }
}

function McTabGroup_mc_tab_body_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tab-body", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCentered", function McTabGroup_mc_tab_body_5_Template_mc_tab_body_onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r16.removeTabBodyWrapperHeight();
    })("onCentering", function McTabGroup_mc_tab_body_5_Template_mc_tab_body_onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r18.setTabBodyWrapperHeight($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const tab_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tab-body__active", ctx_r3.selectedIndex == i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.getTabContentId(i_r15))("content", tab_r14.content)("position", tab_r14.position)("origin", tab_r14.origin)("animationDuration", ctx_r3.animationDuration);
  }
}

const _c10 = ["mc-tab-link", ""];
const _c11 = ["mc-tab-nav-bar", ""];
const mcTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('center, void, left-origin-center, right-origin-center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'none'
  })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('left', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('right', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => left, * => right, left => center, right => center', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => left-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(-100%, 0, 0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => right-origin-center', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'translate3d(100%, 0, 0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};
/**
 * Wrapper for the contents of a tab.
 * @docs-private
 */

class McTabBody {
  constructor(elementRef, dir, changeDetectorRef) {
    this.elementRef = elementRef;
    this.dir = dir;
    /** Event emitted when the tab begins to animate towards the center as the active tab. */

    this.onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */

    this.beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted before the centering of the tab begins. */

    this.afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab completes its animation towards the center. */

    this.onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true); // Note that the default value will always be overwritten by `McTabBody`, but we need one
    // anyway to prevent the animations module from throwing an error if the body is used on its own.

    /** Duration for the tab's animation. */

    this.animationDuration = '0ms';
    /** Subscription to the directionality change observable. */

    this.dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;

    if (this.dir && changeDetectorRef) {
      this.dirChangeSubscription = this.dir.change.subscribe(direction => {
        this.computePositionAnimationState(direction);
        changeDetectorRef.markForCheck();
      });
    }
  }
  /** The shifted index position of the tab body, where zero represents the active center tab. */


  set position(position) {
    this.positionIndex = position;
    this.computePositionAnimationState();
  }
  /**
   * After initialized, check if the content is centered and has an origin. If so, set the
   * special position states that transition the tab from the left or right before centering.
   */


  ngOnInit() {
    if (this.bodyPosition === 'center' && this.origin != null) {
      this.bodyPosition = this.computePositionFromOrigin();
    }
  }

  ngOnDestroy() {
    this.dirChangeSubscription.unsubscribe();
  }

  onTranslateTabStarted(e) {
    const isCentering = this.isCenterPosition(e.toState);
    this.beforeCentering.emit(isCentering);

    if (isCentering) {
      this.onCentering.emit(this.elementRef.nativeElement.clientHeight);
    }
  }

  onTranslateTabComplete(e) {
    // If the transition to the center is complete, emit an event.
    if (this.isCenterPosition(e.toState) && this.isCenterPosition(this.bodyPosition)) {
      this.onCentered.emit();
    }

    if (this.isCenterPosition(e.fromState) && !this.isCenterPosition(this.bodyPosition)) {
      this.afterLeavingCenter.emit();
    }
  }
  /** The text direction of the containing app. */


  getLayoutDirection() {
    return this.dir && this.dir.value === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Whether the provided position state is considered center, regardless of origin. */


  isCenterPosition(position) {
    return position === 'center' || position === 'left-origin-center' || position === 'right-origin-center';
  }
  /** Computes the position state that will be used for the tab-body animation trigger. */


  computePositionAnimationState(dir = this.getLayoutDirection()) {
    if (this.positionIndex < 0) {
      this.bodyPosition = dir === 'ltr' ? 'left' : 'right';
    } else if (this.positionIndex > 0) {
      this.bodyPosition = dir === 'ltr' ? 'right' : 'left';
    } else {
      this.bodyPosition = 'center';
    }
  }
  /**
   * Computes the position state based on the specified origin position. This is used if the
   * tab is becoming visible immediately after creation.
   */


  computePositionFromOrigin() {
    const dir = this.getLayoutDirection();

    if (dir === 'ltr' && this.origin <= 0 || dir === 'rtl' && this.origin > 0) {
      return 'left-origin-center';
    }

    return 'right-origin-center';
  }

}
/** @nocollapse */


McTabBody.ɵfac = function McTabBody_Factory(t) {
  return new (t || McTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
/** @nocollapse */


McTabBody.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTabBody,
  selectors: [["mc-tab-body"]],
  viewQuery: function McTabBody_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portalHost = _t.first);
    }
  },
  hostAttrs: [1, "mc-tab-body"],
  inputs: {
    position: "position",
    content: "content",
    origin: "origin",
    animationDuration: "animationDuration"
  },
  outputs: {
    onCentering: "onCentering",
    beforeCentering: "beforeCentering",
    afterLeavingCenter: "afterLeavingCenter",
    onCentered: "onCentered"
  },
  decls: 3,
  vars: 6,
  consts: [[1, "mc-tab-body__content"], ["content", ""], ["mcTabBodyHost", ""]],
  template: function McTabBody_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@translateTab.start", function McTabBody_Template_div_animation_translateTab_start_0_listener($event) {
        return ctx.onTranslateTabStarted($event);
      })("@translateTab.done", function McTabBody_Template_div_animation_translateTab_done_0_listener($event) {
        return ctx.onTranslateTabComplete($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx.bodyPosition, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.animationDuration)));
    }
  },
  directives: function () {
    return [McTabBodyPortal];
  },
  styles: [".mc-tab-body__content{height:100%;overflow:auto}.mc-tab-body__content .mc-tab-group_dynamic-height{overflow:hidden}\n"],
  encapsulation: 2,
  data: {
    animation: [mcTabsAnimations.translateTab]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabBody, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tab-body',
      templateUrl: 'tab-body.html',
      styleUrls: ['tab-body.scss'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [mcTabsAnimations.translateTab],
      host: {
        class: 'mc-tab-body'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    beforeCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    afterLeavingCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onCentered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    portalHost: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, {
        static: false
      }]
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['content']
    }],
    origin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * The portal host directive for the contents of the tab.
 * @docs-private
 */


class McTabBodyPortal extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet {
  constructor(componentFactoryResolver, viewContainerRef, host) {
    super(componentFactoryResolver, viewContainerRef);
    this.host = host;
    /** Subscription to events for when the tab body begins centering. */

    this.centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to events for when the tab body finishes leaving from center position. */

    this.leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
  }
  /** Set initial visibility or set up subscription for changing visibility. */


  ngOnInit() {
    super.ngOnInit();
    this.centeringSub = this.host.beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.host.isCenterPosition(this.host.bodyPosition))).subscribe(isCentering => {
      if (isCentering && !this.hasAttached()) {
        this.attach(this.host.content);
      }
    });
    this.leavingSub = this.host.afterLeavingCenter.subscribe(() => {
      this.detach();
    });
  }
  /** Clean up centering subscription. */


  ngOnDestroy() {
    super.ngOnDestroy();
    this.centeringSub.unsubscribe();
    this.leavingSub.unsubscribe();
  }

}
/** @nocollapse */


McTabBodyPortal.ɵfac = function McTabBodyPortal_Factory(t) {
  return new (t || McTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McTabBody)));
};
/** @nocollapse */


McTabBodyPortal.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTabBodyPortal,
  selectors: [["", "mcTabBodyHost", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabBodyPortal, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTabBodyHost]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: McTabBody,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McTabBody)]
      }]
    }];
  }, null);
})();
/** Decorates the `ng-template` tags and reads out the template from it. */


class McTabContent {
  constructor(template) {
    this.template = template;
  }

}
/** @nocollapse */


McTabContent.ɵfac = function McTabContent_Factory(t) {
  return new (t || McTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
/** @nocollapse */


McTabContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTabContent,
  selectors: [["", "mcTabContent", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTabContent]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
/* tslint:disable:naming-convention */

/** Config used to bind passive event listeners */


const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */

const EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */

const HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */

const HEADER_SCROLL_INTERVAL = 100;
const VIEWPORT_THROTTLE_TIME = 150;
const SCROLL_DISTANCE = 0.8;
/**
 * Base class for a tab header that supported pagination.
 * @docs-private
 */

class McPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, ngZone, platform, dir, animationMode) {
    this.elementRef = elementRef;
    this.changeDetectorRef = changeDetectorRef;
    this.viewportRuler = viewportRuler;
    this.ngZone = ngZone;
    this.platform = platform;
    this.dir = dir;
    this.animationMode = animationMode;
    this._selectedIndex = 0;
    /** The distance in pixels that the tab labels should be translated to the left. */

    this._scrollDistance = 0;
    /** Event emitted when the option is selected. */

    this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when a label is focused. */

    this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Whether the controls for pagination should be displayed */

    this.showPaginationControls = false;
    /** Whether the tab list can be scrolled more towards the end of the tab label list. */

    this.disableScrollAfter = true;
    /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

    this.disableScrollBefore = true;
    /**
     * Whether pagination should be disabled. This can be used to avoid unnecessary
     * layout recalculations if it's known that pagination won't be required.
     */

    this.disablePagination = false;
    /** Emits when the component is destroyed. */

    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.vertical = false;
    /** Stream that will stop the automated scrolling. */

    this.stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** Whether the header should scroll to the selected index after the view has been checked. */

    this.selectedIndexChanged = false; // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

    ngZone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(() => this.stopInterval());
    });
  }
  /** The index of the active tab. */


  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(value) {
    var _a;

    const coercedValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceNumberProperty)(value);
    this.selectedIndexChanged = this._selectedIndex !== coercedValue;
    this._selectedIndex = coercedValue;
    (_a = this.keyManager) === null || _a === void 0 ? void 0 : _a.updateActiveItem(coercedValue);
  }
  /** Tracks which element has focus; used for keyboard navigation */


  get focusIndex() {
    return this.keyManager ? this.keyManager.activeItemIndex : 0;
  }
  /** When the focus index is set, we must manually send focus to the correct label */


  set focusIndex(value) {
    if (!this.isValidIndex(value) || this.focusIndex === value || !this.keyManager) {
      return;
    }

    this.keyManager.setActiveItem(value);
  }
  /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */


  get scrollDistance() {
    return this._scrollDistance;
  }

  set scrollDistance(v) {
    this._scrollDistance = Math.max(0, Math.min(this.getMaxScrollDistance(), v)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.

    this.scrollDistanceChanged = true;
    this.checkScrollingControls();
  }
  /** Called when the user has selected an item via the keyboard. */


  ngAfterViewInit() {
    // We need to handle these events manually, because we want to bind passive event listeners.
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(() => this.handlePaginatorPress('before'));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(() => this.handlePaginatorPress('after'));
  }

  ngAfterContentInit() {
    const dirChange = this.dir ? this.dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)('ltr');
    const resize = this.viewportRuler.change(VIEWPORT_THROTTLE_TIME);

    const realign = () => {
      this.updatePagination();
    };

    this.keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.FocusKeyManager(this.items).withHorizontalOrientation(this.getLayoutDirection());
    this.keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
    // This helps in cases where the user lands directly on a page with paginated tabs.

    typeof requestAnimationFrame !== undefined ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
    // the key manager if the direction has changed.

    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(dirChange, resize, this.items.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(() => {
      // We need to defer this to give the browser some time to recalculate
      // the element dimensions. The call has to be wrapped in `NgZone.run`,
      // because the viewport change handler runs outside of Angular.
      this.ngZone.run(() => Promise.resolve().then(realign));
      this.keyManager.withHorizontalOrientation(this.getLayoutDirection());
    }); // If there is a change in the focus key manager we need to emit the `indexFocused`
    // event in order to provide a public event that notifies about focus changes. Also we realign
    // the tabs container by scrolling the new focused tab into the visible section.

    this.keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(newFocusIndex => {
      this.indexFocused.emit(newFocusIndex);
      this.setTabFocus(newFocusIndex);
    });
  }

  ngAfterContentChecked() {
    // If the number of tab labels have changed, check if scrolling should be enabled
    if (this.tabLabelCount !== this.items.length) {
      this.updatePagination();
      this.tabLabelCount = this.items.length;
      this.changeDetectorRef.markForCheck();
    } // If the selected index has changed, scroll to the label and check if the scrolling controls
    // should be disabled.


    if (this.selectedIndexChanged) {
      this.scrollToLabel(this._selectedIndex);
      this.checkScrollingControls();
      this.selectedIndexChanged = false;
      this.changeDetectorRef.markForCheck();
    } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
    // then translate the header to reflect this.


    if (this.scrollDistanceChanged) {
      this.updateTabScrollPosition();
      this.scrollDistanceChanged = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    this.stopScrolling.complete();
  }

  handleKeydown(event) {
    // We don't handle any key bindings with a modifier key.
    if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.hasModifierKey)(event)) {
      return;
    } // tslint:disable-next-line: deprecation


    const key = event.keyCode;

    if (key === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.HOME) {
      this.keyManager.setFirstItemActive();
    } else if (key === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.END) {
      this.keyManager.setLastItemActive();
    } else if (key === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.UP_ARROW && this.vertical) {
      this.keyManager.setPreviousItemActive();
    } else if (key === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.DOWN_ARROW && this.vertical) {
      this.keyManager.setNextItemActive();
    } else if (key === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.RIGHT_ARROW && !this.vertical) {
      this.keyManager.setNextItemActive();
    } else if (key === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.LEFT_ARROW && !this.vertical) {
      this.keyManager.setPreviousItemActive();
    } else if ([_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.ENTER, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.SPACE].includes(key)) {
      this.selectFocusedIndex.emit(this.focusIndex);
    }

    if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.HOME, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.END, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.UP_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.DOWN_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.RIGHT_ARROW, _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_15__.LEFT_ARROW, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.SPACE, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_14__.ENTER].includes(key)) {
      event.preventDefault();
    }
  }
  /**
   * Callback for when the MutationObserver detects that the content has changed.
   */


  onContentChanges() {
    const textContent = this.elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
    // will fire even if the text content didn't change which is inefficient and is prone
    // to infinite loops if a poorly constructed expression is passed in (see #14249).

    if (textContent !== this.currentTextContent) {
      this.currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
      // means that we need to bring the callback back in ourselves.

      this.ngZone.run(() => {
        this.updatePagination();
        this.changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Updates the view whether pagination should be enabled or not.
   *
   * WARNING: Calling this method can be very costly in terms of performance. It should be called
   * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
   * page.
   */


  updatePagination() {
    this.checkPaginationEnabled();
    this.checkScrollingControls();
    this.updateTabScrollPosition();
  }
  /**
   * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
   * providing a valid index and return true.
   */


  isValidIndex(index) {
    if (!this.items) {
      return true;
    }

    const tab = this.items ? this.items.toArray()[index] : null;
    return !!tab && !tab.disabled;
  }
  /**
   * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
   * scrolling is enabled.
   */


  setTabFocus(tabIndex) {
    var _a;

    if (this.showPaginationControls) {
      this.scrollToLabel(tabIndex);
    }

    if ((_a = this.items) === null || _a === void 0 ? void 0 : _a.length) {
      this.items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
      // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
      // should be the full width minus the offset width.

      const containerEl = this.tabListContainer.nativeElement;
      const dir = this.getLayoutDirection();

      if (dir === 'ltr') {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  /** The layout direction of the containing app. */


  getLayoutDirection() {
    var _a;

    return ((_a = this.dir) === null || _a === void 0 ? void 0 : _a.value) === 'rtl' ? 'rtl' : 'ltr';
  }
  /** Performs the CSS transformation on the tab list that will cause the list to scroll. */


  updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }

    const scrollDistance = this.scrollDistance;
    const translateX = this.getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
    // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
    // and ripples will exceed the boundaries of the visible tab bar.
    // See: https://github.com/angular/components/issues/10276
    // We round the `transform` here, because transforms with sub-pixel precision cause some
    // browsers to blur the content of the element.

    this.tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`; // Setting the `transform` on IE will change the scroll offset of the parent, causing the
    // position to be thrown off in some cases. We have to reset it ourselves to ensure that
    // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
    // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).

    if (this.platform.TRIDENT || this.platform.EDGE) {
      this.tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  /**
   * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively). The distance to scroll is computed to be a third of the
   * length of the tab list view window.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */


  scrollHeader(direction) {
    const viewLength = this.tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

    const scrollAmount = (direction === 'before' ? -1 : 1) * viewLength * SCROLL_DISTANCE;
    return this.scrollTo(this.scrollDistance + scrollAmount);
  }
  /** Handles click events on the pagination arrows. */


  handlePaginatorClick(direction) {
    this.stopInterval();
    this.scrollHeader(direction);
  }
  /**
   * Moves the tab list such that the desired tab label (marked by index) is moved into view.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */


  scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }

    const selectedLabel = this.items ? this.items.toArray()[labelIndex] : null;

    if (!selectedLabel) {
      return;
    } // The view length is the visible width of the tab labels.


    const viewLength = this.tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos;
    let labelAfterPos;

    if (this.getLayoutDirection() === 'ltr') {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this.tabList.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }

    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;

    if (labelBeforePos < beforeVisiblePos) {
      // Scroll header to move label to the before direction
      this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
    } else if (labelAfterPos > afterVisiblePos) {
      // Scroll header to move label to the after direction
      this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
    }
  }
  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * tab list is wider than the size of the header container, then the pagination controls should
   * be shown.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */


  checkPaginationEnabled() {
    if (this.disablePagination || this.vertical) {
      this.showPaginationControls = false;
    } else {
      const isEnabled = this.tabList.nativeElement.scrollWidth > this.elementRef.nativeElement.offsetWidth;

      if (!isEnabled) {
        this.scrollDistance = 0;
      }

      if (isEnabled !== this.showPaginationControls) {
        this.changeDetectorRef.markForCheck();
      }

      this.showPaginationControls = isEnabled;
    }
  }
  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */


  checkScrollingControls() {
    if (this.disablePagination) {
      this.disableScrollAfter = this.disableScrollBefore = true;
    } else {
      // Check if the pagination arrows should be activated.
      this.disableScrollBefore = this.scrollDistance === 0;
      this.disableScrollAfter = this.scrollDistance === this.getMaxScrollDistance();
      this.changeDetectorRef.markForCheck();
    }
  }
  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the tab list container and tab header container.
   *
   * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
   * should be called sparingly.
   */


  getMaxScrollDistance() {
    const lengthOfTabList = this.tabList.nativeElement.scrollWidth;
    const viewLength = this.tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  /** Stops the currently-running paginator interval.  */


  stopInterval() {
    this.stopScrolling.next();
  }
  /**
   * Handles the user pressing down on one of the paginators.
   * Starts scrolling the header after a certain amount of time.
   * @param direction In which direction the paginator should be scrolled.
   */


  handlePaginatorPress(direction, mouseEvent) {
    // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
    // null check the `button`, but we do it so we don't break tests that use fake events.
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    } // Avoid overlapping timers.


    this.stopInterval(); // Start a timer after the delay and keep firing based on the interval.

    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(this.stopScrolling, this.destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this.scrollHeader(direction); // Stop the timer if we've reached the start or the end.

      if (distance === 0 || distance >= maxScrollDistance) {
        this.stopInterval();
      }
    });
  }
  /**
   * Scrolls the header to a given position.
   * @param position Position to which to scroll.
   * @returns Information on the current scroll distance and the maximum.
   */


  scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }

    const maxScrollDistance = this.getMaxScrollDistance();
    this.scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.

    this.scrollDistanceChanged = true;
    this.checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this.scrollDistance
    };
  }

}
/** @nocollapse */


McPaginatedTabHeader.ɵfac = function McPaginatedTabHeader_Factory(t) {
  return new (t || McPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.ANIMATION_MODULE_TYPE, 8));
};
/** @nocollapse */


McPaginatedTabHeader.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McPaginatedTabHeader,
  inputs: {
    disablePagination: "disablePagination"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPaginatedTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ViewportRuler
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    disablePagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const MC_TAB_LABEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('McTabLabel');
/** Used to flag tab labels for use with the portal directive */

class McTabLabel extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortal {}
/** @nocollapse */


McTabLabel.ɵfac = /* @__PURE__ */function () {
  let ɵMcTabLabel_BaseFactory;
  return function McTabLabel_Factory(t) {
    return (ɵMcTabLabel_BaseFactory || (ɵMcTabLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](McTabLabel)))(t || McTabLabel);
  };
}();
/** @nocollapse */


McTabLabel.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTabLabel,
  selectors: [["", "mc-tab-label", ""], ["", "mcTabLabel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MC_TAB_LABEL,
    useExisting: McTabLabel
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mc-tab-label], [mcTabLabel]',
      providers: [{
        provide: MC_TAB_LABEL,
        useExisting: McTabLabel
      }]
    }]
  }], null, null);
})();

class McTabBase {} // tslint:disable-next-line:naming-convention


const McTabMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.mixinDisabled)(McTabBase);

class McTab extends McTabMixinBase {
  constructor(viewContainerRef) {
    super();
    this.viewContainerRef = viewContainerRef;
    this._tooltipTitle = '';
    /** Plain text label for the tab, used when there is no template label. */

    this.textLabel = '';
    this.empty = false;
    /** Emits whenever the internal state of the tab changes. */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /**
     * The relatively indexed position where 0 represents the center, negative is left, and positive
     * represents the right.
     */

    this.position = null;
    /**
     * The initial relatively index origin of the tab if it was created and selected after there
     * was already a selected tab. Provides context of what position the tab should originate from.
     */

    this.origin = null;
    /**
     * Whether the tab is currently active.
     */

    this.isActive = false;
    this._overflowTooltipTitle = '';
    /** Portal that will be the hosted content of the tab */

    this.contentPortal = null;
  }
  /** @docs-private */


  get content() {
    return this.contentPortal;
  }

  get templateLabel() {
    return this._templateLabel;
  }

  set templateLabel(value) {
    this.setTemplateLabelInput(value);
  }

  get tooltipTitle() {
    return this.overflowTooltipTitle + this._tooltipTitle;
  }

  set tooltipTitle(value) {
    this._tooltipTitle = value;
  }

  get isOverflown() {
    return !!this._overflowTooltipTitle;
  }

  get overflowTooltipTitle() {
    if (this.isOverflown) {
      return `${this._overflowTooltipTitle}\n`;
    }

    return '';
  }

  set overflowTooltipTitle(value) {
    this._overflowTooltipTitle = value;
  }

  ngOnChanges(changes) {
    if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
      this.stateChanges.next();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  ngOnInit() {
    this.contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.TemplatePortal(this.explicitContent || this.implicitContent, this.viewContainerRef);
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */


  setTemplateLabelInput(value) {
    // Only update the templateLabel via query if there is actually
    // a McTabLabel found. This works around an issue where a user may have
    // manually set `templateLabel` during creation mode, which would then get clobbered
    // by `undefined` when this query resolves.
    if (value) {
      this._templateLabel = value;
    }
  }

}
/** @nocollapse */


McTab.ɵfac = function McTab_Factory(t) {
  return new (t || McTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
/** @nocollapse */


McTab.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTab,
  selectors: [["mc-tab"]],
  contentQueries: function McTab_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MC_TAB_LABEL, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTabContent, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.explicitContent = _t.first);
    }
  },
  viewQuery: function McTab_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.implicitContent = _t.first);
    }
  },
  inputs: {
    disabled: "disabled",
    tooltipTitle: "tooltipTitle",
    tooltipPlacement: "tooltipPlacement",
    textLabel: ["label", "textLabel"],
    empty: "empty",
    tabId: "tabId"
  },
  exportAs: ["mcTab"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function McTab_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, McTab_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTab, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tab',
      exportAs: 'mcTab',
      // Create a template for the content of the <mc-tab> so that we can grab a reference to this
      // TemplateRef and use it in a Portal to render the tab content in the appropriate place in the
      // tab-group.
      template: '<ng-template><ng-content></ng-content></ng-template>',
      inputs: ['disabled'],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    templateLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MC_TAB_LABEL]
    }],
    explicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McTabContent, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    implicitContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    tooltipTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltipPlacement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    textLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['label']
    }],
    empty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['tabId']
    }]
  });
})(); // Boilerplate for applying mixins to McTabLabelWrapper.

/** @docs-private */


class McTabLabelWrapperBase {} // tslint:disable-next-line:naming-convention


const McTabLabelWrapperMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.mixinDisabled)(McTabLabelWrapperBase);
/**
 * Used in the `mc-tab-group` view to display tab labels.
 * @docs-private
 */

class McTabLabelWrapper extends McTabLabelWrapperMixinBase {
  constructor(elementRef, renderer) {
    super();
    this.elementRef = elementRef;
    this.renderer = renderer;
  }

  ngAfterViewInit() {
    this.addClassModifierForIcons(Array.from(this.elementRef.nativeElement.querySelectorAll('.mc-icon')));
  }
  /** Sets focus on the wrapper element */


  focus() {
    this.elementRef.nativeElement.focus();
  }

  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }

  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }

  checkOverflow() {
    this.tab.overflowTooltipTitle = this.isOverflown() ? this.getInnerText() : '';
  }

  isOverflown() {
    return this.labelContent.nativeElement.scrollWidth > this.labelContent.nativeElement.clientWidth;
  }

  getInnerText() {
    return this.labelContent.nativeElement.innerText;
  }

  addClassModifierForIcons(icons) {
    const twoIcons = 2;
    const [firstIconElement, secondIconElement] = icons;

    if (icons.length === 1) {
      const COMMENT_NODE = 8;

      if (firstIconElement.nextSibling && firstIconElement.nextSibling.nodeType !== COMMENT_NODE) {
        this.renderer.addClass(firstIconElement, 'mc-icon_left');
      }

      if (firstIconElement.previousSibling && firstIconElement.previousSibling.nodeType !== COMMENT_NODE) {
        this.renderer.addClass(firstIconElement, 'mc-icon_right');
      }
    } else if (icons.length === twoIcons) {
      this.renderer.addClass(firstIconElement, 'mc-icon_left');
      this.renderer.addClass(secondIconElement, 'mc-icon_right');
    }
  }

}
/** @nocollapse */


McTabLabelWrapper.ɵfac = function McTabLabelWrapper_Factory(t) {
  return new (t || McTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
/** @nocollapse */


McTabLabelWrapper.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTabLabelWrapper,
  selectors: [["", "mcTabLabelWrapper", ""]],
  contentQueries: function McTabLabelWrapper_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelContent = _t.first);
    }
  },
  hostVars: 1,
  hostBindings: function McTabLabelWrapper_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);
    }
  },
  inputs: {
    disabled: "disabled",
    tab: "tab"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabLabelWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTabLabelWrapper]',
      inputs: ['disabled'],
      host: {
        '[attr.disabled]': 'disabled || null'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    labelContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['labelContent']
    }],
    tab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * The header of the tab group which displays a list of all the tabs in the tab group.
 * When the tabs list's width exceeds the width of the header container,
 * then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 * @docs-private
 */


class McTabHeader extends McPaginatedTabHeader {
  constructor(elementRef, changeDetectorRef, viewportRuler, ngZone, platform, dir, animationMode) {
    super(elementRef, changeDetectorRef, viewportRuler, ngZone, platform, dir, animationMode);
    this.elementRef = elementRef;
    this.changeDetectorRef = changeDetectorRef;
    /** The index of the active tab. */

    this.vertical = false;
  }

  itemSelected(event) {
    event.preventDefault();
  }

}
/** @nocollapse */


McTabHeader.ɵfac = function McTabHeader_Factory(t) {
  return new (t || McTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.ANIMATION_MODULE_TYPE, 8));
};
/** @nocollapse */


McTabHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTabHeader,
  selectors: [["mc-tab-header"]],
  contentQueries: function McTabHeader_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTabLabelWrapper, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
    }
  },
  viewQuery: function McTabHeader_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabListContainer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nextPaginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previousPaginator = _t.first);
    }
  },
  hostAttrs: [1, "mc-tab-header"],
  hostVars: 6,
  hostBindings: function McTabHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tab-header_vertical", ctx.vertical)("mc-tab-header__pagination-controls_enabled", ctx.showPaginationControls)("mc-tab-header_rtl", ctx.getLayoutDirection() == "rtl");
    }
  },
  inputs: {
    selectedIndex: "selectedIndex",
    vertical: "vertical"
  },
  outputs: {
    selectFocusedIndex: "selectFocusedIndex",
    indexFocused: "indexFocused"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 12,
  vars: 4,
  consts: [[1, "mc-tab-header__pagination", "mc-tab-header__pagination_before", 3, "click", "mousedown", "touchend"], ["previousPaginator", ""], ["mc-icon", "mc-angle-left-M_16"], [1, "mc-tab-header__content", 3, "keydown"], ["tabListContainer", ""], [1, "mc-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mc-tab-list__content"], [1, "mc-tab-header__pagination", "mc-tab-header__pagination_after", 3, "mousedown", "click", "touchend"], ["nextPaginator", ""], ["mc-icon", "mc-angle-right-M_16"]],
  template: function McTabHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McTabHeader_Template_div_click_0_listener() {
        return ctx.handlePaginatorClick("before");
      })("mousedown", function McTabHeader_Template_div_mousedown_0_listener($event) {
        return ctx.handlePaginatorPress("before", $event);
      })("touchend", function McTabHeader_Template_div_touchend_0_listener() {
        return ctx.stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McTabHeader_Template_div_keydown_3_listener($event) {
        return ctx.handleKeydown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function McTabHeader_Template_div_cdkObserveContent_5_listener() {
        return ctx.onContentChanges();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McTabHeader_Template_div_mousedown_9_listener($event) {
        return ctx.handlePaginatorPress("after", $event);
      })("click", function McTabHeader_Template_div_click_9_listener() {
        return ctx.handlePaginatorClick("after");
      })("touchend", function McTabHeader_Template_div_touchend_9_listener() {
        return ctx.stopInterval();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-disabled", ctx.disableScrollBefore);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-disabled", ctx.disableScrollAfter);
    }
  },
  directives: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_20__.McIcon, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_20__.McIconCSSStyler],
  styles: [".mc-tab-label.cdk-keyboard-focused:after{display:block;content:\"\";position:absolute;top:0;right:calc(-1 * 1px);right:calc(-1 * var(--mc-tabs-size-border-width, 1px));bottom:calc(-1 * 1px);bottom:calc(-1 * var(--mc-tabs-size-border-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mc-tabs-size-border-width, 1px))}.mc-tab-label_horizontal.cdk-keyboard-focused:after,.mc-tab-label_old.cdk-keyboard-focused:after{border-width:calc(1px * 2);border-width:calc(var(--mc-tabs-size-border-width, 1px) * 2);border-style:solid;border-top-left-radius:3px;border-top-left-radius:var(--mc-tabs-size-border-radius, 3px);border-top-right-radius:3px;border-top-right-radius:var(--mc-tabs-size-border-radius, 3px);border-bottom-color:transparent}.mc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mc-tab-list__content{display:flex}.mc-tab-group_align-labels-center .mc-tab-list__content{justify-content:center}.mc-tab-group_align-labels-end .mc-tab-list__content{justify-content:flex-end}.mc-tab-header_vertical .mc-tab-list__content{flex-direction:column}.mc-tab-header__pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none;padding-left:12px;padding-right:12px;border-bottom-style:solid;border-bottom-width:1px;border-bottom-width:var(--mc-tabs-size-border-width, 1px)}.mc-tab-header__pagination.mc-tab-header__pagination_before{border-right-style:solid;border-right-width:1px;border-right-width:var(--mc-tabs-size-border-width, 1px)}.mc-tab-header__pagination.mc-tab-header__pagination_after{border-left-style:solid;border-left-width:1px;border-left-width:var(--mc-tabs-size-border-width, 1px)}.mc-tab-header__pagination-controls_enabled .mc-tab-header__pagination{display:flex}.mc-tab-header__content{display:flex;flex-grow:1;z-index:1;overflow:hidden}.mc-tab-list{position:relative;width:100%;transition:transform .5s cubic-bezier(.35,0,.25,1)}.mc-tab-label{position:relative;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;height:40px;height:var(--mc-tabs-size-height, 40px);text-align:center;white-space:nowrap;cursor:pointer;padding-right:16px;padding-right:var(--mc-tabs-size-padding-horizontal, 16px);padding-left:16px;padding-left:var(--mc-tabs-size-padding-horizontal, 16px);outline:none;-webkit-user-select:none;user-select:none}.mc-tab-label .mc-tab-overlay{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.mc-tab-label.mc-active{cursor:default}.mc-tab-label.mc-active:before{display:block;content:\"\";position:absolute}.mc-tab-label.mc-active[disabled] .mc-tab-overlay{bottom:-1px}.mc-tab-label.cdk-keyboard-focused{z-index:1}.mc-tab-label:first-child.cdk-keyboard-focused:after{left:0}.mc-tab-label:last-child.cdk-keyboard-focused:after{right:0}.mc-tab-label[disabled]{pointer-events:none}.mc-tab-label .mc-tab-label__content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mc-tab-label .mc-tab-label__content>.mc-icon.mc-icon_left{margin-right:8px;margin-right:var(--mc-tabs-size-label-icon-margin, 8px)}.mc-tab-label .mc-tab-label__content>.mc-icon.mc-icon_right{margin-left:8px;margin-left:var(--mc-tabs-size-label-icon-margin, 8px)}.mc-tab-label_old{border-bottom-width:1px;border-bottom-width:var(--mc-tabs-size-border-width, 1px);border-bottom-style:solid;border-width:1px;border-width:var(--mc-tabs-size-border-width, 1px);border-style:solid;border-top-left-radius:3px;border-top-left-radius:var(--mc-tabs-size-border-radius, 3px);border-top-right-radius:3px;border-top-right-radius:var(--mc-tabs-size-border-radius, 3px);border-left:none;border-left-color:transparent;border-right:none;border-right-color:transparent}.mc-tab-label_old.mc-active{border-width:1px;border-width:var(--mc-tabs-size-border-width, 1px);border-style:solid;padding-right:calc(16px - 1px);padding-right:calc(var(--mc-tabs-size-padding-horizontal, 16px) - var(--mc-tabs-size-border-width, 1px));padding-left:calc(16px - 1px);padding-left:calc(var(--mc-tabs-size-padding-horizontal, 16px) - var(--mc-tabs-size-border-width, 1px))}.mc-tab-label_old.mc-active.cdk-keyboard-focused:after{right:calc(-2 * 1px);right:calc(-2 * var(--mc-tabs-size-border-width, 1px));left:calc(-2 * 1px);left:calc(-2 * var(--mc-tabs-size-border-width, 1px))}.mc-tab-label_old.cdk-keyboard-focused:after{top:-1px}.mc-tab-label_old .mc-tab-overlay{top:-1px;border-top-left-radius:3px;border-top-left-radius:var(--mc-tabs-size-border-radius, 3px);border-top-right-radius:3px;border-top-right-radius:var(--mc-tabs-size-border-radius, 3px)}.mc-tab-label_horizontal{border-bottom-width:1px;border-bottom-width:var(--mc-tabs-size-border-width, 1px);border-bottom-style:solid}.mc-tab-label_horizontal.mc-active:before{bottom:calc(-1 * 1px);bottom:calc(-1 * var(--mc-tabs-size-border-width, 1px));left:0;right:0;height:4px;height:var(--mc-tabs-size-highlight-height, 4px)}.mc-tab-label_vertical{justify-content:flex-start}.mc-tab-label_vertical.mc-active:before{top:0;bottom:0;left:calc(-1 * 1px);left:calc(-1 * var(--mc-tabs-size-border-width, 1px));width:5px;width:var(--mc-tabs-size-highlight-height, 5px)}.mc-tab-label_vertical.cdk-keyboard-focused:after{right:0;left:0;border-width:calc(1px * 2);border-width:calc(var(--mc-tabs-size-border-width, 1px) * 2);border-style:solid}.mc-tab-group_stretch-labels .mc-tab-label,.mc-tab-group_stretch-labels .mc-tab-label_old{flex-basis:0;flex-grow:1}\n"],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tab-header',
      templateUrl: 'tab-header.html',
      styleUrls: ['tab-header.scss'],
      inputs: ['selectedIndex'],
      outputs: ['selectFocusedIndex', 'indexFocused'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      host: {
        class: 'mc-tab-header',
        '[class.mc-tab-header_vertical]': 'vertical',
        '[class.mc-tab-header__pagination-controls_enabled]': 'showPaginationControls',
        '[class.mc-tab-header_rtl]': 'getLayoutDirection() == \'rtl\''
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_17__.ViewportRuler
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__.Platform
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    vertical: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McTabLabelWrapper, {
        descendants: false
      }]
    }],
    tabListContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabListContainer', {
        static: true
      }]
    }],
    tabList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabList', {
        static: true
      }]
    }],
    nextPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['nextPaginator']
    }],
    previousPaginator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['previousPaginator']
    }]
  });
})();

class McOldTabsCssStyler {}
/** @nocollapse */


McOldTabsCssStyler.ɵfac = function McOldTabsCssStyler_Factory(t) {
  return new (t || McOldTabsCssStyler)();
};
/** @nocollapse */


McOldTabsCssStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McOldTabsCssStyler,
  selectors: [["mc-tab-group", "mc-old-tabs", ""]],
  hostAttrs: [1, "mc-tab-group_old"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McOldTabsCssStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tab-group[mc-old-tabs]',
      host: {
        class: 'mc-tab-group_old'
      }
    }]
  }], null, null);
})();

class McAlignTabsCenterCssStyler {}
/** @nocollapse */


McAlignTabsCenterCssStyler.ɵfac = function McAlignTabsCenterCssStyler_Factory(t) {
  return new (t || McAlignTabsCenterCssStyler)();
};
/** @nocollapse */


McAlignTabsCenterCssStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McAlignTabsCenterCssStyler,
  selectors: [["mc-tab-group", "mc-align-tabs-center", ""], ["", "mc-tab-nav-bar", "", "mc-align-tabs-center", ""]],
  hostAttrs: [1, "mc-tab-group_align-labels-center"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAlignTabsCenterCssStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tab-group[mc-align-tabs-center], [mc-tab-nav-bar][mc-align-tabs-center]',
      host: {
        class: 'mc-tab-group_align-labels-center'
      }
    }]
  }], null, null);
})();

class McAlignTabsEndCssStyler {}
/** @nocollapse */


McAlignTabsEndCssStyler.ɵfac = function McAlignTabsEndCssStyler_Factory(t) {
  return new (t || McAlignTabsEndCssStyler)();
};
/** @nocollapse */


McAlignTabsEndCssStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McAlignTabsEndCssStyler,
  selectors: [["mc-tab-group", "mc-align-tabs-end", ""], ["", "mc-tab-nav-bar", "", "mc-align-tabs-end", ""]],
  hostAttrs: [1, "mc-tab-group_align-labels-end"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAlignTabsEndCssStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tab-group[mc-align-tabs-end], [mc-tab-nav-bar][mc-align-tabs-end]',
      host: {
        class: 'mc-tab-group_align-labels-end'
      }
    }]
  }], null, null);
})();

class McStretchTabsCssStyler {}
/** @nocollapse */


McStretchTabsCssStyler.ɵfac = function McStretchTabsCssStyler_Factory(t) {
  return new (t || McStretchTabsCssStyler)();
};
/** @nocollapse */


McStretchTabsCssStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McStretchTabsCssStyler,
  selectors: [["mc-tab-group", "mc-stretch-tabs", ""], ["", "mc-tab-nav-bar", "", "mc-stretch-tabs", ""]],
  hostAttrs: [1, "mc-tab-group_stretch-labels"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McStretchTabsCssStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tab-group[mc-stretch-tabs], [mc-tab-nav-bar][mc-stretch-tabs]',
      host: {
        class: 'mc-tab-group_stretch-labels'
      }
    }]
  }], null, null);
})();

class McVerticalTabsCssStyler {}
/** @nocollapse */


McVerticalTabsCssStyler.ɵfac = function McVerticalTabsCssStyler_Factory(t) {
  return new (t || McVerticalTabsCssStyler)();
};
/** @nocollapse */


McVerticalTabsCssStyler.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McVerticalTabsCssStyler,
  selectors: [["mc-tab-group", "vertical", ""], ["", "mc-tab-nav-bar", "", "vertical", ""]],
  hostAttrs: [1, "mc-tab-group_vertical"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McVerticalTabsCssStyler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tab-group[vertical], [mc-tab-nav-bar][vertical]',
      host: {
        class: 'mc-tab-group_vertical'
      }
    }]
  }], null, null);
})();
/** Used to generate unique ID's for each tab component */


let nextId = 0;
/** A simple change event emitted on focus or selection changes. */

class McTabChangeEvent {}
/** Injection token that can be used to provide the default options the tabs module. */


const MC_TABS_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MC_TABS_CONFIG'); // Boilerplate for applying mixins to McTabGroup.

/** @docs-private */

class McTabGroupBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McTabGroupMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.mixinDisabled)(McTabGroupBase);
/**
 * Tab-group component.  Supports basic tab pairs (label + content) and includes
 * keyboard navigation.
 */

class McTabGroup extends McTabGroupMixinBase {
  constructor(elementRef, changeDetectorRef, lightTabs, vertical, defaultConfig) {
    super(elementRef);
    this.changeDetectorRef = changeDetectorRef;
    this.resizeStream = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this._dynamicHeight = false;
    this._selectedIndex = null;
    /** Position of the tab header. */

    this.headerPosition = 'above';
    /** Output to enable support for two-way binding on `[(selectedIndex)]` */

    this.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when focus has changed within a tab group. */

    this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the body animation has completed */

    this.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the tab selection has changed. */

    this.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
    /** The tab index that should be selected after the content has been checked. */

    this.indexToSelect = 0;
    /** Snapshot of the height of the tab body wrapper before another tab is activated. */

    this.tabBodyWrapperHeight = 0;
    /** Subscription to tabs being added/removed. */

    this.tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to changes in the tab labels. */

    this.tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    this.resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    this.resizeDebounceInterval = 100;

    this.checkOverflow = () => {
      this.tabHeader.items.forEach(headerTab => headerTab.checkOverflow());
    };

    this.oldTab = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(lightTabs);
    this.vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(vertical);
    this.groupId = nextId++;
    this.animationDuration = (defaultConfig === null || defaultConfig === void 0 ? void 0 : defaultConfig.animationDuration) || '0ms';
    this.subscribeToResize();
  }
  /** Whether the tab group should grow to the size of the active tab. */


  get dynamicHeight() {
    return this._dynamicHeight;
  }

  set dynamicHeight(value) {
    this._dynamicHeight = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(value);
  }
  /** The index of the active tab. */


  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(value) {
    this.indexToSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceNumberProperty)(value, null);
  }
  /**
   * After the content is checked, this component knows what tabs have been defined
   * and what the selected index should be. This is where we can know exactly what position
   * each tab should be in according to the new selected index, and additionally we know how
   * a new selected tab should transition in (from the left or right).
   */


  ngAfterContentChecked() {
    // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
    // the amount of tabs changes before the actual change detection runs.
    const indexToSelect = this.indexToSelect = this.clampTabIndex(this.indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
    // the selected index has not yet been initialized.

    if (this._selectedIndex !== indexToSelect) {
      const isFirstRun = this._selectedIndex == null;

      if (!isFirstRun) {
        this.selectedTabChange.emit(this.createChangeEvent(indexToSelect));
      } // Changing these values after change detection has run
      // since the checked content may contain references to them.


      Promise.resolve().then(() => {
        this.tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);

        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
        }
      });
    } // Setup the position for each tab and optionally setup an origin on the next selected tab.


    this.tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
      // if it doesn't have one already.

      if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });

    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this.changeDetectorRef.markForCheck();
    }
  }

  ngAfterContentInit() {
    this.subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
    // able to re-render the content as new tabs are added or removed.

    this.tabsSubscription = this.tabs.changes.subscribe(() => {
      const indexToSelect = this.clampTabIndex(this.indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
      // explicit change that selects a different tab.

      if (indexToSelect === this._selectedIndex) {
        const tabs = this.tabs.toArray();

        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
            // event, otherwise the consumer may end up in an infinite loop in some edge cases like
            // adding a tab within the `selectedIndexChange` event.
            this.indexToSelect = this._selectedIndex = i;
            break;
          }
        }
      }

      this.subscribeToTabLabels();
      this.changeDetectorRef.markForCheck();
    });
  }

  ngAfterViewInit() {
    this.checkOverflow();
  }

  ngOnDestroy() {
    this.tabsSubscription.unsubscribe();
    this.tabLabelSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  focusChanged(index) {
    this.focusChange.emit(this.createChangeEvent(index));
  }
  /** Returns a unique id for each tab label element */


  getTabLabelId(i) {
    return `mc-tab-label-${this.groupId}-${i}`;
  }
  /** Returns a unique id for each tab content element */


  getTabContentId(i) {
    return `mc-tab-content-${this.groupId}-${i}`;
  }
  /**
   * Sets the height of the body wrapper to the height of the activating tab if dynamic
   * height property is true.
   */


  setTabBodyWrapperHeight(tabHeight) {
    if (!this._dynamicHeight || !this.tabBodyWrapperHeight) {
      return;
    }

    const wrapper = this.tabBodyWrapper.nativeElement;
    wrapper.style.height = `${this.tabBodyWrapperHeight}px`; // This conditional forces the browser to paint the height so that
    // the animation to the new height can have an origin.

    if (this.tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = `${tabHeight}px`;
    }
  }
  /** Removes the height of the tab body wrapper. */


  removeTabBodyWrapperHeight() {
    this.tabBodyWrapperHeight = this.tabBodyWrapper.nativeElement.clientHeight;
    this.tabBodyWrapper.nativeElement.style.height = '';
    this.animationDone.emit();
  }
  /** Handle click events, setting new selected index if appropriate. */


  handleClick(tab, tabHeader, index) {
    if (tab.disabled) {
      return;
    }

    this.selectedIndex = tabHeader.focusIndex = index;
  }
  /** Retrieves the tabindex for the tab. */


  getTabIndex(tab, index) {
    if (tab.disabled) {
      return null;
    }

    return this.selectedIndex === index ? 0 : -1;
  }

  createChangeEvent(index) {
    const event = new McTabChangeEvent();
    event.index = index;

    if (this.tabs && this.tabs.length) {
      event.tab = this.tabs.toArray()[index];
    }

    return event;
  }
  /**
   * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
   * on the McTab component, whereas the data binding is inside the McTabGroup. In order for the
   * binding to be updated, we need to subscribe to changes in it and trigger change detection
   * manually.
   */


  subscribeToTabLabels() {
    if (this.tabLabelSubscription) {
      this.tabLabelSubscription.unsubscribe();
    }

    this.tabLabelSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.merge)(...this.tabs.map(tab => tab.stateChanges)).subscribe(() => this.changeDetectorRef.markForCheck());
  }

  subscribeToResize() {
    if (!this.vertical) {
      return;
    }

    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }

    this.resizeSubscription = this.resizeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.debounceTime)(this.resizeDebounceInterval)).subscribe(this.checkOverflow);
  }
  /** Clamps the given index to the bounds of 0 and the tabs length. */


  clampTabIndex(index) {
    // Note the `|| 0`, which ensures that values like NaN can't get through
    // and which would otherwise throw the component into an infinite loop
    // (since Mch.max(NaN, 0) === NaN).
    return Math.min(this.tabs.length - 1, Math.max(index || 0, 0));
  }

}
/** @nocollapse */


McTabGroup.ɵfac = function McTabGroup_Factory(t) {
  return new (t || McTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('mc-old-tabs'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('vertical'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TABS_CONFIG, 8));
};
/** @nocollapse */


McTabGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTabGroup,
  selectors: [["mc-tab-group"]],
  contentQueries: function McTabGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTab, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    }
  },
  viewQuery: function McTabGroup_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabBodyWrapper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabHeader = _t.first);
    }
  },
  hostAttrs: [1, "mc-tab-group"],
  hostVars: 4,
  hostBindings: function McTabGroup_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function McTabGroup_resize_HostBindingHandler() {
        return ctx.resizeStream.next();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tab-group_dynamic-height", ctx.dynamicHeight)("mc-tab-group_inverted-header", ctx.headerPosition === "below");
    }
  },
  inputs: {
    disabled: "disabled",
    dynamicHeight: "dynamicHeight",
    selectedIndex: "selectedIndex",
    headerPosition: "headerPosition",
    animationDuration: "animationDuration"
  },
  outputs: {
    selectedIndexChange: "selectedIndexChange",
    focusChange: "focusChange",
    animationDone: "animationDone",
    selectedTabChange: "selectedTabChange"
  },
  exportAs: ["mcTabGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 4,
  consts: [[3, "vertical", "selectedIndex", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mc-tab-label", "mcTabLabelWrapper", "", "cdkMonitorElementFocus", "", 3, "mc-tab-label_old", "mc-tab-label_horizontal", "mc-tab-label_vertical", "mc-tab-label_empty", "mc-active", "tab", "id", "disabled", "mcTooltip", "mcTooltipDisabled", "mcTrigger", "mcPlacement", "click", 4, "ngFor", "ngForOf"], [1, "mc-tab-body__wrapper"], ["tabBodyWrapper", ""], [3, "id", "mc-tab-body__active", "content", "position", "origin", "animationDuration", "onCentered", "onCentering", 4, "ngFor", "ngForOf"], ["mcTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mc-tab-label", 3, "tab", "id", "disabled", "mcTooltip", "mcTooltipDisabled", "mcTrigger", "mcPlacement", "click"], [1, "mc-tab-label__content"], ["labelContent", ""], [3, "ngIf"], [1, "mc-tab-overlay"], [3, "cdkPortalOutlet"], [3, "id", "content", "position", "origin", "animationDuration", "onCentered", "onCentering"]],
  template: function McTabGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tab-header", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("indexFocused", function McTabGroup_Template_mc_tab_header_indexFocused_0_listener($event) {
        return ctx.focusChanged($event);
      })("selectFocusedIndex", function McTabGroup_Template_mc_tab_header_selectFocusedIndex_0_listener($event) {
        return ctx.selectedIndex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McTabGroup_div_2_Template, 6, 22, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, McTabGroup_mc_tab_body_5_Template, 1, 7, "mc-tab-body", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", ctx.vertical)("selectedIndex", ctx.selectedIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    }
  },
  directives: [McTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, McTabLabelWrapper, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.CdkMonitorFocus, _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_23__.McTooltipTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.CdkPortalOutlet, McTabBody],
  styles: [".mc-tab-group{display:flex;flex-direction:column;box-sizing:border-box;text-align:center;white-space:nowrap}.mc-tab-group.mc-tab-group_inverted-header{flex-direction:column-reverse}.mc-tab-group_vertical{flex-direction:row}.mc-tab-group_vertical .mc-tab-header__content{overflow-y:auto;padding-top:8px;padding-bottom:1px;border-right-width:1px;border-right-width:var(--mc-tabs-size-border-width, 1px);border-right-style:solid}.mc-tab-body__wrapper{display:flex;overflow:hidden;position:relative}.mc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mc-tab-body.mc-tab-body__active{overflow-x:hidden;overflow-y:auto;position:relative;z-index:1;flex-grow:1}.mc-tab-group.mc-tab-group_dynamic-height .mc-tab-body.mc-tab-body__active{overflow-y:hidden}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tab-group',
      exportAs: 'mcTabGroup',
      templateUrl: 'tab-group.html',
      styleUrls: ['tab-group.scss'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      host: {
        class: 'mc-tab-group',
        '[class.mc-tab-group_dynamic-height]': 'dynamicHeight',
        '[class.mc-tab-group_inverted-header]': 'headerPosition === "below"',
        '(window:resize)': 'resizeStream.next()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['mc-old-tabs']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['vertical']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TABS_CONFIG]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McTab]
    }],
    tabBodyWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabBodyWrapper', {
        static: false
      }]
    }],
    tabHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['tabHeader', {
        static: false
      }]
    }],
    dynamicHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    animationDuration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    focusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    animationDone: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectedTabChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})(); // Boilerplate for applying mixins to McTabLink.


class McTabLinkBase {} // tslint:disable-next-line:naming-convention


const McTabLinkMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.mixinDisabled)(McTabLinkBase));
/**
 * Link inside of a `mc-tab-nav-bar`.
 */

class McTabLink extends McTabLinkMixinBase {
  constructor(elementRef, focusMonitor, renderer) {
    super();
    this.elementRef = elementRef;
    this.focusMonitor = focusMonitor;
    this.renderer = renderer;
    this.vertical = false;
    /** Whether the tab link is active or not. */

    this.isActive = false;
    this.focusMonitor.monitor(this.elementRef.nativeElement);
  }
  /** Whether the link is active. */


  get active() {
    return this.isActive;
  }

  set active(value) {
    if (value !== this.isActive) {
      this.isActive = value;
    }
  }

  ngAfterViewInit() {
    this.addClassModifierForIcons(Array.from(this.elementRef.nativeElement.querySelectorAll('.mc-icon')));
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
  }

  addClassModifierForIcons(icons) {
    const twoIcons = 2;
    const [firstIconElement, secondIconElement] = icons;

    if (icons.length === 1) {
      const COMMENT_NODE = 8;

      if (firstIconElement.nextSibling && firstIconElement.nextSibling.nodeType !== COMMENT_NODE) {
        this.renderer.addClass(firstIconElement, 'mc-icon_left');
      }

      if (firstIconElement.previousSibling && firstIconElement.previousSibling.nodeType !== COMMENT_NODE) {
        this.renderer.addClass(firstIconElement, 'mc-icon_right');
      }
    } else if (icons.length === twoIcons) {
      this.renderer.addClass(firstIconElement, 'mc-icon_left');
      this.renderer.addClass(secondIconElement, 'mc-icon_right');
    }
  }

}
/** @nocollapse */


McTabLink.ɵfac = function McTabLink_Factory(t) {
  return new (t || McTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
/** @nocollapse */


McTabLink.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTabLink,
  selectors: [["a", "mc-tab-link", ""], ["a", "mcTabLink", ""]],
  hostAttrs: [1, "mc-tab-link"],
  hostVars: 8,
  hostBindings: function McTabLink_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-active", ctx.active)("mc-tab-label_vertical", ctx.vertical)("mc-tab-label_horizontal", !ctx.vertical);
    }
  },
  inputs: {
    disabled: "disabled",
    tabIndex: "tabIndex",
    active: "active"
  },
  exportAs: ["mcTabLink"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c10,
  ngContentSelectors: _c2,
  decls: 2,
  vars: 0,
  consts: [[1, "mc-tab-overlay"]],
  template: function McTabLink_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabLink, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'a[mc-tab-link], a[mcTabLink]',
      exportAs: 'mcTabLink',
      template: '<ng-content></ng-content><div class="mc-tab-overlay"></div>',
      inputs: ['disabled', 'tabIndex'],
      host: {
        class: 'mc-tab-link',
        '[class.mc-active]': 'active',
        '[class.mc-tab-label_vertical]': 'vertical',
        '[class.mc-tab-label_horizontal]': '!vertical',
        '[attr.tabindex]': 'tabIndex',
        '[attr.disabled]': 'disabled || null'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Navigation component matching the styles of the tab group header.
 */


class McTabNav {
  constructor(vertical) {
    this.vertical = false;
    this.vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__.coerceBooleanProperty)(vertical);
  }

  ngAfterContentInit() {
    this.links.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.delay)(0)).subscribe(links => links.forEach(link => link.vertical = this.vertical));
    this.links.notifyOnChanges();
  }

}
/** @nocollapse */


McTabNav.ɵfac = function McTabNav_Factory(t) {
  return new (t || McTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('vertical'));
};
/** @nocollapse */


McTabNav.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTabNav,
  selectors: [["", "mc-tab-nav-bar", ""]],
  contentQueries: function McTabNav_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTabLink, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.links = _t);
    }
  },
  hostAttrs: [1, "mc-tab-nav-bar"],
  exportAs: ["mcTabNavBar", "mcTabNav"],
  attrs: _c11,
  ngContentSelectors: _c2,
  decls: 1,
  vars: 0,
  template: function McTabNav_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mc-tab-link.cdk-keyboard-focused:after{display:block;content:\"\";position:absolute;top:0;right:calc(-1 * 1px);right:calc(-1 * var(--mc-tabs-size-border-width, 1px));bottom:calc(-1 * 1px);bottom:calc(-1 * var(--mc-tabs-size-border-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mc-tabs-size-border-width, 1px))}.mc-tab-link{vertical-align:top;text-decoration:none;-webkit-tap-highlight-color:transparent;position:relative;box-sizing:border-box;display:inline-flex;justify-content:center;align-items:center;height:40px;height:var(--mc-tabs-size-height, 40px);text-align:center;white-space:nowrap;cursor:pointer;padding-right:16px;padding-right:var(--mc-tabs-size-padding-horizontal, 16px);padding-left:16px;padding-left:var(--mc-tabs-size-padding-horizontal, 16px);outline:none}.mc-tab-link .mc-tab-overlay{position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.mc-tab-link.mc-active{cursor:default}.mc-tab-link.mc-active:before{display:block;content:\"\";position:absolute}.mc-tab-link.mc-active[disabled] .mc-tab-overlay{bottom:-1px}.mc-tab-link.cdk-keyboard-focused{z-index:1}.mc-tab-link:first-child.cdk-keyboard-focused:after{left:0}.mc-tab-link:last-child.cdk-keyboard-focused:after{right:0}.mc-tab-link[disabled]{pointer-events:none}.mc-tab-link .mc-tab-label__content{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mc-tab-link .mc-tab-label__content>.mc-icon.mc-icon_left{margin-right:8px;margin-right:var(--mc-tabs-size-label-icon-margin, 8px)}.mc-tab-link .mc-tab-label__content>.mc-icon.mc-icon_right{margin-left:8px;margin-left:var(--mc-tabs-size-label-icon-margin, 8px)}.mc-tab-link .mc-tab-group_stretch-labels .mc-tab-link{flex-basis:0;flex-grow:1}.mc-tab-link>.mc-icon.mc-icon_left{margin-right:8px;margin-right:var(--mc-tabs-size-label-icon-margin, 8px)}.mc-tab-link>.mc-icon.mc-icon_right{margin-left:8px;margin-left:var(--mc-tabs-size-label-icon-margin, 8px)}.mc-tab-nav-bar{display:flex;flex-grow:1;position:relative;padding:1px 1px 0}.mc-tab-nav-bar .mc-tab-group_align-labels-center{justify-content:center}.mc-tab-nav-bar .mc-tab-group_align-labels-end{justify-content:flex-end}.mc-tab-nav-bar.mc-tab-group_vertical{flex-direction:column;flex-grow:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabNav, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mc-tab-nav-bar]',
      exportAs: 'mcTabNavBar, mcTabNav',
      template: '<ng-content></ng-content>',
      styleUrls: ['tab-nav-bar.scss'],
      host: {
        class: 'mc-tab-nav-bar'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['vertical']
      }]
    }];
  }, {
    links: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McTabLink]
    }]
  });
})();

class McTabsModule {}
/** @nocollapse */


McTabsModule.ɵfac = function McTabsModule_Factory(t) {
  return new (t || McTabsModule)();
};
/** @nocollapse */


McTabsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McTabsModule
});
/** @nocollapse */

McTabsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.McCommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_20__.McIconModule, _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_23__.McToolTipModule], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.McCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTabsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__.PortalModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.McCommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_20__.McIconModule, _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_23__.McToolTipModule],
      // Don't export all components because some are only to be used internally.
      exports: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_19__.McCommonModule, McTabGroup, McTabLabel, McTab, McTabNav, McTabLink, McTabContent, McOldTabsCssStyler, McAlignTabsCenterCssStyler, McAlignTabsEndCssStyler, McStretchTabsCssStyler, McVerticalTabsCssStyler],
      declarations: [McTabGroup, McTabLabel, McTab, McTabLabelWrapper, McTabNav, McTabLink, McTabBody, McTabBodyPortal, McTabHeader, McTabContent, McOldTabsCssStyler, McAlignTabsCenterCssStyler, McAlignTabsEndCssStyler, McStretchTabsCssStyler, McVerticalTabsCssStyler]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 71849:
/*!********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-tags.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_TAGS_DEFAULT_OPTIONS": function() { return /* binding */ MC_TAGS_DEFAULT_OPTIONS; },
/* harmony export */   "McTag": function() { return /* binding */ McTag; },
/* harmony export */   "McTagAvatar": function() { return /* binding */ McTagAvatar; },
/* harmony export */   "McTagBase": function() { return /* binding */ McTagBase; },
/* harmony export */   "McTagInput": function() { return /* binding */ McTagInput; },
/* harmony export */   "McTagList": function() { return /* binding */ McTagList; },
/* harmony export */   "McTagListBase": function() { return /* binding */ McTagListBase; },
/* harmony export */   "McTagListChange": function() { return /* binding */ McTagListChange; },
/* harmony export */   "McTagListMixinBase": function() { return /* binding */ McTagListMixinBase; },
/* harmony export */   "McTagMixinBase": function() { return /* binding */ McTagMixinBase; },
/* harmony export */   "McTagRemove": function() { return /* binding */ McTagRemove; },
/* harmony export */   "McTagSelectionChange": function() { return /* binding */ McTagSelectionChange; },
/* harmony export */   "McTagTrailingIcon": function() { return /* binding */ McTagTrailingIcon; },
/* harmony export */   "McTagsModule": function() { return /* binding */ McTagsModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/collections */ 62604);
/* harmony import */ var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/cdk/a11y */ 61729);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ 50599);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);


















/** Injection token to be used to override the default options for the chips module. */

const _c0 = ["*", [["", "mc-icon", ""]]];
const _c1 = ["*", "[mc-icon]"];
const _c2 = ["mcTagListCleaner"];

function McTagList_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c3 = ["*", [["mc-cleaner"]]];
const _c4 = ["*", "mc-cleaner"];
const MC_TAGS_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-tags-default-options');
/** Event object emitted by McTag when selected or deselected. */

class McTagSelectionChange {
  constructor(source, selected, isUserInput = false) {
    this.source = source;
    this.selected = selected;
    this.isUserInput = isUserInput;
  }

}

const TAG_ATTRIBUTE_NAMES = ['mc-basic-tag'];
/**
 * Dummy directive to add CSS class to tag avatar.
 * @docs-private
 */

class McTagAvatar {}
/** @nocollapse */


McTagAvatar.ɵfac = function McTagAvatar_Factory(t) {
  return new (t || McTagAvatar)();
};
/** @nocollapse */


McTagAvatar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTagAvatar,
  selectors: [["mc-tag-avatar"], ["", "mcTagAvatar", ""]],
  hostAttrs: [1, "mc-tag-avatar"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTagAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tag-avatar, [mcTagAvatar]',
      host: {
        class: 'mc-tag-avatar'
      }
    }]
  }], null, null);
})();
/**
 * Dummy directive to add CSS class to tag trailing icon.
 * @docs-private
 */


class McTagTrailingIcon {}
/** @nocollapse */


McTagTrailingIcon.ɵfac = function McTagTrailingIcon_Factory(t) {
  return new (t || McTagTrailingIcon)();
};
/** @nocollapse */


McTagTrailingIcon.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTagTrailingIcon,
  selectors: [["mc-tag-trailing-icon"], ["", "mcTagTrailingIcon", ""]],
  hostAttrs: [1, "mc-tag-trailing-icon"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTagTrailingIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-tag-trailing-icon, [mcTagTrailingIcon]',
      host: {
        class: 'mc-tag-trailing-icon'
      }
    }]
  }], null, null);
})();

class McTagBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McTagMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(McTagBase));

class McTag extends McTagMixinBase {
  constructor(elementRef, changeDetectorRef, _ngZone) {
    super(elementRef);
    this.elementRef = elementRef;
    this.changeDetectorRef = changeDetectorRef;
    this._ngZone = _ngZone;
    /** Emits when the tag is focused. */

    this.onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the tag is blured. */

    this.onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether the tag has focus. */

    this.hasFocus = false;
    /** Whether the tag list is selectable */

    this.tagListSelectable = true;
    /** Emitted when the tag is selected or deselected. */

    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emitted when the tag is destroyed. */

    this.destroyed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emitted when a tag is to be removed. */

    this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._selected = false;
    this._selectable = true;
    this._removable = true;
    this._disabled = false;
    this.addHostClassName();
    this.nativeElement = elementRef.nativeElement;
  }
  /** Whether the tag is selected. */


  get selected() {
    return this._selected;
  }

  set selected(value) {
    const coercedValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    if (coercedValue !== this._selected) {
      this._selected = coercedValue;
      this.dispatchSelectionChange();
    }
  }
  /** The value of the tag. Defaults to the content inside `<mc-tag>` tags. */


  get value() {
    return this._value !== undefined ? this._value : this.elementRef.nativeElement.textContent;
  }

  set value(value) {
    this._value = value;
  }
  /**
   * Whether or not the tag is selectable. When a tag is not selectable,
   * changes to its selected state are always ignored. By default a tag is
   * selectable, and it becomes non-selectable if its parent tag list is
   * not selectable.
   */


  get selectable() {
    return this._selectable && this.tagListSelectable;
  }

  set selectable(value) {
    this._selectable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * Determines whether or not the tag displays the remove styling and emits (removed) events.
   */


  get removable() {
    return this._removable;
  }

  set removable(value) {
    this._removable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

  get tabindex() {
    if (!this.selectable) {
      return null;
    }

    return this.disabled ? null : -1;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
    }
  }

  ngAfterContentInit() {
    this.addClassModificatorForIcons();
  }

  addClassModificatorForIcons() {
    const icons = this.contentChildren.map(item => item._elementRef.nativeElement);

    if (icons.length === 1) {
      const iconElement = icons[0];

      if (!iconElement.previousElementSibling && !iconElement.nextElementSibling) {
        if (iconElement.nextSibling) {
          iconElement.classList.add('mc-icon_left');
          this.nativeElement.classList.add('mc-left-icon');
        }

        if (iconElement.previousSibling) {
          iconElement.classList.add('mc-icon_right');
          this.nativeElement.classList.add('mc-right-icon');
        }
      }
    } else if (icons.length > 1) {
      const firstIconElement = icons[0];
      const secondIconElement = icons[1];
      firstIconElement.classList.add('mc-icon_left');
      secondIconElement.classList.add('mc-icon_right');
    }
  }

  addHostClassName() {
    // Add class for the different tags
    for (const attr of TAG_ATTRIBUTE_NAMES) {
      if (this.elementRef.nativeElement.hasAttribute(attr) || this.elementRef.nativeElement.tagName.toLowerCase() === attr) {
        this.elementRef.nativeElement.classList.add(attr);
        return;
      }
    }

    this.elementRef.nativeElement.classList.add('mc-standard-tag');
  }

  ngOnDestroy() {
    this.destroyed.emit({
      tag: this
    });
  }

  select() {
    if (!this._selected) {
      this._selected = true;
      this.dispatchSelectionChange();
    }
  }

  deselect() {
    if (this._selected) {
      this._selected = false;
      this.dispatchSelectionChange();
    }
  }

  selectViaInteraction() {
    if (!this._selected) {
      this._selected = true;
      this.dispatchSelectionChange(true);
    }
  }

  toggleSelected(isUserInput = false) {
    this._selected = !this.selected;
    this.dispatchSelectionChange(isUserInput);
    return this.selected;
  }
  /** Allows for programmatic focusing of the tag. */


  focus() {
    if (!this.selectable) {
      return;
    }

    if (!this.hasFocus) {
      this.elementRef.nativeElement.focus();
      this.onFocus.next({
        tag: this
      });
      Promise.resolve().then(() => {
        this.hasFocus = true;
        this.changeDetectorRef.markForCheck();
      });
    }
  }
  /**
   * Allows for programmatic removal of the tag. Called by the McTagList when the DELETE or
   * BACKSPACE keys are pressed.
   *
   * Informs any listeners of the removal request. Does not remove the tag from the DOM.
   */


  remove() {
    if (this.removable) {
      this.removed.emit({
        tag: this
      });
    }
  }

  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
    } else {
      event.stopPropagation();
    }
  }

  handleKeydown(event) {
    if (this.disabled) {
      return;
    } // tslint:disable-next-line: deprecation


    switch (event.keyCode) {
      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.DELETE:
      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.BACKSPACE:
        // If we are removable, remove the focused tag
        this.remove(); // Always prevent so page navigation does not occur

        event.preventDefault();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE:
        // If we are selectable, toggle the focused tag
        if (this.selectable) {
          this.toggleSelected(true);
        } // Always prevent space from scrolling the page since the list has focus


        event.preventDefault();
        break;

      default:
    }
  }

  blur() {
    // When animations are enabled, Angular may end up removing the tag from the DOM a little
    // earlier than usual, causing it to be blurred and throwing off the logic in the tag list
    // that moves focus not the next item. To work around the issue, we defer marking the tag
    // as not focused until the next time the zone stabilizes.
    this._ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
      this._ngZone.run(() => {
        this.hasFocus = false;
        this.onBlur.next({
          tag: this
        });
      });
    });
  }

  dispatchSelectionChange(isUserInput = false) {
    this.selectionChange.emit({
      source: this,
      isUserInput,
      selected: this._selected
    });
  }

}
/** @nocollapse */


McTag.ɵfac = function McTag_Factory(t) {
  return new (t || McTag)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
/** @nocollapse */


McTag.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTag,
  selectors: [["mc-tag"], ["", "mc-tag", ""], ["mc-basic-tag"], ["", "mc-basic-tag", ""]],
  contentQueries: function McTag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTagAvatar, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTagTrailingIcon, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTagRemove, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIcon, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trailingIcon = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.removeIcon = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentChildren = _t);
    }
  },
  hostAttrs: [1, "mc-tag"],
  hostVars: 12,
  hostBindings: function McTag_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McTag_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      })("keydown", function McTag_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("focus", function McTag_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function McTag_blur_HostBindingHandler() {
        return ctx.blur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabindex)("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-selected", ctx.selected)("mc-focused", ctx.hasFocus)("mc-tag-with-avatar", ctx.avatar)("mc-tag-with-trailing-icon", ctx.trailingIcon || ctx.removeIcon)("mc-disabled", ctx.disabled);
    }
  },
  inputs: {
    color: "color",
    selected: "selected",
    value: "value",
    selectable: "selectable",
    removable: "removable",
    disabled: "disabled"
  },
  outputs: {
    selectionChange: "selectionChange",
    destroyed: "destroyed",
    removed: "removed"
  },
  exportAs: ["mcTag"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 5,
  vars: 0,
  consts: [[1, "mc-tag__wrapper"], [1, "mc-tag__text"], [1, "mc-tag-overlay"]],
  template: function McTag_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".mc-tag{position:relative;display:inline-block;overflow:hidden;margin:2px;margin:var(--mc-tags-size-margin, 2px);height:24px;height:var(--mc-tags-size-height, 24px);border-width:1px;border-width:var(--mc-tags-size-border-width, 1px);border-style:solid;border-radius:4px;border-radius:var(--mc-tags-size-border-radius, 4px);cursor:default;outline:none;box-sizing:border-box}.mc-tag.mc-left-icon{padding-left:3px;padding-left:var(--mc-tags-size-icon-padding, 3px)}.mc-tag.mc-right-icon{padding-right:3px;padding-right:var(--mc-tags-size-icon-padding, 3px)}.mc-tag__wrapper{display:flex;align-items:center;height:100%;flex:1 1 100%}.mc-tag__wrapper .mc-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0;width:24px;width:var(--mc-tags-size-height, 24px);height:24px;height:var(--mc-tags-size-height, 24px)}.mc-tag__wrapper .mc-icon_left{margin-right:3px;margin-right:var(--mc-tags-size-icon-padding, 3px)}.mc-tag__wrapper .mc-icon_right{margin-left:3px;margin-left:var(--mc-tags-size-icon-padding, 3px)}.mc-tag-overlay{position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;pointer-events:none;border-radius:inherit}.mc-tag__text{margin-left:calc(8px - 1px);margin-left:calc(var(--mc-tags-size-text-margin, 8px) - var(--mc-tags-size-border-width, 1px));text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tag, [mc-tag], mc-basic-tag, [mc-basic-tag]',
      exportAs: 'mcTag',
      templateUrl: 'tag.partial.html',
      styleUrls: ['./tag.scss'],
      inputs: ['color'],
      host: {
        class: 'mc-tag',
        '[attr.tabindex]': 'tabindex',
        '[attr.disabled]': 'disabled || null',
        '[class.mc-selected]': 'selected',
        '[class.mc-focused]': 'hasFocus',
        '[class.mc-tag-with-avatar]': 'avatar',
        '[class.mc-tag-with-trailing-icon]': 'trailingIcon || removeIcon',
        '[class.mc-disabled]': 'disabled',
        '(click)': 'handleClick($event)',
        '(keydown)': 'handleKeydown($event)',
        '(focus)': 'focus()',
        '(blur)': 'blur()'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    contentChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIcon]
    }],
    avatar: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McTagAvatar, {
        static: false
      }]
    }],
    trailingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [McTagTrailingIcon, {
        static: false
      }]
    }],
    removeIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McTagRemove), {
        static: false
      }]
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    destroyed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    removed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    removable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 *
 * Example:
 *
 *     `<mc-tag>
 *       <mc-icon mcTagRemove>cancel</mc-icon>
 *     </mc-tag>`
 *
 * You *may* use a custom icon, but you may need to override the `mc-tag-remove` positioning
 * styles to properly center the icon within the tag.
 */


class McTagRemove {
  constructor(parentTag) {
    this.parentTag = parentTag;
  }

  focus($event) {
    $event.stopPropagation();
  }
  /** Calls the parent tag's public `remove()` method if applicable. */


  handleClick(event) {
    if (this.parentTag.removable) {
      this.parentTag.hasFocus = true;
      this.parentTag.remove();
    } // We need to stop event propagation because otherwise the event will bubble up to the
    // form field and cause the `onContainerClick` method to be invoked. This method would then
    // reset the focused tag that has been focused after tag removal. Usually the parent
    // the parent click listener of the `McTag` would prevent propagation, but it can happen
    // that the tag is being removed before the event bubbles up.


    event.stopPropagation();
  }

}
/** @nocollapse */


McTagRemove.ɵfac = function McTagRemove_Factory(t) {
  return new (t || McTagRemove)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McTag));
};
/** @nocollapse */


McTagRemove.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTagRemove,
  selectors: [["", "mcTagRemove", ""]],
  hostAttrs: [1, "mc-tag-remove", "mc-tag-trailing-icon"],
  hostVars: 1,
  hostBindings: function McTagRemove_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McTagRemove_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      })("focus", function McTagRemove_focus_HostBindingHandler($event) {
        return ctx.focus($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", -1);
    }
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTagRemove, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTagRemove]',
      host: {
        class: 'mc-tag-remove mc-tag-trailing-icon',
        '[attr.tabindex]': '-1',
        '(click)': 'handleClick($event)',
        '(focus)': 'focus($event)'
      }
    }]
  }], function () {
    return [{
      type: McTag
    }];
  }, null);
})();

class McTagListBase {
  constructor(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
    this.defaultErrorStateMatcher = defaultErrorStateMatcher;
    this.parentForm = parentForm;
    this.parentFormGroup = parentFormGroup;
    this.ngControl = ngControl;
  }

} // tslint:disable-next-line:naming-convention


const McTagListMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinErrorState)(McTagListBase); // Increasing integer for generating unique ids for tag-list components.

let nextUniqueId$1 = 0;
/** Change event object that is emitted when the tag list value has changed. */

class McTagListChange {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }

}

class McTagList extends McTagListMixinBase {
  constructor(elementRef, changeDetectorRef, defaultErrorStateMatcher, rawValidators, mcValidation, dir, parentForm, parentFormGroup, ngControl, ngModel, formControlName) {
    super(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
    this.elementRef = elementRef;
    this.changeDetectorRef = changeDetectorRef;
    this.rawValidators = rawValidators;
    this.mcValidation = mcValidation;
    this.dir = dir;
    this.ngModel = ngModel;
    this.formControlName = formControlName;
    this.controlType = 'tag-list';
    this._tabIndex = 0;
    /**
     * Event that emits whenever the raw value of the tag-list changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.uid = `mc-tag-list-${nextUniqueId$1++}`;
    /**
     * User defined tab index.
     * When it is not null, use user defined tab index. Otherwise use tabIndex
     */

    this.userTabIndex = null;
    this.tagChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Orientation of the tag list. */

    this.orientation = 'horizontal';
    /** Event emitted when the selected tag list value has been changed by the user. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._required = false;
    this._disabled = false;
    this._selectable = true;
    this._multiple = false;
    /**
     * When a tag is destroyed, we store the index of the destroyed tag until the tags
     * query list notifies about the update. This is necessary because we cannot determine an
     * appropriate tag that should receive focus until the array of tags updated completely.
     */

    this.lastDestroyedTagIndex = null;
    /** Subject that emits when the component has been destroyed. */

    this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // tslint:disable-next-line:no-empty

    this.onTouched = () => {}; // tslint:disable-next-line:no-empty


    this.onChange = () => {};

    this._compareWith = (o1, o2) => o1 === o2;

    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }
  /** Combined stream of all of the child tags' selection change events. */


  get tagSelectionChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.tags.map(tag => tag.selectionChange));
  }
  /** Combined stream of all of the child tags' focus change events. */


  get tagFocusChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.tags.map(tag => tag.onFocus));
  }
  /** Combined stream of all of the child tags' blur change events. */


  get tagBlurChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.tags.map(tag => tag.onBlur));
  }
  /** Combined stream of all of the child tags' remove change events. */


  get tagRemoveChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.tags.map(tag => tag.destroyed));
  }
  /** The array of selected tags inside tag list. */


  get selected() {
    return this.multiple ? this.selectionModel.selected : this.selectionModel.selected[0];
  }

  get canShowCleaner() {
    return this.cleaner && this.tags.length > 0;
  }
  /** Whether the user should be allowed to select multiple tags. */


  get multiple() {
    return this._multiple;
  }

  set multiple(value) {
    this._multiple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /**
   * A function to compare the option values with the selected values. The first argument
   * is a value from an option. The second is a value from the selection. A boolean
   * should be returned.
   */


  get compareWith() {
    return this._compareWith;
  }

  set compareWith(fn) {
    this._compareWith = fn;

    if (this.selectionModel) {
      // A different comparator means the selection could change.
      this.initializeSelection();
    }
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get value() {
    return this._value;
  }

  set value(value) {
    this.writeValue(value);
    this._value = value;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get id() {
    return this.tagInput ? this.tagInput.id : this.uid;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this.stateChanges.next();
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get placeholder() {
    return this.tagInput ? this.tagInput.placeholder : this._placeholder;
  }

  set placeholder(value) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  /** Whether any tags or the mcTagInput inside of this tag-list has focus. */


  get focused() {
    return this.tagInput && this.tagInput.focused || this.hasFocusedTag();
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get empty() {
    return (!this.tagInput || this.tagInput.empty) && this.tags.length === 0;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get shouldLabelFloat() {
    return !this.empty || this.focused;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get disabled() {
    return this.ngControl ? !!this.ngControl.disabled : this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this.syncTagsDisabledState();
  }
  /**
   * Whether or not this tag list is selectable. When a tag list is not selectable,
   * the selected states for all the tags inside the tag list are always ignored.
   */


  get selectable() {
    return this._selectable;
  }

  set selectable(value) {
    this._selectable = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    if (this.tags) {
      this.tags.forEach(tag => tag.tagListSelectable = this._selectable);
    }
  }

  get tabIndex() {
    return this._tabIndex;
  }

  set tabIndex(value) {
    this.userTabIndex = value;
    this._tabIndex = value;
  }

  ngAfterContentInit() {
    if (this.mcValidation.useValidation) {
      (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.setMosaicValidation)(this);
    }

    this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.FocusKeyManager(this.tags).withVerticalOrientation().withHorizontalOrientation(this.dir ? this.dir.value : 'ltr');

    if (this.dir) {
      this.dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(dir => this.keyManager.withHorizontalOrientation(dir));
    } // Prevents the tag list from capturing focus and redirecting
    // it back to the first tag when the user tabs out.


    this.keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(() => {
      this._tabIndex = -1;
      setTimeout(() => {
        this._tabIndex = this.userTabIndex || 0;
        this.changeDetectorRef.markForCheck();
      });
    }); // When the list changes, re-subscribe

    this.tags.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroyed)).subscribe(() => {
      if (this.disabled) {
        // Since this happens after the content has been
        // checked, we need to defer it to the next tick.
        Promise.resolve().then(() => {
          this.syncTagsDisabledState();
        });
      }

      this.resetTags(); // Reset tags selected/deselected status

      this.initializeSelection(); // Check to see if we need to update our tab index

      this.updateTabIndex(); // Check to see if we have a destroyed tag and need to refocus

      this.updateFocusForDestroyedTags(); // Defer setting the value in order to avoid the "Expression
      // has changed after it was checked" errors from Angular.

      Promise.resolve().then(() => {
        this.tagChanges.emit(this.tags.toArray());
        this.stateChanges.next();
        this.propagateTagsChanges();
      });
    });
  }

  ngOnInit() {
    this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_11__.SelectionModel(this.multiple, undefined, false);
    this.stateChanges.next();
  }

  ngDoCheck() {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    this.stateChanges.complete();
    this.dropSubscriptions();
  }
  /** Associates an HTML input element with this tag list. */


  registerInput(inputElement) {
    var _a;

    this.tagInput = inputElement; // todo need rethink about it

    if (this.ngControl && ((_a = inputElement.ngControl) === null || _a === void 0 ? void 0 : _a.statusChanges)) {
      inputElement.ngControl.statusChanges.subscribe(() => this.ngControl.control.setErrors(inputElement.ngControl.errors));
    }
  } // Implemented as part of ControlValueAccessor.


  writeValue(value) {
    if (this.tags) {
      this.setSelectionByValue(value, false);
    }
  } // Implemented as part of ControlValueAccessor.


  registerOnChange(fn) {
    this.onChange = fn;
  } // Implemented as part of ControlValueAccessor.


  registerOnTouched(fn) {
    this.onTouched = fn;
  } // Implemented as part of ControlValueAccessor.


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  onContainerClick(event) {
    if (!this.originatesFromTag(event)) {
      this.focus();
    }
  }
  /**
   * Focuses the first non-disabled tag in this tag list, or the associated input when there
   * are no eligible tags.
   */


  focus() {
    if (this.disabled) {
      return;
    } // TODO: ARIA says this should focus the first `selected` tag if any are selected.
    // Focus on first element if there's no tagInput inside tag-list


    if (this.tagInput && this.tagInput.focused) {// do nothing
    } else if (this.tags.length > 0) {
      this.keyManager.setFirstItemActive();
      this.stateChanges.next();
    } else {
      this.focusInput();
      this.stateChanges.next();
    }
  }
  /** Attempt to focus an input if we have one. */


  focusInput() {
    if (this.tagInput) {
      this.tagInput.focus();
    }
  }
  /**
   * Pass events to the keyboard manager. Available here for tests.
   */


  keydown(event) {
    const target = event.target; // If they are on an empty input and hit backspace, focus the last tag
    // tslint:disable-next-line: deprecation

    if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.BACKSPACE && this.isInputEmpty(target)) {
      this.keyManager.setLastItemActive();
      event.preventDefault();
    } else if (target && target.classList.contains('mc-tag')) {
      // tslint:disable-next-line: deprecation
      if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.HOME) {
        this.keyManager.setFirstItemActive();
        event.preventDefault(); // tslint:disable-next-line: deprecation
      } else if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.END) {
        this.keyManager.setLastItemActive();
        event.preventDefault();
      } else {
        this.keyManager.onKeydown(event);
      }

      this.stateChanges.next();
    }
  }

  setSelectionByValue(value, isUserInput = true) {
    this.clearSelection();
    this.tags.forEach(tag => tag.deselect());

    if (Array.isArray(value)) {
      value.forEach(currentValue => this.selectValue(currentValue, isUserInput));
      this.sortValues();
    } else {
      const correspondingTag = this.selectValue(value, isUserInput); // Shift focus to the active item. Note that we shouldn't do this in multiple
      // mode, because we don't know what tag the user interacted with last.

      if (correspondingTag && isUserInput) {
        this.keyManager.setActiveItem(correspondingTag);
      }
    }
  }
  /** When blurred, mark the field as touched when focus moved outside the tag list. */


  blur() {
    if (!this.hasFocusedTag()) {
      this.keyManager.setActiveItem(-1);
    }

    if (!this.disabled) {
      if (this.tagInput) {
        // If there's a tag input, we should check whether the focus moved to tag input.
        // If the focus is not moved to tag input, mark the field as touched. If the focus moved
        // to tag input, do nothing.
        // Timeout is needed to wait for the focus() event trigger on tag input.
        setTimeout(() => {
          if (!this.focused) {
            this.markAsTouched();
          }
        });
      } else {
        // If there's no tag input, then mark the field as touched.
        this.markAsTouched();
      }
    }
  }
  /** Mark the field as touched */


  markAsTouched() {
    this.onTouched();
    this.changeDetectorRef.markForCheck();
    this.stateChanges.next();
  }
  /**
   * Check the tab index as you should not be allowed to focus an empty list.
   */


  updateTabIndex() {
    // If we have 0 tags, we should not allow keyboard focus
    this._tabIndex = this.userTabIndex || (this.tags.length === 0 ? -1 : 0);
  }
  /**
   * If the amount of tags changed, we need to update the
   * key manager state and focus the next closest tag.
   */


  updateFocusForDestroyedTags() {
    if (this.lastDestroyedTagIndex != null) {
      if (this.tags.length) {
        const newTagIndex = Math.min(this.lastDestroyedTagIndex, this.tags.length - 1);
        this.keyManager.setActiveItem(newTagIndex);
      } else {
        this.focusInput();
      }
    }

    this.lastDestroyedTagIndex = null;
  }
  /**
   * Utility to ensure all indexes are valid.
   *
   * @param index The index to be checked.
   * @returns True if the index is valid for our list of tags.
   */


  isValidIndex(index) {
    return index >= 0 && index < this.tags.length;
  }

  isInputEmpty(element) {
    if (element && element.nodeName.toLowerCase() === 'input') {
      const input = element;
      return !input.value;
    }

    return false;
  }
  /**
   * Finds and selects the tag based on its value.
   * @returns Tag that has the corresponding value.
   */


  selectValue(value, isUserInput = true) {
    const correspondingTag = this.tags.find(tag => {
      return tag.value != null && this._compareWith(tag.value, value);
    });

    if (correspondingTag) {
      if (isUserInput) {
        correspondingTag.selectViaInteraction();
      } else {
        correspondingTag.select();
      }

      this.selectionModel.select(correspondingTag);
    }

    return correspondingTag;
  }

  initializeSelection() {
    // Defer setting the value in order to avoid the "Expression
    // has changed after it was checked" errors from Angular.
    Promise.resolve().then(() => {
      if (this.ngControl || this._value) {
        this.setSelectionByValue(this.ngControl ? this.ngControl.value : this._value, false);
        this.stateChanges.next();
      }
    });
  }
  /**
   * Deselects every tag in the list.
   * @param skip Tag that should not be deselected.
   */


  clearSelection(skip) {
    this.selectionModel.clear();
    this.tags.forEach(tag => {
      if (tag !== skip) {
        tag.deselect();
      }
    });
    this.stateChanges.next();
  }
  /**
   * Sorts the model values, ensuring that they keep the same
   * order that they have in the panel.
   */


  sortValues() {
    if (this._multiple) {
      this.selectionModel.clear();
      this.tags.forEach(tag => {
        if (tag.selected) {
          this.selectionModel.select(tag);
        }
      });
      this.stateChanges.next();
    }
  }
  /** Emits change event to set the model value. */
  // todo need rethink this method and selection logic


  propagateChanges(fallbackValue) {
    let valueToEmit = null;

    if (Array.isArray(this.selected)) {
      valueToEmit = this.selected.map(tag => tag.value);
    } else {
      valueToEmit = this.selected ? this.selected.value : fallbackValue;
    }

    this._value = valueToEmit;
    this.change.emit(new McTagListChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this.onChange(valueToEmit);
    this.changeDetectorRef.markForCheck();
  }

  propagateTagsChanges() {
    const valueToEmit = this.tags.map(tag => tag.value);
    this._value = valueToEmit;
    this.change.emit(new McTagListChange(this, valueToEmit));
    this.valueChange.emit(valueToEmit);
    this.onChange(valueToEmit);
    this.changeDetectorRef.markForCheck();
  }

  resetTags() {
    this.dropSubscriptions();
    this.listenToTagsFocus();
    this.listenToTagsSelection();
    this.listenToTagsRemoved();
  }

  dropSubscriptions() {
    if (this.tagFocusSubscription) {
      this.tagFocusSubscription.unsubscribe();
      this.tagFocusSubscription = null;
    }

    if (this.tagBlurSubscription) {
      this.tagBlurSubscription.unsubscribe();
      this.tagBlurSubscription = null;
    }

    if (this.tagSelectionSubscription) {
      this.tagSelectionSubscription.unsubscribe();
      this.tagSelectionSubscription = null;
    }

    if (this.tagRemoveSubscription) {
      this.tagRemoveSubscription.unsubscribe();
      this.tagRemoveSubscription = null;
    }
  }
  /** Listens to user-generated selection events on each tag. */


  listenToTagsSelection() {
    this.tagSelectionSubscription = this.tagSelectionChanges.subscribe(event => {
      if (event.source.selected) {
        this.selectionModel.select(event.source);
      } else {
        this.selectionModel.deselect(event.source);
      } // For single selection tag list, make sure the deselected value is unselected.


      if (!this.multiple) {
        this.tags.forEach(tag => {
          if (!this.selectionModel.isSelected(tag) && tag.selected) {
            tag.deselect();
          }
        });
      }

      if (event.isUserInput) {
        this.propagateChanges();
      }
    });
  }
  /** Listens to user-generated selection events on each tag. */


  listenToTagsFocus() {
    this.tagFocusSubscription = this.tagFocusChanges.subscribe(event => {
      const tagIndex = this.tags.toArray().indexOf(event.tag);

      if (this.isValidIndex(tagIndex)) {
        this.keyManager.updateActiveItem(tagIndex);
      }

      this.stateChanges.next();
    });
    this.tagBlurSubscription = this.tagBlurChanges.subscribe(() => {
      this.blur();
      this.stateChanges.next();
    });
  }

  listenToTagsRemoved() {
    this.tagRemoveSubscription = this.tagRemoveChanges.subscribe(event => {
      const tag = event.tag;
      const tagIndex = this.tags.toArray().indexOf(event.tag); // In case the tag that will be removed is currently focused, we temporarily store
      // the index in order to be able to determine an appropriate sibling tag that will
      // receive focus.

      if (this.isValidIndex(tagIndex) && tag.hasFocus) {
        this.lastDestroyedTagIndex = tagIndex;
      }
    });
  }
  /** Checks whether an event comes from inside a tag element. */


  originatesFromTag(event) {
    let currentElement = event.target;

    while (currentElement && currentElement !== this.elementRef.nativeElement) {
      if (currentElement.classList.contains('mc-tag')) {
        return true;
      }

      currentElement = currentElement.parentElement;
    }

    return false;
  }
  /** Checks whether any of the tags is focused. */


  hasFocusedTag() {
    return this.tags.some(tag => tag.hasFocus);
  }
  /** Syncs the list's disabled state with the individual tags. */


  syncTagsDisabledState() {
    if (this.tags) {
      this.tags.forEach(tag => {
        tag.disabled = this._disabled;
      });
    }
  }

}
/** @nocollapse */


McTagList.ɵfac = function McTagList_Factory(t) {
  return new (t || McTagList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NG_VALIDATORS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.MC_VALIDATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, 10));
};
/** @nocollapse */


McTagList.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTagList,
  selectors: [["mc-tag-list"]],
  contentQueries: function McTagList_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTag, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cleaner = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tags = _t);
    }
  },
  hostAttrs: [1, "mc-tag-list"],
  hostVars: 6,
  hostBindings: function McTagList_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function McTagList_focus_HostBindingHandler() {
        return ctx.focus();
      })("blur", function McTagList_blur_HostBindingHandler() {
        return ctx.blur();
      })("keydown", function McTagList_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.uid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-disabled", ctx.disabled)("mc-invalid", ctx.errorState);
    }
  },
  inputs: {
    multiple: "multiple",
    compareWith: "compareWith",
    value: "value",
    required: "required",
    placeholder: "placeholder",
    disabled: "disabled",
    selectable: "selectable",
    tabIndex: "tabIndex",
    errorStateMatcher: "errorStateMatcher",
    orientation: "orientation"
  },
  outputs: {
    valueChange: "valueChange",
    change: "change"
  },
  exportAs: ["mcTagList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_14__.McFormFieldControl,
    useExisting: McTagList
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c4,
  decls: 3,
  vars: 1,
  consts: [[1, "mc-tags-list__list-container"], ["class", "mc-tags-list__cleaner", 4, "ngIf"], [1, "mc-tags-list__cleaner"]],
  template: function McTagList_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McTagList_div_2_Template, 2, 0, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canShowCleaner);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
  styles: [".mc-tag-list{display:flex;flex-direction:row;box-sizing:border-box}.mc-tag-input{border:none;outline:none;background:transparent}.mc-tags-list__list-container{display:flex;flex-wrap:wrap;flex:1 1 100%;box-sizing:border-box;min-width:0;min-height:30px;min-height:var(--mc-tag-list-size-min-height, 30px);padding:1px 6px;padding:var(--mc-tag-list-size-padding, 1px 6px)}.mc-tags-list__list-container .mc-tag-input{max-width:100%;flex:1 1 auto;height:22px;height:var(--mc-tag-input-size-height, 22px);margin:2px 4px;margin:var(--mc-tag-input-size-margin, 2px 4px)}.mc-tags-list__cleaner .mc-cleaner{height:30px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTagList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tag-list',
      exportAs: 'mcTagList',
      templateUrl: 'tag-list.partial.html',
      styleUrls: ['tag-list.scss'],
      host: {
        class: 'mc-tag-list',
        '[class.mc-disabled]': 'disabled',
        '[class.mc-invalid]': 'errorState',
        '[attr.tabindex]': 'disabled ? null : tabIndex',
        '[id]': 'uid',
        '(focus)': 'focus()',
        '(blur)': 'blur()',
        '(keydown)': 'keydown($event)'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_14__.McFormFieldControl,
        useExisting: McTagList
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NG_VALIDATORS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.MC_VALIDATION]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgForm,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }];
  }, {
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['orientation']
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cleaner: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['mcTagListCleaner', {
        static: true
      }]
    }],
    tags: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McTag, {
        // Need to use `descendants: true`,
        // Ivy will no longer match indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})(); // Increasing integer for generating unique ids.


let nextUniqueId = 0;
/**
 * Directive that adds tag-specific behaviors to an input element inside `<mc-form-field>`.
 * May be placed inside or outside of an `<mc-tag-list>`.
 */

class McTagInput {
  constructor(elementRef, renderer, defaultOptions, ngControl) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.defaultOptions = defaultOptions;
    this.ngControl = ngControl;
    /** Whether the control is focused. */

    this.focused = false;
    /**
     * The list of key codes that will trigger a tagEnd event.
     *
     * Defaults to `[ENTER]`.
     */

    this.separatorKeyCodes = this.defaultOptions.separatorKeyCodes;
    /** Emitted when a tag is to be added. */

    this.tagEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** The input's placeholder text. */

    this.placeholder = '';
    /** Unique id for the input. */

    this.id = `mc-tag-list-input-${nextUniqueId++}`;
    this._addOnBlur = true;
    this._disabled = false;
    this.countOfSymbolsForUpdateWidth = 3; // tslint:disable-next-line: no-unnecessary-type-assertion

    this.inputElement = this.elementRef.nativeElement;
    this.setDefaultInputWidth();
  }
  /** Register input for tag list */


  set tagList(value) {
    if (value) {
      this._tagList = value;

      this._tagList.registerInput(this);
    }
  }
  /**
   * Whether or not the tagEnd event will be emitted when the input is blurred.
   */


  get addOnBlur() {
    return this._addOnBlur;
  }

  set addOnBlur(value) {
    this._addOnBlur = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the input is disabled. */


  get disabled() {
    return this._disabled || this._tagList && this._tagList.disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Whether the input is empty. */


  get empty() {
    return !this.inputElement.value;
  }

  ngOnChanges() {
    this._tagList.stateChanges.next();
  }

  onKeydown(event) {
    if (!this.inputElement.value) {
      this._tagList.keydown(event);
    }

    if (this.isSeparatorKey(event)) {
      this.emitTagEnd();
      event.preventDefault();
    }
  }
  /** Checks to see if the blur should emit the (tagEnd) event. */


  blur() {
    this.focused = false; // Blur the tag list if it is not focused

    if (!this._tagList.focused) {
      this.triggerValidation();

      this._tagList.blur();
    } // tslint:disable-next-line: no-unnecessary-type-assertion


    if (this.addOnBlur) {
      this.emitTagEnd();
    }

    this._tagList.stateChanges.next();
  }

  triggerValidation() {
    if (!this.hasControl()) {
      return;
    }

    this.ngControl.statusChanges.emit(this.ngControl.status);
  }
  /** Checks to see if the (tagEnd) event needs to be emitted. */


  emitTagEnd() {
    if (!this.hasControl() || this.hasControl() && !this.ngControl.invalid) {
      this.tagEnd.emit({
        input: this.inputElement,
        value: this.inputElement.value
      });
      this.updateInputWidth();
    }
  }

  onInput() {
    this.updateInputWidth(); // Let tag list know whenever the value changes.

    this._tagList.stateChanges.next();
  }

  onPaste($event) {
    if (!$event.clipboardData) {
      return;
    }

    const data = $event.clipboardData.getData('text');

    if (data && data.length === 0) {
      return;
    }

    const items = [];

    for (const key of this.separatorKeyCodes) {
      const separator = this.separatorKeyToSymbol(key);

      if (data.search(separator) > -1) {
        items.push(...data.split(separator));
        break;
      }
    }

    if (items.length === 0) {
      items.push(data);
    }

    items.forEach(item => this.tagEnd.emit({
      input: this.inputElement,
      value: item
    }));
    this.updateInputWidth();
    $event.preventDefault();
    $event.stopPropagation();
  }

  updateInputWidth() {
    const length = this.inputElement.value.length;
    this.renderer.setStyle(this.inputElement, 'max-width', 0);
    this.oneSymbolWidth = this.inputElement.scrollWidth / length;
    this.renderer.setStyle(this.inputElement, 'max-width', '');

    if (length > this.countOfSymbolsForUpdateWidth) {
      this.renderer.setStyle(this.inputElement, 'width', `${length * this.oneSymbolWidth}px`);
    } else {
      this.setDefaultInputWidth();
    }
  }

  onFocus() {
    this.focused = true;

    this._tagList.stateChanges.next();
  }
  /** Focuses the input. */


  focus() {
    this.inputElement.focus();
  }

  separatorKeyToSymbol(k) {
    const sep = {
      [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER]: /\r?\n/,
      [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.TAB]: /\t/,
      [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.SPACE]: / /,
      [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.COMMA]: /,/
    }[k];

    if (sep) {
      return sep;
    }

    return k;
  }

  hasControl() {
    return !!this.ngControl;
  }

  setDefaultInputWidth() {
    this.renderer.setStyle(this.inputElement, 'width', '30px');
  }
  /** Checks whether a keycode is one of the configured separators. */


  isSeparatorKey(event) {
    if ((0,_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.hasModifierKey)(event)) {
      return false;
    } // tslint:disable-next-line: deprecation


    return this.separatorKeyCodes.indexOf(event.keyCode) > -1;
  }

}
/** @nocollapse */


McTagInput.ɵfac = function McTagInput_Factory(t) {
  return new (t || McTagInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TAGS_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl, 10));
};
/** @nocollapse */


McTagInput.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTagInput,
  selectors: [["input", "mcTagInputFor", ""]],
  hostAttrs: [1, "mc-tag-input"],
  hostVars: 3,
  hostBindings: function McTagInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McTagInput_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      })("blur", function McTagInput_blur_HostBindingHandler() {
        return ctx.blur();
      })("focus", function McTagInput_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("input", function McTagInput_input_HostBindingHandler() {
        return ctx.onInput();
      })("paste", function McTagInput_paste_HostBindingHandler($event) {
        return ctx.onPaste($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null)("placeholder", ctx.placeholder || null);
    }
  },
  inputs: {
    separatorKeyCodes: ["mcTagInputSeparatorKeyCodes", "separatorKeyCodes"],
    placeholder: "placeholder",
    id: "id",
    tagList: ["mcTagInputFor", "tagList"],
    addOnBlur: ["mcTagInputAddOnBlur", "addOnBlur"],
    disabled: "disabled"
  },
  outputs: {
    tagEnd: "mcTagInputTokenEnd"
  },
  exportAs: ["mcTagInput", "mcTagInputFor"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTagInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'input[mcTagInputFor]',
      exportAs: 'mcTagInput, mcTagInputFor',
      host: {
        class: 'mc-tag-input',
        '[id]': 'id',
        '[attr.disabled]': 'disabled || null',
        '[attr.placeholder]': 'placeholder || null',
        '(keydown)': 'onKeydown($event)',
        '(blur)': 'blur()',
        '(focus)': 'onFocus()',
        '(input)': 'onInput()',
        '(paste)': 'onPaste($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TAGS_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControl,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
      }]
    }];
  }, {
    separatorKeyCodes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTagInputSeparatorKeyCodes']
    }],
    tagEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['mcTagInputTokenEnd']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tagList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTagInputFor']
    }],
    addOnBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTagInputAddOnBlur']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class McTagsModule {}
/** @nocollapse */


McTagsModule.ɵfac = function McTagsModule_Factory(t) {
  return new (t || McTagsModule)();
};
/** @nocollapse */


McTagsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McTagsModule
});
/** @nocollapse */

McTagsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: MC_TAGS_DEFAULT_OPTIONS,
    // tslint:disable-next-line: no-object-literal-type-assertion
    useValue: {
      separatorKeyCodes: [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER]
    }
  }],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.PlatformModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTagsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__.PlatformModule],
      exports: [McTagList, McTag, McTagInput, McTagTrailingIcon, McTagAvatar, McTagRemove],
      declarations: [McTagList, McTag, McTagInput, McTagTrailingIcon, McTagAvatar, McTagRemove],
      providers: [{
        provide: MC_TAGS_DEFAULT_OPTIONS,
        // tslint:disable-next-line: no-object-literal-type-assertion
        useValue: {
          separatorKeyCodes: [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__.ENTER]
        }
      }]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 54360:
/*!***********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-tooltip.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_TOOLTIP_OPEN_TIME": function() { return /* binding */ MC_TOOLTIP_OPEN_TIME; },
/* harmony export */   "MC_TOOLTIP_OPEN_TIME_PROVIDER": function() { return /* binding */ MC_TOOLTIP_OPEN_TIME_PROVIDER; },
/* harmony export */   "MC_TOOLTIP_SCROLL_STRATEGY": function() { return /* binding */ MC_TOOLTIP_SCROLL_STRATEGY; },
/* harmony export */   "MC_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER": function() { return /* binding */ MC_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; },
/* harmony export */   "MIN_TIME_FOR_DELAY": function() { return /* binding */ MIN_TIME_FOR_DELAY; },
/* harmony export */   "McExtendedTooltipTrigger": function() { return /* binding */ McExtendedTooltipTrigger; },
/* harmony export */   "McToolTipModule": function() { return /* binding */ McToolTipModule; },
/* harmony export */   "McTooltipComponent": function() { return /* binding */ McTooltipComponent; },
/* harmony export */   "McTooltipTrigger": function() { return /* binding */ McTooltipTrigger; },
/* harmony export */   "McWarningTooltipTrigger": function() { return /* binding */ McWarningTooltipTrigger; },
/* harmony export */   "TooltipModifier": function() { return /* binding */ TooltipModifier; },
/* harmony export */   "mcTooltipScrollStrategyFactory": function() { return /* binding */ mcTooltipScrollStrategyFactory; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 45129);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ 42791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 772);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 97175);











/**
 * Animations used by McTooltip.
 * @docs-private
 */

function McTooltipComponent_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.header);
  }
}

function McTooltipComponent_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.header);
  }
}

function McTooltipComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McTooltipComponent_div_3_ng_container_1_Template, 1, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McTooltipComponent_div_3_ng_container_2_Template, 3, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplateRef(ctx_r0.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isTemplateRef(ctx_r0.header));
  }
}

function McTooltipComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 8);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content);
  }
}

function McTooltipComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.content);
  }
}

const mcTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('initial, void, hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0,
    transform: 'scale(0)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    transform: 'scale(1)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('200ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0,
    transform: 'scale(0)',
    offset: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0.5,
    transform: 'scale(0.99)',
    offset: 0.5
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0
  })))])
};
var TooltipModifier;

(function (TooltipModifier) {
  TooltipModifier["Default"] = "default";
  TooltipModifier["Warning"] = "warning";
  TooltipModifier["Extended"] = "extended";
})(TooltipModifier || (TooltipModifier = {}));

const MC_TOOLTIP_OPEN_TIME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-tooltip-open-time');
/** @docs-private */

const MC_TOOLTIP_OPEN_TIME_PROVIDER = {
  provide: MC_TOOLTIP_OPEN_TIME,
  useValue: {
    value: 0
  }
};
const MIN_TIME_FOR_DELAY = 2000;

class McTooltipComponent extends _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.McPopUp {
  constructor(changeDetectorRef, openTime) {
    super(changeDetectorRef);
    this.openTime = openTime;
    this.prefix = 'mc-tooltip';
  }

  show(delay) {
    // tslint:disable-next-line:no-magic-numbers
    super.show(Date.now() - this.openTime.value < MIN_TIME_FOR_DELAY ? 0 : delay);
    this.openTime.value = Date.now();
  }

  updateClassMap(placement, customClass, {
    modifier
  }) {
    const classMap = {
      [`${this.prefix}_${modifier}`]: true
    };
    super.updateClassMap(placement, customClass, classMap);
  }

}
/** @nocollapse */


McTooltipComponent.ɵfac = function McTooltipComponent_Factory(t) {
  return new (t || McTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TOOLTIP_OPEN_TIME));
};
/** @nocollapse */


McTooltipComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTooltipComponent,
  selectors: [["mc-tooltip-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MC_TOOLTIP_OPEN_TIME_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 5,
  consts: [[1, "mc-tooltip", 3, "ngClass"], [1, "mc-tooltip__inner"], [1, "mc-tooltip__arrow"], ["class", "mc-tooltip__header", 4, "ngIf"], [1, "mc-tooltip__content"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [1, "mc-tooltip__header"], [3, "ngTemplateOutlet"]],
  template: function McTooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@state.start", function McTooltipComponent_Template_div_animation_state_start_0_listener() {
        return ctx.animationStart();
      })("@state.done", function McTooltipComponent_Template_div_animation_state_done_0_listener($event) {
        return ctx.animationDone($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McTooltipComponent_div_3_Template, 3, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, McTooltipComponent_ng_container_5_Template, 1, 1, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, McTooltipComponent_ng_container_6_Template, 3, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap)("@state", ctx.visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTemplateRef(ctx.content));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isTemplateRef(ctx.content));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
  styles: [".mc-tooltip__inner{border-radius:3px;border-radius:var(--mc-tooltip-size-border-radius, 3px)}.mc-tooltip{box-sizing:border-box;border-radius:3px;border-radius:var(--mc-tooltip-size-border-radius, 3px);z-index:1060;white-space:pre-line}.mc-tooltip.mc-tooltip_placement-top,.mc-tooltip.mc-tooltip_placement-top-left,.mc-tooltip.mc-tooltip_placement-top-right{margin-bottom:calc(9px);margin-bottom:calc(var(--mc-tooltip-size-trigger-margin, 9px))}.mc-tooltip.mc-tooltip_placement-right,.mc-tooltip.mc-tooltip_placement-right-top,.mc-tooltip.mc-tooltip_placement-right-bottom{margin-left:calc(9px);margin-left:calc(var(--mc-tooltip-size-trigger-margin, 9px))}.mc-tooltip.mc-tooltip_placement-bottom,.mc-tooltip.mc-tooltip_placement-bottom-left,.mc-tooltip.mc-tooltip_placement-bottom-right{margin-top:calc(9px);margin-top:calc(var(--mc-tooltip-size-trigger-margin, 9px))}.mc-tooltip.mc-tooltip_placement-left,.mc-tooltip.mc-tooltip_placement-left-top,.mc-tooltip.mc-tooltip_placement-left-bottom{margin-right:calc(9px);margin-right:calc(var(--mc-tooltip-size-trigger-margin, 9px))}.mc-tooltip.mc-tooltip_default,.mc-tooltip.mc-tooltip_warning{max-width:300px;max-width:var(--mc-tooltip-size-max-width, 300px)}.mc-tooltip.mc-tooltip_default .mc-tooltip__inner,.mc-tooltip.mc-tooltip_warning .mc-tooltip__inner{padding:8px 16px;padding:var(--mc-tooltip-size-padding, 8px 16px)}.mc-tooltip.mc-tooltip_extended{max-height:480px;max-height:var(--mc-extended-tooltip-size-max-height, 480px)}.mc-tooltip.mc-tooltip_extended .mc-tooltip__header{height:40px;height:var(--mc-extended-tooltip-header-size-height, 40px);padding:10px 16px;padding:var(--mc-extended-tooltip-header-size-padding, 10px 16px);border-top-left-radius:3px;border-top-left-radius:var(--mc-tooltip-size-border-radius, 3px);border-top-right-radius:3px;border-top-right-radius:var(--mc-tooltip-size-border-radius, 3px)}.mc-tooltip.mc-tooltip_extended .mc-tooltip__content{padding:8px 16px;padding:var(--mc-extended-tooltip-size-padding, 8px 16px)}.mc-tooltip__arrow{position:absolute;width:12px;width:var(--mc-tooltip-size-arrow-size, 12px);height:12px;height:var(--mc-tooltip-size-arrow-size, 12px);transform:rotate(45deg)}.mc-tooltip_placement-top .mc-tooltip__arrow{bottom:calc((11px / -2));bottom:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));left:50%;margin-left:calc((11px / -2));margin-left:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)))}.mc-tooltip_placement-top-left .mc-tooltip__arrow{bottom:calc((11px / -2));bottom:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));left:calc(18px - (9px / 2));left:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-top-right .mc-tooltip__arrow{bottom:calc((11px / -2));bottom:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));right:calc(18px - (9px / 2));right:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-right .mc-tooltip__arrow{left:calc((11px / -2));left:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));top:50%;margin-top:calc((11px / -2));margin-top:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)))}.mc-tooltip_placement-right-top .mc-tooltip__arrow{left:calc((11px / -2));left:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));top:calc(18px - (9px / 2));top:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-right-bottom .mc-tooltip__arrow{left:calc((11px / -2));left:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));bottom:calc(18px - (9px / 2));bottom:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-left .mc-tooltip__arrow{right:calc((11px / -2));right:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));top:50%;margin-top:calc((11px / -2));margin-top:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)))}.mc-tooltip_placement-left-top .mc-tooltip__arrow{right:calc((11px / -2));right:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));top:calc(18px - (9px / 2));top:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-left-bottom .mc-tooltip__arrow{right:calc((11px / -2));right:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));bottom:calc(18px - (9px / 2));bottom:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-bottom .mc-tooltip__arrow{top:calc((11px / -2));top:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));left:50%;margin-left:calc((11px / -2));margin-left:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)))}.mc-tooltip_placement-bottom-left .mc-tooltip__arrow{top:calc((11px / -2));top:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));left:calc(18px - (9px / 2));left:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}.mc-tooltip_placement-bottom-right .mc-tooltip__arrow{top:calc((11px / -2));top:calc(var(--mc-tooltip-size-arrow-size, (11px / -2)));right:calc(18px - (9px / 2));right:calc(18px - (var(--mc-tooltip-size-trigger-margin, 9px) / 2))}\n"],
  encapsulation: 2,
  data: {
    animation: [mcTooltipAnimations.tooltipState]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tooltip-component',
      animations: [mcTooltipAnimations.tooltipState],
      templateUrl: './tooltip.component.html',
      styleUrls: ['./tooltip.scss'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [MC_TOOLTIP_OPEN_TIME_PROVIDER]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TOOLTIP_OPEN_TIME]
      }]
    }];
  }, null);
})();

const MC_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-tooltip-scroll-strategy');
/** @docs-private */

function mcTooltipScrollStrategyFactory(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: 20
  });
}
/** @docs-private */


const MC_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MC_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
  useFactory: mcTooltipScrollStrategyFactory
};

class McTooltipTrigger extends _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.McPopUpTrigger {
  constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
    super(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
    this.enterDelay = 400;
    this._trigger = `${_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Hover}, ${_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Focus}`;
    this.originSelector = '.mc-tooltip';
    this.overlayConfig = {
      panelClass: 'mc-tooltip-panel'
    };
    this.modifier = TooltipModifier.Default;
  }

  get content() {
    return this._content;
  }

  set content(content) {
    this._content = content;
    this.updateData();
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
  }

  get trigger() {
    return this._trigger;
  }

  set trigger(value) {
    if (value) {
      this._trigger = value;
    } else {
      this._trigger = `${_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Hover}, ${_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Focus}`;
    }

    this.initListeners();
  }

  get customClass() {
    return this._customClass;
  }

  set customClass(value) {
    if (value) {
      this._customClass = value;
      this.updateClassMap();
    } else {
      this._customClass = '';
    }
  }

  updateData() {
    if (!this.instance) {
      return;
    }

    this.instance.content = this.content;
  }

  closingActions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this.overlayRef.outsidePointerEvents(), this.overlayRef.detachments());
  }

  getOverlayHandleComponentType() {
    return McTooltipComponent;
  }

  updateClassMap(newPlacement = this.placement) {
    if (!this.instance) {
      return;
    }

    this.instance.updateClassMap(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.POSITION_TO_CSS_MAP[newPlacement], this.customClass, {
      modifier: this.modifier
    });
    this.instance.markForCheck();
  }

}
/** @nocollapse */


McTooltipTrigger.ɵfac = function McTooltipTrigger_Factory(t) {
  return new (t || McTooltipTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
};
/** @nocollapse */


McTooltipTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTooltipTrigger,
  selectors: [["", "mcTooltip", ""]],
  hostVars: 2,
  hostBindings: function McTooltipTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McTooltipTrigger_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("touchend", function McTooltipTrigger_touchend_HostBindingHandler() {
        return ctx.handleTouchend();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tooltip_open", ctx.isOpen);
    }
  },
  inputs: {
    content: ["mcTooltip", "content"],
    disabled: ["mcTooltipDisabled", "disabled"],
    enterDelay: ["mcEnterDelay", "enterDelay"],
    trigger: ["mcTrigger", "trigger"],
    customClass: ["mcTooltipClass", "customClass"]
  },
  exportAs: ["mcTooltip"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTooltipTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTooltip]',
      exportAs: 'mcTooltip',
      host: {
        '[class.mc-tooltip_open]': 'isOpen',
        '(keydown)': 'handleKeydown($event)',
        '(touchend)': 'handleTouchend()'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTooltip']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTooltipDisabled']
    }],
    enterDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcEnterDelay']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTrigger']
    }],
    customClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTooltipClass']
    }]
  });
})();

class McWarningTooltipTrigger extends McTooltipTrigger {
  constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
    super(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
    this.modifier = TooltipModifier.Warning;
  }

  get content() {
    return this._content;
  }

  set content(content) {
    this._content = content;
    this.updateData();
  }

}
/** @nocollapse */


McWarningTooltipTrigger.ɵfac = function McWarningTooltipTrigger_Factory(t) {
  return new (t || McWarningTooltipTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
};
/** @nocollapse */


McWarningTooltipTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McWarningTooltipTrigger,
  selectors: [["", "mcWarningTooltip", ""]],
  hostVars: 2,
  hostBindings: function McWarningTooltipTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McWarningTooltipTrigger_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("touchend", function McWarningTooltipTrigger_touchend_HostBindingHandler() {
        return ctx.handleTouchend();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tooltip_open", ctx.isOpen);
    }
  },
  inputs: {
    content: ["mcWarningTooltip", "content"]
  },
  exportAs: ["mcWarningTooltip"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McWarningTooltipTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcWarningTooltip]',
      exportAs: 'mcWarningTooltip',
      host: {
        '[class.mc-tooltip_open]': 'isOpen',
        '(keydown)': 'handleKeydown($event)',
        '(touchend)': 'handleTouchend()'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcWarningTooltip']
    }]
  });
})();

class McExtendedTooltipTrigger extends McTooltipTrigger {
  constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
    super(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
    this.modifier = TooltipModifier.Extended;
  }

  get content() {
    return this._content;
  }

  set content(content) {
    this._content = content;
    this.updateData();
  }

  get header() {
    return this._header;
  }

  set header(header) {
    this._header = header;
    this.updateData();
  }

  updateData() {
    if (!this.instance) {
      return;
    }

    super.updateData();
    this.instance.header = this.header;
  }

}
/** @nocollapse */


McExtendedTooltipTrigger.ɵfac = function McExtendedTooltipTrigger_Factory(t) {
  return new (t || McExtendedTooltipTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
};
/** @nocollapse */


McExtendedTooltipTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McExtendedTooltipTrigger,
  selectors: [["", "mcExtendedTooltip", ""]],
  hostVars: 2,
  hostBindings: function McExtendedTooltipTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McExtendedTooltipTrigger_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("touchend", function McExtendedTooltipTrigger_touchend_HostBindingHandler() {
        return ctx.handleTouchend();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-tooltip_open", ctx.isOpen);
    }
  },
  inputs: {
    content: ["mcExtendedTooltip", "content"],
    header: ["mcTooltipHeader", "header"]
  },
  exportAs: ["mcExtendedTooltip"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McExtendedTooltipTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcExtendedTooltip]',
      exportAs: 'mcExtendedTooltip',
      host: {
        '[class.mc-tooltip_open]': 'isOpen',
        '(keydown)': 'handleKeydown($event)',
        '(touchend)': 'handleTouchend()'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcExtendedTooltip']
    }],
    header: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTooltipHeader']
    }]
  });
})();

class McToolTipModule {}
/** @nocollapse */


McToolTipModule.ɵfac = function McToolTipModule_Factory(t) {
  return new (t || McToolTipModule)();
};
/** @nocollapse */


McToolTipModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McToolTipModule
});
/** @nocollapse */

McToolTipModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MC_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MC_TOOLTIP_OPEN_TIME_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McToolTipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [McTooltipComponent, McTooltipTrigger, McExtendedTooltipTrigger, McWarningTooltipTrigger],
      exports: [McTooltipComponent, McTooltipTrigger, McExtendedTooltipTrigger, McWarningTooltipTrigger],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule],
      providers: [MC_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MC_TOOLTIP_OPEN_TIME_PROVIDER],
      entryComponents: [McTooltipComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 19727:
/*!********************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-tree.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_SELECTION_TREE_VALUE_ACCESSOR": function() { return /* binding */ MC_SELECTION_TREE_VALUE_ACCESSOR; },
/* harmony export */   "MC_TREE_OPTION_PARENT_COMPONENT": function() { return /* binding */ MC_TREE_OPTION_PARENT_COMPONENT; },
/* harmony export */   "McTreeFlatDataSource": function() { return /* binding */ McTreeFlatDataSource; },
/* harmony export */   "McTreeFlattener": function() { return /* binding */ McTreeFlattener; },
/* harmony export */   "McTreeModule": function() { return /* binding */ McTreeModule; },
/* harmony export */   "McTreeNavigationChange": function() { return /* binding */ McTreeNavigationChange; },
/* harmony export */   "McTreeNestedDataSource": function() { return /* binding */ McTreeNestedDataSource; },
/* harmony export */   "McTreeNodeDef": function() { return /* binding */ McTreeNodeDef; },
/* harmony export */   "McTreeNodePadding": function() { return /* binding */ McTreeNodePadding; },
/* harmony export */   "McTreeNodeToggleComponent": function() { return /* binding */ McTreeNodeToggleComponent; },
/* harmony export */   "McTreeNodeToggleDirective": function() { return /* binding */ McTreeNodeToggleDirective; },
/* harmony export */   "McTreeOption": function() { return /* binding */ McTreeOption; },
/* harmony export */   "McTreeOptionChange": function() { return /* binding */ McTreeOptionChange; },
/* harmony export */   "McTreeSelection": function() { return /* binding */ McTreeSelection; },
/* harmony export */   "McTreeSelectionChange": function() { return /* binding */ McTreeSelectionChange; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/cdk/tree */ 32790);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 75428);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 32121);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 89919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/collections */ 62604);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ptsecurity/cdk/a11y */ 61729);
















function McTreeOption_mc_pseudo_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mc-pseudo-checkbox", 3);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}

const _c0 = [[["", "mc-icon", ""]], [["mc-tree-node-toggle"]], "*"];
const _c1 = ["[mc-icon]", "mc-tree-node-toggle", "*"];

class McTreeNodeDef extends _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef {}
/** @nocollapse */


McTreeNodeDef.ɵfac = /* @__PURE__ */function () {
  let ɵMcTreeNodeDef_BaseFactory;
  return function McTreeNodeDef_Factory(t) {
    return (ɵMcTreeNodeDef_BaseFactory || (ɵMcTreeNodeDef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](McTreeNodeDef)))(t || McTreeNodeDef);
  };
}();
/** @nocollapse */


McTreeNodeDef.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTreeNodeDef,
  selectors: [["", "mcTreeNodeDef", ""]],
  inputs: {
    when: ["mcTreeNodeDefWhen", "when"],
    data: ["mcTreeNode", "data"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef,
    useExisting: McTreeNodeDef
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeNodeDef, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTreeNodeDef]',
      inputs: ['when: mcTreeNodeDefWhen'],
      providers: [{
        provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeDef,
        useExisting: McTreeNodeDef
      }]
    }]
  }], null, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTreeNode']
    }]
  });
})();

class McTreeNodePadding extends _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding {
  constructor() {
    super(...arguments);
    this.baseLeftPadding = 12;
    this.iconWidth = 20;
  }

  get level() {
    return this._level;
  }

  set level(value) {
    this.setLevelInput(value);
  }

  get indent() {
    return this._indent;
  }

  set indent(indent) {
    this.setIndentInput(indent);
  }

  get leftPadding() {
    return (this.withIcon ? 0 : this.iconWidth) + this.baseLeftPadding;
  }

  paddingIndent() {
    const nodeLevel = this.treeNode.data && this.tree.treeControl.getLevel ? this.tree.treeControl.getLevel(this.treeNode.data) : 0;
    const level = this.level || nodeLevel;
    return level > 0 ? `${level * this._indent + this.leftPadding}px` : `${this.leftPadding}px`;
  }

  ngOnInit() {
    this.withIcon = this.tree.treeControl.isExpandable(this.treeNode.data);
    this.setPadding();
  }

}
/** @nocollapse */


McTreeNodePadding.ɵfac = /* @__PURE__ */function () {
  let ɵMcTreeNodePadding_BaseFactory;
  return function McTreeNodePadding_Factory(t) {
    return (ɵMcTreeNodePadding_BaseFactory || (ɵMcTreeNodePadding_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](McTreeNodePadding)))(t || McTreeNodePadding);
  };
}();
/** @nocollapse */


McTreeNodePadding.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTreeNodePadding,
  selectors: [["", "mcTreeNodePadding", ""]],
  inputs: {
    level: ["mcTreeNodePadding", "level"],
    indent: ["mcTreeNodePaddingIndent", "indent"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding,
    useExisting: McTreeNodePadding
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeNodePadding, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTreeNodePadding]',
      providers: [{
        provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodePadding,
        useExisting: McTreeNodePadding
      }]
    }]
  }], null, {
    level: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTreeNodePadding']
    }],
    indent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcTreeNodePaddingIndent']
    }]
  });
})();

class McTreeNodeToggleComponent {
  constructor(tree, treeNode) {
    this.tree = tree;
    this.treeNode = treeNode;
    this.disabled = false;
    this._recursive = false;
    this.tree.treeControl.filterValue.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(value => (value === null || value === void 0 ? void 0 : value.length) > 0)).subscribe(state => this.disabled = state);
  }

  get recursive() {
    return this._recursive;
  }

  set recursive(value) {
    this._recursive = value;
  }

  get iconState() {
    return this.disabled || this.tree.treeControl.isExpanded(this.node);
  }

  toggle(event) {
    this.recursive ? this.tree.treeControl.toggleDescendants(this.treeNode.data) : this.tree.treeControl.toggle(this.treeNode.data);
    event.stopPropagation();
  }

}
/** @nocollapse */


McTreeNodeToggleComponent.ɵfac = function McTreeNodeToggleComponent_Factory(t) {
  return new (t || McTreeNodeToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode));
};
/** @nocollapse */


McTreeNodeToggleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTreeNodeToggleComponent,
  selectors: [["mc-tree-node-toggle"]],
  hostAttrs: [1, "mc-tree-node-toggle"],
  hostVars: 3,
  hostBindings: function McTreeNodeToggleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McTreeNodeToggleComponent_click_HostBindingHandler($event) {
        return ctx.toggle($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-opened", ctx.iconState);
    }
  },
  inputs: {
    node: "node",
    recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
  },
  decls: 1,
  vars: 0,
  consts: [[1, "mc", "mc-icon", "mc-angle-down-S_16"]],
  template: function McTreeNodeToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 0);
    }
  },
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeNodeToggleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tree-node-toggle',
      template: `
        <i class="mc mc-icon mc-angle-down-S_16"></i>
    `,
      host: {
        class: 'mc-tree-node-toggle',
        '[class.mc-opened]': 'iconState',
        '[attr.disabled]': 'disabled || null',
        '(click)': 'toggle($event)'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
    }, {
      type: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode
    }];
  }, {
    node: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    recursive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTreeNodeToggleRecursive']
    }]
  });
})();

class McTreeNodeToggleDirective {
  constructor(tree, treeNode) {
    this.tree = tree;
    this.treeNode = treeNode;
    this.disabled = false;
    this._recursive = false;
    this.tree.treeControl.filterValue.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(value => value.length > 0)).subscribe(state => this.disabled = state);
  }

  get recursive() {
    return this._recursive;
  }

  set recursive(value) {
    this._recursive = value;
  }

  toggle(event) {
    this.recursive ? this.tree.treeControl.toggleDescendants(this.treeNode.data) : this.tree.treeControl.toggle(this.treeNode.data);
    event.stopPropagation();
  }

}
/** @nocollapse */


McTreeNodeToggleDirective.ɵfac = function McTreeNodeToggleDirective_Factory(t) {
  return new (t || McTreeNodeToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode));
};
/** @nocollapse */


McTreeNodeToggleDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTreeNodeToggleDirective,
  selectors: [["", "mcTreeNodeToggle", ""]],
  hostVars: 1,
  hostBindings: function McTreeNodeToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McTreeNodeToggleDirective_click_HostBindingHandler($event) {
        return ctx.toggle($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);
    }
  },
  inputs: {
    recursive: ["cdkTreeNodeToggleRecursive", "recursive"]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeNodeToggleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcTreeNodeToggle]',
      host: {
        '[attr.disabled]': 'disabled || null',
        '(click)': 'toggle($event)'
      }
    }]
  }], function () {
    return [{
      type: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree
    }, {
      type: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode
    }];
  }, {
    recursive: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTreeNodeToggleRecursive']
    }]
  });
})();
/**
 * Injection token used to provide the parent component to options.
 */


const MC_TREE_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MC_TREE_OPTION_PARENT_COMPONENT');

class McTreeOptionChange {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }

}

let uniqueIdCounter = 0;

class McTreeOption extends _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode {
  constructor(elementRef, changeDetectorRef, ngZone, tree) {
    super(elementRef, tree);
    this.changeDetectorRef = changeDetectorRef;
    this.ngZone = ngZone;
    this.tree = tree;
    this.onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._disabled = false;
    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._selected = false;
    this._id = `mc-tree-option-${uniqueIdCounter++}`;
    this.hasFocus = false;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get disabled() {
    return this._disabled || this.tree && this.tree.disabled;
  }

  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;
    }
  }

  get showCheckbox() {
    return this._showCheckbox !== undefined ? this._showCheckbox : this.tree.showCheckbox;
  }

  set showCheckbox(value) {
    this._showCheckbox = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }

  get selected() {
    return this._selected;
  }

  set selected(value) {
    const isSelected = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

    if (isSelected !== this._selected) {
      this.setSelected(isSelected);
    }
  }

  get id() {
    return this._id;
  }

  get multiple() {
    return this.tree.multiple;
  }

  get viewValue() {
    // TODO: Add input property alternative for node envs.
    return (this.getHostElement().textContent || '').trim();
  }

  ngAfterContentInit() {
    this.value = this.tree.treeControl.getValue(this.data);
  }

  toggle() {
    this.selected = !this.selected;
  }

  setSelected(selected) {
    if (this._selected === selected || !this.tree.selectionModel) {
      return;
    }

    this._selected = selected;

    if (selected) {
      this.tree.selectionModel.select(this.data);
    } else {
      this.tree.selectionModel.deselect(this.data);
    }

    this.changeDetectorRef.markForCheck();
  }

  focus(focusOrigin) {
    if (focusOrigin === 'program') {
      return;
    }

    if (this.disabled || this.hasFocus) {
      return;
    }

    this.elementRef.nativeElement.focus();
    this.onFocus.next({
      option: this
    });
    Promise.resolve().then(() => {
      this.hasFocus = true;
      this.changeDetectorRef.markForCheck();
    });
  }

  blur() {
    // When animations are enabled, Angular may end up removing the option from the DOM a little
    // earlier than usual, causing it to be blurred and throwing off the logic in the tree
    // that moves focus not the next item. To work around the issue, we defer marking the option
    // as not focused until the next time the zone stabilizes.
    this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(() => {
      this.ngZone.run(() => {
        this.hasFocus = false;
        this.onBlur.next({
          option: this
        });
      });
    });
  }

  getHeight() {
    const clientRects = this.elementRef.nativeElement.getClientRects();

    if (clientRects.length) {
      return clientRects[0].height;
    }

    return 0;
  }

  select() {
    if (!this._selected) {
      this._selected = true;
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent();
    }
  }

  deselect() {
    if (this._selected) {
      this._selected = false;
      this.changeDetectorRef.markForCheck();
    }
  }

  selectViaInteraction($event) {
    if (!this.disabled) {
      this.changeDetectorRef.markForCheck();
      this.emitSelectionChangeEvent(true);
      const shiftKey = $event ? (0,_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)($event, 'shiftKey') : false;
      const ctrlKey = $event ? (0,_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)($event, 'ctrlKey') : false;
      this.tree.setSelectedOptionsByClick(this, shiftKey, ctrlKey);
    }
  }

  emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new McTreeOptionChange(this, isUserInput));
  }

  getHostElement() {
    return this.elementRef.nativeElement;
  }

  markForCheck() {
    this.changeDetectorRef.markForCheck();
  }

}
/** @nocollapse */


McTreeOption.ɵfac = function McTreeOption_Factory(t) {
  return new (t || McTreeOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TREE_OPTION_PARENT_COMPONENT));
};
/** @nocollapse */


McTreeOption.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTreeOption,
  selectors: [["mc-tree-option"]],
  hostAttrs: [1, "mc-tree-option"],
  hostVars: 7,
  hostBindings: function McTreeOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function McTreeOption_focusin_HostBindingHandler() {
        return ctx.focus();
      })("blur", function McTreeOption_blur_HostBindingHandler() {
        return ctx.blur();
      })("click", function McTreeOption_click_HostBindingHandler($event) {
        return ctx.selectViaInteraction($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", -1)("disabled", ctx.disabled || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-selected", ctx.selected)("mc-focused", ctx.hasFocus);
    }
  },
  inputs: {
    disabled: "disabled",
    showCheckbox: "showCheckbox"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  },
  exportAs: ["mcTreeOption"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
    useExisting: McTreeOption
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 6,
  vars: 1,
  consts: [[3, "state", "disabled", 4, "ngIf"], [1, "mc-option-text", "mc-no-select"], [1, "mc-option-overlay"], [3, "state", "disabled"]],
  template: function McTreeOption_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McTreeOption_mc_pseudo_checkbox_2_Template, 1, 2, "mc-pseudo-checkbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCheckbox);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.McPseudoCheckbox],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tree-option',
      exportAs: 'mcTreeOption',
      templateUrl: './tree-option.html',
      host: {
        '[attr.id]': 'id',
        '[attr.tabindex]': '-1',
        '[attr.disabled]': 'disabled || null',
        class: 'mc-tree-option',
        '[class.mc-selected]': 'selected',
        '[class.mc-focused]': 'hasFocus',
        '(focusin)': 'focus()',
        '(blur)': 'blur()',
        '(click)': 'selectViaInteraction($event)'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      providers: [{
        provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNode,
        useExisting: McTreeOption
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_TREE_OPTION_PARENT_COMPONENT]
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showCheckbox: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/* tslint:disable:no-empty */


const MC_SELECTION_TREE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McTreeSelection),
  multi: true
};

class McTreeNavigationChange {
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }

}

class McTreeSelectionChange {
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }

}

class McTreeSelection extends _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree {
  constructor(elementRef, differs, changeDetectorRef, multiple) {
    super(differs, changeDetectorRef);
    this.elementRef = elementRef;
    this.renderedOptions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
    this.resetFocusedItemOnBlur = true;
    this.navigationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.multipleMode = null;
    this.userTabIndex = null;
    this.sortedNodes = [];
    this._autoSelect = true;
    this._noUnselectLast = true;
    this._disabled = false;
    this._tabIndex = 0;
    this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** `View -> model callback called when value changes` */

    this.onChange = () => {};
    /** `View -> model callback called when select has been touched` */


    this.onTouched = () => {};

    this.updateRenderedOptions = () => {
      const orderedOptions = [];
      this.sortedNodes.forEach(node => {
        const found = this.unorderedOptions.find(option => option.value === this.treeControl.getValue(node));

        if (found) {
          orderedOptions.push(found);
        }
      });
      this.renderedOptions.reset(orderedOptions);
      this.renderedOptions.notifyOnChanges();
    };

    if (multiple === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.MultipleMode.CHECKBOX || multiple === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.MultipleMode.KEYBOARD) {
      this.multipleMode = multiple;
    } else if (multiple !== null) {
      this.multipleMode = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.MultipleMode.CHECKBOX;
    }

    if (this.multipleMode === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.MultipleMode.CHECKBOX) {
      this.autoSelect = false;
      this.noUnselectLast = false;
    }

    this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.SelectionModel(this.multiple);
  }

  get autoSelect() {
    return this._autoSelect;
  }

  set autoSelect(value) {
    this._autoSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }

  get optionFocusChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...this.renderedOptions.map(option => option.onFocus));
  }

  get optionBlurChanges() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...this.renderedOptions.map(option => option.onBlur));
  }

  get multiple() {
    return !!this.multipleMode;
  }

  get noUnselectLast() {
    return this._noUnselectLast;
  }

  set noUnselectLast(value) {
    this._noUnselectLast = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(rawValue) {
    const value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(rawValue);

    if (this._disabled !== value) {
      this._disabled = value;
      this.markOptionsForCheck();
    }
  }

  get tabIndex() {
    return this.disabled ? -1 : this._tabIndex;
  }

  set tabIndex(value) {
    this._tabIndex = value;
    this.userTabIndex = value;
  }

  get showCheckbox() {
    return this.multipleMode === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.MultipleMode.CHECKBOX;
  }

  ngAfterContentInit() {
    this.unorderedOptions.changes.subscribe(this.updateRenderedOptions);
    this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.FocusKeyManager(this.renderedOptions).withVerticalOrientation(true).withHorizontalOrientation(null);
    this.keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy)).subscribe(() => {
      if (this.keyManager.activeItem) {
        this.emitNavigationEvent(this.keyManager.activeItem); // todo need check this logic

        if (this.autoSelect && !this.keyManager.activeItem.disabled) {
          this.updateOptionsFocus();
        }
      }
    });
    this.keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy)).subscribe(() => this.allowFocusEscape());
    this.selectionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy)).subscribe(() => {
      this.onChange(this.getSelectedValues());
      this.renderedOptions.notifyOnChanges();
    });
    this.renderedOptions.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.delay)(0)).subscribe(options => {
      this.resetOptions(); // Check to see if we need to update our tab index

      this.updateTabIndex();
      options.forEach(option => {
        if (this.getSelectedValues().includes(option.value)) {
          option.select();
        } else {
          option.deselect();
        }

        option.markForCheck();
      });
    });
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  focus($event) {
    if (this.renderedOptions.length === 0 || this.isFocusReceivedFromNestedOption($event)) {
      return;
    }

    this.keyManager.setFirstItemActive();
  }

  blur() {
    if (!this.hasFocusedOption() && this.resetFocusedItemOnBlur) {
      this.keyManager.setActiveItem(-1);
    }

    this.onTouched();
    this.changeDetectorRef.markForCheck();
  }

  onKeyDown(event) {
    this.keyManager.setFocusOrigin('keyboard'); // tslint:disable-next-line: deprecation

    const keyCode = event.keyCode;

    switch (keyCode) {
      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.DOWN_ARROW:
        this.keyManager.setNextItemActive();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.UP_ARROW:
        this.keyManager.setPreviousItemActive();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.LEFT_ARROW:
        if (this.keyManager.activeItem) {
          this.treeControl.collapse(this.keyManager.activeItem.data);
        }

        event.preventDefault();
        return;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.RIGHT_ARROW:
        if (this.keyManager.activeItem) {
          this.treeControl.expand(this.keyManager.activeItem.data);
        }

        event.preventDefault();
        return;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.SPACE:
      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.ENTER:
        this.toggleFocusedOption();
        event.preventDefault();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.HOME:
        this.keyManager.setFirstItemActive();
        event.preventDefault();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.END:
        this.keyManager.setLastItemActive();
        event.preventDefault();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_UP:
        this.keyManager.setPreviousPageItemActive();
        event.preventDefault();
        break;

      case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_DOWN:
        this.keyManager.setNextPageItemActive();
        event.preventDefault();
        break;

      default:
        return;
    }

    if (this.keyManager.activeItem) {
      this.setSelectedOptionsByKey(this.keyManager.activeItem, (0,_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event, 'shiftKey'), (0,_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event, 'ctrlKey'));
    }
  }

  updateScrollSize() {
    if (!this.renderedOptions.first) {
      return;
    }

    this.keyManager.withScrollSize(Math.floor(this.getHeight() / this.renderedOptions.first.getHeight()));
  }

  setSelectedOptionsByKey(option, shiftKey, ctrlKey) {
    if (shiftKey && this.multiple) {
      this.setSelectedOptions(option);
      this.emitChangeEvent(option);
    } else if (ctrlKey) {
      if (!this.canDeselectLast(option)) {
        return;
      }
    } else if (this.autoSelect) {
      this.selectionModel.clear();
      this.selectionModel.toggle(option.data);
      this.emitChangeEvent(option);
    }
  }

  setSelectedOptionsByClick(option, shiftKey, ctrlKey) {
    if (!shiftKey && !ctrlKey) {
      this.keyManager.setActiveItem(option);
    }

    if (shiftKey && this.multiple) {
      this.setSelectedOptions(option);
    } else if (ctrlKey) {
      if (!this.canDeselectLast(option)) {
        return;
      }

      this.selectionModel.toggle(option.data);
    } else if (this.autoSelect) {
      this.selectionModel.clear();
      this.selectionModel.toggle(option.data);
    } else {
      this.selectionModel.toggle(option.data);
    }

    this.emitChangeEvent(option);
  }

  setSelectedOptions(option) {
    const selectedOptionState = option.selected;
    let fromIndex = this.keyManager.previousActiveItemIndex;
    let toIndex = this.keyManager.previousActiveItemIndex = this.keyManager.activeItemIndex;

    if (toIndex === fromIndex) {
      return;
    }

    if (fromIndex > toIndex) {
      [fromIndex, toIndex] = [toIndex, fromIndex];
    }

    this.renderedOptions.toArray().slice(fromIndex, toIndex + 1).filter(item => !item.disabled).forEach(renderedOption => {
      const isLastRenderedOption = renderedOption === this.keyManager.activeItem;

      if (isLastRenderedOption && renderedOption.selected && this.noUnselectLast) {
        return;
      }

      renderedOption.setSelected(!selectedOptionState);
    });
  }

  setFocusedOption(option) {
    this.keyManager.setActiveItem(option);
  }

  toggleFocusedOption() {
    const focusedOption = this.keyManager.activeItem;

    if (focusedOption && (!focusedOption.selected || this.canDeselectLast(focusedOption))) {
      focusedOption.toggle();
      this.emitChangeEvent(focusedOption);
    }
  }

  renderNodeChanges(data, dataDiffer = this.dataDiffer, viewContainer = this.nodeOutlet.viewContainer, parentData) {
    super.renderNodeChanges(data, dataDiffer, viewContainer, parentData);
    this.sortedNodes = this.getSortedNodes(viewContainer);
    this.updateScrollSize();
    this.nodeOutlet.changeDetectorRef.detectChanges();
  }

  getHeight() {
    const clientRects = this.elementRef.nativeElement.getClientRects();

    if (clientRects.length) {
      return clientRects[0].height;
    }

    return 0;
  }

  getItemHeight() {
    return this.renderedOptions.first ? this.renderedOptions.first.getHeight() : 0;
  }

  emitNavigationEvent(option) {
    this.navigationChange.emit(new McTreeNavigationChange(this, option));
  }

  emitChangeEvent(option) {
    this.selectionChange.emit(new McTreeNavigationChange(this, option));
  }

  writeValue(value) {
    if (this.multiple && value && !Array.isArray(value)) {
      throw (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.getMcSelectNonArrayValueError)();
    }

    if (value) {
      this.setOptionsFromValues(this.multiple ? value : [value]);
    } else {
      this.selectionModel.clear();
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   */


  setDisabledState(isDisabled) {
    this._disabled = isDisabled;
    this.changeDetectorRef.markForCheck();
  }

  setOptionsFromValues(values) {
    this.selectionModel.clear();
    const valuesToSelect = values.reduce((result, value) => {
      return this.treeControl.hasValue(value) ? [...result, this.treeControl.hasValue(value)] : [...result];
    }, []);
    this.selectionModel.select(...valuesToSelect);
  }

  getSelectedValues() {
    return this.selectionModel.selected.map(selected => this.treeControl.getValue(selected));
  }

  updateTabIndex() {
    this._tabIndex = this.renderedOptions.length === 0 ? -1 : 0;
  }

  getSortedNodes(viewContainer) {
    const array = [];

    for (let i = 0; i < viewContainer.length; i++) {
      const viewRef = viewContainer.get(i);
      array.push(viewRef.context.$implicit);
    }

    return array;
  }

  allowFocusEscape() {
    if (this._tabIndex !== -1) {
      this._tabIndex = -1;
      setTimeout(() => {
        this._tabIndex = this.userTabIndex || 0;
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  resetOptions() {
    this.dropSubscriptions();
    this.listenToOptionsFocus();
  }

  dropSubscriptions() {
    if (this.optionFocusSubscription) {
      this.optionFocusSubscription.unsubscribe();
      this.optionFocusSubscription = null;
    }

    if (this.optionBlurSubscription) {
      this.optionBlurSubscription.unsubscribe();
      this.optionBlurSubscription = null;
    }
  }

  listenToOptionsFocus() {
    this.optionFocusSubscription = this.optionFocusChanges.subscribe(event => {
      const index = this.renderedOptions.toArray().indexOf(event.option);
      this.renderedOptions.filter(option => option.hasFocus).forEach(option => option.hasFocus = false);

      if (this.isValidIndex(index)) {
        this.keyManager.updateActiveItem(index);
      }
    });
    this.optionBlurSubscription = this.optionBlurChanges.subscribe(() => this.blur());
  }
  /**
   * Utility to ensure all indexes are valid.
   * @param index The index to be checked.
   * @returns True if the index is valid for our list of options.
   */


  isValidIndex(index) {
    return index >= 0 && index < this.renderedOptions.length;
  }
  /** Checks whether any of the options is focused. */


  hasFocusedOption() {
    return this.renderedOptions.some(option => option.hasFocus);
  }

  markOptionsForCheck() {
    this.renderedOptions.forEach(option => option.markForCheck());
  }

  updateOptionsFocus() {
    this.renderedOptions.filter(option => option.hasFocus).forEach(option => option.hasFocus = false);
  }

  canDeselectLast(option) {
    return !(this.noUnselectLast && this.selectionModel.selected.length === 1 && option.selected);
  }

  isFocusReceivedFromNestedOption($event) {
    if (!$event || !$event.relatedTarget) {
      return false;
    }

    return $event.relatedTarget.classList.contains('mc-tree-option');
  }

}
/** @nocollapse */


McTreeSelection.ɵfac = function McTreeSelection_Factory(t) {
  return new (t || McTreeSelection)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('multiple'));
};
/** @nocollapse */


McTreeSelection.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McTreeSelection,
  selectors: [["mc-tree-selection"]],
  contentQueries: function McTreeSelection_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McTreeOption, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.unorderedOptions = _t);
    }
  },
  viewQuery: function McTreeSelection_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nodeOutlet = _t.first);
    }
  },
  hostAttrs: [1, "mc-tree-selection"],
  hostVars: 2,
  hostBindings: function McTreeSelection_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function McTreeSelection_blur_HostBindingHandler() {
        return ctx.blur();
      })("focus", function McTreeSelection_focus_HostBindingHandler($event) {
        return ctx.focus($event);
      })("keydown", function McTreeSelection_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("resize", function McTreeSelection_resize_HostBindingHandler() {
        return ctx.updateScrollSize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
    }
  },
  inputs: {
    treeControl: "treeControl",
    autoSelect: "autoSelect",
    noUnselectLast: "noUnselectLast",
    disabled: "disabled",
    tabIndex: "tabIndex"
  },
  outputs: {
    navigationChange: "navigationChange",
    selectionChange: "selectionChange"
  },
  exportAs: ["mcTreeSelection"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MC_SELECTION_TREE_VALUE_ACCESSOR, {
    provide: MC_TREE_OPTION_PARENT_COMPONENT,
    useExisting: McTreeSelection
  }, {
    provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree,
    useExisting: McTreeSelection
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 0,
  consts: [["cdkTreeNodeOutlet", ""]],
  template: function McTreeSelection_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 0);
    }
  },
  directives: [_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet],
  styles: [".mc-tree-selection{display:block}.mc-tree-option{display:flex;align-items:center;padding-right:16px;padding-right:var(--mc-tree-size-padding-right, 16px);height:28px;height:var(--mc-tree-size-node-height, 28px);word-wrap:break-word;border:2px solid transparent;border:var(--mc-tree-size-border-width, 2px) solid transparent}.mc-tree-option>.mc-icon{margin-right:4px;cursor:pointer}.mc-tree-option:focus{outline:none}.mc-tree-option:not([disabled]){cursor:pointer}.mc-tree-option .mc-pseudo-checkbox{margin-right:8px}.mc-tree-node-toggle{margin-right:4px;cursor:pointer}.mc-tree-node-toggle .mc-icon{transform:rotate(-90deg)}.mc-tree-node-toggle.mc-opened .mc-icon{transform:rotate(0)}.mc-tree-node-toggle[disabled]{cursor:default}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeSelection, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-tree-selection',
      exportAs: 'mcTreeSelection',
      template: '<ng-container cdkTreeNodeOutlet></ng-container>',
      styleUrls: ['./tree.scss'],
      host: {
        class: 'mc-tree-selection',
        '[attr.tabindex]': 'tabIndex',
        '[attr.disabled]': 'disabled || null',
        '(blur)': 'blur()',
        '(focus)': 'focus($event)',
        '(keydown)': 'onKeyDown($event)',
        '(window:resize)': 'updateScrollSize()'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [MC_SELECTION_TREE_VALUE_ACCESSOR, {
        provide: MC_TREE_OPTION_PARENT_COMPONENT,
        useExisting: McTreeSelection
      }, {
        provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTree,
        useExisting: McTreeSelection
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.MultipleMode,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['multiple']
      }]
    }];
  }, {
    nodeOutlet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    unorderedOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [McTreeOption]
    }],
    treeControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    navigationChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    autoSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    noUnselectLast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const MC_TREE_DIRECTIVES = [McTreeSelection, McTreeOption, McTreeNodeDef, McTreeNodePadding, McTreeNodeToggleComponent, McTreeNodeToggleDirective];

class McTreeModule {}
/** @nocollapse */


McTreeModule.ɵfac = function McTreeModule_Factory(t) {
  return new (t || McTreeModule)();
};
/** @nocollapse */


McTreeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McTreeModule
});
/** @nocollapse */

McTreeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.McPseudoCheckboxModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTreeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_1__.CdkTreeModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__.McPseudoCheckboxModule],
      exports: MC_TREE_DIRECTIVES,
      declarations: MC_TREE_DIRECTIVES
    }]
  }], null, null);
})();
/**
 * Tree flattener to convert a normal type of node to node with children & level information.
 * Transform nested nodes of type `T` to flattened nodes of type `F`.
 *
 * For example, the input data of type `T` is nested, and contains its children data:
 *   SomeNode: {
 *     key: 'Fruits',
 *     children: [
 *       NodeOne: {
 *         key: 'Apple',
 *       },
 *       NodeTwo: {
 *        key: 'Pear',
 *      }
 *    ]
 *  }
 *  After flattener flatten the tree, the structure will become
 *  SomeNode: {
 *    key: 'Fruits',
 *    expandable: true,
 *    level: 1
 *  },
 *  NodeOne: {
 *    key: 'Apple',
 *    expandable: false,
 *    level: 2
 *  },
 *  NodeTwo: {
 *   key: 'Pear',
 *   expandable: false,
 *   level: 2
 * }
 * and the output flattened type is `F` with additional information.
 */


class McTreeFlattener {
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }

  flattenNode(node, level, resultNodes, parent) {
    const flatNode = this.transformFunction(node, level, parent);
    resultNodes.push(flatNode);

    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);

      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this.flattenChildren(childrenNodes, level, resultNodes, flatNode);
        } else {
          childrenNodes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1)).subscribe(children => {
            this.flattenChildren(children, level, resultNodes, flatNode);
          });
        }
      }
    }

    return resultNodes;
  }

  flattenChildren(children, level, resultNodes, parent) {
    children.forEach(child => {
      this.flattenNode(child, level + 1, resultNodes, parent);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */


  flattenNodes(structuredData) {
    const resultNodes = [];
    structuredData.forEach(node => this.flattenNode(node, 0, resultNodes, null));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */


  expandFlattenedNodes(nodes, treeControl) {
    const results = [];
    const currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach(node => {
      let expand = true;

      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }

      if (expand) {
        results.push(node);
      }

      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }

}

var McTreeDataSourceChangeTypes;

(function (McTreeDataSourceChangeTypes) {
  McTreeDataSourceChangeTypes["Expansion"] = "expansion";
  McTreeDataSourceChangeTypes["Filter"] = "filter";
})(McTreeDataSourceChangeTypes || (McTreeDataSourceChangeTypes = {}));
/**
 * Data source for flat tree.
 * The data source need to handle expansion/collapsion of the tree node and change the data feed
 * to `McTree`.
 * The nested tree nodes of type `T` are flattened through `MсTreeFlattener`, and converted
 * to type `F` for `McTree` to consume.
 */


class McTreeFlatDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.DataSource {
  constructor(treeControl, treeFlattener, initialData = []) {
    super();
    this.treeControl = treeControl;
    this.treeFlattener = treeFlattener;
    this.flattenedData = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.expandedData = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this.filteredData = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(initialData);
  }

  get data() {
    return this._data.value;
  }

  set data(value) {
    this._data.next(value);

    this.flattenedData.next(this.treeFlattener.flattenNodes(this.data));
    this.treeControl.dataNodes = this.flattenedData.value;
  }

  connect(collectionViewer) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(collectionViewer.viewChange, this.treeControl.expansionModel.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(value => ({
      type: McTreeDataSourceChangeTypes.Expansion,
      value
    }))), this.treeControl.filterValue.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(value => ({
      type: McTreeDataSourceChangeTypes.Filter,
      value
    }))), this.flattenedData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(changeObj => {
      if (changeObj.type === McTreeDataSourceChangeTypes.Filter) {
        if (changeObj.value && changeObj.value.length > 0) {
          return this.filterHandler();
        } else {
          return this.expansionHandler();
        }
      }

      return this.expansionHandler();
    }));
  }

  filterHandler() {
    this.filteredData.next(this.treeControl.filterModel.selected);
    return this.filteredData.value;
  }

  expansionHandler() {
    const expandedNodes = this.treeFlattener.expandFlattenedNodes(this.flattenedData.value, this.treeControl);
    this.expandedData.next(expandedNodes);
    return this.expandedData.value;
  }

  disconnect() {// no op
  }

}
/**
 * Data source for nested tree.
 *
 * The data source for nested tree doesn't have to consider node flattener, or the way to expand
 * or collapse. The expansion/collapsion will be handled by TreeControl and each non-leaf node.
 */


class McTreeNestedDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__.DataSource {
  constructor() {
    super(...arguments);
    /* tslint:disable-next-line:naming-convention */

    this._data = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
  }

  get data() {
    return this._data.value;
  }

  set data(value) {
    this._data.next(value);
  }

  connect(collectionViewer) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.merge)(...[collectionViewer.viewChange, this._data]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => this.data));
  }

  disconnect() {// no op
  }

}
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 3043:
/*!***********************************************************************!*\
  !*** ./packages/docs/src/app/components/anchors/anchors.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnchorsComponent": function() { return /* binding */ AnchorsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 82516);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 80639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);








const _c0 = function (a0) { return [a0]; };
function AnchorsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnchorsComponent_div_3_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setFragment(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const anchor_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("anchors-menu__list-element ", ctx_r0.anchors[i_r2].active ? ctx_r0.activeClass : null, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", anchor_r1.href);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.pathName));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](anchor_r1.name);
} }
class AnchorsComponent {
    constructor(router, route, element, ref, document) {
        this.router = router;
        this.route = route;
        this.element = element;
        this.ref = ref;
        this.document = document;
        this.anchors = [];
        this.headerSelectors = '.mc-display-3.title, .docs-header-link_3';
        this.click = false;
        this.headerHeight = 64;
        // coef for calculating the distance between anchor and header when scrolling (== headerHeight * anchorHeaderCoef)
        this.anchorHeaderCoef = 2;
        this.noSmoothScrollDebounce = 10;
        this.debounceTime = 15;
        this.activeClass = 'anchors-menu__list-element_active';
        this.fragment = '';
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.isSmoothScrollSupported = 'scrollBehavior' in this.document.documentElement.style;
        if (!this.isSmoothScrollSupported) {
            this.debounceTime = this.noSmoothScrollDebounce;
        }
        this.currentUrl = router.url.split('#')[0];
        localStorage.setItem('PT_nextRoute', this.currentUrl);
        this.container = '.anchors-menu';
        this.pathName = this.router.url;
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed)).subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                const rootUrl = router.url.split('#')[0];
                if (rootUrl !== this.currentUrl) {
                    localStorage.setItem('PT_nextRoute', rootUrl);
                    this.currentUrl = rootUrl;
                    this.pathName = this.router.url;
                }
            }
        });
    }
    ngOnInit() {
        // attached to anchor's change in the address bar manually or by clicking on the anchor
        this.route.fragment.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed)).subscribe((fragment) => {
            this.fragment = fragment;
            const index = this.getAnchorIndex(fragment);
            if (index) {
                this.setFragment(index);
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }
    getAnchorIndex(urlFragment) {
        let index = 0;
        this.anchors.forEach((anchor, i) => {
            if (anchor.href === `${urlFragment}`) {
                index = i;
            }
        });
        return index;
    }
    setScrollPosition() {
        this.anchors = this.createAnchors();
        this.scrollContainer = this.document || window;
        const target = this.document.getElementById(this.fragment);
        if (target) {
            const index = this.getAnchorIndex(this.fragment);
            if (index) {
                this.setFragment(index);
            }
            target.scrollTop += this.headerHeight;
            target.scrollIntoView();
        }
        if (this.scrollContainer) {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollContainer, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.takeUntil)(this.destroyed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.debounceTime))
                .subscribe(() => this.onScroll());
        }
        this.ref.detectChanges();
    }
    /* TODO Техдолг: при изменении ширины экрана должен переопределяться параметр top
    *   делать это по window:resize нельзя, т.к. изменение ширины контента страницы проиходит после window:resize */
    onResize() {
        const headers = Array.from(this.document.querySelectorAll(this.headerSelectors));
        for (let i = 0; i < this.anchors.length; i++) {
            const { top } = headers[i].getBoundingClientRect();
            this.anchors[i].top = top;
        }
        this.ref.detectChanges();
    }
    getScrollOffset() {
        return window.pageYOffset + this.headerHeight * this.anchorHeaderCoef;
    }
    isScrolledToEnd() {
        const documentHeight = this.document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop;
        const clientHeight = this.document.documentElement.clientHeight;
        const scrollHeight = scrollTop + clientHeight;
        // scrollHeight should be strictly equal to documentHeight, but in Edge it is slightly larger
        return scrollHeight >= documentHeight;
    }
    createAnchors() {
        const anchors = [];
        const headers = Array.from(this.document.querySelectorAll(this.headerSelectors));
        if (headers.length) {
            const bodyTop = this.document.body.getBoundingClientRect().top;
            for (let i = 0; i < headers.length; i++) {
                const name = headers[i].innerText.trim();
                const anchorHeader = headers[i].querySelector('span');
                const href = anchorHeader ? `${anchorHeader.id}` : '';
                const top = headers[i].getBoundingClientRect().top - bodyTop + this.headerHeight;
                anchors.push({
                    href,
                    name,
                    active: i === 0,
                    top
                });
            }
        }
        if (anchors.length) {
            anchors[0].top = this.headerHeight;
        }
        return anchors;
    }
    onScroll() {
        if (this.isScrolledToEnd()) {
            this.setActiveAnchor(this.anchors.length - 1);
            this.ref.detectChanges();
            return;
        }
        for (let i = 0; i < this.anchors.length; i++) {
            if (this.isLinkActive(this.anchors[i], this.anchors[i + 1])) {
                this.setActiveAnchor(i);
            }
        }
        this.ref.detectChanges();
    }
    isLinkActive(currentLink, nextLink) {
        // A link is active if the scroll position is lower than the anchor position + headerHeight*anchorHeaderCoef
        // and above the next anchor
        const scrollOffset = this.getScrollOffset();
        return scrollOffset >= currentLink.top && !(nextLink && nextLink.top < scrollOffset);
    }
    setFragment(index) {
        if (this.isScrolledToEnd()) {
            this.setActiveAnchor(this.anchors.length - 1);
            return;
        }
        this.click = true;
        this.setActiveAnchor(index);
    }
    setActiveAnchor(index) {
        for (const anchor of this.anchors) {
            anchor.active = false;
        }
        this.anchors[index].active = true;
    }
}
AnchorsComponent.ɵfac = function AnchorsComponent_Factory(t) { return new (t || AnchorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
AnchorsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnchorsComponent, selectors: [["anchors"]], inputs: { anchors: "anchors", headerSelectors: "headerSelectors" }, decls: 4, vars: 1, consts: [[1, "anchors-menu"], [1, "anchors-menu__container"], [1, "anchors-menu__list"], [3, "class", 4, "ngFor", "ngForOf"], [1, "anchors-menu__link", 3, "routerLink", "fragment", "click"]], template: function AnchorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AnchorsComponent_div_3_Template, 3, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.anchors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".anchors-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 64px;\n  width: 300px;\n  right: 0;\n  bottom: 0;\n}\n.anchors-menu__list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px;\n}\n.anchors-menu__list-element[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 6px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFFSTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFBUiIsImZpbGUiOiJhbmNob3JzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5jaG9ycy1tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2NHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG5cbiAgICAmX19saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG5cbiAgICAmX19saXN0LWVsZW1lbnQge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgIH1cbn1cblxuIl19 */"] });


/***/ }),

/***/ 91722:
/*!********************************************************************!*\
  !*** ./packages/docs/src/app/components/anchors/anchors.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnchorsModule": function() { return /* binding */ AnchorsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _anchors_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.component */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class AnchorsModule {
}
AnchorsModule.ɵfac = function AnchorsModule_Factory(t) { return new (t || AnchorsModule)(); };
AnchorsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AnchorsModule });
AnchorsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AnchorsModule, { declarations: [_anchors_component__WEBPACK_IMPORTED_MODULE_0__.AnchorsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_anchors_component__WEBPACK_IMPORTED_MODULE_0__.AnchorsComponent] }); })();


/***/ }),

/***/ 49808:
/*!*****************************************************************************************!*\
  !*** ./packages/docs/src/app/components/component-viewer/component-viewer.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentViewerComponent": function() { return /* binding */ ComponentViewerComponent; },
/* harmony export */   "ComponentOverviewComponent": function() { return /* binding */ ComponentOverviewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 61486);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 33927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 22663);
/* harmony import */ var _shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/documentation-items/documentation-items */ 33881);
/* harmony import */ var _anchors_anchors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../anchors/anchors.component */ 3043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _shared_doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/doc-viewer/doc-viewer */ 13188);













const _c0 = ["toc"];
function ComponentOverviewComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Mosaic");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Oops, ", ctx_r0.documentName, " component seems to be lost... But you can help us find it! Just send a Pull Request to this repository: ");
} }
class ComponentViewerComponent {
    constructor(routeActivated, docItems) {
        // Listen to changes on the current route for the doc id (e.g. button/checkbox) and the
        // parent route for the section (mosaic/cdk).
        this.docItems = docItems;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([routeActivated.params, routeActivated.parent.params]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((p) => ({ id: p[0].id, section: p[1].section })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((p) => ({ doc: docItems.getItemById(p.id, p.section), section: p.section }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed))).subscribe((d) => {
            if (d.doc) {
                this.componentDocItem = d.doc;
            }
        });
    }
    ngOnDestroy() {
        this.destroyed.next();
    }
}
ComponentViewerComponent.ɵfac = function ComponentViewerComponent_Factory(t) { return new (t || ComponentViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_0__.DocumentationItems)); };
ComponentViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComponentViewerComponent, selectors: [["docs-component-viewer"]], decls: 3, vars: 0, consts: [[1, "docs-component-viewer"], [1, "docs-component-viewer-content"]], template: function ComponentViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: [".title {\n  text-transform: capitalize;\n}\n\n.docs-header-link {\n  padding-top: 24px;\n}\n\n.docs-markdown__p {\n  margin: 0;\n  padding-top: 8px;\n}\n\n.docs-component-overview_hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC1vdmVydmlldy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBR0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0FBREoiLCJmaWxlIjoiY29tcG9uZW50LW92ZXJ2aWV3LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5kb2NzLWhlYWRlci1saW5rIHtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLmRvY3MtbWFya2Rvd24ge1xuICAgICZfX3Age1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxufVxuXG4uZG9jcy1jb21wb25lbnQtb3ZlcnZpZXdfaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */"], encapsulation: 2 });
class ComponentOverviewComponent {
    constructor(componentViewer, router, ref) {
        this.componentViewer = componentViewer;
        this.router = router;
        this.ref = ref;
        this.routeSeparator = '/overview';
        this.documentName = '';
        this.documentLost = false;
        this.isLoad = true;
        this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.copyCode = (event) => {
            const codeCopyAnimationTime = 1000;
            const copyBlock = event.target.parentElement.parentElement;
            if (!copyBlock) {
                return;
            }
            const range = document.createRange();
            range.selectNodeContents(copyBlock);
            const sel = window.getSelection();
            if (!sel) {
                return;
            }
            sel.removeAllRanges();
            sel.addRange(range);
            document.execCommand('copy');
            sel.removeAllRanges();
            copyBlock.classList.add('docs-markdown-code-block_success');
            setTimeout(() => copyBlock.classList.remove('docs-markdown-code-block_success'), codeCopyAnimationTime);
        };
        this.currentUrl = this.getRoute(router.url);
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroyed)).subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationStart) {
                const rootUrl = this.getRoute(event.url);
                if (rootUrl !== this.currentUrl) {
                    this.currentUrl = rootUrl;
                    this.isLoad = false;
                }
            }
        });
    }
    getRoute(route) {
        return route.split(this.routeSeparator)[0];
    }
    scrollToSelectedContentSection() {
        this.documentLost = false;
        this.showView();
        this.createCopyIcons();
        if (this.anchorsComponent) {
            this.anchorsComponent.setScrollPosition();
        }
    }
    createCopyIcons() {
        const codeBlocks = document.querySelectorAll('.docs-markdown__pre .docs-markdown__code');
        codeBlocks.forEach((codeBlock) => {
            // Creating copy code Block
            const copyBlock = document.createElement('span');
            copyBlock.className = 'docs-markdown-code-block';
            // Creating copy success message
            const copySuccessBlock = document.createElement('span');
            copySuccessBlock.className = 'docs-markdown-code-block__copied';
            copySuccessBlock.innerText = 'Скопировано';
            const succeedIcon = document.createElement('i');
            succeedIcon.className = 'mc mc-check_16';
            copySuccessBlock.prepend(succeedIcon);
            // Adding copy success message to copy code Block
            copyBlock.appendChild(copySuccessBlock);
            // Creating copy Icon
            const copyIcon = document.createElement('i');
            copyIcon.className = 'mc mc-copy_16 docs-markdown__code-icon';
            copyIcon.addEventListener('click', this.copyCode);
            // Adding copy Icon to copy code Block
            copyBlock.appendChild(copyIcon);
            codeBlock.prepend(copyBlock);
        });
    }
    showDocumentLostAlert() {
        this.documentLost = true;
        this.showView();
        if (this.anchorsComponent) {
            this.anchorsComponent.setScrollPosition();
        }
    }
    showView() {
        this.documentName = this.componentViewer.componentDocItem.id;
        this.isLoad = true;
        this.ref.detectChanges();
    }
    ngOnDestroy() {
        this.destroyed.next();
    }
}
ComponentOverviewComponent.ɵfac = function ComponentOverviewComponent_Factory(t) { return new (t || ComponentOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ComponentViewerComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
ComponentOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComponentOverviewComponent, selectors: [["component-overview"]], viewQuery: function ComponentOverviewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.anchorsComponent = _t.first);
    } }, decls: 7, vars: 7, consts: [[1, "mc-display-3", "title"], ["class", "mc-alert mc-alert_error mc-alert_dismissible", 4, "ngIf"], [1, "docs-component-view-text-content", "docs-component-overview", 3, "documentUrl", "contentRendered", "contentRenderFailed"], ["toc", ""], [1, "mc-alert", "mc-alert_error", "mc-alert_dismissible"], ["href", "//github.com/positive-js/mosaic/pulls", 1, "docs-markdown__a"]], template: function ComponentOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ComponentOverviewComponent_div_3_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "doc-viewer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("contentRendered", function ComponentOverviewComponent_Template_doc_viewer_contentRendered_4_listener() { return ctx.scrollToSelectedContentSection(); })("contentRenderFailed", function ComponentOverviewComponent_Template_doc_viewer_contentRenderFailed_4_listener() { return ctx.showDocumentLostAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "anchors", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", ctx.isLoad ? "fadeIn" : "fadeOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.documentName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.documentLost);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("docs-component-overview_hidden", ctx.documentLost);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate2"]("documentUrl", "docs-content/overviews/", ctx.componentViewer.componentDocItem.packageName, "/", ctx.componentViewer.componentDocItem.id, ".html");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_doc_viewer_doc_viewer__WEBPACK_IMPORTED_MODULE_2__.DocViewer, _anchors_anchors_component__WEBPACK_IMPORTED_MODULE_1__.AnchorsComponent], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)('fadeInOut', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('fadeIn', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
                    opacity: 1
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)('fadeOut', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
                    opacity: 0
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('fadeIn => fadeOut', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0s')
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)('fadeOut => fadeIn', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)('0.3s')
                ])
            ])
        ] } });


/***/ }),

/***/ 6194:
/*!**************************************************************************************!*\
  !*** ./packages/docs/src/app/components/component-viewer/component-viewer.module.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentViewerModule": function() { return /* binding */ ComponentViewerModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/tabs */ 38204);
/* harmony import */ var _shared_doc_viewer_doc_viewer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/doc-viewer/doc-viewer-module */ 44616);
/* harmony import */ var _shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/documentation-items/documentation-items */ 33881);
/* harmony import */ var _shared_table_of_contents_table_of_contents_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/table-of-contents/table-of-contents.module */ 51725);
/* harmony import */ var _anchors_anchors_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../anchors/anchors.module */ 91722);
/* harmony import */ var _component_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-viewer.component */ 49808);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class ComponentViewerModule {
}
ComponentViewerModule.ɵfac = function ComponentViewerModule_Factory(t) { return new (t || ComponentViewerModule)(); };
ComponentViewerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ComponentViewerModule });
ComponentViewerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_1__.DocumentationItems], imports: [[
            _anchors_anchors_module__WEBPACK_IMPORTED_MODULE_3__.AnchorsModule,
            _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_6__.McTabsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _shared_doc_viewer_doc_viewer_module__WEBPACK_IMPORTED_MODULE_0__.DocViewerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_table_of_contents_table_of_contents_module__WEBPACK_IMPORTED_MODULE_2__.TableOfContentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ComponentViewerModule, { declarations: [_component_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ComponentViewerComponent,
        _component_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ComponentOverviewComponent], imports: [_anchors_anchors_module__WEBPACK_IMPORTED_MODULE_3__.AnchorsModule,
        _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_6__.McTabsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _shared_doc_viewer_doc_viewer_module__WEBPACK_IMPORTED_MODULE_0__.DocViewerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_table_of_contents_table_of_contents_module__WEBPACK_IMPORTED_MODULE_2__.TableOfContentsModule], exports: [_component_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ComponentViewerComponent] }); })();


/***/ }),

/***/ 29403:
/*!*********************************************************************!*\
  !*** ./packages/docs/src/app/components/footer/footer.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer"]], decls: 14, vars: 0, consts: [[1, "docs-footer"], [1, "docs-footer__wrapper"], [1, "docs-footer__text-wrapper"], [1, "docs-footer__text"], ["href", "//github.com/positive-js/mosaic/blob/master/LICENSE", "target", "_blank", 1, "docs-footer__link"], ["href", "//github.com/positive-js/mosaic/", "target", "_blank", 1, "docs-footer__icon"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 438.549 438.549", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 438.549 438.549"], ["d", "M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\t\tc-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\t\tc0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\t\tc2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\n                        c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\t\tc-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\t\tc-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\t\tc-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\n                        c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\t\tc6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\t\tc-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\t\tc-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\n                        c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\t\tc5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\t\tc7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\t\tc15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\n                        c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\t\tc9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\t\tc44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\t\tC438.536,184.851,428.728,148.168,409.132,114.573z"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A9 2019 Positive Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Code licensed under an ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MIT-style License");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".docs-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  z-index: 100;\n  width: 100%;\n  will-change: transform;\n  padding-left: 300px;\n  padding-right: 300px;\n}\n.docs-footer__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-right: 68px;\n  margin-left: 68px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.docs-footer__text-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.docs-footer__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n.docs-footer__icon[_ngcontent-%COMP%] {\n  width: 23.3px;\n  height: 22.7px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUVJLG1CQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUdJLGtCQUFBO0VBQ0EsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLG9CQUFBO0FBTFo7QUFTSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVBSO0FBVUk7RUFBVSxvQkFBQTtBQVBkO0FBU0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFQUiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jcy1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgcGFkZGluZzoge1xuICAgICAgICBsZWZ0OiAzMDBweDtcbiAgICAgICAgcmlnaHQ6IDMwMHB4O1xuICAgIH07XG5cbiAgICAmX193cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgcmlnaHQ6IDY4cHg7XG4gICAgICAgICAgICBsZWZ0OiA2OHB4O1xuICAgICAgICB9O1xuICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgICAgICBib3R0b206IDEycHg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgJl9fdGV4dC13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAmX19saW5rIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cblxuICAgICZfX2ljb24ge1xuICAgICAgICB3aWR0aDogMjMuM3B4O1xuICAgICAgICBoZWlnaHQ6IDIyLjdweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 74691:
/*!******************************************************************!*\
  !*** ./packages/docs/src/app/components/footer/footer.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterModule": function() { return /* binding */ FooterModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ 29403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent] }); })();


/***/ }),

/***/ 83467:
/*!*******************************************************************************!*\
  !*** ./packages/docs/src/app/components/main-layout/main-layout.component.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": function() { return /* binding */ MainLayoutComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 22195);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 63576);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ 29403);






class MainLayoutComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.nextRoute = '';
        this.extras = {
            preserveFragment: true,
            queryParamsHandling: 'preserve'
        };
        const href = location.href;
        if (href.match('github')) {
            this.setNextRoute();
        }
        else {
            this.setDefaultRoute();
        }
    }
    setDefaultRoute() {
        if (location.pathname === '/') {
            this.router.navigate(['button/overview'], this.extras);
        }
    }
    setNextRoute() {
        this.nextRoute = localStorage.getItem('PT_nextRoute');
        if (this.nextRoute) {
            this.router.navigate([this.nextRoute], this.extras);
        }
        else {
            this.router.navigate(['button/overview'], this.extras);
        }
        localStorage.removeItem('PT_nextRoute');
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["ng-component"]], decls: 7, vars: 0, consts: [["role", "main", 1, "site__main", "main"], [1, "main__content", "content"], [1, "content__wrapper"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-sidenav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ComponentSidenav, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".main[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: calc(100% - 600px);\n  margin-top: 64px;\n  margin-left: 300px;\n  margin-right: 300px;\n  margin-bottom: 62px;\n  padding: 20px 69px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBR0osa0JBQUE7QUFGSiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MDBweCk7IC8vIGZvciBFZGdlXG4gICAgbWFyZ2luOiB7XG4gICAgICAgIHRvcDogNjRweDtcbiAgICAgICAgbGVmdDogMzAwcHg7XG4gICAgICAgIHJpZ2h0OiAzMDBweDtcbiAgICAgICAgYm90dG9tOiA2MnB4O1xuICAgIH1cblxuICAgIHBhZGRpbmc6IDIwcHggNjlweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 28169:
/*!****************************************************************************!*\
  !*** ./packages/docs/src/app/components/main-layout/main-layout.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutModule": function() { return /* binding */ MainLayoutModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ 80623);
/* harmony import */ var _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ptsecurity/mosaic/dropdown */ 30005);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/tree */ 19727);
/* harmony import */ var _anchors_anchors_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../anchors/anchors.module */ 91722);
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.module */ 74691);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar */ 36462);
/* harmony import */ var _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.module */ 2886);
/* harmony import */ var _main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-layout.component */ 83467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);












class MainLayoutModule {
}
MainLayoutModule.ɵfac = function MainLayoutModule_Factory(t) { return new (t || MainLayoutModule)(); };
MainLayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MainLayoutModule });
MainLayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _anchors_anchors_module__WEBPACK_IMPORTED_MODULE_0__.AnchorsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_8__.McTreeModule,
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_9__.McButtonModule,
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_10__.McIconModule,
            _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_11__.McDropdownModule,
            _navbar__WEBPACK_IMPORTED_MODULE_2__.NavbarModule,
            _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_3__.SidenavModule,
            _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MainLayoutModule, { declarations: [_main_layout_component__WEBPACK_IMPORTED_MODULE_4__.MainLayoutComponent], imports: [_anchors_anchors_module__WEBPACK_IMPORTED_MODULE_0__.AnchorsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_8__.McTreeModule,
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_9__.McButtonModule,
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_10__.McIconModule,
        _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_11__.McDropdownModule,
        _navbar__WEBPACK_IMPORTED_MODULE_2__.NavbarModule,
        _sidenav_sidenav_module__WEBPACK_IMPORTED_MODULE_3__.SidenavModule,
        _footer_footer_module__WEBPACK_IMPORTED_MODULE_1__.FooterModule], exports: [_main_layout_component__WEBPACK_IMPORTED_MODULE_4__.MainLayoutComponent] }); })();


/***/ }),

/***/ 36462:
/*!**********************************************************!*\
  !*** ./packages/docs/src/app/components/navbar/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* reexport safe */ _navbar_module__WEBPACK_IMPORTED_MODULE_0__.NavbarModule; }
/* harmony export */ });
/* harmony import */ var _navbar_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.module */ 43220);



/***/ }),

/***/ 94318:
/*!********************************************************************!*\
  !*** ./packages/docs/src/app/components/navbar/navbar-property.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarProperty": function() { return /* binding */ NavbarProperty; }
/* harmony export */ });
class NavbarProperty {
    constructor(navbarProperty) {
        this.data = navbarProperty.data;
        this.currentValue = this.data[0];
        this.property = navbarProperty.property;
        this.init();
    }
    setValue(i) {
        this.currentValue = this.data[i];
        localStorage.setItem(this.property, `${i}`);
        if (this.updateTemplate) {
            this.updateTemplate();
        }
        if (this.updateSelected) {
            this.updateSelected(i);
        }
    }
    init() {
        const currentValue = parseInt(localStorage.getItem(this.property));
        if (currentValue) {
            this.setValue(currentValue);
        }
        else {
            localStorage.setItem(this.property, '0');
        }
    }
    updateTemplate() {
        if (this.currentValue) {
            for (const color of this.data) {
                document.body.classList.remove(color.className);
            }
            document.body.classList.add(this.currentValue.className);
        }
    }
    updateSelected(i) {
        if (this.data[i]) {
            this.data.forEach((color) => {
                color.selected = false;
            });
            this.data[i].selected = true;
        }
    }
}


/***/ }),

/***/ 22195:
/*!*********************************************************************!*\
  !*** ./packages/docs/src/app/components/navbar/navbar.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _shared_version_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/version/version */ 59979);
/* harmony import */ var _navbar_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-property */ 94318);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme.service */ 67110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ 80623);
/* harmony import */ var _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/dropdown */ 30005);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);









function NavbarComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_18_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const i_r9 = restoredCtx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.goToVersion(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const version_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-selected", version_r8.selected)("docs-navbar-version_bold", version_r8.number.length < 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](version_r8.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](version_r8.date);
} }
function NavbarComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_26_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const i_r13 = restoredCtx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.languageSwitch.setValue(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", language_r12, " ");
} }
function NavbarComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_button_33_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const i_r17 = restoredCtx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.themeSwitch.setValue(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const theme_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-selected", theme_r16.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", theme_r16.name, " ");
} }
function NavbarComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_span_41_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const i_r21 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.colorSwitch.setValue(i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("color-picker__dropdown-item", true)("mc-selected", color_r20.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", color_r20.code);
} }
class NavbarComponent {
    constructor(themeService) {
        this.themeService = themeService;
        this.mosaicVersion = _shared_version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion;
        // To add new version to dropdown add new object to the end of data array,
        // number of current version is taken from package.json, rest should be specified
        // run npm show @ptsecurity/mosaic versions --json to see all mosaic versions
        this.versionData = [
            {
                number: 'Версия 11',
                date: '30 марта',
                selected: false,
                link: '//mosaic.ptsecurity.com'
            },
            {
                number: 'Версия 10',
                date: '23 окт 2020',
                selected: false,
                link: '//v10.mosaic.ptsecurity.com'
            },
            {
                number: 'Версия 9',
                date: '18 мая 2020',
                selected: false,
                link: '//v9.mosaic.ptsecurity.com'
            },
            {
                number: 'Версия 8',
                date: '5 сент 2019',
                selected: false,
                link: '//v8.mosaic.ptsecurity.com'
            }
        ];
        // To add for checking of current color theme of OS preferences
        this.colorAutomaticTheme = window.matchMedia('(prefers-color-scheme: light)');
        this.activeColorProperty = {
            property: 'PT_color',
            data: [
                {
                    code: '#2f80ed',
                    className: 'active-blue',
                    selected: true
                },
                {
                    code: '#832112',
                    className: 'active-red',
                    selected: false
                },
                {
                    code: '#07804e',
                    className: 'active-green',
                    selected: false
                },
                {
                    code: '#eaaf00',
                    className: 'active-yellow',
                    selected: false
                }
            ],
            updateTemplate: true,
            updateSelected: true
        };
        this.languageProperty = {
            property: 'PT_language',
            data: [
                'Русский язык',
                'Английский язык'
            ],
            updateTemplate: false,
            updateSelected: false
        };
        this.themeProperty = {
            property: 'PT_theme',
            data: [
                {
                    theme: 'auto',
                    name: 'Автоматическое переключение',
                    className: this.colorAutomaticTheme.matches ? 'theme-default' : 'theme-dark',
                    selected: true
                },
                {
                    theme: 'default',
                    name: 'Светлая тема',
                    className: 'theme-default',
                    selected: false
                },
                {
                    theme: 'dark',
                    name: 'Темная тема',
                    className: 'theme-dark',
                    selected: false
                }
            ],
            updateTemplate: true,
            updateSelected: true
        };
        this.setSelectedVersion();
        this.colorSwitch = new _navbar_property__WEBPACK_IMPORTED_MODULE_1__.NavbarProperty(this.activeColorProperty);
        this.themeSwitch = new _navbar_property__WEBPACK_IMPORTED_MODULE_1__.NavbarProperty(this.themeProperty);
        this.languageSwitch = new _navbar_property__WEBPACK_IMPORTED_MODULE_1__.NavbarProperty(this.languageProperty);
        try {
            // Chrome & Firefox
            this.colorAutomaticTheme.addEventListener('change', (e) => {
                if (e.matches) {
                    this.themeProperty.data[0].className = 'theme-default';
                }
                else {
                    this.themeProperty.data[0].className = 'theme-dark';
                }
            });
        }
        catch (err) {
            try {
                // Safari
                this.colorAutomaticTheme.addListener((e) => {
                    if (e.matches) {
                        this.themeProperty.data[0].className = 'theme-default';
                    }
                    else {
                        this.themeProperty.data[0].className = 'theme-dark';
                    }
                });
            }
            catch (errSafari) {
                // tslint:disable-next-line:no-console
                console.error(errSafari);
            }
        }
    }
    ngOnInit() {
        this.themingSubscription = this.themeService.currentTheme.subscribe((theme) => {
            if (this.themeSwitch.data[0].selected) {
                this.themeSwitch.data[0].className = theme;
                this.themeSwitch.setValue(0);
            }
        });
    }
    ngOnDestroy() {
        this.themingSubscription.unsubscribe();
    }
    goToVersion(i) {
        const link = this.versionData[i].link;
        if (!location.origin.match(link)) {
            location.href = `${link}${location.pathname}${location.search}${location.hash}`;
        }
        this.versionSwitch.setValue(i);
    }
    setSelectedVersion() {
        /* Если мы находимся на последней версии - обновляем ее из package.json
        Если нет - последние версии предыдущих мажоров должны быть указаны в массиве*/
        if (location.origin.match(this.versionData[0].link)) {
            this.versionData[0].number = this.mosaicVersion;
            this.versionData[0].selected = true;
        }
        else {
            // Определяем выбранную версию
            this.versionData.forEach((version) => {
                if (version.number === this.mosaicVersion) {
                    version.selected = true;
                }
            });
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_theme_service__WEBPACK_IMPORTED_MODULE_2__.ThemeService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], decls: 42, vars: 15, consts: [[1, "docs-navbar-header", "docs-navbar-header_fixed"], [1, "docs-navbar-logo"], ["height", "32", "viewBox", "0 0 32 32", "width", "32", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd", "transform", "translate(.96)"], ["d", "m15.056 0-14.896 5.312 2.272 19.696 12.624 6.992 12.624-6.992 2.272-19.696z", "fill", "#ca0813"], ["d", "m15.04 0v32l12.624-6.992 2.272-19.696z", "fill", "#a00810"], ["d", "m15.04 0 14.88 5.312-2.2695596 19.696-12.6104404 6.992-12.61044039-6.992-2.26955961-19.696zm0 1.5927156-13.2534557 4.73134117 2.04487091 17.74607603 11.20858479 6.2147254 11.2085848-6.2147254 2.0448709-17.74607603z", "fill", "#ca0813", "fill-rule", "nonzero"], ["fill", "#fff"], ["d", "m15.04 1.5927156 13.2534557 4.73134117-2.0448709 17.74607603-11.2085848 6.2147254-11.20858479-6.2147254-2.04487091-17.74607603zm0 1.5927156-11.6269114 4.15068235 1.8201822 15.79615205 9.8067292 5.4374509 9.8067292-5.4374509 1.8201822-15.79615205z", "fill-rule", "nonzero"], ["d", "m23.541 19.341.939 2.899h-2.88l-.302-1.017zm-8.584-2.554 1.352 3.035-1.111068 2.418h-.33792l-1.199012-2.541zm-8.498 2.324 2.39 1.38-.529 1.749h-2.88zm16.622-1.191.301.929-2.232 1.872-.829-2.801zm-13.209-.8-.879 2.899-2.382-1.375.496-1.524zm5.589-.383 1.942.706-.827 1.798zm-.964-.097-1.107 2.485-1.172-2.485zm7.407-2.357 1.022 3.157h-2.747l-.405-1.369zm-5.742-.198 2.201 1.271-.759 1.65-2.3397814-.8497417c.0404824-.0979144.0815829-.1969339.1233014-.2970583zm-8.103.115 2.296 1.327-.337 1.113h-2.754zm5.705-.172.79984 1.8312.12316.2928-.0093071.0054281.0003071.0015719h-2.687l-.411-.871zm7.473-1.805.508 1.568-2.12 1.778-.11908-.40676-.07292-.23424.0037867-.0009743-.2972154-1.0355299c-.019996-.0770346-.0386797-.1511599-.0560513-.2223758l-.00452.01088-.294-1.024zm-9.846-.286-.4988449 1.741526c-.0010771-.0031573-.0021421-.0062926-.0031951-.009406l-.39196 1.38488-2.286-1.32.427-1.311zm6.3-1.356 1.0944579 3.811965c-.0667348.1566826-.1417777.330814-.2251286.5223944l-2.2053293-1.2733594zm-5.42.028 1.299 2.976-2.1915156 1.2645235c-.0725851-.1611133-.1380954-.3093488-.1965308-.4447066zm5.777-.523 2.648.467.391 1.209-2.435.43zm-8.55-.304 2.39.422-.35 1.22-2.732.482zm10.11352-2.582.91748 2.837-2.414-.426 1.053-2.411zm-8.82816 0 1.09764 2.515-.766-.135-1.467-.258.69184-2.122z"], [1, "docs-navbar-logo__title"], [1, "docs-navbar-version"], ["mc-button", "", 1, "mc-button", "mc-button_transparent", 3, "mcDropdownTriggerFor"], ["mc-icon", "mc-angle-down-L_16", 1, "docs-navbar-version__icon"], [1, "docs-navbar-version__dropdown"], ["versionDropdown", "mcDropdown"], ["mc-dropdown-item", "", 3, "mc-selected", "docs-navbar-version_bold", "click", 4, "ngFor", "ngForOf"], [1, "flex-spacer"], [1, "docs-navbar-dropdown", "docs-navbar-dropdown_hidden"], ["mc-icon", "mc-angle-down-M_16", 1, "docs-navbar-dropdown__icon"], ["languageDropdown", "mcDropdown"], ["mc-dropdown-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "docs-navbar-dropdown"], ["themeDropdown", "mcDropdown"], ["mc-dropdown-item", "", 3, "mc-selected", "click", 4, "ngFor", "ngForOf"], [1, "color-picker"], ["mc-icon", "mc-circle-8_16", 1, "color-picker__icon"], [1, "color-picker__dropdown"], ["colorDropdown", "mcDropdown"], [1, "color-picker__dropdown-content"], [3, "color-picker__dropdown-item", "mc-selected", "click", 4, "ngFor", "ngForOf"], ["mc-dropdown-item", "", 3, "click"], [1, "docs-navbar-version__item"], [1, "docs-navbar-version__num", "flex-50"], [1, "docs-navbar-version__date", "flex-50"], [3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Mosaic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mc-dropdown", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, NavbarComponent_button_18_Template, 6, 6, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mc-dropdown", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, NavbarComponent_button_26_Template, 2, 1, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mc-dropdown", null, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, NavbarComponent_button_33_Template, 2, 3, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mc-dropdown", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, NavbarComponent_span_41_Template, 2, 6, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](25);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcDropdownTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u0412\u0435\u0440\u0441\u0438\u044F ", ctx.mosaicVersion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.versionData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.languageSwitch.currentValue, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.languageSwitch.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcDropdownTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.themeSwitch.currentValue.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.themeSwitch.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcDropdownTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx.colorSwitch.currentValue.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("margin-top", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.colorSwitch.data);
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__.McButton, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__.McButtonCssStyler, _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__.McDropdownTrigger, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIcon, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIconCSSStyler, _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__.McDropdown, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__.McDropdownItem], styles: [".docs-navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 16px 32px;\n}\n.docs-navbar-header[_ngcontent-%COMP%]   .docs-navbar-logo[_ngcontent-%COMP%] {\n  display: flex;\n}\n.docs-navbar-header[_ngcontent-%COMP%]   .docs-navbar-logo__img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  width: 32px;\n  height: 32px;\n}\n.docs-navbar-header[_ngcontent-%COMP%]   .docs-navbar-logo__title[_ngcontent-%COMP%] {\n  line-height: 32px;\n  font-size: 28px;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.docs-navbar-header[_ngcontent-%COMP%]   .docs-navbar-dropdown[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n.docs-navbar-header[_ngcontent-%COMP%]   .docs-navbar-dropdown_hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.docs-navbar-header[_ngcontent-%COMP%]   .docs-navbar-dropdown__icon[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.color-picker__icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.color-picker__dropdown-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n.color-picker__dropdown-item[_ngcontent-%COMP%] {\n  padding: 5px 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.docs-navbar-version[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  margin-bottom: -5px;\n}\n.docs-navbar-version__number[_ngcontent-%COMP%] {\n  margin-left: 7px;\n}\n.docs-navbar-version__item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.docs-navbar-version__num[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 50px;\n}\n.docs-navbar-version__date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n  white-space: nowrap;\n}\n.docs-navbar-header_fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 1000;\n}\n.color-picker[_ngcontent-%COMP%]   .mc.mc-icon[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFQZ0I7RUFRaEIsa0JBQUE7QUFMSjtBQU9JO0VBQ0ksYUFBQTtBQUxSO0FBT1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMWjtBQVFRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtBQVBoQjtBQVlJO0VBQ0ksZ0JBQUE7QUFWUjtBQVlRO0VBQ0ksa0JBQUE7QUFWWjtBQWFRO0VBQVUsY0FBQTtBQVZsQjtBQWVJO0VBQ0ksZUF6Q29CO0FBNkI1QjtBQWVJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBYlI7QUFnQkk7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBZFI7QUFrQkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWZKO0FBaUJJO0VBQVksZ0JBQUE7QUFkaEI7QUFnQkk7RUFBVSxhQUFBO0FBYmQ7QUFlSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBYlI7QUFnQkk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBZFI7QUFrQkE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQWZKO0FBa0JBO0VBQ0ksZUFBQTtBQWZKIiwiZmlsZSI6Im5hdmJhci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5hdmJhci10aGVtZVwiO1xuXG4kZG9jLW5hdmJhci1oZWlnaHQ6IDY0cHg7XG4kZG9jLW5hdmJhci1pY29uLWZvbnQtc2l6ZTogMjJweDtcbiRkb2MtbmF2YmFyLXBhZGRpbmc6IDEwcHg7XG5cbi5kb2NzLW5hdmJhci1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6ICRkb2MtbmF2YmFyLWhlaWdodDtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG5cbiAgICAuZG9jcy1uYXZiYXItbG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgJl9faW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRvY3MtbmF2YmFyLWRyb3Bkb3duIHtcbiAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcblxuICAgICAgICAmX2hpZGRlbiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAmX19pY29uIHsgY29sb3I6IGluaGVyaXQ7IH1cbiAgICB9XG59XG5cbi5jb2xvci1waWNrZXIge1xuICAgICZfX2ljb24ge1xuICAgICAgICBmb250LXNpemU6ICRkb2MtbmF2YmFyLWljb24tZm9udC1zaXplO1xuICAgIH1cblxuICAgICZfX2Ryb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgfVxuXG4gICAgJl9fZHJvcGRvd24taXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLmRvY3MtbmF2YmFyLXZlcnNpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XG5cbiAgICAmX19udW1iZXIgeyBtYXJnaW4tbGVmdDogN3B4OyB9XG5cbiAgICAmX19pdGVtIHsgZGlzcGxheTogZmxleDsgfVxuXG4gICAgJl9fbnVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIH1cblxuICAgICZfX2RhdGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxufVxuXG4uZG9jcy1uYXZiYXItaGVhZGVyX2ZpeGVkIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmNvbG9yLXBpY2tlciAubWMubWMtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 43220:
/*!******************************************************************!*\
  !*** ./packages/docs/src/app/components/navbar/navbar.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarModule": function() { return /* binding */ NavbarModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ 80623);
/* harmony import */ var _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/dropdown */ 30005);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/link */ 37542);
/* harmony import */ var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/select */ 44381);
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 22195);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);








class NavbarModule {
}
NavbarModule.ɵfac = function NavbarModule_Factory(t) { return new (t || NavbarModule)(); };
NavbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NavbarModule });
NavbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__.McButtonModule,
            _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_4__.McDropdownModule,
            _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_5__.McLinkModule,
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIconModule,
            _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__.McSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__.McButtonModule,
        _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_4__.McDropdownModule,
        _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_5__.McLinkModule,
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__.McIconModule,
        _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__.McSelectModule], exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent] }); })();


/***/ }),

/***/ 67110:
/*!******************************************************************!*\
  !*** ./packages/docs/src/app/components/navbar/theme.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Themes": function() { return /* binding */ Themes; },
/* harmony export */   "ThemeService": function() { return /* binding */ ThemeService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



var Themes;
(function (Themes) {
    Themes["Default"] = "theme-default";
    Themes["Dark"] = "theme-dark";
})(Themes || (Themes = {}));
class ThemeService {
    constructor(ref) {
        this.ref = ref;
        this.currentTheme = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(Themes.Default);
        const isLightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        isLightTheme ? this.currentTheme.next(Themes.Default) : this.currentTheme.next(Themes.Dark);
        const prefersColorTheme = window.matchMedia('(prefers-color-scheme: light)');
        try {
            // Chrome & Firefox
            prefersColorTheme.addEventListener('change', (e) => {
                const turnOn = e.matches;
                this.currentTheme.next(turnOn ? Themes.Default : Themes.Dark);
                this.ref.tick();
            });
        }
        catch (err) {
            try {
                // Safari
                prefersColorTheme.addListener((e) => {
                    const turnOn = e.matches;
                    this.currentTheme.next(turnOn ? Themes.Default : Themes.Dark);
                    this.ref.tick();
                });
            }
            catch (errSafari) {
                // tslint:disable-next-line:no-console
                console.error(errSafari);
            }
        }
    }
    setTheme(value) {
        this.currentTheme.next(value);
    }
    getTheme() {
        return this.currentTheme.getValue();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63576:
/*!***********************************************************************!*\
  !*** ./packages/docs/src/app/components/sidenav/sidenav.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentSidenav": function() { return /* binding */ ComponentSidenav; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 97175);
/* harmony import */ var _shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/documentation-items/documentation-items */ 33881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ 25260);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);







function ComponentSidenav_div_1_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const component_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/" + component_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", component_r4.name, " ");
} }
function ComponentSidenav_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentSidenav_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ComponentSidenav_div_1_li_6_Template, 3, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", _r2.expanded ? ctx_r0.iconClassExpanded : ctx_r0.iconClassCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@bodyExpansion", _r2.expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r1.items);
} }
class ComponentSidenav {
    constructor(docItems) {
        this.docItems = docItems;
        this.icon = 'mc mc-angle-up-M_16';
        this.iconClass = 'nav__trigger-icon';
        this.iconClassExpanded = `${this.icon} ${this.iconClass} ${this.iconClass}_expanded`;
        this.iconClassCollapsed = `${this.icon} ${this.iconClass} ${this.iconClass}_collapsed`;
        this.categories = docItems.getCategories('components');
    }
}
ComponentSidenav.ɵfac = function ComponentSidenav_Factory(t) { return new (t || ComponentSidenav)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_0__.DocumentationItems)); };
ComponentSidenav.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ComponentSidenav, selectors: [["app-sidenav"]], decls: 2, vars: 1, consts: [[1, "main__nav", "nav"], [4, "ngFor", "ngForOf"], ["cdkAccordionItem", "", "expanded", "true", 1, "nav__trigger", 3, "click"], ["panel", "cdkAccordionItem"], [3, "className"], [1, "nav__wrapper"], ["class", "nav__item", 4, "ngFor", "ngForOf"], [1, "nav__item"], ["routerLinkActive", "nav__item-selected", 1, "nav__item-link", 3, "routerLink"]], template: function ComponentSidenav_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ComponentSidenav_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__.CdkAccordionItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: [".nav {\n  position: fixed;\n  top: 64px;\n  bottom: 0;\n  z-index: 101;\n  overflow: hidden;\n  overflow-y: auto;\n  max-height: 100%;\n  width: 300px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.nav__wrapper {\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav__trigger {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 17px;\n  text-align: left;\n  border: none;\n  background: none;\n  padding: 14px 32px 6px 32px;\n}\n.nav__trigger .nav__trigger-icon {\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.nav__trigger .nav__trigger-icon_expanded_collapsed {\n  transform: rotate(0);\n}\n.nav__trigger .nav__trigger-icon_collapsed {\n  transform: rotate(-180deg);\n}\n.nav__item {\n  line-height: 20px;\n  font-size: 15px;\n}\n.nav__item > a {\n  position: relative;\n  text-decoration: none;\n  padding: 6px 32px;\n}\n.nav__item > a:hover, .nav__item > a:active, .nav__item > a:focus {\n  text-decoration: none;\n}\n.nav__item-selected {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBR0ksaUJBQUE7RUFDQSxvQkFBQTtBQVRSO0FBWUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFWUjtBQWFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBYlI7QUFlUTtFQXRDSix3REF1QzZCO0FBVmpDO0FBWXlCO0VBQWMsb0JBQUE7QUFUdkM7QUFXWTtFQUFjLDBCQUFBO0FBUjFCO0FBYUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFYUjtBQWFRO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWFo7QUFhWTtFQUE2QixxQkFBQTtBQVZ6QztBQWFRO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0FBWFoiLCJmaWxlIjoic2lkZW5hdi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIHRyYW5zaXRpb24gKCR0cmFuc2l0aW9uKSB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcbiAgICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xuICAgIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xufVxuXG4ubmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2NHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxMDE7XG5cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICBwYWRkaW5nOiB7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgIH07XG5cbiAgICAmX193cmFwcGVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICZfX3RyaWdnZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDE0cHggMzJweCA2cHggMzJweDtcblxuICAgICAgICAubmF2X190cmlnZ2VyLWljb24ge1xuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbiggdHJhbnNmb3JtIDIyNW1zIGN1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKSApO1xuXG4gICAgICAgICAgICAmX2V4cGFuZGVkIHsgJl9jb2xsYXBzZWQgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfSB9XG5cbiAgICAgICAgICAgICZfY29sbGFwc2VkIHsgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7IH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgJl9faXRlbSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAgICAgJiA+IGEge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgcGFkZGluZzogNnB4IDMycHg7XG5cbiAgICAgICAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2, data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('bodyExpansion', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ maxHeight: '0', visibility: 'hidden' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({ maxHeight: '10000px', visibility: 'visible' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('225ms cubic-bezier(0.4,0.0,0.2,1)')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)('collapsed <=> expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('225ms cubic-bezier(0.4,0.0,0.2,1)'))
            ])
        ] } });


/***/ }),

/***/ 2886:
/*!********************************************************************!*\
  !*** ./packages/docs/src/app/components/sidenav/sidenav.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavModule": function() { return /* binding */ SidenavModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/accordion */ 25260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/documentation-items/documentation-items */ 33881);
/* harmony import */ var _sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav.component */ 63576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);







class SidenavModule {
}
SidenavModule.ɵfac = function SidenavModule_Factory(t) { return new (t || SidenavModule)(); };
SidenavModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SidenavModule });
SidenavModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_0__.DocumentationItems], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__.McIconModule,
            _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__.CdkAccordionModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SidenavModule, { declarations: [_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ComponentSidenav], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__.McIconModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__.CdkAccordionModule], exports: [_sidenav_component__WEBPACK_IMPORTED_MODULE_1__.ComponentSidenav] }); })();


/***/ }),

/***/ 9825:
/*!*************************************************!*\
  !*** ./packages/docs/src/app/docs.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsComponent": function() { return /* binding */ DocsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);


class DocsComponent {
}
DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(); };
DocsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["docs-app"]], decls: 1, vars: 0, template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2NzLnNjc3MifQ== */"] });


/***/ }),

/***/ 75812:
/*!*****************************************************!*\
  !*** ./packages/docs/src/app/docs.module-routes.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ROUTES": function() { return /* binding */ APP_ROUTES; }
/* harmony export */ });
/* harmony import */ var _components_component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component-viewer/component-viewer.component */ 49808);
/* harmony import */ var _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-layout/main-layout.component */ 83467);


const APP_ROUTES = [
    {
        path: '',
        component: _components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_1__.MainLayoutComponent,
        children: [
            { path: ':id', redirectTo: ':id', pathMatch: 'full' },
            {
                path: ':id',
                component: _components_component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_0__.ComponentViewerComponent,
                children: [
                    { path: '', redirectTo: 'overview', pathMatch: 'full' },
                    { path: 'overview', component: _components_component_viewer_component_viewer_component__WEBPACK_IMPORTED_MODULE_0__.ComponentOverviewComponent, pathMatch: 'full' },
                    { path: '**', redirectTo: 'overview' }
                ]
            }
        ]
    },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ 79782:
/*!**********************************************!*\
  !*** ./packages/docs/src/app/docs.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _components_component_viewer_component_viewer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/component-viewer/component-viewer.module */ 6194);
/* harmony import */ var _components_main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-layout/main-layout.module */ 28169);
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs.component */ 9825);
/* harmony import */ var _docs_module_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs.module-routes */ 75812);
/* harmony import */ var _shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/documentation-items/documentation-items */ 33881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_docs_component__WEBPACK_IMPORTED_MODULE_2__.DocsComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _shared_documentation_items_documentation_items__WEBPACK_IMPORTED_MODULE_4__.DocumentationItems,
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__.PathLocationStrategy
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(_docs_module_routes__WEBPACK_IMPORTED_MODULE_3__.APP_ROUTES, {
                scrollPositionRestoration: 'enabled',
                onSameUrlNavigation: 'reload',
                anchorScrolling: 'enabled'
            }),
            _components_component_viewer_component_viewer_module__WEBPACK_IMPORTED_MODULE_0__.ComponentViewerModule,
            _components_main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_1__.MainLayoutModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_2__.DocsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _components_component_viewer_component_viewer_module__WEBPACK_IMPORTED_MODULE_0__.ComponentViewerModule,
        _components_main_layout_main_layout_module__WEBPACK_IMPORTED_MODULE_1__.MainLayoutModule] }); })();


/***/ }),

/***/ 78872:
/*!****************************************!*\
  !*** ./packages/docs/src/app/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsComponent": function() { return /* reexport safe */ _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent; },
/* harmony export */   "AppModule": function() { return /* reexport safe */ _docs_module__WEBPACK_IMPORTED_MODULE_1__.AppModule; }
/* harmony export */ });
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.component */ 9825);
/* harmony import */ var _docs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.module */ 79782);




/***/ }),

/***/ 25849:
/*!***************************************************************!*\
  !*** ./packages/docs/src/app/shared/copier/copier.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopierService": function() { return /* binding */ CopierService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CopierService {
    /** Copy the text value to the clipboard. */
    copyText(text) {
        this.createTextareaAndSelect(text);
        const copySuccessful = document.execCommand('copy');
        this.removeFake();
        return copySuccessful;
    }
    /**
     * Creates a hidden textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    createTextareaAndSelect(text) {
        // Create a fake element to hold the contents to copy
        this.textarea = document.createElement('textarea');
        // Prevent zooming on iOS
        this.textarea.style.fontSize = '12pt';
        // Hide the element
        this.textarea.classList.add('cdk-visually-hidden');
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || document.documentElement.scrollTop;
        this.textarea.style.top = `${yPosition}px`;
        this.textarea.setAttribute('readonly', '');
        this.textarea.value = text;
        document.body.appendChild(this.textarea);
        this.textarea.select();
        this.textarea.setSelectionRange(0, this.textarea.value.length);
    }
    /** Remove the text area from the DOM. */
    removeFake() {
        if (this.textarea) {
            document.body.removeChild(this.textarea);
            this.textarea = undefined;
        }
    }
}
CopierService.ɵfac = function CopierService_Factory(t) { return new (t || CopierService)(); };
CopierService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CopierService, factory: CopierService.ɵfac });


/***/ }),

/***/ 44616:
/*!**********************************************************************!*\
  !*** ./packages/docs/src/app/shared/doc-viewer/doc-viewer-module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocViewerModule": function() { return /* binding */ DocViewerModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ 80623);
/* harmony import */ var _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/tabs */ 38204);
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ 54360);
/* harmony import */ var _copier_copier_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../copier/copier.service */ 25849);
/* harmony import */ var _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../example-viewer/example-viewer */ 95135);
/* harmony import */ var _stackblitz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stackblitz */ 75941);
/* harmony import */ var _doc_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc-viewer */ 13188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _stackblitz_stackblitz_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stackblitz/stackblitz-button */ 82600);













// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
class DocViewerModule {
}
DocViewerModule.ɵfac = function DocViewerModule_Factory(t) { return new (t || DocViewerModule)(); };
DocViewerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DocViewerModule });
DocViewerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_copier_copier_service__WEBPACK_IMPORTED_MODULE_0__.CopierService], imports: [[
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__.McButtonModule,
            _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_7__.McTabsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _stackblitz__WEBPACK_IMPORTED_MODULE_2__.StackblitzButtonModule,
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule,
            _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_10__.McToolTipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DocViewerModule, { declarations: [_doc_viewer__WEBPACK_IMPORTED_MODULE_3__.DocViewer, _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_1__.ExampleViewer], imports: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__.McButtonModule,
        _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_7__.McTabsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _stackblitz__WEBPACK_IMPORTED_MODULE_2__.StackblitzButtonModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.PortalModule,
        _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_10__.McToolTipModule], exports: [_doc_viewer__WEBPACK_IMPORTED_MODULE_3__.DocViewer, _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_1__.ExampleViewer] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_1__.ExampleViewer, [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgComponentOutlet, _stackblitz_stackblitz_button__WEBPACK_IMPORTED_MODULE_4__.StackblitzButton, _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_7__.McTabGroup, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_7__.McTab, _doc_viewer__WEBPACK_IMPORTED_MODULE_3__.DocViewer, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass], []);


/***/ }),

/***/ 13188:
/*!***************************************************************!*\
  !*** ./packages/docs/src/app/shared/doc-viewer/doc-viewer.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocViewer": function() { return /* binding */ DocViewer; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 40912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 98636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../example-viewer/example-viewer */ 95135);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);









class DocFetcher {
    constructor(_http) {
        this._http = _http;
        // tslint:disable-next-line:orthodox-getter-and-setter
        this._cache = {};
    }
    fetchDocument(url) {
        if (this._cache[url]) {
            return this._cache[url];
        }
        const stream = this._http.get(url, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)(1));
        return stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this._cache[url] = stream));
    }
}
DocFetcher.ɵfac = function DocFetcher_Factory(t) { return new (t || DocFetcher)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
DocFetcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DocFetcher, factory: DocFetcher.ɵfac, providedIn: 'root' });
class DocViewer {
    constructor(_appRef, _componentFactoryResolver, _elementRef, _http, _injector, _viewContainerRef, _ngZone, _domSanitizer, _docFetcher) {
        this._appRef = _appRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._elementRef = _elementRef;
        this._http = _http;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._domSanitizer = _domSanitizer;
        this._docFetcher = _docFetcher;
        this.contentRendered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.contentRenderFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** The document text. It should not be HTML encoded. */
        this.textContent = '';
        this.portalHosts = [];
    }
    /** The URL of the document to display. */
    set documentUrl(url) {
        this.fetchDocument(url);
    }
    ngOnDestroy() {
        var _a;
        this.clearLiveExamples();
        (_a = this.documentFetchSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    /** Fetch a document by URL. */
    fetchDocument(url) {
        var _a;
        (_a = this.documentFetchSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.documentFetchSubscription = this._docFetcher.fetchDocument(url).subscribe((document) => this.updateDocument(document), (error) => this.showError(url, error));
    }
    /**
     * Updates the displayed document.
     * @param rawDocument The raw document content to show.
     */
    updateDocument(rawDocument) {
        // Replace all relative fragment URLs with absolute fragment URLs. e.g. "#my-section" becomes
        // "/components/button/api#my-section". This is necessary because otherwise these fragment
        // links would redirect to "/#my-section".
        // tslint:disable-next-line:no-parameter-reassignment
        rawDocument = rawDocument.replace(/href="#([^"]*)"/g, (_m, fragmentUrl) => {
            const absoluteUrl = `${location.pathname}#${fragmentUrl}`;
            return `href="${this._domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_3__.SecurityContext.URL, absoluteUrl)}"`;
        });
        // tslint:disable-next-line:no-inner-html
        this._elementRef.nativeElement.innerHTML = rawDocument;
        this.textContent = this._elementRef.nativeElement.textContent;
        this.loadComponents('mosaic-docs-example', _example_viewer_example_viewer__WEBPACK_IMPORTED_MODULE_0__.ExampleViewer);
        // Resolving and creating components dynamically in Angular happens synchronously, but since
        // we want to emit the output if the components are actually rendered completely, we wait
        // until the Angular zone becomes stable.
        this._ngZone.onStable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => this.contentRendered.next());
    }
    /** Show an error that occurred when fetching a document. */
    showError(url, error) {
        // tslint:disable-next-line:no-console
        console.error(error);
        this._elementRef.nativeElement.innerText =
            `Failed to load document: ${url}. Error: ${error.statusText}`;
        this._ngZone.onStable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
            .subscribe(() => this.contentRenderFailed.next());
    }
    /** Instantiate a ExampleViewer for each example. */
    loadComponents(componentName, componentClass) {
        const exampleElements = this._elementRef.nativeElement.querySelectorAll(`[${componentName}]`);
        Array.prototype.slice.call(exampleElements).forEach((element) => {
            const example = element.getAttribute(componentName);
            const portalHost = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.DomPortalOutlet(element, this._componentFactoryResolver, this._appRef, this._injector);
            const examplePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(componentClass, this._viewContainerRef);
            const exampleViewer = portalHost.attach(examplePortal);
            exampleViewer.instance.example = example;
            this.portalHosts.push(portalHost);
        });
    }
    clearLiveExamples() {
        this.portalHosts.forEach((h) => h.dispose());
        this.portalHosts = [];
    }
}
DocViewer.ɵfac = function DocViewer_Factory(t) { return new (t || DocViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DocFetcher)); };
DocViewer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DocViewer, selectors: [["doc-viewer"]], inputs: { documentUrl: "documentUrl" }, outputs: { contentRendered: "contentRendered", contentRenderFailed: "contentRenderFailed" }, decls: 1, vars: 0, template: function DocViewer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Loading document...");
    } }, encapsulation: 2 });


/***/ }),

/***/ 33881:
/*!*********************************************************************************!*\
  !*** ./packages/docs/src/app/shared/documentation-items/documentation-items.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationItems": function() { return /* binding */ DocumentationItems; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const COMPONENTS = 'components';
const CDK = 'cdk';
const DOCS = {
    [COMPONENTS]: [
        {
            id: 'indicators',
            name: 'Indicators',
            summary: '',
            items: [
                {
                    id: 'alerts',
                    name: 'Alerts',
                    summary: '',
                    examples: ['alerts-types']
                },
                {
                    id: 'badges',
                    name: 'Badges',
                    summary: '',
                    examples: ['badges-types']
                },
                {
                    id: 'icon',
                    name: 'Icon',
                    summary: '',
                    examples: ['icon-types']
                },
                {
                    id: 'progress-bar',
                    name: 'Progress-bar',
                    summary: '',
                    examples: ['progress-bar-types']
                },
                {
                    id: 'progress-spinner',
                    name: 'Progress-spinner',
                    summary: '',
                    examples: ['progress-spinner-types']
                },
                {
                    id: 'tags',
                    name: 'Tags',
                    summary: '',
                    examples: ['tags-types']
                }
            ]
        },
        {
            id: 'modals',
            name: 'Popups & Modals',
            summary: '',
            items: [
                {
                    id: 'modal',
                    name: 'Modal',
                    summary: '',
                    examples: ['modal-types']
                },
                {
                    id: 'popover',
                    name: 'Popover',
                    summary: '',
                    examples: ['popover-types']
                },
                {
                    id: 'sidepanel',
                    name: 'Sidepanel',
                    summary: '',
                    examples: ['sidepanel-types']
                },
                {
                    id: 'tooltip',
                    name: 'Tooltip',
                    summary: '',
                    examples: ['tooltip-types']
                }
            ]
        },
        {
            id: 'forms',
            name: 'Form Controls',
            summary: 'Controls that collect and validate user input.',
            items: [
                {
                    id: 'checkbox',
                    name: 'Checkbox',
                    summary: '',
                    examples: ['checkbox-types']
                },
                {
                    id: 'datepicker',
                    name: 'Datepicker',
                    summary: '',
                    examples: ['datepicker-types']
                },
                {
                    id: 'input',
                    name: 'Input',
                    summary: '',
                    examples: ['input-types']
                },
                {
                    id: 'textarea',
                    name: 'Textarea',
                    summary: '',
                    examples: ['textarea-types']
                },
                {
                    id: 'radio',
                    name: 'Radio',
                    summary: '',
                    examples: ['radio-types']
                },
                {
                    id: 'timepicker',
                    name: 'Timepicker',
                    summary: '',
                    examples: ['timepicker-types']
                },
                {
                    id: 'select',
                    name: 'Select',
                    summary: '',
                    examples: ['select-types']
                },
                {
                    id: 'tree-select',
                    name: 'Tree-select',
                    summary: '',
                    examples: ['treeSelect-types']
                },
                {
                    id: 'autocomplete',
                    name: 'Autocomplete',
                    summary: '',
                    examples: ['autocomplete-types']
                },
                {
                    id: 'tags-input',
                    name: 'Tags input',
                    summary: '',
                    examples: ['tags-input-types']
                },
                {
                    id: 'tags-autocomplete',
                    name: 'Tags autocomplete',
                    summary: '',
                    examples: ['tags-autocomplete-types']
                }
            ]
        },
        {
            id: 'nav',
            name: 'Navigation',
            summary: 'Menus, toolbars that organise your content.',
            items: [
                {
                    id: 'link',
                    name: 'Link',
                    summary: '',
                    examples: ['link-types']
                },
                {
                    id: 'navbar',
                    name: 'Navbar',
                    summary: '',
                    examples: ['navbar-types']
                }
            ]
        },
        {
            id: 'layout',
            name: 'Layout',
            summary: '',
            items: [
                {
                    id: 'card',
                    name: 'Card',
                    summary: '',
                    examples: ['card-types']
                },
                {
                    id: 'splitter',
                    name: 'Splitter',
                    summary: '',
                    examples: ['splitter-types']
                },
                {
                    id: 'divider',
                    name: 'Divider',
                    summary: '',
                    examples: ['divider-types']
                },
                {
                    id: 'tabs',
                    name: 'Tabs',
                    summary: '',
                    examples: ['tabs-types']
                },
                {
                    id: 'layout-flex',
                    name: 'Layout flex',
                    summary: '',
                    examples: ['layout-flex-types']
                }
            ]
        },
        {
            id: 'buttons',
            name: 'Buttons',
            summary: 'Buttons, toggles.',
            items: [
                {
                    id: 'button',
                    name: 'Button',
                    summary: 'An interactive button with a range of presentation options.',
                    examples: ['button-types']
                },
                {
                    id: 'button-toggle',
                    name: 'Button Toggle',
                    summary: '',
                    examples: ['button-toggle-types']
                },
                {
                    id: 'toggle',
                    name: 'Toggle',
                    summary: '',
                    examples: ['toggle-types']
                },
                {
                    id: 'dropdown',
                    name: 'Dropdown',
                    summary: '',
                    examples: ['dropdown-types']
                }
            ]
        },
        {
            id: 'core/styles',
            name: 'Styles',
            summary: 'styles',
            items: [
                {
                    id: 'typography',
                    name: 'Typography',
                    summary: '',
                    examples: ['typography-types']
                }
            ]
        },
        {
            id: 'core/styles',
            name: 'Data list',
            summary: 'styles',
            items: [
                {
                    id: 'list',
                    name: 'List',
                    summary: '',
                    examples: ['list-types']
                },
                {
                    id: 'tree',
                    name: 'Tree',
                    summary: '',
                    examples: ['tree-types']
                },
                {
                    id: 'tags-list',
                    name: 'Tags list',
                    summary: '',
                    examples: ['tags-list-types']
                },
                {
                    id: 'table',
                    name: 'Table',
                    summary: '',
                    examples: ['table-types']
                }
            ]
        },
        {
            id: 'core/styles',
            name: 'Formatters',
            summary: 'styles',
            items: [
                {
                    id: 'number-formatter',
                    name: 'Number',
                    summary: '',
                    examples: ['number-types']
                },
                {
                    id: 'date-formatter',
                    name: 'Date',
                    summary: '',
                    examples: ['date-types']
                }
            ]
        },
        {
            id: 'core/styles',
            name: 'Validation',
            summary: 'styles',
            items: [
                {
                    id: 'validation',
                    name: 'Validation',
                    summary: '',
                    examples: ['validation-types']
                }
            ]
        },
        {
            id: 'core/styles',
            name: 'Forms',
            summary: 'styles',
            items: [
                {
                    id: 'forms',
                    name: 'Forms',
                    summary: '',
                    examples: ['forms-types']
                }
            ]
        }
    ],
    [CDK]: []
};
for (const category of DOCS[COMPONENTS]) {
    for (const doc of category.items) {
        doc.packageName = 'mosaic';
    }
}
for (const category of DOCS[CDK]) {
    for (const doc of category.items) {
        doc.packageName = 'cdk';
    }
}
const ALL_COMPONENTS = DOCS[COMPONENTS]
    .reduce((result, category) => result.concat(category.items), []);
const ALL_CDK = DOCS[CDK].reduce((result, cdk) => result.concat(cdk.items), []);
const ALL_DOCS = ALL_COMPONENTS.concat(ALL_CDK);
const ALL_CATEGORIES = DOCS[COMPONENTS].concat(DOCS[CDK]);
class DocumentationItems {
    getCategories(section) {
        return DOCS[section];
    }
    getItems(section) {
        if (section === COMPONENTS) {
            return ALL_COMPONENTS;
        }
        if (section === CDK) {
            return ALL_CDK;
        }
        return [];
    }
    getItemById(id, section) {
        const sectionLookup = section === 'cdk' ? 'cdk' : 'mosaic';
        return ALL_DOCS.find((doc) => doc.id === id && doc.packageName === sectionLookup);
    }
    getCategoryById(id) {
        return ALL_CATEGORIES.find((c) => c.id === id);
    }
}
DocumentationItems.ɵfac = function DocumentationItems_Factory(t) { return new (t || DocumentationItems)(); };
DocumentationItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentationItems, factory: DocumentationItems.ɵfac });


/***/ }),

/***/ 95135:
/*!***********************************************************************!*\
  !*** ./packages/docs/src/app/shared/example-viewer/example-viewer.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleViewer": function() { return /* binding */ ExampleViewer; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic-examples */ 94658);
/* harmony import */ var _copier_copier_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../copier/copier.service */ 25849);

/* tslint:disable:prefer-template no-string-literal */





function ExampleViewer_div_1_2_ng_template_0_Template(rf, ctx) { }
function ExampleViewer_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExampleViewer_div_1_2_ng_template_0_Template, 0, 0, "ng-template", 7);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", ctx_r4.exampleComponentType)("ngComponentOutletNgModuleFactory", ctx_r4.exampleModuleFactory);
} }
function ExampleViewer_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleViewer_div_1_2_Template, 1, 2, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.exampleComponentType && ctx_r0.exampleModuleFactory);
} }
function ExampleViewer_div_2_mc_tab_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "pre", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "pre", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "doc-viewer", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tabName_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", tabName_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.lineNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentUrl", ctx_r6.exampleTabs[tabName_r7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("hljs-shadow ", ctx_r6.isSourceShown || ctx_r6.isSwitcherHidden ? ctx_r6.shadowHide : null, "");
} }
const _c0 = function (a0, a1) { return { "mc-active": a0, "mc-focused": a1 }; };
function ExampleViewer_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "stackblitz-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleViewer_div_2_Template_i_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.copyCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-tab-group", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectedTabChange", function ExampleViewer_div_2_Template_mc_tab_group_selectedTabChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.setLineNumbers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ExampleViewer_div_2_mc_tab_8_Template, 11, 6, "mc-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleViewer_div_2_Template_span_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.toggleSourceView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExampleViewer_div_2_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.toggleSourceView(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("docs-example-viewer__source", true)("docs-example-viewer__source_hidden", !(ctx_r1.isSourceShown || ctx_r1.isSwitcherHidden));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("example", ctx_r1.example);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.getExampleTabNames());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("docs-example-source__switcher", true)("docs-example-source__switcher_hide", ctx_r1.isSwitcherHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("docs-example-source__show", true)("docs-example-source__hide", ctx_r1.isSourceShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](20, _c0, ctx_r1.active, ctx_r1.focus));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("docs-example-source__show", true)("docs-example-source__hide", !ctx_r1.isSourceShown);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](23, _c0, ctx_r1.active, ctx_r1.focus));
} }
function ExampleViewer_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Oops, this code example is lost... But you can help us find it! Just send a Pull Request to this repository: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Mosaic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/** Regular expression that matches a file name and its extension */
const fileExtensionRegex = /(.*)\.(\w+)/;
/** Preferred order for files of an example displayed in the viewer. */
const preferredExampleFileOrder = ['HTML', 'TS', 'CSS'];
class ExampleViewer {
    constructor(copier, elementRef) {
        this.copier = copier;
        this.elementRef = elementRef;
        /** Component type for the current example. */
        this.exampleComponentType = null;
        /** Module factory that declares the example component. */
        this.exampleModuleFactory = null;
        /** Whether the source for the example is being displayed. */
        this.isSourceShown = false;
        this.isSwitcherHidden = false;
        this.shadowHide = 'hljs-shadow_hidden';
        this.maxEditorLength = 15;
        this.lineNumbers = '';
        this.codeCopyDelay = 1000;
        this.codeCopySuccessClass = 'docs-example-source-copy_success';
        this.elementRef = elementRef;
    }
    /** String key of the currently displayed example. */
    get example() {
        return this._example;
    }
    set example(exampleName) {
        if (exampleName && exampleName !== this._example && _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_2__.EXAMPLE_COMPONENTS[exampleName]) {
            this._example = exampleName;
            this.exampleData = _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_2__.EXAMPLE_COMPONENTS[exampleName];
            this.generateExampleTabs();
            this.loadExampleComponent().catch((error) => 
            // tslint:disable-next-line:no-console
            console.error(`Could not load example '${exampleName}': ${error}`));
        }
        else {
            // tslint:disable-next-line:no-console
            console.error(`Could not find example: ${exampleName}`);
        }
    }
    ngAfterContentChecked() {
        if (!this.lineNumbers) {
            this.setLineNumbers();
        }
    }
    setLineNumbers() {
        const exampleSource = this.elementRef
            .nativeElement.querySelector('.mc-tab-body__active .docs-example-source-viewer');
        if (exampleSource) {
            const text = exampleSource.textContent.match(/\n/g);
            const length = text ? text.length + 1 : 0;
            this.lineNumbers = '';
            for (let i = 1; i <= length; i++) {
                this.lineNumbers += `${i}\n`;
            }
            this.isSwitcherHidden = length < this.maxEditorLength;
        }
    }
    toggleSourceView() {
        this.isSourceShown = !this.isSourceShown;
    }
    getExampleTabNames() {
        return this.exampleTabs ? Object.keys(this.exampleTabs).sort((a, b) => {
            let indexA = preferredExampleFileOrder.indexOf(a);
            let indexB = preferredExampleFileOrder.indexOf(b);
            // Files which are not part of the preferred example file order should be
            // moved after all items with a preferred index.
            if (indexA === -1) {
                indexA = preferredExampleFileOrder.length;
            }
            if (indexB === -1) {
                indexB = preferredExampleFileOrder.length;
            }
            return (indexA - indexB) || 1;
        }) : [];
    }
    copyCode(event) {
        const code = this.elementRef.nativeElement.querySelector('.docs-example-source-viewer');
        // event.target.parentNode.parentNode.select();
        if (!code) {
            return;
        }
        const range = document.createRange();
        range.selectNodeContents(code);
        const sel = window.getSelection();
        if (!sel) {
            return;
        }
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        sel.removeAllRanges();
        event.target.parentNode.classList.add(this.codeCopySuccessClass);
        setTimeout(() => event.target.parentNode.classList.remove(this.codeCopySuccessClass), this.codeCopyDelay);
    }
    loadExampleComponent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (this._example != null) {
                const { componentName, module } = _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_2__.EXAMPLE_COMPONENTS[this._example];
                // Lazily loads the example package that contains the requested example. Webpack needs to be
                // able to statically determine possible imports for proper chunk generation. Explicitly
                // specifying the path to the `fesm2015` folder as first segment instructs Webpack to generate
                // chunks for each example flat esm2015 bundle. To avoid generating unnecessary chunks for
                // source maps (which would never be loaded), we instruct Webpack to exclude source map
                // files. More details: https://webpack.js.org/api/module-methods/#magic-comments.
                // module.importSpecifier
                // @ts-ignore
                const moduleExports = yield __webpack_require__(49398)(`./${module.importPath}`);
                this.exampleComponentType = moduleExports[componentName];
                // The components examples package is built with Ivy. This means that no factory files are
                // generated. To retrieve the factory of the AOT compiled module, we simply pass the module
                // class symbol to Ivy's module factory constructor. There is no equivalent for View Engine,
                // where factories are stored in separate files. Hence the API is currently Ivy-only.
                this.exampleModuleFactory = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵNgModuleFactory"](moduleExports[module.name]);
                // Since the data is loaded asynchronously, we can't count on the native behavior
                // that scrolls the element into view automatically. We do it ourselves while giving
                // the page some time to render.
                // tslint:disable-next-line:no-typeof-undefined
                if (typeof location !== 'undefined' && location.hash.slice(1) === this._example) {
                    // tslint:disable-next-line:no-magic-numbers
                    setTimeout(() => this.elementRef.nativeElement.scrollIntoView(), 300);
                }
            }
        });
    }
    generateExampleTabs() {
        this.exampleTabs = {};
        if (this.exampleData) {
            const exampleBaseFileName = `${this.example}-example`;
            const docsContentPath = `docs-content/examples-highlighted/${this.exampleData.packagePath}`;
            for (const fileName of this.exampleData.files) {
                // Since the additional files refer to the original file name, we need to transform
                // the file name to match the highlighted HTML file that displays the source.
                const fileSourceName = fileName.replace(fileExtensionRegex, '$1-$2.html');
                const importPath = `${docsContentPath}/${fileSourceName}`;
                if (fileName === `${exampleBaseFileName}.ts`) {
                    this.exampleTabs['TS'] = importPath;
                }
                else if (fileName === `${exampleBaseFileName}.css`) {
                    this.exampleTabs['CSS'] = importPath;
                }
                else if (fileName === `${exampleBaseFileName}.html`) {
                    this.exampleTabs['HTML'] = importPath;
                }
                else {
                    this.exampleTabs[fileName] = importPath;
                }
            }
        }
    }
}
ExampleViewer.ɵfac = function ExampleViewer_Factory(t) { return new (t || ExampleViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_copier_copier_service__WEBPACK_IMPORTED_MODULE_0__.CopierService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
ExampleViewer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleViewer, selectors: [["example-viewer"]], inputs: { example: "example" }, decls: 5, vars: 3, consts: [[1, "docs-example-viewer__wrapper"], ["class", "docs-example-viewer__example", 4, "ngIf"], [3, "docs-example-viewer__source", "docs-example-viewer__source_hidden", 4, "ngIf", "ngIfElse"], ["lostExample", ""], [1, "docs-example-viewer__example"], [1, "docs-example-viewer-body"], [4, "ngIf"], [3, "ngComponentOutlet", "ngComponentOutletNgModuleFactory"], [3, "example"], [1, "docs-example-source-copy"], [1, "code-copy__copied"], [1, "mc", "mc-check_16"], [1, "code-copy__icon", "mc", "mc-copy_16", 3, "click"], [3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], ["mc-link", "", 3, "ngClass", "click"], [1, "mc-link__text"], [1, "mc", "mc-angle-down-M_16"], [1, "mc", "mc-angle-up-M_16"], [3, "label"], [1, "docs-example-source-wrapper"], [1, "docs-example-numbers", "hljs-line-numbers"], [1, "docs-example-source", "hljs"], [1, "docs-example-source-viewer", 3, "documentUrl"], ["viewer", ""], [1, "mc-alert", "mc-alert_error", "mc-alert_dismissible"], ["href", "//github.com/positive-js/mosaic/pulls", 1, "docs-markdown__a"]], template: function ExampleViewer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleViewer_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleViewer_div_2_Template, 20, 26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExampleViewer_ng_template_3_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exampleData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exampleData)("ngIfElse", _r2);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 20px 0 0;\n}\n\n.docs-example-source__show[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px;\n}\n\n.docs-example-source__hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.docs-example-source-copy[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 40px;\n  right: 0;\n  z-index: 10;\n  padding: 6px 6px;\n}\n\n.docs-example-source-copy[_ngcontent-%COMP%]   .code-copy__copied[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 14px;\n}\n\n.docs-example-source-copy_success[_ngcontent-%COMP%]   .code-copy__copied[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.docs-example-source-copy_success[_ngcontent-%COMP%]   .code-copy__icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.docs-example-viewer-title[_ngcontent-%COMP%] {\n  align-content: center;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding: 8px 20px;\n}\n\n.docs-example-viewer-title-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.docs-example-source-wrapper[_ngcontent-%COMP%] {\n  min-height: 201px;\n  display: flex;\n}\n\n.docs-example-source-wrapper[_ngcontent-%COMP%]:hover   .docs-example-source-copy[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.docs-example-viewer__source_hidden[_ngcontent-%COMP%]   .docs-example-source-wrapper[_ngcontent-%COMP%] {\n  height: 201px;\n  overflow-y: hidden;\n}\n\n.docs-example-numbers[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 44px;\n  padding: 12px 8px;\n  margin: 0;\n}\n\n.docs-example-source[_ngcontent-%COMP%] {\n  position: relative;\n  overflow-y: hidden;\n  display: flex;\n  margin: 0;\n  flex-grow: 1;\n  padding: 12px;\n  min-height: 150px;\n}\n\n.docs-example-source-viewer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  top: 12px;\n}\n\n.docs-example-viewer-body[_ngcontent-%COMP%] {\n  padding: 16px;\n  overflow: auto;\n}\n\n.docs-example-source__switcher_hide[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUtdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBR1E7RUFDSSxjQUFBO0FBRFo7O0FBSVE7RUFDSSxhQUFBO0FBRlo7O0FBT0E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUNJLGNBQUE7QUFKSjs7QUFPQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUpKOztBQVFJO0VBQ0kscUJBQUE7QUFMUjs7QUFVSTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQVBSOztBQVdBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBUko7O0FBV0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBUko7O0FBV0E7RUFDSSxhQUFBO0VBRUEsY0FBQTtBQVRKOztBQVlBO0VBQ0ksa0JBQUE7QUFUSiIsImZpbGUiOiJleGFtcGxlLXZpZXdlci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIwcHggMCAwO1xufVxuXG4uZG9jcy1leGFtcGxlLXNvdXJjZV9fc2hvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDhweDtcbn1cblxuLmRvY3MtZXhhbXBsZS1zb3VyY2VfX2hpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb2NzLWV4YW1wbGUtc291cmNlLWNvcHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDBweDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBwYWRkaW5nOiA2cHggNnB4O1xuXG4gICAgLmNvZGUtY29weV9fY29waWVkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgICZfc3VjY2VzcyB7XG4gICAgICAgIC5jb2RlLWNvcHlfX2NvcGllZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb2RlLWNvcHlfX2ljb24ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRvY3MtZXhhbXBsZS12aWV3ZXItdGl0bGUge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDIwcHg7XG59XG5cbi5kb2NzLWV4YW1wbGUtdmlld2VyLXRpdGxlLXNwYWNlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5kb2NzLWV4YW1wbGUtc291cmNlLXdyYXBwZXIge1xuICAgIG1pbi1oZWlnaHQ6IDIwMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kb2NzLWV4YW1wbGUtc291cmNlLXdyYXBwZXI6aG92ZXIge1xuICAgIC5kb2NzLWV4YW1wbGUtc291cmNlLWNvcHkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG4uZG9jcy1leGFtcGxlLXZpZXdlcl9fc291cmNlX2hpZGRlbiB7XG4gICAgLmRvY3MtZXhhbXBsZS1zb3VyY2Utd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogMjAxcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG59XG5cbi5kb2NzLWV4YW1wbGUtbnVtYmVycyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgcGFkZGluZzogMTJweCA4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uZG9jcy1leGFtcGxlLXNvdXJjZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cblxuLmRvY3MtZXhhbXBsZS1zb3VyY2Utdmlld2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTJweDtcbiAgICB0b3A6IDEycHg7XG59XG5cbi5kb2NzLWV4YW1wbGUtdmlld2VyLWJvZHkge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmRvY3MtZXhhbXBsZS1zb3VyY2VfX3N3aXRjaGVyX2hpZGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 75941:
/*!**********************************************************!*\
  !*** ./packages/docs/src/app/shared/stackblitz/index.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackblitzButton": function() { return /* reexport safe */ _stackblitz_button__WEBPACK_IMPORTED_MODULE_0__.StackblitzButton; },
/* harmony export */   "StackblitzButtonModule": function() { return /* reexport safe */ _stackblitz_button__WEBPACK_IMPORTED_MODULE_0__.StackblitzButtonModule; }
/* harmony export */ });
/* harmony import */ var _stackblitz_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stackblitz-button */ 82600);



/***/ }),

/***/ 82600:
/*!**********************************************************************!*\
  !*** ./packages/docs/src/app/shared/stackblitz/stackblitz-button.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackblitzButton": function() { return /* binding */ StackblitzButton; },
/* harmony export */   "StackblitzButtonModule": function() { return /* binding */ StackblitzButtonModule; }
/* harmony export */ });
/* harmony import */ var _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic-examples */ 94658);
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ 80623);
/* harmony import */ var _mosaic_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../mosaic/icon */ 44451);
/* harmony import */ var _mosaic_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../mosaic/link */ 64122);
/* harmony import */ var _stackblitz_writer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stackblitz-writer */ 60148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _mosaic_link_link_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../mosaic/link/link.component */ 98446);
/* harmony import */ var _mosaic_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../mosaic/icon/icon.component */ 81876);









class StackblitzButton {
    constructor(stackblitzWriter) {
        this.stackblitzWriter = stackblitzWriter;
        /**
         * The button becomes disabled if the user hovers over the button before the stackblitz form
         * is created. After the form is created, the button becomes enabled again.
         * The form creation usually happens extremely quickly, but we handle the case of the
         * stackblitz not yet being ready for people will poor network connections or slow devices.
         */
        this.isDisabled = false;
    }
    set example(example) {
        if (example) {
            const exampleData = new _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_5__.ExampleData(example);
            const isTest = example.includes('harness');
            this.stackblitzWriter.constructStackblitzForm(example, exampleData, isTest).then((stackblitzForm) => {
                this.stackblitzForm = stackblitzForm;
                this.isDisabled = false;
            });
        }
        else {
            this.isDisabled = true;
        }
    }
    openStackblitz() {
        // When the form is submitted, it must be in the document body. The standard of forms is not
        // to submit if it is detached from the document. See the following chromium commit for
        // more details:
        // https://chromium.googlesource.com/chromium/src/+/962c2a22ddc474255c776aefc7abeba00edc7470%5E!
        document.body.appendChild(this.stackblitzForm);
        this.stackblitzForm.submit();
        document.body.removeChild(this.stackblitzForm);
    }
}
StackblitzButton.ɵfac = function StackblitzButton_Factory(t) { return new (t || StackblitzButton)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_stackblitz_writer__WEBPACK_IMPORTED_MODULE_2__.StackblitzWriter)); };
StackblitzButton.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: StackblitzButton, selectors: [["stackblitz-button"]], hostBindings: function StackblitzButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseover", function StackblitzButton_mouseover_HostBindingHandler() { return ctx.isDisabled = !ctx.stackblitzForm; });
    } }, inputs: { example: "example" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_stackblitz_writer__WEBPACK_IMPORTED_MODULE_2__.StackblitzWriter])], decls: 10, vars: 1, consts: [[1, "stackblitz__wrapper"], ["mc-link", "", 3, "disabled", "click"], ["mc-icon", "", "width", "9.5px", "height", "14px", "viewBox", "0 0 23 34", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 1, "stackblitz__icon"], ["id", "Symbols", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], [1, "stackblitz__icon-g"], ["id", "Path", "points", "0 19.9187087 9.87007874 19.9187087 4.12007874 34 23 13.9612393 13.0846457 13.9612393 18.7893701 0"], [1, "mc-link__text"]], template: function StackblitzButton_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StackblitzButton_Template_span_click_1_listener() { return ctx.openStackblitz(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "desc");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Created with Sketch.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "polygon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Stackblitz");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isDisabled);
    } }, directives: [_mosaic_link_link_component__WEBPACK_IMPORTED_MODULE_3__.McLink, _mosaic_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__.McIcon, _mosaic_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__.McIconCSSStyler], styles: [".stackblitz__wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  z-index: 100;\n  padding: 10px;\n}\n.stackblitz__icon[_ngcontent-%COMP%] {\n  width: 9.5px;\n  height: 14px;\n}\n.stackblitz__link[_ngcontent-%COMP%] {\n  margin-top: 11px;\n  margin-bottom: 11px;\n  background: none;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWNrYmxpdHotYnV0dG9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtBQUZSO0FBS0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUhSO0FBTUk7RUFFUSxnQkFBQTtFQUNBLG1CQUFBO0VBR0osZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBUFIiLCJmaWxlIjoic3RhY2tibGl0ei1idXR0b24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFja2JsaXR6IHtcblxuICAgICZfX3dyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG5cbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAmX19pY29uIHtcbiAgICAgICAgd2lkdGg6IDkuNXB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgfVxuXG4gICAgJl9fbGluayB7XG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgICAgICAgYm90dG9tOiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbiJdfQ== */"] });
class StackblitzButtonModule {
}
StackblitzButtonModule.ɵfac = function StackblitzButtonModule_Factory(t) { return new (t || StackblitzButtonModule)(); };
StackblitzButtonModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: StackblitzButtonModule });
StackblitzButtonModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_stackblitz_writer__WEBPACK_IMPORTED_MODULE_2__.StackblitzWriter], imports: [[_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_7__.McButtonModule, _mosaic_icon__WEBPACK_IMPORTED_MODULE_0__.McIconModule, _mosaic_link__WEBPACK_IMPORTED_MODULE_1__.McLinkModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](StackblitzButtonModule, { declarations: [StackblitzButton], imports: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_7__.McButtonModule, _mosaic_icon__WEBPACK_IMPORTED_MODULE_0__.McIconModule, _mosaic_link__WEBPACK_IMPORTED_MODULE_1__.McLinkModule], exports: [StackblitzButton] }); })();


/***/ }),

/***/ 60148:
/*!**********************************************************************!*\
  !*** ./packages/docs/src/app/shared/stackblitz/stackblitz-writer.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StackblitzWriter": function() { return /* binding */ StackblitzWriter; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic-examples */ 94658);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 92597);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53466);
/* harmony import */ var _version_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../version/version */ 59979);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);

/* tslint:disable:no-parameter-reassignment */







const STACKBLITZ_URL = 'https://run.stackblitz.com/api/angular/v1';
const COPYRIGHT = `Copyright 2020 Positive Technologies. All Rights Reserved.
    Use of this source code is governed by an MIT-style license.`;
/**
 * Path that refers to the docs-content from the "@ptsecurity/mosaic-examples" package. The
 * structure is defined in the repository, but we include the docs-content as assets in
 * in the CLI configuration.
 */
const DOCS_CONTENT_PATH = 'docs-content/examples-source';
const TEMPLATE_PATH = 'assets/stackblitz/';
const TEMPLATE_FILES = [
    '.editorconfig',
    '.gitignore',
    'index.html',
    'tsconfig.json',
    'tsconfig.app.json',
    'tsconfig.spec.json',
    'styles.css',
    'polyfills.ts',
    'angular.json',
    'main.ts',
    'mosaic-module.ts'
];
const TEST_TEMPLATE_PATH = 'assets/stack-blitz-tests/';
const TEST_TEMPLATE_FILES = [
    '.editorconfig',
    '.gitignore',
    'index.html',
    'tsconfig.json',
    'tsconfig.app.json',
    'tsconfig.spec.json',
    'styles.css',
    'polyfills.ts',
    'angular.json',
    'main.ts',
    'mosaic-module.ts'
];
const TAGS = ['angular', 'mosaic', 'example'];
const angularVersion = '^11.0.0';
const dependencies = {
    '@ptsecurity/cdk': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@ptsecurity/mosaic': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@ptsecurity/mosaic-icons': '^5.3.0',
    '@ptsecurity/mosaic-luxon-adapter': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@ptsecurity/mosaic-moment-adapter': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@angular/cdk': angularVersion,
    '@angular/animations': angularVersion,
    '@angular/common': angularVersion,
    '@angular/compiler': angularVersion,
    '@angular/core': angularVersion,
    '@angular/forms': angularVersion,
    '@angular/platform-browser': angularVersion,
    '@angular/platform-browser-dynamic': angularVersion,
    '@angular/router': angularVersion,
    'core-js': '^3.6.5',
    rxjs: '^6.5.0',
    messageformat: '^2.0.5',
    tslib: '^2.0.1',
    'zone.js': '~0.10.3',
    moment: '^2.24.0',
    luxon: '^1.27.0'
};
const testDependencies = {
    '@ptsecurity/cdk': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@ptsecurity/mosaic': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@ptsecurity/mosaic-icons': '^5.3.0',
    '@ptsecurity/mosaic-luxon-adapter': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@ptsecurity/mosaic-moment-adapter': _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion,
    '@angular/cdk': angularVersion,
    '@angular/animations': angularVersion,
    '@angular/common': angularVersion,
    '@angular/compiler': angularVersion,
    '@angular/core': angularVersion,
    '@angular/forms': angularVersion,
    '@angular/platform-browser': angularVersion,
    '@angular/platform-browser-dynamic': angularVersion,
    '@angular/router': angularVersion,
    'core-js': '^3.6.5',
    rxjs: '^6.5.0',
    messageformat: '^2.0.5',
    tslib: '^2.0.1',
    'zone.js': '~0.10.3',
    moment: '^2.24.0',
    luxon: '^1.27.0'
};
/**
 * Stackblitz writer, write example files to stackblitz
 *
 * StackBlitz API
 * URL: https://run.stackblitz.com/api/aio/v1/
 * data: {
 *   // File name, directory and content of files
 *   files[file-name1]: file-content1,
 *   files[directory-name/file-name2]: file-content2,
 *   // Can add multiple tags
 *   tags[0]: tag-0,
 *   // Description of stackblitz
 *   description: description,
 *   // Private or not
 *   private: true
 *  // Dependencies
 *  dependencies: dependencies
 * }
 */
class StackblitzWriter {
    constructor(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
        this.fileCache = new Map();
    }
    /**
     * Returns an HTMLFormElement that will open a new stackblitz template with the example data when
     * called with submit().
     */
    constructStackblitzForm(exampleId, data, isTest) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const liveExample = _ptsecurity_mosaic_examples__WEBPACK_IMPORTED_MODULE_2__.EXAMPLE_COMPONENTS[exampleId];
            const indexFile = `src%2Fapp%2F${data.indexFilename}`;
            const form = this.createFormElement(indexFile);
            const baseExamplePath = `${DOCS_CONTENT_PATH}/${liveExample.module.importSpecifier}/${exampleId}/`;
            TAGS.forEach((tag, i) => this.appendFormInput(form, `tags[${i}]`, tag));
            this.appendFormInput(form, 'private', 'true');
            this.appendFormInput(form, 'description', data.description);
            this.appendFormInput(form, 'dependencies', JSON.stringify(isTest ? testDependencies : dependencies));
            yield this.ngZone.runOutsideAngular(() => {
                const fileReadPromises = [];
                // Read all of the template files.
                (isTest ? TEST_TEMPLATE_FILES : TEMPLATE_FILES).forEach((file) => fileReadPromises.push(this.loadAndAppendFile(form, data, file, isTest ? TEST_TEMPLATE_PATH : TEMPLATE_PATH, isTest)));
                // Read the example-specific files.
                data.exampleFiles.forEach((file) => fileReadPromises.push(this.loadAndAppendFile(form, data, file, baseExamplePath, isTest)));
                return Promise.all(fileReadPromises);
            });
            return form;
        });
    }
    /** Constructs a new form element that will navigate to the stackblitz url. */
    createFormElement(indexFile) {
        const form = document.createElement('form');
        form.action = `${STACKBLITZ_URL}?file=${indexFile}`;
        form.method = 'post';
        form.target = '_blank';
        return form;
    }
    /** Appends the name and value as an input to the form. */
    appendFormInput(form, name, value) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
    }
    /**
     * Reads the file and adds its text to the form
     * @param form the html form you are appending to
     * @param data example metadata about the example
     * @param filename file name of the example
     * @param path path to the src
     * @param prependApp whether to prepend the 'app' prefix to the path
     */
    readFile(form, data, filename, path, prependApp = true) {
        this.http.get(path + filename, { responseType: 'text' }).subscribe((response) => this.addFileToForm(form, data, response, filename, path, prependApp), 
        // tslint:disable-next-line:no-console
        (error) => console.log(error));
    }
    /**
     * Adds the file text to the form.
     * @param form the html form you are appending to
     * @param data example metadata about the example
     * @param content file contents
     * @param filename file name of the example
     * @param path path to the src
     * @param prependApp whether to prepend the 'app' prefix to the path
     */
    addFileToForm(form, data, content, filename, path, isTest, prependApp = true) {
        if (path === (isTest ? TEST_TEMPLATE_PATH : TEMPLATE_PATH)) {
            content = this.replaceExamplePlaceholderNames(data, filename, content);
        }
        else if (prependApp) {
            // tslint:disable-next-line:prefer-template
            filename = 'app/' + filename;
        }
        this.appendFormInput(form, `files[${filename}]`, this.appendCopyright(filename, content));
    }
    /**
     * The stackblitz template assets contain placeholder names for the examples:
     * "<mosaic-docs-example>" and "MosaicDocsExample".
     * This will replace those placeholders with the names from the example metadata,
     * e.g. "<basic-button-example>" and "BasicButtonExample"
     */
    replaceExamplePlaceholderNames(data, fileName, fileContent) {
        if (fileName === 'index.html') {
            // Replace the component selector in `index,html`.
            // For example, <mosaic-docs-example></mosaic-docs-example> will be replaced as
            // <button-demo></button-demo>
            fileContent = fileContent
                .replace(/mosaic-docs-example/g, data.selectorName)
                .replace(/{{title}}/g, data.description)
                .replace(/{{version}}/g, _version_version__WEBPACK_IMPORTED_MODULE_0__.mosaicVersion);
        }
        else if (fileName === 'main.ts') {
            const joinedComponentNames = data.componentNames.join(', ');
            // Replace the component name in `main.ts`.
            // Replace `import {MosaicDocsExample} from 'mosaic-docs-example'`
            // will be replaced as `import {ButtonDemo} from './button-demo'`
            fileContent = fileContent.replace(/{ MosaicDocsExample }/g, `{${joinedComponentNames}}`);
            // Replace `declarations: [MosaicDocsExample]`
            // will be replaced as `declarations: [ButtonDemo]`
            fileContent = fileContent.replace(/declarations: \[MosaicDocsExample\]/g, `declarations: [${joinedComponentNames}]`);
            // Replace `entryComponents: [MosaicDocsExample]`
            // will be replaced as `entryComponents: [DialogContent]`
            fileContent = fileContent.replace(/entryComponents: \[MosaicDocsExample\]/g, `entryComponents: [${joinedComponentNames}]`);
            // Replace `bootstrap: [MosaicDocsExample]`
            // will be replaced as `bootstrap: [ButtonDemo]`
            // This assumes the first component listed in the main component
            fileContent = fileContent.
                replace(/bootstrap: \[MosaicDocsExample]/g, `bootstrap: [${data.componentNames[0]}]`);
            const dotIndex = data.indexFilename.lastIndexOf('.');
            const importFileName = data.indexFilename.slice(0, dotIndex === -1 ? undefined : dotIndex);
            fileContent = fileContent.replace(/mosaic-docs-example/g, importFileName);
        }
        return fileContent;
    }
    appendCopyright(filename, content) {
        if (filename.indexOf('.ts') > -1 || filename.indexOf('.scss') > -1) {
            content = `${content}\n\n/**  ${COPYRIGHT} */`;
        }
        else if (filename.indexOf('.html') > -1) {
            content = `${content}\n\n<!-- ${COPYRIGHT} -->`;
        }
        return content;
    }
    loadAndAppendFile(form, data, filename, path, isTest, prependApp = true) {
        const url = path + filename;
        let stream = this.fileCache.get(url);
        if (!stream) {
            stream = this.http.get(url, { responseType: 'text' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
            this.fileCache.set(url, stream);
        }
        // The `take(1)` is necessary, because the Promise from `toPromise` resolves on complete.
        return stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1)).toPromise().then((response) => this.addFileToForm(form, data, response, filename, path, isTest, prependApp), 
        // tslint:disable-next-line:no-console
        (error) => console.log(error));
    }
}
StackblitzWriter.ɵfac = function StackblitzWriter_Factory(t) { return new (t || StackblitzWriter)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone)); };
StackblitzWriter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: StackblitzWriter, factory: StackblitzWriter.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51725:
/*!************************************************************************************!*\
  !*** ./packages/docs/src/app/shared/table-of-contents/table-of-contents.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOfContentsModule": function() { return /* binding */ TableOfContentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _table_of_contents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-of-contents */ 68250);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class TableOfContentsModule {
}
TableOfContentsModule.ɵfac = function TableOfContentsModule_Factory(t) { return new (t || TableOfContentsModule)(); };
TableOfContentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TableOfContentsModule });
TableOfContentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TableOfContentsModule, { declarations: [_table_of_contents__WEBPACK_IMPORTED_MODULE_0__.TableOfContents], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_table_of_contents__WEBPACK_IMPORTED_MODULE_0__.TableOfContents] }); })();


/***/ }),

/***/ 68250:
/*!*****************************************************************************!*\
  !*** ./packages/docs/src/app/shared/table-of-contents/table-of-contents.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableOfContents": function() { return /* binding */ TableOfContents; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);





function TableOfContents_div_0_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("docs-level-", link_r2.headerType, " docs-link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("docs-active", link_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1._rootUrl + "#" + link_r2.id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r2.name, " ");
} }
function TableOfContents_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableOfContents_div_0_a_4_Template, 2, 7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.links);
} }
class TableOfContents {
    constructor(_document, _router, route) {
        this._document = _document;
        this._router = _router;
        this.route = route;
        this.links = [];
        this.headerSelectors = '.docs-markdown h3, .docs-markdown h4';
        // tslint:disable-next-line
        this._rootUrl = this._router.url.split('#')[0];
        this.links = this.createLinks();
    }
    createLinks() {
        const links = [];
        const headers = Array.from(this._document.querySelectorAll(this.headerSelectors));
        if (headers.length) {
            for (const header of headers) {
                const name = header.innerText.trim().replace(/^link/, '');
                const { top } = header.getBoundingClientRect();
                links.push({
                    name,
                    type: header.tagName.toLowerCase(),
                    top,
                    id: header.id,
                    active: false
                });
            }
        }
        return links;
    }
}
TableOfContents.ɵfac = function TableOfContents_Factory(t) { return new (t || TableOfContents)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
TableOfContents.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableOfContents, selectors: [["table-of-contents"]], inputs: { links: "links", headerSelectors: "headerSelectors" }, decls: 1, vars: 1, consts: [["class", "docs-toc-container", 4, "ngIf"], [1, "docs-toc-container"], [1, "docs-toc-heading"], [3, "href", "class", "docs-active", 4, "ngFor", "ngForOf"], [3, "href"]], template: function TableOfContents_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableOfContents_div_0_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.links == null ? null : ctx.links.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["[_nghost-%COMP%] {\n  font-size: 13px;\n  width: 19%;\n  position: sticky;\n  top: 0;\n  padding-left: 25px;\n  box-sizing: border-box;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLW9mLWNvbnRlbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBRUEsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6InRhYmxlLW9mLWNvbnRlbnRzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIC8vIFdpZHRoIGlzIGNvbnRhaW5lciB3aWR0aCBtaW51cyBjb250ZW50IHdpZHRoXG4gICAgd2lkdGg6IDE5JTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 59979:
/*!*********************************************************!*\
  !*** ./packages/docs/src/app/shared/version/version.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mosaicVersion": function() { return /* binding */ mosaicVersion; }
/* harmony export */ });
/* tslint:disable:no-var-requires */
const packageJSON = __webpack_require__(/*! ../../../../../../package.json */ 4147);
/** This version will be used in footer and stackblitz. */
const mosaicVersion = packageJSON.version;


/***/ }),

/***/ 2890:
/*!*******************************************************!*\
  !*** ./packages/docs/src/environments/environment.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 74634:
/*!***********************************!*\
  !*** ./packages/docs/src/main.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/ */ 78872);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2890);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfills.ts */ 19750);
/* harmony import */ var _unregister_service_workers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unregister-service-workers */ 2078);




// tslint:disable-next-line:no-import-side-effect


// Unregister all installed service workers and force reload the page if there was
// an old service worker from a previous version of the docs.
(0,_unregister_service_workers__WEBPACK_IMPORTED_MODULE_3__.unregisterServiceWorkers)()
    .then((hadServiceWorker) => hadServiceWorker && location.reload());
// tslint:disable-next-line:blank-lines
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.platformBrowser().bootstrapModule(_app___WEBPACK_IMPORTED_MODULE_0__.AppModule)
    // tslint:disable-next-line:no-console
    .catch((err) => console.error(err));


/***/ }),

/***/ 19750:
/*!****************************************!*\
  !*** ./packages/docs/src/polyfills.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_es_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/es/array */ 79038);
/* harmony import */ var core_js_es_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_es_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_es_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/es/date */ 29653);
/* harmony import */ var core_js_es_date__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_es_date__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_es_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/es/function */ 55261);
/* harmony import */ var core_js_es_function__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_es_function__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/es/map */ 22307);
/* harmony import */ var core_js_es_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_es_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_es_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/es/math */ 5038);
/* harmony import */ var core_js_es_math__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_es_math__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_es_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/es/number */ 21528);
/* harmony import */ var core_js_es_number__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_es_number__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_es_object__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/es/object */ 7771);
/* harmony import */ var core_js_es_object__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_es_object__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/es/parse-float */ 25837);
/* harmony import */ var core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_es_parse_float__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/es/parse-int */ 94044);
/* harmony import */ var core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_es_parse_int__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/es/reflect */ 45511);
/* harmony import */ var core_js_es_reflect__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_es_reflect__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/es/regexp */ 2071);
/* harmony import */ var core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_es_regexp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/es/set */ 34977);
/* harmony import */ var core_js_es_set__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_es_set__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_es_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/es/string */ 60109);
/* harmony import */ var core_js_es_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_es_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/es/symbol */ 68979);
/* harmony import */ var core_js_es_symbol__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_es_symbol__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! zone.js */ 64250);
/* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_14__);
/* tslint:disable:ordered-imports */
// tslint:disable:no-import-side-effect
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.

















/***/ }),

/***/ 2078:
/*!*********************************************************!*\
  !*** ./packages/docs/src/unregister-service-workers.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unregisterServiceWorkers": function() { return /* binding */ unregisterServiceWorkers; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);

/**
 * Unregisters all currently registered service workers and returns a boolean that indicates
 * whether there were service workers registered or not.
 */
function unregisterServiceWorkers() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        if (!navigator.serviceWorker) {
            return false;
        }
        const registrations = yield navigator.serviceWorker.getRegistrations();
        // Walk through every currently registered Service Worker and unregister it.
        registrations.forEach((registration) => registration.unregister());
        return registrations.length > 0;
    });
}


/***/ }),

/***/ 81876:
/*!************************************************!*\
  !*** ./packages/mosaic/icon/icon.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McIconCSSStyler": function() { return /* binding */ McIconCSSStyler; },
/* harmony export */   "McIconBase": function() { return /* binding */ McIconBase; },
/* harmony export */   "McIconMixinBase": function() { return /* binding */ McIconMixinBase; },
/* harmony export */   "McIcon": function() { return /* binding */ McIcon; }
/* harmony export */ });
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const _c0 = ["mc-icon", ""];
const _c1 = ["*"];
// tslint:disable-next-line:naming-convention
class McIconCSSStyler {
}
McIconCSSStyler.ɵfac = function McIconCSSStyler_Factory(t) { return new (t || McIconCSSStyler)(); };
McIconCSSStyler.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: McIconCSSStyler, selectors: [["", "mc-icon", ""]], hostAttrs: [1, "mc", "mc-icon"] });
class McIconBase {
    // tslint:disable-next-line:naming-convention
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
// tslint:disable-next-line: naming-convention
const McIconMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinColor)(McIconBase, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ThemePalette.Empty);
class McIcon extends McIconMixinBase {
    constructor(elementRef, iconName) {
        super(elementRef);
        if (iconName) {
            elementRef.nativeElement.classList.add(iconName);
        }
    }
    getHostElement() {
        return this._elementRef.nativeElement;
    }
}
McIcon.ɵfac = function McIcon_Factory(t) { return new (t || McIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('mc-icon')); };
McIcon.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: McIcon, selectors: [["", "mc-icon", ""]], inputs: { color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function McIcon_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: [".mc-icon-rotate_90 {\n  transform: rotate(90deg);\n}\n\n.mc-icon-rotate_180 {\n  transform: rotate(180deg);\n}\n\n.mc-icon-rotate_270 {\n  transform: rotate(270deg);\n}\n\n.mc-icon-flip-h {\n  transform: scaleY(-1);\n}\n\n.mc-icon-flip-v {\n  transform: scaleX(-1);\n}\n\n.mc-icon-flip-vh {\n  transform: scale(-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLHdCQUFBO0FBVEo7O0FBWUE7RUFDSSx5QkFBQTtBQVRKOztBQVlBO0VBQ0kseUJBQUE7QUFUSjs7QUFZQTtFQUNJLHFCQUFBO0FBVEo7O0FBWUE7RUFDSSxxQkFBQTtBQVRKOztBQVlBO0VBQ0ksb0JBQUE7QUFUSiIsImZpbGUiOiJpY29uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdpY29uLXRoZW1lJztcblxuXG5AbWl4aW4gbWMtaWNvbi1zaXplKCRwYWRkaW5nLCAkbGluZS1oZWlnaHQsICRmb250LXNpemUpIHtcbiAgICBwYWRkaW5nOiAkcGFkZGluZztcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbn1cblxuXG4ubWMtaWNvbi1yb3RhdGVfOTAge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLm1jLWljb24tcm90YXRlXzE4MCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLm1jLWljb24tcm90YXRlXzI3MCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLm1jLWljb24tZmxpcC1oIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgtMSk7XG59XG5cbi5tYy1pY29uLWZsaXAtdiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xufVxuXG4ubWMtaWNvbi1mbGlwLXZoIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcbn1cbiJdfQ== */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 48498:
/*!*********************************************!*\
  !*** ./packages/mosaic/icon/icon.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McIconModule": function() { return /* binding */ McIconModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ 36145);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.component */ 81876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);





class McIconModule {
}
McIconModule.ɵfac = function McIconModule_Factory(t) { return new (t || McIconModule)(); };
McIconModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: McIconModule });
McIconModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule,
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.PlatformModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](McIconModule, { declarations: [_icon_component__WEBPACK_IMPORTED_MODULE_0__.McIcon,
        _icon_component__WEBPACK_IMPORTED_MODULE_0__.McIconCSSStyler], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__.PlatformModule], exports: [_icon_component__WEBPACK_IMPORTED_MODULE_0__.McIcon,
        _icon_component__WEBPACK_IMPORTED_MODULE_0__.McIconCSSStyler] }); })();


/***/ }),

/***/ 44451:
/*!***************************************!*\
  !*** ./packages/mosaic/icon/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McIcon": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McIcon; },
/* harmony export */   "McIconBase": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McIconBase; },
/* harmony export */   "McIconCSSStyler": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McIconCSSStyler; },
/* harmony export */   "McIconMixinBase": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McIconMixinBase; },
/* harmony export */   "McIconModule": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McIconModule; }
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 37319);



/***/ }),

/***/ 37319:
/*!********************************************!*\
  !*** ./packages/mosaic/icon/public-api.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McIconModule": function() { return /* reexport safe */ _icon_module__WEBPACK_IMPORTED_MODULE_0__.McIconModule; },
/* harmony export */   "McIcon": function() { return /* reexport safe */ _icon_component__WEBPACK_IMPORTED_MODULE_1__.McIcon; },
/* harmony export */   "McIconBase": function() { return /* reexport safe */ _icon_component__WEBPACK_IMPORTED_MODULE_1__.McIconBase; },
/* harmony export */   "McIconCSSStyler": function() { return /* reexport safe */ _icon_component__WEBPACK_IMPORTED_MODULE_1__.McIconCSSStyler; },
/* harmony export */   "McIconMixinBase": function() { return /* reexport safe */ _icon_component__WEBPACK_IMPORTED_MODULE_1__.McIconMixinBase; }
/* harmony export */ });
/* harmony import */ var _icon_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.module */ 48498);
/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon.component */ 81876);




/***/ }),

/***/ 64122:
/*!***************************************!*\
  !*** ./packages/mosaic/link/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McLink": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McLink; },
/* harmony export */   "McLinkBase": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McLinkBase; },
/* harmony export */   "McLinkMixinBase": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McLinkMixinBase; },
/* harmony export */   "McLinkModule": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.McLinkModule; },
/* harmony export */   "baseURLRegex": function() { return /* reexport safe */ _public_api__WEBPACK_IMPORTED_MODULE_0__.baseURLRegex; }
/* harmony export */ });
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ 58903);



/***/ }),

/***/ 98446:
/*!************************************************!*\
  !*** ./packages/mosaic/link/link.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McLinkBase": function() { return /* binding */ McLinkBase; },
/* harmony export */   "McLinkMixinBase": function() { return /* binding */ McLinkMixinBase; },
/* harmony export */   "baseURLRegex": function() { return /* binding */ baseURLRegex; },
/* harmony export */   "McLink": function() { return /* binding */ McLink; }
/* harmony export */ });
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);






class McLinkBase {
}
// tslint:disable-next-line: naming-convention
const McLinkMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(McLinkBase));
const baseURLRegex = /^http(s)?:\/\//;
class McLink extends McLinkMixinBase {
    constructor(elementRef, focusMonitor, changeDetector) {
        super();
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.changeDetector = changeDetector;
        this._disabled = false;
        this._pseudo = false;
        this._noUnderline = false;
        this._useVisited = false;
        this.focusMonitor.monitor(elementRef.nativeElement, true);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        const newValue = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this.changeDetector.markForCheck();
        }
    }
    get pseudo() {
        return this._pseudo;
    }
    set pseudo(value) {
        this._pseudo = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get noUnderline() {
        return this._noUnderline;
    }
    set noUnderline(value) {
        this._noUnderline = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get useVisited() {
        return this._useVisited;
    }
    set useVisited(value) {
        this._useVisited = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    }
    get hasIcon() {
        return !!this.icon;
    }
    get print() {
        var _a;
        return this._print || ((_a = this.getHostElement().href) === null || _a === void 0 ? void 0 : _a.replace(baseURLRegex, ''));
    }
    set print(value) {
        this.printMode = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
        this._print = value;
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
    }
    focus() {
        this.getHostElement().focus();
    }
    getHostElement() {
        return this.elementRef.nativeElement;
    }
}
McLink.ɵfac = function McLink_Factory(t) { return new (t || McLink)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
McLink.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: McLink, selectors: [["", "mc-link", ""]], contentQueries: function McLink_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIcon, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
    } }, hostAttrs: [1, "mc-link"], hostVars: 15, hostBindings: function McLink_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null)("tabindex", ctx.tabIndex)("print", ctx.print);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-link_no-underline", ctx.noUnderline)("mc-link_use-visited", ctx.useVisited)("mc-link_pseudo", ctx.pseudo)("mc-link_print", ctx.printMode)("mc-text-only", !ctx.hasIcon)("mc-text-with-icon", ctx.hasIcon);
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", pseudo: "pseudo", noUnderline: "noUnderline", useVisited: "useVisited", print: "print" }, exportAs: ["mcLink"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });


/***/ }),

/***/ 27418:
/*!*********************************************!*\
  !*** ./packages/mosaic/link/link.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McLinkModule": function() { return /* binding */ McLinkModule; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.component */ 98446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




class McLinkModule {
}
McLinkModule.ɵfac = function McLinkModule_Factory(t) { return new (t || McLinkModule)(); };
McLinkModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: McLinkModule });
McLinkModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](McLinkModule, { declarations: [_link_component__WEBPACK_IMPORTED_MODULE_0__.McLink], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule], exports: [_link_component__WEBPACK_IMPORTED_MODULE_0__.McLink] }); })();


/***/ }),

/***/ 58903:
/*!********************************************!*\
  !*** ./packages/mosaic/link/public-api.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McLinkModule": function() { return /* reexport safe */ _link_module__WEBPACK_IMPORTED_MODULE_0__.McLinkModule; },
/* harmony export */   "McLink": function() { return /* reexport safe */ _link_component__WEBPACK_IMPORTED_MODULE_1__.McLink; },
/* harmony export */   "McLinkBase": function() { return /* reexport safe */ _link_component__WEBPACK_IMPORTED_MODULE_1__.McLinkBase; },
/* harmony export */   "McLinkMixinBase": function() { return /* reexport safe */ _link_component__WEBPACK_IMPORTED_MODULE_1__.McLinkMixinBase; },
/* harmony export */   "baseURLRegex": function() { return /* reexport safe */ _link_component__WEBPACK_IMPORTED_MODULE_1__.baseURLRegex; }
/* harmony export */ });
/* harmony import */ var _link_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link.module */ 27418);
/* harmony import */ var _link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./link.component */ 98446);




/***/ }),

/***/ 49398:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ lazy ^\.\/.*$ exclude: \.map$ namespace object ***!
  \***********************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ptsecurity-mosaic-examples": [
		94658
	],
	"./ptsecurity-mosaic-examples-mosaic-alerts": [
		81094,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-alerts_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-alerts.js": [
		81094,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-alerts_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-autocomplete": [
		42158,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-autocomplete_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-autocomplete_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-autocomplete.js": [
		42158,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-autocomplete_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-autocomplete_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-badges": [
		23362,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-badges_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-badges.js": [
		23362,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-badges_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-button": [
		61051,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-button_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-button-toggle": [
		43354,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-button-toggle_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-button-toggle.js": [
		43354,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-button-toggle_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-button.js": [
		61051,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-button_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-card": [
		44279,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-card_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-card.js": [
		44279,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-card_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-checkbox": [
		44536,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-checkbox_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-checkbox.js": [
		44536,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-checkbox_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-date-formatter": [
		63105,
		"default-dist_mosaic-luxon-adapter_fesm2015_ptsecurity-mosaic-luxon-adapter-adapter_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-date-forma-13a893"
	],
	"./ptsecurity-mosaic-examples-mosaic-date-formatter.js": [
		63105,
		"default-dist_mosaic-luxon-adapter_fesm2015_ptsecurity-mosaic-luxon-adapter-adapter_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-date-forma-13a893"
	],
	"./ptsecurity-mosaic-examples-mosaic-datepicker": [
		8759,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"default-dist_mosaic-luxon-adapter_fesm2015_ptsecurity-mosaic-luxon-adapter-adapter_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-datepicker_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-datepicker.js": [
		8759,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"default-dist_mosaic-luxon-adapter_fesm2015_ptsecurity-mosaic-luxon-adapter-adapter_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-datepicker_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-divider": [
		92850,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-divider_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-divider.js": [
		92850,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-divider_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-dropdown": [
		26112,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-dropdown_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-dropdown.js": [
		26112,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-dropdown_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-forms": [
		70983,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-forms_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-forms.js": [
		70983,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-forms_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-input": [
		4938,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-input_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-input.js": [
		4938,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-input_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-layout-flex": [
		91277,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-layout-flex_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-layout-flex.js": [
		91277,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-layout-flex_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-link": [
		57722,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-link_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-link.js": [
		57722,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-link_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-list": [
		49091,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-list_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-list.js": [
		49091,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-list_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-modal": [
		15219,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-modal_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-modal.js": [
		15219,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-modal_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-navbar": [
		36305,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-navbar_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-navbar.js": [
		36305,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-navbar_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-number-formatter": [
		8745,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-number-for-ead75b"
	],
	"./ptsecurity-mosaic-examples-mosaic-number-formatter.js": [
		8745,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-number-for-ead75b"
	],
	"./ptsecurity-mosaic-examples-mosaic-popover": [
		10285,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-popover_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-popover_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-popover.js": [
		10285,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-popover_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-popover_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-progress-bar": [
		16784,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-progress-bar_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-progress-bar.js": [
		16784,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-progress-bar_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-progress-spinner": [
		80014,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-progress-s-d53605"
	],
	"./ptsecurity-mosaic-examples-mosaic-progress-spinner.js": [
		80014,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-progress-s-d53605"
	],
	"./ptsecurity-mosaic-examples-mosaic-radio": [
		40205,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-radio_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-radio.js": [
		40205,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-radio_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-select": [
		28156,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-select_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-select.js": [
		28156,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-select_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-sidepanel": [
		45045,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-sidepanel_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-sidepanel.js": [
		45045,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-sidepanel_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-splitter": [
		68759,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-splitter_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-splitter.js": [
		68759,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-splitter_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-table": [
		86650,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-table_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-table.js": [
		86650,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-table_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tabs": [
		76363,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tabs_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tabs.js": [
		76363,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tabs_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tags": [
		53604,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-autocomplete_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tags_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tags.js": [
		53604,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-autocomplete_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tags_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-textarea": [
		39646,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-textarea_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-textarea_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-textarea.js": [
		39646,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-textarea_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-textarea_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-timepicker": [
		62113,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"default-dist_mosaic-luxon-adapter_fesm2015_ptsecurity-mosaic-luxon-adapter-adapter_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-timepicker_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-timepicker.js": [
		62113,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js",
		"default-dist_mosaic-luxon-adapter_fesm2015_ptsecurity-mosaic-luxon-adapter-adapter_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-timepicker_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-toggle": [
		98067,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-toggle_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-toggle.js": [
		98067,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-toggle_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tooltip": [
		94875,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-popover_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tooltip_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tooltip.js": [
		94875,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-popover_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tooltip_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tree": [
		47188,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tree_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tree-select": [
		67405,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tree-select_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tree-select.js": [
		67405,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tree-select_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-tree.js": [
		47188,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-tree_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-typography": [
		80957,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-typography_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-typography.js": [
		80957,
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-typography_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-validation": [
		5981,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-textarea_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-validation_js"
	],
	"./ptsecurity-mosaic-examples-mosaic-validation.js": [
		5981,
		"default-dist_mosaic_fesm2015_ptsecurity-mosaic-textarea_js",
		"node_modules_ptsecurity_mosaic-examples_fesm2015_ptsecurity-mosaic-examples-mosaic-validation_js"
	],
	"./ptsecurity-mosaic-examples.js": [
		94658
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 49398;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"mosaic","version":"12.0.2","description":"Components for Angular","homepage":"https://github.com/positive-js/mosaic","bugs":"https://github.com/positive-js/mosaic/issues","license":"MIT","repository":{"type":"git","url":"https://github.com/positive-js/mosaic.git"},"engines":{"node":">= 12","yarn":">= 1.0.0"},"requiredAngularVersion":">=12.0.0","dependencies":{"@angular/animations":"^12.2.5","@angular/cdk":"^11.2.2","@angular/common":"^12.2.5","@angular/compiler":"^12.2.5","@angular/core":"^12.2.5","@angular/forms":"^12.2.5","@angular/platform-browser":"^12.2.5","@ptsecurity/mosaic-icons":"^5.3.0","core-js":"^3.6.5","rxjs":"^6.5.5","tslib":"^2.0.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/architect-cli":"^0.1202.6","@angular-devkit/build-angular":"^12.2.5","@angular-devkit/core":"^12.2.5","@angular-devkit/schematics":"^12.2.5","@angular/cli":"^12.2.5","@angular/compiler-cli":"^12.2.5","@angular/platform-browser-dynamic":"^12.2.5","@angular/platform-server":"^12.2.5","@angular/router":"^12.2.5","@commitlint/cli":"9.1.2","@commitlint/config-conventional":"^7.5.0","@octokit/rest":"^18.9.1","@ptsecurity/commitlint-config":"^1.0.0","@ptsecurity/tslint-config":"0.13.1","@schematics/angular":"^11.2.5","@types/chalk":"^2.2.0","@types/fs-extra":"^5.0.4","@types/glob":"^7.1.3","@types/gulp":"^4.0.5","@types/inquirer":"^7.3.2","@types/jasmine":"^3.7.7","@types/luxon":"^1.26.3","@types/merge2":"^0.3.30","@types/node":"^12.12.29","chalk":"^4.0.0","conventional-changelog":"^3.1.10","dgeni":"^0.4.12","dgeni-packages":"~0.28.3","dotenv":"^10.0.0","firebase-tools":"^9.19.0","fs-extra":"^5.0.0","glob":"^7.1.3","gulp":"^4.0.0","gulp-clean":"^0.4.0","gulp-clean-css":"^3.10.0","gulp-cli":"^2.0.1","gulp-flatten":"^0.3.1","gulp-highlight-files":"^0.0.6","gulp-if":"^2.0.2","gulp-markdown":"5.1.0","gulp-rename":"^2.0.0","gulp-sass":"^5.0.0","gulp-transform":"^2.0.0","highlight.js":"^10.4.1","husky":"^4.3.8","inquirer":"^7.3.3","jasmine":"^3.5.0","jasmine-core":"^3.5.0","karma":"^6.3.4","karma-chrome-launcher":"^3.1.0","karma-coverage":"^2.0.3","karma-jasmine":"^3.1.1","karma-jasmine-html-reporter":"1.5.2","karma-junit-reporter":"^2.0.1","karma-spec-reporter":"^0.0.32","license-checker":"^16.0.0","lint-staged":"^10.2.11","lodash":"^4.17.21","luxon":"^1.26.0","merge2":"^1.2.3","messageformat":"^2.0.5","moment":"~2.23.0","ng-packagr":"^12.2.1","request":"^2.88.0","resolve-bin":"^0.4.0","sass":"^1.39.2","scss-bundle":"^3.1.1","snyk":"^1.667.0","spdx-satisfies":"^5.0.0","style-dictionary":"^3.0.1","stylelint":"^13.6.1","stylelint-config-standard":"^19.0.0","stylelint-scss":"^3.13.0","ts-node":"^9.0.0","tsconfig-paths":"^3.9.0","tsickle":"^0.39.1","tslint":"^6.1.3","typescript":"~4.3.5","wallaby-webpack":"^3.9.13","yaml-lint":"^1.2.4"},"resolutions":{"dgeni-packages/typescript":"4.0.2"},"scripts":{"ng":"ng","valid:lic":"ts-node --project ./tools/validate-licenses/tsconfig.json ./tools/validate-licenses/validate-licenses.ts","build:cdk":"ng build cdk","build:mosaic-moment-adapter":"ng build mosaic-moment-adapter","build:mosaic-luxon-adapter":"ng build mosaic-luxon-adapter","build:mosaic":"ng build mosaic","build:mosaic-examples-module":"ts-node --project ./tools/example-module/tsconfig.json ./tools/example-module/index.ts","build:mosaic-examples":"ng build mosaic-examples","build:schematics":"ng build schematics","build:schematics-test":"ng build schematics-test","build:tokens:mosaic":"node ./packages/mosaic/design-tokens/build-tokens.js","build:tokens:docs":"node ./packages/docs/scripts/build-tokens.js","build:docs-content":"gulp docs-content","build:highlight":"ts-node --project ./tools/highlight-files/tsconfig.json ./tools/highlight-files/highlight-files.ts","build:package-design-tokens":"ts-node --project ./tools/package-design-tokens/tsconfig.json ./tools/package-design-tokens/package-design-tokens.ts","build:package-docs-content":"ts-node --project ./tools/package-docs-content/tsconfig.json ./tools/package-docs-content/package-docs-content.ts","styles:built-all":"gulp styles:built-all","unit:cdk":"ng test cdk","unit:mosaic":"ng test mosaic","unit:mosaic-moment-adapter":"ng test mosaic-moment-adapter","unit:mosaic-luxon-adapter":"ng test mosaic-luxon-adapter","unit:schematics":"gulp unit:schematics","docs:start:dev":"ng serve --configuration=development mosaic-docs","docs:start:prod":"ng serve --configuration=production mosaic-docs","docs:prod-build":"ng build mosaic-docs","docs:prod-build:aot":"ng build mosaic-docs --configuration production","docs:publish-preview":"ts-node --project ./scripts/tsconfig.deploy.json ./scripts/deploy/publish-docs-preview.ts","docs:cleanup-preview":"ts-node --project ./scripts/tsconfig.deploy.json ./scripts/deploy/cleanup-preview.ts","preinstall":"node tools/npm/check-npm.js","postinstall":"tsc -p tools/builders/tsconfig.json && ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points","publish":"ts-node --project ./scripts/tsconfig.deploy.json ./scripts/deploy/publish-artifacts.ts","linter:mosaic":"gulp tslint","linter:mosaic:json":"gulp tslint:json","linter:styles":"gulp stylelint","linter:styles:json":"gulp stylelint:json","linter:yaml":"yamllint **/*.yml --ignore=node_modules/**/*.yml","release:stage":"ts-node --project tools/release/tsconfig.json tools/release/stage-release.ts","release:stage:commit":"ts-node --project tools/release/tsconfig.json tools/release/stage-release-commit.ts","release:publish":"ts-node --project tools/release/tsconfig.json tools/release/publish-release.ts","release:publish:ci":"ts-node --project tools/release/tsconfig.json tools/release/publish-release-ci.ts","server-dev:all":"ng serve dev-all --port 3003","server-dev:alert":"ng serve dev-alert --port 3003","server-dev:autocomplete":"ng serve dev-autocomplete --port 3003","server-dev:badge":"ng serve dev-badge --port 3003","server-dev:button":"ng serve dev-button --port 3003","server-dev:button-toggle":"ng serve dev-button-toggle --port 3003","server-dev:card":"ng serve dev-card --port 3003","server-dev:checkbox":"ng serve dev-checkbox --port 3003","server-dev:datepicker":"ng serve dev-datepicker --port 3003","server-dev:date-formatter":"ng serve dev-date-formatter --port 3003","server-dev:date-formatter-luxon":"ng serve dev-date-formatter-luxon --port 3003","server-dev:date-formatter-moment":"ng serve dev-date-formatter-moment --port 3003","server-dev:divider":"ng serve dev-divider --port 3003","server-dev:dropdown":"ng serve dev-dropdown --port 3003","server-dev:flex-layout":"ng serve dev-flex-layout --port 3003","server-dev:forms":"ng serve dev-forms --port 3003","server-dev:icon":"ng serve dev-icon --port 3003","server-dev:input":"ng serve dev-input --port 3003","server-dev:link":"ng serve dev-link --port 3003","server-dev:list":"ng serve dev-list --port 3003","server-dev:modal":"ng serve dev-modal --port 3003","server-dev:navbar":"ng serve dev-navbar --port 3003","server-dev:number-formatter":"ng serve dev-number-formatter --port 3003","server-dev:panel":"ng serve dev-panel --port 3003","server-dev:popover":"ng serve dev-popover --port 3003","server-dev:progress-bar":"ng serve dev-progress-bar --port 3003","server-dev:progress-spinner":"ng serve dev-progress-spinner --port 3003","server-dev:radio":"ng serve dev-radio --port 3003","server-dev:select":"ng serve dev-select --port 3003","server-dev:sidebar":"ng serve dev-sidebar --port 3003","server-dev:sidepanel":"ng serve dev-sidepanel --port 3003","server-dev:splitter":"ng serve dev-splitter --port 3003","server-dev:table":"ng serve dev-table --port 3003","server-dev:tabs":"ng serve dev-tabs --port 3003","server-dev:tags":"ng serve dev-tags --port 3003","server-dev:textarea":"ng serve dev-textarea --port 3003","server-dev:toggle":"ng serve dev-toggle --port 3003","server-dev:theme-picker":"ng serve dev-theme-picker --port 3003","server-dev:tree":"ng serve dev-tree --port 3003","server-dev:tree-select":"ng serve dev-tree-select --port 3003","server-dev:typography":"ng serve dev-typography --port 3003","server-dev:tooltip":"ng serve dev-tooltip --port 3003","server-dev:timepicker":"ng serve dev-timepicker --port 3003","server-dev:validation":"ng serve dev-validation --port 3003","snyk-protect":"snyk protect","prepare":"yarn run snyk-protect"},"husky":{"hooks":{"commit-msg":"commitlint -E HUSKY_GIT_PARAMS","pre-commit":"lint-staged"}},"collective":{"type":"opencollective","url":"https://opencollective.com/mosaic","logo":"https://opencollective.com/mosaic/logo.txt"},"lint-staged":{"*.yml":"yamllint"},"snyk":true}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(74634); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map