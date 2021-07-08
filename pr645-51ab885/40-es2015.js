(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "cqzd":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-tree.js ***!
  \*****************************************************************************************************/
/*! exports provided: TreeExamplesModule, TreeFilteringExample, TreeMultipleCheckboxExample, TreeMultipleChecklistExample, TreeMultipleKeyboardExample, TreeOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeExamplesModule", function() { return TreeExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeFilteringExample", function() { return TreeFilteringExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMultipleCheckboxExample", function() { return TreeMultipleCheckboxExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMultipleChecklistExample", function() { return TreeMultipleChecklistExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeMultipleKeyboardExample", function() { return TreeMultipleKeyboardExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeOverviewExample", function() { return TreeOverviewExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ptsecurity/mosaic/checkbox */ "UYLH");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/tree */ "clBn");
/* harmony import */ var _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/cdk/tree */ "UiN6");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");


















/* tslint:disable:no-reserved-keywords object-literal-key-quotes */
function TreeFilteringExample_mc_tree_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "mcHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", node_r2.name === "tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r0.treeControl.getViewValue(node_r2), ctx_r0.treeControl.filterValue.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TreeFilteringExample_mc_tree_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-tree-node-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "mcHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r1.treeControl.getViewValue(node_r3), ctx_r1.treeControl.filterValue.value), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FileNode$4 {
}
/** Flat node with expandable and level information */
class FileFlatNode$4 {
}
/**
 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
 * The return value is the list of `FileNode`.
 */
function buildFileTree$4(value, level) {
    const data = [];
    for (const k of Object.keys(value)) {
        const v = value[k];
        const node = new FileNode$4();
        node.name = `${k}`;
        if (v === null || v === undefined) {
            // no action
        }
        else if (typeof v === 'object') {
            node.children = buildFileTree$4(v, level + 1);
        }
        else {
            node.type = v;
        }
        data.push(node);
    }
    return data;
}
const DATA_OBJECT$4 = {
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
            package: 'json',
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
 * @title Basic tree
 */
class TreeFilteringExample {
    constructor() {
        this.modelValue = '';
        this.filterValue = '';
        this.transformer = (node, level, parent) => {
            const flatNode = new FileFlatNode$4();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this.getLevel = (node) => {
            return node.level;
        };
        this.isExpandable = (node) => {
            return node.expandable;
        };
        this.getChildren = (node) => {
            return node.children;
        };
        this.getValue = (node) => {
            return node.name;
        };
        this.getViewValue = (node) => {
            const nodeType = node.type ? `.${node.type}` : '';
            return `${node.name}${nodeType}`;
        };
        this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
        this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = buildFileTree$4(DATA_OBJECT$4, 0);
    }
    onFilterChange(value) {
        this.treeControl.filterNodes(value);
    }
    hasChild(_, nodeData) { return nodeData.expandable; }
}
TreeFilteringExample.ɵfac = function TreeFilteringExample_Factory(t) { return new (t || TreeFilteringExample)(); };
TreeFilteringExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeFilteringExample, selectors: [["tree-filtering-example"]], decls: 8, vars: 5, consts: [["type", "text", "mcInput", "", 3, "ngModel", "ngModelChange"], [3, "ngModel", "dataSource", "treeControl", "ngModelChange"], ["mcTreeNodePadding", "", 3, "disabled", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcTreeNodePadding", "", 3, "disabled"], [3, "innerHTML"], ["mcTreeNodePadding", ""], [3, "node"]], template: function TreeFilteringExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeFilteringExample_Template_input_ngModelChange_1_listener($event) { return ctx.onFilterChange($event); })("ngModelChange", function TreeFilteringExample_Template_input_ngModelChange_1_listener($event) { return ctx.filterValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mc-tree-selection", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeFilteringExample_Template_mc_tree_selection_ngModelChange_5_listener($event) { return ctx.modelValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeFilteringExample_mc_tree_option_6_Template, 3, 5, "mc-tree-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeFilteringExample_mc_tree_option_7_Template, 4, 5, "mc-tree-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelValue)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleComponent"]], pipes: [_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McHighlightPipe"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeFilteringExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-filtering-example',
                templateUrl: 'tree-filtering-example.html',
                styleUrls: ['tree-filtering-example.css']
            }]
    }], function () { return []; }, null); })();

/* tslint:disable:no-reserved-keywords object-literal-key-quotes */
function TreeMultipleCheckboxExample_mc_tree_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", node_r2.name === "tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.treeControl.getViewValue(node_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TreeMultipleCheckboxExample_mc_tree_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-tree-node-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.treeControl.getViewValue(node_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FileNode$3 {
}
/** Flat node with expandable and level information */
class FileFlatNode$3 {
}
/**
 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
 * The return value is the list of `FileNode`.
 */
function buildFileTree$3(value, level) {
    const data = [];
    for (const k of Object.keys(value)) {
        const v = value[k];
        const node = new FileNode$3();
        node.name = `${k}`;
        if (v === null || v === undefined) {
            // no action
        }
        else if (typeof v === 'object') {
            node.children = buildFileTree$3(v, level + 1);
        }
        else {
            node.type = v;
        }
        data.push(node);
    }
    return data;
}
const DATA_OBJECT$3 = {
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
            package: 'json',
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
 * @title Basic tree
 */
class TreeMultipleCheckboxExample {
    constructor() {
        this.modelValue = [];
        this.transformer = (node, level, parent) => {
            const flatNode = new FileFlatNode$3();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this.getLevel = (node) => {
            return node.level;
        };
        this.isExpandable = (node) => {
            return node.expandable;
        };
        this.getChildren = (node) => {
            return node.children;
        };
        this.getValue = (node) => {
            return node.name;
        };
        this.getViewValue = (node) => {
            const nodeType = node.type ? `.${node.type}` : '';
            return `${node.name}${nodeType}`;
        };
        this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
        this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = buildFileTree$3(DATA_OBJECT$3, 0);
    }
    hasChild(_, nodeData) { return nodeData.expandable; }
}
TreeMultipleCheckboxExample.ɵfac = function TreeMultipleCheckboxExample_Factory(t) { return new (t || TreeMultipleCheckboxExample)(); };
TreeMultipleCheckboxExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeMultipleCheckboxExample, selectors: [["tree-multiple-checkbox-example"]], decls: 3, vars: 4, consts: [["multiple", "checkbox", 3, "ngModel", "dataSource", "treeControl", "ngModelChange"], ["mcTreeNodePadding", "", 3, "disabled", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcTreeNodePadding", "", 3, "disabled"], [3, "innerHTML"], ["mcTreeNodePadding", ""], [3, "node"]], template: function TreeMultipleCheckboxExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-selection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeMultipleCheckboxExample_Template_mc_tree_selection_ngModelChange_0_listener($event) { return ctx.modelValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeMultipleCheckboxExample_mc_tree_option_1_Template, 2, 2, "mc-tree-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeMultipleCheckboxExample_mc_tree_option_2_Template, 3, 2, "mc-tree-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelValue)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleComponent"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeMultipleCheckboxExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-multiple-checkbox-example',
                templateUrl: 'tree-multiple-checkbox-example.html',
                styleUrls: ['tree-multiple-checkbox-example.css']
            }]
    }], function () { return []; }, null); })();

/* tslint:disable:no-reserved-keywords object-literal-key-quotes */
function TreeMultipleChecklistExample_mc_tree_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mc-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TreeMultipleChecklistExample_mc_tree_option_1_Template_mc_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const node_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.fileSelectionToggle(node_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", node_r2.name === "tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", node_r2.name === "tests")("checked", ctx_r0.checklistSelection.isSelected(node_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.treeControl.getViewValue(node_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TreeMultipleChecklistExample_mc_tree_option_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-tree-node-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mc-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TreeMultipleChecklistExample_mc_tree_option_2_Template_mc_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const node_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.fileSelectionToggle(node_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.descendantsAllSelected(node_r5))("indeterminate", ctx_r1.descendantsPartiallySelected(node_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.treeControl.getViewValue(node_r5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FileNode$2 {
}
/** Flat node with expandable and level information */
class FileFlatNode$2 {
}
/**
 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
 * The return value is the list of `FileNode`.
 */
function buildFileTree$2(value, level) {
    const data = [];
    for (const k of Object.keys(value)) {
        const v = value[k];
        const node = new FileNode$2();
        node.name = `${k}`;
        if (v === null || v === undefined) {
            // no action
        }
        else if (typeof v === 'object') {
            node.children = buildFileTree$2(v, level + 1);
        }
        else {
            node.type = v;
        }
        data.push(node);
    }
    return data;
}
const DATA_OBJECT$2 = {
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
            package: 'json',
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
 * @title Checklist tree
 */
class TreeMultipleChecklistExample {
    constructor() {
        this.modelValue = [];
        /** The selection for checklist */
        this.checklistSelection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true /* multiple */);
        this.transformer = (node, level, parent) => {
            const flatNode = new FileFlatNode$2();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this.getLevel = (node) => {
            return node.level;
        };
        this.isExpandable = (node) => {
            return node.expandable;
        };
        this.getChildren = (node) => {
            return node.children;
        };
        this.getValue = (node) => {
            return node.name;
        };
        this.getViewValue = (node) => {
            const nodeType = node.type ? `.${node.type}` : '';
            return `${node.name}${nodeType}`;
        };
        this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
        this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = buildFileTree$2(DATA_OBJECT$2, 0);
    }
    hasChild(_, nodeData) { return nodeData.expandable; }
    /** Whether all the descendants of the node are selected. */
    descendantsAllSelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        return descendants.every((child) => this.checklistSelection.isSelected(child));
    }
    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node) {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some((child) => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
    }
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    fileSelectionToggle(node) {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);
        // Force update for the parent
        descendants.every((child) => this.checklistSelection.isSelected(child));
        this.checkAllParentsSelection(node);
    }
    /* Checks all the parents when a leaf node is selected/unselected */
    checkAllParentsSelection(node) {
        let parent = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }
    /** Check root node checked state and change it accordingly */
    checkRootNodeSelection(node) {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.every((child) => this.checklistSelection.isSelected(child));
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        }
        else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }
    /* Get the parent node of a node */
    getParentNode(node) {
        const currentLevel = this.getLevel(node);
        if (currentLevel < 1) {
            return null;
        }
        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;
        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];
            if (this.getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }
}
TreeMultipleChecklistExample.ɵfac = function TreeMultipleChecklistExample_Factory(t) { return new (t || TreeMultipleChecklistExample)(); };
TreeMultipleChecklistExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeMultipleChecklistExample, selectors: [["tree-multiple-checklist-example"]], decls: 3, vars: 4, consts: [[3, "ngModel", "dataSource", "treeControl", "ngModelChange"], ["mcTreeNodePadding", "", 3, "disabled", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcTreeNodePadding", "", 3, "disabled"], [1, "tree-example-checkbox", 3, "disabled", "checked", "change"], [3, "innerHTML"], ["mcTreeNodePadding", ""], [3, "node"], [1, "tree-example-checkbox", 3, "checked", "indeterminate", "change"]], template: function TreeMultipleChecklistExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-selection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeMultipleChecklistExample_Template_mc_tree_selection_ngModelChange_0_listener($event) { return ctx.modelValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeMultipleChecklistExample_mc_tree_option_1_Template, 3, 4, "mc-tree-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeMultipleChecklistExample_mc_tree_option_2_Template, 4, 4, "mc-tree-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelValue)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_2__["McCheckbox"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleComponent"]], styles: [".tree-example-checkbox[_ngcontent-%COMP%]{margin-right:8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeMultipleChecklistExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-multiple-checklist-example',
                templateUrl: 'tree-multiple-checklist-example.html',
                styleUrls: ['tree-multiple-checklist-example.css']
            }]
    }], function () { return []; }, null); })();

/* tslint:disable:no-reserved-keywords object-literal-key-quotes */
function TreeMultipleKeyboardExample_mc_tree_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", node_r2.name === "tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.treeControl.getViewValue(node_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TreeMultipleKeyboardExample_mc_tree_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-tree-node-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.treeControl.getViewValue(node_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FileNode$1 {
}
/** Flat node with expandable and level information */
class FileFlatNode$1 {
}
/**
 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
 * The return value is the list of `FileNode`.
 */
function buildFileTree$1(value, level) {
    const data = [];
    for (const k of Object.keys(value)) {
        const v = value[k];
        const node = new FileNode$1();
        node.name = `${k}`;
        if (v === null || v === undefined) {
            // no action
        }
        else if (typeof v === 'object') {
            node.children = buildFileTree$1(v, level + 1);
        }
        else {
            node.type = v;
        }
        data.push(node);
    }
    return data;
}
const DATA_OBJECT$1 = {
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
            package: 'json',
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
 * @title Basic tree
 */
class TreeMultipleKeyboardExample {
    constructor() {
        this.modelValue = [];
        this.transformer = (node, level, parent) => {
            const flatNode = new FileFlatNode$1();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this.getLevel = (node) => {
            return node.level;
        };
        this.isExpandable = (node) => {
            return node.expandable;
        };
        this.getChildren = (node) => {
            return node.children;
        };
        this.getValue = (node) => {
            return node.name;
        };
        this.getViewValue = (node) => {
            const nodeType = node.type ? `.${node.type}` : '';
            return `${node.name}${nodeType}`;
        };
        this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
        this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = buildFileTree$1(DATA_OBJECT$1, 0);
    }
    hasChild(_, nodeData) { return nodeData.expandable; }
}
TreeMultipleKeyboardExample.ɵfac = function TreeMultipleKeyboardExample_Factory(t) { return new (t || TreeMultipleKeyboardExample)(); };
TreeMultipleKeyboardExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeMultipleKeyboardExample, selectors: [["tree-multiple-keyboard-example"]], decls: 3, vars: 4, consts: [["multiple", "keyboard", 3, "ngModel", "dataSource", "treeControl", "ngModelChange"], ["mcTreeNodePadding", "", 3, "disabled", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcTreeNodePadding", "", 3, "disabled"], [3, "innerHTML"], ["mcTreeNodePadding", ""], [3, "node"]], template: function TreeMultipleKeyboardExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-selection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeMultipleKeyboardExample_Template_mc_tree_selection_ngModelChange_0_listener($event) { return ctx.modelValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeMultipleKeyboardExample_mc_tree_option_1_Template, 2, 2, "mc-tree-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeMultipleKeyboardExample_mc_tree_option_2_Template, 3, 2, "mc-tree-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelValue)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleComponent"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeMultipleKeyboardExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-multiple-keyboard-example',
                templateUrl: 'tree-multiple-keyboard-example.html',
                styleUrls: ['tree-multiple-keyboard-example.css']
            }]
    }], function () { return []; }, null); })();

/* tslint:disable:no-reserved-keywords object-literal-key-quotes */
function TreeOverviewExample_mc_tree_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", node_r2.name === "tests");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.treeControl.getViewValue(node_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TreeOverviewExample_mc_tree_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mc-tree-node-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.treeControl.getViewValue(node_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FileNode {
}
/** Flat node with expandable and level information */
class FileFlatNode {
}
/**
 * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
 * The return value is the list of `FileNode`.
 */
function buildFileTree(value, level) {
    const data = [];
    for (const k of Object.keys(value)) {
        const v = value[k];
        const node = new FileNode();
        node.name = `${k}`;
        if (v === null || v === undefined) {
            // no action
        }
        else if (typeof v === 'object') {
            node.children = buildFileTree(v, level + 1);
        }
        else {
            node.type = v;
        }
        data.push(node);
    }
    return data;
}
const DATA_OBJECT = {
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
            package: 'json',
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
 * @title Basic tree
 */
class TreeOverviewExample {
    constructor() {
        this.modelValue = '';
        this.transformer = (node, level, parent) => {
            const flatNode = new FileFlatNode();
            flatNode.name = node.name;
            flatNode.parent = parent;
            flatNode.type = node.type;
            flatNode.level = level;
            flatNode.expandable = !!node.children;
            return flatNode;
        };
        this.getLevel = (node) => {
            return node.level;
        };
        this.isExpandable = (node) => {
            return node.expandable;
        };
        this.getChildren = (node) => {
            return node.children;
        };
        this.getValue = (node) => {
            return node.name;
        };
        this.getViewValue = (node) => {
            const nodeType = node.type ? `.${node.type}` : '';
            return `${node.name}${nodeType}`;
        };
        this.treeFlattener = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlattener"](this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new _ptsecurity_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["FlatTreeControl"](this.getLevel, this.isExpandable, this.getValue, this.getViewValue);
        this.dataSource = new _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.dataSource.data = buildFileTree(DATA_OBJECT, 0);
    }
    hasChild(_, nodeData) { return nodeData.expandable; }
}
TreeOverviewExample.ɵfac = function TreeOverviewExample_Factory(t) { return new (t || TreeOverviewExample)(); };
TreeOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TreeOverviewExample, selectors: [["tree-overview-example"]], decls: 3, vars: 4, consts: [[3, "ngModel", "dataSource", "treeControl", "ngModelChange"], ["mcTreeNodePadding", "", 3, "disabled", 4, "mcTreeNodeDef"], ["mcTreeNodePadding", "", 4, "mcTreeNodeDef", "mcTreeNodeDefWhen"], ["mcTreeNodePadding", "", 3, "disabled"], [3, "innerHTML"], ["mcTreeNodePadding", ""], [3, "node"]], template: function TreeOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-tree-selection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TreeOverviewExample_Template_mc_tree_selection_ngModelChange_0_listener($event) { return ctx.modelValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeOverviewExample_mc_tree_option_1_Template, 2, 2, "mc-tree-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeOverviewExample_mc_tree_option_2_Template, 3, 2, "mc-tree-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.modelValue)("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mcTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [_ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeSelection"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeDef"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeOption"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodePadding"], _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeNodeToggleComponent"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tree-overview-example',
                templateUrl: 'tree-overview-example.html',
                styleUrls: ['tree-overview-example.css']
            }]
    }], function () { return []; }, null); })();

const EXAMPLES = [
    TreeOverviewExample,
    TreeMultipleCheckboxExample,
    TreeMultipleChecklistExample,
    TreeMultipleKeyboardExample,
    TreeFilteringExample
];
class TreeExamplesModule {
}
TreeExamplesModule.ɵfac = function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); };
TreeExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TreeExamplesModule });
TreeExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"],
            _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"],
            _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McHighlightModule"],
            _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_2__["McCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeExamplesModule, { declarations: [TreeOverviewExample,
        TreeMultipleCheckboxExample,
        TreeMultipleChecklistExample,
        TreeMultipleKeyboardExample,
        TreeFilteringExample], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"],
        _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"],
        _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McHighlightModule"],
        _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_2__["McCheckboxModule"]], exports: [TreeOverviewExample,
        TreeMultipleCheckboxExample,
        TreeMultipleChecklistExample,
        TreeMultipleKeyboardExample,
        TreeFilteringExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_6__["McInputModule"],
                    _ptsecurity_mosaic_tree__WEBPACK_IMPORTED_MODULE_7__["McTreeModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"],
                    _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["McHighlightModule"],
                    _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_2__["McCheckboxModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-tree.js.map


/***/ })

}]);
//# sourceMappingURL=40-es2015.js.map