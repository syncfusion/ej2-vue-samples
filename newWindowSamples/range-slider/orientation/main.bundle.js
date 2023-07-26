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
/******/ 		"range-slider/orientation/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/orientation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/orientation/App.vue":
/*!**************************************************!*\
  !*** ./Samples/range-slider/orientation/App.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_bb9ae2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=bb9ae2d0& */ \"./Samples/range-slider/orientation/App.vue?vue&type=template&id=bb9ae2d0&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/orientation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_bb9ae2d0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css& */ \"./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_bb9ae2d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_bb9ae2d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/orientation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/orientation/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./Samples/range-slider/orientation/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bb9ae2d0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bb9ae2d0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bb9ae2d0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bb9ae2d0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_bb9ae2d0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/orientation/App.vue?vue&type=template&id=bb9ae2d0&":
/*!*********************************************************************************!*\
  !*** ./Samples/range-slider/orientation/App.vue?vue&type=template&id=bb9ae2d0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_bb9ae2d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=bb9ae2d0& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=template&id=bb9ae2d0&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_bb9ae2d0___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_bb9ae2d0___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/orientation/main.js":
/*!**************************************************!*\
  !*** ./Samples/range-slider/orientation/main.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/orientation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-orientation .content_wrapper {\\n  width: 80%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-orientation .sliderwrap {\\n  height: 375px;\\n  margin-top: 10px;\\n  width: 60%;\\n  margin: auto;\\n}\\n.e-bigger .slider-orientation .content_wrapper {\\n  width: 80%;\\n}\\n.slider-orientation .slider_table td {\\n  text-align: center;\\n}\\n.slider-orientation .slider_table {\\n  border: 0;\\n  width: 100%;\\n}\\n.slider-orientation .content_wrapper .orientation {\\n  display: inline-block;\\n  margin-left: 70px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/nputs-vue-samples_release_22.1.1/Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,iBAAiB;EACjB,WAAW;EACX,aAAa;CACd;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;EACV,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,kBAAkB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&\",\"sourcesContent\":[\"\\n.slider-orientation .content_wrapper {\\n  width: 80%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-orientation .sliderwrap {\\n  height: 375px;\\n  margin-top: 10px;\\n  width: 60%;\\n  margin: auto;\\n}\\n.e-bigger .slider-orientation .content_wrapper {\\n  width: 80%;\\n}\\n.slider-orientation .slider_table td {\\n  text-align: center;\\n}\\n.slider-orientation .slider_table {\\n  border: 0;\\n  width: 100%;\\n}\\n.slider-orientation .content_wrapper .orientation {\\n  display: inline-block;\\n  margin-left: 70px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/orientation/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ \"./node_modules/@syncfusion/ej2-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_3__[\"CheckBoxPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value: 30,\n      minValue: 30,\n      rangevalue: [30, 70],\n      reversevalue: [30, 70],\n      min: 100,\n      max: 0,\n      mintype: \"MinRange\",\n      rangetype: \"Range\",\n      orientation: \"Vertical\",\n      check: true,\n      ticks: {\n        placement: \"Before\",\n        largeStep: 20,\n        smallStep: 5,\n        showSmallTicks: true\n      },\n      tooltip: { isVisible: true, placement: \"Before\" }\n    };\n  },\n  methods: {\n    enableDisableTicks: function (args) {\n      this.ticks = args.checked ? { placement: \"Before\", largeStep: 20, smallStep: 5, showSmallTicks: true } : { placement: \"None\", largeStep: 20, smallStep: 5, showSmallTicks: true };\n    },\n    enableDisableTooltip: function (args) {\n      this.tooltip = args.checked ? { isVisible: true, placement: \"Before\" } : { isVisible: false, placement: \"Before\" };\n    },\n    onScroll: function() {\n      if (\n        document.getElementById(\"minrange\") &&\n        this.$refs.defaultSlider &&\n        this.$refs.minSlider &&\n        this.$refs.rangeSlider &&\n        this.$refs.reverseSlider\n      ) {\n        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);\n        this.$refs.minSlider.ej2Instances.refreshTooltip(this.$refs.minSlider.ej2Instances.tooltipTarget);\n        this.$refs.rangeSlider.ej2Instances.refreshTooltip(this.$refs.rangeSlider.ej2Instances.tooltipTarget);\n        this.$refs.reverseSlider.ej2Instances.refreshTooltip(this.$refs.reverseSlider.ej2Instances.tooltipTarget);\n      }\n    }\n  },\n  mounted: function() {\n    document\n      .getElementById(\"right-pane\")\n      .addEventListener(\"scroll\", this.onScroll.bind(this));\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=template&id=bb9ae2d0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/orientation/App.vue?vue&type=template&id=bb9ae2d0& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 slider-orientation control-section\" }, [\n      _c(\"div\", { staticClass: \"content_wrapper orientation\" }, [\n        _c(\"table\", { staticClass: \"slider_table\" }, [\n          _c(\"tbody\", [\n            _c(\"tr\", [\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticClass: \"sliderwrap\" },\n                  [\n                    _c(\"ejs-slider\", {\n                      ref: \"defaultSlider\",\n                      attrs: {\n                        id: \"default\",\n                        orientation: _vm.orientation,\n                        tooltip: _vm.tooltip,\n                        ticks: _vm.ticks,\n                      },\n                      model: {\n                        value: _vm.value,\n                        callback: function ($$v) {\n                          _vm.value = $$v\n                        },\n                        expression: \"value\",\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticClass: \"sliderwrap\" },\n                  [\n                    _c(\"ejs-slider\", {\n                      ref: \"minSlider\",\n                      attrs: {\n                        id: \"minrange\",\n                        type: _vm.mintype,\n                        orientation: _vm.orientation,\n                        tooltip: _vm.tooltip,\n                        ticks: _vm.ticks,\n                      },\n                      model: {\n                        value: _vm.minValue,\n                        callback: function ($$v) {\n                          _vm.minValue = $$v\n                        },\n                        expression: \"minValue\",\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticClass: \"sliderwrap\" },\n                  [\n                    _c(\"ejs-slider\", {\n                      ref: \"rangeSlider\",\n                      attrs: {\n                        id: \"range\",\n                        type: _vm.rangetype,\n                        orientation: _vm.orientation,\n                        tooltip: _vm.tooltip,\n                        ticks: _vm.ticks,\n                      },\n                      model: {\n                        value: _vm.rangevalue,\n                        callback: function ($$v) {\n                          _vm.rangevalue = $$v\n                        },\n                        expression: \"rangevalue\",\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  { staticClass: \"sliderwrap\" },\n                  [\n                    _c(\"ejs-slider\", {\n                      ref: \"reverseSlider\",\n                      attrs: {\n                        id: \"reverse\",\n                        min: _vm.min,\n                        max: _vm.max,\n                        tooltip: _vm.tooltip,\n                        type: _vm.rangetype,\n                        orientation: _vm.orientation,\n                        ticks: _vm.ticks,\n                      },\n                      model: {\n                        value: _vm.reversevalue,\n                        callback: function ($$v) {\n                          _vm.reversevalue = $$v\n                        },\n                        expression: \"reversevalue\",\n                      },\n                    }),\n                  ],\n                  1\n                ),\n              ]),\n            ]),\n          ]),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"table\", { attrs: { id: \"property\", title: \"Properties\" } }, [\n        _c(\"tbody\", [\n          _c(\"tr\", [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\n              \"td\",\n              { staticStyle: { width: \"70%\", \"padding-right\": \"10px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    id: \"ticks\",\n                    checked: _vm.check,\n                    change: _vm.enableDisableTicks,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\n              \"td\",\n              { staticStyle: { width: \"70%\", \"padding-right\": \"10px\" } },\n              [\n                _c(\"ejs-checkbox\", {\n                  attrs: {\n                    id: \"tooltip\",\n                    checked: _vm.check,\n                    change: _vm.enableDisableTooltip,\n                  },\n                }),\n              ],\n              1\n            ),\n          ]),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"30%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Ticks\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"30%\" } }, [\n      _c(\"div\", { staticClass: \"userselect\" }, [_vm._v(\"Tooltip\")]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates the rendering of Slider component in Vertical orientation. Drag the thumb over the bar for selecting\\n      the values between min and max.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      The Slider component allows to select a value or range of values in-between a min and max range, by dragging the thumb\\n      over the slider bar in vertical orientation. Three types of sliders in vertical orientation are:\\n    \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"Default - allows to select a single value in vertical orientation\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"\\n        MinRange – allows to select a single value, but highlights with a range selection from the min value to the current\\n        handle value in vertical orientation\\n      \"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"\\n        Range – allows to select a range of values with two handles, where the handles are connected with a range selection\\n        in vertical orientation\\n      \"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\n            \"Reverse – Allows to render the component in reverse order. To utilise this, set the maximum value to the Min\\n          property and set the minimum value to the Max property\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"In this demo, the default, MinRange, and range slider types can be seen.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\n            \"The dragInterval is used to drag both handles using the range bar which is also applicable only to the range slider.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"p\", [\n          _vm._v(\"\\n        For more information, refer to the\\n        \"),\n          _c(\n            \"a\",\n            {\n              attrs: {\n                target: \"_blank\",\n                href: \"http://ej2.syncfusion.com/vue/documentation/slider/getting-started.html#orientation\",\n              },\n            },\n            [_vm._v(\"orientation\")]\n          ),\n          _vm._v(\" section from the documentation.\\n      \"),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/orientation/App.vue?vue&type=style&index=0&id=bb9ae2d0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"653987bc\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/range-slider/orientation/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });