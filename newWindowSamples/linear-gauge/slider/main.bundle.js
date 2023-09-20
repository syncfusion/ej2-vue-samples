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

/***/ "./Samples/linear-gauge/slider/main.js":
/*!*********************************************!*\
  !*** ./Samples/linear-gauge/slider/main.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/slider/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/slider/main.js?");

/***/ }),

/***/ "./Samples/linear-gauge/slider/App.vue":
/*!*********************************************!*\
  !*** ./Samples/linear-gauge/slider/App.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_37f724e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=37f724e6 */ \"./Samples/linear-gauge/slider/App.vue?vue&type=template&id=37f724e6\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/linear-gauge/slider/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_37f724e6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/linear-gauge/slider/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/slider/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/slider/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/slider/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-lineargauge': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.LinearGaugeComponent,\n        'e-axes': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n        'e-axis': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n        'e-pointers': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n        'e-pointer': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n    },\n    enableSliderGauge: _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.LinearGaugeComponent,\n    data:function(){\n    return{\n        orientation:\"Horizontal\",\n        opposedPosition:true,\n        background:'transparent',\n        heightData1:'150px',\n        widthData1:'450px',\n        format:'N0',\n        tooltip: {\n        enable: true,\n        showAtMousePosition: true,\n        textStyle: { fontFamily: 'inherit' }\n        },\n        value1: 50,\n        height1: 5,\n        width1: 5,\n        placement1: 'Center',\n        color1: '#0074E3',\n        type1: 'Bar',\n        offset1: 12,\n        enableDrag1: true,\n        value2: 50,\n        height2: 15,\n        width2: 15,\n        placement2: 'Center',\n        color2: '#0074E3',\n        offset2: -10,\n        markerType2: 'Circle',\n        line1: {\n            width: 5,\n            color: '#C2DEF8'\n        },\n        majorTicks1: { \n            interval: 20,\n            height:0\n        },\n        minorTicks1:{\n            interval: 10,\n            height:0\n        },\n        labelStyle1:{\n            offset: 10,\n            font: { fontFamily: 'inherit' }\n        },\n        line2: {\n            width: 5,\n            color: '#E0E0E0'\n        },\n        value3: 50,\n        height3: 5,\n        width3: 5,\n        placement3: 'Center',\n        color3: '#ADADAD',\n        type3: 'Bar',\n        offset3: 12,\n        enableDrag3: false,\n        value4: 50,\n        height4: 15,\n        width4: 15,\n        placement4: 'Center',\n        color4: '#ADADAD',\n        offset4: -10,\n        markerType4: 'Circle',\n        enableDrag4: false,\n        majorTicks2: {\n            interval: 20, height: 0\n        },\n        minorTicks2: {\n            interval: 10, height: 0\n        },\n        labelStyle2: {\n            offset: 10,\n            font: { fontFamily: 'inherit' }\n        },\n        title1:'Enabled',\n        title2:'Disabled',\n        titleStyle:  {\n        fontFamily: 'inherit', fontWeight: '499'\n        }\n      }\n    },\n    provide: {\n        lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.GaugeTooltip]\n    },\n    methods: {    \n        dragMove: function(args) {\n                if (args.pointerIndex == 1) {\n                this.$refs.lineargauge.ej2Instances.setPointerValue(0, 0, args.currentValue);\n            }\n        },\n        load: function(args) {\n        /* custom code start */\n        let selectedTheme = location.hash.split(\"/\")[1];\n        selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n        args.gauge.theme =\n            (selectedTheme.charAt(0).toUpperCase() +\n                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n        /* custom code end */\n        }\n    }\n});\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/slider/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/linear-gauge/slider/App.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./Samples/linear-gauge/slider/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/slider/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/slider/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/slider/App.vue?vue&type=template&id=37f724e6":
/*!***************************************************************************!*\
  !*** ./Samples/linear-gauge/slider/App.vue?vue&type=template&id=37f724e6 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_37f724e6__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_37f724e6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=37f724e6 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/slider/App.vue?vue&type=template&id=37f724e6\");\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/slider/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/slider/App.vue?vue&type=template&id=37f724e6":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/slider/App.vue?vue&type=template&id=37f724e6 ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = {\n  class: \"control-section\",\n  style: {\"min-height\":\"290px\"}\n}\nconst _hoisted_2 = { style: {\"justify-content\":\"center\",\"display\":\"flex\",\"align-items\":\"center\"} }\nconst _hoisted_3 = { style: {\"justify-content\":\"center\",\"display\":\"flex\",\"align-items\":\"center\"} }\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample demonstrates how to create a slider by utilizing the functionalities available in the linear gauge. \")\n], -1 /* HOISTED */)\nconst _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, you can see how to render and configure a new slider in the linear gauge. This can be accomplished by combining axis, range, and pointer. The pointer has been made interactive, so the value changes as you drag it. \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" More information on the linear gauge can be found in this \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n      target: \"_blank\",\n      href: \"https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/\"\n    }, \"documentation section\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\". \")\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_lineargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-lineargauge\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        ref: \"lineargauge\",\n        background: _ctx.background,\n        title: _ctx.title1,\n        format: _ctx.format,\n        tooltip: _ctx.tooltip,\n        dragMove: $options.dragMove,\n        titleStyle: _ctx.titleStyle,\n        load: $options.load,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        height: _ctx.heightData1,\n        width: _ctx.widthData1,\n        id: \"enableSliderGauge\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                minimum: 0,\n                maximum: 100,\n                line: _ctx.line1,\n                majorTicks: _ctx.majorTicks1,\n                minorTicks: _ctx.minorTicks1,\n                labelStyle: _ctx.labelStyle1,\n                opposedPosition: _ctx.opposedPosition\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value1,\n                        height: _ctx.height1,\n                        placement: _ctx.placement1,\n                        width: _ctx.width1,\n                        color: _ctx.color1,\n                        offset: _ctx.offset1,\n                        type: _ctx.type1\n                      }, null, 8 /* PROPS */, [\"value\", \"height\", \"placement\", \"width\", \"color\", \"offset\", \"type\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value2,\n                        height: _ctx.height2,\n                        placement: _ctx.placement2,\n                        width: _ctx.width2,\n                        color: _ctx.color2,\n                        offset: _ctx.offset2,\n                        markerType: _ctx.markerType2,\n                        enableDrag: _ctx.enableDrag1\n                      }, null, 8 /* PROPS */, [\"value\", \"height\", \"placement\", \"width\", \"color\", \"offset\", \"markerType\", \"enableDrag\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"line\", \"majorTicks\", \"minorTicks\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"background\", \"title\", \"format\", \"tooltip\", \"dragMove\", \"titleStyle\", \"load\", \"height\", \"width\", \"orientation\"])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        title: _ctx.title2,\n        background: _ctx.background,\n        titleStyle: _ctx.titleStyle,\n        load: $options.load,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        height: _ctx.heightData1,\n        width: _ctx.widthData1,\n        id: \"disableSliderGauge\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                minimum: 0,\n                maximum: 100,\n                line: _ctx.line2,\n                majorTicks: _ctx.majorTicks2,\n                minorTicks: _ctx.minorTicks2,\n                labelStyle: _ctx.labelStyle2,\n                opposedPosition: _ctx.opposedPosition\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value3,\n                        height: _ctx.height3,\n                        placement: _ctx.placement3,\n                        width: _ctx.width3,\n                        color: _ctx.color3,\n                        offset: _ctx.offset3,\n                        type: _ctx.type3,\n                        enableDrag: _ctx.enableDrag3\n                      }, null, 8 /* PROPS */, [\"value\", \"height\", \"placement\", \"width\", \"color\", \"offset\", \"type\", \"enableDrag\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value4,\n                        height: _ctx.height4,\n                        placement: _ctx.placement4,\n                        width: _ctx.width4,\n                        color: _ctx.color4,\n                        offset: _ctx.offset4,\n                        markerType: _ctx.markerType4,\n                        enableDrag: _ctx.enableDrag4\n                      }, null, 8 /* PROPS */, [\"value\", \"height\", \"placement\", \"width\", \"color\", \"offset\", \"markerType\", \"enableDrag\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"line\", \"majorTicks\", \"minorTicks\", \"labelStyle\", \"opposedPosition\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"title\", \"background\", \"titleStyle\", \"load\", \"height\", \"width\", \"orientation\"])\n    ]),\n    _hoisted_4,\n    _hoisted_5\n  ]))\n}\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/slider/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"linear-gauge/slider/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/linear-gauge/slider/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;