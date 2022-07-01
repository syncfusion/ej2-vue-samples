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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=ca4faff2& */ \"./Samples/chips/default/App.vue?vue&type=template&id=ca4faff2&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/chips/default/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./Samples/chips/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_ca4faff2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/chips/default/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?");

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

/***/ "./Samples/chips/default/App.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./Samples/chips/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?");

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

/***/ "./Samples/chips/default/main.js":
/*!***************************************!*\
  !*** ./Samples/chips/default/main.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/chips/default/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/chips/default/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/chips/default/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/chips/default/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.chip-default #chip-default-wrapper .sample-padding {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.chip-default .chips-headers {\\n  font-size: 12px;\\n  text-align: center;\\n  padding-top: 10px;\\n}\\n\\n/* chips samples icons */\\n.chip-default #chip-choice .e-chip .e-chip-icon {\\n  font-family: \\\"e-chips-icons\\\";\\n}\\n.chip-default #chip-choice .text::before {\\n  content: \\\"\\\\E701\\\";\\n}\\n.chip-default #chip-choice .mail::before {\\n  content: \\\"\\\\E700\\\";\\n}\\n.chip-default #chip-choice .alarm::before {\\n  content: \\\"\\\\E704\\\";\\n}\\n.chip-default #chip-choice .game::before {\\n  content: \\\"\\\\E703\\\";\\n}\\n@font-face {\\n  font-family: \\\"e-chips-icons\\\";\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)\\n    format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.chip-default #chip-default-wrapper .andrew {\\n  background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/andrew.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.chip-default #chip-default-wrapper .anne {\\n  background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/anne.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.chip-default #chip-default-wrapper .janet {\\n  background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/janet.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.chip-default #chip-default-wrapper .laura {\\n  background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/laura.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.chip-default #chip-default-wrapper .margaret {\\n  background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/margaret.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n.chip-default #chip-default-wrapper .michael {\\n  background-image: url(\" + escape(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './images/michael.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))) + \");\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/ons-vue-samples_development-UDAGPCRNLTILYSN4WYIMIAYZXMYTIQ3Y3UOVDEN2RPUSCXQ57QJA/Samples/chips/default/App.vue?vue&type=style&index=0&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,cAAc;EACd,cAAc;EACd,wBAAwB;EACxB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;CACnB;;AAED,yBAAyB;AACzB;EACE,6BAA6B;CAC9B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,6BAA6B;EAC7B;uBACqB;EACrB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,gDAA6C;CAC9C;AACD;EACE,gDAA2C;CAC5C;AACD;EACE,gDAA4C;CAC7C;AACD;EACE,gDAA4C;CAC7C;AACD;EACE,gDAA+C;CAChD;AACD;EACE,gDAA8C;CAC/C\",\"file\":\"App.vue?vue&type=style&index=0&lang=css&\",\"sourcesContent\":[\"\\n.chip-default #chip-default-wrapper .sample-padding {\\n  padding: 10px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.chip-default .chips-headers {\\n  font-size: 12px;\\n  text-align: center;\\n  padding-top: 10px;\\n}\\n\\n/* chips samples icons */\\n.chip-default #chip-choice .e-chip .e-chip-icon {\\n  font-family: \\\"e-chips-icons\\\";\\n}\\n.chip-default #chip-choice .text::before {\\n  content: \\\"\\\\e701\\\";\\n}\\n.chip-default #chip-choice .mail::before {\\n  content: \\\"\\\\e700\\\";\\n}\\n.chip-default #chip-choice .alarm::before {\\n  content: \\\"\\\\e704\\\";\\n}\\n.chip-default #chip-choice .game::before {\\n  content: \\\"\\\\e703\\\";\\n}\\n@font-face {\\n  font-family: \\\"e-chips-icons\\\";\\n  src: url(data:application/x-font-ttf;charset=utf-8;base64,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)\\n    format(\\\"truetype\\\");\\n  font-weight: normal;\\n  font-style: normal;\\n}\\n.chip-default #chip-default-wrapper .andrew {\\n  background-image: url(\\\"./images/andrew.png\\\");\\n}\\n.chip-default #chip-default-wrapper .anne {\\n  background-image: url(\\\"./images/anne.png\\\");\\n}\\n.chip-default #chip-default-wrapper .janet {\\n  background-image: url(\\\"./images/janet.png\\\");\\n}\\n.chip-default #chip-default-wrapper .laura {\\n  background-image: url(\\\"./images/laura.png\\\");\\n}\\n.chip-default #chip-default-wrapper .margaret {\\n  background-image: url(\\\"./images/margaret.png\\\");\\n}\\n.chip-default #chip-default-wrapper .michael {\\n  background-image: url(\\\"./images/michael.png\\\");\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:\"control-section chip-default\"},[_c('div',{attrs:{\"id\":\"chip-default-wrapper\"}},[_c('div',{staticClass:\"chips-headers\"},[_vm._v(\"Chips\")]),_vm._v(\" \"),_c('div',{staticClass:\"sample-padding\"},[_c('ejs-chiplist',{attrs:{\"id\":\"chip-default\"}},[_c('e-chips',[_c('e-chip',{attrs:{\"text\":\"Apple\",\"cssClass\":\"e-primary\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Microsoft\",\"cssClass\":\"e-info\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Google\",\"cssClass\":\"e-success\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Tesla\",\"cssClass\":\"e-warning\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Intel\",\"cssClass\":\"e-danger\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{staticClass:\"separator\"}),_vm._v(\" \"),_c('div',{staticClass:\"chips-headers\"},[_vm._v(\"Input Chips\")]),_vm._v(\" \"),_c('div',{staticClass:\"sample-padding\"},[_c('ejs-chiplist',{attrs:{\"id\":\"chip-avatar\",\"enableDelete\":\"true\"}},[_c('e-chips',[_c('e-chip',{attrs:{\"text\":\"Anne\",\"leadingIconCss\":\"anne\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Janet\",\"leadingIconCss\":\"janet\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Laura\",\"leadingIconCss\":\"laura\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Margaret\",\"leadingIconCss\":\"margaret\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{staticClass:\"separator\"}),_vm._v(\" \"),_c('div',{staticClass:\"chips-headers\"},[_vm._v(\"Filter Chips\")]),_vm._v(\" \"),_c('div',{staticClass:\"sample-padding\"},[_c('ejs-chiplist',{attrs:{\"id\":\"chip-filter\",\"selection\":\"Multiple\",\"selectedChips\":_vm.filterSelected}},[_c('e-chips',[_c('e-chip',{attrs:{\"text\":\"Extra small\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Small\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Medium\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Large\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Extra large\"}})],1)],1)],1),_vm._v(\" \"),_c('div',{staticClass:\"separator\"}),_vm._v(\" \"),_c('div',{staticClass:\"chips-headers\"},[_vm._v(\"Choice Chips\")]),_vm._v(\" \"),_c('div',{staticClass:\"sample-padding\"},[_c('ejs-chiplist',{attrs:{\"id\":\"chip-choice\",\"selection\":\"Single\",\"cssClass\":\"e-outline\",\"selectedChips\":_vm.choiceSelected}},[_c('e-chips',[_c('e-chip',{attrs:{\"text\":\"Send a text\",\"leadingIconCss\":\"text\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Set a reminder\",\"leadingIconCss\":\"alarm\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Read my emails\",\"leadingIconCss\":\"mail\"}}),_vm._v(\" \"),_c('e-chip',{attrs:{\"text\":\"Play a game\",\"leadingIconCss\":\"game\"}})],1)],1)],1)])]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates the default functionalities of Chips with different types and predefined styles. Click\\n        and interact the chip, to select single or multiple options from chips collection.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"\\n            Chip is a small block of essential information that triggers an event on click action. It contains the text, an\\n            image, or both, mostly used in contacts, mails or filter tags.\\n        \")]),_vm._v(\" \"),_c('p',[_vm._v(\"In this sample, default, input, filter and choice chips are demonstrated with their default functionalities.\")]),_vm._v(\" \"),_c('ol',[_c('li',[_c('b',[_vm._v(\"Input chip\")]),_vm._v(\"– Basic chip with delete icon, enables to remove chips from the chip list collection.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Choice chip\")]),_vm._v(\" – Used to choose a choice from available options.\")]),_vm._v(\" \"),_c('li',[_c('b',[_vm._v(\"Filter chip\")]),_vm._v(\" – Used to select multiple choices from available options.\")])])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/chips/default/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });