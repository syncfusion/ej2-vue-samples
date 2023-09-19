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

/***/ "./Samples/heatmap/json-cell/main.js":
/*!*******************************************!*\
  !*** ./Samples/heatmap/json-cell/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/json-cell/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-cell/main.js?");

/***/ }),

/***/ "./Samples/heatmap/json-cell/App.vue":
/*!*******************************************!*\
  !*** ./Samples/heatmap/json-cell/App.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_d1a8911c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d1a8911c */ \"./Samples/heatmap/json-cell/App.vue?vue&type=template&id=d1a8911c\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/heatmap/json-cell/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_d1a8911c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/heatmap/json-cell/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-cell/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-cell/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-cell/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-heatmap': _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.HeatMapComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Most Visited Destinations by International Tourist Arrivals',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'inherit'\n            }\n        },\n         xAxis: {\n            labels: ['Austria', 'China', 'France', 'Germany', 'Italy', 'Mexico', 'Spain', 'Thailand', 'UK', 'USA'],\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        yAxis: {\n            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        dataSource: [\n            { 'rowid': 'France', 'columnid': '2010', 'value': '77.6' },\n            { 'rowid': 'France', 'columnid': '2011', 'value': '79.4' },\n            { 'rowid': 'France', 'columnid': '2012', 'value': '80.8' },\n            { 'rowid': 'France', 'columnid': '2013', 'value': '86.6' },\n            { 'rowid': 'France', 'columnid': '2014', 'value': '83.7' },\n            { 'rowid': 'France', 'columnid': '2015', 'value': '84.5' },\n            { 'rowid': 'France', 'columnid': '2016', 'value': '82.6' },\n            { 'rowid': 'USA', 'columnid': '2010', 'value': '60.6' },\n            { 'rowid': 'USA', 'columnid': '2011', 'value': '65.4' },\n            { 'rowid': 'USA', 'columnid': '2012', 'value': '70.8' },\n            { 'rowid': 'USA', 'columnid': '2013', 'value': '73.8' },\n            { 'rowid': 'USA', 'columnid': '2014', 'value': '75.3' },\n            { 'rowid': 'USA', 'columnid': '2015', 'value': '77.5' },\n            { 'rowid': 'USA', 'columnid': '2016', 'value': '77.6' },\n            { 'rowid': 'Spain', 'columnid': '2010', 'value': '64.9' },\n            { 'rowid': 'Spain', 'columnid': '2011', 'value': '52.6' },\n            { 'rowid': 'Spain', 'columnid': '2012', 'value': '60.8' },\n            { 'rowid': 'Spain', 'columnid': '2013', 'value': '65.6' },\n            { 'rowid': 'Spain', 'columnid': '2014', 'value': '52.6' },\n            { 'rowid': 'Spain', 'columnid': '2015', 'value': '68.5' },\n            { 'rowid': 'Spain', 'columnid': '2016', 'value': '75.6' },\n            { 'rowid': 'China', 'columnid': '2010', 'value': '55.6' },\n            { 'rowid': 'China', 'columnid': '2011', 'value': '52.3' },\n            { 'rowid': 'China', 'columnid': '2012', 'value': '54.8' },\n            { 'rowid': 'China', 'columnid': '2013', 'value': '51.1' },\n            { 'rowid': 'China', 'columnid': '2014', 'value': '55.6' },\n            { 'rowid': 'China', 'columnid': '2015', 'value': '56.9' },\n            { 'rowid': 'China', 'columnid': '2016', 'value': '59.3' },\n            { 'rowid': 'Italy', 'columnid': '2010', 'value': '43.6' },\n            { 'rowid': 'Italy', 'columnid': '2011', 'value': '43.2' },\n            { 'rowid': 'Italy', 'columnid': '2012', 'value': '55.8' },\n            { 'rowid': 'Italy', 'columnid': '2013', 'value': '50.1' },\n            { 'rowid': 'Italy', 'columnid': '2014', 'value': '48.5' },\n            { 'rowid': 'Italy', 'columnid': '2015', 'value': '50.7' },\n            { 'rowid': 'Italy', 'columnid': '2016', 'value': '52.4' },\n            { 'rowid': 'UK', 'columnid': '2010', 'value': '28.2' },\n            { 'rowid': 'UK', 'columnid': '2011', 'value': '31.6' },\n            { 'rowid': 'UK', 'columnid': '2012', 'value': '29.8' },\n            { 'rowid': 'UK', 'columnid': '2013', 'value': '33.1' },\n            { 'rowid': 'UK', 'columnid': '2014', 'value': '32.6' },\n            { 'rowid': 'UK', 'columnid': '2015', 'value': '34.4' },\n            { 'rowid': 'UK', 'columnid': '2016', 'value': '35.8' },\n            { 'rowid': 'Germany', 'columnid': '2010', 'value': '26.8' },\n            { 'rowid': 'Germany', 'columnid': '2011', 'value': '29' },\n            { 'rowid': 'Germany', 'columnid': '2012', 'value': '26.8' },\n            { 'rowid': 'Germany', 'columnid': '2013', 'value': '27.6' },\n            { 'rowid': 'Germany', 'columnid': '2014', 'value': '33' },\n            { 'rowid': 'Germany', 'columnid': '2015', 'value': '35' },\n            { 'rowid': 'Germany', 'columnid': '2016', 'value': '35.6' },\n            { 'rowid': 'Mexico', 'columnid': '2010', 'value': '23.2' },\n            { 'rowid': 'Mexico', 'columnid': '2011', 'value': '24.9' },\n            { 'rowid': 'Mexico', 'columnid': '2012', 'value': '30.1' },\n            { 'rowid': 'Mexico', 'columnid': '2013', 'value': '22.2' },\n            { 'rowid': 'Mexico', 'columnid': '2014', 'value': '29.3' },\n            { 'rowid': 'Mexico', 'columnid': '2015', 'value': '32.1' },\n            { 'rowid': 'Mexico', 'columnid': '2016', 'value': '35' },\n            { 'rowid': 'Thailand', 'columnid': '2010', 'value': '15.9' },\n            { 'rowid': 'Thailand', 'columnid': '2011', 'value': '19.8' },\n            { 'rowid': 'Thailand', 'columnid': '2012', 'value': '21.8' },\n            { 'rowid': 'Thailand', 'columnid': '2013', 'value': '23.5' },\n            { 'rowid': 'Thailand', 'columnid': '2014', 'value': '24.8' },\n            { 'rowid': 'Thailand', 'columnid': '2015', 'value': '29.9' },\n            { 'rowid': 'Thailand', 'columnid': '2016', 'value': '32.6' },\n            { 'rowid': 'Austria', 'columnid': '2010', 'value': '22' },\n            { 'rowid': 'Austria', 'columnid': '2011', 'value': '21.3' },\n            { 'rowid': 'Austria', 'columnid': '2012', 'value': '24.2' },\n            { 'rowid': 'Austria', 'columnid': '2013', 'value': '23.2' },\n            { 'rowid': 'Austria', 'columnid': '2014', 'value': '25' },\n            { 'rowid': 'Austria', 'columnid': '2015', 'value': '26.7' },\n            { 'rowid': 'Austria', 'columnid': '2016', 'value': '28.1' },\n        ],\n        dataSourceSettings:  {\n            isJsonData: true,\n            adaptorType: 'Cell',\n            xDataMapping: 'rowid',\n            yDataMapping: 'columnid',\n            valueMapping: 'value'\n        },\n        paletteSettings: {\n            palette: [{ color: '#DCD57E' },\n            { color: '#A6DC7E' },\n            { color: '#7EDCA2' },\n            { color: '#6EB5D0' }\n            ]\n        },\n        legendSettings:{\n            textStyle: {\n                 fontFamily: 'inherit'\n             }\n        },\n        tooltipSettings:{\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        cellSettings: {\n            border: {\n                radius: 4,\n                width: 1,\n                color: 'white'\n            },\n            showLabel: true,\n            format: '{value} M',\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        }      \n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Tooltip, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Legend, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Adaptor]\n},\nmethods: {\n    load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n     /* custom code end */\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-cell/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/json-cell/App.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./Samples/heatmap/json-cell/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-cell/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-cell/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/json-cell/App.vue?vue&type=template&id=d1a8911c":
/*!*************************************************************************!*\
  !*** ./Samples/heatmap/json-cell/App.vue?vue&type=template&id=d1a8911c ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_d1a8911c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_d1a8911c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=d1a8911c */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-cell/App.vue?vue&type=template&id=d1a8911c\");\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-cell/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-cell/App.vue?vue&type=template&id=d1a8911c":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/json-cell/App.vue?vue&type=template&id=d1a8911c ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { class: \"content-wrapper\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div style=\\\"float:right;margin-right:10px;\\\">Source: <a href=\\\"https://en.wikipedia.org/wiki/World_Tourism_rankings\\\" target=\\\"_blank\\\">https://en.wikipedia.org/</a></div><div id=\\\"action-description\\\"><p> This sample visualizes the number of international tourist arrivals in millions of the most visited destinations in the world. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to bind JSON data and configure the Heatmap using the data adaptor support. You can bind the JSON data with information for each cell to the Heatmap using <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#isjsondata\\\" target=\\\"_blank\\\">isJsonData </a> and by defining the <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#adaptortype\\\" target=\\\"_blank\\\">adaptorType </a> properties. In cell JSON data, the value for each cell is mapped using the <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#xdatamapping\\\" target=\\\"_blank\\\">xDataMapping </a>, <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#ydatamapping\\\" target=\\\"_blank\\\">yDataMapping </a> and <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/dataModel/#valuemapping\\\" target=\\\"_blank\\\">valueMapping </a>properties. </p><p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p><br><p> The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices. </p><br><p><b>Injecting Module</b></p><p> Heatmap component features are separated into discrete feature-based modules. To use a tooltip, legend and data adaptor, inject the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip\\\">Tooltip</a>, <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend\\\">Legend</a> and <a href=\\\"https://ej2.syncfusion.com/vue/documentation/api/heatmap/adaptorType/\\\" target=\\\"_blank\\\">Adaptor</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend, Adaptor] }</code> method. </p></div>\", 3)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_heatmap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-heatmap\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_heatmap, {\n          id: \"container\",\n          tooltipSettings: _ctx.tooltipSettings,\n          legendSettings: _ctx.legendSettings,\n          titleSettings: _ctx.titleSettings,\n          xAxis: _ctx.xAxis,\n          yAxis: _ctx.yAxis,\n          dataSource: _ctx.dataSource,\n          dataSourceSettings: _ctx.dataSourceSettings,\n          paletteSettings: _ctx.paletteSettings,\n          cellSettings: _ctx.cellSettings,\n          load: $options.load\n        }, null, 8 /* PROPS */, [\"tooltipSettings\", \"legendSettings\", \"titleSettings\", \"xAxis\", \"yAxis\", \"dataSource\", \"dataSourceSettings\", \"paletteSettings\", \"cellSettings\", \"load\"])\n      ])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/json-cell/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"heatmap/json-cell/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/heatmap/json-cell/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;