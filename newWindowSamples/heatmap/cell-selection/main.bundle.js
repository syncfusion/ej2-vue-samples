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

/***/ "./Samples/heatmap/cell-selection/main.js":
/*!************************************************!*\
  !*** ./Samples/heatmap/cell-selection/main.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/cell-selection/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/main.js?");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/App.vue":
/*!************************************************!*\
  !*** ./Samples/heatmap/cell-selection/App.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1a73a56c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1a73a56c */ \"./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1a73a56c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/heatmap/cell-selection/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cell-seletion-data.json */ \"./Samples/heatmap/cell-selection/cell-seletion-data.json\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-heatmap': _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.HeatMapComponent,\n    'ejs-button': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent,\n    'ejs-chart': _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text:'Top export products 2014-2018, Value in USD million',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily:'inherit'\n            }\n        },\n         xAxis: {\n            labels: ['Cereals', 'Meat', 'Spices', 'Tea', 'Edible Oil', 'Dairy Products', 'Wheat'],\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        yAxis: {\n            labels:['2014','2015','2016','2017','2018'],\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        allowSelection:true,\n        dataSource: _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_3__.cellSeletionData,\n        paletteSettings: {\n             palette: [\n                {color: '#3C5E62 '},\n                {color: '#86C843 '}\n            ]\n        },\n        legendSettings: {\n            visible: false\n        },\n        tooltipSettings:{\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        cellSettings:{\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        primaryXAxis: {\n        valueType: 'Category', interval: 1, majorGridLines: { width: 0 }\n    },\n    chartArea: { border: { width: 0 } },\n    primaryYAxis:\n    {\n        majorGridLines: { width: 0 },\n        majorTickLines: { width: 0 }, lineStyle: { width: 0 }, labelStyle: { color: 'transparent' }\n    },\n    series: _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_3__.chartData,\n    tooltip: {\n        enable: true\n    }\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Tooltip],\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.ColumnSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Legend, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.DataLabel, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Category, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.Tooltip]\n},\nmethods: {\n    load: function(args) {\n      /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n      /* custom code end */\n    },\n    chartLoad: function(args)\n    {\n        /* custom code start */    \n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        args.chart.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n        /* custom code end */\n    },\n    cellSelected: function(args)\n    {\n        let data = args.data\n            let length = data.length;\n            let xAxis = [];\n            let flag = [];\n            let series = [];\n             for (let i= 0; i < length; i++) {\n                 if (xAxis.indexOf(data[i].xLabel) === -1) {\n                     xAxis.push(data[i].xLabel);\n                     flag.push(false);\n                 }\n             }\n             for (var i = 0; i < length; i++) {\n                 var index = xAxis.indexOf(data[i].xLabel);\n                 if (!flag[index]) {\n                     flag[index] = true;\n                     var column = {};\n                     column.type = 'Column';\n                     column.xName = 'x';\n                     column.yName = 'y';\n                     column.width = 2;\n                     column.name = data[i].xLabel;\n                     column.marker = { dataLabel: { visible: false } };\n                     column.dataSource = [];\n                     var columnData = {};\n                     columnData.x = data[i].yLabel;\n                     columnData.y = data[i].value;\n                     column.dataSource.push(columnData);\n                     series.push(column);\n                 }\n                 else {\n                     var columnData = {};\n                     columnData.x = data[i].yLabel;\n                     columnData.y = data[i].value;\n                     series[index].dataSource.push(columnData);\n                 }\n             }\n             this.$refs.chart.ej2Instances.series = series;\n             this.$refs.chart.ej2Instances.refresh();\n    },\n    onClick: function(){\n        this.$refs.heatmap.ej2Instances.clearSelection();\n        this.$refs.chart.ej2Instances.series = _cell_seletion_data_json__WEBPACK_IMPORTED_MODULE_3__.chartData;\n        this.$refs.chart.ej2Instances.refresh();\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/cell-selection/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c":
/*!******************************************************************************!*\
  !*** ./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1a73a56c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1a73a56c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1a73a56c */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c\");\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/cell-selection/App.vue?vue&type=template&id=1a73a56c ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section col-lg-9\" }\nconst _hoisted_2 = {\n  class: \"content-wrapper\",\n  style: {\"width\":\"99%\",\"margin-left\":\"-10px\"}\n}\nconst _hoisted_3 = { class: \"col-lg-3 property-section\" }\nconst _hoisted_4 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\"}\n}\nconst _hoisted_5 = { style: {\"height\":\"50px\"} }\nconst _hoisted_6 = { style: {\"width\":\"40%\"} }\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample visualizes the revenue from the top exported products between the year 2014 and 2018, valued in USD million. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to selected the cell in heat map and render the column chart based on selected data. </p><p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p><br><p><b>Injecting Module</b></p><p> Heatmap component features are separated into discrete feature-based modules. To use a tooltip, inject the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip\\\">Tooltip</a> module using the <code>provide:{ heatmap:[Tooltip] }</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_heatmap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-heatmap\")\n  const _component_ejs_chart = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-chart\")\n  const _component_ejs_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-button\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_heatmap, {\n            style: {\"height\":\"300px\"},\n            id: \"container\",\n            ref: \"heatmap\",\n            cellSettings: _ctx.cellSettings,\n            tooltipSettings: _ctx.tooltipSettings,\n            titleSettings: _ctx.titleSettings,\n            xAxis: _ctx.xAxis,\n            yAxis: _ctx.yAxis,\n            dataSource: _ctx.dataSource,\n            paletteSettings: _ctx.paletteSettings,\n            legendSettings: _ctx.legendSettings,\n            allowSelection: _ctx.allowSelection,\n            load: $options.load,\n            cellSelected: $options.cellSelected\n          }, null, 8 /* PROPS */, [\"cellSettings\", \"tooltipSettings\", \"titleSettings\", \"xAxis\", \"yAxis\", \"dataSource\", \"paletteSettings\", \"legendSettings\", \"allowSelection\", \"load\", \"cellSelected\"]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_chart, {\n            style: {\"display\":\"block\",\"height\":\"300px\"},\n            ref: \"chart\",\n            id: \"chartcontainer\",\n            primaryXAxis: _ctx.primaryXAxis,\n            primaryYAxis: _ctx.primaryYAxis,\n            chartArea: _ctx.chartArea,\n            tooltip: _ctx.tooltip,\n            series: _ctx.series,\n            load: $options.chartLoad\n          }, null, 8 /* PROPS */, [\"primaryXAxis\", \"primaryYAxis\", \"chartArea\", \"tooltip\", \"series\", \"load\"])\n        ])\n      ])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_4, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_5, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_6, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_button, {\n                id: \"clearSelection\",\n                onClick: $options.onClick\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Clear Selection\")\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"onClick\"])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_7\n  ]))\n}\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/cell-selection/cell-seletion-data.json":
/*!****************************************************************!*\
  !*** ./Samples/heatmap/cell-selection/cell-seletion-data.json ***!
  \****************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"cellSeletionData\":[[2.9,5.2,3.4,5.6,4.4],[6.6,4.8,8,3.9,6.5],[5.1,4.6,5.4,3.9,4.3],[5.2,4.3,3.9,6.2,6.4],[7,3,1.9,5.9,3.5],[7.8,5.9,3.9,4.3,4.3],[6.5,4.3,3.9,5.2,3.9]],\"chartData\":[{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Cereals\",\"dataSource\":[{\"x\":\"2014\",\"y\":2.9},{\"x\":\"2015\",\"y\":5.2},{\"x\":\"2016\",\"y\":3.4},{\"x\":\"2017\",\"y\":5.6},{\"x\":\"2018\",\"y\":4.4}],\"marker\":{\"dataLabel\":{\"visible\":false}}},{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Meat\",\"dataSource\":[{\"x\":\"2014\",\"y\":6.6},{\"x\":\"2015\",\"y\":4.8},{\"x\":\"2016\",\"y\":8},{\"x\":\"2017\",\"y\":3.9},{\"x\":\"2018\",\"y\":6.5}],\"marker\":{\"dataLabel\":{\"visible\":false}}},{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Spices\",\"dataSource\":[{\"x\":\"2014\",\"y\":5.1},{\"x\":\"2015\",\"y\":4.6},{\"x\":\"2016\",\"y\":5.4},{\"x\":\"2017\",\"y\":3.9},{\"x\":\"2018\",\"y\":4.3}],\"marker\":{\"dataLabel\":{\"visible\":false}}},{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Tea\",\"dataSource\":[{\"x\":\"2014\",\"y\":5.2},{\"x\":\"2015\",\"y\":4.3},{\"x\":\"2016\",\"y\":3.9},{\"x\":\"2017\",\"y\":6.2},{\"x\":\"2018\",\"y\":6.4}],\"marker\":{\"dataLabel\":{\"visible\":false}}},{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Edible Oil\",\"dataSource\":[{\"x\":\"2014\",\"y\":7},{\"x\":\"2015\",\"y\":3},{\"x\":\"2016\",\"y\":1.9},{\"x\":\"2017\",\"y\":5.9},{\"x\":\"2018\",\"y\":3.5}],\"marker\":{\"dataLabel\":{\"visible\":false}}},{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Dairy Products\",\"dataSource\":[{\"x\":\"2014\",\"y\":7.8},{\"x\":\"2015\",\"y\":5.9},{\"x\":\"2016\",\"y\":3.9},{\"x\":\"2017\",\"y\":4.3},{\"x\":\"2018\",\"y\":4.5}],\"marker\":{\"dataLabel\":{\"visible\":false}}},{\"type\":\"Column\",\"xName\":\"x\",\"width\":2,\"yName\":\"y\",\"name\":\"Wheat\",\"dataSource\":[{\"x\":\"2014\",\"y\":6.5},{\"x\":\"2015\",\"y\":4.3},{\"x\":\"2016\",\"y\":3.9},{\"x\":\"2017\",\"y\":5.2},{\"x\":\"2018\",\"y\":3.9}],\"marker\":{\"dataLabel\":{\"visible\":false}}}]}');\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/cell-selection/cell-seletion-data.json?");

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
/******/ 			"heatmap/cell-selection/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/heatmap/cell-selection/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;