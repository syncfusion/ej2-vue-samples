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

/***/ "./Samples/chart/area/main.js":
/*!************************************!*\
  !*** ./Samples/chart/area/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/area/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/area/main.js?");

/***/ }),

/***/ "./Samples/chart/area/App.vue":
/*!************************************!*\
  !*** ./Samples/chart/area/App.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_60334b84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=60334b84 */ \"./Samples/chart/area/App.vue?vue&type=template&id=60334b84\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/area/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_60334b84__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chart/area/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/area/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/area/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/area/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent,\n    'e-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesCollectionDirective,\n    'e-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesDirective\n  },\n  data: function() {\n    return {\n       theme: theme,      \n      Other: [\n        { Period : new Date(1988, 1, 1), USD : -0.16 },\n        { Period : new Date(1989, 1, 1), USD : -0.17 },\n        { Period : new Date(1990, 1, 1), USD : -0.08 },\n        { Period : new Date(1992, 1, 1), USD : 0.08 },\n        { Period : new Date(1996, 1, 1), USD : 0.161 },\n        { Period : new Date(1998, 1, 1), USD : 0.48 },\n        { Period : new Date(1999, 1, 1), USD : 1.16 },\n        { Period : new Date(2001, 1, 1), USD : 0.40 },\n        { Period : new Date(2002, 1, 1), USD : 0.32 },\n        { Period : new Date(2003, 1, 1), USD : 0.807 },\n        { Period : new Date(2005, 1, 1), USD : 1.12 },\n        { Period : new Date(2006, 1, 1), USD : 1.614 },\n        { Period : new Date(2008, 1, 1), USD : 1.210 },\n        { Period : new Date(2009, 1, 1), USD : 1.12 },\n        { Period : new Date(2011, 1, 1), USD : 0.64 },\n        { Period : new Date(2013, 1, 1), USD : 0.161 },\n        { Period : new Date(2018, 1, 1), USD : 0.080 }\n      ],\n      Track: [\n        { Period : new Date(1973, 1, 1), USD : 2.58 },\n        { Period : new Date(1975, 1, 1), USD : 2.25 },\n        { Period : new Date(1977, 1, 1), USD : 3.55 },\n        { Period : new Date(1978, 1, 1), USD : 2.42 },\n        { Period : new Date(1981, 1, 1), USD : -0.24 },\n        { Period : new Date(1982, 1, 1), USD : -0 }\n      ],\n      Streaming: [\n        { Period : new Date(2011, 1, 1), USD : 0.48 },\n        { Period : new Date(2013, 1, 1), USD : 1.61 },\n        { Period : new Date(2015, 1, 1), USD : 2.17 },\n        { Period : new Date(2017, 1, 1), USD : 7.18 },\n      ],\n      Download: [\n        { Period : new Date(2004, 1, 1), USD : 0.48 },\n        { Period : new Date(2007, 1, 1), USD : 1.45 },\n        { Period : new Date(2012, 1, 1), USD : 2.82 },\n        { Period : new Date(2013, 1, 1), USD : 2.58 },\n        { Period : new Date(2015, 1, 1), USD : 2.01 },\n        { Period : new Date(2016, 1, 1), USD : 1.61 },\n        { Period : new Date(2017, 1, 1), USD : 0.80 }\n      ],\n      Compact: [\n        { Period : new Date(1990, 1, 1), USD : 0.69 },\n        { Period : new Date(1992, 1, 1), USD : 2.86 },\n        { Period : new Date(1995, 1, 1), USD : 10.2 },\n        { Period : new Date(1996, 1, 1), USD : 13.0 },\n        { Period : new Date(1997, 1, 1), USD : 14.35 },\n        { Period : new Date(1998, 1, 1), USD : 15.17 },\n        { Period : new Date(1999, 1, 1), USD : 14.89 },\n        { Period : new Date(2000, 1, 1), USD : 18.96 },\n        { Period : new Date(2001, 1, 1), USD : 18.78 },\n        { Period : new Date(2004, 1, 1), USD : 14.25 },\n        { Period : new Date(2005, 1, 1), USD : 14.24 },\n        { Period : new Date(2006, 1, 1), USD : 12.34 },\n        { Period : new Date(2007, 1, 1), USD : 9.34 },\n        { Period : new Date(2008, 1, 1), USD : 4.45 },\n        { Period : new Date(2010, 1, 1), USD : 1.46 },\n        { Period : new Date(2011, 1, 1), USD : 0.64 }\n      ],\n      Casette : [\n        { Period : new Date(1976, 1, 1), USD : 0.08 },\n        { Period : new Date(1979, 1, 1), USD : 1.85 },\n        { Period : new Date(1980, 1, 1), USD : 2.0 },\n        { Period : new Date(1982, 1, 1), USD : 3.55 },\n        { Period : new Date(1984, 1, 1), USD : 5.40 },\n        { Period : new Date(1985, 1, 1), USD : 5.24 },\n        { Period : new Date(1988, 1, 1), USD : 6.94 },\n        { Period : new Date(1989, 1, 1), USD : 6.85 },\n        { Period : new Date(1990, 1, 1), USD : 7.02 },\n        { Period : new Date(1992, 1, 1), USD : 5.81 },\n        { Period : new Date(1993, 1, 1), USD : 5.32 },\n        { Period : new Date(1994, 1, 1), USD : 4.03 },\n        { Period : new Date(1997, 1, 1), USD : 2.25 },\n        { Period : new Date(1998, 1, 1), USD : 2.01 },\n        { Period : new Date(1999, 1, 1), USD : 0.80 },\n        { Period : new Date(2001, 1, 1), USD : 0.40 }\n      ],\n      Vinyl: [\n        { Period : new Date(1973, 1, 1), USD : 7.74 },\n        { Period : new Date(1974, 1, 1), USD : 7.58 },\n        { Period : new Date(1976, 1, 1), USD : 8.23 },\n        { Period : new Date(1977, 1, 1), USD : 9.68 },\n        { Period : new Date(1978, 1, 1), USD : 10.16 },\n        { Period : new Date(1979, 1, 1), USD : 8.15 },\n        { Period : new Date(1981, 1, 1), USD : 6.77 },\n        { Period : new Date(1982, 1, 1), USD : 5.64 },\n        { Period : new Date(1984, 1, 1), USD : 4.35 },\n        { Period : new Date(1985, 1, 1), USD : 2.50 },\n        { Period : new Date(1989, 1, 1), USD : 0.64 },\n        { Period : new Date(1990, 1, 1), USD : 0 },\n      ],\n      //Initializing Primary X Axis\n       primaryXAxis: {\n            valueType: 'DateTime',\n            labelFormat: 'yyyy',\n            maximum: new Date(1973, 1, 1),\n            minimum: new Date(2018, 1, 1),\n            majorGridLines: { width: 0 },\n            minorTickLines: { width: 0 },\n            intervalType: 'Years',\n            edgeLabelPlacement: 'Shift'\n        },\n      //Initializing Primary Y Axis\n       primaryYAxis:\n        {\n          title: 'In Billions (USD)',\n          maximum: 25,\n          minimum: 0,\n          interval: 5,\n          lineStyle: { width: 0 },\n          majorTickLines: { width: 0 },\n          minorTickLines: { width: 0 }\n        },\n      chartArea: {\n        border: {\n          width: 0\n        }\n      },\n       marker: {\n        visible: false,\n      },\n      annotations:[{\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '<div style=\"color:white; font-size: 8px; font-weight: bold\">OTHERS</div>' : '<div style=\"color:white; font-size: 11px; font-weight: bold\">OTHERS</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(2006, 1, 1),\n        y: 0.50\n       },\n       {\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '<div style=\"color:white; font-size: 6px; font-weight: bold\"></div>' : '<div style=\"color:white; font-size: 11px; font-weight: bold\">STREAMING</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(2015, 1, 1),\n        y: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? 1.3 : 1.2\n       },\n       {\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '<div style=\"color:white; font-size: 8px; font-weight: bold\">DOWNLOAD</div>': '<div style=\"color:white; font-size: 11px; font-weight: bold\">DOWNLOAD</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(2011, 6, 1),\n        y: 1.8\n       },\n       {\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ?  '<div style=\"color:white; font-size: 8px; font-weight: bold\">COMPACT DISC</div>' : '<div style=\"color:white; font-weight: bold; font-size: 11px;\">COMPACT DISC</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(2001, 1, 1),\n        y: 10\n       },\n       {\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '<div style=\"color:white; font-size: 8px; font-weight: bold\">CASSETTE</div>': '<div style=\"color:white; font-size: 11px; font-weight: bold\">CASSETTE</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(1990, 1, 1),\n        y: 3\n       },\n       {\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '<div style=\"color:white; font-size: 8px; font-weight: bold\">VINYL</div>' : '<div style=\"color:white; font-size: 11px; font-weight: bold\">VINYL</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(1977, 1, 1),\n        y: 6\n       },\n       {\n        content: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '<div style=\"color:white; font-size: 8px; font-weight: bold\">8-TRACK</div>' : '<div style=\"color:white; font-size: 11px; font-weight: bold\">8-TRACK</div>',\n        region: 'Series',\n        coordinateUnits: 'Point',\n        x: new Date(1976, 1, 1),\n        y: 1.5\n       },\n      ],\n      width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '100%' : '75%',\n      title: \"US Music Sales By Format\",\n      border: { width: 1.5 , color: 'white'},\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AreaSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Legend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.DateTime, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartAnnotation]\n  },\n  methods: {\n   }\n \n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/area/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/area/App.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./Samples/chart/area/App.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/area/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/area/App.vue?");

/***/ }),

/***/ "./Samples/chart/area/App.vue?vue&type=template&id=60334b84":
/*!******************************************************************!*\
  !*** ./Samples/chart/area/App.vue?vue&type=template&id=60334b84 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_60334b84__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_60334b84__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=60334b84 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/area/App.vue?vue&type=template&id=60334b84\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/area/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/area/App.vue?vue&type=template&id=60334b84":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/area/App.vue?vue&type=template&id=60334b84 ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { align: \"center\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This Vue Area Chart example visualizes the music sales data by format in US by using default area series in the chart. </p></div><div id=\\\"description\\\"><p> In this example, you can see how the area type chart can be rendered and configured. It is like the line chart, which represents time-dependent data and shows trends at equal intervals, but the area is closed and filled with the color of the series. </p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject <code>AreaSeries</code> module using <code>provide: { chart: [AreaSeries] }</code> method. </p><p> More information about the area series can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/chart/chart-type/area#area\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series\")\n  const _component_e_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series-collection\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n        style: {\"display\":\"block\"},\n        theme: _ctx.theme,\n        align: \"center\",\n        id: \"chartcontainer\",\n        title: _ctx.title,\n        primaryXAxis: _ctx.primaryXAxis,\n        primaryYAxis: _ctx.primaryYAxis,\n        chartArea: _ctx.chartArea,\n        width: _ctx.width,\n        annotations: _ctx.annotations\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Compact,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Download,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Streaming,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Casette,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Vinyl,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Track,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.Other,\n                type: \"Area\",\n                xName: \"Period\",\n                yName: \"USD\",\n                marker: \"marker\",\n                border: _ctx.border\n              }, null, 8 /* PROPS */, [\"dataSource\", \"border\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"theme\", \"title\", \"primaryXAxis\", \"primaryYAxis\", \"chartArea\", \"width\", \"annotations\"])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/area/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chart/area/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/area/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;