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
/******/ 		"chart/default-doughnut/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/default-doughnut/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/default-doughnut/App.vue":
/*!************************************************!*\
  !*** ./Samples/chart/default-doughnut/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6c4996f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6c4996f6& */ \"./Samples/chart/default-doughnut/App.vue?vue&type=template&id=6c4996f6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/default-doughnut/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6c4996f6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6c4996f6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/default-doughnut/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?");

/***/ }),

/***/ "./Samples/chart/default-doughnut/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/chart/default-doughnut/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/default-doughnut/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?");

/***/ }),

/***/ "./Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?");

/***/ }),

/***/ "./Samples/chart/default-doughnut/App.vue?vue&type=template&id=6c4996f6&":
/*!*******************************************************************************!*\
  !*** ./Samples/chart/default-doughnut/App.vue?vue&type=template&id=6c4996f6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6c4996f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6c4996f6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/default-doughnut/App.vue?vue&type=template&id=6c4996f6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6c4996f6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6c4996f6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?");

/***/ }),

/***/ "./Samples/chart/default-doughnut/main.js":
/*!************************************************!*\
  !*** ./Samples/chart/default-doughnut/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/default-doughnut/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section {\\r\\n  min-height: 450px;\\n}\\r\\n\", \"\", {\"version\":3,\"sources\":[\"D:/SamplesVue/ej2-charts-vue-samples/Samples/chart/default-doughnut/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,kBAAkB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.control-section {\\r\\n  min-height: 450px;\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/default-doughnut/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/default-doughnut/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n\r\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationChartPlugin\"]);\r\nlet count = 0;\r\nlet datasource1 = [\r\n  { x: \"Net-tution and Fees\", y: 10 },\r\n  { x: \"Self-supporting Operations\", y: 10 },\r\n  { x: \"Private Gifts\", y: 13 },\r\n  { x: \"All Other\", y: 14 },\r\n  { x: \"Local Revenue\", y: 9 },\r\n  { x: \"State Revenue\", y: 13 },\r\n  { x: \"Federal Revenue\", y: 8 }\r\n];\r\nlet datasource2 = [\r\n  { x: \"Net-tution and Fees\", y: 120 },\r\n  { x: \"Self-supporting Operations\", y: 31 },\r\n  { x: \"Private Gifts\", y: 6 },\r\n  { x: \"All Other\", y: 12 },\r\n  { x: \"Local Revenue\", y: 25 },\r\n  { x: \"State Revenue\", y: 11 },\r\n  { x: \"Federal Revenue\", y: 12 }\r\n];\r\nlet datasource3 = [\r\n  { x: \"Net-tution and Fees\", y: 6 },\r\n  { x: \"Self-supporting Operations\", y: 22 },\r\n  { x: \"Private Gifts\", y: 11 },\r\n  { x: \"All Other\", y: 15 },\r\n  { x: \"Local Revenue\", y: 13 },\r\n  { x: \"State Revenue\", y: 10 },\r\n  { x: \"Federal Revenue\", y: 8 }\r\n];\r\nlet datasource4 = [\r\n  { x: \"Net-tution and Fees\", y: 15 },\r\n  { x: \"Self-supporting Operations\", y: 10 },\r\n  { x: \"Private Gifts\", y: 18 },\r\n  { x: \"All Other\", y: 20 },\r\n  { x: \"Local Revenue\", y: 30 },\r\n  { x: \"State Revenue\", y: 20 },\r\n  { x: \"Federal Revenue\", y: 25 }\r\n];\r\nlet datasource5 = [\r\n  { x: \"Net-tution and Fees\", y: 21 },\r\n  { x: \"Self-supporting Operations\", y: 10 },\r\n  { x: \"Private Gifts\", y: 15 },\r\n  { x: \"All Other\", y: 15 },\r\n  { x: \"Local Revenue\", y: 11 },\r\n  { x: \"State Revenue\", y: 20 },\r\n  { x: \"Federal Revenue\", y: 60 }\r\n];\r\nlet selectedTheme = location.hash.split(\"/\")[1];\r\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\r\nlet theme = (\r\n  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)\r\n).replace(/-dark/i, \"Dark\");\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\r\n  data: function() {\r\n    return {\r\n      theme: theme,\r\n      data: [\r\n        { x: \"Net-tution and Fees\", y: 21, text: \"21%\" },\r\n        { x: \"Self-supporting Operations\", y: 21, text: \"21%\" },\r\n        { x: \"Private Gifts\", y: 8, text: \"8%\" },\r\n        { x: \"All Other\", y: 8, text: \"8%\" },\r\n        { x: \"Local Revenue\", y: 4, text: \"4%\" },\r\n        { x: \"State Revenue\", y: 21, text: \"21%\" },\r\n        { x: \"Federal Revenue\", y: 16, text: \"16%\" }\r\n      ],\r\n      legendSettings: {\r\n        visible: true,\r\n        toggleVisibility: false,\r\n        position: \"Right\",\r\n        height: \"28%\",\r\n        width: \"44%\"\r\n      },\r\n      dataLabel: {\r\n        visible: true,\r\n        position: \"Inside\",\r\n        name: \"${point.y}\",\r\n        font: {\r\n          color: \"white\",\r\n          fontWeight: \"Bold\",\r\n          size: \"14px\"\r\n        }\r\n      },\r\n      startAngle: 0,\r\n      endAngle: 360,\r\n      tooltip: {\r\n        enable: false,\r\n        header: \"<b>${point.x}</b>\",\r\n        format: \"Composition: <b>${point.y}%</b>\"\r\n      },\r\n      title: \"Education Institutional Revenue\"\r\n    };\r\n  },\r\n  methods: {\r\n    onAnimationComplete: function(args) {\r\n      let centerTitle = document.getElementById(\"center_title\");\r\n      centerTitle.style.fontSize = this.getFontSize(\r\n        args.accumulation.initialClipRect.width\r\n      );\r\n      let rect = centerTitle.getBoundingClientRect();\r\n      centerTitle.style.top = (args.accumulation.origin.y + args.accumulation.element.offsetTop - (rect.height / 2)) + 'px';\r\n      centerTitle.style.left = (args.accumulation.origin.x + args.accumulation.element.offsetLeft - (rect.width / 2)) + 'px';\r\n      centerTitle.style.visibility = \"visible\";\r\n      let points = args.accumulation.visibleSeries[0].points;\r\n      for (let point of points) {\r\n        if (point.labelPosition === \"Outside\" && point.labelVisible) {\r\n          let label = document.getElementById(\r\n            \"container_datalabel_Series_0_text_\" + point.index\r\n          );\r\n          label.setAttribute(\"fill\", \"black\");\r\n        }\r\n      }\r\n    },\r\n    getFontSize: function(width) {\r\n      if (width > 300) {\r\n        return \"13px\";\r\n      } else if (width > 250) {\r\n        return \"8px\";\r\n      } else {\r\n        return \"6px\";\r\n      }\r\n    },\r\n    onTextRender: function(args) {\r\n      args.series.dataLabel.font.size = this.getFontSize(\r\n        this.$refs.pie.ej2Instances.initialClipRect.width\r\n      );\r\n       args.text = args.text + '%';\r\n    },\r\n    loaded: function(args) {\r\n      this.$refs.pie.ej2Instances.loaded = null;\r\n      setInterval(() => {\r\n        if (count === 0) {\r\n          this.$refs.pie.ej2Instances.series[0].dataSource = datasource1;\r\n          this.$refs.pie.ej2Instances.animate();\r\n          count++;\r\n        } else if (count === 1) {\r\n          this.$refs.pie.ej2Instances.series[0].dataSource = datasource2;\r\n          this.$refs.pie.ej2Instances.animate();\r\n          count++;\r\n        } else if (count === 2) {\r\n          this.$refs.pie.ej2Instances.series[0].dataSource = datasource3;\r\n          this.$refs.pie.ej2Instances.animate();\r\n          count++;\r\n        } else if (count === 3) {\r\n          this.$refs.pie.ej2Instances.series[0].dataSource = datasource4;\r\n          this.$refs.pie.ej2Instances.animate();\r\n          count++;\r\n        } else if (count === 4) {\r\n          this.$refs.pie.ej2Instances.series[0].dataSource = datasource5;\r\n          this.$refs.pie.ej2Instances.animate();\r\n          count = 0;\r\n        }\r\n      }, 3000);\r\n    }\r\n  },\r\n  provide: {\r\n    accumulationchart: [\r\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationLegend\"],\r\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"PieSeries\"],\r\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationDataLabel\"],\r\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationTooltip\"],\r\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationSelection\"],\r\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"]\r\n    ]\r\n  }\r\n}));\r\n\n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/default-doughnut/App.vue?vue&type=template&id=6c4996f6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/default-doughnut/App.vue?vue&type=template&id=6c4996f6& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-accumulationchart\",\n          {\n            ref: \"pie\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              id: \"container\",\n              theme: _vm.theme,\n              legendSettings: _vm.legendSettings,\n              tooltip: _vm.tooltip,\n              title: _vm.title,\n              textRender: _vm.onTextRender,\n              animationComplete: _vm.onAnimationComplete,\n              selectionMode: \"Point\",\n              loaded: _vm.loaded\n            }\n          },\n          [\n            _c(\n              \"e-accumulation-series-collection\",\n              [\n                _c(\"e-accumulation-series\", {\n                  attrs: {\n                    name: \"Revenue\",\n                    dataSource: _vm.data,\n                    xName: \"x\",\n                    yName: \"y\",\n                    startAngle: _vm.startAngle,\n                    endAngle: _vm.endAngle,\n                    innerRadius: \"40%\",\n                    dataLabel: _vm.dataLabel\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticStyle: { visibility: \"hidden\", position: \"absolute\" },\n            attrs: { id: \"center_title\" }\n          },\n          [_vm._v(\"Expenses in Year\\n    \")]\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample illustrates an educational institute’s revenue by using the pie with legend series. The legend will be displayed at right side of the chart.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      In this example, you can see how to render doughnut chart. You can use\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"radius\")]),\n        _vm._v(\" and\\n      \"),\n        _c(\"code\", [_vm._v(\"innerRadius\")]),\n        _vm._v(\" properties to render the doughnut and also use\\n      \"),\n        _c(\"code\", [_vm._v(\"border\")]),\n        _vm._v(\",\\n      \"),\n        _c(\"code\", [_vm._v(\"fill\")]),\n        _vm._v(\" properties to customize the point.\\n      \"),\n        _c(\"code\", [_vm._v(\"dataLabel\")]),\n        _vm._v(\" is used to represent individual data and its value.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _c(\"code\", [_vm._v(\"Tooltip\")]),\n        _vm._v(\n          \" is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      AccumulationChart component features are segregated into individual feature-wise modules. To use legend, we need to Inject\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"AccumulationLegend\")]),\n        _vm._v(\" into the\\n      \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" option.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/default-doughnut/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });