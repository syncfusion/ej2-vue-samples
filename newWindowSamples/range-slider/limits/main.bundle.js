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
/******/ 		"range-slider/limits/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/limits/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/limits/App.vue":
/*!*********************************************!*\
  !*** ./Samples/range-slider/limits/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_29c8dea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=29c8dea4& */ \"./Samples/range-slider/limits/App.vue?vue&type=template&id=29c8dea4&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/limits/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_29c8dea4___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_29c8dea4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/limits/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/limits/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/range-slider/limits/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/limits/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/limits/App.vue?vue&type=template&id=29c8dea4&":
/*!****************************************************************************!*\
  !*** ./Samples/range-slider/limits/App.vue?vue&type=template&id=29c8dea4& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_29c8dea4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=29c8dea4& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/limits/App.vue?vue&type=template&id=29c8dea4&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_29c8dea4___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_29c8dea4___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/limits/main.js":
/*!*********************************************!*\
  !*** ./Samples/range-slider/limits/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/limits/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-limits .content_wrapper {\\n  width: 52%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-limits .sliderwrap {\\n  margin-top: 45px;\\n}\\n.e-bigger .slider-limits .content_wrapper {\\n  width: 80%;\\n}\\n.slider-limits .sliderwrap label {\\n  padding-bottom: 50px;\\n  font-size: 13px;\\n  font-weight: 500;\\n  margin-top: 15px;\\n}\\n.slider-limits .userselect {\\n  -webkit-user-select: none;\\n  /* Safari 3.1+ */\\n  -moz-user-select: none;\\n  /* Firefox 2+ */\\n  -ms-user-select: none;\\n  /* IE 10+ */\\n  user-select: none;\\n  /* Standard syntax */\\n}\\n.slider-limits .property-custom td {\\n  padding: 5px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/uts-vue-samples_development-F5F5PTSUAV7LW2UFX2U6PDJSQOER7LJSEKP5DGZR5WFAUMILFS4A/Samples/range-slider/limits/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,aAAa;CACd\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.slider-limits .content_wrapper {\\n  width: 52%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-limits .sliderwrap {\\n  margin-top: 45px;\\n}\\n.e-bigger .slider-limits .content_wrapper {\\n  width: 80%;\\n}\\n.slider-limits .sliderwrap label {\\n  padding-bottom: 50px;\\n  font-size: 13px;\\n  font-weight: 500;\\n  margin-top: 15px;\\n}\\n.slider-limits .userselect {\\n  -webkit-user-select: none;\\n  /* Safari 3.1+ */\\n  -moz-user-select: none;\\n  /* Firefox 2+ */\\n  -ms-user-select: none;\\n  /* IE 10+ */\\n  user-select: none;\\n  /* Standard syntax */\\n}\\n.slider-limits .property-custom td {\\n  padding: 5px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/limits/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/limits/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"NumericTextBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      min: 0,\n      max: 100,\n      value: 25,\n      // Set the step value\n      step: 1,\n      // Initialize ticks with placement, largestep, smallstep\n      ticks: {\n        placement: \"Before\",\n        largeStep: 20,\n        smallStep: 5,\n        showSmallTicks: true\n      },\n      // Set the type for slider\n      type: \"MinRange\",\n      // Set the limit values for the slider\n      limits: { enabled: true, minStart: 10, minEnd: 40 },\n      // Initialize tooltip with placement and showOn\n      tooltip: { isVisible: true, placement: \"Before\", showOn: \"Focus\" },\n\n      // Set the intial range values for slider\n      rangevalue: [25, 75],\n      // Set the type to render range slider\n      rangetype: \"Range\",\n      // Initialize ticks with placement, largestep, smallstep\n      rangeticks: {\n        placement: \"Before\",\n        largeStep: 20,\n        smallStep: 5,\n        showSmallTicks: true\n      },\n      // Set the limit values for the slider\n      rangelimits: {\n        enabled: true,\n        minStart: 10,\n        minEnd: 40,\n        maxStart: 60,\n        maxEnd: 90\n      },\n      // Initialize tooltip with placement and showOn\n      rangetooltip: { isVisible: true, placement: \"Before\", showOn: \"Focus\" },\n      minstartvalue: 10,\n      minendvalue: 40,\n      maxstartvalue: 60,\n      maxendvalue: 90,\n      checked: false\n    };\n  },\n  methods: {\n    minstartChange: function(args) {\n      this.$refs.slider.ej2Instances.limits.minStart = args.value;\n      this.$refs.rangeslider.ej2Instances.limits.minStart = args.value;\n    },\n    minendChange: function(args) {\n      this.$refs.slider.ej2Instances.limits.minEnd = args.value;\n      this.$refs.rangeslider.ej2Instances.limits.minEnd = args.value;\n    },\n    maxstartChange: function(args) {\n      this.$refs.rangeslider.ej2Instances.limits.maxStart = args.value;\n    },\n    maxendChange: function(args) {\n      this.$refs.rangeslider.ej2Instances.limits.maxEnd = args.value;\n    },\n    lockFirstHandle: function(args) {\n      this.$refs.slider.ej2Instances.limits.startHandleFixed = args.checked;\n      this.$refs.rangeslider.ej2Instances.limits.startHandleFixed =\n        args.checked;\n    },\n    lockSecondHandle: function(args) {\n      this.$refs.slider.ej2Instances.limits.endHandleFixed = args.checked;\n      this.$refs.rangeslider.ej2Instances.limits.endHandleFixed = args.checked;\n    },\n    onScroll: function() {\n      if (\n        document.getElementById(\"limitslider\") &&\n        this.$refs.slider &&\n        this.$refs.rangeslider\n      ) {\n        this.$refs.slider.ej2Instances.refreshTooltip(this.$refs.slider.ej2Instances.tooltipTarget);\n        this.$refs.rangeslider.ej2Instances.refreshTooltip(this.$refs.rangeslider.ej2Instances.tooltipTarget);\n      }\n    }\n  },\n  mounted: function() {\n    document\n      .getElementById(\"right-pane\")\n      .addEventListener(\"scroll\", this.onScroll.bind(this));\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/limits/App.vue?vue&type=template&id=29c8dea4&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/limits/App.vue?vue&type=template&id=29c8dea4& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"col-lg-8 slider-limits control-section\"},[_c('div',{staticClass:\"content_wrapper\",attrs:{\"id\":\"all-option-sample\"}},[_c('div',{staticClass:\"sliderwrap\"},[_c('label',{staticClass:\"userselect\"},[_vm._v(\"MinRange Slider With Limits\")]),_vm._v(\" \"),_c('ejs-slider',{ref:\"slider\",attrs:{\"id\":\"limitslider\",\"value\":_vm.value,\"min\":_vm.min,\"max\":_vm.max,\"type\":_vm.type,\"tooltip\":_vm.tooltip,\"ticks\":_vm.ticks,\"step\":_vm.step,\"limits\":_vm.limits}})],1),_vm._v(\" \"),_c('div',{staticClass:\"sliderwrap limits\"},[_c('label',{staticClass:\"userselect\"},[_vm._v(\"Range Slider With Limits\")]),_vm._v(\" \"),_c('ejs-slider',{ref:\"rangeslider\",attrs:{\"value\":_vm.rangevalue,\"min\":_vm.min,\"max\":_vm.max,\"type\":_vm.rangetype,\"tooltip\":_vm.rangetooltip,\"ticks\":_vm.rangeticks,\"step\":_vm.step,\"limits\":_vm.rangelimits}})],1)])]),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-4 property-section\",attrs:{\"id\":\"all-option-table\"}},[_c('table',{attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',[_vm._m(0),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\",\"padding-right\":\"10px\"}},[_c('div',[_c('ejs-numerictextbox',{attrs:{\"value\":_vm.minstartvalue,\"change\":_vm.minstartChange}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(1),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\",\"padding-right\":\"10px\"}},[_c('div',[_c('ejs-numerictextbox',{attrs:{\"min\":_vm.min,\"max\":_vm.max,\"value\":_vm.minendvalue,\"change\":_vm.minendChange}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(2),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\",\"padding-right\":\"10px\"}},[_c('div',[_c('ejs-numerictextbox',{attrs:{\"min\":_vm.min,\"max\":_vm.max,\"value\":_vm.maxstartvalue,\"change\":_vm.maxstartChange}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(3),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\",\"padding-right\":\"10px\"}},[_c('div',[_c('ejs-numerictextbox',{attrs:{\"min\":_vm.min,\"max\":_vm.max,\"value\":_vm.maxendvalue,\"change\":_vm.maxendChange}})],1)])]),_vm._v(\" \"),_c('tr',[_vm._m(4),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"id\":\"button\",\"change\":_vm.lockFirstHandle}})],1)]),_vm._v(\" \"),_c('tr',[_vm._m(5),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"id\":\"disabled\",\"change\":_vm.lockSecondHandle}})],1)])])])]),_vm._v(\" \"),_vm._m(6),_vm._v(\" \"),_vm._m(7)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"50%\"}},[_c('div',{staticClass:\"userselect\"},[_vm._v(\"MinStart\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"50%\"}},[_c('div',{staticClass:\"userselect\"},[_vm._v(\"MinEnd\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"50%\"}},[_c('div',{staticClass:\"userselect\"},[_vm._v(\"MaxStart\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"50%\"}},[_c('div',{staticClass:\"userselect\"},[_vm._v(\"MaxEnd\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"50%\"}},[_c('div',{staticClass:\"labeltext\"},[_vm._v(\"Lock First Handle\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"50%\"}},[_c('div',{staticClass:\"labeltext\"},[_vm._v(\"Lock Second Handle\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n      This sample demonstrates the rendering of Slider component with limits. Drag the thumb over the bar for selecting the\\n      values between assigned limit values. Change the values in the property pane to set different limit values.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n      The limits are used to limit between certain range. When the limits are assigned, draggable limited area will be in the dark\\n      shadow color of the current theme. The limits APIs are explained below.\\n    \")]),_vm._v(\" \"),_c('p'),_vm._v(\" \"),_c('table',[_c('tr',[_c('td',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/slider/limitData/#minstart\"}},[_vm._v(\"minStart\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"-   Used to set minimum limit value for first handle.\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/slider/limitData/#minend\"}},[_vm._v(\"minEnd\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"-   Used to set maximum limit value for first handle.\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/slider/limitData/#maxstart\"}},[_vm._v(\"maxStart\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"-   Used to set minimum limit value for second handle.\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/slider/limitData/#maxend\"}},[_vm._v(\"maxEnd\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"-   Used to set maximum limit value for first handle.\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/slider/limitData/#starthandlefixed\"}},[_vm._v(\"startHandleFixed\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"-   Used to lock the first handle in the current position.\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/slider/limitData/#endhandlefixed\"}},[_vm._v(\"endHandleFixed\")])]),_vm._v(\" \"),_c('td',[_vm._v(\"-   Used to lock the second handle in the current position.\")])])]),_vm._v(\" \"),_c('p',[_vm._v(\"In this demo, Limits with MinRange and range Slider is demonstrated.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"MinRange Slider – In this sample, the minimum and maximum limit of the slider is set to 10 and 40 respectively.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"\\n        Range Slider – In this sample, the minimum and maximum limit of the first handle is set to 10 and 40 respectively\\n        and the minimum and maximum limit of the second handle is set to 60 and 90 respectively.\\n      \")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      For more information, refer to the\\n      \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/range-slider/limits/\"}},[_vm._v(\"limits\")]),_vm._v(\" section from the documentation.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/range-slider/limits/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });