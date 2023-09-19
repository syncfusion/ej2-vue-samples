/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/chart/polar-stacking-column/main.js":
/*!*****************************************************!*\
  !*** ./Samples/chart/polar-stacking-column/main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/polar-stacking-column/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#control-container[data-v-6f825757] {\\n  padding: 0px !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;EACE,uBAAuB;AACzB\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#control-container[data-v-6f825757] {\\n  padding: 0px !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/polar-stacking-column/chart-data.ts":
/*!***********************************************************!*\
  !*** ./Samples/chart/polar-stacking-column/chart-data.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChartDataService: () => (/* binding */ ChartDataService)\n/* harmony export */ });\n/**\n * chart data source\n */\nvar ChartDataService = /** @class */ (function () {\n    function ChartDataService() {\n    }\n    ChartDataService.prototype.GetCrosshairData = function () {\n        var series1 = [];\n        var series2 = [];\n        var point1;\n        var point2;\n        var value = 60;\n        var value1 = 50;\n        var i;\n        for (i = 1; i < 250; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n                value1 += Math.random();\n            }\n            else {\n                value -= Math.random();\n                value1 -= Math.random();\n            }\n            point1 = { x: new Date(2000, i, 1), y: value };\n            point2 = { x: new Date(2000, i, 1), y: value1 };\n            series1.push(point1);\n            series2.push(point2);\n        }\n        return { 'series1': series1, 'series2': series2 };\n    };\n    ChartDataService.prototype.GetScatterData = function () {\n        var series1 = [];\n        var series2 = [];\n        var point1;\n        var value = 80;\n        var value1 = 70;\n        var i;\n        for (i = 1; i < 120; i++) {\n            if (Math.random() > 0.5) {\n                value += Math.random();\n            }\n            else {\n                value -= Math.random();\n            }\n            value = value < 60 ? 60 : value > 90 ? 90 : value;\n            point1 = { x: (145 + (i / 3)).toFixed(1), y: value.toFixed(1) };\n            series1.push(point1);\n        }\n        for (i = 1; i < 120; i++) {\n            if (Math.random() > 0.5) {\n                value1 += Math.random();\n            }\n            else {\n                value1 -= Math.random();\n            }\n            value1 = value1 < 60 ? 60 : value1 > 90 ? 90 : value1;\n            point1 = { x: (145 + (i / 3)).toFixed(1), y: value1.toFixed(1) };\n            series2.push(point1);\n        }\n        return { 'series1': series1, 'series2': series2 };\n    };\n    ChartDataService.prototype.GetLocalData = function () {\n        var series1 = [];\n        var series2 = [];\n        var point1;\n        var point2;\n        var value = 80;\n        var value1 = 90;\n        var i;\n        for (i = 1; i < 500; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n                value1 += Math.random();\n            }\n            else {\n                value -= Math.random();\n                value1 -= Math.random();\n            }\n            point1 = { x: new Date(1960, (i + 1), i), y: Math.round(value) };\n            point2 = { x: new Date(1960, (i + 1), i), y: Math.round(value1) };\n            series1.push(point1);\n            series2.push(point2);\n        }\n        return { 'series1': series1, 'series2': series2 };\n    };\n    ChartDataService.prototype.GetZoomingData = function () {\n        var series1 = [];\n        var point1;\n        var value = 80;\n        var i;\n        for (i = 1; i < 500; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n            }\n            else {\n                value -= Math.random();\n            }\n            point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };\n            series1.push(point1);\n        }\n        return { 'series1': series1 };\n    };\n    ChartDataService.prototype.GetPolarSplineData = function () {\n        var cardData = [];\n        var biDirData = [];\n        var omniDirData = [];\n        var point1;\n        var point2;\n        for (var x = -180; x < 180; x++) {\n            point1 = { x: x, y: -12.6 * (1 - Math.cos(x * 3.14 / 180)) };\n            cardData.push(point1);\n            point2 = { x: x, y: -3 };\n            omniDirData.push(point2);\n        }\n        for (var x = -180; x < -90; x++) {\n            point1 = { x: x, y: -26 * (1 + Math.cos(x * 3.14 / 180)) };\n            biDirData.push(point1);\n        }\n        for (var x = -90; x < 90; x++) {\n            point1 = { x: x, y: -26 * (1 - Math.cos(x * 3.14 / 180)) };\n            biDirData.push(point1);\n        }\n        for (var x = 90; x < 180; x++) {\n            point1 = { x: x, y: -26 * (1 + Math.cos(x * 3.14 / 180)) };\n            biDirData.push(point1);\n        }\n        return { 'series1': cardData, 'series2': omniDirData, 'series3': biDirData };\n    };\n    return ChartDataService;\n}());\n\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/chart-data.ts?");

/***/ }),

/***/ "./Samples/chart/polar-stacking-column/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/chart/polar-stacking-column/App.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_6f825757_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6f825757&scoped=true */ \"./Samples/chart/polar-stacking-column/App.vue?vue&type=template&id=6f825757&scoped=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/polar-stacking-column/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_6f825757_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css */ \"./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_6f825757_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-6f825757\"],['__file',\"Samples/chart/polar-stacking-column/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-data */ \"./Samples/chart/polar-stacking-column/chart-data.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent,\n    'e-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.SeriesCollectionDirective,\n    'e-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.SeriesDirective\n  },\n  data: function () {\n    return {\n      theme: theme,\n      seriesData: [\n        { XValue: \"N\", YValue: 1, YValue1: 0.8, YValue2: 0.8, YValue3: 0.3, YValue4: 0.2, YValue5: 0.2 },\n        { XValue: \"NNE\", YValue: 0.9, YValue1: 0.7, YValue2: 0.7, YValue3: 0.3, YValue4: 0.2, YValue5: 0.2 },\n        { XValue: \"NE\", YValue: 0.7, YValue1: 0.8, YValue2: 0.5, YValue3: 1.1, YValue4: 1.2, YValue5: 0.5 },\n        { XValue: \"ENE\", YValue: 0.9, YValue1: 1, YValue2: 0.4, YValue3: 0.9, YValue4: 1, YValue5: 0.4 },\n        { XValue: \"E\", YValue: 0.9, YValue1: 0.6, YValue2: 0.9, YValue3: 0.5, YValue4: 0.7, YValue5: 0.4 },\n        { XValue: \"ESE\", YValue: 0.8, YValue1: 0.5, YValue2: 0.7, YValue3: 0.3, YValue4: 0.8, YValue5: 0.3 },\n        { XValue: \"SE\", YValue: 0.7, YValue1: 0.4, YValue2: 0.6, YValue3: 0.5, YValue4: 0.5, YValue5: 0.3 },\n        { XValue: \"SSE\", YValue: 1.4, YValue1: 0.4, YValue2: 0.5, YValue3: 0.4, YValue4: 0.6, YValue5: 0.2 },\n        { XValue: \"S\", YValue: 2, YValue1: 1.2, YValue2: 0.6, YValue3: 0.6, YValue4: 0.4, YValue5: 0.4 },\n        { XValue: \"SSW\", YValue: 2, YValue1: 2.5, YValue2: 2, YValue3: 1, YValue4: 0.5, YValue5: 0.3 },\n        { XValue: \"SW\", YValue: 2.2, YValue1: 2, YValue2: 1.8, YValue3: 1, YValue4: 0.4, YValue5: 0.2 },\n        { XValue: \"WSW\", YValue: 1.8, YValue1: 1.1, YValue2: 0.8, YValue3: 0.1, YValue4: 0.4, YValue5: 0.2 },\n        { XValue: \"W\", YValue: 1.6, YValue1: 1.8, YValue2: 2.1, YValue3: 1, YValue4: 0.4, YValue5: 0.4 },\n        { XValue: \"WNW\", YValue: 1.2, YValue1: 1.2, YValue2: 1.5, YValue3: 1.3, YValue4: 1.1, YValue5: 1.2 },\n        { XValue: \"NW\", YValue: 2, YValue1: 2.5, YValue2: 2, YValue3: 1, YValue4: 0.2, YValue5: 0.7 },\n        { XValue: \"NNW\", YValue: 1.8, YValue1: 1.1, YValue2: 0.8, YValue3: 0.1, YValue4: 0.4, YValue5: 0.2 }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        valueType: \"Category\",\n        labelPlacement: \"OnTicks\",\n        interval: 1,\n        coefficient: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? 80 : 100\n      },\n      tooltip: { enable: true },\n      seriesType: \"Polar\",\n      legendSettings: { enableHighlight: true },\n      polardata: [\"Polar\", \"Radar\"],\n      polarwidth: 120,\n      title: \"Wind Rose Chart\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.Legend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.PolarSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.Category, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.LineSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.RadarSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__.Highlight]\n  },\n  updated: function () {\n    this.$nextTick(function () {\n      this.$refs.chart.ej2Instances.dataBind();\n      this.$refs.chart.ej2Instances.refresh();\n    });\n  },\n  methods: {\n    polarType: function (args) {\n      this.seriesType = SelectSeriesType.value;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/polar-stacking-column/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./Samples/chart/polar-stacking-column/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/polar-stacking-column/App.vue?vue&type=template&id=6f825757&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./Samples/chart/polar-stacking-column/App.vue?vue&type=template&id=6f825757&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6f825757_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6f825757_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=6f825757&scoped=true */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=template&id=6f825757&scoped=true\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?");

/***/ }),

/***/ "./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6f825757_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6f825757_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6f825757_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6f825757_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6f825757_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=template&id=6f825757&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=template&id=6f825757&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6f825757\"),n=n(),(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(),n)\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div data-v-6f825757></div><div id=\\\"action-description\\\" data-v-6f825757><p data-v-6f825757> This sample shows a wind rose chart designed using polar and radar charts with a stacking column series. A wind rose chart helps visualize wind patterns, i.e., wind speed and wind direction. </p></div><div id=\\\"description\\\" data-v-6f825757><p data-v-6f825757> In this example, you can see how to render and configure the polar and radar charts with a stacking column series. </p><p data-v-6f825757><code data-v-6f825757>Tooltip</code> is enabled in this example. To see the tooltip in action, hover the mouse over a point or tap a point in touch enabled devices. </p><p style=\\\"font-weight:500;\\\" data-v-6f825757><b data-v-6f825757>Injecting Module</b></p><p data-v-6f825757> Chart component features are segregated into individual feature-wise modules. To use stacking column drawtype in Polar series and Radar series, we need to inject <code data-v-6f825757>PolarSeries</code> and <code data-v-6f825757>RadarSeries</code> module using <code data-v-6f825757>provide: { chart: [ PolarSeries, RadarSeries] },</code> method. </p><p data-v-6f825757> More information on the polar and radar series with a stacking column type chart can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/chart/chart-type/polar#stacked-column\\\" data-v-6f825757>documentation section</a>. </p></div>\", 3)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series\")\n  const _component_e_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series-collection\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n      ref: \"chart\",\n      style: {\"display\":\"block\"},\n      theme: _ctx.theme,\n      align: \"center\",\n      id: \"chartcontainer\",\n      title: _ctx.title,\n      primaryXAxis: _ctx.primaryXAxis,\n      tooltip: _ctx.tooltip,\n      legendSettings: _ctx.legendSettings\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series_collection, null, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n              dataSource: _ctx.seriesData,\n              type: _ctx.seriesType,\n              xName: \"XValue\",\n              yName: \"YValue\",\n              name: \"6-9\",\n              drawType: \"StackingColumn\",\n              width: \"2\"\n            }, null, 8 /* PROPS */, [\"dataSource\", \"type\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n              dataSource: _ctx.seriesData,\n              type: _ctx.seriesType,\n              xName: \"XValue\",\n              yName: \"YValue1\",\n              name: \"9-11\",\n              drawType: \"StackingColumn\",\n              width: \"2\"\n            }, null, 8 /* PROPS */, [\"dataSource\", \"type\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n              dataSource: _ctx.seriesData,\n              type: _ctx.seriesType,\n              xName: \"XValue\",\n              yName: \"YValue2\",\n              name: \"11-14\",\n              drawType: \"StackingColumn\",\n              width: \"2\"\n            }, null, 8 /* PROPS */, [\"dataSource\", \"type\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n              dataSource: _ctx.seriesData,\n              type: _ctx.seriesType,\n              xName: \"XValue\",\n              yName: \"YValue3\",\n              name: \"14-17\",\n              drawType: \"StackingColumn\",\n              width: \"2\"\n            }, null, 8 /* PROPS */, [\"dataSource\", \"type\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n              dataSource: _ctx.seriesData,\n              type: _ctx.seriesType,\n              xName: \"XValue\",\n              yName: \"YValue4\",\n              name: \"17-20\",\n              drawType: \"StackingColumn\",\n              width: \"2\"\n            }, null, 8 /* PROPS */, [\"dataSource\", \"type\"]),\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n              dataSource: _ctx.seriesData,\n              type: _ctx.seriesType,\n              xName: \"XValue\",\n              yName: \"YValue5\",\n              name: \"23 Above\",\n              drawType: \"StackingColumn\",\n              width: \"2\"\n            }, null, 8 /* PROPS */, [\"dataSource\", \"type\"])\n          ]),\n          _: 1 /* STABLE */\n        })\n      ]),\n      _: 1 /* STABLE */\n    }, 8 /* PROPS */, [\"theme\", \"title\", \"primaryXAxis\", \"tooltip\", \"legendSettings\"]),\n    _hoisted_2\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/polar-stacking-column/App.vue?vue&type=style&index=0&id=6f825757&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"dc828632\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/polar-stacking-column/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"chart/polar-stacking-column/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/polar-stacking-column/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;