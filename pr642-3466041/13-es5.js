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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13], {
    /***/
    "MRrY":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-progress-bar.js ***!
      \*************************************************************************************************************/

    /*! exports provided: ProgressBarExamplesModule, ProgressBarIndeterminateExample, ProgressBarOverviewExample */

    /***/
    function MRrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarExamplesModule", function () {
        return ProgressBarExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarIndeterminateExample", function () {
        return ProgressBarIndeterminateExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarOverviewExample", function () {
        return ProgressBarOverviewExample;
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


      var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/input */
      "PryY");
      /* harmony import */


      var _ptsecurity_mosaic_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/progress-bar */
      "e9np");
      /**
       * @title Indeterminate progress bar
       */


      var ProgressBarIndeterminateExample = function ProgressBarIndeterminateExample() {
        _classCallCheck(this, ProgressBarIndeterminateExample);
      };

      ProgressBarIndeterminateExample.ɵfac = function ProgressBarIndeterminateExample_Factory(t) {
        return new (t || ProgressBarIndeterminateExample)();
      };

      ProgressBarIndeterminateExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProgressBarIndeterminateExample,
        selectors: [["progress-bar-indeterminate-example"]],
        decls: 4,
        vars: 3,
        consts: [[1, "example-progress-bar-group"], ["mode", "indeterminate", 1, "example-progress-bar", 3, "color"], ["mode", "indeterminate", 3, "color"]],
        template: function ProgressBarIndeterminateExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mc-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mc-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mc-progress-bar", 2);

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
        directives: [_ptsecurity_mosaic_progress_bar__WEBPACK_IMPORTED_MODULE_5__["McProgressBar"]],
        styles: [".example-progress-bar-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-progress-bar[_ngcontent-%COMP%]{margin-bottom:12px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarIndeterminateExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'progress-bar-indeterminate-example',
            templateUrl: 'progress-bar-indeterminate-example.html',
            styleUrls: ['progress-bar-indeterminate-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic progress bar
       */


      var ProgressBarOverviewExample = function ProgressBarOverviewExample() {
        _classCallCheck(this, ProgressBarOverviewExample);

        this.percent = 30;
      };

      ProgressBarOverviewExample.ɵfac = function ProgressBarOverviewExample_Factory(t) {
        return new (t || ProgressBarOverviewExample)();
      };

      ProgressBarOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProgressBarOverviewExample,
        selectors: [["progress-bar-overview-example"]],
        decls: 7,
        vars: 7,
        consts: [[1, "example-progress-bar-group"], [1, "example-progress-bar", 3, "value", "color"], ["mcInput", "", "type", "number", "min", "0", "max", "100", "step", "5", 3, "ngModel", "ngModelChange"]],
        template: function ProgressBarOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mc-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mc-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mc-progress-bar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProgressBarOverviewExample_Template_input_ngModelChange_5_listener($event) {
              return ctx.percent = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mc-stepper");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.percent)("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.percent)("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.percent)("color", "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.percent);
          }
        },
        directives: [_ptsecurity_mosaic_progress_bar__WEBPACK_IMPORTED_MODULE_5__["McProgressBar"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["McInput"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["McNumberInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["MinValidator"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["MaxValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McStepper"]],
        styles: [".example-progress-bar-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-progress-bar[_ngcontent-%COMP%]{margin-bottom:12px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'progress-bar-overview-example',
            templateUrl: 'progress-bar-overview-example.html',
            styleUrls: ['progress-bar-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [ProgressBarIndeterminateExample, ProgressBarOverviewExample];

      var ProgressBarExamplesModule = function ProgressBarExamplesModule() {
        _classCallCheck(this, ProgressBarExamplesModule);
      };

      ProgressBarExamplesModule.ɵfac = function ProgressBarExamplesModule_Factory(t) {
        return new (t || ProgressBarExamplesModule)();
      };

      ProgressBarExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ProgressBarExamplesModule
      });
      ProgressBarExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["McInputModule"], _ptsecurity_mosaic_progress_bar__WEBPACK_IMPORTED_MODULE_5__["McProgressBarModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgressBarExamplesModule, {
          declarations: [ProgressBarIndeterminateExample, ProgressBarOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["McInputModule"], _ptsecurity_mosaic_progress_bar__WEBPACK_IMPORTED_MODULE_5__["McProgressBarModule"]],
          exports: [ProgressBarIndeterminateExample, ProgressBarOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProgressBarExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_4__["McInputModule"], _ptsecurity_mosaic_progress_bar__WEBPACK_IMPORTED_MODULE_5__["McProgressBarModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-progress-bar.js.map

      /***/

    },

    /***/
    "e9np":
    /*!*****************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-progress-bar.js ***!
      \*****************************************************************************/

    /*! exports provided: McProgressBar, McProgressBarBase, McProgressBarMixinBase, McProgressBarModule */

    /***/
    function e9np(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressBar", function () {
        return McProgressBar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressBarBase", function () {
        return McProgressBarBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressBarMixinBase", function () {
        return McProgressBarMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McProgressBarModule", function () {
        return McProgressBarModule;
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

      function McProgressBar_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 3);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          transform: a0
        };
      };

      function McProgressBar_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, "scaleX(" + ctx_r1.percentage + ")"));
        }
      }

      var idIterator = 0;
      var MIN_PERCENT = 0;
      var MAX_PERCENT = 100;

      var McProgressBarBase = // tslint:disable-next-line:naming-convention
      function McProgressBarBase(_elementRef) {
        _classCallCheck(this, McProgressBarBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McProgressBarMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(McProgressBarBase, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["ThemePalette"].Primary);

      var McProgressBar = /*#__PURE__*/function (_McProgressBarMixinBa) {
        _inherits(McProgressBar, _McProgressBarMixinBa);

        var _super = _createSuper(McProgressBar);

        function McProgressBar(elementRef) {
          var _this;

          _classCallCheck(this, McProgressBar);

          _this = _super.call(this, elementRef);
          _this.id = "mc-progress-bar-".concat(idIterator++);
          _this.value = 0;
          _this.mode = 'determinate';
          return _this;
        }

        _createClass(McProgressBar, [{
          key: "percentage",
          get: function get() {
            return Math.max(MIN_PERCENT, Math.min(MAX_PERCENT, this.value)) / MAX_PERCENT;
          }
        }]);

        return McProgressBar;
      }(McProgressBarMixinBase);

      McProgressBar.ɵfac = function McProgressBar_Factory(t) {
        return new (t || McProgressBar)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      McProgressBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McProgressBar,
        selectors: [["mc-progress-bar"]],
        hostAttrs: [1, "mc-progress-bar"],
        hostVars: 1,
        hostBindings: function McProgressBar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);
          }
        },
        inputs: {
          color: "color",
          id: "id",
          value: "value",
          mode: "mode"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 3,
        vars: 3,
        consts: [[1, "mc-progress-bar__inner", 3, "ngSwitch", "id"], ["class", "mc-progress-bar__line mc-progress-bar__line--indeterminate", 4, "ngSwitchCase"], ["class", "mc-progress-bar__line mc-progress-bar__line--determinate", 3, "ngStyle", 4, "ngSwitchDefault"], [1, "mc-progress-bar__line", "mc-progress-bar__line--indeterminate"], [1, "mc-progress-bar__line", "mc-progress-bar__line--determinate", 3, "ngStyle"]],
        template: function McProgressBar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McProgressBar_div_1_Template, 1, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McProgressBar_div_2_Template, 1, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.mode)("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", "indeterminate");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]],
        styles: ["@-webkit-keyframes mc-progress-bar-indeterminate{0%{transform:scaleX(.25) translateX(-150%)}to{transform:scaleX(.4) translateX(250%)}}@keyframes mc-progress-bar-indeterminate{0%{transform:scaleX(.25) translateX(-150%)}to{transform:scaleX(.4) translateX(250%)}}.mc-progress-bar{display:block;height:var(--mc-progress-bar-size-height,4px);overflow:hidden}.mc-progress-bar__inner{height:100%}.mc-progress-bar__line{height:100%;transform-origin:top left}.mc-progress-bar__line--determinate{transition:transform .3s}.mc-progress-bar__line--indeterminate{-webkit-animation:mc-progress-bar-indeterminate 2.1s cubic-bezier(.455,.03,.515,.955) infinite;animation:mc-progress-bar-indeterminate 2.1s cubic-bezier(.455,.03,.515,.955) infinite}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McProgressBar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      McProgressBar.propDecorators = {
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

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McProgressBar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mc-progress-bar',
            template: "\n<div class=\"mc-progress-bar__inner\" [ngSwitch]=\"mode\" [id]=\"id\">\n    <div\n        *ngSwitchCase=\"'indeterminate'\"\n        class=\"mc-progress-bar__line mc-progress-bar__line--indeterminate\">\n    </div>\n    <div\n        *ngSwitchDefault\n        class=\"mc-progress-bar__line mc-progress-bar__line--determinate\"\n        [ngStyle]=\"{transform: 'scaleX(' + percentage + ')'}\">\n    </div>\n</div>\n",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            inputs: ['color'],
            host: {
              "class": 'mc-progress-bar',
              '[attr.id]': 'id'
            },
            styles: ["@-webkit-keyframes mc-progress-bar-indeterminate{0%{transform:scaleX(.25) translateX(-150%)}to{transform:scaleX(.4) translateX(250%)}}@keyframes mc-progress-bar-indeterminate{0%{transform:scaleX(.25) translateX(-150%)}to{transform:scaleX(.4) translateX(250%)}}.mc-progress-bar{display:block;height:var(--mc-progress-bar-size-height,4px);overflow:hidden}.mc-progress-bar__inner{height:100%}.mc-progress-bar__line{height:100%;transform-origin:top left}.mc-progress-bar__line--determinate{transition:transform .3s}.mc-progress-bar__line--indeterminate{-webkit-animation:mc-progress-bar-indeterminate 2.1s cubic-bezier(.455,.03,.515,.955) infinite;animation:mc-progress-bar-indeterminate 2.1s cubic-bezier(.455,.03,.515,.955) infinite}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var McProgressBarModule = function McProgressBarModule() {
        _classCallCheck(this, McProgressBarModule);
      };

      McProgressBarModule.ɵfac = function McProgressBarModule_Factory(t) {
        return new (t || McProgressBarModule)();
      };

      McProgressBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: McProgressBarModule
      });
      McProgressBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McProgressBarModule, {
          declarations: function declarations() {
            return [McProgressBar];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
          },
          exports: function exports() {
            return [McProgressBar];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McProgressBarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
            exports: [McProgressBar],
            declarations: [McProgressBar]
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
//# sourceMappingURL=13-es5.js.map