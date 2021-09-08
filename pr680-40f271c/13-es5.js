(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13], {
    /***/
    "JUIG":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-popover.js ***!
      \********************************************************************************************************/

    /*! exports provided: PopoverExamplesModule, PopoverInstanceExample, PopoverOverviewExample */

    /***/
    function JUIG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverExamplesModule", function () {
        return PopoverExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverInstanceExample", function () {
        return PopoverInstanceExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopoverOverviewExample", function () {
        return PopoverOverviewExample;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/checkbox */
      "UYLH");
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


      var _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ptsecurity/mosaic/popover */
      "hvHG");
      /* harmony import */


      var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ptsecurity/mosaic/select */
      "CUtc");
      /* harmony import */


      var _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ptsecurity/mosaic/splitter */
      "tF9M");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");

      var _c0$1 = ["popover"];

      function PopoverInstanceExample_ng_template_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, " \u0412 \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0440\u044B\u0431\u043E\u0439 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438\u0437 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0441\u043A\u043E\u0433\u043E \u0442\u0440\u0430\u043A\u0442\u0430\u0442\u0430 \u0426\u0438\u0446\u0435\u0440\u043E\u043D\u0430 \xAB\u041E \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0434\u043E\u0431\u0440\u0430 \u0438 \u0437\u043B\u0430\xBB, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0433\u043E \u0432 45 \u0433\u043E\u0434\u0443 \u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B. \u0412\u043F\u0435\u0440\u0432\u044B\u0435 \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0431\u044B\u043B \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0448\u0440\u0438\u0444\u0442\u043E\u0432\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u043F\u0435\u0447\u0430\u0442\u043D\u0438\u043A\u043E\u043C \u0435\u0449\u0435 \u0432 XVI \u0432\u0435\u043A\u0435.\n");
        }
      }

      function PopoverInstanceExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Popover footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }
      /**
       * @title popover-instance
       */


      var PopoverInstanceExample = /*#__PURE__*/function () {
        function PopoverInstanceExample() {
          _classCallCheck(this, PopoverInstanceExample);
        }

        _createClass(PopoverInstanceExample, [{
          key: "togglePopover",
          value: function togglePopover($event) {
            $event.stopPropagation();

            if (this.popover.isOpen) {
              this.popover.hide();
            } else {
              this.popover.show();
            }
          }
        }]);

        return PopoverInstanceExample;
      }();

      PopoverInstanceExample.ɵfac = function PopoverInstanceExample_Factory(t) {
        return new (t || PopoverInstanceExample)();
      };

      PopoverInstanceExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PopoverInstanceExample,
        selectors: [["popover-instance-example"]],
        viewQuery: function PopoverInstanceExample_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0$1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.popover = _t.first);
          }
        },
        decls: 10,
        vars: 2,
        consts: [["customContent", ""], ["customFooter", ""], [1, "container"], ["mc-button", "", "mcPopover", "", "mcPopoverHeader", "Popover header", 3, "mcPopoverContent", "mcPopoverFooter"], ["popover", "mcPopover"], ["mc-button", "", 3, "click"]],
        template: function PopoverInstanceExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PopoverInstanceExample_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PopoverInstanceExample_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " default ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverInstanceExample_Template_button_click_8_listener($event) {
              return ctx.togglePopover($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "togglePopover");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mcPopoverContent", _r0)("mcPopoverFooter", _r2);
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonCssStyler"], _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_9__["McPopoverTrigger"]],
        styles: [".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:600px;max-width:100%;height:600px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverInstanceExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'popover-instance-example',
            templateUrl: 'popover-instance-example.html',
            styleUrls: ['popover-instance-example.css']
          }]
        }], null, {
          popover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['popover', {
              "static": false
            }]
          }]
        });
      })();

      function PopoverOverviewExample_ng_template_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0412 \u0437\u0430\u043F\u0430\u0434\u043D\u043E\u0439 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u0438 \u0440\u044B\u0431\u043E\u0439 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u0435\u0442 \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442 \u043B\u0430\u0442\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0442\u0435\u043A\u0441\u0442\u0430 \u0438\u0437 \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0441\u043A\u043E\u0433\u043E \u0442\u0440\u0430\u043A\u0442\u0430\u0442\u0430 \u0426\u0438\u0446\u0435\u0440\u043E\u043D\u0430 \xAB\u041E \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u0445 \u0434\u043E\u0431\u0440\u0430 \u0438 \u0437\u043B\u0430\xBB, \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043D\u043E\u0433\u043E \u0432 45 \u0433\u043E\u0434\u0443 \u0434\u043E \u043D\u0430\u0448\u0435\u0439 \u044D\u0440\u044B. \u0412\u043F\u0435\u0440\u0432\u044B\u0435 \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0431\u044B\u043B \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D \u0434\u043B\u044F \u043D\u0430\u0431\u043E\u0440\u0430 \u0448\u0440\u0438\u0444\u0442\u043E\u0432\u044B\u0445 \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u043C \u043F\u0435\u0447\u0430\u0442\u043D\u0438\u043A\u043E\u043C \u0435\u0449\u0435 \u0432 XVI \u0432\u0435\u043A\u0435. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function PopoverOverviewExample_ng_template_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function PopoverOverviewExample_ng_template_1_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0421\u0435\u0433\u043E\u0434\u043D\u044F \u044D\u0442\u043E\u0442 \u0442\u0435\u043A\u0441\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0432\u0441\u0435 \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u044B, \u043D\u0430\u0431\u0438\u0440\u0430\u044E\u0449\u0438\u0435 \u0440\u044B\u0431\u0443 \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0435\u0439. \u0410\u0431\u0437\u0430\u0446 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043D\u043E\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u0432\u043E \u0432\u0441\u0435\u0445 \u0441\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0430\u0445 \u043F\u043E \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0435 \u0438 \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442\u0441\u044F \u043A \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044E \u0432 \u0441\u0442\u0430\u0442\u044C\u044F\u0445, \u043F\u043E\u0441\u0432\u044F\u0449\u0435\u043D\u043D\u044B\u0445 \u0438\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u044E \u043C\u0430\u043A\u0435\u0442\u0430 \u0432\u0435\u0440\u0441\u0442\u043A\u0438 \u043F\u0440\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0444\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0442\u0435\u043A\u0441\u0442\u043E\u0432. \u0412 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430\u0445 \u043F\u043E \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u0444\u0438\u0440\u043C\u0435\u043D\u043D\u044B\u043C \u0441\u0442\u0438\u043B\u0435\u043C \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438\u043C\u0435\u043D\u043D\u043E \u0441 \u044D\u0442\u0438\u0445 \u0441\u043B\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u044B \u0432\u0435\u0440\u0441\u0442\u043A\u0438. \u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0442 \u0434\u0430\u0436\u0435 \u0438\u0437\u0434\u0430\u043D\u0438\u044F \u0441 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C Lorem ipsum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      function PopoverOverviewExample_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverOverviewExample_ng_template_1_ng_container_1_Template, 2, 0, "ng-container", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PopoverOverviewExample_ng_template_1_ng_container_2_Template, 2, 0, "ng-container", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PopoverOverviewExample_ng_template_1_ng_container_3_Template, 2, 0, "ng-container", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r1.popoverActiveStage);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 3);
        }
      }

      function PopoverOverviewExample_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_ng_template_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r12.changeStep(-1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \u2190 \u041D\u0430\u0437\u0430\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_ng_template_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.changeStep(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u0414\u0430\u043B\u044C\u0448\u0435 \u2192 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", "primary");
        }
      }

      function PopoverOverviewExample_li_119_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Popover activated fallback position: ", ctx_r4.activatedPosition, "");
        }
      }

      function PopoverOverviewExample_li_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Placement priority order: ", ctx_r5.multipleSelected, "");
        }
      }

      function PopoverOverviewExample_button_125_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mcPlacementChange", function PopoverOverviewExample_button_125_Template_button_mcPlacementChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.onStrategyPlacementChange($event);
          })("mcVisibleChange", function PopoverOverviewExample_button_125_Template_button_mcVisibleChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.onPopoverVisibleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Button ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mcPlacement", ctx_r6.selectedPlacement)("mcPlacementPriority", ctx_r6.multipleSelected)("mcPopoverSize", ctx_r6.selectedSize)("mcTrigger", ctx_r6.selectedTrigger)("mcPopoverContent", _r0)("mcPopoverFooter", _r2);
        }
      }

      function PopoverOverviewExample_mc_form_field_126_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mc-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PopoverOverviewExample_mc_form_field_126_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r18.content = $event;
          })("mcPlacementChange", function PopoverOverviewExample_mc_form_field_126_Template_input_mcPlacementChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.onStrategyPlacementChange($event);
          })("mcVisibleChange", function PopoverOverviewExample_mc_form_field_126_Template_input_mcVisibleChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r21.onPopoverVisibleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.content)("mcPlacement", ctx_r7.selectedPlacement)("mcPlacementPriority", ctx_r7.multipleSelected)("mcPopoverSize", ctx_r7.selectedSize)("mcTrigger", ctx_r7.selectedTrigger)("mcPopoverContent", _r0)("mcPopoverFooter", _r2);
        }
      }

      function PopoverOverviewExample_div_127_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mcPlacementChange", function PopoverOverviewExample_div_127_Template_i_mcPlacementChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.onStrategyPlacementChange($event);
          })("mcVisibleChange", function PopoverOverviewExample_div_127_Template_i_mcVisibleChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r24.onPopoverVisibleChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mcPlacement", ctx_r8.selectedPlacement)("mcPlacementPriority", ctx_r8.multipleSelected)("mcPopoverSize", ctx_r8.selectedSize)("mcTrigger", ctx_r8.selectedTrigger)("mcPopoverContent", _r0)("mcPopoverFooter", _r2);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          active: a0,
          actual: a1
        };
      };
      /**
       * @title Basic popover
       */


      var PopoverOverviewExample = /*#__PURE__*/function () {
        function PopoverOverviewExample() {
          _classCallCheck(this, PopoverOverviewExample);

          this.isPopoverVisibleLeft = false;
          this.activatedPosition = '';
          this.ELEMENTS = {
            BUTTON: 'button',
            INPUT: 'input',
            ICON: 'icon'
          };
          this.TRIGGERS = {
            CLICK: 'click',
            FOCUS: 'focus',
            HOVER: 'hover'
          };
          this.SIZE = {
            LARGE: 'large',
            NORMAL: 'normal',
            SMALL: 'small'
          };
          this.selectedElement = 'button';
          this.selectedPlacement = 'left';
          this.selectedTrigger = 'click';
          this.selectedSize = 'normal';
          this.layoutClass = 'flex-65 layout-row layout-align-center-center';
          this.content = 'button text';
          this.userDefinedPlacementPriority = ['bottom', 'right'];
          this.multipleSelected = [];
          this.popoverActiveStage = 1;
        }

        _createClass(PopoverOverviewExample, [{
          key: "changeStep",
          value: function changeStep(direction) {
            var newStage = this.popoverActiveStage + direction; // tslint:disable-next-line:no-magic-numbers

            if (newStage < 1 || newStage > 3) {
              return;
            }

            this.popoverActiveStage += direction;
          }
        }, {
          key: "onPopoverVisibleChange",
          value: function onPopoverVisibleChange($event) {
            if (!$event) {
              this.activatedPosition = '';
            }
          }
        }, {
          key: "onStrategyPlacementChange",
          value: function onStrategyPlacementChange(event) {
            this.activatedPosition = event;
          }
        }, {
          key: "setPlacement",
          value: function setPlacement(placement) {
            this.selectedPlacement = placement;
          }
        }, {
          key: "showElement",
          value: function showElement() {
            return this.selectedElement;
          }
        }, {
          key: "activated",
          value: function activated(value) {
            return this.selectedPlacement === value;
          }
        }, {
          key: "isActual",
          value: function isActual(value) {
            return this.activatedPosition === value && this.selectedPlacement !== this.activatedPosition;
          }
        }, {
          key: "getOrder",
          value: function getOrder(forElement) {
            if (forElement === 'config') {
              return this.selectedOrder ? {
                order: 2
              } : {
                order: 1
              };
            }

            if (forElement === 'result') {
              return this.selectedOrder ? {
                order: 1
              } : {
                order: 2
              };
            }
          }
        }, {
          key: "isFallbackActivated",
          get: function get() {
            return this.selectedPlacement !== this.activatedPosition && this.activatedPosition !== '';
          }
        }]);

        return PopoverOverviewExample;
      }();

      PopoverOverviewExample.ɵfac = function PopoverOverviewExample_Factory(t) {
        return new (t || PopoverOverviewExample)();
      };

      PopoverOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PopoverOverviewExample,
        selectors: [["popover-overview-example"]],
        decls: 128,
        vars: 76,
        consts: [[1, "container", "flex", "flex-100", "layout-column", "layout-align-start-start"], ["customContent", ""], ["customFooter", ""], [1, "flex-35", "layout-row", "layou-align-start-start", "config"], [1, "flex-35"], ["for", "order"], ["id", "order", 3, "ngModel", "ngModelChange"], ["for", "element", 1, "flex", "mc-form-label"], ["id", "element", 1, "padding-32"], [3, "value", "placeholder", "valueChange"], ["value", "button"], ["value", "icon"], ["value", "input"], ["for", "trigger", 1, "flex", "mc-form-label"], ["id", "trigger", 1, "padding-32"], ["value", "click"], ["value", "hover"], ["value", "focus"], ["for", "size", 1, "flex", "mc-form-label"], ["id", "size", 1, "padding-32"], ["value", "small"], ["value", "normal"], ["value", "large"], ["for", "layout", 1, "flex", "mc-form-label"], ["id", "layout", 1, "padding-32"], ["value", "flex-65 layout-row layout-align-start-start"], ["value", "flex-65 layout-row layout-align-start-center"], ["value", "flex-65 layout-row layout-align-start-end"], ["value", "flex-65 layout-row layout-align-center-start"], ["value", "flex-65 layout-row layout-align-center-center"], ["value", "flex-65 layout-row layout-align-center-end"], ["value", "flex-65 layout-row layout-align-end-start"], ["value", "flex-65 layout-row layout-align-end-center"], ["value", "flex-65 layout-row layout-align-end-end"], [1, "flex", "flex-35", "layout-align-center-center"], [1, "visual-box"], [1, "visual-box_clickable", "visual-box_placement-top-left", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-top", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-top-right", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-right-top", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-right", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-right-bottom", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-bottom-right", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-bottom", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-bottom-left", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-left-bottom", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-left", 3, "ngClass", "click"], [1, "visual-box_clickable", "visual-box_placement-left-top", 3, "ngClass", "click"], ["multiple", "", 3, "value", "valueChange"], ["value", "top", "disabled", ""], ["value", "topLeft"], ["value", "topRight"], ["value", "bottom"], ["value", "bottomLeft"], ["value", "bottomRight"], ["value", "right"], ["value", "rightTop"], ["value", "rightBottom"], ["value", "left"], ["value", "leftTop"], ["value", "leftBottom"], [1, "flex-30"], ["class", "actual red", 4, "ngIf"], [4, "ngIf"], [3, "ngSwitch"], ["mc-button", "", "class", "proove", "mcPopover", "", "mcPopoverClass", "popover-485", "mcPopoverHeader", "Header text", 3, "mcPlacement", "mcPlacementPriority", "mcPopoverSize", "mcTrigger", "mcPopoverContent", "mcPopoverFooter", "mcPlacementChange", "mcVisibleChange", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["cdkTrapFocus", "true", "cdkTrapFocusAutoCapture", "true", 1, "flex-100", "layout-row", "layout-align-space-between-center"], ["mc-button", "", 1, "step", 3, "color", "click"], [1, "actual", "red"], ["mc-button", "", "mcPopover", "", "mcPopoverClass", "popover-485", "mcPopoverHeader", "Header text", 1, "proove", 3, "mcPlacement", "mcPlacementPriority", "mcPopoverSize", "mcTrigger", "mcPopoverContent", "mcPopoverFooter", "mcPlacementChange", "mcVisibleChange"], ["mcInput", "", "placeholder", "Button content", "mcPopover", "", "mcPopoverClass", "popover-485", "mcPopoverHeader", "Lorem ipsum", 3, "ngModel", "mcPlacement", "mcPlacementPriority", "mcPopoverSize", "mcTrigger", "mcPopoverContent", "mcPopoverFooter", "ngModelChange", "mcPlacementChange", "mcVisibleChange"], ["mc-icon", "mc-calendar_16", "mcPopover", "", "mcPopoverClass", "popover-485", "mcPopoverHeader", "Header text", 3, "mcPlacement", "mcPlacementPriority", "mcPopoverSize", "mcTrigger", "mcPopoverContent", "mcPopoverFooter", "mcPlacementChange", "mcVisibleChange"]],
        template: function PopoverOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PopoverOverviewExample_ng_template_1_Template, 4, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PopoverOverviewExample_ng_template_3_Template, 5, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Inverse layout order:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mc-checkbox", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PopoverOverviewExample_Template_mc_checkbox_ngModelChange_10_listener($event) {
              return ctx.selectedOrder = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Yes/No");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Choose element for popover binding ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mc-form-field", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mc-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function PopoverOverviewExample_Template_mc_select_valueChange_16_listener($event) {
              return ctx.selectedElement = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mc-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mc-option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mc-option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Choose popover trigger ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mc-form-field", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mc-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function PopoverOverviewExample_Template_mc_select_valueChange_26_listener($event) {
              return ctx.selectedTrigger = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mc-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Click");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mc-option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Hover");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mc-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Focus");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Choose popover size ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "mc-form-field", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mc-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function PopoverOverviewExample_Template_mc_select_valueChange_36_listener($event) {
              return ctx.selectedSize = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mc-option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Small");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mc-option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Normal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "mc-option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Large");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Choose layout content placement ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mc-form-field", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mc-select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function PopoverOverviewExample_Template_mc_select_valueChange_46_listener($event) {
              return ctx.layoutClass = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mc-option", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Start start");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "mc-option", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Start center");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mc-option", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Start end");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "mc-option", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Center start");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mc-option", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Center center");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "mc-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Center end");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "mc-option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "End start");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mc-option", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "End center");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mc-option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "End end");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " Choose popover arrow placement - popover mcPlacement and placement priority strategy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_69_listener() {
              return ctx.setPlacement("topLeft");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_70_listener() {
              return ctx.setPlacement("top");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_71_listener() {
              return ctx.setPlacement("topRight");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_72_listener() {
              return ctx.setPlacement("rightTop");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_73_listener() {
              return ctx.setPlacement("right");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_74_listener() {
              return ctx.setPlacement("rightBottom");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_75_listener() {
              return ctx.setPlacement("bottomRight");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_76_listener() {
              return ctx.setPlacement("bottom");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_77_listener() {
              return ctx.setPlacement("bottomLeft");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_78_listener() {
              return ctx.setPlacement("leftBottom");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_79_listener() {
              return ctx.setPlacement("left");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PopoverOverviewExample_Template_div_click_80_listener() {
              return ctx.setPlacement("leftTop");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "mc-select", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function PopoverOverviewExample_Template_mc_select_valueChange_82_listener($event) {
              return ctx.multipleSelected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "mc-option", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Top");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "mc-option", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "TopLeft");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "mc-option", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "TopRight");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mc-option", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Bottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "mc-option", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "BottomLeft");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "mc-option", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "BottomRight");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mc-option", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Right");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "mc-option", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "RightTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "mc-option", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "RightBottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "mc-option", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Left");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mc-option", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "LeftTop");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "mc-option", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "LeftBottom");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "Configuration:");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](119, PopoverOverviewExample_li_119_Template, 2, 1, "li", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, PopoverOverviewExample_li_122_Template, 2, 1, "li", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, PopoverOverviewExample_button_125_Template, 2, 6, "button", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](126, PopoverOverviewExample_mc_form_field_126_Template, 2, 7, "mc-form-field", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](127, PopoverOverviewExample_div_127_Template, 2, 6, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.getOrder("config"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedElement)("placeholder", "Select element");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedTrigger)("placeholder", "Select trigger");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedSize)("placeholder", "Select size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.layoutClass)("placeholder", "Select layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](40, _c0, ctx.activated("topLeft"), ctx.isActual("topLeft")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](43, _c0, ctx.activated("top"), ctx.isActual("top")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](46, _c0, ctx.activated("topRight"), ctx.isActual("topRight")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](49, _c0, ctx.activated("rightTop"), ctx.isActual("rightTop")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](52, _c0, ctx.activated("right"), ctx.isActual("right")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](55, _c0, ctx.activated("rightBottom"), ctx.isActual("rightBottom")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](58, _c0, ctx.activated("bottomRight"), ctx.isActual("bottomRight")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](61, _c0, ctx.activated("bottom"), ctx.isActual("bottom")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](64, _c0, ctx.activated("bottomLeft"), ctx.isActual("bottomLeft")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](67, _c0, ctx.activated("leftBottom"), ctx.isActual("leftBottom")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](70, _c0, ctx.activated("left"), ctx.isActual("left")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](73, _c0, ctx.activated("leftTop"), ctx.isActual("leftTop")));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.multipleSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Popover size: ", ctx.selectedSize, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Popover trigger: ", ctx.selectedTrigger, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Popover anchor placement: ", ctx.selectedPlacement, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Popover anchored element: ", ctx.selectedElement, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isFallbackActivated);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Layout positioning: ", ctx.layoutClass, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.multipleSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.getOrder("result"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("", ctx.layoutClass, " result");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.showElement());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.BUTTON);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.INPUT);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.ELEMENTS.ICON);
          }
        },
        directives: [_ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_5__["McCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_10__["McSelect"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_12__["McOption"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkTrapFocus"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonCssStyler"], _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_9__["McPopoverTrigger"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconCSSStyler"]],
        styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{margin:0}app[_ngcontent-%COMP%], body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%;height:100%}.actual[_ngcontent-%COMP%]{animation:blink-animation 1s steps(5,start) infinite;-webkit-animation:blink-animation 1s steps(5,start) infinite}@keyframes blink-animation{to{visibility:hidden}}@-webkit-keyframes blink-animation{to{visibility:hidden}}.red[_ngcontent-%COMP%]{color:red}.container[_ngcontent-%COMP%]{width:100%;height:100%;padding:1%}.config[_ngcontent-%COMP%], .result[_ngcontent-%COMP%]{height:50%;width:100%}.result[_ngcontent-%COMP%]{border-top:2px solid #56d1ff;border-bottom:2px solid #56d1ff}.padding-32[_ngcontent-%COMP%]{padding:8px}.visual-box_clickable[_ngcontent-%COMP%]{height:12px;width:12px;position:absolute;background:#4dc3ff;cursor:pointer}.active[_ngcontent-%COMP%]{background:red}.visual-box[_ngcontent-%COMP%]{height:100px;width:240px;border:1px solid #575757;position:relative;margin:50px}.visual-box_placement-top-left[_ngcontent-%COMP%]{top:-6px;left:10px}.visual-box_placement-top[_ngcontent-%COMP%]{top:-6px;left:calc(50% - 6px)}.visual-box_placement-top-right[_ngcontent-%COMP%]{top:-6px;right:10px}.visual-box_placement-left-top[_ngcontent-%COMP%]{top:10px;left:-6px}.visual-box_placement-left[_ngcontent-%COMP%]{top:calc(50% - 6px);left:-6px}.visual-box_placement-left-bottom[_ngcontent-%COMP%]{bottom:10px;left:-6px}.visual-box_placement-bottom-right[_ngcontent-%COMP%]{bottom:-6px;right:10px}.visual-box_placement-bottom[_ngcontent-%COMP%]{bottom:-6px;right:calc(50% - 6px)}.visual-box_placement-bottom-left[_ngcontent-%COMP%]{bottom:-6px;left:10px}.visual-box_placement-right-bottom[_ngcontent-%COMP%]{right:-6px;bottom:10px}.visual-box_placement-right[_ngcontent-%COMP%]{right:-6px;bottom:calc(50% - 6px)}.visual-box_placement-right-top[_ngcontent-%COMP%]{right:-6px;top:10px}.popover-485[_ngcontent-%COMP%]   .mc-popover[_ngcontent-%COMP%]{max-width:485px!important}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'popover-overview-example',
            templateUrl: 'popover-overview-example.html',
            styleUrls: ['popover-overview-example.css']
          }]
        }], function () {
          return [];
        }, null);
      })();

      var EXAMPLES = [PopoverOverviewExample, PopoverInstanceExample];

      var PopoverExamplesModule = function PopoverExamplesModule() {
        _classCallCheck(this, PopoverExamplesModule);
      };

      PopoverExamplesModule.ɵfac = function PopoverExamplesModule_Factory(t) {
        return new (t || PopoverExamplesModule)();
      };

      PopoverExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PopoverExamplesModule
      });
      PopoverExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormFieldModule"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_10__["McSelectModule"], _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_9__["McPopoverModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInputModule"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_11__["McSplitterModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_5__["McCheckboxModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopoverExamplesModule, {
          declarations: [PopoverOverviewExample, PopoverInstanceExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormFieldModule"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_10__["McSelectModule"], _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_9__["McPopoverModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInputModule"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_11__["McSplitterModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_5__["McCheckboxModule"]],
          exports: [PopoverOverviewExample, PopoverInstanceExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_6__["McFormFieldModule"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_10__["McSelectModule"], _ptsecurity_mosaic_popover__WEBPACK_IMPORTED_MODULE_9__["McPopoverModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_4__["McButtonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_7__["McIconModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_8__["McInputModule"], _ptsecurity_mosaic_splitter__WEBPACK_IMPORTED_MODULE_11__["McSplitterModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_5__["McCheckboxModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-popover.js.map

      /***/

    },

    /***/
    "hvHG":
    /*!************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-popover.js ***!
      \************************************************************************/

    /*! exports provided: MC_POPOVER_SCROLL_STRATEGY, MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER, McPopoverComponent, McPopoverModule, McPopoverTrigger, getMcPopoverInvalidPositionError, mcPopoverAnimations, mcPopoverScrollStrategyFactory */

    /***/
    function hvHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_POPOVER_SCROLL_STRATEGY", function () {
        return MC_POPOVER_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McPopoverComponent", function () {
        return McPopoverComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McPopoverModule", function () {
        return McPopoverModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McPopoverTrigger", function () {
        return McPopoverTrigger;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMcPopoverInvalidPositionError", function () {
        return getMcPopoverInvalidPositionError;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mcPopoverAnimations", function () {
        return mcPopoverAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mcPopoverScrollStrategyFactory", function () {
        return mcPopoverScrollStrategyFactory;
      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      function McPopoverComponent_div_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 9);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.header);
        }
      }

      function McPopoverComponent_div_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.header);
        }
      }

      function McPopoverComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McPopoverComponent_div_2_ng_container_1_Template, 1, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_2_ng_container_2_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isTemplateRef(ctx_r0.header));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isTemplateRef(ctx_r0.header));
        }
      }

      function McPopoverComponent_div_3_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 9);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.content);
        }
      }

      function McPopoverComponent_div_3_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.content);
        }
      }

      function McPopoverComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McPopoverComponent_div_3_ng_container_1_Template, 1, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_3_ng_container_2_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isTemplateRef(ctx_r1.content));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isTemplateRef(ctx_r1.content));
        }
      }

      function McPopoverComponent_div_4_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 9);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.footer);
        }
      }

      function McPopoverComponent_div_4_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.footer);
        }
      }

      function McPopoverComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McPopoverComponent_div_4_ng_container_1_Template, 1, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_4_ng_container_2_Template, 3, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isTemplateRef(ctx_r2.footer));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isTemplateRef(ctx_r2.footer));
        }
      }

      var mcPopoverAnimations = {
        /** Animation that transitions a tooltip in and out. */
        popoverState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
          opacity: 0
        })))])
      };

      var McPopoverComponent = /*#__PURE__*/function (_ptsecurity_mosaic_co) {
        _inherits(McPopoverComponent, _ptsecurity_mosaic_co);

        var _super = _createSuper(McPopoverComponent);

        function McPopoverComponent(changeDetectorRef) {
          var _this;

          _classCallCheck(this, McPopoverComponent);

          _this = _super.call(this, changeDetectorRef);
          _this.prefix = 'mc-popover';
          return _this;
        }

        _createClass(McPopoverComponent, [{
          key: "updateClassMap",
          value: function updateClassMap(placement, customClass, size) {
            _get(_getPrototypeOf(McPopoverComponent.prototype), "updateClassMap", this).call(this, placement, customClass, _defineProperty({}, "".concat(this.prefix, "_").concat(size), !!size));
          }
        }]);

        return McPopoverComponent;
      }(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McPopUp"]);

      McPopoverComponent.ɵfac = function McPopoverComponent_Factory(t) {
        return new (t || McPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]));
      };

      McPopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McPopoverComponent,
        selectors: [["mc-popover-component"]],
        hostBindings: function McPopoverComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.esc", function McPopoverComponent_keydown_esc_HostBindingHandler() {
              return ctx.hide(0);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 7,
        consts: [[1, "mc-popover", 3, "ngClass"], [1, "mc-popover__container"], ["class", "mc-popover__header", 4, "ngIf"], ["class", "mc-popover__content", 4, "ngIf"], ["class", "mc-popover__footer", 4, "ngIf"], [1, "mc-popover__arrow"], [1, "mc-popover__header"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "mc-popover__content"], [1, "mc-popover__footer"]],
        template: function McPopoverComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@state.start", function McPopoverComponent_Template_div_animation_state_start_0_listener() {
              return ctx.animationStart();
            })("@state.done", function McPopoverComponent_Template_div_animation_state_done_0_listener($event) {
              return ctx.animationDone($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McPopoverComponent_div_2_Template, 3, 2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, McPopoverComponent_div_3_Template, 3, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, McPopoverComponent_div_4_Template, 3, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.classMap)("@state", ctx.visibility);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.header);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.footer);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-popover__arrow_with-footer", ctx.footer);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]],
        styles: ["@-webkit-keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 0,transparent 20px,rgba(0,0,0,.05) 0,rgba(0,0,0,.05) 30px,transparent 0) repeat;background-size:29px 29px;-webkit-animation:mc-progress 1s linear infinite;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;height:100%;width:100%;position:fixed}.cdk-overlay-backdrop,.cdk-overlay-container{top:0;left:0;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{bottom:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto}.cdk-overlay-pane{pointer-events:auto;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box,.cdk-overlay-pane{box-sizing:border-box;position:absolute;margin:0;padding:0;z-index:1000}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius,3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width,200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width,400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width,640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-bottom,.mc-popover.mc-popover_placement-right-top{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-bottom,.mc-popover.mc-popover_placement-left-top{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height,480px);border-radius:var(--mc-popover-size-border-radius,3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height,10px 16px);padding:var(--mc-popover-header-size-padding,10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding,16px)}.mc-popover__footer{margin-top:var(--mc-popover-footer-size-margin-top,8px);height:var(--mc-popover-footer-size-height,56px);padding:var(--mc-popover-footer-size-padding,12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size,12px);height:var(--mc-popover-size-arrow-size,12px);border:1px solid;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-right-top .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-left-top .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}"],
        encapsulation: 2,
        data: {
          animation: [mcPopoverAnimations.popoverState]
        },
        changeDetection: 0
      });
      /** @nocollapse */

      McPopoverComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McPopoverComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mc-popover-component',
            template: "<div class=\"mc-popover\"\n     [ngClass]=\"classMap\"\n     [@state]=\"visibility\"\n     (@state.start)=\"animationStart()\"\n     (@state.done)=\"animationDone($event)\">\n\n    <div class=\"mc-popover__container\">\n        <div class=\"mc-popover__header\" *ngIf=\"header\">\n            <ng-container *ngIf=\"isTemplateRef(header)\" [ngTemplateOutlet]=\"header\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(header)\">\n                <div>{{ header }}</div>\n            </ng-container>\n        </div>\n\n        <div class=\"mc-popover__content\" *ngIf=\"content\">\n            <ng-container *ngIf=\"isTemplateRef(content)\" [ngTemplateOutlet]=\"content\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(content)\">\n                <div>{{ content }}</div>\n            </ng-container>\n        </div>\n\n        <div class=\"mc-popover__footer\" *ngIf=\"footer\">\n            <ng-container *ngIf=\"isTemplateRef(footer)\" [ngTemplateOutlet]=\"footer\"></ng-container>\n            <ng-container *ngIf=\"!isTemplateRef(footer)\">\n                <div>{{ footer }}</div>\n            </ng-container>\n        </div>\n    </div>\n\n    <div class=\"mc-popover__arrow\" [class.mc-popover__arrow_with-footer]=\"footer\"></div>\n</div>\n",
            preserveWhitespaces: false,
            host: {
              '(keydown.esc)': 'hide(0)'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            animations: [mcPopoverAnimations.popoverState],
            styles: ["@-webkit-keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}@keyframes mc-progress{0%{background-position:0 0}to{background-position:29px 0}}.mc-progress{position:relative}.mc-progress:after{content:\"\";position:absolute;border-radius:inherit;top:0;right:0;bottom:0;left:0;background:linear-gradient(135deg,rgba(0,0,0,.05) 10px,transparent 0,transparent 20px,rgba(0,0,0,.05) 0,rgba(0,0,0,.05) 30px,transparent 0) repeat;background-size:29px 29px;-webkit-animation:mc-progress 1s linear infinite;animation:mc-progress 1s linear infinite}.cdk-overlay-container{pointer-events:none;height:100%;width:100%;position:fixed}.cdk-overlay-backdrop,.cdk-overlay-container{top:0;left:0;z-index:1000;box-sizing:border-box;margin:0;padding:0}.cdk-overlay-backdrop{bottom:0;right:0;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0;position:absolute;pointer-events:auto}.cdk-overlay-pane{pointer-events:auto;max-width:100%;max-height:100%}.cdk-overlay-connected-position-bounding-box,.cdk-overlay-pane{box-sizing:border-box;position:absolute;margin:0;padding:0;z-index:1000}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-width:1px;min-height:1px}.mc-popover{position:relative;border-radius:var(--mc-popover-size-border-radius,3px);border-width:1px;border-style:solid;box-sizing:border-box;z-index:1030;list-style:none;white-space:pre-line}.mc-popover.mc-popover_small{max-width:var(--mc-popover-size-small-width,200px)}.mc-popover.mc-popover_normal{max-width:var(--mc-popover-size-normal-width,400px)}.mc-popover.mc-popover_large{max-width:var(--mc-popover-size-large-width,640px)}.mc-popover.mc-popover_placement-top,.mc-popover.mc-popover_placement-top-left,.mc-popover.mc-popover_placement-top-right{margin-bottom:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-right,.mc-popover.mc-popover_placement-right-bottom,.mc-popover.mc-popover_placement-right-top{margin-left:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-bottom,.mc-popover.mc-popover_placement-bottom-left,.mc-popover.mc-popover_placement-bottom-right{margin-top:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover.mc-popover_placement-left,.mc-popover.mc-popover_placement-left-bottom,.mc-popover.mc-popover_placement-left-top{margin-right:calc(var(--mc-popover-size-trigger-margin, 9px))}.mc-popover__container{display:flex;flex-direction:column;max-height:var(--mc-popover-size-max-height,480px);border-radius:var(--mc-popover-size-border-radius,3px);overflow:hidden}.mc-popover__header{height:var(--mc-popover-header-size-height,10px 16px);padding:var(--mc-popover-header-size-padding,10px 16px);border-bottom-width:1px;border-bottom-style:solid}.mc-popover__content{overflow:hidden;padding:var(--mc-popover-size-padding,16px)}.mc-popover__footer{margin-top:var(--mc-popover-footer-size-margin-top,8px);height:var(--mc-popover-footer-size-height,56px);padding:var(--mc-popover-footer-size-padding,12px 16px);border-top-width:1px;border-top-style:solid}.mc-popover__arrow{position:absolute;z-index:-1;width:var(--mc-popover-size-arrow-size,12px);height:var(--mc-popover-size-arrow-size,12px);border:1px solid;transform:rotate(45deg)}.mc-popover_placement-top .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-top-left .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-top-right .mc-popover__arrow{bottom:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-right-top .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-right-bottom .mc-popover__arrow{left:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:50%;margin-top:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-left-top .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));top:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-left-bottom .mc-popover__arrow{right:calc((var(--mc-popover-size-arrow-size, 11px) / -2));bottom:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:50%;margin-left:calc((var(--mc-popover-size-arrow-size, 11px) / -2))}.mc-popover_placement-bottom-left .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));left:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}.mc-popover_placement-bottom-right .mc-popover__arrow{top:calc((var(--mc-popover-size-arrow-size, 11px) / -2));right:calc(18px - var(--mc-popover-size-trigger-margin, 9px))}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }];
        }, null);
      })();

      var MC_POPOVER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mc-popover-scroll-strategy');
      /** @docs-private */

      function mcPopoverScrollStrategyFactory(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: 20
          });
        };
      }
      /** @docs-private */


      var MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MC_POPOVER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
        useFactory: mcPopoverScrollStrategyFactory
      };
      /** Creates an error to be thrown if the user supplied an invalid popover position. */

      function getMcPopoverInvalidPositionError(position) {
        return Error("McPopover position \"".concat(position, "\" is invalid."));
      }

      var McPopoverTrigger = /*#__PURE__*/function (_ptsecurity_mosaic_co2) {
        _inherits(McPopoverTrigger, _ptsecurity_mosaic_co2);

        var _super2 = _createSuper(McPopoverTrigger);

        function McPopoverTrigger(overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction) {
          var _this2;

          _classCallCheck(this, McPopoverTrigger);

          _this2 = _super2.call(this, overlay, elementRef, ngZone, scrollDispatcher, hostView, scrollStrategy, direction);
          _this2._hasBackdrop = false;
          _this2._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpTriggers"].Click;
          _this2._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Normal;
          _this2._closeOnScroll = false;
          _this2.backdropClass = 'cdk-overlay-transparent-backdrop';
          _this2.originSelector = '.mc-popover';
          _this2.overlayConfig = {
            panelClass: 'mc-popover__panel',
            hasBackdrop: _this2.hasBackdrop,
            backdropClass: _this2.backdropClass
          };
          return _this2;
        }

        _createClass(McPopoverTrigger, [{
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "header",
          get: function get() {
            return this._header;
          },
          set: function set(value) {
            this._header = value;
            this.updateData();
          }
        }, {
          key: "content",
          get: function get() {
            return this._content;
          },
          set: function set(value) {
            this._content = value;
            this.updateData();
          }
        }, {
          key: "footer",
          get: function get() {
            return this._footer;
          },
          set: function set(value) {
            this._footer = value;
            this.updateData();
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "trigger",
          get: function get() {
            return this._trigger;
          },
          set: function set(value) {
            if (value) {
              this._trigger = value;
            } else {
              this._trigger = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpTriggers"].Click;
            }

            this.initListeners();
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(value) {
            if ([_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Small, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Normal, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Large].includes(value)) {
              this._size = value;
              this.updateClassMap();
            } else {
              this._size = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["PopUpSizes"].Normal;
            }
          }
        }, {
          key: "customClass",
          get: function get() {
            return this._customClass;
          },
          set: function set(value) {
            this._customClass = value;
            this.updateClassMap();
          }
        }, {
          key: "closeOnScroll",
          get: function get() {
            return this._closeOnScroll;
          },
          set: function set(value) {
            this._closeOnScroll = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "updateData",
          value: function updateData() {
            if (!this.instance) {
              return;
            }

            this.instance.header = this.header;
            this.instance.content = this.content;
            this.instance.footer = this.footer;

            if (this.isOpen) {
              this.updatePosition(true);
            }
          }
          /** Updates the position of the current popover. */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            var reapplyPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.overlayRef = this.createOverlay();
            var position = this.overlayRef.getConfig().positionStrategy.withPositions(this.getPrioritizedPositions()).withPush(true);

            if (reapplyPosition) {
              setTimeout(function () {
                return position.reapplyLastPosition();
              });
            }
          }
        }, {
          key: "getOverlayHandleComponentType",
          value: function getOverlayHandleComponentType() {
            return McPopoverComponent;
          }
        }, {
          key: "updateClassMap",
          value: function updateClassMap() {
            var newPlacement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.placement;

            if (!this.instance) {
              return;
            }

            this.instance.updateClassMap(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["POSITION_TO_CSS_MAP"][newPlacement], this.customClass, this.size);
            this.instance.markForCheck();
          }
        }, {
          key: "closingActions",
          value: function closingActions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.overlayRef.backdropClick(), this.hasBackdrop ? rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"] : this.overlayRef.outsidePointerEvents(), this.closeOnScroll ? this.scrollDispatcher.scrolled() : rxjs__WEBPACK_IMPORTED_MODULE_6__["NEVER"], this.overlayRef.detachments());
          }
        }]);

        return McPopoverTrigger;
      }(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_5__["McPopUpTrigger"]);

      McPopoverTrigger.ɵfac = function McPopoverTrigger_Factory(t) {
        return new (t || McPopoverTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MC_POPOVER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
      };

      McPopoverTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: McPopoverTrigger,
        selectors: [["", "mcPopover", ""]],
        hostVars: 2,
        hostBindings: function McPopoverTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function McPopoverTrigger_keydown_HostBindingHandler($event) {
              return ctx.handleKeydown($event);
            })("touchend", function McPopoverTrigger_touchend_HostBindingHandler() {
              return ctx.handleTouchend();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-popover_open", ctx.isOpen);
          }
        },
        inputs: {
          backdropClass: "backdropClass",
          hasBackdrop: "hasBackdrop",
          header: ["mcPopoverHeader", "header"],
          content: ["mcPopoverContent", "content"],
          footer: ["mcPopoverFooter", "footer"],
          disabled: ["mcPopoverDisabled", "disabled"],
          trigger: ["mcTrigger", "trigger"],
          size: ["mcPopoverSize", "size"],
          customClass: ["mcPopoverClass", "customClass"],
          closeOnScroll: "closeOnScroll"
        },
        exportAs: ["mcPopover"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]]
      });
      /** @nocollapse */

      McPopoverTrigger.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [MC_POPOVER_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      McPopoverTrigger.propDecorators = {
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcPopoverHeader']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcPopoverContent']
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcPopoverFooter']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcPopoverDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcTrigger']
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcPopoverSize']
        }],
        customClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['mcPopoverClass']
        }],
        closeOnScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McPopoverTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
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
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ScrollDispatcher"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [MC_POPOVER_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverHeader']
          }],
          content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverContent']
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverFooter']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverDisabled']
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcTrigger']
          }],
          size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverSize']
          }],
          customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['mcPopoverClass']
          }],
          closeOnScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var McPopoverModule = function McPopoverModule() {
        _classCallCheck(this, McPopoverModule);
      };

      McPopoverModule.ɵfac = function McPopoverModule_Factory(t) {
        return new (t || McPopoverModule)();
      };

      McPopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: McPopoverModule
      });
      McPopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McPopoverModule, {
          declarations: function declarations() {
            return [McPopoverComponent, McPopoverTrigger];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]];
          },
          exports: function exports() {
            return [McPopoverComponent, McPopoverTrigger];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McPopoverModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [McPopoverComponent, McPopoverTrigger],
            exports: [McPopoverComponent, McPopoverTrigger],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"]],
            providers: [MC_POPOVER_SCROLL_STRATEGY_FACTORY_PROVIDER],
            entryComponents: [McPopoverComponent]
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
//# sourceMappingURL=13-es5.js.map