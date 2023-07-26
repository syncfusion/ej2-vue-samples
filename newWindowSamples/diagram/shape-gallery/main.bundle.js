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
/******/ 		"diagram/shape-gallery/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/shape-gallery/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/shape-gallery/App.vue":
/*!***********************************************!*\
  !*** ./Samples/diagram/shape-gallery/App.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_06c13218_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=06c13218&scoped=true& */ \"./Samples/diagram/shape-gallery/App.vue?vue&type=template&id=06c13218&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/shape-gallery/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_06c13218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css& */ \"./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_06c13218_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_06c13218_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"06c13218\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/shape-gallery/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?");

/***/ }),

/***/ "./Samples/diagram/shape-gallery/App.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./Samples/diagram/shape-gallery/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?");

/***/ }),

/***/ "./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_06c13218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_06c13218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_06c13218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_06c13218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_06c13218_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?");

/***/ }),

/***/ "./Samples/diagram/shape-gallery/App.vue?vue&type=template&id=06c13218&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./Samples/diagram/shape-gallery/App.vue?vue&type=template&id=06c13218&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_06c13218_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=06c13218&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=template&id=06c13218&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_06c13218_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_06c13218_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?");

/***/ }),

/***/ "./Samples/diagram/shape-gallery/main.js":
/*!***********************************************!*\
  !*** ./Samples/diagram/shape-gallery/main.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/shape-gallery/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.image-pattern-style[data-v-06c13218] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 75px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.row[data-v-06c13218] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-06c13218] {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.col-xs-6[data-v-06c13218] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n  padding-top: 5px;\\n}\\n.property-panel-header[data-v-06c13218] {\\n  color: rgba(0, 0, 0, 0.7);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/grams-vue-samples_release_22.1.1/Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;EAChB,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.image-pattern-style[data-v-06c13218] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 75px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.row[data-v-06c13218] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-06c13218] {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.col-xs-6[data-v-06c13218] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n  padding-top: 5px;\\n}\\n.property-panel-header[data-v-06c13218] {\\n  color: rgba(0, 0, 0, 0.7);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/shape-gallery/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n\nlet basicShapeModel = [\n  {\n    shape: { type: \"Text\", content: \"Basic Shapes\" },\n    style: {\n      fontSize: 16,\n      fill: \"None\",\n      fontFamily: \"sans-serif\",\n      bold: true,\n      strokeWidth: 0\n    }\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Rectangle\" },\n    annotations: [{ content: \"Rectangle\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Ellipse\" },\n    annotations: [{ content: \"Ellipse\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Triangle\" },\n    annotations: [{ content: \"Triangle\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Plus\" },\n    annotations: [{ content: \"Plus\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Star\" },\n    annotations: [{ content: \"Star\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Pentagon\" },\n    annotations: [{ content: \"Pentagon\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Heptagon\" },\n    annotations: [{ content: \"Heptagon\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Octagon\" },\n    annotations: [{ content: \"Octagon\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Trapezoid\" },\n    annotations: [{ content: \"Trapezoid\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Decagon\" },\n    annotations: [{ content: \"Decagon\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"RightTriangle\" },\n    annotations: [{ content: \"Right Triangle\" }]\n  },\n  {\n    shape: { type: \"Basic\", shape: \"Parallelogram\" },\n    annotations: [{ content: \"Parallelogram\" }]\n  }\n];\n\nlet flowShapeModel= [\n  {\n    shape: { type: \"Text\", content: \"Flow Shapes\" },\n    style: {\n      fontSize: 16,\n      fill: \"None\",\n      fontFamily: \"sans-serif\",\n      bold: true,\n      strokeWidth: 0\n    }\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Terminator\" },\n    annotations: [{ content: \"Terminator\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Process\" },\n    annotations: [{ content: \"Process\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Decision\" },\n    annotations: [{ content: \"Decision\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Document\" },\n    annotations: [{ content: \"Document\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"PreDefinedProcess\" },\n    annotations: [{ content: \"Predefined Process\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"PaperTap\" },\n    annotations: [{ content: \"Paper Tape\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"DirectData\" },\n    annotations: [{ content: \"Direct Data\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"SequentialData\" },\n    annotations: [{ content: \"Direct Data\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Sort\" },\n    annotations: [{ content: \"Sort\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"MultiDocument\" },\n    annotations: [{ content: \"Multi-Document\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Collate\" },\n    annotations: [{ content: \"Collate\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"SummingJunction\" },\n    annotations: [{ content: \"Summing Junction\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Or\" },\n    annotations: [{ content: \"Or\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"InternalStorage\" },\n    annotations: [{ content: \"Internal Storage\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Extract\" },\n    annotations: [{ content: \"Extract\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"ManualOperation\" },\n    annotations: [{ content: \"Manual Operation\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Merge\" },\n    annotations: [{ content: \"Merge\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"OffPageReference\" },\n    annotations: [{ content: \"Off-Page Reference\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"SequentialAccessStorage\" },\n    annotations: [{ content: \"Sequential Access Storage\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Data\" },\n    annotations: [{ content: \"Data\" }]\n  },\n  {\n    shape: { type: \"Flow\", shape: \"Card\" },\n    annotations: [{ content: \"Card\" }]\n  }\n];\n\nlet bpmnShapeModel= [\n  {\n    shape: { type: \"Text\", content: \"BPMN Shapes\" },\n    style: {\n      fontSize: 16,\n      fill: \"none\",\n      fontFamily: \"sans-serif\",\n      bold: true,\n      strokeWidth: 0\n    }\n  },\n  {\n    shape: {\n      type: \"Bpmn\",\n      shape: \"Event\",\n      event: { event: \"Start\", trigger: \"None\" }\n    },\n    annotations: [{ content: \"Start Event\" }]\n  },\n  {\n    shape: {\n      type: \"Bpmn\",\n      shape: \"Event\",\n      event: { event: \"Intermediate\", trigger: \"None\" }\n    },\n    annotations: [{ content: \"Intermediate Event\" }]\n  },\n  {\n    shape: {\n      type: \"Bpmn\",\n      shape: \"Event\",\n      event: { event: \"End\", trigger: \"None\" }\n    },\n    annotations: [{ content: \"End Event\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"Gateway\" },\n    annotations: [{ content: \"Gateway\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"Activity\", activity: { activity: \"Task\" } },\n    annotations: [{ content: \"Task\" }]\n  },\n  {\n    shape: {\n      type: \"Bpmn\",\n      shape: \"Activity\",\n      activity: {\n        activity: \"SubProcess\",\n        subProcess: {\n          type: \"Transaction\",\n          transaction: {\n            success: { visible: false },\n            failure: { visible: false },\n            cancel: { visible: false }\n          }\n        }\n      }\n    },\n    annotations: [{ content: \"Transaction\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"Message\" },\n    annotations: [{ content: \"Message\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"DataObject\" },\n    annotations: [{ content: \"Data Object\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"DataSource\" },\n    annotations: [{ content: \"Data Source\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"Group\" },\n    annotations: [{ content: \"Group\" }]\n  },\n  {\n    shape: { type: \"Bpmn\", shape: \"TextAnnotation\" },\n    annotations: [{ content: \"Text Annotation\" }]\n  }\n];\n\nlet diagramInstance;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"800px\",\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n      nodes: getNodes(),\n      //Defines the default node and connector properties\n      getNodeDefaults: (obj, diagram) => {\n        return obj;\n      }\n    };\n  },\n  provide: {\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"BpmnDiagrams\"]]\n  },\n  mounted: function() {\n    let diagram = this.$refs.diagramObject.ej2Instances;\n    diagram.fitToPage();\n  }\n}));\n\nfunction getNodes() {\n  var nodes1 = basicShapeModel;\n  nodes1 = nodes1.concat(flowShapeModel).concat(bpmnShapeModel);\n  var offsetx = 60;\n  var offsety = 60;\n  var count = 1;\n  for (var i = 0; i < nodes1.length; i++) {\n    var node = nodes1[i];\n    node.width = 40;\n    node.height = 40;\n    if (node.shape && node.shape.type === \"Flow\") {\n      let shapeType = (node.shape).shape;\n      if (shapeType === \"Process\" || shapeType === \"Terminator\") {\n        node.height = 20;\n      } else if (shapeType === \"Decision\") {\n        node.height = 35;\n      } else if (\n        shapeType === \"Document\" ||\n        shapeType === \"DirectData\" ||\n        shapeType === \"MultiDocument\" ||\n        shapeType === \"PreDefinedProcess\"\n      ) {\n        node.height = 30;\n      }\n    }\n    node.offsetX = offsetx;\n    node.offsetY = offsety;\n    if (node.shape && !(node.shape.type === \"Text\") && node.annotations) {\n      node.annotations[0].verticalAlignment = \"Top\";\n      node.annotations[0].offset = { y: 1 };\n      node.annotations[0].margin = { top: 10 };\n\n      offsetx = offsetx + 90;\n      if (count % 10 === 0) {\n        offsety = offsety + 100;\n        offsetx = 60;\n      }\n      count++;\n    }\n    if (node.shape && node.shape.type === \"Text\") {\n      offsetx = 60;\n      offsety = offsety + 50;\n      count = 1;\n      node.width = 150;\n      node.height = 100;\n      node.offsetX = 90;\n      if (!((node.shape).content === \"Basic Shapes\")) {\n        node.offsetX = 90;\n        node.offsetY = offsety + 50;\n        offsety = offsety + 100;\n      }\n    }\n  }\n  return nodes1;\n}\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=template&id=06c13218&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/shape-gallery/App.vue?vue&type=template&id=06c13218&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticStyle: { width: \"100%\" } },\n      [\n        _c(\"ejs-diagram\", {\n          ref: \"diagramObject\",\n          staticStyle: { display: \"block\" },\n          attrs: {\n            id: \"diagram\",\n            width: _vm.width,\n            height: _vm.height,\n            nodes: _vm.nodes,\n            getNodeDefaults: _vm.getNodeDefaults,\n            snapSettings: _vm.snapSettings,\n          },\n        }),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates basic built-in shapes, such as basic shapes, flow shapes, and BPMN shapes.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example shows how to define built-in shapes that are used to visualize geometric information, work flow, or a business\\n        flow diagrams. The \"\n        ),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\n          \" property can be used to define the category of built-in shapes. Additionally, the\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\" property of the \"),\n        _c(\"code\", [_vm._v(\"shape\")]),\n        _vm._v(\" allows you to choose the type of the shape.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The diagram component’s features are segregated into individual feature-wise modules. To use the BPMN shapes, inject\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"BpmnDiagrams\")]),\n        _vm._v(\" module using\\n        \"),\n        _c(\"code\", [_vm._v(\"provide: { diagram: [BpmnDiagrams] }\")]),\n        _vm._v(\" method.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/shape-gallery/App.vue?vue&type=style&index=0&id=06c13218&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2349331c\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/diagram/shape-gallery/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });