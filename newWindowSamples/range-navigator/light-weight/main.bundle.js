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
/******/ 		"range-navigator/light-weight/main": 0
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
/******/ 	deferredModules.push(["./Samples/range-navigator/light-weight/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/range-navigator/light-weight/App.vue":
/*!******************************************************!*\
  !*** ./Samples/range-navigator/light-weight/App.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_0ad3c1bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0ad3c1bd&scoped=true& */ \"./Samples/range-navigator/light-weight/App.vue?vue&type=template&id=0ad3c1bd&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/range-navigator/light-weight/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_0ad3c1bd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css& */ \"./Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_0ad3c1bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_0ad3c1bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0ad3c1bd\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/range-navigator/light-weight/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/light-weight/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./Samples/range-navigator/light-weight/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/light-weight/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ad3c1bd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ad3c1bd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ad3c1bd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ad3c1bd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_0ad3c1bd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/light-weight/App.vue?vue&type=template&id=0ad3c1bd&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./Samples/range-navigator/light-weight/App.vue?vue&type=template&id=0ad3c1bd&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ad3c1bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0ad3c1bd&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/light-weight/App.vue?vue&type=template&id=0ad3c1bd&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ad3c1bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ad3c1bd_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?");

/***/ }),

/***/ "./Samples/range-navigator/light-weight/data-service.ts":
/*!**************************************************************!*\
  !*** ./Samples/range-navigator/light-weight/data-service.ts ***!
  \**************************************************************/
/*! exports provided: GetDateTimeData, getRandomInt, GetNumericData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetDateTimeData\", function() { return GetDateTimeData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomInt\", function() { return getRandomInt; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GetNumericData\", function() { return GetNumericData; });\n/**\n * Chart data service\n */\nfunction GetDateTimeData(start, end, min, max, inc) {\n    var series1 = [];\n    var point = {};\n    var value = 100;\n    var date;\n    inc = inc ? inc : 1;\n    for (var i = 0; start <= end; i += inc) {\n        date = start.getTime();\n        if (min || max) {\n            value = getRandomInt(min, max);\n        }\n        else {\n            if (Math.random() > .5) {\n                value += Math.random();\n            }\n            else {\n                value -= Math.random();\n            }\n        }\n        point = { x: new Date(date), y: value };\n        new Date(start.setDate(start.getDate() + 1));\n        series1.push(point);\n    }\n    return series1;\n}\nfunction getRandomInt(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min;\n}\nfunction GetNumericData(start, end, min, max) {\n    var series1 = [];\n    var point = {};\n    var value = 30;\n    for (var i = start; i <= end; i++) {\n        if (min || max) {\n            value = getRandomInt(min, max);\n        }\n        else {\n            if (Math.random() > .5) {\n                value += Math.random();\n            }\n            else {\n                value -= Math.random();\n            }\n        }\n        point = { x: i, y: Math.round(value) };\n        series1.push(point);\n    }\n    return series1;\n}\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/data-service.ts?");

/***/ }),

/***/ "./Samples/range-navigator/light-weight/main.js":
/*!******************************************************!*\
  !*** ./Samples/range-navigator/light-weight/main.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/range-navigator/light-weight/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-0ad3c1bd] {\\n  padding: 0px !important;\\n}\\n#container[data-v-0ad3c1bd] {\\n  transform: translateY(25%);\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/range-navigator/light-weight/App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB;AACD;EACE,2BAA2B;CAC5B\",\"file\":\"App.vue?vue&type=style&index=0&id=0ad3c1bd&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-0ad3c1bd] {\\n  padding: 0px !important;\\n}\\n#container[data-v-0ad3c1bd] {\\n  transform: translateY(25%);\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/light-weight/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/light-weight/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-service */ \"./Samples/range-navigator/light-weight/data-service.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"RangeNavigatorPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      valueType: \"DateTime\",\n      intervalType: \"Months\",\n      labelFormat: \"MMM\",\n      value: [new Date('2018-06-01'), new Date('2018-07-01')],\n      dataSource: Object(_data_service__WEBPACK_IMPORTED_MODULE_3__[\"GetDateTimeData\"])(new Date('2018-01-01'), new Date('2019-01-01')),\n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"80%\",\n      navigatorStyleSettings: {\n        thumb: {\n          type: \"Rectangle\"\n        }\n      },\n      theme: theme\n    };\n  },\n  provide: {\n    rangeNavigator: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"]]\n  },\n  methods: {\n   changed: function(args) {\n      let currentDate = new Date(+args.start);\n      let workingDaysCount = 0;\n      let holidaysDaysCount = 0;\n      while (currentDate <= new Date(+args.end)) {\n        if (currentDate.getDay() > 0 && currentDate.getDay() <= 5) {\n          workingDaysCount++;\n        } else {\n          holidaysDaysCount++;\n        }\n        currentDate.setDate(currentDate.getDate() + 1);\n      }\n      document.getElementById(\"workingcount\").innerHTML = \" \" + workingDaysCount;\n      document.getElementById(\"weekendcount\").innerHTML = \" \" + holidaysDaysCount;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/range-navigator/light-weight/App.vue?vue&type=template&id=0ad3c1bd&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/range-navigator/light-weight/App.vue?vue&type=template&id=0ad3c1bd&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section\",attrs:{\"align\":\"center\"}},[_c('div',{attrs:{\"id\":\"containerLW\"}},[_c('div',{staticClass:\"row\",attrs:{\"align\":\"center\"}},[_c('h4',{staticStyle:{\"font-family\":\"Segoe UI\",\"font-weight\":\"500\",\"font-style\":\"normal\",\"font-size\":\"15px\"},attrs:{\"id\":\"days\",\"align\":\"center\"}},[_vm._v(\"Calculate the Business and Weekend days in a period\")]),_vm._v(\" \"),_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-rangenavigator',{staticStyle:{\"display\":\"block\"},attrs:{\"align\":\"center\",\"id\":\"datetimeLW\",\"valueType\":_vm.valueType,\"intervalType\":_vm.intervalType,\"value\":_vm.value,\"labelFormat\":_vm.labelFormat,\"width\":_vm.width,\"dataSource\":_vm.dataSource,\"animationDuration\":\"500\",\"xName\":\"x\",\"yName\":\"y\",\"changed\":_vm.changed,\"theme\":_vm.theme,\"navigatorStyleSettings\":_vm.navigatorStyleSettings}})],1),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_vm._m(0)])])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticStyle:{\"font-family\":\"Segoe UI\",\"font-weight\":\"500\",\"font-style\":\"normal\",\"font-size\":\"15px\"}},[_c('tbody',[_c('tr',[_c('td',{attrs:{\"id\":\"working\"}},[_c('table',[_c('tbody',[_c('tr',[_c('td',{staticStyle:{\"width\":\"150px\"},attrs:{\"id\":\"working\"}},[_vm._v(\"Total Business Days:\")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"25px\"},attrs:{\"id\":\"workingcount\"}})])])])]),_vm._v(\" \"),_c('td',{staticStyle:{\"padding-left\":\"20px\"},attrs:{\"id\":\"holiday\"}},[_c('table',[_c('tbody',[_c('tr',[_c('td',{staticStyle:{\"width\":\"150px\"},attrs:{\"id\":\"weekend\"}},[_vm._v(\"Total Weekend Days: \")]),_vm._v(\" \"),_c('td',{staticStyle:{\"width\":\"25px\"},attrs:{\"id\":\"weekendcount\"}})])])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n        This sample represents the total number of business and weekend days in a selected period.\\n    \")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        In this example, you can see how to render a light-weight range navigator without series. You can use \"),_c('code',[_vm._v(\"width\")]),_vm._v(\", \"),_c('code',[_vm._v(\"height\")]),_vm._v(\", \"),_c('code',[_vm._v(\"fill\")]),_vm._v(\" and \"),_c('code',[_vm._v(\"border\")]),_vm._v(\" properties to customize the \"),_c('code',[_vm._v(\"thumb\")]),_vm._v(\" in range navigator. You can also change the type of the thumb using \"),_c('code',[_vm._v(\"type\")]),_vm._v(\" property.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',{staticStyle:{\"font-weight\":\"500\"}},[_vm._v(\"Injecting Module\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n       The range navigator component features are segregated into individual feature-wise modules. To use date-time axis, inject the \"),_c('code',[_vm._v(\"DateTime\")]),_vm._v(\" module in the \"),_c('code',[_vm._v(\"provide\")]),_vm._v(\" section.\\n    \")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/range-navigator/light-weight/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });