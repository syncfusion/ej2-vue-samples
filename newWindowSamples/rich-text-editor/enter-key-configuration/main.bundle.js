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
/******/ 		"rich-text-editor/enter-key-configuration/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/enter-key-configuration/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/enter-key-configuration/App.vue":
/*!******************************************************************!*\
  !*** ./Samples/rich-text-editor/enter-key-configuration/App.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_757dd046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=757dd046& */ \"./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=template&id=757dd046&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_757dd046___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_757dd046___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/enter-key-configuration/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=template&id=757dd046&":
/*!*************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=template&id=757dd046& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_757dd046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=757dd046& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=template&id=757dd046&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_757dd046___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_757dd046___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/enter-key-configuration/data-source.json":
/*!***************************************************************************!*\
  !*** ./Samples/rich-text-editor/enter-key-configuration/data-source.json ***!
  \***************************************************************************/
/*! exports provided: formatData, saveFormat, enterData, shiftEnterData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formatData\\\":[{\\\"Id\\\":\\\"prompt\\\",\\\"format\\\":\\\"Prompt\\\"},{\\\"Id\\\":\\\"plainTextFormatting\\\",\\\"format\\\":\\\"Plain Text\\\"},{\\\"Id\\\":\\\"keepFormating\\\",\\\"format\\\":\\\"Keep Format\\\"},{\\\"Id\\\":\\\"cleanFormatting\\\",\\\"format\\\":\\\"Clean Format\\\"}],\\\"saveFormat\\\":[{\\\"Id\\\":\\\"Blob\\\",\\\"format\\\":\\\"blob\\\"},{\\\"Id\\\":\\\"Base64\\\",\\\"format\\\":\\\"base\\\"}],\\\"enterData\\\":[{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"}],\\\"shiftEnterData\\\":[{\\\"text\\\":\\\"Create a new <br>\\\",\\\"value\\\":\\\"BR\\\"},{\\\"text\\\":\\\"Create a new <div>\\\",\\\"value\\\":\\\"DIV\\\"},{\\\"text\\\":\\\"Create a new <p>\\\",\\\"value\\\":\\\"P\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/data-source.json?");

/***/ }),

/***/ "./Samples/rich-text-editor/enter-key-configuration/main.js":
/*!******************************************************************!*\
  !*** ./Samples/rich-text-editor/enter-key-configuration/main.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/enter-key-configuration/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.api {\\n    width: 75%;\\n}\\n.api td {\\n    padding-right: 100px;\\n    margin-top: 3px;\\n}\\n@media only screen and (max-width: 600px) {\\n.api {\\n        width: 100%;\\n}\\n.api td {\\n        display: block;\\n}\\n}\\n@media only screen and (min-width: 600px) and (max-width: 1000px) {\\n.api {\\n        width: 100%;\\n}\\n}\\n.default-section {\\n    padding-left: 20px;\\n    padding-right: 20px;\\n}\\n.codeView {\\n    border: 1px solid rgba(0,0,0,0.12);\\n    height: 200px;\\n    width: 100%;\\n}\\n.CodeMirror {\\n    height: 190px;\\n}\\n.codeViewContent {\\n    padding-left: 16px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-NRYKUOM7NHKJM376GVKLR3KK33Y66MQVQKZQHRDE2GOQNLXZ2DUQ/Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;CACd;AACD;IACI,qBAAqB;IACrB,gBAAgB;CACnB;AACD;AACA;QACQ,YAAY;CACnB;AACD;QACQ,eAAe;CACtB;CACA;AACD;AACA;QACQ,YAAY;CACnB;CACA;AACD;IACI,mBAAmB;IACnB,oBAAoB;CACvB;AACD;IACI,mCAAmC;IACnC,cAAc;IACd,YAAY;CACf;AACD;IACI,cAAc;CACjB;AACD;IACI,mBAAmB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.api {\\n    width: 75%;\\n}\\n.api td {\\n    padding-right: 100px;\\n    margin-top: 3px;\\n}\\n@media only screen and (max-width: 600px) {\\n.api {\\n        width: 100%;\\n}\\n.api td {\\n        display: block;\\n}\\n}\\n@media only screen and (min-width: 600px) and (max-width: 1000px) {\\n.api {\\n        width: 100%;\\n}\\n}\\n.default-section {\\n    padding-left: 20px;\\n    padding-right: 20px;\\n}\\n.codeView {\\n    border: 1px solid rgba(0,0,0,0.12);\\n    height: 200px;\\n    width: 100%;\\n}\\n.CodeMirror {\\n    height: 190px;\\n}\\n.codeViewContent {\\n    padding-left: 16px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _data_source_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-source.json */ \"./Samples/rich-text-editor/enter-key-configuration/data-source.json\");\nvar _data_source_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-source.json */ \"./Samples/rich-text-editor/enter-key-configuration/data-source.json\", 1);\n/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror */ \"./node_modules/codemirror/lib/codemirror.js\");\n/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ \"./node_modules/codemirror/mode/javascript/javascript.js\");\n/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/css/css.js */ \"./node_modules/codemirror/mode/css/css.js\");\n/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed.js */ \"./node_modules/codemirror/mode/htmlmixed/htmlmixed.js\");\n/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_7__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            saveInterval: 1,\n            height: 220,\n            enterPlaceHolder: 'When pressing the enter key',\n            shiftEnterPlaceHolder: 'When pressing the shift + enter key',\n            floatLabelType: 'Always',\n            enterData: _data_source_json__WEBPACK_IMPORTED_MODULE_3__[\"enterData\"],\n            shiftEnterData: _data_source_json__WEBPACK_IMPORTED_MODULE_3__[\"shiftEnterData\"],\n            fields: { text: 'text', value: 'value' }, \n            enterValue: 'P',\n            shiftEnterValue: 'BR'\n        };\n    },\n    methods: {\n        onCreate: function() {\n            this.onChange();\n        },\n        enterChange: function() {\n            if (this.$refs.enterOptionInstance.ej2Instances.value === 'P') {\n                this.$refs.rteInstance.ej2Instances.enterKey = 'P';\n                 this.$refs.rteInstance.ej2Instances.value = `<p>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</p><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;\n            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'DIV') {\n                this.$refs.rteInstance.ej2Instances.enterKey = 'DIV';\n                this.$refs.rteInstance.ej2Instances.value = `<div>In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:</div><ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;\n            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'BR') {\n                this.$refs.rteInstance.ej2Instances.enterKey = 'BR';\n                this.$refs.rteInstance.ej2Instances.value = `In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:<ul><li>P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag</li><li>DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag</li><li>BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag</li></ul>`;\n            }\n            this.onChange();\n        },\n        shiftEnterChange: function() {\n            if (this.$refs.enterOptionInstance.ej2Instances.value === 'BR') {\n                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'BR';\n            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'DIV') {\n                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'DIV';\n            } else if (this.$refs.enterOptionInstance.ej2Instances.value === 'P') {\n                this.$refs.rteInstance.ej2Instances.shiftEnterKey = 'P';\n            }\n        },\n        onChange: function() {\n            var id = this.$refs.rteInstance.ej2Instances.getID() + 'mirror-view';\n            var codeView = document.getElementById('codeView');\n            var mirrorView;\n            if (document.getElementById(id)) {\n                mirrorView = document.getElementById(id);\n                mirrorView.innerHTML = '';\n            } else {\n                mirrorView = document.createElement('div', { className: 'e-content codeViewContent' });\n                mirrorView.id = id;\n                codeView.appendChild(mirrorView);\n            }\n            mirrorView.style.display = 'block';\n            if (this.$refs.rteInstance.ej2Instances.value !== null) {\n                codemirror__WEBPACK_IMPORTED_MODULE_4__(mirrorView, {\n                    value: this.$refs.rteInstance.ej2Instances.value,\n                    mode: 'text/html',\n                    lineWrapping: true,\n                    readOnly: true\n                });\n            }\n        }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=template&id=757dd046&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/enter-key-configuration/App.vue?vue&type=template&id=757dd046& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"default-section\" },\n          [\n            _c(\"table\", { staticClass: \"api\" }, [\n              _c(\"tbody\", [\n                _c(\"tr\", [\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      [\n                        _c(\"ejs-dropdownlist\", {\n                          ref: \"enterOptionInstance\",\n                          attrs: {\n                            dataSource: _vm.enterData,\n                            fields: _vm.fields,\n                            popupHeight: _vm.height,\n                            change: _vm.enterChange,\n                            value: _vm.enterValue,\n                            placeholder: _vm.enterPlaceHolder,\n                            floatLabelType: _vm.floatLabelType\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      [\n                        _c(\"ejs-dropdownlist\", {\n                          ref: \"shiftEnterOptionInstance\",\n                          attrs: {\n                            dataSource: _vm.shiftEnterData,\n                            fields: _vm.fields,\n                            popupHeight: _vm.height,\n                            change: _vm.shiftEnterChange,\n                            value: _vm.shiftEnterValue,\n                            placeholder: _vm.shiftEnterPlaceHolder,\n                            floatLabelType: _vm.floatLabelType\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\n              \"ejs-richtexteditor\",\n              {\n                ref: \"rteInstance\",\n                attrs: {\n                  saveInterval: _vm.saveInterval,\n                  height: _vm.height,\n                  change: _vm.onChange,\n                  created: _vm.onCreate\n                }\n              },\n              [\n                _c(\"p\", [\n                  _vm._v(\n                    \"In Rich text Editor, the enter key and shift + enter key actions can be customized using the enterKey and shiftEnterKey APIs. And the possible values are as follows:\"\n                  )\n                ]),\n                _c(\"ul\", [\n                  _c(\"li\", [\n                    _vm._v(\n                      \"P - When 'P' is configured, pressing enter or shift + enter will create a 'p' tag\"\n                    )\n                  ]),\n                  _c(\"li\", [\n                    _vm._v(\n                      \"DIV - When 'DIV' is configured, pressing enter or shift + enter will create a 'div' tag\"\n                    )\n                  ]),\n                  _c(\"li\", [\n                    _vm._v(\n                      \"BR - When 'BR' is configured, pressing enter or shift + enter will create a 'br' tag\"\n                    )\n                  ])\n                ])\n              ]\n            ),\n            _vm._v(\" \"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"label\", [_vm._v(\"Code View \")]),\n            _vm._v(\" \"),\n            _c(\"div\", { staticClass: \"codeView\", attrs: { id: \"codeView\" } })\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the API usage to customize the enter key and shift + enter key actions in the Rich Text Editor content. Code view represents the current rich text editor value when pressing typing any content or pressing enter key or shift + enter keys.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [_vm._v(\"In this demo, ensure the API's behaviors by\")]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\"Changing the value of \"),\n          _c(\"code\", [_vm._v(\"enterKey\")]),\n          _vm._v(\n            \" dropdown to customize the enter key action when it is pressed.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Changing the value of \"),\n          _c(\"code\", [_vm._v(\"shiftEnterKey\")]),\n          _vm._v(\n            \" dropdown to customize the shift + enter key action when it is pressed.\"\n          )\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/enter-key-configuration/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });