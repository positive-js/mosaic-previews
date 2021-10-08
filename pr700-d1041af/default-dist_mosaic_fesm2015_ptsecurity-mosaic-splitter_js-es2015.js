"use strict";
(self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-splitter_js"],{

/***/ 9324:
/*!************************************************************!*\
  !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-splitter.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Direction": function() { return /* binding */ Direction; },
/* harmony export */   "McGutterDirective": function() { return /* binding */ McGutterDirective; },
/* harmony export */   "McSplitterAreaDirective": function() { return /* binding */ McSplitterAreaDirective; },
/* harmony export */   "McSplitterComponent": function() { return /* binding */ McSplitterComponent; },
/* harmony export */   "McSplitterModule": function() { return /* binding */ McSplitterModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ 86463);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 20657);







function McSplitterComponent_ng_template_1_mc_gutter_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-gutter", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McSplitterComponent_ng_template_1_mc_gutter_0_Template_mc_gutter_mousedown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r5.onMouseDown($event, index_r2, index_r2 + 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r4.hideGutters ? "none" : "flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("direction", ctx_r4.direction)("size", ctx_r4.gutterSize)("order", index_r2 * 2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r4.disabled || null);
  }
}

function McSplitterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, McSplitterComponent_ng_template_1_mc_gutter_0_Template, 1, 6, "mc-gutter", 1);
  }

  if (rf & 2) {
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r3 === false);
  }
}

const _c0 = ["*"];
var Direction;

(function (Direction) {
  Direction["Horizontal"] = "horizontal";
  Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));

class McGutterDirective {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this._direction = Direction.Vertical;
    this._order = 0;
    this._size = 6;
    this.dragged = false;
  }

  get direction() {
    return this._direction;
  }

  set direction(direction) {
    this._direction = direction;
  }

  get order() {
    return this._order;
  }

  set order(order) {
    this._order = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(order);
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(size);
  }

  ngOnInit() {
    this.setStyle("flex-basis"
    /* FlexBasis */
    , (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceCssPixelValue)(this.size));
    this.setStyle(this.isVertical() ? "height"
    /* Height */
    : "width"
    /* Width */
    , (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceCssPixelValue)(this.size));
    this.setStyle("order"
    /* Order */
    , this.order);

    if (!this.isVertical()) {
      this.setStyle("height"
      /* Height */
      , '100%');
    } // fix IE issue with gutter icon. flex-direction is requied for flex alignment options


    this.setStyle("flex-direction"
    /* FlexDirection */
    , this.isVertical() ? 'row' : 'column');
  }

  isVertical() {
    return this.direction === Direction.Vertical;
  }

  setStyle(property, value) {
    this.renderer.setStyle(this.elementRef.nativeElement, property, value);
  }

}
/** @nocollapse */


McGutterDirective.ɵfac = function McGutterDirective_Factory(t) {
  return new (t || McGutterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
/** @nocollapse */


McGutterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McGutterDirective,
  selectors: [["mc-gutter"]],
  hostAttrs: [1, "mc-gutter"],
  hostVars: 4,
  hostBindings: function McGutterDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McGutterDirective_mousedown_HostBindingHandler() {
        return ctx.dragged = true;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mc-gutter_vertical", ctx.isVertical())("mc-gutter_dragged", ctx.dragged);
    }
  },
  inputs: {
    direction: "direction",
    order: "order",
    size: "size"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McGutterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mc-gutter',
      host: {
        class: 'mc-gutter',
        '[class.mc-gutter_vertical]': 'isVertical()',
        '[class.mc-gutter_dragged]': 'dragged',
        '(mousedown)': 'dragged = true'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    order: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class McSplitterComponent {
  constructor(elementRef, changeDetectorRef, ngZone, renderer) {
    this.elementRef = elementRef;
    this.changeDetectorRef = changeDetectorRef;
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.areas = [];
    this.isDragging = false;
    this.areaPositionDivider = 2;
    this.listeners = [];
    this._hideGutters = false;
    this._disabled = false;
    this._gutterSize = 6;
  }

  get hideGutters() {
    return this._hideGutters;
  }

  set hideGutters(value) {
    this._hideGutters = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }

  get direction() {
    return this._direction;
  }

  set direction(direction) {
    this._direction = direction;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(disabled) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(disabled);
  }

  get gutterSize() {
    return this._gutterSize;
  }

  set gutterSize(gutterSize) {
    const size = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(gutterSize);
    this._gutterSize = size > 0 ? size : this.gutterSize;
  }

  addArea(area) {
    const index = this.areas.length;
    const order = index * this.areaPositionDivider;
    const size = area.getSize();
    area.setOrder(order);
    this.areas.push({
      area,
      index,
      order,
      initialSize: size
    });
  }

  ngOnInit() {
    if (!this.direction) {
      this.direction = Direction.Horizontal;
    }

    this.setStyle("flex-direction"
    /* FlexDirection */
    , this.isVertical() ? 'column' : 'row');
  }

  onMouseDown(event, leftAreaIndex, rightAreaIndex) {
    if (this.disabled) {
      return;
    }

    event.preventDefault();
    const leftArea = this.areas[leftAreaIndex];
    const rightArea = this.areas[rightAreaIndex];
    const startPoint = {
      x: event.screenX,
      y: event.screenY
    };
    leftArea.initialSize = leftArea.area.getSize();
    rightArea.initialSize = rightArea.area.getSize();
    this.areas.forEach(item => {
      const size = item.area.getSize();
      item.area.disableFlex();
      item.area.setSize(size);
    });
    this.ngZone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen('document', 'mouseup', () => this.onMouseUp()));
    });
    this.ngZone.runOutsideAngular(() => {
      this.listeners.push(this.renderer.listen('document', 'mousemove', e => this.onMouseMove(e, startPoint, leftArea, rightArea)));
    });
    this.isDragging = true;
  }

  removeArea(area) {
    let indexToRemove = -1;
    this.areas.some((item, index) => {
      if (item.area === area) {
        indexToRemove = index;
        return true;
      }

      return false;
    });

    if (indexToRemove === -1) {
      return;
    }

    this.areas.splice(indexToRemove, 1);
  }

  isVertical() {
    return this.direction === Direction.Vertical;
  }

  updateGutter() {
    this.gutters.forEach(gutter => {
      if (gutter.dragged) {
        gutter.dragged = false;
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  onMouseMove(event, startPoint, leftArea, rightArea) {
    if (!this.isDragging || this.disabled) {
      return;
    }

    const endPoint = {
      x: event.screenX,
      y: event.screenY
    };
    const offset = this.isVertical() ? startPoint.y - endPoint.y : startPoint.x - endPoint.x;
    const newLeftAreaSize = leftArea.initialSize - offset;
    const newRightAreaSize = rightArea.initialSize + offset;
    const minLeftAreaSize = leftArea.area.getMinSize();
    const minRightAreaSize = rightArea.area.getMinSize();

    if (newLeftAreaSize <= minLeftAreaSize || newRightAreaSize <= minRightAreaSize) {
      return;
    } else if (newLeftAreaSize <= 0) {
      leftArea.area.setSize(0);
      rightArea.area.setSize(rightArea.initialSize + leftArea.initialSize);
    } else if (newRightAreaSize <= 0) {
      leftArea.area.setSize(rightArea.initialSize + leftArea.initialSize);
      rightArea.area.setSize(0);
    } else {
      leftArea.area.setSize(newLeftAreaSize);
      rightArea.area.setSize(newRightAreaSize);
    }
  }

  onMouseUp() {
    while (this.listeners.length > 0) {
      const unsubscribe = this.listeners.pop();

      if (unsubscribe) {
        unsubscribe();
      }
    }

    this.isDragging = false;
    this.updateGutter();
  }

  setStyle(property, value) {
    this.renderer.setStyle(this.elementRef.nativeElement, property, value);
  }

}
/** @nocollapse */


McSplitterComponent.ɵfac = function McSplitterComponent_Factory(t) {
  return new (t || McSplitterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
/** @nocollapse */


McSplitterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: McSplitterComponent,
  selectors: [["mc-splitter"]],
  viewQuery: function McSplitterComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](McGutterDirective, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gutters = _t);
    }
  },
  hostAttrs: [1, "mc-splitter"],
  inputs: {
    hideGutters: "hideGutters",
    direction: "direction",
    disabled: "disabled",
    gutterSize: "gutterSize"
  },
  exportAs: ["mcSplitter"],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 1,
  consts: [["ngFor", "", 3, "ngForOf"], [3, "direction", "display", "size", "order", "mousedown", 4, "ngIf"], [3, "direction", "size", "order", "mousedown"]],
  template: function McSplitterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, McSplitterComponent_ng_template_1_Template, 1, 1, "ng-template", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.areas);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, McGutterDirective],
  styles: [".mc-splitter{display:flex;flex-wrap:nowrap;align-items:stretch;overflow:hidden}.mc-splitter .mc-splitter-area{overflow:hidden}.mc-gutter{display:flex;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;overflow:hidden}.mc-gutter.mc-gutter_vertical>.mc-icon{transform:rotate(90deg)}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSplitterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mc-splitter',
      exportAs: 'mcSplitter',
      host: {
        class: 'mc-splitter'
      },
      preserveWhitespaces: false,
      styleUrls: ['splitter.scss'],
      templateUrl: './splitter.component.html',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    gutters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [McGutterDirective]
    }],
    hideGutters: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    gutterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class McSplitterAreaDirective {
  constructor(elementRef, renderer, splitter) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.splitter = splitter;
  }

  disableFlex() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'flex');
  }

  ngOnInit() {
    this.splitter.addArea(this);
    this.removeStyle("max-width"
    /* MaxWidth */
    );

    if (this.splitter.direction === Direction.Vertical) {
      this.setStyle("width"
      /* Width */
      , '100%');
      this.removeStyle("height"
      /* Height */
      );
    } else {
      this.setStyle("height"
      /* Height */
      , '100%');
      this.removeStyle("width"
      /* Width */
      );
    }
  }

  ngOnDestroy() {
    this.splitter.removeArea(this);
  }

  setOrder(order) {
    this.setStyle("order"
    /* Order */
    , order);
  }

  setSize(size) {
    if (size) {
      const sz = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(size);
      this.setStyle(this.getSizeProperty(), (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceCssPixelValue)(sz));
    }
  }

  getSize() {
    return this.elementRef.nativeElement[this.getOffsetSizeProperty()];
  }

  getMinSize() {
    const styles = getComputedStyle(this.elementRef.nativeElement);
    return parseFloat(styles[this.getMinSizeProperty()]);
  }

  isVertical() {
    return this.splitter.direction === Direction.Vertical;
  }

  getMinSizeProperty() {
    return this.isVertical() ? "min-height"
    /* MinHeight */
    : "minWidth"
    /* MinWidth */
    ;
  }

  getOffsetSizeProperty() {
    return this.isVertical() ? "offsetHeight"
    /* OffsetHeight */
    : "offsetWidth"
    /* OffsetWidth */
    ;
  }

  getSizeProperty() {
    return this.isVertical() ? "height"
    /* Height */
    : "width"
    /* Width */
    ;
  }

  setStyle(style, value) {
    this.renderer.setStyle(this.elementRef.nativeElement, style, value);
  }

  removeStyle(style) {
    this.renderer.removeStyle(this.elementRef.nativeElement, style);
  }

}
/** @nocollapse */


McSplitterAreaDirective.ɵfac = function McSplitterAreaDirective_Factory(t) {
  return new (t || McSplitterAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](McSplitterComponent));
};
/** @nocollapse */


McSplitterAreaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: McSplitterAreaDirective,
  selectors: [["", "mc-splitter-area", ""]],
  hostAttrs: [1, "mc-splitter-area"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSplitterAreaDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mc-splitter-area]',
      host: {
        class: 'mc-splitter-area'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: McSplitterComponent
    }];
  }, null);
})();

class McSplitterModule {}
/** @nocollapse */


McSplitterModule.ɵfac = function McSplitterModule_Factory(t) {
  return new (t || McSplitterModule)();
};
/** @nocollapse */


McSplitterModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: McSplitterModule,
  declarations: [McGutterDirective, McSplitterAreaDirective, McSplitterComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIconModule],
  exports: [McGutterDirective, McSplitterAreaDirective, McSplitterComponent]
});
/** @nocollapse */

McSplitterModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIconModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McSplitterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIconModule],
      exports: [McGutterDirective, McSplitterAreaDirective, McSplitterComponent],
      declarations: [McGutterDirective, McSplitterAreaDirective, McSplitterComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-splitter_js-es2015.js.map