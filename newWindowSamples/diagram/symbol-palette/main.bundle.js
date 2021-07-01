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
/******/ 		"diagram/symbol-palette/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/symbol-palette/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/symbol-palette/App.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/symbol-palette/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2c6a7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2c6a7d30&scoped=true& */ \"./Samples/diagram/symbol-palette/App.vue?vue&type=template&id=2c6a7d30&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/symbol-palette/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2c6a7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css& */ \"./Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2c6a7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2c6a7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2c6a7d30\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/symbol-palette/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?");

/***/ }),

/***/ "./Samples/diagram/symbol-palette/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/diagram/symbol-palette/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/symbol-palette/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?");

/***/ }),

/***/ "./Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2c6a7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2c6a7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2c6a7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2c6a7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2c6a7d30_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?");

/***/ }),

/***/ "./Samples/diagram/symbol-palette/App.vue?vue&type=template&id=2c6a7d30&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/diagram/symbol-palette/App.vue?vue&type=template&id=2c6a7d30&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2c6a7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2c6a7d30&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/symbol-palette/App.vue?vue&type=template&id=2c6a7d30&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2c6a7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2c6a7d30_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?");

/***/ }),

/***/ "./Samples/diagram/symbol-palette/main.js":
/*!************************************************!*\
  !*** ./Samples/diagram/symbol-palette/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/symbol-palette/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.property-panel-table div[data-v-2c6a7d30] {\\n  padding-left: 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/symbol-palette/App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,kBAAkB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=2c6a7d30&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.property-panel-table div[data-v-2c6a7d30] {\\n  padding-left: 0px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/symbol-palette/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/symbol-palette/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_4__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_5__[\"NumericTextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\n\n//Initialize the flowshapes for the symbol palatte\nlet flowshapes = [\n  { id: \"Terminator\", shape: { type: \"Flow\", shape: \"Terminator\" } },\n  { id: \"Process\", shape: { type: \"Flow\", shape: \"Process\" } },\n  { id: \"Sort\", shape: { type: \"Flow\", shape: \"Sort\" } },\n  { id: \"Document\", shape: { type: \"Flow\", shape: \"Document\" } },\n  {\n    id: \"PreDefinedProcess\",\n    shape: { type: \"Flow\", shape: \"PreDefinedProcess\" }\n  },\n  { id: \"PaperTap\", shape: { type: \"Flow\", shape: \"PaperTap\" } },\n  { id: \"DirectData\", shape: { type: \"Flow\", shape: \"DirectData\" } },\n  { id: \"SequentialData\", shape: { type: \"Flow\", shape: \"SequentialData\" } }\n];\nlet basicShapes = [\n  { id: \"Rectangle\", shape: { type: \"Basic\", shape: \"Rectangle\" } },\n  { id: \"Ellipse\", shape: { type: \"Basic\", shape: \"Ellipse\" } },\n  { id: \"Parallelogram\", shape: { type: \"Basic\", shape: \"Parallelogram\" } },\n  { id: \"Triangle\", shape: { type: \"Basic\", shape: \"Triangle\" } },\n  { id: \"Hexagon\", shape: { type: \"Basic\", shape: \"Hexagon\" } },\n  { id: \"Pentagon\", shape: { type: \"Basic\", shape: \"Pentagon\" } },\n  { id: \"Cylinder\", shape: { type: \"Basic\", shape: \"Cylinder\" } },\n  { id: \"Star\", shape: { type: \"Basic\", shape: \"Star\" } }\n];\n//Initializes connector symbols for the symbol palette\nlet connectorSymbols = [\n  {\n    id: \"Link1\",\n    type: \"Orthogonal\",\n    sourcePoint: { x: 0, y: 0 },\n    targetPoint: { x: 40, y: 40 },\n    targetDecorator: { shape: \"Arrow\", style: { fill: \"#757575\", strokeColor: \"#757575\" } },\n    style: { strokeWidth: 2, strokeColor: \"#757575\" }\n  },\n  {\n    id: \"link3\",\n    type: \"Orthogonal\",\n    sourcePoint: { x: 0, y: 0 },\n    targetPoint: { x: 40, y: 40 },\n    style: { strokeWidth: 2, strokeColor: \"#757575\" },\n    targetDecorator: { shape: \"None\" }\n  },\n  {\n    id: \"Link21\",\n    type: \"Straight\",\n    sourcePoint: { x: 0, y: 0 },\n    targetPoint: { x: 40, y: 40 },\n    targetDecorator: { shape: \"Arrow\", style: { fill: \"#757575\", strokeColor: \"#757575\" } },\n    style: { strokeWidth: 2, strokeColor: \"#757575\" }\n  },\n  {\n    id: \"link23\",\n    type: \"Straight\",\n    sourcePoint: { x: 0, y: 0 },\n    targetPoint: { x: 40, y: 40 },\n    style: { strokeWidth: 2, strokeColor: \"#757575\" },\n    targetDecorator: { shape: \"None\" }\n  },\n  {\n    id: \"link33\",\n    type: \"Bezier\",\n    sourcePoint: { x: 0, y: 0 },\n    targetPoint: { x: 40, y: 40 },\n    style: { strokeWidth: 2, strokeColor: \"#757575\" },\n    targetDecorator: { shape: \"None\" }\n  }\n];\n\nlet expandMode = [\n  { type: \"Single\", text: \"Single\" },\n  { type: \"Multiple\", text: \"Multiple\" }\n];\n\nlet palette;\nlet size;\nlet expand;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      expandMode: \"Multiple\",\n      allowDrag: true,\n      palettes: [\n        {\n          id: \"flow\",\n          expanded: true,\n          symbols: flowshapes,\n          title: \"Flow Shapes\"\n        },\n        {\n          id: \"basic\",\n          expanded: true,\n          symbols: basicShapes,\n          title: \"Basic Shapes\"\n        },\n        {\n          id: \"connectors\",\n          expanded: true,\n          symbols: connectorSymbols,\n          title: \"Connectors\"\n        }\n      ],\n      enableAnimation: true,\n      width: \"100%\",\n      height: \"700px\",\n      symbolHeight: 80,\n      symbolWidth: 80,\n      //set Node default value\n      getNodeDefaults: (symbol) => {\n        if (symbol.id === \"Terminator\" || symbol.id === \"Process\") {\n          symbol.width = 80;\n          symbol.height = 40;\n        } else if (\n          symbol.id === \"Document\" ||\n          symbol.id === \"PreDefinedProcess\" ||\n          symbol.id === \"PaperTap\" ||\n          symbol.id === \"DirectData\"\n        ) {\n          symbol.width = 50;\n          symbol.height = 40;\n        }\n        symbol.style = { strokeWidth: 2, strokeColor: \"#757575\" };\n      },\n      getSymbolInfo: (symbol) => {\n        return { fit: true };\n      },\n      symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },\n\n      expanddataSource: expandMode,\n      expandindex: 1,\n      expandchange: () => {\n        palette.expandMode = expand.value;\n        palette.dataBind();\n      },\n\n      sizevalue: 80,\n      sizemin: 40,\n      sizemax: 100,\n      sizewidth: 120,\n      sizestep: 5,\n      sizeformat: \"##.##\",\n      sizechange: () => {\n        palette.symbolHeight = size.value;\n        palette.symbolWidth = size.value;\n      },\n\n      animationchecked: true,\n      animationchange: onAnimationChange,\n\n      itemtextchange: onItemTextChange,\n\n      headericonchange: onHeaderIconChange\n    };\n  },\n  provide: {\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"UndoRedo\"]]\n  },\n  mounted: function() {\n    palette = this.$refs.paletteObj.ej2Instances;\n    size = this.$refs.sizeObj.ej2Instances;\n    expand = this.$refs.expandObj.ej2Instances;\n    palette.dataBind();\n  }\n}));\n\n//Add or Remove the Text for Symbol palette item.\nfunction onHeaderIconChange(args) {\n  for (let i= 0; i < palette.palettes.length; i++) {\n    if (args.checked) {\n      palette.palettes[i].iconCss = \"shapes\";\n    } else {\n      palette.palettes[i].iconCss = \"\";\n    }\n  }\n}\n\nfunction onAnimationChange(args) {\n  palette.enableAnimation = args.checked;\n}\n\n//Add or Remove the Text for Symbol palette item.\nfunction onItemTextChange(args) {\n  if (args.checked) {\n    palette.getSymbolInfo = (symbol) => {\n      if (symbol.text !== undefined) {\n        return { description: { text: symbol.text, overflow: \"Wrap\" } };\n      }\n      return { description: { text: symbol.id } };\n    };\n  } else {\n    palette.getSymbolInfo = (symbol) => {\n      return { description: { text: \"\" } };\n    };\n  }\n  palette.dataBind();\n}\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/symbol-palette/App.vue?vue&type=template&id=2c6a7d30&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/symbol-palette/App.vue?vue&type=template&id=2c6a7d30&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-8 control-section\",\n        attrs: { id: \"palette-space\" }\n      },\n      [\n        _c(\"ejs-symbolpalette\", {\n          ref: \"paletteObj\",\n          attrs: {\n            id: \"symbolpalette\",\n            expandMode: _vm.expandMode,\n            palettes: _vm.palettes,\n            enableAnimation: _vm.enableAnimation,\n            width: _vm.width,\n            height: _vm.height,\n            getNodeDefaults: _vm.getNodeDefaults,\n            getSymbolInfo: _vm.getSymbolInfo,\n            symbolMargin: _vm.symbolMargin,\n            symbolHeight: _vm.symbolHeight,\n            symbolWidth: _vm.symbolWidth\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n        _c(\"tr\", [\n          _vm._m(0),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-dropdownlist\", {\n                ref: \"expandObj\",\n                attrs: {\n                  id: \"expand\",\n                  index: _vm.expandindex,\n                  dataSource: _vm.expanddataSource,\n                  change: _vm.expandchange\n                }\n              })\n            ],\n            1\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _vm._m(1),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-numerictextbox\", {\n                ref: \"sizeObj\",\n                attrs: {\n                  id: \"size\",\n                  value: _vm.sizevalue,\n                  min: _vm.sizemin,\n                  max: _vm.sizemax,\n                  width: _vm.sizewidth,\n                  step: _vm.sizestep,\n                  format: _vm.sizeformat,\n                  change: _vm.sizechange\n                }\n              })\n            ],\n            1\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _vm._m(2),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-checkbox\", {\n                attrs: {\n                  id: \"animation\",\n                  checked: _vm.animationchecked,\n                  change: _vm.animationchange\n                }\n              })\n            ],\n            1\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"tr\", [\n          _vm._m(3),\n          _vm._v(\" \"),\n          _c(\n            \"td\",\n            [\n              _c(\"ejs-checkbox\", {\n                attrs: { id: \"itemtext\", change: _vm.itemtextchange }\n              })\n            ],\n            1\n          )\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Expandable: \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Symbol Size: \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Animation: \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Item Text: \")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example illustrates predefining shapes in a palette that can be easily dragged and dropped into the drawing area. Customizable options of the symbol palette are also illustrated in this example.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example shows how to add shapes to symbol palette and how to customize it. The   \"\n        ),\n        _c(\"code\", [_vm._v(\"symbols\")]),\n        _vm._v(\n          \" property can be used to add shapes to the symbol palette. The \"\n        ),\n        _c(\"code\", [_vm._v(\"symbolWidth\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"symbolHeight\")]),\n        _vm._v(\" properties allow you to define the size of the symbols.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, options to enable/disable animation, show/hide symbol descriptions, and show header icons are provided.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/symbol-palette/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });