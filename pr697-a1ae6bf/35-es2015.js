(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "5NkA":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-tabs.js ***!
  \*****************************************************************************************************/
/*! exports provided: TabsEmptyExample, TabsExamplesModule, TabsOldExample, TabsOverviewExample, TabsStretchExample, TabsVerticalExample, TabsWithScrollExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsEmptyExample", function() { return TabsEmptyExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsExamplesModule", function() { return TabsExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsOldExample", function() { return TabsOldExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsOverviewExample", function() { return TabsOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsStretchExample", function() { return TabsStretchExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsVerticalExample", function() { return TabsVerticalExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsWithScrollExample", function() { return TabsWithScrollExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/tabs */ "KX+x");










/**
 * @title Tabs empty
 */
class TabsEmptyExample {
}
TabsEmptyExample.ɵfac = function TabsEmptyExample_Factory(t) { return new (t || TabsEmptyExample)(); };
TabsEmptyExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsEmptyExample, selectors: [["tabs-empty-example"]], decls: 15, vars: 6, consts: [[3, "label"], [3, "label", "empty", "tooltipTitle"], [1, "empty-tab-content"]], template: function TabsEmptyExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Contents for First tab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Contents for Second tab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mc-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \u043D\u0435\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u0412\u0441\u0435 \u0437\u0430\u043C\u0435\u0442\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u0445\u0440\u0430\u043D\u0438\u0442\u044C\u0441\u044F \u0437\u0434\u0435\u0441\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Contents for Third tab ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "First");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Second");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438")("empty", true)("tooltipTitle", "Text for empty tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", "Third");
    } }, directives: [_ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabGroup"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTab"]], styles: ["button:first-child{margin-right:16px}.empty-tab-content{text-align:center}.docs-example-viewer-body .mc-tab-body__content{padding:16px}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsEmptyExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tabs-empty-example',
                templateUrl: 'tabs-empty-example.html',
                styleUrls: ['tabs-empty-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, null); })();

/**
 * @title Navbar
 */
class TabsOldExample {
}
TabsOldExample.ɵfac = function TabsOldExample_Factory(t) { return new (t || TabsOldExample)(); };
TabsOldExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsOldExample, selectors: [["tabs-old-example"]], decls: 7, vars: 1, consts: [["mc-old-tabs", ""], ["label", "Fact 4"], ["label", "Fact 5"], ["label", "Fact 6", 3, "disabled"]], template: function TabsOldExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Chuck Norris counted to infinity. Twice.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Chuck Norris can speak braille.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "nothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
    } }, directives: [_ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabGroup"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McOldTabsCssStyler"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTab"]], styles: [""], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsOldExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tabs-old-example',
                templateUrl: 'tabs-old-example.html',
                styleUrls: ['tabs-old-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, null); })();

function TabsOverviewExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fact 1 ");
} }
function TabsOverviewExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Fact 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 2);
} }
function TabsOverviewExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Fact 3");
} }
/**
 * @title Tabs
 */
class TabsOverviewExample {
}
TabsOverviewExample.ɵfac = function TabsOverviewExample_Factory(t) { return new (t || TabsOverviewExample)(); };
TabsOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsOverviewExample, selectors: [["tabs-overview-example"]], decls: 10, vars: 1, consts: [[3, "disabled"], ["mc-tab-label", ""], ["mc-icon", "mc-play_16"]], template: function TabsOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabsOverviewExample_ng_template_2_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Chuck Norris can hear sign language. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TabsOverviewExample_ng_template_5_Template, 2, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Chuck Norris makes onions cry. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TabsOverviewExample_ng_template_8_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " nothing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
    } }, directives: [_ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabGroup"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTab"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabLabel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [""], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tabs-overview-example',
                templateUrl: 'tabs-overview-example.html',
                styleUrls: ['tabs-overview-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, null); })();

/**
 * @title Navbar
 */
class TabsStretchExample {
}
TabsStretchExample.ɵfac = function TabsStretchExample_Factory(t) { return new (t || TabsStretchExample)(); };
TabsStretchExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsStretchExample, selectors: [["tabs-stretch-example"]], decls: 7, vars: 0, consts: [["mc-stretch-tabs", ""], ["label", "Fact 7"]], template: function TabsStretchExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Chuck Norris knows Victoria's secret. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Chuck Norris can drown a fish. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Chuck Norris narrates Morgan Freeman's life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabGroup"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McStretchTabsCssStyler"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTab"]], styles: [""], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsStretchExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tabs-stretch-example',
                templateUrl: 'tabs-stretch-example.html',
                styleUrls: ['tabs-stretch-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, null); })();

function TabsVerticalExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tab 1 ");
} }
function TabsVerticalExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Tab 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 12);
} }
/**
 * @title Navbar
 */
class TabsVerticalExample {
}
TabsVerticalExample.ɵfac = function TabsVerticalExample_Factory(t) { return new (t || TabsVerticalExample)(); };
TabsVerticalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsVerticalExample, selectors: [["tabs-vertical-example"]], decls: 23, vars: 0, consts: [["vertical", ""], ["disabled", ""], ["mc-tab-label", ""], ["label", "Tab 2"], ["label", "Tab 3"], ["label", "Tab 4"], ["label", "Tab 5"], ["label", "Tab 6"], ["label", "Tab 7"], ["label", "Tab 8"], ["label", "Tab 9"], ["label", "Tab 10"], ["mc-icon", "mc-play_16"]], template: function TabsVerticalExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TabsVerticalExample_ng_template_2_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Content 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TabsVerticalExample_ng_template_5_Template, 2, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Content 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Content 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Content 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Content 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Content 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Content 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Content 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Content 9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Content 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabGroup"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McVerticalTabsCssStyler"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTab"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabLabel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [".mc-tab-group_vertical{height:240px}.mc-tab-header_vertical{width:110px}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsVerticalExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tabs-vertical-example',
                templateUrl: 'tabs-vertical-example.html',
                styleUrls: ['tabs-vertical-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], null, null); })();

function TabsWithScrollExample_mc_tab_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tab ", tab_r1, " ");
} }
function TabsWithScrollExample_mc_tab_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TabsWithScrollExample_mc_tab_4_ng_template_1_Template, 2, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Contents for ", tab_r1, " tab ");
} }
/**
 * @title Navbar
 */
class TabsWithScrollExample {
    constructor() {
        // tslint:disable-next-line:no-magic-numbers
        this.tabs = Array(20)
            .fill(null)
            .map((_, i) => i);
    }
}
TabsWithScrollExample.ɵfac = function TabsWithScrollExample_Factory(t) { return new (t || TabsWithScrollExample)(); };
TabsWithScrollExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TabsWithScrollExample, selectors: [["tabs-with-scroll-example"]], decls: 5, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["mc-tab-label", ""], ["mc-icon", "mc-play_16"]], template: function TabsWithScrollExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TabsWithScrollExample_mc_tab_4_Template, 3, 1, "mc-tab", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTab"], _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabLabel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: ["button:first-child{margin-right:16px}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsWithScrollExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tabs-with-scroll-example',
                templateUrl: 'tabs-with-scroll-example.html',
                styleUrls: ['tabs-with-scroll-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, null); })();

const EXAMPLES = [
    TabsOverviewExample,
    TabsOldExample,
    TabsStretchExample,
    TabsVerticalExample,
    TabsWithScrollExample,
    TabsEmptyExample
];
class TabsExamplesModule {
}
TabsExamplesModule.ɵfac = function TabsExamplesModule_Factory(t) { return new (t || TabsExamplesModule)(); };
TabsExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TabsExamplesModule });
TabsExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabsModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabsExamplesModule, { declarations: [TabsOverviewExample,
        TabsOldExample,
        TabsStretchExample,
        TabsVerticalExample,
        TabsWithScrollExample,
        TabsEmptyExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabsModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"]], exports: [TabsOverviewExample,
        TabsOldExample,
        TabsStretchExample,
        TabsVerticalExample,
        TabsWithScrollExample,
        TabsEmptyExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TabsExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ptsecurity_mosaic_tabs__WEBPACK_IMPORTED_MODULE_4__["McTabsModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-tabs.js.map


/***/ })

}]);
//# sourceMappingURL=35-es2015.js.map