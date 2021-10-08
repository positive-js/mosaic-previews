"use strict";
(self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js"],{

/***/ 38265:
/*!************************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-checkbox.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_CHECKBOX_CLICK_ACTION": function() { return /* binding */ MC_CHECKBOX_CLICK_ACTION; },
/* harmony export */   "MC_CHECKBOX_CONTROL_VALUE_ACCESSOR": function() { return /* binding */ MC_CHECKBOX_CONTROL_VALUE_ACCESSOR; },
/* harmony export */   "MC_CHECKBOX_REQUIRED_VALIDATOR": function() { return /* binding */ MC_CHECKBOX_REQUIRED_VALIDATOR; },
/* harmony export */   "McCheckbox": function() { return /* binding */ McCheckbox; },
/* harmony export */   "McCheckboxBase": function() { return /* binding */ McCheckboxBase; },
/* harmony export */   "McCheckboxChange": function() { return /* binding */ McCheckboxChange; },
/* harmony export */   "McCheckboxMixinBase": function() { return /* binding */ McCheckboxMixinBase; },
/* harmony export */   "McCheckboxModule": function() { return /* binding */ McCheckboxModule; },
/* harmony export */   "McCheckboxRequiredValidator": function() { return /* binding */ McCheckboxRequiredValidator; },
/* harmony export */   "TransitionCheckState": function() { return /* binding */ TransitionCheckState; }
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 51606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 46872);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);






/**
 * Injection token that can be used to specify the checkbox click behavior.
 */

const _c0 = ["input"];
const _c1 = ["*"];
const MC_CHECKBOX_CLICK_ACTION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-checkbox-click-action'); // Increasing integer for generating unique ids for checkbox components.

let nextUniqueId = 0;
/**
 * Provider Expression that allows mc-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */

const MC_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McCheckbox),
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


class McCheckboxChange {} // Boilerplate for applying mixins to McCheckbox.

/** @docs-private */


class McCheckboxBase {
  // tslint:disable-next-line:naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line:naming-convention


const McCheckboxMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(McCheckboxBase)));
/**
 * A mosaic checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A McCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 */

class McCheckbox extends McCheckboxMixinBase {
  constructor(elementRef, _changeDetectorRef, _focusMonitor, _clickAction) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._focusMonitor = _focusMonitor;
    this._clickAction = _clickAction;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
     * take precedence so this may be omitted.
     */

    this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */

    this.ariaLabelledby = null;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */

    this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */

    this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */

    this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this.uniqueId = `mc-checkbox-${++nextUniqueId}`;
    this.currentAnimationClass = '';
    this.currentCheckState = TransitionCheckState.Init;
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    // tslint:disable-next-line:no-empty

    this.onTouched = () => {}; // tslint:disable-next-line:no-empty


    this.controlValueAccessorChangeFn = () => {};

    this.id = this.uniqueId;
  }
  /** Returns the unique id for the visual hidden input. */


  get inputId() {
    return `${this.id || this.uniqueId}-input`;
  }
  /** Whether the checkbox is required. */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.toBoolean)(value);
  }
  /**
   * Whether the checkbox is checked.
   */


  get checked() {
    return this._checked;
  }

  set checked(value) {
    if (value !== this.checked) {
      this._checked = value;

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is disabled. This fully overrides the implementation provided by
   * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
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


  get indeterminate() {
    return this._indeterminate;
  }

  set indeterminate(value) {
    const changed = value !== this._indeterminate;
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

  ngAfterViewInit() {
    this._focusMonitor.monitor(this.inputElement.nativeElement).subscribe(focusOrigin => this.onInputFocusChange(focusOrigin));
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this.inputElement.nativeElement);
  }
  /** Method being called whenever the label text changes. */


  onLabelTextChange() {
    // This method is getting called whenever the label of the checkbox changes.
    // Since the checkbox uses the OnPush strategy we need to notify it about the change
    // that has been recognized by the cdkObserveContent directive.
    this._changeDetectorRef.markForCheck();
  } // Implemented as part of ControlValueAccessor.


  writeValue(value) {
    this.checked = !!value;
  } // Implemented as part of ControlValueAccessor.


  registerOnChange(fn) {
    this.controlValueAccessorChangeFn = fn;
  } // Implemented as part of ControlValueAccessor.


  registerOnTouched(fn) {
    this.onTouched = fn;
  } // Implemented as part of ControlValueAccessor.


  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  getAriaChecked() {
    return this.checked ? 'true' : this.indeterminate ? 'mixed' : 'false';
  }
  /** Toggles the `checked` state of the checkbox. */


  toggle() {
    this.checked = !this.checked;
  }
  /**
   * Event handler for checkbox input element.
   * Toggles checked state if element is not disabled.
   * Do not toggle on (change) event since IE doesn't fire change event when
   *   indeterminate checkbox is clicked.
   * @param event Input click event
   */


  onInputClick(event) {
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
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
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


  focus() {
    this._focusMonitor.focusVia(this.inputElement.nativeElement, 'keyboard');
  }

  onInteractionEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }

  transitionCheckState(newState) {
    const oldState = this.currentCheckState;
    const element = this._elementRef.nativeElement;

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

  emitChangeEvent() {
    const event = new McCheckboxChange();
    event.source = this;
    event.checked = this.checked;
    this.controlValueAccessorChangeFn(this.checked);
    this.change.emit(event);
  }
  /** Function is called whenever the focus changes for the input element. */


  onInputFocusChange(focusOrigin) {
    if (focusOrigin) {
      this.onTouched();
    }
  }

}
/** @nocollapse */


McCheckbox.ɵfac = function McCheckbox_Factory(t) {
  return new (t || McCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_CHECKBOX_CLICK_ACTION, 8));
};
/** @nocollapse */


McCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McCheckbox,
  selectors: [["mc-checkbox"]],
  viewQuery: function McCheckbox_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
    }
  },
  hostAttrs: [1, "mc-checkbox"],
  hostVars: 10,
  hostBindings: function McCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-indeterminate", ctx.indeterminate)("mc-checked", ctx.checked)("mc-disabled", ctx.disabled)("mc-checkbox-label-before", ctx.labelPosition == "before");
    }
  },
  inputs: {
    color: "color",
    tabIndex: "tabIndex",
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    id: "id",
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    required: "required",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate"
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  exportAs: ["mcCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MC_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 11,
  vars: 14,
  consts: [[1, "mc-checkbox-layout"], ["label", ""], [1, "mc-checkbox-inner-container"], ["type", "checkbox", 1, "mc-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "indeterminate", "change", "click"], ["input", ""], [1, "mc-checkbox-frame"], [1, "mc-checkbox-checkmark", "mc", "mc-check_16"], [1, "mc-checkbox-mixedmark", "mc", "mc-minus_16"], [1, "mc-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""]],
  template: function McCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function McCheckbox_Template_input_change_3_listener($event) {
        return ctx.onInteractionEvent($event);
      })("click", function McCheckbox_Template_input_click_3_listener($event) {
        return ctx.onInputClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function McCheckbox_Template_span_cdkObserveContent_8_listener() {
        return ctx.onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex)("indeterminate", ctx.indeterminate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx.getAriaChecked());
    }
  },
  styles: [".mc-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:3px;box-sizing:border-box;pointer-events:none}.mc-checkbox-checkmark,.mc-checkbox-mixedmark{display:none;position:absolute;top:-1px;left:-1px;right:0;bottom:0}.mc-checkbox-frame{background-color:transparent;border-width:1px;border-width:var(--mc-checkbox-size-border-width, 1px);border-style:solid;box-shadow:inset 0 0 1px #0003;box-shadow:var(--mc-checkbox-size-toggle-box-shadow, inset 0 0 1px 0 rgba(0, 0, 0, .2))}.mc-checkbox{display:inline-block;cursor:pointer;-webkit-tap-highlight-color:transparent}.mc-checkbox.mc-checked .mc-checkbox-checkmark{display:block}.mc-checkbox.mc-checked .mc-checkbox-mixedmark{display:none}.mc-checkbox.mc-indeterminate .mc-checkbox-checkmark{display:none}.mc-checkbox.mc-indeterminate .mc-checkbox-mixedmark{display:block}.mc-checkbox.mc-disabled{cursor:default}.mc-checkbox.mc-disabled .mc-checkbox-frame{box-shadow:none}.mc-checkbox-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap;width:100%}.mc-checkbox-inner-container{display:inline-block;height:16px;height:var(--mc-checkbox-size-width, 16px);line-height:0;margin-right:8px;order:0;position:relative;align-self:center;white-space:nowrap;width:16px;width:var(--mc-checkbox-size-width, 16px);flex-shrink:0}[dir=rtl] .mc-checkbox-inner-container{margin-left:8px;margin-right:auto}.mc-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mc-checkbox-label-before .mc-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mc-checkbox-label-before .mc-checkbox-inner-container{margin-left:auto;margin-right:8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-checkbox',
      exportAs: 'mcCheckbox',
      templateUrl: 'checkbox.html',
      styleUrls: ['checkbox.scss'],
      host: {
        class: 'mc-checkbox',
        '[id]': 'id',
        '[attr.id]': 'id',
        '[class.mc-indeterminate]': 'indeterminate',
        '[class.mc-checked]': 'checked',
        '[class.mc-disabled]': 'disabled',
        '[class.mc-checkbox-label-before]': 'labelPosition == "before"'
      },
      providers: [MC_CHECKBOX_CONTROL_VALUE_ACCESSOR],
      inputs: ['color', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_CHECKBOX_CLICK_ACTION]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input', {
        static: false
      }]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const MC_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Mosaic checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mc-checkbox`.
 */

class McCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}
/** @nocollapse */


McCheckboxRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMcCheckboxRequiredValidator_BaseFactory;
  return function McCheckboxRequiredValidator_Factory(t) {
    return (ɵMcCheckboxRequiredValidator_BaseFactory || (ɵMcCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](McCheckboxRequiredValidator)))(t || McCheckboxRequiredValidator);
  };
}();
/** @nocollapse */


McCheckboxRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McCheckboxRequiredValidator,
  selectors: [["mc-checkbox", "required", "", "formControlName", ""], ["mc-checkbox", "required", "", "formControl", ""], ["mc-checkbox", "required", "", "ngModel", ""]],
  hostVars: 1,
  hostBindings: function McCheckboxRequiredValidator_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("required", ctx.required ? "" : null);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MC_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mc-checkbox[required][formControlName],
             mc-checkbox[required][formControl], mc-checkbox[required][ngModel]`,
      providers: [MC_CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        '[attr.required]': 'required ? "" : null'
      }
    }]
  }], null, null);
})();

class McCheckboxModule {}
/** @nocollapse */


McCheckboxModule.ɵfac = function McCheckboxModule_Factory(t) {
  return new (t || McCheckboxModule)();
};
/** @nocollapse */


McCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McCheckboxModule
});
/** @nocollapse */

McCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [McCheckbox, McCheckboxRequiredValidator],
      declarations: [McCheckbox, McCheckboxRequiredValidator]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-checkbox_js-es2015.js.map