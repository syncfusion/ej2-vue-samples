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
/******/ 		"spreadsheet/cell-template/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/cell-template/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/cell-template/App.vue":
/*!***************************************************!*\
  !*** ./Samples/spreadsheet/cell-template/App.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_884a32a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=884a32a0& */ \"./Samples/spreadsheet/cell-template/App.vue?vue&type=template&id=884a32a0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/cell-template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_884a32a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_884a32a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/cell-template/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-template/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-template/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-template/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-template/App.vue?vue&type=template&id=884a32a0&":
/*!**********************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-template/App.vue?vue&type=template&id=884a32a0& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_884a32a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=884a32a0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-template/App.vue?vue&type=template&id=884a32a0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_884a32a0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_884a32a0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-template/main.js":
/*!***************************************************!*\
  !*** ./Samples/spreadsheet/cell-template/main.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/cell-template/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-cell-template {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content {\\n    margin-left: 0 !important;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n.ej2-new .sb-header,\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new #description {\\n    display: none\\n}\\n.ej2-new .container-fluid,\\n.ej2-new .container-fluid .control-section,\\n#sidebar-section {\\n    padding: 0px;\\n}\\n.ej2-new .sample-browser>.content.e-view {\\n    top: 0px;\\n    padding: 0px;\\n    text-align: initial;\\n    height: 100%;\\n    overflow: hidden;\\n}\\n.ej2-new .control-section .control-section {\\n    height: 100vh;\\n}\\n.margin {\\n  margin-left: 10px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eet-vue-samples_development-CE4MBHTCSCDF5FWRISESAUUT3PCT2RE24RPRICF5GTVRDPGN3F4Q/Samples/spreadsheet/cell-template/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,iBAAiB;CACpB;AACD;;;;;IAKI,aAAa;CAChB;AACD;;;IAGI,aAAa;CAChB;AACD;IACI,SAAS;IACT,aAAa;IACb,oBAAoB;IACpB,aAAa;IACb,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;EACE,6BAA6B;CAC9B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-cell-template {\\n    height: 550px;\\n}\\n.e-spreadsheet .e-main-panel .e-main-content {\\n    margin-left: 0 !important;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n.ej2-new .sb-header,\\n.ej2-new .sb-bread-crumb,\\n.ej2-new #action-description,\\n.ej2-new #description-section,\\n.ej2-new #description {\\n    display: none\\n}\\n.ej2-new .container-fluid,\\n.ej2-new .container-fluid .control-section,\\n#sidebar-section {\\n    padding: 0px;\\n}\\n.ej2-new .sample-browser>.content.e-view {\\n    top: 0px;\\n    padding: 0px;\\n    text-align: initial;\\n    height: 100%;\\n    overflow: hidden;\\n}\\n.ej2-new .control-section .control-section {\\n    height: 100vh;\\n}\\n.margin {\\n  margin-left: 10px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-template/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-template/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"TextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"RadioButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__[\"MultiSelectPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n      scrollSettings: { isFinite: true },\n      selectionSettings: { mode: 'None' },\n      experience: ['0 - 1 year', '1 - 3 years', '3 - 5 years', '5 - 10 years'],\n      languages: ['JAVA', 'C#', 'SQL']\n    }\n  },\n  methods: {\n    created: function() {\n      var spreadsheet = this.$refs.spreadsheet;\n      // Applies format to specified range\n      spreadsheet.cellFormat({ fontWeight: 'bold' }, 'B2:B9');\n      spreadsheet.cellFormat({ fontSize: '12pt', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle', textDecoration: 'underline' }, 'B1');\n      // Merges B1 and C1 cells\n      spreadsheet.merge('B1:C1');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-template/App.vue?vue&type=template&id=884a32a0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-template/App.vue?vue&type=template&id=884a32a0& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet-cell-template\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"showRibbon\":false,\"allowResizing\":false,\"showFormulaBar\":false,\"allowOpen\":false,\"allowSave\":false,\"scrollSettings\":_vm.scrollSettings,\"created\":_vm.created,\"allowEditing\":false,\"selectionSettings\":_vm.selectionSettings}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":\"Registration Form\",\"rowCount\":40,\"colCount\":30,\"showGridLines\":false}},[_c('e-ranges',[_c('e-range',{attrs:{\"template\":'nameTextbox',\"address\":\"C2\"},scopedSlots:_vm._u([{key:\"nameTextbox\",fn:function(){return [_c('div',[_c('ejs-textbox',{attrs:{\"placeholder\":\"Name\"}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'dobTextbox',\"address\":\"C3\"},scopedSlots:_vm._u([{key:\"dobTextbox\",fn:function(){return [_c('div',[_c('ejs-textbox',{attrs:{\"placeholder\":\"DOB\"}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'genderRadiobutton',\"address\":\"C4\"},scopedSlots:_vm._u([{key:\"genderRadiobutton\",fn:function(){return [_c('div',[_c('ejs-radiobutton',{attrs:{\"name\":\"gender\",\"value\":\"male\",\"label\":\"Male\"}}),_vm._v(\" \"),_c('ejs-radiobutton',{attrs:{\"name\":\"gender\",\"value\":\"female\",\"label\":\"Female\",\"cssClass\":\"margin\"}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'dropdownlist',\"address\":\"C5\"},scopedSlots:_vm._u([{key:\"dropdownlist\",fn:function(){return [_c('div',[_c('ejs-dropdownlist',{attrs:{\"placeholder\":\"Experience\",\"dataSource\":_vm.experience}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'multiselect',\"address\":\"C6\"},scopedSlots:_vm._u([{key:\"multiselect\",fn:function(){return [_c('div',[_c('ejs-multiselect',{attrs:{\"showClearButton\":false,\"placeholder\":\"Areas of Interest\",\"dataSource\":_vm.languages}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'mobileTextbox',\"address\":\"C7\"},scopedSlots:_vm._u([{key:\"mobileTextbox\",fn:function(){return [_c('div',[_c('ejs-textbox',{attrs:{\"placeholder\":\"Mobile Number\"}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'emailTextbox',\"address\":\"C8\"},scopedSlots:_vm._u([{key:\"emailTextbox\",fn:function(){return [_c('div',[_c('ejs-textbox',{attrs:{\"placeholder\":\"Email\"}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'addressTextbox',\"address\":\"C9\"},scopedSlots:_vm._u([{key:\"addressTextbox\",fn:function(){return [_c('div',[_c('ejs-textbox',{attrs:{\"rows\":\"2\",\"multiline\":true}})],1)]},proxy:true}])}),_vm._v(\" \"),_c('e-range',{attrs:{\"template\":'addButton',\"address\":\"C11\"},scopedSlots:_vm._u([{key:\"addButton\",fn:function(){return [_c('div',[_c('ejs-button',{style:({float: 'right'}),attrs:{\"cssClass\":\"e-flat\",\"content\":\"Add\"}})],1)]},proxy:true}])})],1),_vm._v(\" \"),_c('e-rows',[_c('e-row',{attrs:{\"height\":55}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Interview Registration Form\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":55}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Name\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":45}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Date of Birth:\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":45}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Gender:\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":45}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Year of Experience:\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":45}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Areas of Interest:\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":45}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Mobile Number:\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":45}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Email:\"}})],1)],1),_vm._v(\" \"),_c('e-row',{attrs:{\"height\":82}},[_c('e-cells',[_c('e-cell',{attrs:{\"index\":\"1\",\"value\":\"Address:\"}})],1)],1)],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"index\":\"1\",\"width\":190}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":350}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample demonstrates cell template feature with interview registration form scenario using input components.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      In this demo, cell template is applied to `C2:C9` and instantiated with input components like TextBox, DropDownList,\\n      Button, RadioButton, MultiSelect etc.\\n    \")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      More information about cell template feature can be found in this\\n      \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/template\"}},[_vm._v(\"\\n          documentation\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-template/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });