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

/***/ "./Samples/circular-gauge/sleep-tracker/main.js":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/sleep-tracker/main.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/sleep-tracker/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/sleep-tracker/main.js?");

/***/ }),

/***/ "./Samples/circular-gauge/sleep-tracker/App.vue":
/*!******************************************************!*\
  !*** ./Samples/circular-gauge/sleep-tracker/App.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_f116f038__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f116f038 */ \"./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=template&id=f116f038\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_f116f038__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/circular-gauge/sleep-tracker/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/sleep-tracker/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n   data:function(){\n    return{\n            gaugeRadius: '70%',\n            startAngle: 0,\n            background:'transparent',\n            endAngle: 0,\n            majorTicks: {\n                width: 2,\n                height: 12,\n                interval: 1,\n                offset: 4\n            },\n            lineStyle: { width: 0 },\n            minorTicks: {\n                 width: 1,\n                 height: 7,\n                 interval: 0.2,\n                 offset: 4\n            },\n            labelStyle: {\n                hiddenLabel: 'First',\n                font: {\n                    fontFamily: 'inherit'\n                }\n            },\n            type:'Marker',\n            value1: 4.7,\n            value2:9,\n            markerShape:'Image',\n            pointerRadius1: '97%',\n            pointerRadius2:'98%',\n            markerHeight:28,\n            markerWidth:28,           \n            image1:'./../../source/circular-gauge/images/sun-icon.png',\n            image2:'./../../source/circular-gauge/images/moon-icon.png',\n            animation :\n            {\n             enable:false\n            },\n            ranges: [\n                { start: 0, end: 4.7, color:'#6453D0' , startWidth:4 , endWidth:4},\n                { start: 12, end: 9, color:'#6453D0',  startWidth:4 , endWidth:4 },\n                { start: 4.7, end: 9, color:'#d7d3ed',  startWidth:4 , endWidth:4 }\n                ],\n            annotations: [\n            {\n                   content:'<div style=\"font-size:15px;border-radius: 20px;border: 2px solid gray;padding: 5px 4px 5px;width: 93%;text-align: center;margin-left: 67px;\">Mon, 5 Apr</div>',\n                   angle:342, radius:'129%', zIndex:'1'\n            },\n             {\n                content:'<div style=\"font-size:15px;margin-left:25px\">07 hrs 43 mins</div>' , angle:185,\n                radius:'120%', zIndex:'1'\n            },\n            {\n                content:'<div style=\"font-size:15px;margin-left: 34px;\">Sleep Time</div>', angle:185,\n                radius:'140%', zIndex:'1'\n            },\n            {\n                content:'<div style=\"color:#6453D0;font-size:15px;margin-top: 54px;margin-left:28px\"><p style=\"text-align: center;\">4 Apr</p><p style=\"margin-top: -10px;\">9:00 PM</p></div>',\n                angle:250, radius:'60%', zIndex:'1'\n            },\n            {\n                content:'<div style=\"color:#6453D0;margin-top: -8px;\"> - </div>',\n                angle:0, radius:'0%', zIndex:'1'\n            },\n            {\n                content:'<div style=\"color:#6453D0;font-size:15px;margin-left: -15px;margin-top: 56px;\"><p style=\"text-align: center;\">5 Apr </p><p style=\"margin-top: -10px;\">4:43 AM</p></div>',\n                angle:70, radius:'50%', zIndex:'1'\n            }\n            ],\n    }\n   },\n   components: {\n        'ejs-circulargauge': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.CircularGaugeComponent,\n        'e-axis': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxisDirective,\n        'e-axes': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.AxesDirective,\n        'e-pointer': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointerDirective,\n        'e-pointers': _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.PointersDirective,\n    },\n    provide: {\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_0__.Annotations]\n   },\n\n   methods: {\n    load: function(args) {\n    /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        (selectedTheme.charAt(0).toUpperCase() +\n            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    /* custom code end */\n    if(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__.Browser.isDevice)\n    {\n        args.gauge.axes[0].annotations[3].angle = 240;\n    }\n    },\n    axisLabelRender: function (args) {\n        if (args.value == 3 || args.value == 6 || args.value == 9 || args.value == 12) {\n                args.text = args.value.toString();\n        }\n        else {\n                args.text = \"\";\n        }\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/sleep-tracker/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/sleep-tracker/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=template&id=f116f038":
/*!************************************************************************************!*\
  !*** ./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=template&id=f116f038 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_f116f038__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_f116f038__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=f116f038 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=template&id=f116f038\");\n\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/sleep-tracker/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=template&id=f116f038":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/circular-gauge/sleep-tracker/App.vue?vue&type=template&id=f116f038 ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" This sample represents the number of hours slept by a person using a sleep tracker. The sleep tracker also displays the start and end time of each sleep cycle. \")\n], -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \" In this example, you can see how to make the circular gauge look like a sleep tracker. Additionally, the date, start and end time, and duration of sleep are all displayed. \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" More information on the circular gauge can be found in this \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n      target: \"_blank\",\n      href: \"https://ej2.syncfusion.com/vue/documentation/circular-gauge/getting-started/\"\n    }, \"documentation section\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\". \")\n  ])\n], -1 /* HOISTED */)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_pointer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointer\")\n  const _component_e_pointers = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-pointers\")\n  const _component_e_axis = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axis\")\n  const _component_e_axes = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-axes\")\n  const _component_ejs_circulargauge = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-circulargauge\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_circulargauge, {\n        load: $options.load,\n        background: _ctx.background,\n        style: {\"display\":\"block\"},\n        align: \"center\",\n        id: \"gauge\",\n        axisLabelRender: $options.axisLabelRender\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axes, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_axis, {\n                radius: _ctx.gaugeRadius,\n                startAngle: _ctx.startAngle,\n                endAngle: _ctx.endAngle,\n                majorTicks: _ctx.majorTicks,\n                lineStyle: _ctx.lineStyle,\n                minorTicks: _ctx.minorTicks,\n                minimum: 0,\n                maximum: 12,\n                labelStyle: _ctx.labelStyle,\n                annotations: _ctx.annotations,\n                ranges: _ctx.ranges\n              }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointers, null, {\n                    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value1,\n                        radius: _ctx.pointerRadius1,\n                        type: _ctx.type,\n                        markerShape: _ctx.markerShape,\n                        markerWidth: _ctx.markerWidth,\n                        markerHeight: _ctx.markerHeight,\n                        imageUrl: _ctx.image1,\n                        animation: _ctx.animation\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"type\", \"markerShape\", \"markerWidth\", \"markerHeight\", \"imageUrl\", \"animation\"]),\n                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_pointer, {\n                        value: _ctx.value2,\n                        radius: _ctx.pointerRadius2,\n                        type: _ctx.type,\n                        markerShape: _ctx.markerShape,\n                        markerWidth: _ctx.markerWidth,\n                        markerHeight: _ctx.markerHeight,\n                        imageUrl: _ctx.image2,\n                        animation: _ctx.animation\n                      }, null, 8 /* PROPS */, [\"value\", \"radius\", \"type\", \"markerShape\", \"markerWidth\", \"markerHeight\", \"imageUrl\", \"animation\"])\n                    ]),\n                    _: 1 /* STABLE */\n                  })\n                ]),\n                _: 1 /* STABLE */\n              }, 8 /* PROPS */, [\"radius\", \"startAngle\", \"endAngle\", \"majorTicks\", \"lineStyle\", \"minorTicks\", \"labelStyle\", \"annotations\", \"ranges\"])\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"load\", \"background\", \"axisLabelRender\"])\n    ]),\n    _hoisted_2,\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-circulargauge-vue-samples/./Samples/circular-gauge/sleep-tracker/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"circular-gauge/sleep-tracker/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/circular-gauge/sleep-tracker/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;