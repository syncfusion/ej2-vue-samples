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

/***/ "./Samples/linear-gauge/battery-indicator/main.js":
/*!********************************************************!*\
  !*** ./Samples/linear-gauge/battery-indicator/main.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/battery-indicator/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/battery-indicator/main.js?");

/***/ }),

/***/ "./Samples/linear-gauge/battery-indicator/App.vue":
/*!********************************************************!*\
  !*** ./Samples/linear-gauge/battery-indicator/App.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_772cf677__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=772cf677 */ \"./Samples/linear-gauge/battery-indicator/App.vue?vue&type=template&id=772cf677\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/linear-gauge/battery-indicator/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_772cf677__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/linear-gauge/battery-indicator/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/battery-indicator/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/battery-indicator/App.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/battery-indicator/App.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-lineargauge': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.LinearGaugeComponent,\n        'e-axes': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n        'e-axis': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n        'e-pointers': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n        'e-pointer': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n        'e-annotations': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AnnotationsDirective,\n        'e-annotation': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.AnnotationDirective,\n        'e-ranges': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.RangesDirective,\n        'e-range': _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.RangeDirective\n    },\n    data:function(){\n    return{\n        orientation:\"Horizontal\",\n        background:'transparent',\n        widthData:'200px',\n        line : { width: 0 },\n        majorTicks: { \n            interval: 15,\n            height:0\n        },\n        minorTicks:{\n            interval: 5,\n            height:0\n        },\n        labelStyle:{\n            font: { size:'0px' }\n        },\n        container: {\n        width: 58, type: 'RoundedRectangle', border: { width: 5 }\n        },\n        pointerWidth: 0,\n        axisIndex: 0, axisValue: 60, positionX: 0, positionY: 0, zIndex:'1',\n        axisIndex1: 0, axisValue1: 0, positionX1: 0, positionY1: 0, zIndex1:'1',\n        start: 3, end: 14, startWidth: 45, endWidth: 45, color: '#66BB6A', offset: 52,\n        start1: 16,  end1: 29, startWidth1: 45, endWidth1: 45, color1: '#66BB6A', offset1: 52,\n        start2: 31, end2: 44, startWidth2: 45, endWidth2: 45, color2: '#66BB6A', offset2: 52\n    }\n},\n provide: {\n    lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.Annotations, _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_0__.Gradient]\n},\nmethods: {    \n    load: function(args) {\n      /* custom code start */\n      let borderColor = '#E5E7EB';\n      let textColor = '#000000';\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n        /* custom code end */\n        textColor = args.gauge.theme.indexOf('Dark') > -1 || args.gauge.theme.indexOf('HighContrast') > -1 ? '#FFFFFF' : '#000000';\n        if (args.gauge.theme == 'Bootstrap5Dark' || args.gauge.theme == 'TailwindDark') {\n            borderColor = \"#4b5563\";\n        }\n        if (args.gauge.theme == 'FabricDark' || args.gauge.theme == 'BootstrapDark' || args.gauge.theme == 'MaterialDark' || args.gauge.theme == 'HighContrast' || args.gauge.theme == 'Material' || args.gauge.theme == 'Fabric' || args.gauge.theme == 'Bootstrap') {\n            borderColor = \"#bfbfbf\";\n        }\n        if (args.gauge.theme == 'Fluent') {\n            borderColor = \"#EDEBE9\";\n        }\n        if (args.gauge.theme == 'FluentDark') {\n            borderColor = \"#292827\";\n        }\n        if (args.gauge.theme == 'Bootstrap5' || args.gauge.theme == 'Tailwind') {\n            borderColor = \"#E5E7EB\";\n        }\n       args.gauge.annotations[0].content = `<div style=\"width: 16px;height: 37px;border: 5px solid ${borderColor};margin-left:26px;margin-top:57px;border-radius: 6px;\" />`;\n       args.gauge.annotations[1].content = `<div style=\"width: 134px;font-size: 20px;margin-top:-47px;margin-left:140px;color:${textColor};\">Charged: 75%</div>`;        \n \n    }\n}\n});\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/battery-indicator/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/linear-gauge/battery-indicator/App.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./Samples/linear-gauge/battery-indicator/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/battery-indicator/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/battery-indicator/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/battery-indicator/App.vue?vue&type=template&id=772cf677":
/*!**************************************************************************************!*\
  !*** ./Samples/linear-gauge/battery-indicator/App.vue?vue&type=template&id=772cf677 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_772cf677__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_772cf677__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=772cf677 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/battery-indicator/App.vue?vue&type=template&id=772cf677\");\n\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/battery-indicator/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/battery-indicator/App.vue?vue&type=template&id=772cf677":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/linear-gauge/battery-indicator/App.vue?vue&type=template&id=772cf677 ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = { align: \"center\" }\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample shows the battery indicator charged up to 75% by utilizing the linear gauge's functionalities. \")\n], -1 /* HOISTED */)\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, you can see how to render and configure a linear gauge to look like a battery indicator. This can be accomplished by combining axis, pointer, multiple ranges, and multiple annotation. \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" More information on the linear gauge can be found in this \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n      target: \"_blank\",\n      href: \"https://ej2.syncfusion.com/vue/documentation/linear-gauge/getting-started/\"\n    }, \"documentation section\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\". \")\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_annotation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-annotation\")\n  const _component_e_annotations = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-annotations\")\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_range = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-range\")\n  const _component_e_ranges = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-ranges\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_lineargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-lineargauge\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_lineargauge, {\n        load: $options.load,\n        background: _ctx.background,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        container: _ctx.container,\n        width: _ctx.widthData,\n        id: \"defaultContainer\",\n        orientation: _ctx.orientation\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotations, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotation, {\n                axisIndex: _ctx.axisIndex,\n                axisValue: _ctx.axisValue,\n                x: _ctx.positionX,\n                zIndex: \"1\",\n                y: _ctx.positionY\n              }, null, 8 /* PROPS */, [\"axisIndex\", \"axisValue\", \"x\", \"y\", \"zIndex\"]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_annotation, {\n                axisIndex: _ctx.axisIndex1,\n                axisValue: _ctx.axisValue1,\n                x: _ctx.positionX1,\n                zIndex: \"1\",\n                y: _ctx.positionY1\n              }, null, 8 /* PROPS */, [\"axisIndex\", \"axisValue\", \"x\", \"y\", \"zIndex\"])\n            ]),\n            _: 1 /* STABLE */\n          }),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                minimum: 0,\n                maximum: 60,\n                line: _ctx.line,\n                majorTicks: _ctx.majorTicks,\n                minorTicks: _ctx.minorTicks,\n                labelStyle: _ctx.labelStyle\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, { width: _ctx.pointerWidth }, null, 8 /* PROPS */, [\"width\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  }),\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_ranges, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start,\n                        end: _ctx.end,\n                        startWidth: _ctx.startWidth,\n                        endWidth: _ctx.endWidth,\n                        color: _ctx.color,\n                        offset: _ctx.offset\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start1,\n                        end: _ctx.end1,\n                        startWidth: _ctx.startWidth1,\n                        endWidth: _ctx.endWidth1,\n                        color: _ctx.color1,\n                        offset: _ctx.offset1\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"offset\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_range, {\n                        start: _ctx.start2,\n                        end: _ctx.end2,\n                        startWidth: _ctx.startWidth2,\n                        endWidth: _ctx.endWidth2,\n                        color: _ctx.color2,\n                        offset: _ctx.offset2\n                      }, null, 8 /* PROPS */, [\"start\", \"end\", \"startWidth\", \"endWidth\", \"color\", \"offset\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"line\", \"majorTicks\", \"minorTicks\", \"labelStyle\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"load\", \"background\", \"container\", \"width\", \"orientation\"])\n    ]),\n    _hoisted_3,\n    _hoisted_4\n  ]))\n}\n\n//# sourceURL=webpack://ej2-lineargauge-vue-samples/./Samples/linear-gauge/battery-indicator/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"linear-gauge/battery-indicator/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/linear-gauge/battery-indicator/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;