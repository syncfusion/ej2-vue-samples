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
/******/ 		"range-navigator/filter/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-navigator/filter/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-navigator/filter/App.vue":
/*!************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_6df6a7b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=6df6a7b4&scoped=true& */ \"./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css& */ \"./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_6df6a7b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_6df6a7b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"6df6a7b4\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-navigator/filter/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_6df6a7b4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6df6a7b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=6df6a7b4&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6df6a7b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_6df6a7b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/filter/data-source.ts":
/*!*******************************************************!*\
  !*** ./Samples/range-navigator/filter/data-source.ts ***!
  \*******************************************************/
/*! exports provided: employeeData, exportData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"employeeData\", function() { return employeeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"exportData\", function() { return exportData; });\n/**\n * Chart datasource\n */\nvar employeeData = [{\n        'EmployeeID': 1,\n        'yValue': 2,\n        'FirstName': 'Nancy',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 0, 1),\n    },\n    {\n        'EmployeeID': 2,\n        'yValue': 5,\n        'FirstName': 'Andrew',\n        'Title': 'Vice President, Sales',\n        'HireDate': new Date(1992, 1, 1),\n    },\n    {\n        'EmployeeID': 3,\n        'yValue': 8,\n        'FirstName': 'Janet',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 2, 1),\n    },\n    {\n        'EmployeeID': 4,\n        'yValue': 4,\n        'FirstName': 'Margaret',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 3, 1),\n    },\n    {\n        'EmployeeID': 5,\n        'yValue': 7,\n        'FirstName': 'Steven',\n        'Title': 'Sales Manager',\n        'HireDate': new Date(1992, 4, 1),\n    },\n    {\n        'EmployeeID': 6,\n        'yValue': 9,\n        'FirstName': 'Michael',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 5, 1),\n    },\n    {\n        'EmployeeID': 7,\n        'yValue': 6,\n        'FirstName': 'Robert',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 6, 1),\n    },\n    {\n        'EmployeeID': 8,\n        'yValue': 4,\n        'FirstName': 'Laura',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1992, 7, 1),\n    },\n    {\n        'EmployeeID': 9,\n        'yValue': 8,\n        'FirstName': 'Anne',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 8, 1),\n    }, {\n        'EmployeeID': 10,\n        'yValue': 2,\n        'FirstName': 'Fletcher',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 9, 1),\n    },\n    {\n        'EmployeeID': 11,\n        'yValue': 5,\n        'FirstName': 'Robin',\n        'Title': 'Vice President, Sales',\n        'HireDate': new Date(1992, 10, 1),\n    },\n    {\n        'EmployeeID': 12,\n        'yValue': 8,\n        'FirstName': 'Mathew',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1992, 11, 1),\n    },\n    {\n        'EmployeeID': 13,\n        'yValue': 4,\n        'FirstName': 'Henry',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 0, 1),\n    },\n    {\n        'EmployeeID': 14,\n        'yValue': 7,\n        'FirstName': 'Flemming',\n        'Title': 'Sales Manager',\n        'HireDate': new Date(1993, 1, 1),\n    },\n    {\n        'EmployeeID': 15,\n        'yValue': 9,\n        'FirstName': 'Clarke',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 2, 1),\n    },\n    {\n        'EmployeeID': 16,\n        'yValue': 6,\n        'FirstName': 'Martin',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 3, 1),\n    },\n    {\n        'EmployeeID': 17,\n        'yValue': 4,\n        'FirstName': 'Loius',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 4, 1),\n    },\n    {\n        'EmployeeID': 18,\n        'yValue': 8,\n        'FirstName': 'Arthur',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 5, 1),\n    },\n    {\n        'EmployeeID': 19,\n        'yValue': 5,\n        'FirstName': 'Marcus',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 6, 1),\n    },\n    {\n        'EmployeeID': 20,\n        'yValue': 7,\n        'FirstName': 'Albert',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 7, 1),\n    },\n    {\n        'EmployeeID': 21,\n        'yValue': 9,\n        'FirstName': 'Nicolas',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 8, 1),\n    },\n    {\n        'EmployeeID': 22,\n        'yValue': 7,\n        'FirstName': 'Behardien',\n        'Title': 'Sales Representative',\n        'HireDate': new Date(1993, 9, 1),\n    },\n    {\n        'EmployeeID': 23,\n        'yValue': 3,\n        'FirstName': 'Bruce',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 10, 1),\n    },\n    {\n        'EmployeeID': 24,\n        'yValue': 7,\n        'FirstName': 'Kimi',\n        'Title': 'Inside Sales Coordinator',\n        'HireDate': new Date(1993, 11, 1),\n    }];\nvar exportData = [\n    { xDate: new Date('2013-01-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },\n    { xDate: new Date('2013-01-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },\n    { xDate: new Date('2013-01-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },\n    { xDate: new Date('2013-01-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },\n    { xDate: new Date('2013-01-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },\n    { xDate: new Date('2013-01-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },\n    { xDate: new Date('2013-01-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },\n    { xDate: new Date('2013-01-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },\n    { xDate: new Date('2013-01-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },\n    { xDate: new Date('2013-01-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },\n    { xDate: new Date('2013-01-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },\n    { xDate: new Date('2013-01-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },\n    { xDate: new Date('2013-01-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },\n    { xDate: new Date('2013-01-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },\n    { xDate: new Date('2013-01-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },\n    { xDate: new Date('2013-02-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },\n    { xDate: new Date('2013-02-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },\n    { xDate: new Date('2013-02-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },\n    { xDate: new Date('2013-02-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },\n    { xDate: new Date('2013-02-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },\n    { xDate: new Date('2013-02-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },\n    { xDate: new Date('2013-02-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },\n    { xDate: new Date('2013-02-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },\n    { xDate: new Date('2013-02-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },\n    { xDate: new Date('2013-02-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },\n    { xDate: new Date('2013-02-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },\n    { xDate: new Date('2013-02-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },\n    { xDate: new Date('2013-02-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },\n    { xDate: new Date('2013-02-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-03-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },\n    { xDate: new Date('2013-03-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },\n    { xDate: new Date('2013-03-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },\n    { xDate: new Date('2013-03-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },\n    { xDate: new Date('2013-03-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },\n    { xDate: new Date('2013-03-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },\n    { xDate: new Date('2013-03-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },\n    { xDate: new Date('2013-03-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },\n    { xDate: new Date('2013-03-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },\n    { xDate: new Date('2013-03-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },\n    { xDate: new Date('2013-03-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },\n    { xDate: new Date('2013-03-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },\n    { xDate: new Date('2013-03-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },\n    { xDate: new Date('2013-03-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },\n    { xDate: new Date('2013-03-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },\n    { xDate: new Date('2013-04-01'), Open: 86.1, High: 86.15, Low: 85.9, Close: 86.03 },\n    { xDate: new Date('2013-04-03'), Open: 85.93, High: 86.17, Low: 85.84, Close: 86.02 },\n    { xDate: new Date('2013-04-05'), Open: 85.74, High: 86, Low: 85.66, Close: 86 },\n    { xDate: new Date('2013-04-07'), Open: 85.71, High: 85.71, Low: 85.36, Close: 85.62 },\n    { xDate: new Date('2013-04-09'), Open: 85.3, High: 85.92, Low: 85.16, Close: 85.8 },\n    { xDate: new Date('2013-04-11'), Open: 84.23, High: 85.46, Low: 84.23, Close: 85.2 },\n    { xDate: new Date('2013-04-13'), Open: 84.51, High: 84.54, Low: 84.19, Close: 84.3 },\n    { xDate: new Date('2013-04-15'), Open: 84.44, High: 84.65, Low: 84.2, Close: 84.63 },\n    { xDate: new Date('2013-04-17'), Open: 84.6, High: 84.81, Low: 84.59, Close: 84.65 },\n    { xDate: new Date('2013-04-19'), Open: 84.52, High: 84.86, Low: 84.4, Close: 84.76 },\n    { xDate: new Date('2013-04-21'), Open: 84.17, High: 84.66, Low: 84.16, Close: 84.47 },\n    { xDate: new Date('2013-04-23'), Open: 84.22, High: 84.3, Low: 83.98, Close: 84.26 },\n    { xDate: new Date('2013-04-25'), Open: 83.75, High: 84.1, Low: 83.65, Close: 84 },\n    { xDate: new Date('2013-04-27'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-04-29'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-05-01'), Open: 84.3, High: 84.45, Low: 84.19, Close: 84.22 },\n    { xDate: new Date('2013-05-03'), Open: 83.79, High: 84.19, Low: 83.7, Close: 84.04 },\n    { xDate: new Date('2013-05-05'), Open: 84.02, High: 84.02, Low: 83.69, Close: 83.71 },\n    { xDate: new Date('2013-05-07'), Open: 84.01, High: 84.04, Low: 83.82, Close: 83.96 },\n    { xDate: new Date('2013-05-09'), Open: 83.9, High: 84.02, Low: 83.86, Close: 83.94 },\n    { xDate: new Date('2013-05-11'), Open: 84.09, High: 84.17, Low: 83.9, Close: 84.06 },\n    { xDate: new Date('2013-05-13'), Open: 83.89, High: 84.25, Low: 83.77, Close: 84.01 },\n    { xDate: new Date('2013-05-15'), Open: 84.05, High: 84.14, Low: 83.84, Close: 83.91 },\n    { xDate: new Date('2013-05-17'), Open: 84.49, High: 84.65, Low: 84.18, Close: 84.22 },\n    { xDate: new Date('2013-05-19'), Open: 84.99, High: 85.1, Low: 84.37, Close: 84.43 },\n    { xDate: new Date('2013-05-21'), Open: 84.96, High: 85.06, Low: 84.7, Close: 85.01 },\n    { xDate: new Date('2013-05-23'), Open: 84.68, High: 84.9, Low: 84.65, Close: 84.76 },\n    { xDate: new Date('2013-05-25'), Open: 84.35, High: 85.03, Low: 84.32, Close: 84.67 },\n    { xDate: new Date('2013-05-27'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-05-29'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-06-01'), Open: 84.2, High: 84.29, Low: 84.04, Close: 84.15 },\n    { xDate: new Date('2013-06-03'), Open: 84.21, High: 84.25, Low: 84.03, Close: 84.17 },\n    { xDate: new Date('2013-06-05'), Open: 84.72, High: 84.87, Low: 84.44, Close: 84.49 },\n    { xDate: new Date('2013-06-07'), Open: 84.85, High: 84.88, Low: 84.5, Close: 84.72 },\n    { xDate: new Date('2013-06-09'), Open: 84.53, High: 84.74, Low: 84.25, Close: 84.69 },\n    { xDate: new Date('2013-06-11'), Open: 84.4, High: 84.7, Low: 84.27, Close: 84.52 },\n    { xDate: new Date('2013-06-13'), Open: 84.96, High: 85.07, Low: 84.5, Close: 84.57 },\n    { xDate: new Date('2013-06-15'), Open: 85.28, High: 85.32, Low: 84.95, Close: 85.03 },\n    { xDate: new Date('2013-06-17'), Open: 85.35, High: 85.39, Low: 85.1, Close: 85.32 },\n    { xDate: new Date('2013-06-19'), Open: 85.65, High: 85.66, Low: 85.21, Close: 85.36 },\n    { xDate: new Date('2013-06-21'), Open: 85.38, High: 85.85, Low: 85.25, Close: 85.67 },\n    { xDate: new Date('2013-06-23'), Open: 85.8, High: 85.96, Low: 85.67, Close: 85.83 },\n    { xDate: new Date('2013-06-25'), Open: 86.07, High: 86.22, Low: 85.75, Close: 85.87 },\n    { xDate: new Date('2013-06-27'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-06-29'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-07-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },\n    { xDate: new Date('2013-07-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },\n    { xDate: new Date('2013-07-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },\n    { xDate: new Date('2013-07-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },\n    { xDate: new Date('2013-07-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },\n    { xDate: new Date('2013-07-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },\n    { xDate: new Date('2013-07-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },\n    { xDate: new Date('2013-07-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },\n    { xDate: new Date('2013-07-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },\n    { xDate: new Date('2013-07-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },\n    { xDate: new Date('2013-07-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },\n    { xDate: new Date('2013-07-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },\n    { xDate: new Date('2013-07-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },\n    { xDate: new Date('2013-07-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-07-29'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-08-01'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.54 },\n    { xDate: new Date('2013-08-03'), Open: 85.83, High: 85.85, Low: 85.55, Close: 85.64 },\n    { xDate: new Date('2013-08-05'), Open: 86.19, High: 86.25, Low: 85.8, Close: 85.98 },\n    { xDate: new Date('2013-08-07'), Open: 86.17, High: 86.28, Low: 85.96, Close: 86.07 },\n    { xDate: new Date('2013-08-09'), Open: 86.19, High: 86.26, Low: 85.97, Close: 86.2 },\n    { xDate: new Date('2013-08-11'), Open: 85.98, High: 86.31, Low: 85.86, Close: 86.15 },\n    { xDate: new Date('2013-08-13'), Open: 85.82, High: 86.18, Low: 85.74, Close: 85.78 },\n    { xDate: new Date('2013-08-15'), Open: 85.45, High: 85.66, Low: 85.41, Close: 85.55 },\n    { xDate: new Date('2013-08-17'), Open: 85.53, High: 85.53, Low: 85.31, Close: 85.48 },\n    { xDate: new Date('2013-08-19'), Open: 85.6, High: 85.68, Low: 85.34, Close: 85.39 },\n    { xDate: new Date('2013-08-21'), Open: 85.6, High: 85.72, Low: 85.5, Close: 85.61 },\n    { xDate: new Date('2013-08-23'), Open: 85.34, High: 85.52, Low: 85.3, Close: 85.49 },\n    { xDate: new Date('2013-08-25'), Open: 85.66, High: 85.72, Low: 85.38, Close: 85.41 },\n    { xDate: new Date('2013-08-27'), Open: 85.93, High: 85.95, Low: 85.59, Close: 85.62 },\n    { xDate: new Date('2013-08-29'), Open: 85.91, High: 85.93, Low: 85.63, Close: 85.58 },\n    { xDate: new Date('2013-09-01'), Open: 86.1, High: 86.15, Low: 85.9, Close: 86.03 },\n    { xDate: new Date('2013-09-03'), Open: 85.93, High: 86.17, Low: 85.84, Close: 86.02 },\n    { xDate: new Date('2013-09-05'), Open: 85.74, High: 86, Low: 85.66, Close: 86 },\n    { xDate: new Date('2013-09-07'), Open: 85.71, High: 85.71, Low: 85.36, Close: 85.62 },\n    { xDate: new Date('2013-09-09'), Open: 85.3, High: 85.92, Low: 85.16, Close: 85.8 },\n    { xDate: new Date('2013-09-11'), Open: 84.23, High: 85.46, Low: 84.23, Close: 85.2 },\n    { xDate: new Date('2013-09-13'), Open: 84.51, High: 84.54, Low: 84.19, Close: 84.3 },\n    { xDate: new Date('2013-09-15'), Open: 84.44, High: 84.65, Low: 84.2, Close: 84.63 },\n    { xDate: new Date('2013-09-17'), Open: 84.6, High: 84.81, Low: 84.59, Close: 84.65 },\n    { xDate: new Date('2013-09-19'), Open: 84.52, High: 84.86, Low: 84.4, Close: 84.76 },\n    { xDate: new Date('2013-09-21'), Open: 84.17, High: 84.66, Low: 84.16, Close: 84.47 },\n    { xDate: new Date('2013-09-23'), Open: 84.22, High: 84.3, Low: 83.98, Close: 84.26 },\n    { xDate: new Date('2013-09-25'), Open: 83.75, High: 84.1, Low: 83.65, Close: 84 },\n    { xDate: new Date('2013-09-27'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-09-29'), Open: 84, High: 84.01, Low: 83.67, Close: 83.74 },\n    { xDate: new Date('2013-10-01'), Open: 84.3, High: 84.45, Low: 84.19, Close: 84.22 },\n    { xDate: new Date('2013-10-03'), Open: 83.79, High: 84.19, Low: 83.7, Close: 84.04 },\n    { xDate: new Date('2013-10-05'), Open: 84.02, High: 84.02, Low: 83.69, Close: 83.71 },\n    { xDate: new Date('2013-10-07'), Open: 84.01, High: 84.04, Low: 83.82, Close: 83.96 },\n    { xDate: new Date('2013-10-09'), Open: 83.9, High: 84.02, Low: 83.86, Close: 83.94 },\n    { xDate: new Date('2013-10-11'), Open: 84.09, High: 84.17, Low: 83.9, Close: 84.06 },\n    { xDate: new Date('2013-10-13'), Open: 83.89, High: 84.25, Low: 83.77, Close: 84.01 },\n    { xDate: new Date('2013-10-15'), Open: 84.05, High: 84.14, Low: 83.84, Close: 83.91 },\n    { xDate: new Date('2013-10-17'), Open: 84.49, High: 84.65, Low: 84.18, Close: 84.22 },\n    { xDate: new Date('2013-10-19'), Open: 84.99, High: 85.1, Low: 84.37, Close: 84.43 },\n    { xDate: new Date('2013-10-21'), Open: 84.96, High: 85.06, Low: 84.7, Close: 85.01 },\n    { xDate: new Date('2013-10-23'), Open: 84.68, High: 84.9, Low: 84.65, Close: 84.76 },\n    { xDate: new Date('2013-10-25'), Open: 84.35, High: 85.03, Low: 84.32, Close: 84.67 },\n    { xDate: new Date('2013-10-27'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-10-29'), Open: 84.19, High: 84.31, Low: 84.16, Close: 84.19 },\n    { xDate: new Date('2013-11-01'), Open: 84.2, High: 84.29, Low: 84.04, Close: 84.15 },\n    { xDate: new Date('2013-11-03'), Open: 84.21, High: 84.25, Low: 84.03, Close: 84.17 },\n    { xDate: new Date('2013-11-05'), Open: 84.72, High: 84.87, Low: 84.44, Close: 84.49 },\n    { xDate: new Date('2013-11-07'), Open: 84.85, High: 84.88, Low: 84.5, Close: 84.72 },\n    { xDate: new Date('2013-11-09'), Open: 84.53, High: 84.74, Low: 84.25, Close: 84.69 },\n    { xDate: new Date('2013-11-11'), Open: 84.4, High: 84.7, Low: 84.27, Close: 84.52 },\n    { xDate: new Date('2013-11-13'), Open: 84.96, High: 85.07, Low: 84.5, Close: 84.57 },\n    { xDate: new Date('2013-11-15'), Open: 85.28, High: 85.32, Low: 84.95, Close: 85.03 },\n    { xDate: new Date('2013-11-17'), Open: 85.35, High: 85.39, Low: 85.1, Close: 85.32 },\n    { xDate: new Date('2013-11-19'), Open: 85.65, High: 85.66, Low: 85.21, Close: 85.36 },\n    { xDate: new Date('2013-11-21'), Open: 85.38, High: 85.85, Low: 85.25, Close: 85.67 },\n    { xDate: new Date('2013-11-23'), Open: 85.8, High: 85.96, Low: 85.67, Close: 85.83 },\n    { xDate: new Date('2013-11-25'), Open: 86.07, High: 86.22, Low: 85.75, Close: 85.87 },\n    { xDate: new Date('2013-11-27'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-11-29'), Open: 86.05, High: 86.08, Low: 85.68, Close: 85.79 },\n    { xDate: new Date('2013-12-01'), Open: 85.85, High: 86.25, Low: 85.79, Close: 86.06 },\n    { xDate: new Date('2013-12-03'), Open: 85.6, High: 85.85, Low: 85.49, Close: 85.81 },\n    { xDate: new Date('2013-12-05'), Open: 85.94, High: 86, Low: 85.48, Close: 85.66 },\n    { xDate: new Date('2013-12-07'), Open: 86.55, High: 86.64, Low: 85.36, Close: 85.92 },\n    { xDate: new Date('2013-12-09'), Open: 86.46, High: 86.87, Low: 86.4, Close: 86.71 },\n    { xDate: new Date('2013-12-11'), Open: 86.3, High: 86.39, Low: 86.13, Close: 86.38 },\n    { xDate: new Date('2013-12-13'), Open: 85.74, High: 86.44, Low: 85.67, Close: 86.19 },\n    { xDate: new Date('2013-12-15'), Open: 85.56, High: 85.62, Low: 85.34, Close: 85.61 },\n    { xDate: new Date('2013-12-17'), Open: 85.79, High: 85.89, Low: 85.36, Close: 85.52 },\n    { xDate: new Date('2013-12-19'), Open: 85.54, High: 86, Low: 85.51, Close: 85.76 },\n    { xDate: new Date('2013-12-21'), Open: 85, High: 85.17, Low: 84.87, Close: 85.15 },\n    { xDate: new Date('2013-12-23'), Open: 85.1, High: 85.28, Low: 84.72, Close: 85.08 },\n    { xDate: new Date('2013-12-25'), Open: 85.46, High: 85.56, Low: 85.18, Close: 85.37 },\n    { xDate: new Date('2013-12-27'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 },\n    { xDate: new Date('2013-12-29'), Open: 85.42, High: 85.44, Low: 85.09, Close: 85.42 }\n];\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/data-source.ts?");

/***/ }),

/***/ "./Samples/range-navigator/filter/main.js":
/*!************************************************!*\
  !*** ./Samples/range-navigator/filter/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-navigator/filter/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-containerFilter[data-v-6df6a7b4] {\\n  padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/harts-vue-samples_release_22.1.1/Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-containerFilter[data-v-6df6a7b4] {\\n  padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/filter/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-grids */ \"./node_modules/@syncfusion/ej2-vue-grids/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _data_source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data-source */ \"./Samples/range-navigator/filter/data-source.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"RangeNavigatorPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_grids__WEBPACK_IMPORTED_MODULE_2__[\"GridPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    let gridDataSource;\n    return {\n      //Grid Properties\n      format: { skeleton: \"yMd\", type: \"date\" },\n      //Range Navigator Properties\n      value: [new Date(1992, 5, 1), new Date(1993, 4, 1)],\n      dataSource: _data_source__WEBPACK_IMPORTED_MODULE_4__[\"employeeData\"],\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      gridData: _data_source__WEBPACK_IMPORTED_MODULE_4__[\"employeeData\"],\n      theme: theme\n    };\n  },\n  provide: {\n    rangeNavigator: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_3__[\"DateTime\"]]\n  },\n  updated: function() {\n    this.$nextTick(function() {\n        this.$refs.range.ej2Instances.refresh();\n        this.$refs.gridref.ej2Instances.refresh();\n      });\n    },\n  methods: {\n  \n    changed: function(args) {\n        this.$refs.gridref.ej2Instances.dataSource = _data_source__WEBPACK_IMPORTED_MODULE_4__[\"employeeData\"].filter(function(data) {\n          return (\n            data.HireDate >= new Date(+args.start) &&\n            data.HireDate <= new Date(+args.end)\n          );\n        });\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/filter/App.vue?vue&type=template&id=6df6a7b4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section\" }, [\n      _c(\n        \"h4\",\n        {\n          staticStyle: {\n            \"font-family\": \"Segoe UI\",\n            \"font-weight\": \"500\",\n            \"font-style\": \"normal\",\n            \"font-size\": \"15px\",\n          },\n          attrs: { id: \"days\", align: \"center\" },\n        },\n        [_vm._v(\"Filter From Hire Date\")]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { attrs: { align: \"center\" } },\n        [\n          _c(\"ejs-rangenavigator\", {\n            ref: \"range\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              align: \"center\",\n              id: \"containerFilter\",\n              value: _vm.value,\n              height: \"75\",\n              labelPosition: \"Outside\",\n              valueType: \"DateTime\",\n              allowSnapping: \"true\",\n              intervalType: \"Quarter\",\n              enableGrouping: \"true,\",\n              groupBy: \"Years\",\n              enableDeferredUpdate: \"true\",\n              dataSource: _vm.dataSource,\n              xName: \"HireDate\",\n              yName: \"yValue\",\n              width: _vm.width,\n              changed: _vm.changed,\n              theme: _vm.theme,\n              animationDuration: \"500\",\n            },\n          }),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { attrs: { align: \"center\" } },\n        [\n          _c(\n            \"ejs-grid\",\n            {\n              ref: \"gridref\",\n              attrs: {\n                id: \"grid\",\n                dataSource: _vm.gridData,\n                height: \"350\",\n                width: _vm.width,\n              },\n            },\n            [\n              _c(\n                \"e-columns\",\n                [\n                  _c(\"e-column\", {\n                    attrs: {\n                      field: \"EmployeeID\",\n                      headerText: \"Employee ID\",\n                      textAlign: \"Center\",\n                    },\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-column\", {\n                    attrs: {\n                      field: \"FirstName\",\n                      headerText: \"Name\",\n                      textAlign: \"Center\",\n                    },\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-column\", {\n                    attrs: {\n                      field: \"Title\",\n                      headerText: \"Title\",\n                      format: \"yMd\",\n                      textAlign: \"Center\",\n                    },\n                  }),\n                  _vm._v(\" \"),\n                  _c(\"e-column\", {\n                    attrs: {\n                      field: \"HireDate\",\n                      headerText: \"Hire Date\",\n                      format: _vm.format,\n                      textAlign: \"Center\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample filters the data by hire date using date-time axis.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to bind the value of the range navigator to the grid control using the \"\n        ),\n        _c(\"code\", [_vm._v(\"changed\")]),\n        _vm._v(\" event.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"DateTime\")]),\n        _vm._v(\" module in the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/filter/App.vue?vue&type=style&index=0&id=6df6a7b4&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"7ccf27d4\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/range-navigator/filter/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });