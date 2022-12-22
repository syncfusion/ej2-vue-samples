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
/******/ 		"pivot-table/olap/main": 0
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
/******/ 	deferredModules.push(["./Samples/pivot-table/olap/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pivot-table/olap/App.vue":
/*!******************************************!*\
  !*** ./Samples/pivot-table/olap/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5c29d73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5c29d73e&scoped=true& */ \"./Samples/pivot-table/olap/App.vue?vue&type=template&id=5c29d73e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/pivot-table/olap/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5c29d73e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css& */ \"./Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5c29d73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5c29d73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5c29d73e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pivot-table/olap/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/olap/App.vue?vue&type=script&lang=ts&":
/*!*******************************************************************!*\
  !*** ./Samples/pivot-table/olap/App.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/olap/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5c29d73e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5c29d73e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5c29d73e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5c29d73e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5c29d73e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/olap/App.vue?vue&type=template&id=5c29d73e&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./Samples/pivot-table/olap/App.vue?vue&type=template&id=5c29d73e&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5c29d73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5c29d73e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/olap/App.vue?vue&type=template&id=5c29d73e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5c29d73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5c29d73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/olap/main.js":
/*!******************************************!*\
  !*** ./Samples/pivot-table/olap/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pivot-table/olap/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n[data-v-5c29d73e] #PivotView_PivotFieldList {\\n  width: auto !important;\\n}\\n[data-v-5c29d73e] #pivotview {\\n  width: 100%;\\n}\\n@media only screen and (max-width: 400px) {\\n#pivot-grid-section[data-v-5c29d73e] {\\n    overflow: auto;\\n}\\n}\\n[data-v-5c29d73e] #pivotviewcontainerwrapper {\\n  height: auto !important;\\n}\\n[data-v-5c29d73e] .e-pivotview .e-pivotchart-type-dialog {\\n       max-width: 380px !important;\\n       max-height: 380px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ivotview-vue-samples_development/Samples/pivot-table/olap/App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,uBAAuB;CACxB;AACD;EACE,YAAY;CACb;AACD;AACA;IACI,eAAe;CAClB;CACA;AACD;EACE,wBAAwB;CACzB;AACD;OACO,4BAA4B;OAC5B,6BAA6B;CACnC\",\"file\":\"App.vue?vue&type=style&index=0&id=5c29d73e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n[data-v-5c29d73e] #PivotView_PivotFieldList {\\n  width: auto !important;\\n}\\n[data-v-5c29d73e] #pivotview {\\n  width: 100%;\\n}\\n@media only screen and (max-width: 400px) {\\n#pivot-grid-section[data-v-5c29d73e] {\\n    overflow: auto;\\n}\\n}\\n[data-v-5c29d73e] #pivotviewcontainerwrapper {\\n  height: auto !important;\\n}\\n[data-v-5c29d73e] .e-pivotview .e-pivotchart-type-dialog {\\n       max-width: 380px !important;\\n       max-height: 380px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/olap/App.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/olap/App.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pivotview */ \"./node_modules/@syncfusion/ej2-vue-pivotview/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PivotViewPlugin\"]);\nvar selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nvar theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            dataSourceSettings: {\n                catalog: \"Adventure Works DW 2008 SE\",\n                cube: \"Adventure Works\",\n                providerType: \"SSAS\",\n                url: \"https://bi.syncfusion.com/olap/msmdpump.dll\",\n                enableSorting: true,\n                rows: [\n                    {\n                        name: \"[Customer].[Customer Geography]\",\n                        caption: \"Customer Geography\"\n                    }\n                ],\n                columns: [\n                    {\n                        name: \"[Product].[Product Categories]\",\n                        caption: \"Product Categories\"\n                    },\n                    { name: \"[Measures]\", caption: \"Measures\" }\n                ],\n                values: [\n                    { name: \"[Measures].[Customer Count]\", caption: \"Customer Count\" },\n                    {\n                        name: \"[Measures].[Internet Sales Amount]\",\n                        caption: \"Internet Sales Amount\"\n                    }\n                ],\n                filters: [{ name: \"[Date].[Fiscal]\", caption: \"Date Fiscal\" }],\n                filterSettings: [\n                    {\n                        name: \"[Date].[Fiscal]\",\n                        items: [\n                            \"[Date].[Fiscal].[Fiscal Quarter].&[2002]&[4]\",\n                            \"[Date].[Fiscal].[Fiscal Year].&[2005]\"\n                        ],\n                        levelCount: 3\n                    }\n                ]\n            },\n            width: \"100%\",\n            height: 500,\n            gridSettings: { columnWidth: 160 },\n            allowExcelExport: true,\n            allowConditionalFormatting: true,\n            enableFieldSearching: true,\n            allowPdfExport: true,\n            displayOption: { view: \"Both\" },\n            showToolbar: true,\n            allowCalculatedField: true,\n            showFieldList: true,\n            showGroupingBar: true,\n            chartSettings: {\n                title: \"Sales Analysis\",\n                theme: theme,\n                load: function (args) {\n                    var selectedTheme = location.hash.split(\"/\")[1];\n                    selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n                }\n            },\n            toolbar: [\n                \"New\",\n                \"Save\",\n                \"SaveAs\",\n                \"Rename\",\n                \"Remove\",\n                \"Load\",\n                \"Grid\",\n                \"Chart\",\n                \"MDX\",\n                \"Export\",\n                \"SubTotal\",\n                \"GrandTotal\",\n                \"ConditionalFormatting\",\n                \"FieldList\"\n            ]\n        };\n    },\n    methods: {\n        fetchReport: function (args) {\n            var reportsCollection = [];\n            var reeportList = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportsCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            reportsCollection.map(function (item) {\n                reeportList.push(item.reportName);\n            });\n            args.reportName = reeportList;\n        },\n        newReport: function () {\n            var pivotObject = this.$refs.pivotview.ej2Instances;\n            pivotObject.setProperties({\n                dataSourceSettings: {\n                    columns: [],\n                    rows: [],\n                    values: [],\n                    filters: []\n                }\n            }, false);\n        },\n        loadReport: function (args) {\n            var pivotObject = this.$refs.pivotview.ej2Instances;\n            var reportsCollection = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportsCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            reportsCollection.map(function (item) {\n                if (args.reportName === item.reportName) {\n                    args.report = item.report;\n                }\n            });\n            if (args.report) {\n                pivotObject.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;\n            }\n        },\n        renameReport: function (args) {\n            var reportsCollection = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportsCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            if (args.isReportExists) {\n                for (var i = 0; i < reportsCollection.length; i++) {\n                    if (reportsCollection[i].reportName === args.rename) {\n                        reportsCollection.splice(i, 1);\n                    }\n                }\n            }\n            reportsCollection.map(function (item) {\n                if (args.reportName === item.reportName) {\n                    item.reportName = args.rename;\n                }\n            });\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                localStorage.pivotviewReports = JSON.stringify(reportsCollection);\n            }\n        },\n        removeReport: function (args) {\n            var reportsCollection = [];\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                reportsCollection = JSON.parse(localStorage.pivotviewReports);\n            }\n            for (var i = 0; i < reportsCollection.length; i++) {\n                if (reportsCollection[i].reportName === args.reportName) {\n                    reportsCollection.splice(i, 1);\n                }\n            }\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                localStorage.pivotviewReports = JSON.stringify(reportsCollection);\n            }\n        },\n        beforeToolbarRender: function (args) {\n            args.customToolbar.splice(6, 0, {\n                type: \"Separator\"\n            });\n            args.customToolbar.splice(9, 0, {\n                type: \"Separator\"\n            });\n        },\n        saveReport: function (args) {\n            var report = [];\n            var isSave = false;\n            if (localStorage.pivotviewReports &&\n                localStorage.pivotviewReports !== \"\") {\n                report = JSON.parse(localStorage.pivotviewReports);\n            }\n            if (args.report && args.reportName && args.reportName !== \"\") {\n                report.map(function (item) {\n                    if (args.reportName === item.reportName) {\n                        item.report = args.report;\n                        isSave = true;\n                    }\n                });\n                if (!isSave) {\n                    report.push(args);\n                }\n                localStorage.pivotviewReports = JSON.stringify(report);\n            }\n        }\n    },\n    provide: {\n        pivotview: [\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"FieldList\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"CalculatedField\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"Toolbar\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PDFExport\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"ExcelExport\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"ConditionalFormatting\"],\n            _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"GroupingBar\"]\n        ]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/olap/App.vue?vue&type=template&id=5c29d73e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/olap/App.vue?vue&type=template&id=5c29d73e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\", attrs: { id: \"pivot-grid-section\" } },\n      [\n        _c(\n          \"div\",\n          { staticClass: \"content-wrapper\" },\n          [\n            _c(\"ejs-pivotview\", {\n              ref: \"pivotview\",\n              attrs: {\n                id: \"pivotview\",\n                dataSourceSettings: _vm.dataSourceSettings,\n                gridSettings: _vm.gridSettings,\n                width: _vm.width,\n                height: _vm.height,\n                load: _vm.load,\n                dataBound: _vm.dataBound,\n                allowExcelExport: _vm.allowExcelExport,\n                allowConditionalFormatting: _vm.allowConditionalFormatting,\n                allowPdfExport: _vm.allowPdfExport,\n                showToolbar: _vm.showToolbar,\n                allowCalculatedField: _vm.allowCalculatedField,\n                showFieldList: _vm.showFieldList,\n                showGroupingBar: _vm.showGroupingBar,\n                toolbar: _vm.toolbar,\n                enableFieldSearching: _vm.enableFieldSearching,\n                saveReport: _vm.saveReport,\n                loadReport: _vm.loadReport,\n                fetchReport: _vm.fetchReport,\n                renameReport: _vm.renameReport,\n                removeReport: _vm.removeReport,\n                newReport: _vm.newReport,\n                toolbarRender: _vm.beforeToolbarRender,\n                displayOption: _vm.displayOption,\n                chartSettings: _vm.chartSettings,\n              },\n            }),\n          ],\n          1\n        ),\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates the rendering of a pivot table bound to an online SSAS OLAP cube as its data source.\\n      OLAP cube elements like dimension, hierarchy, measure, and others can be arranged in row, column, value, and\\n      slicer axes to create desired views at runtime.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      In this example, users can explore all of an OLAP cube and its elements and view the resultant report in a pivot\\n      table or pivot chart at runtime. Grouping bar and field list options are included for exploring the data. Along\\n      with these, toolbar options are included for switching to the pivot chart, performing report manipulation, and\\n      more:\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"table\", [\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            {\n              staticStyle: {\n                \"vertical-align\": \"top\",\n                padding: \"10px 0\",\n                width: \"200px\",\n              },\n            },\n            [_c(\"code\", [_vm._v(\"Create new report:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [_vm._v(\"Allows user to create new reports at runtime.\")]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Rename report:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Allows user to change current report name dynamically through UI.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Remove report:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Allows user to remove current report from the report collection at runtime.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Save as option:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\"Allows user to save report locally in browser memory.\"),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Report list:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\"Swap between reports within the report collection.\"),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Pivot Table:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\"Allows user to view data in cross-tabulation format.\"),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Pivot Chart and its types:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Allows user to view data in graphical format. The chart types include column, bar, line, area, etc. It\\n            also has options for showing and hiding legends and displaying chart series of different measures on\\n            single and multiple axes.\\n        \"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Show MDX query:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"View the MDX query of the current pivot table that is used to fetch the data from the cube.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Export:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Provides options to save data in PDF, Excel, and CSV document types.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Hide subtotals and grand totals:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Hide grand totals and subtotals based on hierarchies in rows and columns.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Conditional formatting:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Allows user to customize cells base on certain conditions.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _c(\n            \"td\",\n            { staticStyle: { \"vertical-align\": \"top\", padding: \"4px 0\" } },\n            [_c(\"code\", [_vm._v(\"Field List:\")])]\n          ),\n          _vm._v(\" \"),\n          _c(\"td\", [\n            _vm._v(\n              \"Provides option to alter the report dynamically through UI.\"\n            ),\n          ]),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/olap/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });