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
/******/ 		"pivot-table/paging/main": 0
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
/******/ 	deferredModules.push(["./Samples/pivot-table/paging/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pivot-table/paging/App.vue":
/*!********************************************!*\
  !*** ./Samples/pivot-table/paging/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_312bddfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=312bddfe&scoped=true& */ \"./Samples/pivot-table/paging/App.vue?vue&type=template&id=312bddfe&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/pivot-table/paging/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_312bddfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css& */ \"./Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_312bddfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_312bddfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"312bddfe\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pivot-table/paging/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/paging/App.vue?vue&type=script&lang=ts&":
/*!*********************************************************************!*\
  !*** ./Samples/pivot-table/paging/App.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/paging/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_312bddfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_312bddfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_312bddfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_312bddfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_312bddfe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/paging/App.vue?vue&type=template&id=312bddfe&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./Samples/pivot-table/paging/App.vue?vue&type=template&id=312bddfe&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_312bddfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=312bddfe&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/paging/App.vue?vue&type=template&id=312bddfe&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_312bddfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_312bddfe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/paging/main.js":
/*!********************************************!*\
  !*** ./Samples/pivot-table/paging/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pivot-table/paging/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n[data-v-312bddfe] .sb-sample-content-area {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-312bddfe] .control-section {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-312bddfe] #PivotViewcontainerwrapper {\\r\\n  height: auto !important;\\n}\\n[data-v-312bddfe] .e-bigger .e-float-input.e-control-wrapper {\\r\\n  width: 100% !important;\\n}\\n[data-v-312bddfe] .pivot-property-panel-table div {\\r\\n  padding: 0;\\n}\\n[data-v-312bddfe] .pivot-property-panel-table {\\r\\n  margin-left: 10px;\\n}\\r\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/iew-vue-samples_development-ATDDX4QL7LBBMH3VPDNPY4BJ3RZBN4QJCODGTNIFCHZNKQ3XFFBQ/Samples/pivot-table/paging/App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,6BAA6B;CAC9B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,wBAAwB;CACzB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,WAAW;CACZ;AACD;EACE,kBAAkB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=312bddfe&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n[data-v-312bddfe] .sb-sample-content-area {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-312bddfe] .control-section {\\r\\n  min-height: 255px !important;\\n}\\n[data-v-312bddfe] #PivotViewcontainerwrapper {\\r\\n  height: auto !important;\\n}\\n[data-v-312bddfe] .e-bigger .e-float-input.e-control-wrapper {\\r\\n  width: 100% !important;\\n}\\n[data-v-312bddfe] .pivot-property-panel-table div {\\r\\n  padding: 0;\\n}\\n[data-v-312bddfe] .pivot-property-panel-table {\\r\\n  margin-left: 10px;\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/paging/App.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/paging/App.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pivotview */ \"./node_modules/@syncfusion/ej2-vue-pivotview/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n\n\n\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PivotViewPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\nvar remoteData = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__[\"DataManager\"]({\n    url: \"https://bi.syncfusion.com/northwindservice/api/orders\",\n    adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_5__[\"WebApiAdaptor\"](),\n    crossDomain: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            dataSourceSettings: {\n                type: 'JSON',\n                dataSource: remoteData,\n                expandAll: true,\n                columns: [{ name: 'ProductName', caption: 'Product Name' }],\n                rows: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],\n                formatSettings: [{ name: 'UnitPrice', format: 'C0' }],\n                values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],\n                filters: []\n            },\n            width: '100%',\n            height: 600,\n            enablePaging: true,\n            pageSettings: {\n                rowPageSize: 10,\n                columnPageSize: 5,\n                currentColumnPage: 1,\n                currentRowPage: 1\n            },\n            pagerSettings: {\n                position: 'Bottom',\n                enableCompactView: false,\n                showColumnPager: true,\n                showRowPager: true\n            },\n            gridSettings: { columnWidth: 120 },\n            pagerPositions: ['Top', 'Bottom'],\n            pageSizes: ['Row', 'Column', 'Both', 'None'],\n            pagerViewData: ['Row', 'Column', 'Both']\n        };\n    },\n    provide: {\n        pivotview: [_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"Pager\"]]\n    },\n    methods: {\n        onDropDownChange: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            if (args.element.id === 'Pager_Position') {\n                pivotObj.pagerSettings.position = args.value;\n            }\n            else if (args.element.id === 'Pager_View') {\n                if (args.value === 'Row') {\n                    pivotObj.pagerSettings.showRowPager = true;\n                    pivotObj.pagerSettings.showColumnPager = false;\n                }\n                else if (args.value === 'Column') {\n                    pivotObj.pagerSettings.showRowPager = false;\n                    pivotObj.pagerSettings.showColumnPager = true;\n                }\n                else {\n                    pivotObj.pagerSettings.showRowPager = pivotObj.pagerSettings.showColumnPager = true;\n                }\n            }\n            else {\n                if (args.value === 'Row') {\n                    pivotObj.pagerSettings.showRowPageSize = true;\n                    pivotObj.pagerSettings.showColumnPageSize = false;\n                }\n                else if (args.value === 'Column') {\n                    pivotObj.pagerSettings.showRowPageSize = false;\n                    pivotObj.pagerSettings.showColumnPageSize = true;\n                }\n                else if (args.value === 'Both') {\n                    pivotObj.pagerSettings.showRowPageSize = pivotObj.pagerSettings.showColumnPageSize = true;\n                }\n                else {\n                    pivotObj.pagerSettings.showRowPageSize = pivotObj.pagerSettings.showColumnPageSize = false;\n                }\n            }\n        },\n        onCompactCheckBoxChange: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            pivotObj.pagerSettings.enableCompactView = args.checked;\n        },\n        onInverseCheckBoxChange: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            pivotObj.pagerSettings.isInversed = args.checked;\n        },\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/paging/App.vue?vue&type=template&id=312bddfe&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/paging/App.vue?vue&type=template&id=312bddfe&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-9 control-section\",staticStyle:{\"overflow\":\"auto\"}},[_c('div',{staticClass:\"content-wrapper\"},[_c('ejs-pivotview',{ref:\"pivotview\",attrs:{\"id\":\"pivotview\",\"dataSourceSettings\":_vm.dataSourceSettings,\"enablePaging\":_vm.enablePaging,\"pageSettings\":_vm.pageSettings,\"pagerSettings\":_vm.pagerSettings,\"gridSettings\":_vm.gridSettings,\"width\":_vm.width,\"height\":_vm.height}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 property-section pivot-property-section\"},[_c('table',{staticClass:\"pivot-property-panel-table\",staticStyle:{\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{ref:\"Pager_Position\",attrs:{\"id\":\"Pager_Position\",\"change\":_vm.onDropDownChange,\"dataSource\":_vm.pagerPositions,\"index\":\"1\"}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(1),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-dropdownlist',{ref:\"Pager_View\",attrs:{\"id\":\"Pager_View\",\"change\":_vm.onDropDownChange,\"dataSource\":_vm.pagerViewData,\"index\":\"2\"}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(2),_vm._v(\" \"),_c('td',[_c('div',[_c('input',{attrs:{\"type\":\"text\",\"tabindex\":\"1\",\"id\":\"Page_Size\"}}),_vm._v(\" \"),_c('ejs-dropdownlist',{ref:\"Page_Size\",attrs:{\"id\":\"Page_Size\",\"change\":_vm.onDropDownChange,\"dataSource\":_vm.pageSizes,\"index\":\"2\"}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(3),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-checkbox',{ref:\"Compact_View\",attrs:{\"id\":\"Compact_View\",\"change\":_vm.onCompactCheckBoxChange}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(4),_vm._v(\" \"),_c('td',[_c('div',[_c('ejs-checkbox',{ref:\"Inverse\",attrs:{\"id\":\"Inverse\",\"change\":_vm.onInverseCheckBoxChange}})],1)])])])])]),_vm._v(\" \"),_vm._m(5),_vm._v(\" \"),_vm._m(6)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:\"hdrlabel\"},[_vm._v(\"Pager Position\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:\"hdrlabel\"},[_vm._v(\"Show Pager\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:\"hdrlabel\"},[_vm._v(\"Show Page Size\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:\"hdrlabel\"},[_vm._v(\"Compact View\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:\"hdrlabel\"},[_vm._v(\"Inverse Pager\\n            \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample shows how to use the paging option to break and load a large data source into chunks and display\\n      them\\n      page by page. You can also use the built-in navigation buttons to move between pages.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The pivot table provides an optimized way to render rows and columns page by page without displaying the entire\\n      pivot data. To enable paging, set the \"),_c('code',[_vm._v(\"enablePaging\")]),_vm._v(\" property to \"),_c('b',[_vm._v(\"true\")]),_vm._v(\". You can also configure\\n      page information for\\n      row and column, such as page size, current page, and so on, using the \"),_c('code',[_vm._v(\"pageSettings\")]),_vm._v(\". The\\n      \"),_c('code',[_vm._v(\"pageSettings\")]),_vm._v(\"\\n      properties are explained in-detail below:\\n    \")]),_vm._v(\" \"),_c('table',[_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"currentRowPage :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Holds the current page number, row-wise. You can also change the page number at runtime.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"10px 0\",\"width\":\"180px\"}},[_c('code',[_vm._v(\"currentColumnPage :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Holds the current page number, column-wise. You can also change the page number at runtime.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"rowPageSize :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Indicates the number of records to be displayed in each page, row-wise. You can also change the page\\n          size at runtime.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"columnPageSize :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Indicates the number of records to be displayed in each page, column-wise. You can also change the page\\n          size at runtime.\")])])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',[_vm._v(\"Also, you can customize the paging UI by changing the position, visibility, page size, and other settings for\\n      row and column using the \"),_c('code',[_vm._v(\"pagerSettings\")]),_vm._v(\". The \"),_c('code',[_vm._v(\"pagerSettings\")]),_vm._v(\" properties are explained\\n      in-detail below:\\n    \")]),_vm._v(\" \"),_c('table',[_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"10px 0\",\"width\":\"180px\"}},[_c('code',[_vm._v(\"position :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Display the pager UI either at top or bottom of the Pivot Table.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"isInversed :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Toggle and display the row and column pagers.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"showRowPager :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Show or hide the row pager in the pager UI.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"showColumnPager :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Show or hide the column pager in the pager UI.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"showRowPageSize :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Show or hide the pre-defined page sizes in the row pager UI.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"showColumnPageSize :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Show or hide the pre-defined page sizes in the column pager UI.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"rowPageSizes :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Allows you to assign a set of pre-defined page sizes in the pager UI's \\\"Rows per page\\\" dropdown, which\\n          can be used to change the number of records displayed in row at runtime.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"columnPageSizes :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Allows you to assign a set of pre-defined page sizes in the pager UI's \\\"Columns per page\\\" dropdown,\\n          which can be used to change the number of records displayed in column at runtime.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"enableCompactView :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Allows the paging UI to be displayed with minimal design by hiding all paging information except\\n          navigation options.\")])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"vertical-align\":\"top\",\"padding\":\"4px 0\"}},[_c('code',[_vm._v(\"template :\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"Allows you to change the appearance of the pager UI by displaying user-defined HTML elements instead of\\n          built-in HTML elements.\")])])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Injecting Module:\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      The pivot table features are segregated into individual modules. To use the paging option, we\\n      need to inject the\\n      \"),_c('code',[_vm._v(\"Pager\")]),_vm._v(\" module using the\\n      \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/paging/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });