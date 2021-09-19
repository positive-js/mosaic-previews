(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "0g+/":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-link.js ***!
  \*****************************************************************************************************/
/*! exports provided: LinkApplicationExample, LinkColorExample, LinkDisabledExample, LinkExamplesModule, LinkExternalExample, LinkGeneralExample, LinkIconsExample, LinkMultiLineExample, LinkOverviewExample, LinkPrepositionsExample, LinkPrintExample, LinkPseudoExample, LinkTargetBlankExample, LinkVisitedExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkApplicationExample", function() { return LinkApplicationExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkColorExample", function() { return LinkColorExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDisabledExample", function() { return LinkDisabledExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkExamplesModule", function() { return LinkExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkExternalExample", function() { return LinkExternalExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkGeneralExample", function() { return LinkGeneralExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkIconsExample", function() { return LinkIconsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkMultiLineExample", function() { return LinkMultiLineExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkOverviewExample", function() { return LinkOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPrepositionsExample", function() { return LinkPrepositionsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPrintExample", function() { return LinkPrintExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkPseudoExample", function() { return LinkPseudoExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkTargetBlankExample", function() { return LinkTargetBlankExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkVisitedExample", function() { return LinkVisitedExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/link */ "DI8n");









/**
 * @title Basic link
 */
class LinkApplicationExample {
}
LinkApplicationExample.ɵfac = function LinkApplicationExample_Factory(t) { return new (t || LinkApplicationExample)(); };
LinkApplicationExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkApplicationExample, selectors: [["link-application-example"]], decls: 10, vars: 0, consts: [[1, "docs-padding"], ["href", "/link/overview", "mc-link", ""], [1, "mc-link__text"], ["mc-icon", "mc-external-link_16"], ["src", "favicon.ico", 1, "icon"]], template: function LinkApplicationExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432 AI Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0432 AI Desktop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}.icon[_ngcontent-%COMP%]{margin-left:5px;vertical-align:middle}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkApplicationExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-application-example',
                templateUrl: 'link-application-example.html',
                styleUrls: ['link-application-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkColorExample {
}
LinkColorExample.ɵfac = function LinkColorExample_Factory(t) { return new (t || LinkColorExample)(); };
LinkColorExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkColorExample, selectors: [["link-color-example"]], decls: 21, vars: 0, consts: [["href", "/link/overview", "mc-link", ""], [1, "mc-link__text"], ["href", "/link/overview", "mc-link", "", 1, "warning"], ["href", "/link/overview", "mc-link", "", 1, "ok"]], template: function LinkColorExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u041E\u0442\u043B\u0438\u0447\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041E, \u043D\u0435\u0442!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u041E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: ["td[_ngcontent-%COMP%]{padding:16px}.warning[_ngcontent-%COMP%]{color:#f0d49b!important;border-bottom:1px solid #F0D49B!important}.ok[_ngcontent-%COMP%]{color:#b79a45!important;border-bottom:1px solid #B79A45!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkColorExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-color-example',
                templateUrl: 'link-color-example.html',
                styleUrls: ['link-color-example.css']
            }]
    }], null, null); })();

/**
 * @title Pseudo link
 */
class LinkDisabledExample {
    constructor() {
        this.disabled = true;
    }
}
LinkDisabledExample.ɵfac = function LinkDisabledExample_Factory(t) { return new (t || LinkDisabledExample)(); };
LinkDisabledExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkDisabledExample, selectors: [["link-disabled-example"]], decls: 4, vars: 1, consts: [[1, "docs-padding"], ["mc-link", "", 3, "disabled"], [1, "mc-link__text"]], template: function LinkDisabledExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041E\u0442\u0447\u0435\u0442 \u043E\u0442 15.05.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}.fixed-width[_ngcontent-%COMP%]{width:475px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkDisabledExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-disabled-example',
                templateUrl: 'link-disabled-example.html',
                styleUrls: ['link-disabled-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkExternalExample {
}
LinkExternalExample.ɵfac = function LinkExternalExample_Factory(t) { return new (t || LinkExternalExample)(); };
LinkExternalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkExternalExample, selectors: [["link-external-example"]], decls: 5, vars: 0, consts: [[1, "docs-padding"], ["href", "/link/overview", "mc-link", ""], [1, "mc-link__text"], ["mc-icon", "mc-external-link_16"]], template: function LinkExternalExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkExternalExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-external-example',
                templateUrl: 'link-external-example.html',
                styleUrls: ['link-external-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkGeneralExample {
}
LinkGeneralExample.ɵfac = function LinkGeneralExample_Factory(t) { return new (t || LinkGeneralExample)(); };
LinkGeneralExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkGeneralExample, selectors: [["link-general-example"]], decls: 3, vars: 0, consts: [[1, "docs-padding"], ["href", "/link/overview", "mc-link", ""]], template: function LinkGeneralExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkGeneralExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-general-example',
                templateUrl: 'link-general-example.html',
                styleUrls: ['link-general-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkIconsExample {
}
LinkIconsExample.ɵfac = function LinkIconsExample_Factory(t) { return new (t || LinkIconsExample)(); };
LinkIconsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkIconsExample, selectors: [["link-icons-example"]], decls: 5, vars: 0, consts: [[1, "docs-padding"], ["href", "#", "mc-link", ""], ["mc-icon", "mc-clock_16"], [1, "mc-link__text"]], template: function LinkIconsExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkIconsExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-icons-example',
                templateUrl: 'link-icons-example.html',
                styleUrls: ['link-icons-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkMultiLineExample {
}
LinkMultiLineExample.ɵfac = function LinkMultiLineExample_Factory(t) { return new (t || LinkMultiLineExample)(); };
LinkMultiLineExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkMultiLineExample, selectors: [["link-multi-line-example"]], decls: 4, vars: 0, consts: [[1, "docs-padding", "fixed-width"], ["mc-link", "", 1, "inline"]], template: function LinkMultiLineExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0440\u043E\u0441\u0438\u043C \u0432\u0430\u0441 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0432 \u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438 Positive Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}.fixed-width[_ngcontent-%COMP%]{width:275px}.inline[_ngcontent-%COMP%]{display:inline!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkMultiLineExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-multi-line-example',
                templateUrl: 'link-multi-line-example.html',
                styleUrls: ['link-multi-line-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkOverviewExample {
    constructor() {
        this.active = true;
        this.focus = true;
        this.disabled = true;
    }
}
LinkOverviewExample.ɵfac = function LinkOverviewExample_Factory(t) { return new (t || LinkOverviewExample)(); };
LinkOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkOverviewExample, selectors: [["link-overview-example"]], decls: 22, vars: 1, consts: [[1, "docs-padding"], ["href", "/link/overview", "mc-link", ""], ["href", "/link/overview", "target", "_blank", "mc-link", ""], [1, "mc-link__text"], ["mc-icon", "mc-new-tab_16"], ["href", "https://www.google.com/", "mc-link", ""], ["mc-icon", "mc-external-link_16"], ["href", "/link/overview", "mc-link", "", 3, "disabled"], ["mc-icon", "mc-calendar_16"], ["href", "/link/overview", "mc-link", "", "noUnderline", ""]], template: function LinkOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-overview-example',
                templateUrl: 'link-overview-example.html',
                styleUrls: ['link-overview-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkPrepositionsExample {
}
LinkPrepositionsExample.ɵfac = function LinkPrepositionsExample_Factory(t) { return new (t || LinkPrepositionsExample)(); };
LinkPrepositionsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkPrepositionsExample, selectors: [["link-prepositions-example"]], decls: 5, vars: 0, consts: [[1, "docs-padding"], ["href", "#", "mc-link", ""], [1, "mc-link__text"]], template: function LinkPrepositionsExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0432 \u0426\u0435\u043D\u0442\u0440 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkPrepositionsExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-prepositions-example',
                templateUrl: 'link-prepositions-example.html',
                styleUrls: ['link-prepositions-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkPrintExample {
}
LinkPrintExample.ɵfac = function LinkPrintExample_Factory(t) { return new (t || LinkPrintExample)(); };
LinkPrintExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkPrintExample, selectors: [["link-print-example"]], decls: 4, vars: 0, consts: [[1, "docs-padding"], ["href", "https://www.cvedetails.com/cve/CVE-2019-1020010/", "mc-link", "", "printMode", "true", "print", "cvedetails.com/cve/CVE-2019-1020010"], [1, "mc-link__text"]], template: function LinkPrintExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CVE-2019-1020010");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkPrintExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-print-example',
                templateUrl: 'link-print-example.html',
                styleUrls: ['link-print-example.css']
            }]
    }], null, null); })();

/**
 * @title Pseudo link
 */
class LinkPseudoExample {
}
LinkPseudoExample.ɵfac = function LinkPseudoExample_Factory(t) { return new (t || LinkPseudoExample)(); };
LinkPseudoExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkPseudoExample, selectors: [["link-pseudo-example"]], decls: 3, vars: 0, consts: [[1, "docs-padding"], ["mc-link", "", "pseudo", ""]], template: function LinkPseudoExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}.fixed-width[_ngcontent-%COMP%]{width:475px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkPseudoExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-pseudo-example',
                templateUrl: 'link-pseudo-example.html',
                styleUrls: ['link-pseudo-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic link
 */
class LinkTargetBlankExample {
}
LinkTargetBlankExample.ɵfac = function LinkTargetBlankExample_Factory(t) { return new (t || LinkTargetBlankExample)(); };
LinkTargetBlankExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkTargetBlankExample, selectors: [["link-target-blank-example"]], decls: 5, vars: 0, consts: [[1, "docs-padding"], ["href", "/link/overview", "target", "_blank", "mc-link", ""], [1, "mc-link__text"], ["mc-icon", "mc-new-tab_16"]], template: function LinkTargetBlankExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041E\u0442\u0447\u0435\u0442 \u0441\u043A\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkTargetBlankExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-target-blank-example',
                templateUrl: 'link-target-blank-example.html',
                styleUrls: ['link-target-blank-example.css']
            }]
    }], null, null); })();

/**
 * @title Pseudo link
 */
class LinkVisitedExample {
    constructor() {
        this.visited = false;
    }
}
LinkVisitedExample.ɵfac = function LinkVisitedExample_Factory(t) { return new (t || LinkVisitedExample)(); };
LinkVisitedExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinkVisitedExample, selectors: [["link-visited-example"]], decls: 3, vars: 1, consts: [[1, "docs-padding"], ["href", "/link/overview", "target", "_blank", "mc-link", "", 3, "useVisited", "click"]], template: function LinkVisitedExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LinkVisitedExample_Template_a_click_1_listener() { return ctx.visited = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u041E\u0442\u0447\u0435\u0442 \u043E\u0442 19.05.2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("useVisited", ctx.visited);
    } }, directives: [_ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]], styles: [".docs-padding[_ngcontent-%COMP%]{padding:16px}.fixed-width[_ngcontent-%COMP%]{width:475px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkVisitedExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'link-visited-example',
                templateUrl: 'link-visited-example.html',
                styleUrls: ['link-visited-example.css']
            }]
    }], null, null); })();

const EXAMPLES = [
    LinkOverviewExample,
    LinkPseudoExample,
    LinkGeneralExample,
    LinkExternalExample,
    LinkTargetBlankExample,
    LinkApplicationExample,
    LinkPrintExample,
    LinkMultiLineExample,
    LinkPrepositionsExample,
    LinkIconsExample,
    LinkColorExample,
    LinkVisitedExample,
    LinkDisabledExample
];
class LinkExamplesModule {
}
LinkExamplesModule.ɵfac = function LinkExamplesModule_Factory(t) { return new (t || LinkExamplesModule)(); };
LinkExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LinkExamplesModule });
LinkExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
            _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLinkModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LinkExamplesModule, { declarations: [LinkOverviewExample,
        LinkPseudoExample,
        LinkGeneralExample,
        LinkExternalExample,
        LinkTargetBlankExample,
        LinkApplicationExample,
        LinkPrintExample,
        LinkMultiLineExample,
        LinkPrepositionsExample,
        LinkIconsExample,
        LinkColorExample,
        LinkVisitedExample,
        LinkDisabledExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
        _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLinkModule"]], exports: [LinkOverviewExample,
        LinkPseudoExample,
        LinkGeneralExample,
        LinkExternalExample,
        LinkTargetBlankExample,
        LinkApplicationExample,
        LinkPrintExample,
        LinkMultiLineExample,
        LinkPrepositionsExample,
        LinkIconsExample,
        LinkColorExample,
        LinkVisitedExample,
        LinkDisabledExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LinkExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
                    _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLinkModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-link.js.map


/***/ })

}]);
//# sourceMappingURL=30-es2015.js.map