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
/******/ 		"grid/virtual-scrolling/main": 0
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
/******/ 	deferredModules.push(["./Samples/grid/virtual-scrolling/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/grid/virtual-scrolling/App.vue":
/*!************************************************!*\
  !*** ./Samples/grid/virtual-scrolling/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0a1f26e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0a1f26e0&scoped=true& */ \"./Samples/grid/virtual-scrolling/App.vue?vue&type=template&id=0a1f26e0&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/grid/virtual-scrolling/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0a1f26e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css& */ \"./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0a1f26e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0a1f26e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0a1f26e0\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/grid/virtual-scrolling/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/grid/virtual-scrolling/App.vue?vue&type=script&lang=ts&":
/*!*************************************************************************!*\
  !*** ./Samples/grid/virtual-scrolling/App.vue?vue&type=script&lang=ts& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a1f26e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a1f26e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a1f26e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a1f26e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0a1f26e0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/grid/virtual-scrolling/App.vue?vue&type=template&id=0a1f26e0&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/grid/virtual-scrolling/App.vue?vue&type=template&id=0a1f26e0&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0a1f26e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0a1f26e0&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=template&id=0a1f26e0&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0a1f26e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0a1f26e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/grid/virtual-scrolling/main.js":
/*!************************************************!*\
  !*** ./Samples/grid/virtual-scrolling/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/grid/virtual-scrolling/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\nexports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--4-1!../../../styles/Grid/virtual-scrolling.css */ \"./node_modules/css-loader/index.js?!./styles/Grid/virtual-scrolling.css\"), \"\");\n\n// module\nexports.push([module.i, \"\\n\", \"\", {\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"file\":\"App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&\",\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./styles/Grid/virtual-scrolling.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./styles/Grid/virtual-scrolling.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \".imagepop {\\n    position: absolute;\\n    background-repeat: no-repeat;\\n    background-image: url(\" + escape(__webpack_require__(/*! ../../src/grid/images/spinner.gif */ \"./src/grid/images/spinner.gif\")) + \");\\n    background-position: center;\\n    width: 16px;\\n    height: 28px;\\n  }\\n  \\n  .e-bigger .imagepop {\\n    height: 36px;\\n  }\\n  \\n  #popup {\\n    position: absolute;\\n    background-color: transparent;\\n    display: none;\\n    z-index: 100;\\n  }\\n  .div-button {\\n    margin: 5px 0;\\n  }\\n  #performanceTime {\\n    float: right;\\n    margin-top: 3px;\\n  }\\n  \\n  .e-bigger #performanceTime {\\n    margin-top: 8px;\\n  }\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/_grid-vue-samples_release_22.1.1/styles/Grid/virtual-scrolling.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,mBAAmB;IACnB,6BAA6B;IAC7B,gDAA2D;IAC3D,4BAA4B;IAC5B,YAAY;IACZ,aAAa;GACd;;EAED;IACE,aAAa;GACd;;EAED;IACE,mBAAmB;IACnB,8BAA8B;IAC9B,cAAc;IACd,aAAa;GACd;EACD;IACE,cAAc;GACf;EACD;IACE,aAAa;IACb,gBAAgB;GACjB;;EAED;IACE,gBAAgB;GACjB\",\"file\":\"virtual-scrolling.css\",\"sourcesContent\":[\".imagepop {\\n    position: absolute;\\n    background-repeat: no-repeat;\\n    background-image: url(\\\"../../src/grid/images/spinner.gif\\\");\\n    background-position: center;\\n    width: 16px;\\n    height: 28px;\\n  }\\n  \\n  .e-bigger .imagepop {\\n    height: 36px;\\n  }\\n  \\n  #popup {\\n    position: absolute;\\n    background-color: transparent;\\n    display: none;\\n    z-index: 100;\\n  }\\n  .div-button {\\n    margin: 5px 0;\\n  }\\n  #performanceTime {\\n    float: right;\\n    margin-top: 3px;\\n  }\\n  \\n  .e-bigger #performanceTime {\\n    margin-top: 8px;\\n  }\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./styles/Grid/virtual-scrolling.css?./node_modules/css-loader??ref--4-1");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=script&lang=ts&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/virtual-scrolling/App.vue?vue&type=script&lang=ts& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"GridPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nfunction generateData() {\n    var datas = [];\n    var names = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',\n        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',\n        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',\n        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',\n        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',\n        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',\n        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];\n    var sport = ['Cricket', 'Football', 'Tennis', 'Golf', 'Chess', 'Dodgeball', 'Racket', 'Archery', 'Climbing', 'Hunting', 'Carrom', 'Tag', 'Novuss',\n        'Subbuteo', 'Baseball', 'Madden NFL', 'Shuffleboard', 'Badminton', 'Hockey', 'Volleyball', 'Table Tennis', 'Golf', 'Cycling', 'Running', 'Walking', 'Wireball',\n        'Town ball', 'Tee ball', 'Stool ball', 'Stick ball'];\n    var country = ['India', 'Australia', 'Ballesteros', 'Belgium', 'Brazil', 'England', 'Ethiopia', 'Finland', 'France', 'Germany', 'Britain',\n        'Argentina', 'Jamaica', 'Kenya', 'Morocco', 'Ireland', 'Norway', 'Philippines', 'Portugal', 'Romania', 'Russia', 'Scotland', 'Scottish', 'Serbia', 'Spain',\n        'Sweden', 'Switzerland', 'Netherlands', 'UK', 'Ukraine', 'US', 'Wales', 'West Indies', 'China', 'Hong Kong', 'Italy', 'Philippines', 'Turkey', 'Botswana',\n        'Sri Lanka', 'Algeria', 'Bangladesh', 'Egypt', 'Malaysia'];\n    for (var i = 0; i < 100000; i++) {\n        datas.push({\n            SNo: i + 1,\n            FIELD1: names[Math.floor(Math.random() * names.length)],\n            FIELD2: 1967 + i % 10,\n            FIELD3: sport[Math.floor(Math.random() * sport.length)],\n            FIELD4: country[Math.floor(Math.random() * country.length)],\n            FIELD5: Math.floor(Math.random() * 2000),\n            FIELD6: Math.floor(Math.random() * 1000),\n            FIELD7: Math.floor(Math.random() * 100),\n            FIELD8: Math.floor(Math.random() * 10),\n            FIELD9: Math.floor(Math.random() * 10),\n            FIELD10: Math.floor(Math.random() * 100),\n            FIELD11: Math.floor(Math.random() * 100),\n            FIELD12: Math.floor(Math.random() * 1000),\n            FIELD13: Math.floor(Math.random() * 10),\n            FIELD14: Math.floor(Math.random() * 10),\n            FIELD15: Math.floor(Math.random() * 1000),\n            FIELD16: Math.floor(Math.random() * 200),\n            FIELD17: Math.floor(Math.random() * 300),\n            FIELD18: Math.floor(Math.random() * 400),\n            FIELD19: Math.floor(Math.random() * 500),\n            FIELD20: Math.floor(Math.random() * 700),\n            FIELD21: Math.floor(Math.random() * 800),\n            FIELD22: Math.floor(Math.random() * 1000),\n            FIELD23: Math.floor(Math.random() * 2000),\n            FIELD24: Math.floor(Math.random() * 150),\n            FIELD25: Math.floor(Math.random() * 1000),\n            FIELD26: Math.floor(Math.random() * 100),\n            FIELD27: Math.floor(Math.random() * 400),\n            FIELD28: Math.floor(Math.random() * 600),\n            FIELD29: Math.floor(Math.random() * 500),\n            FIELD30: Math.floor(Math.random() * 300)\n        });\n    }\n    return datas;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            flag: true, date1: 0, date2: 0, virtualData: [], timeTaken: 'Time Taken: 0 ms',\n            display: { 'display': 'none' },\n            editSettings: { allowEditing: true, allowDeleting: true },\n            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],\n            validationSno: { required: true, digits: true },\n            validationRules: { required: true }\n        };\n    },\n    methods: {\n        show: function () {\n            this.display = { 'display': 'inline-block' };\n        },\n        hide: function () {\n            if (this.flag && this.date1) {\n                this.date2 = new Date().getTime();\n                this.timeTaken = \"Time Taken: \" + (this.date2 - this.date1) + \"ms\";\n                this.$refs.grid.ej2Instances.editSettings.allowAdding = true;\n                this.flag = false;\n            }\n            this.display = { 'display': 'none' };\n        },\n        onClick: function (args) {\n            if (!this.virtualData.length) {\n                this.show();\n                this.virtualData = generateData();\n                this.date1 = new Date().getTime();\n                this.flag = true;\n            }\n        }\n    },\n    provide: {\n        grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"VirtualScroll\"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"], _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_1__[\"Edit\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=template&id=0a1f26e0&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/virtual-scrolling/App.vue?vue&type=template&id=0a1f26e0&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n    _vm._m(0),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      [\n        _c(\n          \"div\",\n          { staticClass: \"div-button\" },\n          [\n            _c(\n              \"ejs-button\",\n              {\n                attrs: { cssClass: \"e-info\" },\n                nativeOn: {\n                  click: function ($event) {\n                    return _vm.onClick.apply(null, arguments)\n                  },\n                },\n              },\n              [_vm._v(\"Load 100K Data\")]\n            ),\n            _vm._v(\" \"),\n            _c(\"span\", { style: _vm.display, attrs: { id: \"popup\" } }, [\n              _c(\"span\", { staticClass: \"imagepop\", attrs: { id: \"gif\" } }),\n            ]),\n            _vm._v(\" \"),\n            _c(\"span\", { attrs: { id: \"performanceTime\" } }, [\n              _vm._v(_vm._s(_vm.timeTaken)),\n            ]),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"ejs-grid\",\n          {\n            ref: \"grid\",\n            attrs: {\n              dataSource: _vm.virtualData,\n              enableVirtualization: true,\n              enableColumnVirtualization: true,\n              height: \"400\",\n              dataBound: _vm.hide,\n              editSettings: _vm.editSettings,\n              toolbar: _vm.toolbar,\n            },\n          },\n          [\n            _c(\n              \"e-columns\",\n              [\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"SNo\",\n                    headerText: \"S.No\",\n                    width: \"140\",\n                    isPrimaryKey: true,\n                    validationRules: _vm.validationSno,\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD1\",\n                    headerText: \"Player Name\",\n                    width: \"140\",\n                    validationRules: _vm.validationRules,\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD2\", headerText: \"Year\", width: \"100\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD3\",\n                    headerText: \"Sports\",\n                    width: \"160\",\n                    validationRules: _vm.validationRules,\n                    editType: \"dropdownedit\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD4\",\n                    headerText: \"Country\",\n                    width: \"160\",\n                    editType: \"dropdownedit\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD5\", headerText: \"LGID\", width: \"120\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD6\", headerText: \"GP\", width: \"120\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD7\", headerText: \"GS\", width: \"120\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD8\",\n                    headerText: \"Minutes\",\n                    width: \"120\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD9\",\n                    headerText: \"Points\",\n                    width: \"130\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD10\", headerText: \"OREB\", width: \"130\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD11\", headerText: \"DREB\", width: \"130\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD12\", headerText: \"REB\", width: \"130\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD13\",\n                    headerText: \"Assists\",\n                    width: \"130\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD14\",\n                    headerText: \"Steals\",\n                    width: \"120\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD15\",\n                    headerText: \"Blocks\",\n                    width: \"120\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD16\",\n                    headerText: \"Turnovers\",\n                    width: \"140\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD17\", headerText: \"PF\", width: \"100\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD18\", headerText: \"FGA\", width: \"150\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD19\", headerText: \"FGM\", width: \"120\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD20\", headerText: \"FTA\", width: \"150\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: { field: \"FIELD21\", headerText: \"FTM\", width: \"120\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD22\",\n                    headerText: \"Three Attempted\",\n                    width: \"170\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD23\",\n                    headerText: \"Three Made\",\n                    width: \"140\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD24\",\n                    headerText: \"Post GP\",\n                    width: \"120\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD25\",\n                    headerText: \"Post GS\",\n                    width: \"120\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD26\",\n                    headerText: \"Post Minutes\",\n                    width: \"150\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD27\",\n                    headerText: \"Post Points\",\n                    width: \"120\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD28\",\n                    headerText: \"Post OREB\",\n                    width: \"150\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD29\",\n                    headerText: \"Post DREB\",\n                    width: \"150\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-column\", {\n                  attrs: {\n                    field: \"FIELD30\",\n                    headerText: \"Post REB\",\n                    width: \"130\",\n                    editType: \"numericedit\",\n                    validationRules: _vm.validationRules,\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the Grid component with the virtual scrolling feature. Click the button at the top of the Grid\\n        to load data source and scroll the Grid content vertically and horizontally to load rows and columns respectively.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The Grid UI virtualization allows you to render only rows and columns visible within the view-port without buffering the entire datasource.\\n        Grid supports row and column virtualization. To enable row virtualization, set \"\n        ),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href: \"http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#enablevirtualization\",\n              },\n            },\n            [_vm._v(\"\\n        enableVirtualization \")]\n          ),\n        ]),\n        _vm._v(\" property as true. For column virtualization, set \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href: \"http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#enablecolumnvirtualization\",\n              },\n            },\n            [_vm._v(\"\\n        enableColumnVirtualization\")]\n          ),\n        ]),\n        _vm._v(\" property as true.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n        Note: The \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href: \"http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#height\",\n              },\n            },\n            [_vm._v(\"\\n        height\")]\n          ),\n        ]),\n        _vm._v(\" property must be defined when enabling \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href: \"http://ej2.syncfusion.com/vue/documentation/grid/api-grid.html#enablevirtualization\",\n              },\n            },\n            [_vm._v(\"\\n        enableVirtualization \")]\n          ),\n        ]),\n        _vm._v(\".\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this demo, Grid enabled row and column virtualization. Click the Load 100K Data button to bind 100000 rows and 30 columns. You can also perform the Edit action in this sample.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module:\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Grid component features are segregated into individual feature-wise modules. To use Virtual scrolling feature, we need\\n    to inject \"\n        ),\n        _c(\"code\", [_vm._v(\"VirtualScroll\")]),\n        _vm._v(\" into the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/grid/virtual-scrolling/App.vue?vue&type=style&index=0&id=0a1f26e0&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"1afdcab1\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/grid/virtual-scrolling/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/grid/images/spinner.gif":
/*!*************************************!*\
  !*** ./src/grid/images/spinner.gif ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/grid/images/spinner.gif\";\n\n//# sourceURL=webpack:///./src/grid/images/spinner.gif?");

/***/ })

/******/ });