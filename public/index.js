/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/utils */ \"./src/js/utils.js\");\n\n\nconst el = document.createElement('div');\nconst objAttr = {\n  class: 'inn-container home'\n};\nlet total = 2500701;\nconst children = [Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('img', {\n  class: 'home__img',\n  src: 'https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_960_720.jpg',\n  alt: 'Model'\n}), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('p', {\n  class: 'home__username'\n}, ['Hello, Pamela']), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('div', {\n  class: 'home__amount'\n}, [`<span>${total}</span>`, Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('p', {\n  class: 'home__amount--info'\n}, ['Total Amount'])]), Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('section', {\n  class: 'home__buttons'\n}, [`<button id=\"btn-right\">WITHDRAW 10000</button>`, `<button id=\"btn-left\">WITHDRAW 5000</button>`])];\nconst app = Object(_js_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(el, objAttr, children);\nconsole.log(app);\nconst root = document.getElementById('root');\nroot.appendChild(app); // Calculate\n\nconst btnRight = document.getElementById('btn-right');\nconst btnLeft = document.getElementById('btn-left');\nconst withDrawRight = 1000;\nconst withDrawLeft = 5000;\nconst ammount = document.querySelector('.home__amount');\n\nfunction updateAccountNode(withdraw) {\n  total -= withdraw;\n  const newTotalNode = document.createElement('span');\n  newTotalNode.innerHTML = total;\n  ammount.replaceChild(newTotalNode, ammount.firstChild);\n}\n\nbtnRight.addEventListener('click', e => {\n  e.preventDefault();\n  updateAccountNode(withDrawRight);\n});\nbtnLeft.addEventListener('click', e => {\n  e.preventDefault();\n  updateAccountNode(withDrawLeft);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: addAttributes, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addAttributes\", function() { return addAttributes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/**\r\n * Add attributes to an HTMLElement instance\r\n * \r\n * @param {HTMLElement} el an HTMLInstance\r\n * @param  {object} objAttr attributes of HTML elements\r\n * @example\r\n * \r\n * const el = document.createElement('div')\r\n * addAttributes(el, { class: 'root' })\r\n * <div class=\"root\"></div>\r\n */\nfunction addAttributes(el, objAttr) {\n  Object.keys(objAttr).forEach(attr => {\n    el.setAttribute(attr, objAttr[attr]);\n  });\n}\n/**\r\n * @param {HTMLElement || string} type type of HTML element\r\n * @param {object} objAttr attributes of HTML elements\r\n * @param {Array} children children of this element\r\n * @returns {HTMLElement} HTML elements and their children\r\n */\n\nfunction createElement(type, objAttr, children) {\n  const el = type instanceof HTMLElement ? type : document.createElement(type);\n  addAttributes(el, objAttr);\n\n  if (children && children.length >= 0) {\n    children.forEach(child => {\n      child instanceof HTMLElement ? el.appendChild(child) : el.innerHTML += child;\n    });\n  }\n\n  return el;\n}\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/styles.scss?");

/***/ })

/******/ });