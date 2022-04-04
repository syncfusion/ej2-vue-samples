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
/******/ 		"splitter/details-view/main": 0
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
/******/ 	deferredModules.push(["./Samples/splitter/details-view/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/splitter/details-view/App.vue":
/*!***********************************************!*\
  !*** ./Samples/splitter/details-view/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1079bcc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1079bcc6& */ \"./Samples/splitter/details-view/App.vue?vue&type=template&id=1079bcc6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/splitter/details-view/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1079bcc6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1079bcc6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/splitter/details-view/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?");

/***/ }),

/***/ "./Samples/splitter/details-view/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/splitter/details-view/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/splitter/details-view/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?");

/***/ }),

/***/ "./Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?");

/***/ }),

/***/ "./Samples/splitter/details-view/App.vue?vue&type=template&id=1079bcc6&":
/*!******************************************************************************!*\
  !*** ./Samples/splitter/details-view/App.vue?vue&type=template&id=1079bcc6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1079bcc6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1079bcc6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/details-view/App.vue?vue&type=template&id=1079bcc6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1079bcc6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1079bcc6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?");

/***/ }),

/***/ "./Samples/splitter/details-view/main.js":
/*!***********************************************!*\
  !*** ./Samples/splitter/details-view/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/splitter/details-view/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.details-view #splitter .e-avatar.e-avatar-xlarge {\\n    font-size: 22px;\\n}\\n.details-view .header-image {\\n    text-align: center;\\n    margin-top: 7px;\\n}\\n.details-view .e-custom-card .e-avatar {\\n    font-size: 40px;\\n    position: absolute;\\n    top: calc(0% - 1.5em);\\n    left: calc(50% - 1.5em);\\n    box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\\n}\\n/* custom code start */\\n.details-view #target {\\n    margin: 20px auto;\\n    max-width: 710px;\\n}\\n/* custom code end */\\n/* ListView template customization */\\n.details-view #ui-list.e-listview .showUI {\\n    display: flex;\\n}\\n.details-view #ui-list.e-listview .hideUI {\\n    display: none;\\n}\\n.details-view #ui-list.e-listview .e-list-item {\\n    padding: 3px 0;\\n}\\n.details-view #ui-list.e-listview .R {\\n    background: lightgrey;\\n}\\n.details-view #ui-list.e-listview .M {\\n    background: lightblue;\\n}\\n.details-view .highcontrast #ui-list.e-listview .e-list-item.e-active {\\n    background: #ffd939;\\n    color: #000000;\\n}\\n.details-view table {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n    width: calc(100% - 20px);\\n    margin: 10px;\\n}\\n.details-view table th,\\n.details-view table td {\\n    font-weight: normal;\\n    padding: 5px;\\n    text-align: left;\\n    border: 1px solid #ddd\\n}\\n.details-view .e-bold {\\n    font-weight: 550;\\n}\\n.details-view .profile-name {\\n    font-weight: 550;\\n    font-size: 14px;\\n    text-align: center;\\n}\\n.details-view .e-listview.e-list-template .e-list-wrapper.e-list-avatar:not(.e-list-badge) {\\n  padding-left: 4.8em;\\n  padding-right: 1.0666em;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-CSQX7CQZVVOHCLLCUYFW3RWJXKPOYELGB2JPR4BT75HHYVILB7SQ/Samples/splitter/details-view/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,gBAAgB;CACnB;AACD;IACI,mBAAmB;IACnB,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,mBAAmB;IACnB,sBAAsB;IACtB,wBAAwB;IACxB,oHAAoH;CACvH;AACD,uBAAuB;AACvB;IACI,kBAAkB;IAClB,iBAAiB;CACpB;AACD,qBAAqB;AACrB,qCAAqC;AACrC;IACI,cAAc;CACjB;AACD;IACI,cAAc;CACjB;AACD;IACI,eAAe;CAClB;AACD;IACI,sBAAsB;CACzB;AACD;IACI,sBAAsB;CACzB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,0BAA0B;IAC1B,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;CAChB;AACD;;IAEI,oBAAoB;IACpB,aAAa;IACb,iBAAiB;IACjB,sBAAsB;CACzB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;CACtB;AACD;EACE,oBAAoB;EACpB,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.details-view #splitter .e-avatar.e-avatar-xlarge {\\n    font-size: 22px;\\n}\\n.details-view .header-image {\\n    text-align: center;\\n    margin-top: 7px;\\n}\\n.details-view .e-custom-card .e-avatar {\\n    font-size: 40px;\\n    position: absolute;\\n    top: calc(0% - 1.5em);\\n    left: calc(50% - 1.5em);\\n    box-shadow: 0 16px 28px -8px rgba(0, 0, 0, .36), 0 4px 15px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);\\n}\\n/* custom code start */\\n.details-view #target {\\n    margin: 20px auto;\\n    max-width: 710px;\\n}\\n/* custom code end */\\n/* ListView template customization */\\n.details-view #ui-list.e-listview .showUI {\\n    display: flex;\\n}\\n.details-view #ui-list.e-listview .hideUI {\\n    display: none;\\n}\\n.details-view #ui-list.e-listview .e-list-item {\\n    padding: 3px 0;\\n}\\n.details-view #ui-list.e-listview .R {\\n    background: lightgrey;\\n}\\n.details-view #ui-list.e-listview .M {\\n    background: lightblue;\\n}\\n.details-view .highcontrast #ui-list.e-listview .e-list-item.e-active {\\n    background: #ffd939;\\n    color: #000000;\\n}\\n.details-view table {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n    width: calc(100% - 20px);\\n    margin: 10px;\\n}\\n.details-view table th,\\n.details-view table td {\\n    font-weight: normal;\\n    padding: 5px;\\n    text-align: left;\\n    border: 1px solid #ddd\\n}\\n.details-view .e-bold {\\n    font-weight: 550;\\n}\\n.details-view .profile-name {\\n    font-weight: 550;\\n    font-size: 14px;\\n    text-align: center;\\n}\\n.details-view .e-listview.e-list-template .e-list-wrapper.e-list-avatar:not(.e-list-badge) {\\n  padding-left: 4.8em;\\n  padding-right: 1.0666em;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/splitter/details-view/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/details-view/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-lists */ \"./node_modules/@syncfusion/ej2-vue-lists/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__[\"ListViewPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"SplitterPlugin\"]);\n\nlet commonData = [];\nlet dataSource = {};\nlet liElement = undefined;\nlet listid = undefined;\n\nvar Margaret = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"margaret\", {\n  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./../../source/splitter/images/margaret.png' alt='margaret'></div></div><div class='profile-name'>Margeret Peacock</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>11/15/1994</td></tr><tr><td class='e-bold'>Address</td><td>507 - 20th Ave. E. Apt. 2A</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9857</td></tr></table></div>`\n});\n\nvar Laura = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"laura\", {\n  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./../../source/splitter/images/laura.png' alt='laura'></div></div><div class='profile-name'>Laura Callahan</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>09/25/1993</td></tr><tr><td class='e-bold'>Address</td><td>908 W. Capital Way</td></tr><tr><td class='e-bold'>City</td><td>Tacoma</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-9482</td></tr></table></div>`\n});\n\nvar Robert = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"robert\", {\n  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./../../source/splitter/images/robert.png' alt='robert'></div></div><div class='profile-name'>Robert King</div><table><tr><td class='e-bold'>Title</td><td>Sales Manager</td></tr><tr><td class='e-bold'>Hire Date</td><td>03/20/1990</td></tr><tr><td class='e-bold'>Address</td><td>14 Garrett Hill</td></tr><tr><td class='e-bold'>City</td><td>London</td></tr><tr><td class='e-bold'>Phone</td><td>(71) 555-4848</td></tr></table></div>`\n});\n\nvar Albert = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"albert\", {\n  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./../../source/splitter/images/albert.png' alt='albert'></div></div><div class='profile-name'>Albert Dodsworth</div><table><tr><td class='e-bold'>Title</td><td>Sales Representative</td></tr><tr><td class='e-bold'>Hire Date</td><td>10/5/1996</td></tr><tr><td class='e-bold'>Address</td><td>7 Houndstooth Rd.</td></tr><tr><td class='e-bold'>City</td><td>London</td></tr><tr><td class='e-bold'>Phone</td><td>(71) 555-4444</td></tr></table></div>`\n});\n\nvar Michale = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"michale\", {\n  template: `<div><div class='header-image'><div class='e-avatar e-avatar-circle e-avatar-xlarge'><img src='./../../source/splitter/images/michale.png' alt='michale'></div></div><div class='profile-name'>Michale Suyama</div><table><tr><td class='e-bold'>Title</td><td>Inside Sales Coordinator</td></tr><tr><td class='e-bold'>Hire Date</td><td>06/10/1998</td></tr><tr><td class='e-bold'>Address</td><td>4726 - 11th Ave. N.E.</td></tr><tr><td class='e-bold'>City</td><td>Seattle</td></tr><tr><td class='e-bold'>Phone</td><td>(206) 555-1189</td></tr></table></div>`\n});\n\nvar pane1Content = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane1\", {\n  template: `<div>\n    <div>\n        <!-- ListView element -->\n        <ejs-listview id='ui-list' ref='listviewObj' :dataSource='listData' :fields='fields'\n            :height='height' :cssClass='cssClass' :enableVirtualization='enableUi' :select='onSelect' :actionComplete='onActionComplete'\n            :actionBegin='onActionBegin' :template='gTemplate'>\n        </ejs-listview>\n    </div>\n</div>`,\nbeforeCreate: function() {\n        commonData = [{\n                name: \"Margaret\",\n                imgUrl: './../../source/splitter/images/margaret.png',\n                id: \"1\"\n            },\n            {\n                name: \"Laura\",\n                imgUrl: './../../source/splitter/images/laura.png',\n                id: \"2\"\n            },\n            {\n                name: \"Robert\",\n                icon: 'R',\n                id: \"3\"\n            },\n            {\n                name: \"Albert\",\n                imgUrl: './../../source/splitter/images/albert.png',\n                id: \"4\"\n            },\n            {\n                name: \"Michale\",\n                icon: 'M',\n                id: \"5\"\n            }];\n        [\n            [5, \"data1\"]\n        ].forEach(ds => {\n            let data = commonData.slice();\n            dataSource[ds[1]] = data;\n        });\n    },\n  data() {\n    return {\n                  gTemplate: '<div class=\"e-list-wrapper e-list-avatar\">' +\n            '<span class=\"e-avatar e-avatar-circle ${icon} ${$imgUrl ? \\'hideUI\\' : \\'showUI\\' }\">' +\n            '${icon}</span> <img class=\"e-avatar e-avatar-circle ${$imgUrl ? \\'showUI\\' : \\'hideUI\\' }\" ' +\n            'src=\"${$imgUrl ?  $imgUrl : \\' \\' }\" />' +\n            '<span class=\"e-list-content\">${name}</span></div>',\n            listData: dataSource.data1,\n            cssClass: 'e-list-template',\n            fields: {\n                text: \"name\"\n            },\n            height: 289,\n            enableUi: true\n    };\n  },\n    methods: {\n        onActionBegin: function() {\n            liElement = document.getElementById(\"ui-list\");\n            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"Browser\"].isDevice) {\n                liElement.classList.add(\"ui-mobile\");\n            }\n        },\n        onActionComplete: function() {\n                this.$refs.listviewObj.ej2Instances.selectItem(dataSource.data1[0]);\n        },\n        onSelect: function(e) {\n            listid = e.item.dataset.uid;\n            switch (listid) {\n                case '1':\n                    bus.$emit(\"pane-content\", function() { return { template: Margaret }; });\n                    break;\n                case '2':\n                    bus.$emit(\"pane-content\", function() { return { template: Laura }; });\n                    break;\n                case '3':\n                    bus.$emit(\"pane-content\", function() { return { template: Robert }; });\n                    break;\n                case '4':\n                    bus.$emit(\"pane-content\", function() { return { template: Albert }; });\n                    break;\n                case '5':\n                    bus.$emit(\"pane-content\", function() { return { template: Michale }; });\n                    break;\n                default:\n                    break;\n            }\n        }\n    },\n    provide: {\n        listview: [_syncfusion_ej2_vue_lists__WEBPACK_IMPORTED_MODULE_2__[\"Virtualization\"]]\n    }\n});\n\nvar bus = new vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            pane1Content: function () {\n                return { template : pane1Content }\n            },\n            pane2Content: function () {\n                return { template : Margaret }\n            },\n        }\n    },\n    mounted: function () {\n        bus.$on(\"pane-content\", paneContent => {\n            this.$refs.splitterObj.ej2Instances.paneSettings[1].content = paneContent;\n        });\n    }\n    ,destroyed: function() {\n    bus.$off(\"pane-content\");\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/splitter/details-view/App.vue?vue&type=template&id=1079bcc6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/splitter/details-view/App.vue?vue&type=template&id=1079bcc6& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-12 control-section details-view\"},[_c('div',{staticClass:\"control_wrapper\",attrs:{\"id\":\"target\"}},[_c('ejs-splitter',{ref:\"splitterObj\",staticClass:\"splitterContent\",attrs:{\"id\":\"splitter\",\"width\":\"100%\",\"height\":\"292px\"}},[_c('e-panes',[_c('e-pane',{attrs:{\"size\":\"35%\",\"min\":\"25%\",\"content\":_vm.pane1Content}}),_vm._v(\" \"),_c('e-pane',{attrs:{\"size\":\"65%\",\"min\":\"45%\",\"content\":_vm.pane2Content}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n            This example demonstrates the Splitter control that is used to design details view page. \\n            Select the employee from left pane to display the corresponding employee details on the right pane.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            The Splitter is the layout user interface (UI) control, which integrates other JavaScript UI controls within its pane. \\n            In this sample, the JavaScript ListView control is integrated within left pane to display the employee list and right pane \\n            to display the corresponding employee details. \\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/splitter/details-view/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });