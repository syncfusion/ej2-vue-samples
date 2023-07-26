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
/******/ 		"carousel/templates/main": 0
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
/******/ 	deferredModules.push(["./Samples/carousel/templates/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/carousel/templates/App.vue":
/*!********************************************!*\
  !*** ./Samples/carousel/templates/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_371770b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=371770b0& */ \"./Samples/carousel/templates/App.vue?vue&type=template&id=371770b0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/carousel/templates/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_371770b0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=371770b0&lang=css& */ \"./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_371770b0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_371770b0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/carousel/templates/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?");

/***/ }),

/***/ "./Samples/carousel/templates/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/carousel/templates/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?");

/***/ }),

/***/ "./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_371770b0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=371770b0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_371770b0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_371770b0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_371770b0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_371770b0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?");

/***/ }),

/***/ "./Samples/carousel/templates/App.vue?vue&type=template&id=371770b0&":
/*!***************************************************************************!*\
  !*** ./Samples/carousel/templates/App.vue?vue&type=template&id=371770b0& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_371770b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=371770b0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=template&id=371770b0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_371770b0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_371770b0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?");

/***/ }),

/***/ "./Samples/carousel/templates/main.js":
/*!********************************************!*\
  !*** ./Samples/carousel/templates/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/carousel/templates/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/carousel/templates/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.template-carousel-section .carousel-sample {\\n  margin: 0 auto 2em;\\n  max-width: 500px;\\n  height: 350px;\\n}\\n.templateCarousel .e-carousel-items,\\n.templateCarousel .e-carousel-navigators {\\n  height: calc(100% - 3rem);\\n}\\n.templateCarousel .e-carousel-navigators .e-previous,\\n.templateCarousel .e-carousel-navigators .e-next,\\n.templateCarousel .e-carousel-navigators .nav-btn {\\n  padding: 0;\\n}\\n.templateCarousel .e-carousel-navigators .nav-btn:active,\\n.templateCarousel .e-carousel-navigators .nav-btn:focus,\\n.templateCarousel .e-carousel-navigators .nav-btn:hover {\\n  background-color: transparent !important;\\n  color: inherit;\\n}\\n.templateCarousel .e-carousel-navigators svg {\\n  fill: none;\\n  stroke: currentColor;\\n  stroke-linecap: square;\\n  stroke-width: 8px;\\n  height: 2rem;\\n  vertical-align: middle;\\n  width: 2rem;\\n}\\n.templateCarousel .e-carousel-navigators .e-previous svg {\\n  transform: rotate(180deg);\\n}\\n.templateCarousel\\n  .e-carousel-indicators\\n  .e-indicator-bars\\n  .e-indicator-bar\\n  .indicator {\\n  background-color: #ececec;\\n  border-radius: 0.25rem;\\n  cursor: pointer;\\n  height: 3.5rem;\\n  margin: 0.5rem;\\n  width: 5rem;\\n}\\n.templateCarousel\\n  .e-carousel-indicators\\n  .e-indicator-bars\\n  .e-indicator-bar.e-active\\n  .indicator {\\n  background-color: #3c78ef;\\n}\\n@media screen and (max-width: 480px) {\\n.template-carousel-section .carousel-sample {\\n    width: 100%;\\n    height: 250px;\\n}\\n.templateCarousel .img-container {\\n      margin: 12px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/tions-vue-samples_release_22.1.1/Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;CACf;AACD;;EAEE,0BAA0B;CAC3B;AACD;;;EAGE,WAAW;CACZ;AACD;;;EAGE,yCAAyC;EACzC,eAAe;CAChB;AACD;EACE,WAAW;EACX,qBAAqB;EACrB,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,0BAA0B;CAC3B;AACD;;;;;EAKE,0BAA0B;EAC1B,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,YAAY;CACb;AACD;;;;;EAKE,0BAA0B;CAC3B;AACD;AACA;IACI,YAAY;IACZ,cAAc;CACjB;AACD;MACM,aAAa;CAClB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=371770b0&lang=css&\",\"sourcesContent\":[\"\\n.template-carousel-section .carousel-sample {\\n  margin: 0 auto 2em;\\n  max-width: 500px;\\n  height: 350px;\\n}\\n.templateCarousel .e-carousel-items,\\n.templateCarousel .e-carousel-navigators {\\n  height: calc(100% - 3rem);\\n}\\n.templateCarousel .e-carousel-navigators .e-previous,\\n.templateCarousel .e-carousel-navigators .e-next,\\n.templateCarousel .e-carousel-navigators .nav-btn {\\n  padding: 0;\\n}\\n.templateCarousel .e-carousel-navigators .nav-btn:active,\\n.templateCarousel .e-carousel-navigators .nav-btn:focus,\\n.templateCarousel .e-carousel-navigators .nav-btn:hover {\\n  background-color: transparent !important;\\n  color: inherit;\\n}\\n.templateCarousel .e-carousel-navigators svg {\\n  fill: none;\\n  stroke: currentColor;\\n  stroke-linecap: square;\\n  stroke-width: 8px;\\n  height: 2rem;\\n  vertical-align: middle;\\n  width: 2rem;\\n}\\n.templateCarousel .e-carousel-navigators .e-previous svg {\\n  transform: rotate(180deg);\\n}\\n.templateCarousel\\n  .e-carousel-indicators\\n  .e-indicator-bars\\n  .e-indicator-bar\\n  .indicator {\\n  background-color: #ececec;\\n  border-radius: 0.25rem;\\n  cursor: pointer;\\n  height: 3.5rem;\\n  margin: 0.5rem;\\n  width: 5rem;\\n}\\n.templateCarousel\\n  .e-carousel-indicators\\n  .e-indicator-bars\\n  .e-indicator-bar.e-active\\n  .indicator {\\n  background-color: #3c78ef;\\n}\\n@media screen and (max-width: 480px) {\\n.template-carousel-section .carousel-sample {\\n    width: 100%;\\n    height: 250px;\\n}\\n.templateCarousel .img-container {\\n      margin: 12px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/templates/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"ButtonPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"CarouselPlugin\"]);\n\nvar itemTemplate1Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate1\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/cardinal.png\" alt=\"cardinal\" style=\"height:100%;width:100%;\" />' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar itemTemplate2Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate2\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/hunei.png\" alt=\"hunei\" style=\"height:100%;width:100%;\" />' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar itemTemplate3Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate3\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/costa-rica.png\" alt=\"costa-rica\" style=\"height:100%;width:100%;\" />' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar itemTemplate4Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate4\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/kaohsiung.png\" alt=\"kaohsiung\" style=\"height:100%;width:100%;\" />' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar itemTemplate5Vue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"itemTemplate5\", {\n  template:\n    '<figure class=\"img-container\">' +\n    '<img src=\"./../../source/carousel/images/bee-eater.png\" alt=\"bee-eater\" style=\"height:100%;width:100%;\" />' +\n    \"</figure>\",\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar previousVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"previousButton\", {\n  template: `<ejs-button cssClass=\"e-flat e-outline nav-btn\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" width=\"40\" height=\"40\">\n      <path d=\"m13.5 7.01 13 13m-13 13 13-13\"></path>\n    </svg>\n  </ejs-button>`,\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar nextVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"nextButton\", {\n  template: `<ejs-button cssClass=\"e-flat e-outline nav-btn\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\" width=\"40\" height=\"40\">\n      <path d=\"m13.5 7.01 13 13m-13 13 13-13\"></path>\n    </svg>\n  </ejs-button>`,\n  data() {\n    return {\n      data: {},\n    };\n  },\n  computed: {},\n  methods: {},\n});\n\nvar indicatorsVue = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component(\"indicators\", {\n  template: `<div class=\"indicator\">\n      <img :src=\"getThumpImage(data.index)\" alt=\"image\" style=\"height:100%;width:100%;\" />\n    </div>`,\n  data() {\n    return {};\n  },\n  computed: {},\n  methods: {\n    getThumpImage: function (index) {\n      var birds = [\"cardinal\", \"hunei\", \"costa-rica\", \"kaohsiung\", \"bee-eater\"];\n      return \"./../../source/carousel/images/\" + birds[index] + \".png\";\n    },\n  },\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function () {\n    return {\n      animation: \"Fade\",\n      buttonsVisibility: \"Visible\",\n      itemTemplate1: function () {\n        return {\n          template: itemTemplate1Vue,\n        };\n      },\n      itemTemplate2: function () {\n        return {\n          template: itemTemplate2Vue,\n        };\n      },\n      itemTemplate3: function () {\n        return {\n          template: itemTemplate3Vue,\n        };\n      },\n      itemTemplate4: function () {\n        return {\n          template: itemTemplate4Vue,\n        };\n      },\n      itemTemplate5: function () {\n        return {\n          template: itemTemplate5Vue,\n        };\n      },\n      previousTemplate: function () {\n        return {\n          template: previousVue,\n        };\n      },\n      nextTemplate: function () {\n        return {\n          template: nextVue,\n        };\n      },\n      indicatorsTemplate: function () {\n        return {\n          template: indicatorsVue,\n        };\n      },\n    };\n  },\n  methods: {},\n}));\n\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=template&id=371770b0&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/templates/App.vue?vue&type=template&id=371770b0& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"control-section template-carousel-section\" },\n    [\n      _c(\"div\", { staticClass: \"col-lg-12\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"carousel-sample\" },\n          [\n            _c(\n              \"ejs-carousel\",\n              {\n                ref: \"carObj\",\n                attrs: {\n                  cssClass: \"templateCarousel\",\n                  previousButtonTemplate: _vm.previousTemplate,\n                  nextButtonTemplate: _vm.nextTemplate,\n                  indicatorsTemplate: _vm.indicatorsTemplate,\n                  animationEffect: _vm.animation,\n                  buttonsVisibility: _vm.buttonsVisibility,\n                },\n              },\n              [\n                _c(\n                  \"e-carousel-items\",\n                  [\n                    _c(\"e-carousel-item\", {\n                      attrs: { template: _vm.itemTemplate1 },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-carousel-item\", {\n                      attrs: { template: _vm.itemTemplate2 },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-carousel-item\", {\n                      attrs: { template: _vm.itemTemplate3 },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-carousel-item\", {\n                      attrs: { template: _vm.itemTemplate4 },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-carousel-item\", {\n                      attrs: { template: _vm.itemTemplate5 },\n                    }),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _vm._m(0),\n            _vm._v(\" \"),\n            _vm._m(1),\n          ],\n          1\n        ),\n      ]),\n    ]\n  )\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          This sample demonstrates the customization of the\\n          \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              href: \"https://www.syncfusion.com/vue-ui-components/vue-carousel\",\n              target: \"_blank\",\n            },\n          },\n          [_vm._v(\"Vue Carousel\")]\n        ),\n        _vm._v(\" component using various templates.\\n        \"),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\"\\n          In this demo, the \"),\n        _c(\"code\", [_vm._v(\"Vue Carousel\")]),\n        _vm._v(\n          \" component is customized\\n          by using the templates. The navigators are customized using\\n          \"\n        ),\n        _c(\"code\", [_vm._v(\"previousButtonTemplate\")]),\n        _vm._v(\" and\\n          \"),\n        _c(\"code\", [_vm._v(\"nextButtonTemplate\")]),\n        _vm._v(\". The indicators are customized using\\n          \"),\n        _c(\"code\", [_vm._v(\"indicatorsTemplate\")]),\n        _vm._v(\". The carousel item is customized\\n          using \"),\n        _c(\"code\", [_vm._v(\"template\")]),\n        _vm._v(\" option.\\n        \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n          More information about customizing Vue Carousel component can be\\n          found in this\\n          \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"https://ej2.syncfusion.com/vue/documentation/carousel/getting-started\",\n            },\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n        \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=371770b0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/carousel/templates/App.vue?vue&type=style&index=0&id=371770b0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"3102818a\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/carousel/templates/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });