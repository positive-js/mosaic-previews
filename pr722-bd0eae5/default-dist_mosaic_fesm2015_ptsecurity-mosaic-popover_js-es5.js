(function () {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-popover_js"], {
    /***/
    3714: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MC_POPOVER_SCROLL_STRATEGY": function MC_POPOVER_SCROLL_STRATEGY() {
          return (
            /* binding */
            _MC_POPOVER_SCROLL_STRATEGY
          );
        },

        /* harmony export */
        "MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER": function MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER() {
          return (
            /* binding */
            _MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER
          );
        },

        /* harmony export */
        "McPopoverComponent": function McPopoverComponent() {
          return (
            /* binding */
            _McPopoverComponent
          );
        },

        /* harmony export */
        "McPopoverModule": function McPopoverModule() {
          return (
            /* binding */
            _McPopoverModule
          );
        },

        /* harmony export */
        "McPopoverTrigger": function McPopoverTrigger() {
          return (
            /* binding */
            _McPopoverTrigger
          );
        },

        /* harmony export */
        "getMcPopoverInvalidPositionError": function getMcPopoverInvalidPositionError() {
          return (
            /* binding */
            _getMcPopoverInvalidPositionError
          );
        },

        /* harmony export */
        "mcPopoverAnimations": function mcPopoverAnimations() {
          return (
            /* binding */
            _mcPopoverAnimations
          );
        },

        /* harmony export */
        "mcPopoverScrollStrategyFactory": function mcPopoverScrollStrategyFactory() {
          return (
            /* binding */
            _mcPopoverScrollStrategyFactory
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      45129);
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      42791);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      46872);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      89919);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      90425);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      97175);

      function McPopoverComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 9);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.header);
        }
      }

      function McPopoverComponent_div_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.header);
        }
      }

      function McPopoverComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McPopoverComponent_div_2_ng_container_1_Template, 1, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McPopoverComponent_div_2_ng_container_2_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplateRef(ctx_r0.header));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.isTemplateRef(ctx_r0.header));
        }
      }

      function McPopoverComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 9);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.content);
        }
      }

      function McPopoverComponent_div_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.content);
        }
      }

      function McPopoverComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McPopoverComponent_div_3_ng_container_1_Template, 1, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McPopoverComponent_div_3_ng_container_2_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isTemplateRef(ctx_r1.content));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.isTemplateRef(ctx_r1.content));
        }
      }

      function McPopoverComponent_div_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 9);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footer);
        }
      }

      function McPopoverComponent_div_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.footer);
        }
      }

      function McPopoverComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McPopoverComponent_div_4_ng_container_1_Template, 1, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McPopoverComponent_div_4_ng_container_2_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isTemplateRef(ctx_r2.footer));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isTemplateRef(ctx_r2.footer));
        }
      }

      var _mcPopoverAnimations = {
        /** Animation that transitions a tooltip in and out. */
        popoverState: (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('state', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('initial', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => visible', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => hidden', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms linear', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
          opacity: 0
        })))])
      };

      var _McPopoverComponent = /*#__PURE__*/function (_ptsecurity_mosaic_co) {
        _inherits(_McPopoverComponent, _ptsecurity_mosaic_co);

        var _super = _createSuper(_McPopoverComponent);

        function _McPopoverComponent(changeDetectorRef) {
          var _this;

          _classCallCheck(this, _McPopoverComponent);

          _this = _super.call(this, changeDetectorRef);
          _this.prefix = 'mc-popover';
          return _this;
        }

        _createClass(_McPopoverComponent, [{
          key: "updateClassMap",
          value: function updateClassMap(placement, customClass, size) {
            _get(_getPrototypeOf(_McPopoverComponent.prototype), "updateClassMap", this).call(this, placement, customClass, _defineProperty({}, "".concat(this.prefix, "_").concat(size), !!size));
          }
        }]);

        return _McPopoverComponent;
      }(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.McPopUp);
      /** @nocollapse */


      _McPopoverComponent.ɵfac = function McPopoverComponent_Factory(t) {
        return new (t || _McPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
      /** @nocollapse */


      _McPopoverComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _McPopoverComponent,
        selectors: [["mc-popover-component"]],
        hostBindings: function McPopoverComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.esc", function McPopoverComponent_keydown_esc_HostBindingHandler() {
              return ctx.hide(0);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 7,
        consts: [[1, "mc-popover", 3, "ngClass"], [1, "mc-popover__container"], ["class", "mc-popover__header", 4, "ngIf"], ["class", "mc-popover__content", 4, "ngIf"], ["class", "mc-popover__footer", 4, "ngIf"], [1, "mc-popover__arrow"], [1, "mc-popover__header"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "mc-popover__content"], [1, "mc-popover__footer"]],
        template: function McPopoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@state.start", function McPopoverComponent_Template_div_animation_state_start_0_listener() {
              return ctx.animationStart();
            })("@state.done", function McPopoverComponent_Template_div_animation_state_done_0_listener($event) {
              return ctx.animationDone($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McPopoverComponent_div_2_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McPopoverComponent_div_3_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, McPopoverComponent_div_4_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap)("@state", ctx.visibility);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.header);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-popover__arrow_with-footer", ctx.footer);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
        styles: ["@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 10px,transparent 20px,rgba(0,0,0,.05) 20px,rgba(0,0,0,.05) 30px,transparent 30px) repeat;background-size:29px 29px;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-pane{box-sizing:border-box;position:absolute;pointer-events:auto;margin:0;padding:0;z-index:1000;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box{box-sizing:border-box;position:absolute;z-index:1000;display:flex;flex-direction:column;margin:0;padding:0;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:3px;border-radius:var(--mc-popover-size-border-radius, 3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:200px;max-width:var(--mc-popover-size-small-width, 200px)}.mc-popover.mc-popover_normal{max-width:400px;max-width:var(--mc-popover-size-normal-width, 400px)}.mc-popover.mc-popover_large{max-width:640px;max-width:var(--mc-popover-size-large-width, 640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(9px);margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-top,.mc-popover.mc-popover_placement-right-bottom{margin-left:calc(9px);margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(9px);margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-top,.mc-popover.mc-popover_placement-left-bottom{margin-right:calc(9px);margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:480px;max-height:var(--mc-popover-size-max-height, 480px);border-radius:3px;border-radius:var(--mc-popover-size-border-radius, 3px);overflow:hidden}.mc-popover__header{height:10px 16px;height:var(--mc-popover-header-size-height, 10px 16px);padding:10px 16px;padding:var(--mc-popover-header-size-padding, 10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:16px;padding:var(--mc-popover-size-padding, 16px)}.mc-popover__footer{box-sizing:border-box;margin-top:8px;margin-top:var(--mc-popover-footer-size-margin-top, 8px);height:56px;height:var(--mc-popover-footer-size-height, 56px);padding:12px 16px;padding:var(--mc-popover-footer-size-padding, 12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:12px;width:var(--mc-popover-size-arrow-size, 12px);height:12px;height:var(--mc-popover-size-arrow-size, 12px);border:solid 1px;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc((11px / -2));bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((11px / -2));margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc((11px / -2));bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - 9px);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc((11px / -2));bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - 9px);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc((11px / -2));left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((11px / -2));margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-right-top .mc-popover__arrow{left:calc((11px / -2));left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - 9px);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc((11px / -2));left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - 9px);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc((11px / -2));right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((11px / -2));margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-left-top .mc-popover__arrow{right:calc((11px / -2));right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - 9px);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc((11px / -2));right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - 9px);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc((11px / -2));top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((11px / -2));margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc((11px / -2));top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - 9px);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc((11px / -2));top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - 9px);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}\n"],
        encapsulation: 2,
        data: {
          animation: [_mcPopoverAnimations.popoverState]
        },
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McPopoverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mc-popover-component',
            templateUrl: './popover.component.html',
            preserveWhitespaces: false,
            styleUrls: ['./popover.scss'],
            host: {
              '(keydown.esc)': 'hide(0)'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            animations: [_mcPopoverAnimations.popoverState]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }];
        }, null);
      })();

      var _MC_POPOVER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-popover-scroll-strategy');
      /** @docs-private */


      function _mcPopoverScrollStrategyFactory(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: 20
          });
        };
      }
      /** @docs-private */


      var _MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: _MC_POPOVER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay],
        useFactory: _mcPopoverScrollStrategyFactory
      };
      /** Creates an error to be thrown if the user supplied an invalid popover position. */

      function _getMcPopoverInvalidPositionError(position) {
        return Error("McPopover position \"".concat(position, "\" is invalid."));
      }

      var _McPopoverTrigger = /*#__PURE__*/function (_ptsecurity_mosaic_co2) {
        _inherits(_McPopoverTrigger, _ptsecurity_mosaic_co2);

        var _super2 = _createSuper(_McPopoverTrigger);

        function _McPopoverTrigger(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
          var _this2;

          _classCallCheck(this, _McPopoverTrigger);

          _this2 = _super2.call(this, overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
          _this2._hasBackdrop = false;
          _this2._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Click;
          _this2._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Normal;
          _this2._closeOnScroll = false;
          _this2.backdropClass = 'cdk-overlay-transparent-backdrop';
          _this2.placementChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this2.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this2.originSelector = '.mc-popover';
          _this2.overlayConfig = {
            panelClass: 'mc-popover__panel',
            hasBackdrop: _this2.hasBackdrop,
            backdropClass: _this2.backdropClass
          };
          return _this2;
        }

        _createClass(_McPopoverTrigger, [{
          key: "popoverVisible",
          get: function get() {
            return this.visible;
          },
          set: function set(value) {
            _get(_getPrototypeOf(_McPopoverTrigger.prototype), "updateVisible", this).call(this, value);
          }
        }, {
          key: "popoverPlacement",
          get: function get() {
            return this.placement;
          },
          set: function set(value) {
            _get(_getPrototypeOf(_McPopoverTrigger.prototype), "updatePlacement", this).call(this, value);
          }
        }, {
          key: "popoverPlacementPriority",
          get: function get() {
            return this.placementPriority;
          },
          set: function set(value) {
            _get(_getPrototypeOf(_McPopoverTrigger.prototype), "updatePlacementPriority", this).call(this, value);
          }
        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
        }, {
          key: "header",
          get: function get() {
            return this._header;
          },
          set: function set(value) {
            this._header = value;
            this.updateData();
          }
        }, {
          key: "content",
          get: function get() {
            return this._content;
          },
          set: function set(value) {
            this._content = value;
            this.updateData();
          }
        }, {
          key: "footer",
          get: function get() {
            return this._footer;
          },
          set: function set(value) {
            this._footer = value;
            this.updateData();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
        }, {
          key: "trigger",
          get: function get() {
            return this._trigger;
          },
          set: function set(value) {
            if (value) {
              this._trigger = value;
            } else {
              this._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Click;
            }

            this.initListeners();
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(value) {
            if ([_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Small, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Normal, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Large].includes(value)) {
              this._size = value;
              this.updateClassMap();
            } else {
              this._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Normal;
            }
          }
        }, {
          key: "customClass",
          get: function get() {
            return this._customClass;
          },
          set: function set(value) {
            this._customClass = value;
            this.updateClassMap();
          }
        }, {
          key: "closeOnScroll",
          get: function get() {
            return this._closeOnScroll;
          },
          set: function set(value) {
            this._closeOnScroll = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
        }, {
          key: "updateData",
          value: function updateData() {
            if (!this.instance) {
              return;
            }

            this.instance.header = this.header;
            this.instance.content = this.content;
            this.instance.footer = this.footer;

            if (this.isOpen) {
              this.updatePosition(true);
            }
          }
          /** Updates the position of the current popover. */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            var reapplyPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.overlayRef = this.createOverlay();
            var position = this.overlayRef.getConfig().positionStrategy.withPositions(this.getPrioritizedPositions()).withPush(true);

            if (reapplyPosition) {
              setTimeout(function () {
                return position.reapplyLastPosition();
              });
            }
          }
        }, {
          key: "getOverlayHandleComponentType",
          value: function getOverlayHandleComponentType() {
            return _McPopoverComponent;
          }
        }, {
          key: "updateClassMap",
          value: function updateClassMap() {
            var newPlacement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.placement;

            if (!this.instance) {
              return;
            }

            this.instance.updateClassMap(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.POSITION_TO_CSS_MAP[newPlacement], this.customClass, this.size);
            this.instance.markForCheck();
          }
        }, {
          key: "closingActions",
          value: function closingActions() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this.overlayRef.backdropClick(), this.hasBackdrop ? rxjs__WEBPACK_IMPORTED_MODULE_7__.NEVER : this.overlayRef.outsidePointerEvents(), this.closeOnScroll ? this.scrollDispatcher.scrolled() : rxjs__WEBPACK_IMPORTED_MODULE_7__.NEVER, this.overlayRef.detachments());
          }
        }]);

        return _McPopoverTrigger;
      }(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.McPopUpTrigger);
      /** @nocollapse */


      _McPopoverTrigger.ɵfac = function McPopoverTrigger_Factory(t) {
        return new (t || _McPopoverTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MC_POPOVER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality, 8));
      };
      /** @nocollapse */


      _McPopoverTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _McPopoverTrigger,
        selectors: [["", "mcPopover", ""]],
        hostVars: 2,
        hostBindings: function McPopoverTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McPopoverTrigger_keydown_HostBindingHandler($event) {
              return ctx.handleKeydown($event);
            })("touchend", function McPopoverTrigger_touchend_HostBindingHandler() {
              return ctx.handleTouchend();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-popover_open", ctx.isOpen);
          }
        },
        inputs: {
          popoverVisible: ["mcPopoverVisible", "popoverVisible"],
          popoverPlacement: ["mcPopoverPlacement", "popoverPlacement"],
          popoverPlacementPriority: ["mcPopoverPlacementPriority", "popoverPlacementPriority"],
          hasBackdrop: "hasBackdrop",
          header: ["mcPopoverHeader", "header"],
          content: ["mcPopoverContent", "content"],
          footer: ["mcPopoverFooter", "footer"],
          disabled: ["mcPopoverDisabled", "disabled"],
          trigger: ["mcTrigger", "trigger"],
          size: ["mcPopoverSize", "size"],
          customClass: ["mcPopoverClass", "customClass"],
          closeOnScroll: "closeOnScroll",
          backdropClass: "backdropClass"
        },
        outputs: {
          placementChange: "mcPopoverPlacementChange",
          visibleChange: "mcPopoverVisibleChange"
        },
        exportAs: ["mcPopover"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McPopoverTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[mcPopover]',
            exportAs: 'mcPopover',
            host: {
              '[class.mc-popover_open]': 'isOpen',
              '(keydown)': 'handleKeydown($event)',
              '(touchend)': 'handleTouchend()'
            }
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MC_POPOVER_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, {
          popoverVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverVisible']
          }],
          popoverPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverPlacement']
          }],
          popoverPlacementPriority: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverPlacementPriority']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverHeader']
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverContent']
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverFooter']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcTrigger']
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverSize']
          }],
          customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mcPopoverClass']
          }],
          closeOnScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          placementChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['mcPopoverPlacementChange']
          }],
          visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['mcPopoverVisibleChange']
          }]
        });
      })();

      var _McPopoverModule = function _McPopoverModule() {
        _classCallCheck(this, _McPopoverModule);
      };
      /** @nocollapse */


      _McPopoverModule.ɵfac = function McPopoverModule_Factory(t) {
        return new (t || _McPopoverModule)();
      };
      /** @nocollapse */


      _McPopoverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _McPopoverModule
      });
      /** @nocollapse */

      _McPopoverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McPopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_McPopoverComponent, _McPopoverTrigger],
            exports: [_McPopoverComponent, _McPopoverTrigger],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule],
            providers: [_MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
            entryComponents: [_McPopoverComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    90425: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NEVER": function NEVER() {
          return (
            /* binding */
            _NEVER
          );
        },

        /* harmony export */
        "never": function never() {
          return (
            /* binding */
            _never
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      25160);
      /* harmony import */


      var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/noop */
      92941);

      var _NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);

      function _never() {
        return _NEVER;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-popover_js-es5.js.map