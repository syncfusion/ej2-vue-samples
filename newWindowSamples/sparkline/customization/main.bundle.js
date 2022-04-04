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
/******/ 		"sparkline/customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/sparkline/customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/sparkline/customization/App.vue":
/*!*************************************************!*\
  !*** ./Samples/sparkline/customization/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_9c4fd87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9c4fd87a& */ \"./Samples/sparkline/customization/App.vue?vue&type=template&id=9c4fd87a&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/sparkline/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_9c4fd87a___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_9c4fd87a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sparkline/customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/customization/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/sparkline/customization/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/customization/App.vue?vue&type=template&id=9c4fd87a&":
/*!********************************************************************************!*\
  !*** ./Samples/sparkline/customization/App.vue?vue&type=template&id=9c4fd87a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9c4fd87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9c4fd87a& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/customization/App.vue?vue&type=template&id=9c4fd87a&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9c4fd87a___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9c4fd87a___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/customization/customizationdata.ts":
/*!**************************************************************!*\
  !*** ./Samples/sparkline/customization/customizationdata.ts ***!
  \**************************************************************/
/*! exports provided: data, data2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data2\", function() { return data2; });\n// tslint:disable\nvar data = [\n    { x: 0, xval: 'AUDI', yval: 1 },\n    { x: 1, xval: 'BMW', yval: 5 },\n    { x: 2, xval: 'BUICK', yval: -1 },\n    { x: 3, xval: 'CETROEN', yval: -6 },\n    { x: 4, xval: 'CHEVROLET', yval: 0 },\n    { x: 5, xval: 'FIAT', yval: 1 },\n    { x: 6, xval: 'FORD', yval: -2 },\n    { x: 7, xval: 'HONDA', yval: 7 },\n    { x: 8, xval: 'HYUNDAI', yval: -9 },\n    { x: 9, xval: 'JEEP', yval: 0 },\n    { x: 10, xval: 'KIA', yval: -10 },\n    { x: 11, xval: 'MAZDA', yval: 3 },\n    { x: 12, xval: 'MERCEDES', yval: 13 },\n    { x: 13, xval: 'NISSAN', yval: 5 },\n    { x: 14, xval: 'OPEL/VHALL', yval: -6 },\n    { x: 15, xval: 'PEUGEOT', yval: 0 },\n    { x: 16, xval: 'RENAULT', yval: 7 },\n    { x: 17, xval: 'SKODA', yval: 5 },\n    { x: 18, xval: 'SUBARU', yval: 5 },\n    { x: 19, xval: 'SUZUKI', yval: 11 },\n    { x: 20, xval: 'TOYOTA', yval: 5 },\n    { x: 21, xval: 'VOLKSWAGEN', yval: 3 }\n];\nvar data2 = [\n    { x: 0, xval: 'AUDI', yval: 1847613 },\n    { x: 1, xval: 'BMW', yval: 2030331 },\n    { x: 2, xval: 'BUICK', yval: 1465823 },\n    { x: 3, xval: 'CETROEN', yval: 999888 },\n    { x: 4, xval: 'CHEVROLET', yval: 3857388 },\n    { x: 5, xval: 'FIAT', yval: 1503806 },\n    { x: 6, xval: 'FORD', yval: 5953122 },\n    { x: 7, xval: 'HONDA', yval: 4967689 },\n    { x: 8, xval: 'HYUNDAI', yval: 3951176 },\n    { x: 9, xval: 'JEEP', yval: 1390130 },\n    { x: 10, xval: 'KIA', yval: 2511293 },\n    { x: 11, xval: 'MAZDA', yval: 1495557 },\n    { x: 12, xval: 'MERCEDES', yval: 2834181 },\n    { x: 13, xval: 'NISSAN', yval: 4834694 },\n    { x: 14, xval: 'OPEL/VHALL', yval: 996559 },\n    { x: 15, xval: 'PEUGEOT', yval: 1590300 },\n    { x: 16, xval: 'RENAULT', yval: 2275227 },\n    { x: 17, xval: 'SKODA', yval: 1180672 },\n    { x: 18, xval: 'SUBARU', yval: 1050390 },\n    { x: 19, xval: 'SUZUKI', yval: 2891415 },\n    { x: 20, xval: 'TOYOTA', yval: 7843423 },\n    { x: 21, xval: 'VOLKSWAGEN', yval: 6639250 }\n];\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/customizationdata.ts?");

/***/ }),

/***/ "./Samples/sparkline/customization/main.js":
/*!*************************************************!*\
  !*** ./Samples/sparkline/customization/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sparkline/customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#sprkline-custom-sample .property-text {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n    font-size: 13px !important;\\n    font-weight: 400 !important;\\n}\\n#sprkline-custom-sample #axis > * {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-H4YAPB63IFIM57O2ZWUJEAVGA57H7XNTVE3LIK4A2URV4SGJEFVQ/Samples/sparkline/customization/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,uFAAuF;IACvF,2BAA2B;IAC3B,4BAA4B;CAC/B;AACD;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#sprkline-custom-sample .property-text {\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\" !important;\\n    font-size: 13px !important;\\n    font-weight: 400 !important;\\n}\\n#sprkline-custom-sample #axis > * {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/customization/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/customization/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _customizationdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customizationdata */ \"./Samples/sparkline/customization/customizationdata.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SparklinePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        height: '200px',\n        width: '180px',\n        lineWidth: 1,\n        type: 'Column',\n        valueType: 'Category',\n        dataSource: _customizationdata__WEBPACK_IMPORTED_MODULE_5__[\"data\"],\n        axisSettings: {\n            lineSettings: {\n                color: 'red',\n                width: 2\n            }\n        },\n        markerSettings: {\n            fill: 'red',\n            size: 5\n        },\n        tooltipSettings: {\n            format: '${xval}: ${yval}',\n            trackLineSettings: {\n                color: 'red',\n                width: 1\n            }\n        },\n        dataSource2: _customizationdata__WEBPACK_IMPORTED_MODULE_5__[\"data2\"],\n        axisSettings2: {\n            lineSettings: {\n                color: 'red',\n                width: 2\n            }\n        },\n        markerSettings2: {\n            fill: 'red',\n            size: 5\n        },\n        tooltipSettings2: {\n            format: '${xval}: ${yval}',\n            trackLineSettings: {\n                color: 'red',\n                width: 1\n            }\n        },\n    sparkdata:[\n        { Id:'salespercentage', level:'Sales Percentage'},\n        { Id:'salescount', level:'Sales Count'}],\n    sparkfields: { text: 'level', value: 'Id' },\n    value:0,\n    rangetype: 'MinRange',\n    disabled:true\n}\n},\nmounted(){\n    this.start();    \n},\nmethods:{\n    /* custom code start */\n    load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material';\n        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast') ;\n    },\n    /* custom code end */\n    // Code for Property Panel\n    start: function(){\n        if (this.$refs.spark.ej2Instances.value === 'salespercentage') {\n            this.$refs.axisval.ej2Instances.min = 0;\n            this.$refs.axisval.ej2Instances.max = 10;\n        } else {\n            this.$refs.axisval.ej2Instances.min = 0;\n            this.$refs.axisval.ej2Instances.max = 5000000;\n        }\n    },\n    changeSpark:function(args){\n         let element1 = (document.getElementById('spark'));\n        if (this.$refs.spark.ej2Instances.value === 'salespercentage') {\n            this.$refs.axisval.ej2Instances.min = 0;\n            this.$refs.axisval.ej2Instances.max = 10;\n        } else {\n            this.$refs.axisval.ej2Instances.min = 0;\n            this.$refs.axisval.ej2Instances.max = 5000000;\n        }\n        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.markerSettings.visible.length) ||\n            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.markerSettings.visible.length)) {\n            this.$refs.marker.ej2Instances.checked = true;\n        } else {\n            this.$refs.marker.ej2Instances.checked = false;\n        }\n        document.getElementById('marker').onchange = (e) => {\n            let boolean = (event.target).checked;\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            if (boolean) {\n                spark.markerSettings.visible = this.getVisible();\n            } else {\n                spark.markerSettings.visible = [];\n            }\n            spark.refresh();\n        };\n        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.dataLabelSettings.visible.length) ||\n            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.dataLabelSettings.visible.length)) {\n            this.$refs.datalabel.ej2Instances.checked = true;\n        } else {\n            this.$refs.datalabel.ej2Instances.checked = false;\n        }\n        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.enableRtl) ||\n            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.enableRtl)) {\n            this.$refs.rtl.ej2Instances.checked = true;\n        } else {\n            this.$refs.rtl.ej2Instances.checked = false;\n        }\n        document.getElementById('enableRTL').onchange = (e) => {\n            let boolean = (event.target).checked;\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            if (boolean) {\n                spark.enableRtl = true;\n            } else {\n                spark.enableRtl = false;\n            }\n            spark.refresh();\n        };\n        \n        let all = this.$refs.all.ej2Instances;\n        let negative = this.$refs.negative.ej2Instances;\n        let first = this.$refs.first.ej2Instances;\n        let last = this.$refs.last.ej2Instances;\n        let high = this.$refs.high.ej2Instances;\n        let low = this.$refs.low.ej2Instances;\n        let label = document.getElementById('datalabel');\n        let marker = document.getElementById('marker');\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (!this.$refs.marker.ej2Instances.checked && !this.$refs.datalabel.ej2Instances.checked) {\n            this.$refs.all.ej2Instances.checked = false;\n            this.$refs.negative.ej2Instances.checked = false;\n            this.$refs.first.ej2Instances.checked = false;\n            this.$refs.last.ej2Instances.checked = false;\n            this.$refs.high.ej2Instances.checked = false;\n            this.$refs.low.ej2Instances.checked = false;\n        }\n        if (this.$refs.marker.ej2Instances.checked) {\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            this.$refs.all.ej2Instances.checked = spark.markerSettings.visible.indexOf('All') > -1;\n            this.$refs.negative.ej2Instances.checked = spark.markerSettings.visible.indexOf('Negative') > -1;\n            this.$refs.first.ej2Instances.checked = spark.markerSettings.visible.indexOf('Start') > -1;\n            this.$refs.last.ej2Instances.checked = spark.markerSettings.visible.indexOf('End') > -1;\n            this.$refs.high.ej2Instances.checked = spark.markerSettings.visible.indexOf('High') > -1;\n            this.$refs.low.ej2Instances.checked = spark.markerSettings.visible.indexOf('Low') > -1;\n        }\n        if (this.$refs.datalabel.ej2Instances.checked) {\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            this.$refs.all.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('All') > -1;\n            this.$refs.negative.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('Negative') > -1;\n            this.$refs.first.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('Start') > -1;\n            this.$refs.last.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('End') > -1;\n            this.$refs.high.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('High') > -1;\n            this.$refs.low.ej2Instances.checked = spark.dataLabelSettings.visible.indexOf('Low') > -1;\n        }\n        document.getElementById('datalabel').onchange = (e) => {\n            let boolean = (event.target).checked;\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            if (boolean) {\n                spark.dataLabelSettings.visible = this.getVisible();\n            } else {\n                spark.dataLabelSettings.visible = [];\n            }\n            spark.refresh();\n        };\n        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.tooltipSettings.visible === true) ||\n            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.tooltipSettings.visible === true)) {\n            this.$refs.tooltip.ej2Instances.checked = true;\n        } else {\n            this.$refs.tooltip.ej2Instances.checked = false;\n        }\n        document.getElementById('tooltip').onchange = (e) => {\n            let boolean = (event.target).checked;\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            if (boolean) {\n                spark.tooltipSettings.visible = true;\n            } else {\n                spark.tooltipSettings.visible = false;\n            }\n            spark.refresh();\n        };\n        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.tooltipSettings.trackLineSettings.visible === true) ||\n            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.tooltipSettings.trackLineSettings.visible === true)) {\n            this.$refs.trackline.ej2Instances.checked = true;\n        } else {\n            this.$refs.trackline.ej2Instances.checked = false;\n        }\n        document.getElementById('trackline').onchange = (e) => {\n            let boolean = (event.target).checked;\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            if (boolean) {\n                spark.tooltipSettings.trackLineSettings.visible = true;\n            } else {\n                spark.tooltipSettings.trackLineSettings.visible = false;\n            }\n            spark.refresh();\n        };\n        if ((this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.axisSettings.lineSettings.visible === true) ||\n            (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.axisSettings.lineSettings.visible === true)) {\n            this.$refs.axisline.ej2Instances.checked = true;\n        } else {\n            this.$refs.axisline.ej2Instances.checked = false;\n        }\n        document.getElementById('axis1').onchange = (e) => {\n            let boolean = (event.target).checked;\n            let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n            if (boolean) {\n                spark.axisSettings.lineSettings.visible = true;\n            } else {\n                spark.axisSettings.lineSettings.visible = false;\n            }\n            spark.refresh();\n        };\n        if (this.$refs.spark.ej2Instances.value === 'salespercentage' && this.$refs.percentage.ej2Instances.axisSettings.value !== 0) {\n            this.$refs.axisval.ej2Instances.value =  this.$refs.percentage.ej2Instances.axisSettings.value;\n            this.$refs.axisval.ej2Instances.min = 0;\n            this.$refs.axisval.ej2Instances.max = 10;\n            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + this.$refs.percentage.ej2Instances.axisSettings.value;\n        }\n        if (this.$refs.spark.ej2Instances.value === 'salescount' && this.$refs.sales.ej2Instances.axisSettings.value !== 0) {\n            this.$refs.axisval.ej2Instances.value =  this.$refs.sales.ej2Instances.axisSettings.value;\n            this.$refs.axisval.ej2Instances.min = 0;\n            this.$refs.axisval.ej2Instances.max = 5000000;\n            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + this.$refs.sales.ej2Instances.axisSettings.value;\n        }\n        function changeAxisrange(e){\n                let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n                spark.axisSettings.value = e.value;\n                document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;\n                spark.refresh();\n        }\n        all.checked = !(negative.checked || high.checked || low.checked || first.checked || last.checked);\n        negative.disabled = high.disabled = low.disabled = first.disabled = last.disabled = all.checked;\n    },\n    changeAll:function(e){\n        let negative = this.$refs.negative.ej2Instances;\n        let first = this.$refs.first.ej2Instances;\n        let last = this.$refs.last.ej2Instances;\n        let high = this.$refs.high.ej2Instances;\n        let low = this.$refs.low.ej2Instances;\n        let checked = (event.target).checked;\n        negative.disabled = checked;\n        first.disabled = checked;\n        last.disabled = checked;\n        high.disabled = checked;\n        low.disabled = checked;\n        let marker = this.$refs.marker.ej2Instances;\n        let label =this.$refs.datalabel.ej2Instances;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n        spark.markerSettings.visible = (checked && marker.checked) ? ['All'] : (marker.checked) ? this.getVisible() : [];\n        spark.dataLabelSettings.visible = (checked && label.checked) ? ['All'] : (label.checked) ? this.getVisible() : [];\n        spark.refresh();\n    },\n    changeNegative:function(e){\n        this.processMarkerLabel(e);\n    },\n    processMarkerLabel:function(e) {\n        let checked = (event.target).checked;\n        let marker = this.$refs.marker.ej2Instances;\n        let label =this.$refs.datalabel.ej2Instances;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances;\n        if (marker.checked) {\n            spark.markerSettings.visible = this.getVisible();\n            spark.refresh();\n        }\n        if (label.checked) {\n            spark.dataLabelSettings.visible = this.getVisible();\n            spark.refresh();\n        } \n    },\n    getVisible:function(){\n        let all = this.$refs.all.ej2Instances;\n        let negative = this.$refs.negative.ej2Instances;\n        let first = this.$refs.first.ej2Instances;\n        let last = this.$refs.last.ej2Instances;\n        let high = this.$refs.high.ej2Instances;\n        let low = this.$refs.low.ej2Instances;\n        let visible = [];\n        if (all.checked) { return ['All']; }\n        if (negative.checked) { visible.push('Negative'); }\n        if (first.checked) { visible.push('Start'); }\n        if (last.checked) { visible.push('End'); }\n        if (high.checked) { visible.push('High'); }\n        if (low.checked) { visible.push('Low'); }\n        return visible;\n    },\n    changeMarker:function(e){\n        let element = (document.getElementById('spark'));\n        let boolean = (event.target).checked;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (boolean) {\n            spark.markerSettings.visible = this.getVisible();\n        } else {\n            spark.markerSettings.visible = [];\n        }\n        spark.refresh();\n    },\n    changeDatalabel:function(e){\n        let element = (document.getElementById('spark'));\n        let boolean = (event.target).checked;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (boolean) {\n            spark.dataLabelSettings.visible = this.getVisible();\n        } else {\n            spark.dataLabelSettings.visible = [];\n        }\n        spark.refresh();\n    },\n    changeTooltip:function(e){\n        let element = (document.getElementById('spark'));\n        let boolean = (event.target).checked;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (boolean) {\n            spark.tooltipSettings.visible = true;\n            spark.tooltipSettings.format = '${xval}: ${yval}';\n        } else {\n            spark.tooltipSettings.visible = false;\n        }\n        spark.refresh();\n    },\n    changeTrackline:function(e){\n        let element = (document.getElementById('spark'));\n        let boolean = (event.target).checked;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (boolean) {\n            spark.tooltipSettings.trackLineSettings.visible = true;\n            spark.tooltipSettings.trackLineSettings.color = 'red';\n            spark.tooltipSettings.trackLineSettings.width = 1;\n        } else {\n            spark.tooltipSettings.trackLineSettings.visible = false;\n        }\n        spark.refresh();\n    },\n    changeEnableRtl:function(e){\n        let element = (document.getElementById('enableRTL'));\n        let boolean = (event.target).checked;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (boolean) {\n            spark.enableRtl = true;\n        } else {\n           spark.enableRtl = false; \n        }\n        spark.refresh();\n    },\n    changeAxis:function(e){\n        let element = (document.getElementById('spark'));\n        let boolean = (event.target).checked;\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        if (boolean) {\n            spark.axisSettings.lineSettings.visible = true;\n            spark.axisSettings.lineSettings.color = 'red';\n            spark.axisSettings.lineSettings.width = 2;\n        } else {\n            spark.axisSettings.lineSettings.visible = false;\n        }\n        spark.refresh();\n    },\n    changeAxisrange:function(e){\n        let element = (document.getElementById('spark'));\n        let spark = this.$refs.spark.ej2Instances.value === 'salespercentage' ? this.$refs.percentage.ej2Instances : this.$refs.sales.ej2Instances ;\n        spark.axisSettings.value = e.value;\n            document.getElementById('axisval').innerHTML = 'Axis value: <span> ' + e.value;\n        spark.refresh();\n    }\n},\nprovide:{\n    sparkline:[_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SparklineTooltip\"]]\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/customization/App.vue?vue&type=template&id=9c4fd87a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/customization/App.vue?vue&type=template&id=9c4fd87a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"sprkline-custom-sample\"}},[_c('div',{staticClass:\"col-lg-8 control-section\"},[_c('div',{staticClass:\"row\",attrs:{\"id\":\"spark-container\"}},[_c('div',{staticClass:\"cols-sample-area\",attrs:{\"align\":\"center\"}},[_c('p',[_c('font',{attrs:{\"size\":\"4px\"}},[_vm._v(\" Worldwide car sales by brand - 2017\")])],1),_vm._v(\" \"),_c('table',{staticStyle:{\"width\":\"100%\"}},[_c('tr',[_c('td',{staticStyle:{\"width\":\"30%\"},attrs:{\"align\":\"center\"}},[_vm._v(\"Sales Percentage\")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"30%\"}},[_c('ejs-sparkline',{ref:\"percentage\",staticStyle:{\"width\":\"200px\",\"height\":\"200px\"},attrs:{\"id\":\"percentage\",\"load\":_vm.load,\"height\":_vm.height,\"width\":_vm.width,\"lineWidth\":_vm.lineWidth,\"type\":_vm.type,\"valueType\":_vm.valueType,\"dataSource\":_vm.dataSource,\"tooltipSettings\":_vm.tooltipSettings,\"axisSettings\":_vm.axisSettings,\"markerSettings\":_vm.markerSettings,\"xName\":\"xval\",\"yName\":\"yval\"}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"width\":\"30%\"},attrs:{\"align\":\"center\"}},[_vm._v(\"Sales Count\")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"30%\"}},[_c('ejs-sparkline',{ref:\"sales\",staticStyle:{\"width\":\"200px\",\"height\":\"200px\"},attrs:{\"id\":\"sales\",\"load\":_vm.load,\"height\":_vm.height,\"width\":_vm.width,\"lineWidth\":_vm.lineWidth,\"type\":_vm.type,\"valueType\":_vm.valueType,\"dataSource\":_vm.dataSource2,\"tooltipSettings\":_vm.tooltipSettings2,\"axisSettings\":_vm.axisSettings2,\"markerSettings\":_vm.markerSettings2,\"xName\":\"xval\",\"yName\":\"yval\"}})],1)])])])]),_vm._v(\" \"),_vm._m(0)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\"},[_vm._v(\"\\n               \"),_c('br'),_vm._v(\" \"),_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticClass:\"property-text\",staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Sparkline\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-dropdownlist',{ref:\"spark\",staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"spark\",\"dataSource\":_vm.sparkdata,\"fields\":_vm.sparkfields,\"value\":\"salespercentage\",\"index\":\"0\",\"change\":_vm.changeSpark}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Special Points\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('table',[_c('tr',[_c('td',[_vm._v(\"All\")]),_vm._v(\" \"),_c('td',[_c('ejs-checkbox',{ref:\"all\",attrs:{\"checked\":\"true\",\"id\":\"all\",\"change\":_vm.changeAll}})],1),_vm._v(\" \"),_c('td',{staticStyle:{\"padding\":\"5px\"}},[_vm._v(\"Negative\")]),_vm._v(\" \"),_c('td',[_c('ejs-checkbox',{ref:\"negative\",attrs:{\"disabled\":_vm.disabled,\"id\":\"negative\",\"change\":_vm.changeNegative}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"padding\":\"5px\"}},[_vm._v(\"First\")]),_vm._v(\" \"),_c('td',[_c('ejs-checkbox',{ref:\"first\",attrs:{\"disabled\":_vm.disabled,\"id\":\"first\",\"change\":_vm.changeNegative}})],1),_vm._v(\" \"),_c('td',{staticStyle:{\"padding\":\"5px\"}},[_vm._v(\"Last\")]),_vm._v(\" \"),_c('td',[_c('ejs-checkbox',{ref:\"last\",attrs:{\"disabled\":_vm.disabled,\"id\":\"last\",\"change\":_vm.changeNegative}})],1)]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"padding\":\"5px\"}},[_vm._v(\"High\")]),_vm._v(\" \"),_c('td',[_c('ejs-checkbox',{ref:\"high\",attrs:{\"disabled\":_vm.disabled,\"id\":\"high\",\"change\":_vm.changeNegative}})],1),_vm._v(\" \"),_c('td',{staticStyle:{\"padding\":\"5px\"}},[_vm._v(\"Low\")]),_vm._v(\" \"),_c('td',[_c('ejs-checkbox',{ref:\"low\",attrs:{\"disabled\":_vm.disabled,\"id\":\"low\",\"change\":_vm.changeNegative}})],1)])])])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Marker\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{ref:\"marker\",attrs:{\"id\":\"marker\",\"name\":\"marker\",\"change\":_vm.changeMarker}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Data Label\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{ref:\"datalabel\",attrs:{\"id\":\"datalabel\",\"name\":\"datalabel\",\"change\":_vm.changeDatalabel}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Enable RTL\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{ref:\"rtl\",attrs:{\"id\":\"enableRTL\",\"name\":\"enableRTL\",\"change\":_vm.changeEnableRtl}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Tooltip\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{ref:\"tooltip\",attrs:{\"id\":\"tooltip\",\"name\":\"tooltip\",\"change\":_vm.changeTooltip}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Track Line\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{ref:\"trackline\",attrs:{\"name\":\"trackline\",\"id\":\"trackline\",\"change\":_vm.changeTrackline}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"30px\"}},[_c('td',{staticStyle:{\"width\":\"50%\"}},[_vm._v(\"\\n                    Axis Line\\n                \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{ref:\"axisline\",attrs:{\"id\":\"axis1\",\"name\":\"axis\",\"change\":_vm.changeAxis}})],1)]),_vm._v(\" \"),_c('tr',[_vm._m(1),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-slider',{ref:\"axisval\",attrs:{\"id\":\"axis\",\"value\":_vm.value,\"type\":_vm.rangetype,\"change\":_vm.changeAxisrange,\"max\":\"100\",\"min\":\"0\"}})],1)])])])])]),_vm._v(\" \"),_vm._m(2),_vm._v(\" \"),_vm._m(3)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{\"float\":\"right\",\"margin-right\":\"10px\"}},[_vm._v(\"Source:\\n    \"),_c('a',{attrs:{\"href\":\" http://carsalesbase.com/global-car-sales-2017\",\"target\":\"_blank\"}},[_vm._v(\"carsalesbase.com\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{attrs:{\"id\":\"axisval\"}},[_vm._v(\"\\n                    Axis Value\"),_c('span',[_vm._v(\"   0\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample depicts the various customization options available in sparklines.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see various customization options available in sparklines. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/sparkline/customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });