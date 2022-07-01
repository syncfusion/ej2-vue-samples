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
/******/ 		"spreadsheet/freeze-panes/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/freeze-panes/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/freeze-panes/App.vue":
/*!**************************************************!*\
  !*** ./Samples/spreadsheet/freeze-panes/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_65522dc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=65522dc4& */ \"./Samples/spreadsheet/freeze-panes/App.vue?vue&type=template&id=65522dc4&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/freeze-panes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_65522dc4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_65522dc4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/freeze-panes/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/freeze-panes/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/spreadsheet/freeze-panes/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/freeze-panes/App.vue?vue&type=template&id=65522dc4&":
/*!*********************************************************************************!*\
  !*** ./Samples/spreadsheet/freeze-panes/App.vue?vue&type=template&id=65522dc4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_65522dc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=65522dc4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=template&id=65522dc4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_65522dc4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_65522dc4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/freeze-panes/freeze-panes-data.json":
/*!*****************************************************************!*\
  !*** ./Samples/spreadsheet/freeze-panes/freeze-panes-data.json ***!
  \*****************************************************************/
/*! exports provided: defaultData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"defaultData\\\":[{\\\"Month\\\":\\\"January\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C3,E3,G3,I3,K3,M3)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D3,F3,H3,J3,L3,N3)\\\"},{\\\"Month\\\":\\\"February\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C4,E4,G4,I4,K4,M4)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D4,F4,H4,J4,L4,N4)\\\"},{\\\"Month\\\":\\\"March\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C5,E5,G5,I5,K5,M5)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D5,F5,H5,J5,L5,N5)\\\"},{\\\"Month\\\":\\\"April\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C6,E6,G6,I6,K6,M6)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D6,F6,H6,J6,L6,N6)\\\"},{\\\"Month\\\":\\\"May\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C7,E7,G7,I7,K7,M7)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D7,F7,H7,J7,L7,N7)\\\"},{\\\"Month\\\":\\\"June\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C8,E8,G8,I8,K8,M8)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D8,F8,H8,J8,L8,N8)\\\"},{\\\"Month\\\":\\\"July\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C9,E9,G9,I9,K9,M9)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D9,F9,H9,J9,L9,N9)\\\"},{\\\"Month\\\":\\\"August\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C10,E10,G10,I10,K10,M10)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D10,F10,H10,J10,L10,N10)\\\"},{\\\"Month\\\":\\\"September\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C11,E11,G11,I11,K11,M11)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D11,F11,H11,J11,L11,N11)\\\"},{\\\"Month\\\":\\\"October\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C12,E12,G12,I12,K12,M12)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D12,F12,H12,J12,L12,N12)\\\"},{\\\"Month\\\":\\\"November\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C13,E13,G13,I13,K13,M13)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D13,F13,H13,J13,L13,N13)\\\"},{\\\"Month\\\":\\\"December\\\",\\\"Year\\\":\\\"2019\\\",\\\"Basic Salary\\\":15100,\\\"Revised Basic Salary\\\":15800,\\\"DA\\\":2000,\\\"Revised DA\\\":2200,\\\"HRA\\\":5000,\\\"Revised HRA\\\":6500,\\\"Conveyance Allowance\\\":1500,\\\"Revised Conveyance Allowance\\\":1700,\\\"Medical Expenses\\\":1250,\\\"Revised Medical Expenses\\\":1500,\\\"Special Allowance\\\":1000,\\\"Revised Spcial Allowance\\\":1200,\\\"Total Gross Salary\\\":\\\"=SUM(C14,E14,G14,I14,K14,M14)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D14,F14,H14,J14,L14,N14)\\\"},{\\\"Month\\\":\\\"January\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C15,E15,G15,I15,K15,M15)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D15,F15,H15,J15,L15,N15)\\\"},{\\\"Month\\\":\\\"February\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C16,E16,G16,I16,K16,M16)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D16,F16,H16,J16,L16,N16)\\\"},{\\\"Month\\\":\\\"March\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C17,E17,G17,I17,K17,M17)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D17,F17,H17,J17,L17,N17)\\\"},{\\\"Month\\\":\\\"April\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C18,E18,G18,I18,K18,M18)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D18,F18,H18,J18,L18,N18)\\\"},{\\\"Month\\\":\\\"May\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C19,E19,G19,I19,K19,M19)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D19,F19,H19,J19,L19,N19)\\\"},{\\\"Month\\\":\\\"June\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C20,E20,G20,I20,K20,M20)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D20,F20,H20,J20,L20,N20)\\\"},{\\\"Month\\\":\\\"July\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C21,E21,G21,I21,K21,M21)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D21,F21,H21,J21,L21,N21)\\\"},{\\\"Month\\\":\\\"August\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C22,E22,G22,I22,K22,M22)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D22,F22,H22,J22,L22,N22)\\\"},{\\\"Month\\\":\\\"September\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C23,E23,G23,I23,K23,M23)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D23,F23,H23,J23,L23,N23)\\\"},{\\\"Month\\\":\\\"October\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C24,E24,G24,I24,K24,M24)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D24,F24,H24,J24,L24,N24)\\\"},{\\\"Month\\\":\\\"November\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C25,E25,G25,I25,K25,M25)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D25,F25,H25,J25,L25,N25)\\\"},{\\\"Month\\\":\\\"December\\\",\\\"Year\\\":\\\"2020\\\",\\\"Basic Salary\\\":16610,\\\"Revised Basic Salary\\\":17380,\\\"DA\\\":2200,\\\"Revised DA\\\":2420,\\\"HRA\\\":5500,\\\"Revised HRA\\\":7150,\\\"Conveyance Allowance\\\":1650,\\\"Revised Conveyance Allowance\\\":1870,\\\"Medical Expenses\\\":1375,\\\"Revised Medical Expenses\\\":1650,\\\"Special Allowance\\\":1100,\\\"Revised Spcial Allowance\\\":1320,\\\"Total Gross Salary\\\":\\\"=SUM(C26,E26,G26,I26,K26,M26)\\\",\\\"Revised Total Gross Salary\\\":\\\"=SUM(D26,F26,H26,J26,L26,N26)\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/freeze-panes-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/freeze-panes/main.js":
/*!**************************************************!*\
  !*** ./Samples/spreadsheet/freeze-panes/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/freeze-panes/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-default-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content {\\n    margin-left: 0 !important;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n.ej2-new .sb-header,\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new #description {\\n    display: none\\n}\\n.ej2-new .container-fluid,\\n.ej2-new .container-fluid .control-section,\\n#sidebar-section {\\n    padding: 0px;\\n}\\n.ej2-new .sample-browser>.content.e-view {\\n    top: 0px;\\n    padding: 0px;\\n    text-align: initial;\\n    height: 100%;\\n    overflow: hidden;\\n}\\n.ej2-new .control-section .control-section {\\n    height: 100vh;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-FV2XOM4YVX5QQDPGFQF66UAYBNA4X5LUWL6O7TKU72AW7WZNDCUQ/Samples/spreadsheet/freeze-panes/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,iBAAiB;CACpB;AACD;;;;;IAKI,aAAa;CAChB;AACD;;;IAGI,aAAa;CAChB;AACD;IACI,SAAS;IACT,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-default-section {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content {\\n    margin-left: 0 !important;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n.ej2-new .sb-header,\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new #description {\\n    display: none\\n}\\n.ej2-new .container-fluid,\\n.ej2-new .container-fluid .control-section,\\n#sidebar-section {\\n    padding: 0px;\\n}\\n.ej2-new .sample-browser>.content.e-view {\\n    top: 0px;\\n    padding: 0px;\\n    text-align: initial;\\n    height: 100%;\\n    overflow: hidden;\\n}\\n.ej2-new .control-section .control-section {\\n    height: 100vh;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _freeze_panes_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freeze-panes-data.json */ \"./Samples/spreadsheet/freeze-panes/freeze-panes-data.json\");\nvar _freeze_panes_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./freeze-panes-data.json */ \"./Samples/spreadsheet/freeze-panes/freeze-panes-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n      dataSource: _freeze_panes_data_json__WEBPACK_IMPORTED_MODULE_2__.defaultData,\n      rowIndex: 26,\n      cells2: [\n        { index: 13, value: \"Total Amount\", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },\n        { formula: \"=SUM(O4:O26)\", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },\n        { formula: \"=SUM(P4:P26)\", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },\n      ],\n      cells1: [\n        { index: 1, value: \"Period\", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },\n        { index: 3, value: \"Total Gross Salary\", style: { fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' } },\n      ],\n      width1: 80,\n      width2: 100,\n      openUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open',\n      saveUrl: 'https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save'\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.wrap('C2:P2');\n        spreadsheet.merge('A1:B1');\n        spreadsheet.merge('C1:P1');\n        spreadsheet.cellFormat({ backgroundColor: '#4e4ee6', color: '#FFFFF4', fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle'}, 'A1:P2');\n        spreadsheet.cellFormat({ backgroundColor: '#4e4ee6', color: '#FFFFF4' }, 'A3:B26');\n        spreadsheet.numberFormat('$#,##0.00', 'C2:P26');\n        spreadsheet.numberFormat('$#,##0.00', 'O27:P27');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=template&id=65522dc4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/freeze-panes/App.vue?vue&type=template&id=65522dc4& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet-default-section\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"openUrl\":_vm.openUrl,\"saveUrl\":_vm.saveUrl,\"created\":_vm.created}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":\"Gross Salary\",\"frozenRows\":2,\"frozenColumns\":2,\"selectedRange\":\"C1\"}},[_c('e-ranges',[_c('e-range',{attrs:{\"dataSource\":_vm.dataSource,\"startCell\":\"A2\"}})],1),_vm._v(\" \"),_c('e-rows',[_c('e-row',{attrs:{\"cells\":_vm.cells1}}),_vm._v(\" \"),_c('e-row',{attrs:{\"index\":_vm.rowIndex,\"cells\":_vm.cells2}})],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":_vm.width1}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width1}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width1}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n     This sample demonstrates the Spreadsheet freeze pane feature by applying frozen rows and columns with the Gross Salary scenario as an example. In this sample, you can see the frozen rows/columns that are visible while scrolling the sheet content vertically/horizontally.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      Freeze Panes helps you to keep particular rows or columns visible when scrolling the sheet content in the spreadsheet. You can specify the number of frozen rows and columns using frozenRows and frozenColumns properties inside the `Sheet` property.\\n      In this sample, the first 2 rows and columns are frozen using the `frozenRows` and `frozenColumns` properties.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      More information about the Spreadsheet component can be found in this\\n      \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/freeze-pane\"}},[_vm._v(\"\\n          documentation\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/freeze-panes/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });