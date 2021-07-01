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
/******/ 		"dashboard-layout/predefinedlayouts/main": 0
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
/******/ 	deferredModules.push(["./Samples/dashboard-layout/predefinedlayouts/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/dashboard-layout/predefinedlayouts/App.vue":
/*!************************************************************!*\
  !*** ./Samples/dashboard-layout/predefinedlayouts/App.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6f75b99d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6f75b99d& */ \"./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=template&id=6f75b99d&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6f75b99d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6f75b99d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/predefinedlayouts/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=template&id=6f75b99d&":
/*!*******************************************************************************************!*\
  !*** ./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=template&id=6f75b99d& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f75b99d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6f75b99d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=template&id=6f75b99d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f75b99d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f75b99d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/predefinedlayouts/main.js":
/*!************************************************************!*\
  !*** ./Samples/dashboard-layout/predefinedlayouts/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/dashboard-layout/predefinedlayouts/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-predefined .row .e-btn {\\n        display: inline;\\n}\\n.dashboard-predefined #predefined-dashboard {\\n        padding: 10px;\\n        width: 100%;\\n}\\n.dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {\\n        font-size: 14px;\\n        font-weight: 500;\\n        height: 37px;\\n        padding: 0 12px;\\n        vertical-align: middle;\\n        text-align: left;\\n        border-bottom: 0.5px solid #e3e3e3;\\n}\\n.dashboard-predefined #predefined-dashboard .panel-content {\\n        vertical-align: middle;\\n        font-size: 15px;\\n        font-size: 15px;\\n        font-weight: 500;\\n        color: rgba(0, 0, 0, 0.61);\\n        text-align: center;\\n}\\n.dashboard-predefined .e-panel .e-header-text {\\n        padding: 12px 0 12px 0;\\n}\\n.dashboard-predefined #predefined-dashboard .e-panel-content {\\n        height: calc(100% - 28px);\\n        width: 100%;\\n        display: block;\\n}\\n.dashboard-predefined #predefined-dashboard .e-panel .e-header-text {\\n        padding: 12px 0 12px 0;\\n}\\n.dashboard-predefined .row {\\n        margin-left: 0px;\\n        margin-right: 0px;\\n}\\n.dashboard-predefined .row-header {\\n        font-size: 13px;\\n        font-weight: 500;\\n}\\n.dashboard-predefined #predefined-dashboard .e-panel-content {\\n        padding: 15px;\\n}\\n.dashboard-predefined #reset {\\n        display: block;\\n        margin: 0 auto;\\n        width: 90px;\\n}\\n@font-face {\\n        font-family: 'e-image-icons';\\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n        font-weight: normal;\\n        font-style: normal;\\n}\\n.dashboard-predefined .image-pattern-style {\\n        font-family: 'e-image-icons';\\n        speak: none;\\n        font-size: 80px;\\n        font-style: normal;\\n        font-weight: normal;\\n        font-variant: normal;\\n        text-transform: none;\\n        -webkit-font-smoothing: antialiased;\\n        -moz-osx-font-smoothing: grayscale;\\n        background-color: transparent;\\n        background-size: contain;\\n        background-repeat: no-repeat;\\n        height: 80px;\\n        width: calc((100% - 12px) / 3);\\n        cursor: pointer;\\n        border: 1px solid #D5D5D5;\\n        background-position: center;\\n        float: left;\\n        margin-right: 3px;\\n        line-height: 77px;\\n        text-align: center;\\n}\\n.dashboard-predefined .e-selected-style {\\n        border-color: #006CE6;\\n        border-width: 2px;\\n}\\n.dashboard-predefined .image-pattern-style#template1::before {\\n        content: \\\"\\\\E700\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template2::before {\\n        content: \\\"\\\\E701\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template3::before {\\n        content: \\\"\\\\E702\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template4::before {\\n        content: \\\"\\\\E703\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template5::before {\\n        content: \\\"\\\\E704\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template6::before {\\n        content: \\\"\\\\E705\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template7::before {\\n        content: \\\"\\\\E703\\\";\\n        -webkit-transform: rotate(90deg);\\n        -moz-transform: rotate(90deg);\\n        -o-transform: rotate(90deg);\\n        -ms-transform: rotate(90deg);\\n        transform: rotate(90deg);\\n}\\n.dashboard-predefined .image-pattern-style#template8::before {\\n        content: \\\"\\\\E702\\\";\\n        -webkit-transform: rotate(90deg);\\n        -moz-transform: rotate(90deg);\\n        -o-transform: rotate(90deg);\\n        -ms-transform: rotate(90deg);\\n        transform: rotate(90deg);\\n}\\n.dashboard-predefined .image-pattern-style#template9::before {\\n        content: \\\"\\\\E701\\\";\\n        -webkit-transform: rotate(90deg);\\n        -moz-transform: rotate(90deg);\\n        -o-transform: rotate(90deg);\\n        -ms-transform: rotate(90deg);\\n        transform: rotate(90deg);\\n}\\n.dashboard-predefined .header-border {\\n        position: absolute;\\n        top: 0px;\\n        left: 0px;\\n        width: 100%;\\n        border-top: 5px solid #2684ff\\n}\\n.dashboard-predefined.sb-property-border {\\n        border: 1px solid lightgray;\\n}\\n/* highcontrast theme style */\\nbody.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel {\\n    background: #000;\\n}\\nbody.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\nbody.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .panel-content {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-WGL2PLN7KYDG32TJ7CHRBLZ5QENFZDIWQ6CCHOERAN3YNCKJ54PA/Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,gBAAgB;CACvB;AACD;QACQ,cAAc;QACd,YAAY;CACnB;AACD;QACQ,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,gBAAgB;QAChB,uBAAuB;QACvB,iBAAiB;QACjB,mCAAmC;CAC1C;AACD;QACQ,uBAAuB;QACvB,gBAAgB;QAChB,gBAAgB;QAChB,iBAAiB;QACjB,2BAA2B;QAC3B,mBAAmB;CAC1B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,0BAA0B;QAC1B,YAAY;QACZ,eAAe;CACtB;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,iBAAiB;QACjB,kBAAkB;CACzB;AACD;QACQ,gBAAgB;QAChB,iBAAiB;CACxB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,eAAe;QACf,eAAe;QACf,YAAY;CACnB;AACD;QACQ,6BAA6B;QAC7B,ulFAAulF;QACvlF,oBAAoB;QACpB,mBAAmB;CAC1B;AACD;QACQ,6BAA6B;QAC7B,YAAY;QACZ,gBAAgB;QAChB,mBAAmB;QACnB,oBAAoB;QACpB,qBAAqB;QACrB,qBAAqB;QACrB,oCAAoC;QACpC,mCAAmC;QACnC,8BAA8B;QAC9B,yBAAyB;QACzB,6BAA6B;QAC7B,aAAa;QACb,+BAA+B;QAC/B,gBAAgB;QAChB,0BAA0B;QAC1B,4BAA4B;QAC5B,YAAY;QACZ,kBAAkB;QAClB,kBAAkB;QAClB,mBAAmB;CAC1B;AACD;QACQ,sBAAsB;QACtB,kBAAkB;CACzB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;QACjB,iCAAiC;QACjC,8BAA8B;QAC9B,4BAA4B;QAC5B,6BAA6B;QAC7B,yBAAyB;CAChC;AACD;QACQ,iBAAiB;QACjB,iCAAiC;QACjC,8BAA8B;QAC9B,4BAA4B;QAC5B,6BAA6B;QAC7B,yBAAyB;CAChC;AACD;QACQ,iBAAiB;QACjB,iCAAiC;QACjC,8BAA8B;QAC9B,4BAA4B;QAC5B,6BAA6B;QAC7B,yBAAyB;CAChC;AACD;QACQ,mBAAmB;QACnB,SAAS;QACT,UAAU;QACV,YAAY;QACZ,6BAA6B;CACpC;AACD;QACQ,4BAA4B;CACnC;AACD,8BAA8B;AAC9B;IACI,iBAAiB;CACpB;AACD;IACI,iCAAiC;CACpC;AACD;IACI,iCAAiC;CACpC\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-predefined .row .e-btn {\\n        display: inline;\\n}\\n.dashboard-predefined #predefined-dashboard {\\n        padding: 10px;\\n        width: 100%;\\n}\\n.dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {\\n        font-size: 14px;\\n        font-weight: 500;\\n        height: 37px;\\n        padding: 0 12px;\\n        vertical-align: middle;\\n        text-align: left;\\n        border-bottom: 0.5px solid #e3e3e3;\\n}\\n.dashboard-predefined #predefined-dashboard .panel-content {\\n        vertical-align: middle;\\n        font-size: 15px;\\n        font-size: 15px;\\n        font-weight: 500;\\n        color: rgba(0, 0, 0, 0.61);\\n        text-align: center;\\n}\\n.dashboard-predefined .e-panel .e-header-text {\\n        padding: 12px 0 12px 0;\\n}\\n.dashboard-predefined #predefined-dashboard .e-panel-content {\\n        height: calc(100% - 28px);\\n        width: 100%;\\n        display: block;\\n}\\n.dashboard-predefined #predefined-dashboard .e-panel .e-header-text {\\n        padding: 12px 0 12px 0;\\n}\\n.dashboard-predefined .row {\\n        margin-left: 0px;\\n        margin-right: 0px;\\n}\\n.dashboard-predefined .row-header {\\n        font-size: 13px;\\n        font-weight: 500;\\n}\\n.dashboard-predefined #predefined-dashboard .e-panel-content {\\n        padding: 15px;\\n}\\n.dashboard-predefined #reset {\\n        display: block;\\n        margin: 0 auto;\\n        width: 90px;\\n}\\n@font-face {\\n        font-family: 'e-image-icons';\\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n        font-weight: normal;\\n        font-style: normal;\\n}\\n.dashboard-predefined .image-pattern-style {\\n        font-family: 'e-image-icons';\\n        speak: none;\\n        font-size: 80px;\\n        font-style: normal;\\n        font-weight: normal;\\n        font-variant: normal;\\n        text-transform: none;\\n        -webkit-font-smoothing: antialiased;\\n        -moz-osx-font-smoothing: grayscale;\\n        background-color: transparent;\\n        background-size: contain;\\n        background-repeat: no-repeat;\\n        height: 80px;\\n        width: calc((100% - 12px) / 3);\\n        cursor: pointer;\\n        border: 1px solid #D5D5D5;\\n        background-position: center;\\n        float: left;\\n        margin-right: 3px;\\n        line-height: 77px;\\n        text-align: center;\\n}\\n.dashboard-predefined .e-selected-style {\\n        border-color: #006CE6;\\n        border-width: 2px;\\n}\\n.dashboard-predefined .image-pattern-style#template1::before {\\n        content: \\\"\\\\e700\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template2::before {\\n        content: \\\"\\\\e701\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template3::before {\\n        content: \\\"\\\\e702\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template4::before {\\n        content: \\\"\\\\e703\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template5::before {\\n        content: \\\"\\\\e704\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template6::before {\\n        content: \\\"\\\\e705\\\";\\n}\\n.dashboard-predefined .image-pattern-style#template7::before {\\n        content: \\\"\\\\e703\\\";\\n        -webkit-transform: rotate(90deg);\\n        -moz-transform: rotate(90deg);\\n        -o-transform: rotate(90deg);\\n        -ms-transform: rotate(90deg);\\n        transform: rotate(90deg);\\n}\\n.dashboard-predefined .image-pattern-style#template8::before {\\n        content: \\\"\\\\e702\\\";\\n        -webkit-transform: rotate(90deg);\\n        -moz-transform: rotate(90deg);\\n        -o-transform: rotate(90deg);\\n        -ms-transform: rotate(90deg);\\n        transform: rotate(90deg);\\n}\\n.dashboard-predefined .image-pattern-style#template9::before {\\n        content: \\\"\\\\e701\\\";\\n        -webkit-transform: rotate(90deg);\\n        -moz-transform: rotate(90deg);\\n        -o-transform: rotate(90deg);\\n        -ms-transform: rotate(90deg);\\n        transform: rotate(90deg);\\n}\\n.dashboard-predefined .header-border {\\n        position: absolute;\\n        top: 0px;\\n        left: 0px;\\n        width: 100%;\\n        border-top: 5px solid #2684ff\\n}\\n.dashboard-predefined.sb-property-border {\\n        border: 1px solid lightgray;\\n}\\n/* highcontrast theme style */\\nbody.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel {\\n    background: #000;\\n}\\nbody.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\nbody.highcontrast .dashboard-predefined #predefined-dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .panel-content {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"DashboardLayoutPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        headerCount: 0,\n        spacing: [10,10]\n    };\n  },\n  methods:{\n      onButtonClick: function(args){\n        var selectedElement = document.getElementsByClassName('e-selected-style');\n        this.$refs.dashboard.$el.ej2_instances[0].removeAll();\n        this.initializeTemplate(selectedElement[0]);\n      },\n      initializeTemplate: function(element){\n          var panels = [\n    {\n        'panel1': { 'sizeX': 4, 'sizeY': 3, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },\n        'panel3': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 0 },\n        'panel3': { 'sizeX': 4, 'sizeY': 3, 'row': 1, 'col': 2 },\n        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 3, 'sizeY': 3, 'row': 1, 'col': 0 },\n        'panel3': { 'sizeX': 3, 'sizeY': 3, 'row': 1, 'col': 3 },\n        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 0 },\n        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 2 },\n        'panel4': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 4 },\n        'panel5': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 6, 'sizeY': 1, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 4, 'sizeY': 3, 'row': 1, 'col': 0 },\n        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 1, 'col': 4 },\n        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 4, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },\n        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },\n        'panel4': { 'sizeX': 6, 'sizeY': 2, 'row': 3, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },\n        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },\n        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },\n        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },\n        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }\n    },\n    {\n        'panel1': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 0 },\n        'panel2': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 2 },\n        'panel3': { 'sizeX': 2, 'sizeY': 3, 'row': 0, 'col': 4 },\n        'panel4': { 'sizeX': 6, 'sizeY': 1, 'row': 3, 'col': 0 }\n    }\n]\n          var updatedPanels = [];\n          var index = parseInt(element.getAttribute('data-id'), 10) - 1;\n          var panel = Object.keys(panels[index]).map(function (panelIndex){\n            return panels[index][panelIndex];\n         });\n        for (var i = 0; i < panel.length; i++) {\n            var panelModelValue = {\n                id: i.toString(),\n                row: panel[i].row,\n                col: panel[i].col,\n                sizeX: panel[i].sizeX,\n                sizeY: panel[i].sizeY,\n                header: \"<div class='e-header-text'>Header Area</div><div class='header-border'></div>\",\n                content: \"<div class='panel-content'>Content Area</div>\"\n            };\n            updatedPanels.push(panelModelValue);           \n        }\n         this.$refs.dashboard.$el.ej2_instances[0].panels = updatedPanels;\n      }\n  },\n  mounted(){\n      var proxy = this;\n      document.getElementById('template').onclick = function (args) {\n        var target = args.target;\n        var selectedElement = document.getElementsByClassName('e-selected-style');\n        if (selectedElement.length) {\n            selectedElement[0].classList.remove('e-selected-style');\n        }\n        if (target.className === 'image-pattern-style') {\n            proxy.$refs.dashboard.$el.ej2_instances[0].removeAll();\n            proxy.initializeTemplate(args.target);\n        }\n        target.classList.add('e-selected-style');\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=template&id=6f75b99d&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/predefinedlayouts/App.vue?vue&type=template&id=6f75b99d& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-8 control-section dashboard-predefined\",\n        attrs: { id: \"predefined-container\" }\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"content-wrapper\",\n            staticStyle: { \"max-width\": \"100%\" }\n          },\n          [\n            _c(\n              \"ejs-dashboardlayout\",\n              {\n                ref: \"dashboard\",\n                attrs: {\n                  columns: 6,\n                  id: \"predefined-dashboard\",\n                  cellSpacing: _vm.spacing\n                }\n              },\n              [\n                _c(\n                  \"e-panels\",\n                  [\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 0,\n                        col: 0,\n                        sizeX: 4,\n                        sizeY: 3,\n                        header:\n                          \"<div class='e-header-text'>Header Area</div><div class='header-border'></div>\",\n                        content: \"<div class='panel-content'>Content Area</div>\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 0,\n                        col: 4,\n                        sizeX: 2,\n                        sizeY: 3,\n                        header:\n                          \"<div class='e-header-text'>Header Area</div><div class='header-border'></div>\",\n                        content: \"<div class='panel-content'>Content Area</div>\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 3,\n                        col: 0,\n                        sizeX: 6,\n                        sizeY: 1,\n                        header:\n                          \"<div class='e-header-text'>Header Area</div><div class='header-border'></div>\",\n                        content: \"<div class='panel-content'>Content Area</div>\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section dashboard-predefined\",\n        attrs: { id: \"propertyWrapper\" }\n      },\n      [\n        _c(\"div\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"\\n                Properties\\n            \")\n        ]),\n        _vm._v(\" \"),\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\",\n            staticStyle: { padding: \"10px\" }\n          },\n          [\n            _c(\n              \"ejs-button\",\n              {\n                attrs: { id: \"reset\" },\n                nativeOn: {\n                  click: function($event) {\n                    return _vm.onButtonClick.apply(null, arguments)\n                  }\n                }\n              },\n              [_vm._v(\"Reset\")]\n            )\n          ],\n          1\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"row property-panel-content\", attrs: { id: \"template\" } },\n      [\n        _c(\"div\", { staticClass: \"row row-header\" }, [\n          _vm._v(\n            \"\\n                    Choose dashboard layout\\n                \"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"row\", staticStyle: { \"padding-top\": \"3px\" } },\n          [\n            _c(\"div\", {\n              staticClass: \"image-pattern-style e-selected-style\",\n              attrs: { id: \"template1\", \"data-id\": \"1\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"div\", {\n              staticClass: \"image-pattern-style\",\n              attrs: { id: \"template2\", \"data-id\": \"2\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"div\", {\n              staticClass: \"image-pattern-style\",\n              attrs: { id: \"template3\", \"data-id\": \"3\" }\n            })\n          ]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"row\", staticStyle: { \"padding-top\": \"3px\" } },\n          [\n            _c(\"div\", {\n              staticClass: \"image-pattern-style\",\n              attrs: { id: \"template4\", \"data-id\": \"4\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"div\", {\n              staticClass: \"image-pattern-style\",\n              attrs: { id: \"template5\", \"data-id\": \"5\" }\n            }),\n            _vm._v(\" \"),\n            _c(\"div\", {\n              staticClass: \"image-pattern-style\",\n              attrs: { id: \"template6\", \"data-id\": \"6\" }\n            })\n          ]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates, the functionality of dynamically updating the panels inside the DashboardLayout by selecting it from the pre-defined values in the properties panel. Go to the properties panel section and select any of the pre-defined layout,\\n        based on selection the panles are updated in the dashboard layout dynamically inside the DashboardLayout. Click the \"\n        ),\n        _c(\"code\", [_vm._v(\"reset\")]),\n        _vm._v(\" button to reset the panels settings of the layout.\\n        \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates how to update the panels dynamically in the dashboard layout component.\\n        \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/predefinedlayouts/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });