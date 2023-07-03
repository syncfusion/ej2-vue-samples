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
/******/ 		"card/reveal/main": 0
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
/******/ 	deferredModules.push(["./Samples/card/reveal/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/card/reveal/App.vue":
/*!*************************************!*\
  !*** ./Samples/card/reveal/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5cf727da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5cf727da&scoped=true& */ \"./Samples/card/reveal/App.vue?vue&type=template&id=5cf727da&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/card/reveal/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5cf727da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css& */ \"./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5cf727da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5cf727da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5cf727da\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/card/reveal/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?");

/***/ }),

/***/ "./Samples/card/reveal/App.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./Samples/card/reveal/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?");

/***/ }),

/***/ "./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5cf727da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5cf727da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5cf727da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5cf727da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5cf727da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?");

/***/ }),

/***/ "./Samples/card/reveal/App.vue?vue&type=template&id=5cf727da&scoped=true&":
/*!********************************************************************************!*\
  !*** ./Samples/card/reveal/App.vue?vue&type=template&id=5cf727da&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5cf727da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5cf727da&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=template&id=5cf727da&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5cf727da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5cf727da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?");

/***/ }),

/***/ "./Samples/card/reveal/images/Tile_4.png":
/*!***********************************************!*\
  !*** ./Samples/card/reveal/images/Tile_4.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/card/images/Tile_4.png\";\n\n//# sourceURL=webpack:///./Samples/card/reveal/images/Tile_4.png?");

/***/ }),

/***/ "./Samples/card/reveal/main.js":
/*!*************************************!*\
  !*** ./Samples/card/reveal/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/card/reveal/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/card/reveal/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.card-control-section.reveal_card_layout .e-card #card_revealed .e-card-content table td[data-v-5cf727da],\\n    .card-control-section.reveal_card_layout .e-card #card_reveal .e-card-header .e-card-header-caption[data-v-5cf727da] {\\n        text-align: left\\n}\\n.material3-dark .card-control-section.reveal_card_layout .e-card .e-card-header[data-v-5cf727da],\\n    .material-dark .card-control-section.reveal_card_layout .e-card .e-card-header[data-v-5cf727da] {\\n        padding: 10px;\\n}\\n.card-control-section.reveal_card_layout .e-card #card_revealed .e-card-content table td .e-card-actions .e-card-btn[data-v-5cf727da] {\\n        background-color: inherit;\\n        border: none;\\n}\\n.tailwind-dark .card-control-section.reveal_card_layout .e-card #card_revealed .e-card-content table td .e-card-actions .e-card-btn[data-v-5cf727da] {\\n        background-color: unset;\\n        border: 1px solid #22d3ee;\\n}\\n.fluent .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .fluent-dark .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .tailwind .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .tailwind-dark .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .bootstrap5 .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .bootstrap5-dark .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before{\\n        content: \\\"\\\\E7E7\\\";\\n        font-size: 12px;\\n}\\n.fluent .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .fluent-dark .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .tailwind .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .tailwind-dark .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .bootstrap5 .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .bootstrap5-dark .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before {\\n    \\tcontent: \\\"\\\\E71C\\\";\\n}\\n.card-control-section.reveal_card_layout .row.card-layout .e-card #card_reveal.e-reveal-show[data-v-5cf727da] {\\n        display: block;\\n        height: auto;\\n        overflow: hidden;\\n}\\n.card-control-section.reveal_card_layout .row.card-layout .e-card .e-reveal-show[data-v-5cf727da] {\\n        animation: reveal-data-v-5cf727da 0.3s cubic-bezier(.8, .2, .1, 0.8);\\n}\\n.card-control-section.reveal_card_layout .row.card-layout .e-card #card_reveal.e-reveal-hide[data-v-5cf727da] {\\n        animation: hidden-data-v-5cf727da 0.3s cubic-bezier(.8, .2, .1, 0.8);\\n        transition: all 200ms;\\n        transform: translateY(0px) scale(0);\\n}\\n.card-control-section.reveal_card_layout .e-card #card_reveal[data-v-5cf727da] {\\n        display: none;\\n}\\n.card-control-section.reveal_card_layout .card-layout .e-card .e-reveal-hide[data-v-5cf727da] {\\n        display: none;\\n        height: 0;\\n        overflow: hidden;\\n}\\n@keyframes hidden-data-v-5cf727da {\\n0% {\\n            transform: translateY(-100px);\\n            display: block !important;\\n            z-index: 20;\\n}\\n10% {\\n            transform: translateY(-90px);\\n}\\n20% {\\n            transform: translateY(-80px);\\n}\\n30% {\\n            transform: translateY(-70px);\\n}\\n40% {\\n            transform: translateY(-60px);\\n}\\n50% {\\n            transform: translateY(-50px);\\n}\\n60% {\\n            transform: translateY(-40px);\\n}\\n70% {\\n            transform: translateY(-30px);\\n}\\n80% {\\n            transform: translateY(-20px);\\n}\\n90% {\\n            transform: translateY(-10px);\\n}\\n100% {\\n            transform: translateY(0px) scale(0);\\n            display: none;\\n            z-index: 0;\\n}\\n}\\n@keyframes reveal-data-v-5cf727da {\\n0% {\\n            transform: translateY(100px);\\n}\\n10% {\\n            transform: translateY(90px);\\n}\\n20% {\\n            transform: translateY(80px);\\n}\\n30% {\\n            transform: translateY(70px);\\n}\\n40% {\\n            transform: translateY(60px);\\n}\\n50% {\\n            transform: translateY(50px);\\n}\\n60% {\\n            transform: translateY(40px);\\n}\\n70% {\\n            transform: translateY(30px);\\n}\\n80% {\\n            transform: translateY(20px);\\n}\\n90% {\\n            transform: translateY(10px);\\n}\\n100% {\\n            transform: translateY(0px) scale(0);\\n}\\n}\\n.card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before {\\n        content: \\\"\\\\E7FC\\\";\\n        font-size: 12px;\\n}\\n.card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da] {\\n        -webkit-transform: rotate(-90deg);\\n        transform: rotate(-90deg);\\n        -moz-transform: rotate(-90deg);\\n        -ms-transform: rotate(-90deg);\\n}\\n.card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before {\\n        content: \\\"\\\\E984\\\";\\n}\\n.card-control-section.reveal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5cf727da] {\\n        width: 100%;\\n        padding: 10px;\\n}\\n.card-control-section.reveal_card_layout .card-layout[data-v-5cf727da] {\\n        margin: auto;\\n        max-width: 250px;\\n}\\n@media (min-width: 560px) {\\n.card-control-section.reveal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5cf727da] {\\n            width: 100%;\\n}\\n.card-control-section.reveal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6 .e-card[data-v-5cf727da] {\\n            width: 250px;\\n            margin: auto;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/youts-vue-samples_release_22.1.1/Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;QAEQ,gBAAgB;CACvB;AACD;;QAEQ,cAAc;CACrB;AACD;QACQ,0BAA0B;QAC1B,aAAa;CACpB;AACD;QACQ,wBAAwB;QACxB,0BAA0B;CACjC;AACD;;;;;;QAMQ,iBAAiB;QACjB,gBAAgB;CACvB;AACD;;;;;;KAMK,iBAAiB;CACrB;AACD;QACQ,eAAe;QACf,aAAa;QACb,iBAAiB;CACxB;AACD;QACQ,qEAAqE;CAC5E;AACD;QACQ,qEAAqE;QACrE,sBAAsB;QACtB,oCAAoC;CAC3C;AACD;QACQ,cAAc;CACrB;AACD;QACQ,cAAc;QACd,UAAU;QACV,iBAAiB;CACxB;AACD;AACA;YACY,8BAA8B;YAC9B,0BAA0B;YAC1B,YAAY;CACvB;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,6BAA6B;CACxC;AACD;YACY,oCAAoC;YACpC,cAAc;YACd,WAAW;CACtB;CACA;AACD;AACA;YACY,6BAA6B;CACxC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,4BAA4B;CACvC;AACD;YACY,oCAAoC;CAC/C;CACA;AACD;QACQ,iBAAiB;QACjB,gBAAgB;CACvB;AACD;QACQ,kCAAkC;QAClC,0BAA0B;QAC1B,+BAA+B;QAC/B,8BAA8B;CACrC;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,YAAY;QACZ,cAAc;CACrB;AACD;QACQ,aAAa;QACb,iBAAiB;CACxB;AACD;AACA;YACY,YAAY;CACvB;AACD;YACY,aAAa;YACb,aAAa;CACxB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.card-control-section.reveal_card_layout .e-card #card_revealed .e-card-content table td[data-v-5cf727da],\\n    .card-control-section.reveal_card_layout .e-card #card_reveal .e-card-header .e-card-header-caption[data-v-5cf727da] {\\n        text-align: left\\n}\\n.material3-dark .card-control-section.reveal_card_layout .e-card .e-card-header[data-v-5cf727da],\\n    .material-dark .card-control-section.reveal_card_layout .e-card .e-card-header[data-v-5cf727da] {\\n        padding: 10px;\\n}\\n.card-control-section.reveal_card_layout .e-card #card_revealed .e-card-content table td .e-card-actions .e-card-btn[data-v-5cf727da] {\\n        background-color: inherit;\\n        border: none;\\n}\\n.tailwind-dark .card-control-section.reveal_card_layout .e-card #card_revealed .e-card-content table td .e-card-actions .e-card-btn[data-v-5cf727da] {\\n        background-color: unset;\\n        border: 1px solid #22d3ee;\\n}\\n.fluent .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .fluent-dark .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .tailwind .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .tailwind-dark .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .bootstrap5 .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before,\\n    .bootstrap5-dark .card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before{\\n        content: \\\"\\\\e7e7\\\";\\n        font-size: 12px;\\n}\\n.fluent .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .fluent-dark .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .tailwind .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .tailwind-dark .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .bootstrap5 .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before,\\n    .bootstrap5-dark .card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before {\\n    \\tcontent: \\\"\\\\e71c\\\";\\n}\\n.card-control-section.reveal_card_layout .row.card-layout .e-card #card_reveal.e-reveal-show[data-v-5cf727da] {\\n        display: block;\\n        height: auto;\\n        overflow: hidden;\\n}\\n.card-control-section.reveal_card_layout .row.card-layout .e-card .e-reveal-show[data-v-5cf727da] {\\n        animation: reveal-data-v-5cf727da 0.3s cubic-bezier(.8, .2, .1, 0.8);\\n}\\n.card-control-section.reveal_card_layout .row.card-layout .e-card #card_reveal.e-reveal-hide[data-v-5cf727da] {\\n        animation: hidden-data-v-5cf727da 0.3s cubic-bezier(.8, .2, .1, 0.8);\\n        transition: all 200ms;\\n        transform: translateY(0px) scale(0);\\n}\\n.card-control-section.reveal_card_layout .e-card #card_reveal[data-v-5cf727da] {\\n        display: none;\\n}\\n.card-control-section.reveal_card_layout .card-layout .e-card .e-reveal-hide[data-v-5cf727da] {\\n        display: none;\\n        height: 0;\\n        overflow: hidden;\\n}\\n@keyframes hidden-data-v-5cf727da {\\n0% {\\n            transform: translateY(-100px);\\n            display: block !important;\\n            z-index: 20;\\n}\\n10% {\\n            transform: translateY(-90px);\\n}\\n20% {\\n            transform: translateY(-80px);\\n}\\n30% {\\n            transform: translateY(-70px);\\n}\\n40% {\\n            transform: translateY(-60px);\\n}\\n50% {\\n            transform: translateY(-50px);\\n}\\n60% {\\n            transform: translateY(-40px);\\n}\\n70% {\\n            transform: translateY(-30px);\\n}\\n80% {\\n            transform: translateY(-20px);\\n}\\n90% {\\n            transform: translateY(-10px);\\n}\\n100% {\\n            transform: translateY(0px) scale(0);\\n            display: none;\\n            z-index: 0;\\n}\\n}\\n@keyframes reveal-data-v-5cf727da {\\n0% {\\n            transform: translateY(100px);\\n}\\n10% {\\n            transform: translateY(90px);\\n}\\n20% {\\n            transform: translateY(80px);\\n}\\n30% {\\n            transform: translateY(70px);\\n}\\n40% {\\n            transform: translateY(60px);\\n}\\n50% {\\n            transform: translateY(50px);\\n}\\n60% {\\n            transform: translateY(40px);\\n}\\n70% {\\n            transform: translateY(30px);\\n}\\n80% {\\n            transform: translateY(20px);\\n}\\n90% {\\n            transform: translateY(10px);\\n}\\n100% {\\n            transform: translateY(0px) scale(0);\\n}\\n}\\n.card-control-section.reveal_card_layout .e-card .e-collapse[data-v-5cf727da]:before {\\n        content: \\\"\\\\e7fc\\\";\\n        font-size: 12px;\\n}\\n.card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da] {\\n        -webkit-transform: rotate(-90deg);\\n        transform: rotate(-90deg);\\n        -moz-transform: rotate(-90deg);\\n        -ms-transform: rotate(-90deg);\\n}\\n.card-control-section.reveal_card_layout .e-card .e-reveal-icon[data-v-5cf727da]:before {\\n        content: \\\"\\\\e984\\\";\\n}\\n.card-control-section.reveal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5cf727da] {\\n        width: 100%;\\n        padding: 10px;\\n}\\n.card-control-section.reveal_card_layout .card-layout[data-v-5cf727da] {\\n        margin: auto;\\n        max-width: 250px;\\n}\\n@media (min-width: 560px) {\\n.card-control-section.reveal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5cf727da] {\\n            width: 100%;\\n}\\n.card-control-section.reveal_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6 .e-card[data-v-5cf727da] {\\n            width: 250px;\\n            margin: auto;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/reveal/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  mounted: function() {\n    document.getElementById('showcarddata').onclick = function () {\n            var cEle = document.getElementById('card_revealed');\n            var cardEle = cEle.parentNode.parentNode;\n            var revealEle = cardEle.querySelector('#card_reveal');\n            revealEle.classList.add('e-reveal-show');\n            revealEle.classList.remove('e-reveal-hide');\n            var revealedEle = cardEle.querySelector('#card_revealed');\n            revealedEle.classList.add('e-reveal-hide');\n            revealedEle.classList.remove('e-reveal-show');\n        };\n        document.getElementById('showcarddata_icon').onclick = function () {\n            var cEle = document.getElementById('card_revealed');\n            var cardEle = cEle.parentNode.parentNode;\n            var revealEle = cardEle.querySelector('#card_reveal');\n            revealEle.classList.add('e-reveal-show');\n            revealEle.classList.remove('e-reveal-hide');\n            var revealedEle = cardEle.querySelector('#card_revealed');\n            revealedEle.classList.add('e-reveal-hide');\n            revealedEle.classList.remove('e-reveal-show');\n        };\n        document.getElementById('card-reveal_collapse').onclick = function (e) {\n            var cardEle = e.currentTarget.parentNode.parentNode.parentElement;\n            var revealEle = cardEle.querySelector('#card_reveal');\n            revealEle.classList.add('e-reveal-hide');\n            revealEle.classList.remove('e-reveal-show');\n            var revealedEle = cardEle.querySelector('#card_revealed');\n            revealedEle.classList.add('e-reveal-show');\n            revealedEle.classList.remove('e-reveal-hide');\n        };\n  }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=template&id=5cf727da&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/reveal/App.vue?vue&type=template&id=5cf727da&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass:\n          \"col-lg-12 control-section card-control-section reveal_card_layout\",\n      },\n      [\n        _c(\"div\", { staticClass: \"e-card-resize-container\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\"div\", { staticClass: \"row card-layout\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"e-card\",\n                      staticStyle: { \"text-align\": \"center\" },\n                    },\n                    [\n                      _c(\"img\", {\n                        staticClass: \"img-responsive\",\n                        attrs: {\n                          src: __webpack_require__(/*! ./images/Tile_4.png */ \"./Samples/card/reveal/images/Tile_4.png\"),\n                          alt: \"Force.com Succinctly\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\n                        \"div\",\n                        {\n                          staticStyle: { \"min-height\": \"177px\" },\n                          attrs: { id: \"card_revealed\" },\n                        },\n                        [\n                          _c(\n                            \"div\",\n                            {\n                              staticClass: \"e-card-content\",\n                              staticStyle: { \"line-height\": \"2.75em\" },\n                            },\n                            [\n                              _c(\n                                \"table\",\n                                {\n                                  staticStyle: {\n                                    width: \"100%\",\n                                    \"table-layout\": \"fixed\",\n                                  },\n                                },\n                                [\n                                  _c(\"tbody\", [\n                                    _c(\"tr\", [\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          {\n                                            staticStyle: {\n                                              \"text-align\": \"left\",\n                                              \"font-weight\": \"500\",\n                                            },\n                                          },\n                                          [_vm._v(\" Author \")]\n                                        ),\n                                      ]),\n                                      _vm._v(\" \"),\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          {\n                                            staticStyle: {\n                                              \"text-align\": \"left\",\n                                              width: \"80px\",\n                                              \"white-space\": \"nowrap\",\n                                            },\n                                          },\n                                          [_vm._v(\"Steve Fenton\")]\n                                        ),\n                                      ]),\n                                    ]),\n                                    _vm._v(\" \"),\n                                    _c(\"tr\", [\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          {\n                                            staticStyle: {\n                                              \"text-align\": \"left\",\n                                              \"font-weight\": \"500\",\n                                            },\n                                          },\n                                          [_vm._v(\"Published on\")]\n                                        ),\n                                      ]),\n                                      _vm._v(\" \"),\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          {\n                                            staticStyle: {\n                                              \"text-align\": \"left\",\n                                              \"white-space\": \"nowrap\",\n                                            },\n                                          },\n                                          [_vm._v(\"Jul 7, 2014\")]\n                                        ),\n                                      ]),\n                                    ]),\n                                    _vm._v(\" \"),\n                                    _c(\"tr\", [\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          {\n                                            staticStyle: {\n                                              \"text-align\": \"left\",\n                                              \"font-weight\": \"500\",\n                                            },\n                                          },\n                                          [_vm._v(\"Pages\")]\n                                        ),\n                                      ]),\n                                      _vm._v(\" \"),\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          {\n                                            staticStyle: {\n                                              \"text-align\": \"left\",\n                                            },\n                                          },\n                                          [_vm._v(\"82\")]\n                                        ),\n                                      ]),\n                                    ]),\n                                    _vm._v(\" \"),\n                                    _c(\"tr\", [\n                                      _c(\"td\", [\n                                        _c(\n                                          \"div\",\n                                          { staticClass: \"e-card-actions\" },\n                                          [\n                                            _c(\n                                              \"button\",\n                                              {\n                                                staticClass:\n                                                  \"e-btn e-outline e-primary\",\n                                                attrs: { id: \"showcarddata\" },\n                                              },\n                                              [\n                                                _vm._v(\n                                                  \"\\n                                                    Know More\\n                                                \"\n                                                ),\n                                              ]\n                                            ),\n                                          ]\n                                        ),\n                                      ]),\n                                      _vm._v(\" \"),\n                                      _c(\n                                        \"td\",\n                                        {\n                                          staticStyle: {\n                                            \"text-align\": \"right\",\n                                          },\n                                        },\n                                        [\n                                          _c(\n                                            \"div\",\n                                            { staticClass: \"e-card-actions\" },\n                                            [\n                                              _c(\n                                                \"button\",\n                                                {\n                                                  staticClass: \"e-card-btn\",\n                                                  attrs: {\n                                                    id: \"showcarddata_icon\",\n                                                    title:\n                                                      \"Click to see more...\",\n                                                  },\n                                                },\n                                                [\n                                                  _c(\"span\", {\n                                                    staticClass:\n                                                      \"e-btn-icon e-icons e-reveal-icon e-icon-right\",\n                                                    staticStyle: {\n                                                      margin: \"0\",\n                                                    },\n                                                  }),\n                                                ]\n                                              ),\n                                            ]\n                                          ),\n                                        ]\n                                      ),\n                                    ]),\n                                  ]),\n                                ]\n                              ),\n                            ]\n                          ),\n                        ]\n                      ),\n                      _vm._v(\" \"),\n                      _c(\n                        \"div\",\n                        {\n                          staticStyle: { \"min-height\": \"154px\" },\n                          attrs: { id: \"card_reveal\" },\n                        },\n                        [\n                          _c(\"div\", { staticClass: \"e-card-header\" }, [\n                            _c(\n                              \"div\",\n                              { staticClass: \"e-card-header-caption\" },\n                              [\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"e-card-header-title\" },\n                                  [_vm._v(\"TypeScript\")]\n                                ),\n                              ]\n                            ),\n                            _vm._v(\" \"),\n                            _c(\n                              \"div\",\n                              {\n                                attrs: {\n                                  id: \"card-reveal_collapse\",\n                                  title: \"Click to see back...\",\n                                },\n                              },\n                              [\n                                _c(\"span\", {\n                                  staticClass: \"e-icons e-collapse\",\n                                  staticStyle: { height: \"5px\" },\n                                }),\n                              ]\n                            ),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\n                            \"div\",\n                            {\n                              staticClass: \"e-card-content\",\n                              staticStyle: { \"line-height\": \"1.4em\" },\n                            },\n                            [\n                              _vm._v(\n                                \"\\n                                Microsoft has done extensive work to make JavaScript easier to use. Microsoft TypeScript extends many familiar features of\\n                                .NET programming to JavaScript.\\n                            \"\n                              ),\n                            ]\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"div\",\n                            { staticClass: \"e-card-actions e-card-vertical\" },\n                            [\n                              _c(\n                                \"a\",\n                                {\n                                  attrs: {\n                                    href: \"https://www.syncfusion.com/ebooks/typescript\",\n                                    target: \"_blank\",\n                                  },\n                                },\n                                [_vm._v(\" Go to Download \")]\n                              ),\n                            ]\n                          ),\n                        ]\n                      ),\n                    ]\n                  ),\n                ]\n              ),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"action-description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"This sample demonstrates rendering the card with reveal layouts. Hidden information of card can be revealed to see while clicking “Know more”.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"Cards in this sample have a hidden content within the DOM which is available behind the visible element.\"\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\n              \"More information about Card can be found in this\\n        \"\n            ),\n            _c(\n              \"a\",\n              {\n                attrs: {\n                  href: \"https://ej2.syncfusion.com/vue/documentation/card/getting-started/\",\n                  target: \"_blank\",\n                },\n              },\n              [_vm._v(\" documentation section\")]\n            ),\n            _vm._v(\".\"),\n          ]),\n        ]),\n      ]\n    )\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/reveal/App.vue?vue&type=style&index=0&id=5cf727da&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2fee8345\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/card/reveal/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });