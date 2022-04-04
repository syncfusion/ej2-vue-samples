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
/******/ 		"toast/template/main": 0
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
/******/ 	deferredModules.push(["./Samples/toast/template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/toast/template/App.vue":
/*!****************************************!*\
  !*** ./Samples/toast/template/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5b416e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5b416e70& */ \"./Samples/toast/template/App.vue?vue&type=template&id=5b416e70&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/toast/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/toast/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5b416e70___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5b416e70___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/toast/template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?");

/***/ }),

/***/ "./Samples/toast/template/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/toast/template/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/toast/template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?");

/***/ }),

/***/ "./Samples/toast/template/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./Samples/toast/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/toast/template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?");

/***/ }),

/***/ "./Samples/toast/template/App.vue?vue&type=template&id=5b416e70&":
/*!***********************************************************************!*\
  !*** ./Samples/toast/template/App.vue?vue&type=template&id=5b416e70& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b416e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5b416e70& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/toast/template/App.vue?vue&type=template&id=5b416e70&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b416e70___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b416e70___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?");

/***/ }),

/***/ "./Samples/toast/template/main.js":
/*!****************************************!*\
  !*** ./Samples/toast/template/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/toast/template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/toast/template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/toast/template/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/toast/template/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n@font-face {\\n    font-family: 'Toast_icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.toast-icons {\\n    font-family: 'Toast_icons' !important;\\n    speak: none;\\n    font-size: 55px;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: 1;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\nbody>#toast_template .e-toast {\\n    width: 400px !important;\\n}\\nbody>#toast_template .e-toast img {\\n    height: 50%;\\n}\\n\\n/* custom code start */\\n.toast-template-section #reminder {\\n    text-align: center;\\n    margin: 15px;\\n}\\n/* custom code end */\\n#toast_custom .e-toast .e-toast-title,\\n#toast_custom .e-toast .e-toast-message,\\n#toast_custom  .e-toast .e-toast-message .e-toast-content,\\n#toast_custom  .e-toast .e-toast-close-icon {\\n    color: #fff;\\n}\\n#toast_custom .e-toast-template {\\n    display: inline-flex;\\n}\\n#toast_custom .e-toast-icon.e-toast-image {\\n    border-radius: 50%;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    height: 50px !important;\\n    width: 50px !important;\\n    background-size: 50px 50px;\\n}\\n#toast_custom .camden .e-toast-icon.e-toast-image,\\n#toast_custom .chase .e-toast-icon.e-toast-image {\\n    width: 65px !important;\\n}\\n@media (max-width: 1052px) {\\n.toast-template-section .row .col-xs-6.col-sm-6.col-lg-6.col-md-6 {\\n        width: 100%;\\n}\\n}\\n#template_toast #snooze,\\n#template_toast .snooze,\\n#template_toast #dismiss{\\n    color: #fff;\\n}\\n#template_toast .horizontal-align .toast-content .toast-title {\\n    font-weight: 500;\\n    color: #fff;\\n}\\n#template_toast .horizontal-align .toast-content .toast-message {\\n    opacity: 0.75;\\n    color: #fff;\\n}\\n.material #template_toast #snooze,\\n.material #template_toast #dismiss,\\n.fabric #template_toast #snooze,\\n.fabric #template_toast #dismiss,\\n.highcontrast #template_toast #snooze,\\n.highcontrast #template_toast #dismiss {\\n    background-color: transparent;\\n    border-color: transparent;\\n}\\n.toast-template-section .e-toast-container {\\n    top: 0;\\n}\\n.toast-template-section #toast_template_target {\\n    width: 70%;\\n    height: 700px;\\n    border: none;\\n    margin: auto;\\n}\\n@media (max-width: 540px) {\\n.toast-template-section #toast_template_target {\\n        width: 100%;\\n}\\n}\\n#toast_template.e-toast-container .e-toast,\\n#toast_custom .e-toast {\\n    background-color: #3277b2;\\n}\\n@media (min-width: 740px) {\\n.toast-template-section #toast_template_target {\\n        width: 400px;\\n}\\n}\\n.toast-template-section #toast_template_target .e-toast-container .e-toast {\\n    width: inherit !important;\\n    display: inline-block;\\n}\\n#template_toast .toast-icons {\\n    font-size: 35px;\\n    height: auto;\\n    margin: auto;\\n}\\n#template_toast .toast-icons.e-alarm::before {\\n    content: \\\"\\\\E702\\\";\\n    color: #fff;\\n}\\n#template_toast .horizontal-align {\\n    display: inline-flex;\\n    flex-direction: row;\\n    width: 100%;\\n}\\n#template_toast .horizontal-align,\\n#template_toast #snoozedropDown,\\n#template_toast .snooze,\\n#template_toast .snoozeBtn {\\n    margin: 10px 0;\\n}\\n#template_toast .horizontal-align .toast-content {\\n    display: inline-flex;\\n    flex: 1;\\n    flex-direction: column;\\n    margin-left: 10px;\\n}\\n.material #template_toast .e-input,\\n.material #template_toast .e-ddl-icon {\\n    color: white !important;\\n}\\n.bootstrap5 #toast_custom.e-toast-container .e-toast .e-toast-message,\\n.bootstrap5-dark #toast_custom.e-toast-container .e-toast .e-toast-message {\\n    margin-left: 95px;\\n}\\n.bootstrap5 #template_toast,\\n.bootstrap5-dark #template_toast {\\n    padding: 10px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-TBEZQMVJYHQGC4AGWNLKMB5E5MHJ7J6VA3JEILKENKJRWPMH6O6Q/Samples/toast/template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,2BAA2B;IAC3B,+6HAA+6H;IAC/6H,oBAAoB;IACpB,mBAAmB;CACtB;AACD;IACI,sCAAsC;IACtC,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;IACf,oCAAoC;IACpC,mCAAmC;CACtC;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,YAAY;CACf;;AAED,uBAAuB;AACvB;IACI,mBAAmB;IACnB,aAAa;CAChB;AACD,qBAAqB;AACrB;;;;IAII,YAAY;CACf;AACD;IACI,qBAAqB;CACxB;AACD;IACI,mBAAmB;IACnB,6BAA6B;IAC7B,uBAAuB;IACvB,wBAAwB;IACxB,uBAAuB;IACvB,2BAA2B;CAC9B;AACD;;IAEI,uBAAuB;CAC1B;AACD;AACA;QACQ,YAAY;CACnB;CACA;AACD;;;IAGI,YAAY;CACf;AACD;IACI,iBAAiB;IACjB,YAAY;CACf;AACD;IACI,cAAc;IACd,YAAY;CACf;AACD;;;;;;IAMI,8BAA8B;IAC9B,0BAA0B;CAC7B;AACD;IACI,OAAO;CACV;AACD;IACI,WAAW;IACX,cAAc;IACd,aAAa;IACb,aAAa;CAChB;AACD;AACA;QACQ,YAAY;CACnB;CACA;AACD;;IAEI,0BAA0B;CAC7B;AACD;AACA;QACQ,aAAa;CACpB;CACA;AACD;IACI,0BAA0B;IAC1B,sBAAsB;CACzB;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,aAAa;CAChB;AACD;IACI,iBAAiB;IACjB,YAAY;CACf;AACD;IACI,qBAAqB;IACrB,oBAAoB;IACpB,YAAY;CACf;AACD;;;;IAII,eAAe;CAClB;AACD;IACI,qBAAqB;IACrB,QAAQ;IACR,uBAAuB;IACvB,kBAAkB;CACrB;AACD;;IAEI,wBAAwB;CAC3B;AACD;;IAEI,kBAAkB;CACrB;AACD;;IAEI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n@font-face {\\n    font-family: 'Toast_icons';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.toast-icons {\\n    font-family: 'Toast_icons' !important;\\n    speak: none;\\n    font-size: 55px;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-variant: normal;\\n    text-transform: none;\\n    line-height: 1;\\n    -webkit-font-smoothing: antialiased;\\n    -moz-osx-font-smoothing: grayscale;\\n}\\nbody>#toast_template .e-toast {\\n    width: 400px !important;\\n}\\nbody>#toast_template .e-toast img {\\n    height: 50%;\\n}\\n\\n/* custom code start */\\n.toast-template-section #reminder {\\n    text-align: center;\\n    margin: 15px;\\n}\\n/* custom code end */\\n#toast_custom .e-toast .e-toast-title,\\n#toast_custom .e-toast .e-toast-message,\\n#toast_custom  .e-toast .e-toast-message .e-toast-content,\\n#toast_custom  .e-toast .e-toast-close-icon {\\n    color: #fff;\\n}\\n#toast_custom .e-toast-template {\\n    display: inline-flex;\\n}\\n#toast_custom .e-toast-icon.e-toast-image {\\n    border-radius: 50%;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    height: 50px !important;\\n    width: 50px !important;\\n    background-size: 50px 50px;\\n}\\n#toast_custom .camden .e-toast-icon.e-toast-image,\\n#toast_custom .chase .e-toast-icon.e-toast-image {\\n    width: 65px !important;\\n}\\n@media (max-width: 1052px) {\\n.toast-template-section .row .col-xs-6.col-sm-6.col-lg-6.col-md-6 {\\n        width: 100%;\\n}\\n}\\n#template_toast #snooze,\\n#template_toast .snooze,\\n#template_toast #dismiss{\\n    color: #fff;\\n}\\n#template_toast .horizontal-align .toast-content .toast-title {\\n    font-weight: 500;\\n    color: #fff;\\n}\\n#template_toast .horizontal-align .toast-content .toast-message {\\n    opacity: 0.75;\\n    color: #fff;\\n}\\n.material #template_toast #snooze,\\n.material #template_toast #dismiss,\\n.fabric #template_toast #snooze,\\n.fabric #template_toast #dismiss,\\n.highcontrast #template_toast #snooze,\\n.highcontrast #template_toast #dismiss {\\n    background-color: transparent;\\n    border-color: transparent;\\n}\\n.toast-template-section .e-toast-container {\\n    top: 0;\\n}\\n.toast-template-section #toast_template_target {\\n    width: 70%;\\n    height: 700px;\\n    border: none;\\n    margin: auto;\\n}\\n@media (max-width: 540px) {\\n.toast-template-section #toast_template_target {\\n        width: 100%;\\n}\\n}\\n#toast_template.e-toast-container .e-toast,\\n#toast_custom .e-toast {\\n    background-color: #3277b2;\\n}\\n@media (min-width: 740px) {\\n.toast-template-section #toast_template_target {\\n        width: 400px;\\n}\\n}\\n.toast-template-section #toast_template_target .e-toast-container .e-toast {\\n    width: inherit !important;\\n    display: inline-block;\\n}\\n#template_toast .toast-icons {\\n    font-size: 35px;\\n    height: auto;\\n    margin: auto;\\n}\\n#template_toast .toast-icons.e-alarm::before {\\n    content: \\\"\\\\e702\\\";\\n    color: #fff;\\n}\\n#template_toast .horizontal-align {\\n    display: inline-flex;\\n    flex-direction: row;\\n    width: 100%;\\n}\\n#template_toast .horizontal-align,\\n#template_toast #snoozedropDown,\\n#template_toast .snooze,\\n#template_toast .snoozeBtn {\\n    margin: 10px 0;\\n}\\n#template_toast .horizontal-align .toast-content {\\n    display: inline-flex;\\n    flex: 1;\\n    flex-direction: column;\\n    margin-left: 10px;\\n}\\n.material #template_toast .e-input,\\n.material #template_toast .e-ddl-icon {\\n    color: white !important;\\n}\\n.bootstrap5 #toast_custom.e-toast-container .e-toast .e-toast-message,\\n.bootstrap5-dark #toast_custom.e-toast-container .e-toast .e-toast-message {\\n    margin-left: 95px;\\n}\\n.bootstrap5 #template_toast,\\n.bootstrap5-dark #template_toast {\\n    padding: 10px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/toast/template/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/toast/template/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-notifications */ \"./node_modules/@syncfusion/ej2-vue-notifications/index.js\");\n/* harmony import */ var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-dropdowns */ \"./node_modules/@syncfusion/ej2-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__[\"ToastPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function(){\n        return {\n            localFields: { text: 'Text', value: 'Id' },\n            data: [\n                { Id: '2min', Text: '2 minutes' },\n                { Id: '5min', Text: '5 minutes' },\n                { Id: '10min', Text: '10 minutes' },\n            ],\n            localWaterMark: 'Select a snooze time',\n            height: '200px',\n            cusPosition: { X: 'Right' },\n\t\t\ttempPosition: !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"Browser\"].isDevice ? { X: 'Right', Y: 'Bottom'} : { X: 'Center', Y: 'Top' },\n\t\t\ttempTarget: !_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"Browser\"].isDevice ? document.body : '#toast_template_target',\n            cusAnimation:  {\n                 hide: { effect: 'SlideRightOut' },\n                 show: { effect: 'SlideRightIn' }\n             },\n        }\n    },\n    mounted: function(){\n      this.toastData = [\n        { from: ' Anjolie Stokes', subject: 'Networking Referral', image: { url: './../../source/toast/resource/laura.png' }, },\n        { from: ' Ila Russo', subject: 'Business dinner invitation', image: { url: './../../source/toast/resource/janat.png' }, },\n        { from: ' Camden Mcmillan', subject: 'Reference Request - Cameran Hester', image: { url: './../../source/toast/resource/camden.png' }, },\n        { from: ' Chase Solomon', subject: 'New business relationship confirmation', image: { url: './../../source/toast/resource/chase.png' }, },\n        { from: ' Inga Scott', subject: 'Application for Sales Associate', image: { url: './../../source/toast/resource/michael.png' }, }];\n       this.toastFlag = 0;\n       this.snoozeFlag = false;\n    this.toastObj = document.getElementById('toast_template').ej2_instances[0];\n    this.listObj = new _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownList\"]({\n        placeholder: 'Select a snooze time',\n        popupHeight: '200px',\n        change: this.listChange\n    });\n    this.toastObjEmail = document.getElementById('toast_custom').ej2_instances[0];\n        setTimeout(() => {\n            this.toastObjEmail.show({ template: this.cardTemplateFn(this.toastData[this.toastFlag])[0].outerHTML });\n            ++this.toastFlag;\n            this.toastObj.show();\n        },200);\n     this.alarm= document.getElementById('Alarm_turn_on');     \n    },\n    methods: {\n       remainderClick: function(args) {\n            this.toastObjEmail.show({ template: this.cardTemplateFn(this.toastData[this.toastFlag])[0].outerHTML });\n            ++this.toastFlag;\n            if (this.toastFlag === (this.toastData.length)) {\n                this.toastFlag = 0; \n            } \n       },\n       alarmClick: function(args) {\n           this.toastObj.show();\n       },\n        onOpenToast: function(args) {\n         document.getElementById('snooze').addEventListener( 'click', function(e) {\n            this.snoozeFlag = true;\n            this.toastObj.hide();\n            }.bind(this));\n         document.getElementById('dismiss').addEventListener( 'click', function(e) {\n             this.toastObj.hide();  \n            }.bind(this));\n       },\n       onToastClose: function(args) {\n            this.alarm.style.display = 'inline-block';\n            if (this.snoozeFlag) {\n               this.toastObj.show({ timeOut: (parseInt(this.listObj.value.toString(), 10) * 60000 ) });\n               this.snoozeFlag = false;\n            }\n       },\n       onToastBeforeOpen: function(args) {\n             this.alarm.style.display = 'none';\n             this.listObj.appendTo(args.element.querySelector('#snoozeDD')); \n       },\n       cardTemplateFn: function(args) {\n            return Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"compile\"])(document.getElementById('toastEmail_template').innerHTML.trim())(args, this);\n       },\n       listChange: function(args){\n            this.snoozeFlag = true;\n            this.toastObj.hide();\n       },\n       created: function(args){\n            document.addEventListener('click', function(event) {\n               let closestEle = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"closest\"])(event.target, '.e-toast-container');\n               if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(this.toastObj) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(this.toastObjEmail) && !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(this.$refs.buttonShowRef) && event.target !== this.alarm && event.target !== this.$refs.buttonShowRef.$el && closestEle !== this.toastObj.element && closestEle !== this.toastObjEmail.element) {\n                   this.toastObj.hide('All');\n                   this.toastObjEmail.hide('All');\n               }\n            }.bind(this));\n        }\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/toast/template/App.vue?vue&type=template&id=5b416e70&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/toast/template/App.vue?vue&type=template&id=5b416e70& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section e-tab-section\"},[_c('div',{staticClass:\"col-lg-12 control-section toast-template-section\"},[_c('div',{staticClass:\"e-sample-resize-container\"},[_c('div',{staticClass:\"row\"},[_c('div',{attrs:{\"id\":\"reminder\"}},[_c('ejs-button',{ref:\"buttonShowRef\",staticClass:\"e-btn\",attrs:{\"id\":\"toast_mail_remainder\"},nativeOn:{\"click\":function($event){return _vm.remainderClick.apply(null, arguments)}}},[_vm._v(\"Mail Reminder\")]),_vm._v(\" \"),_c('ejs-button',{staticClass:\"e-btn\",staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"Alarm_turn_on\"},nativeOn:{\"click\":function($event){return _vm.alarmClick.apply(null, arguments)}}},[_vm._v(\"Turn on Alarm\")])],1)]),_vm._v(\" \"),_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6\"},[_c('ejs-toast',{attrs:{\"id\":\"toast_custom\",\"position\":_vm.cusPosition,\"newestOnTop\":\"true\",\"showCloseButton\":\"true\",\"timeOut\":\"0\",\"animation\":_vm.cusAnimation,\"created\":_vm.created}})],1),_vm._v(\" \"),_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6\"},[_c('ejs-toast',{attrs:{\"id\":\"toast_template\",\"template\":'toasttemplate',\"timeOut\":\"120000\",\"extendedTimeout\":\"0\",\"position\":_vm.tempPosition,\"target\":_vm.tempTarget,\"open\":_vm.onOpenToast,\"close\":_vm.onToastClose,\"beforeOpen\":_vm.onToastBeforeOpen},scopedSlots:_vm._u([{key:\"toasttemplate\",fn:function(){return [_c('div',{attrs:{\"id\":\"template_toast\"}},[_c('div',{staticClass:\"horizontal-align\"},[_c('div',{staticClass:\"e-icons toast-icons e-alarm\"}),_c('div',{staticClass:\"toast-content\"},[_c('div',{staticClass:\"toast-title\"},[_vm._v(\"Weekend Alarm\")]),_c('div',{staticClass:\"toast-message\"},[_vm._v(\"\\n                        With traffic, its likely to take 45 minutes to get to jenny\\\"s 24th Birthday Bash at Hillside Bar, 454 E.Olive Way by 10:00PM\")])])]),_c('img',{attrs:{\"src\":'source/toast/resource/map.jpg',\"width\":'100%',\"height\":'70%',\"alt\":'map'}}),_vm._v(\" \"),_c('div',{staticClass:\"snooze\"},[_vm._v(\" Snooze For \")]),_c('div',{attrs:{\"id\":\"snoozedropDown\"}},[_c('select',{attrs:{\"id\":\"snoozeDD\"}},[_c('option',{attrs:{\"value\":\"2min\"}},[_vm._v(\"2 minutes\")]),_c('option',{attrs:{\"value\":\"5min\"}},[_vm._v(\"5 minutes\")]),_c('option',{attrs:{\"value\":\"10min\"}},[_vm._v(\"10 minutes\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"snoozeBtn\"},[_c('button',{staticClass:\"e-btn e-flat e-primary\",staticStyle:{\"margin-right\":\"15px\"},attrs:{\"id\":\"snooze\"}},[_vm._v(\"Snooze for\")]),_c('button',{staticClass:\"e-btn e-flat e-primary\",attrs:{\"id\":\"dismiss\"}},[_vm._v(\" Dismiss \")])])])]},proxy:true}])}),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"toast_template_target\"}})],1)])])]),_vm._v(\" \"),_c('script',{attrs:{\"id\":\"template_toast_ele\",\"type\":\"text/x-template\"}},[_vm._v(\"\\n        <div id='template_toast' style=\\\"display: none\\\">\\n            <div class=\\\"horizontal-align\\\">\\n                <div class='e-icons toast-icons e-alarm'></div>\\n                <div class='toast-content'>\\n                    <div class='toast-title'>\\n                        Weekend Alarm\\n                    </div>\\n                    <div class='toast-message'>\\n                        With traffic, its likely to take 45 minutes to get to jenny's 24th Birthday Bash at Hillside Bar, 454 E.\\n                        Olive Way by 10:00 PM\\n                    </div>\\n                </div>\\n            </div>\\n            <img src=\\\"./../../source/toast/resource/map.jpg\\\" width=\\\"100%\\\" height=\\\"70%\\\">\\n            <div class=\\\"snooze\\\"> Snooze </div>\\n            <div id='snoozedropDown'>\\n             <select id=\\\"snoozeDD\\\">\\n                <option value=\\\"2min\\\">2 minutes</option>\\n                <option value=\\\"5min\\\">5 minutes</option>\\n                <option value=\\\"10min\\\">10 minutes</option>\\n             </select>\\n            </div>\\n            <div class=\\\"snoozeBtn\\\">\\n                <button id=\\\"snooze\\\" class='e-btn e-flat e-primary' style=\\\"margin-right: 15px;\\\">Snooze for</button>\\n                <button id=\\\"dismiss\\\" class='e-btn e-flat e-primary'> Dismiss </button>\\n            </div>\\n        </div>\\n    \")]),_vm._v(\" \"),_c('script',{attrs:{\"id\":\"toastEmail_template\",\"type\":\"text/x-template\"}},[_vm._v(\"\\n        <div class=\\\"e-toast-template \\\">\\n            ${if(image)}\\n            <img class=\\\"e-toast-icon e-toast-image\\\" src=\\\"${image.url}\\\" />\\n            ${/if} ${if(from || subject)}\\n            <div class=\\\"e-toast-message\\\">\\n                ${if(from)}\\n                <div class=\\\"e-toast-title\\\">${from}</div>\\n                ${/if} ${if(subject)}\\n                <div class=\\\"e-toast-content\\\">${subject}</div>\\n                ${/if}\\n            </div>\\n            ${/if}\\n        </div>\\n    \")]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the Template rendering of the Toast. Static HTML toast to display an alarm notification which can be snoozed or dismissed and Dynamic template rendered using template engine to display mail remainders.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"This sample illustrates the way to display the template content on the toast. With the usage of Template, the user can format and structure the HTML content to be displayed on the toast as per their application needs.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Alarm toast is integrated with button and drop-down list that allows to set timeOut for toast and close it.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Dynamic toast opened based on the data source given to add mail reminder notifications and it can be hidden using the close button available.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"More information about Toast can be found in this \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/toast/getting-started/\"}},[_vm._v(\"\\ndocumentation section\")]),_vm._v(\".\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/toast/template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });