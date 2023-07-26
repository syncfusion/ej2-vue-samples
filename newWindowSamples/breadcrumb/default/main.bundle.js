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
/******/ 		"breadcrumb/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/breadcrumb/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/breadcrumb/default/App.vue":
/*!********************************************!*\
  !*** ./Samples/breadcrumb/default/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_24e6349b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=24e6349b& */ \"./Samples/breadcrumb/default/App.vue?vue&type=template&id=24e6349b&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/breadcrumb/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_24e6349b_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=24e6349b&lang=css& */ \"./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_24e6349b___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_24e6349b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/breadcrumb/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/default/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/breadcrumb/default/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_24e6349b_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=24e6349b&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_24e6349b_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_24e6349b_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_24e6349b_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_24e6349b_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/default/App.vue?vue&type=template&id=24e6349b&":
/*!***************************************************************************!*\
  !*** ./Samples/breadcrumb/default/App.vue?vue&type=template&id=24e6349b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_24e6349b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=24e6349b& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=template&id=24e6349b&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_24e6349b___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_24e6349b___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?");

/***/ }),

/***/ "./Samples/breadcrumb/default/main.js":
/*!********************************************!*\
  !*** ./Samples/breadcrumb/default/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/breadcrumb/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.breadcrumb-control-wrapper {\\n    width: 90% !important;\\n    margin: 0 auto;\\n    min-width: 85px;\\n}\\n.breadcrumb-control-wrapper div.row {\\n    padding: 15px 0px;\\n}\\n.reset-btn {\\n    float: right;\\n    margin: 5px 2px 5px 0;\\n}\\n@media only screen and (max-width: 480px) {\\n.breadcrumb-control-wrapper {\\n        width: 92%;\\n}\\n.col-xs-12,\\n    .col-xs-4,\\n    .col-xs-12 {\\n        padding: 10px 5px;\\n        width: 100%;\\n}\\n.breadcrumb-control-wrapper div.row {\\n        padding: 0px;\\n}\\n}\\n.tailwind .e-breadcrumb,\\n.tailwind-dark .e-breadcrumb {\\n    margin-left: -12px;\\n}\\n.material .e-breadcrumb,\\n.material-dark .e-breadcrumb {\\n    margin-left: -8px;\\n}\\n.fabric .e-breadcrumb,\\n.fabric-dark .e-breadcrumb,\\n.highcontrast .e-breadcrumb {\\n    margin-left: -4px;\\n}\\n@font-face {\\n    font-family: 'e-breadcrumb-overflow-icons';\\n    src:\\n    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.e-bc-overflow .e-bicons {\\n        font-family: 'e-breadcrumb-overflow-icons' !important;\\n        font-size: 14px;\\n}\\n.e-bc-overflow .e-bicons.e-arrow {\\n        margin-top: -2px;\\n}\\n.bootstrap .e-bc-overflow .e-bicons.e-arrow,\\n    .bootstrap4 .e-bc-overflow .e-bicons.e-arrow,\\n    .bootstrap-dark .e-bc-overflow .e-bicons.e-arrow {\\n        margin-top: -3px;\\n}\\n.tailwind .e-bc-overflow .e-bicons.e-arrow,\\n    .tailwind-dark .e-bc-overflow .e-bicons.e-arrow {\\n        margin-top: -4px;\\n}\\n.e-bc-overflow .e-bicons.e-arrow:before {\\n        content: \\\"\\\\E706\\\";\\n        font-weight: 800;\\n        font-size: 9px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/tions-vue-samples_release_22.1.1/Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,sBAAsB;IACtB,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,sBAAsB;CACzB;AACD;AACA;QACQ,WAAW;CAClB;AACD;;;QAGQ,kBAAkB;QAClB,YAAY;CACnB;AACD;QACQ,aAAa;CACpB;CACA;AACD;;IAEI,mBAAmB;CACtB;AACD;;IAEI,kBAAkB;CACrB;AACD;;;IAGI,kBAAkB;CACrB;AACD;IACI,2CAA2C;IAC3C;0uFACsuF;IACtuF,oBAAoB;IACpB,mBAAmB;CACtB;AACD;QACQ,sDAAsD;QACtD,gBAAgB;CACvB;AACD;QACQ,iBAAiB;CACxB;AACD;;;QAGQ,iBAAiB;CACxB;AACD;;QAEQ,iBAAiB;CACxB;AACD;QACQ,iBAAiB;QACjB,iBAAiB;QACjB,eAAe;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=24e6349b&lang=css&\",\"sourcesContent\":[\"\\n.breadcrumb-control-wrapper {\\n    width: 90% !important;\\n    margin: 0 auto;\\n    min-width: 85px;\\n}\\n.breadcrumb-control-wrapper div.row {\\n    padding: 15px 0px;\\n}\\n.reset-btn {\\n    float: right;\\n    margin: 5px 2px 5px 0;\\n}\\n@media only screen and (max-width: 480px) {\\n.breadcrumb-control-wrapper {\\n        width: 92%;\\n}\\n.col-xs-12,\\n    .col-xs-4,\\n    .col-xs-12 {\\n        padding: 10px 5px;\\n        width: 100%;\\n}\\n.breadcrumb-control-wrapper div.row {\\n        padding: 0px;\\n}\\n}\\n.tailwind .e-breadcrumb,\\n.tailwind-dark .e-breadcrumb {\\n    margin-left: -12px;\\n}\\n.material .e-breadcrumb,\\n.material-dark .e-breadcrumb {\\n    margin-left: -8px;\\n}\\n.fabric .e-breadcrumb,\\n.fabric-dark .e-breadcrumb,\\n.highcontrast .e-breadcrumb {\\n    margin-left: -4px;\\n}\\n@font-face {\\n    font-family: 'e-breadcrumb-overflow-icons';\\n    src:\\n    url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.e-bc-overflow .e-bicons {\\n        font-family: 'e-breadcrumb-overflow-icons' !important;\\n        font-size: 14px;\\n}\\n.e-bc-overflow .e-bicons.e-arrow {\\n        margin-top: -2px;\\n}\\n.bootstrap .e-bc-overflow .e-bicons.e-arrow,\\n    .bootstrap4 .e-bc-overflow .e-bicons.e-arrow,\\n    .bootstrap-dark .e-bc-overflow .e-bicons.e-arrow {\\n        margin-top: -3px;\\n}\\n.tailwind .e-bc-overflow .e-bicons.e-arrow,\\n    .tailwind-dark .e-bc-overflow .e-bicons.e-arrow {\\n        margin-top: -4px;\\n}\\n.e-bc-overflow .e-bicons.e-arrow:before {\\n        content: \\\"\\\\e706\\\";\\n        font-weight: 800;\\n        font-size: 9px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/default/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"BreadcrumbPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        separatorTemplate: '<span class=\"e-bicons e-arrow\"></span>',\n    };\n  },\n  methods: {\n    btnClick: function() {\n      var breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName(\"e-breadcrumb\");\n      for (var i = 0; i < breadcrumbs.length; i++) {\n            breadcrumb = breadcrumbs[i];\n            breadcrumbInst = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"getComponent\"])(breadcrumb, 'breadcrumb');\n            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;\n        }\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=template&id=24e6349b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/default/App.vue?vue&type=template&id=24e6349b& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"content-wrapper breadcrumb-control-wrapper\" }, [\n        _c(\"div\", { staticClass: \"row material2\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\" },\n            [\n              _c(\"h5\", { staticStyle: { display: \"inline-block\" } }, [\n                _vm._v(\"Simple Breadcrumb\"),\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"ejs-button\",\n                {\n                  staticClass: \"reset-btn e-small\",\n                  attrs: { id: \"reset\" },\n                  nativeOn: {\n                    click: function ($event) {\n                      return _vm.btnClick.apply(null, arguments)\n                    },\n                  },\n                },\n                [_vm._v(\" Reset State\")]\n              ),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row material2\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\" },\n            [\n              _c(\n                \"ejs-breadcrumb\",\n                { attrs: { enableNavigation: false } },\n                [\n                  _c(\n                    \"e-breadcrumb-items\",\n                    [\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          iconCss: \"e-icons e-home\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"Components\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/datagrid/overview\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"Navigations\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/menu/default\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"Breadcrumb\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/breadcrumb/default\",\n                        },\n                      }),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row material2\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass:\n                \"col-xs-12 col-sm-12 col-lg-12 col-md-12  e-bc-overflow\",\n            },\n            [\n              _c(\n                \"ejs-breadcrumb\",\n                {\n                  attrs: {\n                    maxItems: 3,\n                    enableNavigation: false,\n                    separatorTemplate: _vm.separatorTemplate,\n                  },\n                },\n                [\n                  _c(\n                    \"e-breadcrumb-items\",\n                    [\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: { text: \"Home\", url: \"./\" },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: { text: \"Breadcrumb\", url: \"./breadcrumb\" },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: { text: \"Default\", url: \"./breadcrumb/default\" },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: { text: \"Icons\", url: \"./breadcrumb/icons\" },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"Navigations\",\n                          url: \"./breadcrumb/navigations\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"Overflow\",\n                          url: \"./breadcrumb/overflow\",\n                        },\n                      }),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _vm._m(1),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"row material2\" }, [\n          _c(\n            \"div\",\n            { staticClass: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\" },\n            [\n              _c(\n                \"ejs-breadcrumb\",\n                {\n                  attrs: {\n                    enableNavigation: false,\n                    enableActiveItemNavigation: \"false\",\n                  },\n                },\n                [\n                  _c(\n                    \"e-breadcrumb-items\",\n                    [\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          iconCss: \"e-icons e-home\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"All Components\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/datagrid/overview\",\n                        },\n                      }),\n                      _vm._v(\" \"),\n                      _c(\"e-breadcrumb-item\", {\n                        attrs: {\n                          text: \"Breadcrumb\",\n                          url: \"https://ej2.syncfusion.com/vue/demos/breadcrumb/default\",\n                        },\n                      }),\n                    ],\n                    1\n                  ),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row material2\" }, [\n      _c(\"div\", { staticClass: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\" }, [\n        _c(\"h5\", [_vm._v(\"Breadcrumb with Overflow\")]),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row material2\" }, [\n      _c(\"div\", { staticClass: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\" }, [\n        _c(\"h5\", [_vm._v(\"Active Last Breadcrumb\")]),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the basic rendering, overflow feature and navigable active item of the \"\n        ),\n        _c(\"b\", [_vm._v(\"Breadcrumb\")]),\n        _vm._v(\" component with icon support. Click the \"),\n        _c(\"b\", [_vm._v(\"Reset State\")]),\n        _vm._v(\" button to refresh Breadcrumb component states.\"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"The \"),\n        _c(\"code\", [_vm._v(\"Breadcrumb\")]),\n        _vm._v(\n          \" component is used as a navigational aid to identify the current page location within the navigational hierarchy structure of websites. It has list of items that can be populated using the \"\n        ),\n        _c(\"code\", [_vm._v(\"e-breadcrumb-item\")]),\n        _vm._v(\" tag.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Simple Breadcrumb\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, the Breadcrumb is populated with text, icon, and URL.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Breadcrumb with Overflow\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"In the Breadcrumb component, \"),\n        _c(\"code\", [_vm._v(\"maxItems\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"overflowMode\")]),\n        _vm._v(\n          \" properties were used to limit the number of breadcrumb items to be displayed.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"In this sample, the \"),\n        _c(\"code\", [_vm._v(\"maxItems\")]),\n        _vm._v(\" is set as \"),\n        _c(\"code\", [_vm._v(\"3\")]),\n        _vm._v(\" with \"),\n        _c(\"code\", [_vm._v(\"overflowMode\")]),\n        _vm._v(\" as \"),\n        _c(\"code\", [_vm._v(\"Menu\")]),\n        _vm._v(\". To prevent breadcrumb item navigation we have set \"),\n        _c(\"code\", [_vm._v(\"false\")]),\n        _vm._v(\" in \"),\n        _c(\"code\", [_vm._v(\"enableNavigation\")]),\n        _vm._v(\" property of Breadcrumb component.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"b\", [_vm._v(\"Active Last Breadcrumb\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, navigation for the last item is enabled by using \"\n        ),\n        _c(\"code\", [_vm._v(\"enableActiveItemNavigation\")]),\n        _vm._v(\" property.\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"More information about Breadcrumb component can be found in this \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/breadcrumb/getting-started/\",\n            },\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=24e6349b&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/breadcrumb/default/App.vue?vue&type=style&index=0&id=24e6349b&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"21341309\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/breadcrumb/default/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });