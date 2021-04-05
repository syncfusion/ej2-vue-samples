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
/******/ 		"dashboard-layout/dynamic/main": 0
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
/******/ 	deferredModules.push(["./Samples/dashboard-layout/dynamic/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/dashboard-layout/dynamic/App.vue":
/*!**************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_14852819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=14852819& */ \"./Samples/dashboard-layout/dynamic/App.vue?vue&type=template&id=14852819&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/dynamic/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_14852819___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_14852819___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/dynamic/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/App.vue?vue&type=template&id=14852819&":
/*!*********************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/App.vue?vue&type=template&id=14852819& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_14852819___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=14852819& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/App.vue?vue&type=template&id=14852819&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_14852819___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_14852819___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/linetemplate.vue":
/*!***********************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/linetemplate.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _linetemplate_vue_vue_type_template_id_3b403806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linetemplate.vue?vue&type=template&id=3b403806& */ \"./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=template&id=3b403806&\");\n/* harmony import */ var _linetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linetemplate.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _linetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linetemplate.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _linetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _linetemplate_vue_vue_type_template_id_3b403806___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _linetemplate_vue_vue_type_template_id_3b403806___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/dynamic/linetemplate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./linetemplate.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./linetemplate.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=template&id=3b403806&":
/*!******************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=template&id=3b403806& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_template_id_3b403806___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./linetemplate.vue?vue&type=template&id=3b403806& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=template&id=3b403806&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_template_id_3b403806___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_linetemplate_vue_vue_type_template_id_3b403806___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/main.js":
/*!**************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/dashboard-layout/dynamic/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/main.js?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/pietemplate.vue":
/*!**********************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/pietemplate.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pietemplate_vue_vue_type_template_id_c80264c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pietemplate.vue?vue&type=template&id=c80264c4& */ \"./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=template&id=c80264c4&\");\n/* harmony import */ var _pietemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pietemplate.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _pietemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pietemplate.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _pietemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _pietemplate_vue_vue_type_template_id_c80264c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _pietemplate_vue_vue_type_template_id_c80264c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/dynamic/pietemplate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./pietemplate.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./pietemplate.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=template&id=c80264c4&":
/*!*****************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=template&id=c80264c4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_template_id_c80264c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pietemplate.vue?vue&type=template&id=c80264c4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=template&id=c80264c4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_template_id_c80264c4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pietemplate_vue_vue_type_template_id_c80264c4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/splinetemplate.vue":
/*!*************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/splinetemplate.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _splinetemplate_vue_vue_type_template_id_31e0ec63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./splinetemplate.vue?vue&type=template&id=31e0ec63& */ \"./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=template&id=31e0ec63&\");\n/* harmony import */ var _splinetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splinetemplate.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _splinetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splinetemplate.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _splinetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _splinetemplate_vue_vue_type_template_id_31e0ec63___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _splinetemplate_vue_vue_type_template_id_31e0ec63___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/dynamic/splinetemplate.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./splinetemplate.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./splinetemplate.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=template&id=31e0ec63&":
/*!********************************************************************************************!*\
  !*** ./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=template&id=31e0ec63& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_template_id_31e0ec63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./splinetemplate.vue?vue&type=template&id=31e0ec63& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=template&id=31e0ec63&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_template_id_31e0ec63___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_splinetemplate_vue_vue_type_template_id_31e0ec63___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-dynamic #dialogBtn {\\n    display: none;\\n}\\n.dashboard-dynamic .dialog-text {\\n    height: 35px;\\n    border: 1px solid #80808029;\\n    vertical-align: middle;\\n    line-height: 35px;\\n    border-radius: 4px;\\n    padding-left: 12px;\\n    margin-bottom: 5%;\\n    cursor: pointer;\\n}\\n@media (max-width: 650px) {\\n.dashboard-dynamic #togglebtn{\\n        display: none;\\n}\\n}\\n.dashboard-dynamic .add-widget-button {\\n    padding: 10px;\\n    text-align: center;\\n    margin-bottom: 10px;\\n    cursor: pointer;\\n    font-size: 15px;\\n}\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel:hover span {\\n    display: block;\\n}\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    padding: 10px;\\n    border-bottom: 2px solid #e6e9ed !important;\\n    height: 35px;\\n    margin: 0 15px 0 15px;\\n}\\n.dashboard-dynamic #edit_dashboard .e-panel-content {\\n    height: calc(100% - 35px) !important;\\n    overflow: hidden;\\n    width:100%;\\n}\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel,\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel:hover,\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel:active {\\n    border: 1px solid #bbb;\\n}\\n.dashboard-dynamic .e-dialog .e-dlg-header-content {\\n    border-bottom: none;\\n    padding: 18px 18px 18px 20px;\\n}\\n.dashboard-dynamic .edit::before {\\n        content: '\\\\E501';\\n        font-family: 'e-sb-icons';\\n        /* color: #e3165b; */\\n        margin-left: -7px;\\n        vertical-align: middle;\\n}\\n.dashboard-dynamic .save::before {\\n    content: '\\\\E500';\\n    font-family: 'e-sb-icons';\\n    /* color: #e3165b; */\\n    margin-left: -7px;\\n    vertical-align: middle;\\n}\\n\\n\\n/* custom code start*/\\n@font-face {\\n    font-family: 'e-sb-icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMjttR/MAAAEoAAAAVmNtYXDlEOVaAAABjAAAADhnbHlmAM1kuQAAAcwAAAD8aGVhZBRipc8AAADQAAAANmhoZWEIUQQEAAAArAAAACRobXR4DAAAAAAAAYAAAAAMbG9jYQA6AH4AAAHEAAAACG1heHABEQA4AAABCAAAACBuYW1lWD3y/QAAAsgAAAIlcG9zdNvk7cwAAATwAAAANQABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAApr5cCV8PPPUACwQAAAAAANioMG8AAAAA2KgwbwAAAAAD9AP0AAAACAACAAAAAAAAAAEAAAADACwABAAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5QDlAQQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOUB//8AAOUA//8AAAABAAQAAAABAAIAAAAAADoAfgAEAAAAAAP0A/MAAwALABkAIwAAAREhEQEVMzUzFSE1IxEhETMVMxEjESERIxEjERUhESM1IzUhAx79xAEeR0j+m0gB9I9HR/02SEcD6EdI/KcBcf7iAR4CPI+P19f+4gEeSPzuAWb+mgNa/KZHA1lIRwAAAAMAAAAAA/QD9AADAAgAKwAACQEnCQEDJQEnNwcXPwc1Lw8PBgLH/ko2Abb9uT4BGQJC2m0/2z8HBgUFAwMCAQIEBQcICQoLDA0NDw8PEA0NDQwLCwsCkf5KNgG2/l7+5z4CQ9puP9s/CgsLCwwNDQ0QDw8PDQ0MCwoJCAcFBAIBAQEDAwUFBgAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAcAAQABAAAAAAACAAcACAABAAAAAAADAAcADwABAAAAAAAEAAcAFgABAAAAAAAFAAsAHQABAAAAAAAGAAcAKAABAAAAAAAKACwALwABAAAAAAALABIAWwADAAEECQAAAAIAbQADAAEECQABAA4AbwADAAEECQACAA4AfQADAAEECQADAA4AiwADAAEECQAEAA4AmQADAAEECQAFABYApwADAAEECQAGAA4AvQADAAEECQAKAFgAywADAAEECQALACQBIyBlai1pY29uUmVndWxhcmVqLWljb25lai1pY29uVmVyc2lvbiAxLjBlai1pY29uRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABlAGoALQBpAGMAbwBuAFIAZQBnAHUAbABhAHIAZQBqAC0AaQBjAG8AbgBlAGoALQBpAGMAbwBuAFYAZQByAHMAaQBvAG4AIAAxAC4AMABlAGoALQBpAGMAbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHNhdmUEZWRpdAAAAAAA) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n[class^=\\\"sf-icon-\\\"],\\n[class*=\\\" sf-icon-\\\"] {\\n    font-family: 'e-sb-icons' !important;\\n    speak: none;\\n    font-size: 55px;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: 1;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n.dashboard-dynamic #edit_dashboard{\\n    display: block;\\n}\\n/* highcontrast style */\\nbody.highcontrast .dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel {\\n    background: #000;\\n}\\nbody.highcontrast .dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-V55EMCJG2NEC3AALTPADHFXFXUTFAIGQCOWFKU6ZMQVA2HIIMDFA/Samples/dashboard-layout/dynamic/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,aAAa;IACb,4BAA4B;IAC5B,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;CACnB;AACD;AACA;QACQ,cAAc;CACrB;CACA;AACD;IACI,cAAc;IACd,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,gBAAgB;CACnB;AACD;IACI,eAAe;CAClB;AACD;IACI,cAAc;IACd,4CAA4C;IAC5C,aAAa;IACb,sBAAsB;CACzB;AACD;IACI,qCAAqC;IACrC,iBAAiB;IACjB,WAAW;CACd;AACD;;;IAGI,uBAAuB;CAC1B;AACD;IACI,oBAAoB;IACpB,6BAA6B;CAChC;AACD;QACQ,iBAAiB;QACjB,0BAA0B;QAC1B,qBAAqB;QACrB,kBAAkB;QAClB,uBAAuB;CAC9B;AACD;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,qBAAqB;IACrB,kBAAkB;IAClB,uBAAuB;CAC1B;;;AAGD,sBAAsB;AACtB;IACI,0BAA0B;IAC1B,+yDAA+yD;IAC/yD,oBAAoB;IACpB,mBAAmB;CACtB;AACD;;IAEI,qCAAqC;IACrC,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,oCAAoC;IACpC,mCAAmC;CACtC;AACD;IACI,eAAe;CAClB;AACD,wBAAwB;AACxB;IACI,iBAAiB;CACpB;AACD;IACI,iCAAiC;CACpC\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-dynamic #dialogBtn {\\n    display: none;\\n}\\n.dashboard-dynamic .dialog-text {\\n    height: 35px;\\n    border: 1px solid #80808029;\\n    vertical-align: middle;\\n    line-height: 35px;\\n    border-radius: 4px;\\n    padding-left: 12px;\\n    margin-bottom: 5%;\\n    cursor: pointer;\\n}\\n@media (max-width: 650px) {\\n.dashboard-dynamic #togglebtn{\\n        display: none;\\n}\\n}\\n.dashboard-dynamic .add-widget-button {\\n    padding: 10px;\\n    text-align: center;\\n    margin-bottom: 10px;\\n    cursor: pointer;\\n    font-size: 15px;\\n}\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel:hover span {\\n    display: block;\\n}\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    padding: 10px;\\n    border-bottom: 2px solid #e6e9ed !important;\\n    height: 35px;\\n    margin: 0 15px 0 15px;\\n}\\n.dashboard-dynamic #edit_dashboard .e-panel-content {\\n    height: calc(100% - 35px) !important;\\n    overflow: hidden;\\n    width:100%;\\n}\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel,\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel:hover,\\n.dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel:active {\\n    border: 1px solid #bbb;\\n}\\n.dashboard-dynamic .e-dialog .e-dlg-header-content {\\n    border-bottom: none;\\n    padding: 18px 18px 18px 20px;\\n}\\n.dashboard-dynamic .edit::before {\\n        content: '\\\\e501';\\n        font-family: 'e-sb-icons';\\n        /* color: #e3165b; */\\n        margin-left: -7px;\\n        vertical-align: middle;\\n}\\n.dashboard-dynamic .save::before {\\n    content: '\\\\e500';\\n    font-family: 'e-sb-icons';\\n    /* color: #e3165b; */\\n    margin-left: -7px;\\n    vertical-align: middle;\\n}\\n\\n\\n/* custom code start*/\\n@font-face {\\n    font-family: 'e-sb-icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMjttR/MAAAEoAAAAVmNtYXDlEOVaAAABjAAAADhnbHlmAM1kuQAAAcwAAAD8aGVhZBRipc8AAADQAAAANmhoZWEIUQQEAAAArAAAACRobXR4DAAAAAAAAYAAAAAMbG9jYQA6AH4AAAHEAAAACG1heHABEQA4AAABCAAAACBuYW1lWD3y/QAAAsgAAAIlcG9zdNvk7cwAAATwAAAANQABAAAEAAAAAFwEAAAAAAAD9AABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAApr5cCV8PPPUACwQAAAAAANioMG8AAAAA2KgwbwAAAAAD9AP0AAAACAACAAAAAAAAAAEAAAADACwABAAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5QDlAQQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAEAAAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOUB//8AAOUA//8AAAABAAQAAAABAAIAAAAAADoAfgAEAAAAAAP0A/MAAwALABkAIwAAAREhEQEVMzUzFSE1IxEhETMVMxEjESERIxEjERUhESM1IzUhAx79xAEeR0j+m0gB9I9HR/02SEcD6EdI/KcBcf7iAR4CPI+P19f+4gEeSPzuAWb+mgNa/KZHA1lIRwAAAAMAAAAAA/QD9AADAAgAKwAACQEnCQEDJQEnNwcXPwc1Lw8PBgLH/ko2Abb9uT4BGQJC2m0/2z8HBgUFAwMCAQIEBQcICQoLDA0NDw8PEA0NDQwLCwsCkf5KNgG2/l7+5z4CQ9puP9s/CgsLCwwNDQ0QDw8PDQ0MCwoJCAcFBAIBAQEDAwUFBgAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAcAAQABAAAAAAACAAcACAABAAAAAAADAAcADwABAAAAAAAEAAcAFgABAAAAAAAFAAsAHQABAAAAAAAGAAcAKAABAAAAAAAKACwALwABAAAAAAALABIAWwADAAEECQAAAAIAbQADAAEECQABAA4AbwADAAEECQACAA4AfQADAAEECQADAA4AiwADAAEECQAEAA4AmQADAAEECQAFABYApwADAAEECQAGAA4AvQADAAEECQAKAFgAywADAAEECQALACQBIyBlai1pY29uUmVndWxhcmVqLWljb25lai1pY29uVmVyc2lvbiAxLjBlai1pY29uRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABlAGoALQBpAGMAbwBuAFIAZQBnAHUAbABhAHIAZQBqAC0AaQBjAG8AbgBlAGoALQBpAGMAbwBuAFYAZQByAHMAaQBvAG4AIAAxAC4AMABlAGoALQBpAGMAbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHNhdmUEZWRpdAAAAAAA) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n[class^=\\\"sf-icon-\\\"],\\n[class*=\\\" sf-icon-\\\"] {\\n    font-family: 'e-sb-icons' !important;\\n    speak: none;\\n    font-size: 55px;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: 1;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n.dashboard-dynamic #edit_dashboard{\\n    display: block;\\n}\\n/* highcontrast style */\\nbody.highcontrast .dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel {\\n    background: #000;\\n}\\nbody.highcontrast .dashboard-dynamic #edit_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-dynamic .chart-content, .dashboard-dynamic #container{\\n  height: 100%;\\n  width:100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-V55EMCJG2NEC3AALTPADHFXFXUTFAIGQCOWFKU6ZMQVA2HIIMDFA/Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,aAAa;EACb,WAAW;CACZ\",\"file\":\"linetemplate.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-dynamic .chart-content, .dashboard-dynamic #container{\\n  height: 100%;\\n  width:100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-dynamic .chart-content{\\n  height: 100%;\\n  width:100%;\\n}\\n.dashboard-dynamic #container{\\n  width: 100%;\\n  height: 100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-V55EMCJG2NEC3AALTPADHFXFXUTFAIGQCOWFKU6ZMQVA2HIIMDFA/Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,aAAa;EACb,WAAW;CACZ;AACD;EACE,YAAY;EACZ,aAAa;CACd\",\"file\":\"pietemplate.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-dynamic .chart-content{\\n  height: 100%;\\n  width:100%;\\n}\\n.dashboard-dynamic #container{\\n  width: 100%;\\n  height: 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-seo .chart-content, .dashboard-dynamic .chart-content{\\n  height: 100%;\\n  width:100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-V55EMCJG2NEC3AALTPADHFXFXUTFAIGQCOWFKU6ZMQVA2HIIMDFA/Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,aAAa;EACb,WAAW;CACZ\",\"file\":\"splinetemplate.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-seo .chart-content, .dashboard-dynamic .chart-content{\\n  height: 100%;\\n  width:100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _linetemplate_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linetemplate.vue */ \"./Samples/dashboard-layout/dynamic/linetemplate.vue\");\n/* harmony import */ var _pietemplate_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pietemplate.vue */ \"./Samples/dashboard-layout/dynamic/pietemplate.vue\");\n/* harmony import */ var _splinetemplate_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splinetemplate.vue */ \"./Samples/dashboard-layout/dynamic/splinetemplate.vue\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_5__[\"ButtonPlugin\"]);\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_6__[\"DialogPlugin\"]);\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"DashboardLayoutPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n          spacing: [10,10],\n          header:'Add a Content',\n          target:'.control-section',\n          width:'43%',\n          showCloseIcon: true,\n          contenttemplateVue:'<div id=\"dialogcontent\"><div><div id=\"linetemplate\"><p class=\"dialog-text\">Linechart (1x1) </p></div><div id=\"pietemplate\"><p class=\"dialog-text\">Piechart (1x1) </p></div><div id=\"splinetemplate\"><p class=\"dialog-text\">Splinechart (2x1) </p></div></div></div></div>',\n          spline: function () {\n                return { template : _splinetemplate_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"] }\n            },\n          pie: function () {\n                return { template : _pietemplate_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }\n            },\n          line: function () {\n                return { template : _linetemplate_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }\n            },\n        };\n    },\n    methods: {\n         toggleClick: function(args) {\n              if (this.$refs.toggleBtn.$el.textContent == 'Edit') { \n                    this.$refs.DashbordInstance.allowResizing = true;\n                    this.$refs.DashbordInstance.allowDragging = true;\n                    this.$refs.toggleBtn.$el.textContent = 'Save';\n                    this.$refs.toggleBtn.iconCss = \"save\";\n                    document.getElementById('dialogBtn').style.display = 'block';\n            } else {\n                this.$refs.DashbordInstance.allowResizing = false;\n                this.$refs.DashbordInstance.allowDragging = false;\n                this.$refs.toggleBtn.$el.textContent = 'Edit';\n                this.$refs.toggleBtn.iconCss = \"edit\";\n                document.getElementById('dialogBtn').style.display = 'none';\n            }\n        },\n        onPanelResize: function(args) {\n            var dashboardObject = this.$refs.DashbordInstance;\n        if (dashboardObject && args.element && args.element.querySelector('.e-panel-container .e-panel-content div')) {\n            var chartObj = (args.element.querySelector('.e-panel-container .e-panel-content div.e-control')).ej2_instances[0];\n            chartObj.height = '95%';\n            chartObj.width = '100%';\n            chartObj.refresh();\n        }\n        },\n        dialogButtonClick: function() {\n              this.$refs.dialogObj.show();\n              var proxy = this;\n              this.$refs.dialogObj.$el.querySelector('#linetemplate').onclick = function (e) {\n                   var panel = {\n                       sizeX: 1,\n                       sizeY: 1,\n                       header: '<div>Line Chart</div>',\n                       row: 0,\n                       col:0,\n                       content: proxy.line\n                   }\n                   proxy.$refs.DashbordInstance.addPanel(panel);\n                   proxy.$refs.dialogObj.hide();\n               }\n               this.$refs.dialogObj.$el.querySelector('#pietemplate').onclick = function (e) {\n                   var panel = {\n                       sizeX: 1,\n                       sizeY: 1,\n                       header: '<div>Pie Chart</div>',\n                       row: 0,\n                       col:0,\n                       content: proxy.pie\n                   }\n                   proxy.$refs.DashbordInstance.addPanel(panel);\n                   proxy.$refs.dialogObj.hide();\n               }\n               this.$refs.dialogObj.$el.querySelector('#splinetemplate').onclick = function (e) {\n                   var panel = {\n                       sizeX: 2,\n                       sizeY: 1,\n                       header: '<div>Spline Chart</div>',\n                       row: 0,\n                       col:0,\n                       content: proxy.spline\n                   }\n                   proxy.$refs.DashbordInstance.addPanel(panel);\n                   proxy.$refs.dialogObj.hide();\n               }\n        } \n    },\n}));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      theme: theme,\n      seriesData: [\n            { x: 'Jan', y: 46 }, { x: 'Feb', y: 27 }, { x: 'Mar', y: 26 }\n              ],\n      seriesData1: [\n            { x: 'Jan', y: 37 }, { x: 'Feb', y: 23 }, { x: 'Mar', y: 18 }\n              ],\n      seriesData2: [\n            { x: 'Jan', y: 38 }, { x: 'Feb', y: 17 }, { x: 'Mar', y: 26 }\n              ],\n         primaryXAxis: {\n            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }\n        },\n        chartArea: { border: { width: 0 } },\n\n      //Initializing Primary Y Axis\n          primaryYAxis:\n        {\n            majorGridLines: { width: 0 },\n            majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }\n        },\n     marker: \n     { dataLabel: \n           { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } \n           }\n           \n      },\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"DataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"]]\n  },\n  mounted(){\n    this.$refs.lineInstance.height =\"100%\";\n    this.$refs.lineInstance.width =\"100%\";\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationChartPlugin\"]);\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      theme: theme,\n      seriesData:  [\n        { 'x': 'Jan', y: 12.5, text: 'January' },\n        { 'x': 'Feb', y: 25, text: 'February' },\n        { 'x': 'Mar', y: 50, text: 'March' },\n     ],\n     legendSettings: { visible: false },\n     dataLabel: { visible: true, position: 'Inside', name: 'value'},\n     tooltip: {\n        enable: true, header: '<b>${point.x}</b>', format: 'Composition: <b>${point.y}</b>'\n     },\n     palettes: ['#00bdae', '#357cd2', '#e56691'],\n    };\n  },\n  provide: {\n     accumulationchart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"PieSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationDataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationTooltip\"]]\n  },\n    mounted(){\n    this.$refs.accumulationInstance.height =\"100%\";\n    this.$refs.accumulationInstance.width =\"100%\";\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      seriesData: [\n            { x: new Date(2002, 0, 1), y: 2.2 }, { x: new Date(2003, 0, 1), y: 3.4 },\n            { x: new Date(2004, 0, 1), y: 2.8 }, { x: new Date(2005, 0, 1), y: 1.6 },\n            { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 2.5 },\n            { x: new Date(2008, 0, 1), y: 2.9 }, { x: new Date(2009, 0, 1), y: 3.8 },\n            { x: new Date(2010, 0, 1), y: 1.4 }, { x: new Date(2011, 0, 1), y: 3.1 }\n      ],\n      seriesData1: [\n            { x: new Date(2002, 0, 1), y: 2 }, { x: new Date(2003, 0, 1), y: 1.7 },\n            { x: new Date(2004, 0, 1), y: 1.8 }, { x: new Date(2005, 0, 1), y: 2.1 },\n            { x: new Date(2006, 0, 1), y: 2.3 }, { x: new Date(2007, 0, 1), y: 1.6 },\n            { x: new Date(2008, 0, 1), y: 1.5 }, { x: new Date(2009, 0, 1), y: 2.7 },\n            { x: new Date(2010, 0, 1), y: 1.5 }, { x: new Date(2011, 0, 1), y: 2.2 }\n      ],\n      //Initializing Primary X Axis\n       primaryXAxis: {\n            valueType: 'DateTime',\n            labelFormat: 'y',\n            majorGridLines: { width: 0 },\n            intervalType: 'Years',\n            edgeLabelPlacement: 'Shift'\n        },\n      //Initializing Primary Y Axis\n        primaryYAxis: {\n            labelFormat: '{value}%',\n            lineStyle: { width: 0 },\n            majorTickLines: { width: 0 },\n            minorTickLines: { width: 0 }\n        },\n      chartArea: {\n        border: {\n          width: 0\n        }\n      },\n      border: {\n           color: 'transparent'\n        },\n       width :\"100%\",\n       fill1: 'rgb(0, 189, 174)',\n       fill0: 'rgb(239, 183, 202)',\n       height: \"99%\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"SplineAreaSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"]]\n  },\n  mounted(){\n    this.$refs.splineInstance.height =\"100%\";\n    this.$refs.splineInstance.width =\"100%\";\n  }\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/App.vue?vue&type=template&id=14852819&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/App.vue?vue&type=template&id=14852819& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section dashboard-dynamic\" },\n      [\n        _c(\"div\", [\n          _c(\n            \"div\",\n            { staticStyle: { width: \"100%\", height: \"30px\" } },\n            [\n              _c(\n                \"ejs-button\",\n                {\n                  ref: \"toggleBtn\",\n                  staticStyle: { float: \"right\", width: \"75px\" },\n                  attrs: {\n                    id: \"toggleBtn\",\n                    iconCss: \"edit\",\n                    cssClass: \"e-outline e-flat e-primary\",\n                    isToggle: \"true\"\n                  },\n                  nativeOn: {\n                    click: function($event) {\n                      return _vm.toggleClick($event)\n                    }\n                  }\n                },\n                [_vm._v(\"Edit\")]\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\"div\", { staticStyle: { padding: \"5px\", \"text-align\": \"end\" } }, [\n            _c(\n              \"div\",\n              {\n                staticClass: \"add-widget-button e-control e-btn e-lib\",\n                attrs: { id: \"dialogBtn\" },\n                on: {\n                  click: function($event) {\n                    return _vm.dialogButtonClick($event)\n                  }\n                }\n              },\n              [_vm._v(\"\\n                Add New Widget\\n            \")]\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-dashboardlayout\",\n          {\n            ref: \"DashbordInstance\",\n            attrs: {\n              columns: 2,\n              id: \"edit_dashboard\",\n              allowResizing: false,\n              allowDragging: false,\n              cellSpacing: _vm.spacing,\n              resizeStop: _vm.onPanelResize\n            }\n          },\n          [\n            _c(\n              \"e-panels\",\n              [\n                _c(\"e-panel\", {\n                  attrs: {\n                    row: 0,\n                    col: 0,\n                    sizeX: 1,\n                    sizeY: 1,\n                    header: \"<div>Line Chart</div>\",\n                    content: _vm.line\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-panel\", {\n                  attrs: {\n                    row: 0,\n                    col: 1,\n                    sizeX: 1,\n                    sizeY: 1,\n                    header: \"<div>Pie Chart</div>\",\n                    content: _vm.pie\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-panel\", {\n                  attrs: {\n                    row: 1,\n                    col: 0,\n                    sizeX: 2,\n                    sizeY: 1,\n                    header: \"<div>Spline Chart</div>\",\n                    content: _vm.spline\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"ejs-dialog\", {\n          ref: \"dialogObj\",\n          attrs: {\n            header: _vm.header,\n            content: _vm.contenttemplateVue,\n            showCloseIcon: _vm.showCloseIcon,\n            target: _vm.target,\n            width: _vm.width,\n            visible: false,\n            isModal: true\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The following sample demonstrates a editable dashboard layout. Initially the DashboardLayout component doesn't\\n        allow to\"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowdragging\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"drag\")]\n        ),\n        _vm._v(\", \\n        \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing\",\n              target: \"_blank\"\n            }\n          },\n          [_vm._v(\"resize\")]\n        ),\n        _vm._v(\n          \" or reorder the panels. After clicking the edit button, \\n        the layout becomes editable which allows to drag and reorder the\\n        panels as per the requirement and also you can add new panels to the layout with predefined templates by\\n        clicking the add new button and reorder them by dragging and placing in the required position. Drag and resizing\\n        of the panles are not applicable in mobile resolution.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The following sample demonstrates about using the dashboard layout as an editable layout.\\n    \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=template&id=3b403806&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/linetemplate.vue?vue&type=template&id=3b403806& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticStyle: { display: \"block\", height: \"100%, width:100%\" },\n      attrs: { id: \"container\" }\n    },\n    [\n      _c(\n        \"ejs-chart\",\n        {\n          ref: \"lineInstance\",\n          staticClass: \"chart-content\",\n          staticStyle: { display: \"block\", height: \"100%, width:100%\" },\n          attrs: {\n            theme: _vm.theme,\n            primaryXAxis: _vm.primaryXAxis,\n            primaryYAxis: _vm.primaryYAxis,\n            chartArea: _vm.chartArea\n          }\n        },\n        [\n          _c(\n            \"e-series-collection\",\n            [\n              _c(\"e-series\", {\n                attrs: {\n                  dataSource: _vm.seriesData,\n                  type: \"Column\",\n                  xName: \"x\",\n                  yName: \"y\",\n                  name: \"Jan\",\n                  width: \"2\",\n                  marker: _vm.marker\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-series\", {\n                attrs: {\n                  dataSource: _vm.seriesData1,\n                  type: \"Column\",\n                  xName: \"x\",\n                  yName: \"y\",\n                  name: \"Feb\",\n                  width: \"2\",\n                  marker: _vm.marker,\n                  fill: \"rgb(239, 183, 202)\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-series\", {\n                attrs: {\n                  dataSource: _vm.seriesData2,\n                  type: \"Column\",\n                  xName: \"x\",\n                  yName: \"y\",\n                  name: \"Mar\",\n                  width: \"2\",\n                  marker: _vm.marker\n                }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/linetemplate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=template&id=c80264c4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/pietemplate.vue?vue&type=template&id=c80264c4& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticStyle: { display: \"block\", height: \"100%\", width: \"100%\" },\n      attrs: { id: \"app\" }\n    },\n    [\n      _c(\n        \"ejs-accumulationchart\",\n        {\n          ref: \"accumulationInstance\",\n          staticClass: \"chart-content\",\n          staticStyle: { display: \"block\", height: \"100%\", width: \"100%\" },\n          attrs: {\n            theme: _vm.theme,\n            legendSettings: _vm.legendSettings,\n            tooltip: _vm.tooltip\n          }\n        },\n        [\n          _c(\n            \"e-accumulation-series-collection\",\n            [\n              _c(\"e-accumulation-series\", {\n                attrs: {\n                  palettes: _vm.palettes,\n                  dataSource: _vm.seriesData,\n                  xName: \"x\",\n                  yName: \"y\",\n                  innerRadius: \"40%\",\n                  dataLabel: _vm.dataLabel\n                }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/pietemplate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=template&id=31e0ec63&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/dynamic/splinetemplate.vue?vue&type=template&id=31e0ec63& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticStyle: { display: \"block\", height: \"100%, width:100%\" },\n      attrs: { id: \"container\" }\n    },\n    [\n      _c(\n        \"ejs-chart\",\n        {\n          ref: \"splineInstance\",\n          staticClass: \"chart-content\",\n          staticStyle: { display: \"block\", height: \"100%, width:100%\" },\n          attrs: {\n            theme: _vm.theme,\n            primaryXAxis: _vm.primaryXAxis,\n            primaryYAxis: _vm.primaryYAxis,\n            chartArea: _vm.chartArea,\n            height: _vm.height,\n            width: _vm.width,\n            border: _vm.border\n          }\n        },\n        [\n          _c(\n            \"e-series-collection\",\n            [\n              _c(\"e-series\", {\n                attrs: {\n                  dataSource: _vm.seriesData,\n                  type: \"SplineArea\",\n                  xName: \"x\",\n                  yName: \"y\",\n                  name: \"Jan\",\n                  width: \"2\",\n                  opacity: \"0.5\",\n                  fill: _vm.fill0\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-series\", {\n                attrs: {\n                  dataSource: _vm.seriesData1,\n                  type: \"SplineArea\",\n                  xName: \"x\",\n                  yName: \"y\",\n                  name: \"Feb\",\n                  width: \"2\",\n                  opacity: \"0.5\",\n                  fill: _vm.fill1\n                }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/dynamic/splinetemplate.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });