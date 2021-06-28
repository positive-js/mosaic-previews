(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "3nGP":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-modal.js ***!
  \******************************************************************************************************/
/*! exports provided: McLongComponent, McModalCustomComponent, McModalFocusContentComponent, ModalComponentExample, ModalExamplesModule, ModalFocusContentExample, ModalOverviewExample, ModalScrollExample, ModalSizesExample, ModalTemplateExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McLongComponent", function() { return McLongComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalCustomComponent", function() { return McModalCustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalFocusContentComponent", function() { return McModalFocusContentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponentExample", function() { return ModalComponentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExamplesModule", function() { return ModalExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFocusContentExample", function() { return ModalFocusContentExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOverviewExample", function() { return ModalOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalScrollExample", function() { return ModalScrollExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSizesExample", function() { return ModalSizesExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTemplateExample", function() { return ModalTemplateExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/modal */ "Sk8O");


















// tslint:disable:no-console
const _c0$5 = ["modalButton"];
/**
 * @title Component Modal
 */
class ModalComponentExample {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal() {
        this.componentModal = this.modalService.open({
            mcComponent: McModalCustomComponent,
            mcComponentParams: {
                title: 'Title',
                subtitle: 'Subtitle'
            }
        });
        this.componentModal.afterOpen.subscribe(() => {
            console.log('[afterOpen] emitted!');
        });
        this.componentModal.afterClose.subscribe((action) => {
            this.modalButton.focusViaKeyboard();
            console.log(`[afterClose] emitted, chosen action: ${action}`);
        });
    }
}
ModalComponentExample.ɵfac = function ModalComponentExample_Factory(t) { return new (t || ModalComponentExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"])); };
ModalComponentExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalComponentExample, selectors: [["modal-component-example"]], viewQuery: function ModalComponentExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0$5, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    } }, decls: 3, vars: 0, consts: [["mc-button", "", 3, "click"], ["modalButton", ""]], template: function ModalComponentExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalComponentExample_Template_button_click_0_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Open Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalComponentExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'modal-component-example',
                templateUrl: 'modal-component-example.html',
                styleUrls: ['modal-component-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"] }]; }, { modalButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalButton']
        }] }); })();
class McModalCustomComponent {
    constructor(modal) {
        this.modal = modal;
    }
    destroyModal(action) {
        this.modal.destroy(action);
    }
}
McModalCustomComponent.ɵfac = function McModalCustomComponent_Factory(t) { return new (t || McModalCustomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalRef"])); };
McModalCustomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: McModalCustomComponent, selectors: [["mc-modal-full-custom-component"]], inputs: { title: "title", subtitle: "subtitle" }, decls: 17, vars: 4, consts: [["mc-button", "", 3, "color", "click"], ["mc-modal-footer", ""], ["mc-button", "", "autofocus", "", 3, "click"]], template: function McModalCustomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-modal-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Modal Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-modal-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Get Modal instance in component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McModalCustomComponent_Template_button_click_10_listener() { return ctx.destroyModal("close"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "destroy modal in the component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McModalCustomComponent_Template_button_click_13_listener() { return ctx.destroyModal("save"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McModalCustomComponent_Template_button_click_15_listener() { return ctx.destroyModal("close"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    } }, directives: [_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalTitle"], _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalBody"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalFooter"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McModalCustomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-modal-full-custom-component',
                template: `
        <mc-modal-title>
            Modal Title
        </mc-modal-title>

        <mc-modal-body>
            <h2>{{ title }}</h2>
            <h4>{{ subtitle }}</h4>
            <p>
                <span>Get Modal instance in component</span>
                <button mc-button [color]="'primary'" (click)="destroyModal('close')">destroy modal in the component</button>
            </p>
        </mc-modal-body>

        <div mc-modal-footer>
            <button mc-button [color]="'primary'" (click)="destroyModal('save')">Save</button>
            <button mc-button autofocus (click)="destroyModal('close')">Close</button>
        </div>
  `
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalRef"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

// tslint:disable:no-console
const _c0$4 = ["modalButton"];
const _c1$2 = ["focusedField"];
/**
 * @title Modal with focused content
 */
class ModalFocusContentExample {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openModal() {
        this.componentModal = this.modalService.open({ mcComponent: McModalFocusContentComponent });
        this.componentModal.afterOpen
            .subscribe(() => this.componentModal.getContentComponent().focusedField.focus());
        this.componentModal.afterClose
            .subscribe(() => this.modalButton.focusViaKeyboard());
    }
}
ModalFocusContentExample.ɵfac = function ModalFocusContentExample_Factory(t) { return new (t || ModalFocusContentExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"])); };
ModalFocusContentExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalFocusContentExample, selectors: [["modal-focus-content-example"]], viewQuery: function ModalFocusContentExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0$4, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    } }, decls: 3, vars: 0, consts: [["mc-button", "", 1, "modal-example-button", 3, "click"], ["modalButton", ""]], template: function ModalFocusContentExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalFocusContentExample_Template_button_click_0_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Open Modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalFocusContentExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'modal-focus-content-example',
                templateUrl: 'modal-focus-content-example.html',
                styleUrls: ['modal-focus-content-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"] }]; }, { modalButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalButton']
        }] }); })();
class McModalFocusContentComponent {
    constructor(modal) {
        this.modal = modal;
    }
    destroyModal(action) {
        this.modal.destroy(action);
    }
}
McModalFocusContentComponent.ɵfac = function McModalFocusContentComponent_Factory(t) { return new (t || McModalFocusContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalRef"])); };
McModalFocusContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: McModalFocusContentComponent, selectors: [["mc-modal-focus-content-component"]], viewQuery: function McModalFocusContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1$2, 1, _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInput"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.focusedField = _t.first);
    } }, decls: 28, vars: 1, consts: [["novalidate", "", 1, "mc-form-horizontal", "margin"], [1, "mc-form__row"], [1, "mc-form__label"], [1, "mc-form__control", "flex-80"], ["name", "input", "mcInput", ""], ["focusedField", ""], [1, "mc-form__control", "flex-50"], [1, "mc-form__control", "flex-30"], ["mc-modal-footer", ""], ["mc-button", "", 3, "color", "click"], ["mc-button", "", "autofocus", "", 3, "click"]], template: function McModalFocusContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-modal-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Modal Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-modal-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mc-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u043F\u043E\u0434 \u043F\u043E\u043B\u0435\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u041F\u043E\u0434\u043F\u0438\u0441\u044C \u043F\u043E\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u043F\u043E\u0434 \u043F\u043E\u043B\u0435\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430 \u043F\u043E\u0434 \u043F\u043E\u043B\u0435\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McModalFocusContentComponent_Template_button_click_24_listener() { return ctx.destroyModal("save"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McModalFocusContentComponent_Template_button_click_26_listener() { return ctx.destroyModal("close"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
    } }, directives: [_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalTitle"], _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalBody"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McForm"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McFormElement"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInput"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McHint"], _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalFooter"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McModalFocusContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-modal-focus-content-component',
                template: `
        <mc-modal-title>Modal Title</mc-modal-title>

        <mc-modal-body>
            <form class="mc-form-horizontal margin" novalidate>
                <div class="mc-form__row">
                    <label class="mc-form__label">Подпись поля</label>
                    <mc-form-field class="mc-form__control flex-80">
                        <input name="input" #focusedField mcInput>

                        <mc-hint>Подсказка под полем</mc-hint>
                    </mc-form-field>
                </div>

                <div class="mc-form__row">
                    <label class="mc-form__label">Подпись поля</label>
                    <mc-form-field class="mc-form__control flex-50">
                        <input name="input" mcInput>

                        <mc-hint>Подсказка под полем</mc-hint>
                    </mc-form-field>
                    <mc-form-field class="mc-form__control flex-30">
                        <input name="input" mcInput>

                        <mc-hint>Подсказка под полем</mc-hint>
                    </mc-form-field>
                </div>
            </form>
        </mc-modal-body>

        <div mc-modal-footer>
            <button mc-button [color]="'primary'" (click)="destroyModal('save')">Save</button>
            <button mc-button autofocus (click)="destroyModal('close')">Close</button>
        </div>
  `
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalRef"] }]; }, { focusedField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['focusedField', { read: _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInput"] }]
        }] }); })();

// tslint:disable:no-console
const _c0$3 = ["confirm"];
const _c1$1 = ["success"];
const _c2$1 = ["delete"];
/**
 * @title Basic Modal
 */
class ModalOverviewExample {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showConfirmModal() {
        const modalRef = this.modalService.confirm({
            mcSize: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["ModalSize"].Small,
            mcMaskClosable: true,
            mcContent: 'Save changes?',
            mcOkText: 'Save',
            mcCancelText: 'Cancel',
            mcOnOk: () => console.log('OK')
        });
        modalRef.afterClose.subscribe(() => this.confirmModal.focusViaKeyboard());
    }
    showSuccessModal() {
        const modalRef = this.modalService.success({
            mcSize: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["ModalSize"].Small,
            mcMaskClosable: true,
            mcContent: 'All changes are saved!',
            mcOkText: 'ОК',
            mcCancelText: 'Cancel',
            mcOnOk: () => console.log('OK')
        });
        modalRef.afterClose.subscribe(() => this.successModal.focusViaKeyboard());
    }
    showDeleteModal() {
        const modalRef = this.modalService.delete({
            mcContent: 'The tasks, policies and tags associated with the customer will be deleted too. Delete selected customer?',
            mcOkText: 'Delete',
            mcCancelText: 'Cancel',
            mcWidth: '480px',
            mcMaskClosable: true,
            mcOnOk: () => console.log('Delete'),
            mcOnCancel: () => console.log('Cancel')
        });
        modalRef.afterClose.subscribe(() => this.deleteModal.focusViaKeyboard());
    }
}
ModalOverviewExample.ɵfac = function ModalOverviewExample_Factory(t) { return new (t || ModalOverviewExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"])); };
ModalOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalOverviewExample, selectors: [["modal-overview-example"]], viewQuery: function ModalOverviewExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0$3, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1$1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2$1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.confirmModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.successModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.deleteModal = _t.first);
    } }, decls: 10, vars: 0, consts: [[1, "example-container"], ["mc-button", "", 3, "click"], ["confirm", ""], ["success", ""], ["delete", ""]], template: function ModalOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalOverviewExample_Template_button_click_1_listener() { return ctx.showConfirmModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Open Confirm Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalOverviewExample_Template_button_click_4_listener() { return ctx.showSuccessModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Open Success Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalOverviewExample_Template_button_click_7_listener() { return ctx.showDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Open Delete Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:200px}.example-container[_ngcontent-%COMP%] > .mc-button[_ngcontent-%COMP%]{margin-bottom:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'modal-overview-example',
                templateUrl: 'modal-overview-example.html',
                styleUrls: ['modal-overview-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"] }]; }, { confirmModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['confirm']
        }], successModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['success']
        }], deleteModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['delete']
        }] }); })();

function McLongComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1);
} }
const _c0$2 = ["modalButton"];
class McLongComponent {
    constructor() {
        this.longText = [];
        // tslint:disable-next-line:no-magic-numbers
        for (let i = 0; i < 50; i++) {
            this.longText.push(`text lint - ${i}`);
        }
    }
}
McLongComponent.ɵfac = function McLongComponent_Factory(t) { return new (t || McLongComponent)(); };
McLongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: McLongComponent, selectors: [["mc-long-component"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function McLongComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, McLongComponent_p_0_Template, 2, 1, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.longText);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McLongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mc-long-component',
                template: `
        <p *ngFor="let item of longText">{{ item }}</p>
    `
            }]
    }], function () { return []; }, null); })();
/**
 * @title Component Modal Scroll
 */
class ModalScrollExample {
    constructor(modalService) {
        this.modalService = modalService;
    }
    createLongModal() {
        const modalRef = this.modalService.create({
            mcSize: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["ModalSize"].Small,
            mcTitle: 'Modal Title',
            mcContent: McLongComponent,
            mcOkText: 'Yes',
            mcCancelText: 'No'
        });
        modalRef.afterClose.subscribe(() => this.modalButton.focusViaKeyboard());
    }
}
ModalScrollExample.ɵfac = function ModalScrollExample_Factory(t) { return new (t || ModalScrollExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"])); };
ModalScrollExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalScrollExample, selectors: [["modal-scroll-example"]], viewQuery: function ModalScrollExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0$2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    } }, decls: 3, vars: 0, consts: [["mc-button", "", 3, "click"], ["modalButton", ""]], template: function ModalScrollExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalScrollExample_Template_button_click_0_listener() { return ctx.createLongModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Open Modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalScrollExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'modal-scroll-example',
                template: `<button #modalButton mc-button (click)="createLongModal()">Open Modal</button>`,
                styleUrls: ['modal-scroll-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"] }]; }, { modalButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalButton']
        }] }); })();

// tslint:disable:no-console
const _c0$1 = ["small"];
const _c1 = ["default"];
const _c2 = ["large"];
const _c3 = ["custom"];
/**
 * @title Sizes Modal
 */
class ModalSizesExample {
    constructor(modalService) {
        this.modalService = modalService;
    }
    showSmallModal() {
        const modalRef = this.modalService.confirm({
            mcSize: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["ModalSize"].Small,
            mcContent: 'Save changes?',
            mcOkText: 'Save',
            mcCancelText: 'Cancel',
            mcOnOk: () => console.log('OK')
        });
        modalRef.afterClose.subscribe(() => this.smallButton.focusViaKeyboard());
    }
    showDefaultModal() {
        const modalRef = this.modalService.confirm({
            mcContent: 'Save changes?',
            mcOkText: 'Save',
            mcCancelText: 'Cancel',
            mcOnOk: () => console.log('OK')
        });
        modalRef.afterClose.subscribe(() => this.defaultButton.focusViaKeyboard());
    }
    showLargeModal() {
        const modalRef = this.modalService.confirm({
            mcSize: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["ModalSize"].Large,
            mcContent: 'Save changes?',
            mcOkText: 'Save',
            mcCancelText: 'Cancel',
            mcOnOk: () => console.log('Delete'),
            mcOnCancel: () => console.log('Cancel')
        });
        modalRef.afterClose.subscribe(() => this.largeButton.focusViaKeyboard());
    }
    showCustomModal() {
        const modalRef = this.modalService.confirm({
            mcWidth: '600px',
            mcContent: 'Save changes?',
            mcOkText: 'Save',
            mcCancelText: 'Cancel',
            mcOnOk: () => console.log('Delete'),
            mcOnCancel: () => console.log('Cancel')
        });
        modalRef.afterClose.subscribe(() => this.customButton.focusViaKeyboard());
    }
}
ModalSizesExample.ɵfac = function ModalSizesExample_Factory(t) { return new (t || ModalSizesExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"])); };
ModalSizesExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalSizesExample, selectors: [["modal-sizes-example"]], viewQuery: function ModalSizesExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0$1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.smallButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.defaultButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.largeButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.customButton = _t.first);
    } }, decls: 13, vars: 0, consts: [[1, "example-container"], ["mc-button", "", 3, "click"], ["small", ""], ["default", ""], ["large", ""], ["custom", ""]], template: function ModalSizesExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSizesExample_Template_button_click_1_listener() { return ctx.showSmallModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSizesExample_Template_button_click_4_listener() { return ctx.showDefaultModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSizesExample_Template_button_click_7_listener() { return ctx.showLargeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalSizesExample_Template_button_click_10_listener() { return ctx.showCustomModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Custom width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [".example-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:200px}.example-container[_ngcontent-%COMP%] > .mc-button[_ngcontent-%COMP%]{margin-bottom:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalSizesExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'modal-sizes-example',
                templateUrl: 'modal-sizes-example.html',
                styleUrls: ['modal-sizes-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"] }]; }, { smallButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['small']
        }], defaultButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['default']
        }], largeButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['large']
        }], customButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['custom']
        }] }); })();

// tslint:disable:no-console
const _c0 = ["modalButton"];
function ModalTemplateExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalTemplateExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "content...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "content...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "content...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "content...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "content...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ModalTemplateExample_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalTemplateExample_ng_template_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.destroyTplModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * @title Template Modal
 */
class ModalTemplateExample {
    constructor(modalService) {
        this.modalService = modalService;
    }
    createTplModal(tplTitle, tplContent, tplFooter) {
        this.tplModal = this.modalService.create({
            mcTitle: tplTitle,
            mcContent: tplContent,
            mcFooter: tplFooter,
            mcOnOk: () => console.log('Click ok')
        });
        this.tplModal.afterClose.subscribe(() => this.modalButton.focusViaKeyboard());
    }
    destroyTplModal() {
        this.tplModal.triggerOk();
        this.tplModal.destroy();
    }
}
ModalTemplateExample.ɵfac = function ModalTemplateExample_Factory(t) { return new (t || ModalTemplateExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"])); };
ModalTemplateExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalTemplateExample, selectors: [["modal-template-example"]], viewQuery: function ModalTemplateExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modalButton = _t.first);
    } }, decls: 9, vars: 0, consts: [["mc-button", "", 1, "modal-example-button", 3, "click"], ["modalButton", ""], ["tplTitle", ""], ["tplContent", ""], ["tplFooter", ""], ["mc-button", "", 3, "click"]], template: function ModalTemplateExample_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalTemplateExample_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.createTplModal(_r1, _r3, _r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalTemplateExample_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ModalTemplateExample_ng_template_5_Template, 10, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ModalTemplateExample_ng_template_7_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalTemplateExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'modal-template-example',
                templateUrl: 'modal-template-example.html',
                styleUrls: ['modal-template-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalService"] }]; }, { modalButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['modalButton']
        }] }); })();

const EXAMPLES = [
    ModalOverviewExample,
    ModalComponentExample,
    McModalCustomComponent,
    ModalTemplateExample,
    ModalScrollExample,
    McLongComponent,
    ModalSizesExample,
    ModalFocusContentExample,
    McModalFocusContentComponent
];
class ModalExamplesModule {
}
ModalExamplesModule.ɵfac = function ModalExamplesModule_Factory(t) { return new (t || ModalExamplesModule)(); };
ModalExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModalExamplesModule });
ModalExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
            _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
            _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModalExamplesModule, { declarations: [ModalOverviewExample,
        ModalComponentExample,
        McModalCustomComponent,
        ModalTemplateExample,
        ModalScrollExample,
        McLongComponent,
        ModalSizesExample,
        ModalFocusContentExample,
        McModalFocusContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
        _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
        _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McFormsModule"]], exports: [ModalOverviewExample,
        ModalComponentExample,
        McModalCustomComponent,
        ModalTemplateExample,
        ModalScrollExample,
        McLongComponent,
        ModalSizesExample,
        ModalFocusContentExample,
        McModalFocusContentComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"],
                    _ptsecurity_mosaic_modal__WEBPACK_IMPORTED_MODULE_8__["McModalModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
                    _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McFormsModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-modal.js.map


/***/ }),

/***/ "Sk8O":
/*!**********************************************************************!*\
  !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-modal.js ***!
  \**********************************************************************/
/*! exports provided: McModalBody, McModalComponent, McModalFooter, McModalMainAction, McModalModule, McModalRef, McModalService, McModalTitle, ModalSize, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalBody", function() { return McModalBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalComponent", function() { return McModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalFooter", function() { return McModalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalMainAction", function() { return McModalMainAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalModule", function() { return McModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalRef", function() { return McModalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalService", function() { return McModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McModalTitle", function() { return McModalTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSize", function() { return ModalSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return McModalControlService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CssUnitPipe; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ "SfmH");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/button */ "nTjJ");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


















const _c0 = ["modalContainer"];
const _c1 = ["bodyContainer"];
const _c2 = ["modalBody"];
const _c3 = ["autoFocusedButton"];
function McModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
} }
function McModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx_r2.mcZIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-modal-mask-hidden", ctx_r2.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.maskAnimationClassMap)("ngStyle", ctx_r2.mcMaskStyle);
} }
function McModalComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McModalComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onClickCloseBtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "second");
} }
function McModalComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r10);
} }
function McModalComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r12);
} }
function McModalComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r8);
} }
function McModalComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, null, 16);
} }
function McModalComponent_ng_template_16_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.mcTitle);
} }
function McModalComponent_ng_template_16_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r23.mcTitle, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function McModalComponent_ng_template_16_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McModalComponent_ng_template_16_div_0_ng_container_3_Template, 1, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, McModalComponent_ng_template_16_div_0_ng_container_4_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-modal-body_top-overflow", ctx_r17.isTopOverflow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r17.isTemplateRef(ctx_r17.mcTitle));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r17.isNonEmptyString(ctx_r17.mcTitle));
} }
function McModalComponent_ng_template_16_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r24.mcContent);
} }
function McModalComponent_ng_template_16_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r25.mcContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function McModalComponent_ng_template_16_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function McModalComponent_ng_template_16_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McModalComponent_ng_template_16_ng_container_5_ng_container_1_Template, 1, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McModalComponent_ng_template_16_ng_container_5_ng_container_2_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McModalComponent_ng_template_16_ng_container_5_ng_container_3_Template, 1, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r20.isTemplateRef(ctx_r20.mcContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r20.isNonEmptyString(ctx_r20.mcContent));
} }
function McModalComponent_ng_template_16_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.mcFooter);
} }
function McModalComponent_ng_template_16_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r28.mcFooter, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function McModalComponent_ng_template_16_div_6_ng_container_4_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McModalComponent_ng_template_16_div_6_ng_container_4_ng_container_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const button_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r35.onButtonClick(button_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-progress", ctx_r33.getButtonCallableProp(button_r32, "loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r33.getButtonCallableProp(button_r32, "disabled"))("color", button_r32.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autofocus", button_r32.autoFocus)("mc-modal-main-action", button_r32.mcModalMainAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", button_r32.label, " ");
} }
function McModalComponent_ng_template_16_div_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McModalComponent_ng_template_16_div_6_ng_container_4_ng_container_1_button_1_Template, 3, 7, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const button_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r31.getButtonCallableProp(button_r32, "show"));
} }
function McModalComponent_ng_template_16_div_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McModalComponent_ng_template_16_div_6_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r29.mcFooter);
} }
function McModalComponent_ng_template_16_div_6_ng_container_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McModalComponent_ng_template_16_div_6_ng_container_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r42.onClickOkCancel("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r39.okText, " ");
} }
function McModalComponent_ng_template_16_div_6_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McModalComponent_ng_template_16_div_6_ng_container_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4); return ctx_r44.onClickOkCancel("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r40.cancelText, " ");
} }
function McModalComponent_ng_template_16_div_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McModalComponent_ng_template_16_div_6_ng_container_5_button_1_Template, 3, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McModalComponent_ng_template_16_div_6_ng_container_5_button_2_Template, 2, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r30.mcOkText !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r30.mcCancelText !== null);
} }
function McModalComponent_ng_template_16_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McModalComponent_ng_template_16_div_6_ng_container_2_Template, 1, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McModalComponent_ng_template_16_div_6_ng_container_3_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, McModalComponent_ng_template_16_div_6_ng_container_4_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, McModalComponent_ng_template_16_div_6_ng_container_5_Template, 3, 2, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-modal-body_bottom-overflow", ctx_r21.isBottomOverflow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r21.isTemplateRef(ctx_r21.mcFooter));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r21.isNonEmptyString(ctx_r21.mcFooter));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r21.isModalButtons(ctx_r21.mcFooter));
} }
function McModalComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, McModalComponent_ng_template_16_div_0_Template, 5, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function McModalComponent_ng_template_16_Template_div_scroll_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.checkOverflow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](3, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, McModalComponent_ng_template_16_ng_container_5_Template, 4, 3, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, McModalComponent_ng_template_16_div_6_Template, 6, 6, "div", 21);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.mcTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r11.mcBodyStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r11.isComponent(ctx_r11.mcContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.mcFooter !== null);
} }
function McModalComponent_ng_template_18_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r52.mcContent);
} }
function McModalComponent_ng_template_18_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r53.mcContent, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function McModalComponent_ng_template_18_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function McModalComponent_ng_template_18_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McModalComponent_ng_template_18_ng_container_6_ng_container_1_Template, 1, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McModalComponent_ng_template_18_ng_container_6_ng_container_2_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McModalComponent_ng_template_18_ng_container_6_ng_container_3_Template, 1, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r49.isTemplateRef(ctx_r49.mcContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx_r49.isNonEmptyString(ctx_r49.mcContent));
} }
function McModalComponent_ng_template_18_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McModalComponent_ng_template_18_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r56.onClickOkCancel("ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx_r50.mcOkType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("autofocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r50.okText, " ");
} }
function McModalComponent_ng_template_18_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McModalComponent_ng_template_18_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r58.onClickOkCancel("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "second");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r51.cancelText, " ");
} }
function McModalComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](4, null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, McModalComponent_ng_template_18_ng_container_6_Template, 4, 3, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, McModalComponent_ng_template_18_button_8_Template, 3, 3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, McModalComponent_ng_template_18_button_9_Template, 2, 2, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r13.mcBodyStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r13.isComponent(ctx_r13.mcContent));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.mcOkText !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.mcCancelText !== "");
} }
const _c4 = ["*"];
class McModalControlService {
    constructor(parentService) {
        this.parentService = parentService;
        // @ts-ignore
        this.rootOpenModals = this.parentService ? null : [];
        // @ts-ignore
        this.rootAfterAllClose = this.parentService ? null : new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // @ts-ignore
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    // Track singleton afterAllClose through over the injection tree
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
    }
    // Track singleton openModals array through over the injection tree
    get openModals() {
        return this.parentService ? this.parentService.openModals : this.rootOpenModals;
    }
    // Registered modal for later usage
    get registeredMetaMap() {
        return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
    }
    // Register a modal to listen its open/close
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            const afterOpenSubscription = modalRef.afterOpen.subscribe(() => this.openModals.push(modalRef));
            const afterCloseSubscription = modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    // Close all registered opened modals
    closeAll() {
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
}
McModalControlService.ɵfac = function McModalControlService_Factory(t) { return new (t || McModalControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](McModalControlService, 12)); };
McModalControlService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: McModalControlService, factory: McModalControlService.ɵfac });
/** @nocollapse */
McModalControlService.ctorParameters = () => [
    { type: McModalControlService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalControlService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: McModalControlService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"]
            }] }]; }, null); })();

/**
 * API class that public to users to handle the modal instance.
 * McModalRef is aim to avoid accessing to the modal instance directly by users.
 */
// tslint:disable-next-line:naming-convention
class McModalRef {
}

class ModalUtil {
    constructor(document) {
        this.document = document;
        this.lastPosition = { x: -1, y: -1 };
        this.listenDocumentClick();
    }
    getLastClickPosition() {
        return this.lastPosition;
    }
    listenDocumentClick() {
        this.document.addEventListener('click', (event) => {
            this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    }
}
const modalUtilObject = new ModalUtil(document);

var ModalSize;
(function (ModalSize) {
    ModalSize["Small"] = "small";
    ModalSize["Normal"] = "normal";
    ModalSize["Large"] = "large";
})(ModalSize || (ModalSize = {}));

// Duration when perform animations (ms)
const MODAL_ANIMATE_DURATION = 200;
class McModalComponent extends McModalRef {
    constructor(overlay, renderer, cfr, elementRef, viewContainer, modalControl, changeDetector, document) {
        super();
        this.overlay = overlay;
        this.renderer = renderer;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.modalControl = modalControl;
        this.changeDetector = changeDetector;
        this.document = document;
        this.mcModalType = 'default';
        this._mcVisible = false;
        this.mcVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.mcZIndex = 1000;
        this.mcSize = ModalSize.Normal;
        this.mcCloseByESC = true;
        this._mcClosable = true;
        this._mcMask = true;
        this._mcMaskClosable = false;
        // Trigger when modal open(visible) after animations
        this.mcAfterOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // Trigger when modal leave-animation over
        this.mcAfterClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.mcOkType = 'primary';
        this._mcOkLoading = false;
        this.mcOnOk = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._mcCancelLoading = false;
        this.mcOnCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isTopOverflow = false;
        this.isBottomOverflow = false;
        // The origin point that animation based on
        this.transformOrigin = '0px 0px 0px';
        this.mcGetContainer = () => this.overlay.create();
    }
    get mcVisible() { return this._mcVisible; }
    set mcVisible(value) { this._mcVisible = value; }
    get mcClosable() { return this._mcClosable; }
    set mcClosable(value) { this._mcClosable = value; }
    get mcMask() { return this._mcMask; }
    set mcMask(value) { this._mcMask = value; }
    get mcMaskClosable() { return this._mcMaskClosable; }
    set mcMaskClosable(value) { this._mcMaskClosable = value; }
    get mcOkLoading() { return this._mcOkLoading; }
    set mcOkLoading(value) { this._mcOkLoading = value; }
    get mcCancelLoading() { return this._mcCancelLoading; }
    set mcCancelLoading(value) { this._mcCancelLoading = value; }
    // Observable alias for mcAfterOpen
    get afterOpen() {
        return this.mcAfterOpen.asObservable();
    }
    // Observable alias for mcAfterClose
    get afterClose() {
        return this.mcAfterClose.asObservable();
    }
    get okText() {
        return this.mcOkText;
    }
    get cancelText() {
        return this.mcCancelText;
    }
    // Indicate whether this dialog should hidden
    get hidden() {
        return !this.mcVisible && !this.animationState;
    }
    ngOnInit() {
        // Create component along without View
        if (this.isComponent(this.mcContent)) {
            this.createDynamicComponent(this.mcContent);
        }
        // Setup default button options
        if (this.isModalButtons(this.mcFooter)) {
            this.mcFooter = this.formatModalButtons(this.mcFooter);
        }
        if (this.isComponent(this.mcComponent)) {
            this.createDynamicComponent(this.mcComponent);
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.mcGetContainer === 'function' ? this.mcGetContainer() : this.mcGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
        }
        else if (this.container instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "mcContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "mcContent" dynamically to trigger UI changes
    // (provided you don't use Component that needs initializations)
    ngOnChanges(changes) {
        if (changes.mcVisible) {
            // Do not trigger animation while initializing
            this.handleVisibleStateChange(this.mcVisible, !changes.mcVisible.firstChange);
        }
    }
    ngAfterViewInit() {
        var _a;
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        (_a = this.getElement().getElementsByTagName('button')[0]) === null || _a === void 0 ? void 0 : _a.focus();
        for (const autoFocusedButton of this.autoFocusedButtons.toArray()) {
            if (autoFocusedButton.nativeElement.autofocus) {
                autoFocusedButton.nativeElement.focus();
                break;
            }
        }
        this.checkOverflow();
    }
    ngOnDestroy() {
        if (this.container instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"]) {
            this.container.dispose();
        }
    }
    checkOverflow() {
        var _a;
        const nativeElement = (_a = this.modalBody) === null || _a === void 0 ? void 0 : _a.nativeElement;
        if (!nativeElement) {
            return;
        }
        const scrollTop = nativeElement.scrollTop;
        const offsetHeight = nativeElement.offsetHeight;
        const scrollHeight = nativeElement.scrollHeight;
        this.isTopOverflow = scrollTop > 0;
        this.isBottomOverflow = scrollTop + offsetHeight < scrollHeight;
    }
    open() {
        this.changeVisibleFromInside(true);
    }
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    // Destroy equals Close
    destroy(result) {
        this.close(result);
    }
    markForCheck() {
        this.changeDetector.markForCheck();
    }
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    getInstance() {
        return this;
    }
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    getMcFooter() {
        return this.getElement().getElementsByClassName('mc-modal-footer').item(0);
    }
    onClickMask($event) {
        if (this.mcMask &&
            this.mcMaskClosable &&
            $event.target.classList.contains('mc-modal-wrap') &&
            this.mcVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    // tslint:disable-next-line: no-reserved-keywords
    isModalType(type) {
        return this.mcModalType === type;
    }
    onKeyDown(event) {
        var _a;
        // tslint:disable-next-line:deprecation .key isn't supported in Edge
        if (event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ESCAPE"] && this.container && (this.container instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayRef"])) {
            this.close();
            event.preventDefault();
        }
        // tslint:disable-next-line:deprecation .key isn't supported in Edge
        if (event.ctrlKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]) {
            if (this.mcModalType === 'confirm') {
                this.triggerOk();
            }
            (_a = this.getElement().querySelector('[mc-modal-main-action]')) === null || _a === void 0 ? void 0 : _a.click();
            event.preventDefault();
        }
    }
    // AoT
    onClickCloseBtn() {
        if (this.mcVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    // AoT
    // tslint:disable-next-line: no-reserved-keywords
    onClickOkCancel(type) {
        const trigger = { ok: this.mcOnOk, cancel: this.mcOnCancel }[type];
        const loadingKey = { ok: 'mcOkLoading', cancel: 'mcCancelLoading' }[type];
        if (trigger instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            // Users can return "false" to prevent closing by default
            const caseClose = (doClose) => (doClose !== false) && this.close(doClose);
            if (isPromise(result)) {
                this[loadingKey] = true;
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    // AoT
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    // AoT
    isTemplateRef(value) {
        return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"];
    }
    // AoT
    isComponent(value) {
        return value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_2__["Type"];
    }
    // AoT
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    // AoT
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    // On mcFooter's modal button click
    // AoT
    onButtonClick(button) {
        // Call onClick directly
        // tslint:disable-next-line:no-inferred-empty-object-type  rule seems to be broken
        const result = this.getButtonCallableProp(button, 'onClick');
        if (isPromise(result)) {
            button.loading = true;
            result.then(() => button.loading = false).catch(() => button.loading = false);
        }
    }
    // Do rest things when visible state changed
    handleVisibleStateChange(visible, animation = true, closeResult) {
        // Hide scrollbar at the first time when shown up
        if (visible) {
            this.changeBodyOverflow(1);
        }
        return Promise
            .resolve(animation && this.animateTo(visible))
            // Emit open/close event after animations over
            .then(() => {
            if (visible) {
                this.mcAfterOpen.emit();
            }
            else {
                this.mcAfterClose.emit(closeResult);
                // Show/hide scrollbar when animation is over
                this.changeBodyOverflow();
            }
        });
    }
    // Change mcVisible from inside
    changeVisibleFromInside(visible, closeResult) {
        if (this.mcVisible !== visible) {
            // Change mcVisible value immediately
            this.mcVisible = visible;
            this.mcVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            // @ts-ignore
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
        if (this.contentComponentRef) {
            this.contentComponentRef.changeDetectorRef.markForCheck();
        }
        else {
            this.changeDetector.markForCheck();
        }
    }
    animateTo(isVisible) {
        // Figure out the lastest click position when shows up
        if (isVisible) {
            // [NOTE] Using timeout due to the document.click event is fired later than visible change,
            // so if not postponed to next event-loop, we can't get the lastest click position
            window.setTimeout(() => this.updateTransformOrigin());
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        // Return when animation is over
        return new Promise((resolve) => {
            return window.setTimeout(() => {
                this.changeAnimationState(null);
                resolve();
            }, MODAL_ANIMATE_DURATION);
        });
    }
    formatModalButtons(buttons) {
        return buttons.map((button) => {
            return Object.assign({
                type: 'default',
                size: 'default',
                autoLoading: true,
                show: true,
                loading: false,
                disabled: false
            }, button);
        });
    }
    /**
     * Create a component dynamically but not attach to any View
     * (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    createDynamicComponent(component) {
        const factory = this.cfr.resolveComponentFactory(component);
        const childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"].create({
            providers: [{ provide: McModalRef, useValue: this }],
            parent: this.viewContainer.injector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.mcComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.mcComponentParams);
        }
        // Do the first change detection immediately
        // (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    // Update transform-origin to the last click position on document
    updateTransformOrigin() {
        const modalElement = this.modalContainer.nativeElement;
        const lastPosition = modalUtilObject.getLastClickPosition();
        if (lastPosition) {
            this.transformOrigin = `${lastPosition.x - modalElement.offsetLeft}px ${lastPosition.y - modalElement.offsetTop}px 0px`;
        }
    }
    /**
     * Take care of the body's overflow to decide the existense of scrollbar
     * @param plusNum The number that the openModals.length will increase soon
     */
    changeBodyOverflow(plusNum = 0) {
        const openModals = this.modalControl.openModals;
        if (openModals.length + plusNum > 0) {
            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
        }
        else {
            this.renderer.removeStyle(this.document.body, 'overflow');
        }
    }
}
McModalComponent.ɵfac = function McModalComponent_Factory(t) { return new (t || McModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](McModalControlService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
McModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: McModalComponent, selectors: [["mc-modal"]], viewQuery: function McModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.bodyContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.modalBody = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.autoFocusedButtons = _t);
    } }, hostBindings: function McModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function McModalComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } }, inputs: { mcModalType: "mcModalType", mcZIndex: "mcZIndex", mcSize: "mcSize", mcCloseByESC: "mcCloseByESC", mcOkType: "mcOkType", mcOnOk: "mcOnOk", mcOnCancel: "mcOnCancel", mcGetContainer: "mcGetContainer", mcVisible: "mcVisible", mcClosable: "mcClosable", mcMask: "mcMask", mcMaskClosable: "mcMaskClosable", mcOkLoading: "mcOkLoading", mcCancelLoading: "mcCancelLoading", mcFooter: "mcFooter", mcComponent: "mcComponent", mcContent: "mcContent", mcComponentParams: "mcComponentParams", mcWidth: "mcWidth", mcWrapClassName: "mcWrapClassName", mcClassName: "mcClassName", mcStyle: "mcStyle", mcTitle: "mcTitle", mcMaskStyle: "mcMaskStyle", mcBodyStyle: "mcBodyStyle", mcOkText: "mcOkText", mcCancelText: "mcCancelText" }, outputs: { mcVisibleChange: "mcVisibleChange", mcAfterOpen: "mcAfterOpen", mcAfterClose: "mcAfterClose", mcOnOk: "mcOnOk", mcOnCancel: "mcOnCancel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 20, vars: 25, consts: [["tplOriginContent", ""], ["class", "mc-modal-mask", 3, "ngClass", "mc-modal-mask-hidden", "ngStyle", "zIndex", 4, "ngIf"], ["tabindex", "-1", 3, "mousedown"], [3, "ngClass", "ngStyle"], ["modalContainer", ""], ["cdkTrapFocus", "", 1, "mc-modal-content"], ["mc-button", "", "class", "mc-modal-close mc-button_transparent", 3, "click", 4, "ngIf"], [3, "ngSwitch"], [3, "ngTemplateOutlet", 4, "ngSwitchCase"], ["tplContentCustom", ""], ["tplContentDefault", ""], ["tplContentConfirm", ""], [1, "mc-modal-mask", 3, "ngClass", "ngStyle"], ["mc-button", "", 1, "mc-modal-close", "mc-button_transparent", 3, "click"], ["mc-icon", "mc-close-L_16", 1, "mc-icon", "mc-icon_light", 3, "color"], [3, "ngTemplateOutlet"], ["bodyContainer", ""], ["class", "mc-modal-header", 3, "mc-modal-body_top-overflow", 4, "ngIf"], [1, "mc-modal-body", 3, "ngStyle", "scroll"], ["modalBody", ""], [3, "ngSwitch", 4, "ngIf"], ["class", "mc-modal-footer", 3, "mc-modal-body_bottom-overflow", 4, "ngIf"], [1, "mc-modal-header"], [1, "mc-modal-title"], [4, "ngSwitchCase"], [3, "innerHTML"], [3, "ngTemplateOutlet", 4, "ngSwitchDefault"], [1, "mc-modal-footer"], [4, "ngSwitchDefault"], [4, "ngFor", "ngForOf"], ["mc-button", "", 3, "disabled", "mc-progress", "color", "click", 4, "ngIf"], ["mc-button", "", 3, "disabled", "color", "click"], ["autoFocusedButton", ""], ["mc-button", "", 3, "color", "click", 4, "ngIf"], ["mc-button", "", 3, "click", 4, "ngIf"], ["mc-button", "", 3, "color", "click"], ["mc-button", "", 3, "click"], [1, "mc-modal-body", 3, "ngStyle"], [1, "mc-confirm-body-wrapper"], [1, "mc-confirm-body"], [1, "mc-confirm-content"], [1, "mc-confirm-btns"]], template: function McModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, McModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McModalComponent_div_3_Template, 1, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function McModalComponent_Template_div_mousedown_4_listener($event) { return ctx.onClickMask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "toCssUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, McModalComponent_button_9_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, McModalComponent_ng_container_11_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, McModalComponent_ng_container_12_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, McModalComponent_ng_container_13_Template, 1, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, McModalComponent_ng_template_14_Template, 2, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, McModalComponent_ng_template_16_Template, 7, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, McModalComponent_ng_template_18_Template, 10, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mcMask);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mc-modal-wrap ", ctx.mcWrapClassName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("z-index", ctx.mcZIndex)("display", ctx.hidden ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("mc-modal ", ctx.mcClassName, " mc-modal_", ctx.mcSize, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 23, ctx.mcWidth))("transform-origin", ctx.transformOrigin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.modalAnimationClassMap)("ngStyle", ctx.mcStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mcClosable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.isModalType("default"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.isModalType("confirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.isModalType("custom"));
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconCSSStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], McModalMainAction]; }, pipes: function () { return [CssUnitPipe]; }, styles: [".mc-confirm .mc-modal-close,.mc-confirm .mc-modal-header{display:none}.mc-confirm .mc-modal-body{padding:var(--mc-modal-confirm-size-padding,24px)}.mc-confirm-body-wrapper{zoom:1}.mc-confirm-body-wrapper:after,.mc-confirm-body-wrapper:before{content:\"\";display:table}.mc-confirm-body-wrapper:after{clear:both}.mc-confirm-body .mc-confirm-title{display:block;overflow:auto}.mc-confirm .mc-confirm-btns{border-radius:var(--mc-modal-footer-size-border-radius,0 0 4px 4px);text-align:right}.mc-confirm .mc-confirm-btns button+button{margin:16px}.mc-modal{box-sizing:border-box;position:relative;top:var(--mc-modal-size-top,48px);width:auto;margin:0 auto;list-style:none}.mc-modal.zoom-appear,.mc-modal.zoom-enter{-webkit-animation-duration:.3s;animation-duration:.3s;transform:none;opacity:0}.mc-modal.mc-modal_small{width:var(--mc-modal-size-small,400px)}.mc-modal.mc-modal_normal{width:var(--mc-modal-size-normal,640px)}.mc-modal.mc-modal_large{width:var(--mc-modal-size-large,960px)}.mc-modal .mc-modal-close{position:absolute;z-index:10;top:0;right:0;width:var(--mc-modal-size-close-width,56px);height:var(--mc-modal-size-close-width,56px)}.mc-modal-wrap{position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;outline:0}.mc-modal-title{margin:0}.mc-modal-content{position:relative;border-radius:var(--mc-modal-size-border-radius,4px);background-clip:padding-box;background-color:#fff}.mc-modal-header{display:block;border-radius:var(--mc-modal-header-size-border-radius,4px 4px 0 0);padding:var(--mc-modal-header-size-padding,14px 16px)}.mc-modal-body{display:block;overflow-y:auto;max-height:var(--mc-modal-body-size-max-height,calc(100vh - 260px));padding:var(--mc-modal-body-size-padding,16px 24px 24px);word-wrap:break-word}.mc-modal-footer{display:block;border-radius:var(--mc-modal-footer-size-border-radius,0 0 4px 4px);padding:var(--mc-modal-footer-size-padding,16px 16px);text-align:right}.mc-modal-footer button+button{margin-left:16px;margin-bottom:0}.mc-modal-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;height:100%}.mc-modal-mask.mc-modal-mask-hidden{display:none}.mc-modal-open{overflow:hidden}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
McModalComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
    { type: McModalControlService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
McModalComponent.propDecorators = {
    mcModalType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcComponentParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcFooter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcVisibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    mcZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcWrapClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcClassName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcCloseByESC: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcMask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcMaskClosable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcMaskStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcBodyStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcAfterOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    mcAfterClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    mcOkText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcOkType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcOkLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcOnOk: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    mcCancelText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcCancelLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    mcOnCancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    modalContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modalContainer', { static: true },] }],
    bodyContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['bodyContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], static: false },] }],
    autoFocusedButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: ['autoFocusedButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },] }],
    modalBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['modalBody',] }],
    mcGetContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mc-modal',
                template: "<!-- Compatible: the <ng-content> can appear only once -->\n<ng-template #tplOriginContent>\n    <ng-content></ng-content>\n</ng-template>\n\n<div>\n    <div *ngIf=\"mcMask\"\n         class=\"mc-modal-mask\"\n         [ngClass]=\"maskAnimationClassMap\"\n         [class.mc-modal-mask-hidden]=\"hidden\"\n         [ngStyle]=\"mcMaskStyle\"\n         [style.zIndex]=\"mcZIndex\"\n    ></div>\n    <div (mousedown)=\"onClickMask($event)\"\n         class=\"mc-modal-wrap {{ mcWrapClassName }}\"\n         [style.zIndex]=\"mcZIndex\"\n         [style.display]=\"hidden ? 'none' : ''\"\n         tabindex=\"-1\">\n\n        <div #modalContainer\n             class=\"mc-modal {{ mcClassName }} mc-modal_{{ mcSize }}\"\n             [ngClass]=\"modalAnimationClassMap\"\n             [ngStyle]=\"mcStyle\"\n             [style.width]=\"mcWidth | toCssUnit\"\n             [style.transform-origin]=\"transformOrigin\">\n\n            <div class=\"mc-modal-content\" cdkTrapFocus>\n                <button *ngIf=\"mcClosable\"\n                        mc-button\n                        (click)=\"onClickCloseBtn()\"\n                        class=\"mc-modal-close mc-button_transparent\">\n                    <i mc-icon=\"mc-close-L_16\" class=\"mc-icon mc-icon_light\" [color]=\"'second'\"></i>\n                </button>\n                <ng-container [ngSwitch]=\"true\">\n                    <ng-container *ngSwitchCase=\"isModalType('default')\"\n                                  [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\n                    <ng-container *ngSwitchCase=\"isModalType('confirm')\"\n                                  [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\n                    <ng-container *ngSwitchCase=\"isModalType('custom')\"\n                                  [ngTemplateOutlet]=\"tplContentCustom\"></ng-container>\n                </ng-container>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #tplContentCustom>\n    <ng-container #bodyContainer></ng-container>\n</ng-template>\n\n\n<!-- [Predefined] Default Modal Content -->\n<ng-template #tplContentDefault>\n    <div *ngIf=\"mcTitle\" class=\"mc-modal-header\" [class.mc-modal-body_top-overflow]=\"isTopOverflow\">\n        <div class=\"mc-modal-title\">\n            <ng-container [ngSwitch]=\"true\">\n                <ng-container *ngSwitchCase=\"isTemplateRef(mcTitle)\" [ngTemplateOutlet]=\"mcTitle\"></ng-container>\n                <ng-container *ngSwitchCase=\"isNonEmptyString(mcTitle)\">\n                    <div [innerHTML]=\"mcTitle\"></div>\n                </ng-container>\n            </ng-container>\n        </div>\n    </div>\n    <div class=\"mc-modal-body\" #modalBody [ngStyle]=\"mcBodyStyle\" (scroll)=\"checkOverflow()\">\n        <ng-container #bodyContainer>\n            <ng-container *ngIf=\"!isComponent(mcContent)\" [ngSwitch]=\"true\">\n                <ng-container *ngSwitchCase=\"isTemplateRef(mcContent)\" [ngTemplateOutlet]=\"mcContent\"></ng-container>\n                <ng-container *ngSwitchCase=\"isNonEmptyString(mcContent)\">\n                    <div [innerHTML]=\"mcContent\"></div>\n                </ng-container>\n                <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n            </ng-container>\n        </ng-container>\n    </div>\n    <div *ngIf=\"mcFooter !== null\" class=\"mc-modal-footer\" [class.mc-modal-body_bottom-overflow]=\"isBottomOverflow\">\n        <ng-container [ngSwitch]=\"true\">\n            <ng-container *ngSwitchCase=\"isTemplateRef(mcFooter)\" [ngTemplateOutlet]=\"mcFooter\"></ng-container>\n            <ng-container *ngSwitchCase=\"isNonEmptyString(mcFooter)\">\n                <div [innerHTML]=\"mcFooter\"></div>\n            </ng-container>\n            <ng-container *ngSwitchCase=\"isModalButtons(mcFooter)\">\n                <ng-container *ngFor=\"let button of mcFooter\">\n                    <button\n                        mc-button\n                        #autoFocusedButton\n                        [attr.autofocus]=\"button.autoFocus\"\n                        [attr.mc-modal-main-action]=\"button.mcModalMainAction\"\n                        *ngIf=\"getButtonCallableProp(button, 'show')\"\n                        [disabled]=\"getButtonCallableProp(button, 'disabled')\"\n                        [class.mc-progress]=\"getButtonCallableProp(button, 'loading')\"\n                        (click)=\"onButtonClick(button)\"\n                        [color]=\"button.type\">\n                        {{ button.label }}\n                    </button>\n                </ng-container>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n                <button\n                    #autoFocusedButton\n                    [attr.autofocus]=\"true\"\n                    *ngIf=\"mcOkText !== null\"\n                    mc-button\n                    [color]=\"'primary'\"\n                    (click)=\"onClickOkCancel('ok')\">\n\n                    {{ okText }}\n                </button>\n                <button *ngIf=\"mcCancelText!==null\" mc-button (click)=\"onClickOkCancel('cancel')\">\n                    {{ cancelText }}\n                </button>\n            </ng-container>\n        </ng-container>\n    </div>\n</ng-template>\n<!-- /[Predefined] Default Modal Content -->\n\n<!-- [Predefined] Confirm Modal Content -->\n<ng-template #tplContentConfirm>\n    <div class=\"mc-modal-body\" [ngStyle]=\"mcBodyStyle\">\n        <div class=\"mc-confirm-body-wrapper\">\n            <div class=\"mc-confirm-body\">\n                <div class=\"mc-confirm-content\">\n                    <ng-container #bodyContainer>\n                        <ng-container *ngIf=\"!isComponent(mcContent)\" [ngSwitch]=\"true\">\n                            <ng-container *ngSwitchCase=\"isTemplateRef(mcContent)\"\n                                          [ngTemplateOutlet]=\"mcContent\"></ng-container>\n                            <ng-container *ngSwitchCase=\"isNonEmptyString(mcContent)\">\n                                <div [innerHTML]=\"mcContent\"></div>\n                            </ng-container>\n                            <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\n                        </ng-container>\n                    </ng-container>\n                </div>\n            </div>\n        </div> <!-- /.mc-confirm-body-wrapper -->\n    </div>\n    <div class=\"mc-confirm-btns\">\n        <button\n            mc-button\n            #autoFocusedButton\n            [color]=\"mcOkType\"\n            [attr.autofocus]=\"true\"\n            *ngIf=\"mcOkText !== ''\"\n            (click)=\"onClickOkCancel('ok')\">\n\n            {{ okText }}\n        </button>\n\n        <button mc-button [color]=\"'second'\" *ngIf=\"mcCancelText !== ''\" (click)=\"onClickOkCancel('cancel')\">\n            {{ cancelText }}\n        </button>\n    </div>\n</ng-template>\n<!-- /[Predefined] Confirm Modal Content -->\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                host: {
                    '(keydown)': 'onKeyDown($event)'
                },
                styles: [".mc-confirm .mc-modal-close,.mc-confirm .mc-modal-header{display:none}.mc-confirm .mc-modal-body{padding:var(--mc-modal-confirm-size-padding,24px)}.mc-confirm-body-wrapper{zoom:1}.mc-confirm-body-wrapper:after,.mc-confirm-body-wrapper:before{content:\"\";display:table}.mc-confirm-body-wrapper:after{clear:both}.mc-confirm-body .mc-confirm-title{display:block;overflow:auto}.mc-confirm .mc-confirm-btns{border-radius:var(--mc-modal-footer-size-border-radius,0 0 4px 4px);text-align:right}.mc-confirm .mc-confirm-btns button+button{margin:16px}.mc-modal{box-sizing:border-box;position:relative;top:var(--mc-modal-size-top,48px);width:auto;margin:0 auto;list-style:none}.mc-modal.zoom-appear,.mc-modal.zoom-enter{-webkit-animation-duration:.3s;animation-duration:.3s;transform:none;opacity:0}.mc-modal.mc-modal_small{width:var(--mc-modal-size-small,400px)}.mc-modal.mc-modal_normal{width:var(--mc-modal-size-normal,640px)}.mc-modal.mc-modal_large{width:var(--mc-modal-size-large,960px)}.mc-modal .mc-modal-close{position:absolute;z-index:10;top:0;right:0;width:var(--mc-modal-size-close-width,56px);height:var(--mc-modal-size-close-width,56px)}.mc-modal-wrap{position:fixed;z-index:1000;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;outline:0}.mc-modal-title{margin:0}.mc-modal-content{position:relative;border-radius:var(--mc-modal-size-border-radius,4px);background-clip:padding-box;background-color:#fff}.mc-modal-header{display:block;border-radius:var(--mc-modal-header-size-border-radius,4px 4px 0 0);padding:var(--mc-modal-header-size-padding,14px 16px)}.mc-modal-body{display:block;overflow-y:auto;max-height:var(--mc-modal-body-size-max-height,calc(100vh - 260px));padding:var(--mc-modal-body-size-padding,16px 24px 24px);word-wrap:break-word}.mc-modal-footer{display:block;border-radius:var(--mc-modal-footer-size-border-radius,0 0 4px 4px);padding:var(--mc-modal-footer-size-padding,16px 16px);text-align:right}.mc-modal-footer button+button{margin-left:16px;margin-bottom:0}.mc-modal-mask{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;height:100%}.mc-modal-mask.mc-modal-mask-hidden{display:none}.mc-modal-open{overflow:hidden}"]
            }]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: McModalControlService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { mcModalType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcVisibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], mcZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcCloseByESC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], mcAfterClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], mcOkType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcOnOk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], mcOnCancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], mcGetContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcMask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcMaskClosable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcOkLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcCancelLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcComponentParams: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcWrapClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcClassName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcMaskStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcBodyStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcOkText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mcCancelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], modalContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['modalContainer', { static: true }]
        }], bodyContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['bodyContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], static: false }]
        }], autoFocusedButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: ['autoFocusedButton', { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }]
        }], modalBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['modalBody']
        }] }); })();
////////////
function isPromise(obj) {
    // tslint:disable-next-line: no-unbound-method
    return !!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function' &&
        typeof obj.catch === 'function';
}

class CssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const formatted = +value;
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
}
CssUnitPipe.ɵfac = function CssUnitPipe_Factory(t) { return new (t || CssUnitPipe)(); };
CssUnitPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "toCssUnit", type: CssUnitPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CssUnitPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"],
        args: [{
                name: 'toCssUnit'
            }]
    }], null, null); })();

class McModalTitle {
}
McModalTitle.ɵfac = function McModalTitle_Factory(t) { return new (t || McModalTitle)(); };
McModalTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: McModalTitle, selectors: [["", "mc-modal-title", ""], ["mc-modal-title"], ["", "mcModalTitle", ""]], hostAttrs: [1, "mc-modal-header", "mc-modal-title"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalTitle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mc-modal-title], mc-modal-title, [mcModalTitle]`,
                host: {
                    class: 'mc-modal-header mc-modal-title'
                }
            }]
    }], null, null); })();
class McModalBody {
}
McModalBody.ɵfac = function McModalBody_Factory(t) { return new (t || McModalBody)(); };
McModalBody.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: McModalBody, selectors: [["", "mc-modal-body", ""], ["mc-modal-body"], ["", "mcModalBody", ""]], hostAttrs: [1, "mc-modal-body"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mc-modal-body], mc-modal-body, [mcModalBody]`,
                host: {
                    class: 'mc-modal-body'
                }
            }]
    }], null, null); })();
class McModalFooter {
}
McModalFooter.ɵfac = function McModalFooter_Factory(t) { return new (t || McModalFooter)(); };
McModalFooter.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: McModalFooter, selectors: [["", "mc-modal-footer", ""], ["mc-modal-footer"], ["", "mcModalFooter", ""]], hostAttrs: [1, "mc-modal-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalFooter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mc-modal-footer], mc-modal-footer, [mcModalFooter]`,
                host: {
                    class: 'mc-modal-footer'
                }
            }]
    }], null, null); })();
class McModalMainAction {
}
McModalMainAction.ɵfac = function McModalMainAction_Factory(t) { return new (t || McModalMainAction)(); };
McModalMainAction.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: McModalMainAction, selectors: [["", "mc-modal-main-action", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalMainAction, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `[mc-modal-main-action]`
            }]
    }], null, null); })();

// A builder used for managing service creating modals
class ModalBuilderForService {
    constructor(overlay, options = {}) {
        this.overlay = overlay;
        this.createModal();
        if (!('mcGetContainer' in options)) {
            options.mcGetContainer = undefined;
        }
        this.changeProps(options);
        this.modalRef.instance.open();
        this.modalRef.instance.mcAfterClose.subscribe(() => this.destroyModal());
        this.overlayRef.keydownEvents()
            // @ts-ignore
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])((event) => {
            // tslint:disable-next-line:deprecation replacement .key isn't supported in Edge
            return event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ESCAPE"] && options.mcCloseByESC;
        }))
            .subscribe(() => this.modalRef.instance.close());
    }
    getInstance() {
        return this.modalRef && this.modalRef.instance;
    }
    destroyModal() {
        if (this.modalRef) {
            this.overlayRef.dispose();
            this.modalRef = null;
        }
    }
    changeProps(options) {
        if (this.modalRef) {
            // here not limit user's inputs at runtime
            Object.assign(this.modalRef.instance, options);
        }
    }
    // Create component to ApplicationRef
    createModal() {
        this.overlayRef = this.overlay.create();
        this.modalRef = this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["ComponentPortal"](McModalComponent));
    }
}
class McModalService {
    constructor(overlay, modalControl) {
        this.overlay = overlay;
        this.modalControl = modalControl;
    }
    // Track of the current close modals (we assume invisible is close this time)
    get openModals() {
        return this.modalControl.openModals;
    }
    get afterAllClose() {
        return this.modalControl.afterAllClose.asObservable();
    }
    // Closes all of the currently-open dialogs
    closeAll() {
        this.modalControl.closeAll();
    }
    create(options = {}) {
        if (typeof options.mcOnCancel !== 'function') {
            // Leave a empty function to close this modal by default
            // tslint:disable-next-line
            options.mcOnCancel = () => { };
        }
        if (!('mcCloseByESC' in options)) {
            options.mcCloseByESC = true;
        }
        return new ModalBuilderForService(this.overlay, options).getInstance();
    }
    confirm(options = {}, confirmType = 'confirm') {
        if ('mcFooter' in options) {
            console.warn(`The Confirm-Modal doesn't support "mcFooter", this property will be ignored.`);
        }
        // NOTE: only support function currently by calling confirm()
        if (typeof options.mcOnOk !== 'function') {
            // Leave a empty function to close this modal by default
            // tslint:disable-next-line
            options.mcOnOk = () => { };
        }
        options.mcModalType = 'confirm';
        options.mcClassName = `mc-confirm mc-confirm-${confirmType} ${options.mcClassName || ''}`;
        return this.create(options);
    }
    open(options = {}) {
        options.mcModalType = 'custom';
        return this.create(options);
    }
    success(options = {}) {
        return this.simpleConfirm(options, 'success');
    }
    // tslint:disable-next-line: no-reserved-keywords
    delete(options = {}) {
        return this.simpleConfirm(options, 'warn');
    }
    simpleConfirm(options = {}, confirmType) {
        // Remove the Cancel button if the user not specify a Cancel button
        if (!('mcCancelText' in options)) {
            // @ts-ignore
            options.mcCancelText = null;
        }
        return this.confirm(options, confirmType);
    }
}
McModalService.ɵfac = function McModalService_Factory(t) { return new (t || McModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](McModalControlService)); };
McModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: McModalService, factory: McModalService.ɵfac });
/** @nocollapse */
McModalService.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] },
    { type: McModalControlService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"] }, { type: McModalControlService }]; }, null); })();

class McModalModule {
}
McModalModule.ɵfac = function McModalModule_Factory(t) { return new (t || McModalModule)(); };
McModalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: McModalModule });
McModalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        McModalControlService,
        McModalService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
            _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McModalModule, { declarations: function () { return [McModalComponent, McModalTitle, McModalBody, McModalFooter, CssUnitPipe, McModalMainAction]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
        _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"]]; }, exports: function () { return [McModalComponent, McModalTitle, McModalBody, McModalFooter]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McModalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["A11yModule"],
                    _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"]
                ],
                exports: [
                    McModalComponent,
                    McModalTitle,
                    McModalBody,
                    McModalFooter
                ],
                declarations: [
                    McModalComponent,
                    McModalTitle,
                    McModalBody,
                    McModalFooter,
                    CssUnitPipe,
                    McModalMainAction
                ],
                providers: [
                    McModalControlService,
                    McModalService
                ],
                entryComponents: [McModalComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map