/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"heatmap/multi-level-labels/main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Samples/heatmap/multi-level-labels/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/heatmap/multi-level-labels/App.vue":
/*!****************************************************!*\
  !*** ./Samples/heatmap/multi-level-labels/App.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_9ca35336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9ca35336& */ \"./Samples/heatmap/multi-level-labels/App.vue?vue&type=template&id=9ca35336&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/heatmap/multi-level-labels/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_9ca35336___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_9ca35336___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/heatmap/multi-level-labels/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/multi-level-labels/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./Samples/heatmap/multi-level-labels/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/multi-level-labels/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/multi-level-labels/App.vue?vue&type=template&id=9ca35336&":
/*!***********************************************************************************!*\
  !*** ./Samples/heatmap/multi-level-labels/App.vue?vue&type=template&id=9ca35336& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9ca35336___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9ca35336& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/multi-level-labels/App.vue?vue&type=template&id=9ca35336&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9ca35336___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9ca35336___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/App.vue?");

/***/ }),

/***/ "./Samples/heatmap/multi-level-labels/main.js":
/*!****************************************************!*\
  !*** ./Samples/heatmap/multi-level-labels/main.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/heatmap/multi-level-labels/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/main.js?");

/***/ }),

/***/ "./Samples/heatmap/multi-level-labels/multi-level-label-data.json":
/*!************************************************************************!*\
  !*** ./Samples/heatmap/multi-level-labels/multi-level-label-data.json ***!
  \************************************************************************/
/*! exports provided: multiLevelLabelData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"multiLevelLabelData\\\":[[52,65,67,45,37,52,32,76,60,64,82,91],[68,52,63,51,30,51,51,81,70,60,88,80],[60,50,42,53,66,70,41,69,76,74,86,97],[66,64,46,40,47,41,45,76,83,69,92,84],[65,42,58,32,36,44,49,79,83,69,83,93],[54,46,61,46,40,39,41,69,61,84,84,87],[48,46,61,47,49,41,41,67,78,83,98,87],[69,52,41,44,41,52,46,71,63,84,83,91],[50,59,44,43,27,42,26,64,76,65,81,86],[47,49,66,53,50,34,31,79,78,79,89,95],[61,40,62,26,34,54,56,74,83,78,95,98]]}\");\n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/multi-level-label-data.json?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/multi-level-labels/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/multi-level-labels/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-heatmap */ \"./node_modules/@syncfusion/ej2-vue-heatmap/index.js\");\n/* harmony import */ var _multi_level_label_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-level-label-data.json */ \"./Samples/heatmap/multi-level-labels/multi-level-label-data.json\");\nvar _multi_level_label_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./multi-level-label-data.json */ \"./Samples/heatmap/multi-level-labels/multi-level-label-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"HeatMapPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        titleSettings: {\n            text: 'Product wise Monthly sales revenue for an e-commerce website',\n            textStyle: {\n                size: '15px',\n                fontWeight: '500',\n                fontStyle: 'Normal',\n                fontFamily: 'Segoe UI'\n            }\n        },\n        xAxis: {\n            labels: ['Laptop', 'Mobile', 'Gaming', 'Cosmetics', 'Fragrance', 'Watches', 'Handbags', 'Apparel',\n                'Kitchenware', 'Furniture', 'Home Decor'],\n            border: {\n                width: 1,\n                type: 'Rectangle',\n                color: '#a19d9d'\n            },\n            textStyle: {\n                color: 'black'\n\n            },\n            multiLevelLabels: [\n                {\n                    border: { type: 'Rectangle', color: '#a19d9d' },\n                    textStyle: {\n                        color: 'black',\n                        fontWeight: 'Bold'\n                    },\n                    categories: [\n                        { start: 0, end: 2, text: 'Electronics' },\n                        { start: 3, end: 4, text: 'Beauty and personal care' },\n                        { start: 5, end: 7, text: 'Fashion' },\n                        { start: 8, end: 10, text: 'Household' }\n                    ]\n                },\n            ]\n        },\n        yAxis: {\n            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n            border: {\n                width: 0\n            },\n            textStyle: {\n                color: 'black'\n            },\n            isInversed: true,\n            multiLevelLabels: [\n                {\n                    border: { type: 'Brace', color: '#a19d9d' },\n                    textStyle: {\n                        color: 'black',\n                        fontWeight: 'Bold'\n                    },\n                    categories: [\n                        { start: 0, end: 2, text: 'Q1' },\n                        { start: 3, end: 5, text: 'Q2' },\n                        { start: 6, end: 8, text: 'Q3' },\n                        { start: 9, end: 11, text: 'Q4' }\n                    ]\n                }\n            ]\n        },\n        paletteSettings: {\n            palette: [{ color: '#F0ADCE' },\n            { color: '#19307B' }\n            ]\n        },\n        legendSettings: {\n            visible: false\n        },\n        cellSettings: {\n            border: {\n                width: 0\n            }\n        },\n        dataSource: _multi_level_label_data_json__WEBPACK_IMPORTED_MODULE_2__[\"multiLevelLabelData\"]\n}\n},\nprovide:{\n    heatmap:[_syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _syncfusion_ej2_vue_heatmap__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"]]\n},\nmethods: {\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.heatmap.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n      selectedTheme = selectedTheme.toLowerCase();\n       if(selectedTheme === 'highcontrast')\n            {\n                args.heatmap.xAxis.textStyle.color = 'White';\n                args.heatmap.yAxis.textStyle.color = 'White';\n                args.heatmap.xAxis.multiLevelLabels[0].textStyle.color = 'White';\n                args.heatmap.yAxis.multiLevelLabels[0].textStyle.color = 'White';\n            }\n            else\n            {\n                args.heatmap.xAxis.textStyle.color = 'Black';\n                args.heatmap.yAxis.textStyle.color = 'Black';\n                args.heatmap.xAxis.multiLevelLabels[0].textStyle.color = 'Black';\n                args.heatmap.yAxis.multiLevelLabels[0].textStyle.color = 'Black';\n            }\n    },\n    cellRender: function(args) {\n            args.displayText = '$ ' + (args.value / 10) + 'K';\n        },\n    tooltipRender: function(args) {\n            args.content = [args.xLabel + ' | ' + args.yLabel + ' : $ ' + (args.value / 10) + 'K'];\n    },\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/heatmap/multi-level-labels/App.vue?vue&type=template&id=9ca35336&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/heatmap/multi-level-labels/App.vue?vue&type=template&id=9ca35336& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-heatmap\", {\n            attrs: {\n              id: \"container\",\n              titleSettings: _vm.titleSettings,\n              xAxis: _vm.xAxis,\n              yAxis: _vm.yAxis,\n              dataSource: _vm.dataSource,\n              paletteSettings: _vm.paletteSettings,\n              legendSettings: _vm.legendSettings,\n              cellSettings: _vm.cellSettings,\n              load: _vm.load,\n              cellRender: _vm.cellRender,\n              tooltipRender: _vm.tooltipRender\n            }\n          })\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticStyle: { float: \"right\", \"margin-right\": \"10px\" } }),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the product wise monthly sales revenue of the items sold by an online retailer in a year. The products are grouped based on the purchase domains and revenue is displayed as cell data.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to group axis labels. \\n        You can customize text in each level by using \"\n        ),\n        _c(\"code\", [_vm._v(\"alignment\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"textSytle\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"border\")]),\n        _vm._v(\" properties.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"Border of the axis labels can be customized by using \"),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [_c(\"code\", [_vm._v(\"Rectangle\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"Brace\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"WithoutTopBorder\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"WithoutBottomBorder\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"WithoutTopandBottomBorder\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"withoutBorder\")]), _vm._v(\".\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over an item or tap an item in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Heatmap component features are segregated into individual feature-wise modules. To use a tooltip, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Tooltip\")]),\n        _vm._v(\" module\\n        using the \"),\n        _c(\"code\", [_vm._v(\"Heatmap.Inject(Tooltip)\")]),\n        _vm._v(\" method.\\n       \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/heatmap/multi-level-labels/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });