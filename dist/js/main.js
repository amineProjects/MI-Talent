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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/search */ \"./src/js/module/search.js\");\n/* harmony import */ var _module_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/slider */ \"./src/js/module/slider.js\");\n\n\n\n\nObject(_module_search__WEBPACK_IMPORTED_MODULE_0__[\"search\"])();\nObject(_module_slider__WEBPACK_IMPORTED_MODULE_1__[\"slider\"])();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/module/classie.js":
/*!**********************************!*\
  !*** ./src/js/module/classie.js ***!
  \**********************************/
/*! exports provided: classie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classie\", function() { return classie; });\n/*!\r\n * classie v1.0.1\r\n * class helper functions\r\n * from bonzo https://github.com/ded/bonzo\r\n * MIT license\r\n *\r\n * classie.has( elem, 'my-class' ) -> true/false\r\n * classie.add( elem, 'my-new-class' )\r\n * classie.remove( elem, 'my-unwanted-class' )\r\n * classie.toggle( elem, 'my-class' )\r\n */\n\n/*jshint browser: true, strict: true, undef: true, unused: true */\n\n/*global define: false, module: false */\n // class helper functions from bonzo https://github.com/ded/bonzo\n\nfunction classReg(className) {\n  return new RegExp(\"(^|\\\\s+)\" + className + \"(\\\\s+|$)\");\n} // classList support for class management\n// altho to be fair, the api sucks because it won't accept multiple classes at once\n\n\nvar hasClass, addClass, removeClass;\n\nif ('classList' in document.documentElement) {\n  hasClass = function hasClass(elem, c) {\n    return elem.classList.contains(c);\n  };\n\n  addClass = function addClass(elem, c) {\n    elem.classList.add(c);\n  };\n\n  removeClass = function removeClass(elem, c) {\n    elem.classList.remove(c);\n  };\n} else {\n  hasClass = function hasClass(elem, c) {\n    return classReg(c).test(elem.className);\n  };\n\n  addClass = function addClass(elem, c) {\n    if (!hasClass(elem, c)) {\n      elem.className = elem.className + ' ' + c;\n    }\n  };\n\n  removeClass = function removeClass(elem, c) {\n    elem.className = elem.className.replace(classReg(c), ' ');\n  };\n}\n\nfunction toggleClass(elem, c) {\n  var fn = hasClass(elem, c) ? removeClass : addClass;\n  fn(elem, c);\n}\n\nvar classie = {\n  // full names\n  hasClass: hasClass,\n  addClass: addClass,\n  removeClass: removeClass,\n  toggleClass: toggleClass,\n  // short names\n  has: hasClass,\n  add: addClass,\n  remove: removeClass,\n  toggle: toggleClass\n};\n\n\n//# sourceURL=webpack:///./src/js/module/classie.js?");

/***/ }),

/***/ "./src/js/module/search.js":
/*!*********************************!*\
  !*** ./src/js/module/search.js ***!
  \*********************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return init; });\n/*\r\nthe code for the search component\r\n*/\n\n\nvar mainContainer = document.querySelector('.main-wrap'),\n    openCtrl = document.getElementById('btn-search'),\n    closeCtrl = document.getElementById('btn-search-close'),\n    searchContainer = document.querySelector('.search'),\n    inputSearch = searchContainer.querySelector('.search__input');\n\nfunction init() {\n  initEvents();\n}\n\nfunction initEvents() {\n  openCtrl.addEventListener('click', openSearch);\n  closeCtrl.addEventListener('click', closeSearch);\n  document.addEventListener('keyup', function (ev) {\n    // escape key.\n    if (ev.keyCode == 27) {\n      closeSearch();\n    }\n  });\n}\n\nfunction openSearch() {\n  mainContainer.classList.add('main-wrap--move');\n  searchContainer.classList.add('search--open');\n  setTimeout(inputFocus, 600);\n}\n\nfunction inputFocus() {\n  inputSearch.focus();\n}\n\nfunction closeSearch() {\n  mainContainer.classList.remove('main-wrap--move');\n  searchContainer.classList.remove('search--open');\n  inputSearch.blur();\n  inputSearch.value = '';\n}\n\n\n\n//# sourceURL=webpack:///./src/js/module/search.js?");

/***/ }),

/***/ "./src/js/module/slider.js":
/*!*********************************!*\
  !*** ./src/js/module/slider.js ***!
  \*********************************/
/*! exports provided: slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slider\", function() { return init; });\n/* harmony import */ var _classie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classie */ \"./src/js/module/classie.js\");\n\n\n\nvar slider = document.querySelector('.slider'),\n    slides = [].slice.call(slider.querySelectorAll('.slide')),\n    slidesTotal = slides.length - 1,\n    pagination = [].slice.call(slider.querySelectorAll('.slider__profile-item')),\n    navRightCtrl = slider.querySelector('.btn--nav-next'),\n    navLeftCtrl = slider.querySelector('.btn--nav-prev'),\n    profileNumber = slider.querySelector('.slider__profile-number>span'),\n    current = 1;\n\nfunction init() {\n  initEvent();\n}\n\nfunction initEvent() {\n  //navigation\n  pagination.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      navigate(pagination.indexOf(e.target));\n    }, false);\n  });\n  navLeftCtrl.addEventListener('click', function () {\n    navigate('left');\n  });\n  navRightCtrl.addEventListener('click', function () {\n    navigate('right');\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.keyCode == 37) {\n      navigate('left');\n    } else if (e.keyCode == 39) {\n      navigate('right');\n    }\n  });\n}\n\nfunction navigate(direction) {\n  if (direction === 'right') {\n    current = current < slidesTotal ? current + 1 : 0;\n  } else if (direction === 'left') {\n    current = current > 0 ? current - 1 : slidesTotal;\n  } else {\n    current = direction;\n  }\n\n  slides.forEach(function (slide) {\n    _classie__WEBPACK_IMPORTED_MODULE_0__[\"classie\"].remove(slide, 'slide--current');\n  });\n  pagination.forEach(function (item) {\n    _classie__WEBPACK_IMPORTED_MODULE_0__[\"classie\"].remove(item, 'slider__profile-item--current');\n  });\n  _classie__WEBPACK_IMPORTED_MODULE_0__[\"classie\"].add(slides[current], 'slide--current');\n  _classie__WEBPACK_IMPORTED_MODULE_0__[\"classie\"].add(pagination[current], 'slider__profile-item--current');\n  profileNumber.innerText = pagination[current].innerText;\n}\n\n\n\n//# sourceURL=webpack:///./src/js/module/slider.js?");

/***/ })

/******/ });