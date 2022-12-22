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
/******/ 		"sparkline/live-update/main": 0
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
/******/ 	deferredModules.push(["./Samples/sparkline/live-update/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/sparkline/live-update/App.vue":
/*!***********************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1d7bd18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1d7bd18c&scoped=true& */ \"./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css& */ \"./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1d7bd18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1d7bd18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1d7bd18c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sparkline/live-update/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1d7bd18c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1d7bd18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1d7bd18c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1d7bd18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1d7bd18c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/live-update/liveupdate.ts":
/*!*****************************************************!*\
  !*** ./Samples/sparkline/live-update/liveupdate.ts ***!
  \*****************************************************/
/*! exports provided: data, data2, data3, data4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data2\", function() { return data2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data3\", function() { return data3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data4\", function() { return data4; });\n// tslint:disable\nvar data = [\n    { x: 0, yval: 50 },\n    { x: 1, yval: 30 },\n    { x: 2, yval: 20 },\n    { x: 3, yval: 30 },\n    { x: 4, yval: 50 },\n    { x: 5, yval: 40 },\n    { x: 6, yval: 20 },\n    { x: 7, yval: 10 },\n    { x: 8, yval: 30 },\n    { x: 9, yval: 10 },\n    { x: 10, yval: 40 },\n    { x: 11, yval: 50 },\n    { x: 12, yval: 10 },\n    { x: 13, yval: 30 },\n    { x: 14, yval: 50 },\n    { x: 15, yval: 20 },\n    { x: 16, yval: 10 },\n    { x: 17, yval: 40 },\n    { x: 18, yval: 30 },\n    { x: 19, yval: 40 }\n];\nvar data2 = [\n    { x: 0, yval: 6.05 },\n    { x: 1, yval: 6.03 },\n    { x: 2, yval: 6.02 },\n    { x: 3, yval: 6.07 },\n    { x: 4, yval: 6.05 },\n    { x: 5, yval: 6.09 },\n    { x: 6, yval: 6.08 },\n    { x: 7, yval: 6.01 },\n    { x: 8, yval: 6.03 },\n    { x: 9, yval: 6.01 },\n    { x: 10, yval: 6.07 },\n    { x: 11, yval: 6.05 },\n    { x: 12, yval: 6.01 },\n    { x: 13, yval: 6.06 },\n    { x: 14, yval: 6.05 },\n    { x: 15, yval: 6.03 },\n    { x: 16, yval: 6.01 },\n    { x: 17, yval: 6.09 },\n    { x: 18, yval: 6.06 },\n    { x: 19, yval: 6.05 }\n];\nvar data3 = [\n    { x: 0, yval: 50 },\n    { x: 1, yval: 30 },\n    { x: 2, yval: 20 },\n    { x: 3, yval: 70 },\n    { x: 4, yval: 50 },\n    { x: 5, yval: 20 },\n    { x: 6, yval: 80 },\n    { x: 7, yval: 10 },\n    { x: 8, yval: 30 },\n    { x: 9, yval: 10 },\n    { x: 10, yval: 70 },\n    { x: 11, yval: 50 },\n    { x: 12, yval: 10 },\n    { x: 13, yval: 60 },\n    { x: 14, yval: 50 },\n    { x: 15, yval: 30 },\n    { x: 16, yval: 10 },\n    { x: 17, yval: 20 },\n    { x: 18, yval: 60 },\n    { x: 19, yval: 50 }\n];\nvar data4 = [\n    { x: 0, yval: 50 },\n    { x: 1, yval: 30 },\n    { x: 2, yval: 20 },\n    { x: 3, yval: 70 },\n    { x: 4, yval: 50 },\n    { x: 5, yval: 20 },\n    { x: 6, yval: 80 },\n    { x: 7, yval: 10 },\n    { x: 8, yval: 30 },\n    { x: 9, yval: 10 },\n    { x: 10, yval: 70 },\n    { x: 11, yval: 50 },\n    { x: 12, yval: 10 },\n    { x: 13, yval: 60 },\n    { x: 14, yval: 50 },\n    { x: 15, yval: 30 },\n    { x: 16, yval: 10 },\n    { x: 17, yval: 20 },\n    { x: 18, yval: 60 },\n    { x: 19, yval: 50 }\n];\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/liveupdate.ts?");

/***/ }),

/***/ "./Samples/sparkline/live-update/main.js":
/*!***********************************************!*\
  !*** ./Samples/sparkline/live-update/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sparkline/live-update/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.spark[data-v-1d7bd18c] {\\n    float: left;\\n    width: 95%;\\n    margin-left: 3%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/rts-vue-samples_release_20.4.0.1/Samples/sparkline/live-update/App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=1d7bd18c&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.spark[data-v-1d7bd18c] {\\n    float: left;\\n    width: 95%;\\n    margin-left: 3%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/live-update/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _liveupdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liveupdate */ \"./Samples/sparkline/live-update/liveupdate.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SparklinePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        height: '130px',\n        width: '90%',\n        axisSettings: {\n            minY: 0, maxY: 150\n        },\n        containerArea: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border: {\n            color: '#0358a0',\n            width: 1\n        },\n        fill: '#e8f2fc',\n        type: 'Area',\n        valueType: 'Numeric',\n        dataSource: _liveupdate__WEBPACK_IMPORTED_MODULE_2__[\"data\"],\n        axisSettings2: {\n            minY: 4, maxY: 8\n        },\n        containerArea2: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border2: {\n            color: '#b247c6',\n            width: 1\n        },\n        fill2:'#f5e8fc',\n        dataSource2: _liveupdate__WEBPACK_IMPORTED_MODULE_2__[\"data2\"],\n        axisSettings3: {\n            minY: 0, maxY: 130\n        },\n        containerArea3: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border3: {\n            color: '#27ad66',\n            width: 1\n        },\n        fill3: '#e0f9d1',\n        dataSource3: _liveupdate__WEBPACK_IMPORTED_MODULE_2__[\"data3\"],\n        axisSettings4: {\n            minY: 0, maxY: 100\n        },\n        containerArea4: {\n            background: 'white',\n            border: {\n                color: '#dcdfe0',\n                width: 2\n            }\n        },\n        border4: {\n            color: '#AA907A',\n            width: 1\n        },\n        fill4: '#F2D8C7',\n        dataSource4: _liveupdate__WEBPACK_IMPORTED_MODULE_2__[\"data4\"],\n         lineWidth: 1\n}\n},\nmounted(){\n    this.update();\n    this.update1();\n    this.update2();\n    this.update3();\n},\nmethods:{\n    /* custom code start */\n     load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material';\n        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));\n    },\n    /* custom code end */\n    update: function() {\n        let spark = document.getElementById('spark-container1');\n        let gauge = this.$refs.spark1.ej2Instances;\n        let temp1 = gauge.dataSource.length - 1;\n        this.update = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = ((Math.random() * 100) + 5) % 50;\n                gauge.dataSource.push({ x: ++temp1, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let cpu = document.getElementById('cpu');\n                if (cpu) {\n                cpu.innerHTML = ((value / 150) * 100).toFixed(0) + '% ' + ((value * 3) / 100).toFixed(2) + 'GHz';\n                }\n            }\n        }, 500);\n    },\n    update1: function() {\n        let spark1 = document.getElementById('spark-container2');\n        let gauge = this.$refs.spark2.ej2Instances;\n        let temp2 = gauge.dataSource.length - 1;\n        this.update1 = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = Math.random();\n                if (value > 0.6) {\n                    value = 6 + (value / 10);\n                } else {\n                    value = 6 - (value / 10);\n                }\n                gauge.dataSource.push({ x: ++temp2, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let memory = document.getElementById('memory');\n                let gb = parseFloat(value.toString().replace('0', '')).toFixed(1);\n                if (memory) {\n                memory.innerHTML = gb + '/15.8 GB (' + ((value / 15.8) * 100).toFixed(0) + '%)';\n                }\n            }\n        }, 500);\n    },\n    update2: function() {\n        let spark2 = document.getElementById('spark-container3');\n        let gauge = this.$refs.spark3.ej2Instances;\n        let temp3 = gauge.dataSource.length - 1;\n        this.update2 = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = ((Math.random() * 100) + 5) % 80;\n                gauge.dataSource.push({ x: ++temp3, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let disk = document.getElementById('disk');\n                if (disk) {\n                disk.innerHTML = value.toFixed(0) + '%';\n                }\n            }\n        }, 500);\n    },\n    update3: function() {\n        let spark3 = document.getElementById('spark-container4');\n        let gauge = this.$refs.spark4.ej2Instances;\n        let temp4 = gauge.dataSource.length - 1;\n        this.update3 = setInterval(function() {\n            if (gauge.element.className.indexOf('e-sparkline') > -1) {\n                let value = ((Math.random() * 100) + 5) % 80;\n                gauge.dataSource.push({ x: ++temp4, yval: value });\n                gauge.dataSource.shift();\n                gauge.refresh();\n                let net = document.getElementById('net');\n                if (net) {\n                net.innerHTML = 'R: ' + value.toFixed(0) + 'Kbps';\n                }\n            }\n        }, 500);\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/live-update/App.vue?vue&type=template&id=1d7bd18c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\", attrs: { align: \"center\" } }, [\n      _c(\"div\", { staticClass: \"row\", attrs: { id: \"spark-container\" } }, [\n        _c(\n          \"div\",\n          {\n            staticClass: \"cols-sample-area\",\n            staticStyle: { \"margin-top\": \"8%\" },\n            attrs: { align: \"center\" },\n          },\n          [\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-lg-3 col-m-3 col-sm-6\",\n                attrs: { align: \"center\" },\n              },\n              [\n                _c(\"ejs-sparkline\", {\n                  ref: \"spark1\",\n                  staticClass: \"spark\",\n                  attrs: {\n                    load: _vm.load,\n                    id: \"spark-container1\",\n                    height: _vm.height,\n                    width: _vm.width,\n                    type: _vm.type,\n                    valueType: _vm.valueType,\n                    fill: _vm.fill,\n                    dataSource: _vm.dataSource,\n                    axisSettings: _vm.axisSettings,\n                    containerArea: _vm.containerArea,\n                    border: _vm.border,\n                    xName: \"x\",\n                    yName: \"yval\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _vm._m(0),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      color: \"#0877d6\",\n                      position: \"absolute\",\n                      \"margin-top\": \"25px\",\n                      \"margin-left\": \"12%\",\n                    },\n                    attrs: { id: \"cpu\" },\n                  },\n                  [_vm._v(\"26% 1.2GHz\")]\n                ),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-lg-3 col-m-3 col-sm-6\",\n                attrs: { align: \"center\" },\n              },\n              [\n                _c(\"ejs-sparkline\", {\n                  ref: \"spark2\",\n                  staticClass: \"spark\",\n                  attrs: {\n                    load: _vm.load,\n                    id: \"spark-container2\",\n                    height: _vm.height,\n                    width: _vm.width,\n                    lineWidth: _vm.lineWidth,\n                    type: _vm.type,\n                    valueType: _vm.valueType,\n                    fill: _vm.fill2,\n                    dataSource: _vm.dataSource2,\n                    axisSettings: _vm.axisSettings2,\n                    containerArea: _vm.containerArea2,\n                    border: _vm.border2,\n                    xName: \"x\",\n                    yName: \"yval\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _vm._m(1),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      color: \"#b247c6\",\n                      position: \"absolute\",\n                      \"margin-top\": \"25px\",\n                      \"margin-left\": \"12%\",\n                    },\n                    attrs: { id: \"disk\" },\n                  },\n                  [_vm._v(\"50%\")]\n                ),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-lg-3 col-m-3 col-sm-6\",\n                attrs: { align: \"center\" },\n              },\n              [\n                _c(\"ejs-sparkline\", {\n                  ref: \"spark3\",\n                  staticClass: \"spark\",\n                  attrs: {\n                    load: _vm.load,\n                    id: \"spark-container3\",\n                    height: _vm.height,\n                    width: _vm.width,\n                    lineWidth: _vm.lineWidth,\n                    type: _vm.type,\n                    valueType: _vm.valueType,\n                    fill: _vm.fill3,\n                    dataSource: _vm.dataSource3,\n                    axisSettings: _vm.axisSettings3,\n                    containerArea: _vm.containerArea3,\n                    border: _vm.border3,\n                    xName: \"x\",\n                    yName: \"yval\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _vm._m(2),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      color: \"#5bcc8f\",\n                      position: \"absolute\",\n                      \"margin-top\": \"25px\",\n                      \"margin-left\": \"12%\",\n                    },\n                    attrs: { id: \"memory\" },\n                  },\n                  [_vm._v(\"6.5/15.8 GB (41%)\")]\n                ),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"col-lg-3 col-m-3 col-sm-6\",\n                attrs: { align: \"center\" },\n              },\n              [\n                _c(\"ejs-sparkline\", {\n                  ref: \"spark4\",\n                  staticClass: \"spark\",\n                  attrs: {\n                    load: _vm.load,\n                    id: \"spark-container4\",\n                    height: _vm.height,\n                    width: _vm.width,\n                    lineWidth: _vm.lineWidth,\n                    type: _vm.type,\n                    valueType: _vm.valueType,\n                    fill: _vm.fill4,\n                    dataSource: _vm.dataSource4,\n                    axisSettings: _vm.axisSettings4,\n                    containerArea: _vm.containerArea4,\n                    border: _vm.border4,\n                    xName: \"x\",\n                    yName: \"yval\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _vm._m(3),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  {\n                    staticStyle: {\n                      color: \"#d1a990\",\n                      position: \"absolute\",\n                      \"margin-top\": \"25px\",\n                      \"margin-left\": \"12%\",\n                    },\n                    attrs: { id: \"net\" },\n                  },\n                  [_vm._v(\"R: 50Kbps\")]\n                ),\n              ],\n              1\n            ),\n          ]\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          \"font-size\": \"12px\",\n          position: \"absolute\",\n          \"margin-top\": \"10px\",\n          \"margin-left\": \"12%\",\n        },\n      },\n      [_c(\"b\", [_vm._v(\"CPU\")])]\n    )\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          \"font-size\": \"12px\",\n          position: \"absolute\",\n          \"margin-top\": \"10px\",\n          \"margin-left\": \"12%\",\n        },\n      },\n      [_c(\"b\", [_vm._v(\"Disk\")])]\n    )\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          \"font-size\": \"12px\",\n          position: \"absolute\",\n          \"margin-top\": \"10px\",\n          \"margin-left\": \"12%\",\n        },\n      },\n      [_c(\"b\", [_vm._v(\"Memory\")])]\n    )\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticStyle: {\n          \"font-size\": \"12px\",\n          position: \"absolute\",\n          \"margin-top\": \"10px\",\n          \"margin-left\": \"12%\",\n        },\n      },\n      [_c(\"b\", [_vm._v(\"Ethernet\")])]\n    )\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample depicts the various customization options available in sparklines.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see various customization options available in sparklines. Tooltip is enabled in this example. To\\n        see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices.\\n    \"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/live-update/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });