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
/******/ 		"linear-gauge/export/main": 0
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
/******/ 	deferredModules.push(["./Samples/linear-gauge/export/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/linear-gauge/export/App.vue":
/*!*********************************************!*\
  !*** ./Samples/linear-gauge/export/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_380af540_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=380af540&scoped=true& */ \"./Samples/linear-gauge/export/App.vue?vue&type=template&id=380af540&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/linear-gauge/export/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css& */ \"./Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_380af540_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_380af540_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"380af540\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/linear-gauge/export/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/export/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/linear-gauge/export/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/export/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_380af540_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/export/App.vue?vue&type=template&id=380af540&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/linear-gauge/export/App.vue?vue&type=template&id=380af540&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_380af540_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=380af540&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/export/App.vue?vue&type=template&id=380af540&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_380af540_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_380af540_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/export/main.js":
/*!*********************************************!*\
  !*** ./Samples/linear-gauge/export/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/export/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#button-control[data-v-380af540] {\\n  width: 100%;\\n  text-align: center;\\n}\\n#control-container[data-v-380af540] {\\n  padding: 0px !important;\\n}\\n.e-play-icon[data-v-380af540]::before {\\n  content: \\\"\\\\E728\\\";\\n}\\n.e-play-icon1[data-v-380af540]::before {\\n  content: \\\"\\\\E34B\\\";\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eargauge-vue-samples_master-I2MPOSABLCZ3MA3ENCOCSUUKUZ2MMI7UTDWJNE2FXOBSRXGYFYDQ/Samples/linear-gauge/export/App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&id=380af540&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#button-control[data-v-380af540] {\\n  width: 100%;\\n  text-align: center;\\n}\\n#control-container[data-v-380af540] {\\n  padding: 0px !important;\\n}\\n.e-play-icon[data-v-380af540]::before {\\n  content: \\\"\\\\e728\\\";\\n}\\n.e-play-icon1[data-v-380af540]::before {\\n  content: \\\"\\\\e34b\\\";\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/export/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/export/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"LinearGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      allowImageExport: true,\n      allowPdfExport: true,\n      allowPrint: true,\n      orientation: \"Horizontal\",\n      minimum: 0,\n      maximum: 120,\n      value: 80,\n      height: 23,\n      width: 35,\n      offset: -55,\n      markerType: \"Triangle\",\n      border: {\n        width: 2,\n        color: \"white\"\n      },\n      majorTicks: {\n        height: 0,\n        width: 0,\n        interval: 20\n      },\n      minorTicks: {\n        height: 7,\n        width: 0,\n        interval: 4\n      },\n      labelStyle: {\n        position: \"Outside\",\n        font: {\n          color: \"red\"\n        },\n        offset: 4\n      },\n      ranges: [\n        {\n          start: 0,\n          end: 20,\n          startWidth: 15,\n          endWidth: 25,\n          color: \"#82b944\"\n        },\n        {\n          start: 20,\n          end: 40,\n          startWidth: 25,\n          endWidth: 35,\n          color: \"#a1cb43\"\n        },\n        {\n          start: 40,\n          end: 60,\n          startWidth: 35,\n          endWidth: 45,\n          color: \"#ddec12\"\n        },\n        {\n          start: 60,\n          end: 80,\n          startWidth: 45,\n          endWidth: 55,\n          color: \"#ffbc00\"\n        },\n        {\n          start: 80,\n          end: 100,\n          startWidth: 55,\n          endWidth: 65,\n          color: \"#ff6000\"\n        },\n        {\n          start: 100,\n          end: 120,\n          startWidth: 65,\n          endWidth: 75,\n          color: \"red\"\n        }\n      ],\n      isPrimary: true,\n      content1: \"Print\",\n      content: \"Export\",\n      modedata: [\"JPEG\", \"PNG\", \"SVG\", \"PDF\"],\n      cssClass: \"e-flat\",\n      iconCss: \"e-icons e-play-icon\",\n      iconCss1: \"e-icons e-play-icon1\"\n    };\n  },\n  provide: {\n    lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"Print\"], _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"ImageExport\"], _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"PdfExport\"]]\n  },\n\n  methods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    clickExport: function(args) {\n      let fileName = document.getElementById(\"fileName\").value;\n      this.$refs.gauge.ej2Instances.export(\n        this.$refs.mode.ej2Instances.value,\n        fileName\n      );\n    },\n    clickPrint: function(args) {\n      this.$refs.gauge.ej2Instances.print();\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/export/App.vue?vue&type=template&id=380af540&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/export/App.vue?vue&type=template&id=380af540&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-lg-9 control-section\" }, [\n      _c(\"div\", { staticClass: \"control-section\" }, [\n        _c(\n          \"div\",\n          { attrs: { align: \"center\" } },\n          [\n            _c(\n              \"ejs-lineargauge\",\n              {\n                ref: \"gauge\",\n                staticStyle: { display: \"block\" },\n                attrs: {\n                  load: _vm.load,\n                  align: \"center\",\n                  id: \"defaultContainer\",\n                  orientation: _vm.orientation,\n                  allowPdfExport: _vm.allowPdfExport,\n                  allowPrint: _vm.allowPrint,\n                  allowImageExport: _vm.allowImageExport\n                }\n              },\n              [\n                _c(\n                  \"e-axes\",\n                  [\n                    _c(\n                      \"e-axis\",\n                      {\n                        attrs: {\n                          majorTicks: _vm.majorTicks,\n                          minorTicks: _vm.minorTicks,\n                          labelStyle: _vm.labelStyle,\n                          ranges: _vm.ranges,\n                          minimum: _vm.minimum,\n                          maximum: _vm.maximum\n                        }\n                      },\n                      [\n                        _c(\n                          \"e-pointers\",\n                          [\n                            _c(\"e-pointer\", {\n                              attrs: {\n                                value: _vm.value,\n                                height: _vm.height,\n                                width: _vm.width,\n                                offset: _vm.offset,\n                                markerType: _vm.markerType,\n                                border: _vm.border\n                              }\n                            })\n                          ],\n                          1\n                        )\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-lg-3 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"td\", { staticStyle: { width: \"60%\" } }, [\n              _c(\n                \"div\",\n                { staticStyle: { \"margin-left\": \"-10px\" } },\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    ref: \"mode\",\n                    attrs: {\n                      id: \"mode\",\n                      dataSource: _vm.modedata,\n                      index: \"0\",\n                      width: 90\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _vm._m(1),\n          _vm._v(\" \"),\n          _c(\n            \"tr\",\n            {\n              staticStyle: { height: \"50px\" },\n              attrs: { id: \"button-control\", align: \"center\" }\n            },\n            [\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-button\", {\n                      attrs: {\n                        id: \"export\",\n                        cssClass: _vm.cssClass,\n                        iconCss: _vm.iconCss,\n                        isPrimary: _vm.isPrimary,\n                        content: _vm.content,\n                        isToggle: \"true\"\n                      },\n                      nativeOn: {\n                        click: function($event) {\n                          return _vm.clickExport($event)\n                        }\n                      }\n                    })\n                  ],\n                  1\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"td\", [\n                _c(\n                  \"div\",\n                  [\n                    _c(\"ejs-button\", {\n                      attrs: {\n                        id: \"print\",\n                        cssClass: _vm.cssClass,\n                        iconCss: _vm.iconCss1,\n                        isPrimary: _vm.isPrimary,\n                        content: _vm.content1,\n                        isToggle: \"true\"\n                      },\n                      nativeOn: {\n                        click: function($event) {\n                          return _vm.clickPrint($event)\n                        }\n                      }\n                    })\n                  ],\n                  1\n                )\n              ])\n            ]\n          )\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(2),\n    _vm._v(\" \"),\n    _vm._m(3)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n      _c(\"div\", [_vm._v(\"Export Type:\")])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"tr\", { staticStyle: { height: \"50px\" } }, [\n      _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n        _c(\"div\", [_vm._v(\"File Name:\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"td\", { staticStyle: { width: \"40%\" } }, [\n        _c(\n          \"div\",\n          {\n            staticClass: \"e-float-input\",\n            staticStyle: { \"margin-top\": \"0px\" }\n          },\n          [\n            _c(\"input\", {\n              staticStyle: { \"margin-left\": \"-10px\" },\n              attrs: { type: \"text\", value: \"Gauge\", id: \"fileName\" }\n            })\n          ]\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the print and export functionality of linear gauge.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to export and print the rendered linear gauge. The Linear Gauge can be\\n        exported to JPEG, PNG, SVG, and PDF formats. Print functionality is done by \"\n        ),\n        _c(\"code\", [_vm._v(\"print\")]),\n        _vm._v(\"\\n        method when \"),\n        _c(\"code\", [_vm._v(\"allowPrint\")]),\n        _vm._v(\" is set as true. Export functionality is done by \\n        \"),\n        _c(\"code\", [_vm._v(\"export\")]),\n        _vm._v(\" method when \"),\n        _c(\"code\", [_vm._v(\"allowImageExport\")]),\n        _vm._v(\" and \\n        \"),\n        _c(\"code\", [_vm._v(\"allowPdfExport\")]),\n        _vm._v(\" is set as true.\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _c(\"b\", [_vm._v(\"Injecting Module\")])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n       To make use of the print and export support, we need to inject the \"\n        ),\n        _c(\"code\", [_vm._v(\"Print\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"ImageExport\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"PdfExport\")]),\n        _vm._v(\" modules using the \"),\n        _c(\"code\", [_vm._v(\"provide\")]),\n        _vm._v(\" section.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n      More information about print and export can be found in this\\n      \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/documentation/linear-gauge/linear-gauge-print-and-export/\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/export/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });