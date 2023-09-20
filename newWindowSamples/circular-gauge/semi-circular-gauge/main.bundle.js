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

/***/ "./Samples/circular-gauge/semi-circular-gauge/main.js":
/*!************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/main.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/semi-circular-gauge/main.js?");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue":
/*!************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_400b4fa8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=400b4fa8 */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_400b4fa8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/circular-gauge/semi-circular-gauge/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ndata:function(){\n    return{\n            centerX:'50%',\n            centerY:'50%',\n            startAngle: 270,\n            background:'transparent',\n            endAngle: 90,\n            lineStyle: { width: 3},\n            labelStyle: {\n                 position: 'Outside', autoAngle: true,\n                font: { fontWeight: 'normal', fontFamily: 'inherit' },\n                format:'{value}%'\n            },\n            majorTicks: {\n                position: 'Inside', width: 2, height: 15, interval: 10\n            },\n            minorTicks: {\n                position: 'Inside', height: 8, width: 1, interval: 2\n            },\n            radius1: '100%',\n            pointerWidth: 7,            \n            pointerRadius: '75%',\n            value: 30,\n            animation: { enable: false },\n            cap: { radius: 8, border: { width: 0 } },\n            needleTail: { length: '13%'}\n    }\n},\ncomponents: {\n    'ejs-circulargauge': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.CircularGaugeComponent,\n    'e-axis': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n    'e-axes': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n    'e-pointer': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n    'e-pointers': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n    'ejs-checkbox': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.Annotations]\n},\nmethods: {\n    angleStart:function(){\n      let min = parseInt(document.getElementById('startangle').value, 10);\n      document.getElementById('rangeStart').innerHTML = min + '°';\n      this.$refs.circulargauge.ej2Instances.axes[0].startAngle = min;\n      this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    angleEnd:function(){\n      let max = parseInt(document.getElementById('end').value, 10);\n      document.getElementById('rangeEnd').innerHTML = max + '°';\n      this.$refs.circulargauge.ej2Instances.axes[0].endAngle = max;\n      this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    gaugeRadius:function(){\n      let max = parseInt(document.getElementById('radius').value, 10);\n      document.getElementById('radius1').innerHTML = max + '%';\n      this.$refs.circulargauge.ej2Instances.axes[0].radius = '' + max + '%';\n      this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    gaugeCenterX:function(){\n      let checkbox = this.$refs.angle.ej2Instances;\n      if(!checkbox.checked) {\n         let max = parseInt(document.getElementById('centerX').value, 10);\n         document.getElementById('center1').innerHTML = max + '%';\n         this.$refs.circulargauge.ej2Instances.centerX = '' + max + '%';\n         this.$refs.circulargauge.ej2Instances.refresh();\n      }      \n    },\n    gaugeCenterY:function(){\n      let checkbox = this.$refs.angle.ej2Instances;\n      if(!checkbox.checked) {\n            let max = parseInt(document.getElementById('centerY').value, 10);\n            document.getElementById('center2').innerHTML = max + '%';\n            this.$refs.circulargauge.ej2Instances.centerY = '' + max + '%';\n            this.$refs.circulargauge.ej2Instances.refresh();\n      }      \n    },\n    onChange: function(args) {\n      let centerX = document.getElementById('centerX');\n      let centerY = document.getElementById('centerY');\n       if (args.checked) {\n            this.$refs.circulargauge.ej2Instances.centerX = null;\n            this.$refs.circulargauge.ej2Instances.centerY = null;\n            this.$refs.circulargauge.ej2Instances.moveToCenter = true;\n            centerX.disabled = true;\n            centerY.disabled = true;\n        } else {\n             this.$refs.circulargauge.ej2Instances.centerX = centerX.value + '%';\n             this.$refs.circulargauge.ej2Instances.centerY = centerY.value + '%';\n             centerX.disabled = false;\n             centerY.disabled = false;\n             this.$refs.circulargauge.ej2Instances.moveToCenter = false;\n        }\n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    hideLabel: function(args) {\n        this.$refs.circulargauge.ej2Instances.axes[0].hideIntersectingLabel = args.checked;\n        this.$refs.circulargauge.ej2Instances.refresh();\n    },\n    load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n      /* custom code end */\n    }\n}\n});\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/semi-circular-gauge/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8":
/*!******************************************************************************************!*\
  !*** ./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_400b4fa8__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_400b4fa8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=400b4fa8 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8\");\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/semi-circular-gauge/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/semi-circular-gauge/App.vue?vue&type=template&id=400b4fa8 ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-md-8 control-section\" }\nconst _hoisted_2 = {\n  class: \"content-wrapper\",\n  align: \"center\"\n}\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\", null, null, -1 /* HOISTED */)\nconst _hoisted_4 = { class: \"col-md-4 property-section\" }\nconst _hoisted_5 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\",\"margin-left\":\"-20px\"}\n}\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"colgroup\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n    span: \"1\",\n    style: {\"width\":\"50%\"}\n  }),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n    span: \"1\",\n    style: {\"width\":\"30%\"}\n  }),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n    span: \"1\",\n    style: {\"width\":\"20%\"}\n  })\n], -1 /* HOISTED */)\nconst _hoisted_7 = { style: {\"height\":\"50px\"} }\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"14px\"} }, \"Start Angle \")\n], -1 /* HOISTED */)\nconst _hoisted_9 = { style: {\"width\":\"95%\"} }\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"padding-top\":\"10px\",\"text-align\":\"center\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"25px\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      id: \"rangeStart\",\n      style: {\"margin-left\":\"-10px\",\"font-size\":\"14px\"}\n    }, \"270°\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_11 = { style: {\"height\":\"50px\"} }\nconst _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"14px\"} }, \"End Angle\")\n], -1 /* HOISTED */)\nconst _hoisted_13 = { style: {\"width\":\"95%\"} }\nconst _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"padding-top\":\"10px\",\"text-align\":\"center\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"25px\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      id: \"rangeEnd\",\n      style: {\"margin-left\":\"-10px\",\"font-size\":\"14px\"}\n    }, \"90°\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_15 = { style: {\"height\":\"50px\"} }\nconst _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"14px\"} }, \"Radius\")\n], -1 /* HOISTED */)\nconst _hoisted_17 = { style: {\"width\":\"95%\"} }\nconst _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"text-align\":\"center\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"25px\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      id: \"radius1\",\n      style: {\"margin-left\":\"-10px\",\"font-size\":\"14px\"}\n    }, \"100%\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_19 = { style: {\"height\":\"50px\"} }\nconst _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"90%\",\"font-size\":\"14px\",\"margin-top\":\"-5px\"} }, \" Radius based on angle\")\n], -1 /* HOISTED */)\nconst _hoisted_21 = { style: {\"padding-top\":\"6px\",\"margin-left\":\"-10px\"} }\nconst _hoisted_22 = { style: {\"height\":\"50px\"} }\nconst _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"14px\"} }, \"Center X\")\n], -1 /* HOISTED */)\nconst _hoisted_24 = { style: {\"width\":\"95%\"} }\nconst _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"text-align\":\"center\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"25px\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      id: \"center1\",\n      style: {\"margin-left\":\"-10px\",\"font-size\":\"14px\"}\n    }, \"50%\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_26 = { style: {\"height\":\"50px\"} }\nconst _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"font-size\":\"14px\"} }, \"Center Y\")\n], -1 /* HOISTED */)\nconst _hoisted_28 = { style: {\"width\":\"95%\"} }\nconst _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"text-align\":\"center\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"25px\"} }, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      id: \"center2\",\n      style: {\"margin-left\":\"-10px\",\"font-size\":\"14px\"}\n    }, \"50%\")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_30 = { style: {\"height\":\"50px\"} }\nconst _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"width\":\"90%\",\"font-size\":\"14px\",\"margin-top\":\"-5px\"} }, \" Hide Intersecting Labels\")\n], -1 /* HOISTED */)\nconst _hoisted_32 = { style: {\"padding-top\":\"6px\",\"margin-left\":\"-10px\"} }\nconst _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample shows how to create semi-circular or quarter-circular gauges by modifying a circular gauge with different start and end angles. \")\n], -1 /* HOISTED */)\nconst _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, a circular gauge is rendered with different start and end angles to create semi-circular or quarter-circular gauges. The radius, start angle, end angle, and center position of the circular gauge can all be customized using the options in the properties panel. \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" More information on the semi-circular or quarter-circular gauges can be found in this \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n      target: \"_blank\",\n      href: \"https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-appearance#radius-calculation-based-on-angles\"\n    }, \"documentation section\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\". \")\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_circulargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-circulargauge\")\n  const _component_ejs_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-checkbox\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_circulargauge, {\n          ref: \"circulargauge\",\n          background: _ctx.background,\n          style: {\"display\":\"block\"},\n          align: \"center\",\n          load: $options.load,\n          id: \"semi-container\",\n          moveToCenter: false,\n          centerX: _ctx.centerX,\n          centerY: _ctx.centerY\n        }, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                  startAngle: _ctx.startAngle,\n                  endAngle: _ctx.endAngle,\n                  lineStyle: _ctx.lineStyle,\n                  labelStyle: _ctx.labelStyle,\n                  majorTicks: _ctx.majorTicks,\n                  minorTicks: _ctx.minorTicks,\n                  radius: _ctx.radius1,\n                  hideIntersectingLabel: true,\n                  minimum: \"0\",\n                  maximum: \"100\"\n                }, {\n                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                          value: _ctx.value,\n                          radius: _ctx.pointerRadius,\n                          color: _ctx.color,\n                          pointerWidth: _ctx.pointerWidth,\n                          animation: _ctx.animation,\n                          cap: _ctx.cap,\n                          needleTail: _ctx.needleTail\n                        }, null, 8 /* PROPS */, [\"value\", \"radius\", \"color\", \"pointerWidth\", \"animation\", \"cap\", \"needleTail\"])\n                      ]),\n                      _: 1 /* STABLE */\n                    })\n                  ]),\n                  _: 1 /* STABLE */\n                }, 8 /* PROPS */, [\"startAngle\", \"endAngle\", \"lineStyle\", \"labelStyle\", \"majorTicks\", \"minorTicks\", \"radius\"])\n              ]),\n              _: 1 /* STABLE */\n            })\n          ]),\n          _: 1 /* STABLE */\n        }, 8 /* PROPS */, [\"background\", \"load\", \"centerX\", \"centerY\"])\n      ])\n    ]),\n    _hoisted_3,\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_5, [\n        _hoisted_6,\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_7, [\n            _hoisted_8,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"range\",\n                  onPointermove: _cache[0] || (_cache[0] = (...args) => ($options.angleStart && $options.angleStart(...args))),\n                  onTouchmove: _cache[1] || (_cache[1] = (...args) => ($options.angleStart && $options.angleStart(...args))),\n                  onChange: _cache[2] || (_cache[2] = (...args) => ($options.angleStart && $options.angleStart(...args))),\n                  id: \"startangle\",\n                  value: \"270\",\n                  min: \"0\",\n                  max: \"360\"\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ]),\n            _hoisted_10\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_11, [\n            _hoisted_12,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"range\",\n                  onPointermove: _cache[3] || (_cache[3] = (...args) => ($options.angleEnd && $options.angleEnd(...args))),\n                  onTouchmove: _cache[4] || (_cache[4] = (...args) => ($options.angleEnd && $options.angleEnd(...args))),\n                  onChange: _cache[5] || (_cache[5] = (...args) => ($options.angleEnd && $options.angleEnd(...args))),\n                  id: \"end\",\n                  value: \"90\",\n                  min: \"0\",\n                  max: \"360\"\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ]),\n            _hoisted_14\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_15, [\n            _hoisted_16,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"range\",\n                  onPointermove: _cache[6] || (_cache[6] = (...args) => ($options.gaugeRadius && $options.gaugeRadius(...args))),\n                  onTouchmove: _cache[7] || (_cache[7] = (...args) => ($options.gaugeRadius && $options.gaugeRadius(...args))),\n                  onChange: _cache[8] || (_cache[8] = (...args) => ($options.gaugeRadius && $options.gaugeRadius(...args))),\n                  id: \"radius\",\n                  value: \"100\",\n                  min: \"30\",\n                  max: \"100\"\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ]),\n            _hoisted_18\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_19, [\n            _hoisted_20,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_21, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n                  ref: \"angle\",\n                  id: \"angle\",\n                  change: $options.onChange\n                }, null, 8 /* PROPS */, [\"change\"])\n              ])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_22, [\n            _hoisted_23,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_24, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"range\",\n                  id: \"centerX\",\n                  onPointermove: _cache[9] || (_cache[9] = (...args) => ($options.gaugeCenterX && $options.gaugeCenterX(...args))),\n                  onTouchmove: _cache[10] || (_cache[10] = (...args) => ($options.gaugeCenterX && $options.gaugeCenterX(...args))),\n                  onChange: _cache[11] || (_cache[11] = (...args) => ($options.gaugeCenterX && $options.gaugeCenterX(...args))),\n                  value: \"50\",\n                  min: \"0\",\n                  max: \"100\"\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ]),\n            _hoisted_25\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_26, [\n            _hoisted_27,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_28, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"range\",\n                  onPointermove: _cache[12] || (_cache[12] = (...args) => ($options.gaugeCenterY && $options.gaugeCenterY(...args))),\n                  onTouchmove: _cache[13] || (_cache[13] = (...args) => ($options.gaugeCenterY && $options.gaugeCenterY(...args))),\n                  onChange: _cache[14] || (_cache[14] = (...args) => ($options.gaugeCenterY && $options.gaugeCenterY(...args))),\n                  id: \"centerY\",\n                  value: \"50\",\n                  min: \"0\",\n                  max: \"100\"\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ]),\n            _hoisted_29\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_30, [\n            _hoisted_31,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_32, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n                  checked: \"true\",\n                  ref: \"Hide\",\n                  id: \"label\",\n                  change: $options.hideLabel\n                }, null, 8 /* PROPS */, [\"change\"])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_33,\n    _hoisted_34\n  ]))\n}\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/semi-circular-gauge/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"circular-gauge/semi-circular-gauge/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_circulargauge_vue_samples"] = self["webpackChunkej2_circulargauge_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/circular-gauge/semi-circular-gauge/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;