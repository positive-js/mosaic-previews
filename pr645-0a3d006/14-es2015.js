(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "dayX":
/*!**************************************************************************!*\
  !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-sidepanel.js ***!
  \**************************************************************************/
/*! exports provided: MC_SIDEPANEL_DATA, MC_SIDEPANEL_DEFAULT_OPTIONS, MC_SIDEPANEL_WITH_INDENT, MC_SIDEPANEL_WITH_SHADOW, McSidepanelActions, McSidepanelBody, McSidepanelClose, McSidepanelConfig, McSidepanelContainerComponent, McSidepanelFooter, McSidepanelHeader, McSidepanelModule, McSidepanelPosition, McSidepanelRef, McSidepanelService, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_SIDEPANEL_DATA", function() { return MC_SIDEPANEL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_SIDEPANEL_DEFAULT_OPTIONS", function() { return MC_SIDEPANEL_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_SIDEPANEL_WITH_INDENT", function() { return MC_SIDEPANEL_WITH_INDENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_SIDEPANEL_WITH_SHADOW", function() { return MC_SIDEPANEL_WITH_SHADOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelActions", function() { return McSidepanelActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelBody", function() { return McSidepanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelClose", function() { return McSidepanelClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelConfig", function() { return McSidepanelConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelContainerComponent", function() { return McSidepanelContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelFooter", function() { return McSidepanelFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelHeader", function() { return McSidepanelHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelModule", function() { return McSidepanelModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelPosition", function() { return McSidepanelPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelRef", function() { return McSidepanelRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McSidepanelService", function() { return McSidepanelService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return mcSidepanelTransformAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return mcSidepanelAnimations; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ "SfmH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");











/** Injection token that can be used to access the data that was passed in to a sidepanel. */






const _c0 = function (a0, a1) { return { value: a0, params: a1 }; };
function McSidepanelContainerComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "second");
} }
function McSidepanelContainerComponent_ng_template_3_Template(rf, ctx) { }
function McSidepanelHeader_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "second");
} }
const _c1 = ["*"];
const MC_SIDEPANEL_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('McSidepanelData');
var McSidepanelPosition;
(function (McSidepanelPosition) {
    McSidepanelPosition["Right"] = "right";
    McSidepanelPosition["Left"] = "left";
    McSidepanelPosition["Top"] = "top";
    McSidepanelPosition["Bottom"] = "bottom";
})(McSidepanelPosition || (McSidepanelPosition = {}));
class McSidepanelConfig {
    constructor() {
        /** Data being injected into the child component. */
        this.data = null;
        this.position = McSidepanelPosition.Right;
        /** Whether the sidepanel has a backdrop. */
        this.hasBackdrop = true;
        /** When we open multiple sidepanels, backdrop appears only once, except cases then this flag is true. */
        this.requiredBackdrop = false;
        /** Whether the user can use escape or clicking outside to close the sidepanel. */
        this.disableClose = false;
        /** Custom class for the overlay pane. */
        this.overlayPanelClass = '';
    }
}

var McSidepanelAnimationState;
(function (McSidepanelAnimationState) {
    McSidepanelAnimationState["Void"] = "void";
    McSidepanelAnimationState["Visible"] = "visible";
    McSidepanelAnimationState["Hidden"] = "hidden";
})(McSidepanelAnimationState || (McSidepanelAnimationState = {}));
// TODO Find a way to use dynamic keys and avoid error "Expression form not supported."
// tslint:disable-next-line
const mcSidepanelTransformAnimation = {
    right: { in: 'translateX(100%)', out: 'translateX(0%)' },
    left: { in: 'translateX(-100%)', out: 'translateX(0%)' },
    top: { in: 'translateY(-100%)', out: 'translateY(0%)' },
    bottom: { in: 'translateY(100%)', out: 'translateY(0%)' }
};
const mcSidepanelAnimations = {
    sidepanelState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('state', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: '{{transformIn}}' }), { params: { transformIn: mcSidepanelTransformAnimation[McSidepanelPosition.Right].in } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: '{{transformOut}}' }), { params: { transformOut: mcSidepanelTransformAnimation[McSidepanelPosition.Right].out } }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('visible => void, visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(`200ms ${_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["AnimationCurves"].AccelerationCurve}`)),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(`200ms ${_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["AnimationCurves"].DecelerationCurve}`))
    ])
};

// Counter for unique sidepanel ids.
let uniqueId = 0;
class McSidepanelRef {
    constructor(containerInstance, overlayRef, config) {
        this.containerInstance = containerInstance;
        this.overlayRef = overlayRef;
        this.config = config;
        /** Subject for notifying the user that the sidepanel has been closed and dismissed. */
        this.afterClosed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** Subject for notifying the user that the sidepanel has opened and appeared. */
        this.afterOpened$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.id = this.config.id || `mc-sidepanel-${uniqueId++}`;
        this.containerInstance.id = this.id;
        // Emit when opening animation completes
        containerInstance.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event.phaseName === 'done' && event.toState === McSidepanelAnimationState.Visible), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(() => {
            this.afterOpened$.next();
            this.afterOpened$.complete();
        });
        // Dispose overlay when closing animation is complete
        containerInstance.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event.phaseName === 'done' && event.toState === McSidepanelAnimationState.Hidden), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(() => {
            overlayRef.dispose();
            this.afterClosed$.next(this.result);
            this.afterClosed$.complete();
        });
        if (!containerInstance.sidepanelConfig.disableClose) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(overlayRef.backdropClick(), overlayRef.keydownEvents().pipe(
            // tslint:disable:deprecation
            // keyCode is deprecated, but IE11 and Edge don't support code property, which we need use instead
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ESCAPE"]))).subscribe(() => this.close());
        }
    }
    close(result) {
        if (!this.afterClosed$.closed) {
            // Transition the backdrop in parallel to the sidepanel.
            this.containerInstance.animationStateChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event.phaseName === 'done'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(() => this.overlayRef.detachBackdrop());
            this.result = result;
            this.containerInstance.exit();
        }
    }
    /** Gets an observable that is notified when the sidepanel is finished closing. */
    afterClosed() {
        return this.afterClosed$.asObservable();
    }
    /** Gets an observable that is notified when the sidepanel has opened and appeared. */
    afterOpened() {
        return this.afterOpened$.asObservable();
    }
}

const MC_SIDEPANEL_WITH_INDENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mc-sidepanel-with-indent');
const MC_SIDEPANEL_WITH_SHADOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mc-sidepanel-with-shadow');
class McSidepanelContainerComponent extends _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["BasePortalOutlet"] {
    constructor(elementRef, changeDetectorRef, sidepanelConfig, withIndent, withShadow) {
        super();
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.sidepanelConfig = sidepanelConfig;
        this.withIndent = withIndent;
        this.withShadow = withShadow;
        /** The state of the sidepanel animations. */
        this.animationState = McSidepanelAnimationState.Void;
        /** Emits whenever the state of the animation changes. */
        this.animationStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    /** Attach a component portal as content to this sidepanel container. */
    attachComponentPortal(portal) {
        this.validatePortalAttached();
        this.setAnimation();
        this.setPanelClass();
        return this.portalOutlet.attachComponentPortal(portal);
    }
    /** Attach a template portal as content to this sidepanel container. */
    attachTemplatePortal(portal) {
        this.validatePortalAttached();
        this.setAnimation();
        this.setPanelClass();
        return this.portalOutlet.attachTemplatePortal(portal);
    }
    /** Begin animation of the sidepanel entrance into view. */
    enter() {
        if (!this.destroyed) {
            this.animationState = McSidepanelAnimationState.Visible;
            this.changeDetectorRef.detectChanges();
        }
    }
    /** Begin animation of the sidepanel exiting from view. */
    exit() {
        if (!this.destroyed) {
            this.animationState = McSidepanelAnimationState.Hidden;
            this.changeDetectorRef.markForCheck();
        }
    }
    onAnimation(event) {
        this.animationStateChanged.emit(event);
    }
    setAnimation() {
        const position = this.sidepanelConfig.position;
        this.animationTransform = {
            transformIn: mcSidepanelTransformAnimation[position].in,
            transformOut: mcSidepanelTransformAnimation[position].out
        };
    }
    setPanelClass() {
        const element = this.elementRef.nativeElement;
        const position = this.sidepanelConfig.position;
        element.classList.add(`mc-sidepanel-container_${position}`);
        if (this.withShadow) {
            element.classList.add('mc-sidepanel-container_shadowed');
        }
    }
    validatePortalAttached() {
        if (this.portalOutlet.hasAttached()) {
            throw Error('Attempting to attach sidepanel content after content is already attached');
        }
    }
}
McSidepanelContainerComponent.ɵfac = function McSidepanelContainerComponent_Factory(t) { return new (t || McSidepanelContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McSidepanelConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_SIDEPANEL_WITH_INDENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MC_SIDEPANEL_WITH_SHADOW)); };
McSidepanelContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: McSidepanelContainerComponent, selectors: [["mc-sidepanel-container"]], viewQuery: function McSidepanelContainerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["CdkPortalOutlet"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.portalOutlet = _t.first);
    } }, hostAttrs: ["role", "dialog", "aria-modal", "true", 1, "mc-sidepanel-container"], hostVars: 6, hostBindings: function McSidepanelContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@state.start", function McSidepanelContainerComponent_animation_state_start_HostBindingHandler($event) { return ctx.onAnimation($event); })("@state.done", function McSidepanelContainerComponent_animation_state_done_HostBindingHandler($event) { return ctx.onAnimation($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("tabindex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.animationState, ctx.animationTransform));
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 1, consts: [[1, "mc-sidepanel-wrapper"], ["class", "mc-sidepanel-indent mc-button_transparent", "mc-button", "", "mcSidepanelClose", "", 4, "ngIf"], [1, "mc-sidepanel-content"], ["cdkPortalOutlet", ""], ["mc-button", "", "mcSidepanelClose", "", 1, "mc-sidepanel-indent", "mc-button_transparent"], ["mc-icon", "mc-close-L_16", 1, "mc-icon", "mc-icon_light", 3, "color"]], template: function McSidepanelContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McSidepanelContainerComponent_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, McSidepanelContainerComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.withIndent);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["CdkPortalOutlet"], McSidepanelClose, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconCSSStyler"]]; }, styles: [".mc-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mc-sidepanel-container{outline:none;display:flex;flex:1;position:fixed;min-height:0}.mc-sidepanel-container .flex{min-height:0}.mc-sidepanel-container_left,.mc-sidepanel-container_right{width:33%;min-width:400px;height:100%;top:0}.mc-sidepanel-container_left .mc-sidepanel-indent,.mc-sidepanel-container_right .mc-sidepanel-indent{width:16px;height:100%}.mc-sidepanel-container_right{right:0;transform:translateX(100%)}.mc-sidepanel-container_right .mc-sidepanel-wrapper{flex-direction:row}.mc-sidepanel-container_left{left:0;transform:translateX(-100%)}.mc-sidepanel-container_left .mc-sidepanel-wrapper{flex-direction:row-reverse}.mc-sidepanel-container_bottom,.mc-sidepanel-container_top{flex-direction:column;height:33%;min-height:400px;width:100%;left:0}.mc-sidepanel-container_bottom .mc-sidepanel-indent,.mc-sidepanel-container_top .mc-sidepanel-indent{height:16px;width:100%}.mc-sidepanel-container_top{top:0;transform:translateY(-100%)}.mc-sidepanel-container_top .mc-sidepanel-wrapper{flex-direction:column-reverse}.mc-sidepanel-container_bottom{bottom:0;transform:translateY(100%)}.mc-sidepanel-container_bottom .mc-sidepanel-wrapper{flex-direction:column}.mc-sidepanel-wrapper{display:flex;flex:1;min-height:0;width:100%}.mc-sidepanel-indent{display:flex;flex:0 0 auto}.mc-sidepanel-indent .mc-sidepanel-close{width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;background:transparent;padding:0}.mc-sidepanel-content{display:flex;flex-direction:column;flex:1;min-height:0;width:100%}.mc-sidepanel-header{padding:var(--mc-sidepanel-header-size-padding,14px 16px);display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 auto}.mc-sidepanel-header .mc-sidepanel-close{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;background:transparent;padding:var(--mc-sidepanel-header-size-close-padding,0 0 0 8px)}.mc-sidepanel-title{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mc-sidepanel-body{overflow-y:auto;display:flex;flex:1;flex-direction:column;min-height:0}.mc-sidepanel-footer{padding:var(--mc-sidepanel-footer-size-padding,16px);display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 auto}.mc-sidepanel-footer .mc-sidepanel-actions{display:flex;align-items:center;flex-direction:row;flex:1}.mc-sidepanel-footer .mc-sidepanel-actions[align=left]{justify-content:start}.mc-sidepanel-footer .mc-sidepanel-actions[align=right]{justify-content:flex-end}.mc-sidepanel-footer button+button{margin-left:16px}"], encapsulation: 2, data: { animation: [mcSidepanelAnimations.sidepanelState] }, changeDetection: 0 });
/** @nocollapse */
McSidepanelContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: McSidepanelConfig },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MC_SIDEPANEL_WITH_INDENT,] }] },
    { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MC_SIDEPANEL_WITH_SHADOW,] }] }
];
McSidepanelContainerComponent.propDecorators = {
    portalOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["CdkPortalOutlet"], { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-sidepanel-container',
                template: "<div class=\"mc-sidepanel-wrapper\">\n\n    <button *ngIf=\"withIndent\"\n            class=\"mc-sidepanel-indent mc-button_transparent\"\n            mc-button\n            mcSidepanelClose>\n        <i mc-icon=\"mc-close-L_16\" class=\"mc-icon mc-icon_light\" [color]=\"'second'\"></i>\n    </button>\n\n    <div class=\"mc-sidepanel-content\">\n        <ng-template cdkPortalOutlet></ng-template>\n    </div>\n</div>\n\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                animations: [mcSidepanelAnimations.sidepanelState],
                host: {
                    class: 'mc-sidepanel-container',
                    role: 'dialog',
                    'aria-modal': 'true',
                    '[attr.id]': 'id',
                    '[attr.tabindex]': '-1',
                    '[@state]': `{
            value: animationState,
            params: animationTransform
        }`,
                    '(@state.start)': 'onAnimation($event)',
                    '(@state.done)': 'onAnimation($event)'
                },
                styles: [".mc-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mc-sidepanel-container{outline:none;display:flex;flex:1;position:fixed;min-height:0}.mc-sidepanel-container .flex{min-height:0}.mc-sidepanel-container_left,.mc-sidepanel-container_right{width:33%;min-width:400px;height:100%;top:0}.mc-sidepanel-container_left .mc-sidepanel-indent,.mc-sidepanel-container_right .mc-sidepanel-indent{width:16px;height:100%}.mc-sidepanel-container_right{right:0;transform:translateX(100%)}.mc-sidepanel-container_right .mc-sidepanel-wrapper{flex-direction:row}.mc-sidepanel-container_left{left:0;transform:translateX(-100%)}.mc-sidepanel-container_left .mc-sidepanel-wrapper{flex-direction:row-reverse}.mc-sidepanel-container_bottom,.mc-sidepanel-container_top{flex-direction:column;height:33%;min-height:400px;width:100%;left:0}.mc-sidepanel-container_bottom .mc-sidepanel-indent,.mc-sidepanel-container_top .mc-sidepanel-indent{height:16px;width:100%}.mc-sidepanel-container_top{top:0;transform:translateY(-100%)}.mc-sidepanel-container_top .mc-sidepanel-wrapper{flex-direction:column-reverse}.mc-sidepanel-container_bottom{bottom:0;transform:translateY(100%)}.mc-sidepanel-container_bottom .mc-sidepanel-wrapper{flex-direction:column}.mc-sidepanel-wrapper{display:flex;flex:1;min-height:0;width:100%}.mc-sidepanel-indent{display:flex;flex:0 0 auto}.mc-sidepanel-indent .mc-sidepanel-close{width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;background:transparent;padding:0}.mc-sidepanel-content{display:flex;flex-direction:column;flex:1;min-height:0;width:100%}.mc-sidepanel-header{padding:var(--mc-sidepanel-header-size-padding,14px 16px);display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 auto}.mc-sidepanel-header .mc-sidepanel-close{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;background:transparent;padding:var(--mc-sidepanel-header-size-close-padding,0 0 0 8px)}.mc-sidepanel-title{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mc-sidepanel-body{overflow-y:auto;display:flex;flex:1;flex-direction:column;min-height:0}.mc-sidepanel-footer{padding:var(--mc-sidepanel-footer-size-padding,16px);display:flex;flex-flow:row nowrap;justify-content:space-between;align-items:center;flex:0 0 auto}.mc-sidepanel-footer .mc-sidepanel-actions{display:flex;align-items:center;flex-direction:row;flex:1}.mc-sidepanel-footer .mc-sidepanel-actions[align=left]{justify-content:start}.mc-sidepanel-footer .mc-sidepanel-actions[align=right]{justify-content:flex-end}.mc-sidepanel-footer button+button{margin-left:16px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: McSidepanelConfig }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MC_SIDEPANEL_WITH_INDENT]
            }] }, { type: Boolean, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MC_SIDEPANEL_WITH_SHADOW]
            }] }]; }, { portalOutlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["CdkPortalOutlet"], { static: true }]
        }] }); })();

/** Injection token that can be used to specify default sidepanel options. */
const MC_SIDEPANEL_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mc-sidepanel-default-options');
class McSidepanelService {
    constructor(overlay, injector, defaultOptions, parentSidepanelService) {
        this.overlay = overlay;
        this.injector = injector;
        this.defaultOptions = defaultOptions;
        this.parentSidepanelService = parentSidepanelService;
        this.openedSidepanelsAtThisLevel = [];
    }
    /** Keeps track of the currently-open sidepanels. */
    get openedSidepanels() {
        return this.parentSidepanelService ? this.parentSidepanelService.openedSidepanels :
            this.openedSidepanelsAtThisLevel;
    }
    ngOnDestroy() {
        // Only close the sidepanels at this level on destroy
        // since the parent service may still be active.
        this.closeSidepanels(this.openedSidepanelsAtThisLevel);
    }
    open(componentOrTemplateRef, config) {
        const fullConfig = Object.assign(Object.assign({}, (this.defaultOptions || new McSidepanelConfig())), config);
        if (fullConfig.id && this.getSidepanelById(fullConfig.id)) {
            throw Error(`Sidepanel with id "${fullConfig.id}" exists already. The sidepanel id must be unique.`);
        }
        const overlayRef = this.createOverlay(fullConfig);
        const container = this.attachContainer(overlayRef, fullConfig);
        const ref = new McSidepanelRef(container, overlayRef, fullConfig);
        if (componentOrTemplateRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            container.attachTemplatePortal(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["TemplatePortal"](componentOrTemplateRef, null, {
                $implicit: fullConfig.data,
                sidepanelRef: ref
            }));
        }
        else {
            const injector = this.createInjector(fullConfig, ref, container);
            const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["ComponentPortal"](componentOrTemplateRef, undefined, injector);
            const contentRef = container.attachComponentPortal(portal);
            ref.instance = contentRef.instance;
        }
        this.openedSidepanels.push(ref);
        ref.afterClosed().subscribe(() => this.removeOpenSidepanel(ref));
        container.enter();
        return ref;
    }
    /**
     * Closes all of the currently-open sidepanels.
     */
    closeAll() {
        this.closeSidepanels(this.openedSidepanels);
    }
    /**
     * Finds an open sidepanel by its id.
     * @param id ID to use when looking up the sidepanel.
     */
    getSidepanelById(id) {
        return this.openedSidepanels.find((sidepanel) => sidepanel.id === id);
    }
    /**
     * Attaches the sidepanel container component to the overlay.
     */
    attachContainer(overlayRef, config) {
        const openedSidepanelsWithSamePosition = this.getOpenedSidepanelsWithSamePosition(config);
        // tslint:disable-next-line:deprecation
        const injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalInjector"](this.injector, new WeakMap([
            [McSidepanelConfig, config],
            [MC_SIDEPANEL_WITH_INDENT, openedSidepanelsWithSamePosition.length >= 1],
            [MC_SIDEPANEL_WITH_SHADOW, openedSidepanelsWithSamePosition.length < 2] // tslint:disable-line
        ]));
        const containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["ComponentPortal"](McSidepanelContainerComponent, undefined, injector);
        const containerRef = overlayRef.attach(containerPortal);
        return containerRef.instance;
    }
    /**
     * Creates a custom injector to be used inside the sidepanel. This allows a component loaded inside
     * of a sidepanel to close itself and, optionally, to return a value.
     * @param config Config object that is used to construct the sidepanel.
     * @param sidepanelRef Reference to the sidepanel.
     * @param sidepanelContainer Sidepanel container element that wraps all of the contents.
     * @returns The custom injector that can be used inside the sidepanel.
     */
    createInjector(config, sidepanelRef, 
    // tslint:disable-next-line:deprecation
    sidepanelContainer) {
        // The McSidepanelContainerComponent is injected in the portal as the McSidepanelContainerComponent and
        // the sidepanel's content are created out of the same ViewContainerRef and as such, are siblings for injector
        // purposes. To allow the hierarchy that is expected, the McSidepanelContainerComponent is explicitly
        // added to the injection tokens.
        const injectionTokens = new WeakMap([
            [McSidepanelContainerComponent, sidepanelContainer],
            [MC_SIDEPANEL_DATA, config.data],
            [McSidepanelRef, sidepanelRef]
        ]);
        // tslint:disable-next-line:deprecation
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalInjector"](this.injector, injectionTokens);
    }
    /**
     * Creates a new overlay and places it in the correct location.
     * @param config The user-specified sidepanel config.
     */
    createOverlay(config) {
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayConfig"]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: this.getBackdropClass(config),
            maxWidth: '100%',
            panelClass: config.overlayPanelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: this.overlay.position().global()
        });
        return this.overlay.create(overlayConfig);
    }
    closeSidepanels(sidepanels) {
        const reversedOpenedSidepanels = [...sidepanels.reverse()];
        reversedOpenedSidepanels.forEach((sidepanelRef) => {
            sidepanelRef.close();
        });
    }
    getBackdropClass(config) {
        const hasOpenedSidepanelWithBackdrop = this.openedSidepanels.some((sidepanelRef) => sidepanelRef.config.hasBackdrop);
        return config.requiredBackdrop || !hasOpenedSidepanelWithBackdrop ? 'cdk-overlay-dark-backdrop' :
            'cdk-overlay-transparent-backdrop';
    }
    getOpenedSidepanelsWithSamePosition(config) {
        return this.openedSidepanels.filter((sidepanelRef) => sidepanelRef.config.position === config.position);
    }
    /**
     * Removes a sidepanel from the array of open sidepanels.
     * @param sidepanelRef Sidepanel to be removed.
     */
    removeOpenSidepanel(sidepanelRef) {
        const index = this.openedSidepanels.indexOf(sidepanelRef);
        if (index > -1) {
            this.openedSidepanels.splice(index, 1);
        }
    }
}
McSidepanelService.ɵfac = function McSidepanelService_Factory(t) { return new (t || McSidepanelService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MC_SIDEPANEL_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](McSidepanelService, 12)); };
McSidepanelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: McSidepanelService, factory: McSidepanelService.ɵfac });
/** @nocollapse */
McSidepanelService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: McSidepanelConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MC_SIDEPANEL_DEFAULT_OPTIONS,] }] },
    { type: McSidepanelService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: McSidepanelConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MC_SIDEPANEL_DEFAULT_OPTIONS]
            }] }, { type: McSidepanelService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();

/**
 * Button that will close the current sidepanel.
 */
class McSidepanelClose {
    constructor(sidepanelRef, elementRef, sidepanelService) {
        this.sidepanelRef = sidepanelRef;
        this.elementRef = elementRef;
        this.sidepanelService = sidepanelService;
    }
    ngOnInit() {
        if (!this.sidepanelRef) {
            // When this directive is included in a sidepanel via TemplateRef (rather than being
            // in a Component), the SidepanelRef isn't available via injection because embedded
            // views cannot be given a custom injector. Instead, we look up the SidepanelRef by
            // ID.
            // This must occur in `onInit`, as the ID binding for the sidepanel container won't
            // be resolved at constructor time. We use setTimeout by same reason.
            setTimeout(() => {
                this.sidepanelRef = getClosestSidepanel(this.elementRef, this.sidepanelService.openedSidepanels);
            });
        }
    }
    ngOnChanges(changes) {
        const proxiedChange = changes.mcSidepanelClose || changes.sidepanelResult;
        if (proxiedChange) {
            this.sidepanelResult = proxiedChange.currentValue;
        }
    }
}
McSidepanelClose.ɵfac = function McSidepanelClose_Factory(t) { return new (t || McSidepanelClose)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McSidepanelRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McSidepanelService)); };
McSidepanelClose.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: McSidepanelClose, selectors: [["button", "mc-sidepanel-close", ""], ["button", "mcSidepanelClose", ""]], hostAttrs: [1, "mc-sidepanel-close"], hostBindings: function McSidepanelClose_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function McSidepanelClose_click_HostBindingHandler() { return ctx.sidepanelRef.close(ctx.sidepanelResult); });
    } }, inputs: { sidepanelResult: ["mc-sidepanel-close", "sidepanelResult"], mcSidepanelClose: "mcSidepanelClose" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
McSidepanelClose.ctorParameters = () => [
    { type: McSidepanelRef, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: McSidepanelService }
];
McSidepanelClose.propDecorators = {
    sidepanelResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mc-sidepanel-close',] }],
    mcSidepanelClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mcSidepanelClose',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelClose, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mc-sidepanel-close], button[mcSidepanelClose]',
                host: {
                    '(click)': 'sidepanelRef.close(sidepanelResult)',
                    class: 'mc-sidepanel-close'
                }
            }]
    }], function () { return [{ type: McSidepanelRef, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: McSidepanelService }]; }, { sidepanelResult: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mc-sidepanel-close']
        }], mcSidepanelClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['mcSidepanelClose']
        }] }); })();
/**
 * Header of a sidepanel.
 */
class McSidepanelHeader {
}
McSidepanelHeader.ɵfac = function McSidepanelHeader_Factory(t) { return new (t || McSidepanelHeader)(); };
McSidepanelHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: McSidepanelHeader, selectors: [["mc-sidepanel-header"]], hostAttrs: [1, "mc-sidepanel-header"], inputs: { closeable: "closeable" }, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[1, "mc-sidepanel-title"], ["mc-sidepanel-close", "", 4, "ngIf"], ["mc-sidepanel-close", ""], [1, "mc-sidepanel-close-x"], ["mc-icon", "mc-close-L_16", 1, "mc-icon", "mc-icon_light", 3, "color"]], template: function McSidepanelHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, McSidepanelHeader_button_2_Template, 3, 1, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.closeable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], McSidepanelClose, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconCSSStyler"]], encapsulation: 2 });
McSidepanelHeader.propDecorators = {
    closeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mc-sidepanel-header',
                template: `
        <div class="mc-sidepanel-title">
            <ng-content></ng-content>
        </div>
        <button *ngIf="closeable" mc-sidepanel-close>
            <span class="mc-sidepanel-close-x">
                <i mc-icon="mc-close-L_16" class="mc-icon mc-icon_light" [color]="'second'"></i>
            </span>
        </button>
    `,
                host: {
                    class: 'mc-sidepanel-header'
                }
            }]
    }], null, { closeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/**
 * Scrollable content container of a sidepanel.
 */
class McSidepanelBody {
}
McSidepanelBody.ɵfac = function McSidepanelBody_Factory(t) { return new (t || McSidepanelBody)(); };
McSidepanelBody.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: McSidepanelBody, selectors: [["mc-sidepanel-body"], ["", "mc-sidepanel-body", ""], ["mcSidepanelBody"]], hostAttrs: [1, "mc-sidepanel-body"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mc-sidepanel-body, [mc-sidepanel-body], mcSidepanelBody',
                host: {
                    class: 'mc-sidepanel-body'
                }
            }]
    }], null, null); })();
/**
 * Footer of a sidepanel.
 */
class McSidepanelFooter {
}
McSidepanelFooter.ɵfac = function McSidepanelFooter_Factory(t) { return new (t || McSidepanelFooter)(); };
McSidepanelFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: McSidepanelFooter, selectors: [["mc-sidepanel-footer"], ["", "mc-sidepanel-footer", ""], ["mcSidepanelFooter"]], hostAttrs: [1, "mc-sidepanel-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mc-sidepanel-footer, [mc-sidepanel-footer], mcSidepanelFooter',
                host: {
                    class: 'mc-sidepanel-footer'
                }
            }]
    }], null, null); })();
/**
 * Actions block of a sidepanel footer.
 */
class McSidepanelActions {
}
McSidepanelActions.ɵfac = function McSidepanelActions_Factory(t) { return new (t || McSidepanelActions)(); };
McSidepanelActions.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: McSidepanelActions, selectors: [["mc-sidepanel-actions"], ["", "mc-sidepanel-actions", ""], ["mcSidepanelActions"]], hostAttrs: [1, "mc-sidepanel-actions"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mc-sidepanel-actions, [mc-sidepanel-actions], mcSidepanelActions',
                host: {
                    class: 'mc-sidepanel-actions'
                }
            }]
    }], null, null); })();
/**
 * Finds the closest McSidepanelRef to an element by looking at the DOM.
 * @param element Element relative to which to look for a sidepanel.
 * @param openSidepanels References to the currently-open sidepanels.
 */
function getClosestSidepanel(element, openSidepanels) {
    let parent = element.nativeElement.parentElement;
    while (parent && !parent.classList.contains('mc-sidepanel-container')) {
        parent = parent.parentElement;
    }
    return parent ? openSidepanels.find((sidepanel) => sidepanel.id === parent.id) : null;
}

class McSidepanelModule {
}
McSidepanelModule.ɵfac = function McSidepanelModule_Factory(t) { return new (t || McSidepanelModule)(); };
McSidepanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: McSidepanelModule });
McSidepanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [McSidepanelService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
            _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McCommonModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](McSidepanelModule, { declarations: function () { return [McSidepanelContainerComponent, McSidepanelClose, McSidepanelHeader, McSidepanelBody, McSidepanelFooter, McSidepanelActions]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
        _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McCommonModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconModule"]]; }, exports: function () { return [McSidepanelContainerComponent, McSidepanelClose, McSidepanelHeader, McSidepanelBody, McSidepanelFooter, McSidepanelActions]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSidepanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
                    _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McCommonModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_9__["McIconModule"]
                ],
                providers: [McSidepanelService],
                declarations: [
                    McSidepanelContainerComponent,
                    McSidepanelClose,
                    McSidepanelHeader,
                    McSidepanelBody,
                    McSidepanelFooter,
                    McSidepanelActions
                ],
                entryComponents: [McSidepanelContainerComponent],
                exports: [
                    McSidepanelContainerComponent,
                    McSidepanelClose,
                    McSidepanelHeader,
                    McSidepanelBody,
                    McSidepanelFooter,
                    McSidepanelActions
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ "o9tM":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-sidepanel.js ***!
  \**********************************************************************************************************/
/*! exports provided: SidepanelComponentExample, SidepanelExampleCustomComponent, SidepanelExamplesModule, SidepanelOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelComponentExample", function() { return SidepanelComponentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelExampleCustomComponent", function() { return SidepanelExampleCustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelExamplesModule", function() { return SidepanelExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidepanelOverviewExample", function() { return SidepanelOverviewExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/sidepanel */ "dayX");










function SidepanelExampleCustomComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r2 + 1, " ");
} }
/**
 * @title Template Modal
 */
class SidepanelComponentExample {
    constructor(sidepanelService) {
        this.sidepanelService = sidepanelService;
    }
    openComponentSidepanel() {
        this.sidepanelService.open(SidepanelExampleCustomComponent, {
            position: _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelPosition"].Right,
            data: {
                openComponentSidepanel: () => { this.openComponentSidepanel(); }
            }
        });
    }
}
SidepanelComponentExample.ɵfac = function SidepanelComponentExample_Factory(t) { return new (t || SidepanelComponentExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelService"])); };
SidepanelComponentExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidepanelComponentExample, selectors: [["sidepanel-component-example"]], decls: 3, vars: 1, consts: [["mc-button", "", 3, "color", "click"]], template: function SidepanelComponentExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidepanelComponentExample_Template_button_click_0_listener() { return ctx.openComponentSidepanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Open component sidepanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonCssStyler"]], styles: [".sidepanel-container{display:flex;flex-direction:column}.layout-padding,.layout-padding>*{padding:8px}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidepanelComponentExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sidepanel-component-example',
                templateUrl: 'sidepanel-component-example.html',
                styleUrls: ['sidepanel-component-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelService"] }]; }, null); })();
class SidepanelExampleCustomComponent {
    constructor(data) {
        this.data = data;
        this.array = new Array(60); // tslint:disable-line
        this.openComponentSidepanel = data.openComponentSidepanel;
    }
}
SidepanelExampleCustomComponent.ɵfac = function SidepanelExampleCustomComponent_Factory(t) { return new (t || SidepanelExampleCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["MC_SIDEPANEL_DATA"])); };
SidepanelExampleCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidepanelExampleCustomComponent, selectors: [["example-sidepanel"]], hostAttrs: [1, "layout-column", "flex", "sidepanel-container"], decls: 14, vars: 4, consts: [[3, "closeable"], [1, "layout-padding"], [1, "mc-subheading"], [4, "ngFor", "ngForOf"], ["align", "right"], ["mc-button", "", 3, "color", "click"], ["mc-button", "", "mc-sidepanel-close", "", 3, "color"]], template: function SidepanelExampleCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-sidepanel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sidepanel Component Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-sidepanel-body", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sidepanel Component Body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidepanelExampleCustomComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-sidepanel-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-sidepanel-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidepanelExampleCustomComponent_Template_button_click_8_listener() { return ctx.openComponentSidepanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Open another sidepanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.array);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");
    } }, directives: [_ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelHeader"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelBody"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelFooter"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelActions"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonCssStyler"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelClose"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidepanelExampleCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'example-sidepanel',
                template: `
    <mc-sidepanel-header [closeable]="true">
        Sidepanel Component Content
    </mc-sidepanel-header>
    <mc-sidepanel-body class="layout-padding">
        <div class="mc-subheading">Sidepanel Component Body</div>

        <div *ngFor="let item of array; index as i">
            {{ i + 1 }}
        </div>
    </mc-sidepanel-body>
    <mc-sidepanel-footer>
        <mc-sidepanel-actions align="right">
            <button mc-button [color]="'primary'" (click)="openComponentSidepanel()">
                <span>Open another sidepanel</span>
            </button>

            <button mc-button [color]="'second'" mc-sidepanel-close>
                <span>Close</span>
            </button>
        </mc-sidepanel-actions>
    </mc-sidepanel-footer>`,
                host: {
                    class: 'layout-column flex sidepanel-container'
                }
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["MC_SIDEPANEL_DATA"]]
            }] }]; }, null); })();

function SidepanelOverviewExample_ng_template_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r3 + 1, " ");
} }
function SidepanelOverviewExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-sidepanel-header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Sidepanel Template Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-sidepanel-body", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sidepanel Template Body");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidepanelOverviewExample_ng_template_3_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-sidepanel-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-sidepanel-actions", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidepanelOverviewExample_ng_template_3_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.openTemplateSidepanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Open another sidepanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-sidepanel-actions", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidepanelOverviewExample_ng_template_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.openTemplateSidepanel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Open another sidepanel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.array);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");
} }
/**
 * @title Template Modal
 */
class SidepanelOverviewExample {
    constructor(sidepanelService) {
        this.sidepanelService = sidepanelService;
        this.arrayLength = 40;
        this.array = new Array(this.arrayLength); // tslint:disable-line
    }
    openTemplateSidepanel() {
        this.sidepanelService.open(this.template, {
            position: _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelPosition"].Bottom
        });
    }
}
SidepanelOverviewExample.ɵfac = function SidepanelOverviewExample_Factory(t) { return new (t || SidepanelOverviewExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelService"])); };
SidepanelOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidepanelOverviewExample, selectors: [["sidepanel-overview-example"]], viewQuery: function SidepanelOverviewExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
    } }, decls: 4, vars: 1, consts: [["mc-button", "", 1, "template-button", 3, "color", "click"], [3, "closeable"], [1, "layout-padding"], [1, "mc-subheading"], [4, "ngFor", "ngForOf"], ["align", "left"], ["mc-button", "", 3, "color", "click"], ["align", "right"], ["mc-button", "", "mc-sidepanel-close", "", 3, "color"]], template: function SidepanelOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidepanelOverviewExample_Template_button_click_0_listener() { return ctx.openTemplateSidepanel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Open template sidepanel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidepanelOverviewExample_ng_template_3_Template, 18, 5, "ng-template");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonCssStyler"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelHeader"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelBody"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelFooter"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelActions"], _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelClose"]], styles: [".layout-padding,.layout-padding>*{padding:8px}"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidepanelOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'sidepanel-overview-example',
                templateUrl: 'sidepanel-overview-example.html',
                styleUrls: ['sidepanel-overview-example.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelService"] }]; }, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], { static: false }]
        }] }); })();

const EXAMPLES = [
    SidepanelOverviewExample,
    SidepanelComponentExample,
    SidepanelExampleCustomComponent
];
class SidepanelExamplesModule {
}
SidepanelExamplesModule.ɵfac = function SidepanelExamplesModule_Factory(t) { return new (t || SidepanelExamplesModule)(); };
SidepanelExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SidepanelExamplesModule });
SidepanelExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
            _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SidepanelExamplesModule, { declarations: [SidepanelOverviewExample,
        SidepanelComponentExample,
        SidepanelExampleCustomComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
        _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelModule"]], exports: [SidepanelOverviewExample,
        SidepanelComponentExample,
        SidepanelExampleCustomComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidepanelExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"],
                    _ptsecurity_mosaic_sidepanel__WEBPACK_IMPORTED_MODULE_4__["McSidepanelModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-sidepanel.js.map


/***/ })

}]);
//# sourceMappingURL=14-es2015.js.map