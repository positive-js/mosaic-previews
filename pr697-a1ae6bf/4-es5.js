(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
    /***/
    "DQSY":
    /*!************************************************************!*\
      !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-splitter.js ***!
      \************************************************************/

    /*! exports provided: Direction, McGutterDirective, McSplitterAreaDirective, McSplitterComponent, McSplitterModule */

    /***/
    function DQSY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Direction", function () {
        return Direction;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McGutterDirective", function () {
        return McGutterDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McSplitterAreaDirective", function () {
        return McSplitterAreaDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McSplitterComponent", function () {
        return McSplitterComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McSplitterModule", function () {
        return McSplitterModule;
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


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");

      var Direction;

      (function (Direction) {
        Direction["Horizontal"] = "horizontal";
        Direction["Vertical"] = "vertical";
      })(Direction || (Direction = {}));

      var McGutterDirective = /*#__PURE__*/function () {
        function McGutterDirective(elementRef, renderer) {
          _classCallCheck(this, McGutterDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this._direction = Direction.Vertical;
          this._order = 0;
          this._size = 6;
          this.dragged = false;
        }

        _createClass(McGutterDirective, [{
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
            this._order = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(order);
          }
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(size) {
            this._size = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setStyle("flex-basis"
            /* FlexBasis */
            , Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceCssPixelValue"])(this.size));
            this.setStyle(this.isVertical() ? "height"
            /* Height */
            : "width"
            /* Width */
            , Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceCssPixelValue"])(this.size));
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
            return this.direction === Direction.Vertical;
          }
        }, {
          key: "setStyle",
          value: function setStyle(property, value) {
            this.renderer.setStyle(this.elementRef.nativeElement, property, value);
          }
        }]);

        return McGutterDirective;
      }();

      McGutterDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'mc-gutter',
          host: {
            "class": 'mc-gutter',
            '[class.mc-gutter_vertical]': 'isVertical()',
            '[class.mc-gutter_dragged]': 'dragged',
            '(mousedown)': 'dragged = true'
          }
        }]
      }];
      /** @nocollapse */

      McGutterDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      McGutterDirective.propDecorators = {
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var McSplitterComponent = /*#__PURE__*/function () {
        function McSplitterComponent(elementRef, changeDetectorRef, ngZone, renderer) {
          _classCallCheck(this, McSplitterComponent);

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

        _createClass(McSplitterComponent, [{
          key: "hideGutters",
          get: function get() {
            return this._hideGutters;
          },
          set: function set(value) {
            this._hideGutters = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
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
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(disabled);
          }
        }, {
          key: "gutterSize",
          get: function get() {
            return this._gutterSize;
          },
          set: function set(gutterSize) {
            var size = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(gutterSize);
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
              this.direction = Direction.Horizontal;
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
            return this.direction === Direction.Vertical;
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

        return McSplitterComponent;
      }();

      McSplitterComponent.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'mc-splitter',
          exportAs: 'mcSplitter',
          host: {
            "class": 'mc-splitter'
          },
          preserveWhitespaces: false,
          template: "<ng-content></ng-content>\n\n<ng-template ngFor let-area [ngForOf]=\"areas\" let-index=\"index\" let-last=\"last\">\n    <mc-gutter *ngIf=\"last === false\"\n               [direction]=\"direction\"\n               [attr.disabled]=\"disabled || null\"\n               [style.display]=\"hideGutters ? 'none' : 'flex'\"\n               [size]=\"gutterSize\"\n               [order]=\"index * 2 + 1\"\n               (mousedown)=\"onMouseDown($event, index, index + 1)\">\n    </mc-gutter>\n</ng-template>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          styles: [".mc-splitter{display:flex;flex-wrap:nowrap;align-items:stretch;overflow:hidden}.mc-splitter .mc-splitter-area{overflow:hidden}.mc-gutter{display:flex;flex-grow:0;flex-shrink:0;justify-content:center;align-items:center;overflow:hidden}.mc-gutter.mc-gutter_vertical>.mc-icon{transform:rotate(90deg)}\n"]
        }]
      }];
      /** @nocollapse */

      McSplitterComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      };

      McSplitterComponent.propDecorators = {
        gutters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
          args: [McGutterDirective]
        }],
        hideGutters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        direction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };

      var McSplitterAreaDirective = /*#__PURE__*/function () {
        function McSplitterAreaDirective(elementRef, renderer, splitter) {
          _classCallCheck(this, McSplitterAreaDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.splitter = splitter;
        }

        _createClass(McSplitterAreaDirective, [{
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
              var sz = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceNumberProperty"])(size);
              this.setStyle(this.getSizeProperty(), Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceCssPixelValue"])(sz));
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
            return this.splitter.direction === Direction.Vertical;
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

        return McSplitterAreaDirective;
      }();

      McSplitterAreaDirective.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[mc-splitter-area]',
          host: {
            "class": 'mc-splitter-area'
          }
        }]
      }];
      /** @nocollapse */

      McSplitterAreaDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: McSplitterComponent
        }];
      };

      var McSplitterModule = function McSplitterModule() {
        _classCallCheck(this, McSplitterModule);
      };

      McSplitterModule.decorators = [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_2__["McIconModule"]],
          exports: [McGutterDirective, McSplitterAreaDirective, McSplitterComponent],
          declarations: [McGutterDirective, McSplitterAreaDirective, McSplitterComponent]
        }]
      }];
      /**
       * Generated bundle index. Do not edit.
       */

      /***/
    }
  }]);
})();
//# sourceMappingURL=4-es5.js.map