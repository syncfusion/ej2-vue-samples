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
/******/ 		"chart/area-segments/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/area-segments/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/area-segments/App.vue":
/*!*********************************************!*\
  !*** ./Samples/chart/area-segments/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_dceec4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=dceec4c6&scoped=true& */ \"./Samples/chart/area-segments/App.vue?vue&type=template&id=dceec4c6&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/area-segments/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_dceec4c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css& */ \"./Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_dceec4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_dceec4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"dceec4c6\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/area-segments/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?");

/***/ }),

/***/ "./Samples/chart/area-segments/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/chart/area-segments/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/area-segments/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?");

/***/ }),

/***/ "./Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dceec4c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dceec4c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dceec4c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dceec4c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_dceec4c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?");

/***/ }),

/***/ "./Samples/chart/area-segments/App.vue?vue&type=template&id=dceec4c6&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/chart/area-segments/App.vue?vue&type=template&id=dceec4c6&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dceec4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=dceec4c6&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/area-segments/App.vue?vue&type=template&id=dceec4c6&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dceec4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_dceec4c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?");

/***/ }),

/***/ "./Samples/chart/area-segments/main.js":
/*!*********************************************!*\
  !*** ./Samples/chart/area-segments/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/area-segments/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#winter stop[data-v-dceec4c6] {\\n        stop-color: #4ca1af;\\n}\\n#winter stop[offset=\\\"0\\\"][data-v-dceec4c6] {\\n        stop-color: #c4e0e5;\\n}\\n#winter stop[offset=\\\"1\\\"][data-v-dceec4c6] {\\n        stop-color: #4ca1af;\\n}\\n#summer stop[data-v-dceec4c6] {\\n        stop-color: #ffa751;\\n}\\n#summer stop[offset=\\\"0\\\"][data-v-dceec4c6] {\\n        stop-color: #ffe259;\\n}\\n#summer stop[offset=\\\"1\\\"][data-v-dceec4c6] {\\n        stop-color: #ffa751;\\n}\\n#spring stop[data-v-dceec4c6] {\\n        stop-color: #1d976c;\\n}\\n#spring stop[offset=\\\"0\\\"][data-v-dceec4c6] {\\n        stop-color: #93f9b9;\\n}\\n#spring stop[offset=\\\"1\\\"][data-v-dceec4c6] {\\n        stop-color: #1d976c;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-ERWTBVX257KMHA3FGSXKW75QILS7TS6MJMFB2ZIYAQHFLVICNAZQ/Samples/chart/area-segments/App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B;AACD;QACQ,oBAAoB;CAC3B\",\"file\":\"App.vue?vue&type=style&index=0&id=dceec4c6&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#winter stop[data-v-dceec4c6] {\\n        stop-color: #4ca1af;\\n}\\n#winter stop[offset=\\\"0\\\"][data-v-dceec4c6] {\\n        stop-color: #c4e0e5;\\n}\\n#winter stop[offset=\\\"1\\\"][data-v-dceec4c6] {\\n        stop-color: #4ca1af;\\n}\\n#summer stop[data-v-dceec4c6] {\\n        stop-color: #ffa751;\\n}\\n#summer stop[offset=\\\"0\\\"][data-v-dceec4c6] {\\n        stop-color: #ffe259;\\n}\\n#summer stop[offset=\\\"1\\\"][data-v-dceec4c6] {\\n        stop-color: #ffa751;\\n}\\n#spring stop[data-v-dceec4c6] {\\n        stop-color: #1d976c;\\n}\\n#spring stop[offset=\\\"0\\\"][data-v-dceec4c6] {\\n        stop-color: #93f9b9;\\n}\\n#spring stop[offset=\\\"1\\\"][data-v-dceec4c6] {\\n        stop-color: #1d976c;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/area-segments/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/area-segments/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartPlugin\"]);\n\n   let dataValues= [];\n  [150, 71.5, 106.4, 100.25, 70.0, 106.0, 85.6, 78.5, 76.4, 86.1, 155.6, 160.4].map(function(value, index) {\n            dataValues.push({ XValue: new Date(2016, index, 1), YValue: value });\n        });\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        annotationTemplate: function () {\n                    return {\n                        template: vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].component('annotationTemplate', {\n                            template: `<div style='width:80px; padding: 5px;'> <table style='width: 100%'>\n                                        <tr><td><div style='width: 10px; height: 10px;background:linear-gradient(#4ca1af, #c4e0e5);border-radius: 15px;'></div>\n                                        </td><td style='padding-left: 5px;'>Winter</td></tr>\n                                        <tr><td><div style='width: 10px; height: 10px; background:linear-gradient(#ffa751, #ffe259);border-radius: 15px;'></div>\n                                        </td><td style='padding-left: 5px;'>Summer</td></tr><tr><td>\n                                        <div style='width: 10px; height: 10px; background:linear-gradient(#1d976c, #93f9b9);border-radius: 15px;'></div>\n                                        </td><td style='padding-left: 5px;'>Spring</td></tr></table></div>`,\n                            data: function () { return { data: {} }; }\n                        })\n                    }\n                },\n        theme: theme,\n         seriesData: dataValues,\n\n     \n    //Initializing Primary X Axis\n    primaryXAxis: {\n        valueType: 'DateTime',\n        labelFormat: 'MMM',\n        intervalType: 'Months',\n        edgeLabelPlacement: 'Shift',\n        majorGridLines: { width: 0 }\n    },\n    //Initializing Primary Y Axis\n    primaryYAxis: {\n        labelFormat: '${value}K',\n        rangePadding: 'None',\n        minimum: 0,\n        maximum: 200,\n        interval: 50,\n        lineStyle: { width: 0 },\n        majorTickLines: { width: 0 },\n        minorTickLines: { width: 0 }\n    },\n    chartArea: {\n        border: {\n            width: 0\n        }\n    },\n    width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '60%',\n    legend: { visible: false },\n    segments: [{\n        value: new Date(2016, 4, 1),\n        color: 'url(#winter)'\n    }, {\n        value: new Date(2016, 8, 1),\n        color: 'url(#summer)'\n    }, {\n        color: 'url(#spring)'\n    }],\n    tooltip: {\n        enable: true\n    },\n    content: \"<div style='width:80px; padding: 5px;'> <table style='width: 100%'>\" +\n        \"<tr><td><div style='width: 10px; height: 10px;background:linear-gradient(#4ca1af, #c4e0e5);border-radius: 15px;'></div>\" +\n        \"</td><td style='padding-left: 5px;'>Winter</td></tr>\" +\n        \"<tr><td><div style='width: 10px; height: 10px; background:linear-gradient(#ffa751, #ffe259);border-radius: 15px;'></div>\" +\n        \"</td><td style='padding-left: 5px;'>Summer</td></tr><tr><td>\" +\n        \"<div style='width: 10px; height: 10px; background:linear-gradient(#1d976c, #93f9b9);border-radius: 15px;'></div>\" +\n        \"</td><td style='padding-left: 5px;'>Spring</td></tr></table></div>\",\n    title: 'Organic Revenue in US - 2016'\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"DateTime\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"ChartAnnotation\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_2__[\"MultiColoredAreaSeries\"]]\n  },\n  methods: {\n   },\n\n \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/area-segments/App.vue?vue&type=template&id=dceec4c6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/area-segments/App.vue?vue&type=template&id=dceec4c6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              tooltip: _vm.tooltip,\n              chartArea: _vm.chartArea,\n              width: _vm.width,\n              legendSettings: _vm.legend\n            }\n          },\n          [\n            _c(\n              \"e-annotations\",\n              [\n                _c(\"e-annotation\", {\n                  attrs: {\n                    content: _vm.annotationTemplate,\n                    x: \"90%\",\n                    y: \"12%\",\n                    region: \"Series\"\n                  }\n                })\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    type: \"MultiColoredArea\",\n                    xName: \"XValue\",\n                    segmentAxis: \"X\",\n                    yName: \"YValue\",\n                    name: \"US\",\n                    width: \"2\",\n                    segments: _vm.segments\n                  }\n                })\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _c(\"svg\", { staticStyle: { height: \"0\" } }, [\n      _c(\n        \"defs\",\n        [\n          _c(\n            \"linearGradient\",\n            { attrs: { id: \"winter\", x1: \"0\", x2: \"0\", y1: \"0\", y2: \"1\" } },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            { attrs: { id: \"summer\", x1: \"0\", x2: \"0\", y1: \"0\", y2: \"1\" } },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } })\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"linearGradient\",\n            { attrs: { id: \"spring\", x1: \"0\", x2: \"0\", y1: \"0\", y2: \"1\" } },\n            [\n              _c(\"stop\", { attrs: { offset: \"0\" } }),\n              _vm._v(\" \"),\n              _c(\"stop\", { attrs: { offset: \"1\" } })\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        This sample visualizes the organic revenue data with multi colored area series in the chart. \\n        Data points are enhanced with segments and tooltip.\\n    \"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to render and configure the area type charts. Similar to line type series, but the area get closed and filled with series color.\\n        You can use \"\n        ),\n        _c(\"code\", [_vm._v(\"border\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"fill\")]),\n        _vm._v(\" properties to customize the area. \"),\n        _c(\"code\", [_vm._v(\"marker\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"dataLabel\")]),\n        _vm._v(\n          \" are used to represent individual data and its value.\\n        Legend is enabled in this example with series type shape.\\n     \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", { staticStyle: { \"font-weight\": \"500\" } }, [\n        _vm._v(\"Injecting Module\")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Chart component features are segregated into individual feature-wise modules. To use area series, we need to inject\\n            \"\n        ),\n        _c(\"code\", [_vm._v(\"AreaSeries\")]),\n        _vm._v(\" module using \"),\n        _c(\"code\", [_vm._v(\"provide: { chart: [AreaSeries] }\")]),\n        _vm._v(\" method.\\n        \")\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            More information on the area series can be found in this\\n            \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"http://ej2.syncfusion.com/documentation/chart/api-series.html#type-chartseriestype\"\n            }\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n        \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/area-segments/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });