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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_3380c53a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?");

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
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.fabric .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover,\\n.highcontrast .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover {\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    color: #000;\\n}\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a] {\\n    color: #fff;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-caption[data-v-3380c53a] {\\n    margin-right: 15px;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-left[data-v-3380c53a] {\\n    margin-left: 20px;\\n    padding-left: 0;\\n    width: 50%;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-header-image[data-v-3380c53a] {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/creative_flip.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n    background-size: cover;\\n    height: 75px;\\n    width: 75px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    text-align: center;\\n    background-size: cover;\\n    min-height: 300px;\\n    justify-content: flex-end;\\n}\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    height: 314px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_profile.e-card[data-v-3380c53a] {\\n    background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/vertical_img.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card.e-flipped[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card.e-flipped[data-v-3380c53a] {\\n    background-image: none;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions[data-v-3380c53a] {\\n    justify-content: center;\\n    padding-bottom: 40px;\\n    padding-top: 22px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    background-color: transparent;\\n    text-transform: none;\\n    border: none;\\n}\\n.highcontrast .card-control-section.flip_card_layout .e-card-header .e-card-header-image[data-v-3380c53a] {\\n    border: none;\\n}\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front .e-card-header[data-v-3380c53a]:first-child {\\n    padding-bottom: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n    position: absolute;\\n    top: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    top: 45px;\\n    text-align: left;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n    width: 100%;\\n    padding: 10px;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n    margin: auto;\\n    max-width: 400px;\\n}\\n@media (min-width: 870px) {\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n        width: 50%;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n        max-width: 870px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ue-samples_release_19.4.0.1-XPLX5WQZDQ5BV5J3TMCR6EI5PERYQWRPKZEYEPVTR6R6YMYILOXQ/Samples/card/flip/App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;;IAEI,kBAAkB;IAClB,aAAa;CAChB;AACD;;;;;;IAMI,YAAY;CACf;AACD;;IAEI,YAAY;CACf;AACD;;IAEI,mBAAmB;CACtB;AACD;IACI,kBAAkB;IAClB,gBAAgB;IAChB,WAAW;CACd;AACD;;IAEI,gDAAoD;IACpD,uBAAuB;IACvB,aAAa;IACb,YAAY;CACf;AACD;;IAEI,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,0BAA0B;CAC7B;AACD;;IAEI,cAAc;CACjB;AACD;;IAEI,gDAAmD;CACtD;AACD;;IAEI,uBAAuB;CAC1B;AACD;;IAEI,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;CACrB;AACD;;IAEI,8BAA8B;IAC9B,qBAAqB;IACrB,aAAa;CAChB;AACD;IACI,aAAa;CAChB;AACD;;;IAGI,4BAA4B;IAC5B,oCAAoC;IACpC,6BAA6B;IAC7B,+BAA+B;IAC/B,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,aAAa;IACb,YAAY;CACf;AACD;IACI,kBAAkB;CACrB;AACD;;;IAGI,4BAA4B;IAC5B,oCAAoC;IACpC,6BAA6B;IAC7B,+BAA+B;IAC/B,iBAAiB;IACjB,mBAAmB;IACnB,OAAO;CACV;AACD;;;IAGI,sBAAsB;CACzB;AACD;IACI,UAAU;IACV,iBAAiB;CACpB;AACD;;IAEI,2BAA2B;CAC9B;AACD;;;IAGI,2BAA2B;CAC9B;AACD;;IAEI,sBAAsB;CACzB;AACD;IACI,YAAY;IACZ,cAAc;CACjB;AACD;IACI,aAAa;IACb,iBAAiB;CACpB;AACD;AACA;QACQ,WAAW;CAClB;AACD;QACQ,iBAAiB;CACxB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=3380c53a&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.fabric .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover,\\n.highcontrast .card-control-section.flip_card_layout .e-card[data-v-3380c53a]:hover {\\n    border-width: 1px;\\n    padding: 1px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    color: #000;\\n}\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-header-title[data-v-3380c53a],\\n.highcontrast .card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-front.e-front .e-card-header-caption .e-card-sub-title[data-v-3380c53a] {\\n    color: #fff;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-right .e-card-header-caption[data-v-3380c53a] {\\n    margin-right: 15px;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-front .e-card-left[data-v-3380c53a] {\\n    margin-left: 20px;\\n    padding-left: 0;\\n    width: 50%;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-header-image[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-header-image[data-v-3380c53a] {\\n    background-image: url('./images/creative_flip.png');\\n    background-size: cover;\\n    height: 75px;\\n    width: 75px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    text-align: center;\\n    background-size: cover;\\n    min-height: 300px;\\n    justify-content: flex-end;\\n}\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.tailwind-dark .card-control-section.flip_card_layout #card_flip_profile.e-card[data-v-3380c53a] {\\n    height: 314px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_profile.e-card[data-v-3380c53a] {\\n    background-image: url('./images/vertical_img.png');\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card.e-flipped[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card.e-flipped[data-v-3380c53a] {\\n    background-image: none;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions[data-v-3380c53a] {\\n    justify-content: center;\\n    padding-bottom: 40px;\\n    padding-top: 22px;\\n}\\n.card-control-section.flip_card_layout #card_flip.e-card .e-card-actions button[data-v-3380c53a],\\n.card-control-section.flip_card_layout #card_flip_profile.e-card .e-card-actions button[data-v-3380c53a] {\\n    background-color: transparent;\\n    text-transform: none;\\n    border: none;\\n}\\n.highcontrast .card-control-section.flip_card_layout .e-card-header .e-card-header-image[data-v-3380c53a] {\\n    border: none;\\n}\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    display: block;\\n    height: 100%;\\n    width: 100%;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front .e-card-header[data-v-3380c53a]:first-child {\\n    padding-bottom: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a] {\\n    backface-visibility: hidden;\\n    -webkit-backface-visibility: hidden;\\n    transform-style: preserve-3d;\\n    transition: all 1s ease-in-out;\\n    overflow: hidden;\\n    position: absolute;\\n    top: 0;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    top: 45px;\\n    text-align: left;\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip .e-back[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-header.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-front.e-front[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-card-actions.e-front[data-v-3380c53a] {\\n    transform: rotateX(180deg);\\n}\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a],\\n.card-control-section.flip_card_layout .e-card.e-business.e-flip.e-flipped .e-back[data-v-3380c53a] {\\n    transform: rotateX(0);\\n}\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n    width: 100%;\\n    padding: 10px;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n    margin: auto;\\n    max-width: 400px;\\n}\\n@media (min-width: 870px) {\\n.card-control-section.flip_card_layout .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-3380c53a] {\\n        width: 50%;\\n}\\n.card-control-section.flip_card_layout .card-layout[data-v-3380c53a] {\\n        max-width: 870px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n\tmounted: function() {\n        document.getElementById('card_flip').onclick = function (e) {\n            var cardEle = e.currentTarget;\n            if (cardEle.classList.contains('e-flipped')) {\n                cardEle.classList.remove('e-flipped');\n            }\n            else {\n                cardEle.classList.add('e-flipped');\n            }\n        };\n        document.getElementById('card_flip').onblur = function (e) {\n            var cardEle = e.currentTarget;\n            cardEle.classList.remove('e-flipped');\n        };\n        document.getElementById('card_flip_profile').onclick = function (e) {\n            var cardEle = e.currentTarget;\n            if (cardEle.classList.contains('e-flipped')) {\n                cardEle.classList.remove('e-flipped');\n            }\n            else {\n                cardEle.classList.add('e-flipped');\n            }\n        };\n        document.getElementById('card_flip_profile').onblur = function (e) {\n            var cardEle = e.currentTarget;\n            cardEle.classList.remove('e-flipped');\n        };\n    }\n}));\n\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/flip/App.vue?vue&type=template&id=3380c53a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"col-lg-12 control-section card-control-section flip_card_layout\"},[_c('div',{staticClass:\"e-card-resize-container\"},[_c('div',{staticClass:\"row\"},[_c('div',{staticClass:\"row card-layout\"},[_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6\"},[_c('div',{staticClass:\"e-card e-business e-flip\",attrs:{\"tabindex\":\"0\",\"id\":\"card_flip\",\"title\":\"Click to flip the Card\"}},[_c('div',{staticClass:\"e-card-header e-front\"},[_c('div',{staticClass:\"e-card-header-caption\"},[_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(\"Mayumi Ohno\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-sub-title\"},[_vm._v(\"Marketing Representative\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-actions e-front\"},[_c('button',{staticClass:\"e-card-btn\"},[_c('div',{staticClass:\"e-email e-card-btn-txt\"},[_vm._v(\"mayum@mail.com\")])]),_vm._v(\" \"),_c('button',{staticClass:\"e-card-btn\"},[_c('div',{staticClass:\"e-email e-card-btn-txt\"},[_vm._v(\"011-232-221\")])]),_vm._v(\" \"),_c('button',{staticClass:\"e-card-btn\"},[_c('div',{staticClass:\"e-email e-card-btn-txt\"},[_vm._v(\"www.mayum.com\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-header e-back\"},[_c('div',{staticClass:\"e-card-header-caption\"},[_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(\"Address\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-sub-title\"},[_vm._v(\"P.O. Box 78934\\n                                    \"),_c('br'),_vm._v(\" New Orleans\\n                                    \"),_c('br'),_vm._v(\"Los Angeles\\n                                    \"),_c('br'),_vm._v(\" Postal Code: 70117\\n                                    \"),_c('br'),_vm._v(\" USA\")])])])])]),_vm._v(\" \"),_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6\"},[_c('div',{staticClass:\"e-card e-business e-flip\",attrs:{\"tabindex\":\"0\",\"id\":\"card_flip_profile\",\"title\":\"Click to flip the Card\"}},[_c('div',{staticClass:\"e-card-header e-back\"},[_c('div',{staticClass:\"e-card-header-caption\"},[_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(\"Address\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-sub-title\"},[_vm._v(\"970 Drummond Street\\n                                    \"),_c('br'),_vm._v(\" New York\\n                                    \"),_c('br'),_vm._v(\"New Jersey\\n                                    \"),_c('br'),_vm._v(\" Postal Code: 07102\\n                                    \"),_c('br'),_vm._v(\" USA\\n                                \")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-front e-front\"},[_c('div',{staticClass:\"e-card-header e-card-right\",staticStyle:{\"justify-content\":\"flex-end\"}},[_c('div',{staticClass:\"e-card-header-image\"})]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-header e-card-right\",staticStyle:{\"text-align\":\"right\"}},[_c('div',{staticClass:\"e-card-header-caption\"},[_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(\"Creative One\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-header e-card-left\",staticStyle:{\"text-align\":\"left\"}},[_c('div',{staticClass:\"e-card-header-caption\"},[_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(\"John Doe\")]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-sub-title\"},[_vm._v(\"Architecture\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"e-card-separator e-card-left\"}),_vm._v(\" \"),_c('div',{staticClass:\"e-card-content e-card-left\",staticStyle:{\"text-align\":\"left\"}},[_c('table',[_c('tbody',[_c('tr',[_c('td',[_vm._v(\"johndoe@mail.com\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"011-141-221\")])]),_vm._v(\" \"),_c('tr',[_c('td',[_vm._v(\"www.johndoe.com\")])])])])])])])])])])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates to flip(rotate) the \"),_c('code',[_vm._v(\"card\")]),_vm._v(\" to show hidden information which is on back side of the card by clicking or focus-out of it.\")])]),_vm._v(\" \"),_c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"Cards in this sample have a hidden content within the DOM (Document Object Model), which is set behind the visible card. On the click action handler of front card, the back-side content is shown with a flip animation.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"More information about Card can be found in this\"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/card/getting-started/\",\"target\":\"_blank\"}},[_vm._v(\" documentation\")]),_vm._v(\" section.\")])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/card/flip/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });