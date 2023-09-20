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

/***/ "./Samples/chart/dashed-line/main.js":
/*!*******************************************!*\
  !*** ./Samples/chart/dashed-line/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/dashed-line/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#control-container {\\n        padding: 0px !important;\\n}\\n#dashed-chartcontainer_Series_1 {\\n            stroke-dasharray: 10px 10px;\\n            stroke-linejoin: round;\\n            stroke-linecap: round;\\n}\\n@-webkit-keyframes dash {\\n100% {\\n            stroke-dashoffset: -20px;\\n}\\n}\\n@keyframes dash {\\n100% {\\n            stroke-dashoffset: -20px;\\n}\\n}\\n@keyframes opac {\\n0% {\\n            stroke-opacity: 1;\\n            stroke-width: 0px;\\n}\\n100% {\\n            stroke-opacity: 0;\\n            stroke-width: 10px;\\n}\\n}\\n.dashed-chartcontainer_Annotation_0{\\n        color: black ;\\n        background-color: red;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;QACQ,uBAAuB;AAC/B;AACA;YACY,2BAA2B;YAC3B,sBAAsB;YACtB,qBAAqB;AACjC;AACA;AACA;YACY,wBAAwB;AACpC;AACA;AACA;AACA;YACY,wBAAwB;AACpC;AACA;AACA;AACA;YACY,iBAAiB;YACjB,iBAAiB;AAC7B;AACA;YACY,iBAAiB;YACjB,kBAAkB;AAC9B;AACA;AACA;QACQ,aAAa;QACb,qBAAqB;AAC7B\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#control-container {\\n        padding: 0px !important;\\n}\\n#dashed-chartcontainer_Series_1 {\\n            stroke-dasharray: 10px 10px;\\n            stroke-linejoin: round;\\n            stroke-linecap: round;\\n}\\n@-webkit-keyframes dash {\\n100% {\\n            stroke-dashoffset: -20px;\\n}\\n}\\n@keyframes dash {\\n100% {\\n            stroke-dashoffset: -20px;\\n}\\n}\\n@keyframes opac {\\n0% {\\n            stroke-opacity: 1;\\n            stroke-width: 0px;\\n}\\n100% {\\n            stroke-opacity: 0;\\n            stroke-width: 10px;\\n}\\n}\\n.dashed-chartcontainer_Annotation_0{\\n        color: black ;\\n        background-color: red;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/dashed-line/App.vue":
/*!*******************************************!*\
  !*** ./Samples/chart/dashed-line/App.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_07458e0d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=07458e0d */ \"./Samples/chart/dashed-line/App.vue?vue&type=template&id=07458e0d\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/chart/dashed-line/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_07458e0d_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=07458e0d&lang=css */ \"./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_07458e0d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/chart/dashed-line/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent,\n    'e-series-collection': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesCollectionDirective,\n    'e-series': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.SeriesDirective,\n    'e-annotations': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AnnotationsDirective,\n    'e-annotation': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AnnotationDirective\n  },\n  data: function() {\n    return {\n         theme: theme,\n      seriesData: [\n                    { Period : \"Jan\", Banana_ProductionRate : 100 },\n                    { Period : \"Feb\", Banana_ProductionRate : 110 },\n                    { Period : \"Mar\", Banana_ProductionRate : 125 },\n                    { Period : \"Apr\", Banana_ProductionRate : 150 },\n                    { Period : \"May\", Banana_ProductionRate : 140 },\n                    { Period : \"Jun\", Banana_ProductionRate : 160 }\n                ],\n      seriesData1: [\n                     { Period : \"Jun\", Banana_ProductionRate : 160 },\n                     { Period : \"Jul\", Banana_ProductionRate : 170 },\n                     { Period : \"Aug\", Banana_ProductionRate : 180 },\n                     { Period : \"Sep\", Banana_ProductionRate : 190 },\n                     { Period : \"Oct\", Banana_ProductionRate : 200 },\n                     { Period : \"Nov\", Banana_ProductionRate : 230 },\n                     { Period : \"Dec\", Banana_ProductionRate : 270 }            \n      ],\n      //Initializing Primary X Axis\n        primaryXAxis: {\n            valueType: 'Category',\n            interval: 1,\n            majorTickLines: {width : 0},\n            minorTickLines: {width: 0},\n            majorGridLines: { width: 0 },\n            labelIntersectAction: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? 'None' : 'Rotate45',\n            labelRotation: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? -45 : 0,\n        },\n\n      //Initializing Primary Y Axis\n        primaryYAxis:\n        {\n            labelFormat: '{value}K',\n            rangePadding: 'None',\n            lineStyle: { width: 0 },\n            minimum: 0,\n            maximum: 300,\n            interval: 50,\n            majorTickLines: { width: 0 },\n            minorTickLines: { width: 0 }\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n\n      marker: {  visible: false },\n      width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Browser.isDevice ? '100%' : '75%',\n       tooltip: {\n          header: '<b>Fruits Production</b>',\n          enable: true,\n          shared: true,\n          format: '${point.x} : <b>${point.y}</b>'\n      },\n      crosshair: {\n            enable: false,\n        },\n      \n      title: \"Fruits Production Statistics\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.LineSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Legend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.DateTime, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Tooltip, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Crosshair, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Category, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartAnnotation]\n  },\n  \n  methods: {\n    load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n        args.chart.annotations[0].content = '<div style=\"color:black; font-family: bold \">Actual</div>';\n        args.chart.annotations[1].content = '<div style=\"color:black; font-family: bold \">Forecast</div>';\n        if (selectedTheme==='material-dark')\n        {\n            this.AnnotationColor = 'dark';\n        }\n        else if(selectedTheme==='material')\n        {\n            this.AnnotationColor = \"light\";  \n        }\n        else if (selectedTheme==='fabric-dark')\n        {\n            this.AnnotationColor = 'dark';\n        }\n        else if(selectedTheme==='fabric')\n        {\n            this.AnnotationColor = \"light\";  \n        }\n        else if (selectedTheme==='bootstrap5-dark')\n        {\n            this.AnnotationColor = 'dark';\n        }\n        else if (selectedTheme==='bootstrap5')\n        {\n            this.AnnotationColor = \"light\";  \n        }\n        else if (selectedTheme==='fluent-dark')\n        {\n            this.AnnotationColor = \"dark\";    \n        }\n        else if (selectedTheme==='fluent')\n        {\n            this.AnnotationColor = \"light\";  \n        }\n        else if (selectedTheme==='bootstrap4')\n        {\n            this.AnnotationColor = \"light\";          \n        }\n        else if (selectedTheme==='bootstrap-dark')\n        {\n            this.AnnotationColor = \"dark\";         \n        }\n        else if (selectedTheme==='bootstrap')\n        {\n            this.AnnotationColor = \"light\";          \n        }\n        else if (selectedTheme==='tailwind-dark')\n        {\n            this.AnnotationColor = \"dark\";    \n        }\n        else if (selectedTheme==='tailwind')\n        {                    \n            this.AnnotationColor = \"light\";  \n        }\n        else if (selectedTheme==='highcontrast')\n        {\n            this.AnnotationColor = \"dark\";            \n        }\n        else if (selectedTheme === 'material3-dark') {\n            this.AnnotationColor = \"dark\";  \n        }\n        else if (selectedTheme === 'material3') {\n            this.AnnotationColor = \"light\"; \n        }\n        else\n        {\n            this.AnnotationColor = \"light\";  \n        }\n        \n        if(this.AnnotationColor==\"light\")\n        {\n            args.chart.annotations[0].content = '<div style=\"color:black; font-weight: bold \">Actual</div>';\n            args.chart.annotations[1].content = '<div style=\"color:black; font-weight: bold \">Forecast</div>';\n        }\n        else\n        {\n            args.chart.annotations[0].content = '<div style=\"color:whitesmoke; font-weight: bold \">Actual</div>';\n            args.chart.annotations[1].content = '<div style=\"color:whitesmoke; font-weight: bold \">Forecast</div>';\n        }\n  },\n  },\n \n});\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/chart/dashed-line/App.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./Samples/chart/dashed-line/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?");

/***/ }),

/***/ "./Samples/chart/dashed-line/App.vue?vue&type=template&id=07458e0d":
/*!*************************************************************************!*\
  !*** ./Samples/chart/dashed-line/App.vue?vue&type=template&id=07458e0d ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_07458e0d__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_07458e0d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=07458e0d */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=template&id=07458e0d\");\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?");

/***/ }),

/***/ "./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css":
/*!***************************************************************************************!*\
  !*** ./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_07458e0d_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=07458e0d&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_07458e0d_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_07458e0d_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_07458e0d_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_07458e0d_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=template&id=07458e0d":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=template&id=07458e0d ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { align: \"center\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample shows the rate of fruit production statistics with default line series and dash array in the chart. Dashed lines are animated using CSS animation. </p></div><div id=\\\"description\\\"><p> In this example, you will see how to render and configure the line chart. Line charts are used to represent time-dependent data, showing trends in data at equal intervals. You can use <code>DashArray</code>, <code>Width</code>, and <code>Fill</code> properties to customize the line. </p><p><code>Tooltips</code> are enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch enabled devices. </p><p style=\\\"font-weight:500;\\\"><b>Injecting Module</b></p><p> Chart component features are segregated into individual feature-wise modules. To use line series, we need to inject <code>LineSeries</code> module using <code>provide: { chart: [LineSeries, Legend, DateTime, Tooltip, Crosshair]},</code> method. </p><p> More information about the dashed line series can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/chart/chart-type/line#series-customization\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_annotation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-annotation\")\n  const _component_e_annotations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-annotations\")\n  const _component_e_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series\")\n  const _component_e_series_collection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-series-collection\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n        style: {\"display\":\"block\"},\n        theme: _ctx.theme,\n        align: \"center\",\n        id: \"dashed-chartcontainer\",\n        title: _ctx.title,\n        primaryXAxis: _ctx.primaryXAxis,\n        primaryYAxis: _ctx.primaryYAxis,\n        chartArea: _ctx.chartArea,\n        width: _ctx.width,\n        tooltip: _ctx.tooltip,\n        crosshair: _ctx.crosshair,\n        load: $options.load\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotations, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotation, {\n                content: \"<div >Actual</div>\",\n                coordinateUnits: \"Point\",\n                x: \"Feb\",\n                y: \"125\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotation, {\n                content: \"<div >Forecast</div>\",\n                coordinateUnits: \"Point\",\n                x: \"Aug\",\n                y: \"210\"\n              })\n            ]),\n            _: 1 /* STABLE */\n          }),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series_collection, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData,\n                type: \"Line\",\n                xName: \"Period\",\n                yName: \"Banana_ProductionRate\",\n                opacity: \"1\",\n                width: \"2\",\n                marker: _ctx.marker\n              }, null, 8 /* PROPS */, [\"dataSource\", \"marker\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_series, {\n                dataSource: _ctx.seriesData1,\n                type: \"Line\",\n                xName: \"Period\",\n                yName: \"Banana_ProductionRate\",\n                opacity: \"1\",\n                dashArray: \"10\",\n                width: \"2\",\n                marker: _ctx.marker\n              }, null, 8 /* PROPS */, [\"dataSource\", \"marker\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"theme\", \"title\", \"primaryXAxis\", \"primaryYAxis\", \"chartArea\", \"width\", \"tooltip\", \"crosshair\", \"load\"])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=07458e0d&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/chart/dashed-line/App.vue?vue&type=style&index=0&id=07458e0d&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"b2656712\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-charts-vue-samples/./Samples/chart/dashed-line/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"chart/dashed-line/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/chart/dashed-line/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;