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
/******/ 		"chart/lazy-loading/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/lazy-loading/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/lazy-loading/App.vue":
/*!********************************************!*\
  !*** ./Samples/chart/lazy-loading/App.vue ***!
  \********************************************/
/*! exports provided: GetDateTimeData, GetNumericData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_42442bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=42442bda&scoped=true& */ \"./Samples/chart/lazy-loading/App.vue?vue&type=template&id=42442bda&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/lazy-loading/App.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetDateTimeData\", function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"GetDateTimeData\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetNumericData\", function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"GetNumericData\"]; });\n\n/* harmony import */ var _App_vue_vue_type_style_index_0_id_42442bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css& */ \"./Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_42442bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_42442bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"42442bda\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/lazy-loading/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?");

/***/ }),

/***/ "./Samples/chart/lazy-loading/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/chart/lazy-loading/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default, GetDateTimeData, GetNumericData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/lazy-loading/App.vue?vue&type=script&lang=js&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetDateTimeData\", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"GetDateTimeData\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GetNumericData\", function() { return _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"GetNumericData\"]; });\n\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?");

/***/ }),

/***/ "./Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_42442bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_42442bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_42442bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_42442bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_42442bda_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?");

/***/ }),

/***/ "./Samples/chart/lazy-loading/App.vue?vue&type=template&id=42442bda&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./Samples/chart/lazy-loading/App.vue?vue&type=template&id=42442bda&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_42442bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=42442bda&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/lazy-loading/App.vue?vue&type=template&id=42442bda&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_42442bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_42442bda_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?");

/***/ }),

/***/ "./Samples/chart/lazy-loading/main.js":
/*!********************************************!*\
  !*** ./Samples/chart/lazy-loading/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/lazy-loading/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-42442bda] {\\n  padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-YPYCZ6ICKIFGKOUJZLBQV2O6FRFR7A44PRVKNO4Y5LFLMOPDSKQQ/Samples/chart/lazy-loading/App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=42442bda&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-42442bda] {\\n  padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/lazy-loading/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/lazy-loading/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: GetDateTimeData, GetNumericData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetDateTimeData\", function() { return GetDateTimeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetNumericData\", function() { return GetNumericData; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-calendars */ \"./node_modules/@syncfusion/ej2-vue-calendars/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_popups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-popups */ \"./node_modules/@syncfusion/ej2-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"ChartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_calendars__WEBPACK_IMPORTED_MODULE_3__[\"DatePickerPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_4__[\"NumericTextBoxPlugin\"]);\nlet intl = new _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Internationalization\"]();\n//let spinnerEle = document.getElementById(\"spinner\");\n\nlet GetDateTimeData = (start, end) => {\n  let series = [];\n  let point1;\n  let date;\n  let value = 80;\n  let option = {\n    skeleton: \"full\",\n    type: \"dateTime\"\n  };\n  let dateParser = intl.getDateParser(option);\n  let dateFormatter = intl.getDateFormat(option);\n  for (let i = 1; start <= end; i++) {\n    date = Date.parse(dateParser(dateFormatter(start)));\n    if (Math.random() > 0.5) {\n      value += Math.random() * 10 - 5;\n    } else {\n      value -= Math.random() * 10 - 5;\n    }\n    if (value < 0) {\n      value = getRandomInt(20, 40);\n    }\n    let point1 = { x: new Date(date), y: Math.round(value) };\n    new Date(start.setDate(start.getDate() + 1));\n    series.push(point1);\n  }\n  return series;\n};\nlet GetNumericData = (start, end) => {\n  let series1 = [];\n  let value = 30;\n  for (let i = start; i <= end; i++) {\n    if (Math.random() > 0.5) {\n      value += Math.random() * 10 - 5;\n    } else {\n      value -= Math.random() * 10 - 5;\n    }\n    if (value < 0) {\n      value = getRandomInt(20, 40);\n    }\n    let point = { x: i, y: Math.round(value) };\n    series1.push(point);\n  }\n  return series1;\n};\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nlet seriesData = GetDateTimeData(new Date(2009, 0, 1), new Date(2009, 8, 1));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      modedata: [\"Range\", \"Points Length\"],\n      mindate: new Date(2009, 0, 1),\n      maxdate: new Date(2014, 0, 1),\n      minvalue:1000,\n      maxvalue:10000,\n      value:1000,\n      stepvalue:100,\n      enabledtextbox: \"false\",\n      enabledmax: \"true\",\n      enabledmin: \"true\",\n      primaryXAxis: {\n        title: \"Day\",\n        valueType: \"DateTime\",\n        skeleton: \"yMMM\",\n        skeletonType: \"Date\",\n        edgeLabelPlacement: \"Shift\",\n        scrollbarSettings: {\n          range: {\n            minimum: new Date(2009, 0, 1),\n            maximum: new Date(2014, 0, 1)\n          },\n          enable: true,\n          pointsLength: 1000\n        }\n      },\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        title: \"Server Load\",\n        labelFormat: \"{value}MB\"\n      },\n      legend: {\n        visible: true\n      },\n      series: seriesData,\n      animation: { enable: false },\n      chartArea: {\n        border: {\n          width: 0\n        }\n      },\n      title: \"Network Load\",\n      tooltip: { enable: true, shared: true,header : '<b>${point.x}</b>', format : 'Server load : <b>${point.y}</b>' }\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"LineSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"DateTime\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"ScrollBar\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_6__[\"Crosshair\"]]\n  },\n  methods: {\n    scrollEnd: function(args) {\n      if (lazymodeid.value === \"Range\") {\n        this.$refs.chart.ej2Instances.series[0].dataSource = GetDateTimeData(\n          args.currentRange.minimum,\n          args.currentRange.maximum\n        );\n      } else {\n        this.$refs.chart.ej2Instances.series[0].dataSource = GetNumericData(\n          args.currentRange.minimum,\n          args.currentRange.maximum\n        );\n      }\n      this.$refs.chart.dataBind();\n    },\n     lazymode: function(e) {\n      let min;\n      let max;\n      let chart = document.getElementById(\"chartid\").ej2_instances[0];\n      if (lazymodeid.value === \"Range\") {\n        chart.primaryXAxis.valueType = \"DateTime\";\n        min = chart.primaryXAxis.scrollbarSettings.range.minimum = new Date(\n          2009,\n          0,\n          1\n        );\n        max = chart.primaryXAxis.scrollbarSettings.range.maximum = new Date(\n          2014,\n          0,\n          1\n        );\n        chart.series[0].dataSource = GetDateTimeData(\n          new Date(2009, 0, 1),\n          new Date(2009, 8, 1)\n        );\n        this.enabledmax = true;\n        this.enabledmin = true;\n        this.enabledtextbox = false;\n        chart.refresh();\n      } else {\n        chart.primaryXAxis.valueType = \"Double\";\n        chart.primaryXAxis.scrollbarSettings.range.minimum = null;\n        chart.primaryXAxis.scrollbarSettings.range.maximum = null;\n        chart.primaryXAxis.scrollbarSettings.pointsLength = 1000;\n        chart.series[0].dataSource = GetNumericData(0, 200);\n        this.enabledmax = false;\n        this.enabledmin = false;\n        this.enabledtextbox = true;\n        chart.refresh();\n      }\n    },\n    mindatepicker: function(args) {\n      this.$refs.chart.ej2Instances.primaryXAxis.scrollbarSettings.range.minimum =\n        args.value;\n      this.$refs.chart.ej2Instances.refresh();\n    },\n    maxdatepicker: function(args) {\n      this.$refs.chart.ej2Instances.primaryXAxis.scrollbarSettings.range.maximum =\n        args.value;\n      this.$refs.chart.ej2Instances.refresh();\n    },\n    pointlength: function(args) {\n      this.$refs.chart.ej2Instances.primaryXAxis.scrollbarSettings.pointsLength =\n        args.value;\n      this.$refs.chart.ej2Instances.refresh();\n    },\n    load: function(args) {\n        let selectedTheme = location.hash.split('/')[1];\n      selectedTheme = selectedTheme ? selectedTheme : 'Material';\n      args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +\n        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/lazy-loading/App.vue?vue&type=template&id=42442bda&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/lazy-loading/App.vue?vue&type=template&id=42442bda&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-8 control-section\"},[_c('ejs-chart',{ref:\"chart\",attrs:{\"load\":_vm.load,\"chartArea\":_vm.chartArea,\"id\":\"chartid\",\"scrollEnd\":_vm.scrollEnd,\"primaryXAxis\":_vm.primaryXAxis,\"tooltip\":_vm.tooltip,\"legendSettings\":_vm.legend,\"title\":_vm.title,\"primaryYAxis\":_vm.primaryYAxis}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.series,\"xName\":\"x\",\"yName\":\"y\",\"type\":\"Line\",\"animation\":_vm.animation}})],1)],1)],1),_vm._v(\" \"),_c('div',[_c('div',{staticClass:\"col-md-4 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"lazymodeid\",\"change\":_vm.lazymode,\"dataSource\":_vm.modedata,\"index\":\"0\",\"width\":\"120\"}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(1),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-datepicker',{attrs:{\"id\":\"mindatepickerid\",\"value\":_vm.mindate,\"width\":\"120\",\"change\":_vm.mindatepicker,\"enabled\":_vm.enabledmin}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(2),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-datepicker',{attrs:{\"id\":\"maxdatepickerid\",\"value\":_vm.maxdate,\"width\":\"120\",\"change\":_vm.maxdatepicker,\"enabled\":_vm.enabledmax}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(3),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-numerictextbox',{attrs:{\"id\":\"numeric\",\"min\":_vm.minvalue,\"max\":_vm.maxvalue,\"format\":\"n\",\"width\":\"120\",\"value\":_vm.value,\"step\":_vm.stepvalue,\"enabled\":_vm.enabledtextbox,\"change\":_vm.pointlength,\"disabled\":\"true\"}})],1)])])])])]),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_vm._m(5)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Lazy Load \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Min \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Max \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_vm._v(\"Point Length\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample illustrates lazy laoding feature in chart. Loads data for chart on demand. \\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to load data for chart on demand. Chart will fire the \"),_c('code',[_vm._v(\"scrollEnd\")]),_vm._v(\" event,\\n        in that can udpate the chart with required data based on point length and axis range.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        ScrollBar is enabled in the sample and ScrollBar module injected to the chart.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        Chart component features are segregated into individual feature-wise modules. To use lazy loading, we need to inject\\n        \"),_c('code',[_vm._v(\"ScrollBar\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"Zoom\")]),_vm._v(\"module using\\n        \"),_c('code',[_vm._v(\"provide: { chart: [ScrollBar, Zoom] },\")]),_vm._v(\" method.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/lazy-loading/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });