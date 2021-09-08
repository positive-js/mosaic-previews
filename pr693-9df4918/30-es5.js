(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30], {
    /***/
    "JcAz":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-layout-flex.js ***!
      \************************************************************************************************************/

    /*! exports provided: FlexLayoutExamplesModule, LayoutFlexAlignmentExample, LayoutFlexBehaviourModifiersExample, LayoutFlexOffsetsExample, LayoutFlexOrderExample, LayoutFlexOverviewExample */

    /***/
    function JcAz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlexLayoutExamplesModule", function () {
        return FlexLayoutExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutFlexAlignmentExample", function () {
        return LayoutFlexAlignmentExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutFlexBehaviourModifiersExample", function () {
        return LayoutFlexBehaviourModifiersExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutFlexOffsetsExample", function () {
        return LayoutFlexOffsetsExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutFlexOrderExample", function () {
        return LayoutFlexOrderExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutFlexOverviewExample", function () {
        return LayoutFlexOverviewExample;
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


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/radio */
      "BRpl");
      /* harmony import */


      var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/select */
      "CUtc");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /**
       * @title Flex layout
       */


      var LayoutFlexAlignmentExample = function LayoutFlexAlignmentExample() {
        _classCallCheck(this, LayoutFlexAlignmentExample);

        this.layoutHorizontalAlignment = '-start';
        this.layoutVerticalAlignment = '-start';
      };

      LayoutFlexAlignmentExample.ɵfac = function LayoutFlexAlignmentExample_Factory(t) {
        return new (t || LayoutFlexAlignmentExample)();
      };

      LayoutFlexAlignmentExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutFlexAlignmentExample,
        selectors: [["layout-flex-alignment-example"]],
        decls: 40,
        vars: 8,
        consts: [[1, "example-controls"], [3, "ngModel", "ngModelChange"], ["value", "-start"], ["value", "-center"], ["value", "-end"], ["value", "-space-around"], ["value", "-space-between"], ["value", ""], ["value", "-stretch"], [1, "layout-padding"], [1, "block"]],
        template: function LayoutFlexAlignmentExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutFlexAlignmentExample_Template_mc_radio_group_ngModelChange_3_listener($event) {
              return ctx.layoutHorizontalAlignment = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mc-radio-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "start");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mc-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mc-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "end");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mc-radio-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "space-around");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mc-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "space-between");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mc-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutFlexAlignmentExample_Template_mc_radio_group_ngModelChange_16_listener($event) {
              return ctx.layoutVerticalAlignment = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mc-radio-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(none)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mc-radio-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "start");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mc-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mc-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "end");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mc-radio-button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "stretch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "header", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "block 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "block 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "block 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layoutHorizontalAlignment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layoutVerticalAlignment);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("class: layout-align", ctx.layoutHorizontalAlignment, "", ctx.layoutVerticalAlignment, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("container block layout-row layout-align", ctx.layoutHorizontalAlignment, "", ctx.layoutVerticalAlignment, "");
          }
        },
        directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioButton"]],
        styles: [".example-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row}.block[_ngcontent-%COMP%]{border:1px solid #000;padding:8px}.mc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:32px}.mc-radio-button[_ngcontent-%COMP%]{margin-bottom:8px}.container[_ngcontent-%COMP%]{height:120px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFlexAlignmentExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'layout-flex-alignment-example',
            templateUrl: 'layout-flex-alignment-example.html',
            styleUrls: ['layout-flex-alignment-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Flex layout
       */


      var LayoutFlexBehaviourModifiersExample = function LayoutFlexBehaviourModifiersExample() {
        _classCallCheck(this, LayoutFlexBehaviourModifiersExample);

        this.flexClass = 'flex';
      };

      LayoutFlexBehaviourModifiersExample.ɵfac = function LayoutFlexBehaviourModifiersExample_Factory(t) {
        return new (t || LayoutFlexBehaviourModifiersExample)();
      };

      LayoutFlexBehaviourModifiersExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutFlexBehaviourModifiersExample,
        selectors: [["layout-flex-behaviour-modifiers-example"]],
        decls: 25,
        vars: 4,
        consts: [[1, "example-controls"], [3, "ngModel", "ngModelChange"], ["value", "flex"], ["value", "flex-none"], ["value", "flex-auto"], ["value", "flex-grow"], ["value", "flex-nogrow"], ["value", "flex-noshrink"], [1, "layout-row", "block"], [1, "flex", "block"], [1, "flex-none", "block"]],
        template: function LayoutFlexBehaviourModifiersExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-radio-group", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutFlexBehaviourModifiersExample_Template_mc_radio_group_ngModelChange_3_listener($event) {
              return ctx.flexClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-radio-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "flex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mc-radio-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "flex-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mc-radio-button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "flex-auto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mc-radio-button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "flex-grow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mc-radio-button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "flex-nogrow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mc-radio-button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "flex-noshrink");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "flex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "flex");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "flex-none");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.flexClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("block ", ctx.flexClass, "");
          }
        },
        directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioButton"]],
        styles: [".example-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row}.block[_ngcontent-%COMP%]{border:1px solid #000;padding:8px}.mc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mc-radio-button[_ngcontent-%COMP%]{margin-bottom:8px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFlexBehaviourModifiersExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'layout-flex-behaviour-modifiers-example',
            templateUrl: 'layout-flex-behaviour-modifiers-example.html',
            styleUrls: ['layout-flex-behaviour-modifiers-example.css']
          }]
        }], null, null);
      })();

      function LayoutFlexOffsetsExample_mc_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var flexSize_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", flexSize_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flexSize_r2);
        }
      }

      function LayoutFlexOffsetsExample_mc_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var flexOffset_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", flexOffset_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flexOffset_r3);
        }
      }
      /**
       * @title Flex layout
       */


      var LayoutFlexOffsetsExample = function LayoutFlexOffsetsExample() {
        _classCallCheck(this, LayoutFlexOffsetsExample);

        this.selectedSize = 'flex-10';
        this.selectedOffset = 'flex-offset-10';
        this.flexSizes = ['flex-0', 'flex-5', 'flex-10', 'flex-15', 'flex-20', 'flex-25', 'flex-30', 'flex-33', 'flex-35', 'flex-40', 'flex-45', 'flex-50', 'flex-60', 'flex-65', 'flex-66', 'flex-70', 'flex-75', 'flex-80', 'flex-85', 'flex-90', 'flex-95', 'flex-100'];
        this.flexOffsets = ['flex-offset-0', 'flex-offset-5', 'flex-offset-10', 'flex-offset-15', 'flex-offset-20', 'flex-offset-25', 'flex-offset-30', 'flex-offset-33', 'flex-offset-35', 'flex-offset-40', 'flex-offset-45', 'flex-offset-50', 'flex-offset-60', 'flex-offset-65', 'flex-offset-66', 'flex-offset-70', 'flex-offset-75', 'flex-offset-80', 'flex-offset-85', 'flex-offset-90', 'flex-offset-95', 'flex-offset-100'];
      };

      LayoutFlexOffsetsExample.ɵfac = function LayoutFlexOffsetsExample_Factory(t) {
        return new (t || LayoutFlexOffsetsExample)();
      };

      LayoutFlexOffsetsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutFlexOffsetsExample,
        selectors: [["layout-flex-offsets-example"]],
        decls: 18,
        vars: 22,
        consts: [[1, "example-controls"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "layout-row", "block"], [3, "value"]],
        template: function LayoutFlexOffsetsExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mc-select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayoutFlexOffsetsExample_Template_mc_select_valueChange_4_listener($event) {
              return ctx.selectedSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LayoutFlexOffsetsExample_mc_option_5_Template, 2, 2, "mc-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mc-select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayoutFlexOffsetsExample_Template_mc_select_valueChange_7_listener($event) {
              return ctx.selectedOffset = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LayoutFlexOffsetsExample_mc_option_8_Template, 2, 2, "mc-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedSize);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flexSizes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedOffset);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flexOffsets);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.selectedSize, " ", ctx.selectedOffset, " block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.selectedSize, " ", ctx.selectedOffset, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.selectedSize, " ", ctx.selectedOffset, " block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.selectedSize, " ", ctx.selectedOffset, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("", ctx.selectedSize, " ", ctx.selectedOffset, " block");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.selectedSize, " ", ctx.selectedOffset, "");
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"]],
        styles: [".example-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row}.mc-form-field[_ngcontent-%COMP%]{max-width:20%;margin-left:32px}.block[_ngcontent-%COMP%]{border:1px solid #000;padding:8px}.mc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mc-radio-button[_ngcontent-%COMP%]{margin-bottom:8px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFlexOffsetsExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'layout-flex-offsets-example',
            templateUrl: 'layout-flex-offsets-example.html',
            styleUrls: ['layout-flex-offsets-example.css']
          }]
        }], null, null);
      })();

      function LayoutFlexOrderExample_mc_option_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var flexOrder_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", flexOrder_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flexOrder_r3);
        }
      }

      function LayoutFlexOrderExample_mc_option_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var flexOrder_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", flexOrder_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flexOrder_r4);
        }
      }

      function LayoutFlexOrderExample_mc_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var flexOrder_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", flexOrder_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flexOrder_r5);
        }
      }
      /**
       * @title Flex layout
       */


      var LayoutFlexOrderExample = function LayoutFlexOrderExample() {
        _classCallCheck(this, LayoutFlexOrderExample);

        this.selectedFirstBlockOrder = 'flex-order-0';
        this.selectedSecondBlockOrder = 'flex-order-1';
        this.selectedThirdBlockOrder = 'flex-order-2';
        this.flexOrders = ['flex-order-0', 'flex-order-1', 'flex-order-2', 'flex-order-3', 'flex-order-4', 'flex-order-5', 'flex-order-6', 'flex-order-7', 'flex-order-8', 'flex-order-9'];
      };

      LayoutFlexOrderExample.ɵfac = function LayoutFlexOrderExample_Factory(t) {
        return new (t || LayoutFlexOrderExample)();
      };

      LayoutFlexOrderExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutFlexOrderExample,
        selectors: [["layout-flex-order-example"]],
        decls: 30,
        vars: 15,
        consts: [[1, "example-controls"], [1, "layout-column", "flex"], [1, "layout-padding"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "layout-row", "block"], [3, "value"]],
        template: function LayoutFlexOrderExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "'Block 1'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mc-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayoutFlexOrderExample_Template_mc_select_valueChange_7_listener($event) {
              return ctx.selectedFirstBlockOrder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LayoutFlexOrderExample_mc_option_8_Template, 2, 2, "mc-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "'Block 2'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mc-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayoutFlexOrderExample_Template_mc_select_valueChange_13_listener($event) {
              return ctx.selectedSecondBlockOrder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LayoutFlexOrderExample_mc_option_14_Template, 2, 2, "mc-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "'Block 3'");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mc-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function LayoutFlexOrderExample_Template_mc_select_valueChange_19_listener($event) {
              return ctx.selectedThirdBlockOrder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LayoutFlexOrderExample_mc_option_20_Template, 2, 2, "mc-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Block 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Block 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Block 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedFirstBlockOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flexOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedSecondBlockOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flexOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedThirdBlockOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flexOrders);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flex block ", ctx.selectedFirstBlockOrder, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flex block ", ctx.selectedSecondBlockOrder, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flex block ", ctx.selectedThirdBlockOrder, "");
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"]],
        styles: [".example-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row}.mc-form-field[_ngcontent-%COMP%]{max-width:50%}.block[_ngcontent-%COMP%]{border:1px solid #000;padding:8px}.mc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mc-radio-button[_ngcontent-%COMP%]{margin-bottom:8px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFlexOrderExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'layout-flex-order-example',
            templateUrl: 'layout-flex-order-example.html',
            styleUrls: ['layout-flex-order-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Flex layout
       */


      var LayoutFlexOverviewExample = function LayoutFlexOverviewExample() {
        _classCallCheck(this, LayoutFlexOverviewExample);

        this.layoutDirection = 'layout-column';
      };

      LayoutFlexOverviewExample.ɵfac = function LayoutFlexOverviewExample_Factory(t) {
        return new (t || LayoutFlexOverviewExample)();
      };

      LayoutFlexOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutFlexOverviewExample,
        selectors: [["layout-flex-overview-example"]],
        decls: 16,
        vars: 3,
        consts: [[3, "ngModel", "ngModelChange"], ["value", "layout-column"], ["value", "layout-row"], [1, "flex", "block"]],
        template: function LayoutFlexOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mc-radio-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutFlexOverviewExample_Template_mc_radio_group_ngModelChange_2_listener($event) {
              return ctx.layoutDirection = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mc-radio-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "layout-column");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mc-radio-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "layout-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "first");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "third");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.layoutDirection);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.layoutDirection);
          }
        },
        directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioButton"]],
        styles: [".mc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mc-radio-button[_ngcontent-%COMP%]{margin-bottom:8px}.block[_ngcontent-%COMP%]{border:1px solid #000;padding:8px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFlexOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'layout-flex-overview-example',
            templateUrl: 'layout-flex-overview-example.html',
            styleUrls: ['layout-flex-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [LayoutFlexOverviewExample, LayoutFlexAlignmentExample, LayoutFlexBehaviourModifiersExample, LayoutFlexOffsetsExample, LayoutFlexOrderExample];

      var FlexLayoutExamplesModule = function FlexLayoutExamplesModule() {
        _classCallCheck(this, FlexLayoutExamplesModule);
      };

      FlexLayoutExamplesModule.ɵfac = function FlexLayoutExamplesModule_Factory(t) {
        return new (t || FlexLayoutExamplesModule)();
      };

      FlexLayoutExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: FlexLayoutExamplesModule
      });
      FlexLayoutExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioModule"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlexLayoutExamplesModule, {
          declarations: [LayoutFlexOverviewExample, LayoutFlexAlignmentExample, LayoutFlexBehaviourModifiersExample, LayoutFlexOffsetsExample, LayoutFlexOrderExample],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioModule"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]],
          exports: [LayoutFlexOverviewExample, LayoutFlexAlignmentExample, LayoutFlexBehaviourModifiersExample, LayoutFlexOffsetsExample, LayoutFlexOrderExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlexLayoutExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_5__["McRadioModule"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-layout-flex.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=30-es5.js.map