(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
    /***/
    "IVmm":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-list.js ***!
      \*****************************************************************************************************/

    /*! exports provided: ListExamplesModule, ListGroupsExample, ListMultipleCheckboxExample, ListMultipleKeyboardExample, ListOverviewExample */

    /***/
    function IVmm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListExamplesModule", function () {
        return ListExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListGroupsExample", function () {
        return ListGroupsExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListMultipleCheckboxExample", function () {
        return ListMultipleCheckboxExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListMultipleKeyboardExample", function () {
        return ListMultipleKeyboardExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListOverviewExample", function () {
        return ListOverviewExample;
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


      var _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/list */
      "Mi8D");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");

      function ListGroupsExample_mc_optgroup_1_mc_list_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-list-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pokemon_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pokemon_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pokemon_r3.viewValue, " ");
        }
      }

      function ListGroupsExample_mc_optgroup_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-optgroup", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListGroupsExample_mc_optgroup_1_mc_list_option_1_Template, 2, 2, "mc-list-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var group_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", group_r1.name)("disabled", group_r1.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r1.pokemon);
        }
      }
      /**
       * @title Basic list
       */


      var ListGroupsExample = function ListGroupsExample() {
        _classCallCheck(this, ListGroupsExample);

        this.pokemonTypes = [{
          name: 'Grass',
          pokemon: [{
            value: 'bulbasaur-0',
            viewValue: 'Bulbasaur'
          }, {
            value: 'oddish-1',
            viewValue: 'Oddish'
          }, {
            value: 'bellsprout-2',
            viewValue: 'Bellsprout'
          }]
        }, {
          name: 'Water',
          disabled: true,
          pokemon: [{
            value: 'squirtle-3',
            viewValue: 'Squirtle'
          }, {
            value: 'psyduck-4',
            viewValue: 'Psyduck'
          }, {
            value: 'horsea-5',
            viewValue: 'Horsea'
          }]
        }, {
          name: 'Fire',
          pokemon: [{
            value: 'charmander-6',
            viewValue: 'Charmander'
          }, {
            value: 'vulpix-7',
            viewValue: 'Vulpix'
          }, {
            value: 'flareon-8',
            viewValue: 'Flareon'
          }]
        }, {
          name: 'Psychic',
          pokemon: [{
            value: 'mew-9',
            viewValue: 'Mew'
          }, {
            value: 'mewtwo-10',
            viewValue: 'Mewtwo'
          }]
        }];
      };

      ListGroupsExample.ɵfac = function ListGroupsExample_Factory(t) {
        return new (t || ListGroupsExample)();
      };

      ListGroupsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListGroupsExample,
        selectors: [["list-groups-example"]],
        decls: 4,
        vars: 1,
        consts: [[3, "label", "disabled", 4, "ngFor", "ngForOf"], ["value", "mime-11"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function ListGroupsExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-list-selection");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListGroupsExample_mc_optgroup_1_Template, 2, 3, "mc-optgroup", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-list-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mr. Mime");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pokemonTypes);
          }
        },
        directives: [_ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListSelection"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListOption"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McOptgroup"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListGroupsExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'list-groups-example',
            templateUrl: 'list-groups-example.html',
            styleUrls: ['list-groups-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic list
       */


      var ListMultipleCheckboxExample = function ListMultipleCheckboxExample() {
        _classCallCheck(this, ListMultipleCheckboxExample);

        this.selected = [];
      };

      ListMultipleCheckboxExample.ɵfac = function ListMultipleCheckboxExample_Factory(t) {
        return new (t || ListMultipleCheckboxExample)();
      };

      ListMultipleCheckboxExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListMultipleCheckboxExample,
        selectors: [["list-multiple-checkbox-example"]],
        decls: 24,
        vars: 2,
        consts: [["multiple", "checkbox", 3, "ngModel", "ngModelChange"], ["value", "Item 1", "disabled", ""], ["value", "Item 2"], ["value", "Item 3"], ["value", "Item 4"], ["value", "Item 5"], ["value", "Item 6"], ["value", "Item 7"], ["value", "Item 8"], ["value", "Item 9"], ["value", "Item 10"]],
        template: function ListMultipleCheckboxExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-list-selection", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ListMultipleCheckboxExample_Template_mc_list_selection_ngModelChange_0_listener($event) {
              return ctx.selected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-list-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-list-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-list-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-list-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Item 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-list-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Item 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-list-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Item 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-list-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Item 7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-list-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Item 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-list-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Item 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-list-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Item 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Selected: ", ctx.selected, "");
          }
        },
        directives: [_ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListOption"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListMultipleCheckboxExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'list-multiple-checkbox-example',
            templateUrl: 'list-multiple-checkbox-example.html',
            styleUrls: ['list-multiple-checkbox-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic list
       */


      var ListMultipleKeyboardExample = function ListMultipleKeyboardExample() {
        _classCallCheck(this, ListMultipleKeyboardExample);

        this.selected = [];
      };

      ListMultipleKeyboardExample.ɵfac = function ListMultipleKeyboardExample_Factory(t) {
        return new (t || ListMultipleKeyboardExample)();
      };

      ListMultipleKeyboardExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListMultipleKeyboardExample,
        selectors: [["list-multiple-keyboard-example"]],
        decls: 24,
        vars: 2,
        consts: [["multiple", "keyboard", 3, "ngModel", "ngModelChange"], ["value", "Item 1", "disabled", ""], ["value", "Item 2"], ["value", "Item 3"], ["value", "Item 4"], ["value", "Item 5"], ["value", "Item 6"], ["value", "Item 7"], ["value", "Item 8"], ["value", "Item 9"], ["value", "Item 10"]],
        template: function ListMultipleKeyboardExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-list-selection", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ListMultipleKeyboardExample_Template_mc_list_selection_ngModelChange_0_listener($event) {
              return ctx.selected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-list-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-list-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-list-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-list-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Item 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-list-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Item 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-list-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Item 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-list-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Item 7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-list-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Item 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-list-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Item 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-list-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Item 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Selected: ", ctx.selected, "");
          }
        },
        directives: [_ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListOption"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListMultipleKeyboardExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'list-multiple-keyboard-example',
            templateUrl: 'list-multiple-keyboard-example.html',
            styleUrls: ['list-multiple-keyboard-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Basic list
       */


      var ListOverviewExample = function ListOverviewExample() {
        _classCallCheck(this, ListOverviewExample);

        this.selected = [];
      };

      ListOverviewExample.ɵfac = function ListOverviewExample_Factory(t) {
        return new (t || ListOverviewExample)();
      };

      ListOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ListOverviewExample,
        selectors: [["list-overview-example"]],
        decls: 24,
        vars: 2,
        consts: [[3, "ngModel", "ngModelChange"], ["value", "Item 1", "disabled", ""], ["value", "Item 2"], ["value", "Item 3"], ["value", "Item 4"], ["value", "Item 5"], ["value", "Item 6"], ["value", "Item 7"], ["value", "Item 8"], ["value", "Item 9"], ["value", "Item 10"]],
        template: function ListOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-list-selection", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ListOverviewExample_Template_mc_list_selection_ngModelChange_0_listener($event) {
              return ctx.selected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-list-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Item 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-list-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Item 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-list-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Item 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mc-list-option", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Item 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-list-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Item 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-list-option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Item 6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-list-option", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Item 7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-list-option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Item 8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-list-option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Item 9");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-list-option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Item 10");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Selected: ", ctx.selected, "");
          }
        },
        directives: [_ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListOption"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'list-overview-example',
            templateUrl: 'list-overview-example.html',
            styleUrls: ['list-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [ListOverviewExample, ListMultipleCheckboxExample, ListMultipleKeyboardExample, ListGroupsExample];

      var ListExamplesModule = function ListExamplesModule() {
        _classCallCheck(this, ListExamplesModule);
      };

      ListExamplesModule.ɵfac = function ListExamplesModule_Factory(t) {
        return new (t || ListExamplesModule)();
      };

      ListExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: ListExamplesModule
      });
      ListExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ListExamplesModule, {
          declarations: [ListOverviewExample, ListMultipleCheckboxExample, ListMultipleKeyboardExample, ListGroupsExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListModule"]],
          exports: [ListOverviewExample, ListMultipleCheckboxExample, ListMultipleKeyboardExample, ListGroupsExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ptsecurity_mosaic_list__WEBPACK_IMPORTED_MODULE_3__["McListModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-list.js.map

      /***/

    },

    /***/
    "Mi8D":
    /*!*********************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-list.js ***!
      \*********************************************************************/

    /*! exports provided: MC_SELECTION_LIST_VALUE_ACCESSOR, McList, McListItem, McListModule, McListOption, McListSelection, McListSelectionBase, McListSelectionChange, McListSelectionMixinBase */

    /***/
    function Mi8D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_SELECTION_LIST_VALUE_ACCESSOR", function () {
        return MC_SELECTION_LIST_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McList", function () {
        return McList;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListItem", function () {
        return McListItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListModule", function () {
        return McListModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListOption", function () {
        return McListOption;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListSelection", function () {
        return McListSelection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListSelectionBase", function () {
        return McListSelectionBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListSelectionChange", function () {
        return McListSelectionChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McListSelectionMixinBase", function () {
        return McListSelectionMixinBase;
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


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/cdk/a11y */
      "cGXF");
      /* harmony import */


      var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/cdk/keycodes */
      "SfmH");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:disable:no-empty */

      /**
       * Component for list-options of selection-list. Each list-option can automatically
       * generate a checkbox and can put current item into the selectionModel of selection-list
       * if the current item is selected.
       */


      var _c0 = ["text"];

      function McListOption_mc_pseudo_checkbox_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mc-pseudo-checkbox", 4);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
        }
      }

      var _c1 = ["*"];
      var _c2 = ".mc-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mc-divider{display:block;margin:0}.mc-divider.mc-divider_horizontal{border-top-width:var(--mc-divider-size-width,1px);border-top-style:solid}.mc-divider.mc-divider_vertical{height:100%;border-right-width:var(--mc-divider-size-width,1px);border-right-style:solid}.mc-divider.mc-divider_inset{margin-left:var(--mc-divider-size-inset-margin,80px)}[dir=rtl] .mc-divider.mc-divider_inset{margin-left:auto;margin-right:var(--mc-divider-size-inset-margin,80px)}.mc-list,.mc-list-selection{display:block;outline:none}.mc-list-item,.mc-list-option{display:block;height:var(--mc-list-size-item-height,28px);border:2px solid transparent}.mc-list-item .mc-list-item-content,.mc-list-option .mc-list-item-content{position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;height:100%;padding:0 var(--mc-list-size-horizontal-padding,16px)}.mc-list-item.mc-2-line,.mc-list-option.mc-2-line{height:var(--mc-list-size-two-line-height,72px)}.mc-list-item.mc-3-line,.mc-list-option.mc-3-line{height:var(--mc-list-size-three-line-height,88px)}.mc-list-item.mc-multi-line,.mc-list-option.mc-multi-line{height:auto}.mc-list-item.mc-multi-line .mc-list-item-content,.mc-list-option.mc-multi-line .mc-list-item-content{padding-top:var(--mc-list-size-multi-line-padding,16px);padding-bottom:var(--mc-list-size-multi-line-padding,16px)}.mc-list-item .mc-list-text,.mc-list-option .mc-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mc-list-item .mc-list-text>*,.mc-list-option .mc-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mc-list-item .mc-list-text:empty,.mc-list-option .mc-list-text:empty{display:none}.mc-list-item .mc-list-item-content .mc-list-text:not(:nth-child(2)),.mc-list-option .mc-list-item-content .mc-list-text:not(:nth-child(2)){padding-right:0}[dir=rtl] .mc-list-item .mc-list-item-content .mc-list-text:not(:nth-child(2)),[dir=rtl] .mc-list-option .mc-list-item-content .mc-list-text:not(:nth-child(2)){padding-left:0}.mc-list-item .mc-list-icon,.mc-list-option .mc-list-icon{box-sizing:content-box;flex-shrink:0;width:var(--mc-list-size-icon-width,24px);height:var(--mc-list-size-icon-width,24px);border-radius:50%;padding:var(--mc-list-size-icon-padding,4px);font-size:var(--mc-list-size-icon-width,24px)}.mc-list-item .mc-list-icon~.mc-divider_inset,.mc-list-option .mc-list-icon~.mc-divider_inset{margin-left:32pxvar(--mc-list-size-icon-width,24px)8px;width:100%-32pxvar(--mc-list-size-icon-width,24px)8px}[dir=rtl] .mc-list-item .mc-list-icon~.mc-divider_inset,[dir=rtl] .mc-list-option .mc-list-icon~.mc-divider_inset{margin-left:auto;margin-right:32pxvar(--mc-list-size-icon-width,24px)8px}.mc-list-item .mc-divider,.mc-list-option .mc-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mc-list-item .mc-divider,[dir=rtl] .mc-list-option .mc-divider{margin-left:auto;margin-right:0}.mc-list-item .mc-divider.mc-divider_inset,.mc-list-option .mc-divider.mc-divider_inset{position:absolute}.mc-list-item .mc-pseudo-checkbox,.mc-list-option .mc-pseudo-checkbox{margin-right:8px}.mc-list-option:not([disabled]):not(.mc-disabled){cursor:pointer}";
      var _c3 = [[["", "mc-list-icon", ""], ["", "mcListIcon", ""]], [["", "mc-line", ""], ["", "mcLine", ""]], "*"];
      var _c4 = ["[mc-list-icon], [mcListIcon]", "[mc-line], [mcLine]", "*"];

      var McListOption = /*#__PURE__*/function () {
        function McListOption(elementRef, changeDetector, ngZone, listSelection, group) {
          _classCallCheck(this, McListOption);

          this.elementRef = elementRef;
          this.changeDetector = changeDetector;
          this.ngZone = ngZone;
          this.listSelection = listSelection;
          this.group = group;
          this.hasFocus = false;
          this.onFocus = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.onBlur = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /**
           * This is set to true after the first OnChanges cycle so we don't clear the value of `selected`
           * in the first cycle.
           */

          this.inputsInitialized = false;
          this._disabled = false;
          this._selected = false;
        }

        _createClass(McListOption, [{
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(newValue) {
            if (this.selected && newValue !== this.value && this.inputsInitialized) {
              this.selected = false;
            }

            this._value = newValue;
          }
        }, {
          key: "disabled",
          get: function get() {
            var listSelectionDisabled = this.listSelection && this.listSelection.disabled;
            var groupDisabled = this.group && this.group.disabled;
            return listSelectionDisabled || groupDisabled || this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;
              this.changeDetector.markForCheck();
            }
          }
        }, {
          key: "showCheckbox",
          get: function get() {
            return this._showCheckbox !== undefined ? this._showCheckbox : this.listSelection.showCheckbox;
          },
          set: function set(value) {
            this._showCheckbox = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "selected",
          get: function get() {
            return this.listSelection.selectionModel && this.listSelection.selectionModel.isSelected(this) || false;
          },
          set: function set(value) {
            var isSelected = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(value);

            if (isSelected !== this._selected) {
              this.setSelected(isSelected);
              this.listSelection.reportValueChange();
            }
          }
        }, {
          key: "tabIndex",
          get: function get() {
            return this.disabled ? null : -1;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var list = this.listSelection;

            if (list._value && list._value.some(function (value) {
              return list.compareWith(value, _this._value);
            })) {
              this.setSelected(true);
            }

            var wasSelected = this._selected; // List options that are selected at initialization can't be reported properly to the form
            // control. This is because it takes some time until the selection-list knows about all
            // available options. Also it can happen that the ControlValueAccessor has an initial value
            // that should be used instead. Deferring the value change report to the next tick ensures
            // that the form control value is not being overwritten.

            Promise.resolve().then(function () {
              if (_this._selected || wasSelected) {
                _this.selected = true;

                _this.changeDetector.markForCheck();
              }
            });
            this.inputsInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this2 = this;

            if (this.selected) {
              // We have to delay this until the next tick in order
              // to avoid changed after checked errors.
              Promise.resolve().then(function () {
                return _this2.selected = false;
              });
            }

            this.listSelection.removeOptionFromList(this);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.selected = !this.selected;
          }
        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.text ? this.text.nativeElement.textContent : '';
          }
        }, {
          key: "setSelected",
          value: function setSelected(selected) {
            if (this._selected === selected || !this.listSelection.selectionModel) {
              return;
            }

            this._selected = selected;

            if (selected) {
              this.listSelection.selectionModel.select(this);
            } else {
              this.listSelection.selectionModel.deselect(this);
            }

            this.changeDetector.markForCheck();
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.elementRef.nativeElement.getClientRects()[0].height;
          }
        }, {
          key: "handleClick",
          value: function handleClick($event) {
            if (this.disabled) {
              return;
            }

            this.listSelection.setSelectedOptionsByClick(this, Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])($event, 'shiftKey'), Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])($event, 'ctrlKey'));
          }
        }, {
          key: "focus",
          value: function focus() {
            var _this3 = this;

            if (!this.hasFocus) {
              this.elementRef.nativeElement.focus();
              this.onFocus.next({
                option: this
              });
              Promise.resolve().then(function () {
                _this3.hasFocus = true;

                _this3.changeDetector.markForCheck();
              });
            }
          }
        }, {
          key: "blur",
          value: function blur() {
            var _this4 = this;

            // When animations are enabled, Angular may end up removing the option from the DOM a little
            // earlier than usual, causing it to be blurred and throwing off the logic in the list
            // that moves focus not the next item. To work around the issue, we defer marking the option
            // as not focused until the next time the zone stabilizes.
            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1)).subscribe(function () {
              _this4.ngZone.run(function () {
                _this4.hasFocus = false;

                _this4.onBlur.next({
                  option: _this4
                });
              });
            });
          }
        }, {
          key: "getHostElement",
          value: function getHostElement() {
            return this.elementRef.nativeElement;
          }
        }]);

        return McListOption;
      }();

      McListOption.ɵfac = function McListOption_Factory(t) {
        return new (t || McListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return McListSelection;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptgroup"], 8));
      };

      McListOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McListOption,
        selectors: [["mc-list-option"]],
        contentQueries: function McListOption_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLine"], 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lines = _t);
          }
        },
        viewQuery: function McListOption_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.text = _t.first);
          }
        },
        hostAttrs: [1, "mc-list-option", "mc-no-select"],
        hostVars: 8,
        hostBindings: function McListOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function McListOption_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function McListOption_blur_HostBindingHandler() {
              return ctx.blur();
            })("click", function McListOption_click_HostBindingHandler($event) {
              return ctx.handleClick($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-selected", ctx.selected)("mc-focused", ctx.hasFocus)("mc-disabled", ctx.disabled);
          }
        },
        inputs: {
          value: "value",
          selected: "selected",
          disabled: "disabled",
          showCheckbox: "showCheckbox",
          checkboxPosition: "checkboxPosition"
        },
        exportAs: ["mcListOption"],
        ngContentSelectors: _c1,
        decls: 5,
        vars: 1,
        consts: [[1, "mc-list-item-content"], [3, "state", "disabled", 4, "ngIf"], [1, "mc-list-text"], ["text", ""], [3, "state", "disabled"]],
        template: function McListOption_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McListOption_mc_pseudo_checkbox_1_Template, 1, 2, "mc-pseudo-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showCheckbox);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McPseudoCheckbox"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McListOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: McListSelection,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
              return McListSelection;
            })]
          }]
        }, {
          type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptgroup"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }];
      };

      McListOption.propDecorators = {
        lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLine"]]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['text', {
            "static": false
          }]
        }],
        checkboxPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        showCheckbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McListOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            exportAs: 'mcListOption',
            selector: 'mc-list-option',
            host: {
              "class": 'mc-list-option mc-no-select',
              '[class.mc-selected]': 'selected',
              '[class.mc-focused]': 'hasFocus',
              '[class.mc-disabled]': 'disabled',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null',
              '(focus)': 'focus()',
              '(blur)': 'blur()',
              '(click)': 'handleClick($event)'
            },
            template: "<div class=\"mc-list-item-content\">\n    <mc-pseudo-checkbox\n        *ngIf=\"showCheckbox\"\n        [state]=\"selected ? 'checked' : 'unchecked'\"\n        [disabled]=\"disabled\">\n    </mc-pseudo-checkbox>\n\n    <div class=\"mc-list-text\" #text>\n        <ng-content></ng-content>\n    </div>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: McListSelection,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
                return McListSelection;
              })]
            }]
          }, {
            type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptgroup"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }];
        }, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          showCheckbox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLine"]]
          }],
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['text', {
              "static": false
            }]
          }],
          checkboxPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var MC_SELECTION_LIST_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return McListSelection;
        }),
        multi: true
      };

      var McListSelectionChange = function McListSelectionChange(source, option) {
        _classCallCheck(this, McListSelectionChange);

        this.source = source;
        this.option = option;
      };

      var McListSelectionBase = function McListSelectionBase(elementRef) {
        _classCallCheck(this, McListSelectionBase);

        this.elementRef = elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McListSelectionMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(McListSelectionBase));

      var McListSelection = /*#__PURE__*/function (_McListSelectionMixin) {
        _inherits(McListSelection, _McListSelectionMixin);

        var _super = _createSuper(McListSelection);

        function McListSelection(elementRef, changeDetectorRef, multiple) {
          var _this5;

          _classCallCheck(this, McListSelection);

          _this5 = _super.call(this, elementRef);
          _this5.changeDetectorRef = changeDetectorRef;
          _this5._autoSelect = true;
          _this5._noUnselectLast = true;
          _this5.horizontal = false;
          _this5._tabIndex = 0;
          _this5.userTabIndex = null; // Emits a change event whenever the selected state of an option changes.

          _this5.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Emits whenever the component is destroyed. */

          _this5.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /**
           * Function used for comparing an option against the selected value when determining which
           * options should appear as selected. The first argument is the value of an options. The second
           * one is a value from the selected value. A boolean must be returned.
           */

          _this5.compareWith = function (a1, a2) {
            return a1 === a2;
          }; // View to model callback that should be called if the list or its options lost focus.
          // tslint:disable-next-line:no-empty


          _this5.onTouched = function () {}; // View to model callback that should be called whenever the selected options change.


          _this5.onChange = function (_) {};

          if (multiple === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"].CHECKBOX || multiple === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"].KEYBOARD) {
            _this5.multipleMode = multiple;
          } else if (multiple !== null) {
            _this5.multipleMode = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"].CHECKBOX;
          }

          if (_this5.multipleMode === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"].CHECKBOX) {
            _this5.autoSelect = false;
            _this5.noUnselectLast = false;
          }

          _this5.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](_this5.multiple);
          return _this5;
        }

        _createClass(McListSelection, [{
          key: "autoSelect",
          get: function get() {
            return this._autoSelect;
          },
          set: function set(value) {
            this._autoSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "noUnselectLast",
          get: function get() {
            return this._noUnselectLast;
          },
          set: function set(value) {
            this._noUnselectLast = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "multiple",
          get: function get() {
            return !!this.multipleMode;
          }
        }, {
          key: "tabIndex",
          get: function get() {
            return this.disabled ? -1 : this._tabIndex;
          },
          set: function set(value) {
            this.userTabIndex = value;
            this._tabIndex = value;
          }
        }, {
          key: "showCheckbox",
          get: function get() {
            return this.multipleMode === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"].CHECKBOX;
          }
        }, {
          key: "optionFocusChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"]).apply(void 0, _toConsumableArray(this.options.map(function (option) {
              return option.onFocus;
            })));
          }
        }, {
          key: "optionBlurChanges",
          get: function get() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"]).apply(void 0, _toConsumableArray(this.options.map(function (option) {
              return option.onBlur;
            })));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this6 = this;

            this.horizontal = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["toBoolean"])(this.horizontal);
            this.keyManager = new _ptsecurity_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusKeyManager"](this.options).withTypeAhead().withVerticalOrientation(!this.horizontal).withHorizontalOrientation(this.horizontal ? 'ltr' : null);
            this.keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroyed)).subscribe(function () {
              _this6._tabIndex = -1;
              setTimeout(function () {
                _this6._tabIndex = _this6.userTabIndex || 0;

                _this6.changeDetectorRef.markForCheck();
              });
            });

            if (this._value) {
              this.setOptionsFromValues(this._value);
            }

            this.selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroyed)).subscribe(function (event) {
              var _iterator = _createForOfIteratorHelper(event.added),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  item.selected = true;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var _iterator2 = _createForOfIteratorHelper(event.removed),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _item = _step2.value;
                  _item.selected = false;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            });
            this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroyed)).subscribe(function () {
              _this6.resetOptions(); // Check to see if we need to update our tab index


              _this6.updateTabIndex();
            });
            this.updateScrollSize();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.next();
            this.destroyed.complete();
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.options.length === 0) {
              return;
            }

            this.keyManager.setFirstItemActive();
          }
        }, {
          key: "blur",
          value: function blur() {
            if (!this.hasFocusedOption()) {
              this.keyManager.setActiveItem(-1);
            }

            this.onTouched();
            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "selectAll",
          value: function selectAll() {
            this.options.forEach(function (option) {
              return option.setSelected(true);
            });
            this.reportValueChange();
          }
        }, {
          key: "deselectAll",
          value: function deselectAll() {
            this.options.forEach(function (option) {
              return option.setSelected(false);
            });
            this.reportValueChange();
          }
        }, {
          key: "updateScrollSize",
          value: function updateScrollSize() {
            if (this.horizontal || !this.options.first) {
              return;
            }

            this.keyManager.withScrollSize(Math.floor(this.getHeight() / this.options.first.getHeight()));
          }
        }, {
          key: "setSelectedOptionsByClick",
          value: function setSelectedOptionsByClick(option, shiftKey, ctrlKey) {
            if (shiftKey && this.multiple) {
              this.setSelectedOptions(option);
            } else if (ctrlKey) {
              if (!this.canDeselectLast(option)) {
                return;
              }

              this.selectionModel.toggle(option);
            } else if (this.autoSelect) {
              this.selectionModel.clear();
              this.selectionModel.toggle(option);
            } else {
              this.selectionModel.toggle(option);
            }

            this.emitChangeEvent(option);
            this.reportValueChange();
          }
        }, {
          key: "setSelectedOptionsByKey",
          value: function setSelectedOptionsByKey(option, shiftKey, ctrlKey) {
            if (shiftKey && this.multiple) {
              this.setSelectedOptions(option);
            } else if (ctrlKey) {
              if (!this.canDeselectLast(option)) {
                return;
              }
            } else {
              if (this.multipleMode === _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"].KEYBOARD || !this.multiple) {
                this.options.forEach(function (item) {
                  return item.setSelected(false);
                });
                option.setSelected(true);
              }
            }

            this.emitChangeEvent(option);
            this.reportValueChange();
          }
        }, {
          key: "setSelectedOptions",
          value: function setSelectedOptions(option) {
            var _this7 = this;

            var selectedOptionState = option.selected;
            var fromIndex = this.keyManager.previousActiveItemIndex;
            var toIndex = this.keyManager.previousActiveItemIndex = this.keyManager.activeItemIndex;

            if (toIndex === fromIndex) {
              return;
            }

            if (fromIndex > toIndex) {
              var _ref = [toIndex, fromIndex];
              fromIndex = _ref[0];
              toIndex = _ref[1];
            }

            this.options.toArray().slice(fromIndex, toIndex + 1).filter(function (item) {
              return !item.disabled;
            }).forEach(function (renderedOption) {
              var isLastRenderedOption = renderedOption === _this7.keyManager.activeItem;

              if (isLastRenderedOption && renderedOption.selected && _this7.noUnselectLast) {
                return;
              }

              renderedOption.setSelected(!selectedOptionState);
            });
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(values) {
            this._value = values;

            if (this.options) {
              this.setOptionsFromValues(values || []);
            }
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          } // Implemented as a part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            if (this.options) {
              this.options.forEach(function (option) {
                return option.disabled = isDisabled;
              });
            }
          }
        }, {
          key: "getSelectedOptionValues",
          value: function getSelectedOptionValues() {
            return this.options.filter(function (option) {
              return option.selected;
            }).map(function (option) {
              return option.value;
            });
          } // Toggles the selected state of the currently focused option.

        }, {
          key: "toggleFocusedOption",
          value: function toggleFocusedOption() {
            var focusedIndex = this.keyManager.activeItemIndex;

            if (focusedIndex != null && this.isValidIndex(focusedIndex)) {
              var focusedOption = this.options.toArray()[focusedIndex];

              if (focusedOption && this.canDeselectLast(focusedOption)) {
                focusedOption.toggle(); // Emit a change event because the focused option changed its state through user interaction.

                this.emitChangeEvent(focusedOption);
              }
            }
          }
        }, {
          key: "canDeselectLast",
          value: function canDeselectLast(listOption) {
            return !(this.noUnselectLast && this.selectionModel.selected.length === 1 && listOption.selected);
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.elementRef.nativeElement.getClientRects()[0].height;
          } // Removes an option from the selection list and updates the active item.

        }, {
          key: "removeOptionFromList",
          value: function removeOptionFromList(option) {
            if (option.hasFocus) {
              var optionIndex = this.getOptionIndex(option); // Check whether the option is the last item

              if (optionIndex > 0) {
                this.keyManager.setPreviousItemActive();
              } else if (optionIndex === 0 && this.options.length > 1) {
                this.keyManager.setNextItemActive();
              }
            }
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            // tslint:disable-next-line: deprecation
            var keyCode = event.keyCode;

            switch (keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"]:
                this.toggleFocusedOption();
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["TAB"]:
                this.keyManager.tabOut.next();
                return;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["DOWN_ARROW"]:
                this.keyManager.setNextItemActive();
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["UP_ARROW"]:
                this.keyManager.setPreviousItemActive();
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["HOME"]:
                this.keyManager.setFirstItemActive();
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["END"]:
                this.keyManager.setLastItemActive();
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["PAGE_UP"]:
                this.keyManager.setPreviousPageItemActive();
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["PAGE_DOWN"]:
                this.keyManager.setNextPageItemActive();
                break;

              default:
                return;
            }

            event.preventDefault();
            this.setSelectedOptionsByKey(this.keyManager.activeItem, Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'shiftKey'), Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["hasModifierKey"])(event, 'ctrlKey'));
          } // Reports a value change to the ControlValueAccessor

        }, {
          key: "reportValueChange",
          value: function reportValueChange() {
            if (this.options) {
              var value = this.getSelectedOptionValues();
              this.onChange(value);
              this._value = value;
            }
          } // Emits a change event if the selected state of an option changed.

        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent(option) {
            this.selectionChange.emit(new McListSelectionChange(this, option));
          }
        }, {
          key: "updateTabIndex",
          value: function updateTabIndex() {
            this._tabIndex = this.userTabIndex || (this.options.length === 0 ? -1 : 0);
          }
        }, {
          key: "resetOptions",
          value: function resetOptions() {
            this.dropSubscriptions();
            this.listenToOptionsFocus();
          }
        }, {
          key: "dropSubscriptions",
          value: function dropSubscriptions() {
            if (this.optionFocusSubscription) {
              this.optionFocusSubscription.unsubscribe();
              this.optionFocusSubscription = null;
            }

            if (this.optionBlurSubscription) {
              this.optionBlurSubscription.unsubscribe();
              this.optionBlurSubscription = null;
            }
          }
        }, {
          key: "listenToOptionsFocus",
          value: function listenToOptionsFocus() {
            var _this8 = this;

            this.optionFocusSubscription = this.optionFocusChanges.subscribe(function (event) {
              var index = _this8.options.toArray().indexOf(event.option);

              if (_this8.isValidIndex(index)) {
                _this8.keyManager.updateActiveItem(index);
              }
            });
            this.optionBlurSubscription = this.optionBlurChanges.subscribe(function () {
              return _this8.blur();
            });
          }
          /** Checks whether any of the options is focused. */

        }, {
          key: "hasFocusedOption",
          value: function hasFocusedOption() {
            return this.options.some(function (option) {
              return option.hasFocus;
            });
          } // Returns the option with the specified value.

        }, {
          key: "getOptionByValue",
          value: function getOptionByValue(value) {
            return this.options.find(function (option) {
              return option.value === value;
            });
          } // Sets the selected options based on the specified values.

        }, {
          key: "setOptionsFromValues",
          value: function setOptionsFromValues(values) {
            var _this9 = this;

            this.options.forEach(function (option) {
              return option.setSelected(false);
            });
            values.map(function (value) {
              return _this9.getOptionByValue(value);
            }).filter(Boolean).forEach(function (option) {
              return option.setSelected(true);
            });
          }
          /**
           * Utility to ensure all indexes are valid.
           * @param index The index to be checked.
           * @returns True if the index is valid for our list of options.
           */

        }, {
          key: "isValidIndex",
          value: function isValidIndex(index) {
            return index >= 0 && index < this.options.length;
          } // Returns the index of the specified list option.

        }, {
          key: "getOptionIndex",
          value: function getOptionIndex(option) {
            return this.options.toArray().indexOf(option);
          }
        }]);

        return McListSelection;
      }(McListSelectionMixinBase);

      McListSelection.ɵfac = function McListSelection_Factory(t) {
        return new (t || McListSelection)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('multiple'));
      };

      McListSelection.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McListSelection,
        selectors: [["mc-list-selection"]],
        contentQueries: function McListSelection_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, McListOption, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
          }
        },
        hostAttrs: [1, "mc-list-selection"],
        hostVars: 2,
        hostBindings: function McListSelection_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function McListSelection_focus_HostBindingHandler() {
              return ctx.focus();
            })("blur", function McListSelection_blur_HostBindingHandler() {
              return ctx.blur();
            })("keydown", function McListSelection_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            })("resize", function McListSelection_resize_HostBindingHandler() {
              return ctx.updateScrollSize();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
          }
        },
        inputs: {
          disabled: "disabled",
          horizontal: "horizontal",
          compareWith: "compareWith",
          autoSelect: "autoSelect",
          noUnselectLast: "noUnselectLast",
          tabIndex: "tabIndex"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["mcListSelection"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MC_SELECTION_LIST_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function McListSelection_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
          }
        },
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McListSelection.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
            args: ['multiple']
          }]
        }];
      };

      McListSelection.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [McListOption, {
            descendants: true
          }]
        }],
        autoSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        noUnselectLast: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McListSelection, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            exportAs: 'mcListSelection',
            selector: 'mc-list-selection',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            inputs: ['disabled'],
            host: {
              "class": 'mc-list-selection',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null',
              '(focus)': 'focus()',
              '(blur)': 'blur()',
              '(keydown)': 'onKeyDown($event)',
              '(window:resize)': 'updateScrollSize()'
            },
            providers: [MC_SELECTION_LIST_VALUE_ACCESSOR],
            preserveWhitespaces: false,
            styles: [".mc-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mc-divider{display:block;margin:0}.mc-divider.mc-divider_horizontal{border-top-width:var(--mc-divider-size-width,1px);border-top-style:solid}.mc-divider.mc-divider_vertical{height:100%;border-right-width:var(--mc-divider-size-width,1px);border-right-style:solid}.mc-divider.mc-divider_inset{margin-left:var(--mc-divider-size-inset-margin,80px)}[dir=rtl] .mc-divider.mc-divider_inset{margin-left:auto;margin-right:var(--mc-divider-size-inset-margin,80px)}.mc-list,.mc-list-selection{display:block;outline:none}.mc-list-item,.mc-list-option{display:block;height:var(--mc-list-size-item-height,28px);border:2px solid transparent}.mc-list-item .mc-list-item-content,.mc-list-option .mc-list-item-content{position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;height:100%;padding:0 var(--mc-list-size-horizontal-padding,16px)}.mc-list-item.mc-2-line,.mc-list-option.mc-2-line{height:var(--mc-list-size-two-line-height,72px)}.mc-list-item.mc-3-line,.mc-list-option.mc-3-line{height:var(--mc-list-size-three-line-height,88px)}.mc-list-item.mc-multi-line,.mc-list-option.mc-multi-line{height:auto}.mc-list-item.mc-multi-line .mc-list-item-content,.mc-list-option.mc-multi-line .mc-list-item-content{padding-top:var(--mc-list-size-multi-line-padding,16px);padding-bottom:var(--mc-list-size-multi-line-padding,16px)}.mc-list-item .mc-list-text,.mc-list-option .mc-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mc-list-item .mc-list-text>*,.mc-list-option .mc-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mc-list-item .mc-list-text:empty,.mc-list-option .mc-list-text:empty{display:none}.mc-list-item .mc-list-item-content .mc-list-text:not(:nth-child(2)),.mc-list-option .mc-list-item-content .mc-list-text:not(:nth-child(2)){padding-right:0}[dir=rtl] .mc-list-item .mc-list-item-content .mc-list-text:not(:nth-child(2)),[dir=rtl] .mc-list-option .mc-list-item-content .mc-list-text:not(:nth-child(2)){padding-left:0}.mc-list-item .mc-list-icon,.mc-list-option .mc-list-icon{box-sizing:content-box;flex-shrink:0;width:var(--mc-list-size-icon-width,24px);height:var(--mc-list-size-icon-width,24px);border-radius:50%;padding:var(--mc-list-size-icon-padding,4px);font-size:var(--mc-list-size-icon-width,24px)}.mc-list-item .mc-list-icon~.mc-divider_inset,.mc-list-option .mc-list-icon~.mc-divider_inset{margin-left:32pxvar(--mc-list-size-icon-width,24px)8px;width:100%-32pxvar(--mc-list-size-icon-width,24px)8px}[dir=rtl] .mc-list-item .mc-list-icon~.mc-divider_inset,[dir=rtl] .mc-list-option .mc-list-icon~.mc-divider_inset{margin-left:auto;margin-right:32pxvar(--mc-list-size-icon-width,24px)8px}.mc-list-item .mc-divider,.mc-list-option .mc-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mc-list-item .mc-divider,[dir=rtl] .mc-list-option .mc-divider{margin-left:auto;margin-right:0}.mc-list-item .mc-divider.mc-divider_inset,.mc-list-option .mc-divider.mc-divider_inset{position:absolute}.mc-list-item .mc-pseudo-checkbox,.mc-list-option .mc-pseudo-checkbox{margin-right:8px}.mc-list-option:not([disabled]):not(.mc-disabled){cursor:pointer}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["MultipleMode"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
              args: ['multiple']
            }]
          }];
        }, {
          horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          noUnselectLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [McListOption, {
              descendants: true
            }]
          }]
        });
      })(); // todo пока не делаем, перенесено из материала, но у нас в доках таких простых списков нет.


      var McList = function McList() {
        _classCallCheck(this, McList);
      };

      McList.ɵfac = function McList_Factory(t) {
        return new (t || McList)();
      };

      McList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McList,
        selectors: [["mc-list"]],
        hostAttrs: [1, "mc-list"],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function McList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
          }
        },
        styles: [_c2],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McList, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mc-list',
            host: {
              "class": 'mc-list'
            },
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            styles: [".mc-no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mc-divider{display:block;margin:0}.mc-divider.mc-divider_horizontal{border-top-width:var(--mc-divider-size-width,1px);border-top-style:solid}.mc-divider.mc-divider_vertical{height:100%;border-right-width:var(--mc-divider-size-width,1px);border-right-style:solid}.mc-divider.mc-divider_inset{margin-left:var(--mc-divider-size-inset-margin,80px)}[dir=rtl] .mc-divider.mc-divider_inset{margin-left:auto;margin-right:var(--mc-divider-size-inset-margin,80px)}.mc-list,.mc-list-selection{display:block;outline:none}.mc-list-item,.mc-list-option{display:block;height:var(--mc-list-size-item-height,28px);border:2px solid transparent}.mc-list-item .mc-list-item-content,.mc-list-option .mc-list-item-content{position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;height:100%;padding:0 var(--mc-list-size-horizontal-padding,16px)}.mc-list-item.mc-2-line,.mc-list-option.mc-2-line{height:var(--mc-list-size-two-line-height,72px)}.mc-list-item.mc-3-line,.mc-list-option.mc-3-line{height:var(--mc-list-size-three-line-height,88px)}.mc-list-item.mc-multi-line,.mc-list-option.mc-multi-line{height:auto}.mc-list-item.mc-multi-line .mc-list-item-content,.mc-list-option.mc-multi-line .mc-list-item-content{padding-top:var(--mc-list-size-multi-line-padding,16px);padding-bottom:var(--mc-list-size-multi-line-padding,16px)}.mc-list-item .mc-list-text,.mc-list-option .mc-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mc-list-item .mc-list-text>*,.mc-list-option .mc-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mc-list-item .mc-list-text:empty,.mc-list-option .mc-list-text:empty{display:none}.mc-list-item .mc-list-item-content .mc-list-text:not(:nth-child(2)),.mc-list-option .mc-list-item-content .mc-list-text:not(:nth-child(2)){padding-right:0}[dir=rtl] .mc-list-item .mc-list-item-content .mc-list-text:not(:nth-child(2)),[dir=rtl] .mc-list-option .mc-list-item-content .mc-list-text:not(:nth-child(2)){padding-left:0}.mc-list-item .mc-list-icon,.mc-list-option .mc-list-icon{box-sizing:content-box;flex-shrink:0;width:var(--mc-list-size-icon-width,24px);height:var(--mc-list-size-icon-width,24px);border-radius:50%;padding:var(--mc-list-size-icon-padding,4px);font-size:var(--mc-list-size-icon-width,24px)}.mc-list-item .mc-list-icon~.mc-divider_inset,.mc-list-option .mc-list-icon~.mc-divider_inset{margin-left:32pxvar(--mc-list-size-icon-width,24px)8px;width:100%-32pxvar(--mc-list-size-icon-width,24px)8px}[dir=rtl] .mc-list-item .mc-list-icon~.mc-divider_inset,[dir=rtl] .mc-list-option .mc-list-icon~.mc-divider_inset{margin-left:auto;margin-right:32pxvar(--mc-list-size-icon-width,24px)8px}.mc-list-item .mc-divider,.mc-list-option .mc-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mc-list-item .mc-divider,[dir=rtl] .mc-list-option .mc-divider{margin-left:auto;margin-right:0}.mc-list-item .mc-divider.mc-divider_inset,.mc-list-option .mc-divider.mc-divider_inset{position:absolute}.mc-list-item .mc-pseudo-checkbox,.mc-list-option .mc-pseudo-checkbox{margin-right:8px}.mc-list-option:not([disabled]):not(.mc-disabled){cursor:pointer}"]
          }]
        }], null, null);
      })();

      var McListItem = /*#__PURE__*/function () {
        function McListItem(elementRef) {
          _classCallCheck(this, McListItem);

          this.elementRef = elementRef;
        }

        _createClass(McListItem, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            // tslint:disable-next-line:no-unused-expression
            new _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLineSetter"](this.lines, this.elementRef);
          }
        }, {
          key: "handleFocus",
          value: function handleFocus() {
            this.elementRef.nativeElement.classList.add('mc-focused');
          }
        }, {
          key: "handleBlur",
          value: function handleBlur() {
            this.elementRef.nativeElement.classList.remove('mc-focused');
          }
        }, {
          key: "getHostElement",
          value: function getHostElement() {
            return this.elementRef.nativeElement;
          }
        }]);

        return McListItem;
      }();

      McListItem.ɵfac = function McListItem_Factory(t) {
        return new (t || McListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]));
      };

      McListItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McListItem,
        selectors: [["mc-list-item"], ["a", "mc-list-item", ""]],
        contentQueries: function McListItem_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLine"], 0);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lines = _t);
          }
        },
        hostAttrs: [1, "mc-list-item"],
        hostBindings: function McListItem_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function McListItem_focus_HostBindingHandler() {
              return ctx.handleFocus();
            })("blur", function McListItem_blur_HostBindingHandler() {
              return ctx.handleBlur();
            });
          }
        },
        ngContentSelectors: _c4,
        decls: 5,
        vars: 0,
        consts: [[1, "mc-list-item-content"], [1, "mc-list-text"]],
        template: function McListItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McListItem.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }];
      };

      McListItem.propDecorators = {
        lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
          args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLine"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McListItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mc-list-item, a[mc-list-item]',
            host: {
              "class": 'mc-list-item',
              '(focus)': 'handleFocus()',
              '(blur)': 'handleBlur()'
            },
            template: "<div class=\"mc-list-item-content\">\n    <ng-content select=\"[mc-list-icon], [mcListIcon]\"></ng-content>\n\n    <div class=\"mc-list-text\">\n        <ng-content select=\"[mc-line], [mcLine]\"></ng-content>\n    </div>\n\n    <ng-content></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            preserveWhitespaces: false,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }];
        }, {
          lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLine"]]
          }]
        });
      })();

      var McListModule = function McListModule() {
        _classCallCheck(this, McListModule);
      };

      McListModule.ɵfac = function McListModule_Factory(t) {
        return new (t || McListModule)();
      };

      McListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: McListModule
      });
      McListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McPseudoCheckboxModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLineModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptionModule"]], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptionModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McListModule, {
          declarations: function declarations() {
            return [McList, McListSelection, McListItem, McListOption];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McPseudoCheckboxModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLineModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptionModule"]];
          },
          exports: function exports() {
            return [McList, McListSelection, McListItem, McListOption, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptionModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McListModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McPseudoCheckboxModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McLineModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptionModule"]],
            exports: [McList, McListSelection, McListItem, McListOption, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McOptionModule"]],
            declarations: [McList, McListSelection, McListItem, McListOption]
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
//# sourceMappingURL=10-es5.js.map