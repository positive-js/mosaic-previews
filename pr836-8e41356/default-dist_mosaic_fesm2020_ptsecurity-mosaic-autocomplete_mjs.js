"use strict";
(self["webpackChunkmosaic_docs"] = self["webpackChunkmosaic_docs"] || []).push([["default-dist_mosaic_fesm2020_ptsecurity-mosaic-autocomplete_mjs"],{

/***/ 62710:
/*!*****************************************************************!*\
  !*** ./dist/mosaic/fesm2020/ptsecurity-mosaic-autocomplete.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTOCOMPLETE_BORDER_WIDTH": () => (/* binding */ AUTOCOMPLETE_BORDER_WIDTH),
/* harmony export */   "AUTOCOMPLETE_OPTION_HEIGHT": () => (/* binding */ AUTOCOMPLETE_OPTION_HEIGHT),
/* harmony export */   "AUTOCOMPLETE_PANEL_HEIGHT": () => (/* binding */ AUTOCOMPLETE_PANEL_HEIGHT),
/* harmony export */   "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": () => (/* binding */ MAT_AUTOCOMPLETE_VALUE_ACCESSOR),
/* harmony export */   "MC_AUTOCOMPLETE_DEFAULT_OPTIONS": () => (/* binding */ MC_AUTOCOMPLETE_DEFAULT_OPTIONS),
/* harmony export */   "MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MC_AUTOCOMPLETE_SCROLL_STRATEGY": () => (/* binding */ MC_AUTOCOMPLETE_SCROLL_STRATEGY),
/* harmony export */   "MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": () => (/* binding */ MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY),
/* harmony export */   "MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "McAutocomplete": () => (/* binding */ McAutocomplete),
/* harmony export */   "McAutocompleteModule": () => (/* binding */ McAutocompleteModule),
/* harmony export */   "McAutocompleteOrigin": () => (/* binding */ McAutocompleteOrigin),
/* harmony export */   "McAutocompleteSelectedEvent": () => (/* binding */ McAutocompleteSelectedEvent),
/* harmony export */   "McAutocompleteTrigger": () => (/* binding */ McAutocompleteTrigger),
/* harmony export */   "getMcAutocompleteMissingPanelError": () => (/* binding */ getMcAutocompleteMissingPanelError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/cdk/a11y */ 89542);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 62304);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/portal */ 17520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ 76328);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ 78773);
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ 79707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 25843);

















/**
 * Autocomplete IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */

const _c0 = ["panel"];

function McAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0.classList);
  }
}

const _c1 = ["*"];
let uniqueAutocompleteIdCounter = 0;

class McAutocompleteSelectedEvent {
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }

}
/** Injection token to be used to override the default options for `mc-autocomplete`. */


const MC_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-autocomplete-default-options', {
  providedIn: 'root',
  factory: MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
}); // tslint:disable-next-line naming-convention

function MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
  return {
    autoActiveFirstOption: true
  };
}

class McAutocomplete {
  constructor(changeDetectorRef, elementRef, defaults) {
    this.changeDetectorRef = changeDetectorRef;
    this.elementRef = elementRef;
    /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

    this.id = `mc-autocomplete-${uniqueAutocompleteIdCounter++}`;
    /** Whether the autocomplete panel should be visible, depending on option length. */

    this.showPanel = false;
    /** Function that maps an option's control value to its display value in the trigger. */

    this.displayWith = null;
    /** Event that is emitted whenever an option from the list is selected. */

    this.optionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is opened. */

    this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event that is emitted when the autocomplete panel is closed. */

    this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._classList = {};
    this._isOpen = false;
    this._openOnFocus = true;
    this._autoActiveFirstOption = !!defaults.autoActiveFirstOption;
  }
  /**
   * Takes classes set on the host mc-autocomplete element and applies them to the panel
   * inside the overlay container to allow for easy styling.
   */


  get classList() {
    return this._classList;
  }

  set classList(value) {
    if (value && value.length) {
      value.split(' ').forEach(className => this._classList[className.trim()] = true);
      this.elementRef.nativeElement.className = '';
    }
  }
  /**
   * Whether the first option should be highlighted when the autocomplete panel is opened.
   * Can be configured globally through the `MC_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
   */


  get autoActiveFirstOption() {
    return this._autoActiveFirstOption;
  }

  set autoActiveFirstOption(value) {
    this._autoActiveFirstOption = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }

  get isOpen() {
    return this._isOpen && this.showPanel;
  }

  set isOpen(value) {
    this._isOpen = value;
  }

  get openOnFocus() {
    return this._openOnFocus;
  }

  set openOnFocus(value) {
    this._openOnFocus = value;
  }

  ngAfterContentInit() {
    this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.ActiveDescendantKeyManager(this.options);
    this.setVisibility();
  }

  setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }

  getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }

  setVisibility() {
    this.showPanel = !!this.options.length;
    this._classList['mc-autocomplete_visible'] = this.showPanel;
    this._classList['mc-autocomplete_hidden'] = !this.showPanel;
    this.changeDetectorRef.markForCheck();
  }

  emitSelectEvent(option) {
    const event = new McAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }

  onKeydown(event) {
    this.keyManager.onKeydown(event);
  }

}
/** @nocollapse */

/** @nocollapse */


McAutocomplete.ɵfac = function McAutocomplete_Factory(t) {
  return new (t || McAutocomplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_AUTOCOMPLETE_DEFAULT_OPTIONS));
};
/** @nocollapse */

/** @nocollapse */


McAutocomplete.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McAutocomplete,
  selectors: [["mc-autocomplete"]],
  contentQueries: function McAutocomplete_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOption, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptgroup, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  viewQuery: function McAutocomplete_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
    }
  },
  hostAttrs: [1, "mc-autocomplete"],
  inputs: {
    displayWith: "displayWith",
    panelWidth: "panelWidth",
    classList: ["class", "classList"],
    autoActiveFirstOption: "autoActiveFirstOption",
    openOnFocus: "openOnFocus"
  },
  outputs: {
    optionSelected: "optionSelected",
    opened: "opened",
    closed: "closed"
  },
  exportAs: ["mcAutocomplete"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.MC_OPTION_PARENT_COMPONENT,
    useExisting: McAutocomplete
  }])],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  consts: [["role", "listbox", 1, "mc-autocomplete-panel", 3, "id", "ngClass"], ["panel", ""]],
  template: function McAutocomplete_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, McAutocomplete_ng_template_0_Template, 3, 2, "ng-template");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
  styles: [".mc-autocomplete-trigger{text-overflow:ellipsis}.mc-autocomplete-panel{visibility:hidden;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;margin-top:-1px;min-width:100%;width:100%;max-width:none;max-height:var(--mc-autocomplete-size-panel-max-height, 256px);border-width:1px;border-style:solid;border-bottom-left-radius:var(--mc-autocomplete-size-panel-border-radius, 3px);border-bottom-right-radius:var(--mc-autocomplete-size-panel-border-radius, 3px);padding:var(--mc-autocomplete-size-panel-padding, 4px 0)}.mc-autocomplete-panel.mc-autocomplete_visible{visibility:visible}.mc-autocomplete-panel.mc-autocomplete_hidden{visibility:hidden}.mc-autocomplete-panel-above .mc-autocomplete-panel{border-radius:var(--mc-autocomplete-size-panel-border-radius, 3px) var(--mc-autocomplete-size-panel-border-radius, 3px) 0 0}.mc-autocomplete-panel .mc-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mc-autocomplete-panel{outline:solid 1px}.cdk-high-contrast-active :host .mc-autocomplete-panel{outline:solid 1px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAutocomplete, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-autocomplete',
      exportAs: 'mcAutocomplete',
      host: {
        class: 'mc-autocomplete'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.MC_OPTION_PARENT_COMPONENT,
        useExisting: McAutocomplete
      }],
      template: "<ng-template>\n    <div class=\"mc-autocomplete-panel\" role=\"listbox\" [id]=\"id\" [ngClass]=\"classList\" #panel>\n        <ng-content></ng-content>\n    </div>\n</ng-template>\n",
      styles: [".mc-autocomplete-trigger{text-overflow:ellipsis}.mc-autocomplete-panel{visibility:hidden;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;margin-top:-1px;min-width:100%;width:100%;max-width:none;max-height:var(--mc-autocomplete-size-panel-max-height, 256px);border-width:1px;border-style:solid;border-bottom-left-radius:var(--mc-autocomplete-size-panel-border-radius, 3px);border-bottom-right-radius:var(--mc-autocomplete-size-panel-border-radius, 3px);padding:var(--mc-autocomplete-size-panel-padding, 4px 0)}.mc-autocomplete-panel.mc-autocomplete_visible{visibility:visible}.mc-autocomplete-panel.mc-autocomplete_hidden{visibility:hidden}.mc-autocomplete-panel-above .mc-autocomplete-panel{border-radius:var(--mc-autocomplete-size-panel-border-radius, 3px) var(--mc-autocomplete-size-panel-border-radius, 3px) 0 0}.mc-autocomplete-panel .mc-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mc-autocomplete-panel{outline:solid 1px}.cdk-high-contrast-active :host .mc-autocomplete-panel{outline:solid 1px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_AUTOCOMPLETE_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['panel', {
        static: false
      }]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptgroup]
    }],
    displayWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    panelWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    optionSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    opened: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    closed: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    classList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['class']
    }],
    autoActiveFirstOption: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    openOnFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Directive applied to an element to make it usable
 * as a connection point for an autocomplete panel.
 */


class McAutocompleteOrigin {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }

}
/** @nocollapse */

/** @nocollapse */


McAutocompleteOrigin.ɵfac = function McAutocompleteOrigin_Factory(t) {
  return new (t || McAutocompleteOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
/** @nocollapse */

/** @nocollapse */


McAutocompleteOrigin.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McAutocompleteOrigin,
  selectors: [["", "mcAutocompleteOrigin", ""]],
  exportAs: ["mcAutocompleteOrigin"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAutocompleteOrigin, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcAutocompleteOrigin]',
      exportAs: 'mcAutocompleteOrigin'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the scrollTop of the panel. Because we are not
 * actually focusing the active item, scroll must be handled manually.
 */

/** The height of each autocomplete option. */


const AUTOCOMPLETE_OPTION_HEIGHT = 32;
/** The total height of the autocomplete panel. */

const AUTOCOMPLETE_PANEL_HEIGHT = 256;
const AUTOCOMPLETE_BORDER_WIDTH = 2;
/** Injection token that determines the scroll handling while the autocomplete panel is open. */

const MC_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-autocomplete-scroll-strategy'); // tslint:disable-next-line naming-convention

function MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}

const MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MC_AUTOCOMPLETE_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay],
  useFactory: MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
};
/**
 * Provider that allows the autocomplete to register as a ControlValueAccessor.
 * @docs-private
 */

const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => McAutocompleteTrigger),
  multi: true
};
/**
 * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
 * @docs-private
 */

function getMcAutocompleteMissingPanelError() {
  return Error('Attempting to open an undefined instance of `mc-autocomplete`. ' + 'Make sure that the id passed to the `mcAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
}

class McAutocompleteTrigger {
  constructor(elementRef, viewContainerRef, changeDetectorRef, overlay, zone, scrollStrategy, dir, formField, document, // @breaking-change 8.0.0 Make `_viewportRuler` required.
  viewportRuler) {
    this.elementRef = elementRef;
    this.viewContainerRef = viewContainerRef;
    this.changeDetectorRef = changeDetectorRef;
    this.overlay = overlay;
    this.zone = zone;
    this.dir = dir;
    this.formField = formField;
    this.document = document;
    this.viewportRuler = viewportRuler; // @ts-ignore

    this.optionSelections = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.defer)(() => {
      if (this.autocomplete && this.autocomplete.options) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(...this.autocomplete.options.map(option => option.onSelectionChange));
      } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
      // Return a stream that we'll replace with the real one once everything is in place.


      return this.zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => this.optionSelections));
    });
    /**
     * `autocomplete` attribute to be set on the input element.
     * @docs-private
     */

    this.autocompleteAttribute = 'off';
    this._autocompleteDisabled = false;
    this.overlayAttached = false;
    this.componentDestroyed = false;
    /** Subscription to viewport size changes. */

    this.viewportSubscription = rxjs__WEBPACK_IMPORTED_MODULE_11__.Subscription.EMPTY;
    /**
     * Whether the autocomplete can open the next time it is focused. Used to prevent a focused,
     * closed autocomplete from being reopened if the user switches to another browser tab and then
     * comes back.
     */

    this.canOpenOnNextFocus = true;
    /** Stream of keyboard events that can close the panel. */

    this.closeKeyEventStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    /** `View -> model callback called when value changes` */
    // tslint:disable-next-line no-empty

    this.onChange = () => {};
    /** `View -> model callback called when autocomplete has been touched` */
    // tslint:disable-next-line no-empty


    this.onTouched = () => {};
    /**
     * Event handler for when the window is blurred. Needs to be an
     * arrow function in order to preserve the context.
     */


    this.windowBlurHandler = () => {
      // If the user blurred the window while the autocomplete is focused, it means that it'll be
      // refocused when they come back. In this case we want to skip the first focus event, if the
      // pane was closed, in order to avoid reopening it unintentionally.
      this.canOpenOnNextFocus = this.document.activeElement !== this.elementRef.nativeElement || this.panelOpen;
    }; // tslint:disable-next-line no-typeof-undefined


    if (typeof window !== 'undefined') {
      zone.runOutsideAngular(() => {
        window.addEventListener('blur', this.windowBlurHandler);
      });
    }

    this.scrollStrategy = scrollStrategy;
  }
  /** The currently active option, coerced to MatOption type. */


  get activeOption() {
    if (this.autocomplete && this.autocomplete.keyManager) {
      return this.autocomplete.keyManager.activeItem;
    }

    return null;
  }

  get panelOpen() {
    return this.overlayAttached && this.autocomplete.showPanel;
  }
  /**
   * Whether the autocomplete is disabled. When disabled, the element will
   * act as a regular input and the user won't be able to open the panel.
   */


  get autocompleteDisabled() {
    return this._autocompleteDisabled;
  }

  set autocompleteDisabled(value) {
    this._autocompleteDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }

  ngOnDestroy() {
    // tslint:disable-next-line no-typeof-undefined
    if (typeof window !== 'undefined') {
      window.removeEventListener('blur', this.windowBlurHandler);
    }

    this.viewportSubscription.unsubscribe();
    this.componentDestroyed = true;
    this.destroyPanel();
    this.closeKeyEventStream.complete();
  }
  /** Opens the autocomplete suggestion panel. */


  openPanel() {
    this.attachOverlay();
  }

  closePanel() {
    if (!this.overlayAttached) {
      return;
    }

    if (this.panelOpen) {
      this.autocomplete.closed.emit();
    }

    this.autocomplete.isOpen = this.overlayAttached = false;

    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
      this.closingActionsSubscription.unsubscribe();
    } // Note that in some cases this can end up being called after the component is destroyed.
    // Add a check to ensure that we don't try to run change detection on a destroyed view.


    if (!this.componentDestroyed) {
      // We need to trigger change detection manually, because
      // `fromEvent` doesn't seem to do it at the proper time.
      // This ensures that the label is reset when the
      // user clicks outside.
      this.changeDetectorRef.detectChanges();
    }
  }
  /**
   * Updates the position of the autocomplete suggestion panel to ensure that it fits all options
   * within the viewport.
   */


  updatePosition() {
    if (this.overlayAttached) {
      this.overlayRef.updatePosition();
    }
  }
  /**
   * A stream of actions that should close the autocomplete panel, including
   * when an option is selected, on blur, and when TAB is pressed.
   */


  get panelClosingActions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.optionSelections, this.autocomplete.keyManager.tabOut.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(() => this.overlayAttached)), this.closeKeyEventStream, this.getOutsideClickStream(), this.overlayRef ? this.overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(() => this.overlayAttached)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)()).pipe( // Normalize the output so we return a consistent type.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(event => event instanceof _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionSelectionChange ? event : null));
  } // Implemented as part of ControlValueAccessor.


  writeValue(value) {
    Promise.resolve(null).then(() => this.setTriggerValue(value));
  } // Implemented as part of ControlValueAccessor.


  registerOnChange(fn) {
    this.onChange = fn;
  } // Implemented as part of ControlValueAccessor.


  registerOnTouched(fn) {
    this.onTouched = fn;
  } // Implemented as part of ControlValueAccessor.


  setDisabledState(isDisabled) {
    this.elementRef.nativeElement.disabled = isDisabled;
  }

  handleKeydown(event) {
    // tslint:disable-next-line deprecation
    const keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
    // in line with other browsers. By default, pressing escape on IE will cause it to revert
    // the input value to the one that it had on focus, however it won't dispatch any events
    // which means that the model value will be out of sync with the view.

    if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE) {
      event.preventDefault();
    }

    if (this.activeOption && keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ENTER && this.panelOpen) {
      this.activeOption.selectViaInteraction();
      this.resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete.keyManager.activeItem;

      if (this.panelOpen || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.TAB) {
        this.autocomplete.onKeydown(event);
      } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW && this.canOpen()) {
        this.openPanel();
      }

      const isArrowKey = keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW;

      if (isArrowKey || this.autocomplete.keyManager.activeItem !== prevActiveItem) {
        this.scrollToOption();
      }
    }
  }

  handleInput(event) {
    const target = event.target;
    let value = target.value; // Based on `NumberValueAccessor` from forms.

    if (target.type === 'number') {
      value = value === '' ? null : parseFloat(value);
    } // If the input has a placeholder, IE will fire the `input` event on page load,
    // focus and blur, in addition to when the user actually changed the value. To
    // filter out all of the extra events, we save the value on focus and between
    // `input` events, and we check whether it changed.
    // See: https://connect.microsoft.com/IE/feedback/details/885747/


    if (this.previousValue !== value) {
      this.previousValue = value;
      this.onChange(value);

      if (this.canOpen() && this.document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }

  handleFocus() {
    if (!this.canOpenOnNextFocus) {
      this.canOpenOnNextFocus = true;
    } else if (this.canOpen() && this.autocomplete.openOnFocus) {
      this.previousValue = this.elementRef.nativeElement.value;
      this.attachOverlay();
    }
  }

  handleClick($event) {
    if (this.canOpen() && this.document.activeElement === $event.target) {
      this.openPanel();
    }
  }
  /** Stream of clicks outside of the autocomplete panel. */


  getOutsideClickStream() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)( // tslint:disable-next-line: no-unnecessary-type-assertion
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'click'), // tslint:disable-next-line: no-unnecessary-type-assertion
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'touchend')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(event => {
      const clickTarget = event.target;
      const formField = this.formField ? this.formField._elementRef.nativeElement : null;
      const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
      return this.overlayAttached && clickTarget !== this.elementRef.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this.overlayRef && !this.overlayRef.overlayElement.contains(clickTarget);
    }));
  }
  /**
   * Given that we are not actually focusing active options, we must manually adjust scroll
   * to reveal options below the fold. First, we find the offset of the option from the top
   * of the panel. If that offset is below the fold, the new scrollTop will be the offset -
   * the panel height + the option height, so the active option will be just visible at the
   * bottom of the panel. If that offset is above the top of the visible panel, the new scrollTop
   * will become the offset. If that offset is visible within the panel already, the scrollTop is
   * not adjusted.
   */


  scrollToOption() {
    const index = this.autocomplete.keyManager.activeItemIndex || 0;
    const labelCount = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.countGroupLabelsBeforeOption)(index, this.autocomplete.options, this.autocomplete.optionGroups);
    const newScrollPosition = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.getOptionScrollPosition)(index + labelCount, AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete.getScrollTop(), AUTOCOMPLETE_PANEL_HEIGHT);
    this.autocomplete.setScrollTop(newScrollPosition);
  }
  /**
   * This method listens to a stream of panel closing actions and resets the
   * stream every time the option list changes.
   */


  subscribeToClosingActions() {
    const firstStable = this.zone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1));
    const optionChanges = this.autocomplete.options.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(() => this.positionStrategy.reapplyLastPosition()), // Defer emitting to the stream until the next tick, because changing
    // bindings in here will cause "changed after checked" errors.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0)); // When the zone is stable initially, and when the option list changes...

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
    // that were created, and flatten it so our stream only emits closing events...
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => {
      const wasOpen = this.panelOpen;
      this.resetActiveItem();
      this.autocomplete.setVisibility();

      if (this.panelOpen) {
        this.overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
        // event, because we may not have emitted it when the panel was attached. This
        // can happen if the users opens the panel and there are no options, but the
        // options come in slightly later or as a result of the value changing.

        if (wasOpen !== this.panelOpen) {
          this.autocomplete.opened.emit();
        }
      }

      return this.panelClosingActions;
    }), // when the first closing event occurs...
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)) // set the value, close the panel, and complete.
    .subscribe(event => this.setValueAndClose(event));
  }
  /** Destroys the autocomplete suggestion panel. */


  destroyPanel() {
    if (this.overlayRef) {
      this.closePanel();
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }

  setTriggerValue(value) {
    const toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
    // The display value can also be the number zero and shouldn't fall back to an empty string.

    const inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
    // through change detection.

    if (this.formField) {
      this.formField.control.value = inputValue;
    } else {
      this.elementRef.nativeElement.value = inputValue;
    }

    this.previousValue = inputValue;
  }
  /** This method closes the panel, and if a value is specified, also sets the associated
   * control to that value. It will also mark the control as dirty if this interaction
   * stemmed from the user.
   */


  setValueAndClose(event) {
    if (event && event.source) {
      this.clearPreviousSelectedOption(event.source);
      this.setTriggerValue(event.source.value);
      this.onChange(event.source.value);
      this.elementRef.nativeElement.focus();
      this.autocomplete.emitSelectEvent(event.source);
    }

    this.closePanel();
  }
  /** Clear any previous selected option and emit a selection change event for this option */


  clearPreviousSelectedOption(skip) {
    this.autocomplete.options.forEach(option => {
      if (option !== skip && option.selected) {
        option.deselect();
      }
    });
  }

  attachOverlay() {
    if (!this.autocomplete) {
      throw getMcAutocompleteMissingPanelError();
    }

    let overlayRef = this.overlayRef;

    if (!overlayRef) {
      this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__.TemplatePortal(this.autocomplete.template, this.viewContainerRef);
      overlayRef = this.overlay.create(this.getOverlayConfig());
      this.overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
      // the overlay event targeting provided by the CDK overlay.

      overlayRef.keydownEvents().subscribe(event => {
        // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
        // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
        // tslint:disable-next-line deprecation
        if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE || event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW && event.altKey) {
          this.resetActiveItem();
          this.closeKeyEventStream.next();
        }
      });

      if (this.viewportRuler) {
        this.viewportSubscription = this.viewportRuler.change().subscribe(() => {
          if (this.panelOpen && overlayRef) {
            overlayRef.updateSize({
              width: this.getPanelWidth()
            });
          }
        });
      }
    } else {
      const position = overlayRef.getConfig().positionStrategy; // Update the trigger, panel width and direction, in case anything has changed.

      position.setOrigin(this.getConnectedElement());
      overlayRef.updateSize({
        width: this.getPanelWidth()
      });
    }

    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this.portal);
      this.closingActionsSubscription = this.subscribeToClosingActions();
    }

    const wasOpen = this.panelOpen;
    this.autocomplete.setVisibility();
    this.autocomplete.isOpen = this.overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
    // autocomplete won't be shown if there are no options.

    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this.autocomplete.opened.emit();
    }
  }

  getOverlayConfig() {
    return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayConfig({
      positionStrategy: this.getOverlayPosition(),
      scrollStrategy: this.scrollStrategy(),
      width: this.getPanelWidth(),
      direction: this.dir
    });
  }

  getOverlayPosition() {
    this.positionStrategy = this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPositions([{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
      // The overlay edge connected to the trigger should have squared corners, while
      // the opposite end has rounded corners. We apply a CSS class to swap the
      // border-radius based on the overlay position.
      panelClass: 'mc-autocomplete-panel-above'
    }]);
    return this.positionStrategy;
  }

  getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }

    return this.formField ? this.formField.getConnectedOverlayOrigin() : this.elementRef;
  }

  getPanelWidth() {
    return this.autocomplete.panelWidth || this.getHostWidth() - AUTOCOMPLETE_BORDER_WIDTH;
  }

  getHostWidth() {
    return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  /**
   * Resets the active item to -1 so arrow events will activate the
   * correct options, or to 0 if the consumer opted into it.
   */


  resetActiveItem() {
    if (this.autocomplete.autoActiveFirstOption) {
      this.autocomplete.keyManager.setFirstItemActive();
    } else {
      this.autocomplete.keyManager.setActiveItem(-1);
    }
  }

  canOpen() {
    const element = this.elementRef.nativeElement;
    return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
  }

}
/** @nocollapse */

/** @nocollapse */


McAutocompleteTrigger.ɵfac = function McAutocompleteTrigger_Factory(t) {
  return new (t || McAutocompleteTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_22__.McFormField, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ViewportRuler));
};
/** @nocollapse */

/** @nocollapse */


McAutocompleteTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McAutocompleteTrigger,
  selectors: [["input", "mcAutocomplete", ""], ["textarea", "mcAutocomplete", ""]],
  hostAttrs: [1, "mc-autocomplete-trigger"],
  hostVars: 1,
  hostBindings: function McAutocompleteTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusin", function McAutocompleteTrigger_focusin_HostBindingHandler() {
        return ctx.handleFocus();
      })("blur", function McAutocompleteTrigger_blur_HostBindingHandler() {
        return ctx.onTouched();
      })("input", function McAutocompleteTrigger_input_HostBindingHandler($event) {
        return ctx.handleInput($event);
      })("keydown", function McAutocompleteTrigger_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("click", function McAutocompleteTrigger_click_HostBindingHandler($event) {
        return ctx.handleClick($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("autocomplete", ctx.autocompleteAttribute);
    }
  },
  inputs: {
    autocomplete: ["mcAutocomplete", "autocomplete"],
    connectedTo: ["mcAutocompleteConnectedTo", "connectedTo"],
    autocompleteAttribute: ["autocomplete", "autocompleteAttribute"],
    autocompleteDisabled: ["mcAutocompleteDisabled", "autocompleteDisabled"]
  },
  exportAs: ["mcAutocompleteTrigger"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_AUTOCOMPLETE_VALUE_ACCESSOR])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAutocompleteTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `input[mcAutocomplete], textarea[mcAutocomplete]`,
      host: {
        class: 'mc-autocomplete-trigger',
        '[attr.autocomplete]': 'autocompleteAttribute',
        // Note: we use `focusin`, as opposed to `focus`, in order to open the panel
        // a little earlier. This avoids issues where IE delays the focusing of the input.
        '(focusin)': 'handleFocus()',
        '(blur)': 'onTouched()',
        '(input)': 'handleInput($event)',
        '(keydown)': 'handleKeydown($event)',
        '(click)': 'handleClick($event)'
      },
      exportAs: 'mcAutocompleteTrigger',
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_AUTOCOMPLETE_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_22__.McFormField,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ViewportRuler
    }];
  }, {
    autocomplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcAutocomplete']
    }],
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcAutocompleteConnectedTo']
    }],
    autocompleteAttribute: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['autocomplete']
    }],
    autocompleteDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcAutocompleteDisabled']
    }]
  });
})();

class McAutocompleteModule {}
/** @nocollapse */

/** @nocollapse */


McAutocompleteModule.ɵfac = function McAutocompleteModule_Factory(t) {
  return new (t || McAutocompleteModule)();
};
/** @nocollapse */

/** @nocollapse */


McAutocompleteModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McAutocompleteModule
});
/** @nocollapse */

/** @nocollapse */

McAutocompleteModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McAutocompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      exports: [McAutocomplete, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, McAutocompleteTrigger, McAutocompleteOrigin, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule],
      declarations: [McAutocomplete, McAutocompleteTrigger, McAutocompleteOrigin],
      providers: [MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2020_ptsecurity-mosaic-autocomplete_mjs.js.map