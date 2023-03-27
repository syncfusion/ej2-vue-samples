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
/******/ 		"pdfviewer/custom-toolbar/main": 0
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
/******/ 	deferredModules.push(["./Samples/pdfviewer/custom-toolbar/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue":
/*!**************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1104a770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1104a770& */ \"./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1104a770___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1104a770___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pdfviewer/custom-toolbar/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770&":
/*!*********************************************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1104a770___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1104a770& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1104a770___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1104a770___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?");

/***/ }),

/***/ "./Samples/pdfviewer/custom-toolbar/main.js":
/*!**************************************************!*\
  !*** ./Samples/pdfviewer/custom-toolbar/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pdfviewer/custom-toolbar/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start*/\\n#pdfviewer {\\n        height: 640px;\\n}\\n.control-section {\\n        padding-top: 0px !important;\\n}\\n#magnificationToolbar {\\n        background: transparent;\\n        height: auto;\\n        min-height: 56px;\\n        width: auto;\\n        border: none;\\n        position: absolute;\\n        z-index: 900;\\n        top: calc(100% - 110px);\\n        left: calc(100% - 120px);\\n        transform: rotate(90deg);\\n}\\ndiv#magnificationToolbar.e-toolbar .e-toolbar-items {\\n        background: transparent;\\n        padding: 2px 3px 2px 2px;\\n}\\n#magnificationToolbar.e-toolbar .e-tbar-btn {\\n        border-radius: 50%;\\n        min-height: 30px;\\n        min-width: 30px;\\n        border: 1px solid #c8c8c8;\\n}\\n#customToolbar {\\n        top: 0px;\\n        z-index: 900;\\n}\\n.e-bookmark-popup {\\n        height: 300px;\\n        max-width: 300px;\\n}\\n.e-text-search-popup {\\n        height: 104px;\\n        max-width: 348px;\\n}\\n.e-custom-search-input {\\n        width: 234px;\\n}\\n.e-text-search-popup .e-footer-content, .e-bookmark-popup .e-footer-content {\\n        padding: 0;\\n        height: 0;\\n}\\n.search-button, .search-button:disabled, .search-button:focus, .search-button:hover {\\n        background: transparent;\\n        box-shadow: none;\\n}\\n#popup .e-dlg-content {\\n        padding-left: 0;\\n        padding-bottom: 0;\\n}\\n.e-pv-bookmarks {\\n        min-width: 234px;\\n}\\n.e-pv-current-page-number {\\n        width: 46px;\\n        height: 28px;\\n        text-align: center;\\n}\\n.material .e-pv-current-page-number {\\n        border-width: 1px;\\n}\\n.e-icons {\\n        font-family: \\\"e-icons\\\";\\n        font-style: normal;\\n        font-variant: normal;\\n        font-weight: normal;\\n        line-height: 1;\\n        text-transform: none;\\n}\\n.e-pv-icon::before {\\n        font-family: 'e-icons';\\n}\\n.e-pv-open-document-icon::before  {\\n        content: '\\\\E91C';\\n}\\n.e-pv-download-document-icon::before {\\n        content: '\\\\E914';\\n}\\n.e-pv-print-document-icon::before {\\n        content: '\\\\E917';\\n}\\n.e-pv-previous-page-navigation-icon::before {\\n        content: '\\\\E910';\\n}\\n.e-pv-next-page-navigation-icon::before {\\n        content: '\\\\E911';\\n}\\n.e-pv-zoom-out-icon::before {\\n        content: '\\\\E912';\\n}\\n.e-pv-zoom-in-icon::before {\\n        content: '\\\\E91D';\\n}\\n.e-pv-fit-page-icon::before {\\n        content: '\\\\E91B';\\n}\\n.e-btn-icon.e-pv-zoom-out-icon.e-icons {\\n        transform: rotate(90deg);\\n}\\n@font-face {\\n        font-family: \\\"e-icons\\\";\\n        font-style: normal;\\n        font-weight: normal;\\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');\\n}\\n/* custom code end*/\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/dfviewer-vue-samples_master-QELPG6NNPJAMGGWGSIU4GOYYRF3AG4SNNQDARZQQZVHYONIX77SQ/Samples/pdfviewer/custom-toolbar/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0DA,sBAAsB;AACtB;QACQ,cAAc;CACrB;AACD;QACQ,4BAA4B;CACnC;AACD;QACQ,wBAAwB;QACxB,aAAa;QACb,iBAAiB;QACjB,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,aAAa;QACb,wBAAwB;QACxB,yBAAyB;QACzB,yBAAyB;CAChC;AACD;QACQ,wBAAwB;QACxB,yBAAyB;CAChC;AACD;QACQ,mBAAmB;QACnB,iBAAiB;QACjB,gBAAgB;QAChB,0BAA0B;CACjC;AACD;QACQ,SAAS;QACT,aAAa;CACpB;AACD;QACQ,cAAc;QACd,iBAAiB;CACxB;AACD;QACQ,cAAc;QACd,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,WAAW;QACX,UAAU;CACjB;AACD;QACQ,wBAAwB;QACxB,iBAAiB;CACxB;AACD;QACQ,gBAAgB;QAChB,kBAAkB;CACzB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,YAAY;QACZ,aAAa;QACb,mBAAmB;CAC1B;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,uBAAuB;QACvB,mBAAmB;QACnB,qBAAqB;QACrB,oBAAoB;QACpB,eAAe;QACf,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,yBAAyB;CAChC;AACD;QACQ,uBAAuB;QACvB,mBAAmB;QACnB,oBAAoB;QACpB,uyGAAuyG;CAC9yG;AACD,oBAAoB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start*/\\n#pdfviewer {\\n        height: 640px;\\n}\\n.control-section {\\n        padding-top: 0px !important;\\n}\\n#magnificationToolbar {\\n        background: transparent;\\n        height: auto;\\n        min-height: 56px;\\n        width: auto;\\n        border: none;\\n        position: absolute;\\n        z-index: 900;\\n        top: calc(100% - 110px);\\n        left: calc(100% - 120px);\\n        transform: rotate(90deg);\\n}\\ndiv#magnificationToolbar.e-toolbar .e-toolbar-items {\\n        background: transparent;\\n        padding: 2px 3px 2px 2px;\\n}\\n#magnificationToolbar.e-toolbar .e-tbar-btn {\\n        border-radius: 50%;\\n        min-height: 30px;\\n        min-width: 30px;\\n        border: 1px solid #c8c8c8;\\n}\\n#customToolbar {\\n        top: 0px;\\n        z-index: 900;\\n}\\n.e-bookmark-popup {\\n        height: 300px;\\n        max-width: 300px;\\n}\\n.e-text-search-popup {\\n        height: 104px;\\n        max-width: 348px;\\n}\\n.e-custom-search-input {\\n        width: 234px;\\n}\\n.e-text-search-popup .e-footer-content, .e-bookmark-popup .e-footer-content {\\n        padding: 0;\\n        height: 0;\\n}\\n.search-button, .search-button:disabled, .search-button:focus, .search-button:hover {\\n        background: transparent;\\n        box-shadow: none;\\n}\\n#popup .e-dlg-content {\\n        padding-left: 0;\\n        padding-bottom: 0;\\n}\\n.e-pv-bookmarks {\\n        min-width: 234px;\\n}\\n.e-pv-current-page-number {\\n        width: 46px;\\n        height: 28px;\\n        text-align: center;\\n}\\n.material .e-pv-current-page-number {\\n        border-width: 1px;\\n}\\n.e-icons {\\n        font-family: \\\"e-icons\\\";\\n        font-style: normal;\\n        font-variant: normal;\\n        font-weight: normal;\\n        line-height: 1;\\n        text-transform: none;\\n}\\n.e-pv-icon::before {\\n        font-family: 'e-icons';\\n}\\n.e-pv-open-document-icon::before  {\\n        content: '\\\\e91c';\\n}\\n.e-pv-download-document-icon::before {\\n        content: '\\\\e914';\\n}\\n.e-pv-print-document-icon::before {\\n        content: '\\\\e917';\\n}\\n.e-pv-previous-page-navigation-icon::before {\\n        content: '\\\\e910';\\n}\\n.e-pv-next-page-navigation-icon::before {\\n        content: '\\\\e911';\\n}\\n.e-pv-zoom-out-icon::before {\\n        content: '\\\\e912';\\n}\\n.e-pv-zoom-in-icon::before {\\n        content: '\\\\e91d';\\n}\\n.e-pv-fit-page-icon::before {\\n        content: '\\\\e91b';\\n}\\n.e-btn-icon.e-pv-zoom-out-icon.e-icons {\\n        transform: rotate(90deg);\\n}\\n@font-face {\\n        font-family: \\\"e-icons\\\";\\n        font-style: normal;\\n        font-weight: normal;\\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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ZWd1bGFyY3VzdG9tLXRvb2xiYXJbMTkwOF1jdXN0b20tdG9vbGJhclsxOTA4XVZlcnNpb24gMS4wY3VzdG9tLXRvb2xiYXJbMTkwOF1Gb250IGdlbmVyYXRlZCB1c2luZyBTeW5jZnVzaW9uIE1ldHJvIFN0dWRpb3d3dy5zeW5jZnVzaW9uLmNvbQAgAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBSAGUAZwB1AGwAYQByAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBjAHUAcwB0AG8AbQAtAHQAbwBvAGwAYgBhAHIAWwAxADkAMAA4AF0AVgBlAHIAcwBpAG8AbgAgADEALgAwAGMAdQBzAHQAbwBtAC0AdABvAG8AbABiAGEAcgBbADEAOQAwADgAXQBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIAB1AHMAaQBuAGcAIABTAHkAbgBjAGYAdQBzAGkAbwBuACAATQBlAHQAcgBvACAAUwB0AHUAZABpAG8AdwB3AHcALgBzAHkAbgBjAGYAdQBzAGkAbwBuAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwAIVG9wLWljb24LZG93bi1hcnJvdzIKUFZfWm9vbW91dAlQVl9ab29taW4LUFZfRG93bmxvYWQLUFZfQm9va21hcmsJUFZfU2VhcmNoCFBWX1ByaW50C1BWX1ByZXZpb3VzB1BWX05leHQIUFZfQ2xvc2UMUFZfRml0VG9QYWdlB1BWX09wZW4AAA==) format('truetype');\\n}\\n/* custom code end*/\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pdfviewer */ \"./node_modules/@syncfusion/ej2-vue-pdfviewer/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-calendars */ \"./node_modules/@syncfusion/ej2-vue-calendars/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n    \n    \n    \n    \n    vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_3__[\"CalendarPlugin\"]);\n\n    vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"PdfViewerPlugin\"]);\n    vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__[\"ToolbarPlugin\"]);\n\n    var toolbar;\n    var viewer;\n\tvar fileName;\n    var currentPageBox;\n\n    function updatePageNavigation() {\n        if (viewer.currentPageNumber === 1) {\n            toolbar.enableItems(document.getElementById('previousPage'), false);\n            toolbar.enableItems(document.getElementById('nextPage'), true);\n        }\n        else if (viewer.currentPageNumber === viewer.pageCount) {\n            toolbar.enableItems(document.getElementById('previousPage'), true);\n            toolbar.enableItems(document.getElementById('nextPage'), false);\n        }\n        else {\n            toolbar.enableItems(document.getElementById('previousPage'), true);\n            toolbar.enableItems(document.getElementById('nextPage'), true);\n        }\n    }\n\n    function onCurrentPageBoxKeypress(event) {\n        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 13) {\n            event.preventDefault();\n            return false;\n        }\n        else {\n            var currentPageNumber = parseInt(currentPageBox.value);\n            if (event.which === 13) {\n                if (currentPageNumber > 0 && currentPageNumber <= viewer.pageCount) {\n                    viewer.navigation.goToPage(currentPageNumber);\n                }\n                else {\n                    currentPageBox.value = viewer.currentPageNumber.toString();\n                }\n            }\n            return true;\n        }\n    }\n\n    function onCurrentPageBoxClicked() {\n        currentPageBox.select();\n    }\n\n    function readFile(args) {\n        // tslint:disable-next-line\n        let upoadedFiles = args.target.files;\n        if (args.target.files[0] !== null) {\n            let uploadedFile = upoadedFiles[0];\n            fileName = uploadedFile.name;\n            if (uploadedFile) {\n                let reader = new FileReader();\n                reader.readAsDataURL(uploadedFile);\n                // tslint:disable-next-line\n                reader.onload = function (e) {\n                    let uploadedFileUrl = e.currentTarget.result;\n                    viewer.load(uploadedFileUrl, null);\n                    viewer.fileName = fileName;\n                };\n            }\n        }\n    };\n\n    /* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n        data: function () {\n            return {\n                serviceUrl: \"https://services.syncfusion.com/vue/production/api/pdfviewer\",\n                documentPath: \"Hive_Succinctly.pdf\",\n                enableToolbar: false,\n\t\t\t\tenableNavigationToolbar: false,\n                pageNoTemplate: '<div class=\"\"><input type=\"text\" class=\"e-input-group e-pv-current-page-number\" id=\"currentPage\" /></div>',\n                pageTextTemplate: '<div class=\"\"><span class=\"e-pv-total-page-number\" id=\"totalPage\">of 0</span></div>'\n            }\n        },\n        provide: {\n            PdfViewer: [_syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Magnification\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Navigation\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"LinkAnnotation\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"BookmarkView\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"ThumbnailView\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"Print\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"TextSelection\"], _syncfusion_ej2_vue_pdfviewer__WEBPACK_IMPORTED_MODULE_1__[\"TextSearch\"]]\n        },\n        methods: {\n            openClicked: function (args) {\n                document.getElementById('fileUpload').click();\n            },\n            previousClicked: function (args) {\n                viewer.navigation.goToPreviousPage();\n            },\n            nextClicked: function (args) {\n                viewer.navigation.goToNextPage();\n            },\n            printClicked: function (args) {\n                viewer.print.print();\n            },\n            downloadClicked: function (args) {\n                viewer.download();\n            },\n            pageFitClicked: function (args) {\n                viewer.magnification.fitToPage();\n            },\n            zoomInClicked: function (args) {\n                viewer.magnification.zoomIn();\n            },\n            zoomOutClicked: function (args) {\n                viewer.magnification.zoomOut();\n            },\n            pageChange: function (args) {\n                currentPageBox = document.getElementById('currentPage');\n                currentPageBox.value = viewer.currentPageNumber.toString();\n                updatePageNavigation();\n            },\n            documentLoad: function (args) {\n                viewer = this.$refs.pdfviewer.ej2Instances;\n                toolbar = this.$refs.toolbar.ej2Instances;\n                currentPageBox = document.getElementById('currentPage');\n                currentPageBox.value = '1';\n                document.getElementById('totalPage').textContent = 'of ' + viewer.pageCount;\n                currentPageBox.addEventListener('keypress', onCurrentPageBoxKeypress);\n                currentPageBox.addEventListener('click', onCurrentPageBoxClicked);\n                document.getElementById('fileUpload').addEventListener('change', readFile, false);\n                updatePageNavigation();\n            }\n        }\n    }));\n\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pdfviewer/custom-toolbar/App.vue?vue&type=template&id=1104a770& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"ejs-toolbar\",\n        { ref: \"toolbar\", attrs: { id: \"customToolbar\" } },\n        [\n          _c(\n            \"e-items\",\n            [\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-open-document-icon\",\n                  tooltipText: \"Open\",\n                  click: _vm.openClicked\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-previous-page-navigation-icon\",\n                  id: \"previousPage\",\n                  tooltipText: \"Previous Page\",\n                  align: \"Center\",\n                  click: _vm.previousClicked\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-next-page-navigation-icon\",\n                  id: \"nextPage\",\n                  tooltipText: \"Next Page\",\n                  align: \"Center\",\n                  click: _vm.nextClicked\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  template: _vm.pageNoTemplate,\n                  tooltipText: \"Page Number\",\n                  align: \"Center\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  template: _vm.pageTextTemplate,\n                  tooltipText: \"Page Number\",\n                  align: \"Center\"\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-print-document-icon\",\n                  tooltipText: \"Print\",\n                  align: \"Right\",\n                  click: _vm.printClicked\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-download-document-icon\",\n                  tooltipText: \"Download\",\n                  align: \"Right\",\n                  click: _vm.downloadClicked\n                }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"ejs-toolbar\",\n        { attrs: { id: \"magnificationToolbar\" } },\n        [\n          _c(\n            \"e-items\",\n            [\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-fit-page-icon\",\n                  id: \"fitPage\",\n                  tooltipText: \"Fit to page\",\n                  click: _vm.pageFitClicked\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-zoom-in-icon\",\n                  id: \"zoomIn\",\n                  tooltipText: \"Zoom in\",\n                  click: _vm.zoomInClicked\n                }\n              }),\n              _vm._v(\" \"),\n              _c(\"e-item\", {\n                attrs: {\n                  prefixIcon: \"e-pv-zoom-out-icon\",\n                  id: \"zoomOut\",\n                  tooltipText: \"Zoom out\",\n                  click: _vm.zoomOutClicked\n                }\n              })\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"input\", {\n        staticStyle: {\n          display: \"block\",\n          visibility: \"hidden\",\n          width: \"0\",\n          height: \"0\"\n        },\n        attrs: { type: \"file\", id: \"fileUpload\", accept: \".pdf\" }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"control-section\" },\n        [\n          _c(\"ejs-pdfviewer\", {\n            ref: \"pdfviewer\",\n            attrs: {\n              id: \"pdfviewer\",\n              pageChange: _vm.pageChange,\n              documentLoad: _vm.documentLoad,\n              serviceUrl: _vm.serviceUrl,\n              documentPath: _vm.documentPath,\n              enableToolbar: _vm.enableToolbar,\n              enableNavigationToolbar: _vm.enableNavigationToolbar\n            }\n          })\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1)\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrate how to perform the PDF Viewer core functionalities using a custom toolbar.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this example, you can see PDF Viewer control API in action to perform the functionalities.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\"Go to Previous Page - \"),\n          _c(\"code\", [_vm._v(\"viewer.navigation.goToPreviousPage()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Go to Next Page - \"),\n          _c(\"code\", [_vm._v(\"viewer.navigation.goToNextPage()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Go to Page - \"),\n          _c(\"code\", [_vm._v(\"viewer.navigation.goToPage(pageindex)\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Print - \"),\n          _c(\"code\", [_vm._v(\"viewer.print.print()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Download - \"),\n          _c(\"code\", [_vm._v(\"viewer.download()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Fit To Page - \"),\n          _c(\"code\", [_vm._v(\"viewer.magnification.fitToPage()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Zoom In - \"),\n          _c(\"code\", [_vm._v(\"viewer.magnification.zoomIn()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Zoom Out - \"),\n          _c(\"code\", [_vm._v(\"viewer.magnification.zoomOut()\")])\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Load document - \"),\n          _c(\"code\", [_vm._v(\"viewer.load(fileName, password)\")])\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the PDF Viewer instantiation can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started\"\n            }\n          },\n          [_vm._v(\"\\n          documentation section\\n        \")]\n        ),\n        _vm._v(\".\\n      \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/pdfviewer/custom-toolbar/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });