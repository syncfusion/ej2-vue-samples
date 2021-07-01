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
/******/ 		"range-slider/tooltip/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-slider/tooltip/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-slider/tooltip/App.vue":
/*!**********************************************!*\
  !*** ./Samples/range-slider/tooltip/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_376514cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=376514cb& */ \"./Samples/range-slider/tooltip/App.vue?vue&type=template&id=376514cb&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-slider/tooltip/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_376514cb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_376514cb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-slider/tooltip/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./Samples/range-slider/tooltip/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************!*\
  !*** ./Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip/App.vue?vue&type=template&id=376514cb&":
/*!*****************************************************************************!*\
  !*** ./Samples/range-slider/tooltip/App.vue?vue&type=template&id=376514cb& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_376514cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=376514cb& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip/App.vue?vue&type=template&id=376514cb&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_376514cb___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_376514cb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?");

/***/ }),

/***/ "./Samples/range-slider/tooltip/main.js":
/*!**********************************************!*\
  !*** ./Samples/range-slider/tooltip/main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-slider/tooltip/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.slider-tooltip .content_wrapper {\\n  width: 52%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-tooltip .sliderwrap {\\n  margin-top: 45px;\\n  margin-left: -20%;\\n}\\n.slider-tooltip .sliderwrap label {\\n  padding-bottom: 26px;\\n  font-size: 13px;\\n  font-weight: 500;\\n  margin-top: 15px;\\n}\\n.slider-tooltip .userselect {\\n  -webkit-user-select: none;\\n  /* Safari 3.1+ */\\n  -moz-user-select: none;\\n  /* Firefox 2+ */\\n  -ms-user-select: none;\\n  /* IE 10+ */\\n  user-select: none;\\n  /* Standard syntax */\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.2.0.1-AKCBNP47DT3PFGRK7KSU3VWUUB7G6VMVS76UHZZZC2BQNLNYCVQQ/Samples/range-slider/tooltip/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,WAAW;EACX,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,uBAAuB;EACvB,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;CACtB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.slider-tooltip .content_wrapper {\\n  width: 52%;\\n  margin: 0 auto;\\n  min-width: 185px;\\n}\\n.slider-tooltip .sliderwrap {\\n  margin-top: 45px;\\n  margin-left: -20%;\\n}\\n.slider-tooltip .sliderwrap label {\\n  padding-bottom: 26px;\\n  font-size: 13px;\\n  font-weight: 500;\\n  margin-top: 15px;\\n}\\n.slider-tooltip .userselect {\\n  -webkit-user-select: none;\\n  /* Safari 3.1+ */\\n  -moz-user-select: none;\\n  /* Firefox 2+ */\\n  -ms-user-select: none;\\n  /* IE 10+ */\\n  user-select: none;\\n  /* Standard syntax */\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-inputs */ \"./node_modules/@syncfusion/ej2-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! zlib */ \"./node_modules/webpack/node_modules/browserify-zlib/lib/index.js\");\n/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_5__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"SliderPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      value: 30,\n      showButtons: true,\n      rangevalue: [30, 70],\n      rangetype: \"Range\",\n      tooltip: {\n        placement: \"Before\",\n        isVisible: true,\n        showOn: \"Focus\"\n      },\n      datasource: [\n        { value: \"Before\", text: \"Before\" },\n        { value: \"After\", text: \"After\" }\n      ],\n      fields: { text: \"text\", value: \"value\" },\n      datasource1: [\n        { value: \"Focus\", text: \"Focus\" },\n        { value: \"Hover\", text: \"Hover\" },\n        { value: \"Auto\", text: \"Auto\" },\n        { value: \"Always\", text: \"Always\" }\n      ],\n      fields1: { text: \"text\", value: \"value\" }\n    };\n  },\n  methods: {\n    changeTooltip: function(e) {\n      this.$refs.defaultSlider.ej2Instances.tooltip = { placement: e.value };\n      this.$refs.rangeSlider.ej2Instances.tooltip = { placement: e.value };\n      this.$refs.rangeSlider.ej2Instances.tooltipObj.dataBind();\n    },\n    changeShowon: function(e) {\n      this.$refs.defaultSlider.ej2Instances.tooltip = { showOn: e.value };\n      this.$refs.rangeSlider.ej2Instances.tooltip = { showOn: e.value };\n    },\n    onScroll: function() {\n      if (\n        document.getElementById(\"rangeslidertooltip\") &&\n        this.$refs.defaultSlider &&\n        this.$refs.rangeSlider\n      ) {\n        this.$refs.defaultSlider.ej2Instances.refreshTooltip(this.$refs.defaultSlider.ej2Instances.tooltipTarget);\n        this.$refs.rangeSlider.ej2Instances.refreshTooltip(this.$refs.rangeSlider.ej2Instances.tooltipTarget);\n      }\n    }\n  },\n  mounted: function() {\n    if (!Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_4__[\"isNullOrUndefined\"])(document.getElementById(\"right-pane\"))) {\n      document\n        .getElementById(\"right-pane\")\n        .addEventListener(\"scroll\", this.onScroll.bind(this));\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-slider/tooltip/App.vue?vue&type=template&id=376514cb&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-slider/tooltip/App.vue?vue&type=template&id=376514cb& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-8 control-section slider-tooltip\" }, [\n      _c(\"div\", { staticClass: \"content_wrapper\" }, [\n        _c(\n          \"div\",\n          { staticClass: \"slidertooltip sliderwrap\" },\n          [\n            _c(\"label\", { staticStyle: { \"padding-bottom\": \"50px\" } }, [\n              _vm._v(\"Default Slider\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"ejs-slider\", {\n              ref: \"defaultSlider\",\n              attrs: {\n                id: \"defaultslidertooltip\",\n                showButtons: _vm.showButtons,\n                tooltip: _vm.tooltip\n              },\n              model: {\n                value: _vm.value,\n                callback: function($$v) {\n                  _vm.value = $$v\n                },\n                expression: \"value\"\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"slidertooltip sliderwrap\" },\n          [\n            _c(\"label\", { staticStyle: { \"padding-bottom\": \"50px\" } }, [\n              _vm._v(\"Range Slider\")\n            ]),\n            _vm._v(\" \"),\n            _c(\"ejs-slider\", {\n              ref: \"rangeSlider\",\n              attrs: {\n                id: \"rangeslidertooltip\",\n                showButtons: _vm.showButtons,\n                type: _vm.rangetype,\n                tooltip: _vm.tooltip\n              },\n              model: {\n                value: _vm.rangevalue,\n                callback: function($$v) {\n                  _vm.rangevalue = $$v\n                },\n                expression: \"rangevalue\"\n              }\n            })\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-4 property-section\" }, [\n      _c(\"table\", { attrs: { id: \"property\", title: \"Properties \" } }, [\n        _c(\"tbody\", [\n          _c(\"tr\", [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\n              \"td\",\n              { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n              [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      attrs: {\n                        id: \"filter-type\",\n                        dataSource: _vm.datasource,\n                        fields: _vm.fields,\n                        index: \"0\",\n                        change: _vm.changeTooltip,\n                        placeholder: \"Select a Placement\",\n                        popupHeight: \"200px\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]\n            )\n          ]),\n          _vm._v(\" \"),\n          _c(\"tr\", { attrs: { id: \"slider-showon\" } }, [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\n              \"td\",\n              { staticStyle: { width: \"50%\", \"padding-right\": \"10px\" } },\n              [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-dropdownlist\", {\n                      ref: \"ddlShowOn\",\n                      attrs: {\n                        id: \"filter-type1\",\n                        dataSource: _vm.datasource1,\n                        fields: _vm.fields1,\n                        index: \"0\",\n                        change: _vm.changeShowon,\n                        placeholder: \"Select a ShowOn\",\n                        popupHeight: \"200px\"\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]\n            )\n          ])\n        ])\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\", \"padding-left\": \"10px\" } }, [\n      _c(\"div\", [_vm._v(\"Placement\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"50%\", \"padding-left\": \"10px\" } }, [\n      _c(\"div\", [_vm._v(\"ShowOn\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      This sample demonstrates the rendering of Slider component with tooltip. Drag the thumb over the bar for selecting the\\n      values between min and max to enable the tooltip.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"Slider component displays the tooltip to indicate the current value to the user.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this demo, we have demonstrated Tooltip with Default and Range Slider.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      Buttons can be used to increment or decrement the slider value. Buttons can be enabled in Slider using\\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/vue/documentation/slider/api-slider.html#showbuttons-boolean\"\n            }\n          },\n          [_vm._v(\"showButtons\")]\n        ),\n        _vm._v(\" property\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      Tooltip position and opening behavior can be customized through the\\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/vue/documentation/slider/api-tooltipData.html#placement-string\"\n            }\n          },\n          [_vm._v(\"placement\")]\n        ),\n        _vm._v(\" and\\n      \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/vue/documentation/slider/api-tooltipData.html#showon-string\"\n            }\n          },\n          [_vm._v(\"showOn\")]\n        ),\n        _vm._v(\" properties from property pane.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"The dragInterval is used to drag both handles using the range bar which is also applicable only to the range slider.\"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"\\n      For more information, refer to the\\n      \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/vue/documentation/slider/api-tooltipData.html#placement-string\"\n            }\n          },\n          [_vm._v(\"placement\")]\n        ),\n        _vm._v(\" and\\n      \"),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/vue/documentation/slider/tooltip.html\"\n            }\n          },\n          [_vm._v(\"tooltip\")]\n        ),\n        _vm._v(\" section from the documentation.\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/range-slider/tooltip/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ })

/******/ });