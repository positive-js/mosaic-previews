(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7], {
    /***/
    "W8uo":
    /*!***********************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-navbar.js ***!
      \***********************************************************************/

    /*! exports provided: McNavbar, McNavbarBrand, McNavbarContainer, McNavbarDivider, McNavbarItem, McNavbarItemBase, McNavbarLogo, McNavbarMixinBase, McNavbarModule, McNavbarTitle, McNavbarToggle, McNavbarToggleBase, McNavbarToggleMixinBase, McVerticalNavbar, ɵa */

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


      __webpack_require__.d(__webpack_exports__, "McNavbarDivider", function () {
        return McNavbarDivider;
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
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarToggle", function () {
        return McNavbarToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarToggleBase", function () {
        return McNavbarToggleBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarToggleMixinBase", function () {
        return McNavbarToggleMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McVerticalNavbar", function () {
        return McVerticalNavbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return toggleVerticalNavbarAnimation;
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


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _ptsecurity_mosaic_design_tokens__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ptsecurity/mosaic/design-tokens */
      "wFez");

      var _c0 = ["*"];
      var _c1 = [[["", "mc-navbar-container", ""], ["mc-navbar-container"]]];
      var _c2 = ["[mc-navbar-container], mc-navbar-container"];
      var _c3 = [[["", "mc-navbar-container", ""], ["mc-navbar-container"]], [["", "mc-navbar-toggle", ""], ["mc-navbar-toggle"]]];
      var _c4 = ["[mc-navbar-container], mc-navbar-container", "[mc-navbar-toggle], mc-navbar-toggle"];

      function McNavbarToggle_i_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-angle-left-M_16", ctx_r0.mcNavbar.expanded)("mc-angle-right-M_16", !ctx_r0.mcNavbar.expanded);
        }
      }

      function McNavbarToggle_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 1, ["*ngIf", "mcNavbar.expanded"]);
        }
      }

      var _c5 = [[["", "mc-icon", ""]], [["mc-navbar-title"]]];
      var _c6 = ["[mc-icon]", "mc-navbar-title"];
      var _c7 = ".mc-navbar{position:relative}.mc-navbar,.mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar-container{flex-shrink:0}";

      var McNavbarLogo = function McNavbarLogo() {
        _classCallCheck(this, McNavbarLogo);

        this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      };

      McNavbarLogo.ɵfac = function McNavbarLogo_Factory(t) {
        return new (t || McNavbarLogo)();
      };

      McNavbarLogo.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarLogo,
        selectors: [["mc-navbar-logo"], ["", "mc-navbar-logo", ""]],
        hostAttrs: [1, "mc-navbar-logo"],
        hostBindings: function McNavbarLogo_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function McNavbarLogo_mouseenter_HostBindingHandler() {
              return ctx.hovered.next(true);
            })("mouseleave", function McNavbarLogo_mouseleave_HostBindingHandler() {
              return ctx.hovered.next(false);
            });
          }
        }
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarLogo, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-logo, [mc-navbar-logo]',
            host: {
              "class": 'mc-navbar-logo',
              '(mouseenter)': 'hovered.next(true)',
              '(mouseleave)': 'hovered.next(false)'
            }
          }]
        }], function () {
          return [];
        }, null);
      })();

      var McNavbarTitle = /*#__PURE__*/function () {
        function McNavbarTitle(elementRef) {
          _classCallCheck(this, McNavbarTitle);

          this.elementRef = elementRef;
          this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(McNavbarTitle, [{
          key: "text",
          get: function get() {
            return this.elementRef.nativeElement.innerText;
          }
        }, {
          key: "getOuterElementWidth",
          value: function getOuterElementWidth() {
            var _window$getComputedSt = window.getComputedStyle(this.elementRef.nativeElement),
                width = _window$getComputedSt.width,
                marginLeft = _window$getComputedSt.marginLeft,
                marginRight = _window$getComputedSt.marginRight;

            return [width, marginLeft, marginRight].reduce(function (acc, item) {
              return acc + parseInt(item) || 0;
            }, 0);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.outerElementWidth = this.getOuterElementWidth();
          }
        }]);

        return McNavbarTitle;
      }();

      McNavbarTitle.ɵfac = function McNavbarTitle_Factory(t) {
        return new (t || McNavbarTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarTitle,
        selectors: [["mc-navbar-title"], ["", "mc-navbar-title", ""]],
        hostAttrs: [1, "mc-navbar-title"],
        hostBindings: function McNavbarTitle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function McNavbarTitle_mouseenter_HostBindingHandler() {
              return ctx.hovered.next(true);
            })("mouseleave", function McNavbarTitle_mouseleave_HostBindingHandler() {
              return ctx.hovered.next(false);
            });
          }
        }
      });
      /** @nocollapse */

      McNavbarTitle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-title, [mc-navbar-title]',
            host: {
              "class": 'mc-navbar-title',
              '(mouseenter)': 'hovered.next(true)',
              '(mouseleave)': 'hovered.next(false)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();

      var McNavbarBrand = /*#__PURE__*/function () {
        function McNavbarBrand() {
          _classCallCheck(this, McNavbarBrand);

          this.hovered = false;
          this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(McNavbarBrand, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.logo.hovered, this.title.hovered).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed)).subscribe(function (value) {
              return _this.hovered = value;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.next();
            this.destroyed.complete();
          }
        }]);

        return McNavbarBrand;
      }();

      McNavbarBrand.ɵfac = function McNavbarBrand_Factory(t) {
        return new (t || McNavbarBrand)();
      };

      McNavbarBrand.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarBrand,
        selectors: [["mc-navbar-brand"], ["", "mc-navbar-brand", ""]],
        contentQueries: function McNavbarBrand_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarLogo, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarTitle, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.logo = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
          }
        },
        hostAttrs: [1, "mc-navbar-brand"],
        hostVars: 2,
        hostBindings: function McNavbarBrand_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-hovered", ctx.hovered);
          }
        }
      });
      McNavbarBrand.propDecorators = {
        logo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [McNavbarLogo]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [McNavbarTitle]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarBrand, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-brand, [mc-navbar-brand]',
            host: {
              "class": 'mc-navbar-brand',
              '[class.mc-hovered]': 'hovered'
            }
          }]
        }], function () {
          return [];
        }, {
          logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [McNavbarLogo]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [McNavbarTitle]
          }]
        });
      })();

      var McNavbarDivider = function McNavbarDivider() {
        _classCallCheck(this, McNavbarDivider);
      };

      McNavbarDivider.ɵfac = function McNavbarDivider_Factory(t) {
        return new (t || McNavbarDivider)();
      };

      McNavbarDivider.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarDivider,
        selectors: [["mc-navbar-divider"]],
        hostAttrs: [1, "mc-navbar-divider"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-divider',
            host: {
              "class": 'mc-navbar-divider'
            }
          }]
        }], null, null);
      })();

      var McNavbarItemBase = /*#__PURE__*/function () {
        function McNavbarItemBase(elementRef) {
          _classCallCheck(this, McNavbarItemBase);

          this.elementRef = elementRef;
        }

        _createClass(McNavbarItemBase, [{
          key: "getOuterElementWidth",
          value: function getOuterElementWidth() {
            var _window$getComputedSt2 = window.getComputedStyle(this.elementRef.nativeElement),
                width = _window$getComputedSt2.width,
                marginLeft = _window$getComputedSt2.marginLeft,
                marginRight = _window$getComputedSt2.marginRight;

            return [width, marginLeft, marginRight].reduce(function (acc, item) {
              return acc + parseInt(item);
            }, 0);
          }
        }]);

        return McNavbarItemBase;
      }();

      McNavbarItemBase.ɵfac = function McNavbarItemBase_Factory(t) {
        return new (t || McNavbarItemBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarItemBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarItemBase,
        selectors: [["mc-navbar-item"], ["", "mc-navbar-item", ""], ["mc-navbar-divider"], ["mc-navbar-brand"], ["", "mc-navbar-brand", ""]],
        contentQueries: function McNavbarItemBase_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
          }
        },
        hostVars: 8,
        hostBindings: function McNavbarItemBase_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-vertical", ctx.vertical)("mc-horizontal", ctx.horizontal)("mc-opened", ctx.vertical && !ctx.closed)("mc-closed", ctx.vertical && ctx.closed);
          }
        }
      });
      /** @nocollapse */

      McNavbarItemBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbarItemBase.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarItemBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-item, [mc-navbar-item], mc-navbar-divider, mc-navbar-brand, [mc-navbar-brand]',
            host: {
              '[class.mc-vertical]': 'vertical',
              '[class.mc-horizontal]': 'horizontal',
              '[class.mc-opened]': 'vertical && !closed',
              '[class.mc-closed]': 'vertical && closed'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
          }]
        });
      })(); // tslint:disable-next-line:naming-convention


      var McNavbarMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(McNavbarItemBase);

      var McNavbarItem = /*#__PURE__*/function (_McNavbarMixinBase) {
        _inherits(McNavbarItem, _McNavbarMixinBase);

        var _super = _createSuper(McNavbarItem);

        function McNavbarItem(focusMonitor, elementRef) {
          var _this2;

          _classCallCheck(this, McNavbarItem);

          _this2 = _super.call(this, elementRef);
          _this2.focusMonitor = focusMonitor;
          _this2.elementRef = elementRef;
          _this2._collapsable = true;
          _this2.collapsed = false;
          _this2._collapsedTitle = null;
          _this2._tabIndex = 0;
          return _this2;
        }

        _createClass(McNavbarItem, [{
          key: "collapsable",
          get: function get() {
            return this._collapsable;
          },
          set: function set(value) {
            this._collapsable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "collapsedTitle",
          get: function get() {
            return this.collapsed ? this._collapsedTitle || this.title.text : null;
          },
          set: function set(value) {
            this._collapsedTitle = value;
          }
        }, {
          key: "tabIndex",
          get: function get() {
            return this.disabled || this.button ? -1 : this._tabIndex;
          },
          set: function set(value) {
            this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value) : 0;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (this.button) {
              return;
            }

            this.focusMonitor.monitor(this.elementRef, true);
          }
        }, {
          key: "getTitleWidth",
          value: function getTitleWidth() {
            return this.title.outerElementWidth;
          }
        }]);

        return McNavbarItem;
      }(McNavbarMixinBase);

      McNavbarItem.ɵfac = function McNavbarItem_Factory(t) {
        return new (t || McNavbarItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbarItem,
        selectors: [["mc-navbar-item"], ["", "mc-navbar-item", ""]],
        contentQueries: function McNavbarItem_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarTitle, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
          }
        },
        hostAttrs: [1, "mc-navbar-item"],
        hostVars: 7,
        hostBindings: function McNavbarItem_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx.collapsedTitle)("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-navbar-item_collapsed", ctx.collapsed)("mc-navbar-item_button", ctx.button);
          }
        },
        inputs: {
          disabled: "disabled",
          collapsed: "collapsed",
          collapsable: "collapsable",
          collapsedTitle: "collapsedTitle"
        },
        exportAs: ["mcNavbarItem"],
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
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McNavbarItem.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbarItem.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [McNavbarTitle]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
        }],
        collapsable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar-item, [mc-navbar-item]',
            exportAs: 'mcNavbarItem',
            template: "<ng-content></ng-content>",
            host: {
              "class": 'mc-navbar-item',
              '[class.mc-navbar-item_collapsed]': 'collapsed',
              '[class.mc-navbar-item_button]': 'button',
              '[attr.title]': 'collapsedTitle',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null'
            },
            inputs: ['disabled'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsedTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [McNavbarTitle]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
          }]
        });
      })();

      var McNavbarContainer = function McNavbarContainer() {
        _classCallCheck(this, McNavbarContainer);
      };

      McNavbarContainer.ɵfac = function McNavbarContainer_Factory(t) {
        return new (t || McNavbarContainer)();
      };

      McNavbarContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarContainer,
        selectors: [["mc-navbar-container"]],
        hostAttrs: [1, "mc-navbar-container"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-container',
            host: {
              "class": 'mc-navbar-container'
            }
          }]
        }], null, null);
      })();

      var McNavbar = /*#__PURE__*/function () {
        function McNavbar(elementRef) {
          var _this3 = this;

          _classCallCheck(this, McNavbar);

          this.elementRef = elementRef;
          this.resizeStream = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.resizeDebounceInterval = 100;

          this.updateCollapsed = function () {
            var collapseDelta = _this3.totalItemsWidth - _this3.width;
            var needCollapse = collapseDelta > 0;

            if (needCollapse) {
              _this3.collapseItems(collapseDelta);
            } else {
              _this3.unCollapseItems(collapseDelta);
            }
          };

          this.setItemsState = function () {
            Promise.resolve().then(function () {
              var _a;

              return (_a = _this3.navbarBaseItems) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                return item.horizontal = true;
              });
            });
          };

          this.resizeSubscription = this.resizeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(this.resizeDebounceInterval)).subscribe(this.updateCollapsed);
        }

        _createClass(McNavbar, [{
          key: "width",
          get: function get() {
            return this.elementRef.nativeElement.getBoundingClientRect().width;
          }
        }, {
          key: "totalItemsWidth",
          get: function get() {
            return this.navbarBaseItems.reduce(function (acc, item) {
              return acc + item.getOuterElementWidth();
            }, 0);
          }
        }, {
          key: "collapsableItems",
          get: function get() {
            return this.navbarItems.toArray().filter(function (item) {
              return item.icon && item.title && item.collapsable;
            }).reverse();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.setItemsState();
            this.navbarBaseItems.changes.subscribe(this.setItemsState);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Note: this wait is required for loading and rendering fonts for icons;
            // unfortunately we cannot control font rendering
            setTimeout(this.updateCollapsed);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.resizeSubscription.unsubscribe();
          }
        }, {
          key: "collapseItems",
          value: function collapseItems(collapseDelta) {
            var delta = collapseDelta;
            var unCollapsedItems = this.collapsableItems.filter(function (item) {
              return !item.collapsed;
            });

            var _iterator = _createForOfIteratorHelper(unCollapsedItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.collapsed = true;
                delta -= item.getTitleWidth();

                if (delta < 0) {
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "unCollapseItems",
          value: function unCollapseItems(collapseDelta) {
            var delta = collapseDelta;
            this.collapsableItems.filter(function (item) {
              return item.collapsed;
            }).forEach(function (item) {
              if (delta + item.getTitleWidth() < 0) {
                item.collapsed = false;
                delta += item.getTitleWidth();
              }
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
        contentQueries: function McNavbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarItemBase, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarItem, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarBaseItems = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarItems = _t);
          }
        },
        hostAttrs: [1, "mc-navbar"],
        hostBindings: function McNavbar_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function McNavbar_resize_HostBindingHandler($event) {
              return ctx.resizeStream.next($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        ngContentSelectors: _c2,
        decls: 1,
        vars: 0,
        template: function McNavbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          }
        },
        styles: [_c7, ".mc-navbar-title{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mc-navbar-item{position:relative;display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:var(--mc-navbar-item-size-padding,16px);padding-right:var(--mc-navbar-item-size-padding,16px)}.mc-navbar-item .mc-icon{min-width:16px;min-height:16px}.mc-navbar-item.mc-vertical .mc-navbar-title{padding-left:26px}.mc-navbar-item.mc-vertical .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-vertical .mc-navbar-title+.mc-icon{padding-left:var(--mc-vertical-navbar-size-icon-margin,10px)}.mc-navbar-item.mc-vertical .mc-badge{position:absolute;display:flex;align-items:center;justify-content:center}.mc-navbar-item.mc-vertical.mc-opened .mc-badge{right:16px;height:24px;padding-right:7px;padding-left:7px}.mc-navbar-item.mc-vertical.mc-closed .mc-badge{top:8px;right:8px;height:16px;padding-right:4px;padding-left:4px}.mc-navbar-item.mc-vertical.mc-closed .mc-navbar-title{display:none}.mc-navbar-item.mc-vertical.mc-closed.mc-navbar-item_button{padding-left:8px;padding-right:8px}.mc-navbar-item.mc-horizontal .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-horizontal .mc-navbar-title+.mc-icon{padding-left:var(--mc-navbar-size-icon-margin,4px)}.mc-navbar-item.mc-horizontal.mc-navbar-item_collapsed .mc-navbar-title{display:none}.mc-navbar-item.mc-navbar-item_button .mc-icon-button{flex:1}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper{justify-content:center}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_left{margin-left:unset}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_right{margin-right:unset}a.mc-navbar-item,a.mc-navbar-title{text-decoration:none}", ".mc-navbar-logo{display:flex}.mc-navbar-brand{position:relative;display:flex;align-items:center}.mc-navbar-brand .mc-navbar-title{cursor:pointer}a.mc-navbar-brand{text-decoration:none}.mc-navbar-brand.mc-horizontal{height:var(--mc-navbar-item-size-height,48px);padding-right:var(--mc-navbar-brand-size-margin-right,24px)}.mc-navbar-brand.mc-horizontal .mc-navbar-title{padding-left:var(--mc-navbar-brand-size-padding,12px);padding-right:0}.mc-navbar-brand.mc-vertical{flex-direction:column}.mc-navbar-brand.mc-vertical .mc-navbar-logo{flex-direction:column;height:var(--mc-navbar-item-size-height,48px)}.mc-navbar-brand.mc-vertical .mc-navbar-title{display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:0}.mc-navbar-brand.mc-vertical.mc-opened{align-items:unset}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-item{position:absolute;top:0;right:0}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-logo{padding-left:16px;justify-content:flex-end}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-title{padding-left:16px}.mc-navbar-brand.mc-vertical.mc-closed{padding:0}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-logo{align-items:center;justify-content:center;width:48px}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-title{display:none}", ".mc-navbar-divider{display:block}.mc-navbar-divider.mc-vertical{height:1px;margin:8px 16px}.mc-navbar-divider.mc-vertical.mc-closed{margin-right:10px;margin-left:10px}.mc-navbar-divider.mc-horizontal{width:1px;height:28px;margin-left:8px;margin-right:8px}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McNavbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbar.propDecorators = {
        navbarBaseItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [McNavbarItemBase, {
            descendants: true
          }]
        }],
        navbarItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [McNavbarItem, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar',
            template: "<ng-content select=\"[mc-navbar-container], mc-navbar-container\"></ng-content>",
            host: {
              "class": 'mc-navbar',
              '(window:resize)': 'resizeStream.next($event)'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-navbar{position:relative}.mc-navbar,.mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar-container{flex-shrink:0}", ".mc-navbar-title{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mc-navbar-item{position:relative;display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:var(--mc-navbar-item-size-padding,16px);padding-right:var(--mc-navbar-item-size-padding,16px)}.mc-navbar-item .mc-icon{min-width:16px;min-height:16px}.mc-navbar-item.mc-vertical .mc-navbar-title{padding-left:26px}.mc-navbar-item.mc-vertical .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-vertical .mc-navbar-title+.mc-icon{padding-left:var(--mc-vertical-navbar-size-icon-margin,10px)}.mc-navbar-item.mc-vertical .mc-badge{position:absolute;display:flex;align-items:center;justify-content:center}.mc-navbar-item.mc-vertical.mc-opened .mc-badge{right:16px;height:24px;padding-right:7px;padding-left:7px}.mc-navbar-item.mc-vertical.mc-closed .mc-badge{top:8px;right:8px;height:16px;padding-right:4px;padding-left:4px}.mc-navbar-item.mc-vertical.mc-closed .mc-navbar-title{display:none}.mc-navbar-item.mc-vertical.mc-closed.mc-navbar-item_button{padding-left:8px;padding-right:8px}.mc-navbar-item.mc-horizontal .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-horizontal .mc-navbar-title+.mc-icon{padding-left:var(--mc-navbar-size-icon-margin,4px)}.mc-navbar-item.mc-horizontal.mc-navbar-item_collapsed .mc-navbar-title{display:none}.mc-navbar-item.mc-navbar-item_button .mc-icon-button{flex:1}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper{justify-content:center}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_left{margin-left:unset}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_right{margin-right:unset}a.mc-navbar-item,a.mc-navbar-title{text-decoration:none}", ".mc-navbar-logo{display:flex}.mc-navbar-brand{position:relative;display:flex;align-items:center}.mc-navbar-brand .mc-navbar-title{cursor:pointer}a.mc-navbar-brand{text-decoration:none}.mc-navbar-brand.mc-horizontal{height:var(--mc-navbar-item-size-height,48px);padding-right:var(--mc-navbar-brand-size-margin-right,24px)}.mc-navbar-brand.mc-horizontal .mc-navbar-title{padding-left:var(--mc-navbar-brand-size-padding,12px);padding-right:0}.mc-navbar-brand.mc-vertical{flex-direction:column}.mc-navbar-brand.mc-vertical .mc-navbar-logo{flex-direction:column;height:var(--mc-navbar-item-size-height,48px)}.mc-navbar-brand.mc-vertical .mc-navbar-title{display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:0}.mc-navbar-brand.mc-vertical.mc-opened{align-items:unset}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-item{position:absolute;top:0;right:0}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-logo{padding-left:16px;justify-content:flex-end}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-title{padding-left:16px}.mc-navbar-brand.mc-vertical.mc-closed{padding:0}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-logo{align-items:center;justify-content:center;width:48px}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-title{display:none}", ".mc-navbar-divider{display:block}.mc-navbar-divider.mc-vertical{height:1px;margin:8px 16px}.mc-navbar-divider.mc-vertical.mc-closed{margin-right:10px;margin-left:10px}.mc-navbar-divider.mc-horizontal{width:1px;height:28px;margin-left:8px;margin-right:8px}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          navbarBaseItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [McNavbarItemBase, {
              descendants: true
            }]
          }],
          navbarItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [McNavbarItem, {
              descendants: true
            }]
          }]
        });
      })();

      function toggleVerticalNavbarAnimation() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          width: "var(--mc-vertical-navbar-size-states-closed-width, ".concat(_ptsecurity_mosaic_design_tokens__WEBPACK_IMPORTED_MODULE_11__["VerticalNavbarSizeStatesClosedWidth"], ")")
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          width: "var(--mc-vertical-navbar-size-states-opened-width, ".concat(_ptsecurity_mosaic_design_tokens__WEBPACK_IMPORTED_MODULE_11__["VerticalNavbarSizeStatesOpenedWidth"], ")")
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('0 <=> 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('200ms cubic-bezier(0, 1, 0.5, 1)'))]);
      }

      var McVerticalNavbar = /*#__PURE__*/function () {
        function McVerticalNavbar() {
          var _this4 = this;

          _classCallCheck(this, McVerticalNavbar);

          this._expanded = false;

          this.setItemsState = function () {
            Promise.resolve().then(function () {
              var _a;

              return (_a = _this4.navbarBaseItems) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                return item.vertical = true;
              });
            });
          };
        }

        _createClass(McVerticalNavbar, [{
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(value) {
            this._expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            this.setClosedStateForItems(value);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.setItemsState();
            this.setClosedStateForItems(this.expanded);
            this.navbarBaseItems.changes.subscribe(this.setItemsState);
          }
        }, {
          key: "setClosedStateForItems",
          value: function setClosedStateForItems(value) {
            var _a;

            (_a = this.navbarBaseItems) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
              item.closed = !value;
              setTimeout(function () {
                var _a;

                return (_a = item.button) === null || _a === void 0 ? void 0 : _a.updateClassModifierForIcons();
              });
            });
          }
        }]);

        return McVerticalNavbar;
      }();

      McVerticalNavbar.ɵfac = function McVerticalNavbar_Factory(t) {
        return new (t || McVerticalNavbar)();
      };

      McVerticalNavbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McVerticalNavbar,
        selectors: [["mc-vertical-navbar"]],
        contentQueries: function McVerticalNavbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarItemBase, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarBaseItems = _t);
          }
        },
        hostAttrs: [1, "mc-vertical-navbar"],
        hostVars: 5,
        hostBindings: function McVerticalNavbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@toggle", ctx.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-closed", !ctx.expanded)("mc-opened", ctx.expanded);
          }
        },
        inputs: {
          expanded: "expanded"
        },
        exportAs: ["McVerticalNavbar"],
        ngContentSelectors: _c4,
        decls: 2,
        vars: 0,
        template: function McVerticalNavbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mc-vertical-navbar{display:flex;flex-direction:column}.mc-vertical-navbar .mc-navbar-container{flex-direction:column;align-items:unset}.mc-vertical-navbar.mc-opened{width:var(--mc-vertical-navbar-size-states-opened-width,240px)}.mc-vertical-navbar.mc-closed{width:var(--mc-vertical-navbar-size-states-closed-width,48px)}"],
        encapsulation: 2,
        data: {
          animation: [toggleVerticalNavbarAnimation()]
        },
        changeDetection: 0
      });
      McVerticalNavbar.propDecorators = {
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        navbarBaseItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [McNavbarItemBase, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McVerticalNavbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-vertical-navbar',
            exportAs: 'McVerticalNavbar',
            template: "\n        <ng-content select=\"[mc-navbar-container], mc-navbar-container\"></ng-content>\n        <ng-content select=\"[mc-navbar-toggle], mc-navbar-toggle\"></ng-content>\n    ",
            host: {
              "class": 'mc-vertical-navbar',
              '[class.mc-closed]': '!expanded',
              '[class.mc-opened]': 'expanded',
              '[@toggle]': 'expanded'
            },
            animations: [toggleVerticalNavbarAnimation()],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-vertical-navbar{display:flex;flex-direction:column}.mc-vertical-navbar .mc-navbar-container{flex-direction:column;align-items:unset}.mc-vertical-navbar.mc-opened{width:var(--mc-vertical-navbar-size-states-opened-width,240px)}.mc-vertical-navbar.mc-closed{width:var(--mc-vertical-navbar-size-states-closed-width,48px)}"]
          }]
        }], function () {
          return [];
        }, {
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          navbarBaseItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [McNavbarItemBase, {
              descendants: true
            }]
          }]
        });
      })();

      var McNavbarToggleBase = // tslint:disable-next-line:naming-convention
      function McNavbarToggleBase(_elementRef) {
        _classCallCheck(this, McNavbarToggleBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McNavbarToggleMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(McNavbarToggleBase));

      var McNavbarToggle = /*#__PURE__*/function (_McNavbarToggleMixinB) {
        _inherits(McNavbarToggle, _McNavbarToggleMixinB);

        var _super2 = _createSuper(McNavbarToggle);

        function McNavbarToggle(mcNavbar, focusMonitor, elementRef) {
          var _this5;

          _classCallCheck(this, McNavbarToggle);

          _this5 = _super2.call(this, elementRef);
          _this5.mcNavbar = mcNavbar;
          _this5.focusMonitor = focusMonitor;
          _this5.elementRef = elementRef;
          return _this5;
        }

        _createClass(McNavbarToggle, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusMonitor.monitor(this.elementRef.nativeElement, true);
          }
        }]);

        return McNavbarToggle;
      }(McNavbarToggleMixinBase);

      McNavbarToggle.ɵfac = function McNavbarToggle_Factory(t) {
        return new (t || McNavbarToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](McVerticalNavbar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbarToggle,
        selectors: [["mc-navbar-toggle"]],
        contentQueries: function McNavbarToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
          }
        },
        hostAttrs: [1, "mc-navbar-item", "mc-navbar-toggle", "mc-vertical"],
        hostVars: 2,
        hostBindings: function McNavbarToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
          }
        },
        inputs: {
          tabIndex: "tabIndex"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c6,
        decls: 3,
        vars: 2,
        consts: [["mc-icon", "", 3, "mc-angle-left-M_16", "mc-angle-right-M_16", 4, "ngIf"], [4, "ngIf"], ["mc-icon", ""]],
        template: function McNavbarToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, McNavbarToggle_i_0_Template, 1, 4, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, McNavbarToggle_ng_content_2_Template, 1, 0, "ng-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mcNavbar.expanded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"]],
        styles: [_c7],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McNavbarToggle.ctorParameters = function () {
        return [{
          type: McVerticalNavbar
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbarToggle.propDecorators = {
        customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar-toggle',
            template: "\n        <i mc-icon\n           [class.mc-angle-left-M_16]=\"mcNavbar.expanded\"\n           [class.mc-angle-right-M_16]=\"!mcNavbar.expanded\"\n           *ngIf=\"!customIcon\">\n        </i>\n\n        <ng-content select=\"[mc-icon]\"></ng-content>\n        <ng-content select=\"mc-navbar-title\" *ngIf=\"mcNavbar.expanded\"></ng-content>\n    ",
            host: {
              "class": 'mc-navbar-item mc-navbar-toggle mc-vertical',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null'
            },
            inputs: ['tabIndex'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-navbar{position:relative}.mc-navbar,.mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar-container{flex-shrink:0}"]
          }]
        }], function () {
          return [{
            type: McVerticalNavbar
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
          }]
        });
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](McNavbarModule, {
          declarations: function declarations() {
            return [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]];
          },
          exports: function exports() {
            return [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]],
            exports: [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase],
            declarations: [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase]
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

    /*! exports provided: NavbarExamplesModule, NavbarOverviewExample, NavbarVerticalExample */

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
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarVerticalExample", function () {
        return NavbarVerticalExample;
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


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/dropdown */
      "8sAt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
        consts: [[1, "demo-container"], ["mc-icon", "mc-bento_16"], ["href", "https://www.ptsecurity.com/", "mc-navbar-logo", ""], ["height", "32", "viewBox", "0 0 32 32", "width", "32", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m0 32h32v-32h-32z", "fill", "#c00"], ["d", "m11.7013126 2.13713398h3.4056699v5.22500971c.0083884 1.2815534 1.0494758 2.31984466 2.3304078 2.32543689v-1.89825242c-.2370486-.00528156-.4296699-.19231068-.432466-.42718447v-5.22500971h3.4050485v-1.89794175h-8.7086602zm-3.29065629-1.89806602h-5.95976699-.0167767c-1.28062136.00590291-2.3192233 1.04978641-2.32481553 2.33351456h1.89794174c.00590292-.23735922.19262136-.42407767.42687379-.43557281h5.97654369c.24295146 0 .44054369.19821359.44054369.44427184v.97646602c0 .23735923-.19759223.43867961-.44054369.43867961l-5.97654369.00248544c-1.28062136.01118447-2.3192233 1.04667961-2.32481553 2.33071845v3.35782524h1.89794174v-3.35782524c.00590292-.23207767.19262136-.42438835.42687379-.42718447h5.97654369c1.28932039 0 2.34190289-1.05227184 2.34190289-2.34469903v-.97646602c0-1.29242718-1.0525825-2.34221359-2.34190289-2.34221359", "fill", "#fff", "transform", "translate(5.592 10.889)"], ["href", "https://www.ptsecurity.com/", "mc-navbar-title", ""], [1, "mc-active"], ["mc-icon", "mc-info_16"], ["mc-icon", "mc-calendar_16"], [1, "mc-progress"], ["mc-icon", "mc-download_16"], ["disabled", "", 1, "mc-progress"], ["mc-icon", "mc-clock_16"], ["disabled", ""], ["mc-icon", "mc-search_16"], ["mc-icon", "mc-gear_16"], [3, "collapsedTitle"]],
        template: function NavbarOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-navbar-brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "g", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-navbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Left icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Left icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-navbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "In-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mc-navbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Disabled in-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mc-navbar-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Right Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mc-navbar-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Right Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 17);

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
        directives: [_ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbar"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarContainer"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItem"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItemBase"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarBrand"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarLogo"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarTitle"]],
        styles: [".demo-container[_ngcontent-%COMP%]{margin-bottom:10px}"]
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

      function NavbarVerticalExample_i_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
        }
      }

      function NavbarVerticalExample_i_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
        }
      }

      function NavbarVerticalExample_i_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
        }
      }

      function NavbarVerticalExample_i_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
        }
      }

      function NavbarVerticalExample_span_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041D\u043E\u0432\u044B\u0439 \u0438\u043D\u0446\u0438\u0434\u0435\u043D\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }
      /**
       * @title Vertical Navbar
       */


      var NavbarVerticalExample = /*#__PURE__*/function () {
        function NavbarVerticalExample() {
          _classCallCheck(this, NavbarVerticalExample);
        }

        _createClass(NavbarVerticalExample, [{
          key: "onItemClick",
          value: function onItemClick(event) {
            alert("innerText: ".concat(event.target.innerText));
          }
        }]);

        return NavbarVerticalExample;
      }();

      NavbarVerticalExample.ɵfac = function NavbarVerticalExample_Factory(t) {
        return new (t || NavbarVerticalExample)();
      };

      NavbarVerticalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarVerticalExample,
        selectors: [["navbar-vertical-example"]],
        decls: 85,
        vars: 21,
        consts: [[1, "demo-container"], [3, "overlapTriggerY", "overlapTriggerX"], ["appDropdown", "mcDropdown"], ["mc-dropdown-item", ""], ["firstDropdown", "mcDropdown"], ["secondDropdown", "mcDropdown"], [1, "layout-align-space-between"], ["verticalNavbar", ""], [3, "mcDropdownTriggerFor"], ["appDropdownTrigger", "mcDropdownTrigger"], ["mc-icon", "mc-bento_16"], ["href", "https://www.ptsecurity.com/", "mc-navbar-logo", ""], ["height", "32", "viewBox", "0 0 32 32", "width", "32", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m0 32h32v-32h-32z", "fill", "#c00"], ["d", "m11.7013126 2.13713398h3.4056699v5.22500971c.0083884 1.2815534 1.0494758 2.31984466 2.3304078 2.32543689v-1.89825242c-.2370486-.00528156-.4296699-.19231068-.432466-.42718447v-5.22500971h3.4050485v-1.89794175h-8.7086602zm-3.29065629-1.89806602h-5.95976699-.0167767c-1.28062136.00590291-2.3192233 1.04978641-2.32481553 2.33351456h1.89794174c.00590292-.23735922.19262136-.42407767.42687379-.43557281h5.97654369c.24295146 0 .44054369.19821359.44054369.44427184v.97646602c0 .23735923-.19759223.43867961-.44054369.43867961l-5.97654369.00248544c-1.28062136.01118447-2.3192233 1.04667961-2.32481553 2.33071845v3.35782524h1.89794174v-3.35782524c.00590292-.23207767.19262136-.42438835.42687379-.42718447h5.97654369c1.28932039 0 2.34190289-1.05227184 2.34190289-2.34469903v-.97646602c0-1.29242718-1.0525825-2.34221359-2.34190289-2.34221359", "fill", "#fff", "transform", "translate(5.592 10.889)"], ["href", "https://www.ptsecurity.com/", "mc-navbar-title", ""], ["mc-icon", "mc-calendar_16"], ["firstDropdownTrigger", "mcDropdownTrigger"], ["mc-icon", "mc-ellipsis_16", 4, "ngIf"], [1, "layout-row", "flex", "layout-align-space-between", "layout-align-center-center"], ["mc-icon", "mc-angle-right-L_16", 4, "ngIf"], ["mc-icon", "mc-folder-opened_16"], ["secondDropdownTrigger", "mcDropdownTrigger"], [1, "layout", "flex", "layout-align-space-between", "layout-align-center-center"], [3, "click"], ["mc-button", "", 3, "color"], ["mc-icon", "mc-info_16"], [4, "ngIf"], ["mc-icon", "mc-search_16"], ["mc-icon", "mc-bell-o_16"], [1, "mc-badge", "mc-badge_error"], [3, "click", "keydown.space"], ["mc-icon", "mc-ellipsis_16"], ["mc-icon", "mc-angle-right-L_16"]],
        template: function NavbarVerticalExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-dropdown", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Point 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Point 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-dropdown", 1, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Point 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-dropdown", 1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Point 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-vertical-navbar", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mc-navbar-brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mc-navbar-item", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "g", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Application Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mc-navbar-item", 8, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, NavbarVerticalExample_i_41_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, NavbarVerticalExample_i_45_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0418\u043D\u0446\u0438\u0434\u0435\u043D\u0442\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mc-navbar-item", 8, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, NavbarVerticalExample_i_52_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u0415\u0449\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, NavbarVerticalExample_i_56_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mc-navbar-item", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarVerticalExample_Template_mc_navbar_item_click_57_listener($event) {
              return ctx.onItemClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, NavbarVerticalExample_span_60_Template, 2, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u041F\u043E\u0438\u0441\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "mc-navbar-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u0421\u043F\u0440\u0430\u0432\u043A\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "mc-navbar-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mc-navbar-toggle", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarVerticalExample_Template_mc_navbar_toggle_click_82_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

              return _r3.toggle();
            })("keydown.space", function NavbarVerticalExample_Template_mc_navbar_toggle_keydown_space_82_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTriggerY", true)("overlapTriggerX", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTriggerY", true)("overlapTriggerX", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTriggerY", true)("overlapTriggerX", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-active", _r4.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-active", _r5.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-active", _r8.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.expanded);
          }
        },
        directives: [_ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdown"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownItem"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McVerticalNavbar"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarContainer"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarBrand"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItemBase"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItem"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownTrigger"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarLogo"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonCssStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarDivider"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarToggle"]],
        styles: [".demo-container[_ngcontent-%COMP%]{margin-bottom:10px}.mc-vertical-navbar[_ngcontent-%COMP%]{height:700px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarVerticalExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'navbar-vertical-example',
            templateUrl: 'navbar-vertical-example.html',
            styleUrls: ['navbar-vertical-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [NavbarOverviewExample, NavbarVerticalExample];

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavbarExamplesModule, {
          declarations: [NavbarOverviewExample, NavbarVerticalExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownModule"]],
          exports: [NavbarOverviewExample, NavbarVerticalExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownModule"]],
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

    },

    /***/
    "wFez":
    /*!******************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-design-tokens.js ***!
      \******************************************************************************/

    /*! exports provided: AlertDarkColorSchemeDefaultBackground, AlertDarkColorSchemeDefaultBorder, AlertDarkColorSchemeDefaultIcon, AlertDarkColorSchemeErrorBackground, AlertDarkColorSchemeErrorBorder, AlertDarkColorSchemeErrorIcon, AlertDarkColorSchemeInfoBackground, AlertDarkColorSchemeInfoBorder, AlertDarkColorSchemeInfoIcon, AlertDarkColorSchemeSuccessBackground, AlertDarkColorSchemeSuccessBorder, AlertDarkColorSchemeSuccessIcon, AlertDarkColorSchemeWarningBackground, AlertDarkColorSchemeWarningBorder, AlertDarkColorSchemeWarningIcon, AlertFontDefaultBody, AlertFontDefaultHeader, AlertFontSmallBody, AlertFontSmallHeader, AlertLightColorSchemeDefaultBackground, AlertLightColorSchemeDefaultBorder, AlertLightColorSchemeDefaultIcon, AlertLightColorSchemeErrorBackground, AlertLightColorSchemeErrorBorder, AlertLightColorSchemeErrorIcon, AlertLightColorSchemeInfoBackground, AlertLightColorSchemeInfoBorder, AlertLightColorSchemeInfoIcon, AlertLightColorSchemeSuccessBackground, AlertLightColorSchemeSuccessBorder, AlertLightColorSchemeSuccessIcon, AlertLightColorSchemeWarningBackground, AlertLightColorSchemeWarningBorder, AlertLightColorSchemeWarningIcon, AlertSizeBorderRadius, AlertSizeBorderWidth, AlertSizeCloseButtonWidth, AlertSizeHorizontalPadding, AlertSizeIconMargin, AlertSizeSmallVerticalPadding, AlertSizeVerticalPadding, AutocompleteSizePanelBorderRadius, AutocompleteSizePanelMaxHeight, AutocompleteSizePanelPadding, BadgeFontCaps, BadgeFontDefault, BadgeSizeBorderRadius, BadgeSizeBorderWidth, BadgeSizeMinWidth, BadgeSizePadding, ButtonDarkColorSchemeActiveShadow, ButtonDarkColorSchemeErrorBackground, ButtonDarkColorSchemeErrorBorder, ButtonDarkColorSchemeErrorColor, ButtonDarkColorSchemeErrorIcon, ButtonDarkColorSchemeErrorStatesActiveBackground, ButtonDarkColorSchemeErrorStatesActiveBorder, ButtonDarkColorSchemePrimaryBackground, ButtonDarkColorSchemePrimaryBorder, ButtonDarkColorSchemePrimaryColor, ButtonDarkColorSchemePrimaryIcon, ButtonDarkColorSchemePrimaryStatesActiveBackground, ButtonDarkColorSchemePrimaryStatesActiveBorder, ButtonDarkColorSchemePrimaryTransparentColor, ButtonDarkColorSchemePrimaryTransparentIcon, ButtonDarkColorSchemePrimaryTransparentStatesActiveColor, ButtonDarkColorSchemePrimaryTransparentStatesActiveIcon, ButtonDarkColorSchemePrimaryTransparentStatesHoverColor, ButtonDarkColorSchemePrimaryTransparentStatesHoverIcon, ButtonDarkColorSchemeSecondBackground, ButtonDarkColorSchemeSecondBorder, ButtonDarkColorSchemeSecondColor, ButtonDarkColorSchemeSecondIcon, ButtonDarkColorSchemeSecondStatesActiveBackground, ButtonDarkColorSchemeSecondStatesActiveBorder, ButtonFontDefault, ButtonFontPrimary, ButtonFontPrimaryTransparent, ButtonLightColorSchemeActiveShadow, ButtonLightColorSchemeErrorBackground, ButtonLightColorSchemeErrorBorder, ButtonLightColorSchemeErrorColor, ButtonLightColorSchemeErrorIcon, ButtonLightColorSchemeErrorStatesActiveBackground, ButtonLightColorSchemeErrorStatesActiveBorder, ButtonLightColorSchemePrimaryBackground, ButtonLightColorSchemePrimaryBorder, ButtonLightColorSchemePrimaryColor, ButtonLightColorSchemePrimaryIcon, ButtonLightColorSchemePrimaryStatesActiveBackground, ButtonLightColorSchemePrimaryStatesActiveBorder, ButtonLightColorSchemePrimaryTransparentColor, ButtonLightColorSchemePrimaryTransparentIcon, ButtonLightColorSchemePrimaryTransparentStatesActiveColor, ButtonLightColorSchemePrimaryTransparentStatesActiveIcon, ButtonLightColorSchemePrimaryTransparentStatesHoverColor, ButtonLightColorSchemePrimaryTransparentStatesHoverIcon, ButtonLightColorSchemeSecondBackground, ButtonLightColorSchemeSecondBorder, ButtonLightColorSchemeSecondColor, ButtonLightColorSchemeSecondIcon, ButtonLightColorSchemeSecondStatesActiveBackground, ButtonLightColorSchemeSecondStatesActiveBorder, ButtonSizeBorderRadius, ButtonSizeBorderWidth, ButtonSizeHorizontalPadding, ButtonSizeVerticalPadding, ButtonToggleSizeBorderRadius, ButtonToggleSizeBorderSize, CardDarkColorSchemeErrorBackground, CardDarkColorSchemeErrorShadow, CardDarkColorSchemeErrorVerticalLine, CardDarkColorSchemeInfoBackground, CardDarkColorSchemeInfoShadow, CardDarkColorSchemeInfoVerticalLine, CardDarkColorSchemeSuccessBackground, CardDarkColorSchemeSuccessShadow, CardDarkColorSchemeSuccessVerticalLine, CardDarkColorSchemeWarningBackground, CardDarkColorSchemeWarningShadow, CardDarkColorSchemeWarningVerticalLine, CardLightColorSchemeErrorBackground, CardLightColorSchemeErrorShadow, CardLightColorSchemeErrorVerticalLine, CardLightColorSchemeInfoBackground, CardLightColorSchemeInfoShadow, CardLightColorSchemeInfoVerticalLine, CardLightColorSchemeSuccessBackground, CardLightColorSchemeSuccessShadow, CardLightColorSchemeSuccessVerticalLine, CardLightColorSchemeWarningBackground, CardLightColorSchemeWarningShadow, CardLightColorSchemeWarningVerticalLine, CardSizeVerticalLine, CheckboxDarkColorSchemeBorder, CheckboxDarkColorSchemeStatesCheckedBackground, CheckboxDarkColorSchemeStatesCheckedBorder, CheckboxDarkColorSchemeStatesFocusedBorder, CheckboxDarkColorSchemeStatesFocusedShadow, CheckboxFontDefault, CheckboxLightColorSchemeBorder, CheckboxLightColorSchemeStatesCheckedBackground, CheckboxLightColorSchemeStatesCheckedBorder, CheckboxLightColorSchemeStatesFocusedBorder, CheckboxLightColorSchemeStatesFocusedShadow, CheckboxSizeBorderWidth, CheckboxSizeLabelMargin, CheckboxSizeToggleBoxShadow, CheckboxSizeWidth, ColorBluePalette, ColorGreenPalette, ColorGreyPalette, ColorRedPalette, ColorYellowPalette, DarkColorSchemeBackgroundBackground, DarkColorSchemeBackgroundBackgroundDisabled, DarkColorSchemeBackgroundOverlayActive, DarkColorSchemeBackgroundOverlayDisabled, DarkColorSchemeBackgroundOverlayHover, DarkColorSchemeErrorDefault, DarkColorSchemeErrorPalette, DarkColorSchemeForegroundBorder, DarkColorSchemeForegroundDivider, DarkColorSchemeForegroundIcon, DarkColorSchemeForegroundText, DarkColorSchemeForegroundTextDisabled, DarkColorSchemeForegroundTextLessContrast, DarkColorSchemeInfoDefault, DarkColorSchemeInfoPalette, DarkColorSchemePrimaryDefault, DarkColorSchemePrimaryPalette, DarkColorSchemeSecondDefault, DarkColorSchemeSecondPalette, DarkColorSchemeStatesDisabledOpacity, DarkColorSchemeStatesFocusedColor, DarkColorSchemeStatesPressedShadow, DarkColorSchemeStatesSelectedColor, DarkColorSchemeSuccessDefault, DarkColorSchemeSuccessPalette, DarkColorSchemeWarningDefault, DarkColorSchemeWarningPalette, DatepickerBodyDarkColorSchemeStatesSelectedBackground, DatepickerBodyDarkColorSchemeStatesSelectedColor, DatepickerBodyFontLabel, DatepickerBodyFontToday, DatepickerBodyLightColorSchemeStatesSelectedBackground, DatepickerBodyLightColorSchemeStatesSelectedColor, DatepickerBodySizeCellBorderWidth, DatepickerBodySizeCellMargin, DatepickerBodySizeCellMinSize, DatepickerBodySizeCellPadding, DatepickerBodySizeLabelPaddings, DatepickerCalendarFontDefault, DatepickerCalendarFontHeader, DatepickerCalendarSizeDividerWidth, DatepickerCalendarSizeIconBorderWidth, DatepickerCalendarSizeIconNexIconTransform, DatepickerCalendarSizeIconPrevIconTransform, DatepickerCalendarSizePaddingBlocks, DatepickerCalendarSizePaddingBottom, DatepickerCalendarSizePaddingHorizontal, DatepickerCalendarSizePaddingTop, DatepickerInputSizeWidth, DatepickerToggleSizeHeight, DatepickerToggleSizeWidth, DividerSizeInsetMargin, DividerSizeWidth, DropdownDividerSizeHeight, DropdownDividerSizeMargin, DropdownGroupHeaderFontDefault, DropdownGroupHeaderFontSmall, DropdownGroupHeaderSizeDefaultPadding, DropdownGroupHeaderSizeSmallPadding, DropdownItemFontCaption, DropdownItemFontDefault, DropdownItemSizeIconPadding, DropdownItemSizePadding, DropdownPanelSizeBorderRadius, DropdownPanelSizeBorderWidth, DropdownPanelSizeMaxWidth, DropdownPanelSizePadding, DropdownTriggerSizeIconPaddingRight, FontFamilyBase, FontFamilyMonospace, FormFieldDarkColorSchemeBackground, FormFieldDarkColorSchemeBorder, FormFieldDarkColorSchemeStatesHoverBorder, FormFieldDarkColorSchemeStatesInvalidBackground, FormFieldDarkColorSchemeStatesInvalidBorder, FormFieldFontDefault, FormFieldHintFontDefault, FormFieldHintSizeMarginTop, FormFieldLightColorSchemeBackground, FormFieldLightColorSchemeBorder, FormFieldLightColorSchemeStatesHoverBorder, FormFieldLightColorSchemeStatesInvalidBackground, FormFieldLightColorSchemeStatesInvalidBorder, FormFieldSizeBorderRadius, FormFieldSizeBorderWidth, FormFieldSizeButtonWidth, FormsDarkColorSchemeLabel, FormsDarkColorSchemeLegend, FormsFontDefaultLabel, FormsFontDefaultLegend, FormsLightColorSchemeLabel, FormsLightColorSchemeLegend, FormsSizeHorizontalControlPaddingLeft, FormsSizeHorizontalLabelPaddingBottom, FormsSizeHorizontalLabelPaddingTop, FormsSizeHorizontalLegendMarginBottom, FormsSizeHorizontalLegendMarginTop, FormsSizeHorizontalRowMarginBottom, FormsSizeVerticalControlPaddingLeft, FormsSizeVerticalLabelPaddingBottom, FormsSizeVerticalLabelPaddingTop, FormsSizeVerticalLegendMarginBottom, FormsSizeVerticalLegendMarginTop, FormsSizeVerticalRowMarginBottom, IconButtonSizeHorizontalPadding, IconButtonSizeIconHorizontalPadding, IconButtonSizeVerticalPadding, InputFontDefault, InputFontMonospace, InputSizeMinHeight, InputSizePadding, InputSizeWidth, LightColorSchemeBackgroundBackground, LightColorSchemeBackgroundBackgroundDisabled, LightColorSchemeBackgroundOverlayActive, LightColorSchemeBackgroundOverlayDisabled, LightColorSchemeBackgroundOverlayHover, LightColorSchemeErrorDefault, LightColorSchemeErrorPalette, LightColorSchemeForegroundBorder, LightColorSchemeForegroundDivider, LightColorSchemeForegroundIcon, LightColorSchemeForegroundText, LightColorSchemeForegroundTextDisabled, LightColorSchemeForegroundTextLessContrast, LightColorSchemeInfoDefault, LightColorSchemeInfoPalette, LightColorSchemePrimaryDefault, LightColorSchemePrimaryPalette, LightColorSchemeSecondDefault, LightColorSchemeSecondPalette, LightColorSchemeStatesDisabledOpacity, LightColorSchemeStatesFocusedColor, LightColorSchemeStatesPressedShadow, LightColorSchemeStatesSelectedColor, LightColorSchemeSuccessDefault, LightColorSchemeSuccessPalette, LightColorSchemeWarningDefault, LightColorSchemeWarningPalette, LinkAnimationStateHoverTransition, LinkAnimationTransition, LinkDarkColorSchemeBorderBottom, LinkDarkColorSchemeStateActive, LinkDarkColorSchemeStateFocusedOutline, LinkDarkColorSchemeStateHoverBorderBottom, LinkDarkColorSchemeStateHoverText, LinkDarkColorSchemeStateVisitedBorderBottom, LinkDarkColorSchemeStateVisitedText, LinkDarkColorSchemeText, LinkFontDefault, LinkLightColorSchemeBorderBottom, LinkLightColorSchemeStateActive, LinkLightColorSchemeStateFocusedOutline, LinkLightColorSchemeStateHoverBorderBottom, LinkLightColorSchemeStateHoverText, LinkLightColorSchemeStateVisitedBorderBottom, LinkLightColorSchemeStateVisitedText, LinkLightColorSchemeText, LinkSizeIconMargin, LinkSizeStateFocusedOutlineOffset, LinkSizeStateFocusedOutlineWidth, ListFontItem, ListSizeHorizontalPadding, ListSizeIconPadding, ListSizeIconWidth, ListSizeItemHeight, ListSizeMultiLinePadding, ListSizeThreeLineHeight, ListSizeTwoLineHeight, ModalBodyFontDefault, ModalBodySizeMaxHeight, ModalBodySizePadding, ModalConfirmSizePadding, ModalDarkColorSchemeBackgroundMask, ModalDarkColorSchemeBodyBottomShadow, ModalDarkColorSchemeBodyTopShadow, ModalDarkColorSchemeShadow, ModalFooterSizeBorderRadius, ModalFooterSizePadding, ModalHeaderFontDefault, ModalHeaderSizeBorderRadius, ModalHeaderSizePadding, ModalLightColorSchemeBackgroundMask, ModalLightColorSchemeBodyBottomShadow, ModalLightColorSchemeBodyTopShadow, ModalLightColorSchemeShadow, ModalSizeBorderRadius, ModalSizeBorderWidth, ModalSizeCloseWidth, ModalSizeLarge, ModalSizeNormal, ModalSizeSmall, ModalSizeTop, NavbarBrandFontTitle, NavbarBrandSizeMarginRight, NavbarBrandSizePadding, NavbarDarkColorSchemeBackground, NavbarDarkColorSchemeDividerBackground, NavbarFontTitle, NavbarItemDarkColorSchemeStatesActive, NavbarItemDarkColorSchemeStatesDisabledOpacity, NavbarItemDarkColorSchemeStatesHover, NavbarItemDarkColorSchemeStatesProgress, NavbarItemDarkColorSchemeText, NavbarItemLightColorSchemeStatesActive, NavbarItemLightColorSchemeStatesDisabledOpacity, NavbarItemLightColorSchemeStatesHover, NavbarItemLightColorSchemeStatesProgress, NavbarItemLightColorSchemeText, NavbarItemSizeHeight, NavbarItemSizePadding, NavbarLightColorSchemeBackground, NavbarLightColorSchemeDividerBackground, NavbarSizeIconMargin, OptgroupFontDefault, OptgroupSizePaddingLeft, OptionFontDefault, OptionSizeBorderWidth, OptionSizeHeight, OptionSizeHorizontalPadding, PaletteBlue100, PaletteBlue200, PaletteBlue300, PaletteBlue40, PaletteBlue400, PaletteBlue500, PaletteBlue560, PaletteBlue60, PaletteBlue600, PaletteBlue700, PaletteBlue800, PaletteBlueA100, PaletteBlueA200, PaletteBlueContrast100, PaletteBlueContrast200, PaletteBlueContrast300, PaletteBlueContrast40, PaletteBlueContrast400, PaletteBlueContrast500, PaletteBlueContrast560, PaletteBlueContrast60, PaletteBlueContrast600, PaletteBlueContrast700, PaletteBlueContrast800, PaletteBlueContrastA100, PaletteBlueContrastA200, PaletteGreen100, PaletteGreen200, PaletteGreen300, PaletteGreen40, PaletteGreen400, PaletteGreen500, PaletteGreen560, PaletteGreen60, PaletteGreen600, PaletteGreen700, PaletteGreen800, PaletteGreenA100, PaletteGreenContrast100, PaletteGreenContrast200, PaletteGreenContrast300, PaletteGreenContrast40, PaletteGreenContrast400, PaletteGreenContrast500, PaletteGreenContrast560, PaletteGreenContrast60, PaletteGreenContrast600, PaletteGreenContrast700, PaletteGreenContrast800, PaletteGreenContrastA100, PaletteGrey100, PaletteGrey200, PaletteGrey300, PaletteGrey40, PaletteGrey400, PaletteGrey500, PaletteGrey560, PaletteGrey60, PaletteGrey600, PaletteGrey700, PaletteGrey800, PaletteGreyA100, PaletteGreyA200, PaletteGreyA300, PaletteGreyA40, PaletteGreyA500, PaletteGreyA60, PaletteGreyContrast100, PaletteGreyContrast200, PaletteGreyContrast300, PaletteGreyContrast40, PaletteGreyContrast400, PaletteGreyContrast500, PaletteGreyContrast560, PaletteGreyContrast60, PaletteGreyContrast600, PaletteGreyContrast700, PaletteGreyContrast800, PaletteRed100, PaletteRed200, PaletteRed300, PaletteRed40, PaletteRed400, PaletteRed500, PaletteRed560, PaletteRed60, PaletteRed600, PaletteRed700, PaletteRed800, PaletteRedA100, PaletteRedContrast100, PaletteRedContrast200, PaletteRedContrast300, PaletteRedContrast40, PaletteRedContrast400, PaletteRedContrast500, PaletteRedContrast560, PaletteRedContrast60, PaletteRedContrast600, PaletteRedContrast700, PaletteRedContrast800, PaletteRedContrastA100, PaletteYellow100, PaletteYellow200, PaletteYellow300, PaletteYellow40, PaletteYellow400, PaletteYellow500, PaletteYellow560, PaletteYellow60, PaletteYellow600, PaletteYellow700, PaletteYellow800, PaletteYellowA100, PaletteYellowContrast100, PaletteYellowContrast200, PaletteYellowContrast300, PaletteYellowContrast40, PaletteYellowContrast400, PaletteYellowContrast500, PaletteYellowContrast560, PaletteYellowContrast60, PaletteYellowContrast600, PaletteYellowContrast700, PaletteYellowContrast800, PaletteYellowContrastA100, PopoverDarkColorSchemeBorder, PopoverFontDefault, PopoverFooterFontDefault, PopoverFooterSizeMarginTop, PopoverFooterSizePadding, PopoverHeaderFontDefault, PopoverHeaderSizePadding, PopoverLightColorSchemeBorder, PopoverSizeArrowWidth, PopoverSizeBorderRadius, PopoverSizeBorderWidth, PopoverSizeLargeWidth, PopoverSizeNormalWidth, PopoverSizePadding, PopoverSizeSmallWidth, PopupDarkColorSchemeBackground, PopupDarkColorSchemeBorder, PopupDarkColorSchemeDivider, PopupDarkColorSchemeFooterBackground, PopupDarkColorSchemeShadow, PopupLightColorSchemeBackground, PopupLightColorSchemeBorder, PopupLightColorSchemeDivider, PopupLightColorSchemeFooterBackground, PopupLightColorSchemeShadow, ProgressBarDarkColorSchemeBackground, ProgressBarLightColorSchemeBackground, ProgressBarSizeHeight, ProgressSpinnerSizeSize, RadioDarkColorSchemeInnerCircleBorder, RadioDarkColorSchemeOuterCircleBorder, RadioDarkColorSchemeStatesCheckedInnerCircleBorder, RadioDarkColorSchemeStatesCheckedOuterCircleBorder, RadioDarkColorSchemeStatesFocusedInnerCircleShadow, RadioDarkColorSchemeStatesFocusedOuterCircleBorder, RadioDarkColorSchemeStatesFocusedOuterCircleShadow, RadioFontDefault, RadioLightColorSchemeInnerCircleBorder, RadioLightColorSchemeOuterCircleBorder, RadioLightColorSchemeStatesCheckedInnerCircleBorder, RadioLightColorSchemeStatesCheckedOuterCircleBorder, RadioLightColorSchemeStatesFocusedInnerCircleShadow, RadioLightColorSchemeStatesFocusedOuterCircleBorder, RadioLightColorSchemeStatesFocusedOuterCircleShadow, RadioSizeLabelMargin, RadioSizeSize, SelectFontDefault, SelectPanelFontDefault, SelectPanelSizeBorderRadius, SelectPanelSizeBorderWidth, SelectPanelSizeMaxHeight, SelectPanelSizeMaxWidth, SelectPanelSizeVerticalPadding, SelectSizeHeight, SelectSizeLeftPadding, SelectSizeLeftPaddingMultiple, SelectSizeRightPadding, SidepanelDarkColorSchemeBorder, SidepanelFontDefault, SidepanelFooterFontDefault, SidepanelFooterSizePadding, SidepanelHeaderFontDefault, SidepanelHeaderSizeClosePadding, SidepanelHeaderSizePadding, SidepanelLightColorSchemeBorder, TableFontBody, TableFontHeader, TableSizeBorderWidth, TableSizeRowPaddingHorizontal, TableSizeRowPaddingVertical, TabsDarkColorSchemeBorder, TabsDarkColorSchemeStateActive, TabsDarkColorSchemeStateDisabledOverlay, TabsFontDefault, TabsLightColorSchemeBorder, TabsLightColorSchemeStateActive, TabsLightColorSchemeStateDisabledOverlay, TabsSizeBorderRadius, TabsSizeBorderWidth, TabsSizeHeight, TabsSizeHighlightHeight, TabsSizeLabelIconMargin, TabsSizePaddingHorizontal, TagInputFontDefault, TagInputSizeHeight, TagInputSizeMargin, TagListSizeMinHeight, TagListSizePadding, TagsDarkColorSchemeErrorBackground, TagsDarkColorSchemeErrorBorder, TagsDarkColorSchemeErrorIcon, TagsDarkColorSchemeErrorStatesDisabledBackground, TagsDarkColorSchemeErrorStatesDisabledText, TagsDarkColorSchemeErrorStatesFocused, TagsDarkColorSchemeErrorStatesHoverIcon, TagsDarkColorSchemePrimaryBackground, TagsDarkColorSchemePrimaryBorder, TagsDarkColorSchemePrimaryIcon, TagsDarkColorSchemePrimaryStatesDisabledBackground, TagsDarkColorSchemePrimaryStatesDisabledText, TagsDarkColorSchemePrimaryStatesFocused, TagsDarkColorSchemePrimaryStatesHoverIcon, TagsDarkColorSchemeSecondBackground, TagsDarkColorSchemeSecondBorder, TagsDarkColorSchemeSecondIcon, TagsDarkColorSchemeSecondStatesDisabledBackground, TagsDarkColorSchemeSecondStatesDisabledText, TagsDarkColorSchemeSecondStatesFocused, TagsDarkColorSchemeSecondStatesHoverIcon, TagsFontCaps, TagsFontDefault, TagsFontMono, TagsLightColorSchemeErrorBackground, TagsLightColorSchemeErrorBorder, TagsLightColorSchemeErrorIcon, TagsLightColorSchemeErrorStatesDisabledBackground, TagsLightColorSchemeErrorStatesDisabledText, TagsLightColorSchemeErrorStatesFocused, TagsLightColorSchemeErrorStatesHoverIcon, TagsLightColorSchemePrimaryBackground, TagsLightColorSchemePrimaryBorder, TagsLightColorSchemePrimaryIcon, TagsLightColorSchemePrimaryStatesDisabledBackground, TagsLightColorSchemePrimaryStatesDisabledText, TagsLightColorSchemePrimaryStatesFocused, TagsLightColorSchemePrimaryStatesHoverIcon, TagsLightColorSchemeSecondBackground, TagsLightColorSchemeSecondBorder, TagsLightColorSchemeSecondIcon, TagsLightColorSchemeSecondStatesDisabledBackground, TagsLightColorSchemeSecondStatesDisabledText, TagsLightColorSchemeSecondStatesFocused, TagsLightColorSchemeSecondStatesHoverIcon, TagsSizeBorderRadius, TagsSizeBorderWidth, TagsSizeHeight, TagsSizeIconPadding, TagsSizeMargin, TagsSizeTextMargin, TextareaFontDefault, TextareaFontMono, TextareaSizeMinHeight, TextareaSizePadding, TimepickerSizePaddingRight, ToggleDarkColorSchemeBackground, ToggleDarkColorSchemeBorder, ToggleDarkColorSchemeCircleBackground, ToggleDarkColorSchemeCircleBorder, ToggleDarkColorSchemeStatesFocusedShadow, ToggleFontDefault, ToggleLightColorSchemeBackground, ToggleLightColorSchemeBorder, ToggleLightColorSchemeCircleBackground, ToggleLightColorSchemeCircleBorder, ToggleLightColorSchemeStatesFocusedShadow, ToggleSizeBorderRadius, ToggleSizeHeight, ToggleSizeLabelMargin, ToggleSizeWidth, ToggleSmallFontDefault, ToggleSmallSizeBorderRadius, ToggleSmallSizeHeight, ToggleSmallSizeWidth, TooltipDarkColorSchemeBackground, TooltipDarkColorSchemeShadow, TooltipDarkColorSchemeText, TooltipDarkColorSchemeWarningBackground, TooltipDarkColorSchemeWarningBorder, TooltipDarkColorSchemeWarningText, TooltipFontDefault, TooltipLightColorSchemeBackground, TooltipLightColorSchemeShadow, TooltipLightColorSchemeText, TooltipLightColorSchemeWarningBackground, TooltipLightColorSchemeWarningBorder, TooltipLightColorSchemeWarningText, TooltipSizeArrowSize, TooltipSizeArrowWidth, TooltipSizeBorderRadius, TooltipSizeDistance, TooltipSizeMaxWidth, TooltipSizePadding, TreeFontNode, TreeSizeBorderWidth, TreeSizeNodeHeight, TreeSizePaddingRight, TypographyBodyCapsFontFamily, TypographyBodyCapsFontSize, TypographyBodyCapsFontWeight, TypographyBodyCapsLetterSpacing, TypographyBodyCapsLineHeight, TypographyBodyCapsTextTransform, TypographyBodyFontFamily, TypographyBodyFontSize, TypographyBodyFontWeight, TypographyBodyLetterSpacing, TypographyBodyLineHeight, TypographyBodyMonoFontFamily, TypographyBodyMonoFontSize, TypographyBodyMonoFontWeight, TypographyBodyMonoLetterSpacing, TypographyBodyMonoLineHeight, TypographyBodyMonoTextTransform, TypographyBodyStrongFontFamily, TypographyBodyStrongFontSize, TypographyBodyStrongFontWeight, TypographyBodyStrongLetterSpacing, TypographyBodyStrongLineHeight, TypographyBodyStrongTextTransform, TypographyBodyTextTransform, TypographyCaptionCapsFontFamily, TypographyCaptionCapsFontSize, TypographyCaptionCapsFontWeight, TypographyCaptionCapsLetterSpacing, TypographyCaptionCapsLineHeight, TypographyCaptionCapsTextTransform, TypographyCaptionFontFamily, TypographyCaptionFontSize, TypographyCaptionFontWeight, TypographyCaptionLetterSpacing, TypographyCaptionLineHeight, TypographyCaptionMonoFontFamily, TypographyCaptionMonoFontSize, TypographyCaptionMonoFontWeight, TypographyCaptionMonoLetterSpacing, TypographyCaptionMonoLineHeight, TypographyCaptionMonoTextTransform, TypographyCaptionTextTransform, TypographyDisplay1FontFamily, TypographyDisplay1FontSize, TypographyDisplay1FontWeight, TypographyDisplay1LetterSpacing, TypographyDisplay1LineHeight, TypographyDisplay1TextTransform, TypographyDisplay2FontFamily, TypographyDisplay2FontSize, TypographyDisplay2FontWeight, TypographyDisplay2LetterSpacing, TypographyDisplay2LineHeight, TypographyDisplay2TextTransform, TypographyDisplay3FontFamily, TypographyDisplay3FontSize, TypographyDisplay3FontWeight, TypographyDisplay3LetterSpacing, TypographyDisplay3LineHeight, TypographyDisplay3TextTransform, TypographyExtraSmallTextFontFamily, TypographyExtraSmallTextFontSize, TypographyExtraSmallTextFontWeight, TypographyExtraSmallTextLetterSpacing, TypographyExtraSmallTextLineHeight, TypographyExtraSmallTextTextTransform, TypographyHeadlineFontFamily, TypographyHeadlineFontSize, TypographyHeadlineFontWeight, TypographyHeadlineLetterSpacing, TypographyHeadlineLineHeight, TypographyHeadlineTextTransform, TypographySmallTextFontFamily, TypographySmallTextFontSize, TypographySmallTextFontWeight, TypographySmallTextLetterSpacing, TypographySmallTextLineHeight, TypographySmallTextTextTransform, TypographySubheadingFontFamily, TypographySubheadingFontSize, TypographySubheadingFontWeight, TypographySubheadingLetterSpacing, TypographySubheadingLineHeight, TypographySubheadingTextTransform, TypographyTitleFontFamily, TypographyTitleFontSize, TypographyTitleFontWeight, TypographyTitleLetterSpacing, TypographyTitleLineHeight, TypographyTitleTextTransform, VerticalNavbarSizeIconMargin, VerticalNavbarSizeStatesClosedWidth, VerticalNavbarSizeStatesOpenedWidth */

    /***/
    function wFez(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeDefaultBackground", function () {
        return AlertDarkColorSchemeDefaultBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeDefaultBorder", function () {
        return AlertDarkColorSchemeDefaultBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeDefaultIcon", function () {
        return AlertDarkColorSchemeDefaultIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeErrorBackground", function () {
        return AlertDarkColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeErrorBorder", function () {
        return AlertDarkColorSchemeErrorBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeErrorIcon", function () {
        return AlertDarkColorSchemeErrorIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeInfoBackground", function () {
        return AlertDarkColorSchemeInfoBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeInfoBorder", function () {
        return AlertDarkColorSchemeInfoBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeInfoIcon", function () {
        return AlertDarkColorSchemeInfoIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeSuccessBackground", function () {
        return AlertDarkColorSchemeSuccessBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeSuccessBorder", function () {
        return AlertDarkColorSchemeSuccessBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeSuccessIcon", function () {
        return AlertDarkColorSchemeSuccessIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeWarningBackground", function () {
        return AlertDarkColorSchemeWarningBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeWarningBorder", function () {
        return AlertDarkColorSchemeWarningBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertDarkColorSchemeWarningIcon", function () {
        return AlertDarkColorSchemeWarningIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertFontDefaultBody", function () {
        return AlertFontDefaultBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertFontDefaultHeader", function () {
        return AlertFontDefaultHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertFontSmallBody", function () {
        return AlertFontSmallBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertFontSmallHeader", function () {
        return AlertFontSmallHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeDefaultBackground", function () {
        return AlertLightColorSchemeDefaultBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeDefaultBorder", function () {
        return AlertLightColorSchemeDefaultBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeDefaultIcon", function () {
        return AlertLightColorSchemeDefaultIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeErrorBackground", function () {
        return AlertLightColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeErrorBorder", function () {
        return AlertLightColorSchemeErrorBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeErrorIcon", function () {
        return AlertLightColorSchemeErrorIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeInfoBackground", function () {
        return AlertLightColorSchemeInfoBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeInfoBorder", function () {
        return AlertLightColorSchemeInfoBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeInfoIcon", function () {
        return AlertLightColorSchemeInfoIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeSuccessBackground", function () {
        return AlertLightColorSchemeSuccessBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeSuccessBorder", function () {
        return AlertLightColorSchemeSuccessBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeSuccessIcon", function () {
        return AlertLightColorSchemeSuccessIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeWarningBackground", function () {
        return AlertLightColorSchemeWarningBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeWarningBorder", function () {
        return AlertLightColorSchemeWarningBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertLightColorSchemeWarningIcon", function () {
        return AlertLightColorSchemeWarningIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeBorderRadius", function () {
        return AlertSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeBorderWidth", function () {
        return AlertSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeCloseButtonWidth", function () {
        return AlertSizeCloseButtonWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeHorizontalPadding", function () {
        return AlertSizeHorizontalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeIconMargin", function () {
        return AlertSizeIconMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeSmallVerticalPadding", function () {
        return AlertSizeSmallVerticalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertSizeVerticalPadding", function () {
        return AlertSizeVerticalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteSizePanelBorderRadius", function () {
        return AutocompleteSizePanelBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteSizePanelMaxHeight", function () {
        return AutocompleteSizePanelMaxHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteSizePanelPadding", function () {
        return AutocompleteSizePanelPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeFontCaps", function () {
        return BadgeFontCaps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeFontDefault", function () {
        return BadgeFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeSizeBorderRadius", function () {
        return BadgeSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeSizeBorderWidth", function () {
        return BadgeSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeSizeMinWidth", function () {
        return BadgeSizeMinWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeSizePadding", function () {
        return BadgeSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeActiveShadow", function () {
        return ButtonDarkColorSchemeActiveShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeErrorBackground", function () {
        return ButtonDarkColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeErrorBorder", function () {
        return ButtonDarkColorSchemeErrorBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeErrorColor", function () {
        return ButtonDarkColorSchemeErrorColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeErrorIcon", function () {
        return ButtonDarkColorSchemeErrorIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeErrorStatesActiveBackground", function () {
        return ButtonDarkColorSchemeErrorStatesActiveBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeErrorStatesActiveBorder", function () {
        return ButtonDarkColorSchemeErrorStatesActiveBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryBackground", function () {
        return ButtonDarkColorSchemePrimaryBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryBorder", function () {
        return ButtonDarkColorSchemePrimaryBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryColor", function () {
        return ButtonDarkColorSchemePrimaryColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryIcon", function () {
        return ButtonDarkColorSchemePrimaryIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryStatesActiveBackground", function () {
        return ButtonDarkColorSchemePrimaryStatesActiveBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryStatesActiveBorder", function () {
        return ButtonDarkColorSchemePrimaryStatesActiveBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryTransparentColor", function () {
        return ButtonDarkColorSchemePrimaryTransparentColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryTransparentIcon", function () {
        return ButtonDarkColorSchemePrimaryTransparentIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryTransparentStatesActiveColor", function () {
        return ButtonDarkColorSchemePrimaryTransparentStatesActiveColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryTransparentStatesActiveIcon", function () {
        return ButtonDarkColorSchemePrimaryTransparentStatesActiveIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryTransparentStatesHoverColor", function () {
        return ButtonDarkColorSchemePrimaryTransparentStatesHoverColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemePrimaryTransparentStatesHoverIcon", function () {
        return ButtonDarkColorSchemePrimaryTransparentStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeSecondBackground", function () {
        return ButtonDarkColorSchemeSecondBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeSecondBorder", function () {
        return ButtonDarkColorSchemeSecondBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeSecondColor", function () {
        return ButtonDarkColorSchemeSecondColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeSecondIcon", function () {
        return ButtonDarkColorSchemeSecondIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeSecondStatesActiveBackground", function () {
        return ButtonDarkColorSchemeSecondStatesActiveBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonDarkColorSchemeSecondStatesActiveBorder", function () {
        return ButtonDarkColorSchemeSecondStatesActiveBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonFontDefault", function () {
        return ButtonFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonFontPrimary", function () {
        return ButtonFontPrimary;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonFontPrimaryTransparent", function () {
        return ButtonFontPrimaryTransparent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeActiveShadow", function () {
        return ButtonLightColorSchemeActiveShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeErrorBackground", function () {
        return ButtonLightColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeErrorBorder", function () {
        return ButtonLightColorSchemeErrorBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeErrorColor", function () {
        return ButtonLightColorSchemeErrorColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeErrorIcon", function () {
        return ButtonLightColorSchemeErrorIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeErrorStatesActiveBackground", function () {
        return ButtonLightColorSchemeErrorStatesActiveBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeErrorStatesActiveBorder", function () {
        return ButtonLightColorSchemeErrorStatesActiveBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryBackground", function () {
        return ButtonLightColorSchemePrimaryBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryBorder", function () {
        return ButtonLightColorSchemePrimaryBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryColor", function () {
        return ButtonLightColorSchemePrimaryColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryIcon", function () {
        return ButtonLightColorSchemePrimaryIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryStatesActiveBackground", function () {
        return ButtonLightColorSchemePrimaryStatesActiveBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryStatesActiveBorder", function () {
        return ButtonLightColorSchemePrimaryStatesActiveBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryTransparentColor", function () {
        return ButtonLightColorSchemePrimaryTransparentColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryTransparentIcon", function () {
        return ButtonLightColorSchemePrimaryTransparentIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryTransparentStatesActiveColor", function () {
        return ButtonLightColorSchemePrimaryTransparentStatesActiveColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryTransparentStatesActiveIcon", function () {
        return ButtonLightColorSchemePrimaryTransparentStatesActiveIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryTransparentStatesHoverColor", function () {
        return ButtonLightColorSchemePrimaryTransparentStatesHoverColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemePrimaryTransparentStatesHoverIcon", function () {
        return ButtonLightColorSchemePrimaryTransparentStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeSecondBackground", function () {
        return ButtonLightColorSchemeSecondBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeSecondBorder", function () {
        return ButtonLightColorSchemeSecondBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeSecondColor", function () {
        return ButtonLightColorSchemeSecondColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeSecondIcon", function () {
        return ButtonLightColorSchemeSecondIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeSecondStatesActiveBackground", function () {
        return ButtonLightColorSchemeSecondStatesActiveBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonLightColorSchemeSecondStatesActiveBorder", function () {
        return ButtonLightColorSchemeSecondStatesActiveBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonSizeBorderRadius", function () {
        return ButtonSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonSizeBorderWidth", function () {
        return ButtonSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonSizeHorizontalPadding", function () {
        return ButtonSizeHorizontalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonSizeVerticalPadding", function () {
        return ButtonSizeVerticalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonToggleSizeBorderRadius", function () {
        return ButtonToggleSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonToggleSizeBorderSize", function () {
        return ButtonToggleSizeBorderSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeErrorBackground", function () {
        return CardDarkColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeErrorShadow", function () {
        return CardDarkColorSchemeErrorShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeErrorVerticalLine", function () {
        return CardDarkColorSchemeErrorVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeInfoBackground", function () {
        return CardDarkColorSchemeInfoBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeInfoShadow", function () {
        return CardDarkColorSchemeInfoShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeInfoVerticalLine", function () {
        return CardDarkColorSchemeInfoVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeSuccessBackground", function () {
        return CardDarkColorSchemeSuccessBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeSuccessShadow", function () {
        return CardDarkColorSchemeSuccessShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeSuccessVerticalLine", function () {
        return CardDarkColorSchemeSuccessVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeWarningBackground", function () {
        return CardDarkColorSchemeWarningBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeWarningShadow", function () {
        return CardDarkColorSchemeWarningShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardDarkColorSchemeWarningVerticalLine", function () {
        return CardDarkColorSchemeWarningVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeErrorBackground", function () {
        return CardLightColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeErrorShadow", function () {
        return CardLightColorSchemeErrorShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeErrorVerticalLine", function () {
        return CardLightColorSchemeErrorVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeInfoBackground", function () {
        return CardLightColorSchemeInfoBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeInfoShadow", function () {
        return CardLightColorSchemeInfoShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeInfoVerticalLine", function () {
        return CardLightColorSchemeInfoVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeSuccessBackground", function () {
        return CardLightColorSchemeSuccessBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeSuccessShadow", function () {
        return CardLightColorSchemeSuccessShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeSuccessVerticalLine", function () {
        return CardLightColorSchemeSuccessVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeWarningBackground", function () {
        return CardLightColorSchemeWarningBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeWarningShadow", function () {
        return CardLightColorSchemeWarningShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardLightColorSchemeWarningVerticalLine", function () {
        return CardLightColorSchemeWarningVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardSizeVerticalLine", function () {
        return CardSizeVerticalLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxDarkColorSchemeBorder", function () {
        return CheckboxDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxDarkColorSchemeStatesCheckedBackground", function () {
        return CheckboxDarkColorSchemeStatesCheckedBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxDarkColorSchemeStatesCheckedBorder", function () {
        return CheckboxDarkColorSchemeStatesCheckedBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxDarkColorSchemeStatesFocusedBorder", function () {
        return CheckboxDarkColorSchemeStatesFocusedBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxDarkColorSchemeStatesFocusedShadow", function () {
        return CheckboxDarkColorSchemeStatesFocusedShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxFontDefault", function () {
        return CheckboxFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxLightColorSchemeBorder", function () {
        return CheckboxLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxLightColorSchemeStatesCheckedBackground", function () {
        return CheckboxLightColorSchemeStatesCheckedBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxLightColorSchemeStatesCheckedBorder", function () {
        return CheckboxLightColorSchemeStatesCheckedBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxLightColorSchemeStatesFocusedBorder", function () {
        return CheckboxLightColorSchemeStatesFocusedBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxLightColorSchemeStatesFocusedShadow", function () {
        return CheckboxLightColorSchemeStatesFocusedShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxSizeBorderWidth", function () {
        return CheckboxSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxSizeLabelMargin", function () {
        return CheckboxSizeLabelMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxSizeToggleBoxShadow", function () {
        return CheckboxSizeToggleBoxShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxSizeWidth", function () {
        return CheckboxSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorBluePalette", function () {
        return ColorBluePalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorGreenPalette", function () {
        return ColorGreenPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorGreyPalette", function () {
        return ColorGreyPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorRedPalette", function () {
        return ColorRedPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColorYellowPalette", function () {
        return ColorYellowPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeBackgroundBackground", function () {
        return DarkColorSchemeBackgroundBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeBackgroundBackgroundDisabled", function () {
        return DarkColorSchemeBackgroundBackgroundDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeBackgroundOverlayActive", function () {
        return DarkColorSchemeBackgroundOverlayActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeBackgroundOverlayDisabled", function () {
        return DarkColorSchemeBackgroundOverlayDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeBackgroundOverlayHover", function () {
        return DarkColorSchemeBackgroundOverlayHover;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeErrorDefault", function () {
        return DarkColorSchemeErrorDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeErrorPalette", function () {
        return DarkColorSchemeErrorPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeForegroundBorder", function () {
        return DarkColorSchemeForegroundBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeForegroundDivider", function () {
        return DarkColorSchemeForegroundDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeForegroundIcon", function () {
        return DarkColorSchemeForegroundIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeForegroundText", function () {
        return DarkColorSchemeForegroundText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeForegroundTextDisabled", function () {
        return DarkColorSchemeForegroundTextDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeForegroundTextLessContrast", function () {
        return DarkColorSchemeForegroundTextLessContrast;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeInfoDefault", function () {
        return DarkColorSchemeInfoDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeInfoPalette", function () {
        return DarkColorSchemeInfoPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemePrimaryDefault", function () {
        return DarkColorSchemePrimaryDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemePrimaryPalette", function () {
        return DarkColorSchemePrimaryPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeSecondDefault", function () {
        return DarkColorSchemeSecondDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeSecondPalette", function () {
        return DarkColorSchemeSecondPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeStatesDisabledOpacity", function () {
        return DarkColorSchemeStatesDisabledOpacity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeStatesFocusedColor", function () {
        return DarkColorSchemeStatesFocusedColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeStatesPressedShadow", function () {
        return DarkColorSchemeStatesPressedShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeStatesSelectedColor", function () {
        return DarkColorSchemeStatesSelectedColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeSuccessDefault", function () {
        return DarkColorSchemeSuccessDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeSuccessPalette", function () {
        return DarkColorSchemeSuccessPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeWarningDefault", function () {
        return DarkColorSchemeWarningDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DarkColorSchemeWarningPalette", function () {
        return DarkColorSchemeWarningPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodyDarkColorSchemeStatesSelectedBackground", function () {
        return DatepickerBodyDarkColorSchemeStatesSelectedBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodyDarkColorSchemeStatesSelectedColor", function () {
        return DatepickerBodyDarkColorSchemeStatesSelectedColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodyFontLabel", function () {
        return DatepickerBodyFontLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodyFontToday", function () {
        return DatepickerBodyFontToday;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodyLightColorSchemeStatesSelectedBackground", function () {
        return DatepickerBodyLightColorSchemeStatesSelectedBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodyLightColorSchemeStatesSelectedColor", function () {
        return DatepickerBodyLightColorSchemeStatesSelectedColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodySizeCellBorderWidth", function () {
        return DatepickerBodySizeCellBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodySizeCellMargin", function () {
        return DatepickerBodySizeCellMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodySizeCellMinSize", function () {
        return DatepickerBodySizeCellMinSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodySizeCellPadding", function () {
        return DatepickerBodySizeCellPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerBodySizeLabelPaddings", function () {
        return DatepickerBodySizeLabelPaddings;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarFontDefault", function () {
        return DatepickerCalendarFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarFontHeader", function () {
        return DatepickerCalendarFontHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizeDividerWidth", function () {
        return DatepickerCalendarSizeDividerWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizeIconBorderWidth", function () {
        return DatepickerCalendarSizeIconBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizeIconNexIconTransform", function () {
        return DatepickerCalendarSizeIconNexIconTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizeIconPrevIconTransform", function () {
        return DatepickerCalendarSizeIconPrevIconTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizePaddingBlocks", function () {
        return DatepickerCalendarSizePaddingBlocks;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizePaddingBottom", function () {
        return DatepickerCalendarSizePaddingBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizePaddingHorizontal", function () {
        return DatepickerCalendarSizePaddingHorizontal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCalendarSizePaddingTop", function () {
        return DatepickerCalendarSizePaddingTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerInputSizeWidth", function () {
        return DatepickerInputSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerToggleSizeHeight", function () {
        return DatepickerToggleSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerToggleSizeWidth", function () {
        return DatepickerToggleSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerSizeInsetMargin", function () {
        return DividerSizeInsetMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DividerSizeWidth", function () {
        return DividerSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownDividerSizeHeight", function () {
        return DropdownDividerSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownDividerSizeMargin", function () {
        return DropdownDividerSizeMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownGroupHeaderFontDefault", function () {
        return DropdownGroupHeaderFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownGroupHeaderFontSmall", function () {
        return DropdownGroupHeaderFontSmall;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownGroupHeaderSizeDefaultPadding", function () {
        return DropdownGroupHeaderSizeDefaultPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownGroupHeaderSizeSmallPadding", function () {
        return DropdownGroupHeaderSizeSmallPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownItemFontCaption", function () {
        return DropdownItemFontCaption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownItemFontDefault", function () {
        return DropdownItemFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownItemSizeIconPadding", function () {
        return DropdownItemSizeIconPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownItemSizePadding", function () {
        return DropdownItemSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownPanelSizeBorderRadius", function () {
        return DropdownPanelSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownPanelSizeBorderWidth", function () {
        return DropdownPanelSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownPanelSizeMaxWidth", function () {
        return DropdownPanelSizeMaxWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownPanelSizePadding", function () {
        return DropdownPanelSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownTriggerSizeIconPaddingRight", function () {
        return DropdownTriggerSizeIconPaddingRight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FontFamilyBase", function () {
        return FontFamilyBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FontFamilyMonospace", function () {
        return FontFamilyMonospace;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldDarkColorSchemeBackground", function () {
        return FormFieldDarkColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldDarkColorSchemeBorder", function () {
        return FormFieldDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldDarkColorSchemeStatesHoverBorder", function () {
        return FormFieldDarkColorSchemeStatesHoverBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldDarkColorSchemeStatesInvalidBackground", function () {
        return FormFieldDarkColorSchemeStatesInvalidBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldDarkColorSchemeStatesInvalidBorder", function () {
        return FormFieldDarkColorSchemeStatesInvalidBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldFontDefault", function () {
        return FormFieldFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldHintFontDefault", function () {
        return FormFieldHintFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldHintSizeMarginTop", function () {
        return FormFieldHintSizeMarginTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldLightColorSchemeBackground", function () {
        return FormFieldLightColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldLightColorSchemeBorder", function () {
        return FormFieldLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldLightColorSchemeStatesHoverBorder", function () {
        return FormFieldLightColorSchemeStatesHoverBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldLightColorSchemeStatesInvalidBackground", function () {
        return FormFieldLightColorSchemeStatesInvalidBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldLightColorSchemeStatesInvalidBorder", function () {
        return FormFieldLightColorSchemeStatesInvalidBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldSizeBorderRadius", function () {
        return FormFieldSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldSizeBorderWidth", function () {
        return FormFieldSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormFieldSizeButtonWidth", function () {
        return FormFieldSizeButtonWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsDarkColorSchemeLabel", function () {
        return FormsDarkColorSchemeLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsDarkColorSchemeLegend", function () {
        return FormsDarkColorSchemeLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsFontDefaultLabel", function () {
        return FormsFontDefaultLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsFontDefaultLegend", function () {
        return FormsFontDefaultLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsLightColorSchemeLabel", function () {
        return FormsLightColorSchemeLabel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsLightColorSchemeLegend", function () {
        return FormsLightColorSchemeLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeHorizontalControlPaddingLeft", function () {
        return FormsSizeHorizontalControlPaddingLeft;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeHorizontalLabelPaddingBottom", function () {
        return FormsSizeHorizontalLabelPaddingBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeHorizontalLabelPaddingTop", function () {
        return FormsSizeHorizontalLabelPaddingTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeHorizontalLegendMarginBottom", function () {
        return FormsSizeHorizontalLegendMarginBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeHorizontalLegendMarginTop", function () {
        return FormsSizeHorizontalLegendMarginTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeHorizontalRowMarginBottom", function () {
        return FormsSizeHorizontalRowMarginBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeVerticalControlPaddingLeft", function () {
        return FormsSizeVerticalControlPaddingLeft;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeVerticalLabelPaddingBottom", function () {
        return FormsSizeVerticalLabelPaddingBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeVerticalLabelPaddingTop", function () {
        return FormsSizeVerticalLabelPaddingTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeVerticalLegendMarginBottom", function () {
        return FormsSizeVerticalLegendMarginBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeVerticalLegendMarginTop", function () {
        return FormsSizeVerticalLegendMarginTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormsSizeVerticalRowMarginBottom", function () {
        return FormsSizeVerticalRowMarginBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconButtonSizeHorizontalPadding", function () {
        return IconButtonSizeHorizontalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconButtonSizeIconHorizontalPadding", function () {
        return IconButtonSizeIconHorizontalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IconButtonSizeVerticalPadding", function () {
        return IconButtonSizeVerticalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputFontDefault", function () {
        return InputFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputFontMonospace", function () {
        return InputFontMonospace;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputSizeMinHeight", function () {
        return InputSizeMinHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputSizePadding", function () {
        return InputSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputSizeWidth", function () {
        return InputSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeBackgroundBackground", function () {
        return LightColorSchemeBackgroundBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeBackgroundBackgroundDisabled", function () {
        return LightColorSchemeBackgroundBackgroundDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeBackgroundOverlayActive", function () {
        return LightColorSchemeBackgroundOverlayActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeBackgroundOverlayDisabled", function () {
        return LightColorSchemeBackgroundOverlayDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeBackgroundOverlayHover", function () {
        return LightColorSchemeBackgroundOverlayHover;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeErrorDefault", function () {
        return LightColorSchemeErrorDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeErrorPalette", function () {
        return LightColorSchemeErrorPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeForegroundBorder", function () {
        return LightColorSchemeForegroundBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeForegroundDivider", function () {
        return LightColorSchemeForegroundDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeForegroundIcon", function () {
        return LightColorSchemeForegroundIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeForegroundText", function () {
        return LightColorSchemeForegroundText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeForegroundTextDisabled", function () {
        return LightColorSchemeForegroundTextDisabled;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeForegroundTextLessContrast", function () {
        return LightColorSchemeForegroundTextLessContrast;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeInfoDefault", function () {
        return LightColorSchemeInfoDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeInfoPalette", function () {
        return LightColorSchemeInfoPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemePrimaryDefault", function () {
        return LightColorSchemePrimaryDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemePrimaryPalette", function () {
        return LightColorSchemePrimaryPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeSecondDefault", function () {
        return LightColorSchemeSecondDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeSecondPalette", function () {
        return LightColorSchemeSecondPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeStatesDisabledOpacity", function () {
        return LightColorSchemeStatesDisabledOpacity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeStatesFocusedColor", function () {
        return LightColorSchemeStatesFocusedColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeStatesPressedShadow", function () {
        return LightColorSchemeStatesPressedShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeStatesSelectedColor", function () {
        return LightColorSchemeStatesSelectedColor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeSuccessDefault", function () {
        return LightColorSchemeSuccessDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeSuccessPalette", function () {
        return LightColorSchemeSuccessPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeWarningDefault", function () {
        return LightColorSchemeWarningDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LightColorSchemeWarningPalette", function () {
        return LightColorSchemeWarningPalette;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkAnimationStateHoverTransition", function () {
        return LinkAnimationStateHoverTransition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkAnimationTransition", function () {
        return LinkAnimationTransition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeBorderBottom", function () {
        return LinkDarkColorSchemeBorderBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeStateActive", function () {
        return LinkDarkColorSchemeStateActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeStateFocusedOutline", function () {
        return LinkDarkColorSchemeStateFocusedOutline;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeStateHoverBorderBottom", function () {
        return LinkDarkColorSchemeStateHoverBorderBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeStateHoverText", function () {
        return LinkDarkColorSchemeStateHoverText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeStateVisitedBorderBottom", function () {
        return LinkDarkColorSchemeStateVisitedBorderBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeStateVisitedText", function () {
        return LinkDarkColorSchemeStateVisitedText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkDarkColorSchemeText", function () {
        return LinkDarkColorSchemeText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkFontDefault", function () {
        return LinkFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeBorderBottom", function () {
        return LinkLightColorSchemeBorderBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeStateActive", function () {
        return LinkLightColorSchemeStateActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeStateFocusedOutline", function () {
        return LinkLightColorSchemeStateFocusedOutline;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeStateHoverBorderBottom", function () {
        return LinkLightColorSchemeStateHoverBorderBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeStateHoverText", function () {
        return LinkLightColorSchemeStateHoverText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeStateVisitedBorderBottom", function () {
        return LinkLightColorSchemeStateVisitedBorderBottom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeStateVisitedText", function () {
        return LinkLightColorSchemeStateVisitedText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkLightColorSchemeText", function () {
        return LinkLightColorSchemeText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkSizeIconMargin", function () {
        return LinkSizeIconMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkSizeStateFocusedOutlineOffset", function () {
        return LinkSizeStateFocusedOutlineOffset;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkSizeStateFocusedOutlineWidth", function () {
        return LinkSizeStateFocusedOutlineWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListFontItem", function () {
        return ListFontItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeHorizontalPadding", function () {
        return ListSizeHorizontalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeIconPadding", function () {
        return ListSizeIconPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeIconWidth", function () {
        return ListSizeIconWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeItemHeight", function () {
        return ListSizeItemHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeMultiLinePadding", function () {
        return ListSizeMultiLinePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeThreeLineHeight", function () {
        return ListSizeThreeLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListSizeTwoLineHeight", function () {
        return ListSizeTwoLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBodyFontDefault", function () {
        return ModalBodyFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBodySizeMaxHeight", function () {
        return ModalBodySizeMaxHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalBodySizePadding", function () {
        return ModalBodySizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalConfirmSizePadding", function () {
        return ModalConfirmSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDarkColorSchemeBackgroundMask", function () {
        return ModalDarkColorSchemeBackgroundMask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDarkColorSchemeBodyBottomShadow", function () {
        return ModalDarkColorSchemeBodyBottomShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDarkColorSchemeBodyTopShadow", function () {
        return ModalDarkColorSchemeBodyTopShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalDarkColorSchemeShadow", function () {
        return ModalDarkColorSchemeShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFooterSizeBorderRadius", function () {
        return ModalFooterSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalFooterSizePadding", function () {
        return ModalFooterSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalHeaderFontDefault", function () {
        return ModalHeaderFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalHeaderSizeBorderRadius", function () {
        return ModalHeaderSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalHeaderSizePadding", function () {
        return ModalHeaderSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalLightColorSchemeBackgroundMask", function () {
        return ModalLightColorSchemeBackgroundMask;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalLightColorSchemeBodyBottomShadow", function () {
        return ModalLightColorSchemeBodyBottomShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalLightColorSchemeBodyTopShadow", function () {
        return ModalLightColorSchemeBodyTopShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalLightColorSchemeShadow", function () {
        return ModalLightColorSchemeShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeBorderRadius", function () {
        return ModalSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeBorderWidth", function () {
        return ModalSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeCloseWidth", function () {
        return ModalSizeCloseWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeLarge", function () {
        return ModalSizeLarge;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeNormal", function () {
        return ModalSizeNormal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeSmall", function () {
        return ModalSizeSmall;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSizeTop", function () {
        return ModalSizeTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarBrandFontTitle", function () {
        return NavbarBrandFontTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarBrandSizeMarginRight", function () {
        return NavbarBrandSizeMarginRight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarBrandSizePadding", function () {
        return NavbarBrandSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarDarkColorSchemeBackground", function () {
        return NavbarDarkColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarDarkColorSchemeDividerBackground", function () {
        return NavbarDarkColorSchemeDividerBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarFontTitle", function () {
        return NavbarFontTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemDarkColorSchemeStatesActive", function () {
        return NavbarItemDarkColorSchemeStatesActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemDarkColorSchemeStatesDisabledOpacity", function () {
        return NavbarItemDarkColorSchemeStatesDisabledOpacity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemDarkColorSchemeStatesHover", function () {
        return NavbarItemDarkColorSchemeStatesHover;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemDarkColorSchemeStatesProgress", function () {
        return NavbarItemDarkColorSchemeStatesProgress;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemDarkColorSchemeText", function () {
        return NavbarItemDarkColorSchemeText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemLightColorSchemeStatesActive", function () {
        return NavbarItemLightColorSchemeStatesActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemLightColorSchemeStatesDisabledOpacity", function () {
        return NavbarItemLightColorSchemeStatesDisabledOpacity;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemLightColorSchemeStatesHover", function () {
        return NavbarItemLightColorSchemeStatesHover;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemLightColorSchemeStatesProgress", function () {
        return NavbarItemLightColorSchemeStatesProgress;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemLightColorSchemeText", function () {
        return NavbarItemLightColorSchemeText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemSizeHeight", function () {
        return NavbarItemSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarItemSizePadding", function () {
        return NavbarItemSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarLightColorSchemeBackground", function () {
        return NavbarLightColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarLightColorSchemeDividerBackground", function () {
        return NavbarLightColorSchemeDividerBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarSizeIconMargin", function () {
        return NavbarSizeIconMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptgroupFontDefault", function () {
        return OptgroupFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptgroupSizePaddingLeft", function () {
        return OptgroupSizePaddingLeft;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionFontDefault", function () {
        return OptionFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionSizeBorderWidth", function () {
        return OptionSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionSizeHeight", function () {
        return OptionSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionSizeHorizontalPadding", function () {
        return OptionSizeHorizontalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue100", function () {
        return PaletteBlue100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue200", function () {
        return PaletteBlue200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue300", function () {
        return PaletteBlue300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue40", function () {
        return PaletteBlue40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue400", function () {
        return PaletteBlue400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue500", function () {
        return PaletteBlue500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue560", function () {
        return PaletteBlue560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue60", function () {
        return PaletteBlue60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue600", function () {
        return PaletteBlue600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue700", function () {
        return PaletteBlue700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlue800", function () {
        return PaletteBlue800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueA100", function () {
        return PaletteBlueA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueA200", function () {
        return PaletteBlueA200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast100", function () {
        return PaletteBlueContrast100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast200", function () {
        return PaletteBlueContrast200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast300", function () {
        return PaletteBlueContrast300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast40", function () {
        return PaletteBlueContrast40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast400", function () {
        return PaletteBlueContrast400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast500", function () {
        return PaletteBlueContrast500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast560", function () {
        return PaletteBlueContrast560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast60", function () {
        return PaletteBlueContrast60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast600", function () {
        return PaletteBlueContrast600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast700", function () {
        return PaletteBlueContrast700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrast800", function () {
        return PaletteBlueContrast800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrastA100", function () {
        return PaletteBlueContrastA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteBlueContrastA200", function () {
        return PaletteBlueContrastA200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen100", function () {
        return PaletteGreen100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen200", function () {
        return PaletteGreen200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen300", function () {
        return PaletteGreen300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen40", function () {
        return PaletteGreen40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen400", function () {
        return PaletteGreen400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen500", function () {
        return PaletteGreen500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen560", function () {
        return PaletteGreen560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen60", function () {
        return PaletteGreen60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen600", function () {
        return PaletteGreen600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen700", function () {
        return PaletteGreen700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreen800", function () {
        return PaletteGreen800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenA100", function () {
        return PaletteGreenA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast100", function () {
        return PaletteGreenContrast100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast200", function () {
        return PaletteGreenContrast200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast300", function () {
        return PaletteGreenContrast300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast40", function () {
        return PaletteGreenContrast40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast400", function () {
        return PaletteGreenContrast400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast500", function () {
        return PaletteGreenContrast500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast560", function () {
        return PaletteGreenContrast560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast60", function () {
        return PaletteGreenContrast60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast600", function () {
        return PaletteGreenContrast600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast700", function () {
        return PaletteGreenContrast700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrast800", function () {
        return PaletteGreenContrast800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreenContrastA100", function () {
        return PaletteGreenContrastA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey100", function () {
        return PaletteGrey100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey200", function () {
        return PaletteGrey200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey300", function () {
        return PaletteGrey300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey40", function () {
        return PaletteGrey40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey400", function () {
        return PaletteGrey400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey500", function () {
        return PaletteGrey500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey560", function () {
        return PaletteGrey560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey60", function () {
        return PaletteGrey60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey600", function () {
        return PaletteGrey600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey700", function () {
        return PaletteGrey700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGrey800", function () {
        return PaletteGrey800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyA100", function () {
        return PaletteGreyA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyA200", function () {
        return PaletteGreyA200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyA300", function () {
        return PaletteGreyA300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyA40", function () {
        return PaletteGreyA40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyA500", function () {
        return PaletteGreyA500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyA60", function () {
        return PaletteGreyA60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast100", function () {
        return PaletteGreyContrast100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast200", function () {
        return PaletteGreyContrast200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast300", function () {
        return PaletteGreyContrast300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast40", function () {
        return PaletteGreyContrast40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast400", function () {
        return PaletteGreyContrast400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast500", function () {
        return PaletteGreyContrast500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast560", function () {
        return PaletteGreyContrast560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast60", function () {
        return PaletteGreyContrast60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast600", function () {
        return PaletteGreyContrast600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast700", function () {
        return PaletteGreyContrast700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteGreyContrast800", function () {
        return PaletteGreyContrast800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed100", function () {
        return PaletteRed100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed200", function () {
        return PaletteRed200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed300", function () {
        return PaletteRed300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed40", function () {
        return PaletteRed40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed400", function () {
        return PaletteRed400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed500", function () {
        return PaletteRed500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed560", function () {
        return PaletteRed560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed60", function () {
        return PaletteRed60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed600", function () {
        return PaletteRed600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed700", function () {
        return PaletteRed700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRed800", function () {
        return PaletteRed800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedA100", function () {
        return PaletteRedA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast100", function () {
        return PaletteRedContrast100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast200", function () {
        return PaletteRedContrast200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast300", function () {
        return PaletteRedContrast300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast40", function () {
        return PaletteRedContrast40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast400", function () {
        return PaletteRedContrast400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast500", function () {
        return PaletteRedContrast500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast560", function () {
        return PaletteRedContrast560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast60", function () {
        return PaletteRedContrast60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast600", function () {
        return PaletteRedContrast600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast700", function () {
        return PaletteRedContrast700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrast800", function () {
        return PaletteRedContrast800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteRedContrastA100", function () {
        return PaletteRedContrastA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow100", function () {
        return PaletteYellow100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow200", function () {
        return PaletteYellow200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow300", function () {
        return PaletteYellow300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow40", function () {
        return PaletteYellow40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow400", function () {
        return PaletteYellow400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow500", function () {
        return PaletteYellow500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow560", function () {
        return PaletteYellow560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow60", function () {
        return PaletteYellow60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow600", function () {
        return PaletteYellow600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow700", function () {
        return PaletteYellow700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellow800", function () {
        return PaletteYellow800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowA100", function () {
        return PaletteYellowA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast100", function () {
        return PaletteYellowContrast100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast200", function () {
        return PaletteYellowContrast200;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast300", function () {
        return PaletteYellowContrast300;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast40", function () {
        return PaletteYellowContrast40;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast400", function () {
        return PaletteYellowContrast400;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast500", function () {
        return PaletteYellowContrast500;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast560", function () {
        return PaletteYellowContrast560;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast60", function () {
        return PaletteYellowContrast60;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast600", function () {
        return PaletteYellowContrast600;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast700", function () {
        return PaletteYellowContrast700;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrast800", function () {
        return PaletteYellowContrast800;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PaletteYellowContrastA100", function () {
        return PaletteYellowContrastA100;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverDarkColorSchemeBorder", function () {
        return PopoverDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverFontDefault", function () {
        return PopoverFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverFooterFontDefault", function () {
        return PopoverFooterFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverFooterSizeMarginTop", function () {
        return PopoverFooterSizeMarginTop;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverFooterSizePadding", function () {
        return PopoverFooterSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverHeaderFontDefault", function () {
        return PopoverHeaderFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverHeaderSizePadding", function () {
        return PopoverHeaderSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverLightColorSchemeBorder", function () {
        return PopoverLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizeArrowWidth", function () {
        return PopoverSizeArrowWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizeBorderRadius", function () {
        return PopoverSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizeBorderWidth", function () {
        return PopoverSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizeLargeWidth", function () {
        return PopoverSizeLargeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizeNormalWidth", function () {
        return PopoverSizeNormalWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizePadding", function () {
        return PopoverSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverSizeSmallWidth", function () {
        return PopoverSizeSmallWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupDarkColorSchemeBackground", function () {
        return PopupDarkColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupDarkColorSchemeBorder", function () {
        return PopupDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupDarkColorSchemeDivider", function () {
        return PopupDarkColorSchemeDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupDarkColorSchemeFooterBackground", function () {
        return PopupDarkColorSchemeFooterBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupDarkColorSchemeShadow", function () {
        return PopupDarkColorSchemeShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupLightColorSchemeBackground", function () {
        return PopupLightColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupLightColorSchemeBorder", function () {
        return PopupLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupLightColorSchemeDivider", function () {
        return PopupLightColorSchemeDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupLightColorSchemeFooterBackground", function () {
        return PopupLightColorSchemeFooterBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopupLightColorSchemeShadow", function () {
        return PopupLightColorSchemeShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarDarkColorSchemeBackground", function () {
        return ProgressBarDarkColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarLightColorSchemeBackground", function () {
        return ProgressBarLightColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressBarSizeHeight", function () {
        return ProgressBarSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProgressSpinnerSizeSize", function () {
        return ProgressSpinnerSizeSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeInnerCircleBorder", function () {
        return RadioDarkColorSchemeInnerCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeOuterCircleBorder", function () {
        return RadioDarkColorSchemeOuterCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeStatesCheckedInnerCircleBorder", function () {
        return RadioDarkColorSchemeStatesCheckedInnerCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeStatesCheckedOuterCircleBorder", function () {
        return RadioDarkColorSchemeStatesCheckedOuterCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeStatesFocusedInnerCircleShadow", function () {
        return RadioDarkColorSchemeStatesFocusedInnerCircleShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeStatesFocusedOuterCircleBorder", function () {
        return RadioDarkColorSchemeStatesFocusedOuterCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioDarkColorSchemeStatesFocusedOuterCircleShadow", function () {
        return RadioDarkColorSchemeStatesFocusedOuterCircleShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioFontDefault", function () {
        return RadioFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeInnerCircleBorder", function () {
        return RadioLightColorSchemeInnerCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeOuterCircleBorder", function () {
        return RadioLightColorSchemeOuterCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeStatesCheckedInnerCircleBorder", function () {
        return RadioLightColorSchemeStatesCheckedInnerCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeStatesCheckedOuterCircleBorder", function () {
        return RadioLightColorSchemeStatesCheckedOuterCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeStatesFocusedInnerCircleShadow", function () {
        return RadioLightColorSchemeStatesFocusedInnerCircleShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeStatesFocusedOuterCircleBorder", function () {
        return RadioLightColorSchemeStatesFocusedOuterCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioLightColorSchemeStatesFocusedOuterCircleShadow", function () {
        return RadioLightColorSchemeStatesFocusedOuterCircleShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioSizeLabelMargin", function () {
        return RadioSizeLabelMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RadioSizeSize", function () {
        return RadioSizeSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectFontDefault", function () {
        return SelectFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPanelFontDefault", function () {
        return SelectPanelFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPanelSizeBorderRadius", function () {
        return SelectPanelSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPanelSizeBorderWidth", function () {
        return SelectPanelSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPanelSizeMaxHeight", function () {
        return SelectPanelSizeMaxHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPanelSizeMaxWidth", function () {
        return SelectPanelSizeMaxWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectPanelSizeVerticalPadding", function () {
        return SelectPanelSizeVerticalPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectSizeHeight", function () {
        return SelectSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectSizeLeftPadding", function () {
        return SelectSizeLeftPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectSizeLeftPaddingMultiple", function () {
        return SelectSizeLeftPaddingMultiple;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectSizeRightPadding", function () {
        return SelectSizeRightPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelDarkColorSchemeBorder", function () {
        return SidepanelDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelFontDefault", function () {
        return SidepanelFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelFooterFontDefault", function () {
        return SidepanelFooterFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelFooterSizePadding", function () {
        return SidepanelFooterSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelHeaderFontDefault", function () {
        return SidepanelHeaderFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelHeaderSizeClosePadding", function () {
        return SidepanelHeaderSizeClosePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelHeaderSizePadding", function () {
        return SidepanelHeaderSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidepanelLightColorSchemeBorder", function () {
        return SidepanelLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableFontBody", function () {
        return TableFontBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableFontHeader", function () {
        return TableFontHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableSizeBorderWidth", function () {
        return TableSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableSizeRowPaddingHorizontal", function () {
        return TableSizeRowPaddingHorizontal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableSizeRowPaddingVertical", function () {
        return TableSizeRowPaddingVertical;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsDarkColorSchemeBorder", function () {
        return TabsDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsDarkColorSchemeStateActive", function () {
        return TabsDarkColorSchemeStateActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsDarkColorSchemeStateDisabledOverlay", function () {
        return TabsDarkColorSchemeStateDisabledOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsFontDefault", function () {
        return TabsFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsLightColorSchemeBorder", function () {
        return TabsLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsLightColorSchemeStateActive", function () {
        return TabsLightColorSchemeStateActive;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsLightColorSchemeStateDisabledOverlay", function () {
        return TabsLightColorSchemeStateDisabledOverlay;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsSizeBorderRadius", function () {
        return TabsSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsSizeBorderWidth", function () {
        return TabsSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsSizeHeight", function () {
        return TabsSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsSizeHighlightHeight", function () {
        return TabsSizeHighlightHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsSizeLabelIconMargin", function () {
        return TabsSizeLabelIconMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsSizePaddingHorizontal", function () {
        return TabsSizePaddingHorizontal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputFontDefault", function () {
        return TagInputFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputSizeHeight", function () {
        return TagInputSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagInputSizeMargin", function () {
        return TagInputSizeMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagListSizeMinHeight", function () {
        return TagListSizeMinHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagListSizePadding", function () {
        return TagListSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorBackground", function () {
        return TagsDarkColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorBorder", function () {
        return TagsDarkColorSchemeErrorBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorIcon", function () {
        return TagsDarkColorSchemeErrorIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorStatesDisabledBackground", function () {
        return TagsDarkColorSchemeErrorStatesDisabledBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorStatesDisabledText", function () {
        return TagsDarkColorSchemeErrorStatesDisabledText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorStatesFocused", function () {
        return TagsDarkColorSchemeErrorStatesFocused;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeErrorStatesHoverIcon", function () {
        return TagsDarkColorSchemeErrorStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryBackground", function () {
        return TagsDarkColorSchemePrimaryBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryBorder", function () {
        return TagsDarkColorSchemePrimaryBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryIcon", function () {
        return TagsDarkColorSchemePrimaryIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryStatesDisabledBackground", function () {
        return TagsDarkColorSchemePrimaryStatesDisabledBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryStatesDisabledText", function () {
        return TagsDarkColorSchemePrimaryStatesDisabledText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryStatesFocused", function () {
        return TagsDarkColorSchemePrimaryStatesFocused;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemePrimaryStatesHoverIcon", function () {
        return TagsDarkColorSchemePrimaryStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondBackground", function () {
        return TagsDarkColorSchemeSecondBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondBorder", function () {
        return TagsDarkColorSchemeSecondBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondIcon", function () {
        return TagsDarkColorSchemeSecondIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondStatesDisabledBackground", function () {
        return TagsDarkColorSchemeSecondStatesDisabledBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondStatesDisabledText", function () {
        return TagsDarkColorSchemeSecondStatesDisabledText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondStatesFocused", function () {
        return TagsDarkColorSchemeSecondStatesFocused;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsDarkColorSchemeSecondStatesHoverIcon", function () {
        return TagsDarkColorSchemeSecondStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsFontCaps", function () {
        return TagsFontCaps;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsFontDefault", function () {
        return TagsFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsFontMono", function () {
        return TagsFontMono;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorBackground", function () {
        return TagsLightColorSchemeErrorBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorBorder", function () {
        return TagsLightColorSchemeErrorBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorIcon", function () {
        return TagsLightColorSchemeErrorIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorStatesDisabledBackground", function () {
        return TagsLightColorSchemeErrorStatesDisabledBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorStatesDisabledText", function () {
        return TagsLightColorSchemeErrorStatesDisabledText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorStatesFocused", function () {
        return TagsLightColorSchemeErrorStatesFocused;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeErrorStatesHoverIcon", function () {
        return TagsLightColorSchemeErrorStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryBackground", function () {
        return TagsLightColorSchemePrimaryBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryBorder", function () {
        return TagsLightColorSchemePrimaryBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryIcon", function () {
        return TagsLightColorSchemePrimaryIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryStatesDisabledBackground", function () {
        return TagsLightColorSchemePrimaryStatesDisabledBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryStatesDisabledText", function () {
        return TagsLightColorSchemePrimaryStatesDisabledText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryStatesFocused", function () {
        return TagsLightColorSchemePrimaryStatesFocused;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemePrimaryStatesHoverIcon", function () {
        return TagsLightColorSchemePrimaryStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondBackground", function () {
        return TagsLightColorSchemeSecondBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondBorder", function () {
        return TagsLightColorSchemeSecondBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondIcon", function () {
        return TagsLightColorSchemeSecondIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondStatesDisabledBackground", function () {
        return TagsLightColorSchemeSecondStatesDisabledBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondStatesDisabledText", function () {
        return TagsLightColorSchemeSecondStatesDisabledText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondStatesFocused", function () {
        return TagsLightColorSchemeSecondStatesFocused;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsLightColorSchemeSecondStatesHoverIcon", function () {
        return TagsLightColorSchemeSecondStatesHoverIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsSizeBorderRadius", function () {
        return TagsSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsSizeBorderWidth", function () {
        return TagsSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsSizeHeight", function () {
        return TagsSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsSizeIconPadding", function () {
        return TagsSizeIconPadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsSizeMargin", function () {
        return TagsSizeMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TagsSizeTextMargin", function () {
        return TagsSizeTextMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextareaFontDefault", function () {
        return TextareaFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextareaFontMono", function () {
        return TextareaFontMono;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextareaSizeMinHeight", function () {
        return TextareaSizeMinHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextareaSizePadding", function () {
        return TextareaSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimepickerSizePaddingRight", function () {
        return TimepickerSizePaddingRight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleDarkColorSchemeBackground", function () {
        return ToggleDarkColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleDarkColorSchemeBorder", function () {
        return ToggleDarkColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleDarkColorSchemeCircleBackground", function () {
        return ToggleDarkColorSchemeCircleBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleDarkColorSchemeCircleBorder", function () {
        return ToggleDarkColorSchemeCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleDarkColorSchemeStatesFocusedShadow", function () {
        return ToggleDarkColorSchemeStatesFocusedShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleFontDefault", function () {
        return ToggleFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleLightColorSchemeBackground", function () {
        return ToggleLightColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleLightColorSchemeBorder", function () {
        return ToggleLightColorSchemeBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleLightColorSchemeCircleBackground", function () {
        return ToggleLightColorSchemeCircleBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleLightColorSchemeCircleBorder", function () {
        return ToggleLightColorSchemeCircleBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleLightColorSchemeStatesFocusedShadow", function () {
        return ToggleLightColorSchemeStatesFocusedShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSizeBorderRadius", function () {
        return ToggleSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSizeHeight", function () {
        return ToggleSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSizeLabelMargin", function () {
        return ToggleSizeLabelMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSizeWidth", function () {
        return ToggleSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSmallFontDefault", function () {
        return ToggleSmallFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSmallSizeBorderRadius", function () {
        return ToggleSmallSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSmallSizeHeight", function () {
        return ToggleSmallSizeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleSmallSizeWidth", function () {
        return ToggleSmallSizeWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDarkColorSchemeBackground", function () {
        return TooltipDarkColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDarkColorSchemeShadow", function () {
        return TooltipDarkColorSchemeShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDarkColorSchemeText", function () {
        return TooltipDarkColorSchemeText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDarkColorSchemeWarningBackground", function () {
        return TooltipDarkColorSchemeWarningBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDarkColorSchemeWarningBorder", function () {
        return TooltipDarkColorSchemeWarningBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipDarkColorSchemeWarningText", function () {
        return TooltipDarkColorSchemeWarningText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipFontDefault", function () {
        return TooltipFontDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipLightColorSchemeBackground", function () {
        return TooltipLightColorSchemeBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipLightColorSchemeShadow", function () {
        return TooltipLightColorSchemeShadow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipLightColorSchemeText", function () {
        return TooltipLightColorSchemeText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipLightColorSchemeWarningBackground", function () {
        return TooltipLightColorSchemeWarningBackground;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipLightColorSchemeWarningBorder", function () {
        return TooltipLightColorSchemeWarningBorder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipLightColorSchemeWarningText", function () {
        return TooltipLightColorSchemeWarningText;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipSizeArrowSize", function () {
        return TooltipSizeArrowSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipSizeArrowWidth", function () {
        return TooltipSizeArrowWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipSizeBorderRadius", function () {
        return TooltipSizeBorderRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipSizeDistance", function () {
        return TooltipSizeDistance;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipSizeMaxWidth", function () {
        return TooltipSizeMaxWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TooltipSizePadding", function () {
        return TooltipSizePadding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeFontNode", function () {
        return TreeFontNode;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeSizeBorderWidth", function () {
        return TreeSizeBorderWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeSizeNodeHeight", function () {
        return TreeSizeNodeHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeSizePaddingRight", function () {
        return TreeSizePaddingRight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyCapsFontFamily", function () {
        return TypographyBodyCapsFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyCapsFontSize", function () {
        return TypographyBodyCapsFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyCapsFontWeight", function () {
        return TypographyBodyCapsFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyCapsLetterSpacing", function () {
        return TypographyBodyCapsLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyCapsLineHeight", function () {
        return TypographyBodyCapsLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyCapsTextTransform", function () {
        return TypographyBodyCapsTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyFontFamily", function () {
        return TypographyBodyFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyFontSize", function () {
        return TypographyBodyFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyFontWeight", function () {
        return TypographyBodyFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyLetterSpacing", function () {
        return TypographyBodyLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyLineHeight", function () {
        return TypographyBodyLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyMonoFontFamily", function () {
        return TypographyBodyMonoFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyMonoFontSize", function () {
        return TypographyBodyMonoFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyMonoFontWeight", function () {
        return TypographyBodyMonoFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyMonoLetterSpacing", function () {
        return TypographyBodyMonoLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyMonoLineHeight", function () {
        return TypographyBodyMonoLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyMonoTextTransform", function () {
        return TypographyBodyMonoTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyStrongFontFamily", function () {
        return TypographyBodyStrongFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyStrongFontSize", function () {
        return TypographyBodyStrongFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyStrongFontWeight", function () {
        return TypographyBodyStrongFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyStrongLetterSpacing", function () {
        return TypographyBodyStrongLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyStrongLineHeight", function () {
        return TypographyBodyStrongLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyStrongTextTransform", function () {
        return TypographyBodyStrongTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyBodyTextTransform", function () {
        return TypographyBodyTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionCapsFontFamily", function () {
        return TypographyCaptionCapsFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionCapsFontSize", function () {
        return TypographyCaptionCapsFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionCapsFontWeight", function () {
        return TypographyCaptionCapsFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionCapsLetterSpacing", function () {
        return TypographyCaptionCapsLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionCapsLineHeight", function () {
        return TypographyCaptionCapsLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionCapsTextTransform", function () {
        return TypographyCaptionCapsTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionFontFamily", function () {
        return TypographyCaptionFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionFontSize", function () {
        return TypographyCaptionFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionFontWeight", function () {
        return TypographyCaptionFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionLetterSpacing", function () {
        return TypographyCaptionLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionLineHeight", function () {
        return TypographyCaptionLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionMonoFontFamily", function () {
        return TypographyCaptionMonoFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionMonoFontSize", function () {
        return TypographyCaptionMonoFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionMonoFontWeight", function () {
        return TypographyCaptionMonoFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionMonoLetterSpacing", function () {
        return TypographyCaptionMonoLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionMonoLineHeight", function () {
        return TypographyCaptionMonoLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionMonoTextTransform", function () {
        return TypographyCaptionMonoTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyCaptionTextTransform", function () {
        return TypographyCaptionTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay1FontFamily", function () {
        return TypographyDisplay1FontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay1FontSize", function () {
        return TypographyDisplay1FontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay1FontWeight", function () {
        return TypographyDisplay1FontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay1LetterSpacing", function () {
        return TypographyDisplay1LetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay1LineHeight", function () {
        return TypographyDisplay1LineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay1TextTransform", function () {
        return TypographyDisplay1TextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay2FontFamily", function () {
        return TypographyDisplay2FontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay2FontSize", function () {
        return TypographyDisplay2FontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay2FontWeight", function () {
        return TypographyDisplay2FontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay2LetterSpacing", function () {
        return TypographyDisplay2LetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay2LineHeight", function () {
        return TypographyDisplay2LineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay2TextTransform", function () {
        return TypographyDisplay2TextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay3FontFamily", function () {
        return TypographyDisplay3FontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay3FontSize", function () {
        return TypographyDisplay3FontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay3FontWeight", function () {
        return TypographyDisplay3FontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay3LetterSpacing", function () {
        return TypographyDisplay3LetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay3LineHeight", function () {
        return TypographyDisplay3LineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyDisplay3TextTransform", function () {
        return TypographyDisplay3TextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExtraSmallTextFontFamily", function () {
        return TypographyExtraSmallTextFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExtraSmallTextFontSize", function () {
        return TypographyExtraSmallTextFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExtraSmallTextFontWeight", function () {
        return TypographyExtraSmallTextFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExtraSmallTextLetterSpacing", function () {
        return TypographyExtraSmallTextLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExtraSmallTextLineHeight", function () {
        return TypographyExtraSmallTextLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyExtraSmallTextTextTransform", function () {
        return TypographyExtraSmallTextTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyHeadlineFontFamily", function () {
        return TypographyHeadlineFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyHeadlineFontSize", function () {
        return TypographyHeadlineFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyHeadlineFontWeight", function () {
        return TypographyHeadlineFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyHeadlineLetterSpacing", function () {
        return TypographyHeadlineLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyHeadlineLineHeight", function () {
        return TypographyHeadlineLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyHeadlineTextTransform", function () {
        return TypographyHeadlineTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySmallTextFontFamily", function () {
        return TypographySmallTextFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySmallTextFontSize", function () {
        return TypographySmallTextFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySmallTextFontWeight", function () {
        return TypographySmallTextFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySmallTextLetterSpacing", function () {
        return TypographySmallTextLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySmallTextLineHeight", function () {
        return TypographySmallTextLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySmallTextTextTransform", function () {
        return TypographySmallTextTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySubheadingFontFamily", function () {
        return TypographySubheadingFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySubheadingFontSize", function () {
        return TypographySubheadingFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySubheadingFontWeight", function () {
        return TypographySubheadingFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySubheadingLetterSpacing", function () {
        return TypographySubheadingLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySubheadingLineHeight", function () {
        return TypographySubheadingLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographySubheadingTextTransform", function () {
        return TypographySubheadingTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyTitleFontFamily", function () {
        return TypographyTitleFontFamily;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyTitleFontSize", function () {
        return TypographyTitleFontSize;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyTitleFontWeight", function () {
        return TypographyTitleFontWeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyTitleLetterSpacing", function () {
        return TypographyTitleLetterSpacing;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyTitleLineHeight", function () {
        return TypographyTitleLineHeight;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TypographyTitleTextTransform", function () {
        return TypographyTitleTextTransform;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalNavbarSizeIconMargin", function () {
        return VerticalNavbarSizeIconMargin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalNavbarSizeStatesClosedWidth", function () {
        return VerticalNavbarSizeStatesClosedWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerticalNavbarSizeStatesOpenedWidth", function () {
        return VerticalNavbarSizeStatesOpenedWidth;
      });
      /**
       * Do not edit directly
       * Generated on Tue, 19 Oct 2021 09:17:51 GMT
       */


      var LightColorSchemePrimaryDefault = "#338FCC";
      var LightColorSchemePrimaryPalette = {
        "40": {
          "value": "#F5FAFD",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5FAFD"
          },
          "name": "PaletteBlue40",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "40"
          },
          "path": ["palette", "blue", "40"]
        },
        "60": {
          "value": "#EBF4FB",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EBF4FB"
          },
          "name": "PaletteBlue60",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "60"
          },
          "path": ["palette", "blue", "60"]
        },
        "100": {
          "value": "#D8EAF7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D8EAF7"
          },
          "name": "PaletteBlue100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "100"
          },
          "path": ["palette", "blue", "100"]
        },
        "200": {
          "value": "#AAD1EC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AAD1EC"
          },
          "name": "PaletteBlue200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "200"
          },
          "path": ["palette", "blue", "200"]
        },
        "300": {
          "value": "#7FBAE1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7FBAE1"
          },
          "name": "PaletteBlue300",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "300"
          },
          "path": ["palette", "blue", "300"]
        },
        "400": {
          "value": "#57A4D7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#57A4D7"
          },
          "name": "PaletteBlue400",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "400"
          },
          "path": ["palette", "blue", "400"]
        },
        "500": {
          "value": "#338FCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#338FCC"
          },
          "name": "PaletteBlue500",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "500"
          },
          "path": ["palette", "blue", "500"]
        },
        "560": {
          "value": "#277BB3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#277BB3"
          },
          "name": "PaletteBlue560",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "560"
          },
          "path": ["palette", "blue", "560"]
        },
        "600": {
          "value": "#206EA2",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#206EA2"
          },
          "name": "PaletteBlue600",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "600"
          },
          "path": ["palette", "blue", "600"]
        },
        "700": {
          "value": "#114E77",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#114E77"
          },
          "name": "PaletteBlue700",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "700"
          },
          "path": ["palette", "blue", "700"]
        },
        "800": {
          "value": "#07314D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#07314D"
          },
          "name": "PaletteBlue800",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "800"
          },
          "path": ["palette", "blue", "800"]
        },
        "A100": {
          "value": "rgba(0, 153, 255, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.15)"
          },
          "name": "PaletteBlueA100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A100"
          },
          "path": ["palette", "blue", "A100"]
        },
        "A200": {
          "value": "rgba(0, 153, 255, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.3)"
          },
          "name": "PaletteBlueA200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A200"
          },
          "path": ["palette", "blue", "A200"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast40",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "blue", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast60",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "blue", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "blue", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "blue", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast300",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "blue", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast400",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "blue", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast500",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "blue", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast560",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "blue", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast600",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "blue", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast700",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "blue", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast800",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "blue", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrastA100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "blue", "contrast", "A100"]
          },
          "A200": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrastA200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A200"
            },
            "path": ["palette", "blue", "contrast", "A200"]
          }
        }
      };
      var LightColorSchemeSecondDefault = "#B3B3B3";
      var LightColorSchemeSecondPalette = {
        "40": {
          "value": "#F5F5F5",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5F5F5"
          },
          "name": "PaletteGrey40",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "40"
          },
          "path": ["palette", "grey", "40"]
        },
        "60": {
          "value": "#F0F0F0",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F0F0F0"
          },
          "name": "PaletteGrey60",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "60"
          },
          "path": ["palette", "grey", "60"]
        },
        "100": {
          "value": "#E6E6E6",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E6E6E6"
          },
          "name": "PaletteGrey100",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "100"
          },
          "path": ["palette", "grey", "100"]
        },
        "200": {
          "value": "#CCCCCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#CCCCCC"
          },
          "name": "PaletteGrey200",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "200"
          },
          "path": ["palette", "grey", "200"]
        },
        "300": {
          "value": "#B3B3B3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B3B3B3"
          },
          "name": "PaletteGrey300",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "300"
          },
          "path": ["palette", "grey", "300"]
        },
        "400": {
          "value": "#999999",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#999999"
          },
          "name": "PaletteGrey400",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "400"
          },
          "path": ["palette", "grey", "400"]
        },
        "500": {
          "value": "#808080",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#808080"
          },
          "name": "PaletteGrey500",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "500"
          },
          "path": ["palette", "grey", "500"]
        },
        "560": {
          "value": "#707070",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#707070"
          },
          "name": "PaletteGrey560",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "560"
          },
          "path": ["palette", "grey", "560"]
        },
        "600": {
          "value": "#666666",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#666666"
          },
          "name": "PaletteGrey600",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "600"
          },
          "path": ["palette", "grey", "600"]
        },
        "700": {
          "value": "#4D4D4D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#4D4D4D"
          },
          "name": "PaletteGrey700",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "700"
          },
          "path": ["palette", "grey", "700"]
        },
        "800": {
          "value": "#333333",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#333333"
          },
          "name": "PaletteGrey800",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "800"
          },
          "path": ["palette", "grey", "800"]
        },
        "A40": {
          "value": "rgba(0, 0, 0, 0.04)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.04)"
          },
          "name": "PaletteGreyA40",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A40"
          },
          "path": ["palette", "grey", "A40"]
        },
        "A60": {
          "value": "rgba(0, 0, 0, 0.06)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.06)"
          },
          "name": "PaletteGreyA60",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A60"
          },
          "path": ["palette", "grey", "A60"]
        },
        "A100": {
          "value": "rgba(0, 0, 0, 0.1)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.1)"
          },
          "name": "PaletteGreyA100",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A100"
          },
          "path": ["palette", "grey", "A100"]
        },
        "A200": {
          "value": "rgba(0, 0, 0, 0.2)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.2)"
          },
          "name": "PaletteGreyA200",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A200"
          },
          "path": ["palette", "grey", "A200"]
        },
        "A300": {
          "value": "rgba(0, 0, 0, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.3)"
          },
          "name": "PaletteGreyA300",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A300"
          },
          "path": ["palette", "grey", "A300"]
        },
        "A500": {
          "value": "rgba(0, 0, 0, 0.5)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.5)"
          },
          "name": "PaletteGreyA500",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A500"
          },
          "path": ["palette", "grey", "A500"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast40",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "grey", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast60",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "grey", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast100",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "grey", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast200",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "grey", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast300",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "grey", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast400",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "grey", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast500",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "grey", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast560",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "grey", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast600",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "grey", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast700",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "grey", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast800",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "grey", "contrast", "800"]
          }
        }
      };
      var LightColorSchemeErrorDefault = "#E76E5C";
      var LightColorSchemeErrorPalette = {
        "40": {
          "value": "#FEF7F6",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FEF7F6"
          },
          "name": "PaletteRed40",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "40"
          },
          "path": ["palette", "red", "40"]
        },
        "60": {
          "value": "#FCEFEC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FCEFEC"
          },
          "name": "PaletteRed60",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "60"
          },
          "path": ["palette", "red", "60"]
        },
        "100": {
          "value": "#FADEDA",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FADEDA"
          },
          "name": "PaletteRed100",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "100"
          },
          "path": ["palette", "red", "100"]
        },
        "200": {
          "value": "#F4B7AE",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F4B7AE"
          },
          "name": "PaletteRed200",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "200"
          },
          "path": ["palette", "red", "200"]
        },
        "300": {
          "value": "#ED9284",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#ED9284"
          },
          "name": "PaletteRed300",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "300"
          },
          "path": ["palette", "red", "300"]
        },
        "400": {
          "value": "#E76E5C",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E76E5C"
          },
          "name": "PaletteRed400",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "400"
          },
          "path": ["palette", "red", "400"]
        },
        "500": {
          "value": "#E04D36",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E04D36"
          },
          "name": "PaletteRed500",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "500"
          },
          "path": ["palette", "red", "500"]
        },
        "560": {
          "value": "#C43E29",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#C43E29"
          },
          "name": "PaletteRed560",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "560"
          },
          "path": ["palette", "red", "560"]
        },
        "600": {
          "value": "#B23522",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B23522"
          },
          "name": "PaletteRed600",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "600"
          },
          "path": ["palette", "red", "600"]
        },
        "700": {
          "value": "#832112",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#832112"
          },
          "name": "PaletteRed700",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "700"
          },
          "path": ["palette", "red", "700"]
        },
        "800": {
          "value": "#541208",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#541208"
          },
          "name": "PaletteRed800",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "800"
          },
          "path": ["palette", "red", "800"]
        },
        "A100": {
          "value": "rgba(224, 79, 56, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(224, 79, 56, 0.15)"
          },
          "name": "PaletteRedA100",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "A100"
          },
          "path": ["palette", "red", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast40",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "red", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast60",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "red", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast100",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "red", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast200",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "red", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast300",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "red", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast400",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "red", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast500",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "red", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast560",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "red", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast600",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "red", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast700",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "red", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast800",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "red", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrastA100",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "red", "contrast", "A100"]
          }
        }
      };
      var LightColorSchemeInfoDefault = "#AAD1EC";
      var LightColorSchemeInfoPalette = {
        "40": {
          "value": "#F5FAFD",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5FAFD"
          },
          "name": "PaletteBlue40",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "40"
          },
          "path": ["palette", "blue", "40"]
        },
        "60": {
          "value": "#EBF4FB",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EBF4FB"
          },
          "name": "PaletteBlue60",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "60"
          },
          "path": ["palette", "blue", "60"]
        },
        "100": {
          "value": "#D8EAF7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D8EAF7"
          },
          "name": "PaletteBlue100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "100"
          },
          "path": ["palette", "blue", "100"]
        },
        "200": {
          "value": "#AAD1EC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AAD1EC"
          },
          "name": "PaletteBlue200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "200"
          },
          "path": ["palette", "blue", "200"]
        },
        "300": {
          "value": "#7FBAE1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7FBAE1"
          },
          "name": "PaletteBlue300",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "300"
          },
          "path": ["palette", "blue", "300"]
        },
        "400": {
          "value": "#57A4D7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#57A4D7"
          },
          "name": "PaletteBlue400",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "400"
          },
          "path": ["palette", "blue", "400"]
        },
        "500": {
          "value": "#338FCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#338FCC"
          },
          "name": "PaletteBlue500",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "500"
          },
          "path": ["palette", "blue", "500"]
        },
        "560": {
          "value": "#277BB3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#277BB3"
          },
          "name": "PaletteBlue560",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "560"
          },
          "path": ["palette", "blue", "560"]
        },
        "600": {
          "value": "#206EA2",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#206EA2"
          },
          "name": "PaletteBlue600",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "600"
          },
          "path": ["palette", "blue", "600"]
        },
        "700": {
          "value": "#114E77",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#114E77"
          },
          "name": "PaletteBlue700",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "700"
          },
          "path": ["palette", "blue", "700"]
        },
        "800": {
          "value": "#07314D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#07314D"
          },
          "name": "PaletteBlue800",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "800"
          },
          "path": ["palette", "blue", "800"]
        },
        "A100": {
          "value": "rgba(0, 153, 255, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.15)"
          },
          "name": "PaletteBlueA100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A100"
          },
          "path": ["palette", "blue", "A100"]
        },
        "A200": {
          "value": "rgba(0, 153, 255, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.3)"
          },
          "name": "PaletteBlueA200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A200"
          },
          "path": ["palette", "blue", "A200"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast40",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "blue", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast60",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "blue", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "blue", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "blue", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast300",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "blue", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast400",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "blue", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast500",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "blue", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast560",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "blue", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast600",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "blue", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast700",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "blue", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast800",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "blue", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrastA100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "blue", "contrast", "A100"]
          },
          "A200": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrastA200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A200"
            },
            "path": ["palette", "blue", "contrast", "A200"]
          }
        }
      };
      var LightColorSchemeSuccessDefault = "#B4DEA4";
      var LightColorSchemeSuccessPalette = {
        "40": {
          "value": "#F6FBF4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F6FBF4"
          },
          "name": "PaletteGreen40",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "40"
          },
          "path": ["palette", "green", "40"]
        },
        "60": {
          "value": "#EDF8E9",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EDF8E9"
          },
          "name": "PaletteGreen60",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "60"
          },
          "path": ["palette", "green", "60"]
        },
        "100": {
          "value": "#DCF1D4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#DCF1D4"
          },
          "name": "PaletteGreen100",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "100"
          },
          "path": ["palette", "green", "100"]
        },
        "200": {
          "value": "#B4DEA4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B4DEA4"
          },
          "name": "PaletteGreen200",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "200"
          },
          "path": ["palette", "green", "200"]
        },
        "300": {
          "value": "#8FCC79",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#8FCC79"
          },
          "name": "PaletteGreen300",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "300"
          },
          "path": ["palette", "green", "300"]
        },
        "400": {
          "value": "#6FBA53",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#6FBA53"
          },
          "name": "PaletteGreen400",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "400"
          },
          "path": ["palette", "green", "400"]
        },
        "500": {
          "value": "#52A832",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#52A832"
          },
          "name": "PaletteGreen500",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "500"
          },
          "path": ["palette", "green", "500"]
        },
        "560": {
          "value": "#449327",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#449327"
          },
          "name": "PaletteGreen560",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "560"
          },
          "path": ["palette", "green", "560"]
        },
        "600": {
          "value": "#3B8520",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#3B8520"
          },
          "name": "PaletteGreen600",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "600"
          },
          "path": ["palette", "green", "600"]
        },
        "700": {
          "value": "#276211",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#276211"
          },
          "name": "PaletteGreen700",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "700"
          },
          "path": ["palette", "green", "700"]
        },
        "800": {
          "value": "#163F07",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#163F07"
          },
          "name": "PaletteGreen800",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "800"
          },
          "path": ["palette", "green", "800"]
        },
        "A100": {
          "value": "rgba(68, 255, 0, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(68, 255, 0, 0.15)"
          },
          "name": "PaletteGreenA100",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "A100"
          },
          "path": ["palette", "green", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast40",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "green", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast60",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "green", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast100",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "green", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast200",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "green", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast300",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "green", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast400",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "green", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast500",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "green", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast560",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "green", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast600",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "green", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast700",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "green", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast800",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "green", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrastA100",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "green", "contrast", "A100"]
          }
        }
      };
      var LightColorSchemeWarningDefault = "#F0D49B";
      var LightColorSchemeWarningPalette = {
        "40": {
          "value": "#FDFAF3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FDFAF3"
          },
          "name": "PaletteYellow40",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "40"
          },
          "path": ["palette", "yellow", "40"]
        },
        "60": {
          "value": "#FCF5E8",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FCF5E8"
          },
          "name": "PaletteYellow60",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "60"
          },
          "path": ["palette", "yellow", "60"]
        },
        "100": {
          "value": "#F8EBD1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F8EBD1"
          },
          "name": "PaletteYellow100",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "100"
          },
          "path": ["palette", "yellow", "100"]
        },
        "200": {
          "value": "#F0D49B",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F0D49B"
          },
          "name": "PaletteYellow200",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "200"
          },
          "path": ["palette", "yellow", "200"]
        },
        "300": {
          "value": "#E7BD68",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E7BD68"
          },
          "name": "PaletteYellow300",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "300"
          },
          "path": ["palette", "yellow", "300"]
        },
        "400": {
          "value": "#DFA739",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#DFA739"
          },
          "name": "PaletteYellow400",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "400"
          },
          "path": ["palette", "yellow", "400"]
        },
        "500": {
          "value": "#D6930D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D6930D"
          },
          "name": "PaletteYellow500",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "500"
          },
          "path": ["palette", "yellow", "500"]
        },
        "560": {
          "value": "#BB800A",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#BB800A"
          },
          "name": "PaletteYellow560",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "560"
          },
          "path": ["palette", "yellow", "560"]
        },
        "600": {
          "value": "#AA7408",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AA7408"
          },
          "name": "PaletteYellow600",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "600"
          },
          "path": ["palette", "yellow", "600"]
        },
        "700": {
          "value": "#7D5504",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7D5504"
          },
          "name": "PaletteYellow700",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "700"
          },
          "path": ["palette", "yellow", "700"]
        },
        "800": {
          "value": "#503602",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#503602"
          },
          "name": "PaletteYellow800",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "800"
          },
          "path": ["palette", "yellow", "800"]
        },
        "A100": {
          "value": "rgba(255, 170, 0, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(255, 170, 0, 0.15)"
          },
          "name": "PaletteYellowA100",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "A100"
          },
          "path": ["palette", "yellow", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast40",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "yellow", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast60",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "yellow", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast100",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "yellow", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast200",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "yellow", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast300",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "yellow", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast400",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "yellow", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast500",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "yellow", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast560",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "yellow", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast600",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "yellow", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast700",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "yellow", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast800",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "yellow", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrastA100",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "yellow", "contrast", "A100"]
          }
        }
      };
      var LightColorSchemeForegroundText = "#4D4D4D";
      var LightColorSchemeForegroundTextLessContrast = "#999999";
      var LightColorSchemeForegroundTextDisabled = "#B3B3B3";
      var LightColorSchemeForegroundDivider = "#E6E6E6";
      var LightColorSchemeForegroundBorder = "#B3B3B3";
      var LightColorSchemeForegroundIcon = "#999999";
      var LightColorSchemeBackgroundBackground = "white";
      var LightColorSchemeBackgroundBackgroundDisabled = "#F0F0F0";
      var LightColorSchemeBackgroundOverlayHover = "rgba(black, 0.05)";
      var LightColorSchemeBackgroundOverlayActive = "rgba(black, 0.1)";
      var LightColorSchemeBackgroundOverlayDisabled = "rgba(white, 0.3)";
      var LightColorSchemeStatesFocusedColor = "#338FCC";
      var LightColorSchemeStatesSelectedColor = "#D8EAF7";
      var LightColorSchemeStatesPressedShadow = "inset 0 1px 2px 0 rgba(black, 0.2)";
      var LightColorSchemeStatesDisabledOpacity = 0.3;
      var DarkColorSchemePrimaryDefault = "#57A4D7";
      var DarkColorSchemePrimaryPalette = {
        "40": {
          "value": "#F5FAFD",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5FAFD"
          },
          "name": "PaletteBlue40",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "40"
          },
          "path": ["palette", "blue", "40"]
        },
        "60": {
          "value": "#EBF4FB",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EBF4FB"
          },
          "name": "PaletteBlue60",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "60"
          },
          "path": ["palette", "blue", "60"]
        },
        "100": {
          "value": "#D8EAF7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D8EAF7"
          },
          "name": "PaletteBlue100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "100"
          },
          "path": ["palette", "blue", "100"]
        },
        "200": {
          "value": "#AAD1EC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AAD1EC"
          },
          "name": "PaletteBlue200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "200"
          },
          "path": ["palette", "blue", "200"]
        },
        "300": {
          "value": "#7FBAE1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7FBAE1"
          },
          "name": "PaletteBlue300",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "300"
          },
          "path": ["palette", "blue", "300"]
        },
        "400": {
          "value": "#57A4D7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#57A4D7"
          },
          "name": "PaletteBlue400",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "400"
          },
          "path": ["palette", "blue", "400"]
        },
        "500": {
          "value": "#338FCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#338FCC"
          },
          "name": "PaletteBlue500",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "500"
          },
          "path": ["palette", "blue", "500"]
        },
        "560": {
          "value": "#277BB3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#277BB3"
          },
          "name": "PaletteBlue560",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "560"
          },
          "path": ["palette", "blue", "560"]
        },
        "600": {
          "value": "#206EA2",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#206EA2"
          },
          "name": "PaletteBlue600",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "600"
          },
          "path": ["palette", "blue", "600"]
        },
        "700": {
          "value": "#114E77",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#114E77"
          },
          "name": "PaletteBlue700",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "700"
          },
          "path": ["palette", "blue", "700"]
        },
        "800": {
          "value": "#07314D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#07314D"
          },
          "name": "PaletteBlue800",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "800"
          },
          "path": ["palette", "blue", "800"]
        },
        "A100": {
          "value": "rgba(0, 153, 255, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.15)"
          },
          "name": "PaletteBlueA100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A100"
          },
          "path": ["palette", "blue", "A100"]
        },
        "A200": {
          "value": "rgba(0, 153, 255, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.3)"
          },
          "name": "PaletteBlueA200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A200"
          },
          "path": ["palette", "blue", "A200"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast40",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "blue", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast60",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "blue", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "blue", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "blue", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast300",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "blue", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast400",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "blue", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast500",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "blue", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast560",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "blue", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast600",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "blue", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast700",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "blue", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast800",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "blue", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrastA100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "blue", "contrast", "A100"]
          },
          "A200": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrastA200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A200"
            },
            "path": ["palette", "blue", "contrast", "A200"]
          }
        }
      };
      var DarkColorSchemeSecondDefault = "#999999";
      var DarkColorSchemeSecondPalette = {
        "40": {
          "value": "#F5F5F5",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5F5F5"
          },
          "name": "PaletteGrey40",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "40"
          },
          "path": ["palette", "grey", "40"]
        },
        "60": {
          "value": "#F0F0F0",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F0F0F0"
          },
          "name": "PaletteGrey60",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "60"
          },
          "path": ["palette", "grey", "60"]
        },
        "100": {
          "value": "#E6E6E6",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E6E6E6"
          },
          "name": "PaletteGrey100",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "100"
          },
          "path": ["palette", "grey", "100"]
        },
        "200": {
          "value": "#CCCCCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#CCCCCC"
          },
          "name": "PaletteGrey200",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "200"
          },
          "path": ["palette", "grey", "200"]
        },
        "300": {
          "value": "#B3B3B3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B3B3B3"
          },
          "name": "PaletteGrey300",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "300"
          },
          "path": ["palette", "grey", "300"]
        },
        "400": {
          "value": "#999999",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#999999"
          },
          "name": "PaletteGrey400",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "400"
          },
          "path": ["palette", "grey", "400"]
        },
        "500": {
          "value": "#808080",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#808080"
          },
          "name": "PaletteGrey500",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "500"
          },
          "path": ["palette", "grey", "500"]
        },
        "560": {
          "value": "#707070",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#707070"
          },
          "name": "PaletteGrey560",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "560"
          },
          "path": ["palette", "grey", "560"]
        },
        "600": {
          "value": "#666666",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#666666"
          },
          "name": "PaletteGrey600",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "600"
          },
          "path": ["palette", "grey", "600"]
        },
        "700": {
          "value": "#4D4D4D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#4D4D4D"
          },
          "name": "PaletteGrey700",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "700"
          },
          "path": ["palette", "grey", "700"]
        },
        "800": {
          "value": "#333333",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#333333"
          },
          "name": "PaletteGrey800",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "800"
          },
          "path": ["palette", "grey", "800"]
        },
        "A40": {
          "value": "rgba(0, 0, 0, 0.04)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.04)"
          },
          "name": "PaletteGreyA40",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A40"
          },
          "path": ["palette", "grey", "A40"]
        },
        "A60": {
          "value": "rgba(0, 0, 0, 0.06)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.06)"
          },
          "name": "PaletteGreyA60",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A60"
          },
          "path": ["palette", "grey", "A60"]
        },
        "A100": {
          "value": "rgba(0, 0, 0, 0.1)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.1)"
          },
          "name": "PaletteGreyA100",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A100"
          },
          "path": ["palette", "grey", "A100"]
        },
        "A200": {
          "value": "rgba(0, 0, 0, 0.2)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.2)"
          },
          "name": "PaletteGreyA200",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A200"
          },
          "path": ["palette", "grey", "A200"]
        },
        "A300": {
          "value": "rgba(0, 0, 0, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.3)"
          },
          "name": "PaletteGreyA300",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A300"
          },
          "path": ["palette", "grey", "A300"]
        },
        "A500": {
          "value": "rgba(0, 0, 0, 0.5)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.5)"
          },
          "name": "PaletteGreyA500",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A500"
          },
          "path": ["palette", "grey", "A500"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast40",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "grey", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast60",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "grey", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast100",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "grey", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast200",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "grey", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast300",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "grey", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast400",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "grey", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast500",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "grey", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast560",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "grey", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast600",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "grey", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast700",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "grey", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast800",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "grey", "contrast", "800"]
          }
        }
      };
      var DarkColorSchemeErrorDefault = "#E76E5C";
      var DarkColorSchemeErrorPalette = {
        "40": {
          "value": "#FEF7F6",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FEF7F6"
          },
          "name": "PaletteRed40",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "40"
          },
          "path": ["palette", "red", "40"]
        },
        "60": {
          "value": "#FCEFEC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FCEFEC"
          },
          "name": "PaletteRed60",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "60"
          },
          "path": ["palette", "red", "60"]
        },
        "100": {
          "value": "#FADEDA",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FADEDA"
          },
          "name": "PaletteRed100",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "100"
          },
          "path": ["palette", "red", "100"]
        },
        "200": {
          "value": "#F4B7AE",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F4B7AE"
          },
          "name": "PaletteRed200",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "200"
          },
          "path": ["palette", "red", "200"]
        },
        "300": {
          "value": "#ED9284",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#ED9284"
          },
          "name": "PaletteRed300",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "300"
          },
          "path": ["palette", "red", "300"]
        },
        "400": {
          "value": "#E76E5C",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E76E5C"
          },
          "name": "PaletteRed400",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "400"
          },
          "path": ["palette", "red", "400"]
        },
        "500": {
          "value": "#E04D36",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E04D36"
          },
          "name": "PaletteRed500",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "500"
          },
          "path": ["palette", "red", "500"]
        },
        "560": {
          "value": "#C43E29",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#C43E29"
          },
          "name": "PaletteRed560",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "560"
          },
          "path": ["palette", "red", "560"]
        },
        "600": {
          "value": "#B23522",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B23522"
          },
          "name": "PaletteRed600",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "600"
          },
          "path": ["palette", "red", "600"]
        },
        "700": {
          "value": "#832112",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#832112"
          },
          "name": "PaletteRed700",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "700"
          },
          "path": ["palette", "red", "700"]
        },
        "800": {
          "value": "#541208",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#541208"
          },
          "name": "PaletteRed800",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "800"
          },
          "path": ["palette", "red", "800"]
        },
        "A100": {
          "value": "rgba(224, 79, 56, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(224, 79, 56, 0.15)"
          },
          "name": "PaletteRedA100",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "A100"
          },
          "path": ["palette", "red", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast40",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "red", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast60",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "red", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast100",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "red", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast200",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "red", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast300",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "red", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast400",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "red", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast500",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "red", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast560",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "red", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast600",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "red", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast700",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "red", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast800",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "red", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrastA100",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "red", "contrast", "A100"]
          }
        }
      };
      var DarkColorSchemeInfoDefault = "#57A4D7";
      var DarkColorSchemeInfoPalette = {
        "40": {
          "value": "#F5FAFD",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5FAFD"
          },
          "name": "PaletteBlue40",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "40"
          },
          "path": ["palette", "blue", "40"]
        },
        "60": {
          "value": "#EBF4FB",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EBF4FB"
          },
          "name": "PaletteBlue60",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "60"
          },
          "path": ["palette", "blue", "60"]
        },
        "100": {
          "value": "#D8EAF7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D8EAF7"
          },
          "name": "PaletteBlue100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "100"
          },
          "path": ["palette", "blue", "100"]
        },
        "200": {
          "value": "#AAD1EC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AAD1EC"
          },
          "name": "PaletteBlue200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "200"
          },
          "path": ["palette", "blue", "200"]
        },
        "300": {
          "value": "#7FBAE1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7FBAE1"
          },
          "name": "PaletteBlue300",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "300"
          },
          "path": ["palette", "blue", "300"]
        },
        "400": {
          "value": "#57A4D7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#57A4D7"
          },
          "name": "PaletteBlue400",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "400"
          },
          "path": ["palette", "blue", "400"]
        },
        "500": {
          "value": "#338FCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#338FCC"
          },
          "name": "PaletteBlue500",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "500"
          },
          "path": ["palette", "blue", "500"]
        },
        "560": {
          "value": "#277BB3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#277BB3"
          },
          "name": "PaletteBlue560",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "560"
          },
          "path": ["palette", "blue", "560"]
        },
        "600": {
          "value": "#206EA2",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#206EA2"
          },
          "name": "PaletteBlue600",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "600"
          },
          "path": ["palette", "blue", "600"]
        },
        "700": {
          "value": "#114E77",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#114E77"
          },
          "name": "PaletteBlue700",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "700"
          },
          "path": ["palette", "blue", "700"]
        },
        "800": {
          "value": "#07314D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#07314D"
          },
          "name": "PaletteBlue800",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "800"
          },
          "path": ["palette", "blue", "800"]
        },
        "A100": {
          "value": "rgba(0, 153, 255, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.15)"
          },
          "name": "PaletteBlueA100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A100"
          },
          "path": ["palette", "blue", "A100"]
        },
        "A200": {
          "value": "rgba(0, 153, 255, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.3)"
          },
          "name": "PaletteBlueA200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A200"
          },
          "path": ["palette", "blue", "A200"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast40",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "blue", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast60",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "blue", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "blue", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "blue", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast300",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "blue", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast400",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "blue", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast500",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "blue", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast560",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "blue", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast600",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "blue", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast700",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "blue", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast800",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "blue", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrastA100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "blue", "contrast", "A100"]
          },
          "A200": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrastA200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A200"
            },
            "path": ["palette", "blue", "contrast", "A200"]
          }
        }
      };
      var DarkColorSchemeSuccessDefault = "#6FBA53";
      var DarkColorSchemeSuccessPalette = {
        "40": {
          "value": "#F6FBF4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F6FBF4"
          },
          "name": "PaletteGreen40",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "40"
          },
          "path": ["palette", "green", "40"]
        },
        "60": {
          "value": "#EDF8E9",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EDF8E9"
          },
          "name": "PaletteGreen60",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "60"
          },
          "path": ["palette", "green", "60"]
        },
        "100": {
          "value": "#DCF1D4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#DCF1D4"
          },
          "name": "PaletteGreen100",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "100"
          },
          "path": ["palette", "green", "100"]
        },
        "200": {
          "value": "#B4DEA4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B4DEA4"
          },
          "name": "PaletteGreen200",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "200"
          },
          "path": ["palette", "green", "200"]
        },
        "300": {
          "value": "#8FCC79",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#8FCC79"
          },
          "name": "PaletteGreen300",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "300"
          },
          "path": ["palette", "green", "300"]
        },
        "400": {
          "value": "#6FBA53",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#6FBA53"
          },
          "name": "PaletteGreen400",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "400"
          },
          "path": ["palette", "green", "400"]
        },
        "500": {
          "value": "#52A832",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#52A832"
          },
          "name": "PaletteGreen500",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "500"
          },
          "path": ["palette", "green", "500"]
        },
        "560": {
          "value": "#449327",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#449327"
          },
          "name": "PaletteGreen560",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "560"
          },
          "path": ["palette", "green", "560"]
        },
        "600": {
          "value": "#3B8520",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#3B8520"
          },
          "name": "PaletteGreen600",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "600"
          },
          "path": ["palette", "green", "600"]
        },
        "700": {
          "value": "#276211",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#276211"
          },
          "name": "PaletteGreen700",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "700"
          },
          "path": ["palette", "green", "700"]
        },
        "800": {
          "value": "#163F07",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#163F07"
          },
          "name": "PaletteGreen800",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "800"
          },
          "path": ["palette", "green", "800"]
        },
        "A100": {
          "value": "rgba(68, 255, 0, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(68, 255, 0, 0.15)"
          },
          "name": "PaletteGreenA100",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "A100"
          },
          "path": ["palette", "green", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast40",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "green", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast60",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "green", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast100",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "green", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast200",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "green", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast300",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "green", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast400",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "green", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast500",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "green", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast560",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "green", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast600",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "green", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast700",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "green", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast800",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "green", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrastA100",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "green", "contrast", "A100"]
          }
        }
      };
      var DarkColorSchemeWarningDefault = "#DFA739";
      var DarkColorSchemeWarningPalette = {
        "40": {
          "value": "#FDFAF3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FDFAF3"
          },
          "name": "PaletteYellow40",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "40"
          },
          "path": ["palette", "yellow", "40"]
        },
        "60": {
          "value": "#FCF5E8",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FCF5E8"
          },
          "name": "PaletteYellow60",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "60"
          },
          "path": ["palette", "yellow", "60"]
        },
        "100": {
          "value": "#F8EBD1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F8EBD1"
          },
          "name": "PaletteYellow100",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "100"
          },
          "path": ["palette", "yellow", "100"]
        },
        "200": {
          "value": "#F0D49B",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F0D49B"
          },
          "name": "PaletteYellow200",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "200"
          },
          "path": ["palette", "yellow", "200"]
        },
        "300": {
          "value": "#E7BD68",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E7BD68"
          },
          "name": "PaletteYellow300",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "300"
          },
          "path": ["palette", "yellow", "300"]
        },
        "400": {
          "value": "#DFA739",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#DFA739"
          },
          "name": "PaletteYellow400",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "400"
          },
          "path": ["palette", "yellow", "400"]
        },
        "500": {
          "value": "#D6930D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D6930D"
          },
          "name": "PaletteYellow500",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "500"
          },
          "path": ["palette", "yellow", "500"]
        },
        "560": {
          "value": "#BB800A",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#BB800A"
          },
          "name": "PaletteYellow560",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "560"
          },
          "path": ["palette", "yellow", "560"]
        },
        "600": {
          "value": "#AA7408",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AA7408"
          },
          "name": "PaletteYellow600",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "600"
          },
          "path": ["palette", "yellow", "600"]
        },
        "700": {
          "value": "#7D5504",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7D5504"
          },
          "name": "PaletteYellow700",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "700"
          },
          "path": ["palette", "yellow", "700"]
        },
        "800": {
          "value": "#503602",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#503602"
          },
          "name": "PaletteYellow800",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "800"
          },
          "path": ["palette", "yellow", "800"]
        },
        "A100": {
          "value": "rgba(255, 170, 0, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(255, 170, 0, 0.15)"
          },
          "name": "PaletteYellowA100",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "A100"
          },
          "path": ["palette", "yellow", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast40",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "yellow", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast60",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "yellow", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast100",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "yellow", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast200",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "yellow", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast300",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "yellow", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast400",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "yellow", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast500",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "yellow", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast560",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "yellow", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast600",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "yellow", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast700",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "yellow", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast800",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "yellow", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrastA100",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "yellow", "contrast", "A100"]
          }
        }
      };
      var DarkColorSchemeForegroundText = "#F0F0F0";
      var DarkColorSchemeForegroundTextLessContrast = "#999999";
      var DarkColorSchemeForegroundTextDisabled = "#999999";
      var DarkColorSchemeForegroundDivider = "#666666";
      var DarkColorSchemeForegroundBorder = "#808080";
      var DarkColorSchemeForegroundIcon = "#999999";
      var DarkColorSchemeBackgroundBackground = "#333333";
      var DarkColorSchemeBackgroundBackgroundDisabled = "#666666";
      var DarkColorSchemeBackgroundOverlayHover = "rgba(black, 0.05)";
      var DarkColorSchemeBackgroundOverlayActive = "rgba(black, 0.1)";
      var DarkColorSchemeBackgroundOverlayDisabled = "rgba(white, 0.2)";
      var DarkColorSchemeStatesFocusedColor = "#57A4D7";
      var DarkColorSchemeStatesSelectedColor = "#114E77";
      var DarkColorSchemeStatesPressedShadow = "inset 1px 2px 2px 0 rgba(black, 0.2)";
      var DarkColorSchemeStatesDisabledOpacity = 0.3;
      var FontFamilyBase = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var FontFamilyMonospace = "'Roboto Mono', 'Consolas', 'Menlo', 'Monaco', monospace";
      var PaletteBlue40 = "#F5FAFD";
      var PaletteBlue60 = "#EBF4FB";
      var PaletteBlue100 = "#D8EAF7";
      var PaletteBlue200 = "#AAD1EC";
      var PaletteBlue300 = "#7FBAE1";
      var PaletteBlue400 = "#57A4D7";
      var PaletteBlue500 = "#338FCC";
      var PaletteBlue560 = "#277BB3";
      var PaletteBlue600 = "#206EA2";
      var PaletteBlue700 = "#114E77";
      var PaletteBlue800 = "#07314D";
      var PaletteBlueA100 = "rgba(0, 153, 255, 0.15)";
      var PaletteBlueA200 = "rgba(0, 153, 255, 0.3)";
      var PaletteBlueContrast40 = "#4D4D4D";
      var PaletteBlueContrast60 = "#4D4D4D";
      var PaletteBlueContrast100 = "#4D4D4D";
      var PaletteBlueContrast200 = "#4D4D4D";
      var PaletteBlueContrast300 = "#4D4D4D";
      var PaletteBlueContrast400 = "white";
      var PaletteBlueContrast500 = "white";
      var PaletteBlueContrast560 = "white";
      var PaletteBlueContrast600 = "white";
      var PaletteBlueContrast700 = "white";
      var PaletteBlueContrast800 = "white";
      var PaletteBlueContrastA100 = "#4D4D4D";
      var PaletteBlueContrastA200 = "white";
      var PaletteGreen40 = "#F6FBF4";
      var PaletteGreen60 = "#EDF8E9";
      var PaletteGreen100 = "#DCF1D4";
      var PaletteGreen200 = "#B4DEA4";
      var PaletteGreen300 = "#8FCC79";
      var PaletteGreen400 = "#6FBA53";
      var PaletteGreen500 = "#52A832";
      var PaletteGreen560 = "#449327";
      var PaletteGreen600 = "#3B8520";
      var PaletteGreen700 = "#276211";
      var PaletteGreen800 = "#163F07";
      var PaletteGreenA100 = "rgba(68, 255, 0, 0.15)";
      var PaletteGreenContrast40 = "#4D4D4D";
      var PaletteGreenContrast60 = "#4D4D4D";
      var PaletteGreenContrast100 = "#4D4D4D";
      var PaletteGreenContrast200 = "#4D4D4D";
      var PaletteGreenContrast300 = "#4D4D4D";
      var PaletteGreenContrast400 = "white";
      var PaletteGreenContrast500 = "white";
      var PaletteGreenContrast560 = "white";
      var PaletteGreenContrast600 = "white";
      var PaletteGreenContrast700 = "white";
      var PaletteGreenContrast800 = "white";
      var PaletteGreenContrastA100 = "#4D4D4D";
      var PaletteRed40 = "#FEF7F6";
      var PaletteRed60 = "#FCEFEC";
      var PaletteRed100 = "#FADEDA";
      var PaletteRed200 = "#F4B7AE";
      var PaletteRed300 = "#ED9284";
      var PaletteRed400 = "#E76E5C";
      var PaletteRed500 = "#E04D36";
      var PaletteRed560 = "#C43E29";
      var PaletteRed600 = "#B23522";
      var PaletteRed700 = "#832112";
      var PaletteRed800 = "#541208";
      var PaletteRedA100 = "rgba(224, 79, 56, 0.15)";
      var PaletteRedContrast40 = "#4D4D4D";
      var PaletteRedContrast60 = "#4D4D4D";
      var PaletteRedContrast100 = "#4D4D4D";
      var PaletteRedContrast200 = "#4D4D4D";
      var PaletteRedContrast300 = "#4D4D4D";
      var PaletteRedContrast400 = "white";
      var PaletteRedContrast500 = "white";
      var PaletteRedContrast560 = "white";
      var PaletteRedContrast600 = "white";
      var PaletteRedContrast700 = "white";
      var PaletteRedContrast800 = "white";
      var PaletteRedContrastA100 = "#4D4D4D";
      var PaletteGrey40 = "#F5F5F5";
      var PaletteGrey60 = "#F0F0F0";
      var PaletteGrey100 = "#E6E6E6";
      var PaletteGrey200 = "#CCCCCC";
      var PaletteGrey300 = "#B3B3B3";
      var PaletteGrey400 = "#999999";
      var PaletteGrey500 = "#808080";
      var PaletteGrey560 = "#707070";
      var PaletteGrey600 = "#666666";
      var PaletteGrey700 = "#4D4D4D";
      var PaletteGrey800 = "#333333";
      var PaletteGreyA40 = "rgba(0, 0, 0, 0.04)";
      var PaletteGreyA60 = "rgba(0, 0, 0, 0.06)";
      var PaletteGreyA100 = "rgba(0, 0, 0, 0.1)";
      var PaletteGreyA200 = "rgba(0, 0, 0, 0.2)";
      var PaletteGreyA300 = "rgba(0, 0, 0, 0.3)";
      var PaletteGreyA500 = "rgba(0, 0, 0, 0.5)";
      var PaletteGreyContrast40 = "#4D4D4D";
      var PaletteGreyContrast60 = "#4D4D4D";
      var PaletteGreyContrast100 = "#4D4D4D";
      var PaletteGreyContrast200 = "#4D4D4D";
      var PaletteGreyContrast300 = "#4D4D4D";
      var PaletteGreyContrast400 = "white";
      var PaletteGreyContrast500 = "white";
      var PaletteGreyContrast560 = "white";
      var PaletteGreyContrast600 = "white";
      var PaletteGreyContrast700 = "white";
      var PaletteGreyContrast800 = "white";
      var PaletteYellow40 = "#FDFAF3";
      var PaletteYellow60 = "#FCF5E8";
      var PaletteYellow100 = "#F8EBD1";
      var PaletteYellow200 = "#F0D49B";
      var PaletteYellow300 = "#E7BD68";
      var PaletteYellow400 = "#DFA739";
      var PaletteYellow500 = "#D6930D";
      var PaletteYellow560 = "#BB800A";
      var PaletteYellow600 = "#AA7408";
      var PaletteYellow700 = "#7D5504";
      var PaletteYellow800 = "#503602";
      var PaletteYellowA100 = "rgba(255, 170, 0, 0.15)";
      var PaletteYellowContrast40 = "#4D4D4D";
      var PaletteYellowContrast60 = "#4D4D4D";
      var PaletteYellowContrast100 = "#4D4D4D";
      var PaletteYellowContrast200 = "#4D4D4D";
      var PaletteYellowContrast300 = "#4D4D4D";
      var PaletteYellowContrast400 = "white";
      var PaletteYellowContrast500 = "white";
      var PaletteYellowContrast560 = "white";
      var PaletteYellowContrast600 = "white";
      var PaletteYellowContrast700 = "white";
      var PaletteYellowContrast800 = "white";
      var PaletteYellowContrastA100 = "#4D4D4D";
      var ColorBluePalette = {
        "40": {
          "value": "#F5FAFD",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5FAFD"
          },
          "name": "PaletteBlue40",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "40"
          },
          "path": ["palette", "blue", "40"]
        },
        "60": {
          "value": "#EBF4FB",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EBF4FB"
          },
          "name": "PaletteBlue60",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "60"
          },
          "path": ["palette", "blue", "60"]
        },
        "100": {
          "value": "#D8EAF7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D8EAF7"
          },
          "name": "PaletteBlue100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "100"
          },
          "path": ["palette", "blue", "100"]
        },
        "200": {
          "value": "#AAD1EC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AAD1EC"
          },
          "name": "PaletteBlue200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "200"
          },
          "path": ["palette", "blue", "200"]
        },
        "300": {
          "value": "#7FBAE1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7FBAE1"
          },
          "name": "PaletteBlue300",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "300"
          },
          "path": ["palette", "blue", "300"]
        },
        "400": {
          "value": "#57A4D7",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#57A4D7"
          },
          "name": "PaletteBlue400",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "400"
          },
          "path": ["palette", "blue", "400"]
        },
        "500": {
          "value": "#338FCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#338FCC"
          },
          "name": "PaletteBlue500",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "500"
          },
          "path": ["palette", "blue", "500"]
        },
        "560": {
          "value": "#277BB3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#277BB3"
          },
          "name": "PaletteBlue560",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "560"
          },
          "path": ["palette", "blue", "560"]
        },
        "600": {
          "value": "#206EA2",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#206EA2"
          },
          "name": "PaletteBlue600",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "600"
          },
          "path": ["palette", "blue", "600"]
        },
        "700": {
          "value": "#114E77",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#114E77"
          },
          "name": "PaletteBlue700",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "700"
          },
          "path": ["palette", "blue", "700"]
        },
        "800": {
          "value": "#07314D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#07314D"
          },
          "name": "PaletteBlue800",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "800"
          },
          "path": ["palette", "blue", "800"]
        },
        "A100": {
          "value": "rgba(0, 153, 255, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.15)"
          },
          "name": "PaletteBlueA100",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A100"
          },
          "path": ["palette", "blue", "A100"]
        },
        "A200": {
          "value": "rgba(0, 153, 255, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 153, 255, 0.3)"
          },
          "name": "PaletteBlueA200",
          "attributes": {
            "category": "palette",
            "type": "blue",
            "item": "A200"
          },
          "path": ["palette", "blue", "A200"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast40",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "blue", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast60",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "blue", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "blue", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "blue", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrast300",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "blue", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast400",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "blue", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast500",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "blue", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast560",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "blue", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast600",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "blue", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast700",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "blue", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrast800",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "blue", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteBlueContrastA100",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "blue", "contrast", "A100"]
          },
          "A200": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteBlueContrastA200",
            "attributes": {
              "category": "palette",
              "type": "blue",
              "item": "contrast",
              "subitem": "A200"
            },
            "path": ["palette", "blue", "contrast", "A200"]
          }
        }
      };
      var ColorGreenPalette = {
        "40": {
          "value": "#F6FBF4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F6FBF4"
          },
          "name": "PaletteGreen40",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "40"
          },
          "path": ["palette", "green", "40"]
        },
        "60": {
          "value": "#EDF8E9",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#EDF8E9"
          },
          "name": "PaletteGreen60",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "60"
          },
          "path": ["palette", "green", "60"]
        },
        "100": {
          "value": "#DCF1D4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#DCF1D4"
          },
          "name": "PaletteGreen100",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "100"
          },
          "path": ["palette", "green", "100"]
        },
        "200": {
          "value": "#B4DEA4",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B4DEA4"
          },
          "name": "PaletteGreen200",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "200"
          },
          "path": ["palette", "green", "200"]
        },
        "300": {
          "value": "#8FCC79",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#8FCC79"
          },
          "name": "PaletteGreen300",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "300"
          },
          "path": ["palette", "green", "300"]
        },
        "400": {
          "value": "#6FBA53",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#6FBA53"
          },
          "name": "PaletteGreen400",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "400"
          },
          "path": ["palette", "green", "400"]
        },
        "500": {
          "value": "#52A832",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#52A832"
          },
          "name": "PaletteGreen500",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "500"
          },
          "path": ["palette", "green", "500"]
        },
        "560": {
          "value": "#449327",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#449327"
          },
          "name": "PaletteGreen560",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "560"
          },
          "path": ["palette", "green", "560"]
        },
        "600": {
          "value": "#3B8520",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#3B8520"
          },
          "name": "PaletteGreen600",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "600"
          },
          "path": ["palette", "green", "600"]
        },
        "700": {
          "value": "#276211",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#276211"
          },
          "name": "PaletteGreen700",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "700"
          },
          "path": ["palette", "green", "700"]
        },
        "800": {
          "value": "#163F07",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#163F07"
          },
          "name": "PaletteGreen800",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "800"
          },
          "path": ["palette", "green", "800"]
        },
        "A100": {
          "value": "rgba(68, 255, 0, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(68, 255, 0, 0.15)"
          },
          "name": "PaletteGreenA100",
          "attributes": {
            "category": "palette",
            "type": "green",
            "item": "A100"
          },
          "path": ["palette", "green", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast40",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "green", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast60",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "green", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast100",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "green", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast200",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "green", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrast300",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "green", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast400",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "green", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast500",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "green", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast560",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "green", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast600",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "green", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast700",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "green", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreenContrast800",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "green", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreenContrastA100",
            "attributes": {
              "category": "palette",
              "type": "green",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "green", "contrast", "A100"]
          }
        }
      };
      var ColorRedPalette = {
        "40": {
          "value": "#FEF7F6",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FEF7F6"
          },
          "name": "PaletteRed40",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "40"
          },
          "path": ["palette", "red", "40"]
        },
        "60": {
          "value": "#FCEFEC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FCEFEC"
          },
          "name": "PaletteRed60",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "60"
          },
          "path": ["palette", "red", "60"]
        },
        "100": {
          "value": "#FADEDA",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FADEDA"
          },
          "name": "PaletteRed100",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "100"
          },
          "path": ["palette", "red", "100"]
        },
        "200": {
          "value": "#F4B7AE",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F4B7AE"
          },
          "name": "PaletteRed200",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "200"
          },
          "path": ["palette", "red", "200"]
        },
        "300": {
          "value": "#ED9284",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#ED9284"
          },
          "name": "PaletteRed300",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "300"
          },
          "path": ["palette", "red", "300"]
        },
        "400": {
          "value": "#E76E5C",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E76E5C"
          },
          "name": "PaletteRed400",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "400"
          },
          "path": ["palette", "red", "400"]
        },
        "500": {
          "value": "#E04D36",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E04D36"
          },
          "name": "PaletteRed500",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "500"
          },
          "path": ["palette", "red", "500"]
        },
        "560": {
          "value": "#C43E29",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#C43E29"
          },
          "name": "PaletteRed560",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "560"
          },
          "path": ["palette", "red", "560"]
        },
        "600": {
          "value": "#B23522",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B23522"
          },
          "name": "PaletteRed600",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "600"
          },
          "path": ["palette", "red", "600"]
        },
        "700": {
          "value": "#832112",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#832112"
          },
          "name": "PaletteRed700",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "700"
          },
          "path": ["palette", "red", "700"]
        },
        "800": {
          "value": "#541208",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#541208"
          },
          "name": "PaletteRed800",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "800"
          },
          "path": ["palette", "red", "800"]
        },
        "A100": {
          "value": "rgba(224, 79, 56, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(224, 79, 56, 0.15)"
          },
          "name": "PaletteRedA100",
          "attributes": {
            "category": "palette",
            "type": "red",
            "item": "A100"
          },
          "path": ["palette", "red", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast40",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "red", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast60",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "red", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast100",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "red", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast200",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "red", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrast300",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "red", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast400",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "red", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast500",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "red", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast560",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "red", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast600",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "red", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast700",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "red", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteRedContrast800",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "red", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteRedContrastA100",
            "attributes": {
              "category": "palette",
              "type": "red",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "red", "contrast", "A100"]
          }
        }
      };
      var ColorGreyPalette = {
        "40": {
          "value": "#F5F5F5",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F5F5F5"
          },
          "name": "PaletteGrey40",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "40"
          },
          "path": ["palette", "grey", "40"]
        },
        "60": {
          "value": "#F0F0F0",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F0F0F0"
          },
          "name": "PaletteGrey60",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "60"
          },
          "path": ["palette", "grey", "60"]
        },
        "100": {
          "value": "#E6E6E6",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E6E6E6"
          },
          "name": "PaletteGrey100",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "100"
          },
          "path": ["palette", "grey", "100"]
        },
        "200": {
          "value": "#CCCCCC",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#CCCCCC"
          },
          "name": "PaletteGrey200",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "200"
          },
          "path": ["palette", "grey", "200"]
        },
        "300": {
          "value": "#B3B3B3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#B3B3B3"
          },
          "name": "PaletteGrey300",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "300"
          },
          "path": ["palette", "grey", "300"]
        },
        "400": {
          "value": "#999999",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#999999"
          },
          "name": "PaletteGrey400",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "400"
          },
          "path": ["palette", "grey", "400"]
        },
        "500": {
          "value": "#808080",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#808080"
          },
          "name": "PaletteGrey500",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "500"
          },
          "path": ["palette", "grey", "500"]
        },
        "560": {
          "value": "#707070",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#707070"
          },
          "name": "PaletteGrey560",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "560"
          },
          "path": ["palette", "grey", "560"]
        },
        "600": {
          "value": "#666666",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#666666"
          },
          "name": "PaletteGrey600",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "600"
          },
          "path": ["palette", "grey", "600"]
        },
        "700": {
          "value": "#4D4D4D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#4D4D4D"
          },
          "name": "PaletteGrey700",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "700"
          },
          "path": ["palette", "grey", "700"]
        },
        "800": {
          "value": "#333333",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#333333"
          },
          "name": "PaletteGrey800",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "800"
          },
          "path": ["palette", "grey", "800"]
        },
        "A40": {
          "value": "rgba(0, 0, 0, 0.04)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.04)"
          },
          "name": "PaletteGreyA40",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A40"
          },
          "path": ["palette", "grey", "A40"]
        },
        "A60": {
          "value": "rgba(0, 0, 0, 0.06)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.06)"
          },
          "name": "PaletteGreyA60",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A60"
          },
          "path": ["palette", "grey", "A60"]
        },
        "A100": {
          "value": "rgba(0, 0, 0, 0.1)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.1)"
          },
          "name": "PaletteGreyA100",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A100"
          },
          "path": ["palette", "grey", "A100"]
        },
        "A200": {
          "value": "rgba(0, 0, 0, 0.2)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.2)"
          },
          "name": "PaletteGreyA200",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A200"
          },
          "path": ["palette", "grey", "A200"]
        },
        "A300": {
          "value": "rgba(0, 0, 0, 0.3)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.3)"
          },
          "name": "PaletteGreyA300",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A300"
          },
          "path": ["palette", "grey", "A300"]
        },
        "A500": {
          "value": "rgba(0, 0, 0, 0.5)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(0, 0, 0, 0.5)"
          },
          "name": "PaletteGreyA500",
          "attributes": {
            "category": "palette",
            "type": "grey",
            "item": "A500"
          },
          "path": ["palette", "grey", "A500"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast40",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "grey", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast60",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "grey", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast100",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "grey", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast200",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "grey", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteGreyContrast300",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "grey", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast400",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "grey", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast500",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "grey", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast560",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "grey", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast600",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "grey", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast700",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "grey", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteGreyContrast800",
            "attributes": {
              "category": "palette",
              "type": "grey",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "grey", "contrast", "800"]
          }
        }
      };
      var ColorYellowPalette = {
        "40": {
          "value": "#FDFAF3",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FDFAF3"
          },
          "name": "PaletteYellow40",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "40"
          },
          "path": ["palette", "yellow", "40"]
        },
        "60": {
          "value": "#FCF5E8",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#FCF5E8"
          },
          "name": "PaletteYellow60",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "60"
          },
          "path": ["palette", "yellow", "60"]
        },
        "100": {
          "value": "#F8EBD1",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F8EBD1"
          },
          "name": "PaletteYellow100",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "100"
          },
          "path": ["palette", "yellow", "100"]
        },
        "200": {
          "value": "#F0D49B",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#F0D49B"
          },
          "name": "PaletteYellow200",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "200"
          },
          "path": ["palette", "yellow", "200"]
        },
        "300": {
          "value": "#E7BD68",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#E7BD68"
          },
          "name": "PaletteYellow300",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "300"
          },
          "path": ["palette", "yellow", "300"]
        },
        "400": {
          "value": "#DFA739",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#DFA739"
          },
          "name": "PaletteYellow400",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "400"
          },
          "path": ["palette", "yellow", "400"]
        },
        "500": {
          "value": "#D6930D",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#D6930D"
          },
          "name": "PaletteYellow500",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "500"
          },
          "path": ["palette", "yellow", "500"]
        },
        "560": {
          "value": "#BB800A",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#BB800A"
          },
          "name": "PaletteYellow560",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "560"
          },
          "path": ["palette", "yellow", "560"]
        },
        "600": {
          "value": "#AA7408",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#AA7408"
          },
          "name": "PaletteYellow600",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "600"
          },
          "path": ["palette", "yellow", "600"]
        },
        "700": {
          "value": "#7D5504",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#7D5504"
          },
          "name": "PaletteYellow700",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "700"
          },
          "path": ["palette", "yellow", "700"]
        },
        "800": {
          "value": "#503602",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "#503602"
          },
          "name": "PaletteYellow800",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "800"
          },
          "path": ["palette", "yellow", "800"]
        },
        "A100": {
          "value": "rgba(255, 170, 0, 0.15)",
          "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
          "isSource": true,
          "original": {
            "value": "rgba(255, 170, 0, 0.15)"
          },
          "name": "PaletteYellowA100",
          "attributes": {
            "category": "palette",
            "type": "yellow",
            "item": "A100"
          },
          "path": ["palette", "yellow", "A100"]
        },
        "contrast": {
          "40": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast40",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "40"
            },
            "path": ["palette", "yellow", "contrast", "40"]
          },
          "60": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast60",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "60"
            },
            "path": ["palette", "yellow", "contrast", "60"]
          },
          "100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast100",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "100"
            },
            "path": ["palette", "yellow", "contrast", "100"]
          },
          "200": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast200",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "200"
            },
            "path": ["palette", "yellow", "contrast", "200"]
          },
          "300": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrast300",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "300"
            },
            "path": ["palette", "yellow", "contrast", "300"]
          },
          "400": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast400",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "400"
            },
            "path": ["palette", "yellow", "contrast", "400"]
          },
          "500": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast500",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "500"
            },
            "path": ["palette", "yellow", "contrast", "500"]
          },
          "560": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast560",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "560"
            },
            "path": ["palette", "yellow", "contrast", "560"]
          },
          "600": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast600",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "600"
            },
            "path": ["palette", "yellow", "contrast", "600"]
          },
          "700": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast700",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "700"
            },
            "path": ["palette", "yellow", "contrast", "700"]
          },
          "800": {
            "value": "white",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "white"
            },
            "name": "PaletteYellowContrast800",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "800"
            },
            "path": ["palette", "yellow", "contrast", "800"]
          },
          "A100": {
            "value": "#4D4D4D",
            "filePath": "packages/mosaic/design-tokens/tokens/properties/palette.json5",
            "isSource": true,
            "original": {
              "value": "#4D4D4D"
            },
            "name": "PaletteYellowContrastA100",
            "attributes": {
              "category": "palette",
              "type": "yellow",
              "item": "contrast",
              "subitem": "A100"
            },
            "path": ["palette", "yellow", "contrast", "A100"]
          }
        }
      };
      var TypographyDisplay1FontSize = "56px";
      var TypographyDisplay1LineHeight = "76px";
      var TypographyDisplay1LetterSpacing = "-0.4px";
      var TypographyDisplay1FontWeight = "normal";
      var TypographyDisplay1FontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyDisplay1TextTransform = "null";
      var TypographyDisplay2FontSize = "45px";
      var TypographyDisplay2LineHeight = "56px";
      var TypographyDisplay2LetterSpacing = "normal";
      var TypographyDisplay2FontWeight = "normal";
      var TypographyDisplay2FontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyDisplay2TextTransform = "null";
      var TypographyDisplay3FontSize = "34px";
      var TypographyDisplay3LineHeight = "44px";
      var TypographyDisplay3LetterSpacing = "0.25px";
      var TypographyDisplay3FontWeight = "normal";
      var TypographyDisplay3FontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyDisplay3TextTransform = "null";
      var TypographyHeadlineFontSize = "24px";
      var TypographyHeadlineLineHeight = "32px";
      var TypographyHeadlineLetterSpacing = "normal";
      var TypographyHeadlineFontWeight = "normal";
      var TypographyHeadlineFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyHeadlineTextTransform = "null";
      var TypographyTitleFontSize = "20px";
      var TypographyTitleLineHeight = "28px";
      var TypographyTitleLetterSpacing = "0.15px";
      var TypographyTitleFontWeight = "500";
      var TypographyTitleFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyTitleTextTransform = "null";
      var TypographySubheadingFontSize = "15px";
      var TypographySubheadingLineHeight = "20px";
      var TypographySubheadingLetterSpacing = "0.15px";
      var TypographySubheadingFontWeight = "700";
      var TypographySubheadingFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographySubheadingTextTransform = "null";
      var TypographyBodyFontSize = "15px";
      var TypographyBodyLineHeight = "20px";
      var TypographyBodyLetterSpacing = "0.15px";
      var TypographyBodyFontWeight = "normal";
      var TypographyBodyFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyBodyTextTransform = "null";
      var TypographyBodyStrongFontSize = "15px";
      var TypographyBodyStrongLineHeight = "20px";
      var TypographyBodyStrongLetterSpacing = "0.15px";
      var TypographyBodyStrongFontWeight = "500";
      var TypographyBodyStrongFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyBodyStrongTextTransform = "null";
      var TypographyBodyCapsFontSize = "15px";
      var TypographyBodyCapsLineHeight = "20px";
      var TypographyBodyCapsLetterSpacing = "1.7px";
      var TypographyBodyCapsFontWeight = "normal";
      var TypographyBodyCapsFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyBodyCapsTextTransform = "uppercase";
      var TypographyBodyMonoFontSize = "15px";
      var TypographyBodyMonoLineHeight = "20px";
      var TypographyBodyMonoLetterSpacing = "normal";
      var TypographyBodyMonoFontWeight = "normal";
      var TypographyBodyMonoFontFamily = "'Roboto Mono', 'Consolas', 'Menlo', 'Monaco', monospace";
      var TypographyBodyMonoTextTransform = "null";
      var TypographyCaptionFontSize = "13px";
      var TypographyCaptionLineHeight = "16px";
      var TypographyCaptionLetterSpacing = "0.25px";
      var TypographyCaptionFontWeight = "normal";
      var TypographyCaptionFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyCaptionTextTransform = "null";
      var TypographyCaptionCapsFontSize = "13px";
      var TypographyCaptionCapsLineHeight = "16px";
      var TypographyCaptionCapsLetterSpacing = "1.5px";
      var TypographyCaptionCapsFontWeight = "normal";
      var TypographyCaptionCapsFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyCaptionCapsTextTransform = "uppercase";
      var TypographyCaptionMonoFontSize = "13px";
      var TypographyCaptionMonoLineHeight = "16px";
      var TypographyCaptionMonoLetterSpacing = "normal";
      var TypographyCaptionMonoFontWeight = "normal";
      var TypographyCaptionMonoFontFamily = "'Roboto Mono', 'Consolas', 'Menlo', 'Monaco', monospace";
      var TypographyCaptionMonoTextTransform = "null";
      var TypographySmallTextFontSize = "13px";
      var TypographySmallTextLineHeight = "16px";
      var TypographySmallTextLetterSpacing = "0.25px";
      var TypographySmallTextFontWeight = "normal";
      var TypographySmallTextFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographySmallTextTextTransform = "null";
      var TypographyExtraSmallTextFontSize = "11px";
      var TypographyExtraSmallTextLineHeight = "16px";
      var TypographyExtraSmallTextLetterSpacing = "0.22px";
      var TypographyExtraSmallTextFontWeight = "normal";
      var TypographyExtraSmallTextFontFamily = "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
      var TypographyExtraSmallTextTextTransform = "null";
      var AlertLightColorSchemeErrorBackground = "#FCEFEC";
      var AlertLightColorSchemeErrorBorder = "#E76E5C";
      var AlertLightColorSchemeErrorIcon = "#E76E5C";
      var AlertLightColorSchemeWarningBackground = "#FCF5E8";
      var AlertLightColorSchemeWarningBorder = "#F0D49B";
      var AlertLightColorSchemeWarningIcon = "#DFA739";
      var AlertLightColorSchemeSuccessBackground = "#EDF8E9";
      var AlertLightColorSchemeSuccessBorder = "#B4DEA4";
      var AlertLightColorSchemeSuccessIcon = "#6FBA53";
      var AlertLightColorSchemeInfoBackground = "#EBF4FB";
      var AlertLightColorSchemeInfoBorder = "#AAD1EC";
      var AlertLightColorSchemeInfoIcon = "#57A4D7";
      var AlertLightColorSchemeDefaultBackground = "#F0F0F0";
      var AlertLightColorSchemeDefaultBorder = "#B3B3B3";
      var AlertLightColorSchemeDefaultIcon = "#CCCCCC";
      var AlertDarkColorSchemeErrorBackground = "#832112";
      var AlertDarkColorSchemeErrorBorder = "#832112";
      var AlertDarkColorSchemeErrorIcon = "#E76E5C";
      var AlertDarkColorSchemeWarningBackground = "#7D5504";
      var AlertDarkColorSchemeWarningBorder = "#7D5504";
      var AlertDarkColorSchemeWarningIcon = "#DFA739";
      var AlertDarkColorSchemeSuccessBackground = "#276211";
      var AlertDarkColorSchemeSuccessBorder = "#276211";
      var AlertDarkColorSchemeSuccessIcon = "#6FBA53";
      var AlertDarkColorSchemeInfoBackground = "#114E77";
      var AlertDarkColorSchemeInfoBorder = "#114E77";
      var AlertDarkColorSchemeInfoIcon = "#57A4D7";
      var AlertDarkColorSchemeDefaultBackground = "#4D4D4D";
      var AlertDarkColorSchemeDefaultBorder = "#4D4D4D";
      var AlertDarkColorSchemeDefaultIcon = "#999999";
      var AlertSizeBorderWidth = "1px";
      var AlertSizeBorderRadius = "4px";
      var AlertSizeHorizontalPadding = "16px";
      var AlertSizeVerticalPadding = "13px";
      var AlertSizeIconMargin = "8px";
      var AlertSizeCloseButtonWidth = "16px";
      var AlertSizeSmallVerticalPadding = "11px";
      var AlertFontDefaultHeader = "subheading";
      var AlertFontDefaultBody = "body";
      var AlertFontSmallHeader = "caption";
      var AlertFontSmallBody = "caption";
      var AutocompleteSizePanelPadding = "4px 0";
      var AutocompleteSizePanelMaxHeight = "256px";
      var AutocompleteSizePanelBorderRadius = "3px";
      var BadgeSizeMinWidth = "10px";
      var BadgeSizePadding = "4px 8px";
      var BadgeSizeBorderWidth = "1px";
      var BadgeSizeBorderRadius = "4px";
      var BadgeFontDefault = "caption";
      var BadgeFontCaps = "caption-caps";
      var ButtonToggleSizeBorderSize = "1px";
      var ButtonToggleSizeBorderRadius = "3px";
      var ButtonLightColorSchemeActiveShadow = "inset 0 1px 2px 0 rgba(black, 0.2)";
      var ButtonLightColorSchemePrimaryColor = "white";
      var ButtonLightColorSchemePrimaryBorder = "#277BB3";
      var ButtonLightColorSchemePrimaryBackground = "#338FCC";
      var ButtonLightColorSchemePrimaryIcon = "white";
      var ButtonLightColorSchemePrimaryStatesActiveBorder = "darken(#277BB3, 5)";
      var ButtonLightColorSchemePrimaryStatesActiveBackground = "darken(#338FCC, 5)";
      var ButtonLightColorSchemePrimaryTransparentColor = "#338FCC";
      var ButtonLightColorSchemePrimaryTransparentIcon = "#338FCC";
      var ButtonLightColorSchemePrimaryTransparentStatesHoverColor = "#206EA2";
      var ButtonLightColorSchemePrimaryTransparentStatesHoverIcon = "#206EA2";
      var ButtonLightColorSchemePrimaryTransparentStatesActiveColor = "#114E77";
      var ButtonLightColorSchemePrimaryTransparentStatesActiveIcon = "#114E77";
      var ButtonLightColorSchemeSecondBorder = "#B3B3B3";
      var ButtonLightColorSchemeSecondBackground = "#F0F0F0";
      var ButtonLightColorSchemeSecondColor = "#4D4D4D";
      var ButtonLightColorSchemeSecondIcon = "#999999";
      var ButtonLightColorSchemeSecondStatesActiveBorder = "darken(#B3B3B3, 5)";
      var ButtonLightColorSchemeSecondStatesActiveBackground = "darken(#F0F0F0, 5)";
      var ButtonLightColorSchemeErrorBorder = "#B3B3B3";
      var ButtonLightColorSchemeErrorBackground = "#F0F0F0";
      var ButtonLightColorSchemeErrorColor = "#E76E5C";
      var ButtonLightColorSchemeErrorIcon = "#E76E5C";
      var ButtonLightColorSchemeErrorStatesActiveBorder = "darken(#B3B3B3, 5)";
      var ButtonLightColorSchemeErrorStatesActiveBackground = "darken(#F0F0F0, 5)";
      var ButtonDarkColorSchemeActiveShadow = "inset 1px 2px 2px 0 rgba(black, 0.2)";
      var ButtonDarkColorSchemePrimaryColor = "white";
      var ButtonDarkColorSchemePrimaryBorder = "#277BB3";
      var ButtonDarkColorSchemePrimaryBackground = "#338FCC";
      var ButtonDarkColorSchemePrimaryIcon = "white";
      var ButtonDarkColorSchemePrimaryStatesActiveBorder = "darken(#277BB3, 5)";
      var ButtonDarkColorSchemePrimaryStatesActiveBackground = "darken(#57A4D7, 5)";
      var ButtonDarkColorSchemePrimaryTransparentColor = "#338FCC";
      var ButtonDarkColorSchemePrimaryTransparentIcon = "#338FCC";
      var ButtonDarkColorSchemePrimaryTransparentStatesHoverColor = "#206EA2";
      var ButtonDarkColorSchemePrimaryTransparentStatesHoverIcon = "#206EA2";
      var ButtonDarkColorSchemePrimaryTransparentStatesActiveColor = "#114E77";
      var ButtonDarkColorSchemePrimaryTransparentStatesActiveIcon = "#114E77";
      var ButtonDarkColorSchemeSecondBorder = "#808080";
      var ButtonDarkColorSchemeSecondBackground = "#666666";
      var ButtonDarkColorSchemeSecondColor = "#F0F0F0";
      var ButtonDarkColorSchemeSecondIcon = "#999999";
      var ButtonDarkColorSchemeSecondStatesActiveBorder = "darken(#808080, 5)";
      var ButtonDarkColorSchemeSecondStatesActiveBackground = "darken(#666666, 5)";
      var ButtonDarkColorSchemeErrorBorder = "#808080";
      var ButtonDarkColorSchemeErrorBackground = "#666666";
      var ButtonDarkColorSchemeErrorColor = "#E76E5C";
      var ButtonDarkColorSchemeErrorIcon = "#E76E5C";
      var ButtonDarkColorSchemeErrorStatesActiveBorder = "darken(#808080, 5)";
      var ButtonDarkColorSchemeErrorStatesActiveBackground = "darken(#666666, 5)";
      var ButtonSizeBorderWidth = "1px";
      var ButtonSizeBorderRadius = "3px";
      var ButtonSizeVerticalPadding = "6px";
      var ButtonSizeHorizontalPadding = "16px";
      var ButtonFontDefault = "body";
      var ButtonFontPrimary = "body-strong";
      var ButtonFontPrimaryTransparent = "body";
      var IconButtonSizeVerticalPadding = "6px";
      var IconButtonSizeHorizontalPadding = "8px";
      var IconButtonSizeIconHorizontalPadding = "16px";
      var CardLightColorSchemeErrorVerticalLine = "#E76E5C";
      var CardLightColorSchemeErrorBackground = "#FCEFEC";
      var CardLightColorSchemeErrorShadow = "#E6E6E6";
      var CardLightColorSchemeWarningVerticalLine = "#F0D49B";
      var CardLightColorSchemeWarningBackground = "#FCF5E8";
      var CardLightColorSchemeWarningShadow = "#E6E6E6";
      var CardLightColorSchemeSuccessVerticalLine = "#B4DEA4";
      var CardLightColorSchemeSuccessBackground = "#EDF8E9";
      var CardLightColorSchemeSuccessShadow = "#E6E6E6";
      var CardLightColorSchemeInfoVerticalLine = "#AAD1EC";
      var CardLightColorSchemeInfoBackground = "#EBF4FB";
      var CardLightColorSchemeInfoShadow = "#E6E6E6";
      var CardDarkColorSchemeErrorVerticalLine = "#E76E5C";
      var CardDarkColorSchemeErrorBackground = "#832112";
      var CardDarkColorSchemeErrorShadow = "#4D4D4D";
      var CardDarkColorSchemeWarningVerticalLine = "#DFA739";
      var CardDarkColorSchemeWarningBackground = "#7D5504";
      var CardDarkColorSchemeWarningShadow = "#4D4D4D";
      var CardDarkColorSchemeSuccessVerticalLine = "#6FBA53";
      var CardDarkColorSchemeSuccessBackground = "#276211";
      var CardDarkColorSchemeSuccessShadow = "#4D4D4D";
      var CardDarkColorSchemeInfoVerticalLine = "#57A4D7";
      var CardDarkColorSchemeInfoBackground = "#114E77";
      var CardDarkColorSchemeInfoShadow = "#4D4D4D";
      var CardSizeVerticalLine = "4px";
      var CheckboxLightColorSchemeBorder = "#B3B3B3";
      var CheckboxLightColorSchemeStatesCheckedBorder = "#206EA2";
      var CheckboxLightColorSchemeStatesCheckedBackground = "#338FCC";
      var CheckboxLightColorSchemeStatesFocusedBorder = "#206EA2";
      var CheckboxLightColorSchemeStatesFocusedShadow = "inset 0 0 0 1px white, 0 0 0 1px #206EA2";
      var CheckboxDarkColorSchemeBorder = "#999999";
      var CheckboxDarkColorSchemeStatesCheckedBorder = "#57A4D7";
      var CheckboxDarkColorSchemeStatesCheckedBackground = "#206EA2";
      var CheckboxDarkColorSchemeStatesFocusedBorder = "#57A4D7";
      var CheckboxDarkColorSchemeStatesFocusedShadow = "inset 0 0 0 1px #333333, 0 0 0 1px #57A4D7";
      var CheckboxSizeWidth = "16px";
      var CheckboxSizeLabelMargin = "8px";
      var CheckboxSizeBorderWidth = "1px";
      var CheckboxSizeToggleBoxShadow = "inset 0 0 1px 0 rgba(0, 0, 0, 0.2)";
      var CheckboxFontDefault = "body";
      var DatepickerToggleSizeWidth = "30px";
      var DatepickerToggleSizeHeight = "30px";
      var DatepickerBodyLightColorSchemeStatesSelectedColor = "#338FCC";
      var DatepickerBodyLightColorSchemeStatesSelectedBackground = "#D8EAF7";
      var DatepickerBodyDarkColorSchemeStatesSelectedColor = "#338FCC";
      var DatepickerBodyDarkColorSchemeStatesSelectedBackground = "#114E77";
      var DatepickerBodySizeLabelPaddings = "8px 28px 12px 12px";
      var DatepickerBodySizeCellMinSize = "32px";
      var DatepickerBodySizeCellMargin = "5%";
      var DatepickerBodySizeCellPadding = "8px";
      var DatepickerBodySizeCellBorderWidth = "1px";
      var DatepickerBodyFontLabel = "body-strong";
      var DatepickerBodyFontToday = "body-strong";
      var DatepickerCalendarSizePaddingTop = "16px";
      var DatepickerCalendarSizePaddingHorizontal = "8px";
      var DatepickerCalendarSizePaddingBottom = "8px";
      var DatepickerCalendarSizePaddingBlocks = "12px";
      var DatepickerCalendarSizeDividerWidth = "1px";
      var DatepickerCalendarSizeIconBorderWidth = "2px";
      var DatepickerCalendarSizeIconPrevIconTransform = "translateX(2px) rotate(-45deg)";
      var DatepickerCalendarSizeIconNexIconTransform = "translateX(-2px) rotate(45deg)";
      var DatepickerCalendarFontDefault = "body";
      var DatepickerCalendarFontHeader = "caption";
      var DatepickerInputSizeWidth = "130px";
      var DividerSizeWidth = "1px";
      var DividerSizeInsetMargin = "80px";
      var DropdownItemSizePadding = "5px 15px";
      var DropdownItemSizeIconPadding = "0 8px 2px 0";
      var DropdownItemFontDefault = "body";
      var DropdownItemFontCaption = "caption";
      var DropdownGroupHeaderSizeDefaultPadding = "6px 15px";
      var DropdownGroupHeaderSizeSmallPadding = "8px 15px";
      var DropdownGroupHeaderFontDefault = "body-strong";
      var DropdownGroupHeaderFontSmall = "caption-caps";
      var DropdownDividerSizeHeight = "1px";
      var DropdownDividerSizeMargin = "4px 0";
      var DropdownTriggerSizeIconPaddingRight = "8px";
      var DropdownPanelSizeMaxWidth = "640px";
      var DropdownPanelSizePadding = "4px 0";
      var DropdownPanelSizeBorderWidth = "1px";
      var DropdownPanelSizeBorderRadius = "3px";
      var FormFieldLightColorSchemeBorder = "#B3B3B3";
      var FormFieldLightColorSchemeBackground = "white";
      var FormFieldLightColorSchemeStatesHoverBorder = "#999999";
      var FormFieldLightColorSchemeStatesInvalidBorder = "#E76E5C";
      var FormFieldLightColorSchemeStatesInvalidBackground = "transparent";
      var FormFieldDarkColorSchemeBorder = "#999999";
      var FormFieldDarkColorSchemeBackground = "#333333";
      var FormFieldDarkColorSchemeStatesHoverBorder = "#CCCCCC";
      var FormFieldDarkColorSchemeStatesInvalidBorder = "#E76E5C";
      var FormFieldDarkColorSchemeStatesInvalidBackground = "transparent";
      var FormFieldSizeBorderWidth = "1px";
      var FormFieldSizeBorderRadius = "3px";
      var FormFieldSizeButtonWidth = "32px";
      var FormFieldFontDefault = "body";
      var FormFieldHintSizeMarginTop = "4px";
      var FormFieldHintFontDefault = "caption";
      var FormsLightColorSchemeLabel = "#999999";
      var FormsLightColorSchemeLegend = "#4D4D4D";
      var FormsDarkColorSchemeLabel = "#999999";
      var FormsDarkColorSchemeLegend = "#F0F0F0";
      var FormsSizeHorizontalRowMarginBottom = "20px";
      var FormsSizeHorizontalLabelPaddingTop = "6px";
      var FormsSizeHorizontalLabelPaddingBottom = "0";
      var FormsSizeHorizontalControlPaddingLeft = "16px";
      var FormsSizeHorizontalLegendMarginTop = "32px";
      var FormsSizeHorizontalLegendMarginBottom = "16px";
      var FormsSizeVerticalRowMarginBottom = "16px";
      var FormsSizeVerticalLabelPaddingTop = "0";
      var FormsSizeVerticalLabelPaddingBottom = "4px";
      var FormsSizeVerticalControlPaddingLeft = "24px";
      var FormsSizeVerticalLegendMarginTop = "32px";
      var FormsSizeVerticalLegendMarginBottom = "12px";
      var FormsFontDefaultLabel = "body";
      var FormsFontDefaultLegend = "subheading";
      var InputSizePadding = "5px 16px";
      var InputSizeWidth = "100%";
      var InputSizeMinHeight = "30px";
      var InputFontDefault = "body";
      var InputFontMonospace = "body-mono";
      var LinkLightColorSchemeText = "#338FCC";
      var LinkLightColorSchemeBorderBottom = "rgba(#338FCC, 0.32)";
      var LinkLightColorSchemeStateVisitedText = "#6A2795";
      var LinkLightColorSchemeStateVisitedBorderBottom = "rgba(106, 39, 149, 0.32)";
      var LinkLightColorSchemeStateHoverText = "#206EA2";
      var LinkLightColorSchemeStateHoverBorderBottom = "rgba(#206EA2, 0.32)";
      var LinkLightColorSchemeStateActive = "#114E77";
      var LinkLightColorSchemeStateFocusedOutline = "#338FCC";
      var LinkDarkColorSchemeText = "#57A4D7";
      var LinkDarkColorSchemeBorderBottom = "rgba(#57A4D7, 0.32)";
      var LinkDarkColorSchemeStateVisitedText = "#a23ee2";
      var LinkDarkColorSchemeStateVisitedBorderBottom = "rgba(162, 62, 226, 0.32)";
      var LinkDarkColorSchemeStateHoverText = "#7FBAE1";
      var LinkDarkColorSchemeStateHoverBorderBottom = "rgba(#7FBAE1, 0.32)";
      var LinkDarkColorSchemeStateActive = "#7FBAE1";
      var LinkDarkColorSchemeStateFocusedOutline = "#57A4D7";
      var LinkSizeIconMargin = "4px";
      var LinkSizeStateFocusedOutlineOffset = "2px";
      var LinkSizeStateFocusedOutlineWidth = "2px";
      var LinkAnimationTransition = "color ease-out 300ms";
      var LinkAnimationStateHoverTransition = "color 0ms";
      var LinkFontDefault = "body";
      var ListSizeHorizontalPadding = "16px";
      var ListSizeIconPadding = "4px";
      var ListSizeItemHeight = "28px";
      var ListSizeTwoLineHeight = "72px";
      var ListSizeThreeLineHeight = "88px";
      var ListSizeMultiLinePadding = "16px";
      var ListSizeIconWidth = "24px";
      var ListFontItem = "body";
      var ModalLightColorSchemeShadow = "(0 0 0 1px #B3B3B3, 0 6px 12px 0 rgba(0, 0, 0, 0.5))";
      var ModalLightColorSchemeBodyTopShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.16)";
      var ModalLightColorSchemeBodyBottomShadow = "0 -2px 4px 0 rgba(0, 0, 0, 0.16)";
      var ModalLightColorSchemeBackgroundMask = "rgba(0, 0, 0, 0.5)";
      var ModalDarkColorSchemeShadow = "(0 0 0 1px #333333, 0 6px 12px 0 rgba(0, 0, 0, 0.5))";
      var ModalDarkColorSchemeBodyTopShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.16)";
      var ModalDarkColorSchemeBodyBottomShadow = "0 -2px 4px 0 rgba(0, 0, 0, 0.16)";
      var ModalDarkColorSchemeBackgroundMask = "rgba(0, 0, 0, 0.5)";
      var ModalSizeSmall = "400px";
      var ModalSizeNormal = "640px";
      var ModalSizeLarge = "960px";
      var ModalSizeTop = "48px";
      var ModalSizeCloseWidth = "56px";
      var ModalSizeBorderRadius = "4px";
      var ModalSizeBorderWidth = "1px";
      var ModalHeaderSizeBorderRadius = "4px 4px 0 0";
      var ModalHeaderSizePadding = "14px 16px";
      var ModalHeaderFontDefault = "title";
      var ModalBodySizeMaxHeight = "calc(100vh - 260px)";
      var ModalBodySizePadding = "16px 24px 24px";
      var ModalBodyFontDefault = "body";
      var ModalFooterSizeBorderRadius = "0 0 4px 4px";
      var ModalFooterSizePadding = "16px 16px";
      var ModalConfirmSizePadding = "24px";
      var NavbarLightColorSchemeBackground = "#114E77";
      var NavbarLightColorSchemeDividerBackground = "rgba(255, 255, 255, 0.3)";
      var NavbarDarkColorSchemeBackground = "#114E77";
      var NavbarDarkColorSchemeDividerBackground = "rgba(255, 255, 255, 0.3)";
      var NavbarSizeIconMargin = "4px";
      var NavbarFontTitle = "body";
      var VerticalNavbarSizeStatesOpenedWidth = "240px";
      var VerticalNavbarSizeStatesClosedWidth = "48px";
      var VerticalNavbarSizeIconMargin = "10px";
      var NavbarItemLightColorSchemeText = "#D8EAF7";
      var NavbarItemLightColorSchemeStatesActive = "#206EA2";
      var NavbarItemLightColorSchemeStatesHover = "#206EA2";
      var NavbarItemLightColorSchemeStatesProgress = "#07314D";
      var NavbarItemLightColorSchemeStatesDisabledOpacity = 0.3;
      var NavbarItemDarkColorSchemeText = "#D8EAF7";
      var NavbarItemDarkColorSchemeStatesActive = "#114E77";
      var NavbarItemDarkColorSchemeStatesHover = "#114E77";
      var NavbarItemDarkColorSchemeStatesProgress = "#07314D";
      var NavbarItemDarkColorSchemeStatesDisabledOpacity = 0.3;
      var NavbarItemSizePadding = "16px";
      var NavbarItemSizeHeight = "48px";
      var NavbarBrandSizePadding = "12px";
      var NavbarBrandSizeMarginRight = "24px";
      var NavbarBrandFontTitle = "title";
      var OptgroupSizePaddingLeft = "17px";
      var OptgroupFontDefault = "subheading";
      var OptionSizeHorizontalPadding = "16px";
      var OptionSizeHeight = "32px";
      var OptionSizeBorderWidth = "2px";
      var OptionFontDefault = "body";
      var PopoverLightColorSchemeBorder = "#B3B3B3";
      var PopoverDarkColorSchemeBorder = "#4D4D4D";
      var PopoverSizePadding = "16px";
      var PopoverSizeBorderWidth = "1px";
      var PopoverSizeBorderRadius = "4px";
      var PopoverSizeArrowWidth = "4px";
      var PopoverSizeSmallWidth = "200px";
      var PopoverSizeNormalWidth = "400px";
      var PopoverSizeLargeWidth = "640px";
      var PopoverFontDefault = "body";
      var PopoverHeaderSizePadding = "10px 16px";
      var PopoverHeaderFontDefault = "subheading";
      var PopoverFooterSizePadding = "12px 16px";
      var PopoverFooterSizeMarginTop = "8px";
      var PopoverFooterFontDefault = "body";
      var PopupLightColorSchemeShadow = "0 3px 3px 0 rgba(0, 0, 0, 0.2)";
      var PopupLightColorSchemeBorder = "#B3B3B3";
      var PopupLightColorSchemeDivider = "#CCCCCC";
      var PopupLightColorSchemeBackground = "white";
      var PopupLightColorSchemeFooterBackground = "#F0F0F0";
      var PopupDarkColorSchemeShadow = "0 3px 3px 0 rgba(0, 0, 0, 0.2)";
      var PopupDarkColorSchemeBorder = "#999999";
      var PopupDarkColorSchemeDivider = "#666666";
      var PopupDarkColorSchemeBackground = "#4D4D4D";
      var PopupDarkColorSchemeFooterBackground = "transparent";
      var ProgressBarLightColorSchemeBackground = "#F0F0F0";
      var ProgressBarDarkColorSchemeBackground = "#666666";
      var ProgressBarSizeHeight = "4px";
      var ProgressSpinnerSizeSize = "16px";
      var RadioLightColorSchemeOuterCircleBorder = "#B3B3B3";
      var RadioLightColorSchemeInnerCircleBorder = "transparent";
      var RadioLightColorSchemeStatesCheckedOuterCircleBorder = "#338FCC";
      var RadioLightColorSchemeStatesCheckedInnerCircleBorder = "#338FCC";
      var RadioLightColorSchemeStatesFocusedOuterCircleBorder = "#338FCC";
      var RadioLightColorSchemeStatesFocusedOuterCircleShadow = "0 0 0 2px #B3B3B3";
      var RadioLightColorSchemeStatesFocusedInnerCircleShadow = "0 0 0 1px white";
      var RadioDarkColorSchemeOuterCircleBorder = "#999999";
      var RadioDarkColorSchemeInnerCircleBorder = "transparent";
      var RadioDarkColorSchemeStatesCheckedOuterCircleBorder = "#57A4D7";
      var RadioDarkColorSchemeStatesCheckedInnerCircleBorder = "#206EA2";
      var RadioDarkColorSchemeStatesFocusedOuterCircleBorder = "#57A4D7";
      var RadioDarkColorSchemeStatesFocusedOuterCircleShadow = "0 0 0 2px #57A4D7";
      var RadioDarkColorSchemeStatesFocusedInnerCircleShadow = "0 0 0 1px #333333";
      var RadioSizeSize = "14px";
      var RadioSizeLabelMargin = "8px";
      var RadioFontDefault = "body";
      var SelectSizeHeight = "30px";
      var SelectSizeLeftPadding = "16px";
      var SelectSizeRightPadding = "8px";
      var SelectSizeLeftPaddingMultiple = "8px";
      var SelectFontDefault = "body";
      var SelectPanelSizeMaxHeight = "232px";
      var SelectPanelSizeMaxWidth = "640px";
      var SelectPanelSizeVerticalPadding = "4px";
      var SelectPanelSizeBorderWidth = "1px";
      var SelectPanelSizeBorderRadius = "3px";
      var SelectPanelFontDefault = "body";
      var SidepanelLightColorSchemeBorder = "#B3B3B3";
      var SidepanelDarkColorSchemeBorder = "#333333";
      var SidepanelFontDefault = "body";
      var SidepanelHeaderSizePadding = "14px 16px";
      var SidepanelHeaderSizeClosePadding = "0 0 0 8px";
      var SidepanelHeaderFontDefault = "title";
      var SidepanelFooterSizePadding = "16px";
      var SidepanelFooterFontDefault = "body";
      var TableSizeBorderWidth = "1px";
      var TableSizeRowPaddingVertical = "8px";
      var TableSizeRowPaddingHorizontal = "16px";
      var TableFontHeader = "caption";
      var TableFontBody = "body";
      var TabsLightColorSchemeBorder = "#B3B3B3";
      var TabsLightColorSchemeStateActive = "#338FCC";
      var TabsLightColorSchemeStateDisabledOverlay = "rgba(white, 0.5)";
      var TabsDarkColorSchemeBorder = "#B3B3B3";
      var TabsDarkColorSchemeStateActive = "#57A4D7";
      var TabsDarkColorSchemeStateDisabledOverlay = "rgba(white, 0.5)";
      var TabsSizeHeight = "40px";
      var TabsSizeHighlightHeight = "4px";
      var TabsSizePaddingHorizontal = "16px";
      var TabsSizeBorderWidth = "1px";
      var TabsSizeBorderRadius = "3px";
      var TabsSizeLabelIconMargin = "8px";
      var TabsFontDefault = "body";
      var TagsLightColorSchemePrimaryBackground = "#D8EAF7";
      var TagsLightColorSchemePrimaryBorder = "#D8EAF7";
      var TagsLightColorSchemePrimaryIcon = "mix(#57A4D7, rgba(black, 0.05))";
      var TagsLightColorSchemePrimaryStatesHoverIcon = "#206EA2";
      var TagsLightColorSchemePrimaryStatesFocused = "#338FCC";
      var TagsLightColorSchemePrimaryStatesDisabledText = "mix(#338FCC, transparent, 50%)";
      var TagsLightColorSchemePrimaryStatesDisabledBackground = "mix(#338FCC, transparent, 10%)";
      var TagsLightColorSchemeSecondBackground = "#E6E6E6";
      var TagsLightColorSchemeSecondBorder = "#E6E6E6";
      var TagsLightColorSchemeSecondIcon = "mix(#999999, rgba(black, 0.05))";
      var TagsLightColorSchemeSecondStatesHoverIcon = "#999999";
      var TagsLightColorSchemeSecondStatesFocused = "#338FCC";
      var TagsLightColorSchemeSecondStatesDisabledText = "mix(#B3B3B3, transparent, 50%)";
      var TagsLightColorSchemeSecondStatesDisabledBackground = "mix(#B3B3B3, transparent, 10%)";
      var TagsLightColorSchemeErrorBackground = "#FADEDA";
      var TagsLightColorSchemeErrorBorder = "#FADEDA";
      var TagsLightColorSchemeErrorIcon = "mix(#E76E5C, rgba(black, 0.05))";
      var TagsLightColorSchemeErrorStatesHoverIcon = "#E04D36";
      var TagsLightColorSchemeErrorStatesFocused = "#E76E5C";
      var TagsLightColorSchemeErrorStatesDisabledText = "mix(#E76E5C, transparent, 50%)";
      var TagsLightColorSchemeErrorStatesDisabledBackground = "mix(#E76E5C, transparent, 10%)";
      var TagsDarkColorSchemePrimaryBackground = "#114E77";
      var TagsDarkColorSchemePrimaryBorder = "#114E77";
      var TagsDarkColorSchemePrimaryIcon = "mix(#57A4D7, rgba(black, 0.05))";
      var TagsDarkColorSchemePrimaryStatesHoverIcon = "#338FCC";
      var TagsDarkColorSchemePrimaryStatesFocused = "#57A4D7";
      var TagsDarkColorSchemePrimaryStatesDisabledText = "mix(#57A4D7, transparent, 50%)";
      var TagsDarkColorSchemePrimaryStatesDisabledBackground = "mix(#57A4D7, transparent, 10%)";
      var TagsDarkColorSchemeSecondBackground = "#4D4D4D";
      var TagsDarkColorSchemeSecondBorder = "#4D4D4D";
      var TagsDarkColorSchemeSecondIcon = "mix(#999999, rgba(black, 0.05))";
      var TagsDarkColorSchemeSecondStatesHoverIcon = "#E6E6E6";
      var TagsDarkColorSchemeSecondStatesFocused = "#57A4D7";
      var TagsDarkColorSchemeSecondStatesDisabledText = "mix(#999999, transparent, 50%)";
      var TagsDarkColorSchemeSecondStatesDisabledBackground = "mix(#999999, transparent, 10%)";
      var TagsDarkColorSchemeErrorBackground = "#832112";
      var TagsDarkColorSchemeErrorBorder = "#832112";
      var TagsDarkColorSchemeErrorIcon = "mix(#E76E5C, rgba(black, 0.05))";
      var TagsDarkColorSchemeErrorStatesHoverIcon = "#F4B7AE";
      var TagsDarkColorSchemeErrorStatesFocused = "#E76E5C";
      var TagsDarkColorSchemeErrorStatesDisabledText = "mix(#E76E5C, transparent, 50%)";
      var TagsDarkColorSchemeErrorStatesDisabledBackground = "mix(#E76E5C, transparent, 10%)";
      var TagsSizeMargin = "2px";
      var TagsSizeHeight = "24px";
      var TagsSizeBorderWidth = "1px";
      var TagsSizeBorderRadius = "4px";
      var TagsSizeIconPadding = "3px";
      var TagsSizeTextMargin = "8px";
      var TagsFontDefault = "caption";
      var TagsFontMono = "caption-mono";
      var TagsFontCaps = "caption-caps";
      var TagListSizePadding = "1px 6px";
      var TagListSizeMinHeight = "30px";
      var TagInputSizeHeight = "22px";
      var TagInputSizeMargin = "2px 4px";
      var TagInputFontDefault = "body";
      var TextareaSizeMinHeight = "50px";
      var TextareaSizePadding = "5px 16px";
      var TextareaFontDefault = "body";
      var TextareaFontMono = "body-mono";
      var TimepickerSizePaddingRight = "16px";
      var ToggleLightColorSchemeBorder = "#B3B3B3";
      var ToggleLightColorSchemeBackground = "linear-gradient(to bottom, #E6E6E6, #F0F0F0)";
      var ToggleLightColorSchemeCircleBorder = "#B3B3B3";
      var ToggleLightColorSchemeCircleBackground = "linear-gradient(to bottom, white, #E6E6E6)";
      var ToggleLightColorSchemeStatesFocusedShadow = "inset 0 0 0 1px white, 0 0 0 2px #338FCC";
      var ToggleDarkColorSchemeBorder = "#808080";
      var ToggleDarkColorSchemeBackground = "#333333";
      var ToggleDarkColorSchemeCircleBorder = "#808080";
      var ToggleDarkColorSchemeCircleBackground = "white";
      var ToggleDarkColorSchemeStatesFocusedShadow = "inset 0 0 0 1px #333333, 0 0 0 2px #57A4D7";
      var ToggleSizeHeight = "16px";
      var ToggleSizeWidth = "28px";
      var ToggleSizeBorderRadius = "9px";
      var ToggleSizeLabelMargin = "8px";
      var ToggleFontDefault = "body";
      var ToggleSmallSizeHeight = "14px";
      var ToggleSmallSizeWidth = "24px";
      var ToggleSmallSizeBorderRadius = "8px";
      var ToggleSmallFontDefault = "caption";
      var TooltipLightColorSchemeBackground = "#4D4D4D";
      var TooltipLightColorSchemeText = "white";
      var TooltipLightColorSchemeShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2)";
      var TooltipLightColorSchemeWarningBackground = "#FCF5E8";
      var TooltipLightColorSchemeWarningText = "#4D4D4D";
      var TooltipLightColorSchemeWarningBorder = "#F0D49B";
      var TooltipDarkColorSchemeBackground = "#F5F5F5";
      var TooltipDarkColorSchemeText = "#4D4D4D";
      var TooltipDarkColorSchemeShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.2)";
      var TooltipDarkColorSchemeWarningBackground = "#FCF5E8";
      var TooltipDarkColorSchemeWarningText = "#4D4D4D";
      var TooltipDarkColorSchemeWarningBorder = "#F0D49B";
      var TooltipSizeMaxWidth = "240px";
      var TooltipSizeBorderRadius = "3px";
      var TooltipSizeArrowSize = "12px";
      var TooltipSizeArrowWidth = "5px";
      var TooltipSizePadding = "8px 16px";
      var TooltipSizeDistance = "calc(5px + 4px)";
      var TooltipFontDefault = "caption";
      var TreeSizePaddingRight = "16px";
      var TreeSizeBorderWidth = "2px";
      var TreeSizeNodeHeight = "28px";
      var TreeFontNode = "body";
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    }
  }]);
})();
//# sourceMappingURL=7-es5.js.map