(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
    /***/
    "vPBX":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-dropdown.js ***!
      \*********************************************************************************************************/

    /*! exports provided: DropdownExamplesModule, DropdownNavigationWrapExample, DropdownNestedExample, DropdownOverviewExample */

    /***/
    function vPBX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownExamplesModule", function () {
        return DropdownExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownNavigationWrapExample", function () {
        return DropdownNavigationWrapExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownNestedExample", function () {
        return DropdownNestedExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownOverviewExample", function () {
        return DropdownOverviewExample;
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


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/checkbox */
      "LyUW");
      /* harmony import */


      var _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/dropdown */
      "8sAt");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/mosaic/input */
      "PryY");
      /* harmony import */


      var _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ptsecurity/mosaic/link */
      "DI8n");
      /**
       * @title Basic dropdown
       */


      var DropdownNavigationWrapExample = function DropdownNavigationWrapExample() {
        _classCallCheck(this, DropdownNavigationWrapExample);
      };

      DropdownNavigationWrapExample.ɵfac = function DropdownNavigationWrapExample_Factory(t) {
        return new (t || DropdownNavigationWrapExample)();
      };

      DropdownNavigationWrapExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DropdownNavigationWrapExample,
        selectors: [["dropdown-navigation-wrap-example"]],
        decls: 41,
        vars: 4,
        consts: [["mc-button", "", 3, "mcDropdownTriggerFor"], ["mc-icon", "mc-angle-down-L_16"], [3, "navigationWithWrap"], ["appDropdown", "mcDropdown"], ["mc-dropdown-item", ""], ["mc-icon", "mc-info-o_16"], [1, "mc-dropdown-item__caption"], ["mc-icon", "mc-circle-8_16"], [1, "mc-dropdown__divider"], [1, "mc-dropdown__group-header"], ["mc-dropdown-item", "", "disabled", ""], [1, "mc-dropdown__group-header", "mc-dropdown__group-header_small"]],
        template: function DropdownNavigationWrapExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-dropdown", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438 \u043E\u0447\u0435\u043D\u044C \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Additional info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Additional info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Point 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("max-width");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("navigationWithWrap", true);
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownTrigger"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconCSSStyler"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdown"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownItem"]],
        styles: [".max-width{max-width:200px}\n"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownNavigationWrapExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'dropdown-navigation-wrap-example',
            templateUrl: 'dropdown-navigation-wrap-example.html',
            styleUrls: ['dropdown-navigation-wrap-example.css'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();
      /**
       * @title Nested dropdown
       */


      var DropdownNestedExample = function DropdownNestedExample() {
        _classCallCheck(this, DropdownNestedExample);
      };

      DropdownNestedExample.ɵfac = function DropdownNestedExample_Factory(t) {
        return new (t || DropdownNestedExample)();
      };

      DropdownNestedExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DropdownNestedExample,
        selectors: [["dropdown-nested-example"]],
        decls: 68,
        vars: 24,
        consts: [["mc-button", "", 3, "mcDropdownTriggerFor"], ["mc-icon", "mc-angle-down-L_16"], ["appDropdownWithNested", "mcDropdown"], ["mc-dropdown-item", ""], ["mc-dropdown-item", "", 3, "mcDropdownTriggerFor"], ["mc-dropdown-item", "", 3, "disabled", "mcDropdownTriggerFor"], [1, "mc-dropdown__divider"], ["appDropdownNested", "mcDropdown"], ["appDropdownNestedNested", "mcDropdown"]],
        template: function DropdownNestedExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-dropdown", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Search settings");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Paragraph styles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Align & intent");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Line spacing");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Columns");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Bullets & numbering");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Headers & footers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Page numbers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Clear formatting");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Border & lines");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mc-dropdown", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Border and shading");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Normal text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Heading 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Heading 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Heading 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Heading 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Heading 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Heading 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Options");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mc-dropdown", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Apply 'Title'");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Update 'Title' to match style");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true)("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownTrigger"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconCSSStyler"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdown"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownItem"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownNestedExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'dropdown-nested-example',
            templateUrl: 'dropdown-nested-example.html',
            styleUrls: ['dropdown-nested-example.css']
          }]
        }], null, null);
      })();

      function DropdownOverviewExample_ng_template_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "dropdown");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Point 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Some info");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var someValue_r3 = ctx.someValue;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Value: ", someValue_r3, "");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          someValue: a0
        };
      };
      /**
       * @title Basic dropdown
       */


      var DropdownOverviewExample = /*#__PURE__*/function () {
        function DropdownOverviewExample() {
          _classCallCheck(this, DropdownOverviewExample);

          this.someValue = 'Lazy Value';
          this.disabled = false;
          this.openByArrowDown = true;
        }

        _createClass(DropdownOverviewExample, [{
          key: "toggleDisabled",
          value: function toggleDisabled() {
            this.disabled = !this.disabled;
          }
        }, {
          key: "toggleOpenByArrowDown",
          value: function toggleOpenByArrowDown() {
            this.openByArrowDown = !this.openByArrowDown;
          }
        }]);

        return DropdownOverviewExample;
      }();

      DropdownOverviewExample.ɵfac = function DropdownOverviewExample_Factory(t) {
        return new (t || DropdownOverviewExample)();
      };

      DropdownOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DropdownOverviewExample,
        selectors: [["dropdown-overview-example"]],
        decls: 62,
        vars: 13,
        consts: [[3, "checked", "change"], ["mc-button", "", 3, "mcDropdownTriggerFor", "openByArrowDown", "disabled"], ["mc-icon", "mc-angle-down-L_16"], ["appDropdown", "mcDropdown"], ["mc-dropdown-item", ""], ["mc-icon", "mc-info-o_16"], [1, "mc-dropdown-item__caption"], ["mc-icon", "mc-circle-8_16"], [1, "mc-dropdown__divider"], [1, "mc-dropdown__group-header"], ["mc-dropdown-item", "", "disabled", ""], [1, "mc-dropdown__group-header", "mc-dropdown__group-header_small"], [1, "max-width"], ["mcInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mc-button", "", 3, "mcDropdownTriggerFor", "mcDropdownTriggerData", "disabled"], ["appDropdownLazy", "mcDropdown"], ["mcDropdownContent", ""], ["mc-dropdown-item", "", 3, "disabled"]],
        template: function DropdownOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DropdownOverviewExample_Template_mc_checkbox_change_0_listener() {
              return ctx.toggleDisabled();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "toggle disabled state");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-checkbox", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DropdownOverviewExample_Template_mc_checkbox_change_4_listener() {
              return ctx.toggleOpenByArrowDown();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "toggleOpenByArrowDown");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " dropdown ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-dropdown", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " \u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u041E\u0431\u0449\u0438\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438 \u043E\u0447\u0435\u043D\u044C \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Additional info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Additional info");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Point 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mc-form-field", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DropdownOverviewExample_Template_input_ngModelChange_53_listener($event) {
              return ctx.someValue = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " dropdown lazy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mc-dropdown", null, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DropdownOverviewExample_ng_template_61_Template, 8, 2, "ng-template", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.openByArrowDown);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r0)("openByArrowDown", ctx.openByArrowDown)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("max-width");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.someValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1)("mcDropdownTriggerData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.someValue))("disabled", ctx.disabled);
          }
        },
        directives: [_ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckbox"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonCssStyler"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownTrigger"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconCSSStyler"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdown"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownItem"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownContent"]],
        styles: [".max-width{max-width:200px}\n"],
        encapsulation: 2
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'dropdown-overview-example',
            templateUrl: 'dropdown-overview-example.html',
            styleUrls: ['dropdown-overview-example.css'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
          }]
        }], null, null);
      })();

      var EXAMPLES = [DropdownNestedExample, DropdownOverviewExample, DropdownNavigationWrapExample];

      var DropdownExamplesModule = function DropdownExamplesModule() {
        _classCallCheck(this, DropdownExamplesModule);
      };

      DropdownExamplesModule.ɵfac = function DropdownExamplesModule_Factory(t) {
        return new (t || DropdownExamplesModule)();
      };

      DropdownExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DropdownExamplesModule
      });
      DropdownExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckboxModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_9__["McLinkModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormFieldModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInputModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DropdownExamplesModule, {
          declarations: [DropdownNestedExample, DropdownOverviewExample, DropdownNavigationWrapExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckboxModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_9__["McLinkModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormFieldModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInputModule"]],
          exports: [DropdownNestedExample, DropdownOverviewExample, DropdownNavigationWrapExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DropdownExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_3__["McButtonModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckboxModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_5__["McDropdownModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_9__["McLinkModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormFieldModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInputModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-dropdown.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=26-es5.js.map