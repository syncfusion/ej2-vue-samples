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
/******/ 		"sidebar/sidebar-list/main": 0
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
/******/ 	deferredModules.push(["./Samples/sidebar/sidebar-list/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/sidebar/sidebar-list/App.vue":
/*!**********************************************!*\
  !*** ./Samples/sidebar/sidebar-list/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f5c0c6b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f5c0c6b0& */ \"./Samples/sidebar/sidebar-list/App.vue?vue&type=template&id=f5c0c6b0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/sidebar/sidebar-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f5c0c6b0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f5c0c6b0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sidebar/sidebar-list/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/sidebar-list/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/sidebar/sidebar-list/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/sidebar-list/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/sidebar-list/App.vue?vue&type=template&id=f5c0c6b0&":
/*!*****************************************************************************!*\
  !*** ./Samples/sidebar/sidebar-list/App.vue?vue&type=template&id=f5c0c6b0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f5c0c6b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f5c0c6b0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/sidebar-list/App.vue?vue&type=template&id=f5c0c6b0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f5c0c6b0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f5c0c6b0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?");

/***/ }),

/***/ "./Samples/sidebar/sidebar-list/main.js":
/*!**********************************************!*\
  !*** ./Samples/sidebar/sidebar-list/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sidebar/sidebar-list/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* Specifies sample level styles for Sidebar */\\n#wrapper .listcontent {\\n    font-size: 14px;\\n    padding: 15px;\\n}\\n#wrapper.control-section {\\n    padding: 15px 0px;\\n}\\n#wrapper .listmaincontent {\\n    height: 380px;\\n}\\n#wrapper #left {\\n    float: left;\\n    width: 30px;\\n    height: 47px;\\n}\\n#wrapper .sidebar-list {\\n    z-index: 20 !important;\\n}\\n\\n/*Specifies sample level style for Toolbar*/\\n#wrapper .e-toolbar .e-icons {\\n    font-size: 20px;\\n}\\n#wrapper .e-tbar-menu-icon:before {\\n    content: \\\"\\\\E914\\\";\\n    font-family: 'sbicons';\\n}\\n\\n/* Specifies the border bottom styles for toolbar in light theme*/\\n.material #wrapper .e-toolbar,\\n.tailwind #wrapper .e-toolbar,\\n.bootstrap5 #wrapper .e-toolbar {\\n    border-bottom: 1px solid #eaeaeae0;\\n}\\n\\n/* Specifies the border bottom styles for toolbar in dark theme*/\\n.bootstrap5-dark #wrapper .e-toolbar,\\n.tailwind-dark #wrapper .e-toolbar,\\n.material-dark #wrapper .e-toolbar {\\n    border-bottom: 1px solid #eaeaea63;\\n}\\n.material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.material-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap4.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.tailwind.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.tailwind-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 12px;\\n}\\n.e-bigger.material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 16px;\\n}\\n.bootstrap4 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap5.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap5-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 8px;\\n}\\n.bootstrap5 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap5-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 5px;\\n}\\n.bootstrap.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 10px;\\n}\\n.e-folder {\\n    text-align: center;\\n    font-weight: 500;\\n    font-size: 16px\\n}\\n.e-bigger .e-folder {\\n    font-size: 18px;\\n}\\n.bootstrap5 .e-folder-name,\\n.bootstrap5-dark .e-folder-name {\\n    margin-top: -2px;\\n}\\n.tailwind .e-folder-name,\\n.tailwind-dark .e-folder-name,\\n.bootstrap4 .e-folder-name,\\n.bootstrap .e-folder-name,\\n.bootstrap-dark .e-folder-name {\\n    margin-top: 3px;\\n    margin-left: 7px;\\n}\\n.material .e-folder-name,\\n.material-dark .e-folder-name {\\n    margin-top: 1px;\\n    margin-left: 9px;\\n}\\n\\n/*Specifies sample level style for ListView*/\\n.bootstrap5 .e-template-list,\\n.bootstrap5-dark .e-template-list,\\n.tailwind .e-template-list,\\n.tailwind-dark .e-template-list,\\n.bootstrap4 .e-template-list {\\n    border: 0;\\n    border-radius: 0;\\n}\\n.e-template-list .e-list-item {\\n    line-height: 1.5;\\n    padding: 0 16px;\\n}\\n.list-wrapper {\\n    display: inline-flex;\\n    width: 100%;\\n}\\n.e-bigger .list-wrapper {\\n    padding-left: 8px;\\n}\\n.list-wrapper .text {\\n    padding-left: 14px;\\n}\\n.e-bigger .list-wrapper .text {\\n    padding-left: 20px;\\n}\\n.e-listbox-wrapper .list-wrapper .text {\\n    font-weight: bold;\\n    font-size: 13px;\\n}\\n.list-wrapper .e-avatar {\\n    background-color: transparent;\\n    float: left;\\n}\\n\\n/* Specifies the background color of listview in dark theme*/\\n.material-dark #wrapper .e-list-item,\\n.bootstrap-dark #wrapper .e-list-item {\\n    background-color: transparent;\\n}\\n.material .list-wrapper .e-avatar,\\n.material-dark .list-wrapper .e-avatar,\\n.highcontrast .list-wrapper .e-avatar {\\n    margin-top: 3px;\\n}\\n.fabric .list-wrapper .e-avatar,\\n.fabric-dark .list-wrapper .e-avatar {\\n    margin-top: 6px;\\n}\\n.material.e-bigger .list-wrapper .e-avatar,\\n.material-dark.e-bigger .list-wrapper .e-avatar,\\n.highcontrast.e-bigger .list-wrapper .e-avatar {\\n    margin-top: 7px;\\n}\\n.fabric-dark.e-bigger .list-wrapper .e-avatar,\\n.fabric.e-bigger .list-wrapper .e-avatar,\\n.bootstrap-dark.e-bigger .list-wrapper .e-avatar,\\n.bootstrap.e-bigger .list-wrapper .e-avatar {\\n    margin-top: 10px;\\n}\\n.bootstrap .list-wrapper .e-avatar,\\n.bootstrap-dark .list-wrapper .e-avatar {\\n    margin-top: 5px;\\n}\\n.bootstrap5 .list-wrapper .e-avatar,\\n.bootstrap5-dark .list-wrapper .e-avatar {\\n    margin-top: -3px;\\n}\\n.tailwind .list-wrapper .e-avatar,\\n.tailwind-dark .list-wrapper .e-avatar {\\n    margin-top: -1px;\\n}\\n.bootstrap5.e-bigger .list-wrapper .e-avatar,\\n.bootstrap5-dark.e-bigger .list-wrapper .e-avatar {\\n    margin-top: 0px;\\n}\\n.e-bigger.bootstrap5 .sidebar-list .e-listview:not(.e-list-template) .e-list-item,\\n.e-bigger.bootstrap5-dark .sidebar-list .e-listview:not(.e-list-template) .e-list-item {\\n    height: 43px;\\n}\\n.bootstrap4.e-bigger .sidebar-list .e-listview:not(.e-list-template) .e-list-item {\\n    padding: 12px 14px;\\n}\\n\\n/*Specifies the icon styles for the ListView*/\\n.javascript {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/sidebar/images/javascript.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.typescript {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/sidebar/images/typescript.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \")\\n}\\n.angular {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/sidebar/images/angular.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.vue {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/sidebar/images/vue.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.react {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../images/sidebar/images/react.svg'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.material-dark #wrapper .listcontent {\\n    color: white;\\n}\\n\\n/* Specifies the border right color for the sidebar in light theme*/\\n.material .sidebar-list,\\n.fabric .sidebar-list,\\n.tailwind .sidebar-list,\\n.highcontrast .sidebar-list,\\n.bootstrap5 .sidebar-list {\\n    border-right: 1px solid #eaeaeae0;\\n}\\n\\n/* Specifies the border right color for the sidebar in dark theme*/\\n.material-dark .sidebar-list,\\n.fabric-dark .sidebar-list,\\n.tailwind-dark .sidebar-list,\\n.bootstrap5-dark .sidebar-list {\\n    border-right: 1px solid #eaeaea63;\\n}\\n.material #sidelistwrapper,\\n.fabric #sidelistwrapper,\\n.tailwind #sidelistwrapper,\\n.fluent #sidelistwrapper,\\n.bootstrap5 #sidelistwrapper {\\n    border: 1px solid #d7d7d7;\\n}\\n.material-dark #sidelistwrapper,\\n.fabric-dark #sidelistwrapper,\\n.tailwind-dark #sidelistwrapper,\\n.highcontrast #sidelistwrapper,\\n.fluent-dark #sidelistwrapper,\\n.bootstrap5-dark #sidelistwrapper {\\n    border: 1px solid #ffffff;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-AYH7XHMO6KSEIXRKCV5I64MQMMUYOJMXW32VBZ37W2N7QVS7ANEQ/Samples/sidebar/sidebar-list/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgIA,+CAA+C;AAC/C;IACI,gBAAgB;IAChB,cAAc;CACjB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,cAAc;CACjB;AACD;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;CAChB;AACD;IACI,uBAAuB;CAC1B;;AAED,4CAA4C;AAC5C;IACI,gBAAgB;CACnB;AACD;IACI,iBAAiB;IACjB,uBAAuB;CAC1B;;AAED,kEAAkE;AAClE;;;IAGI,mCAAmC;CACtC;;AAED,iEAAiE;AACjE;;;IAGI,mCAAmC;CACtC;AACD;;;;;IAKI,kBAAkB;CACrB;AACD;IACI,kBAAkB;CACrB;AACD;;;;;IAKI,iBAAiB;CACpB;AACD;;IAEI,iBAAiB;CACpB;AACD;;IAEI,kBAAkB;CACrB;AACD;IACI,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;CAClB;AACD;IACI,gBAAgB;CACnB;AACD;;IAEI,iBAAiB;CACpB;AACD;;;;;IAKI,gBAAgB;IAChB,iBAAiB;CACpB;AACD;;IAEI,gBAAgB;IAChB,iBAAiB;CACpB;;AAED,6CAA6C;AAC7C;;;;;IAKI,UAAU;IACV,iBAAiB;CACpB;AACD;IACI,iBAAiB;IACjB,gBAAgB;CACnB;AACD;IACI,qBAAqB;IACrB,YAAY;CACf;AACD;IACI,kBAAkB;CACrB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,kBAAkB;IAClB,gBAAgB;CACnB;AACD;IACI,8BAA8B;IAC9B,YAAY;CACf;;AAED,6DAA6D;AAC7D;;IAEI,8BAA8B;CACjC;AACD;;;IAGI,gBAAgB;CACnB;AACD;;IAEI,gBAAgB;CACnB;AACD;;;IAGI,gBAAgB;CACnB;AACD;;;;IAII,iBAAiB;CACpB;AACD;;IAEI,gBAAgB;CACnB;AACD;;IAEI,iBAAiB;CACpB;AACD;;IAEI,iBAAiB;CACpB;AACD;;IAEI,gBAAgB;CACnB;AACD;;IAEI,aAAa;CAChB;AACD;IACI,mBAAmB;CACtB;;AAED,8CAA8C;AAC9C;IACI,gDAAiE;CACpE;AACD;IACI,+CAAgE;CACnE;AACD;IACI,gDAA8D;CACjE;AACD;IACI,gDAA0D;CAC7D;AACD;IACI,gDAA4D;CAC/D;AACD;IACI,aAAa;CAChB;;AAED,oEAAoE;AACpE;;;;;IAKI,kCAAkC;CACrC;;AAED,mEAAmE;AACnE;;;;IAII,kCAAkC;CACrC;AACD;;;;;IAKI,0BAA0B;CAC7B;AACD;;;;;;IAMI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* Specifies sample level styles for Sidebar */\\n#wrapper .listcontent {\\n    font-size: 14px;\\n    padding: 15px;\\n}\\n#wrapper.control-section {\\n    padding: 15px 0px;\\n}\\n#wrapper .listmaincontent {\\n    height: 380px;\\n}\\n#wrapper #left {\\n    float: left;\\n    width: 30px;\\n    height: 47px;\\n}\\n#wrapper .sidebar-list {\\n    z-index: 20 !important;\\n}\\n\\n/*Specifies sample level style for Toolbar*/\\n#wrapper .e-toolbar .e-icons {\\n    font-size: 20px;\\n}\\n#wrapper .e-tbar-menu-icon:before {\\n    content: \\\"\\\\e914\\\";\\n    font-family: 'sbicons';\\n}\\n\\n/* Specifies the border bottom styles for toolbar in light theme*/\\n.material #wrapper .e-toolbar,\\n.tailwind #wrapper .e-toolbar,\\n.bootstrap5 #wrapper .e-toolbar {\\n    border-bottom: 1px solid #eaeaeae0;\\n}\\n\\n/* Specifies the border bottom styles for toolbar in dark theme*/\\n.bootstrap5-dark #wrapper .e-toolbar,\\n.tailwind-dark #wrapper .e-toolbar,\\n.material-dark #wrapper .e-toolbar {\\n    border-bottom: 1px solid #eaeaea63;\\n}\\n.material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.material-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap4.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.tailwind.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.tailwind-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 12px;\\n}\\n.e-bigger.material #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 16px;\\n}\\n.bootstrap4 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap5.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap5-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 8px;\\n}\\n.bootstrap5 #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap5-dark #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 5px;\\n}\\n.bootstrap.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child,\\n.bootstrap-dark.e-bigger #wrapper .e-toolbar .e-toolbar-items:not(.e-tbar-pos) .e-toolbar-item:first-child {\\n    margin-left: 10px;\\n}\\n.e-folder {\\n    text-align: center;\\n    font-weight: 500;\\n    font-size: 16px\\n}\\n.e-bigger .e-folder {\\n    font-size: 18px;\\n}\\n.bootstrap5 .e-folder-name,\\n.bootstrap5-dark .e-folder-name {\\n    margin-top: -2px;\\n}\\n.tailwind .e-folder-name,\\n.tailwind-dark .e-folder-name,\\n.bootstrap4 .e-folder-name,\\n.bootstrap .e-folder-name,\\n.bootstrap-dark .e-folder-name {\\n    margin-top: 3px;\\n    margin-left: 7px;\\n}\\n.material .e-folder-name,\\n.material-dark .e-folder-name {\\n    margin-top: 1px;\\n    margin-left: 9px;\\n}\\n\\n/*Specifies sample level style for ListView*/\\n.bootstrap5 .e-template-list,\\n.bootstrap5-dark .e-template-list,\\n.tailwind .e-template-list,\\n.tailwind-dark .e-template-list,\\n.bootstrap4 .e-template-list {\\n    border: 0;\\n    border-radius: 0;\\n}\\n.e-template-list .e-list-item {\\n    line-height: 1.5;\\n    padding: 0 16px;\\n}\\n.list-wrapper {\\n    display: inline-flex;\\n    width: 100%;\\n}\\n.e-bigger .list-wrapper {\\n    padding-left: 8px;\\n}\\n.list-wrapper .text {\\n    padding-left: 14px;\\n}\\n.e-bigger .list-wrapper .text {\\n    padding-left: 20px;\\n}\\n.e-listbox-wrapper .list-wrapper .text {\\n    font-weight: bold;\\n    font-size: 13px;\\n}\\n.list-wrapper .e-avatar {\\n    background-color: transparent;\\n    float: left;\\n}\\n\\n/* Specifies the background color of listview in dark theme*/\\n.material-dark #wrapper .e-list-item,\\n.bootstrap-dark #wrapper .e-list-item {\\n    background-color: transparent;\\n}\\n.material .list-wrapper .e-avatar,\\n.material-dark .list-wrapper .e-avatar,\\n.highcontrast .list-wrapper .e-avatar {\\n    margin-top: 3px;\\n}\\n.fabric .list-wrapper .e-avatar,\\n.fabric-dark .list-wrapper .e-avatar {\\n    margin-top: 6px;\\n}\\n.material.e-bigger .list-wrapper .e-avatar,\\n.material-dark.e-bigger .list-wrapper .e-avatar,\\n.highcontrast.e-bigger .list-wrapper .e-avatar {\\n    margin-top: 7px;\\n}\\n.fabric-dark.e-bigger .list-wrapper .e-avatar,\\n.fabric.e-bigger .list-wrapper .e-avatar,\\n.bootstrap-dark.e-bigger .list-wrapper .e-avatar,\\n.bootstrap.e-bigger .list-wrapper .e-avatar {\\n    margin-top: 10px;\\n}\\n.bootstrap .list-wrapper .e-avatar,\\n.bootstrap-dark .list-wrapper .e-avatar {\\n    margin-top: 5px;\\n}\\n.bootstrap5 .list-wrapper .e-avatar,\\n.bootstrap5-dark .list-wrapper .e-avatar {\\n    margin-top: -3px;\\n}\\n.tailwind .list-wrapper .e-avatar,\\n.tailwind-dark .list-wrapper .e-avatar {\\n    margin-top: -1px;\\n}\\n.bootstrap5.e-bigger .list-wrapper .e-avatar,\\n.bootstrap5-dark.e-bigger .list-wrapper .e-avatar {\\n    margin-top: 0px;\\n}\\n.e-bigger.bootstrap5 .sidebar-list .e-listview:not(.e-list-template) .e-list-item,\\n.e-bigger.bootstrap5-dark .sidebar-list .e-listview:not(.e-list-template) .e-list-item {\\n    height: 43px;\\n}\\n.bootstrap4.e-bigger .sidebar-list .e-listview:not(.e-list-template) .e-list-item {\\n    padding: 12px 14px;\\n}\\n\\n/*Specifies the icon styles for the ListView*/\\n.javascript {\\n    background-image: url('../images/sidebar/images/javascript.svg');\\n}\\n.typescript {\\n    background-image: url('../images/sidebar/images/typescript.svg')\\n}\\n.angular {\\n    background-image: url('../images/sidebar/images/angular.svg');\\n}\\n.vue {\\n    background-image: url('../images/sidebar/images/vue.svg');\\n}\\n.react {\\n    background-image: url('../images/sidebar/images/react.svg');\\n}\\n.material-dark #wrapper .listcontent {\\n    color: white;\\n}\\n\\n/* Specifies the border right color for the sidebar in light theme*/\\n.material .sidebar-list,\\n.fabric .sidebar-list,\\n.tailwind .sidebar-list,\\n.highcontrast .sidebar-list,\\n.bootstrap5 .sidebar-list {\\n    border-right: 1px solid #eaeaeae0;\\n}\\n\\n/* Specifies the border right color for the sidebar in dark theme*/\\n.material-dark .sidebar-list,\\n.fabric-dark .sidebar-list,\\n.tailwind-dark .sidebar-list,\\n.bootstrap5-dark .sidebar-list {\\n    border-right: 1px solid #eaeaea63;\\n}\\n.material #sidelistwrapper,\\n.fabric #sidelistwrapper,\\n.tailwind #sidelistwrapper,\\n.fluent #sidelistwrapper,\\n.bootstrap5 #sidelistwrapper {\\n    border: 1px solid #d7d7d7;\\n}\\n.material-dark #sidelistwrapper,\\n.fabric-dark #sidelistwrapper,\\n.tailwind-dark #sidelistwrapper,\\n.highcontrast #sidelistwrapper,\\n.fluent-dark #sidelistwrapper,\\n.bootstrap5-dark #sidelistwrapper {\\n    border: 1px solid #ffffff;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/sidebar-list/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sidebar/sidebar-list/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"SidebarPlugin\"], _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__[\"ListViewPlugin\"]);\n\nvar folderTemplate = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo\", {\n    template: '<div class=\"e-folder\"><div class=\"e-folder-name\">Language</div></div>',\n    data() {\n        return {\n            data: {}\n        };\n    }\n});\nvar listTemplate = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo\", {\n    template: \"<div class='list-wrapper'>\"\n                + \"<span :class='data.pic' class='e-avatar e-avatar-xsmall e-avatar-circle'></span>\"\n                + \"<span class='text e-text-content'>{{data.text}}</span>\"\n                + \"</div>\",\n    data() {\n        return {\n            data: {}\n        };\n    }\n});\nvar ListData = [\n    { id: \"1\", text: \"JavaScript\", pic: \"javascript\", \n            description: \"JavaScript (JS) is an interpreted computer programming language. \" +\n            \"It was originally implemented as part of web browsers so that client-side scripts\" + \n            \"could interact with the user, control the browser, communicate asynchronously, and\" +\n            \"alter the document content that was displayed. However, it has recently\" +\n            \"become common in both game development and the creation of desktop applications.\" },\n        { id: \"2\", text: \"TypeScript\", pic: \"typescript\", \n            description: \"It is a typed superset of JavaScript that compiles to plain JavaScript.\" + \n            \"TypeScript is an open-source, object-oriented programing language. It contains all elements of JavaScript\" + \n            \"It is a language designed for large-scale JavaScript application development, which can be executed on any\" + \n            \"browser, any Host, and any Operating System. TypeScript is a language as well as a set of tools.\" +\n            \" TypeScript is the ES6 version of JavaScript with some additional features.\" },\n        { id: \"3\", text: \"Angular\", pic: \"angular\", \n            description: \"Angular is a platform and framework for building single-page client applications using HTML and TypeScript.\" +\n            \" Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript\" +\n            \" libraries that you import into your applications.\" },\n        { id: \"4\", text: \"React\", pic: \"react\",\n            description: \"React is a declarative, efficient, and flexible JavaScript library for building user interfaces.\" +\n            \" It lets you compose complex UIs from small and isolated pieces of code called “components”.\" +\n            \" It can also render on the server using Node.\" },\n        { id: \"5\", text: \"Vue\", pic: \"vue\", \n            description: \"A progressive framework for building user interfaces. It is incrementally adoptable.\" +\n            \" The core library is focused on the view layer only and is easy to pick up and integrate with other\" +\n            \" libraries or existing projects. On the other hand, Vue is also perfectly capable of powering\" +\n            \" sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.\" }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            folderTemplate: function () {\n                return {\n                    template: folderTemplate\n                };\n            },\n            ListData: ListData,\n            listTemplates: function() {\n                return {\n                    template: listTemplate\n                };\n            },\n            listFields: { id: \"id\", text: \"text\" }\n        }\n    },\n    methods: {\n        // Listview select event handler\n        OnSelect: function(args) {\n          document.getElementById('listContent').innerHTML = args.data.description;\n        },\n        toolbarCliked: function(args) {\n            if(args.item.tooltipText == \"Menu\") {\n                this.$refs.sidebarInstance.toggle();\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sidebar/sidebar-list/App.vue?vue&type=template&id=f5c0c6b0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sidebar/sidebar-list/App.vue?vue&type=template&id=f5c0c6b0& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\",attrs:{\"id\":\"wrapper\"}},[_c('div',{attrs:{\"id\":\"sidelistwrapper\"}},[_c('div',[_c('ejs-toolbar',{attrs:{\"cssClass\":\"listToolbar\"},on:{\"clicked\":_vm.toolbarCliked}},[_c('e-items',[_c('e-item',{attrs:{\"prefixIcon\":\"e-tbar-menu-icon tb-icons\",\"tooltipText\":\"Menu\"}}),_vm._v(\" \"),_c('e-item',{attrs:{\"template\":_vm.folderTemplate}})],1)],1)],1),_vm._v(\" \"),_vm._m(0)]),_vm._v(\" \"),_c('ejs-sidebar',{ref:\"sidebarInstance\",staticClass:\"sidebar-list\",attrs:{\"id\":\"listSidebar\",\"width\":\"250px\",\"target\":\".listmaincontent\",\"type\":\"Auto\",\"isOpen\":true}},[_c('ejs-listview',{attrs:{\"id\":\"listSidebarList\",\"dataSource\":_vm.ListData,\"cssClass\":\"e-template-list\",\"template\":_vm.listTemplates,\"fields\":_vm.listFields},on:{\"select\":_vm.OnSelect}})],1),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)],1)}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"listmaincontent\"},[_c('div',[_c('div',{staticClass:\"listcontent\",attrs:{\"id\":\"listContent\"}},[_vm._v(\"\\n                    Before getting into any programming language, one should have basic knowledge about HTML, CSS, and JavaScript. These are the basic building blocks of web designing. HTML describes the structure of a web page whereas CSS describes the presentation of the web page.\\n                \")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            The \"),_c('code',[_vm._v(\"Sidebar\")]),_vm._v(\" ListView sample demonstrates customizing the \"),_c('code',[_vm._v(\"Sidebar\")]),_vm._v(\" with ListView. Click on the hamburger menu icon to expand/collapse the sidebar. Click the ListView item to see the corresponding item details.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            The Sidebar can allow to render custom components like TreeView, ListView, Menu, etc.\\n        \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            In this sample, the ListView component is placed inside the Sidebar for navigation. Click the ListView item to see the corresponding item details.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/sidebar/sidebar-list/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });