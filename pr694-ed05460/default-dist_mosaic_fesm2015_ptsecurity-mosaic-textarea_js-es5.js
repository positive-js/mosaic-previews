(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-textarea_js"], {
    /***/
    25273: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MC_TEXTAREA_VALUE_ACCESSOR": function MC_TEXTAREA_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MC_TEXTAREA_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "McTextarea": function McTextarea() {
          return (
            /* binding */
            _McTextarea
          );
        },

        /* harmony export */
        "McTextareaBase": function McTextareaBase() {
          return (
            /* binding */
            _McTextareaBase
          );
        },

        /* harmony export */
        "McTextareaMixinBase": function McTextareaMixinBase() {
          return (
            /* binding */
            _McTextareaMixinBase
          );
        },

        /* harmony export */
        "McTextareaModule": function McTextareaModule() {
          return (
            /* binding */
            _McTextareaModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      46872);
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      50599);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      82516);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _MC_TEXTAREA_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MC_TEXTAREA_VALUE_ACCESSOR');

      var nextUniqueId = 0;

      var _McTextareaBase = function _McTextareaBase(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
        _classCallCheck(this, _McTextareaBase);

        this.defaultErrorStateMatcher = defaultErrorStateMatcher;
        this.parentForm = parentForm;
        this.parentFormGroup = parentFormGroup;
        this.ngControl = ngControl;
      }; // tslint:disable-next-line:naming-convention


      var _McTextareaMixinBase = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinErrorState)(_McTextareaBase);

      var _McTextarea = /*#__PURE__*/function (_McTextareaMixinBase2) {
        _inherits(_McTextarea, _McTextareaMixinBase2);

        var _super = _createSuper(_McTextarea);

        function _McTextarea(elementRef, ngControl, parentForm, rawValidators, mcValidation, ngModel, parentFormGroup, defaultErrorStateMatcher, inputValueAccessor, ngZone) {
          var _this;

          _classCallCheck(this, _McTextarea);

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

          _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
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
          var growObserver = (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(elementRef.nativeElement, 'input');
          _this.growSubscription = growObserver.subscribe(_this.grow.bind(_assertThisInitialized(_this)));
          return _this;
        }
        /**
         * Implemented as part of McFormFieldControl.
         * @docs-private
         */


        _createClass(_McTextarea, [{
          key: "disabled",
          get: function get() {
            if (this.ngControl && this.ngControl.disabled !== null) {
              return this.ngControl.disabled;
            }

            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

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
            this._required = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
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
              (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.setMosaicValidation)(this);
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

        return _McTextarea;
      }(_McTextareaMixinBase);
      /** @nocollapse */


      _McTextarea.ɵfac = function McTextarea_Factory(t) {
        return new (t || _McTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.MC_VALIDATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MC_TEXTAREA_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
      /** @nocollapse */


      _McTextarea.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _McTextarea,
        selectors: [["textarea", "mcTextarea", ""]],
        hostAttrs: [1, "mc-textarea"],
        hostVars: 7,
        hostBindings: function McTextarea_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function McTextarea_blur_HostBindingHandler() {
              return ctx.focusChanged(false);
            })("focus", function McTextarea_focus_HostBindingHandler() {
              return ctx.focusChanged(true);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("aria-invalid", ctx.errorState)("disabled", ctx.disabled || null)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-textarea-resizable", !ctx.canGrow);
          }
        },
        inputs: {
          canGrow: "canGrow",
          errorStateMatcher: "errorStateMatcher",
          disabled: "disabled",
          id: "id",
          placeholder: "placeholder",
          required: "required",
          value: "value"
        },
        exportAs: ["mcTextarea"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__.McFormFieldControl,
          useExisting: _McTextarea
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McTextarea, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
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
              provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__.McFormFieldControl,
              useExisting: _McTextarea
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.MC_VALIDATION]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MC_TEXTAREA_VALUE_ACCESSOR]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          canGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _McTextareaModule = function _McTextareaModule() {
        _classCallCheck(this, _McTextareaModule);
      };
      /** @nocollapse */


      _McTextareaModule.ɵfac = function McTextareaModule_Factory(t) {
        return new (t || _McTextareaModule)();
      };
      /** @nocollapse */


      _McTextareaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _McTextareaModule,
        declarations: [_McTextarea],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
        exports: [_McTextarea]
      });
      /** @nocollapse */

      _McTextareaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McTextareaModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
            exports: [_McTextarea],
            declarations: [_McTextarea]
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
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-textarea_js-es5.js.map