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
/******/ 		"dialog/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/dialog/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/dialog/template/App.vue":
/*!*****************************************!*\
  !*** ./Samples/dialog/template/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1ac352e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1ac352e2& */ \"./Samples/dialog/template/App.vue?vue&type=template&id=1ac352e2&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/dialog/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1ac352e2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1ac352e2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dialog/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?");

/***/ }),

/***/ "./Samples/dialog/template/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/dialog/template/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?");

/***/ }),

/***/ "./Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?");

/***/ }),

/***/ "./Samples/dialog/template/App.vue?vue&type=template&id=1ac352e2&":
/*!************************************************************************!*\
  !*** ./Samples/dialog/template/App.vue?vue&type=template&id=1ac352e2& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1ac352e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1ac352e2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/App.vue?vue&type=template&id=1ac352e2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1ac352e2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1ac352e2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?");

/***/ }),

/***/ "./Samples/dialog/template/content-template.vue":
/*!******************************************************!*\
  !*** ./Samples/dialog/template/content-template.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_template_vue_vue_type_template_id_64fe1430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-template.vue?vue&type=template&id=64fe1430& */ \"./Samples/dialog/template/content-template.vue?vue&type=template&id=64fe1430&\");\n/* harmony import */ var _content_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-template.vue?vue&type=script&lang=js& */ \"./Samples/dialog/template/content-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _content_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _content_template_vue_vue_type_template_id_64fe1430___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _content_template_vue_vue_type_template_id_64fe1430___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dialog/template/content-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dialog/template/content-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/content-template.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/dialog/template/content-template.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_content_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./content-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/content-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_content_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dialog/template/content-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/content-template.vue?vue&type=template&id=64fe1430&":
/*!*************************************************************************************!*\
  !*** ./Samples/dialog/template/content-template.vue?vue&type=template&id=64fe1430& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_template_vue_vue_type_template_id_64fe1430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./content-template.vue?vue&type=template&id=64fe1430& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/content-template.vue?vue&type=template&id=64fe1430&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_template_vue_vue_type_template_id_64fe1430___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_content_template_vue_vue_type_template_id_64fe1430___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/content-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/footer-template.vue":
/*!*****************************************************!*\
  !*** ./Samples/dialog/template/footer-template.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_template_vue_vue_type_template_id_f99a430c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-template.vue?vue&type=template&id=f99a430c& */ \"./Samples/dialog/template/footer-template.vue?vue&type=template&id=f99a430c&\");\n/* harmony import */ var _footer_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-template.vue?vue&type=script&lang=js& */ \"./Samples/dialog/template/footer-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _footer_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _footer_template_vue_vue_type_template_id_f99a430c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _footer_template_vue_vue_type_template_id_f99a430c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dialog/template/footer-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dialog/template/footer-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/footer-template.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/dialog/template/footer-template.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_footer_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./footer-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/footer-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dialog/template/footer-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/footer-template.vue?vue&type=template&id=f99a430c&":
/*!************************************************************************************!*\
  !*** ./Samples/dialog/template/footer-template.vue?vue&type=template&id=f99a430c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_template_vue_vue_type_template_id_f99a430c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./footer-template.vue?vue&type=template&id=f99a430c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/footer-template.vue?vue&type=template&id=f99a430c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_template_vue_vue_type_template_id_f99a430c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_template_vue_vue_type_template_id_f99a430c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/footer-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/header-template.vue":
/*!*****************************************************!*\
  !*** ./Samples/dialog/template/header-template.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_template_vue_vue_type_template_id_23266a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-template.vue?vue&type=template&id=23266a70& */ \"./Samples/dialog/template/header-template.vue?vue&type=template&id=23266a70&\");\n/* harmony import */ var _header_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-template.vue?vue&type=script&lang=js& */ \"./Samples/dialog/template/header-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _header_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _header_template_vue_vue_type_template_id_23266a70___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _header_template_vue_vue_type_template_id_23266a70___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dialog/template/header-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dialog/template/header-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/header-template.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/dialog/template/header-template.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_header_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./header-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/header-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_header_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dialog/template/header-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/header-template.vue?vue&type=template&id=23266a70&":
/*!************************************************************************************!*\
  !*** ./Samples/dialog/template/header-template.vue?vue&type=template&id=23266a70& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_template_vue_vue_type_template_id_23266a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./header-template.vue?vue&type=template&id=23266a70& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/header-template.vue?vue&type=template&id=23266a70&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_template_vue_vue_type_template_id_23266a70___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_template_vue_vue_type_template_id_23266a70___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/header-template.vue?");

/***/ }),

/***/ "./Samples/dialog/template/main.js":
/*!*****************************************!*\
  !*** ./Samples/dialog/template/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/dialog/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.highcontrast .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #ffd939;\\n}\\n.fabric .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #0078d7;\\n}\\n.tailwind .dialog-template .e-dialog .e-dlg-header-content,\\n    .tailwind-dark .dialog-template .e-dialog .e-dlg-header-content,\\n    .bootstrap5 .dialog-template .e-dialog .e-dlg-header-content,\\n    .bootstrap5-dark .dialog-template .e-dialog .e-dlg-header-content,\\n    .material .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #3f51b5;\\n}\\n.bootstrap .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #428bca;\\n}\\n.bootstrap4 .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #007bff;\\n}\\n.dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {\\n        top: 5px;\\n        left: -11px;\\n}\\n.e-bigger .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {\\n        top: 3px;\\n        left: -11px;\\n}\\n.bootstrap4 .dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn,\\n    .bootstrap4.e-bigger .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {\\n        top: 8px;\\n}\\n.dialog-template .e-dialog .e-dlg-header {\\n        position: relative;\\n}\\n.dialog-template .e-dialog .e-footer-content {\\n        padding: 10px 13px 13px;\\n}\\n.dialog-template .e-dialog .e-dlg-content {\\n        padding: 0;\\n}\\n.dialog-template button#sendButton, .dialog-template .highcontrast button#sendButton {\\n        position: relative;\\n}\\n.dialog-template button#sendbtn, .dialog-template .highcontrast button#sendbtn {\\n        top: -2px;\\n}\\n.dialog-template input.e-input {\\n        width: 62%;\\n        float: left;\\n}\\n.dialog-template .e-dialog .e-dlg-header-content {\\n        padding: 6px;\\n}\\n.dialog-template .e-open-icon::before {\\n        content: '\\\\E782';\\n}\\n.dialog-template img.img2 {\\n        height: 36px;\\n        width: 36px;\\n        border-radius: 50%;\\n        vertical-align: middle;\\n}\\n.dialog-template #dlg-template {\\n        display: inline-block;\\n        padding: 0px 10px;\\n        vertical-align: middle;\\n        height: 40px;\\n        line-height: 40px;\\n}\\n.dialog-template input.e-input {\\n        width: 75%;\\n        float: left;\\n}\\n.dialog-template .e-icon-settings.e-icons {\\n        float: left;\\n        position: relative;\\n        left: 14%;\\n        top: -33px;\\n}\\n.dialog-template .e-icon-settings.e-icons {\\n        top: -37px;\\n}\\n.dialog-template .dialogContent .dialogText {\\n        font-size: 13px;\\n        padding: 5%;\\n        word-wrap: break-word;\\n        border-radius: 6px;\\n        text-align: justify;\\n        font-style: initial;\\n        display: block;\\n}\\n.dialog-template .e-dlg-header .e-icon-settings, .dialog-template .e-icon-btn {\\n        color: #fff;\\n}\\n.material .dialog-template .e-dialog .e-footer-content, .fabric .dialog-template .e-dialog .e-footer-content {\\n        border-top: 0.5px solid rgba(0, 0, 0, 0.42);\\n}\\n.highcontrast .dialog-template .e-dialog .e-footer-content{\\n        border-top: 0.5px solid #fff;\\n}\\n.bootstrap4 .dialog-template .e-dialog .e-footer-content{\\n        border-top: 1px solid #e9ecef;\\n}\\n.highcontrast .dialog-template .dialogContent .dialogText{\\n        background-color: #bfbfbf;\\n}\\n.dialog-template .dialogContent .dialogText, .dialog-template .dialogContent .dialogText  {\\n        background-color: #f5f5f5;\\n}\\n.material-dark .dialog-template .dialogContent .dialogText,\\n    .fabric-dark .dialog-template .dialogContent .dialogText,\\n    .bootstrap-dark .dialog-template .dialogContent .dialogText,\\n    .bootstrap5-dark .dialog-template .dialogContent .dialogText,\\n    .tailwind-dark .dialog-template .dialogContent .dialogText {\\n        color: #424242;\\n}\\n.dialog-template .dialogContent {\\n        display: block;\\n        font-size: 15px;\\n        word-wrap: break-word;\\n        text-align: center;\\n        font-style: italic;\\n        border-radius: 6px;\\n        padding: 3%;\\n        position: relative;\\n        top: 25px;\\n}\\n.control-wrapper .dialog-template .e-control.e-dialog {\\n        width: 30%;\\n}\\n.fabric .dialog-template .e-dialog .e-btn.e-dlg-closeicon-btn:hover span {\\n        color: #8ECBFF;\\n}\\n.dialog-template .e-dialog .e-dlg-header-content .e-icon-dlg-close {\\n        color: #fff;\\n}\\n.material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,\\n    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {\\n        background-color: rgba(255,255,255, 0.10);\\n}\\n.bootstrap4 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,\\n    .bootstrap4 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {\\n        background-color : transparent;\\n}\\n.material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:active .e-icon-dlg-close,\\n    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus .e-icon-dlg-close,\\n    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover .e-icon-dlg-close {\\n        color: #fff;\\n}\\n.dialog-template .e-dialog .e-dlg-header-content .e-dlg-header .e-avatar.template-image {\\n        background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/dialog-img1.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n        vertical-align: middle;\\n        display: inline-block;\\n        width: 36px;\\n        height: 36px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-H6S45WM4B67Q2MZVHE5J7ZOX3PYL5OP2IBI5DVQGGPER3OT7WU2A/Samples/dialog/template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,0BAA0B;CACjC;AACD;QACQ,0BAA0B;CACjC;AACD;;;;;QAKQ,0BAA0B;CACjC;AACD;QACQ,0BAA0B;CACjC;AACD;QACQ,0BAA0B;CACjC;AACD;QACQ,SAAS;QACT,YAAY;CACnB;AACD;QACQ,SAAS;QACT,YAAY;CACnB;AACD;;QAEQ,SAAS;CAChB;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,wBAAwB;CAC/B;AACD;QACQ,WAAW;CAClB;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,UAAU;CACjB;AACD;QACQ,WAAW;QACX,YAAY;CACnB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,aAAa;QACb,YAAY;QACZ,mBAAmB;QACnB,uBAAuB;CAC9B;AACD;QACQ,sBAAsB;QACtB,kBAAkB;QAClB,uBAAuB;QACvB,aAAa;QACb,kBAAkB;CACzB;AACD;QACQ,WAAW;QACX,YAAY;CACnB;AACD;QACQ,YAAY;QACZ,mBAAmB;QACnB,UAAU;QACV,WAAW;CAClB;AACD;QACQ,WAAW;CAClB;AACD;QACQ,gBAAgB;QAChB,YAAY;QACZ,sBAAsB;QACtB,mBAAmB;QACnB,oBAAoB;QACpB,oBAAoB;QACpB,eAAe;CACtB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,4CAA4C;CACnD;AACD;QACQ,6BAA6B;CACpC;AACD;QACQ,8BAA8B;CACrC;AACD;QACQ,0BAA0B;CACjC;AACD;QACQ,0BAA0B;CACjC;AACD;;;;;QAKQ,eAAe;CACtB;AACD;QACQ,eAAe;QACf,gBAAgB;QAChB,sBAAsB;QACtB,mBAAmB;QACnB,mBAAmB;QACnB,mBAAmB;QACnB,YAAY;QACZ,mBAAmB;QACnB,UAAU;CACjB;AACD;QACQ,WAAW;CAClB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,YAAY;CACnB;AACD;;QAEQ,0CAA0C;CACjD;AACD;;QAEQ,+BAA+B;CACtC;AACD;;;QAGQ,YAAY;CACnB;AACD;QACQ,gDAAkD;QAClD,uBAAuB;QACvB,sBAAsB;QACtB,YAAY;QACZ,aAAa;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.highcontrast .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #ffd939;\\n}\\n.fabric .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #0078d7;\\n}\\n.tailwind .dialog-template .e-dialog .e-dlg-header-content,\\n    .tailwind-dark .dialog-template .e-dialog .e-dlg-header-content,\\n    .bootstrap5 .dialog-template .e-dialog .e-dlg-header-content,\\n    .bootstrap5-dark .dialog-template .e-dialog .e-dlg-header-content,\\n    .material .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #3f51b5;\\n}\\n.bootstrap .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #428bca;\\n}\\n.bootstrap4 .dialog-template .e-dialog .e-dlg-header-content {\\n        background-color: #007bff;\\n}\\n.dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {\\n        top: 5px;\\n        left: -11px;\\n}\\n.e-bigger .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {\\n        top: 3px;\\n        left: -11px;\\n}\\n.bootstrap4 .dialog-template .e-dlg-header-content .e-btn.e-dlg-closeicon-btn,\\n    .bootstrap4.e-bigger .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn {\\n        top: 8px;\\n}\\n.dialog-template .e-dialog .e-dlg-header {\\n        position: relative;\\n}\\n.dialog-template .e-dialog .e-footer-content {\\n        padding: 10px 13px 13px;\\n}\\n.dialog-template .e-dialog .e-dlg-content {\\n        padding: 0;\\n}\\n.dialog-template button#sendButton, .dialog-template .highcontrast button#sendButton {\\n        position: relative;\\n}\\n.dialog-template button#sendbtn, .dialog-template .highcontrast button#sendbtn {\\n        top: -2px;\\n}\\n.dialog-template input.e-input {\\n        width: 62%;\\n        float: left;\\n}\\n.dialog-template .e-dialog .e-dlg-header-content {\\n        padding: 6px;\\n}\\n.dialog-template .e-open-icon::before {\\n        content: '\\\\e782';\\n}\\n.dialog-template img.img2 {\\n        height: 36px;\\n        width: 36px;\\n        border-radius: 50%;\\n        vertical-align: middle;\\n}\\n.dialog-template #dlg-template {\\n        display: inline-block;\\n        padding: 0px 10px;\\n        vertical-align: middle;\\n        height: 40px;\\n        line-height: 40px;\\n}\\n.dialog-template input.e-input {\\n        width: 75%;\\n        float: left;\\n}\\n.dialog-template .e-icon-settings.e-icons {\\n        float: left;\\n        position: relative;\\n        left: 14%;\\n        top: -33px;\\n}\\n.dialog-template .e-icon-settings.e-icons {\\n        top: -37px;\\n}\\n.dialog-template .dialogContent .dialogText {\\n        font-size: 13px;\\n        padding: 5%;\\n        word-wrap: break-word;\\n        border-radius: 6px;\\n        text-align: justify;\\n        font-style: initial;\\n        display: block;\\n}\\n.dialog-template .e-dlg-header .e-icon-settings, .dialog-template .e-icon-btn {\\n        color: #fff;\\n}\\n.material .dialog-template .e-dialog .e-footer-content, .fabric .dialog-template .e-dialog .e-footer-content {\\n        border-top: 0.5px solid rgba(0, 0, 0, 0.42);\\n}\\n.highcontrast .dialog-template .e-dialog .e-footer-content{\\n        border-top: 0.5px solid #fff;\\n}\\n.bootstrap4 .dialog-template .e-dialog .e-footer-content{\\n        border-top: 1px solid #e9ecef;\\n}\\n.highcontrast .dialog-template .dialogContent .dialogText{\\n        background-color: #bfbfbf;\\n}\\n.dialog-template .dialogContent .dialogText, .dialog-template .dialogContent .dialogText  {\\n        background-color: #f5f5f5;\\n}\\n.material-dark .dialog-template .dialogContent .dialogText,\\n    .fabric-dark .dialog-template .dialogContent .dialogText,\\n    .bootstrap-dark .dialog-template .dialogContent .dialogText,\\n    .bootstrap5-dark .dialog-template .dialogContent .dialogText,\\n    .tailwind-dark .dialog-template .dialogContent .dialogText {\\n        color: #424242;\\n}\\n.dialog-template .dialogContent {\\n        display: block;\\n        font-size: 15px;\\n        word-wrap: break-word;\\n        text-align: center;\\n        font-style: italic;\\n        border-radius: 6px;\\n        padding: 3%;\\n        position: relative;\\n        top: 25px;\\n}\\n.control-wrapper .dialog-template .e-control.e-dialog {\\n        width: 30%;\\n}\\n.fabric .dialog-template .e-dialog .e-btn.e-dlg-closeicon-btn:hover span {\\n        color: #8ECBFF;\\n}\\n.dialog-template .e-dialog .e-dlg-header-content .e-icon-dlg-close {\\n        color: #fff;\\n}\\n.material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,\\n    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {\\n        background-color: rgba(255,255,255, 0.10);\\n}\\n.bootstrap4 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover,\\n    .bootstrap4 .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus {\\n        background-color : transparent;\\n}\\n.material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:active .e-icon-dlg-close,\\n    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:focus .e-icon-dlg-close,\\n    .material .dialog-template .e-dialog .e-dlg-header-content .e-btn.e-dlg-closeicon-btn:hover .e-icon-dlg-close {\\n        color: #fff;\\n}\\n.dialog-template .e-dialog .e-dlg-header-content .e-dlg-header .e-avatar.template-image {\\n        background-image: url('./images/dialog-img1.png');\\n        vertical-align: middle;\\n        display: inline-block;\\n        width: 36px;\\n        height: 36px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _header_template_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-template.vue */ \"./Samples/dialog/template/header-template.vue\");\n/* harmony import */ var _footer_template_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer-template.vue */ \"./Samples/dialog/template/footer-template.vue\");\n/* harmony import */ var _content_template_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content-template.vue */ \"./Samples/dialog/template/content-template.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_1__[\"DialogPlugin\"]);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            proxy: this,\n            footer: function () {\n                return { template : _footer_template_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"] }\n            },\n            header: function () {\n                return { template : _header_template_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"] }\n            },\n            showCloseIcon: true,\n            height: '75%',\n            contenttemplateVue: function () {\n                return { template : _content_template_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"] }\n            },\n            target: '.control-section',\n            animationSettings:  { effect: 'None' },\n            width:  '435px',\n            ShowBtn: false            \n        }\n    },\n    methods: {\n        dialogClose: function() {\n            this.ShowBtn = true;\n        },    \n        BtnClick: function() {\n            this.$refs.dialogObj.show();\n        },\n        dialogOpen: function() {\n            this.ShowBtn = false;\n            document.getElementById('sendButton').keypress = (e) => {\n                if (e.keyCode === 13) { this.updateTextValue(); }\n            };    \n            document.getElementById('inVal').onkeydown = (e) => {\n                if (e.keyCode === 13) { this.updateTextValue(); }\n            };    \n            document.getElementById('sendButton').onclick = () => {\n                this.updateTextValue();\n            };\n        },\n        changePosition: function(event) {\n            this.$refs.dialogObj.position = { X: event.value.split(\" \")[0], Y: event.value.split(\" \")[1] };\n            document.getElementById('posvalue').innerHTML = 'Position: {X: \"' + event.value.split(\" \")[0] + '\", Y: \"' + event.value.split(\" \")[1] + '\"}'\n            var txt = event.target.parentElement.querySelector('.e-label').innerText.split(\" \");\n            document.getElementById('posvalue').innerHTML = 'Position: { X: \"' + txt[0] + '\", Y: \"' + txt[1] + '\" }';\n        },\n        updateTextValue: function() {\n            var enteredVal = document.getElementById('inVal');\n            var dialogTextElement = document.getElementsByClassName('dialogText')[0];\n            if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"isNullOrUndefined\"])(document.getElementsByClassName('contentText')[0])) {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"detach\"])(document.getElementsByClassName('contentText')[0]);\n            }\n            if (enteredVal.value !== '') {\n                dialogTextElement.innerHTML = enteredVal.value;\n            }\n            enteredVal.value = '';\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/content-template.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/content-template.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n\n /* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n      data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/content-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/footer-template.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/footer-template.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n      data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/footer-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/header-template.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/header-template.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n\n /* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n      data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/header-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/App.vue?vue&type=template&id=1ac352e2&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/App.vue?vue&type=template&id=1ac352e2& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-12 control-section dialog-template\" },\n      [\n        _vm.ShowBtn\n          ? _c(\n              \"ejs-button\",\n              {\n                attrs: { id: \"dlgbtn\" },\n                nativeOn: {\n                  click: function($event) {\n                    return _vm.BtnClick.apply(null, arguments)\n                  }\n                }\n              },\n              [_vm._v(\"Open\")]\n            )\n          : _vm._e(),\n        _vm._v(\" \"),\n        _c(\"ejs-dialog\", {\n          ref: \"dialogObj\",\n          attrs: {\n            header: _vm.header,\n            footerTemplate: _vm.footer,\n            content: _vm.contenttemplateVue,\n            height: _vm.height,\n            animationSettings: _vm.animationSettings,\n            showCloseIcon: _vm.showCloseIcon,\n            target: _vm.target,\n            width: _vm.width,\n            open: _vm.dialogOpen,\n            close: _vm.dialogClose\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          '\\n          This example demonstrates the template functionalities of the dialog component. The dialog\\'s header and footer is configured with HTML template. The typed content will be replaced every time when clicking the \"send\" button.\\n      '\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          The dialog component displays HTML template content on the header and footer. The user can set any HTML element as header and footer with the usage of content and footer template properties.\\n      \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/content-template.vue?vue&type=template&id=64fe1430&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/content-template.vue?vue&type=template&id=64fe1430& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"container\" } }, [\n      _c(\"div\", { staticClass: \"dialogContent\" }, [\n        _c(\"span\", { staticClass: \"dialogText\" }, [\n          _vm._v(\n            \"Greetings Nancy! When will you share me the source files of the project?\"\n          )\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/content-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/footer-template.vue?vue&type=template&id=f99a430c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/footer-template.vue?vue&type=template&id=f99a430c& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"container\" } }, [\n      _c(\"input\", {\n        staticClass: \"e-input\",\n        attrs: {\n          id: \"inVal\",\n          type: \"text\",\n          placeholder: \"Enter your message here!\"\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"button\",\n        {\n          staticClass: \"e-control e-btn e-primary sendButton\",\n          attrs: { id: \"sendButton\", \"data-ripple\": \"true\" }\n        },\n        [_vm._v(\"Send\")]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/footer-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dialog/template/header-template.vue?vue&type=template&id=23266a70&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dialog/template/header-template.vue?vue&type=template&id=23266a70& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"span\", { attrs: { id: \"container\" } }, [\n      _c(\"div\", {\n        staticClass: \"e-avatar template-image e-avatar-xsmall e-avatar-circle\"\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"e-icon-settings\",\n          attrs: { id: \"dlg-template\", title: \"Nancy\" }\n        },\n        [_vm._v(\" Nancy \")]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dialog/template/header-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });