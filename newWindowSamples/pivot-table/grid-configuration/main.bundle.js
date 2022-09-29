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
/******/ 		"pivot-table/grid-configuration/main": 0
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
/******/ 	deferredModules.push(["./Samples/pivot-table/grid-configuration/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/pivot-table/grid-configuration/App.vue":
/*!********************************************************!*\
  !*** ./Samples/pivot-table/grid-configuration/App.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_e16153be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=e16153be&scoped=true& */ \"./Samples/pivot-table/grid-configuration/App.vue?vue&type=template&id=e16153be&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/pivot-table/grid-configuration/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_e16153be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css& */ \"./Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_e16153be_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_e16153be_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e16153be\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/pivot-table/grid-configuration/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/grid-configuration/App.vue?vue&type=script&lang=ts&":
/*!*********************************************************************************!*\
  !*** ./Samples/pivot-table/grid-configuration/App.vue?vue&type=script&lang=ts& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/grid-configuration/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16153be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16153be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16153be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16153be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_e16153be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/grid-configuration/App.vue?vue&type=template&id=e16153be&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./Samples/pivot-table/grid-configuration/App.vue?vue&type=template&id=e16153be&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e16153be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=e16153be&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/grid-configuration/App.vue?vue&type=template&id=e16153be&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e16153be_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e16153be_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?");

/***/ }),

/***/ "./Samples/pivot-table/grid-configuration/main.js":
/*!********************************************************!*\
  !*** ./Samples/pivot-table/grid-configuration/main.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/pivot-table/grid-configuration/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n[data-v-e16153be] #pivotview {\\n  width: 100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/iew-vue-samples_development-ATDDX4QL7LBBMH3VPDNPY4BJ3RZBN4QJCODGTNIFCHZNKQ3XFFBQ/Samples/pivot-table/grid-configuration/App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,YAAY;CACb\",\"file\":\"App.vue?vue&type=style&index=0&id=e16153be&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n[data-v-e16153be] #pivotview {\\n  width: 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/grid-configuration/App.vue?vue&type=script&lang=ts&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/grid-configuration/App.vue?vue&type=script&lang=ts& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-pivotview */ \"./node_modules/@syncfusion/ej2-vue-pivotview/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n\n\n// import { defaultData } from \"./data-source\";\n\n\n\nObject(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"enableRipple\"])(false);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"PivotViewPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            dataSourceSettings: {\n                rows: [{ name: \"Country\" }, { name: \"Products\" }],\n                formatSettings: [{ name: \"Amount\", format: \"C0\" }],\n                enableSorting: true,\n                columns: [{ name: \"Year\" }, { name: \"Quarter\" }],\n                valueSortSettings: { headerDelimiter: \" - \" },\n                values: [\n                    { name: \"Sold\", caption: \"Units Sold\" },\n                    { name: \"Amount\", caption: \"Sold Amount\" }\n                ],\n                // dataSource: defaultData,\n                expandAll: false,\n                filters: []\n            },\n            width: \"100%\",\n            height: 300,\n            showFieldList: true,\n            gridSettings: {\n                allowReordering: true,\n                allowResizing: true,\n                columnWidth: 140\n            },\n            ddlData: [\n                { id: \"Default\", type: \"Default\" },\n                { id: \"Both\", type: \"Both\" },\n                { id: \"None\", type: \"None\" },\n                { id: \"Horizontal\", type: \"Horizontal\" },\n                { id: \"Vertical\", type: \"Vertical\" }\n            ],\n            fields: { text: \"type\", value: \"id\" }\n        };\n    },\n    methods: {\n        ddl_onChange: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            pivotObj.gridSettings.gridLines = args.value;\n        },\n        checkbox_onChange: function (args) {\n            var pivotObj = this.$refs.pivotview.ej2Instances;\n            var target = args.event.target;\n            if (target.id === \"reorder\") {\n                pivotObj.gridSettings.allowReordering = args.checked;\n            }\n            else if (target.id === \"resize\") {\n                pivotObj.gridSettings.allowResizing = args.checked;\n            }\n            else {\n                pivotObj.gridSettings.allowTextWrap = args.checked;\n            }\n        }\n    },\n    provide: {\n        pivotview: [_syncfusion_ej2_vue_pivotview__WEBPACK_IMPORTED_MODULE_1__[\"FieldList\"]]\n    }\n}));\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/pivot-table/grid-configuration/App.vue?vue&type=template&id=e16153be&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/pivot-table/grid-configuration/App.vue?vue&type=template&id=e16153be&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-9 control-section\",staticStyle:{\"overflow\":\"auto\"}},[_c('div',{staticClass:\"content-wrapper\"},[_c('ejs-pivotview',{ref:\"pivotview\",attrs:{\"id\":\"pivotview\",\"dataSourceSettings\":_vm.dataSourceSettings,\"width\":_vm.width,\"height\":_vm.height,\"gridSettings\":_vm.gridSettings,\"showFieldList\":_vm.showFieldList}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 property-section\"},[_c('table',{staticStyle:{\"width\":\"100%\",\"height\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',{staticStyle:{\"height\":\"50px\"}},[_c('td',[_c('div',[_c('ejs-checkbox',{attrs:{\"id\":\"reorder\",\"label\":\"Allow Reordering\",\"checked\":\"true\",\"change\":_vm.checkbox_onChange}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_c('td',[_c('div',[_c('ejs-checkbox',{attrs:{\"id\":\"resize\",\"label\":\"Allow Resizing\",\"checked\":\"true\",\"change\":_vm.checkbox_onChange}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_c('td',[_c('div',[_c('ejs-checkbox',{attrs:{\"id\":\"autowrap\",\"label\":\"Allow Text Wrap\",\"change\":_vm.checkbox_onChange}})],1)])]),_vm._v(\" \"),_c('tr',[_c('td',{staticStyle:{\"width\":\"70%\",\"padding-right\":\"10px\"}},[_c('div',{attrs:{\"id\":\"linesddl\"}},[_c('ejs-dropdownlist',{attrs:{\"id\":\"gridlines\",\"change\":_vm.ddl_onChange,\"dataSource\":_vm.ddlData,\"fields\":_vm.fields,\"index\":\"0\",\"placeholder\":\"Grid Lines\",\"floatLabelType\":\"Auto\",\"value\":\"Both\"}})],1)])])])])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the visibility of gridlines and text wrap along with user interactions like reordering and resizing\\n            columns. You can change the visibility and user interaction settings through the options available in the properties\\n            panel.\\n        \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The\\n            \"),_c('code',[_vm._v(\"gridLines\")]),_vm._v(\" property is used to control the line visibility that separates the rows and columns. The grid control allows us\\n            to display the following grid lines:\\n        \")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"Default\")]),_vm._v(\" - Shows the Horizontal line.\\n                \"),_c('br')]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"None\")]),_vm._v(\" - Shows no line.\\n                \"),_c('br')]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Both\")]),_vm._v(\" - Shows both Horizontal and Vertical lines.\\n                \"),_c('br')]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Horizontal\")]),_vm._v(\" - Shows the Horizontal line.\\n                \"),_c('br')]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"Vertical\")]),_vm._v(\" - Shows the Vertical line.\\n                \"),_c('br'),_vm._v(\" \"),_c('br')])]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Auto wrap\")]),_vm._v(\" cell content can be enabled using the\\n            \"),_c('code',[_vm._v(\"allowTextWrap\")]),_vm._v(\"property of the grid. Setting this property will wrap cell text on multiple lines. This feature is useful to view\\n            the cell content when it exceeds the cell width. Also this property will wrap the text in both content cell and\\n            header cells.\\n        \")]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Reordering\")]),_vm._v(\" can be enabled by setting the\\n            \"),_c('code',[_vm._v(\"allowReordering\")]),_vm._v(\" property as true. Reordering can be done by dragging and dropping the column header from one index to another index\\n            within the Grid. The location in which the column is to be placed will be indicated by two arrow symbols.\\n        \")]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Resizing:\")]),_vm._v(\" A grid column can be resized by clicking and dragging at the right edge of the column’s header.\\n            To enable column resize behavior, set the\\n            \"),_c('code',[_vm._v(\"allowResizing\")]),_vm._v(\" property as true.\\n        \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/pivot-table/grid-configuration/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });