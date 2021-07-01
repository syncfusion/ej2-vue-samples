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
/******/ 		"diagram/line-routing/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/line-routing/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/line-routing/App.vue":
/*!**********************************************!*\
  !*** ./Samples/diagram/line-routing/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_f08a0de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=f08a0de2&scoped=true& */ \"./Samples/diagram/line-routing/App.vue?vue&type=template&id=f08a0de2&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/line-routing/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_f08a0de2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css& */ \"./Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_f08a0de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_f08a0de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"f08a0de2\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/line-routing/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?");

/***/ }),

/***/ "./Samples/diagram/line-routing/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/diagram/line-routing/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/line-routing/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?");

/***/ }),

/***/ "./Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f08a0de2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f08a0de2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f08a0de2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f08a0de2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_f08a0de2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?");

/***/ }),

/***/ "./Samples/diagram/line-routing/App.vue?vue&type=template&id=f08a0de2&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/diagram/line-routing/App.vue?vue&type=template&id=f08a0de2&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f08a0de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=f08a0de2&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/line-routing/App.vue?vue&type=template&id=f08a0de2&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f08a0de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_f08a0de2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?");

/***/ }),

/***/ "./Samples/diagram/line-routing/main.js":
/*!**********************************************!*\
  !*** ./Samples/diagram/line-routing/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/line-routing/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.image-pattern-style[data-v-f08a0de2] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 75px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.row[data-v-f08a0de2] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-f08a0de2] {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.col-xs-6[data-v-f08a0de2] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n  padding-top: 5px;\\n}\\n.property-panel-header[data-v-f08a0de2] {\\n  color: rgba(0, 0, 0, 0.7);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/line-routing/App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;EAChB,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=f08a0de2&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.image-pattern-style[data-v-f08a0de2] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 75px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.row[data-v-f08a0de2] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-f08a0de2] {\\n  font-size: 13px;\\n  font-weight: 500;\\n}\\n.col-xs-6[data-v-f08a0de2] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n  padding-top: 5px;\\n}\\n.property-panel-header[data-v-f08a0de2] {\\n  color: rgba(0, 0, 0, 0.7);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/line-routing/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/line-routing/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n\nlet nodes = [\n  {\n    id: 'start', offsetX: 115, offsetY: 110,\n    shape: { type: 'Flow', shape: 'Terminator' },\n    style: { fill: '#D5535D' },\n    ports: [{ id: 'port1', offset: { x: 0.5, y: 0 }, visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden }],\n    annotations: [{\n      content: 'Start'\n    }]\n  },\n  {\n    id: 'process', offsetX: 115, offsetY: 255,\n    shape: { type: 'Flow', shape: 'Process' },\n    style: { fill: \"#65B091\" },\n    annotations: [{\n      content: 'Process'\n    }]\n  },\n  {\n    id: 'document', offsetX: 115, offsetY: 400,\n    shape: { type: 'Flow', shape: 'Document' },\n    style: { fill: \"#5BA5F0\" },\n    ports: [{ id: 'port1', offset: { x: 0, y: 0.5 }, visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden }],\n    annotations: [{\n      content: 'Document'\n    }]\n  },\n  {\n    id: 'decision', offsetX: 390, offsetY: 110,\n    shape: { type: 'Flow', shape: 'Decision' },\n    style: { fill: \"#9A8AF7\" },\n    annotations: [{\n      content: 'Decision'\n\n    }]\n  },\n  {\n    id: 'document2', offsetX: 390, offsetY: 255,\n    shape: { type: 'Flow', shape: 'Document' },\n    style: { fill: \"#5BA5F0\" },\n    annotations: [{\n      content: 'Document'\n\n    }]\n  },\n  {\n    id: 'end', offsetX: 390, offsetY: 400,\n    shape: { type: 'Flow', shape: 'Terminator' },\n    style: { fill: \"#9A8AF7\" },\n    annotations: [{\n      content: 'End'\n\n    }]\n  },\n  {\n    id: 'process2', offsetX: 640, offsetY: 110,\n    shape: { type: 'Flow', shape: 'Process' },\n    style: { fill: \"#65B091\" },\n    annotations: [{\n      content: 'Process'\n    }]\n  },\n  {\n    id: 'card', offsetX: 640, offsetY: 255,\n    shape: { type: 'Flow', shape: 'Card' },\n    style: { fill: \"#9A8AF7\" },\n    annotations: [{\n      content: 'Card',\n    }],\n    ports: [\n      { id: 'port1', offset: { x: 1, y: 0.5 }, visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden },\n      { id: 'port2', offset: { x: 0.5, y: 1 }, visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hidden }\n    ],\n  }\n];\n\nlet connectors = [\n  {\n    id: 'Connector1', sourceID: 'start', targetID: 'process',\n  },\n  {\n    id: 'Connector2', sourceID: 'process', targetID: 'document'\n  },\n  {\n    id: 'Connector3', sourceID: 'document', targetID: 'end',\n  },\n  {\n    id: 'Connector4', sourceID: 'start', targetID: 'decision'\n  },\n  {\n    id: 'Connector5', sourceID: 'decision', targetID: 'process2',\n  },\n  {\n    id: 'Connector6', sourceID: 'process2', targetID: 'card',\n  },\n  {\n    id: 'Connector7', sourceID: 'process', targetID: 'document2'\n  },\n  {\n    id: 'Connector8', sourceID: 'document2', targetID: 'card',\n  },\n  {\n    id: 'Connector9', sourceID: 'start', sourcePortID: \"port1\",\n    targetID: 'card', targetPortID: 'port1'\n  },\n  {\n    id: 'Connector10', sourceID: 'card', sourcePortID: 'port2',\n    targetID: 'document', targetPortID: 'port1'\n  },\n];\n\n\n\nlet diagramInstance;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"499px\",\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n      nodes: nodes,\n      connectors: connectors,\n      constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramConstraints\"].Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramConstraints\"].LineRouting,\n      //Defines the default node and connector properties\n      getNodeDefaults: (obj, diagram) => {\n        obj.height = 50;\n        if(obj.id === 'decision') {\n          obj.height = 70;\n        }\n        obj.width = 120;\n        obj.style = { strokeColor: 'transparent' };\n        return obj;\n      },\n      getConnectorDefaults: (connector) => {\n        connector.type = 'Orthogonal';\n        connector.style = { strokeColor: '#707070 ', strokeWidth: 1.25 };\n        connector.targetDecorator = { style: { fill: '#707070 ', strokeColor: '#707070 ' } };\n        return connector;\n      },\n\n    };\n  },\n  provide: {\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"LineRouting\"]]\n  },\n   mounted: function() {\n    diagramInstance = this.$refs.diagramObj.ej2Instances;\n    diagramInstance.fitToPage();\n  }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/line-routing/App.vue?vue&type=template&id=f08a0de2&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/line-routing/App.vue?vue&type=template&id=f08a0de2&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticStyle: { width: \"100%\" } },\n      [\n        _c(\"ejs-diagram\", {\n          ref: \"diagramObj\",\n          staticStyle: { display: \"block\" },\n          attrs: {\n            id: \"diagram\",\n            width: _vm.width,\n            height: _vm.height,\n            nodes: _vm.nodes,\n            connectors: _vm.connectors,\n            getNodeDefaults: _vm.getNodeDefaults,\n            snapSettings: _vm.snapSettings,\n            constraints: _vm.constraints,\n            getConnectorDefaults: _vm.getConnectorDefaults\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the connectors that are automatically re-routing or moving away if any shape found on the connectors path.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example shows how the connectors are automatically re-routing or moving away on dragging a shape near it. This can be achieved by the constraints property of the diagram and connector.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/line-routing/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });