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
/******/ 		"chart/remote-data/main": 0
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
/******/ 	deferredModules.push(["./Samples/chart/remote-data/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chart/remote-data/App.vue":
/*!*******************************************!*\
  !*** ./Samples/chart/remote-data/App.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_498d794e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=498d794e&scoped=true& */ \"./Samples/chart/remote-data/App.vue?vue&type=template&id=498d794e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chart/remote-data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_498d794e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css& */ \"./Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_498d794e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_498d794e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"498d794e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chart/remote-data/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/chart/remote-data/App.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./Samples/chart/remote-data/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chart/remote-data/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_498d794e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_498d794e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_498d794e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_498d794e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_498d794e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/chart/remote-data/App.vue?vue&type=template&id=498d794e&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./Samples/chart/remote-data/App.vue?vue&type=template&id=498d794e&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_498d794e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=498d794e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/remote-data/App.vue?vue&type=template&id=498d794e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_498d794e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_498d794e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?");

/***/ }),

/***/ "./Samples/chart/remote-data/main.js":
/*!*******************************************!*\
  !*** ./Samples/chart/remote-data/main.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chart/remote-data/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/main.js?");

/***/ }),

/***/ "./Samples/chart/remote-data/theme-color.ts":
/*!**************************************************!*\
  !*** ./Samples/chart/remote-data/theme-color.ts ***!
  \**************************************************/
/*! exports provided: materialColors, fabricColors, bootstrapColors, highContrastColors, fluentColors, fluentDarkColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"materialColors\", function() { return materialColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fabricColors\", function() { return fabricColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bootstrapColors\", function() { return bootstrapColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"highContrastColors\", function() { return highContrastColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fluentColors\", function() { return fluentColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fluentDarkColors\", function() { return fluentDarkColors; });\n/**\n * Initialize the Theme colors\n */\nvar materialColors = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883', '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb',\n    '#ea7a57', '#404041', '#00bdae'];\nvar fabricColors = ['#4472c4', '#ed7d31', '#ffc000', '#70ad47', '#5b9bd5',\n    '#c1c1c1', '#6f6fe2', '#e269ae', '#9e480e', '#997300', '#4472c4', '#70ad47', '#ffc000', '#ed7d31'];\nvar bootstrapColors = ['#a16ee5', '#f7ce69', '#55a5c2', '#7ddf1e', '#ff6ea6',\n    '#7953ac', '#b99b4f', '#407c92', '#5ea716', '#b91c52'];\nvar highContrastColors = ['#79ECE4', '#E98272', '#DFE6B6', '#C6E773', '#BA98FF',\n    '#FA83C3', '#00C27A', '#43ACEF', '#D681EF', '#D8BC6E'];\nvar fluentColors = ['#614570', '#4C6FB1', '#CC6952', '#3F579A', '#4EA09B', '#6E7A89', '#D4515C', '#E6AF5D', '#639751',\n    '#9D4D69'];\nvar fluentDarkColors = ['#8AB113', '#2A72D5', '#43B786', '#584EC6', '#E85F9C', '#6E7A89', '#EA6266', '#EBA844', '#26BC7A',\n    '#BC4870'];\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/theme-color.ts?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.waitingpopup[data-v-498d794e] {\\n       position: absolute;\\n       z-index: 100;\\n       top: 0;\\n       left: 0;\\n       background-color: #fff;\\n       border-radius: 50%;\\n       box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\\n       width: 50px;\\n       height: 50px;\\n}\\n.image[data-v-498d794e] {\\n       position: absolute;\\n       background-repeat: no-repeat;\\n       background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/mediumspin.gif'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n       background-position: center;\\n       width: 50px;\\n       height: 50px;\\n       padding: 6px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_20.2.0.1-M7X5UKPFHYI632BOMAIJXJA5TYFEYB5346G2VRQBUWZNZIL2772A/Samples/chart/remote-data/App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;OACO,mBAAmB;OACnB,aAAa;OACb,OAAO;OACP,QAAQ;OACR,uBAAuB;OACvB,mBAAmB;OACnB,0HAA0H;OAC1H,YAAY;OACZ,aAAa;CACnB;AACD;OACO,mBAAmB;OACnB,6BAA6B;OAC7B,gDAAiD;OACjD,4BAA4B;OAC5B,YAAY;OACZ,aAAa;OACb,aAAa;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=498d794e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.waitingpopup[data-v-498d794e] {\\n       position: absolute;\\n       z-index: 100;\\n       top: 0;\\n       left: 0;\\n       background-color: #fff;\\n       border-radius: 50%;\\n       box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\\n       width: 50px;\\n       height: 50px;\\n}\\n.image[data-v-498d794e] {\\n       position: absolute;\\n       background-repeat: no-repeat;\\n       background-image: url('./images/mediumspin.gif');\\n       background-position: center;\\n       width: 50px;\\n       height: 50px;\\n       padding: 6px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chart/remote-data/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/remote-data/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _theme_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-color */ \"./Samples/chart/remote-data/theme-color.ts\");\n/* harmony import */ var _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @syncfusion/ej2-vue-charts */ \"./node_modules/@syncfusion/ej2-vue-charts/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ChartPlugin\"]);\n\n\nlet selectedTheme = location.hash.split(\"/\")[1];\nselectedTheme = selectedTheme ? selectedTheme : \"Material\";\nlet theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, \"Dark\");\n\nlet dataManager = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"DataManager\"]({\n    url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders'\n});\nlet query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"Query\"]().take(5).where('Estimate', 'lessThan', 3, false);\n\nlet loaded = 1;\nlet loadedChart = function (args) {\n    let div = document.getElementById('waitingpopup');\n    div.style.display = 'none';\n    if (loaded) {\n        args.chart.refresh();\n    }\n    loaded = 0;\n};\nlet pointRender = function (args)  {\n    let selectedTheme = location.hash.split('/')[1];\n    selectedTheme = selectedTheme ? selectedTheme : 'Material';\n    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {\n        args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_3__[\"fabricColors\"][args.point.index % 10];\n    } else if (selectedTheme === 'material') {\n        args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_3__[\"materialColors\"][args.point.index % 10];\n    } else if (selectedTheme === 'highcontrast') {\n        args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_3__[\"highContrastColors\"][args.point.index % 10];\n    } else if (selectedTheme === 'fluent') {\n        args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_3__[\"fluentColors\"][args.point.index % 10];\n    } else if (selectedTheme === 'fluent-dark') {\n        args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_3__[\"fluentDarkColors\"][args.point.index % 10];\n    } else {\n        args.fill = _theme_color__WEBPACK_IMPORTED_MODULE_3__[\"bootstrapColors\"][args.point.index % 10];\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n         theme: theme,\n        seriesData: dataManager,\n        queries: query,\n        loadedChart: loadedChart,\n        pointRender: pointRender,\n\n      //Initializing Primary X Axis\n      primaryXAxis: {\n            rangePadding: 'Additional',\n            valueType: 'Category',\n            title: 'Assignee',\n            majorGridLines: { width: 0 },\n        },\n\n      //Initializing Primary Y Axis\n           primaryYAxis:\n            {\n                majorGridLines: { width: 0 },\n                majorTickLines: { width: 0 },\n                lineStyle: { width: 0 },\n                labelStyle: {\n                    color: 'transparent'\n                }\n            },\n        chartArea: {\n            border: {\n                width: 0\n            }\n        },\n          crosshair: {\n            enable: true,\n            line: {\n                color: 'rgba(204,214,235,0.25)',\n                width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? 50 : 20,\n            },\n            lineType: 'Vertical'\n        },\n       width: _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"Browser\"].isDevice ? '100%' : '60%',\n        marker: {\n                    dataLabel: {\n                        visible: true,\n                        position: 'Top',\n                        font: {\n                            fontWeight: '600', color: '#ffffff'\n                        }\n                    }\n                },\n        tooltip: {\n            enable: true\n        },\n        legendSettings: { visible: false },\n      title: \"Sprint Task Analysis\"\n    };\n  },\n  provide: {\n    chart: [_syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"ColumnSeries\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Category\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Legend\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"Tooltip\"], _syncfusion_ej2_vue_charts__WEBPACK_IMPORTED_MODULE_4__[\"DataLabel\"]]\n  },\n  methods: {\n    load: function(args) {\n      let div = document.getElementById('waitingpopup');\n            div.style.display = 'block';\n            let width = args.chart.element.offsetWidth;\n            let height = args.chart.element.offsetHeight;\n            div.style.top = (height ? height : 300 / 2 - 25) + 'px';\n            div.style.left = (width / 2 - 25) + 'px';\n            div.style.display = '';\n            let selectedTheme = location.hash.split('/')[1];\n            selectedTheme = selectedTheme ? selectedTheme : 'Material';\n            this.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);\n        },\n    labelRender: function(args) {\n        if (args.axis.orientation === 'Horizontal') {\n            args.text = args.text.split(' ')[0];\n        }\n    }\n  },\n   \n}));\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chart/remote-data/App.vue?vue&type=template&id=498d794e&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chart/remote-data/App.vue?vue&type=template&id=498d794e&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"align\":\"center\"}},[_c('ejs-chart',{staticStyle:{\"display\":\"block\"},attrs:{\"theme\":_vm.theme,\"align\":\"center\",\"id\":\"chartcontainer\",\"title\":_vm.title,\"primaryXAxis\":_vm.primaryXAxis,\"primaryYAxis\":_vm.primaryYAxis,\"tooltip\":_vm.tooltip,\"chartArea\":_vm.chartArea,\"width\":_vm.width,\"crosshair\":_vm.crosshair,\"labelRender\":_vm.labelRender,\"loadedChart\":_vm.loadedChart,\"pointRender\":_vm.pointRender,\"legendSettings\":_vm.legendSettings}},[_c('e-series-collection',[_c('e-series',{attrs:{\"dataSource\":_vm.seriesData,\"type\":\"Column\",\"xName\":\"CustomerID\",\"yName\":\"Freight\",\"query\":_vm.queries,\"name\":\"Story Point\",\"width\":\"2\",\"marker\":_vm.marker}})],1)],1)],1),_vm._v(\" \"),_vm._m(0)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"col-lg-12 control-section\"},[_c('div',{attrs:{\"id\":\"container\",\"align\":\"center\"}},[_c('div',{staticClass:\"waitingpopup\",staticStyle:{\"display\":\"none\"},attrs:{\"id\":\"waitingpopup\"}},[_c('span',{staticClass:\"image\",attrs:{\"id\":\"gif\"}})])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"\\n       This sample illustrates how to retrieve remote the data for chart.\\n    \")])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n    The Chart supports data binding. The \"),_c('code',[_vm._v(\"dataSource\")]),_vm._v(\" property can be assigned with the instance of \"),_c('code',[_vm._v(\"DataManager\")]),_vm._v(\" to bind remote data.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',[_vm._v(\"\\n    The DataManager, which will act as an interface between the service endpoint and the chart, will require the below minimal information to interact with service endpoint properly.\\n    \")]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"DataManager->url\")]),_vm._v(\" - Defines the service endpoint to fetch data\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"DataManager->adaptor\")]),_vm._v(\" - - Defines the adaptor option. By default, \"),_c('code',[_vm._v(\"ODataAdaptor\")]),_vm._v(\" is used for remote binding. .\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n           Adaptor is responsible for processing response and request from/to the service endpoint. \"),_c('code',[_vm._v(\"@syncfusion/ej2-data\")]),_vm._v(\" package provides some predefined adaptors which are designed to interact with particular service endpoints. They are,\\n        \")]),_vm._v(\" \"),_c('ul',[_c('li',[_c('code',[_vm._v(\"UrlAdaptor\")]),_vm._v(\" - Use this to interact any remote services. This is the base adaptor for all remote based adaptors.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"ODataAdaptor\")]),_vm._v(\" - Use this to interact with OData endpoints.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"ODataV4Adaptor\")]),_vm._v(\"- Use this to interact with OData V4 endpoints.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"WebApiAdaptor\")]),_vm._v(\" - Use this to interact with Web API created under OData standards.\")]),_vm._v(\" \"),_c('li',[_c('code',[_vm._v(\"WebMethodAdaptor\")]),_vm._v(\" - Use this to interact with web methods.\")])]),_vm._v(\" \"),_c('br'),_vm._v(\" \"),_c('p',[_vm._v(\"\\n            In this demo, remote data is bound by assigning service data as an instance of \"),_c('code',[_vm._v(\"DataManager\")]),_vm._v(\" to the \"),_c('code',[_vm._v(\"dataSource\")]),_vm._v(\" property.\\n        \")])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chart/remote-data/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });