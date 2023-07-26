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
/******/ 		"rich-text-editor/tools/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/tools/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/tools/App.vue":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/tools/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_70d68fe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=70d68fe4&scoped=true& */ \"./Samples/rich-text-editor/tools/App.vue?vue&type=template&id=70d68fe4&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/tools/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_70d68fe4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css& */ \"./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_70d68fe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_70d68fe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"70d68fe4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/tools/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/tools/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/rich-text-editor/tools/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_70d68fe4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_70d68fe4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_70d68fe4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_70d68fe4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_70d68fe4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/tools/App.vue?vue&type=template&id=70d68fe4&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/rich-text-editor/tools/App.vue?vue&type=template&id=70d68fe4&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_70d68fe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=70d68fe4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=template&id=70d68fe4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_70d68fe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_70d68fe4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/tools/main.js":
/*!************************************************!*\
  !*** ./Samples/rich-text-editor/tools/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/tools/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-code-mirror[data-v-70d68fe4]::before {\\n    content: '\\\\E345';\\n}\\n.e-html-preview[data-v-70d68fe4]::before {\\n    content: '\\\\E350';\\n}\\n.CodeMirror-linenumber[data-v-70d68fe4],\\n.CodeMirror-gutters[data-v-70d68fe4] {\\n    display: none;\\n}\\n.sb-header[data-v-70d68fe4] {\\n    z-index: 100;\\n}\\n.sb-content.e-view.hide-header[data-v-70d68fe4] {\\n    top: 0 !important;\\n}\\n.sb-header.e-view.hide-header[data-v-70d68fe4] {\\n    display: none;\\n}\\n.fabric-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.bootstrap5-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.material-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.tailwind-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.highcontrast .cm-s-default .cm-tag[data-v-70d68fe4] {\\n    color: #00ff00;\\n}\\n.fabric-dark .cm-s-default .cm-string[data-v-70d68fe4],\\n.bootstrap5-dark .cm-s-default .cm-string[data-v-70d68fe4],\\n.material-dark .cm-s-default .cm-string[data-v-70d68fe4],\\n.tailwind-dark .cm-s-default .cm-string[data-v-70d68fe4] {\\n    color: blue;\\n}\\n.highcontrast .cm-s-default .cm-string[data-v-70d68fe4] {\\n    color: #ffd939;\\n}\\n.fabric-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.bootstrap5-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.material-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.tailwind-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.highcontrast .cm-s-default .cm-attribute[data-v-70d68fe4] {\\n    color: #f00;\\n}\\n.fabric-dark .CodeMirror[data-v-70d68fe4],\\n.bootstrap5-dark .CodeMirror[data-v-70d68fe4],\\n.material-dark .CodeMirror[data-v-70d68fe4],\\n.tailwind-dark .CodeMirror[data-v-70d68fe4] {\\n    background:  #303030;\\n    color: white;\\n}\\n.highcontrast .CodeMirror[data-v-70d68fe4] {\\n    background: black;\\n    color: white;\\n}\\n.e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4] {\\n    padding: 10px;\\n    background: #F4F5F7;\\n}\\n.fabric-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.bootstrap5-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.material-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.tailwind-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.highcontrast .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4] {\\n    padding: 10px;\\n    background: #303030;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ditor-vue-samples_release_22.1.1/Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;;IAEI,cAAc;CACjB;AACD;IACI,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,cAAc;CACjB;AACD;;;;;IAKI,eAAe;CAClB;AACD;;;;IAII,YAAY;CACf;AACD;IACI,eAAe;CAClB;AACD;;;;;IAKI,YAAY;CACf;AACD;;;;IAII,qBAAqB;IACrB,aAAa;CAChB;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,cAAc;IACd,oBAAoB;CACvB;AACD;;;;;IAKI,cAAc;IACd,oBAAoB;CACvB\",\"file\":\"App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.e-code-mirror[data-v-70d68fe4]::before {\\n    content: '\\\\e345';\\n}\\n.e-html-preview[data-v-70d68fe4]::before {\\n    content: '\\\\e350';\\n}\\n.CodeMirror-linenumber[data-v-70d68fe4],\\n.CodeMirror-gutters[data-v-70d68fe4] {\\n    display: none;\\n}\\n.sb-header[data-v-70d68fe4] {\\n    z-index: 100;\\n}\\n.sb-content.e-view.hide-header[data-v-70d68fe4] {\\n    top: 0 !important;\\n}\\n.sb-header.e-view.hide-header[data-v-70d68fe4] {\\n    display: none;\\n}\\n.fabric-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.bootstrap5-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.material-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.tailwind-dark .cm-s-default .cm-tag[data-v-70d68fe4],\\n.highcontrast .cm-s-default .cm-tag[data-v-70d68fe4] {\\n    color: #00ff00;\\n}\\n.fabric-dark .cm-s-default .cm-string[data-v-70d68fe4],\\n.bootstrap5-dark .cm-s-default .cm-string[data-v-70d68fe4],\\n.material-dark .cm-s-default .cm-string[data-v-70d68fe4],\\n.tailwind-dark .cm-s-default .cm-string[data-v-70d68fe4] {\\n    color: blue;\\n}\\n.highcontrast .cm-s-default .cm-string[data-v-70d68fe4] {\\n    color: #ffd939;\\n}\\n.fabric-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.bootstrap5-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.material-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.tailwind-dark .cm-s-default .cm-attribute[data-v-70d68fe4],\\n.highcontrast .cm-s-default .cm-attribute[data-v-70d68fe4] {\\n    color: #f00;\\n}\\n.fabric-dark .CodeMirror[data-v-70d68fe4],\\n.bootstrap5-dark .CodeMirror[data-v-70d68fe4],\\n.material-dark .CodeMirror[data-v-70d68fe4],\\n.tailwind-dark .CodeMirror[data-v-70d68fe4] {\\n    background:  #303030;\\n    color: white;\\n}\\n.highcontrast .CodeMirror[data-v-70d68fe4] {\\n    background: black;\\n    color: white;\\n}\\n.e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4] {\\n    padding: 10px;\\n    background: #F4F5F7;\\n}\\n.fabric-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.bootstrap5-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.material-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.tailwind-dark .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4],\\n.highcontrast .e-richtexteditor .e-rte-content .e-content pre[data-v-70d68fe4] {\\n    padding: 10px;\\n    background: #303030;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/tools/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\n\nlet hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            showCharCount: true,\n            myCodeMirror: '',\n            fileManagerSettings: {\n                enable: true,\n                path: '/Pictures/Food',\n                ajaxSettings: {\n                    url: hostUrl + 'api/FileManager/FileOperations',\n                    getImageUrl: hostUrl + 'api/FileManager/GetImage',\n                    uploadUrl: hostUrl + 'api/FileManager/Upload',\n                    downloadUrl: hostUrl + 'api/FileManager/Download'\n                }\n            },\n            quickToolbarSettings: {\n                table: ['TableHeader', 'TableRows', 'TableColumns', 'TableCell', '-', 'BackgroundColor', 'TableRemove', 'TableCellVerticalAlign', 'Styles']\n            },\n            value: `<p>The Rich Text Editor is a WYSIWYG (\"what you see is what you get\") editor useful to create and edit content and return the valid <a href='https://ej2.syncfusion.com/home/' target='_blank'>HTML markup</a> or <a href='https://ej2.syncfusion.com/home/' target='_blank'>markdown</a> of the content</p>\n        <p><b>Toolbar</b></p>\n        <ol>\n        <li> \n        <p>The Toolbar contains commands to align the text, insert a link, insert an image, insert list, undo/redo operations, HTML view, etc </p>\n        </li>\n        <li> \n        <p>The Toolbar is fully customizable </p>\n        </li>\n        </ol>\n        <p><b>Links</b></p>\n        <ol>\n        <li>\n        <p>You can insert a hyperlink with its corresponding dialog </p>\n        </li>\n        <li>\n        <p>Attach a hyperlink to the displayed text. </p>\n        </li>\n        <li>\n        <p>Customize the quick toolbar based on the hyperlink </p> \n        </li>\n        </ol>\n        <p><b>Image.</b></p>\n        <ol>\n        <li>\n        <p>Allows you to insert images from an online source as well as the local computer </p> \n        </li>\n        <li>\n        <p>You can upload an image </p>\n        </li>\n        <li> \n        <p>Provides an option to customize the quick toolbar for an image </p>\n        </li>\n        </ol>\n         <img alt=\"Logo\" src=\"./../.././../../source/rich-text-editor/images/RTEImage-Feather.png\" style=\"width: 300px;\">`,\n            toolbarSettings: {\n                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',\n                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',\n                'LowerCase', 'UpperCase', 'SuperScript', 'SubScript' , 'EmojiPicker', '|',\n                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',\n                'Outdent', 'Indent', '|',\n                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']\n            },\n        };\n    },\n    methods: {\n        mirrorConversion: function(e) {\n            var textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();\n            var id = this.$refs.rteObj.ej2Instances.getID() +  'mirror-view';\n            var mirrorView = this.$refs.rteObj.$el.parentNode.querySelector('#' + id);\n            var charCount = this.$refs.rteObj.$el.parentNode.querySelector('.e-rte-character-count');\n            if (e.targetItem === 'Preview') {\n                textArea.style.display = 'block';\n                mirrorView.style.display = 'none';\n                textArea.innerHTML = this.myCodeMirror.getValue();\n                charCount.style.display = 'block';\n            }\n            else {\n                if (!mirrorView) {\n                    mirrorView = document.createElement('div', { className: 'e-content' });\n                    mirrorView.id = id;\n                    textArea.parentNode.appendChild(mirrorView);\n                }\n                else {\n                    mirrorView.innerHTML = '';\n                }\n                textArea.style.display = 'none';\n                mirrorView.style.display = 'block';\n                this.renderCodeMirror(mirrorView, this.$refs.rteObj.ej2Instances.value);\n                charCount.style.display = 'none';\n            }\n        },\n        renderCodeMirror: function(mirrorView, content) {\n        this.myCodeMirror = CodeMirror(mirrorView, {\n            value: content,\n            lineNumbers: true,\n            mode: 'text/html',\n            lineWrapping: true,\n\n        });\n    },\n    handleFullScreen: function(e){\n        var sbCntEle = document.querySelector('.sb-content.e-view');\n        var sbHdrEle = document.querySelector('.sb-header.e-view');\n        var leftBar;\n        var transformElement;\n        if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n            leftBar = document.querySelector('#right-sidebar');\n            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');\n        }\n        else {\n            leftBar = document.querySelector('#left-sidebar');\n            transformElement = document.querySelector('#right-pane');\n        }\n        if (e.targetItem === 'Maximize') {\n            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isIos) {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([sbCntEle, sbHdrEle], ['hide-header']);\n            }\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([leftBar], ['e-close']);\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([leftBar], ['e-open']);\n            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n                transformElement.style.marginLeft = '0px';\n            }\n            transformElement.style.transform = 'inherit';\n        }\n        else if (e.targetItem === 'Minimize') {\n            if (_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice && _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isIos) {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([sbCntEle, sbHdrEle], ['hide-header']);\n            }\n            Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"removeClass\"])([leftBar], ['e-close']);\n            if (!_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice) {\n                Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"addClass\"])([leftBar], ['e-open']);\n                transformElement.style.marginLeft = leftBar.offsetWidth + 'px';\n            }\n            transformElement.style.transform = 'translateX(0px)';\n        }\n    },\n        actionCompleteHandler: function(e) {\n           if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {\n                this.$refs.rteObj.ej2Instances.sourceCodeModule.getPanel().style.display = 'none';\n                this.mirrorConversion(e);\n            }\n            else {\n                var proxy = this;\n                setTimeout(function () { proxy.$refs.rteObj.ej2Instances.toolbarModule.refreshToolbarOverflow(); }, 1000);\n            }\n        }\n    },\n    provide:{\n        richtexteditor:[_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Count\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Table\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"FileManager\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"EmojiPicker\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=template&id=70d68fe4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/tools/App.vue?vue&type=template&id=70d68fe4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"sample-container\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"default-section\" },\n          [\n            _c(\"ejs-richtexteditor\", {\n              ref: \"rteObj\",\n              attrs: {\n                value: _vm.value,\n                toolbarSettings: _vm.toolbarSettings,\n                actionBegin: _vm.handleFullScreen,\n                actionComplete: _vm.actionCompleteHandler,\n                showCharCount: _vm.showCharCount,\n                maxLength: _vm.maxLength,\n                fileManagerSettings: _vm.fileManagerSettings,\n                quickToolbarSettings: _vm.quickToolbarSettings,\n              },\n            }),\n          ],\n          1\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the full features of Rich Text Editor that includes all the tools and functionalities.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The editor’s toolbar contains commands to format the content. The toolbar consists of:\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Lists\")]),\n          _vm._v(\" - NumberFormat list and BulletFormat list types.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Links\")]),\n          _vm._v(\n            \" - A hyperlink can be inserted into the editor for quick access to related information.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Image\")]),\n          _vm._v(\" - Inserts and manages images.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Table\")]),\n          _vm._v(\" - Inserts and manages Tables.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Alignment\")]),\n          _vm._v(\" - Aligns the content with left, center, and right margins.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Undo/Redo\")]),\n          _vm._v(\" - Allows undo/redo operations.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Indent/ Outdent\")]),\n          _vm._v(\" - Increases/decreases the indent level of the content.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Lower / Upper case\")]),\n          _vm._v(\" – Changes the casing of the selected text.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"SubScript / SuperScript\")]),\n          _vm._v(\n            \" - Makes the selected text as subscript (lower)/superscript(upper).\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"FullScreen\")]),\n          _vm._v(\n            \" - Stretches the editor to the maximum width and height of the browser window.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Format\")]),\n          _vm._v(\n            \" – Formats the sentence in different ways such as heading level, quotation, and code snippet\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Styles\")]),\n          _vm._v(\n            \" – Allows you to apply inline styles to the selected content like bold, italic, and more.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Insert Code\")]),\n          _vm._v(\n            \" - Allows you to apply code format to the selected parent nodes. In the above sample, the style for the code format ('pre' tag) is applied by adding the background color.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Insert Emoticon\")]),\n          _vm._v(\" - Inserts the emoticon to the editor\"),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Injecting Module\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The above features built as modules have to be included in your application. For example, to use image and link, we need to inject \"\n        ),\n        _c(\"code\", [\n          _vm._v(\n            \"Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, EmojiPicker\"\n          ),\n        ]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/tools/App.vue?vue&type=style&index=0&id=70d68fe4&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2c1a1e88\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/tools/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });