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
/******/ 		"range-navigator/logarithmic/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-navigator/logarithmic/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-navigator/logarithmic/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/range-navigator/logarithmic/App.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_05b2bfb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=05b2bfb6&scoped=true& */ \"./Samples/range-navigator/logarithmic/App.vue?vue&type=template&id=05b2bfb6&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-navigator/logarithmic/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_05b2bfb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css& */ \"./Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_05b2bfb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_05b2bfb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"05b2bfb6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-navigator/logarithmic/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/logarithmic/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/range-navigator/logarithmic/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/logarithmic/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_05b2bfb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_05b2bfb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_05b2bfb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_05b2bfb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_05b2bfb6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/logarithmic/App.vue?vue&type=template&id=05b2bfb6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./Samples/range-navigator/logarithmic/App.vue?vue&type=template&id=05b2bfb6&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_05b2bfb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=05b2bfb6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/logarithmic/App.vue?vue&type=template&id=05b2bfb6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_05b2bfb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_05b2bfb6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/logarithmic/main.js":
/*!*****************************************************!*\
  !*** ./Samples/range-navigator/logarithmic/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-navigator/logarithmic/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-containerLog[data-v-05b2bfb6] {\\n  padding: 0px !important;\\n}\\n#material-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-05b2bfb6] {\\n    stop-opacity: 0.9;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-05b2bfb6] {\\n    stop-opacity: 0.3;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-T67TDI6RTFMXI65CTZSEGIYBWHNJ35F5HUG4Y4OQVGOSDUO2GR7A/Samples/range-navigator/logarithmic/App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=05b2bfb6&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-containerLog[data-v-05b2bfb6] {\\n  padding: 0px !important;\\n}\\n#material-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #00bdae;\\n}\\n#fabric-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #a16ee5;\\n}\\n#bootstrap4-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #a16ee5;\\n}\\n#highcontrast-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #79ECE4;\\n}\\n#tailwind-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #5A61F6;\\n}\\n#bootstrap5-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #262E0B;\\n}\\n#material-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #9ECB08;\\n}\\n#fabric-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #4472c4;\\n}\\n#bootstrap-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #a16ee5;\\n}\\n#tailwind-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #8B5CF6;\\n}\\n#bootstrap5-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #5ECB9B;\\n}\\n#fluent-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #614570;\\n}\\n#fluent-dark-gradient-chart stop[data-v-05b2bfb6] {\\n    stop-color: #8AB113;\\n}\\n.chart-gradient stop[offset=\\\"0\\\"][data-v-05b2bfb6] {\\n    stop-opacity: 0.9;\\n}\\n.chart-gradient stop[offset=\\\"1\\\"][data-v-05b2bfb6] {\\n    stop-opacity: 0.3;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/logarithmic/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/logarithmic/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"RangeNavigatorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\nlet themes = ['bootstrap5', 'bootstrap5dark', 'tailwind', 'tailwinddark', 'material', 'materialdark', 'bootstrap4', 'bootstrap', 'bootstrapdark', 'fabric', 'fabricdark', 'highcontrast', 'fluent', 'fluentDark'];\nlet borderColor = ['#262E0B', '#5ECB9B', '#5A61F6', '#8B5CF6', '#00bdae', '#9ECB08', '#a16ee5', '#a16ee5', '#a16ee5', '#4472c4', '#4472c4', '#79ECE4', '#614570', '#8AB113'];\nlet regionColor = ['rgba(38, 46, 11, 0.3)', 'rgba(94, 203, 155, 0.3)', 'rgba(90, 97, 246, 0.3)', 'rgba(139, 92, 246, 0.3)', 'rgba(0, 189, 174, 0.3)',\n    'rgba(158, 203, 8, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(161, 110, 229, 0.3)', 'rgba(68, 114, 196, 0.3)',\n    'rgba(68, 114, 196, 0.3)', 'rgba(121, 236, 228, 0.3)'];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    let points = [];\n    let max = 100;\n    for (let i = 0; i < 100; i++) {\n      points.push({\n        x: Math.pow(10, i * 0.1),\n        y: Math.floor(Math.random() * (80 - 30 + 1)) + 30\n      });\n    }\n    return {\n      //Chart Properties\n      primaryXAxis: {\n        valueType: \"Logarithmic\", crosshairTooltip: { enable: false }, interval: 1,\n        edgeLabelPlacement: \"Shift\", majorGridLines: { width: 0 }, title: \"Numbers of Goods Consumers\",\n        zoomFactor: 0.2, zoomPosition: 0.4\n      },\n      primaryYAxis: {\n        title: \"Inflation\", minimum: 0, maximum: 100, labelFormat: \"{value}%\",\n        majorTickLines: { width: 0 }, lineStyle: { width: 0 }\n      },\n      animation: { enable: false },\n      marker: { visible: true },\n      fill: \"url(#\" + selectedTheme + \"-gradient-chart)\",\n      border: { width: 2, color: borderColor[themes.indexOf(theme.toLowerCase())] },\n      chartArea: { border: { width: 0 } },\n      dataSource: points,\n      //Range Navigator Properties\n      tooltip: { enable: true },\n      value: [4, 6],\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      theme: theme\n    };\n  },\n  provide: {\n    rangeNavigator: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Logarithmic\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"StepLineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"RangeTooltip\"]],\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Logarithmic\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"StepAreaSeries\"]]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n        this.$refs.range.ej2Instances.refresh();\n        this.$refs.chart.ej2Instances.refresh();\n      });\n    },\n  methods: {\n    load: function(args) {\n      args.rangeNavigator.interval = 1;\n    },\n    changed: function(args) {\n        this.$refs.chart.ej2Instances.primaryXAxis.zoomFactor = args.zoomFactor;\n        this.$refs.chart.ej2Instances.primaryXAxis.zoomPosition = args.zoomPosition;\n        this.$refs.chart.ej2Instances.dataBind();\n    },\n    labelRender: function(args) {\n      args.text = (+args.text).toExponential().toLocaleUpperCase();\n    },\n    tooltipRender: function(args) {\n      args.text = [(+(+args.text).toFixed(1)).toExponential(1).toString().toLocaleUpperCase()];\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/logarithmic/App.vue?vue&type=template&id=05b2bfb6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/logarithmic/App.vue?vue&type=template&id=05b2bfb6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('h4',{staticStyle:{\"font-family\":\"Segoe UI\",\"font-weight\":\"500\",\"font-style\":\"normal\",\"font-size\":\"15px\"},attrs:{\"align\":\"center\"}},[_vm._v(\"Inflation vs Goods Consumers\")]),_vm._v(\" \"),_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-rangenavigator',{ref:\"range\",staticStyle:{\"display\":\"block\"},attrs:{\"align\":\"center\",\"id\":\"containerLog\",\"value\":_vm.value,\"labelIntersectAction\":\"None\",\"labelPosition\":\"Outside\",\"valueType\":\"Logarithmic\",\"width\":_vm.width,\"load\":_vm.load,\"labelRender\":_vm.labelRender,\"changed\":_vm.changed,\"tooltip\":_vm.tooltip,\"theme\":_vm.theme,\"tooltipRender\":_vm.tooltipRender}},[_c('e-rangenavigator-series-collection',[_c('e-rangenavigator-series',{attrs:{\"dataSource\":_vm.dataSource,\"type\":\"StepLine\",\"xName\":\"x\",\"yName\":\"y\",\"width\":\"2\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"id\":\"chartLog\",\"align\":\"center\",\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"height\":\"350\",\"theme\":_vm.theme}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.dataSource,\"type\":\"StepArea\",\"xName\":\"x\",\"yName\":\"y\",\"width\":\"2\",\"marker\":_vm.marker,\"fill\":_vm.fill,\"border\":_vm.border}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('svg',{staticStyle:{\"height\":\"0\"}},[_c('defs',[_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"material-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fabric-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap4-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"highcontrast-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"tailwind-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap5-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"material-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fabric-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"tailwind-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"bootstrap5-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fluent-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1),_vm._v(\" \"),_c('linearGradient',{staticClass:\"chart-gradient\",staticStyle:{\"opacity\":\"0.75\"},attrs:{\"id\":\"fluent-dark-gradient-chart\",\"x1\":\"0\",\"x2\":\"0\",\"y1\":\"0\",\"y2\":\"1\"}},[_c('stop',{attrs:{\"offset\":\"0\"}}),_vm._v(\" \"),_c('stop',{attrs:{\"offset\":\"1\"}})],1)],1)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample demonstrates rendering logarithmic axis in the range navigator\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        Logarithmic axis uses logarithmic scale and it is very useful in visualizing when the data has values with both lower order of magnitude (eg: 10^-6) and higher order of magnitude (eg: 10^6). To render Logarithmic axis, set \"),_c('code',[_vm._v(\"valueType\")]),_vm._v(\" to \"),_c('code',[_vm._v(\"Logarithmic\")]),_vm._v(\". \\nTooltip is enabled in this example, to see the tooltip in action, while the selected range is changed.\\n\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        The range navigator component features are segregated into individual feature-wise modules. To use logarithmic axis, inject the \"),_c('code',[_vm._v(\"Logarithmic\")]),_vm._v(\" module in the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\\n       \\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/logarithmic/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });