(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23], {
    /***/
    "7Lk/":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-checkbox.js ***!
      \*********************************************************************************************************/

    /*! exports provided: CheckboxExamplesModule, CheckboxIndeterminateExample, CheckboxOverviewExample */

    /***/
    function Lk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxExamplesModule", function () {
        return CheckboxExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxIndeterminateExample", function () {
        return CheckboxIndeterminateExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxOverviewExample", function () {
        return CheckboxOverviewExample;
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


      var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/checkbox */
      "UYLH");

      function CheckboxIndeterminateExample_p_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-checkbox", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckboxIndeterminateExample_p_3_Template_mc_checkbox_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.updateCheckboxes(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var fruit_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", fruit_r1.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fruit_r1.name);
        }
      }
      /**
       * @title Indeterminate checkbox
       */


      var CheckboxIndeterminateExample = /*#__PURE__*/function () {
        function CheckboxIndeterminateExample(ref) {
          _classCallCheck(this, CheckboxIndeterminateExample);

          this.ref = ref;
          this.parentIndeterminate = true;
          this.parentChecked = true;
          this.fruits = [{
            name: 'Apples',
            checked: true
          }, {
            name: 'Bananas',
            checked: false
          }, {
            name: 'Grapes',
            checked: false
          }];
        }

        _createClass(CheckboxIndeterminateExample, [{
          key: "updateCheckboxes",
          value: function updateCheckboxes(index) {
            this.toggleFruitChecked(index);
            this.updateIndeterminate();
            this.ref.detectChanges();
          }
        }, {
          key: "toggleFruitChecked",
          value: function toggleFruitChecked(index) {
            this.fruits[index].checked = !this.fruits[index].checked;
          }
        }, {
          key: "toggleChecked",
          value: function toggleChecked() {
            this.parentChecked = !this.parentChecked;

            var _iterator = _createForOfIteratorHelper(this.fruits),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var fruit = _step.value;
                fruit.checked = this.parentChecked;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.parentIndeterminate = false;
            this.ref.detectChanges();
          }
        }, {
          key: "updateIndeterminate",
          value: function updateIndeterminate() {
            var checked = 0;
            var unchecked = 0;
            var length = this.fruits.length;
            this.fruits.forEach(function (fruit) {
              fruit.checked ? checked++ : unchecked++;
            });
            this.parentIndeterminate = checked !== length && unchecked !== length;
            this.parentChecked = this.parentIndeterminate || length === checked;
          }
        }]);

        return CheckboxIndeterminateExample;
      }();

      CheckboxIndeterminateExample.ɵfac = function CheckboxIndeterminateExample_Factory(t) {
        return new (t || CheckboxIndeterminateExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
      };

      CheckboxIndeterminateExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxIndeterminateExample,
        selectors: [["checkbox-indeterminate-example"]],
        decls: 4,
        vars: 3,
        consts: [[1, "mc-body"], [3, "checked", "indeterminate", "change"], [4, "ngFor", "ngForOf"], [3, "checked", "change"]],
        template: function CheckboxIndeterminateExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-checkbox", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckboxIndeterminateExample_Template_mc_checkbox_change_1_listener() {
              return ctx.toggleChecked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " All fruits");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CheckboxIndeterminateExample_p_3_Template, 3, 2, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.parentChecked)("indeterminate", ctx.parentIndeterminate);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fruits);
          }
        },
        directives: [_ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxIndeterminateExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'checkbox-indeterminate-example',
            templateUrl: 'checkbox-indeterminate-example.html',
            styleUrls: ['checkbox-indeterminate-example.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * @title Basic checkboxes
       */


      var CheckboxOverviewExample = function CheckboxOverviewExample() {
        _classCallCheck(this, CheckboxOverviewExample);
      };

      CheckboxOverviewExample.ɵfac = function CheckboxOverviewExample_Factory(t) {
        return new (t || CheckboxOverviewExample)();
      };

      CheckboxOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: CheckboxOverviewExample,
        selectors: [["checkbox-overview-example"]],
        decls: 7,
        vars: 2,
        consts: [[1, "mc-body", "example-section"], [1, "example-margin"], [1, "example-margin", 3, "checked"]],
        template: function CheckboxOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", false);
          }
        },
        directives: [_ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckbox"]],
        styles: [".example-section[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-margin[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'checkbox-overview-example',
            templateUrl: 'checkbox-overview-example.html',
            styleUrls: ['checkbox-overview-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [CheckboxIndeterminateExample, CheckboxOverviewExample];

      var CheckboxExamplesModule = function CheckboxExamplesModule() {
        _classCallCheck(this, CheckboxExamplesModule);
      };

      CheckboxExamplesModule.ɵfac = function CheckboxExamplesModule_Factory(t) {
        return new (t || CheckboxExamplesModule)();
      };

      CheckboxExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CheckboxExamplesModule
      });
      CheckboxExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckboxExamplesModule, {
          declarations: [CheckboxIndeterminateExample, CheckboxOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          exports: [CheckboxIndeterminateExample, CheckboxOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_3__["McCheckboxModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-checkbox.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=23-es5.js.map