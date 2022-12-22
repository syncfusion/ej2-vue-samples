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
/******/ 		"badge/toolbar/main": 0
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
/******/ 	deferredModules.push(["./Samples/badge/toolbar/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/badge/toolbar/App.vue":
/*!***************************************!*\
  !*** ./Samples/badge/toolbar/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5507313d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5507313d& */ \"./Samples/badge/toolbar/App.vue?vue&type=template&id=5507313d&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/badge/toolbar/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5507313d_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5507313d&lang=css& */ \"./Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5507313d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5507313d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/badge/toolbar/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?");

/***/ }),

/***/ "./Samples/badge/toolbar/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/badge/toolbar/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/badge/toolbar/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?");

/***/ }),

/***/ "./Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css&":
/*!************************************************************************************!*\
  !*** ./Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5507313d_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5507313d&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5507313d_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5507313d_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5507313d_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5507313d_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?");

/***/ }),

/***/ "./Samples/badge/toolbar/App.vue?vue&type=template&id=5507313d&":
/*!**********************************************************************!*\
  !*** ./Samples/badge/toolbar/App.vue?vue&type=template&id=5507313d& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5507313d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5507313d& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/toolbar/App.vue?vue&type=template&id=5507313d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5507313d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5507313d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?");

/***/ }),

/***/ "./Samples/badge/toolbar/main.js":
/*!***************************************!*\
  !*** ./Samples/badge/toolbar/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/badge/toolbar/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.badge-toolbar .sample_container {\\n    display: table;\\n    margin: auto;\\n    margin-top: 117px;\\n}\\nbody.bootstrap5 .badge-toolbar .e-toolbar,\\nbody.material .badge-toolbar .e-toolbar,\\nbody.tailwind .badge-toolbar .e-toolbar{\\n    border: 1px solid #dee2e6;\\n}\\n.tailwind-dark .sample_container.badge-toolbar,\\n.bootstrap5-dark .sample_container.badge-toolbar,\\n.bootstrap-dark .sample_container.badge-toolbar,\\n.fabric-dark .sample_container.badge-toolbar {\\n    border: 1px solid #dddddd;\\n}\\n@media only screen and (max-width: 550px) {\\n.badge-toolbar .sample_container #toolbar .header {\\n        display: none;\\n}\\n.material .badge-toolbar .sample_container .e-toolbar .e-toolbar-items:first-child>.e-toolbar-item:last-child {\\n        margin-right: 9px;\\n}\\n.bootstrap .badge-toolbar .sample_container .e-toolbar .e-toolbar-items:first-child>.e-toolbar-item:last-child {\\n        margin-right: 10px;\\n}\\n}\\n.badge-toolbar .sample_container .badge-block {\\n    position: relative;\\n    display: inline-block;\\n    margin: 20px 13px 10px 10px;\\n}\\n.badge-toolbar .icons {\\n    width: 28px;\\n    height: 28px;\\n    display: inline-block;\\n}\\n.badge-toolbar #toolbar .header {\\n    font-size: 18px;\\n    margin-right: 56px;\\n}\\n\\n/* SVG Icons */\\n.badge-toolbar .love {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M8.532.81c3.029 0 5.932 1.668 7.468 4.521 2.139-3.97 6.922-5.644 11.008-3.726 4.289 2.012 6.177 7.212 4.218 11.617C29.273 17.614 16 31.19 16 31.19 15.916 31.137 2.727 17.614.774 13.222-1.186 8.817.703 3.617 4.993 1.605A8.299 8.299 0 0 1 8.532.81z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-toolbar .message {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M0 5.126h.024l7.547 7.393 8.405 8.252 8.405-8.252 7.547-7.393H32v22.6H0zm1.902-.852h28.195l-7.048 5.929L16 16.132l-7.049-5.929z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-toolbar .user-profile {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M8.772 18.363a11.978 11.978 0 0 0 7.229 2.416c2.71 0 5.214-.899 7.229-2.416 4.71.593 8.354 4.61 8.354 9.481V32H.416v-4.156c0-4.871 3.646-8.888 8.356-9.481zM16.001 0a8.727 8.727 0 1 1-.003 17.455A8.727 8.727 0 0 1 16.001 0z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_release_20.4.0.1/Samples/badge/toolbar/App.vue?vue&type=style&index=0&id=5507313d&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;IACf,aAAa;IACb,kBAAkB;CACrB;AACD;;;IAGI,0BAA0B;CAC7B;AACD;;;;IAII,0BAA0B;CAC7B;AACD;AACA;QACQ,cAAc;CACrB;AACD;QACQ,kBAAkB;CACzB;AACD;QACQ,mBAAmB;CAC1B;CACA;AACD;IACI,mBAAmB;IACnB,sBAAsB;IACtB,4BAA4B;CAC/B;AACD;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;CACzB;AACD;IACI,gBAAgB;IAChB,mBAAmB;CACtB;;AAED,eAAe;AACf;IACI,waAAwa;CAC3a;AACD;IACI,iTAAiT;CACpT;AACD;IACI,gZAAgZ;CACnZ\",\"file\":\"App.vue?vue&type=style&index=0&id=5507313d&lang=css&\",\"sourcesContent\":[\"\\n.badge-toolbar .sample_container {\\n    display: table;\\n    margin: auto;\\n    margin-top: 117px;\\n}\\nbody.bootstrap5 .badge-toolbar .e-toolbar,\\nbody.material .badge-toolbar .e-toolbar,\\nbody.tailwind .badge-toolbar .e-toolbar{\\n    border: 1px solid #dee2e6;\\n}\\n.tailwind-dark .sample_container.badge-toolbar,\\n.bootstrap5-dark .sample_container.badge-toolbar,\\n.bootstrap-dark .sample_container.badge-toolbar,\\n.fabric-dark .sample_container.badge-toolbar {\\n    border: 1px solid #dddddd;\\n}\\n@media only screen and (max-width: 550px) {\\n.badge-toolbar .sample_container #toolbar .header {\\n        display: none;\\n}\\n.material .badge-toolbar .sample_container .e-toolbar .e-toolbar-items:first-child>.e-toolbar-item:last-child {\\n        margin-right: 9px;\\n}\\n.bootstrap .badge-toolbar .sample_container .e-toolbar .e-toolbar-items:first-child>.e-toolbar-item:last-child {\\n        margin-right: 10px;\\n}\\n}\\n.badge-toolbar .sample_container .badge-block {\\n    position: relative;\\n    display: inline-block;\\n    margin: 20px 13px 10px 10px;\\n}\\n.badge-toolbar .icons {\\n    width: 28px;\\n    height: 28px;\\n    display: inline-block;\\n}\\n.badge-toolbar #toolbar .header {\\n    font-size: 18px;\\n    margin-right: 56px;\\n}\\n\\n/* SVG Icons */\\n.badge-toolbar .love {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M8.532.81c3.029 0 5.932 1.668 7.468 4.521 2.139-3.97 6.922-5.644 11.008-3.726 4.289 2.012 6.177 7.212 4.218 11.617C29.273 17.614 16 31.19 16 31.19 15.916 31.137 2.727 17.614.774 13.222-1.186 8.817.703 3.617 4.993 1.605A8.299 8.299 0 0 1 8.532.81z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-toolbar .message {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M0 5.126h.024l7.547 7.393 8.405 8.252 8.405-8.252 7.547-7.393H32v22.6H0zm1.902-.852h28.195l-7.048 5.929L16 16.132l-7.049-5.929z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.badge-toolbar .user-profile {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23a6a5a6' d='M8.772 18.363a11.978 11.978 0 0 0 7.229 2.416c2.71 0 5.214-.899 7.229-2.416 4.71.593 8.354 4.61 8.354 9.481V32H.416v-4.156c0-4.871 3.646-8.888 8.356-9.481zM16.001 0a8.727 8.727 0 1 1-.003 17.455A8.727 8.727 0 0 1 16.001 0z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/badge/toolbar/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/toolbar/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-navigations */ \"./node_modules/@syncfusion/ej2-vue-navigations/index.js\");\n/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-base */ \"./node_modules/@syncfusion/ej2-base/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_navigations__WEBPACK_IMPORTED_MODULE_1__[\"ToolbarPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    data: function() {\n        return {\n            notification: '<div class=\"header\"> Notification </div>',\n            mail: '<div>' +\n            '<div class=\"badge-block\">' +\n            '<div class=\"message icons\"></div>' +\n            '<span class=\"e-badge e-badge-primary e-badge-notification e-badge-overlap\">35</span>' +\n            '</div>' +\n            '</div>',\n            user: '<div>' +\n            '<div class=\"badge-block\">' +\n            '<div class=\"user-profile icons\"></div>' +\n            '<span class=\"e-badge e-badge-success e-badge-notification e-badge-overlap\">28</span>' +\n            '</div>' +\n            '</div>',\n            love: '<div>' +\n            '<div class=\"badge-block\">' +\n            '<div class=\"love icons\"></div>' +\n            '<span class=\"e-badge e-badge-info e-badge-notification e-badge-overlap\">98</span>' +\n            '</div>' +\n            '</div>'\n        };\n    },\n    mounted: function() {\n    }\n\n}));\n\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/badge/toolbar/App.vue?vue&type=template&id=5507313d&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/badge/toolbar/App.vue?vue&type=template&id=5507313d& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"badge-toolbar\" }, [\n    _c(\"div\", { staticClass: \"col-lg-12 control-section\" }, [\n      _c(\n        \"div\",\n        { staticClass: \"sample_container\" },\n        [\n          _c(\n            \"ejs-toolbar\",\n            { attrs: { id: \"toolbar\" } },\n            [\n              _c(\n                \"e-items\",\n                [\n                  _c(\"e-item\", { attrs: { template: _vm.notification } }),\n                  _vm._v(\" \"),\n                  _c(\"e-item\", { attrs: { template: _vm.mail } }),\n                  _vm._v(\" \"),\n                  _c(\"e-item\", { attrs: { template: _vm.user } }),\n                  _vm._v(\" \"),\n                  _c(\"e-item\", { attrs: { template: _vm.love } }),\n                ],\n                1\n              ),\n            ],\n            1\n          ),\n        ],\n        1\n      ),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the integration of badges into toolbar component to display mails, requests, etc.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"The badge can be integrated into the toolbar to display the notifications of custom buttons to users. Here, SVG icons\\n            use the target for badge elements to display notifications.\\n        \"\n        ),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/badge/toolbar/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });