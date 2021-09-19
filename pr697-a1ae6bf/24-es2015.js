(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "7Lk/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-checkbox.js ***!
  \*********************************************************************************************************/
/*! exports provided: CheckboxExamplesModule, CheckboxIndeterminateExample, CheckboxOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxExamplesModule", function() { return CheckboxExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxIndeterminateExample", function() { return CheckboxIndeterminateExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxOverviewExample", function() { return CheckboxOverviewExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/checkbox */ "LyUW");








function CheckboxIndeterminateExample_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckboxIndeterminateExample_p_3_Template_mc_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.updateCheckboxes(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fruit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", fruit_r1.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fruit_r1.name);
} }
/**
 * @title Indeterminate checkbox
 */
class CheckboxIndeterminateExample {
    constructor(ref) {
        this.ref = ref;
        this.parentIndeterminate = true;
        this.parentChecked = true;
        this.fruits = [
            { name: 'Apples', checked: true },
            { name: 'Bananas', checked: false },
            { name: 'Grapes', checked: false }
        ];
    }
    updateCheckboxes(index) {
        this.toggleFruitChecked(index);
        this.updateIndeterminate();
        this.ref.detectChanges();
    }
    toggleFruitChecked(index) {
        this.fruits[index].checked = !this.fruits[index].checked;
    }
    toggleChecked() {
        this.parentChecked = !this.parentChecked;
        for (const fruit of this.fruits) {
            fruit.checked = this.parentChecked;
        }
        this.parentIndeterminate = false;
        this.ref.detectChanges();
    }
    updateIndeterminate() {
        let checked = 0;
        let unchecked = 0;
        const length = this.fruits.length;
        this.fruits.forEach((fruit) => {
            fruit.checked ? checked++ : unchecked++;
        });
        this.parentIndeterminate = (checked !== length && unchecked !== length);
        this.parentChecked = this.parentIndeterminate || length === checked;
    }
}
CheckboxIndeterminateExample.ɵfac = function CheckboxIndeterminateExample_Factory(t) { return new (t || CheckboxIndeterminateExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
CheckboxIndeterminateExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxIndeterminateExample, selectors: [["checkbox-indeterminate-example"]], decls: 4, vars: 3, consts: [[1, "mc-body"], [3, "checked", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "checked", "change"]], template: function CheckboxIndeterminateExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckboxIndeterminateExample_Template_mc_checkbox_change_1_listener() { return ctx.toggleChecked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " All fruits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CheckboxIndeterminateExample_p_3_Template, 3, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.parentChecked)("indeterminate", ctx.parentIndeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);
    } }, directives: [_ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxIndeterminateExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'checkbox-indeterminate-example',
                templateUrl: 'checkbox-indeterminate-example.html',
                styleUrls: ['checkbox-indeterminate-example.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();

/**
 * @title Basic checkboxes
 */
class CheckboxOverviewExample {
}
CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) { return new (t || CheckboxOverviewExample)(); };
CheckboxOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckboxOverviewExample, selectors: [["checkbox-overview-example"]], decls: 7, vars: 2, consts: [[1, "mc-body", "example-section"], [1, "example-margin"], [1, "example-margin", 3, "checked"]], template: function CheckboxOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Checked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Unchecked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
    } }, directives: [_ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckbox"]], styles: [".example-section[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-margin[_ngcontent-%COMP%]{margin-bottom:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'checkbox-overview-example',
                templateUrl: 'checkbox-overview-example.html',
                styleUrls: ['checkbox-overview-example.css']
            }]
    }], null, null); })();

const EXAMPLES = [
    CheckboxIndeterminateExample,
    CheckboxOverviewExample
];
class CheckboxExamplesModule {
}
CheckboxExamplesModule.ɵfac = function CheckboxExamplesModule_Factory(t) { return new (t || CheckboxExamplesModule)(); };
CheckboxExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CheckboxExamplesModule });
CheckboxExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckboxExamplesModule, { declarations: [CheckboxIndeterminateExample,
        CheckboxOverviewExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckboxModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [CheckboxIndeterminateExample,
        CheckboxOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckboxModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-checkbox.js.map


/***/ })

}]);
//# sourceMappingURL=24-es2015.js.map