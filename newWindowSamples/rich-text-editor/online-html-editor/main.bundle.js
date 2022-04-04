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
/******/ 		"rich-text-editor/online-html-editor/main": 0
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
/******/ 	deferredModules.push(["./Samples/rich-text-editor/online-html-editor/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue":
/*!*************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=31168054& */ \"./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/rich-text-editor/online-html-editor/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&":
/*!********************************************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=31168054& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_31168054___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?");

/***/ }),

/***/ "./Samples/rich-text-editor/online-html-editor/main.js":
/*!*************************************************************!*\
  !*** ./Samples/rich-text-editor/online-html-editor/main.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/rich-text-editor/online-html-editor/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.online-editor #defaultRTE {\\n  overflow: hidden;\\n  border: none;\\n}\\n.online-editor .e-splitter .CodeMirror {\\n    height: 405px;\\n}\\n.online-editor .heading {\\n  float: left;\\n  width: 100%;\\n  position: relative;\\n  box-sizing: border-box;\\n  padding: 5px;\\n  border-left:none;\\n  border-top:none;\\n}\\n.online-editor .title {\\n  color: #333333;\\n  letter-spacing: 1px;\\n  padding-left: 10px;\\n  text-align: center;\\n  font-size: 12px;\\n}\\n.online-editor .heading {\\n  margin: 0;\\n}\\n.online-editor .sb-content-section {\\n border-bottom: none;\\n border-right: none;\\n}\\n.online-editor .sample-head {\\n  height: 48px;\\n  background: #ffffff;\\n  box-shadow: 0 8px 11px -6px rgba(0, 0, 0, 0.12);\\n  z-index: 1001;\\n  opacity: 100;\\n  display: none;\\n}\\n.online-editor .head-content {\\n  padding: 15px 0 0 35px;\\n  font-weight: 499;\\n  line-height: 18px;\\n  font-size: 15px;\\n  color: #000000;\\n  font-family: sans-serif;\\n}\\n.online-editor table {\\n  width: 100%;\\n}\\n.online-editor table,\\n.online-editor th,\\n.online-editor td {\\n  border: 1px solid black;\\n  border-collapse: collapse;\\n}\\n.online-editor .e-splitter.e-splitter-horizontal, .online-editor .e-splitter.e-splitter-vertical {\\nborder-left: none;\\n}\\n.online-editor .e-richtexteditor .e-rte-toolbar.e-control[class*='e-toolbar'], .e-richtexteditor .e-rte-toolbar.e-toolbar.e-extended-toolbar.e-control[class*='e-toolbar'], .e-richtexteditor .e-rte-content, .e-richtexteditor .e-source-content{\\nborder: none;\\n}\\n.online-editor .control-section {\\n  padding-top: 0px;\\n  padding-bottom: 0px;\\n}\\n.online-editor .e-tab .e-tab-header:not(.e-vertical)::before {\\n  border-bottom: none;\\n  border-right: 1px solid #dee2e6;\\n}\\n.online-editor .e-richtexteditor.e-rte-tb-expand .e-rte-content, .e-richtexteditor.e-rte-tb-expand .e-source-content\\n.sb-content-section .e-lib .e-tab .e-control .e-template .e-keyboard .e-nested .sb-content-header {\\n  border-bottom: none;\\n}\\n.online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal {\\n  min-width: 400px !important;\\n}\\n.online-editor .CodeMirror-scroll\\n{\\n  border-top: 1px solid #e8e8e8;\\n}\\n.online-editor .heading .right .e-pane .e-pane-horizontal .e-scrollable\\n{\\n  padding:0px;\\n}\\n.online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal {\\n  overflow: unset;\\n}\\n.online-editor .CodeMirror-sizer{\\n   margin-right: 10px;\\n   border: none;\\n}\\n.fabric-dark .cm-s-default .cm-tag,\\n.bootstrap5-dark .cm-s-default .cm-tag,\\n.bootstrap-dark .cm-s-default .cm-tag,\\n.fluent-dark .cm-s-default .cm-tag,\\n.material-dark .cm-s-default .cm-tag,\\n.tailwind-dark .cm-s-default .cm-tag,\\n.highcontrast .cm-s-default .cm-tag {\\n    color: #00ff00;\\n}\\n.fabric-dark .title,\\n.bootstrap5-dark .title,\\n.bootstrap-dark .title,\\n.fluent-dark .title,\\n.material-dark .title,\\n.tailwind-dark .title,\\n.highcontrast .title{\\n    color: #fff;\\n}\\n.fabric-dark .CodeMirror,\\n.bootstrap5-dark .CodeMirror,\\n.fluent-dark .CodeMirror,\\n.bootstrap-dark .CodeMirror,\\n.material-dark .CodeMirror,\\n.tailwind-dark .CodeMirror {\\n    background-color: #303030;\\n    color: #fff;\\n}\\n.highcontrast .CodeMirror {\\n    background: black;\\n    color:#fff;\\n}\\n.fabric-dark .CodeMirror-gutters,\\n.bootstrap5-dark .CodeMirror-gutters,\\n.fluent-dark .CodeMirror-gutters,\\n.bootstrap-dark .CodeMirror-gutters,\\n.material-dark .CodeMirror-gutters,\\n.tailwind-dark .CodeMirror-gutters,\\n.highcontrast .CodeMirror-gutters {\\n    background-color: #303030;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-5PUUXASBVEOYMZE3VJH5TWUFW7NVZZOOI4ILOGFEWGMG5ERW4O4A/Samples/rich-text-editor/online-html-editor/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;EACjB,aAAa;CACd;AACD;IACI,cAAc;CACjB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;CACjB;AACD;EACE,UAAU;CACX;AACD;CACC,oBAAoB;CACpB,mBAAmB;CACnB;AACD;EACE,aAAa;EACb,oBAAoB;EACpB,gDAAgD;EAChD,cAAc;EACd,aAAa;EACb,cAAc;CACf;AACD;EACE,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,wBAAwB;CACzB;AACD;EACE,YAAY;CACb;AACD;;;EAGE,wBAAwB;EACxB,0BAA0B;CAC3B;AACD;AACA,kBAAkB;CACjB;AACD;AACA,aAAa;CACZ;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,oBAAoB;EACpB,gCAAgC;CACjC;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,4BAA4B;CAC7B;AACD;;EAEE,8BAA8B;CAC/B;AACD;;EAEE,YAAY;CACb;AACD;EACE,gBAAgB;CACjB;AACD;GACG,mBAAmB;GACnB,aAAa;CACf;AACD;;;;;;;IAOI,eAAe;CAClB;AACD;;;;;;;IAOI,YAAY;CACf;AACD;;;;;;IAMI,0BAA0B;IAC1B,YAAY;CACf;AACD;IACI,kBAAkB;IAClB,WAAW;CACd;AACD;;;;;;;IAOI,0BAA0B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.online-editor #defaultRTE {\\n  overflow: hidden;\\n  border: none;\\n}\\n.online-editor .e-splitter .CodeMirror {\\n    height: 405px;\\n}\\n.online-editor .heading {\\n  float: left;\\n  width: 100%;\\n  position: relative;\\n  box-sizing: border-box;\\n  padding: 5px;\\n  border-left:none;\\n  border-top:none;\\n}\\n.online-editor .title {\\n  color: #333333;\\n  letter-spacing: 1px;\\n  padding-left: 10px;\\n  text-align: center;\\n  font-size: 12px;\\n}\\n.online-editor .heading {\\n  margin: 0;\\n}\\n.online-editor .sb-content-section {\\n border-bottom: none;\\n border-right: none;\\n}\\n.online-editor .sample-head {\\n  height: 48px;\\n  background: #ffffff;\\n  box-shadow: 0 8px 11px -6px rgba(0, 0, 0, 0.12);\\n  z-index: 1001;\\n  opacity: 100;\\n  display: none;\\n}\\n.online-editor .head-content {\\n  padding: 15px 0 0 35px;\\n  font-weight: 499;\\n  line-height: 18px;\\n  font-size: 15px;\\n  color: #000000;\\n  font-family: sans-serif;\\n}\\n.online-editor table {\\n  width: 100%;\\n}\\n.online-editor table,\\n.online-editor th,\\n.online-editor td {\\n  border: 1px solid black;\\n  border-collapse: collapse;\\n}\\n.online-editor .e-splitter.e-splitter-horizontal, .online-editor .e-splitter.e-splitter-vertical {\\nborder-left: none;\\n}\\n.online-editor .e-richtexteditor .e-rte-toolbar.e-control[class*='e-toolbar'], .e-richtexteditor .e-rte-toolbar.e-toolbar.e-extended-toolbar.e-control[class*='e-toolbar'], .e-richtexteditor .e-rte-content, .e-richtexteditor .e-source-content{\\nborder: none;\\n}\\n.online-editor .control-section {\\n  padding-top: 0px;\\n  padding-bottom: 0px;\\n}\\n.online-editor .e-tab .e-tab-header:not(.e-vertical)::before {\\n  border-bottom: none;\\n  border-right: 1px solid #dee2e6;\\n}\\n.online-editor .e-richtexteditor.e-rte-tb-expand .e-rte-content, .e-richtexteditor.e-rte-tb-expand .e-source-content\\n.sb-content-section .e-lib .e-tab .e-control .e-template .e-keyboard .e-nested .sb-content-header {\\n  border-bottom: none;\\n}\\n.online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal {\\n  min-width: 400px !important;\\n}\\n.online-editor .CodeMirror-scroll\\n{\\n  border-top: 1px solid #e8e8e8;\\n}\\n.online-editor .heading .right .e-pane .e-pane-horizontal .e-scrollable\\n{\\n  padding:0px;\\n}\\n.online-editor .e-splitter.e-splitter-horizontal .e-pane.e-pane-horizontal {\\n  overflow: unset;\\n}\\n.online-editor .CodeMirror-sizer{\\n   margin-right: 10px;\\n   border: none;\\n}\\n.fabric-dark .cm-s-default .cm-tag,\\n.bootstrap5-dark .cm-s-default .cm-tag,\\n.bootstrap-dark .cm-s-default .cm-tag,\\n.fluent-dark .cm-s-default .cm-tag,\\n.material-dark .cm-s-default .cm-tag,\\n.tailwind-dark .cm-s-default .cm-tag,\\n.highcontrast .cm-s-default .cm-tag {\\n    color: #00ff00;\\n}\\n.fabric-dark .title,\\n.bootstrap5-dark .title,\\n.bootstrap-dark .title,\\n.fluent-dark .title,\\n.material-dark .title,\\n.tailwind-dark .title,\\n.highcontrast .title{\\n    color: #fff;\\n}\\n.fabric-dark .CodeMirror,\\n.bootstrap5-dark .CodeMirror,\\n.fluent-dark .CodeMirror,\\n.bootstrap-dark .CodeMirror,\\n.material-dark .CodeMirror,\\n.tailwind-dark .CodeMirror {\\n    background-color: #303030;\\n    color: #fff;\\n}\\n.highcontrast .CodeMirror {\\n    background: black;\\n    color:#fff;\\n}\\n.fabric-dark .CodeMirror-gutters,\\n.bootstrap5-dark .CodeMirror-gutters,\\n.fluent-dark .CodeMirror-gutters,\\n.bootstrap-dark .CodeMirror-gutters,\\n.material-dark .CodeMirror-gutters,\\n.tailwind-dark .CodeMirror-gutters,\\n.highcontrast .CodeMirror-gutters {\\n    background-color: #303030;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-layouts */ \"./node_modules/@syncfusion/ej2-vue-layouts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-richtexteditor */ \"./node_modules/@syncfusion/ej2-vue-richtexteditor/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_layouts__WEBPACK_IMPORTED_MODULE_1__[\"SplitterPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"RichTextEditorPlugin\"]);\n\nvar RteContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane1\", {\n  template: `<ejs-richtexteditor id=\"defaultRTE\" ref='rteObj' :toolbarSettings='toolbarSettings' :value=\"value\" height='100%' saveInterval='1'\n            :showCharCount='true' maxLength='5000' :created='onCreate' :change='onChange' :actionComplete='updateValue'>\n        </ejs-richtexteditor>`,\n    data() {\n        return {\n            textArea: null,\n            srcArea: null,\n            height: '100%',\n            showCharCount: true,\n            myCodeMirror: '',\n            maxLength: 5000,\n            saveInterval: 1,\n            enableFloating: false,\n            toolbarSettings: {\n                type: 'Expand',\n                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',\n                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',\n                'Formats', 'Alignments', 'NumberFormatList', 'BulletFormatList',\n                'Outdent', 'Indent',\n                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print', 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']\n            },\n            value: `<h3>Welcome to the HTML real-time live editor!</h3>\n                <p>Create and edit the valid HTML code simply! You don't worry about the HTML syntax to format your text content. The WYSIWYG editor (left side view) provided the toolbar to make format text and insert images, tables, and more options.</p>\n                <h4>Don't worry about syntax</h4>\n                <p>The content editing works bi-directional, you can write the HTML code on the right-side view (code view), and changes will reflect in the WYSIWYG editor.</p>`\n        };\n    },\n    methods: {\n        onCreate: function() {\n            setTimeout(() => {\n            this.updateValue();\n            this.textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();\n            this.srcArea = document.querySelector('.source-code');\n            if (this.srcArea) {\n                this.srcArea.addEventListener('keyup', this.updateHtmlValue);\n            }\n            }, 400);\n        },\n        onChange: function() {\n            this.updateValue();\n        },\n        updateHtmlValue: function() {\n            this.textArea.innerHTML = this.myCodeMirror.getValue();\n        },\n        updateValue: function(e) {\n            var mirrorView = document.querySelector('#src-view');\n            if (!mirrorView) {\n                mirrorView = document.createElement('div', { className: 'e-content' });\n                mirrorView.id = 'src-view';\n                var srcCodeElement = document.querySelector('.source-code');\n                if (srcCodeElement) {\n                    srcCodeElement.appendChild(mirrorView);\n                }\n                mirrorView.innerHTML = '';\n                mirrorView.style.display = 'block';\n            }\n            var srcViewEle = document.querySelector('#src-view');\n            var codeMirrorEle = document.querySelector('.CodeMirror-wrap');\n            if (codeMirrorEle) {\n                codeMirrorEle.remove();\n            }\n            if (this.$refs.rteObj.ej2Instances.value) {\n              this.renderCodeMirror(srcViewEle, this.$refs.rteObj.ej2Instances.value);\n            }\n        },\n        renderCodeMirror: function(mirrorView, content) {\n            this.myCodeMirror = CodeMirror(mirrorView, {\n                value: content,\n                lineNumbers: true,\n                mode: 'text/html',\n                lineWrapping: true,\n            });\n        }\n    },\n    provide:{\n        richtexteditor: [_syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Count\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"HtmlEditor\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"QuickToolbar\"], _syncfusion_ej2_vue_richtexteditor__WEBPACK_IMPORTED_MODULE_2__[\"Table\"]]\n    }\n});\n\nvar TextAreaContent = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"pane2\", {\n  template: `\n    <div class=\"heading right\">\n        <h6 class=\"title\"><b>HTML SOURCE</b></h6>\n        <div class=\"splitter-default-content source-code pane2\" contenteditable=\"true\"></div>\n    </div>`,\n    data() {\n        return {\n            data: {}\n        };\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            pane1Content: function () {\n                return { template : RteContent }\n            },\n            pane2Content: function () {\n                return { template : TextAreaContent }\n            }\n        }\n    },\n    methods: {\n        onRefreshUI: function() {\n            this.$children[0].$children[1].$refs.rteObj.refreshUI();\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/rich-text-editor/online-html-editor/App.vue?vue&type=template&id=31168054& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section online-editor\"},[_c('div',{staticClass:\"sample-container\"},[_c('div',{staticClass:\"rte-online-sample-view\"},[_c('ejs-splitter',{attrs:{\"id\":\"splitter\",\"width\":\"100%\",\"height\":\"450px\",\"created\":_vm.onRefreshUI,\"resizing\":_vm.onRefreshUI}},[_c('e-panes',[_c('e-pane',{attrs:{\"size\":\"50%\",\"resizable\":true,\"content\":_vm.pane1Content,\"min\":\"20%\"}}),_vm._v(\" \"),_c('e-pane',{attrs:{\"content\":_vm.pane2Content,\"min\":\"20%\"}})],1)],1)],1)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"The online HTML editor sample demonstrates how to create LIVE editing scenario with real-world applications\\n        using JavaScript Rich Text Editor. Most of the control features are enabled in this sample to edit the\\n        content quickly.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"You can edit the source code and content also parallelly. The source code is formatted using the code mirror\\n        library.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The online HTML editor is a demo that provides LIVE experience for both content and HTML editing with Rich Text Editor features in a real-world scenario.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/rich-text-editor/online-html-editor/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });