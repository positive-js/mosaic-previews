"use strict";
(self["webpackChunkmosaic_docs"] = self["webpackChunkmosaic_docs"] || []).push([["default-dist_mosaic_fesm2020_ptsecurity-mosaic-popover_mjs"],{

/***/ 48130:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEVER": () => (/* binding */ NEVER),
/* harmony export */   "never": () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 76882);


const NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
    return NEVER;
}


/***/ }),

/***/ 82910:
/*!************************************************************!*\
  !*** ./dist/mosaic/fesm2020/ptsecurity-mosaic-popover.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MC_POPOVER_CONFIRM_BUTTON_TEXT": () => (/* binding */ MC_POPOVER_CONFIRM_BUTTON_TEXT),
/* harmony export */   "MC_POPOVER_CONFIRM_TEXT": () => (/* binding */ MC_POPOVER_CONFIRM_TEXT),
/* harmony export */   "MC_POPOVER_SCROLL_STRATEGY": () => (/* binding */ MC_POPOVER_SCROLL_STRATEGY),
/* harmony export */   "MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER": () => (/* binding */ MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   "McPopoverComponent": () => (/* binding */ McPopoverComponent),
/* harmony export */   "McPopoverConfirmComponent": () => (/* binding */ McPopoverConfirmComponent),
/* harmony export */   "McPopoverConfirmTrigger": () => (/* binding */ McPopoverConfirmTrigger),
/* harmony export */   "McPopoverModule": () => (/* binding */ McPopoverModule),
/* harmony export */   "McPopoverTrigger": () => (/* binding */ McPopoverTrigger),
/* harmony export */   "getMcPopoverInvalidPositionError": () => (/* binding */ getMcPopoverInvalidPositionError),
/* harmony export */   "mcPopoverAnimations": () => (/* binding */ mcPopoverAnimations),
/* harmony export */   "mcPopoverScrollStrategyFactory": () => (/* binding */ mcPopoverScrollStrategyFactory)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ 25895);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 76328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ 51605);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 72867);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 62304);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 48130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 48971);

















function McPopoverComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 9);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
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
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
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
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
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
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
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
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.content);
  }
}

const _c0 = function (a0) {
  return {
    "mc-popover__content_padding_bottom": a0
  };
};

function McPopoverComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McPopoverComponent_div_3_ng_container_1_Template, 1, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McPopoverComponent_div_3_ng_container_2_Template, 3, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.footer));
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
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
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
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
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
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isTemplateRef(ctx_r2.footer));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isTemplateRef(ctx_r2.footer));
  }
}

const _c1 = "@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 10px,transparent 20px,rgba(0,0,0,.05) 20px,rgba(0,0,0,.05) 30px,transparent 30px) repeat;background-size:29px 29px;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-pane{box-sizing:border-box;position:absolute;pointer-events:auto;margin:0;padding:0;z-index:1000;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box{box-sizing:border-box;position:absolute;z-index:1000;display:flex;flex-direction:column;margin:0;padding:0;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius, 3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width, 200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width, 400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width, 640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-top,.mc-popover.mc-popover_placement-right-bottom{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-top,.mc-popover.mc-popover_placement-left-bottom{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height, 480px);border-radius:var(--mc-popover-size-border-radius, 3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height, 10px 16px);padding:var(--mc-popover-header-size-padding, 10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding, 16px)}.mc-popover__content.mc-popover__content_padding_bottom{padding-bottom:calc(var(--mc-popover-size-padding, 16px) + var(--mc-popover-footer-size-margin-top, 8px))}.mc-popover__footer{box-sizing:border-box;height:var(--mc-popover-footer-size-height, 56px);padding:var(--mc-popover-footer-size-padding, 12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size, 12px);height:var(--mc-popover-size-arrow-size, 12px);border:solid 1px;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-right-top .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-left-top .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover-confirm .mc-popover__content{padding:24px 16px 16px}.mc-popover-confirm .mc-popover__content button{margin-top:16px;display:block;margin-left:auto}\n";
const mcPopoverAnimations = {
  /** Animation that transitions a tooltip in and out. */
  popoverState: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('state', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('initial', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => visible', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  }))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('* => hidden', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('100ms linear', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    opacity: 0
  })))])
};

class McPopoverComponent extends _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.McPopUp {
  constructor(changeDetectorRef) {
    super(changeDetectorRef);
    this.prefix = 'mc-popover';
    this.isTrapFocus = false;
  }

  updateClassMap(placement, customClass, size) {
    super.updateClassMap(placement, customClass, {
      [`${this.prefix}_${size}`]: !!size
    });
  }

  updateTrapFocus(isTrapFocus) {
    this.isTrapFocus = isTrapFocus;
  }

}
/** @nocollapse */

/** @nocollapse */


McPopoverComponent.ɵfac = function McPopoverComponent_Factory(t) {
  return new (t || McPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
/** @nocollapse */

/** @nocollapse */


McPopoverComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McPopoverComponent,
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
  vars: 9,
  consts: [[1, "mc-popover", 3, "cdkTrapFocus", "cdkTrapFocusAutoCapture", "ngClass"], [1, "mc-popover__container"], ["class", "mc-popover__header", 4, "ngIf"], ["class", "mc-popover__content", 3, "ngClass", 4, "ngIf"], ["class", "mc-popover__footer", 4, "ngIf"], [1, "mc-popover__arrow"], [1, "mc-popover__header"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "mc-popover__content", 3, "ngClass"], [1, "mc-popover__footer"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McPopoverComponent_div_3_Template, 3, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, McPopoverComponent_div_4_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkTrapFocus", ctx.isTrapFocus)("cdkTrapFocusAutoCapture", ctx.isTrapFocus)("ngClass", ctx.classMap)("@state", ctx.visibility);
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
  directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.CdkTrapFocus, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
  styles: ["@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 10px,transparent 20px,rgba(0,0,0,.05) 20px,rgba(0,0,0,.05) 30px,transparent 30px) repeat;background-size:29px 29px;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-pane{box-sizing:border-box;position:absolute;pointer-events:auto;margin:0;padding:0;z-index:1000;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box{box-sizing:border-box;position:absolute;z-index:1000;display:flex;flex-direction:column;margin:0;padding:0;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius, 3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width, 200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width, 400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width, 640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-top,.mc-popover.mc-popover_placement-right-bottom{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-top,.mc-popover.mc-popover_placement-left-bottom{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height, 480px);border-radius:var(--mc-popover-size-border-radius, 3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height, 10px 16px);padding:var(--mc-popover-header-size-padding, 10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding, 16px)}.mc-popover__content.mc-popover__content_padding_bottom{padding-bottom:calc(var(--mc-popover-size-padding, 16px) + var(--mc-popover-footer-size-margin-top, 8px))}.mc-popover__footer{box-sizing:border-box;height:var(--mc-popover-footer-size-height, 56px);padding:var(--mc-popover-footer-size-padding, 12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size, 12px);height:var(--mc-popover-size-arrow-size, 12px);border:solid 1px;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-right-top .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-left-top .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover-confirm .mc-popover__content{padding:24px 16px 16px}.mc-popover-confirm .mc-popover__content button{margin-top:16px;display:block;margin-left:auto}\n"],
  encapsulation: 2,
  data: {
    animation: [mcPopoverAnimations.popoverState]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPopoverComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-popover-component',
      preserveWhitespaces: false,
      host: {
        '(keydown.esc)': 'hide(0)'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [mcPopoverAnimations.popoverState],
      template: "<div class=\"mc-popover\"\n     [cdkTrapFocus]=\"isTrapFocus\"\n     [cdkTrapFocusAutoCapture]=\"isTrapFocus\"\n     [ngClass]=\"classMap\"\n     [@state]=\"visibility\"\n     (@state.start)=\"animationStart()\"\n     (@state.done)=\"animationDone($event)\">\n\n    <div class=\"mc-popover__container\">\n        <div class=\"mc-popover__header\" *ngIf=\"header\">\n            <ng-container *ngIf=\"isTemplateRef(header)\" [ngTemplateOutlet]=\"$any(header)\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(header)\">\n                <div>{{ header }}</div>\n            </ng-container>\n        </div>\n\n        <div class=\"mc-popover__content\"\n             [ngClass]=\"{ 'mc-popover__content_padding_bottom': footer }\"\n             *ngIf=\"content\">\n            <ng-container *ngIf=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"$any(content)\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(content)\">\n                <div>{{ content }}</div>\n            </ng-container>\n        </div>\n\n        <div class=\"mc-popover__footer\" *ngIf=\"footer\">\n            <ng-container *ngIf=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"$any(footer)\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(footer)\">\n                <div>{{ footer }}</div>\n            </ng-container>\n        </div>\n    </div>\n\n    <div class=\"mc-popover__arrow\" [class.mc-popover__arrow_with-footer]=\"footer\"></div>\n</div>\n",
      styles: ["@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 10px,transparent 20px,rgba(0,0,0,.05) 20px,rgba(0,0,0,.05) 30px,transparent 30px) repeat;background-size:29px 29px;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-pane{box-sizing:border-box;position:absolute;pointer-events:auto;margin:0;padding:0;z-index:1000;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box{box-sizing:border-box;position:absolute;z-index:1000;display:flex;flex-direction:column;margin:0;padding:0;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius, 3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width, 200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width, 400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width, 640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-top,.mc-popover.mc-popover_placement-right-bottom{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-top,.mc-popover.mc-popover_placement-left-bottom{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height, 480px);border-radius:var(--mc-popover-size-border-radius, 3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height, 10px 16px);padding:var(--mc-popover-header-size-padding, 10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding, 16px)}.mc-popover__content.mc-popover__content_padding_bottom{padding-bottom:calc(var(--mc-popover-size-padding, 16px) + var(--mc-popover-footer-size-margin-top, 8px))}.mc-popover__footer{box-sizing:border-box;height:var(--mc-popover-footer-size-height, 56px);padding:var(--mc-popover-footer-size-padding, 12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size, 12px);height:var(--mc-popover-size-arrow-size, 12px);border:solid 1px;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-right-top .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-left-top .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover-confirm .mc-popover__content{padding:24px 16px 16px}.mc-popover-confirm .mc-popover__content button{margin-top:16px;display:block;margin-left:auto}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();

const MC_POPOVER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mc-popover-scroll-strategy');
/** @docs-private */

function mcPopoverScrollStrategyFactory(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: 20
  });
}
/** @docs-private */


const MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MC_POPOVER_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay],
  useFactory: mcPopoverScrollStrategyFactory
};
/** Creates an error to be thrown if the user supplied an invalid popover position. */

function getMcPopoverInvalidPositionError(position) {
  return Error(`McPopover position "${position}" is invalid.`);
}

class McPopoverTrigger extends _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.McPopUpTrigger {
  constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
    super(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
    this._hasBackdrop = false;
    this._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Click;
    this._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Normal;
    this._closeOnScroll = false;
    this.backdropClass = 'cdk-overlay-transparent-backdrop';
    this.placementChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.originSelector = '.mc-popover';
  }

  get popoverVisible() {
    return this.visible;
  }

  set popoverVisible(value) {
    super.updateVisible(value);
  }

  get popoverPlacement() {
    return this.placement;
  }

  set popoverPlacement(value) {
    super.updatePlacement(value);
  }

  get popoverPlacementPriority() {
    return this.placementPriority;
  }

  set popoverPlacementPriority(value) {
    super.updatePlacementPriority(value);
  }

  get hasBackdrop() {
    return this._hasBackdrop;
  }

  set hasBackdrop(value) {
    this._hasBackdrop = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
  }

  get header() {
    return this._header;
  }

  set header(value) {
    this._header = value;
    this.updateData();
  }

  get content() {
    return this._content;
  }

  set content(value) {
    this._content = value;
    this.updateData();
  }

  get footer() {
    return this._footer;
  }

  set footer(value) {
    this._footer = value;
    this.updateData();
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
  }

  get trigger() {
    return this._trigger;
  }

  set trigger(value) {
    if (value) {
      this._trigger = value;
    } else {
      this._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Click;
    }

    this.initListeners();
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if ([_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Small, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Normal, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Large].includes(value)) {
      this._size = value;
      this.updateClassMap();
    } else {
      this._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpSizes.Normal;
    }
  }

  get customClass() {
    return this._customClass;
  }

  set customClass(value) {
    this._customClass = value;
    this.updateClassMap();
  }

  get closeOnScroll() {
    return this._closeOnScroll;
  }

  set closeOnScroll(value) {
    this._closeOnScroll = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
  }

  get overlayConfig() {
    return {
      panelClass: 'mc-popover__panel',
      hasBackdrop: this.hasBackdrop,
      backdropClass: this.backdropClass
    };
  }

  updateData() {
    if (!this.instance) {
      return;
    }

    this.instance.header = this.header;
    this.instance.content = this.content;
    this.instance.footer = this.footer;
    this.instance.updateTrapFocus(this.trigger !== _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.PopUpTriggers.Focus);

    if (this.isOpen) {
      this.updatePosition(true);
    }
  }
  /** Updates the position of the current popover. */


  updatePosition(reapplyPosition = false) {
    this.overlayRef = this.createOverlay();
    const position = this.overlayRef.getConfig().positionStrategy.withPositions(this.getPrioritizedPositions()).withPush(true);

    if (reapplyPosition) {
      setTimeout(() => position.reapplyLastPosition());
    }
  }

  getOverlayHandleComponentType() {
    return McPopoverComponent;
  }

  updateClassMap(newPlacement = this.placement) {
    if (!this.instance) {
      return;
    }

    this.instance.updateClassMap(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.POSITION_TO_CSS_MAP[newPlacement], this.customClass, this.size);
    this.instance.markForCheck();
  }

  closingActions() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.overlayRef.backdropClick(), this.hasBackdrop ? rxjs__WEBPACK_IMPORTED_MODULE_8__.NEVER : this.overlayRef.outsidePointerEvents(), this.closeOnScroll ? this.scrollDispatcher.scrolled() : rxjs__WEBPACK_IMPORTED_MODULE_8__.NEVER, this.overlayRef.detachments());
  }

}
/** @nocollapse */

/** @nocollapse */


McPopoverTrigger.ɵfac = function McPopoverTrigger_Factory(t) {
  return new (t || McPopoverTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_POPOVER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8));
};
/** @nocollapse */

/** @nocollapse */


McPopoverTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McPopoverTrigger,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPopoverTrigger, [{
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
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_POPOVER_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
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

const MC_POPOVER_CONFIRM_TEXT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('');
const MC_POPOVER_CONFIRM_BUTTON_TEXT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('');

class McPopoverConfirmComponent extends McPopoverComponent {
  constructor(changeDetectorRef) {
    super(changeDetectorRef);
    this.themePalette = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_2__.ThemePalette;
    this.onConfirm = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  }

}
/** @nocollapse */

/** @nocollapse */


McPopoverConfirmComponent.ɵfac = function McPopoverConfirmComponent_Factory(t) {
  return new (t || McPopoverConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
/** @nocollapse */

/** @nocollapse */


McPopoverConfirmComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McPopoverConfirmComponent,
  selectors: [["mc-popover-confirm-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 5,
  consts: [["cdkTrapFocus", "true", "cdkTrapFocusAutoCapture", "true", 1, "mc-popover-confirm", "mc-popover", 3, "ngClass"], [1, "mc-popover__content"], ["mc-button", "", 3, "color", "click"], [1, "mc-popover__arrow"]],
  template: function McPopoverConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@state.start", function McPopoverConfirmComponent_Template_div_animation_state_start_0_listener() {
        return ctx.animationStart();
      })("@state.done", function McPopoverConfirmComponent_Template_div_animation_state_done_0_listener($event) {
        return ctx.animationDone($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McPopoverConfirmComponent_Template_button_click_4_listener() {
        return ctx.onConfirm.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap)("@state", ctx.visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.themePalette.Primary);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.confirmButtonText);
    }
  },
  directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_12__.McButton, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.CdkTrapFocus, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_12__.McButtonCssStyler],
  styles: [_c1],
  encapsulation: 2,
  data: {
    animation: [mcPopoverAnimations.popoverState]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPopoverConfirmComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-popover-confirm-component',
      preserveWhitespaces: false,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      animations: [mcPopoverAnimations.popoverState],
      template: "<div class=\"mc-popover-confirm mc-popover\"\n     cdkTrapFocus=\"true\"\n     cdkTrapFocusAutoCapture=\"true\"\n     [ngClass]=\"classMap\"\n     [@state]=\"visibility\"\n     (@state.start)=\"animationStart()\"\n     (@state.done)=\"animationDone($event)\">\n    <div class=\"mc-popover__content\">\n        <div>{{ confirmText }}</div>\n        <button mc-button [color]=\"themePalette.Primary\" (click)=\"onConfirm.next()\">{{confirmButtonText}}</button>\n    </div>\n\n    <div class=\"mc-popover__arrow\"></div>\n</div>\n",
      styles: ["@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 10px,transparent 20px,rgba(0,0,0,.05) 20px,rgba(0,0,0,.05) 30px,transparent 30px) repeat;background-size:29px 29px;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%;position:fixed;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{top:0;bottom:0;left:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-pane{box-sizing:border-box;position:absolute;pointer-events:auto;margin:0;padding:0;z-index:1000;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box{box-sizing:border-box;position:absolute;z-index:1000;display:flex;flex-direction:column;margin:0;padding:0;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius, 3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width, 200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width, 400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width, 640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-top,.mc-popover.mc-popover_placement-right-bottom{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-top,.mc-popover.mc-popover_placement-left-bottom{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height, 480px);border-radius:var(--mc-popover-size-border-radius, 3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height, 10px 16px);padding:var(--mc-popover-header-size-padding, 10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding, 16px)}.mc-popover__content.mc-popover__content_padding_bottom{padding-bottom:calc(var(--mc-popover-size-padding, 16px) + var(--mc-popover-footer-size-margin-top, 8px))}.mc-popover__footer{box-sizing:border-box;height:var(--mc-popover-footer-size-height, 56px);padding:var(--mc-popover-footer-size-padding, 12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size, 12px);height:var(--mc-popover-size-arrow-size, 12px);border:solid 1px;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-right-top .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:50%;margin-top:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-left-top .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc(var(--mc-popover-size-arrow-size, 11px) / -2);bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:50%;margin-left:calc(var(--mc-popover-size-arrow-size, 11px) / -2)}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc(var(--mc-popover-size-arrow-size, 11px) / -2);right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover-confirm .mc-popover__content{padding:24px 16px 16px}.mc-popover-confirm .mc-popover__content button{margin-top:16px;display:block;margin-left:auto}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, null);
})();

class McPopoverConfirmTrigger extends McPopoverTrigger {
  constructor(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction, confirmText, confirmButtonText) {
    super(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
    this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._confirmButtonText = 'Да';
    this.confirmText = confirmText || 'Вы уверены, что хотите продолжить?';
    this.confirmButtonText = confirmButtonText || 'Да';
  }

  get confirmText() {
    return this._confirmText;
  }

  set confirmText(value) {
    this._confirmText = value;
    this.updateData();
  }

  get confirmButtonText() {
    return this._confirmButtonText;
  }

  set confirmButtonText(value) {
    this._confirmButtonText = value;
    this.updateData();
  }

  updateData() {
    if (!this.instance) {
      return;
    }

    super.updateData();
    this.setupButtonEvents();
    this.instance.confirmButtonText = this.confirmButtonText;
    this.instance.confirmText = this.confirmText;
  }

  setupButtonEvents() {
    this.instance.onConfirm.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroyed)).subscribe(() => {
      this.confirm.emit();
      this.hide();
    });
  }

  getOverlayHandleComponentType() {
    return McPopoverConfirmComponent;
  }

}
/** @nocollapse */

/** @nocollapse */


McPopoverConfirmTrigger.ɵfac = function McPopoverConfirmTrigger_Factory(t) {
  return new (t || McPopoverConfirmTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_POPOVER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_POPOVER_CONFIRM_TEXT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_POPOVER_CONFIRM_BUTTON_TEXT, 8));
};
/** @nocollapse */

/** @nocollapse */


McPopoverConfirmTrigger.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McPopoverConfirmTrigger,
  selectors: [["", "mcPopoverConfirm", ""]],
  hostVars: 2,
  hostBindings: function McPopoverConfirmTrigger_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function McPopoverConfirmTrigger_keydown_HostBindingHandler($event) {
        return ctx.handleKeydown($event);
      })("touchend", function McPopoverConfirmTrigger_touchend_HostBindingHandler() {
        return ctx.handleTouchend();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-popover_open", ctx.isOpen);
    }
  },
  inputs: {
    confirmText: ["mcPopoverConfirmText", "confirmText"],
    confirmButtonText: ["mcPopoverConfirmButtonText", "confirmButtonText"]
  },
  outputs: {
    confirm: "confirm"
  },
  exportAs: ["mcPopoverConfirm"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPopoverConfirmTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mcPopoverConfirm]',
      exportAs: 'mcPopoverConfirm',
      host: {
        '[class.mc-popover_open]': 'isOpen',
        '(keydown)': 'handleKeydown($event)',
        '(touchend)': 'handleTouchend()'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_POPOVER_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_POPOVER_CONFIRM_TEXT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MC_POPOVER_CONFIRM_BUTTON_TEXT]
      }]
    }];
  }, {
    confirm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    confirmText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcPopoverConfirmText']
    }],
    confirmButtonText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mcPopoverConfirmButtonText']
    }]
  });
})();

class McPopoverModule {}
/** @nocollapse */

/** @nocollapse */


McPopoverModule.ɵfac = function McPopoverModule_Factory(t) {
  return new (t || McPopoverModule)();
};
/** @nocollapse */

/** @nocollapse */


McPopoverModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McPopoverModule
});
/** @nocollapse */

/** @nocollapse */

McPopoverModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_12__.McButtonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McPopoverModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [McPopoverComponent, McPopoverTrigger, McPopoverConfirmComponent, McPopoverConfirmTrigger],
      exports: [McPopoverComponent, McPopoverTrigger, McPopoverConfirmComponent, McPopoverConfirmTrigger],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__.OverlayModule, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_12__.McButtonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.A11yModule],
      providers: [MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
      entryComponents: [McPopoverComponent, McPopoverConfirmComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2020_ptsecurity-mosaic-popover_mjs.js.map