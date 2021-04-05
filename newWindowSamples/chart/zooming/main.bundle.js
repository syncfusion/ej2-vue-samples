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
/******/ 		"chart/zooming/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/zooming/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/zooming/App.vue":
/*!***************************************!*\
  !*** ./Samples/chart/zooming/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=8fb0d1a8&scoped=true& */ \"./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/zooming/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& */ \"./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"8fb0d1a8\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/zooming/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/chart/zooming/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_8fb0d1a8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=8fb0d1a8&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_8fb0d1a8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?");

/***/ }),

/***/ "./Samples/chart/zooming/main.js":
/*!***************************************!*\
  !*** ./Samples/chart/zooming/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/zooming/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#gradient-chart stop[data-v-8fb0d1a8] {\\n\\t\\tstop-color: #BDEDE9;\\n}\\n#gradient-chart stop[offset=\\\"0\\\"][data-v-8fb0d1a8] {\\n\\t\\tstop-opacity: 0.75;\\n}\\n#gradient-chart stop[offset=\\\"1\\\"][data-v-8fb0d1a8] {\\n\\t\\tstop-opacity: 0;\\n}\\n#control-container[data-v-8fb0d1a8] {\\n\\t\\tpadding: 0px !important;\\n}\\n\\n  \", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/2-charts-vue-samples_master-2XQC543HP26CSZM765S5C6AEMYE6OBUSNQL2WLROXQNWOUIID2MQ/Samples/chart/zooming/App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=8fb0d1a8&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#gradient-chart stop[data-v-8fb0d1a8] {\\n\\t\\tstop-color: #BDEDE9;\\n}\\n#gradient-chart stop[offset=\\\"0\\\"][data-v-8fb0d1a8] {\\n\\t\\tstop-opacity: 0.75;\\n}\\n#gradient-chart stop[offset=\\\"1\\\"][data-v-8fb0d1a8] {\\n\\t\\tstop-opacity: 0;\\n}\\n#control-container[data-v-8fb0d1a8] {\\n\\t\\tpadding: 0px !important;\\n}\\n\\n  \"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/zooming/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n  \n  \n  \n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\nfunction GetZoomingData() {\n        let series = [];\n        let point1;\n        let value = 80;\n        for (let i = 1; i < 500; i++) {\n            if (Math.random() > .5) {\n                value += Math.random();\n            } else {\n                value -= Math.random();\n            }\n            point1 = { x: new Date(1950, i + 2, i), y: value.toFixed(1) };\n            series.push(point1);\n        }\n        return { 'series': series };\n    }\n    let seriesData = GetZoomingData().series;\n  /* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n      return {\n           theme: theme,\n          primaryXAxis: {\n        title: 'Years',\n        valueType: 'DateTime',\n        skeleton: 'yMMM',\n        edgeLabelPlacement: 'Shift',\n        majorGridLines: { width: 0 }\n    },\n    //Initializing Primary Y Axis\n    primaryYAxis:  {\n        title: 'Profit ($)',\n        rangePadding: 'None',\n        lineStyle: { width: 0 },\n        majorTickLines: { width: 0 }\n    },\n    legend:  {\n        visible: false\n    },\n    animation: { enable: false },\n     zoomSettings:  {\n        mode: 'X',\n        enableMouseWheelZooming: true,\n        enablePinchZooming: true,\n        enableSelectionZooming: true,\n        enableScrollbar: true\n    },\n     chartArea:  {\n        border: {\n            width: 0\n        }\n    },\n\n     width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '80%',\n     border: { width: 0.5, color: '#00bdae' },\n     title: 'Sales History of Product X',\n     series: seriesData\n\n      };\n    },\n    provide: {\n      chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"AreaSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Zoom\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ScrollBar\"]]\n    },\n    methods: {\n     \n    }   \n  }));\n  \n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/zooming/App.vue?vue&type=template&id=8fb0d1a8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"div\",\n        { attrs: { align: \"center\" } },\n        [\n          _c(\n            \"ejs-chart\",\n            {\n              staticStyle: { display: \"block\", width: \"92%\" },\n              attrs: {\n                theme: _vm.theme,\n                chartArea: _vm.chartArea,\n                width: _vm.width,\n                align: \"center\",\n                id: \"chart-zooming\",\n                primaryXAxis: _vm.primaryXAxis,\n                legendSettings: _vm.legend,\n                zoomSettings: _vm.zoomSettings,\n                title: _vm.title,\n                primaryYAxis: _vm.primaryYAxis\n              }\n            },\n            [\n              _c(\n                \"e-series-collection\",\n                [\n                  _c(\"e-series\", {\n                    attrs: {\n                      dataSource: _vm.series,\n                      type: \"Area\",\n                      xName: \"x\",\n                      yName: \"y\",\n                      animation: _vm.animation,\n                      fill: \"url(#gradient-chart)\",\n                      border: _vm.border\n                    }\n                  })\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _c(\"svg\", { staticStyle: { height: \"0\" } }, [\n      _c(\n        \"defs\",\n        [\n          _c(\n            \"linearGradient\",\n            {\n              staticClass: \"chart-material\",\n              staticStyle: { opacity: \"0.75\" },\n              attrs: {\n                id: \"gradient-chart\",\n                x1: \"0\",\n                x2: \"0\",\n                y1: \"0\",\n                y2: \"1\"\n              }\n            },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates zooming feature in chart. The change can be zoomed by pinching or by mouse wheel. \\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the zooming and panning behavior in chart.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Click and drag the mouse on a chart area to enable selection zooming.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Hover the mouse on the toolbar at the top right corner of chart area to switch between zooming and panning.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Pinch in and pinch out the chart area to zoom in or zoom out the chart in touch enabled devices.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [_vm._v(\"Touch and drag to pan the chart.\")]),\n        _vm._v(\" \"),\n        _c(\"li\", [_vm._v(\"Double tap to reset the zoomed chart.\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"Chart component supports four types of zooming which can be set using \"\n        ),\n        _c(\"code\", [_vm._v(\"enableSelectionZooming\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"enablePinchZooming\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"enableMouseWheelZooming\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"enableDeferredZooming\")]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _c(\"p\", [\n        _vm._v(\"Chart supports two mode of zooming which can be set using \"),\n        _c(\"code\", [\n          _c(\n            \"a\",\n            {\n              staticClass: \"code\",\n              attrs: {\n                target: \"_blank\",\n                href:\n                  \"http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#mode-zoommode\"\n              }\n            },\n            [_vm._v(\"mode\")]\n          )\n        ]),\n        _vm._v(\" property.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"XY\")]),\n          _vm._v(\" - Zoom the chart with respect to both the axis.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"X\")]),\n          _vm._v(\" - Zoom the chart with respect to horizontal axis.\")\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Y\")]),\n          _vm._v(\" - Zoom the chart with respect to vertical axis.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n         Chart component features are segregated into individual feature-wise modules. To use zooming, we need to inject\\n         \"\n        ),\n        _c(\"code\", [_vm._v(\"Zoom\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [Zoom] },\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n         More information on the Zooming can be found in this\\n         \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-zoomSettings.html#properties\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/zooming/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });