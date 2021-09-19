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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18], {
    /***/
    "GEIk":
    /*!**********************************************************!*\
      !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-toggle.js ***!
      \**********************************************************/

    /*! exports provided: McToggleBase, McToggleChange, McToggleComponent, McToggleMixinBase, McToggleModule */

    /***/
    function GEIk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McToggleBase", function () {
        return McToggleBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McToggleChange", function () {
        return McToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McToggleComponent", function () {
        return McToggleComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McToggleMixinBase", function () {
        return McToggleMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McToggleModule", function () {
        return McToggleModule;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
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
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var nextUniqueId = 0;

      var McToggleBase = // tslint:disable-next-line: naming-convention
      function McToggleBase(_elementRef) {
        _classCallCheck(this, McToggleBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line: naming-convention


      var McToggleMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(McToggleBase), _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["ThemePalette"].Primary));

      var McToggleChange = function McToggleChange() {
        _classCallCheck(this, McToggleChange);
      };

      var McToggleComponent = /*#__PURE__*/function (_McToggleMixinBase) {
        _inherits(McToggleComponent, _McToggleMixinBase);

        var _super = _createSuper(McToggleComponent);

        function McToggleComponent( // tslint:disable-next-line:naming-convention
        _elementRef, _focusMonitor, _changeDetectorRef) {
          var _this;

          _classCallCheck(this, McToggleComponent);

          _this = _super.call(this, _elementRef);
          _this._elementRef = _elementRef;
          _this._focusMonitor = _focusMonitor;
          _this._changeDetectorRef = _changeDetectorRef;
          _this.labelPosition = 'right';
          _this.ariaLabel = '';
          _this.ariaLabelledby = null;
          _this.name = null;
          _this._disabled = false;
          _this._checked = false;
          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this.uniqueId = "mc-toggle-".concat(++nextUniqueId); // tslint:disable-next-line:no-empty

          _this.onTouchedCallback = function () {}; // tslint:disable-next-line:no-empty


          _this.onChangeCallback = function (_) {};

          _this.id = _this.uniqueId;

          _this._focusMonitor.monitor(_this._elementRef.nativeElement, true);

          return _this;
        }

        _createClass(McToggleComponent, [{
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this.uniqueId, "-input");
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            if (value !== this._disabled) {
              this._disabled = value;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            if (value !== this._checked) {
              this._checked = value;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
          }
        }, {
          key: "focus",
          value: function focus() {
            this._focusMonitor.focusVia(this.inputElement.nativeElement, 'keyboard');
          }
        }, {
          key: "getAriaChecked",
          value: function getAriaChecked() {
            return this.checked;
          }
        }, {
          key: "onChangeEvent",
          value: function onChangeEvent(event) {
            event.stopPropagation();
            this.updateModelValue();
            this.emitChangeEvent();
          }
        }, {
          key: "onLabelTextChange",
          value: function onLabelTextChange() {
            this._changeDetectorRef.markForCheck();
          }
        }, {
          key: "onInputClick",
          value: function onInputClick(event) {
            event.stopPropagation();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "updateModelValue",
          value: function updateModelValue() {
            this._checked = !this.checked;
            this.onTouchedCallback();
          }
        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent() {
            var event = new McToggleChange();
            event.source = this;
            event.checked = this.checked;
            this.onChangeCallback(this.checked);
            this.change.emit(event);
          }
        }]);

        return McToggleComponent;
      }(McToggleMixinBase);

      McToggleComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'mc-toggle',
          exportAs: 'mcToggle',
          template: "<label [attr.for]=\"inputId\" class=\"mc-toggle-layout\">\n    <div class=\"mc-toggle__container\" [class.left]=\"labelPosition === 'left'\">\n        <input #input\n               type=\"checkbox\"\n               role=\"switch\"\n               class=\"mc-toggle-input cdk-visually-hidden\"\n               [id]=\"inputId\"\n               [checked]=\"checked\"\n               [attr.value]=\"value\"\n               [disabled]=\"disabled\"\n               [attr.name]=\"name\"\n               [tabIndex]=\"tabIndex\"\n               [attr.aria-label]=\"ariaLabel || null\"\n               [attr.aria-labelledby]=\"ariaLabelledby\"\n               [attr.aria-checked]=\"getAriaChecked()\"\n               (click)=\"onInputClick($event)\"\n               (change)=\"onChangeEvent($event)\"/>\n        <div class=\"mc-toggle-bar-container\">\n            <div class=\"mc-toggle__overlay\"></div>\n            <div class=\"mc-toggle-bar\">\n                <div class=\"mc-toggle__circle\" [@switch]=\"checked\"></div>\n            </div>\n        </div>\n        <div class=\"mc-toggle__content\"\n             [class.left]=\"labelPosition === 'left'\"\n             [class.right]=\"labelPosition === 'right'\">\n            <span class=\"mc-toggle-label\" (cdkObserveContent)=\"onLabelTextChange()\">\n                <ng-content></ng-content>\n            </span>\n        </div>\n    </div>\n</label>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
          inputs: ['color', 'tabIndex'],
          host: {
            "class": 'mc-toggle',
            '[id]': 'id',
            '[attr.id]': 'id',
            '[class.mc-disabled]': 'disabled',
            '[class.mc-active]': 'checked'
          },
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('switch', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            left: '50%'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            left: '1px'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('true <=> false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('150ms'))])],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
              return McToggleComponent;
            }),
            multi: true
          }],
          styles: [".mc-toggle{display:inline-block}.mc-toggle .mc-toggle-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mc-toggle .mc-toggle-bar{position:relative;border-width:1px;border-style:solid}.mc-toggle .mc-toggle-bar.mc-toggle-label-position-left{order:1}.mc-toggle .mc-toggle-bar-container{position:relative}.mc-toggle__container{display:flex;align-items:center;position:relative}.mc-toggle__container.left{flex-direction:row-reverse}.mc-toggle__content.left{margin-right:8px;margin-right:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__content.right{margin-left:8px;margin-left:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__circle{position:absolute;border-width:1px;border-style:solid;border-radius:100%;margin-top:-1px;margin-left:-1px;transform:translate(-1px)}.mc-toggle__overlay{position:absolute;top:0;left:0;z-index:1}.mc-toggle:not(.mc-toggle_small) .mc-toggle-bar{height:16px;height:var(--mc-toggle-size-height, 16px);width:28px;width:var(--mc-toggle-size-width, 28px);border-radius:9px;border-radius:var(--mc-toggle-size-border-radius, 9px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__overlay{border-radius:9px;border-radius:var(--mc-toggle-size-border-radius, 9px);height:16px;height:var(--mc-toggle-size-height, 16px);width:28px;width:var(--mc-toggle-size-width, 28px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__circle{height:16px;height:var(--mc-toggle-size-height, 16px);width:16px;width:var(--mc-toggle-size-height, 16px)}.mc-toggle.mc-toggle_small .mc-toggle-bar{height:14px;height:var(--mc-toggle-small-size-height, 14px);width:24px;width:var(--mc-toggle-small-size-width, 24px);border-radius:8px;border-radius:var(--mc-toggle-small-size-border-radius, 8px)}.mc-toggle.mc-toggle_small .mc-toggle__overlay{border-radius:8px;border-radius:var(--mc-toggle-small-size-border-radius, 8px);height:14px;height:var(--mc-toggle-small-size-height, 14px);width:24px;width:var(--mc-toggle-small-size-width, 24px)}.mc-toggle.mc-toggle_small .mc-toggle__circle{height:14px;height:var(--mc-toggle-small-size-height, 14px);width:14px;width:var(--mc-toggle-small-size-height, 14px)}.mc-toggle:not(.mc-disabled){cursor:pointer}\n"]
        }]
      }];
      /** @nocollapse */

      McToggleComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      };

      McToggleComponent.propDecorators = {
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['input', {
            "static": false
          }]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['aria-labelledby']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }]
      };

      var McToggleModule = function McToggleModule() {
        _classCallCheck(this, McToggleModule);
      };

      McToggleModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McCommonModule"]],
          exports: [McToggleComponent],
          declarations: [McToggleComponent]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    },

    /***/
    "xSOU":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-toggle.js ***!
      \*******************************************************************************************************/

    /*! exports provided: ToggleExamplesModule, ToggleOverviewExample */

    /***/
    function xSOU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleExamplesModule", function () {
        return ToggleExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleOverviewExample", function () {
        return ToggleOverviewExample;
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


      var _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/toggle */
      "GEIk");
      /**
       * @title Basic toggle
       */


      var ToggleOverviewExample = function ToggleOverviewExample() {
        _classCallCheck(this, ToggleOverviewExample);

        this.value = true;
      };

      ToggleOverviewExample.ɵfac = function ToggleOverviewExample_Factory(t) {
        return new (t || ToggleOverviewExample)();
      };

      ToggleOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ToggleOverviewExample,
        selectors: [["toggle-overview-example"]],
        decls: 29,
        vars: 12,
        consts: [[1, "mc-toggle_small", 3, "ngModel", "ngModelChange"], [1, "mc-toggle_small", 3, "color", "ngModel", "ngModelChange"], ["labelPosition", "left", 1, "mc-toggle_small", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [3, "color", "ngModel", "ngModelChange"], ["labelPosition", "left", 3, "ngModel", "ngModelChange"]],
        template: function ToggleOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Small Toggles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mc-toggle", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_2_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-toggle", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_3_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_4_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mc-toggle", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_7_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " right label\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mc-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_11_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " left label\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Big Toggles");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mc-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_18_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mc-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_19_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mc-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_20_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mc-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_23_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " right label\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mc-toggle", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ToggleOverviewExample_Template_mc_toggle_ngModelChange_27_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " left label\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'toggle-overview-example',
            templateUrl: 'toggle-overview-example.html',
            styleUrls: ['toggle-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [ToggleOverviewExample];

      var ToggleExamplesModule = function ToggleExamplesModule() {
        _classCallCheck(this, ToggleExamplesModule);
      };

      ToggleExamplesModule.ɵfac = function ToggleExamplesModule_Factory(t) {
        return new (t || ToggleExamplesModule)();
      };

      ToggleExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ToggleExamplesModule
      });
      ToggleExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ToggleExamplesModule, {
          declarations: [ToggleOverviewExample],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleModule"]],
          exports: [ToggleOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_toggle__WEBPACK_IMPORTED_MODULE_2__["McToggleModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-toggle.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=18-es5.js.map