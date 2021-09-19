(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "5F9T":
/*!**************************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-datepicker.js ***!
  \**************************************************************/
/*! exports provided: MAX_YEAR, MC_DATEPICKER_SCROLL_STRATEGY, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MC_DATEPICKER_VALIDATORS, MC_DATEPICKER_VALUE_ACCESSOR, McCalendar, McCalendarBody, McCalendarCell, McCalendarHeader, McCalendarView, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerInputEvent, McDatepickerIntl, McDatepickerModule, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McMultiYearView, McYearView, mcDatepickerAnimations, yearsPerPage, yearsPerRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_YEAR", function() { return MAX_YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY", function() { return MC_DATEPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return MC_DATEPICKER_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_VALIDATORS", function() { return MC_DATEPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_VALUE_ACCESSOR", function() { return MC_DATEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McCalendar", function() { return McCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McCalendarBody", function() { return McCalendarBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McCalendarCell", function() { return McCalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McCalendarHeader", function() { return McCalendarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McCalendarView", function() { return McCalendarView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepicker", function() { return McDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerContent", function() { return McDatepickerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerInput", function() { return McDatepickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerInputEvent", function() { return McDatepickerInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerIntl", function() { return McDatepickerIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerModule", function() { return McDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerToggle", function() { return McDatepickerToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McDatepickerToggleIcon", function() { return McDatepickerToggleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McMonthView", function() { return McMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McMultiYearView", function() { return McMultiYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McYearView", function() { return McYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mcDatepickerAnimations", function() { return mcDatepickerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function() { return yearsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function() { return yearsPerRow; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/cdk/datetime */ "Vue8");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ "SfmH");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "R0Ic");




















// tslint:disable:no-magic-numbers
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class McCalendarCell {
    constructor(value, displayValue, ariaLabel, enabled, cssClasses) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
    }
}
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
class McCalendarBody {
    constructor(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        /** The number of columns in the table. */
        this.numCols = 7;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    cellClicked(cell) {
        if (cell.enabled) {
            this.selectedValueChange.emit(cell.value);
        }
    }
    ngOnChanges(changes) {
        const columnChanges = changes.numCols;
        // tslint:disable-next-line:no-this-assignment
        const { rows, numCols } = this;
        if (changes.rows || columnChanges) {
            this.firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes.cellAspectRatio || columnChanges || !this.cellPadding) {
            this.cellPadding = `${this.cellAspectRatio * 50 / numCols}%`;
        }
        if (columnChanges || !this.cellWidth) {
            this.cellWidth = `${100 / numCols}%`;
        }
    }
    isActiveCell(rowIndex, colIndex) {
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this.firstRowOffset;
        }
        return cellNumber === this.activeCell;
    }
    /** Focuses the active cell after the microtask queue is empty. */
    focusActiveCell() {
        this.ngZone.runOutsideAngular(() => {
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(() => {
                const activeCell = this.elementRef.nativeElement.querySelector('.mc-calendar__body_active');
                if (activeCell) {
                    activeCell.focus();
                }
            });
        });
    }
}
McCalendarBody.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: '[mc-calendar-body]',
                exportAs: 'mcCalendarBody',
                template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"firstRowOffset < labelMinRequiredCells\">\n    <td class=\"mc-calendar__body-label\" [attr.colspan]=\"numCols\">\n        {{ label }}\n    </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\">\n    <!--\n      We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n      The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n      percentage of the width (a variant of the trick described here:\n      https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n    -->\n    <td *ngIf=\"rowIndex === 0 && firstRowOffset\"\n        class=\"mc-calendar__body-label\"\n        [attr.colspan]=\"firstRowOffset\">\n        {{ firstRowOffset >= labelMinRequiredCells ? label : '' }}\n    </td>\n    <td *ngFor=\"let item of row; let colIndex = index\"\n        class=\"mc-calendar__body-cell\"\n        [ngClass]=\"item.cssClasses\"\n        [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n        [class.mc-calendar__body_disabled]=\"!item.enabled\"\n        [class.mc-calendar__body_active]=\"isActiveCell(rowIndex, colIndex)\"\n        (click)=\"cellClicked(item)\"\n        [style.width]=\"cellWidth\"\n        [style.paddingTop]=\"cellPadding\"\n        [style.paddingBottom]=\"cellPadding\">\n        <div class=\"mc-calendar__body-cell-content\"\n             [class.mc-selected]=\"selectedValue === item.value\"\n             [class.mc-calendar__body-today]=\"todayValue === item.value\">\n            {{ item.displayValue }}\n        </div>\n    </td>\n</tr>\n",
                host: {
                    class: 'mc-calendar__body',
                    role: 'grid',
                    'aria-readonly': 'true'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".mc-calendar__body{min-width:calc(7 * 32px);min-width:calc(7 * var(--mc-datepicker-body-size-cell-min-size, 32px))}.mc-calendar__body-label{text-align:left;padding:8px 28px 12px 12px;padding:var(--mc-datepicker-body-size-label-paddings, 8px 28px 12px 12px)}.mc-calendar__body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mc-calendar__body_disabled{cursor:default}.mc-calendar__body-cell-content{position:absolute;top:5%;top:var(--mc-datepicker-body-size-cell-margin, 5%);left:5%;left:var(--mc-datepicker-body-size-cell-margin, 5%);padding:8px;padding:var(--mc-datepicker-body-size-cell-padding, 8px);display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-width:var(--mc-datepicker-body-size-cell-border-width, 1px);border-style:solid}.cdk-high-contrast-active .mc-calendar__body-cell-content{border:none}.cdk-high-contrast-active :host .mc-calendar__body-cell-content{border:none}mc-month-view .mc-calendar__body-cell-content{justify-content:flex-end}mc-multi-year-view .mc-calendar__body-cell-content,mc-year-view .mc-calendar__body-cell-content{justify-content:center}.cdk-high-contrast-active .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active .mc-selected{outline:solid 1px}.cdk-high-contrast-active .mc-calendar__body-today{outline:dotted 1px}.cdk-high-contrast-active :host .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active :host .mc-selected{outline:solid 1px}.cdk-high-contrast-active :host .mc-calendar__body-today{outline:dotted 1px}[dir=rtl] .mc-calendar__body-label{text-align:right}\n"]
            },] }
];
/** @nocollapse */
McCalendarBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
McCalendarBody.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    labelMinRequiredCells: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    cellAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};

/** @docs-private */
function createMissingDateImplError(provider) {
    return Error(`McDatepicker: No provider found for ${provider}. You must import one of the existing ` +
        `modules at your application root or provide a custom implementation or use exists ones.`);
}

/** Datepicker data that requires internationalization. */
class McDatepickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** A label for the calendar popup (used by screen readers). */
        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */
        this.openCalendarLabel = 'Open calendar';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 20 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 20 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
}
/** @nocollapse */ McDatepickerIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function McDatepickerIntl_Factory() { return new McDatepickerIntl(); }, token: McDatepickerIntl, providedIn: "root" });
McDatepickerIntl.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{ providedIn: 'root' },] }
];

// tslint:disable:no-magic-numbers
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
class McMonthView {
    constructor(changeDetectorRef, dateFormats, dateAdapter, dir) {
        this.changeDetectorRef = changeDetectorRef;
        this.dateFormats = dateFormats;
        this.dateAdapter = dateAdapter;
        this.dir = dir;
        /** Emits when a new date is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is selected. */
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
        }
        const firstDayOfWeek = this.dateAdapter.getFirstDayOfWeek();
        const narrowWeekdays = this.dateAdapter.getDayOfWeekNames('short');
        const longWeekdays = this.dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        const weekdays = longWeekdays.map((long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        });
        this.weekdays = weekdays
            .slice(firstDayOfWeek)
            .concat(weekdays.slice(0, firstDayOfWeek));
        this._activeDate = this.dateAdapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        const oldActiveDate = this._activeDate;
        const validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
        this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this.hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this.init();
        }
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.selectedDate = this.getDateInCurrentMonth(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this.init();
    }
    /** Handles when a new date is selected. */
    dateSelected(date) {
        if (this.selectedDate !== date) {
            const selectedYear = this.dateAdapter.getYear(this.activeDate);
            const selectedMonth = this.dateAdapter.getMonth(this.activeDate);
            const selectedDate = this.dateAdapter.createDate(selectedYear, selectedMonth, date);
            this.selectedChange.emit(selectedDate);
        }
        this.userSelection.emit();
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this.isRtl();
        // tslint:disable-next-line:deprecation
        switch (event.keyCode) {
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 1 - this.dateAdapter.getDate(this._activeDate));
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, (this.dateAdapter.getNumDaysInMonth(this._activeDate) - this.dateAdapter.getDate(this._activeDate)));
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = event.altKey ?
                    this.dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this.dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = event.altKey ?
                    this.dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this.dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this.dateSelected(this.dateAdapter.getDate(this._activeDate));
                    this.userSelection.emit();
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this.focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Initializes this month view. */
    init() {
        this.selectedDate = this.getDateInCurrentMonth(this.selected);
        this.todayDate = this.getDateInCurrentMonth(this.dateAdapter.today());
        this.monthLabel = this.dateAdapter.getMonthNames('short')[this.dateAdapter.getMonth(this.activeDate)];
        this.monthLabel = this.monthLabel[0].toLocaleUpperCase() + this.monthLabel.substr(1);
        const firstOfMonth = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), this.dateAdapter.getMonth(this.activeDate));
        this.firstWeekOffset =
            (DAYS_PER_WEEK + this.dateAdapter.getDayOfWeek(firstOfMonth) -
                this.dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this.createWeekCells();
        this.changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    focusActiveCell() {
        this.mcCalendarBody.focusActiveCell();
    }
    /** Creates McCalendarCells for the dates in this month. */
    createWeekCells() {
        const daysInMonth = this.dateAdapter.getNumDaysInMonth(this.activeDate);
        const dateNames = this.dateAdapter.getDateNames();
        this.weeks = [[]];
        for (let i = 0, cell = this.firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell === DAYS_PER_WEEK) {
                this.weeks.push([]);
                cell = 0;
            }
            const date = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), this.dateAdapter.getMonth(this.activeDate), i + 1);
            const enabled = this.shouldEnableDate(date);
            const ariaLabel = this.dateAdapter.format(date, this.dateFormats.dateA11yLabel);
            const cellClasses = this.dateClass ? this.dateClass(date) : undefined;
            this.weeks[this.weeks.length - 1]
                .push(new McCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
        }
    }
    /** Date filter for the month */
    shouldEnableDate(date) {
        return !!date &&
            (!this.dateFilter || this.dateFilter(date)) &&
            (!this.minDate || this.dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this.dateAdapter.compareDate(date, this.maxDate) <= 0);
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    getDateInCurrentMonth(date) {
        return date && this.hasSameMonthAndYear(date, this.activeDate) ?
            this.dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    hasSameMonthAndYear(d1, d2) {
        return !!(d1 && d2 && this.dateAdapter.getMonth(d1) === this.dateAdapter.getMonth(d2) &&
            this.dateAdapter.getYear(d1) === this.dateAdapter.getYear(d2));
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
    /** Determines whether the user has the RTL layout direction. */
    isRtl() {
        return this.dir && this.dir.value === 'rtl';
    }
}
McMonthView.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-month-view',
                exportAs: 'mcMonthView',
                template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n        <tr>\n            <th *ngFor=\"let day of weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n        </tr>\n        <tr>\n            <th class=\"mc-calendar__table-header-divider\" colspan=\"7\"></th>\n        </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [label]=\"monthLabel\"\n           [rows]=\"weeks\"\n           [todayValue]=\"todayDate\"\n           [selectedValue]=\"selectedDate\"\n           [labelMinRequiredCells]=\"3\"\n           [activeCell]=\"dateAdapter.getDate(activeDate) - 1\"\n           (selectedValueChange)=\"dateSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            },] }
];
/** @nocollapse */
McMonthView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"],] }] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
McMonthView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    mcCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McCalendarBody, { static: false },] }]
};

// tslint:disable:no-magic-numbers
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
class McMultiYearView {
    constructor(changeDetectorRef, dateAdapter, dir) {
        this.changeDetectorRef = changeDetectorRef;
        this.dateAdapter = dateAdapter;
        this.dir = dir;
        /** Emits when a new year is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits the selected year. This doesn't imply a change on the selected date */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this.dateAdapter.today();
    }
    /** The date to display in this multi-year view (everything other than the year is ignored). */
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        const oldActiveDate = this._activeDate;
        const validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
        this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (Math.floor(this.dateAdapter.getYear(oldActiveDate) / yearsPerPage) !==
            Math.floor(this.dateAdapter.getYear(this._activeDate) / yearsPerPage)) {
            this.init();
        }
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.selectedYear = this._selected && this.dateAdapter.getYear(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this.init();
    }
    /** Initializes this multi-year view. */
    init() {
        this.todayYear = this.dateAdapter.getYear(this.dateAdapter.today());
        const activeYear = this.dateAdapter.getYear(this._activeDate);
        const activeOffset = activeYear % yearsPerPage;
        this.years = [];
        for (let i = 0, row = []; i < yearsPerPage; i++) {
            row.push(activeYear - activeOffset + i);
            if (row.length === yearsPerRow) {
                this.years.push(row.map((year) => this.createCellForYear(year)));
                row = [];
            }
        }
        this.changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */
    onYearSelected(year) {
        this.yearSelected.emit(this.dateAdapter.createDate(year));
        const month = this.dateAdapter.getMonth(this.activeDate);
        const daysInMonth = this.dateAdapter.getNumDaysInMonth(this.dateAdapter.createDate(year, month));
        this.selectedChange.emit(this.dateAdapter.createDate(year, month, Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this.isRtl();
        // tslint:disable-next-line:deprecation
        switch (event.keyCode) {
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, -this.dateAdapter.getYear(this._activeDate) % yearsPerPage);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - this.dateAdapter.getYear(this._activeDate) % yearsPerPage - 1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                this.onYearSelected(this.dateAdapter.getYear(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this.focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    getActiveCell() {
        return this.dateAdapter.getYear(this.activeDate) % yearsPerPage;
    }
    /** Focuses the active cell after the microtask queue is empty. */
    focusActiveCell() {
        this.mcCalendarBody.focusActiveCell();
    }
    /** Creates an McCalendarCell for the given year. */
    createCellForYear(year) {
        const yearName = this.dateAdapter.getYearName(this.dateAdapter.createDate(year));
        return new McCalendarCell(year, yearName, yearName, this.shouldEnableYear(year));
    }
    /** Whether the given year is enabled. */
    shouldEnableYear(year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this.dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this.dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        const firstOfYear = this.dateAdapter.createDate(year);
        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this.dateAdapter.getYear(date) === year; date = this.dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
    /** Determines whether the user has the RTL layout direction. */
    isRtl() {
        return this.dir && this.dir.value === 'rtl';
    }
}
McMultiYearView.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-multi-year-view',
                exportAs: 'mcMultiYearView',
                template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n    <tr>\n        <th class=\"mc-calendar__table-header-divider\" colspan=\"4\"></th>\n    </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [rows]=\"years\"\n           [todayValue]=\"todayYear\"\n           [selectedValue]=\"selectedYear\"\n           [numCols]=\"4\"\n           [cellAspectRatio]=\"4 / 7\"\n           [activeCell]=\"getActiveCell()\"\n           (selectedValueChange)=\"onYearSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            },] }
];
/** @nocollapse */
McMultiYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
McMultiYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    mcCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McCalendarBody, { static: false },] }]
};

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
class McYearView {
    constructor(changeDetectorRef, dateFormats, dateAdapter, dir) {
        this.changeDetectorRef = changeDetectorRef;
        this.dateFormats = dateFormats;
        this.dateAdapter = dateAdapter;
        this.dir = dir;
        /** Emits when a new month is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits the selected month. This doesn't imply a change on the selected date */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
        }
        this._activeDate = this.dateAdapter.today();
    }
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() {
        return this._activeDate;
    }
    set activeDate(value) {
        const oldActiveDate = this._activeDate;
        const validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
        this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (this.dateAdapter.getYear(oldActiveDate) !== this.dateAdapter.getYear(this._activeDate)) {
            this.init();
        }
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.selectedMonth = this.getMonthInCurrentYear(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this.init();
    }
    /** Handles when a new month is selected. */
    onMonthSelected(month) {
        const year = this.dateAdapter.getYear(this.activeDate);
        const normalizedDate = this.dateAdapter.createDate(year, month);
        this.monthSelected.emit(normalizedDate);
        const daysInMonth = this.dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this.dateAdapter.createDate(year, month, Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this.isRtl();
        const VERTICAL_SHIFT = 4;
        const PAGE_SHIFT = 10;
        const MAX_MONTH_INDEX = 11;
        // tslint:disable-next-line:deprecation
        switch (event.keyCode) {
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, -VERTICAL_SHIFT);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, VERTICAL_SHIFT);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, -this.dateAdapter.getMonth(this._activeDate));
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, MAX_MONTH_INDEX - this.dateAdapter.getMonth(this._activeDate));
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -PAGE_SHIFT : -1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate =
                    this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? PAGE_SHIFT : 1);
                break;
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
            case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                this.onMonthSelected(this.dateAdapter.getMonth(this._activeDate));
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this.focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Initializes this year view. */
    init() {
        this.selectedMonth = this.getMonthInCurrentYear(this.selected);
        this.todayMonth = this.getMonthInCurrentYear(this.dateAdapter.today());
        this.yearLabel = this.dateAdapter.getYearName(this.activeDate);
        const monthNames = this.dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        // tslint:disable-next-line:no-magic-numbers
        this.months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]
            .map((row) => row.map((month) => this.createCellForMonth(month, monthNames[month])));
        this.changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    focusActiveCell() {
        this.mcCalendarBody.focusActiveCell();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    getMonthInCurrentYear(date) {
        return date && this.dateAdapter.getYear(date) === this.dateAdapter.getYear(this.activeDate) ?
            this.dateAdapter.getMonth(date) : null;
    }
    /** Creates an McCalendarCell for the given month. */
    createCellForMonth(month, monthName) {
        const ariaLabel = this.dateAdapter.format(this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), month), this.dateFormats.monthYearA11yLabel);
        const newMonthName = monthName[0].toLocaleUpperCase() + monthName.substr(1);
        return new McCalendarCell(month, newMonthName, ariaLabel, this.shouldEnableMonth(month));
    }
    /** Whether the given month is enabled. */
    shouldEnableMonth(month) {
        const activeYear = this.dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this.isYearAndMonthAfterMaxDate(activeYear, month) ||
            this.isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        const firstOfMonth = this.dateAdapter.createDate(activeYear, month);
        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this.dateAdapter.getMonth(date) === month; date = this.dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    isYearAndMonthAfterMaxDate(year, month) {
        if (this.maxDate) {
            const maxYear = this.dateAdapter.getYear(this.maxDate);
            const maxMonth = this.dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    isYearAndMonthBeforeMinDate(year, month) {
        if (this.minDate) {
            const minYear = this.dateAdapter.getYear(this.minDate);
            const minMonth = this.dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
    /** Determines whether the user has the RTL layout direction. */
    isRtl() {
        return this.dir && this.dir.value === 'rtl';
    }
}
McYearView.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-year-view',
                exportAs: 'mcYearView',
                template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n    <tr>\n        <th class=\"mc-calendar__table-header-divider\" colspan=\"4\"></th>\n    </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [label]=\"yearLabel\"\n           [rows]=\"months\"\n           [todayValue]=\"todayMonth\"\n           [selectedValue]=\"selectedMonth\"\n           [labelMinRequiredCells]=\"2\"\n           [numCols]=\"4\"\n           [cellAspectRatio]=\"4 / 7\"\n           [activeCell]=\"dateAdapter.getMonth(activeDate)\"\n           (selectedValueChange)=\"onMonthSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            },] }
];
/** @nocollapse */
McYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"],] }] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
McYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    mcCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McCalendarBody, { static: false },] }]
};

/**
 * Possible views for the calendar.
 * @docs-private
 */
var McCalendarView;
(function (McCalendarView) {
    McCalendarView["Month"] = "month";
    McCalendarView["Year"] = "year";
    McCalendarView["MultiYear"] = "multi-year";
})(McCalendarView || (McCalendarView = {}));
/** Default header for McCalendar */
class McCalendarHeader {
    constructor(intl, calendar, dateAdapter, dateFormats, changeDetectorRef) {
        this.intl = intl;
        this.calendar = calendar;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The label for the current calendar view. */
    get periodButtonText() {
        if (this.calendar.currentView === McCalendarView.Month) {
            const label = this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.monthYearLabel);
            return (label[0].toLocaleUpperCase() + label.substr(1)).replace('.', '');
        }
        if (this.calendar.currentView === McCalendarView.Year) {
            return this.dateAdapter.getYearName(this.calendar.activeDate);
        }
        const activeYear = this.dateAdapter.getYear(this.calendar.activeDate);
        const firstYearInView = this.dateAdapter.getYearName(
        // tslint:disable-next-line:no-magic-numbers
        this.dateAdapter.createDate(activeYear - activeYear % 24));
        const lastYearInView = this.dateAdapter.getYearName(
        // tslint:disable-next-line:no-magic-numbers
        this.dateAdapter.createDate(activeYear + yearsPerPage - 1 - activeYear % 24));
        return `${firstYearInView} \u2013 ${lastYearInView}`;
    }
    get periodButtonLabel() {
        return this.calendar.currentView === McCalendarView.Month ?
            this.intl.switchToMultiYearViewLabel : this.intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
        return {
            [McCalendarView.Month]: this.intl.prevMonthLabel,
            [McCalendarView.Year]: this.intl.prevYearLabel,
            [McCalendarView.MultiYear]: this.intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }
    /** The label for the next button. */
    get nextButtonLabel() {
        return {
            [McCalendarView.Month]: this.intl.nextMonthLabel,
            [McCalendarView.Year]: this.intl.nextYearLabel,
            [McCalendarView.MultiYear]: this.intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */
    currentPeriodClicked() {
        if ([McCalendarView.Month, McCalendarView.MultiYear].includes(this.calendar.currentView)) {
            this.calendar.currentView = McCalendarView.Year;
        }
        else if (this.calendar.currentView === McCalendarView.Year) {
            this.calendar.currentView = McCalendarView.Month;
        }
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
        if (this.calendar.currentView === McCalendarView.Month) {
            this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
        }
        else {
            this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView === McCalendarView.Year ? -1 : -yearsPerPage);
        }
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
        if (this.calendar.currentView === McCalendarView.Month) {
            this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
        }
        else {
            this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView === McCalendarView.Year ? 1 : yearsPerPage);
        }
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate || !this.isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return !this.calendar.maxDate || !this.isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    isSameView(firstDate, secondDate) {
        const firstYear = this.dateAdapter.getYear(firstDate);
        const secondYear = this.dateAdapter.getYear(secondDate);
        const firstMonth = this.dateAdapter.getMonth(firstDate);
        const secondMonth = this.dateAdapter.getMonth(secondDate);
        if (this.calendar.currentView === McCalendarView.Month) {
            return firstYear === secondYear && firstMonth === secondMonth;
        }
        if (this.calendar.currentView === McCalendarView.Year) {
            return firstYear === secondYear;
        }
        // Otherwise we are in 'multi-year' view.
        return Math.floor(firstYear / yearsPerPage) === Math.floor(secondYear / yearsPerPage);
    }
}
McCalendarHeader.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-calendar-header',
                template: "<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__period-button\"\n        (click)=\"currentPeriodClicked()\">\n    {{ periodButtonText }}\n\n    <i class=\"mc mc-icon\"\n       [class.mc-angle-up-M_16]=\"calendar.currentView !== 'month'\"\n       [class.mc-angle-down-M_16]=\"calendar.currentView === 'month'\">\n    </i>\n</button>\n\n<div class=\"mc-calendar-spacer\"></div>\n\n<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__previous-button\"\n        [disabled]=\"!previousEnabled()\"\n        (click)=\"previousClicked()\">\n\n    <i mc-icon=\"mc-angle-left-L_16\"></i>\n</button>\n\n<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__next-button\"\n        [disabled]=\"!nextEnabled()\"\n        (click)=\"nextClicked()\">\n\n    <i mc-icon=\"mc-angle-right-L_16\"></i>\n</button>\n",
                exportAs: 'mcCalendarHeader',
                host: {
                    class: 'mc-calendar-header'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            },] }
];
/** @nocollapse */
McCalendarHeader.ctorParameters = () => [
    { type: McDatepickerIntl },
    { type: McCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => McCalendar),] }] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
class McCalendar {
    constructor(intl, dateAdapter, dateFormats, changeDetectorRef) {
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.changeDetectorRef = changeDetectorRef;
        /** Whether the calendar should be started in month or year view. */
        this.startView = McCalendarView.Month;
        /** Emits when the currently selected date changes. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is selected. */
        this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this.moveFocusOnNextTick = false;
        if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
        }
        this.intlChanges = intl.changes.subscribe(() => {
            changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() {
        return this._startAt;
    }
    set startAt(value) {
        this._startAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** The currently selected date. */
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** The minimum selectable date. */
    get minDate() {
        return this._minDate;
    }
    set minDate(value) {
        this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(value) {
        this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate() {
        return this.clampedActiveDate;
    }
    set activeDate(value) {
        this.clampedActiveDate = this.dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
    }
    /** Whether the calendar is in month view. */
    get currentView() {
        return this._currentView;
    }
    set currentView(value) {
        this._currentView = value;
        this.moveFocusOnNextTick = true;
    }
    ngAfterContentInit() {
        this.calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || McCalendarHeader);
        this.activeDate = this.startAt || this.dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    }
    ngAfterViewChecked() {
        if (this.moveFocusOnNextTick) {
            this.moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    ngOnDestroy() {
        this.intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    ngOnChanges(changes) {
        const change = changes.minDate || changes.maxDate || changes.dateFilter;
        if (change && !change.firstChange) {
            const view = this.getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `init`.
                this.changeDetectorRef.detectChanges();
                view.init();
            }
        }
        this.stateChanges.next();
    }
    focusActiveCell() {
        this.getCurrentViewComponent().focusActiveCell();
    }
    /** Updates today's date after an update of the active date */
    updateTodaysDate() {
        const view = this.currentView === McCalendarView.Month ? this.monthView :
            (this.currentView === McCalendarView.Year ? this.yearView : this.multiYearView);
        view.ngAfterContentInit();
    }
    /** Handles date selection in the month view. */
    dateSelected(date) {
        if (!this.dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
        }
    }
    /** Handles year selection in the multiyear view. */
    yearSelectedInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */
    monthSelectedInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    userSelected() {
        this.userSelection.emit();
    }
    /** Handles year/month selection in the multi-year/year views. */
    goToDateInView(date, view) {
        this.activeDate = date;
        this.currentView = view;
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
    /** Returns the component instance that corresponds to the current calendar view. */
    getCurrentViewComponent() {
        return this.monthView || this.yearView || this.multiYearView;
    }
}
McCalendar.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-calendar',
                exportAs: 'mcCalendar',
                template: "<ng-template [cdkPortalOutlet]=\"calendarHeaderPortal\"></ng-template>\n\n<div class=\"mc-calendar__content\" [ngSwitch]=\"currentView\">\n    <mc-month-view\n        *ngSwitchCase=\"'month'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        [dateClass]=\"dateClass\"\n        (selectedChange)=\"dateSelected($event)\"\n        (userSelection)=\"userSelected()\">\n    </mc-month-view>\n\n    <mc-year-view\n        *ngSwitchCase=\"'year'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        (monthSelected)=\"monthSelectedInYearView($event)\"\n        (selectedChange)=\"goToDateInView($event, 'multi-year')\">\n    </mc-year-view>\n\n    <mc-multi-year-view\n        *ngSwitchCase=\"'multi-year'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        (yearSelected)=\"yearSelectedInMultiYearView($event)\"\n        (selectedChange)=\"goToDateInView($event, 'month')\">\n    </mc-multi-year-view>\n</div>\n",
                host: {
                    class: 'mc-calendar'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:16px 8px 12px;padding:var(--mc-datepicker-calendar-size-padding-top, 16px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px) var(--mc-datepicker-calendar-size-padding-blocks, 12px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px)}.mc-calendar__content{padding:0 8px 8px;padding:0 var(--mc-datepicker-calendar-size-padding-horizontal, 8px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__period-button .mc-icon{vertical-align:baseline}.mc-calendar__previous-button:after{border-left-width:2px;border-left-width:var(--mc-datepicker-calendar-size-icon-border-width, 2px);transform:translate(2px) rotate(-45deg);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform, translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:2px;border-right-width:var(--mc-datepicker-calendar-size-icon-border-width, 2px);transform:translate(-2px) rotate(45deg);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform, translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(12px - 2px);height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * 8px);left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * 8px);right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:1px;height:var(--mc-datepicker-calendar-size-divider-width, 1px)}\n"]
            },] }
];
/** @nocollapse */
McCalendar.ctorParameters = () => [
    { type: McDatepickerIntl },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
McCalendar.propDecorators = {
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McMonthView, { static: false },] }],
    yearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McYearView, { static: false },] }],
    multiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McMultiYearView, { static: false },] }]
};

/**
 * Animations used by the mosaic datepicker.
 * @docs-private
 */
const mcDatepickerAnimations = {
    /** Transforms the height of the datepicker's calendar. */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
            opacity: 0,
            transform: 'scale(1, 0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
            opacity: 1,
            transform: 'scale(1, 1)'
        }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 0 })))
    ]),
    /** Fades in the content of the calendar. */
    fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('fadeInCalendar', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({ opacity: 1 })),
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
};
// todo should be put into polyfils
// https://github.com/angular/angular/issues/24769
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}

// tslint:disable:no-unbound-method
/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MC_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mc-datepicker-scroll-strategy');
/** @docs-private */
// tslint:disable-next-line:naming-convention
function MC_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MC_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
    useFactory: MC_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * McCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class McDatepickerContent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        /** Emits when an animation has finished. */
        this.animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
    }
    ngAfterViewInit() {
        this.subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
            this.changeDetectorRef.markForCheck();
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        this.animationDone.complete();
    }
    startExitAnimation() {
        this.animationState = 'void';
        this.changeDetectorRef.markForCheck();
    }
}
McDatepickerContent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-datepicker__content',
                exportAs: 'mcDatepickerContent',
                template: "<mc-calendar [id]=\"datepicker.id\"\n             [ngClass]=\"datepicker.panelClass\"\n             [startAt]=\"datepicker.startAt\"\n             [startView]=\"datepicker.startView\"\n             [minDate]=\"datepicker.minDate\"\n             [maxDate]=\"datepicker.maxDate\"\n             [dateFilter]=\"datepicker.dateFilter\"\n             [headerComponent]=\"datepicker.calendarHeaderComponent\"\n             [selected]=\"datepicker.selected\"\n             [dateClass]=\"datepicker.dateClass\"\n             [@fadeInCalendar]=\"'enter'\"\n             (selectedChange)=\"datepicker.select($event)\"\n             (yearSelected)=\"datepicker.selectYear($event)\"\n             (monthSelected)=\"datepicker.selectMonth($event)\"\n             (userSelection)=\"datepicker.close()\">\n</mc-calendar>\n",
                host: {
                    class: 'mc-datepicker__content',
                    '[@transformPanel]': 'animationState',
                    '(@transformPanel.done)': 'animationDone.next()'
                },
                animations: [
                    mcDatepickerAnimations.transformPanel,
                    mcDatepickerAnimations.fadeInCalendar
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:16px 8px 12px;padding:var(--mc-datepicker-calendar-size-padding-top, 16px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px) var(--mc-datepicker-calendar-size-padding-blocks, 12px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px)}.mc-calendar__content{padding:0 8px 8px;padding:0 var(--mc-datepicker-calendar-size-padding-horizontal, 8px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px) var(--mc-datepicker-calendar-size-padding-horizontal, 8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__period-button .mc-icon{vertical-align:baseline}.mc-calendar__previous-button:after{border-left-width:2px;border-left-width:var(--mc-datepicker-calendar-size-icon-border-width, 2px);transform:translate(2px) rotate(-45deg);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform, translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:2px;border-right-width:var(--mc-datepicker-calendar-size-icon-border-width, 2px);transform:translate(-2px) rotate(45deg);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform, translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(12px - 2px);height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * 8px);left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * 8px);right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:1px;height:var(--mc-datepicker-calendar-size-divider-width, 1px)}.mc-datepicker__content{display:block;border-width:1px;border-style:solid}.mc-datepicker__content .mc-calendar{width:296px;height:348px}.mc-datepicker__content .mc-calendar__next-button[disabled],.mc-datepicker__content .mc-calendar__previous-button[disabled]{border:0}\n"]
            },] }
];
/** @nocollapse */
McDatepickerContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
McDatepickerContent.propDecorators = {
    calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [McCalendar,] }]
};
// TODO: We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="mcDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
class McDatepicker {
    constructor(overlay, ngZone, viewContainerRef, scrollStrategy, dateAdapter, dir, document) {
        this.overlay = overlay;
        this.ngZone = ngZone;
        this.viewContainerRef = viewContainerRef;
        this.dateAdapter = dateAdapter;
        this.dir = dir;
        this.document = document;
        this._hasBackdrop = false;
        this._opened = false;
        /** The view that the calendar should start in. */
        this.startView = McCalendarView.Month;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
        /** Emits when the datepicker has been opened. */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when the datepicker has been closed. */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** The id for the datepicker calendar. */
        this.id = `mc-datepicker-${datepickerUid++}`;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Emits when the datepicker is disabled. */
        this.disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Emits new selected date when selected date changes. */
        this.selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.validSelected = null;
        /** The element that was focused before the datepicker was opened. */
        this.focusedElementBeforeOpen = null;
        /** Subscription to value changes in the associated input element. */
        this.inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        this.scrollStrategy = scrollStrategy;
    }
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(value) {
        this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
    }
    /** The date to open the calendar to initially. */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this.datepickerInput ? this.datepickerInput.value : null);
    }
    set startAt(value) {
        this._startAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : this._disabled;
    }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this.disabledChange.next(newValue);
        }
    }
    /** Whether the calendar is open. */
    get opened() {
        return this._opened;
    }
    set opened(value) {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value) ? this.open() : this.close();
    }
    /** The currently selected date. */
    get selected() {
        return this.validSelected;
    }
    set selected(value) {
        this.validSelected = value;
    }
    /** The minimum selectable date. */
    get minDate() {
        return this.datepickerInput && this.datepickerInput.min;
    }
    /** The maximum selectable date. */
    get maxDate() {
        return this.datepickerInput && this.datepickerInput.max;
    }
    get dateFilter() {
        return this.datepickerInput && this.datepickerInput.dateFilter;
    }
    get value() {
        return this.selected;
    }
    ngOnDestroy() {
        this.close();
        this.inputSubscription.unsubscribe();
        this.closeSubscription.unsubscribe();
        this.disabledChange.complete();
        this.destroyOverlay();
    }
    /** Selects the given date */
    select(date) {
        const oldValue = this.selected;
        this.selected = date;
        if (!this.dateAdapter.sameDate(oldValue, this.selected)) {
            this.selectedChanged.next(date);
        }
    }
    /** Emits the selected year in multiyear view */
    selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */
    selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     */
    registerInput(input) {
        if (this.datepickerInput) {
            throw Error('A McDatepicker can only be associated with a single input.');
        }
        this.datepickerInput = input;
        this.inputSubscription = this.datepickerInput.valueChange
            .subscribe((value) => {
            var _a;
            this.selected = value;
            if (this.popupComponentRef) {
                (_a = this.popupComponentRef.instance.calendar.monthView) === null || _a === void 0 ? void 0 : _a.init();
                this.popupComponentRef.instance.calendar.activeDate = value;
            }
        });
    }
    /** Open the calendar. */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this.datepickerInput) {
            throw Error('Attempted to open an McDatepicker with no associated input.');
        }
        if (this.document) {
            this.focusedElementBeforeOpen = this.document.activeElement;
        }
        this.openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }
    /** Close the calendar. */
    close(restoreFocus = true) {
        if (!this._opened) {
            return;
        }
        if (this.popupComponentRef) {
            const instance = this.popupComponentRef.instance;
            instance.startExitAnimation();
            instance.animationDone
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                .subscribe(() => this.destroyOverlay());
        }
        if (restoreFocus) {
            this.focusedElementBeforeOpen.focus();
        }
        this._opened = false;
        this.closedStream.emit();
        this.focusedElementBeforeOpen = null;
    }
    toggle() {
        if (this.datepickerInput.isReadOnly) {
            return;
        }
        this._opened ? this.close() : this.open();
    }
    /** Destroys the current overlay. */
    destroyOverlay() {
        if (this.popupRef) {
            this.popupRef.dispose();
            this.popupRef = this.popupComponentRef = null;
        }
    }
    /** Open the calendar as a popup. */
    openAsPopup() {
        if (!this.calendarPortal) {
            this.calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](McDatepickerContent, this.viewContainerRef);
        }
        if (!this.popupRef) {
            this.createPopup();
        }
        if (!this.popupRef.hasAttached()) {
            this.popupComponentRef = this.popupRef.attach(this.calendarPortal);
            this.popupComponentRef.instance.datepicker = this;
            // Update the position once the calendar has rendered.
            this.ngZone.onStable.asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
                .subscribe(() => this.popupRef.updatePosition());
        }
    }
    /** Create the popup. */
    createPopup() {
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            positionStrategy: this.createPopupPositionStrategy(),
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass,
            direction: this.dir,
            scrollStrategy: this.scrollStrategy(),
            panelClass: 'mc-datepicker__popup'
        });
        this.popupRef = this.overlay.create(overlayConfig);
        this.closeSubscription = this.closingActions()
            .subscribe(() => this.close(this.restoreFocus()));
    }
    restoreFocus() {
        return this.document.activeElement === this.document.body;
    }
    closingActions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.popupRef.backdropClick(), this.popupRef.outsidePointerEvents(), this.popupRef.detachments());
    }
    /** Create the popup PositionStrategy. */
    createPopupPositionStrategy() {
        return this.overlay.position()
            .flexibleConnectedTo(this.datepickerInput.elementRef)
            .withTransformOriginOn('.mc-datepicker__content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
}
McDatepicker.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-datepicker',
                template: '',
                exportAs: 'mcDatepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                providers: [{ provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"], useExisting: McDatepicker }]
            },] }
];
/** @nocollapse */
McDatepicker.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MC_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
McDatepicker.propDecorators = {
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    calendarHeaderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['opened',] }],
    closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['closed',] }]
};

// @ts-nocheck
// tslint:disable:naming-convention
var DateParts;
(function (DateParts) {
    DateParts["year"] = "y";
    DateParts["month"] = "m";
    DateParts["day"] = "d";
})(DateParts || (DateParts = {}));
const MAX_YEAR = 9999;
class DateDigit {
    constructor(value, start, length) {
        this.value = value;
        this.start = start;
        this.length = length;
        this.maxDays = 31;
        this.maxMonth = 12;
        if (value === DateParts.day) {
            this.parse = this.parseDay;
        }
        else if (value === DateParts.month) {
            this.parse = this.parseMonth;
        }
        else if (value === DateParts.year) {
            this.parse = this.parseYear;
        }
    }
    get end() {
        return this.start + this.length;
    }
    get isDay() {
        return this.value === DateParts.day;
    }
    get isMonth() {
        return this.value === DateParts.month;
    }
    get isYear() {
        return this.value === DateParts.year;
    }
    get fullName() {
        if (this.isDay) {
            return 'date';
        }
        if (this.isMonth) {
            return 'month';
        }
        if (this.isYear) {
            return 'year';
        }
    }
    parseDay(value) {
        const parsedValue = parseInt(value);
        if (parsedValue === 0) {
            return 1;
        }
        if (parsedValue > this.maxDays) {
            return this.maxDays;
        }
        return parsedValue;
    }
    parseMonth(value) {
        const parsedValue = parseInt(value);
        if (parsedValue === 0) {
            return 1;
        }
        if (parsedValue > this.maxMonth) {
            return this.maxMonth;
        }
        return parsedValue;
    }
    parseYear(value) {
        const parsedValue = parseInt(value);
        if (parsedValue === 0) {
            return 1;
        }
        if (parsedValue > MAX_YEAR) {
            return MAX_YEAR;
        }
        return parsedValue;
    }
}
/** @docs-private */
const MC_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => McDatepickerInput),
    multi: true
};
/** @docs-private */
const MC_DATEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => McDatepickerInput),
    multi: true
};
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use McDatepickerInputEvent instead.
 */
class McDatepickerInputEvent {
    constructor(
    /** Reference to the datepicker input component that emitted the event. */
    target, 
    /** Reference to the native input element associated with the datepicker input. */
    targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
let uniqueComponentIdSuffix = 0;
/** Directive used to connect an input to a McDatepicker. */
class McDatepickerInput {
    constructor(elementRef, renderer, dateAdapter, dateFormats) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dateAdapter = dateAdapter;
        this.dateFormats = dateFormats;
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this.controlType = 'datepicker';
        this.focused = false;
        /** Emits when the value changes (either due to user input or programmatic change). */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when the disabled state has changed */
        this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._disabled = false;
        this.incorrectInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when a `change` event is fired on this `<input>`. */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.uid = `mc-datepicker-${uniqueComponentIdSuffix++}`;
        this.datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this.localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** Whether the last value set on the input was valid. */
        this.lastValueValid = false;
        this.onTouched = () => { };
        this.onInput = () => {
            this.correctCursorPosition();
            const formattedValue = this.replaceSymbols(this.viewValue);
            const newTimeObj = this.getDateFromString(formattedValue);
            this.lastValueValid = !!newTimeObj;
            if (!newTimeObj) {
                if (!this.viewValue) {
                    this._value = null;
                    this.cvaOnChange(null);
                }
                this.control.updateValueAndValidity({ emitEvent: false });
                return;
            }
            this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.dateFormats.dateInput), true);
            this.selectNextDigitByCursor(this.selectionStart);
            this.updateValue(newTimeObj);
        };
        this.parseOnBlur = () => {
            if (!this.viewValue) {
                return null;
            }
            const date = this.getDefaultValue();
            const viewDigits = this.viewValue
                .split(this.separator)
                .map((value) => value)
                .filter((value) => value);
            const [firsViewDigit, secondViewDigit, thirdViewDigit] = viewDigits;
            // tslint:disable-next-line:no-magic-numbers
            if (viewDigits.length !== 3) {
                this.lastValueValid = false;
                this._value = null;
                return setTimeout(() => this.control.updateValueAndValidity());
            }
            date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
            date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit);
            date[this.thirdDigit.fullName] = this.thirdDigit.parse(thirdViewDigit);
            const [digitWithYear, viewDigitWithYear] = [this.firstDigit, this.secondDigit, this.thirdDigit]
                .reduce((acc, digit, index) => digit.value === DateParts.year ? [digit, viewDigits[index]] : acc, []);
            // tslint:disable-next-line:no-magic-numbers
            if (viewDigitWithYear.length < 3) {
                // tslint:disable-next-line:no-magic-numbers
                date.year += date.year < 30 ? 2000 : 1900;
            }
            else if (viewDigitWithYear.length < digitWithYear.length) {
                this.lastValueValid = false;
                this._value = null;
                return setTimeout(() => this.control.updateValueAndValidity());
            }
            const newTimeObj = this.getValidDateOrNull(this.dateAdapter.createDateTime(date.year, date.month - 1, date.date, date.hours, date.minutes, date.seconds, date.milliseconds));
            this.lastValueValid = !!newTimeObj;
            this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.dateFormats.dateInput), true);
            this.updateValue(newTimeObj);
        };
        this.updateLocaleParams = () => {
            this.setFormat(this.dateFormats.dateInput);
            this.value = this.value;
        };
        this.cvaOnChange = () => { };
        this.validatorOnChange = () => { };
        /** The form control validator for whether the input parses. */
        this.parseValidator = () => {
            return this.focused ||
                this.empty ||
                this.lastValueValid ? null : { mcDatepickerParse: { text: this.elementRef.nativeElement.value } };
        };
        /** The form control validator for the min date. */
        this.minValidator = (control) => {
            const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
            return (!this.min || !controlValue ||
                this.dateAdapter.compareDate(this.min, controlValue) <= 0) ?
                null : { mcDatepickerMin: { min: this.min, actual: controlValue } };
        };
        /** The form control validator for the max date. */
        this.maxValidator = (control) => {
            const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
            return (!this.max || !controlValue ||
                this.dateAdapter.compareDate(this.max, controlValue) >= 0) ?
                null : { mcDatepickerMax: { max: this.max, actual: controlValue } };
        };
        /** The form control validator for the date filter. */
        this.filterValidator = (control) => {
            const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
            return !this.dateFilter || !controlValue || this.dateFilter(controlValue) ?
                null : { mcDatepickerFilter: true };
        };
        this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].compose([
            this.parseValidator,
            this.minValidator,
            this.maxValidator,
            this.filterValidator
        ]);
        if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
        }
        if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
        }
        this.setFormat(dateFormats.dateInput);
        this.localeSubscription = dateAdapter.localeChanges
            .subscribe(this.updateLocaleParams);
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
    }
    /** The datepicker that this input is associated with. */
    set mcDatepicker(value) {
        if (!value) {
            return;
        }
        this.datepicker = value;
        this.datepicker.registerInput(this);
        this.datepickerSubscription.unsubscribe();
        this.datepickerSubscription = this.datepicker.selectedChanged
            .subscribe((selected) => {
            this.value = selected;
            this.cvaOnChange(selected);
            this.onTouched();
            this.dateChange.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
        });
    }
    /** Function that can be used to filter out dates within the datepicker. */
    set mcDatepickerFilter(value) {
        this.dateFilter = value;
        this.validatorOnChange();
    }
    /** The value of the input. */
    get value() {
        return this._value;
    }
    set value(value) {
        let newValue = this.dateAdapter.deserialize(value);
        this.lastValueValid = !newValue || this.dateAdapter.isValid(newValue);
        newValue = this.getValidDateOrNull(newValue);
        const oldDate = this.value;
        this._value = newValue;
        this.formatValue(newValue);
        if (!this.dateAdapter.sameDate(oldDate, newValue)) {
            this.valueChange.emit(newValue);
        }
    }
    /** The minimum valid date. */
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.validatorOnChange();
    }
    /** The maximum valid date. */
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.validatorOnChange();
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
        const element = this.elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this.disabledChange.emit(newValue);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        if (newValue && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value || this.uid;
    }
    set mcValidationTooltip(tooltip) {
        if (!tooltip) {
            return;
        }
        tooltip.mcMouseEnterDelay = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__["validationTooltipShowDelay"];
        tooltip.mcTrigger = 'manual';
        tooltip.mcTooltipClass = 'mc-tooltip_warning';
        tooltip.initElementRefListeners();
        this.incorrectInput.subscribe(() => {
            if (tooltip.isTooltipOpen) {
                return;
            }
            tooltip.show();
            setTimeout(() => tooltip.hide(), _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__["validationTooltipHideDelay"]);
        });
    }
    get empty() {
        return !this.viewValue && !this.isBadInput();
    }
    get viewValue() {
        return this.elementRef.nativeElement.value;
    }
    get ngControl() {
        return this.control;
    }
    get isReadOnly() {
        return this.elementRef.nativeElement.readOnly;
    }
    get selectionStart() {
        return this.elementRef.nativeElement.selectionStart;
    }
    set selectionStart(value) {
        this.elementRef.nativeElement.selectionStart = value;
    }
    get selectionEnd() {
        return this.elementRef.nativeElement.selectionEnd;
    }
    set selectionEnd(value) {
        this.elementRef.nativeElement.selectionEnd = value;
    }
    onContainerClick() {
        this.focus();
    }
    focus() {
        this.elementRef.nativeElement.focus();
    }
    focusChanged(isFocused) {
        if (isFocused !== this.focused) {
            this.focused = isFocused;
            this.onTouched();
            this.stateChanges.next();
        }
    }
    ngOnDestroy() {
        this.datepickerSubscription.unsubscribe();
        this.localeSubscription.unsubscribe();
        this.valueChange.complete();
        this.disabledChange.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
        this.validatorOnChange = fn;
    }
    /** @docs-private */
    validate(control) {
        this.setControl(control);
        return this.validator ? this.validator(control) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.value = value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this.cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onKeyDown(event) {
        if (this.isReadOnly) {
            return;
        }
        // tslint:disable-next-line: deprecation
        const keyCode = event.keyCode;
        if (this.isLetterKey(event)) {
            event.preventDefault();
            this.incorrectInput.emit();
        }
        else if (this.isKeyForOpen(event)) {
            event.preventDefault();
            this.datepicker.open();
        }
        else if (this.isKeyForClose(event)) {
            event.preventDefault();
            this.datepicker.close();
        }
        else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["TAB"]) {
            this.datepicker.close(false);
        }
        else if (this.isKeyForByPass(event)) {
            return;
        }
        else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) {
            this.spaceKeyHandler(event);
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]].includes(keyCode)) {
            event.preventDefault();
            this.verticalArrowKeyHandler(keyCode);
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]].includes(keyCode)) {
            event.preventDefault();
            this.changeCaretPosition(keyCode);
        }
        else if (/^\D$/.test(event.key)) {
            event.preventDefault();
            const newValue = this.getNewValue(event.key, this.selectionStart);
            const formattedValue = this.replaceSymbols(newValue);
            if (newValue !== formattedValue) {
                this.setViewValue(formattedValue, true);
                setTimeout(this.onInput);
            }
            else {
                this.incorrectInput.emit();
            }
        }
        else {
            setTimeout(this.onInput);
        }
    }
    onChange() {
        this.dateChange.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    onBlur() {
        // Reformat the input only if we have a valid value.
        this.parseOnBlur();
        this.focusChanged(false);
    }
    onPaste($event) {
        var _a, _b, _c;
        $event.preventDefault();
        const rawValue = $event.clipboardData.getData('text');
        const match = rawValue.match(/^(?<first>\d+)\W(?<second>\d+)\W(?<third>\d+)$/);
        if (!((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.first) || !((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.second) || !((_c = match === null || match === void 0 ? void 0 : match.groups) === null || _c === void 0 ? void 0 : _c.third)) {
            this.setViewValue(rawValue);
            return rawValue;
        }
        const value = [match.groups.first, match.groups.second, match.groups.third].join(this.separator);
        const newTimeObj = this.getDateFromString(value);
        if (!newTimeObj) {
            this.setViewValue(value);
            return value;
        }
        this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.dateFormats.dateInput));
        this.updateValue(newTimeObj);
    }
    toISO8601(value) {
        return this.dateAdapter.toIso8601(value);
    }
    setFormat(format) {
        this.separator = format.match(/[aA-zZ]+(?<separator>\W|\D)[aA-zZ]+/).groups.separator;
        this.separatorPositions = format
            .split('')
            .reduce((acc, item, index) => this.separator === item ? [...acc, index + 1] : acc, []);
        this.getDigitPositions(format);
    }
    updateValue(newValue) {
        if (!this.dateAdapter.sameDate(newValue, this.value)) {
            this._value = newValue;
            this.cvaOnChange(newValue);
            this.valueChange.emit(newValue);
            this.dateInput.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
        }
        this.control.updateValueAndValidity({ emitEvent: false });
    }
    isKeyForClose(event) {
        // tslint:disable-next-line: deprecation
        return (event.altKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]) || event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"];
    }
    isKeyForOpen(event) {
        // tslint:disable-next-line: deprecation
        return event.altKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"];
    }
    isLetterKey(event) {
        return Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isLetterKey"])(event) && !event.ctrlKey && !event.metaKey;
    }
    isKeyForByPass(event) {
        // tslint:disable-next-line: deprecation
        return (Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event) && (Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isVerticalMovement"])(event.keyCode) || Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isHorizontalMovement"])(event.keyCode))) ||
            event.ctrlKey ||
            event.metaKey;
    }
    spaceKeyHandler(event) {
        event.preventDefault();
        if (this.selectionStart === this.selectionEnd) {
            const value = this.getNewValue(event.key, this.selectionStart);
            this.setViewValue(value);
            setTimeout(this.onInput);
        }
        else if (this.selectionStart !== this.selectionEnd) {
            this.selectNextDigit(this.selectionStart, true);
        }
    }
    getNewValue(key, position) {
        return [this.viewValue.slice(0, position), key, this.viewValue.slice(position)].join('');
    }
    setViewValue(value, savePosition = false) {
        if (savePosition) {
            const selectionStart = this.selectionStart;
            const selectionEnd = this.selectionEnd;
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
        }
        else {
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
        }
    }
    replaceSymbols(value) {
        return value
            .split(this.separator)
            .map((part) => part.replace(/^([0-9]+)\W$/, '0$1'))
            .join(this.separator);
    }
    getDateFromString(timeString) {
        if (!timeString || timeString.length < this.firstDigit.length) {
            return null;
        }
        const date = this.getDefaultValue();
        const viewDigits = timeString
            .split(this.separator)
            .map((value) => value);
        const [firsViewDigit, secondViewDigit, thirdViewDigit] = viewDigits;
        if (viewDigits.length === 1) {
            if (firsViewDigit.length < this.firstDigit.length) {
                return null;
            }
            date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
            date.month = 1;
            // tslint:disable-next-line:no-magic-numbers
        }
        else if (viewDigits.length === 2) {
            if (firsViewDigit.length < this.firstDigit.length || secondViewDigit.length < this.secondDigit.length) {
                return null;
            }
            date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
            date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit);
            // tslint:disable-next-line:no-magic-numbers
        }
        else if (viewDigits.length === 3) {
            if (firsViewDigit.length < this.firstDigit.length ||
                secondViewDigit.length < this.secondDigit.length ||
                thirdViewDigit.length < this.thirdDigit.length) {
                return null;
            }
            date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
            date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit);
            date[this.thirdDigit.fullName] = this.thirdDigit.parse(thirdViewDigit);
        }
        else {
            return null;
        }
        return this.getValidDateOrNull(this.dateAdapter.createDateTime(date.year, date.month - 1, date.date, date.hours, date.minutes, date.seconds, date.milliseconds));
    }
    getDefaultValue() {
        const defaultValue = this.value || this.dateAdapter.today();
        return {
            year: this.dateAdapter.getYear(defaultValue),
            month: this.dateAdapter.getMonth(defaultValue),
            date: this.dateAdapter.getDate(defaultValue),
            hours: this.dateAdapter.getHours(defaultValue),
            minutes: this.dateAdapter.getMinutes(defaultValue),
            seconds: this.dateAdapter.getSeconds(defaultValue),
            milliseconds: this.dateAdapter.getMilliseconds(defaultValue)
        };
    }
    getTimeStringFromDate(value, timeFormat) {
        if (!value || !this.dateAdapter.isValid(value)) {
            return '';
        }
        return this.dateAdapter.format(value, timeFormat);
    }
    getDateEditMetrics(cursorPosition) {
        for (const digit of [this.firstDigit, this.secondDigit, this.thirdDigit]) {
            if (cursorPosition >= digit.start && cursorPosition <= digit.end) {
                return [digit.value, digit.start, digit.end];
            }
        }
        return [this.thirdDigit.value, this.thirdDigit.start, this.thirdDigit.end];
    }
    incrementDate(dateVal, whatToIncrement) {
        let year = this.dateAdapter.getYear(dateVal);
        let month = this.dateAdapter.getMonth(dateVal);
        let day = this.dateAdapter.getDate(dateVal);
        switch (whatToIncrement) {
            case DateParts.day:
                day++;
                if (day > this.dateAdapter.getNumDaysInMonth(dateVal)) {
                    day = 1;
                }
                break;
            case DateParts.month:
                month++;
                // tslint:disable-next-line:no-magic-numbers
                if (month > 11) {
                    month = 0;
                }
                const lastDay = this.getLastDayFor(year, month);
                if (day > lastDay) {
                    day = lastDay;
                }
                break;
            case DateParts.year:
                year++;
                if (year > MAX_YEAR) {
                    year = 1;
                }
                break;
            default:
        }
        return this.createDate(year, month, day);
    }
    getLastDayFor(year, month) {
        return this.dateAdapter.getNumDaysInMonth(this.createDate(year, month, 1));
    }
    decrementDate(dateVal, whatToDecrement) {
        let year = this.dateAdapter.getYear(dateVal);
        let month = this.dateAdapter.getMonth(dateVal);
        let day = this.dateAdapter.getDate(dateVal);
        switch (whatToDecrement) {
            case DateParts.day:
                day--;
                if (day < 1) {
                    day = this.dateAdapter.getNumDaysInMonth(dateVal);
                }
                break;
            case DateParts.month:
                month--;
                if (month < 0) {
                    // tslint:disable-next-line:no-magic-numbers
                    month = 11;
                }
                const lastDay = this.getLastDayFor(year, month);
                if (day > lastDay) {
                    day = lastDay;
                }
                break;
            case DateParts.year:
                year--;
                if (year < 1) {
                    year = MAX_YEAR;
                }
                break;
            default:
        }
        return this.createDate(year, month, day);
    }
    verticalArrowKeyHandler(keyCode) {
        if (!this.value) {
            return;
        }
        let changedTime;
        const [modifiedTimePart, selectionStart, selectionEnd] = this.getDateEditMetrics(this.selectionStart);
        if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]) {
            changedTime = this.incrementDate(this.value, modifiedTimePart);
        }
        if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]) {
            changedTime = this.decrementDate(this.value, modifiedTimePart);
        }
        this.value = changedTime;
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
        this.cvaOnChange(changedTime);
        this.onChange();
        this.stateChanges.next();
    }
    changeCaretPosition(keyCode) {
        if (!this.value) {
            return;
        }
        let cursorPos = this.selectionStart;
        if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]].includes(keyCode)) {
            cursorPos = 0;
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]].includes(keyCode)) {
            cursorPos = this.viewValue.length;
        }
        else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]) {
            cursorPos = cursorPos === 0 ? this.viewValue.length : cursorPos - 1;
        }
        else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]) {
            const nextSeparatorPos = this.viewValue.indexOf(this.separator, cursorPos);
            cursorPos = nextSeparatorPos ? nextSeparatorPos + 1 : 0;
        }
        this.selectDigitByCursor(cursorPos);
    }
    selectDigitByCursor(cursorPos) {
        setTimeout(() => {
            const [, selectionStart, selectionEnd] = this.getDateEditMetrics(cursorPos);
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
        });
    }
    selectNextDigitByCursor(cursorPos) {
        setTimeout(() => {
            const [, , endPositionOfCurrentDigit] = this.getDateEditMetrics(cursorPos);
            const [, selectionStart, selectionEnd] = this.getDateEditMetrics(endPositionOfCurrentDigit + 1);
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
        });
    }
    selectNextDigit(cursorPos, cycle = false) {
        setTimeout(() => {
            const lastValue = cycle ? 0 : cursorPos;
            const nextSeparatorPos = this.viewValue.indexOf(this.separator, cursorPos);
            const newCursorPos = nextSeparatorPos > 0 ? nextSeparatorPos + 1 : lastValue;
            const [, selectionStart, selectionEnd] = this.getDateEditMetrics(newCursorPos);
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
        });
    }
    /** Checks whether the input is invalid based on the native validation. */
    isBadInput() {
        const validity = this.elementRef.nativeElement.validity;
        return validity && validity.badInput;
    }
    /** Formats a value and sets it on the input element. */
    formatValue(value) {
        const formattedValue = value ? this.dateAdapter.format(value, this.dateFormats.dateInput) : '';
        this.setViewValue(formattedValue);
    }
    /**
     * @param obj The object to check.
     * @returns The given object if it is both a date instance and valid, otherwise null.
     */
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
    setControl(control) {
        if (!this.control) {
            this.control = control;
        }
    }
    getDigitPositions(format) {
        const formatInLowerCase = format.toLowerCase();
        formatInLowerCase
            .split('')
            .reduce(({ prev, length, start }, value, index, arr) => {
            if (value === this.separator || (arr.length - 1) === index) {
                if (!this.firstDigit) {
                    this.firstDigit = new DateDigit(prev, start, length);
                }
                else if (!this.secondDigit) {
                    this.secondDigit = new DateDigit(prev, start, length);
                }
                else if (!this.thirdDigit) {
                    this.thirdDigit = new DateDigit(prev, start, arr.length - start);
                }
                // tslint:disable:no-parameter-reassignment
                length = 0;
                start = index + 1;
            }
            else {
                length++;
            }
            return { prev: value, length, start };
        }, { length: 0, start: 0 });
        if (!this.firstDigit || !this.secondDigit || !this.thirdDigit) {
            Error(`Can' t use this format: ${format}`);
        }
    }
    createDate(year, month, day) {
        return this.dateAdapter.createDateTime(year, month, day, this.dateAdapter.getHours(this.value), this.dateAdapter.getMinutes(this.value), this.dateAdapter.getSeconds(this.value), this.dateAdapter.getMilliseconds(this.value));
    }
    correctCursorPosition() {
        if (this.selectionStart && this.separatorPositions.includes(this.selectionStart)) {
            this.selectionStart = this.selectionStart - 1;
        }
    }
}
McDatepickerInput.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: 'input[mcDatepicker]',
                exportAs: 'mcDatepickerInput',
                providers: [
                    MC_DATEPICKER_VALUE_ACCESSOR,
                    MC_DATEPICKER_VALIDATORS,
                    { provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"], useExisting: McDatepickerInput }
                ],
                host: {
                    class: 'mc-input mc-datepicker',
                    '[attr.placeholder]': 'placeholder',
                    '[attr.required]': 'required',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.min]': 'min ? toISO8601(min) : null',
                    '[attr.max]': 'max ? toISO8601(max) : null',
                    '[attr.autocomplete]': '"off"',
                    '(paste)': 'onPaste($event)',
                    '(change)': 'onChange()',
                    '(focus)': 'focusChanged(true)',
                    '(blur)': 'onBlur()',
                    '(keydown)': 'onKeyDown($event)'
                }
            },] }
];
/** @nocollapse */
McDatepickerInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"],] }] }
];
McDatepickerInput.propDecorators = {
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    mcDatepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    mcDatepickerFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    mcValidationTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    incorrectInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    dateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};

/** Can be used to override the icon of a `mcDatepickerToggle`. */
class McDatepickerToggleIcon {
}
McDatepickerToggleIcon.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: '[mcDatepickerToggleIcon]'
            },] }
];
class McDatepickerToggle {
    constructor(intl, changeDetectorRef) {
        this.intl = intl;
        this.changeDetectorRef = changeDetectorRef;
        this.stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        return this._disabled === undefined ? this.datepicker.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
    }
    ngOnChanges(changes) {
        if (changes.datepicker) {
            this.watchStateChanges();
        }
    }
    ngOnDestroy() {
        this.stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this.watchStateChanges();
    }
    open(event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    }
    watchStateChanges() {
        const datepickerDisabled = this.datepicker ? this.datepicker.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
        const inputDisabled = this.datepicker && this.datepicker.datepickerInput ?
            this.datepicker.datepickerInput.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
        const datepickerToggled = this.datepicker ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
        this.stateChanges.unsubscribe();
        this.stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(() => this.changeDetectorRef.markForCheck());
    }
}
McDatepickerToggle.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                selector: 'mc-datepicker-toggle',
                template: "<!--todo need simplify this-->\n<button\n    #button\n    mc-button\n    type=\"button\"\n    class=\"mc-datepicker-toggle__button\"\n    aria-haspopup=\"true\"\n    [attr.aria-label]=\"intl.openCalendarLabel\"\n    [attr.tabindex]=\"tabIndex\"\n    [disabled]=\"disabled\"\n    (click)=\"open($event)\">\n\n    <i *ngIf=\"!customIcon\" mc-icon=\"mc-calendar_16\" class=\"mc-datepicker-toggle__default-icon\"></i>\n\n    <ng-content select=\"[mcDatepickerToggleIcon]\"></ng-content>\n</button>\n",
                host: {
                    class: 'mc-datepicker-toggle',
                    '[class.mc-active]': 'datepicker && datepicker.opened'
                },
                exportAs: 'mcDatepickerToggle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".mc-datepicker-toggle:focus{outline:0}.mc-datepicker-toggle__button.mc-icon-button{width:30px;width:var(--mc-datepicker-toggle-size-width, 30px);height:30px;height:var(--mc-datepicker-toggle-size-height, 30px);margin-left:2px}.mc-form-field-appearance-legacy .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field-appearance-legacy .mc-form-field-suffix .mc-datepicker-toggle__default-icon{width:1em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-datepicker-toggle__default-icon{display:block;width:1.5em;height:1.5em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-icon-button .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-icon-button .mc-datepicker-toggle__default-icon{margin:auto}\n"]
            },] }
];
/** @nocollapse */
McDatepickerToggle.ctorParameters = () => [
    { type: McDatepickerIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
McDatepickerToggle.propDecorators = {
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['for',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [McDatepickerToggleIcon, { static: false },] }],
    button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['button', { static: false },] }]
};

class McDatepickerModule {
}
McDatepickerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]
                ],
                exports: [
                    McCalendar,
                    McCalendarBody,
                    McDatepicker,
                    McDatepickerContent,
                    McDatepickerInput,
                    McDatepickerToggle,
                    McDatepickerToggleIcon,
                    McMonthView,
                    McYearView,
                    McMultiYearView,
                    McCalendarHeader,
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]
                ],
                declarations: [
                    McCalendar,
                    McCalendarBody,
                    McDatepicker,
                    McDatepickerContent,
                    McDatepickerInput,
                    McDatepickerToggle,
                    McDatepickerToggleIcon,
                    McMonthView,
                    McYearView,
                    McMultiYearView,
                    McCalendarHeader
                ],
                providers: [
                    McDatepickerIntl,
                    MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ],
                entryComponents: [
                    McDatepickerContent,
                    McCalendarHeader
                ]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "N1EY":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-datepicker.js ***!
  \***********************************************************************************************************/
/*! exports provided: DatepickerExamplesModule, DatepickerLanguageExample, DatepickerNotEmptyExample, DatepickerOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerExamplesModule", function() { return DatepickerExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerLanguageExample", function() { return DatepickerLanguageExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerNotEmptyExample", function() { return DatepickerNotEmptyExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerOverviewExample", function() { return DatepickerOverviewExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic-luxon-adapter/adapter */ "OBKZ");
/* harmony import */ var _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/datepicker */ "5F9T");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/radio */ "59Z+");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/de */ "VLs4");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ptsecurity/cdk/datetime */ "Vue8");






















/* tslint:disable:no-magic-numbers */
function DatepickerLanguageExample_mc_radio_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-radio-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", language_r3)("checked", language_r3.name === ctx_r0.selectedLanguage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r3.name, " ");
} }
function mcDateFormatsFactory() {
    const dateFormats = Object.assign({}, _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["MC_LUXON_DATE_FORMATS"]);
    dateFormats.dateInput = 'dd.MM.yyyy';
    return dateFormats;
}
Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_10___default.a);
/**
 * @title Multy language datepicker
 */
class DatepickerLanguageExample {
    constructor(adapter, dateFormats) {
        this.adapter = adapter;
        this.dateFormats = dateFormats;
        this.languageList = [
            { name: 'en', format: 'dd/MM/yyyy', placeholder: 'дд/мм/гггг' },
            { name: 'de', format: 'dd-MM-yyyy', placeholder: 'дд-мм-гггг' },
            { name: 'ru', format: 'dd.MM.yyyy', placeholder: 'дд.мм.гггг' }
        ];
        this.selectedLanguage = this.languageList[0];
        this.selectedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
    }
    ngOnInit() {
        this.adapter.setLocale(this.languageList[0].name);
    }
    setFormat($event) {
        this.dateFormats.dateInput = $event.value.format;
        this.selectedLanguage = this.languageList.find(({ name }) => name === $event.value.name);
        this.selectedDate.setValue(this.selectedDate.value);
        this.adapter.setLocale($event.value.name);
    }
}
DatepickerLanguageExample.ɵfac = function DatepickerLanguageExample_Factory(t) { return new (t || DatepickerLanguageExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_FORMATS"])); };
DatepickerLanguageExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatepickerLanguageExample, selectors: [["datepicker-language-example"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
                provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_FORMATS"],
                useFactory: mcDateFormatsFactory
            }])], decls: 14, vars: 7, consts: [[1, "example-radio-group", 3, "change"], ["class", "example-radio-button", 3, "value", "checked", 4, "ngFor", "ngForOf"], ["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "formControl", "placeholder", "mcDatepicker", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["picker", ""], [1, "example-radio-button", 3, "value", "checked"]], template: function DatepickerLanguageExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DatepickerLanguageExample_Template_mc_radio_group_change_0_listener($event) { return ctx.setFormat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatepickerLanguageExample_mc_radio_button_1_Template, 2, 3, "mc-radio-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-form-field", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerLanguageExample_Template_mc_form_field_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mc-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languageList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectedDate)("placeholder", ctx.selectedLanguage.placeholder)("mcDatepicker", _r2)("mcValidationTooltip", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate.value);
    } }, directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioButton"]], styles: [".example-radio-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-radio-button[_ngcontent-%COMP%]{margin-bottom:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerLanguageExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datepicker-language-example',
                templateUrl: 'datepicker-language-example.html',
                styleUrls: ['datepicker-language-example.css'],
                providers: [{
                        provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_FORMATS"],
                        useFactory: mcDateFormatsFactory
                    }]
            }]
    }], function () { return [{ type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_FORMATS"]]
            }] }]; }, null); })();

/**
 * @title Datepicker
 */
class DatepickerNotEmptyExample {
    constructor(adapter) {
        this.date = adapter.today();
    }
}
DatepickerNotEmptyExample.ɵfac = function DatepickerNotEmptyExample_Factory(t) { return new (t || DatepickerNotEmptyExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"])); };
DatepickerNotEmptyExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatepickerNotEmptyExample, selectors: [["datepicker-not-empty-example"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"], useValue: 'ru' },
            {
                provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"],
                useFactory: (locale) => new _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["LuxonDateAdapter"](locale),
                deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"]]
            }
        ])], decls: 6, vars: 5, consts: [["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip", "ngModelChange"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["myDatepicker", ""]], template: function DatepickerNotEmptyExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerNotEmptyExample_Template_mc_form_field_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatepickerNotEmptyExample_Template_input_ngModelChange_2_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-datepicker", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerNotEmptyExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datepicker-not-empty-example',
                templateUrl: 'datepicker-not-empty-example.html',
                styleUrls: ['datepicker-not-empty-example.css'],
                providers: [
                    { provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"], useValue: 'ru' },
                    {
                        provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"],
                        useFactory: (locale) => new _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["LuxonDateAdapter"](locale),
                        deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"]]
                    }
                ]
            }]
    }], function () { return [{ type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"] }]; }, null); })();

/**
 * @title Datepicker
 */
class DatepickerOverviewExample {
}
DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
DatepickerOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            { provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"], useValue: 'ru' },
            {
                provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"],
                useFactory: (locale) => new _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["LuxonDateAdapter"](locale),
                deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"]]
            }
        ])], decls: 6, vars: 5, consts: [["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip", "ngModelChange"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["myDatepicker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerOverviewExample_Template_mc_form_field_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatepickerOverviewExample_Template_input_ngModelChange_2_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-datepicker", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'datepicker-overview-example',
                templateUrl: 'datepicker-overview-example.html',
                styleUrls: ['datepicker-overview-example.css'],
                providers: [
                    { provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"], useValue: 'ru' },
                    {
                        provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["DateAdapter"],
                        useFactory: (locale) => new _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["LuxonDateAdapter"](locale),
                        deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_11__["MC_DATE_LOCALE"]]
                    }
                ]
            }]
    }], null, null); })();

const EXAMPLES = [
    DatepickerLanguageExample,
    DatepickerOverviewExample,
    DatepickerNotEmptyExample
];
class DatepickerExamplesModule {
}
DatepickerExamplesModule.ɵfac = function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); };
DatepickerExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DatepickerExamplesModule });
DatepickerExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"],
            _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
            _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"],
            _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DatepickerExamplesModule, { declarations: [DatepickerLanguageExample,
        DatepickerOverviewExample,
        DatepickerNotEmptyExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"],
        _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
        _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"],
        _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]], exports: [DatepickerLanguageExample,
        DatepickerOverviewExample,
        DatepickerNotEmptyExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"],
                    _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
                    _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"],
                    _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-datepicker.js.map


/***/ }),

/***/ "VLs4":
/*!****************************************************!*\
  !*** ./node_modules/@angular/common/locales/de.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(null, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'de',
        [['AM', 'PM'], u, u],
        u,
        [
            ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
            ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
        ],
        [
            ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
            ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
                'Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'
            ],
            [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober',
                'November', 'Dezember'
            ]
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            [
                'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober',
                'November', 'Dezember'
            ]
        ],
        [['v. Chr.', 'n. Chr.'], u, u],
        1,
        [6, 0],
        ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, '{1} \'um\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'Euro',
        {
            'ATS': ['öS'],
            'AUD': ['AU$', '$'],
            'BGM': ['BGK'],
            'BGO': ['BGJ'],
            'CUC': [u, 'Cub$'],
            'DEM': ['DM'],
            'FKP': [u, 'Fl£'],
            'GNF': [u, 'F.G.'],
            'KMF': [u, 'FC'],
            'RON': [u, 'L'],
            'RWF': [u, 'F.Rw'],
            'SYP': [],
            'THB': ['฿'],
            'TWD': ['NT$'],
            'XXX': [],
            'ZMW': [u, 'K']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNsRDtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMvRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNsRDtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07YUFDL0Y7WUFDRDtnQkFDRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTO2dCQUM3RixVQUFVLEVBQUUsVUFBVTthQUN2QjtTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUztnQkFDN0YsVUFBVSxFQUFFLFVBQVU7YUFDdkI7U0FDRjtRQUNELENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztRQUN2RCxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDN0MsS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ047WUFDRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2RlJyxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ1MnLCAnTScsICdEJywgJ00nLCAnRCcsICdGJywgJ1MnXSwgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydTJywgJ00nLCAnRCcsICdNJywgJ0QnLCAnRicsICdTJ10sIFsnU28nLCAnTW8nLCAnRGknLCAnTWknLCAnRG8nLCAnRnInLCAnU2EnXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdKYW4uJywgJ0ZlYi4nLCAnTcOkcnonLCAnQXByLicsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Zy4nLCAnU2VwdC4nLCAnT2t0LicsICdOb3YuJywgJ0Rlei4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLFxuICAgICAgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGZWInLCAnTcOkcicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPa3QnLCAnTm92JywgJ0RleiddLFxuICAgIFtcbiAgICAgICdKYW51YXInLCAnRmVicnVhcicsICdNw6RyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsXG4gICAgICAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXG4gICAgXVxuICBdLFxuICBbWyd2LiBDaHIuJywgJ24uIENoci4nXSwgdSwgdV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC5NTS55eScsICdkZC5NTS55JywgJ2QuIE1NTU0geScsICdFRUVFLCBkLiBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0gXFwndW1cXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfCtycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0VVUicsXG4gICfigqwnLFxuICAnRXVybycsXG4gIHtcbiAgICAnQVRTJzogWyfDtlMnXSxcbiAgICAnQVVEJzogWydBVSQnLCAnJCddLFxuICAgICdCR00nOiBbJ0JHSyddLFxuICAgICdCR08nOiBbJ0JHSiddLFxuICAgICdDVUMnOiBbdSwgJ0N1YiQnXSxcbiAgICAnREVNJzogWydETSddLFxuICAgICdGS1AnOiBbdSwgJ0ZswqMnXSxcbiAgICAnR05GJzogW3UsICdGLkcuJ10sXG4gICAgJ0tNRic6IFt1LCAnRkMnXSxcbiAgICAnUk9OJzogW3UsICdMJ10sXG4gICAgJ1JXRic6IFt1LCAnRi5SdyddLFxuICAgICdTWVAnOiBbXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnWFhYJzogW10sXG4gICAgJ1pNVyc6IFt1LCAnSyddXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=

/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map