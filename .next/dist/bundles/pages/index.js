module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "C:\\Users\\mariana\\Desktop\\learning_nextjs\\components\\Navbar.js";




var Navbar = function Navbar() {
	return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
		"div",
		{
			className: "jsx-590176386",
			__source: {
				fileName: _jsxFileName,
				lineNumber: 4
			}
		},
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
			"ul",
			{
				className: "jsx-590176386",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 5
				}
			},
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"li",
				{
					className: "jsx-590176386",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 6
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
					{ href: "/", __source: {
							fileName: _jsxFileName,
							lineNumber: 6
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"a",
						{
							className: "jsx-590176386",
							__source: {
								fileName: _jsxFileName,
								lineNumber: 6
							}
						},
						"Home"
					)
				)
			),
			__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				"li",
				{
					className: "jsx-590176386",
					__source: {
						fileName: _jsxFileName,
						lineNumber: 7
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
					{ href: "/about", __source: {
							fileName: _jsxFileName,
							lineNumber: 7
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						"a",
						{
							className: "jsx-590176386",
							__source: {
								fileName: _jsxFileName,
								lineNumber: 7
							}
						},
						"About"
					)
				)
			)
		),
		__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
			styleId: "590176386",
			css: "ul.jsx-590176386{background:#333;color:#fff;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-590176386 li.jsx-590176386{font-size:18px;margin-right:20px;}ul.jsx-590176386 li.jsx-590176386 a.jsx-590176386{color:#fff;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE5hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTYyxBQUdvQixBQU9ELEFBS0osV0FDVSxJQUxILENBUFAsV0FDSyxLQVlqQixDQUxBLFVBTmMsMEVBQ2QiLCJmaWxlIjoiY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL21hcmlhbmEvRGVza3RvcC9sZWFybmluZ19uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4gKFxyXG5cdDxkaXY+XHJcblx0XHQ8dWw+XHJcblx0XHRcdDxsaT48TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPjwvbGk+XHJcblx0XHRcdDxsaT48TGluayBocmVmPVwiL2Fib3V0XCI+PGE+QWJvdXQ8L2E+PC9MaW5rPjwvbGk+XHJcblx0XHQ8L3VsPlxyXG5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdHVsIHtcclxuXHRcdFx0YmFja2dyb3VuZDogIzMzMztcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR9XHJcblxyXG5cdFx0dWwgbGkge1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMjBweDtcclxuXHRcdH1cclxuXHJcblx0XHR1bCBsaSBhIHtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdH1cclxuXHRgfTwvc3R5bGU+XHJcblxyXG5cdDwvZGl2PlxyXG5cclxuXHRcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXX0= */\n/*@ sourceURL=components\\Navbar.js */"
		})
	);
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Navbar__ = __webpack_require__("./components/Navbar.js");
var _jsxFileName = 'C:\\Users\\mariana\\Desktop\\learning_nextjs\\pages\\index.js';

/*export default () => (
	<div>Welcome to next.js!</div>

);*/



var Index = function Index() {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 9
			}
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Navbar__["a" /* default */], {
			__source: {
				fileName: _jsxFileName,
				lineNumber: 10
			}
		}),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'h1',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 11
				}
			},
			'Welcome to next.js!'
		)
	);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map