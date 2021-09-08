(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38], {
    /***/
    "pKgm":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-textarea.js ***!
      \*********************************************************************************************************/

    /*! exports provided: TextAreaExamplesModule, TextAreaOverviewExample */

    /***/
    function pKgm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextAreaExamplesModule", function () {
        return TextAreaExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextAreaOverviewExample", function () {
        return TextAreaOverviewExample;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/textarea */
      "T1vZ");
      /**
       * @title Basic textarea
       */


      var TextAreaOverviewExample = function TextAreaOverviewExample() {
        _classCallCheck(this, TextAreaOverviewExample);

        this.disabled = true;
        this.required = true;
        this.placeholder = 'placeholder';
      };

      TextAreaOverviewExample.ɵfac = function TextAreaOverviewExample_Factory(t) {
        return new (t || TextAreaOverviewExample)();
      };

      TextAreaOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TextAreaOverviewExample,
        selectors: [["text-area-overview-example"]],
        decls: 14,
        vars: 7,
        consts: [["mcTextarea", "", 3, "placeholder"], ["mcTextarea", "", 3, "disabled", "placeholder"], ["mcTextarea", "", 3, "placeholder", "required", "ngModel", "ngModelChange"], ["mcFormFieldWithoutBorders", ""], ["mcTextarea", "", "placeholder", "Placeholder", 3, "ngModel", "ngModelChange"]],
        template: function TextAreaOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "textarea", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextAreaOverviewExample_Template_textarea_ngModelChange_9_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mc-form-field", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TextAreaOverviewExample_Template_textarea_ngModelChange_13_listener($event) {
              return ctx.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("placeholder", ctx.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholder)("required", ctx.required)("ngModel", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_2__["McFormField"], _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_3__["McTextarea"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_2__["McFormFieldWithoutBorders"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextAreaOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'text-area-overview-example',
            templateUrl: 'text-area-overview-example.html',
            styleUrls: ['text-area-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [TextAreaOverviewExample];

      var TextAreaExamplesModule = function TextAreaExamplesModule() {
        _classCallCheck(this, TextAreaExamplesModule);
      };

      TextAreaExamplesModule.ɵfac = function TextAreaExamplesModule_Factory(t) {
        return new (t || TextAreaExamplesModule)();
      };

      TextAreaExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TextAreaExamplesModule
      });
      TextAreaExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_3__["McTextareaModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_2__["McFormFieldModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TextAreaExamplesModule, {
          declarations: [TextAreaOverviewExample],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_3__["McTextareaModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_2__["McFormFieldModule"]],
          exports: [TextAreaOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextAreaExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_textarea__WEBPACK_IMPORTED_MODULE_3__["McTextareaModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_2__["McFormFieldModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-textarea.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=38-es5.js.map