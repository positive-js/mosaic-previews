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

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./packages/docs/src/highlightjs/material-light.scss":
/*!***********************************************************!*\
  !*** ./packages/docs/src/highlightjs/material-light.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../../node_modules/postcss-loader/src??embedded!../../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./material-light.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./packages/docs/src/highlightjs/material-light.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./packages/docs/src/main.scss":
/*!*************************************!*\
  !*** ./packages/docs/src/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./main.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./packages/docs/src/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!***********************************************************************************************!*\
  !*** multi ./packages/docs/src/main.scss ./packages/docs/src/highlightjs/material-light.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/circleci/mosaic/packages/docs/src/main.scss */"./packages/docs/src/main.scss");
module.exports = __webpack_require__(/*! /home/circleci/mosaic/packages/docs/src/highlightjs/material-light.scss */"./packages/docs/src/highlightjs/material-light.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map