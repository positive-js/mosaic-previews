(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "nzbH":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-validation.js ***!
  \***********************************************************************************************************/
/*! exports provided: ValidationCompositeExample, ValidationExamplesModule, ValidationGlobalExample, ValidationOnBlurExample, ValidationOnTypeExample, ValidationOverviewExample, ValidationSmallExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationCompositeExample", function() { return ValidationCompositeExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationExamplesModule", function() { return ValidationExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationGlobalExample", function() { return ValidationGlobalExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationOnBlurExample", function() { return ValidationOnBlurExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationOnTypeExample", function() { return ValidationOnTypeExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationOverviewExample", function() { return ValidationOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationSmallExample", function() { return ValidationSmallExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/select */ "CUtc");
/* harmony import */ var _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/textarea */ "T1vZ");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");






















const _c0$1 = ["startTooltip"];
const _c1 = ["endTooltip"];
function ValidationCompositeExample_mc_hint_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " IP-\u0430\u0434\u0440\u0435\u0441 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C RFC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationCompositeExample_mc_hint_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " IP-\u0430\u0434\u0440\u0435\u0441 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C RFC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationCompositeExample_mc_hint_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " IP-\u0430\u0434\u0440\u0435\u0441 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C IP-\u0430\u0434\u0440\u0435\u0441 \u043D\u0430\u0447\u0430\u043B\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function groupValidator() {
    return (g) => {
        var _a, _b;
        const start = (_a = g.get('start')) === null || _a === void 0 ? void 0 : _a.value;
        const end = (_b = g.get('end')) === null || _b === void 0 ? void 0 : _b.value;
        if (IP_PATTERN$1.test(start) && IP_PATTERN$1.test(end)) {
            const parsedStartIp = start.split('.').map((octet) => parseInt(octet, 10));
            const parsedEndIp = end.split('.').map((octet) => parseInt(octet, 10));
            for (let i = 0; i < parsedStartIp.length; i++) {
                if (parsedStartIp[i] > parsedEndIp[i]) {
                    return { range: true };
                }
            }
        }
        return null;
    };
}
function fieldValidator(regex) {
    return (control) => {
        if (!control.value) {
            return null;
        }
        return regex.test(control.value) ? null : { pattern: true };
    };
}
const IP_PATTERN$1 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
/**
 * @title validation-composite
 */
class ValidationCompositeExample {
    constructor() {
        this.compositeFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [fieldValidator(IP_PATTERN$1)]),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [fieldValidator(IP_PATTERN$1)])
        }, { updateOn: 'blur', validators: [groupValidator()] });
    }
    onInput(event, tooltip, controlName) {
        const regex = /^[\d\.]+$/g;
        if (!regex.test(event.target.value)) {
            const newValue = event.target.value.replace(/[^\d\.]+/g, '');
            this.compositeFormGroup.controls[controlName].setValue(newValue);
            if (!tooltip.isTooltipOpen) {
                tooltip.show();
                // tslint:disable-next-line:no-magic-numbers
                setTimeout(() => tooltip.hide(), 3000);
            }
        }
    }
}
ValidationCompositeExample.ɵfac = function ValidationCompositeExample_Factory(t) { return new (t || ValidationCompositeExample)(); };
ValidationCompositeExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationCompositeExample, selectors: [["validation-composite-example"]], viewQuery: function ValidationCompositeExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0$1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.startTooltip = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.endTooltip = _t.first);
    } }, decls: 22, vars: 10, consts: [[1, "docs-composite-form"], [1, "mc-subheading"], ["novalidate", "", 1, "docs-form", 3, "formGroup"], [1, "layout-row"], [1, "docs-column"], [1, "mc-caption", "docs-label"], ["mcTooltip", "", "mcTooltipClass", "mc-tooltip_warning", "mcTrigger", "manual", "mcPlacement", "bottom", 3, "mcTitle", "mcMouseEnterDelay"], ["startTooltip", "mcTooltip"], ["mcInput", "", "formControlName", "start", 3, "input"], ["class", "mc-caption docs-hint", 4, "ngIf"], ["endTooltip", "mcTooltip"], ["mcInput", "", "formControlName", "end", 3, "input"], [1, "mc-caption", "docs-hint"]], template: function ValidationCompositeExample_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u044B IP-\u0430\u0434\u0440\u0435\u0441\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041D\u0430\u0447\u0430\u043B\u043E \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mc-form-field", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ValidationCompositeExample_Template_input_input_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx.onInput($event, _r0, "start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ValidationCompositeExample_mc_hint_11_Template, 2, 0, "mc-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "mc-cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u041E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mc-form-field", 6, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ValidationCompositeExample_Template_input_input_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17); return ctx.onInput($event, _r2, "end"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ValidationCompositeExample_mc_hint_19_Template, 2, 0, "mc-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mc-cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ValidationCompositeExample_mc_hint_21_Template, 2, 0, "mc-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("validation-error", ctx.compositeFormGroup.errors == null ? null : ctx.compositeFormGroup.errors.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.compositeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B \u0438 \u0442\u043E\u0447\u043A\u0438")("mcMouseEnterDelay", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.compositeFormGroup.controls.start.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B \u0438 \u0442\u043E\u0447\u043A\u0438")("mcMouseEnterDelay", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.compositeFormGroup.controls.end.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.compositeFormGroup.errors == null ? null : ctx.compositeFormGroup.errors.range);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McCleaner"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McHint"]], styles: [".docs-label[_ngcontent-%COMP%]{margin-bottom:4px;color:#999}.docs-hint[_ngcontent-%COMP%]{color:#e04d36}.docs-composite-form[_ngcontent-%COMP%]{width:500px;margin:8px 8px 40px}.docs-column[_ngcontent-%COMP%]{width:200px;margin-right:16px}.layout-row[_ngcontent-%COMP%]{margin-bottom:4px}.validation-error[_ngcontent-%COMP%]{background-color:#fcefec;border-radius:4px}.mc-subheading[_ngcontent-%COMP%]{margin-bottom:16px}.docs-form[_ngcontent-%COMP%]{padding:8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationCompositeExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'validation-composite-example',
                templateUrl: 'validation-composite-example.html',
                styleUrls: ['validation-composite-example.css']
            }]
    }], function () { return []; }, { startTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['startTooltip', { static: false }]
        }], endTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['endTooltip', { static: false }]
        }] }); })();

function ValidationGlobalExample_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u041D\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u041F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
} }
/**
 * @title validation-global
 */
class ValidationGlobalExample {
    constructor() {
        this.showServerErrors = false;
        this.inProgress = false;
        this.globalErrorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            thirdName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    submitGlobalErrorForm() {
        this.showServerErrors = false;
        this.inProgress = true;
        setTimeout(() => {
            this.showServerErrors = true;
            this.inProgress = false;
        }, 
        // tslint:disable-next-line:no-magic-numbers
        1000);
    }
}
ValidationGlobalExample.ɵfac = function ValidationGlobalExample_Factory(t) { return new (t || ValidationGlobalExample)(); };
ValidationGlobalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationGlobalExample, selectors: [["validation-global-example"]], decls: 15, vars: 6, consts: [[1, "layout-margin", "docs-width"], ["class", "mc-alert mc-alert_error", 4, "ngIf"], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "docs-row"], [1, "mc-caption", "docs-label"], ["mcInput", "", "formControlName", "firstName"], ["mcInput", "", "formControlName", "lastName"], ["mc-button", "", "type", "submit", 3, "color", "disabled"], [1, "mc-alert", "mc-alert_error"], ["mc-icon", "mc-info_16", 1, "mc-alert__icon", 3, "color"], [1, "mc-body"], [1, "mc-subheading", "docs-subheading"]], template: function ValidationGlobalExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ValidationGlobalExample_div_1_Template, 7, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ValidationGlobalExample_Template_form_ngSubmit_2_listener() { return ctx.submitGlobalErrorForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showServerErrors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.globalErrorForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-progress", ctx.inProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary")("disabled", ctx.inProgress);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"]], styles: [".docs-row[_ngcontent-%COMP%]{margin-bottom:16px}.docs-label[_ngcontent-%COMP%]{margin-bottom:4px;color:#999}.docs-width[_ngcontent-%COMP%]{width:372px}.mc-alert[_ngcontent-%COMP%]{margin-bottom:16px}.docs-subheading[_ngcontent-%COMP%]{margin-bottom:4px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationGlobalExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'validation-global-example',
                templateUrl: 'validation-global-example.html',
                styleUrls: ['validation-global-example.css']
            }]
    }], function () { return []; }, null); })();

function ValidationOnBlurExample_mc_hint_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "IP-\u0430\u0434\u0440\u0435\u0441 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C RFC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationOnBlurExample_mc_hint_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: 1 \u0447\u0430\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationOnBlurExample_mc_hint_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: 24 \u0447\u0430\u0441\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const IP_PATTERN = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
/**
 * @title validation-on-blur
 */
class ValidationOnBlurExample {
    constructor() {
        this.ipAddress = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(IP_PATTERN)]);
        // tslint:disable-next-line:no-magic-numbers
        this.frequency = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(24)]);
    }
}
ValidationOnBlurExample.ɵfac = function ValidationOnBlurExample_Factory(t) { return new (t || ValidationOnBlurExample)(); };
ValidationOnBlurExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationOnBlurExample, selectors: [["validation-on-blur-example"]], decls: 17, vars: 5, consts: [[1, "docs-margin", "docs-width"], [1, "docs-row"], [1, "mc-caption", "docs-label"], ["mcInput", "", 3, "formControl"], ["class", "mc-caption docs-hint", 4, "ngIf"], ["type", "number", "mcInput", "", 3, "formControl"], [1, "mc-caption"], [1, "mc-caption", "docs-hint"]], template: function ValidationOnBlurExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "IP-\u0430\u0434\u0440\u0435\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ValidationOnBlurExample_mc_hint_6_Template, 2, 0, "mc-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mc-cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 (\u0447\u0430\u0441\u044B)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043E\u0442 1 \u0434\u043E 24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ValidationOnBlurExample_mc_hint_15_Template, 2, 0, "mc-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ValidationOnBlurExample_mc_hint_16_Template, 2, 0, "mc-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.ipAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ipAddress.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.frequency);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frequency.errors == null ? null : ctx.frequency.errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.frequency.errors == null ? null : ctx.frequency.errors.max);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McCleaner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McNumberInput"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McHint"]], styles: [".docs-margin[_ngcontent-%COMP%]{margin:8px}.docs-row[_ngcontent-%COMP%]{margin-bottom:16px}.docs-label[_ngcontent-%COMP%]{margin-bottom:4px;color:#999}.docs-width[_ngcontent-%COMP%]{width:400px}.docs-hint[_ngcontent-%COMP%]{color:#e04d36}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationOnBlurExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'validation-on-blur-example',
                templateUrl: 'validation-on-blur-example.html',
                styleUrls: ['validation-on-blur-example.css']
            }]
    }], function () { return []; }, null); })();

const _c0 = ["tooltip"];
/**
 * @title validation-on-type
 */
class ValidationOnTypeExample {
    constructor() {
        this.checkOnFlyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            folderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    onInput(event) {
        const regex = /^[\d\w]+$/g;
        if (!regex.test(event.target.value)) {
            const newValue = event.target.value.replace(/[^\d\w]+/g, '');
            this.checkOnFlyForm.controls.folderName.setValue(newValue);
            if (!this.tooltip.isTooltipOpen) {
                this.tooltip.show();
                // tslint:disable-next-line:no-magic-numbers
                setTimeout(() => this.tooltip.hide(), 3000);
            }
        }
    }
}
ValidationOnTypeExample.ɵfac = function ValidationOnTypeExample_Factory(t) { return new (t || ValidationOnTypeExample)(); };
ValidationOnTypeExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationOnTypeExample, selectors: [["validation-on-type-example"]], viewQuery: function ValidationOnTypeExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, decls: 9, vars: 3, consts: [[1, "layout-margin", "docs-width"], ["novalidate", "", 3, "formGroup"], [1, "docs-row"], [1, "mc-caption", "docs-label"], ["mcTooltip", "", "mcTooltipClass", "mc-tooltip_warning", "mcTrigger", "manual", "mcPlacement", "bottom", 3, "mcTitle", "mcMouseEnterDelay"], ["tooltip", "mcTooltip"], ["mcInput", "", "formControlName", "folderName", 3, "input"]], template: function ValidationOnTypeExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-form-field", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ValidationOnTypeExample_Template_input_input_7_listener($event) { return ctx.onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mc-cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkOnFlyForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0411\u0443\u043A\u0432\u044B \u0438 \u0446\u0438\u0444\u0440\u044B")("mcMouseEnterDelay", 10);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McCleaner"]], styles: [".docs-row[_ngcontent-%COMP%]{margin-bottom:16px}.docs-label[_ngcontent-%COMP%]{margin-bottom:4px;color:#999}.docs-width[_ngcontent-%COMP%]{width:400px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationOnTypeExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'validation-on-type-example',
                templateUrl: 'validation-on-type-example.html',
                styleUrls: ['validation-on-type-example.css']
            }]
    }], function () { return []; }, { tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tooltip', { static: false }]
        }] }); })();

function ValidationOverviewExample_mc_hint_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationOverviewExample_mc_hint_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448\u0443 \u0444\u0430\u043C\u0438\u043B\u0438\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationOverviewExample_mc_hint_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationOverviewExample_mc_hint_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0440\u0438\u0447\u0438\u043D\u0443 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ValidationOverviewExample_mc_hint_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-hint", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u0414\u0430\u0439\u0442\u0435 \u043E\u0446\u0435\u043D\u043A\u0443 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430\u0448\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * @title validation-overview
 */
class ValidationOverviewExample {
    constructor() {
        this.feedbackFormWithHints = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            thirdName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            thirdName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            reason: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            rating: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
}
ValidationOverviewExample.ɵfac = function ValidationOverviewExample_Factory(t) { return new (t || ValidationOverviewExample)(); };
ValidationOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationOverviewExample, selectors: [["validation-overview-example"]], decls: 117, vars: 9, consts: [[1, "docs-margin"], [1, "docs-width"], [1, "mc-headline"], [1, "mc-subheading"], ["novalidate", "", 3, "formGroup"], [1, "docs-row"], [1, "mc-caption", "docs-label"], ["mcInput", "", "formControlName", "firstName"], ["class", "mc-caption docs-hint", 4, "ngIf"], ["mcInput", "", "formControlName", "lastName"], ["mcInput", "", "formControlName", "thirdName", "placeholder", "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"], ["mcInput", "", "formControlName", "email"], ["formControlName", "reason"], ["value", "1"], ["value", "2"], ["value", "3"], ["formControlName", "rating"], ["mcTextarea", "", "formControlName", "comment"], ["mc-button", "", "type", "submit", 3, "color"], [1, "mc-caption", "docs-hint"]], template: function ValidationOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u044F \u0441 \u0442\u0435\u043A\u0441\u0442\u0430\u043C\u0438 \u043E\u0448\u0438\u0431\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ValidationOverviewExample_mc_hint_12_Template, 2, 0, "mc-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ValidationOverviewExample_mc_hint_18_Template, 2, 0, "mc-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ValidationOverviewExample_mc_hint_29_Template, 2, 0, "mc-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mc-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mc-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mc-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ValidationOverviewExample_mc_hint_41_Template, 2, 0, "mc-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mc-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mc-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mc-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "mc-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, ValidationOverviewExample_mc_hint_53_Template, 2, 0, "mc-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\u0412\u0430\u0440\u0438\u0430\u0446\u0438\u044F \u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430 \u043E\u0448\u0438\u0431\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u0424\u043E\u0440\u043C\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "\u0410\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u041F\u0440\u0438\u0447\u0438\u043D\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mc-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "mc-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mc-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mc-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mc-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "mc-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "mc-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mc-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.feedbackFormWithHints);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedbackFormWithHints.controls.firstName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedbackFormWithHints.controls.lastName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedbackFormWithHints.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedbackFormWithHints.controls.reason.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.feedbackFormWithHints.controls.rating.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.feedbackForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__["McSelect"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_10__["McOption"], _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_8__["McTextarea"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McHint"]], styles: [".docs-row[_ngcontent-%COMP%]{margin-bottom:16px}.docs-label[_ngcontent-%COMP%]{margin-bottom:4px;color:#999}.docs-width[_ngcontent-%COMP%]{width:332px}.docs-hint[_ngcontent-%COMP%]{color:#e04d36}.layout-row[_ngcontent-%COMP%]{margin-bottom:4px}.docs-margin[_ngcontent-%COMP%]{margin:8px 8px 32px}.mc-headline[_ngcontent-%COMP%]{margin-bottom:68px}.mc-subheading[_ngcontent-%COMP%]{margin-bottom:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'validation-overview-example',
                templateUrl: 'validation-overview-example.html',
                styleUrls: ['validation-overview-example.css']
            }]
    }], function () { return []; }, null); })();

function emptyFormValidator() {
    return (g) => {
        var _a, _b;
        return ((_a = g.get('firstName')) === null || _a === void 0 ? void 0 : _a.value) && ((_b = g.get('lastName')) === null || _b === void 0 ? void 0 : _b.value) ? null : { empty: true };
    };
}
/**
 * @title validation-small
 */
class ValidationSmallExample {
    constructor() {
        this.smallForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, emptyFormValidator());
    }
}
ValidationSmallExample.ɵfac = function ValidationSmallExample_Factory(t) { return new (t || ValidationSmallExample)(); };
ValidationSmallExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ValidationSmallExample, selectors: [["validation-small-example"]], decls: 14, vars: 3, consts: [[1, "layout-margin", "docs-width"], ["novalidate", "", 3, "formGroup"], [1, "docs-row"], [1, "mc-caption", "docs-label"], ["mcInput", "", "formControlName", "firstName"], ["mcInput", "", "formControlName", "lastName"], ["mc-button", "", "type", "submit", 3, "color", "disabled"]], template: function ValidationSmallExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.smallForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary")("disabled", ctx.smallForm.errors == null ? null : ctx.smallForm.errors.empty);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [".docs-row[_ngcontent-%COMP%]{margin-bottom:16px}.docs-label[_ngcontent-%COMP%]{margin-bottom:4px;color:#999}.docs-width[_ngcontent-%COMP%]{width:400px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationSmallExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'validation-small-example',
                templateUrl: 'validation-small-example.html',
                styleUrls: ['validation-small-example.css']
            }]
    }], function () { return []; }, null); })();

const EXAMPLES = [
    ValidationOverviewExample,
    ValidationCompositeExample,
    ValidationGlobalExample,
    ValidationOnBlurExample,
    ValidationOnTypeExample,
    ValidationSmallExample
];
class ValidationExamplesModule {
}
ValidationExamplesModule.ɵfac = function ValidationExamplesModule_Factory(t) { return new (t || ValidationExamplesModule)(); };
ValidationExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ValidationExamplesModule });
ValidationExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
            _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"],
            _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__["McSelectModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
            _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_8__["McTextareaModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ValidationExamplesModule, { declarations: [ValidationOverviewExample,
        ValidationCompositeExample,
        ValidationGlobalExample,
        ValidationOnBlurExample,
        ValidationOnTypeExample,
        ValidationSmallExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
        _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"],
        _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__["McSelectModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
        _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_8__["McTextareaModule"]], exports: [ValidationOverviewExample,
        ValidationCompositeExample,
        ValidationGlobalExample,
        ValidationOnBlurExample,
        ValidationOnTypeExample,
        ValidationSmallExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValidationExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
                    _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"],
                    _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_7__["McSelectModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
                    _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_8__["McTextareaModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-validation.js.map


/***/ })

}]);
//# sourceMappingURL=41-es2015.js.map