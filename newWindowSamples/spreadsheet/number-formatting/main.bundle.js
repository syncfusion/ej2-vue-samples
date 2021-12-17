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
/******/ 		"spreadsheet/number-formatting/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/number-formatting/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/number-formatting/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/spreadsheet/number-formatting/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0700e614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0700e614& */ \"./Samples/spreadsheet/number-formatting/App.vue?vue&type=template&id=0700e614&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/number-formatting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0700e614___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0700e614___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/number-formatting/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/number-formatting/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/spreadsheet/number-formatting/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/number-formatting/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/number-formatting/App.vue?vue&type=template&id=0700e614&":
/*!**************************************************************************************!*\
  !*** ./Samples/spreadsheet/number-formatting/App.vue?vue&type=template&id=0700e614& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0700e614___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0700e614& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/number-formatting/App.vue?vue&type=template&id=0700e614&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0700e614___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0700e614___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/number-formatting/main.js":
/*!*******************************************************!*\
  !*** ./Samples/spreadsheet/number-formatting/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/number-formatting/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/main.js?");

/***/ }),

/***/ "./Samples/spreadsheet/number-formatting/number-format-data.json":
/*!***********************************************************************!*\
  !*** ./Samples/spreadsheet/number-formatting/number-format-data.json ***!
  \***********************************************************************/
/*! exports provided: numberFormatData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"numberFormatData\\\":[{\\\"Item Code\\\":\\\"I231\\\",\\\"Item Name\\\":\\\"Chinese Combo Noodle\\\",\\\"Quantity\\\":2,\\\"Rate\\\":125,\\\"Amount\\\":\\\"=PRODUCT(C4,D4)\\\"},{\\\"Item Code\\\":\\\"I245\\\",\\\"Item Name\\\":\\\"Chinese Combo Rice\\\",\\\"Quantity\\\":3,\\\"Rate\\\":125,\\\"Amount\\\":\\\"=PRODUCT(C5,D5)\\\"},{\\\"Item Code\\\":\\\"I237\\\",\\\"Item Name\\\":\\\"Amritsari Chola\\\",\\\"Quantity\\\":2,\\\"Rate\\\":225,\\\"Amount\\\":\\\"=PRODUCT(C6,D6)\\\"},{\\\"Item Code\\\":\\\"I291\\\",\\\"Item Name\\\":\\\"Asian Mixed Entree Platt\\\",\\\"Quantity\\\":3,\\\"Rate\\\":165,\\\"Amount\\\":\\\"=PRODUCT(C7,D7)\\\"},{\\\"Item Code\\\":\\\"I268\\\",\\\"Item Name\\\":\\\"Chinese Combo Chicken\\\",\\\"Quantity\\\":3,\\\"Rate\\\":125,\\\"Amount\\\":\\\"=PRODUCT(C8,D8)\\\"},{\\\"Item Code\\\":\\\"I251\\\",\\\"Item Name\\\":\\\"Chivas Regal\\\",\\\"Quantity\\\":1,\\\"Rate\\\":325,\\\"Amount\\\":\\\"=PRODUCT(C9,D9)\\\"},{\\\"Item Code\\\":\\\"I256\\\",\\\"Item Name\\\":\\\"Chicken Drumsticks\\\",\\\"Quantity\\\":2,\\\"Rate\\\":180,\\\"Amount\\\":\\\"=PRODUCT(C10,D10)\\\"},{\\\"Item Code\\\":\\\"I232\\\",\\\"Item Name\\\":\\\"Manchow Soup\\\",\\\"Quantity\\\":2,\\\"Rate\\\":160,\\\"Amount\\\":\\\"=PRODUCT(C11,D11)\\\"},{\\\"Item Code\\\":\\\"I290\\\",\\\"Item Name\\\":\\\"Schezuan Chicken\\\",\\\"Quantity\\\":3,\\\"Rate\\\":180,\\\"Amount\\\":\\\"=PRODUCT(C12,D12)\\\"},{\\\"Item Code\\\":\\\"I229\\\",\\\"Item Name\\\":\\\"Manchow Soup\\\",\\\"Quantity\\\":2,\\\"Rate\\\":125,\\\"Amount\\\":\\\"=PRODUCT(C13,D13)\\\"},{\\\"Item Code\\\":\\\"I239\\\",\\\"Item Name\\\":\\\"Jw Black Lable\\\",\\\"Quantity\\\":2,\\\"Rate\\\":175,\\\"Amount\\\":\\\"=PRODUCT(C14,D14)\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/number-format-data.json?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-number-format {\\n  height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n  display: inherit;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-A26DWTLFH4VRHQ7JAANG3WRLB5DDK7REA3J7H7OEPPQEHTFQKZUA/Samples/spreadsheet/number-formatting/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-number-format {\\n  height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n  display: inherit;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/number-formatting/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/number-formatting/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _number_format_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-format-data.json */ \"./Samples/spreadsheet/number-formatting/number-format-data.json\");\nvar _number_format_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./number-format-data.json */ \"./Samples/spreadsheet/number-formatting/number-format-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n      dataSource: _number_format_data_json__WEBPACK_IMPORTED_MODULE_2__[\"numberFormatData\"],\n      WaiterNameColIndex: 3,\n      height: 30,\n      rowIndex: 14,\n      subTotalColIndex: 1,\n      formulaColIndex: 4,\n      accountingFormat: Object(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"getFormatFromType\"])('Accounting'),\n      width1: 120,\n      width2: 180,\n      width3: 100\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A1:E2');\n        spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A3:E3');\n        spreadsheet.cellFormat({ textAlign: 'center' }, 'A4:A14');\n        spreadsheet.cellFormat({ textAlign: 'center' }, 'C4:C14');\n        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'B17');\n        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'E17');\n        spreadsheet.cellFormat({ backgroundColor: '#F9FBE7' }, 'A4:E15');\n        spreadsheet.cellFormat({ backgroundColor: '#1E88E5', color: '#F5F5F5' }, 'A1:E2');\n        spreadsheet.cellFormat({ backgroundColor: '#BBDEFB' }, 'A3:E3');\n        spreadsheet.cellFormat({ backgroundColor: '#B3E5FC' }, 'A15:E17');\n        spreadsheet.numberFormat('$#,##0.00', 'D4:E14');\n        spreadsheet.numberFormat('$#,##0.00', 'E15:E17');\n        spreadsheet.numberFormat('[Red][<=350]$#,##0.00;[Blue][>350]$#,##0.00', 'E4:E14');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/number-formatting/App.vue?vue&type=template&id=0700e614&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/number-formatting/App.vue?vue&type=template&id=0700e614& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet-number-format\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"showRibbon\":false,\"showFormulaBar\":false,\"created\":_vm.created}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":\"Restaurant Invoice\",\"selectedRange\":\"E17\"}},[_c('e-ranges',[_c('e-range',{attrs:{\"dataSource\":_vm.dataSource,\"startCell\":\"A3\"}})],1),_vm._v(\" \"),_c('e-rows',[_c('e-row',{attrs:{\"height\":_vm.height}},[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Customer Name\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"Cristi Espinos\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"index\":_vm.WaiterNameColIndex,\"value\":\"Waiter Name\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"Raye Whines\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":_vm.height}},[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Table No.\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"8\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"index\":_vm.WaiterNameColIndex,\"value\":\"Date\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"5/7/2019\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"index\":_vm.rowIndex}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":_vm.subTotalColIndex,\"value\":\"Subtotal:\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"index\":_vm.formulaColIndex,\"formula\":\"=SUBTOTAL(9,E4:E14)\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"index\":_vm.subTotalColIndex,\"value\":\"Discount (8%):\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"index\":_vm.formulaColIndex,\"formula\":\"=PRODUCT(8,E15)/100\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"index\":_vm.subTotalColIndex,\"value\":\"Total Amount:\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"index\":_vm.formulaColIndex,\"formula\":\"=SUM(E15-E16)\",\"format\":_vm.accountingFormat}})],1)],1)],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":_vm.width1}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width2}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width3}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width1}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":_vm.width1}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample demonstrates number formatting feature with a restaurant invoice.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this demo, number formatting is applied to specific cells by using the \"),_c('code',[_vm._v(\"format\")]),_vm._v(\" property,\\n        and a range of cells by using the \"),_c('code',[_vm._v(\"numberFormat\")]),_vm._v(\" method.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      In the Amount column, we have used Custom number formatting to highlight the values less than 350 and greater than 350 with red and blue colors respectively.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      More information about number formatting can be found in this\\n        \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/formatting/#number-formatting\"}},[_vm._v(\"\\n          documentation\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/number-formatting/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });