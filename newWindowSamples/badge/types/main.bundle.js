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
/******/ 		"badge/types/main": 0
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
/******/ 	deferredModules.push(["./Samples/badge/types/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/badge/types/App.vue":
/*!*************************************!*\
  !*** ./Samples/badge/types/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_10e0a38a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=10e0a38a& */ \"./Samples/badge/types/App.vue?vue&type=template&id=10e0a38a&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_10e0a38a_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=10e0a38a&lang=css& */ \"./Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_10e0a38a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_10e0a38a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/badge/types/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/badge/types/App.vue?");

/***/ }),

/***/ "./Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css&":
/*!**********************************************************************************!*\
  !*** ./Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_10e0a38a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=10e0a38a&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_10e0a38a_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_10e0a38a_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_10e0a38a_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_10e0a38a_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/badge/types/App.vue?");

/***/ }),

/***/ "./Samples/badge/types/App.vue?vue&type=template&id=10e0a38a&":
/*!********************************************************************!*\
  !*** ./Samples/badge/types/App.vue?vue&type=template&id=10e0a38a& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_10e0a38a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=10e0a38a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/types/App.vue?vue&type=template&id=10e0a38a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_10e0a38a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_10e0a38a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/badge/types/App.vue?");

/***/ }),

/***/ "./Samples/badge/types/main.js":
/*!*************************************!*\
  !*** ./Samples/badge/types/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/badge/types/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/badge/types/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.fabric .badge-types .sample_container .e-badge-showcase.e-card {\\n    background: transparent;\\n}\\n.e-bigger .badge-types .sample_container .e-btn {\\n    padding: 0px 10px 2px 10px;\\n}\\n@media only screen and (max-width: 365px) {\\n.badge-types .sample_container {\\n        max-width: 146px;\\n}\\n}\\n.highcontrast .badge-types .sample_container .e-btn:focus {\\n    outline: 0px;\\n    color: white;\\n}\\n.badge-types .control-section {\\n    overflow: auto;\\n    padding-top: 40px;\\n}\\n.badge-types .e-btn {\\n    position: relative;\\n}\\n\\n/* Media queries for Multiple devices */\\n@media only screen and (max-width: 890px) {\\n.badge-types .sample_container {\\n        max-width: 311px;\\n        margin: auto;\\n        margin-top: 0px;\\n}\\n.badge-types .e-card-content.text {\\n        font-size: 10px;\\n}\\n.badge-types .e-badge-showcase.e-card {\\n        width: 135px;\\n}\\n}\\n@media only screen and (min-width: 890px) {\\n.badge-types .sample_container {\\n        max-width: 745px;\\n        margin: auto;\\n        margin-top: 24px;\\n}\\n.badge-types .e-badge-showcase.e-card {\\n        width: 160px;\\n}\\n}\\n.badge-types .e-btn {\\n    text-transform: none;\\n}\\n.badge-types .sample_container .badge-block {\\n    margin: 2px 2px 2px 2px;\\n    vertical-align: top;\\n    display: inline-block;\\n}\\n.highcontrast .badge-types .sample_container code {\\n    border: 0;\\n}\\n.badge-types .sample_container .badge-block-first {\\n    position: relative;\\n}\\n\\n/* Card Customization */\\n.badge-types .e-badge-showcase.e-card {\\n    height: 100px;\\n    padding: 5px;\\n    margin: 5px 3px;\\n    box-shadow: none;\\n    border-radius: 8px;\\n    border: 1px solid #f1f1f1;\\n    background-color: #f1f1f1;\\n}\\n.highcontrast .badge-types .e-badge-showcase.e-card {\\n    background-color: #000;\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-content {\\n    overflow: visible;\\n    align-self: center;\\n    padding: 0 0 10px 0;\\n    overflow: initial;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-PSBVH5LQFJBAXSBHFQ46PQJOQ6CYMUXP7LNGLLFY5DHKQNGTAQNA/Samples/badge/types/App.vue?vue&type=style&index=0&id=10e0a38a&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B;AACD;IACI,2BAA2B;CAC9B;AACD;AACA;QACQ,iBAAiB;CACxB;CACA;AACD;IACI,aAAa;IACb,aAAa;CAChB;AACD;IACI,eAAe;IACf,kBAAkB;CACrB;AACD;IACI,mBAAmB;CACtB;;AAED,wCAAwC;AACxC;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,gBAAgB;CACvB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,aAAa;CACpB;CACA;AACD;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;CACA;AACD;IACI,qBAAqB;CACxB;AACD;IACI,wBAAwB;IACxB,oBAAoB;IACpB,sBAAsB;CACzB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;CACtB;;AAED,wBAAwB;AACxB;IACI,cAAc;IACd,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,0BAA0B;IAC1B,0BAA0B;CAC7B;AACD;IACI,uBAAuB;CAC1B;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;CACpC;AACD;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,gCAAgC;CACnC;AACD;IACI,UAAU;CACb;AACD;IACI,kBAAkB;IAClB,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=10e0a38a&lang=css&\",\"sourcesContent\":[\"\\n.fabric .badge-types .sample_container .e-badge-showcase.e-card {\\n    background: transparent;\\n}\\n.e-bigger .badge-types .sample_container .e-btn {\\n    padding: 0px 10px 2px 10px;\\n}\\n@media only screen and (max-width: 365px) {\\n.badge-types .sample_container {\\n        max-width: 146px;\\n}\\n}\\n.highcontrast .badge-types .sample_container .e-btn:focus {\\n    outline: 0px;\\n    color: white;\\n}\\n.badge-types .control-section {\\n    overflow: auto;\\n    padding-top: 40px;\\n}\\n.badge-types .e-btn {\\n    position: relative;\\n}\\n\\n/* Media queries for Multiple devices */\\n@media only screen and (max-width: 890px) {\\n.badge-types .sample_container {\\n        max-width: 311px;\\n        margin: auto;\\n        margin-top: 0px;\\n}\\n.badge-types .e-card-content.text {\\n        font-size: 10px;\\n}\\n.badge-types .e-badge-showcase.e-card {\\n        width: 135px;\\n}\\n}\\n@media only screen and (min-width: 890px) {\\n.badge-types .sample_container {\\n        max-width: 745px;\\n        margin: auto;\\n        margin-top: 24px;\\n}\\n.badge-types .e-badge-showcase.e-card {\\n        width: 160px;\\n}\\n}\\n.badge-types .e-btn {\\n    text-transform: none;\\n}\\n.badge-types .sample_container .badge-block {\\n    margin: 2px 2px 2px 2px;\\n    vertical-align: top;\\n    display: inline-block;\\n}\\n.highcontrast .badge-types .sample_container code {\\n    border: 0;\\n}\\n.badge-types .sample_container .badge-block-first {\\n    position: relative;\\n}\\n\\n/* Card Customization */\\n.badge-types .e-badge-showcase.e-card {\\n    height: 100px;\\n    padding: 5px;\\n    margin: 5px 3px;\\n    box-shadow: none;\\n    border-radius: 8px;\\n    border: 1px solid #f1f1f1;\\n    background-color: #f1f1f1;\\n}\\n.highcontrast .badge-types .e-badge-showcase.e-card {\\n    background-color: #000;\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.badge-types .e-badge-showcase.e-card .e-card-content {\\n    overflow: visible;\\n    align-self: center;\\n    padding: 0 0 10px 0;\\n    overflow: initial;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/badge/types/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/types/App.vue?vue&type=template&id=10e0a38a&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/types/App.vue?vue&type=template&id=10e0a38a& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"badge-types\"},[_c('div',{staticClass:\"col-lg-12 control-section\"},[_c('div',{staticClass:\"sample_container\"},[_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('div',{staticClass:\"badge-block-first\"},[_c('button',{staticClass:\"e-btn\"},[_vm._v(\"Primary\")]),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-primary e-badge-notification e-badge-overlap\"},[_vm._v(\"10\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('div',[_c('code',[_vm._v(\".e-badge-primary\")])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn\"},[_vm._v(\"Secondary\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-secondary e-badge-notification e-badge-overlap\"},[_vm._v(\"20\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-secondary\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn\"},[_vm._v(\"Success\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-success e-badge-notification e-badge-overlap\"},[_vm._v(\"25\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-success\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn\"},[_vm._v(\"Danger\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-danger e-badge-notification e-badge-overlap\"},[_vm._v(\"30\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-danger\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn\"},[_vm._v(\"Warning\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-warning e-badge-notification e-badge-overlap\"},[_vm._v(\"40\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-warning\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn\"},[_vm._v(\"Info\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-info e-badge-notification e-badge-overlap\"},[_vm._v(\"45\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-info\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn e-info\"},[_vm._v(\"Light\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-light e-badge-notification e-badge-overlap\"},[_vm._v(\"50\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-light\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"badge-block\"},[_c('div',{staticClass:\"e-card e-badge-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('button',{staticClass:\"e-btn e-info\"},[_vm._v(\"Dark\\n                            \"),_vm._v(\" \"),_c('span',{staticClass:\"e-badge e-badge-dark e-badge-notification e-badge-overlap\"},[_vm._v(\"75\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content text\"},[_c('code',[_vm._v(\".e-badge-dark\")])])])])])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates 8-predefined badge colors for various scenarios which can be applied from the modifier class.\")])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The badge supports the following 8 different essential colors for various situations. All the classes should be added\\n            with\\n            \"),_c('code',[_vm._v(\".e-badge\")]),_vm._v(\" class.\\n        \")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Primary: The\\n                \"),_c('code',[_vm._v(\".e-badge-primary\")]),_vm._v(\" class applies the primary color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Secondary: The\\n                \"),_c('code',[_vm._v(\".e-badge-secondary\")]),_vm._v(\" class applies the secondary color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Success: The\\n                \"),_c('code',[_vm._v(\".e-badge-success\")]),_vm._v(\" class applies the success color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Danger: The\\n                \"),_c('code',[_vm._v(\".e-badge-danger\")]),_vm._v(\" class applies the danger color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Warning: The\\n                \"),_c('code',[_vm._v(\".e-badge-warning\")]),_vm._v(\" class applies the warning color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Info: The\\n                \"),_c('code',[_vm._v(\".e-badge-info\")]),_vm._v(\" class applies the info color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Light: The\\n                \"),_c('code',[_vm._v(\".e-badge-light\")]),_vm._v(\" class applies the light color.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Dark: The\\n                \"),_c('code',[_vm._v(\".e-badge-dark\")]),_vm._v(\" class applies the dark color.\")])])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/badge/types/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });