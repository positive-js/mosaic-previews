"use strict";
(self["webpackChunkmosaic_docs"] = self["webpackChunkmosaic_docs"] || []).push([["default-dist_mosaic_fesm2020_ptsecurity-mosaic-radio_mjs"],{

/***/ 56026:
/*!**********************************************************!*\
  !*** ./dist/mosaic/fesm2020/ptsecurity-mosaic-radio.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "McRadioButton": () => (/* binding */ McRadioButton),
/* harmony export */   "McRadioButtonMixinBase": () => (/* binding */ McRadioButtonMixinBase),
/* harmony export */   "McRadioChange": () => (/* binding */ McRadioChange),
/* harmony export */   "McRadioGroup": () => (/* binding */ McRadioGroup),
/* harmony export */   "McRadioGroupBase": () => (/* binding */ McRadioGroupBase),
/* harmony export */   "McRadioGroupMixinBase": () => (/* binding */ McRadioGroupMixinBase),
/* harmony export */   "McRadioModule": () => (/* binding */ McRadioModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 62304);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 11755);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);







 // Increasing integer for generating unique ids for radio components.

const _c0 = ["input"];
const _c1 = ["*"];
let nextUniqueId = 0;
/** Change event object emitted by McRadio. */

class McRadioChange {
  constructor(
  /** The McRadioButton that emits the change event. */
  source,
  /** The value of the McRadioButton. */
  value) {
    this.source = source;
    this.value = value;
  }

} // Boilerplate for applying mixins to McRadioGroup.

/** @docs-private */


class McRadioGroupBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McRadioGroupMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(McRadioGroupBase);
/**
 * Provider Expression that allows mc-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * @docs-private
 */

const MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => McRadioGroup),
  multi: true
};

class McRadioGroup extends McRadioGroupMixinBase {
  constructor(elementRef, _changeDetector) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    /**
     * Event emitted when the group value changes.
     * Change events are only emitted when the value changes due to user interaction with
     * a radio button (the same behavior as `<input type-"radio">`).
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    /**
     * Selected value for group. Should equal the value of the selected radio button if there *is*
     * a corresponding radio button with a matching value. If there is *not* such a corresponding
     * radio button, this value persists to be applied in case a new radio button is added with a
     * matching value.
     */

    this._value = null;
    /** The HTML name attribute applied to radio buttons in this group. */

    this._name = `mc-radio-group-${nextUniqueId++}`;
    /** The currently selected radio button. Should match value. */

    this._selected = null;
    /** Whether the `value` has been set to its initial value. */

    this.isInitialized = false;
    /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */

    this._labelPosition = 'after';
    /** Whether the radio group is disabled. */

    this._disabled = false;
    /** Whether the radio group is required. */

    this._required = false;
    /** The method to be called in order to update ngModel */
    // tslint:disable-next-line

    this.controlValueAccessorChangeFn = () => {};
    /**
     * onTouch function registered via registerOnTouch (ControlValueAccessor).
     * @docs-private
     */
    // tslint:disable-next-line


    this.onTouched = () => {};
  }
  /** Name of the radio button group. All radio buttons inside this group will use this name. */


  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
    this.updateRadioButtonNames();
  }
  /** Whether the labels should appear after or before the radio-buttons. Defaults to 'after' */


  get labelPosition() {
    return this._labelPosition;
  }

  set labelPosition(v) {
    this._labelPosition = v === 'before' ? 'before' : 'after';
    this.markRadiosForCheck();
  }
  /** Value of the radio button. */


  get value() {
    return this._value;
  }

  set value(newValue) {
    if (this._value !== newValue) {
      // Set this before proceeding to ensure no circular loop occurs with selection.
      this._value = newValue;
      this.updateSelectedRadioFromValue();
      this.checkSelectedRadioButton();
    }
  }
  /** Whether the radio button is selected. */


  get selected() {
    return this._selected;
  }

  set selected(selected) {
    this._selected = selected;
    this.value = selected ? selected.value : null;
    this.checkSelectedRadioButton();
  }
  /** Whether the radio group is disabled */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    this.markRadiosForCheck();
  }
  /** Whether the radio group is required */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
    this.markRadiosForCheck();
  }

  checkSelectedRadioButton() {
    if (this._selected && !this._selected.checked) {
      this._selected.checked = true;
    }
  }
  /**
   * Initialize properties once content children are available.
   * This allows us to propagate relevant attributes to associated buttons.
   */


  ngAfterContentInit() {
    // Mark this component as initialized in AfterContentInit because the initial value can
    // possibly be set by NgModel on McRadioGroup, and it is possible that the OnInit of the
    // NgModel occurs *after* the OnInit of the McRadioGroup.
    this.isInitialized = true;
  }
  /**
   * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
   * radio buttons upon their blur.
   */


  touch() {
    if (this.onTouched) {
      this.onTouched();
    }
  }
  /** Dispatch change event with current selection and group value. */


  emitChangeEvent() {
    if (this.isInitialized) {
      this.change.emit(new McRadioChange(this._selected, this._value));
    }
  }

  markRadiosForCheck() {
    if (this.radios) {
      this.radios.forEach(radio => radio.markForCheck());
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   */


  writeValue(value) {
    this.value = value;

    this._changeDetector.markForCheck();
  }
  /**
   * Registers a callback to be triggered when the model value changes.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnChange(fn) {
    this.controlValueAccessorChangeFn = fn;
  }
  /**
   * Registers a callback to be triggered when the control is touched.
   * Implemented as part of ControlValueAccessor.
   * @param fn Callback to be registered.
   */


  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
   * @param isDisabled Whether the control should be disabled.
   */


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;

    this._changeDetector.markForCheck();
  }

  updateRadioButtonNames() {
    if (this.radios) {
      this.radios.forEach(radio => {
        radio.name = this.name;
      });
    }
  }
  /** Updates the `selected` radio button from the internal _value state. */


  updateSelectedRadioFromValue() {
    // If the value already matches the selected radio, do nothing.
    const isAlreadySelected = this._selected !== null && this._selected.value === this._value;

    if (this.radios != null && !isAlreadySelected) {
      this._selected = null;
      this.radios.forEach(radio => {
        radio.checked = this.value === radio.value;

        if (radio.checked) {
          this._selected = radio;
        }
      });
    }
  }

}
/** @nocollapse */

/** @nocollapse */


McRadioGroup.ɵfac = function McRadioGroup_Factory(t) {
  return new (t || McRadioGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
/** @nocollapse */

/** @nocollapse */


McRadioGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: McRadioGroup,
  selectors: [["mc-radio-group"]],
  contentQueries: function McRadioGroup_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, McRadioButton, 5);
    }

    if (rf & 2) {
      let _t;

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
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McRadioGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: 'mc-radio-group',
      exportAs: 'mcRadioGroup',
      host: {
        role: 'radiogroup',
        class: 'mc-radio-group'
      },
      providers: [MC_RADIO_GROUP_CONTROL_VALUE_ACCESSOR]
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
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(() => McRadioButton), {
        descendants: true
      }]
    }]
  });
})(); // Boilerplate for applying mixins to McRadioButton.

/** @docs-private */
// tslint:disable-next-line:naming-convention


class McRadioButtonBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McRadioButtonMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)(McRadioButtonBase));

class McRadioButton extends McRadioButtonMixinBase {
  constructor(radioGroup, elementRef, _changeDetector, focusMonitor, _radioDispatcher) {
    super(elementRef);
    this._changeDetector = _changeDetector;
    this.focusMonitor = focusMonitor;
    this._radioDispatcher = _radioDispatcher;
    /**
     * Event emitted when the checked state of this radio button changes.
     * Change events are only emitted when the value changes due to user interaction with
     * the radio button (the same behavior as `<input type-"radio">`).
     */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.isFocused = false;
    /* tslint:disable:member-ordering */

    this.uniqueId = `mc-radio-${++nextUniqueId}`;
    /** Whether this radio is checked. */

    this._checked = false;
    /** Value assigned to this radio. */

    this._value = null;
    /** Unregister function for _radioDispatcher */
    // tslint:disable-next-line

    this.removeUniqueSelectionListener = () => {};

    this.id = this.uniqueId;
    this.radioGroup = radioGroup;
    this.removeUniqueSelectionListener = _radioDispatcher.listen((id, name) => {
      if (id !== this.id && name === this.name) {
        this.checked = false;
      }
    });
  }
  /** Whether this radio button is checked. */


  get checked() {
    return this._checked;
  }

  set checked(value) {
    const newCheckedState = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);

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


  get value() {
    return this._value;
  }

  set value(value) {
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


  get disabled() {
    return this._disabled || this.radioGroup != null && this.radioGroup.disabled;
  }

  set disabled(value) {
    const newDisabledState = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);

    if (this._disabled !== newDisabledState) {
      this._disabled = newDisabledState;

      this._changeDetector.markForCheck();
    }
  }
  /** Whether the radio button is required. */


  get required() {
    return this._required || this.radioGroup && this.radioGroup.required;
  }

  set required(value) {
    this._required = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.toBoolean)(value);
  }
  /** Whether the label should appear after or before the radio button. Defaults to 'after' */


  get labelPosition() {
    return this._labelPosition || this.radioGroup && this.radioGroup.labelPosition || 'after';
  }

  set labelPosition(value) {
    this._labelPosition = value;
  }
  /** ID of the native input element inside `<mc-radio-button>` */


  get inputId() {
    return `${this.id || this.uniqueId}-input`;
  }

  ngOnInit() {
    if (this.radioGroup) {
      // If the radio is inside a radio group, determine if it should be checked
      this.checked = this.radioGroup.value === this._value; // Copy name from parent radio group

      this.name = this.radioGroup.name;
    }
  }

  ngAfterViewInit() {
    this.focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
      if (!focusOrigin && this.radioGroup) {
        this.radioGroup.touch();
      }
    });
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this._elementRef);
    this.removeUniqueSelectionListener();
  }
  /** Focuses the radio button. */


  focus() {
    this.inputElement.nativeElement.focus();
  }
  /**
   * Marks the radio button as needing checking for change detection.
   * This method is exposed because the parent radio group will directly
   * update bound properties of the radio button.
   */


  markForCheck() {
    // When group value changes, the button will not be notified. Use `markForCheck` to explicit
    // update radio button's status
    this._changeDetector.markForCheck();
  }

  onInputClick(event) {
    // We have to stop propagation for click events on the visual hidden input element.
    // By default, when a user clicks on a label element, a generated click event will be
    // dispatched on the associated input element. Since we are using a label element as our
    // root container, the click event on the `radio-button` will be executed twice.
    // The real click event will bubble up, and the generated click event also tries to bubble up.
    // This will lead to multiple click events.
    // Preventing bubbling for the second event will solve that issue.
    event.stopPropagation();
  }

  onInputChange(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
    const groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
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


  emitChangeEvent() {
    this.change.emit(new McRadioChange(this, this._value));
  }

}
/** @nocollapse */

/** @nocollapse */


McRadioButton.ɵfac = function McRadioButton_Factory(t) {
  return new (t || McRadioButton)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](McRadioGroup, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.UniqueSelectionDispatcher));
};
/** @nocollapse */

/** @nocollapse */


McRadioButton.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: McRadioButton,
  selectors: [["mc-radio-button"]],
  viewQuery: function McRadioButton_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1)(2, "input", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function McRadioButton_Template_input_change_2_listener($event) {
        return ctx.onInputChange($event);
      })("click", function McRadioButton_Template_input_click_2_listener($event) {
        return ctx.onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
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
  styles: [".mc-radio-button{display:inline-block}.mc-radio-label{display:inline-flex;align-items:center;vertical-align:middle;cursor:pointer;white-space:nowrap;width:100%}.mc-radio-label-content{display:inline-block;position:relative;order:0;line-height:inherit;padding-left:calc(var(--mc-radio-size-size, 14px) + var(--mc-radio-size-padding, 8px));padding-right:0}.mc-radio-label-content .mc-radio-button__outer-circle,.mc-radio-label-content .mc-radio-button__inner-circle{box-sizing:content-box;position:absolute;content:\"\";border-style:solid;border-radius:50%}.mc-radio-label-content .mc-radio-button__outer-circle{left:0;top:calc(50% - 8px);width:var(--mc-radio-size-size, 14px);height:var(--mc-radio-size-size, 14px);border-width:1px}.mc-radio-label-content .mc-radio-button__inner-circle{display:none;left:1px;top:calc(50% - 7px);width:6px;height:6px;border-width:4px}[dir=rtl] .mc-radio-label-content{padding-right:var(--mc-radio-size-padding, 8px);padding-left:0}.mc-radio-input{position:absolute;outline:none;opacity:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McRadioButton, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'mc-radio-button',
      inputs: ['color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      exportAs: 'mcRadioButton',
      host: {
        class: 'mc-radio-button',
        '[attr.id]': 'id',
        '[class.mc-selected]': 'checked',
        '[class.mc-disabled]': 'disabled'
      },
      template: "<label class=\"mc-radio-label\" [attr.for]=\"inputId\" #label>\n    <input type=\"radio\"\n           class=\"mc-radio-input cdk-visually-hidden\"\n           #input\n           [id]=\"inputId\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [tabIndex]=\"tabIndex\"\n           [attr.name]=\"name\"\n           [required]=\"required\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"onInputChange($event)\"\n           (click)=\"onInputClick($event)\">\n\n    <div class=\"mc-radio-label-content\" [class.mc-radio-label-before]=\"labelPosition == 'before'\">\n        <div class=\"mc-radio-button__outer-circle\"></div>\n        <div class=\"mc-radio-button__inner-circle\"></div>\n        <ng-content></ng-content>\n    </div>\n</label>\n",
      styles: [".mc-radio-button{display:inline-block}.mc-radio-label{display:inline-flex;align-items:center;vertical-align:middle;cursor:pointer;white-space:nowrap;width:100%}.mc-radio-label-content{display:inline-block;position:relative;order:0;line-height:inherit;padding-left:calc(var(--mc-radio-size-size, 14px) + var(--mc-radio-size-padding, 8px));padding-right:0}.mc-radio-label-content .mc-radio-button__outer-circle,.mc-radio-label-content .mc-radio-button__inner-circle{box-sizing:content-box;position:absolute;content:\"\";border-style:solid;border-radius:50%}.mc-radio-label-content .mc-radio-button__outer-circle{left:0;top:calc(50% - 8px);width:var(--mc-radio-size-size, 14px);height:var(--mc-radio-size-size, 14px);border-width:1px}.mc-radio-label-content .mc-radio-button__inner-circle{display:none;left:1px;top:calc(50% - 7px);width:6px;height:6px;border-width:4px}[dir=rtl] .mc-radio-label-content{padding-right:var(--mc-radio-size-padding, 8px);padding-left:0}.mc-radio-input{position:absolute;outline:none;opacity:0}\n"]
    }]
  }], function () {
    return [{
      type: McRadioGroup,
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
        static: false
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

class McRadioModule {}
/** @nocollapse */

/** @nocollapse */


McRadioModule.ɵfac = function McRadioModule_Factory(t) {
  return new (t || McRadioModule)();
};
/** @nocollapse */

/** @nocollapse */


McRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: McRadioModule
});
/** @nocollapse */

/** @nocollapse */

McRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule],
      exports: [McRadioGroup, McRadioButton],
      declarations: [McRadioGroup, McRadioButton]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2020_ptsecurity-mosaic-radio_mjs.js.map