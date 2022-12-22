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
/******/ 		"rich-text-editor/events/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/events/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/events/App.vue":
/*!*************************************************!*\
  !*** ./Samples/rich-text-editor/events/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_b16053cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=b16053cc&scoped=true& */ \"./Samples/rich-text-editor/events/App.vue?vue&type=template&id=b16053cc&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/events/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_b16053cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css& */ \"./Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_b16053cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_b16053cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"b16053cc\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/events/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/events/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/rich-text-editor/events/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/events/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b16053cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b16053cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b16053cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b16053cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b16053cc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/events/App.vue?vue&type=template&id=b16053cc&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/events/App.vue?vue&type=template&id=b16053cc&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b16053cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=b16053cc&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/events/App.vue?vue&type=template&id=b16053cc&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b16053cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_b16053cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/events/main.js":
/*!*************************************************!*\
  !*** ./Samples/rich-text-editor/events/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/events/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start */\\n#EventLog b[data-v-b16053cc]{\\n        color: #388e3c;\\n}\\nhr[data-v-b16053cc] {\\n        margin: 1px 10px 1px 0px;\\n        border-top: 1px solid #eee;\\n}\\n.sb-header[data-v-b16053cc] {\\n        z-index: 100;\\n}\\n/* custom code end */\\n.control-wrapper[data-v-b16053cc] {\\n    margin: 0 auto;\\n}\\n.property-section .right-side[data-v-b16053cc] {\\n    padding-left: 10px;\\n}\\n.property-section .left-side[data-v-b16053cc] {\\n    padding: 5px;\\n    width: 25%\\n}\\n.sb-header[data-v-b16053cc] {\\n    z-index: 100;\\n}\\n.sb-content.e-view.hide-header[data-v-b16053cc] {\\n    top: 0 !important;\\n}\\n.sb-header.e-view.hide-header[data-v-b16053cc] {\\n    display: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/xteditor-vue-samples_development/Samples/rich-text-editor/events/App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8EA,uBAAuB;AACvB;QACQ,eAAe;CACtB;AACD;QACQ,yBAAyB;QACzB,2BAA2B;CAClC;AACD;QACQ,aAAa;CACpB;AACD,qBAAqB;AACrB;IACI,eAAe;CAClB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,UAAU;CACb;AACD;IACI,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=b16053cc&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start */\\n#EventLog b[data-v-b16053cc]{\\n        color: #388e3c;\\n}\\nhr[data-v-b16053cc] {\\n        margin: 1px 10px 1px 0px;\\n        border-top: 1px solid #eee;\\n}\\n.sb-header[data-v-b16053cc] {\\n        z-index: 100;\\n}\\n/* custom code end */\\n.control-wrapper[data-v-b16053cc] {\\n    margin: 0 auto;\\n}\\n.property-section .right-side[data-v-b16053cc] {\\n    padding-left: 10px;\\n}\\n.property-section .left-side[data-v-b16053cc] {\\n    padding: 5px;\\n    width: 25%\\n}\\n.sb-header[data-v-b16053cc] {\\n    z-index: 100;\\n}\\n.sb-content.e-view.hide-header[data-v-b16053cc] {\\n    top: 0 !important;\\n}\\n.sb-header.e-view.hide-header[data-v-b16053cc] {\\n    display: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/events/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/events/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            toolbarSettings: {\n            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',\n                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',\n                'LowerCase', 'UpperCase', '|',\n                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',\n                'Outdent', 'Indent', '|','CreateTable',\n                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',\n                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']\n        }\n        };\n    },\n    methods: {\n        onClick: function() {\n             document.getElementById('EventLog').innerHTML = '';\n        },\n        create: function() {\n        this.appendElement('Rich Text Editor <b>create</b> event called<hr>');\n        },\n        actionBegin: function(e) {\n        this.appendElement('<b>'+ e.requestType + '</b> action is called<hr>');\n        this.handleFullScreen(e);\n        },\n        actionComplete: function(e) {\n        this.appendElement('<b>'+ e.requestType + '</b> action is completed<hr>');\n        this.actionCompleteHandler(e);\n        },\n        focus: function() {\n        this.appendElement('Rich Text Editor <b>focus</b> event called<hr>');\n        },\n        blur: function() {\n        this.appendElement('Rich Text Editor <b>blur</b> event called<hr>');\n        },\n        change: function() {\n        this.appendElement('Rich Text Editor <b>change</b> event called<hr>');\n        },\n        toolbarClick: function() {\n        this.appendElement('Rich Text Editor <b>toolbar click</b> event called<hr>');\n        },\n        beforeDialogOpen: function() {\n         this.appendElement('Rich Text Editor <b>beforeDialogOpen</b> event called<hr>');\n        },\n        dialogOpen: function() {\n             this.appendElement('Rich Text Editor <b>dialogOpen</b> event called<hr>');\n        },\n\n        dialogClose: function() {\n             this.appendElement('Rich Text Editor <b>dialogClose</b> event called<hr>');\n        },\n\n        beforeQuickToolbarOpen: function() {\n             this.appendElement('Rich Text Editor <b>beforeQuickToolbarOpen</b> event called<hr>');\n        },\n\n        quickToolbarOpen: function() {\n         this.appendElement('Rich Text Editor <b>quickToolbarOpen</b> event called<hr>');\n        },\n\n        quickToolbarClose: function() {\n             this.appendElement('Rich Text Editor <b>quickToolbarClose</b> event called<hr>');\n        },\n\n        imageSelected: function() {\n             this.appendElement('Rich Text Editor <b>imageSelected</b> event called<hr>');\n        },\n\n        imageUploading: function() {\n             this.appendElement('Rich Text Editor <b>imageUploading</b> event called<hr>');\n        },\n\n        imageUploadSuccess: function() {\n             this.appendElement('Rich Text Editor <b>imageUploadSuccess</b> event called<hr>');\n        },\n\n        imageUploadFailed: function() {\n             this.appendElement('Rich Text Editor <b>imageUploadFailed</b> event called<hr>');\n        },\n\n        imageRemoving: function() {\n             this.appendElement('Rich Text Editor <b>imageRemoving</b> event called<hr>');\n        },\n\n        destroyed: function() {\n             this.appendElement('Rich Text Editor <b>destroyed</b> event called<hr>');\n        },\n\n        beforeSanitizeHtml: function() {\n             this.appendElement('Rich Text Editor <b>beforeSanitizeHtml</b> event called<hr>');\n        },\n\n        resizing: function() {\n             this.appendElement('Rich Text Editor <b>resizing</b> event called<hr>');\n        },\n\n        resizeStart: function() {\n             this.appendElement('Rich Text Editor <b>resizeStart</b> event called<hr>');\n        },\n\n        resizeStop: function() {\n             this.appendElement('Rich Text Editor <b>resizeStop</b> event called<hr>');\n        },\n\n        appendElement: function(html) {\n             var span = document.createElement('span');\n             span.innerHTML = html\n             var log = document.getElementById('EventLog');\n             log.insertBefore(span, log.firstChild);\n\n        },\n        handleFullScreen: function(e) {\n        var sbCntEle = document.querySelector('.sb-content.e-view');\n        var sbHdrEle = document.querySelector('.sb-header.e-view');            \n        var leftBar;\n        var transformElement;\n        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n            leftBar = document.querySelector('#right-sidebar');\n            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');\n        } else {\n            leftBar = document.querySelector('#left-sidebar');\n            transformElement = document.querySelector('#right-pane');\n        }\n        if (e.targetItem === 'Maximize') {\n            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isIos) {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([sbCntEle, sbHdrEle], ['hide-header']);\n            }\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([leftBar], ['e-close']);\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([leftBar], ['e-open']);\n            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) { transformElement.style.marginLeft = '0px'; }\n            transformElement.style.transform = 'inherit';\n        } else if (e.targetItem === 'Minimize') {\n            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isIos) {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([sbCntEle, sbHdrEle], ['hide-header']);\n            }\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([leftBar], ['e-close']);\n            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([leftBar], ['e-open']);\n            transformElement.style.marginLeft = leftBar.offsetWidth + 'px'; }\n            transformElement.style.transform = 'translateX(0px)';\n        }\n    },\n    actionCompleteHandler: function(e) {\n        setTimeout(() => { this.$refs.eventObj.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 400);\n    }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Table\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/events/App.vue?vue&type=template&id=b16053cc&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/events/App.vue?vue&type=template&id=b16053cc&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"control-section\", staticStyle: { overflow: \"hidden\" } },\n    [\n      _c(\"div\", [\n        _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"content-wrapper\" },\n            [\n              _c(\n                \"ejs-richtexteditor\",\n                {\n                  ref: \"eventObj\",\n                  attrs: {\n                    toolbarSettings: _vm.toolbarSettings,\n                    created: _vm.create,\n                    actionBegin: _vm.actionBegin,\n                    actionComplete: _vm.actionComplete,\n                    focus: _vm.focus,\n                    blur: _vm.blur,\n                    change: _vm.change,\n                    toolbarClick: _vm.toolbarClick,\n                  },\n                },\n                [\n                  _c(\"p\", [\n                    _vm._v(\n                      'The Rich Text Editor component is a WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content. \\n                Users can format their content using standard toolbar commands.'\n                    ),\n                  ]),\n                  _vm._v(\" \"),\n                  _c(\"p\", [_c(\"b\", [_vm._v(\"Key features:\")])]),\n                  _vm._v(\" \"),\n                  _c(\"ul\", [\n                    _c(\"li\", [\n                      _c(\"p\", [_vm._v(\"Provides IFRAME and DIV modes\")]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\"Capable of handling markdown editing.\"),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\n                          \"Contains a modular library to load the necessary functionality on demand.\"\n                        ),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\"Provides a fully customizable toolbar.\"),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\n                          \"Provides HTML view to edit the source directly for developers.\"\n                        ),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\"Supports third-party library integration.\"),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\n                          \"Allows a preview of modified content before saving it.\"\n                        ),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [\n                        _vm._v(\n                          \"Handles images, hyperlinks, video, hyperlinks, uploads, etc.\"\n                        ),\n                      ]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [_vm._v(\"Contains undo/redo manager.\")]),\n                    ]),\n                    _vm._v(\" \"),\n                    _c(\"li\", [\n                      _c(\"p\", [_vm._v(\"Creates bulleted and numbered lists.\")]),\n                    ]),\n                  ]),\n                ]\n              ),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n          _c(\"table\", { attrs: { title: \"Event Trace\", id: \"property\" } }, [\n            _c(\"tbody\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"tr\", [\n                _c(\"td\", [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"evtbtn\",\n                      staticStyle: { \"padding-bottom\": \"10px\" },\n                    },\n                    [\n                      _c(\n                        \"ejs-button\",\n                        {\n                          attrs: { id: \"clear\" },\n                          nativeOn: {\n                            click: function ($event) {\n                              return _vm.onClick.apply(null, arguments)\n                            },\n                          },\n                        },\n                        [_vm._v(\"Clear\")]\n                      ),\n                    ],\n                    1\n                  ),\n                ]),\n              ]),\n            ]),\n          ]),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _vm._m(1),\n      _vm._v(\" \"),\n      _vm._m(2),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"tr\", [\n      _c(\"td\", [\n        _c(\n          \"div\",\n          {\n            staticClass: \"eventarea\",\n            staticStyle: { height: \"245px\", overflow: \"auto\" },\n          },\n          [\n            _c(\"span\", {\n              staticClass: \"EventLog\",\n              staticStyle: { \"word-break\": \"normal\" },\n              attrs: { id: \"EventLog\" },\n            }),\n          ]\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the events that trigger on every action of the Rich Text Editor. The event details are showcased in the event trace panel.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The Rich Text Editor triggers the events based on its actions. \\n        The events can be used as an extension point to perform custom operations.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"change\")]),\n          _vm._v(\n            \" - Triggers when the editor gets blurred and changes are made to the content.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"focus\")]),\n          _vm._v(\" - Triggers when the editor is in focus.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"blur\")]),\n          _vm._v(\" - Triggers when focused out of the editor.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"actionBegin\")]),\n          _vm._v(\" - Triggers before the execution of command.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"actionComplete\")]),\n          _vm._v(\" - Triggers after the execution of command.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"created\")]),\n          _vm._v(\" - Triggers when the component is created.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"beforeDialogOpen\")]),\n          _vm._v(\" – Event triggers when the dialog is being opened..\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"dialogOpen\")]),\n          _vm._v(\" – Event triggers when a dialog is opened.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"dialogClose\")]),\n          _vm._v(\" – Event triggers after the dialog has been closed.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"beforeQuickToolbarOpen\")]),\n          _vm._v(\" – Event triggers when the quick toolbar is being opened.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"quickToolbarOpen\")]),\n          _vm._v(\" – Event triggers when a quick toolbar is opened.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"quickToolbarClose\")]),\n          _vm._v(\" – Event triggers after the quick toolbar has been closed.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"imageSelected\")]),\n          _vm._v(\n            \" – Event triggers when the image is selected or dragged into the insert image dialog\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"imageUploading\")]),\n          _vm._v(\n            \" – Event triggers when the selected image begins to upload in the insert image dialog\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"imageUploadSuccess\")]),\n          _vm._v(\n            \" – Event triggers when the image is successfully uploaded to the server side\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"imageUploadFailed\")]),\n          _vm._v(\n            \" – Event triggers when there is an error in the image upload\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"imageRemoving\")]),\n          _vm._v(\n            \" – Event triggers when the selected image is cleared from the insert image dialog\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"destroyed\")]),\n          _vm._v(\" – Triggers when the component is destroyed.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"beforeSanitizeHtml\")]),\n          _vm._v(\n            \" – Event triggers before sanitize the value. It's only applicable to editorMode as `HTML`\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"resizing\")]),\n          _vm._v(\" – Triggers only when resizing the image\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"resizeStart\")]),\n          _vm._v(\" –Triggers only when start resize the image\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"resizeStop\")]),\n          _vm._v(\" – Triggers only when stop resize the image\"),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Injecting Module\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Toolbar, Link, Image, HtmlEditor\")]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/events/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });