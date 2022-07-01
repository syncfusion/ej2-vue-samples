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
/******/ 		"color-picker/inline/main": 0
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
/******/ 	deferredModules.push(["./Samples/color-picker/inline/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/color-picker/inline/App.vue":
/*!*********************************************!*\
  !*** ./Samples/color-picker/inline/App.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5b37fa7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5b37fa7e&scoped=true& */ \"./Samples/color-picker/inline/App.vue?vue&type=template&id=5b37fa7e&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/color-picker/inline/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5b37fa7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css& */ \"./Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5b37fa7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5b37fa7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5b37fa7e\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/color-picker/inline/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/inline/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./Samples/color-picker/inline/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/inline/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5b37fa7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5b37fa7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5b37fa7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5b37fa7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5b37fa7e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/inline/App.vue?vue&type=template&id=5b37fa7e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./Samples/color-picker/inline/App.vue?vue&type=template&id=5b37fa7e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b37fa7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5b37fa7e&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/inline/App.vue?vue&type=template&id=5b37fa7e&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b37fa7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5b37fa7e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?");

/***/ }),

/***/ "./Samples/color-picker/inline/main.js":
/*!*********************************************!*\
  !*** ./Samples/color-picker/inline/main.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/color-picker/inline/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* Common sample level styles */\\n#inline-control[data-v-5b37fa7e] {\\n    width: 100%;\\n    text-align: center;\\n}\\n#inline-control .col-xs-12[data-v-5b37fa7e] {\\n    margin: 10px 0;\\n}\\n#inline-control h4[data-v-5b37fa7e] {\\n    margin-bottom: 20px;\\n}\\n.fluent-dark #colorpicker-control h4[data-v-5b37fa7e] {\\n    color: rgba(255, 255, 255, 0.64);\\n}\\n.e-bigger #inline-control h4[data-v-5b37fa7e] {\\n    font-size: 20px;\\n}\\n#inline-control #preview[data-v-5b37fa7e] {\\n    background: transparent url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pen.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat;\\n    display: inline-block;\\n    height: 80px;\\n    margin: 10px 0;\\n    width: 600px;\\n    background-color: #008000;\\n}\\n\\n/* Preview area styles */\\n#inline-control.e-mobile-control #preview[data-v-5b37fa7e] {\\n    background: transparent url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pen_mobile.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat;\\n    background-color: #008000;\\n    height: 35px;\\n    width: 300px;\\n}\\n.highcontrast #inline-control #preview[data-v-5b37fa7e] {\\n    background: transparent url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pen_highcontrast.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat;\\n    background-color: #008000;\\n}\\n.highcontrast #inline-control.e-mobile-control #preview[data-v-5b37fa7e] {\\n    background: transparent url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pen_mobile_highcontrast.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \") no-repeat;\\n    background-color: #008000;\\n}\\n\\n/* Common sample level styles for mobile */\\n#inline-control.e-mobile-control h4[data-v-5b37fa7e] {\\n    margin-bottom: 15px;\\n}\\n#inline-control.e-mobile-control #inline-content[data-v-5b37fa7e] {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n}\\n#inline-control.e-mobile-control #inline-content .col-xs-12[data-v-5b37fa7e] {\\n    flex: 0 0 auto;\\n    margin-top: 5px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/uts-vue-samples_development-F5F5PTSUAV7LW2UFX2U6PDJSQOER7LJSEKP5DGZR5WFAUMILFS4A/Samples/color-picker/inline/App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqDA,gCAAgC;AAChC;IACI,YAAY;IACZ,mBAAmB;CACtB;AACD;IACI,eAAe;CAClB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,iCAAiC;CACpC;AACD;IACI,gBAAgB;CACnB;AACD;IACI,gEAAwD;IACxD,sBAAsB;IACtB,aAAa;IACb,eAAe;IACf,aAAa;IACb,0BAA0B;CAC7B;;AAED,yBAAyB;AACzB;IACI,gEAA+D;IAC/D,0BAA0B;IAC1B,aAAa;IACb,aAAa;CAChB;AACD;IACI,gEAAqE;IACrE,0BAA0B;CAC7B;AACD;IACI,gEAA4E;IAC5E,0BAA0B;CAC7B;;AAED,2CAA2C;AAC3C;IACI,oBAAoB;CACvB;AACD;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,gBAAgB;CACnB\",\"file\":\"App.vue?vue&type=style&index=0&id=5b37fa7e&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* Common sample level styles */\\n#inline-control[data-v-5b37fa7e] {\\n    width: 100%;\\n    text-align: center;\\n}\\n#inline-control .col-xs-12[data-v-5b37fa7e] {\\n    margin: 10px 0;\\n}\\n#inline-control h4[data-v-5b37fa7e] {\\n    margin-bottom: 20px;\\n}\\n.fluent-dark #colorpicker-control h4[data-v-5b37fa7e] {\\n    color: rgba(255, 255, 255, 0.64);\\n}\\n.e-bigger #inline-control h4[data-v-5b37fa7e] {\\n    font-size: 20px;\\n}\\n#inline-control #preview[data-v-5b37fa7e] {\\n    background: transparent url('images/pen.png') no-repeat;\\n    display: inline-block;\\n    height: 80px;\\n    margin: 10px 0;\\n    width: 600px;\\n    background-color: #008000;\\n}\\n\\n/* Preview area styles */\\n#inline-control.e-mobile-control #preview[data-v-5b37fa7e] {\\n    background: transparent url('images/pen_mobile.png') no-repeat;\\n    background-color: #008000;\\n    height: 35px;\\n    width: 300px;\\n}\\n.highcontrast #inline-control #preview[data-v-5b37fa7e] {\\n    background: transparent url('images/pen_highcontrast.png') no-repeat;\\n    background-color: #008000;\\n}\\n.highcontrast #inline-control.e-mobile-control #preview[data-v-5b37fa7e] {\\n    background: transparent url('images/pen_mobile_highcontrast.png') no-repeat;\\n    background-color: #008000;\\n}\\n\\n/* Common sample level styles for mobile */\\n#inline-control.e-mobile-control h4[data-v-5b37fa7e] {\\n    margin-bottom: 15px;\\n}\\n#inline-control.e-mobile-control #inline-content[data-v-5b37fa7e] {\\n    display: flex;\\n    flex-wrap: nowrap;\\n    overflow-x: auto;\\n}\\n#inline-control.e-mobile-control #inline-content .col-xs-12[data-v-5b37fa7e] {\\n    flex: 0 0 auto;\\n    margin-top: 5px;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/inline/App.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/inline/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-inputs */ \"./node_modules/@syncfusion/ej2-vue-inputs/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_inputs__WEBPACK_IMPORTED_MODULE_1__[\"ColorPickerPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  methods: {\n    onChange: function(args) {\n      document.getElementById(\"preview\").style.backgroundColor =\n        args.currentValue.hex;\n    }\n  },\n  mounted: function() {\n    this.$nextTick(function () {\n        if (window.browserDetails.isDevice) {\n            document.getElementById(\"inline-control\").classList.add(\"e-mobile-control\");\n        }\n    });\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/color-picker/inline/App.vue?vue&type=template&id=5b37fa7e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/color-picker/inline/App.vue?vue&type=template&id=5b37fa7e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section\"},[_c('div',{attrs:{\"id\":\"inline-control\"}},[_vm._m(0),_vm._v(\" \"),_c('div',{staticClass:\"row\",attrs:{\"id\":\"inline-content\"}},[_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-6 col-md-6\"},[_c('h4',[_vm._v(\"Inline Palette\")]),_vm._v(\" \"),_c('ejs-colorpicker',{attrs:{\"id\":\"inline-color-palette\",\"mode\":\"Palette\",\"modeSwitcher\":false,\"inline\":true,\"showButtons\":false,\"change\":_vm.onChange}})],1),_vm._v(\" \"),_c('div',{staticClass:\"col-xs-12 col-sm-12 col-lg-6 col-md-6\"},[_c('h4',[_vm._v(\"Inline Picker\")]),_vm._v(\" \"),_c('ejs-colorpicker',{attrs:{\"id\":\"inline-color-picker\",\"mode\":\"Picker\",\"modeSwitcher\":false,\"inline\":true,\"showButtons\":false,\"change\":_vm.onChange}})],1)])]),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"row\"},[_c('div',{attrs:{\"id\":\"preview\"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the inline (flat) mode ColorPicker with different modes and predefined styles.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n        The ColorPicker component is a user interface to select and adjust color values. This supports various color specifications\\n        like RGB (Red Green Blue), HSV (Hue Saturation Value), and Hex codes.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        In this sample,\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Color picker/palette is rendered inline by using the inline\\n            \"),_c('code',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/color-picker/#inline\"}},[_vm._v(\"inline\")])]),_vm._v(\" property set to \"),_c('i',[_vm._v(\"true\")]),_vm._v(\".\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Using the\\n            \"),_c('code',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/color-picker/#mode\"}},[_vm._v(\"mode\")])]),_vm._v(\" property, you can specify the mode \"),_c('i',[_vm._v(\"(Picker/ Palette)\")]),_vm._v(\" of the ColorPicker.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Using the\\n            \"),_c('code',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/api/color-picker/#showbuttons\"}},[_vm._v(\"showButtons\")])]),_vm._v(\" property, you can enable or disable the control \"),_c('i',[_vm._v(\"(apply/cancel)\")]),_vm._v(\" buttons.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"To render the 'Palette' / 'Picker' alone you can hide the mode switcher using \"),_c('code',[_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"http://ej2.syncfusion.com/vue/documentation/api/color-picker/#modeswitcher\"}},[_vm._v(\"modeSwitcher\")])]),_vm._v(\" property\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"\\n        More information about ColorPicker can be found in this\\n        \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/vue/documentation/color-picker/getting-started/#inline-type\"}},[_vm._v(\"\\n         documentation section\")]),_vm._v(\".\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/color-picker/inline/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });