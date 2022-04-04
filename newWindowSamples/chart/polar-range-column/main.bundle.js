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
/******/ 		"chart/polar-range-column/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/polar-range-column/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/polar-range-column/App.vue":
/*!**************************************************!*\
  !*** ./Samples/chart/polar-range-column/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4e0de04c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4e0de04c&scoped=true& */ \"./Samples/chart/polar-range-column/App.vue?vue&type=template&id=4e0de04c&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/polar-range-column/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4e0de04c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css& */ \"./Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4e0de04c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4e0de04c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4e0de04c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/polar-range-column/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/polar-range-column/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/chart/polar-range-column/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/polar-range-column/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4e0de04c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4e0de04c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4e0de04c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4e0de04c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4e0de04c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/polar-range-column/App.vue?vue&type=template&id=4e0de04c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./Samples/chart/polar-range-column/App.vue?vue&type=template&id=4e0de04c&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4e0de04c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4e0de04c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/polar-range-column/App.vue?vue&type=template&id=4e0de04c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4e0de04c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4e0de04c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/polar-range-column/chart-data.ts":
/*!********************************************************!*\
  !*** ./Samples/chart/polar-range-column/chart-data.ts ***!
  \********************************************************/
/*! exports provided: ChartDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChartDataService\", function() { return ChartDataService; });\n/**\n * chart data source\n */\nvar ChartDataService = /** @class */ (function () {\n    function ChartDataService() {\n    }\n    ChartDataService.prototype.GetCrosshairData = function () {\n        var series1 = [];\n        var series2 = [];\n        var point1;\n        var point2;\n        var value = 60;\n        var value1 = 50;\n        var i;\n        for (i = 1; i < 250; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n                value1 += Math.random();\n            }\n            else {\n                value -= Math.random();\n                value1 -= Math.random();\n            }\n            point1 = { x: new Date(2000, i, 1), y: value };\n            point2 = { x: new Date(2000, i, 1), y: value1 };\n            series1.push(point1);\n            series2.push(point2);\n        }\n        return { 'series1': series1, 'series2': series2 };\n    };\n    ChartDataService.prototype.GetScatterData = function () {\n        var series1 = [];\n        var series2 = [];\n        var point1;\n        var value = 80;\n        var value1 = 70;\n        var i;\n        for (i = 1; i < 120; i++) {\n            if (Math.random() > 0.5) {\n                value += Math.random();\n            }\n            else {\n                value -= Math.random();\n            }\n            value = value < 60 ? 60 : value > 90 ? 90 : value;\n            point1 = { x: (145 + (i / 3)).toFixed(1), y: value.toFixed(1) };\n            series1.push(point1);\n        }\n        for (i = 1; i < 120; i++) {\n            if (Math.random() > 0.5) {\n                value1 += Math.random();\n            }\n            else {\n                value1 -= Math.random();\n            }\n            value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;\n            point1 = { x: (145 + (i / 3)).toFixed(1), y: value1.toFixed(1) };\n            series2.push(point1);\n        }\n        return { 'series1': series1, 'series2': series2 };\n    };\n    ChartDataService.prototype.GetLocalData = function () {\n        var series1 = [];\n        var series2 = [];\n        var point1;\n        var point2;\n        var value = 80;\n        var value1 = 90;\n        var i;\n        for (i = 1; i < 500; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n                value1 += Math.random();\n            }\n            else {\n                value -= Math.random();\n                value1 -= Math.random();\n            }\n            point1 = { x: new Date(1960, (i + 1), i), y: Math.round(value) };\n            point2 = { x: new Date(1960, (i + 1), i), y: Math.round(value1) };\n            series1.push(point1);\n            series2.push(point2);\n        }\n        return { 'series1': series1, 'series2': series2 };\n    };\n    ChartDataService.prototype.GetZoomingData = function () {\n        var series1 = [];\n        var point1;\n        var value = 80;\n        var i;\n        for (i = 1; i < 500; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n            }\n            else {\n                value -= Math.random();\n            }\n            point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };\n            series1.push(point1);\n        }\n        return { 'series1': series1 };\n    };\n    ChartDataService.prototype.GetPolarSplineData = function () {\n        var cardData = [];\n        var biDirData = [];\n        var omniDirData = [];\n        var point1;\n        var point2;\n        for (var x = -180; x < 180; x++) {\n            point1 = { x: x, y: -12.6 * (1 - Math.cos(x * 3.14 / 180)) };\n            cardData.push(point1);\n            point2 = { x: x, y: -3 };\n            omniDirData.push(point2);\n        }\n        for (var x = -180; x < -90; x++) {\n            point1 = { x: x, y: -26 * (1 + Math.cos(x * 3.14 / 180)) };\n            biDirData.push(point1);\n        }\n        for (var x = -90; x < 90; x++) {\n            point1 = { x: x, y: -26 * (1 - Math.cos(x * 3.14 / 180)) };\n            biDirData.push(point1);\n        }\n        for (var x = 90; x < 180; x++) {\n            point1 = { x: x, y: -26 * (1 + Math.cos(x * 3.14 / 180)) };\n            biDirData.push(point1);\n        }\n        return { 'series1': cardData, 'series2': omniDirData, 'series3': biDirData };\n    };\n    return ChartDataService;\n}());\n\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/chart-data.ts?");

/***/ }),

/***/ "./Samples/chart/polar-range-column/main.js":
/*!**************************************************!*\
  !*** ./Samples/chart/polar-range-column/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/polar-range-column/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-4e0de04c] {\\n  padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-H4YAPB63IFIM57O2ZWUJEAVGA57H7XNTVE3LIK4A2URV4SGJEFVQ/Samples/chart/polar-range-column/App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=4e0de04c&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-4e0de04c] {\\n  padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/polar-range-column/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/polar-range-column/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _chart_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chart-data */ \"./Samples/chart/polar-range-column/chart-data.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (\n  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)\n).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      seriesData: [\n        { x: \"Jan\", low: 2, high: 7 },\n        { x: \"Feb\", low: 3, high: 7 },\n        { x: \"Mar\", low: 3, high: 7 },\n        { x: \"Apr\", low: 4, high: 9 },\n        { x: \"May\", low: 6, high: 11 },\n        { x: \"June\", low: 8, high: 14 }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        valueType: \"Category\",\n        title: \"Months\",\n        interval: 1,\n        labelPlacement: \"OnTicks\",\n        startAngle: 90,\n        coefficient: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 80 : 100\n      },\n\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        labelFormat: \"{value}˚C\",\n        minimum: 0,\n        maximum: 15,\n        interval: 5\n      },\n\n      border: { width: 3, color: \"white\" },\n      legendSettings: { visible: false },\n\n      polardata: [\"Polar\", \"Radar\"],\n\n      polarwidth: 120,\n      seriesType: \"Polar\",\n      title: \"Maximum and Minimum Temperature\",\n      marker: {\n        dataLabel: {\n          visible: true,\n          position: \"Top\",\n          font: { color: \"#ffffff\", fontWeight: \"600\" },\n          enableRotation: true\n        }\n      }\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"PolarSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"RadarSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"DataLabel\"]]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n      this.$refs.chart.ej2Instances.dataBind();\n      this.$refs.chart.ej2Instances.refresh();\n    });\n  },\n  methods: {\n    polarType: function(args) {\n      this.seriesType = SelectSeriesType.value;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/polar-range-column/App.vue?vue&type=template&id=4e0de04c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/polar-range-column/App.vue?vue&type=template&id=4e0de04c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-8 control-section\"},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"theme\":_vm.theme,\"align\":\"center\",\"id\":\"chartcontainer\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"legendSettings\":_vm.legendSettings,\"primaryYSAxis\":_vm.primaryYAxis}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":_vm.seriesType,\"xName\":\"x\",\"name\":\"Germany\",\"drawType\":\"RangeColumn\",\"border\":_vm.border,\"low\":\"low\",\"high\":\"high\",\"marker\":_vm.marker}})],1)],1)],1),_vm._v(\" \"),_c('div',[_c('div',{staticClass:\"col-md-4 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('br'),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"SelectSeriesType\",\"change\":_vm.polarType,\"dataSource\":_vm.polardata,\"index\":\"0\",\"width\":_vm.polarwidth}})],1)])])])])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Series Type\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample demonstrates polar series with range column type for temperature variation. The switching between polar and radar series can be done by using\\n      \"),_c('code',[_vm._v(\"Series Type\")]),_vm._v(\" in property panel.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this example, you can see how to render and configure the range column type chart You can use\\n      \"),_c('code',[_vm._v(\"border\")]),_vm._v(\",\\n      \"),_c('code',[_vm._v(\"fill\")]),_vm._v(\" properties to customize the area.\\n      \"),_c('code',[_vm._v(\"dataLabel\")]),_vm._v(\" are used to represent individual data\\n      and its value.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\")]),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      Chart component features are segregated into individual feature-wise modules. To use range column drawtype in Polar series\\n      and Radar series, we need to inject\\n      \"),_c('code',[_vm._v(\"PolarSeries\")]),_vm._v(\",\\n      \"),_c('code',[_vm._v(\"RadarSeries\")]),_vm._v(\" and\\n      \"),_c('code',[_vm._v(\"RangeColumnSeries\")]),_vm._v(\" module using\\n      \"),_c('code',[_vm._v(\"provide: { chart: [ PolarSeries, RadarSeries, RangeColumnSeries] },\")]),_vm._v(\" method.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      More information on the range column series can be found in this\\n      \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/polar-range-column/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });