/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"carousel/keyboard-navigation/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/carousel/keyboard-navigation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/carousel/keyboard-navigation/App.vue":
/*!******************************************************!*\
  !*** ./Samples/carousel/keyboard-navigation/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2fc1d3f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2fc1d3f1& */ \"./Samples/carousel/keyboard-navigation/App.vue?vue&type=template&id=2fc1d3f1&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/carousel/keyboard-navigation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2fc1d3f1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css& */ \"./Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2fc1d3f1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2fc1d3f1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/carousel/keyboard-navigation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?");

/***/ }),

/***/ "./Samples/carousel/keyboard-navigation/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/carousel/keyboard-navigation/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/carousel/keyboard-navigation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?");

/***/ }),

/***/ "./Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2fc1d3f1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2fc1d3f1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2fc1d3f1_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2fc1d3f1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2fc1d3f1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?");

/***/ }),

/***/ "./Samples/carousel/keyboard-navigation/App.vue?vue&type=template&id=2fc1d3f1&":
/*!*************************************************************************************!*\
  !*** ./Samples/carousel/keyboard-navigation/App.vue?vue&type=template&id=2fc1d3f1& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2fc1d3f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2fc1d3f1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/keyboard-navigation/App.vue?vue&type=template&id=2fc1d3f1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2fc1d3f1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2fc1d3f1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?");

/***/ }),

/***/ "./Samples/carousel/keyboard-navigation/main.js":
/*!******************************************************!*\
  !*** ./Samples/carousel/keyboard-navigation/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/carousel/keyboard-navigation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.keyboard-carousel-section .carousel-sample {\\n  background-color: #f5f9fd;\\n  border-radius: 1.5em;\\n  margin: 0 auto 2em;\\n  max-width: 80%;\\n  height: 500px;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container {\\n  align-items: center;\\n  display: flex;\\n  height: 100%;\\n  justify-content: center;\\n  padding: 1em;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .heading {\\n  font-size: 1.5em;\\n  color: #1a1a1a;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  margin: 1rem 0 1.6rem;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .description {\\n  font-size: 1.5rem;\\n  color: #1a1a1a;\\n  letter-spacing: 0.2px;\\n  line-height: 2.7rem;\\n  padding: 0 0 5rem;\\n  text-align: justify;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .description a {\\n  text-decoration: underline;\\n}\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled) .e-btn-icon,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled) .e-btn-icon,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled) .e-btn-icon {\\n  color: #4d8fe4;\\n  font-size: 1.5rem;\\n  line-height: normal;\\n}\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn {\\n  height: 5rem;\\n  width: 5rem;\\n}\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled) .e-btn-icon {\\n  font-size: 2.4rem;\\n}\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled):hover,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled):hover,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled):hover,\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled):focus,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled):focus,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled):focus,\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled):active,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled):active,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled):active {\\n  background-color: #d2e3f8;\\n}\\n.kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div {\\n  background-color: #e5e5e5;\\n  border: 0px !important;\\n}\\n.kb-carousel .e-carousel-indicators .e-indicator-bar.e-active .e-indicator div {\\n  background-color: #4d8fe4 !important;\\n}\\n@media screen and (max-width: 480px) {\\n.keyboard-carousel-section .carousel-sample {\\n    max-height: 400px;\\n    max-width: 100%;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .description {\\n    font-size: 1.25rem;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .image-container {\\n    display: none;\\n}\\n}\\n#source_link {\\n  float: right;\\n  margin-right: 10px;\\n}\\n.bootstrap5-dark .keyboard-carousel-section .carousel-sample,\\n.fluent-dark .keyboard-carousel-section .carousel-sample,\\n.tailwind-dark .keyboard-carousel-section .carousel-sample,\\n.material-dark .keyboard-carousel-section .carousel-sample,\\n.fabric-dark .keyboard-carousel-section .carousel-sample,\\n.bootstrap-dark .keyboard-carousel-section .carousel-sample,\\n.highcontrast .keyboard-carousel-section .carousel-sample {\\n  background-color: #26292E;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.fluent-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.tailwind-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.material-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.fabric-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.bootstrap-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.highcontrast .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading {\\n  color: #bbbbbb;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.fluent-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.tailwind-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.material-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.fabric-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.bootstrap-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.highcontrast .kb-carousel .e-carousel-items .e-carousel-item .product-container .description {\\n  color: #9f9f9f\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.bootstrap5-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.fluent-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.fluent-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.tailwind-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.tailwind-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.material-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.material-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.fabric-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.fabric-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.bootstrap-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.bootstrap-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.highcontrast .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.highcontrast .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus {\\n  background-color: #4e4e4e;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.fluent-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.tailwind-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.material-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.fabric-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.bootstrap-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.highcontrast .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon {\\n  color: #dfdfdf;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.fluent-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.tailwind-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.material-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.fabric-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.bootstrap-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.highcontrast .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div {\\n  background-color: #626262;\\n}\\n.kb-carousel .e-carousel-indicators {\\n  margin: 16px;\\n}\\n.kb-carousel .e-carousel-navigators .e-play-pause span.e-play-icon {\\n  margin-left: 4px;\\n  margin-top: 2px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-3TYJHM65YRSQ6BGX2BVBOH3UJURWWFKK3HTJNKCV2A2XDQW7NQDQ/Samples/carousel/keyboard-navigation/App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,0BAA0B;EAC1B,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,wBAAwB;EACxB,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;CACvB;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,2BAA2B;CAC5B;AACD;;;EAGE,eAAe;EACf,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,YAAY;CACb;AACD;EACE,kBAAkB;CACnB;AACD;;;;;;;;;EASE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;EAC1B,uBAAuB;CACxB;AACD;EACE,qCAAqC;CACtC;AACD;AACA;IACI,kBAAkB;IAClB,gBAAgB;CACnB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,cAAc;CACjB;CACA;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;;;;;;;EAOE,0BAA0B;CAC3B;AACD;;;;;;;EAOE,eAAe;CAChB;AACD;;;;;;;EAOE,cAAc;CACf;AACD;;;;;;;;;;;;;;EAcE,0BAA0B;CAC3B;AACD;;;;;;;EAOE,eAAe;CAChB;AACD;;;;;;;EAOE,0BAA0B;CAC3B;AACD;EACE,aAAa;CACd;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=2fc1d3f1&lang=css&\",\"sourcesContent\":[\"\\n.keyboard-carousel-section .carousel-sample {\\n  background-color: #f5f9fd;\\n  border-radius: 1.5em;\\n  margin: 0 auto 2em;\\n  max-width: 80%;\\n  height: 500px;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container {\\n  align-items: center;\\n  display: flex;\\n  height: 100%;\\n  justify-content: center;\\n  padding: 1em;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .heading {\\n  font-size: 1.5em;\\n  color: #1a1a1a;\\n  letter-spacing: 0;\\n  font-weight: 500;\\n  margin: 1rem 0 1.6rem;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .description {\\n  font-size: 1.5rem;\\n  color: #1a1a1a;\\n  letter-spacing: 0.2px;\\n  line-height: 2.7rem;\\n  padding: 0 0 5rem;\\n  text-align: justify;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .description a {\\n  text-decoration: underline;\\n}\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled) .e-btn-icon,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled) .e-btn-icon,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled) .e-btn-icon {\\n  color: #4d8fe4;\\n  font-size: 1.5rem;\\n  line-height: normal;\\n}\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn {\\n  height: 5rem;\\n  width: 5rem;\\n}\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled) .e-btn-icon {\\n  font-size: 2.4rem;\\n}\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled):hover,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled):hover,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled):hover,\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled):focus,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled):focus,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled):focus,\\n.kb-carousel .e-carousel-navigators .e-previous .e-btn:not(:disabled):active,\\n.kb-carousel .e-carousel-navigators .e-next .e-btn:not(:disabled):active,\\n.kb-carousel .e-carousel-navigators .e-play-pause .e-btn:not(:disabled):active {\\n  background-color: #d2e3f8;\\n}\\n.kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div {\\n  background-color: #e5e5e5;\\n  border: 0px !important;\\n}\\n.kb-carousel .e-carousel-indicators .e-indicator-bar.e-active .e-indicator div {\\n  background-color: #4d8fe4 !important;\\n}\\n@media screen and (max-width: 480px) {\\n.keyboard-carousel-section .carousel-sample {\\n    max-height: 400px;\\n    max-width: 100%;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .description {\\n    font-size: 1.25rem;\\n}\\n.kb-carousel .e-carousel-items .e-carousel-item .product-container .image-container {\\n    display: none;\\n}\\n}\\n#source_link {\\n  float: right;\\n  margin-right: 10px;\\n}\\n.bootstrap5-dark .keyboard-carousel-section .carousel-sample,\\n.fluent-dark .keyboard-carousel-section .carousel-sample,\\n.tailwind-dark .keyboard-carousel-section .carousel-sample,\\n.material-dark .keyboard-carousel-section .carousel-sample,\\n.fabric-dark .keyboard-carousel-section .carousel-sample,\\n.bootstrap-dark .keyboard-carousel-section .carousel-sample,\\n.highcontrast .keyboard-carousel-section .carousel-sample {\\n  background-color: #26292E;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.fluent-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.tailwind-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.material-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.fabric-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.bootstrap-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading,\\n.highcontrast .kb-carousel .e-carousel-items .e-carousel-item .product-container .heading {\\n  color: #bbbbbb;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.fluent-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.tailwind-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.material-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.fabric-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.bootstrap-dark .kb-carousel .e-carousel-items .e-carousel-item .product-container .description,\\n.highcontrast .kb-carousel .e-carousel-items .e-carousel-item .product-container .description {\\n  color: #9f9f9f\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.bootstrap5-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.fluent-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.fluent-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.tailwind-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.tailwind-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.material-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.material-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.fabric-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.fabric-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.bootstrap-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.bootstrap-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus,\\n.highcontrast .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):hover,\\n.highcontrast .kb-carousel .e-carousel-navigators .e-btn:not(:disabled):focus {\\n  background-color: #4e4e4e;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.fluent-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.tailwind-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.material-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.fabric-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.bootstrap-dark .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon,\\n.highcontrast .kb-carousel .e-carousel-navigators .e-btn:not(:disabled) .e-btn-icon {\\n  color: #dfdfdf;\\n}\\n.bootstrap5-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.fluent-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.tailwind-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.material-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.fabric-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.bootstrap-dark .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div,\\n.highcontrast .kb-carousel .e-carousel-indicators .e-indicator-bar .e-indicator div {\\n  background-color: #626262;\\n}\\n.kb-carousel .e-carousel-indicators {\\n  margin: 16px;\\n}\\n.kb-carousel .e-carousel-navigators .e-play-pause span.e-play-icon {\\n  margin-left: 4px;\\n  margin-top: 2px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/carousel/keyboard-navigation/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/keyboard-navigation/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"CarouselPlugin\"]);\n\nvar itemTemplate1Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate1\", {\n    template: `<div class=\"product-container\">\n      <div class=\"col-sm-5 component-container\">\n        <div class=\"heading\">San Francisco</div>\n        <div class=\"description\">\n          San Francisco, officially the City and County of San Francisco, is a cultural, commercial, and financial center in the U.S. state of California.\n        </div>\n        <a class=\"demo\" href=\"https://en.wikipedia.org/wiki/San_Francisco\"\n          target=\"_blank\">READ MORE</a>\n      </div>\n      <div class=\"col-sm-5 image-container\">\n        <picture>\n          <img style=\"width:100%; height:100%\" src=\"./../../source/carousel/images/san-francisco.jpg\" alt=\"San Francisco\" />\n        </picture>\n      </div>\n    </div>`,\n    data() {\n      return {\n        data: {}\n      };\n    },\n    computed: {},\n    methods: {}\n});\n\nvar itemTemplate2Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate2\", {\n    template: `<div class=\"product-container\">\n      <div class=\"col-sm-5 component-container\">\n        <div class=\"heading\">London</div>\n        <div class=\"description\">\n          London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations.\n        </div>\n        <a class=\"demo\"\n          href=\"https://en.wikipedia.org/wiki/London\"\n          target=\"_blank\">READ MORE</a>\n      </div>\n      <div class=\"col-sm-5 image-container\">\n        <picture>\n          <img style=\"width:100%; height:100%\" src=\"./../../source/carousel/images/london.jpg\" alt=\"London\" />\n        </picture>\n      </div>\n    </div>`,\n    data() {\n      return {\n        data: {}\n      };\n    },\n    computed: {},\n    methods: {}\n});\n\nvar itemTemplate3Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate3\", {\n    template: `<div class=\"product-container\">\n      <div class=\"col-sm-5 component-container\">\n        <div class=\"heading\">Tokyo</div>\n        <div class=\"description\">\n          Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.\n        </div>\n        <a class=\"demo\" href=\"https://en.wikipedia.org/wiki/Tokyo\"\n          target=\"_blank\">READ MORE</a>\n      </div>\n      <div class=\"col-sm-5 image-container\">\n        <picture>\n          <img style=\"width:100%; height:100%\" src=\"./../../source/carousel/images/tokyo.jpg\" alt=\"Tokyo\" />\n        </picture>\n      </div>\n    </div>`,\n    data() {\n      return {\n        data: {}\n      };\n    },\n    computed: {},\n    methods: {}\n});\n\nvar itemTemplate4Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate4\", {\n    template: `<div class=\"product-container\">\n      <div class=\"col-sm-5 component-container\">\n        <div class=\"heading\">Moscow</div>\n        <div class=\"description\">\n          Moscow, on the Moskva River in western Russia, is the nation’s cosmopolitan capital. In its historic core is the Kremlin, a complex that’s home to the president and tsarist treasures in the Armoury. Outside its walls is Red Square, Russia's symbolic center.\n        </div>\n        <a class=\"demo\" href=\"https://en.wikipedia.org/wiki/Moscow\"\n          target=\"_blank\">READ MORE</a>\n      </div>\n      <div class=\"col-sm-5 image-container\">\n        <picture>\n          <img style=\"width:100%; height:100%\" src=\"./../../source/carousel/images/moscow.jpg\" alt=\"Moscow\" />\n        </picture>\n      </div>\n    </div>`,\n    data() {\n      return {\n        data: {}\n      };\n    },\n    computed: {},\n    methods: {}\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    mounted: function () {\n      document.body.addEventListener('keydown', (e) => {\n        let carouselElement = document.querySelector('.e-carousel');\n        if (e.altKey && e.keyCode === 74 && carouselElement) {\n          carouselElement.focus();\n        }\n      });\n    },\n    data: function () {\n      return {\n        itemTemplate1: function (e) {\n          return {\n            template: itemTemplate1Vue\n          };\n        },\n        itemTemplate2: function (e) {\n          return {\n            template: itemTemplate2Vue\n          };\n        },\n        itemTemplate3: function (e) {\n          return {\n            template: itemTemplate3Vue\n          };\n        },\n        itemTemplate4: function (e) {\n          return {\n            template: itemTemplate4Vue\n          };\n        }\n      }\n    },\n    methods: {}\n}));\n\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/keyboard-navigation/App.vue?vue&type=template&id=2fc1d3f1&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/keyboard-navigation/App.vue?vue&type=template&id=2fc1d3f1& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section keyboard-carousel-section\"},[_c('div',{staticClass:\"col-lg-12\"},[_c('div',{staticClass:\"carousel-sample\"},[_c('ejs-carousel',{attrs:{\"id\":\"Carousel\",\"cssClass\":\"kb-carousel\",\"showPlayButton\":true,\"autoPlay\":false}},[_c('e-carousel-items',[_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate1}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate2}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate3}}),_vm._v(\" \"),_c('e-carousel-item',{attrs:{\"template\":_vm.itemTemplate4}})],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)],1),_vm._v(\" \"),_vm._m(2)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n          This sample demonstrates the keyboard interactions with the \"),_c('a',{attrs:{\"href\":\"https://www.syncfusion.com/vue-ui-components/vue-carousel\",\"target\":\"_blank\"}},[_vm._v(\"Vue Carousel\")]),_vm._v(\" component.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n          The \"),_c('code',[_vm._v(\"Vue Carousel\")]),_vm._v(\" component can be interacted with keyboard navigation. Below key combinations\\n          can be used in Carousel to initiate various actions.\\n        \")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('b',[_vm._v(\"Alt + J\")]),_vm._v(\" keys to focus the carousel component (done at application end).\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Arrows\")]),_vm._v(\" keys to navigate between slides.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Home\")]),_vm._v(\" to navigate to the first slide.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"End\")]),_vm._v(\" to navigate to the last slide.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Space\")]),_vm._v(\" to play/pause the slide transitions.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Enter\")]),_vm._v(\" to perform the respective action on its focus.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n          More information about accessibility's of Vue Carousel component can be found in this\\n          \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/carousel/getting-started/\"}},[_vm._v(\"\\n            documentation\")]),_vm._v(\" section.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"source_link\"}},[_vm._v(\"Source:  \\n    \"),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{\"href\":\"https://en.wikipedia.org/\",\"target\":\"_blank\"}},[_vm._v(\"https://en.wikipedia.org/\")])])])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/carousel/keyboard-navigation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });