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
/******/ 		"range-slider/bar-customization/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/bar-customization/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/bar-customization/App.vue":
/*!********************************************************!*\
  !*** ./Samples/range-slider/bar-customization/App.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1b9af0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1b9af0e1& */ \"./Samples/range-slider/bar-customization/App.vue?vue&type=template&id=1b9af0e1&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/bar-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_1b9af0e1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css& */ \"./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1b9af0e1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1b9af0e1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/bar-customization/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/bar-customization/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./Samples/range-slider/bar-customization/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b9af0e1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b9af0e1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b9af0e1_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b9af0e1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1b9af0e1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/bar-customization/App.vue?vue&type=template&id=1b9af0e1&":
/*!***************************************************************************************!*\
  !*** ./Samples/range-slider/bar-customization/App.vue?vue&type=template&id=1b9af0e1& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b9af0e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1b9af0e1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=template&id=1b9af0e1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b9af0e1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1b9af0e1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/bar-customization/main.js":
/*!********************************************************!*\
  !*** ./Samples/range-slider/bar-customization/main.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/bar-customization/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-bar .slider-content_wrapper {\\n  width: 40%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-bar .slider-userselect {\\n  -webkit-user-select: none;\\n  /* Safari 3.1+ */\\n  -moz-user-select: none;\\n  /* Firefox 2+ */\\n  -ms-user-select: none;\\n  /* IE 10+ */\\n  user-select: none;\\n  /* Standard syntax */\\n}\\n.slider-bar .slider-labeltext {\\n  text-align: -webkit-left;\\n  font-weight: 500;\\n  font-size: 13px;\\n  padding-bottom: 10px;\\n}\\n.material .slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.material .slider-bar .e-slider-container #gradient_slider.e-slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container #gradient_slider.e-slider .e-handle {\\n  height: 16px;\\n  width: 16px;\\n}\\n.material .slider-bar .e-slider-container.e-horizontal #height_slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container.e-horizontal #height_slider .e-handle,\\n.material .slider-bar .e-slider-container.e-horizontal #gradient_slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container.e-horizontal #gradient_slider .e-handle {\\n  margin-left: -8px;\\n  top: calc(50% - 8px);\\n}\\n.e-bigger:not(.material)\\n  .slider-bar .e-slider-container.e-horizontal\\n  #height_slider.e-slider\\n  .e-handle,\\n.e-bigger:not(.material)\\n  .slider-bar .e-slider-container.e-horizontal\\n  #gradient_slider.e-slider\\n  .e-handle {\\n  margin-left: -11px;\\n  top: calc(50% - 11px);\\n}\\n.e-bigger:not(.material) .slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.e-bigger:not(.material)\\n  .slider-bar .e-slider-container\\n  #gradient_slider.e-slider\\n  .e-handle {\\n  height: 22px;\\n  width: 22px;\\n}\\n.slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.slider-bar .e-slider-container #gradient_slider.e-slider .e-handle {\\n  height: 20px;\\n  width: 20px;\\n}\\n.slider-bar .e-slider-container.e-horizontal #height_slider .e-handle,\\n.slider-bar .e-slider-container.e-horizontal #gradient_slider .e-handle {\\n  margin-left: -10px;\\n  top: calc(50% - 10px);\\n}\\n.slider-bar .slider_container {\\n  margin-top: 40px;\\n}\\n.e-bigger .slider-bar .slider-content_wrapper {\\n  width: 80%;\\n}\\n.slider-bar #height_slider .e-tab-handle::after {\\n  background-color: #f9920b;\\n}\\n.slider-bar #height_slider.e-control.e-slider .e-slider-track {\\n  height: 8px;\\n  top: calc(50% - 4px);\\n  border-radius: 0;\\n}\\n.highcontrast .slider-bar #height_slider.e-control.e-slider .e-slider-track {\\n  height: 10px;\\n  top: calc(50% - 5px);\\n  border-radius: 0;\\n}\\n.fabric .slider-bar .slider_container .e-slider-hover .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container:active .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container .e-slider .e-tab-track {\\n  background-color: #c8c8c8;\\n}\\n.slider-bar #gradient_slider.e-control.e-slider .e-range {\\n  height: 6px;\\n  top: calc(50% - 3px);\\n  border-radius: 5px;\\n  background: -webkit-linear-gradient(\\n    left,\\n    #e1451d 0,\\n    #fdff47 17%,\\n    #86f9fe 50%,\\n    #2900f8 65%,\\n    #6e00f8 74%,\\n    #e33df9 83%,\\n    #e14423 100%\\n  );\\n  background: linear-gradient(\\n    left,\\n    #e1451d 0,\\n    #fdff47 17%,\\n    #86f9fe 50%,\\n    #2900f8 65%,\\n    #6e00f8 74%,\\n    #e33df9 83%,\\n    #e14423 100%\\n  );\\n  background: -moz-linear-gradient(\\n    left,\\n    #e1451d 0,\\n    #fdff47 17%,\\n    #86f9fe 50%,\\n    #2900f8 65%,\\n    #6e00f8 74%,\\n    #e33df9 83%,\\n    #e14423 100%\\n  );\\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTE0NTFkIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTclIiBzdG9wLWNvbG9yPSIjZmRmZjQ3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjODZmOWZlIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjMjkwMGY4IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNzQlIiBzdG9wLWNvbG9yPSIjNmUwMGY4IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iODMlIiBzdG9wLWNvbG9yPSIjZTMzZGY5IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2UxNDQyMyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);\\n}\\n.fabric .slider-bar .slider_container .e-slider-hover .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container:active .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container .e-slider .e-tab-track {\\n  background-color: #c8c8c8;\\n}\\n.slider-bar #gradient_slider.e-control.e-slider .e-slider-track {\\n  height: 8px;\\n  top: calc(50% - 4px);\\n  border-radius: 5px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/nputs-vue-samples_release_21.1.1/Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;CACtB;AACD;EACE,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;CACtB;AACD;;;;EAIE,aAAa;EACb,YAAY;CACb;AACD;;;;EAIE,kBAAkB;EAClB,qBAAqB;CACtB;AACD;;;;;;;;EAQE,mBAAmB;EACnB,sBAAsB;CACvB;AACD;;;;;EAKE,aAAa;EACb,YAAY;CACb;AACD;;EAEE,aAAa;EACb,YAAY;CACb;AACD;;EAEE,mBAAmB;EACnB,sBAAsB;CACvB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,qBAAqB;EACrB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,qBAAqB;EACrB,iBAAiB;CAClB;AACD;;;EAGE,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB;;;;;;;;;IASE;EACF;;;;;;;;;IASE;EACF;;;;;;;;;IASE;EACF,wkCAAwkC;CACzkC;AACD;;;EAGE,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&\",\"sourcesContent\":[\"\\n.slider-bar .slider-content_wrapper {\\n  width: 40%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-bar .slider-userselect {\\n  -webkit-user-select: none;\\n  /* Safari 3.1+ */\\n  -moz-user-select: none;\\n  /* Firefox 2+ */\\n  -ms-user-select: none;\\n  /* IE 10+ */\\n  user-select: none;\\n  /* Standard syntax */\\n}\\n.slider-bar .slider-labeltext {\\n  text-align: -webkit-left;\\n  font-weight: 500;\\n  font-size: 13px;\\n  padding-bottom: 10px;\\n}\\n.material .slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.material .slider-bar .e-slider-container #gradient_slider.e-slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container #gradient_slider.e-slider .e-handle {\\n  height: 16px;\\n  width: 16px;\\n}\\n.material .slider-bar .e-slider-container.e-horizontal #height_slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container.e-horizontal #height_slider .e-handle,\\n.material .slider-bar .e-slider-container.e-horizontal #gradient_slider .e-handle,\\n.material.e-bigger .slider-bar .e-slider-container.e-horizontal #gradient_slider .e-handle {\\n  margin-left: -8px;\\n  top: calc(50% - 8px);\\n}\\n.e-bigger:not(.material)\\n  .slider-bar .e-slider-container.e-horizontal\\n  #height_slider.e-slider\\n  .e-handle,\\n.e-bigger:not(.material)\\n  .slider-bar .e-slider-container.e-horizontal\\n  #gradient_slider.e-slider\\n  .e-handle {\\n  margin-left: -11px;\\n  top: calc(50% - 11px);\\n}\\n.e-bigger:not(.material) .slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.e-bigger:not(.material)\\n  .slider-bar .e-slider-container\\n  #gradient_slider.e-slider\\n  .e-handle {\\n  height: 22px;\\n  width: 22px;\\n}\\n.slider-bar .e-slider-container #height_slider.e-slider .e-handle,\\n.slider-bar .e-slider-container #gradient_slider.e-slider .e-handle {\\n  height: 20px;\\n  width: 20px;\\n}\\n.slider-bar .e-slider-container.e-horizontal #height_slider .e-handle,\\n.slider-bar .e-slider-container.e-horizontal #gradient_slider .e-handle {\\n  margin-left: -10px;\\n  top: calc(50% - 10px);\\n}\\n.slider-bar .slider_container {\\n  margin-top: 40px;\\n}\\n.e-bigger .slider-bar .slider-content_wrapper {\\n  width: 80%;\\n}\\n.slider-bar #height_slider .e-tab-handle::after {\\n  background-color: #f9920b;\\n}\\n.slider-bar #height_slider.e-control.e-slider .e-slider-track {\\n  height: 8px;\\n  top: calc(50% - 4px);\\n  border-radius: 0;\\n}\\n.highcontrast .slider-bar #height_slider.e-control.e-slider .e-slider-track {\\n  height: 10px;\\n  top: calc(50% - 5px);\\n  border-radius: 0;\\n}\\n.fabric .slider-bar .slider_container .e-slider-hover .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container:active .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container .e-slider .e-tab-track {\\n  background-color: #c8c8c8;\\n}\\n.slider-bar #gradient_slider.e-control.e-slider .e-range {\\n  height: 6px;\\n  top: calc(50% - 3px);\\n  border-radius: 5px;\\n  background: -webkit-linear-gradient(\\n    left,\\n    #e1451d 0,\\n    #fdff47 17%,\\n    #86f9fe 50%,\\n    #2900f8 65%,\\n    #6e00f8 74%,\\n    #e33df9 83%,\\n    #e14423 100%\\n  );\\n  background: linear-gradient(\\n    left,\\n    #e1451d 0,\\n    #fdff47 17%,\\n    #86f9fe 50%,\\n    #2900f8 65%,\\n    #6e00f8 74%,\\n    #e33df9 83%,\\n    #e14423 100%\\n  );\\n  background: -moz-linear-gradient(\\n    left,\\n    #e1451d 0,\\n    #fdff47 17%,\\n    #86f9fe 50%,\\n    #2900f8 65%,\\n    #6e00f8 74%,\\n    #e33df9 83%,\\n    #e14423 100%\\n  );\\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTE0NTFkIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTclIiBzdG9wLWNvbG9yPSIjZmRmZjQ3IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjODZmOWZlIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjMjkwMGY4IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNzQlIiBzdG9wLWNvbG9yPSIjNmUwMGY4IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iODMlIiBzdG9wLWNvbG9yPSIjZTMzZGY5IiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2UxNDQyMyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgPC9saW5lYXJHcmFkaWVudD4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);\\n}\\n.fabric .slider-bar .slider_container .e-slider-hover .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container:active .e-slider-track,\\n.fabric .slider-bar .slider_container .e-slider-container .e-slider .e-tab-track {\\n  background-color: #c8c8c8;\\n}\\n.slider-bar #gradient_slider.e-control.e-slider .e-slider-track {\\n  height: 8px;\\n  top: calc(50% - 4px);\\n  border-radius: 5px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/bar-customization/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value: 30,\n      min: 0,\n      max: 100,\n      gradient_value: 50,\n      range: \"MinRange\",\n      dynamic_value: 20\n    };\n  },\n  methods: {\n    created: function() {\n      let sliderTrack = this.$refs.dynamic_color_slider.$el.querySelector(\n        \".e-range\"\n      );\n      let sliderHandle = this.$refs.dynamic_color_slider.$el.querySelector(\n        \".e-handle\"\n      );\n      sliderHandle.style.backgroundColor = \"green\";\n      sliderTrack.style.backgroundColor = \"green\";\n    },\n    change: function(args) {\n      let sliderTrack = this.$refs.dynamic_color_slider.$el.querySelector(\n        \".e-range\"\n      );\n      let sliderHandle = this.$refs.dynamic_color_slider.$el.querySelector(\n        \".e-handle\"\n      );\n      if (args.value > 0 && args.value <= 25) {\n        // Change handle and range bar color to green when\n        sliderHandle.style.backgroundColor = \"green\";\n        sliderTrack.style.backgroundColor = \"green\";\n      } else if (args.value > 25 && args.value <= 50) {\n        // Change handle and range bar color to royal blue\n        sliderHandle.style.backgroundColor = \"royalblue\";\n        sliderTrack.style.backgroundColor = \"royalblue\";\n      } else if (args.value > 50 && args.value <= 75) {\n        // Change handle and range bar color to dark orange\n        sliderHandle.style.backgroundColor = \"darkorange\";\n        sliderTrack.style.backgroundColor = \"darkorange\";\n      } else if (args.value > 75 && args.value <= 100) {\n        // Change handle and range bar color to red\n        sliderHandle.style.backgroundColor = \"red\";\n        sliderTrack.style.backgroundColor = \"red\";\n      }\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=template&id=1b9af0e1&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/bar-customization/App.vue?vue&type=template&id=1b9af0e1& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"col-lg-12 control-section slider-bar\" }, [\n    _c(\"div\", { staticClass: \"slider-content_wrapper\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"slider_container\" },\n        [\n          _c(\"div\", { staticClass: \"slider-labeltext slider_userselect\" }, [\n            _vm._v(\"Height\"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"ejs-slider\", {\n            attrs: {\n              id: \"height_slider\",\n              value: _vm.value,\n              min: _vm.min,\n              max: _vm.max,\n            },\n          }),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"slider_container\" },\n        [\n          _c(\"div\", { staticClass: \"slider-labeltext slider_userselect\" }, [\n            _vm._v(\"Gradient color\"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"ejs-slider\", {\n            attrs: {\n              id: \"gradient_slider\",\n              value: _vm.gradient_value,\n              min: _vm.min,\n              max: _vm.max,\n              type: _vm.range,\n            },\n          }),\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        { staticClass: \"slider_container\" },\n        [\n          _c(\"div\", { staticClass: \"slider-labeltext slider_userselect\" }, [\n            _vm._v(\"Dynamic thumb and selection bar color\"),\n          ]),\n          _vm._v(\" \"),\n          _c(\"ejs-slider\", {\n            ref: \"dynamic_color_slider\",\n            attrs: {\n              id: \"dynamic_color_slider\",\n              value: _vm.dynamic_value,\n              min: _vm.min,\n              max: _vm.max,\n              type: _vm.range,\n              created: _vm.created,\n              change: _vm.change,\n            },\n          }),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates the customization of Slider's selection bar. Drag the thumb over the bar for selecting the values\\n      between min and max.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"In this demo, customization of track using CSS is demonstrated.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"\\n        Height - In this sample, track has been customized to custom height. Here, thumb has to be adjusted based on the\\n        track height.\\n      \"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Gradient color - In this sample, track has been customized with gradient color.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"\\n        Dynamic thumb and selection bar color - In this sample, track and thumb has been customized to different colors for\\n        different intervals by using created and change event.\\n      \"\n          ),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/bar-customization/App.vue?vue&type=style&index=0&id=1b9af0e1&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"d5d13246\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/range-slider/bar-customization/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });