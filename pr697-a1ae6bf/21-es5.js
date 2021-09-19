(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
    /***/
    "da3i":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-autocomplete.js ***!
      \*************************************************************************************************************/

    /*! exports provided: AutocompleteExamplesModule, AutocompleteOverviewExample */

    /***/
    function da3i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteExamplesModule", function () {
        return AutocompleteExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutocompleteOverviewExample", function () {
        return AutocompleteOverviewExample;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/autocomplete */
      "RtxV");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/input */
      "PryY");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");

      function AutocompleteOverviewExample_mc_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r2);
        }
      }
      /**
       * @title Basic Input
       */


      var AutocompleteOverviewExample = /*#__PURE__*/function () {
        function AutocompleteOverviewExample() {
          _classCallCheck(this, AutocompleteOverviewExample);

          this.options = ['Abkhazia', 'Australia', 'Austria', 'Azerbaijan', 'Aland Islands', 'Albania', 'Algeria', 'Anguilla', 'Angola', 'Andorra', 'Argentina', 'Armenia', 'Aruba', 'Afghanistan', 'Bahamas', 'Bangladesh', 'Barbados', 'Bahrain', 'Belarus', 'Belize', 'Belgium', 'Benin', 'Bulgaria', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Burundi', 'Bhutan', 'Vatican City', 'United Kingdom', 'Hungary', 'Venezuela', 'Timor', 'Viet Nam', 'Gabon', 'Haiti', 'Gambia', 'Ghana', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Germany', 'Gibraltar', 'Hong Kong', 'Honduras', 'Grenada', 'Greenland', 'Greece', 'Georgia', 'Guam', 'Denmark', 'Dominica', 'Dominican Republic', 'Egypt', 'Zambia', 'Western Sahara', 'Zimbabwe', 'Israel', 'India', 'Indonesia', 'Jordan', 'Iraq', 'Iran', 'Ireland', 'Iceland', 'Spain', 'Italy', 'Yemen', 'Kazakhstan', 'Cambodia', 'Cameroon', 'Canada', 'Qatar', 'Kenya', 'Cyprus', 'Kyrgyzstan', 'Kiribati', 'China', 'Colombia', 'Korea, D.P.R.', 'Korea', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Kuwait', 'Lao P.D.R.', 'Latvia', 'Lesotho', 'Liberia', 'Lebanon', 'Libyan Arab Jamahiriya', 'Lithuania', 'Liechtenstein', 'Luxembourg', 'Mauritius', 'Mauritania', 'Madagascar', 'Macedonia', 'Malawi', 'Malaysia', 'Mali', 'Maldives', 'Malta', 'Morocco', 'Mexico', 'Mozambique', 'Moldova', 'Monaco', 'Mongolia', 'Namibia', 'Nepal', 'Niger', 'Nigeria', 'Netherlands', 'Nicaragua', 'New Zealand', 'Norway', 'United Arab Emirates', 'Oman', 'Pakistan', 'Panama', 'Paraguay', 'Peru', 'Poland', 'Portugal', 'Russia', 'Romania', 'San Marino', 'Saudi Arabia', 'Senegal', 'Serbia', 'Singapore', 'Syrian Arab Republic', 'Slovakia', 'Slovenia', 'Somalia', 'Sudan', 'USA', 'Tajikistan', 'Thailand', 'Tanzania', 'Togo', 'Tunisia', 'Turkmenistan', 'Turkey', 'Uganda', 'Uzbekistan', 'Ukraine', 'Uruguay', 'Micronesia', 'Fiji', 'Philippines', 'Finland', 'France', 'Croatia', 'Chad', 'Montenegro', 'Czech Republic', 'Chile', 'Switzerland', 'Sweden', 'Sri Lanka', 'Ecuador', 'Eritrea', 'Estonia', 'Ethiopia', 'South Africa', 'Jamaica', 'Japan'];
          this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        }

        _createClass(AutocompleteOverviewExample, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.filteredOptions = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (value) {
              return _this.filter(value);
            }));
          }
        }, {
          key: "filter",
          value: function filter(value) {
            var filterValue = value.toLowerCase();
            return this.options.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }]);

        return AutocompleteOverviewExample;
      }();

      AutocompleteOverviewExample.ɵfac = function AutocompleteOverviewExample_Factory(t) {
        return new (t || AutocompleteOverviewExample)();
      };

      AutocompleteOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AutocompleteOverviewExample,
        selectors: [["autocomplete-overview-example"]],
        decls: 8,
        vars: 5,
        consts: [["type", "text", "mcInput", "", 3, "mcAutocomplete", "formControl"], ["auto", "mcAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function AutocompleteOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter countries to see autocomplete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-autocomplete", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AutocompleteOverviewExample_mc_option_6_Template, 2, 2, "mc-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcAutocomplete", _r0)("formControl", ctx.control);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, ctx.filteredOptions));
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInput"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_9__["McOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutocompleteOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'autocomplete-overview-example',
            templateUrl: 'autocomplete-overview-example.html',
            styleUrls: ['autocomplete-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [AutocompleteOverviewExample];

      var AutocompleteExamplesModule = function AutocompleteExamplesModule() {
        _classCallCheck(this, AutocompleteExamplesModule);
      };

      AutocompleteExamplesModule.ɵfac = function AutocompleteExamplesModule_Factory(t) {
        return new (t || AutocompleteExamplesModule)();
      };

      AutocompleteExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AutocompleteExamplesModule
      });
      AutocompleteExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AutocompleteExamplesModule, {
          declarations: [AutocompleteOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          exports: [AutocompleteOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutocompleteExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-autocomplete.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=21-es5.js.map