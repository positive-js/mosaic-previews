(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "d8iN":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-splitter.js ***!
  \*********************************************************************************************************/
/*! exports provided: SplitterExamplesModule, SplitterFixedExample, SplitterNestedExample, SplitterOverviewExample, SplitterVerticalExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterExamplesModule", function() { return SplitterExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterFixedExample", function() { return SplitterFixedExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterNestedExample", function() { return SplitterNestedExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterOverviewExample", function() { return SplitterOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitterVerticalExample", function() { return SplitterVerticalExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/splitter */ "tF9M");






/**
 * @title Basic Splitter
 */
class SplitterFixedExample {
}
SplitterFixedExample.ɵfac = function SplitterFixedExample_Factory(t) { return new (t || SplitterFixedExample)(); };
SplitterFixedExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitterFixedExample, selectors: [["splitter-fixed-example"]], decls: 7, vars: 0, consts: [["mc-splitter-area", "", 1, "mc-splitter-area_fixed-width"], ["mc-splitter-area", "", 1, "flex"], ["mc-splitter-area", ""]], template: function SplitterFixedExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-splitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "first (with min-width)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "second");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "third");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]], styles: ["mc-splitter[_ngcontent-%COMP%]{display:flex;border:1px solid #000;height:100px;margin:2px}.mc-splitter-area_fixed-width[_ngcontent-%COMP%]{min-width:200px}div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterFixedExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'splitter-fixed-example',
                templateUrl: 'splitter-fixed-example.html',
                styleUrls: ['splitter-fixed-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic Splitter
 */
class SplitterNestedExample {
}
SplitterNestedExample.ɵfac = function SplitterNestedExample_Factory(t) { return new (t || SplitterNestedExample)(); };
SplitterNestedExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitterNestedExample, selectors: [["splitter-nested-example"]], decls: 19, vars: 1, consts: [[1, "with-border"], ["mc-splitter-area", ""], ["mc-splitter-area", "", 1, "flex"], [1, "without-border", "flex", 3, "direction"], ["mc-splitter-area", "", 1, "layout-column", "flex"], [1, "flex", "nested-splitter"]], template: function SplitterNestedExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-splitter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-splitter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mc-splitter", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "center-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "center-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", "vertical");
    } }, directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]], styles: ["mc-splitter.with-border[_ngcontent-%COMP%]{border:1px solid #000;height:300px;margin:2px}mc-splitter.without-border[_ngcontent-%COMP%]{height:300px}.with-border[_ngcontent-%COMP%] > div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}.without-border[_ngcontent-%COMP%] > div[mc-splitter-area][_ngcontent-%COMP%]{background:#b3b3b3}.nested-splitter[_ngcontent-%COMP%] > div[mc-splitter-area][_ngcontent-%COMP%]{background:#9f9f9f}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterNestedExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'splitter-nested-example',
                templateUrl: 'splitter-nested-example.html',
                styleUrls: ['splitter-nested-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic Splitter
 */
class SplitterOverviewExample {
}
SplitterOverviewExample.ɵfac = function SplitterOverviewExample_Factory(t) { return new (t || SplitterOverviewExample)(); };
SplitterOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitterOverviewExample, selectors: [["splitter-overview-example"]], decls: 7, vars: 0, consts: [["mc-splitter-area", ""], ["mc-splitter-area", "", 1, "flex"]], template: function SplitterOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-splitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "second");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "third");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]], styles: ["mc-splitter[_ngcontent-%COMP%]{border:1px solid #000;height:100px;margin:2px}div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'splitter-overview-example',
                templateUrl: 'splitter-overview-example.html',
                styleUrls: ['splitter-overview-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic Splitter
 */
class SplitterVerticalExample {
}
SplitterVerticalExample.ɵfac = function SplitterVerticalExample_Factory(t) { return new (t || SplitterVerticalExample)(); };
SplitterVerticalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SplitterVerticalExample, selectors: [["splitter-vertical-example"]], decls: 7, vars: 1, consts: [[3, "direction"], ["mc-splitter-area", "", 1, "mc-splitter-area_fixed-height"], ["mc-splitter-area", "", 1, "flex"], ["mc-splitter-area", ""]], template: function SplitterVerticalExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-splitter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "first (with min-height)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "second");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "third");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", "vertical");
    } }, directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]], styles: ["mc-splitter[_ngcontent-%COMP%]{display:flex;border:1px solid #000;height:400px;margin:2px}.mc-splitter-area_fixed-height[_ngcontent-%COMP%]{min-height:100px}div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterVerticalExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'splitter-vertical-example',
                templateUrl: 'splitter-vertical-example.html',
                styleUrls: ['splitter-vertical-example.css']
            }]
    }], null, null); })();

const EXAMPLES = [
    SplitterOverviewExample,
    SplitterFixedExample,
    SplitterVerticalExample,
    SplitterNestedExample
];
class SplitterExamplesModule {
}
SplitterExamplesModule.ɵfac = function SplitterExamplesModule_Factory(t) { return new (t || SplitterExamplesModule)(); };
SplitterExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplitterExamplesModule });
SplitterExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplitterExamplesModule, { declarations: [SplitterOverviewExample,
        SplitterFixedExample,
        SplitterVerticalExample,
        SplitterNestedExample], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterModule"]], exports: [SplitterOverviewExample,
        SplitterFixedExample,
        SplitterVerticalExample,
        SplitterNestedExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-splitter.js.map


/***/ }),

/***/ "tF9M":
/*!*************************************************************************!*\
  !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-splitter.js ***!
  \*************************************************************************/
/*! exports provided: Direction, McGutterDirective, McSplitterAreaDirective, McSplitterComponent, McSplitterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McGutterDirective", function() { return McGutterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSplitterAreaDirective", function() { return McSplitterAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSplitterComponent", function() { return McSplitterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSplitterModule", function() { return McSplitterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");








function McSplitterComponent_ng_template_1_mc_gutter_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-gutter", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function McSplitterComponent_ng_template_1_mc_gutter_0_Template_mc_gutter_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onMouseDown($event, index_r2, index_r2 + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx_r4.hideGutters ? "none" : "flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("direction", ctx_r4.direction)("size", ctx_r4.gutterSize)("order", index_r2 * 2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx_r4.disabled || null);
} }
function McSplitterComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, McSplitterComponent_ng_template_1_mc_gutter_0_Template, 1, 6, "mc-gutter", 1);
} if (rf & 2) {
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", last_r3 === false);
} }
const _c0 = ["*"];
var Direction;
(function (Direction) {
    Direction["Horizontal"] = "horizontal";
    Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));
class McGutterDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._direction = Direction.Vertical;
        this._order = 0;
        this._size = 6;
        this.dragged = false;
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }
    get order() {
        return this._order;
    }
    set order(order) {
        this._order = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(order);
    }
    get size() {
        return this._size;
    }
    set size(size) {
        this._size = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
    }
    ngOnInit() {
        this.setStyle("flex-basis" /* FlexBasis */, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceCssPixelValue"])(this.size));
        this.setStyle(this.isVertical() ? "height" /* Height */ : "width" /* Width */, Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceCssPixelValue"])(this.size));
        this.setStyle("order" /* Order */, this.order);
        if (!this.isVertical()) {
            this.setStyle("height" /* Height */, '100%');
        }
        // fix IE issue with gutter icon. flex-direction is requied for flex alignment options
        this.setStyle("flex-direction" /* FlexDirection */, this.isVertical() ? 'row' : 'column');
    }
    isVertical() {
        return this.direction === Direction.Vertical;
    }
    setStyle(property, value) {
        this.renderer.setStyle(this.elementRef.nativeElement, property, value);
    }
}
McGutterDirective.ɵfac = function McGutterDirective_Factory(t) { return new (t || McGutterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
McGutterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: McGutterDirective, selectors: [["mc-gutter"]], hostAttrs: [1, "mc-gutter"], hostVars: 4, hostBindings: function McGutterDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function McGutterDirective_mousedown_HostBindingHandler() { return ctx.dragged = true; });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-gutter_vertical", ctx.isVertical())("mc-gutter_dragged", ctx.dragged);
    } }, inputs: { direction: "direction", order: "order", size: "size" } });
/** @nocollapse */
McGutterDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
McGutterDirective.propDecorators = {
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McGutterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: 'mc-gutter',
                host: {
                    class: 'mc-gutter',
                    '[class.mc-gutter_vertical]': 'isVertical()',
                    '[class.mc-gutter_dragged]': 'dragged',
                    '(mousedown)': 'dragged = true'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
class McSplitterComponent {
    constructor(elementRef, changeDetectorRef, ngZone, renderer) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.areas = [];
        this.isDragging = false;
        this.areaPositionDivider = 2;
        this.listeners = [];
        this._hideGutters = false;
        this._disabled = false;
        this._gutterSize = 6;
    }
    get hideGutters() {
        return this._hideGutters;
    }
    set hideGutters(value) {
        this._hideGutters = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(disabled);
    }
    get gutterSize() {
        return this._gutterSize;
    }
    set gutterSize(gutterSize) {
        const size = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(gutterSize);
        this._gutterSize = size > 0 ? size : this.gutterSize;
    }
    addArea(area) {
        const index = this.areas.length;
        const order = index * this.areaPositionDivider;
        const size = area.getSize();
        area.setOrder(order);
        this.areas.push({
            area,
            index,
            order,
            initialSize: size
        });
    }
    ngOnInit() {
        if (!this.direction) {
            this.direction = Direction.Horizontal;
        }
        this.setStyle("flex-direction" /* FlexDirection */, this.isVertical() ? 'column' : 'row');
    }
    onMouseDown(event, leftAreaIndex, rightAreaIndex) {
        if (this.disabled) {
            return;
        }
        event.preventDefault();
        const leftArea = this.areas[leftAreaIndex];
        const rightArea = this.areas[rightAreaIndex];
        const startPoint = {
            x: event.screenX,
            y: event.screenY
        };
        leftArea.initialSize = leftArea.area.getSize();
        rightArea.initialSize = rightArea.area.getSize();
        this.areas.forEach((item) => {
            const size = item.area.getSize();
            item.area.disableFlex();
            item.area.setSize(size);
        });
        this.ngZone.runOutsideAngular(() => {
            this.listeners.push(this.renderer.listen('document', 'mouseup', () => this.onMouseUp()));
        });
        this.ngZone.runOutsideAngular(() => {
            this.listeners.push(this.renderer.listen('document', 'mousemove', (e) => this.onMouseMove(e, startPoint, leftArea, rightArea)));
        });
        this.isDragging = true;
    }
    removeArea(area) {
        let indexToRemove = -1;
        this.areas.some((item, index) => {
            if (item.area === area) {
                indexToRemove = index;
                return true;
            }
            return false;
        });
        if (indexToRemove === -1) {
            return;
        }
        this.areas.splice(indexToRemove, 1);
    }
    isVertical() {
        return this.direction === Direction.Vertical;
    }
    updateGutter() {
        this.gutters.forEach((gutter) => {
            if (gutter.dragged) {
                gutter.dragged = false;
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    onMouseMove(event, startPoint, leftArea, rightArea) {
        if (!this.isDragging || this.disabled) {
            return;
        }
        const endPoint = {
            x: event.screenX,
            y: event.screenY
        };
        const offset = this.isVertical()
            ? startPoint.y - endPoint.y
            : startPoint.x - endPoint.x;
        const newLeftAreaSize = leftArea.initialSize - offset;
        const newRightAreaSize = rightArea.initialSize + offset;
        const minLeftAreaSize = leftArea.area.getMinSize();
        const minRightAreaSize = rightArea.area.getMinSize();
        if (newLeftAreaSize <= minLeftAreaSize || newRightAreaSize <= minRightAreaSize) {
            return;
        }
        else if (newLeftAreaSize <= 0) {
            leftArea.area.setSize(0);
            rightArea.area.setSize(rightArea.initialSize + leftArea.initialSize);
        }
        else if (newRightAreaSize <= 0) {
            leftArea.area.setSize(rightArea.initialSize + leftArea.initialSize);
            rightArea.area.setSize(0);
        }
        else {
            leftArea.area.setSize(newLeftAreaSize);
            rightArea.area.setSize(newRightAreaSize);
        }
    }
    onMouseUp() {
        while (this.listeners.length > 0) {
            const unsubscribe = this.listeners.pop();
            if (unsubscribe) {
                unsubscribe();
            }
        }
        this.isDragging = false;
        this.updateGutter();
    }
    setStyle(property, value) {
        this.renderer.setStyle(this.elementRef.nativeElement, property, value);
    }
}
McSplitterComponent.ɵfac = function McSplitterComponent_Factory(t) { return new (t || McSplitterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
McSplitterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: McSplitterComponent, selectors: [["mc-splitter"]], viewQuery: function McSplitterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](McGutterDirective, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.gutters = _t);
    } }, hostAttrs: [1, "mc-splitter"], inputs: { hideGutters: "hideGutters", direction: "direction", disabled: "disabled", gutterSize: "gutterSize" }, exportAs: ["mcSplitter"], ngContentSelectors: _c0, decls: 2, vars: 1, consts: [["ngFor", "", 3, "ngForOf"], [3, "direction", "display", "size", "order", "mousedown", 4, "ngIf"], [3, "direction", "size", "order", "mousedown"]], template: function McSplitterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, McSplitterComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.areas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], McGutterDirective], styles: [".mc-splitter{display:flex;flex-wrap:nowrap;align-items:stretch}.mc-gutter,.mc-splitter,.mc-splitter .mc-splitter-area{overflow:hidden}.mc-gutter{display:flex;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center}.mc-gutter.mc-gutter_vertical>.mc-icon{transform:rotate(90deg)}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
McSplitterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
McSplitterComponent.propDecorators = {
    gutters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: [McGutterDirective,] }],
    hideGutters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    direction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McSplitterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-splitter',
                exportAs: 'mcSplitter',
                host: {
                    class: 'mc-splitter'
                },
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>\n\n<ng-template ngFor let-area [ngForOf]=\"areas\" let-index=\"index\" let-last=\"last\">\n    <mc-gutter *ngIf=\"last === false\"\n               [direction]=\"direction\"\n               [attr.disabled]=\"disabled || null\"\n               [style.display]=\"hideGutters ? 'none' : 'flex'\"\n               [size]=\"gutterSize\"\n               [order]=\"index * 2 + 1\"\n               (mousedown)=\"onMouseDown($event, index, index + 1)\">\n    </mc-gutter>\n</ng-template>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mc-splitter{display:flex;flex-wrap:nowrap;align-items:stretch}.mc-gutter,.mc-splitter,.mc-splitter .mc-splitter-area{overflow:hidden}.mc-gutter{display:flex;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center}.mc-gutter.mc-gutter_vertical>.mc-icon{transform:rotate(90deg)}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { hideGutters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], gutters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [McGutterDirective]
        }] }); })();
class McSplitterAreaDirective {
    constructor(elementRef, renderer, splitter) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.splitter = splitter;
    }
    disableFlex() {
        this.renderer.removeStyle(this.elementRef.nativeElement, 'flex');
    }
    ngOnInit() {
        this.splitter.addArea(this);
        this.removeStyle("max-width" /* MaxWidth */);
        if (this.splitter.direction === Direction.Vertical) {
            this.setStyle("width" /* Width */, '100%');
            this.removeStyle("height" /* Height */);
        }
        else {
            this.setStyle("height" /* Height */, '100%');
            this.removeStyle("width" /* Width */);
        }
    }
    ngOnDestroy() {
        this.splitter.removeArea(this);
    }
    setOrder(order) {
        this.setStyle("order" /* Order */, order);
    }
    setSize(size) {
        if (size) {
            const sz = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
            this.setStyle(this.getSizeProperty(), Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceCssPixelValue"])(sz));
        }
    }
    getSize() {
        return this.elementRef.nativeElement[this.getOffsetSizeProperty()];
    }
    getMinSize() {
        const styles = getComputedStyle(this.elementRef.nativeElement);
        return parseFloat(styles[this.getMinSizeProperty()]);
    }
    isVertical() {
        return this.splitter.direction === Direction.Vertical;
    }
    getMinSizeProperty() {
        return this.isVertical()
            ? "min-height" /* MinHeight */
            : "minWidth" /* MinWidth */;
    }
    getOffsetSizeProperty() {
        return this.isVertical()
            ? "offsetHeight" /* OffsetHeight */
            : "offsetWidth" /* OffsetWidth */;
    }
    getSizeProperty() {
        return this.isVertical()
            ? "height" /* Height */
            : "width" /* Width */;
    }
    setStyle(style, value) {
        this.renderer.setStyle(this.elementRef.nativeElement, style, value);
    }
    removeStyle(style) {
        this.renderer.removeStyle(this.elementRef.nativeElement, style);
    }
}
McSplitterAreaDirective.ɵfac = function McSplitterAreaDirective_Factory(t) { return new (t || McSplitterAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](McSplitterComponent)); };
McSplitterAreaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: McSplitterAreaDirective, selectors: [["", "mc-splitter-area", ""]], hostAttrs: [1, "mc-splitter-area"] });
/** @nocollapse */
McSplitterAreaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: McSplitterComponent }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McSplitterAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[mc-splitter-area]',
                host: {
                    class: 'mc-splitter-area'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: McSplitterComponent }]; }, null); })();

class McSplitterModule {
}
McSplitterModule.ɵfac = function McSplitterModule_Factory(t) { return new (t || McSplitterModule)(); };
McSplitterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: McSplitterModule });
McSplitterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](McSplitterModule, { declarations: function () { return [McGutterDirective, McSplitterAreaDirective, McSplitterComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]]; }, exports: function () { return [McGutterDirective, McSplitterAreaDirective, McSplitterComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McSplitterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]
                ],
                exports: [
                    McGutterDirective,
                    McSplitterAreaDirective,
                    McSplitterComponent
                ],
                declarations: [
                    McGutterDirective,
                    McSplitterAreaDirective,
                    McSplitterComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=16-es2015.js.map