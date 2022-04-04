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
/******/ 		"pivot-table/remote/main": 0
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
/******/ 	deferredModules.push(["./Samples/pivot-table/remote/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pivot-table/remote/App.vue":
/*!********************************************!*\
  !*** ./Samples/pivot-table/remote/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_28ad3690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=28ad3690&scoped=true& */ \"./Samples/pivot-table/remote/App.vue?vue&type=template&id=28ad3690&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/pivot-table/remote/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_28ad3690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css& */ \"./Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_28ad3690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_28ad3690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"28ad3690\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pivot-table/remote/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/remote/App.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./Samples/pivot-table/remote/App.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/remote/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28ad3690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28ad3690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28ad3690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28ad3690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_28ad3690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/remote/App.vue?vue&type=template&id=28ad3690&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./Samples/pivot-table/remote/App.vue?vue&type=template&id=28ad3690&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28ad3690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=28ad3690&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/remote/App.vue?vue&type=template&id=28ad3690&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28ad3690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_28ad3690_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/remote/main.js":
/*!********************************************!*\
  !*** ./Samples/pivot-table/remote/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pivot-table/remote/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n[data-v-28ad3690] #pivotview {\\n  width: 100%;\\n}\\n[data-v-28ad3690] .control-section {\\n  padding-top: 8px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.1.0.1-HSI7VGTN3YA7K5KDMJJVFIQVSLOTWCTOQFUDIBKBJEI7MUADAIKQ/Samples/pivot-table/remote/App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,YAAY;CACb;AACD;EACE,4BAA4B;CAC7B\",\"file\":\"App.vue?vue&type=style&index=0&id=28ad3690&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n[data-v-28ad3690] #pivotview {\\n  width: 100%;\\n}\\n[data-v-28ad3690] .control-section {\\n  padding-top: 8px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/remote/App.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/remote/App.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pivotview */ \"./node_modules/@syncfusion/ej2-vue-pivotview/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PivotViewPlugin\"]);\nvar remoteData = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"DataManager\"]({\n    url: \"https://bi.syncfusion.com/northwindservice/api/orders\",\n    adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_3__[\"WebApiAdaptor\"](),\n    crossDomain: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            jsonReport: {\n                dataSource: remoteData,\n                type: \"JSON\",\n                expandAll: true,\n                filters: [],\n                columns: [{ name: \"ProductName\", caption: \"Product Name\" }],\n                rows: [\n                    { name: \"ShipCountry\", caption: \"Ship Country\" },\n                    { name: \"ShipCity\", caption: \"Ship City\" }\n                ],\n                formatSettings: [{ name: \"UnitPrice\", format: \"C0\" }],\n                values: [\n                    { name: \"Quantity\" },\n                    { name: \"UnitPrice\", caption: \"Unit Price\" }\n                ]\n            },\n            csvReport: {\n                url: \"https://bi.syncfusion.com/productservice/api/sales\",\n                type: \"CSV\",\n                expandAll: false,\n                enableSorting: true,\n                formatSettings: [\n                    { name: \"Total Cost\", format: \"C0\" },\n                    { name: \"Total Revenue\", format: \"C0\" },\n                    { name: \"Total Profit\", format: \"C0\" }\n                ],\n                drilledMembers: [{ name: \"Item Type\", items: [\"Baby Food\"] }],\n                rows: [{ name: \"Region\" }, { name: \"Country\" }],\n                columns: [{ name: \"Item Type\" }, { name: \"Sales Channel\" }],\n                values: [\n                    { name: \"Total Cost\" },\n                    { name: \"Total Revenue\" },\n                    { name: \"Total Profit\" }\n                ],\n                filters: []\n            },\n            gridSettings: { columnWidth: 120 },\n            height: 300,\n            width: \"100%\",\n            contentTypes: [\"JSON\", \"CSV\"]\n        };\n    },\n    methods: {\n        ddlOnChange: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            if (args.value === \"JSON\") {\n                pivotObj.dataSourceSettings = this.jsonReport;\n            }\n            else if (args.value === \"CSV\") {\n                pivotObj.dataSourceSettings = this.csvReport;\n            }\n        }\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/remote/App.vue?vue&type=template&id=28ad3690&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/remote/App.vue?vue&type=template&id=28ad3690&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\",staticStyle:{\"overflow\":\"auto\"}},[_c('div',{staticStyle:{\"margin-bottom\":\"5px\"},attrs:{\"id\":\"dropdown-control\"}},[_c('table',{staticStyle:{\"width\":\"350px\"}},[_c('tbody',[_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{attrs:{\"id\":\"contenttype\",\"change\":_vm.ddlOnChange,\"dataSource\":_vm.contentTypes,\"index\":\"0\",\"placeholder\":\"Content Types\"}})],1)])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"content-wrapper\"},[_c('ejs-pivotview',{ref:\"pivotview\",attrs:{\"id\":\"pivotview\",\"dataSourceSettings\":_vm.jsonReport,\"gridSettings\":_vm.gridSettings,\"width\":_vm.width,\"height\":_vm.height}})],1)]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',[_c('b',[_vm._v(\"Content Type:\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates basic rendering of the pivot table bound to JSON or CSV data pulled from a remote server.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      The pivot table supports JSON and CSV data source. The\\n      \"),_c('code',[_vm._v(\"dataSourceSettings->dataSource\")]),_vm._v(\" property can be assigned with the result of DataManager to bind remote data.\\n    \")]),_vm._v(\"The\\n    \"),_c('code',[_vm._v(\"DataManager\")]),_vm._v(\", which will act as an interface between the service endpoint and the pivot table, will require the below minimal\\n    information to interact with service endpoint properly.\\n    \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"DataManager->url\")]),_vm._v(\" - Defines the service endpoint to fetch data.\\n      \")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"DataManager->adaptor\")]),_vm._v(\" - Defines the adaptor option. Here,\\n        \"),_c('code',[_vm._v(\"WebApiAdaptor\")]),_vm._v(\" is used for remote binding.\\n      \")])]),_vm._v(\"In this demo, with respect to JSON remote data, is bound by assigning service data as an instance of\\n    \"),_c('code',[_vm._v(\"DataManager\")]),_vm._v(\" to the\\n    \"),_c('code',[_vm._v(\"dataSourceSettings->dataSource\")]),_vm._v(\" property. But for CSV, the service URL is directly set to\\n    \"),_c('code',[_vm._v(\"url\")]),_vm._v(\" for remote data consumption.\\n  \")])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/remote/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });