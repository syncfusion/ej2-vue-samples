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
/******/ 		"linear-gauge/data/main": 0
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
/******/ 	deferredModules.push(["./Samples/linear-gauge/data/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/linear-gauge/data/App.vue":
/*!*******************************************!*\
  !*** ./Samples/linear-gauge/data/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_738acbd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=738acbd6&scoped=true& */ \"./Samples/linear-gauge/data/App.vue?vue&type=template&id=738acbd6&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/linear-gauge/data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css& */ \"./Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_738acbd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_738acbd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"738acbd6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/linear-gauge/data/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/data/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/linear-gauge/data/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_738acbd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/data/App.vue?vue&type=template&id=738acbd6&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./Samples/linear-gauge/data/App.vue?vue&type=template&id=738acbd6&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_738acbd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=738acbd6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/data/App.vue?vue&type=template&id=738acbd6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_738acbd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_738acbd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?");

/***/ }),

/***/ "./Samples/linear-gauge/data/main.js":
/*!*******************************************!*\
  !*** ./Samples/linear-gauge/data/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/linear-gauge/data/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-738acbd6] {\\n    padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/eargauge-vue-samples_master-I2MPOSABLCZ3MA3ENCOCSUUKUZ2MMI7UTDWJNE2FXOBSRXGYFYDQ/Samples/linear-gauge/data/App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,wBAAwB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=738acbd6&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-738acbd6] {\\n    padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/data/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/data/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-lineargauge */ \"./node_modules/@syncfusion/ej2-vue-lineargauge/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"LinearGaugePlugin\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n data:function(){\n    return{\n        orientation1: 'Horizontal',\n        container1: {\n            width: 30,\n            border: {\n                width: 0\n            },\n            offset: 30\n           },\n            line1: {\n                offset: 30\n            },\n            labelStyle1: {\n                offset: 50\n            },\n             value1: 10,\n             placement1: 'Near',\n             offset1: -60,\n             height1: 10,\n             width1: 10,\n             markerType1: 'Triangle',\n              ranges1: [\n                {\n                    start: 0,\n                    end: 10,\n                    startWidth: 30,\n                    endWidth: 30,\n                    color: '#30b32d'\n                }\n            ],\n            annotations1: [\n            {\n                content: '<div id=\"title\" style=\"width:300px;\"> <img style=\"float:left\" src'\n                + '=\"./../../source/linear-gauge/images/exercise-tracking.svg\"/><p style=\"font-size:18px;color:#4285F4;float:left;margin-left:12px;'\n                + 'margin-top:4px\">Exercise Tracking </p></div>',\n                axisIndex: 0, zIndex: '1',\n                axisValue: 0,\n                x: 150,\n                y: -180\n            },\n            {\n                content: '<div id=\"running\" style=\"width:100px;\"><img style=\"height:25px;width:25px;float:left\" src=\"./../../source/linear-gauge' +\n                '/images/running.svg\" /></span><p style=\"float:left;margin-left:10px;\">Running</p></div>',\n                axisIndex: 0, zIndex: '1',\n                axisValue: 0,\n                x: 50,\n                y: -130\n            },\n            {\n                content: '<div id=\"pointerText\" style=\"width:60px;\"><p style=\"font-size:15px;\">10 MPH</p></div>',\n                axisIndex: 0, zIndex: '1',\n                axisValue: 10,\n                y: -65\n            }\n        ],\n        orientation2: 'Horizontal',\n        container2: {\n            width: 30,\n            border: {\n                width: 0\n            },\n            offset: -50\n        },\n         line2: {\n                offset: 30\n            },\n            labelStyle2: {\n                offset: 50\n            },\n            value2: 28,\n            height2: 10,\n            width2: 10,\n            placement2: 'Near',\n            offset2: -60,\n            markerType2: 'Triangle',\n            ranges2: [\n                {\n                    start: 0,\n                    end: 28,\n                    startWidth: 30,\n                    endWidth: 30,\n                    color: '#30b32d'\n                }\n            ],\n            annotations2: [{\n            content: '<div id=\"cycle\" style=\"width:100px;\"><img style=\"height:25px;width:25px;float:left\" src=\"./../../source/linear-gauge'\n            + '/images/cycling.svg\" /></span><p style=\"float:left;margin-left:10px;\">Cycling</p></div>',\n            axisIndex: 0, zIndex: '1',\n            axisValue: 0,\n            x: 50,\n            y: -110\n        },\n        {\n            content: '<div id=\"pointerText\" style=\"width:60px;\"><p style=\"font-size:15px;\">28 MPH</p></div>',\n            axisIndex: 0,\n            axisValue: 28,\n            y: -70\n        }],\n        orientation3: 'Horizontal',\n        container3: {\n            width: 30,\n            border: {\n                width: 0\n            },\n            offset: -90\n        },\n         maximum3: 10,\n         line3: {\n                offset: 30\n            },\n         labelStyle3: {\n                format: '{value}k',\n                offset: 50\n            },\n        value3: 2,\n        height3: 10,\n        width3: 10,\n        placement3: 'Near',\n        offset3: -60,\n        markerType3: 'Triangle',\n        ranges3: [\n                {\n                    start: 0,\n                    end: 2,\n                    startWidth: 30,\n                    endWidth: 30,\n                    color: '#30b32d'\n                }\n            ],\n        annotations3: [{\n            content: '<div id=\"walk\" style=\"width:100px;\"><img style=\"height:25px;width:25px;float:left\" src=\"./../../source/' +\n            'linear-gauge/images/walking.svg\" /></span><p style=\"float:left;margin-left:10px;\">Walking</p></div>',\n            axisIndex: 0,\n            axisValue: 0, zIndex: '1',\n            x: 50,\n            y: -120\n        },\n        {\n            content: '<div id=\"pointerText\" style=\"width:100px;\"><p style=\"font-size:15px;\">2000 Steps</p></div>',\n            axisIndex: 0,\n            axisValue: 2.2, zIndex: '1',\n            y: -65\n        }]\n        }\n    },\nprovide: {\n    lineargauge: [_syncfusion_ej2_vue_lineargauge__WEBPACK_IMPORTED_MODULE_1__[\"Annotations\"]]\n},\n  /* custom code start */\nmethods: {\n    load1: function(args1) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args1.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n            if (args1.gauge.theme.toLowerCase().indexOf('dark') > 1 || args1.gauge.theme.toLowerCase() === 'highcontrast') {\n                args1.gauge.annotations[1].content = '<div id=\"running\" style=\"width:100px;\"><img style=\"height:25px;width:25px;' +\n                    'float:left\" src=\"./../../source/linear-gauge/images/Running1.svg\" /></span><p style=\"float:left;' +\n                    'margin-left:10px;\">Running</p></div>';\n            }\n    },\n    load2: function(args2) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args2.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n            if (args2.gauge.theme.toLowerCase().indexOf('dark') > 1 || args2.gauge.theme.toLowerCase() === 'highcontrast') {\n                args2.gauge.annotations[0].content = '<div id=\"cycle\" style=\"width:100px;\"><img style=\"height:25px;width:25px;' +\n                    'float:left\" src=\"./../../source/linear-gauge/images/Cycling1.svg\" /></span><p style=\"float:left;' +\n                    'margin-left:10px;\">Cycling</p></div>';\n            }\n    },\n    load3: function(args3) {\n      let selectedTheme = location.hash.split(\"/\")[1];\n      selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n      args3.gauge.theme =\n        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n            if (args3.gauge.theme.toLowerCase().indexOf('dark') > 1 || args3.gauge.theme.toLowerCase() === 'highcontrast') {\n                args3.gauge.annotations[0].content = '<div id=\"walk\" style=\"width:100px;\"><img style=\"height:25px;width:25px;' +\n                    'float:left\" src=\"./../../source/linear-gauge/images/Walking1.svg\" /></span><p style=\"float:left;' +\n                    'margin-left:10px;\">Walking</p></div>';\n            }\n    }\n}\n/* custom code end */\n}));\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/linear-gauge/data/App.vue?vue&type=template&id=738acbd6&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/linear-gauge/data/App.vue?vue&type=template&id=738acbd6&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { height: \"300px\" } },\n      [\n        _c(\n          \"ejs-lineargauge\",\n          {\n            attrs: {\n              align: \"center\",\n              id: \"container1\",\n              load: _vm.load1,\n              orientation: _vm.orientation1,\n              container: _vm.container1,\n              annotations: _vm.annotations1\n            }\n          },\n          [\n            _c(\n              \"e-axes\",\n              [\n                _c(\n                  \"e-axis\",\n                  {\n                    attrs: {\n                      line: _vm.line1,\n                      labelStyle: _vm.labelStyle1,\n                      ranges: _vm.ranges1\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-pointers\",\n                      [\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            value: _vm.value1,\n                            height: _vm.height1,\n                            placement: _vm.placement1,\n                            width: _vm.width1,\n                            offset: _vm.offset1,\n                            markerType: _vm.markerType1\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { height: \"250px\" } },\n      [\n        _c(\n          \"ejs-lineargauge\",\n          {\n            attrs: {\n              align: \"center\",\n              id: \"container2\",\n              orientation: _vm.orientation2,\n              load: _vm.load2,\n              container: _vm.container2,\n              annotations: _vm.annotations2\n            }\n          },\n          [\n            _c(\n              \"e-axes\",\n              [\n                _c(\n                  \"e-axis\",\n                  {\n                    attrs: {\n                      line: _vm.line2,\n                      labelStyle: _vm.labelStyle2,\n                      ranges: _vm.ranges2\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-pointers\",\n                      [\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            value: _vm.value2,\n                            height: _vm.height2,\n                            placement: _vm.placement2,\n                            width: _vm.width2,\n                            offset: _vm.offset2,\n                            markerType: _vm.markerType2\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"row\", staticStyle: { height: \"250px\" } },\n      [\n        _c(\n          \"ejs-lineargauge\",\n          {\n            attrs: {\n              align: \"center\",\n              id: \"container3\",\n              orientation: _vm.orientation3,\n              load: _vm.load3,\n              container: _vm.container3,\n              annotations: _vm.annotations3\n            }\n          },\n          [\n            _c(\n              \"e-axes\",\n              [\n                _c(\n                  \"e-axis\",\n                  {\n                    attrs: {\n                      line: _vm.line3,\n                      maximum: _vm.maximum3,\n                      labelStyle: _vm.labelStyle3,\n                      ranges: _vm.ranges3\n                    }\n                  },\n                  [\n                    _c(\n                      \"e-pointers\",\n                      [\n                        _c(\"e-pointer\", {\n                          attrs: {\n                            value: _vm.value3,\n                            height: _vm.height3,\n                            placement: _vm.placement3,\n                            width: _vm.width3,\n                            offset: _vm.offset3,\n                            markerType: _vm.markerType3\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample illustrates exercise tracking of an athlete by using ranges, pointers, and annotation features available in linear gauge.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample demonstrates the exercise tracking using ranges, pointer and annotation features in linear gauge. We have rendered\\n        3 linear gauges in this sample for indicating running, cycling and walking.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about thermometer linear gauge can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/linear-gauge/data/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });