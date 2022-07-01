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
/******/ 		"range-navigator/double/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-navigator/double/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-navigator/double/App.vue":
/*!************************************************!*\
  !*** ./Samples/range-navigator/double/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_dfe41902_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=dfe41902&scoped=true& */ \"./Samples/range-navigator/double/App.vue?vue&type=template&id=dfe41902&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-navigator/double/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_dfe41902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css& */ \"./Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_dfe41902_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_dfe41902_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"dfe41902\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-navigator/double/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/double/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/range-navigator/double/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/double/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dfe41902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dfe41902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dfe41902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dfe41902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dfe41902_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/double/App.vue?vue&type=template&id=dfe41902&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/range-navigator/double/App.vue?vue&type=template&id=dfe41902&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dfe41902_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=dfe41902&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/double/App.vue?vue&type=template&id=dfe41902&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dfe41902_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dfe41902_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/double/double-data.ts":
/*!*******************************************************!*\
  !*** ./Samples/range-navigator/double/double-data.ts ***!
  \*******************************************************/
/*! exports provided: sl, aus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sl\", function() { return sl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aus\", function() { return aus; });\n/**\n * Data Source for SL vs Aus\n */\nvar sl = [\n    { x: 1, y: 2 },\n    { x: 2, y: 3, isWicket: true },\n    { x: 3, y: 1 },\n    { x: 4, y: 7 },\n    { x: 5, y: 5 },\n    { x: 6, y: 24 },\n    { x: 7, y: 13 },\n    { x: 8, y: 4 },\n    { x: 9, y: 6 },\n    { x: 10, y: 4 },\n    { x: 11, y: 7 },\n    { x: 12, y: 5 },\n    { x: 13, y: 5 },\n    { x: 14, y: 10 },\n    { x: 15, y: 5 },\n    { x: 16, y: 5 },\n    { x: 17, y: 13 },\n    { x: 18, y: 4 },\n    { x: 19, y: 8 },\n    { x: 20, y: 2 },\n    { x: 21, y: 2 },\n    { x: 22, y: 2, isWicket: true },\n    { x: 23, y: 5 },\n    { x: 24, y: 7 },\n    { x: 25, y: 1 },\n    { x: 26, y: 4 },\n    { x: 27, y: 5 },\n    { x: 28, y: 5 },\n    { x: 29, y: 5 },\n    { x: 30, y: 17 },\n    { x: 31, y: 42, isWicket: true },\n    { x: 32, y: 7 },\n    { x: 33, y: 5 },\n    { x: 34, y: 2, isWicket: true },\n    { x: 35, y: 6 },\n    { x: 36, y: 16 },\n    { x: 37, y: 19 },\n    { x: 38, y: 6 },\n    { x: 39, y: 12 },\n    { x: 40, y: 11 },\n    { x: 41, y: 8 },\n    { x: 42, y: 12, isWicket: true },\n    { x: 43, y: 4, isWicket: true },\n    { x: 44, y: 8 },\n    { x: 45, y: 2, isWicket: true },\n    { x: 46, y: 2, isWicket: true }\n];\nvar aus = [\n    { x: 1, y: 4 },\n    { x: 2, y: 4 },\n    { x: 3, y: 5 },\n    { x: 4, y: 6 },\n    { x: 5, y: 5, isWicket: true },\n    { x: 6, y: 8 },\n    { x: 7, y: 2 },\n    { x: 8, y: 3 },\n    { x: 9, y: 4, isWicket: true },\n    { x: 10, y: 8 },\n    { x: 11, y: 3 },\n    { x: 12, y: 4 },\n    { x: 13, y: 7 },\n    { x: 14, y: 2 },\n    { x: 15, y: 7 },\n    { x: 16, y: 4 },\n    { x: 17, y: 3 },\n    { x: 18, y: 3 },\n    { x: 19, y: 3 },\n    { x: 20, y: 1 },\n    { x: 21, y: 7 },\n    { x: 22, y: 2 },\n    { x: 23, y: 5 },\n    { x: 24, y: 7 },\n    { x: 25, y: 7 },\n    { x: 26, y: 7 },\n    { x: 27, y: 5 },\n    { x: 28, y: 9 },\n    { x: 29, y: 14 },\n    { x: 30, y: 10 },\n    { x: 31, y: 10 },\n    { x: 32, y: 7, isWicket: true },\n    { x: 33, y: 2, isWicket: true },\n    { x: 34, y: 7 },\n    { x: 35, y: 14 },\n    { x: 36, y: 3 },\n    { x: 37, y: 17 },\n    { x: 38, y: 16 },\n    { x: 39, y: 10 },\n    { x: 40, y: 8 },\n    { x: 41, y: 17 },\n    { x: 42, y: 10 },\n    { x: 43, y: 20 },\n    { x: 44, y: 15 },\n    { x: 45, y: 6 },\n    { x: 46, y: 16 },\n    { x: 47, y: 8, isWicket: true },\n    { x: 48, y: 4, isWicket: true },\n    { x: 49, y: 19, isWicket: true },\n    { x: 50, y: 8, isWicket: true }\n];\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/double-data.ts?");

/***/ }),

/***/ "./Samples/range-navigator/double/main.js":
/*!************************************************!*\
  !*** ./Samples/range-navigator/double/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-navigator/double/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-containerDouble[data-v-dfe41902] {\\n  padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/range-navigator/double/App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=dfe41902&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-containerDouble[data-v-dfe41902] {\\n  padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/double/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/double/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _double_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./double-data */ \"./Samples/range-navigator/double/double-data.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"RangeNavigatorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\nlet chartAnnotation = [];\nchartAnnotation.push({\n  content: '<div id=\"exchangeRate\"></div>',\n  coordinateUnits: \"Pixel\",\n  region: \"Chart\",\n  x: \"85%\",\n  y: \"15%\"\n});\nlet backgroundColor = 'white';\ngetAnnotation(_double_data__WEBPACK_IMPORTED_MODULE_3__[\"aus\"], Object(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"getSeriesColor\"])(theme)[0]);\ngetAnnotation(_double_data__WEBPACK_IMPORTED_MODULE_3__[\"sl\"], Object(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"getSeriesColor\"])(theme)[1]);\nfunction getAnnotation(args, color) {\n   for (let i = 0; i < args.length; i++) {\n       if (args[i]['isWicket']) {\n            chartAnnotation.push({\n                content: '<div id= \"wicket\" style=\"width: 20px; height:20px; border-radius: 5px;' +\n                    'background: ' + backgroundColor + '; border: 2px solid ' + color + '; color:' + color + '\">W</div>',\n                x: args[i]['x'],\n                y: args[i]['y'],\n                coordinateUnits: 'Point'\n            });\n        }\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      //Chart Properties\n      primaryXAxis: {\n        title: \"Overs\", edgeLabelPlacement: \"Shift\", majorGridLines: { width: 0 },\n        zoomFactor: 0.3877551020408163, zoomPosition: 0.6122448979591837\n      },\n      primaryYAxis: {\n        title: \"Runs\", minimum: 0, majorTickLines: { width: 0 }, lineStyle: { width: 0 }\n      },\n      chartArea: { border: { width: 0 } },\n      annotations: chartAnnotation,\n      animation: { enable: false },\n      height: \"350\",\n      ausData: _double_data__WEBPACK_IMPORTED_MODULE_3__[\"aus\"],\n      slData: _double_data__WEBPACK_IMPORTED_MODULE_3__[\"sl\"],\n      //Range Navigator Properties\n      tooltip: { enable: true },\n      value: [31, 50],\n      allowSnapping: true,\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      theme: theme\n    };\n  },\n  provide: {\n    rangeNavigator: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"RangeTooltip\"]],\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SplineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"ChartAnnotation\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"]]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n        this.$refs.range.ej2Instances.refresh();\n        this.$refs.chart.ej2Instances.refresh();\n      });\n    },\n  methods: {\n     tooltipRender: function(args){\n       args.text[0] = Math.round(parseFloat(args.text[0])).toString();\n    },\n    changed: function(args) {\n        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;\n        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;\n        this.$refs.chart.ej2Instances.dataBind();\n    },\n    loaded: function(args) {\n      let series1 = args.chart.visibleSeries[0].interior;\n      let series2 = args.chart.visibleSeries[1].interior;\n      let html = \"<table>\";\n      html += '<tr><td><div style=\"width:10px; height: 10px; border: 2px solid ' +\n        series1 + \"; background: \" + series1 + ';\"></div></td><td style=\"padding-left:10px;\">' +\n        \" Australia\" + \"</td>\";\n      html += '<tr><td><div style=\"width:10px; height: 10px; border: 2px solid ' +\n        series2 + \"; background: \" + series2 + ';\"></div></td><td style=\"padding-left:10px;\">' +\n        \" Sri Lanka\" + \"</td>\";\n      html += \"</table>\";\n      this.$refs.chart.ej2Instances.setAnnotationValue(\n        0, '<div id=\"exchangeRate\" style=\"line-height: 18px;' +\n          \"font-size: 13px;background: #fff; opacity:0.9; color: #464e56; \" +\n          \" box-shadow:0 0 8px 0 rgba(70,78,86,.25); padding: 7px 10px;\" +\n          'border-radius: 3px\">' + html + \"</div>\"\n      );\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/double/App.vue?vue&type=template&id=dfe41902&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/double/App.vue?vue&type=template&id=dfe41902&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('h4',{staticStyle:{\"font-family\":\"Segoe UI\",\"font-weight\":\"500\",\"font-style\":\"normal\",\"font-size\":\"15px\"},attrs:{\"id\":\"days\",\"align\":\"center\"}},[_vm._v(\"Score Comparision AUS vs SL\")]),_vm._v(\" \"),_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-rangenavigator',{ref:\"range\",staticStyle:{\"display\":\"block\"},attrs:{\"align\":\"center\",\"id\":\"containerDouble\",\"value\":_vm.value,\"tooltipRender\":_vm.tooltipRender,\"labelPosition\":\"Outside\",\"width\":_vm.width,\"changed\":_vm.changed,\"theme\":_vm.theme,\"tooltip\":_vm.tooltip}},[_c('e-rangenavigator-series-collection',[_c('e-rangenavigator-series',{attrs:{\"dataSource\":_vm.ausData,\"xName\":\"x\",\"type\":\"Line\",\"yName\":\"y\"}}),_vm._v(\" \"),_c('e-rangenavigator-series',{attrs:{\"dataSource\":_vm.slData,\"xName\":\"x\",\"type\":\"Line\",\"yName\":\"y\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"id\":\"chartDouble\",\"align\":\"center\",\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"height\":\"350\",\"chartArea\":_vm.chartArea,\"annotations\":_vm.annotations,\"width\":_vm.width,\"theme\":_vm.theme,\"loaded\":_vm.loaded}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.ausData,\"type\":\"Spline\",\"name\":\"AUS\",\"width\":\"2\",\"xName\":\"x\",\"yName\":\"y\",\"animation\":_vm.animation}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.slData,\"type\":\"Spline\",\"name\":\"SL\",\"width\":\"2\",\"xName\":\"x\",\"yName\":\"y\",\"animation\":_vm.animation}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\nThis sample depicts the cricket match data between two countries with the help of numeric axis in range navigator.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        Numeric axis is used to plot numeric data in range navigator. To render numeric axis, set \"),_c('code',[_vm._v(\"valueType\")]),_vm._v(\" to \"),_c('code',[_vm._v(\"Double\")]),_vm._v(\". \\nTooltip is enabled in this example, to see the tooltip in action, while the selected range is changed. \\n\\n    \")]),_vm._v(\" \"),_c('br')])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/double/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });