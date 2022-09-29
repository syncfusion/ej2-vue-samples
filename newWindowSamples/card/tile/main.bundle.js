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
/******/ 		"card/tile/main": 0
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
/******/ 	deferredModules.push(["./Samples/card/tile/main.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Samples/card/tile/App.vue":
/*!***********************************!*\
  !*** ./Samples/card/tile/App.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_5e75467b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=5e75467b&scoped=true& */ \"./Samples/card/tile/App.vue?vue&type=template&id=5e75467b&scoped=true&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./Samples/card/tile/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_5e75467b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css& */ \"./Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_5e75467b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_5e75467b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5e75467b\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"Samples/card/tile/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?");

/***/ }),

/***/ "./Samples/card/tile/App.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./Samples/card/tile/App.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./Samples/card/tile/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?");

/***/ }),

/***/ "./Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5e75467b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/css-loader??ref--4!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css& */ \"./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5e75467b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5e75467b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5e75467b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_index_js_ref_4_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_5e75467b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?");

/***/ }),

/***/ "./Samples/card/tile/App.vue?vue&type=template&id=5e75467b&scoped=true&":
/*!******************************************************************************!*\
  !*** ./Samples/card/tile/App.vue?vue&type=template&id=5e75467b&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5e75467b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=5e75467b&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/tile/App.vue?vue&type=template&id=5e75467b&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5e75467b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_5e75467b_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?");

/***/ }),

/***/ "./Samples/card/tile/data.json":
/*!*************************************!*\
  !*** ./Samples/card/tile/data.json ***!
  \*************************************/
/*! exports provided: cardBook, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"cardBook\\\":[{\\\"header_title\\\":\\\" ASP.NET MVC\\\",\\\"header_subtitle\\\":\\\"Nick Harrison\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_1.png\\\",\\\"tag\\\":\\\"server\\\"},\\\"cardContent\\\":\\\"ASP.NET Model View Controller design pattern to keep the data, views, and logic clearly separated in apps.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/ASPNET_MVC_Succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\" Node.js\\\",\\\"header_subtitle\\\":\\\"Emanuele DelBono \\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_2.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/nodejs\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\" React.js\\\",\\\"header_subtitle\\\":\\\"Dmitri Nesteruk\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_3.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"React is a JavaScript library that has revolutionized how developers design and think about views in web applications.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/reactjs_succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\" TypeScript\\\",\\\"header_subtitle\\\":\\\"Steve Fenton\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_4.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"Microsoft TypeScript extends many familiar features of .NET programming to JavaScript.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/typescript\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\" PHP\\\",\\\"header_subtitle\\\":\\\"Jose Roberto Olivas Mendoza\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_5.png\\\",\\\"tag\\\":\\\"server\\\"},\\\"cardContent\\\":\\\"Known for its straightforward simplicity, PHP is an open source, general-purpose scripting language oriented for web development.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/php_succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\" CSS3\\\",\\\"header_subtitle\\\":\\\"Peter Shaw\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_6.png\\\",\\\"tag\\\":\\\"ui\\\"},\\\"cardContent\\\":\\\"In CSS3 Succinctly, author Peter Shaw provides an overview of the latest features available for custom cascading style sheets.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/css3\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\" ASP.NET Core\\\",\\\"header_subtitle\\\":\\\"Simone Chiaretta and Ugo Lattanzi\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_7.png\\\",\\\"tag\\\":\\\"server\\\"},\\\"cardContent\\\":\\\"In ASP.NET Core Succinctly, seasoned authors Simone Chiaretta and Ugo Lattanzi update you on all the advances provided by Microsoft’s landmark framework.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/asp_net_core_succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\"Aurelia\\\",\\\"header_subtitle\\\":\\\"Matthew Duffield\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_8.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"Aurelia is a relatively new, open-source JavaScript library/framework that simplifies the creation of web-based applications.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/aurelia_succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\"ECMAScript 6 \\\",\\\"header_subtitle\\\":\\\"Matthew Duffield\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_9.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"ECMAScript 6 (ES6), also known as ECMAScript 2015, brings new functionality and features to the table that developers have been wanting for a long time.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/ecmascript_6_succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\"JavaScript\\\",\\\"header_subtitle\\\":\\\"Cody Lindley\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_10.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/javascript\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\"Knockout.js\\\",\\\"header_subtitle\\\":\\\"Ryan Hodson\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_11.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"Knockout.js Succinctly is intended for professional web developers who need to build dynamic, scalable user interfaces with minimal code.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/knockoutjs\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false},{\\\"header_title\\\":\\\"Angular 2\\\",\\\"header_subtitle\\\":\\\"Joseph D. Booth\\\",\\\"cardImage\\\":{\\\"url\\\":\\\"source/card/images/Tile_12.png\\\",\\\"tag\\\":\\\"client\\\"},\\\"cardContent\\\":\\\"Angular 2 is a massively popular JavaScript framework built to take advantage of component development in web apps.\\\",\\\"card_action_btn\\\":{\\\"action_btns\\\":[{\\\"tag\\\":\\\"a\\\",\\\"href\\\":\\\"https://www.syncfusion.com/ebooks/angular2_succinctly\\\",\\\"target\\\":\\\"_blank\\\",\\\"text\\\":\\\"Read More\\\"}],\\\"isVertical\\\":true},\\\"isHorizontal\\\":false}]}\");\n\n//# sourceURL=webpack:///./Samples/card/tile/data.json?");

/***/ }),

/***/ "./Samples/card/tile/main.js":
/*!***********************************!*\
  !*** ./Samples/card/tile/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/card/tile/App.vue\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: (h) => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n}).$mount('#app');\n\n\n//# sourceURL=webpack:///./Samples/card/tile/main.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.tile_layout.card-control-section .e-float-text[data-v-5e75467b] {\\n  font-size:14px;\\n}\\n.tile_layout.card-control-section .e-error[data-v-5e75467b] {\\n  min-height:150px;\\n}\\n.tile_layout.card-control-section .e-error-content[data-v-5e75467b] {\\n  margin:auto;\\n  height:inherit;\\n  font-size:18px;\\n  font-weight:500;\\n  color:inherit;\\n}\\n.tile_layout.card-control-section .row.filter .tile_search[data-v-5e75467b] {\\n  justify-content: flex-end;\\n}\\n.tile_layout.card-control-section .row .e-card[data-v-5e75467b] {\\n  text-align: left;\\n}\\n.tile_layout.card-control-section .control-wrapper[data-v-5e75467b] {\\n  padding: 0 20px;\\n}\\n.tile_layout.card-control-section .row.filter[data-v-5e75467b] {\\n  margin: 0;\\n}\\n.tile_layout.card-control-section .e-card .e-card-actions a[data-v-5e75467b] {\\n  border: 1px solid;\\n  display: block;\\n  margin: auto;\\n  width: 100px;\\n  border-radius: inherit;\\n}\\n.tile_layout.card-control-section .e-card .e-card-header .e-card-header-caption .e-card-header-title[data-v-5e75467b] {\\n  font-size: 18px;\\n}\\n.tile_layout.card-control-section .e-card .e-card-image[data-v-5e75467b] {\\n  height: 165px;\\n  width: 200px;\\n}\\n.tile_layout.card-control-section .row.filter .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n  display: inline-flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n.tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n  width: 100%;\\n  padding: 10px;\\n}\\n.card-control-section.tile_layout .e-card-layout[data-v-5e75467b] {\\n  margin: auto;\\n  max-width: 190px;\\n}\\n#source_link[data-v-5e75467b] {\\n  float: right;\\n  margin-right: 10px;\\n}\\n@media screen and (max-width: 768px) {\\n#source_link[data-v-5e75467b] {\\n      margin-right: 0px;\\n}\\n}\\n@media (min-width: 960px) {\\n.tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n      width: 25%;\\n}\\n.card-control-section.tile_layout .e-card-layout[data-v-5e75467b] {\\n      max-width: 850px;\\n}\\n}\\n@media (min-width: 540px) {\\n.tile_layout.card-control-section .row.filter[data-v-5e75467b] {\\n      display: flex;\\n}\\n.tile_layout.card-control-section .e-card .e-card-content[data-v-5e75467b] {\\n      min-height: 170px;\\n      max-height: 170px;\\n}\\n}\\n@media (max-width: 960px) and (min-width: 540px) {\\n.tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n      width: 50%;\\n}\\n.card-control-section.tile_layout .e-card-layout[data-v-5e75467b] {\\n      max-width: 410px;\\n}\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/jenkins/workspace/uts-vue-samples_development-RQMLK5PGLHGSPFC7THNO6ASUVCMFWGCU5B5WCI6HTNFVTOCNLGMQ/Samples/card/tile/App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css&\"],\"names\":[],\"mappings\":\";AACA;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,cAAc;CACf;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,UAAU;CACX;AACD;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,aAAa;EACb,uBAAuB;CACxB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,cAAc;EACd,aAAa;CACd;AACD;EACE,qBAAqB;EACrB,uBAAuB;EACvB,YAAY;CACb;AACD;EACE,YAAY;EACZ,cAAc;CACf;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;AACA;MACM,kBAAkB;CACvB;CACA;AACD;AACA;MACM,WAAW;CAChB;AACD;MACM,iBAAiB;CACtB;CACA;AACD;AACA;MACM,cAAc;CACnB;AACD;MACM,kBAAkB;MAClB,kBAAkB;CACvB;CACA;AACD;AACA;MACM,WAAW;CAChB;AACD;MACM,iBAAiB;CACtB;CACA\",\"file\":\"App.vue?vue&type=style&index=0&id=5e75467b&scoped=true&lang=css&\",\"sourcesContent\":[\"\\n.tile_layout.card-control-section .e-float-text[data-v-5e75467b] {\\n  font-size:14px;\\n}\\n.tile_layout.card-control-section .e-error[data-v-5e75467b] {\\n  min-height:150px;\\n}\\n.tile_layout.card-control-section .e-error-content[data-v-5e75467b] {\\n  margin:auto;\\n  height:inherit;\\n  font-size:18px;\\n  font-weight:500;\\n  color:inherit;\\n}\\n.tile_layout.card-control-section .row.filter .tile_search[data-v-5e75467b] {\\n  justify-content: flex-end;\\n}\\n.tile_layout.card-control-section .row .e-card[data-v-5e75467b] {\\n  text-align: left;\\n}\\n.tile_layout.card-control-section .control-wrapper[data-v-5e75467b] {\\n  padding: 0 20px;\\n}\\n.tile_layout.card-control-section .row.filter[data-v-5e75467b] {\\n  margin: 0;\\n}\\n.tile_layout.card-control-section .e-card .e-card-actions a[data-v-5e75467b] {\\n  border: 1px solid;\\n  display: block;\\n  margin: auto;\\n  width: 100px;\\n  border-radius: inherit;\\n}\\n.tile_layout.card-control-section .e-card .e-card-header .e-card-header-caption .e-card-header-title[data-v-5e75467b] {\\n  font-size: 18px;\\n}\\n.tile_layout.card-control-section .e-card .e-card-image[data-v-5e75467b] {\\n  height: 165px;\\n  width: 200px;\\n}\\n.tile_layout.card-control-section .row.filter .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n  display: inline-flex;\\n  flex-direction: column;\\n  width: 100%;\\n}\\n.tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n  width: 100%;\\n  padding: 10px;\\n}\\n.card-control-section.tile_layout .e-card-layout[data-v-5e75467b] {\\n  margin: auto;\\n  max-width: 190px;\\n}\\n#source_link[data-v-5e75467b] {\\n  float: right;\\n  margin-right: 10px;\\n}\\n@media screen and (max-width: 768px) {\\n#source_link[data-v-5e75467b] {\\n      margin-right: 0px;\\n}\\n}\\n@media (min-width: 960px) {\\n.tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n      width: 25%;\\n}\\n.card-control-section.tile_layout .e-card-layout[data-v-5e75467b] {\\n      max-width: 850px;\\n}\\n}\\n@media (min-width: 540px) {\\n.tile_layout.card-control-section .row.filter[data-v-5e75467b] {\\n      display: flex;\\n}\\n.tile_layout.card-control-section .e-card .e-card-content[data-v-5e75467b] {\\n      min-height: 170px;\\n      max-height: 170px;\\n}\\n}\\n@media (max-width: 960px) and (min-width: 540px) {\\n.tile_layout.card-control-section .col-xs-6.col-sm-6.col-lg-6.col-md-6[data-v-5e75467b] {\\n      width: 50%;\\n}\\n.card-control-section.tile_layout .e-card-layout[data-v-5e75467b] {\\n      max-width: 410px;\\n}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?./node_modules/css-loader??ref--4!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./Samples/card/tile/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/tile/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-dropdowns */ \"./node_modules/@syncfusion/ej2-vue-dropdowns/index.js\");\n/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-data */ \"./node_modules/@syncfusion/ej2-data/index.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.json */ \"./Samples/card/tile/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./Samples/card/tile/data.json\", 1);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(_syncfusion_ej2_vue_dropdowns__WEBPACK_IMPORTED_MODULE_1__[\"MultiSelectPlugin\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  mounted: function() {\n    this.emptyData = true;\n    this.categoryResult = [];\n    this.searchEle = document.getElementById('search_Card');\n    this.multiselectComp = document.getElementById('local').ej2_instances[0];\n  },\n  data: function() {\n    return {\n      cardData: _data_json__WEBPACK_IMPORTED_MODULE_3__[\"cardBook\"],\n      multiSelectFields: { text: 'Name', value: 'Code' },\n      filterCategory: [\n        { Name: 'Client-Side', Code: 'client' },\n        { Name: 'Server-Side', Code: 'server' },\n        { Name: 'Front-End', Code: 'ui' }\n      ]\n    }\n  },\n  methods: {\n    onInputKeyup: function(e) {\n      if (e.code === 'Tab' || e.code === 'Escape' || e.code === 'ShiftLeft' || (e.code === 'Backspace' && this.emptyData)) {\n        return;\n      }\n      var inputVal = e.target.value;\n      inputVal.length === 0 ? this.emptyData = true : this.emptyData = false;\n      this.filterData()\n    },\n    filterData: function() {\n      var self = this;\n      var result = [];\n      this.categoryResult = [];\n      if (this.multiselectComp.value !== null && this.multiselectComp.value.length > 0) {\n        var categoryData = this.multiselectComp.value.toString();\n        var category = categoryData.split(',');\n        category.forEach(function (key) {\n          var datas = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"DataManager\"](_data_json__WEBPACK_IMPORTED_MODULE_3__[\"cardBook\"]).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"Query\"]().where('cardImage.tag', 'Contains', key, true));\n          if (datas.length === 0) { return; }\n          datas.forEach(function (item) {\n            self.categoryResult.push(item);\n          });\n        });\n        result = this.categoryResult;\n      } \n      if (this.searchEle.value.length > 0) {\n        var predicate = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"Predicate\"]('cardContent', 'Contains', this.searchEle.value, true);\n        predicate = predicate.or('cardImage.title', 'Contains', this.searchEle.value, true).or('header_title', 'Contains', this.searchEle.value, true).or('header_subtitle', 'Contains', this.searchEle.value, true);\n        var datas = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"DataManager\"]((this.multiselectComp.value === null || this.multiselectComp.value.length === 0) ? _data_json__WEBPACK_IMPORTED_MODULE_3__[\"cardBook\"] : this.categoryResult).executeLocal(new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_2__[\"Query\"]().where(predicate));\n        if (datas.length === 0) {\n          result = [];\n        } else {\n          this.categoryResult = [];\n          datas.forEach(function (item) {\n            self.categoryResult.push(item);\n          });\n          result = this.categoryResult;\n        }\n      }\n      if ((this.multiselectComp.value === null || this.multiselectComp.value.length === 0) && this.searchEle.value.length === 0) {\n        result = _data_json__WEBPACK_IMPORTED_MODULE_3__[\"cardBook\"];\n      }\n      this.cardData = result;\n    }\n  }\n}));\n\n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./Samples/card/tile/App.vue?vue&type=template&id=5e75467b&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./Samples/card/tile/App.vue?vue&type=template&id=5e75467b&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"control-section card-control-section tile_layout\"},[_c('div',{staticClass:\"row filter\"},[_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6\"},[_c('div',{staticClass:\"e-float-input\"},[_c('input',{attrs:{\"type\":\"text\",\"required\":\"\",\"id\":\"search_Card\"},on:{\"keyup\":_vm.onInputKeyup}}),_vm._v(\" \"),_c('span',{staticClass:\"e-float-line\"}),_vm._v(\" \"),_c('label',{staticClass:\"e-float-text\"},[_vm._v(\"Enter text to search\")])])]),_vm._v(\" \"),_c('div',{staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6 tile_search\"},[_c('ejs-multiselect',{attrs:{\"id\":\"local\",\"dataSource\":_vm.filterCategory,\"fields\":_vm.multiSelectFields,\"placeholder\":\"Search by categories\",\"tagging\":_vm.filterData,\"removed\":_vm.filterData}})],1)]),_vm._v(\" \"),_c('div',{staticClass:\"row e-card-layout\",staticStyle:{\"text-align\":\"center\"}},[_c('div',{staticClass:\"row\"},[(_vm.cardData.length === 0 || _vm.cardData === null)?_c('div',{staticClass:\"row error\"},[_c('div',{staticClass:\"e-error-content\"},[_vm._v(\"\\n          No results found. Please try a different search.\\n        \")])]):_vm._e(),_vm._v(\" \"),_vm._l((_vm.cardData),function(item,index){return _c('div',{key:index,staticClass:\"col-xs-6 col-sm-6 col-lg-6 col-md-6\"},[_c('div',{staticClass:\"e-card\",class:{ 'e-card-horizontal': item.isHorizontal }},[(item.cardImage !== null)?_c('div',{staticClass:\"e-card-image\",style:({ backgroundImage: 'url(' + item.cardImage.url + ')' })}):_vm._e(),_vm._v(\" \"),(item.header_title !== null || item.header_subtitle !== null)?_c('div',{staticClass:\"e-card-header\"},[(item.header_title !== null || item.header_subtitle !== null)?_c('div',{staticClass:\"e-card-header-caption\"},[(item.header_title !== null)?_c('div',{staticClass:\"e-card-header-title\"},[_vm._v(_vm._s(item.header_title))]):_vm._e(),_vm._v(\" \"),(item.header_subtitle !== null)?_c('div',{staticClass:\"e-card-sub-title\"},[_vm._v(_vm._s(item.header_subtitle))]):_vm._e()]):_vm._e()]):_vm._e(),_vm._v(\" \"),(item.cardContent !== null)?_c('div',{staticClass:\"e-card-content\"},[_vm._v(\" \"+_vm._s(item.cardContent)+\" \")]):_vm._e(),_vm._v(\" \"),(item.card_action_btn !== null)?_c('div',{staticClass:\"e-card-actions\",class:{ 'e-card-vertical': item.card_action_btn.isVertical }},_vm._l((item.card_action_btn.action_btns),function(btn,i){return _c('div',{key:i},[(btn.tag === 'a')?_c('a',{attrs:{\"href\":btn.href,\"target\":btn.target}},[_vm._v(_vm._s(btn.text))]):_c('button',{staticClass:\"e-card-btn\"},[_vm._v(_vm._s(btn.text))])])}),0):_vm._e()])])})],2)]),_vm._v(\" \"),_vm._m(0),_vm._v(\" \"),_vm._m(1),_vm._v(\" \"),_vm._m(2)])}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"source_link\"}},[_vm._v(\"\\n    Source: \"),_c('a',{attrs:{\"href\":\"https://www.syncfusion.com/ebooks/\",\"target\":\"_blank\"}},[_vm._v(\"https://www.syncfusion.com/ebooks\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"action-description\"}},[_c('p',[_vm._v(\"This sample demonstrates filter and search of the \"),_c('code',[_vm._v(\"card\")]),_vm._v(\" based on categories, and text containing the card. You can use search box to search cards, and you can filter choosing categories in multi-select component.\")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{\"id\":\"description\"}},[_c('p',[_vm._v(\"Card is a small container in which user can show defined content in specific structure and it is flexible and extensible. This sample demonstrates to render the \"),_c('code',[_vm._v(\"Card\")]),_vm._v(\" Using \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/common/template-engine/\"}},[_vm._v(\"Template Engine\")]),_vm._v(\" and it can be filtered based on \"),_c('a',{attrs:{\"target\":\"_blank\",\"href\":\"https://ej2.syncfusion.com/documentation/data/getting-started/\"}},[_vm._v(\"data Manager\")]),_vm._v(\".\")]),_vm._v(\" \"),_c('p',[_vm._v(\"More information about Card can be found in this\"),_c('a',{attrs:{\"href\":\"https://ej2.syncfusion.com/vue/documentation/card/getting-started/\",\"target\":\"_blank\"}},[_vm._v(\" documentation\")]),_vm._v(\" section.\")])])}]\nrender._withStripped = true\n\n\n//# sourceURL=webpack:///./Samples/card/tile/App.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

/******/ });