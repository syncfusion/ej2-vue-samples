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
/******/ 		"rich-text-editor/image-editor-integration/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/image-editor-integration/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/image-editor-integration/App.vue":
/*!*******************************************************************!*\
  !*** ./Samples/rich-text-editor/image-editor-integration/App.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_305aef67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=305aef67& */ \"./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=template&id=305aef67&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_305aef67_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=305aef67&lang=css& */ \"./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_305aef67___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_305aef67___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/image-editor-integration/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_305aef67_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=305aef67&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_305aef67_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_305aef67_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_305aef67_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_305aef67_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=template&id=305aef67&":
/*!**************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=template&id=305aef67& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_305aef67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=305aef67& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=template&id=305aef67&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_305aef67___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_305aef67___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/image-editor-integration/main.js":
/*!*******************************************************************!*\
  !*** ./Samples/rich-text-editor/image-editor-integration/main.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/image-editor-integration/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n  content: \\\"\\\\E81E\\\";\\n}\\n.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.material3 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.material3-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n    content: '\\\\E730';\\n}\\n.fabric .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.fabric-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.highcontrast .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n    content: '\\\\E97C';\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n    content: '\\\\E78F';\\n}\\r\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ditor-vue-samples_release_22.1.1/Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;CAClB;AACD;;;;;;;;IAQI,iBAAiB;CACpB;AACD;;;IAGI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&id=305aef67&lang=css&\",\"sourcesContent\":[\"\\n.e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n  content: \\\"\\\\e81e\\\";\\n}\\n.fluent .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.fluent-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.bootstrap5 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.bootstrap5-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.tailwind .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.tailwind-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.material3 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.material3-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n    content: '\\\\e730';\\n}\\n.fabric .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.fabric-dark .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before,\\r\\n.highcontrast .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n    content: '\\\\e97c';\\n}\\n.bootstrap4 .e-rte-quick-popup .e-rte-quick-toolbar .e-rte-image-editor::before {\\r\\n    content: '\\\\e78f';\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_image_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-image-editor */ \"./node_modules/@syncfusion/ej2-vue-image-editor/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__[\"DialogPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_image_editor__WEBPACK_IMPORTED_MODULE_3__[\"ImageEditorPlugin\"]);\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"RichTextEditorPlugin\"]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\r\n    data: function() {\r\n        return {\r\n            visible: false,\r\n            showCloseIcon: true,\r\n            isModal: false,\r\n            selection: new _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"NodeSelection\"](),\r\n            range: null,\r\n            saveSelection: null,\r\n            dataURL: null,\r\n            isLoaded: false,\r\n            imageElement: null,\r\n            toolbar: ['Undo', 'Redo', 'Crop', 'Annotate', 'ZoomIn', 'ZoomOut',\r\n                      'Reset', 'Pan', 'Finetune', 'Filter', 'Pen', 'Line', 'Rectangle', 'Ellipse', 'Arrow',\r\n                      'Path', 'Text', 'CustomSelection', 'CircleSelection', 'SquareSelection', 'RatioSelection',\r\n                      'Default', 'Chrome', 'Cold', 'Warm', 'Grayscale', 'Sepia', 'Invert', 'Brightness', 'Contrast',\r\n                      'Hue', 'Saturation', 'Exposure', 'Opacity', 'Blur' ],\r\n            dlgButtons: [\r\n                {\r\n                buttonModel: { content: \"Save\", isPrimary: true },\r\n                click: this.onInsert.bind(this),\r\n                },\r\n                { buttonModel: { content: \"Cancel\" }, click: this.onCancel },\r\n            ],\r\n            header: \"Image Editor\",\r\n            quickToolbarSettings: {\r\n                image: [\r\n                \"Replace\",\r\n                \"Align\",\r\n                \"Caption\",\r\n                \"Remove\",\r\n                \"-\",\r\n                \"InsertLink\",\r\n                \"Display\",\r\n                \"AltText\",\r\n                {\r\n                    tooltipText: \"Image Editor\",\r\n                    template:\r\n                    '<button class=\"e-tbar-btn e-btn\" id=\"imageEditor\"><span class=\"e-btn-icon e-icons e-rte-image-editor\"></span></button>',\r\n                },\r\n                ],\r\n            },\r\n        };\r\n    },\r\n    methods: {\r\n        toolbarClick: function (args) {\r\n            if (args.item.tooltipText === \"Image Editor\") {\r\n                this.range = this.selection.getRange(document);\r\n                this.saveSelection = this.selection.save(this.range, document);\r\n                this.$refs.dialogObj.show();\r\n            }\r\n        },\r\n        onInsert: function () {\r\n            if (\r\n                this.$refs.defaultRTE.ej2Instances.formatter.getUndoRedoStack()\r\n                .length === 0\r\n            ) {\r\n                this.$refs.defaultRTE.ej2Instances.formatter.saveData();\r\n            }\r\n            this.saveSelection.restore();\r\n            var canvas = document.createElement(\"CANVAS\");\r\n            var ctx = canvas.getContext(\"2d\");\r\n            const imgData = this.$refs.imageEditorObj.getImageData();\r\n            canvas.height = imgData.height;\r\n            canvas.width = imgData.width;\r\n            ctx.putImageData(imgData, 0, 0);\r\n            this.isLoaded = true;\r\n            this.$refs.defaultRTE.executeCommand(\"editImage\", {\r\n                url: canvas.toDataURL(),\r\n                width: { width: canvas.width },\r\n                height: { height: canvas.height },\r\n                selection: this.saveSelection,\r\n                cssClass: this.imageElement.getAttribute('class').replace('e-rte-image', ''),\r\n            });\r\n            this.$refs.defaultRTE.ej2Instances.formatter.saveData();            \r\n            this.$refs.dialogObj.hide();\r\n            this.isLoaded = false;\r\n        },\r\n        onCancel: function () {\r\n            this.$refs.dialogObj.hide();\r\n        },\r\n        OnBeforeOpen: function () {\r\n            var selectNodes = this.$refs.defaultRTE.ej2Instances.formatter.editorManager.nodeSelection.getNodeCollection(\r\n                this.range\r\n            );\r\n            if (selectNodes.length == 1 && selectNodes[0].tagName == \"IMG\") {\r\n                this.imageElement = selectNodes[0];\r\n                this.imageElement.crossOrigin = \"anonymous\";\r\n                var canvas = document.createElement(\"CANVAS\");\r\n                var ctx = canvas.getContext(\"2d\");\r\n                canvas.height = this.imageElement.offsetHeight;\r\n                canvas.width = this.imageElement.offsetWidth;\r\n                var editorobj = this.$refs.imageEditorObj;\r\n                var imageElementLoad = this.imageElement;\r\n                this.imageElement.onload = function () {\r\n                ctx.drawImage(imageElementLoad, 0, 0, canvas.width, canvas.height);\r\n                this.dataURL = canvas.toDataURL();\r\n                    if (!this.isLoaded) {\r\n                        editorobj.open(this.dataURL);\r\n                    }\r\n                };\r\n            }\r\n        },\r\n    },\r\n    provide:{\r\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_1__[\"QuickToolbar\"]]\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=template&id=305aef67&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=template&id=305aef67& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"default-section\" },\n          [\n            _c(\n              \"ejs-richtexteditor\",\n              {\n                ref: \"defaultRTE\",\n                attrs: {\n                  id: \"default\",\n                  quickToolbarSettings: _vm.quickToolbarSettings,\n                  toolbarClick: _vm.toolbarClick,\n                },\n              },\n              [\n                _c(\"p\", [\n                  _vm._v(\n                    \"\\n                An image can be edited within a Rich Text Editor using an Image Editor.\\n                \"\n                  ),\n                  _c(\"img\", {\n                    staticStyle: { height: \"350px\" },\n                    attrs: {\n                      id: \"img1\",\n                      src: \"https://ej2.syncfusion.com/demos/./../../source/image-editor/images/bridge.png\",\n                    },\n                  }),\n                ]),\n                _vm._v(\" \"),\n                _c(\"p\", [\n                  _vm._v(\n                    \"\\n                    It allows users to quickly and easily add an Image Editor to their Rich Text Editor.\\n                    It provides a variety of features, including image cropping, resizing, rotation, and more.\\n                    Additionally, it supports a wide range of image formats, including JPEG, PNG, and GIF.\\n                \"\n                  ),\n                ]),\n              ]\n            ),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          [\n            _c(\n              \"ejs-dialog\",\n              {\n                ref: \"dialogObj\",\n                attrs: {\n                  buttons: _vm.dlgButtons,\n                  beforeOpen: _vm.OnBeforeOpen,\n                  header: _vm.header,\n                  visible: _vm.visible,\n                  showCloseIcon: _vm.showCloseIcon,\n                  width: \"800px\",\n                  height: \"550px\",\n                  isModal: _vm.isModal,\n                },\n              },\n              [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-imageeditor\", {\n                      ref: \"imageEditorObj\",\n                      attrs: {\n                        id: \"image-editor\",\n                        height: \"400px\",\n                        toolbar: _vm.toolbar,\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]\n            ),\n          ],\n          1\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This example demonstrates how to integrate Image Editor into Rich Text Editor component. To use it, simply click on the image to open the quick toolbar and select Image Editor custom quick toolbar. Then, the image will be opened in the Image Editor.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The Image Editor component is integrated into the Rich Text Editor and opens the Image Editor within a Dialog when the Image Editor custom quick toolbar is clicked and allows to edit the image. To achieve this, the sample is customized for the Image Editor and Rich Text Editor\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\"Include the Image Editor custom toolbar item in the \"),\n          _c(\n            \"a\",\n            {\n              attrs: {\n                target: \"_blank\",\n                href: \"https://helpej2.syncfusion.com/vue/documentation/api/rich-text-editor/quickToolbarSettingsModel/#image\",\n              },\n            },\n            [_vm._v(\"quickToolbarSettings.image\")]\n          ),\n          _vm._v(\" property of the Rich Text Editor\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Configure the Image Editor within a Dialog using the \"),\n          _c(\n            \"a\",\n            {\n              attrs: {\n                target: \"_blank\",\n                href: \"https://helpej2.syncfusion.com/vue/documentation/api/dialog#beforeopen\",\n              },\n            },\n            [_vm._v(\"beforeOpen\")]\n          ),\n          _vm._v(\" event of the Dialog\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Open the Dialog on clicking the Image Editor custom toolbar item\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Insert the edited image into the Rich Text Editor by clicking the Insert button\"\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=305aef67&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/image-editor-integration/App.vue?vue&type=style&index=0&id=305aef67&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"29159e27\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/image-editor-integration/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });