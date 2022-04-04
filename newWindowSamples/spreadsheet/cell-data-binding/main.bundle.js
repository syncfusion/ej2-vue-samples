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
/******/ 		"spreadsheet/cell-data-binding/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/cell-data-binding/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/cell-data-binding/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/spreadsheet/cell-data-binding/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_d64718d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=d64718d0& */ \"./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=template&id=d64718d0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_d64718d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_d64718d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/cell-data-binding/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=template&id=d64718d0&":
/*!**************************************************************************************!*\
  !*** ./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=template&id=d64718d0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d64718d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=d64718d0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=template&id=d64718d0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d64718d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_d64718d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/cell-data-binding/main.js":
/*!*******************************************************!*\
  !*** ./Samples/spreadsheet/cell-data-binding/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/cell-data-binding/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-cell-binding {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eet-vue-samples_development-CE4MBHTCSCDF5FWRISESAUUT3PCT2RE24RPRICF5GTVRDPGN3F4Q/Samples/spreadsheet/cell-data-binding/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-cell-binding {\\n    height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n    display: inherit;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');\n        spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'right' }, 'C13');\n        spreadsheet.cellFormat({ fontWeight: 'bold' }, 'D13');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=template&id=d64718d0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/cell-data-binding/App.vue?vue&type=template&id=d64718d0& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"spreadsheet-cell-binding\"}},[_c('ejs-spreadsheet',{ref:\"spreadsheet\",attrs:{\"showRibbon\":false,\"showFormulaBar\":false,\"created\":_vm.created}},[_c('e-sheets',[_c('e-sheet',{attrs:{\"name\":\"Monthly Budget\",\"selectedRange\":\"D13\"}},[_c('e-rows',[_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Category\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"Planned cost\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"Actual cost\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"Difference\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Food\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$7000\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$8120\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B2-C2\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Loan\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$1500\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$1500\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B3-C3\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Medical\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$300\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$0\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B4-C4\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Clothing\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$400\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$140\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B5-C5\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Education\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$900\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$750\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B6-C6\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Insurance\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$30\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$30\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B7-C7\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Utilities\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$130\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$160\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B8-C8\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Enterainment\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$500\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$730\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B9-C9\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Maintainance\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$50\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$70\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B10-C10\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Transportation\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$250\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$400\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B11-C11\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"value\":\"Gifts/Donations\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$0\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"value\":\"$100\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=B12-C12\",\"format\":\"$#,##0.00\"}})],1)],1),_vm._v(\" \"),_c('e-row',[_c('e-cells',[_c('e-cell',{attrs:{\"index\":2,\"value\":\"Total Difference:\"}}),_vm._v(\" \"),_c('e-cell',{attrs:{\"formula\":\"=D2+D12\",\"format\":\"$#,##0.00\"}})],1)],1)],1),_vm._v(\" \"),_c('e-columns',[_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":115}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":110}}),_vm._v(\" \"),_c('e-column',{attrs:{\"width\":100}})],1)],1)],1)],1)],1),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n          This sample illustrates a monthly budget for a home using planned versus actual costs with cell data binding\\n          feature.\\n      \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n          The \"),_c('code',[_vm._v(\"Spreadsheet\")]),_vm._v(\" component supports data binding for individual cells in a sheet. You can set value\\n          and format to a cell using following properties:\\n          \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"index\")]),_vm._v(\" - Specify index for a cell.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"value\")]),_vm._v(\" - Specify cell value.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"format\")]),_vm._v(\" - Apply number formatting for the cell.\")])])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n          More information about cell data binding feature can be found in this\\n          \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/spreadsheet/data-binding/#cell-data-binding\"}},[_vm._v(\"\\n          documentation\")]),_vm._v(\" section.\\n      \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/cell-data-binding/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });