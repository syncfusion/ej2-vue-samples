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
/******/ 		"maps/drilldown/main": 0
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
/******/ 	deferredModules.push(["./Samples/maps/drilldown/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/maps/drilldown/App.vue":
/*!****************************************!*\
  !*** ./Samples/maps/drilldown/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7d71972a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7d71972a&scoped=true& */ \"./Samples/maps/drilldown/App.vue?vue&type=template&id=7d71972a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/maps/drilldown/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css& */ \"./Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7d71972a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7d71972a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7d71972a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/maps/drilldown/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?");

/***/ }),

/***/ "./Samples/maps/drilldown/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/maps/drilldown/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/maps/drilldown/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?");

/***/ }),

/***/ "./Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7d71972a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?");

/***/ }),

/***/ "./Samples/maps/drilldown/App.vue?vue&type=template&id=7d71972a&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./Samples/maps/drilldown/App.vue?vue&type=template&id=7d71972a&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7d71972a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7d71972a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/drilldown/App.vue?vue&type=template&id=7d71972a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7d71972a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7d71972a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?");

/***/ }),

/***/ "./Samples/maps/drilldown/main.js":
/*!****************************************!*\
  !*** ./Samples/maps/drilldown/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/maps/drilldown/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/maps/drilldown/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.backLabel[data-v-7d71972a]:hover {\\n    cursor: pointer;\\n}\\n.markerTemplate[data-v-7d71972a] {\\n    height: 30px;\\n    width: 30px;\\n    display: block;\\n    margin: auto;\\n}\\n#category[data-v-7d71972a]:hover {\\n    cursor: pointer;\\n}\\n.markerTemplate[data-v-7d71972a] {\\n    font-size: 12px;\\n    color: white;\\n    text-shadow: 0px 1px 1px black;\\n    font-weight: 500\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ej2-maps-vue-samples_master-L57Y65PLVAWLBLIRRLC2Z37NWH3BHDO55BAVJBBPJWBATB564WNA/Samples/maps/drilldown/App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,aAAa;CAChB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,gBAAgB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=7d71972a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.backLabel[data-v-7d71972a]:hover {\\n    cursor: pointer;\\n}\\n.markerTemplate[data-v-7d71972a] {\\n    height: 30px;\\n    width: 30px;\\n    display: block;\\n    margin: auto;\\n}\\n#category[data-v-7d71972a]:hover {\\n    cursor: pointer;\\n}\\n.markerTemplate[data-v-7d71972a] {\\n    font-size: 12px;\\n    color: white;\\n    text-shadow: 0px 1px 1px black;\\n    font-weight: 500\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/maps/drilldown/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/drilldown/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-maps */ \"./node_modules/@syncfusion/ej2-vue-maps/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsPlugin\"]);\nlet touchmove = false;\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\ndata:function(){\n    return{\n        zoomSettings: {\n            enable: false\n        },\n        layerType: 'Geometry',\n        shapePropertyPath: 'continent',\n        shapeDataPath: 'continent',\n        dataSource: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/default-datasource.json'),\n        shapeData: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/world-map.json'),\n        shapeSettings: {\n                    colorValuePath: 'drillColor'\n        },\n        tooltipSettings: {\n                    visible: true,\n                    valuePath: 'continent'\n        },\n        markerSettings: [\n                    {\n                        visible: true,\n                        template: '<div id=\"marker1\" class=\"markerTemplate\">Asia' +\n                            '</div>',\n                        dataSource: [\n                            { latitude: 50.32087157990324, longitude: 90.015625 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"marker2\" class=\"markerTemplate\">Australia' +\n                            '</div>',\n                        dataSource: [\n                            { latitude: -28.88583769986199, longitude: 130.296875 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"marker3\" class=\"markerTemplate\">Africa' +\n                            '</div>',\n                        dataSource: [\n                            { latitude: 10.97274101999902, longitude: 16.390625 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"marker4\" class=\"markerTemplate\">Europe' +\n                            '</div>',\n                        dataSource: [\n                            { latitude: 47.95121990866204, longitude: 18.468749999999998 }\n                        ],\n                        animationDuration: 0,\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"marker5\" class=\"markerTemplate\" style=\"width:50px\">North America' +\n                            '</div>',\n                        dataSource: [\n                            { latitude: 59.88893689676585, longitude: -109.3359375 }\n                        ],\n                        animationDuration: 0\n                    },\n                    {\n                        visible: true,\n                        template: '<div id=\"marker6\" class=\"markerTemplate\" style=\"width:50px\">South America' +\n                            '</div>',\n                        dataSource: [\n                            { latitude: -6.64607562172573, longitude: -55.54687499999999 }\n                        ],\n                        animationDuration: 0\n                    },\n            ],\n            layerType1: 'Geometry',\n            shapeData1: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/africa.json'),\n            shapeSettings1: {\n                    fill: '#80306A'\n            },\n            highlightSettings1: {\n                    enable: true,\n                    fill: '#80306A'\n            },\n            tooltipSettings1: {\n                    visible: true,\n                    valuePath: 'name'\n            },\n            layerType2: 'Geometry',\n            shapeData2: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/europe.json'),\n            shapeSettings2: {\n                    fill: '#622D6C'\n            },\n            highlightSettings2: {\n                    enable: true,\n                    fill: '#622D6C'\n            },\n            tooltipSettings2: {\n                    visible: true,\n                    valuePath: 'name'\n            },\n            layerType3: 'Geometry',\n            shapeData3: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/asia.json'),\n            shapeSettings3: {\n                    fill: '#462A6D'\n            },\n            highlightSettings3: {\n                    enable: true,\n                    fill: '#462A6D'\n            },\n            tooltipSettings3: {\n                    visible: true,\n                    valuePath: 'name'\n            },\n            layerType4: 'Geometry',\n            shapeData4: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/north-america.json'),\n            shapeSettings4: {\n                    fill: '#C13664'\n            },\n            highlightSettings4: {\n                    enable: true,\n                    fill: '#C13664'\n            },\n            tooltipSettings4: {\n                    visible: true,\n                    valuePath: 'name'\n            },\n            layerType5: 'Geometry',\n            shapeData5: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/south-america.json'),\n            shapeSettings5: {\n                    fill: '#9C3367'\n            },\n            highlightSettings5: {\n                    enable: true,\n                    fill: '#9C3367'\n            },\n            tooltipSettings5: {\n                    visible: true,\n                    valuePath: 'name'\n            },\n            layerType6: 'Geometry',\n            shapeData6: new _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapAjax\"]('././../../source/maps/map-data/oceania.json'),\n            shapeSettings6: {\n                    fill: '#2A2870'\n                },\n            highlightSettings6: {\n                    enable: true,\n                    fill: '#2A2870'\n                },\n            tooltipSettings6: {\n                    visible: true,\n                    valuePath: 'name'\n            }\n    }\n},\nprovide: {\n    maps: [_syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Highlight\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"MapsTooltip\"], _syncfusion_ej2_vue_maps__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"]]\n},\nmethods:{\n    /* custom code start */\n   load: function(args) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args.maps.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n    },\n    /* custom code end */\n    loaded: function (args) {\n        let mapsSVG = document.getElementById('mapdrilldown_svg');\n        mapsSVG.addEventListener('touchmove', (e) => {\n            touchmove = true; }, false);\n    },\n    shapeSelected:function(args){   \n            let shape = (args.shapeData).continent;\n            if (this.$refs.maps.ej2Instances.baseLayerIndex === 0 && !touchmove) {\n                if (shape === 'Africa') {\n                    this.$refs.maps.ej2Instances.baseLayerIndex = 1;\n                    this.$refs.maps.ej2Instances.refresh();\n                } else if (shape === 'Europe') {\n                    this.$refs.maps.ej2Instances.baseLayerIndex = 2;\n                    this.$refs.maps.ej2Instances.refresh();\n                } else if (shape === 'Asia') {\n                    this.$refs.maps.ej2Instances.baseLayerIndex = 3;\n                    this.$refs.maps.ej2Instances.refresh();\n                } else if (shape === 'North America') {\n                    this.$refs.maps.ej2Instances.baseLayerIndex = 4;\n                    this.$refs.maps.ej2Instances.refresh();\n                } else if (shape === 'South America') {\n                    this.$refs.maps.ej2Instances.baseLayerIndex = 5;\n                    this.$refs.maps.ej2Instances.refresh();\n                } else if (shape === 'Australia') {\n                    this.$refs.maps.ej2Instances.baseLayerIndex = 6;\n                    this.$refs.maps.ej2Instances.refresh();\n                }\n                let button = document.getElementById('button');\n                button.style.display = 'block';\n                document.getElementById('content').innerHTML = '';\n                (document.getElementById('category')).style.visibility = 'visible';\n                (document.getElementById('text')).innerHTML = shape;\n                (document.getElementById('symbol')).style.visibility = 'visible';\n            }\n            touchmove = false;\n    },\n    clickCategory:function(args){      \n        this.$refs.maps.ej2Instances.baseLayerIndex = 0;\n        this.$refs.maps.ej2Instances.refresh();\n        let button = document.getElementById('button');\n        button.style.display = 'none';\n        document.getElementById('content').innerHTML = 'Click on a shape to drill';\n        (document.getElementById('category')).style.visibility = 'hidden';\n        (document.getElementById('text')).innerHTML = '';\n        (document.getElementById('symbol')).style.visibility = 'hidden';\n    }\n}\n}));\n\n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/maps/drilldown/App.vue?vue&type=template&id=7d71972a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/maps/drilldown/App.vue?vue&type=template&id=7d71972a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\n      \"div\",\n      {\n        staticStyle: {\n          \"font-size\": \"14px\",\n          \"margin-left\": \"10px\",\n          \"margin-top\": \"20px\",\n          display: \"none\",\n          left: \"50px\",\n          top: \"50px\"\n        },\n        attrs: { id: \"button\" }\n      },\n      [\n        _c(\n          \"a\",\n          {\n            staticStyle: { visibility: \"hidden\", display: \"inline-block\" },\n            attrs: { id: \"category\" },\n            on: { click: _vm.clickCategory }\n          },\n          [_vm._v(\"\\n        World Map\\n    \")]\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"p\",\n          {\n            staticStyle: { visibility: \"hidden\", display: \"inline-block\" },\n            attrs: { id: \"symbol\" }\n          },\n          [_vm._v(\" >> \")]\n        ),\n        _vm._v(\" \"),\n        _c(\"p\", {\n          staticStyle: { display: \"inline-block\" },\n          attrs: { id: \"text\" }\n        })\n      ]\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"control-section\" },\n      [\n        _c(\n          \"ejs-maps\",\n          {\n            ref: \"maps\",\n            attrs: {\n              id: \"mapdrilldown\",\n              shapeSelected: _vm.shapeSelected,\n              loaded: _vm.loaded,\n              load: _vm.load,\n              zoomSettings: _vm.zoomSettings\n            }\n          },\n          [\n            _c(\n              \"e-layers\",\n              [\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData,\n                    layerType: _vm.layerType,\n                    shapePropertyPath: _vm.shapePropertyPath,\n                    shapeDataPath: _vm.shapeDataPath,\n                    dataSource: _vm.dataSource,\n                    shapeSettings: _vm.shapeSettings,\n                    markerSettings: _vm.markerSettings,\n                    tooltipSettings: _vm.tooltipSettings\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData1,\n                    layerType: _vm.layerType1,\n                    highlightSettings: _vm.highlightSettings1,\n                    shapeSettings: _vm.shapeSettings1,\n                    tooltipSettings: _vm.tooltipSettings1\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData2,\n                    layerType: _vm.layerType2,\n                    highlightSettings: _vm.highlightSettings2,\n                    shapeSettings: _vm.shapeSettings2,\n                    tooltipSettings: _vm.tooltipSettings2\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData3,\n                    layerType: _vm.layerType3,\n                    highlightSettings: _vm.highlightSettings3,\n                    shapeSettings: _vm.shapeSettings3,\n                    tooltipSettings: _vm.tooltipSettings3\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData4,\n                    layerType: _vm.layerType4,\n                    highlightSettings: _vm.highlightSettings4,\n                    shapeSettings: _vm.shapeSettings4,\n                    tooltipSettings: _vm.tooltipSettings4\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData5,\n                    layerType: _vm.layerType5,\n                    highlightSettings: _vm.highlightSettings5,\n                    shapeSettings: _vm.shapeSettings5,\n                    tooltipSettings: _vm.tooltipSettings5\n                  }\n                }),\n                _vm._v(\" \"),\n                _c(\"e-layer\", {\n                  attrs: {\n                    shapeData: _vm.shapeData6,\n                    layerType: _vm.layerType6,\n                    highlightSettings: _vm.highlightSettings6,\n                    shapeSettings: _vm.shapeSettings6,\n                    tooltipSettings: _vm.tooltipSettings6\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _vm._m(0)\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { align: \"center\" } }, [\n      _c(\"p\", [\n        _c(\"i\", [\n          _c(\"div\", { attrs: { align: \"center\" } }, [\n            _c(\n              \"p\",\n              {\n                staticStyle: { \"font-size\": \"16px\", color: \"grey\" },\n                attrs: { id: \"content\" }\n              },\n              [_vm._v(\"Click on a shape to drill\")]\n            )\n          ])\n        ])\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample demonstrates drill down with all the continents in the initial view. By clicking a continent, you can view all\\n        the countries available in that continent.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to display an another layer by clicking a shape in previous layer.\\n    \"\n        )\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/maps/drilldown/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });