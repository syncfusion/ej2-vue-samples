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

/***/ "./Samples/circular-gauge/text-pointer/main.js":
/*!*****************************************************!*\
  !*** ./Samples/circular-gauge/text-pointer/main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/text-pointer/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/text-pointer/main.js?");

/***/ }),

/***/ "./Samples/circular-gauge/text-pointer/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/circular-gauge/text-pointer/App.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_738c140f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=738c140f */ \"./Samples/circular-gauge/text-pointer/App.vue?vue&type=template&id=738c140f\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/circular-gauge/text-pointer/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_738c140f__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/circular-gauge/text-pointer/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/text-pointer/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/text-pointer/App.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/text-pointer/App.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n   data:function(){\n    return{\n            gaugeRadius: '120%',\n            startAngle: 270,\n            endAngle: 90,\n            centerY:'75%',            \n            background:'transparent',\n            majorTicks: {\n                width:0\n            },\n            value1:82, value2:20, value3:60, value4:100,\n            needleStartWidth:1, needleEndWidth:1,\n            pointerRadius1:'60%', pointerRadius2:'85%', pointerRadius3:'85%', pointerRadius4:'85%',\n            pointerWidth:10,\n            text1:'Poor', text2:'Average', text3:'Good', markerShape:'Text',\n            type:'Marker',\n            animation:{\n            enable:false\n            },\n            lineStyle: {width: 0},\n            minorTicks: {\n                width:0\n            },\n            labelStyle: {\n                font: {\n                    size:'0px'\n                },\n                offset: -5\n            },\n            cap:{\n             radius: 0\n            },\n            start1:0, start2:20.5, start3:40.5, start4:60.5,  start5:80.5, start6:100.5,\n            end1:20, end2:40, end3:60, end4:80, end5:100, end6:120,\n            rangeRadius:'80%',\n            startWidth:85,\n            endWidth:85,\n            color1:'#dd3800', color2:'#ff4100', color3:'#ffba00', color4:'#ffdf10', color5:'#8be724', color6:'#64be00',\n            textStyle:\n            {\n               size: '18px', fontFamily: 'inherit'\n            }        \n      }\n    },\n    components: {\n        'ejs-circulargauge': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.CircularGaugeComponent,\n        'e-axis': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n        'e-axes': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n        'e-pointer': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n        'e-pointers': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n        'e-ranges': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.RangesDirective,\n        'e-range': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.RangeDirective,\n    },\n   methods: {\n     load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n     /* custom code end */\n     }\n   }\n});\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/text-pointer/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/circular-gauge/text-pointer/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./Samples/circular-gauge/text-pointer/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/text-pointer/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/text-pointer/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/text-pointer/App.vue?vue&type=template&id=738c140f":
/*!***********************************************************************************!*\
  !*** ./Samples/circular-gauge/text-pointer/App.vue?vue&type=template&id=738c140f ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_738c140f__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_738c140f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=738c140f */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/text-pointer/App.vue?vue&type=template&id=738c140f\");\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/text-pointer/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/text-pointer/App.vue?vue&type=template&id=738c140f":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/text-pointer/App.vue?vue&type=template&id=738c140f ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample visualizes the performance outcome of a work using the text pointer in the circular gauge. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to use a text to customize the pointer in the circular gauge. The text can be added to the circular gauge&#39;s pointer primarily through the use of the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/#type\\\">type</a>, <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/#markershape\\\">markerShape</a> and <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/#text\\\">text</a> properties in the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/circular-gauge/pointerModel/\\\">e-pointer</a> tag. </p><p> More information on the pointers can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/circular-gauge/gauge-pointers/\\\">documentation section</a>. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_range = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-range\")\n  const _component_e_ranges = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-ranges\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_circulargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-circulargauge\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_circulargauge, {\n        load: $options.load,\n        style: {\"display\":\"block\"},\n        background: _ctx.background,\n        centerY: _ctx.centerY,\n        align: \"center\",\n        id: \"gauge\"\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                radius: _ctx.gaugeRadius,\n                startAngle: _ctx.startAngle,\n                endAngle: _ctx.endAngle,\n                majorTicks: _ctx.majorTicks,\n                lineStyle: _ctx.lineStyle,\n                minorTicks: _ctx.minorTicks,\n                minimum: 0,\n                maximum: 120,\n                rangeGap: 3,\n                labelStyle: _ctx.labelStyle\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value1,\n                        radius: _ctx.pointerRadius1,\n                        color: _ctx.color,\n                        needleStartWidth: _ctx.needleStartWidth,\n                        needleEndWidth: _ctx.needleEndWidth,\n                        pointerWidth: _ctx.pointerWidth,\n                        cap: _ctx.cap,\n                        textStyle: _ctx.textStyle\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"color\", \"needleStartWidth\", \"needleEndWidth\", \"pointerWidth\", \"cap\", \"textStyle\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value2,\n                        radius: _ctx.pointerRadius2,\n                        color: _ctx.color,\n                        pointerWidth: _ctx.pointerWidth,\n                        textStyle: _ctx.textStyle,\n                        markerShape: _ctx.markerShape,\n                        text: _ctx.text1,\n                        type: _ctx.type,\n                        animation: _ctx.animation\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"color\", \"pointerWidth\", \"textStyle\", \"markerShape\", \"text\", \"type\", \"animation\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value3,\n                        radius: _ctx.pointerRadius3,\n                        color: _ctx.color,\n                        pointerWidth: _ctx.pointerWidth,\n                        textStyle: _ctx.textStyle,\n                        markerShape: _ctx.markerShape,\n                        text: _ctx.text2,\n                        type: _ctx.type,\n                        animation: _ctx.animation\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"color\", \"pointerWidth\", \"textStyle\", \"markerShape\", \"text\", \"type\", \"animation\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value4,\n                        radius: _ctx.pointerRadius4,\n                        color: _ctx.color,\n                        pointerWidth: _ctx.pointerWidth,\n                        textStyle: _ctx.textStyle,\n                        markerShape: _ctx.markerShape,\n                        text: _ctx.text3,\n                        type: _ctx.type,\n                        animation: _ctx.animation\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"color\", \"pointerWidth\", \"textStyle\", \"markerShape\", \"text\", \"type\", \"animation\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  }),\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_ranges, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start1,\n                        end: _ctx.end1,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color1,\n                        radius: _ctx.rangeRadius\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"radius\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start2,\n                        end: _ctx.end2,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color2,\n                        radius: _ctx.rangeRadius\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"radius\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start3,\n                        end: _ctx.end3,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color3,\n                        radius: _ctx.rangeRadius\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"radius\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start4,\n                        end: _ctx.end4,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color4,\n                        radius: _ctx.rangeRadius\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"radius\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start5,\n                        end: _ctx.end5,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color5,\n                        radius: _ctx.rangeRadius\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"radius\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start6,\n                        end: _ctx.end6,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color6,\n                        radius: _ctx.rangeRadius\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"radius\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"radius\", \"startAngle\", \"endAngle\", \"majorTicks\", \"lineStyle\", \"minorTicks\", \"labelStyle\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"load\", \"background\", \"centerY\"])\n    ]),\n    _hoisted_2\n  ]))\n}\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/text-pointer/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"circular-gauge/text-pointer/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/circular-gauge/text-pointer/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;