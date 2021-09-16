(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "be2C":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-tooltip.js ***!
  \********************************************************************************************************/
/*! exports provided: TooltipExamplesModule, TooltipOverviewExample, TooltipScrollableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipExamplesModule", function() { return TooltipExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipOverviewExample", function() { return TooltipOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipScrollableExample", function() { return TooltipScrollableExample; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/checkbox */ "UYLH");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ptsecurity/mosaic/popover */ "hvHG");
/* harmony import */ var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ptsecurity/mosaic/select */ "CUtc");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");



























function TooltipOverviewExample_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0412 \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0440\u044B\u0431\u043E\u0439 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438\u0437 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0441\u043A\u043E\u0433\u043E \u0442\u0440\u0430\u043A\u0442\u0430\u0442\u0430 \u0426\u0438\u0446\u0435\u0440\u043E\u043D\u0430 \u00AB\u041E \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0434\u043E\u0431\u0440\u0430 \u0438 \u0437\u043B\u0430\u00BB, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0433\u043E \u0432 45 \u0433\u043E\u0434\u0443 \u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B. \u0412\u043F\u0435\u0440\u0432\u044B\u0435 \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0431\u044B\u043B \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0448\u0440\u0438\u0444\u0442\u043E\u0432\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u043F\u0435\u0447\u0430\u0442\u043D\u0438\u043A\u043E\u043C \u0435\u0449\u0435 \u0432 XVI \u0432\u0435\u043A\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TooltipOverviewExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TooltipOverviewExample_li_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Tooltip activated fallback position: ", ctx_r4.activatedPosition, "");
} }
function TooltipOverviewExample_li_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Placement priority order: ", ctx_r5.multipleSelected, "");
} }
function TooltipOverviewExample_button_109_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mcPlacementChange", function TooltipOverviewExample_button_109_Template_button_mcPlacementChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.onPlacementChange($event); })("mcVisibleChange", function TooltipOverviewExample_button_109_Template_button_mcVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.onTooltipVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcPlacement", ctx_r6.selectedPlacement)("mcPlacementPriority", ctx_r6.multipleSelected);
} }
function TooltipOverviewExample_button_110_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mcPlacementChange", function TooltipOverviewExample_button_110_Template_button_mcPlacementChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.onPlacementChange($event); })("mcVisibleChange", function TooltipOverviewExample_button_110_Template_button_mcVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.onTooltipVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcPlacement", ctx_r7.selectedPlacement)("mcPlacementPriority", ctx_r7.multipleSelected);
} }
function TooltipOverviewExample_button_111_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mcPlacementChange", function TooltipOverviewExample_button_111_Template_button_mcPlacementChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onPlacementChange($event); })("mcVisibleChange", function TooltipOverviewExample_button_111_Template_button_mcVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.onTooltipVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Button ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcExtendedTooltip", _r0)("mcTooltipHeader", _r2)("mcPlacement", ctx_r8.selectedPlacement)("mcPlacementPriority", ctx_r8.multipleSelected);
} }
function TooltipOverviewExample_mc_form_field_112_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mc-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TooltipOverviewExample_mc_form_field_112_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.content = $event; })("mcPlacementChange", function TooltipOverviewExample_mc_form_field_112_Template_input_mcPlacementChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.onPlacementChange($event); })("mcVisibleChange", function TooltipOverviewExample_mc_form_field_112_Template_input_mcVisibleChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.onTooltipVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.content)("mcPlacement", ctx_r9.selectedPlacement)("mcPlacementPriority", ctx_r9.multipleSelected);
} }
function TooltipOverviewExample_div_113_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mcPlacementChange", function TooltipOverviewExample_div_113_Template_i_mcPlacementChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.onPlacementChange($event); })("mcVisibleChange", function TooltipOverviewExample_div_113_Template_i_mcVisibleChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.onTooltipVisibleChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mcPlacement", ctx_r10.selectedPlacement)("mcPlacementPriority", ctx_r10.multipleSelected);
} }
const _c0 = function (a0, a1) { return { active: a0, actual: a1 }; };
/**
 * @title Basic tooltip
 */
class TooltipOverviewExample {
    constructor() {
        this.isPopoverVisibleLeft = false;
        this.activatedPosition = '';
        this.ELEMENTS = {
            BUTTON: 'button',
            INPUT: 'input',
            ICON: 'icon',
            WARNING: 'warning',
            EXTENDED: 'extended'
        };
        this.selectedElement = 'button';
        this.selectedPlacement = 'left';
        this.layoutClass = 'layout-row layout-align-center-center';
        this.content = 'button text';
        this.userDefinedPlacementPriority = ['bottom', 'right'];
        this.multipleSelected = [];
        this.tooltipActiveStage = 1;
    }
    changeStep(direction) {
        const newStage = this.tooltipActiveStage + direction;
        // tslint:disable-next-line:no-magic-numbers
        if (newStage < 1 || newStage > 3) {
            return;
        }
        this.tooltipActiveStage += direction;
    }
    onTooltipVisibleChange($event) {
        if (!$event) {
            this.activatedPosition = '';
        }
    }
    onPlacementChange(event) {
        this.activatedPosition = event;
    }
    setPlacement(placement) {
        this.selectedPlacement = placement;
    }
    showElement() {
        return this.selectedElement;
    }
    activated(value) {
        return this.selectedPlacement === value;
    }
    isActual(value) {
        return this.activatedPosition === value && this.selectedPlacement !== this.activatedPosition;
    }
    getOrder(forElement) {
        if (forElement === 'config') {
            return this.selectedOrder ? { order: 2 } : { order: 1 };
        }
        if (forElement === 'result') {
            return this.selectedOrder ? { order: 1 } : { order: 2 };
        }
    }
    get isFallbackActivated() {
        return this.selectedPlacement !== this.activatedPosition && this.activatedPosition !== '';
    }
}
TooltipOverviewExample.ɵfac = function TooltipOverviewExample_Factory(t) { return new (t || TooltipOverviewExample)(); };
TooltipOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipOverviewExample, selectors: [["tooltip-overview-example"]], decls: 114, vars: 72, consts: [["tooltipContent", ""], ["tooltipHeader", ""], [1, "container", "flex-100", "layout-column", "layout-align-start-start"], [1, "mc-form-vertical", "layout-row", "layou-align-start-start", "config"], [1, "flex-20", "mc-form__fieldset"], [1, "mc-form__row"], ["for", "order", 1, "mc-form__label"], ["id", "order", 1, "mc-form__control", 3, "ngModel", "ngModelChange"], ["for", "element", 1, "mc-form__label"], ["id", "element", 1, "mc-form__control"], [3, "value", "placeholder", "valueChange"], ["value", "button"], ["value", "icon"], ["value", "input"], ["value", "warning"], ["value", "extended"], ["for", "layout", 1, "mc-form__label"], ["id", "layout", 1, "mc-form__control"], ["value", "layout-row layout-align-start-start"], ["value", "layout-row layout-align-start-center"], ["value", "layout-row layout-align-start-end"], ["value", "layout-row layout-align-center-start"], ["value", "layout-row layout-align-center-center"], ["value", "layout-row layout-align-center-end"], ["value", "layout-row layout-align-end-start"], ["value", "layout-row layout-align-end-center"], ["value", "layout-row layout-align-end-end"], [1, "flex", "left-padding", "layout-align-center-center"], [1, "flex", "mc-form__label"], [1, "visual-box"], [1, "visual-box_clickable", "visual-box_placement-top-left", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-top", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-top-right", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-right-top", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-right", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-right-bottom", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-bottom-right", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-bottom", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-bottom-left", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-left-bottom", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-left", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-left-top", 3, "ngClass", "click"], [1, "mc-form__row", "flex-50"], [1, "mc-form__label"], [1, "mc-form__control"], ["multiple", "", 3, "value", "valueChange"], ["value", "top", "disabled", ""], ["value", "topLeft"], ["value", "topRight"], ["value", "bottom"], ["value", "bottomLeft"], ["value", "bottomRight"], ["value", "right"], ["value", "rightTop"], ["value", "rightBottom"], ["value", "left"], ["value", "leftTop"], ["value", "leftBottom"], [1, "flex", "left-padding"], ["class", "actual red", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["mc-button", "", "mcTooltip", "Tooltip text", 3, "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange", 4, "ngSwitchCase"], ["mc-button", "", "mcWarningTooltip", "Warning tooltip text", 3, "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange", 4, "ngSwitchCase"], ["mc-button", "", "mcTooltipClass", "tooltip-485", 3, "mcExtendedTooltip", "mcTooltipHeader", "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [1, "actual", "red"], ["mc-button", "", "mcTooltip", "Tooltip text", 3, "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange"], ["mc-button", "", "mcWarningTooltip", "Warning tooltip text", 3, "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange"], ["mc-button", "", "mcTooltipClass", "tooltip-485", 3, "mcExtendedTooltip", "mcTooltipHeader", "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange"], ["mcInput", "", "placeholder", "Button content", "mcTooltip", "Tooltip text", 3, "ngModel", "mcPlacement", "mcPlacementPriority", "ngModelChange", "mcPlacementChange", "mcVisibleChange"], ["mc-icon", "mc-calendar_16", "mcTooltip", "Tooltip text", 3, "mcPlacement", "mcPlacementPriority", "mcPlacementChange", "mcVisibleChange"]], template: function TooltipOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipOverviewExample_ng_template_0_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TooltipOverviewExample_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Inverse layout order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mc-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function TooltipOverviewExample_Template_mc_checkbox_ngModelChange_10_listener($event) { return ctx.selectedOrder = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Yes/No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Choose trigger element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mc-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mc-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function TooltipOverviewExample_Template_mc_select_valueChange_16_listener($event) { return ctx.selectedElement = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mc-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mc-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mc-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mc-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "warning");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mc-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "extended");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " Choose layout content placement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mc-form-field", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mc-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function TooltipOverviewExample_Template_mc_select_valueChange_31_listener($event) { return ctx.layoutClass = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mc-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Start start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mc-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Start center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mc-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Start end");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mc-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Center start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mc-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Center center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mc-option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Center end");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mc-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "End start");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "mc-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "End center");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mc-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "End end");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Choose mcPlacement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_54_listener() { return ctx.setPlacement("topLeft"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_55_listener() { return ctx.setPlacement("top"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_56_listener() { return ctx.setPlacement("topRight"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_57_listener() { return ctx.setPlacement("rightTop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_58_listener() { return ctx.setPlacement("right"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_59_listener() { return ctx.setPlacement("rightBottom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_60_listener() { return ctx.setPlacement("bottomRight"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_61_listener() { return ctx.setPlacement("bottom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_62_listener() { return ctx.setPlacement("bottomLeft"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_63_listener() { return ctx.setPlacement("leftBottom"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_64_listener() { return ctx.setPlacement("left"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipOverviewExample_Template_div_click_65_listener() { return ctx.setPlacement("leftTop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Choose mcPlacementPriority ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "mc-form-field", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mc-select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function TooltipOverviewExample_Template_mc_select_valueChange_70_listener($event) { return ctx.multipleSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mc-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mc-option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "TopLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "mc-option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "TopRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mc-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "mc-option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "BottomLeft");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mc-option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "BottomRight");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "mc-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mc-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "RightTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "mc-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "RightBottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mc-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mc-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "LeftTop");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "mc-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "LeftBottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Configuration:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, TooltipOverviewExample_li_103_Template, 2, 1, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](106, TooltipOverviewExample_li_106_Template, 2, 1, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, TooltipOverviewExample_button_109_Template, 2, 2, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](110, TooltipOverviewExample_button_110_Template, 2, 2, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](111, TooltipOverviewExample_button_111_Template, 2, 4, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](112, TooltipOverviewExample_mc_form_field_112_Template, 2, 3, "mc-form-field", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, TooltipOverviewExample_div_113_Template, 2, 2, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](ctx.getOrder("config"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.selectedElement)("placeholder", "Select element");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.layoutClass)("placeholder", "Select layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](36, _c0, ctx.activated("topLeft"), ctx.isActual("topLeft")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](39, _c0, ctx.activated("top"), ctx.isActual("top")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](42, _c0, ctx.activated("topRight"), ctx.isActual("topRight")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](45, _c0, ctx.activated("rightTop"), ctx.isActual("rightTop")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](48, _c0, ctx.activated("right"), ctx.isActual("right")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](51, _c0, ctx.activated("rightBottom"), ctx.isActual("rightBottom")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](54, _c0, ctx.activated("bottomRight"), ctx.isActual("bottomRight")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](57, _c0, ctx.activated("bottom"), ctx.isActual("bottom")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](60, _c0, ctx.activated("bottomLeft"), ctx.isActual("bottomLeft")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](63, _c0, ctx.activated("leftBottom"), ctx.isActual("leftBottom")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](66, _c0, ctx.activated("left"), ctx.isActual("left")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](69, _c0, ctx.activated("leftTop"), ctx.isActual("leftTop")));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.multipleSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Tooltip anchor placement: ", ctx.selectedPlacement, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Tooltip anchored element: ", ctx.selectedElement, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isFallbackActivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Layout positioning: ", ctx.layoutClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.multipleSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](ctx.getOrder("result"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("", ctx.layoutClass, " result");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.showElement());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.BUTTON);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.WARNING);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.EXTENDED);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.INPUT);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.ICON);
    } }, directives: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["McForm"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["McFormElement"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_6__["McCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_8__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_12__["McSelect"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["McOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonCssStyler"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McTooltipTrigger"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McWarningTooltipTrigger"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McExtendedTooltipTrigger"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_10__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconCSSStyler"]], styles: [".mc-tooltip.mc-tooltip_extended.tooltip-485{width:485px;max-width:485px}.left-padding{padding-left:32px}app{height:100%;width:100%}.actual{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.red{color:red}.container{width:100%;height:100%;padding-left:1%;padding-right:1%}.config{margin-top:16px;margin-bottom:16px}.config,.result{height:50%;width:100%}.result{border:2px solid red}.visual-box{height:100px;width:100px;border:1px solid #575757;position:relative;margin-top:32px;margin-bottom:32px}.visual-box_clickable{height:12px;width:12px;position:absolute;background:#4dc3ff;cursor:pointer}.active{background:red}.visual-box_placement-top-left{top:-6px;left:10px}.visual-box_placement-top{top:-6px;left:calc(50% - 6px)}.visual-box_placement-top-right{top:-6px;right:10px}.visual-box_placement-left-top{top:10px;left:-6px}.visual-box_placement-left{top:calc(50% - 6px);left:-6px}.visual-box_placement-left-bottom{bottom:10px;left:-6px}.visual-box_placement-bottom-right{bottom:-6px;right:10px}.visual-box_placement-bottom{bottom:-6px;right:calc(50% - 6px)}.visual-box_placement-bottom-left{bottom:-6px;left:10px}.visual-box_placement-right-bottom{right:-6px;bottom:10px}.visual-box_placement-right{right:-6px;bottom:calc(50% - 6px)}.visual-box_placement-right-top{right:-6px;top:10px}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'tooltip-overview-example',
                templateUrl: 'tooltip-overview-example.html',
                styleUrls: ['tooltip-overview-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();

/**
 * @title Basic scrollable tooltip
 */
class TooltipScrollableExample {
    toggleTooltip(flag) {
        if (!flag) {
            this.tooltip.show();
        }
        else {
            this.tooltip.hide();
        }
    }
}
TooltipScrollableExample.ɵfac = function TooltipScrollableExample_Factory(t) { return new (t || TooltipScrollableExample)(); };
TooltipScrollableExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipScrollableExample, selectors: [["tooltip-scrollable-example"]], viewQuery: function TooltipScrollableExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McTooltipTrigger"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, decls: 5, vars: 0, consts: [["cdkScrollable", "", 1, "docs-container"], [1, "docs-wrapper"], ["mc-button", "", "mcTooltip", "tooltip text", "mcTrigger", "manual", "mcPlacement", "right", 3, "click"], ["tooltip", "mcTooltip"]], template: function TooltipScrollableExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipScrollableExample_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3); return ctx.toggleTooltip(_r0.isOpen); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " toggle tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonCssStyler"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McTooltipTrigger"]], styles: [".docs-container[_ngcontent-%COMP%]{width:300px;height:300px;overflow:auto}.docs-wrapper[_ngcontent-%COMP%]{margin-top:100px;height:800px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipScrollableExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'tooltip-scrollable-example',
                templateUrl: 'tooltip-scrollable-example.html',
                styleUrls: ['tooltip-scrollable-example.css']
            }]
    }], null, { tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: [_ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McTooltipTrigger"], { static: false }]
        }] }); })();

const EXAMPLES = [
    TooltipOverviewExample,
    TooltipScrollableExample
];
class TooltipExamplesModule {
}
TooltipExamplesModule.ɵfac = function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); };
TooltipExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TooltipExamplesModule });
TooltipExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"],
            _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McToolTipModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["McFormsModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_8__["McFormFieldModule"],
            _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_12__["McSelectModule"],
            _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_11__["McPopoverModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_10__["McInputModule"],
            _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_6__["McCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TooltipExamplesModule, { declarations: [TooltipOverviewExample,
        TooltipScrollableExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"],
        _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McToolTipModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["McFormsModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_8__["McFormFieldModule"],
        _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_12__["McSelectModule"],
        _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_11__["McPopoverModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_10__["McInputModule"],
        _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_6__["McCheckboxModule"]], exports: [TooltipOverviewExample,
        TooltipScrollableExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"],
                    _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_13__["McToolTipModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["McFormsModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_8__["McFormFieldModule"],
                    _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_12__["McSelectModule"],
                    _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_11__["McPopoverModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_10__["McInputModule"],
                    _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_6__["McCheckboxModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-tooltip.js.map


/***/ })

}]);
//# sourceMappingURL=39-es2015.js.map