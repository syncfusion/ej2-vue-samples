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
/******/ 		"linear-gauge/annotation/main": 0
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
/******/ 	deferredModules.push(["./Samples/linear-gauge/annotation/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/linear-gauge/annotation/App.vue":
/*!*************************************************!*\
  !*** ./Samples/linear-gauge/annotation/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_689890db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=689890db&scoped=true& */ \"./Samples/linear-gauge/annotation/App.vue?vue&type=template&id=689890db&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/linear-gauge/annotation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css& */ \"./Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_689890db_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_689890db_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"689890db\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/linear-gauge/annotation/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/annotation/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/linear-gauge/annotation/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/annotation/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_689890db_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/annotation/App.vue?vue&type=template&id=689890db&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/linear-gauge/annotation/App.vue?vue&type=template&id=689890db&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_689890db_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=689890db&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/annotation/App.vue?vue&type=template&id=689890db&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_689890db_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_689890db_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/annotation/main.js":
/*!*************************************************!*\
  !*** ./Samples/linear-gauge/annotation/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/annotation/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-689890db] {\\n    padding: 0px !important;\\n}\\n#templateWrap img[data-v-689890db] {\\n    border-radius: 30px;\\n    width: 30px;\\n    height: 30px;\\n    margin: 0 auto;\\n}\\n#templateWrap .des[data-v-689890db] {\\n    float: right;\\n    padding-left: 10px;\\n    line-height: 30px;\\n}\\np[data-v-689890db] {\\n    padding: 0.5em;\\n    font-size: 16px;\\n}\\n#targetContainer .text-center[data-v-689890db] {\\n    color: rgba(0, 0, 0, 0.54);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eargauge-vue-samples_master-I2MPOSABLCZ3MA3ENCOCSUUKUZ2MMI7UTDWJNE2FXOBSRXGYFYDQ/Samples/linear-gauge/annotation/App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B;AACD;IACI,oBAAoB;IACpB,YAAY;IACZ,aAAa;IACb,eAAe;CAClB;AACD;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;CACrB;AACD;IACI,eAAe;IACf,gBAAgB;CACnB;AACD;IACI,2BAA2B;CAC9B\",\"file\":\"App.vue?vue&type=style&index=0&id=689890db&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-689890db] {\\n    padding: 0px !important;\\n}\\n#templateWrap img[data-v-689890db] {\\n    border-radius: 30px;\\n    width: 30px;\\n    height: 30px;\\n    margin: 0 auto;\\n}\\n#templateWrap .des[data-v-689890db] {\\n    float: right;\\n    padding-left: 10px;\\n    line-height: 30px;\\n}\\np[data-v-689890db] {\\n    padding: 0.5em;\\n    font-size: 16px;\\n}\\n#targetContainer .text-center[data-v-689890db] {\\n    color: rgba(0, 0, 0, 0.54);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/annotation/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/annotation/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"LinearGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        rangePalettes: ['#30b32d', '#ffdd00', '#f03e3e'],\n        orientation: 'Horizontal',\n        maximum: 90,\n        labelStyle: {\n            font: {\n            size: '0px'\n                }   \n        },\n        line: {\n        width: 0\n        },\n        value: 35,\n        height: 15,\n        width: 15,\n        color: '#757575',\n        placement: 'Near',\n        markerType: 'Triangle',\n        offset: -50,\n        majorTicks: {\n                interval: 10,\n                height: 0\n            },\n            minorTicks: {\n                height: 0\n            },\n            ranges: [{\n                start: 0,\n                end: 30,\n                startWidth: 50,\n                endWidth: 50\n            },\n            {\n                start: 30,\n                end: 60,\n                startWidth: 50,\n                endWidth: 50\n            },\n            {\n                start: 60,\n                end: 90,\n                startWidth: 50,\n                endWidth: 50\n            }]\n    }\n},\nprovide: {\n    lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\nmethods: {\n    /* custom code start */\n    load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    gaugeLoad: function(args){\n    let selectedTheme = location.hash.split(\"/\")[1];\n    selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n    args.gauge.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    /* custom code end */\n    let count = 0;\n    if (this.count === undefined) {\n    this.$refs.lineargauge.ej2Instances.annotations = [\n            {\n                content: '<div id=\"title\" style=\"width:200px;\"><p style=\"font-size:18px;\">CPU Utilization</p></div>',\n                horizontalAlignment: 'Center',\n                x: 35, zIndex: '1',\n                y: 50\n            },\n            {\n                content: '<div id=\"low\"><img style=\"height:25px;width:25px;\" src=\"./../../source/linear-gauge/images/low.png\"/></div>',\n                axisIndex: 0,\n                axisValue: 15,\n                y: -25,\n                zIndex: '1'\n            },\n            {\n                content: '<div id=\"moderate\"><img style=\"height:25px;width:25px;\" src=\"./../../source/linear-gauge/images/moderate.png\"/></div>',\n                axisIndex: 0,\n                axisValue: 45,\n                y: -25,\n                zIndex: '1'\n            },\n            {\n                content: '<div id=\"high\"><img style=\"height:25px;width:25px;\" src=\"./../../source/linear-gauge/images/high.png\"/></div>',\n                axisIndex: 0,\n                axisValue: 75,\n                y: -25,\n                zIndex: '1'\n            },\n            {\n                content: '<div id=\"lowText\"><p style=\"font-size:15px;color:#248622;\">Low</p></div>',\n                axisIndex: 0, zIndex: '1',\n                axisValue: 15,\n                y: 20\n            },\n            {\n                content: '<div id=\"moderateText\"><p style=\"font-size:15px;color:#ba9e2a;\">Moderate</p></div>',\n                axisIndex: 0, zIndex: '1',\n                axisValue: 45,\n                y: 20\n            },\n            {\n                content: '<div id=\"highText\"><p style=\"font-size:15px;color:#b42f2f;\">High</p></div>',\n                axisIndex: 0, zIndex: '1',\n                axisValue: 75,\n                y: 20\n            }\n        ];\n        this.count = 0;\n        this.$refs.lineargauge.ej2Instances.refresh();\n    }\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/annotation/App.vue?vue&type=template&id=689890db&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/annotation/App.vue?vue&type=template&id=689890db&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-lineargauge\",\n          {\n            ref: \"lineargauge\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              align: \"center\",\n              id: \"annotationContainer\",\n              load: _vm.gaugeLoad,\n              rangePalettes: _vm.rangePalettes,\n              orientation: _vm.orientation\n            }\n          },\n          [\n            _c(\n              \"e-axes\",\n              [\n                _c(\n                  \"e-axis\",\n                  {\n                    attrs: {\n                      maximum: _vm.maximum,\n                      labelStyle: _vm.labelStyle,\n                      line: _vm.line,\n                      majorTicks: _vm.majorTicks,\n                      minorTicks: _vm.minorTicks,\n                      ranges: _vm.ranges\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-pointers\",\n                      [\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            value: _vm.value,\n                            height: _vm.height,\n                            width: _vm.width,\n                            color: _vm.color,\n                            placement: _vm.placement,\n                            markerType: _vm.markerType,\n                            offset: _vm.offset\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates the CPU Utilization of a resource by using annotation feature.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _vm._v(\n        \"\\n    In this sample we have used annotations to indicate low, moderate and high ranges. Annotations are used to place the texts,\\n    shapes or images anywhere in the gauge. You can use\\n    \"\n      ),\n      _c(\"code\", [_vm._v(\"content\")]),\n      _vm._v(\",\\n    \"),\n      _c(\"code\", [_vm._v(\"x\")]),\n      _vm._v(\",\\n    \"),\n      _c(\"code\", [_vm._v(\"y\")]),\n      _vm._v(\",\\n    \"),\n      _c(\"code\", [_vm._v(\"zIndex\")]),\n      _vm._v(\n        \" properties to customize the annotations. And you can specify the id of the element that needs to be displayed, in the\\n    content property.\\n    \"\n      ),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\n        \"\\n    Linear gauge component features are segregated into individual feature-wise modules. To render annotations, we need to inject\\n    \"\n      ),\n      _c(\"code\", [_vm._v(\"Annotations\")]),\n      _vm._v(\" module using\\n    \"),\n      _c(\"code\", [_vm._v(\"LinearGauge.Inject(LinearGauge)\")]),\n      _vm._v(\n        \" method. More information about annotations can be found in this\\n    \"\n      ),\n      _c(\n        \"a\",\n        {\n          attrs: {\n            target: \"_blank \",\n            href: \"http://ej2.syncfusion.com/documentation \"\n          }\n        },\n        [_vm._v(\"documentation section\")]\n      ),\n      _vm._v(\".\\n\")\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/annotation/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });