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

/***/ "./Samples/chart/default-pie/main.js":
/*!*******************************************!*\
  !*** ./Samples/chart/default-pie/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/default-pie/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/default-pie/main.js?");

/***/ }),

/***/ "./Samples/chart/default-pie/App.vue":
/*!*******************************************!*\
  !*** ./Samples/chart/default-pie/App.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1105797d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1105797d */ \"./Samples/chart/default-pie/App.vue?vue&type=template&id=1105797d\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/default-pie/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1105797d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chart/default-pie/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/default-pie/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/default-pie/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/default-pie/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i,  'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-accumulationchart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.AccumulationChartComponent,\n    'e-accumulation-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.AccumulationSeriesCollectionDirective,\n    'e-accumulation-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.AccumulationSeriesDirective\n  },\n  data: function() {\n    return {\n         theme: theme,\n         seriesData: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ?\n        [{ Browser: 'Chrome', Users: 59.28, DataLabelMappingName: 'Chrome: 59.28%' },\n          { Browser: 'Safari', Users: 4.73, DataLabelMappingName: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? 'Safari <br> 4.73%' :  'Safari: 4.73%' },\n          { Browser: 'Opera', Users: 6.12, DataLabelMappingName: 'Opera: 6.12%' },\n          { Browser: 'Edge', Users: 7.48, DataLabelMappingName: 'Edge: 7.48%' },\n          { Browser: 'Others', Users: 22.39, DataLabelMappingName: 'Others: 22.39%' }\n        ] : [\n          { Browser: \"Chrome\", Users: 59.28, DataLabelMappingName: \"  Chrome: 59.28%\" },\n          { Browser: \"UC Browser\", Users: 4.37, DataLabelMappingName: \"  UC Browser: 4.37%\" },\n          { Browser: \"Opera\", Users: 3.12, DataLabelMappingName: \"  Opera: 3.12%\" },\n          { Browser: \"Sogou Explorer\", Users: 1.73, DataLabelMappingName: \"  Sogou Explorer: 1.73%\" },\n          { Browser: \"QQ\", Users: 3.96, DataLabelMappingName: \"  QQ: 3.96%\" },\n          { Browser: \"Safari\", Users: 4.73, DataLabelMappingName: \"  Safari: 4.73%\" },\n          { Browser: \"Internet Explorer\", Users: 6.12, DataLabelMappingName: \"  Internet Explorer: 6.12%\" },\n          { Browser: \"Edge\", Users: 7.48, DataLabelMappingName: \"  Edge: 7.48%\" },\n          { Browser: \"Others\", Users: 9.57, DataLabelMappingName: \"  Others: 9.57%\" },\n        ],\n\n     dataLabel: {\n                visible: true,\n                position: 'Outside', name: 'DataLabelMappingName',\n                font: {\n                        fontWeight: '600'\n                    },\n                connectorStyle: { length: '20px', type: 'Curve'}\n                },\n                radius: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? '40%' : '70%',\n        legendSettings: {\n            visible: false,\n        },\n\n    tooltip: {  \n        enable: true,\n        format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',\n        header:'', \n    },\n      enableSmartLabels: true,\n      enableAnimation: true,\n      startAngle: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice ? '55' : '35', \n      explodeOffset: '10%',\n      explodeIndex : 0,\n      title: \"Browser Market Share\"\n    };\n  },\n  provide: {\n    accumulationchart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.AccumulationLegend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.PieSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.AccumulationTooltip, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.AccumulationDataLabel]\n  },\n  \n  methods: {\n  }\n\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/default-pie/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/default-pie/App.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./Samples/chart/default-pie/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/default-pie/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/default-pie/App.vue?");

/***/ }),

/***/ "./Samples/chart/default-pie/App.vue?vue&type=template&id=1105797d":
/*!*************************************************************************!*\
  !*** ./Samples/chart/default-pie/App.vue?vue&type=template&id=1105797d ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1105797d__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1105797d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1105797d */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/default-pie/App.vue?vue&type=template&id=1105797d\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/default-pie/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/default-pie/App.vue?vue&type=template&id=1105797d":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/default-pie/App.vue?vue&type=template&id=1105797d ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { align: \"center\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div></div><div id=\\\"action-description\\\"><p> This Vue Pie Chart example demonstrates a pie chart for mobile browsers usage statistics. Datalabels show information about the points. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to render and configure a pie chart. The pie chart is a circular graphic, which is ideal for displaying categories as a proportion or a percentage of the whole. The radius of the pie chart can be customized using the <code>Radius</code> property. </p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> Accumulation Chart component features are segregated into individual feature-wise modules. To use pie chart, we need to inject <code>PieSeries</code> module using <code>provide: { chart: [PieSeries] }</code> method. </p><p><code>Tooltip</code> is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch-enabled devices. </p><p> More information about the pie series can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/accumulation-chart/pie-dough-nut/#pie-chart\\\">documentation section</a>. </p></div>\", 3)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_accumulation_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-accumulation-series\")\n  const _component_e_accumulation_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-accumulation-series-collection\")\n  const _component_ejs_accumulationchart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-accumulationchart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_accumulationchart, {\n        ref: \"pie\",\n        theme: _ctx.theme,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"chartcontainer\",\n        title: _ctx.title,\n        legendSettings: _ctx.legendSettings,\n        tooltip: _ctx.tooltip,\n        enableSmartLables: \"true\",\n        enableAnimation: _ctx.enableAnimation,\n        enableBorderOnMouseMove: false\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_accumulation_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_accumulation_series, {\n                dataSource: _ctx.seriesData,\n                startAngle: _ctx.startAngle,\n                explodeOffset: _ctx.explodeOffset,\n                explodeIndex: _ctx.explodeIndex,\n                radius: _ctx.radius,\n                xName: \"Browser\",\n                yName: \"Users\",\n                dataLabel: _ctx.dataLabel,\n                name: \"Browser\",\n                innerRadius: \"0%\",\n                explode: \"true\"\n              }, null, 8 /* PROPS */, [\"dataSource\", \"startAngle\", \"explodeOffset\", \"explodeIndex\", \"radius\", \"dataLabel\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"theme\", \"title\", \"legendSettings\", \"tooltip\", \"enableAnimation\"])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/default-pie/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chart/default-pie/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/default-pie/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;