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
/******/ 		"circular-gauge/apple-watch-rings/main": 0
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
/******/ 	deferredModules.push(["./Samples/circular-gauge/apple-watch-rings/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/circular-gauge/apple-watch-rings/App.vue":
/*!**********************************************************!*\
  !*** ./Samples/circular-gauge/apple-watch-rings/App.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7f1dc574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7f1dc574&scoped=true& */ \"./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=template&id=7f1dc574&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css& */ \"./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7f1dc574_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7f1dc574_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7f1dc574\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/circular-gauge/apple-watch-rings/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7f1dc574_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=template&id=7f1dc574&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=template&id=7f1dc574&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7f1dc574_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7f1dc574&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=template&id=7f1dc574&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7f1dc574_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7f1dc574_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?");

/***/ }),

/***/ "./Samples/circular-gauge/apple-watch-rings/main.js":
/*!**********************************************************!*\
  !*** ./Samples/circular-gauge/apple-watch-rings/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/circular-gauge/apple-watch-rings/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.panel[data-v-7f1dc574] {\\n     width: 105% !important;\\n     height: 80px !important;\\n     margin-left: 5% !important;\\n     margin-top: 15% !important;\\n     border-color: lightgray;\\n     float: left;\\n     background-color: transparent;\\n}\\n.content[data-v-7f1dc574] {\\n     float: left !important;\\n     margin-left: 62px !important;\\n     margin-top: 6% !important;\\n     text-align: left !important;\\n     position: absolute;\\n}\\n@media screen and (max-width: 1160px) {\\n.panel[data-v-7f1dc574] {\\n         width: 115% !important;\\n}\\n.firstcontent[data-v-7f1dc574] {\\n         font-size: 13px !important;\\n}\\n.secondcontent[data-v-7f1dc574] {\\n         font-size: 15px !important;\\n}\\n}\\n@media screen and (max-width: 990px) {\\n.panel[data-v-7f1dc574] {\\n         width: 50% !important;\\n         height: 80px !important;\\n         margin-left: 27% !important;\\n         margin-top: 0% !important;\\n}\\n.subgauge[data-v-7f1dc574] {\\n         margin-left: 8% !important;\\n         margin-top: 1% !important;\\n}\\n.content[data-v-7f1dc574] {\\n         margin-left: 18% !important;\\n         margin-top: 2% !important;\\n}\\n.firstcontent[data-v-7f1dc574] {\\n         font-size: 16px !important;\\n}\\n.secondcontent[data-v-7f1dc574] {\\n         font-size: 18px !important;\\n}\\n}\\n@media screen and (max-width: 410px) {\\n#column1[data-v-7f1dc574] {\\n         margin-left: -9% !important;\\n}\\n.subgauge[data-v-7f1dc574] {\\n         margin-left: 3% !important;\\n}\\n.panel[data-v-7f1dc574] {\\n         width: 55% !important;\\n}\\n.content[data-v-7f1dc574] {\\n         margin-top: 3% !important;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/largauge-vue-samples_master-FOCUXFRRBF2GRZOTREACJNQRI2Z3G4V37JZFWWJINIPIDLSBG4DQ/Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;KACK,uBAAuB;KACvB,wBAAwB;KACxB,2BAA2B;KAC3B,2BAA2B;KAC3B,wBAAwB;KACxB,YAAY;KACZ,8BAA8B;CAClC;AACD;KACK,uBAAuB;KACvB,6BAA6B;KAC7B,0BAA0B;KAC1B,4BAA4B;KAC5B,mBAAmB;CACvB;AACD;AACA;SACS,uBAAuB;CAC/B;AACD;SACS,2BAA2B;CACnC;AACD;SACS,2BAA2B;CACnC;CACA;AACD;AACA;SACS,sBAAsB;SACtB,wBAAwB;SACxB,4BAA4B;SAC5B,0BAA0B;CAClC;AACD;SACS,2BAA2B;SAC3B,0BAA0B;CAClC;AACD;SACS,4BAA4B;SAC5B,0BAA0B;CAClC;AACD;SACS,2BAA2B;CACnC;AACD;SACS,2BAA2B;CACnC;CACA;AACD;AACA;SACS,4BAA4B;CACpC;AACD;SACS,2BAA2B;CACnC;AACD;SACS,sBAAsB;CAC9B;AACD;SACS,0BAA0B;CAClC;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=7f1dc574&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.panel[data-v-7f1dc574] {\\n     width: 105% !important;\\n     height: 80px !important;\\n     margin-left: 5% !important;\\n     margin-top: 15% !important;\\n     border-color: lightgray;\\n     float: left;\\n     background-color: transparent;\\n}\\n.content[data-v-7f1dc574] {\\n     float: left !important;\\n     margin-left: 62px !important;\\n     margin-top: 6% !important;\\n     text-align: left !important;\\n     position: absolute;\\n}\\n@media screen and (max-width: 1160px) {\\n.panel[data-v-7f1dc574] {\\n         width: 115% !important;\\n}\\n.firstcontent[data-v-7f1dc574] {\\n         font-size: 13px !important;\\n}\\n.secondcontent[data-v-7f1dc574] {\\n         font-size: 15px !important;\\n}\\n}\\n@media screen and (max-width: 990px) {\\n.panel[data-v-7f1dc574] {\\n         width: 50% !important;\\n         height: 80px !important;\\n         margin-left: 27% !important;\\n         margin-top: 0% !important;\\n}\\n.subgauge[data-v-7f1dc574] {\\n         margin-left: 8% !important;\\n         margin-top: 1% !important;\\n}\\n.content[data-v-7f1dc574] {\\n         margin-left: 18% !important;\\n         margin-top: 2% !important;\\n}\\n.firstcontent[data-v-7f1dc574] {\\n         font-size: 16px !important;\\n}\\n.secondcontent[data-v-7f1dc574] {\\n         font-size: 18px !important;\\n}\\n}\\n@media screen and (max-width: 410px) {\\n#column1[data-v-7f1dc574] {\\n         margin-left: -9% !important;\\n}\\n.subgauge[data-v-7f1dc574] {\\n         margin-left: 3% !important;\\n}\\n.panel[data-v-7f1dc574] {\\n         width: 55% !important;\\n}\\n.content[data-v-7f1dc574] {\\n         margin-top: 3% !important;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-circulargauge */ \"./node_modules/@syncfusion/ej2-vue-circulargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"CircularGaugePlugin\"]);\n\nlet annotationTemplate_1 = '<div id=\"annotation1\"><img style=\"width:22px;height:22px;\" src=\"./../../source/circular-gauge/images/image1.svg\" /></div>';\nlet annotationTemplate_2 = '<div id=\"annotation2\"><img style=\"width:20px;height:20px;\" src=\"./../../source/circular-gauge/images/image2.svg\" /></div>';\nlet annotationTemplate_3 = '<div id=\"annotation3\"><img style=\"width:22px;height:22px;\" src=\"./../../source/circular-gauge/images/image3.svg\" /></div>';\nlet annotationTemplate_4 = '<div id=\"annotation4\"><img style=\"width:17px;height:17px;\" src=\"./../../source/circular-gauge/images/image1.svg\" /></div>';\nlet annotationTemplate_5 = '<div id=\"annotation5\"><img style=\"width:15px;height:15px;\" src=\"./../../source/circular-gauge/images/image2.svg\" /></div>';\nlet annotationTemplate_6 = '<div id=\"annotation6\"><img style=\"width:17px;height:17px;\" src=\"./../../source/circular-gauge/images/image3.svg\" /></div>';\n\nlet annotationTemplate_7 = '<div id=\"annotation4\"><img style=\"width:17px;height:17px;\" src=\"./../../source/circular-gauge/images/image4.svg\" /></div>';\nlet annotationTemplate_8 = '<div id=\"annotation5\"><img style=\"width:15px;height:15px;\" src=\"./../../source/circular-gauge/images/image5.svg\" /></div>';\nlet annotationTemplate_9 = '<div id=\"annotation6\"><img style=\"width:17px;height:17px;\" src=\"./../../source/circular-gauge/images/image6.svg\" /></div>';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n   data:function(){\n    return{\n            startAngle: 0,\n            endAngle: 360,\n            majorTicks: {\n                width: 0\n            },\n            lineStyle:  { width: 0 },\n            minorTicks: {\n                width: 0\n            },\n             labelStyle: {\n                position: 'Inside', useRangeColor: true,\n                font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }\n            },\n            color:  '#e5ce20',\n            annotations_1: [{\n                angle: 0, radius: '0%', zIndex: '1',\n                content: annotationTemplate_4\n            }],\n            annotations_2: [{\n                angle: 0, radius: '0%', zIndex: '1',\n                content: annotationTemplate_5\n            }],\n            annotations_3: [{\n                angle: 0, radius: '0%', zIndex: '1',\n                content: annotationTemplate_6\n            }],\n            ranges_1: [\n                    {\n                start: 0, end: 100,\n                radius: '100%',\n                startWidth: 8, endWidth: 8,\n                color: '#E30219', opacity: 0.2\n            }],\n            ranges_2: [\n                   {\n                start: 0, end: 100,\n                radius: '100%',\n                startWidth: 8, endWidth: 8,\n                color: '#3EDE00', opacity: 0.2\n            }],\n            ranges_3: [\n                   {\n                start: 0, end: 100,\n                radius: '100%',\n                startWidth: 8, endWidth: 8,\n                color: '#18F8F6', opacity: 0.2\n            }],\n            annotations: [{\n                  angle: 8, radius: '80%', zIndex: '1',\n                content: annotationTemplate_1\n            },{\n                  angle: 11, radius: '58%', zIndex: '1',\n                content: annotationTemplate_2\n            },{\n                 angle: 16, radius: '36%', zIndex: '1',\n                content: annotationTemplate_3\n            }\n            ],\n            titleStyle: { size: '18px', },\n            ranges: [\n                    {\n                start: 0, end: 100,\n                radius: '90%',\n                startWidth: 40, endWidth: 40,\n                color: '#E30219', opacity: 0.2\n            },\n            {\n                start: 0, end: 100,\n                radius: '68%',\n                startWidth: 40, endWidth: 40,\n                color: '#3EDE00', opacity: 0.2\n            },\n            {\n                start: 0, end: 100,\n                radius: '46%',\n                startWidth: 40, endWidth: 40,\n                color: '#18F8F6', opacity: 0.2\n            }\n            ],\n            type: 'RangeBar'\n    }\n   },\n   provide:{\n    circulargauge: [_syncfusion_ej2_vue_circulargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /*custom code end */\n    load1: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n         if (selectedTheme === 'highcontrast') {\n            args.gauge.axes[0].annotations[0].content = annotationTemplate_7;\n        }\n    },\n    load2: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        if (selectedTheme === 'highcontrast') {\n            args.gauge.axes[0].annotations[0].content = annotationTemplate_8;\n        }\n    },\n    load3: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        if (selectedTheme === 'highcontrast') {\n            args.gauge.axes[0].annotations[0].content = annotationTemplate_9;\n        }\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=template&id=7f1dc574&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/circular-gauge/apple-watch-rings/App.vue?vue&type=template&id=7f1dc574&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-lg-12 col-md-12\" }, [\n        _c(\"div\", { staticClass: \"row\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-lg-9 col-md-9\",\n              staticStyle: { \"margin-left\": \"-5%\" },\n              attrs: { id: \"column1\" }\n            },\n            [\n              _c(\n                \"ejs-circulargauge\",\n                {\n                  ref: \"circulargauge\",\n                  staticStyle: { display: \"block\" },\n                  attrs: {\n                    align: \"center\",\n                    id: \"gauge1\",\n                    load: _vm.load,\n                    width: \"400px\",\n                    height: \"400px\"\n                  }\n                },\n                [\n                  _c(\n                    \"e-axes\",\n                    [\n                      _c(\n                        \"e-axis\",\n                        {\n                          attrs: {\n                            startAngle: _vm.startAngle,\n                            endAngle: _vm.endAngle,\n                            majorTicks: _vm.majorTicks,\n                            lineStyle: _vm.lineStyle,\n                            minorTicks: _vm.minorTicks,\n                            labelStyle: _vm.labelStyle,\n                            annotations: _vm.annotations,\n                            ranges: _vm.ranges\n                          }\n                        },\n                        [\n                          _c(\n                            \"e-pointers\",\n                            [\n                              _c(\"e-pointer\", {\n                                attrs: {\n                                  roundedCornerRadius: 25,\n                                  value: \"65\",\n                                  radius: \"90%\",\n                                  color: \"#E2011A\",\n                                  type: _vm.type,\n                                  pointerWidth: 40\n                                }\n                              }),\n                              _vm._v(\" \"),\n                              _c(\"e-pointer\", {\n                                attrs: {\n                                  roundedCornerRadius: 25,\n                                  value: \"43\",\n                                  radius: \"68%\",\n                                  color: \"#3FE000\",\n                                  type: _vm.type,\n                                  pointerWidth: 40\n                                }\n                              }),\n                              _vm._v(\" \"),\n                              _c(\"e-pointer\", {\n                                attrs: {\n                                  roundedCornerRadius: 25,\n                                  value: \"58\",\n                                  radius: \"46%\",\n                                  color: \"#00C9E6\",\n                                  type: _vm.type,\n                                  pointerWidth: 40\n                                }\n                              })\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-lg-3 col-md-3\",\n              staticStyle: { height: \"400px\", \"margin-left\": \"-9%\" }\n            },\n            [\n              _c(\"div\", [\n                _c(\"div\", { staticClass: \"panel\" }, [\n                  _c(\n                    \"div\",\n                    { staticStyle: { float: \"left\" } },\n                    [\n                      _c(\n                        \"ejs-circulargauge\",\n                        {\n                          ref: \"circulargauge1\",\n                          staticStyle: { display: \"block:height:250px\" },\n                          attrs: {\n                            align: \"center\",\n                            id: \"gauge2\",\n                            load: _vm.load1,\n                            width: \"65px\",\n                            height: \"65px\"\n                          }\n                        },\n                        [\n                          _c(\n                            \"e-axes\",\n                            [\n                              _c(\n                                \"e-axis\",\n                                {\n                                  attrs: {\n                                    startAngle: _vm.startAngle,\n                                    endAngle: _vm.endAngle,\n                                    majorTicks: _vm.majorTicks,\n                                    lineStyle: _vm.lineStyle,\n                                    minorTicks: _vm.minorTicks,\n                                    labelStyle: _vm.labelStyle,\n                                    annotations: _vm.annotations_1,\n                                    ranges: _vm.ranges_1\n                                  }\n                                },\n                                [\n                                  _c(\n                                    \"e-pointers\",\n                                    [\n                                      _c(\"e-pointer\", {\n                                        attrs: {\n                                          roundedCornerRadius: 5,\n                                          value: \"65\",\n                                          radius: \"100%\",\n                                          color: \"#E2011A\",\n                                          type: _vm.type,\n                                          pointerWidth: 8\n                                        }\n                                      })\n                                    ],\n                                    1\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _vm._m(0)\n                ]),\n                _vm._v(\" \"),\n                _c(\"br\"),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"panel\" }, [\n                  _c(\n                    \"div\",\n                    { staticStyle: { float: \"left\" } },\n                    [\n                      _c(\n                        \"ejs-circulargauge\",\n                        {\n                          ref: \"circulargauge2\",\n                          staticStyle: { display: \"block\" },\n                          attrs: {\n                            align: \"center\",\n                            id: \"gauge3\",\n                            load: _vm.load2,\n                            width: \"65px\",\n                            height: \"65px\"\n                          }\n                        },\n                        [\n                          _c(\n                            \"e-axes\",\n                            [\n                              _c(\n                                \"e-axis\",\n                                {\n                                  attrs: {\n                                    startAngle: _vm.startAngle,\n                                    endAngle: _vm.endAngle,\n                                    majorTicks: _vm.majorTicks,\n                                    lineStyle: _vm.lineStyle,\n                                    minorTicks: _vm.minorTicks,\n                                    labelStyle: _vm.labelStyle,\n                                    annotations: _vm.annotations_2,\n                                    ranges: _vm.ranges_2\n                                  }\n                                },\n                                [\n                                  _c(\n                                    \"e-pointers\",\n                                    [\n                                      _c(\"e-pointer\", {\n                                        attrs: {\n                                          roundedCornerRadius: 5,\n                                          value: \"43\",\n                                          radius: \"100%\",\n                                          color: \"#3FE000\",\n                                          type: _vm.type,\n                                          pointerWidth: 8\n                                        }\n                                      })\n                                    ],\n                                    1\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _vm._m(1)\n                ]),\n                _vm._v(\" \"),\n                _c(\"br\"),\n                _vm._v(\" \"),\n                _c(\"div\", { staticClass: \"panel\" }, [\n                  _c(\n                    \"div\",\n                    { staticStyle: { float: \"left\" } },\n                    [\n                      _c(\n                        \"ejs-circulargauge\",\n                        {\n                          ref: \"circulargauge3\",\n                          staticStyle: { display: \"block\" },\n                          attrs: {\n                            align: \"center\",\n                            id: \"gauge4\",\n                            load: _vm.load3,\n                            width: \"65px\",\n                            height: \"65px\"\n                          }\n                        },\n                        [\n                          _c(\n                            \"e-axes\",\n                            [\n                              _c(\n                                \"e-axis\",\n                                {\n                                  attrs: {\n                                    startAngle: _vm.startAngle,\n                                    endAngle: _vm.endAngle,\n                                    majorTicks: _vm.majorTicks,\n                                    lineStyle: _vm.lineStyle,\n                                    minorTicks: _vm.minorTicks,\n                                    labelStyle: _vm.labelStyle,\n                                    annotations: _vm.annotations_3,\n                                    ranges: _vm.ranges_3\n                                  }\n                                },\n                                [\n                                  _c(\n                                    \"e-pointers\",\n                                    [\n                                      _c(\"e-pointer\", {\n                                        attrs: {\n                                          roundedCornerRadius: 5,\n                                          value: \"58\",\n                                          radius: \"100%\",\n                                          color: \"#00C9E6\",\n                                          type: _vm.type,\n                                          pointerWidth: 8\n                                        }\n                                      })\n                                    ],\n                                    1\n                                  )\n                                ],\n                                1\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  ),\n                  _vm._v(\" \"),\n                  _vm._m(2)\n                ])\n              ])\n            ]\n          )\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(3),\n    _vm._v(\" \"),\n    _vm._m(4)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"subgauge\", staticStyle: { \"margin-top\": \"3%\" } },\n      [\n        _c(\n          \"span\",\n          { staticClass: \"firstcontent\", staticStyle: { \"font-size\": \"18px\" } },\n          [_vm._v(\"MOVE\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"span\",\n          {\n            staticClass: \"firstcontent\",\n            staticStyle: { \"font-size\": \"18px\", color: \"#f4104d\" }\n          },\n          [_vm._v(\"65%\")]\n        ),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\n          \"span\",\n          {\n            staticClass: \"secondcontent\",\n            staticStyle: { color: \"#f4104d\", \"font-size\": \"19px\" }\n          },\n          [_vm._v(\"338/520 CAL\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"subgauge\", staticStyle: { \"margin-top\": \"3%\" } },\n      [\n        _c(\n          \"span\",\n          { staticClass: \"firstcontent\", staticStyle: { \"font-size\": \"18px\" } },\n          [_vm._v(\"EXERCISE\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"span\",\n          {\n            staticClass: \"firstcontent\",\n            staticStyle: { \"font-size\": \"18px\", color: \"#a6ff00\" }\n          },\n          [_vm._v(\"43%\")]\n        ),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\n          \"span\",\n          {\n            staticClass: \"secondcontent\",\n            staticStyle: { color: \"#a6ff00\", \"font-size\": \"19px\" }\n          },\n          [_vm._v(\"13/30 MIN\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"subgauge\", staticStyle: { \"margin-top\": \"3%\" } },\n      [\n        _c(\n          \"span\",\n          { staticClass: \"firstcontent\", staticStyle: { \"font-size\": \"18px\" } },\n          [_vm._v(\"STAND\")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"span\",\n          {\n            staticClass: \"firstcontent\",\n            staticStyle: { \"font-size\": \"18px\", color: \"#29a5a2\" }\n          },\n          [_vm._v(\"58%\")]\n        ),\n        _c(\"br\"),\n        _vm._v(\" \"),\n        _c(\n          \"span\",\n          {\n            staticClass: \"secondcontent\",\n            staticStyle: { color: \"#29a5a2\", \"font-size\": \"19px\" }\n          },\n          [_vm._v(\"7/12 HR\")]\n        )\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample resembles the appearance of Apple watch rings. This functions similar to an activity tracker that denotes the move, exercise, and stand details.\\n   \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n    In this example, you can see how to make the circular gauge look like the Apple watch rings. Ranges are rendered with rounded corners and annotations are placed to denote the move, exercise, and stand values.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n    For more information on ranges, refer to this \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/documentation/circular-gauge/gauge-ranges\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/circular-gauge/apple-watch-rings/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });