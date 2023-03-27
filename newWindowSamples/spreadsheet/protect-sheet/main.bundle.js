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
/******/ 		"spreadsheet/protect-sheet/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/protect-sheet/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/protect-sheet/App.vue":
/*!***************************************************!*\
  !*** ./Samples/spreadsheet/protect-sheet/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f15d71e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f15d71e8& */ \"./Samples/spreadsheet/protect-sheet/App.vue?vue&type=template&id=f15d71e8&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/protect-sheet/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_f15d71e8_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=f15d71e8&lang=css& */ \"./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f15d71e8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f15d71e8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/protect-sheet/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/protect-sheet/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/spreadsheet/protect-sheet/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&":
/*!************************************************************************************************!*\
  !*** ./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f15d71e8_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f15d71e8&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f15d71e8_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f15d71e8_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f15d71e8_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f15d71e8_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/protect-sheet/App.vue?vue&type=template&id=f15d71e8&":
/*!**********************************************************************************!*\
  !*** ./Samples/spreadsheet/protect-sheet/App.vue?vue&type=template&id=f15d71e8& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f15d71e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f15d71e8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=template&id=f15d71e8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f15d71e8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f15d71e8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/protect-sheet/main.js":
/*!***************************************************!*\
  !*** ./Samples/spreadsheet/protect-sheet/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/protect-sheet/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/main.js?");

/***/ }),

/***/ "./Samples/spreadsheet/protect-sheet/protect-sheet-data.json":
/*!*******************************************************************!*\
  !*** ./Samples/spreadsheet/protect-sheet/protect-sheet-data.json ***!
  \*******************************************************************/
/*! exports provided: protectSheet, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"protectSheet\\\":[{\\\"Tenure\\\":\\\"1\\\",\\\"Payment Date\\\":\\\"03-04-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8032.18\\\",\\\"Interest\\\":\\\"666.67\\\",\\\"Balance\\\":\\\"91967.82\\\"},{\\\"Tenure\\\":\\\"2\\\",\\\"Payment Date\\\":\\\"03-05-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8085.72\\\",\\\"Interest\\\":\\\"613.12\\\",\\\"Balance\\\":\\\"83882.10\\\"},{\\\"Tenure\\\":\\\"3\\\",\\\"Payment Date\\\":\\\"03-06-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8139.63\\\",\\\"Interest\\\":\\\"559.21\\\",\\\"Balance\\\":\\\"75742.47\\\"},{\\\"Tenure\\\":\\\"4\\\",\\\"Payment Date\\\":\\\"03-07-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8193.89\\\",\\\"Interest\\\":\\\"504.95\\\",\\\"Balance\\\":\\\"67548.58\\\"},{\\\"Tenure\\\":\\\"5\\\",\\\"Payment Date\\\":\\\"03-08-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8248.52\\\",\\\"Interest\\\":\\\"450.32\\\",\\\"Balance\\\":\\\"59300.06\\\"},{\\\"Tenure\\\":\\\"6\\\",\\\"Payment Date\\\":\\\"03-09-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8303.51\\\",\\\"Interest\\\":\\\"395.33\\\",\\\"Balance\\\":\\\"50996.55\\\"},{\\\"Tenure\\\":\\\"7\\\",\\\"Payment Date\\\":\\\"03-10-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8358.87\\\",\\\"Interest\\\":\\\"339.98\\\",\\\"Balance\\\":\\\"42637.68\\\"},{\\\"Tenure\\\":\\\"8\\\",\\\"Payment Date\\\":\\\"03-11-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8414.59\\\",\\\"Interest\\\":\\\"284.25\\\",\\\"Balance\\\":\\\"34223.09\\\"},{\\\"Tenure\\\":\\\"9\\\",\\\"Payment Date\\\":\\\"03-12-2020\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8470.69\\\",\\\"Interest\\\":\\\"228.15\\\",\\\"Balance\\\":\\\"25752.40\\\"},{\\\"Tenure\\\":\\\"10\\\",\\\"Payment Date\\\":\\\"03-01-2021\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8527.16\\\",\\\"Interest\\\":\\\"171.68\\\",\\\"Balance\\\":\\\"17225.24\\\"},{\\\"Tenure\\\":\\\"11\\\",\\\"Payment Date\\\":\\\"03-02-2021\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8584.01\\\",\\\"Interest\\\":\\\"114.83\\\",\\\"Balance\\\":\\\"8641.23\\\"},{\\\"Tenure\\\":\\\"12\\\",\\\"Payment Date\\\":\\\"03-03-2021\\\",\\\"EMI\\\":\\\"8698.84\\\",\\\"Prinicpal\\\":\\\"8641.23\\\",\\\"Interest\\\":\\\"57.61\\\",\\\"Balance\\\":\\\"0.00\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/protect-sheet-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-protect-sheet {\\n      height: 550px;\\n}\\n.control-section .control-wrapper {\\n        height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n        display: inherit;\\n}\\n.ej2-new .control-section {\\n        height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content{\\n        margin-left: 0 !important;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/sheet-vue-samples_release_21.1.1/Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&\"],\"names\":[],\"mappings\":\";AACA;MACM,cAAc;CACnB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,0BAA0B;CACjC\",\"file\":\"App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-protect-sheet {\\n      height: 550px;\\n}\\n.control-section .control-wrapper {\\n        height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n        display: inherit;\\n}\\n.ej2-new .control-section {\\n        height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content{\\n        margin-left: 0 !important;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _protect_sheet_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protect-sheet-data.json */ \"./Samples/spreadsheet/protect-sheet/protect-sheet-data.json\");\nvar _protect_sheet_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./protect-sheet-data.json */ \"./Samples/spreadsheet/protect-sheet/protect-sheet-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n        dataSource: _protect_sheet_data_json__WEBPACK_IMPORTED_MODULE_2__[\"protectSheet\"],\n        openUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/open',\n        saveUrl: 'https://services.syncfusion.com/vue/production/api/spreadsheet/save'\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'EMI Schedule!A1:F1');\n        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'EMI Calculator!B1');\n        spreadsheet.numberFormat('$#,##0.00', 'EMI Schedule!C2:F13');\n    },\n    beforeCellRender: function(args) {\n        var spreadsheet = this.$refs.spreadsheet;\n        if (args.address === \"B1\" && spreadsheet.ej2Instances.sheets[spreadsheet.ej2Instances.activeSheetIndex].name === 'EMI Calculator') {\n            (args.element).colSpan = 2;\n        }\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=template&id=f15d71e8&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=template&id=f15d71e8& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { id: \"spreadsheet-protect-sheet\" } },\n      [\n        _c(\n          \"ejs-spreadsheet\",\n          {\n            ref: \"spreadsheet\",\n            attrs: {\n              password: \"spreadsheet\",\n              openUrl: _vm.openUrl,\n              saveUrl: _vm.saveUrl,\n              allowOpen: false,\n              allowSave: false,\n              created: _vm.created,\n              beforeCellRender: _vm.beforeCellRender,\n            },\n          },\n          [\n            _c(\n              \"e-sheets\",\n              [\n                _c(\n                  \"e-sheet\",\n                  { attrs: { isProtected: \"true\", name: \"EMI Calculator\" } },\n                  [\n                    _c(\n                      \"e-rows\",\n                      [\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: \"1\",\n                                    value: \"Home Loan Calculator\",\n                                  },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: { index: \"1\", value: \"Loan Amount:\" },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    value: \"100000\",\n                                    format: \"$#,##0.00\",\n                                  },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: \"1\",\n                                    value: \"Interest Rate:\",\n                                  },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: { value: \"0.08\", format: \"$#,##0.00\" },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: \"1\",\n                                    value: \"Periods (terms in year):\",\n                                  },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", { attrs: { value: \"1\" } }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: { index: \"1\", value: \"Start Date:\" },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: { value: \"03-03-2020\" },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: { index: \"1\", value: \"Loan EMI:\" },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    value: \"8698.84\",\n                                    format: \"$#,##0.00\",\n                                  },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: \"1\",\n                                    value: \"Number of Payments:\",\n                                  },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", { attrs: { value: \"12\" } }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          { attrs: { \"height:45\": \"\" } },\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: \"1\",\n                                    value: \"Total Repayment Amount:\",\n                                  },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    value: \"104386.11\",\n                                    format: \"$#,##0.00\",\n                                  },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: \"1\",\n                                    value: \"Total Interest Amount:\",\n                                  },\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    value: \"4386.11\",\n                                    format: \"$#,##0.00\",\n                                  },\n                                }),\n                              ],\n                              1\n                            ),\n                          ],\n                          1\n                        ),\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-columns\",\n                      [\n                        _c(\"e-column\", { attrs: { index: \"1\", width: 190 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 100 } }),\n                      ],\n                      1\n                    ),\n                  ],\n                  1\n                ),\n                _vm._v(\" \"),\n                _c(\n                  \"e-sheet\",\n                  { attrs: { isProtected: \"true\", name: \"EMI Schedule\" } },\n                  [\n                    _c(\n                      \"e-ranges\",\n                      [\n                        _c(\"e-range\", {\n                          attrs: { dataSource: _vm.dataSource },\n                        }),\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-columns\",\n                      [\n                        _c(\"e-column\", { attrs: { index: \"1\", width: 110 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 85 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 85 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 80 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: 90 } }),\n                      ],\n                      1\n                    ),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates protect sheet and protect workbook with EMI calculation scenario as an example. To unprotect the sheet, click the unprotect sheet button in the Data tab. Meanwhile, to unprotect the workbook, click the unprotect workbook button in the data tab and provide the password as \"\n        ),\n        _c(\"code\", [_vm._v(\"spreadsheet\")]),\n        _vm._v(\" in the dialog box.\\n  \"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      Protect sheet helps you to prevent the users from modifying the data in the spreadsheet. Protect workbook helps you to protect the workbook with a password. In this demo, the `EMI Schedule` sheet is locked using \"\n        ),\n        _c(\"code\", [_vm._v(\"isProtected\")]),\n        _vm._v(\n          \" property inside the `Sheet` property and protect the workbook with a password using \"\n        ),\n        _c(\"code\", [_vm._v(\"password\")]),\n        _vm._v(\" property.\\n  \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information about protection feature can be found in this\\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/spreadsheet/protect-sheet/\",\n            },\n          },\n          [_vm._v(\"\\n          documentation\")]\n        ),\n        _vm._v(\" section.\\n  \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f15d71e8&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/protect-sheet/App.vue?vue&type=style&index=0&id=f15d71e8&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"cf051ab0\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/spreadsheet/protect-sheet/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });