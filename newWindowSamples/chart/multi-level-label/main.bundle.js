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
/******/ 		"chart/multi-level-label/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/multi-level-label/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/multi-level-label/App.vue":
/*!*************************************************!*\
  !*** ./Samples/chart/multi-level-label/App.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5ec2b114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5ec2b114&scoped=true& */ \"./Samples/chart/multi-level-label/App.vue?vue&type=template&id=5ec2b114&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/multi-level-label/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5ec2b114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css& */ \"./Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5ec2b114_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5ec2b114_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5ec2b114\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/multi-level-label/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?");

/***/ }),

/***/ "./Samples/chart/multi-level-label/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./Samples/chart/multi-level-label/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/multi-level-label/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?");

/***/ }),

/***/ "./Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5ec2b114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5ec2b114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5ec2b114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5ec2b114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5ec2b114_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?");

/***/ }),

/***/ "./Samples/chart/multi-level-label/App.vue?vue&type=template&id=5ec2b114&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./Samples/chart/multi-level-label/App.vue?vue&type=template&id=5ec2b114&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5ec2b114_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5ec2b114&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/multi-level-label/App.vue?vue&type=template&id=5ec2b114&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5ec2b114_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5ec2b114_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?");

/***/ }),

/***/ "./Samples/chart/multi-level-label/main.js":
/*!*************************************************!*\
  !*** ./Samples/chart/multi-level-label/main.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/multi-level-label/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/main.js?");

/***/ }),

/***/ "./Samples/chart/multi-level-label/theme-color.ts":
/*!********************************************************!*\
  !*** ./Samples/chart/multi-level-label/theme-color.ts ***!
  \********************************************************/
/*! exports provided: materialColors, fabricColors, bootstrapColors, highContrastColors, fluentColors, fluentDarkColors, bubblePointMaterialColors, bubblePointMaterialDarkColors, bubblePointFabricColors, bubblePointBootstrapColors, bubblePointHighContrastColors, bubblePointBootstrap5Colors, bubblePointBootstrap5DarkColors, bubblePointFluentColors, bubblePointFluentDarkColors, bubblePointTailwindColors, bubblePointTailwindDarkColors, pointMaterialColors, pointMaterialDarkColors, pointFabricColors, pointBootstrapColors, pointHighContrastColors, pointBootstrap5Colors, pointBootstrap5DarkColors, pointFluentColors, pointFluentDarkColors, pointTailwindColors, pointTailwindDarkColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialColors\", function() { return materialColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fabricColors\", function() { return fabricColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrapColors\", function() { return bootstrapColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highContrastColors\", function() { return highContrastColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fluentColors\", function() { return fluentColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fluentDarkColors\", function() { return fluentDarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointMaterialColors\", function() { return bubblePointMaterialColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointMaterialDarkColors\", function() { return bubblePointMaterialDarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointFabricColors\", function() { return bubblePointFabricColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointBootstrapColors\", function() { return bubblePointBootstrapColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointHighContrastColors\", function() { return bubblePointHighContrastColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointBootstrap5Colors\", function() { return bubblePointBootstrap5Colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointBootstrap5DarkColors\", function() { return bubblePointBootstrap5DarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointFluentColors\", function() { return bubblePointFluentColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointFluentDarkColors\", function() { return bubblePointFluentDarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointTailwindColors\", function() { return bubblePointTailwindColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bubblePointTailwindDarkColors\", function() { return bubblePointTailwindDarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointMaterialColors\", function() { return pointMaterialColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointMaterialDarkColors\", function() { return pointMaterialDarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointFabricColors\", function() { return pointFabricColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointBootstrapColors\", function() { return pointBootstrapColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointHighContrastColors\", function() { return pointHighContrastColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointBootstrap5Colors\", function() { return pointBootstrap5Colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointBootstrap5DarkColors\", function() { return pointBootstrap5DarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointFluentColors\", function() { return pointFluentColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointFluentDarkColors\", function() { return pointFluentDarkColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointTailwindColors\", function() { return pointTailwindColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointTailwindDarkColors\", function() { return pointTailwindDarkColors; });\n/**\n * Initialize the Theme colors\n */\nvar materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',\n    '#ea7a57', '#404041', '#00bdae'];\nvar fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',\n    '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];\nvar bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',\n    '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\nvar highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',\n    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];\nvar fluentColors = ['#614570', '#4C6FB1', '#CC6952', '#3F579A', '#4EA09B', '#6E7A89', '#D4515C', '#E6AF5D', '#639751',\n    '#9D4D69'];\nvar fluentDarkColors = ['#8AB113', '#2A72D5', '#43B786', '#584EC6', '#E85F9C', '#6E7A89', '#EA6266', '#EBA844', '#26BC7A',\n    '#BC4870'];\nvar bubblePointMaterialColors = ['rgba(0, 189, 174, 0.5)', \"rgba(64, 64, 65, 0.5)\", \"rgba(53, 124, 210, 0.5)\", \"rgba(229, 101, 144, 0.5)\", \"rgba(248, 184, 131, 0.5)\", \"rgba(112, 173, 71, 0.5)\", \"rgba(221, 138, 189, 0.5)\",\n    \"rgba(127, 132, 232, 0.5)\", \"rgba(123, 180, 235, 0.5)\", \"rgba(234, 122, 87, 0.5)\", \"rgba(64, 64, 65, 0.5)\", \"rgba(0, 189, 174, 0.5)\"];\nvar bubblePointMaterialDarkColors = [\"rgba(158, 203, 8, 0.5)\", \"rgba(86, 174, 255, 0.5)\", \"rgba(197, 122, 255, 0.5)\", \"rgba(97, 234, 169, 0.5)\", \"rgba(235, 187, 62, 0.5)\", \"rgba(244, 92, 92, 0.5)\", \"rgba(138, 119, 255, 0.5)\",\n    \"rgba(99, 199, 255, 0.5)\", \"rgba(255, 132, 176, 0.5)\", \"rgba(247, 201, 40, 0.5)\"];\nvar bubblePointFabricColors = [\"rgba(68, 114, 196, 0.5)\", \"rgba(237, 125, 49, 0.5)\", \"rgba(255, 192, 0, 0.5)\", \"rgba(112, 173, 71, 0.5)\", \"rgba(91, 155, 213, 0.5)\", \"rgba(193, 193, 193, 0.5)\", \"rgba(111, 111, 226, 0.5)\",\n    \"rgba(226, 105, 174, 0.5)\", \"rgba(158, 72, 14, 0.5)\", \"rgba(153, 115, 0, 0.5)\", \"rgba(68, 114, 196, 0.5)\", \"rgba(112, 173, 71, 0.5)\", \"rgba(255, 192, 0, 0.5)\", \"rgba(237, 125, 49, 0.5)\"];\nvar bubblePointBootstrapColors = [\"rgba(161, 110, 229, 0.5)\", \"rgba(247, 206, 105, 0.5)\", \"rgba(85, 165, 194, 0.5)\", \"rgba(125, 223, 30, 0.5)\", \"rgba(255, 110, 166, 0.5)\", \"rgba(121, 83, 172, 0.5)\",\n    \"rgba(185, 155, 79, 0.5)\", \"rgba(64, 124, 146, 0.5)\", \"rgba(94, 167, 22, 0.5)\", \"rgba(185, 28, 82, 0.5)\"];\nvar bubblePointHighContrastColors = [\"rgba(121, 236, 228, 0.5)\", \"rgba(233, 130, 114, 0.5)\", \"rgba(223, 230, 182, 0.5)\", \"rgba(198, 231, 115, 0.5)\", \"rgba(186, 152, 255, 0.5)\", \"rgba(250, 131, 195, 0.5)\", \"rgba(0, 194, 122, 0.5)\",\n    \"rgba(67, 172, 239, 0.5)\", \"rgba(214, 129, 239, 0.5)\", \"rgba(216, 188, 110, 0.5)\"];\nvar bubblePointBootstrap5Colors = [\"rgba(38, 46, 11, 0.5)\", \"rgba(102, 142, 31, 0.5)\", \"rgba(175, 110, 16, 0.5)\", \"rgba(134, 44, 11, 0.5)\", \"rgba(31, 45, 80, 0.5)\", \"rgba(100, 104, 11, 0.5)\", \"rgba(49, 21, 8, 0.5)\",\n    \"rgba(76, 76, 129, 0.5)\", \"rgba(12, 125, 160, 0.5)\", \"rgba(134, 44, 11, 0.5)\"];\nvar bubblePointBootstrap5DarkColors = [\"rgba(94, 203, 155, 0.5)\", \"rgba(168, 96, 241, 0.5)\", \"rgba(235, 168, 68, 0.5)\", \"rgba(85, 126, 247, 0.5)\", \"rgba(233, 89, 155, 0.5)\", \"rgba(191, 197, 41, 0.5)\", \"rgba(59, 198, 207, 0.5)\",\n    \"rgba(122, 104, 236, 0.5)\", \"rgba(116, 183, 6, 0.5)\", \"rgba(234, 98, 102, 0.5)\"];\nvar bubblePointFluentColors = [\"rgba(97, 69, 112, 0.5)\", \"rgba(76, 111, 177, 0.5)\", \"rgba(204, 105, 82, 0.5)\", \"rgba(63, 87, 154, 0.5)\", \"rgba(78, 160, 155, 0.5)\", \"rgba(110, 122, 137, 0.5)\", \"rgba(212, 81, 92, 0.5)\",\n    \"rgba(230, 175, 93, 0.5)\", \"rgba(99, 151, 81, 0.5)\", \"rgba(157, 77, 105, 0.5)\"];\nvar bubblePointFluentDarkColors = [\"rgba(138, 177, 19, 0.5)\", \"rgba(42, 114, 213, 0.5)\", \"rgba(67, 183, 134, 0.5)\", \"rgba(88, 78, 198, 0.5)\", \"rgba(232, 95, 156, 0.5)\", \"rgba(110, 122, 137, 0.5)\", \"rgba(234, 98, 102, 0.5)\",\n    \"rgba(235, 168, 68, 0.5)\", \"rgba(38, 188, 122, 0.5)\", \"rgba(188, 72, 112, 0.5)\"];\nvar bubblePointTailwindColors = [\"rgba(90, 97, 246, 0.5)\", \"rgba(101, 163, 13, 0.5)\", \"rgba(51, 65, 85, 0.5)\", \"rgba(20, 184, 166, 0.5)\", \"rgba(139, 92, 246, 0.5)\", \"rgba(3, 105, 161, 0.5)\", \"rgba(249, 115, 22, 0.5)\",\n    \"rgba(147, 51, 234, 0.5)\", \"rgba(245, 158, 11, 0.5)\", \"rgba(21, 128, 61, 0.5)\"];\nvar bubblePointTailwindDarkColors = [\"rgba(139, 92, 246, 0.5)\", \"rgba(34, 211, 238, 0.5)\", \"rgba(248, 113, 113, 0.5)\", \"rgba(74, 222, 128, 0.5)\", \"rgba(232, 121, 249, 0.5)\", \"rgba(252, 211, 77, 0.5)\", \"rgba(249, 115, 22, 0.5)\",\n    \"rgba(45, 212, 191, 0.5)\", \"rgba(244, 114, 182, 0.5)\", \"rgba(16, 185, 129, 0.5)\"];\nvar pointMaterialColors = [\"#00bdae\", \"#404041\", \"#357cd2\", \"#e56590\", \"#f8b883\", \"#70ad47\", \"#dd8abd\", \"#7f84e8\", \"#7bb4eb\",\n    \"#ea7a57\", \"#404041\", \"#00bdae\"];\nvar pointMaterialDarkColors = [\"#9ECB08\", \"#56AEFF\", \"#C57AFF\", \"#61EAA9\", \"#EBBB3E\", \"#F45C5C\", \"#8A77FF\", \"#63C7FF\", \"#FF84B0\",\n    \"#F7C928\"];\nvar pointFabricColors = [\"#4472c4\", \"#ed7d31\", \"#ffc000\", \"#70ad47\", \"#5b9bd5\", \"#c1c1c1\", \"#6f6fe2\", \"#e269ae\", \"#9e480e\",\n    \"#997300\", \"#4472c4\", \"#70ad47\", \"#ffc000\", \"#ed7d31\"];\nvar pointBootstrapColors = [\"#a16ee5\", \"#f7ce69\", \"#55a5c2\", \"#7ddf1e\", \"#ff6ea6\", \"#7953ac\", \"#b99b4f\", \"#407c92\", \"#5ea716\",\n    \"#b91c52\"];\nvar pointHighContrastColors = [\"#79ECE4\", \"#E98272\", \"#DFE6B6\", \"#C6E773\", \"#BA98FF\", \"#FA83C3\", \"#00C27A\", \"#43ACEF\", \"#D681EF\",\n    \"#D8BC6E\"];\nvar pointBootstrap5Colors = [\"#262E0B\", \"#668E1F\", \"#AF6E10\", \"#862C0B\", \"#1F2D50\", \"#64680B\", \"#311508\", \"#4C4C81\", \"#0C7DA0\",\n    \"#862C0B\"];\nvar pointBootstrap5DarkColors = [\"#5ECB9B\", \"#A860F1\", \"#EBA844\", \"#557EF7\", \"#E9599B\", \"#BFC529\", \"#3BC6CF\", \"#7A68EC\", \"#74B706\",\n    \"#EA6266\"];\nvar pointFluentColors = [\"#614570\", \"#4C6FB1\", \"#CC6952\", \"#3F579A\", \"#4EA09B\", \"#6E7A89\", \"#D4515C\", \"#E6AF5D\", \"#639751\",\n    \"#9D4D69\"];\nvar pointFluentDarkColors = [\"#8AB113\", \"#2A72D5\", \"#43B786\", \"#584EC6\", \"#E85F9C\", \"#6E7A89\", \"#EA6266\", \"#EBA844\", \"#26BC7A\",\n    \"#BC4870\"];\nvar pointTailwindColors = [\"#5A61F6\", \"#65A30D\", \"#334155\", \"#14B8A6\", \"#8B5CF6\", \"#0369A1\", \"#F97316\", \"#9333EA\", \"#F59E0B\",\n    \"#15803D\"];\nvar pointTailwindDarkColors = [\"#8B5CF6\", \"#22D3EE\", \"#F87171\", \"#4ADE80\", \"#E879F9\", \"#FCD34D\", \"#F97316\", \"#2DD4BF\", \"#F472B6\",\n    \"#10B981\"];\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/theme-color.ts?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#control-container[data-v-5ec2b114] {\\n  padding: 0px !important;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/rts-vue-samples_release_20.4.0.1/Samples/chart/multi-level-label/App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,wBAAwB;CACzB\",\"file\":\"App.vue?vue&type=style&index=0&id=5ec2b114&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n#control-container[data-v-5ec2b114] {\\n  padding: 0px !important;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/multi-level-label/App.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/multi-level-label/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _theme_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-color */ \"./Samples/chart/multi-level-label/theme-color.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ChartPlugin\"]);\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n       theme: theme,\n      seriesData: [\n        { x: \"Grapes\", y: 28 },\n        { x: \"Apples\", y: 87 },\n        { x: \"Pears\", y: 42 },\n        { x: \"Grapes\", y: 13 },\n        { x: \"Apples\", y: 13 },\n        { x: \"Pears\", y: 10 },\n        { x: \"Tomato\", y: 31 },\n        { x: \"Potato\", y: 96 },\n        { x: \"Cucumber\", y: 41 },\n        { x: \"Onion\", y: 59 }\n      ],\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n        valueType: \"Category\",\n        labelRotation: 90,\n        labelIntersectAction : _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 'Rotate90' : 'Trim',\n        border: { width: 1, type: \"Rectangle\" },\n        isIndexed: true,\n        interval: 1,\n        majorGridLines: { width: 0 },\n        multiLevelLabels: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice\n          ? [\n              {\n                border: { type: \"Rectangle\" },\n                categories: [\n                  { start: -0.5, end: 2.5, text: \"In Season\" },\n                  { start: 2.5, end: 5.5, text: \"Out of Season\" },\n                  { start: 5.5, end: 7.5, text: \"In Season\" },\n                  { start: 7.5, end: 9.5, text: \"Out of Season\" }\n                ]\n              },\n              {\n                border: { type: \"Rectangle\" },\n                textStyle: { fontWeight: \"Bold\" },\n                categories: [\n                  { start: -0.5, end: 5.5, text: \"Fruits\" },\n                  { start: 5.5, end: 9.5, text: \"Vegetables\" }\n                ]\n              }\n            ]\n          : [\n              {\n                border: { type: \"Rectangle\" },\n                categories: [\n                  { start: -0.5, end: 0.5, text: \"Seedless\" },\n                  { start: 0.5, end: 2.5, text: \"Seeded\" },\n                  { start: 2.5, end: 3.5, text: \"Seedless\" },\n                  { start: 3.5, end: 5.5, text: \"Seeded\" },\n                  { start: 5.5, end: 6.5, text: \"Seedless\" },\n                  { start: 6.5, end: 7.5, text: \"Seeded\" },\n                  { start: 7.5, end: 8.5, text: \"Seedless\" },\n                  { start: 8.5, end: 9.5, text: \"Seeded\" }\n                ]\n              },\n              {\n                border: { type: \"Rectangle\" },\n                categories: [\n                  { start: -0.5, end: 2.5, text: \"In Season\" },\n                  { start: 2.5, end: 5.5, text: \"Out of Season\" },\n                  { start: 5.5, end: 7.5, text: \"In Season\" },\n                  { start: 7.5, end: 9.5, text: \"Out of Season\" }\n                ]\n              },\n              {\n                border: { type: \"Rectangle\" },\n                textStyle: { fontWeight: \"Bold\" },\n                categories: [\n                  { start: -0.5, end: 5.5, text: \"Fruits\" },\n                  { start: 5.5, end: 9.5, text: \"Vegetables\" }\n                ]\n              }\n            ]\n      },\n      chartArea: {\n        border: { width: 0 }\n      },\n\n      //Initializing Primary Y Axis\n      primaryYAxis: {\n        minimum: 0,\n        maximum: 120,\n        interval: 30,\n        majorTickLines: { width: 0 },\n        lineStyle: { width: 0 },\n        labelStyle: { color: \"transparent\" }\n      },\n\n      legendSettings: { visible: false },\n\n      marker: {\n        dataLabel: {\n          visible: true,\n          position: \"Outer\"      \n        }\n      },\n      \n      \n      width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? \"100%\" : \"75%\",\n      title: \"Fruits and Vegetables - Season\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"DataLabel\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"MultiLevelLabel\"]]\n  },\n  methods: {\n    pointRender: function(args) {\n       let selectedTheme = location.hash.split(\"/\")[1];\n       selectedTheme = selectedTheme ? selectedTheme : \"Material\";\n        if (selectedTheme && selectedTheme.indexOf(\"fabric\") > -1) {\n          args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_2__[\"fabricColors\"][args.point.index % 10];\n        } else if (selectedTheme === \"material\") {\n          args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_2__[\"materialColors\"][args.point.index % 10];\n        } else if (selectedTheme === \"highcontrast\") {\n          args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_2__[\"highContrastColors\"][args.point.index % 10];\n        } else {\n          args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_2__[\"bootstrapColors\"][args.point.index % 10];\n        }\n      },\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/multi-level-label/App.vue?vue&type=template&id=5ec2b114&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/multi-level-label/App.vue?vue&type=template&id=5ec2b114&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\n      \"div\",\n      { attrs: { align: \"center\" } },\n      [\n        _c(\n          \"ejs-chart\",\n          {\n            staticStyle: { display: \"block\" },\n            attrs: {\n              theme: _vm.theme,\n              align: \"center\",\n              id: \"chartcontainer\",\n              title: _vm.title,\n              primaryXAxis: _vm.primaryXAxis,\n              primaryYAxis: _vm.primaryYAxis,\n              width: _vm.width,\n              chartArea: _vm.chartArea,\n              legendSettings: _vm.legendSettings,\n              pointRender: _vm.pointRender,\n            },\n          },\n          [\n            _c(\n              \"e-series-collection\",\n              [\n                _c(\"e-series\", {\n                  attrs: {\n                    dataSource: _vm.seriesData,\n                    type: \"Column\",\n                    xName: \"x\",\n                    yName: \"y\",\n                    marker: _vm.marker,\n                  },\n                }),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        Axis labels are placed based on the start and end range values and we can add any number of labels to an axis.\\n    \"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        In this example, you can see how to group axis labels. \\n        You can customize text in each level by using \"\n        ),\n        _c(\"code\", [_vm._v(\"alignment\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"overflow\")]),\n        _vm._v(\", \"),\n        _c(\"code\", [_vm._v(\"textSytle\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"border\")]),\n        _vm._v(\" properties.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"Axis labels in each level can be arranged smartly using \"),\n        _c(\"code\", [_vm._v(\"overflow\")]),\n        _vm._v(\" property.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Trim\")]),\n          _vm._v(\" - Trim the label when it intersect.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"Wrap\")]),\n          _vm._v(\" - Wrap the label when it intersect.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"code\", [_vm._v(\"None\")]),\n          _vm._v(\" - Shows all the labels.\"),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"br\"),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\"Border of the axis labels can be customized by using \"),\n        _c(\"code\", [_vm._v(\"type\")]),\n        _vm._v(\" property.\\n    \"),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [_c(\"code\", [_vm._v(\"Rectangle\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"Brace\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"WithoutTopBorder\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"WithoutTopandBottomBorder\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"CurlyBrace\")])]),\n        _vm._v(\" \"),\n        _c(\"li\", [_c(\"code\", [_vm._v(\"withoutBorder\")]), _vm._v(\".\")]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information on the multi level labels can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href: \"http://ej2.syncfusion.com/documentation/chart/api-axis.html#valuetype-valuetype\",\n            },\n          },\n          [_vm._v(\"documentation section\")]\n        ),\n        _vm._v(\".\\n    \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chart/multi-level-label/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });