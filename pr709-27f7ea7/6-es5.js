(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return _setPrototypeOf(_this, BabelRegExp.prototype); } _inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (typeof args[args.length - 1] !== "object") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
    /***/
    "N1EY":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-datepicker.js ***!
      \***********************************************************************************************************/

    /*! exports provided: DatepickerCustomExample, DatepickerDisabledExample, DatepickerExamplesModule, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample */

    /***/
    function N1EY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCustomExample", function () {
        return DatepickerCustomExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerDisabledExample", function () {
        return DatepickerDisabledExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerExamplesModule", function () {
        return DatepickerExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerLanguageExample", function () {
        return DatepickerLanguageExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerOverviewExample", function () {
        return DatepickerOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerYearExample", function () {
        return DatepickerYearExample;
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


      var _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic-luxon-adapter/adapter */
      "O2sr");
      /* harmony import */


      var _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/datepicker */
      "cD68");
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


      var _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/mosaic/radio */
      "BRpl");
      /* harmony import */


      var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tooltip */
      "341e");
      /* harmony import */


      var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ptsecurity/cdk/datetime */
      "Vue8");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/de */
      "VLs4");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11__); // @dynamic


      function mcDateAdapterFactory(locale) {
        var dateAdapter = new _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["LuxonDateAdapter"](locale);
        dateAdapter.updateLocaleData({
          firstDayOfWeek: 1
        });
        return dateAdapter;
      } // @dynamic


      function mcDateFormatsFactory$1() {
        var dateFormats = Object.assign({}, _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["MC_LUXON_DATE_FORMATS"]);
        dateFormats.dateInput = 'dd.MM.yyyy';
        return dateFormats;
      }
      /**
       * @title Custom localeData and format datepicker
       */


      var DatepickerCustomExample = function DatepickerCustomExample(adapter) {
        _classCallCheck(this, DatepickerCustomExample);

        this.adapter = adapter;
        this.sunday = 6;
        this.date = this.adapter.today();
        this.minDate = this.adapter.today().minus({
          year: 1
        });
        this.maxDate = this.adapter.today().plus({
          year: 1
        });
      };

      DatepickerCustomExample.ɵfac = function DatepickerCustomExample_Factory(t) {
        return new (t || DatepickerCustomExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]));
      };

      DatepickerCustomExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerCustomExample,
        selectors: [["datepicker-custom-example"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"],
          useValue: 'en'
        }, {
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
          useFactory: mcDateFormatsFactory$1
        }, {
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
          useFactory: mcDateAdapterFactory,
          deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"]]
        }])],
        decls: 7,
        vars: 4,
        consts: [[1, "example-datepicker-group"], ["mcTooltip", "", 1, "example-datepicker", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "mcDatepicker", "placeholder", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["datepicker", ""]],
        template: function DatepickerCustomExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-form-field", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerCustomExample_Template_mc_form_field_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mc-datepicker", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDatepicker", _r1)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcValidationTooltip", _r0);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]],
        styles: [".example-datepicker-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-datepicker[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerCustomExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-custom-example',
            templateUrl: 'datepicker-custom-example.html',
            styleUrls: ['datepicker-custom-example.css'],
            providers: [{
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"],
              useValue: 'en'
            }, {
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
              useFactory: mcDateFormatsFactory$1
            }, {
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
              useFactory: mcDateAdapterFactory,
              deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"]]
            }]
          }]
        }], function () {
          return [{
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]
          }];
        }, null);
      })();
      /**
       * @title Disabled datepicker
       */


      var DatepickerDisabledExample = /*#__PURE__*/function () {
        function DatepickerDisabledExample(adapter) {
          _classCallCheck(this, DatepickerDisabledExample);

          this.adapter = adapter;
          this.sunday = 6;
          this.date = this.adapter.today();
          this.minDate = this.adapter.today().minus({
            year: 1
          });
          this.maxDate = this.adapter.today().plus({
            year: 1
          });
        }

        _createClass(DatepickerDisabledExample, [{
          key: "myFilter",
          value: function myFilter(date) {
            return date.day !== 0 && date.day !== this.sunday;
          }
        }]);

        return DatepickerDisabledExample;
      }();

      DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) {
        return new (t || DatepickerDisabledExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]));
      };

      DatepickerDisabledExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerDisabledExample,
        selectors: [["datepicker-disabled-example"]],
        decls: 39,
        vars: 19,
        consts: [[1, ".example-datepicker-group"], ["mcTooltip", "", 1, "example-datepicker", 3, "mcTitle", "click"], ["tooltip1", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["disabled", "", "startView", "multi-year"], ["myDatepicker1", ""], [1, "example-datepicker", 3, "click"], ["disabled", "", 3, "ngModel", "placeholder", "mcDatepicker"], ["myDatepicker2", ""], ["readonly", "", 3, "ngModel", "placeholder", "mcDatepicker"], ["myDatepicker3", ""], ["tooltip4", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcDatepickerFilter", "mcValidationTooltip", "min", "max"], ["myDatepicker4", ""]],
        template: function DatepickerDisabledExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Datepicker disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-form-field", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mc-datepicker", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Datepicker with disabled input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mc-datepicker", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Datepicker with readonly input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mc-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mc-datepicker", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Datepicker with some dates disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mc-form-field", 1, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_33_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

              return _r5.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "mc-datepicker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r5)("mcDatepickerFilter", ctx.myFilter)("mcValidationTooltip", _r4)("min", ctx.minDate)("max", ctx.maxDate);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["MinValidator"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["MaxValidator"]],
        styles: [".example-datepicker-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-datepicker[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerDisabledExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-disabled-example',
            templateUrl: 'datepicker-disabled-example.html',
            styleUrls: ['datepicker-disabled-example.css']
          }]
        }], function () {
          return [{
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]
          }];
        }, null);
      })();
      /* tslint:disable:no-magic-numbers */


      function DatepickerLanguageExample_mc_radio_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", language_r3)("checked", language_r3.name === ctx_r0.selectedLanguage.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r3.name, " ");
        }
      }

      function mcDateFormatsFactory() {
        var dateFormats = Object.assign({}, _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["MC_LUXON_DATE_FORMATS"]);
        dateFormats.dateInput = 'dd.MM.yyyy';
        return dateFormats;
      }

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_11___default.a);
      /**
       * @title Multy language datepicker
       */

      var DatepickerLanguageExample = /*#__PURE__*/function () {
        function DatepickerLanguageExample(adapter, dateFormats) {
          _classCallCheck(this, DatepickerLanguageExample);

          this.adapter = adapter;
          this.dateFormats = dateFormats;
          this.languageList = [{
            name: 'en',
            format: 'dd/MM/yyyy',
            placeholder: 'дд/мм/гггг'
          }, {
            name: 'de',
            format: 'dd-MM-yyyy',
            placeholder: 'дд-мм-гггг'
          }, {
            name: 'ru',
            format: 'dd.MM.yyyy',
            placeholder: 'дд.мм.гггг'
          }];
          this.selectedLanguage = this.languageList[0];
          this.selectedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.adapter.createDateTime(2020, 5, 6, 12, 0, 0, 0));
        }

        _createClass(DatepickerLanguageExample, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.adapter.setLocale(this.languageList[0].name);
          }
        }, {
          key: "setFormat",
          value: function setFormat($event) {
            this.dateFormats.dateInput = $event.value.format;
            this.selectedLanguage = this.languageList.find(function (_ref) {
              var name = _ref.name;
              return name === $event.value.name;
            });
            this.selectedDate.setValue(this.selectedDate.value);
            this.adapter.setLocale($event.value.name);
          }
        }]);

        return DatepickerLanguageExample;
      }();

      DatepickerLanguageExample.ɵfac = function DatepickerLanguageExample_Factory(t) {
        return new (t || DatepickerLanguageExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"]));
      };

      DatepickerLanguageExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerLanguageExample,
        selectors: [["datepicker-language-example"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
          useFactory: mcDateFormatsFactory
        }])],
        decls: 14,
        vars: 7,
        consts: [[1, "example-radio-group", 3, "change"], ["class", "example-radio-button", 3, "value", "checked", 4, "ngFor", "ngForOf"], ["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "formControl", "placeholder", "mcDatepicker", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["picker", ""], [1, "example-radio-button", 3, "value", "checked"]],
        template: function DatepickerLanguageExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-radio-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DatepickerLanguageExample_Template_mc_radio_group_change_0_listener($event) {
              return ctx.setFormat($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatepickerLanguageExample_mc_radio_button_1_Template, 2, 3, "mc-radio-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-form-field", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerLanguageExample_Template_mc_form_field_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mc-datepicker", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languageList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectedDate)("placeholder", ctx.selectedLanguage.placeholder)("mcDatepicker", _r2)("mcValidationTooltip", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate.value);
          }
        },
        directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioButton"]],
        styles: [".example-radio-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-radio-button[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerLanguageExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-language-example',
            templateUrl: 'datepicker-language-example.html',
            styleUrls: ['datepicker-language-example.css'],
            providers: [{
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
              useFactory: mcDateFormatsFactory
            }]
          }]
        }], function () {
          return [{
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /**
       * @title Datepicker
       */


      var DatepickerOverviewExample = function DatepickerOverviewExample() {
        _classCallCheck(this, DatepickerOverviewExample);
      };

      DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) {
        return new (t || DatepickerOverviewExample)();
      };

      DatepickerOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerOverviewExample,
        selectors: [["datepicker-overview-example"]],
        decls: 6,
        vars: 5,
        consts: [["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip", "ngModelChange"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["myDatepicker", ""]],
        template: function DatepickerOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerOverviewExample_Template_mc_form_field_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatepickerOverviewExample_Template_input_ngModelChange_2_listener($event) {
              return ctx.date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-datepicker", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-overview-example',
            templateUrl: 'datepicker-overview-example.html',
            styleUrls: ['datepicker-overview-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Datepicker starts with year
       */


      var DatepickerYearExample = function DatepickerYearExample() {
        _classCallCheck(this, DatepickerYearExample);
      };

      DatepickerYearExample.ɵfac = function DatepickerYearExample_Factory(t) {
        return new (t || DatepickerYearExample)();
      };

      DatepickerYearExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerYearExample,
        selectors: [["datepicker-year-example"]],
        decls: 6,
        vars: 6,
        consts: [["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip", "ngModelChange"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], [3, "startView"], ["myDatepicker", ""]],
        template: function DatepickerYearExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerYearExample_Template_mc_form_field_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatepickerYearExample_Template_input_ngModelChange_2_listener($event) {
              return ctx.date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-datepicker", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("startView", "multi-year");
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerYearExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-year-example',
            templateUrl: 'datepicker-year-example.html',
            styleUrls: ['datepicker-year-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [DatepickerDisabledExample, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample, DatepickerCustomExample];

      var DatepickerExamplesModule = function DatepickerExamplesModule() {
        _classCallCheck(this, DatepickerExamplesModule);
      };

      DatepickerExamplesModule.ɵfac = function DatepickerExamplesModule_Factory(t) {
        return new (t || DatepickerExamplesModule)();
      };

      DatepickerExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DatepickerExamplesModule
      });
      DatepickerExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DatepickerExamplesModule, {
          declarations: [DatepickerDisabledExample, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample, DatepickerCustomExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]],
          exports: [DatepickerDisabledExample, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample, DatepickerCustomExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-datepicker.js.map

      /***/

    },

    /***/
    "VLs4":
    /*!****************************************************!*\
      !*** ./node_modules/@angular/common/locales/de.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function VLs4(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      /**
      * @license
      * Copyright Google LLC All Rights Reserved.
      *
      * Use of this source code is governed by an MIT-style license that can be
      * found in the LICENSE file at https://angular.io/license
      */


      (function (factory) {
        if (true && typeof module.exports === "object") {
          var v = factory(null, exports);
          if (v !== undefined) module.exports = v;
        } else if (true) {
          !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
      })(function (require, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        }); // THIS CODE IS GENERATED - DO NOT MODIFY
        // See angular/tools/gulp-tasks/cldr/extract.js

        var u = undefined;

        function plural(n) {
          var i = Math.floor(Math.abs(n)),
              v = n.toString().replace(/^[^.]*\.?/, '').length;
          if (i === 1 && v === 0) return 1;
          return 5;
        }

        exports["default"] = ['de', [['AM', 'PM'], u, u], u, [['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'], ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']], [['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'], ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'], ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.']], [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'], ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']], [['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'], ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']], [['v. Chr.', 'n. Chr.'], u, u], 1, [6, 0], ['dd.MM.yy', 'dd.MM.y', 'd. MMMM y', 'EEEE, d. MMMM y'], ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1}, {0}', u, '{1} \'um\' {0}', u], [',', '.', ';', '%', '+', '-', 'E', '·', '‰', '∞', 'NaN', ':'], ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'], 'EUR', '€', 'Euro', {
          'ATS': ['öS'],
          'AUD': ['AU$', '$'],
          'BGM': ['BGK'],
          'BGO': ['BGJ'],
          'CUC': [u, 'Cub$'],
          'DEM': ['DM'],
          'FKP': [u, 'Fl£'],
          'GNF': [u, 'F.G.'],
          'KMF': [u, 'FC'],
          'RON': [u, 'L'],
          'RWF': [u, 'F.Rw'],
          'SYP': [],
          'THB': ['฿'],
          'TWD': ['NT$'],
          'XXX': [],
          'ZMW': [u, 'K']
        }, 'ltr', plural];
      }); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNsRDtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMvRSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNsRDtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07YUFDL0Y7WUFDRDtnQkFDRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTO2dCQUM3RixVQUFVLEVBQUUsVUFBVTthQUN2QjtTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUztnQkFDN0YsVUFBVSxFQUFFLFVBQVU7YUFDdkI7U0FDRjtRQUNELENBQUMsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztRQUN2RCxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDN0MsS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ047WUFDRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7WUFDbEIsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7U0FDaEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2RlJyxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ1MnLCAnTScsICdEJywgJ00nLCAnRCcsICdGJywgJ1MnXSwgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydTJywgJ00nLCAnRCcsICdNJywgJ0QnLCAnRicsICdTJ10sIFsnU28nLCAnTW8nLCAnRGknLCAnTWknLCAnRG8nLCAnRnInLCAnU2EnXSxcbiAgICBbJ1Nvbm50YWcnLCAnTW9udGFnJywgJ0RpZW5zdGFnJywgJ01pdHR3b2NoJywgJ0Rvbm5lcnN0YWcnLCAnRnJlaXRhZycsICdTYW1zdGFnJ10sXG4gICAgWydTby4nLCAnTW8uJywgJ0RpLicsICdNaS4nLCAnRG8uJywgJ0ZyLicsICdTYS4nXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFtcbiAgICAgICdKYW4uJywgJ0ZlYi4nLCAnTcOkcnonLCAnQXByLicsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Zy4nLCAnU2VwdC4nLCAnT2t0LicsICdOb3YuJywgJ0Rlei4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnSmFudWFyJywgJ0ZlYnJ1YXInLCAnTcOkcnonLCAnQXByaWwnLCAnTWFpJywgJ0p1bmknLCAnSnVsaScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09rdG9iZXInLFxuICAgICAgJ05vdmVtYmVyJywgJ0RlemVtYmVyJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGZWInLCAnTcOkcicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPa3QnLCAnTm92JywgJ0RleiddLFxuICAgIFtcbiAgICAgICdKYW51YXInLCAnRmVicnVhcicsICdNw6RyeicsICdBcHJpbCcsICdNYWknLCAnSnVuaScsICdKdWxpJywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2t0b2JlcicsXG4gICAgICAnTm92ZW1iZXInLCAnRGV6ZW1iZXInXG4gICAgXVxuICBdLFxuICBbWyd2LiBDaHIuJywgJ24uIENoci4nXSwgdSwgdV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC5NTS55eScsICdkZC5NTS55JywgJ2QuIE1NTU0geScsICdFRUVFLCBkLiBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0sIHswfScsIHUsICd7MX0gXFwndW1cXCcgezB9JywgdV0sXG4gIFsnLCcsICcuJywgJzsnLCAnJScsICcrJywgJy0nLCAnRScsICfCtycsICfigLAnLCAn4oieJywgJ05hTicsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwwqAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ0VVUicsXG4gICfigqwnLFxuICAnRXVybycsXG4gIHtcbiAgICAnQVRTJzogWyfDtlMnXSxcbiAgICAnQVVEJzogWydBVSQnLCAnJCddLFxuICAgICdCR00nOiBbJ0JHSyddLFxuICAgICdCR08nOiBbJ0JHSiddLFxuICAgICdDVUMnOiBbdSwgJ0N1YiQnXSxcbiAgICAnREVNJzogWydETSddLFxuICAgICdGS1AnOiBbdSwgJ0ZswqMnXSxcbiAgICAnR05GJzogW3UsICdGLkcuJ10sXG4gICAgJ0tNRic6IFt1LCAnRkMnXSxcbiAgICAnUk9OJzogW3UsICdMJ10sXG4gICAgJ1JXRic6IFt1LCAnRi5SdyddLFxuICAgICdTWVAnOiBbXSxcbiAgICAnVEhCJzogWyfguL8nXSxcbiAgICAnVFdEJzogWydOVCQnXSxcbiAgICAnWFhYJzogW10sXG4gICAgJ1pNVyc6IFt1LCAnSyddXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=

      /***/

    },

    /***/
    "cD68":
    /*!***************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-datepicker.js ***!
      \***************************************************************************/

    /*! exports provided: MC_DATEPICKER_SCROLL_STRATEGY, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MC_DATEPICKER_VALIDATORS, MC_DATEPICKER_VALUE_ACCESSOR, McCalendar, McCalendarBody, McCalendarCell, McCalendarHeader, McCalendarView, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerInputEvent, McDatepickerIntl, McDatepickerModule, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McMultiYearView, McYearView, mcDatepickerAnimations, yearsPerPage, yearsPerRow */

    /***/
    function cD68(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY", function () {
        return MC_DATEPICKER_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
        return MC_DATEPICKER_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_VALIDATORS", function () {
        return MC_DATEPICKER_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_VALUE_ACCESSOR", function () {
        return MC_DATEPICKER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendar", function () {
        return McCalendar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarBody", function () {
        return McCalendarBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarCell", function () {
        return McCalendarCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarHeader", function () {
        return McCalendarHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarView", function () {
        return McCalendarView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepicker", function () {
        return McDatepicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerContent", function () {
        return McDatepickerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerInput", function () {
        return McDatepickerInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerInputEvent", function () {
        return McDatepickerInputEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerIntl", function () {
        return McDatepickerIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerModule", function () {
        return McDatepickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerToggle", function () {
        return McDatepickerToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerToggleIcon", function () {
        return McDatepickerToggleIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McMonthView", function () {
        return McMonthView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McMultiYearView", function () {
        return McMultiYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McYearView", function () {
        return McYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mcDatepickerAnimations", function () {
        return mcDatepickerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
        return yearsPerPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
        return yearsPerRow;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/cdk/datetime */
      "Vue8");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ptsecurity/cdk/keycodes */
      "SfmH");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tooltip */
      "341e");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic"); // tslint:disable:no-magic-numbers

      /**
       * An internal class that represents the data corresponding to a single calendar cell.
       * @docs-private
       */


      var _c0 = ["mc-calendar-body", ""];

      function McCalendarBody_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r0.numCols);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
        }
      }

      function McCalendarBody_tr_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4.firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
        }
      }

      function McCalendarBody_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarBody_tr_1_td_2_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var item_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r8.cellClicked(item_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var colIndex_r7 = ctx.index;

          var rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r5.cellWidth)("padding-top", ctx_r5.cellPadding)("padding-bottom", ctx_r5.cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-calendar__body_disabled", !item_r6.enabled)("mc-calendar__body_active", ctx_r5.isActiveCell(rowIndex_r3, colIndex_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5.isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-selected", ctx_r5.selectedValue === item_r6.value)("mc-calendar__body-today", ctx_r5.todayValue === item_r6.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
        }
      }

      function McCalendarBody_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, McCalendarBody_tr_1_td_1_Template, 2, 2, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, McCalendarBody_tr_1_td_2_Template, 3, 17, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;
          var rowIndex_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1.firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r2);
        }
      }

      function McMonthView_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r1["long"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r1.narrow);
        }
      }

      function McCalendar_ng_template_0_Template(rf, ctx) {}

      function McCalendar_mc_month_view_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-month-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function McCalendar_mc_month_view_2_Template_mc_month_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.activeDate = $event;
          })("selectedChange", function McCalendar_mc_month_view_2_Template_mc_month_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.dateSelected($event);
          })("userSelection", function McCalendar_mc_month_view_2_Template_mc_month_view_userSelection_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.userSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
        }
      }

      function McCalendar_mc_year_view_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-year-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function McCalendar_mc_year_view_3_Template_mc_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.activeDate = $event;
          })("monthSelected", function McCalendar_mc_year_view_3_Template_mc_year_view_monthSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.monthSelectedInYearView($event);
          })("selectedChange", function McCalendar_mc_year_view_3_Template_mc_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.goToDateInView($event, "multi-year");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate);
        }
      }

      function McCalendar_mc_multi_year_view_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-multi-year-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function McCalendar_mc_multi_year_view_4_Template_mc_multi_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r12.activeDate = $event;
          })("yearSelected", function McCalendar_mc_multi_year_view_4_Template_mc_multi_year_view_yearSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.yearSelectedInMultiYearView($event);
          })("selectedChange", function McCalendar_mc_multi_year_view_4_Template_mc_multi_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.goToDateInView($event, "month");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate);
        }
      }

      var _c1 = ["button"];

      function McDatepickerToggle_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 3);
        }
      }

      var _c2 = [[["", "mcDatepickerToggleIcon", ""]]];
      var _c3 = ["[mcDatepickerToggleIcon]"];

      var McCalendarCell = function McCalendarCell(value, displayValue, ariaLabel, enabled, cssClasses) {
        _classCallCheck(this, McCalendarCell);

        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
      };
      /**
       * An internal component used to display calendar data in a table.
       * @docs-private
       */


      var McCalendarBody = /*#__PURE__*/function () {
        function McCalendarBody(elementRef, ngZone) {
          _classCallCheck(this, McCalendarBody);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          /** The number of columns in the table. */

          this.numCols = 7;
          /** The cell number of the active cell in the table. */

          this.activeCell = 0;
          /**
           * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
           * maintained even as the table resizes.
           */

          this.cellAspectRatio = 1;
          /** Emits when a new value is selected. */

          this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        }

        _createClass(McCalendarBody, [{
          key: "cellClicked",
          value: function cellClicked(cell) {
            if (cell.enabled) {
              this.selectedValueChange.emit(cell.value);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var columnChanges = changes.numCols; // tslint:disable-next-line:no-this-assignment

            var rows = this.rows,
                numCols = this.numCols;

            if (changes.rows || columnChanges) {
              this.firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
            }

            if (changes.cellAspectRatio || columnChanges || !this.cellPadding) {
              this.cellPadding = "".concat(this.cellAspectRatio * 50 / numCols, "%");
            }

            if (columnChanges || !this.cellWidth) {
              this.cellWidth = "".concat(100 / numCols, "%");
            }
          }
        }, {
          key: "isActiveCell",
          value: function isActiveCell(rowIndex, colIndex) {
            var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

            if (rowIndex) {
              cellNumber -= this.firstRowOffset;
            }

            return cellNumber === this.activeCell;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            var _this = this;

            this.ngZone.runOutsideAngular(function () {
              _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                var activeCell = _this.elementRef.nativeElement.querySelector('.mc-calendar__body_active');

                if (activeCell) {
                  activeCell.focus();
                }
              });
            });
          }
        }]);

        return McCalendarBody;
      }();

      McCalendarBody.ɵfac = function McCalendarBody_Factory(t) {
        return new (t || McCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
      };

      McCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McCalendarBody,
        selectors: [["", "mc-calendar-body", ""]],
        hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mc-calendar__body"],
        inputs: {
          numCols: "numCols",
          activeCell: "activeCell",
          cellAspectRatio: "cellAspectRatio",
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          selectedValue: "selectedValue",
          labelMinRequiredCells: "labelMinRequiredCells"
        },
        outputs: {
          selectedValueChange: "selectedValueChange"
        },
        exportAs: ["mcCalendarBody"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mc-calendar__body-label"], ["class", "mc-calendar__body-label", 4, "ngIf"], ["class", "mc-calendar__body-cell", 3, "ngClass", "tabindex", "mc-calendar__body_disabled", "mc-calendar__body_active", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], [1, "mc-calendar__body-cell", 3, "ngClass", "tabindex", "click"], [1, "mc-calendar__body-cell-content"]],
        template: function McCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, McCalendarBody_tr_0_Template, 3, 2, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, McCalendarBody_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.firstRowOffset < ctx.labelMinRequiredCells);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mc-calendar__body{min-width:calc(7 * var(--mc-datepicker-body-size-cell-min-size, $datepicker-body-size-cell-min-size))}.mc-calendar__body-label{text-align:left;padding:var(--mc-datepicker-body-size-label-paddings,8px 28px 12px 12px)}.mc-calendar__body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mc-calendar__body_disabled{cursor:default}.mc-calendar__body-cell-content{position:absolute;top:var(--mc-datepicker-body-size-cell-margin,5%);left:var(--mc-datepicker-body-size-cell-margin,5%);padding:var(--mc-datepicker-body-size-cell-padding,8px);display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:var(--mc-datepicker-body-size-cell-border-width,1px);border-style:solid}.cdk-high-contrast-active .mc-calendar__body-cell-content,.cdk-high-contrast-active :host .mc-calendar__body-cell-content{border:none}mc-month-view .mc-calendar__body-cell-content{justify-content:flex-end}mc-multi-year-view .mc-calendar__body-cell-content,mc-year-view .mc-calendar__body-cell-content{justify-content:center}.cdk-high-contrast-active .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active .mc-selected{outline:1px solid}.cdk-high-contrast-active .mc-calendar__body-today{outline:1px dotted}.cdk-high-contrast-active :host .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active :host .mc-selected{outline:1px solid}.cdk-high-contrast-active :host .mc-calendar__body-today{outline:1px dotted}[dir=rtl] .mc-calendar__body-label{text-align:right}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCalendarBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }];
      };

      McCalendarBody.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        todayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        labelMinRequiredCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        numCols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        activeCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        cellAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McCalendarBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mc-calendar-body]',
            exportAs: 'mcCalendarBody',
            template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"firstRowOffset < labelMinRequiredCells\">\n    <td class=\"mc-calendar__body-label\" [attr.colspan]=\"numCols\">\n        {{ label }}\n    </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\">\n    <!--\n      We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n      The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n      percentage of the width (a variant of the trick described here:\n      https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n    -->\n    <td *ngIf=\"rowIndex === 0 && firstRowOffset\"\n        class=\"mc-calendar__body-label\"\n        [attr.colspan]=\"firstRowOffset\">\n        {{ firstRowOffset >= labelMinRequiredCells ? label : '' }}\n    </td>\n    <td *ngFor=\"let item of row; let colIndex = index\"\n        class=\"mc-calendar__body-cell\"\n        [ngClass]=\"item.cssClasses\"\n        [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n        [class.mc-calendar__body_disabled]=\"!item.enabled\"\n        [class.mc-calendar__body_active]=\"isActiveCell(rowIndex, colIndex)\"\n        (click)=\"cellClicked(item)\"\n        [style.width]=\"cellWidth\"\n        [style.paddingTop]=\"cellPadding\"\n        [style.paddingBottom]=\"cellPadding\">\n        <div class=\"mc-calendar__body-cell-content\"\n             [class.mc-selected]=\"selectedValue === item.value\"\n             [class.mc-calendar__body-today]=\"todayValue === item.value\">\n            {{ item.displayValue }}\n        </div>\n    </td>\n</tr>\n",
            host: {
              "class": 'mc-calendar__body',
              role: 'grid',
              'aria-readonly': 'true'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-calendar__body{min-width:calc(7 * var(--mc-datepicker-body-size-cell-min-size, $datepicker-body-size-cell-min-size))}.mc-calendar__body-label{text-align:left;padding:var(--mc-datepicker-body-size-label-paddings,8px 28px 12px 12px)}.mc-calendar__body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mc-calendar__body_disabled{cursor:default}.mc-calendar__body-cell-content{position:absolute;top:var(--mc-datepicker-body-size-cell-margin,5%);left:var(--mc-datepicker-body-size-cell-margin,5%);padding:var(--mc-datepicker-body-size-cell-padding,8px);display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:var(--mc-datepicker-body-size-cell-border-width,1px);border-style:solid}.cdk-high-contrast-active .mc-calendar__body-cell-content,.cdk-high-contrast-active :host .mc-calendar__body-cell-content{border:none}mc-month-view .mc-calendar__body-cell-content{justify-content:flex-end}mc-multi-year-view .mc-calendar__body-cell-content,mc-year-view .mc-calendar__body-cell-content{justify-content:center}.cdk-high-contrast-active .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active .mc-selected{outline:1px solid}.cdk-high-contrast-active .mc-calendar__body-today{outline:1px dotted}.cdk-high-contrast-active :host .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active :host .mc-selected{outline:1px solid}.cdk-high-contrast-active :host .mc-calendar__body-today{outline:1px dotted}[dir=rtl] .mc-calendar__body-label{text-align:right}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }];
        }, {
          numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** @docs-private */


      function createMissingDateImplError(provider) {
        return Error("McDatepicker: No provider found for ".concat(provider, ". You must import one of the existing ") + "modules at your application root or provide a custom implementation or use exists ones.");
      }
      /** Datepicker data that requires internationalization. */


      var McDatepickerIntl = function McDatepickerIntl() {
        _classCallCheck(this, McDatepickerIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** A label for the calendar popup (used by screen readers). */

        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */

        this.openCalendarLabel = 'Open calendar';
        /** A label for the previous month button (used by screen readers). */

        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */

        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */

        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */

        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */

        this.prevMultiYearLabel = 'Previous 20 years';
        /** A label for the next multi-year button (used by screen readers). */

        this.nextMultiYearLabel = 'Next 20 years';
        /** A label for the 'switch to month view' button (used by screen readers). */

        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */

        this.switchToMultiYearViewLabel = 'Choose month and year';
      };

      McDatepickerIntl.ɵfac = function McDatepickerIntl_Factory(t) {
        return new (t || McDatepickerIntl)();
      };
      /** @nocollapse */


      McDatepickerIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function McDatepickerIntl_Factory() {
          return new McDatepickerIntl();
        },
        token: McDatepickerIntl,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })(); // tslint:disable:no-magic-numbers


      var DAYS_PER_WEEK = 7;
      /**
       * An internal component used to display a single month in the datepicker.
       * @docs-private
       */

      var McMonthView = /*#__PURE__*/function () {
        function McMonthView(changeDetectorRef, dateFormats, dateAdapter, dir) {
          _classCallCheck(this, McMonthView);

          this.changeDetectorRef = changeDetectorRef;
          this.dateFormats = dateFormats;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          /** Emits when a new date is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          var firstDayOfWeek = this.dateAdapter.getFirstDayOfWeek();
          var narrowWeekdays = this.dateAdapter.getDayOfWeekNames('short');
          var longWeekdays = this.dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.

          var weekdays = longWeekdays.map(function (_long, i) {
            return {
              "long": _long,
              narrow: narrowWeekdays[i]
            };
          });
          this.weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
          this._activeDate = this.dateAdapter.today();
        }
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */


        _createClass(McMonthView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;
            var validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
            this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!this.hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
              this.init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.selectedDate = this.getDateInCurrentMonth(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.init();
          }
          /** Handles when a new date is selected. */

        }, {
          key: "dateSelected",
          value: function dateSelected(date) {
            if (this.selectedDate !== date) {
              var selectedYear = this.dateAdapter.getYear(this.activeDate);
              var selectedMonth = this.dateAdapter.getMonth(this.activeDate);
              var selectedDate = this.dateAdapter.createDate(selectedYear, selectedMonth, date);
              this.selectedChange.emit(selectedDate);
            }

            this.userSelection.emit();
          }
          /** Handles keydown events on the calendar body when calendar is in month view. */

        }, {
          key: "handleCalendarBodyKeydown",
          value: function handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;
            var isRtl = this.isRtl(); // tslint:disable-next-line:deprecation

            switch (event.keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, -7);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 7);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 1 - this.dateAdapter.getDate(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, this.dateAdapter.getNumDaysInMonth(this._activeDate) - this.dateAdapter.getDate(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = event.altKey ? this.dateAdapter.addCalendarYears(this._activeDate, -1) : this.dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = event.altKey ? this.dateAdapter.addCalendarYears(this._activeDate, 1) : this.dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                  this.dateSelected(this.dateAdapter.getDate(this._activeDate));
                  this.userSelection.emit(); // Prevent unexpected default actions such as form submission.

                  event.preventDefault();
                }

                return;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this.focusActiveCell(); // Prevent unexpected default actions such as form submission.

            event.preventDefault();
          }
          /** Initializes this month view. */

        }, {
          key: "init",
          value: function init() {
            this.selectedDate = this.getDateInCurrentMonth(this.selected);
            this.todayDate = this.getDateInCurrentMonth(this.dateAdapter.today());
            this.monthLabel = this.dateAdapter.getMonthNames('short')[this.dateAdapter.getMonth(this.activeDate)];
            this.monthLabel = this.monthLabel[0].toLocaleUpperCase() + this.monthLabel.substr(1);
            var firstOfMonth = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), this.dateAdapter.getMonth(this.activeDate));
            this.firstWeekOffset = (DAYS_PER_WEEK + this.dateAdapter.getDayOfWeek(firstOfMonth) - this.dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
            this.createWeekCells();
            this.changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.mcCalendarBody.focusActiveCell();
          }
          /** Creates McCalendarCells for the dates in this month. */

        }, {
          key: "createWeekCells",
          value: function createWeekCells() {
            var daysInMonth = this.dateAdapter.getNumDaysInMonth(this.activeDate);
            var dateNames = this.dateAdapter.getDateNames();
            this.weeks = [[]];

            for (var i = 0, cell = this.firstWeekOffset; i < daysInMonth; i++, cell++) {
              if (cell === DAYS_PER_WEEK) {
                this.weeks.push([]);
                cell = 0;
              }

              var date = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), this.dateAdapter.getMonth(this.activeDate), i + 1);
              var enabled = this.shouldEnableDate(date);
              var ariaLabel = this.dateAdapter.format(date, this.dateFormats.dateA11yLabel);
              var cellClasses = this.dateClass ? this.dateClass(date) : undefined;
              this.weeks[this.weeks.length - 1].push(new McCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
            }
          }
          /** Date filter for the month */

        }, {
          key: "shouldEnableDate",
          value: function shouldEnableDate(date) {
            return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this.dateAdapter.compareDate(date, this.maxDate) <= 0);
          }
          /**
           * Gets the date in this month that the given Date falls on.
           * Returns null if the given Date is in another month.
           */

        }, {
          key: "getDateInCurrentMonth",
          value: function getDateInCurrentMonth(date) {
            return date && this.hasSameMonthAndYear(date, this.activeDate) ? this.dateAdapter.getDate(date) : null;
          }
          /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */

        }, {
          key: "hasSameMonthAndYear",
          value: function hasSameMonthAndYear(d1, d2) {
            return !!(d1 && d2 && this.dateAdapter.getMonth(d1) === this.dateAdapter.getMonth(d2) && this.dateAdapter.getYear(d1) === this.dateAdapter.getYear(d2));
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir && this.dir.value === 'rtl';
          }
        }]);

        return McMonthView;
      }();

      McMonthView.ɵfac = function McMonthView_Factory(t) {
        return new (t || McMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      McMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McMonthView,
        selectors: [["mc-month-view"]],
        viewQuery: function McMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendarBody, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mcCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          userSelection: "userSelection",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["mcMonthView"],
        decls: 7,
        vars: 7,
        consts: [[1, "mc-calendar__table"], [1, "mc-calendar__table-header"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "mc-calendar__table-header-divider"], ["mc-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "activeCell", "selectedValueChange", "keydown"]],
        template: function McMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, McMonthView_th_3_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function McMonthView_Template_tbody_selectedValueChange_6_listener($event) {
              return ctx.dateSelected($event);
            })("keydown", function McMonthView_Template_tbody_keydown_6_listener($event) {
              return ctx.handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.weekdays);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx.monthLabel)("rows", ctx.weeks)("todayValue", ctx.todayDate)("selectedValue", ctx.selectedDate)("labelMinRequiredCells", 3)("activeCell", ctx.dateAdapter.getDate(ctx.activeDate) - 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], McCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McMonthView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      McMonthView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        mcCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendarBody, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McMonthView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-month-view',
            exportAs: 'mcMonthView',
            template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n        <tr>\n            <th *ngFor=\"let day of weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n        </tr>\n        <tr>\n            <th class=\"mc-calendar__table-header-divider\" colspan=\"7\"></th>\n        </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [label]=\"monthLabel\"\n           [rows]=\"weeks\"\n           [todayValue]=\"todayDate\"\n           [selectedValue]=\"selectedDate\"\n           [labelMinRequiredCells]=\"3\"\n           [activeCell]=\"dateAdapter.getDate(activeDate) - 1\"\n           (selectedValueChange)=\"dateSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendarBody, {
              "static": false
            }]
          }]
        });
      })(); // tslint:disable:no-magic-numbers


      var yearsPerPage = 24;
      var yearsPerRow = 4;
      /**
       * An internal component used to display a year selector in the datepicker.
       * @docs-private
       */

      var McMultiYearView = /*#__PURE__*/function () {
        function McMultiYearView(changeDetectorRef, dateAdapter, dir) {
          _classCallCheck(this, McMultiYearView);

          this.changeDetectorRef = changeDetectorRef;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          /** Emits when a new year is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected year. This doesn't imply a change on the selected date */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._activeDate = this.dateAdapter.today();
        }
        /** The date to display in this multi-year view (everything other than the year is ignored). */


        _createClass(McMultiYearView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;
            var validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
            this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (Math.floor(this.dateAdapter.getYear(oldActiveDate) / yearsPerPage) !== Math.floor(this.dateAdapter.getYear(this._activeDate) / yearsPerPage)) {
              this.init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.selectedYear = this._selected && this.dateAdapter.getYear(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.init();
          }
          /** Initializes this multi-year view. */

        }, {
          key: "init",
          value: function init() {
            var _this2 = this;

            this.todayYear = this.dateAdapter.getYear(this.dateAdapter.today());
            var activeYear = this.dateAdapter.getYear(this._activeDate);
            var activeOffset = activeYear % yearsPerPage;
            this.years = [];

            for (var i = 0, row = []; i < yearsPerPage; i++) {
              row.push(activeYear - activeOffset + i);

              if (row.length === yearsPerRow) {
                this.years.push(row.map(function (year) {
                  return _this2.createCellForYear(year);
                }));
                row = [];
              }
            }

            this.changeDetectorRef.markForCheck();
          }
          /** Handles when a new year is selected. */

        }, {
          key: "onYearSelected",
          value: function onYearSelected(year) {
            this.yearSelected.emit(this.dateAdapter.createDate(year));
            var month = this.dateAdapter.getMonth(this.activeDate);
            var daysInMonth = this.dateAdapter.getNumDaysInMonth(this.dateAdapter.createDate(year, month));
            this.selectedChange.emit(this.dateAdapter.createDate(year, month, Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in multi-year view. */

        }, {
          key: "handleCalendarBodyKeydown",
          value: function handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;
            var isRtl = this.isRtl(); // tslint:disable-next-line:deprecation

            switch (event.keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, -this.dateAdapter.getYear(this._activeDate) % yearsPerPage);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - this.dateAdapter.getYear(this._activeDate) % yearsPerPage - 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                this.onYearSelected(this.dateAdapter.getYear(this._activeDate));
                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this.focusActiveCell(); // Prevent unexpected default actions such as form submission.

            event.preventDefault();
          }
        }, {
          key: "getActiveCell",
          value: function getActiveCell() {
            return this.dateAdapter.getYear(this.activeDate) % yearsPerPage;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.mcCalendarBody.focusActiveCell();
          }
          /** Creates an McCalendarCell for the given year. */

        }, {
          key: "createCellForYear",
          value: function createCellForYear(year) {
            var yearName = this.dateAdapter.getYearName(this.dateAdapter.createDate(year));
            return new McCalendarCell(year, yearName, yearName, this.shouldEnableYear(year));
          }
          /** Whether the given year is enabled. */

        }, {
          key: "shouldEnableYear",
          value: function shouldEnableYear(year) {
            // disable if the year is greater than maxDate lower than minDate
            if (year === undefined || year === null || this.maxDate && year > this.dateAdapter.getYear(this.maxDate) || this.minDate && year < this.dateAdapter.getYear(this.minDate)) {
              return false;
            } // enable if it reaches here and there's no filter defined


            if (!this.dateFilter) {
              return true;
            }

            var firstOfYear = this.dateAdapter.createDate(year); // If any date in the year is enabled count the year as enabled.

            for (var date = firstOfYear; this.dateAdapter.getYear(date) === year; date = this.dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir && this.dir.value === 'rtl';
          }
        }]);

        return McMultiYearView;
      }();

      McMultiYearView.ɵfac = function McMultiYearView_Factory(t) {
        return new (t || McMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      McMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McMultiYearView,
        selectors: [["mc-multi-year-view"]],
        viewQuery: function McMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendarBody, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mcCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["mcMultiYearView"],
        decls: 5,
        vars: 6,
        consts: [[1, "mc-calendar__table"], [1, "mc-calendar__table-header"], ["colspan", "4", 1, "mc-calendar__table-header-divider"], ["mc-calendar-body", "", 3, "rows", "todayValue", "selectedValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function McMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function McMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx.onYearSelected($event);
            })("keydown", function McMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx.handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.years)("todayValue", ctx.todayYear)("selectedValue", ctx.selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx.getActiveCell());
          }
        },
        directives: [McCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McMultiYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      McMultiYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        mcCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendarBody, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McMultiYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-multi-year-view',
            exportAs: 'mcMultiYearView',
            template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n    <tr>\n        <th class=\"mc-calendar__table-header-divider\" colspan=\"4\"></th>\n    </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [rows]=\"years\"\n           [todayValue]=\"todayYear\"\n           [selectedValue]=\"selectedYear\"\n           [numCols]=\"4\"\n           [cellAspectRatio]=\"4 / 7\"\n           [activeCell]=\"getActiveCell()\"\n           (selectedValueChange)=\"onYearSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendarBody, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * An internal component used to display a single year in the datepicker.
       * @docs-private
       */


      var McYearView = /*#__PURE__*/function () {
        function McYearView(changeDetectorRef, dateFormats, dateAdapter, dir) {
          _classCallCheck(this, McYearView);

          this.changeDetectorRef = changeDetectorRef;
          this.dateFormats = dateFormats;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          /** Emits when a new month is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected month. This doesn't imply a change on the selected date */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          this._activeDate = this.dateAdapter.today();
        }
        /** The date to display in this year view (everything other than the year is ignored). */


        _createClass(McYearView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;
            var validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
            this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (this.dateAdapter.getYear(oldActiveDate) !== this.dateAdapter.getYear(this._activeDate)) {
              this.init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.selectedMonth = this.getMonthInCurrentYear(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.init();
          }
          /** Handles when a new month is selected. */

        }, {
          key: "onMonthSelected",
          value: function onMonthSelected(month) {
            var year = this.dateAdapter.getYear(this.activeDate);
            var normalizedDate = this.dateAdapter.createDate(year, month);
            this.monthSelected.emit(normalizedDate);
            var daysInMonth = this.dateAdapter.getNumDaysInMonth(normalizedDate);
            this.selectedChange.emit(this.dateAdapter.createDate(year, month, Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in year view. */

        }, {
          key: "handleCalendarBodyKeydown",
          value: function handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;
            var isRtl = this.isRtl();
            var VERTICAL_SHIFT = 4;
            var PAGE_SHIFT = 10;
            var MAX_MONTH_INDEX = 11; // tslint:disable-next-line:deprecation

            switch (event.keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, -VERTICAL_SHIFT);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, VERTICAL_SHIFT);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, -this.dateAdapter.getMonth(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, MAX_MONTH_INDEX - this.dateAdapter.getMonth(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -PAGE_SHIFT : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? PAGE_SHIFT : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                this.onMonthSelected(this.dateAdapter.getMonth(this._activeDate));
                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this.focusActiveCell(); // Prevent unexpected default actions such as form submission.

            event.preventDefault();
          }
          /** Initializes this year view. */

        }, {
          key: "init",
          value: function init() {
            var _this3 = this;

            this.selectedMonth = this.getMonthInCurrentYear(this.selected);
            this.todayMonth = this.getMonthInCurrentYear(this.dateAdapter.today());
            this.yearLabel = this.dateAdapter.getYearName(this.activeDate);
            var monthNames = this.dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.
            // tslint:disable-next-line:no-magic-numbers

            this.months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
              return row.map(function (month) {
                return _this3.createCellForMonth(month, monthNames[month]);
              });
            });
            this.changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.mcCalendarBody.focusActiveCell();
          }
          /**
           * Gets the month in this year that the given Date falls on.
           * Returns null if the given Date is in another year.
           */

        }, {
          key: "getMonthInCurrentYear",
          value: function getMonthInCurrentYear(date) {
            return date && this.dateAdapter.getYear(date) === this.dateAdapter.getYear(this.activeDate) ? this.dateAdapter.getMonth(date) : null;
          }
          /** Creates an McCalendarCell for the given month. */

        }, {
          key: "createCellForMonth",
          value: function createCellForMonth(month, monthName) {
            var ariaLabel = this.dateAdapter.format(this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), month), this.dateFormats.monthYearA11yLabel);
            var newMonthName = monthName[0].toLocaleUpperCase() + monthName.substr(1);
            return new McCalendarCell(month, newMonthName, ariaLabel, this.shouldEnableMonth(month));
          }
          /** Whether the given month is enabled. */

        }, {
          key: "shouldEnableMonth",
          value: function shouldEnableMonth(month) {
            var activeYear = this.dateAdapter.getYear(this.activeDate);

            if (month === undefined || month === null || this.isYearAndMonthAfterMaxDate(activeYear, month) || this.isYearAndMonthBeforeMinDate(activeYear, month)) {
              return false;
            }

            if (!this.dateFilter) {
              return true;
            }

            var firstOfMonth = this.dateAdapter.createDate(activeYear, month); // If any date in the month is enabled count the month as enabled.

            for (var date = firstOfMonth; this.dateAdapter.getMonth(date) === month; date = this.dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is after this.maxDate, considering
           * just the month and year of this.maxDate
           */

        }, {
          key: "isYearAndMonthAfterMaxDate",
          value: function isYearAndMonthAfterMaxDate(year, month) {
            if (this.maxDate) {
              var maxYear = this.dateAdapter.getYear(this.maxDate);
              var maxMonth = this.dateAdapter.getMonth(this.maxDate);
              return year > maxYear || year === maxYear && month > maxMonth;
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is before this.minDate, considering
           * just the month and year of this.minDate
           */

        }, {
          key: "isYearAndMonthBeforeMinDate",
          value: function isYearAndMonthBeforeMinDate(year, month) {
            if (this.minDate) {
              var minYear = this.dateAdapter.getYear(this.minDate);
              var minMonth = this.dateAdapter.getMonth(this.minDate);
              return year < minYear || year === minYear && month < minMonth;
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir && this.dir.value === 'rtl';
          }
        }]);

        return McYearView;
      }();

      McYearView.ɵfac = function McYearView_Factory(t) {
        return new (t || McYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      McYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McYearView,
        selectors: [["mc-year-view"]],
        viewQuery: function McYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendarBody, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mcCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["mcYearView"],
        decls: 5,
        vars: 8,
        consts: [[1, "mc-calendar__table"], [1, "mc-calendar__table-header"], ["colspan", "4", 1, "mc-calendar__table-header-divider"], ["mc-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function McYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function McYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx.onMonthSelected($event);
            })("keydown", function McYearView_Template_tbody_keydown_4_listener($event) {
              return ctx.handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx.yearLabel)("rows", ctx.months)("todayValue", ctx.todayMonth)("selectedValue", ctx.selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx.dateAdapter.getMonth(ctx.activeDate));
          }
        },
        directives: [McCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      McYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        mcCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendarBody, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-year-view',
            exportAs: 'mcYearView',
            template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n    <tr>\n        <th class=\"mc-calendar__table-header-divider\" colspan=\"4\"></th>\n    </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [label]=\"yearLabel\"\n           [rows]=\"months\"\n           [todayValue]=\"todayMonth\"\n           [selectedValue]=\"selectedMonth\"\n           [labelMinRequiredCells]=\"2\"\n           [numCols]=\"4\"\n           [cellAspectRatio]=\"4 / 7\"\n           [activeCell]=\"dateAdapter.getMonth(activeDate)\"\n           (selectedValueChange)=\"onMonthSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendarBody, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Possible views for the calendar.
       * @docs-private
       */


      var McCalendarView;

      (function (McCalendarView) {
        McCalendarView["Month"] = "month";
        McCalendarView["Year"] = "year";
        McCalendarView["MultiYear"] = "multi-year";
      })(McCalendarView || (McCalendarView = {}));
      /** Default header for McCalendar */


      var McCalendarHeader = /*#__PURE__*/function () {
        function McCalendarHeader(intl, calendar, dateAdapter, dateFormats, changeDetectorRef) {
          _classCallCheck(this, McCalendarHeader);

          this.intl = intl;
          this.calendar = calendar;
          this.dateAdapter = dateAdapter;
          this.dateFormats = dateFormats;
          this.calendar.stateChanges.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
        }
        /** The label for the current calendar view. */


        _createClass(McCalendarHeader, [{
          key: "periodButtonText",
          get: function get() {
            if (this.calendar.currentView === McCalendarView.Month) {
              var label = this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.monthYearLabel);
              return (label[0].toLocaleUpperCase() + label.substr(1)).replace('.', '');
            }

            if (this.calendar.currentView === McCalendarView.Year) {
              return this.dateAdapter.getYearName(this.calendar.activeDate);
            }

            var activeYear = this.dateAdapter.getYear(this.calendar.activeDate);
            var firstYearInView = this.dateAdapter.getYearName( // tslint:disable-next-line:no-magic-numbers
            this.dateAdapter.createDate(activeYear - activeYear % 24));
            var lastYearInView = this.dateAdapter.getYearName( // tslint:disable-next-line:no-magic-numbers
            this.dateAdapter.createDate(activeYear + yearsPerPage - 1 - activeYear % 24));
            return "".concat(firstYearInView, " \u2013 ").concat(lastYearInView);
          }
        }, {
          key: "periodButtonLabel",
          get: function get() {
            return this.calendar.currentView === McCalendarView.Month ? this.intl.switchToMultiYearViewLabel : this.intl.switchToMonthViewLabel;
          }
          /** The label for the previous button. */

        }, {
          key: "prevButtonLabel",
          get: function get() {
            var _McCalendarView$Month;

            return (_McCalendarView$Month = {}, _defineProperty(_McCalendarView$Month, McCalendarView.Month, this.intl.prevMonthLabel), _defineProperty(_McCalendarView$Month, McCalendarView.Year, this.intl.prevYearLabel), _defineProperty(_McCalendarView$Month, McCalendarView.MultiYear, this.intl.prevMultiYearLabel), _McCalendarView$Month)[this.calendar.currentView];
          }
          /** The label for the next button. */

        }, {
          key: "nextButtonLabel",
          get: function get() {
            var _McCalendarView$Month2;

            return (_McCalendarView$Month2 = {}, _defineProperty(_McCalendarView$Month2, McCalendarView.Month, this.intl.nextMonthLabel), _defineProperty(_McCalendarView$Month2, McCalendarView.Year, this.intl.nextYearLabel), _defineProperty(_McCalendarView$Month2, McCalendarView.MultiYear, this.intl.nextMultiYearLabel), _McCalendarView$Month2)[this.calendar.currentView];
          }
          /** Handles user clicks on the period label. */

        }, {
          key: "currentPeriodClicked",
          value: function currentPeriodClicked() {
            if ([McCalendarView.Month, McCalendarView.MultiYear].includes(this.calendar.currentView)) {
              this.calendar.currentView = McCalendarView.Year;
            } else if (this.calendar.currentView === McCalendarView.Year) {
              this.calendar.currentView = McCalendarView.Month;
            }
          }
          /** Handles user clicks on the previous button. */

        }, {
          key: "previousClicked",
          value: function previousClicked() {
            if (this.calendar.currentView === McCalendarView.Month) {
              this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
            } else {
              this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView === McCalendarView.Year ? -1 : -yearsPerPage);
            }
          }
          /** Handles user clicks on the next button. */

        }, {
          key: "nextClicked",
          value: function nextClicked() {
            if (this.calendar.currentView === McCalendarView.Month) {
              this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
            } else {
              this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView === McCalendarView.Year ? 1 : yearsPerPage);
            }
          }
          /** Whether the previous period button is enabled. */

        }, {
          key: "previousEnabled",
          value: function previousEnabled() {
            if (!this.calendar.minDate) {
              return true;
            }

            return !this.calendar.minDate || !this.isSameView(this.calendar.activeDate, this.calendar.minDate);
          }
          /** Whether the next period button is enabled. */

        }, {
          key: "nextEnabled",
          value: function nextEnabled() {
            return !this.calendar.maxDate || !this.isSameView(this.calendar.activeDate, this.calendar.maxDate);
          }
          /** Whether the two dates represent the same view in the current view mode (month or year). */

        }, {
          key: "isSameView",
          value: function isSameView(firstDate, secondDate) {
            var firstYear = this.dateAdapter.getYear(firstDate);
            var secondYear = this.dateAdapter.getYear(secondDate);
            var firstMonth = this.dateAdapter.getMonth(firstDate);
            var secondMonth = this.dateAdapter.getMonth(secondDate);

            if (this.calendar.currentView === McCalendarView.Month) {
              return firstYear === secondYear && firstMonth === secondMonth;
            }

            if (this.calendar.currentView === McCalendarView.Year) {
              return firstYear === secondYear;
            } // Otherwise we are in 'multi-year' view.


            return Math.floor(firstYear / yearsPerPage) === Math.floor(secondYear / yearsPerPage);
          }
        }]);

        return McCalendarHeader;
      }();

      McCalendarHeader.ɵfac = function McCalendarHeader_Factory(t) {
        return new (t || McCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](McDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return McCalendar;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McCalendarHeader,
        selectors: [["mc-calendar-header"]],
        hostAttrs: [1, "mc-calendar-header"],
        exportAs: ["mcCalendarHeader"],
        decls: 8,
        vars: 10,
        consts: [["mc-button", "", 1, "mc-button_transparent", "mc-calendar__period-button", 3, "tabindex", "click"], [1, "mc", "mc-icon"], [1, "mc-calendar-spacer"], ["mc-button", "", 1, "mc-button_transparent", "mc-calendar__previous-button", 3, "tabindex", "disabled", "click"], ["mc-icon", "mc-angle-left-L_16"], ["mc-button", "", 1, "mc-button_transparent", "mc-calendar__next-button", 3, "tabindex", "disabled", "click"], ["mc-icon", "mc-angle-right-L_16"]],
        template: function McCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarHeader_Template_button_click_0_listener() {
              return ctx.currentPeriodClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarHeader_Template_button_click_4_listener() {
              return ctx.previousClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarHeader_Template_button_click_6_listener() {
              return ctx.nextClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", "-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-angle-up-M_16", ctx.calendar.currentView !== "month")("mc-angle-down-M_16", ctx.calendar.currentView === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", "-1")("disabled", !ctx.previousEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", "-1")("disabled", !ctx.nextEnabled());
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonCssStyler"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCalendarHeader.ctorParameters = function () {
        return [{
          type: McDatepickerIntl
        }, {
          type: McCalendar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return McCalendar;
            })]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McCalendarHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-calendar-header',
            template: "<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__period-button\"\n        (click)=\"currentPeriodClicked()\">\n    {{ periodButtonText }}\n\n    <i class=\"mc mc-icon\"\n       [class.mc-angle-up-M_16]=\"calendar.currentView !== 'month'\"\n       [class.mc-angle-down-M_16]=\"calendar.currentView === 'month'\">\n    </i>\n</button>\n\n<div class=\"mc-calendar-spacer\"></div>\n\n<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__previous-button\"\n        [disabled]=\"!previousEnabled()\"\n        (click)=\"previousClicked()\">\n\n    <i mc-icon=\"mc-angle-left-L_16\"></i>\n</button>\n\n<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__next-button\"\n        [disabled]=\"!nextEnabled()\"\n        (click)=\"nextClicked()\">\n\n    <i mc-icon=\"mc-angle-right-L_16\"></i>\n</button>\n",
            exportAs: 'mcCalendarHeader',
            host: {
              "class": 'mc-calendar-header'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: McDatepickerIntl
          }, {
            type: McCalendar,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return McCalendar;
              })]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * A calendar that is used as part of the datepicker.
       * @docs-private
       */


      var McCalendar = /*#__PURE__*/function () {
        function McCalendar(intl, dateAdapter, dateFormats, changeDetectorRef) {
          var _this4 = this;

          _classCallCheck(this, McCalendar);

          this.dateAdapter = dateAdapter;
          this.dateFormats = dateFormats;
          this.changeDetectorRef = changeDetectorRef;
          /** Whether the calendar should be started in month or year view. */

          this.startView = McCalendarView.Month;
          /** Emits when the currently selected date changes. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the year chosen in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the month chosen in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits whenever there is a state change that the header may need to respond to.
           */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /**
           * Used for scheduling that focus should be moved to the active cell on the next tick.
           * We need to schedule it, rather than do it immediately, because we have to wait
           * for Angular to re-evaluate the view children.
           */

          this.moveFocusOnNextTick = false;

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          this.intlChanges = intl.changes.subscribe(function () {
            changeDetectorRef.markForCheck();

            _this4.stateChanges.next();
          });
        }
        /** A date representing the period (month or year) to start the calendar in. */


        _createClass(McCalendar, [{
          key: "startAt",
          get: function get() {
            return this._startAt;
          },
          set: function set(value) {
            this._startAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /**
           * The current active date. This determines which time period is shown and which date is
           * highlighted when using keyboard navigation.
           */

        }, {
          key: "activeDate",
          get: function get() {
            return this.clampedActiveDate;
          },
          set: function set(value) {
            this.clampedActiveDate = this.dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();
          }
          /** Whether the calendar is in month view. */

        }, {
          key: "currentView",
          get: function get() {
            return this._currentView;
          },
          set: function set(value) {
            this._currentView = value;
            this.moveFocusOnNextTick = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || McCalendarHeader);
            this.activeDate = this.startAt || this.dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

            this._currentView = this.startView;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.moveFocusOnNextTick) {
              this.moveFocusOnNextTick = false;
              this.focusActiveCell();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.intlChanges.unsubscribe();
            this.stateChanges.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var change = changes.minDate || changes.maxDate || changes.dateFilter;

            if (change && !change.firstChange) {
              var view = this.getCurrentViewComponent();

              if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `init`.
                this.changeDetectorRef.detectChanges();
                view.init();
              }
            }

            this.stateChanges.next();
          }
        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.getCurrentViewComponent().focusActiveCell();
          }
          /** Updates today's date after an update of the active date */

        }, {
          key: "updateTodaysDate",
          value: function updateTodaysDate() {
            var view = this.currentView === McCalendarView.Month ? this.monthView : this.currentView === McCalendarView.Year ? this.yearView : this.multiYearView;
            view.ngAfterContentInit();
          }
          /** Handles date selection in the month view. */

        }, {
          key: "dateSelected",
          value: function dateSelected(date) {
            if (!this.dateAdapter.sameDate(date, this.selected)) {
              this.selectedChange.emit(date);
            }
          }
          /** Handles year selection in the multiyear view. */

        }, {
          key: "yearSelectedInMultiYearView",
          value: function yearSelectedInMultiYearView(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Handles month selection in the year view. */

        }, {
          key: "monthSelectedInYearView",
          value: function monthSelectedInYearView(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
        }, {
          key: "userSelected",
          value: function userSelected() {
            this.userSelection.emit();
          }
          /** Handles year/month selection in the multi-year/year views. */

        }, {
          key: "goToDateInView",
          value: function goToDateInView(date, view) {
            this.activeDate = date;
            this.currentView = view;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Returns the component instance that corresponds to the current calendar view. */

        }, {
          key: "getCurrentViewComponent",
          value: function getCurrentViewComponent() {
            return this.monthView || this.yearView || this.multiYearView;
          }
        }]);

        return McCalendar;
      }();

      McCalendar.ɵfac = function McCalendar_Factory(t) {
        return new (t || McCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](McDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McCalendar,
        selectors: [["mc-calendar"]],
        viewQuery: function McCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McMonthView, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McYearView, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McMultiYearView, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mc-calendar"],
        inputs: {
          startView: "startView",
          startAt: "startAt",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          headerComponent: "headerComponent",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          userSelection: "userSelection"
        },
        exportAs: ["mcCalendar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 5,
        consts: [[3, "cdkPortalOutlet"], [1, "mc-calendar__content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange"]],
        template: function McCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, McCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, McCalendar_mc_month_view_2_Template, 1, 6, "mc-month-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, McCalendar_mc_year_view_3_Template, 1, 5, "mc-year-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, McCalendar_mc_multi_year_view_4_Template, 1, 5, "mc-multi-year-view", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx.calendarHeaderPortal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], McMonthView, McYearView, McMultiYearView],
        styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__period-button .mc-icon{vertical-align:baseline}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCalendar.ctorParameters = function () {
        return [{
          type: McDatepickerIntl
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      McCalendar.propDecorators = {
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McMonthView, {
            "static": false
          }]
        }],
        yearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McYearView, {
            "static": false
          }]
        }],
        multiYearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McMultiYearView, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McCalendar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-calendar',
            exportAs: 'mcCalendar',
            template: "<ng-template [cdkPortalOutlet]=\"calendarHeaderPortal\"></ng-template>\n\n<div class=\"mc-calendar__content\" [ngSwitch]=\"currentView\">\n    <mc-month-view\n        *ngSwitchCase=\"'month'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        [dateClass]=\"dateClass\"\n        (selectedChange)=\"dateSelected($event)\"\n        (userSelection)=\"userSelected()\">\n    </mc-month-view>\n\n    <mc-year-view\n        *ngSwitchCase=\"'year'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        (monthSelected)=\"monthSelectedInYearView($event)\"\n        (selectedChange)=\"goToDateInView($event, 'multi-year')\">\n    </mc-year-view>\n\n    <mc-multi-year-view\n        *ngSwitchCase=\"'multi-year'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        (yearSelected)=\"yearSelectedInMultiYearView($event)\"\n        (selectedChange)=\"goToDateInView($event, 'month')\">\n    </mc-multi-year-view>\n</div>\n",
            host: {
              "class": 'mc-calendar'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__period-button .mc-icon{vertical-align:baseline}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}"]
          }]
        }], function () {
          return [{
            type: McDatepickerIntl
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McMonthView, {
              "static": false
            }]
          }],
          yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McYearView, {
              "static": false
            }]
          }],
          multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McMultiYearView, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Animations used by the mosaic datepicker.
       * @docs-private
       */


      var mcDatepickerAnimations = {
        /** Transforms the height of the datepicker's calendar. */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 0
        })))]),

        /** Fades in the content of the calendar. */
        fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 1
        })), // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
      }; // todo should be put into polyfils
      // https://github.com/angular/angular/issues/24769

      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
      } // tslint:disable:no-unbound-method

      /** Used to generate a unique ID for each datepicker instance. */


      var datepickerUid = 0;
      /** Injection token that determines the scroll handling while the calendar is open. */

      var MC_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mc-datepicker-scroll-strategy');
      /** @docs-private */
      // tslint:disable-next-line:naming-convention

      function MC_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MC_DATEPICKER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
        useFactory: MC_DATEPICKER_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Component used as the content for the datepicker dialog and popup. We use this instead of using
       * McCalendar directly as the content so we can control the initial focus. This also gives us a
       * place to put additional features of the popup that are not part of the calendar itself in the
       * future. (e.g. confirmation buttons).
       * @docs-private
       */

      var McDatepickerContent = /*#__PURE__*/function () {
        function McDatepickerContent(changeDetectorRef) {
          _classCallCheck(this, McDatepickerContent);

          this.changeDetectorRef = changeDetectorRef;
          /** Emits when an animation has finished. */

          this.animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        }

        _createClass(McDatepickerContent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            this.subscriptions.add(this.datepicker.stateChanges.subscribe(function () {
              _this5.changeDetectorRef.markForCheck();
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
            this.animationDone.complete();
          }
        }, {
          key: "startExitAnimation",
          value: function startExitAnimation() {
            this.animationState = 'void';
            this.changeDetectorRef.markForCheck();
          }
        }]);

        return McDatepickerContent;
      }();

      McDatepickerContent.ɵfac = function McDatepickerContent_Factory(t) {
        return new (t || McDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McDatepickerContent,
        selectors: [["mc-datepicker__content"]],
        viewQuery: function McDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendar, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
          }
        },
        hostAttrs: [1, "mc-datepicker__content"],
        hostVars: 1,
        hostBindings: function McDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostListener"]("@transformPanel.done", function McDatepickerContent_animation_transformPanel_done_HostBindingHandler() {
              return ctx.animationDone.next();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx.animationState);
          }
        },
        exportAs: ["mcDatepickerContent"],
        decls: 1,
        vars: 11,
        consts: [[3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "selectedChange", "yearSelected", "monthSelected", "userSelection"]],
        template: function McDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-calendar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function McDatepickerContent_Template_mc_calendar_selectedChange_0_listener($event) {
              return ctx.datepicker.select($event);
            })("yearSelected", function McDatepickerContent_Template_mc_calendar_yearSelected_0_listener($event) {
              return ctx.datepicker.selectYear($event);
            })("monthSelected", function McDatepickerContent_Template_mc_calendar_monthSelected_0_listener($event) {
              return ctx.datepicker.selectMonth($event);
            })("userSelection", function McDatepickerContent_Template_mc_calendar_userSelection_0_listener() {
              return ctx.datepicker.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker.minDate)("maxDate", ctx.datepicker.maxDate)("dateFilter", ctx.datepicker.dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx.datepicker.selected)("dateClass", ctx.datepicker.dateClass)("@fadeInCalendar", "enter");
          }
        },
        directives: [McCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__period-button .mc-icon{vertical-align:baseline}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}.mc-datepicker__content{display:block;border-width:1px;border-style:solid}.mc-datepicker__content .mc-calendar{width:296px;height:348px}.mc-datepicker__content .mc-calendar__next-button[disabled],.mc-datepicker__content .mc-calendar__previous-button[disabled]{border:0}"],
        encapsulation: 2,
        data: {
          animation: [mcDatepickerAnimations.transformPanel, mcDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });
      /** @nocollapse */

      McDatepickerContent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      McDatepickerContent.propDecorators = {
        calendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendar]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-datepicker__content',
            exportAs: 'mcDatepickerContent',
            template: "<mc-calendar [id]=\"datepicker.id\"\n             [ngClass]=\"datepicker.panelClass\"\n             [startAt]=\"datepicker.startAt\"\n             [startView]=\"datepicker.startView\"\n             [minDate]=\"datepicker.minDate\"\n             [maxDate]=\"datepicker.maxDate\"\n             [dateFilter]=\"datepicker.dateFilter\"\n             [headerComponent]=\"datepicker.calendarHeaderComponent\"\n             [selected]=\"datepicker.selected\"\n             [dateClass]=\"datepicker.dateClass\"\n             [@fadeInCalendar]=\"'enter'\"\n             (selectedChange)=\"datepicker.select($event)\"\n             (yearSelected)=\"datepicker.selectYear($event)\"\n             (monthSelected)=\"datepicker.selectMonth($event)\"\n             (userSelection)=\"datepicker.close()\">\n</mc-calendar>\n",
            host: {
              "class": 'mc-datepicker__content',
              '[@transformPanel]': 'animationState',
              '(@transformPanel.done)': 'animationDone.next()'
            },
            animations: [mcDatepickerAnimations.transformPanel, mcDatepickerAnimations.fadeInCalendar],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__period-button .mc-icon{vertical-align:baseline}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}.mc-datepicker__content{display:block;border-width:1px;border-style:solid}.mc-datepicker__content .mc-calendar{width:296px;height:348px}.mc-datepicker__content .mc-calendar__next-button[disabled],.mc-datepicker__content .mc-calendar__previous-button[disabled]{border:0}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendar]
          }]
        });
      })(); // TODO: We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="mcDatepicker"). We can change this to a directive
      // if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the datepicker popup/dialog. */


      var McDatepicker = /*#__PURE__*/function () {
        function McDatepicker(overlay, ngZone, viewContainerRef, scrollStrategy, dateAdapter, dir, document) {
          _classCallCheck(this, McDatepicker);

          this.overlay = overlay;
          this.ngZone = ngZone;
          this.viewContainerRef = viewContainerRef;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          this.document = document;
          this._hasBackdrop = false;
          this._opened = false;
          /** The view that the calendar should start in. */

          this.startView = McCalendarView.Month;
          /**
           * Emits selected year in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits selected month in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.backdropClass = 'cdk-overlay-transparent-backdrop';
          /** Emits when the datepicker has been opened. */

          this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been closed. */

          this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** The id for the datepicker calendar. */

          this.id = "mc-datepicker-".concat(datepickerUid++);
          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits when the datepicker is disabled. */

          this.disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits new selected date when selected date changes. */

          this.selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.validSelected = null;
          /** The element that was focused before the datepicker was opened. */

          this.focusedElementBeforeOpen = null;
          /** Subscription to value changes in the associated input element. */

          this.inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this.scrollStrategy = scrollStrategy;
        }

        _createClass(McDatepicker, [{
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          }
          /** The date to open the calendar to initially. */

        }, {
          key: "startAt",
          get: function get() {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this.datepickerInput ? this.datepickerInput.value : null);
          },
          set: function set(value) {
            this._startAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** Whether the datepicker pop-up should be disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;
              this.disabledChange.next(newValue);
            }
          }
          /** Whether the calendar is open. */

        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(value) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value) ? this.open() : this.close();
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this.validSelected;
          },
          set: function set(value) {
            this.validSelected = value;
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this.datepickerInput && this.datepickerInput.min;
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this.datepickerInput && this.datepickerInput.max;
          }
        }, {
          key: "dateFilter",
          get: function get() {
            return this.datepickerInput && this.datepickerInput.dateFilter;
          }
        }, {
          key: "value",
          get: function get() {
            return this.selected;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.close();
            this.inputSubscription.unsubscribe();
            this.closeSubscription.unsubscribe();
            this.disabledChange.complete();
            this.destroyOverlay();
          }
          /** Selects the given date */

        }, {
          key: "select",
          value: function select(date) {
            var oldValue = this.selected;
            this.selected = date;

            if (!this.dateAdapter.sameDate(oldValue, this.selected)) {
              this.selectedChanged.next(date);
            }
          }
          /** Emits the selected year in multiyear view */

        }, {
          key: "selectYear",
          value: function selectYear(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Emits selected month in year view */

        }, {
          key: "selectMonth",
          value: function selectMonth(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /**
           * Register an input with this datepicker.
           * @param input The datepicker input to register with this datepicker.
           */

        }, {
          key: "registerInput",
          value: function registerInput(input) {
            var _this6 = this;

            if (this.datepickerInput) {
              throw Error('A McDatepicker can only be associated with a single input.');
            }

            this.datepickerInput = input;
            this.inputSubscription = this.datepickerInput.valueChange.subscribe(function (value) {
              var _a;

              _this6.selected = value; // @ts-ignore

              if (_this6.popupComponentRef) {
                (_a = _this6.popupComponentRef.instance.calendar.monthView) === null || _a === void 0 ? void 0 : _a.init();
                _this6.popupComponentRef.instance.calendar.activeDate = value;
              }
            });
          }
          /** Open the calendar. */

        }, {
          key: "open",
          value: function open() {
            if (this._opened || this.disabled) {
              return;
            }

            if (!this.datepickerInput) {
              throw Error('Attempted to open an McDatepicker with no associated input.');
            }

            if (this.document) {
              this.focusedElementBeforeOpen = this.document.activeElement;
            }

            this.openAsPopup();
            this._opened = true;
            this.openedStream.emit();
          }
          /** Close the calendar. */

        }, {
          key: "close",
          value: function close() {
            var _this7 = this;

            var restoreFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (!this._opened) {
              return;
            }

            if (this.popupComponentRef) {
              var instance = this.popupComponentRef.instance;
              instance.startExitAnimation();
              instance.animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                return _this7.destroyOverlay();
              });
            }

            if (restoreFocus) {
              this.focusedElementBeforeOpen.focus();
            }

            this._opened = false;
            this.closedStream.emit();
            this.focusedElementBeforeOpen = null;
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.datepickerInput.isReadOnly) {
              return;
            }

            this._opened ? this.close() : this.open();
          }
          /** Destroys the current overlay. */

        }, {
          key: "destroyOverlay",
          value: function destroyOverlay() {
            if (this.popupRef) {
              this.popupRef.dispose();
              this.popupRef = this.popupComponentRef = null;
            }
          }
          /** Open the calendar as a popup. */

        }, {
          key: "openAsPopup",
          value: function openAsPopup() {
            var _this8 = this;

            if (!this.calendarPortal) {
              this.calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](McDatepickerContent, this.viewContainerRef);
            }

            if (!this.popupRef) {
              this.createPopup();
            }

            if (!this.popupRef.hasAttached()) {
              this.popupComponentRef = this.popupRef.attach(this.calendarPortal);
              this.popupComponentRef.instance.datepicker = this; // Update the position once the calendar has rendered.

              this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                return _this8.popupRef.updatePosition();
              });
            }
          }
          /** Create the popup. */

        }, {
          key: "createPopup",
          value: function createPopup() {
            var _this9 = this;

            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
              positionStrategy: this.createPopupPositionStrategy(),
              hasBackdrop: this.hasBackdrop,
              backdropClass: this.backdropClass,
              direction: this.dir,
              scrollStrategy: this.scrollStrategy(),
              panelClass: 'mc-datepicker__popup'
            });
            this.popupRef = this.overlay.create(overlayConfig);
            this.closeSubscription = this.closingActions().subscribe(function () {
              return _this9.close(_this9.restoreFocus());
            });
          }
        }, {
          key: "restoreFocus",
          value: function restoreFocus() {
            return this.document.activeElement === this.document.body;
          }
        }, {
          key: "closingActions",
          value: function closingActions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.popupRef.backdropClick(), this.popupRef.outsidePointerEvents(), this.popupRef.detachments());
          }
          /** Create the popup PositionStrategy. */

        }, {
          key: "createPopupPositionStrategy",
          value: function createPopupPositionStrategy() {
            return this.overlay.position().flexibleConnectedTo(this.datepickerInput.elementRef).withTransformOriginOn('.mc-datepicker__content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition().withPositions([{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom'
            }]);
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
        }]);

        return McDatepicker;
      }();

      McDatepicker.ɵfac = function McDatepicker_Factory(t) {
        return new (t || McDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MC_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
      };

      McDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McDatepicker,
        selectors: [["mc-datepicker"]],
        inputs: {
          startView: "startView",
          backdropClass: "backdropClass",
          hasBackdrop: "hasBackdrop",
          startAt: "startAt",
          disabled: "disabled",
          opened: "opened",
          calendarHeaderComponent: "calendarHeaderComponent",
          panelClass: "panelClass",
          dateClass: "dateClass"
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          openedStream: "opened",
          closedStream: "closed"
        },
        exportAs: ["mcDatepicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
          useExisting: McDatepicker
        }])],
        decls: 0,
        vars: 0,
        template: function McDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McDatepicker.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MC_DATEPICKER_SCROLL_STRATEGY]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      McDatepicker.propDecorators = {
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        calendarHeaderComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['closed']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-datepicker',
            template: '',
            exportAs: 'mcDatepicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [{
              provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
              useExisting: McDatepicker
            }]
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MC_DATEPICKER_SCROLL_STRATEGY]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['opened']
          }],
          closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['closed']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })(); // @ts-nocheck
      // tslint:disable:naming-convention


      var DateParts;

      (function (DateParts) {
        DateParts["year"] = "y";
        DateParts["month"] = "m";
        DateParts["day"] = "d";
      })(DateParts || (DateParts = {}));

      var DateDigit = /*#__PURE__*/function () {
        function DateDigit(value, start, length) {
          _classCallCheck(this, DateDigit);

          this.value = value;
          this.start = start;
          this.length = length;
          this.maxDays = 31;
          this.maxMonth = 12;

          if (value === DateParts.day) {
            this.parse = this.parseDay;
          } else if (value === DateParts.month) {
            this.parse = this.parseMonth;
          } else if (value === DateParts.year) {
            this.parse = this.parseYear;
          }
        }

        _createClass(DateDigit, [{
          key: "end",
          get: function get() {
            return this.start + this.length;
          }
        }, {
          key: "isDay",
          get: function get() {
            return this.value === DateParts.day;
          }
        }, {
          key: "isMonth",
          get: function get() {
            return this.value === DateParts.month;
          }
        }, {
          key: "isYear",
          get: function get() {
            return this.value === DateParts.year;
          }
        }, {
          key: "fullName",
          get: function get() {
            if (this.isDay) {
              return 'date';
            }

            if (this.isMonth) {
              return 'month';
            }

            if (this.isYear) {
              return 'year';
            }
          }
        }, {
          key: "parseDay",
          value: function parseDay(value) {
            var parsedValue = parseInt(value);

            if (parsedValue === 0) {
              return 1;
            }

            if (parsedValue > this.maxDays) {
              return this.maxDays;
            }

            return parsedValue;
          }
        }, {
          key: "parseMonth",
          value: function parseMonth(value) {
            var parsedValue = parseInt(value);

            if (parsedValue === 0) {
              return 1;
            }

            if (parsedValue > this.maxMonth) {
              return this.maxMonth;
            }

            return parsedValue;
          }
        }, {
          key: "parseYear",
          value: function parseYear(value) {
            var parsedValue = parseInt(value);

            if (parsedValue === 0) {
              return 1;
            }

            return parsedValue;
          }
        }]);

        return DateDigit;
      }();
      /** @docs-private */


      var MC_DATEPICKER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return McDatepickerInput;
        }),
        multi: true
      };
      /** @docs-private */

      var MC_DATEPICKER_VALIDATORS = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return McDatepickerInput;
        }),
        multi: true
      };
      /**
       * An event used for datepicker input and change events. We don't always have access to a native
       * input or change event because the event may have been triggered by the user clicking on the
       * calendar popup. For consistency, we always use McDatepickerInputEvent instead.
       */

      var McDatepickerInputEvent = function McDatepickerInputEvent(
      /** Reference to the datepicker input component that emitted the event. */
      target,
      /** Reference to the native input element associated with the datepicker input. */
      targetElement) {
        _classCallCheck(this, McDatepickerInputEvent);

        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
      };

      var uniqueComponentIdSuffix = 0;
      /** Directive used to connect an input to a McDatepicker. */

      var McDatepickerInput = /*#__PURE__*/function () {
        function McDatepickerInput(elementRef, renderer, dateAdapter, dateFormats) {
          var _this10 = this;

          _classCallCheck(this, McDatepickerInput);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.dateAdapter = dateAdapter;
          this.dateFormats = dateFormats;
          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.controlType = 'datepicker';
          this.focused = false;
          /** Emits when the value changes (either due to user input or programmatic change). */

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the disabled state has changed */

          this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this._disabled = false;
          this.incorrectInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when a `change` event is fired on this `<input>`. */

          this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when an `input` event is fired on this `<input>`. */

          this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.uid = "mc-datepicker-".concat(uniqueComponentIdSuffix++);
          this.datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this.localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Whether the last value set on the input was valid. */

          this.lastValueValid = false;

          this.onTouched = function () {};

          this.onInput = function () {
            _this10.correctCursorPosition();

            var formattedValue = _this10.replaceSymbols(_this10.viewValue);

            var newTimeObj = _this10.getDateFromString(formattedValue);

            _this10.lastValueValid = !!newTimeObj;

            if (!newTimeObj) {
              _this10.control.updateValueAndValidity();

              _this10._value = null;
              return;
            }

            _this10.setViewValue(_this10.getTimeStringFromDate(newTimeObj, _this10.dateFormats.dateInput), true);

            _this10.selectNextDigitByCursor(_this10.selectionStart);

            _this10.updateValue(newTimeObj);
          };

          this.parseOnBlur = function () {
            if (!_this10.viewValue) {
              return null;
            }

            var date = _this10.getDefaultValue();

            var viewDigits = _this10.viewValue.split(_this10.separator).map(function (value) {
              return value;
            }).filter(function (value) {
              return value;
            });

            var _viewDigits = _slicedToArray(viewDigits, 3),
                firsViewDigit = _viewDigits[0],
                secondViewDigit = _viewDigits[1],
                thirdViewDigit = _viewDigits[2]; // tslint:disable-next-line:no-magic-numbers


            if (viewDigits.length !== 3) {
              _this10.lastValueValid = false;
              _this10._value = null;
              return setTimeout(function () {
                return _this10.control.updateValueAndValidity();
              });
            }

            date[_this10.firstDigit.fullName] = _this10.firstDigit.parse(firsViewDigit);
            date[_this10.secondDigit.fullName] = _this10.secondDigit.parse(secondViewDigit);
            date[_this10.thirdDigit.fullName] = _this10.thirdDigit.parse(thirdViewDigit);

            var _reduce = [_this10.firstDigit, _this10.secondDigit, _this10.thirdDigit].reduce(function (acc, digit, index) {
              return digit.value === DateParts.year ? [digit, viewDigits[index]] : acc;
            }, []),
                _reduce2 = _slicedToArray(_reduce, 2),
                digitWithYear = _reduce2[0],
                viewDigitWithYear = _reduce2[1]; // tslint:disable-next-line:no-magic-numbers


            if (viewDigitWithYear.length < 3) {
              // tslint:disable-next-line:no-magic-numbers
              date.year += date.year < 30 ? 2000 : 1900;
            } else if (viewDigitWithYear.length < digitWithYear.length) {
              _this10.lastValueValid = false;
              _this10._value = null;
              return setTimeout(function () {
                return _this10.control.updateValueAndValidity();
              });
            }

            var newTimeObj = _this10.getValidDateOrNull(_this10.dateAdapter.createDateTime(date.year, date.month - 1, date.date, date.hours, date.minutes, date.seconds, date.milliseconds));

            _this10.lastValueValid = !!newTimeObj;

            _this10.setViewValue(_this10.getTimeStringFromDate(newTimeObj, _this10.dateFormats.dateInput), true);

            _this10.updateValue(newTimeObj);
          };

          this.updateLocaleParams = function () {
            _this10.setFormat(_this10.dateFormats.dateInput);

            _this10.value = _this10.value;
          };

          this.cvaOnChange = function () {};

          this.validatorOnChange = function () {};
          /** The form control validator for whether the input parses. */


          this.parseValidator = function () {
            return _this10.focused || _this10.empty || _this10.lastValueValid ? null : {
              mcDatepickerParse: {
                text: _this10.elementRef.nativeElement.value
              }
            };
          };
          /** The form control validator for the min date. */


          this.minValidator = function (control) {
            var controlValue = _this10.getValidDateOrNull(_this10.dateAdapter.deserialize(control.value));

            return !_this10.min || !controlValue || _this10.dateAdapter.compareDate(_this10.min, controlValue) <= 0 ? null : {
              mcDatepickerMin: {
                min: _this10.min,
                actual: controlValue
              }
            };
          };
          /** The form control validator for the max date. */


          this.maxValidator = function (control) {
            var controlValue = _this10.getValidDateOrNull(_this10.dateAdapter.deserialize(control.value));

            return !_this10.max || !controlValue || _this10.dateAdapter.compareDate(_this10.max, controlValue) >= 0 ? null : {
              mcDatepickerMax: {
                max: _this10.max,
                actual: controlValue
              }
            };
          };
          /** The form control validator for the date filter. */


          this.filterValidator = function (control) {
            var controlValue = _this10.getValidDateOrNull(_this10.dateAdapter.deserialize(control.value));

            return !_this10.dateFilter || !controlValue || _this10.dateFilter(controlValue) ? null : {
              mcDatepickerFilter: true
            };
          };

          this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator]);

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          this.setFormat(dateFormats.dateInput);
          this.localeSubscription = dateAdapter.localeChanges.subscribe(this.updateLocaleParams);
        }

        _createClass(McDatepickerInput, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          }
          /** The datepicker that this input is associated with. */

        }, {
          key: "mcDatepicker",
          set: function set(value) {
            var _this11 = this;

            if (!value) {
              return;
            }

            this.datepicker = value;
            this.datepicker.registerInput(this);
            this.datepickerSubscription.unsubscribe();
            this.datepickerSubscription = this.datepicker.selectedChanged.subscribe(function (selected) {
              _this11.value = selected;

              _this11.cvaOnChange(selected);

              _this11.onTouched();

              _this11.dateChange.emit(new McDatepickerInputEvent(_this11, _this11.elementRef.nativeElement));
            });
          }
          /** Function that can be used to filter out dates within the datepicker. */

        }, {
          key: "mcDatepickerFilter",
          set: function set(value) {
            this.dateFilter = value;
            this.validatorOnChange();
          }
          /** The value of the input. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            var newValue = this.dateAdapter.deserialize(value);
            this.lastValueValid = !newValue || this.dateAdapter.isValid(newValue);
            newValue = this.getValidDateOrNull(newValue);
            var oldDate = this.value;
            this._value = newValue;
            this.formatValue(newValue);

            if (!this.dateAdapter.sameDate(oldDate, newValue)) {
              this.valueChange.emit(newValue);
            }
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            this._min = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.validatorOnChange();
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            this._max = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.validatorOnChange();
          }
          /** Whether the datepicker-input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
            var element = this.elementRef.nativeElement;

            if (this._disabled !== newValue) {
              this._disabled = newValue;
              this.disabledChange.emit(newValue);
            } // We need to null check the `blur` method, because it's undefined during SSR.


            if (newValue && element.blur) {
              // Normally, native input elements automatically blur if they turn disabled. This behavior
              // is problematic, because it would mean that it triggers another change detection cycle,
              // which then causes a changed after checked error if the input element was focused before.
              element.blur();
            }
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this.uid;
          }
        }, {
          key: "mcValidationTooltip",
          set: function set(tooltip) {
            if (!tooltip) {
              return;
            }

            tooltip.mcMouseEnterDelay = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__["validationTooltipShowDelay"];
            tooltip.mcTrigger = 'manual';
            tooltip.mcTooltipClass = 'mc-tooltip_warning';
            tooltip.initElementRefListeners();
            this.incorrectInput.subscribe(function () {
              if (tooltip.isTooltipOpen) {
                return;
              }

              tooltip.show();
              setTimeout(function () {
                return tooltip.hide();
              }, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__["validationTooltipHideDelay"]);
            });
          }
        }, {
          key: "empty",
          get: function get() {
            return !this.viewValue && !this.isBadInput();
          }
        }, {
          key: "viewValue",
          get: function get() {
            return this.elementRef.nativeElement.value;
          }
        }, {
          key: "ngControl",
          get: function get() {
            return this.control;
          }
        }, {
          key: "isReadOnly",
          get: function get() {
            return this.elementRef.nativeElement.readOnly;
          }
        }, {
          key: "selectionStart",
          get: function get() {
            return this.elementRef.nativeElement.selectionStart;
          },
          set: function set(value) {
            this.elementRef.nativeElement.selectionStart = value;
          }
        }, {
          key: "selectionEnd",
          get: function get() {
            return this.elementRef.nativeElement.selectionEnd;
          },
          set: function set(value) {
            this.elementRef.nativeElement.selectionEnd = value;
          }
        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
          }
        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "focusChanged",
          value: function focusChanged(isFocused) {
            if (isFocused !== this.focused) {
              this.focused = isFocused;
              this.onTouched();
              this.stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.datepickerSubscription.unsubscribe();
            this.localeSubscription.unsubscribe();
            this.valueChange.complete();
            this.disabledChange.complete();
          }
          /** @docs-private */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.validatorOnChange = fn;
          }
          /** @docs-private */

        }, {
          key: "validate",
          value: function validate(control) {
            this.setControl(control);
            return this.validator ? this.validator(control) : null;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.cvaOnChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (this.isReadOnly) {
              return;
            } // tslint:disable-next-line: deprecation


            var keyCode = event.keyCode;

            if (this.isLetterKey(event)) {
              event.preventDefault();
              this.incorrectInput.emit();
            } else if (this.isKeyForOpen(event)) {
              event.preventDefault();
              this.datepicker.open();
            } else if (this.isKeyForClose(event)) {
              event.preventDefault();
              this.datepicker.close();
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["TAB"]) {
              this.datepicker.close(false);
            } else if (this.isKeyForByPass(event)) {
              return;
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) {
              this.spaceKeyHandler(event);
            } else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]].includes(keyCode)) {
              event.preventDefault();
              this.verticalArrowKeyHandler(keyCode);
            } else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]].includes(keyCode)) {
              event.preventDefault();
              this.changeCaretPosition(keyCode);
            } else if (/^\D$/.test(event.key)) {
              event.preventDefault();
              var newValue = this.getNewValue(event.key, this.selectionStart);
              var formattedValue = this.replaceSymbols(newValue);

              if (newValue !== formattedValue) {
                this.setViewValue(formattedValue, true);
                setTimeout(this.onInput);
              } else {
                this.incorrectInput.emit();
              }
            } else {
              setTimeout(this.onInput);
            }
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.dateChange.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
          }
          /** Handles blur events on the input. */

        }, {
          key: "onBlur",
          value: function onBlur() {
            // Reformat the input only if we have a valid value.
            this.parseOnBlur();
            this.focusChanged(false);
          }
        }, {
          key: "onPaste",
          value: function onPaste($event) {
            var _a, _b, _c;

            $event.preventDefault();
            var rawValue = $event.clipboardData.getData('text');
            var match = rawValue.match( /*#__PURE__*/_wrapRegExp(/^([0-9]+)[\0-\/:-@\[-\^`\{-\uFFFF]([0-9]+)[\0-\/:-@\[-\^`\{-\uFFFF]([0-9]+)$/, {
              first: 1,
              second: 2,
              third: 3
            }));

            if (!((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.first) || !((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.second) || !((_c = match === null || match === void 0 ? void 0 : match.groups) === null || _c === void 0 ? void 0 : _c.third)) {
              this.setViewValue(rawValue);
              return rawValue;
            }

            var value = [match.groups.first, match.groups.second, match.groups.third].join(this.separator);
            var newTimeObj = this.getDateFromString(value);

            if (!newTimeObj) {
              this.setViewValue(value);
              return value;
            }

            this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.dateFormats.dateInput));
            this.updateValue(newTimeObj);
          }
        }, {
          key: "toISO8601",
          value: function toISO8601(value) {
            return this.dateAdapter.toIso8601(value);
          }
        }, {
          key: "setFormat",
          value: function setFormat(format) {
            var _this12 = this;

            this.separator = format.match( /*#__PURE__*/_wrapRegExp(/[A-z]+([\0-\/:-@\[-\^`\{-\uFFFF]|[\0-\/:-\uFFFF])[A-z]+/, {
              separator: 1
            })).groups.separator;
            this.separatorPositions = format.split('').reduce(function (acc, item, index) {
              return _this12.separator === item ? [].concat(_toConsumableArray(acc), [index + 1]) : acc;
            }, []);
            this.getDigitPositions(format);
          }
        }, {
          key: "updateValue",
          value: function updateValue(newValue) {
            if (!this.dateAdapter.sameDate(newValue, this.value)) {
              this._value = newValue;
              this.cvaOnChange(newValue);
              this.valueChange.emit(newValue);
              this.dateInput.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
            }

            this.control.updateValueAndValidity();
          }
        }, {
          key: "isKeyForClose",
          value: function isKeyForClose(event) {
            // tslint:disable-next-line: deprecation
            return event.altKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"] || event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"];
          }
        }, {
          key: "isKeyForOpen",
          value: function isKeyForOpen(event) {
            // tslint:disable-next-line: deprecation
            return event.altKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"];
          }
        }, {
          key: "isLetterKey",
          value: function isLetterKey(event) {
            return Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isLetterKey"])(event) && !event.ctrlKey && !event.metaKey;
          }
        }, {
          key: "isKeyForByPass",
          value: function isKeyForByPass(event) {
            // tslint:disable-next-line: deprecation
            return Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event) && (Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isVerticalMovement"])(event.keyCode) || Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isHorizontalMovement"])(event.keyCode)) || event.ctrlKey || event.metaKey || // tslint:disable-next-line: deprecation
            [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DELETE"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["BACKSPACE"]].includes(event.keyCode);
          }
        }, {
          key: "spaceKeyHandler",
          value: function spaceKeyHandler(event) {
            event.preventDefault();

            if (this.selectionStart === this.selectionEnd) {
              var value = this.getNewValue(event.key, this.selectionStart);
              this.setViewValue(value);
              setTimeout(this.onInput);
            } else if (this.selectionStart !== this.selectionEnd) {
              this.selectNextDigit(this.selectionStart, true);
            }
          }
        }, {
          key: "getNewValue",
          value: function getNewValue(key, position) {
            return [this.viewValue.slice(0, position), key, this.viewValue.slice(position)].join('');
          }
        }, {
          key: "setViewValue",
          value: function setViewValue(value) {
            var savePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (savePosition) {
              var selectionStart = this.selectionStart;
              var selectionEnd = this.selectionEnd;
              this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
              this.selectionStart = selectionStart;
              this.selectionEnd = selectionEnd;
            } else {
              this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
            }
          }
        }, {
          key: "replaceSymbols",
          value: function replaceSymbols(value) {
            return value.split(this.separator).map(function (part) {
              return part.replace(/^([0-9]+)\W$/, '0$1');
            }).join(this.separator);
          }
        }, {
          key: "getDateFromString",
          value: function getDateFromString(timeString) {
            if (!timeString || timeString.length < this.firstDigit.length) {
              return null;
            }

            var date = this.getDefaultValue();
            var viewDigits = timeString.split(this.separator).map(function (value) {
              return value;
            });

            var _viewDigits2 = _slicedToArray(viewDigits, 3),
                firsViewDigit = _viewDigits2[0],
                secondViewDigit = _viewDigits2[1],
                thirdViewDigit = _viewDigits2[2];

            if (viewDigits.length === 1) {
              if (firsViewDigit.length < this.firstDigit.length) {
                return null;
              }

              date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
              date.month = 1; // tslint:disable-next-line:no-magic-numbers
            } else if (viewDigits.length === 2) {
              if (firsViewDigit.length < this.firstDigit.length || secondViewDigit.length < this.secondDigit.length) {
                return null;
              }

              date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
              date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit); // tslint:disable-next-line:no-magic-numbers
            } else if (viewDigits.length === 3) {
              if (firsViewDigit.length < this.firstDigit.length || secondViewDigit.length < this.secondDigit.length || thirdViewDigit.length < this.thirdDigit.length) {
                return null;
              }

              date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
              date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit);
              date[this.thirdDigit.fullName] = this.thirdDigit.parse(thirdViewDigit);
            } else {
              return null;
            }

            return this.getValidDateOrNull(this.dateAdapter.createDateTime(date.year, date.month - 1, date.date, date.hours, date.minutes, date.seconds, date.milliseconds));
          }
        }, {
          key: "getDefaultValue",
          value: function getDefaultValue() {
            var defaultValue = this.value || this.dateAdapter.today();
            return {
              year: this.dateAdapter.getYear(defaultValue),
              month: this.dateAdapter.getMonth(defaultValue),
              date: this.dateAdapter.getDate(defaultValue),
              hours: this.dateAdapter.getHours(defaultValue),
              minutes: this.dateAdapter.getMinutes(defaultValue),
              seconds: this.dateAdapter.getSeconds(defaultValue),
              milliseconds: this.dateAdapter.getMilliseconds(defaultValue)
            };
          }
        }, {
          key: "getTimeStringFromDate",
          value: function getTimeStringFromDate(value, timeFormat) {
            if (!value || !this.dateAdapter.isValid(value)) {
              return '';
            }

            return this.dateAdapter.format(value, timeFormat);
          }
        }, {
          key: "getDateEditMetrics",
          value: function getDateEditMetrics(cursorPosition) {
            for (var _i2 = 0, _arr2 = [this.firstDigit, this.secondDigit, this.thirdDigit]; _i2 < _arr2.length; _i2++) {
              var digit = _arr2[_i2];

              if (cursorPosition >= digit.start && cursorPosition <= digit.end) {
                return [digit.value, digit.start, digit.end];
              }
            }

            return [this.thirdDigit.value, this.thirdDigit.start, this.thirdDigit.end];
          }
        }, {
          key: "incrementDate",
          value: function incrementDate(dateVal, whatToIncrement) {
            var year = this.dateAdapter.getYear(dateVal);
            var month = this.dateAdapter.getMonth(dateVal);
            var day = this.dateAdapter.getDate(dateVal);

            switch (whatToIncrement) {
              case DateParts.day:
                day++;

                if (day > this.dateAdapter.getNumDaysInMonth(dateVal)) {
                  day = 1;
                }

                break;

              case DateParts.month:
                month++; // tslint:disable-next-line:no-magic-numbers

                if (month > 11) {
                  month = 0;
                }

                var lastDay = this.getLastDayFor(year, month);

                if (day > lastDay) {
                  day = lastDay;
                }

                break;

              case DateParts.year:
                year++;
                break;

              default:
            }

            return this.createDate(year, month, day);
          }
        }, {
          key: "getLastDayFor",
          value: function getLastDayFor(year, month) {
            return this.dateAdapter.getNumDaysInMonth(this.createDate(year, month, 1));
          }
        }, {
          key: "decrementDate",
          value: function decrementDate(dateVal, whatToDecrement) {
            var year = this.dateAdapter.getYear(dateVal);
            var month = this.dateAdapter.getMonth(dateVal);
            var day = this.dateAdapter.getDate(dateVal);

            switch (whatToDecrement) {
              case DateParts.day:
                day--;

                if (day < 1) {
                  day = this.dateAdapter.getNumDaysInMonth(dateVal);
                }

                break;

              case DateParts.month:
                month--;

                if (month < 0) {
                  // tslint:disable-next-line:no-magic-numbers
                  month = 11;
                }

                var lastDay = this.getLastDayFor(year, month);

                if (day > lastDay) {
                  day = lastDay;
                }

                break;

              case DateParts.year:
                year--;
                break;

              default:
            }

            return this.createDate(year, month, day);
          }
        }, {
          key: "verticalArrowKeyHandler",
          value: function verticalArrowKeyHandler(keyCode) {
            if (!this.value) {
              return;
            }

            var changedTime;

            var _this$getDateEditMetr = this.getDateEditMetrics(this.selectionStart),
                _this$getDateEditMetr2 = _slicedToArray(_this$getDateEditMetr, 3),
                modifiedTimePart = _this$getDateEditMetr2[0],
                selectionStart = _this$getDateEditMetr2[1],
                selectionEnd = _this$getDateEditMetr2[2];

            if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]) {
              changedTime = this.incrementDate(this.value, modifiedTimePart);
            }

            if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]) {
              changedTime = this.decrementDate(this.value, modifiedTimePart);
            }

            this.value = changedTime;
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
            this.onChange();
            this.stateChanges.next();
          }
        }, {
          key: "changeCaretPosition",
          value: function changeCaretPosition(keyCode) {
            if (!this.value) {
              return;
            }

            var cursorPos = this.selectionStart;

            if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]].includes(keyCode)) {
              cursorPos = 0;
            } else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]].includes(keyCode)) {
              cursorPos = this.viewValue.length;
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]) {
              cursorPos = cursorPos === 0 ? this.viewValue.length : cursorPos - 1;
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]) {
              var nextSeparatorPos = this.viewValue.indexOf(this.separator, cursorPos);
              cursorPos = nextSeparatorPos ? nextSeparatorPos + 1 : 0;
            }

            this.selectDigitByCursor(cursorPos);
          }
        }, {
          key: "selectDigitByCursor",
          value: function selectDigitByCursor(cursorPos) {
            var _this13 = this;

            setTimeout(function () {
              var _this13$getDateEditMe = _this13.getDateEditMetrics(cursorPos),
                  _this13$getDateEditMe2 = _slicedToArray(_this13$getDateEditMe, 3),
                  selectionStart = _this13$getDateEditMe2[1],
                  selectionEnd = _this13$getDateEditMe2[2];

              _this13.selectionStart = selectionStart;
              _this13.selectionEnd = selectionEnd;
            });
          }
        }, {
          key: "selectNextDigitByCursor",
          value: function selectNextDigitByCursor(cursorPos) {
            var _this14 = this;

            setTimeout(function () {
              var _this14$getDateEditMe = _this14.getDateEditMetrics(cursorPos),
                  _this14$getDateEditMe2 = _slicedToArray(_this14$getDateEditMe, 3),
                  endPositionOfCurrentDigit = _this14$getDateEditMe2[2];

              var _this14$getDateEditMe3 = _this14.getDateEditMetrics(endPositionOfCurrentDigit + 1),
                  _this14$getDateEditMe4 = _slicedToArray(_this14$getDateEditMe3, 3),
                  selectionStart = _this14$getDateEditMe4[1],
                  selectionEnd = _this14$getDateEditMe4[2];

              _this14.selectionStart = selectionStart;
              _this14.selectionEnd = selectionEnd;
            });
          }
        }, {
          key: "selectNextDigit",
          value: function selectNextDigit(cursorPos) {
            var _this15 = this;

            var cycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            setTimeout(function () {
              var lastValue = cycle ? 0 : cursorPos;

              var nextSeparatorPos = _this15.viewValue.indexOf(_this15.separator, cursorPos);

              var newCursorPos = nextSeparatorPos > 0 ? nextSeparatorPos + 1 : lastValue;

              var _this15$getDateEditMe = _this15.getDateEditMetrics(newCursorPos),
                  _this15$getDateEditMe2 = _slicedToArray(_this15$getDateEditMe, 3),
                  selectionStart = _this15$getDateEditMe2[1],
                  selectionEnd = _this15$getDateEditMe2[2];

              _this15.selectionStart = selectionStart;
              _this15.selectionEnd = selectionEnd;
            });
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "isBadInput",
          value: function isBadInput() {
            var validity = this.elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /** Formats a value and sets it on the input element. */

        }, {
          key: "formatValue",
          value: function formatValue(value) {
            var formattedValue = value ? this.dateAdapter.format(value, this.dateFormats.dateInput) : '';
            this.setViewValue(formattedValue);
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
        }, {
          key: "setControl",
          value: function setControl(control) {
            if (!this.control) {
              this.control = control;
            }
          }
        }, {
          key: "getDigitPositions",
          value: function getDigitPositions(format) {
            var _this16 = this;

            var formatInLowerCase = format.toLowerCase();
            formatInLowerCase.split('').reduce(function (_ref2, value, index, arr) {
              var prev = _ref2.prev,
                  length = _ref2.length,
                  start = _ref2.start;

              if (value === _this16.separator || arr.length - 1 === index) {
                if (!_this16.firstDigit) {
                  _this16.firstDigit = new DateDigit(prev, start, length);
                } else if (!_this16.secondDigit) {
                  _this16.secondDigit = new DateDigit(prev, start, length);
                } else if (!_this16.thirdDigit) {
                  _this16.thirdDigit = new DateDigit(prev, start, arr.length - start);
                } // tslint:disable:no-parameter-reassignment


                length = 0;
                start = index + 1;
              } else {
                length++;
              }

              return {
                prev: value,
                length: length,
                start: start
              };
            }, {
              length: 0,
              start: 0
            });

            if (!this.firstDigit || !this.secondDigit || !this.thirdDigit) {
              Error("Can' t use this format: ".concat(format));
            }
          }
        }, {
          key: "createDate",
          value: function createDate(year, month, day) {
            return this.dateAdapter.createDateTime(year, month, day, this.dateAdapter.getHours(this.value), this.dateAdapter.getMinutes(this.value), this.dateAdapter.getSeconds(this.value), this.dateAdapter.getMilliseconds(this.value));
          }
        }, {
          key: "correctCursorPosition",
          value: function correctCursorPosition() {
            if (this.selectionStart && this.separatorPositions.includes(this.selectionStart)) {
              this.selectionStart = this.selectionStart - 1;
            }
          }
        }]);

        return McDatepickerInput;
      }();

      McDatepickerInput.ɵfac = function McDatepickerInput_Factory(t) {
        return new (t || McDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8));
      };

      McDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: McDatepickerInput,
        selectors: [["input", "mcDatepicker", ""]],
        hostAttrs: [1, "mc-input", "mc-datepicker"],
        hostVars: 6,
        hostBindings: function McDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("paste", function McDatepickerInput_paste_HostBindingHandler($event) {
              return ctx.onPaste($event);
            })("change", function McDatepickerInput_change_HostBindingHandler() {
              return ctx.onChange();
            })("focus", function McDatepickerInput_focus_HostBindingHandler() {
              return ctx.focusChanged(true);
            })("blur", function McDatepickerInput_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("keydown", function McDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("placeholder", ctx.placeholder)("required", ctx.required)("disabled", ctx.disabled || null)("min", ctx.min ? ctx.toISO8601(ctx.min) : null)("max", ctx.max ? ctx.toISO8601(ctx.max) : null)("autocomplete", "off");
          }
        },
        inputs: {
          value: "value",
          required: "required",
          mcDatepicker: "mcDatepicker",
          mcDatepickerFilter: "mcDatepickerFilter",
          min: "min",
          max: "max",
          disabled: "disabled",
          id: "id",
          mcValidationTooltip: "mcValidationTooltip",
          placeholder: "placeholder"
        },
        outputs: {
          incorrectInput: "incorrectInput",
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        exportAs: ["mcDatepickerInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MC_DATEPICKER_VALUE_ACCESSOR, MC_DATEPICKER_VALIDATORS, {
          provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
          useExisting: McDatepickerInput
        }])]
      });
      /** @nocollapse */

      McDatepickerInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }];
      };

      McDatepickerInput.propDecorators = {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        mcDatepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        mcDatepickerFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        mcValidationTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        incorrectInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[mcDatepicker]',
            exportAs: 'mcDatepickerInput',
            providers: [MC_DATEPICKER_VALUE_ACCESSOR, MC_DATEPICKER_VALIDATORS, {
              provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
              useExisting: McDatepickerInput
            }],
            host: {
              "class": 'mc-input mc-datepicker',
              '[attr.placeholder]': 'placeholder',
              '[attr.required]': 'required',
              '[attr.disabled]': 'disabled || null',
              '[attr.min]': 'min ? toISO8601(min) : null',
              '[attr.max]': 'max ? toISO8601(max) : null',
              '[attr.autocomplete]': '"off"',
              '(paste)': 'onPaste($event)',
              '(change)': 'onChange()',
              '(focus)': 'focusChanged(true)',
              '(blur)': 'onBlur()',
              '(keydown)': 'onKeyDown($event)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }];
        }, {
          incorrectInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcDatepickerFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcValidationTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** Can be used to override the icon of a `mcDatepickerToggle`. */


      var McDatepickerToggleIcon = function McDatepickerToggleIcon() {
        _classCallCheck(this, McDatepickerToggleIcon);
      };

      McDatepickerToggleIcon.ɵfac = function McDatepickerToggleIcon_Factory(t) {
        return new (t || McDatepickerToggleIcon)();
      };

      McDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: McDatepickerToggleIcon,
        selectors: [["", "mcDatepickerToggleIcon", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerToggleIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[mcDatepickerToggleIcon]'
          }]
        }], null, null);
      })();

      var McDatepickerToggle = /*#__PURE__*/function () {
        function McDatepickerToggle(intl, changeDetectorRef) {
          _classCallCheck(this, McDatepickerToggle);

          this.intl = intl;
          this.changeDetectorRef = changeDetectorRef;
          this.stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        }
        /** Whether the toggle button is disabled. */


        _createClass(McDatepickerToggle, [{
          key: "disabled",
          get: function get() {
            return this._disabled === undefined ? this.datepicker.disabled : this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.datepicker) {
              this.watchStateChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.watchStateChanges();
          }
        }, {
          key: "open",
          value: function open(event) {
            if (this.datepicker && !this.disabled) {
              this.datepicker.open();
              event.stopPropagation();
            }
          }
        }, {
          key: "watchStateChanges",
          value: function watchStateChanges() {
            var _this17 = this;

            var datepickerDisabled = this.datepicker ? this.datepicker.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var inputDisabled = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            this.stateChanges.unsubscribe();
            this.stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(function () {
              return _this17.changeDetectorRef.markForCheck();
            });
          }
        }]);

        return McDatepickerToggle;
      }();

      McDatepickerToggle.ɵfac = function McDatepickerToggle_Factory(t) {
        return new (t || McDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](McDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McDatepickerToggle,
        selectors: [["mc-datepicker-toggle"]],
        contentQueries: function McDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, McDatepickerToggleIcon, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
          }
        },
        viewQuery: function McDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
          }
        },
        hostAttrs: [1, "mc-datepicker-toggle"],
        hostVars: 2,
        hostBindings: function McDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-active", ctx.datepicker && ctx.datepicker.opened);
          }
        },
        inputs: {
          disabled: "disabled",
          datepicker: ["for", "datepicker"],
          tabIndex: "tabIndex"
        },
        exportAs: ["mcDatepickerToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 4,
        consts: [["mc-button", "", "type", "button", "aria-haspopup", "true", 1, "mc-datepicker-toggle__button", 3, "disabled", "click"], ["button", ""], ["mc-icon", "mc-calendar_16", "class", "mc-datepicker-toggle__default-icon", 4, "ngIf"], ["mc-icon", "mc-calendar_16", 1, "mc-datepicker-toggle__default-icon"]],
        template: function McDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McDatepickerToggle_Template_button_click_0_listener($event) {
              return ctx.open($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, McDatepickerToggle_i_2_Template, 1, 0, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.intl.openCalendarLabel)("tabindex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.customIcon);
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonCssStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"]],
        styles: [".mc-datepicker-toggle:focus{outline:0}.mc-datepicker-toggle__button.mc-icon-button{width:var(--mc-datepicker-toggle-size-width,30px);height:var(--mc-datepicker-toggle-size-height,30px);margin-left:2px}.mc-form-field-appearance-legacy .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field-appearance-legacy .mc-form-field-suffix .mc-datepicker-toggle__default-icon{width:1em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-datepicker-toggle__default-icon{display:block;width:1.5em;height:1.5em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-icon-button .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-icon-button .mc-datepicker-toggle__default-icon{margin:auto}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McDatepickerToggle.ctorParameters = function () {
        return [{
          type: McDatepickerIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      McDatepickerToggle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['for']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [McDatepickerToggleIcon, {
            "static": false
          }]
        }],
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['button', {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-datepicker-toggle',
            template: "<!--todo need simplify this-->\n<button\n    #button\n    mc-button\n    type=\"button\"\n    class=\"mc-datepicker-toggle__button\"\n    aria-haspopup=\"true\"\n    [attr.aria-label]=\"intl.openCalendarLabel\"\n    [attr.tabindex]=\"tabIndex\"\n    [disabled]=\"disabled\"\n    (click)=\"open($event)\">\n\n    <i *ngIf=\"!customIcon\" mc-icon=\"mc-calendar_16\" class=\"mc-datepicker-toggle__default-icon\"></i>\n\n    <ng-content select=\"[mcDatepickerToggleIcon]\"></ng-content>\n</button>\n",
            host: {
              "class": 'mc-datepicker-toggle',
              '[class.mc-active]': 'datepicker && datepicker.opened'
            },
            exportAs: 'mcDatepickerToggle',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-datepicker-toggle:focus{outline:0}.mc-datepicker-toggle__button.mc-icon-button{width:var(--mc-datepicker-toggle-size-width,30px);height:var(--mc-datepicker-toggle-size-height,30px);margin-left:2px}.mc-form-field-appearance-legacy .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field-appearance-legacy .mc-form-field-suffix .mc-datepicker-toggle__default-icon{width:1em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-datepicker-toggle__default-icon{display:block;width:1.5em;height:1.5em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-icon-button .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-icon-button .mc-datepicker-toggle__default-icon{margin:auto}"]
          }]
        }], function () {
          return [{
            type: McDatepickerIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['for']
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [McDatepickerToggleIcon, {
              "static": false
            }]
          }],
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button', {
              "static": false
            }]
          }]
        });
      })();

      var McDatepickerModule = function McDatepickerModule() {
        _classCallCheck(this, McDatepickerModule);
      };

      McDatepickerModule.ɵfac = function McDatepickerModule_Factory(t) {
        return new (t || McDatepickerModule)();
      };

      McDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: McDatepickerModule
      });
      McDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [McDatepickerIntl, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](McDatepickerModule, {
          declarations: function declarations() {
            return [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]];
          },
          exports: function exports() {
            return [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]],
            exports: [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]],
            declarations: [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader],
            providers: [McDatepickerIntl, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
            entryComponents: [McDatepickerContent, McCalendarHeader]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    }
  }]);
})();
//# sourceMappingURL=6-es5.js.map