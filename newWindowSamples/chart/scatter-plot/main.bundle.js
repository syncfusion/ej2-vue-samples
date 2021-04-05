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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scatterData\", function() { return scatterData; });\nvar womenData = [\n    { 'x': 115, 'y': 57 }, { 'x': 138, 'y': 57 }, { 'x': 166, 'y': 57 }, { 'x': 122, 'y': 57 },\n    { 'x': 126, 'y': 57 }, { 'x': 130, 'y': 57 }, { 'x': 125, 'y': 57 }, { 'x': 144, 'y': 57 },\n    { 'x': 150, 'y': 57 }, { 'x': 120, 'y': 57 }, { 'x': 125, 'y': 57 }, { 'x': 130, 'y': 57 },\n    { 'x': 103, 'y': 58 }, { 'x': 116, 'y': 58 }, { 'x': 130, 'y': 58 }, { 'x': 126, 'y': 58 },\n    { 'x': 136, 'y': 58 }, { 'x': 148, 'y': 58 }, { 'x': 119, 'y': 58 }, { 'x': 141, 'y': 58 },\n    { 'x': 159, 'y': 58 }, { 'x': 120, 'y': 58 }, { 'x': 135, 'y': 58 }, { 'x': 163, 'y': 58 },\n    { 'x': 119, 'y': 59 }, { 'x': 131, 'y': 59 }, { 'x': 148, 'y': 59 }, { 'x': 123, 'y': 59 },\n    { 'x': 137, 'y': 59 }, { 'x': 149, 'y': 59 }, { 'x': 121, 'y': 59 }, { 'x': 142, 'y': 59 },\n    { 'x': 160, 'y': 59 }, { 'x': 118, 'y': 59 }, { 'x': 130, 'y': 59 }, { 'x': 146, 'y': 59 },\n    { 'x': 119, 'y': 60 }, { 'x': 133, 'y': 60 }, { 'x': 150, 'y': 60 }, { 'x': 133, 'y': 60 },\n    { 'x': 149, 'y': 60 }, { 'x': 165, 'y': 60 }, { 'x': 130, 'y': 60 }, { 'x': 139, 'y': 60 },\n    { 'x': 154, 'y': 60 }, { 'x': 118, 'y': 60 }, { 'x': 152, 'y': 60 }, { 'x': 154, 'y': 60 },\n    { 'x': 130, 'y': 61 }, { 'x': 145, 'y': 61 }, { 'x': 166, 'y': 61 }, { 'x': 131, 'y': 61 },\n    { 'x': 143, 'y': 61 }, { 'x': 162, 'y': 61 }, { 'x': 131, 'y': 61 }, { 'x': 145, 'y': 61 },\n    { 'x': 162, 'y': 61 }, { 'x': 115, 'y': 61 }, { 'x': 149, 'y': 61 }, { 'x': 183, 'y': 61 },\n    { 'x': 121, 'y': 62 }, { 'x': 139, 'y': 62 }, { 'x': 159, 'y': 62 }, { 'x': 135, 'y': 62 },\n    { 'x': 152, 'y': 62 }, { 'x': 178, 'y': 62 }, { 'x': 130, 'y': 62 }, { 'x': 153, 'y': 62 },\n    { 'x': 172, 'y': 62 }, { 'x': 114, 'y': 62 }, { 'x': 135, 'y': 62 }, { 'x': 154, 'y': 62 },\n    { 'x': 126, 'y': 63 }, { 'x': 141, 'y': 63 }, { 'x': 160, 'y': 63 }, { 'x': 135, 'y': 63 },\n    { 'x': 149, 'y': 63 }, { 'x': 180, 'y': 63 }, { 'x': 132, 'y': 63 }, { 'x': 144, 'y': 63 },\n    { 'x': 163, 'y': 63 }, { 'x': 122, 'y': 63 }, { 'x': 146, 'y': 63 }, { 'x': 156, 'y': 63 },\n    { 'x': 133, 'y': 64 }, { 'x': 150, 'y': 64 }, { 'x': 176, 'y': 64 }, { 'x': 133, 'y': 64 },\n    { 'x': 149, 'y': 64 }, { 'x': 176, 'y': 64 }, { 'x': 136, 'y': 64 }, { 'x': 157, 'y': 64 },\n    { 'x': 174, 'y': 64 }, { 'x': 131, 'y': 64 }, { 'x': 155, 'y': 64 }, { 'x': 191, 'y': 64 },\n    { 'x': 136, 'y': 65 }, { 'x': 149, 'y': 65 }, { 'x': 177, 'y': 65 }, { 'x': 143, 'y': 65 },\n    { 'x': 149, 'y': 65 }, { 'x': 184, 'y': 65 }, { 'x': 128, 'y': 65 }, { 'x': 146, 'y': 65 },\n    { 'x': 157, 'y': 65 }, { 'x': 133, 'y': 65 }, { 'x': 153, 'y': 65 }, { 'x': 173, 'y': 65 },\n    { 'x': 141, 'y': 66 }, { 'x': 156, 'y': 66 }, { 'x': 175, 'y': 66 }, { 'x': 125, 'y': 66 },\n    { 'x': 138, 'y': 66 }, { 'x': 165, 'y': 66 }, { 'x': 122, 'y': 66 }, { 'x': 164, 'y': 66 },\n    { 'x': 182, 'y': 66 }, { 'x': 137, 'y': 66 }, { 'x': 157, 'y': 66 }, { 'x': 176, 'y': 66 },\n    { 'x': 149, 'y': 67 }, { 'x': 159, 'y': 67 }, { 'x': 179, 'y': 67 }, { 'x': 156, 'y': 67 },\n    { 'x': 179, 'y': 67 }, { 'x': 186, 'y': 67 }, { 'x': 147, 'y': 67 }, { 'x': 166, 'y': 67 },\n    { 'x': 185, 'y': 67 }, { 'x': 140, 'y': 67 }, { 'x': 160, 'y': 67 }, { 'x': 180, 'y': 67 },\n    { 'x': 145, 'y': 68 }, { 'x': 155, 'y': 68 }, { 'x': 170, 'y': 68 }, { 'x': 129, 'y': 68 },\n    { 'x': 164, 'y': 68 }, { 'x': 189, 'y': 68 }, { 'x': 150, 'y': 68 }, { 'x': 157, 'y': 68 },\n    { 'x': 183, 'y': 68 }, { 'x': 144, 'y': 68 }, { 'x': 170, 'y': 68 }, { 'x': 180, 'y': 68 }\n];\nvar mendData = [\n    { 'x': 131, 'y': 62 }, { 'x': 140, 'y': 62 }, { 'x': 149, 'y': 62 }, { 'x': 115, 'y': 62 },\n    { 'x': 134, 'y': 62 }, { 'x': 183, 'y': 62 }, { 'x': 155, 'y': 62 }, { 'x': 164, 'y': 62 },\n    { 'x': 169, 'y': 62 }, { 'x': 122, 'y': 62 }, { 'x': 161, 'y': 62 }, { 'x': 166, 'y': 62 },\n    { 'x': 137, 'y': 63 }, { 'x': 140, 'y': 63 }, { 'x': 140, 'y': 63 }, { 'x': 126, 'y': 63 },\n    { 'x': 150, 'y': 63 }, { 'x': 153, 'y': 63 }, { 'x': 154, 'y': 63 }, { 'x': 139, 'y': 63 },\n    { 'x': 164, 'y': 63 }, { 'x': 162, 'y': 63 }, { 'x': 167, 'y': 63 }, { 'x': 146, 'y': 63 },\n    { 'x': 150, 'y': 64 }, { 'x': 141, 'y': 64 }, { 'x': 142, 'y': 64 }, { 'x': 129, 'y': 64 },\n    { 'x': 159, 'y': 64 }, { 'x': 158, 'y': 64 }, { 'x': 162, 'y': 64 }, { 'x': 136, 'y': 64 },\n    { 'x': 176, 'y': 64 }, { 'x': 170, 'y': 64 }, { 'x': 167, 'y': 64 }, { 'x': 144, 'y': 64 },\n    { 'x': 143, 'y': 65 }, { 'x': 137, 'y': 65 }, { 'x': 137, 'y': 65 }, { 'x': 140, 'y': 65 },\n    { 'x': 161, 'y': 65 }, { 'x': 150, 'y': 65 }, { 'x': 155, 'y': 65 }, { 'x': 160, 'y': 65 },\n    { 'x': 182, 'y': 65 }, { 'x': 168, 'y': 65 }, { 'x': 181, 'y': 65 }, { 'x': 165, 'y': 65 },\n    { 'x': 148, 'y': 66 }, { 'x': 145, 'y': 66 }, { 'x': 137, 'y': 66 }, { 'x': 138, 'y': 66 },\n    { 'x': 162, 'y': 66 }, { 'x': 166, 'y': 66 }, { 'x': 159, 'y': 66 }, { 'x': 151, 'y': 66 },\n    { 'x': 180, 'y': 66 }, { 'x': 181, 'y': 66 }, { 'x': 174, 'y': 66 }, { 'x': 159, 'y': 66 },\n    { 'x': 151, 'y': 67 }, { 'x': 148, 'y': 67 }, { 'x': 141, 'y': 67 }, { 'x': 145, 'y': 67 },\n    { 'x': 165, 'y': 67 }, { 'x': 168, 'y': 67 }, { 'x': 159, 'y': 67 }, { 'x': 183, 'y': 67 },\n    { 'x': 188, 'y': 67 }, { 'x': 187, 'y': 67 }, { 'x': 172, 'y': 67 }, { 'x': 193, 'y': 67 },\n    { 'x': 153, 'y': 68 }, { 'x': 153, 'y': 68 }, { 'x': 147, 'y': 68 }, { 'x': 163, 'y': 68 },\n    { 'x': 174, 'y': 68 }, { 'x': 173, 'y': 68 }, { 'x': 160, 'y': 68 }, { 'x': 191, 'y': 68 },\n    { 'x': 189, 'y': 68 }, { 'x': 182, 'y': 68 }, { 'x': 181, 'y': 68 }, { 'x': 196, 'y': 68 },\n    { 'x': 152, 'y': 69 }, { 'x': 173, 'y': 69 }, { 'x': 190, 'y': 69 }, { 'x': 161, 'y': 69 },\n    { 'x': 173, 'y': 69 }, { 'x': 185, 'y': 69 }, { 'x': 141, 'y': 69 }, { 'x': 149, 'y': 69 },\n    { 'x': 186, 'y': 69 }, { 'x': 188, 'y': 69 }, { 'x': 148, 'y': 69 }, { 'x': 174, 'y': 69 },\n    { 'x': 164, 'y': 70 }, { 'x': 182, 'y': 70 }, { 'x': 200, 'y': 70 }, { 'x': 151, 'y': 70 },\n    { 'x': 162, 'y': 70 }, { 'x': 200, 'y': 70 }, { 'x': 166, 'y': 70 }, { 'x': 177, 'y': 70 },\n    { 'x': 188, 'y': 70 }, { 'x': 156, 'y': 70 }, { 'x': 175, 'y': 70 }, { 'x': 191, 'y': 70 },\n    { 'x': 174, 'y': 71 }, { 'x': 187, 'y': 71 }, { 'x': 208, 'y': 71 }, { 'x': 166, 'y': 71 },\n    { 'x': 150, 'y': 71 }, { 'x': 194, 'y': 71 }, { 'x': 157, 'y': 71 }, { 'x': 183, 'y': 71 },\n    { 'x': 204, 'y': 71 }, { 'x': 162, 'y': 71 }, { 'x': 179, 'y': 71 }, { 'x': 196, 'y': 71 },\n    { 'x': 170, 'y': 72 }, { 'x': 184, 'y': 72 }, { 'x': 197, 'y': 72 }, { 'x': 162, 'y': 72 },\n    { 'x': 177, 'y': 72 }, { 'x': 203, 'y': 72 }, { 'x': 159, 'y': 72 }, { 'x': 178, 'y': 72 },\n    { 'x': 198, 'y': 72 }, { 'x': 167, 'y': 72 }, { 'x': 184, 'y': 72 }, { 'x': 201, 'y': 72 },\n    { 'x': 167, 'y': 73 }, { 'x': 178, 'y': 73 }, { 'x': 215, 'y': 73 }, { 'x': 207, 'y': 73 },\n    { 'x': 172, 'y': 73 }, { 'x': 204, 'y': 73 }, { 'x': 162, 'y': 73 }, { 'x': 182, 'y': 73 },\n    { 'x': 201, 'y': 73 }, { 'x': 172, 'y': 73 }, { 'x': 189, 'y': 73 }, { 'x': 206, 'y': 73 },\n    { 'x': 150, 'y': 74 }, { 'x': 187, 'y': 74 }, { 'x': 153, 'y': 74 }, { 'x': 171, 'y': 74 },\n    { 'x': 214, 'y': 74 }, { 'x': 211, 'y': 74 }, { 'x': 166, 'y': 74 }, { 'x': 185, 'y': 74 },\n    { 'x': 204, 'y': 74 }, { 'x': 177, 'y': 74 }, { 'x': 194, 'y': 74 }, { 'x': 212, 'y': 74 }\n];\nvar scatterData = {\n    'getMaleData': mendData,\n    'getFemaleData': womenData\n};\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/scatter-data.ts?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/scatter-plot/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _scatter_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scatter-data */ \"./Samples/chart/scatter-plot/scatter-data.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n     seriesData: _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getMaleData,\n    seriesData1:  _scatter_data__WEBPACK_IMPORTED_MODULE_2__[\"scatterData\"].getFemaleData,\n           //Initializing Primary X Axis\n      primaryXAxis: {\n            majorGridLines: { width: 0 },\n            minimum: 100,\n            maximum: 220,\n            edgeLabelPlacement: 'Shift',\n            title: 'Height in Inches'\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n\n\n      //Initializing Primary Y Axis\n         primaryYAxis:\n            {\n                majorTickLines: {\n                    width: 0\n                },\n                minimum: 50,\n                maximum: 80,\n                lineStyle: {\n                    width: 0\n                },\n                title: 'Weight in Pounds',\n                rangePadding: 'None'\n            },\n\n        marker: {\n                    visible: false,\n                    width: 12,\n                    height: 12,\n                    shape: 'Circle'\n                },\n\n         marker1: {\n                    visible: false,\n                    width: 12,\n                    height: 12,\n                    shape: 'Diamond'\n                },\n\n\n       width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '80%',\n     \n      tooltip: { \n            enable: true,\n             format: 'Weight: <b>${point.x} lbs</b> <br/> Height: <b>${point.y}\"</b>'\n         },\n      \n      title: \"Height vs Weight\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ScatterSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Tooltip\"]]\n  },\n  methods: {\n   \n },\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/scatter-plot/App.vue?vue&type=template&id=51aaf987&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              chartArea: _vm.chartArea,\n              width: _vm.width,\n              tooltip: _vm.tooltip\n            }\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    type: \"Scatter\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Male\",\n                    width: \"2\",\n                    marker: _vm.marker,\n                    opacity: \"0.6\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData1,\n                    type: \"Scatter\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Female\",\n                    width: \"2\",\n                    marker: _vm.marker1,\n                    opacity: \"0.6\"\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample compares the height and weight of the genders by using default scatter series in the chart. Tooltip shows the\\n        information about the data.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure the scatter type charts. Scatter charts are used to plot financial\\n        or scientific data. You can use\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\n          \" property in the marker to change the scatter shape.\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"dataLabel\")]),\n        _vm._v(\" is used to represent individual data value.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"   \\n        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Chart component features are segregated into individual feature-wise modules. To use scatter series, we need to inject\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"ScatterSeries\")]),\n        _vm._v(\" module using\\n        \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [StackingBarSeries] }\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the scatter series can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/scatter-plot/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });