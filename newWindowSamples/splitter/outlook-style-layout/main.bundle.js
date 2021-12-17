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
/******/ 		"splitter/outlook-style-layout/main": 0
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
/******/ 	deferredModules.push(["./Samples/splitter/outlook-style-layout/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/splitter/outlook-style-layout/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_491315c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=491315c8& */ \"./Samples/splitter/outlook-style-layout/App.vue?vue&type=template&id=491315c8&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/splitter/outlook-style-layout/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_491315c8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_491315c8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/splitter/outlook-style-layout/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/App.vue?vue&type=template&id=491315c8&":
/*!**************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/App.vue?vue&type=template&id=491315c8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_491315c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=491315c8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/App.vue?vue&type=template&id=491315c8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_491315c8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_491315c8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/main.js":
/*!*******************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/splitter/outlook-style-layout/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/main.js?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue":
/*!*************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _outlook_pane1_content_vue_vue_type_template_id_1f8fb820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true& */ \"./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true&\");\n/* harmony import */ var _outlook_pane1_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlook-pane1-content.vue?vue&type=script&lang=js& */ \"./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _outlook_pane1_content_vue_vue_type_style_index_0_id_1f8fb820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css& */ \"./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _outlook_pane1_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _outlook_pane1_content_vue_vue_type_template_id_1f8fb820_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _outlook_pane1_content_vue_vue_type_template_id_1f8fb820_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1f8fb820\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/splitter/outlook-style-layout/outlook-pane1-content.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./outlook-pane1-content.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css&":
/*!**********************************************************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_style_index_0_id_1f8fb820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_style_index_0_id_1f8fb820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_style_index_0_id_1f8fb820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_style_index_0_id_1f8fb820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_style_index_0_id_1f8fb820_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_template_id_1f8fb820_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_template_id_1f8fb820_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane1_content_vue_vue_type_template_id_1f8fb820_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue":
/*!*************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _outlook_pane2_content_vue_vue_type_template_id_4289ab1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outlook-pane2-content.vue?vue&type=template&id=4289ab1e& */ \"./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=template&id=4289ab1e&\");\n/* harmony import */ var _outlook_pane2_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outlook-pane2-content.vue?vue&type=script&lang=js& */ \"./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _outlook_pane2_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _outlook_pane2_content_vue_vue_type_template_id_4289ab1e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _outlook_pane2_content_vue_vue_type_template_id_4289ab1e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/splitter/outlook-style-layout/outlook-pane2-content.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane2_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./outlook-pane2-content.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane2_content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?");

/***/ }),

/***/ "./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=template&id=4289ab1e&":
/*!********************************************************************************************************!*\
  !*** ./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=template&id=4289ab1e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane2_content_vue_vue_type_template_id_4289ab1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./outlook-pane2-content.vue?vue&type=template&id=4289ab1e& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=template&id=4289ab1e&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane2_content_vue_vue_type_template_id_4289ab1e___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_outlook_pane2_content_vue_vue_type_template_id_4289ab1e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    /* custom code start */\\n.outlook-style #target {\\n        margin: 20px auto;\\n        max-width: 820px;\\n}\\n    /* custom code end */\\n.outlook-style #discard {\\n        margin-left: 7px;\\n}\\n.outlook-style table {\\n        width: 100%;\\n        border: none;\\n}\\n.outlook-style td {\\n        padding: 2px;\\n}\\n.outlook-style.control-section{            \\n        min-height: 370px;\\n}\\n.outlook-style .e-treeview .e-list-text {\\n        width: 100%;\\n}\\n.outlook-style #groupedList.e-listview .e-list-group-item {\\n        height: 0;\\n}\\n.outlook-style #splitter1 .settings.e-list-wrapper.e-list-multi-line.e-list-avatar {\\n        padding: 15px;\\n}\\n.outlook-style #buttonSection {\\n        padding: 7px;\\n}\\n.outlook-style #createpostholder {\\n        padding-left: 3px;\\n        padding-right: 4px;\\n}\\n.outlook-style #splitter #template ul.e-list-parent.e-ul {\\n\\t\\tpadding: 0 0 0 16px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-XPLX5WQZDQ5BV5J3TMCR6EI5PERYQWRPKZEYEPVTR6R6YMYILOXQ/Samples/splitter/outlook-style-layout/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgCI,uBAAuB;AAC3B;QACQ,kBAAkB;QAClB,iBAAiB;CACxB;IACG,qBAAqB;AACzB;QACQ,iBAAiB;CACxB;AACD;QACQ,YAAY;QACZ,aAAa;CACpB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,UAAU;CACjB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,kBAAkB;QAClB,mBAAmB;CAC1B;AACD;EACE,oBAAoB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    /* custom code start */\\n.outlook-style #target {\\n        margin: 20px auto;\\n        max-width: 820px;\\n}\\n    /* custom code end */\\n.outlook-style #discard {\\n        margin-left: 7px;\\n}\\n.outlook-style table {\\n        width: 100%;\\n        border: none;\\n}\\n.outlook-style td {\\n        padding: 2px;\\n}\\n.outlook-style.control-section{            \\n        min-height: 370px;\\n}\\n.outlook-style .e-treeview .e-list-text {\\n        width: 100%;\\n}\\n.outlook-style #groupedList.e-listview .e-list-group-item {\\n        height: 0;\\n}\\n.outlook-style #splitter1 .settings.e-list-wrapper.e-list-multi-line.e-list-avatar {\\n        padding: 15px;\\n}\\n.outlook-style #buttonSection {\\n        padding: 7px;\\n}\\n.outlook-style #createpostholder {\\n        padding-left: 3px;\\n        padding-right: 4px;\\n}\\n.outlook-style #splitter #template ul.e-list-parent.e-ul {\\n\\t\\tpadding: 0 0 0 16px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.tree-template-control-wrapper .e-treeview .e-list-text[data-v-1f8fb820] {\\n    width: 100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-XPLX5WQZDQ5BV5J3TMCR6EI5PERYQWRPKZEYEPVTR6R6YMYILOXQ/Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,YAAY;CACf\",\"file\":\"outlook-pane1-content.vue?vue&type=style&index=0&id=1f8fb820&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.tree-template-control-wrapper .e-treeview .e-list-text[data-v-1f8fb820] {\\n    width: 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _outlook_pane1_content_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlook-pane1-content.vue */ \"./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue\");\n/* harmony import */ var _outlook_pane2_content_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlook-pane2-content.vue */ \"./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nlet rteobj = undefined;\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"TextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"SplitterPlugin\"]);\n\nvar pane3Content = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane3\", {\n  template: `<div>\n    <div style=\"width: 100%; padding: 15px;\">\n        <table>\n            <tr>\n                <td><ejs-button cssClass='e-flat e-outline' isprimary=true >To...</ejs-button></td>\n                <td><ejs-textbox id=\"firstname\" /></td>\n            </tr>\n            <tr>\n                <td><ejs-button cssClass='e-flat e-outline'>Cc...</ejs-button></td>\n                <td><ejs-textbox id=\"lastname\" /></td>\n            </tr>\n            <tr>\n                <td><div id=\"subject-text\">Subject</div></td>\n                <td><ejs-textbox id=\"subject\" /></td>\n            </tr>\n        </table>\n    </div>\n    <div class=\"forum\">\n        <div id=\"createpostholder\">\n            <ejs-richtexteditor id=\"outlook_rte\" ref=\"rteInstance\" height='262px'></ejs-richtexteditor>\n            <div id=\"buttonSection\">\n                <ejs-button :isPrimary=\"isPrimary\" id=\"send\" >Send</ejs-button>\n                <ejs-button id=\"discard\" >Discard</ejs-button>\n            </div>\n        </div>\n    </div>\n</div>`,\n  data() {\n    return {\n      isPrimary: true\n    };\n  },\n    mounted() {\n        bus.$emit(\"rteInst\", this.$refs.rteInstance);\n        this.$nextTick(function () {\n            this.$refs.rteInstance.refreshUI();\n             rteobj =  this.$refs.rteInstance;\n        })\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"]]\n    }\n});\n\nvar bus = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            pane1Content: function () {\n                return { template : _outlook_pane1_content_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"] }\n            },\n            pane2Content: function () {\n                return { template : _outlook_pane2_content_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }\n            },\n            pane3Content: function () {\n                return { template : pane3Content }\n            }\n        }\n    },\n    methods: {\n        onSplitterResize: function() {\n            rteobj.refreshUI();\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TreeViewPlugin\"]);\n\nvar mailBox = [\n        { id: 1, name: 'Favorites', hasChild: true},\n        { id: 2, pid: 1, name: 'Sales Reports', count: '4' },\n        { id: 3, pid: 1, name: 'Sent Items'},\n        { id: 4, pid: 1, name: 'Marketing Reports ', count: '6'},\n        { id: 5, name: 'Andrew Fuller', hasChild: true, expanded: true },\n        { id: 6, pid: 5, name: 'Inbox',  selected: true , count: '20'},\n        { id: 7, pid: 5,  name: 'Drafts', count: '5'},\n        { id: 8, pid: 5,  name: 'Deleted Items'},\n        { id: 9, pid: 5, name: 'Sent Items'},\n        { id: 10, pid: 5, name: 'Sales Reports' , count: '4'},\n        { id: 11, pid: 5, name: 'Marketing Reports', count: '6' },\n        { id: 12, pid: 5, name: 'Outbox' },\n        { id: 13, pid: 5, name: 'Junk Email'},\n        { id: 14, pid: 5, name: 'RSS Feed'},\n        { id: 15, pid: 5, name: 'Trash' }\n];\n\nvar treeTemplate = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo\", {\n  template: '<div><div class=\"treeviewdiv\"><div style=\"float:left\"><span class=\"treeName\">{{data.name}}</span></div>' +\n        '<div v-if=\"data.count\" style=\"margin-right: 5px; float:right\"><span class=\"treeCount e-badge e-badge-primary\">{{data.count}}</span></div></div></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend ({\n    data: function() {\n        return {\n            fields: { dataSource: mailBox, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },\n            treeTemplate: function(e) {\n                return {\n                    template: treeTemplate\n                };\n            },\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './data-vue-template.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n\n\n\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__[\"ListViewPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      cssClass: \"e-list-template\",\n      outlookdata: [\n       { Name: 'Selma Tally', content1: 'Apology marketing email', content2:'Hello Ananya Singleton' },\n       { Name: 'Illa Russo', content1: 'Annual conference', content2: 'Hi jeani Moresa' },\n       { Name: 'Camden Macmellon', content1: 'Reference request- Camden hester', content2: 'Hello Kerry Best,' },\n       { Name: 'Garth Owen', content1: 'Application for job Title', content2: 'Hello Illa Russo' },\n       { Name: 'Ursula Patterson', content1: 'Programmaer Position Applicant', content2: 'Hello Kerry best,' }\n      ],\n      datatemplate: function() {\n        return {\n          template: !(function webpackMissingModule() { var e = new Error(\"Cannot find module './data-vue-template.vue'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())\n        };\n      }\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/App.vue?vue&type=template&id=491315c8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/App.vue?vue&type=template&id=491315c8& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section outlook-style\"},[_c('div',{staticClass:\"control_wrapper\",attrs:{\"id\":\"target\"}},[_c('ejs-splitter',{ref:\"splitterObj\",attrs:{\"id\":\"splitter\",\"width\":\"100%\",\"height\":\"498px\",\"resizing\":_vm.onSplitterResize}},[_c('e-panes',[_c('e-pane',{attrs:{\"size\":\"28%\",\"min\":\"27%\",\"content\":_vm.pane1Content}}),_vm._v(\" \"),_c('e-pane',{attrs:{\"size\":\"33%\",\"min\":\"23%\",\"content\":_vm.pane2Content}}),_vm._v(\" \"),_c('e-pane',{attrs:{\"size\":\"37%\",\"min\":\"30%\",\"content\":_vm.pane3Content}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This example demonstrates the splitter control that is used to design outlook-like application using multiple horizontal panes. \\n            You can resize its panes horizontally to increase dimension. \\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            The splitter control is used to create outlook-like user interface application using multiple panes with horizontal orientation. \\n            To create outlook-style user interface, use TreeView, ListView, and RichTextEditor controls within split panes. \\n            The TreeView control is used to display mail folders at left pane and ListView to display details of mail items, and \\n            RichTextEditor to create new mail.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?vue&type=template&id=1f8fb820&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"tree-template-control-wrapper\"},[_c('ejs-treeview',{attrs:{\"id\":\"template\",\"fields\":_vm.fields,\"cssClass\":\"custom\",\"nodeTemplate\":_vm.treeTemplate}})],1)])}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane1-content.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=template&id=4289ab1e&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?vue&type=template&id=4289ab1e& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('ejs-listview',{attrs:{\"id\":\"listview\",\"dataSource\":_vm.outlookdata,\"cssClass\":_vm.cssClass,\"template\":_vm.datatemplate}})],1)}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/splitter/outlook-style-layout/outlook-pane2-content.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });