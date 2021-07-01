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
/******/ 		"chart/trend-lines/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/trend-lines/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/trend-lines/App.vue":
/*!*******************************************!*\
  !*** ./Samples/chart/trend-lines/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0ff57d68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0ff57d68&scoped=true& */ \"./Samples/chart/trend-lines/App.vue?vue&type=template&id=0ff57d68&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/trend-lines/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0ff57d68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css& */ \"./Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0ff57d68_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0ff57d68_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0ff57d68\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/trend-lines/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?");

/***/ }),

/***/ "./Samples/chart/trend-lines/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/chart/trend-lines/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/trend-lines/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?");

/***/ }),

/***/ "./Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ff57d68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ff57d68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ff57d68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ff57d68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ff57d68_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?");

/***/ }),

/***/ "./Samples/chart/trend-lines/App.vue?vue&type=template&id=0ff57d68&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./Samples/chart/trend-lines/App.vue?vue&type=template&id=0ff57d68&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ff57d68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0ff57d68&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/trend-lines/App.vue?vue&type=template&id=0ff57d68&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ff57d68_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ff57d68_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?");

/***/ }),

/***/ "./Samples/chart/trend-lines/main.js":
/*!*******************************************!*\
  !*** ./Samples/chart/trend-lines/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/trend-lines/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section[data-v-0ff57d68] {\\n     min-height: 450px;\\n}\\n#chartcontainer_Series_0_TrendLine_0[data-v-0ff57d68] {\\n     stroke-dasharray: 10;\\n     -webkit-animation: dash-data-v-0ff57d68 1s linear infinite;\\n     animation: dash-data-v-0ff57d68 1s linear infinite;\\n}\\n@keyframes dash-data-v-0ff57d68 {\\nto {\\n         stroke-dashoffset: -20;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-O7NZTR26JBW3RVYQY5F34GM6AXMXBYARVHLC3JJXL3FE2DLBXRDA/Samples/chart/trend-lines/App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,kBAAkB;CACtB;AACD;KACK,qBAAqB;KACrB,2DAA2D;KAC3D,mDAAmD;CACvD;AACD;AACA;SACS,uBAAuB;CAC/B;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=0ff57d68&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control-section[data-v-0ff57d68] {\\n     min-height: 450px;\\n}\\n#chartcontainer_Series_0_TrendLine_0[data-v-0ff57d68] {\\n     stroke-dasharray: 10;\\n     -webkit-animation: dash-data-v-0ff57d68 1s linear infinite;\\n     animation: dash-data-v-0ff57d68 1s linear infinite;\\n}\\n@keyframes dash-data-v-0ff57d68 {\\nto {\\n         stroke-dashoffset: -20;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/trend-lines/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/trend-lines/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ChartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__[\"NumericTextBoxPlugin\"]);\n\n   \nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");   \n\nlet series1 = [];\nlet yValue = [7.66, 8.03, 8.41, 8.97, 8.77, 8.20, 8.16, 7.89, 8.68, 9.48, 10.11, 11.36, 12.34, 12.60, 12.95,\n    13.91, 16.21, 17.50, 22.72, 28.14, 31.26, 31.39, 32.43, 35.52, 36.36,\n    41.33, 43.12, 45.00, 47.23, 48.62, 46.60, 45.28, 44.01, 45.17, 41.20, 43.41, 48.32, 45.65, 46.61, 53.34, 58.53];\nlet point1; let i; let j = 0;\nfor (i = 1973; i <= 2013; i++) {\n    point1 = { x: i, y: yValue[j] };\n    series1.push(point1); j++;\n}\nlet powerData = [\n    { x: 1, y: 10 }, { x: 2, y: 50 }, { x: 3, y: 80 }, { x: 4, y: 110 },\n    { x: 5, y: 180 }, { x: 6, y: 220 }, { x: 7, y: 300 }, { x: 8, y: 370 }, { x: 9, y: 490 }, { x: 10, y: 500 }\n];\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n        seriesData: series1,\n        forwardForecast: 0,\n        backwardForecast: 0,\n        polynomialOrder: 2,\n        period: 2,\n\n        forwardEnabled: true,\n        backwardEnabled: true,\n        polynomialEnabled: false,\n        periodEnabled: false,\n\n        type: 'Linear',\n        name: 'Trends',\n        fValue: 1,\n           //Initializing Primary X Axis\n    primaryXAxis: {\n        majorGridLines: { width : 0}, edgeLabelPlacement: 'Shift'\n    },\n    //Initializing Primary Y Axis\n    primaryYAxis:  {\n       title: 'Rupees against Dollars',\n       interval: 10, lineStyle: {width: 0}, majorTickLines: { width: 0 }\n    },\n    chartArea :  {\n      border: { width : 0}\n    },\n    tooltip:  {\n        enable: true\n    },\n    marker: {\n        visible: false\n    },\n    marker1: {\n        visible :true\n    },\n    legendSettings : { visible: true },\n\n    title: 'Historical Indian Rupee Rate (INR USD)',\n\n       trenddata : [ 'Linear', 'Exponential', 'Power', 'Logarithmic', 'Polynomial', 'MovingAverage' ]\n      \n   };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ScatterSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"SplineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"LineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Trendlines\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Legend\"]]\n  },\n   updated: function () {\n    this.$nextTick(function() {\n      this.$refs.chart.ej2Instances.refresh();\n    });\n  },\n  methods: { \n    \n       onType:function(e){\n             let trend = document.getElementById('trendline').value\n            \n            this.seriesData = [];\n\n            this.type = trend;\n            this.name = trend;\n\n            let forwardForecast; let backwardForecast; let polynomialOrder; let period;\n            if (trend !== 'Power') {\n                this.seriesData = series1; \n\n                  let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"extend\"])({}, this.primaryXAxis);\n            primaryXAxis.title = '';\n            this.primaryXAxis = primaryXAxis;\n\n             let primaryYAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"extend\"])({}, this.primaryYAxis);\n            primaryYAxis.interval = 10;\n            primaryYAxis.title= 'Rupees against Dollars';\n            this.primaryYAxis = primaryYAxis;\n\n            this.title = 'Historical Indian Rupee Rate (INR USD)';\n\n                if (trend === 'MovingAverage') {\n\n            let marker = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"extend\"])({}, this.marker);\n            marker.visible = false;\n            this.marker = marker;\n            \n                }\n            } else {\n                this.seriesData = powerData;\n                this.name = 'Power';\n\n                  let primaryXAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"extend\"])({}, this.primaryXAxis);\n            primaryXAxis.title = 'Seconds';\n            this.primaryXAxis = primaryXAxis;\n\n             let primaryYAxis = Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"extend\"])({}, this.primaryYAxis);\n             primaryYAxis.title= 'Meters';\n              primaryYAxis.interval = 100;\n            this.primaryYAxis = primaryYAxis;\n\n               this.title = \"Distance Measurement\";\n               \n            }\n              if (trend !== 'Polynomial' && trend !== 'MovingAverage') {\n                    period = polynomialOrder = false;\n                    forwardForecast = backwardForecast = true;\n                } else if (trend === 'MovingAverage') {\n                    period = true;\n                    forwardForecast = backwardForecast = polynomialOrder = false;\n                } else {\n                    forwardForecast = backwardForecast = polynomialOrder = true;\n                    period = false;\n                }\n            this.forwardEnabled = forwardForecast;\n            this.backwardEnabled = backwardForecast;\n            this.polynomialEnabled = polynomialOrder;\n            this.periodEnabled = period;\n\n\n    },\n    \n     onForward: function(e) {\n         this.forwardForecast = e.value ;\n    },\n    onBackward: function(e) {\n         this.backwardForecast = e.value ;\n    \n    },\n     onPolynomial: function(e) {\n          this.polynomialOrder = e.value ;\n    },\n    onPeriod: function(e) {\n         this.period = e.value ;\n    }\n  },\n\n  \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/trend-lines/App.vue?vue&type=template&id=0ff57d68&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/trend-lines/App.vue?vue&type=template&id=0ff57d68&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-md-8 control-section\" },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            ref: \"chart\",\n            staticStyle: { display: \"block\", width: \"92%\" },\n            attrs: {\n              id: \"chartcontainer\",\n              theme: _vm.theme,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              tooltip: _vm.tooltip,\n              chartArea: _vm.chartArea,\n              title: _vm.title,\n              legendSettings: _vm.legendSettings\n            }\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\n                  \"e-series\",\n                  {\n                    attrs: {\n                      dataSource: _vm.seriesData,\n                      type: \"Spline\",\n                      xName: \"x\",\n                      yName: \"y\",\n                      name: \"Rupees\",\n                      marker: _vm.marker1\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-trendlines\",\n                      [\n                        _c(\"e-trendline\", {\n                          attrs: {\n                            type: _vm.type,\n                            forwardForecast: _vm.forwardForecast,\n                            polynomialOrder: _vm.polynomialOrder,\n                            period: _vm.period,\n                            backwardForecast: _vm.backwardForecast,\n                            width: 3,\n                            marker: _vm.marker,\n                            name: _vm.name,\n                            fill: \"#C64A75\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", [\n      _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n        _c(\n          \"table\",\n          {\n            staticClass: \"property-panel-table\",\n            staticStyle: { width: \"100%\" },\n            attrs: { id: \"property\", title: \"Properties\" }\n          },\n          [\n            _c(\"br\"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      attrs: {\n                        id: \"trendline\",\n                        change: _vm.onType,\n                        dataSource: _vm.trenddata,\n                        value: \"Linear\",\n                        width: 120\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      ref: \"fntx\",\n                      attrs: {\n                        id: \"forwardForecast\",\n                        enabled: _vm.forwardEnabled,\n                        value: _vm.fValue,\n                        min: 1,\n                        max: 20,\n                        step: 1,\n                        width: 120,\n                        change: _vm.onForward\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        id: \"backwardForecast\",\n                        enabled: _vm.backwardEnabled,\n                        value: 1,\n                        min: 1,\n                        max: 20,\n                        step: 1,\n                        width: 120,\n                        change: _vm.onBackward\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        id: \"polynomialOrder\",\n                        enabled: _vm.polynomialEnabled,\n                        value: 1,\n                        min: 0,\n                        max: 20,\n                        step: 1,\n                        width: 120,\n                        change: _vm.onPolynomial,\n                        disabled: true\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        id: \"period\",\n                        enabled: _vm.periodEnabled,\n                        value: 1,\n                        min: 0,\n                        max: 20,\n                        step: 1,\n                        width: 120,\n                        change: _vm.onPeriod,\n                        disabled: true\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(5),\n    _vm._v(\" \"),\n    _vm._m(6)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"TrendLine Type:\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Forward Forecast:\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Backward Forecast:\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Polynomial Order:\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Period:\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the trend of Indian rupees and US dollar variation with trendline in the chart. The type of trend line can be changed by using \"\n        ),\n        _c(\"code\", [_vm._v(\"TrendLine Type\")]),\n        _vm._v(\n          \", forward and backward forecasting of trendlines can be changed by \"\n        ),\n        _c(\"code\", [_vm._v(\"Forward Forecasting\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"Backward Forecast\")]),\n        _vm._v(\n          \" respectively. Polynomial and period for a trendlines can be changed by using \"\n        ),\n        _c(\"code\", [_vm._v(\"Polynomial order\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"Period\")]),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       In this example, you can see how to render and configure the Trend Lines. You can use \"\n        ),\n        _c(\"code\", [_vm._v(\"border\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"fill\")]),\n        _vm._v(\" properties to customize the area.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Chart component features are segregated into individual feature-wise modules. To use Trend lines, we need to Inject \"\n        ),\n        _c(\"code\", [_vm._v(\"Treandlines\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\" provide: { chart: [Trendlines] },\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the error bar can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/trend-lines/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });