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

/***/ "./Samples/heatmap/opposed-axis/main.js":
/*!**********************************************!*\
  !*** ./Samples/heatmap/opposed-axis/main.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/opposed-axis/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/main.js?");

/***/ }),

/***/ "./Samples/heatmap/opposed-axis/App.vue":
/*!**********************************************!*\
  !*** ./Samples/heatmap/opposed-axis/App.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7366bb05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7366bb05 */ \"./Samples/heatmap/opposed-axis/App.vue?vue&type=template&id=7366bb05\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/heatmap/opposed-axis/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7366bb05__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/heatmap/opposed-axis/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/opposed-axis/App.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/opposed-axis/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _opposed_axis_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./opposed-axis-data.json */ \"./Samples/heatmap/opposed-axis/opposed-axis-data.json\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-heatmap': _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.HeatMapComponent,\n    'ejs-checkbox': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Monthly Flight Traffic at JFK Airport',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'inherit'\n            }\n        },\n         xAxis: {\n            labels: ['2007', '2008', '2009', '2010', '2011',\n                '2012', '2013', '2014', '2015', '2016', '2017'],\n            opposedPosition: true,\n            labelRotation: 45,\n            labelIntersectAction: 'None',\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        yAxis: {\n            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May',\n                'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],\n            opposedPosition: true,\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        dataSource: _opposed_axis_data_json__WEBPACK_IMPORTED_MODULE_2__.opposedAxisData,\n        cellSettings: {\n           showLabel: false,\n            border: {\n                width: 0\n            },\n            format: '{value} flights',\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        legendSettings: {\n            visible: false\n        },\n        tooltipSettings:{\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Tooltip, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Legend]\n},\nmethods: {\n    load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n     /* custom code end */\n    },\n    valueXChange: function(args)\n    {\n        this.$refs.heatmap.ej2Instances.xAxis.opposedPosition = this.$refs.xAxisOpposed.ej2Instances.checked;\n    },\n    valueYChange: function(args)\n    {\n        this.$refs.heatmap.ej2Instances.yAxis.opposedPosition = this.$refs.yAxisOpposed.ej2Instances.checked;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/opposed-axis/App.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./Samples/heatmap/opposed-axis/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/opposed-axis/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/opposed-axis/App.vue?vue&type=template&id=7366bb05":
/*!****************************************************************************!*\
  !*** ./Samples/heatmap/opposed-axis/App.vue?vue&type=template&id=7366bb05 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7366bb05__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_7366bb05__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=7366bb05 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/opposed-axis/App.vue?vue&type=template&id=7366bb05\");\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/opposed-axis/App.vue?vue&type=template&id=7366bb05":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/opposed-axis/App.vue?vue&type=template&id=7366bb05 ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section col-lg-9\" }\nconst _hoisted_2 = {\n  class: \"content-wrapper\",\n  style: {\"width\":\"99%\"}\n}\nconst _hoisted_3 = { class: \"col-lg-3 property-section\" }\nconst _hoisted_4 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\",\"margin-left\":\"-10px\"}\n}\nconst _hoisted_5 = { style: {\"height\":\"50px\"} }\nconst _hoisted_6 = { style: {\"width\":\"40%\"} }\nconst _hoisted_7 = { style: {\"height\":\"50px\"} }\nconst _hoisted_8 = { style: {\"width\":\"40%\"} }\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample illustrates the monthly flight arrivals at JFK international airport, New York. The data label is disabled in this sample, the tooltip displays the data point values. In property panel, the options are available to change the position of the axes by means of checkbox for each axis. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to change the display position of the axis. You can change the display position of axes by enabling the <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/axisModel/#opposedposition\\\" target=\\\"_blank\\\">opposedPosition</a> property for each axis. </p><p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p><br><p><b>Injecting Module</b></p><p> Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip\\\">Tooltip</a> and <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend\\\">Legend</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend] }</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_heatmap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-heatmap\")\n  const _component_ejs_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-checkbox\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_heatmap, {\n            id: \"container\",\n            tooltipSettings: _ctx.tooltipSettings,\n            ref: \"heatmap\",\n            titleSettings: _ctx.titleSettings,\n            xAxis: _ctx.xAxis,\n            yAxis: _ctx.yAxis,\n            dataSource: _ctx.dataSource,\n            cellSettings: _ctx.cellSettings,\n            legendSettings: _ctx.legendSettings,\n            load: $options.load\n          }, null, 8 /* PROPS */, [\"tooltipSettings\", \"titleSettings\", \"xAxis\", \"yAxis\", \"dataSource\", \"cellSettings\", \"legendSettings\", \"load\"])\n        ])\n      ])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_4, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_5, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_6, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n                id: \"xOpposed\",\n                ref: \"xAxisOpposed\",\n                label: \"Change X-Axis Position\",\n                checked: \"true\",\n                change: $options.valueXChange\n              }, null, 8 /* PROPS */, [\"change\"])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_7, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_8, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n                id: \"yOpposed\",\n                ref: \"yAxisOpposed\",\n                label: \"Change Y-Axis Position\",\n                checked: \"true\",\n                change: $options.valueYChange\n              }, null, 8 /* PROPS */, [\"change\"])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_9\n  ]))\n}\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/opposed-axis/opposed-axis-data.json":
/*!*************************************************************!*\
  !*** ./Samples/heatmap/opposed-axis/opposed-axis-data.json ***!
  \*************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"opposedAxisData\":[[36371,25675,28292,33399,35980,38585,39351,39964,36543,30529,33298,36985],[34702,27618,31063,34525,36772,35410,38750,39467,35390,34196,35302,35703],[34522,31324,32128,34231,36817,34381,37180,38255,32776,32645,31539,32981],[32213,28755,29517,31214,33747,33507,35763,36837,32910,33437,30659,31965],[31282,28663,32952,33941,34506,36875,38836,35497,34285,34094,32256,33699],[31714,29405,33745,32838,33461,35034,36122,37943,34128,30624,32398,33522],[32064,28387,33751,32537,34034,35977,37196,38301,33627,34115,31072,33939],[32417,27868,30807,33386,35284,36126,39753,40978,35777,35277,31281,35411],[32494,29848,34385,35804,37943,38722,41315,41335,37177,37443,32457,37304],[34378,29576,30547,35664,36622,38145,40347,41868,38252,36505,29576,36450],[35219,31670,32589,34927,36998,39825,41126,42002,37021,36583,32408,37108]]}');\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/opposed-axis/opposed-axis-data.json?");

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
/******/ 			"heatmap/opposed-axis/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/heatmap/opposed-axis/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;