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
/******/ 		"chart/chart-performance/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/chart-performance/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/chart-performance/App.vue":
/*!*************************************************!*\
  !*** ./Samples/chart/chart-performance/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6ce7eefe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6ce7eefe&scoped=true& */ \"./Samples/chart/chart-performance/App.vue?vue&type=template&id=6ce7eefe&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/chart-performance/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6ce7eefe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css& */ \"./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6ce7eefe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6ce7eefe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6ce7eefe\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/chart-performance/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?");

/***/ }),

/***/ "./Samples/chart/chart-performance/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/chart/chart-performance/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?");

/***/ }),

/***/ "./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ce7eefe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ce7eefe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ce7eefe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ce7eefe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ce7eefe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?");

/***/ }),

/***/ "./Samples/chart/chart-performance/App.vue?vue&type=template&id=6ce7eefe&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/chart/chart-performance/App.vue?vue&type=template&id=6ce7eefe&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ce7eefe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6ce7eefe&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=template&id=6ce7eefe&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ce7eefe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ce7eefe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?");

/***/ }),

/***/ "./Samples/chart/chart-performance/main.js":
/*!*************************************************!*\
  !*** ./Samples/chart/chart-performance/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/chart-performance/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#material-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-6ce7eefe] {\\n        stop-opacity: 0.9;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-6ce7eefe] {\\n        stop-opacity: 0.3;\\n}\\n#control-container[data-v-6ce7eefe] {\\n\\t\\tpadding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/harts-vue-samples_release_21.1.1/Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,kBAAkB;CACzB;AACD;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#material-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-6ce7eefe] {\\n        stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-6ce7eefe] {\\n        stop-opacity: 0.9;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-6ce7eefe] {\\n        stop-opacity: 0.3;\\n}\\n#control-container[data-v-6ce7eefe] {\\n\\t\\tpadding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/chart-performance/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"ChartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\nlet themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark'];\nlet borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113'];\nfunction GetZoomingData() {\n        let series1 = [];\n        let point1;\n        let pts;\n        let value = 0;\n        for (pts = 0; pts < 100000; pts++) {\n            if (pts % 3 == 0) {\n                value -= (Math.random() * (100) / 3) * 4;\n            }\n            else if (pts % 2 == 0) {\n                value += (Math.random() * (100) / 3) * 4;\n            }\n            if (value < 0) {\n                value = value * -1;\n            }\n            if (value >= 12000) {\n                value = Math.floor(Math.random() * 11000) + 1000;\n            }\n            point1 = { x: new Date(2005, 1, 1).setHours(pts), y: value };\n            series1.push(point1);\n        }\n        return { 'series': series1 };\n    }\n    let seriesData = GetZoomingData().series;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        theme: theme,\n        dt1: 0,\n        series: [],\n        primaryXAxis: {\n           \n            intervalType: 'Years',\n            valueType: 'DateTime',\n            edgeLabelPlacement: 'Shift',\n            title: 'Years',\n            lineStyle: { width: 0 },\n            majorGridLines: { width: 0 },\n            \n        },\n        primaryYAxis: {\n            interval: 2000,\n            minimum: 0,\n            maximum: 12000,\n            title: 'Values',\n            lineStyle: { width: 0 },\n            majorTickLines: { width: 0 }\n        },\n        chartArea:  {\n        border: {\n            width: 0\n        }\n    },\n        width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '90%',\n        border: { width: 0.5, color: borderColor[themes.indexOf(theme.toLowerCase())] },\n        title: \"Chart with 100k points\",\n        series: seriesData, \n        fill: \"url(#\" + selectedTheme + \"-gradient-chart)\",\n        marker: {\n            visible: false\n        },\n        legendSettings: { visible: false }\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"AreaSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"DateTime\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"Legend\"]]\n  },\n  \n \n      \n    \n\n \n   \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=template&id=6ce7eefe&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/chart-performance/App.vue?vue&type=template&id=6ce7eefe&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            ref: \"chart\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              width: _vm.width,\n              chartArea: _vm.chartArea,\n              align: \"center\",\n              loaded: _vm.onChartLoad,\n              primaryYAxis: _vm.primaryYAxis,\n              primaryXAxis: _vm.primaryXAxis,\n              enableCanvas: _vm.enableCanvas,\n              title: _vm.title,\n              theme: _vm.theme,\n              legendSettings: _vm.legendSettings,\n            },\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    marker: _vm.marker,\n                    dataSource: _vm.series,\n                    type: \"Area\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    animation: _vm.animation,\n                    fill: _vm.fill,\n                    border: _vm.border,\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\"svg\", { staticStyle: { height: \"0\" } }, [\n      _c(\n        \"defs\",\n        [\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"material-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"fabric-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"bootstrap-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"bootstrap4-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"highcontrast-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"tailwind-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"bootstrap5-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"material-dark-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"fabric-dark-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"bootstrap-dark-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"tailwind-dark-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"bootstrap5-dark-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"fluent-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-gradient\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"fluent-dark-gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\",\n              },\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } }),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n    ]),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", [\n      _c(\"div\", { attrs: { id: \"action-description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"      \\n        This sample demonstrates the performance of Vue Charts rendering 100K data points.\\n    \"\n          ),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { attrs: { id: \"description\" } }, [\n        _c(\"p\", [\n          _vm._v(\n            \"\\n        Charts includes several data-rendering optimizations to achieve the best possible performance when plotting large volumes of data and handling high-frequency, real-time data. In this demo, an area series is rendered with 100K points.\\n    \"\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/chart-performance/App.vue?vue&type=style&index=0&id=6ce7eefe&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"224818f4\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/chart/chart-performance/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });