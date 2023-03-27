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
/******/ 		"appbar/color/main": 0
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
/******/ 	deferredModules.push(["./Samples/appbar/color/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/appbar/color/App.vue":
/*!**************************************!*\
  !*** ./Samples/appbar/color/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_681a89cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=681a89cc& */ \"./Samples/appbar/color/App.vue?vue&type=template&id=681a89cc&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/appbar/color/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_681a89cc_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=681a89cc&lang=css& */ \"./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_681a89cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_681a89cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/appbar/color/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?");

/***/ }),

/***/ "./Samples/appbar/color/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/appbar/color/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?");

/***/ }),

/***/ "./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_681a89cc_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=681a89cc&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_681a89cc_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_681a89cc_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_681a89cc_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_681a89cc_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?");

/***/ }),

/***/ "./Samples/appbar/color/App.vue?vue&type=template&id=681a89cc&":
/*!*********************************************************************!*\
  !*** ./Samples/appbar/color/App.vue?vue&type=template&id=681a89cc& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_681a89cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=681a89cc& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=template&id=681a89cc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_681a89cc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_681a89cc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?");

/***/ }),

/***/ "./Samples/appbar/color/main.js":
/*!**************************************!*\
  !*** ./Samples/appbar/color/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/appbar/color/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/appbar/color/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.color-appbar-section .e-dropdown-btn.e-inherit,\\n.color-appbar-section .e-btn.e-inherit.home {\\n    margin: 0 5px;\\n}\\n.color-appbar-section .e-appbar-icon-menu {\\n    display: none;\\n}\\n.color-appbar-section .e-appbar .e-appbar-separator {\\n    margin: 0 10px;\\n}\\n@media screen and (max-width: 480px) {\\n.color-appbar-section .e-appbar-icon-menu {\\n        display: block;\\n}\\n.color-appbar-section .login,\\n    .color-appbar-section .e-appbar-separator,\\n    .color-appbar-section .e-dropdown-btn.e-inherit.e-appbar-menu,\\n    .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-menu,\\n    .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-icon-menu .e-menu .e-menu-item .e-caret,\\n    .color-appbar-section .e-btn.e-inherit.e-appbar-menu {\\n        display: none;\\n}\\n.color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-icon-menu ul .e-menu-item.e-menu-caret-icon {\\n        padding: 0 8px;\\n}\\n.color-appbar-section .e-menu-wrapper.e-inherit ul .e-menu-item .e-menu-icon {\\n        margin-right: 0;\\n}\\n.color-appbar-section .e-menu-wrapper.e-inherit {\\n        margin: 0 10px;\\n}\\n.fabric .color-appbar-section .e-menu-wrapper.e-inherit ul.e-menu:not(.e-vertical),\\n    .fabric-dark .color-appbar-section .e-menu-wrapper.e-inherit ul.e-menu:not(.e-vertical) {\\n        padding: 0;\\n}\\n.color-appbar-section .e-input-group.e-control-wrapper.e-inherit {\\n        margin-left: 10px;\\n}\\n.color-appbar-section .menu {\\n        margin-bottom: 3px;\\n}\\n.color-appbar-section .color-appbar-container {\\n        margin: 0 -30px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/tions-vue-samples_release_21.1.1/Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;IAEI,cAAc;CACjB;AACD;IACI,cAAc;CACjB;AACD;IACI,eAAe;CAClB;AACD;AACA;QACQ,eAAe;CACtB;AACD;;;;;;QAMQ,cAAc;CACrB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,eAAe;CACtB;AACD;;QAEQ,WAAW;CAClB;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,gBAAgB;CACvB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=681a89cc&lang=css&\",\"sourcesContent\":[\"\\n.color-appbar-section .e-dropdown-btn.e-inherit,\\n.color-appbar-section .e-btn.e-inherit.home {\\n    margin: 0 5px;\\n}\\n.color-appbar-section .e-appbar-icon-menu {\\n    display: none;\\n}\\n.color-appbar-section .e-appbar .e-appbar-separator {\\n    margin: 0 10px;\\n}\\n@media screen and (max-width: 480px) {\\n.color-appbar-section .e-appbar-icon-menu {\\n        display: block;\\n}\\n.color-appbar-section .login,\\n    .color-appbar-section .e-appbar-separator,\\n    .color-appbar-section .e-dropdown-btn.e-inherit.e-appbar-menu,\\n    .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-menu,\\n    .color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-icon-menu .e-menu .e-menu-item .e-caret,\\n    .color-appbar-section .e-btn.e-inherit.e-appbar-menu {\\n        display: none;\\n}\\n.color-appbar-section .e-menu-wrapper.e-inherit.e-appbar-icon-menu ul .e-menu-item.e-menu-caret-icon {\\n        padding: 0 8px;\\n}\\n.color-appbar-section .e-menu-wrapper.e-inherit ul .e-menu-item .e-menu-icon {\\n        margin-right: 0;\\n}\\n.color-appbar-section .e-menu-wrapper.e-inherit {\\n        margin: 0 10px;\\n}\\n.fabric .color-appbar-section .e-menu-wrapper.e-inherit ul.e-menu:not(.e-vertical),\\n    .fabric-dark .color-appbar-section .e-menu-wrapper.e-inherit ul.e-menu:not(.e-vertical) {\\n        padding: 0;\\n}\\n.color-appbar-section .e-input-group.e-control-wrapper.e-inherit {\\n        margin-left: 10px;\\n}\\n.color-appbar-section .menu {\\n        margin-bottom: 3px;\\n}\\n.color-appbar-section .color-appbar-container {\\n        margin: 0 -30px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/color/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"AppBarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            productDropDownButtonItems: [\n                { text: 'Developer' },\n                { text: 'Analytics' },\n                { text: 'Reporting' },\n                { text: 'E-Signature' },\n                { text: 'Help Desk' }\n            ],\n            companyDropDownButtonItems: [\n                { text: 'About Us' },\n                { text: 'Customers' },\n                { text: 'Blog' },\n                { text: 'Careers' }\n            ],\n            appBarColors : [\n                { colorMode: 'Light', colorClass: 'e-light', isPrimary: 'true', loginClass: 'login' },\n                { colorMode: 'Dark', colorClass: 'e-dark', isPrimary: 'false', loginClass: 'e-inherit login' },\n                { colorMode: 'Primary', colorClass: 'e-primary', isPrimary: 'false', loginClass: 'e-inherit login' },\n                { colorMode: 'Inherit', colorClass: 'e-inherit', isPrimary: 'true', loginClass: 'login' }\n            ],\n            verticalMenuItems: [\n                {\n                    iconCss: 'e-icons e-more-vertical-1',\n                    items: [\n                        { text: 'Home' },\n                        {\n                            text: 'Products',\n                            items: [\n                                { text: 'Developer' },\n                                { text: 'Analytics' },\n                                { text: 'Reporting' },\n                                { text: 'E-Signature' },\n                                { text: 'Help Desk' }\n                            ]\n                        },\n                        {\n                            text: 'Company',\n                            items: [\n                                { text: 'About Us' },\n                                { text: 'Customers' },\n                                { text: 'Blog' },\n                                { text: 'Careers' }\n                            ]\n                        },\n                        { text: 'Login' }\n                    ]\n                }\n            ]\n        }\n    },\n    mounted: function() {\n        let inputElement = document.querySelectorAll('.color-appbar-section .e-input-group .e-input');\n\n        for(let i = 0; i<inputElement.length; i++) {\n            inputElement[i].addEventListener(\"focus\", function () {\n            let parentElement = this.parentNode;\n            if (parentElement.classList.contains('e-input-in-wrap')) {\n                parentElement.parentNode.classList.add('e-input-focus');\n            } else {\n                this.parentNode.classList.add('e-input-focus');\n            }\n        });\n        inputElement[i].addEventListener(\"blur\", function () {\n            let parentElement = this.parentNode;\n            if (parentElement.classList.contains('e-input-in-wrap')) {\n                parentElement.parentNode.classList.remove('e-input-focus');\n            } else {\n                this.parentNode.classList.remove('e-input-focus');\n            }\n        });\n        }\n    },\n    methods: {\n        beforeItemRender: function(args) {\n            if (args.element.children.length > 0 && args.element.children[0].classList.contains(\"e-more-vertical-1\")) {\n                args.element.setAttribute('aria-label', 'more vertical');\n            }\n        },\n        onCreate: function() {\n            let menuButtonElement = document.querySelectorAll('.color-appbar-section .e-inherit.menu');\n            for (let j = 0; j < menuButtonElement.length; j++) {\n                if(!(menuButtonElement[j].hasAttribute(\"aria-label\"))) {\n                    menuButtonElement[j].setAttribute('aria-label','menu');\n                }\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=template&id=681a89cc&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/color/App.vue?vue&type=template&id=681a89cc& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-12 control-section color-appbar-section\" },\n    [\n      _c(\"div\", { staticClass: \"appbar-sample\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"color-appbar-container\" },\n          _vm._l(_vm.appBarColors, function (appBarColor) {\n            return _c(\"div\", { key: appBarColor.colorMode }, [\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\"div\", { staticClass: \"col-md-12\" }, [\n                  _c(\"h5\", [_vm._v(_vm._s(appBarColor.colorMode))]),\n                ]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"col-md-12\" },\n                  [\n                    _c(\n                      \"ejs-appbar\",\n                      { attrs: { colorMode: appBarColor.colorMode } },\n                      [\n                        _c(\"ejs-button\", {\n                          attrs: {\n                            cssClass: \"e-inherit menu\",\n                            iconCss: \"e-icons e-menu\",\n                            created: _vm.onCreate,\n                          },\n                        }),\n                        _vm._v(\" \"),\n                        _c(\n                          \"ejs-button\",\n                          {\n                            attrs: { cssClass: \"e-inherit home e-appbar-menu\" },\n                          },\n                          [_vm._v(\"Home\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"ejs-dropdownbutton\",\n                          {\n                            attrs: {\n                              cssClass:\n                                \"e-inherit e-appbar-menu \" +\n                                appBarColor.colorClass,\n                              items: _vm.productDropDownButtonItems,\n                            },\n                          },\n                          [_vm._v(\"Products\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"ejs-dropdownbutton\",\n                          {\n                            attrs: {\n                              cssClass:\n                                \"e-inherit e-appbar-menu \" +\n                                appBarColor.colorClass,\n                              items: _vm.companyDropDownButtonItems,\n                            },\n                          },\n                          [_vm._v(\"Company\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"e-appbar-spacer\" }),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticStyle: {\n                              width: \"200px\",\n                              \"margin-right\": \"10px\",\n                            },\n                          },\n                          [\n                            _c(\n                              \"span\",\n                              {\n                                staticClass:\n                                  \"e-input-group e-control-wrapper e-inherit\",\n                              },\n                              [\n                                _c(\"input\", {\n                                  staticClass: \"e-searchinput e-input\",\n                                  attrs: {\n                                    type: \"text\",\n                                    placeholder: \"Search\",\n                                  },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"span\", {\n                                  staticClass:\n                                    \"e-icons e-search e-input-group-icon\",\n                                }),\n                              ]\n                            ),\n                          ]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"div\", { staticClass: \"e-appbar-separator\" }),\n                        _vm._v(\" \"),\n                        _c(\n                          \"ejs-button\",\n                          {\n                            attrs: {\n                              isPrimary: appBarColor.isPrimary,\n                              cssClass: appBarColor.loginClass,\n                            },\n                          },\n                          [_vm._v(\"Login\")]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"ejs-menu\", {\n                          attrs: {\n                            cssClass:\n                              \"e-inherit e-appbar-icon-menu \" +\n                              appBarColor.colorClass,\n                            items: _vm.verticalMenuItems,\n                            beforeItemRender: _vm.beforeItemRender,\n                          },\n                        }),\n                      ],\n                      1\n                    ),\n                  ],\n                  1\n                ),\n              ]),\n              _vm._v(\" \"),\n              _c(\"br\"),\n            ])\n          }),\n          0\n        ),\n        _vm._v(\" \"),\n        _vm._m(0),\n        _vm._v(\" \"),\n        _vm._m(1),\n      ]),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n                This sample demonstrates the available types of color in the \"\n        ),\n        _c(\"strong\", [_vm._v(\"Vue AppBar\")]),\n        _vm._v(\".\\n            \"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"In this demo, the available types of background color for \"),\n        _c(\"strong\", [_vm._v(\"Vue AppBar\")]),\n        _vm._v(\n          \" are showcased. The background and font colors can be set using the \"\n        ),\n        _c(\"strong\", [_vm._v(\"ColorMode\")]),\n        _vm._v(\" property. The different types are \"),\n        _c(\"code\", [_vm._v(\"light\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"dark\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"primary\")]),\n        _vm._v(\", and \"),\n        _c(\"code\", [_vm._v(\"inherit\")]),\n        _vm._v(\".\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Light\")]),\n        _vm._v(\" - The AppBar can be displayed with a light background.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Dark\")]),\n        _vm._v(\" - The AppBar can be displayed with a dark background.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Primary\")]),\n        _vm._v(\" - The AppBar can be displayed with primary colors.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Inherit\")]),\n        _vm._v(\" - The AppBar inherits the color from its parent element.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\" On \"),\n        _c(\"code\", [_vm._v(\"mobile devices\")]),\n        _vm._v(\n          \", media query is used to display the AppBar in adaptive views. You can click the menu to see the hidden AppBar content.\"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=681a89cc&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/appbar/color/App.vue?vue&type=style&index=0&id=681a89cc&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"c8774438\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/appbar/color/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });