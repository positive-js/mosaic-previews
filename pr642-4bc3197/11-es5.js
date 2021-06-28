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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
    /***/
    "W8uo":
    /*!***********************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-navbar.js ***!
      \***********************************************************************/

    /*! exports provided: McNavbar, McNavbarBrand, McNavbarContainer, McNavbarItem, McNavbarItemBase, McNavbarLogo, McNavbarMixinBase, McNavbarModule, McNavbarTitle */

    /***/
    function W8uo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbar", function () {
        return McNavbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarBrand", function () {
        return McNavbarBrand;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarContainer", function () {
        return McNavbarContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarItem", function () {
        return McNavbarItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarItemBase", function () {
        return McNavbarItemBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarLogo", function () {
        return McNavbarLogo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarMixinBase", function () {
        return McNavbarMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarModule", function () {
        return McNavbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarTitle", function () {
        return McNavbarTitle;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var _c0 = ["*"];
      var _c1 = [[["", "mc-navbar-container", ""], ["mc-navbar-container"]]];
      var _c2 = ["[mc-navbar-container], mc-navbar-container"];
      var COLLAPSED_CLASS = 'mc-navbar-collapsed-title';

      var McNavbarLogo = function McNavbarLogo() {
        _classCallCheck(this, McNavbarLogo);
      };

      McNavbarLogo.ɵfac = function McNavbarLogo_Factory(t) {
        return new (t || McNavbarLogo)();
      };

      McNavbarLogo.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarLogo,
        selectors: [["mc-navbar-logo"]],
        hostAttrs: [1, "mc-navbar-logo"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarLogo, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-logo',
            host: {
              "class": 'mc-navbar-logo'
            }
          }]
        }], null, null);
      })();

      var McNavbarBrand = function McNavbarBrand() {
        _classCallCheck(this, McNavbarBrand);
      };

      McNavbarBrand.ɵfac = function McNavbarBrand_Factory(t) {
        return new (t || McNavbarBrand)();
      };

      McNavbarBrand.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarBrand,
        selectors: [["mc-navbar-brand"]],
        hostAttrs: [1, "mc-navbar-brand"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarBrand, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-brand',
            host: {
              "class": 'mc-navbar-brand'
            }
          }]
        }], null, null);
      })();

      var McNavbarTitle = function McNavbarTitle() {
        _classCallCheck(this, McNavbarTitle);
      };

      McNavbarTitle.ɵfac = function McNavbarTitle_Factory(t) {
        return new (t || McNavbarTitle)();
      };

      McNavbarTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarTitle,
        selectors: [["mc-navbar-title"]],
        hostAttrs: [1, "mc-navbar-title"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-title',
            host: {
              "class": 'mc-navbar-title'
            }
          }]
        }], null, null);
      })();

      var McNavbarItemBase = function McNavbarItemBase(elementRef) {
        _classCallCheck(this, McNavbarItemBase);

        this.elementRef = elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McNavbarMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(McNavbarItemBase));

      var McNavbarItem = /*#__PURE__*/function (_McNavbarMixinBase) {
        _inherits(McNavbarItem, _McNavbarMixinBase);

        var _super = _createSuper(McNavbarItem);

        function McNavbarItem(elementRef, _focusMonitor) {
          var _this;

          _classCallCheck(this, McNavbarItem);

          _this = _super.call(this, elementRef);
          _this.elementRef = elementRef;
          _this._focusMonitor = _focusMonitor;
          return _this;
        }

        _createClass(McNavbarItem, [{
          key: "collapsedTitle",
          set: function set(value) {
            this.elementRef.nativeElement.setAttribute('computedTitle', encodeURI(value));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.denyClickIfDisabled();

            this._focusMonitor.monitor(this.elementRef.nativeElement, true);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this.elementRef.nativeElement);
          } // This method is required due to angular 2 issue https://github.com/angular/angular/issues/11200

        }, {
          key: "denyClickIfDisabled",
          value: function denyClickIfDisabled() {
            var _this2 = this;

            var events = this.elementRef.nativeElement.eventListeners('click');
            events.forEach(function (event) {
              return _this2.elementRef.nativeElement.removeEventListener('click', event);
            });
            this.elementRef.nativeElement.addEventListener('click', function (event) {
              if (_this2.elementRef.nativeElement.hasAttribute('disabled')) {
                event.stopImmediatePropagation();
              }
            }, true);
            events.forEach(function (event) {
              return _this2.elementRef.nativeElement.addEventListener('click', event);
            });
          }
        }]);

        return McNavbarItem;
      }(McNavbarMixinBase);

      McNavbarItem.ɵfac = function McNavbarItem_Factory(t) {
        return new (t || McNavbarItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]));
      };

      McNavbarItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbarItem,
        selectors: [["mc-navbar-item"]],
        hostAttrs: [1, "mc-navbar-item"],
        hostVars: 2,
        hostBindings: function McNavbarItem_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
          }
        },
        inputs: {
          disabled: "disabled",
          tabIndex: "tabIndex",
          collapsedTitle: "collapsedTitle"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function McNavbarItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      McNavbarItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }];
      };

      McNavbarItem.propDecorators = {
        collapsedTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar-item',
            template: "<ng-content></ng-content>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            inputs: ['disabled', 'tabIndex'],
            host: {
              "class": 'mc-navbar-item',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }];
        }, {
          collapsedTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var McNavbarContainer = function McNavbarContainer() {
        _classCallCheck(this, McNavbarContainer);

        this.position = 'left';
      };

      McNavbarContainer.ɵfac = function McNavbarContainer_Factory(t) {
        return new (t || McNavbarContainer)();
      };

      McNavbarContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarContainer,
        selectors: [["mc-navbar-container"]],
        hostVars: 4,
        hostBindings: function McNavbarContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-navbar-left", ctx.position === "left")("mc-navbar-right", ctx.position !== "left");
          }
        },
        inputs: {
          position: "position"
        }
      });
      McNavbarContainer.propDecorators = {
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-container',
            host: {
              '[class.mc-navbar-left]': 'this.position === "left"',
              '[class.mc-navbar-right]': 'this.position !== "left"'
            }
          }]
        }], function () {
          return [];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }]
        });
      })();

      var CollapsibleItem = /*#__PURE__*/function () {
        function CollapsibleItem(element, width) {
          _classCallCheck(this, CollapsibleItem);

          this.element = element;
          this.width = width;
          this.collapsed = false;
        }

        _createClass(CollapsibleItem, [{
          key: "processCollapsed",
          value: function processCollapsed(collapsed) {
            this.collapsed = collapsed;
            this.updateCollapsedClass();
          }
        }, {
          key: "updateCollapsedClass",
          value: function updateCollapsedClass() {
            if (this.collapsed) {
              this.element.classList.add(COLLAPSED_CLASS);
            } else {
              this.element.classList.remove(COLLAPSED_CLASS);
            }
          }
        }]);

        return CollapsibleItem;
      }();

      var CachedItemWidth = /*#__PURE__*/function () {
        function CachedItemWidth(element, width) {
          var itemsForCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

          _classCallCheck(this, CachedItemWidth);

          this.element = element;
          this.width = width;
          this.itemsForCollapse = itemsForCollapse;
        }

        _createClass(CachedItemWidth, [{
          key: "canCollapse",
          get: function get() {
            return this.itemsForCollapse.length > 0;
          }
        }, {
          key: "collapsedItemsWidth",
          get: function get() {
            if (this._collapsedItemsWidth !== undefined) {
              return this._collapsedItemsWidth;
            }

            this.calculateAndCacheCollapsedItemsWidth();
            return this._collapsedItemsWidth;
          }
        }, {
          key: "processCollapsed",
          value: function processCollapsed(collapsed) {
            if (this.itemsForCollapse.length > 0) {
              this.updateTitle(collapsed);
            }

            this.itemsForCollapse.forEach(function (item) {
              return item.processCollapsed(collapsed);
            });
          }
        }, {
          key: "calculateAndCacheCollapsedItemsWidth",
          value: function calculateAndCacheCollapsedItemsWidth() {
            this._collapsedItemsWidth = this.itemsForCollapse.reduce(function (acc, item) {
              return acc + item.width;
            }, 0);
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            var computedTitle = this.element.getAttribute('computedTitle');
            return computedTitle ? decodeURI(computedTitle) : this.itemsForCollapse.length > 0 ? this.itemsForCollapse[0].element.innerText : '';
          }
        }, {
          key: "updateTitle",
          value: function updateTitle(collapsed) {
            if (collapsed) {
              this.element.setAttribute('title', this.getTitle());
            } else {
              this.element.removeAttribute('title');
            }
          }
        }]);

        return CachedItemWidth;
      }();

      var McNavbar = /*#__PURE__*/function () {
        function McNavbar(_elementRef) {
          _classCallCheck(this, McNavbar);

          this._elementRef = _elementRef;
          this.forceRecalculateItemsWidth = false;
          this.resizeDebounceInterval = 100;
          this.firstLevelElement = 'mc-navbar-container';
          this.secondLevelElements = ['mc-navbar-item', 'mc-navbar-brand', 'mc-navbar-title'];
          var resizeObserver = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(this.resizeDebounceInterval));
          this.resizeSubscription = resizeObserver.subscribe(this.updateCollapsed.bind(this));
        }

        _createClass(McNavbar, [{
          key: "maxAllowedWidth",
          get: function get() {
            return this._elementRef.nativeElement.querySelector('nav').getBoundingClientRect().width;
          }
        }, {
          key: "itemsWidths",
          get: function get() {
            if (this._itemsWidths !== undefined && !this.forceRecalculateItemsWidth) {
              return this._itemsWidths;
            }

            this.calculateAndCacheItemsWidth();
            return this._itemsWidths;
          }
        }, {
          key: "totalItemsWidth",
          get: function get() {
            if (this.totalItemsWidths !== undefined && !this.forceRecalculateItemsWidth) {
              return this.totalItemsWidths;
            }

            this.calculateAndCacheTotalItemsWidth();
            return this.totalItemsWidths;
          }
        }, {
          key: "updateCollapsed",
          value: function updateCollapsed() {
            var collapseDelta = this.totalItemsWidth - this.maxAllowedWidth;

            for (var i = this.itemsWidths.length - 1; i >= 0; i--) {
              var item = this.itemsWidths[i];

              if (!item.canCollapse) {
                continue;
              }

              item.processCollapsed(collapseDelta > 0);
              collapseDelta -= item.collapsedItemsWidth;
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            // Note: this wait is required for loading and rendering fonts for icons;
            // unfortunately we cannot control font rendering
            setTimeout(function () {
              return _this3.updateCollapsed();
            }, 0);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.resizeSubscription.unsubscribe();
          }
        }, {
          key: "calculateAndCacheTotalItemsWidth",
          value: function calculateAndCacheTotalItemsWidth() {
            this.totalItemsWidths = this.itemsWidths.reduce(function (acc, item) {
              return acc + item.width;
            }, 0);
          }
        }, {
          key: "getOuterElementWidth",
          value: function getOuterElementWidth(element) {
            var baseWidth = element.getBoundingClientRect().width;
            var marginRight = parseInt(getComputedStyle(element).getPropertyValue('margin-right'));
            var marginLeft = parseInt(getComputedStyle(element).getPropertyValue('margin-left'));
            return baseWidth + marginRight + marginLeft;
          }
        }, {
          key: "calculateAndCacheItemsWidth",
          value: function calculateAndCacheItemsWidth() {
            var _this4 = this;

            var allItemsSelector = this.secondLevelElements.map(function (e) {
              return "".concat(_this4.firstLevelElement, ">").concat(e);
            });
            var allItems = Array.from(this._elementRef.nativeElement.querySelectorAll(allItemsSelector));
            this._itemsWidths = allItems.map(function (el) {
              return new CachedItemWidth(el, _this4.getOuterElementWidth(el), _this4.getItemsForCollapse(el));
            });
          }
        }, {
          key: "getItemsForCollapse",
          value: function getItemsForCollapse(element) {
            var icon = element.querySelector("[mc-icon],mc-navbar-logo,[mc-navbar-logo]");

            if (!icon) {
              return [];
            }

            return Array.from(element.querySelectorAll('mc-navbar-title')).map(function (el) {
              return new CollapsibleItem(el, el.getBoundingClientRect().width);
            });
          }
        }]);

        return McNavbar;
      }();

      McNavbar.ɵfac = function McNavbar_Factory(t) {
        return new (t || McNavbar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbar,
        selectors: [["mc-navbar"]],
        ngContentSelectors: _c2,
        decls: 2,
        vars: 0,
        consts: [[1, "mc-navbar"]],
        template: function McNavbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }
        },
        styles: [".mc-navbar-left,.mc-navbar-right,mc-navbar-container{flex-shrink:0;height:100%}.mc-navbar,.mc-navbar-left,.mc-navbar-right,mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar{position:relative;height:var(--mc-navbar-size-height,48px)}.mc-navbar [mc-icon]+mc-navbar-title{margin-left:var(--mc-navbar-size-icon-margin-left,8px)}.mc-navbar [mc-icon]{min-width:16px;min-height:16px}.mc-navbar mc-navbar-title:not(.mc-navbar-collapsed-title)+[mc-icon]{margin-left:var(--mc-navbar-size-icon-margin-left,8px)}.mc-navbar-brand,.mc-navbar-item,.mc-navbar-title,mc-navbar-brand,mc-navbar-item,mc-navbar-item:first-child{height:100%;position:relative;display:flex;align-items:center;padding-left:var(--mc-navbar-item-size-padding,16px);padding-right:var(--mc-navbar-item-size-padding,16px)}.mc-navbar-brand,mc-navbar-brand{padding-left:0;padding-right:var(--mc-navbar-brand-size-padding,12px);margin-right:var(--mc-navbar-brand-size-margin-right,24px)}.mc-navbar-brand .mc-navbar-title,mc-navbar-brand .mc-navbar-title{padding-left:var(--mc-navbar-brand-size-padding,12px);padding-right:0}.mc-navbar-title{white-space:nowrap}.mc-navbar-item:not([disabled]){cursor:pointer}.mc-navbar-item .mc-navbar-title,mc-navbar-brand{padding:0}mc-navbar-item.mc-progress:not([disabled]){cursor:pointer}.mc-navbar-item[disabled],mc-navbar-item[disabled] .mc-navbar-item{cursor:default}mc-navbar-title.mc-navbar-collapsed-title{display:none}"],
        encapsulation: 2
      });
      /** @nocollapse */

      McNavbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar',
            template: "\n        <nav class=\"mc-navbar\">\n            <ng-content select=\"[mc-navbar-container], mc-navbar-container\"></ng-content>\n        </nav>\n    ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-navbar-left,.mc-navbar-right,mc-navbar-container{flex-shrink:0;height:100%}.mc-navbar,.mc-navbar-left,.mc-navbar-right,mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar{position:relative;height:var(--mc-navbar-size-height,48px)}.mc-navbar [mc-icon]+mc-navbar-title{margin-left:var(--mc-navbar-size-icon-margin-left,8px)}.mc-navbar [mc-icon]{min-width:16px;min-height:16px}.mc-navbar mc-navbar-title:not(.mc-navbar-collapsed-title)+[mc-icon]{margin-left:var(--mc-navbar-size-icon-margin-left,8px)}.mc-navbar-brand,.mc-navbar-item,.mc-navbar-title,mc-navbar-brand,mc-navbar-item,mc-navbar-item:first-child{height:100%;position:relative;display:flex;align-items:center;padding-left:var(--mc-navbar-item-size-padding,16px);padding-right:var(--mc-navbar-item-size-padding,16px)}.mc-navbar-brand,mc-navbar-brand{padding-left:0;padding-right:var(--mc-navbar-brand-size-padding,12px);margin-right:var(--mc-navbar-brand-size-margin-right,24px)}.mc-navbar-brand .mc-navbar-title,mc-navbar-brand .mc-navbar-title{padding-left:var(--mc-navbar-brand-size-padding,12px);padding-right:0}.mc-navbar-title{white-space:nowrap}.mc-navbar-item:not([disabled]){cursor:pointer}.mc-navbar-item .mc-navbar-title,mc-navbar-brand{padding:0}mc-navbar-item.mc-progress:not([disabled]){cursor:pointer}.mc-navbar-item[disabled],mc-navbar-item[disabled] .mc-navbar-item{cursor:default}mc-navbar-title.mc-navbar-collapsed-title{display:none}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();

      var McNavbarModule = function McNavbarModule() {
        _classCallCheck(this, McNavbarModule);
      };

      McNavbarModule.ɵfac = function McNavbarModule_Factory(t) {
        return new (t || McNavbarModule)();
      };

      McNavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: McNavbarModule
      });
      McNavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](McNavbarModule, {
          declarations: function declarations() {
            return [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]];
          },
          exports: function exports() {
            return [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"]],
            exports: [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo],
            declarations: [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "quBq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-navbar.js ***!
      \*******************************************************************************************************/

    /*! exports provided: NavbarExamplesModule, NavbarOverviewExample */

    /***/
    function quBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarExamplesModule", function () {
        return NavbarExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarOverviewExample", function () {
        return NavbarOverviewExample;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/navbar */
      "W8uo");
      /**
       * @title Navbar
       */


      var NavbarOverviewExample = function NavbarOverviewExample() {
        _classCallCheck(this, NavbarOverviewExample);
      };

      NavbarOverviewExample.ɵfac = function NavbarOverviewExample_Factory(t) {
        return new (t || NavbarOverviewExample)();
      };

      NavbarOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarOverviewExample,
        selectors: [["navbar-overview-example"]],
        decls: 42,
        vars: 1,
        consts: [[1, "demo-container"], ["position", "left"], ["mc-icon", "mc-hamburger_16"], ["height", "32", "viewBox", "0 0 32 32", "width", "32", "xmlns", "http://www.w3.org/2000/svg", 1, "logo"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m0 32h32v-32h-32z", "fill", "#c00"], ["d", "m11.7013126 2.13713398h3.4056699v5.22500971c.0083884 1.2815534 1.0494758 2.31984466 2.3304078 2.32543689v-1.89825242c-.2370486-.00528156-.4296699-.19231068-.432466-.42718447v-5.22500971h3.4050485v-1.89794175h-8.7086602zm-3.29065629-1.89806602h-5.95976699-.0167767c-1.28062136.00590291-2.3192233 1.04978641-2.32481553 2.33351456h1.89794174c.00590292-.23735922.19262136-.42407767.42687379-.43557281h5.97654369c.24295146 0 .44054369.19821359.44054369.44427184v.97646602c0 .23735923-.19759223.43867961-.44054369.43867961l-5.97654369.00248544c-1.28062136.01118447-2.3192233 1.04667961-2.32481553 2.33071845v3.35782524h1.89794174v-3.35782524c.00590292-.23207767.19262136-.42438835.42687379-.42718447h5.97654369c1.28932039 0 2.34190289-1.05227184 2.34190289-2.34469903v-.97646602c0-1.29242718-1.0525825-2.34221359-2.34190289-2.34221359", "fill", "#fff", "transform", "translate(5.592 10.889)"], [1, "mc-navbar-item-active"], ["mc-icon", "mc-info_16"], ["mc-icon", "mc-calendar_16"], [1, "mc-progress"], ["mc-icon", "mc-download_16"], ["disabled", "", 1, "mc-progress"], ["mc-icon", "mc-clock_16"], ["disabled", ""], ["mc-icon", "mc-search_16"], ["mc-icon", "mc-gear_16"], ["position", "right"], [3, "collapsedTitle"]],
        template: function NavbarOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-navbar-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-navbar-brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-navbar-logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "g", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-navbar-item", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Left icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Left icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-navbar-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "In-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mc-navbar-item", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Disabled in-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mc-navbar-item", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Right Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-navbar-container", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mc-navbar-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Right Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsedTitle", "custom title");
          }
        },
        directives: [_ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbar"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarContainer"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarItem"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconCSSStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarBrand"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarLogo"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarTitle"]],
        styles: [".logo[_ngcontent-%COMP%]{margin-top:5px}.demo-container[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'navbar-overview-example',
            templateUrl: 'navbar-overview-example.html',
            styleUrls: ['navbar-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [NavbarOverviewExample];

      var NavbarExamplesModule = function NavbarExamplesModule() {
        _classCallCheck(this, NavbarExamplesModule);
      };

      NavbarExamplesModule.ɵfac = function NavbarExamplesModule_Factory(t) {
        return new (t || NavbarExamplesModule)();
      };

      NavbarExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NavbarExamplesModule
      });
      NavbarExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavbarExamplesModule, {
          declarations: [NavbarOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]],
          exports: [NavbarOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_3__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-navbar.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=11-es5.js.map