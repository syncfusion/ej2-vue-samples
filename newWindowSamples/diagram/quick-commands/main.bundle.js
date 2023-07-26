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
/******/ 		"diagram/quick-commands/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/quick-commands/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/quick-commands/App.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/quick-commands/App.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_2f812aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=2f812aec&scoped=true& */ \"./Samples/diagram/quick-commands/App.vue?vue&type=template&id=2f812aec&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/diagram/quick-commands/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_2f812aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css& */ \"./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_2f812aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_2f812aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2f812aec\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/quick-commands/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?");

/***/ }),

/***/ "./Samples/diagram/quick-commands/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/diagram/quick-commands/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?");

/***/ }),

/***/ "./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2f812aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2f812aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2f812aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2f812aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_2f812aec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?");

/***/ }),

/***/ "./Samples/diagram/quick-commands/App.vue?vue&type=template&id=2f812aec&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./Samples/diagram/quick-commands/App.vue?vue&type=template&id=2f812aec&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2f812aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=2f812aec&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=template&id=2f812aec&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2f812aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_2f812aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?");

/***/ }),

/***/ "./Samples/diagram/quick-commands/main.js":
/*!************************************************!*\
  !*** ./Samples/diagram/quick-commands/main.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/quick-commands/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.image-pattern-style[data-v-2f812aec] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 50px;\\n  width: calc((100% - 18px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.image-pattern-style[data-v-2f812aec]:hover {\\n  border-color: gray;\\n  border-width: 2px;\\n}\\n.row[data-v-2f812aec] {\\n  margin: 10px 0px 0px 0px;\\n}\\n.e-selected-style[data-v-2f812aec] {\\n  border-color: #006ce6;\\n  border-width: 2px;\\n}\\n.row-header[data-v-2f812aec] {\\n  font-size: 15px;\\n  font-weight: 500;\\n  margin-top: 10px;\\n}\\n.property-panel-header[data-v-2f812aec] {\\n  padding-top: 2px;\\n  padding-bottom: 5px;\\n}\\n.e-checkbox-wrapper .e-label[data-v-2f812aec] {\\n  font-size: 12px;\\n}\\n.control-section[data-v-2f812aec] {\\n  padding-top: 0px;\\n  padding-bottom: 0px;\\n  padding-right: 0px;\\n  padding-left: 0px;\\n}\\n.container-fluid[data-v-2f812aec] {\\n  padding-left: 0px;\\n}\\n.col-xs-6[data-v-2f812aec] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n  padding-top: 5px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/grams-vue-samples_release_22.1.1/Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,+BAA+B;EAC/B,gBAAgB;EAChB,0BAA0B;EAC1B,4BAA4B;EAC5B,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.image-pattern-style[data-v-2f812aec] {\\n  background-color: white;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  height: 50px;\\n  width: calc((100% - 18px) / 3);\\n  cursor: pointer;\\n  border: 1px solid #d5d5d5;\\n  background-position: center;\\n  float: left;\\n}\\n.image-pattern-style[data-v-2f812aec]:hover {\\n  border-color: gray;\\n  border-width: 2px;\\n}\\n.row[data-v-2f812aec] {\\n  margin: 10px 0px 0px 0px;\\n}\\n.e-selected-style[data-v-2f812aec] {\\n  border-color: #006ce6;\\n  border-width: 2px;\\n}\\n.row-header[data-v-2f812aec] {\\n  font-size: 15px;\\n  font-weight: 500;\\n  margin-top: 10px;\\n}\\n.property-panel-header[data-v-2f812aec] {\\n  padding-top: 2px;\\n  padding-bottom: 5px;\\n}\\n.e-checkbox-wrapper .e-label[data-v-2f812aec] {\\n  font-size: 12px;\\n}\\n.control-section[data-v-2f812aec] {\\n  padding-top: 0px;\\n  padding-bottom: 0px;\\n  padding-right: 0px;\\n  padding-left: 0px;\\n}\\n.container-fluid[data-v-2f812aec] {\\n  padding-left: 0px;\\n}\\n.col-xs-6[data-v-2f812aec] {\\n  padding-left: 0px;\\n  padding-right: 0px;\\n  padding-top: 5px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/quick-commands/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DiagramPlugin\"]);\nlet diagramInstance;\n\n//Defines the nodes collection in diagram\nlet nodes = [\n  {\n    id: \"NewIdea\",\n    width: 150,\n    height: 60,\n    offsetX: 300,\n    offsetY: 60,\n    shape: { type: \"Flow\", shape: \"Terminator\" },\n    annotations: [{ content: \"New idea identified\" }]\n  },\n  {\n    id: \"Meeting\",\n    width: 150,\n    height: 60,\n    offsetX: 300,\n    offsetY: 155,\n    shape: { type: \"Flow\", shape: \"Process\" },\n    annotations: [{ content: \"Meeting with board\" }]\n  },\n  {\n    id: \"BoardDecision\",\n    width: 150,\n    height: 110,\n    offsetX: 300,\n    offsetY: 280,\n    shape: { type: \"Flow\", shape: \"Decision\" },\n    annotations: [{ content: \"Board decides \\n whether to proceed\" }]\n  },\n  {\n    id: \"Project\",\n    width: 150,\n    height: 100,\n    offsetX: 300,\n    offsetY: 430,\n    shape: { type: \"Flow\", shape: \"Decision\" },\n    annotations: [{ content: \"Find Project manager\" }]\n  },\n  {\n    id: \"End\",\n    width: 150,\n    height: 60,\n    offsetX: 300,\n    offsetY: 555,\n    shape: { type: \"Flow\", shape: \"Process\" },\n    annotations: [{ content: \"Implement and Deliver\" }]\n  },\n  {\n    id: \"Decision\",\n    width: 250,\n    height: 60,\n    offsetX: 550,\n    offsetY: 60,\n    shape: { type: \"Flow\", shape: \"Card\" },\n    annotations: [{ content: \"Decision process for new software ideas\" }]\n  },\n  {\n    id: \"Reject\",\n    width: 150,\n    height: 60,\n    offsetX: 550,\n    offsetY: 280,\n    shape: { type: \"Flow\", shape: \"Process\" },\n    annotations: [{ content: \"Reject\" }]\n  },\n  {\n    id: \"Resources\",\n    width: 150,\n    height: 60,\n    offsetX: 550,\n    offsetY: 430,\n    shape: { type: \"Flow\", shape: \"Process\" },\n    annotations: [{ content: \"Hire new resources\" }]\n  }\n];\n\n//Defines the connectors collection in diagram\nlet connectors = [\n  {\n    id: \"connector1\",\n    type: \"Straight\",\n    sourceID: \"NewIdea\",\n    targetID: \"Meeting\"\n  },\n  {\n    id: \"connector2\",\n    type: \"Straight\",\n    sourceID: \"Meeting\",\n    targetID: \"BoardDecision\"\n  },\n  {\n    id: \"connector3\",\n    type: \"Straight\",\n    sourceID: \"BoardDecision\",\n    targetID: \"Project\"\n  },\n  { id: \"connector4\", type: \"Straight\", sourceID: \"Project\", targetID: \"End\" },\n  {\n    id: \"connector5\",\n    type: \"Straight\",\n    sourceID: \"BoardDecision\",\n    targetID: \"Reject\"\n  },\n  {\n    id: \"connector6\",\n    type: \"Straight\",\n    sourceID: \"Project\",\n    targetID: \"Resources\"\n  }\n];\n\n//Defines the user handle collection for nodes in diagram\nlet handles= [\n  {\n    name: \"clone\",\n    pathData:\n      \"M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,\" +\n      \"0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z \" +\n      \"M68.5,72.5h-30V34.4h30V72.5z\",\n    visible: true,\n    offset: 0,\n    side: \"Bottom\",\n    margin: { top: 0, bottom: 0, left: 0, right: 0 }\n  }\n];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      width: \"100%\",\n      height: \"600px\",\n      nodes: nodes,\n      connectors: connectors,\n      selectedItems: {\n        constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SelectorConstraints\"].UserHandle,\n        userHandles: handles\n      },\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"SnapConstraints\"].None },\n      //set Node default value\n      getNodeDefaults: (node) => {\n        return {\n          style: { fill: \"#578CA9\", strokeColor: \"none\" },\n          annotations: [{ style: { color: \"white\" } }]\n        };\n      },\n      //set CustomTool\n      getCustomTool: getTool\n    };\n  },\n  provide: {\n    diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"DataBinding\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"MindMap\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"HierarchicalTree\"]]\n  },\n  mounted: function() {\n    diagramInstance = this.$refs.diagramObj.ej2Instances;\n    diagramInstance.fitToPage();\n    diagramInstance.select([diagramInstance.nodes[0]]);\n    let appearanceObj = document.getElementById(\"appearance\");\n    let patternObj= document.getElementById(\"pattern\");\n    //Change the postion of the UserHandle\n    appearanceObj.onclick = (args) => {\n    let target = args.target ;\n    let appearanceBlock = document.getElementById('appearance');\n    let selectedElement = appearanceBlock.getElementsByClassName('e-selected-style');\n    if (selectedElement.length) {\n      selectedElement[0].classList.remove('e-selected-style');\n    }\n    if (target.className === 'image-pattern-style') {\n      switch (target.id) {\n        case 'left':\n          setuserhandleposition(0, 'Bottom', target);\n          break;\n        case 'right':\n          setuserhandleposition(1, 'Bottom', target);\n          break;\n        case 'topr':\n          setuserhandleposition(0, 'Right', target);\n          break;\n      }\n    }\n    diagramInstance.dataBind();\n    };\n    //Change the Appearence of the UserHandle\n    patternObj.onclick = (args) => {\n    let target = args.target;\n    let patternBlock = document.getElementById('pattern');\n    let selectedElement = patternBlock.getElementsByClassName('e-selected-style');\n    if (selectedElement.length) {\n      selectedElement[0].classList.remove('e-selected-style');\n    }\n    if (target.className === 'image-pattern-style') {\n      switch (target.id) {\n        case 'pattern1':\n          applyuserhandlestyle('#1E90FF', target);\n          break;\n        case 'pattern2':\n          applyuserhandlestyle('#3CB371', target);\n          break;\n        case 'pattern3':\n          applyuserhandlestyle('#FF6347', target);\n          break;\n      }\n    }\n      diagramInstance.dataBind();\n    };\n  }\n}));\n\n//Enable the clone Tool for UserHandle.\nfunction getTool(action) {\n  let tool;\n  if (action === \"clone\") {\n    tool = new CloneTool(diagramInstance.commandHandler);\n  }\n  return tool;\n}\n\n//set the position of the userhandle.\nfunction setuserhandleposition(\n  offset,\n  side,\n  target\n) {\n  if (diagramInstance.selectedItems.userHandles) {\n    diagramInstance.selectedItems.userHandles[0].offset = offset;\n    diagramInstance.selectedItems.userHandles[0].side = side;\n  }\n  target.classList.add(\"e-selected-style\");\n}\n//set the style of the userhandle.\nfunction applyuserhandlestyle(bgcolor, target) {\n  if (diagramInstance.selectedItems.userHandles) {\n    diagramInstance.selectedItems.userHandles[0].backgroundColor = bgcolor;\n    diagramInstance.selectedItems.userHandles[0].pathColor = \"White\";\n  }\n  target.classList.add(\"e-selected-style\");\n}\n\n//Defines the clone tool used to copy Node/Connector\nclass CloneTool extends _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"MoveTool\"] {\n   mouseDown(args) {\n    let newObject;\n    if (\n      diagramInstance.selectedItems.nodes &&\n      diagramInstance.selectedItems.connectors\n    ) {\n      if (diagramInstance.selectedItems.nodes.length > 0) {\n        newObject = Object(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"cloneObject\"])(\n          diagramInstance.selectedItems.nodes[0]\n        );\n      } else {\n        newObject = Object(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"cloneObject\"])(\n          diagramInstance.selectedItems.connectors[0]\n        );\n      }\n    }\n    newObject.id += Object(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_1__[\"randomId\"])();\n    diagramInstance.paste([newObject]);\n    args.source = diagramInstance.nodes[\n      diagramInstance.nodes.length - 1\n    ];\n    args.sourceWrapper = args.source.wrapper;\n    super.mouseDown(args);\n    this.inAction = true;\n  }\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=template&id=2f812aec&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/quick-commands/App.vue?vue&type=template&id=2f812aec&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\"ejs-diagram\", {\n            ref: \"diagramObj\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              id: \"diagram\",\n              width: _vm.width,\n              height: _vm.height,\n              nodes: _vm.nodes,\n              connectors: _vm.connectors,\n              getNodeDefaults: _vm.getNodeDefaults,\n              selectedItems: _vm.selectedItems,\n              getCustomTool: _vm.getCustomTool,\n              snapSettings: _vm.snapSettings,\n            },\n          }),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"div\", { staticClass: \"property-panel-header\" }, [\n        _vm._v(\"\\n      Properties\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          staticClass: \"row property-panel-content\",\n          attrs: { id: \"appearance\" },\n        },\n        [\n          _c(\"div\", { staticClass: \"row row-header\" }, [\n            _vm._v(\"\\n            Appearance\\n        \"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\"div\", { staticClass: \"row row-header1\" }, [\n              _vm._v(\"\\n                Alignment\\n            \"),\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"div\", {\n                  staticClass: \"image-pattern-style e-selected-style\",\n                  staticStyle: {\n                    \"background-image\":\n                      \"url(././../../source/diagram/Images/user-handle/bottoml.png)\",\n                    \"margin-right\": \"4px\",\n                  },\n                  attrs: { id: \"left\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", {\n                  staticClass: \"image-pattern-style\",\n                  staticStyle: {\n                    \"background-image\":\n                      \"url(././../../source/diagram/Images/user-handle/bottomr.png)\",\n                    margin: \"0px 4px\",\n                  },\n                  attrs: { id: \"right\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", {\n                  staticClass: \"image-pattern-style\",\n                  staticStyle: {\n                    \"background-image\":\n                      \"url(././../../source/diagram/Images/user-handle/topr.png)\",\n                  },\n                  attrs: { id: \"topr\" },\n                }),\n              ]\n            ),\n          ]),\n        ]\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"row property-panel-content\", attrs: { id: \"pattern\" } },\n        [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\"div\", { staticClass: \"row row-header1\" }, [\n              _vm._v(\"\\n                    pattern\\n                \"),\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"row\", staticStyle: { \"padding-top\": \"8px\" } },\n              [\n                _c(\"div\", {\n                  staticClass: \"image-pattern-style\",\n                  staticStyle: {\n                    \"background-image\":\n                      \"url(././../../source/diagram/Images/user-handle/pattern1.png)\",\n                    \"margin-right\": \"4px\",\n                  },\n                  attrs: { id: \"pattern1\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", {\n                  staticClass: \"image-pattern-style\",\n                  staticStyle: {\n                    \"background-image\":\n                      \"url(././../../source/diagram/Images/user-handle/pattern2.png)\",\n                    margin: \"0px 4px\",\n                  },\n                  attrs: { id: \"pattern2\" },\n                }),\n                _vm._v(\" \"),\n                _c(\"div\", {\n                  staticClass: \"image-pattern-style\",\n                  staticStyle: {\n                    \"background-image\":\n                      \"url(././../../source/diagram/Images/user-handle/pattern3.png)\",\n                  },\n                  attrs: { id: \"pattern3\" },\n                }),\n              ]\n            ),\n          ]),\n        ]\n      ),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes a simple flow diagram along with options to execute the frequently used commands using user handles.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        User handles are icons that are placed around the node to run the frequently used commands. This example shows how to render\\n        and configure user handles and how to interact with the diagram using user handles. The \"\n        ),\n        _c(\"code\", [_vm._v(\"userHandles\")]),\n        _vm._v(\" property of the \"),\n        _c(\"code\", [_vm._v(\"selectedItems\")]),\n        _vm._v(\n          \" can be used to add user handles to the diagram. Click the templates in the property\\n        panel, to customize the size, position, and appearance of the user handles.\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/quick-commands/App.vue?vue&type=style&index=0&id=2f812aec&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"23535c46\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/diagram/quick-commands/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });