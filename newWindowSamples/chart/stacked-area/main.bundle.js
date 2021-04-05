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
/******/ 		"chart/stacked-area/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/stacked-area/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/stacked-area/App.vue":
/*!********************************************!*\
  !*** ./Samples/chart/stacked-area/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_571a852c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=571a852c&scoped=true& */ \"./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_571a852c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_571a852c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"571a852c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/stacked-area/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/stacked-area/App.vue?");

/***/ }),

/***/ "./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/stacked-area/App.vue?");

/***/ }),

/***/ "./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_571a852c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=571a852c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_571a852c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_571a852c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/stacked-area/App.vue?");

/***/ }),

/***/ "./Samples/chart/stacked-area/main.js":
/*!********************************************!*\
  !*** ./Samples/chart/stacked-area/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/stacked-area/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/stacked-area/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n      seriesData: [\n                { x: new Date(2000, 0, 1), y: 0.61 },\n                { x: new Date(2001, 0, 1), y: 0.81 }, { x: new Date(2002, 0, 1), y: 0.91 },\n                { x: new Date(2003, 0, 1), y: 1 }, { x: new Date(2004, 0, 1), y: 1.19 },\n                { x: new Date(2005, 0, 1), y: 1.47 }, { x: new Date(2006, 0, 1), y: 1.74 },\n                { x: new Date(2007, 0, 1), y: 1.98 }, { x: new Date(2008, 0, 1), y: 1.99 },\n                { x: new Date(2009, 0, 1), y: 1.70 }, { x: new Date(2010, 0, 1), y: 1.48 },\n                { x: new Date(2011, 0, 1), y: 1.38 }, { x: new Date(2012, 0, 1), y: 1.66 },\n                { x: new Date(2013, 0, 1), y: 1.66 }, { x: new Date(2014, 0, 1), y: 1.67 }\n              ],\n\n      seriesData1: [\n                { x: new Date(2000, 0, 1), y: 0.03 },\n                { x: new Date(2001, 0, 1), y: 0.05 }, { x: new Date(2002, 0, 1), y: 0.06 },\n                { x: new Date(2003, 0, 1), y: 0.09 }, { x: new Date(2004, 0, 1), y: 0.14 },\n                { x: new Date(2005, 0, 1), y: 0.20 }, { x: new Date(2006, 0, 1), y: 0.29 },\n                { x: new Date(2007, 0, 1), y: 0.46 }, { x: new Date(2008, 0, 1), y: 0.64 },\n                { x: new Date(2009, 0, 1), y: 0.75 }, { x: new Date(2010, 0, 1), y: 1.06 },\n                { x: new Date(2011, 0, 1), y: 1.25 }, { x: new Date(2012, 0, 1), y: 1.55 },\n                { x: new Date(2013, 0, 1), y: 1.55 }, { x: new Date(2014, 0, 1), y: 1.65 }\n      ],\n\n      seriesData2: [\n                { x: new Date(2000, 0, 1), y: 0.48 },\n                { x: new Date(2001, 0, 1), y: 0.53 }, { x: new Date(2002, 0, 1), y: 0.57 },\n                { x: new Date(2003, 0, 1), y: 0.61 }, { x: new Date(2004, 0, 1), y: 0.63 },\n                { x: new Date(2005, 0, 1), y: 0.64 }, { x: new Date(2006, 0, 1), y: 0.66 },\n                { x: new Date(2007, 0, 1), y: 0.76 }, { x: new Date(2008, 0, 1), y: 0.77 },\n                { x: new Date(2009, 0, 1), y: 0.55 }, { x: new Date(2010, 0, 1), y: 0.54 },\n                { x: new Date(2011, 0, 1), y: 0.57 }, { x: new Date(2012, 0, 1), y: 0.61 },\n                { x: new Date(2013, 0, 1), y: 0.67 }, { x: new Date(2014, 0, 1), y: 0.67 }\n\n      ],\n\n      seriesData3: [\n                { x: new Date(2000, 0, 1), y: 0.23 },\n                { x: new Date(2001, 0, 1), y: 0.17 }, { x: new Date(2002, 0, 1), y: 0.17 },\n                { x: new Date(2003, 0, 1), y: 0.20 }, { x: new Date(2004, 0, 1), y: 0.23 },\n                { x: new Date(2005, 0, 1), y: 0.36 }, { x: new Date(2006, 0, 1), y: 0.43 },\n                { x: new Date(2007, 0, 1), y: 0.52 }, { x: new Date(2008, 0, 1), y: 0.72 },\n                { x: new Date(2009, 0, 1), y: 1.29 }, { x: new Date(2010, 0, 1), y: 1.38 },\n                { x: new Date(2011, 0, 1), y: 1.82 }, { x: new Date(2012, 0, 1), y: 2.16 },\n                { x: new Date(2013, 0, 1), y: 2.51 }, { x: new Date(2014, 0, 1), y: 2.61 }\n\n      ],\n      //Initializing Primary X Axis\n         primaryXAxis: {\n            valueType: 'DateTime',\n            intervalType: 'Years',\n            majorGridLines: { width: 0 },\n            labelFormat: 'y',\n            edgeLabelPlacement: 'Shift',\n            lineStyle: { width: 0},\n            majorTickLines: { width: 0}\n        },\n\n      //Initializing Primary Y Axis\n         primaryYAxis:\n        {\n            title: 'Spends',\n            minimum: 0, maximum: 7, interval: 1,\n            labelFormat: '{value}B',\n            lineStyle: { width: 0},\n            majorTickLines: { width: 0}\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n\n        width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '60%',\n      title: \"Trend in Sales of Ethical Produce\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"StackingAreaSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"]]\n  },\n  methods: {\n   },\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/stacked-area/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              chartArea: _vm.chartArea,\n              width: _vm.width\n            }\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    type: \"StackingArea\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Organic\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData1,\n                    type: \"StackingArea\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Fair-trade\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData2,\n                    type: \"StackingArea\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Veg Alternatives\"\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData3,\n                    type: \"StackingArea\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    name: \"Others\"\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Trend in the sales of ethical product is visualized with default stacked area series in chart. \\n        Legend in the sample shows the information about the series.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n    In this example, you can see how to render and configure the stacking area type charts. Stacks the series on top of another series to avoid the overlapping of series with one another, when rendering more than one area series in same chart.\\n    You can use \"\n        ),\n        _c(\"code\", [_vm._v(\"fill\")]),\n        _vm._v(\" properties to customize the stacked area. \"),\n        _c(\"code\", [_vm._v(\"dataLabel\")]),\n        _vm._v(\" is used to represent individual data and its value.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Chart component features are segregated into individual feature-wise modules. To use stacking area series, we need to inject\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"StackingAreaSeries\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [StackingAreaSeries] }\")]),\n        _vm._v(\" method.\\n        \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            More information on the stacking area series can be found in this\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/stacked-area/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });