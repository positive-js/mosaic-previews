(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "BnzQ":
/*!***********************************************************************!*\
  !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-toggle.js ***!
  \***********************************************************************/
/*! exports provided: McToggleBase, McToggleChange, McToggleComponent, McToggleMixinBase, McToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McToggleBase", function() { return McToggleBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McToggleChange", function() { return McToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McToggleComponent", function() { return McToggleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McToggleMixinBase", function() { return McToggleMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McToggleModule", function() { return McToggleModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










const _c0 = ["input"];
const _c1 = ["*"];
let nextUniqueId = 0;
class McToggleBase {
    // tslint:disable-next-line: naming-convention
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
// tslint:disable-next-line: naming-convention
const McToggleMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(McToggleBase), _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["ThemePalette"].Primary));
class McToggleChange {
}
class McToggleComponent extends McToggleMixinBase {
    constructor(
    // tslint:disable-next-line:naming-convention
    _elementRef, _focusMonitor, _changeDetectorRef) {
        super(_elementRef);
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this.labelPosition = 'right';
        this.ariaLabel = '';
        this.ariaLabelledby = null;
        this.name = null;
        this._disabled = false;
        this._checked = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.uniqueId = `mc-toggle-${++nextUniqueId}`;
        // tslint:disable-next-line:no-empty
        this.onTouchedCallback = () => { };
        // tslint:disable-next-line:no-empty
        this.onChangeCallback = (_) => { };
        this.id = this.uniqueId;
        this._focusMonitor.monitor(this._elementRef.nativeElement, true);
    }
    get inputId() {
        return `${this.id || this.uniqueId}-input`;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (value !== this._disabled) {
            this._disabled = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    get checked() {
        return this._checked;
    }
    set checked(value) {
        if (value !== this._checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
    focus() {
        this._focusMonitor.focusVia(this.inputElement.nativeElement, 'keyboard');
    }
    getAriaChecked() {
        return this.checked;
    }
    onChangeEvent(event) {
        event.stopPropagation();
        this.updateModelValue();
        this.emitChangeEvent();
    }
    onLabelTextChange() {
        this._changeDetectorRef.markForCheck();
    }
    onInputClick(event) {
        event.stopPropagation();
    }
    writeValue(value) {
        this.checked = !!value;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    updateModelValue() {
        this._checked = !this.checked;
        this.onTouchedCallback();
    }
    emitChangeEvent() {
        const event = new McToggleChange();
        event.source = this;
        event.checked = this.checked;
        this.onChangeCallback(this.checked);
        this.change.emit(event);
    }
}
McToggleComponent.ɵfac = function McToggleComponent_Factory(t) { return new (t || McToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
McToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: McToggleComponent, selectors: [["mc-toggle"]], viewQuery: function McToggleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    } }, hostAttrs: [1, "mc-toggle"], hostVars: 6, hostBindings: function McToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-disabled", ctx.disabled)("mc-active", ctx.checked);
    } }, inputs: { color: "color", tabIndex: "tabIndex", labelPosition: "labelPosition", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], name: "name", id: "id", disabled: "disabled", checked: "checked", value: "value" }, outputs: { change: "change" }, exportAs: ["mcToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => McToggleComponent), multi: true
            }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 11, vars: 17, consts: [[1, "mc-toggle-layout"], [1, "mc-toggle__container"], ["type", "checkbox", "role", "switch", 1, "mc-toggle-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "click", "change"], ["input", ""], [1, "mc-toggle-bar-container"], [1, "mc-toggle__overlay"], [1, "mc-toggle-bar"], [1, "mc-toggle__circle"], [1, "mc-toggle__content"], [1, "mc-toggle-label", 3, "cdkObserveContent"]], template: function McToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McToggleComponent_Template_input_click_2_listener($event) { return ctx.onInputClick($event); })("change", function McToggleComponent_Template_input_change_2_listener($event) { return ctx.onChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function McToggleComponent_Template_span_cdkObserveContent_9_listener() { return ctx.onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("left", ctx.labelPosition === "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx.getAriaChecked());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@switch", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("left", ctx.labelPosition === "left")("right", ctx.labelPosition === "right");
    } }, styles: [".mc-toggle{display:inline-block}.mc-toggle .mc-toggle-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mc-toggle .mc-toggle-bar{position:relative;border-width:1px;border-style:solid}.mc-toggle .mc-toggle-bar.mc-toggle-label-position-left{order:1}.mc-toggle .mc-toggle-bar-container{position:relative}.mc-toggle__container{display:flex;align-items:center;position:relative}.mc-toggle__container.left{flex-direction:row-reverse}.mc-toggle__content.left{margin-right:var(--mc-toggle-size-label-margin,8px)}.mc-toggle__content.right{margin-left:var(--mc-toggle-size-label-margin,8px)}.mc-toggle__circle{position:absolute;border-width:1px;border-style:solid;border-radius:100%;margin-top:-1px;margin-left:-1px;transform:translateX(-1px)}.mc-toggle__overlay{position:absolute;top:0;left:0;z-index:1}.mc-toggle:not(.mc-toggle_small) .mc-toggle-bar,.mc-toggle:not(.mc-toggle_small) .mc-toggle__overlay{height:var(--mc-toggle-size-height,16px);width:var(--mc-toggle-size-width,28px);border-radius:var(--mc-toggle-size-border-radius,9px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__circle{height:var(--mc-toggle-size-height,16px);width:var(--mc-toggle-size-height,16px)}.mc-toggle.mc-toggle_small .mc-toggle-bar,.mc-toggle.mc-toggle_small .mc-toggle__overlay{height:var(--mc-toggle-small-size-height,14px);width:var(--mc-toggle-small-size-width,24px);border-radius:var(--mc-toggle-small-size-border-radius,8px)}.mc-toggle.mc-toggle_small .mc-toggle__circle{height:var(--mc-toggle-small-size-height,14px);width:var(--mc-toggle-small-size-height,14px)}.mc-toggle:not(.mc-disabled){cursor:pointer}"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('switch', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ left: '50%' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ left: '1px' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms'))
            ])
        ] }, changeDetection: 0 });
/** @nocollapse */
McToggleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
];
McToggleComponent.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input', { static: false },] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-toggle',
                exportAs: 'mcToggle',
                template: "<label [attr.for]=\"inputId\" class=\"mc-toggle-layout\">\n    <div class=\"mc-toggle__container\" [class.left]=\"labelPosition === 'left'\">\n        <input #input\n               type=\"checkbox\"\n               role=\"switch\"\n               class=\"mc-toggle-input cdk-visually-hidden\"\n               [id]=\"inputId\"\n               [checked]=\"checked\"\n               [attr.value]=\"value\"\n               [disabled]=\"disabled\"\n               [attr.name]=\"name\"\n               [tabIndex]=\"tabIndex\"\n               [attr.aria-label]=\"ariaLabel || null\"\n               [attr.aria-labelledby]=\"ariaLabelledby\"\n               [attr.aria-checked]=\"getAriaChecked()\"\n               (click)=\"onInputClick($event)\"\n               (change)=\"onChangeEvent($event)\"/>\n        <div class=\"mc-toggle-bar-container\">\n            <div class=\"mc-toggle__overlay\"></div>\n            <div class=\"mc-toggle-bar\">\n                <div class=\"mc-toggle__circle\" [@switch]=\"checked\"></div>\n            </div>\n        </div>\n        <div class=\"mc-toggle__content\"\n             [class.left]=\"labelPosition === 'left'\"\n             [class.right]=\"labelPosition === 'right'\">\n            <span class=\"mc-toggle-label\" (cdkObserveContent)=\"onLabelTextChange()\">\n                <ng-content></ng-content>\n            </span>\n        </div>\n    </div>\n</label>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                inputs: ['color', 'tabIndex'],
                host: {
                    class: 'mc-toggle',
                    '[id]': 'id',
                    '[attr.id]': 'id',
                    '[class.mc-disabled]': 'disabled',
                    '[class.mc-active]': 'checked'
                },
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('switch', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ left: '50%' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ left: '1px' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms'))
                    ])
                ],
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => McToggleComponent),
                        multi: true
                    }],
                styles: [".mc-toggle{display:inline-block}.mc-toggle .mc-toggle-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mc-toggle .mc-toggle-bar{position:relative;border-width:1px;border-style:solid}.mc-toggle .mc-toggle-bar.mc-toggle-label-position-left{order:1}.mc-toggle .mc-toggle-bar-container{position:relative}.mc-toggle__container{display:flex;align-items:center;position:relative}.mc-toggle__container.left{flex-direction:row-reverse}.mc-toggle__content.left{margin-right:var(--mc-toggle-size-label-margin,8px)}.mc-toggle__content.right{margin-left:var(--mc-toggle-size-label-margin,8px)}.mc-toggle__circle{position:absolute;border-width:1px;border-style:solid;border-radius:100%;margin-top:-1px;margin-left:-1px;transform:translateX(-1px)}.mc-toggle__overlay{position:absolute;top:0;left:0;z-index:1}.mc-toggle:not(.mc-toggle_small) .mc-toggle-bar,.mc-toggle:not(.mc-toggle_small) .mc-toggle__overlay{height:var(--mc-toggle-size-height,16px);width:var(--mc-toggle-size-width,28px);border-radius:var(--mc-toggle-size-border-radius,9px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__circle{height:var(--mc-toggle-size-height,16px);width:var(--mc-toggle-size-height,16px)}.mc-toggle.mc-toggle_small .mc-toggle-bar,.mc-toggle.mc-toggle_small .mc-toggle__overlay{height:var(--mc-toggle-small-size-height,14px);width:var(--mc-toggle-small-size-width,24px);border-radius:var(--mc-toggle-small-size-border-radius,8px)}.mc-toggle.mc-toggle_small .mc-toggle__circle{height:var(--mc-toggle-small-size-height,14px);width:var(--mc-toggle-small-size-height,14px)}.mc-toggle:not(.mc-disabled){cursor:pointer}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }]; }, { labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input', { static: false }]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();

class McToggleModule {
}
McToggleModule.ɵfac = function McToggleModule_Factory(t) { return new (t || McToggleModule)(); };
McToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: McToggleModule });
McToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McCommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McToggleModule, { declarations: function () { return [McToggleComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McCommonModule"]]; }, exports: function () { return [McToggleComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McCommonModule"]],
                exports: [McToggleComponent],
                declarations: [McToggleComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ "xSOU":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-toggle.js ***!
  \*******************************************************************************************************/
/*! exports provided: ToggleExamplesModule, ToggleOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleExamplesModule", function() { return ToggleExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleOverviewExample", function() { return ToggleOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/toggle */ "BnzQ");







/**
 * @title Basic toggle
 */
class ToggleOverviewExample {
    constructor() {
        this.value = true;
    }
}
ToggleOverviewExample.ɵfac = function ToggleOverviewExample_Factory(t) { return new (t || ToggleOverviewExample)(); };
ToggleOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleOverviewExample, selectors: [["toggle-overview-example"]], decls: 29, vars: 12, consts: [[1, "mc-toggle_small", 3, "ngModel", "ngModelChange"], [1, "mc-toggle_small", 3, "color", "ngModel", "ngModelChange"], ["labelPosition", "left", 1, "mc-toggle_small", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "color", "ngModel", "ngModelChange"], ["labelPosition", "left", 3, "ngModel", "ngModelChange"]], template: function ToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Small Toggles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mc-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_2_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_3_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_4_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mc-toggle", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_7_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " right label\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mc-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_11_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " left label\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Big Toggles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mc-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_18_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mc-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_19_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mc-toggle", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_20_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mc-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_23_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " right label\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mc-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_27_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " left label\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "error")("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "error")("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
    } }, directives: [_ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'toggle-overview-example',
                templateUrl: 'toggle-overview-example.html',
                styleUrls: ['toggle-overview-example.css']
            }]
    }], null, null); })();

const EXAMPLES = [
    ToggleOverviewExample
];
class ToggleExamplesModule {
}
ToggleExamplesModule.ɵfac = function ToggleExamplesModule_Factory(t) { return new (t || ToggleExamplesModule)(); };
ToggleExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ToggleExamplesModule });
ToggleExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToggleExamplesModule, { declarations: [ToggleOverviewExample], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleModule"]], exports: [ToggleOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-toggle.js.map


/***/ })

}]);
//# sourceMappingURL=19-es2015.js.map