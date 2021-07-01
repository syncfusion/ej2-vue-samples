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
/******/ 		"diagram/uml-activity/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/uml-activity/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/uml-activity/App.vue":
/*!**********************************************!*\
  !*** ./Samples/diagram/uml-activity/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_98aa23ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=98aa23ec&scoped=true& */ \"./Samples/diagram/uml-activity/App.vue?vue&type=template&id=98aa23ec&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/uml-activity/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_98aa23ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css& */ \"./Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_98aa23ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_98aa23ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"98aa23ec\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/uml-activity/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-activity/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/diagram/uml-activity/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-activity/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_98aa23ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_98aa23ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_98aa23ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_98aa23ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_98aa23ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-activity/App.vue?vue&type=template&id=98aa23ec&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/diagram/uml-activity/App.vue?vue&type=template&id=98aa23ec&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_98aa23ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=98aa23ec&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-activity/App.vue?vue&type=template&id=98aa23ec&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_98aa23ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_98aa23ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?");

/***/ }),

/***/ "./Samples/diagram/uml-activity/main.js":
/*!**********************************************!*\
  !*** ./Samples/diagram/uml-activity/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/uml-activity/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#umlActivityDiagram .sb-mobile-palette[data-v-98aa23ec] {\\n    width: 210px;\\n    height: 100%;\\n    float: left;\\n}\\n#umlActivityDiagram .sb-mobile-palette-bar[data-v-98aa23ec] {\\n    display: none;\\n}\\n#umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n    width: calc(100% - 212px);\\n    height: 100%;\\n    float: left;\\n    border: 1px solid rgba(0, 0, 0, 0.12);\\n    border-left: none;\\n}\\n.container-fluid[data-v-98aa23ec] {\\n    padding-bottom: 15px;\\n}\\n@media (max-width: 550px) {\\n#umlActivityDiagram .sb-mobile-palette[data-v-98aa23ec] {\\n        z-index: 19;\\n        position: absolute;\\n        display: none;\\n        transition: transform 300ms linear, visibility 0s linear 300ms;\\n        width: 39%;\\n        height: 100%;\\n}\\n#umlActivityDiagram .sb-mobile-palette-bar[data-v-98aa23ec] {\\n        display: block;\\n        width: 100%;\\n        background: #fafafa;\\n        padding: 10px 10px;\\n        border: 0.5px solid #e0e0e0;\\n        min-height: 40px;\\n}\\n#umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n        width: 100%;\\n        height: 100%;\\n        float: left;\\n        left: 0px;\\n}\\n#palette-icon[data-v-98aa23ec] {\\n        font-size: 20px;\\n}\\n}\\n#umlActivityDiagram .sb-mobile-palette-open[data-v-98aa23ec] {\\n    position: absolute;\\n    display: block;\\n    right: 15px;\\n}\\n@font-face {\\n    font-family: 'e-ddb-icons1';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmdC1P4gAAAcgAAAAwaGVhZBJhohMAAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAYAAAAAAHAAAAABm1heHABDgAUAAABCAAAACBuYW1lm+wy9gAAAfgAAAK1cG9zdLnsYngAAASwAAAAMAABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAgNcenF8PPPUACwQAAAAAANelrs4AAAAA16WuzgAAAAAD+AN6AAAACAACAAAAAAAAAAEAAAACAAgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAGAAAAAIAAAAAA/gDegACAAcAACUhCQEhATUhAQQC9P6G/YoBMQFF/YqGAjf+hgH0QwAAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEAEwABAAEAAAAAAAIABwAUAAEAAAAAAAMAEwAbAAEAAAAAAAQAEwAuAAEAAAAAAAUACwBBAAEAAAAAAAYAEwBMAAEAAAAAAAoALABfAAEAAAAAAAsAEgCLAAMAAQQJAAAAAgCdAAMAAQQJAAEAJgCfAAMAAQQJAAIADgDFAAMAAQQJAAMAJgDTAAMAAQQJAAQAJgD5AAMAAQQJAAUAFgEfAAMAAQQJAAYAJgE1AAMAAQQJAAoAWAFbAAMAAQQJAAsAJAGzIERpYWdyYW1fU2hhcGVzX0ZPTlRSZWd1bGFyRGlhZ3JhbV9TaGFwZXNfRk9OVERpYWdyYW1fU2hhcGVzX0ZPTlRWZXJzaW9uIDEuMERpYWdyYW1fU2hhcGVzX0ZPTlRGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAUgBlAGcAdQBsAGEAcgBEAGkAYQBnAHIAYQBtAF8AUwBoAGEAcABlAHMAXwBGAE8ATgBUAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAVgBlAHIAcwBpAG8AbgAgADEALgAwAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMABlNoYXBlcwAA) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.e-ddb-icons1[data-v-98aa23ec] {\\n    font-family: 'e-ddb-icons1';\\n    speak: none;\\n    font-size: 16px;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: 1;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n.e-toggle-palette[data-v-98aa23ec]::before {\\n    content: \\\"\\\\E700\\\"\\n}\\n.material #umlActivityDiagram #palette-space .e-accordion[data-v-98aa23ec] {\\n    border: none;\\n}\\n.material #umlActivityDiagram #palette-space[data-v-98aa23ec] {\\n    border: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n.bootstrap #umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n    height: calc(100% - 17px);\\n    margin-top: 5px;\\n    border-radius: 4px;\\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n.fabric #umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/uml-activity/App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,aAAa;IACb,aAAa;IACb,YAAY;CACf;AACD;IACI,cAAc;CACjB;AACD;IACI,0BAA0B;IAC1B,aAAa;IACb,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;CACrB;AACD;IACI,qBAAqB;CACxB;AACD;AACA;QACQ,YAAY;QACZ,mBAAmB;QACnB,cAAc;QACd,+DAA+D;QAC/D,WAAW;QACX,aAAa;CACpB;AACD;QACQ,eAAe;QACf,YAAY;QACZ,oBAAoB;QACpB,mBAAmB;QACnB,4BAA4B;QAC5B,iBAAiB;CACxB;AACD;QACQ,YAAY;QACZ,aAAa;QACb,YAAY;QACZ,UAAU;CACjB;AACD;QACQ,gBAAgB;CACvB;CACA;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,YAAY;CACf;AACD;IACI,4BAA4B;IAC5B,+sDAA+sD;IAC/sD,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,4BAA4B;IAC5B,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,oCAAoC;IACpC,mCAAmC;CACtC;AACD;IACI,gBAAgB;CACnB;AACD;IACI,aAAa;CAChB;AACD;IACI,sCAAsC;CACzC;AACD;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,mBAAmB;IACnB,2CAA2C;CAC9C;AACD;IACI,2CAA2C;CAC9C\",\"file\":\"App.vue?vue&type=style&index=0&id=98aa23ec&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#umlActivityDiagram .sb-mobile-palette[data-v-98aa23ec] {\\n    width: 210px;\\n    height: 100%;\\n    float: left;\\n}\\n#umlActivityDiagram .sb-mobile-palette-bar[data-v-98aa23ec] {\\n    display: none;\\n}\\n#umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n    width: calc(100% - 212px);\\n    height: 100%;\\n    float: left;\\n    border: 1px solid rgba(0, 0, 0, 0.12);\\n    border-left: none;\\n}\\n.container-fluid[data-v-98aa23ec] {\\n    padding-bottom: 15px;\\n}\\n@media (max-width: 550px) {\\n#umlActivityDiagram .sb-mobile-palette[data-v-98aa23ec] {\\n        z-index: 19;\\n        position: absolute;\\n        display: none;\\n        transition: transform 300ms linear, visibility 0s linear 300ms;\\n        width: 39%;\\n        height: 100%;\\n}\\n#umlActivityDiagram .sb-mobile-palette-bar[data-v-98aa23ec] {\\n        display: block;\\n        width: 100%;\\n        background: #fafafa;\\n        padding: 10px 10px;\\n        border: 0.5px solid #e0e0e0;\\n        min-height: 40px;\\n}\\n#umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n        width: 100%;\\n        height: 100%;\\n        float: left;\\n        left: 0px;\\n}\\n#palette-icon[data-v-98aa23ec] {\\n        font-size: 20px;\\n}\\n}\\n#umlActivityDiagram .sb-mobile-palette-open[data-v-98aa23ec] {\\n    position: absolute;\\n    display: block;\\n    right: 15px;\\n}\\n@font-face {\\n    font-family: 'e-ddb-icons1';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj1tSfIAAAEoAAAAVmNtYXDnEOdVAAABiAAAADZnbHlmdC1P4gAAAcgAAAAwaGVhZBJhohMAAADQAAAANmhoZWEIVQQDAAAArAAAACRobXR4CAAAAAAAAYAAAAAIbG9jYQAYAAAAAAHAAAAABm1heHABDgAUAAABCAAAACBuYW1lm+wy9gAAAfgAAAK1cG9zdLnsYngAAASwAAAAMAABAAAEAAAAAFwEAAAAAAAD+AABAAAAAAAAAAAAAAAAAAAAAgABAAAAAQAAgNcenF8PPPUACwQAAAAAANelrs4AAAAA16WuzgAAAAAD+AN6AAAACAACAAAAAAAAAAEAAAACAAgAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQAAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAAQAAAAAXAQAAAAAAAABAAAAAAAABAAAAAQAAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACIAAAAEAAQAAQAA5wD//wAA5wD//wAAAAEABAAAAAEAAAAAAAAAGAAAAAIAAAAAA/gDegACAAcAACUhCQEhATUhAQQC9P6G/YoBMQFF/YqGAjf+hgH0QwAAAAAAEgDeAAEAAAAAAAAAAQAAAAEAAAAAAAEAEwABAAEAAAAAAAIABwAUAAEAAAAAAAMAEwAbAAEAAAAAAAQAEwAuAAEAAAAAAAUACwBBAAEAAAAAAAYAEwBMAAEAAAAAAAoALABfAAEAAAAAAAsAEgCLAAMAAQQJAAAAAgCdAAMAAQQJAAEAJgCfAAMAAQQJAAIADgDFAAMAAQQJAAMAJgDTAAMAAQQJAAQAJgD5AAMAAQQJAAUAFgEfAAMAAQQJAAYAJgE1AAMAAQQJAAoAWAFbAAMAAQQJAAsAJAGzIERpYWdyYW1fU2hhcGVzX0ZPTlRSZWd1bGFyRGlhZ3JhbV9TaGFwZXNfRk9OVERpYWdyYW1fU2hhcGVzX0ZPTlRWZXJzaW9uIDEuMERpYWdyYW1fU2hhcGVzX0ZPTlRGb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAUgBlAGcAdQBsAGEAcgBEAGkAYQBnAHIAYQBtAF8AUwBoAGEAcABlAHMAXwBGAE8ATgBUAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQAVgBlAHIAcwBpAG8AbgAgADEALgAwAEQAaQBhAGcAcgBhAG0AXwBTAGgAYQBwAGUAcwBfAEYATwBOAFQARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAdQBzAGkAbgBnACAAUwB5AG4AYwBmAHUAcwBpAG8AbgAgAE0AZQB0AHIAbwAgAFMAdAB1AGQAaQBvAHcAdwB3AC4AcwB5AG4AYwBmAHUAcwBpAG8AbgAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgECAQMABlNoYXBlcwAA) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.e-ddb-icons1[data-v-98aa23ec] {\\n    font-family: 'e-ddb-icons1';\\n    speak: none;\\n    font-size: 16px;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: 1;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\n.e-toggle-palette[data-v-98aa23ec]::before {\\n    content: \\\"\\\\e700\\\"\\n}\\n.material #umlActivityDiagram #palette-space .e-accordion[data-v-98aa23ec] {\\n    border: none;\\n}\\n.material #umlActivityDiagram #palette-space[data-v-98aa23ec] {\\n    border: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n.bootstrap #umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n    height: calc(100% - 17px);\\n    margin-top: 5px;\\n    border-radius: 4px;\\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n.fabric #umlActivityDiagram .sb-mobile-diagram[data-v-98aa23ec] {\\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-activity/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-activity/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_2__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_2__[\"SymbolPalettePlugin\"]);\nlet diagram;\nlet palette;\nlet isMobile;\n\n//Initializes the nodes for the diagram\nlet nodes = [\n  {\n     id: 'Start', height: 40, width: 40, offsetX: 300, offsetY: 20,\n        shape: { type: 'UmlActivity', shape: 'InitialNode' }\n  },{\n        id: 'ReceiveCall', height: 40, width: 105, offsetX: 300, offsetY: 100,\n        shape: { type: 'UmlActivity', shape: 'Action' },\n        annotations: [{ content: 'Receive Customer Call' }]\n    }, {\n        id: 'node2', height: 10, width: 70, offsetX: 300, offsetY: 170,\n        shape: { type: 'UmlActivity', shape: 'ForkNode' }\n    }, {\n        id: 'Determine', height: 40, width: 105, offsetX: 190, offsetY: 250,\n        shape: { type: 'UmlActivity', shape: 'Action' },\n        annotations: [{ content: 'Determine Type of Call' }]\n    }, {\n        id: 'Log', height: 40, width: 105, offsetX: 410, offsetY: 250,\n        shape: { type: 'UmlActivity', shape: 'Action' },\n        annotations: [{ content: 'Customer Logging a Call' }]\n    }, {\n        id: 'node5', height: 50, width: 50, offsetX: 190, offsetY: 350,\n        shape: { type: 'UmlActivity', shape: 'Decision' }\n    }, {\n        id: 'transfer_sales', height: 40, width: 105, offsetX: 100, offsetY: 450,\n        shape: { type: 'UmlActivity', shape: 'Action' },\n        annotations: [{ content: 'Transfer the call to Sales' }]\n    }, {\n        id: 'transfer_desk', height: 40, width: 105, offsetX: 280, offsetY: 450,\n        shape: { type: 'UmlActivity', shape: 'Action' },\n        annotations: [{ content: 'Transfer the call to Help Desk' }]\n    }, {\n        id: 'node8', height: 50, width: 50, offsetX: 190, offsetY: 540,\n        shape: { type: 'UmlActivity', shape: 'MergeNode' }\n    }, {\n        id: 'node9', height: 10, width: 70, offsetX: 300, offsetY: 630,\n        shape: { type: 'UmlActivity', shape: 'JoinNode' }\n    }, {\n        id: 'CloseCall', height: 40, width: 105, offsetX: 300, offsetY: 710,\n        shape: { type: 'UmlActivity', shape: 'Action' },\n        annotations: [{ content: 'Close Call', margin: { left: 25, right: 25 } }]\n    }, {\n        id: 'node11', height: 40, width: 40, offsetX: 300, offsetY: 800,\n        shape: { type: 'UmlActivity', shape: 'FinalNode' }\n    }\n];\n//Initializes the connector for the diagram\nlet connectors = [\n  { id: \"connector1\", sourceID: \"Start\", targetID: \"ReceiveCall\" },\n  { id: \"connector2\", sourceID: \"ReceiveCall\", targetID: \"node2\" },\n  {\n    id: \"connector3\",\n    sourceID: \"node2\",\n    targetID: \"Determine\",\n    sourcePortID: \"port1\",\n    targetPortID: \"portTop\",\n    segments: [\n      { type: \"Orthogonal\", length: 20, direction: \"Bottom\" },\n      { type: \"Orthogonal\", length: 50, direction: \"Left\" }\n    ]\n  },\n  {\n    id: \"connector4\",\n    sourceID: \"node2\",\n    targetID: \"Log\",\n    sourcePortID: \"port2\",\n    targetPortID: \"portTop\",\n    segments: [\n      { type: \"Orthogonal\", length: 20, direction: \"Bottom\" },\n      { type: \"Orthogonal\", length: 50, direction: \"Right\" }\n    ]\n  },\n  { id: \"connector5\", sourceID: \"Determine\", targetID: \"node5\" },\n  {\n    id: \"connector6\",\n    sourceID: \"node5\",\n    targetID: \"transfer_sales\",\n    sourcePortID: \"portLeft\",\n    targetPortID: \"portTop\",\n    shape: { type: \"UmlActivity\", flow: \"Object\" },\n    annotations: [\n      {\n        id: \"connector6Label\",\n        content: \"type=New Customer\",\n        offset: 0.715,\n        style: { fill: \"white\", color: \"black\", textWrapping: \"NoWrap\" }\n      }\n    ]\n  },\n  {\n    id: \"connector7\",\n    sourceID: \"node5\",\n    targetID: \"transfer_desk\",\n    sourcePortID: \"portRight\",\n    targetPortID: \"portTop\",\n    shape: { type: \"UmlActivity\", flow: \"Object\" },\n    annotations: [\n      {\n        id: \"connector7Label\",\n        content: \"type=Existing Customer\",\n        offset: 0.75,\n        style: { fill: \"white\", color: \"black\", textWrapping: \"NoWrap\" }\n      }\n    ]\n  },\n  {\n    id: \"connector8\",\n    sourceID: \"transfer_sales\",\n    targetID: \"node8\",\n    sourcePortID: \"portBottom\",\n    targetPortID: \"portLeft\",\n    segments: [{ type: \"Orthogonal\", length: 50, direction: \"Bottom\" }]\n  },\n  {\n    id: \"connector9\",\n    sourceID: \"transfer_desk\",\n    targetID: \"node8\",\n    sourcePortID: \"portBottom\",\n    targetPortID: \"portRight\",\n    segments: [{ type: \"Orthogonal\", length: 50, direction: \"Bottom\" }]\n  },\n  {\n    id: \"connector10\",\n    sourceID: \"node8\",\n    targetID: \"node9\",\n    sourcePortID: \"portBottom\",\n    targetPortID: \"port3\"\n  },\n  {\n    id: \"connector11\",\n    sourceID: \"Log\",\n    targetID: \"node9\",\n    sourcePortID: \"portBottom\",\n    targetPortID: \"port4\",\n    segments: [\n      { type: \"Orthogonal\", length: 213, direction: \"Bottom\" },\n      { type: \"Orthogonal\", length: 50, direction: \"Left\" }\n    ]\n  },\n  { id: \"connector12\", sourceID: \"node9\", targetID: \"CloseCall\" },\n  { id: \"connector13\", sourceID: \"CloseCall\", targetID: \"node11\" }\n];\n\nlet umlActivityShapes = [\n  { id: \"Action\", shape: { type: \"UmlActivity\", shape: \"Action\" } },\n  { id: \"Decision\", shape: { type: \"UmlActivity\", shape: \"Decision\" } },\n  { id: \"MergeNode\", shape: { type: \"UmlActivity\", shape: \"MergeNode\" } },\n  { id: \"InitialNode\", shape: { type: \"UmlActivity\", shape: \"InitialNode\" } },\n  { id: \"FinalNode\", shape: { type: \"UmlActivity\", shape: \"FinalNode\" } },\n  { id: \"ForkNode\", shape: { type: \"UmlActivity\", shape: \"ForkNode\" } },\n  { id: \"JoinNode\", shape: { type: \"UmlActivity\", shape: \"JoinNode\" } },\n  { id: \"TimeEvent\", shape: { type: \"UmlActivity\", shape: \"TimeEvent\" } },\n  {\n    id: \"AcceptingEvent\",\n    shape: { type: \"UmlActivity\", shape: \"AcceptingEvent\" }\n  },\n  { id: \"SendSignal\", shape: { type: \"UmlActivity\", shape: \"SendSignal\" } },\n  {\n    id: \"ReceiveSignal\",\n    shape: { type: \"UmlActivity\", shape: \"ReceiveSignal\" }\n  },\n  {\n    id: \"StructuredNode\",\n    shape: { type: \"UmlActivity\", shape: \"StructuredNode\" }\n  },\n  { id: \"Note\", shape: { type: \"UmlActivity\", shape: \"Note\" } }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"100%\",\n      nodes: nodes,\n      connectors: connectors,\n      snapSettings: {\n        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_2__[\"SnapConstraints\"].None\n      },\n      created: (args) => {\n        addEvents();\n      },\n      //Sets the default values of a node\n      getNodeDefaults: (obj) => {\n        let style = obj.style;\n        obj.ports = getNodePorts(obj);\n        if (obj.ports) {\n          for (var i = 0; i < obj.ports.length; i++) {\n            obj.ports[i].visibility = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_2__[\"PortVisibility\"].Hidden;\n          }\n        }\n        if (obj.id === 'Start' || obj.id === 'node2' || obj.id === 'node9' || obj.id === 'node11') {\n                style.fill = '#444';\n            }\n        style.strokeColor = '#444';\n        return obj;\n      },\n      // sets the default values of a Connector.\n      getConnectorDefaults: (obj) => {\n       if (obj && obj.id && obj.id.indexOf('connector') !== -1) {\n          obj.type = 'Orthogonal'; obj.cornerRadius = 10;\n          obj.targetDecorator = { shape: 'OpenArrow', style: { strokeColor: '#444', fill: '#444' } };\n       }\n      },\n      expandMode: \"Multiple\",\n      palettes: [\n        {\n          id: \"umlActivity\",\n          expanded: true,\n          symbols: umlActivityShapes,\n          title: \"UML Shapes\"\n        },\n        {\n          id: \"Connector\",\n          expanded: true,\n          symbols: getConnectors(),\n          title: \"Connectors\"\n        }\n      ],\n      palettewidth: \"100%\",\n      paletteheight: \"100%\",\n      symbolHeight: 60,\n      symbolWidth: 60,\n      palettegetNodeDefaults: (symbol) => {\n        if (symbol.id === \"Terminator\" || symbol.id === \"Process\") {\n          symbol.width = 80;\n          symbol.height = 40;\n        } else if (\n          symbol.id === \"Decision\" ||\n          symbol.id === \"Document\" ||\n          symbol.id === \"PreDefinedProcess\" ||\n          symbol.id === \"PaperTap\" ||\n          symbol.id === \"DirectData\" ||\n          symbol.id === \"MultiDocument\" ||\n          symbol.id === \"Data\"\n        ) {\n          symbol.width = 50;\n          symbol.height = 40;\n        } else {\n          symbol.width = 50;\n          symbol.height = 50;\n        }\n      },\n      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },\n      getSymbolInfo: (symbol) => {\n        return { fit: true };\n      }\n    };\n  },\n  mounted: function() {\n    let rect = document.getElementById('diagram-space').getBoundingClientRect();\n    let panX = (rect.width - rect.x)/ 2;\n    let diagram = this.$refs.diagramObj.ej2Instances;\n    diagram.pan(panX, 0);\n  }\n}));\n\n// create and add ports for node.\nfunction getNodePorts(obj) {\n  if (obj.id === \"node2\" || obj.id === \"node9\") {\n    let node2Ports= [\n      { id: \"port1\", offset: { x: 0.2, y: 1 } },\n      { id: \"port2\", offset: { x: 0.8, y: 1 } },\n      { id: \"port3\", offset: { x: 0.2, y: 0 } },\n      { id: \"port4\", offset: { x: 0.8, y: 0 } }\n    ];\n    return node2Ports;\n  } else {\n    let ports = [\n      { id: \"portLeft\", offset: { x: 0, y: 0.5 } },\n      { id: \"portRight\", offset: { x: 1, y: 0.5 } },\n      { id: \"portBottom\", offset: { x: 0.5, y: 1 } },\n      { id: \"portTop\", offset: { x: 0.5, y: 0 } }\n    ];\n    return ports;\n  }\n}\n\nfunction setPaletteNodeDefaults(symbol) {\n  let style = symbol.style;\n    if (symbol.id === 'JoinNode') {\n        symbol.width = 20; symbol.height = 50;\n    } else if (symbol.id === 'ForkNode') {\n        symbol.width = 50; symbol.height = 20;\n    } else if (symbol.id === 'Decision' || symbol.id === 'MergeNode') {\n        symbol.width = 50; symbol.height = 40;\n    } else {\n        symbol.width = 50; symbol.height = 50;\n    }\n    if (symbol.id === 'InitialNode' || symbol.id === 'FinalNode' || symbol.id === 'JoinNode' || symbol.id === 'ForkNode') {\n        style.fill = '#757575';\n    }\n    style.strokeColor = '#757575';\n    return symbol;\n}\n\nfunction getConnectorStyle(dashArrayed) {\n  let style = {};\n  if (dashArrayed) {\n    style = { strokeWidth: 2, strokeColor: \"#757575\", strokeDashArray: \"4 4\" };\n  } else {\n    style = { strokeWidth: 2, strokeColor: \"#757575\" };\n  }\n  return style;\n}\n\n// initializes connector symbols to the connector palette in the symbol palette\nfunction getConnectors(){\n  let sourcePoint = { x: 0, y: 0 };\n  let targetPoint = { x: 40, y: 40 };\n  let targetDecorator = {\n    shape: \"Arrow\",\n    style: { fill: \"#757575\", strokeColor: \"#757575\" }\n  };\n  let connectorSymbols = [\n    {\n      id: \"Link2\",\n      sourcePoint: sourcePoint,\n      targetPoint: targetPoint,\n      type: \"Orthogonal\",\n      style: getConnectorStyle(true),\n      targetDecorator: targetDecorator\n    },\n    {\n      id: \"Link1\",\n      sourcePoint: sourcePoint,\n      targetPoint: targetPoint,\n      type: \"Orthogonal\",\n      style: getConnectorStyle(),\n      targetDecorator: targetDecorator\n    },\n    {\n      id: \"Link3\",\n      sourcePoint: sourcePoint,\n      targetPoint: targetPoint,\n      type: \"Straight\",\n      style: getConnectorStyle(),\n      targetDecorator: targetDecorator\n    }\n  ];\n  return connectorSymbols;\n}\n\nfunction addEvents() {\n  isMobile = window.matchMedia(\"(max-width:550px)\").matches;\n  if (isMobile) {\n    let paletteIcon = document.getElementById(\n      \"palette-icon\"\n    );\n    if (paletteIcon) {\n      paletteIcon.addEventListener(\"click\", openPalette, false);\n    }\n  }\n}\n\nfunction openPalette() {\n  let paletteSpace = document.getElementById(\n    \"palette-space\"\n  );\n  isMobile = window.matchMedia(\"(max-width:550px)\").matches;\n  if (isMobile) {\n    if (!paletteSpace.classList.contains(\"sb-mobile-palette-open\")) {\n      paletteSpace.classList.add(\"sb-mobile-palette-open\");\n    } else {\n      paletteSpace.classList.remove(\"sb-mobile-palette-open\");\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/uml-activity/App.vue?vue&type=template&id=98aa23ec&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/uml-activity/App.vue?vue&type=template&id=98aa23ec&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      {\n        staticStyle: { width: \"100%\", height: \"521px\" },\n        attrs: { id: \"umlActivityDiagram\" }\n      },\n      [\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"sb-mobile-palette\", attrs: { id: \"palette-space\" } },\n          [\n            _c(\"ejs-symbolpalette\", {\n              attrs: {\n                id: \"symbolpalette\",\n                expandMode: _vm.expandMode,\n                palettes: _vm.palettes,\n                width: _vm.palettewidth,\n                height: _vm.paletteheight,\n                getNodeDefaults: _vm.palettegetNodeDefaults,\n                getSymbolInfo: _vm.getSymbolInfo,\n                symbolMargin: _vm.symbolMargin,\n                symbolHeight: _vm.symbolHeight,\n                symbolWidth: _vm.symbolWidth\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"sb-mobile-diagram\", attrs: { id: \"diagram-space\" } },\n          [\n            _c(\"ejs-diagram\", {\n              ref: \"diagramObj\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                id: \"diagram\",\n                width: _vm.width,\n                height: _vm.height,\n                nodes: _vm.nodes,\n                connectors: _vm.connectors,\n                getNodeDefaults: _vm.getNodeDefaults,\n                getConnectorDefaults: _vm.getConnectorDefaults,\n                snapSettings: _vm.snapSettings,\n                created: _vm.created\n              }\n            })\n          ],\n          1\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"sb-mobile-palette-bar\" }, [\n      _c(\"div\", {\n        staticClass: \"e-ddb-icons1 e-toggle-palette\",\n        attrs: { id: \"palette-icon\", role: \"button\" }\n      })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          This sample represents the message flow from one activity to another in customer service using built-in UML activity shapes.\\n      \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n         This example shows how to create activity shapes using diagram \"\n        ),\n        _c(\"code\", [_vm._v(\"UmlActivity\")]),\n        _vm._v(\" shapes. The \"),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\" property of the \"),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\" can be used to create \"),\n        _c(\"code\", [_vm._v(\"UmlActivity\")]),\n        _vm._v(\" nodes. The \"),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\n          \" property of the shape allows you to create UML\\n        activity shapes.\\n      \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/uml-activity/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });