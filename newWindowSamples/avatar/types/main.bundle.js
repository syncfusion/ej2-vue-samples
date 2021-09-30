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
/******/ 		"avatar/types/main": 0
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
/******/ 	deferredModules.push(["./Samples/avatar/types/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/avatar/types/App.vue":
/*!**************************************!*\
  !*** ./Samples/avatar/types/App.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3bca38ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3bca38ae& */ \"./Samples/avatar/types/App.vue?vue&type=template&id=3bca38ae&\");\n/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\nvar script = {}\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  script,\n  _App_vue_vue_type_template_id_3bca38ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3bca38ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/avatar/types/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/avatar/types/App.vue?");

/***/ }),

/***/ "./Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/avatar/types/App.vue?");

/***/ }),

/***/ "./Samples/avatar/types/App.vue?vue&type=template&id=3bca38ae&":
/*!*********************************************************************!*\
  !*** ./Samples/avatar/types/App.vue?vue&type=template&id=3bca38ae& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bca38ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3bca38ae& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/types/App.vue?vue&type=template&id=3bca38ae&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bca38ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3bca38ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/types/App.vue?");

/***/ }),

/***/ "./Samples/avatar/types/main.js":
/*!**************************************!*\
  !*** ./Samples/avatar/types/main.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/avatar/types/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/avatar/types/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.avatar-types {\\n    overflow: auto;\\n}\\n\\n/* Media Quries for various devices */\\n@media only screen and (max-width: 965px) {\\n.avatar-types .sample_container {\\n        max-width: 265px;\\n        margin: auto;\\n        margin-top: 0;\\n}\\n.avatar-types .e-avatar-showcase.e-card {\\n        width: 120px;\\n}\\n}\\n@media only screen and (min-width: 965px) {\\n.avatar-types .sample_container {\\n        max-width: 488px;\\n        margin: auto;\\n        margin-top: 35px;\\n}\\n.avatar-types .e-avatar-showcase.e-card {\\n        width: 150px;\\n}\\n}\\n@media only screen and (max-width: 340px) {\\n.avatar-types .sample_container {\\n        max-width: 131px;\\n}\\n}\\n.avatar-types .sample_container .avatar-block {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n\\n/* Avatar image source */\\n.avatar-types .e-avatar img.image {\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\n/* SVG Icons */\\n.avatar-types .chrome {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23ffffff' d='M16.033 11.049a5.155 5.155 0 1 1 0 10.312 5.156 5.156 0 0 1 0-10.312zM16.124 0c1.281-.003 9.659.318 14.268 9.043h-.016l.01.018c.33.578 3.745 6.94-.485 14.969 0 0-4.215 8.107-14.565 7.968l-.452-.012-.004.007-.004.007.02-.037c.564-.98 5.112-8.884 6.357-11.067l.016-.028.007-.008.04-.069.11-.127a7.085 7.085 0 0 0 1.457-2.967l.01-.046.035-.151c.088-.424.148-.944.128-1.549l-.006-.117v-.004l-.007-.143-.006-.07-.005-.079-.012-.116v-.01l-.001-.008-.016-.158a7.2 7.2 0 0 0-.096-.572l-.018-.081-.013-.064a9.801 9.801 0 0 0-.692-2.016c-.165-.243-.332-.489-.512-.733l-.142-.187 8.728-2.554s-10.538-.01-13.018-.001l.021.005H16.642l-.14-.013a7.034 7.034 0 0 0-1.132-.003l-.167.016h-.047l-.034-.001c-.193.002-1.213.045-2.492.764l-.005.003-.033.016a7.158 7.158 0 0 0-3.25 3.533l-.059.148-6.485-6.404s4.74 8.311 6.165 10.779l.065.113.023.088a7.14 7.14 0 0 0 7.777 5.118l.144-.02L14.854 32h-.027c-.667-.005-7.894-.234-12.744-7.906 0 0-4.925-7.698.37-16.573l.252-.411.001-.002C2.822 6.904 6.58.374 15.958.003c0 0 .057-.003.166-.003z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.avatar-types .svg_icons {\\n    width: 32px;\\n    height: 32px;\\n    display: inline-block;\\n}\\n\\n/* Card Customization */\\n.avatar-types .e-avatar-showcase.e-card {\\n    height: 113px;\\n    padding: 5px;\\n    margin: 5px;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    border-radius: 8px;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-content {\\n    overflow: visible;\\n    align-self: center;\\n    padding: 10px 0 10px 0;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-content .e-avatar {\\n    font-size: 18px;\\n}\\n\\n/* Font Icons */\\n@font-face {\\n    font-family: 'Contacts';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSRgAAAEoAAAAVmNtYXDnEOdaAAABjAAAADhnbHlmiAnWagAAAcwAAADwaGVhZBD04psAAADQAAAANmhoZWEHiwNuAAAArAAAACRobXR4C9AAAAAAAYAAAAAMbG9jYQAwAHgAAAHEAAAACG1heHABDwA1AAABCAAAACBuYW1lby+ImAAAArwAAAIxcG9zdGUbI4AAAATwAAAAOwABAAADUv9qAFoEAAAAAAAD3QABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAAWW9ja18PPPUACwPoAAAAANb8zuYAAAAA1vzO5gAAAAAD3QPqAAAACAACAAAAAAAAAAEAAAADACkAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPwAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAQNS/2oAWgPqAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOcB//8AAOcA//8AAAABAAQAAAABAAIAAAAAADAAeAACAAAAAAO+A+oADQAZAAA3FBYXIT4BNS4BJyEOARMeARc+ATcuAScOAS4YFwMzFxgDq4H+zYGr4QOCY2KCAwOCYmGCnCtOISFOK3qiAwOiAe1igwICg2JjggICggAAAAACAAAAAAPdA+oAFAAoAAABDgEHIicjDgEHLgEnLgEnPgE3HgEFFBYfARYfATcXFhc2JDcmJCcGBAOkBfK3KioXEFcpBBEMRUsBBfK3tvL8cVRLDggBBsQKLDDPARMFBf7tz87+7QI+ndEEBwI/Izh2DS+RVZ3RBATRnWCmN3BIETecAgcBBPK1tfIEBPIAAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBDb250YWN0c1JlZ3VsYXJDb250YWN0c0NvbnRhY3RzVmVyc2lvbiAxLjBDb250YWN0c0ZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAQwBvAG4AdABhAGMAdABzAFIAZQBnAHUAbABhAHIAQwBvAG4AdABhAGMAdABzAEMAbwBuAHQAYQBjAHQAcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAQwBvAG4AdABhAGMAdABzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHVzZXIKY2hhdC0wMS13ZgAAAA==) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.avatar-types .people,\\n.avatar-types .e-people {\\n    font-family: 'Contacts';\\n}\\n.avatar-types .e-people:before {\\n    content: '\\\\E700';\\n}\\n.avatar-types .e-avatar .e-people.icons {\\n    font-size: 24px;\\n}\\n\\n/* Custom Avatar Background Color */\\n.avatar-types .e-avatar.custom {\\n    background-color: blueviolet;\\n}\\n.tailwind .avatar-types .e-avatar.custom {\\n    color: white;\\n}\\n.bootstrap4 .avatar-types .e-avatar.custom {\\n    background-color: #cfd5ff;\\n}\\n.bootstrap4 .avatar-types .e-avatar .chrome {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23666666' d='M16.033 11.049a5.155 5.155 0 1 1 0 10.312 5.156 5.156 0 0 1 0-10.312zM16.124 0c1.281-.003 9.659.318 14.268 9.043h-.016l.01.018c.33.578 3.745 6.94-.485 14.969 0 0-4.215 8.107-14.565 7.968l-.452-.012-.004.007-.004.007.02-.037c.564-.98 5.112-8.884 6.357-11.067l.016-.028.007-.008.04-.069.11-.127a7.085 7.085 0 0 0 1.457-2.967l.01-.046.035-.151c.088-.424.148-.944.128-1.549l-.006-.117v-.004l-.007-.143-.006-.07-.005-.079-.012-.116v-.01l-.001-.008-.016-.158a7.2 7.2 0 0 0-.096-.572l-.018-.081-.013-.064a9.801 9.801 0 0 0-.692-2.016c-.165-.243-.332-.489-.512-.733l-.142-.187 8.728-2.554s-10.538-.01-13.018-.001l.021.005H16.642l-.14-.013a7.034 7.034 0 0 0-1.132-.003l-.167.016h-.047l-.034-.001c-.193.002-1.213.045-2.492.764l-.005.003-.033.016a7.158 7.158 0 0 0-3.25 3.533l-.059.148-6.485-6.404s4.74 8.311 6.165 10.779l.065.113.023.088a7.14 7.14 0 0 0 7.777 5.118l.144-.02L14.854 32h-.027c-.667-.005-7.894-.234-12.744-7.906 0 0-4.925-7.698.37-16.573l.252-.411.001-.002C2.822 6.904 6.58.374 15.958.003c0 0 .057-.003.166-.003z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\nbody.bootstrap5 .e-avatar .e-people.icons{\\n    color: #ffffff;\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.3.0.1-VJEC7HBY5NTXUHA5ZZO7LWIVXVPVHIAKFKVUZCG2B6BEQF2A46MA/Samples/avatar/types/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;IACI,eAAe;CAClB;;AAED,sCAAsC;AACtC;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,cAAc;CACrB;AACD;QACQ,aAAa;CACpB;CACA;AACD;AACA;QACQ,iBAAiB;QACjB,aAAa;QACb,iBAAiB;CACxB;AACD;QACQ,aAAa;CACpB;CACA;AACD;AACA;QACQ,iBAAiB;CACxB;CACA;AACD;IACI,sBAAsB;IACtB,oBAAoB;CACvB;;AAED,yBAAyB;AACzB;IACI,6BAA6B;IAC7B,uBAAuB;IACvB,4BAA4B;CAC/B;;AAED,eAAe;AACf;IACI,0qCAA0qC;CAC7qC;AACD;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;CACzB;;AAED,wBAAwB;AACxB;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,yEAAyE;IACzE,mBAAmB;CACtB;AACD;IACI,mBAAmB;IACnB,gBAAgB;IAChB,oBAAoB;IACpB,iCAAiC;CACpC;AACD;IACI,2BAA2B;IAC3B,sBAAsB;IACtB,gBAAgB;IAChB,iCAAiC;CACpC;AACD;IACI,UAAU;CACb;AACD;IACI,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;CAC1B;AACD;IACI,gBAAgB;CACnB;;AAED,gBAAgB;AAChB;IACI,wBAAwB;IACxB,uzDAAuzD;IACvzD,oBAAoB;IACpB,mBAAmB;CACtB;AACD;;IAEI,wBAAwB;CAC3B;AACD;IACI,iBAAiB;CACpB;AACD;IACI,gBAAgB;CACnB;;AAED,oCAAoC;AACpC;IACI,6BAA6B;CAChC;AACD;IACI,aAAa;CAChB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,0qCAA0qC;CAC7qC;AACD;IACI,eAAe;CAClB\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.avatar-types {\\n    overflow: auto;\\n}\\n\\n/* Media Quries for various devices */\\n@media only screen and (max-width: 965px) {\\n.avatar-types .sample_container {\\n        max-width: 265px;\\n        margin: auto;\\n        margin-top: 0;\\n}\\n.avatar-types .e-avatar-showcase.e-card {\\n        width: 120px;\\n}\\n}\\n@media only screen and (min-width: 965px) {\\n.avatar-types .sample_container {\\n        max-width: 488px;\\n        margin: auto;\\n        margin-top: 35px;\\n}\\n.avatar-types .e-avatar-showcase.e-card {\\n        width: 150px;\\n}\\n}\\n@media only screen and (max-width: 340px) {\\n.avatar-types .sample_container {\\n        max-width: 131px;\\n}\\n}\\n.avatar-types .sample_container .avatar-block {\\n    display: inline-block;\\n    vertical-align: top;\\n}\\n\\n/* Avatar image source */\\n.avatar-types .e-avatar img.image {\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n}\\n\\n/* SVG Icons */\\n.avatar-types .chrome {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23ffffff' d='M16.033 11.049a5.155 5.155 0 1 1 0 10.312 5.156 5.156 0 0 1 0-10.312zM16.124 0c1.281-.003 9.659.318 14.268 9.043h-.016l.01.018c.33.578 3.745 6.94-.485 14.969 0 0-4.215 8.107-14.565 7.968l-.452-.012-.004.007-.004.007.02-.037c.564-.98 5.112-8.884 6.357-11.067l.016-.028.007-.008.04-.069.11-.127a7.085 7.085 0 0 0 1.457-2.967l.01-.046.035-.151c.088-.424.148-.944.128-1.549l-.006-.117v-.004l-.007-.143-.006-.07-.005-.079-.012-.116v-.01l-.001-.008-.016-.158a7.2 7.2 0 0 0-.096-.572l-.018-.081-.013-.064a9.801 9.801 0 0 0-.692-2.016c-.165-.243-.332-.489-.512-.733l-.142-.187 8.728-2.554s-10.538-.01-13.018-.001l.021.005H16.642l-.14-.013a7.034 7.034 0 0 0-1.132-.003l-.167.016h-.047l-.034-.001c-.193.002-1.213.045-2.492.764l-.005.003-.033.016a7.158 7.158 0 0 0-3.25 3.533l-.059.148-6.485-6.404s4.74 8.311 6.165 10.779l.065.113.023.088a7.14 7.14 0 0 0 7.777 5.118l.144-.02L14.854 32h-.027c-.667-.005-7.894-.234-12.744-7.906 0 0-4.925-7.698.37-16.573l.252-.411.001-.002C2.822 6.904 6.58.374 15.958.003c0 0 .057-.003.166-.003z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\n.avatar-types .svg_icons {\\n    width: 32px;\\n    height: 32px;\\n    display: inline-block;\\n}\\n\\n/* Card Customization */\\n.avatar-types .e-avatar-showcase.e-card {\\n    height: 113px;\\n    padding: 5px;\\n    margin: 5px;\\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\\n    border-radius: 8px;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-header .e-card-header-title {\\n    align-self: center;\\n    font-size: 18px;\\n    letter-spacing: 1px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-header .e-card-sub-title {\\n    color: rgba(0, 0, 0, 0.75);\\n    white-space: pre-line;\\n    font-size: 14px;\\n    text-shadow: #eaeaea 1px 1px 2px;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-header .e-card-sub-title p {\\n    margin: 0;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-content {\\n    overflow: visible;\\n    align-self: center;\\n    padding: 10px 0 10px 0;\\n}\\n.avatar-types .e-avatar-showcase.e-card .e-card-content .e-avatar {\\n    font-size: 18px;\\n}\\n\\n/* Font Icons */\\n@font-face {\\n    font-family: 'Contacts';\\n    src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMj0gSRgAAAEoAAAAVmNtYXDnEOdaAAABjAAAADhnbHlmiAnWagAAAcwAAADwaGVhZBD04psAAADQAAAANmhoZWEHiwNuAAAArAAAACRobXR4C9AAAAAAAYAAAAAMbG9jYQAwAHgAAAHEAAAACG1heHABDwA1AAABCAAAACBuYW1lby+ImAAAArwAAAIxcG9zdGUbI4AAAATwAAAAOwABAAADUv9qAFoEAAAAAAAD3QABAAAAAAAAAAAAAAAAAAAAAwABAAAAAQAAWW9ja18PPPUACwPoAAAAANb8zuYAAAAA1vzO5gAAAAAD3QPqAAAACAACAAAAAAAAAAEAAAADACkAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQPwAZAABQAAAnoCvAAAAIwCegK8AAAB4AAxAQIAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5wDnAQNS/2oAWgPqAJYAAAABAAAAAAAABAAAAAPoAAAD6AAAAAAAAgAAAAMAAAAUAAMAAQAAABQABAAkAAAABAAEAAEAAOcB//8AAOcA//8AAAABAAQAAAABAAIAAAAAADAAeAACAAAAAAO+A+oADQAZAAA3FBYXIT4BNS4BJyEOARMeARc+ATcuAScOAS4YFwMzFxgDq4H+zYGr4QOCY2KCAwOCYmGCnCtOISFOK3qiAwOiAe1igwICg2JjggICggAAAAACAAAAAAPdA+oAFAAoAAABDgEHIicjDgEHLgEnLgEnPgE3HgEFFBYfARYfATcXFhc2JDcmJCcGBAOkBfK3KioXEFcpBBEMRUsBBfK3tvL8cVRLDggBBsQKLDDPARMFBf7tz87+7QI+ndEEBwI/Izh2DS+RVZ3RBATRnWCmN3BIETecAgcBBPK1tfIEBPIAAAAAABIA3gABAAAAAAAAAAEAAAABAAAAAAABAAgAAQABAAAAAAACAAcACQABAAAAAAADAAgAEAABAAAAAAAEAAgAGAABAAAAAAAFAAsAIAABAAAAAAAGAAgAKwABAAAAAAAKACwAMwABAAAAAAALABIAXwADAAEECQAAAAIAcQADAAEECQABABAAcwADAAEECQACAA4AgwADAAEECQADABAAkQADAAEECQAEABAAoQADAAEECQAFABYAsQADAAEECQAGABAAxwADAAEECQAKAFgA1wADAAEECQALACQBLyBDb250YWN0c1JlZ3VsYXJDb250YWN0c0NvbnRhY3RzVmVyc2lvbiAxLjBDb250YWN0c0ZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAAQwBvAG4AdABhAGMAdABzAFIAZQBnAHUAbABhAHIAQwBvAG4AdABhAGMAdABzAEMAbwBuAHQAYQBjAHQAcwBWAGUAcgBzAGkAbwBuACAAMQAuADAAQwBvAG4AdABhAGMAdABzAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBAgEDAQQABHVzZXIKY2hhdC0wMS13ZgAAAA==) format('truetype');\\n    font-weight: normal;\\n    font-style: normal;\\n}\\n.avatar-types .people,\\n.avatar-types .e-people {\\n    font-family: 'Contacts';\\n}\\n.avatar-types .e-people:before {\\n    content: '\\\\e700';\\n}\\n.avatar-types .e-avatar .e-people.icons {\\n    font-size: 24px;\\n}\\n\\n/* Custom Avatar Background Color */\\n.avatar-types .e-avatar.custom {\\n    background-color: blueviolet;\\n}\\n.tailwind .avatar-types .e-avatar.custom {\\n    color: white;\\n}\\n.bootstrap4 .avatar-types .e-avatar.custom {\\n    background-color: #cfd5ff;\\n}\\n.bootstrap4 .avatar-types .e-avatar .chrome {\\n    background: transparent url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23666666' d='M16.033 11.049a5.155 5.155 0 1 1 0 10.312 5.156 5.156 0 0 1 0-10.312zM16.124 0c1.281-.003 9.659.318 14.268 9.043h-.016l.01.018c.33.578 3.745 6.94-.485 14.969 0 0-4.215 8.107-14.565 7.968l-.452-.012-.004.007-.004.007.02-.037c.564-.98 5.112-8.884 6.357-11.067l.016-.028.007-.008.04-.069.11-.127a7.085 7.085 0 0 0 1.457-2.967l.01-.046.035-.151c.088-.424.148-.944.128-1.549l-.006-.117v-.004l-.007-.143-.006-.07-.005-.079-.012-.116v-.01l-.001-.008-.016-.158a7.2 7.2 0 0 0-.096-.572l-.018-.081-.013-.064a9.801 9.801 0 0 0-.692-2.016c-.165-.243-.332-.489-.512-.733l-.142-.187 8.728-2.554s-10.538-.01-13.018-.001l.021.005H16.642l-.14-.013a7.034 7.034 0 0 0-1.132-.003l-.167.016h-.047l-.034-.001c-.193.002-1.213.045-2.492.764l-.005.003-.033.016a7.158 7.158 0 0 0-3.25 3.533l-.059.148-6.485-6.404s4.74 8.311 6.165 10.779l.065.113.023.088a7.14 7.14 0 0 0 7.777 5.118l.144-.02L14.854 32h-.027c-.667-.005-7.894-.234-12.744-7.906 0 0-4.925-7.698.37-16.573l.252-.411.001-.002C2.822 6.904 6.58.374 15.958.003c0 0 .057-.003.166-.003z'/%3E%3C/svg%3E\\\") no-repeat 100% 100%;\\n}\\nbody.bootstrap5 .e-avatar .e-people.icons{\\n    color: #ffffff;\\n}\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/avatar/types/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/avatar/types/App.vue?vue&type=template&id=3bca38ae&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/avatar/types/App.vue?vue&type=template&id=3bca38ae& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      { staticClass: \"col-lg-12 control-section avatar-types\" },\n      [\n        _c(\"div\", { staticClass: \"sample_container\" }, [\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"e-avatar e-avatar-xlarge e-avatar-circle\" },\n                  [\n                    _c(\"img\", {\n                      staticClass: \"image\",\n                      attrs: {\n                        src: __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/pic01.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),\n                        alt: \"avatar\"\n                      }\n                    })\n                  ]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", [_vm._v(\"Image\")])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"e-avatar e-avatar-xlarge e-avatar-circle\" },\n                  [_c(\"div\", { staticClass: \"svg_icons chrome\" })]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", [_vm._v(\"SVG\")])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"e-avatar e-avatar-xlarge e-avatar-circle\" },\n                  [_vm._v(\"GR\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", [_vm._v(\"Initial\")])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"e-avatar e-avatar-xlarge e-avatar-circle\" },\n                  [_c(\"div\", { staticClass: \"e-people icons\" })]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", [_vm._v(\"Font Icon\")])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\n                  \"div\",\n                  { staticClass: \"e-avatar e-avatar-xlarge e-avatar-circle\" },\n                  [_vm._v(\"User\")]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", [_vm._v(\"Word\")])\n              ])\n            ])\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"avatar-block\" }, [\n            _c(\"div\", { staticClass: \"e-card e-avatar-showcase\" }, [\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\n                  \"div\",\n                  {\n                    staticClass:\n                      \"e-avatar e-avatar-xlarge e-avatar-circle custom\"\n                  },\n                  [_c(\"div\", { staticClass: \"e-people icons\" })]\n                )\n              ]),\n              _vm._v(\" \"),\n              _c(\"div\", { staticClass: \"e-card-content\" }, [\n                _c(\"div\", [_vm._v(\"Custom\")])\n              ])\n            ])\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"action-description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"This sample demonstrates the different types of content that are used with avatar component like SVG icons, Font icons,\\n        words, letters, and images.\"\n            )\n          ])\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"The avatar component is flexible to support various types of icons and images. In this sample, the content like SVG,\\n            font icons, and letters will be wrapped by the avatar element.\\n        \"\n            )\n          ])\n        ])\n      ]\n    )\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/avatar/types/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });