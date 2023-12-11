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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.sass */ \"./src/sass/app.sass\");\n\r\n\r\nwindow.onresize = () => { // to skip all checked chekboxes (burger, load more)\r\n    document.querySelectorAll('input[type=\"checkbox\"]:checked').forEach((el) => {\r\n        \r\n        el.checked = false\r\n    })\r\n}\r\n\r\ndocument.querySelectorAll('.header-menu li a').forEach(el => el.addEventListener('click', e => {\r\n  if (document.querySelector('.is-burger').style.display != 'none') {\r\n    document.querySelector('.is-burger').checked = false\r\n  }\r\n}))\r\n\r\n/* sources:\r\n  https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c\r\n  https://dev.to/fredericrous/minimal-carousel-with-scroll-snap-mobile-mouse-friendly-1dl\r\n*/\r\nconst slider = document.querySelector('.slides'), slideWidth = slider.childNodes[0].offsetLeft,\r\n     leftBtn = document.querySelector('.button-left'), rightBtn = document.querySelector('.button-right'),\r\n     stopDragging = (e) => { \r\n                isDown = false\r\n                slider.classList.remove('active')\r\n              },\r\n    isVisible = (ele, container) => {\r\n      const { bottom, height, top } = ele.getBoundingClientRect();\r\n      const containerRect = container.getBoundingClientRect();\r\n  \r\n      return top <= containerRect.top ? containerRect.top - top <= height : bottom - containerRect.bottom <= height;\r\n  };\r\nlet isDown = false\r\nlet startX // capture starting point\r\nlet scrollLeft \r\n\r\n\r\nleftBtn.addEventListener('click', e => {\r\n  \r\n})\r\n\r\nslider.addEventListener('mousedown', e => {\r\n  isDown = true\r\n  slider.classList.add('active')\r\n  startX = e.pageX - slider.offsetLeft\r\n  scrollLeft = slider.scrollLeft\r\n})\r\nslider.addEventListener('mouseleave', stopDragging)\r\nslider.addEventListener('mouseup', stopDragging)\r\nslider.addEventListener('mousemove', e => { \r\n  //  to make it work, ensure that scroll-behavior: smooth is not applied to your slider container\r\n  if (!isDown) return\r\n  e.preventDefault()\r\n  const x = e.pageX - slider.offsetLeft\r\n \r\n  //if (slider.scrollLeft < slider.offsetWidth * (slider.children.length - 1)) {\r\n    const SCROLL_SPEED = 2 // this variable regulates easiness of slide dragging\r\n    // the bigger SCROLL_SPEED makes it more sensetive. 2 is the golden middle to follow task specs\r\n    const walk = (x - startX) * SCROLL_SPEED\r\n    slider.scrollLeft = scrollLeft - walk\r\n    //console.log(slider.scrollLeft, walk)\r\n    // slider.childNodes.\r\n    console.log(slider.scrollLeft, slider.offsetWidth * (slider.children.length - 1))\r\n  //} //else if (slider.scrollLeft >= slider.offsetWidth * (slider.children.length - 1)) slider.scrollLeft = 0\r\n\r\n})\r\n\r\n\n\n//# sourceURL=webpack://coffee-house/./src/index.js?");

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