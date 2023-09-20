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

/***/ "./Samples/chart/stacked-area/main.js":
/*!********************************************!*\
  !*** ./Samples/chart/stacked-area/main.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/stacked-area/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/stacked-area/main.js?");

/***/ }),

/***/ "./Samples/chart/stacked-area/App.vue":
/*!********************************************!*\
  !*** ./Samples/chart/stacked-area/App.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_571a852c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=571a852c */ \"./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_571a852c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chart/stacked-area/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/stacked-area/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent,\n    'e-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesCollectionDirective,\n    'e-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesDirective\n  },\n  data: function() {\n    return {\n         theme: theme,\n      seriesData: [\n                { x: new Date(2000, 0, 1), y: 0.61 },\n                { x: new Date(2001, 0, 1), y: 0.81 }, { x: new Date(2002, 0, 1), y: 0.91 },\n                { x: new Date(2003, 0, 1), y: 1 }, { x: new Date(2004, 0, 1), y: 1.19 },\n                { x: new Date(2005, 0, 1), y: 1.47 }, { x: new Date(2006, 0, 1), y: 1.74 },\n                { x: new Date(2007, 0, 1), y: 1.98 }, { x: new Date(2008, 0, 1), y: 1.99 },\n                { x: new Date(2009, 0, 1), y: 1.70 }, { x: new Date(2010, 0, 1), y: 1.48 },\n                { x: new Date(2011, 0, 1), y: 1.38 }, { x: new Date(2012, 0, 1), y: 1.66 },\n                { x: new Date(2013, 0, 1), y: 1.66 }, { x: new Date(2014, 0, 1), y: 1.67 }\n              ],\n\n      seriesData1: [\n                { x: new Date(2000, 0, 1), y: 0.03 },\n                { x: new Date(2001, 0, 1), y: 0.05 }, { x: new Date(2002, 0, 1), y: 0.06 },\n                { x: new Date(2003, 0, 1), y: 0.09 }, { x: new Date(2004, 0, 1), y: 0.14 },\n                { x: new Date(2005, 0, 1), y: 0.20 }, { x: new Date(2006, 0, 1), y: 0.29 },\n                { x: new Date(2007, 0, 1), y: 0.46 }, { x: new Date(2008, 0, 1), y: 0.64 },\n                { x: new Date(2009, 0, 1), y: 0.75 }, { x: new Date(2010, 0, 1), y: 1.06 },\n                { x: new Date(2011, 0, 1), y: 1.25 }, { x: new Date(2012, 0, 1), y: 1.55 },\n                { x: new Date(2013, 0, 1), y: 1.55 }, { x: new Date(2014, 0, 1), y: 1.65 }\n      ],\n\n      seriesData2: [\n                { x: new Date(2000, 0, 1), y: 0.48 },\n                { x: new Date(2001, 0, 1), y: 0.53 }, { x: new Date(2002, 0, 1), y: 0.57 },\n                { x: new Date(2003, 0, 1), y: 0.61 }, { x: new Date(2004, 0, 1), y: 0.63 },\n                { x: new Date(2005, 0, 1), y: 0.64 }, { x: new Date(2006, 0, 1), y: 0.66 },\n                { x: new Date(2007, 0, 1), y: 0.76 }, { x: new Date(2008, 0, 1), y: 0.77 },\n                { x: new Date(2009, 0, 1), y: 0.55 }, { x: new Date(2010, 0, 1), y: 0.54 },\n                { x: new Date(2011, 0, 1), y: 0.57 }, { x: new Date(2012, 0, 1), y: 0.61 },\n                { x: new Date(2013, 0, 1), y: 0.67 }, { x: new Date(2014, 0, 1), y: 0.67 }\n\n      ],\n\n      seriesData3: [\n                { x: new Date(2000, 0, 1), y: 0.23 },\n                { x: new Date(2001, 0, 1), y: 0.17 }, { x: new Date(2002, 0, 1), y: 0.17 },\n                { x: new Date(2003, 0, 1), y: 0.20 }, { x: new Date(2004, 0, 1), y: 0.23 },\n                { x: new Date(2005, 0, 1), y: 0.36 }, { x: new Date(2006, 0, 1), y: 0.43 },\n                { x: new Date(2007, 0, 1), y: 0.52 }, { x: new Date(2008, 0, 1), y: 0.72 },\n                { x: new Date(2009, 0, 1), y: 1.29 }, { x: new Date(2010, 0, 1), y: 1.38 },\n                { x: new Date(2011, 0, 1), y: 1.82 }, { x: new Date(2012, 0, 1), y: 2.16 },\n                { x: new Date(2013, 0, 1), y: 2.51 }, { x: new Date(2014, 0, 1), y: 2.61 }\n\n      ],\n      //Initializing Primary X Axis\n         primaryXAxis: {\n            valueType: 'DateTime',\n            intervalType: 'Years',\n            majorGridLines: { width: 0 },\n            labelFormat: 'y',\n            edgeLabelPlacement: 'Shift',\n        },\n\n      //Initializing Primary Y Axis\n         primaryYAxis:\n        {\n            title: 'Amount of sales in €',\n            minimum: 0, maximum: 7, interval: 1,\n            labelFormat: '{value}K',\n            lineStyle: { width: 0},\n            majorTickLines: { width: 0},\n            minorTickLines: { width: 0 }\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n      border: { width: 2, color:' #666666'},\n      tooltip: {\n        enable: true\n      },\n      legend: {enableHighlight : true},\n      width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '100%' : '75%',\n      title: \"Amount of Sales by Payment Mode\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.StackingAreaSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Legend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.DateTime, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Highlight]\n  },\n  methods: {\n   },\n \n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/stacked-area/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/stacked-area/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/stacked-area/App.vue?");

/***/ }),

/***/ "./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c":
/*!**************************************************************************!*\
  !*** ./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_571a852c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_571a852c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=571a852c */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/stacked-area/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/stacked-area/App.vue?vue&type=template&id=571a852c ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { align: \"center\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This Vue Stacked Area example visualizes the amount of sales by payment mode with default stacked area series. A legend in the sample shows information about the series. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to render and configure the stacked area chart. This chart visualizes data with y-values stacked one over another in a series order. It shows the relationship between individual values to the total sum of points. </p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> Chart component features are segregated into individual feature-wise modules. To use stacking area series, we need to inject <code>StackingAreaSeries</code> module using <code>provide: { chart: [StackingAreaSeries] }</code> method. </p><p> More information about the stacked area series can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/chart/chart-type/stack-area\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series\")\n  const _component_e_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series-collection\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n        style: {\"display\":\"block\"},\n        theme: _ctx.theme,\n        align: \"center\",\n        id: \"chartcontainer\",\n        title: _ctx.title,\n        primaryXAxis: _ctx.primaryXAxis,\n        primaryYAxis: _ctx.primaryYAxis,\n        chartArea: _ctx.chartArea,\n        width: _ctx.width,\n        tooltip: _ctx.tooltip,\n        legendSettings: _ctx.legend\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData,\n                type: \"StackingArea\",\n                xName: \"x\",\n                yName: \"y\",\n                name: \"Bank Transfer\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData1,\n                type: \"StackingArea\",\n                xName: \"x\",\n                yName: \"y\",\n                name: \"Credit Card\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData2,\n                type: \"StackingArea\",\n                xName: \"x\",\n                yName: \"y\",\n                name: \"Debit Card\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData3,\n                type: \"StackingArea\",\n                xName: \"x\",\n                yName: \"y\",\n                name: \"Cash\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"theme\", \"title\", \"primaryXAxis\", \"primaryYAxis\", \"chartArea\", \"width\", \"tooltip\", \"legendSettings\"])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/stacked-area/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chart/stacked-area/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/stacked-area/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;