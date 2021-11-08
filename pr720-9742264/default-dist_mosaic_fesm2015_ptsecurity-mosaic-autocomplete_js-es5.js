(function () {
  "use strict";

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-autocomplete_js"], {
    /***/
    17952: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AUTOCOMPLETE_BORDER_WIDTH": function AUTOCOMPLETE_BORDER_WIDTH() {
          return (
            /* binding */
            _AUTOCOMPLETE_BORDER_WIDTH
          );
        },

        /* harmony export */
        "AUTOCOMPLETE_OPTION_HEIGHT": function AUTOCOMPLETE_OPTION_HEIGHT() {
          return (
            /* binding */
            _AUTOCOMPLETE_OPTION_HEIGHT
          );
        },

        /* harmony export */
        "AUTOCOMPLETE_PANEL_HEIGHT": function AUTOCOMPLETE_PANEL_HEIGHT() {
          return (
            /* binding */
            _AUTOCOMPLETE_PANEL_HEIGHT
          );
        },

        /* harmony export */
        "MAT_AUTOCOMPLETE_VALUE_ACCESSOR": function MAT_AUTOCOMPLETE_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MAT_AUTOCOMPLETE_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "MC_AUTOCOMPLETE_DEFAULT_OPTIONS": function MC_AUTOCOMPLETE_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MC_AUTOCOMPLETE_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY": function MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
          return (
            /* binding */
            _MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
          );
        },

        /* harmony export */
        "MC_AUTOCOMPLETE_SCROLL_STRATEGY": function MC_AUTOCOMPLETE_SCROLL_STRATEGY() {
          return (
            /* binding */
            _MC_AUTOCOMPLETE_SCROLL_STRATEGY
          );
        },

        /* harmony export */
        "MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY": function MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY() {
          return (
            /* binding */
            _MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
          );
        },

        /* harmony export */
        "MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER": function MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER() {
          return (
            /* binding */
            _MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER
          );
        },

        /* harmony export */
        "McAutocomplete": function McAutocomplete() {
          return (
            /* binding */
            _McAutocomplete
          );
        },

        /* harmony export */
        "McAutocompleteModule": function McAutocompleteModule() {
          return (
            /* binding */
            _McAutocompleteModule
          );
        },

        /* harmony export */
        "McAutocompleteOrigin": function McAutocompleteOrigin() {
          return (
            /* binding */
            _McAutocompleteOrigin
          );
        },

        /* harmony export */
        "McAutocompleteSelectedEvent": function McAutocompleteSelectedEvent() {
          return (
            /* binding */
            _McAutocompleteSelectedEvent
          );
        },

        /* harmony export */
        "McAutocompleteTrigger": function McAutocompleteTrigger() {
          return (
            /* binding */
            _McAutocompleteTrigger
          );
        },

        /* harmony export */
        "getMcAutocompleteMissingPanelError": function getMcAutocompleteMissingPanelError() {
          return (
            /* binding */
            _getMcAutocompleteMissingPanelError
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/cdk/a11y */
      61729);
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      46872);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      45129);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/portal */
      40912);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ptsecurity/cdk/keycodes */
      32121);
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      50599);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      58640);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      89919);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      94283);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      81134);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      82516);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      79902);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      33927);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      75428);
      /**
       * Autocomplete IDs need to be unique across components, so this counter exists outside of
       * the component definition.
       */


      var _c0 = ["panel"];

      function McAutocomplete_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("ngClass", ctx_r0.classList);
        }
      }

      var _c1 = ["*"];
      var uniqueAutocompleteIdCounter = 0;

      var _McAutocompleteSelectedEvent = function _McAutocompleteSelectedEvent(source, option) {
        _classCallCheck(this, _McAutocompleteSelectedEvent);

        this.source = source;
        this.option = option;
      };
      /** Injection token to be used to override the default options for `mc-autocomplete`. */


      var _MC_AUTOCOMPLETE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-autocomplete-default-options', {
        providedIn: 'root',
        factory: _MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY
      }); // tslint:disable-next-line naming-convention


      function _MC_AUTOCOMPLETE_DEFAULT_OPTIONS_FACTORY() {
        return {
          autoActiveFirstOption: true
        };
      }

      var _McAutocomplete = /*#__PURE__*/function () {
        function _McAutocomplete(changeDetectorRef, elementRef, defaults) {
          _classCallCheck(this, _McAutocomplete);

          this.changeDetectorRef = changeDetectorRef;
          this.elementRef = elementRef;
          /** Unique ID to be used by autocomplete trigger's "aria-owns" property. */

          this.id = "mc-autocomplete-".concat(uniqueAutocompleteIdCounter++);
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


        _createClass(_McAutocomplete, [{
          key: "classList",
          get: function get() {
            return this._classList;
          },
          set: function set(value) {
            var _this = this;

            if (value && value.length) {
              value.split(' ').forEach(function (className) {
                return _this._classList[className.trim()] = true;
              });
              this.elementRef.nativeElement.className = '';
            }
          }
          /**
           * Whether the first option should be highlighted when the autocomplete panel is opened.
           * Can be configured globally through the `MC_AUTOCOMPLETE_DEFAULT_OPTIONS` token.
           */

        }, {
          key: "autoActiveFirstOption",
          get: function get() {
            return this._autoActiveFirstOption;
          },
          set: function set(value) {
            this._autoActiveFirstOption = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
        }, {
          key: "isOpen",
          get: function get() {
            return this._isOpen && this.showPanel;
          },
          set: function set(value) {
            this._isOpen = value;
          }
        }, {
          key: "openOnFocus",
          get: function get() {
            return this._openOnFocus;
          },
          set: function set(value) {
            this._openOnFocus = value;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.ActiveDescendantKeyManager(this.options);
            this.setVisibility();
          }
        }, {
          key: "setScrollTop",
          value: function setScrollTop(scrollTop) {
            if (this.panel) {
              this.panel.nativeElement.scrollTop = scrollTop;
            }
          }
        }, {
          key: "getScrollTop",
          value: function getScrollTop() {
            return this.panel ? this.panel.nativeElement.scrollTop : 0;
          }
        }, {
          key: "setVisibility",
          value: function setVisibility() {
            this.showPanel = !!this.options.length;
            this._classList['mc-autocomplete_visible'] = this.showPanel;
            this._classList['mc-autocomplete_hidden'] = !this.showPanel;
            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "emitSelectEvent",
          value: function emitSelectEvent(option) {
            var event = new _McAutocompleteSelectedEvent(this, option);
            this.optionSelected.emit(event);
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            this.keyManager.onKeydown(event);
          }
        }]);

        return _McAutocomplete;
      }();
      /** @nocollapse */


      _McAutocomplete.ɵfac = function McAutocomplete_Factory(t) {
        return new (t || _McAutocomplete)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MC_AUTOCOMPLETE_DEFAULT_OPTIONS));
      };
      /** @nocollapse */


      _McAutocomplete.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _McAutocomplete,
        selectors: [["mc-autocomplete"]],
        contentQueries: function McAutocomplete_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOption, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptgroup, 4);
          }

          if (rf & 2) {
            var _t;

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
            var _t;

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
          useExisting: _McAutocomplete
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
        styles: [".mc-autocomplete-trigger{text-overflow:ellipsis}.mc-autocomplete-panel{visibility:hidden;position:relative;overflow:auto;-webkit-overflow-scrolling:touch;margin-top:-1px;min-width:100%;width:100%;max-width:none;max-height:256px;max-height:var(--mc-autocomplete-size-panel-max-height, 256px);border-width:1px;border-style:solid;border-bottom-left-radius:3px;border-bottom-left-radius:var(--mc-autocomplete-size-panel-border-radius, 3px);border-bottom-right-radius:3px;border-bottom-right-radius:var(--mc-autocomplete-size-panel-border-radius, 3px);padding:4px 0;padding:var(--mc-autocomplete-size-panel-padding, 4px 0)}.mc-autocomplete-panel.mc-autocomplete_visible{visibility:visible}.mc-autocomplete-panel.mc-autocomplete_hidden{visibility:hidden}.mc-autocomplete-panel-above .mc-autocomplete-panel{border-radius:3px 3px 0 0;border-radius:var(--mc-autocomplete-size-panel-border-radius, 3px) var(--mc-autocomplete-size-panel-border-radius, 3px) 0 0}.mc-autocomplete-panel .mc-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mc-autocomplete-panel{outline:solid 1px}.cdk-high-contrast-active :host .mc-autocomplete-panel{outline:solid 1px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McAutocomplete, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mc-autocomplete',
            exportAs: 'mcAutocomplete',
            templateUrl: 'autocomplete.html',
            styleUrls: ['autocomplete.scss'],
            host: {
              "class": 'mc-autocomplete'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            providers: [{
              provide: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.MC_OPTION_PARENT_COMPONENT,
              useExisting: _McAutocomplete
            }]
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
              args: [_MC_AUTOCOMPLETE_DEFAULT_OPTIONS]
            }]
          }];
        }, {
          template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, {
              "static": true
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['panel', {
              "static": false
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


      var _McAutocompleteOrigin = function _McAutocompleteOrigin(elementRef) {
        _classCallCheck(this, _McAutocompleteOrigin);

        this.elementRef = elementRef;
      };
      /** @nocollapse */


      _McAutocompleteOrigin.ɵfac = function McAutocompleteOrigin_Factory(t) {
        return new (t || _McAutocompleteOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
      /** @nocollapse */


      _McAutocompleteOrigin.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _McAutocompleteOrigin,
        selectors: [["", "mcAutocompleteOrigin", ""]],
        exportAs: ["mcAutocompleteOrigin"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McAutocompleteOrigin, [{
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


      var _AUTOCOMPLETE_OPTION_HEIGHT = 32;
      /** The total height of the autocomplete panel. */

      var _AUTOCOMPLETE_PANEL_HEIGHT = 256;
      var _AUTOCOMPLETE_BORDER_WIDTH = 2;
      /** Injection token that determines the scroll handling while the autocomplete panel is open. */

      var _MC_AUTOCOMPLETE_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-autocomplete-scroll-strategy'); // tslint:disable-next-line naming-convention


      function _MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }

      var _MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: _MC_AUTOCOMPLETE_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay],
        useFactory: _MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Provider that allows the autocomplete to register as a ControlValueAccessor.
       * @docs-private
       */

      var _MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _McAutocompleteTrigger;
        }),
        multi: true
      };
      /**
       * Creates an error to be thrown when attempting to use an autocomplete trigger without a panel.
       * @docs-private
       */

      function _getMcAutocompleteMissingPanelError() {
        return Error('Attempting to open an undefined instance of `mc-autocomplete`. ' + 'Make sure that the id passed to the `mcAutocomplete` is correct and that ' + 'you\'re attempting to open it after the ngAfterContentInit hook.');
      }

      var _McAutocompleteTrigger = /*#__PURE__*/function () {
        function _McAutocompleteTrigger(elementRef, viewContainerRef, changeDetectorRef, overlay, zone, scrollStrategy, dir, formField, document, // @breaking-change 8.0.0 Make `_viewportRuler` required.
        viewportRuler) {
          var _this2 = this;

          _classCallCheck(this, _McAutocompleteTrigger);

          this.elementRef = elementRef;
          this.viewContainerRef = viewContainerRef;
          this.changeDetectorRef = changeDetectorRef;
          this.overlay = overlay;
          this.zone = zone;
          this.dir = dir;
          this.formField = formField;
          this.document = document;
          this.viewportRuler = viewportRuler; // @ts-ignore

          this.optionSelections = (0, rxjs__WEBPACK_IMPORTED_MODULE_7__.defer)(function () {
            if (_this2.autocomplete && _this2.autocomplete.options) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.merge).apply(void 0, _toConsumableArray(_this2.autocomplete.options.map(function (option) {
                return option.onSelectionChange;
              })));
            } // If there are any subscribers before `ngAfterViewInit`, the `autocomplete` will be undefined.
            // Return a stream that we'll replace with the real one once everything is in place.


            return _this2.zone.onStable.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(function () {
              return _this2.optionSelections;
            }));
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

          this.onChange = function () {};
          /** `View -> model callback called when autocomplete has been touched` */
          // tslint:disable-next-line no-empty


          this.onTouched = function () {};
          /**
           * Event handler for when the window is blurred. Needs to be an
           * arrow function in order to preserve the context.
           */


          this.windowBlurHandler = function () {
            // If the user blurred the window while the autocomplete is focused, it means that it'll be
            // refocused when they come back. In this case we want to skip the first focus event, if the
            // pane was closed, in order to avoid reopening it unintentionally.
            _this2.canOpenOnNextFocus = _this2.document.activeElement !== _this2.elementRef.nativeElement || _this2.panelOpen;
          }; // tslint:disable-next-line no-typeof-undefined


          if (typeof window !== 'undefined') {
            zone.runOutsideAngular(function () {
              window.addEventListener('blur', _this2.windowBlurHandler);
            });
          }

          this.scrollStrategy = scrollStrategy;
        }
        /** The currently active option, coerced to MatOption type. */


        _createClass(_McAutocompleteTrigger, [{
          key: "activeOption",
          get: function get() {
            if (this.autocomplete && this.autocomplete.keyManager) {
              return this.autocomplete.keyManager.activeItem;
            }

            return null;
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this.overlayAttached && this.autocomplete.showPanel;
          }
          /**
           * Whether the autocomplete is disabled. When disabled, the element will
           * act as a regular input and the user won't be able to open the panel.
           */

        }, {
          key: "autocompleteDisabled",
          get: function get() {
            return this._autocompleteDisabled;
          },
          set: function set(value) {
            this._autocompleteDisabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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

        }, {
          key: "openPanel",
          value: function openPanel() {
            this.attachOverlay();
          }
        }, {
          key: "closePanel",
          value: function closePanel() {
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

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this.overlayAttached) {
              this.overlayRef.updatePosition();
            }
          }
          /**
           * A stream of actions that should close the autocomplete panel, including
           * when an option is selected, on blur, and when TAB is pressed.
           */

        }, {
          key: "panelClosingActions",
          get: function get() {
            var _this3 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(this.optionSelections, this.autocomplete.keyManager.tabOut.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(function () {
              return _this3.overlayAttached;
            })), this.closeKeyEventStream, this.getOutsideClickStream(), this.overlayRef ? this.overlayRef.detachments().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(function () {
              return _this3.overlayAttached;
            })) : (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.of)()).pipe( // Normalize the output so we return a consistent type.
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(function (event) {
              return event instanceof _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionSelectionChange ? event : null;
            }));
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this4 = this;

            Promise.resolve(null).then(function () {
              return _this4.setTriggerValue(value);
            });
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.elementRef.nativeElement.disabled = isDisabled;
          }
        }, {
          key: "handleKeydown",
          value: function handleKeydown(event) {
            // tslint:disable-next-line deprecation
            var keyCode = event.keyCode; // Prevent the default action on all escape key presses. This is here primarily to bring IE
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
              var prevActiveItem = this.autocomplete.keyManager.activeItem;

              if (this.panelOpen || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.TAB) {
                this.autocomplete.onKeydown(event);
              } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW && this.canOpen()) {
                this.openPanel();
              }

              var isArrowKey = keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.DOWN_ARROW;

              if (isArrowKey || this.autocomplete.keyManager.activeItem !== prevActiveItem) {
                this.scrollToOption();
              }
            }
          }
        }, {
          key: "handleInput",
          value: function handleInput(event) {
            var target = event.target;
            var value = target.value; // Based on `NumberValueAccessor` from forms.

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
        }, {
          key: "handleFocus",
          value: function handleFocus() {
            if (!this.canOpenOnNextFocus) {
              this.canOpenOnNextFocus = true;
            } else if (this.canOpen() && this.autocomplete.openOnFocus) {
              this.previousValue = this.elementRef.nativeElement.value;
              this.attachOverlay();
            }
          }
        }, {
          key: "handleClick",
          value: function handleClick($event) {
            if (this.canOpen() && this.document.activeElement === $event.target) {
              this.openPanel();
            }
          }
          /** Stream of clicks outside of the autocomplete panel. */

        }, {
          key: "getOutsideClickStream",
          value: function getOutsideClickStream() {
            var _this5 = this;

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)( // tslint:disable-next-line: no-unnecessary-type-assertion
            (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'click'), // tslint:disable-next-line: no-unnecessary-type-assertion
            (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'touchend')).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.filter)(function (event) {
              var clickTarget = event.target;
              var formField = _this5.formField ? _this5.formField._elementRef.nativeElement : null;
              var customOrigin = _this5.connectedTo ? _this5.connectedTo.elementRef.nativeElement : null;
              return _this5.overlayAttached && clickTarget !== _this5.elementRef.nativeElement && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!_this5.overlayRef && !_this5.overlayRef.overlayElement.contains(clickTarget);
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

        }, {
          key: "scrollToOption",
          value: function scrollToOption() {
            var index = this.autocomplete.keyManager.activeItemIndex || 0;
            var labelCount = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.countGroupLabelsBeforeOption)(index, this.autocomplete.options, this.autocomplete.optionGroups);
            var newScrollPosition = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.getOptionScrollPosition)(index + labelCount, _AUTOCOMPLETE_OPTION_HEIGHT, this.autocomplete.getScrollTop(), _AUTOCOMPLETE_PANEL_HEIGHT);
            this.autocomplete.setScrollTop(newScrollPosition);
          }
          /**
           * This method listens to a stream of panel closing actions and resets the
           * stream every time the option list changes.
           */

        }, {
          key: "subscribeToClosingActions",
          value: function subscribeToClosingActions() {
            var _this6 = this;

            var firstStable = this.zone.onStable.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1));
            var optionChanges = this.autocomplete.options.changes.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.tap)(function () {
              return _this6.positionStrategy.reapplyLastPosition();
            }), // Defer emitting to the stream until the next tick, because changing
            // bindings in here will cause "changed after checked" errors.
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.delay)(0)); // When the zone is stable initially, and when the option list changes...

            return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.merge)(firstStable, optionChanges).pipe( // create a new stream of panelClosingActions, replacing any previous streams
            // that were created, and flatten it so our stream only emits closing events...
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(function () {
              var wasOpen = _this6.panelOpen;

              _this6.resetActiveItem();

              _this6.autocomplete.setVisibility();

              if (_this6.panelOpen) {
                _this6.overlayRef.updatePosition(); // If the `panelOpen` state changed, we need to make sure to emit the `opened`
                // event, because we may not have emitted it when the panel was attached. This
                // can happen if the users opens the panel and there are no options, but the
                // options come in slightly later or as a result of the value changing.


                if (wasOpen !== _this6.panelOpen) {
                  _this6.autocomplete.opened.emit();
                }
              }

              return _this6.panelClosingActions;
            }), // when the first closing event occurs...
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.take)(1)) // set the value, close the panel, and complete.
            .subscribe(function (event) {
              return _this6.setValueAndClose(event);
            });
          }
          /** Destroys the autocomplete suggestion panel. */

        }, {
          key: "destroyPanel",
          value: function destroyPanel() {
            if (this.overlayRef) {
              this.closePanel();
              this.overlayRef.dispose();
              this.overlayRef = null;
            }
          }
        }, {
          key: "setTriggerValue",
          value: function setTriggerValue(value) {
            var toDisplay = this.autocomplete && this.autocomplete.displayWith ? this.autocomplete.displayWith(value) : value; // Simply falling back to an empty string if the display value is falsy does not work properly.
            // The display value can also be the number zero and shouldn't fall back to an empty string.

            var inputValue = toDisplay != null ? toDisplay : ''; // If it's used within a `MatFormField`, we should set it through the property so it can go
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

        }, {
          key: "setValueAndClose",
          value: function setValueAndClose(event) {
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

        }, {
          key: "clearPreviousSelectedOption",
          value: function clearPreviousSelectedOption(skip) {
            this.autocomplete.options.forEach(function (option) {
              if (option !== skip && option.selected) {
                option.deselect();
              }
            });
          }
        }, {
          key: "attachOverlay",
          value: function attachOverlay() {
            var _this7 = this;

            if (!this.autocomplete) {
              throw _getMcAutocompleteMissingPanelError();
            }

            var overlayRef = this.overlayRef;

            if (!overlayRef) {
              this.portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_20__.TemplatePortal(this.autocomplete.template, this.viewContainerRef);
              overlayRef = this.overlay.create(this.getOverlayConfig());
              this.overlayRef = overlayRef; // Use the `keydownEvents` in order to take advantage of
              // the overlay event targeting provided by the CDK overlay.

              overlayRef.keydownEvents().subscribe(function (event) {
                // Close when pressing ESCAPE or ALT + UP_ARROW, based on the a11y guidelines.
                // See: https://www.w3.org/TR/wai-aria-practices-1.1/#textbox-keyboard-interaction
                // tslint:disable-next-line deprecation
                if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.ESCAPE || event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_16__.UP_ARROW && event.altKey) {
                  _this7.resetActiveItem();

                  _this7.closeKeyEventStream.next();
                }
              });

              if (this.viewportRuler) {
                this.viewportSubscription = this.viewportRuler.change().subscribe(function () {
                  if (_this7.panelOpen && overlayRef) {
                    overlayRef.updateSize({
                      width: _this7.getPanelWidth()
                    });
                  }
                });
              }
            } else {
              var position = overlayRef.getConfig().positionStrategy; // Update the trigger, panel width and direction, in case anything has changed.

              position.setOrigin(this.getConnectedElement());
              overlayRef.updateSize({
                width: this.getPanelWidth()
              });
            }

            if (overlayRef && !overlayRef.hasAttached()) {
              overlayRef.attach(this.portal);
              this.closingActionsSubscription = this.subscribeToClosingActions();
            }

            var wasOpen = this.panelOpen;
            this.autocomplete.setVisibility();
            this.autocomplete.isOpen = this.overlayAttached = true; // We need to do an extra `panelOpen` check in here, because the
            // autocomplete won't be shown if there are no options.

            if (this.panelOpen && wasOpen !== this.panelOpen) {
              this.autocomplete.opened.emit();
            }
          }
        }, {
          key: "getOverlayConfig",
          value: function getOverlayConfig() {
            return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayConfig({
              positionStrategy: this.getOverlayPosition(),
              scrollStrategy: this.scrollStrategy(),
              width: this.getPanelWidth(),
              direction: this.dir
            });
          }
        }, {
          key: "getOverlayPosition",
          value: function getOverlayPosition() {
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
        }, {
          key: "getConnectedElement",
          value: function getConnectedElement() {
            if (this.connectedTo) {
              return this.connectedTo.elementRef;
            }

            return this.formField ? this.formField.getConnectedOverlayOrigin() : this.elementRef;
          }
        }, {
          key: "getPanelWidth",
          value: function getPanelWidth() {
            return this.autocomplete.panelWidth || this.getHostWidth() - _AUTOCOMPLETE_BORDER_WIDTH;
          }
        }, {
          key: "getHostWidth",
          value: function getHostWidth() {
            return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
          }
          /**
           * Resets the active item to -1 so arrow events will activate the
           * correct options, or to 0 if the consumer opted into it.
           */

        }, {
          key: "resetActiveItem",
          value: function resetActiveItem() {
            if (this.autocomplete.autoActiveFirstOption) {
              this.autocomplete.keyManager.setFirstItemActive();
            } else {
              this.autocomplete.keyManager.setActiveItem(-1);
            }
          }
        }, {
          key: "canOpen",
          value: function canOpen() {
            var element = this.elementRef.nativeElement;
            return !element.readOnly && !element.disabled && !this._autocompleteDisabled;
          }
        }]);

        return _McAutocompleteTrigger;
      }();
      /** @nocollapse */


      _McAutocompleteTrigger.ɵfac = function McAutocompleteTrigger_Factory(t) {
        return new (t || _McAutocompleteTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MC_AUTOCOMPLETE_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_21__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_22__.McFormField, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__.ViewportRuler));
      };
      /** @nocollapse */


      _McAutocompleteTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _McAutocompleteTrigger,
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_MAT_AUTOCOMPLETE_VALUE_ACCESSOR])]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McAutocompleteTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "input[mcAutocomplete], textarea[mcAutocomplete]",
            host: {
              "class": 'mc-autocomplete-trigger',
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
            providers: [_MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
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
              args: [_MC_AUTOCOMPLETE_SCROLL_STRATEGY]
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

      var _McAutocompleteModule = function _McAutocompleteModule() {
        _classCallCheck(this, _McAutocompleteModule);
      };
      /** @nocollapse */


      _McAutocompleteModule.ɵfac = function McAutocompleteModule_Factory(t) {
        return new (t || _McAutocompleteModule)();
      };
      /** @nocollapse */


      _McAutocompleteModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _McAutocompleteModule
      });
      /** @nocollapse */

      _McAutocompleteModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McAutocompleteModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
            exports: [_McAutocomplete, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McOptionModule, _McAutocompleteTrigger, _McAutocompleteOrigin, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__.McCommonModule],
            declarations: [_McAutocomplete, _McAutocompleteTrigger, _McAutocompleteOrigin],
            providers: [_MC_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_PROVIDER]
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
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-autocomplete_js-es5.js.map