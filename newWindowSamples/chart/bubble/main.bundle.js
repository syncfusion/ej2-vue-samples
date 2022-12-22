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
/******/ 		"chart/bubble/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/bubble/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/bubble/App.vue":
/*!**************************************!*\
  !*** ./Samples/chart/bubble/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_96c28d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=96c28d7a& */ \"./Samples/chart/bubble/App.vue?vue&type=template&id=96c28d7a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/bubble/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_96c28d7a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=96c28d7a&lang=css& */ \"./Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_96c28d7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_96c28d7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/bubble/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?");

/***/ }),

/***/ "./Samples/chart/bubble/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/chart/bubble/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/bubble/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?");

/***/ }),

/***/ "./Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_96c28d7a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=96c28d7a&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_96c28d7a_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_96c28d7a_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_96c28d7a_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_96c28d7a_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?");

/***/ }),

/***/ "./Samples/chart/bubble/App.vue?vue&type=template&id=96c28d7a&":
/*!*********************************************************************!*\
  !*** ./Samples/chart/bubble/App.vue?vue&type=template&id=96c28d7a& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_96c28d7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=96c28d7a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/bubble/App.vue?vue&type=template&id=96c28d7a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_96c28d7a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_96c28d7a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?");

/***/ }),

/***/ "./Samples/chart/bubble/main.js":
/*!**************************************!*\
  !*** ./Samples/chart/bubble/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/bubble/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/bubble/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.trackball-control-section ellipse[id*=_Trackball_0] {\\n        stroke-width: 1 !important;\\n} \\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/rts-vue-samples_release_20.4.0.1/Samples/chart/bubble/App.vue?vue&type=style&index=0&id=96c28d7a&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,2BAA2B;CAClC\",\"file\":\"App.vue?vue&type=style&index=0&id=96c28d7a&lang=css&\",\"sourcesContent\":[\"\\n.trackball-control-section ellipse[id*=_Trackball_0] {\\n        stroke-width: 1 !important;\\n} \\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/bubble/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/bubble/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n     theme: theme,\n     seriesData: [\n        { Literacy : 92.2, GDPGrowth : 7.8, BubbleSize : 1.347, TooltipMappingName : \"China\", Text : \"China\" },\n        { Literacy : 74, GDPGrowth : 6.5, BubbleSize : 1.241, TooltipMappingName : \"India\", Text : \"India\" },\n        { Literacy : 90.4, GDPGrowth : 6.0, BubbleSize : 0.238, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'ID': \"Indonesia\", Text : \"Indonesia\" },\n        { Literacy : 99.4, GDPGrowth : 2.2, BubbleSize : 0.312, TooltipMappingName : \"US\", Text : \"United States\" },\n        { Literacy : 88.6, GDPGrowth : 1.3, BubbleSize : 0.197, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'BR' : \"Brazil\", Text : \"Brazil\" },\n        { Literacy : 99, GDPGrowth : 0.7, BubbleSize : 0.0818, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'DE' : \"Germany\", Text : \"Germany\" },\n        { Literacy : 72, GDPGrowth : 2.0, BubbleSize : 0.0826, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'EG': \"Egypt\", Text : \"Egypt\" },\n        { Literacy : 99.6, GDPGrowth : 3.4, BubbleSize : 0.143, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'RUS': \"Russia\", Text : \"Russia\" },\n        { Literacy : 96.5, GDPGrowth : 0.2, BubbleSize : 0.128, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'JP': \"Japan\", Text : \"Japan\" },\n        { Literacy : 86.1, GDPGrowth : 4.0, BubbleSize : 0.115, TooltipMappingName : \"MLI\", Text : \"MeLiteracy Ion\" },\n        { Literacy : 92.6, GDPGrowth : 5.2, BubbleSize : 0.096, TooltipMappingName : \"PH\", Text : \"Philipines\" },\n        { Literacy : 61.3, GDPGrowth : 1.45, BubbleSize : 0.162, TooltipMappingName : \"Nigeria\", Text : \"Nigeria\" },\n        { Literacy : 82.2, GDPGrowth : 3.97, BubbleSize : 0.7, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'HK' : \"Hong Kong\", Text : \"Hong Kong\" },\n        { Literacy : 79.2, GDPGrowth : 4.9, BubbleSize : 0.162, TooltipMappingName : \"NL\", Text : \"NetherLand\" },\n        { Literacy : 72.5, GDPGrowth : 4.5, BubbleSize : 0.7, TooltipMappingName : \"Jordan\", Text : \"Jordan\" },\n        { Literacy : 81, GDPGrowth : 2.5, BubbleSize : 0.21, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'AU' : \"Australia\", Text : \"Australia\" },\n        { Literacy : 66.8, GDPGrowth : 3.9, BubbleSize : 0.028, TooltipMappingName : \"MN\", Text : \"Mongolia\" },\n        { Literacy : 78.4, GDPGrowth : 2.9, BubbleSize : 0.231, TooltipMappingName : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'TW' :\"Taiwan\", Text : \"Taiwan\" }\n   ],\n    \n           //Initializing Primary X Axis\n     primaryXAxis: {\n            crossesAt: 5,\n            minimum: 65,\n            maximum: 102,\n            interval: 5\n        },\n        \n     //Initializing Primary Y Axis\n       primaryYAxis: {\n            crossesAt: 85,\n            minimum: 0,\n            maximum: 10,\n            interval: 2.5\n        },\n\n      width : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '75%',\n      marker: {  dataLabel: { name: 'TooltipMappingName' , visible: true , position: 'Middle' , font: { fontWeight: '500'}} },\n      border: { width: 2 },\n      legendSettings: { visible: false },\n      tooltip: {\n        header: '<b>${point.tooltip}</b>',\n        enableMarker: false,\n        enable: true,\n        format: \"Literacy Rate : <b>${point.x}%</b> <br/>GDP Annual Growth Rate : <b>${point.y}</b><br/>Population : <b>${point.size} Billion</b>\"\n    },\n\n    title: \"World Countries Details\",\n\n       pointRender: function(args) {\n       let selectedTheme = location.hash.split('/')[1];\n       selectedTheme = selectedTheme ? selectedTheme : 'Material';\n\n        if (selectedTheme==='material-dark')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if(selectedTheme==='material')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='fabric-dark' || selectedTheme==='fabric')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='bootstrap5-dark')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='bootstrap5')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='fluent-dark')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='fluent')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='bootstrap4' || selectedTheme==='bootstrap')\n        {\n                args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n                args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];           \n        }\n        else if (selectedTheme==='tailwind-dark')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];                     \n\n        }\n        else if (selectedTheme==='tailwind')\n        {                    \n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n        }\n        else if (selectedTheme==='highcontrast')\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];           \n        }\n        else\n        {\n            args.fill = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];\n            args.border.color = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './theme-color'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())[args.point.index % 10];           \n        }\n\n   },\n\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"BubbleSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DataLabel\"]]\n  },\n  methods: {\n  }\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/bubble/App.vue?vue&type=template&id=96c28d7a&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/bubble/App.vue?vue&type=template&id=96c28d7a& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"trackball-control-section\", attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              width: _vm.width,\n              tooltip: _vm.tooltip,\n              pointRender: _vm.pointRender,\n              legendSettings: _vm.legendSettings,\n            },\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    type: \"Bubble\",\n                    xName: \"Literacy\",\n                    size: \"BubbleSize\",\n                    yName: \"GDPGrowth\",\n                    name: \"Pound\",\n                    marker: _vm.marker,\n                    minRadius: \"3\",\n                    maxRadius: \"8\",\n                    border: _vm.border,\n                    tooltipMappingName: \"Text\",\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This Vue bubble chart example visualizes the literacy rates and GDP growth rates of countries. A tooltip shows more information about the countries.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure the bubble chart. The bubble chart is a type of chart that shows three dimensions of the data. Each point is drawn as a bubble, where the bubble's size depends on the \"\n        ),\n        _c(\"code\", [_vm._v(\"Size\")]),\n        _vm._v(\" property. You can also use the \"),\n        _c(\"code\", [_vm._v(\"Fill\")]),\n        _vm._v(\" property to customize the data appearance.         \\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Tooltip\")]),\n        _vm._v(\n          \" is enabled in this example. To see the tooltip in action, hover a point or tap on a point in touch-enabled devices.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Chart component features are segregated into individual feature-wise modules. To use bubble series, we need to inject\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"BubbleSeries\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [BubbleSeries] },\")]),\n        _vm._v(\" method.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about the bubble series can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/chart/chart-types/#bubble-chart\",\n            },\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/bubble/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });