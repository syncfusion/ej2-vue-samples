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
/******/ 		"chart/data-label-template/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/data-label-template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/data-label-template/App.vue":
/*!***************************************************!*\
  !*** ./Samples/chart/data-label-template/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2f66379a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2f66379a&scoped=true& */ \"./Samples/chart/data-label-template/App.vue?vue&type=template&id=2f66379a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2f66379a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2f66379a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2f66379a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/App.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/chart/data-label-template/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/App.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/App.vue?vue&type=template&id=2f66379a&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/App.vue?vue&type=template&id=2f66379a&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2f66379a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2f66379a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/App.vue?vue&type=template&id=2f66379a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2f66379a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2f66379a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/App.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp1.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp1.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp1_vue_vue_type_template_id_227abb8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp1.vue?vue&type=template&id=227abb8c& */ \"./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=template&id=227abb8c&\");\n/* harmony import */ var _datalabel_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp1.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp1_vue_vue_type_template_id_227abb8c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp1_vue_vue_type_template_id_227abb8c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp1.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp1.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp1.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp1.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=template&id=227abb8c&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=template&id=227abb8c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp1_vue_vue_type_template_id_227abb8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp1.vue?vue&type=template&id=227abb8c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=template&id=227abb8c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp1_vue_vue_type_template_id_227abb8c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp1_vue_vue_type_template_id_227abb8c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp1.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp2.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp2.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp2_vue_vue_type_template_id_2288d30d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp2.vue?vue&type=template&id=2288d30d& */ \"./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=template&id=2288d30d&\");\n/* harmony import */ var _datalabel_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp2.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp2_vue_vue_type_template_id_2288d30d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp2_vue_vue_type_template_id_2288d30d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp2.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp2.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp2.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp2.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=template&id=2288d30d&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=template&id=2288d30d& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp2_vue_vue_type_template_id_2288d30d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp2.vue?vue&type=template&id=2288d30d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=template&id=2288d30d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp2_vue_vue_type_template_id_2288d30d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp2_vue_vue_type_template_id_2288d30d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp2.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp3.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp3.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp3_vue_vue_type_template_id_2296ea8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp3.vue?vue&type=template&id=2296ea8e& */ \"./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=template&id=2296ea8e&\");\n/* harmony import */ var _datalabel_temp3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp3.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp3_vue_vue_type_template_id_2296ea8e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp3_vue_vue_type_template_id_2296ea8e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp3.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp3.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp3.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp3.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=template&id=2296ea8e&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=template&id=2296ea8e& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp3_vue_vue_type_template_id_2296ea8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp3.vue?vue&type=template&id=2296ea8e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=template&id=2296ea8e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp3_vue_vue_type_template_id_2296ea8e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp3_vue_vue_type_template_id_2296ea8e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp3.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp4.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp4.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp4_vue_vue_type_template_id_22a5020f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp4.vue?vue&type=template&id=22a5020f& */ \"./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=template&id=22a5020f&\");\n/* harmony import */ var _datalabel_temp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp4.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp4_vue_vue_type_template_id_22a5020f___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp4_vue_vue_type_template_id_22a5020f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp4.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp4.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp4.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp4.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=template&id=22a5020f&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=template&id=22a5020f& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp4_vue_vue_type_template_id_22a5020f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp4.vue?vue&type=template&id=22a5020f& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=template&id=22a5020f&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp4_vue_vue_type_template_id_22a5020f___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp4_vue_vue_type_template_id_22a5020f___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp4.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp5.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp5.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp5_vue_vue_type_template_id_22b31990___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp5.vue?vue&type=template&id=22b31990& */ \"./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=template&id=22b31990&\");\n/* harmony import */ var _datalabel_temp5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp5.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp5_vue_vue_type_template_id_22b31990___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp5_vue_vue_type_template_id_22b31990___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp5.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp5.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp5.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp5_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp5.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=template&id=22b31990&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=template&id=22b31990& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp5_vue_vue_type_template_id_22b31990___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp5.vue?vue&type=template&id=22b31990& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=template&id=22b31990&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp5_vue_vue_type_template_id_22b31990___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp5_vue_vue_type_template_id_22b31990___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp5.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp6.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp6.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp6_vue_vue_type_template_id_22c13111___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp6.vue?vue&type=template&id=22c13111& */ \"./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=template&id=22c13111&\");\n/* harmony import */ var _datalabel_temp6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp6.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp6_vue_vue_type_template_id_22c13111___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp6_vue_vue_type_template_id_22c13111___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp6.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp6.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp6.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp6.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=template&id=22c13111&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=template&id=22c13111& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp6_vue_vue_type_template_id_22c13111___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp6.vue?vue&type=template&id=22c13111& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=template&id=22c13111&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp6_vue_vue_type_template_id_22c13111___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp6_vue_vue_type_template_id_22c13111___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp6.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp7.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp7.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp7_vue_vue_type_template_id_22cf4892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp7.vue?vue&type=template&id=22cf4892& */ \"./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=template&id=22cf4892&\");\n/* harmony import */ var _datalabel_temp7_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp7.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp7_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp7_vue_vue_type_template_id_22cf4892___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp7_vue_vue_type_template_id_22cf4892___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp7.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp7.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp7_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp7.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp7_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp7.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=template&id=22cf4892&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=template&id=22cf4892& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp7_vue_vue_type_template_id_22cf4892___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp7.vue?vue&type=template&id=22cf4892& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=template&id=22cf4892&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp7_vue_vue_type_template_id_22cf4892___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp7_vue_vue_type_template_id_22cf4892___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp7.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp8.vue":
/*!***************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp8.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _datalabel_temp8_vue_vue_type_template_id_22dd6013___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datalabel-temp8.vue?vue&type=template&id=22dd6013& */ \"./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=template&id=22dd6013&\");\n/* harmony import */ var _datalabel_temp8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalabel-temp8.vue?vue&type=script&lang=js& */ \"./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _datalabel_temp8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _datalabel_temp8_vue_vue_type_template_id_22dd6013___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _datalabel_temp8_vue_vue_type_template_id_22dd6013___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/data-label-template/datalabel-temp8.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp8.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp8.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp8_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp8.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=template&id=22dd6013&":
/*!**********************************************************************************************!*\
  !*** ./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=template&id=22dd6013& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp8_vue_vue_type_template_id_22dd6013___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./datalabel-temp8.vue?vue&type=template&id=22dd6013& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=template&id=22dd6013&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp8_vue_vue_type_template_id_22dd6013___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_datalabel_temp8_vue_vue_type_template_id_22dd6013___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp8.vue?");

/***/ }),

/***/ "./Samples/chart/data-label-template/main.js":
/*!***************************************************!*\
  !*** ./Samples/chart/data-label-template/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/data-label-template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _datalabel_temp1_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datalabel-temp1.vue */ \"./Samples/chart/data-label-template/datalabel-temp1.vue\");\n/* harmony import */ var _datalabel_temp2_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datalabel-temp2.vue */ \"./Samples/chart/data-label-template/datalabel-temp2.vue\");\n/* harmony import */ var _datalabel_temp3_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datalabel-temp3.vue */ \"./Samples/chart/data-label-template/datalabel-temp3.vue\");\n/* harmony import */ var _datalabel_temp4_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datalabel-temp4.vue */ \"./Samples/chart/data-label-template/datalabel-temp4.vue\");\n/* harmony import */ var _datalabel_temp5_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datalabel-temp5.vue */ \"./Samples/chart/data-label-template/datalabel-temp5.vue\");\n/* harmony import */ var _datalabel_temp6_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datalabel-temp6.vue */ \"./Samples/chart/data-label-template/datalabel-temp6.vue\");\n/* harmony import */ var _datalabel_temp7_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datalabel-temp7.vue */ \"./Samples/chart/data-label-template/datalabel-temp7.vue\");\n/* harmony import */ var _datalabel_temp8_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./datalabel-temp8.vue */ \"./Samples/chart/data-label-template/datalabel-temp8.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (\n  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)\n).replace(/-dark/i, \"Dark\");\n\nlet materialMan = function() {\n  return { template: _datalabel_temp1_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"] };\n};\nlet materialWomen = function() {\n  return { template: _datalabel_temp2_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"] };\n};\nlet fabricMan = function() {\n  return { template: _datalabel_temp3_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"] };\n};\nlet fabricWomen = function() {\n  return { template: _datalabel_temp4_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"] };\n};\nlet bootstrapMan = function() {\n  return { template: _datalabel_temp5_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"] };\n};\nlet bootstrapWomen = function() {\n  return { template: _datalabel_temp6_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"] };\n};\nlet highcontrastMan = function() {\n  return { template: _datalabel_temp7_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"] };\n};\nlet highcontrastWomen = function() {\n  return { template: _datalabel_temp8_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"] };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      seriesData: [\n        { x: 2010, y: 1014 },\n        { x: 2011, y: 1040 },\n        { x: 2012, y: 1065 },\n        { x: 2013, y: 1110 },\n        { x: 2014, y: 1130 },\n        { x: 2015, y: 1153 },\n        { x: 2016, y: 1175 }\n      ],\n\n      seriesData1: [\n        { x: 2010, y: 990 },\n        { x: 2011, y: 1010 },\n        { x: 2012, y: 1030 },\n        { x: 2013, y: 1070 },\n        { x: 2014, y: 1105 },\n        { x: 2015, y: 1138 },\n        { x: 2016, y: 1155 }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        minimum: 2010,\n        maximum: 2016,\n        interval: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 2 : 1,\n        edgeLabelPlacement: \"Shift\",\n        labelStyle: {\n          fontFamily: \"Roboto\",\n          fontStyle: \"medium\",\n          size: \"14px\"\n        },\n        majorGridLines: { width: 0 },\n        lineStyle: { color: \"#eaeaea\", width: 1 }\n      },\n\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        labelFormat: \"{value}M\",\n        labelStyle: {\n          fontFamily: \"Roboto\",\n          fontStyle: \"medium\",\n          size: \"14px\"\n        },\n        minimum: 900,\n        maximum: 1300,\n        majorGridLines: {\n          color: \"#eaeaea\",\n          width: 1\n        },\n        lineStyle: {\n          color: \"#eaeaea\",\n          width: 1\n        }\n      },\n\n      width: \"80%\",\n      subTitleStyle: {\n        textAlignment: \"Far\"\n      },\n      titleStyle: {\n        fontFamily: \"Roboto\",\n        fontStyle: \"medium\",\n        size: \"14px\"\n      },\n      chartArea: { border: { width: 0 } },\n      title: \"Population of India Statistics\",\n      subTitle: \"(2010 - 2016)\",\n\n      marker1: {\n        visible: true,\n        shape: \"Rectangle\",\n        dataLabel: {\n          visible: true,\n          position: \"Bottom\",\n          margin: { right: 15 },\n          template: materialWomen\n        }\n      },\n\n      marker: {\n        visible: true,\n        shape: \"Circle\",\n        dataLabel: {\n          visible: true,\n          position: \"Top\",\n          margin: { right: 30 },\n          template: materialMan\n        }\n      }\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"LineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DataLabel\"]]\n  },\n  methods: {\n    textRender: function(args) {\n      if (theme === \"Material\") {\n        args.template =\n          args.series.name === \"Male\" ? materialMan : materialWomen;\n      } else if (theme === \"Fabric\") {\n        args.template = args.series.name === \"Male\" ? fabricMan : fabricWomen;\n      } else {\n        args.template =\n          args.series.name === \"Male\" ? bootstrapMan : bootstrapWomen;\n      }\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp1.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp2.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp3.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp4.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp5.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp6.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp7.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp8.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/App.vue?vue&type=template&id=2f66379a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/App.vue?vue&type=template&id=2f66379a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              subTitle: _vm.subTitle,\n              chartArea: _vm.chartArea,\n              width: _vm.width,\n              textRender: _vm.textRender,\n              subTitleStyle: _vm.subTitleStyle\n            }\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Male\",\n                    width: \"2\",\n                    marker: _vm.marker\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData1,\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Female\",\n                    width: \"2\",\n                    marker: _vm.marker1\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates datalabel template support in the chart. In this sample, images are placed as datalabel by means of templates.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      Label content can be formatted by using the template option in dataLabel. Inside the template, you can add the placeholder\\n      text ${point.y}M to display corresponding data points value.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n      To use dataLabel, we need to inject\\n      \"),\n        _c(\"code\", [_vm._v(\"dataLabel\")]),\n        _vm._v(\" module using\\n      \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [ DataLabel] },\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information on the Crosshair can be found in this  \\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-dataLabelSettingsModel.html\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=template&id=227abb8c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp1.vue?vue&type=template&id=227abb8c& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#00bdae\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp1.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=template&id=2288d30d&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp2.vue?vue&type=template&id=2288d30d& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#404041\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\"'\\n  \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp2.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=template&id=2296ea8e&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp3.vue?vue&type=template&id=2296ea8e& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#4472c4\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp3.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=template&id=22a5020f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp4.vue?vue&type=template&id=22a5020f& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#ed7d31\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp4.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=template&id=22b31990&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp5.vue?vue&type=template&id=22b31990& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#a16ee5\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp5.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=template&id=22c13111&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp6.vue?vue&type=template&id=22c13111& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#f7ce69\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp6.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=template&id=22cf4892&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp7.vue?vue&type=template&id=22cf4892& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#79ECE4\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp7.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=template&id=22dd6013&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/data-label-template/datalabel-temp8.vue?vue&type=template&id=22dd6013& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticStyle: { \"background-color\": \"#E98272\", \"border-radius\": \"3px\" } },\n    [\n      _c(\"img\", {\n        staticStyle: { width: \"24px\", height: \"24px\", padding: \"2px\" },\n        attrs: { src: \"source/chart/images/male.png\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticStyle: {\n            color: \"white\",\n            \"font-family\": \"Roboto\",\n            \"font-style\": \"medium\",\n            \"fontp-size\": \"14px\",\n            float: \"right\",\n            padding: \"2px\",\n            \"line-height\": \"20px\",\n            \"text-align\": \"center\",\n            \"padding-right\": \"6px\"\n          }\n        },\n        [_c(\"span\", [_vm._v(_vm._s(_vm.data.point.y) + \"M \")])]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/data-label-template/datalabel-temp8.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });