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
/******/ 		"pivot-table/virtual-scrolling/main": 0
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
/******/ 	deferredModules.push(["./Samples/pivot-table/virtual-scrolling/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pivot-table/virtual-scrolling/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/pivot-table/virtual-scrolling/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6ebe3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6ebe3d55&scoped=true& */ \"./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=template&id=6ebe3d55&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6ebe3d55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css& */ \"./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6ebe3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6ebe3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6ebe3d55\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pivot-table/virtual-scrolling/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=script&lang=ts&":
/*!********************************************************************************!*\
  !*** ./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ebe3d55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ebe3d55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ebe3d55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ebe3d55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6ebe3d55_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=template&id=6ebe3d55&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=template&id=6ebe3d55&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ebe3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6ebe3d55&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=template&id=6ebe3d55&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ebe3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6ebe3d55_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/virtual-scrolling/main.js":
/*!*******************************************************!*\
  !*** ./Samples/pivot-table/virtual-scrolling/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pivot-table/virtual-scrolling/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n[data-v-6ebe3d55] #pivotview {\\n  width: 100%;\\n}\\n[data-v-6ebe3d55] .image {\\n  position: absolute;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  width: 16px;\\n  height: 28px;\\n}\\n[data-v-6ebe3d55] .e-bigger .image {\\n  height: 36px;\\n}\\n[data-v-6ebe3d55] #popup {\\n  position: absolute;\\n  background-color: transparent;\\n  display: none;\\n  z-index: 100;\\n}\\n[data-v-6ebe3d55] .div-button {\\n  margin: 5px 5px 5px 0;\\n}\\n[data-v-6ebe3d55] #performanceTime {\\n  float: right;\\n  margin-top: 3px;\\n  margin-right: 27px;\\n}\\n[data-v-6ebe3d55] .e-bigger #performanceTime{\\n  margin-top: 8px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ivotview-vue-samples_master-6V72R6VRIDTSNQEJWPQOAXQYQC3USVZHJDYDVKW5ARN5YMXMJLDA/Samples/pivot-table/virtual-scrolling/App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,6BAA6B;EAC7B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,aAAa;CACd;AACD;EACE,sBAAsB;CACvB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=6ebe3d55&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n[data-v-6ebe3d55] #pivotview {\\n  width: 100%;\\n}\\n[data-v-6ebe3d55] .image {\\n  position: absolute;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  width: 16px;\\n  height: 28px;\\n}\\n[data-v-6ebe3d55] .e-bigger .image {\\n  height: 36px;\\n}\\n[data-v-6ebe3d55] #popup {\\n  position: absolute;\\n  background-color: transparent;\\n  display: none;\\n  z-index: 100;\\n}\\n[data-v-6ebe3d55] .div-button {\\n  margin: 5px 5px 5px 0;\\n}\\n[data-v-6ebe3d55] #performanceTime {\\n  float: right;\\n  margin-top: 3px;\\n  margin-right: 27px;\\n}\\n[data-v-6ebe3d55] .e-bigger #performanceTime{\\n  margin-top: 8px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pivotview */ \"./node_modules/@syncfusion/ej2-vue-pivotview/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PivotViewPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\n/* tslint:disable */\nvar customername = [\n    \"TOM\",\n    \"Hawk\",\n    \"Jon\",\n    \"Chandler\",\n    \"Monica\",\n    \"Rachel\",\n    \"Phoebe\",\n    \"Gunther\",\n    \"Ross\",\n    \"Geller\",\n    \"Joey\",\n    \"Bing\",\n    \"Tribbiani\",\n    \"Janice\",\n    \"Bong\",\n    \"Perk\",\n    \"Green\",\n    \"Ken\",\n    \"Adams\"\n];\nvar city = [\n    \"New York\",\n    \"Los Angeles\",\n    \"Chicago\",\n    \"Houston\",\n    \"Philadelphia\",\n    \"Phoenix\",\n    \"San Antonio\",\n    \"Austin\",\n    \"San Francisco\",\n    \"Columbus\",\n    \"Washington\",\n    \"Portland\",\n    \"Oklahoma\",\n    \"Las Vegas\",\n    \"Virginia\",\n    \"St. Louis\",\n    \"Birmingham\"\n];\nvar date1;\nvar date2;\nvar isInit;\nvar dt = 0;\nfunction data(count) {\n    var result = [];\n    for (var i = 1; i < count + 1; i++) {\n        dt++;\n        var round = void 0;\n        var toString_1 = i.toString();\n        if (toString_1.length === 1) {\n            round = \"0000\" + i;\n        }\n        else if (toString_1.length === 2) {\n            round = \"000\" + i;\n        }\n        else if (toString_1.length === 3) {\n            round = \"00\" + i;\n        }\n        else if (toString_1.length === 4) {\n            round = \"0\" + i;\n        }\n        else {\n            round = toString_1;\n        }\n        result.push({\n            ProductID: \"PRO-\" + round,\n            City: city[Math.round(Math.random() * city.length)] || city[0],\n            Year: \"FY \" + (dt + 2013),\n            CustomerName: customername[Math.round(Math.random() * customername.length)] ||\n                customername[0],\n            Price: Math.round(Math.random() * 5000) + 5000,\n            Sold: Math.round(Math.random() * 80) + 10\n        });\n        if (dt / 4 == 1) {\n            dt = 0;\n        }\n    }\n    return result;\n}\nfunction show() {\n    document.getElementById('popup').style.display = 'inline-block';\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    methods: {\n        dataBound: function (args) {\n            var button = this.$refs.loadbtn.ej2Instances;\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            if (pivotObj.dataSourceSettings.dataSource.length > 0) {\n                if (date1 && isInit) {\n                    date2 = new Date().getTime();\n                    document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (date2 - date1) / 1000 + ' sec';\n                }\n                isInit = false;\n                button.disabled = true;\n                document.getElementById('popup').style.display = 'none';\n            }\n        },\n        btnClick: function () {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            show();\n            isInit = true;\n            pivotObj.dataSourceSettings.dataSource = data(100000);\n            date1 = new Date().getTime();\n        }\n    },\n    data: function () {\n        return {\n            dataSourceSettings: {\n                dataSource: [],\n                enableSorting: false,\n                expandAll: true,\n                formatSettings: [{ name: \"Price\", format: \"C0\" }],\n                rows: [{ name: \"ProductID\" }],\n                columns: [{ name: \"Year\" }],\n                values: [\n                    { name: \"Price\", caption: \"Unit Price\" },\n                    { name: \"Sold\", caption: \"Unit Sold\" }\n                ]\n            },\n            width: 860,\n            height: 300,\n            enableVirtualization: true,\n            gridSettings: { columnWidth: 140 }\n        };\n    },\n    provide: {\n        pivotview: [_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"VirtualScroll\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=template&id=6ebe3d55&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/virtual-scrolling/App.vue?vue&type=template&id=6ebe3d55&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\", staticStyle: { overflow: \"auto\" } },\n      [\n        _c(\n          \"div\",\n          { staticStyle: { \"margin-bottom\": \"5px\" } },\n          [\n            _c(\n              \"ejs-button\",\n              {\n                ref: \"loadbtn\",\n                staticClass: \"e-info\",\n                attrs: { id: \"load-btn\", isPrimary: true },\n                nativeOn: {\n                  click: function($event) {\n                    return _vm.btnClick.apply(null, arguments)\n                  }\n                }\n              },\n              [_vm._v(\"Load 100K Data\")]\n            ),\n            _vm._v(\" \"),\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"span\", { attrs: { id: \"performanceTime\" } }, [\n              _vm._v(\"Time Taken: 0 sec\")\n            ])\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"content-wrapper\" },\n          [\n            _c(\"ejs-pivotview\", {\n              ref: \"pivotview\",\n              attrs: {\n                id: \"pivotview\",\n                dataSourceSettings: _vm.dataSourceSettings,\n                enableVirtualization: _vm.enableVirtualization,\n                gridSettings: _vm.gridSettings,\n                dataBound: _vm.dataBound,\n                width: _vm.width,\n                height: _vm.height\n              }\n            })\n          ],\n          1\n        )\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"span\", { attrs: { id: \"popup\" } }, [\n      _c(\"span\", { attrs: { id: \"gif\", className: \"image\" } })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the virtual scrolling option available for vertically and horizontally loading records and showing a large number of records with ease.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The pivot table provides an optimized way to render rows and columns inside the view-port alone without calculating the value of the entire pivot.\\n        To enable virtual scrolling, set \"\n        ),\n        _c(\"code\", [_vm._v(\" enableVirtualization\")]),\n        _vm._v(\" property to true.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"strong\", [_vm._v(\"NOTE:\")]),\n        _vm._v(\" The \"),\n        _c(\"code\", [_vm._v(\" height\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\" width\")]),\n        _vm._v(\n          \" properties must be defined when enabling virtual\\n        scrolling option.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [_c(\"strong\", [_vm._v(\"Injecting Module:\")])]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The pivot table features are segregated into individual modules. To use the virtual scrolling option, inject\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\" VirtualScroll\")]),\n        _vm._v(\" module using the\\n        \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/virtual-scrolling/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });