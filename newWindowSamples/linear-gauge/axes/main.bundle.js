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
/******/ 		"linear-gauge/axes/main": 0
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
/******/ 	deferredModules.push(["./Samples/linear-gauge/axes/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/linear-gauge/axes/App.vue":
/*!*******************************************!*\
  !*** ./Samples/linear-gauge/axes/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_4cf7cf5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=4cf7cf5e&scoped=true& */ \"./Samples/linear-gauge/axes/App.vue?vue&type=template&id=4cf7cf5e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/linear-gauge/axes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css& */ \"./Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_4cf7cf5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_4cf7cf5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4cf7cf5e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/linear-gauge/axes/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/axes/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/linear-gauge/axes/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/axes/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_4cf7cf5e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/axes/App.vue?vue&type=template&id=4cf7cf5e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./Samples/linear-gauge/axes/App.vue?vue&type=template&id=4cf7cf5e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4cf7cf5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=4cf7cf5e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/axes/App.vue?vue&type=template&id=4cf7cf5e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4cf7cf5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_4cf7cf5e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/axes/main.js":
/*!*******************************************!*\
  !*** ./Samples/linear-gauge/axes/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/axes/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-4cf7cf5e] {\\n    padding: 0px !important;\\n}\\n.property-panel-section[data-v-4cf7cf5e] {\\n    height: 380px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eargauge-vue-samples_master-I2MPOSABLCZ3MA3ENCOCSUUKUZ2MMI7UTDWJNE2FXOBSRXGYFYDQ/Samples/linear-gauge/axes/App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B;AACD;IACI,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=4cf7cf5e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-4cf7cf5e] {\\n    padding: 0px !important;\\n}\\n.property-panel-section[data-v-4cf7cf5e] {\\n    height: 380px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/axes/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/axes/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"LinearGaugePlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_2__[\"DropDownListPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n\ndata:function(){\n    return{\n    orientation: 'Horizontal',\n    line: {\n        color: '#9E9E9E'\n    },\n    maxValue: 115,\n    value: 20,\n    height: 15,\n    width: 15,\n    color: '#757575',\n    offset: 30,\n    maximum: 115,\n    majorTicks: {\n     color: '#9E9E9E',\n     interval: 20\n    },\n    minorTicks: {\n     color: '#9E9E9E',\n     interval: 2\n    },\n    labelStyle: {\n     offset: 48\n    },\n     annotations: [{\n            content: '<div id=\"pointer\" style=\"width:70px\"><h1 style=\"font-size:14px;\">' +\n            '${axes[0].pointers[0].currentValue} MPH</h1></div>',\n            axisIndex: 0,\n            axisValue: 20,\n            x: 10,\n            y: 60,\n            zIndex: '1'\n        }],\n    pointertypedata:['Marker','Bar'],\n    pointertypewidth:120,\n    pointertypeplaceholder:'Select Range Bar Color',\n    pointerplacedata:['Far','Near','Center'],\n    pointerplaceholder:'Select Range Bar Color',\n    pointerplacewidth:120\n    }\n},\nprovide: {\n    lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n  changePointertype: function(args){\n    this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].type = pointerType.value;\n    pointerPlace.enabled = (pointerType.value === 'Marker');\n    this.$refs.lineargauge.ej2Instances.refresh();\n  },\n  changePointerplace:function(args){\n       this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].placement = pointerPlace.value;\n       this.$refs.lineargauge.ej2Instances.refresh();\n  },\n  // Code for Property Panel\naxisMin: function(args){\n    let min = document.getElementById('min');\n    let max = document.getElementById('max');\n    this.$refs.lineargauge.ej2Instances.axes[0].minimum = parseInt(min.value, 10);\n    this.$refs.lineargauge.ej2Instances.axes[0].maximum = parseInt(max.value, 10);\n    document.getElementById('minValue').innerHTML = 'Axis Minimum <span>&nbsp;&nbsp;&nbsp;' + min.value;\n    this.$refs.lineargauge.ej2Instances.refresh();\n    this.$refs.lineargauge.ej2Instances.annotations[0].axisValue = (this.$refs.lineargauge.ej2Instances.axes[0].pointers[0]).currentValue;\n    this.$refs.lineargauge.ej2Instances.refresh();\n},\naxisMax:function(args){\n    let min = document.getElementById('min');\n    let max = document.getElementById('max');\n    this.$refs.lineargauge.ej2Instances.axes[0].maximum = parseInt(max.value, 10);\n    this.$refs.lineargauge.ej2Instances.axes[0].minimum = parseInt(min.value, 10);\n    document.getElementById('maxValue').innerHTML = 'Axis Maximum <span>&nbsp;&nbsp;&nbsp;' + max.value;\n    this.$refs.lineargauge.ej2Instances.refresh();\n    this.$refs.lineargauge.ej2Instances.annotations[0].axisValue = (this.$refs.lineargauge.ej2Instances.axes[0].pointers[0]).currentValue;\n    this.$refs.lineargauge.ej2Instances.refresh();\n},\naxisInverse:function(args){\n    let ele = document.getElementById('axisInversed');\n    this.$refs.lineargauge.ej2Instances.axes[0].isInversed = ele.checked;\n    this.$refs.lineargauge.ej2Instances.refresh();\n},\nlastLabel:function(args){\n    let ele = document.getElementById('lastlabel');\n    this.$refs.lineargauge.ej2Instances.axes[0].showLastLabel = ele.checked;\n    this.$refs.lineargauge.ej2Instances.refresh();\n},\naxisOpposed:function(args){\n        let ele = document.getElementById('opposed');\n        this.$refs.lineargauge.ej2Instances.axes[0].opposedPosition = ele.checked;\n        if (ele.checked) {\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].placement = 'Near';\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].markerType = 'Triangle';\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].offset = -20;\n            this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.offset = 0;\n            this.$refs.lineargauge.ej2Instances.annotations[0].x = 10;\n            this.$refs.lineargauge.ej2Instances.annotations[0].y = -60;\n        } else {\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].placement = 'Far';\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].offset = 0;\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].offset = 30;\n            this.$refs.lineargauge.ej2Instances.axes[0].pointers[0].markerType = 'InvertedTriangle';\n            this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.offset = 38;\n            this.$refs.lineargauge.ej2Instances.annotations[0].x = 10;\n            this.$refs.lineargauge.ej2Instances.annotations[0].y = 60;\n        }\n        this.$refs.lineargauge.ej2Instances.refresh();\n},\nchangeFormat:function(args){\n        let ele = document.getElementById('format');\n        this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.format = ele.value.indexOf('{value}') > -1 ? ele.value : this.$refs.lineargauge.ej2Instances.axes[0].labelStyle.format;\n        this.$refs.lineargauge.ej2Instances.refresh();\n}\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/axes/App.vue?vue&type=template&id=4cf7cf5e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/axes/App.vue?vue&type=template&id=4cf7cf5e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"col-md-8 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"content-wrapper\" },\n        [\n          _c(\n            \"ejs-lineargauge\",\n            {\n              ref: \"lineargauge\",\n              staticStyle: { display: \"block\" },\n              attrs: {\n                load: _vm.load,\n                align: \"center\",\n                id: \"axisContainer\",\n                orientation: _vm.orientation,\n                annotations: _vm.annotations\n              }\n            },\n            [\n              _c(\n                \"e-axes\",\n                [\n                  _c(\n                    \"e-axis\",\n                    {\n                      attrs: {\n                        line: _vm.line,\n                        maximum: _vm.maximum,\n                        majorTicks: _vm.majorTicks,\n                        minorTicks: _vm.minorTicks,\n                        labelStyle: _vm.labelStyle\n                      }\n                    },\n                    [\n                      _c(\n                        \"e-pointers\",\n                        [\n                          _c(\"e-pointer\", {\n                            attrs: {\n                              value: _vm.value,\n                              height: _vm.height,\n                              width: _vm.width,\n                              color: _vm.color,\n                              offset: _vm.offset\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ]),\n    _vm._v(\" \"),\n    _c(\"div\", { staticClass: \"col-md-4 property-section\" }, [\n      _c(\n        \"table\",\n        {\n          staticStyle: { width: \"100%\" },\n          attrs: { id: \"property\", title: \"Properties\" }\n        },\n        [\n          _c(\"tr\", [\n            _vm._m(0),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", { attrs: { \"data-role\": \"rangeslider\" } }, [\n                _c(\"input\", {\n                  staticStyle: { width: \"100%\" },\n                  attrs: {\n                    type: \"range\",\n                    name: \"range-max\",\n                    id: \"min\",\n                    value: \"0\",\n                    min: \"0\",\n                    max: \"115\",\n                    autocomplete: \"off\"\n                  },\n                  on: { touchmove: _vm.axisMin, change: _vm.axisMin }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(1),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", { attrs: { \"data-role\": \"rangeslider\" } }, [\n                _c(\"input\", {\n                  staticStyle: { width: \"100%\" },\n                  attrs: {\n                    type: \"range\",\n                    name: \"range-max\",\n                    id: \"max\",\n                    min: \"0\",\n                    max: \"115\",\n                    value: \"115\",\n                    autocomplete: \"off\"\n                  },\n                  on: { change: _vm.axisMax }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(2),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", [\n                _c(\"input\", {\n                  attrs: { type: \"checkbox\", id: \"axisInversed\" },\n                  on: { change: _vm.axisInverse }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(3),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", [\n                _c(\"input\", {\n                  attrs: { type: \"checkbox\", id: \"opposed\" },\n                  on: { change: _vm.axisOpposed }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(4),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"div\", [\n                _c(\"input\", {\n                  attrs: { type: \"checkbox\", id: \"lastlabel\" },\n                  on: { change: _vm.lastLabel }\n                })\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(5),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                {\n                  staticClass: \"e-float-input\",\n                  staticStyle: { \"margin-top\": \"0px\" }\n                },\n                [\n                  _c(\"input\", {\n                    staticClass: \"form-control\",\n                    staticStyle: { width: \"100%\" },\n                    attrs: { type: \"text\", value: \"{value}\", id: \"format\" },\n                    on: { change: _vm.changeFormat }\n                  })\n                ]\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(6),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"pointerType\",\n                      dataSource: _vm.pointertypedata,\n                      index: \"0\",\n                      placeholder: _vm.pointertypeplaceholder,\n                      width: _vm.pointertypewidth,\n                      change: _vm.changePointertype\n                    }\n                  })\n                ],\n                1\n              )\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"br\"),\n          _vm._v(\" \"),\n          _c(\"tr\", [\n            _vm._m(7),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\n                \"div\",\n                [\n                  _c(\"ejs-dropdownlist\", {\n                    attrs: {\n                      id: \"pointerPlace\",\n                      dataSource: _vm.pointerplacedata,\n                      index: \"0\",\n                      placeholder: _vm.pointerplaceholder,\n                      width: _vm.pointerplacewidth,\n                      change: _vm.changePointerplace\n                    }\n                  })\n                ],\n                1\n              ),\n              _vm._v(\" \"),\n              _c(\"input\", {\n                staticStyle: { width: \"90%\" },\n                attrs: {\n                  type: \"range\",\n                  name: \"range-max\",\n                  id: \"rangeMax\",\n                  min: \"0\",\n                  max: \"115\",\n                  value: \"115\",\n                  autocomplete: \"off\"\n                }\n              })\n            ])\n          ])\n        ]\n      )\n    ]),\n    _vm._v(\" \"),\n    _vm._m(8),\n    _vm._v(\" \"),\n    _vm._m(9)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"minValue\" } }, [\n        _vm._v(\"Axis Minimum\\n                        \"),\n        _c(\"span\", [_vm._v(\"   0\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [\n      _c(\"div\", { attrs: { id: \"maxValue\" } }, [\n        _vm._v(\"Axis Maximum\\n                        \"),\n        _c(\"span\", [_vm._v(\"   115\")])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Axis Inversed\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Axis Opposed\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Show Last Label\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Label Format\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Pointer Type\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"td\", [_c(\"div\", [_vm._v(\"Marker Placement\")])])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates the axis and pointers feature in the linear gauge. Axis and pointers can be customized by using options available in the panel.\\n     \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to customize the axes and pointers. Use\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"format\")]),\n        _vm._v(\n          \" of labelStyle property to customize the axis labels and use\\n        \"\n        ),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\",\\n        \"),\n        _c(\"code\", [_vm._v(\"markerType\")]),\n        _vm._v(\" and\\n        \"),\n        _c(\"code\", [_vm._v(\"placement\")]),\n        _vm._v(\" properties to customize the pointers in linear gauge.\\n    \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about axes can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/axes/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });