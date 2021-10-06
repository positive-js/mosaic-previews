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

  (self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js"], {
    /***/
    23268: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": function MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "McRadioButton": function McRadioButton() {
          return (
            /* binding */
            _McRadioButton
          );
        },

        /* harmony export */
        "McRadioButtonMixinBase": function McRadioButtonMixinBase() {
          return (
            /* binding */
            _McRadioButtonMixinBase
          );
        },

        /* harmony export */
        "McRadioChange": function McRadioChange() {
          return (
            /* binding */
            _McRadioChange
          );
        },

        /* harmony export */
        "McRadioGroup": function McRadioGroup() {
          return (
            /* binding */
            _McRadioGroup
          );
        },

        /* harmony export */
        "McRadioGroupBase": function McRadioGroupBase() {
          return (
            /* binding */
            _McRadioGroupBase
          );
        },

        /* harmony export */
        "McRadioGroupMixinBase": function McRadioGroupMixinBase() {
          return (
            /* binding */
            _McRadioGroupMixinBase
          );
        },

        /* harmony export */
        "McRadioModule": function McRadioModule() {
          return (
            /* binding */
            _McRadioModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      46872);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707); // Increasing integer for generating unique ids for radio components.


      var _c0 = ["input"];
      var _c1 = ["*"];
      var nextUniqueId = 0;
      /** Change event object emitted by McRadio. */

      var _McRadioChange = function _McRadioChange(
      /** The McRadioButton that emits the change event. */
      source,
      /** The value of the McRadioButton. */
      value) {
        _classCallCheck(this, _McRadioChange);

        this.source = source;
        this.value = value;
      }; // Boilerplate for applying mixins to McRadioGroup.

      /** @docs-private */


      var _McRadioGroupBase = // tslint:disable-next-line:naming-convention
      function _McRadioGroupBase(_elementRef) {
        _classCallCheck(this, _McRadioGroupBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var _McRadioGroupMixinBase = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(_McRadioGroupBase);
      /**
       * Provider Expression that allows mc-radio-group to register as a ControlValueAccessor. This
       * allows it to support [(ngModel)] and ngControl.
       * @docs-private
       */


      var _MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function () {
          return _McRadioGroup;
        }),
        multi: true
      };

      var _McRadioGroup = /*#__PURE__*/function (_McRadioGroupMixinBas) {
        _inherits(_McRadioGroup, _McRadioGroupMixinBas);

        var _super = _createSuper(_McRadioGroup);

        function _McRadioGroup(elementRef, _changeDetector) {
          var _this;

          _classCallCheck(this, _McRadioGroup);

          _this = _super.call(this, elementRef);
          _this._changeDetector = _changeDetector;
          /**
           * Event emitted when the group value changes.
           * Change events are only emitted when the value changes due to user interaction with
           * a radio button (the same behavior as `<input type-"radio">`).
           */

          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Selected value for group. Should equal the value of the selected radio button if there *is*
           * a corresponding radio button with a matching value. If there is *not* such a corresponding
           * radio button, this value persists to be applied in case a new radio button is added with a
           * matching value.
           */

          _this._value = null;
          /** The HTML name attribute applied to radio buttons in this group. */

          _this._name = "mc-radio-group-".concat(nextUniqueId++);
          /** The currently selected radio button. Should match value. */

          _this._selected = null;
          /** Whether the `value` has been set to its initial value. */

          _this.isInitialized = false;
          /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

          _this._labelPosition = 'after';
          /** Whether the radio group is disabled. */

          _this._disabled = false;
          /** Whether the radio group is required. */

          _this._required = false;
          /** The method to be called in order to update ngModel */
          // tslint:disable-next-line

          _this.controlValueAccessorChangeFn = function () {};
          /**
           * onTouch function registered via registerOnTouch (ControlValueAccessor).
           * @docs-private
           */
          // tslint:disable-next-line


          _this.onTouched = function () {};

          return _this;
        }
        /** Name of the radio button group. All radio buttons inside this group will use this name. */


        _createClass(_McRadioGroup, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(value) {
            this._name = value;
            this.updateRadioButtonNames();
          }
          /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

        }, {
          key: "labelPosition",
          get: function get() {
            return this._labelPosition;
          },
          set: function set(v) {
            this._labelPosition = v === 'before' ? 'before' : 'after';
            this.markRadiosForCheck();
          }
          /** Value of the radio button. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (this._value !== newValue) {
              // Set this before proceeding to ensure no circular loop occurs with selection.
              this._value = newValue;
              this.updateSelectedRadioFromValue();
              this.checkSelectedRadioButton();
            }
          }
          /** Whether the radio button is selected. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this.checkSelectedRadioButton();
          }
          /** Whether the radio group is disabled */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
            this.markRadiosForCheck();
          }
          /** Whether the radio group is required */

        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
            this.markRadiosForCheck();
          }
        }, {
          key: "checkSelectedRadioButton",
          value: function checkSelectedRadioButton() {
            if (this._selected && !this._selected.checked) {
              this._selected.checked = true;
            }
          }
          /**
           * Initialize properties once content children are available.
           * This allows us to propagate relevant attributes to associated buttons.
           */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            // Mark this component as initialized in AfterContentInit because the initial value can
            // possibly be set by NgModel on McRadioGroup, and it is possible that the OnInit of the
            // NgModel occurs *after* the OnInit of the McRadioGroup.
            this.isInitialized = true;
          }
          /**
           * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
           * radio buttons upon their blur.
           */

        }, {
          key: "touch",
          value: function touch() {
            if (this.onTouched) {
              this.onTouched();
            }
          }
          /** Dispatch change event with current selection and group value. */

        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent() {
            if (this.isInitialized) {
              this.change.emit(new _McRadioChange(this._selected, this._value));
            }
          }
        }, {
          key: "markRadiosForCheck",
          value: function markRadiosForCheck() {
            if (this.radios) {
              this.radios.forEach(function (radio) {
                return radio.markForCheck();
              });
            }
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            this._changeDetector.markForCheck();
          }
          /**
           * Registers a callback to be triggered when the model value changes.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the control is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
           * @param isDisabled Whether the control should be disabled.
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetector.markForCheck();
          }
        }, {
          key: "updateRadioButtonNames",
          value: function updateRadioButtonNames() {
            var _this2 = this;

            if (this.radios) {
              this.radios.forEach(function (radio) {
                radio.name = _this2.name;
              });
            }
          }
          /** Updates the `selected` radio button from the internal _value state. */

        }, {
          key: "updateSelectedRadioFromValue",
          value: function updateSelectedRadioFromValue() {
            var _this3 = this;

            // If the value already matches the selected radio, do nothing.
            var isAlreadySelected = this._selected !== null && this._selected.value === this._value;

            if (this.radios != null && !isAlreadySelected) {
              this._selected = null;
              this.radios.forEach(function (radio) {
                radio.checked = _this3.value === radio.value;

                if (radio.checked) {
                  _this3._selected = radio;
                }
              });
            }
          }
        }]);

        return _McRadioGroup;
      }(_McRadioGroupMixinBase);
      /** @nocollapse */


      _McRadioGroup.ɵfac = function McRadioGroup_Factory(t) {
        return new (t || _McRadioGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };
      /** @nocollapse */


      _McRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _McRadioGroup,
        selectors: [["mc-radio-group"]],
        contentQueries: function McRadioGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _McRadioButton, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.radios = _t);
          }
        },
        hostAttrs: ["role", "radiogroup", 1, "mc-radio-group"],
        inputs: {
          name: "name",
          labelPosition: "labelPosition",
          value: "value",
          selected: "selected",
          disabled: "disabled",
          required: "required"
        },
        outputs: {
          change: "change"
        },
        exportAs: ["mcRadioGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_McRadioGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: 'mc-radio-group',
            exportAs: 'mcRadioGroup',
            host: {
              role: 'radiogroup',
              "class": 'mc-radio-group'
            },
            providers: [_MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          radios: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
            args: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function () {
              return _McRadioButton;
            }), {
              descendants: true
            }]
          }]
        });
      })(); // Boilerplate for applying mixins to McRadioButton.

      /** @docs-private */
      // tslint:disable-next-line:naming-convention


      var McRadioButtonBase = // tslint:disable-next-line:naming-convention
      function McRadioButtonBase(_elementRef) {
        _classCallCheck(this, McRadioButtonBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var _McRadioButtonMixinBase = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)(McRadioButtonBase));

      var _McRadioButton = /*#__PURE__*/function (_McRadioButtonMixinBa) {
        _inherits(_McRadioButton, _McRadioButtonMixinBa);

        var _super2 = _createSuper(_McRadioButton);

        function _McRadioButton(radioGroup, elementRef, _changeDetector, focusMonitor, _radioDispatcher) {
          var _this4;

          _classCallCheck(this, _McRadioButton);

          _this4 = _super2.call(this, elementRef);
          _this4._changeDetector = _changeDetector;
          _this4.focusMonitor = focusMonitor;
          _this4._radioDispatcher = _radioDispatcher;
          /**
           * Event emitted when the checked state of this radio button changes.
           * Change events are only emitted when the value changes due to user interaction with
           * the radio button (the same behavior as `<input type-"radio">`).
           */

          _this4.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          _this4.isFocused = false;
          /* tslint:disable:member-ordering */

          _this4.uniqueId = "mc-radio-".concat(++nextUniqueId);
          /** Whether this radio is checked. */

          _this4._checked = false;
          /** Value assigned to this radio. */

          _this4._value = null;
          /** Unregister function for _radioDispatcher */
          // tslint:disable-next-line

          _this4.removeUniqueSelectionListener = function () {};

          _this4.id = _this4.uniqueId;
          _this4.radioGroup = radioGroup;
          _this4.removeUniqueSelectionListener = _radioDispatcher.listen(function (id, name) {
            if (id !== _this4.id && name === _this4.name) {
              _this4.checked = false;
            }
          });
          return _this4;
        }
        /** Whether this radio button is checked. */


        _createClass(_McRadioButton, [{
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            var newCheckedState = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);

            if (this._checked !== newCheckedState) {
              this._checked = newCheckedState;

              if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                this.radioGroup.selected = this;
              } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                // When unchecking the selected radio button, update the selected radio
                // property on the group.
                this.radioGroup.selected = null;
              }

              if (newCheckedState) {
                // Notify all radio buttons with the same name to un-check.
                this._radioDispatcher.notify(this.id, this.name);
              }

              this._changeDetector.markForCheck();
            }
          }
          /** The value of this radio button. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            if (this._value !== value) {
              this._value = value;

              if (this.radioGroup != null) {
                if (!this.checked) {
                  // Update checked when the value changed to match the radio group's value
                  this.checked = this.radioGroup.value === value;
                }

                if (this.checked) {
                  this.radioGroup.selected = this;
                }
              }
            }
          }
          /** Whether the radio button is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.radioGroup != null && this.radioGroup.disabled;
          },
          set: function set(value) {
            var newDisabledState = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);

            if (this._disabled !== newDisabledState) {
              this._disabled = newDisabledState;

              this._changeDetector.markForCheck();
            }
          }
          /** Whether the radio button is required. */

        }, {
          key: "required",
          get: function get() {
            return this._required || this.radioGroup && this.radioGroup.required;
          },
          set: function set(value) {
            this._required = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
          }
          /** Whether the label should appear after or before the radio button. Defaults to 'after' */

        }, {
          key: "labelPosition",
          get: function get() {
            return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
          },
          set: function set(value) {
            this._labelPosition = value;
          }
          /** ID of the native input element inside `<mc-radio-button>` */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this.uniqueId, "-input");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.radioGroup) {
              // If the radio is inside a radio group, determine if it should be checked
              this.checked = this.radioGroup.value === this._value; // Copy name from parent radio group

              this.name = this.radioGroup.name;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            this.focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              if (!focusOrigin && _this5.radioGroup) {
                _this5.radioGroup.touch();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this._elementRef);
            this.removeUniqueSelectionListener();
          }
          /** Focuses the radio button. */

        }, {
          key: "focus",
          value: function focus() {
            this.inputElement.nativeElement.focus();
          }
          /**
           * Marks the radio button as needing checking for change detection.
           * This method is exposed because the parent radio group will directly
           * update bound properties of the radio button.
           */

        }, {
          key: "markForCheck",
          value: function markForCheck() {
            // When group value changes, the button will not be notified. Use `markForCheck` to explicit
            // update radio button's status
            this._changeDetector.markForCheck();
          }
        }, {
          key: "onInputClick",
          value: function onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `radio-button` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the `change` output.
            event.stopPropagation();
            var groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
            this.checked = true;
            this.emitChangeEvent();

            if (this.radioGroup) {
              this.radioGroup.controlValueAccessorChangeFn(this.value);
              this.radioGroup.touch();

              if (groupValueChanged) {
                this.radioGroup.emitChangeEvent();
              }
            }
          }
          /** Dispatch change event with current value. */

        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent() {
            this.change.emit(new _McRadioChange(this, this._value));
          }
        }]);

        return _McRadioButton;
      }(_McRadioButtonMixinBase);
      /** @nocollapse */


      _McRadioButton.ɵfac = function McRadioButton_Factory(t) {
        return new (t || _McRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_McRadioGroup, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
      };
      /** @nocollapse */


      _McRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _McRadioButton,
        selectors: [["mc-radio-button"]],
        viewQuery: function McRadioButton_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mc-radio-button"],
        hostVars: 5,
        hostBindings: function McRadioButton_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-selected", ctx.checked)("mc-disabled", ctx.disabled);
          }
        },
        inputs: {
          color: "color",
          tabIndex: "tabIndex",
          checked: "checked",
          value: "value",
          disabled: "disabled",
          required: "required",
          labelPosition: "labelPosition",
          name: "name",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
          isFocused: "isFocused",
          id: "id"
        },
        outputs: {
          change: "change"
        },
        exportAs: ["mcRadioButton"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 8,
        vars: 12,
        consts: [[1, "mc-radio-label"], ["label", ""], ["type", "radio", 1, "mc-radio-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "required", "change", "click"], ["input", ""], [1, "mc-radio-label-content"], [1, "mc-radio-button__outer-circle"], [1, "mc-radio-button__inner-circle"]],
        template: function McRadioButton_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function McRadioButton_Template_input_change_2_listener($event) {
              return ctx.onInputChange($event);
            })("click", function McRadioButton_Template_input_click_2_listener($event) {
              return ctx.onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("required", ctx.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-radio-label-before", ctx.labelPosition == "before");
          }
        },
        styles: [".mc-radio-button{display:inline-block}.mc-radio-label{display:inline-flex;align-items:center;vertical-align:middle;cursor:pointer;white-space:nowrap;width:100%}.mc-radio-label-content{display:inline-block;position:relative;order:0;line-height:inherit;padding-left:calc(14px + 8px);padding-left:calc(var(--mc-radio-size-size, 14px) + var(--mc-radio-size-padding, 8px));padding-right:0}.mc-radio-label-content .mc-radio-button__outer-circle,.mc-radio-label-content .mc-radio-button__inner-circle{box-sizing:content-box;position:absolute;content:\"\";border-style:solid;border-radius:50%}.mc-radio-label-content .mc-radio-button__outer-circle{left:0;top:calc(50% - 8px);width:14px;width:var(--mc-radio-size-size, 14px);height:14px;height:var(--mc-radio-size-size, 14px);border-width:1px}.mc-radio-label-content .mc-radio-button__inner-circle{display:none;left:1px;top:calc(50% - 7px);width:6px;height:6px;border-width:4px}[dir=rtl] .mc-radio-label-content{padding-right:8px;padding-right:var(--mc-radio-size-padding, 8px);padding-left:0}.mc-radio-input{position:absolute;outline:none;opacity:0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_McRadioButton, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mc-radio-button',
            templateUrl: 'radio.component.html',
            styleUrls: ['radio.scss'],
            inputs: ['color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            exportAs: 'mcRadioButton',
            host: {
              "class": 'mc-radio-button',
              '[attr.id]': 'id',
              '[class.mc-selected]': 'checked',
              '[class.mc-disabled]': 'disabled'
            }
          }]
        }], function () {
          return [{
            type: _McRadioGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher
          }];
        }, {
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['aria-labelledby']
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
            args: ['aria-describedby']
          }],
          inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['input', {
              "static": false
            }]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          isFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }]
        });
      })();

      var _McRadioModule = function _McRadioModule() {
        _classCallCheck(this, _McRadioModule);
      };
      /** @nocollapse */


      _McRadioModule.ɵfac = function McRadioModule_Factory(t) {
        return new (t || _McRadioModule)();
      };
      /** @nocollapse */


      _McRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _McRadioModule,
        declarations: [_McRadioGroup, _McRadioButton],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule],
        exports: [_McRadioGroup, _McRadioButton]
      });
      /** @nocollapse */

      _McRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_McRadioModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule],
            exports: [_McRadioGroup, _McRadioButton],
            declarations: [_McRadioGroup, _McRadioButton]
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
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-radio_js-es5.js.map