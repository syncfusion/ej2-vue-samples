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

/***/ "./Samples/heatmap/rendering-mode/main.js":
/*!************************************************!*\
  !*** ./Samples/heatmap/rendering-mode/main.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/rendering-mode/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/rendering-mode/main.js?");

/***/ }),

/***/ "./Samples/heatmap/rendering-mode/App.vue":
/*!************************************************!*\
  !*** ./Samples/heatmap/rendering-mode/App.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_25d3bbad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=25d3bbad */ \"./Samples/heatmap/rendering-mode/App.vue?vue&type=template&id=25d3bbad\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/heatmap/rendering-mode/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_25d3bbad__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/heatmap/rendering-mode/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/rendering-mode/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/rendering-mode/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/rendering-mode/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-heatmap': _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.HeatMapComponent,\n    'ejs-radiobutton': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.RadioButtonComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Net Migration Rate of Northern Europe From 1965 to 2015',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'inherit'\n            }\n        },\n         xAxis: {\n            labels: ['Channel Islands', 'Denmark', 'Estonia', 'Finland',\n                'Iceland', 'Ireland', 'Latvia', 'Lithuania', 'Norway', 'Sweden', 'UK'],\n            labelRotation: -90,\n            labelIntersectAction: 'None',\n            textStyle: {\n                 fontFamily: 'inherit'\n            }\n        },\n        yAxis: {\n            labels: ['1965-1970', '1970-1975', '1975-1980', '1980-1985', '1985-1990',\n                '1990-1995', '1995-2000', '2000-2005', '2005-2010', '2010-2015'],\n            textStyle: {\n                 fontFamily: 'inherit'\n            }\n        },\n        dataSource: [\n            [7.6, 5.9, -3.7, 2.2, 8.9, 6.0, 14.2, 6.1, -3.2, 4.2],\n            [3.9, 1.9, 2.6, 14.2, 2.3, 3.5, -2.8, 2.7, 4.2, 3.9],\n            [9.2, 3.4, 5.2, 14.5, 1.0, -5.9, -0.2, -1.7, -3.3, 4.6],\n            [-2.3, 7.2, -3.2, 15.1, 2.7, 2.9, 3.9, -1.2, 8.2, 6.0],\n            [-1.8, 5.0, -3.5, 3.2, 2.5, -1.8, 14.7, 3.0, 8.8, -3.3],\n            [-2.5, 3.4, 4.2, -1.9, 7.5, 4.6, 2.4, 10.9, 8.0, -3.0],\n            [7.1, 2.5, 7.9, 7.4, 15.2, 7.0, 5.8, -2.3, -3.9, -4.1],\n            [4.7, 3.3, 14.3, 5.5, 3.0, -3.5, -5.3, -6.8, -2.3, 5.7],\n            [2.2, 13.8, 3.0, -2.2, 3.8, 14.2, 3.7, 4.0, -4.9, 7.8],\n            [4.3, 15.3, 3.1, 1.7, 4.2, -3.6, 2.3, -3.2, 10.7, 2.3],\n            [-2.3, 3.4, 6.1, -1.3, 13.3, 3.7, -1.7, 8.2, 7.6, 4.1]\n        ],\n        cellSettings: { \n            textStyle: {\n                    fontFamily: 'inherit'\n            },\n            border: { width: 0 },\n            showLabel: false \n        },\n        legendSettings: {\n            position: 'Bottom',\n            width: '200px',\n            textStyle: {\n                 fontFamily: 'inherit'\n            }\n        },\n        tooltipSettings:{\n            textStyle: {\n                fontFamily: 'inherit'\n            }\n        },\n        paletteSettings: {\n            palette: [{ color: '#C06C84' },\n            { color: '#355C7D' }\n            ]\n        }\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Tooltip, _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_0__.Legend]\n},\nmethods: {\n    load: function(args) {\n     /* custom code start */\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1).replace(/-dark/i, \"Dark\");\n     /* custom code end */\n    },\n    renderChange : function()\n    {\n        this.$refs.heatmap.ej2Instances.renderingMode = this.$refs.svgMode.ej2Instances.checked ? 'SVG' : 'Canvas';\n    }\n  }\n});\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/rendering-mode/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/heatmap/rendering-mode/App.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./Samples/heatmap/rendering-mode/App.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/rendering-mode/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/rendering-mode/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/rendering-mode/App.vue?vue&type=template&id=25d3bbad":
/*!******************************************************************************!*\
  !*** ./Samples/heatmap/rendering-mode/App.vue?vue&type=template&id=25d3bbad ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_25d3bbad__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_25d3bbad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=25d3bbad */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/rendering-mode/App.vue?vue&type=template&id=25d3bbad\");\n\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/rendering-mode/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/rendering-mode/App.vue?vue&type=template&id=25d3bbad":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/heatmap/rendering-mode/App.vue?vue&type=template&id=25d3bbad ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"control-section col-lg-9\" }\nconst _hoisted_2 = {\n  class: \"content-wrapper\",\n  style: {\"width\":\"99%\"}\n}\nconst _hoisted_3 = { class: \"col-lg-3 property-section\" }\nconst _hoisted_4 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\",\"margin-left\":\"-10px\"}\n}\nconst _hoisted_5 = { style: {\"height\":\"50px\"} }\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", { style: {\"width\":\"60%\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"padding-left\":\"0px\"} }, \"Rendering Mode:\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = { style: {\"width\":\"40%\"} }\nconst _hoisted_8 = { class: \"row\" }\nconst _hoisted_9 = { class: \"row\" }\nconst _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample visualizes the net migration rate for the northern European countries over the years. The data label is disabled in this sample, the tooltip displays the data point values. In property panel, the options are available to change the rendering mode between Canvas and SVG means of radio button. </p></div><div id=\\\"description\\\"><p> In this example, you can see how to change the rendering mode between <code>Canvas</code> and <code>SVG</code> types in Heatmap. You can change the rendering mode using the <a href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/rendering-mode\\\" target=\\\"_blank\\\">renderingMode</a> property. </p><p>The tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item on touch-enabled devices.</p><br><p><b>Injecting Module</b></p><p> Heatmap component features are separated into discrete feature-based modules. To use a tooltip and the legend, inject the <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/tooltip\\\">Tooltip</a> and <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/heatmap-chart/legend\\\">Legend</a> modules using the <code>provide:{ heatmap:[Tooltip, Legend] }</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_heatmap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-heatmap\")\n  const _component_ejs_radiobutton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-radiobutton\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_heatmap, {\n            id: \"container\",\n            ref: \"heatmap\",\n            tooltipSettings: _ctx.tooltipSettings,\n            titleSettings: _ctx.titleSettings,\n            xAxis: _ctx.xAxis,\n            yAxis: _ctx.yAxis,\n            dataSource: _ctx.dataSource,\n            cellSettings: _ctx.cellSettings,\n            paletteSettings: _ctx.paletteSettings,\n            renderingMode: \"SVG\",\n            legendSettings: _ctx.legendSettings,\n            load: $options.load\n          }, null, 8 /* PROPS */, [\"tooltipSettings\", \"titleSettings\", \"xAxis\", \"yAxis\", \"dataSource\", \"cellSettings\", \"paletteSettings\", \"legendSettings\", \"load\"])\n        ])\n      ])\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_4, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_5, [\n            _hoisted_6,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", _hoisted_7, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_radiobutton, {\n                  id: \"svg\",\n                  ref: \"svgMode\",\n                  label: \"SVG\",\n                  name: \"renderingMode\",\n                  value: \"SVG\",\n                  checked: \"true\",\n                  change: $options.renderChange\n                }, null, 8 /* PROPS */, [\"change\"])\n              ]),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_radiobutton, {\n                  id: \"canvas\",\n                  ref: \"canvasMode\",\n                  label: \"Canvas\",\n                  name: \"renderingMode\",\n                  value: \"Canvas\",\n                  change: $options.renderChange\n                }, null, 8 /* PROPS */, [\"change\"])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_10\n  ]))\n}\n\n//# sourceURL=webpack://ej2-heatmap-vue-samples/./Samples/heatmap/rendering-mode/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"heatmap/rendering-mode/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_heatmap_vue_samples"] = self["webpackChunkej2_heatmap_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/heatmap/rendering-mode/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;