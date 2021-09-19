(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34], {
    /***/
    "d8iN":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-splitter.js ***!
      \*********************************************************************************************************/

    /*! exports provided: SplitterExamplesModule, SplitterFixedExample, SplitterNestedExample, SplitterOverviewExample, SplitterVerticalExample */

    /***/
    function d8iN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitterExamplesModule", function () {
        return SplitterExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitterFixedExample", function () {
        return SplitterFixedExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitterNestedExample", function () {
        return SplitterNestedExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitterOverviewExample", function () {
        return SplitterOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplitterVerticalExample", function () {
        return SplitterVerticalExample;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/splitter */
      "DQSY");
      /**
       * @title Basic Splitter
       */


      var SplitterFixedExample = function SplitterFixedExample() {
        _classCallCheck(this, SplitterFixedExample);
      };

      SplitterFixedExample.ɵfac = function SplitterFixedExample_Factory(t) {
        return new (t || SplitterFixedExample)();
      };

      SplitterFixedExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SplitterFixedExample,
        selectors: [["splitter-fixed-example"]],
        decls: 7,
        vars: 0,
        consts: [["mc-splitter-area", "", 1, "mc-splitter-area_fixed-width"], ["mc-splitter-area", "", 1, "flex"], ["mc-splitter-area", ""]],
        template: function SplitterFixedExample_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]],
        styles: ["mc-splitter[_ngcontent-%COMP%]{display:flex;border:1px solid black;height:100px;margin:2px}.mc-splitter-area_fixed-width[_ngcontent-%COMP%]{min-width:200px}div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterFixedExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'splitter-fixed-example',
            templateUrl: 'splitter-fixed-example.html',
            styleUrls: ['splitter-fixed-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic Splitter
       */


      var SplitterNestedExample = function SplitterNestedExample() {
        _classCallCheck(this, SplitterNestedExample);
      };

      SplitterNestedExample.ɵfac = function SplitterNestedExample_Factory(t) {
        return new (t || SplitterNestedExample)();
      };

      SplitterNestedExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SplitterNestedExample,
        selectors: [["splitter-nested-example"]],
        decls: 19,
        vars: 1,
        consts: [[1, "with-border"], ["mc-splitter-area", ""], ["mc-splitter-area", "", 1, "flex"], [1, "without-border", "flex", 3, "direction"], ["mc-splitter-area", "", 1, "layout-column", "flex"], [1, "flex", "nested-splitter"]],
        template: function SplitterNestedExample_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", "vertical");
          }
        },
        directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]],
        styles: ["mc-splitter.with-border[_ngcontent-%COMP%]{border:1px solid black;height:300px;margin:2px}mc-splitter.without-border[_ngcontent-%COMP%]{height:300px}.with-border[_ngcontent-%COMP%] > div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}.without-border[_ngcontent-%COMP%] > div[mc-splitter-area][_ngcontent-%COMP%]{background:#b3b3b3}.nested-splitter[_ngcontent-%COMP%] > div[mc-splitter-area][_ngcontent-%COMP%]{background:#9f9f9f}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterNestedExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'splitter-nested-example',
            templateUrl: 'splitter-nested-example.html',
            styleUrls: ['splitter-nested-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic Splitter
       */


      var SplitterOverviewExample = function SplitterOverviewExample() {
        _classCallCheck(this, SplitterOverviewExample);
      };

      SplitterOverviewExample.ɵfac = function SplitterOverviewExample_Factory(t) {
        return new (t || SplitterOverviewExample)();
      };

      SplitterOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SplitterOverviewExample,
        selectors: [["splitter-overview-example"]],
        decls: 7,
        vars: 0,
        consts: [["mc-splitter-area", ""], ["mc-splitter-area", "", 1, "flex"]],
        template: function SplitterOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]],
        styles: ["mc-splitter[_ngcontent-%COMP%]{border:1px solid black;height:100px;margin:2px}div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'splitter-overview-example',
            templateUrl: 'splitter-overview-example.html',
            styleUrls: ['splitter-overview-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic Splitter
       */


      var SplitterVerticalExample = function SplitterVerticalExample() {
        _classCallCheck(this, SplitterVerticalExample);
      };

      SplitterVerticalExample.ɵfac = function SplitterVerticalExample_Factory(t) {
        return new (t || SplitterVerticalExample)();
      };

      SplitterVerticalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SplitterVerticalExample,
        selectors: [["splitter-vertical-example"]],
        decls: 7,
        vars: 1,
        consts: [[3, "direction"], ["mc-splitter-area", "", 1, "mc-splitter-area_fixed-height"], ["mc-splitter-area", "", 1, "flex"], ["mc-splitter-area", ""]],
        template: function SplitterVerticalExample_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", "vertical");
          }
        },
        directives: [_ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterComponent"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterAreaDirective"]],
        styles: ["mc-splitter[_ngcontent-%COMP%]{display:flex;border:1px solid black;height:400px;margin:2px}.mc-splitter-area_fixed-height[_ngcontent-%COMP%]{min-height:100px}div[mc-splitter-area][_ngcontent-%COMP%]{background:#c5c0c0}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterVerticalExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'splitter-vertical-example',
            templateUrl: 'splitter-vertical-example.html',
            styleUrls: ['splitter-vertical-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [SplitterOverviewExample, SplitterFixedExample, SplitterVerticalExample, SplitterNestedExample];

      var SplitterExamplesModule = function SplitterExamplesModule() {
        _classCallCheck(this, SplitterExamplesModule);
      };

      SplitterExamplesModule.ɵfac = function SplitterExamplesModule_Factory(t) {
        return new (t || SplitterExamplesModule)();
      };

      SplitterExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SplitterExamplesModule
      });
      SplitterExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplitterExamplesModule, {
          declarations: [SplitterOverviewExample, SplitterFixedExample, SplitterVerticalExample, SplitterNestedExample],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterModule"]],
          exports: [SplitterOverviewExample, SplitterFixedExample, SplitterVerticalExample, SplitterNestedExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplitterExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_2__["McSplitterModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-splitter.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=34-es5.js.map