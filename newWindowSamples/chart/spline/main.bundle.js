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
/******/ 		"chart/spline/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/spline/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/spline/App.vue":
/*!**************************************!*\
  !*** ./Samples/chart/spline/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_538e3788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=538e3788&scoped=true& */ \"./Samples/chart/spline/App.vue?vue&type=template&id=538e3788&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/spline/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_538e3788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css& */ \"./Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_538e3788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_538e3788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"538e3788\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/spline/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?");

/***/ }),

/***/ "./Samples/chart/spline/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/chart/spline/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/spline/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?");

/***/ }),

/***/ "./Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_538e3788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_538e3788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_538e3788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_538e3788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_538e3788_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?");

/***/ }),

/***/ "./Samples/chart/spline/App.vue?vue&type=template&id=538e3788&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./Samples/chart/spline/App.vue?vue&type=template&id=538e3788&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_538e3788_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=538e3788&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/spline/App.vue?vue&type=template&id=538e3788&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_538e3788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_538e3788_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?");

/***/ }),

/***/ "./Samples/chart/spline/main.js":
/*!**************************************!*\
  !*** ./Samples/chart/spline/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/spline/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/spline/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#chartSpline_Series_0_Point_2_Symbol[data-v-538e3788] {\\n       -webkit-animation: opac-data-v-538e3788 1s ease-out infinite;\\n       animation: opac-data-v-538e3788 1s ease-out infinite;\\n}\\n#chartSpline_Series_2_Point_0_Symbol[data-v-538e3788] {\\n       -webkit-animation: opac-data-v-538e3788 1s ease-out infinite;\\n       animation: opac-data-v-538e3788 1s ease-in-out infinite;\\n}\\n@keyframes opac-data-v-538e3788 {\\n0% {\\n           stroke-opacity: 1;\\n           stroke-width: 0px;\\n}\\n100% {\\n           stroke-opacity: 0;\\n           stroke-width: 10px;\\n}\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-H4YAPB63IFIM57O2ZWUJEAVGA57H7XNTVE3LIK4A2URV4SGJEFVQ/Samples/chart/spline/App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;OACO,6DAA6D;OAC7D,qDAAqD;CAC3D;AACD;OACO,6DAA6D;OAC7D,wDAAwD;CAC9D;AACD;AACA;WACW,kBAAkB;WAClB,kBAAkB;CAC5B;AACD;WACW,kBAAkB;WAClB,mBAAmB;CAC7B;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=538e3788&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#chartSpline_Series_0_Point_2_Symbol[data-v-538e3788] {\\n       -webkit-animation: opac-data-v-538e3788 1s ease-out infinite;\\n       animation: opac-data-v-538e3788 1s ease-out infinite;\\n}\\n#chartSpline_Series_2_Point_0_Symbol[data-v-538e3788] {\\n       -webkit-animation: opac-data-v-538e3788 1s ease-out infinite;\\n       animation: opac-data-v-538e3788 1s ease-in-out infinite;\\n}\\n@keyframes opac-data-v-538e3788 {\\n0% {\\n           stroke-opacity: 1;\\n           stroke-width: 0px;\\n}\\n100% {\\n           stroke-opacity: 0;\\n           stroke-width: 10px;\\n}\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/spline/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/spline/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      seriesData: [\n                    { x: 'Sun', y: 15 },\n                    { x: 'Mon', y: 22 },\n                    { x: 'Tue', y: 32 },\n                    { x: 'Wed', y: 31 },\n                    { x: 'Thu', y: 29 },\n                    { x: 'Fri', y: 24 },\n                    { x: 'Sat', y: 18 },\n                ],\n\n      seriesData1: [\n            { x: 'Sun', y: 10 },\n            { x: 'Mon', y: 18 },\n            { x: 'Tue', y: 28 },\n            { x: 'Wed', y: 28 },\n            { x: 'Thu', y: 26 },\n            { x: 'Fri', y: 20 },\n            { x: 'Sat', y: 15 }\n\n      ],\n      seriesData2: [\n             { x: 'Sun', y: 2 },\n             { x: 'Mon', y: 12 },\n             { x: 'Tue', y: 22 },\n             { x: 'Wed', y: 23 },\n             { x: 'Thu', y: 19 }, \n             { x: 'Fri', y: 13 },\n             { x: 'Sat', y: 8 },\n                ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n            valueType: 'Category',\n            interval: 1, majorGridLines: { width: 0 },\n            labelIntersectAction: 'Rotate90'\n        },\n      //Initializing Primary Y Axis\n       primaryYAxis:\n        {\n            labelFormat: '{value}°C',\n            lineStyle: { width: 0 },\n            majorTickLines: { width: 0 },\n            minorTickLines: { width: 0 }\n        },\n       chartArea: {\n        border: {\n          width: 0\n        }\n      },\n       width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '60%',\n       marker: {\n        visible: true,\n        height: 10,\n        width: 10\n      },\n      tooltip: {\n        enable: true\n      },\n      title: \"NC Weather Report - 2016\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"SplineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartAnnotation\"]]\n  },\n  methods: {\n  },\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/spline/App.vue?vue&type=template&id=538e3788&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/spline/App.vue?vue&type=template&id=538e3788&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{staticStyle:{\"display\":\"block\"},attrs:{\"theme\":_vm.theme,\"align\":\"center\",\"id\":\"chartSpline\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"tooltip\":_vm.tooltip}},[_c('e-annotations',[_c('e-annotation',{attrs:{\"content\":'cloudTemplate',\"x\":\"Sun\",\"y\":\"2\",\"coordinateUnits\":\"Point\",\"verticalAlignment\":\"Top\"},scopedSlots:_vm._u([{key:\"cloudTemplate\",fn:function(ref){return [_c('div',{attrs:{\"id\":\"chart_cloud\"}},[_c('img',{staticStyle:{\"width\":\"41px\",\"height\":\"41px\"},attrs:{\"src\":\"source/chart/images/cloud.png\"}})])]}}])}),_vm._v(\" \"),_c('e-annotation',{attrs:{\"content\":'sunTemplate',\"x\":\"Tue\",\"y\":\"33\",\"coordinateUnits\":\"Point\",\"verticalAlignment\":\"Top\"},scopedSlots:_vm._u([{key:\"sunTemplate\",fn:function(ref){return [_c('div',{attrs:{\"id\":\"chart_sun\"}},[_c('img',{staticStyle:{\"width\":\"41px\",\"height\":\"41px\"},attrs:{\"src\":\"source/chart/images/sunny.png\"}})])]}}])})],1),_vm._v(\" \"),_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":\"Spline\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Max Temp\",\"width\":\"2\",\"marker\":_vm.marker}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.seriesData1,\"type\":\"Spline\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Avg Temp\",\"width\":\"2\",\"marker\":_vm.marker}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.seriesData2,\"type\":\"Spline\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Min Temp\",\"width\":\"2\",\"marker\":_vm.marker}})],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{\"float\":\"right\",\"margin-right\":\"10px\"}},[_vm._v(\"Source:\\n       \"),_c('a',{attrs:{\"href\":\"https://www.worldweatheronline.com/mooresville-weather/north-carolina/us.aspx\",\"target\":\"_blank\"}},[_vm._v(\"www.worldweatheronline.com\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample visualizes the NC weather report for the year 2016 with default spline series in the chart. \\n        Low and high temperature of the year are indicated by using annotation.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to render and configure the spline type charts. Spline chart connects each point in series through a curved line.\\n        You can use \"),_c('code',[_vm._v(\"dashArray\")]),_vm._v(\", \"),_c('code',[_vm._v(\"width\")]),_vm._v(\", \"),_c('code',[_vm._v(\"fill\")]),_vm._v(\" properties to customize the spline. \"),_c('code',[_vm._v(\"marker\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"dataLabel\")]),_vm._v(\" are used to represent individual data and its value.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        Tooltip is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            Chart component features are segregated into individual feature-wise modules. To use spline series, we need to inject\\n            \"),_c('code',[_vm._v(\"SplineSeries\")]),_vm._v(\" module using \"),_c('code',[_vm._v(\"provide: { chart: [SplineSeries] }\")]),_vm._v(\" method.\\n        \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            More information on the spline series can be found in this\\n            \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"}},[_vm._v(\"documentation section\")]),_vm._v(\".\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/spline/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });