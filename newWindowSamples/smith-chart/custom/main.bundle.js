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
/******/ 		"smith-chart/custom/main": 0
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
/******/ 	deferredModules.push(["./Samples/smith-chart/custom/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/smith-chart/custom/App.vue":
/*!********************************************!*\
  !*** ./Samples/smith-chart/custom/App.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_e208ec9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=e208ec9c& */ \"./Samples/smith-chart/custom/App.vue?vue&type=template&id=e208ec9c&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/smith-chart/custom/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_e208ec9c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_e208ec9c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/smith-chart/custom/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?");

/***/ }),

/***/ "./Samples/smith-chart/custom/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./Samples/smith-chart/custom/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/smith-chart/custom/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?");

/***/ }),

/***/ "./Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************!*\
  !*** ./Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?");

/***/ }),

/***/ "./Samples/smith-chart/custom/App.vue?vue&type=template&id=e208ec9c&":
/*!***************************************************************************!*\
  !*** ./Samples/smith-chart/custom/App.vue?vue&type=template&id=e208ec9c& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e208ec9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=e208ec9c& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/smith-chart/custom/App.vue?vue&type=template&id=e208ec9c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e208ec9c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_e208ec9c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?");

/***/ }),

/***/ "./Samples/smith-chart/custom/main.js":
/*!********************************************!*\
  !*** ./Samples/smith-chart/custom/main.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/smith-chart/custom/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#smithchart-custom-sample #radius > * {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/smith-chart/custom/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n#smithchart-custom-sample #radius > * {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/smith-chart/custom/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/smith-chart/custom/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SmithchartPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_4__[\"DropDownListPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_2__[\"CheckBoxPlugin\"]);\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_3__[\"SliderPlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\nreturn{  \n        horizontalAxis: {\n            minorGridLines: {\n                visible: true\n            }\n        },\n        radialAxis: {\n            minorGridLines: {\n                visible: true\n            }\n        },\n        legendSettings: {\n            visible: true,\n            position: 'Top',\n            border: { color: 'transparent' },\n            shape: 'Circle'\n        },\n        title: {\n            text: 'Impedance Transmission', enableTrim: true, maximumWidth: 200,\n            visible: true, font: { size: '16px' }\n        },\n        points: [\n                    { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },\n                    { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 4 },\n                    { resistance: 3.5, reactance: 3 }, { resistance: 2.5, reactance: 2 },\n                    { resistance: 2, reactance: 1.5 }, { resistance: 1.5, reactance: 1.25 },\n                    { resistance: 1, reactance: 0.9 }, { resistance: 0.5, reactance: 0.6 },\n                    { resistance: 0.3, reactance: 0.4 }, { resistance: 0, reactance: 0.15 },\n                ],\n        name: 'Transmission1',\n        enableAnimation: false,\n        width: 2,\n        tooltip: { visible: true },\n        enableSmartLabels: false,\n        fill: '#0F94C4',\n        marker: {\n                    shape: 'rectangle',\n                    visible: true,\n                    border: {\n                        width: 2,\n            }\n        },\n        points2: [\n                    { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },\n                    { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },\n                    { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },\n                    { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.8 },\n                    { resistance: 3.5, reactance: -0.8 }, { resistance: 2.5, reactance: -0.4 },\n                    { resistance: 2, reactance: -0.2 }, { resistance: 1.5, reactance: 0 },\n                    { resistance: 1, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },\n                    { resistance: 0.3, reactance: 0.15 }, { resistance: 0, reactance: 0.05 },\n                ],\n        name2: 'Transmission2',\n        enableAnimation2: false,\n        width2: 2,\n        tooltip2: { visible: true },\n        enableSmartLabels2: false,\n        fill2: '#EE0C88',\n        marker2: {\n                    shape: 'rectangle',\n                    visible: true,\n                    border: {\n                        width: 2,\n            }\n        },\n        legend1data:[{ Id:'top', level:'Top'},\n        { Id:'bottom', level:'Bottom'},\n        { Id:'right', level:'Right'},\n        { Id:'left', level:'Left'}],\n        legend1fields:{text: 'level', value: 'Id'},\n        legend1width:120,\n        value: 1, type: 'MinRange',\n        step: 0.1\n\n}\n},\nprovide:{\n    smithchart:[_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"SmithchartLegend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"TooltipRender\"]]\n},\nmounted(){\n    document.getElementById('radius1').innerHTML = 'Radius <span> ' + 1;\n},\nmethods:{\n    /* custom code start*/\n     load:function(args){\n            let theme = location.hash.split('/')[1];\n            theme = theme ? theme : 'Material';\n            args.smithchart.theme = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');\n    },\n    /* custom code end */\n    // Code for Property Panel\n    changeLegend:function(args){\n        let element = args.value.toString();\n        this.$refs.smithchart.ej2Instances.legendSettings.position = element;\n        this.$refs.smithchart.ej2Instances.refresh();\n    },\n    changeRadius:function(e){\n            this.$refs.smithchart.ej2Instances.radius = e.value;\n            document.getElementById('radius1').innerHTML = 'Radius <span> ' + (e.value);\n            this.$refs.smithchart.ej2Instances.refresh();\n    },\n    changeMarker:function(e){\n        let boolean = (event.target).checked;\n        if (boolean) {\n            this.$refs.smithchart.ej2Instances.series[0].marker.visible = true;\n            this.$refs.smithchart.ej2Instances.series[1].marker.visible = true;\n        } else {\n            this.$refs.smithchart.ej2Instances.series[0].marker.visible = false;\n            this.$refs.smithchart.ej2Instances.series[1].marker.visible = false;\n        }\n        this.$refs.smithchart.ej2Instances.refresh();\n    },\n    changeDatalabel:function(e){\n        let boolean = (event.target).checked;\n        if (boolean) {\n            this.$refs.smithchart.ej2Instances.series[0].marker.dataLabel.visible = true;\n            this.$refs.smithchart.ej2Instances.series[1].marker.dataLabel.visible = true;\n        } else {\n            this.$refs.smithchart.ej2Instances.series[0].marker.dataLabel.visible = false;\n            this.$refs.smithchart.ej2Instances.series[1].marker.dataLabel.visible = false;\n        }\n        this.$refs.smithchart.ej2Instances.refresh();\n    },\n    changeAnimate:function(e){\n        let boolean = (event.target).checked;\n        if (boolean) {\n            this.$refs.smithchart.ej2Instances.series[0].enableAnimation = true;\n            this.$refs.smithchart.ej2Instances.series[1].enableAnimation = true;\n        } else {\n            this.$refs.smithchart.ej2Instances.series[0].enableAnimation = false;\n            this.$refs.smithchart.ej2Instances.series[1].enableAnimation = false;\n        }\n        this.$refs.smithchart.ej2Instances.refresh();\n    },\n    changeTooltip:function(e){\n        let boolean = (event.target).checked;\n        if (boolean) {\n            this.$refs.smithchart.ej2Instances.series[0].tooltip.visible = true;\n            this.$refs.smithchart.ej2Instances.series[1].tooltip.visible = true;\n        } else {\n            this.$refs.smithchart.ej2Instances.series[0].tooltip.visible = false;\n            this.$refs.smithchart.ej2Instances.series[1].tooltip.visible = false;\n        }\n        this.$refs.smithchart.ej2Instances.refresh();\n    },\n    legendChange:function(e){\n        let mode = document.getElementById('legend1');\n        let boolean = (event.target).checked;\n        if (boolean) {\n            this.$refs.smithchart.ej2Instances.legendSettings.visible = true;\n            this.$refs.legendPosition.ej2Instances.enabled = true;\n        } else {\n            this.$refs.smithchart.ej2Instances.legendSettings.visible = false;\n            this.$refs.legendPosition.ej2Instances.enabled = false;\n        }\n        this.$refs.smithchart.ej2Instances.refresh();\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/smith-chart/custom/App.vue?vue&type=template&id=e208ec9c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/smith-chart/custom/App.vue?vue&type=template&id=e208ec9c& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"smithchart-custom-sample\"}},[_c('div',{staticClass:\"col-lg-9 control-section\"},[_c('ejs-smithchart',{ref:\"smithchart\",attrs:{\"id\":\"container\",\"load\":_vm.load,\"horizontalAxis\":_vm.horizontalAxis,\"radialAxis\":_vm.radialAxis,\"radius\":\"1\",\"legendSettings\":_vm.legendSettings,\"title\":_vm.title}},[_c('e-seriesCollection',[_c('e-series',{attrs:{\"points\":_vm.points,\"name\":_vm.name,\"width\":_vm.width,\"enableSmartLabels\":_vm.enableSmartLabels,\"fill\":_vm.fill,\"enableAnimation\":_vm.enableAnimation,\"tooltip\":_vm.tooltip,\"marker\":_vm.marker}}),_vm._v(\" \"),_c('e-series',{attrs:{\"points\":_vm.points2,\"name\":_vm.name2,\"width\":_vm.width2,\"enableSmartLabels\":_vm.enableSmartLabels2,\"fill\":_vm.fill2,\"enableAnimation\":_vm.enableAnimation2,\"tooltip\":_vm.tooltip2,\"marker\":_vm.marker2}})],1)],1)],1),_vm._v(\" \"),_c('div',{staticClass:\"col-lg-3 property-section\"},[_vm._v(\"\\n                   \"),_c('br'),_vm._v(\" \"),_c('table',{staticStyle:{\"width\":\"100%\"},attrs:{\"id\":\"property\",\"title\":\"Properties\"}},[_c('tbody',[_c('tr',{staticStyle:{\"height\":\"35px\"}},[_vm._m(0),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"70%\"}},[_c('div',{staticStyle:{\"width\":\"70%\"}},[_c('ejs-slider',{attrs:{\"id\":\"radius\",\"value\":_vm.value,\"type\":_vm.type,\"change\":_vm.changeRadius,\"max\":\"1\",\"min\":\"0\",\"step\":_vm.step}})],1)])]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"35px\"}},[_c('td',{staticStyle:{\"width\":\"70%\"}},[_vm._v(\"\\n                        Marker\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"checked\":\"true\",\"name\":\"marker\",\"id\":\"marker\",\"change\":_vm.changeMarker}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"35px\"}},[_c('td',{staticStyle:{\"width\":\"70%\"}},[_vm._v(\"\\n                        Data Label\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"name\":\"datalabel\",\"id\":\"datalabel\",\"change\":_vm.changeDatalabel}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"35px\"}},[_c('td',{staticStyle:{\"width\":\"70%\"}},[_vm._v(\"\\n                        Animation\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"name\":\"high\",\"id\":\"animate\",\"change\":_vm.changeAnimate}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"35px\"}},[_c('td',{staticStyle:{\"width\":\"70%\"}},[_vm._v(\"\\n                        Tooltip\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"checked\":\"true\",\"name\":\"high\",\"id\":\"tooltip\",\"change\":_vm.changeTooltip}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"35px\"}},[_c('td',{staticStyle:{\"width\":\"70%\"}},[_vm._v(\"\\n                        Legend\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-checkbox',{attrs:{\"checked\":\"true\",\"name\":\"high\",\"id\":\"legend\",\"change\":_vm.legendChange}})],1)]),_vm._v(\" \"),_c('tr',{staticStyle:{\"height\":\"35px\"}},[_c('td',{staticStyle:{\"width\":\"70%\"}},[_vm._v(\"\\n                        Legend Position\\n                    \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"50%\"}},[_c('ejs-dropdownlist',{ref:\"legendPosition\",attrs:{\"id\":\"legend1\",\"dataSource\":_vm.legend1data,\"fields\":_vm.legend1fields,\"value\":\"top\",\"index\":\"0\",\"width\":_vm.legend1width,\"change\":_vm.changeLegend}})],1)])])])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',{staticStyle:{\"width\":\"70%\"},attrs:{\"id\":\"radius1\"}},[_vm._v(\"\\n                        Radius\"),_c('span',[_vm._v(\"   10\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample visualizes two transmissions in a Smith chart. Rendering Smith chart can be changed by using the \"),_c('code',[_vm._v(\"Render Type\")]),_vm._v(\" in properties panel.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to render a Smith chart with multiple series. Legend has been enabled to denote the series in Smith chart.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"      \\n        Smith chart component features are segregated into individual feature-wise modules. To use a tooltip, inject the \"),_c('code',[_vm._v(\"Tooltip\")]),_vm._v(\" module using the \"),_c('code',[_vm._v(\"SmithChart.Inject(TooltipRender)\")]),_vm._v(\" method, and use a legend by injecting the \"),_c('code',[_vm._v(\"Legend\")]),_vm._v(\" module using the \"),_c('code',[_vm._v(\"SmithChart.Inject(Legend)\")]),_vm._v(\" method\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/smith-chart/custom/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });