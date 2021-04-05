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
/******/ 		"chart/grouping/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/grouping/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/grouping/App.vue":
/*!****************************************!*\
  !*** ./Samples/chart/grouping/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7a68037a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7a68037a&scoped=true& */ \"./Samples/chart/grouping/App.vue?vue&type=template&id=7a68037a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/grouping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7a68037a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css& */ \"./Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7a68037a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7a68037a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7a68037a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/grouping/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?");

/***/ }),

/***/ "./Samples/chart/grouping/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/chart/grouping/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/grouping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?");

/***/ }),

/***/ "./Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7a68037a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7a68037a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7a68037a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7a68037a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7a68037a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?");

/***/ }),

/***/ "./Samples/chart/grouping/App.vue?vue&type=template&id=7a68037a&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./Samples/chart/grouping/App.vue?vue&type=template&id=7a68037a&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7a68037a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7a68037a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/grouping/App.vue?vue&type=template&id=7a68037a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7a68037a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7a68037a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?");

/***/ }),

/***/ "./Samples/chart/grouping/main.js":
/*!****************************************!*\
  !*** ./Samples/chart/grouping/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/grouping/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/grouping/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section[data-v-7a68037a] {\\n    min-height: 450px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/2-charts-vue-samples_master-2XQC543HP26CSZM765S5C6AEMYE6OBUSNQL2WLROXQNWOUIID2MQ/Samples/chart/grouping/App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,kBAAkB;CACrB\",\"file\":\"App.vue?vue&type=style&index=0&id=7a68037a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control-section[data-v-7a68037a] {\\n    min-height: 450px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/grouping/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/grouping/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationChartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        groupModeData: [\"Point\", \"Value\"],\n        theme: theme,\n        animation: {\n            enable: false\n        },\n        data: [\n        { 'x': 'China', y: 26, text: 'China: 26' },\n        { 'x': 'Russia', y: 19, text: 'Russia: 19' },\n        { 'x': 'Germany', y: 17, text: 'Germany: 17' },\n        { 'x': 'Japan', y: 12, text: 'Japan: 12' },\n        { 'x': 'France', y: 10, text: 'France: 10' },\n        { 'x': 'South Korea', y: 9, text: 'South Korea: 9' },\n        { 'x': 'Great Britain', y: 27, text: 'Great Britain: 27' },\n        { 'x': 'Italy', y: 8, text: 'Italy: 8' },\n        { 'x': 'Australia', y: 8, text: 'Australia: 8' },\n        { 'x': 'Netherlands', y: 8, text: 'Netherlands: 8' },\n        { 'x': 'Hungary', y: 8, text: 'Hungary: 8' },\n        { 'x': 'Brazil', y: 7, text: 'Brazil: 7' },\n        { 'x': 'Spain', y: 7, text: 'Spain: 7' },\n        { 'x': 'Kenya', y: 6, text: 'Kenya: 6' },\n    ],\n    //Initializing Legend\n    legendSettings: {\n        visible: false,\n    },\n    //Initializing DataLabel\n    dataLabel: {\n        visible: true,\n        position: 'Outside',\n        connectorStyle: { type: 'Line', length: '5%' },\n        font: {\n            size: '14px'\n        }\n    },\n    clubvalue: '9',\n    startAngle: 0,\n    endAngle: 360,\n    tooltip: { enable: false },\n    title: 'RIO Olympics Gold ',\n    };\n  },\n  provide: {\n    accumulationchart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationLegend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"PieSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationDataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationTooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationSelection\"]]\n  },\n  methods: {\n      changeMode: function(e){\n          let accumulationChart = document.getElementById('containerPie').ej2_instances[0];\n          let currentValue = e.value  === 'Point' ? 9 : 8;\n          document.getElementById('clubtext').innerHTML = currentValue;\n          document.getElementById('clubvalue').innerHTML = currentValue;\n          accumulationChart.series[0].groupMode = e.value;\n          accumulationChart.series[0].groupTo = currentValue.toString();\n          accumulationChart.series[0].animation.enable = false;\n          accumulationChart.removeSvg();\n          accumulationChart.refreshSeries();\n          accumulationChart.refreshChart();\n      },\n    onClubvalue: function (e) {\n        let clubvalue = document.getElementById('clubvalue').value;\n        this.clubvalue = clubvalue;\n        document.getElementById('clubtext').innerHTML = clubvalue;\n    },\n    onTextRender: function (args) {\n        args.text = args.point.x + ' ' + args.point.y;\n    },\n    onPointRender: function (args) {\n        if (args.point.isClubbed || args.point.isSliced) {\n            args.fill = '#D3D3D3';\n        }\n    },\n  },\n    updated: function() {\n      this.$nextTick(function() {\n        this.$refs.pie.ej2Instances.refresh();\n        this.$refs.pie.ej2Instances.removeSvg();\n        this.$refs.pie.ej2Instances.refreshSeries();\n        this.$refs.pie.ej2Instances.refreshChart();\n      });\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/grouping/App.vue?vue&type=template&id=7a68037a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/grouping/App.vue?vue&type=template&id=7a68037a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-md-8 control-section\" },\n      [\n        _c(\n          \"ejs-accumulationchart\",\n          {\n            ref: \"pie\",\n            staticStyle: { display: \"block\", width: \"92%\" },\n            attrs: {\n              id: \"containerPie\",\n              legendSettings: _vm.legendSettings,\n              tooltip: _vm.tooltip,\n              title: _vm.title,\n              textRender: _vm.onTextRender,\n              pointRender: _vm.onPointRender,\n              theme: _vm.theme\n            }\n          },\n          [\n            _c(\n              \"e-accumulation-series-collection\",\n              [\n                _c(\"e-accumulation-series\", {\n                  attrs: {\n                    name: \"RIO\",\n                    animation: _vm.animation,\n                    explode: true,\n                    dataSource: _vm.data,\n                    xName: \"x\",\n                    yName: \"y\",\n                    startAngle: _vm.startAngle,\n                    endAngle: _vm.endAngle,\n                    innerRadius: \"0%\",\n                    radius: \"70%\",\n                    groupMode: \"Point\",\n                    dataLabel: _vm.dataLabel,\n                    groupTo: _vm.clubvalue\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticClass: \"property-panel-table\",\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"groupMode\",\n                      change: _vm.changeMode,\n                      index: \"0\",\n                      dataSource: _vm.groupModeData,\n                      width: \"80\"\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n              _c(\"div\", { attrs: { \"data-role\": \"rangeslider\" } }, [\n                _c(\"input\", {\n                  staticStyle: { width: \"90%\" },\n                  attrs: {\n                    type: \"range\",\n                    name: \"clubvalue\",\n                    value: \"9\",\n                    min: \"0\",\n                    max: \"27\",\n                    autocomplete: \"off\",\n                    id: \"clubvalue\"\n                  },\n                  on: {\n                    touchmove: _vm.onClubvalue,\n                    pointermove: _vm.onClubvalue,\n                    change: _vm.onClubvalue\n                  }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _vm._m(2)\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"GroupModes:\\n                       \")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"30%\" } }, [\n      _c(\"div\", [\n        _vm._v(\n          \"Group To                                \\n                            \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"30%\" } }, [\n      _c(\n        \"p\",\n        {\n          staticStyle: { \"font-weight\": \"normal\", \"padding-top\": \"15px\" },\n          attrs: { id: \"clubtext\" }\n        },\n        [_vm._v(\"9\")]\n      )\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates the grouping functionality in pie series.  The grouping value can be changed by using \"\n        ),\n        _c(\"code\", [_vm._v(\"Group To\")]),\n        _vm._v(\" property.\\n    \")\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\" In this example, you can see how to \"),\n        _c(\"code\", [_vm._v(\"group\")]),\n        _vm._v(\" points in pie chart\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\" Points having value below the \"),\n        _c(\"code\", [_vm._v(\"'groupTo'\")]),\n        _vm._v(\n          \" value are grouped and showed as separate point. You can view this points on mouse click and can customize this point using \"\n        ),\n        _c(\"code\", [_vm._v(\"'pointRender'\")]),\n        _vm._v(\" event. \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\" DataLabel is used to represent individual data and its value.\")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/grouping/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });