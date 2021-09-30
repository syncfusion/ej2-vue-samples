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
/******/ 		"query-builder/header-template/main": 0
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
/******/ 	deferredModules.push(["./Samples/query-builder/header-template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/query-builder/header-template/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/query-builder/header-template/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_dedf1522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=dedf1522& */ \"./Samples/query-builder/header-template/App.vue?vue&type=template&id=dedf1522&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/query-builder/header-template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_dedf1522___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_dedf1522___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/query-builder/header-template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?");

/***/ }),

/***/ "./Samples/query-builder/header-template/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/query-builder/header-template/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/query-builder/header-template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?");

/***/ }),

/***/ "./Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?");

/***/ }),

/***/ "./Samples/query-builder/header-template/App.vue?vue&type=template&id=dedf1522&":
/*!**************************************************************************************!*\
  !*** ./Samples/query-builder/header-template/App.vue?vue&type=template&id=dedf1522& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dedf1522___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=dedf1522& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/query-builder/header-template/App.vue?vue&type=template&id=dedf1522&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dedf1522___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dedf1522___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?");

/***/ }),

/***/ "./Samples/query-builder/header-template/main.js":
/*!*******************************************************!*\
  !*** ./Samples/query-builder/header-template/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/query-builder/header-template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-query-builder {\\n    margin: 0 auto;\\n}\\n.e-query-builder .query-template-control .cndtnbtn.e-control.e-dropdownlist.e-lib.e-input {\\n    padding-left: 10px;\\n}\\n.e-query-builder .query-template-control span.e-custom-group-btn {\\n    max-width: 100px;\\n    border-radius: 5px !important;\\n    border-width: 1px !important;\\n}\\n.e-query-builder .query-template-control .e-custom-group-btn.e-input-focus::before, .e-custom-group-btn.e-input-focus::after {\\n    background: transparent !important;\\n}\\n.e-query-builder .query-template-control .e-custom-group-btn{\\n    padding-left: 10px;\\n    height: 32px;\\n}\\n.e-query-builder .query-template-control .e-header {\\n    display: inline-block;\\n    float: right;\\n}\\n.e-query-builder .query-template-control .e-qb-hdr-content {\\n    display: inline-block;\\n    padding: 5px;\\n}\\n.e-query-builder .query-template-control .e-grp-btn {\\n    background-color: #6c757d !important;\\n}\\n.e-query-builder .query-template-control .e-cond-btn {\\n    background-color: #6c757d !important;\\n}\\n.e-query-builder .query-template-control .e-grp-btn:hover {\\n    background-color: #545c63 !important;\\n}\\n.e-query-builder .query-template-control .e-cond-btn:hover {\\n    background-color: #545c63 !important;\\n}\\n@media only screen and (max-width: 700px) {\\n.e-query-builder .e-header {\\n        float: none !important;\\n}\\n.e-query-builder .e-qb-hdr-content {\\n        padding-left: 0px !important;\\n        padding-right: 10px !important;\\n        padding-top: 10px !important;\\n}\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-UZI6N4LYTZKSHVMPPSRFC4ULBXQSHZN2VCNWE4MBL6M7LXKEXKTA/Samples/query-builder/header-template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;CAClB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,6BAA6B;CAChC;AACD;IACI,mCAAmC;CACtC;AACD;IACI,mBAAmB;IACnB,aAAa;CAChB;AACD;IACI,sBAAsB;IACtB,aAAa;CAChB;AACD;IACI,sBAAsB;IACtB,aAAa;CAChB;AACD;IACI,qCAAqC;CACxC;AACD;IACI,qCAAqC;CACxC;AACD;IACI,qCAAqC;CACxC;AACD;IACI,qCAAqC;CACxC;AACD;AACA;QACQ,uBAAuB;CAC9B;AACD;QACQ,6BAA6B;QAC7B,+BAA+B;QAC/B,6BAA6B;CACpC;CACA\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.e-query-builder {\\n    margin: 0 auto;\\n}\\n.e-query-builder .query-template-control .cndtnbtn.e-control.e-dropdownlist.e-lib.e-input {\\n    padding-left: 10px;\\n}\\n.e-query-builder .query-template-control span.e-custom-group-btn {\\n    max-width: 100px;\\n    border-radius: 5px !important;\\n    border-width: 1px !important;\\n}\\n.e-query-builder .query-template-control .e-custom-group-btn.e-input-focus::before, .e-custom-group-btn.e-input-focus::after {\\n    background: transparent !important;\\n}\\n.e-query-builder .query-template-control .e-custom-group-btn{\\n    padding-left: 10px;\\n    height: 32px;\\n}\\n.e-query-builder .query-template-control .e-header {\\n    display: inline-block;\\n    float: right;\\n}\\n.e-query-builder .query-template-control .e-qb-hdr-content {\\n    display: inline-block;\\n    padding: 5px;\\n}\\n.e-query-builder .query-template-control .e-grp-btn {\\n    background-color: #6c757d !important;\\n}\\n.e-query-builder .query-template-control .e-cond-btn {\\n    background-color: #6c757d !important;\\n}\\n.e-query-builder .query-template-control .e-grp-btn:hover {\\n    background-color: #545c63 !important;\\n}\\n.e-query-builder .query-template-control .e-cond-btn:hover {\\n    background-color: #545c63 !important;\\n}\\n@media only screen and (max-width: 700px) {\\n.e-query-builder .e-header {\\n        float: none !important;\\n}\\n.e-query-builder .e-qb-hdr-content {\\n        padding-left: 0px !important;\\n        padding-right: 10px !important;\\n        padding-top: 10px !important;\\n}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/query-builder/header-template/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/query-builder/header-template/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_querybuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-querybuilder */ \"./node_modules/@syncfusion/ej2-vue-querybuilder/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-dropdowns */ \"./node_modules/@syncfusion/ej2-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_querybuilder__WEBPACK_IMPORTED_MODULE_1__[\"QueryBuilderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            importRules: {\n                'condition': 'and',\n                'rules': [{\n                    'label': 'First Name',\n                    'field': 'FirstName',\n                    'type': 'string',\n                    'operator': 'equal',\n                    'value': 'Nancy'\n                },\n                {\n                    'label': 'Country',\n                    'field': 'Country',\n                    'type': 'string',\n                    'operator': 'equal',\n                    'value': \"USA\"\n                }]\n            },\n            headerTemplate: () => {\n                return {\n                    template : vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('headerTemplate', {\n                        template:\n                        `<div class=\"query-template-control\" >\n                        <div class=\"e-groupheader\">\n                            <ejs-dropdownlist :id=\"ddlID\" cssClass=\"e-custom-group-btn\" :dataSource=\"items\" :fields=\"fields\"  v-model=\"data.condition\"  :change=\"conditionChange\"></ejs-dropdownlist>\n                            <div class = \"e-header\">\n                                <div class = \"e-qb-hdr-content\">\n                                    <ejs-button :id=\"addgrpID\" cssClass=\"e-primary\" class = \"e-grp-btn\" v-on:click.native='grpbtnClick'>Add Group</ejs-button>\n                                </div>\n                                <div class = \"e-qb-hdr-content\">\n                                    <ejs-button :id=\"addruleID\" cssClass=\"e-primary\" class = \"e-cond-btn\" v-on:click.native='rulebtnClick'>Add Condition</ejs-button>\n                                </div>\n                                <div class = \"e-qb-hdr-content\" v-if=\"data.ruleID !== 'querybuilder_group0'\">\n                                    <ejs-button :id=\"dltbtnID\" class = \"e-del-btn\" v-on:click.native='btnClick' cssClass=\"e-danger\">Remove</ejs-button>\n                                </div>\n                            </div>\n                            </div>\n                        </div>`,\n                        data(args) {\n                        return {\n                            qryBldrObj: Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('querybuilder'), 'query-builder'),\n                            items : [{'key': 'AND', 'value': 'and'},{'key': 'OR', 'value': 'or'}],\n                            fields: { text: 'key', value: 'value' },\n                            }\n                        },\n                        computed: {\n                            ddlID: function(){\n                                return `${this.data.ruleID}_cndtn`;\n                            },\n                            addgrpID: function(){\n                                return `${this.data.ruleID}_addgrp`;\n                            },\n                            addruleID: function(){\n                                return `${this.data.ruleID}_addrule`;\n                            },\n                            dltbtnID: function(){\n                                return `${this.data.ruleID}_dltbtn`;\n                            }\n                        },\n                        methods: {\n                            conditionChange: function(args){\n                                this.qryBldrObj.notifyChange(args.value, args.element, 'condition');\n                            },\n                            grpbtnClick: function(args){\n                                var addbtn = args.target.id;\n                                var btn = addbtn.split('_');\n                                this.qryBldrObj.addGroups([{condition: 'or', 'rules': [{}]}], btn[1]);\n                            },\n                            rulebtnClick: function(args){\n                                var addbtn = args.target.id;\n                                var btn = addbtn.split('_');\n                                this.qryBldrObj.addRules([{}], btn[1]);\n                            },\n                            btnClick: function(args){\n                                this.qryBldrObj.deleteGroup(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"closest\"])(args.target.offsetParent, '.e-group-container'));\n                            }\n                        }\n                    })\n                }\n            }\n        };\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/query-builder/header-template/App.vue?vue&type=template&id=dedf1522&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/query-builder/header-template/App.vue?vue&type=template&id=dedf1522& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"template-querybuilder-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-12 control-section\" },\n      [\n        _c(\n          \"ejs-querybuilder\",\n          {\n            ref: \"querybuilder\",\n            attrs: {\n              id: \"querybuilder\",\n              rule: _vm.importRules,\n              width: \"100%\",\n              headerTemplate: _vm.headerTemplate\n            }\n          },\n          [\n            _c(\n              \"e-columns\",\n              [\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"EmployeeID\",\n                    label: \"Employee ID\",\n                    type: \"number\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FirstName\",\n                    label: \"First Name\",\n                    type: \"string\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"LastName\",\n                    label: \"Last Name\",\n                    type: \"string\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"HireDate\",\n                    label: \"Hire Date\",\n                    type: \"date\",\n                    format: \"dd/MM/yyyy\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"Country\", label: \"Country\", type: \"string\" }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the Header Template functionality in QueryBuilder component using DropDownList and Button components. In this sample, user can change the Condition using DropDownList component and adding rules, groups and deleting groups by using Button component.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates how to integrate HeaderTemplate in the QueryBuilder. This is used for creating custom user interface for the header with custom components and update the rule collection by using the component events.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"More information about Query Builder can be found in this\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/query-builder/getting-started/\"\n            }\n          },\n          [_vm._v(\" documentation\")]\n        ),\n        _vm._v(\" section.\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/query-builder/header-template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });