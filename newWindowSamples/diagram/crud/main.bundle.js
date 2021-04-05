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
/******/ 		"diagram/crud/main": 0
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
/******/ 	deferredModules.push(["./Samples/diagram/crud/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/diagram/crud/App.vue":
/*!**************************************!*\
  !*** ./Samples/diagram/crud/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_dd52a940_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=dd52a940&scoped=true& */ \"./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./Samples/diagram/crud/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_dd52a940_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css& */ \"./Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_dd52a940_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_dd52a940_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"dd52a940\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/crud/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/App.vue?vue&type=script&lang=ts&":
/*!***************************************************************!*\
  !*** ./Samples/diagram/crud/App.vue?vue&type=script&lang=ts& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/ts-loader??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dd52a940_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dd52a940_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dd52a940_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dd52a940_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dd52a940_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dd52a940_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=dd52a940&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dd52a940_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dd52a940_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/crud-template.vue":
/*!************************************************!*\
  !*** ./Samples/diagram/crud/crud-template.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crud_template_vue_vue_type_template_id_56bf82c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-template.vue?vue&type=template&id=56bf82c8& */ \"./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8&\");\n/* harmony import */ var _crud_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-template.vue?vue&type=script&lang=js& */ \"./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _crud_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _crud_template_vue_vue_type_template_id_56bf82c8___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _crud_template_vue_vue_type_template_id_56bf82c8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/diagram/crud/crud-template.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/diagram/crud/crud-template.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_crud_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./crud-template.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_template_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/diagram/crud/crud-template.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8&":
/*!*******************************************************************************!*\
  !*** ./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_template_vue_vue_type_template_id_56bf82c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./crud-template.vue?vue&type=template&id=56bf82c8& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_template_vue_vue_type_template_id_56bf82c8___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_crud_template_vue_vue_type_template_id_56bf82c8___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/crud-template.vue?");

/***/ }),

/***/ "./Samples/diagram/crud/main.js":
/*!**************************************!*\
  !*** ./Samples/diagram/crud/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/crud/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n@font-face {\\n  font-family: 'e-ddb-icons';\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.e-ddb-icons[data-v-dd52a940] {\\n  font-family: 'e-ddb-icons';\\n  speak: none;\\n  font-size: 55px;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-variant: normal;\\n  text-transform: none;\\n  line-height: 1;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n.e-add[data-v-dd52a940]::before {\\n  content: '\\\\E705';\\n}\\n.e-update[data-v-dd52a940]::before {\\n  content: '\\\\E703';\\n}\\n.e-delete[data-v-dd52a940]::before {\\n  content: '\\\\E701';\\n}\\n.material .e-add[data-v-dd52a940]::before {\\n  content: '\\\\E704';\\n}\\n.material .e-update[data-v-dd52a940]::before {\\n  content: '\\\\E702';\\n}\\n.material .e-delete[data-v-dd52a940]::before {\\n  content: '\\\\E707';\\n}\\n.bootstrap .e-add[data-v-dd52a940]::before {\\n  content: '\\\\E706';\\n}\\n.bootstrap .e-update[data-v-dd52a940]::before {\\n  content: '\\\\E708';\\n}\\n.bootstrap .e-delete[data-v-dd52a940]::before {\\n  content: '\\\\E700';\\n}\\n.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn.e-tbtn-txt .e-icons.e-btn-icon[data-v-dd52a940] {\\n  padding: 3px;\\n}\\n.showDropdown[data-v-dd52a940] {\\n  display: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.1.0.1-3VLQGA6JVBJKC7Y3SWW2UJHIGECK7PEV7YKTTS2GF5SSBQYQTCUQ/Samples/diagram/crud/App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,2BAA2B;EAC3B,23FAA23F;EAC33F,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,2BAA2B;EAC3B,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,oCAAoC;EACpC,mCAAmC;CACpC;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;CACd;AACD;EACE,cAAc;CACf\",\"file\":\"App.vue?vue&type=style&index=0&id=dd52a940&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n@font-face {\\n  font-family: 'e-ddb-icons';\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.e-ddb-icons[data-v-dd52a940] {\\n  font-family: 'e-ddb-icons';\\n  speak: none;\\n  font-size: 55px;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-variant: normal;\\n  text-transform: none;\\n  line-height: 1;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n.e-add[data-v-dd52a940]::before {\\n  content: '\\\\e705';\\n}\\n.e-update[data-v-dd52a940]::before {\\n  content: '\\\\e703';\\n}\\n.e-delete[data-v-dd52a940]::before {\\n  content: '\\\\e701';\\n}\\n.material .e-add[data-v-dd52a940]::before {\\n  content: '\\\\e704';\\n}\\n.material .e-update[data-v-dd52a940]::before {\\n  content: '\\\\e702';\\n}\\n.material .e-delete[data-v-dd52a940]::before {\\n  content: '\\\\e707';\\n}\\n.bootstrap .e-add[data-v-dd52a940]::before {\\n  content: '\\\\e706';\\n}\\n.bootstrap .e-update[data-v-dd52a940]::before {\\n  content: '\\\\e708';\\n}\\n.bootstrap .e-delete[data-v-dd52a940]::before {\\n  content: '\\\\e700';\\n}\\n.e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn.e-btn.e-tbtn-txt .e-icons.e-btn-icon[data-v-dd52a940] {\\n  padding: 3px;\\n}\\n.showDropdown[data-v-dd52a940] {\\n  display: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/App.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/crud/App.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-popups */ \"./node_modules/@syncfusion/ej2-vue-popups/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _crud_template_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crud-template.vue */ \"./Samples/diagram/crud/crud-template.vue\");\n\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"DiagramPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_3__[\"ToolbarPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_popups__WEBPACK_IMPORTED_MODULE_2__[\"DialogPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"TextBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_5__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_6__[\"ButtonPlugin\"]);\nvar diagram;\nvar dialog;\nvar toolbarObj;\nvar sourceDropdown;\nvar targetDropdown;\nvar sourceID;\nvar targetID;\nvar nodeData = [];\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            width: '100%',\n            height: '600px',\n            snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"SnapConstraints\"].None },\n            dataSourceSettings: {\n                id: 'Name',\n                //set an URL to perform CRUD operations with node in database\n                crudAction: {\n                    read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetNodes',\n                    create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddNodes',\n                    update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateNodes',\n                    destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteNodes',\n                    customFields: ['Id', 'Description', 'Color']\n                },\n                connectionDataSource: {\n                    id: 'Name',\n                    sourceID: 'SourceNode',\n                    targetID: 'TargetNode',\n                    //set an URL to perform CRUD operations with connector in database\n                    crudAction: {\n                        read: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/GetConnectors',\n                        create: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/AddConnectors',\n                        update: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/UpdateConnectors',\n                        destroy: 'https://js.syncfusion.com/demos/ejServices/api/Diagram/DeleteConnectors',\n                        customFields: ['Id']\n                    }\n                }\n            },\n            layout: {\n                type: 'HierarchicalTree',\n                verticalSpacing: 40\n            },\n            getNodeDefaults: function (obj, diagram) {\n                obj.width = 100;\n                obj.height = 50;\n                obj.shape = { type: 'Basic', shape: 'Rectangle' };\n                obj.style = { strokeWidth: 1, strokeColor: '#DDDDDD' };\n                return obj;\n            },\n            getConnectorDefaults: function (connector, diagram) {\n                connector.type = 'Orthogonal';\n                if (connector.style)\n                    connector.style.fill = '#707070';\n                if (connector.style)\n                    connector.style.strokeColor = '#707070';\n                connector.targetDecorator = {\n                    style: {\n                        strokeColor: '#707070',\n                        fill: '#707070'\n                    }\n                };\n                return connector;\n            },\n            //set an label style for nodes\n            setNodeTemplate: function (obj) {\n                obj.annotations = [{ style: { color: 'black' } }];\n                obj.annotations[0].content = obj.Description;\n                obj.style = { fill: obj.Color };\n                if (obj.Id === 1) {\n                    //delete constraints for an root node\n                    obj.constraints = _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"NodeConstraints\"].Default & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"NodeConstraints\"].Delete;\n                }\n            },\n            crudTemplate: function () {\n                return { template: _crud_template_vue__WEBPACK_IMPORTED_MODULE_7__[\"default\"] };\n            },\n            dlgButtons: [{ click: dlgButtonClick, buttonModel: { isPrimary: 'true', content: 'Update' } }],\n            fields: { text: 'Label', value: 'Name' },\n            popupHeight: '220px',\n            showCloseIcon: true,\n            isModal: true,\n            dialogWidth: '300px',\n            toolbarClick: toolbarClickEvent,\n            toolbarCreate: toolbarCreate,\n            sourceDropdownCreate: sourceDropdownCreate,\n            targetDropdownCreate: targetDropdownCreate,\n            sourceDropdownChange: sourceDropdownChange,\n            targetDropdownChange: targetDropdownChange,\n            selectionChange: selectionChange,\n            connectionChange: connectionChange\n        };\n    },\n    provide: {\n        diagram: [_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"DataBinding\"], _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"HierarchicalTree\"]]\n    },\n    mounted: function () {\n        var diagramObj = document.getElementById('diagram');\n        diagram = diagramObj.ej2_instances[0];\n        var dialogObj = document.getElementById('editDialog');\n        dialog = dialogObj.ej2_instances[0];\n        var sourceDropdownObj = document.getElementById('SourceId');\n        sourceDropdown = sourceDropdownObj.ej2_instances[0];\n        var targetDropdownObj = document.getElementById('TargetId');\n        targetDropdown = targetDropdownObj.ej2_instances[0];\n    }\n}));\nfunction dlgButtonClick(evt) {\n    var selectedItem = {};\n    var dialogHeader = dialog.header;\n    var description = document.getElementById('Description').value;\n    var color = document.getElementById('Color').value;\n    if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {\n        selectedItem = diagram.selectedItems.nodes[0];\n    }\n    if (diagram.selectedItems && diagram.selectedItems.connectors && diagram.selectedItems.connectors.length > 0) {\n        selectedItem = diagram.selectedItems.connectors[0];\n    }\n    if (dialogHeader === 'Add') {\n        var node = {\n            id: 'node' + Object(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"randomId\"])(),\n            style: { fill: color },\n            Description: description,\n            Color: color,\n            Id: Math.floor(Math.random() * 1000 + 100)\n        };\n        var connector = {\n            id: 'connector' + Object(_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"randomId\"])(),\n            sourceID: selectedItem.id,\n            targetID: node.id,\n            Id: Math.floor(Math.random() * 1000 + 100)\n        };\n        diagram.add(node);\n        diagram.add(connector);\n        diagram.doLayout();\n        diagram.insertData();\n        nodeData.push({ Name: node.id, Label: description });\n        sourceDropdown.dataSource = getDataSource();\n        sourceDropdown.dataBind();\n        targetDropdown.dataSource = getDataSource();\n        targetDropdown.dataBind();\n    }\n    else {\n        if (selectedItem instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"Connector\"]) {\n            //set an sourceNode and targetNode updated at runtime\n            selectedItem.sourceID = sourceID ? sourceID : selectedItem.sourceID;\n            selectedItem.targetID = targetID ? targetID : selectedItem.targetID;\n            diagram.dataBind();\n            diagram.doLayout();\n        }\n        else {\n            //update an node text and background color.\n            selectedItem.Description = description;\n            selectedItem.Color = color;\n            selectedItem.annotations[0].content = description;\n            selectedItem.style.fill = color;\n            diagram.dataBind();\n        }\n        diagram.updateData();\n    }\n    dialog.hide();\n}\nfunction toolbarCreate(args) {\n    enableToolbarItems(false);\n}\n//set an sourceNode name in dropdown\nfunction sourceDropdownCreate(args) {\n    var obj = document.getElementById('SourceId');\n    sourceDropdown = obj.ej2_instances[0];\n    sourceDropdown.dataSource = getDataSource();\n    sourceDropdown.dataBind();\n}\n//set an targetNode name in dropdown\nfunction targetDropdownCreate(args) {\n    var obj = document.getElementById('TargetId');\n    targetDropdown = obj.ej2_instances[0];\n    targetDropdown.dataSource = getDataSource();\n    targetDropdown.dataBind();\n}\n//set an sourceNode Id of an selected Connector\nfunction sourceDropdownChange(args) {\n    sourceID = args.value;\n}\n//set an targetNode Id of an selected Connector\nfunction targetDropdownChange(args) {\n    targetID = args.value;\n}\n//In this event, we disable/enable the toolbar items based on selected elements\nfunction selectionChange(args) {\n    var obj = document.getElementById('toolbar');\n    toolbarObj = obj.ej2_instances[0];\n    if (args.state === 'Changing') {\n        if (args.newValue.length > 0) {\n            if (args.newValue[0] instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"Node\"]) {\n                enableToolbarItems(true);\n            }\n            else {\n                toolbarObj.enableItems(document.getElementById(toolbarObj.items[0].id).parentElement, false);\n                toolbarObj.enableItems(document.getElementById(toolbarObj.items[2].id).parentElement, true);\n                toolbarObj.enableItems(document.getElementById(toolbarObj.items[4].id).parentElement, false);\n            }\n        }\n        else {\n            enableToolbarItems(false);\n        }\n    }\n}\n//enable/disable the toolbar items\nfunction enableToolbarItems(isEnableItem) {\n    var obj = document.getElementById('toolbar');\n    toolbarObj = obj.ej2_instances[0];\n    toolbarObj.enableItems(document.getElementById(toolbarObj.items[0].id).parentElement, isEnableItem);\n    toolbarObj.enableItems(document.getElementById(toolbarObj.items[2].id).parentElement, isEnableItem);\n    toolbarObj.enableItems(document.getElementById(toolbarObj.items[4].id).parentElement, isEnableItem);\n}\nfunction connectionChange(args) {\n    if (args.state === 'Completed') {\n        if (!args.connector.targetID || !args.connector.sourceID) {\n            args.cancel = true;\n        }\n    }\n}\nfunction toolbarClickEvent(args) {\n    var selectedItem = {};\n    if (diagram.selectedItems && diagram.selectedItems.nodes && diagram.selectedItems.nodes.length > 0) {\n        selectedItem = diagram.selectedItems.nodes[0];\n    }\n    if (diagram.selectedItems && diagram.selectedItems.connectors && diagram.selectedItems.connectors.length > 0) {\n        selectedItem = diagram.selectedItems.connectors[0];\n    }\n    if (selectedItem) {\n        switch (args.item.tooltipText) {\n            case 'Add':\n                openDialog('Add', '', '', true);\n                break;\n            case 'Edit':\n                if (selectedItem instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_4__[\"Connector\"]) {\n                    var sourceNode = diagram.getObject(selectedItem.sourceID);\n                    var targetNode = diagram.getObject(selectedItem.targetID);\n                    openDialog('Edit', sourceNode.id, targetNode.id, false);\n                }\n                else {\n                    openDialog('Edit', selectedItem.Description, selectedItem.Color, true);\n                }\n                break;\n            case 'Delete':\n                diagram.remove(selectedItem);\n                diagram.doLayout();\n                diagram.removeData();\n                var element = { Name: selectedItem.id, Label: selectedItem.Description };\n                var index = nodeData.indexOf(element);\n                nodeData.splice(index, 1);\n                sourceDropdown.dataSource = getDataSource();\n                sourceDropdown.dataBind();\n                targetDropdown.dataSource = getDataSource();\n                targetDropdown.dataBind();\n        }\n    }\n}\n//open a dialog control on clicking the toolbar items\nfunction openDialog(title, description, color, isNode) {\n    dialog.header = title;\n    if (isNode) {\n        hideClassElement('.showDropdown', 'none');\n        hideClassElement('.showLabel', 'block');\n        document.getElementById('Description').value = description;\n        document.getElementById('Color').value = color;\n    }\n    else {\n        hideClassElement('.showDropdown', 'block');\n        hideClassElement('.showLabel', 'none');\n        document.getElementById('SourceId').value = description;\n        document.getElementById('TargetId').value = color;\n    }\n    //open a dialog\n    dialog.show();\n}\n//method to show/hide the textbox/dropdown in dialog control\nfunction hideClassElement(className, display) {\n    var i;\n    var showDropdown = document.querySelectorAll(className);\n    for (i = 0; i < showDropdown.length; i++) {\n        showDropdown[i].style.display = display;\n    }\n}\n//Iterate an node text in diagram element to set it in dropdown datasource\nfunction getDataSource() {\n    var diagramObj = document.getElementById('diagram');\n    var diagram = diagramObj.ej2_instances[0];\n    var i;\n    nodeData = [];\n    for (i = 0; i < diagram.nodes.length; i++) {\n        var node = diagram.nodes[i];\n        var element = { Name: node.id, Label: node.Description };\n        nodeData.push(element);\n    }\n    return nodeData;\n}\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/crud/crud-template.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {\n      data: {}\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/crud-template.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/crud/App.vue?vue&type=template&id=dd52a940&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"div\", { staticClass: \"control-section\" }, [\n        _c(\n          \"div\",\n          { staticStyle: { width: \"100%\", height: \"10%\" } },\n          [\n            _c(\n              \"ejs-toolbar\",\n              {\n                attrs: {\n                  id: \"toolbar\",\n                  clicked: _vm.toolbarClick,\n                  created: _vm.toolbarCreate\n                }\n              },\n              [\n                _c(\n                  \"e-items\",\n                  [\n                    _c(\"e-item\", {\n                      attrs: {\n                        id: \"Add\",\n                        tooltipText: \"Add\",\n                        prefixIcon: \"e-ddb-icons e-add\",\n                        text: \"Add\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-item\", { attrs: { type: \"Separator\" } }),\n                    _vm._v(\" \"),\n                    _c(\"e-item\", {\n                      attrs: {\n                        id: \"Edit\",\n                        tooltipText: \"Edit\",\n                        prefixIcon: \"e-ddb-icons e-update\",\n                        text: \"Edit\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-item\", { attrs: { type: \"Separator\" } }),\n                    _vm._v(\" \"),\n                    _c(\"e-item\", {\n                      attrs: {\n                        id: \"Delete\",\n                        tooltipText: \"Delete\",\n                        prefixIcon: \"e-ddb-icons e-delete\",\n                        text: \"Delete\"\n                      }\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-item\", { attrs: { type: \"Separator\" } })\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticStyle: {\n              width: \"100%\",\n              height: \"80%\",\n              \"border-width\": \"0 1px 1px 1px\",\n              \"border-style\": \"solid\",\n              \"border-color\": \"#D7D7D7\"\n            }\n          },\n          [\n            _c(\n              \"div\",\n              {\n                staticClass: \"sb-mobile-diagram\",\n                attrs: { id: \"diagram-space\" }\n              },\n              [\n                _c(\"ejs-diagram\", {\n                  attrs: {\n                    id: \"diagram\",\n                    width: _vm.width,\n                    height: _vm.height,\n                    getNodeDefaults: _vm.getNodeDefaults,\n                    getConnectorDefaults: _vm.getConnectorDefaults,\n                    snapSettings: _vm.snapSettings,\n                    selectionChange: _vm.selectionChange,\n                    sourcePointChange: _vm.connectionChange,\n                    targetPointChange: _vm.connectionChange,\n                    setNodeTemplate: _vm.setNodeTemplate,\n                    layout: _vm.layout,\n                    dataSourceSettings: _vm.dataSourceSettings\n                  }\n                })\n              ],\n              1\n            )\n          ]\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"ejs-dialog\",\n        {\n          attrs: {\n            id: \"editDialog\",\n            buttons: _vm.dlgButtons,\n            width: _vm.dialogWidth,\n            visible: false,\n            isModal: _vm.isModal,\n            showCloseIcon: _vm.showCloseIcon\n          }\n        },\n        [\n          _c(\"div\", [\n            _c(\n              \"div\",\n              { staticClass: \"showLabel\" },\n              [\n                _c(\"ejs-textbox\", {\n                  attrs: { id: \"Description\", placeholder: \"Enter Description\" }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"showLabel\",\n                staticStyle: { \"padding-top\": \"14px\" }\n              },\n              [\n                _c(\"ejs-textbox\", {\n                  attrs: { id: \"Color\", placeholder: \"Enter Color\" }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              { staticClass: \"showDropdown\" },\n              [\n                _c(\"ejs-dropdownlist\", {\n                  attrs: {\n                    id: \"SourceId\",\n                    created: _vm.sourceDropdownCreate,\n                    popupHeight: _vm.popupHeight,\n                    change: _vm.sourceDropdownChange,\n                    fields: _vm.fields\n                  }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"div\",\n              {\n                staticClass: \"showDropdown\",\n                staticStyle: { \"padding-top\": \"14px\" }\n              },\n              [\n                _c(\"ejs-dropdownlist\", {\n                  attrs: {\n                    id: \"TargetId\",\n                    created: _vm.targetDropdownCreate,\n                    popupHeight: _vm.popupHeight,\n                    change: _vm.targetDropdownChange,\n                    fields: _vm.fields\n                  }\n                })\n              ],\n              1\n            )\n          ])\n        ]\n      ),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1)\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates generating a diagram by reading data from the database, and updating it with newly inserted/updated/deleted\\n      nodes and connectors through web services.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This example shows how the user reads the data source and performs add, edit, delete of data in the data source at runtime.\\n      The \"\n        ),\n        _c(\"code\", [_vm._v(\"crudAction\")]),\n        _vm._v(\" property of the \"),\n        _c(\"code\", [_vm._v(\"dataSourceSettings\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"crudAction\")]),\n        _vm._v(\" property\\n      of the\\n      \"),\n        _c(\"code\", [_vm._v(\"connectionDataSource\")]),\n        _vm._v(\" allow you to define the server-side method name for \"),\n        _c(\"code\", [_vm._v(\"create\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"read\")]),\n        _vm._v(\",\\n      \"),\n        _c(\"code\", [_vm._v(\"update\")]),\n        _vm._v(\", and\\n      \"),\n        _c(\"code\", [_vm._v(\"delete\")]),\n        _vm._v(\" operations.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n      The \"),\n        _c(\"code\", [_vm._v(\"insertData\")]),\n        _vm._v(\n          \" method is used to send the newly added/inserted data from client to server side. Likewise,\\n      \"\n        ),\n        _c(\"code\", [_vm._v(\"updateData\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"removeData\")]),\n        _vm._v(\n          \" are used to send the updated and deleted diagram elements to\\n      the server.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      The diagram component’s features are segregated into individual feature-wise modules. To generate diagrams from an external\\n      data source, inject \"\n        ),\n        _c(\"code\", [_vm._v(\"DataBinding\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { diagram: [DataBinding] }\")]),\n        _vm._v(\n          \"        method. To automatically arrange the objects in an Hierarchical chart, inject \"\n        ),\n        _c(\"code\", [_vm._v(\"HierarchicalTree\")]),\n        _vm._v(\" module\\n      using \"),\n        _c(\"code\", [_vm._v(\"provide: { diagram: [HierarchicalTree] }\")]),\n        _vm._v(\" method.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/diagram/crud/crud-template.vue?vue&type=template&id=56bf82c8& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"showLabel\" },\n      [\n        _c(\"ejs-textbox\", {\n          attrs: { id: \"Description\", placeholder: \"Enter Description\" }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"showLabel\", staticStyle: { \"padding-top\": \"14px\" } },\n      [\n        _c(\"ejs-textbox\", {\n          attrs: { id: \"Color\", placeholder: \"Enter Color\" }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"showDropdown\" },\n      [\n        _c(\"ejs-dropdownlist\", {\n          attrs: {\n            id: \"SourceId\",\n            created: _vm.sourceDropdownCreate,\n            popupHeight: _vm.popupHeight,\n            change: _vm.sourceDropdownChange,\n            fields: _vm.fields\n          }\n        })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"showDropdown\", staticStyle: { \"padding-top\": \"14px\" } },\n      [\n        _c(\"ejs-dropdownlist\", {\n          attrs: {\n            id: \"TargetId\",\n            created: _vm.targetDropdownCreate,\n            popupHeight: _vm.popupHeight,\n            change: _vm.targetDropdownChange,\n            fields: _vm.fields\n          }\n        })\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/diagram/crud/crud-template.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });