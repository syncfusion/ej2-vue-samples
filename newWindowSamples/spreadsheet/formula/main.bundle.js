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
/******/ 		"spreadsheet/formula/main": 0
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
/******/ 	deferredModules.push(["./Samples/spreadsheet/formula/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/spreadsheet/formula/App.vue":
/*!*********************************************!*\
  !*** ./Samples/spreadsheet/formula/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_37a5ff51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=37a5ff51& */ \"./Samples/spreadsheet/formula/App.vue?vue&type=template&id=37a5ff51&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/spreadsheet/formula/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_37a5ff51___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_37a5ff51___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/spreadsheet/formula/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/formula/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/spreadsheet/formula/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/formula/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/formula/App.vue?vue&type=template&id=37a5ff51&":
/*!****************************************************************************!*\
  !*** ./Samples/spreadsheet/formula/App.vue?vue&type=template&id=37a5ff51& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_37a5ff51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=37a5ff51& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/formula/App.vue?vue&type=template&id=37a5ff51&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_37a5ff51___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_37a5ff51___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?");

/***/ }),

/***/ "./Samples/spreadsheet/formula/formula-data.json":
/*!*******************************************************!*\
  !*** ./Samples/spreadsheet/formula/formula-data.json ***!
  \*******************************************************/
/*! exports provided: formulaData, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"formulaData\\\":[{\\\"Date\\\":\\\"8-1-2019\\\",\\\"Open\\\":\\\"2625.75\\\",\\\"Close\\\":\\\"2640.75\\\",\\\"High (+)\\\":\\\"2634.45\\\",\\\"Low (-)\\\":\\\"2620.65\\\",\\\"Profit\\\":\\\"=C2-B2\\\"},{\\\"Date\\\":\\\"8-2-2019\\\",\\\"Open\\\":\\\"2640.75\\\",\\\"Close\\\":\\\"2638.75\\\",\\\"High (+)\\\":\\\"2640.75\\\",\\\"Low (-)\\\":\\\"2638.75\\\",\\\"Profit\\\":\\\"=C3-B3\\\"},{\\\"Date\\\":\\\"8-3-2019\\\",\\\"Open\\\":\\\"2638.75\\\",\\\"Close\\\":\\\"2697.65\\\",\\\"High (+)\\\":\\\"2690.25\\\",\\\"Low (-)\\\":\\\"2647.65\\\",\\\"Profit\\\":\\\"=C4-B4\\\"},{\\\"Date\\\":\\\"8-4-2019\\\",\\\"Open\\\":\\\"2697.65\\\",\\\"Close\\\":\\\"2700.25\\\",\\\"High (+)\\\":\\\"2699.21\\\",\\\"Low (-)\\\":\\\"2585.10\\\",\\\"Profit\\\":\\\"=C5-B5\\\"},{\\\"Date\\\":\\\"8-5-2019\\\",\\\"Open\\\":\\\"2700.25\\\",\\\"Close\\\":\\\"2730.25\\\",\\\"High (+)\\\":\\\"2727.65\\\",\\\"Low (-)\\\":\\\"2704.95\\\",\\\"Profit\\\":\\\"=C6-B6\\\"},{\\\"Date\\\":\\\"8-6-2019\\\",\\\"Open\\\":\\\"2730.25\\\",\\\"Close\\\":\\\"2725.25\\\",\\\"High (+)\\\":\\\"2727.45\\\",\\\"Low (-)\\\":\\\"2725.67\\\",\\\"Profit\\\":\\\"=C7-B7\\\"},{\\\"Date\\\":\\\"8-7-2019\\\",\\\"Open\\\":\\\"2725.25\\\",\\\"Close\\\":\\\"2778.75\\\",\\\"High (+)\\\":\\\"2770.45\\\",\\\"Low (-)\\\":\\\"2730.60\\\",\\\"Profit\\\":\\\"=C8-B8\\\"},{\\\"Date\\\":\\\"8-8-2019\\\",\\\"Open\\\":\\\"2778.75\\\",\\\"Close\\\":\\\"2800.67\\\",\\\"High (+)\\\":\\\"2790.27\\\",\\\"Low (-)\\\":\\\"2780.78\\\",\\\"Profit\\\":\\\"=C9-B9\\\"},{\\\"Date\\\":\\\"8-9-2019\\\",\\\"Open\\\":\\\"2800.67\\\",\\\"Close\\\":\\\"2840.80\\\",\\\"High (+)\\\":\\\"2838.78\\\",\\\"Low (-)\\\":\\\"2827.78\\\",\\\"Profit\\\":\\\"=C10-B10\\\"},{\\\"Date\\\":\\\"8-10-2019\\\",\\\"Open\\\":\\\"2840.80\\\",\\\"Close\\\":\\\"2865.35\\\",\\\"High (+)\\\":\\\"2863.30\\\",\\\"Low (-)\\\":\\\"2850.20\\\",\\\"Profit\\\":\\\"=C11-B11\\\"}]}\");\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/formula-data.json?");

/***/ }),

/***/ "./Samples/spreadsheet/formula/main.js":
/*!*********************************************!*\
  !*** ./Samples/spreadsheet/formula/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/spreadsheet/formula/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#spreadsheet-number-format {\\n  height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n  display: inherit;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-2F6MJJQ7IME35RYC6XJFVXWHKF5TUQ4BWNZV3EHLNOCNDTPJLZOA/Samples/spreadsheet/formula/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;CACf;AACD;EACE,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#spreadsheet-number-format {\\n  height: 550px;\\n}\\n#sb-content .e-spreadsheet .e-tab .e-tab-text {\\n  display: inherit;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/formula/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/formula/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-spreadsheet */ \"./node_modules/@syncfusion/ej2-vue-spreadsheet/index.js\");\n/* harmony import */ var _formula_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formula-data.json */ \"./Samples/spreadsheet/formula/formula-data.json\");\nvar _formula_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./formula-data.json */ \"./Samples/spreadsheet/formula/formula-data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_spreadsheet__WEBPACK_IMPORTED_MODULE_1__[\"SpreadsheetPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data: () => {\n    return {\n      dataSource: _formula_data_json__WEBPACK_IMPORTED_MODULE_2__[\"formulaData\"],\n      rowIndex: 11,\n      height1: 40,\n      height2: 25,\n      colIndex1: 3,\n      colIndex2: 5,\n      width1: 100,\n      width2: 130,\n      width3: 140,\n      definedNames: [\n        { name: 'Profit', refersTo: '=F2:F11' },\n        { name: 'High', refersTo: '=D2:D11'}\n      ]\n    }\n  },\n  methods: {\n    created: function() {\n        var spreadsheet = this.$refs.spreadsheet;\n        spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#279377', color: '#fff', textAlign: 'center',verticalAlign: 'middle', fontSize: '14px' }, 'A1:F1');\n        spreadsheet.cellFormat({ fontWeight: 'bold', backgroundColor: '#EEEEEE' }, 'A12:F15');\n        spreadsheet.numberFormat('0.00', 'F2:F11');\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/spreadsheet/formula/App.vue?vue&type=template&id=37a5ff51&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/spreadsheet/formula/App.vue?vue&type=template&id=37a5ff51& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { id: \"spreadsheet-number-format\" } },\n      [\n        _c(\n          \"ejs-spreadsheet\",\n          {\n            ref: \"spreadsheet\",\n            attrs: { showRibbon: false, created: _vm.created }\n          },\n          [\n            _c(\n              \"e-sheets\",\n              [\n                _c(\n                  \"e-sheet\",\n                  { attrs: { name: \"Stock Details\", selectedRange: \"F15\" } },\n                  [\n                    _c(\n                      \"e-ranges\",\n                      [\n                        _c(\"e-range\", { attrs: { dataSource: _vm.dataSource } })\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-rows\",\n                      [\n                        _c(\"e-row\", { attrs: { height: _vm.height1 } }),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          {\n                            attrs: { index: _vm.rowIndex, height: _vm.height2 }\n                          },\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex1,\n                                    value: \"Average profit:\"\n                                  }\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex2,\n                                    formula: \"=AVERAGE(F2:F11)\",\n                                    format: \"0.00\"\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          { attrs: { height: _vm.height2 } },\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex1,\n                                    value: \"Maximum stock value:\"\n                                  }\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex2,\n                                    formula: \"=MAX(D2:D11)\",\n                                    format: \"0.00\"\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          { attrs: { height: _vm.height2 } },\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex1,\n                                    value: \"Minimum stock value:\"\n                                  }\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex2,\n                                    formula: \"=MIN(E2:E11)\",\n                                    format: \"0.00\"\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"e-row\",\n                          { attrs: { height: _vm.height2 } },\n                          [\n                            _c(\n                              \"e-cells\",\n                              [\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex1,\n                                    value: \"Non-profitable days:\"\n                                  }\n                                }),\n                                _vm._v(\" \"),\n                                _c(\"e-cell\", {\n                                  attrs: {\n                                    index: _vm.colIndex2,\n                                    formula: '=COUNTIF(F2:F11,\"<=0\")'\n                                  }\n                                })\n                              ],\n                              1\n                            )\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    ),\n                    _vm._v(\" \"),\n                    _c(\n                      \"e-columns\",\n                      [\n                        _c(\"e-column\", { attrs: { width: _vm.width1 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width2 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width3 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width3 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width2 } }),\n                        _vm._v(\" \"),\n                        _c(\"e-column\", { attrs: { width: _vm.width2 } })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates the analysis of a company's stock value for a certain period with formula and named range feature.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n      The \"),\n        _c(\"code\", [_vm._v(\"Spreadsheet\")]),\n        _vm._v(\n          \" component provides a built-in calculation library that supports most commonly used\\n        formulas. In this demo, a formula is specified to a cell using the \"\n        ),\n        _c(\"code\", [_vm._v(\"formula\")]),\n        _vm._v(\n          \" property.The ranges are specified\\n      using its name and its defined using \"\n        ),\n        _c(\"code\", [_vm._v(\"definedNames\")]),\n        _vm._v(\" property.\\n\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information about formula and named range support can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/spreadsheet/formulas/\"\n            }\n          },\n          [_vm._v(\"\\n          documentation\")]\n        ),\n        _vm._v(\" section.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/spreadsheet/formula/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });