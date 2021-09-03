(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "be2C":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-tooltip.js ***!
  \********************************************************************************************************/
/*! exports provided: TooltipArrowPlacementExample, TooltipExamplesModule, TooltipOverviewExample, TooltipScrollableExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipArrowPlacementExample", function() { return TooltipArrowPlacementExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipExamplesModule", function() { return TooltipExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipOverviewExample", function() { return TooltipOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipScrollableExample", function() { return TooltipScrollableExample; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");










/**
 * @title Basic tooltip with Arrow Placement
 */
class TooltipArrowPlacementExample {
    constructor() {
        this.arrowPosition = _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["ArrowPlacements"];
    }
}
TooltipArrowPlacementExample.ɵfac = function TooltipArrowPlacementExample_Factory(t) { return new (t || TooltipArrowPlacementExample)(); };
TooltipArrowPlacementExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipArrowPlacementExample, selectors: [["tooltip-arrow-placement-example"]], decls: 3, vars: 1, consts: [[1, "container"], ["mc-button", "", "mcTooltip", "Tooltip text", "mcPlacement", "right", 3, "mcArrowPlacement"]], template: function TooltipArrowPlacementExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("mcArrowPlacement", ctx.arrowPosition.Center);
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McTooltip"]], styles: [".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:300px;height:300px}button[_ngcontent-%COMP%]{height:58px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipArrowPlacementExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'tooltip-arrow-placement-example',
                templateUrl: 'tooltip-arrow-placement-example.html',
                styleUrls: ['tooltip-arrow-placement-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic tooltip
 */
class TooltipOverviewExample {
}
TooltipOverviewExample.ɵfac = function TooltipOverviewExample_Factory(t) { return new (t || TooltipOverviewExample)(); };
TooltipOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipOverviewExample, selectors: [["tooltip-overview-example"]], decls: 15, vars: 0, consts: [[1, "container"], ["mc-button", "", "mcTooltip", "tooltip text", "mcPlacement", "top"], ["mc-button", "", "mcTooltip", "tooltip text", "mcPlacement", "right"], ["mc-button", "", "mcTooltip", "tooltip text", "mcPlacement", "left"], ["mc-button", "", "mcTooltip", "tooltip text", "mcPlacement", "bottom"]], template: function TooltipOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " top ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " right ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " left ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " bottom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McTooltip"]], styles: [".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:300px;height:300px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'tooltip-overview-example',
                templateUrl: 'tooltip-overview-example.html',
                styleUrls: ['tooltip-overview-example.css']
            }]
    }], null, null); })();

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
TooltipScrollableExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipScrollableExample, selectors: [["tooltip-scrollable-example"]], viewQuery: function TooltipScrollableExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McTooltip"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tooltip = _t.first);
    } }, decls: 5, vars: 0, consts: [["cdkScrollable", "", 1, "docs-container"], [1, "docs-wrapper"], ["mc-button", "", "mcTooltip", "tooltip text", "mcTrigger", "manual", "mcPlacement", "right", 3, "click"], ["tooltip", "mcTooltip"]], template: function TooltipScrollableExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TooltipScrollableExample_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.toggleTooltip(_r0.isTooltipOpen); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " toggle tooltip ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollable"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McTooltip"]], styles: [".docs-container[_ngcontent-%COMP%]{width:300px;height:300px;overflow:auto}.docs-wrapper[_ngcontent-%COMP%]{margin-top:100px;height:800px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipScrollableExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'tooltip-scrollable-example',
                templateUrl: 'tooltip-scrollable-example.html',
                styleUrls: ['tooltip-scrollable-example.css']
            }]
    }], null, { tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McTooltip"], { static: false }]
        }] }); })();

const EXAMPLES = [
    TooltipOverviewExample,
    TooltipArrowPlacementExample,
    TooltipScrollableExample
];
class TooltipExamplesModule {
}
TooltipExamplesModule.ɵfac = function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); };
TooltipExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TooltipExamplesModule });
TooltipExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
            _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McToolTipModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TooltipExamplesModule, { declarations: [TooltipOverviewExample,
        TooltipArrowPlacementExample,
        TooltipScrollableExample], imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
        _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McToolTipModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]], exports: [TooltipOverviewExample,
        TooltipArrowPlacementExample,
        TooltipScrollableExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TooltipExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
                    _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_4__["McToolTipModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkScrollableModule"]
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