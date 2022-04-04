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
/******/ 		"chart/pie-annotation/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/pie-annotation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/pie-annotation/App.vue":
/*!**********************************************!*\
  !*** ./Samples/chart/pie-annotation/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4724b9c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4724b9c7&scoped=true& */ \"./Samples/chart/pie-annotation/App.vue?vue&type=template&id=4724b9c7&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/pie-annotation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4724b9c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css& */ \"./Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4724b9c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4724b9c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4724b9c7\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/pie-annotation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?");

/***/ }),

/***/ "./Samples/chart/pie-annotation/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/chart/pie-annotation/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/pie-annotation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?");

/***/ }),

/***/ "./Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4724b9c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4724b9c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4724b9c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4724b9c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4724b9c7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?");

/***/ }),

/***/ "./Samples/chart/pie-annotation/App.vue?vue&type=template&id=4724b9c7&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/chart/pie-annotation/App.vue?vue&type=template&id=4724b9c7&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4724b9c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4724b9c7&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/pie-annotation/App.vue?vue&type=template&id=4724b9c7&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4724b9c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4724b9c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?");

/***/ }),

/***/ "./Samples/chart/pie-annotation/main.js":
/*!**********************************************!*\
  !*** ./Samples/chart/pie-annotation/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/pie-annotation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section[data-v-4724b9c7] {\\n  min-height: 450px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-H4YAPB63IFIM57O2ZWUJEAVGA57H7XNTVE3LIK4A2URV4SGJEFVQ/Samples/chart/pie-annotation/App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,kBAAkB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=4724b9c7&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control-section[data-v-4724b9c7] {\\n  min-height: 450px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/pie-annotation/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/pie-annotation/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n    theme: theme,\n    render: false,\n    legend: {\n        visible: true,\n        toggleVisibility: false\n    },\n    //Initializing dataSource\n    dataSource: [\n        { x: '2014', y0: 51, y1: 77, y2: 66, y3: 34 }, { x: '2015', y0: 67, y1: 49, y2: 19, y3: 38 },\n        { x: '2016', y0: 143, y1: 121, y2: 91, y3: 44 }, { x: '2017', y0: 19, y1: 28, y2: 65, y3: 51 },\n        { x: '2018', y0: 30, y1: 66, y2: 32, y3: 61 }, { x: '2019', y0: 189, y1: 128, y2: 122, y3: 76 },\n        { x: '2020', y0: 72, y1: 97, y2: 65, y3: 82 }\n    ],\n    pieDataSource: [\n        { x: 'UK', y: 51, text: '22%' }, { x: 'Germany', y: 77, text: '34%' },\n        { x: 'France', y: 66, text: '29%' }, { x: 'Italy', y: 34, text: '15%' }\n    ],\n    //Initializing Primary X Axis\n    primaryXAxis: {\n        title: 'Years',\n        majorGridLines: { width: 0 }, minorGridLines: { width: 1 },\n        minorTickLines: { width: 1 }, interval: 1,\n        labelIntersectAction: 'Rotate45',\n        valueType: 'Category'\n    },\n    chartArea: {\n        border: {\n            width: 0\n        }\n    },\n    width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '80%',\n    //Initializing Primary Y Axis\n    primaryYAxis: {\n        title: 'Sales', lineStyle: { width: 0 },\n        minimum: 0, maximum: 700, interval: 100,\n        majorGridLines: { width: 1 }, minorGridLines: { width: 1 },\n        majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelFormat: '{value}B',\n    },\n    title: 'Mobile Game Market by Country',\n    selectedDataIndexes: [{ series: 0, point: 0 }],\n    selectionMode: 'Cluster'\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"StackingColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Selection\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartAnnotation\"]]\n  },\n  methods: {\n    getValue: function (series, pointIndex, y) {\n        let totalValue = 0;\n        for (let ser of series) {\n            totalValue += ser.points[pointIndex].y;\n        }\n        return (Math.round((y / totalValue) * 100)) + '%';\n    },\n    chartMouseUp: function (args) {\n        if (args.target.indexOf('Point') > -1) {\n            let pointIndex = parseInt(args.target[args.target.length - 1], 10);\n            this.pieDataSource = [];\n            for (let series of this.$refs.chart.ej2Instances.visibleSeries) {\n                let value = series.points[pointIndex].y;\n                this.pieDataSource.push({\n                    'x': series.name,\n                    'y': value,\n                    'text': this.getValue(this.$refs.chart.ej2Instances.visibleSeries, pointIndex, value)\n                });\n            }\n            this.pie.series[0].dataSource = this.pieDataSource;\n            this.pie.series[0].xName = 'x';\n            this.pie.series[0].yName = 'y';\n            this.pie.refresh();\n        }\n    },\n    loaded: function (args) {\n        if (this.render) {\n            this.pie.destroy();\n            let selectedTheme = location.hash.split('/')[1];\n            selectedTheme = selectedTheme ? selectedTheme : 'Material';\n            let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\"));\n            this.pie = new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChart\"]({\n                background: 'transparent',\n                series: [{\n                    radius: '65%', animation: { enable: false },\n                    dataSource: this.pieDataSource,\n                    xName: 'x', yName: 'y', dataLabel: { visible: true, position: 'Inside', font: { color: 'white' }, name: 'text' },\n                }],\n                theme: theme,\n                legendSettings: { visible: false }\n            });\n            this.pie.appendTo('#chart_annotation');\n        }\n    },\n    animationComplete: function (args) {\n        this.render = true;\n        _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChart\"].Inject(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChart\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationDataLabel\"]);\n        this.pie = new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AccumulationChart\"]({\n            background: 'transparent',\n            series: [{\n                radius: '65%', animation: { enable: false },\n                dataSource: this.pieDataSource,\n                xName: 'x', yName: 'y', dataLabel: { visible: true, position: 'Inside', name: 'text' },\n            }],\n            load: function (args) {\n                let selectedTheme = location.hash.split('/')[1];\n                selectedTheme = selectedTheme ? selectedTheme : 'Material';\n                args.accumulation.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n            },\n            legendSettings: { visible: false },\n            resized: function (args) {\n                this.pie.refresh();\n            }\n        });\n        this.pie.appendTo('#chart_annotation');\n    },\n\n   load: function (args) {       \n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n    }\n  },\n    updated: function() {\n      this.$nextTick(function() {\n        this.$refs.chart.ej2Instances.refresh();\n      });\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/pie-annotation/App.vue?vue&type=template&id=4724b9c7&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/pie-annotation/App.vue?vue&type=template&id=4724b9c7&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"load\":_vm.load,\"animationComplete\":_vm.animationComplete,\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"align\":\"center\",\"selectionMode\":_vm.selectionMode,\"legendSettings\":_vm.legend,\"selectedDataIndexes\":_vm.selectedDataIndexes,\"chartMouseUp\":_vm.chartMouseUp,\"loaded\":_vm.loaded,\"theme\":_vm.theme}},[_c('e-annotations',[_c('e-annotation',{attrs:{\"content\":'contentTemplate',\"x\":\"20%\",\"y\":\"25%\",\"coordinateUnits\":\"Pixel\",\"region\":\"Series\"},scopedSlots:_vm._u([{key:\"contentTemplate\",fn:function(ref){return [_c('div',{staticStyle:{\"width\":\"200px\",\"height\":\"200px\"},attrs:{\"id\":\"chart_annotation\"}})]}}])})],1),_vm._v(\" \"),_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.dataSource,\"type\":\"StackingColumn\",\"xName\":\"x\",\"yName\":\"y0\",\"name\":\"UK\"}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.dataSource,\"type\":\"StackingColumn\",\"xName\":\"x\",\"yName\":\"y1\",\"name\":\"Germany\"}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.dataSource,\"type\":\"StackingColumn\",\"xName\":\"x\",\"yName\":\"y2\",\"name\":\"France\"}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.dataSource,\"type\":\"StackingColumn\",\"xName\":\"x\",\"yName\":\"y3\",\"name\":\"Italy\"}})],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample demonstrates annotation feature in chart. Accumulation chart is placed in cartesian chart by using annotation.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to render and configure annotation feature in chart. We have used a pie chart to depict\\n        the sales for each year using annotation support, while selecting a particular year from the StackedColumn series,\\n        the respective data's are showed in pie. An annotation can hold any html element as its content, here we have added\\n        the Pie chart as its content.\\n    \")]),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        Chart component features are segregated into individual feature-wise modules. To use Annotation feature, we need to inject\\n        \"),_c('code',[_vm._v(\"ChartAnnotationService\")]),_vm._v(\" into the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" option.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/pie-annotation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });