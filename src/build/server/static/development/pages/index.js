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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/string-hash/index.js":
/*!********************************************!*\
  !*** ../node_modules/string-hash/index.js ***!
  \********************************************/
/*! no static exports found */
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


/***/ }),

/***/ "../node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!*********************************************************!*\
  !*** ../node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \*********************************************************/
/*! no static exports found */
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
var isProd = process.env && "development" === 'production';

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

/***/ "../node_modules/styled-jsx/dist/style.js":
/*!************************************************!*\
  !*** ../node_modules/styled-jsx/dist/style.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "../node_modules/styled-jsx/dist/stylesheet-registry.js"));

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

/***/ "../node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!**************************************************************!*\
  !*** ../node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "../node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "../node_modules/styled-jsx/dist/lib/stylesheet.js"));

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

/***/ "../node_modules/styled-jsx/style.js":
/*!*******************************************!*\
  !*** ../node_modules/styled-jsx/style.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "../node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./components/AppProvider.js":
/*!***********************************!*\
  !*** ./components/AppProvider.js ***!
  \***********************************/
/*! exports provided: default, AppConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConsumer", function() { return AppConsumer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/Users/belencurcio/Develop/ServerlessComputer/src/components/AppProvider.js";


var signalR = __webpack_require__(/*! @aspnet/signalr */ "@aspnet/signalr");

var AppContext = react__WEBPACK_IMPORTED_MODULE_7___default.a.createContext();

var AppProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AppProvider, _Component);

  function AppProvider() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AppProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calculate", function () {
      var _this$state = _this.state,
          checkedX = _this$state.checkedX,
          checkedY = _this$state.checkedY,
          flags = _this$state.flags;
      console.log(checkedX, checkedY, flags);
      sendMessage(checkedX, checkedY, flags);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "update", function () {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _this.setState(update);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "showHelpModal", function () {
      _this.setState({
        helpModal: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "closeHelpModal", function () {
      _this.setState({
        helpModal: false
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppProvider, [{
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(AppContext.Provider, {
        value: {
          helpModal: this.state.helpModal,
          showHelpModal: this.showHelpModal,
          closeHelpModal: this.closeHelpModal
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return AppProvider;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var AppConsumer = AppContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (AppProvider);


/***/ }),

/***/ "./components/Console.js":
/*!*******************************!*\
  !*** ./components/Console.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Light__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Light */ "./components/Light.js");
var _jsxFileName = "/Users/belencurcio/Develop/ServerlessComputer/src/components/Console.js";




function Input() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
}

function Console() {
  var dummyData = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1105458767",
    __self: this
  }, "*{box-sizing:border-box;}.case{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-radius:2px;z-index:0;width:100%;height:100%;margin:0 auto;background-color:#26c5ff;opacity:1;box-shadow:inset 0px 1px 0px rgba(255,255,255,0.3), 12px 12px 20px 0 rgba(0,0,0,0.8);padding:1.2em;min-height:calc(100vh - 400px);}.display{overflow:hidden;width:100%;padding:1.2em;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;position:relative;background-color:#080808;opacity:1;z-index:5;border-radius:10px;-webkit-filter:drop-shadow(16px 16px 20px rgba(0,0,0,0.25));filter:drop-shadow(16px 16px 20px rgba(0,0,0,0.25));box-shadow:inset 0px 1px 1px 1px rgba(0,0,0,1), inset 2px -2px 1px rgba(255,255,255,0.35);}.panel-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:auto;}.panel-header .logo{-webkit-flex:0;-ms-flex:0;flex:0;background-color:transparent;padding:2rem 0.5rem;position:relative;border-radius:10px;border:solid 1px black;}.panel-header .rest{-webkit-flex:1;-ms-flex:1;flex:1;border-radius:10px;border:solid 1px white;padding:1rem;position:relative;}.panel-header .rest p{font-size:0.8rem;line-height:1.4rem;}.panel-header .line{position:absolute;bottom:7px;right:0;left:0;display:inline-block;width:100%;background:white;height:3px;border-radius:50px;z-index:0;box-shadow:inset 0px 1px 1px 1px rgba(0,0,0,1), inset 2px -2px 1px rgba(255,255,255,0.35);z-index:0;}.panel-header small{display:block;position:relative;width:100%;color:white;-webkit-letter-spacing:2.5px;-moz-letter-spacing:2.5px;-ms-letter-spacing:2.5px;letter-spacing:2.5px;font-weight:bold;margin-bottom:20px;font-family:Helvetica,Arial,sans-serif;text-transform:uppercase;font-size:0.8rem;text-shadow:rgba(0,0,0,0.28) 1px 1px 0px;text-align:center;}.panel-header small>span{background-color:black;text-align:center;position:relative;padding:0px 10px;}.title{position:absolute;top:2px;margin-top:-10px;text-transform:uppercase;font-size:1rem;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;font-family:Raleway,Arial,sans-serif;background-color:black;display:inline-block;font-weight:bold;padding:0px 15px;}.panel-header .rest p{font-size:0.8rem;line-height:1.4rem;}.panel-header .heading{font-family:'Computer';font-size:2rem;line-height:2rem;font-weight:700;-webkit-letter-spacing:0.0975rem;-moz-letter-spacing:0.0975rem;-ms-letter-spacing:0.0975rem;letter-spacing:0.0975rem;text-transform:uppercase;white-space:nowrap;-webkit-letter-spacing:9px;-moz-letter-spacing:9px;-ms-letter-spacing:9px;letter-spacing:9px;color:#ffffff;z-index:5;position:relative;margin-bottom:15px;text-shadow:1px 1px 1px rgba(0,0,0,0.2);text-align:center;white-space:pre-wrap;}.panel-child{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;position:relative;border-radius:10px;border-width:1px;border-style:solid;border-color:white;border-image:initial;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;padding:1em;margin-bottom:20px;}.grid-output{font-size:3px;}.panel-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;border-radius:10px;border:solid 1px white;-webkit-flex:1;-ms-flex:1;flex:1;padding:1em;position:relative;}.panel-row .side,.panel-row .main{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.panel-row .side{-webkit-flex:0;-ms-flex:0;flex:0;-webkit-flex-basis:100px;-ms-flex-preferred-size:100px;flex-basis:100px;border-left:solid 1px white;padding:20px;}@media (min-width:900px){.case{min-height:100%;}.panel-header{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.panel-header .heading{min-width:500px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxlbmN1cmNpby9EZXZlbG9wL1NlcnZlcmxlc3NDb21wdXRlci9zcmMvY29tcG9uZW50cy9Db25zb2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN5QixBQUdpQyxBQUlULEFBZUcsQUFnQkgsQUFPTixBQVNBLEFBUVUsQUFLQyxBQWdCSixBQWVTLEFBT0wsQUFjRCxBQUtNLEFBa0JWLEFBZUMsQUFJRCxBQVlOLEFBTUEsQUFRVyxBQUlHLEFBSUgsY0EvR0EsQUEwRXBCLEVBdklhLEFBcUtYLEFBUUEsQ0FySW1CLEFBeURBLENBcERSLEFBc0NILElBdEdWLENBK0ZvQixBQTBCSCxHQWxCRSxDQW5GSCxFQTZDTixHQWdCRyxDQXZDa0IsQUFTVixBQXVITixBQU1JLEdBcEhuQixBQXlEQSxDQW5EUyxDQXdEVSxHQXJHYSxBQTJFWixFQWROLEFBc0JhLENBckNKLFFBZkUsR0ErQkYsQUF3Q0wsSUExQkMsR0F0REcsR0F5QlQsR0FxQ0ksQ0FtRmYsRUFoRXlCLEdBeEhQLEFBK0JJLEFBd0dILEFBbUJBLENBekdOLENBZ0JJLEFBNkJuQixNQXREb0IsQ0E4REMsS0FwREQsSUFqRFIsQ0FpRUMsT0F6QlEsRUF2Q1IsRUFpRVEsQ0EwR1MsQ0ExSDlCLENBb0h3QixNQXBLVixNQXVDVyxJQTBCYixFQWhFSSxRQWtFZ0MsQUF3R2pDLE1BektZLEdBc0MzQixDQXpCNkIsQUFzSGhCLEFBbUJBLEdBb0JiLE1BL0lhLEVBeUdPLEFBbUJDLEVBNUVGLE9BL0NMLENBM0JGLFFBb0lTLENBekRBLEFBNEVJLENBckpjLENBMEJ2QyxDQXFFeUMsU0FpRXpDLEdBL0MyQixHQWtCUixDQXpEd0IsSUE0RWxDLFlBbEJZLEtBcENJLEFBa0JKLFVBbkRULElBc0VTLEVBa0JQLEVBNUVhLENBd0NOLENBbkRyQixHQWlDdUIsS0F1REgsS0FsQkcsRUEzSEgsUUFpRUQsQ0FzQkEsRUFqR0gsQUF3SmhCLE9BN0kyQixDQTJIYixNQXJJbUIsQUEyRWEsQ0FzQjNCLGlCQXRGUCxBQXVGWixVQXRGWSxHQVhaLE9BWXFCLEdBK0RELENBMEROLFVBcEJFLEVBcUJLLEdBekhvQyxFQStEekQsT0FzQ1ksT0FxQlosR0FwQm9CLGtCQUNDLG1CQUN3Qix3Q0FDekIsZ0JBdkc0QixFQXdHekIscUJBQ3ZCLG1FQXhHQSIsImZpbGUiOiIvVXNlcnMvYmVsZW5jdXJjaW8vRGV2ZWxvcC9TZXJ2ZXJsZXNzQ29tcHV0ZXIvc3JjL2NvbXBvbmVudHMvQ29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaWdodCBmcm9tICcuLi9jb21wb25lbnRzL0xpZ2h0JztcblxuZnVuY3Rpb24gSW5wdXQoKSB7XG4gIHJldHVybiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz47XG59XG5mdW5jdGlvbiBDb25zb2xlKCkge1xuICB2YXIgZHVtbXlEYXRhID0gWzAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDFdO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhc2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmM1ZmY7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyksXG4gICAgICAgICAgICAxMnB4IDEycHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjJlbTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDAwcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpc3BsYXkge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMS4yZW07XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDE2cHggMTZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDEpLFxuICAgICAgICAgICAgaW5zZXQgMnB4IC0ycHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gICAgICAgIH1cblxuICAgICAgICAucGFuZWwtaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLWhlYWRlciAubG9nbyB7XG4gICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAycmVtIDAuNXJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1oZWFkZXIgLnJlc3Qge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1oZWFkZXIgLnJlc3QgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1oZWFkZXIgLmxpbmUge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDdweDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMSksXG4gICAgICAgICAgICBpbnNldCAycHggLTJweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcbiAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLWhlYWRlciBzbWFsbCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMi41cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgIHRleHQtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjgpIDFweCAxcHggMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1oZWFkZXIgc21hbGwgPiBzcGFuIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICBmb250LWZhbWlseTogUmFsZXdheSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLWhlYWRlciAucmVzdCBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLWhlYWRlciAuaGVhZGluZyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb21wdXRlcic7XG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDk3NXJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDlweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1jaGlsZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XG4gICAgICAgICAgZmxleDogMSAxIDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtb3V0cHV0IHtcbiAgICAgICAgICBmb250LXNpemU6IDNweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1yb3cge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wYW5lbC1yb3cgLnNpZGUsXG4gICAgICAgIC5wYW5lbC1yb3cgLm1haW4ge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhbmVsLXJvdyAuc2lkZSB7XG4gICAgICAgICAgZmxleDogMDtcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxMDBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogc29saWQgMXB4IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgICAuY2FzZSB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wYW5lbC1oZWFkZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGFuZWwtaGVhZGVyIC5oZWFkaW5nIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbC1jaGlsZCBwYW5lbC1vdXRwdXRcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+T1VUUFVUPC9oMz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLW91dHB1dFwiPlxuICAgICAgICAgICAgICAgIHtkdW1teURhdGEubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8TGlnaHQga2V5PXtpfSBzdGF0dXM9eyEhdn0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtY2hpbGQgcGFuZWwtY29tcHV0ZXJcIj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+Q09NUFVURVI8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLXJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIngtaW5wdXRcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+WCZuYnNwOzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtkdW1teURhdGEubWFwKCh2LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0IGtleT17aX0gc3RhdHVzPXshIXZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwieS1pbnB1dFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5ZJm5ic3A7PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge2R1bW15RGF0YS5tYXAoKHYsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQga2V5PXtpfSBzdGF0dXM9eyEhdn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkZsYWc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ3NcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWdzLTFcIiB2YWx1ZT1cIjFcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxhZ3MtMVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB6eFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ3NcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWdzLTJcIiB2YWx1ZT1cIjJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxhZ3MtMlwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBueFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ3NcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWdzLTNcIiB2YWx1ZT1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxhZ3MtM1wiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICB6eVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ3NcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWdzLTRcIiB2YWx1ZT1cIjRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxhZ3MtNFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBueVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ3NcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWdzLTVcIiB2YWx1ZT1cIjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxhZ3MtNVwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBvcFxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZmxhZ3NcIiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsYWdzLTZcIiB2YWx1ZT1cIjZcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxhZ3MtNlwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICBub1xuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlNlcnZlcmxlc3MgQ29tcHV0ZXI8L2gxPlxuICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJzdWItaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPkFMVSB1c2luZyBBenVyZSBGdW5jdGlvbnMgYXMgbG9naWMgZ2F0ZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdFwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPkRlc2NyaXB0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSAxNi1iaXQgQUxVJ3MgcnVubmluZyBpbiB0aGUgY2xvdWQuIEVhY2ggbG9naWMgZ2F0ZVxuICAgICAgICAgICAgICAgICAgaXMgaW1wbGVtZW50ZWQgYXMgYW57JyAnfVxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2F6dXJlL2F6dXJlLWZ1bmN0aW9ucy9kdXJhYmxlL2R1cmFibGUtZnVuY3Rpb25zLW92ZXJ2aWV3P1dULm1jX2lkPXNlcnZlcmxlc3Njb21wdXRlci13ZWJzaXRlLWFsdmlkZWxhXCI+XG4gICAgICAgICAgICAgICAgICAgIEF6dXJlIEZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgU2V0IHRoZSAxNi1iaXQgaW5wdXRzIFggYW5kIFkgYmVsb3cgYW5kIHN1Ym1pdCB5b3VyIG9wZXJhdGlvbnNcbiAgICAgICAgICAgICAgICAgIHNvIHRoZXkgY2FuIGJlIG9uIHRoZSBzZXJ2ZXJsZXNzIEFMVS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgYnVpbHQgYnkgQG9sZF9zb3VuZCAmIDxhIGhyZWY9XCJjdXJjaW8uYmVcIj5Ab2tiZWw8L2E+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlO1xuIl19 */\n/*@ sourceURL=/Users/belencurcio/Develop/ServerlessComputer/src/components/Console.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "case",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "display",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "panel-child panel-output",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1105458767" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "OUTPUT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "grid-output",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, dummyData.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Light__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      status: !!v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "panel-child panel-computer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1105458767" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "COMPUTER"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "panel-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "x-input",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "X\xA0"), dummyData.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: i,
      status: !!v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "y-input",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "Y\xA0"), dummyData.map(function (v, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
      key: i,
      status: !!v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "side",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Flag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "flags",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "flags-1",
    value: "1",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: "flags-1",
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "zx")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "flags",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "flags-2",
    value: "2",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: "flags-2",
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, "nx")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "flags",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "flags-3",
    value: "3",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: "flags-3",
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "zy")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "flags",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "flags-4",
    value: "4",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: "flags-4",
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, "ny")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "flags",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "flags-5",
    value: "5",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: "flags-5",
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, "op")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "flags",
    className: "jsx-1105458767" + " " + "form-check form-check-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "flags-6",
    value: "6",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    for: "flags-6",
    className: "jsx-1105458767" + " " + "form-check-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, "no"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "panel-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1105458767" + " " + "heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Serverless Computer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    className: "jsx-1105458767" + " " + "sub-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "ALU using Azure Functions as logic gates"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1105458767" + " " + "rest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1105458767" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, "This is a 16-bit ALU's running in the cloud. Each logic gate is implemented as an", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://docs.microsoft.com/azure/azure-functions/durable/durable-functions-overview?WT.mc_id=serverlesscomputer-website-alvidela",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Azure Function")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "Set the 16-bit inputs X and Y below and submit your operations so they can be on the serverless ALU."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, "built by @old_sound & ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "curcio.be",
    className: "jsx-1105458767",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "@okbel")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Console);

/***/ }),

/***/ "./components/Light.js":
/*!*****************************!*\
  !*** ./components/Light.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/belencurcio/Develop/ServerlessComputer/src/components/Light.js";



function Light(_ref) {
  var status = _ref.status;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3406257388" + " " + "s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3406257388",
    __self: this
  }, ".s{display:inline-block;margin:20px;margin-top:100px;position:relative;min-width:20px;}.s span{display:block;-webkit-transition:top 0.2s;transition:top 0.2s;}.led{position:absolute;top:-50px;border-radius:10em;}.led-border{border:0.2em solid black;border-radius:4em;}.led-light{border-radius:6rem;box-shadow:0 0 0.5em rgba(255,255,255,0.5) inset;}.led-glow{width:6em;height:6em;position:relative;border-radius:10em;}.led-glow:before{content:'';display:block;width:6em;height:6em;position:absolute;top:0.1em;left:0.1em;background:rgba(255,255,255,0.2);border-radius:10em;-webkit-box-shadow:0 0 1em rgba(255,255,255,0.75);-moz-box-shadow:0 0 1em rgba(255,255,255,0.75);box-shadow:0 0 1em rgba(255,255,255,0.75);opacity:0.5;}.led-glowx:after{content:'';display:block;width:0;height:0;position:absolute;top:0.3em;left:0.7em;opacity:0.2;-webkit-filter:alpha(opacity=20);filter:alpha(opacity=20);border:1em solid #fff;border-color:transparent #fff transparent #fff;border-radius:10em;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.led:after{display:block;width:100%;position:absolute;left:0;color:#666;font-family:arial,verdana,sans-serif;font-weight:bold;text-align:center;text-shadow:0 0.1em rgba(0,0,0,0.7);}.led--red:after{content:'OUTPUT';font-size:0.5rem;-webkit-letter-spacing:1.2px;-moz-letter-spacing:1.2px;-ms-letter-spacing:1.2px;letter-spacing:1.2px;top:28px;left:-50%;-webkit-translate:transformX(-50%);translate:transformX(-50%);}.led.flag .led--red:after{content:'INPUT';left:-25%;}.led--red{border-top:0.1em solid rgba(237,28,36,0.2);border-bottom:0.1em solid rgba(255,255,255,0.25);-webkit-box-shadow:0 0 3em rgb(237,28,36);-moz-box-shadow:0 0 3em rgb(237,28,36);box-shadow:0 0 3em rgb(237,28,36);}.led--red .led-light{background:rgb(237,28,36);border:0.1em solid rgb(161,30,45);}.led--red .led-glow{background:#fff;background:rgba(255,255,255,0.3);-webkit-filter:alpha(opacity=30);filter:alpha(opacity=30);}.led--red.on{box-shadow:0 0 3em rgb(237,28,36);}.led.off .led-glow{background:rgba(0,0,0,0.34);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxlbmN1cmNpby9EZXZlbG9wL1NlcnZlcmxlc3NDb21wdXRlci9zcmMvY29tcG9uZW50cy9MaWdodC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHeUIsQUFHZ0MsQUFRUCxBQUtJLEFBTU8sQUFLTixBQUtULEFBT0MsQUFnQkEsQUFvQkcsQUFZRyxBQVNELEFBSzhCLEFBUWxCLEFBS1osQUFNb0IsQUFJTCxVQTNGcEIsQ0FPRyxBQWdCQSxHQTVDTSxBQWdFVCxFQXFCRCxBQWtCMEIsQ0EzQm5CLENBdkVQLENBVzBDLEVBeEJ4QyxBQThCTSxJQVhBLEFBa0JSLEFBZ0JGLEFBb0JVLENBcUJwQixBQVlzQyxFQTVGakIsQUEyR3JCLEtBeEhtQixBQXFEUixDQStCWSxBQWdDdkIsQ0EvRWEsSUFQUSxHQXdCRCxDQW5DcEIsQUFzRFMsQUF3QjZDLEdBM0RsQyxDQXhCcEIsRUFpRzJCLENBOUdQLEFBeUVQLFFBM0NiLEVBd0JZLEFBbURaLENBL0J5QyxDQW5FekMsRUErQlksSUFyQ0ssQUFzQmpCLEVBZ0NhLElBaEJBLE9BaUJDLEVBdERkLEVBc0NzQyxPQXlEUSxDQXhDbkIsS0FrQlIsU0FvQ25CLFFBbkNvQixHQW5DQyxlQW9Db0IsQ0FxQkUsQ0FkaEMsRUExQzRDLE9BMkMzQyxPQTNCWSxHQTRCSyxlQVI3QixJQW5CaUQsQUF3Q1gsY0F4RGMsb0JBeURwRCxTQWJBLElBM0JxQixjQWhCMEIsS0FpQmIsZ0NBQ0gsS0FqQmpCLFlBQ2QsWUFpQjhCLDRCQUNELDJCQUNILG9GQUMxQiIsImZpbGUiOiIvVXNlcnMvYmVsZW5jdXJjaW8vRGV2ZWxvcC9TZXJ2ZXJsZXNzQ29tcHV0ZXIvc3JjL2NvbXBvbmVudHMvTGlnaHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBMaWdodCh7IHN0YXR1cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzXCI+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWluLXdpZHRoOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnMgc3BhbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuMnM7XG4gICAgICAgIH1cblxuICAgICAgICAubGVkIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAtNTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZC1ib3JkZXIge1xuICAgICAgICAgIGJvcmRlcjogMC4yZW0gc29saWQgYmxhY2s7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZC1saWdodCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnJlbTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpIGluc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZC1nbG93IHtcbiAgICAgICAgICB3aWR0aDogNmVtO1xuICAgICAgICAgIGhlaWdodDogNmVtO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZC1nbG93OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDZlbTtcbiAgICAgICAgICBoZWlnaHQ6IDZlbTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwLjFlbTtcbiAgICAgICAgICBsZWZ0OiAwLjFlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBlbTtcbiAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxlZC1nbG93eDphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDAuM2VtO1xuICAgICAgICAgIGxlZnQ6IDAuN2VtO1xuICAgICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MjApO1xuICAgICAgICAgIGJvcmRlcjogMWVtIHNvbGlkICNmZmY7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBlbTtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAubGVkOmFmdGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmb250LWZhbWlseTogYXJpYWwsIHZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWQtLXJlZDphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ09VVFBVVCc7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICBsZWZ0OiAtNTAlO1xuICAgICAgICAgIHRyYW5zbGF0ZTogdHJhbnNmb3JtWCgtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWQuZmxhZyAubGVkLS1yZWQ6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICdJTlBVVCc7XG4gICAgICAgICAgbGVmdDogLTI1JTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWQtLXJlZCB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMC4xZW0gc29saWQgcmdiYSgyMzcsIDI4LCAzNiwgMC4yKTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjFlbSBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNlbSByZ2IoMjM3LCAyOCwgMzYpO1xuICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDNlbSByZ2IoMjM3LCAyOCwgMzYpO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzZW0gcmdiKDIzNywgMjgsIDM2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWQtLXJlZCAubGVkLWxpZ2h0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjM3LCAyOCwgMzYpO1xuICAgICAgICAgIGJvcmRlcjogMC4xZW0gc29saWQgcmdiKDE2MSwgMzAsIDQ1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWQtLXJlZCAubGVkLWdsb3cge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0zMCk7XG4gICAgICAgIH1cblxuICAgICAgICAubGVkLS1yZWQub24ge1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAzZW0gcmdiKDIzNywgMjgsIDM2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZWQub2ZmIC5sZWQtZ2xvdyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjM0KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgbGVkIGxlZC0tcmVkICR7c3RhdHVzID8gJ29mZicgOiAnJ31gfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVkLWJvcmRlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxlZC1saWdodFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGVkLWdsb3cgXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlnaHQ7XG4iXX0= */\n/*@ sourceURL=/Users/belencurcio/Develop/ServerlessComputer/src/components/Light.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3406257388" + " " + "led led--red ".concat(status ? 'off' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3406257388" + " " + "led-border",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3406257388" + " " + "led-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-3406257388" + " " + "led-glow ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Light);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppProvider */ "./components/AppProvider.js");
/* harmony import */ var _components_Console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Console */ "./components/Console.js");

var _jsxFileName = "/Users/belencurcio/Develop/ServerlessComputer/src/pages/index.js";





function Help(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "help noise",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "window",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Help"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "The X 16-bit input")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Y"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "The Y 16-bit input")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Flags"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "The ALU takes the following flags")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "zx"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "zero the x input")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "nx"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "negate the x input")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "zy"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "zero the y input")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "ny"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "negate the y input")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "op"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "function code: 1 for X + Y, 0 for X & Y")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "no"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "desc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "negate output"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: props.closeHelpModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Close Help")));
}

function App(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: props.showHelpModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Show Help"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Console__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
}

function Root(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AppProvider__WEBPACK_IMPORTED_MODULE_3__["AppConsumer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, function (props) {
    return console.log(props) || react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-2625732374",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2625732374",
      __self: this
    }, "@font-face{font-family:Computer;src:url('/static/Computerfont.ttf');}html,body{margin:0;padding:0;}body{min-height:100vh;background-color:transparent;overflow:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-family:Menlo,Monaco,'Lucida Console','Liberation Mono', 'DejaVu Sans Mono','Bitstream Vera Sans Mono','Courier New', monospace;color:white;font-size:14px;background-color:#222222;background-image:radial-gradient( circle at 50% -100%, rgb(0,44,72) 30%, #ff00d922, #000000 );text-transform:uppercase;padding:0;margin:0;}.wrapper{position:relative;max-width:1080px;margin:0 auto;}.noise{background:linear-gradient( rgba(10,10,10,0.2), rgba(0,0,0,0.2) ), repeating-linear-gradient( 0deg, transparent, transparent 2px, black 3px, black 3px );}.help{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;background-color:rgba(23,23,23,0.48);padding:0.5rem;height:100vh;width:100%;}.help .window{border:solid 3px #7a7a7a;background-color:#171717;padding:1rem;width:500px;height:300px;margin:0 auto;border-radius:6px;top:-50%;-webkit-transform:translateY(50%);-ms-transform:translateY(50%);transform:translateY(50%);}.help .name{padding-right:1rem;}.help .list{padding:0;margin:0;list-style:none;}.help .item{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;}button{display:inline-block;font-size:0.88rem;color:rgb(255,255,255);text-align:center;text-transform:uppercase;padding-left:15px;padding-right:15px;line-height:30px;font-weight:bold;-webkit-letter-spacing:1.5px;-moz-letter-spacing:1.5px;-ms-letter-spacing:1.5px;letter-spacing:1.5px;background:transparent;border-radius:6px;-webkit-transition:background-color 0.2s ease 0s;transition:background-color 0.2s ease 0s;margin:15px 0;}button:hover{background-color:rgb(255,255,255);color:#262626;cursor:pointer;}a{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxlbmN1cmNpby9EZXZlbG9wL1NlcnZlcmxlc3NDb21wdXRlci9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUUrQixBQUdzQyxBQU1aLEFBS1EsQUF3QkMsQUFnQmYsQUFHWSxBQWFVLEFBWU4sQUFJVCxBQU1ELEFBT1ksQUFpQmUsQUFLeEIsU0EvR0YsQUFtRkEsQ0FORCxFQW1DWCxHQWhFUSxFQTNDdUIsQ0F3QlosQ0E1Qm5CLEFBd0VBLEFBS2tCLEFBTUgsRUExRnVCLEFBdUQ3QixBQXlDVyxJQTdCTyxHQVhqQixNQXlETSxDQTdFQSxBQWlEaEIsQ0E1QlcsR0F3Q2dCLE1BdkNiLENBOUNJLEVBc0dELENBN0VqQixDQStCZSxPQW5FZixBQTBEMEMsS0E5Q04sQUFxRmhCLENBN0JOLEFBOENkLFlBN0NlLEtBNkJZLFFBNUJYLEtBb0JGLENBL0JHLEVBOUNvQixNQTBEakIsR0E0QkEsSUF2Q0wsV0FZSixFQVhFLENBdUNRLE1BM0JPLEVBM0RRLEVBZ0RwQyxTQXVDbUIsV0FuRG5CLE1Bb0RtQixLQVhuQixDQTFFYSxXQXNGVSwyQ0E3QnZCLDBEQThCeUIsb0JBdEZYLEdBdUZNLFNBdEZILFNBdUYwQixNQXRGaEIseUJBTXhCLDJEQWlGYSxjQUNoQixxQkFqRjJCLHlCQUNmLFVBQ0QsU0FDWCIsImZpbGUiOiIvVXNlcnMvYmVsZW5jdXJjaW8vRGV2ZWxvcC9TZXJ2ZXJsZXNzQ29tcHV0ZXIvc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwQ29uc3VtZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0FwcFByb3ZpZGVyJztcbmltcG9ydCBDb25zb2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29uc29sZSc7XG5cbmZ1bmN0aW9uIEhlbHAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAgbm9pc2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2luZG93XCI+XG4gICAgICAgIDxoMz5IZWxwPC9oMz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPlg8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjXCI+VGhlIFggMTYtYml0IGlucHV0PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5ZPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY1wiPlRoZSBZIDE2LWJpdCBpbnB1dDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+RmxhZ3M8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjXCI+VGhlIEFMVSB0YWtlcyB0aGUgZm9sbG93aW5nIGZsYWdzPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj56eDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NcIj56ZXJvIHRoZSB4IGlucHV0PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5ueDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NcIj5uZWdhdGUgdGhlIHggaW5wdXQ8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPnp5PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY1wiPnplcm8gdGhlIHkgaW5wdXQ8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPm55PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY1wiPm5lZ2F0ZSB0aGUgeSBpbnB1dDwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+b3A8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjXCI+XG4gICAgICAgICAgICAgIGZ1bmN0aW9uIGNvZGU6IDEgZm9yIFggKyBZLCAwIGZvciBYICYgWVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5ubzwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NcIj5uZWdhdGUgb3V0cHV0PC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuY2xvc2VIZWxwTW9kYWx9PkNsb3NlIEhlbHA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBBcHAocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuc2hvd0hlbHBNb2RhbH0+U2hvdyBIZWxwPC9idXR0b24+XG4gICAgICA8Q29uc29sZSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBSb290KHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFwcENvbnN1bWVyPlxuICAgICAgeyhwcm9wcykgPT5cbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMpIHx8IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IENvbXB1dGVyO1xuICAgICAgICAgICAgICAgIHNyYzogdXJsKCcvc3RhdGljL0NvbXB1dGVyZm9udC50dGYnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sICdMdWNpZGEgQ29uc29sZScsICdMaWJlcmF0aW9uIE1vbm8nLFxuICAgICAgICAgICAgICAgICAgJ0RlamFWdSBTYW5zIE1vbm8nLCAnQml0c3RyZWFtIFZlcmEgU2FucyBNb25vJywgJ0NvdXJpZXIgTmV3JyxcbiAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgY2lyY2xlIGF0IDUwJSAtMTAwJSxcbiAgICAgICAgICAgICAgICAgIHJnYigwLCA0NCwgNzIpIDMwJSxcbiAgICAgICAgICAgICAgICAgICNmZjAwZDkyMixcbiAgICAgICAgICAgICAgICAgICMwMDAwMDBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTA4MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLm5vaXNlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAgIHJnYmEoMTAsIDEwLCAxMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgICAgICAgMGRlZyxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50IDJweCxcbiAgICAgICAgICAgICAgICAgICAgYmxhY2sgM3B4LFxuICAgICAgICAgICAgICAgICAgICBibGFjayAzcHhcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmhlbHAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMsIDIzLCAyMywgMC40OCk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVscCAud2luZG93IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDNweCAjN2E3YTdhO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3MTc7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhlbHAgLm5hbWUge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuaGVscCAubGlzdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5oZWxwIC5pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UgMHM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICB7cHJvcHMuaGVscE1vZGFsICYmIDxIZWxwIHsuLi5wcm9wc30gLz59XG4gICAgICAgICAgICA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIDwvQXBwQ29uc3VtZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iXX0= */\n/*@ sourceURL=/Users/belencurcio/Develop/ServerlessComputer/src/pages/index.js */"), props.helpModal && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Help, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/belencurcio/Develop/ServerlessComputer/src/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@aspnet/signalr":
/*!**********************************!*\
  !*** external "@aspnet/signalr" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@aspnet/signalr");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map