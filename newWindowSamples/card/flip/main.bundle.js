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
/******/ 		"card/flip/main": 0
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
/******/ 	deferredModules.push(["./Samples/card/flip/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/card/flip/App.vue":
/*!***********************************!*\
  !*** ./Samples/card/flip/App.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_3380c53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3380c53a&scoped=true& */ \"./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/card/flip/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& */ \"./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_3380c53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_3380c53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3380c53a\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/card/flip/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?");

/***/ }),

/***/ "./Samples/card/flip/App.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./Samples/card/flip/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?");

/***/ }),

/***/ "./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?");

/***/ }),

/***/ "./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true&":
/*!******************************************************************************!*\
  !*** ./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3380c53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3380c53a&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3380c53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3380c53a_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?");

/***/ }),

/***/ "./Samples/card/flip/images/creative_flip.png":
/*!****************************************************!*\
  !*** ./Samples/card/flip/images/creative_flip.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/card/images/creative_flip.png\";\n\n//# sourceURL=webpack:///./Samples/card/flip/images/creative_flip.png?");

/***/ }),

/***/ "./Samples/card/flip/images/vertical_img.png":
/*!***************************************************!*\
  !*** ./Samples/card/flip/images/vertical_img.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/card/images/vertical_img.png\";\n\n//# sourceURL=webpack:///./Samples/card/flip/images/vertical_img.png?");

/***/ }),

/***/ "./Samples/card/flip/main.js":
/*!***********************************!*\
  !*** ./Samples/card/flip/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/card/flip/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/card/flip/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.fabric .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover,\\n.highcontrast .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover {\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    color: #000;\\n}\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a] {\\n    color: #fff;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-caption[data-v-3380c53a] {\\n    margin-right: 15px;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-left[data-v-3380c53a] {\\n    margin-left: 20px;\\n    padding-left: 0;\\n    width: 50%;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-header-image[data-v-3380c53a] {\\n    background-image: url(\" + escape(__webpack_require__(/*! ./images/creative_flip.png */ \"./Samples/card/flip/images/creative_flip.png\")) + \");\\n    background-size: cover;\\n    height: 75px;\\n    width: 75px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    text-align: center;\\n    background-size: cover;\\n    min-height: 300px;\\n    justify-content: flex-end;\\n}\\n.e-bigger .bootstrap5 .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a], \\n.e-bigger .bootstrap5 .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a],\\n.e-bigger .bootstrap5-dark .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a], \\n.e-bigger .bootstrap5-dark .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    height: 350px;\\n}\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    height: 314px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_profile.e-card[data-v-3380c53a] {\\n    background-image: url(\" + escape(__webpack_require__(/*! ./images/vertical_img.png */ \"./Samples/card/flip/images/vertical_img.png\")) + \");\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card.e-flipped[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card.e-flipped[data-v-3380c53a] {\\n    background-image: none;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions[data-v-3380c53a] {\\n    justify-content: center;\\n    padding-bottom: 40px;\\n    padding-top: 22px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    background-color: transparent;\\n    text-transform: none;\\n    border: none;\\n}\\n.highcontrast .card-control-section.flip_card_layout .e-card-header .e-card-header-image[data-v-3380c53a] {\\n    border: none;\\n}\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front .e-card-header[data-v-3380c53a]:first-child {\\n    padding-bottom: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n    position: absolute;\\n    top: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    top: 45px;\\n    text-align: left;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n    width: 100%;\\n    padding: 10px;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n    margin: auto;\\n    max-width: 400px;\\n}\\n@media (min-width: 870px) {\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n        width: 50%;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n        max-width: 870px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/youts-vue-samples_release_22.1.1/Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;IAEI,kBAAkB;IAClB,aAAa;CAChB;AACD;;;;IAII,YAAY;CACf;AACD;;IAEI,YAAY;CACf;AACD;;IAEI,mBAAmB;CACtB;AACD;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;CACd;AACD;;IAEI,gDAAoD;IACpD,uBAAuB;IACvB,aAAa;IACb,YAAY;CACf;AACD;;IAEI,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,0BAA0B;CAC7B;AACD;;;;IAII,cAAc;CACjB;AACD;;IAEI,cAAc;CACjB;AACD;;IAEI,gDAAmD;CACtD;AACD;;IAEI,uBAAuB;CAC1B;AACD;;IAEI,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;CACrB;AACD;;IAEI,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;CAChB;AACD;IACI,aAAa;CAChB;AACD;;;IAGI,4BAA4B;IAC5B,oCAAoC;IACpC,6BAA6B;IAC7B,+BAA+B;IAC/B,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,aAAa;IACb,YAAY;CACf;AACD;IACI,kBAAkB;CACrB;AACD;;;IAGI,4BAA4B;IAC5B,oCAAoC;IACpC,6BAA6B;IAC7B,+BAA+B;IAC/B,iBAAiB;IACjB,mBAAmB;IACnB,OAAO;CACV;AACD;;;IAGI,sBAAsB;CACzB;AACD;IACI,UAAU;IACV,iBAAiB;CACpB;AACD;;IAEI,2BAA2B;CAC9B;AACD;;;IAGI,2BAA2B;CAC9B;AACD;;IAEI,sBAAsB;CACzB;AACD;IACI,YAAY;IACZ,cAAc;CACjB;AACD;IACI,aAAa;IACb,iBAAiB;CACpB;AACD;AACA;QACQ,WAAW;CAClB;AACD;QACQ,iBAAiB;CACxB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.fabric .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover,\\n.highcontrast .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover {\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    color: #000;\\n}\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a] {\\n    color: #fff;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-caption[data-v-3380c53a] {\\n    margin-right: 15px;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-left[data-v-3380c53a] {\\n    margin-left: 20px;\\n    padding-left: 0;\\n    width: 50%;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-header-image[data-v-3380c53a] {\\n    background-image: url('./images/creative_flip.png');\\n    background-size: cover;\\n    height: 75px;\\n    width: 75px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    text-align: center;\\n    background-size: cover;\\n    min-height: 300px;\\n    justify-content: flex-end;\\n}\\n.e-bigger .bootstrap5 .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a], \\n.e-bigger .bootstrap5 .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a],\\n.e-bigger .bootstrap5-dark .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a], \\n.e-bigger .bootstrap5-dark .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    height: 350px;\\n}\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    height: 314px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_profile.e-card[data-v-3380c53a] {\\n    background-image: url('./images/vertical_img.png');\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card.e-flipped[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card.e-flipped[data-v-3380c53a] {\\n    background-image: none;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions[data-v-3380c53a] {\\n    justify-content: center;\\n    padding-bottom: 40px;\\n    padding-top: 22px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    background-color: transparent;\\n    text-transform: none;\\n    border: none;\\n}\\n.highcontrast .card-control-section.flip_card_layout .e-card-header .e-card-header-image[data-v-3380c53a] {\\n    border: none;\\n}\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front .e-card-header[data-v-3380c53a]:first-child {\\n    padding-bottom: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n    position: absolute;\\n    top: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    top: 45px;\\n    text-align: left;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n    width: 100%;\\n    padding: 10px;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n    margin: auto;\\n    max-width: 400px;\\n}\\n@media (min-width: 870px) {\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n        width: 50%;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n        max-width: 870px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n\tmounted: function() {\n        document.getElementById('card_flip').onclick = function (e) {\n            var cardEle = e.currentTarget;\n            if (cardEle.classList.contains('e-flipped')) {\n                cardEle.classList.remove('e-flipped');\n            }\n            else {\n                cardEle.classList.add('e-flipped');\n            }\n        };\n        document.getElementById('card_flip').onblur = function (e) {\n            var cardEle = e.currentTarget;\n            cardEle.classList.remove('e-flipped');\n        };\n        document.getElementById('card_flip_profile').onclick = function (e) {\n            var cardEle = e.currentTarget;\n            if (cardEle.classList.contains('e-flipped')) {\n                cardEle.classList.remove('e-flipped');\n            }\n            else {\n                cardEle.classList.add('e-flipped');\n            }\n        };\n        document.getElementById('card_flip_profile').onblur = function (e) {\n            var cardEle = e.currentTarget;\n            cardEle.classList.remove('e-flipped');\n        };\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"div\",\n      {\n        staticClass:\n          \"col-lg-12 control-section card-control-section flip_card_layout\",\n      },\n      [\n        _c(\"div\", { staticClass: \"e-card-resize-container\" }, [\n          _c(\"div\", { staticClass: \"row\" }, [\n            _c(\"div\", { staticClass: \"row card-layout\" }, [\n              _c(\n                \"div\",\n                { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"e-card e-business e-flip\",\n                      attrs: {\n                        tabindex: \"0\",\n                        id: \"card_flip\",\n                        title: \"Click to flip the Card\",\n                      },\n                    },\n                    [\n                      _c(\"div\", { staticClass: \"e-card-header e-front\" }, [\n                        _c(\"div\", { staticClass: \"e-card-header-caption\" }, [\n                          _c(\"div\", { staticClass: \"e-card-header-title\" }, [\n                            _vm._v(\"Mayumi Ohno\"),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"div\", { staticClass: \"e-card-sub-title\" }, [\n                            _vm._v(\"Marketing Representative\"),\n                          ]),\n                        ]),\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"div\", { staticClass: \"e-card-actions e-front\" }, [\n                        _c(\"button\", { staticClass: \"e-card-btn\" }, [\n                          _c(\"div\", { staticClass: \"e-email e-card-btn-txt\" }, [\n                            _vm._v(\"mayum@mail.com\"),\n                          ]),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"button\", { staticClass: \"e-card-btn\" }, [\n                          _c(\"div\", { staticClass: \"e-email e-card-btn-txt\" }, [\n                            _vm._v(\"011-232-221\"),\n                          ]),\n                        ]),\n                        _vm._v(\" \"),\n                        _c(\"button\", { staticClass: \"e-card-btn\" }, [\n                          _c(\"div\", { staticClass: \"e-email e-card-btn-txt\" }, [\n                            _vm._v(\"www.mayum.com\"),\n                          ]),\n                        ]),\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"div\", { staticClass: \"e-card-header e-back\" }, [\n                        _c(\"div\", { staticClass: \"e-card-header-caption\" }, [\n                          _c(\"div\", { staticClass: \"e-card-header-title\" }, [\n                            _vm._v(\"Address\"),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"div\", { staticClass: \"e-card-sub-title\" }, [\n                            _vm._v(\n                              \"P.O. Box 78934\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\n                              \" New Orleans\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\n                              \"Los Angeles\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\n                              \" Postal Code: 70117\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\" USA\"),\n                          ]),\n                        ]),\n                      ]),\n                    ]\n                  ),\n                ]\n              ),\n              _vm._v(\" \"),\n              _c(\n                \"div\",\n                { staticClass: \"col-xs-6 col-sm-6 col-lg-6 col-md-6\" },\n                [\n                  _c(\n                    \"div\",\n                    {\n                      staticClass: \"e-card e-business e-flip\",\n                      attrs: {\n                        tabindex: \"0\",\n                        id: \"card_flip_profile\",\n                        title: \"Click to flip the Card\",\n                      },\n                    },\n                    [\n                      _c(\"div\", { staticClass: \"e-card-header e-back\" }, [\n                        _c(\"div\", { staticClass: \"e-card-header-caption\" }, [\n                          _c(\"div\", { staticClass: \"e-card-header-title\" }, [\n                            _vm._v(\"Address\"),\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\"div\", { staticClass: \"e-card-sub-title\" }, [\n                            _vm._v(\n                              \"970 Drummond Street\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\n                              \" New York\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\n                              \"New Jersey\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\n                              \" Postal Code: 07102\\n                                    \"\n                            ),\n                            _c(\"br\"),\n                            _vm._v(\" USA\\n                                \"),\n                          ]),\n                        ]),\n                      ]),\n                      _vm._v(\" \"),\n                      _c(\"div\", { staticClass: \"e-card-front e-front\" }, [\n                        _c(\n                          \"div\",\n                          {\n                            staticClass: \"e-card-header e-card-right\",\n                            staticStyle: { \"justify-content\": \"flex-end\" },\n                          },\n                          [_c(\"div\", { staticClass: \"e-card-header-image\" })]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticClass: \"e-card-header e-card-right\",\n                            staticStyle: { \"text-align\": \"right\" },\n                          },\n                          [\n                            _c(\n                              \"div\",\n                              { staticClass: \"e-card-header-caption\" },\n                              [\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"e-card-header-title\" },\n                                  [_vm._v(\"Creative One\")]\n                                ),\n                              ]\n                            ),\n                          ]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticClass: \"e-card-header e-card-left\",\n                            staticStyle: { \"text-align\": \"left\" },\n                          },\n                          [\n                            _c(\n                              \"div\",\n                              { staticClass: \"e-card-header-caption\" },\n                              [\n                                _c(\n                                  \"div\",\n                                  { staticClass: \"e-card-header-title\" },\n                                  [_vm._v(\"John Doe\")]\n                                ),\n                                _vm._v(\" \"),\n                                _c(\"div\", { staticClass: \"e-card-sub-title\" }, [\n                                  _vm._v(\"Architecture\"),\n                                ]),\n                              ]\n                            ),\n                          ]\n                        ),\n                        _vm._v(\" \"),\n                        _c(\"div\", {\n                          staticClass: \"e-card-separator e-card-left\",\n                        }),\n                        _vm._v(\" \"),\n                        _c(\n                          \"div\",\n                          {\n                            staticClass: \"e-card-content e-card-left\",\n                            staticStyle: { \"text-align\": \"left\" },\n                          },\n                          [\n                            _c(\"table\", [\n                              _c(\"tbody\", [\n                                _c(\"tr\", [\n                                  _c(\"td\", [_vm._v(\"johndoe@mail.com\")]),\n                                ]),\n                                _vm._v(\" \"),\n                                _c(\"tr\", [_c(\"td\", [_vm._v(\"011-141-221\")])]),\n                                _vm._v(\" \"),\n                                _c(\"tr\", [\n                                  _c(\"td\", [_vm._v(\"www.johndoe.com\")]),\n                                ]),\n                              ]),\n                            ]),\n                          ]\n                        ),\n                      ]),\n                    ]\n                  ),\n                ]\n              ),\n            ]),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"action-description\" } }, [\n          _c(\"p\", [\n            _vm._v(\"This sample demonstrates to flip(rotate) the \"),\n            _c(\"code\", [_vm._v(\"card\")]),\n            _vm._v(\n              \" to show hidden information which is on back side of the card by clicking or focus-out of it.\"\n            ),\n          ]),\n        ]),\n        _vm._v(\" \"),\n        _c(\"div\", { attrs: { id: \"description\" } }, [\n          _c(\"p\", [\n            _vm._v(\n              \"Cards in this sample have a hidden content within the DOM (Document Object Model), which is set behind the visible card. On the click action handler of front card, the back-side content is shown with a flip animation.\"\n            ),\n          ]),\n          _vm._v(\" \"),\n          _c(\"p\", [\n            _vm._v(\"More information about Card can be found in this\"),\n            _c(\n              \"a\",\n              {\n                attrs: {\n                  href: \"https://ej2.syncfusion.com/vue/documentation/card/getting-started/\",\n                  target: \"_blank\",\n                },\n              },\n              [_vm._v(\" documentation\")]\n            ),\n            _vm._v(\" section.\"),\n          ]),\n        ]),\n      ]\n    )\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"99013c48\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });