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
/******/ 		"rich-text-editor/insert-special-characters/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/insert-special-characters/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue":
/*!********************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7bc50845_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7bc50845&scoped=true& */ \"./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css& */ \"./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7bc50845_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7bc50845_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7bc50845\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/insert-special-characters/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7bc50845_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7bc50845_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7bc50845&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7bc50845_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7bc50845_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/insert-special-characters/main.js":
/*!********************************************************************!*\
  !*** ./Samples/rich-text-editor/insert-special-characters/main.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/insert-special-characters/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        display: inline-block;\\n}\\n#custom_tbar[data-v-7bc50845],\\n    #custom_tbar div[data-v-7bc50845]{\\n        cursor: pointer;\\n        font-size: 16px;\\n}\\n.e-bigger #custom_tbar div[data-v-7bc50845] {\\n        font-size: 18px;\\n}\\n#rteSection[data-v-7bc50845] {\\n        height: 350px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 0;\\n}\\n.material #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #e3165b;\\n        border-color: #e3165b;\\n}\\n.material-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #56a4fd;\\n        border-color: #56a4fd;\\n}\\n.fabric #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fabric-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078d6;\\n        border-color: #0078d6;\\n}\\n.bootstrap4 #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #007bff;\\n        border-color: #007bff;\\n}\\n.bootstrap #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #317ab9;\\n        border-color: #317ab9;\\n}\\n.highcontrast #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #ffd939;\\n        border-color: #ffd939;\\n}\\n.tailwind #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #3730a3;\\n        border-color: #3730a3;\\n}\\n.tailwind-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #22d3ee;\\n        border-color: #22d3ee;\\n}\\n.bootstrap5 #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap5-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0D6EFD;\\n        border-color: #0D6EFD;\\n}\\n.fluent #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fluent-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078DE;\\n        border-color: #0078DE;\\n}\\n.fabric.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 10px;\\n}\\n.bootstrap.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .bootstrap .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 6px;\\n}\\n.fabric .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 8px;\\n}\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        width: 30px;\\n        height: 30px;\\n        line-height: 30px;\\n        margin: 0 5px 5px 0;\\n        text-align: center;\\n        vertical-align: middle;\\n        border: 1px solid #DDDDDD;\\n        font-size: 20px;\\n        cursor: pointer;\\n        user-select: none;\\n}\\n@media (min-width: 320px) and (max-width: 480px) {\\n.fabric.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 281px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 20px;\\n}\\n.fabric #rteDialog[data-v-7bc50845] {\\n            min-width: 241px;\\n}\\n.bootstrap.e-bigger #rteDialog[data-v-7bc50845],\\n        .bootstrap #rteDialog[data-v-7bc50845] {\\n            min-width: 223px;\\n}\\n.highcontrast.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 283px;\\n}\\n.highcontrast #rteDialog[data-v-7bc50845] {\\n            min-width: 243px;\\n}\\n.material #rteDialog[data-v-7bc50845] {\\n            min-width: 224px;\\n}\\n.material.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 236px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-6TJ7G4YSVALEG4EIDTKDEPCDDSVR3MGGTDKPG3AWYLVZKLLE52QA/Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,sBAAsB;CAC7B;AACD;;QAEQ,gBAAgB;QAChB,gBAAgB;CACvB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;QACQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;;QAEQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;QACQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;;QAEQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;QACQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;QACQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;QACQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;;QAEQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;;QAEQ,2BAA2B;QAC3B,sBAAsB;CAC7B;AACD;;QAEQ,oBAAoB;CAC3B;AACD;;QAEQ,mBAAmB;CAC1B;AACD;;QAEQ,mBAAmB;CAC1B;AACD;QACQ,YAAY;QACZ,aAAa;QACb,kBAAkB;QAClB,oBAAoB;QACpB,mBAAmB;QACnB,uBAAuB;QACvB,0BAA0B;QAC1B,gBAAgB;QAChB,gBAAgB;QAChB,kBAAkB;CACzB;AACD;AACA;YACY,iBAAiB;CAC5B;AACD;QACQ,0BAA0B;CACjC;AACD;YACY,iBAAiB;CAC5B;AACD;;YAEY,iBAAiB;CAC5B;AACD;YACY,iBAAiB;CAC5B;AACD;YACY,iBAAiB;CAC5B;AACD;YACY,iBAAiB;CAC5B;AACD;YACY,iBAAiB;CAC5B;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=7bc50845&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        display: inline-block;\\n}\\n#custom_tbar[data-v-7bc50845],\\n    #custom_tbar div[data-v-7bc50845]{\\n        cursor: pointer;\\n        font-size: 16px;\\n}\\n.e-bigger #custom_tbar div[data-v-7bc50845] {\\n        font-size: 18px;\\n}\\n#rteSection[data-v-7bc50845] {\\n        height: 350px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 0;\\n}\\n.material #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #e3165b;\\n        border-color: #e3165b;\\n}\\n.material-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #56a4fd;\\n        border-color: #56a4fd;\\n}\\n.fabric #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fabric-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078d6;\\n        border-color: #0078d6;\\n}\\n.bootstrap4 #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #007bff;\\n        border-color: #007bff;\\n}\\n.bootstrap #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #317ab9;\\n        border-color: #317ab9;\\n}\\n.highcontrast #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #ffd939;\\n        border-color: #ffd939;\\n}\\n.tailwind #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #3730a3;\\n        border-color: #3730a3;\\n}\\n.tailwind-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #22d3ee;\\n        border-color: #22d3ee;\\n}\\n.bootstrap5 #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .bootstrap5-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0D6EFD;\\n        border-color: #0D6EFD;\\n}\\n.fluent #rteSpecial_char .char_block.e-active[data-v-7bc50845],\\n    .fluent-dark #rteSpecial_char .char_block.e-active[data-v-7bc50845] {\\n        outline: 1px solid #0078DE;\\n        border-color: #0078DE;\\n}\\n.fabric.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 10px;\\n}\\n.bootstrap.e-bigger .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .bootstrap .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 6px;\\n}\\n.fabric .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845],\\n    .highcontrast .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn .e-tbar-btn-text[data-v-7bc50845] {\\n        padding-right: 8px;\\n}\\n#rteSpecial_char .char_block[data-v-7bc50845] {\\n        width: 30px;\\n        height: 30px;\\n        line-height: 30px;\\n        margin: 0 5px 5px 0;\\n        text-align: center;\\n        vertical-align: middle;\\n        border: 1px solid #DDDDDD;\\n        font-size: 20px;\\n        cursor: pointer;\\n        user-select: none;\\n}\\n@media (min-width: 320px) and (max-width: 480px) {\\n.fabric.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 281px;\\n}\\n#rteSpecial_char[data-v-7bc50845] {\\n        padding: 15px 0 15px 20px;\\n}\\n.fabric #rteDialog[data-v-7bc50845] {\\n            min-width: 241px;\\n}\\n.bootstrap.e-bigger #rteDialog[data-v-7bc50845],\\n        .bootstrap #rteDialog[data-v-7bc50845] {\\n            min-width: 223px;\\n}\\n.highcontrast.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 283px;\\n}\\n.highcontrast #rteDialog[data-v-7bc50845] {\\n            min-width: 243px;\\n}\\n.material #rteDialog[data-v-7bc50845] {\\n            min-width: 224px;\\n}\\n.material.e-bigger #rteDialog[data-v-7bc50845] {\\n            min-width: 236px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror */ \"./node_modules/codemirror/lib/codemirror.js\");\n/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ \"./node_modules/codemirror/mode/javascript/javascript.js\");\n/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/mode/css/css.js */ \"./node_modules/codemirror/mode/css/css.js\");\n/* harmony import */ var codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_css_css_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/mode/htmlmixed/htmlmixed.js */ \"./node_modules/codemirror/mode/htmlmixed/htmlmixed.js\");\n/* harmony import */ var codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_htmlmixed_htmlmixed_js__WEBPACK_IMPORTED_MODULE_7__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_3__[\"DialogPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            selection: new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"NodeSelection\"](),\n            range: null,\n            customBtn: null,\n            dialogCtn: null,\n            saveSelection: new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"NodeSelection\"](),\n            target: document.getElementById('rteSampleContainer'),\n            header: 'Special Characters',\n            visible: false,\n            modal: true,\n            showCloseIcon: false,\n            dlgButtons: [{ click: this.onInsert.bind(this), buttonModel: { isPrimary:'true', content: 'Insert' } }, { buttonModel: { content: 'Cancel' }, click: this.dialogOverlay.bind(this) }],\n            toolbarSettings: {\n                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',\n                'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode',\n                {\n                    tooltipText: 'Insert Symbol',\n                    template: '<button class=\"e-tbar-btn e-btn\" tabindex=\"-1\" id=\"custom_tbar\"  style=\"width:100%\"><div class=\"e-tbar-btn-text\" style=\"font-weight: 500;\"> &#937;</div></button>'\n                }, '|', 'Undo', 'Redo']\n            },\n        };\n    },\n    methods: {\n        onCreate: function(e) {\n        this.customBtn = document.getElementById('custom_tbar');\n         this.$refs.dialogObj.ej2Instances.target = document.getElementById('rteSection');\n         var proxy = this;\n        this.customBtn.onclick = function (e) {\n            proxy.$refs.rteObj.ej2Instances.contentModule.getEditPanel().focus();\n            proxy.range = proxy.selection.getRange(document);\n            proxy.saveSelection = proxy.selection.save(proxy.range, document);\n            proxy.$refs.dialogObj.ej2Instances.content = document.getElementById('rteSpecial_char');\n            proxy.$refs.dialogObj.ej2Instances.dataBind();\n            proxy.$refs.dialogObj.show();\n        };\n        },\n        actionComplete: function(args) {\n           if (args.requestType === 'SourceCode') {\n            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbar').parentElement.classList.add('e-overlay');\n        } else if (args.requestType === 'Preview') {\n            this.$refs.rteObj.ej2Instances.getToolbar().querySelector('#custom_tbar').parentElement.classList.remove('e-overlay');\n        }\n        },\n        dialogCreate: function() {\n            var dialogCtn = document.getElementById('rteSpecial_char');\n            var proxy = this;\n            dialogCtn.onclick = function (e) {\n            var target = e.target;\n            var activeEle = proxy.$refs.dialogObj.$el.querySelector('.char_block.e-active');\n            if (target.classList.contains('char_block')) {\n                target.classList.add('e-active');\n                if (activeEle) {\n                    activeEle.classList.remove('e-active');\n                }\n            }\n        };\n        }, \n        onInsert: function() {\n            var activeEle = this.$refs.dialogObj.$el.querySelector('.char_block.e-active');\n            if (activeEle) {\n                if (this.$refs.rteObj.ej2Instances.formatter.getUndoRedoStack().length === 0) {\n                 this.$refs.rteObj.ej2Instances.formatter.saveData();\n                }\n                this.saveSelection.restore();\n                this.$refs.rteObj.ej2Instances.executeCommand('insertText', activeEle.textContent);\n                this.$refs.rteObj.ej2Instances.formatter.saveData();\n                this.$refs.rteObj.ej2Instances.formatter.enableUndo(this.$refs.rteObj.ej2Instances);\n            }\n            this.dialogOverlay();\n        },\n        dialogOverlay: function() {\n             var activeEle = this.$refs.dialogObj.$el.querySelector('.char_block.e-active');\n            if (activeEle) {\n                activeEle.classList.remove('e-active');\n            }\n            this.$refs.dialogObj.hide();\n        }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Count\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/insert-special-characters/App.vue?vue&type=template&id=7bc50845&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"sample-container\"},[_c('div',{staticClass:\"default-section\",attrs:{\"id\":\"rteSection\"}},[_c('ejs-richtexteditor',{ref:\"rteObj\",attrs:{\"toolbarSettings\":_vm.toolbarSettings,\"created\":_vm.onCreate,\"actionComplete\":_vm.actionComplete}},[_c('p',{staticStyle:{\"margin-right\":\"10px\"}},[_vm._v(\"The custom command \\\"insert special character\\\" is configured as the last item of the toolbar. Click on the command and choose the special character you want to include from the popup.\")])]),_vm._v(\" \"),_c('ejs-dialog',{ref:\"dialogObj\",attrs:{\"id\":\"rteDialog\",\"buttons\":_vm.dlgButtons,\"header\":_vm.header,\"overlayClick\":_vm.dialogOverlay,\"visible\":_vm.visible,\"height\":\"340px\",\"width\":\"43%\",\"showCloseIcon\":_vm.showCloseIcon,\"isModal\":_vm.modal,\"target\":_vm.target,\"created\":_vm.dialogCreate}}),_vm._v(\" \"),_vm._m(0)],1)])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"customTbarDialog\"}},[_c('div',{attrs:{\"id\":\"rteSpecial_char\"}},[_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#94;\"}},[_vm._v(\"^\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#95;\"}},[_vm._v(\"_\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#96;\"}},[_vm._v(\"`\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#123;\"}},[_vm._v(\"{\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#124;\"}},[_vm._v(\"|\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#125;\"}},[_vm._v(\"}\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#126;\"}},[_vm._v(\"~\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#160;\"}},[_vm._v(\" \")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#161;\"}},[_vm._v(\"¡\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#162;\"}},[_vm._v(\"¢\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#163;\"}},[_vm._v(\"£\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#164;\"}},[_vm._v(\"¤\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#165;\"}},[_vm._v(\"¥\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#x20B9;\"}},[_vm._v(\"₹\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#166;\"}},[_vm._v(\"¦\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#167;\"}},[_vm._v(\"§\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#168;\"}},[_vm._v(\"¨\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#169;\"}},[_vm._v(\"©\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#170;\"}},[_vm._v(\"ª\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#171;\"}},[_vm._v(\"«\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#172;\"}},[_vm._v(\"¬\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#173;\"}},[_vm._v(\"­\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#174;\"}},[_vm._v(\"®\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#175;\"}},[_vm._v(\"¯\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#176;\"}},[_vm._v(\"°\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#177;\"}},[_vm._v(\"±\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#178;\"}},[_vm._v(\"²\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#179;\"}},[_vm._v(\"³\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#180;\"}},[_vm._v(\"´\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#181;\"}},[_vm._v(\"µ\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#182;\"}},[_vm._v(\"¶\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#183;\"}},[_vm._v(\"·\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#184;\"}},[_vm._v(\"¸\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#185;\"}},[_vm._v(\"¹\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#186;\"}},[_vm._v(\"º\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#187;\"}},[_vm._v(\"»\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#188;\"}},[_vm._v(\"¼\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#189;\"}},[_vm._v(\"½\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#190;\"}},[_vm._v(\"¾\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#191;\"}},[_vm._v(\"¿\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#192;\"}},[_vm._v(\"À\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#193;\"}},[_vm._v(\"Á\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#194;\"}},[_vm._v(\"Â\")]),_vm._v(\" \"),_c('div',{staticClass:\"char_block\",attrs:{\"title\":\"&#195;\"}},[_vm._v(\"Ã\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample shows how to add your own commands to toolbar of the Rich Text Editor. The \"),_c('code',[_vm._v(\"“Ω” \")]),_vm._v(\" command\\n        is added to insert special characters in the editor. Click the “Ω” command to show the special characters list, and\\n        then choose the character to be inserted in the editor.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The Rich Text Editor allows you to configure your own commands to its toolbar using \"),_c('code',[_vm._v(\"toolbarSettings\")]),_vm._v(\" property. \\n        The command can be plain text, icon, or HTML template. \\n        You can also define the order and group where the command should be included. \\n        Bind the action to the command by getting its instance. \")]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Injecting Module\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"),_c('code',[_vm._v(\"Toolbar, Link, Image, HtmlEditor, QuickToolbar\")]),_vm._v(\" into the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/insert-special-characters/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });