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
/******/ 		"tab/orientation/main": 0
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
/******/ 	deferredModules.push(["./Samples/tab/orientation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/tab/orientation/App.vue":
/*!*****************************************!*\
  !*** ./Samples/tab/orientation/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6f8d4a84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6f8d4a84& */ \"./Samples/tab/orientation/App.vue?vue&type=template&id=6f8d4a84&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/tab/orientation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6f8d4a84_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css& */ \"./Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6f8d4a84___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6f8d4a84___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/tab/orientation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?");

/***/ }),

/***/ "./Samples/tab/orientation/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/tab/orientation/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/tab/orientation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?");

/***/ }),

/***/ "./Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css&":
/*!**************************************************************************************!*\
  !*** ./Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6f8d4a84_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6f8d4a84_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6f8d4a84_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6f8d4a84_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6f8d4a84_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?");

/***/ }),

/***/ "./Samples/tab/orientation/App.vue?vue&type=template&id=6f8d4a84&":
/*!************************************************************************!*\
  !*** ./Samples/tab/orientation/App.vue?vue&type=template&id=6f8d4a84& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f8d4a84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6f8d4a84& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/orientation/App.vue?vue&type=template&id=6f8d4a84&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f8d4a84___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6f8d4a84___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?");

/***/ }),

/***/ "./Samples/tab/orientation/main.js":
/*!*****************************************!*\
  !*** ./Samples/tab/orientation/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/tab/orientation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/tab/orientation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#tab_orientation .e-content .e-item {\\n    font-size: 12px;\\n    padding: 10px;\\n    text-align: justify;\\n}\\n#tab_orientation .e-tab-text {\\n        display: inherit;\\n}\\n\\n/* custom code start */\\n@media screen and (min-width: 768px) {\\n.e-sample-resize-container {\\n            width: 75%;\\n            margin: 0 auto;\\n}\\n}\\n/* custom code end */\\n@media screen and (max-width: 481px) {\\n.control-section.e-tab-section,\\n        .container-fluid,\\n        .e-tab-section .content-wrapper,\\n        .sb-sample-content-area .e-active {\\n            padding-left: 0;\\n            padding-right: 0;\\n}\\n}\\n#tab_orientation .e-content .e-item .template-container {\\n    height: 63px;\\n    padding: 7px 16px 0 16px;\\n    border-bottom: 1px solid gainsboro;\\n}\\n#tab_orientation .e-content .e-item .template-container:hover {\\n    background: #eee;\\n}\\n.highcontrast #tab_orientation .e-content .e-item .template-container:hover\\n{\\n    background: #685708;\\n}\\n.bootstrap-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.bootstrap5-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.tailwind-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.fabric-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.material-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.fluent-dark #tab_orientation .e-content .e-item .template-container:hover\\n{\\n    background: #343a40;\\n}\\n.left {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n.empImg {\\n    height: 48px;\\n    width: 48px;\\n}\\n.empname, .role {\\n    font-size: 15px;\\n    line-height: normal;\\n}\\n.empname {\\n    font-weight: 500;\\n    padding: 0px !important;\\n    bottom: 0px !important;\\n    margin: 0px !important;\\n}\\n.role {\\n    color: grey;\\n    font-weight: 100;\\n}\\n.info {\\n    padding: 7px 0 0 15px;\\n}\\n.content-title {\\n    height: 50px;\\n    display: table;\\n    margin: 0 auto;\\n}\\n.cnt-text {\\n    vertical-align: middle;\\n    display: table-cell;\\n    font-size: 18px;\\n    font-weight: 600;\\n}\\n#property td {\\n    padding-bottom: 10px;\\n}\\n.property-panel-content {\\n    padding: 10px;\\n}\\n@media only screen and (min-width: 1824px) {\\n.e-tab-section .e-sample-resize-container {\\n        width: 60%;\\n}\\n.e-bigger .e-tab-section .e-sample-resize-container {\\n        width: 70%;\\n}\\n}\\n@media screen and (max-width: 376px) {\\n.e-tab-section {\\n            padding: 0 5px;\\n}\\n#tab_orientation .e-content.sb-sample-content-area .e-item.e-active {\\n            padding-left: 0;\\n            padding-right: 0;\\n}\\n.template-container {\\n            padding: 7px 5px 0;\\n}\\n#tab_orientation .e-content .e-item.e-active {\\n            padding: 10px 0;\\n}\\n.info {\\n            padding: 7px 0 0 8px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-3TYJHM65YRSQ6BGX2BVBOH3UJURWWFKK3HTJNKCV2A2XDQW7NQDQ/Samples/tab/orientation/App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,gBAAgB;IAChB,cAAc;IACd,oBAAoB;CACvB;AACD;QACQ,iBAAiB;CACxB;;AAED,uBAAuB;AACvB;AACA;YACY,WAAW;YACX,eAAe;CAC1B;CACA;AACD,qBAAqB;AACrB;AACA;;;;YAIY,gBAAgB;YAChB,iBAAiB;CAC5B;CACA;AACD;IACI,aAAa;IACb,yBAAyB;IACzB,mCAAmC;CACtC;AACD;IACI,iBAAiB;CACpB;AACD;;IAEI,oBAAoB;CACvB;AACD;;;;;;;IAOI,oBAAoB;CACvB;AACD;IACI,sBAAsB;IACtB,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,YAAY;CACf;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,iBAAiB;IACjB,wBAAwB;IACxB,uBAAuB;IACvB,uBAAuB;CAC1B;AACD;IACI,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,sBAAsB;CACzB;AACD;IACI,aAAa;IACb,eAAe;IACf,eAAe;CAClB;AACD;IACI,uBAAuB;IACvB,oBAAoB;IACpB,gBAAgB;IAChB,iBAAiB;CACpB;AACD;IACI,qBAAqB;CACxB;AACD;IACI,cAAc;CACjB;AACD;AACA;QACQ,WAAW;CAClB;AACD;QACQ,WAAW;CAClB;CACA;AACD;AACA;YACY,eAAe;CAC1B;AACD;YACY,gBAAgB;YAChB,iBAAiB;CAC5B;AACD;YACY,mBAAmB;CAC9B;AACD;YACY,gBAAgB;CAC3B;AACD;YACY,qBAAqB;CAChC;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=6f8d4a84&lang=css&\",\"sourcesContent\":[\"\\n#tab_orientation .e-content .e-item {\\n    font-size: 12px;\\n    padding: 10px;\\n    text-align: justify;\\n}\\n#tab_orientation .e-tab-text {\\n        display: inherit;\\n}\\n\\n/* custom code start */\\n@media screen and (min-width: 768px) {\\n.e-sample-resize-container {\\n            width: 75%;\\n            margin: 0 auto;\\n}\\n}\\n/* custom code end */\\n@media screen and (max-width: 481px) {\\n.control-section.e-tab-section,\\n        .container-fluid,\\n        .e-tab-section .content-wrapper,\\n        .sb-sample-content-area .e-active {\\n            padding-left: 0;\\n            padding-right: 0;\\n}\\n}\\n#tab_orientation .e-content .e-item .template-container {\\n    height: 63px;\\n    padding: 7px 16px 0 16px;\\n    border-bottom: 1px solid gainsboro;\\n}\\n#tab_orientation .e-content .e-item .template-container:hover {\\n    background: #eee;\\n}\\n.highcontrast #tab_orientation .e-content .e-item .template-container:hover\\n{\\n    background: #685708;\\n}\\n.bootstrap-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.bootstrap5-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.tailwind-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.fabric-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.material-dark #tab_orientation .e-content .e-item .template-container:hover,\\n.fluent-dark #tab_orientation .e-content .e-item .template-container:hover\\n{\\n    background: #343a40;\\n}\\n.left {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n.empImg {\\n    height: 48px;\\n    width: 48px;\\n}\\n.empname, .role {\\n    font-size: 15px;\\n    line-height: normal;\\n}\\n.empname {\\n    font-weight: 500;\\n    padding: 0px !important;\\n    bottom: 0px !important;\\n    margin: 0px !important;\\n}\\n.role {\\n    color: grey;\\n    font-weight: 100;\\n}\\n.info {\\n    padding: 7px 0 0 15px;\\n}\\n.content-title {\\n    height: 50px;\\n    display: table;\\n    margin: 0 auto;\\n}\\n.cnt-text {\\n    vertical-align: middle;\\n    display: table-cell;\\n    font-size: 18px;\\n    font-weight: 600;\\n}\\n#property td {\\n    padding-bottom: 10px;\\n}\\n.property-panel-content {\\n    padding: 10px;\\n}\\n@media only screen and (min-width: 1824px) {\\n.e-tab-section .e-sample-resize-container {\\n        width: 60%;\\n}\\n.e-bigger .e-tab-section .e-sample-resize-container {\\n        width: 70%;\\n}\\n}\\n@media screen and (max-width: 376px) {\\n.e-tab-section {\\n            padding: 0 5px;\\n}\\n#tab_orientation .e-content.sb-sample-content-area .e-item.e-active {\\n            padding-left: 0;\\n            padding-right: 0;\\n}\\n.template-container {\\n            padding: 7px 5px 0;\\n}\\n#tab_orientation .e-content .e-item.e-active {\\n            padding: 10px 0;\\n}\\n.info {\\n            padding: 7px 0 0 8px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/tab/orientation/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/orientation/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"TabPlugin\"]);\n\nvar Template1 = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo\", {\n  template: '<div><div class=\"content-title\"><div class=\"cnt-text\">Employee Info</div></div><div id=\"rome\">' +\n        '<div class=\"template-container\"><div class=\"left\"><img class=\"empImg\" src=\"https://ej2.syncfusion.com/demos/./../../source/images/employees/1.png\" ' +\n        'alt=\"Anne Dodsworth\" /></div><div class=\"left info\"><div class=\"empname\">Anne Dodsworth</div> <div class=\"role\">' +\n        'Product Manager</div></div></div><div class=\"template-container\"><div class=\"left\"><img class=\"empImg\" ' +\n        'src=\"https://ej2.syncfusion.com/demos/./../../source/images/employees/2.png\" alt=\"Laura Callahan\" /></div><div class=\"left info\"><div class=\"empname\">' +\n        'Laura Callahan</div> <div class=\"role\">Team Lead</div></div></div><div class=\"template-container\"><div ' +\n        'class=\"left\"><img class=\"empImg\" src=\"https://ej2.syncfusion.com/demos/./../../source/images/employees/3.png\" alt=\"Andrew Fuller\" /></div><div ' +\n        'class=\"left info\"><div class=\"empname\">Andrew Fuller</div> <div class=\"role\">Developer</div></div></div></div></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\nvar Template2 = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo\", {\n   template: '<div><div class=\"content-title\"><div class=\"cnt-text\">Employee Info</div></div><div id=\"rome\">' +\n        '<div class=\"template-container\"><div class=\"left\"><img class=\"empImg\" src=\"./../../source/tab/Employees/4.png\" ' +\n        'alt=\"Robert King\" /></div><div class=\"left info\"><div class=\"empname\">Robert King</div> <div class=\"role\">' +\n        'Team Lead</div></div></div><div class=\"template-container\"><div class=\"left\"><img class=\"empImg\" ' +\n        'src=\"./../../source/tab/Employees/5.png\" alt=\"Michael Suyama\" /></div><div class=\"left info\"><div class=\"empname\">' +\n        'Michael Suyama</div> <div class=\"role\">Developer</div></div></div><div class=\"template-container\"><div ' +\n        'class=\"left\"><img class=\"empImg\" src=\"./../../source/tab/Employees/6.png\" alt=\"Margaret Peacock\" /></div><div ' +\n        'class=\"left info\"><div class=\"empname\">Margaret Peacock</div> <div class=\"role\">Developer</div></div></div></div></div>',\n\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\nvar Template3 = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"demo\", {\n  template: '<div><div class=\"content-title\"><div class=\"cnt-text\">Employee Info</div></div><div id=\"rome\">' +\n        '<div id=\"ripple\" class=\"template-container\"><div class=\"left\"><img class=\"empImg\" src=\"./../../source/tab/Employees/7.png\" ' +\n        'alt=\"Janet Leverling\" /></div><div class=\"left info\"><div class=\"empname\">Janet Leverling</div> <div class=\"role\">' +\n        'CEO</div></div></div><div class=\"template-container\"><div class=\"left\"><img class=\"empImg\" ' +\n        'src=\"./../../source/tab/Employees/8.png\" alt=\"Steven Buchanan\" /></div><div class=\"left info\"><div class=\"empname\">' +\n        'Steven Buchanan</div> <div class=\"role\">HR</div></div></div><div class=\"template-container\"><div ' +\n        'class=\"left\"><img class=\"empImg\" src=\"./../../source/tab/Employees/9.png\" alt=\"Nancy Davolio\" /></div><div ' +\n        'class=\"left info\"><div class=\"empname\">Nancy Davolio</div> <div class=\"role\">Product Manager</div></div></div></div></div>',\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n     data: function(){\n        return {\n            headerText0: { text: 'Rome' },\n            headerText1: { text: 'Paris' },\n            headerText2: { text: 'London' },\n            dataPlace: [{ id: 'top', position: 'Top' }, { id: 'bottom', position: 'Bottom' },{ id: 'left', position: 'Left' }, { id: 'right', position: 'Right' }],\n            dataStyles: [{ id: 'default', class: 'Default' }, { id: 'fill', class: 'Fill' }, { id: 'accent', class: 'Accent' }],\n            styleValue: 'default',\n            styleFields: { text: 'class', value: 'id' },\n            placeValue: 'top',\n            placeFields: { text: 'position', value: 'id' },\n            RomeTemplate: function () {\n             return {\n            template : Template1\n             }\n             },\n            ParisTemplate: function () {\n             return {\n            template : Template2\n             }\n             },\n            LondonTemplate: function () {\n             return {\n            template : Template3\n             }\n             }\n    }\n   },\n     methods: {\n       placeChange: function(args) {\n           this.tabObj = this.$refs.tabObj.ej2Instances;\n           var placement = this.$refs.dropObj1.$el.value;\n           this.tabObj.headerPlacement = placement;\n           this.tabObj.dataBind();\n       },\n       styleChange: function(args) {\n            var name = args.value;\n            this.tabObj = this.$refs.tabObj.ej2Instances;\n            this.tabObj.element.classList.remove('e-fill');\n            this.tabObj.element.classList.remove('e-background');\n            this.tabObj.element.classList.remove('e-accent');\n            if (name === 'fill') {\n                this.tabObj.element.classList.add('e-fill');\n            } else if (name === 'accent') {\n                this.tabObj.element.classList.add('e-background');\n                this.tabObj.element.classList.add('e-accent');\n            }\n            this.tabObj.refreshActiveBorder();\n       }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/tab/orientation/App.vue?vue&type=template&id=6f8d4a84&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/tab/orientation/App.vue?vue&type=template&id=6f8d4a84& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"e-tab-section\"},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"e-sample-resize-container\"},[_c('ejs-tab',{ref:\"tabObj\",attrs:{\"id\":\"tab_orientation\",\"height\":\"320px\",\"showCloseButton\":true,\"heightAdjustMode\":\"Auto\"}},[_c('e-tabitems',[_c('e-tabitem',{attrs:{\"header\":_vm.headerText0,\"content\":_vm.RomeTemplate}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText1,\"content\":_vm.ParisTemplate}}),_vm._v(\" \"),_c('e-tabitem',{attrs:{\"header\":_vm.headerText2,\"content\":_vm.LondonTemplate}})],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_c('table',{attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tr',[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"Header Placement:\")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-dropdownlist',{ref:\"dropObj1\",attrs:{\"id\":\"header-place\",\"width\":\"90%\",\"dataSource\":_vm.dataPlace,\"change\":_vm.placeChange,\"value\":_vm.placeValue,\"fields\":_vm.placeFields}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"Header Styles:\")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-dropdownlist',{ref:\"dropObj2\",attrs:{\"id\":\"header-styles\",\"width\":\"90%\",\"dataSource\":_vm.dataStyles,\"change\":_vm.styleChange,\"value\":_vm.styleValue,\"fields\":_vm.styleFields}})],1)])])])])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the \"),_c('code',[_vm._v(\"header\")]),_vm._v(\" orientation of the \"),_c('code',[_vm._v(\"Tab\")]),_vm._v(\". Select option from drop-downs to switch header placement and changing the header style in properties panel.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The \"),_c('code',[_vm._v(\"Tab\")]),_vm._v(\" allows to place the header section inside the Tab component either at \"),_c('code',[_vm._v(\"top/bottom/left/right\")]),_vm._v(\" position by using \"),_c('code',[_vm._v(\"headerPlacement\")]),_vm._v(\" property.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"This sample illustrates the use of header placement and \"),_c('code',[_vm._v(\"showCloseButton\")]),_vm._v(\" property. Users can change the header position by changing the drop-down value options and can close the Tab item by clicking close icon in header.\")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',[_vm._v(\"The User can also view different header styles of Tab component by selecting options from `Header Styles` drop-down. Header styles changed by adding predefined classes in Tab root element and it class names listed below\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Material and Fabric theme differentiates all the available tab header styles such as \"),_c('code',[_vm._v(\"e-fill, e-background e-accent.\")])]),_vm._v(\" \"),_c('li',[_vm._v(\"In bootstrap theme, all the styles such as \"),_c('code',[_vm._v(\"e-fill\")]),_vm._v(\" & \"),_c('code',[_vm._v(\"e-background e-accent\")]),_vm._v(\" will have the same look with no difference.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"If above classes not included in root element default style will applied in Tab component.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"More information about Tab can be found in this \"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/tab/getting-started/\",\"target\":\"_blank\"}},[_vm._v(\"documentation\")]),_vm._v(\" section.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/tab/orientation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });