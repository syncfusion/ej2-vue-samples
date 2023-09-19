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

/***/ "./Samples/circular-gauge/arc-gauge/main.js":
/*!**************************************************!*\
  !*** ./Samples/circular-gauge/arc-gauge/main.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/arc-gauge/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.id, \"\\n#arc-gauge .sliderwrap {\\n            margin-top: 0px;\\n            width: 300px;            \\n            align-self: center;\\n}\\n#slider.e-control.e-slider .e-handle {\\n            background-color: #fff;\\n            border: 2px solid #666;\\n            width:13px;\\n            height:13px;\\n            margin-top: 1px;\\n}\\n#range-container_Axis_0_Annotation_1 .e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {\\n            background: linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);\\n            background: -moz-linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%); \\n            background: -webkit-linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);\\n}\\n#arc-gauge .e-limit-bar.e-limits {\\n            background-color: transparent !important;\\n}\\n#arc-gauge .e-control-wrapper.e-slider-container.e-horizontal .e-range {\\n            height: 0px !important;\\n}\\n#slider.e-control.e-slider .e-slider-track {\\n            height: 8px;\\n            top: calc(50% - 4px);\\n            border-radius: 5px;\\n}\\n.material3 #slider.e-control.e-slider .e-handle, .material3-dark #slider.e-control.e-slider .e-handle {\\n            margin-top: 6px;\\n}\\n.bootstrap5 #slider.e-control.e-slider .e-handle, .bootstrap5-dark #slider.e-control.e-slider .e-handle {\\n            margin-top: 0px;\\n}\\n.material #slider.e-control.e-slider .e-handle, .material-dark #slider.e-control.e-slider .e-handle {\\n            margin-top: 0px;\\n}\\n.fabric #slider.e-control.e-slider .e-handle {\\n            margin-top: 2px;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"App.vue\"],\"names\":[],\"mappings\":\";AACA;YACY,eAAe;YACf,YAAY;YACZ,kBAAkB;AAC9B;AACA;YACY,sBAAsB;YACtB,sBAAsB;YACtB,UAAU;YACV,WAAW;YACX,eAAe;AAC3B;AACA;YACY,kHAAkH;YAClH,uHAAuH;YACvH,0HAA0H;AACtI;AACA;YACY,wCAAwC;AACpD;AACA;YACY,sBAAsB;AAClC;AACA;YACY,WAAW;YACX,oBAAoB;YACpB,kBAAkB;AAC9B;AACA;YACY,eAAe;AAC3B;AACA;YACY,eAAe;AAC3B;AACA;YACY,eAAe;AAC3B;AACA;YACY,eAAe;AAC3B\",\"file\":\"App.vue\",\"sourcesContent\":[\"\\n#arc-gauge .sliderwrap {\\n            margin-top: 0px;\\n            width: 300px;            \\n            align-self: center;\\n}\\n#slider.e-control.e-slider .e-handle {\\n            background-color: #fff;\\n            border: 2px solid #666;\\n            width:13px;\\n            height:13px;\\n            margin-top: 1px;\\n}\\n#range-container_Axis_0_Annotation_1 .e-control-wrapper.e-slider-container.e-horizontal .e-slider-track {\\n            background: linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);\\n            background: -moz-linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%); \\n            background: -webkit-linear-gradient(to right, #ea501a 0, #ea501a 20%, #f79c02 40%, #e5ce20 60%, #a1cb43 80%, #82b944 100%);\\n}\\n#arc-gauge .e-limit-bar.e-limits {\\n            background-color: transparent !important;\\n}\\n#arc-gauge .e-control-wrapper.e-slider-container.e-horizontal .e-range {\\n            height: 0px !important;\\n}\\n#slider.e-control.e-slider .e-slider-track {\\n            height: 8px;\\n            top: calc(50% - 4px);\\n            border-radius: 5px;\\n}\\n.material3 #slider.e-control.e-slider .e-handle, .material3-dark #slider.e-control.e-slider .e-handle {\\n            margin-top: 6px;\\n}\\n.bootstrap5 #slider.e-control.e-slider .e-handle, .bootstrap5-dark #slider.e-control.e-slider .e-handle {\\n            margin-top: 0px;\\n}\\n.material #slider.e-control.e-slider .e-handle, .material-dark #slider.e-control.e-slider .e-handle {\\n            margin-top: 0px;\\n}\\n.fabric #slider.e-control.e-slider .e-handle {\\n            margin-top: 2px;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/circular-gauge/arc-gauge/App.vue":
/*!**************************************************!*\
  !*** ./Samples/circular-gauge/arc-gauge/App.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_6b828f60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6b828f60 */ \"./Samples/circular-gauge/arc-gauge/App.vue?vue&type=template&id=6b828f60\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/circular-gauge/arc-gauge/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_6b828f60_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6b828f60&lang=css */ \"./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_6b828f60__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/circular-gauge/arc-gauge/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n\n\n\n\nlet sliderValue = 60;\nlet annotationTemplate = '';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n   components: {\n    'ejs-circulargauge': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.CircularGaugeComponent,\n    'e-axes': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n    'e-axis': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n    'e-pointers': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n    'e-pointer': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n    'e-annotations': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AnnotationsDirective,\n    'e-annotation': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AnnotationDirective,\n    'ejs-slider': _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__.SliderComponent\n   },\n   data:function(){\n    return{\n            gaugeRadius: '80%',\n            background:'transparent',\n            startAngle: 200,\n            endAngle: 160,\n            majorTicks: {\n                width: 0\n            },\n            title: 'Progress Tracker',\n            titleStyle: {\n                fontFamily: 'inherit'\n            },\n            lineStyle:  { width: 0 },\n            minorTicks: {\n                width: 0\n            },\n            labelStyle: {\n                 position: 'Inside', useRangeColor: true,\n                 font: { size: '0px', fontFamily: 'inherit'}\n            },\n            value: 60,\n            pointerRadius: '90%',\n            color:  '#e5ce20',\n            sliderValue: 60,\n            titleStyle: { size: '16px', fontFamily: 'inherit' },\n            ranges: [\n                    {\n                        start: 0, end: 100,\n                        radius: '90%',\n                        startWidth: 30, endWidth: 30,\n                        color: '#E0E0E0',\n                        roundedCornerRadius: 20\n                    },\n            ],\n            cap: {\n                   radius: 10,\n                   color:'#757575'\n            },\n            needleTail: {\n                    length: '18%',\n                    color:'#757575'\n            },\n            type: 'RangeBar',\n            border: {                       \n                    width: 0\n            },\n            animation: {\n                    enable: false\n            }\n    }\n   },\n   provide:{\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.Annotations]\n},\nmethods: {\n    loaded: function(args) {\n        let annotation = document.getElementById(args.gauge.element.id + '_Annotations_0');\n        if (annotation) {\n            this.annotationRender('slider', args.gauge.axes[0].pointers[0].value);\n            if (document.getElementById('pointervalue')) {\n                document.getElementById('pointervalue').innerHTML = args.gauge.axes[0].pointers[0].value.toString() + '/100';\n            }\n        }\n    },\n    annotationRender: function(id, sliderValue) {\n        let circulargauge = this.$refs.circulargauge.ej2Instances;\n        let first = new _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__.Slider({\n            // Set the value for slider\n            min: 0, max: 100,\n            type: 'MinRange',\n            limits: { enabled: true, minStart: 0, minEnd: 100 },\n            value: sliderValue,\n            change: function(args) {\n                sliderValue = args.value;\n                if (!isNaN(sliderValue)) {\n                    circulargauge['isProtectedOnChange'] = true;\n                    if (sliderValue >= 0 && sliderValue < 20) {\n                        circulargauge.axes[0].pointers[0].color = '#ea501a';\n                    } else if (sliderValue >= 20 && sliderValue < 40) {\n                        circulargauge.axes[0].pointers[0].color = '#f79c02';\n                    } else if (sliderValue >= 40 && sliderValue < 60) {\n                        circulargauge.axes[0].pointers[0].color = '#e5ce20';\n                    } else if (sliderValue >= 60 && sliderValue < 80) {\n                        circulargauge.axes[0].pointers[0].color = '#a1cb43';\n                    } else if (sliderValue >= 80 && sliderValue < 100) {\n                        circulargauge.axes[0].pointers[0].color = '#82b944';\n                    }\n                    circulargauge.setPointerValue(0, 0, sliderValue);\n                    if (document.getElementById('pointervalue')) {\n                        document.getElementById('pointervalue').innerHTML = circulargauge.axes[0].pointers[0].value.toString() + '/100';\n                    }\n                }\n            }\n        });\n        first.appendTo('#' + id);\n    },\n    load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n      /* custom code end */\n    }\n}\n});\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/circular-gauge/arc-gauge/App.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./Samples/circular-gauge/arc-gauge/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/arc-gauge/App.vue?vue&type=template&id=6b828f60":
/*!********************************************************************************!*\
  !*** ./Samples/circular-gauge/arc-gauge/App.vue?vue&type=template&id=6b828f60 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6b828f60__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6b828f60__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=6b828f60 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=template&id=6b828f60\");\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css":
/*!**********************************************************************************************!*\
  !*** ./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6b828f60_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader/index.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=6b828f60&lang=css */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6b828f60_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6b828f60_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6b828f60_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_style_index_0_id_6b828f60_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=template&id=6b828f60":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=template&id=6b828f60 ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { id: \"arc-gauge\" }\nconst _hoisted_2 = { class: \"control-section\" }\nconst _hoisted_3 = {\n  id: \"pointervalue\",\n  style: {\"font-size\":\"35px\",\"width\":\"120px\",\"text-align\":\"center\"}\n}\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  id: \"slider\",\n  style: {\"height\":\"70px\",\"width\":\"250px\"}\n}, null, -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"template\\\"><div class=\\\"sliderwrap\\\"><div id=\\\"default\\\"></div></div></div><div id=\\\"action-description\\\"><p> This sample shows the work progress using a circular gauge and a range bar pointer with rounded corners. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to render the range and range bar pointer with rounded corners. A slider is placed at the bottom of the circular gauge using annotation to change the range bar pointer value. Based on the value, the color of the pointer can also be changed. </p><p> More information on the ranges can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-ranges/\\\">documentation section</a>. </p></div>\", 3)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_annotation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-annotation\")\n  const _component_e_annotations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-annotations\")\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_circulargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-circulargauge\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_circulargauge, {\n        ref: \"circulargauge\",\n        background: _ctx.background,\n        load: $options.load,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"range-container\",\n        loaded: $options.loaded,\n        title: _ctx.title,\n        titleStyle: _ctx.titleStyle\n      }, {\n        indicatorTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.sliderValue) + \"/100\", 1 /* TEXT */)\n        ]),\n        sliderTemplate: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({}) => [\n          _hoisted_4\n        ]),\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                radius: _ctx.gaugeRadius,\n                minimum: 0,\n                maximum: 100,\n                startAngle: _ctx.startAngle,\n                endAngle: _ctx.endAngle,\n                majorTicks: _ctx.majorTicks,\n                lineStyle: _ctx.lineStyle,\n                minorTicks: _ctx.minorTicks,\n                labelStyle: _ctx.labelStyle,\n                ranges: _ctx.ranges\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotations, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotation, {\n                        content: 'indicatorTemplate',\n                        angle: \"0\",\n                        zIndex: \"1\",\n                        radius: \"0%\"\n                      }),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotation, {\n                        content: 'sliderTemplate',\n                        angle: \"0\",\n                        zIndex: \"1\",\n                        radius: \"-100%\"\n                      })\n                    ]),\n                    _: 1 /* STABLE */\n                  }),\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        roundedCornerRadius: 20,\n                        value: _ctx.value,\n                        radius: _ctx.pointerRadius,\n                        color: _ctx.color,\n                        type: _ctx.type,\n                        animation: _ctx.animation,\n                        border: _ctx.border,\n                        pointerWidth: 30,\n                        cap: _ctx.cap,\n                        needleTail: _ctx.needleTail\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"color\", \"type\", \"animation\", \"border\", \"cap\", \"needleTail\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"radius\", \"startAngle\", \"endAngle\", \"majorTicks\", \"lineStyle\", \"minorTicks\", \"labelStyle\", \"ranges\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"load\", \"loaded\", \"title\", \"titleStyle\"])\n    ]),\n    _hoisted_5\n  ]))\n}\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=style&index=0&id=6b828f60&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/arc-gauge/App.vue?vue&type=style&index=0&id=6b828f60&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"75d2541b\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/arc-gauge/App.vue?./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"circular-gauge/arc-gauge/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/circular-gauge/arc-gauge/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;