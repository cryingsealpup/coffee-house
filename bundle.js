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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_app_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/app.sass */ \"./src/sass/app.sass\");\n\r\n\r\nwindow.onresize = () => { // to skip all checked chekboxes (burger, load more)\r\n  document.querySelectorAll('input[type=\"checkbox\"]:checked').forEach((el) => {\r\n\r\n    el.checked = false\r\n  })\r\n  if (!window.matchMedia(\"(max-width: 768px)\").matches && document.querySelector('.load-more')) document.querySelector('.load-more').style.display = 'none'\r\n}\r\n\r\ndocument.querySelectorAll('.header-menu li a').forEach(el => el.addEventListener('click', e => {\r\n  if (document.querySelector('.is-burger').style.display != 'none') {\r\n    document.querySelector('.is-burger').checked = false\r\n  }\r\n}))\r\n\r\n/* sources:\r\n  https://stackoverflow.com/questions/28576636/mouse-click-and-drag-instead-of-horizontal-scroll-bar-to-view-full-content-of-c\r\n  https://dev.to/fredericrous/minimal-carousel-with-scroll-snap-mobile-mouse-friendly-1dl\r\n  https://www.zhangxinxu.com/study/201904/scroll-snap-end-event-detect-demo.php\r\n  https://www.slingacademy.com/article/javascript-how-to-programmatically-scroll-inside-a-div/\r\n*/\r\nconst slider = document.querySelector('.slides')\r\nif (slider) {\r\n  const slideWidth = slider.childNodes[0].offsetWidth,\r\n    leftBtn = document.querySelector('.button-left'),\r\n    rightBtn = document.querySelector('.button-right'),\r\n    pagination = document.querySelectorAll('.controls-btn'),\r\n    defaultScroll = slider.scrollLeft,\r\n    stopDragging = (e) => {\r\n      isDown = false\r\n      slider.classList.remove('active')\r\n    },\r\n    scroll = (offset, flag = true) => slider.scrollTo({\r\n      left: flag ? slider.scrollLeft - offset : offset,\r\n      behavior: 'smooth'\r\n    })\r\n  let isDown = false,\r\n    startX, scrollLeft, scrollEnd = false\r\n\r\n  // MAIN SCROLL LOGIC\r\n  // sets currrent pagination item \r\n  slider.addEventListener('scroll', function () {\r\n    [...slider.children].forEach(function (slide, i) {\r\n      if (Math.abs(slide.getBoundingClientRect().left - slider.getBoundingClientRect().left) < 10) {\r\n        pagination.forEach((el) => el.classList.remove('active'))\r\n        pagination[i].classList.add('active')\r\n      }\r\n    })\r\n  })\r\n\r\n\r\n\r\n  // Makes buttons clickable\r\n  leftBtn.addEventListener('click', e => {\r\n    scroll(slideWidth)\r\n  })\r\n\r\n  rightBtn.addEventListener('click', e => {\r\n    scroll(-slideWidth)\r\n  })\r\n\r\n\r\n  // Reacts to slide manual dragging\r\n  slider.addEventListener('mousedown', e => {\r\n    isDown = true\r\n    slider.classList.add('active')\r\n    startX = e.pageX - slider.offsetLeft\r\n    scrollLeft = slider.scrollLeft\r\n  })\r\n\r\n  slider.scrollIntoView({\r\n    behavior: 'smooth'\r\n  })\r\n\r\n  slider.addEventListener('mouseleave', stopDragging)\r\n  slider.addEventListener('mouseup', stopDragging)\r\n  slider.addEventListener('mousemove', e => {\r\n    //  to make it work, ensure that scroll-behavior: smooth is not applied to your slider container\r\n    if (!isDown) return\r\n    e.preventDefault()\r\n\r\n    const x = e.pageX - slider.offsetLeft\r\n    const SCROLL_SPEED = 2 // this variable regulates easiness of slide dragging\r\n    const walk = (x - startX) * SCROLL_SPEED\r\n    console.log(x, startX, walk, scrollLeft, slideWidth)\r\n    if (scrollLeft == 0 && walk > 0) {\r\n      slider.scrollLeft = slideWidth * 2\r\n    } else if (scrollLeft == slideWidth * 2 && walk < 0) {\r\n      slider.scrollLeft = 0\r\n    } else if (scrollLeft >= 0 && scrollLeft < slideWidth * 3 && walk) {\r\n      slider.scrollLeft = scrollLeft - walk\r\n    }\r\n\r\n  })\r\n}\r\n\r\n// Work with menu tabs switching\r\nconst products = document.querySelectorAll('.tab'), productsWrapper = document.querySelectorAll('.menu-tabs__wrap .button-menu')\r\nif (products) {\r\n  const controls = document.querySelectorAll('.menu-tabs__controls .button-menu')\r\n  controls.forEach((btn, ind) => btn.addEventListener('click', e => {\r\n     products.forEach((el) => el.classList.add('hidden'))\r\n     products[ind].classList.remove('hidden')\r\n     if (ind == 1 && window.matchMedia(\"(max-width: 768px)\").matches) document.querySelector('.load-more').style.display = 'none'\r\n     else if (window.matchMedia(\"(max-width: 768px)\").matches) {\r\n      document.querySelector('.load-more').style.display = 'flex'\r\n      document.querySelector('.load-more').checked = false\r\n     }\r\n     controls.forEach(el => {console.log(el);el.classList.remove('active')})\r\n     btn.classList.add('active')\r\n  }))\r\n}\r\n\r\n// Create modals\r\n\n\n//# sourceURL=webpack://coffee-house/./src/index.js?");

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