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
/******/ 		"maps/zooming/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/zooming/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/zooming/App.vue":
/*!**************************************!*\
  !*** ./Samples/maps/zooming/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_52b499c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=52b499c6& */ \"./Samples/maps/zooming/App.vue?vue&type=template&id=52b499c6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/zooming/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_52b499c6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_52b499c6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/zooming/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?");

/***/ }),

/***/ "./Samples/maps/zooming/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/maps/zooming/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/zooming/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?");

/***/ }),

/***/ "./Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?");

/***/ }),

/***/ "./Samples/maps/zooming/App.vue?vue&type=template&id=52b499c6&":
/*!*********************************************************************!*\
  !*** ./Samples/maps/zooming/App.vue?vue&type=template&id=52b499c6& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_52b499c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=52b499c6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/zooming/App.vue?vue&type=template&id=52b499c6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_52b499c6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_52b499c6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?");

/***/ }),

/***/ "./Samples/maps/zooming/main.js":
/*!**************************************!*\
  !*** ./Samples/maps/zooming/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/zooming/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/zooming/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#maps-zoom-sample .slider-content-wrapper {\\n    width: 40%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n}\\n#maps-zoom-sample .slider-userselect {\\n    -webkit-user-select: none;\\n    /* Safari 3.1+ */\\n    -moz-user-select: none;\\n    /* Firefox 2+ */\\n    -ms-user-select: none;\\n    /* IE 10+ */\\n    user-select: none;\\n    /* Standard syntax */\\n}\\n#maps-zoom-sample .slider-labeltext {\\n    text-align: -webkit-left;\\n    font-weight: 500;\\n    font-size: 13px;\\n    padding-bottom: 10px;\\n}\\n#maps-zoom-sample .slider_container {\\n    margin-top: 40px;\\n}\\n#maps-zoom-sample .e-bigger .slider-content-wrapper {\\n    width: 80%;\\n}\\n#maps-zoom-sample #height_slider .e-tab-handle::after {\\n    background-color: #f9920b;\\n}\\n#maps-zoom-sample #height_slider.e-control.e-slider .e-slider-track {\\n    height: 8px;\\n    top: calc(50% - 4px);\\n    border-radius: 0;\\n}\\n#maps-zoom-sample .highcontrast #height_slider.e-control.e-slider .e-slider-track {\\n    height: 10px;\\n    top: calc(50% - 5px);\\n    border-radius: 0;\\n}\\n#maps-zoom-sample .fabric .slider_container .e-slider-hover .e-slider-track, #maps-zoom-sample .fabric .slider_container .e-slider-container:active .e-slider-track,\\n#maps-zoom-sample .fabric .slider_container .e-slider-container .e-slider .e-tab-track{\\n    background-color: #c8c8c8;\\n}\\n#maps-zoom-sample #gradient_slider.e-control.e-slider .e-range {\\n    height: 6px;\\n    top: calc(50% - 3px);\\n    border-radius: 5px;\\n    background: linear-gradient(to top left, #f9f9f9 25%, #f9920b 90%);\\n}\\n#maps-zoom-sample .fabric .slider_container .e-slider-hover .e-slider-track,\\n#maps-zoom-sample .fabric .slider_container .e-slider-container:active .e-slider-track,\\n#maps-zoom-sample .fabric .slider_container .e-slider-container .e-slider .e-tab-track {\\n    background-color: #c8c8c8;\\n}\\n#maps-zoom-sample #gradient_slider.e-control.e-slider .e-slider-track {\\n    height: 8px;\\n    top: calc(50% - 4px);\\n    border-radius: 5px;\\n}\\n#maps-zoom-sample #control-container {\\n    padding: 0px !important;\\n}\\n#maps-zoom-sample #range > * {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/zooming/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,WAAW;IACX,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,0BAA0B;IAC1B,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;IAChB,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;CACxB;AACD;IACI,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB;IAChB,qBAAqB;CACxB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,WAAW;CACd;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,qBAAqB;IACrB,iBAAiB;CACpB;AACD;;IAEI,0BAA0B;CAC7B;AACD;IACI,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;IACnB,mEAAmE;CACtE;AACD;;;IAGI,0BAA0B;CAC7B;AACD;IACI,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;CACtB;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#maps-zoom-sample .slider-content-wrapper {\\n    width: 40%;\\n    margin: 0 auto;\\n    min-width: 185px;\\n}\\n#maps-zoom-sample .slider-userselect {\\n    -webkit-user-select: none;\\n    /* Safari 3.1+ */\\n    -moz-user-select: none;\\n    /* Firefox 2+ */\\n    -ms-user-select: none;\\n    /* IE 10+ */\\n    user-select: none;\\n    /* Standard syntax */\\n}\\n#maps-zoom-sample .slider-labeltext {\\n    text-align: -webkit-left;\\n    font-weight: 500;\\n    font-size: 13px;\\n    padding-bottom: 10px;\\n}\\n#maps-zoom-sample .slider_container {\\n    margin-top: 40px;\\n}\\n#maps-zoom-sample .e-bigger .slider-content-wrapper {\\n    width: 80%;\\n}\\n#maps-zoom-sample #height_slider .e-tab-handle::after {\\n    background-color: #f9920b;\\n}\\n#maps-zoom-sample #height_slider.e-control.e-slider .e-slider-track {\\n    height: 8px;\\n    top: calc(50% - 4px);\\n    border-radius: 0;\\n}\\n#maps-zoom-sample .highcontrast #height_slider.e-control.e-slider .e-slider-track {\\n    height: 10px;\\n    top: calc(50% - 5px);\\n    border-radius: 0;\\n}\\n#maps-zoom-sample .fabric .slider_container .e-slider-hover .e-slider-track, #maps-zoom-sample .fabric .slider_container .e-slider-container:active .e-slider-track,\\n#maps-zoom-sample .fabric .slider_container .e-slider-container .e-slider .e-tab-track{\\n    background-color: #c8c8c8;\\n}\\n#maps-zoom-sample #gradient_slider.e-control.e-slider .e-range {\\n    height: 6px;\\n    top: calc(50% - 3px);\\n    border-radius: 5px;\\n    background: linear-gradient(to top left, #f9f9f9 25%, #f9920b 90%);\\n}\\n#maps-zoom-sample .fabric .slider_container .e-slider-hover .e-slider-track,\\n#maps-zoom-sample .fabric .slider_container .e-slider-container:active .e-slider-track,\\n#maps-zoom-sample .fabric .slider_container .e-slider-container .e-slider .e-tab-track {\\n    background-color: #c8c8c8;\\n}\\n#maps-zoom-sample #gradient_slider.e-control.e-slider .e-slider-track {\\n    height: 8px;\\n    top: calc(50% - 4px);\\n    border-radius: 5px;\\n}\\n#maps-zoom-sample #control-container {\\n    padding: 0px !important;\\n}\\n#maps-zoom-sample #range > * {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/zooming/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/zooming/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data:function(){\n      return{\n            zoomSettings: {\n            enable: true,\n            toolbars: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],\n            pinchZooming: true\n        },\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/world-map.json'),\n        shapePropertyPath: 'continent',\n        shapeDataPath: 'continent',\n        animationDuration: 500,\n        shapeSettings: {\n                    autofill: true,\n                    colorValuePath: 'color'\n        },\n        dataSource: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/zooming-datasource.json'),\n        value: 500,\n        step: 250\n      }\n  },\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Zoom\"]]\n},\nmethods:{\n    /* custom code start */\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    // Code for Property Panel\n    changeZoom:function(args){\n        let element = (document.getElementById('zoom'));\n        this.$refs.maps.ej2Instances.zoomSettings.enable = element.checked;\n        this.$refs.maps.ej2Instances.refresh();\n    },\n    changePan:function(args){\n        let element = (document.getElementById('panning'));\n        this.$refs.maps.ej2Instances.zoomSettings.enablePanning = element.checked;\n        this.$refs.maps.ej2Instances.refresh();\n    },\n    changeMousewheel:function(args){\n        let element = (document.getElementById('mousewheel'));\n        this.$refs.maps.ej2Instances.zoomSettings.mouseWheelZoom = element.checked;\n        this.$refs.maps.ej2Instances.refresh();\n    },\n    changePinch:function(args){\n        let element = (document.getElementById('pinch'));\n        this.$refs.maps.ej2Instances.zoomSettings.pinchZooming = element.checked;\n        this.$refs.maps.ej2Instances.refresh();\n    },\n    changeSingletap:function(args){\n        let element = (document.getElementById('singletap'));\n        let ele1 = document.getElementById('doubletap');\n        this.$refs.maps.ej2Instances.zoomSettings.zoomOnClick = element.checked;\n        if (element.checked) {\n            ele1.disabled = true;\n        } else {\n            ele1.disabled = false;\n        }\n    },\n    changeDoubletap:function(args){      \n        let element = (document.getElementById('doubletap'));\n        this.$refs.maps.ej2Instances.zoomSettings.doubleClickZoom = element.checked;\n        let ele1 = document.getElementById('singletap');\n        if (element.checked) {\n            ele1.disabled = true;\n        } else {\n            ele1.disabled = false;\n        }\n    },\n    sliderChange:function(args){\n        this.$refs.maps.ej2Instances.layers[0].animationDuration = args.value;\n        this.$refs.maps.ej2Instances.refresh();\n        document.getElementById('dur').innerHTML = args.value.toString() + ' ms';\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/zooming/App.vue?vue&type=template&id=52b499c6&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/zooming/App.vue?vue&type=template&id=52b499c6& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"maps-zoom-sample\" } }, [\n    _c(\n      \"div\",\n      { staticClass: \"col-lg-9 control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            ref: \"maps\",\n            attrs: {\n              id: \"mapszooming\",\n              zoomSettings: _vm.zoomSettings,\n              load: _vm.load\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    shapePropertyPath: _vm.shapePropertyPath,\n                    animationDuration: _vm.animationDuration,\n                    shapeDataPath: _vm.shapeDataPath,\n                    dataSource: _vm.dataSource,\n                    shapeSettings: _vm.shapeSettings\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"height_slider\" } })\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tbody\", [\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(0),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"input\", {\n                  staticStyle: { \"margin-top\": \"15px\" },\n                  attrs: { type: \"checkbox\", checked: \"\", id: \"zoom\" },\n                  on: { change: _vm.changeZoom }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(1),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"input\", {\n                  staticStyle: { \"margin-top\": \"15px\" },\n                  attrs: { type: \"checkbox\", checked: \"\", id: \"panning\" },\n                  on: { change: _vm.changePan }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(2),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"input\", {\n                  staticStyle: { \"margin-top\": \"15px\" },\n                  attrs: { type: \"checkbox\", checked: \"\", id: \"mousewheel\" },\n                  on: { change: _vm.changeMousewheel }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(3),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"input\", {\n                  staticStyle: { \"margin-top\": \"15px\" },\n                  attrs: { type: \"checkbox\", checked: \"\", id: \"pinch\" },\n                  on: { change: _vm.changePinch }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(4),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"input\", {\n                  staticStyle: { \"margin-top\": \"15px\" },\n                  attrs: { type: \"checkbox\", id: \"singletap\" },\n                  on: { change: _vm.changeSingletap }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(5),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\"input\", {\n                  staticStyle: { \"margin-top\": \"15px\" },\n                  attrs: { type: \"checkbox\", id: \"doubletap\" },\n                  on: { change: _vm.changeDoubletap }\n                })\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n              _vm._m(6),\n              _vm._v(\" \"),\n              _c(\n                \"td\",\n                [\n                  _c(\"ejs-slider\", {\n                    attrs: {\n                      id: \"range\",\n                      value: _vm.value,\n                      min: \"0\",\n                      max: \"1000\",\n                      step: _vm.step,\n                      change: _vm.sliderChange\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(7),\n    _vm._v(\" \"),\n    _vm._m(8)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Zooming\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Panning\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Mouse wheel zoom\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Pinch zoom\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Single click zoom\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [_vm._v(\"Double click zoom\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\" } }, [\n      _c(\"div\", [\n        _vm._v(\"Animation duration \"),\n        _c(\"br\"),\n        _c(\"span\", { attrs: { id: \"dur\" } }, [_vm._v(\"500 ms\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n                This sample depicts the zooming and panning options in the maps. You can customize these options by changing the Zooming, Panning, Mouse wheel zoom, Pinch zoom, Single-click zoom, and Double-click zoom in the Properties panel.\\n           \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n                In this example, you can see how to zoom and pan the map. The support has been provided for zooming with the toolbar, rectangle zoom, pinch zoom, mouse wheel zoom, single-click, and double-click zoom.Panning can be enabled or disabled using\\n                the Panning option. When it is disabled, the map will switch to zooming mode.\\n            \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n              Maps component features are segregated into individual feature-wise modules. To use the zooming feature, inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Zoom\")]),\n        _vm._v(\" module using the \"),\n        _c(\"code\", [_vm._v(\"Maps.Inject(Zoom)\")]),\n        _vm._v(\" method.\\n            \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/zooming/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });