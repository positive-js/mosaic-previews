(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./packages/docs/src/highlightjs/material-light.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./packages/docs/src/highlightjs/material-light.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/*\nOrginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em; }\n.hljs,\n.docs-example-source-copy {\n  background: #fdf6e3;\n  color: #657b83; }\n.hljs-shadow {\n  position: absolute;\n  bottom: 0;\n  margin: 0;\n  left: 0;\n  height: 44px;\n  width: 100%;\n  opacity: 1;\n  background: -webkit-gradient(linear, left bottom, left top, from(#fdf6e3), color-stop(50%, rgba(253, 246, 227, 0.5)), to(rgba(253, 246, 227, 0)));\n  background: linear-gradient(0deg, #fdf6e3 0%, rgba(253, 246, 227, 0.5) 50%, rgba(253, 246, 227, 0) 100%); }\n.hljs-shadow_hidden {\n    opacity: 0; }\n.hljs-line-numbers {\n  background-color: #EDE7D6;\n  color: #B2B7B3; }\n.hljs-comment,\n.hljs-quote {\n  color: #93a1a1; }\n/* Solarized Green */\n.hljs-keyword,\n.hljs-selector-tag,\n.hljs-addition {\n  color: #859900; }\n/* Solarized Cyan */\n.hljs-number,\n.hljs-string,\n.hljs-meta .hljs-meta-string,\n.hljs-literal,\n.hljs-doctag,\n.hljs-regexp {\n  color: #2aa198; }\n/* Solarized Blue */\n.hljs-title,\n.hljs-section,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class {\n  color: #268bd2; }\n/* Solarized Yellow */\n.hljs-attribute,\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-class .hljs-title,\n.hljs-type {\n  color: #b58900; }\n/* Solarized Orange */\n.hljs-symbol,\n.hljs-bullet,\n.hljs-subst,\n.hljs-meta,\n.hljs-meta .hljs-keyword,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-link {\n  color: #cb4b16; }\n/* Solarized Red */\n.hljs-built_in,\n.hljs-deletion {\n  color: #dc322f; }\n.hljs-formula {\n  background: #eee8d5; }\n.hljs-emphasis {\n  font-style: italic; }\n.hljs-strong {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NpcmNsZWNpL21vc2FpYy9wYWNrYWdlcy9kb2NzL3NyYy9oaWdobGlnaHRqcy9tYXRlcmlhbC1saWdodC5zY3NzIiwicGFja2FnZXMvZG9jcy9zcmMvaGlnaGxpZ2h0anMvbWF0ZXJpYWwtbGlnaHQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0NFQztBREVEO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFHbEI7O0VBRUksbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpSkFBa0c7RUFBbEcsd0dBQWtHLEVBQUE7QUFFbEc7SUFDSSxVQUFVLEVBQUE7QUFJbEI7RUFDSSx5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0FBR2xCOztFQUVJLGNBQWMsRUFBQTtBQUdsQixvQkFBQTtBQUNBOzs7RUFHSSxjQUFjLEVBQUE7QUFHbEIsbUJBQUE7QUFDQTs7Ozs7O0VBTUksY0FBYyxFQUFBO0FBR2xCLG1CQUFBO0FBQ0E7Ozs7O0VBS0ksY0FBYyxFQUFBO0FBR2xCLHFCQUFBO0FBQ0E7Ozs7OztFQU1JLGNBQWMsRUFBQTtBQUdsQixxQkFBQTtBQUNBOzs7Ozs7OztFQVFJLGNBQWMsRUFBQTtBQUdsQixrQkFBQTtBQUNBOztFQUVJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksa0JBQWtCLEVBQUE7QUFHdEI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJwYWNrYWdlcy9kb2NzL3NyYy9oaWdobGlnaHRqcy9tYXRlcmlhbC1saWdodC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbk9yZ2luYWwgU3R5bGUgZnJvbSBldGhhbnNjaG9vbm92ZXIuY29tL3NvbGFyaXplZCAoYykgSmVyZW15IEh1bGwgPHNvdXJkcnVtc0BnbWFpbC5jb20+XG4qL1xuXG4uaGxqcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmhsanMsXG4uZG9jcy1leGFtcGxlLXNvdXJjZS1jb3B5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmRmNmUzO1xuICAgIGNvbG9yOiAjNjU3YjgzO1xufVxuXG4uaGxqcy1zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoI2ZkZjZlMywxKSAwJSwgcmdiYSgjZmRmNmUzLDAuNSkgNTAlLCByZ2JhKCNmZGY2ZTMsMCkgMTAwJSk7XG5cbiAgICAmX2hpZGRlbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxufVxuXG4uaGxqcy1saW5lLW51bWJlcnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFREU3RDY7XG4gICAgY29sb3I6ICNCMkI3QjM7XG59XG5cbi5obGpzLWNvbW1lbnQsXG4uaGxqcy1xdW90ZSB7XG4gICAgY29sb3I6ICM5M2ExYTE7XG59XG5cbi8qIFNvbGFyaXplZCBHcmVlbiAqL1xuLmhsanMta2V5d29yZCxcbi5obGpzLXNlbGVjdG9yLXRhZyxcbi5obGpzLWFkZGl0aW9uIHtcbiAgICBjb2xvcjogIzg1OTkwMDtcbn1cblxuLyogU29sYXJpemVkIEN5YW4gKi9cbi5obGpzLW51bWJlcixcbi5obGpzLXN0cmluZyxcbi5obGpzLW1ldGEgLmhsanMtbWV0YS1zdHJpbmcsXG4uaGxqcy1saXRlcmFsLFxuLmhsanMtZG9jdGFnLFxuLmhsanMtcmVnZXhwIHtcbiAgICBjb2xvcjogIzJhYTE5ODtcbn1cblxuLyogU29sYXJpemVkIEJsdWUgKi9cbi5obGpzLXRpdGxlLFxuLmhsanMtc2VjdGlvbixcbi5obGpzLW5hbWUsXG4uaGxqcy1zZWxlY3Rvci1pZCxcbi5obGpzLXNlbGVjdG9yLWNsYXNzIHtcbiAgICBjb2xvcjogIzI2OGJkMjtcbn1cblxuLyogU29sYXJpemVkIFllbGxvdyAqL1xuLmhsanMtYXR0cmlidXRlLFxuLmhsanMtYXR0cixcbi5obGpzLXZhcmlhYmxlLFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXG4uaGxqcy1jbGFzcyAuaGxqcy10aXRsZSxcbi5obGpzLXR5cGUge1xuICAgIGNvbG9yOiAjYjU4OTAwO1xufVxuXG4vKiBTb2xhcml6ZWQgT3JhbmdlICovXG4uaGxqcy1zeW1ib2wsXG4uaGxqcy1idWxsZXQsXG4uaGxqcy1zdWJzdCxcbi5obGpzLW1ldGEsXG4uaGxqcy1tZXRhIC5obGpzLWtleXdvcmQsXG4uaGxqcy1zZWxlY3Rvci1hdHRyLFxuLmhsanMtc2VsZWN0b3ItcHNldWRvLFxuLmhsanMtbGluayB7XG4gICAgY29sb3I6ICNjYjRiMTY7XG59XG5cbi8qIFNvbGFyaXplZCBSZWQgKi9cbi5obGpzLWJ1aWx0X2luLFxuLmhsanMtZGVsZXRpb24ge1xuICAgIGNvbG9yOiAjZGMzMjJmO1xufVxuXG4uaGxqcy1mb3JtdWxhIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOGQ1O1xufVxuXG4uaGxqcy1lbXBoYXNpcyB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaGxqcy1zdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIiwiLypcbk9yZ2luYWwgU3R5bGUgZnJvbSBldGhhbnNjaG9vbm92ZXIuY29tL3NvbGFyaXplZCAoYykgSmVyZW15IEh1bGwgPHNvdXJkcnVtc0BnbWFpbC5jb20+XG4qL1xuLmhsanMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMC41ZW07IH1cblxuLmhsanMsXG4uZG9jcy1leGFtcGxlLXNvdXJjZS1jb3B5IHtcbiAgYmFja2dyb3VuZDogI2ZkZjZlMztcbiAgY29sb3I6ICM2NTdiODM7IH1cblxuLmhsanMtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNmZGY2ZTMgMCUsIHJnYmEoMjUzLCAyNDYsIDIyNywgMC41KSA1MCUsIHJnYmEoMjUzLCAyNDYsIDIyNywgMCkgMTAwJSk7IH1cbiAgLmhsanMtc2hhZG93X2hpZGRlbiB7XG4gICAgb3BhY2l0eTogMDsgfVxuXG4uaGxqcy1saW5lLW51bWJlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFN0Q2O1xuICBjb2xvcjogI0IyQjdCMzsgfVxuXG4uaGxqcy1jb21tZW50LFxuLmhsanMtcXVvdGUge1xuICBjb2xvcjogIzkzYTFhMTsgfVxuXG4vKiBTb2xhcml6ZWQgR3JlZW4gKi9cbi5obGpzLWtleXdvcmQsXG4uaGxqcy1zZWxlY3Rvci10YWcsXG4uaGxqcy1hZGRpdGlvbiB7XG4gIGNvbG9yOiAjODU5OTAwOyB9XG5cbi8qIFNvbGFyaXplZCBDeWFuICovXG4uaGxqcy1udW1iZXIsXG4uaGxqcy1zdHJpbmcsXG4uaGxqcy1tZXRhIC5obGpzLW1ldGEtc3RyaW5nLFxuLmhsanMtbGl0ZXJhbCxcbi5obGpzLWRvY3RhZyxcbi5obGpzLXJlZ2V4cCB7XG4gIGNvbG9yOiAjMmFhMTk4OyB9XG5cbi8qIFNvbGFyaXplZCBCbHVlICovXG4uaGxqcy10aXRsZSxcbi5obGpzLXNlY3Rpb24sXG4uaGxqcy1uYW1lLFxuLmhsanMtc2VsZWN0b3ItaWQsXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyB7XG4gIGNvbG9yOiAjMjY4YmQyOyB9XG5cbi8qIFNvbGFyaXplZCBZZWxsb3cgKi9cbi5obGpzLWF0dHJpYnV0ZSxcbi5obGpzLWF0dHIsXG4uaGxqcy12YXJpYWJsZSxcbi5obGpzLXRlbXBsYXRlLXZhcmlhYmxlLFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUsXG4uaGxqcy10eXBlIHtcbiAgY29sb3I6ICNiNTg5MDA7IH1cblxuLyogU29sYXJpemVkIE9yYW5nZSAqL1xuLmhsanMtc3ltYm9sLFxuLmhsanMtYnVsbGV0LFxuLmhsanMtc3Vic3QsXG4uaGxqcy1tZXRhLFxuLmhsanMtbWV0YSAuaGxqcy1rZXl3b3JkLFxuLmhsanMtc2VsZWN0b3ItYXR0cixcbi5obGpzLXNlbGVjdG9yLXBzZXVkbyxcbi5obGpzLWxpbmsge1xuICBjb2xvcjogI2NiNGIxNjsgfVxuXG4vKiBTb2xhcml6ZWQgUmVkICovXG4uaGxqcy1idWlsdF9pbixcbi5obGpzLWRlbGV0aW9uIHtcbiAgY29sb3I6ICNkYzMyMmY7IH1cblxuLmhsanMtZm9ybXVsYSB7XG4gIGJhY2tncm91bmQ6ICNlZWU4ZDU7IH1cblxuLmhsanMtZW1waGFzaXMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLmhsanMtc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./packages/docs/src/main.scss":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./packages/docs/src/main.scss ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./packages/docs/src/highlightjs/material-light.scss":
/*!***********************************************************!*\
  !*** ./packages/docs/src/highlightjs/material-light.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./material-light.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./packages/docs/src/highlightjs/material-light.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./packages/docs/src/main.scss":
/*!*************************************!*\
  !*** ./packages/docs/src/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./main.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./packages/docs/src/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 2:
/*!***********************************************************************************************!*\
  !*** multi ./packages/docs/src/main.scss ./packages/docs/src/highlightjs/material-light.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/circleci/mosaic/packages/docs/src/main.scss */"./packages/docs/src/main.scss");
module.exports = __webpack_require__(/*! /home/circleci/mosaic/packages/docs/src/highlightjs/material-light.scss */"./packages/docs/src/highlightjs/material-light.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map