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

/***/ "./Samples/treemap/label/main.js":
/*!***************************************!*\
  !*** ./Samples/treemap/label/main.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/treemap/label/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-treemap-vue-samples/./Samples/treemap/label/main.js?");

/***/ }),

/***/ "./Samples/treemap/label/App.vue":
/*!***************************************!*\
  !*** ./Samples/treemap/label/App.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_6b4b025e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6b4b025e */ \"./Samples/treemap/label/App.vue?vue&type=template&id=6b4b025e\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/treemap/label/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_6b4b025e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/treemap/label/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-treemap-vue-samples/./Samples/treemap/label/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/treemap/label/App.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/treemap/label/App.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-treemap */ \"./node_modules/@syncfusion/ej2-vue-treemap/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module '../treemap/treemap-data/country-population'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\ncomponents: {\n    'ejs-treemap': _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_0__.TreeMapComponent,\n    'ejs-dropdownlist': _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__.DropDownListComponent\n},\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Countries ordered based on Population - 2017',\n            textStyle: { size: '15px', fontFamily: 'Segoe UI' }\n        },\n        dataSource: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module '../treemap/treemap-data/country-population'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n        tooltipSettings: {\n            visible: true,\n            format: '${Country} : ${Population}',\n            textStyle: {\n                fontFamily: 'Segoe UI'\n            }\n        },\n        legendSettings: {\n            visible: true,\n            mode: 'Interactive',\n            width: '300px',\n            height: '10',\n            position: 'Top',\n            textStyle: {\n                fontFamily: 'Segoe UI'\n            }\n        },\n        useGroupingSeparator: true,\n        rangeColorValuePath: 'Population',\n        weightValuePath: 'Population',\n        leafItemSettings: {\n            showLabels: true,\n            labelPath: 'Country',\n            labelStyle: {\n                fontFamily: 'Segoe UI'\n            },\n            fill: 'red',\n            colorMapping: [\n                {\n                    to: 10000000000,\n                    from: 100000000,\n                    label: '200M - 1.3M',\n                    color: '#4B134F'\n                }, { to: 100000000, from: 20000000, label: '20M - 200M', color: '#8C304D' },\n                { to: 20000000, from: 100000, label: '0.1M - 20M', color: '#C84B4B' }\n            ]\n        },\n        labelsplaceholder: 'Select Label Action',\n        labelswidth: '100%',\n        labelsdata:['Trim','Hide','Wrap','WrapByWord']\n}\n},\nprovide:{\n    treemap:[_syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_0__.TreeMapTooltip, _syncfusion_ej2_vue_treemap__WEBPACK_IMPORTED_MODULE_0__.TreeMapLegend]\n},\nmethods:{\n    /* custom code start */\n    load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material'; \n        args.treemap.theme = (theme.charAt(0).toUpperCase() +\n            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    },\n    /* custom code end */\n    changeLabels:function(args){\n        this.$refs.treemap.ej2Instances.leafItemSettings.interSectAction = this.$refs.labelMode.ej2Instances.value;\n        this.$refs.treemap.ej2Instances.refresh();\n    }\n}\n});\n\n\n//# sourceURL=webpack://ej2-treemap-vue-samples/./Samples/treemap/label/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/treemap/label/App.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./Samples/treemap/label/App.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/treemap/label/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-treemap-vue-samples/./Samples/treemap/label/App.vue?");

/***/ }),

/***/ "./Samples/treemap/label/App.vue?vue&type=template&id=6b4b025e":
/*!*********************************************************************!*\
  !*** ./Samples/treemap/label/App.vue?vue&type=template&id=6b4b025e ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6b4b025e__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6b4b025e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=6b4b025e */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/treemap/label/App.vue?vue&type=template&id=6b4b025e\");\n\n\n//# sourceURL=webpack://ej2-treemap-vue-samples/./Samples/treemap/label/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/treemap/label/App.vue?vue&type=template&id=6b4b025e":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/treemap/label/App.vue?vue&type=template&id=6b4b025e ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-lg-9 control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { style: {\"float\":\"right\",\"margin-right\":\"10px\"} }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Source: \"),\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n    href: \" https://www.populationpyramid.net/population-size-per-country/2017\",\n    target: \"_blank\"\n  }, \" www.populationpyramid.net\")\n], -1 /* HOISTED */)\nconst _hoisted_3 = { class: \"col-lg-3 property-section\" }\nconst _hoisted_4 = {\n  id: \"property\",\n  title: \"Properties\",\n  style: {\"width\":\"100%\",\"margin-left\":\"-10px\"}\n}\nconst _hoisted_5 = { style: {\"height\":\"50px\"} }\nconst _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, \"Label Intersect Action\")\n], -1 /* HOISTED */)\nconst _hoisted_7 = { style: {\"margin-left\":\"10px\"} }\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"action-description\\\"><p> This sample illustrates the population level of various countries in 2017. The leaf item’s labels intersect action can be changed by using the <code>Label Intersect Action</code> in properties panel. </p></div><div id=\\\"description\\\"><p> In this example, you can see the various label intersect actions available in TreeMap. Range color mapping has been specified, and the default legend has been enabled in this example. </p><p> Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices </p><br><p style=\\\"font-weight:500;\\\">Injecting Module</p><p> TreeMap component features are segregated into individual feature-wise modules. To use a tooltip, inject the <code>Tooltip</code> module using the <code>TreeMap.Inject(TreeMapTooltip)</code> method, and use a legend by injecting the <code>Legend</code> module using the <code>TreeMap.Inject(TreeMapLegend)</code> method. </p></div>\", 2)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_treemap = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-treemap\")\n  const _component_ejs_dropdownlist = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-dropdownlist\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_1, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_treemap, {\n        ref: \"treemap\",\n        id: \"container\",\n        align: \"center\",\n        load: $options.load,\n        titleSettings: _ctx.titleSettings,\n        rangeColorValuePath: _ctx.rangeColorValuePath,\n        format: \"n\",\n        useGroupingSeparator: _ctx.useGroupingSeparator,\n        dataSource: _ctx.dataSource,\n        leafItemSettings: _ctx.leafItemSettings,\n        legendSettings: _ctx.legendSettings,\n        tooltipSettings: _ctx.tooltipSettings,\n        weightValuePath: _ctx.weightValuePath\n      }, null, 8 /* PROPS */, [\"load\", \"titleSettings\", \"rangeColorValuePath\", \"useGroupingSeparator\", \"dataSource\", \"leafItemSettings\", \"legendSettings\", \"tooltipSettings\", \"weightValuePath\"]),\n      _hoisted_2\n    ]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"table\", _hoisted_4, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tbody\", null, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"tr\", _hoisted_5, [\n            _hoisted_6,\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"td\", null, [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [\n                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_dropdownlist, {\n                  ref: \"labelMode\",\n                  id: \"labels\",\n                  style: {\"width\":\"100%\"},\n                  dataSource: _ctx.labelsdata,\n                  index: \"0\",\n                  placeholder: _ctx.labelsplaceholder,\n                  width: _ctx.labelswidth,\n                  change: $options.changeLabels\n                }, null, 8 /* PROPS */, [\"dataSource\", \"placeholder\", \"width\", \"change\"])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _hoisted_8\n  ]))\n}\n\n//# sourceURL=webpack://ej2-treemap-vue-samples/./Samples/treemap/label/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"treemap/label/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_treemap_vue_samples"] = self["webpackChunkej2_treemap_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/treemap/label/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;