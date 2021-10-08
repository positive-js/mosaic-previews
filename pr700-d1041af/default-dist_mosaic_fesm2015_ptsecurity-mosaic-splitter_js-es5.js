(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-splitter_js"], {
    /***/
    9324: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Direction": function Direction() {
          return (
            /* binding */
            _Direction
          );
        },

        /* harmony export */
        "McGutterDirective": function McGutterDirective() {
          return (
            /* binding */
            _McGutterDirective
          );
        },

        /* harmony export */
        "McSplitterAreaDirective": function McSplitterAreaDirective() {
          return (
            /* binding */
            _McSplitterAreaDirective
          );
        },

        /* harmony export */
        "McSplitterComponent": function McSplitterComponent() {
          return (
            /* binding */
            _McSplitterComponent
          );
        },

        /* harmony export */
        "McSplitterModule": function McSplitterModule() {
          return (
            /* binding */
            _McSplitterModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      86463);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);

      function McSplitterComponent_ng_template_1_mc_gutter_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mc-gutter", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function McSplitterComponent_ng_template_1_mc_gutter_0_Template_mc_gutter_mousedown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onMouseDown($event, index_r2, index_r2 + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
          var last_r3 = ctx.last;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r3 === false);
        }
      }

      var _c0 = ["*"];

      var _Direction;

      (function (Direction) {
        Direction["Horizontal"] = "horizontal";
        Direction["Vertical"] = "vertical";
      })(_Direction || (_Direction = {}));

      var _McGutterDirective = /*#__PURE__*/function () {
        function _McGutterDirective(elementRef, renderer) {
          _classCallCheck(this, _McGutterDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this._direction = _Direction.Vertical;
          this._order = 0;
          this._size = 6;
          this.dragged = false;
        }

        _createClass(_McGutterDirective, [{
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(direction) {
            this._direction = direction;
          }
        }, {
          key: "order",
          get: function get() {
            return this._order;
          },
          set: function set(order) {
            this._order = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(order);
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(size) {
            this._size = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(size);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setStyle("flex-basis"
            /* FlexBasis */
            , (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceCssPixelValue)(this.size));
            this.setStyle(this.isVertical() ? "height"
            /* Height */
            : "width"
            /* Width */
            , (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceCssPixelValue)(this.size));
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
        }, {
          key: "isVertical",
          value: function isVertical() {
            return this.direction === _Direction.Vertical;
          }
        }, {
          key: "setStyle",
          value: function setStyle(property, value) {
            this.renderer.setStyle(this.elementRef.nativeElement, property, value);
          }
        }]);

        return _McGutterDirective;
      }();
      /** @nocollapse */


      _McGutterDirective.ɵfac = function McGutterDirective_Factory(t) {
        return new (t || _McGutterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };
      /** @nocollapse */


      _McGutterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _McGutterDirective,
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
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McGutterDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'mc-gutter',
            host: {
              "class": 'mc-gutter',
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

      var _McSplitterComponent = /*#__PURE__*/function () {
        function _McSplitterComponent(elementRef, changeDetectorRef, ngZone, renderer) {
          _classCallCheck(this, _McSplitterComponent);

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

        _createClass(_McSplitterComponent, [{
          key: "hideGutters",
          get: function get() {
            return this._hideGutters;
          },
          set: function set(value) {
            this._hideGutters = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
          }
        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(direction) {
            this._direction = direction;
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(disabled) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(disabled);
          }
        }, {
          key: "gutterSize",
          get: function get() {
            return this._gutterSize;
          },
          set: function set(gutterSize) {
            var size = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(gutterSize);
            this._gutterSize = size > 0 ? size : this.gutterSize;
          }
        }, {
          key: "addArea",
          value: function addArea(area) {
            var index = this.areas.length;
            var order = index * this.areaPositionDivider;
            var size = area.getSize();
            area.setOrder(order);
            this.areas.push({
              area: area,
              index: index,
              order: order,
              initialSize: size
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.direction) {
              this.direction = _Direction.Horizontal;
            }

            this.setStyle("flex-direction"
            /* FlexDirection */
            , this.isVertical() ? 'column' : 'row');
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event, leftAreaIndex, rightAreaIndex) {
            var _this = this;

            if (this.disabled) {
              return;
            }

            event.preventDefault();
            var leftArea = this.areas[leftAreaIndex];
            var rightArea = this.areas[rightAreaIndex];
            var startPoint = {
              x: event.screenX,
              y: event.screenY
            };
            leftArea.initialSize = leftArea.area.getSize();
            rightArea.initialSize = rightArea.area.getSize();
            this.areas.forEach(function (item) {
              var size = item.area.getSize();
              item.area.disableFlex();
              item.area.setSize(size);
            });
            this.ngZone.runOutsideAngular(function () {
              _this.listeners.push(_this.renderer.listen('document', 'mouseup', function () {
                return _this.onMouseUp();
              }));
            });
            this.ngZone.runOutsideAngular(function () {
              _this.listeners.push(_this.renderer.listen('document', 'mousemove', function (e) {
                return _this.onMouseMove(e, startPoint, leftArea, rightArea);
              }));
            });
            this.isDragging = true;
          }
        }, {
          key: "removeArea",
          value: function removeArea(area) {
            var indexToRemove = -1;
            this.areas.some(function (item, index) {
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
        }, {
          key: "isVertical",
          value: function isVertical() {
            return this.direction === _Direction.Vertical;
          }
        }, {
          key: "updateGutter",
          value: function updateGutter() {
            var _this2 = this;

            this.gutters.forEach(function (gutter) {
              if (gutter.dragged) {
                gutter.dragged = false;

                _this2.changeDetectorRef.detectChanges();
              }
            });
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(event, startPoint, leftArea, rightArea) {
            if (!this.isDragging || this.disabled) {
              return;
            }

            var endPoint = {
              x: event.screenX,
              y: event.screenY
            };
            var offset = this.isVertical() ? startPoint.y - endPoint.y : startPoint.x - endPoint.x;
            var newLeftAreaSize = leftArea.initialSize - offset;
            var newRightAreaSize = rightArea.initialSize + offset;
            var minLeftAreaSize = leftArea.area.getMinSize();
            var minRightAreaSize = rightArea.area.getMinSize();

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
        }, {
          key: "onMouseUp",
          value: function onMouseUp() {
            while (this.listeners.length > 0) {
              var unsubscribe = this.listeners.pop();

              if (unsubscribe) {
                unsubscribe();
              }
            }

            this.isDragging = false;
            this.updateGutter();
          }
        }, {
          key: "setStyle",
          value: function setStyle(property, value) {
            this.renderer.setStyle(this.elementRef.nativeElement, property, value);
          }
        }]);

        return _McSplitterComponent;
      }();
      /** @nocollapse */


      _McSplitterComponent.ɵfac = function McSplitterComponent_Factory(t) {
        return new (t || _McSplitterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };
      /** @nocollapse */


      _McSplitterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _McSplitterComponent,
        selectors: [["mc-splitter"]],
        viewQuery: function McSplitterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_McGutterDirective, 5);
          }

          if (rf & 2) {
            var _t;

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
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _McGutterDirective],
        styles: [".mc-splitter{display:flex;flex-wrap:nowrap;align-items:stretch;overflow:hidden}.mc-splitter .mc-splitter-area{overflow:hidden}.mc-gutter{display:flex;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;overflow:hidden}.mc-gutter.mc-gutter_vertical>.mc-icon{transform:rotate(90deg)}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McSplitterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mc-splitter',
            exportAs: 'mcSplitter',
            host: {
              "class": 'mc-splitter'
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
            args: [_McGutterDirective]
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

      var _McSplitterAreaDirective = /*#__PURE__*/function () {
        function _McSplitterAreaDirective(elementRef, renderer, splitter) {
          _classCallCheck(this, _McSplitterAreaDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.splitter = splitter;
        }

        _createClass(_McSplitterAreaDirective, [{
          key: "disableFlex",
          value: function disableFlex() {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'flex');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.splitter.addArea(this);
            this.removeStyle("max-width"
            /* MaxWidth */
            );

            if (this.splitter.direction === _Direction.Vertical) {
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
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.splitter.removeArea(this);
          }
        }, {
          key: "setOrder",
          value: function setOrder(order) {
            this.setStyle("order"
            /* Order */
            , order);
          }
        }, {
          key: "setSize",
          value: function setSize(size) {
            if (size) {
              var sz = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(size);
              this.setStyle(this.getSizeProperty(), (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceCssPixelValue)(sz));
            }
          }
        }, {
          key: "getSize",
          value: function getSize() {
            return this.elementRef.nativeElement[this.getOffsetSizeProperty()];
          }
        }, {
          key: "getMinSize",
          value: function getMinSize() {
            var styles = getComputedStyle(this.elementRef.nativeElement);
            return parseFloat(styles[this.getMinSizeProperty()]);
          }
        }, {
          key: "isVertical",
          value: function isVertical() {
            return this.splitter.direction === _Direction.Vertical;
          }
        }, {
          key: "getMinSizeProperty",
          value: function getMinSizeProperty() {
            return this.isVertical() ? "min-height"
            /* MinHeight */
            : "minWidth"
            /* MinWidth */
            ;
          }
        }, {
          key: "getOffsetSizeProperty",
          value: function getOffsetSizeProperty() {
            return this.isVertical() ? "offsetHeight"
            /* OffsetHeight */
            : "offsetWidth"
            /* OffsetWidth */
            ;
          }
        }, {
          key: "getSizeProperty",
          value: function getSizeProperty() {
            return this.isVertical() ? "height"
            /* Height */
            : "width"
            /* Width */
            ;
          }
        }, {
          key: "setStyle",
          value: function setStyle(style, value) {
            this.renderer.setStyle(this.elementRef.nativeElement, style, value);
          }
        }, {
          key: "removeStyle",
          value: function removeStyle(style) {
            this.renderer.removeStyle(this.elementRef.nativeElement, style);
          }
        }]);

        return _McSplitterAreaDirective;
      }();
      /** @nocollapse */


      _McSplitterAreaDirective.ɵfac = function McSplitterAreaDirective_Factory(t) {
        return new (t || _McSplitterAreaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_McSplitterComponent));
      };
      /** @nocollapse */


      _McSplitterAreaDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _McSplitterAreaDirective,
        selectors: [["", "mc-splitter-area", ""]],
        hostAttrs: [1, "mc-splitter-area"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McSplitterAreaDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[mc-splitter-area]',
            host: {
              "class": 'mc-splitter-area'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _McSplitterComponent
          }];
        }, null);
      })();

      var _McSplitterModule = function _McSplitterModule() {
        _classCallCheck(this, _McSplitterModule);
      };
      /** @nocollapse */


      _McSplitterModule.ɵfac = function McSplitterModule_Factory(t) {
        return new (t || _McSplitterModule)();
      };
      /** @nocollapse */


      _McSplitterModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _McSplitterModule,
        declarations: [_McGutterDirective, _McSplitterAreaDirective, _McSplitterComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIconModule],
        exports: [_McGutterDirective, _McSplitterAreaDirective, _McSplitterComponent]
      });
      /** @nocollapse */

      _McSplitterModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIconModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_McSplitterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_3__.McIconModule],
            exports: [_McGutterDirective, _McSplitterAreaDirective, _McSplitterComponent],
            declarations: [_McGutterDirective, _McSplitterAreaDirective, _McSplitterComponent]
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
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-splitter_js-es5.js.map