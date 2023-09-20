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

/***/ "./Samples/maps/pie/main.js":
/*!**********************************!*\
  !*** ./Samples/maps/pie/main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/pie/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/pie/main.js?");

/***/ }),

/***/ "./Samples/maps/pie/App.vue":
/*!**********************************!*\
  !*** ./Samples/maps/pie/App.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1058ca7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1058ca7a */ \"./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/maps/pie/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1058ca7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/maps/pie/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/pie/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/pie/App.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/pie/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n\n\n\n\n_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AccumulationChart.Inject(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AccumulationTooltip);\nlet chartCollection = [];\nlet count = 0;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-maps': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MapsComponent,\n        'e-layers': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.LayersDirective,\n        'e-layer': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.LayerDirective,\n        'e-markerSettings': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MarkersDirective,\n        'e-markerSetting': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MarkerDirective\n    },\n    data: function () { \n        return {\n            titleSettings: {\n                text: 'Top 6 largest countries age group details',\n                textStyle: {\n                    size: '16px',\n                    fontFamily: 'Segoe UI'\n                }\n            },\n            legendSettings: {\n                visible: true,\n                position: 'Bottom',\n                textStyle: {\n                    fontFamily: 'Segoe UI'\n                }\n            },\n            zoomSettings: {\n                enable: false\n            },\n            shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MapAjax('././../../source/maps/map-data/world-map.json'),\n            shapeSettings: {\n                fill: '#E5E5E5',\n                colorMapping: [{\n                        from: 0,\n                        to: 4,\n                        color: '#634D6F',\n                        label: '0-14 years',\n                    },\n                    {\n                        from: 5,\n                        to: 14,\n                        color: '#B34D6D',\n                        label: '15-24 years'\n                    },\n                    {\n                        from: 15,\n                        to: 59,\n                        color: '#557C5C',\n                        label: '25-54 years'\n                    },\n                    {\n                        from: 60,\n                        to: 100,\n                        color: '#5E55E2',\n                        label: '55-64 years'\n                    }\n                ]\n            },\n            pieOneDataSource: [{ 'latitude': 61.938950426660604, 'longitude': 97.03125 }],\n            pieTwoDataSource: [{ 'latitude': 57.70414723434193, 'longitude': -114.08203125 }],\n            pieThreeDataSource: [{ 'latitude': 39.90973623453719, 'longitude': -103.0078125 }],\n            pieFourDataSource: [{ 'latitude': 35.746512259918504, 'longitude': 102.216796875 }],\n            pieFiveDataSource: [{ 'latitude': -8.667918002363107, 'longitude': -52.55859375 }],\n            pieSixDataSource: [{ 'latitude': -23.725011735951796, 'longitude': 132.978515625 }]\n        }\n    },\n    provide: {\n        maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.Legend, _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.Marker],\n        accumulation: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.PieSeries, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AccumulationDataLabel, _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AccumulationTooltip ]   \n  },\n    methods: {\n        /* custom code start */\n        load: function (args) {\n            let selectedTheme = location.hash.split(\"/\")[1];\n            selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n            args.maps.theme = (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n        },\n        /* custom code end */\n    loaded:function(args){\n                let markers = document.getElementById(args.maps.element.id + '_LayerIndex_0_Markers_Template_Group');\n            if (markers) {\n                for (let i = 0; i < markers.childElementCount; i++) {\n                    this.AccumulationChartRender((markers.childNodes[i].childNodes[0]).id);\n                }\n                count = 0;\n            }\n    },\n    resize:function(args){\n              for (let i = 0; i < chartCollection.length; i++) {\n                chartCollection[i].destroy();\n            }\n    },\n    AccumulationChartRender:function(id){\n    let chartData = this.getData();\n    let dataSource = chartData['data'];\n    let name = chartData['name'];\n    let chart = new _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__.AccumulationChart({\n        background: 'transparent',\n        width: '70',\n        height: '70',\n        tooltip: {\n            enable: true,\n            format: '${point.x} : ${point.y}%'\n        },\n        legendSettings: {visible: false},\n        series: [\n            {\n                explode: true,\n                explodeIndex: 0,\n                explodeOffset: '20%',\n                name: name,\n                palettes: ['#634D6F', '#B34D6D', '#557C5C', '#5E55E2', '#7C744D'],\n                dataSource: dataSource,\n                dataLabel: {\n                    visible: false\n                },\n                type: 'Pie',\n                xName: 'x',\n                yName: 'y'\n            }\n        ]\n    });\n    chart.appendTo('#' + id);\n    chartCollection.push(chart);\n},\n getData:function(){\n    let dataSource;\n    let dataName;\n    if (count === 0) {\n        dataSource = [\n            { 'x': '0-14 years', y: 16 }, { 'x': '15-24 years', y: 11.5 },\n            { 'x': '25-54 years', y: 45.9 }, { 'x': '55-64 years', y: 13.5 },\n        ];\n        dataName = 'Russia';\n    } else if (count === 1) {\n        dataSource = [\n            { 'x': '0-14 years', y: 15.5 }, { 'x': '15-24 years', y: 12.9 },\n            { 'x': '25-54 years', y: 41.4 }, { 'x': '55-64 years', y: 13.3 },\n        ];\n        dataName = 'Canada';\n    } else if (count === 2) {\n        dataSource = [\n            { 'x': '0-14 years', y: 20 }, { 'x': '15-24 years', y: 13.7 },\n            { 'x': '25-54 years', y: 40.2 }, { 'x': '55-64 years', y: 12.3 },\n        ];\n        dataName = 'USA';\n    } else if (count === 3) {\n        dataSource = [\n            { 'x': '0-14 years', y: 17.2 }, { 'x': '15-24 years', y: 15.4 },\n            { 'x': '25-54 years', y: 46.9 }, { 'x': '55-64 years', y: 11.3 },\n        ];\n        dataName = 'China';\n    } else if (count === 4) {\n        dataSource = [\n            { 'x': '0-14 years', y: 24.2 }, { 'x': '15-24 years', y: 16.7 },\n            { 'x': '25-54 years', y: 43.6 }, { 'x': '55-64 years', y: 8.2 },\n        ];\n        dataName = 'Brazil';\n    } else if (count === 5) {\n        dataSource = [\n            { 'x': '0-14 years', y: 18.1 }, { 'x': '15-24 years', y: 13.4 },\n            { 'x': '25-54 years', y: 42 }, { 'x': '55-64 years', y: 11.8 },\n        ];\n        dataName = 'Australia';\n    }\n    count++;\n    return new Object({ name: dataName, data: dataSource });\n}   \n    }\n});\n\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/pie/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/maps/pie/App.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./Samples/maps/pie/App.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/pie/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/pie/App.vue?");

/***/ }),

/***/ "./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a":
/*!****************************************************************!*\
  !*** ./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1058ca7a__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1058ca7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1058ca7a */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a\");\n\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/pie/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/pie/App.vue?vue&type=template&id=1058ca7a ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"pieChart1\",\n  style: {\"height\":\"70px\",\"width\":\"70px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"pieChart2\",\n  style: {\"height\":\"70px\",\"width\":\"70px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"pieChart3\",\n  style: {\"top\":\"10px\",\"left\":\"10px\",\"height\":\"70px\",\"width\":\"70px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"pieChart4\",\n  style: {\"height\":\"70px\",\"width\":\"70px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"pieChart5\",\n  style: {\"height\":\"70px\",\"width\":\"70px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"pieChart6\",\n  style: {\"height\":\"70px\",\"width\":\"70px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"float\":\"right\",\"margin-right\":\"10px\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Source: \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"http://www.nationmaster.com/country-info/stats/People/Age-structure/55--64-years\",\n    target: \"_blank\"\n  }, \"www.nationmaster.com\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample visualizes the placing of pie charts on the maps. Pie chart is rendered with the age group detais of top 6 largest countries. \")\n], -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, you can see how to render the pie chart as marker in map. Any custom HTML elements can be used as a marker. \"),\n      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\"),\n      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", { style: {\"font-weight\":\"500\"} }, \"Injecting Module\"),\n      /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n        /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Maps component features are segregated into individual feature-wise modules. To use marker template, you need to inject \"),\n        /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"code\", null, \"Marker\"),\n        /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" module using \"),\n        /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"code\", null, \"Maps.Inject(Marker)\"),\n        /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" method. \")\n      ])\n    ])\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_markerSetting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-markerSetting\")\n  const _component_e_markerSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-markerSettings\")\n  const _component_e_layer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-layer\")\n  const _component_e_layers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-layers\")\n  const _component_ejs_maps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-maps\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_maps, {\n        id: \"mapContainer\",\n        loaded: $options.loaded,\n        load: $options.load,\n        resize: $options.resize,\n        titleSettings: _ctx.titleSettings,\n        zoomSettings: _ctx.zoomSettings,\n        legendSettings: _ctx.legendSettings\n      }, {\n        pieOneTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_2\n        ]),\n        pieTwoTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_3\n        ]),\n        pieThreeTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_4\n        ]),\n        pieFourTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_5\n        ]),\n        pieFiveTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_6\n        ]),\n        pieSixTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_7\n        ]),\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_layers, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_layer, {\n                shapeData: _ctx.shapeData,\n                shapeSettings: _ctx.shapeSettings\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSettings, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.pieOneDataSource,\n                        template: 'pieOneTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.pieTwoDataSource,\n                        template: 'pieTwoTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.pieThreeDataSource,\n                        template: 'pieThreeTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.pieFourDataSource,\n                        template: 'pieFourTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.pieFiveDataSource,\n                        template: 'pieFiveTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.pieSixDataSource,\n                        template: 'pieSixTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"shapeData\", \"shapeSettings\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"loaded\", \"load\", \"resize\", \"titleSettings\", \"zoomSettings\", \"legendSettings\"]),\n      _hoisted_8\n    ]),\n    _hoisted_9,\n    _hoisted_10\n  ]))\n}\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/pie/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"maps/pie/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_maps_vue_samples"] = self["webpackChunkej2_maps_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/maps/pie/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;