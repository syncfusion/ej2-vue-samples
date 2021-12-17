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
/******/ 		"rich-text-editor/online-html-editor/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/online-html-editor/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue":
/*!*************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=31168054& */ \"./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/online-html-editor/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&":
/*!********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=31168054& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/main.js":
/*!*************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/main.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/online-html-editor/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.online-editor #defaultRTE {\\n    overflow: hidden;\\n    border: none;\\n}\\n.online-editor .e-splitter .CodeMirror {\\n    height: auto;\\n}\\n.online-editor .center {\\n    text-align: center;\\n    font-size: 13px;\\n    font-weight: 400;\\n    margin-top: 20px;\\n}\\n.online-editor .pane1 {\\n    padding-right: 8px;\\n}\\n.online-editor .pane2 {\\n    padding-left: 8px;\\n}\\n.online-editor .heading {\\n    margin-top: 10px;\\n    float: left;\\n    width: 50%;\\n    border: 1px solid #e8e8e8;\\n    border-bottom: none;\\n    position: relative;\\n    box-sizing: border-box;\\n    padding: 5px;\\n}\\n.online-editor .title {\\n    color: #a0aabf;\\n    letter-spacing: 1px;\\n    padding-left: 10px;\\n}\\n.online-editor .title-head {\\n    text-align: center\\n}\\n.online-editor .e-control.e-splitter .e-split-bar.e-split-bar-horizontal.e-last-bar {\\n    margin: 0;\\n}\\n.online-editor .button-content {\\n    display: none;\\n}\\n.sb-content-tab .online-editor .button-content {\\n    display: block;\\n}\\n.sb-content-tab .online-editor .rte-online-sample-view {\\n    display: none;\\n}\\n.rte-online-sample-view {\\n    display: block;\\n    padding: 15px;\\n}\\nbody {\\n    margin: 0;\\n}\\n.online-editor table {\\n    width: 100%\\n}\\n.online-editor table,\\n.online-editor th,\\n.online-editor td {\\n    border: 1px solid black;\\n    border-collapse: collapse;\\n}\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new .sb-header,\\n.ej2-new #description {\\n    display: none !important;\\n}\\n.ej2-new .container-fluid {\\n    padding: 0 !important;\\n}\\n.ej2-new .content {\\n    top : 0px;\\n}\\n.ej2-new .control-section {\\n    padding-left: 0px;\\n}\\n.online-editor .source-code.pane2 .CodeMirror {\\n    height: 448px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-N3DMRJFTGMDOQHUK5D3TTEQIIZVZ4HAU46IUKQUA4R4A7BR67LFA/Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,iBAAiB;IACjB,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;CAChB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,UAAU;CACb;AACD;IACI,cAAc;CACjB;AACD;IACI,eAAe;CAClB;AACD;IACI,cAAc;CACjB;AACD;IACI,eAAe;IACf,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,WAAW;CACd;AACD;;;IAGI,wBAAwB;IACxB,0BAA0B;CAC7B;AACD;;;;;IAKI,yBAAyB;CAC5B;AACD;IACI,sBAAsB;CACzB;AACD;IACI,UAAU;CACb;AACD;IACI,kBAAkB;CACrB;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.online-editor #defaultRTE {\\n    overflow: hidden;\\n    border: none;\\n}\\n.online-editor .e-splitter .CodeMirror {\\n    height: auto;\\n}\\n.online-editor .center {\\n    text-align: center;\\n    font-size: 13px;\\n    font-weight: 400;\\n    margin-top: 20px;\\n}\\n.online-editor .pane1 {\\n    padding-right: 8px;\\n}\\n.online-editor .pane2 {\\n    padding-left: 8px;\\n}\\n.online-editor .heading {\\n    margin-top: 10px;\\n    float: left;\\n    width: 50%;\\n    border: 1px solid #e8e8e8;\\n    border-bottom: none;\\n    position: relative;\\n    box-sizing: border-box;\\n    padding: 5px;\\n}\\n.online-editor .title {\\n    color: #a0aabf;\\n    letter-spacing: 1px;\\n    padding-left: 10px;\\n}\\n.online-editor .title-head {\\n    text-align: center\\n}\\n.online-editor .e-control.e-splitter .e-split-bar.e-split-bar-horizontal.e-last-bar {\\n    margin: 0;\\n}\\n.online-editor .button-content {\\n    display: none;\\n}\\n.sb-content-tab .online-editor .button-content {\\n    display: block;\\n}\\n.sb-content-tab .online-editor .rte-online-sample-view {\\n    display: none;\\n}\\n.rte-online-sample-view {\\n    display: block;\\n    padding: 15px;\\n}\\nbody {\\n    margin: 0;\\n}\\n.online-editor table {\\n    width: 100%\\n}\\n.online-editor table,\\n.online-editor th,\\n.online-editor td {\\n    border: 1px solid black;\\n    border-collapse: collapse;\\n}\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new .sb-header,\\n.ej2-new #description {\\n    display: none !important;\\n}\\n.ej2-new .container-fluid {\\n    padding: 0 !important;\\n}\\n.ej2-new .content {\\n    top : 0px;\\n}\\n.ej2-new .control-section {\\n    padding-left: 0px;\\n}\\n.online-editor .source-code.pane2 .CodeMirror {\\n    height: 448px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"SplitterPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\n\nvar RteContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane1\", {\n  template: `\n    <div class=\"content\">\n        <ejs-richtexteditor id=\"defaultRTE\" ref='rteObj' :toolbarSettings='toolbarSettings' :value=\"value\" height='100%' saveInterval='1'\n            :showCharCount='true' maxLength='5000' :created='onCreate' :change='onChange' :actionComplete='updateValue'>\n        </ejs-richtexteditor>\n    </div>`,\n    data() {\n        return {\n            textArea: null,\n            srcArea: null,\n            height: '100%',\n            showCharCount: true,\n            myCodeMirror: '',\n            maxLength: 5000,\n            saveInterval: 1,\n            toolbarSettings: {\n                type: 'MultiRow',\n                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',\n                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',\n                'LowerCase', 'UpperCase', 'SuperScript', 'SubScript' , '|',\n                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',\n                'Outdent', 'Indent', '|',\n                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']\n            },\n            value: `<p>The Rich Text Editor is a WYSIWYG (what you see is what you get) editor used to create and edit\n                the content and return the valid HTML markup or markdown of the content.\n                This provides a lot of commands to edit and format the content. </p>\n                <p><b>Toolbar</b></p>\n                <p>The editor’s toolbar provides various commands to align the text, format, insert a link, image,\n                    list, undo/redo operations, HTML view, and more. The toolbar comes with different modes such as\n                    floating, multi-row, and expanded. </p>\n                <p><b>Links</b></p>\n                <p>Create a hyperlink using the 'insert link' dialog and you can edit the hyperlink text, display text,\n                    and tooltip using the 'edit link' dialog and quick toolbar. If the text has valid hyperlink text,\n                    the editor converts it to hyperlink automatically. For example, link to Rich Text Editor.</p>\n                <p><b>Table</b></p>\n                <p>This editor allows you to insert a table with options to add, edit, and remove and perform other\n                    table-related actions. </p>\n                <p>For example</p>\n                <table>\n                    <tr>\n                        <th>Employee name</th>\n                        <th>Role</th>\n                        <th>Mail</th>\n                        <th>Country</th>\n                    </tr>\n                    <tr>\n                        <td>Janet Fleet</td>\n                        <td>Manager</td>\n                        <td>janet95@arpy.com</td>\n                        <td>France</td>\n                    </tr>\n                    <tr>\n                        <td>Nancy Buchanan</td>\n                        <td>Project Lead</td>\n                        <td>nancy55@rpy.com</td>\n                        <td>Sweden</td>\n                    </tr>\n                    <tr>\n                        <td>Rose Rose</td>\n                        <td>Project Lead</td>\n                        <td>rose44@sample.com</td>\n                        <td>France</td>\n                    </tr>\n                </table>\n                <p><b>Image</b></p>\n                <p>Allows you to insert images with caption, alt text, link, resize, and drag-and-drop from an\n                    online source and local computer. You can upload an image to the server and insert it into the editor.\n                    It provides an option to customize a quick toolbar for an image.</p>\n                <p>For example</p>\n                <img id='rteImageID' style=\"height:300px;transform: rotate(0deg);\" alt=\"Logo\"\n                    src=\"././../../source/rich-text-editor/images/RTEImage-Feather.png\" />\n                <p><b>Lists</b></p>\n                <p>You can include content with ordered and unordered lists.</p>\n                <p>Examples for an ordered list:</p>\n                <ul>\n                    <li>TypeScript</li>\n                    <li>Javascript</li>\n                    <li>Angular</li>\n                    <li>React</li>\n                    <li>Vue</li>\n                </ul>\n                <p>Examples for an unordered list:</p>\n                <ol>\n                    <li>Rich Text Editor</li>\n                    <li>Toolbar</li>\n                    <li>Button</li>\n                    <li>Dialog</li>\n                    <li>Data Grid</li>\n                </ol>\n                <p>The editor has a lot of features to edit HTML content and Markdown content in web applications.</p>`\n        };\n    },\n    methods: {\n        onCreate: function() {\n            setTimeout(() => {\n            this.updateValue();\n            this.textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();\n            this.srcArea = document.querySelector('.source-code');\n            if (this.srcArea) {\n                this.srcArea.addEventListener('keyup', this.updateHtmlValue);\n            }\n            }, 400);\n        },\n        onChange: function() {\n            this.updateValue();\n        },\n        updateHtmlValue: function() {\n            this.textArea.innerHTML = this.myCodeMirror.getValue();\n        },\n        updateValue: function(e) {\n            var mirrorView = document.querySelector('#src-view');\n            if (!mirrorView) {\n                mirrorView = document.createElement('div', { className: 'e-content' });\n                mirrorView.id = 'src-view';\n                var srcCodeElement = document.querySelector('.source-code');\n                if (srcCodeElement) {\n                    srcCodeElement.appendChild(mirrorView);\n                }\n                mirrorView.innerHTML = '';\n                mirrorView.style.display = 'block';\n            }\n            var srcViewEle = document.querySelector('#src-view');\n            var codeMirrorEle = document.querySelector('.CodeMirror-wrap');\n            if (codeMirrorEle) {\n                codeMirrorEle.remove();\n            }\n            this.renderCodeMirror(srcViewEle, this.$refs.rteObj.ej2Instances.value);\n        },\n        renderCodeMirror: function(mirrorView, content) {\n            this.myCodeMirror = CodeMirror(mirrorView, {\n                value: content,\n                lineNumbers: true,\n                mode: 'text/html',\n                lineWrapping: true,\n            });\n        }\n    },\n    provide:{\n        richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Count\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Table\"]]\n    }\n});\n\nvar TextAreaContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane2\", {\n  template: `\n    <div class=\"content\">\n        <div class=\"splitter-default-content source-code pane2\" contenteditable=\"true\"></div>\n    </div>`,\n    data() {\n        return {\n            data: {}\n        };\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            pane1Content: function () {\n                return { template : RteContent }\n            },\n            pane2Content: function () {\n                return { template : TextAreaContent }\n            }\n        }\n    },\n    methods: {\n        newTabClick : function(){\n             var URL = location.href.replace(location.search, '');\n             document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'samples/rich-text-editor/online-html-editor/index.html');\n        },\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section online-editor\"},[_c('div',{staticClass:\"sample-container\"},[_c('div',{staticClass:\"default-section\"},[_c('div',{staticClass:\"button-content\"},[_c('div',{staticClass:\"col-lg-12 col-sm-12 col-md-12 center\"},[_vm._v(\"\\n                    Click/Touch the button to view the sample\\n                \")]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-12 col-sm-12 col-md-12 center\"},[_c('a',{staticClass:\"e-btn\",attrs:{\"id\":\"newTab\",\"target\":\"_blank\"},on:{\"click\":_vm.newTabClick}},[_vm._v(\"Open in new tab\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"rte-online-sample-view\"},[_c('h3',{staticClass:\"title-head\"},[_vm._v(\"Rich Text Editor Online Html Editor\")]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('ejs-splitter',{attrs:{\"id\":\"splitter\",\"width\":\"100%\",\"height\":\"450px\"}},[_c('e-panes',[_c('e-pane',{attrs:{\"size\":\"50%\",\"resizable\":false,\"content\":_vm.pane1Content}}),_vm._v(\" \"),_c('e-pane',{attrs:{\"content\":_vm.pane2Content}})],1)],1)],1)])]),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_vm._m(3)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"heading\"},[_c('h6',{staticClass:\"title\"},[_c('b',[_vm._v(\"PREVIEW\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"heading right\"},[_c('h6',{staticClass:\"title\"},[_c('b',[_vm._v(\"HTML SOURCE CODE \")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates an HTML content LIVE editing scenario using Vue Rich Text Editor. Click the \"),_c('code',[_vm._v(\"Open in new tab\")]),_vm._v(\" button and you can edit the content in Rich Text Editor and also in the source code view.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"This sample Rich Text Editor enabled most of the features to edit the content quickly such as insert image, table, etc... The source code view is formatted using the \"),_c('code',[_vm._v(\"Code-mirror\")]),_vm._v(\" plugin.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });