/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/stock-chart/period-customization/main.js":
/*!**********************************************************!*\
  !*** ./Samples/stock-chart/period-customization/main.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/stock-chart/period-customization/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/stock-chart/period-customization/main.js?");

/***/ }),

/***/ "./Samples/stock-chart/period-customization/App.vue":
/*!**********************************************************!*\
  !*** ./Samples/stock-chart/period-customization/App.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_3f3290d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3f3290d5 */ \"./Samples/stock-chart/period-customization/App.vue?vue&type=template&id=3f3290d5\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/stock-chart/period-customization/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_3f3290d5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/stock-chart/period-customization/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/stock-chart/period-customization/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stock-chart/period-customization/App.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stock-chart/period-customization/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i,  'Contrast');\n\nfunction GetZoomingData() {\n  let series = [];\n  let point1;\n  let value = 80;\n  for (let i = 1; i < 1440; i++) {\n    if (Math.random() > 0.5) {\n      value += Math.random();\n    } else {\n      value -= Math.random();\n    }\n    point1 = { x: new Date(2000, 1, 1,0, i), y: value.toFixed(1) };\n    series.push(point1);\n  }\n  return { series: series };\n}\nlet seriesData1 = GetZoomingData().series;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-stockchart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StockChartComponent,\n    'e-stockchart-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StockChartSeriesCollectionDirective,\n    'e-stockchart-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StockChartSeriesDirective,\n    'e-stockchart-periods': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StockChartPeriodsDirective,\n    'e-stockchart-period': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StockChartPeriodDirective\n  },\n  data: function() {\n    return {\n      theme: theme,\n      seriesData: seriesData1,\n      seriesType:[],\n      indicatorType:[],\n      trendlineType: [],\n      exportType: [],\n      primaryXAxis: {\n        valueType: \"DateTime\",\n        majorGridLines: { color: \"transparent\" },\n        crosshairTooltip: { enable: true }\n      },\n      primaryYAxis: {\n        lineStyle: { color: \"transparent\" },\n        majorTickLines: { color: \"transparent\", width: 0 },\n        crosshairTooltip: { enable: true }\n      },\n     \n       title: 'AAPL stock price by minutes',\n       crosshair: {\n          enable: true,\n          lineType: 'Both' \n        },\n        border: { width: 0}, \n       chartArea: {\n        border: {\n          width: 0\n        }\n      }\n    };\n  },\n  provide: {\n    stockChart: [\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.DateTime,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.LineSeries,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SplineSeries,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Crosshair,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.CandleSeries,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.HiloOpenCloseSeries,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.HiloSeries,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.RangeAreaSeries,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Trendlines,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.EmaIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.RsiIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.BollingerBands,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.TmaIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.MomentumIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SmaIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AtrIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AccumulationDistributionIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.MacdIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StochasticIndicator,\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Export\n    ]\n  },\n  methods: {}\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/stock-chart/period-customization/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/stock-chart/period-customization/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./Samples/stock-chart/period-customization/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stock-chart/period-customization/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/stock-chart/period-customization/App.vue?");

/***/ }),

/***/ "./Samples/stock-chart/period-customization/App.vue?vue&type=template&id=3f3290d5":
/*!****************************************************************************************!*\
  !*** ./Samples/stock-chart/period-customization/App.vue?vue&type=template&id=3f3290d5 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_3f3290d5__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_3f3290d5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=3f3290d5 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stock-chart/period-customization/App.vue?vue&type=template&id=3f3290d5\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/stock-chart/period-customization/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stock-chart/period-customization/App.vue?vue&type=template&id=3f3290d5":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/stock-chart/period-customization/App.vue?vue&type=template&id=3f3290d5 ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p>This sample visualizes data for intraday using stock chart. Period and range selector help us to navigate different of data.</p></div><div id=\\\"description\\\"><p> In this example, you can see how to render and configure the Stock chart. <code>LineSeries</code> is used to represent selected data value. </p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> The Stock chart component features are segregated into individual feature-wise modules. To use date-time axis, inject the <code>DateTime</code> and <code>LineSeries</code> module using <code> provide: { stockchart: [ DateTime, LineSeries] },</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_stockchart_period = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-stockchart-period\")\n  const _component_e_stockchart_periods = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-stockchart-periods\")\n  const _component_e_stockchart_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-stockchart-series\")\n  const _component_e_stockchart_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-stockchart-series-collection\")\n  const _component_ejs_stockchart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-stockchart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_stockchart, {\n        style: {\"display\":\"block\"},\n        id: \"stockchartcontainerperiod\",\n        primaryXAxis: _ctx.primaryXAxis,\n        primaryYAxis: _ctx.primaryYAxis,\n        chartArea: _ctx.chartArea,\n        seriesType: _ctx.seriesType,\n        indicatorType: _ctx.indicatorType,\n        trendlineType: _ctx.trendlineType,\n        exportType: _ctx.exportType,\n        crosshair: _ctx.crosshair,\n        border: _ctx.border,\n        title: _ctx.title,\n        theme: _ctx.theme\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_periods, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_period, {\n                intervalType: \"Minutes\",\n                interval: \"1\",\n                text: \"1m\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_period, {\n                intervalType: \"Minutes\",\n                interval: \"30\",\n                text: \"30m\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_period, {\n                intervalType: \"Hours\",\n                interval: \"1\",\n                text: \"1H\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_period, {\n                intervalType: \"Hours\",\n                interval: \"12\",\n                text: \"12H\",\n                selected: \"true\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_period, { text: \"1D\" })\n            ]),\n            _: 1 /* STABLE */\n          }),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_stockchart_series, {\n                dataSource: _ctx.seriesData,\n                type: \"Line\",\n                xName: \"x\",\n                yName: \"y\",\n                name: \"Apple Inc\"\n              }, null, 8 /* PROPS */, [\"dataSource\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"primaryXAxis\", \"primaryYAxis\", \"chartArea\", \"seriesType\", \"indicatorType\", \"trendlineType\", \"exportType\", \"crosshair\", \"border\", \"title\", \"theme\"])\n    ]),\n    _hoisted_2\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/stock-chart/period-customization/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"stock-chart/period-customization/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_charts_vue_samples"] = self["webpackChunkej2_charts_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/stock-chart/period-customization/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;