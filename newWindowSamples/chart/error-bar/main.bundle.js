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
/******/ 		"chart/error-bar/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/error-bar/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/error-bar/App.vue":
/*!*****************************************!*\
  !*** ./Samples/chart/error-bar/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1be6d70b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1be6d70b&scoped=true& */ \"./Samples/chart/error-bar/App.vue?vue&type=template&id=1be6d70b&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/error-bar/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1be6d70b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1be6d70b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1be6d70b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/error-bar/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/error-bar/App.vue?");

/***/ }),

/***/ "./Samples/chart/error-bar/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/chart/error-bar/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/error-bar/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/error-bar/App.vue?");

/***/ }),

/***/ "./Samples/chart/error-bar/App.vue?vue&type=template&id=1be6d70b&scoped=true&":
/*!************************************************************************************!*\
  !*** ./Samples/chart/error-bar/App.vue?vue&type=template&id=1be6d70b&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1be6d70b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1be6d70b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/error-bar/App.vue?vue&type=template&id=1be6d70b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1be6d70b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1be6d70b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/error-bar/App.vue?");

/***/ }),

/***/ "./Samples/chart/error-bar/main.js":
/*!*****************************************!*\
  !*** ./Samples/chart/error-bar/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/error-bar/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/error-bar/main.js?");

/***/ }),

/***/ "./Samples/chart/error-bar/theme-color.ts":
/*!************************************************!*\
  !*** ./Samples/chart/error-bar/theme-color.ts ***!
  \************************************************/
/*! exports provided: materialColors, fabricColors, bootstrapColors, highContrastColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialColors\", function() { return materialColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fabricColors\", function() { return fabricColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrapColors\", function() { return bootstrapColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highContrastColors\", function() { return highContrastColors; });\n/**\n * Initialize the Theme colors\n */\nvar materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',\n    '#ea7a57', '#404041', '#00bdae'];\nvar fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',\n    '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];\nvar bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',\n    '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\nvar highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',\n    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];\n\n\n//# sourceURL=webpack:///./Samples/chart/error-bar/theme-color.ts?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/error-bar/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/error-bar/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _theme_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-color */ \"./Samples/chart/error-bar/theme-color.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_5__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        theme: theme,\n        seriesData: [\n                { x: 'IND', y: 24 }, { x: 'AUS', y: 20 }, { x: 'USA', y: 35 },\n                { x: 'DEU', y: 27 }, { x: 'ITA', y: 30 },\n                { x: 'UK', y: 41 }, { x: 'RUS', y: 26 }\n\n        ],\n        \n        chartArea: { border: { width: 0 } },\n\n           //Initializing Primary X Axis\n         primaryXAxis: {\n            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }\n        },\n\n      //Initializing Primary Y Axis\n        primaryYAxis:\n            {\n                labelFormat: '{value}%', minimum: 15, maximum: 45, lineStyle: { width: 0 }\n            },\n        \n         marker: { height: 10, width: 10 },\n\n        errorBar: { visible: true, verticalError: 3, horizontalError: 3 },\n\n        tooltip: { enable: true },\n        \n        legendSettings: {\n            visible: false\n        },\n    \n       directiondata : [ 'Both', 'Minus', 'Plus' ],\n       errordata : [ 'Fixed', 'Percentage', 'StandardDeviation', 'StandardError', 'Custom' ],\n       drawdata : [ 'Vertical', 'Horizontal', 'Both'],\n       animation: { enable: false },\n\n      listwidth:120,\n      \n      title: \"Sales Distribution of Car by Region\",\n\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_5__[\"ScatterSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_5__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_5__[\"ErrorBar\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_5__[\"Tooltip\"]]\n  },\n  methods: { \n       errorBarDirection:function(args){\n           let errordirection = document.getElementById('direction').value;\n           this.$refs.chart.ej2Instances.series[0].animation.enable = false;\n           this.$refs.chart.ej2Instances.series[0].errorBar.type = errordirection;\n           this.$refs.chart.ej2Instances.refresh();\n\n    },\n     errorBarTypeChange:function(args){\n        let errortype = document.getElementById('errorBarType').value;\n        this.$refs.chart.ej2Instances.series[0].animation.enable = false;\n        this.$refs.chart.ej2Instances.series[0].errorBar.mode = errortype;\n        this.$refs.chart.ej2Instances.refresh();\n    },\n    pointRender: function(args) {\n        let selectedTheme= location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {\n            args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_4__[\"fabricColors\"][args.point.index % 10];\n        } else if (selectedTheme === 'material') {\n            args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_4__[\"materialColors\"][args.point.index % 10];\n        } else if (selectedTheme === 'highcontrast') {\n            args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_4__[\"highContrastColors\"][args.point.index % 10];\n        } else {\n            args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_4__[\"bootstrapColors\"][args.point.index % 10];\n        }\n    },\n     errorBarMode:function(args) {\n        let errormode = document.getElementById('drawmode').value;\n        this.$refs.chart.ej2Instances.series[0].animation.enable = false;\n        this.$refs.chart.ej2Instances.series[0].errorBar.direction = errormode;\n        this.$refs.chart.ej2Instances.refresh();  \n    },\n    verticalErrorBar: function(e) {\n        let vertical = document.getElementById('vertical').value;\n        this.$refs.chart.ej2Instances.series[0].animation.enable = false;\n        this.$refs.chart.ej2Instances.series[0].errorBar.verticalError = parseInt(vertical, 10);\n        this.$refs.chart.ej2Instances.refresh();  \n    },\n    horizontalErrorBar: function(e) {\n        let horizontal = document.getElementById('horizontal').value;\n        this.$refs.chart.ej2Instances.series[0].animation.enable = false;\n        this.$refs.chart.ej2Instances.series[0].errorBar.horizontalError = parseInt(horizontal, 10);\n        this.$refs.chart.ej2Instances.refresh();  \n     }\n  }\n  \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/error-bar/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/error-bar/App.vue?vue&type=template&id=1be6d70b&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/error-bar/App.vue?vue&type=template&id=1be6d70b&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-md-8 control-section\" },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            ref: \"chart\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              animation: _vm.animation,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              chartArea: _vm.chartArea,\n              tooltip: _vm.tooltip,\n              pointRender: _vm.pointRender,\n              legendSettings: _vm.legendSettings\n            }\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    type: \"Scatter\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Sales\",\n                    marker: _vm.marker,\n                    width: \"2\",\n                    errorBar: _vm.errorBar\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", [\n      _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n        _c(\n          \"table\",\n          {\n            staticClass: \"property-panel-table\",\n            staticStyle: { width: \"100%\" },\n            attrs: { id: \"property\", title: \"Properties\" }\n          },\n          [\n            _c(\"br\"),\n            _c(\"br\"),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      attrs: {\n                        id: \"direction\",\n                        change: _vm.errorBarDirection,\n                        dataSource: _vm.errordata,\n                        index: \"0\",\n                        width: _vm.listwidth\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", {}, [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      attrs: {\n                        id: \"errorBarType\",\n                        change: _vm.errorBarTypeChange,\n                        dataSource: _vm.drawdata,\n                        index: \"0\",\n                        width: _vm.listwidth\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      attrs: {\n                        id: \"drawmode\",\n                        change: _vm.errorBarMode,\n                        dataSource: _vm.directiondata,\n                        index: \"0\",\n                        width: _vm.listwidth\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        value: \"3\",\n                        min: 1,\n                        max: 20,\n                        width: \"120\",\n                        step: 1,\n                        change: _vm.verticalErrorBar,\n                        id: \"vertical\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-numerictextbox\", {\n                      attrs: {\n                        value: \"3\",\n                        min: 1,\n                        max: 20,\n                        width: \"120\",\n                        step: 1,\n                        change: _vm.horizontalErrorBar,\n                        id: \"horizontal\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ])\n          ]\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(5),\n    _vm._v(\" \"),\n    _vm._m(6)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Error Bar Type\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Drawing Mode\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Drawing Direction\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Vertical Error\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Horizontal Error\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the errors in sales distribution of a car for a certain period with error bar in the chart. In property panel, the options are available to change error bar type, drawing mode, and drawing direction of error bar by means of dropdown\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure the error bar charts. Line type charts are used for cartesian type\\n        series. You can use error bar by set\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"visible\")]),\n        _vm._v(\n          \" property to true. You can change the error bar rendering type using\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\n          \" property like fixedValue, percentage, standardDeviation, standardError and custom option of errorBar. To change\\n        the error bar line length you can use\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"verticalError\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_vm._v(\"Chart supports the following error bar types.\\n    \")]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Fixed\")]),\n          _vm._v(\" - Renders a fixed type error bar.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Percentage\")]),\n          _vm._v(\" - Renders a percentage type error bar.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"StandardDeviation\")]),\n          _vm._v(\" - Renders a standard deviation type error bar.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"StandardError\")]),\n          _vm._v(\" - Renders a standard error type error bar.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Custom\")]),\n          _vm._v(\" - Renders a custom type error bar.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Chart component features are segregated into individual feature-wise modules. To use error bar, we need to inject\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"ErrorBar\")]),\n        _vm._v(\" module using\\n        \"),\n        _c(\"code\", [_vm._v(\"Chart.Inject(ErroBar)\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the error bar can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/error-bar/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });