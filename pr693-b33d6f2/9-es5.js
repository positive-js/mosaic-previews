(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
    /***/
    "W7oS":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-divider.js ***!
      \********************************************************************************************************/

    /*! exports provided: DividerExamplesModule, DividerOverviewExample, DividerVerticalExample */

    /***/
    function W7oS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerExamplesModule", function () {
        return DividerExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerOverviewExample", function () {
        return DividerOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerVerticalExample", function () {
        return DividerVerticalExample;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ptsecurity/mosaic/divider */
      "qtyv");
      /**
       * @title Divider
       */


      var DividerOverviewExample = function DividerOverviewExample() {
        _classCallCheck(this, DividerOverviewExample);
      };

      DividerOverviewExample.ɵfac = function DividerOverviewExample_Factory(t) {
        return new (t || DividerOverviewExample)();
      };

      DividerOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DividerOverviewExample,
        selectors: [["divider-overview-example"]],
        decls: 2,
        vars: 0,
        consts: [[1, "docs-divider-container"]],
        template: function DividerOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ptsecurity_mosaic_divider__WEBPACK_IMPORTED_MODULE_1__["McDivider"]],
        styles: [".docs-divider-container[_ngcontent-%COMP%]{margin:20px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'divider-overview-example',
            templateUrl: 'divider-overview-example.html',
            styleUrls: ['divider-overview-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title divider-vertical
       */


      var DividerVerticalExample = function DividerVerticalExample() {
        _classCallCheck(this, DividerVerticalExample);
      };

      DividerVerticalExample.ɵfac = function DividerVerticalExample_Factory(t) {
        return new (t || DividerVerticalExample)();
      };

      DividerVerticalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DividerVerticalExample,
        selectors: [["divider-vertical-example"]],
        decls: 2,
        vars: 1,
        consts: [[1, "docs-divider-container", "docs-divider-vertical-container"], [3, "vertical"]],
        template: function DividerVerticalExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-divider", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
          }
        },
        directives: [_ptsecurity_mosaic_divider__WEBPACK_IMPORTED_MODULE_1__["McDivider"]],
        styles: [".docs-divider-container[_ngcontent-%COMP%]{margin:20px}.docs-divider-vertical-container[_ngcontent-%COMP%]{height:50px;width:50px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerVerticalExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'divider-vertical-example',
            templateUrl: 'divider-vertical-example.html',
            styleUrls: ['divider-vertical-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [DividerOverviewExample, DividerVerticalExample];

      var DividerExamplesModule = function DividerExamplesModule() {
        _classCallCheck(this, DividerExamplesModule);
      };

      DividerExamplesModule.ɵfac = function DividerExamplesModule_Factory(t) {
        return new (t || DividerExamplesModule)();
      };

      DividerExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DividerExamplesModule
      });
      DividerExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_ptsecurity_mosaic_divider__WEBPACK_IMPORTED_MODULE_1__["McDividerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DividerExamplesModule, {
          declarations: [DividerOverviewExample, DividerVerticalExample],
          imports: [_ptsecurity_mosaic_divider__WEBPACK_IMPORTED_MODULE_1__["McDividerModule"]],
          exports: [DividerOverviewExample, DividerVerticalExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DividerExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_ptsecurity_mosaic_divider__WEBPACK_IMPORTED_MODULE_1__["McDividerModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-divider.js.map

      /***/

    },

    /***/
    "qtyv":
    /*!************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-divider.js ***!
      \************************************************************************/

    /*! exports provided: McDivider, McDividerModule */

    /***/
    function qtyv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDivider", function () {
        return McDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDividerModule", function () {
        return McDividerModule;
      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var McDivider = /*#__PURE__*/function () {
        function McDivider() {
          _classCallCheck(this, McDivider);

          this._vertical = false;
          this._inset = false;
        } // Whether the divider is vertically aligned.


        _createClass(McDivider, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          } // Whether the divider is an inset divider.

        }, {
          key: "inset",
          get: function get() {
            return this._inset;
          },
          set: function set(value) {
            this._inset = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
        }]);

        return McDivider;
      }();

      McDivider.ɵfac = function McDivider_Factory(t) {
        return new (t || McDivider)();
      };

      McDivider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: McDivider,
        selectors: [["mc-divider"]],
        hostAttrs: [1, "mc-divider"],
        hostVars: 6,
        hostBindings: function McDivider_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-divider_vertical", ctx.vertical)("mc-divider_horizontal", !ctx.vertical)("mc-divider_inset", ctx.inset);
          }
        },
        inputs: {
          vertical: "vertical",
          inset: "inset"
        },
        decls: 0,
        vars: 0,
        template: function McDivider_Template(rf, ctx) {},
        styles: [".mc-divider{display:block;margin:0}.mc-divider.mc-divider_horizontal{border-top-width:var(--mc-divider-size-width,1px);border-top-style:solid}.mc-divider.mc-divider_vertical{height:100%;border-right-width:var(--mc-divider-size-width,1px);border-right-style:solid}.mc-divider.mc-divider_inset{margin-left:var(--mc-divider-size-inset-margin,80px)}[dir=rtl] .mc-divider.mc-divider_inset{margin-left:auto;margin-right:var(--mc-divider-size-inset-margin,80px)}"],
        encapsulation: 2,
        changeDetection: 0
      });
      McDivider.propDecorators = {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mc-divider',
            host: {
              "class": 'mc-divider',
              '[class.mc-divider_vertical]': 'vertical',
              '[class.mc-divider_horizontal]': '!vertical',
              '[class.mc-divider_inset]': 'inset'
            },
            template: '',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-divider{display:block;margin:0}.mc-divider.mc-divider_horizontal{border-top-width:var(--mc-divider-size-width,1px);border-top-style:solid}.mc-divider.mc-divider_vertical{height:100%;border-right-width:var(--mc-divider-size-width,1px);border-right-style:solid}.mc-divider.mc-divider_inset{margin-left:var(--mc-divider-size-inset-margin,80px)}[dir=rtl] .mc-divider.mc-divider_inset{margin-left:auto;margin-right:var(--mc-divider-size-inset-margin,80px)}"]
          }]
        }], function () {
          return [];
        }, {
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      var McDividerModule = function McDividerModule() {
        _classCallCheck(this, McDividerModule);
      };

      McDividerModule.ɵfac = function McDividerModule_Factory(t) {
        return new (t || McDividerModule)();
      };

      McDividerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: McDividerModule
      });
      McDividerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](McDividerModule, {
          declarations: function declarations() {
            return [McDivider];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [McDivider];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McDividerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [McDivider],
            declarations: [McDivider]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    }
  }]);
})();
//# sourceMappingURL=9-es5.js.map