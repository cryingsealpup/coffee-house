/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/app.sass":
/*!***************************!*\
  !*** ./src/sass/app.sass ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://coffee-house/./src/sass/app.sass?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.sass */ \"./src/sass/app.sass\");\n\r\n\r\nwindow.onresize = () => { // to skip all checked chekboxes (burger, load more)\r\n    document.querySelectorAll('input[type=\"checkbox\"]:checked').forEach((el) => {\r\n        \r\n        el.checked = false\r\n    })\r\n}\r\n\r\n// const slider = document.querySelector('.slider'), sliderWrapper = slider.querySelector('.slider-wrapper'),\r\n//       slides = sliderWrapper.querySelector('.slides'), controls = slider.querySelector('.button'), \r\n//       left = controls.querySelector('.button-left '), right = controls.querySelector('button-right'),\r\n//       slideWidth = slides.childNodes[0].offsetWidth\r\n\r\n// let isDown = false, scrollX, shiftLeft\r\n\r\nconst slider = document.querySelector('.slides')\r\nlet isDown = false\r\nlet startX\r\nlet scrollLeft\r\n\r\nslider.addEventListener('mousedown', e => {\r\n  isDown = true\r\n  slider.classList.add('active')\r\n  startX = e.pageX - slider.offsetLeft\r\n  scrollLeft = slider.scrollLeft\r\n})\r\nslider.addEventListener('mouseleave', _ => {\r\n  isDown = false\r\n  slider.classList.remove('active')\r\n})\r\nslider.addEventListener('mouseup', _ => {\r\n  isDown = false\r\n  slider.classList.remove('active')\r\n})\r\nslider.addEventListener('mousemove', e => { \r\n  //  to make it work, check that scroll-behavior: smooth is not applied to your slider container\r\n  if (!isDown) return\r\n  e.preventDefault()\r\n  const x = e.pageX - slider.offsetLeft\r\n  const SCROLL_SPEED = 5\r\n  const walk = (x - startX) * SCROLL_SPEED\r\n  slider.scrollLeft = scrollLeft - walk\r\n})\r\n\r\n// const startDragging = (e) => {\r\n//   isDown = true\r\n//   scrollX = e.pageX - slides.offsetLeft\r\n//   shiftLeft = slides.scrollLeft\r\n// }\r\n\r\n// const stopDragging = (e) => {\r\n//   isDown = false\r\n// }\r\n\r\n// const move = (e) => {\r\n//   e.preventDefault()\r\n//   if (!isDown) return\r\n//   const x = e.pageX - slider.offsetLeft\r\n//   const SCROLL_SPEED = 5\r\n//   const walk = (x - startX) * SCROLL_SPEED\r\n//   slider.scrollLeft = shiftLeft - walk\r\n// }\r\n\r\n// // Add the event listeners\r\n// slides.addEventListener('mousemove', move)\r\n// slides.addEventListener('mousedown', startDragging)\r\n// slides.addEventListener('mouseup', stopDragging)\r\n// slides.addEventListener('mouseleave', stopDragging)\n\n//# sourceURL=webpack://coffee-house/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;