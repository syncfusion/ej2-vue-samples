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
/******/ 		"spreadsheet/data-validation/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/data-validation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/data-validation/App.vue":
/*!*****************************************************!*\
  !*** ./Samples/spreadsheet/data-validation/App.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_fb520532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=fb520532& */ \"./Samples/spreadsheet/data-validation/App.vue?vue&type=template&id=fb520532&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/data-validation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_fb520532___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_fb520532___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/data-validation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/data-validation/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./Samples/spreadsheet/data-validation/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/data-validation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/data-validation/App.vue?vue&type=template&id=fb520532&":
/*!************************************************************************************!*\
  !*** ./Samples/spreadsheet/data-validation/App.vue?vue&type=template&id=fb520532& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fb520532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=fb520532& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/data-validation/App.vue?vue&type=template&id=fb520532&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fb520532___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_fb520532___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/data-validation/data-validation-data.json":
/*!***********************************************************************!*\
  !*** ./Samples/spreadsheet/data-validation/data-validation-data.json ***!
  \***********************************************************************/
/*! exports provided: grossPay, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"grossPay\\\":[{\\\"EMPLOYEE ID\\\":\\\"1001\\\",\\\"EMPLOYEE NAME\\\":\\\"Vin Disel\\\",\\\"DATE\\\":\\\"4/5/2021\\\",\\\"WEEKDAY\\\":\\\"Mon\\\",\\\"TIME IN\\\":\\\"8:00 AM\\\",\\\"TIME OUT\\\":\\\"10:00 PM\\\",\\\"HOURS WORKED\\\":\\\"14\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G4*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H4 + ((G4-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1002\\\",\\\"EMPLOYEE NAME\\\":\\\"Steve\\\",\\\"DATE\\\":\\\"4/6/2021\\\",\\\"WEEKDAY\\\":\\\"Tue\\\",\\\"TIME IN\\\":\\\"8:00 AM\\\",\\\"TIME OUT\\\":\\\"6:00 PM\\\",\\\"HOURS WORKED\\\":\\\"10\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G5*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H5 + ((G5-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1003\\\",\\\"EMPLOYEE NAME\\\":\\\"Paul Waulker\\\",\\\"DATE\\\":\\\"4/6/2021\\\",\\\"WEEKDAY\\\":\\\"Tue\\\",\\\"TIME IN\\\":\\\"11:00 AM\\\",\\\"TIME OUT\\\":\\\"4:00 PM\\\",\\\"HOURS WORKED\\\":\\\"9\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G6*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H6 + ((G6-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1004\\\",\\\"EMPLOYEE NAME\\\":\\\"John\\\",\\\"DATE\\\":\\\"4/8/2021\\\",\\\"WEEKDAY\\\":\\\"Thu\\\",\\\"TIME IN\\\":\\\"8:00 AM\\\",\\\"TIME OUT\\\":\\\"4:00 PM\\\",\\\"HOURS WORKED\\\":\\\"8\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G7*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H7 + ((G7-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1005\\\",\\\"EMPLOYEE NAME\\\":\\\"Sam\\\",\\\"DATE\\\":\\\"4/9/2021\\\",\\\"WEEKDAY\\\":\\\"Fri\\\",\\\"TIME IN\\\":\\\"7:00 AM\\\",\\\"TIME OUT\\\":\\\"6:00 PM\\\",\\\"HOURS WORKED\\\":\\\"11\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G8*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H8 + ((G8-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1006\\\",\\\"EMPLOYEE NAME\\\":\\\"Chistoper\\\",\\\"DATE\\\":\\\"4/12/2021\\\",\\\"WEEKDAY\\\":\\\"Mon\\\",\\\"TIME IN\\\":\\\"10:00 AM\\\",\\\"TIME OUT\\\":\\\"6:00 PM\\\",\\\"HOURS WORKED\\\":\\\"8\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G9*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H9 + ((G9-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1007\\\",\\\"EMPLOYEE NAME\\\":\\\"Adrew\\\",\\\"DATE\\\":\\\"4/13/2021\\\",\\\"WEEKDAY\\\":\\\"Tue\\\",\\\"TIME IN\\\":\\\"10:00 AM\\\",\\\"TIME OUT\\\":\\\"7:00 PM\\\",\\\"HOURS WORKED\\\":\\\"9\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G10*30\\\",\\\"Gross Pay With Overtime(15/hour)\\\":\\\"=Sum(H10 + ((G10-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1004\\\",\\\"EMPLOYEE NAME\\\":\\\"John\\\",\\\"DATE\\\":\\\"4/14/2021\\\",\\\"WEEKDAY\\\":\\\"Wed\\\",\\\"TIME IN\\\":\\\"8:00 AM\\\",\\\"TIME OUT\\\":\\\"4:00 PM\\\",\\\"HOURS WORKED\\\":\\\"8\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G11*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H11 + ((G11-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1009\\\",\\\"EMPLOYEE NAME\\\":\\\"Bravo\\\",\\\"DATE\\\":\\\"4/14/2021\\\",\\\"WEEKDAY\\\":\\\"Wed\\\",\\\"TIME IN\\\":\\\"11:00 AM\\\",\\\"TIME OUT\\\":\\\"8:00 PM\\\",\\\"HOURS WORKED\\\":\\\"9\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G12*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H12 + ((G12-8)*15))\\\"},{\\\"EMPLOYEE ID\\\":\\\"1002\\\",\\\"EMPLOYEE NAME\\\":\\\"Steve\\\",\\\"DATE\\\":\\\"4/15/2021\\\",\\\"WEEKDAY\\\":\\\"Thu\\\",\\\"TIME IN\\\":\\\"9:00 AM\\\",\\\"TIME OUT\\\":\\\"8:00 PM\\\",\\\"HOURS WORKED\\\":\\\"11\\\",\\\"BASIC SALARY (30/hour)\\\":\\\"=G13*30\\\",\\\"GROSS PAY with OVERTIME(15/hour)\\\":\\\"=Sum(H13 + ((G13-8)*15))\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/data-validation-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/data-validation/main.js":
/*!*****************************************************!*\
  !*** ./Samples/spreadsheet/data-validation/main.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/data-validation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-A26DWTLFH4VRHQ7JAANG3WRLB5DDK7REA3J7H7OEPPQEHTFQKZUA/Samples/spreadsheet/data-validation/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/data-validation/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/data-validation/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _data_validation_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-validation-data.json */ \"./Samples/spreadsheet/data-validation/data-validation-data.json\");\nvar _data_validation_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data-validation-data.json */ \"./Samples/spreadsheet/data-validation/data-validation-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n        dataSource: _data_validation_data_json__WEBPACK_IMPORTED_MODULE_2__[\"grossPay\"],\n        cells0: [{  value: 'Gross Pay Calculation', style:{ fontSize: \"20pt\", fontWeight : \"bold\", textAlign: \"center\", backgroundColor: '#B3FFB3', verticalAlign: 'middle'} }],\n        cells12: [{ index: 7, value: 'Total Gross', style: { border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight:'bold'}},\n            {\n                index: 8, formula: '=Sum(I4:I13)', format:'$#,##0.00', style: {border: '1px solid #A6A6A6', textAlign: 'center', verticalAlign: 'middle', fontWeight:'bold'}\n            }]\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.merge('A1:I2');\n        spreadsheet.setBorder({ border: '1px solid #A6A6A6' }, \"A1:I13\");\n        spreadsheet.cellFormat({ textAlign: 'center', verticalAlign: 'middle'}, 'A3:I13');\n        spreadsheet.cellFormat({ backgroundColor: '#B3FFB3', fontWeight : \"bold\"}, 'A3:I3');\n        spreadsheet.numberFormat('$#,##0.00', 'H4:I13');\n        spreadsheet.wrap('H3:I3');\n        //Add Data validation to range.\n        spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '9', ignoreBlank: false }, 'G4:G13');\n        spreadsheet.addDataValidation({ type: 'TextLength', operator: 'GreaterThan', value1: '3', ignoreBlank: false }, 'B4:B13');\n        spreadsheet.addDataValidation({ type: 'Time', operator: 'GreaterThan', value1: '8:00:00 AM', ignoreBlank: false  }, 'E4:E13');\n        spreadsheet.addDataValidation({ type: 'Time', operator: 'LessThan', value1: '6:00:00 PM', ignoreBlank: false  }, 'F4:F13');\n        spreadsheet.addDataValidation({ type: 'List', value1: 'Mon, Tue, Wed, Thu, Fri', ignoreBlank: false  }, 'D4:D13');\n        spreadsheet.addDataValidation({ type: 'WholeNumber', operator: 'LessThan', value1: '=H5', ignoreBlank: false }, 'I4:I13');\n        //Highlight Invalid Data.\n        spreadsheet.addInvalidHighlight('G4:G13');\n        spreadsheet.addInvalidHighlight('I4:I13');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/data-validation/App.vue?vue&type=template&id=fb520532&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/data-validation/App.vue?vue&type=template&id=fb520532& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"created\":_vm.created}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":\"Gross Pay\"}},[_c('e-ranges',[_c('e-range',{attrs:{\"dataSource\":_vm.dataSource,\"startCell\":\"A3\"}})],1),_vm._v(\" \"),_c('e-rows',[_c('e-row',{attrs:{\"cells\":_vm.cells0}}),_vm._v(\" \"),_c('e-row',{attrs:{\"index\":13,\"cells\":_vm.cells12}})],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":88}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":120}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":106}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":98}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":98}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":130}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample explains the Data Validation feature with the gross pay calculation as an example. It is used to restrict the data that the user enters into a cell. To clear the applied validation, click the \"),_c('code',[_vm._v(\"Data Validation\")]),_vm._v(\" button in the Data tab and \"),_c('code',[_vm._v(\"Clear Validation\")]),_vm._v(\" option. You can also highlight the invalid data by selecting \"),_c('code',[_vm._v(\"Highlight Invalid Data\")]),_vm._v(\" option.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('ul',[_c('li',[_vm._v(\"\\n            This feature allows you to apply validation to a cell or range of cells based on the conditions required. You can enable or disable data validation by using the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#allowdatavalidation\"}},[_vm._v(\"\\n                allowDataValidation\")]),_vm._v(\" property.\\n        \")]),_vm._v(\" \"),_c('li',[_vm._v(\"\\n            In this sample, we have applied data validation for List, String, Number, Date and Time by using the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet#adddatavalidation\"}},[_vm._v(\"\\n                addDataValidation\")]),_vm._v(\" method with \"),_c('code',[_vm._v(\"ValidationModel\")]),_vm._v(\" as argument.\\n        \")]),_vm._v(\" \"),_c('li',[_vm._v(\"\\n            In the Employee Name column, we have used \"),_c('code',[_vm._v(\"TextLength\")]),_vm._v(\" validation to provide proper name with more than 3 text length.\\n            In time in and time out column, we have provided \"),_c('code',[_vm._v(\"Time\")]),_vm._v(\" validation for working hours between 8.00 AM to 6.00 PM. In the weekdays column, we have used \"),_c('code',[_vm._v(\"List\")]),_vm._v(\" validation for weekdays (Monday to Friday).\\n        \")]),_vm._v(\" \"),_c('li',[_vm._v(\"\\n            In the hours worked column, we have used \"),_c('code',[_vm._v(\"WholeNumber\")]),_vm._v(\" validation to find out overtime calculation(i.e more than 8 hours). And also, we used the \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/spreadsheet/#addinvalidhighlight\"}},[_vm._v(\"addInvalidHighlight\")]),_vm._v(\" to highlight the overtime hours of the employee.\\n        \")]),_vm._v(\" \"),_c('li',[_vm._v(\"\\n            In the gross pay with overtime column, we have used \"),_c('code',[_vm._v(\"WholeNumber\")]),_vm._v(\" validation.\\n            In this validation, we have used the input value as the cell reference. It helps in changing the criteria dynamically.\\n        \")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        More information about the Data Validation can be found in this\\n        \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/cell-range/#data-validation\"}},[_vm._v(\"\\n            documentation\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/data-validation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });