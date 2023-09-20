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

/***/ "./Samples/circular-gauge/user-interaction/main.js":
/*!*********************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/main.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/user-interaction/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/user-interaction/main.js?");

/***/ }),

/***/ "./Samples/circular-gauge/user-interaction/App.vue":
/*!*********************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/App.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_74100682__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=74100682 */ \"./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_74100682__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/circular-gauge/user-interaction/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/user-interaction/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-circulargauge': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.CircularGaugeComponent,\n    'e-axes': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n    'e-axis': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n    'e-pointers': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n    'e-pointer': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n    'e-annotations': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AnnotationsDirective,\n    'e-annotation': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AnnotationDirective,\n    'ejs-checkbox': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.CheckBoxComponent\n   },\ndata:function(){\n    return{\n        enablePointerDrag: true,\n        annotations: [{\n                content: '<div style=\"font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique; font-family: Segoe UI;\"><span>' + '70 MPH</span></div>',\n                angle: 180, zIndex: '1',\n                radius: '45%'\n            }],\n            endAngle: 140,\n            startAngle: 220,\n            lineStyle: { width: 0, color: '#9E9E9E' },\n            gaugeradius: '80%', \n            majorTicks: { useRangeColor: true },\n            minorTicks: { useRangeColor: true },\n            labelStyle: { useRangeColor: true,  font: { fontFamily: 'Segoe UI' } },\n            ranges: [{\n                start: 0,\n                end: 40,\n                startWidth: 8, endWidth: 8,\n                radius: '108%',\n                color: '#30B32D'\n            }, {\n                start: 40,\n                end: 100,\n                startWidth: 8, endWidth: 8,\n                radius: '108%',\n                color: '#E5C31C'\n            }, {\n                start: 100, end: 120,\n                startWidth: 8, endWidth: 8,\n                radius: '108%',\n                color: '#F03E3E'\n            }],   \n            type: 'Marker', value: 70,\n            markerShape: 'InvertedTriangle',\n            pointerRadius: '110%',\n            markerHeight: 20,\n            color: '#E5C31C',\n            markerWidth: 20,\n            value2: 70,\n            pointerRadius2: '60%',\n            cap2: { radius: 10, border: { width: 5, color: '#E5C31C' } },\n            needleTail2: { length: '0%', color: '#E5C31C' },\n            color2: '#E5C31C',\n            markerWidth2: 5  \n    }\n},\nprovide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.Annotations]\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    },\n    /* custom code end */\n    // Code for Property Panel\n    dragMove: function(args){\n            if(isNaN(args.rangeIndex)) {\n                let content = '<div style=\"font-size: 14px;color:#E5C31C;font-weight: lighter;font-style: oblique;\"><span>';\n                // let cotainerObj=document.getElementById('user-container');\n                let pointerValue = Math.round(args.currentValue);\n                document.getElementById('pointerValue').innerHTML = pointerValue.toString();\n                (document.getElementById('value')).value = pointerValue.toString();\n                this.$refs.circulargauge.ej2Instances.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');\n             }\n\n        },\n     dragEnd:function(args){\n            // let cotainerObj=document.getElementById('user-container');\n            let pointerValue = Math.round(args.currentValue);\n            if(isNaN(args.rangeIndex)) {\n            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);\n            }\n        },\n    pointerValue:function(args){\n            // let cotainerObj=document.getElementById('user-container');      \n            let pointerValue = parseInt((document.getElementById('value')).value, 10);\n            setPointersValue(this.$refs.circulargauge.ej2Instances, pointerValue);\n            document.getElementById('pointerValue').innerHTML = pointerValue.toString();        \n    },\n    enableDrag:function(args){\n        // let cotainerObj=document.getElementById('user-container');             \n        let value = args.checked;\n        this.$refs.circulargauge.ej2Instances.enablePointerDrag = value;        \n    },\n    enableRangeDrag:function(args){            \n        let value = args.checked;\n        this.$refs.circulargauge.ej2Instances.enableRangeDrag = value;        \n    }\n}\n});\n function setPointersValue(circulargauge, pointerValue) {\n        // let cotainerObj=document.getElementById('user-container');                    \n        let color = (0,_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.getRangeColor)(pointerValue,circulargauge.axes[0].ranges, circulargauge.axes[0].pointers[0].color);\n        circulargauge.axes[0].pointers[0].color = color;\n        circulargauge.axes[0].pointers[1].color = color;\n        circulargauge.axes[0].pointers[0].animation.enable = false;\n        circulargauge.axes[0].pointers[1].animation.enable = false;\n        circulargauge.axes[0].pointers[0].needleTail.color = color;\n        circulargauge.axes[0].pointers[1].needleTail.color = color;\n        circulargauge.axes[0].pointers[0].cap.border.color = color;\n        circulargauge.axes[0].pointers[1].cap.border.color = color;\n        circulargauge.setPointerValue(0, 1, pointerValue);\n        circulargauge.setPointerValue(0, 0, pointerValue);\n        let content = '<div style=\"font-size: 14px;color:' + color + ';font-weight: lighter;font-style: oblique;\"><span>';\n        circulargauge.setAnnotationValue(0, 0, content + pointerValue + ' MPH</span></div>');\n    }\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/user-interaction/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js":
/*!*********************************************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/user-interaction/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/user-interaction/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682":
/*!***************************************************************************************!*\
  !*** ./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682 ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_74100682__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_74100682__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=74100682 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682\");\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/user-interaction/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/user-interaction/App.vue?vue&type=template&id=74100682 ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-md-8 control-section\" }\nconst _hoisted_2 = { class: \"content-wrapper\" }\nconst _hoisted_3 = { class: \"col-md-4 property-section\" }\nconst _hoisted_4 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\",\"margin-left\":\"-10px\"}\n}\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"colgroup\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n    span: \"1\",\n    style: {\"width\":\"40%\"}\n  }),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n    span: \"1\",\n    style: {\"width\":\"30%\"}\n  }),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"col\", {\n    span: \"1\",\n    style: {\"width\":\"30%\"}\n  })\n], -1 /* HOISTED */)\nconst _hoisted_6 = { style: {\"height\":\"50px\"} }\nconst _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \" Pointer Value \")\n], -1 /* HOISTED */)\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"padding-top\":\"10px\",\"text-align\":\"center\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n    id: \"pointerValue\",\n    style: {\"margin-left\":\"-30px\"}\n  }, \"70\")\n], -1 /* HOISTED */)\nconst _hoisted_9 = { style: {\"height\":\"50px\"} }\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    id: \"enablePointer\",\n    style: {\"width\":\"90%\"}\n  }, \"Allow Pointer Drag\")\n], -1 /* HOISTED */)\nconst _hoisted_11 = { style: {\"margin-left\":\"-10px\",\"margin-top\":\"-5px\"} }\nconst _hoisted_12 = { style: {\"height\":\"50px\"} }\nconst _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    id: \"enablePointer\",\n    style: {\"width\":\"90%\"}\n  }, \"Allow Range Drag\")\n], -1 /* HOISTED */)\nconst _hoisted_14 = { style: {\"margin-left\":\"-10px\",\"margin-top\":\"-5px\"} }\nconst _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample visualizes pointer drag in circular gauge. Position of pointer value can be changed by using <code>Pointer Value</code> and we can drag the pointer by enabling drag option. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to move pointers in gauge using drag and drop. Use <code>enablePointerDrag</code> property, to achieve this behavior. </p><br><p> In this sample, you can drag the pointer using mouse or touch, the pointer value will be updated in an annotation placed in the gauge. </p><p> More information on the gauge can be found in this <a target=\\\"_blank\\\" href=\\\"http://ej2.syncfusion.com/documentation\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_circulargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-circulargauge\")\n  const _component_ejs_checkbox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-checkbox\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_circulargauge, {\n          ref: \"circulargauge\",\n          load: $options.load,\n          style: {\"display\":\"block\"},\n          align: \"center\",\n          id: \"user-container\",\n          enablePointerDrag: _ctx.enablePointerDrag,\n          dragMove: $options.dragMove,\n          dragEnd: $options.dragEnd\n        }, {\n          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                  radius: _ctx.gaugeradius,\n                  startAngle: _ctx.startAngle,\n                  minimum: \"0\",\n                  maximum: \"120\",\n                  endAngle: _ctx.endAngle,\n                  majorTicks: _ctx.majorTicks,\n                  lineStyle: _ctx.lineStyle,\n                  minorTicks: _ctx.minorTicks,\n                  labelStyle: _ctx.labelStyle,\n                  annotations: _ctx.annotations,\n                  ranges: _ctx.ranges\n                }, {\n                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                          value: _ctx.value,\n                          type: _ctx.type,\n                          radius: _ctx.pointerRadius,\n                          color: _ctx.color,\n                          markerShape: _ctx.markerShape,\n                          markerHeight: _ctx.markerHeight,\n                          markerWidth: _ctx.markerWidth\n                        }, null, 8 /* PROPS */, [\"value\", \"type\", \"radius\", \"color\", \"markerShape\", \"markerHeight\", \"markerWidth\"]),\n                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                          value: _ctx.value2,\n                          cap: _ctx.cap2,\n                          radius: _ctx.pointerRadius2,\n                          color: _ctx.color2,\n                          needleTail: _ctx.needleTail2,\n                          markerWidth: _ctx.markerWidth\n                        }, null, 8 /* PROPS */, [\"value\", \"cap\", \"radius\", \"color\", \"needleTail\", \"markerWidth\"])\n                      ]),\n                      _: 1 /* STABLE */\n                    })\n                  ]),\n                  _: 1 /* STABLE */\n                }, 8 /* PROPS */, [\"radius\", \"startAngle\", \"endAngle\", \"majorTicks\", \"lineStyle\", \"minorTicks\", \"labelStyle\", \"annotations\", \"ranges\"])\n              ]),\n              _: 1 /* STABLE */\n            })\n          ]),\n          _: 1 /* STABLE */\n        }, 8 /* PROPS */, [\"load\", \"enablePointerDrag\", \"dragMove\", \"dragEnd\"])\n      ])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_4, [\n        _hoisted_5,\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_6, [\n            _hoisted_7,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n                  type: \"range\",\n                  id: \"value\",\n                  value: \"70\",\n                  min: \"0\",\n                  max: \"120\",\n                  onPointermove: _cache[0] || (_cache[0] = (...args) => ($options.pointerValue && $options.pointerValue(...args))),\n                  onTouchmove: _cache[1] || (_cache[1] = (...args) => ($options.pointerValue && $options.pointerValue(...args))),\n                  onChange: _cache[2] || (_cache[2] = (...args) => ($options.pointerValue && $options.pointerValue(...args))),\n                  style: {\"width\":\"70%\"}\n                }, null, 32 /* HYDRATE_EVENTS */)\n              ])\n            ]),\n            _hoisted_8\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_9, [\n            _hoisted_10,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n                  checked: \"true\",\n                  ref: \"Hide\",\n                  id: \"enable\",\n                  change: $options.enableDrag\n                }, null, 8 /* PROPS */, [\"change\"])\n              ])\n            ])\n          ]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_12, [\n            _hoisted_13,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_checkbox, {\n                  ref: \"Hide\",\n                  id: \"rangedrag\",\n                  change: $options.enableRangeDrag\n                }, null, 8 /* PROPS */, [\"change\"])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_15\n  ]))\n}\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/user-interaction/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"circular-gauge/user-interaction/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/circular-gauge/user-interaction/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;