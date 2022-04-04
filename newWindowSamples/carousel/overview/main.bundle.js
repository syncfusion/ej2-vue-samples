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
/******/ 		"carousel/overview/main": 0
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
/******/ 	deferredModules.push(["./Samples/carousel/overview/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/carousel/overview/App.vue":
/*!*******************************************!*\
  !*** ./Samples/carousel/overview/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_54439e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=54439e76& */ \"./Samples/carousel/overview/App.vue?vue&type=template&id=54439e76&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/carousel/overview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_54439e76___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_54439e76___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/carousel/overview/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?");

/***/ }),

/***/ "./Samples/carousel/overview/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/carousel/overview/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/carousel/overview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?");

/***/ }),

/***/ "./Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?");

/***/ }),

/***/ "./Samples/carousel/overview/App.vue?vue&type=template&id=54439e76&":
/*!**************************************************************************!*\
  !*** ./Samples/carousel/overview/App.vue?vue&type=template&id=54439e76& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_54439e76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=54439e76& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/overview/App.vue?vue&type=template&id=54439e76&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_54439e76___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_54439e76___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?");

/***/ }),

/***/ "./Samples/carousel/overview/main.js":
/*!*******************************************!*\
  !*** ./Samples/carousel/overview/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/carousel/overview/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/carousel/overview/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.overview-carousel-section .carousel-sample {\\r\\n  border-radius: 1rem;\\r\\n  color: #6c757d;\\r\\n  height: 400px;\\r\\n  margin: 0 auto 2em;\\r\\n  width: 600px;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card {\\r\\n  height: 100%;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card-body {\\r\\n  height: 100%;\\r\\n  padding: 1rem;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card-body .card-header {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  font-weight: 500;\\r\\n  height: 3rem;\\r\\n  justify-content: center;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-header\\r\\n  .card-title {\\r\\n  font-size: 1.5rem;\\r\\n  text-transform: uppercase;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card-body .card-content {\\r\\n  display: flex;\\r\\n  height: calc(100% - 3rem);\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-left-content,\\r\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content {\\r\\n  padding: 2rem;\\r\\n  width: 50%;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-left-content\\r\\n  .img-container {\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  height: 100%;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table {\\r\\n  table-layout: fixed;\\r\\n  width: 100%;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table\\r\\n  td.card-text {\\r\\n  font-size: 1.4rem;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table\\r\\n  td {\\r\\n  padding-bottom: 1rem;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table\\r\\n  tr\\r\\n  td:first-child {\\r\\n  font-weight: 500;\\n}\\n.carousel-content {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  justify-content: center;\\n}\\n.carousel-content .carousel-navigations {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 5rem;\\r\\n  justify-content: center;\\r\\n  width: 5rem;\\n}\\n.carousel-footer {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  justify-content: center;\\n}\\n.carousel-footer .indicator-container,\\r\\n.carousel-footer .button-container {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 2rem;\\r\\n  justify-content: center;\\r\\n  gap: 0.5rem;\\n}\\n.carousel-footer .indicator-container .indicator {\\r\\n  border-color: inherit;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n  height: 1.4rem;\\r\\n  margin: 0.5rem;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  width: 1.4rem;\\r\\n  padding: 4px;\\n}\\n.bootstrap5.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.bootstrap5-dark.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.fluent.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.fluent-dark.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.tailwind.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.tailwind-dark.e-bigger .carousel-footer .button-container .play-button span {\\r\\n  line-height: normal;\\n}\\n.carousel-footer .indicator-container .indicator.active-indicator {\\r\\n  background-color: #6c757d;\\n}\\n.carousel-footer .button-container {\\r\\n  padding-left: 2.4rem;\\n}\\n.carousel-footer .button-container .e-btn.e-active {\\r\\n  background-color: transparent;\\r\\n  border-color: transparent;\\r\\n  color: #000;\\n}\\n.carousel-footer .button-container .e-btn.e-active:focus {\\r\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n#source_link {\\r\\n  float: right;\\r\\n  margin-right: 10px;\\n}\\n.bootstrap-dark .overview-carousel-section .carousel-sample,\\r\\n.bootstrap5-dark .overview-carousel-section .carousel-sample,\\r\\n.material-dark .overview-carousel-section .carousel-sample,\\r\\n.fabric-dark .overview-carousel-section .carousel-sample,\\r\\n.highcontrast .overview-carousel-section .carousel-sample,\\r\\n.tailwind-dark .overview-carousel-section .carousel-sample {\\r\\n  background-color: inherit;\\r\\n  color: inherit;\\n}\\n.bootstrap4 .carousel-footer .indicator-container .indicator:not(.active-indicator) {\\r\\n  background-color: transparent;\\r\\n  border-color: #6c757d;\\n}\\n.bootstrap-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.bootstrap5-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.material-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.fabric-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.highcontrast .carousel-footer .button-container .e-btn.e-active,\\r\\n.tailwind-dark .carousel-footer .button-container .e-btn.e-active {\\r\\n  color: #fff;\\n}\\n@media screen and (max-width: 480px) {\\n.overview-carousel-section .carousel-sample {\\r\\n    width: 100%;\\n}\\n.overview-carousel\\r\\n    .e-carousel-items\\r\\n    .e-carousel-item\\r\\n    .card-body\\r\\n    .card-content\\r\\n    .card-left-content {\\r\\n    padding: 2rem;\\r\\n    width: 100%;\\n}\\n.overview-carousel\\r\\n    .e-carousel-items\\r\\n    .e-carousel-item\\r\\n    .card-body\\r\\n    .card-content\\r\\n    .card-right-content {\\r\\n    display: none;\\n}\\n#source_link {\\r\\n    margin-top: -10px;\\r\\n    margin-right: 0px;\\n}\\n}\\n.bootstrap5 .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.bootstrap5-dark .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.fluent .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.fluent-dark .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.tailwind .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.tailwind-dark .overview-carousel-section .carousel-sample .carousel-navigations button span {\\r\\n  font-size: 20px !important;\\r\\n  line-height: normal;\\n}\\n.tailwind .overview-carousel-section .carousel-sample .carousel-footer .button-container span,\\r\\n.tailwind-dark .overview-carousel-section .carousel-sample .carousel-footer .button-container span {\\r\\n  font-size: 20px;\\n}\\n.bootstrap .overview-carousel-section .e-icons.e-arrow-right:before,\\r\\n.bootstrap-dark .overview-carousel-section .e-icons.e-arrow-right:before {\\r\\n  content: \\\"\\\\E84D\\\";\\n}\\n.bootstrap .overview-carousel-section .carousel-navigations button span,\\r\\n.bootstrap .overview-carousel-section .carousel-footer .button-container button span {\\r\\n  color: #6c757d !important;\\n}\\r\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-AYH7XHMO6KSEIXRKCV5I64MQMMUYOJMXW32VBZ37W2N7QVS7ANEQ/Samples/carousel/overview/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,oBAAoB;EACpB,eAAe;EACf,cAAc;EACd,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,aAAa;EACb,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,wBAAwB;CACzB;AACD;;;;;;EAME,kBAAkB;EAClB,0BAA0B;CAC3B;AACD;EACE,cAAc;EACd,0BAA0B;CAC3B;AACD;;;;;;;;;;;;EAYE,cAAc;EACd,WAAW;CACZ;AACD;;;;;;;EAOE,4BAA4B;EAC5B,6BAA6B;EAC7B,yBAAyB;EACzB,aAAa;CACd;AACD;;;;;;;EAOE,oBAAoB;EACpB,YAAY;CACb;AACD;;;;;;;;EAQE,kBAAkB;CACnB;AACD;;;;;;;;EAQE,qBAAqB;CACtB;AACD;;;;;;;;;EASE,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,wBAAwB;CACzB;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,wBAAwB;EACxB,YAAY;CACb;AACD;EACE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,wBAAwB;CACzB;AACD;;EAEE,oBAAoB;EACpB,cAAc;EACd,aAAa;EACb,wBAAwB;EACxB,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,iCAAiC;EACjC,cAAc;EACd,aAAa;CACd;AACD;;;;;;EAME,oBAAoB;CACrB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,qBAAqB;CACtB;AACD;EACE,8BAA8B;EAC9B,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,qCAAqC;CACtC;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;;;;;;EAME,0BAA0B;EAC1B,eAAe;CAChB;AACD;EACE,8BAA8B;EAC9B,sBAAsB;CACvB;AACD;;;;;;EAME,YAAY;CACb;AACD;AACA;IACI,YAAY;CACf;AACD;;;;;;IAMI,cAAc;IACd,YAAY;CACf;AACD;;;;;;IAMI,cAAc;CACjB;AACD;IACI,kBAAkB;IAClB,kBAAkB;CACrB;CACA;AACD;;;;;;EAME,2BAA2B;EAC3B,oBAAoB;CACrB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,0BAA0B;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.overview-carousel-section .carousel-sample {\\r\\n  border-radius: 1rem;\\r\\n  color: #6c757d;\\r\\n  height: 400px;\\r\\n  margin: 0 auto 2em;\\r\\n  width: 600px;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card {\\r\\n  height: 100%;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card-body {\\r\\n  height: 100%;\\r\\n  padding: 1rem;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card-body .card-header {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  font-weight: 500;\\r\\n  height: 3rem;\\r\\n  justify-content: center;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-header\\r\\n  .card-title {\\r\\n  font-size: 1.5rem;\\r\\n  text-transform: uppercase;\\n}\\n.overview-carousel .e-carousel-items .e-carousel-item .card-body .card-content {\\r\\n  display: flex;\\r\\n  height: calc(100% - 3rem);\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-left-content,\\r\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content {\\r\\n  padding: 2rem;\\r\\n  width: 50%;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-left-content\\r\\n  .img-container {\\r\\n  background-position: center;\\r\\n  background-repeat: no-repeat;\\r\\n  background-size: contain;\\r\\n  height: 100%;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table {\\r\\n  table-layout: fixed;\\r\\n  width: 100%;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table\\r\\n  td.card-text {\\r\\n  font-size: 1.4rem;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table\\r\\n  td {\\r\\n  padding-bottom: 1rem;\\n}\\n.overview-carousel\\r\\n  .e-carousel-items\\r\\n  .e-carousel-item\\r\\n  .card-body\\r\\n  .card-content\\r\\n  .card-right-content\\r\\n  table\\r\\n  tr\\r\\n  td:first-child {\\r\\n  font-weight: 500;\\n}\\n.carousel-content {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  justify-content: center;\\n}\\n.carousel-content .carousel-navigations {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 5rem;\\r\\n  justify-content: center;\\r\\n  width: 5rem;\\n}\\n.carousel-footer {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 100%;\\r\\n  justify-content: center;\\n}\\n.carousel-footer .indicator-container,\\r\\n.carousel-footer .button-container {\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  height: 2rem;\\r\\n  justify-content: center;\\r\\n  gap: 0.5rem;\\n}\\n.carousel-footer .indicator-container .indicator {\\r\\n  border-color: inherit;\\r\\n  border-radius: 50%;\\r\\n  cursor: pointer;\\r\\n  height: 1.4rem;\\r\\n  margin: 0.5rem;\\r\\n  transition: all 0.5s ease-in-out;\\r\\n  width: 1.4rem;\\r\\n  padding: 4px;\\n}\\n.bootstrap5.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.bootstrap5-dark.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.fluent.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.fluent-dark.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.tailwind.e-bigger .carousel-footer .button-container .play-button span,\\r\\n.tailwind-dark.e-bigger .carousel-footer .button-container .play-button span {\\r\\n  line-height: normal;\\n}\\n.carousel-footer .indicator-container .indicator.active-indicator {\\r\\n  background-color: #6c757d;\\n}\\n.carousel-footer .button-container {\\r\\n  padding-left: 2.4rem;\\n}\\n.carousel-footer .button-container .e-btn.e-active {\\r\\n  background-color: transparent;\\r\\n  border-color: transparent;\\r\\n  color: #000;\\n}\\n.carousel-footer .button-container .e-btn.e-active:focus {\\r\\n  background-color: rgba(0, 0, 0, 0.2);\\n}\\n#source_link {\\r\\n  float: right;\\r\\n  margin-right: 10px;\\n}\\n.bootstrap-dark .overview-carousel-section .carousel-sample,\\r\\n.bootstrap5-dark .overview-carousel-section .carousel-sample,\\r\\n.material-dark .overview-carousel-section .carousel-sample,\\r\\n.fabric-dark .overview-carousel-section .carousel-sample,\\r\\n.highcontrast .overview-carousel-section .carousel-sample,\\r\\n.tailwind-dark .overview-carousel-section .carousel-sample {\\r\\n  background-color: inherit;\\r\\n  color: inherit;\\n}\\n.bootstrap4 .carousel-footer .indicator-container .indicator:not(.active-indicator) {\\r\\n  background-color: transparent;\\r\\n  border-color: #6c757d;\\n}\\n.bootstrap-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.bootstrap5-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.material-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.fabric-dark .carousel-footer .button-container .e-btn.e-active,\\r\\n.highcontrast .carousel-footer .button-container .e-btn.e-active,\\r\\n.tailwind-dark .carousel-footer .button-container .e-btn.e-active {\\r\\n  color: #fff;\\n}\\n@media screen and (max-width: 480px) {\\n.overview-carousel-section .carousel-sample {\\r\\n    width: 100%;\\n}\\n.overview-carousel\\r\\n    .e-carousel-items\\r\\n    .e-carousel-item\\r\\n    .card-body\\r\\n    .card-content\\r\\n    .card-left-content {\\r\\n    padding: 2rem;\\r\\n    width: 100%;\\n}\\n.overview-carousel\\r\\n    .e-carousel-items\\r\\n    .e-carousel-item\\r\\n    .card-body\\r\\n    .card-content\\r\\n    .card-right-content {\\r\\n    display: none;\\n}\\n#source_link {\\r\\n    margin-top: -10px;\\r\\n    margin-right: 0px;\\n}\\n}\\n.bootstrap5 .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.bootstrap5-dark .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.fluent .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.fluent-dark .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.tailwind .overview-carousel-section .carousel-sample .carousel-navigations button span,\\r\\n.tailwind-dark .overview-carousel-section .carousel-sample .carousel-navigations button span {\\r\\n  font-size: 20px !important;\\r\\n  line-height: normal;\\n}\\n.tailwind .overview-carousel-section .carousel-sample .carousel-footer .button-container span,\\r\\n.tailwind-dark .overview-carousel-section .carousel-sample .carousel-footer .button-container span {\\r\\n  font-size: 20px;\\n}\\n.bootstrap .overview-carousel-section .e-icons.e-arrow-right:before,\\r\\n.bootstrap-dark .overview-carousel-section .e-icons.e-arrow-right:before {\\r\\n  content: \\\"\\\\e84d\\\";\\n}\\n.bootstrap .overview-carousel-section .carousel-navigations button span,\\r\\n.bootstrap .overview-carousel-section .carousel-footer .button-container button span {\\r\\n  color: #6c757d !important;\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/carousel/overview/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/overview/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__[\"CarouselPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"ButtonPlugin\"]);\r\n\r\nvar itemTemplateVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate\", {\r\n  template: `<div class=\"card\">\r\n              <div class=\"card-body\">\r\n                <div class=\"card-header\">\r\n                  <div class=\"card-title\">{{data.title}}</div>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                  <div class=\"card-left-content\">\r\n                    <div class=\"img-container\">\r\n                      <img style=\"width:100%; height:100%\" :src=\"getImage(data)\" :alt=\"data.title\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-right-content\">\r\n                    <table>\r\n                      <thead>\r\n                        <tr>\r\n                          <td class=\"card-text\" colSpan=\"2\">Product Details</td>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr>\r\n                          <td>Model</td>\r\n                          <td>{{data.model}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Brand</td>\r\n                          <td>{{data.brand}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>RAM</td>\r\n                          <td>{{data.ram}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>ROM</td>\r\n                          <td>{{data.rom}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Platform</td>\r\n                          <td>{{data.platform}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Version</td>\r\n                          <td>{{data.version}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>Launched on</td>\r\n                          <td>{{data.releaseDate}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>`,\r\n    data() {\r\n      return {\r\n        data: {}\r\n      };\r\n    },\r\n    computed: {},\r\n    methods: {\r\n      getImage: function (data) {\r\n        return data.imageUrl;\r\n      }\r\n    }\r\n});\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\r\n  data: function () {\r\n    return {\r\n      carouselData: [\r\n        { imageUrl: './../../source/carousel/images/google-pixel-6-pro.png', title: 'Google Pixel', model: 'Pixel 6 Pro', brand: 'Google', releaseDate: 'Oct 28, 2021', ram: '12GB', rom: '128GB', platform: 'Android', version: 12 },\r\n        { imageUrl: './../../source/carousel/images/iphone-13-pro.png', title: 'iPhone', model: 'iPhone 13 Pro', brand: 'Apple', releaseDate: 'Sept 14, 2021', ram: '4GB', rom: '128GB', platform: 'iOS', version: 15 },\r\n        { imageUrl: './../../source/carousel/images/nokia-xr-20.png', title: 'Nokia', model: 'XR-20', brand: 'Nokia', releaseDate: 'Oct 30, 2021', ram: '6GB', rom: '128GB', platform: 'Android', version: 11 },\r\n        { imageUrl: './../../source/carousel/images/one-plus-9-pro.png', title: 'OnePlus', model: 'OP9 Pro', brand: 'OnePlus', releaseDate: 'March 23, 2021', ram: '8GB', rom: '128GB', platform: 'OxygenOS based on Android', version: 11 },\r\n        { imageUrl: './../../source/carousel/images/samsung-s21-fe.png', title: 'Samsung', model: 'S21 FE', brand: 'Samsung', releaseDate: 'Jan 27, 2021', ram: '8GB', rom: '128GB', platform: 'Samsung One UI 4.0 based on Android', version: 12 }\r\n      ],\r\n      itemTemplate: function (e) {\r\n        return {\r\n          template: itemTemplateVue\r\n        };\r\n      }\r\n    }\r\n  },\r\n  methods: {\r\n    onNavigationClick: function (direction) {\r\n      if (direction === 'next') {\r\n        this.$refs.carouselObj.ej2Instances.next();\r\n      } else {\r\n        this.$refs.carouselObj.ej2Instances.prev();\r\n      }\r\n    },\r\n    onIndicatorClick: function (index) {\r\n      this.$refs.carouselObj.ej2Instances.selectedIndex = index;\r\n      this.$refs.carouselObj.ej2Instances.dataBind();\r\n    },\r\n    onPlayPauseClick: function () {\r\n      setTimeout(() => {\r\n        this.$refs.carouselObj.ej2Instances.autoPlay = !this.$refs.playPause.ej2Instances.element.classList.contains('e-active');\r\n        this.$refs.carouselObj.ej2Instances.dataBind();\r\n        this.$refs.playPause.ej2Instances.iconCss = this.$refs.playPause.ej2Instances.element.classList.contains('e-active') ? 'e-icons e-play' : 'e-icons e-pause';\r\n        this.$refs.playPause.ej2Instances.dataBind();\r\n      });\r\n    },\r\n    onSlideChange: function (args) {\r\n      var indicators = [].slice.call(document.querySelectorAll('.indicator'));\r\n      Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])(indicators, 'active-indicator');\r\n      Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([indicators[args.nextIndex]], 'active-indicator');\r\n    }\r\n  }\r\n}));\r\n\n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/overview/App.vue?vue&type=template&id=54439e76&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/overview/App.vue?vue&type=template&id=54439e76& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section overview-carousel-section\"},[_c('div',{staticClass:\"col-lg-12\"},[_c('div',{staticClass:\"carousel-sample\"},[_c('div',{staticStyle:{\"height\":\"calc(100% - 4rem)\"}},[_c('div',{staticClass:\"carousel-content\"},[_c('div',{staticClass:\"carousel-navigations\"},[_c('ejs-button',{staticClass:\"carousel-navigation\",attrs:{\"id\":\"previousBtn\",\"title\":\"Previous\",\"cssClass\":\"e-flat e-round\",\"iconCss\":\"e-icons e-arrow-left\"},nativeOn:{\"click\":function($event){return _vm.onNavigationClick('prev')}}})],1),_vm._v(\" \"),_c('ejs-carousel',{ref:\"carouselObj\",attrs:{\"cssClass\":\"overview-carousel\",\"width\":\"calc(100% - 10rem)\",\"buttonsVisibility\":\"Hidden\",\"showIndicators\":false,\"itemTemplate\":_vm.itemTemplate,\"dataSource\":_vm.carouselData,\"slideChanging\":_vm.onSlideChange}}),_vm._v(\" \"),_c('div',{staticClass:\"carousel-navigations\"},[_c('ejs-button',{staticClass:\"carousel-navigation\",attrs:{\"id\":\"nextBtn\",\"title\":\"Next\",\"cssClass\":\"e-flat e-round\",\"iconCss\":\"e-icons e-arrow-right\"},nativeOn:{\"click\":function($event){return _vm.onNavigationClick('next')}}})],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)],1)]),_vm._v(\" \"),_c('div',{staticStyle:{\"height\":\"4rem\"}},[_c('div',{staticClass:\"carousel-footer\"},[_c('div',{staticClass:\"indicator-container\"},[_c('ejs-button',{staticClass:\"indicator active-indicator\",attrs:{\"cssClass\":\"e-flat e-round\"},nativeOn:{\"click\":function($event){return _vm.onIndicatorClick(0)}}}),_vm._v(\" \"),_c('ejs-button',{staticClass:\"indicator\",attrs:{\"cssClass\":\"e-flat e-round\"},nativeOn:{\"click\":function($event){return _vm.onIndicatorClick(1)}}}),_vm._v(\" \"),_c('ejs-button',{staticClass:\"indicator\",attrs:{\"cssClass\":\"e-flat e-round\"},nativeOn:{\"click\":function($event){return _vm.onIndicatorClick(2)}}}),_vm._v(\" \"),_c('ejs-button',{staticClass:\"indicator\",attrs:{\"cssClass\":\"e-flat e-round\"},nativeOn:{\"click\":function($event){return _vm.onIndicatorClick(3)}}}),_vm._v(\" \"),_c('ejs-button',{staticClass:\"indicator\",attrs:{\"cssClass\":\"e-flat e-round\"},nativeOn:{\"click\":function($event){return _vm.onIndicatorClick(4)}}})],1),_vm._v(\" \"),_c('div',{staticClass:\"button-container\"},[_c('ejs-button',{ref:\"playPause\",attrs:{\"id\":\"playPauseBtn\",\"cssClass\":\"e-flat e-round play-button\",\"iconCss\":\"e-icons e-pause\",\"isToggle\":\"true\"},nativeOn:{\"click\":function($event){return _vm.onPlayPauseClick.apply(null, arguments)}}})],1)])])]),_vm._v(\" \"),_vm._m(2)])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n                This sample demonstrates the overview of the \"),_c('strong',[_vm._v(\"Vue Carousel\")]),_vm._v(\" component and customizing it with\\n                external navigators.\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n              The \"),_c('code',[_vm._v(\"Vue Carousel\")]),_vm._v(\" component is commonly used as a slideshow of images and contents. In this demo,\\n              the external navigators and indicators are rendered outside the carousel by hiding the default navigators and\\n              indicators using \"),_c('code',[_vm._v(\"buttonsVisibility\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"showIndicators\")]),_vm._v(\" properties.The slide items are rendered using\\n              \"),_c('code',[_vm._v(\"dataSource\")]),_vm._v(\" and customized using \"),_c('code',[_vm._v(\"itemTemplate\")]),_vm._v(\".\\n            \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n              The external navigation of slide items is handled using public methods \"),_c('code',[_vm._v(\"prev\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"next\")]),_vm._v(\" and\\n              changing \"),_c('code',[_vm._v(\"selectedIndex\")]),_vm._v(\" property.\\n            \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n              More information about Vue Carousel component can be found in this \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/vue/carousel/getting-started/\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"source_link\"}},[_vm._v(\"Source:  \\n      \"),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{\"href\":\"https://store.google.com/?hl=en-GB\",\"target\":\"_blank\"}},[_vm._v(\"https://store.google.com\")])])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"href\":\"https://www.apple.com/in/iphone-13-pro/\",\"target\":\"_blank\"}},[_vm._v(\"https://www.apple.com\")])])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"href\":\"https://www.nokia.com/phones/en_in/nokia-xr-20?sku=VMA750B9FI1CN0\",\"target\":\"_blank\"}},[_vm._v(\"https://www.nokia.com\")])])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"href\":\"https://www.oneplus.in/oneplus-9rt\",\"target\":\"_blank\"}},[_vm._v(\"https://www.oneplus.in\")])])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"href\":\"https://www.samsung.com/in/smartphones/galaxy-s21-5g/\",\"target\":\"_blank\"}},[_vm._v(\"https://www.samsung.com\")])])])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/carousel/overview/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });