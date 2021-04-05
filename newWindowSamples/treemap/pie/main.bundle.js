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
/******/ 		"treemap/pie/main": 0
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
/******/ 	deferredModules.push(["./Samples/treemap/pie/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/treemap/pie/App.vue":
/*!*************************************!*\
  !*** ./Samples/treemap/pie/App.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_92219bae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=92219bae& */ \"./Samples/treemap/pie/App.vue?vue&type=template&id=92219bae&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/treemap/pie/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_92219bae___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_92219bae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/treemap/pie/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/treemap/pie/App.vue?");

/***/ }),

/***/ "./Samples/treemap/pie/App.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./Samples/treemap/pie/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/treemap/pie/App.vue?");

/***/ }),

/***/ "./Samples/treemap/pie/App.vue?vue&type=template&id=92219bae&":
/*!********************************************************************!*\
  !*** ./Samples/treemap/pie/App.vue?vue&type=template&id=92219bae& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_92219bae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=92219bae& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/App.vue?vue&type=template&id=92219bae&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_92219bae___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_92219bae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/App.vue?");

/***/ }),

/***/ "./Samples/treemap/pie/main.js":
/*!*************************************!*\
  !*** ./Samples/treemap/pie/main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/treemap/pie/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/main.js?");

/***/ }),

/***/ "./Samples/treemap/pie/pie-temp.vue":
/*!******************************************!*\
  !*** ./Samples/treemap/pie/pie-temp.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pie_temp_vue_vue_type_template_id_18689f7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-temp.vue?vue&type=template&id=18689f7d& */ \"./Samples/treemap/pie/pie-temp.vue?vue&type=template&id=18689f7d&\");\n/* harmony import */ var _pie_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie-temp.vue?vue&type=script&lang=js& */ \"./Samples/treemap/pie/pie-temp.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _pie_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _pie_temp_vue_vue_type_template_id_18689f7d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _pie_temp_vue_vue_type_template_id_18689f7d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/treemap/pie/pie-temp.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/treemap/pie/pie-temp.vue?");

/***/ }),

/***/ "./Samples/treemap/pie/pie-temp.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/treemap/pie/pie-temp.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_pie_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./pie-temp.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/pie-temp.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_temp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/treemap/pie/pie-temp.vue?");

/***/ }),

/***/ "./Samples/treemap/pie/pie-temp.vue?vue&type=template&id=18689f7d&":
/*!*************************************************************************!*\
  !*** ./Samples/treemap/pie/pie-temp.vue?vue&type=template&id=18689f7d& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_temp_vue_vue_type_template_id_18689f7d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./pie-temp.vue?vue&type=template&id=18689f7d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/pie-temp.vue?vue&type=template&id=18689f7d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_temp_vue_vue_type_template_id_18689f7d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pie_temp_vue_vue_type_template_id_18689f7d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/pie-temp.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/pie/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-treemap */ \"./node_modules/@syncfusion/ej2-vue-treemap/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module '../treemap/treemap-data/pie-chart'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _pie_temp_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pie-temp.vue */ \"./Samples/treemap/pie/pie-temp.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"AccumulationChartPlugin\"]);\n_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"AccumulationChart\"].Inject(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"AccumulationTooltip\"]);\nlet chartCollection = [];\nlet count = 0;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        tooltipSettings: {\n            visible: true,\n            format: ' ${Gender} : ${Population}'\n        },\n        titleSettings: {\n            text: 'Population of the continents based on gender and age group - 2011',\n            textStyle: { size: '15px' }\n        },\n        useGroupingSeparator: true,\n        dataSource: !(function webpackMissingModule() { var e = new Error(\"Cannot find module '../treemap/treemap-data/pie-chart'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n        weightValuePath: 'Population',\n        leafItemSettings: {\n            labelPath: 'Gender',\n            fill: '#A1317D',\n            showLabels: false,\n            border: { color: 'black', width: 0.5 },\n            labelFormat: '${Gender} : ${Population}',\n            templatePosition: 'Center',\n            labelTemplate: function () { return {template: _pie_temp_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}; },\n        },\n        levels: [\n            {\n                groupPath: 'Continent', fill: '#7E2361', border: { color: 'black', width: 1, },\n                headerAlignment: 'Center', groupGap: 0, headerStyle: { size: '14px'}\n            }\n        ]\n    }\n},\nmethods:{\n    /* custom code start */\n    load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material'; \n        args.treemap.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));\n    },\n    /* custom code end */\n    tooltipRendering:function(args){\n            if (args.item['groupIndex'] !== 1 ) {\n                args.cancel = true;\n            }\n    },\n    loaded: function(args){\n        let template = document.getElementById(args.treemap.element.id + '_Label_Template_Group');\n        if (template) {\n            for (let i = 0; i < template.childElementCount; i++) {\n               this.AccumulationChartRender((template.childNodes[i].childNodes[0]).id);\n            }\n            count = 0;\n        }\n    },\n    resize: function(args){\n            for (let i = 0; i < chartCollection.length; i++) {\n                chartCollection[i].destroy();\n        }\n    },\n    AccumulationChartRender:function(id) {\n    let chartData = this.getData();\n    let dataSource = chartData['data'];\n    let name = chartData['name'];\n    let chart= new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"AccumulationChart\"]({\n        legendSettings: {visible: false},\n        series: [\n            {\n                explode: true,\n                explodeIndex: 0,\n                explodeOffset: '20%',\n                name: name,\n                palettes: ['#1E1E1E', '#00BDAE', '#FFFFFF'],\n                dataSource: dataSource,\n                dataLabel: {\n                    visible: false\n                },\n                type: 'Pie',\n                xName: 'x',\n                yName: 'y'\n            }\n        ],\n        \n        background: 'transparent',\n        tooltip: {\n            enable: true,\n            format: '${point.x} : ${point.y}%'\n        }\n    });\n    chart.appendTo('#' + id);\n    chartCollection.push(chart);\n},\n getData:function() {\n    let dataSource;\n    let dataName;\n    if (count === 0) {\n        dataSource = [\n            { 'x': '0-15 years', y: 40.8 }, { 'x': '15-64 years', y: 56.2 },\n            { 'x': 'Above 64 years', y: 3.0 }\n        ];\n        dataName = 'Asia';\n    } else if (count === 1) {\n        dataSource = [\n            { 'x': '0-15 years', y: 15.5 }, { 'x': '15-64 years', y: 12.9 },\n            { 'x': 'Above 64 years', y: 41.4 }\n        ];\n        dataName = 'Asia';\n    } else if (count === 2) {\n        dataSource = [\n            { 'x': '0-15 years', y: 25.1 }, { 'x': '15-64 years', y: 67.8 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'Africa';\n    } else if (count === 3) {\n        dataSource = [\n            { 'x': '0-15 years', y: 15.3 }, { 'x': '15-64 years', y: 68.4 },\n            { 'x': 'Above 64 years', y: 16.3 }\n        ];\n        dataName = 'Africa';\n    } else if (count === 4) {\n        dataSource = [\n            { 'x': '0-15 years', y: 22.8 }, { 'x': '15-64 years', y: 65.9 },\n            { 'x': 'Above 64 years', y: 11.4 }\n        ];\n        dataName = 'Europe';\n    } else if (count === 5) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'Europe';\n    } else if (count === 6) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'South America';\n    } else if (count === 7) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'South America';\n    } else if (count === 8) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'Oceania';\n    } else if (count === 9) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'Oceania';\n    } else if (count === 10) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'North America';\n    } else if (count === 11) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'North America';\n    } else if (count === 12) {\n        dataSource = [\n            { 'x': '0-15 years', y: 26.8 }, { 'x': '15-64 years', y: 66.1 },\n            { 'x': 'Above 64 years', y: 7.1 }\n        ];\n        dataName = 'South America';\n    }\n    count++;\n    return new Object({ name: dataName, data: dataSource });\n}\n},\nprovide:{\n    accumulationchart:[_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"PieSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"AccumulationTooltip\"]],\n    treemap:[_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_1__[\"TreeMapTooltip\"]]\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/pie-temp.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/pie/pie-temp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data () {\n    return {\n        data: {}\n    }\n  },\n  computed: {\n      style: function() {\n        return \"height:\" + this.data.PieHeight + \";width:\" + this.data.PieWidth;\n      }\n  }\n});\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/pie-temp.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/App.vue?vue&type=template&id=92219bae&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/pie/App.vue?vue&type=template&id=92219bae& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\"ejs-treemap\", {\n          attrs: {\n            id: \"container\",\n            load: _vm.load,\n            tooltipRendering: _vm.tooltipRendering,\n            align: \"center\",\n            loaded: _vm.loaded,\n            resize: _vm.resize,\n            tooltipSettings: _vm.tooltipSettings,\n            titleSettings: _vm.titleSettings,\n            format: \"n\",\n            useGroupingSeparator: _vm.useGroupingSeparator,\n            dataSource: _vm.dataSource,\n            weightValuePath: _vm.weightValuePath,\n            leafItemSettings: _vm.leafItemSettings,\n            levels: _vm.levels\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } },\n      [\n        _vm._v(\"Source:\\n    \"),\n        _c(\n          \"a\",\n          {\n            attrs: { href: \" http://en.worldstat.info/Asia/\", target: \"_blank\" }\n          },\n          [_vm._v(\"en.worldstat.info\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the population level of various continents in 2011 based on the gender and age group.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render a pie chart as a template for leaf items in TreeMap. Any custom HTML element can be rendered as label template.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.\\n    \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/treemap/pie/pie-temp.vue?vue&type=template&id=18689f7d&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/treemap/pie/pie-temp.vue?vue&type=template&id=18689f7d& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { style: _vm.style, attrs: { id: \"\" + _vm.data.Id } })\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/treemap/pie/pie-temp.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });