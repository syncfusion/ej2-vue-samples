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
/******/ 		"range-slider/tooltip-customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/tooltip-customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/tooltip-customization/App.vue":
/*!************************************************************!*\
  !*** ./Samples/range-slider/tooltip-customization/App.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3589e1d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3589e1d1& */ \"./Samples/range-slider/tooltip-customization/App.vue?vue&type=template&id=3589e1d1&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/tooltip-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3589e1d1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3589e1d1&lang=css& */ \"./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3589e1d1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3589e1d1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/tooltip-customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip-customization/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./Samples/range-slider/tooltip-customization/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3589e1d1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3589e1d1&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3589e1d1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3589e1d1_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3589e1d1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3589e1d1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip-customization/App.vue?vue&type=template&id=3589e1d1&":
/*!*******************************************************************************************!*\
  !*** ./Samples/range-slider/tooltip-customization/App.vue?vue&type=template&id=3589e1d1& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3589e1d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3589e1d1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=template&id=3589e1d1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3589e1d1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3589e1d1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip-customization/main.js":
/*!************************************************************!*\
  !*** ./Samples/range-slider/tooltip-customization/main.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/tooltip-customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-tooltipcustomization .slider_wrap .label-text {\\n  font-weight: 500;\\n}\\n.slider-tooltipcustomization .content_wrapper {\\n  width: 80%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-tooltipcustomization .slider_wrap {\\n  margin-top: 40px;\\n}\\n.slider-tooltipcustomization #defaultTooltip .e-handle,\\n    .slider-tooltipcustomization #out .e-handle,\\n    .bootstrap .slider-tooltipcustomization #out .e-handle,\\n    .bootstrap .slider-tooltipcustomization #defaultTooltip .e-handle,\\n    .fabric .slider-tooltipcustomization #out .e-handle,\\n    .fabric .slider-tooltipcustomization #defaultTooltip .e-handle,\\n    .highcontrast .slider-tooltipcustomization #out .e-handle,\\n    .highcontrast .slider-tooltipcustomization #defaultTooltip .e-handle {\\n        background-color: #ffd939;\\n        border-color: #ffd939;\\n        z-index: 1;\\n}\\n.e-bigger .slider-tooltipcustomization .content_wrapper {\\n        width: 80%;\\n}\\n.slider-tooltipcustomization .slider_wrap label {\\n        padding-bottom: 26px;\\n        font-size: 13px;\\n        font-weight: 500;\\n        margin-top: 15px;\\n}\\n.slider-tooltipcustomization .userselect {\\n        -webkit-user-select: none;\\n        /* Safari 3.1+ */\\n        -moz-user-select: none;\\n        /* Firefox 2+ */\\n        -ms-user-select: none;\\n        /* IE 10+ */\\n        user-select: none;\\n        /* Standard syntax */\\n}\\n.e-slider-tooltip.e-tooltip-wrap.e-popup.e-tooltip-cutomization .e-tip-content,\\n    .e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-range.e-tooltip-cutomization .e-tip-content.e-material-tooltip-show {\\n        color: #333;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-inner{\\n        color: #ffd939;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {\\n        border-top-color: #ffd939;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {\\n        border-bottom-color: #ffd939;\\n}\\n.slider-tooltipcustomization .e-slider-container .e-slider#defaultTooltip .e-range,\\n    .slider-tooltipcustomization .e-slider-container .e-slider#out .e-range {\\n        background-color: #0375be;\\n        z-index: unset;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-default.e-slider-horizontal-after,\\n    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-default.e-slider-horizontal-before,\\n    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup {\\n        background-color: #ffd939;\\n        border-color: #ffd939;\\n}\\n.bootstrap .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {\\n        border-top-color: #ffd939;\\n}\\n.bootstrap .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-inner {\\n        color: #ffd939;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/nputs-vue-samples_release_22.1.1/Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;;;;;;;;QAQQ,0BAA0B;QAC1B,sBAAsB;QACtB,WAAW;CAClB;AACD;QACQ,WAAW;CAClB;AACD;QACQ,qBAAqB;QACrB,gBAAgB;QAChB,iBAAiB;QACjB,iBAAiB;CACxB;AACD;QACQ,0BAA0B;QAC1B,iBAAiB;QACjB,uBAAuB;QACvB,gBAAgB;QAChB,sBAAsB;QACtB,YAAY;QACZ,kBAAkB;QAClB,qBAAqB;CAC5B;AACD;;QAEQ,YAAY;CACnB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,0BAA0B;CACjC;AACD;QACQ,6BAA6B;CACpC;AACD;;QAEQ,0BAA0B;QAC1B,eAAe;CACtB;AACD;;;QAGQ,0BAA0B;QAC1B,sBAAsB;CAC7B;AACD;QACQ,0BAA0B;CACjC;AACD;QACQ,eAAe;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&\",\"sourcesContent\":[\"\\n.slider-tooltipcustomization .slider_wrap .label-text {\\n  font-weight: 500;\\n}\\n.slider-tooltipcustomization .content_wrapper {\\n  width: 80%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-tooltipcustomization .slider_wrap {\\n  margin-top: 40px;\\n}\\n.slider-tooltipcustomization #defaultTooltip .e-handle,\\n    .slider-tooltipcustomization #out .e-handle,\\n    .bootstrap .slider-tooltipcustomization #out .e-handle,\\n    .bootstrap .slider-tooltipcustomization #defaultTooltip .e-handle,\\n    .fabric .slider-tooltipcustomization #out .e-handle,\\n    .fabric .slider-tooltipcustomization #defaultTooltip .e-handle,\\n    .highcontrast .slider-tooltipcustomization #out .e-handle,\\n    .highcontrast .slider-tooltipcustomization #defaultTooltip .e-handle {\\n        background-color: #ffd939;\\n        border-color: #ffd939;\\n        z-index: 1;\\n}\\n.e-bigger .slider-tooltipcustomization .content_wrapper {\\n        width: 80%;\\n}\\n.slider-tooltipcustomization .slider_wrap label {\\n        padding-bottom: 26px;\\n        font-size: 13px;\\n        font-weight: 500;\\n        margin-top: 15px;\\n}\\n.slider-tooltipcustomization .userselect {\\n        -webkit-user-select: none;\\n        /* Safari 3.1+ */\\n        -moz-user-select: none;\\n        /* Firefox 2+ */\\n        -ms-user-select: none;\\n        /* IE 10+ */\\n        user-select: none;\\n        /* Standard syntax */\\n}\\n.e-slider-tooltip.e-tooltip-wrap.e-popup.e-tooltip-cutomization .e-tip-content,\\n    .e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-range.e-tooltip-cutomization .e-tip-content.e-material-tooltip-show {\\n        color: #333;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-inner{\\n        color: #ffd939;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {\\n        border-top-color: #ffd939;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {\\n        border-bottom-color: #ffd939;\\n}\\n.slider-tooltipcustomization .e-slider-container .e-slider#defaultTooltip .e-range,\\n    .slider-tooltipcustomization .e-slider-container .e-slider#out .e-range {\\n        background-color: #0375be;\\n        z-index: unset;\\n}\\n.e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-default.e-slider-horizontal-after,\\n    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup.e-material-default.e-slider-horizontal-before,\\n    .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup {\\n        background-color: #ffd939;\\n        border-color: #ffd939;\\n}\\n.bootstrap .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-outer {\\n        border-top-color: #ffd939;\\n}\\n.bootstrap .e-tooltip-cutomization.e-slider-tooltip.e-tooltip-wrap.e-popup .e-arrow-tip-inner {\\n        color: #ffd939;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip-customization/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ \"./node_modules/@syncfusion/ej2-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      ticks: {\n        placement: \"After\",\n        // 3 * 3600000 milliseconds = 3 Hour\n        largeStep: 3 * 3600000,\n        smallStep: 3600000,\n        showSmallTicks: true\n      },\n      tooltip: {\n        placement: \"Before\",\n        isVisible: true,\n        cssClass: \"e-tooltip-cutomization\"\n      },\n      step: 3600000 / 6,\n      min: new Date(2013, 6, 13, 11).getTime(),\n      max: new Date(2013, 6, 13, 23).getTime(),\n      value: [\n        new Date(2013, 6, 13, 12).getTime(),\n        new Date(2013, 6, 13, 18).getTime()\n      ],\n      slidervalue: new Date(2013, 6, 13, 17).getTime()\n    };\n  },\n  methods: {\n    renderingTicksHandler: function(args) {\n      let totalMiliSeconds = Number(args.value);\n      /**\n       * toLocaleTimeString is predefined javascript date function, which is used to\n       * customize the date in different format\n       */\n      let custom = { hour: \"2-digit\", minute: \"2-digit\" };\n      // Assigning our custom text to the tick value.\n      args.text = new Date(totalMiliSeconds).toLocaleTimeString(\n        \"en-us\",\n        custom\n      );\n    },\n    tooltipChangeHandler: function(args) {\n      /**\n       * toLocaleTimeString is predefined javascript date function, which is used to\n       * customize the date in different format\n       */\n      let custom = { hour: \"2-digit\", minute: \"2-digit\" };\n      // Splitting the range values from the tooltip using space into an array.\n      if (args.text.indexOf(\"-\") !== -1) {\n        let totalMiliSeconds = args.text.split(\" \");\n        // First part is the first handle value\n        let firstPart = totalMiliSeconds[0];\n        // Second part is the second handle value\n        let secondPart = totalMiliSeconds[2];\n\n        firstPart = new Date(Number(firstPart)).toLocaleTimeString(\n          \"en-us\",\n          custom\n        );\n        secondPart = new Date(Number(secondPart)).toLocaleTimeString(\n          \"en-us\",\n          custom\n        );\n        // Assigning our custom text to the tooltip value.\n        args.text = firstPart + \" - \" + secondPart;\n      } else {\n        args.text =\n          \"Until \" +\n          new Date(Number(args.text)).toLocaleTimeString(\"en-us\", custom);\n      }\n    },\n    onScroll: function() {\n      if (\n        !Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(document.getElementById(\"defaultTooltip\")) &&\n        this.$refs.defaultSlider\n      ) {\n        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);\n        this.$refs.outSlider.ej2Instances.refreshTooltip(this.$refs.outSlider.ej2Instances.tooltipTarget);\n      }\n    }\n  },\n  mounted: function() {\n    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__[\"isNullOrUndefined\"])(document.getElementById(\"right-pane\"))) {\n      document\n        .getElementById(\"right-pane\")\n        .addEventListener(\"scroll\", this.onScroll.bind(this));\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=template&id=3589e1d1&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip-customization/App.vue?vue&type=template&id=3589e1d1& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-12 control-section slider-tooltipcustomization\" },\n    [\n      _c(\"div\", { staticClass: \"content_wrapper\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"slider_wrap\" },\n          [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"ejs-slider\", {\n              ref: \"defaultSlider\",\n              attrs: {\n                id: \"defaultTooltip\",\n                value: _vm.value,\n                min: _vm.min,\n                max: _vm.max,\n                step: _vm.step,\n                tooltipChange: _vm.tooltipChangeHandler,\n                tooltip: _vm.tooltip,\n                renderingTicks: _vm.renderingTicksHandler,\n                ticks: _vm.ticks,\n                type: \"Range\",\n              },\n            }),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"slider_wrap\" },\n          [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"ejs-slider\", {\n              ref: \"outSlider\",\n              attrs: {\n                id: \"out\",\n                value: _vm.slidervalue,\n                min: _vm.min,\n                max: _vm.max,\n                step: _vm.step,\n                tooltipChange: _vm.tooltipChangeHandler,\n                tooltip: _vm.tooltip,\n                renderingTicks: _vm.renderingTicksHandler,\n                ticks: _vm.ticks,\n                type: \"MinRange\",\n              },\n            }),\n          ],\n          1\n        ),\n      ]),\n      _vm._v(\" \"),\n      _vm._m(2),\n      _vm._v(\" \"),\n      _vm._m(3),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", { staticClass: \"labeltext userselect\" }, [\n      _c(\"span\", { staticClass: \"label-text\" }, [_vm._v(\"Background color\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"label\", { staticClass: \"labeltext userselect\" }, [\n      _c(\"span\", { staticClass: \"label-text\" }, [_vm._v(\"Color and text\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates the customization of Slider's tooltip. Drag the thumb over the bar for selecting the values\\n      between min and max.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"In this demo, customization of tooltip using CSS is demonstrated.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Background color - In this sample, tooltip has been customized to custom color.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Color and text - In this sample, tooltip and its content has been customized to custom color.\"\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3589e1d1&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip-customization/App.vue?vue&type=style&index=0&id=3589e1d1&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"12ce78e0\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip-customization/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });