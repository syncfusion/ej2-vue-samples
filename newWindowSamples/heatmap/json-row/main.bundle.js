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

/***/ "./Samples/heatmap/json-row/main.js":
/*!******************************************!*\
  !*** ./Samples/heatmap/json-row/main.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/json-row/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-row/main.js?");

/***/ }),

/***/ "./Samples/heatmap/json-row/App.vue":
/*!******************************************!*\
  !*** ./Samples/heatmap/json-row/App.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_18ffa91e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=18ffa91e */ \"./Samples/heatmap/json-row/App.vue?vue&type=template&id=18ffa91e\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/heatmap/json-row/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_18ffa91e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/heatmap/json-row/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-row/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-row/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-row/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-heatmap': _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.HeatMapComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Olympic Medal Achievements of most Successful Countries',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'inherit'\n            }\n        },\n         xAxis: {\n            labels: ['China', 'France', 'GBR', 'Germany', 'Italy', 'Japan', 'KOR', 'Russia', 'USA'],\n            labelRotation: 45,\n            labelIntersectAction: 'None',\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        yAxis: {\n            title : {\n             text: 'Olympic Year',\n             textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'inherit'\n            }},\n            labels: ['2000', '2004', '2008', '2012', '2016'],\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        dataSource: [\n            { 'Region': 'USA', '2000': 93, '2004': 101, '2008': 112, '2012': 103, '2016': 121 },\n            { 'Region': 'GBR', '2000': 28, '2004': 30, '2008': 49, '2012': 65, '2016': 67 },\n            { 'Region': 'China', '2000': 58, '2004': 63, '2008': 100, '2012': 91, '2016': 70 },\n            { 'Region': 'Russia', '2000': 89, '2004': 90, '2008': 60, '2012': 69, '2016': 55 },\n            { 'Region': 'Germany', '2000': 56, '2004': 49, '2008': 41, '2012': 44, '2016': 42 },\n            { 'Region': 'Japan', '2000': 18, '2004': 37, '2008': 25, '2012': 38, '2016': 41 },\n            { 'Region': 'France', '2000': 38, '2004': 33, '2008': 43, '2012': 35, '2016': 42 },\n            { 'Region': 'KOR', '2000': 28, '2004': 30, '2008': 32, '2012': 30, '2016': 21 },\n            { 'Region': 'Italy', '2000': 34, '2004': 32, '2008': 27, '2012': 28, '2016': 28 }\n        ],\n        dataSourceSettings:  {\n            isJsonData: true,\n            adaptorType: 'Table',\n            xDataMapping: 'Region'\n        },\n        paletteSettings: {\n            palette: [{ color: '#F0C27B' },\n            { color: '#4B1248' }\n            ]\n        },\n        legendSettings:{\n            textStyle: {\n                 fontFamily: 'inherit'\n             }\n        },\n        cellSettings: {\n            border: {\n                width: 1,\n                radius: 4,\n                color: 'white'\n            },\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        }\n      \n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Tooltip, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Legend, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Adaptor]\n},\nmethods: {\n    load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n     /* custom code end */\n    },\n    tooltipRender: function(args)\n    {\n        args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' Medals'];\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-row/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/json-row/App.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./Samples/heatmap/json-row/App.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-row/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-row/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/json-row/App.vue?vue&type=template&id=18ffa91e":
/*!************************************************************************!*\
  !*** ./Samples/heatmap/json-row/App.vue?vue&type=template&id=18ffa91e ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_18ffa91e__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_18ffa91e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=18ffa91e */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-row/App.vue?vue&type=template&id=18ffa91e\");\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-row/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-row/App.vue?vue&type=template&id=18ffa91e":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-row/App.vue?vue&type=template&id=18ffa91e ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { class: \"content-wrapper\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div style=\\\"float:right;margin-right:10px;\\\">Source: <a href=\\\"https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table\\\" target=\\\"_blank\\\">https://en.wikipedia.org/</a></div><div id=\\\"action-description\\\"><p> This sample visualizes the overall Olympic medals won by the countries in all the summer Olympic events from the year 2000 to 2016. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to bind JSON data and configure the Heatmap using the data adaptor support. You can bind the JSON data with information for each row to the Heatmap using <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#isjsondata\\\" target=\\\"_blank\\\">isJsonData</a> and by defining the <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#adaptortype\\\" target=\\\"_blank\\\">adaptorType</a> properties. In row JSON data, the row header is mapped using the <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#xdatamapping\\\" target=\\\"_blank\\\">xDataMapping</a>. </p><br><p> The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices. </p><br><p><b>Injecting Module</b></p><p> Heatmap component features are separated into discrete feature-based modules. To use a tooltip, legend and data adaptor, inject the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip\\\">Tooltip</a>, <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend\\\">Legend</a> and <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/adaptorType/\\\" target=\\\"_blank\\\">Adaptor</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend, Adaptor] }</code> method. </p></div>\", 3)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_heatmap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-heatmap\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_heatmap, {\n          id: \"container\",\n          titleSettings: _ctx.titleSettings,\n          legendSettings: _ctx.legendSettings,\n          tooltipSettings: _ctx.tooltipSettings,\n          xAxis: _ctx.xAxis,\n          yAxis: _ctx.yAxis,\n          dataSource: _ctx.dataSource,\n          dataSourceSettings: _ctx.dataSourceSettings,\n          paletteSettings: _ctx.paletteSettings,\n          cellSettings: _ctx.cellSettings,\n          load: $options.load,\n          tooltipRender: $options.tooltipRender\n        }, null, 8 /* PROPS */, [\"titleSettings\", \"legendSettings\", \"tooltipSettings\", \"xAxis\", \"yAxis\", \"dataSource\", \"dataSourceSettings\", \"paletteSettings\", \"cellSettings\", \"load\", \"tooltipRender\"])\n      ])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-row/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"heatmap/json-row/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_heatmap_vue_samples"] = self["webpackChunkej2_heatmap_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/heatmap/json-row/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;