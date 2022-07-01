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
/******/ 		"chart/funnel/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/funnel/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/funnel/App.vue":
/*!**************************************!*\
  !*** ./Samples/chart/funnel/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_1a021b26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=1a021b26&scoped=true& */ \"./Samples/chart/funnel/App.vue?vue&type=template&id=1a021b26&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/funnel/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_1a021b26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css& */ \"./Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_1a021b26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_1a021b26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"1a021b26\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/funnel/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?");

/***/ }),

/***/ "./Samples/chart/funnel/App.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./Samples/chart/funnel/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/funnel/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?");

/***/ }),

/***/ "./Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1a021b26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1a021b26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1a021b26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1a021b26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_1a021b26_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?");

/***/ }),

/***/ "./Samples/chart/funnel/App.vue?vue&type=template&id=1a021b26&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./Samples/chart/funnel/App.vue?vue&type=template&id=1a021b26&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1a021b26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=1a021b26&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/funnel/App.vue?vue&type=template&id=1a021b26&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1a021b26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_1a021b26_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?");

/***/ }),

/***/ "./Samples/chart/funnel/main.js":
/*!**************************************!*\
  !*** ./Samples/chart/funnel/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/funnel/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/funnel/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.control-section[data-v-1a021b26] {\\n  min-height: 450px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/chart/funnel/App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,kBAAkB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=1a021b26&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.control-section[data-v-1a021b26] {\\n  min-height: 450px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/funnel/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/funnel/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (\n  selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)\n).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      theme: theme,\n      data: [\n        { x: \"China\", y: 1409517397, text: \"China\" },\n        { x: \"India\", y: 1339180127, text: \"India\" },\n        { x: \"United States\", y: 324459463, text: \"United States\" },\n        { x: \"Indonesia\", y: 263991379, text: \"Indonesia\" },\n        { x: \"Brazil\", y: 209288278, text: \"Brazil\" },\n        { x: \"Pakistan\", y: 197015955, text: \"Pakistan\" },\n        { x: \"Nigeria\", y: 190886311, text: \"Nigeria\" },\n        { x: \"Bangladesh\", y: 164669751, text: \"Bangladesh\" },\n        { x: \"Russia\", y: 143989754, text: \"Russia\" },\n        { x: \"Mexico\", y: 129163276, text: \"Mexico\" },\n        { x: \"Japan\", y: 127484450, text: \" Japan\" },\n        { x: \"Ethiopia\", y: 104957438, text: \"Ethiopia\" },\n        { x: \"Philippines\", y: 104918090, text: \"Philippines\" },\n        { x: \"Egypt\", y: 97553151, text: \"Egypt\" },\n        { x: \"Vietnam\", y: 95540800, text: \"Vietnam\" },\n        { x: \"Germany\", y: 82114224, text: \"Germany\" }\n      ],\n      neckWidth: \"15%\",\n      neckHeight: \"18%\",\n      xName: \"x\",\n      yName: \"y\",\n      dataLabel: {\n        visible: true,\n        position: \"Outside\",\n        connectorStyle: { length: \"6%\" },\n        name: \"text\"\n      },\n      explode: false,\n      legendSettings: {\n        visible: false\n      },\n\n      tooltip: { enable: true, format: \"${point.x} : <b>${point.y}</b>\" },\n\n      title: \"Top populated countries in 2017\",\n    };\n  },\n  provide: {\n    accumulationchart: [\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationLegend\"],\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"FunnelSeries\"],\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationDataLabel\"],\n      _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"AccumulationTooltip\"]\n    ]\n  },\n  methods: {\n    funnelNeckWidth: function(e) {\n      let value = document.getElementById(\"funnelNeckWidth\").value;\n      this.neckWidth = value + \"%\";\n      document.getElementById(\"neckWidth\").innerHTML = value + \"%\";\n    },\n    funnelNeckHeight: function(e) {\n      let value = document.getElementById(\"funnelNeckHeight\").value;\n      this.neckHeight = value + \"%\";\n      document.getElementById(\"neckHeight\").innerHTML = value + \"%\";\n    },\n    onChartResized: function(args) {\n      let bounds = document.getElementById(\"container\").getBoundingClientRect();\n      if (bounds.width < bounds.height) {\n        this.width = \"80%\";\n        this.height = \"70%\";\n      } else {\n        this.width = \"60%\";\n        this.height = \"80%\";\n      }\n    }\n  },\n  updated: function() {\n    this.$nextTick(function() {\n      this.$refs.funnel.ej2Instances.refresh();\n      this.$refs.funnel.ej2Instances.removeSvg();\n      this.$refs.funnel.ej2Instances.refreshSeries();\n      this.$refs.funnel.ej2Instances.refreshChart();\n    });\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/funnel/App.vue?vue&type=template&id=1a021b26&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/funnel/App.vue?vue&type=template&id=1a021b26&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{staticClass:\"col-md-9 control-section\"},[_c('ejs-accumulationchart',{ref:\"funnel\",staticStyle:{\"display\":\"block\",\"width\":\"92%\"},attrs:{\"theme\":_vm.theme,\"id\":\"container\",\"tooltip\":_vm.tooltip,\"title\":_vm.title,\"legendSettings\":_vm.legendSettings,\"resized\":_vm.onChartResized,\"enableAnimation\":false}},[_c('e-accumulation-series-collection',[_c('e-accumulation-series',{attrs:{\"dataSource\":_vm.data,\"xName\":\"x\",\"yName\":\"y\",\"neckWidth\":_vm.neckWidth,\"neckHeight\":_vm.neckHeight,\"height\":\"80%\",\"width\":\"60%\",\"explode\":_vm.explode,\"dataLabel\":_vm.dataLabel,\"type\":\"Funnel\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{staticClass:\"col-md-3 property-section\"},[_c('table',{staticClass:\"property-panel-table\",staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"70%\"}},[_c('div',{attrs:{\"data-role\":\"rangeslider\"}},[_c('input',{staticStyle:{\"width\":\"90%\"},attrs:{\"type\":\"range\",\"name\":\"range-min\",\"value\":\"15\",\"min\":\"0\",\"max\":\"45\",\"autocomplete\":\"off\",\"id\":\"funnelNeckWidth\"},on:{\"touchmove\":_vm.funnelNeckWidth,\"pointermove\":_vm.funnelNeckWidth,\"change\":_vm.funnelNeckWidth}})])]),_vm._v(\" \"),_vm._m(1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"50px\"}},[_vm._m(2),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"70%\"}},[_c('div',{attrs:{\"data-role\":\"rangeslider\"}},[_c('input',{staticStyle:{\"width\":\"90%\"},attrs:{\"type\":\"range\",\"name\":\"range-min\",\"id\":\"funnelNeckHeight\",\"value\":\"18\",\"min\":\"0\",\"max\":\"50\",\"autocomplete\":\"off\"},on:{\"touchmove\":_vm.funnelNeckHeight,\"pointermove\":_vm.funnelNeckHeight,\"change\":_vm.funnelNeckHeight}})])]),_vm._v(\" \"),_vm._m(3)])])]),_vm._v(\" \"),_vm._m(4),_vm._v(\" \"),_vm._m(5)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"30%\"}},[_c('div',[_vm._v(\"Neck Width\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"70%\"}},[_c('div',{attrs:{\"data-role\":\"rangeslider\"}},[_c('p',{staticStyle:{\"font-weight\":\"normal\",\"padding-top\":\"10px\"},attrs:{\"id\":\"neckWidth\"}},[_vm._v(\"15%\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"30%\"}},[_c('div',[_vm._v(\"Neck Height\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"70%\"}},[_c('div',{attrs:{\"data-role\":\"rangeslider\"}},[_c('p',{staticStyle:{\"font-weight\":\"normal\",\"padding-top\":\"10px\"},attrs:{\"id\":\"neckHeight\"}},[_vm._v(\"18%\")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample visualizes the data about population of different countries by using default funnel series. Datalabel shows the Information about the points and are arranged smartly.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n       In this example, you can see how to render funnel chart.\"),_c('code',[_vm._v(\"dataLabel\")]),_vm._v(\" is used to represent individual data and its value, here the labels are arranged smartly to avoid the overlap\\n    \")]),_vm._v(\" \"),_c('p',[_c('code',[_vm._v(\"Tooltip\")]),_vm._v(\" is enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices.\\n    \")]),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n      Chart component features are segregated into individual feature-wise modules. To use Funnel feature, we need to inject\\n      \"),_c('code',[_vm._v(\"FunnelSeries\")]),_vm._v(\" into the\\n      \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" option.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/funnel/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });