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
/******/ 		"avatar/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/avatar/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/avatar/default/App.vue":
/*!****************************************!*\
  !*** ./Samples/avatar/default/App.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_56a6e7f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=56a6e7f1& */ \"./Samples/avatar/default/App.vue?vue&type=template&id=56a6e7f1&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_56a6e7f1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_56a6e7f1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/avatar/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/avatar/default/App.vue?");

/***/ }),

/***/ "./Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/avatar/default/App.vue?");

/***/ }),

/***/ "./Samples/avatar/default/App.vue?vue&type=template&id=56a6e7f1&":
/*!***********************************************************************!*\
  !*** ./Samples/avatar/default/App.vue?vue&type=template&id=56a6e7f1& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_56a6e7f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=56a6e7f1& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/default/App.vue?vue&type=template&id=56a6e7f1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_56a6e7f1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_56a6e7f1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/default/App.vue?");

/***/ }),

/***/ "./Samples/avatar/default/main.js":
/*!****************************************!*\
  !*** ./Samples/avatar/default/main.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/avatar/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/avatar/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.avatar-default {\\n    overflow: auto;\\n}\\n\\n/* Media Quries for various devices */\\n@media only screen and (max-width: 965px) {\\n.avatar-default .sample_container {\\n        max-width: 332px;\\n        margin: auto;\\n        margin-top: 0;\\n}\\n.avatar-default .circleAvatar {\\n        margin-top: 15px;\\n}\\n.avatar-default .e-avatar-showcase.e-card {\\n        width: 300px;\\n}\\n}\\n@media only screen and (min-width: 965px) {\\n.avatar-default .sample_container {\\n        max-width: 825px;\\n        margin: auto;\\n        margin-top: 70px;\\n}\\n.avatar-default .e-avatar-showcase.e-card {\\n        width: 400px;\\n}\\n}\\n.avatar-default .sample_container .avatar-block {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n\\n/* Assinging image for avatar in 'background-image' property */\\n.avatar-default .e-avatar.image {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n    margin: 2px;\\n}\\n\\n/* Card Customization */\\n.avatar-default .e-avatar-showcase.e-card {\\n    height: 140px;\\n    padding: 5px;\\n    margin: 5px;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    border-radius: 8px;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-content {\\n    align-self: center;\\n    padding: 10px 0 10px 0;\\n    overflow: visible;\\n}\\n.bootstrap4 .avatar-default .e-avatar-showcase.e-card {\\n    box-shadow: none;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-XPLX5WQZDQ5BV5J3TMCR6EI5PERYQWRPKZEYEPVTR6R6YMYILOXQ/Samples/avatar/default/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;CAClB;;AAED,sCAAsC;AACtC;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,cAAc;CACrB;AACD;QACQ,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;CACA;AACD;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;CACA;AACD;IACI,sBAAsB;IACtB,oBAAoB;CACvB;;AAED,+DAA+D;AAC/D;IACI,gDAA4C;IAC5C,6BAA6B;IAC7B,uBAAuB;IACvB,4BAA4B;IAC5B,YAAY;CACf;;AAED,wBAAwB;AACxB;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,yEAAyE;IACzE,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;CACpC;AACD;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,iCAAiC;CACpC;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;CACrB;AACD;IACI,iBAAiB;CACpB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.avatar-default {\\n    overflow: auto;\\n}\\n\\n/* Media Quries for various devices */\\n@media only screen and (max-width: 965px) {\\n.avatar-default .sample_container {\\n        max-width: 332px;\\n        margin: auto;\\n        margin-top: 0;\\n}\\n.avatar-default .circleAvatar {\\n        margin-top: 15px;\\n}\\n.avatar-default .e-avatar-showcase.e-card {\\n        width: 300px;\\n}\\n}\\n@media only screen and (min-width: 965px) {\\n.avatar-default .sample_container {\\n        max-width: 825px;\\n        margin: auto;\\n        margin-top: 70px;\\n}\\n.avatar-default .e-avatar-showcase.e-card {\\n        width: 400px;\\n}\\n}\\n.avatar-default .sample_container .avatar-block {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n\\n/* Assinging image for avatar in 'background-image' property */\\n.avatar-default .e-avatar.image {\\n    background-image: url('./images/pic01.png');\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n    margin: 2px;\\n}\\n\\n/* Card Customization */\\n.avatar-default .e-avatar-showcase.e-card {\\n    height: 140px;\\n    padding: 5px;\\n    margin: 5px;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    border-radius: 8px;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.avatar-default .e-avatar-showcase.e-card .e-card-content {\\n    align-self: center;\\n    padding: 10px 0 10px 0;\\n    overflow: visible;\\n}\\n.bootstrap4 .avatar-default .e-avatar-showcase.e-card {\\n    box-shadow: none;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/avatar/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/default/App.vue?vue&type=template&id=56a6e7f1&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/default/App.vue?vue&type=template&id=56a6e7f1& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"col-lg-12 control-section avatar-default\"},[_c('div',{staticClass:\"sample_container\"},[_c('div',{staticClass:\"avatar-block\"},[_c('div',{staticClass:\"e-card e-avatar-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('div',{staticClass:\"e-avatar e-avatar-xsmall image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-small image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-large image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-xlarge image\"})]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content\"},[_c('div',[_vm._v(\"Default\")])])])]),_vm._v(\" \"),_c('div',{staticClass:\"circleAvatar avatar-block\"},[_c('div',{staticClass:\"e-card e-avatar-showcase\"},[_c('div',{staticClass:\"e-card-content\"},[_c('div',{staticClass:\"e-avatar e-avatar-xsmall e-avatar-circle image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-small e-avatar-circle image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-circle image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-large e-avatar-circle image\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-avatar e-avatar-xlarge e-avatar-circle image\"})]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content\"},[_c('div',[_vm._v(\"Circle\")])])])])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the default avatar and circle avatar in which the\\n        \"),_c('code',[_vm._v(\".e-avatar\")]),_vm._v(\" and\\n        \"),_c('code',[_vm._v(\".e-avatar-circle\")]),_vm._v(\" classes should be added, respectively to the target element.\")])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"The avatar is developed in pure CSS which is used to represents the profile picture or initials or icons in presentable way. It comes with two different shapes, they are listed below.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Default avatar: To apply default avatar, add the\\n                \"),_c('code',[_vm._v(\".e-avatar\")]),_vm._v(\" class to the target element.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Circle avatar: To apply circle avatar, add the\\n                \"),_c('code',[_vm._v(\".e-avatar-circle\")]),_vm._v(\" class to the target element.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The avatar comes with 5 different sizes, and are applied through modifier classes. They are:\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"xSmall avatar: This can be applied by adding\\n                \"),_c('code',[_vm._v(\".e-avatar-\")]),_vm._v(\" class.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Small avatar: This can be applied by adding\\n                \"),_c('code',[_vm._v(\".e-avatar-small\")]),_vm._v(\" class.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Default avatar: This can be applied by adding\\n                \"),_c('code',[_vm._v(\".e-avatar\")]),_vm._v(\" class. No additional class is needed for this.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Large avatar: This can be applied by adding\\n                \"),_c('code',[_vm._v(\".e-avatar-large\")]),_vm._v(\" class.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"xLarge avatar: This can be applied by adding\\n                \"),_c('code',[_vm._v(\".e-avatar-xlarge\")]),_vm._v(\" class.\")])]),_vm._v(\" \"),_c('p',[_c('i',[_vm._v(\"The\\n                \"),_c('code',[_vm._v(\".e-avatar\")]),_vm._v(\" is the main class, which should be included in the target element to use any of the other avatar features.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"The images can be added in the following two different ways to the avatar:\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"Using CSS\\n                \"),_c('code',[_vm._v(\"background\")]),_vm._v(\" property on the avatar element. It doesn’t require any additional element.\")]),_vm._v(\" \"),_c('li',[_vm._v(\"Using image tag. The image tag needs to be wrapped by the avatar element.\")])])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/avatar/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });