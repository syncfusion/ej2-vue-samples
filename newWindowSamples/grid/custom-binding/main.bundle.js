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

/***/ "./Samples/grid/custom-binding/main.js":
/*!*********************************************!*\
  !*** ./Samples/grid/custom-binding/main.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/grid/custom-binding/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/main.js?");

/***/ }),

/***/ "./Samples/grid/custom-binding/order-service.ts":
/*!******************************************************!*\
  !*** ./Samples/grid/custom-binding/order-service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OrderService: () => (/* binding */ OrderService)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n\n/**\n * OrderData Service.\n */\nvar OrderService = /** @class */ (function () {\n    function OrderService() {\n        this.ajax = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_0__.Ajax({\n            type: 'GET', mode: true,\n            onFailure: function (e) { return false; }\n        });\n        this.BASE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Orders';\n    }\n    OrderService.prototype.execute = function (state) {\n        return this.getData(state);\n    };\n    OrderService.prototype.getData = function (state) {\n        var pageQuery = \"$skip=\".concat(state.skip, \"&$top=\").concat(state.take);\n        var sortQuery = '';\n        if ((state.sorted || []).length) {\n            sortQuery = \"&$orderby=\" + state.sorted.map(function (obj) {\n                return obj.direction === 'descending' ? \"\".concat(obj.name, \" desc\") : obj.name;\n            }).reverse().join(',');\n        }\n        this.ajax.url = \"\".concat(this.BASE_URL, \"?\").concat(pageQuery).concat(sortQuery, \"&$count=true\");\n        return this.ajax.send().then(function (response) {\n            var data = JSON.parse(response);\n            return { result: data['value'], count: parseInt(data['@odata.count'], 10) };\n        });\n    };\n    return OrderService;\n}());\n\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/order-service.ts?");

/***/ }),

/***/ "./Samples/grid/custom-binding/App.vue":
/*!*********************************************!*\
  !*** ./Samples/grid/custom-binding/App.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_6b37a040__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6b37a040 */ \"./Samples/grid/custom-binding/App.vue?vue&type=template&id=6b37a040\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/grid/custom-binding/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_6b37a040__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/grid/custom-binding/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/custom-binding/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/custom-binding/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-service */ \"./Samples/grid/custom-binding/order-service.ts\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-grid': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.GridComponent,\n    'e-column': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.ColumnDirective,\n    'e-columns': _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.ColumnsDirective\n  },\n  data() {\n    return {\n      data: {},\n      pageOptions: { pageSize: 10, pageCount: 4 },\n      orderService: new _order_service__WEBPACK_IMPORTED_MODULE_1__.OrderService()\n    };\n  },\n  mounted() {\n    let state = { skip: 0, take: 10 };\n    this.dataStateChange(state);\n  },\n  methods:{\n    dataStateChange: function (state) {\n        this.orderService.execute(state).then(( gridData ) => this.data = gridData );\n    }\n  },\n  provide: {\n      grid: [_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Sort, _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Group, _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_0__.Page]\n  }\n});\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/grid/custom-binding/App.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./Samples/grid/custom-binding/App.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/custom-binding/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/App.vue?");

/***/ }),

/***/ "./Samples/grid/custom-binding/App.vue?vue&type=template&id=6b37a040":
/*!***************************************************************************!*\
  !*** ./Samples/grid/custom-binding/App.vue?vue&type=template&id=6b37a040 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6b37a040__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_6b37a040__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=6b37a040 */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/custom-binding/App.vue?vue&type=template&id=6b37a040\");\n\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/custom-binding/App.vue?vue&type=template&id=6b37a040":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/grid/custom-binding/App.vue?vue&type=template&id=6b37a040 ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-lg-12 control-section\" }\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" This sample demonstrates the usage of grid with \"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"code\", null, \"AJAX\"),\n    /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\". Paging, sorting and grouping can be performed in this sample. \")\n  ])\n], -1 /* HOISTED */)\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)(\"<div id=\\\"description\\\"><p> Grid can be bound with data from external API. In this demo, the external data communication is done using AJAX and the grid is resolved with the response data. When performing grid actions such as paging, sorting and grouping etc. the <code>dataStateChange</code> event will be triggered and we need perform the request and assign the new grid data. </p><p> In this demo, simply select the paging and click the column header to sort a column, multiple sorting is also enabled. To group a specify column, drag and drop the column in the group drop area. To enable paging, sorting and grouping, set the <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/grid/#allowpaging\\\"> allowPaging </a></code> , <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/grid/#allowsorting\\\"> allowSorting </a></code> and <code><a target=\\\"_blank\\\" class=\\\"code\\\" href=\\\"https://ej2.syncfusion.com/vue/documentation/api/grid/#allowgrouping\\\"> allowGrouping</a></code> as true. </p><p style=\\\"font-weight:500;\\\">Injecting Module:</p><p> Grid component features are segregated into individual feature-wise modules. To use the paging ,sorting and grouping features, inject the <code>Page</code>, <code>Sort</code> and <code>Group</code> respectively into the <code>provide</code> section. </p></div>\", 1)\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_e_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-column\")\n  const _component_e_columns = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"e-columns\")\n  const _component_ejs_grid = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-grid\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    _hoisted_2,\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_grid, {\n        dataSource: $data.data,\n        allowPaging: true,\n        pageSettings: $data.pageOptions,\n        allowSorting: true,\n        allowGrouping: true,\n        dataStateChange: $options.dataStateChange\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_columns, null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                field: \"OrderID\",\n                headerText: \"Order ID\",\n                width: \"130\",\n                textAlign: \"Right\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                field: \"CustomerID\",\n                headerText: \"Customer Name\",\n                width: \"150\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                field: \"ShipName\",\n                headerText: \"Ship Name\",\n                width: \"200\"\n              }),\n              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_e_column, {\n                field: \"ShipCity\",\n                headerText: \"Ship City\",\n                width: \"150\"\n              })\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }, 8 /* PROPS */, [\"dataSource\", \"pageSettings\", \"dataStateChange\"])\n    ]),\n    _hoisted_3\n  ]))\n}\n\n//# sourceURL=webpack://ej2-grid-vue-samples/./Samples/grid/custom-binding/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

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
/******/ 			"grid/custom-binding/main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/grid/custom-binding/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;