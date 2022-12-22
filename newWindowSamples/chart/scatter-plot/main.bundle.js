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
/******/ 		"chart/scatter-plot/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/scatter-plot/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/scatter-plot/App.vue":
/*!********************************************!*\
  !*** ./Samples/chart/scatter-plot/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_51aaf987_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=51aaf987&scoped=true& */ \"./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_51aaf987_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_51aaf987_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"51aaf987\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/scatter-plot/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?");

/***/ }),

/***/ "./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?");

/***/ }),

/***/ "./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_51aaf987_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=51aaf987&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_51aaf987_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_51aaf987_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?");

/***/ }),

/***/ "./Samples/chart/scatter-plot/main.js":
/*!********************************************!*\
  !*** ./Samples/chart/scatter-plot/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/scatter-plot/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/main.js?");

/***/ }),

/***/ "./Samples/chart/scatter-plot/scatter-data.ts":
/*!****************************************************!*\
  !*** ./Samples/chart/scatter-plot/scatter-data.ts ***!
  \****************************************************/
/*! exports provided: scatterData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scatterData\", function() { return scatterData; });\nvar cluster1Value = [\n    { Breadth: 41.3, Circumference: 78.1 },\n    { Breadth: 41.3, Circumference: 78.04 },\n    { Breadth: 42.9, Circumference: 78.9 },\n    { Breadth: 42.4, Circumference: 80.4 },\n    { Breadth: 42.3, Circumference: 81.7 },\n    { Breadth: 42.1, Circumference: 83.9 },\n    { Breadth: 41.9, Circumference: 82.9 },\n    { Breadth: 41.6, Circumference: 84.6 },\n    { Breadth: 41.6, Circumference: 84.6 },\n    { Breadth: 41.5, Circumference: 85.1 },\n    { Breadth: 41.5, Circumference: 84.3 },\n    { Breadth: 41.5, Circumference: 84.3 },\n    { Breadth: 41.9, Circumference: 87.9 },\n    { Breadth: 42.6, Circumference: 84.0 },\n    { Breadth: 42.6, Circumference: 84.0 },\n    { Breadth: 42.9, Circumference: 84.9 },\n    { Breadth: 42.9, Circumference: 84.9 },\n    { Breadth: 43.4, Circumference: 85.8 },\n    { Breadth: 43.1, Circumference: 83.5 },\n    { Breadth: 42.9, Circumference: 82.2 },\n    { Breadth: 43.2, Circumference: 81.7 },\n    { Breadth: 43.5, Circumference: 82.8 },\n    { Breadth: 43.7, Circumference: 82.7 },\n    { Breadth: 43.5, Circumference: 81.3 },\n    { Breadth: 43.7, Circumference: 80.9 },\n    { Breadth: 43.7, Circumference: 80.9 },\n    { Breadth: 43.5, Circumference: 89.4 },\n    { Breadth: 43.5, Circumference: 79.4 },\n    { Breadth: 43.7, Circumference: 89.0 },\n    { Breadth: 43.5, Circumference: 88.4 },\n    { Breadth: 43.5, Circumference: 88.4 },\n    { Breadth: 43.4, Circumference: 89.4 },\n    { Breadth: 43.0, Circumference: 91.5 },\n    { Breadth: 42.6, Circumference: 87.9 },\n    { Breadth: 42.9, Circumference: 88.4 },\n    { Breadth: 42.9, Circumference: 86.8 },\n    { Breadth: 42.9, Circumference: 86.8 },\n    { Breadth: 43.1, Circumference: 88.5 },\n    { Breadth: 44.2, Circumference: 84.7 },\n    { Breadth: 44.2, Circumference: 84.7 },\n    { Breadth: 44.1, Circumference: 88.6 },\n    { Breadth: 44.1, Circumference: 88.6 },\n    { Breadth: 43.9, Circumference: 87.6 },\n    { Breadth: 44.0, Circumference: 86.6 },\n    { Breadth: 44.3, Circumference: 86.5 },\n    { Breadth: 44.3, Circumference: 86.59 },\n    { Breadth: 44.5, Circumference: 86.9 },\n    { Breadth: 44.5, Circumference: 85.5 },\n    { Breadth: 44.8, Circumference: 85.8 },\n    { Breadth: 45.0, Circumference: 84.6 },\n    { Breadth: 45.0, Circumference: 84.64 },\n    { Breadth: 44.9, Circumference: 82.7 },\n    { Breadth: 44.8, Circumference: 83.7 },\n    { Breadth: 44.89, Circumference: 83.75 },\n    { Breadth: 44.6, Circumference: 83.3 },\n    { Breadth: 44.65, Circumference: 83.37 },\n    { Breadth: 44.65, Circumference: 84.5 },\n    { Breadth: 44.65, Circumference: 84.53 },\n    { Breadth: 44.2, Circumference: 81.8 },\n    { Breadth: 44.9, Circumference: 80.2 },\n    { Breadth: 45.1, Circumference: 85.5 },\n    { Breadth: 44.7, Circumference: 87.1 },\n    { Breadth: 44.70, Circumference: 87.10 },\n    { Breadth: 44.70, Circumference: 87.1 },\n    { Breadth: 44.9, Circumference: 86.8 },\n    { Breadth: 45.1, Circumference: 87.2 },\n    { Breadth: 45.0, Circumference: 88.6 },\n    { Breadth: 45.0, Circumference: 89.4 },\n    { Breadth: 45.0, Circumference: 89.4 },\n    { Breadth: 44.7, Circumference: 88.5 },\n    { Breadth: 44.4, Circumference: 88.3 },\n    { Breadth: 44.4, Circumference: 88.39 },\n    { Breadth: 44.5, Circumference: 89.4 },\n    { Breadth: 44.4, Circumference: 90.0 },\n    { Breadth: 43.9, Circumference: 89.3 },\n    { Breadth: 44.2, Circumference: 90.2 },\n    { Breadth: 44.0, Circumference: 91.2 },\n    { Breadth: 44.0, Circumference: 91.24 },\n    { Breadth: 44.1, Circumference: 88.5 },\n    { Breadth: 44.16, Circumference: 88.53 },\n    { Breadth: 44.16, Circumference: 88.535 },\n    { Breadth: 44.2, Circumference: 91.7 },\n    { Breadth: 44.2, Circumference: 91.75 },\n    { Breadth: 43.9, Circumference: 92.79 },\n    { Breadth: 43.9, Circumference: 92.7 },\n    { Breadth: 44.2, Circumference: 94.8 },\n    { Breadth: 44.0, Circumference: 93.8 },\n    { Breadth: 44.0, Circumference: 93.81 },\n    { Breadth: 44.4, Circumference: 95.6 },\n    { Breadth: 44.8, Circumference: 97.4 },\n    { Breadth: 44.8, Circumference: 93.6 },\n    { Breadth: 44.8, Circumference: 93.67 },\n    { Breadth: 44.6, Circumference: 92.5 },\n    { Breadth: 44.7, Circumference: 94.5 },\n    { Breadth: 45.2, Circumference: 92.2 },\n    { Breadth: 45.2, Circumference: 92.24 },\n    { Breadth: 45.1, Circumference: 94.0 },\n    { Breadth: 45.1, Circumference: 94.0 },\n    { Breadth: 44.9, Circumference: 90.4 },\n    { Breadth: 44.9, Circumference: 89.4 },\n    { Breadth: 44.7, Circumference: 90.4 },\n    { Breadth: 44.7, Circumference: 90.45 },\n    { Breadth: 41.3, Circumference: 78.0 },\n    { Breadth: 42.9, Circumference: 78.9 },\n    { Breadth: 42.4, Circumference: 80.4 },\n    { Breadth: 42.3, Circumference: 81.7 },\n    { Breadth: 42.1, Circumference: 83.9 },\n    { Breadth: 41.9, Circumference: 82.9 },\n    { Breadth: 41.6, Circumference: 84.6 },\n    { Breadth: 41.6, Circumference: 84.60 },\n    { Breadth: 41.5, Circumference: 85.1 },\n    { Breadth: 41.5, Circumference: 84.3 },\n    { Breadth: 41.5, Circumference: 84.34 },\n    { Breadth: 41.9, Circumference: 87.9 },\n    { Breadth: 42.6, Circumference: 84.0 },\n    { Breadth: 42.6, Circumference: 84.0 },\n    { Breadth: 42.9, Circumference: 84.9 },\n    { Breadth: 42.9, Circumference: 84.9 },\n    { Breadth: 43.4, Circumference: 85.8 },\n    { Breadth: 43.1, Circumference: 83.5 },\n    { Breadth: 42.9, Circumference: 82.2 },\n    { Breadth: 43.2, Circumference: 81.7 },\n    { Breadth: 43.5, Circumference: 82.8 },\n    { Breadth: 43.7, Circumference: 82.7 },\n    { Breadth: 43.5, Circumference: 81.3 },\n    { Breadth: 43.7, Circumference: 80.9 },\n    { Breadth: 43.7, Circumference: 80.94 },\n    { Breadth: 43.5, Circumference: 79.4 },\n    { Breadth: 43.5, Circumference: 79.40 },\n    { Breadth: 43.7, Circumference: 89.0 },\n    { Breadth: 43.5, Circumference: 88.4 },\n    { Breadth: 43.5, Circumference: 88.42 },\n    { Breadth: 43.4, Circumference: 89.45 },\n    { Breadth: 43.0, Circumference: 91.5 },\n    { Breadth: 42.6, Circumference: 87.9 },\n    { Breadth: 42.9, Circumference: 88.4 },\n    { Breadth: 42.9, Circumference: 86.8 },\n    { Breadth: 42.95, Circumference: 86.89 },\n    { Breadth: 43.1, Circumference: 88.5 },\n    { Breadth: 44.2, Circumference: 84.7 },\n    { Breadth: 44.2, Circumference: 84.7 },\n    { Breadth: 44.1, Circumference: 88.6 },\n    { Breadth: 44.1, Circumference: 88.66 },\n    { Breadth: 43.9, Circumference: 87.6 },\n    { Breadth: 44.0, Circumference: 86.6 },\n    { Breadth: 44.3, Circumference: 86.5 },\n    { Breadth: 44.3, Circumference: 86.5 },\n    { Breadth: 44.5, Circumference: 86.9 },\n    { Breadth: 44.57, Circumference: 85.5 },\n    { Breadth: 44.8, Circumference: 85.8 },\n    { Breadth: 45.0, Circumference: 84.6 },\n    { Breadth: 45.0, Circumference: 84.64 },\n    { Breadth: 44.9, Circumference: 82.7 },\n    { Breadth: 44.8, Circumference: 83.7 },\n    { Breadth: 44.8, Circumference: 83.75 },\n    { Breadth: 44.6, Circumference: 83.3 },\n    { Breadth: 44.65, Circumference: 83.37 },\n    { Breadth: 44.65, Circumference: 84.5 },\n    { Breadth: 44.65, Circumference: 84.53 },\n    { Breadth: 44.2, Circumference: 81.8 },\n    { Breadth: 44.9, Circumference: 80.2 },\n    { Breadth: 45.1, Circumference: 85.5 },\n    { Breadth: 44.7, Circumference: 87.1 },\n    { Breadth: 44.7, Circumference: 87.10 },\n    { Breadth: 44.70, Circumference: 87.10 },\n    { Breadth: 44.9, Circumference: 86.8 },\n    { Breadth: 45.1, Circumference: 87.2 },\n    { Breadth: 45.0, Circumference: 88.6 },\n    { Breadth: 45.0, Circumference: 89.4 },\n    { Breadth: 45.0, Circumference: 89.41 },\n    { Breadth: 44.7, Circumference: 88.5 },\n    { Breadth: 44.4, Circumference: 88.3 },\n    { Breadth: 44.4, Circumference: 88.3 },\n    { Breadth: 44.5, Circumference: 89.4 },\n    { Breadth: 44.4, Circumference: 90.0 },\n    { Breadth: 43.9, Circumference: 89.3 },\n    { Breadth: 44.20, Circumference: 90.2 },\n    { Breadth: 44.0, Circumference: 91.2 },\n    { Breadth: 44.0, Circumference: 91.24 },\n    { Breadth: 44.1, Circumference: 88.5 },\n    { Breadth: 44.1, Circumference: 88.53 },\n    { Breadth: 44.16, Circumference: 88.5 },\n    { Breadth: 44.2, Circumference: 91.7 },\n    { Breadth: 44.2, Circumference: 91.75 },\n    { Breadth: 43.9, Circumference: 92.7 },\n    { Breadth: 43.9, Circumference: 92.79 },\n    { Breadth: 44.2, Circumference: 94.8 },\n    { Breadth: 44.0, Circumference: 93.8 },\n    { Breadth: 44.0, Circumference: 93.81 },\n    { Breadth: 44.4, Circumference: 95.6 },\n    { Breadth: 44.8, Circumference: 97.4 },\n    { Breadth: 44.8, Circumference: 93.6 },\n    { Breadth: 44.81, Circumference: 93.67 },\n    { Breadth: 44.6, Circumference: 92.5 },\n    { Breadth: 44.7, Circumference: 94.57 },\n    { Breadth: 45.2, Circumference: 92.2 },\n    { Breadth: 45.2, Circumference: 92.24 },\n    { Breadth: 45.1, Circumference: 94.0 },\n    { Breadth: 45.1, Circumference: 94.0 },\n    { Breadth: 44.9, Circumference: 90.4 },\n    { Breadth: 44.9, Circumference: 89.4 },\n    { Breadth: 44.7, Circumference: 90.4 },\n    { Breadth: 44.7, Circumference: 90.45 },\n];\nvar cluster2Value = [\n    { Breadth: 45.6, Circumference: 91.6 },\n    { Breadth: 46.0, Circumference: 92.6 },\n    { Breadth: 46.4, Circumference: 94.7 },\n    { Breadth: 46.9, Circumference: 97.3 },\n    { Breadth: 46.9, Circumference: 97.3 },\n    { Breadth: 46.8, Circumference: 98.7 },\n    { Breadth: 46.84, Circumference: 98.72 },\n    { Breadth: 45.4, Circumference: 95.9 },\n    { Breadth: 45.4, Circumference: 94.8 },\n    { Breadth: 45.2, Circumference: 97.2 },\n    { Breadth: 45.2, Circumference: 95.9 },\n    { Breadth: 45.3, Circumference: 97.4 },\n    { Breadth: 46.2, Circumference: 96.6 },\n    { Breadth: 46.2, Circumference: 98.3 },\n    { Breadth: 46.3, Circumference: 96.9 },\n    { Breadth: 46.3, Circumference: 96.9 },\n    { Breadth: 46.0, Circumference: 97.0 },\n    { Breadth: 46.0, Circumference: 97.7 },\n    { Breadth: 45.7, Circumference: 97.5 },\n    { Breadth: 45.7, Circumference: 98.8 },\n    { Breadth: 45.79, Circumference: 98.88 },\n    { Breadth: 45.79, Circumference: 98.88 },\n    { Breadth: 45.6, Circumference: 98.7 },\n    { Breadth: 45.63, Circumference: 98.75 },\n    { Breadth: 45.5, Circumference: 99.9 },\n    { Breadth: 45.6, Circumference: 101.4 },\n    { Breadth: 45.7, Circumference: 102.6 },\n    { Breadth: 45.7, Circumference: 102.62 },\n    { Breadth: 45.3, Circumference: 101.3 },\n    { Breadth: 45.3, Circumference: 103.0 },\n    { Breadth: 45.1, Circumference: 100.7 },\n    { Breadth: 45.1, Circumference: 100.70 },\n    { Breadth: 45.5, Circumference: 102.7 },\n    { Breadth: 45.5, Circumference: 103.9 },\n    { Breadth: 45.4, Circumference: 105.3 },\n    { Breadth: 45.2, Circumference: 108.1 },\n    { Breadth: 45.6, Circumference: 108.2 },\n    { Breadth: 45.5, Circumference: 107.3 },\n    { Breadth: 46.3, Circumference: 107.6 },\n    { Breadth: 45.9, Circumference: 106.0 },\n    { Breadth: 45.8, Circumference: 104.9 },\n    { Breadth: 45.9, Circumference: 104.1 },\n    { Breadth: 46.0, Circumference: 103.7 },\n    { Breadth: 46.07, Circumference: 105.3 },\n    { Breadth: 46.0, Circumference: 105.31 },\n    { Breadth: 46.3, Circumference: 105.4 },\n    { Breadth: 46.3, Circumference: 105.43 },\n    { Breadth: 46.5, Circumference: 105.1 },\n    { Breadth: 46.58, Circumference: 105.17 },\n    { Breadth: 46.6, Circumference: 104.5 },\n    { Breadth: 46.7, Circumference: 104.2 },\n    { Breadth: 46.5, Circumference: 102.9 },\n    { Breadth: 46.4, Circumference: 102.7 },\n    { Breadth: 46.0, Circumference: 102.6 },\n    { Breadth: 46.2, Circumference: 104.1 },\n    { Breadth: 46.2, Circumference: 104.15 },\n    { Breadth: 46.2, Circumference: 104.15 },\n    { Breadth: 46.3, Circumference: 101.3 },\n    { Breadth: 46.6, Circumference: 100.4 },\n    { Breadth: 46.4, Circumference: 99.6 },\n    { Breadth: 46.4, Circumference: 100.2 },\n    { Breadth: 46.1, Circumference: 100.29 },\n    { Breadth: 45.9, Circumference: 99.5 },\n    { Breadth: 46.94, Circumference: 102.0 },\n    { Breadth: 46.9, Circumference: 102.07 },\n    { Breadth: 47.1, Circumference: 99.8 },\n    { Breadth: 46.8, Circumference: 101.1 },\n    { Breadth: 47.0, Circumference: 101.2 },\n    { Breadth: 47.7, Circumference: 96.7 },\n    { Breadth: 47.5, Circumference: 98.9 },\n    { Breadth: 47.5, Circumference: 100.3 },\n    { Breadth: 47.5, Circumference: 100.38 },\n    { Breadth: 47.5, Circumference: 101.5 },\n    { Breadth: 47.2, Circumference: 102.9 },\n    { Breadth: 46.8, Circumference: 103.7 },\n    { Breadth: 47.1, Circumference: 102.4 },\n    { Breadth: 46.9, Circumference: 104.2 },\n    { Breadth: 47.0, Circumference: 105.2 },\n    { Breadth: 46.7, Circumference: 106.4 },\n    { Breadth: 47.1, Circumference: 106.0 },\n    { Breadth: 46.9, Circumference: 106.0 },\n    { Breadth: 47.0, Circumference: 106.4 },\n    { Breadth: 47.2, Circumference: 106.5 },\n    { Breadth: 47.2, Circumference: 108.2 },\n    { Breadth: 47.2, Circumference: 109.1 },\n    { Breadth: 47.0, Circumference: 109.9 },\n    { Breadth: 46.9, Circumference: 108.3 },\n    { Breadth: 46.5, Circumference: 108.9 },\n    { Breadth: 47.1, Circumference: 113.9 },\n    { Breadth: 46.3, Circumference: 113.5 },\n    { Breadth: 46.3, Circumference: 110.8 },\n    { Breadth: 46.32, Circumference: 110.8 },\n    { Breadth: 46.4, Circumference: 111.7 },\n    { Breadth: 46.8, Circumference: 112.2 },\n    { Breadth: 46.9, Circumference: 112.2 },\n    { Breadth: 47.1, Circumference: 111.7 },\n    { Breadth: 47.3, Circumference: 110.8 },\n    { Breadth: 47.4, Circumference: 106.8 },\n];\nvar cluster3Value = [\n    { Breadth: 47.6, Circumference: 96.5 },\n    { Breadth: 47.6, Circumference: 98.3 },\n    { Breadth: 47.5, Circumference: 100.2 },\n    { Breadth: 47.5, Circumference: 103.0 },\n    { Breadth: 47.6, Circumference: 104.3 },\n    { Breadth: 47.8, Circumference: 103.7 },\n    { Breadth: 48.3, Circumference: 102.9 },\n    { Breadth: 48.2, Circumference: 103.7 },\n    { Breadth: 48.3, Circumference: 103.8 },\n    { Breadth: 48.6, Circumference: 103.7 },\n    { Breadth: 48.7, Circumference: 104.4 },\n    { Breadth: 48.8, Circumference: 103.7 },\n    { Breadth: 48.3, Circumference: 105.5 },\n    { Breadth: 48.3, Circumference: 105.52 },\n    { Breadth: 48.4, Circumference: 106.2 },\n    { Breadth: 48.46, Circumference: 104.7 },\n    { Breadth: 48.7, Circumference: 104.9 },\n    { Breadth: 48.7, Circumference: 104.99 },\n    { Breadth: 48.7, Circumference: 104.9 },\n    { Breadth: 48.8, Circumference: 106.66 },\n    { Breadth: 49.3, Circumference: 106.2 },\n    { Breadth: 49.0, Circumference: 106.0 },\n    { Breadth: 49.2, Circumference: 104.3 },\n    { Breadth: 49.7, Circumference: 109.8 },\n    { Breadth: 49.6, Circumference: 108.0 },\n    { Breadth: 49.5, Circumference: 108.0 },\n    { Breadth: 49.3, Circumference: 106.7 },\n    { Breadth: 49.1, Circumference: 106.78 },\n    { Breadth: 49.0, Circumference: 108.3 },\n    { Breadth: 49.1, Circumference: 109.2 },\n    { Breadth: 49.3, Circumference: 108.0 },\n    { Breadth: 48.9, Circumference: 107.3 },\n    { Breadth: 47.7, Circumference: 106.9 },\n    { Breadth: 48.1, Circumference: 106.6 },\n    { Breadth: 47.9, Circumference: 105.9 },\n    { Breadth: 47.9, Circumference: 107.5 },\n    { Breadth: 47.8, Circumference: 107.0 },\n    { Breadth: 47.8, Circumference: 107.0 },\n    { Breadth: 48.3, Circumference: 107.06 },\n    { Breadth: 48.1, Circumference: 108.1 },\n    { Breadth: 48.4, Circumference: 107.7 },\n    { Breadth: 48.2, Circumference: 107.71 },\n    { Breadth: 48.3, Circumference: 108.8 },\n    { Breadth: 48.31, Circumference: 109.8 },\n    { Breadth: 48.0, Circumference: 108.8 },\n    { Breadth: 47.9, Circumference: 109.3 },\n    { Breadth: 47.8, Circumference: 109.9 },\n    { Breadth: 47.8, Circumference: 110.9 },\n    { Breadth: 47.82, Circumference: 112.4 },\n    { Breadth: 48.1, Circumference: 112.6 },\n    { Breadth: 47.9, Circumference: 111.3 },\n    { Breadth: 47.9, Circumference: 111.32 },\n    { Breadth: 48.6, Circumference: 112.9 },\n    { Breadth: 48.0, Circumference: 113.2 },\n    { Breadth: 47.8, Circumference: 108.8 },\n    { Breadth: 49.0, Circumference: 115.0 },\n    { Breadth: 48.9, Circumference: 115.0 },\n    { Breadth: 47.6, Circumference: 108.2 },\n    { Breadth: 47.6, Circumference: 110.0 },\n    { Breadth: 47.7, Circumference: 108.6 },\n    { Breadth: 47.9, Circumference: 117.5 },\n    { Breadth: 48.3, Circumference: 118.3 },\n    { Breadth: 48.6, Circumference: 118.9 },\n    { Breadth: 48.7, Circumference: 122.3 },\n    { Breadth: 49.4, Circumference: 120.8 },\n    { Breadth: 49.3, Circumference: 117.7 },\n    { Breadth: 48.6, Circumference: 115.9 },\n    { Breadth: 48.7, Circumference: 116.4 },\n    { Breadth: 48.3, Circumference: 115.5 },\n    { Breadth: 49.2, Circumference: 115.2 },\n    { Breadth: 49.5, Circumference: 115.27 },\n    { Breadth: 48.6, Circumference: 113.2 },\n    { Breadth: 48.5, Circumference: 112.4 },\n    { Breadth: 49.0, Circumference: 113.2 },\n    { Breadth: 48.9, Circumference: 112.5 },\n    { Breadth: 48.8, Circumference: 110.9 },\n    { Breadth: 48.6, Circumference: 109.8 },\n    { Breadth: 48.6, Circumference: 108.0 },\n    { Breadth: 48.5, Circumference: 110.4 },\n    { Breadth: 48.5, Circumference: 108.8 },\n    { Breadth: 48.8, Circumference: 110.6 },\n    { Breadth: 48.8, Circumference: 110.65 },\n    { Breadth: 49.0, Circumference: 109.8 },\n    { Breadth: 49.2, Circumference: 111.6 },\n    { Breadth: 48.8, Circumference: 111.9 },\n    { Breadth: 48.9, Circumference: 111.6 },\n    { Breadth: 49.3, Circumference: 111.4 },\n    { Breadth: 49.3, Circumference: 111.42 },\n    { Breadth: 49.3, Circumference: 111.6 },\n    { Breadth: 49.4, Circumference: 112.1 },\n    { Breadth: 49.5, Circumference: 112.9 },\n    { Breadth: 49.7, Circumference: 113.2 },\n    { Breadth: 49.9, Circumference: 113.3 },\n    { Breadth: 49.6, Circumference: 113.7 },\n    { Breadth: 48.9, Circumference: 111.3 },\n    { Breadth: 49.0, Circumference: 112.0 },\n    { Breadth: 48.8, Circumference: 109.3 },\n];\nvar cluster4Value = [\n    { Breadth: 50.3, Circumference: 107.0 },\n    { Breadth: 50.1, Circumference: 107.5 },\n    { Breadth: 50.0, Circumference: 110.2 },\n    { Breadth: 49.8, Circumference: 110.7 },\n    { Breadth: 50.0, Circumference: 111.2 },\n    { Breadth: 50.0, Circumference: 112.0 },\n    { Breadth: 50.1, Circumference: 112.17 },\n    { Breadth: 50.0, Circumference: 113.2 },\n    { Breadth: 50.6, Circumference: 113.4 },\n    { Breadth: 50.3, Circumference: 114.7 },\n    { Breadth: 50.3, Circumference: 115.3 },\n    { Breadth: 50.2, Circumference: 116.5 },\n    { Breadth: 49.8, Circumference: 116.8 },\n    { Breadth: 49.9, Circumference: 117.9 },\n    { Breadth: 49.94, Circumference: 121.9 },\n    { Breadth: 50.3, Circumference: 123.2 },\n    { Breadth: 50.6, Circumference: 121.4 },\n    { Breadth: 50.9, Circumference: 121.0 },\n    { Breadth: 50.7, Circumference: 118.4 },\n    { Breadth: 50.70, Circumference: 118.2 },\n    { Breadth: 50.8, Circumference: 117.1 },\n    { Breadth: 50.8, Circumference: 115.2 },\n    { Breadth: 50.9, Circumference: 112.7 },\n    { Breadth: 50.6, Circumference: 112.4 },\n    { Breadth: 50.5, Circumference: 111.5 },\n    { Breadth: 50.7, Circumference: 110.6 },\n    { Breadth: 50.7, Circumference: 111.3 },\n    { Breadth: 50.8, Circumference: 110.9 },\n    { Breadth: 51.0, Circumference: 111.8 },\n    { Breadth: 50.7, Circumference: 108.8 },\n    { Breadth: 50.6, Circumference: 108.2 },\n    { Breadth: 50.65, Circumference: 108.2 },\n    { Breadth: 51.2, Circumference: 108.6 },\n    { Breadth: 51.8, Circumference: 112.0 },\n    { Breadth: 52.3, Circumference: 113.6 },\n    { Breadth: 51.1, Circumference: 115.4 },\n    { Breadth: 51.8, Circumference: 115.7 },\n    { Breadth: 51.7, Circumference: 117.2 },\n    { Breadth: 52.0, Circumference: 119.5 },\n    { Breadth: 52.0, Circumference: 120.6 },\n    { Breadth: 51.9, Circumference: 122.9 },\n    { Breadth: 51.9, Circumference: 124.8 },\n    { Breadth: 51.17, Circumference: 124.7 },\n    { Breadth: 52.3, Circumference: 128.0 },\n    { Breadth: 52.3, Circumference: 128.0 },\n    { Breadth: 52.6, Circumference: 124.9 },\n    { Breadth: 52.7, Circumference: 124.2 },\n    { Breadth: 52.5, Circumference: 120.2 },\n    { Breadth: 52.8, Circumference: 119.7 }\n];\nvar cluster5Value = [\n    { Breadth: 53.1, Circumference: 121.3 },\n    { Breadth: 53.0, Circumference: 122.4 },\n    { Breadth: 54.6, Circumference: 133.4 },\n    { Breadth: 53.3, Circumference: 122.6 },\n    { Breadth: 53.6, Circumference: 125.4 },\n    { Breadth: 53.9, Circumference: 128.5 },\n    { Breadth: 53.3, Circumference: 125.7 },\n    { Breadth: 53.3, Circumference: 125.78 },\n    { Breadth: 54.0, Circumference: 127.0 },\n    { Breadth: 54.0, Circumference: 127.05 },\n    { Breadth: 53.1, Circumference: 127.3 },\n    { Breadth: 53.6, Circumference: 121.36 },\n    { Breadth: 52.6, Circumference: 123.4 },\n    { Breadth: 54.0, Circumference: 123.2 },\n    { Breadth: 53.8, Circumference: 124.8 },\n    { Breadth: 53.3, Circumference: 123.3 },\n    { Breadth: 53.3, Circumference: 124.3 },\n    { Breadth: 53.8, Circumference: 123.6 },\n    { Breadth: 53.8, Circumference: 124.61 },\n    { Breadth: 53.5, Circumference: 123.5 }\n];\nvar scatterData = {\n    'getCluster1Value': cluster1Value,\n    'getCluster2Value': cluster2Value,\n    'getCluster3Value': cluster3Value,\n    'getCluster4Value': cluster4Value,\n    'getCluster5Value': cluster5Value,\n};\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/scatter-data.ts?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _scatter_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatter-data */ \"./Samples/chart/scatter-plot/scatter-data.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n         series1: _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getCluster1Value,\n         series2: _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getCluster2Value,\n         series3: _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getCluster3Value,\n         series4: _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getCluster4Value,\n         series5: _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getCluster5Value,\n           //Initializing Primary X Axis\n      primaryXAxis: {\n            minimum: 40,\n            maximum: 56,\n            majorGridLines: { width: 0 },\n            title: 'Shoulder Breadth (cm)'\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n\n\n      //Initializing Primary Y Axis\n         primaryYAxis:\n            {\n                mmajorTickLines: { width: 0 },\n                minimum: 70,\n                maximum: 140,\n                interval: 10,\n                lineStyle: {\n                    width: 0\n                },\n                rangePadding: 'None',\n                title: 'Bust Chest Circumference (cm)'\n            },\n\n        marker: {\n                    width: 9,\n                    height: 9,\n                    shape: 'Circle'\n                },\n\n       width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '75%',\n       legend: {enableHighlight : true},\n      tooltip: { \n            enable: true,\n         },\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ScatterSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Highlight\"] ]\n  },\n  methods: {\n   \n },\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              chartArea: _vm.chartArea,\n              width: _vm.width,\n              tooltip: _vm.tooltip,\n              legendSettings: _vm.legend,\n            },\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.series1,\n                    type: \"Scatter\",\n                    xName: \"Breadth\",\n                    yName: \"Circumference\",\n                    name: \"18-20 Years\",\n                    width: \"2\",\n                    marker: _vm.marker,\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.series2,\n                    type: \"Scatter\",\n                    xName: \"Breadth\",\n                    yName: \"Circumference\",\n                    name: \"21-25 Years\",\n                    width: \"2\",\n                    marker: _vm.marker,\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.series3,\n                    type: \"Scatter\",\n                    xName: \"Breadth\",\n                    yName: \"Circumference\",\n                    name: \"26-30 Years\",\n                    width: \"2\",\n                    marker: _vm.marker,\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.series4,\n                    type: \"Scatter\",\n                    xName: \"Breadth\",\n                    yName: \"Circumference\",\n                    name: \"31-35 years\",\n                    width: \"2\",\n                    marker: _vm.marker,\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.series5,\n                    type: \"Scatter\",\n                    xName: \"Breadth\",\n                    yName: \"Circumference\",\n                    name: \"36+ Years\",\n                    width: \"2\",\n                    marker: _vm.marker,\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This Vue scatter plot chart example compares the shoulder and chest measurements for different age groups using the default scatter series.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure the scatter chart. The scatter chart is used to plot data with two numeric parameters. You can use the \"\n        ),\n        _c(\"code\", [_vm._v(\"Shape\")]),\n        _vm._v(\" property in the marker to change the scatter shape.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Tooltip\")]),\n        _vm._v(\n          \" is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Chart component features are segregated into individual feature-wise modules. To use scatter series, we need to inject\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"ScatterSeries\")]),\n        _vm._v(\" module using\\n        \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [StackingBarSeries] }\")]),\n        _vm._v(\" method.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about the scatter series can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#scatter-charts\",\n            },\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });