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
/******/ 		"dashboard-layout/api/main": 0
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
/******/ 	deferredModules.push(["./Samples/dashboard-layout/api/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/dashboard-layout/api/App.vue":
/*!**********************************************!*\
  !*** ./Samples/dashboard-layout/api/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0fc29ef4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0fc29ef4& */ \"./Samples/dashboard-layout/api/App.vue?vue&type=template&id=0fc29ef4&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/dashboard-layout/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0fc29ef4_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css& */ \"./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0fc29ef4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0fc29ef4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/dashboard-layout/api/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/api/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/dashboard-layout/api/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0fc29ef4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0fc29ef4_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0fc29ef4_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0fc29ef4_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0fc29ef4_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/api/App.vue?vue&type=template&id=0fc29ef4&":
/*!*****************************************************************************!*\
  !*** ./Samples/dashboard-layout/api/App.vue?vue&type=template&id=0fc29ef4& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0fc29ef4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0fc29ef4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=template&id=0fc29ef4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0fc29ef4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0fc29ef4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?");

/***/ }),

/***/ "./Samples/dashboard-layout/api/main.js":
/*!**********************************************!*\
  !*** ./Samples/dashboard-layout/api/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/dashboard-layout/api/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.dashboard-api .form-label {\\n        margin-bottom: 0;\\n        font-size: 12px;\\n        line-height: 1.5;\\n        font-size: 13px;\\n        font-weight: 500;\\n}\\n.dashboard-api .row .e-btn {\\n        display: inline;\\n}\\n.dashboard-api #api_dashboard {\\n        padding: 10px;\\n        width: 100%;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout .e-panel .panel-content {\\n        vertical-align: middle;        \\n        font-size: 15px;\\n        font-weight: 500;\\n        color: rgba(0, 0, 0, 0.61);\\n        text-align: center;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n        margin-bottom: 0;\\n        background-color: rgba(0, 0, 0, .03);\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {\\n        height: calc(100% - 28px);\\n        width: 100%;\\n        display: block;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header .e-header-text {\\n        padding: 12px 0 12px 0;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {\\n        font-size: 15px;\\n        font-weight: 500;\\n        height: 37px;\\n        padding: 10px;\\n        vertical-align: middle;\\n        text-align: left;\\n        border-bottom: 0.5px solid #e3e3e3;\\n}\\n.dashboard-api .row {\\n        margin-left: 0px;\\n        margin-right: 0px;\\n}\\n.dashboard-api .row-header {\\n        font-size: 13px;\\n        font-weight: 500;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {\\n        padding: 15px;\\n}\\n.dashboard-api.sb-property-border {\\n        border: 1px solid lightgray;\\n}\\n\\n/* highcontrast style */\\nbody.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel {\\n    background: #000;\\n}\\nbody.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\nbody.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-resize.e-double {\\n    color: #fff;\\n    font-size: 8px;\\n    height: 16px;\\n    width: 16px;\\n}\\n.property-section.dashboard .e-input-group.e-control-wrapper {\\n        width:122px;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/youts-vue-samples_release_22.1.1/Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;QACjB,gBAAgB;QAChB,iBAAiB;CACxB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,cAAc;QACd,YAAY;CACnB;AACD;QACQ,uBAAuB;QACvB,gBAAgB;QAChB,iBAAiB;QACjB,2BAA2B;QAC3B,mBAAmB;CAC1B;AACD;QACQ,iBAAiB;QACjB,qCAAqC;CAC5C;AACD;QACQ,0BAA0B;QAC1B,YAAY;QACZ,eAAe;CACtB;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,gBAAgB;QAChB,iBAAiB;QACjB,aAAa;QACb,cAAc;QACd,uBAAuB;QACvB,iBAAiB;QACjB,mCAAmC;CAC1C;AACD;QACQ,iBAAiB;QACjB,kBAAkB;CACzB;AACD;QACQ,gBAAgB;QAChB,iBAAiB;CACxB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,4BAA4B;CACnC;;AAED,wBAAwB;AACxB;IACI,iBAAiB;CACpB;AACD;IACI,iCAAiC;CACpC;AACD;IACI,YAAY;IACZ,eAAe;IACf,aAAa;IACb,YAAY;CACf;AACD;QACQ,YAAY;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&\",\"sourcesContent\":[\"\\n.dashboard-api .form-label {\\n        margin-bottom: 0;\\n        font-size: 12px;\\n        line-height: 1.5;\\n        font-size: 13px;\\n        font-weight: 500;\\n}\\n.dashboard-api .row .e-btn {\\n        display: inline;\\n}\\n.dashboard-api #api_dashboard {\\n        padding: 10px;\\n        width: 100%;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout .e-panel .panel-content {\\n        vertical-align: middle;        \\n        font-size: 15px;\\n        font-weight: 500;\\n        color: rgba(0, 0, 0, 0.61);\\n        text-align: center;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n        margin-bottom: 0;\\n        background-color: rgba(0, 0, 0, .03);\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {\\n        height: calc(100% - 28px);\\n        width: 100%;\\n        display: block;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header .e-header-text {\\n        padding: 12px 0 12px 0;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-header {\\n        font-size: 15px;\\n        font-weight: 500;\\n        height: 37px;\\n        padding: 10px;\\n        vertical-align: middle;\\n        text-align: left;\\n        border-bottom: 0.5px solid #e3e3e3;\\n}\\n.dashboard-api .row {\\n        margin-left: 0px;\\n        margin-right: 0px;\\n}\\n.dashboard-api .row-header {\\n        font-size: 13px;\\n        font-weight: 500;\\n}\\n.dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-content {\\n        padding: 15px;\\n}\\n.dashboard-api.sb-property-border {\\n        border: 1px solid lightgray;\\n}\\n\\n/* highcontrast style */\\nbody.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel {\\n    background: #000;\\n}\\nbody.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-panel-header {\\n    color: rgba(255, 255, 255, 0.54);\\n}\\nbody.highcontrast .dashboard-api #api_dashboard.e-dashboardlayout.e-control .e-panel .e-panel-container .e-resize.e-double {\\n    color: #fff;\\n    font-size: 8px;\\n    height: 16px;\\n    width: 16px;\\n}\\n.property-section.dashboard .e-input-group.e-control-wrapper {\\n        width:122px;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/api/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"DashboardLayoutPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        count: 5,\n        value: 10,\n        spacing: [10,10]\n    };\n  },\n  methods:{\n      addPanel: function(args){\n          this.count = this.count + 1;\n          var ele = document.createElement('div');\n          ele.id = this.count.toString();\n          document.getElementById('content').appendChild(ele);\n        var panel = [{\n            'id': ele.id + '_layout', 'sizeX': 2, 'sizeY': 2, 'row': 0, 'col': 0,\n            header: \"<div>Panel \"+ this.count +\"</div>\"\n        }];\n        this.$refs.dashboard.$el.ej2_instances[0].addPanel(panel[0]);\n      },\n      removePanel: function (args) {\n        if (this.$refs.dashboard.$el.ej2_instances[0].panels.length > 0) {\n            for (var i = this.$refs.dashboard.$el.ej2_instances[0].panels.length - 1; i < this.$refs.dashboard.$el.ej2_instances[0].panels.length; i++) {\n                this.$refs.dashboard.$el.ej2_instances[0].removePanel(this.$refs.dashboard.$el.ej2_instances[0].panels[this.$refs.dashboard.$el.ej2_instances[0].panels.length - 1 - i].id);\n            }\n        }\n      },\n    onChange: function(args) {\n        var targetElement = args.event.target;\n        var previousElement = targetElement.previousElementSibling;\n        var nextElement = targetElement.nextElementSibling;\n        if ((previousElement !== null && previousElement.id === 'floating') || nextElement !== null && nextElement.previousElementSibling.id === 'floating') {\n            this.$refs.dashboard.$el.ej2_instances[0].allowFloating = args.checked;\n        }\n        if ((previousElement !== null && previousElement.id === 'resizing') || nextElement !== null && nextElement.previousElementSibling.id === 'resizing') {\n            this.$refs.dashboard.$el.ej2_instances[0].allowResizing = args.checked;\n        }\n    },\n    valueChange: function(args) {\n        this.$refs.dashboard.$el.ej2_instances[0].cellSpacing = [parseInt(args.value, 10), parseInt(args.value, 10)];\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=template&id=0fc29ef4&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/api/App.vue?vue&type=template&id=0fc29ef4& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-8 control-section dashboard-api\",\n        attrs: { id: \"dashboard-control-section\" },\n      },\n      [\n        _c(\n          \"div\",\n          {\n            staticClass: \"content-wrapper\",\n            staticStyle: { \"max-width\": \"100%\" },\n          },\n          [\n            _c(\n              \"ejs-dashboardlayout\",\n              {\n                ref: \"dashboard\",\n                attrs: {\n                  id: \"api_dashboard\",\n                  columns: 6,\n                  allowResizing: true,\n                  cellSpacing: _vm.spacing,\n                },\n              },\n              [\n                _c(\n                  \"e-panels\",\n                  [\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 0,\n                        col: 0,\n                        sizeX: 2,\n                        sizeY: 2,\n                        header: \"<div>Panel 1</div>\",\n                      },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 0,\n                        col: 2,\n                        sizeX: 2,\n                        sizeY: 2,\n                        header: \"<div>Panel 2</div>\",\n                      },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 0,\n                        col: 4,\n                        sizeX: 2,\n                        sizeY: 2,\n                        header: \"<div>Panel 3</div>\",\n                      },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 2,\n                        col: 0,\n                        sizeX: 4,\n                        sizeY: 2,\n                        header: \"<div>Panel 4</div>\",\n                      },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-panel\", {\n                      attrs: {\n                        row: 2,\n                        col: 4,\n                        sizeX: 2,\n                        sizeY: 2,\n                        header: \"<div>Panel 5</div>\",\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"content\" } }),\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section dashboard-api\",\n        attrs: { id: \"propertyWrapper\" },\n      },\n      [\n        _c(\"div\", { staticClass: \"property-panel-header\" }, [\n          _vm._v(\"\\n        Properties\\n    \"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row property-panel-content\" }, [\n          _c(\"div\", { staticClass: \"card-body\" }, [\n            _c(\"div\", { staticClass: \"form-group row\" }, [\n              _c(\n                \"label\",\n                {\n                  staticClass: \"col-sm-4 col-form-label form-label\",\n                  attrs: { for: \"settings-margin-input\" },\n                },\n                [_vm._v(\"CellSpacing\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"col-sm-8\" },\n                [\n                  _c(\"ejs-numerictextbox\", {\n                    attrs: {\n                      placeholder: \"Ex: 10\",\n                      min: 1,\n                      max: 20,\n                      floatLabelType: _vm.Never,\n                      change: _vm.valueChange,\n                      value: _vm.value,\n                      id: \"cellspacing\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"form-group row\" }, [\n              _c(\n                \"label\",\n                {\n                  staticClass: \"col-sm-4 col-form-label form-label\",\n                  attrs: { for: \"settings-bubble-up-input\" },\n                },\n                [_vm._v(\"AllowFloating\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"col-sm-8\" },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: {\n                      checked: true,\n                      change: _vm.onChange,\n                      id: \"floating\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"form-group row\" }, [\n              _c(\n                \"label\",\n                {\n                  staticClass: \"col-sm-4 col-form-label form-label\",\n                  attrs: { for: \"settings-bubble-up-input\" },\n                },\n                [_vm._v(\"AllowResizing\")]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"col-sm-8\" },\n                [\n                  _c(\"ejs-checkbox\", {\n                    attrs: {\n                      checked: true,\n                      change: _vm.onChange,\n                      id: \"resizing\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"form-group row\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"col-sm-12\" },\n                [\n                  _c(\n                    \"ejs-button\",\n                    {\n                      attrs: { id: \"add\", cssClass: \"e-primary\" },\n                      nativeOn: {\n                        click: function ($event) {\n                          return _vm.addPanel.apply(null, arguments)\n                        },\n                      },\n                    },\n                    [_vm._v(\"Add panel\")]\n                  ),\n                  _vm._v(\" \"),\n                  _c(\n                    \"ejs-button\",\n                    {\n                      staticStyle: { \"margin-left\": \"3px\" },\n                      attrs: { id: \"remove\", cssClass: \"e-danger\" },\n                      nativeOn: {\n                        click: function ($event) {\n                          return _vm.removePanel.apply(null, arguments)\n                        },\n                      },\n                    },\n                    [_vm._v(\"Remove panel\")]\n                  ),\n                ],\n                1\n              ),\n            ]),\n          ]),\n        ]),\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This sample demonstrates the properties of DashboardLayout component from the property pane. Select any combination of properties from the property pane to customize the DashboardLayout.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n            This sample allows to configure the \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              attrs: {\n                href: \"https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#cellspacing\",\n                target: \"_blank\",\n              },\n            },\n            [_vm._v(\"cellSpacing\")]\n          ),\n        ]),\n        _vm._v(\", \\n    \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              attrs: {\n                href: \"https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowfloating\",\n                target: \"_blank\",\n              },\n            },\n            [_vm._v(\"allowFloating\")]\n          ),\n        ]),\n        _vm._v(\" and\\n    \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              attrs: {\n                href: \"https://ej2.syncfusion.com/vue/documentation/api/dashboard-layout#allowresizing\",\n                target: \"_blank\",\n              },\n            },\n            [_vm._v(\"allowResizing\")]\n          ),\n        ]),\n        _vm._v(\" properties of the dashboard layout component.\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/dashboard-layout/api/App.vue?vue&type=style&index=0&id=0fc29ef4&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"42856a00\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/dashboard-layout/api/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });