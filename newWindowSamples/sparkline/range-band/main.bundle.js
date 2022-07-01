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
/******/ 		"sparkline/range-band/main": 0
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
/******/ 	deferredModules.push(["./Samples/sparkline/range-band/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/sparkline/range-band/App.vue":
/*!**********************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b7ac16ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b7ac16ae& */ \"./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_b7ac16ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_b7ac16ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sparkline/range-band/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae&":
/*!*****************************************************************************!*\
  !*** ./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b7ac16ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b7ac16ae& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b7ac16ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b7ac16ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-one.vue":
/*!**************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-one.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _column_template_one_vue_vue_type_template_id_7560e5d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-template-one.vue?vue&type=template&id=7560e5d2& */ \"./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2&\");\n/* harmony import */ var _column_template_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-template-one.vue?vue&type=script&lang=js& */ \"./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _column_template_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _column_template_one_vue_vue_type_template_id_7560e5d2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _column_template_one_vue_vue_type_template_id_7560e5d2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sparkline/range-band/column-template-one.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-one.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./column-template-one.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_one_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-one.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2&":
/*!*********************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_one_vue_vue_type_template_id_7560e5d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./column-template-one.vue?vue&type=template&id=7560e5d2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_one_vue_vue_type_template_id_7560e5d2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_one_vue_vue_type_template_id_7560e5d2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-one.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-two.vue":
/*!**************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-two.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _column_template_two_vue_vue_type_template_id_e46ed290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column-template-two.vue?vue&type=template&id=e46ed290& */ \"./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290&\");\n/* harmony import */ var _column_template_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-template-two.vue?vue&type=script&lang=js& */ \"./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _column_template_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _column_template_two_vue_vue_type_template_id_e46ed290___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _column_template_two_vue_vue_type_template_id_e46ed290___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sparkline/range-band/column-template-two.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-two.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./column-template-two.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-two.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290&":
/*!*********************************************************************************************!*\
  !*** ./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_two_vue_vue_type_template_id_e46ed290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./column-template-two.vue?vue&type=template&id=e46ed290& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_two_vue_vue_type_template_id_e46ed290___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_column_template_two_vue_vue_type_template_id_e46ed290___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-two.vue?");

/***/ }),

/***/ "./Samples/sparkline/range-band/datasource.ts":
/*!****************************************************!*\
  !*** ./Samples/sparkline/range-band/datasource.ts ***!
  \****************************************************/
/*! exports provided: orderdata, products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"orderdata\", function() { return orderdata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"products\", function() { return products; });\n// tslint:disable\nvar orderdata = [{\n        OrderID: 10248,\n        CustomerID: \"VINET\",\n        EmployeeID: 1,\n        OrderDate: new Date(8364186e5),\n        ShipName: \"Vins et alcools Chevalier\",\n        ShipCity: \"Reims\",\n        ShipAddress: \"59 rue de l'Abbaye\",\n        ShipRegion: null,\n        ShipPostalCode: \"51100\",\n        ShipCountry: \"France\",\n        Freight: 32.38,\n        Verified: !0\n    }, {\n        OrderID: 10249,\n        CustomerID: \"TOMSP\",\n        EmployeeID: 2,\n        OrderDate: new Date(836505e6),\n        ShipName: \"Toms Spezialit�ten\",\n        ShipCity: \"M�nster\",\n        ShipAddress: \"Luisenstr. 48\",\n        ShipRegion: null,\n        ShipPostalCode: \"44087\",\n        ShipCountry: \"Germany\",\n        Freight: 11.61,\n        Verified: !1\n    }, {\n        OrderID: 10250,\n        CustomerID: \"HANAR\",\n        EmployeeID: 3,\n        OrderDate: new Date(8367642e5),\n        ShipName: \"Hanari Carnes\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua do Pa�o, 67\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"05454-876\",\n        ShipCountry: \"Brazil\",\n        Freight: 65.83,\n        Verified: !0\n    }, {\n        OrderID: 10251,\n        CustomerID: \"VICTE\",\n        EmployeeID: 4,\n        OrderDate: new Date(8367642e5),\n        ShipName: \"Victuailles en stock\",\n        ShipCity: \"Lyon\",\n        ShipAddress: \"2, rue du Commerce\",\n        ShipRegion: null,\n        ShipPostalCode: \"69004\",\n        ShipCountry: \"France\",\n        Freight: 41.34,\n        Verified: !0\n    }, {\n        OrderID: 10252,\n        CustomerID: \"SUPRD\",\n        EmployeeID: 5,\n        OrderDate: new Date(8368506e5),\n        ShipName: \"Supr�mes d�lices\",\n        ShipCity: \"Charleroi\",\n        ShipAddress: \"Boulevard Tirou, 255\",\n        ShipRegion: null,\n        ShipPostalCode: \"B-6000\",\n        ShipCountry: \"Belgium\",\n        Freight: 51.3,\n        Verified: !0\n    }, {\n        OrderID: 10253,\n        CustomerID: \"HANAR\",\n        EmployeeID: 6,\n        OrderDate: new Date(836937e6),\n        ShipName: \"Hanari Carnes\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua do Pa�o, 67\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"05454-876\",\n        ShipCountry: \"Brazil\",\n        Freight: 58.17,\n        Verified: !0\n    }, {\n        OrderID: 10254,\n        CustomerID: \"CHOPS\",\n        EmployeeID: 7,\n        OrderDate: new Date(8370234e5),\n        ShipName: \"Chop-suey Chinese\",\n        ShipCity: \"Bern\",\n        ShipAddress: \"Hauptstr. 31\",\n        ShipRegion: null,\n        ShipPostalCode: \"3012\",\n        ShipCountry: \"Switzerland\",\n        Freight: 22.98,\n        Verified: !1\n    }, {\n        OrderID: 10255,\n        CustomerID: \"RICSU\",\n        EmployeeID: 8,\n        OrderDate: new Date(8371098e5),\n        ShipName: \"Richter Supermarkt\",\n        ShipCity: \"Gen�ve\",\n        ShipAddress: \"Starenweg 5\",\n        ShipRegion: null,\n        ShipPostalCode: \"1204\",\n        ShipCountry: \"Switzerland\",\n        Freight: 148.33,\n        Verified: !0\n    }, {\n        OrderID: 10256,\n        CustomerID: \"WELLI\",\n        EmployeeID: 9,\n        OrderDate: new Date(837369e6),\n        ShipName: \"Wellington Importadora\",\n        ShipCity: \"Resende\",\n        ShipAddress: \"Rua do Mercado, 12\",\n        ShipRegion: \"SP\",\n        ShipPostalCode: \"08737-363\",\n        ShipCountry: \"Brazil\",\n        Freight: 13.97,\n        Verified: !1\n    }, {\n        OrderID: 10257,\n        CustomerID: \"HILAA\",\n        EmployeeID: 10,\n        OrderDate: new Date(8374554e5),\n        ShipName: \"HILARION-Abastos\",\n        ShipCity: \"San Crist�bal\",\n        ShipAddress: \"Carrera 22 con Ave. Carlos Soublette #8-35\",\n        ShipRegion: \"T�chira\",\n        ShipPostalCode: \"5022\",\n        ShipCountry: \"Venezuela\",\n        Freight: 81.91,\n        Verified: !0\n    }, {\n        OrderID: 10258,\n        CustomerID: \"ERNSH\",\n        EmployeeID: 11,\n        OrderDate: new Date(8375418e5),\n        ShipName: \"Ernst Handel\",\n        ShipCity: \"Graz\",\n        ShipAddress: \"Kirchgasse 6\",\n        ShipRegion: null,\n        ShipPostalCode: \"8010\",\n        ShipCountry: \"Austria\",\n        Freight: 140.51,\n        Verified: !0\n    }, {\n        OrderID: 10259,\n        CustomerID: \"CENTC\",\n        EmployeeID: 12,\n        OrderDate: new Date(8376282e5),\n        ShipName: \"Centro comercial Moctezuma\",\n        ShipCity: \"M�xico D.F.\",\n        ShipAddress: \"Sierras de Granada 9993\",\n        ShipRegion: null,\n        ShipPostalCode: \"05022\",\n        ShipCountry: \"Mexico\",\n        Freight: 3.25,\n        Verified: !1\n    }, {\n        OrderID: 10260,\n        CustomerID: \"OTTIK\",\n        EmployeeID: 13,\n        OrderDate: new Date(8377146e5),\n        ShipName: \"Ottilies K�seladen\",\n        ShipCity: \"K�ln\",\n        ShipAddress: \"Mehrheimerstr. 369\",\n        ShipRegion: null,\n        ShipPostalCode: \"50739\",\n        ShipCountry: \"Germany\",\n        Freight: 55.09,\n        Verified: !0\n    }, {\n        OrderID: 10261,\n        CustomerID: \"QUEDE\",\n        EmployeeID: 14,\n        OrderDate: new Date(8377146e5),\n        ShipName: \"Que Del�cia\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua da Panificadora, 12\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-673\",\n        ShipCountry: \"Brazil\",\n        Freight: 3.05,\n        Verified: !1\n    }, {\n        OrderID: 10262,\n        CustomerID: \"RATTC\",\n        EmployeeID: 15,\n        OrderDate: new Date(8379738e5),\n        ShipName: \"Rattlesnake Canyon Grocery\",\n        ShipCity: \"Albuquerque\",\n        ShipAddress: \"2817 Milton Dr.\",\n        ShipRegion: \"NM\",\n        ShipPostalCode: \"87110\",\n        ShipCountry: \"USA\",\n        Freight: 48.29,\n        Verified: !0\n    }, {\n        OrderID: 10263,\n        CustomerID: \"ERNSH\",\n        EmployeeID: 16,\n        OrderDate: new Date(8380602e5),\n        ShipName: \"Ernst Handel\",\n        ShipCity: \"Graz\",\n        ShipAddress: \"Kirchgasse 6\",\n        ShipRegion: null,\n        ShipPostalCode: \"8010\",\n        ShipCountry: \"Austria\",\n        Freight: 146.06,\n        Verified: !0\n    }, {\n        OrderID: 10264,\n        CustomerID: \"FOLKO\",\n        EmployeeID: 17,\n        OrderDate: new Date(8381466e5),\n        ShipName: \"Folk och f� HB\",\n        ShipCity: \"Br�cke\",\n        ShipAddress: \"�kergatan 24\",\n        ShipRegion: null,\n        ShipPostalCode: \"S-844 67\",\n        ShipCountry: \"Sweden\",\n        Freight: 3.67,\n        Verified: !1\n    }, {\n        OrderID: 10265,\n        CustomerID: \"BLONP\",\n        EmployeeID: 18,\n        OrderDate: new Date(838233e6),\n        ShipName: \"Blondel p�re et fils\",\n        ShipCity: \"Strasbourg\",\n        ShipAddress: \"24, place Kl�ber\",\n        ShipRegion: null,\n        ShipPostalCode: \"67000\",\n        ShipCountry: \"France\",\n        Freight: 55.28,\n        Verified: !0\n    }, {\n        OrderID: 10266,\n        CustomerID: \"WARTH\",\n        EmployeeID: 19,\n        OrderDate: new Date(8383194e5),\n        ShipName: \"Wartian Herkku\",\n        ShipCity: \"Oulu\",\n        ShipAddress: \"Torikatu 38\",\n        ShipRegion: null,\n        ShipPostalCode: \"90110\",\n        ShipCountry: \"Finland\",\n        Freight: 25.73,\n        Verified: !1\n    }, {\n        OrderID: 10267,\n        CustomerID: \"FRANK\",\n        EmployeeID: 20,\n        OrderDate: new Date(8385786e5),\n        ShipName: \"Frankenversand\",\n        ShipCity: \"M�nchen\",\n        ShipAddress: \"Berliner Platz 43\",\n        ShipRegion: null,\n        ShipPostalCode: \"80805\",\n        ShipCountry: \"Germany\",\n        Freight: 208.58,\n        Verified: !0\n    }, {\n        OrderID: 10268,\n        CustomerID: \"GROSR\",\n        EmployeeID: 21,\n        OrderDate: new Date(838665e6),\n        ShipName: \"GROSELLA-Restaurante\",\n        ShipCity: \"Caracas\",\n        ShipAddress: \"5� Ave. Los Palos Grandes\",\n        ShipRegion: \"DF\",\n        ShipPostalCode: \"1081\",\n        ShipCountry: \"Venezuela\",\n        Freight: 66.29,\n        Verified: !0\n    }, {\n        OrderID: 10269,\n        CustomerID: \"WHITC\",\n        EmployeeID: 22,\n        OrderDate: new Date(8387514e5),\n        ShipName: \"White Clover Markets\",\n        ShipCity: \"Seattle\",\n        ShipAddress: \"1029 - 12th Ave. S.\",\n        ShipRegion: \"WA\",\n        ShipPostalCode: \"98124\",\n        ShipCountry: \"USA\",\n        Freight: 4.56,\n        Verified: !1\n    }, {\n        OrderID: 10270,\n        CustomerID: \"WARTH\",\n        EmployeeID: 23,\n        OrderDate: new Date(8388378e5),\n        ShipName: \"Wartian Herkku\",\n        ShipCity: \"Oulu\",\n        ShipAddress: \"Torikatu 38\",\n        ShipRegion: null,\n        ShipPostalCode: \"90110\",\n        ShipCountry: \"Finland\",\n        Freight: 136.54,\n        Verified: !0\n    }, {\n        OrderID: 10271,\n        CustomerID: \"SPLIR\",\n        EmployeeID: 24,\n        OrderDate: new Date(8388378e5),\n        ShipName: \"Split Rail Beer & Ale\",\n        ShipCity: \"Lander\",\n        ShipAddress: \"P.O. Box 555\",\n        ShipRegion: \"WY\",\n        ShipPostalCode: \"82520\",\n        ShipCountry: \"USA\",\n        Freight: 4.54,\n        Verified: !1\n    }, {\n        OrderID: 10272,\n        CustomerID: \"RATTC\",\n        EmployeeID: 25,\n        OrderDate: new Date(8389242e5),\n        ShipName: \"Rattlesnake Canyon Grocery\",\n        ShipCity: \"Albuquerque\",\n        ShipAddress: \"2817 Milton Dr.\",\n        ShipRegion: \"NM\",\n        ShipPostalCode: \"87110\",\n        ShipCountry: \"USA\",\n        Freight: 98.03,\n        Verified: !0\n    }, {\n        OrderID: 10273,\n        CustomerID: \"QUICK\",\n        EmployeeID: 26,\n        OrderDate: new Date(8391834e5),\n        ShipName: \"QUICK-Stop\",\n        ShipCity: \"Cunewalde\",\n        ShipAddress: \"Taucherstra�e 10\",\n        ShipRegion: null,\n        ShipPostalCode: \"01307\",\n        ShipCountry: \"Germany\",\n        Freight: 76.07,\n        Verified: !0\n    }, {\n        OrderID: 10274,\n        CustomerID: \"VINET\",\n        EmployeeID: 27,\n        OrderDate: new Date(8392698e5),\n        ShipName: \"Vins et alcools Chevalier\",\n        ShipCity: \"Reims\",\n        ShipAddress: \"59 rue de l'Abbaye\",\n        ShipRegion: null,\n        ShipPostalCode: \"51100\",\n        ShipCountry: \"France\",\n        Freight: 6.01,\n        Verified: !1\n    }, {\n        OrderID: 10275,\n        CustomerID: \"MAGAA\",\n        EmployeeID: 28,\n        OrderDate: new Date(8393562e5),\n        ShipName: \"Magazzini Alimentari Riuniti\",\n        ShipCity: \"Bergamo\",\n        ShipAddress: \"Via Ludovico il Moro 22\",\n        ShipRegion: null,\n        ShipPostalCode: \"24100\",\n        ShipCountry: \"Italy\",\n        Freight: 26.93,\n        Verified: !1\n    }, {\n        OrderID: 10276,\n        CustomerID: \"TORTU\",\n        EmployeeID: 29,\n        OrderDate: new Date(8394426e5),\n        ShipName: \"Tortuga Restaurante\",\n        ShipCity: \"M�xico D.F.\",\n        ShipAddress: \"Avda. Azteca 123\",\n        ShipRegion: null,\n        ShipPostalCode: \"05033\",\n        ShipCountry: \"Mexico\",\n        Freight: 13.84,\n        Verified: !1\n    }, {\n        OrderID: 10277,\n        CustomerID: \"MORGK\",\n        EmployeeID: 30,\n        OrderDate: new Date(839529e6),\n        ShipName: \"Morgenstern Gesundkost\",\n        ShipCity: \"Leipzig\",\n        ShipAddress: \"Heerstr. 22\",\n        ShipRegion: null,\n        ShipPostalCode: \"04179\",\n        ShipCountry: \"Germany\",\n        Freight: 125.77,\n        Verified: !0\n    }, {\n        OrderID: 10278,\n        CustomerID: \"BERGS\",\n        EmployeeID: 31,\n        OrderDate: new Date(8397882e5),\n        ShipName: \"Berglunds snabbk�p\",\n        ShipCity: \"Lule�\",\n        ShipAddress: \"Berguvsv�gen  8\",\n        ShipRegion: null,\n        ShipPostalCode: \"S-958 22\",\n        ShipCountry: \"Sweden\",\n        Freight: 92.69,\n        Verified: !0\n    }, {\n        OrderID: 10279,\n        CustomerID: \"LEHMS\",\n        EmployeeID: 32,\n        OrderDate: new Date(8398746e5),\n        ShipName: \"Lehmanns Marktstand\",\n        ShipCity: \"Frankfurt a.M.\",\n        ShipAddress: \"Magazinweg 7\",\n        ShipRegion: null,\n        ShipPostalCode: \"60528\",\n        ShipCountry: \"Germany\",\n        Freight: 25.83,\n        Verified: !1\n    }, {\n        OrderID: 10280,\n        CustomerID: \"BERGS\",\n        EmployeeID: 33,\n        OrderDate: new Date(839961e6),\n        ShipName: \"Berglunds snabbk�p\",\n        ShipCity: \"Lule�\",\n        ShipAddress: \"Berguvsv�gen  8\",\n        ShipRegion: null,\n        ShipPostalCode: \"S-958 22\",\n        ShipCountry: \"Sweden\",\n        Freight: 8.98,\n        Verified: !1\n    }, {\n        OrderID: 10281,\n        CustomerID: \"ROMEY\",\n        EmployeeID: 34,\n        OrderDate: new Date(839961e6),\n        ShipName: \"Romero y tomillo\",\n        ShipCity: \"Madrid\",\n        ShipAddress: \"Gran V�a, 1\",\n        ShipRegion: null,\n        ShipPostalCode: \"28001\",\n        ShipCountry: \"Spain\",\n        Freight: 2.94,\n        Verified: !1\n    }, {\n        OrderID: 10282,\n        CustomerID: \"ROMEY\",\n        EmployeeID: 35,\n        OrderDate: new Date(8400474e5),\n        ShipName: \"Romero y tomillo\",\n        ShipCity: \"Madrid\",\n        ShipAddress: \"Gran V�a, 1\",\n        ShipRegion: null,\n        ShipPostalCode: \"28001\",\n        ShipCountry: \"Spain\",\n        Freight: 12.69,\n        Verified: !1\n    }, {\n        OrderID: 10283,\n        CustomerID: \"LILAS\",\n        EmployeeID: 36,\n        OrderDate: new Date(8401338e5),\n        ShipName: \"LILA-Supermercado\",\n        ShipCity: \"Barquisimeto\",\n        ShipAddress: \"Carrera 52 con Ave. Bol�var #65-98 Llano Largo\",\n        ShipRegion: \"Lara\",\n        ShipPostalCode: \"3508\",\n        ShipCountry: \"Venezuela\",\n        Freight: 84.81,\n        Verified: !0\n    }, {\n        OrderID: 10284,\n        CustomerID: \"LEHMS\",\n        EmployeeID: 37,\n        OrderDate: new Date(840393e6),\n        ShipName: \"Lehmanns Marktstand\",\n        ShipCity: \"Frankfurt a.M.\",\n        ShipAddress: \"Magazinweg 7\",\n        ShipRegion: null,\n        ShipPostalCode: \"60528\",\n        ShipCountry: \"Germany\",\n        Freight: 76.56,\n        Verified: !0\n    }, {\n        OrderID: 10285,\n        CustomerID: \"QUICK\",\n        EmployeeID: 38,\n        OrderDate: new Date(8404794e5),\n        ShipName: \"QUICK-Stop\",\n        ShipCity: \"Cunewalde\",\n        ShipAddress: \"Taucherstra�e 10\",\n        ShipRegion: null,\n        ShipPostalCode: \"01307\",\n        ShipCountry: \"Germany\",\n        Freight: 76.83,\n        Verified: !0\n    }, {\n        OrderID: 10286,\n        CustomerID: \"QUICK\",\n        EmployeeID: 39,\n        OrderDate: new Date(8405658e5),\n        ShipName: \"QUICK-Stop\",\n        ShipCity: \"Cunewalde\",\n        ShipAddress: \"Taucherstra�e 10\",\n        ShipRegion: null,\n        ShipPostalCode: \"01307\",\n        ShipCountry: \"Germany\",\n        Freight: 229.24,\n        Verified: !0\n    }, {\n        OrderID: 10287,\n        CustomerID: \"RICAR\",\n        EmployeeID: 40,\n        OrderDate: new Date(8406522e5),\n        ShipName: \"Ricardo Adocicados\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Av. Copacabana, 267\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-890\",\n        ShipCountry: \"Brazil\",\n        Freight: 12.76,\n        Verified: !1\n    }, {\n        OrderID: 10288,\n        CustomerID: \"REGGC\",\n        EmployeeID: 41,\n        OrderDate: new Date(8407386e5),\n        ShipName: \"Reggiani Caseifici\",\n        ShipCity: \"Reggio Emilia\",\n        ShipAddress: \"Strada Provinciale 124\",\n        ShipRegion: null,\n        ShipPostalCode: \"42100\",\n        ShipCountry: \"Italy\",\n        Freight: 7.45,\n        Verified: !1\n    }, {\n        OrderID: 10289,\n        CustomerID: \"BSBEV\",\n        EmployeeID: 42,\n        OrderDate: new Date(8409978e5),\n        ShipName: \"B's Beverages\",\n        ShipCity: \"London\",\n        ShipAddress: \"Fauntleroy Circus\",\n        ShipRegion: null,\n        ShipPostalCode: \"EC2 5NT\",\n        ShipCountry: \"UK\",\n        Freight: 22.77,\n        Verified: !1\n    }, {\n        OrderID: 10290,\n        CustomerID: \"COMMI\",\n        EmployeeID: 43,\n        OrderDate: new Date(8410842e5),\n        ShipName: \"Com�rcio Mineiro\",\n        ShipCity: \"Sao Paulo\",\n        ShipAddress: \"Av. dos Lus�adas, 23\",\n        ShipRegion: \"SP\",\n        ShipPostalCode: \"05432-043\",\n        ShipCountry: \"Brazil\",\n        Freight: 79.7,\n        Verified: !0\n    }, {\n        OrderID: 10291,\n        CustomerID: \"QUEDE\",\n        EmployeeID: 44,\n        OrderDate: new Date(8410842e5),\n        ShipName: \"Que Del�cia\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Rua da Panificadora, 12\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-673\",\n        ShipCountry: \"Brazil\",\n        Freight: 6.4,\n        Verified: !1\n    }, {\n        OrderID: 10292,\n        CustomerID: \"TRADH\",\n        EmployeeID: 45,\n        OrderDate: new Date(8411706e5),\n        ShipName: \"Tradi�ao Hipermercados\",\n        ShipCity: \"Sao Paulo\",\n        ShipAddress: \"Av. In�s de Castro, 414\",\n        ShipRegion: \"SP\",\n        ShipPostalCode: \"05634-030\",\n        ShipCountry: \"Brazil\",\n        Freight: 1.35,\n        Verified: !1\n    }, {\n        OrderID: 10293,\n        CustomerID: \"TORTU\",\n        EmployeeID: 46,\n        OrderDate: new Date(841257e6),\n        ShipName: \"Tortuga Restaurante\",\n        ShipCity: \"M�xico D.F.\",\n        ShipAddress: \"Avda. Azteca 123\",\n        ShipRegion: null,\n        ShipPostalCode: \"05033\",\n        ShipCountry: \"Mexico\",\n        Freight: 21.18,\n        Verified: !1\n    }, {\n        OrderID: 10294,\n        CustomerID: \"RATTC\",\n        EmployeeID: 47,\n        OrderDate: new Date(8413434e5),\n        ShipName: \"Rattlesnake Canyon Grocery\",\n        ShipCity: \"Albuquerque\",\n        ShipAddress: \"2817 Milton Dr.\",\n        ShipRegion: \"NM\",\n        ShipPostalCode: \"87110\",\n        ShipCountry: \"USA\",\n        Freight: 147.26,\n        Verified: !0\n    }, {\n        OrderID: 10295,\n        CustomerID: \"VINET\",\n        EmployeeID: 48,\n        OrderDate: new Date(8416026e5),\n        ShipName: \"Vins et alcools Chevalier\",\n        ShipCity: \"Reims\",\n        ShipAddress: \"59 rue de l'Abbaye\",\n        ShipRegion: null,\n        ShipPostalCode: \"51100\",\n        ShipCountry: \"France\",\n        Freight: 1.15,\n        Verified: !1\n    }, {\n        OrderID: 10296,\n        CustomerID: \"LILAS\",\n        EmployeeID: 49,\n        OrderDate: new Date(841689e6),\n        ShipName: \"LILA-Supermercado\",\n        ShipCity: \"Barquisimeto\",\n        ShipAddress: \"Carrera 52 con Ave. Bol�var #65-98 Llano Largo\",\n        ShipRegion: \"Lara\",\n        ShipPostalCode: \"3508\",\n        ShipCountry: \"Venezuela\",\n        Freight: .12,\n        Verified: !1\n    }, {\n        OrderID: 10297,\n        CustomerID: \"BLONP\",\n        EmployeeID: 50,\n        OrderDate: new Date(8417754e5),\n        ShipName: \"Blondel p�re et fils\",\n        ShipCity: \"Strasbourg\",\n        ShipAddress: \"24, place Kl�ber\",\n        ShipRegion: null,\n        ShipPostalCode: \"67000\",\n        ShipCountry: \"France\",\n        Freight: 5.74,\n        Verified: !1\n    }, {\n        OrderID: 10298,\n        CustomerID: \"HUNGO\",\n        EmployeeID: 51,\n        OrderDate: new Date(8418618e5),\n        ShipName: \"Hungry Owl All-Night Grocers\",\n        ShipCity: \"Cork\",\n        ShipAddress: \"8 Johnstown Road\",\n        ShipRegion: \"Co. Cork\",\n        ShipPostalCode: null,\n        ShipCountry: \"Ireland\",\n        Freight: 168.22,\n        Verified: !0\n    }, {\n        OrderID: 10299,\n        CustomerID: \"RICAR\",\n        EmployeeID: 52,\n        OrderDate: new Date(8419482e5),\n        ShipName: \"Ricardo Adocicados\",\n        ShipCity: \"Rio de Janeiro\",\n        ShipAddress: \"Av. Copacabana, 267\",\n        ShipRegion: \"RJ\",\n        ShipPostalCode: \"02389-890\",\n        ShipCountry: \"Brazil\",\n        Freight: 29.76,\n        Verified: !1\n    }, {\n        OrderID: 10300,\n        CustomerID: \"MAGAA\",\n        EmployeeID: 53,\n        OrderDate: new Date(8422074e5),\n        ShipName: \"Magazzini Alimentari Riuniti\",\n        ShipCity: \"Bergamo\",\n        ShipAddress: \"Via Ludovico il Moro 22\",\n        ShipRegion: null,\n        ShipPostalCode: \"24100\",\n        ShipCountry: \"Italy\",\n        Freight: 17.68,\n        Verified: !1\n    }, {\n        OrderID: 10301,\n        CustomerID: \"WANDK\",\n        EmployeeID: 54,\n        OrderDate: new Date(8422074e5),\n        ShipName: \"Die Wandernde Kuh\",\n        ShipCity: \"Stuttgart\",\n        ShipAddress: \"Adenauerallee 900\",\n        ShipRegion: null,\n        ShipPostalCode: \"70563\",\n        ShipCountry: \"Germany\",\n        Freight: 45.08,\n        Verified: !0\n    }, {\n        OrderID: 10302,\n        CustomerID: \"SUPRD\",\n        EmployeeID: 55,\n        OrderDate: new Date(8422938e5),\n        ShipName: \"Supr�mes d�lices\",\n        ShipCity: \"Charleroi\",\n        ShipAddress: \"Boulevard Tirou, 255\",\n        ShipRegion: null,\n        ShipPostalCode: \"B-6000\",\n        ShipCountry: \"Belgium\",\n        Freight: 6.27,\n        Verified: !1\n    }\n];\nvar products = [\n    {\n        id: 1,\n        name: 'Product A',\n        previousYear: 10,\n        lastYear: 20\n    },\n    {\n        id: 2,\n        name: 'Product B',\n        previousYear: 20,\n        lastYear: 30\n    },\n    {\n        id: 3,\n        name: 'Product C',\n        previousYear: 30,\n        lastYear: 20\n    },\n    {\n        id: 4,\n        name: 'Product D',\n        previousYear: 40,\n        lastYear: 10\n    },\n    {\n        id: 5,\n        name: 'Product E',\n        previousYear: 20,\n        lastYear: 30\n    }\n];\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/datasource.ts?");

/***/ }),

/***/ "./Samples/sparkline/range-band/main.js":
/*!**********************************************!*\
  !*** ./Samples/sparkline/range-band/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sparkline/range-band/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/main.js?");

/***/ }),

/***/ "./Samples/sparkline/range-band/rangeband.ts":
/*!***************************************************!*\
  !*** ./Samples/sparkline/range-band/rangeband.ts ***!
  \***************************************************/
/*! exports provided: line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"line\", function() { return line; });\n// tslint:disable\nvar line = [\n    [0, 6, 4, 1, 3, 2, 5],\n    [5, 4, 6, 3, 1, 2, 0],\n    [6, 4, 0, 3, 2, 5, 1],\n    [4, 6, 3, 0, 1, 2, 5],\n    [3, 5, 6, 4, 0, 1, 2],\n    [1, 3, 4, 2, 5, 0, 6],\n    [2, 4, 0, 3, 5, 6, 1],\n    [5, 4, 6, 3, 1, 2, 0],\n    [0, 6, 4, 1, 3, 2, 5],\n    [6, 4, 0, 3, 2, 5, 1],\n    [4, 6, 3, 0, 1, 2, 5],\n    [3, 5, 6, 4, 0, 1, 2],\n    [1, 3, 4, 2, 5, 0, 6],\n    [2, 4, 0, 3, 5, 6, 1],\n    [5, 4, 6, 3, 1, 2, 0],\n    [0, 6, 4, 1, 3, 2, 5],\n    [6, 4, 0, 3, 2, 5, 1],\n    [4, 6, 3, 0, 1, 2, 5],\n    [2, 4, 0, 3, 5, 6, 1],\n    [3, 5, 6, 4, 0, 1, 2],\n    [1, 3, 4, 2, 5, 0, 6]\n];\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/rangeband.ts?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#range-band-table td{\\n    padding: 10px;\\n}\\n#spark-range-band .e-headertext{\\n    font-weight: bolder;\\n}\\n#range-band-table #range-min > * {\\n    padding: 0px !important;\\n}\\n#range-band-table #range-max > * {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/sparkline/range-band/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#range-band-table td{\\n    padding: 10px;\\n}\\n#spark-range-band .e-headertext{\\n    font-weight: bolder;\\n}\\n#range-band-table #range-min > * {\\n    padding: 0px !important;\\n}\\n#range-band-table #range-max > * {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datasource */ \"./Samples/sparkline/range-band/datasource.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _column_template_one_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column-template-one.vue */ \"./Samples/sparkline/range-band/column-template-one.vue\");\n/* harmony import */ var _column_template_two_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./column-template-two.vue */ \"./Samples/sparkline/range-band/column-template-two.vue\");\n/* harmony import */ var _rangeband__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rangeband */ \"./Samples/sparkline/range-band/rangeband.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"GridPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"SparklinePlugin\"]);\nlet lineData = _rangeband__WEBPACK_IMPORTED_MODULE_9__[\"line\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            dataSource: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"DataManager\"](_datasource__WEBPACK_IMPORTED_MODULE_4__[\"products\"]).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"Query\"]()),\n            allowSelection: false,            \n            enableHover: true,\n            value:1,\n            value2:3,\n            type: 'MinRange',\n            cTemplate: function () {\n                return {\n                    template: _column_template_one_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n                }\n            },\n            gTemplate: function () {\n                return {\n                    template: _column_template_two_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                }\n            }\n        }\n    },\n    provide: {\n        grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"]]\n    },\n    mounted: function () {\n        setTimeout(() => {\n            for (let i = 1; i <= 5; i++) {\n                let spark1 = new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"Sparkline\"]({\n                height: '50px',\n                width: '150px',\n                lineWidth: 2,\n                fill: '#0d3c9b',\n                dataSource: lineData[0],\n                load:load,\n                rangeBandSettings: [{\n                    startRange: 1,\n                    endRange: 3,\n                    color: '#bfd4fc'\n                }]\n                });\n                spark1.dataSource = lineData[i];\n                spark1.appendTo('#sparkline2010' + i);\n                let spark2 =new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"Sparkline\"]({\n                height: '50px',\n                width: '150px',\n                lineWidth: 2,\n                fill: '#0d3c9b',\n                load:load,\n                dataSource: lineData[0],\n                rangeBandSettings: [{\n                    startRange: 1,\n                    endRange: 3,\n                    color: '#bfd4fc'\n                }]\n                });\n                spark2.dataSource = lineData[i + 5];\n                spark2.appendTo('#sparkline2011' + i);\n            }\n        }, 100);\n        /* custom code start */\n    function load(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material';\n        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast') ;\n        }\n    },\n    /* custom code end */\n    methods: {\n        changeRangemin: function (e) {\n            this.changeRangeMin(e.value);\n        },\n        changeRangemax: function (e) {\n            this.changeRangeMax(e.value);\n        },\n        changeRangeMin:function(min){\n            for (let i = 1; i <= 5; i++) {\n                let first = document.getElementById('sparkline2010' + i);\n                let second = document.getElementById('sparkline2011' + i);\n                first.ej2_instances[0].rangeBandSettings[0].startRange = min;\n                second.ej2_instances[0].rangeBandSettings[0].startRange = min;\n                first.ej2_instances[0].refresh();\n                second.ej2_instances[0].refresh();\n            }\n        },\n        changeRangeMax:function(max){\n            for (let i = 1; i <= 5; i++) {\n                let first = document.getElementById('sparkline2010' + i);\n                let second = document.getElementById('sparkline2011' + i);\n                first.ej2_instances[0].rangeBandSettings[0].endRange = max;\n                second.ej2_instances[0].rangeBandSettings[0].endRange = max;\n                first.ej2_instances[0].refresh();\n                second.ej2_instances[0].refresh();\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/column-template-one.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n        data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-one.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/column-template-two.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n        data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-two.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/App.vue?vue&type=template&id=b7ac16ae& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"row\",attrs:{\"id\":\"spark-range-band\"}},[_c('div',{staticClass:\"cols-sample-area\",attrs:{\"align\":\"center\"}},[_c('p',[_c('font',{attrs:{\"size\":\"4px\"}},[_vm._v(\" Sales Growth Comparison with various Products\")]),_vm._v(\" \"),_c('ejs-grid',{attrs:{\"id\":\"Grid\",\"dataSource\":_vm.dataSource,\"allowSelection\":_vm.allowSelection,\"enableHover\":_vm.enableHover,\"height\":\"400\"}},[_c('e-columns',[_c('e-column',{attrs:{\"field\":\"name\",\"headerText\":\"Name\",\"width\":\"50\",\"textAlign\":\"Right\"}}),_vm._v(\" \"),_c('e-column',{attrs:{\"headerText\":\"2010\",\"width\":\"100\",\"textAlign\":\"Center\",\"template\":_vm.cTemplate}}),_vm._v(\" \"),_c('e-column',{attrs:{\"headerText\":\"2011\",\"width\":\"100\",\"textAlign\":\"Center\",\"template\":_vm.gTemplate}})],1)],1)],1)])])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_vm._v(\"\\n                   \\n        \"),_c('br'),_vm._v(\" \"),_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',{attrs:{\"id\":\"range-band-table\"}},[_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                        Range Band Min 1\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-slider',{style:({ padding: '0px' }),attrs:{\"id\":\"range-min\",\"value\":_vm.value,\"type\":_vm.type,\"change\":_vm.changeRangemin,\"max\":\"6\",\"min\":\"0\"}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                        Range Band Max 3\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-slider',{style:({ padding: '0px' }),attrs:{\"id\":\"range-max\",\"value\":_vm.value2,\"type\":_vm.type,\"change\":_vm.changeRangemax,\"max\":\"6\",\"min\":\"0\"}})],1)])])])])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This sample demonstrates the range band feature and its customization available in Sparkline.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            In this example, you can see how to render sparkline with range band and the customization options available in range band. Here the sparklines are placed inside the Data Grid control.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/column-template-one.vue?vue&type=template&id=7560e5d2& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":(\"sparkline2010\" + (_vm.data.id))}})}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-one.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/range-band/column-template-two.vue?vue&type=template&id=e46ed290& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":(\"sparkline2011\" + (_vm.data.id))}})}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/sparkline/range-band/column-template-two.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });