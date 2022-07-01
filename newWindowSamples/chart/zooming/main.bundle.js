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
/******/ 		"chart/zooming/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/zooming/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/zooming/App.vue":
/*!***************************************!*\
  !*** ./Samples/chart/zooming/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=8fb0d1a8&scoped=true& */ \"./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/zooming/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& */ \"./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"8fb0d1a8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/zooming/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/chart/zooming/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=8fb0d1a8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/main.js":
/*!***************************************!*\
  !*** ./Samples/chart/zooming/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/zooming/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#material-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-8fb0d1a8] {\\n        stop-opacity: 0.75;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-8fb0d1a8] {\\n        stop-opacity: 0;\\n}\\n#control-container[data-v-8fb0d1a8] {\\n\\t\\tpadding: 0px !important;\\n}\\n\\n  \", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,gBAAgB;CACvB;AACD;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#material-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-8fb0d1a8] {\\n        stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-8fb0d1a8] {\\n        stop-opacity: 0.75;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-8fb0d1a8] {\\n        stop-opacity: 0;\\n}\\n#control-container[data-v-8fb0d1a8] {\\n\\t\\tpadding: 0px !important;\\n}\\n\\n  \"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/zooming/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n  \n  \n  \n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\")\n  .replace(/contrast/i, \"Contrast\");\nlet themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark'];\nlet borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113'];\n\nfunction GetZoomingData() {\n        let series = [];\n        let point1;\n        let value = 80;\n        for (let i = 1; i < 500; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n            } else {\n                value -= Math.random();\n            }\n            point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };\n            series.push(point1);\n        }\n        return { 'series': series };\n    }\n    let seriesData = GetZoomingData().series;\n  /* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n      return {\n           theme: theme,\n          primaryXAxis: {\n        title: 'Years',\n        valueType: 'DateTime',\n        skeleton: 'yMMM',\n        edgeLabelPlacement: 'Shift',\n        majorGridLines: { width: 0 }\n    },\n    //Initializing Primary Y Axis\n    primaryYAxis:  {\n        title: 'Profit ($)',\n        rangePadding: 'None',\n        lineStyle: { width: 0 },\n        majorTickLines: { width: 0 }\n    },\n    legend:  {\n        visible: false\n    },\n    animation: { enable: false },\n     zoomSettings:  {\n        mode: 'X',\n        enableMouseWheelZooming: true,\n        enablePinchZooming: true,\n        enableSelectionZooming: true,\n        enableScrollbar: true\n    },\n     chartArea:  {\n        border: {\n            width: 0\n        }\n    },\n\n     width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '80%',\n     border: { width: 0.5, color: borderColor[themes.indexOf(theme.toLowerCase())] },\n     title: 'Sales History of Product X',\n     series: seriesData,\n     fill: \"url(#\" + selectedTheme + \"-gradient-chart)\",\n\n      };\n    },\n    provide: {\n      chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AreaSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Zoom\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScrollBar\"]]\n    },\n    methods: {\n     \n    }   \n  }));\n  \n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{staticStyle:{\"display\":\"block\",\"width\":\"92%\"},attrs:{\"theme\":_vm.theme,\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"align\":\"center\",\"id\":\"chart-zooming\",\"primaryXAxis\":_vm.primaryXAxis,\"legendSettings\":_vm.legend,\"zoomSettings\":_vm.zoomSettings,\"title\":_vm.title,\"primaryYAxis\":_vm.primaryYAxis}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.series,\"type\":\"Area\",\"xName\":\"x\",\"yName\":\"y\",\"animation\":_vm.animation,\"fill\":_vm.fill,\"border\":_vm.border}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('svg',{staticStyle:{\"height\":\"0\"}},[_c('defs',[_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"material-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fabric-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap4-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"highcontrast-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"tailwind-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap5-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"material-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fabric-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"tailwind-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap5-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fluent-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fluent-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1)],1)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample illustrates zooming feature in chart. The change can be zoomed by pinching or by mouse wheel. \\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"This sample demonstrates the zooming and panning behavior in chart.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Click and drag the mouse on a chart area to enable selection zooming.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Hover the mouse on the toolbar at the top right corner of chart area to switch between zooming and panning.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Pinch in and pinch out the chart area to zoom in or zoom out the chart in touch enabled devices.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Touch and drag to pan the chart.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Double tap to reset the zoomed chart.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"Chart component supports four types of zooming which can be set using \"),_c('code',[_vm._v(\"enableSelectionZooming\")]),_vm._v(\", \"),_c('code',[_vm._v(\"enablePinchZooming\")]),_vm._v(\", \"),_c('code',[_vm._v(\"enableMouseWheelZooming\")]),_vm._v(\", \"),_c('code',[_vm._v(\"enableDeferredZooming\")]),_vm._v(\" property.\\n    \")]),_c('p',[_vm._v(\"Chart supports two mode of zooming which can be set using \"),_c('code',[_c('a',{staticClass:\"code\",attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#mode-zoommode\"}},[_vm._v(\"mode\")])]),_vm._v(\" property.\\n    \")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"XY\")]),_vm._v(\" - Zoom the chart with respect to both the axis.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"X\")]),_vm._v(\" - Zoom the chart with respect to horizontal axis.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Y\")]),_vm._v(\" - Zoom the chart with respect to vertical axis.\")])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n         Chart component features are segregated into individual feature-wise modules. To use zooming, we need to inject\\n         \"),_c('code',[_vm._v(\"Zoom\")]),_vm._v(\" module using \"),_c('code',[_vm._v(\"provide: { chart: [Zoom] },\")]),_vm._v(\" method.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n         More information on the Zooming can be found in this\\n         \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#properties\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });