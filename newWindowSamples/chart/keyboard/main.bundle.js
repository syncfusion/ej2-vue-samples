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
/******/ 		"chart/keyboard/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/keyboard/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/keyboard/App.vue":
/*!****************************************!*\
  !*** ./Samples/chart/keyboard/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_16069344_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=16069344&scoped=true& */ \"./Samples/chart/keyboard/App.vue?vue&type=template&id=16069344&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/keyboard/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_16069344_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_16069344_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"16069344\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/keyboard/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/keyboard/App.vue?");

/***/ }),

/***/ "./Samples/chart/keyboard/App.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./Samples/chart/keyboard/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/keyboard/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/keyboard/App.vue?");

/***/ }),

/***/ "./Samples/chart/keyboard/App.vue?vue&type=template&id=16069344&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./Samples/chart/keyboard/App.vue?vue&type=template&id=16069344&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16069344_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=16069344&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/keyboard/App.vue?vue&type=template&id=16069344&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16069344_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_16069344_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/keyboard/App.vue?");

/***/ }),

/***/ "./Samples/chart/keyboard/main.js":
/*!****************************************!*\
  !*** ./Samples/chart/keyboard/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/keyboard/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/keyboard/main.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/keyboard/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/keyboard/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"ChartPlugin\"]);\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\").replace(/contrast/i, 'Contrast');\nlet FillColors=[] ;\nlet TextColor;\nif(theme === \"Material\"){\n    FillColors = [\"#00bdae\", \"#404041\", \"#357cd2\", \"#e56590\", \"#f8b883\", \"#70ad47\", \"#dd8abd\", \"#7f84e8\", \"#7bb4eb\",\"#ea7a57\", \"#404041\", \"#00bdae\"];\n    TextColor = '#000000';\n}\nelse if(theme === 'Fluent'){\n    FillColors = ['#1AC9E6', '#DA4CB2', '#EDBB40', '#AF4BCF', '#FF7266', '#1BD565', '#EE993D', '#5887FF', '#EC548D', '#7D39C0'];\n    TextColor = '#000000';\n}\nelse if(theme === 'FluentDark'){\n    FillColors =  ['#1AC9E6', '#DA4CB2', '#EDBB40', '#AF4BCF', '#FF7266', '#1BD565', '#EE993D', '#5887FF', '#EC548D', '#7D39C0'];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'Bootstrap5'){\n    FillColors =  ['#6355C7', '#FFB400', '#2196F5', '#F7523F', '#963C70', '#4BE0BC', '#FD7400', '#C9E422', '#DE3D8A', '#162F88'];\n    TextColor = '#000000';\n}\nelse if(theme === 'Bootstrap5Dark'){\n    FillColors =   ['#8F80F4', '#FFD46D', '#6CBDFF', '#FF7F71', '#FF6DB3', '#63F5D2', '#FCAA65', '#ECFF77', '#EF8EFF', '#5F82FD'];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'Tailwind'){\n    FillColors =  [\"#5A61F6\", \"#65A30D\", \"#334155\", \"#14B8A6\", \"#8B5CF6\", \"#0369A1\", \"#F97316\", \"#9333EA\", \"#F59E0B\", \"#15803D\"];\n    TextColor = '#000000';\n}\nelse if(theme === 'TailwindDark'){\n    FillColors =  [\"#8B5CF6\", \"#22D3EE\", \"#F87171\", \"#4ADE80\", \"#E879F9\", \"#FCD34D\", \"#F97316\", \"#2DD4BF\", \"#F472B6\", \"#10B981\"];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'MaterialDark'){\n    FillColors =  [\"#9ECB08\", \"#56AEFF\", \"#C57AFF\", \"#61EAA9\", \"#EBBB3E\", \"#F45C5C\", \"#8A77FF\", \"#63C7FF\", \"#FF84B0\",\"#F7C928\"];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'FabricDark'){\n    FillColors = [\"#4472C4\", \"#ED7D31\", \"#FFC000\", \"#70AD47\"];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'BootstrapDark'){\n    FillColors =  ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6','#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'Fabric'){\n    FillColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5', '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];\n    TextColor = '#000000';\n}\nelse if(theme === 'Bootstrap'){\n    FillColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6','#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\n    TextColor = '#000000';\n}\nelse if(theme === 'Bootstrap4'){\n    FillColors =  ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6','#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\n    TextColor = '#000000';\n}\nelse if(theme === 'HighContrast'){\n    FillColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF','#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];\n    TextColor = '#FFFFFF';\n}\nelse if(theme === 'Material3'){\n    FillColors = [\"#6355C7\", \"#00AEE0\", \"#FFB400\", \"#F7523F\", \"#963C70\", \"#FD7400\", \"#4BE0BC\", \"#2196F5\", \"#DE3D8A\", \"#162F88\"];\n    TextColor = \"#000000\";\n}\nelse if(theme === 'Material3Dark'){\n    FillColors = [\"#4EAAFF\", \"#FA4EAB\", \"#FFF500\", \"#17EA58\", \"#38FFE7\",\n        \"#FF9E45\", \"#B3F32F\", \"#B93CE4\", \"#FC5664\", \"#9B55FF\"];\n    TextColor = \"#FFFFFF\";\n}\nelse {\n    FillColors =  [\"#5ECB9B\", \"#A860F1\", \"#EBA844\", \"#557EF7\", \"#E9599B\", \"#BFC529\", \"#3BC6CF\", \"#7A68EC\", \"#74B706\",\"#EA6266\"];\n    TextColor = '#FFFFFF';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n                seriesData1: [\n                    { Month: 'Jan 15', Sales: 10 },\n                    { Month: 'Jan 31', Sales: 15 },\n                    { Month: 'Feb 15', Sales: 15 },\n                    { Month: 'Feb 28', Sales: 20 },\n                    { Month: 'March 15', Sales: 20 },\n                    { Month: 'March 31', Sales: 25 },\n                    { Month: 'March', Sales: null },\n                ],\n                seriesData2: [\n                    { Month: 'Apr 15', Sales: 36 },\n                    { Month: 'Apr 30', Sales: 48 },\n                    { Month: 'May 15', Sales: 43 },\n                    { Month: 'May 31', Sales: 59 },\n                    { Month: 'Jun 15', Sales: 35 },\n                    { Month: 'Jun 30', Sales: 50 },\n                    { Month: 'Jun', Sales: null },\n                ],\n                seriesData3: [\n                    { Month: 'Jul 15', Sales: 30 },\n                    { Month: 'Jul 31', Sales: 45 },\n                    { Month: 'Aug 15', Sales: 30 },\n                    { Month: 'Aug 31', Sales: 55 },\n                    { Month: 'Sep 15', Sales: 57 },\n                    { Month: 'Sep 30', Sales: 60 },\n                    { Month: 'Sep', Sales: null },\n                ],\n                seriesData4: [\n                    { Month: 'Oct 15', Sales: 60 },\n                    { Month: 'Oct 31', Sales: 70 },\n                    { Month: 'Nov 15', Sales: 70 },\n                    { Month: 'Nov 30', Sales: 70 },\n                    { Month: 'Dec 15', Sales: 90 },\n                    { Month: 'Dec 31', Sales: 100 },\n                ],\n     //Initializing Primary X Axis           \n      primaryXAxis: {\n            valueType: 'Category',\n            majorGridLines: {\n                width: 0\n            },\n            labelStyle: {\n                size: \"0px\"\n            },\n            majorTickLines: {\n                width: 0\n            },\n        },\n\n         \n      //Initializing Primary Y Axis\n          primaryYAxis: {\n            title: \"Sales in Percentage\",\n            labelFormat: \"{value}%\",\n            maximum: 120,\n            lineStyle: {\n                width: 0\n            },\n            majorTickLines: {\n                width: 0\n            },\n            stripLines: [\n                {\n                    isSegmented: true, start: 33, end: 35.5,  visible: true, segmentStart:0, segmentEnd:5, color:FillColors[0],\n                },\n                {\n                    isSegmented:true , start:39, end:39.2, visible:true, text:\"Jan - Mar\" , segmentStart:0, segmentEnd:5, color:\"transparent\", textStyle: {color: TextColor},\n                },\n                {\n                    isSegmented:true , start:65, end:67.5, visible:true, segmentStart:7, segmentEnd:12, color:FillColors[1],\n                },\n                {\n                    isSegmented:true , start:70, end:70.2, visible:true, text:\"Apr - Jun\" , segmentStart:7, segmentEnd:12, color:\"transparent\", textStyle: {color: TextColor},\n                },\n                {\n                    isSegmented:true , start:65, end:67.5, visible:true , segmentStart:14, segmentEnd:19, color:FillColors[2],\n                },\n                {\n                    isSegmented:true , start:70, end:70.2, visible:true, text:\"Jul - Sep\" , segmentStart:14, segmentEnd:19, color:\"transparent\", textStyle: {color: TextColor},\n                },\n                {\n                    isSegmented:true , start:104, end:106.5, visible:true, segmentStart:21, segmentEnd:26, color:FillColors[3],\n                },\n                {\n                    isSegmented:true , start:109, end:109.2, visible:true, text:\"Oct - Dec\" , segmentStart:21, segmentEnd:26, color:\"transparent\", textStyle: {color: TextColor},\n                }\n            ]\n        },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n        width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__[\"Browser\"].isDevice ? \"100%\" : \"75%\",\n        tooltip: { \n            enable: true\n         },\n      title: 'Quarterly Sales Chart',\n      legendSettings: {\n        mode: 'Range'\n    },\n     enableAnimation: false,\n     enableSideBySidePlacement: false,\n     selectionMode: 'Point',\n     selectionPattern: 'DiagonalForward',\n        zoomSettings: {\n           enableSelectionZooming: true,\n        },          \n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Chart\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"StripLine\"],_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Selection\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_1__[\"Zoom\"]]\n  },\n  methods: {\n    load: function(args =ILoadedEventArgs) {\n        let selectedTheme = location.hash.split('/')[1];\n        selectedTheme = selectedTheme ? selectedTheme : 'Material';\n        this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        },\n        legendClick : function(ILegendClickEventArgs) {\n            this.getStriplineValues(ILegendClickEventArgs.series.name);\n         },\n        getStriplineValues : function(legendClickedName) {\n          let chart =this.$refs.chart.ej2Instances;\n          let seriesIndex =0;\n          let Segments = [[0, 5], [7, 12], [14, 19], [21, 26]];\n          for (let i = 0; i < chart.series.length; i++) {\n            let name = chart.series[i].name; \n            let visible = name === legendClickedName ? !chart.series[i].visible: chart.series[i].visible;\n            if (seriesIndex > 3) {\n                seriesIndex = 0;\n            }\n            if (name == \"Quarter 1\") {\n                chart.primaryYAxis.stripLines[0].visible = chart.primaryYAxis.stripLines[1].visible = visible;\n                if (chart.primaryYAxis.stripLines[0].visible) {\n                    chart.primaryYAxis.stripLines[0].segmentStart = chart.primaryYAxis.stripLines[1].segmentStart = Segments[seriesIndex][0];\n                    chart.primaryYAxis.stripLines[0].segmentEnd  = chart.primaryYAxis.stripLines[1].segmentEnd = Segments[seriesIndex][1];\n                    seriesIndex++;\n                }\n            }\n            else if (name == \"Quarter 2\") {\n                chart.primaryYAxis.stripLines[2].visible = chart.primaryYAxis.stripLines[3].visible = visible;\n                if (chart.primaryYAxis.stripLines[2].visible) {\n                    chart.primaryYAxis.stripLines[2].segmentStart = chart.primaryYAxis.stripLines[3].segmentStart = Segments[seriesIndex][0];\n                    chart.primaryYAxis.stripLines[2].segmentEnd = chart.primaryYAxis.stripLines[3].segmentEnd = Segments[seriesIndex][1];\n                    seriesIndex++;\n                }\n            }\n            else if (name == \"Quarter 3\") {\n                chart.primaryYAxis.stripLines[4].visible = chart.primaryYAxis.stripLines[5].visible = visible;\n                if (chart.primaryYAxis.stripLines[4].visible) {\n                    chart.primaryYAxis.stripLines[4].segmentStart = chart.primaryYAxis.stripLines[5].segmentStart = Segments[seriesIndex][0];\n                    chart.primaryYAxis.stripLines[4].segmentEnd = chart.primaryYAxis.stripLines[5].segmentEnd = Segments[seriesIndex][1];\n                    seriesIndex++;\n                }\n            }\n            else {\n                chart.primaryYAxis.stripLines[6].visible = chart.primaryYAxis.stripLines[7].visible = visible;\n                if (chart.primaryYAxis.stripLines[6].visible) {\n                    chart.primaryYAxis.stripLines[6].segmentStart = chart.primaryYAxis.stripLines[7].segmentStart = Segments[seriesIndex][0];\n                    chart.primaryYAxis.stripLines[6].segmentEnd = chart.primaryYAxis.stripLines[7].segmentEnd = Segments[seriesIndex][1];\n                    seriesIndex++;\n                }\n            }\n        }\n        this.$refs.chart.refreshLiveData();\n      }\n    },\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/keyboard/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/keyboard/App.vue?vue&type=template&id=16069344&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/keyboard/App.vue?vue&type=template&id=16069344&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            ref: \"chart\",\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"keyboardcontainer\",\n              title: _vm.title,\n              width: _vm.width,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              chartArea: _vm.chartArea,\n              tooltip: _vm.tooltip,\n              legendSettings: _vm.legendSettings,\n              enableAnimation: _vm.enableAnimation,\n              enableSideBySidePlacement: _vm.enableSideBySidePlacement,\n              zoomSettings: _vm.zoomSettings,\n              selectionMode: _vm.selectionMode,\n              selectionPattern: _vm.selectionPattern,\n              legendClick: _vm.legendClick,\n              getStriplineValues: _vm.getStriplineValues,\n            },\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData1,\n                    type: \"Column\",\n                    xName: \"Month\",\n                    yName: \"Sales\",\n                    name: \"Quarter 1\",\n                    width: \"2\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData2,\n                    type: \"Column\",\n                    xName: \"Month\",\n                    yName: \"Sales\",\n                    name: \"Quarter 2\",\n                    width: \"2\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData3,\n                    type: \"Column\",\n                    xName: \"Month\",\n                    yName: \"Sales\",\n                    name: \"Quarter 3\",\n                    width: \"2\",\n                  },\n                }),\n                _vm._v(\" \"),\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData4,\n                    type: \"Column\",\n                    xName: \"Month\",\n                    yName: \"Sales\",\n                    name: \"Quarter 4\",\n                    width: \"2\",\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Keyboard shortcuts can be used to interact with chart functionality. In the example below, various key combinations can be used to interact with the chart.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"i\", [\n        _vm._v(\n          \"The key combinations listed below can be used in the chart to initiate various actions.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"FOCUS ELEMENTS\")]),\n          _vm._v(\" \"),\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Alt\")]),\n                _vm._v(\" + \"),\n                _c(\"kbd\", [_vm._v(\"J\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Moves the focus to the chart element.\")]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Tab\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\" - Moves the focus to the next element in the chart.\"),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Shift\")]),\n                _vm._v(\" + \"),\n                _c(\"kbd\", [_vm._v(\"Tab\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Moves the focus to the previous element in the chart.\"\n                ),\n              ]),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"SERIES\")]),\n          _vm._v(\" \"),\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Down arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Moves the focus to the data point left side from the selected point.\"\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Up arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Moves the focus to the data point right side from the selected point.\"\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Left arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\" - Moves the focus to the next series in our chart.\"),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Right arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Moves the focus to the previous series in our chart.\"\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"ESC\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Cancel the tooltip for the data point.\")]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Enter\")]),\n                _vm._v(\"/\"),\n                _c(\"kbd\", [_vm._v(\"Space\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Selects the data point in the series.\")]),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"Legend \")]),\n          _vm._v(\" \"),\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Down\")]),\n                _vm._v(\"/\"),\n                _c(\"kbd\", [_vm._v(\"Left arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Moves the focus to the legend left side from the selected legend.\"\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Up\")]),\n                _vm._v(\"/\"),\n                _c(\"kbd\", [_vm._v(\"Right arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Moves the focus to the legend right side from the selected legend.\"\n                ),\n              ]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Enter\")]),\n                _vm._v(\"/\"),\n                _c(\"kbd\", [_vm._v(\"Space\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [\n                _vm._v(\n                  \" - Toggles the visibility of the corresponding series.\"\n                ),\n              ]),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"ZOOMING AND PANNING\")]),\n          _vm._v(\" \"),\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Ctrl\")]),\n                _vm._v(\" + \"),\n                _c(\"kbd\", [_vm._v(\"+\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Zoom in the chart.\")]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Ctrl\")]),\n                _vm._v(\" + \"),\n                _c(\"kbd\", [_vm._v(\"-\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Zoom out the chart.\")]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Down\")]),\n                _vm._v(\"/\"),\n                _c(\"kbd\", [_vm._v(\"Up arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Pans the chart vertically.\")]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Left\")]),\n                _vm._v(\"/\"),\n                _c(\"kbd\", [_vm._v(\"Right arrow\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Pans the chart horizontally.\")]),\n            ]),\n            _vm._v(\" \"),\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"R\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Reset the zoomed chart.\")]),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"PRINT\")]),\n          _vm._v(\" \"),\n          _c(\"ul\", [\n            _c(\"li\", [\n              _c(\"span\", { staticClass: \"key-class\" }, [\n                _c(\"kbd\", [_vm._v(\"Ctrl\")]),\n                _vm._v(\" + \"),\n                _c(\"kbd\", [_vm._v(\"P\")]),\n              ]),\n              _vm._v(\" \"),\n              _c(\"span\", [_vm._v(\" - Prints the chart.\")]),\n            ]),\n          ]),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/keyboard/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });