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
/******/ 		"schedule/resource-grouping/main": 0
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
/******/ 	deferredModules.push(["./Samples/schedule/resource-grouping/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/schedule/resource-grouping/App.vue":
/*!****************************************************!*\
  !*** ./Samples/schedule/resource-grouping/App.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_61ae6460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=61ae6460& */ \"./Samples/schedule/resource-grouping/App.vue?vue&type=template&id=61ae6460&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/schedule/resource-grouping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_61ae6460_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=61ae6460&lang=css& */ \"./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_61ae6460___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_61ae6460___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/schedule/resource-grouping/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?");

/***/ }),

/***/ "./Samples/schedule/resource-grouping/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./Samples/schedule/resource-grouping/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?");

/***/ }),

/***/ "./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_61ae6460_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=61ae6460&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_61ae6460_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_61ae6460_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_61ae6460_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_61ae6460_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?");

/***/ }),

/***/ "./Samples/schedule/resource-grouping/App.vue?vue&type=template&id=61ae6460&":
/*!***********************************************************************************!*\
  !*** ./Samples/schedule/resource-grouping/App.vue?vue&type=template&id=61ae6460& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_61ae6460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=61ae6460& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=template&id=61ae6460&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_61ae6460___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_61ae6460___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?");

/***/ }),

/***/ "./Samples/schedule/resource-grouping/main.js":
/*!****************************************************!*\
  !*** ./Samples/schedule/resource-grouping/main.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/schedule/resource-grouping/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap {\\n    display: flex;\\n    text-align: left;\\n}\\n.schedule-vue-sample .schedule-demo-heading {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n    text-align: center;\\n    font-weight: 500\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap {\\n    display: table;\\n    width: inherit;\\n    text-align: center;\\n    padding-top: 10px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {\\n    width: 110px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap .airline-image {\\n    width: 30px;\\n    margin-top: 15px;\\n    background-repeat: no-repeat;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-image {\\n    height: 30px;\\n    margin-top: 0;\\n    margin-left: 35%;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-image {\\n    margin-top: 5px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-vertical-view .e-resource-cells {\\n    height: 80px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-details .airline-name {\\n    font-size: inherit;\\n    font-weight: inherit;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap .airline-details {\\n    padding-left: 15px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-details {\\n    padding: 0;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap .airline-details .airline-name {\\n    font-size: 16px;\\n    font-weight: 500;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-model,\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-seats {\\n    display: none;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-model,\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-seats {\\n    display: none;\\n}\\n@media (max-width: 550px) {\\n.schedule-vue-sample .schedule-demo-heading {\\n        font-size: 14px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/schedule-vue-samples_development/Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,cAAc;IACd,iBAAiB;CACpB;AACD;IACI,gBAAgB;IAChB,qBAAqB;IACrB,mBAAmB;IACnB,gBAAgB;CACnB;AACD;IACI,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,kBAAkB;CACrB;AACD;IACI,aAAa;CAChB;AACD;IACI,YAAY;IACZ,iBAAiB;IACjB,6BAA6B;CAChC;AACD;IACI,aAAa;IACb,cAAc;IACd,iBAAiB;CACpB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,qBAAqB;CACxB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,WAAW;CACd;AACD;IACI,gBAAgB;IAChB,iBAAiB;CACpB;AACD;;IAEI,cAAc;CACjB;AACD;;IAEI,cAAc;CACjB;AACD;AACA;QACQ,gBAAgB;CACvB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=61ae6460&lang=css&\",\"sourcesContent\":[\"\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap {\\n    display: flex;\\n    text-align: left;\\n}\\n.schedule-vue-sample .schedule-demo-heading {\\n    font-size: 16px;\\n    padding-bottom: 15px;\\n    text-align: center;\\n    font-weight: 500\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap {\\n    display: table;\\n    width: inherit;\\n    text-align: center;\\n    padding-top: 10px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {\\n    width: 110px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap .airline-image {\\n    width: 30px;\\n    margin-top: 15px;\\n    background-repeat: no-repeat;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-image {\\n    height: 30px;\\n    margin-top: 0;\\n    margin-left: 35%;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-image {\\n    margin-top: 5px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-vertical-view .e-resource-cells {\\n    height: 80px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-details .airline-name {\\n    font-size: inherit;\\n    font-weight: inherit;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap .airline-details {\\n    padding-left: 15px;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-details {\\n    padding: 0;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .template-wrap .airline-details .airline-name {\\n    font-size: 16px;\\n    font-weight: 500;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-model,\\n.schedule-vue-sample .schedule-group.e-schedule .e-agenda-view .template-wrap .airline-seats {\\n    display: none;\\n}\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-model,\\n.schedule-vue-sample .schedule-group.e-schedule.e-device .template-wrap .airline-seats {\\n    display: none;\\n}\\n@media (max-width: 550px) {\\n.schedule-vue-sample .schedule-demo-heading {\\n        font-size: 14px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/resource-grouping/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-schedule */ \"./node_modules/@syncfusion/ej2-vue-schedule/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"SchedulePlugin\"]);\n\nvar resourceTemplateVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"resource-template\", {\n    template: '<div class=\"template-wrap\"><div class=\"airline-image\"><img :src=\"getImage\" :alt=\"getImage\" />' +\n    '</div><div class=\"airline-details\"><div class=\"airline-name\">{{getAirlineName(data)}}</div><div class=\"airline-model\">Model no: {{getAirlineModel(data)}}</div>' +\n    '<div class=\"airline-seats\">No.of seats: {{getAirlineSeats(data)}}</div></div></div>',\n    data() {\n        return {\n            data: {}\n        };\n    },\n    computed: {\n        getImage: function() {\n            return './../.././../../source/schedule/images/' + this.getAirlineImage(this.data) + '.svg';\n        }\n    },\n    methods: {\n        getAirlineName: function (data) {\n            let value = JSON.parse(JSON.stringify(data));\n            return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName;\n        },\n        getAirlineModel: function (data) {\n            let airlineName = this.getAirlineName(data);\n            return (airlineName === 'Airways 1') ? 'CRJ 700' : (airlineName === 'Airways 2') ? 'Airbus A330' : 'ATR 72-600';\n        },\n        getAirlineSeats: function (data) {\n            let airlineName = this.getAirlineName(data);\n            return (airlineName === 'Airways 1') ? 50 : (airlineName === 'Airways 2') ? 75 : 100;\n        },\n        getAirlineImage: function (data) {\n            let resourceName = this.getAirlineName(data);\n            return (resourceName === 'Airways 1') ? 'airways-1' : (resourceName === 'Airways 2') ? 'airways-2' : 'airways-3';\n        }\n    }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function () {\n        return {\n            cssClass: 'schedule-group',\n            eventSettings: {\n                dataSource: this.generateEvents(),\n                fields: {\n                    subject: { title: 'Travel Summary', name: 'Subject' },\n                    location: { title: 'Source', name: 'Location' },\n                    description: { title: 'Comments', name: 'Description' },\n                    startTime: { title: 'Departure Time', name: 'StartTime' },\n                    endTime: { title: 'Arrival Time', name: 'EndTime' }\n                }\n            },\n            selectedDate: new Date(2021, 3, 6),\n            allowMultiple: true,\n            resourceDataSource: [\n                { AirlineName: 'Airways 1', AirlineId: 1, AirlineColor: '#EA7A57' },\n                { AirlineName: 'Airways 2', AirlineId: 2, AirlineColor: '#357cd2' },\n                { AirlineName: 'Airways 3', AirlineId: 3, AirlineColor: '#7fa900' }\n            ],\n            group: { resources: ['Airlines'] },\n            resourceTemplate: function () {\n                return { template: resourceTemplateVue }\n            },\n        }\n    },\n    provide: {\n        schedule: [_syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Week\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Month\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Agenda\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"Resize\"], _syncfusion_ej2_vue_schedule__WEBPACK_IMPORTED_MODULE_1__[\"DragAndDrop\"]]\n    },\n    methods: {\n         generateEvents: function () {\n            var subjectCollection = ['Barcelona to Los Angeles', 'Los Angeles to Barcelona'];\n            var collections = [];\n            var dataCollections = [1, 2, 3];\n            var id = 1;\n            for (var i = 0; i < dataCollections.length; i++) {\n                var data = dataCollections[i];\n                var startDate = new Date(2021, 3, 1);\n                startDate.setMilliseconds(1000 * 60 * 60 * 0.5 * (data - 1));\n                var lastDate = new Date((startDate.getTime()) + (1000 * 60 * 60 * 24 * 30));\n                for (var date = startDate; date.getTime() < lastDate.getTime(); date = new Date(date.getTime() + (1000 * 60 * 60 * 5))) {\n                    var strDate = new Date(date.getTime());\n                    var endDate = new Date((strDate.getTime()) + (1000 * 60 * 60 * (2.5 + (0.5 * data))));\n                    collections.push({\n                        Id: id,\n                        Subject: subjectCollection[id % 2],\n                        StartTime: new Date(strDate.getTime()),\n                        EndTime: new Date(endDate.getTime()),\n                        AirlineId: data\n                    });\n                    id += 1;\n                }\n            }\n            return collections;\n        }\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=template&id=61ae6460&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/resource-grouping/App.vue?vue&type=template&id=61ae6460& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"schedule-vue-sample\" }, [\n    _c(\"div\", { staticClass: \"col-md-12 control-section\" }, [\n      _c(\"div\", { staticClass: \"schedule-demo-heading\" }, [\n        _vm._v(\n          \"\\n            Flight timings between Barcelona and Los Angeles\\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-schedule\",\n            {\n              attrs: {\n                id: \"Schedule\",\n                height: \"650px\",\n                cssClass: _vm.cssClass,\n                selectedDate: _vm.selectedDate,\n                eventSettings: _vm.eventSettings,\n                group: _vm.group,\n                resourceHeaderTemplate: _vm.resourceTemplate,\n              },\n            },\n            [\n              _c(\n                \"e-views\",\n                [\n                  _c(\"e-view\", { attrs: { option: \"Week\" } }),\n                  _vm._v(\" \"),\n                  _c(\"e-view\", { attrs: { option: \"Month\" } }),\n                  _vm._v(\" \"),\n                  _c(\"e-view\", { attrs: { option: \"Agenda\" } }),\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"e-resources\",\n                [\n                  _c(\"e-resource\", {\n                    attrs: {\n                      field: \"AirlineId\",\n                      title: \"Airline Name\",\n                      name: \"Airlines\",\n                      allowMultiple: _vm.allowMultiple,\n                      dataSource: _vm.resourceDataSource,\n                      textField: \"AirlineName\",\n                      idField: \"AirlineId\",\n                      colorField: \"AirlineColor\",\n                    },\n                  }),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            This demo illustrates the timings of different flight services on a specific route say between Barcelona and Los Angeles,\\n            on a daily basis. Here, the Scheduler is grouped based on the 3 Airline services.\\n        \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In this demo, the Scheduler has been grouped with multiple resources by making use of the property\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"group\")]),\n        _vm._v(\n          \". The resources to be grouped depends on the values of\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"resources\")]),\n        _vm._v(\" option within the\\n            \"),\n        _c(\"code\", [_vm._v(\"group\")]),\n        _vm._v(\n          \" property, which accepts the array of resource names. The resource header has been customized\\n            by making use of the\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"resourceHeaderTemplate\")]),\n        _vm._v(\" property.\\n        \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            In mobile mode, when the grouping is enabled, the resources will be listed out in a treeview as a side-panel which opens\\n            or closes, on clicking the hamburger icon at the resource header. Only a single resource will be viewable\\n            at a time, due to the space constraints on mobile. If in case, the users want to view the grouped layout\\n            on mobile with scrolling content, then it is necessary to set\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"false\")]),\n        _vm._v(\" to the\\n            \"),\n        _c(\"code\", [_vm._v(\"enableCompactView\")]),\n        _vm._v(\" option within the\\n            \"),\n        _c(\"code\", [_vm._v(\"group\")]),\n        _vm._v(\" property which is set to\\n            \"),\n        _c(\"code\", [_vm._v(\"true\")]),\n        _vm._v(\" by default. This option is not applicable on desktop mode. \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n            Note: If the\\n            \"),\n        _c(\"code\", [_vm._v(\"group\")]),\n        _vm._v(\n          \" property is not defined, then the default Scheduler will be rendered with no grouping on\\n            layout, but the appointments of all the resources will be displayed on a single schedule.\\n        \"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=61ae6460&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/schedule/resource-grouping/App.vue?vue&type=style&index=0&id=61ae6460&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"300d04f8\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/schedule/resource-grouping/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });