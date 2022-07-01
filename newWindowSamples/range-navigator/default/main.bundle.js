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
/******/ 		"range-navigator/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-navigator/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-navigator/default/App.vue":
/*!*************************************************!*\
  !*** ./Samples/range-navigator/default/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7d8d3327_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7d8d3327&scoped=true& */ \"./Samples/range-navigator/default/App.vue?vue&type=template&id=7d8d3327&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-navigator/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7d8d3327_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css& */ \"./Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7d8d3327_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7d8d3327_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7d8d3327\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-navigator/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/default/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/range-navigator/default/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d8d3327_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d8d3327_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d8d3327_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d8d3327_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d8d3327_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/default/App.vue?vue&type=template&id=7d8d3327&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/range-navigator/default/App.vue?vue&type=template&id=7d8d3327&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7d8d3327_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7d8d3327&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/default/App.vue?vue&type=template&id=7d8d3327&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7d8d3327_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7d8d3327_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/default/default-data.ts":
/*!*********************************************************!*\
  !*** ./Samples/range-navigator/default/default-data.ts ***!
  \*********************************************************/
/*! exports provided: bitCoinData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bitCoinData\", function() { return bitCoinData; });\n/**\n * Data Source for bit coin data\n */\nvar bitCoinData = [\n    { x: new Date('2017-05-01'), y: 1402.08 },\n    { x: new Date('2017-05-02'), y: 1443.68 },\n    { x: new Date('2017-05-03'), y: 1492 },\n    { x: new Date('2017-05-04'), y: 1515.63 },\n    { x: new Date('2017-05-05'), y: 1512.21 },\n    { x: new Date('2017-05-06'), y: 1548.29 },\n    { x: new Date('2017-05-07'), y: 1555.47 },\n    { x: new Date('2017-05-08'), y: 1639.32 },\n    { x: new Date('2017-05-09'), y: 1706.93 },\n    { x: new Date('2017-05-10'), y: 1756.8 },\n    { x: new Date('2017-05-11'), y: 1807.37 },\n    { x: new Date('2017-05-12'), y: 1676.99 },\n    { x: new Date('2017-05-13'), y: 1759.96 },\n    { x: new Date('2017-05-14'), y: 1772.42 },\n    { x: new Date('2017-05-15'), y: 1697.38 },\n    { x: new Date('2017-05-16'), y: 1718.2 },\n    { x: new Date('2017-05-17'), y: 1802.16 },\n    { x: new Date('2017-05-18'), y: 1887.33 },\n    { x: new Date('2017-05-19'), y: 1968.1 },\n    { x: new Date('2017-05-20'), y: 2051.73 },\n    { x: new Date('2017-05-21'), y: 2055.62 },\n    { x: new Date('2017-05-22'), y: 2139.03 },\n    { x: new Date('2017-05-23'), y: 2291.48 },\n    { x: new Date('2017-05-24'), y: 2476.3 },\n    { x: new Date('2017-05-25'), y: 2357.5 },\n    { x: new Date('2017-05-26'), y: 2247.48 },\n    { x: new Date('2017-05-27'), y: 2106.31 },\n    { x: new Date('2017-05-28'), y: 2207.58 },\n    { x: new Date('2017-05-29'), y: 2289.87 },\n    { x: new Date('2017-05-30'), y: 2197.23 },\n    { x: new Date('2017-05-31'), y: 2330.23 },\n    { x: new Date('2017-06-01'), y: 2452.18 },\n    { x: new Date('2017-06-02'), y: 2517.41 },\n    { x: new Date('2017-06-03'), y: 2555.65 },\n    { x: new Date('2017-06-04'), y: 2552.81 },\n    { x: new Date('2017-06-05'), y: 2736.59 },\n    { x: new Date('2017-06-06'), y: 2914.08 },\n    { x: new Date('2017-06-07'), y: 2694.22 },\n    { x: new Date('2017-06-08'), y: 2825.03 },\n    { x: new Date('2017-06-09'), y: 2826.7 },\n    { x: new Date('2017-06-10'), y: 2942.34 },\n    { x: new Date('2017-06-11'), y: 3018.54 },\n    { x: new Date('2017-06-12'), y: 2682.59 },\n    { x: new Date('2017-06-13'), y: 2738.93 },\n    { x: new Date('2017-06-14'), y: 2494.48 },\n    { x: new Date('2017-06-15'), y: 2456.92 },\n    { x: new Date('2017-06-16'), y: 2528.1 },\n    { x: new Date('2017-06-17'), y: 2664 },\n    { x: new Date('2017-06-18'), y: 2576.17 },\n    { x: new Date('2017-06-19'), y: 2641.66 },\n    { x: new Date('2017-06-20'), y: 2778.83 },\n    { x: new Date('2017-06-21'), y: 2712.16 },\n    { x: new Date('2017-06-22'), y: 2740.79 },\n    { x: new Date('2017-06-23'), y: 2738.22 },\n    { x: new Date('2017-06-24'), y: 2619.12 },\n    { x: new Date('2017-06-25'), y: 2594.45 },\n    { x: new Date('2017-06-26'), y: 2485.36 },\n    { x: new Date('2017-06-27'), y: 2593.17 },\n    { x: new Date('2017-06-28'), y: 2584.56 },\n    { x: new Date('2017-06-29'), y: 2561.56 },\n    { x: new Date('2017-06-30'), y: 2499.98 },\n    { x: new Date('2017-07-01'), y: 2460.2 },\n    { x: new Date('2017-07-02'), y: 2529.78 },\n    { x: new Date('2017-07-03'), y: 2581.07 },\n    { x: new Date('2017-07-04'), y: 2625.07 },\n    { x: new Date('2017-07-05'), y: 2629.27 },\n    { x: new Date('2017-07-06'), y: 2619.11 },\n    { x: new Date('2017-07-07'), y: 2521.24 },\n    { x: new Date('2017-07-08'), y: 2579.93 },\n    { x: new Date('2017-07-09'), y: 2525.67 },\n    { x: new Date('2017-07-10'), y: 2371.96 },\n    { x: new Date('2017-07-11'), y: 2332.19 },\n    { x: new Date('2017-07-12'), y: 2423.16 },\n    { x: new Date('2017-07-13'), y: 2364.52 },\n    { x: new Date('2017-07-14'), y: 2232.65 },\n    { x: new Date('2017-07-15'), y: 1993.26 },\n    { x: new Date('2017-07-16'), y: 1938.94 },\n    { x: new Date('2017-07-17'), y: 2244.26 },\n    { x: new Date('2017-07-18'), y: 2327.9 },\n    { x: new Date('2017-07-19'), y: 2294.4 },\n    { x: new Date('2017-07-20'), y: 2877.39 },\n    { x: new Date('2017-07-21'), y: 2694.29 },\n    { x: new Date('2017-07-22'), y: 2838.81 },\n    { x: new Date('2017-07-23'), y: 2762.63 },\n    { x: new Date('2017-07-24'), y: 2779.04 },\n    { x: new Date('2017-07-25'), y: 2591.22 },\n    { x: new Date('2017-07-26'), y: 2550.18 },\n    { x: new Date('2017-07-27'), y: 2697.47 },\n    { x: new Date('2017-07-28'), y: 2805.18 },\n    { x: new Date('2017-07-29'), y: 2720.08 },\n    { x: new Date('2017-07-30'), y: 2746.33 },\n    { x: new Date('2017-07-31'), y: 2873.83 },\n    { x: new Date('2017-08-01'), y: 2735.59 },\n    { x: new Date('2017-08-02'), y: 2723.58 },\n    { x: new Date('2017-08-03'), y: 2814.36 },\n    { x: new Date('2017-08-04'), y: 2883.68 },\n    { x: new Date('2017-08-05'), y: 3301.76 },\n    { x: new Date('2017-08-06'), y: 3255 },\n    { x: new Date('2017-08-07'), y: 3431.97 },\n    { x: new Date('2017-08-08'), y: 3453.16 },\n    { x: new Date('2017-08-09'), y: 3377.54 },\n    { x: new Date('2017-08-10'), y: 3445.28 },\n    { x: new Date('2017-08-11'), y: 3679.61 },\n    { x: new Date('2017-08-12'), y: 3917.65 },\n    { x: new Date('2017-08-13'), y: 4111.2 },\n    { x: new Date('2017-08-14'), y: 4382.74 },\n    { x: new Date('2017-08-15'), y: 4204.43 },\n    { x: new Date('2017-08-16'), y: 4425.3 },\n    { x: new Date('2017-08-17'), y: 4316.34 },\n    { x: new Date('2017-08-18'), y: 4159.46 },\n    { x: new Date('2017-08-19'), y: 4206.13 },\n    { x: new Date('2017-08-20'), y: 4111.22 },\n    { x: new Date('2017-08-21'), y: 4054.94 },\n    { x: new Date('2017-08-22'), y: 4137.67 },\n    { x: new Date('2017-08-23'), y: 4191.22 },\n    { x: new Date('2017-08-24'), y: 4362.47 },\n    { x: new Date('2017-08-25'), y: 4408.32 },\n    { x: new Date('2017-08-26'), y: 4387.46 },\n    { x: new Date('2017-08-27'), y: 4394.51 },\n    { x: new Date('2017-08-28'), y: 4439.66 },\n    { x: new Date('2017-08-29'), y: 4648.13 },\n    { x: new Date('2017-08-30'), y: 4630.73 },\n    { x: new Date('2017-08-31'), y: 4764.87 },\n    { x: new Date('2017-09-01'), y: 4950.72 },\n    { x: new Date('2017-09-02'), y: 4643.97 },\n    { x: new Date('2017-09-03'), y: 4631.69 },\n    { x: new Date('2017-09-04'), y: 4319.72 },\n    { x: new Date('2017-09-05'), y: 4422.12 },\n    { x: new Date('2017-09-06'), y: 4626.72 },\n    { x: new Date('2017-09-07'), y: 4638.1 },\n    { x: new Date('2017-09-08'), y: 4317.54 },\n    { x: new Date('2017-09-09'), y: 4291.88 },\n    { x: new Date('2017-09-10'), y: 4191.17 },\n    { x: new Date('2017-09-11'), y: 4188.84 },\n    { x: new Date('2017-09-12'), y: 4148.27 },\n    { x: new Date('2017-09-13'), y: 3874.26 },\n    { x: new Date('2017-09-14'), y: 3226.41 },\n    { x: new Date('2017-09-15'), y: 3686.9 },\n    { x: new Date('2017-09-16'), y: 3678.74 },\n    { x: new Date('2017-09-17'), y: 3672.57 },\n    { x: new Date('2017-09-18'), y: 4067.08 },\n    { x: new Date('2017-09-19'), y: 3897 },\n    { x: new Date('2017-09-20'), y: 3858.09 },\n    { x: new Date('2017-09-21'), y: 3612.68 },\n    { x: new Date('2017-09-22'), y: 3603.31 },\n    { x: new Date('2017-09-23'), y: 3777.29 },\n    { x: new Date('2017-09-24'), y: 3662.12 },\n    { x: new Date('2017-09-25'), y: 3927.5 },\n    { x: new Date('2017-09-26'), y: 3895.51 },\n    { x: new Date('2017-09-27'), y: 4208.56 },\n    { x: new Date('2017-09-28'), y: 4185.29 },\n    { x: new Date('2017-09-29'), y: 4164.1 },\n    { x: new Date('2017-09-30'), y: 4353.05 },\n    { x: new Date('2017-10-01'), y: 4394.64 },\n    { x: new Date('2017-10-02'), y: 4404.1 },\n    { x: new Date('2017-10-03'), y: 4320.09 },\n    { x: new Date('2017-10-04'), y: 4225.92 },\n    { x: new Date('2017-10-05'), y: 4322.75 },\n    { x: new Date('2017-10-06'), y: 4370.24 },\n    { x: new Date('2017-10-07'), y: 4437.03 },\n    { x: new Date('2017-10-08'), y: 4596.96 },\n    { x: new Date('2017-10-09'), y: 4772.97 },\n    { x: new Date('2017-10-10'), y: 4754.7 },\n    { x: new Date('2017-10-11'), y: 4830.77 },\n    { x: new Date('2017-10-12'), y: 5439.13 },\n    { x: new Date('2017-10-13'), y: 5640.13 },\n    { x: new Date('2017-10-14'), y: 5809.69 },\n    { x: new Date('2017-10-15'), y: 5697.39 },\n    { x: new Date('2017-10-16'), y: 5754.22 },\n    { x: new Date('2017-10-17'), y: 5595.23 },\n    { x: new Date('2017-10-18'), y: 5572.2 },\n    { x: new Date('2017-10-19'), y: 5699.58 },\n    { x: new Date('2017-10-20'), y: 5984.09 },\n    { x: new Date('2017-10-21'), y: 6013.23 },\n    { x: new Date('2017-10-22'), y: 5984.96 },\n    { x: new Date('2017-10-23'), y: 5895.3 },\n    { x: new Date('2017-10-24'), y: 5518.85 },\n    { x: new Date('2017-10-25'), y: 5733.9 },\n    { x: new Date('2017-10-26'), y: 5888.14 },\n    { x: new Date('2017-10-27'), y: 5767.68 },\n    { x: new Date('2017-10-28'), y: 5732.82 },\n    { x: new Date('2017-10-29'), y: 6140.53 },\n    { x: new Date('2017-10-30'), y: 6121.8 },\n    { x: new Date('2017-10-31'), y: 6447.67 },\n    { x: new Date('2017-11-01'), y: 6750.17 },\n    { x: new Date('2017-11-02'), y: 7030 },\n    { x: new Date('2017-11-03'), y: 7161.45 },\n    { x: new Date('2017-11-04'), y: 7387 },\n    { x: new Date('2017-11-05'), y: 7382.45 },\n    { x: new Date('2017-11-06'), y: 6958.21 },\n    { x: new Date('2017-11-07'), y: 7118.8 },\n    { x: new Date('2017-11-08'), y: 7458.79 },\n    { x: new Date('2017-11-09'), y: 7146.78 },\n    { x: new Date('2017-11-10'), y: 6570.31 },\n    { x: new Date('2017-11-11'), y: 6337 },\n    { x: new Date('2017-11-12'), y: 5857.32 },\n    { x: new Date('2017-11-13'), y: 6517.68 },\n    { x: new Date('2017-11-14'), y: 6598.77 },\n    { x: new Date('2017-11-15'), y: 7279 },\n    { x: new Date('2017-11-16'), y: 7843.94 },\n    { x: new Date('2017-11-17'), y: 7689.91 },\n    { x: new Date('2017-11-18'), y: 7776.94 },\n    { x: new Date('2017-11-19'), y: 8033.94 },\n    { x: new Date('2017-11-20'), y: 8238.2 },\n    { x: new Date('2017-11-21'), y: 8095.59 },\n    { x: new Date('2017-11-22'), y: 8230.69 },\n    { x: new Date('2017-11-23'), y: 8002.64 },\n    { x: new Date('2017-11-24'), y: 8201.46 },\n    { x: new Date('2017-11-25'), y: 8763.78 },\n    { x: new Date('2017-11-26'), y: 9326.59 },\n    { x: new Date('2017-11-27'), y: 9739.05 },\n    { x: new Date('2017-11-28'), y: 9908.23 },\n    { x: new Date('2017-11-29'), y: 9816.35 },\n    { x: new Date('2017-11-30'), y: 9916.54 },\n    { x: new Date('2017-12-01'), y: 10859.56 },\n    { x: new Date('2017-12-02'), y: 10895.01 },\n    { x: new Date('2017-12-03'), y: 11180.89 },\n    { x: new Date('2017-12-04'), y: 11616.85 },\n    { x: new Date('2017-12-05'), y: 11696.06 },\n    { x: new Date('2017-12-06'), y: 13708.99 },\n    { x: new Date('2017-12-07'), y: 16858.02 },\n    { x: new Date('2017-12-08'), y: 16057.14 },\n    { x: new Date('2017-12-09'), y: 14913.4 },\n    { x: new Date('2017-12-10'), y: 15036.96 },\n    { x: new Date('2017-12-11'), y: 16699.68 },\n    { x: new Date('2017-12-12'), y: 17178.1 },\n    { x: new Date('2017-12-13'), y: 16407.2 },\n    { x: new Date('2017-12-14'), y: 16531.08 },\n    { x: new Date('2017-12-15'), y: 17601.94 },\n    { x: new Date('2017-12-16'), y: 19343.04 },\n    { x: new Date('2017-12-17'), y: 19086.64 },\n    { x: new Date('2017-12-18'), y: 18960.52 },\n    { x: new Date('2017-12-19'), y: 17608.35 },\n    { x: new Date('2017-12-20'), y: 16454.72 },\n    { x: new Date('2017-12-21'), y: 15561.05 },\n    { x: new Date('2017-12-22'), y: 13857.14 },\n    { x: new Date('2017-12-23'), y: 14548.71 },\n    { x: new Date('2017-12-24'), y: 13975.44 },\n    { x: new Date('2017-12-25'), y: 13917.03 },\n    { x: new Date('2017-12-26'), y: 15745.26 },\n    { x: new Date('2017-12-27'), y: 15378.28 },\n    { x: new Date('2017-12-28'), y: 14428.76 },\n    { x: new Date('2017-12-29'), y: 14427.87 },\n    { x: new Date('2017-12-30'), y: 12629.81 },\n    { x: new Date('2017-12-31'), y: 13860.14 },\n    { x: new Date('2018-01-01'), y: 13412.44 },\n    { x: new Date('2018-01-02'), y: 14740.76 },\n    { x: new Date('2018-01-03'), y: 15134.65 },\n    { x: new Date('2018-01-04'), y: 15155.23 },\n    { x: new Date('2018-01-05'), y: 16937.17 },\n    { x: new Date('2018-01-06'), y: 17135.84 },\n    { x: new Date('2018-01-07'), y: 16178.49 },\n    { x: new Date('2018-01-08'), y: 14970.36 },\n    { x: new Date('2018-01-09'), y: 14439.47 },\n    { x: new Date('2018-01-10'), y: 14890.72 },\n    { x: new Date('2018-01-11'), y: 13287.26 },\n    { x: new Date('2018-01-12'), y: 13812.71 },\n    { x: new Date('2018-01-13'), y: 14188.78 },\n    { x: new Date('2018-01-14'), y: 13619.03 },\n    { x: new Date('2018-01-15'), y: 13585.9 },\n    { x: new Date('2018-01-16'), y: 11348.02 },\n    { x: new Date('2018-01-17'), y: 11141.25 },\n    { x: new Date('2018-01-18'), y: 11250.65 },\n    { x: new Date('2018-01-19'), y: 11514.92 },\n    { x: new Date('2018-01-20'), y: 12759.64 },\n    { x: new Date('2018-01-21'), y: 11522.86 },\n    { x: new Date('2018-01-22'), y: 10772.15 },\n    { x: new Date('2018-01-23'), y: 10839.83 },\n    { x: new Date('2018-01-24'), y: 11399.52 },\n    { x: new Date('2018-01-25'), y: 11137.24 },\n    { x: new Date('2018-01-26'), y: 11090.06 },\n    { x: new Date('2018-01-27'), y: 11407.15 },\n    { x: new Date('2018-01-28'), y: 11694.47 },\n    { x: new Date('2018-01-29'), y: 11158.39 },\n    { x: new Date('2018-01-30'), y: 10035 },\n    { x: new Date('2018-01-31'), y: 10166.51 },\n    { x: new Date('2018-02-01'), y: 9052.58 },\n    { x: new Date('2018-02-02'), y: 8827.63 },\n    { x: new Date('2018-02-03'), y: 9224.39 },\n    { x: new Date('2018-02-04'), y: 8186.65 },\n    { x: new Date('2018-02-05'), y: 6914.26 },\n    { x: new Date('2018-02-06'), y: 7700.39 },\n    { x: new Date('2018-02-07'), y: 7581.8 },\n    { x: new Date('2018-02-08'), y: 8237.24 },\n    { x: new Date('2018-02-09'), y: 8689.84 },\n    { x: new Date('2018-02-10'), y: 8556.61 },\n    { x: new Date('2018-02-11'), y: 8070.8 },\n    { x: new Date('2018-02-12'), y: 8891.21 },\n    { x: new Date('2018-02-13'), y: 8516.24 },\n    { x: new Date('2018-02-14'), y: 9477.84 },\n    { x: new Date('2018-02-15'), y: 10016.49 },\n    { x: new Date('2018-02-16'), y: 10178.71 },\n    { x: new Date('2018-02-17'), y: 11092.15 },\n    { x: new Date('2018-02-18'), y: 10396.63 },\n    { x: new Date('2018-02-19'), y: 11159.72 },\n    { x: new Date('2018-02-20'), y: 11228.24 },\n    { x: new Date('2018-02-21'), y: 10456.17 },\n    { x: new Date('2018-02-22'), y: 9830.43 },\n    { x: new Date('2018-02-23'), y: 10149.46 },\n    { x: new Date('2018-02-24'), y: 9682.38 },\n    { x: new Date('2018-02-25'), y: 9586.46 },\n    { x: new Date('2018-02-26'), y: 10313.08 },\n    { x: new Date('2018-02-27'), y: 10564.42 },\n    { x: new Date('2018-02-28'), y: 10309.64 },\n    { x: new Date('2018-03-01'), y: 10907.59 },\n    { x: new Date('2018-03-02'), y: 11019.52 },\n    { x: new Date('2018-03-03'), y: 11438.65 },\n    { x: new Date('2018-03-04'), y: 11479.73 },\n    { x: new Date('2018-03-05'), y: 11432.98 },\n    { x: new Date('2018-03-06'), y: 10709.53 },\n    { x: new Date('2018-03-07'), y: 9906.8 },\n    { x: new Date('2018-03-08'), y: 9299.28 },\n    { x: new Date('2018-03-09'), y: 9237.05 },\n    { x: new Date('2018-03-10'), y: 8787.16 },\n    { x: new Date('2018-03-11'), y: 9532.74 },\n    { x: new Date('2018-03-12'), y: 9118.27 },\n    { x: new Date('2018-03-13'), y: 9144.15 },\n    { x: new Date('2018-03-14'), y: 8196.9 },\n    { x: new Date('2018-03-15'), y: 8256.99 },\n    { x: new Date('2018-03-16'), y: 8269.33 },\n    { x: new Date('2018-03-17'), y: 7862.11 },\n    { x: new Date('2018-03-18'), y: 8196.02 },\n    { x: new Date('2018-03-19'), y: 8594.19 },\n    { x: new Date('2018-03-20'), y: 8915.9 },\n    { x: new Date('2018-03-21'), y: 8895.4 },\n    { x: new Date('2018-03-22'), y: 8712.89 },\n    { x: new Date('2018-03-23'), y: 8918.74 },\n    { x: new Date('2018-03-24'), y: 8535.89 },\n    { x: new Date('2018-03-25'), y: 8449.83 },\n    { x: new Date('2018-03-26'), y: 8138.34 },\n    { x: new Date('2018-03-27'), y: 7790.16 },\n    { x: new Date('2018-03-28'), y: 7937.2 },\n    { x: new Date('2018-03-29'), y: 7086.49 },\n    { x: new Date('2018-03-30'), y: 6844.32 },\n    { x: new Date('2018-03-31'), y: 6926.02 },\n    { x: new Date('2018-04-01'), y: 6816.74 },\n    { x: new Date('2018-04-02'), y: 7049.79 },\n    { x: new Date('2018-04-03'), y: 7417.89 },\n    { x: new Date('2018-04-04'), y: 6789.3 },\n    { x: new Date('2018-04-05'), y: 6774.75 },\n    { x: new Date('2018-04-06'), y: 6620.41 },\n    { x: new Date('2018-04-07'), y: 6896.28 },\n    { x: new Date('2018-04-08'), y: 7022.71 },\n    { x: new Date('2018-04-09'), y: 6773.94 },\n    { x: new Date('2018-04-10'), y: 6830.9 },\n    { x: new Date('2018-04-11'), y: 6939.55 },\n    { x: new Date('2018-04-12'), y: 7916.37 },\n    { x: new Date('2018-04-13'), y: 7889.23 },\n    { x: new Date('2018-04-14'), y: 8003.68 },\n    { x: new Date('2018-04-15'), y: 8357.04 },\n    { x: new Date('2018-04-16'), y: 8051.34 },\n    { x: new Date('2018-04-17'), y: 7890.15 },\n    { x: new Date('2018-04-18'), y: 8163.69 },\n    { x: new Date('2018-04-19'), y: 8273.74 },\n    { x: new Date('2018-04-20'), y: 8863.5 },\n    { x: new Date('2018-04-21'), y: 8917.6 },\n    { x: new Date('2018-04-22'), y: 8792.83 },\n    { x: new Date('2018-04-23'), y: 8938.3 },\n    { x: new Date('2018-04-24'), y: 9652.16 },\n    { x: new Date('2018-04-25'), y: 8864.09 },\n    { x: new Date('2018-04-26'), y: 9279 },\n    { x: new Date('2018-04-27'), y: 8978.33 },\n    { x: new Date('2018-04-28'), y: 9342.47 },\n    { x: new Date('2018-04-29'), y: 9392.03 },\n    { x: new Date('2018-04-30'), y: 9244.32 }\n];\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/default-data.ts?");

/***/ }),

/***/ "./Samples/range-navigator/default/main.js":
/*!*************************************************!*\
  !*** ./Samples/range-navigator/default/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-navigator/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-containerDefault[data-v-7d8d3327] {\\n    padding: 0px !important;\\n}\\n#containerDefault[data-v-7d8d3327] {\\n    transform: translate(0, 25%);\\n}\\n#material-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-7d8d3327] {\\n    stop-opacity: 0.9;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-7d8d3327] {\\n    stop-opacity: 0.3;\\n}\\n\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/range-navigator/default/App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B;AACD;IACI,6BAA6B;CAChC;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=7d8d3327&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-containerDefault[data-v-7d8d3327] {\\n    padding: 0px !important;\\n}\\n#containerDefault[data-v-7d8d3327] {\\n    transform: translate(0, 25%);\\n}\\n#material-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-7d8d3327] {\\n    stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-7d8d3327] {\\n    stop-opacity: 0.9;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-7d8d3327] {\\n    stop-opacity: 0.3;\\n}\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/default/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/default/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _default_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-data */ \"./Samples/range-navigator/default/default-data.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"RangeNavigatorPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\nlet themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark'];\nlet borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113'];\nlet regionColor = ['rgba(38, 46, 11, 0.3)', 'rgba(94, 203, 155, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',\n    'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',\n    'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)'];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      valueType: \"DateTime\",\n      labelFormat: 'MMM-yy',\n      tooltip: { enable: true, displayMode: \"Always\" },\n      value: [new Date('2017-09-01'), new Date('2018-02-01')],\n      navigatorStyleSettings: {\n        unselectedRegionColor: \"transparent\",\n        selectedRegionColor: regionColor[themes.indexOf(theme.toLowerCase())]\n      },\n      data: _default_data__WEBPACK_IMPORTED_MODULE_3__[\"bitCoinData\"],\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      theme: theme,\n      fill: \"url(#\" + selectedTheme + \"-gradient-chart)\",\n      border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] }\n    };\n  },\n  \n  provide: {\n    rangeNavigator: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AreaSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"RangeTooltip\"]]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n        this.$refs.range.ej2Instances.refresh();\n      });\n    },\n  methods: {\n  \n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/default/App.vue?vue&type=template&id=7d8d3327&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/default/App.vue?vue&type=template&id=7d8d3327&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('h4',{staticStyle:{\"font-family\":\"Segoe UI\",\"font-weight\":\"500\",\"font-style\":\"normal\",\"font-size\":\"15px\"},attrs:{\"id\":\"default\",\"align\":\"center\"}},[_vm._v(\"Bitcoin (USD) Price Range\")]),_vm._v(\" \"),_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-rangenavigator',{ref:\"range\",staticStyle:{\"display\":\"block\"},attrs:{\"align\":\"center\",\"id\":\"containerDefault\",\"valueType\":_vm.valueType,\"tooltip\":_vm.tooltip,\"value\":_vm.value,\"width\":_vm.width,\"labelFormat\":_vm.labelFormat,\"theme\":_vm.theme,\"navigatorStyleSettings\":_vm.navigatorStyleSettings}},[_c('e-rangenavigator-series-collection',[_c('e-rangenavigator-series',{attrs:{\"dataSource\":_vm.data,\"type\":\"Area\",\"fill\":_vm.fill,\"border\":_vm.border,\"xName\":\"x\",\"yName\":\"y\",\"width\":\"2\"}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('svg',{staticStyle:{\"height\":\"0\"}},[_c('defs',[_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"material-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fabric-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap4-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"highcontrast-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"tailwind-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap5-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"material-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fabric-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"tailwind-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap5-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fluent-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fluent-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1)],1)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample visualizes the bitcoin price range with area series in the range navigator. Selected range values are enhanced with tooltip.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to render and configure the range navigator with area type series. \"),_c('code',[_vm._v(\"tooltip\")]),_vm._v(\" is used to represent selected data value. You can also use \"),_c('code',[_vm._v(\"selectedRegionColor\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"unSelectedRegionColor\")]),_vm._v(\" properties to customize selected and unselected area in range navigator.\\n     \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n         The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the \"),_c('code',[_vm._v(\"DateTime\")]),_vm._v(\" module in the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section\\n         Inject(DateTime) method. To use the tooltip, inject the \"),_c('code',[_vm._v(\"RangeTooltip\")]),_vm._v(\" module in the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });