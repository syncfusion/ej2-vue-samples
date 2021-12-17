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
/******/ 		"sidebar/api/main": 0
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
/******/ 	deferredModules.push(["./Samples/sidebar/api/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/sidebar/api/App.vue":
/*!*************************************!*\
  !*** ./Samples/sidebar/api/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_148053d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=148053d6& */ \"./Samples/sidebar/api/App.vue?vue&type=template&id=148053d6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/sidebar/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_148053d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_148053d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sidebar/api/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/api/App.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./Samples/sidebar/api/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/api/App.vue?vue&type=template&id=148053d6&":
/*!********************************************************************!*\
  !*** ./Samples/sidebar/api/App.vue?vue&type=template&id=148053d6& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_148053d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=148053d6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/api/App.vue?vue&type=template&id=148053d6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_148053d6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_148053d6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/api/main.js":
/*!*************************************!*\
  !*** ./Samples/sidebar/api/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sidebar/api/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/sidebar/api/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    /* content area styles */\\n /* custom code start */\\n.sidebar-api .responsive {\\n    width: 80%;\\n}\\n@media(max-width:550px) {\\n.sidebar-api .responsive {\\n        width: 100%;\\n}\\n}\\n.sidebar-api #overview,\\n.sidebar-api #properties,\\n.sidebar-api #content{\\n    padding:0 0 22px\\n}\\n.sidebar-api #text{\\n    padding:0 0 17px;\\n}\\n/* custom code end */\\n.sidebar-api .title {\\n    color: #000000;\\n    font-weight: 500;\\n    line-height: 24px;\\n    font-size: 18px;\\n    margin: 0px;\\n}\\n/* custom code start */\\nbody.ej2-new-sidebar {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\";\\n    margin: 0px;\\n    font-size: 14px;\\n}\\n/* custom code end */\\n/* End of content area styles */\\n/* property content styles */\\n.sidebar-api #types {\\n    background-color: #ffffff;\\n    border: none;\\n    border-radius: 2px;\\n}\\n.sidebar-api .inline-element.right.e-btn {\\n    color: white;\\n    border: none;\\n    width: 75px;\\n}\\n/* custom code start */\\n.sidebar-api .inline-element {\\n    display: inline-block;\\n}\\n.sidebar-api .right {\\n    float: right;\\n}\\n/* custom code end */\\n.sidebar-api .list-group-item {\\n    border: none;\\n    padding: 60px 10px 10px 45px;\\n    font-size: 14px;\\n}\\n/* custom code start */\\n.sidebar-api .center {\\n    text-align: center;\\n    display: none;\\n    font-size: 13px;\\n    font-weight: 400;\\n    margin-top: 20px;\\n}\\n.sb-content-tab .sidebar-api .center {\\n    display: block;\\n}\\n/* end of property content styles */\\n/* sidebar styles */\\n.sb-content-tab .sidebar-api #wrapper {\\n    display: none;\\n}\\n/* custom code end */\\n.sidebar-api .content {\\n    margin-bottom: 20px;\\n    overflow-y: auto;\\n}\\n.sidebar-api #wrapper #close:before {\\n    content: \\\"\\\\E945\\\";\\n}\\n.sidebar-api .title-header {\\n    text-align: center;\\n    font-size: 18px;\\n    padding: 15px;\\n}\\n.sidebar-api .sub-title {\\n    text-align: center;\\n    font-size: 16px;\\n    padding: 10px;\\n}\\n.sidebar-api .e-sidebar .title-header #close {\\n    color: #fafafa;\\n    cursor: pointer;\\n    line-height: 25px;\\n}\\n.sidebar-api .e-sidebar.e-left .title-header #close {\\n    float: right;\\n}\\n.sidebar-api .e-sidebar.e-right .title-header #close {\\n    float: left;\\n}\\n.sidebar-api #default-sidebar {\\n    background: #2196f3;\\n    color: #ffffff;\\n}\\n.sidebar-api #hamburger.menu {\\n    font-size: 25px;\\n    cursor: pointer;\\n    float: left;\\n    line-height: 50px;\\n    position: absolute;\\n    z-index: 1000;\\n}\\n.sidebar-api #hamburger.menu:before {\\n    content: '\\\\E10D';\\n}\\n.sidebar-api #hamburger.menu.e-rtl{\\n    position:relative;\\n    float: right;\\n}\\n.sidebar-api #wrapper #close:before {\\n    content: \\\"\\\\E945\\\";\\n}\\n.sidebar-api .e-sidebar .title-header #close {\\n    color: #fafafa;\\n    cursor: pointer;\\n    line-height: 25px;\\n}\\n.sidebar-api .e-sidebar.e-left .title-header #close {\\n    float: right;\\n}\\n.sidebar-api .e-sidebar.e-right .title-header #close {\\n    float: left;\\n}\\n@font-face {\\n    font-family: 'sidebar-icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMjciQ6oAAAEoAAAAVmNtYXBH1Ec8AAABsAAAAHJnbHlmKcXfOQAAAkAAAAg4aGVhZBLt+DYAAADQAAAANmhoZWEHogNsAAAArAAAACRobXR4LvgAAAAAAYAAAAAwbG9jYQukCgIAAAIkAAAAGm1heHABGQEOAAABCAAAACBuYW1lR4040wAACngAAAJtcG9zdEFgIbwAAAzoAAAArAABAAADUv9qAFoEAAAA//UD8wABAAAAAAAAAAAAAAAAAAAADAABAAAAAQAAlbrm7l8PPPUACwPoAAAAANfuWa8AAAAA1+5ZrwAAAAAD8wPzAAAACAACAAAAAAAAAAEAAAAMAQIAAwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPqAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA4QLhkANS/2oAWgPzAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAA+gAAAPoAAAD6AAAAAAAAgAAAAMAAAAUAAMAAQAAABQABABeAAAADgAIAAIABuEC4QnhD+ES4RvhkP//AADhAuEJ4QvhEuEa4ZD//wAAAAAAAAAAAAAAAAABAA4ADgAOABYAFgAYAAAAAQACAAYABAADAAgABwAKAAkABQALAAAAAAAAAB4AQABaAQYB5gJkAnoCjgKwA8oEHAAAAAIAAAAAA+oDlQAEAAoAAAEFESERCQEVCQE1AgcBZv0mAXQB5P4c/g4Cw/D+lwFpAcP+s24BTf6qbgAAAAEAAAAAA+oD6gALAAATCQEXCQEHCQEnCQF4AYgBiGP+eAGIY/54/nhjAYj+eAPr/ngBiGP+eP54YwGI/nhjAYgBiAAAAwAAAAAD6gOkAAMABwALAAA3IRUhESEVIREhFSEVA9b8KgPW/CoD1vwq6I0B64wB640AAAEAAAAAA+oD4QCaAAABMx8aHQEPDjEPAh8bIT8bNS8SPxsCAA0aGhgMDAsLCwoKCgkJCQgHBwYGBgUEBAMCAgECAwUFBggICQoLCwwMDg0GAgEBAgIDBAMIBiIdHh0cHBoZFhUSEAcFBgQDAwEB/CoBAQMDBAUGBw8SFRYYGhsbHB0cHwsJBQQEAwIBAQMEDg0NDAsLCQkJBwYGBAMCAQEBAgIDBAQFBQYGBwgICAkJCgoKCwsLDAwMGRoD4gMEBwQFBQYGBwgICAkKCgsLDAwNDQ4ODxAQEBEWFxYWFhYVFRQUExIRERAOFxMLCggIBgYFBgQMDAwNDg4QDxERERIJCQkKCQkJFRQJCQoJCQgJEhERERAPDw4NDQsMBwgFBgYICQkKDAwODw8RERMTExUUFhUWFxYWFxEQEBAPDg4NDQwMCwsKCgkICAgHBgYFBQQEBQQAAAAAAwAAAAAD8wPzAEEAZQDFAAABMx8FFREzHwYdAg8GIS8GPQI/BjM1KwEvBT0CPwUzNzMfBR0CDwUrAi8FPQI/BTMnDw8fFz8XLxcPBgI+BQQDAwMCAT8EBAMDAwIBAQIDAwMEBP7cBAQDAwMCAQECAwMDBAQ/PwQEAwMDAgEBAgMDAwQE0AUEAwMDAgEBAgMDAwQFfAUEAwMDAgEBAgMDAwQFvRsbGRcWFRMREA4LCQgFAwEBAwUHCgsOEBETFRYXGRocHR4eHyAgISIiISAgHx4eHRsbGRcWFRMREA4LCQgFAwEBAwUHCgsOEBETFRYXGRsbHR4eHyAgISIiISAgHx4eAqYBAgIDBAQE/rMBAQEDAwQEBGgEBAQDAgIBAQEBAgIDBAQEaAQEBAMDAQEB0AECAwMDBAVoBAQDAwMCAeUBAgIEAwQEaAUEAwMDAgEBAgMDAwQFaAQEAwQCAgElERMVFhcZGhwdHh4fICAhIiIhICAfHh4dGxsZFxYVExEQDgsJCAUDAQEDBQcKCw4QERMVFhcZGxsdHh4fICAhIiIhICAfHh4dHBoZFxYVExEQDgsKBwUDAQEDBQcKCw4AAAIAAAAAA9MD6QALAE8AAAEOAQcuASc+ATceAQEHBgcnJgYPAQYWHwEGFBcHDgEfAR4BPwEWHwEeATsBMjY/ATY3FxY2PwE2Ji8BNjQnNz4BLwEuAQ8BJi8BLgErASIGApsBY0tKYwICY0pLY/7WEy4nfAkRBWQEAwdqAwNqBwMEZAURCXwnLhMBDgnICg4BEy4mfQkRBGQFAwhpAwNpCAMFZAQSCH0mLhMBDgrICQ4B9UpjAgJjSkpjAgJjAZWEFB4yBAYIrggSBlIYMhhSBhIIrggFAzIfE4QJDAwJhBQeMgQGCK4IEgZSGDIYUgYSCK4IBQMyHxOECQwMAAEAAAAAAwED6gAFAAAJAicJAQEbAef+FhoBzf4zA+v+Ff4VHwHMAc0AAAAAAQAAAAADAQPqAAUAAAEXCQEHAQLlHf4zAc0a/hYD6x7+M/40HwHrAAEAAAAAA/MD8wALAAATCQEXCQE3CQEnCQENAY7+cmQBjwGPZP5yAY5k/nH+cQOP/nH+cWQBjv5yZAGPAY9k/nEBjwAAAwAAAAAD8wPzAEAAgQEBAAAlDw4rAS8dPQE/DgUVDw4BPw47AR8dBRUfHTsBPx09AS8dKwEPHQL1DQ0ODg4PDw8QEBAQERERERUUFBQTExITEREREBAPDw0ODAwLCwkJCAcGBgQEAgIBAgIEAwUFBgYHBwkICQoCygECAgQDBQUGBgcHCQgJCv3QDQ0ODg4PDw8QEBAQERERERUUFBQTExITEREREBAPDw0ODAwLCwkJCAcGBgQEAgL8fgIDBQUHCAkKCwwNDg8PERESExQUFRYWFhgXGBkZGRoaGRkZGBcYFhYWFRQUExIREQ8PDg0MCwoJCAcFBQMCAgMFBQcICQoLDA0ODw8RERITFBQVFhYWGBcYGRkZGhoZGRkYFxgWFhYVFBQTEhERDw8ODQwLCgkIBwUFAwLFCgkICQcHBgYFBQMEAgIBAgIEBAYGBwgJCQsLDAwODQ8PEBARERETEhMTFBQUFREREREQEBAQDw8PDg4ODQ31ERERERAQEBAPDw8ODg4NDQIwCgkICQcHBgYFBQMEAgIBAgIEBAYGBwgJCQsLDAwODQ8PEBARERETEhMTFBQUFRoZGRkYFxgWFhYVFBQTEhERDw8ODQwLCgkIBwUFAwICAwUFBwgJCgsMDQ4PDxEREhMUFBUWFhYYFxgZGRkaGhkZGRgXGBYWFhUUFBMSEREPDw4NDAsKCQgHBQUDAgIDBQUHCAkKCwwNDg8PERESExQUFRYWFhgXGBkZGQAAAQAAAAAD6gPqAEMAABMhHw8RDw8hLw8RPw6aAswNDgwMDAsKCggIBwUFAwIBAQIDBQUHCAgKCgsMDAwODf00DQ4MDAwLCgoICAcFBQMCAQECAwUFBwgICgoLDAwMDgPrAQIDBQUHCAgKCgsLDA0NDv00Dg0NDAsLCgoICAcFBQMCAQECAwUFBwgICgoLCwwNDQ4CzA4NDQwLCwoKCAgHBQUDAgAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAA0AAQABAAAAAAACAAcADgABAAAAAAADAA0AFQABAAAAAAAEAA0AIgABAAAAAAAFAAsALwABAAAAAAAGAA0AOgABAAAAAAAKACwARwABAAAAAAALABIAcwADAAEECQAAAAIAhQADAAEECQABABoAhwADAAEECQACAA4AoQADAAEECQADABoArwADAAEECQAEABoAyQADAAEECQAFABYA4wADAAEECQAGABoA+QADAAEECQAKAFgBEwADAAEECQALACQBayBlLWljb25zLW1ldHJvUmVndWxhcmUtaWNvbnMtbWV0cm9lLWljb25zLW1ldHJvVmVyc2lvbiAxLjBlLWljb25zLW1ldHJvRm9udCBnZW5lcmF0ZWQgdXNpbmcgU3luY2Z1c2lvbiBNZXRybyBTdHVkaW93d3cuc3luY2Z1c2lvbi5jb20AIABlAC0AaQBjAG8AbgBzAC0AbQBlAHQAcgBvAFIAZQBnAHUAbABhAHIAZQAtAGkAYwBvAG4AcwAtAG0AZQB0AHIAbwBlAC0AaQBjAG8AbgBzAC0AbQBlAHQAcgBvAFYAZQByAHMAaQBvAG4AIAAxAC4AMABlAC0AaQBjAG8AbgBzAC0AbQBlAHQAcgBvAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0AB2hvbWUtMDELQ2xvc2UtaWNvbnMHbWVudS0wMQR1c2VyB0JUX2luZm8PU2V0dGluZ19BbmRyb2lkDWNoZXZyb24tcmlnaHQMY2hldnJvbi1sZWZ0CE1UX0NsZWFyDE1UX0p1bmttYWlscwRzdG9wAAA=) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n\\n/* end of sidebar styles */\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-2E2MRSC7SP7V7IM76F2KPJPXVFW37UHSKZ2QZ3LIXAY6AYHCILIQ/Samples/sidebar/api/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA6KI,yBAAyB;CAC5B,uBAAuB;AACxB;IACI,WAAW;CACd;AACD;AACA;QACQ,YAAY;CACnB;CACA;AACD;;;IAGI,gBAAgB;CACnB;AACD;IACI,iBAAiB;CACpB;AACD,qBAAqB;AACrB;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;CACf;AACD,uBAAuB;AACvB;IACI,4EAA4E;IAC5E,YAAY;IACZ,gBAAgB;CACnB;AACD,qBAAqB;AACrB,gCAAgC;AAChC,6BAA6B;AAC7B;IACI,0BAA0B;IAC1B,aAAa;IACb,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,aAAa;IACb,YAAY;CACf;AACD,uBAAuB;AACvB;IACI,sBAAsB;CACzB;AACD;IACI,aAAa;CAChB;AACD,qBAAqB;AACrB;IACI,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;CACnB;AACD,uBAAuB;AACvB;IACI,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,eAAe;CAClB;AACD,oCAAoC;AACpC,oBAAoB;AACpB;IACI,cAAc;CACjB;AACD,qBAAqB;AACrB;IACI,oBAAoB;IACpB,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;CACjB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;CACjB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;CACrB;AACD;IACI,aAAa;CAChB;AACD;IACI,YAAY;CACf;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;CACrB;AACD;IACI,aAAa;CAChB;AACD;IACI,YAAY;CACf;AACD;IACI,6BAA6B;IAC7B,2mJAA2mJ;IAC3mJ,oBAAoB;IACpB,mBAAmB;CACtB;;AAED,2BAA2B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    /* content area styles */\\n /* custom code start */\\n.sidebar-api .responsive {\\n    width: 80%;\\n}\\n@media(max-width:550px) {\\n.sidebar-api .responsive {\\n        width: 100%;\\n}\\n}\\n.sidebar-api #overview,\\n.sidebar-api #properties,\\n.sidebar-api #content{\\n    padding:0 0 22px\\n}\\n.sidebar-api #text{\\n    padding:0 0 17px;\\n}\\n/* custom code end */\\n.sidebar-api .title {\\n    color: #000000;\\n    font-weight: 500;\\n    line-height: 24px;\\n    font-size: 18px;\\n    margin: 0px;\\n}\\n/* custom code start */\\nbody.ej2-new-sidebar {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\";\\n    margin: 0px;\\n    font-size: 14px;\\n}\\n/* custom code end */\\n/* End of content area styles */\\n/* property content styles */\\n.sidebar-api #types {\\n    background-color: #ffffff;\\n    border: none;\\n    border-radius: 2px;\\n}\\n.sidebar-api .inline-element.right.e-btn {\\n    color: white;\\n    border: none;\\n    width: 75px;\\n}\\n/* custom code start */\\n.sidebar-api .inline-element {\\n    display: inline-block;\\n}\\n.sidebar-api .right {\\n    float: right;\\n}\\n/* custom code end */\\n.sidebar-api .list-group-item {\\n    border: none;\\n    padding: 60px 10px 10px 45px;\\n    font-size: 14px;\\n}\\n/* custom code start */\\n.sidebar-api .center {\\n    text-align: center;\\n    display: none;\\n    font-size: 13px;\\n    font-weight: 400;\\n    margin-top: 20px;\\n}\\n.sb-content-tab .sidebar-api .center {\\n    display: block;\\n}\\n/* end of property content styles */\\n/* sidebar styles */\\n.sb-content-tab .sidebar-api #wrapper {\\n    display: none;\\n}\\n/* custom code end */\\n.sidebar-api .content {\\n    margin-bottom: 20px;\\n    overflow-y: auto;\\n}\\n.sidebar-api #wrapper #close:before {\\n    content: \\\"\\\\e945\\\";\\n}\\n.sidebar-api .title-header {\\n    text-align: center;\\n    font-size: 18px;\\n    padding: 15px;\\n}\\n.sidebar-api .sub-title {\\n    text-align: center;\\n    font-size: 16px;\\n    padding: 10px;\\n}\\n.sidebar-api .e-sidebar .title-header #close {\\n    color: #fafafa;\\n    cursor: pointer;\\n    line-height: 25px;\\n}\\n.sidebar-api .e-sidebar.e-left .title-header #close {\\n    float: right;\\n}\\n.sidebar-api .e-sidebar.e-right .title-header #close {\\n    float: left;\\n}\\n.sidebar-api #default-sidebar {\\n    background: #2196f3;\\n    color: #ffffff;\\n}\\n.sidebar-api #hamburger.menu {\\n    font-size: 25px;\\n    cursor: pointer;\\n    float: left;\\n    line-height: 50px;\\n    position: absolute;\\n    z-index: 1000;\\n}\\n.sidebar-api #hamburger.menu:before {\\n    content: '\\\\e10d';\\n}\\n.sidebar-api #hamburger.menu.e-rtl{\\n    position:relative;\\n    float: right;\\n}\\n.sidebar-api #wrapper #close:before {\\n    content: \\\"\\\\e945\\\";\\n}\\n.sidebar-api .e-sidebar .title-header #close {\\n    color: #fafafa;\\n    cursor: pointer;\\n    line-height: 25px;\\n}\\n.sidebar-api .e-sidebar.e-left .title-header #close {\\n    float: right;\\n}\\n.sidebar-api .e-sidebar.e-right .title-header #close {\\n    float: left;\\n}\\n@font-face {\\n    font-family: 'sidebar-icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n\\n/* end of sidebar styles */\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/api/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sidebar/api/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"SidebarPlugin\"], _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"], _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n              dataTypes: [\n              { Id: '1', Type: 'Over', value: 'Over' },\n              { Id: '2', Type: 'Push', value: 'Push' },\n              { Id: '3', Type: 'Slide', value: 'Slide' },\n              { Id: '4', Type: 'Auto', value: 'Auto' }\n              ],  \n              fields:  { id: 'Id', text: 'Type', value: 'value' },\n              position :'Left',\n              showBackdrop: false,\n              closeOnDocumentClick: false,\n              height: '220px',\n              width:  '75px',\n              waterMark: 'Select a Type',\n              index: 3,\n              type : 'Auto'\n        }\n    },\n    methods: {\n        newTabClick : function(){\n             var URL = location.href.replace(location.search, '');\n             document.getElementById('newTab').setAttribute('href', URL.split('#')[0] + 'samples/sidebar/api/index.html');\n        },\n\n        //Toggle button click event handler\n        toggleSidebar: function(){\n          this.$refs.sidebarInstance.toggle();\n        },\n        closeClick : function(){\n          this.$refs.sidebarInstance.hide();\n        },\n        openClick: function() { \n         this.$refs.sidebarInstance.show();\n        },\n    documentClick:function() {\n\n        if (this.$refs.documentClickBtn.$el.classList.contains('e-active')) {\n            this.$refs.documentClickBtn.$el.textContent = 'False';\n            //enable the closeOnDocumentClick property\n            this.closeOnDocumentClick = true;\n\n        } else {\n            this.$refs.documentClickBtn.$el.textContent = 'True';\n            //disable the closeOnDocumentClick property\n            this.closeOnDocumentClick = false;\n        }\n    },\n    onTypeChange:function() {\n        if (this.$refs.sidebarTypesBtn.$el.textContent == 'Right') {\n            this.$refs.sidebarTypesBtn.$el.textContent = 'Left';\n            this.position = 'Right';\n            document.getElementById(\"hamburger\").className += \" e-rtl\";\n        } else {\n            this.$refs.sidebarTypesBtn.$el.textContent = 'Right';\n            this.position = 'Left';\n             document.getElementById(\"hamburger\").classList.remove(\"e-rtl\");\n        }\n    },\n    backdrop: function() { \n        if (this.$refs.backdropBtn.$el.classList.contains('e-active')) {\n            this.$refs.backdropBtn.$el.textContent = 'True';\n            //enable the backdrop property\n            this.showBackdrop = false;\n\n        } else {\n            this.$refs.backdropBtn.$el.textContent = 'False';\n            //disable the backdrop property\n            this.showBackdrop = true;\n        }\n    },\n    onChange:function(args) {\n        this.type = args.value;\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/api/App.vue?vue&type=template&id=148053d6&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sidebar/api/App.vue?vue&type=template&id=148053d6& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section sidebar-api\"},[_c('div',{staticClass:\"col-lg-12 col-sm-12 col-md-12 center\"},[_vm._v(\"\\n        Click/Touch the button to view the sample\\n    \")]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-12 col-sm-12 col-md-12 center\"},[_c('a',{staticClass:\"e-btn\",attrs:{\"id\":\"newTab\",\"target\":\"_blank\"},on:{\"click\":_vm.newTabClick}},[_vm._v(\"Open in new tab\")])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"wrapper\"}},[_c('div',{staticClass:\"col-lg-12 col-sm-12 col-md-12\"},[_c('span',{staticClass:\"sidebar-icons menu\",attrs:{\"id\":\"hamburger\"},on:{\"click\":_vm.openClick}}),_vm._v(\" \"),_c('ejs-sidebar',{ref:\"sidebarInstance\",attrs:{\"id\":\"default-sidebar\",\"position\":_vm.position,\"showBackdrop\":_vm.showBackdrop,\"closeOnDocumentClick\":_vm.closeOnDocumentClick,\"type\":_vm.type}},[_c('div',{staticClass:\"title-header\"},[_c('div',{staticStyle:{\"display\":\"inline-block\"}},[_vm._v(\" Sidebar \")]),_vm._v(\" \"),_c('span',{staticClass:\"sidebar-icons\",attrs:{\"id\":\"close\"},on:{\"click\":_vm.closeClick}})]),_vm._v(\" \"),_c('div',{staticClass:\"sub-title\"},[_vm._v(\"\\n                    Place your primary content here.\\n                \")])]),_vm._v(\" \"),_c('div',{staticClass:\"list-group\"},[_c('div',{staticClass:\"list-group-item\"},[_vm._m(0),_vm._v(\" \"),_c('p',{attrs:{\"id\":\"content\"}},[_vm._v(\"The sidebar component is a collapsible side content that will be displayed along with the primary content area.\\n                    \")]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_c('div',{staticClass:\"inline-element responsive\"},[_c('div',{attrs:{\"id\":\"text\"}},[_vm._m(2),_vm._v(\" \"),_c('ejs-button',{staticClass:\"inline-element right\",attrs:{\"id\":\"toggleSidebar\",\"cssClass\":\"e-info\"},nativeOn:{\"click\":function($event){return _vm.toggleSidebar.apply(null, arguments)}}},[_vm._v(\"Toggle\")])],1),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"text\"}},[_vm._m(3),_vm._v(\" \"),_c('ejs-button',{ref:\"sidebarTypesBtn\",staticClass:\"inline-element right\",attrs:{\"id\":\"togglePosition\",\"isToggle\":\"true\",\"cssClass\":\"e-info\"},nativeOn:{\"click\":function($event){return _vm.onTypeChange.apply(null, arguments)}}},[_vm._v(\"Right\")])],1),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"text\"}},[_vm._m(4),_vm._v(\" \"),_c('div',{staticClass:\"inline-element right\"},[_c('ejs-dropdownlist',{staticClass:\"e-textbox  right\",attrs:{\"id\":\"types\",\"dataSource\":_vm.dataTypes,\"fields\":_vm.fields,\"placeholder\":_vm.waterMark,\"index\":_vm.index,\"popupHeight\":_vm.height,\"cssClass\":\"right\",\"change\":_vm.onChange,\"width\":_vm.width}})],1)]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"text\"}},[_vm._m(5),_vm._v(\" \"),_c('ejs-button',{ref:\"documentClickBtn\",staticClass:\"inline-element right\",attrs:{\"id\":\"documentclick\",\"isToggle\":\"true\",\"cssClass\":\"e-info\"},nativeOn:{\"click\":function($event){return _vm.documentClick.apply(null, arguments)}}},[_vm._v(\"True\")])],1),_vm._v(\" \"),_vm._m(6),_vm._v(\" \"),_c('ejs-button',{ref:\"backdropBtn\",staticClass:\"inline-element right\",attrs:{\"id\":\"backdrop\",\"isToggle\":\"true\",\"cssClass\":\"e-info\"},nativeOn:{\"click\":function($event){return _vm.backdrop.apply(null, arguments)}}},[_vm._v(\"True\")])],1)])])],1)]),_vm._v(\" \"),_vm._m(7),_vm._v(\" \"),_vm._m(8)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"title\"},[_c('p',{attrs:{\"id\":\"overview\"}},[_vm._v(\"Overview\\n                            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:\"title\"},[_c('p',{attrs:{\"id\":\"properties\"}},[_vm._v(\"Options\\n                            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:\" inline-element\",staticStyle:{\"width\":\"70%\"}},[_c('b',[_vm._v(\"Toggle\")]),_vm._v(\" - Toggles the sidebar to be open or closed state.\\n                            \")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:\" inline-element\",staticStyle:{\"width\":\"70%\"}},[_c('b',[_vm._v(\"Position\")]),_vm._v(\" - Allows to place the sidebar in right or left side of the page.\\n                            \")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:\"inline-element\",staticStyle:{\"width\":\"70%\"}},[_c('b',[_vm._v(\"Types \")]),_vm._v(\" - Specifies the act of expanding or collapsing the sidebar with main content.\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:\" inline-element\",staticStyle:{\"width\":\"70%\"}},[_c('b',[_vm._v(\"Closing on document click\")]),_vm._v(\" - Allows to collapse / close the sidebar on document click.\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:\" inline-element\",staticStyle:{\"width\":\"70%\"}},[_c('b',[_vm._v(\"Backdrop\")]),_vm._v(\" - Sets the backdrop over the main content area on open / expanded state.\")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This sample demonstrates the Sidebar component with its features. Click/Touch the button to view the Sidebar sample in a new tab.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            In this sample allows to configure the \"),_c('code',[_vm._v(\"type\")]),_vm._v(\", \"),_c('code',[_vm._v(\"position\")]),_vm._v(\", \"),_c('code',[_vm._v(\"closeOnDocumentClick\")]),_vm._v(\"and\\n            \"),_c('code',[_vm._v(\"showBackdrop\")]),_vm._v(\" property.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/sidebar/api/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });