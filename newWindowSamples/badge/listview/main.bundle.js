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
/******/ 		"badge/listview/main": 0
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
/******/ 	deferredModules.push(["./Samples/badge/listview/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/badge/listview/App.vue":
/*!****************************************!*\
  !*** ./Samples/badge/listview/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_a8a59cd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=a8a59cd6& */ \"./Samples/badge/listview/App.vue?vue&type=template&id=a8a59cd6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/badge/listview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_a8a59cd6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_a8a59cd6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/badge/listview/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?");

/***/ }),

/***/ "./Samples/badge/listview/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/badge/listview/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?");

/***/ }),

/***/ "./Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?");

/***/ }),

/***/ "./Samples/badge/listview/App.vue?vue&type=template&id=a8a59cd6&":
/*!***********************************************************************!*\
  !*** ./Samples/badge/listview/App.vue?vue&type=template&id=a8a59cd6& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a8a59cd6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=a8a59cd6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/App.vue?vue&type=template&id=a8a59cd6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a8a59cd6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_a8a59cd6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?");

/***/ }),

/***/ "./Samples/badge/listview/list-template.vue":
/*!**************************************************!*\
  !*** ./Samples/badge/listview/list-template.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_template_vue_vue_type_template_id_4f055d46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-template.vue?vue&type=template&id=4f055d46& */ \"./Samples/badge/listview/list-template.vue?vue&type=template&id=4f055d46&\");\n/* harmony import */ var _list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-template.vue?vue&type=script&lang=js& */ \"./Samples/badge/listview/list-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _list_template_vue_vue_type_template_id_4f055d46___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _list_template_vue_vue_type_template_id_4f055d46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/badge/listview/list-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/badge/listview/list-template.vue?");

/***/ }),

/***/ "./Samples/badge/listview/list-template.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/badge/listview/list-template.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./list-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/list-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/badge/listview/list-template.vue?");

/***/ }),

/***/ "./Samples/badge/listview/list-template.vue?vue&type=template&id=4f055d46&":
/*!*********************************************************************************!*\
  !*** ./Samples/badge/listview/list-template.vue?vue&type=template&id=4f055d46& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_template_id_4f055d46___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./list-template.vue?vue&type=template&id=4f055d46& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/list-template.vue?vue&type=template&id=4f055d46&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_template_id_4f055d46___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_list_template_vue_vue_type_template_id_4f055d46___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/list-template.vue?");

/***/ }),

/***/ "./Samples/badge/listview/listData.ts":
/*!********************************************!*\
  !*** ./Samples/badge/listview/listData.ts ***!
  \********************************************/
/*! exports provided: badgeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"badgeData\", function() { return badgeData; });\nvar badgeData = [\n    { id: 'p_01', text: 'Primary', messages: '3 New', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },\n    { id: 'p_02', text: 'Social', messages: '27 New', badge: 'e-badge e-badge-secondary', icons: 'social', type: 'Primary' },\n    { id: 'p_03', text: 'Promotions', messages: '7 New', badge: 'e-badge e-badge-success', icons: 'promotion', type: 'Primary' },\n    { id: 'p_04', text: 'Updates', messages: '13 New', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },\n    { id: 'p_05', text: 'Starred', messages: '', badge: '', icons: 'starred', type: 'All Labels' },\n    { id: 'p_06', text: 'Important', messages: '2 New', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },\n    { id: 'p_07', text: 'Sent', messages: '', badge: '', icons: 'sent', type: 'All Labels' },\n    { id: 'p_08', text: 'Outbox', messages: '', badge: '', icons: 'outbox', type: 'All Labels' },\n    { id: 'p_09', text: 'Drafts', messages: '7 New', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' }\n];\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/listData.ts?");

/***/ }),

/***/ "./Samples/badge/listview/main.js":
/*!****************************************!*\
  !*** ./Samples/badge/listview/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/badge/listview/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.badge-list .control-section {\\n    overflow: auto;\\n}\\n.badge-list .sample_container {\\n    max-width: 360px;\\n    margin: auto;\\n}\\n.badge-list #lists {\\n    margin: auto;\\n    border: 1px solid rgba(0, 0, 0, 0.12)\\n}\\n.badge-list #lists .e-list-item {\\n    cursor: pointer;\\n    height: 50px;\\n    line-height: 48px;\\n    border: 0;\\n}\\n.tailwind .badge-list .sample_container #lists .e-list-item {\\n    padding-top: 0px;\\n    padding-bottom: 0px;\\n}\\n\\n\\n/* SVG Icons and Customization */\\n.badge-list .list_svg {\\n    width: 24px;\\n    height: 24px;\\n    display: inline-block;\\n    margin-top: 11px;\\n    margin-right: 16px;\\n}\\n.badge-list .e-rtl .list_svg {\\n    margin-left: 16px;\\n    margin-right: 0;\\n}\\n.bootstrap5 .list_svg,\\n.bootstrap4 .list_svg,\\n.bootstrap5-dark .list_svg,\\n.tailwind-dark .list_svg {\\n    margin-top: 5px !important;\\n}\\n.bootstrap5 #lists .e-list-item,\\n.bootstrap4 #lists .e-list-item,\\n.bootstrap5-dark #lists .e-list-item,\\n.tailwind-dark #lists .e-list-item {\\n    line-height: 36px !important;\\n}\\n.bootstrap5 .listWrapper .e-badge,\\n.bootstrap4 .listWrapper .e-badge,\\n.bootstrap5-dark .listWrapper .e-badge,\\n.tailwind-dark .listWrapper .e-badge {\\n    margin-top: 8px !important;\\n}\\n.badge-list .listWrapper .e-badge {\\n    float: right;\\n    margin-top: 16px;\\n    font-size: 12px;\\n}\\n.badge-list .e-rtl .listWrapper .e-badge {\\n    float: left;\\n}\\n.badge-list .list_text {\\n    width: 60%;\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n.badge-list .updates {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M17.024 13.812l.022.162v.893c0 .487-.007.942-.022 1.366-.012.423-.027.833-.042 1.23v2.435c0 .415.022.799.064 1.15.042.35.11.559.202.622.091.063.232.095.422.095h.328l.105.324c-.041.073-.125.136-.253.189-.127.055-.226.063-.296.028H14.126a.556.556 0 0 1-.34-.109v-.27c.086-.108.22-.162.403-.162h.38c.185-.109.294-.219.328-.328.036-.108.054-.3.054-.573a7.32 7.32 0 0 0 .042-.819c0-.29.007-.527.021-.709V17.233c0-.636-.018-1.041-.053-1.213-.034-.173-.082-.386-.138-.64a20.09 20.09 0 0 1-.455.19c-.176.072-.291.108-.348.108l-.105-.162c0-.162.09-.307.274-.434l.38-.27a6.472 6.472 0 0 1 .847-.406c.227-.144.469-.265.73-.365.26-.1.554-.176.878-.229zm-.952-5.736a.9.9 0 0 1 .613.243c.184.162.343.361.477.595.135.235.2.451.2.65 0 .451-.129.802-.39 1.054-.261.254-.453.397-.572.434a1.424 1.424 0 0 1-.412.054.934.934 0 0 1-.455-.122c-.15-.082-.293-.23-.433-.447a1.834 1.834 0 0 1-.277-.676c-.027-.307.044-.63.213-.974.17-.342.373-.577.613-.703.17-.072.31-.108.423-.108zM16 3.465C9.088 3.465 3.464 9.088 3.464 16c0 6.913 5.624 12.536 12.536 12.536S28.536 22.913 28.536 16c0-6.912-5.624-12.535-12.536-12.535zM16 1.6c7.94 0 14.4 6.46 14.4 14.4S23.94 30.4 16 30.4 1.6 23.94 1.6 16 8.06 1.6 16 1.6z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .promotion {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M6 4c.4 0 .7.2 1 .4.5.6.5 1.5-.1 2-.5.5-1.4.5-1.9-.1s-.5-1.4.1-1.9c.2-.3.6-.4.9-.4zm0-1c-.6 0-1.2.2-1.6.6-1 .9-1.1 2.4-.2 3.4.9 1 2.4 1 3.4.2 1-.9 1-2.4.1-3.4C7.3 3.2 6.6 3 6 3zm.3-3l7.1 1 18 19.6L18.9 32 .9 12.4.6 5.3z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .social {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M15.254 19.089c.996 0 3.587 1.992 3.786 8.27l-19.03.199s-.498-7.97 5.579-8.37c2.392-.398 4.783 1.993 6.178 1.793 1.295-.198 2.59-1.892 3.487-1.892zm3.886-2.69c.797 0 1.793 1.495 2.989 1.694 1.096.198 3.188-1.993 5.18-1.595 5.082.3 4.684 7.573 4.684 7.573l-11.558-.1c-.697-3.687-2.391-5.181-3.288-5.38.598-1.594 1.495-2.192 1.993-2.192zm-8.17-9.963c2.79 0 4.98 2.49 4.98 5.679 0 3.089-2.19 5.679-4.98 5.679-2.79 0-4.982-2.491-4.982-5.68 0-3.088 2.192-5.678 4.982-5.678zm11.657-1.994c2.49 0 4.583 2.293 4.583 5.082 0 2.79-2.092 5.082-4.583 5.082s-4.583-2.293-4.583-5.082c0-2.79 2.092-5.082 4.583-5.082z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .primary {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M1 7.5h10v2H2v18h28v-18h-9v-2h10a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-20a1 1 0 0 1 1-1zm14-5h2v13.172l2.536-2.536 1.414 1.414L17 18.5l-1 1-1-1-3.95-3.95 1.414-1.414L15 15.672z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .draft {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M10.262 23.448l2.295 2.298-3.443 1.149zm6.886-6.895l2.296 2.298-5.739 5.746-2.295-2.298zm3.443-3.448l2.295 2.299-2.295 2.298-2.295-2.298zM21 3.414V7h3.785zM6 2v28h20V9h-4.833C20.062 9 19 8.137 19 7.032V2zm.167-2h14.414L28 7.586V30c0 1.103-.73 2-1.833 2h-20C5.064 32 4 31.103 4 30V2C4 .897 5.064 0 6.167 0z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .outbox {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M2 9.63V26h28.001V9.67L15.998 20.08zM2 6v1.134l14.001 10.452 14-10.408L30 6zm0-2h28c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .sent {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M6.756 7.527l6.997 8.487-7.02 8.516 20.126-8.457zM0 2.48l32 13.603L.024 29.52l11.135-13.506z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .important {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M1.3 2.7c.7 0 1.3.6 1.3 1.3v25.2c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V4c0-.7.6-1.3 1.3-1.3zm10.3-1.2C18.2 1.5 23.7 5 32 2v17.5c-11.1 4-17.1-3.7-27.7 1V3.1c2.7-1.2 5-1.6 7.3-1.6z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .starred {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M16 1.6l4.45 9.48 9.95 1.52-7.2 7.38 1.7 10.42-8.9-4.92-8.9 4.92 1.7-10.42-7.2-7.38 9.951-1.52z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_development-QL2RWXKJ5OX5HUGYIV36UNRN3VDQZ3HHVE2KVVQXD5QQO7G22WUA/Samples/badge/listview/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,aAAa;CAChB;AACD;IACI,aAAa;IACb,qCAAqC;CACxC;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,kBAAkB;IAClB,UAAU;CACb;AACD;IACI,iBAAiB;IACjB,oBAAoB;CACvB;;;AAGD,iCAAiC;AACjC;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,kBAAkB;IAClB,gBAAgB;CACnB;AACD;;;;IAII,2BAA2B;CAC9B;AACD;;;;IAII,6BAA6B;CAChC;AACD;;;;IAII,2BAA2B;CAC9B;AACD;IACI,aAAa;IACb,iBAAiB;IACjB,gBAAgB;CACnB;AACD;IACI,YAAY;CACf;AACD;IACI,WAAW;IACX,sBAAsB;IACtB,oBAAoB;CACvB;AACD;IACI,+0CAA+0C;CACl1C;AACD;IACI,6YAA6Y;CAChZ;AACD;IACI,0wBAA0wB;CAC7wB;AACD;IACI,4WAA4W;CAC/W;AACD;IACI,meAAme;CACte;AACD;IACI,yVAAyV;CAC5V;AACD;IACI,8QAA8Q;CACjR;AACD;IACI,sWAAsW;CACzW;AACD;IACI,iRAAiR;CACpR\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.badge-list .control-section {\\n    overflow: auto;\\n}\\n.badge-list .sample_container {\\n    max-width: 360px;\\n    margin: auto;\\n}\\n.badge-list #lists {\\n    margin: auto;\\n    border: 1px solid rgba(0, 0, 0, 0.12)\\n}\\n.badge-list #lists .e-list-item {\\n    cursor: pointer;\\n    height: 50px;\\n    line-height: 48px;\\n    border: 0;\\n}\\n.tailwind .badge-list .sample_container #lists .e-list-item {\\n    padding-top: 0px;\\n    padding-bottom: 0px;\\n}\\n\\n\\n/* SVG Icons and Customization */\\n.badge-list .list_svg {\\n    width: 24px;\\n    height: 24px;\\n    display: inline-block;\\n    margin-top: 11px;\\n    margin-right: 16px;\\n}\\n.badge-list .e-rtl .list_svg {\\n    margin-left: 16px;\\n    margin-right: 0;\\n}\\n.bootstrap5 .list_svg,\\n.bootstrap4 .list_svg,\\n.bootstrap5-dark .list_svg,\\n.tailwind-dark .list_svg {\\n    margin-top: 5px !important;\\n}\\n.bootstrap5 #lists .e-list-item,\\n.bootstrap4 #lists .e-list-item,\\n.bootstrap5-dark #lists .e-list-item,\\n.tailwind-dark #lists .e-list-item {\\n    line-height: 36px !important;\\n}\\n.bootstrap5 .listWrapper .e-badge,\\n.bootstrap4 .listWrapper .e-badge,\\n.bootstrap5-dark .listWrapper .e-badge,\\n.tailwind-dark .listWrapper .e-badge {\\n    margin-top: 8px !important;\\n}\\n.badge-list .listWrapper .e-badge {\\n    float: right;\\n    margin-top: 16px;\\n    font-size: 12px;\\n}\\n.badge-list .e-rtl .listWrapper .e-badge {\\n    float: left;\\n}\\n.badge-list .list_text {\\n    width: 60%;\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n.badge-list .updates {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M17.024 13.812l.022.162v.893c0 .487-.007.942-.022 1.366-.012.423-.027.833-.042 1.23v2.435c0 .415.022.799.064 1.15.042.35.11.559.202.622.091.063.232.095.422.095h.328l.105.324c-.041.073-.125.136-.253.189-.127.055-.226.063-.296.028H14.126a.556.556 0 0 1-.34-.109v-.27c.086-.108.22-.162.403-.162h.38c.185-.109.294-.219.328-.328.036-.108.054-.3.054-.573a7.32 7.32 0 0 0 .042-.819c0-.29.007-.527.021-.709V17.233c0-.636-.018-1.041-.053-1.213-.034-.173-.082-.386-.138-.64a20.09 20.09 0 0 1-.455.19c-.176.072-.291.108-.348.108l-.105-.162c0-.162.09-.307.274-.434l.38-.27a6.472 6.472 0 0 1 .847-.406c.227-.144.469-.265.73-.365.26-.1.554-.176.878-.229zm-.952-5.736a.9.9 0 0 1 .613.243c.184.162.343.361.477.595.135.235.2.451.2.65 0 .451-.129.802-.39 1.054-.261.254-.453.397-.572.434a1.424 1.424 0 0 1-.412.054.934.934 0 0 1-.455-.122c-.15-.082-.293-.23-.433-.447a1.834 1.834 0 0 1-.277-.676c-.027-.307.044-.63.213-.974.17-.342.373-.577.613-.703.17-.072.31-.108.423-.108zM16 3.465C9.088 3.465 3.464 9.088 3.464 16c0 6.913 5.624 12.536 12.536 12.536S28.536 22.913 28.536 16c0-6.912-5.624-12.535-12.536-12.535zM16 1.6c7.94 0 14.4 6.46 14.4 14.4S23.94 30.4 16 30.4 1.6 23.94 1.6 16 8.06 1.6 16 1.6z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .promotion {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M6 4c.4 0 .7.2 1 .4.5.6.5 1.5-.1 2-.5.5-1.4.5-1.9-.1s-.5-1.4.1-1.9c.2-.3.6-.4.9-.4zm0-1c-.6 0-1.2.2-1.6.6-1 .9-1.1 2.4-.2 3.4.9 1 2.4 1 3.4.2 1-.9 1-2.4.1-3.4C7.3 3.2 6.6 3 6 3zm.3-3l7.1 1 18 19.6L18.9 32 .9 12.4.6 5.3z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .social {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M15.254 19.089c.996 0 3.587 1.992 3.786 8.27l-19.03.199s-.498-7.97 5.579-8.37c2.392-.398 4.783 1.993 6.178 1.793 1.295-.198 2.59-1.892 3.487-1.892zm3.886-2.69c.797 0 1.793 1.495 2.989 1.694 1.096.198 3.188-1.993 5.18-1.595 5.082.3 4.684 7.573 4.684 7.573l-11.558-.1c-.697-3.687-2.391-5.181-3.288-5.38.598-1.594 1.495-2.192 1.993-2.192zm-8.17-9.963c2.79 0 4.98 2.49 4.98 5.679 0 3.089-2.19 5.679-4.98 5.679-2.79 0-4.982-2.491-4.982-5.68 0-3.088 2.192-5.678 4.982-5.678zm11.657-1.994c2.49 0 4.583 2.293 4.583 5.082 0 2.79-2.092 5.082-4.583 5.082s-4.583-2.293-4.583-5.082c0-2.79 2.092-5.082 4.583-5.082z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .primary {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M1 7.5h10v2H2v18h28v-18h-9v-2h10a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-20a1 1 0 0 1 1-1zm14-5h2v13.172l2.536-2.536 1.414 1.414L17 18.5l-1 1-1-1-3.95-3.95 1.414-1.414L15 15.672z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .draft {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M10.262 23.448l2.295 2.298-3.443 1.149zm6.886-6.895l2.296 2.298-5.739 5.746-2.295-2.298zm3.443-3.448l2.295 2.299-2.295 2.298-2.295-2.298zM21 3.414V7h3.785zM6 2v28h20V9h-4.833C20.062 9 19 8.137 19 7.032V2zm.167-2h14.414L28 7.586V30c0 1.103-.73 2-1.833 2h-20C5.064 32 4 31.103 4 30V2C4 .897 5.064 0 6.167 0z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .outbox {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M2 9.63V26h28.001V9.67L15.998 20.08zM2 6v1.134l14.001 10.452 14-10.408L30 6zm0-2h28c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .sent {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M6.756 7.527l6.997 8.487-7.02 8.516 20.126-8.457zM0 2.48l32 13.603L.024 29.52l11.135-13.506z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .important {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M1.3 2.7c.7 0 1.3.6 1.3 1.3v25.2c0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3V4c0-.7.6-1.3 1.3-1.3zm10.3-1.2C18.2 1.5 23.7 5 32 2v17.5c-11.1 4-17.1-3.7-27.7 1V3.1c2.7-1.2 5-1.6 7.3-1.6z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-list .starred {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%239E9E9E' d='M16 1.6l4.45 9.48 9.95 1.52-7.2 7.38 1.7 10.42-8.9-4.92-8.9 4.92 1.7-10.42-7.2-7.38 9.951-1.52z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/listview/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _list_template_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-template.vue */ \"./Samples/badge/listview/list-template.vue\");\n/* harmony import */ var _listData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listData */ \"./Samples/badge/listview/listData.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_1__[\"ListViewPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n           data:_listData__WEBPACK_IMPORTED_MODULE_3__[\"badgeData\"],\n            title: \"Inbox\",\n            header: true,\n            listTemplate: function () {\n                return { template : _list_template_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\n            },\n            fieldData: { groupBy: 'type' }\n        };\n    },\n    methods: {\n        onComplete: function(args) {\n            let list = document.getElementById('lists').getElementsByClassName('e-list-group-item')[0];\n            list.style.display = 'none';\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/list-template.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/listview/list-template.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n      data: {}\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/list-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/App.vue?vue&type=template&id=a8a59cd6&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/listview/App.vue?vue&type=template&id=a8a59cd6& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"badge-list\" }, [\n    _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"sample_container\" },\n        [\n          _c(\"ejs-listview\", {\n            attrs: {\n              id: \"lists\",\n              dataSource: _vm.data,\n              headerTitle: _vm.title,\n              showHeader: _vm.header,\n              template: _vm.listTemplate,\n              fields: _vm.fieldData,\n              actionComplete: _vm.onComplete\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the integration of badges into the listview component to display the new e-mails count.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The badge can be integrated into the listview with the help of templates. The listview uses so many real-time use cases\\n            with badges to achieve different applications.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Here, default badges are used and there is no need to customize the badge size because the component will automatically\\n            adjust the size based on the container element.\\n        \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this samples, different types of colors are used to indicate their priorities of the notification.\"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/listview/list-template.vue?vue&type=template&id=4f055d46&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/listview/list-template.vue?vue&type=template&id=4f055d46& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    {\n      staticClass: \"listWrapper\",\n      staticStyle: { width: \"inherit\", height: \"inherit\" }\n    },\n    [\n      _c(\"span\", { class: [_vm.data.icons + \" list_svg\"] }, [_vm._v(\" \")]),\n      _vm._v(\" \"),\n      _c(\"span\", { staticClass: \"list_text\" }, [\n        _vm._v(_vm._s(_vm.data.text) + \" \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"span\", { class: [_vm.data.badge] }, [\n        _vm._v(_vm._s(_vm.data.messages))\n      ])\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/badge/listview/list-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });