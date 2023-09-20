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

/***/ "./Samples/maps/curved-lines/main.js":
/*!*******************************************!*\
  !*** ./Samples/maps/curved-lines/main.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/curved-lines/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/curved-lines/main.js?");

/***/ }),

/***/ "./Samples/maps/curved-lines/App.vue":
/*!*******************************************!*\
  !*** ./Samples/maps/curved-lines/App.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_007c79a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=007c79a6 */ \"./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_007c79a6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/maps/curved-lines/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/curved-lines/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/map-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/navigation-data'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-maps': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MapsComponent,\n    'e-layers': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.LayersDirective,\n    'e-layer': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.LayerDirective,\n    'e-markerSettings': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MarkersDirective,\n    'e-markerSetting': _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MarkerDirective\n  },\n  data:function(){\n      return{\n        centerPosition: {\n            latitude: 30.41078179084589,\n            longitude: 90.52734374999999\n        },\n        zoomSettings: {\n            enable: false,\n            zoomFactor: 3.5,\n            mouseWheelZoom: false,\n            toolbars: []\n        },\n        mapsArea: {\n            background: '#AEE2FA'\n        },\n        titleSettings: {\n            text: 'Flights from India to China',\n            textStyle: {\n                size: '16px',\n                fontFamily: 'Segoe UI'\n            }\n        },\n        animationDuration: 1000,\n        shapePropertyPath: 'name',\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MapAjax('././../../source/maps/map-data/world-map.json'),\n        shapeDataPath: 'name',\n        dataSource: [\n                    {\n                        name: 'India'\n                    },\n                    {\n                        name: 'China'\n                    }\n                ],\n        shapeSettings: {\n                    colorValuePath: 'name',\n                    fill: '#fcfbf9',\n                    border: {\n                        width: 0.1,\n                        color: 'black'\n                    },\n                    colorMapping: [\n                        {\n                            value: 'China',\n                            color: '#f7d083'\n                        },\n                        {\n                            value: 'India',\n                            color: '#FFFE99'\n                        }\n                    ]\n                },\n        navigationLineSettings: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/navigation-data'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n        markerShapeWidth: 4,\n        markerShapeDataSource: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/map-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n        markerShapeBorder: { width: 1, color: 'black' },\n        markerShapeTooltipSettings: { visible: true, valuePath: 'title' },\n        newDelhiTextDataSource: [{ 'name': 'New Delhi', 'latitude': 28.6139391, 'longitude': 77.2090212 }],\n        newDelhiTextOffset: { x: -50, y: 10 },\n        mumbaiTextDataSource: [{ 'name': 'Mumbai', 'latitude': 19.0759837, 'longitude': 72.8776559 }],\n        mumbaiTextOffset: { x: 0, y: 12 },\n        chennaiTextDataSource: [{ 'name': 'Chennai', 'latitude': 13.0826802, 'longitude': 80.2707184 }],\n        chennaiTextOffset: { x: 0, y: 12 },\n        kolkataTextDataSource: [{ 'name': 'Kolkata', 'latitude': 22.572646, 'longitude': 88.363895 }],\n        kolkataTextOffset: { x: 0, y: 12 },\n        kunmingTextDataSource: [{ 'name': 'Kunming', 'latitude': 24.880095, 'longitude': 102.832891 }],\n        kunmingTextOffset: { x: 0, y: 12 },\n        beijingTextDataSource: [{ 'name': 'Beijing', 'latitude': 39.9041999, 'longitude': 116.4073963 }],\n        beijingTextOffset: { x: 0, y: 12 },\n        shanghaiTextDataSource: [{ 'name': 'Shanghai', 'latitude': 31.2303904, 'longitude': 121.4737021 }],\n        shanghaiTextOffset: { x: 0, y: 12 },\n        hongKongTextDataSource: [{ 'name': 'Hong Kong', 'latitude': 22.396428, 'longitude': 114.109497 }],\n        hongKongTextOffset: { x: 20, y: 20 },\n        guangzhouTextDataSource: [{ 'name': 'Guangzhou', 'latitude': 23.12911, 'longitude': 113.264385 }],\n        guangzhouTextOffset: { x: 35, y: -10 },\n        markerSettings: [\n                    {\n                        dataSource: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../maps/map-data/map-location'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n                        visible: true,\n                        shape: 'Circle',\n                        fill: 'white',\n                        border: { width: 1, color: 'black' },\n                        width: 4,\n                        animationDuration: 0,\n                        tooltipSettings: {\n                            visible: true,\n                            valuePath: 'title'\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'New Delhi',\n                                'latitude': 28.6139391,\n                                'longitude': 77.2090212\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500; font-family: Segoe UI; \">New Delhi' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: -50,\n                            y: 10\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Mumbai',\n                                'latitude': 19.0759837,\n                                'longitude': 72.8776559\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Mumbai' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Chennai',\n                                'latitude': 13.0826802,\n                                'longitude': 80.2707184\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Chennai' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Kolkata',\n                                'latitude': 22.572646,\n                                'longitude': 88.363895\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Kolkata' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Kunming',\n                                'latitude': 24.880095,\n                                'longitude': 102.832891\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Kunming' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Beijing',\n                                'latitude': 39.9041999,\n                                'longitude': 116.4073963\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Beijing' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Shanghai',\n                                'latitude': 31.2303904,\n                                'longitude': 121.4737021\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Shanghai' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 0,\n                            y: 12\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Hong Kong',\n                                'latitude': 22.396428,\n                                'longitude': 114.109497\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Hong Kong' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 20,\n                            y: 20\n                        }\n                    },\n                    {\n                        dataSource: [\n                            {\n                                'name': 'Guangzhou',\n                                'latitude': 23.12911,\n                                'longitude': 113.264385\n                            }\n                        ],\n                        visible: true,\n                        template: '<div id=\"marker1\" style=\"font-size:12px;color:black;font-weight: 500\"; font-family: Segoe UI;>Guangzhou' +\n                            '</div>',\n                        animationDuration: 0,\n                        offset: {\n                            x: 35,\n                            y: -10\n                        }\n                    }\n                ]\n      }\n  },\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.Marker, _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.MapsTooltip, _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.NavigationLine, _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_0__.Zoom ]\n},\n/* custom code start */\nmethods:{\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    }  \n}\n/* custom code end */\n});\n\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/curved-lines/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/curved-lines/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/curved-lines/App.vue?");

/***/ }),

/***/ "./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6":
/*!*************************************************************************!*\
  !*** ./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_007c79a6__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_007c79a6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=007c79a6 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6\");\n\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/curved-lines/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/maps/curved-lines/App.vue?vue&type=template&id=007c79a6 ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"New Delhi\", -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Mumbai\", -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Chennai\", -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Kolkata\", -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Kunming\", -1 /* HOISTED */)\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Beijing\", -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Shanghai\", -1 /* HOISTED */)\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Hong Kong\", -1 /* HOISTED */)\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"marker1\",\n  style: {\"font-size\":\"12px\",\"color\":\"black\",\"font-weight\":\"500\",\"font-family\":\"Segoe UI\"}\n}, \"Guangzhou\", -1 /* HOISTED */)\nconst _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"float\":\"right\",\"margin-right\":\"10px\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Source: \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \"https://www.tibettravel.org/nepal-map/nepal-india-map.html\",\n    target: \"_blank\"\n  }, \"www.tibettravel.org\")\n], -1 /* HOISTED */)\nconst _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample demonstrates the flight routes from India to China. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to render the curved lines between two points in a map. You can use the <code>dashArray</code>, <code>width</code>, and <code>color</code> properties to customize the appearance of the navigation lines. </p><br><p style=\\\"font-weight:500;\\\">Injecting Module</p><p> Maps component features are segregated into individual feature-wise modules. To use the navigation lines, inject the <code>NavigationLine</code> module using the <code>Maps.Inject(NavigationLine)</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_markerSetting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-markerSetting\")\n  const _component_e_markerSettings = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-markerSettings\")\n  const _component_e_layer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-layer\")\n  const _component_e_layers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-layers\")\n  const _component_ejs_maps = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-maps\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_maps, {\n        id: \"container\",\n        align: \"center\",\n        load: $options.load,\n        titleSettings: _ctx.titleSettings,\n        zoomSettings: _ctx.zoomSettings,\n        centerPosition: _ctx.centerPosition,\n        mapsArea: _ctx.mapsArea\n      }, {\n        newDelhiTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_2\n        ]),\n        mumbaiTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_3\n        ]),\n        chennaiTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_4\n        ]),\n        kolkataTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_5\n        ]),\n        kunmingTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_6\n        ]),\n        beijingTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_7\n        ]),\n        shanghaiTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_8\n        ]),\n        hongKongTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_9\n        ]),\n        guangzhouTextTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_10\n        ]),\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_layers, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_layer, {\n                shapeData: _ctx.shapeData,\n                animationDuration: _ctx.animationDuration,\n                shapePropertyPath: _ctx.shapePropertyPath,\n                shapeDataPath: _ctx.shapeDataPath,\n                dataSource: _ctx.dataSource,\n                shapeSettings: _ctx.shapeSettings,\n                navigationLineSettings: _ctx.navigationLineSettings\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSettings, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.markerShapeDataSource,\n                        shape: \"Circle\",\n                        fill: \"white\",\n                        width: _ctx.markerShapeWidth,\n                        border: _ctx.markerShapeBorder,\n                        tooltipSettings: _ctx.markerShapeTooltipSettings\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"width\", \"border\", \"tooltipSettings\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.newDelhiTextDataSource,\n                        offset: _ctx.newDelhiTextOffset,\n                        template: 'newDelhiTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.mumbaiTextDataSource,\n                        offset: _ctx.mumbaiTextOffset,\n                        template: 'mumbaiTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.chennaiTextDataSource,\n                        offset: _ctx.chennaiTextOffset,\n                        template: 'chennaiTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.kolkataTextDataSource,\n                        offset: _ctx.kolkataTextOffset,\n                        template: 'kolkataTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.kunmingTextDataSource,\n                        offset: _ctx.kunmingTextOffset,\n                        template: 'kunmingTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.beijingTextDataSource,\n                        offset: _ctx.beijingTextOffset,\n                        template: 'beijingTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.shanghaiTextDataSource,\n                        offset: _ctx.shanghaiTextOffset,\n                        template: 'shanghaiTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.hongKongTextDataSource,\n                        offset: _ctx.hongKongTextOffset,\n                        template: 'hongKongTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_markerSetting, {\n                        visible: \"true\",\n                        animationDuration: \"0\",\n                        dataSource: _ctx.guangzhouTextDataSource,\n                        offset: _ctx.guangzhouTextOffset,\n                        template: 'guangzhouTextTemplate'\n                      }, null, 8 /* PROPS */, [\"dataSource\", \"offset\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"shapeData\", \"animationDuration\", \"shapePropertyPath\", \"shapeDataPath\", \"dataSource\", \"shapeSettings\", \"navigationLineSettings\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"load\", \"titleSettings\", \"zoomSettings\", \"centerPosition\", \"mapsArea\"]),\n      _hoisted_11\n    ]),\n    _hoisted_12\n  ]))\n}\n\n//# sourceURL=webpack://ej2-maps-vue-samples/./Samples/maps/curved-lines/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"maps/curved-lines/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/maps/curved-lines/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;