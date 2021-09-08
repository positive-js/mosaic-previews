(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
    /***/
    "IwWn":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-alerts.js ***!
      \*******************************************************************************************************/

    /*! exports provided: AlertsExamplesModule, AlertsOverviewExample */

    /***/
    function IwWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertsExamplesModule", function () {
        return AlertsExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertsOverviewExample", function () {
        return AlertsOverviewExample;
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


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/link */
      "DI8n");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /**
       * @title Alerts
       */


      var AlertsOverviewExample = /*#__PURE__*/function () {
        function AlertsOverviewExample() {
          _classCallCheck(this, AlertsOverviewExample);

          this.alertsAmount = 16;
          this.shownAlerts = Array.from(Array(this.alertsAmount).keys());
        }

        _createClass(AlertsOverviewExample, [{
          key: "isAlertShown",
          value: function isAlertShown(id) {
            return this.shownAlerts.indexOf(id) !== -1;
          }
        }, {
          key: "hideAlert",
          value: function hideAlert(id) {
            var index = this.shownAlerts.findIndex(function (alertId) {
              return alertId === id;
            });
            this.shownAlerts.splice(index, 1);
          }
        }]);

        return AlertsOverviewExample;
      }();

      AlertsOverviewExample.ɵfac = function AlertsOverviewExample_Factory(t) {
        return new (t || AlertsOverviewExample)();
      };

      AlertsOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AlertsOverviewExample,
        selectors: [["alerts-overview-example"]],
        decls: 112,
        vars: 29,
        consts: [[1, "alert-example-group"], [1, "flex-33", "mc-column-container"], [1, "mc-alert", "mc-alert_error", "mc-alert_dismissible"], ["mc-icon", "mc-info_16", 1, "mc-alert__icon"], [1, "mc-alert__close", 3, "click"], ["mc-icon", "mc-close-M_16", 1, "mc-icon_light", 3, "color"], [1, "mc-alert", "mc-alert_warning", "mc-alert_dismissible"], [1, "mc-alert", "mc-alert_success", "mc-alert_dismissible"], [1, "mc-alert", "mc-alert_info", "mc-alert_dismissible"], [1, "mc-alert", "mc-alert_dismissible"], [1, "mc-alert", "mc-alert_info"], [1, "alert-footer"], ["mc-button", "", 3, "color", "click"], [1, "mc-alert", "mc-alert_error", "mc-alert_dismissible", "mc-alert_small"], [1, "mc-alert", "mc-alert_warning", "mc-alert_dismissible", "mc-alert_small"], [1, "mc-alert", "mc-alert_success", "mc-alert_dismissible", "mc-alert_small"], [1, "mc-alert", "mc-alert_info", "mc-alert_small"], ["mc-link", "", 3, "click"], [1, "mc-link__text"], [1, "mc-column-container"], [1, "flex-50", "mc-column-container"], [1, "mc-alert", "mc-alert_dismissible", "mc-alert_small"]],
        template: function AlertsOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Colors");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_7_listener() {
              return ctx.hideAlert(1);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_12_listener() {
              return ctx.hideAlert(2);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_17_listener() {
              return ctx.hideAlert(3);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_22_listener() {
              return ctx.hideAlert(4);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_27_listener() {
              return ctx.hideAlert(5);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Normal composition");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_35_listener() {
              return ctx.hideAlert(6);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Lorem ipsum dolor sit amet, consectetur adipiscing elit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_43_listener() {
              return ctx.hideAlert(7);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_47_listener() {
              return ctx.hideAlert(8);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Lorem ipsum dolor sit amet, consectetur adipiscing elit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_55_listener() {
              return ctx.hideAlert(9);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Small composition");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Alert text ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_63_listener() {
              return ctx.hideAlert(10);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Lorem ipsum dolor sit amet, consectetur adipiscing elit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_71_listener() {
              return ctx.hideAlert(11);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_75_listener() {
              return ctx.hideAlert(12);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " Lorem ipsum dolor sit amet, consectetur adipiscing elit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_a_click_83_listener() {
              return ctx.hideAlert(13);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Long text");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Normal composition");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis risus ac varius ultricies. Aenean maximus ex at ornare tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet ipsum id augue porta dignissim tristique at nibh. Nullam interdum libero in laoreet pretium. Maecenas et placerat sem. Donec fringilla viverra nunc in vestibulum. Pellentesque suscipit odio ut erat ullamcorper pellentesque eget ac elit. Quisque eleifend orci sit amet erat bibendum sollicitudin. Donec elementum facilisis dui, at volutpat purus. Aliquam posuere non lacus sollicitudin aliquam. Donec nec semper diam, eget imperdiet dui. Integer ornare quam magna, a pretium metus iaculis non. Ut fermentum risus vel sem accumsan, ac egestas nulla sollicitudin. Vivamus nec mi mauris. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_99_listener() {
              return ctx.hideAlert(14);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Small composition");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis risus ac varius ultricies. Aenean maximus ex at ornare tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet ipsum id augue porta dignissim tristique at nibh. Nullam interdum libero in laoreet pretium. Maecenas et placerat sem. Donec fringilla viverra nunc in vestibulum. Pellentesque suscipit odio ut erat ullamcorper pellentesque eget ac elit. Quisque eleifend orci sit amet erat bibendum sollicitudin. Donec elementum facilisis dui, at volutpat purus. Aliquam posuere non lacus sollicitudin aliquam. Donec nec semper diam, eget imperdiet dui. Integer ornare quam magna, a pretium metus iaculis non. Ut fermentum risus vel sem accumsan, ac egestas nulla sollicitudin. Vivamus nec mi mauris. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertsOverviewExample_Template_button_click_110_listener() {
              return ctx.hideAlert(15);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(1));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(2));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(3));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(4));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(5));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(6));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(7));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(8));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(9));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(10));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(11));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(12));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(13));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(14));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@hideShowAnimator", ctx.isAlertShown(15));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "second");
          }
        },
        directives: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconCSSStyler"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonCssStyler"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLink"]],
        styles: [".alert-example-group[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex:1 1 100%;max-width:100%;max-height:100%}.mc-column-container[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px}.mc-alert[_ngcontent-%COMP%]{margin-bottom:15px}.alert-footer[_ngcontent-%COMP%]{margin-top:8px}"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('hideShowAnimator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 1,
            display: ''
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
            opacity: 0,
            display: 'none'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.5s')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.2s'))])]
        }
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertsOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'alerts-overview-example',
            templateUrl: 'alerts-overview-example.html',
            styleUrls: ['alerts-overview-example.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('hideShowAnimator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
              opacity: 1,
              display: ''
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
              opacity: 0,
              display: 'none'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.5s')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('.2s'))])]
          }]
        }], null, null);
      })();

      var EXAMPLES = [AlertsOverviewExample];

      var AlertsExamplesModule = function AlertsExamplesModule() {
        _classCallCheck(this, AlertsExamplesModule);
      };

      AlertsExamplesModule.ɵfac = function AlertsExamplesModule_Factory(t) {
        return new (t || AlertsExamplesModule)();
      };

      AlertsExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AlertsExamplesModule
      });
      AlertsExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLinkModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertsExamplesModule, {
          declarations: [AlertsOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLinkModule"]],
          exports: [AlertsOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertsExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_link__WEBPACK_IMPORTED_MODULE_4__["McLinkModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES,
            entryComponents: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-alerts.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=21-es5.js.map