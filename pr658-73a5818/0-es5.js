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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "UYLH":
    /*!*************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-checkbox.js ***!
      \*************************************************************************/

    /*! exports provided: MC_CHECKBOX_CLICK_ACTION, MC_CHECKBOX_CONTROL_VALUE_ACCESSOR, MC_CHECKBOX_REQUIRED_VALIDATOR, McCheckbox, McCheckboxBase, McCheckboxChange, McCheckboxMixinBase, McCheckboxModule, McCheckboxRequiredValidator, TransitionCheckState */

    /***/
    function UYLH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_CHECKBOX_CLICK_ACTION", function () {
        return MC_CHECKBOX_CLICK_ACTION;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_CHECKBOX_CONTROL_VALUE_ACCESSOR", function () {
        return MC_CHECKBOX_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_CHECKBOX_REQUIRED_VALIDATOR", function () {
        return MC_CHECKBOX_REQUIRED_VALIDATOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCheckbox", function () {
        return McCheckbox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCheckboxBase", function () {
        return McCheckboxBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCheckboxChange", function () {
        return McCheckboxChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCheckboxMixinBase", function () {
        return McCheckboxMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCheckboxModule", function () {
        return McCheckboxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCheckboxRequiredValidator", function () {
        return McCheckboxRequiredValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransitionCheckState", function () {
        return TransitionCheckState;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * Injection token that can be used to specify the checkbox click behavior.
       */


      var _c0 = ["input"];
      var _c1 = ["*"];
      var MC_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mc-checkbox-click-action'); // Increasing integer for generating unique ids for checkbox components.

      var nextUniqueId = 0;
      /**
       * Provider Expression that allows mc-checkbox to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)].
       * @docs-private
       */

      var MC_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return McCheckbox;
        }),
        multi: true
      };
      /**
       * Represents the different states that require custom transitions between them.
       * @docs-private
       */

      var TransitionCheckState;

      (function (TransitionCheckState) {
        /** The initial state of the component before any user interaction. */
        TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
        /** The state representing the component when it's becoming checked. */

        TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
        /** The state representing the component when it's becoming unchecked. */

        TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
        /** The state representing the component when it's becoming indeterminate. */

        TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
      })(TransitionCheckState || (TransitionCheckState = {}));
      /** Change event object emitted by McCheckbox. */


      var McCheckboxChange = function McCheckboxChange() {
        _classCallCheck(this, McCheckboxChange);
      }; // Boilerplate for applying mixins to McCheckbox.

      /** @docs-private */


      var McCheckboxBase = // tslint:disable-next-line:naming-convention
      function McCheckboxBase(_elementRef) {
        _classCallCheck(this, McCheckboxBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McCheckboxMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(McCheckboxBase)));
      /**
       * A mosaic checkbox component. Supports all of the functionality of an HTML5 checkbox,
       * and exposes a similar API. A McCheckbox can be either checked, unchecked, indeterminate, or
       * disabled. Note that all additional accessibility attributes are taken care of by the component,
       * so there is no need to provide them yourself. However, if you want to omit a label and still
       * have the checkbox be accessible, you may supply an [aria-label] input.
       */

      var McCheckbox = /*#__PURE__*/function (_McCheckboxMixinBase) {
        _inherits(McCheckbox, _McCheckboxMixinBase);

        var _super = _createSuper(McCheckbox);

        function McCheckbox(elementRef, _changeDetectorRef, _focusMonitor, _clickAction) {
          var _this;

          _classCallCheck(this, McCheckbox);

          _this = _super.call(this, elementRef);
          _this._changeDetectorRef = _changeDetectorRef;
          _this._focusMonitor = _focusMonitor;
          _this._clickAction = _clickAction;
          /**
           * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
           * take precedence so this may be omitted.
           */

          _this.ariaLabel = '';
          /**
           * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
           */

          _this.ariaLabelledby = null;
          /** Whether the label should appear after or before the checkbox. Defaults to 'after' */

          _this.labelPosition = 'after';
          /** Name value will be applied to the input element if present */

          _this.name = null;
          /** Event emitted when the checkbox's `checked` value changes. */

          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** Event emitted when the checkbox's `indeterminate` value changes. */

          _this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          _this._checked = false;
          _this._disabled = false;
          _this._indeterminate = false;
          _this.uniqueId = "mc-checkbox-".concat(++nextUniqueId);
          _this.currentAnimationClass = '';
          _this.currentCheckState = TransitionCheckState.Init;
          /**
           * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
           * @docs-private
           */
          // tslint:disable-next-line:no-empty

          _this.onTouched = function () {}; // tslint:disable-next-line:no-empty


          _this.controlValueAccessorChangeFn = function () {};

          _this.id = _this.uniqueId;
          return _this;
        }
        /** Returns the unique id for the visual hidden input. */


        _createClass(McCheckbox, [{
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this.uniqueId, "-input");
          }
          /** Whether the checkbox is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(value);
          }
          /**
           * Whether the checkbox is checked.
           */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            if (value !== this.checked) {
              this._checked = value;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Whether the checkbox is disabled. This fully overrides the implementation provided by
           * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            if (value !== this.disabled) {
              this._disabled = value;

              this._changeDetectorRef.markForCheck();
            }
          }
          /**
           * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
           * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
           * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
           * set to false.
           */

        }, {
          key: "indeterminate",
          get: function get() {
            return this._indeterminate;
          },
          set: function set(value) {
            var changed = value !== this._indeterminate;
            this._indeterminate = value;

            if (changed) {
              if (this._indeterminate) {
                this.transitionCheckState(TransitionCheckState.Indeterminate);
              } else {
                this.transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
              }

              this.indeterminateChange.emit(this._indeterminate);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            this._focusMonitor.monitor(this.inputElement.nativeElement).subscribe(function (focusOrigin) {
              return _this2.onInputFocusChange(focusOrigin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this.inputElement.nativeElement);
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "onLabelTextChange",
          value: function onLabelTextChange() {
            // This method is getting called whenever the label of the checkbox changes.
            // Since the checkbox uses the OnPush strategy we need to notify it about the change
            // that has been recognized by the cdkObserveContent directive.
            this._changeDetectorRef.markForCheck();
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.controlValueAccessorChangeFn = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "getAriaChecked",
          value: function getAriaChecked() {
            return this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false';
          }
          /** Toggles the `checked` state of the checkbox. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;
          }
          /**
           * Event handler for checkbox input element.
           * Toggles checked state if element is not disabled.
           * Do not toggle on (change) event since IE doesn't fire change event when
           *   indeterminate checkbox is clicked.
           * @param event Input click event
           */

        }, {
          key: "onInputClick",
          value: function onInputClick(event) {
            var _this3 = this;

            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `checkbox` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation(); // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click

            if (!this.disabled && this._clickAction !== 'noop') {
              // When user manually click on the checkbox, `indeterminate` is set to false.
              if (this.indeterminate && this._clickAction !== 'check') {
                Promise.resolve().then(function () {
                  _this3._indeterminate = false;

                  _this3.indeterminateChange.emit(_this3._indeterminate);
                });
              }

              this.toggle();
              this.transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked); // Emit our custom change event if the native input emitted one.
              // It is important to only emit it, if the native input triggered one, because
              // we don't want to trigger a change event, when the `checked` variable changes for example.

              this.emitChangeEvent();
            } else if (!this.disabled && this._clickAction === 'noop') {
              // Reset native input when clicked with noop. The native checkbox becomes checked after
              // click, reset it to be align with `checked` value of `mc-checkbox`.
              this.inputElement.nativeElement.checked = this.checked;
              this.inputElement.nativeElement.indeterminate = this.indeterminate;
            }
          }
          /** Focuses the checkbox. */

        }, {
          key: "focus",
          value: function focus() {
            this._focusMonitor.focusVia(this.inputElement.nativeElement, 'keyboard');
          }
        }, {
          key: "onInteractionEvent",
          value: function onInteractionEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
          }
        }, {
          key: "transitionCheckState",
          value: function transitionCheckState(newState) {
            var oldState = this.currentCheckState;
            var element = this._elementRef.nativeElement;

            if (oldState === newState) {
              return;
            }

            if (this.currentAnimationClass.length > 0) {
              element.classList.remove(this.currentAnimationClass);
            }

            this.currentCheckState = newState;

            if (this.currentAnimationClass.length > 0) {
              element.classList.add(this.currentAnimationClass);
            }
          }
        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent() {
            var event = new McCheckboxChange();
            event.source = this;
            event.checked = this.checked;
            this.controlValueAccessorChangeFn(this.checked);
            this.change.emit(event);
          }
          /** Function is called whenever the focus changes for the input element. */

        }, {
          key: "onInputFocusChange",
          value: function onInputFocusChange(focusOrigin) {
            if (focusOrigin) {
              this.onTouched();
            }
          }
        }]);

        return McCheckbox;
      }(McCheckboxMixinBase);

      McCheckbox.ɵfac = function McCheckbox_Factory(t) {
        return new (t || McCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MC_CHECKBOX_CLICK_ACTION, 8));
      };

      McCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: McCheckbox,
        selectors: [["mc-checkbox"]],
        viewQuery: function McCheckbox_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mc-checkbox"],
        hostVars: 10,
        hostBindings: function McCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-indeterminate", ctx.indeterminate)("mc-checked", ctx.checked)("mc-disabled", ctx.disabled)("mc-checkbox-label-before", ctx.labelPosition == "before");
          }
        },
        inputs: {
          color: "color",
          tabIndex: "tabIndex",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          labelPosition: "labelPosition",
          name: "name",
          id: "id",
          required: "required",
          checked: "checked",
          disabled: "disabled",
          indeterminate: "indeterminate",
          value: "value"
        },
        outputs: {
          change: "change",
          indeterminateChange: "indeterminateChange"
        },
        exportAs: ["mcCheckbox"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MC_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 14,
        consts: [[1, "mc-checkbox-layout"], ["label", ""], [1, "mc-checkbox-inner-container"], ["type", "checkbox", 1, "mc-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "indeterminate", "change", "click"], ["input", ""], [1, "mc-checkbox-frame"], [1, "mc-checkbox-checkmark", "mc", "mc-check_16"], [1, "mc-checkbox-mixedmark", "mc", "mc-minus_16"], [1, "mc-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""]],
        template: function McCheckbox_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function McCheckbox_Template_input_change_3_listener($event) {
              return ctx.onInteractionEvent($event);
            })("click", function McCheckbox_Template_input_click_3_listener($event) {
              return ctx.onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function McCheckbox_Template_span_cdkObserveContent_8_listener() {
              return ctx.onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("indeterminate", ctx.indeterminate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx.getAriaChecked());
          }
        },
        styles: [".mc-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:3px;box-sizing:border-box;pointer-events:none}.mc-checkbox-checkmark,.mc-checkbox-mixedmark{display:none;position:absolute;top:-1px;left:-1px;right:0;bottom:0}.mc-checkbox-frame{background-color:transparent;border-width:var(--mc-checkbox-size-border-width,1px);border-style:solid;box-shadow:var(--mc-checkbox-size-toggle-box-shadow,inset 0 0 1px 0 rgba(0,0,0,.2))}.mc-checkbox{display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent}.mc-checkbox.mc-checked .mc-checkbox-checkmark{display:block}.mc-checkbox.mc-checked .mc-checkbox-mixedmark,.mc-checkbox.mc-indeterminate .mc-checkbox-checkmark{display:none}.mc-checkbox.mc-indeterminate .mc-checkbox-mixedmark{display:block}.mc-checkbox.mc-disabled{cursor:default}.mc-checkbox.mc-disabled .mc-checkbox-frame{box-shadow:none}.mc-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap;width:100%}.mc-checkbox-inner-container{display:inline-block;height:var(--mc-checkbox-size-width,16px);line-height:0;margin-right:8px;order:0;position:relative;align-self:center;white-space:nowrap;width:var(--mc-checkbox-size-width,16px);flex-shrink:0}[dir=rtl] .mc-checkbox-inner-container{margin-left:8px;margin-right:auto}.mc-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mc-checkbox-label-before .mc-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mc-checkbox-label-before .mc-checkbox-inner-container{margin-left:auto;margin-right:8px}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCheckbox.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MC_CHECKBOX_CLICK_ACTION]
          }]
        }];
      };

      McCheckbox.propDecorators = {
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['aria-labelledby']
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        indeterminateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input', {
            "static": false
          }]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        indeterminate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McCheckbox, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'mc-checkbox',
            exportAs: 'mcCheckbox',
            template: "<label [attr.for]=\"inputId\" class=\"mc-checkbox-layout\" #label>\n    <div class=\"mc-checkbox-inner-container\"\n         [class.mc-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n        <input #input\n               type=\"checkbox\"\n               class=\"mc-checkbox-input cdk-visually-hidden\"\n               [id]=\"inputId\"\n               [required]=\"required\"\n               [checked]=\"checked\"\n               [attr.value]=\"value\"\n               [disabled]=\"disabled\"\n               [attr.name]=\"name\"\n               [tabIndex]=\"tabIndex\"\n               [indeterminate]=\"indeterminate\"\n               [attr.aria-label]=\"ariaLabel || null\"\n               [attr.aria-labelledby]=\"ariaLabelledby\"\n               [attr.aria-checked]=\"getAriaChecked()\"\n               (change)=\"onInteractionEvent($event)\"\n               (click)=\"onInputClick($event)\">\n        <div class=\"mc-checkbox-frame\">\n            <i class=\"mc-checkbox-checkmark mc mc-check_16\"></i>\n            <i class=\"mc-checkbox-mixedmark mc mc-minus_16\"></i>\n        </div>\n    </div>\n\n    <span class=\"mc-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"onLabelTextChange()\">\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            host: {
              "class": 'mc-checkbox',
              '[id]': 'id',
              '[attr.id]': 'id',
              '[class.mc-indeterminate]': 'indeterminate',
              '[class.mc-checked]': 'checked',
              '[class.mc-disabled]': 'disabled',
              '[class.mc-checkbox-label-before]': 'labelPosition == "before"'
            },
            providers: [MC_CHECKBOX_CONTROL_VALUE_ACCESSOR],
            inputs: ['color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:3px;box-sizing:border-box;pointer-events:none}.mc-checkbox-checkmark,.mc-checkbox-mixedmark{display:none;position:absolute;top:-1px;left:-1px;right:0;bottom:0}.mc-checkbox-frame{background-color:transparent;border-width:var(--mc-checkbox-size-border-width,1px);border-style:solid;box-shadow:var(--mc-checkbox-size-toggle-box-shadow,inset 0 0 1px 0 rgba(0,0,0,.2))}.mc-checkbox{display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent}.mc-checkbox.mc-checked .mc-checkbox-checkmark{display:block}.mc-checkbox.mc-checked .mc-checkbox-mixedmark,.mc-checkbox.mc-indeterminate .mc-checkbox-checkmark{display:none}.mc-checkbox.mc-indeterminate .mc-checkbox-mixedmark{display:block}.mc-checkbox.mc-disabled{cursor:default}.mc-checkbox.mc-disabled .mc-checkbox-frame{box-shadow:none}.mc-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap;width:100%}.mc-checkbox-inner-container{display:inline-block;height:var(--mc-checkbox-size-width,16px);line-height:0;margin-right:8px;order:0;position:relative;align-self:center;white-space:nowrap;width:var(--mc-checkbox-size-width,16px);flex-shrink:0}[dir=rtl] .mc-checkbox-inner-container{margin-left:8px;margin-right:auto}.mc-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mc-checkbox-label-before .mc-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mc-checkbox-label-before .mc-checkbox-inner-container{margin-left:auto;margin-right:8px}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [MC_CHECKBOX_CLICK_ACTION]
            }]
          }];
        }, {
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['aria-labelledby']
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['input', {
              "static": false
            }]
          }]
        });
      })();

      var MC_CHECKBOX_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return McCheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Mosaic checkbox's required attribute in template-driven checkbox.
       * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
       * work with `mc-checkbox`.
       */

      var McCheckboxRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(McCheckboxRequiredValidator, _angular_forms__WEBPA);

        var _super2 = _createSuper(McCheckboxRequiredValidator);

        function McCheckboxRequiredValidator() {
          _classCallCheck(this, McCheckboxRequiredValidator);

          return _super2.apply(this, arguments);
        }

        return McCheckboxRequiredValidator;
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"]);

      McCheckboxRequiredValidator.ɵfac = function McCheckboxRequiredValidator_Factory(t) {
        return ɵMcCheckboxRequiredValidator_BaseFactory(t || McCheckboxRequiredValidator);
      };

      McCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: McCheckboxRequiredValidator,
        selectors: [["mc-checkbox", "required", "", "formControlName", ""], ["mc-checkbox", "required", "", "formControl", ""], ["mc-checkbox", "required", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function McCheckboxRequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("required", ctx.required ? "" : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MC_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
      });

      var ɵMcCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](McCheckboxRequiredValidator);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McCheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: "mc-checkbox[required][formControlName],\n             mc-checkbox[required][formControl], mc-checkbox[required][ngModel]",
            providers: [MC_CHECKBOX_REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], null, null);
      })();

      var McCheckboxModule = function McCheckboxModule() {
        _classCallCheck(this, McCheckboxModule);
      };

      McCheckboxModule.ɵfac = function McCheckboxModule_Factory(t) {
        return new (t || McCheckboxModule)();
      };

      McCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: McCheckboxModule
      });
      McCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](McCheckboxModule, {
          declarations: function declarations() {
            return [McCheckbox, McCheckboxRequiredValidator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
          },
          exports: function exports() {
            return [McCheckbox, McCheckboxRequiredValidator];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McCheckboxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            exports: [McCheckbox, McCheckboxRequiredValidator],
            declarations: [McCheckbox, McCheckboxRequiredValidator]
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
//# sourceMappingURL=0-es5.js.map