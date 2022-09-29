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
/******/ 		"image-editor/profile-picture/main": 0
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
/******/ 	deferredModules.push(["./Samples/image-editor/profile-picture/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/image-editor/profile-picture/App.vue":
/*!******************************************************!*\
  !*** ./Samples/image-editor/profile-picture/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_40c7c150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=40c7c150& */ \"./Samples/image-editor/profile-picture/App.vue?vue&type=template&id=40c7c150&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/image-editor/profile-picture/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_40c7c150_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=40c7c150&lang=css& */ \"./Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_40c7c150___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_40c7c150___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/image-editor/profile-picture/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?");

/***/ }),

/***/ "./Samples/image-editor/profile-picture/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/image-editor/profile-picture/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/image-editor/profile-picture/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?");

/***/ }),

/***/ "./Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40c7c150_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=40c7c150&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40c7c150_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40c7c150_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40c7c150_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_40c7c150_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?");

/***/ }),

/***/ "./Samples/image-editor/profile-picture/App.vue?vue&type=template&id=40c7c150&":
/*!*************************************************************************************!*\
  !*** ./Samples/image-editor/profile-picture/App.vue?vue&type=template&id=40c7c150& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_40c7c150___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=40c7c150& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/image-editor/profile-picture/App.vue?vue&type=template&id=40c7c150&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_40c7c150___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_40c7c150___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?");

/***/ }),

/***/ "./Samples/image-editor/profile-picture/main.js":
/*!******************************************************!*\
  !*** ./Samples/image-editor/profile-picture/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/image-editor/profile-picture/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.e-img-editor-canvas {\\n\\t\\tposition: relative;\\n}\\n.e-profile {\\n        width: 200px;\\n        height: 200px;\\n        position: absolute;\\n        left: 50%;\\n        -webkit-transform: translate(-50%, 30%);\\n        transform: translate(-50%, 30%);\\n        border-radius: 50%;\\n}\\n.e-custom-wrapper {\\n        position: relative;\\n}\\n.e-custom-edit {\\n        position: absolute;\\n        width: 36px;\\n        height: 36px;\\n        border-radius: 50%;\\n        background-color: blue;\\n        top: calc(100% - 54px);\\n        left: calc(100% - 47px);\\n}\\n.e-custom-icon::before {\\n        content: '\\\\E911';\\n        font-size: 28px;\\n        color: white;\\n        left: 5px;\\n        top: -2px;\\n        position: absolute;\\n}\\n.tailwind .e-custom-icon::before,\\n\\t.tailwind-dark .e-custom-icon::before {\\n    \\ttop: 6px;\\n}\\n#custom-edit:hover {\\n        cursor: pointer;\\n}\\ncanvas#img-canvas {\\n        border-radius: 50%;\\n        border: 4px solid darkgrey;\\n        max-width: 200px;\\n        max-height: 200px;\\n}\\n.e-img-custom-open {\\n        float: left;\\n\\t\\tmargin-left: 0 !important;\\n}\\n.e-img-custom-reset {\\n        float: left;\\n}\\n.e-bigger #profile-dialog .e-dlg-header {\\n\\t\\tfont-size: 18px !important;\\n}\\n.highcontrast .e-custom-img-btn,\\n    .fabric .e-custom-img-btn,\\n    .fabric-dark .e-custom-img-btn {\\n        padding: 2px 10px !important;\\n}\\n.e-bigger .e-custom-img-btn {\\n        font-size: 14px !important;\\n        padding: 6px 10px !important;\\n}\\n.e-bigger.highcontrast .e-custom-img-btn,\\n    .e-bigger.fabric .e-custom-img-btn,\\n    .e-bigger.fabric-dark .e-custom-img-btn,\\n    .e-bigger.material .e-custom-img-btn,\\n    .e-bigger.material-dark .e-custom-img-btn {\\n        padding: 3px 10px !important;\\n}\\n.e-bigger.bootstrap .e-custom-img-btn,\\n    .e-bigger.bootstrap-dark .e-custom-img-btn {\\n        padding: 1px 10px !important;\\n}\\n.e-img-editor-sample {\\n        min-height: 450px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-TPEWCYLUNW3ZZFDFWB4JBCWANUQDV22WJH6WJGBAQ27HEBHUFQPQ/Samples/image-editor/profile-picture/App.vue?vue&type=style&index=0&id=40c7c150&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,mBAAmB;CACpB;AACD;QACQ,aAAa;QACb,cAAc;QACd,mBAAmB;QACnB,UAAU;QACV,wCAAwC;QACxC,gCAAgC;QAChC,mBAAmB;CAC1B;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,mBAAmB;QACnB,YAAY;QACZ,aAAa;QACb,mBAAmB;QACnB,uBAAuB;QACvB,uBAAuB;QACvB,wBAAwB;CAC/B;AACD;QACQ,iBAAiB;QACjB,gBAAgB;QAChB,aAAa;QACb,UAAU;QACV,UAAU;QACV,mBAAmB;CAC1B;AACD;;KAEK,SAAS;CACb;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,mBAAmB;QACnB,2BAA2B;QAC3B,iBAAiB;QACjB,kBAAkB;CACzB;AACD;QACQ,YAAY;EAClB,0BAA0B;CAC3B;AACD;QACQ,YAAY;CACnB;AACD;EACE,2BAA2B;CAC5B;AACD;;;QAGQ,6BAA6B;CACpC;AACD;QACQ,2BAA2B;QAC3B,6BAA6B;CACpC;AACD;;;;;QAKQ,6BAA6B;CACpC;AACD;;QAEQ,6BAA6B;CACpC;AACD;QACQ,kBAAkB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=40c7c150&lang=css&\",\"sourcesContent\":[\"\\n.e-img-editor-canvas {\\n\\t\\tposition: relative;\\n}\\n.e-profile {\\n        width: 200px;\\n        height: 200px;\\n        position: absolute;\\n        left: 50%;\\n        -webkit-transform: translate(-50%, 30%);\\n        transform: translate(-50%, 30%);\\n        border-radius: 50%;\\n}\\n.e-custom-wrapper {\\n        position: relative;\\n}\\n.e-custom-edit {\\n        position: absolute;\\n        width: 36px;\\n        height: 36px;\\n        border-radius: 50%;\\n        background-color: blue;\\n        top: calc(100% - 54px);\\n        left: calc(100% - 47px);\\n}\\n.e-custom-icon::before {\\n        content: '\\\\e911';\\n        font-size: 28px;\\n        color: white;\\n        left: 5px;\\n        top: -2px;\\n        position: absolute;\\n}\\n.tailwind .e-custom-icon::before,\\n\\t.tailwind-dark .e-custom-icon::before {\\n    \\ttop: 6px;\\n}\\n#custom-edit:hover {\\n        cursor: pointer;\\n}\\ncanvas#img-canvas {\\n        border-radius: 50%;\\n        border: 4px solid darkgrey;\\n        max-width: 200px;\\n        max-height: 200px;\\n}\\n.e-img-custom-open {\\n        float: left;\\n\\t\\tmargin-left: 0 !important;\\n}\\n.e-img-custom-reset {\\n        float: left;\\n}\\n.e-bigger #profile-dialog .e-dlg-header {\\n\\t\\tfont-size: 18px !important;\\n}\\n.highcontrast .e-custom-img-btn,\\n    .fabric .e-custom-img-btn,\\n    .fabric-dark .e-custom-img-btn {\\n        padding: 2px 10px !important;\\n}\\n.e-bigger .e-custom-img-btn {\\n        font-size: 14px !important;\\n        padding: 6px 10px !important;\\n}\\n.e-bigger.highcontrast .e-custom-img-btn,\\n    .e-bigger.fabric .e-custom-img-btn,\\n    .e-bigger.fabric-dark .e-custom-img-btn,\\n    .e-bigger.material .e-custom-img-btn,\\n    .e-bigger.material-dark .e-custom-img-btn {\\n        padding: 3px 10px !important;\\n}\\n.e-bigger.bootstrap .e-custom-img-btn,\\n    .e-bigger.bootstrap-dark .e-custom-img-btn {\\n        padding: 1px 10px !important;\\n}\\n.e-img-editor-sample {\\n        min-height: 450px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/image-editor/profile-picture/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/image-editor/profile-picture/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_image_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-image-editor */ \"./node_modules/@syncfusion/ej2-vue-image-editor/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__[\"DialogPlugin\"]);\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_image_editor__WEBPACK_IMPORTED_MODULE_1__[\"ImageEditorPlugin\"]);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\r\n  data: function() {\r\n    return {\r\n        target: '.sb-desktop-wrapper',\r\n        header: 'Profile',\r\n        position: {X: 'center', Y: 100},\r\n        dlgButtons: [\r\n            { click: this.dlgOpenBtnClick, buttonModel: { content: 'Open', cssClass: 'e-custom-img-btn e-img-custom-open' } },\r\n            { click: this.dlgResetBtnClick, buttonModel: { content: 'Reset', cssClass: 'e-custom-img-btn e-img-custom-reset' } },\r\n            { click: this.dlgRotateBtnClick, buttonModel: { content: 'Rotate', cssClass: 'e-custom-img-btn e-img-custom-rotate' } },\r\n            { click: this.dlgDoneBtnClick, buttonModel: { content: 'Apply', isPrimary: true, cssClass: 'e-custom-img-btn e-img-custom-apply' } }\r\n        ],\r\n        animationSettings: { effect: 'None' },\r\n        imageEditorTemplate: function() {\r\n            return {\r\n                template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('ImageEditorComponent', {\r\n                    theme: 'Bootstrap5',\r\n                    template: '<ejs-imageeditor :theme=\"themeValue\" id=\"image-editor\" :created=\"created\" :fileOpened=\"fileOpened\" :toolbar=[]></ejs-imageeditor>',\r\n                    methods: {\r\n                        fileOpened: function() {\r\n                            let imgEditor = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('image-editor'), 'image-editor');\r\n                            imgEditor.select('circle');\r\n                        },\r\n                        created: function() {\r\n                            this.themeValue = window.location.href.split('#')[1].split('/')[1];\r\n                        }\r\n                    },\r\n                    computed: {\r\n                        themeValue: {\r\n                            get: function () {\r\n                                return this.theme;\r\n                            },\r\n                            set: function (theme) {\r\n                                this.theme = theme\r\n                            }\r\n                        }\r\n                    }\r\n                })\r\n            }\r\n        }\t\t\r\n    };\r\n  },\r\n   methods: {\r\n        imageLoad: function() {\r\n            let canvas = document.querySelector('#img-canvas');\r\n            let image = document.querySelector('#custom-img');\r\n            let ctx = canvas.getContext('2d');\r\n            canvas.width = image.width < image.height ? image.width : image.height; \r\n            canvas.height = canvas.width;\r\n            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);\r\n        },\r\n        dlgOpened: function() {\r\n            let canvas = document.querySelector('#img-canvas');\r\n            let imgEditor = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('image-editor'), 'image-editor');\r\n            imgEditor.open(canvas.toDataURL());\r\n        },\r\n        editClicked: function() {\r\n            this.$refs.dialogObj.show();\r\n        },\r\n        dlgOpenBtnClick: function() {\r\n            document.getElementById('img-upload').click();\r\n        },\r\n        dlgResetBtnClick: function() {\r\n            let imgEditor = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('image-editor'), 'image-editor');\r\n            imgEditor.reset();\r\n        },\r\n        dlgRotateBtnClick: function() {\r\n            let imgEditor = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('image-editor'), 'image-editor');\r\n            imgEditor.rotate(-90);\r\n        },\r\n        dlgDoneBtnClick: function() {\r\n            let imgEditor = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('image-editor'), 'image-editor');\r\n            imgEditor.crop();\r\n            let croppedData = imgEditor.getImageData();\r\n            let canvas = document.querySelector('#img-canvas');\r\n            let ctx = canvas.getContext('2d');\r\n            let parentDiv = document.querySelector('.e-profile');\r\n            let tempCanvas = parentDiv.appendChild(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"createElement\"])('canvas'));\r\n            let tempContext = tempCanvas.getContext('2d');\r\n            tempCanvas.width = croppedData.width; tempCanvas.height = croppedData.height;\r\n            tempContext.putImageData(croppedData, 0, 0);\r\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n            ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);\r\n            tempCanvas.remove();\r\n            parentDiv.style.borderRadius = '100%'; canvas.style.backgroundColor = '#fff';\r\n            this.$refs.dialogObj.hide();\r\n        },\r\n        fileChanged: function(args) {\r\n            const URL = window.URL; const url = URL.createObjectURL((args.target).files[0]);\r\n            const imageEditor = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(document.getElementById('image-editor'), 'image-editor');\r\n            imageEditor.open(url.toString());\r\n            document.getElementById('img-upload').value = null;\r\n        }\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/image-editor/profile-picture/App.vue?vue&type=template&id=40c7c150&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/image-editor/profile-picture/App.vue?vue&type=template&id=40c7c150& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section e-img-editor-canvas\"},[_c('div',{staticClass:\"e-profile\"},[_c('div',{staticClass:\"e-custom-wrapper\"},[_c('canvas',{attrs:{\"id\":\"img-canvas\"}}),_vm._v(\" \"),_c('img',{staticStyle:{\"display\":\"none\"},attrs:{\"alt\":\"img\",\"id\":\"custom-img\",\"crossorigin\":\"anonymous\",\"src\":__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './../../source/image-editor/images/profile.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))},on:{\"load\":_vm.imageLoad}}),_vm._v(\" \"),_c('input',{staticStyle:{\"display\":\"none\"},attrs:{\"type\":\"file\",\"id\":\"img-upload\"},on:{\"change\":_vm.fileChanged}}),_vm._v(\" \"),_c('span',{staticClass:\"e-custom-edit\",attrs:{\"id\":\"custom-edit\"},on:{\"click\":_vm.editClicked}},[_c('span',{staticClass:\"e-custom-icon sb-icons\"})])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-img-editor-profile\",attrs:{\"id\":\"profile-dialog\"}},[_c('ejs-dialog',{ref:\"dialogObj\",attrs:{\"id\":\"componentsDialog\",\"position\":_vm.position,\"closeOnEscape\":true,\"open\":_vm.dlgOpened,\"buttons\":_vm.dlgButtons,\"header\":_vm.header,\"animationSettings\":_vm.animationSettings,\"content\":_vm.imageEditorTemplate,\"showCloseIcon\":\"true\",\"target\":_vm.target,\"width\":\"340px\",\"height\":\"400px\",\"visible\":false}})],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"The Image Editor component provides built-in support to rotate an image using the rotate method and support to crop an image using the select and crop methods.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"In this demo, Image Editor is rendered within a dialog and opens an image by passing its URL path to the open method of the Image Editor control.\")]),_vm._v(\" \"),_c('p',[_vm._v(\" The following operations are supported in the Image Editor. :  \")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('b',[_vm._v(\"Selection\")]),_vm._v(\" : Multiple selection options are available. The selection region can be a square or circle, customized to various aspect ratios, and customized by dragging and resizing.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Crop\")]),_vm._v(\" : The image can be cropped based on the selection.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Rotate\")]),_vm._v(\" : The image can be rotated both clockwise and anticlockwise by 90 degrees.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            More information about Image Editor can be found in this \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/image-editor/getting-started/\"}},[_vm._v(\"documentation\")]),_vm._v(\" section.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/image-editor/profile-picture/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });