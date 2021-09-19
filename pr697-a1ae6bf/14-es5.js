(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
    /***/
    "E6iK":
    /*!********************************************************************!*\
      !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-progress-spinner.js ***!
      \********************************************************************/

    /*! exports provided: McProgressSpinner, McProgressSpinnerBase, McProgressSpinnerMixinBase, McProgressSpinnerModule */

    /***/
    function E6iK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressSpinner", function () {
        return McProgressSpinner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressSpinnerBase", function () {
        return McProgressSpinnerBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressSpinnerMixinBase", function () {
        return McProgressSpinnerMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressSpinnerModule", function () {
        return McProgressSpinnerModule;
      });
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");

      var idIterator = 0;
      var MIN_PERCENT = 0;
      var MAX_PERCENT = 100;

      var McProgressSpinnerBase = // tslint:disable-next-line:naming-convention
      function McProgressSpinnerBase(_elementRef) {
        _classCallCheck(this, McProgressSpinnerBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McProgressSpinnerMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(McProgressSpinnerBase, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["ThemePalette"].Primary);
      var MAX_DASH_ARRAY = 273;

      var McProgressSpinner = /*#__PURE__*/function (_McProgressSpinnerMix) {
        _inherits(McProgressSpinner, _McProgressSpinnerMix);

        var _super = _createSuper(McProgressSpinner);

        function McProgressSpinner(elementRef) {
          var _this;

          _classCallCheck(this, McProgressSpinner);

          _this = _super.call(this, elementRef);
          _this.id = "mc-progress-spinner-".concat(idIterator++);
          _this.value = 0;
          _this.mode = 'determinate';
          return _this;
        }

        _createClass(McProgressSpinner, [{
          key: "percentage",
          get: function get() {
            return Math.max(MIN_PERCENT, Math.min(MAX_PERCENT, this.value)) / MAX_PERCENT;
          }
        }, {
          key: "dashOffsetPercent",
          get: function get() {
            return "".concat(MAX_DASH_ARRAY - this.percentage * MAX_DASH_ARRAY, "%");
          }
        }]);

        return McProgressSpinner;
      }(McProgressSpinnerMixinBase);

      McProgressSpinner.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mc-progress-spinner',
          template: "<div class=\"mc-progress-spinner__inner\"\n     [ngClass]=\"{'mc-progress-spinner__inner--indeterminate': mode === 'indeterminate'}\">\n    <svg focusable=\"false\"\n         preserveAspectRatio=\"xMidYMid meet\"\n         viewBox=\"0 0 100 100\"\n         class=\"mc-progress-spinner__svg\">\n        <circle cx=\"50%\"\n                cy=\"50%\"\n                r=\"42.5%\"\n                class=\"mc-progress-spinner__circle\"\n                [ngStyle]=\"{'stroke-dashoffset': mode === 'determinate' ? dashOffsetPercent : null}\">\n        </circle>\n    </svg>\n</div>\n\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          inputs: ['color'],
          host: {
            "class": 'mc-progress-spinner',
            '[attr.id]': 'id'
          },
          styles: ["@-webkit-keyframes mc-progress-spinner-indeterminate{to{transform:rotate(270deg)}}@keyframes mc-progress-spinner-indeterminate{to{transform:rotate(270deg)}}.mc-progress-spinner{display:inline-block;width:16px;width:var(--mc-progress-spinner-size-size, 16px);height:16px;height:var(--mc-progress-spinner-size-size, 16px);overflow:hidden}.mc-progress-spinner__circle{fill:none;stroke:#000;stroke-dasharray:273%;stroke-width:13%;transition:stroke-dashoffset .3s;transform-origin:center center}.mc-progress-spinner__inner{width:100%;height:100%;transform:rotate(-90deg)}.mc-progress-spinner__inner--indeterminate{-webkit-animation:mc-progress-spinner-indeterminate 1.5s cubic-bezier(.455,.03,.515,.955) infinite;animation:mc-progress-spinner-indeterminate 1.5s cubic-bezier(.455,.03,.515,.955) infinite}.mc-progress-spinner__inner--indeterminate .mc-progress-spinner__circle{stroke-dashoffset:80%}.mc-progress-spinner__svg{width:100%;height:100%}\n"]
        }]
      }];
      /** @nocollapse */

      McProgressSpinner.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      McProgressSpinner.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        mode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      var McProgressSpinnerModule = function McProgressSpinnerModule() {
        _classCallCheck(this, McProgressSpinnerModule);
      };

      McProgressSpinnerModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
          exports: [McProgressSpinner],
          declarations: [McProgressSpinner]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    },

    /***/
    "QZSG":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-progress-spinner.js ***!
      \*****************************************************************************************************************/

    /*! exports provided: ProgressSpinnerExamplesModule, ProgressSpinnerIndeterminateExample, ProgressSpinnerOverviewExample */

    /***/
    function QZSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressSpinnerExamplesModule", function () {
        return ProgressSpinnerExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressSpinnerIndeterminateExample", function () {
        return ProgressSpinnerIndeterminateExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressSpinnerOverviewExample", function () {
        return ProgressSpinnerOverviewExample;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/progress-spinner */
      "E6iK");
      /**
       * @title Indeterminate progress spinner
       */


      var ProgressSpinnerIndeterminateExample = function ProgressSpinnerIndeterminateExample() {
        _classCallCheck(this, ProgressSpinnerIndeterminateExample);
      };

      ProgressSpinnerIndeterminateExample.ɵfac = function ProgressSpinnerIndeterminateExample_Factory(t) {
        return new (t || ProgressSpinnerIndeterminateExample)();
      };

      ProgressSpinnerIndeterminateExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProgressSpinnerIndeterminateExample,
        selectors: [["progress-spinner-indeterminate-example"]],
        decls: 4,
        vars: 3,
        consts: [[1, "example-progress-spinner-group"], ["mode", "indeterminate", 1, "example-progress-spinner-element", 3, "color"]],
        template: function ProgressSpinnerIndeterminateExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mc-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mc-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mc-progress-spinner", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
          }
        },
        directives: [_ptsecurity_mosaic_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["McProgressSpinner"]],
        styles: [".example-progress-spinner-group[_ngcontent-%COMP%]{display:flex}.example-progress-spinner-element[_ngcontent-%COMP%]{margin-right:8px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressSpinnerIndeterminateExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'progress-spinner-indeterminate-example',
            templateUrl: 'progress-spinner-indeterminate-example.html',
            styleUrls: ['progress-spinner-indeterminate-example.css']
          }]
        }], null, null);
      })();

      var INTERVAL = 300;
      var STEP = 4;
      var MAX_PERCENT = 100;
      /**
       * @title Basic progress spinner
       */

      var ProgressSpinnerOverviewExample = /*#__PURE__*/function () {
        function ProgressSpinnerOverviewExample() {
          var _this2 = this;

          _classCallCheck(this, ProgressSpinnerOverviewExample);

          this.percent = 0;
          setInterval(function () {
            return _this2.percent = (_this2.percent + STEP) % (MAX_PERCENT + STEP);
          }, INTERVAL);
        }

        _createClass(ProgressSpinnerOverviewExample, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearInterval(this.intervalId);
          }
        }]);

        return ProgressSpinnerOverviewExample;
      }();

      ProgressSpinnerOverviewExample.ɵfac = function ProgressSpinnerOverviewExample_Factory(t) {
        return new (t || ProgressSpinnerOverviewExample)();
      };

      ProgressSpinnerOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProgressSpinnerOverviewExample,
        selectors: [["progress-spinner-overview-example"]],
        decls: 6,
        vars: 7,
        consts: [[1, "example-progress-spinner-group"], [1, "example-progress-spinner-element"], [1, "example-progress-spinner-element", 3, "value", "color"]],
        template: function ProgressSpinnerOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mc-progress-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-progress-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mc-progress-spinner", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.percent, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.percent)("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.percent)("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.percent)("color", "error");
          }
        },
        directives: [_ptsecurity_mosaic_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["McProgressSpinner"]],
        styles: [".example-progress-spinner-group[_ngcontent-%COMP%]{display:flex}.example-progress-spinner-element[_ngcontent-%COMP%]{margin-right:8px}.example-progress-spinner-element[_ngcontent-%COMP%]:first-child{width:40px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressSpinnerOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'progress-spinner-overview-example',
            templateUrl: 'progress-spinner-overview-example.html',
            styleUrls: ['progress-spinner-overview-example.css']
          }]
        }], function () {
          return [];
        }, null);
      })();

      var EXAMPLES = [ProgressSpinnerIndeterminateExample, ProgressSpinnerOverviewExample];

      var ProgressSpinnerExamplesModule = function ProgressSpinnerExamplesModule() {
        _classCallCheck(this, ProgressSpinnerExamplesModule);
      };

      ProgressSpinnerExamplesModule.ɵfac = function ProgressSpinnerExamplesModule_Factory(t) {
        return new (t || ProgressSpinnerExamplesModule)();
      };

      ProgressSpinnerExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ProgressSpinnerExamplesModule
      });
      ProgressSpinnerExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["McProgressSpinnerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressSpinnerExamplesModule, {
          declarations: [ProgressSpinnerIndeterminateExample, ProgressSpinnerOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["McProgressSpinnerModule"]],
          exports: [ProgressSpinnerIndeterminateExample, ProgressSpinnerOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressSpinnerExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["McProgressSpinnerModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-progress-spinner.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=14-es5.js.map