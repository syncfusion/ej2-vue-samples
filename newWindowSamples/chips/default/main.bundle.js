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
/******/ 		"chips/default/main": 0
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
/******/ 	deferredModules.push(["./Samples/chips/default/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/chips/default/App.vue":
/*!***************************************!*\
  !*** ./Samples/chips/default/App.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=ca4faff2& */ \"./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chips/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_ca4faff2_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=ca4faff2&lang=css& */ \"./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chips/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?");

/***/ }),

/***/ "./Samples/chips/default/App.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./Samples/chips/default/App.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?");

/***/ }),

/***/ "./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&":
/*!************************************************************************************!*\
  !*** ./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ca4faff2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=ca4faff2&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ca4faff2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ca4faff2_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ca4faff2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_ref_4_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_ca4faff2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?");

/***/ }),

/***/ "./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2&":
/*!**********************************************************************!*\
  !*** ./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=ca4faff2& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?");

/***/ }),

/***/ "./Samples/chips/default/images/andrew.png":
/*!*************************************************!*\
  !*** ./Samples/chips/default/images/andrew.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/chips/images/andrew.png\";\n\n//# sourceURL=webpack:///./Samples/chips/default/images/andrew.png?");

/***/ }),

/***/ "./Samples/chips/default/images/anne.png":
/*!***********************************************!*\
  !*** ./Samples/chips/default/images/anne.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/chips/images/anne.png\";\n\n//# sourceURL=webpack:///./Samples/chips/default/images/anne.png?");

/***/ }),

/***/ "./Samples/chips/default/images/janet.png":
/*!************************************************!*\
  !*** ./Samples/chips/default/images/janet.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/chips/images/janet.png\";\n\n//# sourceURL=webpack:///./Samples/chips/default/images/janet.png?");

/***/ }),

/***/ "./Samples/chips/default/images/laura.png":
/*!************************************************!*\
  !*** ./Samples/chips/default/images/laura.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/chips/images/laura.png\";\n\n//# sourceURL=webpack:///./Samples/chips/default/images/laura.png?");

/***/ }),

/***/ "./Samples/chips/default/images/margaret.png":
/*!***************************************************!*\
  !*** ./Samples/chips/default/images/margaret.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/chips/images/margaret.png\";\n\n//# sourceURL=webpack:///./Samples/chips/default/images/margaret.png?");

/***/ }),

/***/ "./Samples/chips/default/images/michael.png":
/*!**************************************************!*\
  !*** ./Samples/chips/default/images/michael.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"./../../source/chips/images/michael.png\";\n\n//# sourceURL=webpack:///./Samples/chips/default/images/michael.png?");

/***/ }),

/***/ "./Samples/chips/default/main.js":
/*!***************************************!*\
  !*** ./Samples/chips/default/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chips/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chips/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.chip-default #chip-default-wrapper .sample-padding {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.chip-default .chips-headers {\\n  font-size: 12px;\\n  text-align: center;\\n  padding-top: 10px;\\n}\\n\\n/* chips samples icons */\\n.chip-default #chip-choice .e-chip .e-chip-icon {\\n  font-family: \\\"e-chips-icons\\\";\\n}\\n.chip-default #chip-choice .text::before {\\n  content: \\\"\\\\E701\\\";\\n}\\n.chip-default #chip-choice .mail::before {\\n  content: \\\"\\\\E700\\\";\\n}\\n.chip-default #chip-choice .alarm::before {\\n  content: \\\"\\\\E704\\\";\\n}\\n.chip-default #chip-choice .game::before {\\n  content: \\\"\\\\E703\\\";\\n}\\n@font-face {\\n  font-family: \\\"e-chips-icons\\\";\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)\\n    format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.chip-default #chip-default-wrapper .andrew {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/andrew.png */ \"./Samples/chips/default/images/andrew.png\")) + \");\\n}\\n.chip-default #chip-default-wrapper .anne {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/anne.png */ \"./Samples/chips/default/images/anne.png\")) + \");\\n}\\n.chip-default #chip-default-wrapper .janet {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/janet.png */ \"./Samples/chips/default/images/janet.png\")) + \");\\n}\\n.chip-default #chip-default-wrapper .laura {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/laura.png */ \"./Samples/chips/default/images/laura.png\")) + \");\\n}\\n.chip-default #chip-default-wrapper .margaret {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/margaret.png */ \"./Samples/chips/default/images/margaret.png\")) + \");\\n}\\n.chip-default #chip-default-wrapper .michael {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./images/michael.png */ \"./Samples/chips/default/images/michael.png\")) + \");\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ttons-vue-samples_release_22.1.1/Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;EACd,cAAc;EACd,wBAAwB;EACxB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;CACnB;;AAED,yBAAyB;AACzB;EACE,6BAA6B;CAC9B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,6BAA6B;EAC7B;uBACqB;EACrB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gDAA6C;CAC9C;AACD;EACE,gDAA2C;CAC5C;AACD;EACE,gDAA4C;CAC7C;AACD;EACE,gDAA4C;CAC7C;AACD;EACE,gDAA+C;CAChD;AACD;EACE,gDAA8C;CAC/C\",\"file\":\"App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&\",\"sourcesContent\":[\"\\n.chip-default #chip-default-wrapper .sample-padding {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.chip-default .chips-headers {\\n  font-size: 12px;\\n  text-align: center;\\n  padding-top: 10px;\\n}\\n\\n/* chips samples icons */\\n.chip-default #chip-choice .e-chip .e-chip-icon {\\n  font-family: \\\"e-chips-icons\\\";\\n}\\n.chip-default #chip-choice .text::before {\\n  content: \\\"\\\\e701\\\";\\n}\\n.chip-default #chip-choice .mail::before {\\n  content: \\\"\\\\e700\\\";\\n}\\n.chip-default #chip-choice .alarm::before {\\n  content: \\\"\\\\e704\\\";\\n}\\n.chip-default #chip-choice .game::before {\\n  content: \\\"\\\\e703\\\";\\n}\\n@font-face {\\n  font-family: \\\"e-chips-icons\\\";\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)\\n    format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.chip-default #chip-default-wrapper .andrew {\\n  background-image: url(\\\"./images/andrew.png\\\");\\n}\\n.chip-default #chip-default-wrapper .anne {\\n  background-image: url(\\\"./images/anne.png\\\");\\n}\\n.chip-default #chip-default-wrapper .janet {\\n  background-image: url(\\\"./images/janet.png\\\");\\n}\\n.chip-default #chip-default-wrapper .laura {\\n  background-image: url(\\\"./images/laura.png\\\");\\n}\\n.chip-default #chip-default-wrapper .margaret {\\n  background-image: url(\\\"./images/margaret.png\\\");\\n}\\n.chip-default #chip-default-wrapper .michael {\\n  background-image: url(\\\"./images/michael.png\\\");\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/chips/default/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__[\"ChipListPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  data: function() {\n    return {\n      choiceSelected: [1],\n      filterSelected: [1, 3]\n    };\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"control-section chip-default\" }, [\n      _c(\"div\", { attrs: { id: \"chip-default-wrapper\" } }, [\n        _c(\"div\", { staticClass: \"chips-headers\" }, [_vm._v(\"Chips\")]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"sample-padding\" },\n          [\n            _c(\n              \"ejs-chiplist\",\n              { attrs: { id: \"chip-default\" } },\n              [\n                _c(\n                  \"e-chips\",\n                  [\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Apple\", cssClass: \"e-primary\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Microsoft\", cssClass: \"e-info\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Google\", cssClass: \"e-success\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Tesla\", cssClass: \"e-warning\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Intel\", cssClass: \"e-danger\" },\n                    }),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"separator\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"chips-headers\" }, [_vm._v(\"Input Chips\")]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"sample-padding\" },\n          [\n            _c(\n              \"ejs-chiplist\",\n              { attrs: { id: \"chip-avatar\", enableDelete: \"true\" } },\n              [\n                _c(\n                  \"e-chips\",\n                  [\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Anne\", leadingIconCss: \"anne\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Janet\", leadingIconCss: \"janet\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Laura\", leadingIconCss: \"laura\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Margaret\", leadingIconCss: \"margaret\" },\n                    }),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"separator\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"chips-headers\" }, [_vm._v(\"Filter Chips\")]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"sample-padding\" },\n          [\n            _c(\n              \"ejs-chiplist\",\n              {\n                attrs: {\n                  id: \"chip-filter\",\n                  selection: \"Multiple\",\n                  selectedChips: _vm.filterSelected,\n                },\n              },\n              [\n                _c(\n                  \"e-chips\",\n                  [\n                    _c(\"e-chip\", { attrs: { text: \"Extra small\" } }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", { attrs: { text: \"Small\" } }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", { attrs: { text: \"Medium\" } }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", { attrs: { text: \"Large\" } }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", { attrs: { text: \"Extra large\" } }),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"separator\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"chips-headers\" }, [_vm._v(\"Choice Chips\")]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { staticClass: \"sample-padding\" },\n          [\n            _c(\n              \"ejs-chiplist\",\n              {\n                attrs: {\n                  id: \"chip-choice\",\n                  selection: \"Single\",\n                  cssClass: \"e-outline\",\n                  selectedChips: _vm.choiceSelected,\n                },\n              },\n              [\n                _c(\n                  \"e-chips\",\n                  [\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Send a text\", leadingIconCss: \"text\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: {\n                        text: \"Set a reminder\",\n                        leadingIconCss: \"alarm\",\n                      },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Read my emails\", leadingIconCss: \"mail\" },\n                    }),\n                    _vm._v(\" \"),\n                    _c(\"e-chip\", {\n                      attrs: { text: \"Play a game\", leadingIconCss: \"game\" },\n                    }),\n                  ],\n                  1\n                ),\n              ],\n              1\n            ),\n          ],\n          1\n        ),\n      ]),\n    ]),\n    _vm._v(\" \"),\n    _vm._m(0),\n    _vm._v(\" \"),\n    _vm._m(1),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"action-description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"This sample demonstrates the default functionalities of Chips with different types and predefined styles. Click\\n        and interact the chip, to select single or multiple options from chips collection.\"\n        ),\n      ]),\n    ])\n  },\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { attrs: { id: \"description\" } }, [\n      _c(\"p\", [\n        _vm._v(\n          \"\\n            Chip is a small block of essential information that triggers an event on click action. It contains the text, an\\n            image, or both, mostly used in contacts, mails or filter tags.\\n        \"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"p\", [\n        _vm._v(\n          \"In this sample, default, input, filter and choice chips are demonstrated with their default functionalities.\"\n        ),\n      ]),\n      _vm._v(\" \"),\n      _c(\"ol\", [\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"Input chip\")]),\n          _vm._v(\n            \"– Basic chip with delete icon, enables to remove chips from the chip list collection.\"\n          ),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"Choice chip\")]),\n          _vm._v(\" – Used to choose a choice from available options.\"),\n        ]),\n        _vm._v(\" \"),\n        _c(\"li\", [\n          _c(\"b\", [_vm._v(\"Filter chip\")]),\n          _vm._v(\" – Used to select multiple choices from available options.\"),\n        ]),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--4-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=ca4faff2&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=style&index=0&id=ca4faff2&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"857faa86\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?./node_modules/vue-style-loader!./node_modules/css-loader??ref--4-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });