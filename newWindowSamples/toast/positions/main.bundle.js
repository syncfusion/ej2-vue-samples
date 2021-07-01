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
/******/ 		"toast/positions/main": 0
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
/******/ 	deferredModules.push(["./Samples/toast/positions/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/toast/positions/App.vue":
/*!*****************************************!*\
  !*** ./Samples/toast/positions/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_93feb2a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=93feb2a0& */ \"./Samples/toast/positions/App.vue?vue&type=template&id=93feb2a0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/toast/positions/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_93feb2a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_93feb2a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/toast/positions/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?");

/***/ }),

/***/ "./Samples/toast/positions/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/toast/positions/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/toast/positions/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?");

/***/ }),

/***/ "./Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?");

/***/ }),

/***/ "./Samples/toast/positions/App.vue?vue&type=template&id=93feb2a0&":
/*!************************************************************************!*\
  !*** ./Samples/toast/positions/App.vue?vue&type=template&id=93feb2a0& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_93feb2a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=93feb2a0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/toast/positions/App.vue?vue&type=template&id=93feb2a0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_93feb2a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_93feb2a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?");

/***/ }),

/***/ "./Samples/toast/positions/main.js":
/*!*****************************************!*\
  !*** ./Samples/toast/positions/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/toast/positions/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/toast/positions/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    /* custom code start */\\n.toast-pos-section #toast_pos_property {\\n        height: 500px;\\n        border: none;\\n        margin: auto;\\n}\\n    /* custom code end */\\n#toast_pos_property td {\\n        width: 50%;\\n}\\n#toast_pos .e-toast-icon.e-laura.e-icons {\\n        border-radius: 50%;\\n        background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './resource/laura.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n        background-repeat: no-repeat;\\n        background-size: cover;\\n        height: 50px !important;\\n\\t\\twidth: 68px !important;\\n\\t\\tbackground-size: 50px 50px;\\n\\t\\tmargin-right: 15px;\\n}\\n@media (min-width: 740px) {\\n#toast_pos_property {\\n            width: 450px;\\n}\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-OKSCHYEDL5Q4MAACC43OJVA4LT4RJZH6V5T4UUHQSKA26RT46Y7Q/Samples/toast/positions/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkFI,uBAAuB;AAC3B;QACQ,cAAc;QACd,aAAa;QACb,aAAa;CACpB;IACG,qBAAqB;AACzB;QACQ,WAAW;CAClB;AACD;QACQ,mBAAmB;QACnB,gDAA8C;QAC9C,6BAA6B;QAC7B,uBAAuB;QACvB,wBAAwB;EAC9B,uBAAuB;EACvB,2BAA2B;EAC3B,mBAAmB;CACpB;AACD;AACA;YACY,aAAa;CACxB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n    /* custom code start */\\n.toast-pos-section #toast_pos_property {\\n        height: 500px;\\n        border: none;\\n        margin: auto;\\n}\\n    /* custom code end */\\n#toast_pos_property td {\\n        width: 50%;\\n}\\n#toast_pos .e-toast-icon.e-laura.e-icons {\\n        border-radius: 50%;\\n        background-image: url('./resource/laura.png');\\n        background-repeat: no-repeat;\\n        background-size: cover;\\n        height: 50px !important;\\n\\t\\twidth: 68px !important;\\n\\t\\tbackground-size: 50px 50px;\\n\\t\\tmargin-right: 15px;\\n}\\n@media (min-width: 740px) {\\n#toast_pos_property {\\n            width: 450px;\\n}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/toast/positions/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/toast/positions/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-notifications */ \"./node_modules/@syncfusion/ej2-vue-notifications/index.js\");\n/* harmony import */ var _syncfusion_ej2_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-dropdowns */ \"./node_modules/@syncfusion/ej2-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-buttons */ \"./node_modules/@syncfusion/ej2-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_6__[\"RadioButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_notifications__WEBPACK_IMPORTED_MODULE_1__[\"ToastPlugin\"]);\nlet ShowBtn = undefined;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n     data: function(){\n        return {\n            position:  { X: 'Right', Y: 'Bottom' },\n            target: document.body,\n            dropData: [\n                { Id: 'topleft', Text: 'Top Left' },\n                { Id: 'topright', Text: 'Top Right' },\n                { Id: 'topcenter', Text: 'Top Center' },\n                { Id: 'topfullwidth', Text: 'Top Full Width' },\n                { Id: 'bottomleft', Text: 'Bottom Left' },\n                { Id: 'bottomright', Text: 'Bottom Right' },\n                { Id: 'bottomcenter', Text: 'Bottom Center' },\n                { Id: 'bottomfullwidth', Text: 'Bottom Full Width' }\n            ],\n            dropFields: { text: 'Text', value: 'Id' },\n            dropValue: 'bottomright',\n            ShowBtn: false\n        }\n    },\n    mounted: function(){\n         setTimeout(() => {\n            this.toastShow(200);\n        },200);\n        this.initialWid = this.$refs.toastRef.ej2Instances.width.toString();\n        this.customFlag = false;\n        this.obj = this.$refs.toastRef.ej2Instances;\n    },\n    methods: {\n      valueChange: function(e){\n         this.$refs.toastRef.hide('All'); \n         this.setToastPosValue(e.value.toString());\n         this.toastShow(1000);\n       },\n       toastShow: function(args){\n         setTimeout(() => {\n             this.$refs.toastRef.show();\n            },args);\n       },\n       checkboxChange: function(args){\n            if (this.$refs.targetRef.ej2Instances.checked) {\n                this.$refs.toastRef.hide('All');\n                this.obj.target = '#toast_pos_target';\n                this.toastShow(1000);\n            }\n       },  \n       checkboxChange1: function(args){\n            if (this.$refs.globalRef.ej2Instances.checked) {\n                this.$refs.toastRef.hide('All');\n                this.obj.target = document.body;\n                this.toastShow(1000);\n            }\n       },  \n       checkboxChange2: function(args){\n            if (this.$refs.dropdownRef.ej2Instances.checked) {\n                this.$refs.toastRef.hide('All');\n                document.getElementById('dropdownChoose').style.display = 'table-cell';\n                document.getElementById('customChoose').style.display = 'none';\n                this.setToastPosValue(this.$refs.positionDropRef.value.toString()); \n                this.customFlag = false; \n                this.toastShow(1000);\n        }\n       },  \n       checkboxChange3: function(args){\n            if (this.$refs.customRef.ej2Instances.checked) {\n            this.$refs.toastRef.hide('All');\n            document.getElementById('dropdownChoose').style.display = 'none';\n            document.getElementById('customChoose').style.display = 'table-cell';\n            this.setcustomPosValue(); \n            this.customFlag = true; \n            this.toastShow(1000);\n        }\n       },\n       showClicked: function(args){\n           if (this.customFlag) {\n              this.setcustomPosValue();\n        }\n        this.$refs.toastRef.show();\n       },\n       hideClicked: function(args){\n           this.$refs.toastRef.hide('All');\n       },\n        setcustomPosValue: function(args){\n           this.obj.width = this.initialWid;\n           this.obj.position.X = parseInt(document.getElementById('xPos').value, 10);\n           this.obj.position.Y = parseInt(document.getElementById('yPos').value, 10);\n       },\n       setToastPosValue: function(value){\n           this.obj.width = this.initialWid;\n           switch (value) {\n            case 'topleft':\n                this.obj.position.X = 'Left'; this.obj.position.Y = 'Top'; break;\n            case 'topright':\n                this.obj.position.X = 'Right'; this.obj.position.Y = 'Top'; break;\n            case 'topcenter':\n                this.obj.position.X = 'Center'; this.obj.position.Y = 'Top'; break;\n            case 'topfullwidth':\n                this.obj.width = '100%'; this.obj.position.X = 'Center'; this.obj.position.Y = 'Top'; break;\n            case 'bottomleft':\n                this.obj.position.X = 'Left'; this.obj.position.Y = 'Bottom'; break;\n            case 'bottomright':\n                this.obj.position.X = 'Right'; this.obj.position.Y = 'Bottom'; break;\n            case 'bottomcenter':\n                this.obj.position.X = 'Center'; this.obj.position.Y = 'Bottom'; break;\n            case 'bottomfullwidth':\n                this.obj.width = '100%'; this.obj.position.X = 'Center'; this.obj.position.Y = 'Bottom'; break;\n        }\n       },\n       created: function(args){\n            document.addEventListener('click', function() {\n               if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(this.$refs.toastRef) && event.target !== this.$refs.showButtonRef.$el &&  this.$refs.toastRef.target === document.body) {\n                   this.$refs.toastRef.hide('All');\n               }\n            }.bind(this));\n        },\n        onclose: function(e){\n            if (e.toastContainer.childElementCount === 0 ) {\n                this.ShowBtn = false;\n            }\n        },\n        onbeforeOpen: function(e){\n             this.ShowBtn = true;\n        }\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/toast/positions/App.vue?vue&type=template&id=93feb2a0&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/toast/positions/App.vue?vue&type=template&id=93feb2a0& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-12 control-section toast-pos-section\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass: \"e-sample-resize-container\",\n          attrs: { id: \"toast_pos_target\" }\n        },\n        [\n          _c(\"ejs-toast\", {\n            ref: \"toastRef\",\n            attrs: {\n              id: \"toast_pos\",\n              position: _vm.position,\n              target: _vm.target,\n              title: \"Matt sent you a friend request\",\n              content: \"You have a friend request yet to accept.\",\n              icon: \"e-laura\",\n              created: _vm.created,\n              close: _vm.onclose,\n              beforeOpen: _vm.onbeforeOpen\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\"div\", { attrs: { id: \"toast_pos_property\" } }, [\n            _c(\"table\", { staticStyle: { width: \"100%\" } }, [\n              _c(\"tbody\", [\n                _c(\"tr\", [\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      { staticStyle: { padding: \"25px 0 0 0\" } },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          ref: \"dropdownRef\",\n                          attrs: {\n                            id: \"dropdownRadio\",\n                            label: \"Position\",\n                            name: \"toastPos\",\n                            value: \"Position\",\n                            checked: \"true\",\n                            change: _vm.checkboxChange2\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      { staticStyle: { padding: \"25px 0 0 0\" } },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          ref: \"customRef\",\n                          attrs: {\n                            id: \"customRedio\",\n                            label: \"Custom\",\n                            name: \"toastPos\",\n                            value: \"Custom\",\n                            change: _vm.checkboxChange3\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _c(\"tr\", [\n                  _c(\"td\", { attrs: { id: \"dropdownChoose\", colspan: \"2\" } }, [\n                    _c(\n                      \"div\",\n                      {\n                        staticStyle: { \"padding-top\": \"25px\" },\n                        attrs: { id: \"dropdown\" }\n                      },\n                      [\n                        _c(\"ejs-dropdownlist\", {\n                          ref: \"positionDropRef\",\n                          attrs: {\n                            id: \"position\",\n                            dataSource: _vm.dropData,\n                            fields: _vm.dropFields,\n                            placeholder: \"Select a position\",\n                            change: _vm.valueChange,\n                            value: _vm.dropValue,\n                            popupHeight: \"200px\",\n                            index: \"5\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ]),\n                _vm._v(\" \"),\n                _vm._m(0),\n                _vm._v(\" \"),\n                _c(\"tr\", [\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      { staticStyle: { padding: \"25px 0 0 0\" } },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          ref: \"targetRef\",\n                          attrs: {\n                            id: \"radio1\",\n                            label: \"Target\",\n                            name: \"toast\",\n                            value: \"Target\",\n                            change: _vm.checkboxChange\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"td\", [\n                    _c(\n                      \"div\",\n                      { staticStyle: { padding: \"25px 0 0 0\" } },\n                      [\n                        _c(\"ejs-radiobutton\", {\n                          ref: \"globalRef\",\n                          attrs: {\n                            id: \"radio2\",\n                            label: \"Global\",\n                            name: \"toast\",\n                            value: \"Global\",\n                            checked: \"true\",\n                            change: _vm.checkboxChange1\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ])\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticStyle: { \"padding-top\": \"25px\" },\n                attrs: { id: \"toast_btn\" }\n              },\n              [\n                _c(\n                  \"ejs-button\",\n                  {\n                    ref: \"showButtonRef\",\n                    staticClass: \"e-btn e-control\",\n                    staticStyle: { \"margin-right\": \"15px\" },\n                    attrs: { id: \"show_Toast\" },\n                    nativeOn: {\n                      click: function($event) {\n                        return _vm.showClicked.apply(null, arguments)\n                      }\n                    }\n                  },\n                  [_vm._v(\"Show Toasts\")]\n                ),\n                _vm._v(\" \"),\n                _vm.ShowBtn\n                  ? _c(\n                      \"ejs-button\",\n                      {\n                        ref: \"hideButtonRef\",\n                        staticClass: \"e-btn e-control\",\n                        attrs: { id: \"hideToast\" },\n                        nativeOn: {\n                          click: function($event) {\n                            return _vm.hideClicked.apply(null, arguments)\n                          }\n                        }\n                      },\n                      [_vm._v(\"Hide All\")]\n                    )\n                  : _vm._e()\n              ],\n              1\n            )\n          ])\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _vm._m(1),\n      _vm._v(\" \"),\n      _vm._m(2)\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"tr\", [\n      _c(\n        \"td\",\n        {\n          staticStyle: { display: \"none\" },\n          attrs: { colspan: \"2\", id: \"customChoose\" }\n        },\n        [\n          _c(\n            \"form\",\n            { staticClass: \"form-horizontal\", attrs: { id: \"formId\" } },\n            [\n              _c(\"div\", { staticClass: \"e-row\" }, [\n                _c(\"div\", { staticClass: \"e-float-input\" }, [\n                  _c(\"input\", {\n                    staticClass: \"e-input\",\n                    attrs: {\n                      id: \"xPos\",\n                      name: \"Digits\",\n                      value: \"50\",\n                      digits: \"true\",\n                      \"data-digits-message\": \"Please enter digits only.\",\n                      required: \"\"\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"span\", { staticClass: \"e-float-line\" }),\n                  _vm._v(\" \"),\n                  _c(\n                    \"label\",\n                    { staticClass: \"e-float-text\", attrs: { for: \"Digits\" } },\n                    [_vm._v(\"X Position\")]\n                  )\n                ])\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-row\" }, [\n                _c(\"div\", { staticClass: \"e-float-input\" }, [\n                  _c(\"input\", {\n                    staticClass: \"e-input\",\n                    attrs: {\n                      id: \"yPos\",\n                      name: \"Digits\",\n                      value: \"50\",\n                      digits: \"true\",\n                      \"data-digits-message\": \"Please enter digits only.\",\n                      required: \"\"\n                    }\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"span\", { staticClass: \"e-float-line\" }),\n                  _vm._v(\" \"),\n                  _c(\n                    \"label\",\n                    { staticClass: \"e-float-text\", attrs: { for: \"Digits\" } },\n                    [_vm._v(\"Y Position\")]\n                  )\n                ])\n              ])\n            ]\n          )\n        ]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"This sample demonstrates the different positioning of the \"),\n        _c(\"code\", [_vm._v(\"Toast\")]),\n        _vm._v(\" based on the target given.\")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"Based on the use case toast can take the body element or any specific element as target. In this sample, with help of custom inputs toast can be positioned based on the target.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\"Toast can be positioned in the 8 pre-defined places.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Custom option will enable to give X and Y values to align the toast based on the given inputs.\"\n          )\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"More information about Toast can be found in this \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/toast/getting-started/\"\n            }\n          },\n          [_vm._v(\"\\n     documentation section\")]\n        ),\n        _vm._v(\".\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/toast/positions/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });