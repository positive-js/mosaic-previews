(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "NuCU":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-select.js ***!
  \*******************************************************************************************************/
/*! exports provided: SelectExamplesModule, SelectGroupsExample, SelectMultipleOverviewExample, SelectOverviewExample, SelectSearchOverviewExample, SelectVirtualScrollExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectExamplesModule", function() { return SelectExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectGroupsExample", function() { return SelectGroupsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleOverviewExample", function() { return SelectMultipleOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectOverviewExample", function() { return SelectOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSearchOverviewExample", function() { return SelectSearchOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectVirtualScrollExample", function() { return SelectVirtualScrollExample; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/select */ "CUtc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



















function SelectGroupsExample_mc_optgroup_2_mc_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pokemon_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pokemon_r3.viewValue);
} }
function SelectGroupsExample_mc_optgroup_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-optgroup", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SelectGroupsExample_mc_optgroup_2_mc_option_1_Template, 2, 2, "mc-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", group_r1.name)("disabled", group_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r1.pokemon);
} }
/**
 * @title Basic Select
 */
class SelectGroupsExample {
    constructor() {
        this.pokemonTypes = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                disabled: true,
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' }
                ]
            }
        ];
    }
}
SelectGroupsExample.ɵfac = function SelectGroupsExample_Factory(t) { return new (t || SelectGroupsExample)(); };
SelectGroupsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectGroupsExample, selectors: [["select-groups-example"]], decls: 5, vars: 1, consts: [[3, "label", "disabled", 4, "ngFor", "ngForOf"], ["value", "mime-11"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectGroupsExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SelectGroupsExample_mc_optgroup_2_Template, 2, 3, "mc-optgroup", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Mr. Mime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.pokemonTypes);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOptgroup"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectGroupsExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'select-groups-example',
                templateUrl: 'select-groups-example.html',
                styleUrls: ['select-groups-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic Select
 */
class SelectMultipleOverviewExample {
    constructor() {
        this.selected = [];
    }
}
SelectMultipleOverviewExample.ɵfac = function SelectMultipleOverviewExample_Factory(t) { return new (t || SelectMultipleOverviewExample)(); };
SelectMultipleOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectMultipleOverviewExample, selectors: [["select-multiple-overview-example"]], decls: 28, vars: 1, consts: [["multiple", "", 3, "value", "valueChange"], ["value", "Disabled", "disabled", ""], ["value", "SelectedItem"], ["value", "SelectedItem1"], ["value", "SelectedItem2"], ["value", "SelectedItem3"], ["value", "SelectedItem4"], ["value", "SelectedItem5"], ["value", "SelectedItem6"], ["value", "SelectedItem7"], ["value", "SelectedItem8"], ["value", "SelectedItem9"], ["value", "SelectedItem10"], ["mcSelectCleaner", ""]], template: function SelectMultipleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SelectMultipleOverviewExample_Template_mc_select_valueChange_1_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SelectedItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "SelectedItem1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mc-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "SelectedItem2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mc-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SelectedItem3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mc-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SelectedItem4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mc-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SelectedItem5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mc-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "SelectedItem6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mc-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SelectedItem7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mc-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "SelectedItem8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mc-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "SelectedItem9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mc-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "SelectedItem10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "mc-cleaner", null, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McCleaner"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectMultipleOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'select-multiple-overview-example',
                templateUrl: 'select-multiple-overview-example.html',
                styleUrls: ['select-multiple-overview-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic Select
 */
class SelectOverviewExample {
    constructor() {
        this.selected = '';
    }
}
SelectOverviewExample.ɵfac = function SelectOverviewExample_Factory(t) { return new (t || SelectOverviewExample)(); };
SelectOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectOverviewExample, selectors: [["select-overview-example"]], decls: 26, vars: 1, consts: [[3, "value", "valueChange"], ["value", "Disabled", "disabled", ""], ["value", "SelectedItem"], ["value", "SelectedItem1"], ["value", "SelectedItem2"], ["value", "SelectedItem3"], ["value", "SelectedItem4"], ["value", "SelectedItem5"], ["value", "SelectedItem6"], ["value", "SelectedItem7"], ["value", "SelectedItem8"], ["value", "SelectedItem9"], ["value", "SelectedItem10"]], template: function SelectOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SelectOverviewExample_Template_mc_select_valueChange_1_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SelectedItem");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "SelectedItem1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mc-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "SelectedItem2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mc-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SelectedItem3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mc-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SelectedItem4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mc-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "SelectedItem5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mc-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "SelectedItem6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mc-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "SelectedItem7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mc-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "SelectedItem8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mc-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "SelectedItem9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mc-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "SelectedItem10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'select-overview-example',
                templateUrl: 'select-overview-example.html',
                styleUrls: ['select-overview-example.css']
            }]
    }], null, null); })();

function SelectSearchOverviewExample_mc_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r2);
} }
const OPTIONS$1 = [
    'Abakan', 'Almetyevsk', 'Anadyr', 'Anapa', 'Arkhangelsk', 'Astrakhan', 'Barnaul', 'Belgorod', 'Beslan', 'Biysk',
    'Birobidzhan', 'Blagoveshchensk', 'Bologoye', 'Bryansk', 'Veliky Novgorod', 'Veliky Ustyug', 'Vladivostok',
    'Vladikavkaz', 'Vladimir', 'Volgograd', 'Vologda', 'Vorkuta', 'Voronezh', 'Gatchina', 'Gdov', 'Gelendzhik',
    'Gorno-Altaysk', 'Grozny', 'Gudermes', 'Gus-Khrustalny', 'Dzerzhinsk', 'Dmitrov', 'Dubna', 'Yeysk', 'Yekaterinburg',
    'Yelabuga', 'Yelets', 'Yessentuki', 'Zlatoust', 'Ivanovo', 'Izhevsk', 'Irkutsk', 'Yoshkar-Ola', 'Kazan',
    'Kaliningrad', 'Kaluga', 'Kemerovo', 'Kislovodsk', 'Komsomolsk-on-Amur', 'Kotlas', 'Krasnodar', 'Krasnoyarsk',
    'Kurgan', 'Kursk', 'Kyzyl', 'Leninogorsk', 'Lensk', 'Lipetsk', 'Luga', 'Lyuban', 'Lyubertsy', 'Magadan', 'Maykop',
    'Makhachkala', 'Miass', 'Mineralnye Vody', 'Mirny', 'Moscow', 'Murmansk', 'Murom', 'Mytishchi',
    'Naberezhnye Chelny', 'Nadym', 'Nalchik', 'Nazran', 'Naryan-Mar', 'Nakhodka', 'Nizhnevartovsk', 'Nizhnekamsk',
    'Nizhny Novgorod', 'Nizhny Tagil', 'Novokuznetsk', 'Novosibirsk', 'Novy Urengoy', 'Norilsk', 'Obninsk',
    'Oktyabrsky', 'Omsk', 'Orenburg', 'Orekhovo-Zuyevo', 'Oryol', 'Penza', 'Perm', 'Petrozavodsk',
    'Petropavlovsk-Kamchatsky', 'Podolsk', 'Pskov', 'Pyatigorsk', 'Rostov-on-Don', 'Rybinsk', 'Ryazan', 'Salekhard',
    'Samara', 'Saint Petersburg', 'Saransk', 'Saratov', 'Severodvinsk', 'Smolensk', 'Sol-Iletsk', 'Sochi', 'Stavropol',
    'Surgut', 'Syktyvkar', 'Tambov', 'Tver', 'Tobolsk', 'Tolyatti', 'Tomsk', 'Tuapse', 'Tula', 'Tynda', 'Tyumen',
    'Ulan-Ude', 'Ulyanovsk', 'Ufa', 'Khabarovsk', 'Khanty-Mansiysk', 'Chebarkul', 'Cheboksary', 'Chelyabinsk',
    'Cherepovets', 'Cherkessk', 'Chistopol', 'Chita', 'Shadrinsk', 'Shatura', 'Shuya', 'Elista', 'Engels',
    'Yuzhno-Sakhalinsk', 'Yakutsk', 'Yaroslavl'
];
/**
 * @title Basic Select
 */
class SelectSearchOverviewExample {
    constructor() {
        this.selected = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = OPTIONS$1.sort();
    }
    ngOnInit() {
        this.filteredOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(OPTIONS$1), this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])((value) => this.getFilteredOptions(value))));
    }
    getFilteredOptions(value) {
        const searchFilter = (value && value.new) ? value.value : value;
        return searchFilter
            ? this.options.filter((option) => option.toLowerCase().includes((searchFilter.toLowerCase())))
            : this.options;
    }
}
SelectSearchOverviewExample.ɵfac = function SelectSearchOverviewExample_Factory(t) { return new (t || SelectSearchOverviewExample)(); };
SelectSearchOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectSearchOverviewExample, selectors: [["select-search-overview-example"]], decls: 12, vars: 5, consts: [["multiple", "", 3, "value", "valueChange"], ["mcFormFieldWithoutBorders", "", "mcSelectSearch", ""], ["mcPrefix", "", "mc-icon", "mc-search_16"], ["mcInput", "", "type", "text", 3, "formControl"], ["mcSelectCleaner", ""], ["mc-select-search-empty-result", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectSearchOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SelectSearchOverviewExample_Template_mc_select_valueChange_1_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mc-cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mc-cleaner", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SelectSearchOverviewExample_mc_option_10_Template, 2, 2, "mc-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 3, ctx.filteredOptions));
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldWithoutBorders"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectSearch"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McPrefix"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_5__["McInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McCleaner"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectSearchEmptyResult"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectSearchOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'select-search-overview-example',
                templateUrl: 'select-search-overview-example.html',
                styleUrls: ['select-search-overview-example.css']
            }]
    }], null, null); })();

function SelectVirtualScrollExample_mc_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r1, " ");
} }
const OPTIONS = [
    'Abakan', 'Almetyevsk', 'Anadyr', 'Anapa', 'Arkhangelsk', 'Astrakhan', 'Barnaul', 'Belgorod', 'Beslan', 'Biysk',
    'Birobidzhan', 'Blagoveshchensk', 'Bologoye', 'Bryansk', 'Veliky Novgorod', 'Veliky Ustyug', 'Vladivostok',
    'Vladikavkaz', 'Vladimir', 'Volgograd', 'Vologda', 'Vorkuta', 'Voronezh', 'Gatchina', 'Gdov', 'Gelendzhik',
    'Gorno-Altaysk', 'Grozny', 'Gudermes', 'Gus-Khrustalny', 'Dzerzhinsk', 'Dmitrov', 'Dubna', 'Yeysk', 'Yekaterinburg',
    'Yelabuga', 'Yelets', 'Yessentuki', 'Zlatoust', 'Ivanovo', 'Izhevsk', 'Irkutsk', 'Yoshkar-Ola', 'Kazan',
    'Kaliningrad', 'Kaluga', 'Kemerovo', 'Kislovodsk', 'Komsomolsk-on-Amur', 'Kotlas', 'Krasnodar', 'Krasnoyarsk',
    'Kurgan', 'Kursk', 'Kyzyl', 'Leninogorsk', 'Lensk', 'Lipetsk', 'Luga', 'Lyuban', 'Lyubertsy', 'Magadan', 'Maykop',
    'Makhachkala', 'Miass', 'Mineralnye Vody', 'Mirny', 'Moscow', 'Murmansk', 'Murom', 'Mytishchi',
    'Naberezhnye Chelny', 'Nadym', 'Nalchik', 'Nazran', 'Naryan-Mar', 'Nakhodka', 'Nizhnevartovsk', 'Nizhnekamsk',
    'Nizhny Novgorod', 'Nizhny Tagil', 'Novokuznetsk', 'Novosibirsk', 'Novy Urengoy', 'Norilsk', 'Obninsk',
    'Oktyabrsky', 'Omsk', 'Orenburg', 'Orekhovo-Zuyevo', 'Oryol', 'Penza', 'Perm', 'Petrozavodsk',
    'Petropavlovsk-Kamchatsky', 'Podolsk', 'Pskov', 'Pyatigorsk', 'Rostov-on-Don', 'Rybinsk', 'Ryazan', 'Salekhard',
    'Samara', 'Saint Petersburg', 'Saransk', 'Saratov', 'Severodvinsk', 'Smolensk', 'Sol-Iletsk', 'Sochi', 'Stavropol',
    'Surgut', 'Syktyvkar', 'Tambov', 'Tver', 'Tobolsk', 'Tolyatti', 'Tomsk', 'Tuapse', 'Tula', 'Tynda', 'Tyumen',
    'Ulan-Ude', 'Ulyanovsk', 'Ufa', 'Khabarovsk', 'Khanty-Mansiysk', 'Chebarkul', 'Cheboksary', 'Chelyabinsk',
    'Cherepovets', 'Cherkessk', 'Chistopol', 'Chita', 'Shadrinsk', 'Shatura', 'Shuya', 'Elista', 'Engels',
    'Yuzhno-Sakhalinsk', 'Yakutsk', 'Yaroslavl'
];
/**
 * @title select-virtual-scroll
 */
class SelectVirtualScrollExample {
    constructor() {
        this.options = OPTIONS.sort();
        this.initialRange = { start: 0, end: 7 };
    }
    openedChange(opened) {
        if (opened) {
            return;
        }
        this.cdkVirtualScrollViewport.setRenderedContentOffset(0);
        this.cdkVirtualScrollViewport.setRenderedRange(this.initialRange);
    }
}
SelectVirtualScrollExample.ɵfac = function SelectVirtualScrollExample_Factory(t) { return new (t || SelectVirtualScrollExample)(); };
SelectVirtualScrollExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectVirtualScrollExample, selectors: [["select-virtual-scroll-example"]], viewQuery: function SelectVirtualScrollExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cdkVirtualScrollViewport = _t.first);
    } }, decls: 5, vars: 5, consts: [[3, "openedChange"], [3, "itemSize", "minBufferPx", "maxBufferPx"], [3, "value", 4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTemplateCacheSize"], [3, "value"]], template: function SelectVirtualScrollExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function SelectVirtualScrollExample_Template_mc_select_openedChange_1_listener($event) { return ctx.openedChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mc-cleaner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "cdk-virtual-scroll-viewport", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SelectVirtualScrollExample_mc_option_4_Template, 2, 2, "mc-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemSize", 32)("minBufferPx", 100)("maxBufferPx", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", ctx.options)("cdkVirtualForTemplateCacheSize", 0);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelect"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McCleaner"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualForOf"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["McOption"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectVirtualScrollExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'select-virtual-scroll-example',
                templateUrl: 'select-virtual-scroll-example.html',
                styleUrls: ['select-virtual-scroll-example.css']
            }]
    }], null, { cdkVirtualScrollViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["CdkVirtualScrollViewport"]]
        }] }); })();

const EXAMPLES = [
    SelectOverviewExample,
    SelectMultipleOverviewExample,
    SelectSearchOverviewExample,
    SelectGroupsExample,
    SelectVirtualScrollExample
];
class SelectExamplesModule {
}
SelectExamplesModule.ɵfac = function SelectExamplesModule_Factory(t) { return new (t || SelectExamplesModule)(); };
SelectExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SelectExamplesModule });
SelectExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"],
            _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_5__["McInputModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SelectExamplesModule, { declarations: [SelectOverviewExample,
        SelectMultipleOverviewExample,
        SelectSearchOverviewExample,
        SelectGroupsExample,
        SelectVirtualScrollExample], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"],
        _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_5__["McInputModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], exports: [SelectOverviewExample,
        SelectMultipleOverviewExample,
        SelectSearchOverviewExample,
        SelectGroupsExample,
        SelectVirtualScrollExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_3__["McFormFieldModule"],
                    _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_6__["McSelectModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_5__["McInputModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-select.js.map


/***/ })

}]);
//# sourceMappingURL=35-es2015.js.map