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
/******/ 		"maps/annotation/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/annotation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/annotation/App.vue":
/*!*****************************************!*\
  !*** ./Samples/maps/annotation/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_029190d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=029190d5& */ \"./Samples/maps/annotation/App.vue?vue&type=template&id=029190d5&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/annotation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_029190d5___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_029190d5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/annotation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/annotation/App.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/maps/annotation/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/annotation/App.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/App.vue?vue&type=template&id=029190d5&":
/*!************************************************************************!*\
  !*** ./Samples/maps/annotation/App.vue?vue&type=template&id=029190d5& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_029190d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=029190d5& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/App.vue?vue&type=template&id=029190d5&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_029190d5___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_029190d5___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/App.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp1.vue":
/*!******************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp1.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _annotation_temp1_vue_vue_type_template_id_6655de9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true& */ \"./Samples/maps/annotation/annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true&\");\n/* harmony import */ var _annotation_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotation-temp1.vue?vue&type=script&lang=js& */ \"./Samples/maps/annotation/annotation-temp1.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css& */ \"./Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _annotation_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _annotation_temp1_vue_vue_type_template_id_6655de9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _annotation_temp1_vue_vue_type_template_id_6655de9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6655de9b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/annotation/annotation-temp1.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp1.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp1.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./annotation-temp1.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp1.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_style_index_0_id_6655de9b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_template_id_6655de9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_template_id_6655de9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp1_vue_vue_type_template_id_6655de9b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp2.vue":
/*!******************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp2.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _annotation_temp2_vue_vue_type_template_id_6663f61c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./annotation-temp2.vue?vue&type=template&id=6663f61c& */ \"./Samples/maps/annotation/annotation-temp2.vue?vue&type=template&id=6663f61c&\");\n/* harmony import */ var _annotation_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./annotation-temp2.vue?vue&type=script&lang=js& */ \"./Samples/maps/annotation/annotation-temp2.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _annotation_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _annotation_temp2_vue_vue_type_template_id_6663f61c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _annotation_temp2_vue_vue_type_template_id_6663f61c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/annotation/annotation-temp2.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp2.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp2.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./annotation-temp2.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp2.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp2.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/annotation-temp2.vue?vue&type=template&id=6663f61c&":
/*!*************************************************************************************!*\
  !*** ./Samples/maps/annotation/annotation-temp2.vue?vue&type=template&id=6663f61c& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp2_vue_vue_type_template_id_6663f61c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./annotation-temp2.vue?vue&type=template&id=6663f61c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp2.vue?vue&type=template&id=6663f61c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp2_vue_vue_type_template_id_6663f61c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_annotation_temp2_vue_vue_type_template_id_6663f61c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp2.vue?");

/***/ }),

/***/ "./Samples/maps/annotation/main.js":
/*!*****************************************!*\
  !*** ./Samples/maps/annotation/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/annotation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#annotation[data-v-6655de9b] {\\n        color: #DDDDDD;\\n\\t\\tfont-size: 12px;\\n\\t\\tfont-family: Roboto;\\n        background: #3E464C;\\n        margin: 20px;\\n        padding: 10px;\\n        -webkit-border-radius: 2px;\\n        -moz-border-radius: 2px;\\n        border-radius: 2px;\\n        width: 300px;\\n        -moz-box-shadow: 0px 2px 5px #666;\\n        -webkit-box-shadow: 0px 2px 5px #666;\\n        box-shadow: 0px 2px 5px #666;\\n}\\n.country-label[data-v-6655de9b] {\\n        color: white;\\n        font-size: 25px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/annotation/annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,eAAe;EACrB,gBAAgB;EAChB,oBAAoB;QACd,oBAAoB;QACpB,aAAa;QACb,cAAc;QACd,2BAA2B;QAC3B,wBAAwB;QACxB,mBAAmB;QACnB,aAAa;QACb,kCAAkC;QAClC,qCAAqC;QACrC,6BAA6B;CACpC;AACD;QACQ,aAAa;QACb,gBAAgB;CACvB\",\"file\":\"annotation-temp1.vue?vue&type=style&index=0&id=6655de9b&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#annotation[data-v-6655de9b] {\\n        color: #DDDDDD;\\n\\t\\tfont-size: 12px;\\n\\t\\tfont-family: Roboto;\\n        background: #3E464C;\\n        margin: 20px;\\n        padding: 10px;\\n        -webkit-border-radius: 2px;\\n        -moz-border-radius: 2px;\\n        border-radius: 2px;\\n        width: 300px;\\n        -moz-box-shadow: 0px 2px 5px #666;\\n        -webkit-box-shadow: 0px 2px 5px #666;\\n        box-shadow: 0px 2px 5px #666;\\n}\\n.country-label[data-v-6655de9b] {\\n        color: white;\\n        font-size: 25px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _annotation_temp1_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annotation-temp1.vue */ \"./Samples/maps/annotation/annotation-temp1.vue\");\n/* harmony import */ var _annotation_temp2_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./annotation-temp2.vue */ \"./Samples/maps/annotation/annotation-temp2.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data:function(){\n      return{\n        zoomSettings: {\n            enable: false\n        },\n        annotations: [\n            {\n                content: function () { return {template: _annotation_temp1_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}; },\n                x: '0%', y: '70%'\n            }, {\n                content: function () { return {template: _annotation_temp2_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}; },\n                x: '80%', y: '5%'\n            }\n        ],\n        shapeDataPath: 'name',\n        shapePropertyPath: 'name',\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/africa-continent.json'),\n        shapeSettings: {\n                    fill: 'url(#grad1)'\n                },\n        markerSettings: [\n                    {\n                        visible: true,\n                        template: '<h3 style=\"color:white\">{{:name}}</h3>',\n                        animationDuration: 1,\n                        dataSource: [{\n                            name: 'Africa', latitude: 13.97274101999902, longitude: 20.390625\n                }]\n            }\n        ]\n      }\n  },\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"]]\n},\n/* custom code start */\nmethods:{\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    }\n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp1.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/annotation-temp1.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n        data: {}\n    }\n  },\n});\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp2.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/annotation-temp2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n        data: {}\n    }\n  },\n});\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp2.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/App.vue?vue&type=template&id=029190d5&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/App.vue?vue&type=template&id=029190d5& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            attrs: {\n              id: \"maps\",\n              load: _vm.load,\n              annotations: _vm.annotations,\n              zoomSettings: _vm.zoomSettings\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    shapePropertyPath: _vm.shapePropertyPath,\n                    shapeDataPath: _vm.shapeDataPath,\n                    shapeSettings: _vm.shapeSettings,\n                    markerSettings: _vm.markerSettings\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"svg\", { attrs: { height: \"150\", width: \"400\" } }, [\n      _c(\n        \"defs\",\n        [\n          _c(\n            \"linearGradient\",\n            {\n              attrs: { id: \"grad1\", x1: \"0%\", y1: \"0%\", x2: \"0%\", y2: \"100%\" }\n            },\n            [\n              _c(\"stop\", {\n                staticStyle: { \"stop-color\": \"#C5494B\", \"stop-opacity\": \"1\" },\n                attrs: { offset: \"0%\" }\n              }),\n              _vm._v(\" \"),\n              _c(\"stop\", {\n                staticStyle: { \"stop-color\": \"#4C134F\", \"stop-opacity\": \"1\" },\n                attrs: { offset: \"100%\" }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n       \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"https://en.wikipedia.org/wiki/Africa\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"en.wikipedia.org\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample depicts the facts about Africa in an annotation. Africa shape is filled with gradient color.\\n   \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          In this example, you can see how to place a desired HTML element at desired location in the maps. Any number of annotation can be placed on the maps. In this sample, the gradient fill color has been applied for the shape.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n         Maps component features are segregated into individual feature-wise modules. To use an annotation, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Annotations\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Maps.Inject(Annotations)\")]),\n        _vm._v(\" method.\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/annotation-temp1.vue?vue&type=template&id=6655de9b&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"maps-annotation\" } }, [\n      _c(\"div\", { attrs: { id: \"annotation\" } }, [\n        _c(\"div\", [\n          _c(\n            \"p\",\n            {\n              staticStyle: {\n                \"margin-left\": \"10px\",\n                \"font-size\": \"13px\",\n                \"font-weight\": \"500\"\n              }\n            },\n            [_vm._v(\"Facts about Africa\")]\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"hr\", {\n          staticStyle: {\n            \"margin-top\": \"-3px\",\n            \"margin-bottom\": \"10px\",\n            border: \"0.5px solid #DDDDDD\"\n          }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", [\n          _c(\n            \"ul\",\n            {\n              staticStyle: {\n                \"list-style-type\": \"disc\",\n                \"margin-left\": \"-20px\",\n                \"margin-bottom\": \"2px\",\n                \"font-weight\": \"400\"\n              }\n            },\n            [\n              _c(\"li\", [\n                _vm._v(\n                  \"Africa is the second largest and second most populated continent in the world.\"\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", { staticStyle: { \"padding-top\": \"5px\" } }, [\n                _vm._v(\n                  \"Africa has 54 sovereign states and 10 non-sovereign territories.\"\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"li\", { staticStyle: { \"padding-top\": \"5px\" } }, [\n                _vm._v(\n                  \"Algeria is the largest country in Africa, where as Mayotte is the smallest.\"\n                )\n              ])\n            ]\n          )\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp1.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/annotation/annotation-temp2.vue?vue&type=template&id=6663f61c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/annotation/annotation-temp2.vue?vue&type=template&id=6663f61c& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"compass-maps\" } }, [\n      _c(\"img\", {\n        attrs: {\n          src: \"src/maps/images/compass.svg\",\n          alt: \"Direction compass\",\n          height: \"75px\",\n          width: \"75px\"\n        }\n      })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/annotation/annotation-temp2.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });