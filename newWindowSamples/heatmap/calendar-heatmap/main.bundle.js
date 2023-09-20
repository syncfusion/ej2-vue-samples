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

/***/ "./Samples/heatmap/calendar-heatmap/main.js":
/*!**************************************************!*\
  !*** ./Samples/heatmap/calendar-heatmap/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/calendar-heatmap/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/main.js?");

/***/ }),

/***/ "./Samples/heatmap/calendar-heatmap/App.vue":
/*!**************************************************!*\
  !*** ./Samples/heatmap/calendar-heatmap/App.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_0149dc86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0149dc86 */ \"./Samples/heatmap/calendar-heatmap/App.vue?vue&type=template&id=0149dc86\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/heatmap/calendar-heatmap/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_0149dc86__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/heatmap/calendar-heatmap/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/calendar-heatmap/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/calendar-heatmap/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _calendar_data_source_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar-data-source.json */ \"./Samples/heatmap/calendar-heatmap/calendar-data-source.json\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-heatmap': _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.HeatMapComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Annual Summary of User Activities in GitLab',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'inherit'\n            }\n        },\n        xAxis: {\n            opposedPosition: true,\n            valueType: 'DateTime',\n            minimum: new Date(2017, 6, 23),\n            maximum: new Date(2018, 6, 30),\n            intervalType: 'Days',\n            showLabelOn: 'Months',\n            labelFormat: 'MMM',\n            increment: 7,\n            labelIntersectAction: 'Rotate45',\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        yAxis: {\n            labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n            isInversed: true,\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        dataSource: _calendar_data_source_json__WEBPACK_IMPORTED_MODULE_2__.calendarDataSource,\n        cellSettings: {\n            showLabel: false,\n            border: {\n                color: 'white'\n            }\n        },\n        tooltipSettings:{\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        paletteSettings: {\n            palette: [\n                { value: 0, color: 'rgb(238,238,238)', label: 'no contributions' },\n                { value: 1, color: 'rgb(172, 213, 242)', label: '1-15 contributions' },\n                { value: 16, color: 'rgb(127, 168, 201)', label: '16-31 contributions' },\n                { value: 32, color: 'rgb(82, 123, 160)', label: '31-49 contributions' },\n                { value: 50, color: 'rgb(37, 78, 119)', label: '50+ contributions' },\n            ],\n            type: 'Fixed',\n            emptyPointColor: 'white'\n        },\n        legendSettings: {\n            position: 'Bottom',\n            width: '20%',\n            alignment: 'Near',\n            showLabel: true,\n            labelDisplayType: 'None',\n            enableSmartLegend: true,\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        }\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Tooltip, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Legend]\n},\nmethods: {\n    load: function(args) {\n      /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n      /* custom code end */\n    },\n    tooltipRender: function(args)\n    {\n        let intl = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Internationalization();\n        let format = intl.getDateFormat({ format: 'EEE MMM dd, yyyy' });\n        let newDate = new Date(args.xValue);\n        let date = new Date(newDate.getTime());\n        let axisLabel = args.heatmap.axisCollections[1].axisLabels;\n        let index = axisLabel.indexOf(args.yLabel);\n        (date).setDate((date).getDate() + index);\n        let value = format(date);\n        args.content = [(args.value === 0 ? 'No' : args.value) + ' ' + 'contributions' + '<br>' + value];\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/calendar-heatmap/App.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./Samples/heatmap/calendar-heatmap/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/calendar-heatmap/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/calendar-heatmap/App.vue?vue&type=template&id=0149dc86":
/*!********************************************************************************!*\
  !*** ./Samples/heatmap/calendar-heatmap/App.vue?vue&type=template&id=0149dc86 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_0149dc86__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_0149dc86__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=0149dc86 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/calendar-heatmap/App.vue?vue&type=template&id=0149dc86\");\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/calendar-heatmap/App.vue?vue&type=template&id=0149dc86":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/calendar-heatmap/App.vue?vue&type=template&id=0149dc86 ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = {\n  class: \"content-wrapper\",\n  style: {\"width\":\"99%\"}\n}\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample visualizes the summary of user activities in GitLab account such as merge requests, push events and comments across 52 weeks in a year. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to display a calendar data using heatmap. You can make the axis labels to display at specific time intervals along the datetime axis using the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/axisModel/#showlabelon\\\">showLabelOn</a> property. </p><p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p><br><p><b>Injecting Module</b></p><p> Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip\\\">Tooltip</a> and <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend\\\">Legend</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend] }</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_heatmap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-heatmap\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_heatmap, {\n            id: \"container\",\n            tooltipSettings: _ctx.tooltipSettings,\n            titleSettings: _ctx.titleSettings,\n            height: \"300px\",\n            xAxis: _ctx.xAxis,\n            yAxis: _ctx.yAxis,\n            dataSource: _ctx.dataSource,\n            cellSettings: _ctx.cellSettings,\n            paletteSettings: _ctx.paletteSettings,\n            legendSettings: _ctx.legendSettings,\n            load: $options.load,\n            tooltipRender: $options.tooltipRender\n          }, null, 8 /* PROPS */, [\"tooltipSettings\", \"titleSettings\", \"xAxis\", \"yAxis\", \"dataSource\", \"cellSettings\", \"paletteSettings\", \"legendSettings\", \"load\", \"tooltipRender\"])\n        ])\n      ])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/calendar-heatmap/calendar-data-source.json":
/*!********************************************************************!*\
  !*** ./Samples/heatmap/calendar-heatmap/calendar-data-source.json ***!
  \********************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"calendarDataSource\":[[null,null,null,null,16,48,0],[0,15,0,24,0,39,0],[0,18,37,0,0,50,0],[0,10,0,0,44,5,0],[0,36,0,45,20,18,0],[0,28,1,42,0,10,0],[0,16,32,0,1,25,0],[0,31,2,9,24,0,0],[0,8,47,0,0,35,0],[0,31,0,0,0,40,0],[0,8,0,27,0,35,0],[0,12,9,45,0,8,0],[0,0,13,0,22,10,0],[0,16,32,0,1,25,0],[0,31,2,9,24,0,0],[0,8,47,27,0,35,0],[0,28,14,10,0,0,0],[0,36,0,45,20,18,0],[0,28,1,42,0,10,0],[0,31,0,24,0,40,0],[0,8,47,27,0,35,0],[0,36,0,45,20,18,0],[0,28,1,42,0,10,0],[0,31,0,24,0,40,0],[0,16,32,0,1,25,0],[0,31,2,9,24,0,0],[0,8,47,27,0,35,0],[0,10,0,36,23,19,0],[0,18,37,23,0,50,0],[0,28,14,10,0,0,0],[0,18,37,23,0,50,0],[0,18,37,23,0,50,0],[0,28,14,10,0,0,0],[0,31,2,9,24,0,0],[0,8,47,27,0,35,0],[0,10,2,0,44,5,0],[0,36,0,45,20,18,0],[0,28,1,42,0,10,0],[0,31,0,24,0,40,1],[0,16,32,0,1,25,0],[0,31,2,9,24,0,0],[0,8,47,27,0,35,0],[0,10,2,0,44,5,0],[0,12,9,45,0,8,0],[0,0,13,35,22,10,0],[0,28,14,10,0,0,0],[0,36,0,45,20,18,2],[0,28,1,42,0,10,0],[0,31,0,24,0,40,1],[0,8,47,27,0,35,0],[0,10,2,0,44,5,0],[0,31,2,9,24,0,1],[0,8,47,27,0,35,40],[0,10,2,0,44,5,null]]}');\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/calendar-heatmap/calendar-data-source.json?");

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
/******/ 			"heatmap/calendar-heatmap/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/heatmap/calendar-heatmap/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;