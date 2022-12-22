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
/******/ 		"floating-action-button/styles/main": 0
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
/******/ 	deferredModules.push(["./Samples/floating-action-button/styles/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/floating-action-button/styles/App.vue":
/*!*******************************************************!*\
  !*** ./Samples/floating-action-button/styles/App.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_9d16f2c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=9d16f2c6& */ \"./Samples/floating-action-button/styles/App.vue?vue&type=template&id=9d16f2c6&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/floating-action-button/styles/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_9d16f2c6_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css& */ \"./Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_9d16f2c6___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_9d16f2c6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/floating-action-button/styles/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?");

/***/ }),

/***/ "./Samples/floating-action-button/styles/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./Samples/floating-action-button/styles/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/floating-action-button/styles/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?");

/***/ }),

/***/ "./Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9d16f2c6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9d16f2c6_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9d16f2c6_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9d16f2c6_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_9d16f2c6_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?");

/***/ }),

/***/ "./Samples/floating-action-button/styles/App.vue?vue&type=template&id=9d16f2c6&":
/*!**************************************************************************************!*\
  !*** ./Samples/floating-action-button/styles/App.vue?vue&type=template&id=9d16f2c6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9d16f2c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=9d16f2c6& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/floating-action-button/styles/App.vue?vue&type=template&id=9d16f2c6&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9d16f2c6___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_9d16f2c6___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?");

/***/ }),

/***/ "./Samples/floating-action-button/styles/main.js":
/*!*******************************************************!*\
  !*** ./Samples/floating-action-button/styles/main.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/floating-action-button/styles/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.fab-appearence-container{\\n       width: 80%;\\n       margin: 8% auto;\\n       text-align: center;\\n       max-width: 800px;\\n}\\n.fab-index{\\n       z-index:500 !important;\\n}\\n.fab-appearence-container .col-xs-12 {\\n       position: relative;\\n       margin: 15px 0;\\n       min-height: 100px;\\n}\\n.fab-appearence-container .col-md-6 {\\n       padding: 0;\\n}\\n@media only screen and (max-width: 600px) {\\n.fab-appearence-container .col-xs-12 {\\n           min-height: 110px;\\n}\\n}\\n/*start of hover css*/\\n.fab-hover .textEle {\\n       float:right;\\n}\\n.fab-hover .text-container {\\n       overflow: hidden;\\n       width: 0;\\n       margin: 0;\\n       transition: width .5s linear 0s, margin .2s linear .5s;\\n}\\n.fab-hover:hover .text-container {\\n       width: 70px;\\n       margin: 0 5px;\\n       transition: width .5s linear .2s, margin .2s linear 0s;\\n}\\n.e-bigger .e-btn.fab-hover .e-btn-icon.e-icon-left,\\n   .e-btn.fab-hover .e-btn-icon.e-icon-left {\\n       margin-left: 0;\\n       width: 1em;\\n       padding: 0;\\n}\\n.e-bigger .e-fab.e-btn.fab-hover,  \\n   .e-fab.e-btn.fab-hover {\\n       padding: 0 10px;\\n}\\n.e-bigger .fab-hover:hover .text-container {\\n       width: 80px;\\n}\\n/*end of hover css*/\\n@font-face {\\n       font-family: 'fab-icons';\\n       src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n       font-weight: normal;\\n       font-style: normal;\\n}\\n[class^=\\\"fab-icon-\\\"],\\n   [class*=\\\" fab-icon-\\\"] {\\n       font-family: 'fab-icons' !important;\\n       speak: none;\\n       font-size: 55px;\\n       font-style: normal;\\n       font-weight: normal;\\n       font-variant: normal;\\n       text-transform: none;\\n       line-height: inherit;\\n       -webkit-font-smoothing: antialiased;\\n       -moz-osx-font-smoothing: grayscale;\\n}\\n.fab-icon-shopping::before {\\n       content: \\\"\\\\E70C\\\";\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_release_20.4.0.1/Samples/floating-action-button/styles/App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css&\"],\"names\":[],\"mappings\":\";AACA;OACO,WAAW;OACX,gBAAgB;OAChB,mBAAmB;OACnB,iBAAiB;CACvB;AACD;OACO,uBAAuB;CAC7B;AACD;OACO,mBAAmB;OACnB,eAAe;OACf,kBAAkB;CACxB;AACD;OACO,WAAW;CACjB;AACD;AACA;WACW,kBAAkB;CAC5B;CACA;AACD,sBAAsB;AACtB;OACO,YAAY;CAClB;AACD;OACO,iBAAiB;OACjB,SAAS;OACT,UAAU;OACV,uDAAuD;CAC7D;AACD;OACO,YAAY;OACZ,cAAc;OACd,uDAAuD;CAC7D;AACD;;OAEO,eAAe;OACf,WAAW;OACX,WAAW;CACjB;AACD;;OAEO,gBAAgB;CACtB;AACD;OACO,YAAY;CAClB;AACD,oBAAoB;AACpB;OACO,yBAAyB;OACzB,+lGAA+lG;OAC/lG,oBAAoB;OACpB,mBAAmB;CACzB;AACD;;OAEO,oCAAoC;OACpC,YAAY;OACZ,gBAAgB;OAChB,mBAAmB;OACnB,oBAAoB;OACpB,qBAAqB;OACrB,qBAAqB;OACrB,qBAAqB;OACrB,oCAAoC;OACpC,mCAAmC;CACzC;AACD;OACO,iBAAiB;CACvB\",\"file\":\"App.vue?vue&type=style&index=0&id=9d16f2c6&lang=css&\",\"sourcesContent\":[\"\\n.fab-appearence-container{\\n       width: 80%;\\n       margin: 8% auto;\\n       text-align: center;\\n       max-width: 800px;\\n}\\n.fab-index{\\n       z-index:500 !important;\\n}\\n.fab-appearence-container .col-xs-12 {\\n       position: relative;\\n       margin: 15px 0;\\n       min-height: 100px;\\n}\\n.fab-appearence-container .col-md-6 {\\n       padding: 0;\\n}\\n@media only screen and (max-width: 600px) {\\n.fab-appearence-container .col-xs-12 {\\n           min-height: 110px;\\n}\\n}\\n/*start of hover css*/\\n.fab-hover .textEle {\\n       float:right;\\n}\\n.fab-hover .text-container {\\n       overflow: hidden;\\n       width: 0;\\n       margin: 0;\\n       transition: width .5s linear 0s, margin .2s linear .5s;\\n}\\n.fab-hover:hover .text-container {\\n       width: 70px;\\n       margin: 0 5px;\\n       transition: width .5s linear .2s, margin .2s linear 0s;\\n}\\n.e-bigger .e-btn.fab-hover .e-btn-icon.e-icon-left,\\n   .e-btn.fab-hover .e-btn-icon.e-icon-left {\\n       margin-left: 0;\\n       width: 1em;\\n       padding: 0;\\n}\\n.e-bigger .e-fab.e-btn.fab-hover,  \\n   .e-fab.e-btn.fab-hover {\\n       padding: 0 10px;\\n}\\n.e-bigger .fab-hover:hover .text-container {\\n       width: 80px;\\n}\\n/*end of hover css*/\\n@font-face {\\n       font-family: 'fab-icons';\\n       src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\\n       font-weight: normal;\\n       font-style: normal;\\n}\\n[class^=\\\"fab-icon-\\\"],\\n   [class*=\\\" fab-icon-\\\"] {\\n       font-family: 'fab-icons' !important;\\n       speak: none;\\n       font-size: 55px;\\n       font-style: normal;\\n       font-weight: normal;\\n       font-variant: normal;\\n       text-transform: none;\\n       line-height: inherit;\\n       -webkit-font-smoothing: antialiased;\\n       -moz-osx-font-smoothing: grayscale;\\n}\\n.fab-icon-shopping::before {\\n       content: \\\"\\\\e70c\\\";\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/floating-action-button/styles/App.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/floating-action-button/styles/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__[\"FabPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({}));\n\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/floating-action-button/styles/App.vue?vue&type=template&id=9d16f2c6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/floating-action-button/styles/App.vue?vue&type=template&id=9d16f2c6& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"control-section\" }, [\n    _c(\"div\", { staticClass: \"fab-appearence-container\" }, [\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target1\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Primary\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab1\",\n                  title: \"Primary\",\n                  target: \"#target1\",\n                  position: \"BottomCenter\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target2\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Secondary\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab2\",\n                  title: \"Secondary\",\n                  target: \"#target2\",\n                  position: \"BottomCenter\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                  isPrimary: false,\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target3\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Outline\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab3\",\n                  title: \"Outline\",\n                  target: \"#target3\",\n                  position: \"BottomCenter\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                  cssClass: \"e-outline\",\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target7\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Info\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab7\",\n                  title: \"Info\",\n                  target: \"#target7\",\n                  position: \"BottomCenter\",\n                  cssClass: \"e-info\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n      ]),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target4\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Success\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab4\",\n                  title: \"Success\",\n                  target: \"#target4\",\n                  position: \"BottomCenter\",\n                  cssClass: \"e-success\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target5\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Warning\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab5\",\n                  title: \"Warning\",\n                  target: \"#target5\",\n                  position: \"BottomCenter\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                  cssClass: \"e-warning\",\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" }, [\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target6\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Danger\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab6\",\n                  title: \"Danger\",\n                  target: \"#target6\",\n                  position: \"BottomCenter\",\n                  cssClass: \"e-danger\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                },\n              }),\n            ],\n            1\n          ),\n          _vm._v(\" \"),\n          _c(\n            \"div\",\n            {\n              staticClass: \"col-xs-12 col-sm-12 col-lg-6 col-md-6 fab-index\",\n              attrs: { id: \"target8\" },\n            },\n            [\n              _c(\"label\", [_vm._v(\"Label shows on hover\")]),\n              _vm._v(\" \"),\n              _c(\"ejs-fab\", {\n                attrs: {\n                  id: \"fab8\",\n                  title: \"Shopping\",\n                  target: \"#target8\",\n                  position: \"BottomCenter\",\n                  iconCss: \"fab-icons fab-icon-shopping\",\n                  cssClass: \"fab-hover\",\n                  content:\n                    '<span class=\"text-container\"><span class=\"textEle\">Shopping</span></span>',\n                },\n              }),\n            ],\n            1\n          ),\n        ]),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the changes that can be made to the appearance  of the Floating Action Button using predefined styles.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            The appearance of FAB can be customized using the \"\n        ),\n        _c(\"code\", [_vm._v(\"cssClass\")]),\n        _vm._v(\" and \"),\n        _c(\"code\", [_vm._v(\"isPrimary\")]),\n        _vm._v(\n          \" properties.\\n            FAB provides predefined styles which can be set using the \"\n        ),\n        _c(\"code\", [_vm._v(\"cssClass\")]),\n        _vm._v(\" property.\\n        \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/floating-action-button/styles/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });