"use strict";
(self["webpackChunkmosaic_docs"] = self["webpackChunkmosaic_docs"] || []).push([["default-dist_mosaic_fesm2020_ptsecurity-mosaic-textarea_mjs"],{

/***/ 65044:
/*!*************************************************************!*\
  !*** ./dist/mosaic/fesm2020/ptsecurity-mosaic-textarea.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_TEXTAREA_VALUE_ACCESSOR": () => (/* binding */ MC_TEXTAREA_VALUE_ACCESSOR),
/* harmony export */   "McTextarea": () => (/* binding */ McTextarea),
/* harmony export */   "McTextareaBase": () => (/* binding */ McTextareaBase),
/* harmony export */   "McTextareaMixinBase": () => (/* binding */ McTextareaMixinBase),
/* harmony export */   "McTextareaModule": () => (/* binding */ McTextareaModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 62304);
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ 79707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);











const MC_TEXTAREA_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MC_TEXTAREA_VALUE_ACCESSOR');
let nextUniqueId = 0;

class McTextareaBase {
  constructor(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
    this.defaultErrorStateMatcher = defaultErrorStateMatcher;
    this.parentForm = parentForm;
    this.parentFormGroup = parentFormGroup;
    this.ngControl = ngControl;
  }

} // tslint:disable-next-line:naming-convention


const McTextareaMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.mixinErrorState)(McTextareaBase);

class McTextarea extends McTextareaMixinBase {
  constructor(elementRef, ngControl, parentForm, rawValidators, mcValidation, ngModel, parentFormGroup, defaultErrorStateMatcher, inputValueAccessor, ngZone) {
    super(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
    this.elementRef = elementRef;
    this.ngControl = ngControl;
    this.rawValidators = rawValidators;
    this.mcValidation = mcValidation;
    this.ngModel = ngModel;
    this.ngZone = ngZone;
    this.canGrow = true;
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */

    this.focused = false;
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */

    this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */

    this.controlType = 'textarea';
    this.uid = `mc-textsrea-${nextUniqueId++}`;
    this._disabled = false;
    this._required = false;
    this.lineHeight = 0;
    this.freeRowsHeight = 0;
    this.minHeight = 0; // If no input value accessor was explicitly specified, use the element as the textarea value
    // accessor.

    this.valueAccessor = inputValueAccessor || this.elementRef.nativeElement;
    this.previousNativeValue = this.value; // Force setter to be called in case id was not specified.

    this.id = this.id;
    const growObserver = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(elementRef.nativeElement, 'input');
    this.growSubscription = growObserver.subscribe(this.grow.bind(this));
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get disabled() {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }

    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);

    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value || this.uid;
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get value() {
    return this.valueAccessor.value;
  }

  set value(value) {
    if (value !== this.value) {
      this.valueAccessor.value = value;
      this.stateChanges.next();
    }
  }

  ngOnInit() {
    setTimeout(() => this.grow(), 0);
    this.lineHeight = parseInt(getComputedStyle(this.elementRef.nativeElement).lineHeight, 10);
    const paddingTop = parseInt(getComputedStyle(this.elementRef.nativeElement).paddingTop, 10);
    const paddingBottom = parseInt(getComputedStyle(this.elementRef.nativeElement).paddingBottom, 10); // tslint:disable-next-line:no-magic-numbers

    this.minHeight = this.lineHeight * 2 + paddingTop + paddingBottom;
    this.freeRowsHeight = this.lineHeight;
  }

  ngOnChanges() {
    this.stateChanges.next();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.growSubscription.unsubscribe();
  }

  ngAfterContentInit() {
    if (!this.ngControl) {
      return;
    }

    if (this.mcValidation.useValidation) {
      (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.setMosaicValidation)(this);
    }
  }

  ngDoCheck() {
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


  grow() {
    if (!this.canGrow) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      const textarea = this.elementRef.nativeElement;
      const outerHeight = parseInt(window.getComputedStyle(textarea).height, 10);
      const diff = outerHeight - textarea.clientHeight;
      textarea.style.minHeight = 0; // this line is important to height recalculation

      const height = Math.max(this.minHeight, +textarea.scrollHeight + diff + this.freeRowsHeight);
      textarea.style.minHeight = `${height}px`;
    });
  }
  /** Focuses the textarea. */


  focus() {
    this.elementRef.nativeElement.focus();
  }
  /** Callback for the cases where the focused state of the textarea changes. */


  focusChanged(isFocused) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  get empty() {
    return !this.elementRef.nativeElement.value && !this.isBadInput();
  }
  /**
   * Implemented as part of McFormFieldControl.
   * @docs-private
   */


  onContainerClick() {
    this.focus();
  }
  /** Does some manual dirty checking on the native textarea `value` property. */


  dirtyCheckNativeValue() {
    const newValue = this.value;

    if (this.previousNativeValue !== newValue) {
      this.previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  /** Checks whether the textarea is invalid based on the native validation. */


  isBadInput() {
    // The `validity` property won't be present on platform-server.
    const validity = this.elementRef.nativeElement.validity;
    return validity && validity.badInput;
  }

}
/** @nocollapse */

/** @nocollapse */


McTextarea.ɵfac = function McTextarea_Factory(t) {
  return new (t || McTextarea)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControl, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.MC_VALIDATION, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_TEXTAREA_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
/** @nocollapse */

/** @nocollapse */


McTextarea.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McTextarea,
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
    useExisting: McTextarea
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTextarea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'textarea[mcTextarea]',
      exportAs: 'mcTextarea',
      host: {
        class: 'mc-textarea',
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
        useExisting: McTextarea
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
        args: [MC_TEXTAREA_VALUE_ACCESSOR]
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

class McTextareaModule {}
/** @nocollapse */

/** @nocollapse */


McTextareaModule.ɵfac = function McTextareaModule_Factory(t) {
  return new (t || McTextareaModule)();
};
/** @nocollapse */

/** @nocollapse */


McTextareaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McTextareaModule
});
/** @nocollapse */

/** @nocollapse */

McTextareaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McTextareaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_1__.McCommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
      exports: [McTextarea],
      declarations: [McTextarea]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2020_ptsecurity-mosaic-textarea_mjs.js.map