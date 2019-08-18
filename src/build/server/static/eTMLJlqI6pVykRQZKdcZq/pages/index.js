module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "HrG8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "production" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "LkAs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "OKNm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/styled-jsx/style.js
var style = __webpack_require__("YIwv");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/AppProvider.js + 1 modules
var AppProvider = __webpack_require__("dS7L");

// CONCATENATED MODULE: ./components/Console.js



function Console() {
  return external_react_default.a.createElement("div", {
    className: "jsx-3322764160"
  }, external_react_default.a.createElement(style_default.a, {
    id: "3322764160"
  }, ["*{box-sizing:border-box;}", ".case{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:2px;z-index:0;width:100%;height:100%;margin:0 auto;background-color:#26c5ff;opacity:1;box-shadow:inset 0px 1px 0px rgba(255,255,255,0.3), 12px 12px 20px 0 rgba(0,0,0,0.8);padding:1.2em;min-height:calc(100vh - 400px);}", ".display{overflow:hidden;width:100%;padding:1.2em;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative;background-color:#080808;opacity:1;z-index:5;border-radius:10px;-webkit-filter:drop-shadow(16px 16px 20px rgba(0,0,0,0.25));filter:drop-shadow(16px 16px 20px rgba(0,0,0,0.25));box-shadow:inset 0px 1px 1px 1px rgba(0,0,0,1), inset 2px -2px 1px rgba(255,255,255,0.35);}", ".panel-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;}", ".panel-header .logo{-webkit-flex:0;-ms-flex:0;flex:0;background-color:transparent;padding:2rem 0.5rem;position:relative;border-radius:10px;border:solid 1px black;}", ".panel-header .rest{-webkit-flex:1;-ms-flex:1;flex:1;border-radius:10px;border:solid 1px white;padding:1rem;position:relative;}", ".panel-header .rest p{font-size:0.8rem;line-height:1.4rem;}", ".panel-header .line{position:absolute;bottom:7px;right:0;left:0;display:inline-block;width:100%;background:white;height:3px;border-radius:50px;z-index:0;box-shadow:inset 0px 1px 1px 1px rgba(0,0,0,1), inset 2px -2px 1px rgba(255,255,255,0.35);z-index:0;}", ".panel-header small{display:block;position:relative;width:100%;color:white;-webkit-letter-spacing:2.5px;-moz-letter-spacing:2.5px;-ms-letter-spacing:2.5px;letter-spacing:2.5px;font-weight:bold;margin-bottom:20px;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;font-size:0.8rem;text-shadow:rgba(0,0,0,0.28) 1px 1px 0px;text-align:center;}", ".panel-header small>span{background-color:black;text-align:center;position:relative;padding:0px 10px;}", ".title{position:absolute;top:2px;margin-top:-10px;text-transform:uppercase;font-size:1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:Raleway,Arial,sans-serif;background-color:black;display:inline-block;font-weight:bold;padding:0px 15px;}", ".panel-header .rest p{font-size:0.8rem;line-height:1.4rem;}", ".panel-header .heading{font-family:'Computer';font-size:2rem;line-height:2rem;font-weight:700;-webkit-letter-spacing:0.0975rem;-moz-letter-spacing:0.0975rem;-ms-letter-spacing:0.0975rem;letter-spacing:0.0975rem;text-transform:uppercase;white-space:nowrap;-webkit-letter-spacing:9px;-moz-letter-spacing:9px;-ms-letter-spacing:9px;letter-spacing:9px;color:#ffffff;z-index:5;position:relative;margin-bottom:15px;text-shadow:1px 1px 1px rgba(0,0,0,0.2);text-align:center;white-space:pre-wrap;}", ".panel-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-radius:10px;border-width:1px;border-style:solid;border-color:white;border-image:initial;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;padding:1em;margin-bottom:20px;}", "@media (min-width:900px){.case{min-height:100%;}.panel-header{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.panel-header .heading{min-width:500px;}}"]), external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "case"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "display"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "panel"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "panel-child panel-output"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-3322764160" + " " + "title"
  }, "OUTPUT")), external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "panel-child panel-computer"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-3322764160" + " " + "title"
  }, "COMPUTER")), external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "panel-header"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "logo"
  }, external_react_default.a.createElement("h1", {
    className: "jsx-3322764160" + " " + "heading"
  }, "Serverless Computer"), external_react_default.a.createElement("small", {
    className: "jsx-3322764160" + " " + "sub-heading"
  }, external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "line"
  }), external_react_default.a.createElement("span", {
    className: "jsx-3322764160"
  }, "ALU using Azure Functions as logic gates"))), external_react_default.a.createElement("div", {
    className: "jsx-3322764160" + " " + "rest"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-3322764160" + " " + "title"
  }, "Description"), external_react_default.a.createElement("p", {
    className: "jsx-3322764160"
  }, "This is a 16-bit ALU's running in the cloud. Each logic gate is implemented as an", ' ', external_react_default.a.createElement("a", {
    href: "https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-overview?WT.mc_id=serverlesscomputer-website-alvidela",
    className: "jsx-3322764160"
  }, "Azure Function")), external_react_default.a.createElement("p", {
    className: "jsx-3322764160"
  }, "Set the 16-bit inputs X and Y below and submit your operations so they can be on the serverless ALU."), external_react_default.a.createElement("p", {
    className: "jsx-3322764160"
  }, external_react_default.a.createElement("span", {
    className: "jsx-3322764160"
  }, "built by @old_sound &", external_react_default.a.createElement("a", {
    href: "curcio.be",
    className: "jsx-3322764160"
  }, "@okbel")))))))));
}

/* harmony default export */ var components_Console = (Console);
// CONCATENATED MODULE: ./pages/index.js





function Help(props) {
  return external_react_default.a.createElement("div", {
    className: "help noise"
  }, external_react_default.a.createElement("div", {
    className: "window"
  }, external_react_default.a.createElement("h3", null, "Help"), external_react_default.a.createElement("ul", {
    className: "list"
  }, external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "X"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "The X 16-bit input")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "Y"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "The Y 16-bit input")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "Flags"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "The ALU takes the following flags")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "zx"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "zero the x input")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "nx"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "negate the x input")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "zy"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "zero the y input")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "ny"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "negate the y input")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "op"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "function code: 1 for X + Y, 0 for X & Y")), external_react_default.a.createElement("li", {
    className: "item"
  }, external_react_default.a.createElement("span", {
    className: "name"
  }, "no"), external_react_default.a.createElement("span", {
    className: "desc"
  }, "negate output"))), external_react_default.a.createElement("button", {
    onClick: props.closeHelpModal
  }, "Close Help")));
}

function App(props) {
  return external_react_default.a.createElement("div", {
    className: "wrapper"
  }, external_react_default.a.createElement("button", {
    onClick: props.showHelpModal
  }, "Show Help"), external_react_default.a.createElement(components_Console, null));
}

function Root(props) {
  return external_react_default.a.createElement(AppProvider["a" /* AppConsumer */], null, function (props) {
    return console.log(props) || external_react_default.a.createElement("div", {
      className: "jsx-1360771262"
    }, external_react_default.a.createElement(style_default.a, {
      id: "1360771262"
    }, ["@font-face{font-family:Computer;src:url('/static/Computerfont.ttf');}", "html,body{margin:0;padding:0;}", "body{min-height:100vh;background-color:transparent;overflow:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace;color:white;font-size:14px;background-color:#222222;background-image:radial-gradient( circle at 50% -100%, rgb(0,44,72) 30%, #ff00d922, #000000 );text-transform:uppercase;padding:0;margin:0;}", ".wrapper{position:relative;max-width:1080px;margin:0 auto;}", ".noise{background:linear-gradient( rgba(10,10,10,0.2), rgba(0,0,0,0.2) ), repeating-linear-gradient( 0deg, transparent, transparent 2px, black 3px, black 3px );}", ".help{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;background-color:rgba(23,23,23,0.48);padding:0.5rem;height:100vh;width:100%;}", ".help .window{border:solid 3px #7a7a7a;background-color:#171717;padding:1rem;width:500px;height:300px;margin:0 auto;border-radius:6px;top:-50%;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);}", ".help .name{padding-right:1rem;}", ".help .list{padding:0;margin:0;list-style:none;}", ".help .item{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}", "button{display:inline-block;font-size:0.88rem;color:rgb(255,255,255);text-align:center;text-transform:uppercase;padding-left:15px;padding-right:15px;line-height:30px;font-weight:bold;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;background:transparent;border-radius:6px;-webkit-transition:background-color 0.2s ease 0s;transition:background-color 0.2s ease 0s;margin:15px 0;}", "button:hover{background-color:rgb(255,255,255);color:#262626;cursor:pointer;}"]), props.helpModal && external_react_default.a.createElement(Help, props), external_react_default.a.createElement(App, props));
  });
}

/* harmony default export */ var pages = __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "YIwv":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("s1G/")


/***/ }),

/***/ "YKN3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "bMj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("t+lh");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("XzKa");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "bb60":
/***/ (function(module, exports) {

module.exports = require("@aspnet/signalr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dS7L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hHgk");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/AppProvider.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConsumer; });









var signalR = __webpack_require__("bb60");

var AppContext = external_react_default.a.createContext();

var AppProvider_AppProvider =
/*#__PURE__*/
function (_Component) {
  Object(inherits["a" /* default */])(AppProvider, _Component);

  function AppProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, AppProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(AppProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      helpModal: false,
      isDisabled: false,
      username: '',
      newMessage: '',
      messages: [],
      ready: false,
      checkedX: [],
      checkedY: [],
      output: '',
      flags: [],
      flagLabels: {
        1: 'zx',
        2: 'nx',
        3: 'zy',
        4: 'ny',
        5: 'op',
        6: 'no'
      }
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "calculate", function () {
      var _this$state = _this.state,
          checkedX = _this$state.checkedX,
          checkedY = _this$state.checkedY,
          flags = _this$state.flags;
      console.log(checkedX, checkedY, flags);
      sendMessage(checkedX, checkedY, flags);
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "update", function () {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.setState(update);
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "showHelpModal", function () {
      _this.setState({
        helpModal: true
      });
    });

    _defineProperty(Object(assertThisInitialized["a" /* default */])(_this), "closeHelpModal", function () {
      _this.setState({
        helpModal: false
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(AppProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var newMessage = this.state.newMessage;
      var connection = new signalR.HubConnectionBuilder().withUrl("/api").configureLogging(signalR.LogLevel.Information).build();
      connection.on('newMessage', newMessage);
      connection.onclose(function () {
        return console.log('disconnected');
      });
      console.log('connecting...');
      connection.start().then(function () {
        return _this2.update({
          ready: true
        });
      }).catch(console.error);
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(AppContext.Provider, {
        value: {
          helpModal: this.state.helpModal,
          showHelpModal: this.showHelpModal,
          closeHelpModal: this.closeHelpModal
        }
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(external_react_["Component"]);

var AppConsumer = AppContext.Consumer;
/* harmony default export */ var components_AppProvider = __webpack_exports__["b"] = (AppProvider_AppProvider);


/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hZod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jDdP");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "s1G/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__("cDcd");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__("uVoP"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "tEuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("6Ndq");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("OKNm");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "uVoP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__("zcKR"));

var _stylesheet = _interopRequireDefault(__webpack_require__("HrG8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zcKR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ })

/******/ });