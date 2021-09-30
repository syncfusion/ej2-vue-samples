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
/******/ 		"sparkline/axis-types/main": 0
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
/******/ 	deferredModules.push(["./Samples/sparkline/axis-types/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/sparkline/axis-types/App.vue":
/*!**********************************************!*\
  !*** ./Samples/sparkline/axis-types/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_346dd19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=346dd19e&scoped=true& */ \"./Samples/sparkline/axis-types/App.vue?vue&type=template&id=346dd19e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/sparkline/axis-types/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_346dd19e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css& */ \"./Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_346dd19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_346dd19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"346dd19e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/sparkline/axis-types/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/axis-types/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/sparkline/axis-types/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/axis-types/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_346dd19e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_346dd19e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_346dd19e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_346dd19e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_346dd19e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/axis-types/App.vue?vue&type=template&id=346dd19e&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/sparkline/axis-types/App.vue?vue&type=template&id=346dd19e&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_346dd19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=346dd19e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/axis-types/App.vue?vue&type=template&id=346dd19e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_346dd19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_346dd19e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?");

/***/ }),

/***/ "./Samples/sparkline/axis-types/axistypes.ts":
/*!***************************************************!*\
  !*** ./Samples/sparkline/axis-types/axistypes.ts ***!
  \***************************************************/
/*! exports provided: data, data2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data\", function() { return data; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"data2\", function() { return data2; });\n// tslint:disable\nvar data = [\n    { xDate: new Date(2018, 0, 1), x: 0, yval: 4 },\n    { xDate: new Date(2018, 0, 2), x: 1, yval: 4.5 },\n    { xDate: new Date(2018, 0, 3), x: 2, yval: 8 },\n    { xDate: new Date(2018, 0, 4), x: 3, yval: 7 },\n    { xDate: new Date(2018, 0, 5), x: 4, yval: 6 },\n    { xDate: new Date(2018, 0, 8), x: 5, yval: 8 },\n    { xDate: new Date(2018, 0, 9), x: 6, yval: 8 },\n    { xDate: new Date(2018, 0, 10), x: 7, yval: 6.5 },\n    { xDate: new Date(2018, 0, 11), x: 8, yval: 4 },\n    { xDate: new Date(2018, 0, 12), x: 9, yval: 5.5 },\n    { xDate: new Date(2018, 0, 15), x: 10, yval: 8 },\n    { xDate: new Date(2018, 0, 16), x: 11, yval: 6 },\n    { xDate: new Date(2018, 0, 17), x: 12, yval: 6.5 },\n    { xDate: new Date(2018, 0, 18), x: 13, yval: 7.5 },\n    { xDate: new Date(2018, 0, 19), x: 14, yval: 7.5 },\n    { xDate: new Date(2018, 0, 22), x: 15, yval: 4 },\n    { xDate: new Date(2018, 0, 23), x: 16, yval: 8 },\n    { xDate: new Date(2018, 0, 24), x: 17, yval: 6 },\n    { xDate: new Date(2018, 0, 25), x: 18, yval: 7.5 },\n    { xDate: new Date(2018, 0, 26), x: 19, yval: 4.5 },\n    { xDate: new Date(2018, 0, 29), x: 20, yval: 6 },\n    { xDate: new Date(2018, 0, 30), x: 21, yval: 5 },\n    { xDate: new Date(2018, 0, 31), x: 22, yval: 7 }\n];\nvar data2 = [\n    { x: 0, xval: 'Robert', yval: 60 },\n    { x: 1, xval: 'Andrew', yval: 65 },\n    { x: 2, xval: 'Suyama', yval: 70 },\n    { x: 3, xval: 'Michael', yval: 80 },\n    { x: 4, xval: 'Janet', yval: 55 },\n    { x: 5, xval: 'Davolio', yval: 90 },\n    { x: 6, xval: 'Fuller', yval: 75 },\n    { x: 7, xval: 'Nancy', yval: 85 },\n    { x: 8, xval: 'Margaret', yval: 77 },\n    { x: 9, xval: 'Steven', yval: 68 },\n    { x: 10, xval: 'Laura', yval: 96 },\n    { x: 11, xval: 'Elizabeth', yval: 57 }\n];\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/axistypes.ts?");

/***/ }),

/***/ "./Samples/sparkline/axis-types/main.js":
/*!**********************************************!*\
  !*** ./Samples/sparkline/axis-types/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/sparkline/axis-types/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\ntd[data-v-346dd19e]{\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\";\\n    font-size: 14px;\\n    font-weight: 500;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-ERWTBVX257KMHA3FGSXKW75QILS7TS6MJMFB2ZIYAQHFLVICNAZQ/Samples/sparkline/axis-types/App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,4EAA4E;IAC5E,gBAAgB;IAChB,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&id=346dd19e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\ntd[data-v-346dd19e]{\\n    font-family: \\\"Roboto\\\", \\\"Segoe UI\\\", \\\"GeezaPro\\\", \\\"DejaVu Serif\\\", \\\"sans-serif\\\";\\n    font-size: 14px;\\n    font-weight: 500;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/axis-types/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/axis-types/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _axistypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./axistypes */ \"./Samples/sparkline/axis-types/axistypes.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SparklinePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{\n        height: '100px',\n        width: '170px',\n        lineWidth: 1,\n        fill: '#3C78EF',\n        type: 'Column',\n        valueType: 'DateTime',\n        dataSource: _axistypes__WEBPACK_IMPORTED_MODULE_2__[\"data\"],\n        tooltipSettings: {\n            visible: true,\n            format: '${xDate} : ${yval}hrs'\n        },\n        fill2: '#3C78EF',\n        valueType2: 'Category',\n        dataSource2: _axistypes__WEBPACK_IMPORTED_MODULE_2__[\"data2\"],\n        tooltipSettings2: {\n            visible: true,\n            format: '${xval} : ${yval}%'\n        },\n        fill3: '#3C78EF',\n        valueType3: 'Numeric',\n        dataSource3: [\n             { x: 1, xval: 2010, yval: 190 },\n            { x: 2, xval: 2011, yval: 165 },\n            { x: 3, xval: 2012, yval: 158 },\n            { x: 4, xval: 2013, yval: 175 },\n            { x: 5, xval: 2014, yval: 200 },\n            { x: 6, xval: 2015, yval: 180 },\n            { x: 7, xval: 2016, yval: 210 }\n        ],\n        tooltipSettings3: {\n            visible: true,\n            format: '${x} : $${yval}'\n        }\n}\n},\nprovide:{\n    sparkline:[_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SparklineTooltip\"]]\n},\n/* custom code start */\nmethods:{\n    load:function(args){\n        let theme = location.hash.split('/')[1];\n        theme = theme ? theme : 'Material';\n        args.sparkline.theme = (theme.charAt(0).toUpperCase() + theme.slice(1));\n    }\n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/sparkline/axis-types/App.vue?vue&type=template&id=346dd19e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/sparkline/axis-types/App.vue?vue&type=template&id=346dd19e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\"div\", { staticClass: \"row\", attrs: { id: \"spark-container\" } }, [\n        _c(\"div\", { staticClass: \"cols-sample-area\" }, [\n          _c(\"table\", { staticStyle: { width: \"100%\" } }, [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { padding: \"10px\" } },\n                [\n                  _c(\"ejs-sparkline\", {\n                    staticStyle: { width: \"170px\", height: \"100px\" },\n                    attrs: {\n                      id: \"datetime\",\n                      load: _vm.load,\n                      height: _vm.height,\n                      width: _vm.width,\n                      lineWidth: _vm.lineWidth,\n                      type: _vm.type,\n                      valueType: _vm.valueType,\n                      fill: _vm.fill,\n                      dataSource: _vm.dataSource,\n                      tooltipSettings: _vm.tooltipSettings,\n                      xName: \"xDate\",\n                      yName: \"yval\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { padding: \"10px\" } },\n                [\n                  _c(\"ejs-sparkline\", {\n                    staticStyle: { width: \"170px\", height: \"100px\" },\n                    attrs: {\n                      id: \"category\",\n                      load: _vm.load,\n                      height: _vm.height,\n                      width: _vm.width,\n                      lineWidth: _vm.lineWidth,\n                      type: _vm.type,\n                      valueType: _vm.valueType2,\n                      fill: _vm.fill2,\n                      dataSource: _vm.dataSource2,\n                      tooltipSettings: _vm.tooltipSettings2,\n                      xName: \"xval\",\n                      yName: \"yval\"\n                    }\n                  })\n                ],\n                1\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { padding: \"10px\" } },\n                [\n                  _c(\"ejs-sparkline\", {\n                    staticStyle: { width: \"170px\", height: \"100px\" },\n                    attrs: {\n                      id: \"numeric\",\n                      load: _vm.load,\n                      height: _vm.height,\n                      width: _vm.width,\n                      lineWidth: _vm.lineWidth,\n                      type: _vm.type,\n                      valueType: _vm.valueType3,\n                      fill: _vm.fill3,\n                      dataSource: _vm.dataSource3,\n                      tooltipSettings: _vm.tooltipSettings3,\n                      xName: \"x\",\n                      yName: \"yval\"\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { attrs: { align: \"center\" } }, [\n      _c(\"div\", [_vm._v(\"Mean working hours for a month\")]),\n      _vm._v(\" \"),\n      _c(\"div\", [_c(\"i\", [_vm._v(\"(DateTime axis)\")])])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { attrs: { align: \"center\" } }, [\n      _c(\"div\", [_vm._v(\"Percentage of the students in a class\")]),\n      _vm._v(\" \"),\n      _c(\"div\", [_c(\"i\", [_vm._v(\"(Category axis)\")])])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { attrs: { align: \"center\" } }, [\n      _c(\"div\", [_vm._v(\"Expenditure details of various trips\")]),\n      _vm._v(\" \"),\n      _c(\"div\", [_c(\"i\", [_vm._v(\"(Numeric axis)\")])])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample depicts the various types of axis value types available in sparkline.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see the sparklines with various axis value types such as date-time, category, and numeric. Tooltip is enabled in this example. To see the tooltip in action, hover the mouse over the data points or tap on a data point in touch enabled devices.\\n\\t\"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/sparkline/axis-types/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });