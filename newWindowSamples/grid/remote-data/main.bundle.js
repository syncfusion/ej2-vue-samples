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

/***/ "./Samples/grid/remote-data/main.js":
/*!******************************************!*\
  !*** ./Samples/grid/remote-data/main.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/grid/remote-data/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/remote-data/main.js?");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/remote-data/App.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/remote-data/App.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    components: {\n        'ejs-grid': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.GridComponent,\n        'e-column': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.ColumnDirective,\n        'e-columns': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.ColumnsDirective\n    },\n    data: function () {\n        var SERVICE_URI = \"https://services.syncfusion.com/vue/production/\";\n        return {\n            data: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__.DataManager({\n                url: SERVICE_URI + 'api/Orders',\n                adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_1__.WebApiAdaptor()\n            })\n        };\n    },\n    provide: {\n        grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Page]\n    }\n});\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/remote-data/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/remote-data/App.vue?vue&type=template&id=1d6d8bee&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/remote-data/App.vue?vue&type=template&id=1d6d8bee&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = { class: \"col-lg-12 control-section\" };\nvar _hoisted_2 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n    /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"This sample demonstrates the way of data binding Grid component with remote service. The Grid data source is bound to remote data using DataManager. \")\n], -1 /* HOISTED */);\nvar _hoisted_3 = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"description\\\"><p>The Grid supports data binding. The <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource\\\"> dataSource </a></code> property can be assigned with the instance of <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"http://ej2.syncfusion.com/documentation/data/api-dataManager.html\\\"> DataManager</a></code> to bind remote data.</p><p>The DataManager, which will act as an interface between the service endpoint and the Grid, will require the below minimal information to interact with service endpoint properly. </p><ul><li><code>DataManager-&gt;url</code> - Defines the service endpoint to fetch data</li><li><code>DataManager-&gt;adaptor</code> - Defines the adaptor option. By default, <code>ODataAdaptor</code> is used for remote binding.</li></ul><p>Adaptor is responsible for processing response and request from/to the service endpoint. <code>@syncfusion/ej2-data</code> package provides some predefined adaptors which are designed to interact with particular service endpoints. They are,</p><ul><li><code>UrlAdaptor</code> - Use this to interact any remote services. This is the base adaptor for all remote based adaptors.</li><li><code>ODataAdaptor</code> - Use this to interact with OData endpoints.</li><li><code>ODataV4Adaptor</code> - Use this to interact with OData V4 endpoints.</li><li><code>WebApiAdaptor</code> - Use this to interact with Web API created under OData standards.</li><li><code>WebMethodAdaptor</code> - Use this to interact with web methods.</li></ul><p>In this demo, remote data is bound by assigning service data as an instance of <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"http://ej2.syncfusion.com/documentation/data/api-dataManager.html\\\"> DataManager</a></code> to the <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/grid/#datasource\\\"> dataSource </a></code> property.</p><p> More information on the data binding can be found in this <a target=\\\"_blank\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/grid/data-binding/remote-data\\\">documentation section</a>. </p></div>\", 1);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n    var _component_e_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-column\");\n    var _component_e_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-columns\");\n    var _component_ejs_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-grid\");\n    return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n        _hoisted_2,\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_grid, {\n                dataSource: _ctx.data,\n                allowPaging: true\n            }, {\n                default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_columns, null, {\n                        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () { return [\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"OrderID\",\n                                headerText: \"Order ID\",\n                                width: \"120\",\n                                textAlign: \"Right\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"CustomerID\",\n                                headerText: \"Customer ID\",\n                                width: \"160\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"EmployeeID\",\n                                headerText: \"Employee ID\",\n                                width: \"120\",\n                                textAlign: \"Right\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"Freight\",\n                                headerText: \"Freight\",\n                                width: \"150\",\n                                format: \"C2\",\n                                textAlign: \"Right\"\n                            }),\n                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                                field: \"ShipCountry\",\n                                headerText: \"ShipCountry\",\n                                width: \"150\"\n                            })\n                        ]; }),\n                        _: 1 /* STABLE */\n                    })\n                ]; }),\n                _: 1 /* STABLE */\n            }, 8 /* PROPS */, [\"dataSource\"])\n        ]),\n        _hoisted_3\n    ]));\n}\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/remote-data/App.vue?./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/grid/remote-data/App.vue":
/*!******************************************!*\
  !*** ./Samples/grid/remote-data/App.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_1d6d8bee_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1d6d8bee&ts=true */ \"./Samples/grid/remote-data/App.vue?vue&type=template&id=1d6d8bee&ts=true\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ \"./Samples/grid/remote-data/App.vue?vue&type=script&lang=ts\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_1d6d8bee_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/grid/remote-data/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/grid/remote-data/App.vue?vue&type=script&lang=ts":
/*!******************************************************************!*\
  !*** ./Samples/grid/remote-data/App.vue?vue&type=script&lang=ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=ts */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/remote-data/App.vue?vue&type=script&lang=ts\");\n \n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/grid/remote-data/App.vue?vue&type=template&id=1d6d8bee&ts=true":
/*!********************************************************************************!*\
  !*** ./Samples/grid/remote-data/App.vue?vue&type=template&id=1d6d8bee&ts=true ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1d6d8bee_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_ts_loader_index_js_clonedRuleSet_1_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_1d6d8bee_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader/index.js??clonedRuleSet-1!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=1d6d8bee&ts=true */ \"./node_modules/ts-loader/index.js??clonedRuleSet-1!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/remote-data/App.vue?vue&type=template&id=1d6d8bee&ts=true\");\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/remote-data/App.vue?");

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
/******/ 			"grid/remote-data/main": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_grid_vue_samples"] = self["webpackChunkej2_grid_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/grid/remote-data/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;