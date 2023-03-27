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
/******/ 		"range-slider/ticks-customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/ticks-customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/ticks-customization/App.vue":
/*!**********************************************************!*\
  !*** ./Samples/range-slider/ticks-customization/App.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5289c384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5289c384& */ \"./Samples/range-slider/ticks-customization/App.vue?vue&type=template&id=5289c384&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/ticks-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5289c384_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5289c384&lang=css& */ \"./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5289c384___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5289c384___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/ticks-customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/ticks-customization/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./Samples/range-slider/ticks-customization/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5289c384_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5289c384&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5289c384_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5289c384_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5289c384_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5289c384_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/ticks-customization/App.vue?vue&type=template&id=5289c384&":
/*!*****************************************************************************************!*\
  !*** ./Samples/range-slider/ticks-customization/App.vue?vue&type=template&id=5289c384& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5289c384___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5289c384& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=template&id=5289c384&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5289c384___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5289c384___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/ticks-customization/main.js":
/*!**********************************************************!*\
  !*** ./Samples/range-slider/ticks-customization/main.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/ticks-customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-customticks .slider-content_wrapper {\\n        width: 40%;\\n        margin: 0 auto;\\n        min-width: 185px;\\n}\\n.slider-customticks .userselect {\\n        -webkit-user-select: none;\\n        /* Safari 3.1+ */\\n        -moz-user-select: none;\\n        /* Firefox 2+ */\\n        -ms-user-select: none;\\n        /* IE 10+ */\\n        user-select: none;\\n        /* Standard syntax */\\n}\\n.slider-customticks .slider_labelText {\\n        text-align: -webkit-left;\\n        font-weight: 500;\\n        font-size: 13px;\\n        padding-bottom: 40px;\\n}\\n.slider-customticks .slider_container {\\n        margin-top: 40px;\\n}\\n.e-bigger .slider-customticks .slider-content_wrapper {\\n        width: 80%;\\n}\\n.slider-customticks #ticks_slider.e-control.e-slider .e-range {\\n        z-index: unset;\\n}\\n.fabric .slider-customticks #ticks_slider .e-slider-track, .fabric-dark .slider-customticks #ticks_slider .e-slider-track {\\n        border: 0;\\n        height: 4px;\\n        top: calc(50% - 2px);\\n        margin: 0;\\n}\\n.slider-customticks #ticks_slider .e-scale .e-tick {\\n        background-image: none;\\n        visibility: visible;\\n        font-family: 'e-customized-icons';\\n}\\n.slider-customticks #ticks_slider .e-scale {\\n        z-index: 0 !important;\\n}\\n.slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        content: '\\\\E967';\\n        position: absolute;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(1)::before {\\n        color: red;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(2)::before {\\n        color: blue;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(3)::before {\\n        color: green;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(4)::before {\\n        color: blueviolet;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(5)::before {\\n        color: orange;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(6)::before {\\n        color: pink;\\n}\\n.material .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .material-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 10px;\\n}\\n.material .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .material-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.6;\\n        left: calc(50% - 5px);\\n}\\n.material .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .material-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 5px);\\n}\\n.material .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .material-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 6px);\\n}\\n.fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 14px;\\n}\\n.fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.4;\\n        left: calc(50% - 7px);\\n}\\n.fabric .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .fabric-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.fabric .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .fabric-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 14px;\\n}\\n.bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 1.8;\\n        left: calc(50% - 7px);\\n}\\n.bootstrap .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .bootstrap-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.bootstrap .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .bootstrap-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 14px;\\n}\\n.highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.5;\\n        left: calc(50% - 7px);\\n}\\n.highcontrast .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.highcontrast .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.slider-customticks #slider+.e-scale .e-tick.e-first-tick :nth-child(2) {\\n        margin-left: -20px;\\n}\\n@font-face {\\n        font-family: 'e-customized-icons';\\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n        font-weight: normal;\\n        font-style: normal;\\n}\\n.bootstrap4 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.3;\\n        left: calc(50% - 7px);\\n}\\n.bootstrap4 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.bootstrap4 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.tailwind #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.3;\\n        left: calc(50% - 6px);\\n}\\n.tailwind.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before {\\n        top: 2px;\\n}\\n.tailwind #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .tailwind-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 6px);\\n}\\n.tailwind #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .tailwind-dark #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 6px);\\n}\\n.bootstrap5 #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.3;\\n        left: calc(50% - 6px);\\n}\\n.bootstrap5.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before {\\n        top: 2px;\\n}\\n.bootstrap5 #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .bootstrap5-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 6px);\\n}\\n.bootstrap5 #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .bootstrap5-dark #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 6px);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/nputs-vue-samples_release_21.1.1/Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,WAAW;QACX,eAAe;QACf,iBAAiB;CACxB;AACD;QACQ,0BAA0B;QAC1B,iBAAiB;QACjB,uBAAuB;QACvB,gBAAgB;QAChB,sBAAsB;QACtB,YAAY;QACZ,kBAAkB;QAClB,qBAAqB;CAC5B;AACD;QACQ,yBAAyB;QACzB,iBAAiB;QACjB,gBAAgB;QAChB,qBAAqB;CAC5B;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,WAAW;CAClB;AACD;QACQ,eAAe;CACtB;AACD;QACQ,UAAU;QACV,YAAY;QACZ,qBAAqB;QACrB,UAAU;CACjB;AACD;QACQ,uBAAuB;QACvB,oBAAoB;QACpB,kCAAkC;CACzC;AACD;QACQ,sBAAsB;CAC7B;AACD;QACQ,iBAAiB;QACjB,mBAAmB;CAC1B;AACD;QACQ,WAAW;CAClB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,aAAa;CACpB;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,cAAc;CACrB;AACD;QACQ,YAAY;CACnB;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,gBAAgB;CACvB;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,mBAAmB;CAC1B;AACD;QACQ,kCAAkC;QAClC,2uFAA2uF;QAC3uF,oBAAoB;QACpB,mBAAmB;CAC1B;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,SAAS;CAChB;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B;AACD;QACQ,iBAAiB;QACjB,sBAAsB;CAC7B;AACD;QACQ,SAAS;CAChB;AACD;QACQ,qBAAqB;CAC5B;AACD;QACQ,uBAAuB;CAC9B\",\"file\":\"App.vue?vue&type=style&index=0&id=5289c384&lang=css&\",\"sourcesContent\":[\"\\n.slider-customticks .slider-content_wrapper {\\n        width: 40%;\\n        margin: 0 auto;\\n        min-width: 185px;\\n}\\n.slider-customticks .userselect {\\n        -webkit-user-select: none;\\n        /* Safari 3.1+ */\\n        -moz-user-select: none;\\n        /* Firefox 2+ */\\n        -ms-user-select: none;\\n        /* IE 10+ */\\n        user-select: none;\\n        /* Standard syntax */\\n}\\n.slider-customticks .slider_labelText {\\n        text-align: -webkit-left;\\n        font-weight: 500;\\n        font-size: 13px;\\n        padding-bottom: 40px;\\n}\\n.slider-customticks .slider_container {\\n        margin-top: 40px;\\n}\\n.e-bigger .slider-customticks .slider-content_wrapper {\\n        width: 80%;\\n}\\n.slider-customticks #ticks_slider.e-control.e-slider .e-range {\\n        z-index: unset;\\n}\\n.fabric .slider-customticks #ticks_slider .e-slider-track, .fabric-dark .slider-customticks #ticks_slider .e-slider-track {\\n        border: 0;\\n        height: 4px;\\n        top: calc(50% - 2px);\\n        margin: 0;\\n}\\n.slider-customticks #ticks_slider .e-scale .e-tick {\\n        background-image: none;\\n        visibility: visible;\\n        font-family: 'e-customized-icons';\\n}\\n.slider-customticks #ticks_slider .e-scale {\\n        z-index: 0 !important;\\n}\\n.slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        content: '\\\\e967';\\n        position: absolute;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(1)::before {\\n        color: red;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(2)::before {\\n        color: blue;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(3)::before {\\n        color: green;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(4)::before {\\n        color: blueviolet;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(5)::before {\\n        color: orange;\\n}\\n.slider-customticks #ticks_slider .e-scale :nth-child(6)::before {\\n        color: pink;\\n}\\n.material .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .material-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 10px;\\n}\\n.material .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .material-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.6;\\n        left: calc(50% - 5px);\\n}\\n.material .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .material-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 5px);\\n}\\n.material .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .material-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 6px);\\n}\\n.fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 14px;\\n}\\n.fabric .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .fabric-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.4;\\n        left: calc(50% - 7px);\\n}\\n.fabric .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .fabric-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.fabric .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .fabric-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 14px;\\n}\\n.bootstrap .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap-dark .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 1.8;\\n        left: calc(50% - 7px);\\n}\\n.bootstrap .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .bootstrap-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.bootstrap .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .bootstrap-dark .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        font-size: 14px;\\n}\\n.highcontrast .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.5;\\n        left: calc(50% - 7px);\\n}\\n.highcontrast .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.highcontrast .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.slider-customticks #slider+.e-scale .e-tick.e-first-tick :nth-child(2) {\\n        margin-left: -20px;\\n}\\n@font-face {\\n        font-family: 'e-customized-icons';\\n        src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n        font-weight: normal;\\n        font-style: normal;\\n}\\n.bootstrap4 .slider-customticks #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.3;\\n        left: calc(50% - 7px);\\n}\\n.bootstrap4 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 7px);\\n}\\n.bootstrap4 .slider-customticks #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 7px);\\n}\\n.tailwind #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.3;\\n        left: calc(50% - 6px);\\n}\\n.tailwind.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .tailwind-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before {\\n        top: 2px;\\n}\\n.tailwind #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .tailwind-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 6px);\\n}\\n.tailwind #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .tailwind-dark #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 6px);\\n}\\n.bootstrap5 #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark #ticks_slider .e-scale .e-tick.e-custom::before {\\n        line-height: 2.3;\\n        left: calc(50% - 6px);\\n}\\n.bootstrap5.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before, .bootstrap5-dark.e-bigger #ticks_slider .e-scale .e-tick.e-custom::before {\\n        top: 2px;\\n}\\n.bootstrap5 #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before, .bootstrap5-dark #slider_wrapper #ticks_slider .e-scale :nth-child(1)::before {\\n        left: calc(0% - 6px);\\n}\\n.bootstrap5 #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before, .bootstrap5-dark #slider_wrapper #ticks_slider .e-scale :nth-child(6)::before {\\n        left: calc(100% - 6px);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/ticks-customization/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ \"./node_modules/@syncfusion/ej2-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n     count: 1,\n     value: 20,\n     min: 0,\n     max: 100,\n     step: 5,\n     type: 'MinRange',\n     ticks: { placement: 'Before', largeStep: 20 },\n     slider_ticks: { placement: 'Both', largeStep: 20, smallStep: 5 },\n    };\n  },\n  methods:{\n       renderingTicks: function(args) {\n        if (args.tickElement.classList.contains('e-large')) {\n            args.tickElement.classList.add('e-custom');\n        }\n      },\n      renderedTicks: function(args) {\n        let li = args.ticksWrapper.getElementsByClassName('e-large');\n        let remarks = ['Very Poor', 'Poor', 'Average', 'Good', 'Very Good', 'Excellent'];\n        for (let i = 0; i < li.length; ++i) {\n            li[i].querySelectorAll('.e-tick-both')[1].innerText = remarks[i];\n        }\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=template&id=5289c384&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/ticks-customization/App.vue?vue&type=template&id=5289c384& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"col-lg-12 slider-customticks control-section\" },\n    [\n      _c(\"div\", { staticClass: \"slider-content_wrapper\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"slider_container\", attrs: { id: \"slider_wrapper\" } },\n          [\n            _c(\"div\", { staticClass: \"slider_labelText userselect\" }, [\n              _vm._v(\"Dynamic ticks color\"),\n            ]),\n            _vm._v(\" \"),\n            _c(\"ejs-slider\", {\n              attrs: {\n                id: \"ticks_slider\",\n                value: _vm.value,\n                min: _vm.min,\n                max: _vm.max,\n                type: _vm.type,\n                step: _vm.step,\n                ticks: _vm.ticks,\n                renderingTicks: _vm.renderingTicks,\n              },\n            }),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"slider_container\" },\n          [\n            _c(\"div\", { staticClass: \"slider_labelText userselect\" }, [\n              _vm._v(\"Ticks with legends\"),\n            ]),\n            _vm._v(\" \"),\n            _c(\"ejs-slider\", {\n              attrs: {\n                id: \"slider\",\n                value: _vm.value,\n                min: _vm.min,\n                max: _vm.max,\n                type: _vm.type,\n                ticks: _vm.slider_ticks,\n                renderedTicks: _vm.renderedTicks,\n              },\n            }),\n          ],\n          1\n        ),\n      ]),\n      _vm._v(\" \"),\n      _vm._m(0),\n      _vm._v(\" \"),\n      _vm._m(1),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the customization of Slider's tick. Drag the thumb over the bar for selecting the values between\\n        min and max.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"In this demo, customization of ticks using CSS is demonstrated.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Dynamic ticks color - In this sample, ticks has been customized to different colors by adding icon at each ticks.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Ticks with legends - In this sample, track has been formatted to display custom text using renderingTicks and renderedTicks\\n            events. \"\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5289c384&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/ticks-customization/App.vue?vue&type=style&index=0&id=5289c384&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"34d6a2b6\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/range-slider/ticks-customization/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });