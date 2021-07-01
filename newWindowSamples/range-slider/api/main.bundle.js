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
/******/ 		"range-slider/api/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/api/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/api/App.vue":
/*!******************************************!*\
  !*** ./Samples/range-slider/api/App.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4287c6e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4287c6e2& */ \"./Samples/range-slider/api/App.vue?vue&type=template&id=4287c6e2&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4287c6e2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4287c6e2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/api/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/api/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./Samples/range-slider/api/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/api/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/api/App.vue?vue&type=template&id=4287c6e2&":
/*!*************************************************************************!*\
  !*** ./Samples/range-slider/api/App.vue?vue&type=template&id=4287c6e2& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4287c6e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4287c6e2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/api/App.vue?vue&type=template&id=4287c6e2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4287c6e2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4287c6e2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/api/main.js":
/*!******************************************!*\
  !*** ./Samples/range-slider/api/main.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/api/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/api/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.sb-mobile-prop-pane .slider-api#all-option-table #desktop-checkbox-row-1,\\n.sb-mobile-prop-pane .slider-api#all-option-table #desktop-checkbox-row-2 {\\n    display: none;\\n}\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobie-checkbox-row-1,\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobile-checkbox-row-2,\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobile-checkbox-row-3,\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobile-checkbox-row-4 {\\n    display: table-row;\\n}\\n.slider-api#all-option-table #mobie-checkbox-row-1,\\n.slider-api#all-option-table #mobile-checkbox-row-2,\\n.slider-api#all-option-table #mobile-checkbox-row-3,\\n.slider-api#all-option-table #mobile-checkbox-row-4 {\\n    display: none;\\n}\\n.slider-api#all-option-table .property-panel-section .property-panel-content table#property tr {\\n    height: 50px;\\n}\\n.slider-api #all-option-sample .e-slider-container.e-vertical {\\n    margin-left: 40%;\\n}\\n.slider-api #all-option-sample.content_wrapper {\\n    width: 50%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n}\\n.slider-api .sliderwrap{\\n    height: 340px;\\n}\\n.slider-api .content_wrapper {\\n    width: 50%;\\n}\\n.slider-api .sliderwrap label {\\n    padding-bottom: 26px;\\n    font-size: 13px;\\n    font-weight: 500;\\n    margin-top: 15px;\\n    text-align: left;\\n    width: 100%;\\n}\\n.slider-api #all-option-sample .e-slider-container.e-horizontal {\\n    margin-top: 160px;\\n}\\n.slider-api .userselect {\\n    -webkit-user-select: none;\\n    /* Safari 3.1+ */\\n    -moz-user-select: none;\\n    /* Firefox 2+ */\\n    -ms-user-select: none;\\n    /* IE 10+ */\\n    user-select: none;\\n    /* Standard syntax */\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-AKCBNP47DT3PFGRK7KSU3VWUUB7G6VMVS76UHZZZC2BQNLNYCVQQ/Samples/range-slider/api/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;IAEI,cAAc;CACjB;AACD;;;;IAII,mBAAmB;CACtB;AACD;;;;IAII,cAAc;CACjB;AACD;IACI,aAAa;CAChB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;IACI,WAAW;CACd;AACD;IACI,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;CACf;AACD;IACI,kBAAkB;CACrB;AACD;IACI,0BAA0B;IAC1B,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;CACxB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.sb-mobile-prop-pane .slider-api#all-option-table #desktop-checkbox-row-1,\\n.sb-mobile-prop-pane .slider-api#all-option-table #desktop-checkbox-row-2 {\\n    display: none;\\n}\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobie-checkbox-row-1,\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobile-checkbox-row-2,\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobile-checkbox-row-3,\\n.sb-mobile-prop-pane .slider-api#all-option-table #mobile-checkbox-row-4 {\\n    display: table-row;\\n}\\n.slider-api#all-option-table #mobie-checkbox-row-1,\\n.slider-api#all-option-table #mobile-checkbox-row-2,\\n.slider-api#all-option-table #mobile-checkbox-row-3,\\n.slider-api#all-option-table #mobile-checkbox-row-4 {\\n    display: none;\\n}\\n.slider-api#all-option-table .property-panel-section .property-panel-content table#property tr {\\n    height: 50px;\\n}\\n.slider-api #all-option-sample .e-slider-container.e-vertical {\\n    margin-left: 40%;\\n}\\n.slider-api #all-option-sample.content_wrapper {\\n    width: 50%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n}\\n.slider-api .sliderwrap{\\n    height: 340px;\\n}\\n.slider-api .content_wrapper {\\n    width: 50%;\\n}\\n.slider-api .sliderwrap label {\\n    padding-bottom: 26px;\\n    font-size: 13px;\\n    font-weight: 500;\\n    margin-top: 15px;\\n    text-align: left;\\n    width: 100%;\\n}\\n.slider-api #all-option-sample .e-slider-container.e-horizontal {\\n    margin-top: 160px;\\n}\\n.slider-api .userselect {\\n    -webkit-user-select: none;\\n    /* Safari 3.1+ */\\n    -moz-user-select: none;\\n    /* Firefox 2+ */\\n    -ms-user-select: none;\\n    /* IE 10+ */\\n    user-select: none;\\n    /* Standard syntax */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/api/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/api/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"NumericTextBoxPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n     tooltip:  { isVisible: true, placement: 'Before', showOn: 'Hover' },\n     value: 30,\n     min: 0,\n     max: 100,\n     shwbuttons: false,\n     step: 1,\n     checked: false,\n     isenable: true,\n     readonly: false,\n     orientation: \"Horizontal\",\n     ticks: { placement: 'After', largeStep: 20 },\n      type: 'MinRange',\n      numericvalue : 30\n    };\n  },\n  methods: {\n    onChange: function(args) {\n      this.numericvalue = args.value;\n    },\n    valueChange: function(args) {\n      this.value = args.value;\n    },\n    minvalueChange: function(args) {\n      this.min = args.value;\n    },\n    maxvalueChange: function(args) {\n      this.max = args.value;\n    },\n    stepvalueChange: function(args) {\n      this.step = args.value;\n    },\n    //checkbox events\n    showButton: function(args) {\n      this.shwbuttons = args.checked;\n    },\n    sliderDisabled: function(args) {\n      this.isenable = !args.checked ;\n    },\n    orientationChange: function(args) {\n      args.checked ? this.orientation = 'Vertical' : this.orientation = 'Horizontal';\n    },\n    readonlyChange: function(args) {\n      this.readonly = args.checked;\n    },\n    onScroll: function() {\n         if(!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(document.getElementById('apislider') && this.$refs.slider)){\n            this.$refs.slider.ej2Instances.refreshTooltip(this.$refs.slider.ej2Instances.tooltipTarget);\n         }\n    }\n  },\n mounted: function(){\n    if (document.getElementById('right-pane')) {\n        document.getElementById('right-pane').addEventListener('scroll', this.onScroll.bind(this));\n    }\n }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/api/App.vue?vue&type=template&id=4287c6e2&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/api/App.vue?vue&type=template&id=4287c6e2& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section slider-api\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content_wrapper\", attrs: { id: \"all-option-sample\" } },\n        [\n          _c(\n            \"div\",\n            { staticClass: \"sliderwrap\" },\n            [\n              _c(\"ejs-slider\", {\n                ref: \"slider\",\n                attrs: {\n                  id: \"apislider\",\n                  value: _vm.value,\n                  min: _vm.min,\n                  max: _vm.max,\n                  type: _vm.type,\n                  tooltip: _vm.tooltip,\n                  ticks: _vm.ticks,\n                  step: _vm.step,\n                  showButtons: _vm.shwbuttons,\n                  orientation: _vm.orientation,\n                  enabled: _vm.isenable,\n                  readonly: _vm.readonly,\n                  change: _vm.onChange\n                }\n              })\n            ],\n            1\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      {\n        staticClass: \"col-lg-4 property-section slider-api\",\n        attrs: { id: \"all-option-table\" }\n      },\n      [\n        _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-numerictextbox\", {\n                        attrs: {\n                          format: \"n0\",\n                          value: _vm.numericvalue,\n                          change: _vm.valueChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-numerictextbox\", {\n                        attrs: {\n                          id: \"min\",\n                          format: \"n0\",\n                          value: \"0\",\n                          change: _vm.minvalueChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-numerictextbox\", {\n                        attrs: {\n                          id: \"max\",\n                          format: \"n0\",\n                          value: \"100\",\n                          change: _vm.maxvalueChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-numerictextbox\", {\n                        attrs: {\n                          id: \"step\",\n                          value: \"1\",\n                          format: \"n0\",\n                          change: _vm.stepvalueChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"desktop-checkbox-row-1\" } }, [\n              _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"userselect\",\n                    staticStyle: { \"padding-left\": \"0\" }\n                  },\n                  [\n                    _c(\"ejs-checkbox\", {\n                      attrs: {\n                        id: \"button\",\n                        checked: _vm.checked,\n                        label: \"Show Buttons\",\n                        change: _vm.showButton\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticStyle: { \"padding-left\": \"0\", \"padding-top\": \"0\" }\n                    },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"disabled\",\n                          checked: _vm.checked,\n                          label: \"Disabled\",\n                          change: _vm.sliderDisabled\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"desktop-checkbox-row-2\" } }, [\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticStyle: { \"padding-left\": \"0\", \"padding-top\": \"0\" }\n                    },\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"readOnly\",\n                          checked: _vm.checked,\n                          label: \"Readonly\",\n                          change: _vm.readonlyChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass: \"userselect\",\n                    staticStyle: { \"padding-left\": \"0\" }\n                  },\n                  [\n                    _c(\"ejs-checkbox\", {\n                      attrs: {\n                        id: \"orientation\",\n                        checked: _vm.checked,\n                        label: \"Vertical Orientation\",\n                        change: _vm.orientationChange\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"mobie-checkbox-row-1\" } }, [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"mb-button\",\n                          checked: _vm.checked,\n                          change: _vm.showButton\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"mobile-checkbox-row-2\" } }, [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"mb-disabled\",\n                          checked: _vm.checked,\n                          change: _vm.sliderDisabled\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"mobile-checkbox-row-3\" } }, [\n              _vm._m(6),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"mb-orientation\",\n                          checked: _vm.checked,\n                          change: _vm.orientationChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { attrs: { id: \"mobile-checkbox-row-4\" } }, [\n              _vm._m(7),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n                [\n                  _c(\n                    \"div\",\n                    [\n                      _c(\"ejs-checkbox\", {\n                        attrs: {\n                          id: \"mb-readOnly\",\n                          checked: _vm.checked,\n                          change: _vm.readonlyChange\n                        }\n                      })\n                    ],\n                    1\n                  )\n                ]\n              )\n            ])\n          ])\n        ])\n      ]\n    ),\n    _vm._v(\" \"),\n    _vm._m(8),\n    _vm._v(\" \"),\n    _vm._m(9)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Value\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Min\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Max\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Step\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Show Buttons\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Disabled\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Vertical Orientation\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Readonly\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the customization of Slider component by using its properties from property pane. Select any\\n        combination of properties from property pane to customize Slider component.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"In this demo, default slider is rendered with minimal configuration.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"This sample can be customized further with the combination of Slider properties from the property pane. For example,\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Min, max, value and Steps can be changed from the property pane.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Ticks can be enabled by selecting the ticks placement from the property pane.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Tooltip can be enabled by checking Show tooltip checkbox from property pane.\"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Vertical orientation can be enabled by checking vertical orientation from property pane and so on.\"\n          )\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/api/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });