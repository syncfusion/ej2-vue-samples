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

/***/ "./Samples/chart/smart-axis-labels/main.js":
/*!*************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/main.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/smart-axis-labels/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/smart-axis-labels/main.js?");

/***/ }),

/***/ "./Samples/chart/smart-axis-labels/App.vue":
/*!*************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/App.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_c363ec38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=c363ec38 */ \"./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_c363ec38__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chart/smart-axis-labels/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/smart-axis-labels/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent,\n    'e-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.SeriesCollectionDirective,\n    'e-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.SeriesDirective,\n    'ejs-dropdownlist': _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__.DropDownListComponent,\n    'ejs-numerictextbox': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__.NumericTextBoxComponent\n  },\n  data: function () {\n    return {\n      theme: theme,\n      seriesData: [\n        { x: 'South Korea', y: 39, DataLabelMappingName: \"39M\" }, { x: 'India', y: 61, DataLabelMappingName: \"61M\" },\n        { x: 'Pakistan', y: 20, DataLabelMappingName: \"20M\" }, { x: 'Germany', y: 65, DataLabelMappingName: \"65M\" },\n        { x: 'Australia', y: 16, DataLabelMappingName: \"16M\" }, { x: 'Italy', y: 29, DataLabelMappingName: \"29M\" },\n        { x: 'France', y: 45, DataLabelMappingName: \"45M\" }, { x: 'United Arab Emitrates', y: 10, DataLabelMappingName: \"10M\" },\n        { x: 'Russia', y: 41, DataLabelMappingName: \"41M\" }, { x: 'Mexico', y: 31, DataLabelMappingName: \"31M\" },\n        { x: 'Brazil', y: 76, DataLabelMappingName: \"76M\" }, { x: 'China', y: 51, DataLabelMappingName: \"51M\" }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        valueType: 'Category',\n        interval: 1,\n        majorGridLines: { width: 0 },\n        labelIntersectAction: 'Hide',\n        majorTickLines: { width: 0 },\n        minorTickLines: { width: 0 }\n      },\n      chartArea: {\n        border: {\n          width: 0\n        }\n      },\n\n      //Initializing Primary Y Axis\n      primaryYAxis:\n      {\n        labelStyle: { size: '0px' },\n        majorTickLines: { width: 0 },\n        majorGridLines: { width: 0 },\n        lineStyle: { width: 0 },\n      },\n      actiondata: ['Hide', 'Trim', 'Wrap', 'MultipleRows', 'Rotate45', 'Rotate90', 'None'],\n      labeldata: ['None', 'Hide', 'Shift'],\n      positiondata: ['Outside', 'Inside'],\n      listwidth: 120,\n      marker: {\n        dataLabel: {\n          visible: true,\n          name: 'DataLabelMappingName',\n          position: 'Top',\n          angle: -90,\n          enableRotation: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? true : false,\n          font: { fontWeight: '600' }\n        }\n      },\n\n      tooltip: { enable: true },\n\n      legendSettings: {\n        visible: false\n      },\n\n      pointRender: function (args) {\n        let selectedTheme = location.hash.split(\"/\")[1];\n        selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n        if (selectedTheme === 'material-dark') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'material') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'fabric-dark' || selectedTheme === 'fabric') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'bootstrap5-dark') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'bootstrap5') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'fluent-dark') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'fluent') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'bootstrap4' || selectedTheme === 'bootstrap') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'tailwind-dark') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'tailwind') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme === 'highcontrast') {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else {\n          args.fill = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n      },\n      title: \"Internet Users in Millions\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.ColumnSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.Category, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.DataLabel, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__.Tooltip]\n  },\n  updated: function () {\n    this.$nextTick(function () {\n      this.$refs.chart.ej2Instances.dataBind();\n    });\n  },\n\n  methods: {\n    actionChange: function (args) {\n      let axis = document.getElementById('actionId').value;\n      let primaryXAxis = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.extend)({}, this.primaryXAxis);\n      primaryXAxis.labelIntersectAction = axis;\n      this.primaryXAxis = primaryXAxis;\n    },\n    labelChange: function (args) {\n      let label = document.getElementById('labelId').value;\n      let primaryXAxis = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.extend)({}, this.primaryXAxis);\n      primaryXAxis.edgeLabelPlacement = label;\n      this.primaryXAxis = primaryXAxis;\n    },\n    positionChange: function (args) {\n      let position = document.getElementById('positionId').value;\n      let primaryXAxis = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.extend)({}, this.primaryXAxis);\n      primaryXAxis.labelPosition = position;\n      this.primaryXAxis = primaryXAxis;\n    },\n    widthChange: function (e) {\n      let width = document.getElementById('labelWidth').value;\n      let primaryXAxis = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.extend)({}, this.primaryXAxis);\n      primaryXAxis.maximumLabelWidth = width;\n      this.primaryXAxis = primaryXAxis;\n    },\n    trimChange: function (args) {\n      let trim = document.getElementById(\"Trim\");\n      let primaryXAxis = (0,_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.extend)({}, this.primaryXAxis);\n      primaryXAxis.enableTrim = trim.checked;\n      this.primaryXAxis = primaryXAxis;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/smart-axis-labels/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/smart-axis-labels/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/smart-axis-labels/App.vue?");

/***/ }),

/***/ "./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38":
/*!*******************************************************************************!*\
  !*** ./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38 ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_c363ec38__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_c363ec38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=c363ec38 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/smart-axis-labels/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/smart-axis-labels/App.vue?vue&type=template&id=c363ec38 ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-md-8 control-section sb-property-border\" }\nconst _hoisted_2 = { class: \"col-md-4 property-section\" }\nconst _hoisted_3 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\"}\n}\nconst _hoisted_4 = { style: {\"height\":\"50px\"} }\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \"Intersect Action \")\n], -1 /* HOISTED */)\nconst _hoisted_6 = { style: {\"height\":\"50px\"} }\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \"Edge Label Placement \")\n], -1 /* HOISTED */)\nconst _hoisted_8 = { style: {\"height\":\"50px\"} }\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \"Label Position \")\n], -1 /* HOISTED */)\nconst _hoisted_10 = { style: {\"height\":\"50px\"} }\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \"Enable Trim: \")\n], -1 /* HOISTED */)\nconst _hoisted_12 = { style: {\"height\":\"50px\"} }\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \"Maximum Label Width: \")\n], -1 /* HOISTED */)\nconst _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This example shows the smart label placement for the chart axis labels. </p></div><div id=\\\"description\\\"><p> In this example, you can see how the axis labels are smartly arranged when they overlap with each other using the <code>LabelIntersectAction</code> property in the axis.</p><p>The following are the <code>LabelIntersectAction</code> property values and their behaviors: <ul><li><b>Hide</b> - Hide the label when it intersects.</li><li><b>Trim</b> - Trim the label when it intersects.</li><li><b>Wrap</b> - Wrap the label when it intersects.</li><li><b>MultipleRows</b> - Arrange the label in multiple row when it intersect.</li><li><b>Rotate45</b> - Rotate the label to 45 degree when it intersects.</li><li><b>Rotate90</b> - Rotate the label to 90 degree when it intersects.</li><li><b>None</b> - Shows all the labels.</li></ul></p><p> Chart handles edge labels placement using the <code>EdgeLabelPlacement</code> property. Its values and their behaviors are: <ul><li><code>None</code> - No action is performed.</li><li><code>Hide</code> - Edge label is hidden.</li><li><code>Shift</code> - Shifts the edge labels.</li></ul></p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> Chart component features are segregated into individual feature-wise modules. To use Category axis, we need to inject <code>Category</code> module using <code>provide: {chart: [Category]},</code> method. </p><p> More information on the smart axis labels can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/chart/axis-labels/#smart-axis-labels\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series\")\n  const _component_e_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series-collection\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n  const _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\")\n  const _component_ejs_numerictextbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-numerictextbox\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n        ref: \"chart\",\n        style: {\"display\":\"block\"},\n        theme: _ctx.theme,\n        align: \"center\",\n        id: \"chartcontainer\",\n        title: _ctx.title,\n        primaryXAxis: _ctx.primaryXAxis,\n        primaryYAxis: _ctx.primaryYAxis,\n        chartArea: _ctx.chartArea,\n        pointRender: _ctx.pointRender,\n        legendSettings: _ctx.legendSettings,\n        tooltip: _ctx.tooltip\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData,\n                type: \"Column\",\n                xName: \"x\",\n                yName: \"y\",\n                name: \"Users\",\n                width: \"2\",\n                marker: _ctx.marker\n              }, null, 8 /* PROPS */, [\"dataSource\", \"marker\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"theme\", \"title\", \"primaryXAxis\", \"primaryYAxis\", \"chartArea\", \"pointRender\", \"legendSettings\", \"tooltip\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_3, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_4, [\n            _hoisted_5,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                  id: \"actionId\",\n                  change: $options.actionChange,\n                  dataSource: _ctx.actiondata,\n                  index: \"0\",\n                  width: _ctx.listwidth\n                }, null, 8 /* PROPS */, [\"change\", \"dataSource\", \"width\"])\n              ])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_6, [\n            _hoisted_7,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                  id: \"labelId\",\n                  change: $options.labelChange,\n                  dataSource: _ctx.labeldata,\n                  index: \"0\",\n                  width: _ctx.listwidth\n                }, null, 8 /* PROPS */, [\"change\", \"dataSource\", \"width\"])\n              ])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_8, [\n            _hoisted_9,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                  id: \"positionId\",\n                  change: $options.positionChange,\n                  dataSource: _ctx.positiondata,\n                  index: \"0\",\n                  width: _ctx.listwidth\n                }, null, 8 /* PROPS */, [\"change\", \"dataSource\", \"width\"])\n              ])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_10, [\n            _hoisted_11,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"checkbox\",\n                  id: \"Trim\",\n                  unchecked: \"true\",\n                  onChange: _cache[0] || (_cache[0] = (...args) => ($options.trimChange && $options.trimChange(...args))),\n                  width: 120\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_12, [\n            _hoisted_13,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_numerictextbox, {\n                  value: \"34\",\n                  min: 1,\n                  width: \"120\",\n                  change: $options.widthChange,\n                  id: \"labelWidth\"\n                }, null, 8 /* PROPS */, [\"change\"])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_14\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/smart-axis-labels/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chart/smart-axis-labels/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/smart-axis-labels/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;