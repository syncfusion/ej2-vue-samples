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

/***/ "./Samples/linear-gauge/bar-pointer/main.js":
/*!**************************************************!*\
  !*** ./Samples/linear-gauge/bar-pointer/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/bar-pointer/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/bar-pointer/main.js?");

/***/ }),

/***/ "./Samples/linear-gauge/bar-pointer/App.vue":
/*!**************************************************!*\
  !*** ./Samples/linear-gauge/bar-pointer/App.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_def62daa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=def62daa */ \"./Samples/linear-gauge/bar-pointer/App.vue?vue&type=template&id=def62daa\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/linear-gauge/bar-pointer/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_def62daa__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/linear-gauge/bar-pointer/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/bar-pointer/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/bar-pointer/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/bar-pointer/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-lineargauge': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.LinearGaugeComponent,\n        'e-axes': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n        'e-axis': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n        'e-pointers': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n        'e-pointer': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective\n    },\n    data:function(){\n    return{\n        orientation:\"Vertical\",\n        background:'transparent',\n        opposedPosition:true,\n        title1:'Outside',\n        title2:'Cross',\n        title3:'Inside',\n        title4:'Gradient shader',\n        title5:'Multiple bar pointers',\n        titleStyle: {\n         fontFamily: 'inherit', fontWeight: '499'\n        },\n        widthData:'150px',\n        heightData:'350px',\n        majorTicks1: { \n          interval: 20, height: 7, width: 1\n        },\n        minorTicks1:{\n            interval: 10, height: 3\n        },\n        labelStyle1:{\n            font: { fontFamily: 'inherit' }\n        },\n        line1: {\n         width:5\n        },\n        pointer1: [{\n            value: 70,\n            height: 5,\n            width: 5,\n            placement: 'Near',\n            type: 'Bar',\n            position: 'Outside',\n            color: '#0074E3',\n            animationDuration: 1500\n        }],\n        majorTicks2: { \n            interval: 20, height: 7, width: 1\n        },\n        minorTicks2:{\n            interval: 10, height: 3\n        },\n        labelStyle2: { font: { fontFamily: 'inherit' } },\n        line2: {\n         width:5\n        },\n        pointer2: [{\n            value: 70,\n            height: 5,\n            width: 5,\n            placement: 'Near',\n            type: 'Bar',\n            position: 'Cross',\n            color: '#0074E3',\n            animationDuration: 1500\n        }\n        ],\n        majorTicks3: { \n            interval: 20, height: 7, width: 1\n        },\n        minorTicks3:{\n            interval: 10, height: 3\n        },\n        labelStyle3:{\n            font: { fontFamily: 'inherit' }\n        },\n        line3: {\n         width:5\n        },\n        pointer3: [{\n            value: 70,\n            height: 5,\n            width: 5,\n            placement: 'Near',\n            type: 'Bar',\n            position: 'Inside',\n            color: '#0074E3',\n            animationDuration: 1500\n        }],\n        majorTicks4: { \n            interval: 20,\n            height: 7,\n            width: 1\n        },\n        minorTicks4:{\n            interval: 10,\n            height: 3\n        },\n        labelStyle4:{\n            font: { fontFamily: 'inherit' }\n        },\n        line4: {\n         width:5\n        },\n        pointer4: [{\n            value: 70,\n            height: 5,\n            width: 5,\n            offset: 2,\n            placement: 'Near',\n            type: 'Bar',\n            position: 'Outside',\n            color: '#0074E3',\n            animationDuration: 1500,\n            linearGradient: {\n                startValue: \"0%\",\n                endValue: \"100%\",\n                colorStop: [\n                    { color: \"#FB7D55\", offset: \"0%\", opacity: 1 },\n                    { color: \"#ECC85B\", offset: \"50%\", opacity: 1 },\n                    { color: \"#6FC78A\", offset: \"100%\", opacity: 1 }\n                ]\n            }\n        }],\n        majorTicks5: { \n            interval: 20, height: 7, width: 1\n        },\n        minorTicks5:{\n            interval: 10, height: 3\n        },\n        labelStyle5:{\n            font: { fontFamily: 'inherit' }\n        },\n        line5: {\n         width:5\n        },\n        pointer5: [{\n            value: 10,\n            height: 5,\n            width: 5,\n            placement: 'Near',\n            type: 'Bar',\n            position: 'Inside',\n            color: '#0074E3',\n            animationDuration: 1500\n        },\n        {\n            value: 70,\n            height: 5,\n            width: 5,\n            placement: 'Near',\n            type: 'Bar',\n            position: 'Outside',\n            color: 'red',\n            animationDuration: 1500\n        }\n        ]\n    }\n},\nprovide: {\n    lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.Gradient]\n},\nmethods: {\n    horizontal(event) {\n        document.getElementById('containerBox').style.padding = \"0%\";\n        document.getElementById('container1').className = document.getElementById('container2').className =\n        document.getElementById('container3').className = document.getElementById('container4').className =\n        document.getElementById('container5').className = \"col-xs-12 col-sm-12 col-lg-12 col-md-12\";\n        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width = this.$refs.lineargauge5.ej2Instances.width = '450px';\n        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height = this.$refs.lineargauge5.ej2Instances.height = '150px';\n        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = this.$refs.lineargauge5.ej2Instances.orientation = \"Horizontal\";\n        if (event.currentTarget != null) {\n            event.currentTarget['style']['color'] = \"white\";\n            event.currentTarget['style']['backgroundColor'] = \"#0074E3\";\n            document.getElementById('vertical').style.color = \"black\";\n            document.getElementById('vertical').style.backgroundColor = \"white\";            \n        }\n    },\n    vertical(event) {\n        document.getElementById('containerBox').style.padding = \"4%\";\n        document.getElementById('container1').className = document.getElementById('container2').className =\n        document.getElementById('container3').className = document.getElementById('container4').className =\n        document.getElementById('container5').className = \"col-xs-4 col-sm-4 col-lg-2 col-md-2\"; \n        this.$refs.lineargauge1.ej2Instances.width = this.$refs.lineargauge2.ej2Instances.width = this.$refs.lineargauge3.ej2Instances.width = this.$refs.lineargauge4.ej2Instances.width = this.$refs.lineargauge5.ej2Instances.width = '150px';\n        this.$refs.lineargauge1.ej2Instances.height = this.$refs.lineargauge2.ej2Instances.height = this.$refs.lineargauge3.ej2Instances.height = this.$refs.lineargauge4.ej2Instances.height = this.$refs.lineargauge5.ej2Instances.height = '350px';\n        this.$refs.lineargauge1.ej2Instances.orientation = this.$refs.lineargauge2.ej2Instances.orientation = this.$refs.lineargauge3.ej2Instances.orientation = this.$refs.lineargauge4.ej2Instances.orientation = this.$refs.lineargauge5.ej2Instances.orientation = \"Vertical\";\n        if (event.currentTarget != null) {\n            event.currentTarget['style']['color'] = \"white\";\n            event.currentTarget['style']['backgroundColor'] = \"#0074E3\";\n            document.getElementById('horizontal')['style']['color'] = \"black\";\n            document.getElementById('horizontal')['style']['backgroundColor'] = \"white\";                       \n        }\n    },\n    load: function(args) {\n    /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    /* custom code end */\n    }\n}\n});\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/bar-pointer/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/linear-gauge/bar-pointer/App.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./Samples/linear-gauge/bar-pointer/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/bar-pointer/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/bar-pointer/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/bar-pointer/App.vue?vue&type=template&id=def62daa":
/*!********************************************************************************!*\
  !*** ./Samples/linear-gauge/bar-pointer/App.vue?vue&type=template&id=def62daa ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_def62daa__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_def62daa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=def62daa */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/bar-pointer/App.vue?vue&type=template&id=def62daa\");\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/bar-pointer/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/bar-pointer/App.vue?vue&type=template&id=def62daa":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/bar-pointer/App.vue?vue&type=template&id=def62daa ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { class: \"row\" }\nconst _hoisted_3 = {\n  class: \"col-xs-12 col-sm-12 col-lg-12 col-md-12\",\n  style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\"}\n}\nconst _hoisted_4 = { style: {\"margin\":\"auto\",\"padding\":\"10px\"} }\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"pre\", { style: {\"background-color\":\"inherit\",\"border\":\"hidden\"} }, null, -1 /* HOISTED */)\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"containerBox\",\n  style: {\"float\":\"left\",\"padding\":\"4%\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_7 = {\n  id: \"container1\",\n  class: \"col-xs-4 col-sm-4 col-lg-2 col-md-2\",\n  style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\"}\n}\nconst _hoisted_8 = {\n  id: \"container2\",\n  class: \"col-xs-4 col-sm-4 col-lg-2 col-md-2\",\n  style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\"}\n}\nconst _hoisted_9 = {\n  id: \"container3\",\n  class: \"col-xs-4 col-sm-4 col-lg-2 col-md-2\",\n  style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\"}\n}\nconst _hoisted_10 = {\n  id: \"container4\",\n  class: \"col-xs-4 col-sm-4 col-lg-2 col-md-2\",\n  style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\"}\n}\nconst _hoisted_11 = {\n  id: \"container5\",\n  class: \"col-xs-4 col-sm-4 col-lg-2 col-md-2\",\n  style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\"}\n}\nconst _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample shows the various bar pointer shapes available in the linear gauge. Additionally, multiple bar pointer and animation support are enabled. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to render and configure bar pointer in the linear gauge. The <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel/\\\">pointers</a> collection is useful for displaying multiple pointers. The properties available in <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/linear-gauge/pointerModel/\\\">pointers</a> help in the customization of the bar pointer in the linear gauge. </p><p> More information on the bar pointer can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/linear-gauge/pointers/#bar-pointer\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_lineargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-lineargauge\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", null, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n                    id: \"horizontal\",\n                    style: {\"padding\":\"6px\",\"cursor\":\"pointer\",\"width\":\"86px\",\"color\":\"black\",\"font-size\":\"15px\",\"border\":\"1px solid #0074E3\",\"background-color\":\"white\",\"text-align\":\"center\"},\n                    onClick: _cache[0] || (_cache[0] = $event => ($options.horizontal($event)))\n                  }, \"Horizontal\")\n                ]),\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n                    id: \"vertical\",\n                    style: {\"padding\":\"6px\",\"cursor\":\"pointer\",\"width\":\"86px\",\"color\":\"white\",\"font-size\":\"15px\",\"border\":\"1px solid #0074E3\",\"background-color\":\"#0074E3\",\"text-align\":\"center\"},\n                    onClick: _cache[1] || (_cache[1] = $event => ($options.vertical($event)))\n                  }, \"Vertical\")\n                ])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_5,\n    _hoisted_6,\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        ref: \"lineargauge1\",\n        background: _ctx.background,\n        minimum: 0,\n        maximum: 100,\n        load: $options.load,\n        width: _ctx.widthData,\n        title: _ctx.title1,\n        titleStyle: _ctx.titleStyle,\n        height: _ctx.heightData,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"defaultContainer1\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                majorTicks: _ctx.majorTicks1,\n                pointers: _ctx.pointer1,\n                line: _ctx.line1,\n                minorTicks: _ctx.minorTicks1,\n                labelStyle: _ctx.labelStyle1,\n                opposedPosition: _ctx.opposedPosition\n              }, null, 8 /* PROPS */, [\"majorTicks\", \"pointers\", \"line\", \"minorTicks\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"load\", \"width\", \"title\", \"titleStyle\", \"height\", \"orientation\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        ref: \"lineargauge2\",\n        background: _ctx.background,\n        minimum: 0,\n        maximum: 100,\n        title: _ctx.title2,\n        titleStyle: _ctx.titleStyle,\n        load: $options.load,\n        style: {\"display\":\"block\"},\n        width: _ctx.widthData,\n        height: _ctx.heightData,\n        align: \"center\",\n        id: \"defaultContainer2\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                majorTicks: _ctx.majorTicks2,\n                pointers: _ctx.pointer2,\n                minorTicks: _ctx.minorTicks2,\n                line: _ctx.line2,\n                labelStyle: _ctx.labelStyle2,\n                opposedPosition: _ctx.opposedPosition\n              }, null, 8 /* PROPS */, [\"majorTicks\", \"pointers\", \"minorTicks\", \"line\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"title\", \"titleStyle\", \"load\", \"width\", \"height\", \"orientation\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        ref: \"lineargauge3\",\n        background: _ctx.background,\n        minimum: 0,\n        maximum: 100,\n        load: $options.load,\n        width: _ctx.widthData,\n        title: _ctx.title3,\n        titleStyle: _ctx.titleStyle,\n        height: _ctx.heightData,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"defaultContainer3\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                majorTicks: _ctx.majorTicks3,\n                pointers: _ctx.pointer3,\n                minorTicks: _ctx.minorTicks3,\n                line: _ctx.line3,\n                labelStyle: _ctx.labelStyle3,\n                opposedPosition: _ctx.opposedPosition\n              }, null, 8 /* PROPS */, [\"majorTicks\", \"pointers\", \"minorTicks\", \"line\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"load\", \"width\", \"title\", \"titleStyle\", \"height\", \"orientation\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        ref: \"lineargauge4\",\n        background: _ctx.background,\n        minimum: 0,\n        maximum: 100,\n        load: $options.load,\n        width: _ctx.widthData,\n        title: _ctx.title4,\n        titleStyle: _ctx.titleStyle,\n        height: _ctx.heightData,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"defaultContainer4\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                majorTicks: _ctx.majorTicks4,\n                pointers: _ctx.pointer4,\n                minorTicks: _ctx.minorTicks4,\n                line: _ctx.line4,\n                labelStyle: _ctx.labelStyle4,\n                opposedPosition: _ctx.opposedPosition\n              }, null, 8 /* PROPS */, [\"majorTicks\", \"pointers\", \"minorTicks\", \"line\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"load\", \"width\", \"title\", \"titleStyle\", \"height\", \"orientation\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        ref: \"lineargauge5\",\n        background: _ctx.background,\n        minimum: 0,\n        maximum: 100,\n        load: $options.load,\n        width: _ctx.widthData,\n        title: _ctx.title5,\n        titleStyle: _ctx.titleStyle,\n        height: _ctx.heightData,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"defaultContainer5\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                majorTicks: _ctx.majorTicks5,\n                pointers: _ctx.pointer5,\n                minorTicks: _ctx.minorTicks5,\n                line: _ctx.line5,\n                labelStyle: _ctx.labelStyle5,\n                opposedPosition: _ctx.opposedPosition\n              }, null, 8 /* PROPS */, [\"majorTicks\", \"pointers\", \"minorTicks\", \"line\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"load\", \"width\", \"title\", \"titleStyle\", \"height\", \"orientation\"])\n    ]),\n    _hoisted_12\n  ]))\n}\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/bar-pointer/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"linear-gauge/bar-pointer/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_lineargauge_vue_samples"] = self["webpackChunkej2_lineargauge_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/linear-gauge/bar-pointer/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;