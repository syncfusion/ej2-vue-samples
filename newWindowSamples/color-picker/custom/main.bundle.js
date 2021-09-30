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
/******/ 		"color-picker/custom/main": 0
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
/******/ 	deferredModules.push(["./Samples/color-picker/custom/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/color-picker/custom/App.vue":
/*!*********************************************!*\
  !*** ./Samples/color-picker/custom/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7092e954_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7092e954&scoped=true& */ \"./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/color-picker/custom/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7092e954_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css& */ \"./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7092e954_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7092e954_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7092e954\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/color-picker/custom/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/color-picker/custom/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/custom/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7092e954_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7092e954_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7092e954_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7092e954_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7092e954_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7092e954_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7092e954&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7092e954_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7092e954_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/custom/main.js":
/*!*********************************************!*\
  !*** ./Samples/color-picker/custom/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/color-picker/custom/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start */\\n/* Common sample level styles */\\n#custom-control[data-v-7092e954] {\\n    margin: auto 0;\\n    text-align: center;\\n}\\n#custom-control .col-lg-6[data-v-7092e954] {\\n    margin-bottom: 20px;\\n}\\n#custom-control .col-lg-6.e-circle-wrap[data-v-7092e954] {\\n    width: 26%;\\n}\\n#custom-control .col-lg-6.e-square-wrap[data-v-7092e954] {\\n    margin-top: 37px;\\n    width: 22%;\\n}\\n#custom-control .col-lg-6.e-rounded-wrap[data-v-7092e954] {\\n    margin-top: 35px;\\n    width: 19%;\\n}\\n#custom-control .col-lg-6.e-scroll-wrap[data-v-7092e954] {\\n    width: 33%;\\n}\\n#custom-control.e-mobile-control .col-lg-6[data-v-7092e954] {\\n    width: 55%;\\n}\\n\\n/* Preview area styles */\\n#custom-control #e-shirt-preview[data-v-7092e954] {\\n    background: transparent url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/shirt.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat;\\n    height: 320px;\\n    margin: 20px auto;\\n    display: inline-block;\\n    width: 400px;\\n    background-color: rgb(244, 67, 54);\\n}\\n#custom-control.e-mobile-control #e-shirt-preview[data-v-7092e954] {\\n    margin-left: -21%;\\n    width: 320px;\\n}\\n.highcontrast #custom-control #e-shirt-preview[data-v-7092e954] {\\n    background: transparent url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/shirt_highcontrast.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat;\\n    background-color: rgb(244, 67, 54);\\n}\\n\\n/* Common sample level styles for mobile */\\n@media only screen and (min-width: 768px) {\\n#custom-control.e-mobile-control .col-sm-12[data-v-7092e954] {\\n        width: 25%;\\n}\\n}\\n#custom-control.e-mobile-control #custom-content[data-v-7092e954] {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n}\\n#custom-control.e-mobile-control #custom-content .col-xs-12[data-v-7092e954] {\\n    flex: 0 0 auto;\\n}\\n/* custom code end */\\n/* Circle palette customization */\\n.e-container .e-palette .e-circle-palette[data-v-7092e954] {\\n    border: 0;\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    margin: 4px;\\n}\\n.e-bigger .e-container .e-palette .e-circle-palette[data-v-7092e954] {\\n    height: 32px;\\n    width: 32px;\\n}\\n.e-container .e-palette .e-circle-palette[data-v-7092e954]:hover {\\n    box-shadow: none;\\n    transform: scale(1.2);\\n    transition: transform .2s ease-out;\\n}\\n.e-circle-palette .e-circle-selection[data-v-7092e954] {\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    display: inline-block;\\n    transform: scale(0);\\n    transition: transform 1.2s ease-in;\\n}\\n.e-circle-palette.e-selected .e-circle-selection[data-v-7092e954] {\\n    transform: scale(0.8);\\n    background-color: #fff;\\n    transition: transform .2s ease-out;\\n}\\n#circle-palette+.e-container[data-v-7092e954],\\n#scroll-palette+.e-container[data-v-7092e954] {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none;\\n}\\n\\n/* Scrollable palette customization */\\n#scroll-palette+.e-container .e-custom-palette.e-palette-group[data-v-7092e954],\\n.e-bigger #scroll-palette+.e-container .e-custom-palette.e-palette-group[data-v-7092e954] {\\n    height: 125px;\\n}\\n.e-container .e-palette .e-scroll-palette[data-v-7092e954] {\\n    border: 0;\\n    color: #fff;\\n    line-height: 24px;\\n    font-size: 16px;\\n    height: 24px;\\n    width: 35px;\\n    margin-top: 2px;\\n    margin-left: 10px;\\n}\\n.e-bigger .e-container .e-palette .e-scroll-palette[data-v-7092e954] {\\n    height: 24px;\\n    width: 35px;\\n}\\n.e-container .e-palette .e-scroll-palette.e-selected[data-v-7092e954]::before {\\n    content: '\\\\E933';\\n}\\n.highcontrast .e-container .e-palette[data-v-7092e954] {\\n    border-bottom-color: transparent;\\n}\\n\\n/* Square palette customization */\\n.e-container .e-palette .e-square-palette[data-v-7092e954],\\n.e-bigger .e-container .e-palette .e-square-palette[data-v-7092e954] {\\n    width: 20px;\\n    height: 20px;\\n}\\n#square-palette+.e-container .e-custom-palette .e-palette[data-v-7092e954],\\n#rounded-palette+.e-container .e-custom-palette .e-palette[data-v-7092e954] {\\n    padding: 5px;\\n}\\n\\n/* Rounded corner palette customization */\\n.e-container .e-palette .e-rounded-palette[data-v-7092e954] {\\n    border-radius: 4px;\\n    margin: 3px;\\n    height: 16px;\\n    width: 16px;\\n}\\n.e-bigger .e-container .e-palette .e-rounded-palette[data-v-7092e954] {\\n    height: 16px;\\n    width: 16px;\\n}\\n.e-container .e-palette .e-rounded-palette[data-v-7092e954]:hover,\\n.e-container .e-palette .e-scroll-palette[data-v-7092e954]:hover {\\n    box-shadow: none;\\n}\\n.e-container .e-palette .e-circle-palette.e-selected[data-v-7092e954],\\n.e-container .e-palette .e-rounded-palette.e-selected[data-v-7092e954],\\n.e-container .e-palette .e-square-palette.e-selected[data-v-7092e954],\\n.e-container .e-palette .e-scroll-palette.e-selected[data-v-7092e954] {\\n    outline: none;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-WUODLTJDJNMVUWQTBYBVSEXVSK54565GBUVZQB2KCMZKQF73X6IQ/Samples/color-picker/custom/App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqDA,uBAAuB;AACvB,gCAAgC;AAChC;IACI,eAAe;IACf,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,WAAW;CACd;AACD;IACI,iBAAiB;IACjB,WAAW;CACd;AACD;IACI,iBAAiB;IACjB,WAAW;CACd;AACD;IACI,WAAW;CACd;AACD;IACI,WAAW;CACd;;AAED,yBAAyB;AACzB;IACI,gEAA0D;IAC1D,cAAc;IACd,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,mCAAmC;CACtC;AACD;IACI,kBAAkB;IAClB,aAAa;CAChB;AACD;IACI,gEAAuE;IACvE,mCAAmC;CACtC;;AAED,2CAA2C;AAC3C;AACA;QACQ,WAAW;CAClB;CACA;AACD;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;CACpB;AACD;IACI,eAAe;CAClB;AACD,qBAAqB;AACrB,kCAAkC;AAClC;IACI,UAAU;IACV,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,YAAY;CACf;AACD;IACI,aAAa;IACb,YAAY;CACf;AACD;IACI,iBAAiB;IACjB,sBAAsB;IACtB,mCAAmC;CACtC;AACD;IACI,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,sBAAsB;IACtB,oBAAoB;IACpB,mCAAmC;CACtC;AACD;IACI,sBAAsB;IACtB,uBAAuB;IACvB,mCAAmC;CACtC;AACD;;IAEI,8BAA8B;IAC9B,0BAA0B;IAC1B,iBAAiB;CACpB;;AAED,sCAAsC;AACtC;;IAEI,cAAc;CACjB;AACD;IACI,UAAU;IACV,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;CACrB;AACD;IACI,aAAa;IACb,YAAY;CACf;AACD;IACI,iBAAiB;CACpB;AACD;IACI,iCAAiC;CACpC;;AAED,kCAAkC;AAClC;;IAEI,YAAY;IACZ,aAAa;CAChB;AACD;;IAEI,aAAa;CAChB;;AAED,0CAA0C;AAC1C;IACI,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,YAAY;CACf;AACD;IACI,aAAa;IACb,YAAY;CACf;AACD;;IAEI,iBAAiB;CACpB;AACD;;;;IAII,cAAc;CACjB\",\"file\":\"App.vue?vue&type=style&index=0&id=7092e954&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* custom code start */\\n/* Common sample level styles */\\n#custom-control[data-v-7092e954] {\\n    margin: auto 0;\\n    text-align: center;\\n}\\n#custom-control .col-lg-6[data-v-7092e954] {\\n    margin-bottom: 20px;\\n}\\n#custom-control .col-lg-6.e-circle-wrap[data-v-7092e954] {\\n    width: 26%;\\n}\\n#custom-control .col-lg-6.e-square-wrap[data-v-7092e954] {\\n    margin-top: 37px;\\n    width: 22%;\\n}\\n#custom-control .col-lg-6.e-rounded-wrap[data-v-7092e954] {\\n    margin-top: 35px;\\n    width: 19%;\\n}\\n#custom-control .col-lg-6.e-scroll-wrap[data-v-7092e954] {\\n    width: 33%;\\n}\\n#custom-control.e-mobile-control .col-lg-6[data-v-7092e954] {\\n    width: 55%;\\n}\\n\\n/* Preview area styles */\\n#custom-control #e-shirt-preview[data-v-7092e954] {\\n    background: transparent url('images/shirt.png') no-repeat;\\n    height: 320px;\\n    margin: 20px auto;\\n    display: inline-block;\\n    width: 400px;\\n    background-color: rgb(244, 67, 54);\\n}\\n#custom-control.e-mobile-control #e-shirt-preview[data-v-7092e954] {\\n    margin-left: -21%;\\n    width: 320px;\\n}\\n.highcontrast #custom-control #e-shirt-preview[data-v-7092e954] {\\n    background: transparent url('images/shirt_highcontrast.png') no-repeat;\\n    background-color: rgb(244, 67, 54);\\n}\\n\\n/* Common sample level styles for mobile */\\n@media only screen and (min-width: 768px) {\\n#custom-control.e-mobile-control .col-sm-12[data-v-7092e954] {\\n        width: 25%;\\n}\\n}\\n#custom-control.e-mobile-control #custom-content[data-v-7092e954] {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n}\\n#custom-control.e-mobile-control #custom-content .col-xs-12[data-v-7092e954] {\\n    flex: 0 0 auto;\\n}\\n/* custom code end */\\n/* Circle palette customization */\\n.e-container .e-palette .e-circle-palette[data-v-7092e954] {\\n    border: 0;\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    margin: 4px;\\n}\\n.e-bigger .e-container .e-palette .e-circle-palette[data-v-7092e954] {\\n    height: 32px;\\n    width: 32px;\\n}\\n.e-container .e-palette .e-circle-palette[data-v-7092e954]:hover {\\n    box-shadow: none;\\n    transform: scale(1.2);\\n    transition: transform .2s ease-out;\\n}\\n.e-circle-palette .e-circle-selection[data-v-7092e954] {\\n    height: 32px;\\n    width: 32px;\\n    border-radius: 20px;\\n    display: inline-block;\\n    transform: scale(0);\\n    transition: transform 1.2s ease-in;\\n}\\n.e-circle-palette.e-selected .e-circle-selection[data-v-7092e954] {\\n    transform: scale(0.8);\\n    background-color: #fff;\\n    transition: transform .2s ease-out;\\n}\\n#circle-palette+.e-container[data-v-7092e954],\\n#scroll-palette+.e-container[data-v-7092e954] {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none;\\n}\\n\\n/* Scrollable palette customization */\\n#scroll-palette+.e-container .e-custom-palette.e-palette-group[data-v-7092e954],\\n.e-bigger #scroll-palette+.e-container .e-custom-palette.e-palette-group[data-v-7092e954] {\\n    height: 125px;\\n}\\n.e-container .e-palette .e-scroll-palette[data-v-7092e954] {\\n    border: 0;\\n    color: #fff;\\n    line-height: 24px;\\n    font-size: 16px;\\n    height: 24px;\\n    width: 35px;\\n    margin-top: 2px;\\n    margin-left: 10px;\\n}\\n.e-bigger .e-container .e-palette .e-scroll-palette[data-v-7092e954] {\\n    height: 24px;\\n    width: 35px;\\n}\\n.e-container .e-palette .e-scroll-palette.e-selected[data-v-7092e954]::before {\\n    content: '\\\\e933';\\n}\\n.highcontrast .e-container .e-palette[data-v-7092e954] {\\n    border-bottom-color: transparent;\\n}\\n\\n/* Square palette customization */\\n.e-container .e-palette .e-square-palette[data-v-7092e954],\\n.e-bigger .e-container .e-palette .e-square-palette[data-v-7092e954] {\\n    width: 20px;\\n    height: 20px;\\n}\\n#square-palette+.e-container .e-custom-palette .e-palette[data-v-7092e954],\\n#rounded-palette+.e-container .e-custom-palette .e-palette[data-v-7092e954] {\\n    padding: 5px;\\n}\\n\\n/* Rounded corner palette customization */\\n.e-container .e-palette .e-rounded-palette[data-v-7092e954] {\\n    border-radius: 4px;\\n    margin: 3px;\\n    height: 16px;\\n    width: 16px;\\n}\\n.e-bigger .e-container .e-palette .e-rounded-palette[data-v-7092e954] {\\n    height: 16px;\\n    width: 16px;\\n}\\n.e-container .e-palette .e-rounded-palette[data-v-7092e954]:hover,\\n.e-container .e-palette .e-scroll-palette[data-v-7092e954]:hover {\\n    box-shadow: none;\\n}\\n.e-container .e-palette .e-circle-palette.e-selected[data-v-7092e954],\\n.e-container .e-palette .e-rounded-palette.e-selected[data-v-7092e954],\\n.e-container .e-palette .e-square-palette.e-selected[data-v-7092e954],\\n.e-container .e-palette .e-scroll-palette.e-selected[data-v-7092e954] {\\n    outline: none;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/custom/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/custom/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_2__[\"ColorPickerPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n        biggerPalettesColn: 4,\n        squarePalettesColn: 8,\n        roundedPalettesColn: 5,\n        circlePaletteColors: {'custom': ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#2196f3', '#03a9f4', '#00bcd4',\n                    '#009688', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']},\n        squarePaletteColors: {'custom1': ['#b80000', '#db3e00', '#fccb00', '#008b02', '#006b76', '#1273de', '#004dcf',\n                    '#5300eb', '#eb9694', '#fad0c3', '#fef3bd', '#c1e1c5', '#bedadc', '#c4def6', '#bed3f3',\n                    '#d4c4fb']},\n        roundedPaletteColors: {'custom1': ['#ff6900', '#fcb900', '#7bdcb5', '#00d084', '#8ed1fc', '#0693e3', '#abb8c3', '#eb144c',\n                    '#f78da7', '#9900ef']},\n        scrollPaletteColors: {\n                'custom1': ['#ef9a9a', '#e57373', '#ef5350', '#f44336', '#f48fb1', '#f06292',\n                    '#ec407a', '#e91e63', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#b39ddb',\n                    '#9575cd', '#7e57c2', '#673AB7'],\n                'custom2': ['#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#90CAF9', '#64B5F6',\n                    '#42A5F5', '#2196F3', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4',\n                    '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4'],\n                'custom3': ['#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#A5D6A7', '#81C784',\n                    '#66BB6A', '#4CAF50', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#E6EE9C',\n                    '#DCE775', '#D4E157', '#CDDC39'],\n                'custom4': ['#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FFE082', '#FFD54F',\n                    '#FFCA28', '#FFC107', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FFAB91',\n                    '#FF8A65', '#FF7043', '#FF5722']}\n    }\n  },\n  methods: {\n    onChange: function(args) {\n      document.getElementById(\"e-shirt-preview\").style.backgroundColor = args.currentValue.hex;\n    },\n    roundedPaletteChange: function(args) {\n        document.getElementById(\"rounded-palette\").nextElementSibling.querySelector(\".e-selected\").style.boxShadow\n            = args.currentValue.hex + ' 0 0 4px';\n        document.getElementById(\"e-shirt-preview\").style.backgroundColor = args.currentValue.hex;\n    },\n    beforeCircleTileRender: function(args) {\n        args.element.classList.add(\"e-circle-palette\");\n        args.element.appendChild(Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])('span', { className: 'e-circle-selection' }));\n    },\n    beforeSquareTileRender: function(args) {\n        args.element.classList.add(\"e-square-palette\");\n    },\n    beforeRoundedTileRender: function(args) {\n        args.element.classList.add(\"e-rounded-palette\");\n    },\n    beforeScrollTileRender: function(args) {\n        args.element.classList.add(\"e-icons\");\n        args.element.classList.add(\"e-scroll-palette\");\n    }\n  },\n  mounted: function() {\n    this.$nextTick(function () {\n        if (window.browserDetails.isDevice) {\n            document.getElementById(\"custom-control\").classList.add(\"e-mobile-control\");\n        }\n    });\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/custom/App.vue?vue&type=template&id=7092e954&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { attrs: { id: \"custom-control\" } }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\", attrs: { id: \"custom-content\" } }, [\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-circle-wrap\"\n          },\n          [\n            _c(\"ejs-colorpicker\", {\n              attrs: {\n                id: \"circle-palette\",\n                mode: \"Palette\",\n                modeSwitcher: false,\n                inline: true,\n                showButtons: false,\n                columns: _vm.biggerPalettesColn,\n                presetColors: _vm.circlePaletteColors,\n                beforeTileRender: _vm.beforeCircleTileRender,\n                change: _vm.onChange\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-rounded-wrap\"\n          },\n          [\n            _c(\"ejs-colorpicker\", {\n              attrs: {\n                id: \"rounded-palette\",\n                mode: \"Palette\",\n                modeSwitcher: false,\n                inline: true,\n                showButtons: false,\n                columns: _vm.roundedPalettesColn,\n                presetColors: _vm.roundedPaletteColors,\n                beforeTileRender: _vm.beforeRoundedTileRender,\n                change: _vm.roundedPaletteChange\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-square-wrap\"\n          },\n          [\n            _c(\"ejs-colorpicker\", {\n              attrs: {\n                id: \"square-palette\",\n                mode: \"Palette\",\n                modeSwitcher: false,\n                inline: true,\n                showButtons: false,\n                columns: _vm.squarePalettesColn,\n                presetColors: _vm.squarePaletteColors,\n                beforeTileRender: _vm.beforeSquareTileRender,\n                change: _vm.onChange\n              }\n            })\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          {\n            staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 e-scroll-wrap\"\n          },\n          [\n            _c(\"ejs-colorpicker\", {\n              attrs: {\n                id: \"scroll-palette\",\n                mode: \"Palette\",\n                modeSwitcher: false,\n                inline: true,\n                showButtons: false,\n                columns: _vm.biggerPalettesColn,\n                presetColors: _vm.scrollPaletteColors,\n                beforeTileRender: _vm.beforeScrollTileRender,\n                change: _vm.onChange\n              }\n            })\n          ],\n          1\n        )\n      ])\n    ]),\n    _vm._v(\" \"),\n    _vm._m(1),\n    _vm._v(\" \"),\n    _vm._m(2)\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { attrs: { id: \"e-shirt-preview\" } })\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates how to customize the color palettes with different types and styles.\"\n        )\n      ])\n    ])\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        The ColorPicker component is a user interface to select and adjust color values. This supports various color specifications\\n        like RGB (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.\\n    \"\n        )\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [_vm._v(\"\\n        In this sample,\")]),\n      _vm._v(\" \"),\n      _c(\"ul\", [\n        _c(\"li\", [\n          _vm._v(\n            \"\\n            Select the shirt color from different customized palettes. It contains circle, square, rounded edge, and multiple\\n            scroll palettes.\\n        \"\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _vm._v(\"Using the\\n            \"),\n          _c(\"code\", [\n            _c(\n              \"a\",\n              {\n                staticClass: \"code\",\n                attrs: {\n                  target: \"_blank\",\n                  href:\n                    \"https://ej2.syncfusion.com/vue/documentation/api/color-picker/#presetcolors\"\n                }\n              },\n              [_vm._v(\"presetColors\\n                \")]\n            )\n          ]),\n          _vm._v(\" property, you can specify the custom colors to be loaded.\")\n        ])\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"\\n        More information about ColorPicker can be found in this\\n        \"\n        ),\n        _c(\n          \"a\",\n          {\n            attrs: {\n              target: \"_blank\",\n              href:\n                \"https://ej2.syncfusion.com/vue/documentation/color-picker/how-to/customize-colorpicker\"\n            }\n          },\n          [_vm._v(\"\\n            documentation section\")]\n        ),\n        _vm._v(\".\\n    \")\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/color-picker/custom/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });