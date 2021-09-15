(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "hvHG":
/*!************************************************************************!*\
  !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-popover.js ***!
  \************************************************************************/
/*! exports provided: MC_POPOVER_SCROLL_STRATEGY, MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER, McPopoverComponent, McPopoverModule, McPopoverTrigger, getMcPopoverInvalidPositionError, mcPopoverAnimations, mcPopoverScrollStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_POPOVER_SCROLL_STRATEGY", function() { return MC_POPOVER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPopoverComponent", function() { return McPopoverComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPopoverModule", function() { return McPopoverModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McPopoverTrigger", function() { return McPopoverTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMcPopoverInvalidPositionError", function() { return getMcPopoverInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mcPopoverAnimations", function() { return mcPopoverAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mcPopoverScrollStrategyFactory", function() { return mcPopoverScrollStrategyFactory; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "R0Ic");














function McPopoverComponent_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.header);
} }
function McPopoverComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.header);
} }
function McPopoverComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McPopoverComponent_div_2_ng_container_1_Template, 1, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_2_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isTemplateRef(ctx_r0.header));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isTemplateRef(ctx_r0.header));
} }
function McPopoverComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 9);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.content);
} }
function McPopoverComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.content);
} }
function McPopoverComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McPopoverComponent_div_3_ng_container_1_Template, 1, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_3_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isTemplateRef(ctx_r1.content));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isTemplateRef(ctx_r1.content));
} }
function McPopoverComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 9);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footer);
} }
function McPopoverComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.footer);
} }
function McPopoverComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McPopoverComponent_div_4_ng_container_1_Template, 1, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_4_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isTemplateRef(ctx_r2.footer));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isTemplateRef(ctx_r2.footer));
} }
const mcPopoverAnimations = {
    /** Animation that transitions a tooltip in and out. */
    popoverState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 0,
            transform: 'scale(1, 0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
            opacity: 1,
            transform: 'scale(1, 1)'
        }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({ opacity: 0 })))
    ])
};

class McPopoverComponent extends _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McPopUp"] {
    constructor(changeDetectorRef) {
        super(changeDetectorRef);
        this.prefix = 'mc-popover';
    }
    updateClassMap(placement, customClass, size) {
        super.updateClassMap(placement, customClass, { [`${this.prefix}_${size}`]: !!size });
    }
}
McPopoverComponent.ɵfac = function McPopoverComponent_Factory(t) { return new (t || McPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
McPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: McPopoverComponent, selectors: [["mc-popover-component"]], hostBindings: function McPopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.esc", function McPopoverComponent_keydown_esc_HostBindingHandler() { return ctx.hide(0); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 7, consts: [[1, "mc-popover", 3, "ngClass"], [1, "mc-popover__container"], ["class", "mc-popover__header", 4, "ngIf"], ["class", "mc-popover__content", 4, "ngIf"], ["class", "mc-popover__footer", 4, "ngIf"], [1, "mc-popover__arrow"], [1, "mc-popover__header"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "mc-popover__content"], [1, "mc-popover__footer"]], template: function McPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@state.start", function McPopoverComponent_Template_div_animation_state_start_0_listener() { return ctx.animationStart(); })("@state.done", function McPopoverComponent_Template_div_animation_state_done_0_listener($event) { return ctx.animationDone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McPopoverComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, McPopoverComponent_div_4_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.classMap)("@state", ctx.visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.footer);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-popover__arrow_with-footer", ctx.footer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], styles: ["@-webkit-keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 0,transparent 20px,rgba(0,0,0,.05) 0,rgba(0,0,0,.05) 30px,transparent 0) repeat;background-size:29px 29px;-webkit-animation:mc-progress 1s linear infinite;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;height:100%;width:100%;position:fixed}.cdk-overlay-backdrop,.cdk-overlay-container{top:0;left:0;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{bottom:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto}.cdk-overlay-pane{pointer-events:auto;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box,.cdk-overlay-pane{box-sizing:border-box;position:absolute;margin:0;padding:0;z-index:1000}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius,3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width,200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width,400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width,640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-bottom,.mc-popover.mc-popover_placement-right-top{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-bottom,.mc-popover.mc-popover_placement-left-top{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height,480px);border-radius:var(--mc-popover-size-border-radius,3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height,10px 16px);padding:var(--mc-popover-header-size-padding,10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding,16px)}.mc-popover__footer{box-sizing:border-box;margin-top:var(--mc-popover-footer-size-margin-top,8px);height:var(--mc-popover-footer-size-height,56px);padding:var(--mc-popover-footer-size-padding,12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size,12px);height:var(--mc-popover-size-arrow-size,12px);border:1px solid;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-right-top .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-left-top .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}"], encapsulation: 2, data: { animation: [mcPopoverAnimations.popoverState] }, changeDetection: 0 });
/** @nocollapse */
McPopoverComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McPopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-popover-component',
                template: "<div class=\"mc-popover\"\n     [ngClass]=\"classMap\"\n     [@state]=\"visibility\"\n     (@state.start)=\"animationStart()\"\n     (@state.done)=\"animationDone($event)\">\n\n    <div class=\"mc-popover__container\">\n        <div class=\"mc-popover__header\" *ngIf=\"header\">\n            <ng-container *ngIf=\"isTemplateRef(header)\" [ngTemplateOutlet]=\"header\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(header)\">\n                <div>{{ header }}</div>\n            </ng-container>\n        </div>\n\n        <div class=\"mc-popover__content\" *ngIf=\"content\">\n            <ng-container *ngIf=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(content)\">\n                <div>{{ content }}</div>\n            </ng-container>\n        </div>\n\n        <div class=\"mc-popover__footer\" *ngIf=\"footer\">\n            <ng-container *ngIf=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(footer)\">\n                <div>{{ footer }}</div>\n            </ng-container>\n        </div>\n    </div>\n\n    <div class=\"mc-popover__arrow\" [class.mc-popover__arrow_with-footer]=\"footer\"></div>\n</div>\n",
                preserveWhitespaces: false,
                host: {
                    '(keydown.esc)': 'hide(0)'
                },
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                animations: [mcPopoverAnimations.popoverState],
                styles: ["@-webkit-keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 0,transparent 20px,rgba(0,0,0,.05) 0,rgba(0,0,0,.05) 30px,transparent 0) repeat;background-size:29px 29px;-webkit-animation:mc-progress 1s linear infinite;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;height:100%;width:100%;position:fixed}.cdk-overlay-backdrop,.cdk-overlay-container{top:0;left:0;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{bottom:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto}.cdk-overlay-pane{pointer-events:auto;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box,.cdk-overlay-pane{box-sizing:border-box;position:absolute;margin:0;padding:0;z-index:1000}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius,3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width,200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width,400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width,640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-bottom,.mc-popover.mc-popover_placement-right-top{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-bottom,.mc-popover.mc-popover_placement-left-top{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height,480px);border-radius:var(--mc-popover-size-border-radius,3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height,10px 16px);padding:var(--mc-popover-header-size-padding,10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding,16px)}.mc-popover__footer{box-sizing:border-box;margin-top:var(--mc-popover-footer-size-margin-top,8px);height:var(--mc-popover-footer-size-height,56px);padding:var(--mc-popover-footer-size-padding,12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size,12px);height:var(--mc-popover-size-arrow-size,12px);border:1px solid;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-right-top .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-left-top .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, null); })();
const MC_POPOVER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mc-popover-scroll-strategy');
/** @docs-private */
function mcPopoverScrollStrategyFactory(overlay) {
    return () => overlay.scrollStrategies.reposition({ scrollThrottle: 20 });
}
/** @docs-private */
const MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MC_POPOVER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: mcPopoverScrollStrategyFactory
};
/** Creates an error to be thrown if the user supplied an invalid popover position. */
function getMcPopoverInvalidPositionError(position) {
    return Error(`McPopover position "${position}" is invalid.`);
}
class McPopoverTrigger extends _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McPopUpTrigger"] {
    constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
        super(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
        this._hasBackdrop = false;
        this._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpTriggers"].Click;
        this._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Normal;
        this._closeOnScroll = false;
        this.backdropClass = 'cdk-overlay-transparent-backdrop';
        this.originSelector = '.mc-popover';
        this.overlayConfig = {
            panelClass: 'mc-popover__panel',
            hasBackdrop: this.hasBackdrop,
            backdropClass: this.backdropClass
        };
    }
    get hasBackdrop() {
        return this._hasBackdrop;
    }
    set hasBackdrop(value) {
        this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    get header() {
        return this._header;
    }
    set header(value) {
        this._header = value;
        this.updateData();
    }
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
        this.updateData();
    }
    get footer() {
        return this._footer;
    }
    set footer(value) {
        this._footer = value;
        this.updateData();
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    get trigger() {
        return this._trigger;
    }
    set trigger(value) {
        if (value) {
            this._trigger = value;
        }
        else {
            this._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpTriggers"].Click;
        }
        this.initListeners();
    }
    get size() {
        return this._size;
    }
    set size(value) {
        if ([_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Small, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Normal, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Large].includes(value)) {
            this._size = value;
            this.updateClassMap();
        }
        else {
            this._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Normal;
        }
    }
    get customClass() {
        return this._customClass;
    }
    set customClass(value) {
        this._customClass = value;
        this.updateClassMap();
    }
    get closeOnScroll() {
        return this._closeOnScroll;
    }
    set closeOnScroll(value) {
        this._closeOnScroll = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
    }
    updateData() {
        if (!this.instance) {
            return;
        }
        this.instance.header = this.header;
        this.instance.content = this.content;
        this.instance.footer = this.footer;
        if (this.isOpen) {
            this.updatePosition(true);
        }
    }
    /** Updates the position of the current popover. */
    updatePosition(reapplyPosition = false) {
        this.overlayRef = this.createOverlay();
        const position = this.overlayRef.getConfig().positionStrategy
            .withPositions(this.getPrioritizedPositions())
            .withPush(true);
        if (reapplyPosition) {
            setTimeout(() => position.reapplyLastPosition());
        }
    }
    getOverlayHandleComponentType() {
        return McPopoverComponent;
    }
    updateClassMap(newPlacement = this.placement) {
        if (!this.instance) {
            return;
        }
        this.instance.updateClassMap(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["POSITION_TO_CSS_MAP"][newPlacement], this.customClass, this.size);
        this.instance.markForCheck();
    }
    closingActions() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.overlayRef.backdropClick(), this.hasBackdrop ? rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"] : this.overlayRef.outsidePointerEvents(), this.closeOnScroll ? this.scrollDispatcher.scrolled() : rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"], this.overlayRef.detachments());
    }
}
McPopoverTrigger.ɵfac = function McPopoverTrigger_Factory(t) { return new (t || McPopoverTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MC_POPOVER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
McPopoverTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: McPopoverTrigger, selectors: [["", "mcPopover", ""]], hostVars: 2, hostBindings: function McPopoverTrigger_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function McPopoverTrigger_keydown_HostBindingHandler($event) { return ctx.handleKeydown($event); })("touchend", function McPopoverTrigger_touchend_HostBindingHandler() { return ctx.handleTouchend(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-popover_open", ctx.isOpen);
    } }, inputs: { backdropClass: "backdropClass", hasBackdrop: "hasBackdrop", header: ["mcPopoverHeader", "header"], content: ["mcPopoverContent", "content"], footer: ["mcPopoverFooter", "footer"], disabled: ["mcPopoverDisabled", "disabled"], trigger: ["mcTrigger", "trigger"], size: ["mcPopoverSize", "size"], customClass: ["mcPopoverClass", "customClass"], closeOnScroll: "closeOnScroll" }, exportAs: ["mcPopover"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
McPopoverTrigger.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MC_POPOVER_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
McPopoverTrigger.propDecorators = {
    hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcPopoverHeader',] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcPopoverContent',] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcPopoverFooter',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcPopoverDisabled',] }],
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcTrigger',] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcPopoverSize',] }],
    customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mcPopoverClass',] }],
    closeOnScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McPopoverTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[mcPopover]',
                exportAs: 'mcPopover',
                host: {
                    '[class.mc-popover_open]': 'isOpen',
                    '(keydown)': 'handleKeydown($event)',
                    '(touchend)': 'handleTouchend()'
                }
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MC_POPOVER_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }]; }, { backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverHeader']
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverContent']
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverFooter']
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverDisabled']
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcTrigger']
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverSize']
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverClass']
        }], closeOnScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

class McPopoverModule {
}
McPopoverModule.ɵfac = function McPopoverModule_Factory(t) { return new (t || McPopoverModule)(); };
McPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: McPopoverModule });
McPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McPopoverModule, { declarations: function () { return [McPopoverComponent, McPopoverTrigger]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]]; }, exports: function () { return [McPopoverComponent, McPopoverTrigger]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McPopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [McPopoverComponent, McPopoverTrigger],
                exports: [McPopoverComponent, McPopoverTrigger],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
                providers: [MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
                entryComponents: [McPopoverComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=4-es2015.js.map