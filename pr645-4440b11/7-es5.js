(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
    /***/
    "I+yp":
    /*!******************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-button-toggle.js ***!
      \******************************************************************************/

    /*! exports provided: MC_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, McButtonToggle, McButtonToggleChange, McButtonToggleGroup, McButtonToggleModule */

    /***/
    function IYp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
        return MC_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McButtonToggle", function () {
        return McButtonToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McButtonToggleChange", function () {
        return McButtonToggleChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McButtonToggleGroup", function () {
        return McButtonToggleGroup;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McButtonToggleModule", function () {
        return McButtonToggleModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /**
       * Provider Expression that allows mc-button-toggle-group to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)].
       * @docs-private
       */


      var _c0 = ["*"];
      var MC_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return McButtonToggleGroup;
        }),
        multi: true
      };
      /** Change event object emitted by MсButtonToggle. */

      var McButtonToggleChange = function McButtonToggleChange(
      /** The MсButtonToggle that emits the event. */
      source,
      /** The value assigned to the MсButtonToggle. */
      value) {
        _classCallCheck(this, McButtonToggleChange);

        this.source = source;
        this.value = value;
      };
      /** Exclusive selection button toggle group that behaves like a radio-button group. */


      var McButtonToggleGroup = /*#__PURE__*/function () {
        function McButtonToggleGroup(_changeDetector) {
          _classCallCheck(this, McButtonToggleGroup);

          this._changeDetector = _changeDetector;
          /**
           * Event that emits whenever the value of the group changes.
           * Used to facilitate two-way data binding.
           * @docs-private
           */

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /** Event emitted when the group's value changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this._vertical = false;
          this._multiple = false;
          this._disabled = false;
          /**
           * The method to be called in order to update ngModel.
           * Now `ngModel` binding is not supported in multiple selection mode.
           */
          // tslint:disable-next-line:no-empty

          this.controlValueAccessorChangeFn = function () {};
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
          // tslint:disable-next-line:no-empty


          this.onTouched = function () {};
        }
        /** Whether the toggle group is vertical. */


        _createClass(McButtonToggleGroup, [{
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Value of the toggle group. */

        }, {
          key: "value",
          get: function get() {
            var selected = this.selectionModel ? this.selectionModel.selected : [];

            if (this.multiple) {
              return selected.map(function (toggle) {
                return toggle.value;
              });
            }

            return selected[0] ? selected[0].value : undefined;
          },
          set: function set(newValue) {
            this.setSelectionByValue(newValue);
            this.valueChange.emit(this.value);
          }
          /** Selected button toggles in the group. */

        }, {
          key: "selected",
          get: function get() {
            var selected = this.selectionModel.selected;
            return this.multiple ? selected : selected[0] || null;
          }
          /** Whether multiple button toggles can be selected. */

        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
          /** Whether multiple button toggle group is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (!this.buttonToggles) {
              return;
            }

            this.buttonToggles.forEach(function (toggle) {
              return toggle.markForCheck();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](this.multiple, undefined, false);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this$selectionModel;

            (_this$selectionModel = this.selectionModel).select.apply(_this$selectionModel, _toConsumableArray(this.buttonToggles.filter(function (toggle) {
              return toggle.checked;
            })));

            this.disabled = this._disabled;
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value Value to be set to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            this._changeDetector.markForCheck();
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
          /** Dispatch change event with current selection and group value. */

        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent() {
            var selected = this.selected;
            var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
            var event = new McButtonToggleChange(source, this.value);
            this.controlValueAccessorChangeFn(event.value);
            this.change.emit(event);
          }
          /**
           * Syncs a button toggle's selected state with the model value.
           * @param toggle Toggle to be synced.
           * @param select Whether the toggle should be selected.
           * @param isUserInput Whether the change was a result of a user interaction.
           */

        }, {
          key: "syncButtonToggle",
          value: function syncButtonToggle(toggle, select) {
            var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            // Deselect the currently-selected toggle, if we're in single-selection
            // mode and the button being toggled isn't selected at the moment.
            if (!this.multiple && this.selected && !toggle.checked) {
              this.selected.checked = false;
            }

            if (select) {
              this.selectionModel.select(toggle);
            } else {
              this.selectionModel.deselect(toggle);
            } // Only emit the change event for user input.


            if (isUserInput) {
              this.emitChangeEvent();
            } // Note: we emit this one no matter whether it was a user interaction, because
            // it is used by Angular to sync up the two-way data binding.


            this.valueChange.emit(this.value);
          }
          /** Checks whether a button toggle is selected. */

        }, {
          key: "isSelected",
          value: function isSelected(toggle) {
            return this.selectionModel.isSelected(toggle);
          }
          /** Determines whether a button toggle should be checked on init. */

        }, {
          key: "isPrechecked",
          value: function isPrechecked(toggle) {
            if (this.rawValue === undefined) {
              return false;
            }

            if (this.multiple && Array.isArray(this.rawValue)) {
              return this.rawValue.some(function (value) {
                return toggle.value != null && value === toggle.value;
              });
            }

            return toggle.value === this.rawValue;
          }
          /** Updates the selection state of the toggles in the group based on a value. */

        }, {
          key: "setSelectionByValue",
          value: function setSelectionByValue(value) {
            var _this = this;

            this.rawValue = value;

            if (!this.buttonToggles) {
              return;
            }

            if (this.multiple && value) {
              if (!Array.isArray(value)) {
                throw Error('Value must be an array in multiple-selection mode.');
              }

              this.clearSelection();
              value.forEach(function (currentValue) {
                return _this.selectValue(currentValue);
              });
            } else {
              this.clearSelection();
              this.selectValue(value);
            }
          }
          /** Clears the selected toggles. */

        }, {
          key: "clearSelection",
          value: function clearSelection() {
            this.selectionModel.clear();
            this.buttonToggles.forEach(function (toggle) {
              return toggle.checked = false;
            });
          }
          /** Selects a value if there's a toggle that corresponds to it. */

        }, {
          key: "selectValue",
          value: function selectValue(value) {
            var correspondingOption = this.buttonToggles.find(function (toggle) {
              return toggle.value != null && toggle.value === value;
            });

            if (correspondingOption) {
              correspondingOption.checked = true;
              this.selectionModel.select(correspondingOption);
            }
          }
        }]);

        return McButtonToggleGroup;
      }();

      McButtonToggleGroup.ɵfac = function McButtonToggleGroup_Factory(t) {
        return new (t || McButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      McButtonToggleGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: McButtonToggleGroup,
        selectors: [["mc-button-toggle-group"]],
        contentQueries: function McButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, McButtonToggle, 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttonToggles = _t);
          }
        },
        hostAttrs: ["role", "group", 1, "mc-button-toggle-group"],
        hostVars: 2,
        hostBindings: function McButtonToggleGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-button-toggle_vertical", ctx.vertical);
          }
        },
        inputs: {
          vertical: "vertical",
          value: "value",
          multiple: "multiple",
          disabled: "disabled"
        },
        outputs: {
          valueChange: "valueChange",
          change: "change"
        },
        exportAs: ["mcButtonToggleGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MC_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR])]
      });
      /** @nocollapse */

      McButtonToggleGroup.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      McButtonToggleGroup.propDecorators = {
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        buttonToggles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return McButtonToggle;
          })]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McButtonToggleGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'mc-button-toggle-group',
            providers: [MC_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
            host: {
              role: 'group',
              "class": 'mc-button-toggle-group',
              '[class.mc-button-toggle_vertical]': 'vertical'
            },
            exportAs: 'mcButtonToggleGroup'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          buttonToggles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return McButtonToggle;
            })]
          }]
        });
      })();
      /** Single button inside of a toggle group. */


      var McButtonToggle = /*#__PURE__*/function () {
        function McButtonToggle(buttonToggleGroup, changeDetectorRef, focusMonitor, element) {
          _classCallCheck(this, McButtonToggle);

          this.buttonToggleGroup = buttonToggleGroup;
          this.changeDetectorRef = changeDetectorRef;
          this.focusMonitor = focusMonitor;
          this.element = element;
          /** Event emitted when the group value changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isSingleSelector = false;
          this._checked = false;
          this._disabled = false;
        }
        /** Whether the button is checked. */


        _createClass(McButtonToggle, [{
          key: "checked",
          get: function get() {
            return this.buttonToggleGroup ? this.buttonToggleGroup.isSelected(this) : this._checked;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);

            if (newValue !== this._checked) {
              this._checked = newValue;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup.syncButtonToggle(this, this._checked);
              }

              this.changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
            this.type = this.isSingleSelector ? 'radio' : 'checkbox';

            if (this.buttonToggleGroup && this.buttonToggleGroup.isPrechecked(this)) {
              this.checked = true;
            }

            this.focusMonitor.monitor(this.element.nativeElement, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this2 = this;

            var group = this.buttonToggleGroup;
            this.focusMonitor.stopMonitoring(this.element.nativeElement); // Remove the toggle from the selection once it's destroyed. Needs to happen
            // on the next tick in order to avoid "changed after checked" errors.

            if (group && group.isSelected(this)) {
              Promise.resolve().then(function () {
                return group.syncButtonToggle(_this2, false);
              });
            }
          }
          /** Focuses the button. */

        }, {
          key: "focus",
          value: function focus() {
            this.element.nativeElement.focus();
          }
          /** Checks the button toggle due to an interaction with the underlying native button. */

        }, {
          key: "onToggleClick",
          value: function onToggleClick() {
            if (this.disabled) {
              return;
            }

            var newChecked = this.isSingleSelector ? true : !this._checked;

            if (newChecked !== this._checked) {
              this._checked = newChecked;

              if (this.buttonToggleGroup) {
                this.buttonToggleGroup.syncButtonToggle(this, this._checked, true);
                this.buttonToggleGroup.onTouched();
              }
            } // Emit a change event when it's the single selector


            this.change.emit(new McButtonToggleChange(this, this.value));
          }
          /**
           * Marks the button toggle as needing checking for change detection.
           * This method is exposed because the parent button toggle group will directly
           * update bound properties of the radio button.
           */

        }, {
          key: "markForCheck",
          value: function markForCheck() {
            // When the group value changes, the button will not be notified.
            // Use `markForCheck` to explicit update button toggle's status.
            this.changeDetectorRef.markForCheck();
          }
        }]);

        return McButtonToggle;
      }();

      McButtonToggle.ɵfac = function McButtonToggle_Factory(t) {
        return new (t || McButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McButtonToggleGroup, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      McButtonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: McButtonToggle,
        selectors: [["mc-button-toggle"]],
        viewQuery: function McButtonToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButton"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mcButton = _t.first);
          }
        },
        hostAttrs: [1, "mc-button-toggle"],
        hostVars: 2,
        hostBindings: function McButtonToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-button-toggle-standalone", !ctx.buttonToggleGroup);
          }
        },
        inputs: {
          checked: "checked",
          disabled: "disabled",
          value: "value",
          tabIndex: "tabIndex"
        },
        outputs: {
          change: "change"
        },
        exportAs: ["mcButtonToggle"],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 4,
        consts: [["mc-button", "", "type", "button", 3, "disabled", "tabIndex", "click"]],
        template: function McButtonToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McButtonToggle_Template_button_click_0_listener() {
              return ctx.onToggleClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-active", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButtonCssStyler"]],
        styles: [".mc-group{display:flex;flex-direction:row}.mc-group .mc-group_justified>.mc-group-item{width:100%}.mc-group .mc-group-item+.mc-group-item{margin-left:calc(-1 * var(--mc-button-size-border-width, 1px))}.mc-group>.mc-group-item:first-child:not(:last-child),.mc-group>.mc-group-item:first-child:not(:last-child)>.mc-form-field__container{border-bottom-right-radius:0;border-top-right-radius:0}.mc-group>.mc-group-item:last-child:not(:first-child),.mc-group>.mc-group-item:last-child:not(:first-child)>.mc-form-field__container{border-bottom-left-radius:0;border-top-left-radius:0}.mc-group>.mc-group-item:not(:first-child):not(:last-child),.mc-group>.mc-group-item:not(:first-child):not(:last-child)>.mc-form-field__container{border-radius:0}.mc-vertical-group{display:flex;flex-direction:column}.mc-vertical-group>.mc-group-item:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mc-button-size-border-radius,3px)}.mc-vertical-group>.mc-group-item:first-child:not(:last-child)>.mc-form-field__container{border-bottom-right-radius:0;border-bottom-left-radius:0}.mc-vertical-group>.mc-group-item:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-left-radius:var(--mc-button-size-border-radius,3px)}.mc-vertical-group>.mc-group-item:last-child:not(:first-child)>.mc-form-field__container{border-top-right-radius:0;border-top-left-radius:0}.mc-vertical-group>.mc-group-item:not(:first-child):not(:last-child),.mc-vertical-group>.mc-group-item:not(:first-child):not(:last-child)>.mc-form-field__container{border-radius:0}.mc-vertical-group .mc-group-item+.mc-group-item{margin-top:calc(-1 * var(--mc-button-size-border-width, 1px))}.mc-button-toggle-group{display:flex;flex-direction:row}.mc-button-toggle-group .mc-button-toggle:first-of-type:not(:last-of-type)>.mc-button,.mc-button-toggle-group .mc-button-toggle:first-of-type:not(:last-of-type)>.mc-icon-button{border-bottom-right-radius:0;border-top-right-radius:0;border-bottom-left-radius:var(--mc-button-toggle-size-border-radius,3px);border-top-left-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle-group .mc-button-toggle:last-of-type:not(:first-of-type)>.mc-button,.mc-button-toggle-group .mc-button-toggle:last-of-type:not(:first-of-type)>.mc-icon-button{border-bottom-left-radius:0;border-top-left-radius:0;border-bottom-right-radius:var(--mc-button-toggle-size-border-radius,3px);border-top-right-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle-group .mc-button-toggle:not(:first-of-type):not(:last-of-type)>.mc-button,.mc-button-toggle-group .mc-button-toggle:not(:first-of-type):not(:last-of-type)>.mc-icon-button{border-radius:0}.mc-button-toggle-group .mc-button-toggle[disabled]{outline:0}.mc-button-toggle-group:not(.mc-button-toggle_vertical) .mc-button-toggle:not([disabled])+.mc-button-toggle:not([disabled]){margin-left:calc(-1 * var(--mc-button-toggle-size-border-size, 1px))}.mc-button-toggle_vertical{flex-direction:column}.mc-button-toggle_vertical .mc-button-toggle+.mc-button-toggle{border-left:none;border-right:none}.mc-button-toggle_vertical .mc-button-toggle:not([disabled])+.mc-button-toggle:not([disabled]){margin-top:calc(-1 * var(--mc-button-toggle-size-border-size, 1px))}.mc-button-toggle_vertical .mc-button-toggle .mc-button,.mc-button-toggle_vertical .mc-button-toggle .mc-icon-button{width:100%}.mc-button-toggle_vertical .mc-button-toggle:first-child:not(:last-child)>.mc-button,.mc-button-toggle_vertical .mc-button-toggle:first-child:not(:last-child)>.mc-icon-button{border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mc-button-toggle-size-border-radius,3px);border-top-left-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle_vertical .mc-button-toggle:last-child:not(:first-child)>.mc-button,.mc-button-toggle_vertical .mc-button-toggle:last-child:not(:first-child)>.mc-icon-button{border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:var(--mc-button-toggle-size-border-radius,3px);border-bottom-left-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle_vertical .mc-button-toggle:not(:first-child):not(:last-child)>.mc-button,.mc-button-toggle_vertical .mc-button-toggle:not(:first-child):not(:last-child)>.mc-icon-button{border-radius:0}.mc-button-toggle-standalone{box-shadow:none}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McButtonToggle.ctorParameters = function () {
        return [{
          type: McButtonToggleGroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      };

      McButtonToggle.propDecorators = {
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mcButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButton"], {
            "static": false
          }]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McButtonToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'mc-button-toggle',
            exportAs: 'mcButtonToggle',
            template: "\n        <button\n            mc-button\n            type=\"button\"\n            [class.mc-active]=\"checked\"\n            [disabled]=\"disabled\"\n            [tabIndex]=\"tabIndex\"\n            (click)=\"onToggleClick()\">\n            <ng-content></ng-content>\n        </button>\n    ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
              "class": 'mc-button-toggle',
              '[class.mc-button-toggle-standalone]': '!buttonToggleGroup'
            },
            styles: [".mc-group{display:flex;flex-direction:row}.mc-group .mc-group_justified>.mc-group-item{width:100%}.mc-group .mc-group-item+.mc-group-item{margin-left:calc(-1 * var(--mc-button-size-border-width, 1px))}.mc-group>.mc-group-item:first-child:not(:last-child),.mc-group>.mc-group-item:first-child:not(:last-child)>.mc-form-field__container{border-bottom-right-radius:0;border-top-right-radius:0}.mc-group>.mc-group-item:last-child:not(:first-child),.mc-group>.mc-group-item:last-child:not(:first-child)>.mc-form-field__container{border-bottom-left-radius:0;border-top-left-radius:0}.mc-group>.mc-group-item:not(:first-child):not(:last-child),.mc-group>.mc-group-item:not(:first-child):not(:last-child)>.mc-form-field__container{border-radius:0}.mc-vertical-group{display:flex;flex-direction:column}.mc-vertical-group>.mc-group-item:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mc-button-size-border-radius,3px)}.mc-vertical-group>.mc-group-item:first-child:not(:last-child)>.mc-form-field__container{border-bottom-right-radius:0;border-bottom-left-radius:0}.mc-vertical-group>.mc-group-item:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0;border-bottom-left-radius:var(--mc-button-size-border-radius,3px)}.mc-vertical-group>.mc-group-item:last-child:not(:first-child)>.mc-form-field__container{border-top-right-radius:0;border-top-left-radius:0}.mc-vertical-group>.mc-group-item:not(:first-child):not(:last-child),.mc-vertical-group>.mc-group-item:not(:first-child):not(:last-child)>.mc-form-field__container{border-radius:0}.mc-vertical-group .mc-group-item+.mc-group-item{margin-top:calc(-1 * var(--mc-button-size-border-width, 1px))}.mc-button-toggle-group{display:flex;flex-direction:row}.mc-button-toggle-group .mc-button-toggle:first-of-type:not(:last-of-type)>.mc-button,.mc-button-toggle-group .mc-button-toggle:first-of-type:not(:last-of-type)>.mc-icon-button{border-bottom-right-radius:0;border-top-right-radius:0;border-bottom-left-radius:var(--mc-button-toggle-size-border-radius,3px);border-top-left-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle-group .mc-button-toggle:last-of-type:not(:first-of-type)>.mc-button,.mc-button-toggle-group .mc-button-toggle:last-of-type:not(:first-of-type)>.mc-icon-button{border-bottom-left-radius:0;border-top-left-radius:0;border-bottom-right-radius:var(--mc-button-toggle-size-border-radius,3px);border-top-right-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle-group .mc-button-toggle:not(:first-of-type):not(:last-of-type)>.mc-button,.mc-button-toggle-group .mc-button-toggle:not(:first-of-type):not(:last-of-type)>.mc-icon-button{border-radius:0}.mc-button-toggle-group .mc-button-toggle[disabled]{outline:0}.mc-button-toggle-group:not(.mc-button-toggle_vertical) .mc-button-toggle:not([disabled])+.mc-button-toggle:not([disabled]){margin-left:calc(-1 * var(--mc-button-toggle-size-border-size, 1px))}.mc-button-toggle_vertical{flex-direction:column}.mc-button-toggle_vertical .mc-button-toggle+.mc-button-toggle{border-left:none;border-right:none}.mc-button-toggle_vertical .mc-button-toggle:not([disabled])+.mc-button-toggle:not([disabled]){margin-top:calc(-1 * var(--mc-button-toggle-size-border-size, 1px))}.mc-button-toggle_vertical .mc-button-toggle .mc-button,.mc-button-toggle_vertical .mc-button-toggle .mc-icon-button{width:100%}.mc-button-toggle_vertical .mc-button-toggle:first-child:not(:last-child)>.mc-button,.mc-button-toggle_vertical .mc-button-toggle:first-child:not(:last-child)>.mc-icon-button{border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mc-button-toggle-size-border-radius,3px);border-top-left-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle_vertical .mc-button-toggle:last-child:not(:first-child)>.mc-button,.mc-button-toggle_vertical .mc-button-toggle:last-child:not(:first-child)>.mc-icon-button{border-top-right-radius:0;border-top-left-radius:0;border-bottom-right-radius:var(--mc-button-toggle-size-border-radius,3px);border-bottom-left-radius:var(--mc-button-toggle-size-border-radius,3px)}.mc-button-toggle_vertical .mc-button-toggle:not(:first-child):not(:last-child)>.mc-button,.mc-button-toggle_vertical .mc-button-toggle:not(:first-child):not(:last-child)>.mc-icon-button{border-radius:0}.mc-button-toggle-standalone{box-shadow:none}"]
          }]
        }], function () {
          return [{
            type: McButtonToggleGroup,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          mcButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButton"], {
              "static": false
            }]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var McButtonToggleModule = function McButtonToggleModule() {
        _classCallCheck(this, McButtonToggleModule);
      };

      McButtonToggleModule.ɵfac = function McButtonToggleModule_Factory(t) {
        return new (t || McButtonToggleModule)();
      };

      McButtonToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: McButtonToggleModule
      });
      McButtonToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__["McCommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButtonModule"]], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__["McCommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](McButtonToggleModule, {
          declarations: function declarations() {
            return [McButtonToggleGroup, McButtonToggle];
          },
          imports: function imports() {
            return [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__["McCommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButtonModule"]];
          },
          exports: function exports() {
            return [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__["McCommonModule"], McButtonToggleGroup, McButtonToggle];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McButtonToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__["McCommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_1__["McButtonModule"]],
            exports: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__["McCommonModule"], McButtonToggleGroup, McButtonToggle],
            declarations: [McButtonToggleGroup, McButtonToggle]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "jIJY":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-button-toggle.js ***!
      \**************************************************************************************************************/

    /*! exports provided: ButtonToggleExamplesModule, ButtonToggleMultipleOverviewExample, ButtonToggleOverviewExample */

    /***/
    function jIJY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonToggleExamplesModule", function () {
        return ButtonToggleExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonToggleMultipleOverviewExample", function () {
        return ButtonToggleMultipleOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonToggleOverviewExample", function () {
        return ButtonToggleOverviewExample;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button-toggle */
      "I+yp");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /**
       * @title Basic button-toggle
       */


      var ButtonToggleMultipleOverviewExample = function ButtonToggleMultipleOverviewExample() {
        _classCallCheck(this, ButtonToggleMultipleOverviewExample);
      };

      ButtonToggleMultipleOverviewExample.ɵfac = function ButtonToggleMultipleOverviewExample_Factory(t) {
        return new (t || ButtonToggleMultipleOverviewExample)();
      };

      ButtonToggleMultipleOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonToggleMultipleOverviewExample,
        selectors: [["button-toggle-multiple-overview-example"]],
        decls: 13,
        vars: 1,
        consts: [["multiple", ""], ["multipleGroup", "mcButtonToggleGroup"], ["value", "1"], ["value", "2"], ["value", "3"]],
        template: function ButtonToggleMultipleOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-button-toggle-group", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mc-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " button 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " button 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mc-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " button 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected value: ", _r0.value, "");
          }
        },
        directives: [_ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggleGroup"], _ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggle"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonToggleMultipleOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'button-toggle-multiple-overview-example',
            templateUrl: 'button-toggle-multiple-overview-example.html',
            styleUrls: ['button-toggle-multiple-overview-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title button-toggle
       */


      var ButtonToggleOverviewExample = function ButtonToggleOverviewExample() {
        _classCallCheck(this, ButtonToggleOverviewExample);
      };

      ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) {
        return new (t || ButtonToggleOverviewExample)();
      };

      ButtonToggleOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonToggleOverviewExample,
        selectors: [["button-toggle-overview-example"]],
        decls: 15,
        vars: 1,
        consts: [["group1", "mcButtonToggleGroup"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"]],
        template: function ButtonToggleOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-button-toggle-group", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mc-button-toggle", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " button 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-button-toggle", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " button 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mc-button-toggle", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " button 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mc-button-toggle", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " button 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Selected value: ", _r0.value, "");
          }
        },
        directives: [_ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggleGroup"], _ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggle"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonToggleOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'button-toggle-overview-example',
            templateUrl: 'button-toggle-overview-example.html',
            styleUrls: ['button-toggle-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [ButtonToggleOverviewExample, ButtonToggleMultipleOverviewExample];

      var ButtonToggleExamplesModule = function ButtonToggleExamplesModule() {
        _classCallCheck(this, ButtonToggleExamplesModule);
      };

      ButtonToggleExamplesModule.ɵfac = function ButtonToggleExamplesModule_Factory(t) {
        return new (t || ButtonToggleExamplesModule)();
      };

      ButtonToggleExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ButtonToggleExamplesModule
      });
      ButtonToggleExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggleModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonToggleExamplesModule, {
          declarations: [ButtonToggleOverviewExample, ButtonToggleMultipleOverviewExample],
          imports: [_ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggleModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]],
          exports: [ButtonToggleOverviewExample, ButtonToggleMultipleOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonToggleExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_ptsecurity_mosaic_button_toggle__WEBPACK_IMPORTED_MODULE_1__["McButtonToggleModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-button-toggle.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=7-es5.js.map