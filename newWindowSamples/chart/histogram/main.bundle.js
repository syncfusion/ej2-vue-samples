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

/***/ "./Samples/chart/histogram/main.js":
/*!*****************************************!*\
  !*** ./Samples/chart/histogram/main.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/histogram/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/histogram/main.js?");

/***/ }),

/***/ "./Samples/chart/histogram/App.vue":
/*!*****************************************!*\
  !*** ./Samples/chart/histogram/App.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_3e9f63a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3e9f63a1 */ \"./Samples/chart/histogram/App.vue?vue&type=template&id=3e9f63a1\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/histogram/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_3e9f63a1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chart/histogram/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/histogram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/histogram/App.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/histogram/App.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent,\n    'e-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesCollectionDirective,\n    'e-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesDirective\n  },\n  data: function () {\n    return {\n      chartData :[{ Score: 5.250 },\n      { Score: 7.750 },\n      { Score: 0 },\n      { Score: 8.275 },\n      { Score: 9.750 },\n      { Score: 7.750 },\n      { Score: 8.275 },\n      { Score: 6.250 },\n      { Score: 5.750 },\n      { Score: 5.250 },\n      { Score: 23.000 },\n      { Score: 26.500 },\n      { Score: 27.750 },\n      { Score: 25.025 },\n      { Score: 26.500 },\n      { Score: 28.025 },\n      { Score: 29.250 },\n      { Score: 26.750 },\n      { Score: 27.250 },\n      { Score: 26.250 },\n      { Score: 25.250 },\n      { Score: 34.500 },\n      { Score: 25.625 },\n      { Score: 25.500 },\n      { Score: 26.625 },\n      { Score: 36.275 },\n      { Score: 36.250 },\n      { Score: 26.875 },\n      { Score: 40.000 },\n      { Score: 43.000 },\n      { Score: 46.500 },\n      { Score: 47.750 },\n      { Score: 45.025 },\n      { Score: 56.500 },\n      { Score: 58.025 },\n      { Score: 59.250 },\n      { Score: 56.750 },\n      { Score: 57.250 },\n      { Score: 46.250 },\n      { Score: 55.250 },\n      { Score: 44.500 },\n      { Score: 45.525 },\n      { Score: 55.500 },\n      { Score: 46.625 },\n      { Score: 46.275 },\n      { Score: 56.250 },\n      { Score: 46.875 },\n      { Score: 43.000 },\n      { Score: 46.250 },\n      { Score: 55.250 },\n      { Score: 44.500 },\n      { Score: 45.425 },\n      { Score: 55.500 },\n      { Score: 56.625 },\n      { Score: 46.275 },\n      { Score: 56.250 },\n      { Score: 46.875 },\n      { Score: 43.000 },\n      { Score: 46.250 },\n      { Score: 55.250 },\n      { Score: 44.500 },\n      { Score: 45.425 },\n      { Score: 55.500 },\n      { Score: 46.625 },\n      { Score: 56.275 },\n      { Score: 46.250 },\n      { Score: 56.875 },\n      { Score: 41.000 },\n      { Score: 63.000 },\n      { Score: 66.500 },\n      { Score: 67.750 },\n      { Score: 65.025 },\n      { Score: 66.500 },\n      { Score: 76.500 },\n      { Score: 78.025 },\n      { Score: 79.250 },\n      { Score: 76.750 },\n      { Score: 77.250 },\n      { Score: 66.250 },\n      { Score: 75.250 },\n      { Score: 74.500 },\n      { Score: 65.625 },\n      { Score: 75.500 },\n      { Score: 76.625 },\n      { Score: 76.275 },\n      { Score: 66.250 },\n      { Score: 66.875 },\n      { Score: 80.000 },\n      { Score: 85.250 },\n      { Score: 87.750 },\n      { Score: 89.000 },\n      { Score: 88.275 },\n      { Score: 89.750 },\n      { Score: 97.750 },\n      { Score: 98.275 },\n      { Score: 96.250 },\n      { Score: 95.750 },\n      { Score: 95.250 }\n      ],\n      primaryXAxis: {\n        majorGridLines: { width: 0 }, title: 'Score of Final Examination',\n        minimum: 0, maximum: 100,\n        edgeLabelPlacement: 'Shift'\n      },\n      chartArea: { border: { width: 0 } },\n      legendSettings: { visible: false },\n      primaryYAxis: {\n        title: 'Number of Students',\n        minimum: 0, maximum: 50, interval: 10,\n        lineStyle: { width: 0 }\n      },\n      marker: {\n        visible: true, height: 7, width: 7,\n        dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } }\n      },\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '100%' : '75%',\n      title: 'Examination Result', tooltip: { enable: true, header:\"\" },\n      theme: theme,\n      binInterval: 20,\n      columnWidth: 0.99,\n      showNormalDistribution: true\n\n\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.HistogramSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.DataLabel, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Tooltip]\n  },\n  methods: {\n    load: function (args) {\n      if (selectedTheme === 'highcontrast') {\n        args.chart.series[0].marker.dataLabel.font.color = '#000000';\n      }\n    }\n  },\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/histogram/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/histogram/App.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./Samples/chart/histogram/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/histogram/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/histogram/App.vue?");

/***/ }),

/***/ "./Samples/chart/histogram/App.vue?vue&type=template&id=3e9f63a1":
/*!***********************************************************************!*\
  !*** ./Samples/chart/histogram/App.vue?vue&type=template&id=3e9f63a1 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_3e9f63a1__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_3e9f63a1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=3e9f63a1 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/histogram/App.vue?vue&type=template&id=3e9f63a1\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/histogram/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/histogram/App.vue?vue&type=template&id=3e9f63a1":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/histogram/App.vue?vue&type=template&id=3e9f63a1 ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { align: \"center\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This <a target=\\\"_blank\\\" href=\\\"https://www.syncfusion.com/vue-components/vue-charts/chart-types/histogram-chart\\\">Vue Histogram Chart</a> example visualizes final examination results. The number of students between each interval is shown in data labels. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to render and configure the histogram chart. The histogram chart is a bar (column) chart used for frequency distribution in which the widths of the bars are proportional to classes into which variables have been divided and the heights of the bars are proportional to class frequencies. The <code>DataLabel</code> property is used to present details on individual data points. </p><p><code>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a point or tap a point in touch enabled devices. </p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> Chart component features are segregated into individual feature-wise modules. To use histogram series, you should inject the <code>HistogramSeries </code> module using the <code>Chart.Inject(HistogramSeries)</code> method. </p><p> More information on the histogram series can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/chart/chart-type/histogram\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series\")\n  const _component_e_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series-collection\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"chartHistogram\",\n        primaryXAxis: _ctx.primaryXAxis,\n        chartArea: _ctx.chartArea,\n        legendSettings: _ctx.legendSettings,\n        primaryYAxis: _ctx.primaryYAxis,\n        width: _ctx.width,\n        title: _ctx.title,\n        load: $options.load,\n        tooltip: _ctx.tooltip,\n        theme: _ctx.theme\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                type: \"Histogram\",\n                width: \"2\",\n                yName: \"Score\",\n                name: \"Score\",\n                dataSource: _ctx.chartData,\n                binInterval: _ctx.binInterval,\n                marker: _ctx.marker,\n                showNormalDistribution: _ctx.showNormalDistribution,\n                columnWidth: _ctx.columnWidth\n              }, null, 8 /* PROPS */, [\"dataSource\", \"binInterval\", \"marker\", \"showNormalDistribution\", \"columnWidth\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"primaryXAxis\", \"chartArea\", \"legendSettings\", \"primaryYAxis\", \"width\", \"title\", \"load\", \"tooltip\", \"theme\"])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/histogram/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chart/histogram/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/histogram/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;