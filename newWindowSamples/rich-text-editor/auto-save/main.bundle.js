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
/******/ 		"rich-text-editor/auto-save/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/auto-save/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/auto-save/App.vue":
/*!****************************************************!*\
  !*** ./Samples/rich-text-editor/auto-save/App.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2bea26e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2bea26e4&scoped=true& */ \"./Samples/rich-text-editor/auto-save/App.vue?vue&type=template&id=2bea26e4&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/auto-save/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2bea26e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css& */ \"./Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2bea26e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2bea26e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2bea26e4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/auto-save/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/auto-save/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./Samples/rich-text-editor/auto-save/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/auto-save/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2bea26e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2bea26e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2bea26e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2bea26e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2bea26e4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/auto-save/App.vue?vue&type=template&id=2bea26e4&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/auto-save/App.vue?vue&type=template&id=2bea26e4&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2bea26e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2bea26e4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/auto-save/App.vue?vue&type=template&id=2bea26e4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2bea26e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2bea26e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/auto-save/main.js":
/*!****************************************************!*\
  !*** ./Samples/rich-text-editor/auto-save/main.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/auto-save/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control_wrapper[data-v-2bea26e4] {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.control-section[data-v-2bea26e4] {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n    position: relative;\\n}\\n.current-status[data-v-2bea26e4] {\\n        float: right;\\n        padding: 11px;\\n        margin-right: 22px;\\n        font-size: 12px;\\n        display: inline-block;\\n}\\n.e-icons.e-icon-refresh[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E606\\\";\\n}\\n.btn-text[data-v-2bea26e4] {\\n        display: inline;\\n        padding: 2px 35px 2px 64px;\\n}\\n.e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E614\\\";\\n}\\n.status-text[data-v-2bea26e4] {\\n        padding: 4px;\\n}\\n.e-icon-refresh[data-v-2bea26e4] {\\n        width: 10px;\\n        display: inline-block;\\n        animation: spin-data-v-2bea26e4 2s linear infinite;\\n}\\n@keyframes spin-data-v-2bea26e4 {\\n0% {\\n            transform: rotate(0deg);\\n}\\n100% {\\n            transform: rotate(360deg);\\n}\\n}\\n.bootstrap4 .e-icons.e-icon-refresh[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E710\\\";\\n}\\n.bootstrap4 .e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E718\\\";\\n}\\n.tailwind .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .tailwind-dark .e-icons.e-icon-refresh[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E711\\\";\\n}\\n.tailwind .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .tailwind-dark .e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E75D\\\";\\n}\\n.bootstrap5 .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .bootstrap5-dark .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .fluent .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .fluent-dark .e-icons.e-icon-refresh[data-v-2bea26e4]::before  {\\n        content: \\\"\\\\E706\\\";\\n}\\n.bootstrap5 .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .bootstrap5-dark .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .fluent .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .fluent-dark .e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\E774\\\";\\n}\\n.status-text[data-v-2bea26e4] {\\n        font-size: 14px;\\n        display: inline-block;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-6TJ7G4YSVALEG4EIDTKDEPCDDSVR3MGGTDKPG3AWYLVZKLLE52QA/Samples/rich-text-editor/auto-save/App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,aAAa;IACb,0BAA0B;IAC1B,mBAAmB;CACtB;AACD;IACI,eAAe;IACf,qBAAqB;IACrB,mBAAmB;CACtB;AACD;QACQ,aAAa;QACb,cAAc;QACd,mBAAmB;QACnB,gBAAgB;QAChB,sBAAsB;CAC7B;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,gBAAgB;QAChB,2BAA2B;CAClC;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,YAAY;QACZ,sBAAsB;QACtB,mDAAmD;CAC1D;AACD;AACA;YACY,wBAAwB;CACnC;AACD;YACY,0BAA0B;CACrC;CACA;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;;QAEQ,iBAAiB;CACxB;AACD;;QAEQ,iBAAiB;CACxB;AACD;;;;QAIQ,iBAAiB;CACxB;AACD;;;;QAIQ,iBAAiB;CACxB;AACD;QACQ,gBAAgB;QAChB,sBAAsB;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&id=2bea26e4&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control_wrapper[data-v-2bea26e4] {\\n    max-width: 500px;\\n    margin: auto;\\n    border: 1px solid #dddddd;\\n    border-radius: 3px;\\n}\\n.control-section[data-v-2bea26e4] {\\n    overflow: auto;\\n    padding-bottom: 10px;\\n    position: relative;\\n}\\n.current-status[data-v-2bea26e4] {\\n        float: right;\\n        padding: 11px;\\n        margin-right: 22px;\\n        font-size: 12px;\\n        display: inline-block;\\n}\\n.e-icons.e-icon-refresh[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e606\\\";\\n}\\n.btn-text[data-v-2bea26e4] {\\n        display: inline;\\n        padding: 2px 35px 2px 64px;\\n}\\n.e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e614\\\";\\n}\\n.status-text[data-v-2bea26e4] {\\n        padding: 4px;\\n}\\n.e-icon-refresh[data-v-2bea26e4] {\\n        width: 10px;\\n        display: inline-block;\\n        animation: spin-data-v-2bea26e4 2s linear infinite;\\n}\\n@keyframes spin-data-v-2bea26e4 {\\n0% {\\n            transform: rotate(0deg);\\n}\\n100% {\\n            transform: rotate(360deg);\\n}\\n}\\n.bootstrap4 .e-icons.e-icon-refresh[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e710\\\";\\n}\\n.bootstrap4 .e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e718\\\";\\n}\\n.tailwind .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .tailwind-dark .e-icons.e-icon-refresh[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e711\\\";\\n}\\n.tailwind .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .tailwind-dark .e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e75d\\\";\\n}\\n.bootstrap5 .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .bootstrap5-dark .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .fluent .e-icons.e-icon-refresh[data-v-2bea26e4]::before,\\n    .fluent-dark .e-icons.e-icon-refresh[data-v-2bea26e4]::before  {\\n        content: \\\"\\\\e706\\\";\\n}\\n.bootstrap5 .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .bootstrap5-dark .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .fluent .e-icons.e-icon-tick[data-v-2bea26e4]::before,\\n    .fluent-dark .e-icons.e-icon-tick[data-v-2bea26e4]::before {\\n        content: \\\"\\\\e774\\\";\\n}\\n.status-text[data-v-2bea26e4] {\\n        font-size: 14px;\\n        display: inline-block;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/auto-save/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/auto-save/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"SwitchPlugin\"]);\nlet Saving = undefined;\nlet Saved = undefined;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {\n      toolbarSettings: {\n        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',\n          'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']\n      },\n      Saving: false,\n      Saved: false\n    };\n  },\n  methods: {\n    updateStatus: function (e) {\n      this.Saving = true;\n      this.Saved = false;\n      setTimeout(() => {\n        this.Saving = false;\n        this.Saved = true;\n      }, 500);\n    },\n    onChange: function (e) {\n      var proxy = this;\n      if (e.checked) {\n        proxy.$refs.saveObj.ej2Instances.saveInterval = 5000;\n      } else {\n        proxy.$refs.saveObj.ej2Instances.saveInterval = 0;\n        setTimeout(() => {\n          this.Saving = false;\n          this.Saved = false;\n        }, 500);\n      }\n    }\n  },\n  provide: {\n    richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Count\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"]]\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/auto-save/App.vue?vue&type=template&id=2bea26e4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/auto-save/App.vue?vue&type=template&id=2bea26e4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\",staticStyle:{\"overflow\":\"hidden\"}},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"control-wrapper\"},[_c('div',{staticClass:\"sample-container\"},[_c('div',{staticClass:\"default-section\"},[_c('ejs-richtexteditor',{ref:\"saveObj\",attrs:{\"toolbarSettings\":_vm.toolbarSettings,\"enablePersistence\":\"true\",\"saveInterval\":\"5000\",\"placeholder\":\"Start to type a content to save\",\"change\":_vm.updateStatus}},[_c('p',[_vm._v(\"Type or edit the content to be saved automatically in the editor\")])]),_vm._v(\" \"),_c('div',{staticClass:\"current-status\",attrs:{\"id\":\"statusEle\"}},[(_vm.Saving)?_c('div',{attrs:{\"id\":\"saving\"}},[_c('div',{staticClass:\"e-icons e-icon-refresh\"}),_vm._v(\" \"),_c('p',{staticClass:\"status-text\"},[_vm._v(\" Saving changes\")])]):_vm._e(),_vm._v(\" \"),(_vm.Saved)?_c('div',{attrs:{\"id\":\"saved\"}},[_c('span',{staticClass:\"e-icons e-icon-tick\"}),_vm._v(\" \"),_c('p',{staticClass:\"status-text\"},[_vm._v(\"Changes saved\")])]):_vm._e()])],1)])])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_c('div',{attrs:{\"title\":\"Properties\",\"id\":\"property\"}},[_c('div',{staticClass:\"toggle-btn\"},[_c('label',{staticStyle:{\"padding\":\"10px 70px 10px 0\"},attrs:{\"for\":\"checked\"}},[_vm._v(\" Auto Save \")]),_vm._v(\" \"),_c('ejs-switch',{attrs:{\"id\":\"checked\",\"change\":_vm.onChange,\"checked\":true}})],1)])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"Demonstrates how to save the Rich Text Editor’s content automatically with periodic interval. When you type or edit the content, it will be saved automatically by every 5 seconds. \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The Rich Text Editor provides options to save its content automatically using the `saveInterval` property. By default, the save interval time has 10 seconds from built-in support, but it can be customizable as per the application needs. The interval\\n        is calculated based on editing the content and does not considered on idle state.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"We have configured save interval as 5 seconds in this example. You can save the content in server also using this `auto save` option.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"When you disable this `Auto Save` option in a sample, the value will be saved on focus-out from the editor.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"Rich Text Editor content will be automatically saved when you focus out the editor.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/auto-save/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });