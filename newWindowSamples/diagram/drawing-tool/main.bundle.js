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
/******/ 		"diagram/drawing-tool/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/drawing-tool/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/drawing-tool/App.vue":
/*!**********************************************!*\
  !*** ./Samples/diagram/drawing-tool/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3fae4dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3fae4dee&scoped=true& */ \"./Samples/diagram/drawing-tool/App.vue?vue&type=template&id=3fae4dee&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/drawing-tool/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3fae4dee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css& */ \"./Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3fae4dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3fae4dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3fae4dee\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/drawing-tool/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?");

/***/ }),

/***/ "./Samples/diagram/drawing-tool/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/diagram/drawing-tool/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/drawing-tool/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?");

/***/ }),

/***/ "./Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fae4dee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fae4dee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fae4dee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fae4dee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3fae4dee_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?");

/***/ }),

/***/ "./Samples/diagram/drawing-tool/App.vue?vue&type=template&id=3fae4dee&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./Samples/diagram/drawing-tool/App.vue?vue&type=template&id=3fae4dee&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3fae4dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3fae4dee&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/drawing-tool/App.vue?vue&type=template&id=3fae4dee&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3fae4dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3fae4dee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?");

/***/ }),

/***/ "./Samples/diagram/drawing-tool/main.js":
/*!**********************************************!*\
  !*** ./Samples/diagram/drawing-tool/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/drawing-tool/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.image-pattern-style[data-v-3fae4dee] {\\n  background-color: white;\\n  background-size: 70%;\\n  background-repeat: no-repeat;\\n  height: 45px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.image-pattern-style[data-v-3fae4dee]:hover {\\n  border-color: gray;\\n  border-width: 2px;\\n}\\n.row[data-v-3fae4dee] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-3fae4dee] {\\n  font-size: 12px;\\n  font-weight: 500;\\n}\\n.e-checkbox-wrapper .e-label[data-v-3fae4dee] {\\n  font-size: 12px;\\n}\\n.property-panel-header[data-v-3fae4dee] {\\n  padding-top: 15px;\\n  padding-bottom: 5px;\\n}\\n.e-selected-style[data-v-3fae4dee] {\\n  border-color: #006ce6;\\n  border-width: 2px;\\n}\\n.control-section[data-v-3fae4dee] {\\n  padding-top: 0px;\\n  padding-bottom: 0px;\\n  padding-right: 0px;\\n}\\n.container-fluid[data-v-3fae4dee] {\\n  padding-left: 0px;\\n}\\n.col-xs-6[data-v-3fae4dee] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-LAWFB2C2EWGUDRRIFMAWSM4KIAGUNPN6ZM6KCWH3I3A3HNK7QZIA/Samples/diagram/drawing-tool/App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,6BAA6B;EAC7B,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;EAChB,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,mBAAmB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&id=3fae4dee&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.image-pattern-style[data-v-3fae4dee] {\\n  background-color: white;\\n  background-size: 70%;\\n  background-repeat: no-repeat;\\n  height: 45px;\\n  width: calc((100% - 12px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.image-pattern-style[data-v-3fae4dee]:hover {\\n  border-color: gray;\\n  border-width: 2px;\\n}\\n.row[data-v-3fae4dee] {\\n  margin-left: 0px;\\n  margin-right: 0px;\\n}\\n.row-header[data-v-3fae4dee] {\\n  font-size: 12px;\\n  font-weight: 500;\\n}\\n.e-checkbox-wrapper .e-label[data-v-3fae4dee] {\\n  font-size: 12px;\\n}\\n.property-panel-header[data-v-3fae4dee] {\\n  padding-top: 15px;\\n  padding-bottom: 5px;\\n}\\n.e-selected-style[data-v-3fae4dee] {\\n  border-color: #006ce6;\\n  border-width: 2px;\\n}\\n.control-section[data-v-3fae4dee] {\\n  padding-top: 0px;\\n  padding-bottom: 0px;\\n  padding-right: 0px;\\n}\\n.container-fluid[data-v-3fae4dee] {\\n  padding-left: 0px;\\n}\\n.col-xs-6[data-v-3fae4dee] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/drawing-tool/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/drawing-tool/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\n\nlet shape = [\n  { shapeName: \"BasicShape\", shapeId: \"Basic\" },\n  { shapeName: \"FlowShape\", shapeId: \"Flow\" },\n  { shapeName: \"Connector\", shapeId: \"Segment\" },\n  { shapeName: \"Path\", shapeId: \"Path\" },\n  { shapeName: \"Image\", shapeId: \"Image\" },\n  { shapeName: \"SVG\", shapeId: \"SVG\" },\n  { shapeName: \"Text\", shapeId: \"Text\" }\n];\nlet basic = [\n  \"Rectangle\",\n  \"Ellipse\",\n  \"Hexagon\",\n  \"Parallelogram\",\n  \"Triangle\",\n  \"Plus\",\n  \"Star\",\n  \"Pentagon\",\n  \"Heptagon\",\n  \"Octagon\",\n  \"Trapezoid\",\n  \"Decagon\",\n  \"RightTriangle\",\n  \"Cylinder\",\n  \"Diamond\"\n];\nlet flow = [\n  \"Process\",\n  \"Decision\",\n  \"Document\",\n  \"PreDefinedProcess\",\n  \"Terminator\",\n  \"PaperTap\",\n  \"DirectData\",\n  \"SequentialData\"\n];\nlet connector = [\"Straight\", \"Orthogonal\"];\nlet node;\nlet diagramInstance;\nlet interval;\ninterval = [\n  1,\n  9,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75,\n  0.25,\n  9.75\n];\nlet gridlines = {\n  lineColor: \"#e0e0e0\",\n  lineIntervals: interval\n};\nlet snapSettings = {\n  snapObjectDistance: 5,\n  constraints:\n    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToObject |\n    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].SnapToLines |\n    _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].ShowLines,\n  horizontalGridlines: gridlines,\n  verticalGridlines: gridlines\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"540px\",\n      snapSettings: snapSettings,\n      rulerSettings: {\n        showRulers: true,\n        dynamicGrid: false\n      },\n      //Sets the default values of a node\n      getNodeDefaults: (node) => {\n        let obj = node;\n        let basicShape = node.shape;\n        if (\n          basicShape.shape === \"Rectangle\" ||\n          basicShape.shape === \"Ellipse\"\n        ) {\n          obj.ports = getPorts(node);\n        } else if (basicShape.shape === \"Hexagon\") {\n          obj.ports = getHexagonPorts(node);\n        } else if (basicShape.shape === \"Pentagon\") {\n          obj.ports = getPentagonPorts(node);\n        } else if (basicShape.type === \"Path\") {\n          obj.ports = getPathPorts(node);\n        }\n      },\n      tool:_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].ContinuousDraw,\n      checkedlabel: \"Continous Draw\",\n      checkedchecked: true,\n      checkedchange: onChange\n    };\n  },\n  provide: {\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"UndoRedo\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"Snapping\"]]\n  },\n  mounted: function() {\n    diagramInstance = this.$refs.diagramObj.ej2Instances;\n    SetShape(\"Rectangle\");\n    let appearanceObj = document.getElementById(\"appearance\");\n    //Click Event used to decide the drawing object.\n    appearanceObj.onclick = (args) => {\n      let target = args.target;\n      let selectedElement = document.getElementsByClassName(\n        \"e-selected-style\"\n      );\n      if (\n        selectedElement.length &&\n        target.id !== \"\" &&\n        target.id !== \"checked\"\n      ) {\n        selectedElement[0].classList.remove(\"e-selected-style\");\n      }\n      if (!target.classList.contains(\"e-selected-style\")) {\n        target.classList.add(\"e-selected-style\");\n      }\n      if (target.className === \"image-pattern-style e-selected-style\") {\n        switch (target.id) {\n          case \"shape1\":\n            SetShape(\"Rectangle\");\n            break;\n          case \"shape2\":\n            SetShape(\"Ellipse\");\n            break;\n          case \"shape3\":\n            SetShape(\"Hexagon\");\n            break;\n          case \"shape4\":\n            SetShape(\"Pentagon\");\n            break;\n          case \"shape5\":\n            SetShape(\"Polygon\");\n            break;\n          case \"straight\":\n            setdrawobject(null, { type: \"Straight\" });\n            break;\n          case \"ortho\":\n            setdrawobject(null, { type: \"Orthogonal\" });\n            break;\n          case \"cubic\":\n            setdrawobject(null, { type: \"Bezier\" });\n            break;\n          case \"path\":\n            getPathShape();\n            target.classList.add(\"e-selected-style\");\n            break;\n          case \"image\":\n            getImageNode();\n            break;\n          case \"svg\":\n            getSVGNode();\n            break;\n          case \"text\":\n            getTextNode();\n            break;\n          default:\n            if (\n              selectedElement.length &&\n              target.id !== \"\" &&\n              target.id !== \"checked\"\n            ) {\n              selectedElement[0].classList.remove(\"e-selected-style\");\n            }\n        }\n      }\n    };\n  }\n}));\n\nfunction onChange(args) {\n  diagramInstance.tool = args.checked\n    ? _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].ContinuousDraw\n    : _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].DrawOnce;\n}\n\n//Enable drawing object.\nfunction setdrawobject(node, connector) {\n  let continuousDraw = document.getElementById(\"checked\");\n  if (!continuousDraw.checked) {\n    diagramInstance.tool = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].DrawOnce;\n  }\n  if (connector == null) {\n    diagramInstance.drawingObject = node;\n  } else {\n    diagramInstance.drawingObject = connector;\n  }\n  diagramInstance.dataBind();\n}\n//Enable drawing Tool.\nfunction enableTool() {\n  let continuousDraw = document.getElementById(\"checked\");\n  if (!continuousDraw.checked) {\n    diagramInstance.tool = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramTools\"].DrawOnce;\n  }\n  diagramInstance.dataBind();\n}\n\n//Set the Shape of the drawing Object.\nfunction SetShape(obj) {\n  let drawingshape;\n  drawingshape = { type: \"Basic\", shape: obj} ;\n  node = {\n    shape: drawingshape\n  };\n  diagramInstance.drawingObject = node;\n  enableTool();\n}\n//Set TextNode Shape.\nfunction getTextNode() {\n  let drawingshape;\n  drawingshape = { type: \"Text\" };\n  node = {\n    shape: drawingshape\n  };\n  setdrawobject(node, null);\n}\n//Set SVG Node\nfunction getSVGNode() {\n  // tslint:disable-next-line:max-line-length\n  let drawingshape;\n  drawingshape = {\n    type: \"Native\",\n    content: getPath()\n  };\n  node = {\n    shape: drawingshape\n  };\n  setdrawobject(node, null);\n}\n\nfunction getPath() {\n  let str =\n    '<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"350.000000pt\" ' +\n    'height=\"229.000000pt\" viewBox=\"0 0 350.000000 229.000000\" ' +\n    'preserveAspectRatio=\"xMidYMid meet\"> <metadata>' +\n    \" Created by potrace 1.11, written by Peter Selinger 2001-2013\" +\n    ' </metadata> <g transform=\"translate(0.000000,229.000000) scale(0.100000,-0.100000)\"' +\n    ' fill=\"#de6ca9\" stroke=\"none\"><path d=\"M0 1145 l0 -1145 1750 0 1750 0 0 1145 0 1145' +\n    \" -1750 0 -1750 0 0 -1145z m1434 186 c19 -8 26 -18 26 -37 0 -24 -3 -26\" +\n    \" -27 -19 -16 3 -58 9 -94 12 -63 5 -67 4 -88 -23 -23 -29 -21 -60 6 -81 8\" +\n    \" -6 47 -19 86 -29 55 -13 80 -25 106 -51 31 -31 33 -37 29 -88 -8 -94 -69\" +\n    \" -133 -193 -122 -90 7 -115 20 -115 58 0 26 3 30 18 24 91 -38 168 -41 204\" +\n    \" -8 23 21 23 75 1 96 -10 8 -49 23 -88 33 -88 22 -135 63 -135 118 0 92 67 140\" +\n    \" 181 131 31 -2 68 -9 83 -14z m854 -6 c38 -15 42 -21 42 -51 l0 -33 -47 25\" +\n    \" c-41 22 -58 25 -115 22 -58 -3 -72 -8 -97 -32 -79 -75 -59 -259 32 -297 35\" +\n    \" -15 106 -18 150 -6 26 7 27 10 27 67 l0 60 -50 0 c-47 0 -50 2 -50 25 0 25\" +\n    \" 1 25 80 25 l81 0 -3 -97 -3 -98 -40 -20 c-22 -10 -65 -21 -95 -23 -153 -11\" +\n    \" -242 74 -243 230 0 145 93 235 233 224 30 -2 74 -12 98 -21z m-638 -169 l67\" +\n    \" -178 40 103 c22 57 53 139 69 182 28 75 29 77 62 77 19 0 32 -4 30 -9 -1 -5\" +\n    \" -39 -104 -83 -220 l-80 -211 -37 0 c-35 0 -37 2 -56 53 -11 28 -48 124 -81 \" +\n    '211 -34 87 -61 163 -61 168 0 5 14 8 32 6 31 -3 32 -5 98 -182z\" />' +\n    \"</g> </svg>\";\n  return str;\n}\nfunction getImageNode() {\n  let drawingshape;\n  drawingshape = { type: \"Image\", source: \"././../../source/diagram/employee.png\" };\n  node = {\n    shape: drawingshape\n  };\n  setdrawobject(node, null);\n}\nfunction getPathShape() {\n  // tslint:disable-next-line:max-line-length\n  let drawingshape;\n  drawingshape = {\n    type: \"Path\",\n    data:\n      \"M540.3643,137.9336L546.7973,159.7016L570.3633,159.7296L550.7723,171.9366L558.9053,194.9966L540.3643,179.4996L521.8223,194.9966L529.9553,171.9366L510.3633,159.7296L533.9313,159.7016L540.3643,137.9336z\"\n  };\n  node = {\n    shape: drawingshape\n  };\n  setdrawobject(node, null);\n}\nfunction getPorts(obj) {\n  let ports = [\n    createPort(\"port1\", { x: 0, y: 0.5 }),\n    createPort(\"port2\", { x: 0.5, y: 1 }),\n    createPort(\"port3\", { x: 1, y: 0.5 }),\n    createPort(\"port4\", { x: 0.5, y: 0 })\n  ];\n  return ports;\n}\nfunction getPathPorts(obj) {\n  let ports = [\n    createPort(\"port1\", { x: 0.5, y: 0 }),\n    createPort(\"port2\", { x: 0, y: 0.39 }),\n    createPort(\"port3\", { x: 1, y: 0.39 }),\n    createPort(\"port4\", { x: 0.2, y: 1 }),\n    createPort(\"port5\", { x: 0.8, y: 1 })\n  ];\n  return ports;\n}\nfunction getHexagonPorts(obj) {\n  let ports = [\n    createPort(\"port1\", { x: 0, y: 0.5 }),\n    createPort(\"port2\", { x: 0.5, y: 0 }),\n    createPort(\"port3\", { x: 0.3, y: 0 }),\n    createPort(\"port4\", { x: 0.7, y: 0 }),\n    createPort(\"port5\", { x: 1, y: 0.5 }),\n    createPort(\"port6\", { x: 0.5, y: 1 }),\n    createPort(\"port7\", { x: 0.3, y: 1 }),\n    createPort(\"port8\", { x: 0.7, y: 1 })\n  ];\n  return ports;\n}\nfunction getPentagonPorts(obj) {\n  let ports = [\n    createPort(\"port1\", { x: 0.5, y: 0 }),\n    createPort(\"port2\", { x: 0, y: 0.4 }),\n    createPort(\"port3\", { x: 1, y: 0.4 }),\n    createPort(\"port4\", { x: 0.2, y: 1 }),\n    createPort(\"port5\", { x: 0.85, y: 1 })\n  ];\n  return ports;\n}\nfunction createPort(id, offset) {\n  let port = {\n    id: id,\n    shape: \"Square\",\n    offset: offset,\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortConstraints\"].Draw,\n    visibility: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"PortVisibility\"].Hover\n  };\n  return port;\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/drawing-tool/App.vue?vue&type=template&id=3fae4dee&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/drawing-tool/App.vue?vue&type=template&id=3fae4dee&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-9 control-section\" },\n      [\n        _c(\"ejs-diagram\", {\n          ref: \"diagramObj\",\n          staticStyle: { display: \"block\" },\n          attrs: {\n            id: \"diagram\",\n            width: _vm.width,\n            height: _vm.height,\n            snapSettings: _vm.snapSettings,\n            rulerSettings: _vm.rulerSettings,\n            tool: _vm.tool\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\"div\", { staticClass: \"property-panel-header\" }, [\n        _vm._v(\"\\n      Properties\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"row  property-panel-content\",\n          attrs: { id: \"appearance\" }\n        },\n        [\n          _c(\n            \"div\",\n            {\n              staticClass: \"row row-header\",\n              staticStyle: { \"padding-top\": \"10px\" }\n            },\n            [_vm._v(\"\\n        Shapes\\n      \")]\n          ),\n          _vm._v(\" \"),\n          _vm._m(0),\n          _vm._v(\" \"),\n          _vm._m(1),\n          _vm._v(\" \"),\n          _vm._m(2),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"row row-header\",\n              staticStyle: { \"padding-top\": \"10px\" }\n            },\n            [_vm._v(\"\\n        Connector\\n      \")]\n          ),\n          _vm._v(\" \"),\n          _vm._m(3),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            { staticClass: \"row\", staticStyle: { \"padding-top\": \"10px\" } },\n            [\n              _c(\"ejs-checkbox\", {\n                attrs: {\n                  id: \"checked\",\n                  label: _vm.checkedlabel,\n                  checked: _vm.checkedchecked,\n                  change: _vm.checkedchange\n                }\n              })\n            ],\n            1\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(4),\n    _vm._v(\" \"),\n    _vm._m(5)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n      [\n        _c(\"div\", {\n          staticClass: \"image-pattern-style e-selected-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/basicshape/DrawingTool_1.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { title: \"Retangle\", id: \"shape1\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/basicshape/DrawingTool_2.png)\",\n            margin: \"0px 3px\"\n          },\n          attrs: { title: \"Ellipse\", id: \"shape2\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/basicshape/DrawingTool_3.png)\"\n          },\n          attrs: { title: \"Hexagon\", id: \"shape3\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n      [\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/basicshape/DrawingTool_4.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { title: \"Pentagon\", id: \"shape4\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/basicshape/DrawingTool_5.png)\",\n            margin: \"0px 3px\"\n          },\n          attrs: { title: \"Polygon\", id: \"shape5\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/DrawingTool_6.png)\"\n          },\n          attrs: { title: \"Path\", id: \"path\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n      [\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/DrawingTool_7.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { title: \"Image\", id: \"image\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/DrawingTool_8.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { title: \"SVG\", id: \"svg\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/DrawingTool_9.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { title: \"Text\", id: \"text\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n      [\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/connector/Connectors_1.png)\",\n            \"margin-right\": \"3px\"\n          },\n          attrs: { id: \"straight\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/connector/Connectors_2.png)\",\n            margin: \"0px 3px\"\n          },\n          attrs: { id: \"ortho\" }\n        }),\n        _vm._v(\" \"),\n        _c(\"div\", {\n          staticClass: \"image-pattern-style\",\n          staticStyle: {\n            \"background-image\":\n              \"url(././../../source/diagram/Images/drawingTool/connector/Connectors_3.png)\"\n          },\n          attrs: { id: \"cubic\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes how to build a diagram interactively using drawing tools. Continuous draw option, snapping, and undo/redo support are enabled to easily draw diagrams.\\n        Rulers, gridlines, and snapping options are enabled to easily align objects.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This example shows how to draw shapes and connections interactively. In addition to that, rulers, gridlines, and snapping options are enabled to assist drawing. \\n        \\n        The \"\n        ),\n        _c(\"code\", [_vm._v(\"tool\")]),\n        _vm._v(\" property can be used to enable drawing. Add \"),\n        _c(\"code\", [_vm._v(\"DrawOnce\")]),\n        _vm._v(\" or \"),\n        _c(\"code\", [_vm._v(\"ContinousDraw\")]),\n        _vm._v(\" option to the\\n        \"),\n        _c(\"code\", [_vm._v(\"tool\")]),\n        _vm._v(\" property of the diagram. The \"),\n        _c(\"code\", [_vm._v(\"drawingObject\")]),\n        _vm._v(\n          \" property can be used to define a shape/connector to be drawn.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Few shape and connector templates are added in the palette. To draw basic shapes and connectors, click the templates in the palette.\\n        For polygon shapes, a corner/point will be added to the polygon for each mouse left button click. Drawing will be completed either on mouse right button click or double click.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The diagram component’s features are segregated into individual feature-wise modules. To enable undo and redo support, inject \"\n        ),\n        _c(\"code\", [_vm._v(\"UndoRedo\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { diagram: [UndoRedo] }\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/drawing-tool/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });