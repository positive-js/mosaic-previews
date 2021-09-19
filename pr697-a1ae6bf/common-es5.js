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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "Gncw":
    /*!************************************************************!*\
      !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-textarea.js ***!
      \************************************************************/

    /*! exports provided: MC_TEXTAREA_VALUE_ACCESSOR, McTextarea, McTextareaBase, McTextareaMixinBase, McTextareaModule */

    /***/
    function Gncw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_TEXTAREA_VALUE_ACCESSOR", function () {
        return MC_TEXTAREA_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTextarea", function () {
        return McTextarea;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTextareaBase", function () {
        return McTextareaBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTextareaMixinBase", function () {
        return McTextareaMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTextareaModule", function () {
        return McTextareaModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var MC_TEXTAREA_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MC_TEXTAREA_VALUE_ACCESSOR');
      var nextUniqueId = 0;

      var McTextareaBase = function McTextareaBase(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
        _classCallCheck(this, McTextareaBase);

        this.defaultErrorStateMatcher = defaultErrorStateMatcher;
        this.parentForm = parentForm;
        this.parentFormGroup = parentFormGroup;
        this.ngControl = ngControl;
      }; // tslint:disable-next-line:naming-convention


      var McTextareaMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(McTextareaBase);

      var McTextarea = /*#__PURE__*/function (_McTextareaMixinBase) {
        _inherits(McTextarea, _McTextareaMixinBase);

        var _super = _createSuper(McTextarea);

        function McTextarea(elementRef, ngControl, parentForm, rawValidators, mcValidation, ngModel, parentFormGroup, defaultErrorStateMatcher, inputValueAccessor, ngZone) {
          var _this;

          _classCallCheck(this, McTextarea);

          _this = _super.call(this, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
          _this.elementRef = elementRef;
          _this.ngControl = ngControl;
          _this.rawValidators = rawValidators;
          _this.mcValidation = mcValidation;
          _this.ngModel = ngModel;
          _this.ngZone = ngZone;
          _this.canGrow = true;
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

          _this.focused = false;
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

          _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

          _this.controlType = 'textarea';
          _this.uid = "mc-textsrea-".concat(nextUniqueId++);
          _this._disabled = false;
          _this._required = false;
          _this.lineHeight = 0;
          _this.freeRowsHeight = 0;
          _this.minHeight = 0; // If no input value accessor was explicitly specified, use the element as the textarea value
          // accessor.

          _this.valueAccessor = inputValueAccessor || _this.elementRef.nativeElement;
          _this.previousNativeValue = _this.value; // Force setter to be called in case id was not specified.

          _this.id = _this.id;
          var growObserver = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(elementRef.nativeElement, 'input');
          _this.growSubscription = growObserver.subscribe(_this.grow.bind(_assertThisInitialized(_this)));
          return _this;
        }
        /**
         * Implemented as part of McFormFieldControl.
         * @docs-private
         */


        _createClass(McTextarea, [{
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);

            if (this.focused) {
              this.focused = false;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this.uid;
          }
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
          }
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

        }, {
          key: "value",
          get: function get() {
            return this.valueAccessor.value;
          },
          set: function set(value) {
            if (value !== this.value) {
              this.valueAccessor.value = value;
              this.stateChanges.next();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            setTimeout(function () {
              return _this2.grow();
            }, 0);
            this.lineHeight = parseInt(getComputedStyle(this.elementRef.nativeElement).lineHeight, 10);
            var paddingTop = parseInt(getComputedStyle(this.elementRef.nativeElement).paddingTop, 10);
            var paddingBottom = parseInt(getComputedStyle(this.elementRef.nativeElement).paddingBottom, 10); // tslint:disable-next-line:no-magic-numbers

            this.minHeight = this.lineHeight * 2 + paddingTop + paddingBottom;
            this.freeRowsHeight = this.lineHeight;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this.stateChanges.next();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.complete();
            this.growSubscription.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this.ngControl) {
              return;
            }

            if (this.mcValidation.useValidation) {
              Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["setMosaicValidation"])(this);
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              // We need to re-evaluate this on every change detection cycle, because there are some
              // error triggers that we can't subscribe to (e.g. parent form submissions). This means
              // that whatever logic is in here has to be super lean or we risk destroying the performance.
              this.updateErrorState();
            } // We need to dirty-check the native element's value, because there are some cases where
            // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
            // updating the value using `emitEvent: false`).


            this.dirtyCheckNativeValue();
          }
          /** Grow textarea height to avoid vertical scroll  */

        }, {
          key: "grow",
          value: function grow() {
            var _this3 = this;

            if (!this.canGrow) {
              return;
            }

            this.ngZone.runOutsideAngular(function () {
              var textarea = _this3.elementRef.nativeElement;
              var outerHeight = parseInt(window.getComputedStyle(textarea).height, 10);
              var diff = outerHeight - textarea.clientHeight;
              textarea.style.minHeight = 0; // this line is important to height recalculation

              var height = Math.max(_this3.minHeight, +textarea.scrollHeight + diff + _this3.freeRowsHeight);
              textarea.style.minHeight = "".concat(height, "px");
            });
          }
          /** Focuses the textarea. */

        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
          /** Callback for the cases where the focused state of the textarea changes. */

        }, {
          key: "focusChanged",
          value: function focusChanged(isFocused) {
            if (isFocused !== this.focused) {
              this.focused = isFocused;
              this.stateChanges.next();
            }
          }
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

        }, {
          key: "empty",
          get: function get() {
            return !this.elementRef.nativeElement.value && !this.isBadInput();
          }
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
          }
          /** Does some manual dirty checking on the native textarea `value` property. */

        }, {
          key: "dirtyCheckNativeValue",
          value: function dirtyCheckNativeValue() {
            var newValue = this.value;

            if (this.previousNativeValue !== newValue) {
              this.previousNativeValue = newValue;
              this.stateChanges.next();
            }
          }
          /** Checks whether the textarea is invalid based on the native validation. */

        }, {
          key: "isBadInput",
          value: function isBadInput() {
            // The `validity` property won't be present on platform-server.
            var validity = this.elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
        }]);

        return McTextarea;
      }(McTextareaMixinBase);

      McTextarea.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'textarea[mcTextarea]',
          exportAs: 'mcTextarea',
          host: {
            "class": 'mc-textarea',
            '[class.mc-textarea-resizable]': '!canGrow',
            '[attr.id]': 'id',
            '[attr.placeholder]': 'placeholder',
            '[attr.aria-invalid]': 'errorState',
            '[attr.disabled]': 'disabled || null',
            '[attr.required]': 'required',
            '(blur)': 'focusChanged(false)',
            '(focus)': 'focusChanged(true)'
          },
          providers: [{
            provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldControl"],
            useExisting: McTextarea
          }]
        }]
      }];
      /** @nocollapse */

      McTextarea.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MC_VALIDATION"]]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MC_TEXTAREA_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      McTextarea.propDecorators = {
        canGrow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var McTextareaModule = function McTextareaModule() {
        _classCallCheck(this, McTextareaModule);
      };

      McTextareaModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McCommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [McTextarea],
          declarations: [McTextarea]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map