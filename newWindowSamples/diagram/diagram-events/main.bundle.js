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
/******/ 		"diagram/diagram-events/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/diagram-events/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/diagram-events/App.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/diagram-events/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_d6e33716_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d6e33716&scoped=true& */ \"./Samples/diagram/diagram-events/App.vue?vue&type=template&id=d6e33716&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/diagram-events/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_d6e33716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css& */ \"./Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_d6e33716_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_d6e33716_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"d6e33716\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/diagram-events/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?");

/***/ }),

/***/ "./Samples/diagram/diagram-events/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/diagram/diagram-events/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/diagram-events/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?");

/***/ }),

/***/ "./Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d6e33716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d6e33716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d6e33716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d6e33716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_d6e33716_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?");

/***/ }),

/***/ "./Samples/diagram/diagram-events/App.vue?vue&type=template&id=d6e33716&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/diagram/diagram-events/App.vue?vue&type=template&id=d6e33716&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d6e33716_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=d6e33716&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/diagram-events/App.vue?vue&type=template&id=d6e33716&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d6e33716_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d6e33716_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?");

/***/ }),

/***/ "./Samples/diagram/diagram-events/main.js":
/*!************************************************!*\
  !*** ./Samples/diagram/diagram-events/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/diagram-events/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#diagramEventsControlSection .sb-mobile-palette[data-v-d6e33716] {\\n  width: 200px;\\n  height: 100%;\\n  float: left;\\n}\\n#diagramEventsControlSection .sb-mobile-palette-bar[data-v-d6e33716] {\\n  display: none;\\n}\\n#diagramEventsControlSection .sb-mobile-diagram[data-v-d6e33716] {\\n  width: calc(100% - 200px);\\n  height: 100%;\\n  float: left;\\n  border: 1px solid #d9dedd;\\n}\\n.material #diagramEventsControlSection #palette-space .e-accordion[data-v-d6e33716] {\\n  border: none;\\n}\\n.material #diagramEventsControlSection #palette-space[data-v-d6e33716] {\\n  border: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n@media (max-width: 550px) {\\n#diagramEventsControlSection .sb-mobile-palette[data-v-d6e33716] {\\n    z-index: 19;\\n    position: absolute;\\n    display: none;\\n    transition: transform 300ms linear, visibility 0s linear 300ms;\\n    width: 39%;\\n    height: 100%;\\n}\\n#diagramEventsControlSection .sb-mobile-palette-bar[data-v-d6e33716] {\\n    display: block;\\n    width: 100%;\\n    background: #fafafa;\\n    padding: 10px 10px;\\n    border: 0.5px solid #e0e0e0;\\n    min-height: 40px;\\n}\\n#diagramEventsControlSection .sb-mobile-diagram[data-v-d6e33716] {\\n    width: 100%;\\n    height: 100%;\\n    float: left;\\n    left: 0px;\\n}\\n#diagramEventsControlSection #palette-icon[data-v-d6e33716] {\\n    font-size: 20px;\\n}\\n}\\n#diagramEventsControlSection .sb-mobile-palette-open[data-v-d6e33716] {\\n  position: absolute;\\n  display: block;\\n  right: 15px;\\n}\\n@font-face {\\n  font-family: \\\"e-ddb-icons1\\\";\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmdC1P4gAAAcgAAAAwaGVhZBJhohMAAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAYAAAAAAHAAAAABm1heHABDgAUAAABCAAAACBuYW1lm+wy9gAAAfgAAAK1cG9zdLnsYngAAASwAAAAMAABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAgNcenF8PPPUACwQAAAAAANelrs4AAAAA16WuzgAAAAAD+AN6AAAACAACAAAAAAAAAAEAAAACAAgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAGAAAAAIAAAAAA/gDegACAAcAACUhCQEhATUhAQQC9P6G/YoBMQFF/YqGAjf+hgH0QwAAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEAEwABAAEAAAAAAAIABwAUAAEAAAAAAAMAEwAbAAEAAAAAAAQAEwAuAAEAAAAAAAUACwBBAAEAAAAAAAYAEwBMAAEAAAAAAAoALABfAAEAAAAAAAsAEgCLAAMAAQQJAAAAAgCdAAMAAQQJAAEAJgCfAAMAAQQJAAIADgDFAAMAAQQJAAMAJgDTAAMAAQQJAAQAJgD5AAMAAQQJAAUAFgEfAAMAAQQJAAYAJgE1AAMAAQQJAAoAWAFbAAMAAQQJAAsAJAGzIERpYWdyYW1fU2hhcGVzX0ZPTlRSZWd1bGFyRGlhZ3JhbV9TaGFwZXNfRk9OVERpYWdyYW1fU2hhcGVzX0ZPTlRWZXJzaW9uIDEuMERpYWdyYW1fU2hhcGVzX0ZPTlRGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAUgBlAGcAdQBsAGEAcgBEAGkAYQBnAHIAYQBtAF8AUwBoAGEAcABlAHMAXwBGAE8ATgBUAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAVgBlAHIAcwBpAG8AbgAgADEALgAwAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMABlNoYXBlcwAA) format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.e-ddb-icons1[data-v-d6e33716] {\\n  font-family: \\\"e-ddb-icons1\\\";\\n  speak: none;\\n  font-size: 16px;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-variant: normal;\\n  text-transform: none;\\n  line-height: 1;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n#diagramEventsControlSection .e-toggle-palette[data-v-d6e33716]::before {\\n  content: \\\"\\\\E700\\\";\\n}\\n#diagramEventsPropertySection .event-tracer[data-v-d6e33716] {\\n  width: 240px;\\n  height: 700px;\\n  min-height: 700px;\\n  float: left;\\n}\\n#diagramEventsPropertySection .heading[data-v-d6e33716] {\\n  color: #807f7f;\\n  font-size: 15px;\\n  height: 50px;\\n  width: 100%;\\n  border-bottom: 1px solid #d9dedd;\\n  padding: 10px;\\n}\\n#EventLog b[data-v-d6e33716] {\\n      color: #388e3c;\\n}\\nhr[data-v-d6e33716] {\\n      margin: 1px 10px 1px 0px;\\n      border-top: 1px solid #eee;\\n}\\n.property-section[data-v-d6e33716] {\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  height: 740px;\\n  padding-right: 0px;\\n}\\n#diagramEventsPropertySection .evtbtn[data-v-d6e33716] {\\n  float: right;\\n}\\n#diagramEventsPropertySection .listbox[data-v-d6e33716] {\\n  width: 100%;\\n  height: 50%;\\n}\\n#diagramEventsPropertySection .event-tracer .prop-grid[data-v-d6e33716] {\\n  width: 100%;\\n  height: 50%;\\n}\\n#diagramEventsPropertySection #EventLog[data-v-d6e33716] {\\n  height: calc(100% - 50px);\\n  padding: 15px;\\n  overflow: auto;\\n  width: 100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/diagram-events/App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,aAAa;EACb,aAAa;EACb,YAAY;CACb;AACD;EACE,cAAc;CACf;AACD;EACE,0BAA0B;EAC1B,aAAa;EACb,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,aAAa;CACd;AACD;EACE,sCAAsC;CACvC;AACD;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,cAAc;IACd,+DAA+D;IAC/D,WAAW;IACX,aAAa;CAChB;AACD;IACI,eAAe;IACf,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,4BAA4B;IAC5B,iBAAiB;CACpB;AACD;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,UAAU;CACb;AACD;IACI,gBAAgB;CACnB;CACA;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,YAAY;CACb;AACD;EACE,4BAA4B;EAC5B,+sDAA+sD;EAC/sD,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,4BAA4B;EAC5B,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,oCAAoC;EACpC,mCAAmC;CACpC;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,iCAAiC;EACjC,cAAc;CACf;AACD;MACM,eAAe;CACpB;AACD;MACM,yBAAyB;MACzB,2BAA2B;CAChC;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,YAAY;CACb;AACD;EACE,YAAY;EACZ,YAAY;CACb;AACD;EACE,0BAA0B;EAC1B,cAAc;EACd,eAAe;EACf,YAAY;CACb\",\"file\":\"App.vue?vue&type=style&index=0&id=d6e33716&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#diagramEventsControlSection .sb-mobile-palette[data-v-d6e33716] {\\n  width: 200px;\\n  height: 100%;\\n  float: left;\\n}\\n#diagramEventsControlSection .sb-mobile-palette-bar[data-v-d6e33716] {\\n  display: none;\\n}\\n#diagramEventsControlSection .sb-mobile-diagram[data-v-d6e33716] {\\n  width: calc(100% - 200px);\\n  height: 100%;\\n  float: left;\\n  border: 1px solid #d9dedd;\\n}\\n.material #diagramEventsControlSection #palette-space .e-accordion[data-v-d6e33716] {\\n  border: none;\\n}\\n.material #diagramEventsControlSection #palette-space[data-v-d6e33716] {\\n  border: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n@media (max-width: 550px) {\\n#diagramEventsControlSection .sb-mobile-palette[data-v-d6e33716] {\\n    z-index: 19;\\n    position: absolute;\\n    display: none;\\n    transition: transform 300ms linear, visibility 0s linear 300ms;\\n    width: 39%;\\n    height: 100%;\\n}\\n#diagramEventsControlSection .sb-mobile-palette-bar[data-v-d6e33716] {\\n    display: block;\\n    width: 100%;\\n    background: #fafafa;\\n    padding: 10px 10px;\\n    border: 0.5px solid #e0e0e0;\\n    min-height: 40px;\\n}\\n#diagramEventsControlSection .sb-mobile-diagram[data-v-d6e33716] {\\n    width: 100%;\\n    height: 100%;\\n    float: left;\\n    left: 0px;\\n}\\n#diagramEventsControlSection #palette-icon[data-v-d6e33716] {\\n    font-size: 20px;\\n}\\n}\\n#diagramEventsControlSection .sb-mobile-palette-open[data-v-d6e33716] {\\n  position: absolute;\\n  display: block;\\n  right: 15px;\\n}\\n@font-face {\\n  font-family: \\\"e-ddb-icons1\\\";\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmdC1P4gAAAcgAAAAwaGVhZBJhohMAAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAYAAAAAAHAAAAABm1heHABDgAUAAABCAAAACBuYW1lm+wy9gAAAfgAAAK1cG9zdLnsYngAAASwAAAAMAABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAgNcenF8PPPUACwQAAAAAANelrs4AAAAA16WuzgAAAAAD+AN6AAAACAACAAAAAAAAAAEAAAACAAgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAGAAAAAIAAAAAA/gDegACAAcAACUhCQEhATUhAQQC9P6G/YoBMQFF/YqGAjf+hgH0QwAAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEAEwABAAEAAAAAAAIABwAUAAEAAAAAAAMAEwAbAAEAAAAAAAQAEwAuAAEAAAAAAAUACwBBAAEAAAAAAAYAEwBMAAEAAAAAAAoALABfAAEAAAAAAAsAEgCLAAMAAQQJAAAAAgCdAAMAAQQJAAEAJgCfAAMAAQQJAAIADgDFAAMAAQQJAAMAJgDTAAMAAQQJAAQAJgD5AAMAAQQJAAUAFgEfAAMAAQQJAAYAJgE1AAMAAQQJAAoAWAFbAAMAAQQJAAsAJAGzIERpYWdyYW1fU2hhcGVzX0ZPTlRSZWd1bGFyRGlhZ3JhbV9TaGFwZXNfRk9OVERpYWdyYW1fU2hhcGVzX0ZPTlRWZXJzaW9uIDEuMERpYWdyYW1fU2hhcGVzX0ZPTlRGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAUgBlAGcAdQBsAGEAcgBEAGkAYQBnAHIAYQBtAF8AUwBoAGEAcABlAHMAXwBGAE8ATgBUAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAVgBlAHIAcwBpAG8AbgAgADEALgAwAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMABlNoYXBlcwAA) format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.e-ddb-icons1[data-v-d6e33716] {\\n  font-family: \\\"e-ddb-icons1\\\";\\n  speak: none;\\n  font-size: 16px;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-variant: normal;\\n  text-transform: none;\\n  line-height: 1;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n#diagramEventsControlSection .e-toggle-palette[data-v-d6e33716]::before {\\n  content: \\\"\\\\e700\\\";\\n}\\n#diagramEventsPropertySection .event-tracer[data-v-d6e33716] {\\n  width: 240px;\\n  height: 700px;\\n  min-height: 700px;\\n  float: left;\\n}\\n#diagramEventsPropertySection .heading[data-v-d6e33716] {\\n  color: #807f7f;\\n  font-size: 15px;\\n  height: 50px;\\n  width: 100%;\\n  border-bottom: 1px solid #d9dedd;\\n  padding: 10px;\\n}\\n#EventLog b[data-v-d6e33716] {\\n      color: #388e3c;\\n}\\nhr[data-v-d6e33716] {\\n      margin: 1px 10px 1px 0px;\\n      border-top: 1px solid #eee;\\n}\\n.property-section[data-v-d6e33716] {\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  height: 740px;\\n  padding-right: 0px;\\n}\\n#diagramEventsPropertySection .evtbtn[data-v-d6e33716] {\\n  float: right;\\n}\\n#diagramEventsPropertySection .listbox[data-v-d6e33716] {\\n  width: 100%;\\n  height: 50%;\\n}\\n#diagramEventsPropertySection .event-tracer .prop-grid[data-v-d6e33716] {\\n  width: 100%;\\n  height: 50%;\\n}\\n#diagramEventsPropertySection #EventLog[data-v-d6e33716] {\\n  height: calc(100% - 50px);\\n  padding: 15px;\\n  overflow: auto;\\n  width: 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/diagram-events/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/diagram-events/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SymbolPalettePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__[\"ListViewPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"ButtonPlugin\"]);\n\nlet diagramInstance;\n\nlet basicShapes = [\n  { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' } },\n  { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' } },\n  { id: 'Parallelogram', shape: { type: 'Basic', shape: 'Parallelogram' } },\n  { id: 'Triangle', shape: { type: 'Basic', shape: 'Triangle' } },\n  { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' } },\n  { id: 'Pentagon', shape: { type: 'Basic', shape: 'Pentagon' } },\n  { id: 'Cylinder', shape: { type: 'Basic', shape: 'Cylinder' } },\n  { id: 'Plus', shape: { type: 'Basic', shape: 'Plus' } },\n  { id: 'Heptagon', shape: { type: 'Basic', shape: 'Heptagon' } },\n  { id: 'Octagon', shape: { type: 'Basic', shape: 'Octagon' } },\n  { id: 'Trapezoid', shape: { type: 'Basic', shape: 'Trapezoid' } },\n  { id: 'Decagon', shape: { type: 'Basic', shape: 'Decagon' } },\n  { id: 'RightTriangle', shape: { type: 'Basic', shape: 'RightTriangle' } },\n  { id: 'Diamond', shape: { type: 'Basic', shape: 'Diamond' } },\n  { id: 'Star', shape: { type: 'Basic', shape: 'Star' } }\n];\n\nlet connectorSymbols = [\n  {\n    id: 'Link1', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },\n    targetDecorator: { shape: 'Arrow', style: {strokeColor: \"#757575\", fill: \"#757575\"} }, style: { strokeWidth: 1, strokeColor: \"#757575\" }\n  },\n  {\n    id: 'link3', type: 'Orthogonal', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },\n    style: { strokeWidth: 1, strokeColor: \"#757575\" }, targetDecorator: { shape: 'None' }\n  },\n  {\n    id: 'Link21', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },\n    targetDecorator: { shape: 'Arrow', style: {strokeColor: \"#757575\", fill: \"#757575\"} }, style: { strokeWidth: 1, strokeColor: \"#757575\" }\n  },\n  {\n    id: 'link23', type: 'Straight', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },\n    style: { strokeWidth: 1, strokeColor: \"#757575\" }, targetDecorator: { shape: 'None' }\n  },\n  {\n    id: 'link33', type: 'Bezier', sourcePoint: { x: 0, y: 0 }, targetPoint: { x: 60, y: 60 },\n    style: { strokeWidth: 1, strokeColor: \"#757575\" }, targetDecorator: { shape: 'None' }\n  },\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      // listview data\n      data: [\n        { text: 'Drag enter', id: 'dragEnter' },\n        { text: 'Drag leave', id: 'dragLeave' },\n        { text: 'Drag over', id: 'dragOver' },\n        { text: 'Click', id: 'click', isChecked: true },\n        { text: 'History change', id: 'historyChange', isChecked: true },\n        { text: 'Double click', id: 'doubleClick' },\n        { text: 'Text edit', id: 'textEdit', isChecked: true },\n        { text: 'Scroll change', id: 'scrollChange' },\n        { text: 'Selection change', id: 'selectionChange', isChecked: true },\n        { text: 'Size change', id: 'sizeChange', isChecked: true },\n        { text: 'Connection change', id: 'connectionChange', isChecked: true },\n        { text: 'SourcePoint change', id: 'sourcePointChange' },\n        { text: 'TargetPoint change', id: 'targetPointChange' },\n        { text: 'Position change', id: 'positionChange', isChecked: true },\n        { text: 'Rotate change', id: 'rotateChange', isChecked: true },\n        { text: 'Collection change', id: 'collectionChange', isChecked: true },\n        { text: 'Mouse enter', id: 'mouseEnter' },\n        { text: 'Mouse leave', id: 'mouseLeave' },\n        { text: 'Mouse over', id: 'mouseOver' },\n        { text: 'Context menu open', id: 'contextMenuOpen' },\n        { text: 'Context menu before item render', id: 'contextMenuBeforeItemRender' },\n        { text: 'Context menu click', id: 'contextMenuClick' }\n      ],\n\n      //Initializes diagram control\n      width: \"100%\",\n      height: 700,\n      snapSettings: { constraints: 0 },\n      contextMenu: { show: true },\n\n      //diagram events\n      dragEnter: (args) => {\n        getEventDetails(args);\n      },\n      dragLeave: (args) => {\n        getEventDetails(args);\n      },\n      dragOver: (args) => {\n        if (args.target) {\n          getEventDetails(args);\n        }\n      },\n      click: (args) => {\n        getEventDetails(args);\n      },\n      historyChange: (args) => {\n        getEventDetails(args);\n      },\n      doubleClick: (args) => {\n        getEventDetails(args);\n      },\n      textEdit: (args) => {\n        getEventDetails(args);\n      },\n      scrollChange: (args) => {\n        getEventDetails(args);\n      },\n      selectionChange: (args) => {\n        getEventDetails(args);\n      },\n      sizeChange: (args) => {\n        getEventDetails(args);\n      },\n      connectionChange: (args) => {\n        getEventDetails(args);\n      },\n      sourcePointChange: (args) => {\n        getEventDetails(args);\n      },\n      targetPointChange: (args) => {\n        getEventDetails(args);\n      },\n      propertyChange: (args) => {\n        getEventDetails(args);\n      },\n      positionChange: (args) => {\n        getEventDetails(args);\n      },\n      rotateChange: (args) => {\n        getEventDetails(args);\n      },\n      collectionChange: (args) => {\n        getEventDetails(args);\n      },\n      mouseEnter: (args) => {\n        getEventDetails(args);\n      },\n      mouseLeave: (args) => {\n        getEventDetails(args);\n      },\n      mouseOver: (args) => {\n        getEventDetails(args);\n      },\n      contextMenuOpen: (args) => {\n        getEventDetails(args);\n      },\n      contextMenuBeforeItemRender: (args) => {\n        let listView = document.getElementById('listview-def');  \n        let listViewComponent = listView.ej2_instances ? listView.ej2_instances[0]: null;\n        if(listViewComponent) {          \n         getEventDetails(args);\n        }\n      },\n      contextMenuClick: (args) => {\n        getEventDetails(args);\n      },\n      // Initialize palette\n      expandMode: \"Multiple\",\n      palettes: [\n        {\n          id: \"basic\",\n          expanded: true,\n          symbols: basicShapes,\n          iconCss: \"shapes\",\n          title: \"Basic Shapes\"\n        },\n        {\n          id: \"connectors\",\n          expanded: true,\n          symbols: connectorSymbols,\n          iconCss: \"shapes\",\n          title: \"Connectors\"\n        }\n      ],\n      palettewidth: \"100%\",\n      paletteheight: \"700px\",\n      palettegetNodeDefaults: (symbol) => {\n        symbol.style = {strokeColor: \"#757575\"}\n      },\n      symbolHeight: 60,\n      symbolWidth: 60,\n      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },\n      getSymbolInfo: (symbol) => {\n        return { fit: true };\n      }\n    };\n  },\n  provide: {\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramContextMenu\"]]\n  },\n  mounted: function() {\n    diagramInstance = this.$refs.diagramControl.ej2Instances;\n    let obj = document.getElementById(\"clearbtn\");\n    //Click Event for Appearance of the layout.\n    clearEventLog();\n    obj.onclick = (args) => {\n      clearEventLog();\n    }\n  }\n}));\n\nfunction clearEventLog() {\n  let data = document.getElementById('EventLog');\n  data.innerHTML = '';\n}\n\nfunction getEventDetails(args) {\n  if (document.getElementById('listview-def') && (document.getElementById('listview-def')).ej2_instances !== null) {\n    let listView = document.getElementById('listview-def');  \n    let listViewComponent = listView.ej2_instances[0];\n    let selectedItems = listViewComponent.getSelectedItems();\n    if (selectedItems.data.length > 0) {\n      let elementName = getName(selectedItems, args);\n      if (elementName) {\n        eventInformation(args);\n      }\n    } else {\n      eventInformation(args);\n    }\n   }\n}\n\nfunction getName(selectedItems, args) {\n  for (let i = 0; i < selectedItems.data.length; i++) {\n    let eventName = selectedItems.data[i].id;\n    if (eventName === args.name) {\n      return true;\n    }\n  }\n  return false;\n}\n\n// tslint:disable-next-line:max-func-body-length\nfunction eventInformation(args) {\n  let span = document.createElement('span');\n  span.innerHTML = 'Diagram ' + args.name.bold() + ' event called' + '<hr>';\n  let log = document.getElementById('EventLog');\n  log.insertBefore(span, log.firstChild);\n}\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/diagram-events/App.vue?vue&type=template&id=d6e33716&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/diagram-events/App.vue?vue&type=template&id=d6e33716&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"content-wrapper\",\n          staticStyle: { width: \"100%\", background: \"white\" },\n          attrs: { id: \"diagramEventsControlSection\" }\n        },\n        [\n          _c(\n            \"div\",\n            {\n              staticClass: \"sb-mobile-palette\",\n              attrs: { id: \"palette-space\" }\n            },\n            [\n              _c(\"ejs-symbolpalette\", {\n                attrs: {\n                  id: \"symbolpalette\",\n                  expandMode: _vm.expandMode,\n                  palettes: _vm.palettes,\n                  width: _vm.palettewidth,\n                  height: _vm.paletteheight,\n                  getSymbolInfo: _vm.getSymbolInfo,\n                  symbolMargin: _vm.symbolMargin,\n                  symbolHeight: _vm.symbolHeight,\n                  symbolWidth: _vm.symbolWidth,\n                  getNodeDefaults: _vm.palettegetNodeDefaults\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"sb-mobile-diagram\",\n              attrs: { id: \"diagram-space\" }\n            },\n            [\n              _c(\"ejs-diagram\", {\n                ref: \"diagramControl\",\n                attrs: {\n                  id: \"diagram\",\n                  width: \"100%\",\n                  height: \"700px\",\n                  contextMenuSettings: _vm.contextMenu,\n                  snapSettings: _vm.snapSettings,\n                  dragEnter: _vm.dragEnter,\n                  dragLeave: _vm.dragLeave,\n                  dragOver: _vm.dragOver,\n                  click: _vm.click,\n                  historyChange: _vm.historyChange,\n                  doubleClick: _vm.doubleClick,\n                  textEdit: _vm.textEdit,\n                  scrollChange: _vm.scrollChange,\n                  selectionChange: _vm.selectionChange,\n                  sizeChange: _vm.sizeChange,\n                  connectionChange: _vm.connectionChange,\n                  sourcePointChange: _vm.sourcePointChange,\n                  targetPointChange: _vm.targetPointChange,\n                  propertyChange: _vm.propertyChange,\n                  positionChange: _vm.positionChange,\n                  rotateChange: _vm.rotateChange,\n                  collectionChange: _vm.collectionChange,\n                  mouseEnter: _vm.mouseEnter,\n                  mouseLeave: _vm.mouseLeave,\n                  mouseOver: _vm.mouseOver,\n                  contextMenuOpen: _vm.contextMenuOpen,\n                  contextMenuBeforeItemRender: _vm.contextMenuBeforeItemRender,\n                  contextMenuClick: _vm.contextMenuClick\n                }\n              })\n            ],\n            1\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticStyle: { height: \"100%\", border: \"1px solid #e0e0e0\" },\n          attrs: { id: \"diagramEventsPropertySection\" }\n        },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"listbox\" },\n            [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"ejs-listview\", {\n                attrs: {\n                  id: \"listview-def\",\n                  dataSource: _vm.data,\n                  showCheckBox: \"true\",\n                  height: \"calc(100% - 40px)\"\n                }\n              })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"prop-grid content\",\n              staticStyle: { height: \"50%\", \"border-top\": \"1px solid #e0e0e0\" }\n            },\n            [\n              _c(\"div\", { staticClass: \"heading\" }, [\n                _c(\n                  \"span\",\n                  {\n                    staticStyle: {\n                      display: \"inline-block\",\n                      \"margin-top\": \"5px\"\n                    }\n                  },\n                  [_vm._v(\"Event Trace\")]\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"div\",\n                  { staticClass: \"evtbtn\" },\n                  [\n                    _c(\"ejs-button\", { attrs: { id: \"clearbtn\" } }, [\n                      _vm._v(\"Clear\")\n                    ])\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { attrs: { id: \"EventLog\" } })\n            ]\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"heading\", staticStyle: { height: \"40px\" } },\n      [_c(\"span\", [_vm._v(\"Client-side events\")])]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample visualize what are the client side events are available in the diagram.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       Diagram events are the actions that can be detected by \"\n        ),\n        _c(\"code\", [_vm._v(\"JavaScript\")]),\n        _vm._v(\n          \" and the event argument are the information\\n  about the event that has occurred. Some time we want to execute some JavaScript when and event occurs, such as when the\\n  user clicks on the node. We can achieve this scenario using \"\n        ),\n        _c(\"code\", [_vm._v(\"click\")]),\n        _vm._v(\n          \" event of the diagram. So, in this shows\\n  how to hook all the diagram events and how to handle its \"\n        ),\n        _c(\"code\", [_vm._v(\"arguments\")]),\n        _vm._v(\".\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/diagram-events/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });