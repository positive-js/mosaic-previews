(function () {
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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
    /***/
    "4BZ5":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-tree-select.js ***!
      \************************************************************************************************************/

    /*! exports provided: TreeSelectExamplesModule, TreeSelectMultipleOverviewExample, TreeSelectOverviewExample */

    /***/
    function BZ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeSelectExamplesModule", function () {
        return TreeSelectExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeSelectMultipleOverviewExample", function () {
        return TreeSelectMultipleOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeSelectOverviewExample", function () {
        return TreeSelectOverviewExample;
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


      var _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/cdk/tree */
      "UiN6");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/input */
      "PryY");
      /* harmony import */


      var _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tree */
      "clBn");
      /* harmony import */


      var _ptsecurity_mosaic_tree_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tree-select */
      "pGFK");
      /* tslint:disable:no-reserved-keywords */


      function TreeSelectMultipleOverviewExample_mc_tree_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tree-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.treeControl.getViewValue(node_r3), " ");
        }
      }

      function TreeSelectMultipleOverviewExample_mc_tree_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tree-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r1.treeControl.isExpanded(node_r4) ? "" : "rotate(-90deg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.getViewValue(node_r4), " ");
        }
      }

      var FileNode$1 = function FileNode$1() {
        _classCallCheck(this, FileNode$1);
      };
      /** Flat node with expandable and level information */


      var FileFlatNode$1 = function FileFlatNode$1() {
        _classCallCheck(this, FileFlatNode$1);
      };
      /**
       * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
       * The return value is the list of `FileNode`.
       */


      function buildFileTree$1(value, level) {
        var data = [];

        for (var _i = 0, _Object$keys = Object.keys(value); _i < _Object$keys.length; _i++) {
          var k = _Object$keys[_i];
          var v = value[k];
          var node = new FileNode$1();
          node.name = "".concat(k);

          if (v === null || v === undefined) {// no action
          } else if (typeof v === 'object') {
            node.children = buildFileTree$1(v, level + 1);
          } else {
            node.type = v;
          }

          data.push(node);
        }

        return data;
      }

      var DATA_OBJECT$1 = {
        docs: 'app',
        src: {
          cdk: {
            a11ly: {
              'aria-describer': {
                'aria-describer': 'ts',
                'aria-describer.spec': 'ts',
                'aria-reference': 'ts',
                'aria-reference.spec': 'ts'
              },
              'focus-monitor': {
                'focus-monitor': 'ts',
                'focus-monitor.spec': 'ts'
              }
            }
          },
          documentation: {
            source: '',
            tools: ''
          },
          mosaic: {
            autocomplete: '',
            button: '',
            'button-toggle': '',
            index: 'ts',
            "package": 'json',
            version: 'ts'
          },
          'mosaic-dev': {
            alert: '',
            badge: ''
          },
          'mosaic-examples': '',
          'mosaic-moment-adapter': '',
          README: 'md',
          'tsconfig.build': 'json',
          wallabyTest: 'ts'
        },
        scripts: {
          deploy: {
            'cleanup-preview': 'ts',
            'publish-artifacts': 'sh',
            'publish-docs': 'sh',
            'publish-docs-preview': 'ts'
          },
          'tsconfig.deploy': 'json'
        },
        tests: ''
      };
      /**
       * @title Basic Select
       */

      var TreeSelectMultipleOverviewExample = /*#__PURE__*/function () {
        function TreeSelectMultipleOverviewExample() {
          _classCallCheck(this, TreeSelectMultipleOverviewExample);

          this.selected = '';

          this.transformer = function (node, level, parent) {
            var flatNode = new FileFlatNode$1();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
          };

          this.getLevel = function (node) {
            return node.level;
          };

          this.isExpandable = function (node) {
            return node.expandable;
          };

          this.getChildren = function (node) {
            return node.children;
          };

          this.getValue = function (node) {
            return node.name;
          };

          this.getViewValue = function (node) {
            return "".concat(node.name, " view");
          };

          this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
          this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
          this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.dataSource.data = buildFileTree$1(DATA_OBJECT$1, 0);
        }

        _createClass(TreeSelectMultipleOverviewExample, [{
          key: "hasChild",
          value: function hasChild(_, nodeData) {
            return nodeData.expandable;
          }
        }]);

        return TreeSelectMultipleOverviewExample;
      }();

      TreeSelectMultipleOverviewExample.ɵfac = function TreeSelectMultipleOverviewExample_Factory(t) {
        return new (t || TreeSelectMultipleOverviewExample)();
      };

      TreeSelectMultipleOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TreeSelectMultipleOverviewExample,
        selectors: [["tree-select-multiple-overview-example"]],
        decls: 7,
        vars: 5,
        consts: [[3, "multiple", "ngModel", "ngModelChange"], [3, "dataSource", "treeControl"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcSelectCleaner", ""], ["mcTreeNodePadding", ""], ["mc-icon", "mc-angle-down-S_16", "mcTreeNodeToggle", ""]],
        template: function TreeSelectMultipleOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tree-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TreeSelectMultipleOverviewExample_Template_mc_tree_select_ngModelChange_1_listener($event) {
              return ctx.selected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-tree-selection", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TreeSelectMultipleOverviewExample_mc_tree_option_3_Template, 2, 1, "mc-tree-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TreeSelectMultipleOverviewExample_mc_tree_option_4_Template, 3, 3, "mc-tree-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mc-cleaner", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("multiple", true)("ngModel", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_tree_select__WEBPACK_IMPORTED_MODULE_8__["McTreeSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McCleaner"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleDirective"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeSelectMultipleOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tree-select-multiple-overview-example',
            templateUrl: 'tree-select-multiple-overview-example.html',
            styleUrls: ['tree-select-multiple-overview-example.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /* tslint:disable:no-reserved-keywords */


      function TreeSelectOverviewExample_mc_tree_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tree-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.treeControl.getViewValue(node_r3), " ");
        }
      }

      function TreeSelectOverviewExample_mc_tree_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tree-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("transform", ctx_r1.treeControl.isExpanded(node_r4) ? "" : "rotate(-90deg)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.treeControl.getViewValue(node_r4), " ");
        }
      }

      var FileNode = function FileNode() {
        _classCallCheck(this, FileNode);
      };
      /** Flat node with expandable and level information */


      var FileFlatNode = function FileFlatNode() {
        _classCallCheck(this, FileFlatNode);
      };
      /**
       * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
       * The return value is the list of `FileNode`.
       */


      function buildFileTree(value, level) {
        var data = [];

        for (var _i2 = 0, _Object$keys2 = Object.keys(value); _i2 < _Object$keys2.length; _i2++) {
          var k = _Object$keys2[_i2];
          var v = value[k];
          var node = new FileNode();
          node.name = "".concat(k);

          if (v === null || v === undefined) {// no action
          } else if (typeof v === 'object') {
            node.children = buildFileTree(v, level + 1);
          } else {
            node.type = v;
          }

          data.push(node);
        }

        return data;
      }

      var DATA_OBJECT = {
        docs: 'app',
        src: {
          cdk: {
            a11ly: {
              'aria-describer': {
                'aria-describer': 'ts',
                'aria-describer.spec': 'ts',
                'aria-reference': 'ts',
                'aria-reference.spec': 'ts'
              },
              'focus-monitor': {
                'focus-monitor': 'ts',
                'focus-monitor.spec': 'ts'
              }
            }
          },
          documentation: {
            source: '',
            tools: ''
          },
          mosaic: {
            autocomplete: '',
            button: '',
            'button-toggle': '',
            index: 'ts',
            "package": 'json',
            version: 'ts'
          },
          'mosaic-dev': {
            alert: '',
            badge: ''
          },
          'mosaic-examples': '',
          'mosaic-moment-adapter': '',
          README: 'md',
          'tsconfig.build': 'json',
          wallabyTest: 'ts'
        },
        scripts: {
          deploy: {
            'cleanup-preview': 'ts',
            'publish-artifacts': 'sh',
            'publish-docs': 'sh',
            'publish-docs-preview': 'ts'
          },
          'tsconfig.deploy': 'json'
        },
        tests: ''
      };
      /**
       * @title Basic Select
       */

      var TreeSelectOverviewExample = /*#__PURE__*/function () {
        function TreeSelectOverviewExample() {
          _classCallCheck(this, TreeSelectOverviewExample);

          this.selected = '';

          this.transformer = function (node, level, parent) {
            var flatNode = new FileFlatNode();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
          };

          this.getLevel = function (node) {
            return node.level;
          };

          this.isExpandable = function (node) {
            return node.expandable;
          };

          this.getChildren = function (node) {
            return node.children;
          };

          this.getValue = function (node) {
            return node.name;
          };

          this.getViewValue = function (node) {
            return "".concat(node.name, " view");
          };

          this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
          this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
          this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
          this.dataSource.data = buildFileTree(DATA_OBJECT, 0);
        }

        _createClass(TreeSelectOverviewExample, [{
          key: "hasChild",
          value: function hasChild(_, nodeData) {
            return nodeData.expandable;
          }
        }]);

        return TreeSelectOverviewExample;
      }();

      TreeSelectOverviewExample.ɵfac = function TreeSelectOverviewExample_Factory(t) {
        return new (t || TreeSelectOverviewExample)();
      };

      TreeSelectOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TreeSelectOverviewExample,
        selectors: [["tree-select-overview-example"]],
        decls: 7,
        vars: 4,
        consts: [[3, "ngModel", "ngModelChange"], [3, "dataSource", "treeControl"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcSelectCleaner", ""], ["mcTreeNodePadding", ""], ["mc-icon", "mc-angle-down-S_16", "mcTreeNodeToggle", ""]],
        template: function TreeSelectOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tree-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TreeSelectOverviewExample_Template_mc_tree_select_ngModelChange_1_listener($event) {
              return ctx.selected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-tree-selection", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TreeSelectOverviewExample_mc_tree_option_3_Template, 2, 1, "mc-tree-option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TreeSelectOverviewExample_mc_tree_option_4_Template, 3, 3, "mc-tree-option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mc-cleaner", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_tree_select__WEBPACK_IMPORTED_MODULE_8__["McTreeSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McCleaner"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleDirective"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeSelectOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'tree-select-overview-example',
            templateUrl: 'tree-select-overview-example.html',
            styleUrls: ['tree-select-overview-example.css']
          }]
        }], function () {
          return [];
        }, null);
      })();

      var EXAMPLES = [TreeSelectOverviewExample, TreeSelectMultipleOverviewExample];

      var TreeSelectExamplesModule = function TreeSelectExamplesModule() {
        _classCallCheck(this, TreeSelectExamplesModule);
      };

      TreeSelectExamplesModule.ɵfac = function TreeSelectExamplesModule_Factory(t) {
        return new (t || TreeSelectExamplesModule)();
      };

      TreeSelectExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: TreeSelectExamplesModule
      });
      TreeSelectExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"], _ptsecurity_mosaic_tree_select__WEBPACK_IMPORTED_MODULE_8__["McTreeSelectModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TreeSelectExamplesModule, {
          declarations: [TreeSelectOverviewExample, TreeSelectMultipleOverviewExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"], _ptsecurity_mosaic_tree_select__WEBPACK_IMPORTED_MODULE_8__["McTreeSelectModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"]],
          exports: [TreeSelectOverviewExample, TreeSelectMultipleOverviewExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TreeSelectExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"], _ptsecurity_mosaic_tree_select__WEBPACK_IMPORTED_MODULE_8__["McTreeSelectModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-tree-select.js.map

      /***/

    },

    /***/
    "pGFK":
    /*!****************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-tree-select.js ***!
      \****************************************************************************/

    /*! exports provided: McTreeSelect, McTreeSelectChange, McTreeSelectModule, McTreeSelectTrigger */

    /***/
    function pGFK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTreeSelect", function () {
        return McTreeSelect;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTreeSelectChange", function () {
        return McTreeSelectChange;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTreeSelectModule", function () {
        return McTreeSelectModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McTreeSelectTrigger", function () {
        return McTreeSelectTrigger;
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


      var _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/cdk/tree */
      "UiN6");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tags */
      "Chhf");
      /* harmony import */


      var _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tree */
      "clBn");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/collections */
      "0EQZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ptsecurity/cdk/keycodes */
      "SfmH");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* tslint:disable:no-empty */


      var _c0 = ["mcSelectCleaner"];
      var _c1 = ["trigger"];
      var _c2 = ["panel"];
      var _c3 = ["hiddenItemsCounter"];

      function McTreeSelect_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
        }
      }

      function McTreeSelect_span_5_div_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.triggerValue);
        }
      }

      function McTreeSelect_span_5_div_1_div_2_mc_tag_2_i_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McTreeSelect_span_5_div_1_div_2_mc_tag_2_i_2_Template_i_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);

            var option_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

            return ctx_r14.onRemoveSelectedOption(option_r12, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function McTreeSelect_span_5_div_1_div_2_mc_tag_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mc-tag", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McTreeSelect_span_5_div_1_div_2_mc_tag_2_i_2_Template, 1, 0, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r12 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-error", ctx_r10.errorState);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectable", false)("disabled", option_r12.disabled || ctx_r10.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", option_r12.viewValue, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !option_r12.disabled && !ctx_r10.disabled);
        }
      }

      function McTreeSelect_span_5_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McTreeSelect_span_5_div_1_div_2_mc_tag_2_Template, 3, 6, "mc-tag", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r9.triggerValues);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("display", ctx_r9.hiddenItems > 0 ? "block" : "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.hiddenItemsTextFormatter(ctx_r9.hiddenItemsText, ctx_r9.hiddenItems), " ");
        }
      }

      function McTreeSelect_span_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McTreeSelect_span_5_div_1_span_1_Template, 2, 1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McTreeSelect_span_5_div_1_div_2_Template, 6, 4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r6.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        }
      }

      function McTreeSelect_span_5_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
        }
      }

      function McTreeSelect_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, McTreeSelect_span_5_div_1_Template, 3, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, McTreeSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        }
      }

      function McTreeSelect_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McTreeSelect_div_6_Template_div_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r17.clearValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](1, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function McTreeSelect_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function McTreeSelect_ng_template_9_Template_div_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r21.handleKeydown($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@fadeInContent.done", function McTreeSelect_ng_template_9_Template_div_animation_fadeInContent_done_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.panelDoneAnimatingStream.next($event.toState);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](4, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mc-tree-select__panel ", ctx_r5.getPanelTheme(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r5.transformOrigin)("font-size", ctx_r5.triggerFontSize, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.panelClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fadeInContent", "showing");
        }
      }

      var _c4 = [[["mc-tree-select-trigger"]], [["mc-cleaner"]], [["mc-tree-selection"]]];
      var _c5 = ["mc-tree-select-trigger", "mc-cleaner", "mc-tree-selection"];
      var nextUniqueId = 0;
      /** Change event object that is emitted when the select value has changed. */

      var McTreeSelectChange = function McTreeSelectChange(source, value) {
        var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _classCallCheck(this, McTreeSelectChange);

        this.source = source;
        this.value = value;
        this.isUserInput = isUserInput;
      };

      var McTreeSelectTrigger = function McTreeSelectTrigger() {
        _classCallCheck(this, McTreeSelectTrigger);
      };

      McTreeSelectTrigger.ɵfac = function McTreeSelectTrigger_Factory(t) {
        return new (t || McTreeSelectTrigger)();
      };

      McTreeSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: McTreeSelectTrigger,
        selectors: [["mc-tree-select-trigger"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McTreeSelectTrigger, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
          args: [{
            selector: 'mc-tree-select-trigger'
          }]
        }], null, null);
      })();

      var McTreeSelectBase = function McTreeSelectBase(elementRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl) {
        _classCallCheck(this, McTreeSelectBase);

        this.elementRef = elementRef;
        this.defaultErrorStateMatcher = defaultErrorStateMatcher;
        this.parentForm = parentForm;
        this.parentFormGroup = parentFormGroup;
        this.ngControl = ngControl;
      }; // tslint:disable-next-line:naming-convention


      var McTreeSelectMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mixinErrorState"])(McTreeSelectBase)));

      var McTreeSelect = /*#__PURE__*/function (_McTreeSelectMixinBas) {
        _inherits(McTreeSelect, _McTreeSelectMixinBas);

        var _super = _createSuper(McTreeSelect);

        function McTreeSelect(elementRef, changeDetectorRef, viewportRuler, ngZone, renderer, defaultErrorStateMatcher, scrollStrategyFactory, rawValidators, mcValidation, dir, parentForm, parentFormGroup, parentFormField, ngControl, ngModel, formControlName) {
          var _this;

          _classCallCheck(this, McTreeSelect);

          _this = _super.call(this, elementRef, defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);
          _this.changeDetectorRef = changeDetectorRef;
          _this.viewportRuler = viewportRuler;
          _this.ngZone = ngZone;
          _this.renderer = renderer;
          _this.scrollStrategyFactory = scrollStrategyFactory;
          _this.rawValidators = rawValidators;
          _this.mcValidation = mcValidation;
          _this.dir = dir;
          _this.parentFormField = parentFormField;
          _this.ngModel = ngModel;
          _this.formControlName = formControlName;
          /** A name for this control that can be used by `mc-form-field`. */

          _this.controlType = 'select';
          _this.hiddenItems = 0;
          /** The cached font-size of the trigger element. */

          _this.triggerFontSize = 0;
          /** The value of the select panel's transform-origin property. */

          _this.transformOrigin = 'top';
          /** Emits when the panel element is finished transforming in. */

          _this.panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
          /** Strategy that will be used to handle scrolling while the select panel is open. */

          _this.scrollStrategy = _this.scrollStrategyFactory();
          /**
           * The y-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text.
           * when the panel opens. Will change based on the y-position of the selected option.
           */

          _this.offsetY = 0;
          /**
           * This position config ensures that the top "start" corner of the overlay
           * is aligned with with the top "start" of the origin by default (overlapping
           * the trigger completely). If the panel cannot fit below the trigger, it
           * will fall back to a position above the trigger.
           */

          _this.positions = [{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }];
          _this.hiddenItemsText = '...ещё';
          /** Event emitted when the select panel has been toggled. */

          _this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /** Event emitted when the select has been opened. */

          _this.openedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["filter"])(function (o) {
            return o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function () {}));
          /** Event emitted when the select has been closed. */

          _this.closedStream = _this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["filter"])(function (o) {
            return !o;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["map"])(function () {}));
          /** Event emitted when the selected value has been changed by the user. */

          _this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          /**
           * Event that emits whenever the raw value of the select changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          _this.backdropClass = 'cdk-overlay-transparent-backdrop';
          /** Combined stream of all of the child options' change events. */

          _this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["defer"])(function () {
            if (_this.options) {
              return _this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["startWith"])(_this.options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function () {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"]).apply(void 0, _toConsumableArray(_this.options.map(function (option) {
                  return option.onSelectionChange;
                })));
              }));
            }

            return _this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["switchMap"])(function () {
              return _this.optionSelectionChanges;
            }));
          });
          _this._required = false;
          _this._multiple = false;
          _this._autoSelect = true;
          _this._value = null;
          _this._hasBackdrop = false;
          _this._focused = false;
          _this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__["Subscription"].EMPTY;
          _this._panelOpen = false;
          /** The scroll position of the overlay panel, calculated to center the selected option. */

          _this.scrollTop = 0;
          /** Unique id for this input. */

          _this.uid = "mc-select-".concat(nextUniqueId++);
          /** Emits whenever the component is destroyed. */

          _this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Subject"]();
          /** `View -> model callback called when value changes` */

          _this.onChange = function () {};
          /** `View -> model callback called when select has been touched` */


          _this.onTouched = function () {};
          /** Comparison function to specify which option is displayed. Defaults to object equality. */


          _this._compareWith = function (o1, o2) {
            return o1 === o2;
          };

          if (_this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            _this.ngControl.valueAccessor = _assertThisInitialized(_this);
          } // Force setter to be called in case id was not specified.


          _this.id = _this.id;
          return _this;
        }

        _createClass(McTreeSelect, [{
          key: "placeholder",
          get: function get() {
            return this._placeholder;
          },
          set: function set(value) {
            this._placeholder = value;
            this.stateChanges.next();
          }
        }, {
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
            this.stateChanges.next();
          }
        }, {
          key: "multiple",
          get: function get() {
            return this._multiple;
          },
          set: function set(value) {
            if (this.selectionModel) {
              throw Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["getMcSelectDynamicMultipleError"])();
            }

            this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "autoSelect",
          get: function get() {
            if (this.multiple) {
              return false;
            }

            return this._autoSelect;
          },
          set: function set(value) {
            this._autoSelect = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
          }
          /**
           * Function to compare the option values with the selected values. The first argument
           * is a value from an option. The second is a value from the selection. A boolean
           * should be returned.
           */

        }, {
          key: "compareWith",
          get: function get() {
            return this._compareWith;
          },
          set: function set(fn) {
            /* tslint:disable-next-line:strict-type-predicates */
            if (typeof fn !== 'function') {
              throw Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["getMcSelectNonFunctionValueError"])();
            }

            this._compareWith = fn;

            if (this.selectionModel) {
              // A different comparator means the selection could change.
              this.initializeSelection();
            }
          }
        }, {
          key: "value",
          get: function get() {
            return this.multiple ? this.tree.getSelectedValues() : this.tree.getSelectedValues()[0];
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this.uid;
            this.stateChanges.next();
          }
        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
          }
          /** Whether the select is focused. */

        }, {
          key: "focused",
          get: function get() {
            return this._focused || this._panelOpen;
          },
          set: function set(value) {
            this._focused = value;
          }
        }, {
          key: "panelOpen",
          get: function get() {
            return this._panelOpen;
          }
        }, {
          key: "canShowCleaner",
          get: function get() {
            return this.cleaner && this.selectionModel.hasValue();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
            // fire the animation end event twice for the same animation. See:
            // https://github.com/angular/angular/issues/24084

            this.panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy)).subscribe(function () {
              if (_this2.panelOpen) {
                _this2.scrollTop = 0;

                _this2.openedChange.emit(true);
              } else {
                _this2.openedChange.emit(false);

                _this2.overlayDir.offsetX = 0;

                _this2.changeDetectorRef.markForCheck();
              }
            });
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this3 = this;

            if (!this.tree) {
              return;
            }

            if (this.mcValidation.useValidation) {
              Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["setMosaicValidation"])(this);
            }

            this.tree.resetFocusedItemOnBlur = false;
            this.selectionModel = this.tree.selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_10__["SelectionModel"](this.multiple);
            this.tree.ngAfterContentInit();
            this.initKeyManager();
            this.options = this.tree.renderedOptions;
            this.tree.autoSelect = this.autoSelect;

            if (this.tree.multipleMode === null) {
              this.tree.multipleMode = this.multiple ? _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MultipleMode"].CHECKBOX : null;
            }

            if (this.multiple) {
              this.tree.noUnselectLast = false;
            }

            if (this.tempValues) {
              this.setSelectionByValue(this.tempValues);
              this.tempValues = null;
            }

            this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy)).subscribe(function (event) {
              if (!_this3.multiple && _this3.panelOpen && event.isUserInput) {
                _this3.close();
              }
            });
            this.tree.selectionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy)).subscribe(function (event) {
              _this3.onChange(_this3.selectedValues);

              _this3.selectionChange.emit(new McTreeSelectChange(_this3, event.option));
            });
            this.selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy)).subscribe(function (event) {
              if (event.added.length) {
                _this3.tree.keyManager.setFocusOrigin('program');

                _this3.tree.keyManager.setActiveItem(_this3.options.find(function (option) {
                  return option.data === event.added[0];
                }));
              }
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            if (!this.tree) {
              return;
            }

            this.tags.changes.subscribe(function () {
              setTimeout(function () {
                return _this4.calculateHiddenItems();
              }, 0);
            });
            setTimeout(function () {
              return _this4.calculateHiddenItems();
            }, 0);
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this.ngControl) {
              this.updateErrorState();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
            // the parent form field know to run change detection when the disabled state changes.
            if (changes.disabled) {
              this.stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy.next();
            this.destroy.complete();
            this.stateChanges.complete();
            this.closeSubscription.unsubscribe();
          }
        }, {
          key: "hiddenItemsTextFormatter",
          value: function hiddenItemsTextFormatter(hiddenItemsText, hiddenItems) {
            return "".concat(hiddenItemsText, " ").concat(hiddenItems);
          }
        }, {
          key: "clearValue",
          value: function clearValue($event) {
            $event.stopPropagation();
            this.selectionModel.clear();
            this.tree.keyManager.setActiveItem(-1);
            this.setSelectionByValue([]);
            this.onChange(this.selectedValues);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.panelOpen) {
              this.close();
            } else {
              this.open();
            }
          }
        }, {
          key: "open",
          value: function open() {
            var _this5 = this;

            if (this.disabled || !this.options || !this.options.length || this._panelOpen) {
              return;
            }

            this.triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
            // `parseInt` ignores the trailing 'px' and converts this to a number.

            this.triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement)['font-size']);
            this._panelOpen = true;
            setTimeout(function () {
              return _this5.highlightCorrectOption();
            });
            this.changeDetectorRef.markForCheck(); // Set the font size on the panel element once it exists.

            this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1)).subscribe(function () {
              if (_this5.triggerFontSize && _this5.overlayDir.overlayRef && _this5.overlayDir.overlayRef.overlayElement) {
                _this5.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this5.triggerFontSize, "px");
              }
            });
          }
          /** Closes the overlay panel and focuses the host element. */

        }, {
          key: "close",
          value: function close() {
            var _this6 = this;

            if (!this._panelOpen) {
              return;
            }

            this._panelOpen = false;
            this.changeDetectorRef.markForCheck();
            this.onTouched();
            setTimeout(function () {
              return _this6.focus();
            }, 0);
          }
          /**
           * Sets the select's value. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param value New value to be written to the model.
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this.tree) {
              this.setSelectionByValue(value);
            } else {
              this.tempValues = value;
            }
          }
          /**
           * Saves a callback function to be invoked when the select's value
           * changes from user input. Part of the ControlValueAccessor interface
           * required to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the value changes.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Saves a callback function to be invoked when the select is blurred
           * by the user. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param fn Callback to be triggered when the component has been touched.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Disables the select. Part of the ControlValueAccessor interface required
           * to integrate with Angular's core forms API.
           *
           * @param isDisabled Sets whether the component is disabled.
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
            this.changeDetectorRef.markForCheck();
            this.stateChanges.next();
          }
        }, {
          key: "selected",
          get: function get() {
            return this.multiple ? this.selectionModel.selected : this.selectionModel.selected[0];
          }
        }, {
          key: "selectedValues",
          get: function get() {
            var _this7 = this;

            var selectedValues = this.selectionModel.selected.map(function (value) {
              return _this7.tree.treeControl.getValue(value);
            });
            return this.multiple ? selectedValues : selectedValues[0];
          }
        }, {
          key: "triggerValue",
          get: function get() {
            if (this.empty) {
              return '';
            }

            return this.tree.treeControl.getViewValue(this.selected);
          }
        }, {
          key: "triggerValues",
          get: function get() {
            var _this8 = this;

            if (this.empty) {
              return [];
            }

            return this.selectedValues.map(function (value) {
              return _this8.tree.renderedOptions.find(function (option) {
                return option.value === value;
              });
            }).filter(function (option) {
              return option;
            });
          }
        }, {
          key: "empty",
          get: function get() {
            return !this.selectionModel || this.selectionModel.isEmpty();
          }
        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir ? this.dir.value === 'rtl' : false;
          }
        }, {
          key: "handleKeydown",
          value: function handleKeydown(event) {
            if (!this.disabled) {
              if (this.panelOpen) {
                this.handleOpenKeydown(event);
              } else {
                this.handleClosedKeydown(event);
              }
            }
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            if (!this.disabled) {
              this._focused = true;
              this.stateChanges.next();
            }
          }
          /**
           * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
           * "blur" to the panel when it opens, causing a false positive.
           */

        }, {
          key: "onBlur",
          value: function onBlur() {
            this._focused = false;

            if (!this.disabled && !this.panelOpen) {
              this.onTouched();
              this.changeDetectorRef.markForCheck();
              this.stateChanges.next();
            }
          }
          /** Callback that is invoked when the overlay panel has been attached. */

        }, {
          key: "onAttached",
          value: function onAttached() {
            var _this9 = this;

            this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["take"])(1)).subscribe(function () {
              _this9.changeDetectorRef.detectChanges();

              _this9.calculateOverlayOffsetX();

              _this9.panel.nativeElement.scrollTop = _this9.scrollTop;

              _this9.tree.updateScrollSize();
            });
            this.closeSubscription = this.closingActions().subscribe(function () {
              return _this9.close();
            });
          }
          /** Returns the theme to be used on the panel. */

        }, {
          key: "getPanelTheme",
          value: function getPanelTheme() {
            return this.parentFormField ? "mc-".concat(this.parentFormField.color) : '';
          }
        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
          /**
           * Implemented as part of McFormFieldControl.
           * @docs-private
           */

        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
          }
          /** Invoked when an option is clicked. */

        }, {
          key: "onRemoveSelectedOption",
          value: function onRemoveSelectedOption(selectedOption, $event) {
            var _this10 = this;

            $event.stopPropagation();
            this.selectionModel.deselect(this.selected.find(function (value) {
              return _this10.tree.treeControl.getValue(value) === selectedOption.value;
            }));
            this.onChange(this.selectedValues);
          }
        }, {
          key: "calculateHiddenItems",
          value: function calculateHiddenItems() {
            var _this11 = this;

            if (this.customTrigger || this.empty || !this.multiple) {
              return;
            }

            var visibleItems = 0;
            var totalItemsWidth = this.getTotalItemsWidthInMatcher();
            var totalVisibleItemsWidth = 0;
            this.tags.forEach(function (tag) {
              if (tag.nativeElement.offsetTop < tag.nativeElement.offsetHeight) {
                totalVisibleItemsWidth += _this11.getItemWidth(tag.nativeElement);
                visibleItems++;
              }
            });
            this.hiddenItems = this.selectionModel.selected.length - visibleItems;

            if (this.hiddenItems) {
              var itemsCounter = this.trigger.nativeElement.querySelector('.mc-tree-select__match-hidden-text');
              var matcherList = this.trigger.nativeElement.querySelector('.mc-tree-select__match-list');
              var itemsCounterShowed = itemsCounter.offsetTop < itemsCounter.offsetHeight; // const itemsCounterWidth: number = itemsCounter.getBoundingClientRect().width;

              var itemsCounterWidth = 86;
              var matcherListWidth = matcherList.getBoundingClientRect().width;
              var matcherWidth = matcherListWidth + itemsCounterWidth;

              if (itemsCounterShowed && totalItemsWidth < matcherWidth) {
                this.hiddenItems = 0;
              }

              if (totalVisibleItemsWidth === matcherListWidth || totalVisibleItemsWidth + itemsCounterWidth < matcherListWidth) {
                this.changeDetectorRef.markForCheck();
                return;
              } else if (!itemsCounterShowed && totalItemsWidth + itemsCounterWidth > matcherWidth) {
                this.hiddenItems++;
              }
            }

            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "closingActions",
          value: function closingActions() {
            var backdrop = this.overlayDir.overlayRef.backdropClick();
            var outsidePointerEvents = this.overlayDir.overlayRef.outsidePointerEvents();
            var detachments = this.overlayDir.overlayRef.detachments();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_14__["merge"])(backdrop, outsidePointerEvents, detachments);
          }
        }, {
          key: "getTotalItemsWidthInMatcher",
          value: function getTotalItemsWidthInMatcher() {
            var _this12 = this;

            var triggerClone = this.trigger.nativeElement.cloneNode(true);
            triggerClone.querySelector('.mc-tree-select__match-hidden-text').remove();
            this.renderer.setStyle(triggerClone, 'position', 'absolute');
            this.renderer.setStyle(triggerClone, 'visibility', 'hidden');
            this.renderer.setStyle(triggerClone, 'top', '-100%');
            this.renderer.setStyle(triggerClone, 'left', '0');
            this.renderer.appendChild(this.trigger.nativeElement, triggerClone);
            var totalItemsWidth = 0;
            triggerClone.querySelectorAll('mc-tag').forEach(function (item) {
              totalItemsWidth += _this12.getItemWidth(item);
            });
            triggerClone.remove();
            return totalItemsWidth;
          }
        }, {
          key: "getItemWidth",
          value: function getItemWidth(element) {
            var computedStyle = window.getComputedStyle(element);
            var width = parseInt(computedStyle.width);
            var marginLeft = parseInt(computedStyle.marginLeft);
            var marginRight = parseInt(computedStyle.marginRight);
            return width + marginLeft + marginRight;
          }
        }, {
          key: "handleClosedKeydown",
          value: function handleClosedKeydown(event) {
            // tslint:disable-next-line: deprecation
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["DOWN_ARROW"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["UP_ARROW"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["LEFT_ARROW"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["RIGHT_ARROW"];
            var isOpenKey = keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["ENTER"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["SPACE"]; // Open the select on ALT + arrow key to match the native <select>

            if (isOpenKey || (this.multiple || event.altKey) && isArrowKey) {
              // prevents the page from scrolling down when pressing space
              event.preventDefault();
              this.open();
            } else if (!this.multiple && this.tree.keyManager && this.tree.keyManager.onKeydown) {
              this.tree.keyManager.onKeydown(event);
            }
          }
        }, {
          key: "handleOpenKeydown",
          value: function handleOpenKeydown(event) {
            /* tslint:disable-next-line */
            var keyCode = event.keyCode;
            var isArrowKey = keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["DOWN_ARROW"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["UP_ARROW"];

            if (isArrowKey && event.altKey) {
              // Close the select on ALT + arrow key to match the native <select>
              event.preventDefault();
              this.close();
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["LEFT_ARROW"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["RIGHT_ARROW"]) {
              return this.originalOnKeyDown.call(this.tree, event);
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["HOME"]) {
              event.preventDefault();
              this.tree.keyManager.setFirstItemActive();
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["END"]) {
              event.preventDefault();
              this.tree.keyManager.setLastItemActive();
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["PAGE_UP"]) {
              event.preventDefault();
              this.tree.keyManager.setPreviousPageItemActive();
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["PAGE_DOWN"]) {
              event.preventDefault();
              this.tree.keyManager.setNextPageItemActive();
            } else if ((keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["ENTER"] || keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["SPACE"]) && this.tree.keyManager.activeItem) {
              event.preventDefault();

              if (!this.autoSelect) {
                this.selectionModel.toggle(this.tree.keyManager.activeItem.data);
              } else {
                this.close();
              }
            } else if (this.multiple && keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["A"] && event.ctrlKey) {
              event.preventDefault();
              var hasDeselectedOptions = this.options.some(function (option) {
                return !option.selected;
              });
              this.options.forEach(function (option) {
                if (hasDeselectedOptions && !option.disabled) {
                  option.select();
                } else {
                  option.deselect();
                }
              });
            } else {
              var previouslyFocusedIndex = this.tree.keyManager.activeItemIndex;
              this.tree.keyManager.setFocusOrigin('keyboard');
              this.tree.keyManager.onKeydown(event);

              if (this.multiple && isArrowKey && event.shiftKey && this.tree.keyManager.activeItem && this.tree.keyManager.activeItemIndex !== previouslyFocusedIndex) {
                this.tree.keyManager.activeItem.selectViaInteraction(event);
              }

              if (this.autoSelect && this.tree.keyManager.activeItem) {
                this.tree.setSelectedOptionsByKey(this.tree.keyManager.activeItem, Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event, 'shiftKey'), Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__["hasModifierKey"])(event, 'ctrlKey'));
              }
            }
          }
        }, {
          key: "initializeSelection",
          value: function initializeSelection() {
            var _this13 = this;

            // Defer setting the value in order to avoid the "Expression
            // has changed after it was checked" errors from Angular.
            Promise.resolve().then(function () {
              _this13.setSelectionByValue(_this13.ngControl ? _this13.ngControl.value : _this13._value);
            });
          }
          /**
           * Sets the selected option based on a value. If no option can be
           * found with the designated value, the select trigger is cleared.
           */

        }, {
          key: "setSelectionByValue",
          value: function setSelectionByValue(value) {
            if (this.multiple && value) {
              if (!Array.isArray(value)) {
                throw Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["getMcSelectNonArrayValueError"])();
              }

              this.tree.setOptionsFromValues(value);
              this.sortValues();
            } else {
              this.tree.setOptionsFromValues([value]);
            }

            this.changeDetectorRef.detectChanges();
          }
        }, {
          key: "initKeyManager",
          value: function initKeyManager() {
            var _this14 = this;

            this.originalOnKeyDown = this.tree.onKeyDown;

            this.tree.onKeyDown = function () {};

            this.tree.keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy)).subscribe(function () {
              // Restore focus to the trigger before closing. Ensures that the focus
              // position won't be lost if the user got focus into the overlay.
              _this14.focus();

              _this14.close();
            });
            this.tree.keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["takeUntil"])(this.destroy)).subscribe(function () {
              if (_this14._panelOpen && _this14.panel) {
                _this14.scrollActiveOptionIntoView();
              } else if (!_this14._panelOpen && !_this14.multiple && _this14.tree.keyManager.activeItem) {
                _this14.tree.keyManager.activeItem.selectViaInteraction();
              }
            });
          }
          /** Sorts the selected values in the selected based on their order in the panel. */

        }, {
          key: "sortValues",
          value: function sortValues() {
            var _this15 = this;

            if (this.multiple) {
              var options = this.options.toArray();
              this.selectionModel.sort(function (a, b) {
                return _this15.sortComparator ? _this15.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
              });
              this.stateChanges.next();
            }
          }
          /**
           * Highlights the selected item. If no option is selected, it will highlight
           * the first item instead.
           */

        }, {
          key: "highlightCorrectOption",
          value: function highlightCorrectOption() {
            if (this.empty || !this.tree.keyManager) {
              return;
            }

            var firstSelectedValue = this.multiple ? this.selectedValues[0] : this.selectedValues;
            var selectedOption = this.options.find(function (option) {
              return option.value === firstSelectedValue;
            });

            if (selectedOption) {
              this.tree.keyManager.setActiveItem(selectedOption);
            }
          }
          /** Scrolls the active option into view. */

        }, {
          key: "scrollActiveOptionIntoView",
          value: function scrollActiveOptionIntoView() {
            var activeOptionIndex = this.tree.keyManager.activeItemIndex || 0;
            this.panel.nativeElement.scrollTop = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["getOptionScrollPosition"])(activeOptionIndex, this.tree.getItemHeight(), this.panel.nativeElement.scrollTop, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["SELECT_PANEL_MAX_HEIGHT"]);
          }
          /**
           * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
           * This must be adjusted to align the selected option text over the trigger text when
           * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
           * can't be calculated until the panel has been attached, because we need to know the
           * content width in order to constrain the panel within the viewport.
           */

        }, {
          key: "calculateOverlayOffsetX",
          value: function calculateOverlayOffsetX() {
            var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
            var viewportSize = this.viewportRuler.getViewportSize();
            var isRtl = this.isRtl();
            /* tslint:disable-next-line:no-magic-numbers */

            var paddingWidth = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["SELECT_PANEL_PADDING_X"] * 2;
            var offsetX = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["SELECT_PANEL_PADDING_X"]; // Invert the offset in LTR.

            if (!isRtl) {
              offsetX *= -1;
            } // Determine how much the select overflows on each side.


            var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
            var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

            if (leftOverflow > 0) {
              offsetX += leftOverflow + _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["SELECT_PANEL_VIEWPORT_PADDING"];
            } else if (rightOverflow > 0) {
              offsetX -= rightOverflow + _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["SELECT_PANEL_VIEWPORT_PADDING"];
            } // Set the offset directly in order to avoid having to go through change detection and
            // potentially triggering "changed after it was checked" errors. Round the value to avoid
            // blurry content in some browsers.


            this.overlayDir.offsetX = Math.round(offsetX);
            this.overlayDir.overlayRef.updatePosition();
          }
        }]);

        return McTreeSelect;
      }(McTreeSelectMixinBase);

      McTreeSelect.ɵfac = function McTreeSelect_Factory(t) {
        return new (t || McTreeSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_SELECT_SCROLL_STRATEGY"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_VALIDATION"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_13__["McFormField"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], 10));
      };

      McTreeSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: McTreeSelect,
        selectors: [["mc-tree-select"]],
        contentQueries: function McTreeSelect_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _c0, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, McTreeSelectTrigger, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.cleaner = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tree = _t.first);
          }
        },
        viewQuery: function McTreeSelect_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c3, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.hiddenItemsCounter = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tags = _t);
          }
        },
        hostAttrs: [1, "mc-tree-select"],
        hostVars: 7,
        hostBindings: function McTreeSelect_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function McTreeSelect_click_HostBindingHandler() {
              return ctx.toggle();
            })("keydown", function McTreeSelect_keydown_HostBindingHandler($event) {
              return ctx.handleKeydown($event);
            })("focus", function McTreeSelect_focus_HostBindingHandler() {
              return ctx.onFocus();
            })("blur", function McTreeSelect_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("resize", function McTreeSelect_resize_HostBindingHandler() {
              return ctx.calculateHiddenItems();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-disabled", ctx.disabled)("mc-invalid", ctx.errorState);
          }
        },
        inputs: {
          disabled: "disabled",
          tabIndex: "tabIndex",
          hiddenItemsText: "hiddenItemsText",
          backdropClass: "backdropClass",
          id: "id",
          placeholder: "placeholder",
          required: "required",
          multiple: "multiple",
          autoSelect: "autoSelect",
          compareWith: "compareWith",
          hasBackdrop: "hasBackdrop",
          hiddenItemsTextFormatter: "hiddenItemsTextFormatter",
          panelClass: "panelClass",
          errorStateMatcher: "errorStateMatcher",
          sortComparator: "sortComparator"
        },
        outputs: {
          openedChange: "openedChange",
          openedStream: "opened",
          closedStream: "closed",
          selectionChange: "selectionChange",
          valueChange: "valueChange"
        },
        exportAs: ["mcTreeSelect"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_13__["McFormFieldControl"],
          useExisting: McTreeSelect
        }, {
          provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTree"],
          useExisting: McTreeSelect
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c5,
        decls: 10,
        vars: 14,
        consts: [["cdk-overlay-origin", "", 1, "mc-tree-select__trigger"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mc-tree-select__matcher", 3, "ngSwitch"], ["class", "mc-tree-select__placeholder", 4, "ngSwitchCase"], [3, "ngSwitch", 4, "ngSwitchCase"], ["class", "mc-select__cleaner", 3, "click", 4, "ngIf"], [1, "mc-tree-select__arrow-wrapper"], ["mc-icon", "mc-angle-down-L_16", 1, "mc-tree-select__arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", 3, "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mc-tree-select__placeholder"], [3, "ngSwitch"], ["class", "mc-tree-select__match-container", 3, "ngSwitch", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mc-tree-select__match-container", 3, "ngSwitch"], ["class", "mc-tree-select__matcher-text", 4, "ngSwitchCase"], ["class", "mc-tree-select__multiple-matcher", 4, "ngSwitchCase"], [1, "mc-tree-select__matcher-text"], [1, "mc-tree-select__multiple-matcher"], [1, "mc-tree-select__match-list"], [3, "selectable", "disabled", "mc-error", 4, "ngFor", "ngForOf"], [1, "mc-tree-select__match-hidden-text"], ["hiddenItemsCounter", ""], [3, "selectable", "disabled"], ["mc-icon", "mc-close-S_16", 3, "click", 4, "ngIf"], ["mc-icon", "mc-close-S_16", 3, "click"], [1, "mc-select__cleaner", 3, "click"], [3, "ngClass", "keydown"], ["panel", ""], [1, "mc-tree-select__content"], ["optionsContainer", ""]],
        template: function McTreeSelect_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, McTreeSelect_span_4_Template, 2, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, McTreeSelect_span_5_Template, 3, 2, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, McTreeSelect_div_6_Template, 2, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, McTreeSelect_ng_template_9_Template, 5, 9, "ng-template", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function McTreeSelect_Template_ng_template_backdropClick_9_listener() {
              return ctx.close();
            })("attach", function McTreeSelect_Template_ng_template_attach_9_listener() {
              return ctx.onAttached();
            })("detach", function McTreeSelect_Template_ng_template_detach_9_listener() {
              return ctx.close();
            });
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mc-tree-select__trigger_multiple", ctx.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.canShowCleaner);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayHasBackdrop", ctx.hasBackdrop)("cdkConnectedOverlayBackdropClass", ctx.backdropClass)("cdkConnectedOverlayScrollStrategy", ctx.scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayMinWidth", ctx.triggerRect == null ? null : ctx.triggerRect.width)("cdkConnectedOverlayOffsetY", ctx.offsetY);
          }
        },
        directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".mc-option{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;max-width:100%;height:var(--mc-option-size-height,32px);border:var(--mc-option-size-border-width,2px) solid transparent;cursor:pointer;outline:none;padding-left:var(--mc-option-size-horizontal-padding,16px);padding-right:var(--mc-option-size-horizontal-padding,16px);-webkit-tap-highlight-color:transparent}.mc-option.mc-disabled{cursor:default}.mc-option .mc-pseudo-checkbox{margin-right:8px}.mc-option .mc-option-overlay{position:absolute;top:calc(-1 * var(--mc-option-size-border-width, 2px));left:calc(-1 * var(--mc-option-size-border-width, 2px));right:calc(-1 * var(--mc-option-size-border-width, 2px));bottom:calc(-1 * var(--mc-option-size-border-width, 2px));pointer-events:none;border-radius:inherit}.mc-option-text{display:inline-block;flex-grow:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mc-tree-select{box-sizing:border-box;display:inline-block;width:100%;outline:none}.mc-tree-select.mc-disabled .mc-tree-select__trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mc-tree-select__trigger{display:flex;box-sizing:border-box;position:relative;height:var(--mc-select-size-height,30px);cursor:pointer;padding-left:calc(var(--mc-select-size-left-padding, 16px) - var(--mc-form-field-size-border-width, 1px));padding-right:calc(var(--mc-select-size-right-padding, 8px) - var(--mc-form-field-size-border-width, 1px))}.mc-tree-select__trigger.mc-tree-select__trigger_multiple{padding-left:calc(var(--mc-select-size-left-padding-multiple, 8px) - var(--mc-form-field-size-border-width, 1px))}.mc-tree-select__trigger.mc-tree-select__trigger_multiple .mc-tree-select__placeholder{margin-left:8px}.mc-tree-select__trigger.mc-tree-select__trigger_multiple .mc-tag.mc-disabled .mc-tag__text{margin-right:7px}.mc-tree-select__matcher{display:flex;align-items:center;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mc-tree-select__matcher>span{width:100%}.mc-tree-select__multiple-matcher{display:flex;width:100%}.mc-tree-select__match-list{display:flex;flex-wrap:wrap;overflow:hidden;max-height:calc(var(--mc-select-size-height, 30px) - var(--mc-select-panel-size-border-width, 1px))}.mc-tree-select__match-list .mc-tag{margin-right:4px}.mc-tree-select__match-container{display:flex;flex-direction:row;justify-content:space-between;width:100%}.mc-tree-select__match-container .mc-tree-select__match-hidden-text{flex:0 0 70px;align-self:center;padding:0 8px;text-align:right}.mc-tree-select__match-item{display:flex;border:1px solid transparent;border-radius:3px;padding-left:7px;margin-right:4px;max-width:100%}.mc-tree-select__arrow-wrapper{align-self:center}.mc-form-field-appearance-fill .mc-tree-select__arrow-wrapper,.mc-form-field-appearance-standard .mc-tree-select__arrow-wrapper{transform:translateY(-50%)}.mc-form-field-appearance-outline .mc-tree-select__arrow-wrapper{transform:translateY(-25%)}.mc-tree-select__panel{max-height:var(--mc-select-panel-size-max-height,232px);min-width:100%;overflow:auto;border-width:var(--mc-select-panel-size-border-width,1px);border-style:solid;border-bottom-left-radius:var(--mc-select-panel-size-border-radius,3px);border-bottom-right-radius:var(--mc-select-panel-size-border-radius,3px);padding:4px 0}.mc-tree-select__panel .mc-optgroup-label,.mc-tree-select__panel .mc-tree-select-option{font-size:inherit;line-height:var(--mc-option-size-height,32px);height:var(--mc-option-size-height,32px)}.mc-tree-select__content,.mc-tree-select__content .mc-tree-selection{height:100%}.mc-form-field-type-select:not(.mc-disabled) .mc-form-field-flex{cursor:pointer}"],
        encapsulation: 2,
        data: {
          animation: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mcSelectAnimations"].transformPanel, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mcSelectAnimations"].fadeInContent]
        },
        changeDetection: 0
      });
      /** @nocollapse */

      McTreeSelect.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
        }, {
          type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_SELECT_SCROLL_STRATEGY"]]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_VALIDATION"]]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_13__["McFormField"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
          }]
        }];
      };

      McTreeSelect.propDecorators = {
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['trigger', {
            "static": false
          }]
        }],
        panel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['panel', {
            "static": false
          }]
        }],
        overlayDir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], {
            "static": false
          }]
        }],
        hiddenItemsCounter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['hiddenItemsCounter', {
            "static": false
          }]
        }],
        tags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
          args: [_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"]]
        }],
        cleaner: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: ['mcSelectCleaner', {
            "static": true
          }]
        }],
        customTrigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [McTreeSelectTrigger, {
            "static": false
          }]
        }],
        tree: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
          args: [_ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], {
            "static": false
          }]
        }],
        hiddenItemsText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        openedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
          args: ['closed']
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        sortComparator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        multiple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        autoSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        hiddenItemsTextFormatter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McTreeSelect, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'mc-tree-select',
            exportAs: 'mcTreeSelect',
            template: "<div cdk-overlay-origin\n     class=\"mc-tree-select__trigger\"\n     [class.mc-tree-select__trigger_multiple]=\"multiple\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n    <div class=\"mc-tree-select__matcher\" [ngSwitch]=\"empty\">\n        <span class=\"mc-tree-select__placeholder\" *ngSwitchCase=\"true\">{{ placeholder || '\\u00A0' }}</span>\n        <span *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n            <div *ngSwitchDefault [ngSwitch]=\"multiple\" class=\"mc-tree-select__match-container\">\n                <span *ngSwitchCase=\"false\" class=\"mc-tree-select__matcher-text\">{{ triggerValue }}</span>\n                <div *ngSwitchCase=\"true\" class=\"mc-tree-select__multiple-matcher\">\n                    <div class=\"mc-tree-select__match-list\">\n                        <mc-tag *ngFor=\"let option of triggerValues\"\n                            [selectable]=\"false\"\n                            [disabled]=\"option.disabled || disabled\"\n                            [class.mc-error]=\"errorState\">\n\n                            {{ option.viewValue }}\n                            <i mc-icon=\"mc-close-S_16\"\n                               *ngIf=\"!option.disabled && !disabled\"\n                               (click)=\"onRemoveSelectedOption(option, $event)\">\n                            </i>\n                        </mc-tag>\n                    </div>\n                    <div class=\"mc-tree-select__match-hidden-text\"\n                         [style.display]=\"hiddenItems > 0 ? 'block' : 'none'\"\n                         #hiddenItemsCounter>\n                        {{ hiddenItemsTextFormatter(hiddenItemsText, hiddenItems) }}\n                    </div>\n                </div>\n            </div>\n            <ng-content select=\"mc-tree-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n        </span>\n    </div>\n\n    <div class=\"mc-select__cleaner\" *ngIf=\"canShowCleaner\" (click)=\"clearValue($event)\">\n        <ng-content select=\"mc-cleaner\"></ng-content>\n    </div>\n\n    <div class=\"mc-tree-select__arrow-wrapper\">\n        <i class=\"mc-tree-select__arrow\" mc-icon=\"mc-angle-down-L_16\"></i>\n    </div>\n</div>\n\n<ng-template\n    cdk-connected-overlay\n    cdkConnectedOverlayLockPosition\n    [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n    [cdkConnectedOverlayBackdropClass]=\"backdropClass\"\n    [cdkConnectedOverlayScrollStrategy]=\"scrollStrategy\"\n    [cdkConnectedOverlayOrigin]=\"origin\"\n    [cdkConnectedOverlayOpen]=\"panelOpen\"\n    [cdkConnectedOverlayPositions]=\"positions\"\n    [cdkConnectedOverlayMinWidth]=\"triggerRect?.width\"\n    [cdkConnectedOverlayOffsetY]=\"offsetY\"\n    (backdropClick)=\"close()\"\n    (attach)=\"onAttached()\"\n    (detach)=\"close()\">\n\n    <div #panel\n         class=\"mc-tree-select__panel {{ getPanelTheme() }}\"\n         [ngClass]=\"panelClass\"\n         [style.transformOrigin]=\"transformOrigin\"\n         [style.font-size.px]=\"triggerFontSize\"\n         (keydown)=\"handleKeydown($event)\">\n\n        <div #optionsContainer\n             class=\"mc-tree-select__content\"\n             [@fadeInContent]=\"'showing'\"\n             (@fadeInContent.done)=\"panelDoneAnimatingStream.next($event.toState)\">\n            <ng-content select=\"mc-tree-selection\"></ng-content>\n        </div>\n    </div>\n</ng-template>\n",
            inputs: ['disabled', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            host: {
              "class": 'mc-tree-select',
              '[class.mc-disabled]': 'disabled',
              '[class.mc-invalid]': 'errorState',
              '[attr.id]': 'id',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null',
              '(click)': 'toggle()',
              '(keydown)': 'handleKeydown($event)',
              '(focus)': 'onFocus()',
              '(blur)': 'onBlur()',
              '(window:resize)': 'calculateHiddenItems()'
            },
            animations: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mcSelectAnimations"].transformPanel, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["mcSelectAnimations"].fadeInContent],
            providers: [{
              provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_13__["McFormFieldControl"],
              useExisting: McTreeSelect
            }, {
              provide: _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTree"],
              useExisting: McTreeSelect
            }],
            styles: [".mc-option{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;position:relative;max-width:100%;height:var(--mc-option-size-height,32px);border:var(--mc-option-size-border-width,2px) solid transparent;cursor:pointer;outline:none;padding-left:var(--mc-option-size-horizontal-padding,16px);padding-right:var(--mc-option-size-horizontal-padding,16px);-webkit-tap-highlight-color:transparent}.mc-option.mc-disabled{cursor:default}.mc-option .mc-pseudo-checkbox{margin-right:8px}.mc-option .mc-option-overlay{position:absolute;top:calc(-1 * var(--mc-option-size-border-width, 2px));left:calc(-1 * var(--mc-option-size-border-width, 2px));right:calc(-1 * var(--mc-option-size-border-width, 2px));bottom:calc(-1 * var(--mc-option-size-border-width, 2px));pointer-events:none;border-radius:inherit}.mc-option-text{display:inline-block;flex-grow:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mc-tree-select{box-sizing:border-box;display:inline-block;width:100%;outline:none}.mc-tree-select.mc-disabled .mc-tree-select__trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mc-tree-select__trigger{display:flex;box-sizing:border-box;position:relative;height:var(--mc-select-size-height,30px);cursor:pointer;padding-left:calc(var(--mc-select-size-left-padding, 16px) - var(--mc-form-field-size-border-width, 1px));padding-right:calc(var(--mc-select-size-right-padding, 8px) - var(--mc-form-field-size-border-width, 1px))}.mc-tree-select__trigger.mc-tree-select__trigger_multiple{padding-left:calc(var(--mc-select-size-left-padding-multiple, 8px) - var(--mc-form-field-size-border-width, 1px))}.mc-tree-select__trigger.mc-tree-select__trigger_multiple .mc-tree-select__placeholder{margin-left:8px}.mc-tree-select__trigger.mc-tree-select__trigger_multiple .mc-tag.mc-disabled .mc-tag__text{margin-right:7px}.mc-tree-select__matcher{display:flex;align-items:center;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mc-tree-select__matcher>span{width:100%}.mc-tree-select__multiple-matcher{display:flex;width:100%}.mc-tree-select__match-list{display:flex;flex-wrap:wrap;overflow:hidden;max-height:calc(var(--mc-select-size-height, 30px) - var(--mc-select-panel-size-border-width, 1px))}.mc-tree-select__match-list .mc-tag{margin-right:4px}.mc-tree-select__match-container{display:flex;flex-direction:row;justify-content:space-between;width:100%}.mc-tree-select__match-container .mc-tree-select__match-hidden-text{flex:0 0 70px;align-self:center;padding:0 8px;text-align:right}.mc-tree-select__match-item{display:flex;border:1px solid transparent;border-radius:3px;padding-left:7px;margin-right:4px;max-width:100%}.mc-tree-select__arrow-wrapper{align-self:center}.mc-form-field-appearance-fill .mc-tree-select__arrow-wrapper,.mc-form-field-appearance-standard .mc-tree-select__arrow-wrapper{transform:translateY(-50%)}.mc-form-field-appearance-outline .mc-tree-select__arrow-wrapper{transform:translateY(-25%)}.mc-tree-select__panel{max-height:var(--mc-select-panel-size-max-height,232px);min-width:100%;overflow:auto;border-width:var(--mc-select-panel-size-border-width,1px);border-style:solid;border-bottom-left-radius:var(--mc-select-panel-size-border-radius,3px);border-bottom-right-radius:var(--mc-select-panel-size-border-radius,3px);padding:4px 0}.mc-tree-select__panel .mc-optgroup-label,.mc-tree-select__panel .mc-tree-select-option{font-size:inherit;line-height:var(--mc-option-size-height,32px);height:var(--mc-option-size-height,32px)}.mc-tree-select__content,.mc-tree-select__content .mc-tree-selection{height:100%}.mc-form-field-type-select:not(.mc-disabled) .mc-form-field-flex{cursor:pointer}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["ViewportRuler"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]
          }, {
            type: _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["ErrorStateMatcher"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_SELECT_SCROLL_STRATEGY"]]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALIDATORS"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_VALIDATION"]]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_13__["McFormField"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }]
          }];
        }, {
          hiddenItemsText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
          }],
          closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
          }],
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          autoSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          hiddenItemsTextFormatter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['trigger', {
              "static": false
            }]
          }],
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel', {
              "static": false
            }]
          }],
          overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], {
              "static": false
            }]
          }],
          hiddenItemsCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['hiddenItemsCounter', {
              "static": false
            }]
          }],
          tags: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"],
            args: [_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"]]
          }],
          cleaner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: ['mcSelectCleaner', {
              "static": true
            }]
          }],
          customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [McTreeSelectTrigger, {
              "static": false
            }]
          }],
          tree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [_ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], {
              "static": false
            }]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }],
          sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
          }]
        });
      })();

      var McTreeSelectModule = function McTreeSelectModule() {
        _classCallCheck(this, McTreeSelectModule);
      };

      McTreeSelectModule.ɵfac = function McTreeSelectModule_Factory(t) {
        return new (t || McTreeSelectModule)();
      };

      McTreeSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: McTreeSelectModule
      });
      McTreeSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_SELECT_SCROLL_STRATEGY_PROVIDER"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagsModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McPseudoCheckboxModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](McTreeSelectModule, {
          declarations: function declarations() {
            return [McTreeSelect, McTreeSelectTrigger];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagsModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McPseudoCheckboxModule"]];
          },
          exports: function exports() {
            return [McTreeSelect, McTreeSelectTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](McTreeSelectModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagsModule"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["McPseudoCheckboxModule"]],
            exports: [McTreeSelect, McTreeSelectTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [McTreeSelect, McTreeSelectTrigger],
            providers: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_4__["MC_SELECT_SCROLL_STRATEGY_PROVIDER"]]
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
//# sourceMappingURL=19-es5.js.map