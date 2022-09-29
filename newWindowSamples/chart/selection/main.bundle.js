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
/******/ 		"chart/selection/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/selection/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/selection/App.vue":
/*!*****************************************!*\
  !*** ./Samples/chart/selection/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_68c52bc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=68c52bc9&scoped=true& */ \"./Samples/chart/selection/App.vue?vue&type=template&id=68c52bc9&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_68c52bc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css& */ \"./Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_68c52bc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_68c52bc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"68c52bc9\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/selection/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?");

/***/ }),

/***/ "./Samples/chart/selection/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./Samples/chart/selection/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/selection/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?");

/***/ }),

/***/ "./Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_68c52bc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_68c52bc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_68c52bc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_68c52bc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_68c52bc9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?");

/***/ }),

/***/ "./Samples/chart/selection/App.vue?vue&type=template&id=68c52bc9&scoped=true&":
/*!************************************************************************************!*\
  !*** ./Samples/chart/selection/App.vue?vue&type=template&id=68c52bc9&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_68c52bc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=68c52bc9&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/selection/App.vue?vue&type=template&id=68c52bc9&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_68c52bc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_68c52bc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?");

/***/ }),

/***/ "./Samples/chart/selection/main.js":
/*!*****************************************!*\
  !*** ./Samples/chart/selection/main.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/selection/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/selection/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-panel-table div[data-v-68c52bc9]{\\n  padding-top: 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.3.0.1-T67TDI6RTFMXI65CTZSEGIYBWHNJ35F5HUG4Y4OQVGOSDUO2GR7A/Samples/chart/selection/App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&id=68c52bc9&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-panel-table div[data-v-68c52bc9]{\\n  padding-top: 0px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/selection/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/selection/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ChartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"ColorPickerPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (\n  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)\n).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      mode: \"Palette\",\n      seriesData: [\n        { x: \"CHN\", y: 17 },\n        { x: \"USA\", y: 19 },\n        { x: \"IDN\", y: 29 },\n        { x: \"JAP\", y: 13 },\n        { x: \"BRZ\", y: 24 }\n      ],\n      seriesData1: [\n        { x: \"CHN\", y: 54 },\n        { x: \"USA\", y: 67 },\n        { x: \"IDN\", y: 65 },\n        { x: \"JAP\", y: 61 },\n        { x: \"BRZ\", y: 68 }\n      ],\n      seriesData2: [\n        { x: \"CHN\", y: 9 },\n        { x: \"USA\", y: 14 },\n        { x: \"IDN\", y: 6 },\n        { x: \"JAP\", y: 26 },\n        { x: \"BRZ\", y: 8 }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        title: \"Countries\",\n        valueType: \"Category\",\n        interval: 1,\n        labelIntersectAction: \"Rotate90\"\n      },\n\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        title: \"Distribution\",\n        labelFormat: \"{value}%\",\n        interval: 20\n      },\n      legendSettings: { visible: true, toggleVisibility: false },\n\n      animation: {\n        enable: false\n      },\n      selectionMode: \"Point\",\n      highlightMode: \"None\",\n      selectionPattern: \"None\",\n      highlightPattern: \"None\",\n      highlightColor: '',\n      indexdata: [\"Point\", \"Series\", \"Cluster\"],\n      patternTypes1: [\n        \"None\",\n        \"DiagonalForward\",\n        \"Chessboard\",\n        \"Triangle\",\n        \"Box\",\n        \"HorizontalDash\"\n      ],\n         patternTypes2: [\n        \"None\",\n        \"Dots\",\n        \"Chessboard\",\n        \"Triangle\",\n        \"Tile\",\n        \"Grid\"\n      ],\n      indexwidth: 120,\n      tooltip: { enable: false },\n\n      title: \"Age Distribution by Country\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Selection\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ScatterSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Highlight\"]]\n  },\n  methods: {\n    indexChange: function(args) {\n      this.$refs.chart.ej2Instances.selectionMode = selmode.value;\n      var checkBox = document.getElementById(\"highlightCheckbox\");\n      if (checkBox.checked) {\n        this.$refs.chart.ej2Instances.highlightMode = selmode.value;\n      } else {\n        this.$refs.chart.ej2Instances.highlightMode = \"None\";\n      }\n      this.$refs.chart.ej2Instances.dataBind();\n    },\n    check: function(e) {\n      this.$refs.chart.ej2Instances.isMultiSelect = e.target.checked;\n      this.$refs.chart.ej2Instances.dataBind();\n    },\n    selectionChange: function(e) {\n      this.$refs.chart.ej2Instances.selectionPattern = patternMode.value;\n      this.$refs.chart.ej2Instances.dataBind();\n    },\n    colorChange: function(args) {\n      this.$refs.chart.ej2Instances.highlightColor = args.currentValue.hex;\n      this.$refs.chart.ej2Instances.dataBind();\n    },\n    highlightPatternChange: function(e) {\n      var checkBox = document.getElementById(\"highlightCheckbox\");\n     if (checkBox.checked) {\n        this.$refs.chart.ej2Instances.highlightMode = selmode.value;\n        this.$refs.chart.ej2Instances.highlightPattern = highpattern.value;\n      } else {\n        this.$refs.chart.ej2Instances.highlightMode = \"None\";\n        this.$refs.chart.ej2Instances.highlightPattern = \"None\";\n      }\n      this.$refs.chart.ej2Instances.dataBind();\n    },\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/selection/App.vue?vue&type=template&id=68c52bc9&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/selection/App.vue?vue&type=template&id=68c52bc9&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-8 control-section\"},[_c('ejs-chart',{ref:\"chart\",staticStyle:{\"display\":\"block\"},attrs:{\"theme\":_vm.theme,\"align\":\"center\",\"id\":\"chartcontainer\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"legendSettings\":_vm.legendSettings,\"tooltip\":_vm.tooltip,\"selectionMode\":_vm.selectionMode,\"highlightMode\":_vm.highlightMode,\"selectionPattern\":_vm.selectionPattern,\"highlightPattern\":_vm.highlightPattern,\"highlightColor\":_vm.highlightColor}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":\"Column\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Age 0-14\",\"width\":\"2\",\"animation\":_vm.animation}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.seriesData1,\"type\":\"Column\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Age 15-64\",\"width\":\"2\",\"animation\":_vm.animation}}),_vm._v(\" \"),_c('e-series',{attrs:{\"dataSource\":_vm.seriesData2,\"type\":\"Column\",\"xName\":\"x\",\"yName\":\"y\",\"name\":\"Age 65 & Above\",\"width\":\"2\",\"animation\":_vm.animation}})],1)],1)],1),_vm._v(\" \"),_c('div',[_c('div',{staticClass:\"col-md-4 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('br'),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{ref:\"dropDownValue\",attrs:{\"id\":\"selmode\",\"change\":_vm.indexChange,\"dataSource\":_vm.indexdata,\"index\":\"0\",\"width\":_vm.indexwidth}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"},attrs:{\"id\":\"\"}},[_vm._m(1),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\",\"padding-left\":\"10px\",\"padding-right\":\"10px\"}},[_c('input',{attrs:{\"type\":\"checkbox\",\"id\":\"multiselect\"},on:{\"change\":_vm.check}})])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(2),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{attrs:{\"id\":\"patternMode\",\"change\":_vm.selectionChange,\"dataSource\":_vm.patternTypes1,\"index\":\"0\",\"width\":_vm.indexwidth}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(3),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"40%\"}},[_c('ejs-colorpicker',{attrs:{\"id\":\"highlighColor\",\"value\":\"null\",\"mode\":_vm.mode,\"change\":_vm.colorChange}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"},attrs:{\"id\":\"\"}},[_vm._m(4),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\",\"padding-left\":\"10px\",\"padding-right\":\"10px\"}},[_c('input',{staticStyle:{\"margin-top\":\"15px\"},attrs:{\"type\":\"checkbox\",\"id\":\"highlightCheckbox\"},on:{\"change\":_vm.highlightPatternChange}})])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(5),_vm._v(\" \"),_c('td',[_c('ejs-dropdownlist',{attrs:{\"id\":\"highpattern\",\"change\":_vm.highlightPatternChange,\"dataSource\":_vm.patternTypes2,\"index\":\"0\",\"width\":_vm.indexwidth}})],1)])])])]),_vm._v(\" \"),_vm._m(6),_vm._v(\" \"),_vm._m(7)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Selection Mode\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"80%\"}},[_c('div',[_vm._v(\"Enable Multi-selection:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Selection Patterns:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"60%\"}},[_c('div',[_vm._v(\"Highlight Color:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"80%\"}},[_c('div',[_vm._v(\"Enable Highlight:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"60%\"}},[_c('div',[_vm._v(\"Highlight Patterns:\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample demonstrates the selection behavior and its mode along with the highlight and highlight patterns in the chart.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this sample, any point or series can be selected in the chart by clicking on or touching the point. You can also change the selection mode by changing the \"),_c('code',[_vm._v(\"Selection Mode\")]),_vm._v(\" option in the properties panel. \\n      You can enable multiple selections with the \"),_c('code',[_vm._v(\"Enable Multi Selection\")]),_vm._v(\" option. You can also select a point while loading a chart using the \"),_c('code',[_vm._v(\"SelectedDataIndexes\")]),_vm._v(\" option. \\n      While hovering the point, the point is highlighted using the \"),_c('code',[_vm._v(\"Enable Highlight\")]),_vm._v(\" option, as well as you can set different highlight patterns and colors using the \"),_c('code',[_vm._v(\"Highlight Patterns\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"Highlight Color\")]),_vm._v(\" option.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"Tap to select a point or series, double tap and drag to enable rectangular selection in touch enabled devices.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      Chart supports seven mode of selection which can be set using\\n      \"),_c('code',[_vm._v(\"SelectionMode\")]),_vm._v(\" property.\\n    \")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"Series\")]),_vm._v(\" - Select the series in chart.\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Point\")]),_vm._v(\" - Select a point in the series .\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Cluster\")]),_vm._v(\" - Select a group of points in the chart.\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"DragXY\")]),_vm._v(\" - Rectangular selection with respect to both axis.\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"DragX\")]),_vm._v(\" - Rectangular selection with respect to horizontal axis.\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"DragY\")]),_vm._v(\" - Rectangular selection with respect to vertical axis.\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Lasso\")]),_vm._v(\" - Select free form of selection area points.\\n      \")])]),_vm._v(\" \"),_c('p',[_c('b',[_vm._v(\"Injecting Module\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      Chart component features are segregated into individual feature-wise modules. To use selection feature, we need to inject\\n      \"),_c('code',[_vm._v(\"Selection\")]),_vm._v(\" module using\\n      \"),_c('code',[_vm._v(\"provide: { chart: [Selection] },\")]),_vm._v(\" method.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/selection/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });